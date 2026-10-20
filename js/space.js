(() => {
  const cv = document.getElementById('space');
  const cx = cv.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const TINTS = ['255,255,255', '200,230,255', '160,210,255'];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;

  let w = 0, h = 0, hz = 0, stars = [], last = 0;

  function build() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight; hz = h * 0.66; // hz = horizon line
    cv.width = w * dpr; cv.height = h * dpr;
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const n = Math.min(280, Math.round(w * h / 5500));
    stars = [];
    for (let i = 0; i < n; i++) {
      let x, y;
      if (i % 3 === 0) {
        const t = Math.random();
        x = t * w; y = hz * (0.85 - 0.7 * t) + gauss() * h * 0.09;
      } else { x = rnd(0, w); y = rnd(0, hz); }
      if (y < 0 || y > hz - 6) y = rnd(0, hz - 6);
      stars.push({
        x, y, a: 1,
        r: rnd(0.4, 1.5) * (i % 25 === 0 ? 1.6 : 1),
        tint: TINTS[i % 3],
        ph: rnd(0, 6.28), sp: rnd(0.4, 1.4), v: rnd(1, 4), // v = drift px/sec
      });
    }
  }

  function frame(ms) {
    const t = reduce ? 0 : ms / 1000;
    const dt = last ? Math.min((ms - last) / 1000, 0.1) : 0;
    last = ms;
    cx.clearRect(0, 0, w, h);

    // sky
    for (const s of stars) {
      s.x += s.v * dt; if (s.x > w + 2) s.x = -2;
      s.a = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.sp + s.ph));
      cx.fillStyle = `rgba(${s.tint},${s.a})`;
      cx.beginPath(); cx.arc(s.x, s.y, s.r, 0, 6.283); cx.fill();
    }

    // pool body
    const ph = h - hz;
    const g = cx.createLinearGradient(0, hz, 0, h);
    g.addColorStop(0, 'rgba(110,180,240,.16)');
    g.addColorStop(0.35, 'rgba(30,80,140,.14)');
    g.addColorStop(1, 'rgba(2,6,16,.65)');
    cx.fillStyle = g; cx.fillRect(0, hz, w, ph);

    // horizon glow
    const hl = cx.createLinearGradient(0, 0, w, 0);
    hl.addColorStop(0, 'rgba(200,235,255,0)');
    hl.addColorStop(0.5, 'rgba(200,235,255,.5)');
    hl.addColorStop(1, 'rgba(200,235,255,0)');
    cx.fillStyle = hl; cx.fillRect(0, hz - 1, w, 1.5);
    cx.save(); cx.translate(w / 2, hz); cx.scale(1, 0.12);
    const rg = cx.createRadialGradient(0, 0, 0, 0, 0, w * 0.5);
    rg.addColorStop(0, 'rgba(170,220,255,.28)'); rg.addColorStop(1, 'rgba(170,220,255,0)');
    cx.fillStyle = rg; cx.beginPath(); cx.arc(0, 0, w * 0.5, 0, 6.283); cx.fill();
    cx.restore();

    // star reflections, swaying like liquid
    for (const s of stars) {
      const ry = hz + (hz - s.y) * 0.5 + 2;
      if (ry > h) continue;
      const depth = ry - hz;
      const sway = Math.sin(t * 0.8 + ry * 0.045 + s.x * 0.01) * (1.5 + depth * 0.02);
      cx.fillStyle = `rgba(${s.tint},${s.a * 0.38 * (1 - depth / ph)})`;
      cx.fillRect(s.x + sway - s.r * 0.6, ry, s.r * 1.3, s.r * 2.5 + depth * 0.05);
    }

    // slow ripple lines
    cx.lineWidth = 1;
    for (let i = 1; i <= 7; i++) {
      const y0 = hz + ph * Math.pow(i / 7, 1.7);
      cx.strokeStyle = `rgba(190,230,255,${0.07 * (1 - i / 9)})`;
      cx.beginPath();
      for (let x = 0; x <= w; x += 24) {
        const y = y0 + Math.sin(x * 0.012 * (1 + i * 0.1) + t * 0.5 * (i % 2 ? 1 : -1) + i) * (1.5 + i * 0.6);
        x ? cx.lineTo(x, y) : cx.moveTo(x, y);
      }
      cx.stroke();
    }

    if (!reduce) requestAnimationFrame(frame);
  }

  build();
  requestAnimationFrame(frame);

  let timer;
  addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // ignore mobile address-bar height jitter
      if (innerWidth === w && Math.abs(innerHeight - h) < 150) return;
      build();
      if (reduce) requestAnimationFrame(frame);
    }, 150);
  });
})();
