import{Gn as e,Hn as t,In as n,Jn as r,Un as i,Vn as a,dn as o,qn as s}from"./index-B4QD0Fte.js";import{_ as c,a as l,c as u,f as d,l as f,p,x as m,y as h}from"./Progression-Dg-YxkFq.js";import"./LevelBadge-BmsHRyDe.js";import{n as g,r as _,t as v}from"./XpBar-B5p30m1B.js";var y=[`#bef264`,`#bef264`],b=30,x=class extends i{constructor(...e){super(...e),this.view={kind:`hidden`},this.gameType=null}createRenderRoot(){return this}frame(e,t){return r`<section
      data-past-xp
      data-past-xp-state=${t}
      class="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-4 py-3.5 text-left text-white sm:px-[18px]"
      aria-live="polite"
    >
      ${e}
    </section>`}heading(e=``){return r`<div
      class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/55 ${e}"
    >
      ${n(`progression.xp_heading`)}
    </div>`}renderNote(e,t,n,i){return this.frame(r`<div class="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        ${this.heading(`flex-none`)}
        <div
          class="flex min-w-0 flex-[1_1_240px] items-center gap-2 text-sm ${i}"
        >
          ${e}
          <span data-past-xp-note>${t}</span>
        </div>
      </div>`,n)}renderCalculating(){return this.renderNote(r`<span
        class="size-4 flex-none animate-spin rounded-full border-2 border-white/30 border-t-white/85"
        aria-hidden="true"
      ></span>`,n(`progression.calculating`),`calculating`,`text-white/70`)}circledIcon(e){return r`<svg
      viewBox="0 0 18 18"
      class="size-[18px] flex-none ${e===`info`?`text-white/40`:`text-white/30`}"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="8" stroke-width="1.5" />
      ${e===`info`?s`<path d="M9 8v5" stroke-width="1.8" stroke-linecap="round" />
            <circle
              cx="9"
              cy="5.3"
              r="1.05"
              fill="currentColor"
              stroke="none"
            />`:s`<path d="M5.5 9h7" stroke-width="1.8" stroke-linecap="round" />`}
    </svg>`}signed(e){return n(e<0?`progression.xp_minus`:`progression.xp_plus`,{xp:v(Math.abs(e))})}badge(e,t,n=!1){return r`<level-badge
      class="inline-block align-middle"
      .level=${e}
      .prestige=${t}
      .legend=${n}
      .size=${b}
    ></level-badge>`}renderLevel(t){let{before:i,after:a}=t,o=d(t);if(o.length===0)return r`<div
        data-past-xp-level=${a.level}
        class="flex flex-none items-center gap-2"
      >
        ${this.badge(a.level,a.prestige,a.legend)}
        <div class="leading-tight">
          <div class="text-[15px] font-extrabold">
            ${a.legend?n(`progression.legend`):n(`progression.level`,{level:a.level})}
          </div>
          <div class="text-xs tabular-nums text-white/55">
            ${_(a.xpInLevel,a.xpForNext)}
          </div>
        </div>
      </div>`;let s=o[o.length-1],l=c(t),u=o.some(e=>f(e.level));return r`<div
      data-past-xp-levelup=${s.level}
      class="flex flex-none flex-wrap items-center gap-2"
    >
      ${this.badge(i.level,i.prestige)}
      <span class="text-base font-bold text-white/45" aria-hidden="true"
        >→</span
      >
      <span
        data-past-xp-new-badge
        class="inline-grid place-items-center rounded-full ${u?`shadow-[0_0_14px_rgba(250,204,21,0.55)]`:``}"
      >
        ${this.badge(s.level,s.prestige,l&&s.level>=100)}
      </span>
      <span class="ml-1 text-[15px] font-extrabold tabular-nums">
        ${n(`progression.level_change`,{from:i.level,to:s.level})}
      </span>
      ${u?r`<span
            data-past-xp-milestone
            class="ml-1 rounded-full border border-yellow-400/45 bg-yellow-400/10 px-2 py-[3px] text-[10px] font-extrabold uppercase tracking-[0.14em] text-yellow-300"
          >
            ${n(`progression.milestone_chip`)}
          </span>`:e}
    </div>`}renderMultipliers(t){return r`${p(t.breakdown).map(t=>{let n=t.permille<1e3,i=t.key===`subscriber`?h(t.permille)?.colors??y:y;return r`<div
        data-past-xp-multiplier=${t.key}
        data-xp-tier=${t.key===`subscriber`?h(t.permille)?.tier??e:e}
        class="mt-1.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[13px] leading-relaxed"
      >
        <span
          class="font-extrabold uppercase italic tracking-[0.04em] ${n?`text-sky-300`:`bg-clip-text text-transparent`}"
          style=${n?e:`background-image: linear-gradient(90deg, ${i[0]}, ${i[1]})`}
          >${g(t.key,t.permille)}</span
        >
        ${t.amount===null?e:r`<span
              data-past-xp-multiplier-amount
              class="font-extrabold tabular-nums ${n?`text-sky-300`:``}"
              style=${n?e:`color: ${i[1]}`}
              >${this.signed(t.amount)}</span
            >`}
      </div>`})}`}renderResult(t){let i=m(t.breakdown);return this.frame(r`
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2.5">
          <div class="min-w-0 flex-auto">
            ${this.heading()}
            <div
              data-past-xp-total
              class="mt-0.5 text-2xl font-black leading-tight tabular-nums text-yellow-300 [text-shadow:0_0_10px_rgba(250,204,21,0.35)]"
            >
              ${n(`progression.xp_total`,{xp:v(t.breakdown.total)})}
            </div>
          </div>
          ${this.renderLevel(t)}
        </div>
        ${i.length>0?r`<div
              data-past-xp-lines
              class="mt-3 grid grid-cols-1 gap-x-7 gap-y-1 border-t border-white/[0.08] pt-2.5 sm:grid-cols-3"
            >
              ${i.map(e=>r`<div
                    data-past-xp-line=${e.key}
                    class="flex justify-between gap-3 text-[13px] leading-relaxed"
                  >
                    <span class="min-w-0 text-white/70"
                      >${n(l[e.key])}</span
                    >
                    <span class="font-bold tabular-nums text-yellow-300"
                      >${this.signed(e.amount)}</span
                    >
                  </div>`)}
            </div>`:e}
        ${this.renderMultipliers(t)}
        ${t.breakdown.leftEarly?r`<p
              data-past-xp-left-early
              class="m-0 mt-2 text-xs text-amber-300"
            >
              ${n(`progression.left_early`)}
            </p>`:e}
      `,`result`)}render(){let t=this.view;switch(t.kind){case`hidden`:return e;case`calculating`:return this.renderCalculating();case`result`:return t.data.eligible?this.renderResult(t.data):t.data.reason===`before_progression`?this.renderNote(this.circledIcon(`dash`),n(u(t.data.reason)),`before_levels`,`text-white/55`):this.renderNote(this.circledIcon(`info`),n(u(t.data.reason,this.gameType)),`ineligible`,`text-white/70`)}}};o([a({attribute:!1})],x.prototype,`view`,void 0),o([a({attribute:!1})],x.prototype,`gameType`,void 0),x=o([t(`past-game-xp-card`)],x);export{x as PastGameXpCard};