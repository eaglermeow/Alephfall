const $ = s => document.querySelector(s);
const C = CONFIG;

document.title = C.brand;
$('#brand').textContent = C.brand;
$('#eyebrow').textContent = C.hero.eyebrow;
$('#title').textContent = C.hero.title;
$('#lead').textContent = C.hero.text;
$('#footer').textContent = C.footer;

$('#navLinks').innerHTML = C.nav
  .map(n => `<a href="${n.href}">${n.label}</a>`).join('');

$('#libraryGrid').innerHTML = C.library.map(c => {
  const link = c.link || '#access';
  const label = link.startsWith('#') ? 'Unlock' : 'Open';
  return `<article class="card glass"><span class="tag">${c.tag}</span><h3>${c.title}</h3><p>${c.text}</p><a class="btn sm" href="${link}">${label}</a></article>`;
}).join('');

$('#dropsList').innerHTML = C.drops
  .map(d => `<a class="drop glass" href="${d.url || '#access'}"><b>${d.name}</b><span>${d.meta}</span></a>`).join('');

const codes = Object.fromEntries(
  Object.entries(C.codes).map(([k, v]) => [
    k.trim().toUpperCase(), 
    typeof v === 'string' ? { url: v, mode: 'embed' } : v // Fallback if a string is used
  ])
);

const input = $('#code'), msg = $('#msg'), gate = $('#gate'), warp = $('#warp');

function say(text, cls = '') { msg.textContent = text; msg.className = 'msg ' + cls; }

function submit() {
  const v = input.value.trim().toUpperCase();
  if (!v) return say('Enter your invite code.', 'err');
  
  const codeConfig = codes[v];
  if (!codeConfig) {
    say('Code not recognised. Check it and try again.', 'err');
    gate.classList.remove('shake'); void gate.offsetWidth; gate.classList.add('shake');
    return;
  }
  
  say('Code accepted. Opening…', 'ok');
  warp.classList.add('on');
  
  setTimeout(() => {
    if (codeConfig.mode === 'redirect') {
      location.href = codeConfig.url;
    } else {
      embe  dUrl(codeConfig.url);
    }
  }, 900);
}

$('#enter').addEventListener('click', submit);
input.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });