import{Bn as e,Gn as t,Hn as n,In as r,Jn as i,Ln as a,Nn as o,Un as s,Vn as c,Vr as l,Xn as u,di as d,dn as f,pn as p,qn as m}from"./index-B4QD0Fte.js";import{r as h,t as g}from"./colord-BshiezEt.js";var _=g(`#4ade80`),v=_.toHex(),y=_.darken(.125).toHex(),ee=`#4785b5`,te=`#bedc8a`,ne=.588,b=.588,x=`#ffffff`,re=O(v,.65),ie=O(v,.1),S=[`#ff0000`,`#ff8000`,`#ffff00`,`#ffffff`],ae=S.map((e,t)=>pe(e,S[(t+2)%4])),C=1.2,oe=.8,se=6,ce=`M13 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h11zM6 20H4v-2h2zm0-4H4v-2h2zm0-4H4v-2h2zm5 8H8v-2h3zm0-4H8v-2h3zm0-4H8v-2h3zm3.5-6H6V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7h-3V6.5a.5.5 0 0 0-.5-.5zm7.5 7v9h-2.5v-4h-2v4H15v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1z`,w=[`..D..`,`.DLD.`,`DLLLD`,`.DLD.`,`..D..`],le=[`.....L.....`,`..LLLDLLL..`,`.LLLDDDLLL.`,`.LLDDDDDLL.`,`.LDDDLDDDL.`,`LDDDLLLDDDL`,`.LDDDLDDDL.`,`.LLDDDDDLL.`,`.LLLDDDLLL.`,`..LLLDLLL..`,`.....L.....`],ue=[`.....`,`..D..`,`.DDD.`,`..D..`,`.....`],de=[`.....`,`.LLL.`,`.LDL.`,`.LLL.`,`.....`],fe=[`....M....`,`..MMMMM..`,`.MMMLMMM.`,`.MMLLLMM.`,`MMLLLLLMM`,`.MMLLLMM.`,`.MMMLMMM.`,`..MMMMM..`,`....M....`],T=1,E=2,D=5;function O(e,t){let n=g(e).toHsv();return g({h:n.h,s:n.s,v:n.v*t}).toHex()}function pe(e,t,n=.5){let r=g(e).toRgb(),i=g(t).toRgb();return g({r:r.r+(i.r-r.r)*n,g:r.g+(i.g-r.g)*n,b:r.b+(i.b-r.b)*n}).toHex()}function me(e){return e.filter(e=>g(e).isValid()).map(e=>g(e).toHex())}var k=e=>({fill:e,anim:t});function A(e,n,r,i){let a=r.length;if(a===1||n.type===`spiral`)return{paint:k(r[0]),defs:t};if(n.type===`transition`){let e=n.frequency>0?m`<animate
            attributeName="fill"
            values=${[...r,r[0]].join(`;`)}
            dur="${a/n.frequency}s"
            repeatCount="indefinite"
          ></animate>`:t;return{paint:{fill:r[0],anim:e},defs:t}}let o=Math.max(n.colorSize,.001)*a,[s,c,l,u]=i.space===`world`?[0,0,o/2,o/2]:[i.x,i.y,i.size,i.size],d=n.movementSpeed,f=d===0?t:m`<animateTransform
          attributeName="gradientTransform"
          type="translate"
          from="0 0"
          to="${Math.sign(d)*l} ${Math.sign(d)*u}"
          dur="${Math.min(Math.max(o/Math.abs(d),oe),se)}s"
          repeatCount="indefinite"
        ></animateTransform>`,p=m`<linearGradient
    id=${e}
    gradientUnits="userSpaceOnUse"
    spreadMethod="repeat"
    x1=${s}
    y1=${c}
    x2=${s+l}
    y2=${c+u}
  >
    ${r.map((e,t)=>m`<stop offset=${t/a} stop-color=${e}></stop>`)}
    <stop offset="1" stop-color=${r[0]}></stop>
    ${f}
  </linearGradient>`;return{paint:k(`url(#${e})`),defs:p}}function he(e,t,n,r){let i=``;return e.forEach((e,a)=>{for(let o=0;o<e.length;o++)e[o]===t&&(i+=`M${n+o} ${r+a}h1v1h-1z`)}),i}function j(e,t,n,r){let i=t-Math.floor(e[0].length/2),a=n-Math.floor(e.length/2);return m`<g shape-rendering="crispEdges">
    ${Object.keys(r).map(t=>{let n=r[t];return m`<path d=${he(e,t,i,a)} fill=${n.fill}>
        ${n.anim}
      </path>`})}
  </g>`}function M(e){let t=``;for(let n=1;n<e.length;n++){let[r,i]=e[n-1],[a,o]=e[n],s=Math.abs(a-r),c=-Math.abs(o-i),l=r<a?1:-1,u=i<o?1:-1,d=s+c;for(;t+=`M${r} ${i}h1v1h-1z`,!(r===a&&i===o);){let e=2*d;e>=c&&(d+=c,r+=l),e<=s&&(d+=s,i+=u)}}return t}function N(e,t,n){let r=1/3,i=``;for(let a=0;a<3;a++)for(let o=0;o<3;o++){let s=o===1&&a===1;e===T?s||=o===0||o===2:e===E?s||=a===0||a===2:e===D&&(s||=a===2||o===0),s&&(i+=`M${(t+o*r).toFixed(4)} ${(n+a*r).toFixed(4)}h${r.toFixed(4)}v${r.toFixed(4)}h-${r.toFixed(4)}z`)}return i}function ge(e,t,n,r,i,a,o){let s=[];for(let c=e;c<=t;c+=.5){let e=Math.min((t-c)/a,1),l=n+r*Math.sin(Math.PI/2*e)*Math.sin(c/i*2*Math.PI+o);s.push(`${c} ${l.toFixed(2)}`)}return`M ${s.join(` L `)}`}function P(e,t,n){return i`<svg
    class="block w-full h-full"
    viewBox="0 0 ${e} ${e}"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>${t}</defs>
    ${n}
  </svg>`}var F=e=>m`<rect width=${e} height=${e} fill=${ee}></rect>`,I=e=>m`<rect width=${e} height=${e} fill=${te}></rect>
    <rect width=${e} height=${e} fill=${v} fill-opacity=${ne}></rect>`;function L(e,n,r){let i=[[1,21],[7,16],[12,13],[18,8]],{paint:a,defs:o}=r.length>0?A(e,n,r,{space:`world`}):{paint:k(v),defs:t};return P(24,o,m`${F(24)}
      <path data-trail d=${M(i)} fill=${a.fill} opacity=${b} shape-rendering="crispEdges">
        ${a.anim}
      </path>
      ${j(w,18,8,{L:k(v),D:k(y)})}`)}function _e(e,n,r){let{paint:i,defs:a}=r.length>0?A(e,n,r,{space:`world`}):{paint:k(v),defs:t},o=t;if(n.type===`spiral`&&r.length>0){let e=Math.min(Math.max(Math.round(n.strands),1),8),i=Math.min(Math.max(n.radius,1),8),a=n.rotationSpeed>0?2*Math.PI/n.rotationSpeed:0;o=m`<g data-spiral fill="none" stroke-linecap="round">
      ${Array.from({length:e},(n,o)=>{let s=ge(0,17,12.5,i,10,8,o*2*Math.PI/e),c=r[o%r.length],l=-o*a/e,u=e=>a>0?m`<animate attributeName="opacity" values=${e} dur="${a}s" begin="${l}s" repeatCount="indefinite"></animate>`:t;return m`<g data-strand>
          ${u(`1;0.35;1`)}
          <path d=${s} stroke=${c} stroke-width="2.4" opacity="0.55" style="filter:blur(0.6px);mix-blend-mode:screen"></path>
          <path d=${s} stroke=${c} stroke-width="0.9"></path>
          <path d=${s} stroke="#fff" stroke-width="0.35" opacity="0.9">
            ${u(`0.9;0;0.9`)}
          </path>
        </g>`})}
    </g>`}let s=e=>({fill:e[0],anim:m`<animate attributeName="fill" values=${e.join(`;`)} dur="${C}s" calcMode="discrete" repeatCount="indefinite"></animate>`});return P(24,a,m`${F(24)}
      <path data-trail d=${M([[0,12],[17,12]])} fill=${i.fill} opacity=${b} shape-rendering="crispEdges">
        ${i.anim}
      </path>
      ${o}
      ${j(fe,17,12,{L:s(S),M:s(ae)})}`)}function ve(e,n,r){let{paint:i,defs:a}=r.length>0?A(e,n,r,{space:`icon`,x:-.5,y:-.5,size:1}):{paint:k(re),defs:t},o=.59;return P(1,m`${a}
      <clipPath id="${e}-fill"><circle cx="0.5" cy="0.5" r="0.39"></circle></clipPath>`,m`${I(1)}
      <circle cx="0.5" cy="0.5" r="0.45" fill=${ie}></circle>
      <circle data-fill cx="0.5" cy="0.5" r="0.39" fill=${i.fill}>${i.anim}</circle>
      <g clip-path="url(#${e}-fill)">
        <g
          transform="translate(${(1-o)/2} ${(1-o)/2}) scale(${o/24})"
        >
          <path data-glyph d=${ce} fill="#fff"></path>
        </g>
      </g>`)}function ye(e,n,r){let{paint:i,defs:a}=r.length>0?A(e,n,r,{space:`icon`,x:2,y:2,size:11}):{paint:k(v),defs:t};return P(15,a,m`${F(15)}
      ${j(le,7,7,{L:i,D:k(y)})}`)}function be(e,n,r){let i=r.length>0?A(e,n,r,{space:`world`}):{paint:k(v),defs:t},a=r.length>0?A(`${e}-dark`,n,r.map(e=>xe(e,.6)),{space:`world`}):{paint:k(y),defs:t},o=``;for(let e=0;e<24;e++)o+=N(E,e,11);return P(24,m`${i.defs}${a.defs}`,m`${I(24)}
      <path data-rails d=${o} fill=${x}></path>
      ${[13,15,17].map(e=>j(de,e,11,{L:i.paint,D:a.paint}))}
      ${j(ue,19,11,{D:a.paint})}`)}function xe(e,t){let n=g(e).toRgb();return g({r:n.r*t,g:n.g*t,b:n.b*t}).toHex()}function Se(e,n,r){let{paint:i,defs:a}=r.length>0?A(e,n,r,{space:`world`}):{paint:k(x),defs:t},o=``;for(let e=0;e<15;e++)o+=N(E,e,8);o+=N(D,15,8);for(let e=9;e<24;e++)o+=N(T,15,e);return P(24,a,m`${I(24)}
      <path data-rails d=${o} fill=${i.fill}>${i.anim}</path>`)}var Ce=0,R=class extends s{constructor(...e){super(...e),this.effect=null,this.uid=`effect-scene-${++Ce}`}createRenderRoot(){return this}render(){let e=this.effect;if(e===null)return i``;let t=me(e.attributes.colors),n;switch(e.effectType){case`transportShipTrail`:n=L(this.uid,e.attributes,t);break;case`nukeTrail`:n=_e(this.uid,e.attributes,t);break;case`structures`:n=ve(this.uid,e.attributes,t);break;case`warship`:n=ye(this.uid,e.attributes,t);break;case`train`:n=be(this.uid,e.attributes,t);break;case`railroad`:n=Se(this.uid,e.attributes,t);break}return i`<div
      data-effect-scene=${e.effectType}
      class="w-full h-full rounded-md overflow-hidden"
    >
      ${n}
    </div>`}};f([c({attribute:!1})],R.prototype,`effect`,void 0),R=f([n(`effect-scene`)],R);var z=`#9919ff`,B=class extends s{constructor(...e){super(...e),this.explosion=null,this.animations=[]}createRenderRoot(){return this}render(){return i`<div
      class="w-full h-full flex items-center justify-center overflow-hidden"
    >
      <div data-ring class="rounded-full" style="width:85%;height:85%;"></div>
    </div>`}updated(e){if(!e.has(`explosion`))return;for(let e of this.animations)e.cancel();this.animations=[];let t=this.explosion,n=this.querySelector(`[data-ring]`);if(!t||!n)return;let r=t.colors.length>0?t.colors:[z],i=n.clientWidth||100,a=t.size>0?t.thickness/t.size:.1,o=Math.min(Math.max(a*i,2),i/2);n.style.borderStyle=`solid`,n.style.borderWidth=`${o}px`,n.style.borderColor=r[0];let s=Math.min(Math.max(t.size/Math.max(t.speed,.001),.6),3);if(this.animations.push(n.animate([{transform:`scale(0.1)`,opacity:1},{transform:`scale(1)`,opacity:0}],{duration:s*1e3,iterations:1/0,easing:`linear`})),r.length>=2&&t.transitionSpeed!==0){let e=t.transitionSpeed>0?r:[...r].reverse();this.animations.push(n.animate([...e,e[0]].map(e=>({borderColor:e})),{duration:r.length/Math.abs(t.transitionSpeed)*1e3,iterations:1/0,easing:`linear`}))}}disconnectedCallback(){super.disconnectedCallback();for(let e of this.animations)e.cancel();this.animations=[]}};f([c({attribute:!1})],B.prototype,`explosion`,void 0),B=f([n(`shockwave-swatch`)],B);function V(e){let t=Math.sin(e*12.9898+78.233)*43758.5453;return t-Math.floor(t)}var H=class extends s{constructor(...e){super(...e),this.explosion=null,this.animations=[]}createRenderRoot(){return this}dotCount(){let e=this.explosion,t=e?.type===`sparkles`?e.density:10;return Math.round(Math.min(Math.max(t,4),40))}render(){return i`<div data-box class="relative w-full h-full overflow-hidden">
      ${Array.from({length:this.dotCount()},(e,t)=>{let n=V(t)*2*Math.PI,r=Math.sqrt(V(t+101))*42;return i`<div
          data-dot
          class="absolute rounded-full"
          style="left:${50+Math.cos(n)*r}%;top:${50+Math.sin(n)*r}%;transform:translate(-50%,-50%);opacity:0;"
        ></div>`})}
    </div>`}updated(e){if(!e.has(`explosion`))return;for(let e of this.animations)e.cancel();this.animations=[];let t=this.explosion,n=this.querySelector(`[data-box]`);if(!t||!n)return;let r=this.querySelectorAll(`[data-dot]`);if(r.length===0)return;let i=t.colors.length>0?t.colors:[z],a=n.clientWidth||100,o=t.size>0?t.thickness/t.size:.05,s=Math.min(Math.max(o*a,3),a/4),c=Math.min(Math.max(t.size/Math.max(t.speed,.001),.6),3);this.animations.push(n.animate([{transform:`scale(0.05)`,opacity:1,offset:0},{transform:`scale(1)`,opacity:1,offset:.75},{transform:`scale(1)`,opacity:0,offset:1}],{duration:c*1e3,iterations:1/0,easing:`linear`})),r.forEach((e,n)=>{let r=s*(.5+V(n+307));if(e.style.width=`${r}px`,e.style.height=`${r}px`,e.style.backgroundColor=i[n%i.length],this.animations.push(e.animate([{opacity:1},{opacity:.65},{opacity:1}],{duration:(.5+V(n+211)*.6)*1e3,iterations:1/0,easing:`ease-in-out`})),i.length>=2&&t.transitionSpeed!==0){let r=t.transitionSpeed>0?i:[...i].reverse(),a=n%r.length,o=[...r.slice(a),...r.slice(0,a)];this.animations.push(e.animate([...o,o[0]].map(e=>({backgroundColor:e})),{duration:i.length/Math.abs(t.transitionSpeed)*1e3,iterations:1/0,easing:`linear`}))}})}disconnectedCallback(){super.disconnectedCallback();for(let e of this.animations)e.cancel();this.animations=[]}};f([c({attribute:!1})],H.prototype,`explosion`,void 0),H=f([n(`sparkles-swatch`)],H);function we(e,t,n){return e===null?Te():i`<pattern-preview-canvas
    .pattern=${e}
    .targetWidth=${t}
    .targetHeight=${n}
  ></pattern-preview-canvas>`}var U=class extends s{constructor(...e){super(...e),this.targetWidth=150,this.targetHeight=150,this.paintedKey=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.classList.add(`block`,`h-full`,`w-full`),this.hasUpdated&&this.paint()}disconnectedCallback(){super.disconnectedCallback();let e=this.querySelector(`canvas`);e&&(e.width=0,e.height=0),this.paintedKey=null}render(){return i`<canvas
      role="img"
      aria-label=${r(`cosmetics.pattern_preview`)}
      class="w-full h-full object-contain [image-rendering:pixelated] pointer-events-none"
    ></canvas>`}updated(e){super.updated(e),this.paint()}paint(){let e=this.querySelector(`canvas`),t=Oe(this.pattern,this.targetWidth,this.targetHeight);e===null||t===this.paintedKey||(this.paintedKey=ke(e,this.pattern,this.targetWidth,this.targetHeight)?t:null)}};f([c({attribute:!1})],U.prototype,`pattern`,void 0),f([c({attribute:!1})],U.prototype,`targetWidth`,void 0),f([c({attribute:!1})],U.prototype,`targetHeight`,void 0),U=f([n(`pattern-preview-canvas`)],U);function Te(){return i`
    <div
      class="md:hidden flex items-center justify-center h-full w-full bg-white rounded overflow-hidden relative border border-[#ccc] box-border"
    >
      <div
        class="grid grid-cols-2 grid-rows-2 gap-0 w-[calc(100%-1px)] h-[calc(100%-2px)] box-border"
      >
        <div class="bg-white border border-black/10 box-border"></div>
        <div class="bg-white border border-black/10 box-border"></div>
        <div class="bg-white border border-black/10 box-border"></div>
        <div class="bg-white border border-black/10 box-border"></div>
      </div>
    </div>
    <div
      class="hidden md:flex items-center justify-center h-full w-full rounded overflow-hidden relative text-center p-1"
    >
      <span
        class="text-[10px] font-black text-white/40 uppercase leading-none break-words w-full"
      >
        ${r(`territory_patterns.select_skin`)}
      </span>
    </div>
  `}var Ee=new h(`#ffffff`).toRgb(),De=new h(`#000000`).toRgb();function Oe(e,t,n){return[e.name,e.patternData,e.colorPalette?.primaryColor??`undefined`,e.colorPalette?.secondaryColor??`undefined`,t,n].join(`-`)}function ke(e,t,n,r){let i;try{i=new l({name:t.name,patternData:t.patternData,colorPalette:t.colorPalette},d)}catch(t){return console.error(`Error decoding pattern`,t),e.width=0,e.height=0,!1}let a=i.scaledWidth(),o=i.scaledHeight();n=n===void 0?a:Math.max(1,Math.floor(n/a))*a,r=r===void 0?o:Math.max(1,Math.floor(r/o))*o,e.width=n,e.height=r;let s=e.getContext(`2d`,{willReadFrequently:!0});if(!s)throw Error(`2D context not supported`);let c=s.createImageData(n,r),u=c.data,f=t.colorPalette?.primaryColor?new h(t.colorPalette.primaryColor).toRgb():Ee,p=t.colorPalette?.secondaryColor?new h(t.colorPalette.secondaryColor).toRgb():De,m=0;for(let e=0;e<r;e++)for(let t=0;t<n;t++){let n=i.isPrimary(t,e)?f:p;u[m++]=n.r,u[m++]=n.g,u[m++]=n.b,u[m++]=255}return s.putImageData(c,0,0),!0}function Ae(e,t){return`https://x.com/intent/post?url=${encodeURIComponent(e)}&text=${encodeURIComponent(t)}`}function je(e,t){return`${t}\n${e}`}function W(){return typeof navigator<`u`&&typeof navigator.share==`function`&&a.isTouch}var G=`relative inline-flex min-h-[38px] items-center gap-2 rounded-[10px] border px-3.5 text-[13px] font-semibold text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/30`,K=`${G} border-white/15 bg-white/5 hover:bg-white/10`,Me=`${G} border-white/20 bg-zinc-900/85 shadow-lg backdrop-blur-sm hover:bg-zinc-800/95`,Ne=80,q=400,J=.95,Pe=[{offset:0,opacity:J,transform:`scale(1)`,easing:`linear`},{offset:Ne/q,opacity:J,transform:`scale(1)`,easing:`ease-out`},{offset:1,opacity:0,transform:`scale(1.04)`}],Fe=`pointer-events-none absolute -inset-1 rounded-[14px] border-2 border-solid border-[rgba(250,204,21,0.95)] opacity-0 shadow-[0_0_12px_rgba(250,204,21,0.45)]`;function Y(){return typeof window>`u`||typeof window.matchMedia!=`function`?!1:window.matchMedia(`(hover: hover) and (pointer: fine)`).matches&&!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}var X=i`<span
  data-share-ring
  class=${Fe}
  aria-hidden="true"
></span>`,Ie=`flex min-h-10 w-full items-center gap-2.5 rounded-lg border-0 bg-transparent px-3 text-left text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-hidden`,Le=i`<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  aria-hidden="true"
>
  <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
  <path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
</svg>`,Re=i`<svg
  width="14"
  height="14"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
>
  <path
    d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z"
  />
</svg>`,ze=i`<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M4 5h16v11H9l-5 4z" />
</svg>`,Z=i`<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M12 3v12" />
  <path d="M7 8l5-5 5 5" />
  <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
</svg>`,Q=[{action:`copy`,icon:Le,labelKey:`player_profile.share_copy_link`},{action:`x`,icon:Re,labelKey:`player_profile.share_x`},{action:`discord`,icon:ze,labelKey:`player_profile.share_discord`}],$=class extends s{constructor(...e){super(...e),this.url=``,this.name=``,this.text=``,this.layout=`row`,this.label=``,this.triggerClass=``,this.solid=!1,this.centered=!1,this.announcement=``,this.menuOpen=!1,this.rings=new WeakMap,this.onOutside=e=>{this.contains(e.target)||this.closeMenu(!1)}}createRenderRoot(){return this}disconnectedCallback(){this.listenOutside(!1),this.menuOpen=!1,super.disconnectedCallback()}shareText(){return this.text===``?r(`player_profile.share_text`,{name:this.name}):this.text}async copy(e){this.announcement=``;try{await p(e);let t=r(`common.copied`);o(t,`green`),this.announcement=t}catch{let e=r(`common.failed_copy`);o(e,`red`),this.announcement=e}}shareOnX(){window.open(Ae(this.url,this.shareText()),`_blank`,`noopener,noreferrer`)}async nativeShare(){try{await navigator.share({title:r(`player_profile.title`),text:this.shareText(),url:this.url})}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;await this.copy(this.url)}}run(e){switch(e){case`copy`:this.copy(this.url);return;case`x`:this.shareOnX();return;case`discord`:this.copy(je(this.url,this.shareText()));return}}ringOf(e){return e.querySelector(`[data-share-ring]`)??e.parentElement?.querySelector(`:scope > [data-share-ring]`)??null}playRing(e){let t=this.ringOf(e);if(t===null||typeof t.animate!=`function`||!Y())return;let n=this.rings.get(t);if(n!==void 0&&n.playState!==`finished`&&(n.currentTime===null?q:Number(n.currentTime))<q)return;let r=parseFloat(getComputedStyle(e).borderTopLeftRadius);Number.isFinite(r)&&(t.style.borderRadius=`${r+4}px`),this.rings.set(t,t.animate(Pe,{duration:q}))}onRingPointer(e){e.pointerType===`mouse`&&this.playRing(e.currentTarget)}onRingFocus(e){let t=e.currentTarget,n=!1;try{n=t.matches(`:focus-visible`)}catch{}n&&this.playRing(t)}trigger(){return this.querySelector(`[data-share="menu"]`)}menuItems(){return[...this.querySelectorAll(`[data-share-menu] button`)]}openMenu(){this.menuOpen=!0,this.listenOutside(!0),this.updateComplete.then(()=>this.menuItems()[0]?.focus())}closeMenu(e){this.menuOpen&&(this.menuOpen=!1,this.listenOutside(!1),e&&this.trigger()?.focus())}onTrigger(){if(W()){this.nativeShare();return}this.menuOpen?this.closeMenu(!1):this.openMenu()}listenOutside(e){e?document.addEventListener(`pointerdown`,this.onOutside,!0):document.removeEventListener(`pointerdown`,this.onOutside,!0)}onMenuKey(e){if(!this.menuOpen)return;let t=this.menuItems(),n=t.indexOf(document.activeElement),r;switch(e.key){case`Escape`:e.preventDefault(),e.stopPropagation(),this.closeMenu(!0);return;case`Tab`:this.closeMenu(!1);return;case`ArrowDown`:r=n===-1?0:(n+1)%t.length;break;case`ArrowUp`:r=n===-1?t.length-1:(n-1+t.length)%t.length;break;case`Home`:r=0;break;case`End`:r=t.length-1;break;default:return}e.preventDefault(),t[r]?.focus()}renderMenu(){let e=W();return i`<div
      class="relative flex w-full"
      @keydown=${e=>this.onMenuKey(e)}
    >
      <button
        type="button"
        data-share="menu"
        class=${this.triggerClass||K}
        aria-haspopup=${e?t:`menu`}
        aria-expanded=${e?t:String(this.menuOpen)}
        @click=${()=>this.onTrigger()}
        @pointerenter=${e=>this.onRingPointer(e)}
        @focus=${e=>this.onRingFocus(e)}
      >
        <span class="relative inline-flex items-center gap-2"
          >${Z}<span>${this.label}</span></span
        >
      </button>
      ${Y()?X:t}
      ${this.menuOpen?i`<div
            data-share-menu
            role="menu"
            aria-label=${this.label}
            class="absolute bottom-[calc(100%+8px)] left-1/2 z-50 flex w-max min-w-[220px] -translate-x-1/2 flex-col gap-0.5 rounded-xl border border-white/15 bg-zinc-900 p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.55)]"
          >
            ${Q.map(e=>i`<button
                  type="button"
                  role="menuitem"
                  data-share=${e.action}
                  class=${Ie}
                  @click=${()=>{this.run(e.action),this.closeMenu(!0)}}
                >
                  <span class="grid w-[18px] place-items-center">${e.icon}</span
                  ><span>${r(e.labelKey)}</span>
                </button>`)}
          </div>`:t}
    </div>`}button(e,n,r,a){return i`<button
      type="button"
      class=${this.solid?Me:K}
      data-share=${e}
      @click=${a}
      @pointerenter=${e=>this.onRingPointer(e)}
      @focus=${e=>this.onRingFocus(e)}
    >
      ${n}<span>${r}</span>${Y()?X:t}
    </button>`}renderRow(){return i`<div
      class="flex flex-wrap gap-2 ${this.centered?`justify-center`:``}"
    >
      ${W()?this.button(`native`,Z,r(`player_profile.share_native`),()=>void this.nativeShare()):Q.map(e=>this.button(e.action,e.icon,r(e.labelKey),()=>this.run(e.action)))}
    </div>`}render(){return this.url===``||u.name()===`poki`?t:i`
      ${this.layout===`menu`?this.renderMenu():this.renderRow()}
      <span class="sr-only" role="status" aria-live="polite"
        >${this.announcement}</span
      >
    `}};f([c({type:String})],$.prototype,`url`,void 0),f([c({type:String})],$.prototype,`name`,void 0),f([c({type:String})],$.prototype,`text`,void 0),f([c({type:String})],$.prototype,`layout`,void 0),f([c({type:String})],$.prototype,`label`,void 0),f([c({type:String})],$.prototype,`triggerClass`,void 0),f([c({type:Boolean})],$.prototype,`solid`,void 0),f([c({type:Boolean})],$.prototype,`centered`,void 0),f([e()],$.prototype,`announcement`,void 0),f([e()],$.prototype,`menuOpen`,void 0),$=f([n(`profile-share`)],$);export{we as t};