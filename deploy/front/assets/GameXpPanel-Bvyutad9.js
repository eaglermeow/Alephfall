import{Bn as e,Gn as t,Hn as n,In as r,Jn as i,Nt as a,Un as o,Vn as s,dn as c,dt as l,gt as u,ht as d,oi as f,ut as p}from"./index-B4QD0Fte.js";import"./CapIcon-CZ3M-qLe.js";import"./PlutoniumIcon-EBDEFxV4.js";import{_ as m,a as h,b as g,c as _,f as v,l as y,o as ee,u as te,v as b,x,y as S}from"./Progression-Dg-YxkFq.js";import"./LevelBadge-BmsHRyDe.js";import{n as C,r as w,t as T}from"./XpBar-B5p30m1B.js";import{n as E,r as D,t as O}from"./CosmeticPreview-qeN1fsJw.js";import{t as k}from"./keyed-DMRJpLPA.js";function A(e){return!e.claimed&&!f(e)}function j(e,t){return t.size===0?e:e.map(e=>{let n=t.get(e.id);return n===void 0||e.claimed?e:{...e,held:n}})}function M(e){let t=[];for(let n of[`soft`,`hard`]){let r=e.filter(e=>e.currencyType===n);if(r.length===0)continue;let i=r.map(e=>b(e.amount)),a=i.reduce((e,t)=>e+t,0n),o=i.length>1&&i.every(e=>e===i[0])?i[0]:null;t.push({currency:n,total:a,count:r.length,each:o})}return t}function N(e){if(e.length===0)return null;let t=[...new Set(e.map(e=>e.level))].sort((e,t)=>e-t),n,r;t.length>1?(n=`progression.rewards_levels`,r={from:t[0],to:t[t.length-1]}):(n=e.length>1?`progression.rewards_level_many`:`progression.rewards_level_one`,r={level:t[0]});let i=e.filter(e=>!A(e)),a=e.filter(A),o=a.filter(e=>e.held===`trust`),s=a.filter(e=>e.held!==`trust`),c=[...M(o).map(e=>({...e,labelKey:`account_modal.reward_held_trust`})),...M(s).map(e=>({...e,labelKey:`account_modal.reward_held_other_info`}))];return{headingKey:n,headingParams:r,lines:M(i),heldLines:c,claimable:i.length>0,allClaimed:i.every(e=>e.claimed)}}async function P(e,t=new Set){let n=await D(e.filter(e=>!e.claimed&&!t.has(e.id)&&!A(e)));if(n.failed)return{ok:!1,claimedIds:n.claimedIds,held:n.held};let r={soft:0,hard:0};for(let t of e)n.creditedIds.includes(t.id)&&(r[t.currencyType]+=Number(b(t.amount)));return{ok:!0,currency:n.currency,credited:r,claimedIds:n.claimedIds,held:n.held}}var F={pattern:`territory_patterns.pattern`,skin:`territory_patterns.pattern`,flag:`flags`,crown:`crowns`,effect:`effects`},I={pattern:`cosmetics.type_skin`,skin:`cosmetics.type_skin`,flag:`cosmetics.type_flag`,crown:`cosmetics.type_crown`};function L(e,t){let[n=``,i=``,a]=e.flareName.split(`:`),o=[`pattern`,`flag`,`skin`,`crown`,`effect`].includes(n)?l({type:n,name:i,colorPalette:a},t)??null:null;if(o!==null)return{flare:e,resolved:o,name:O(o),typeLabel:E(o)};let s=F[n],c=I[n];return{flare:e,resolved:null,name:s!==void 0&&i!==``?u(s,i):e.flareName,typeLabel:r(c??`progression.unlocked_cosmetic`)}}var R={team_win:`progression.reconcile_team_win`,feats:`progression.reconcile_feats`,daily_cap:`progression.reconcile_daily_cap`,multiplier:`progression.reconcile_multiplier`,reconnect:`progression.reconcile_reconnect`,other:`progression.reconcile_other`},z=10,B=300,ne=250,V=450,re=140,H=300,ie=1100,ae=1900,oe=450,U=1e3,W=.4;function G(e,t){return t>1?e*(1-W)/(t-1):0}var se=400,ce=900,le=700,ue=300,de=900,fe=360,K=500,q=120,J=600,Y=e=>1-(1-e)**3,X=-1;function pe(){try{return window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}}function me(e,t,n){return e>=100?100:e+Math.min(.999999,te(t,n))}function Z(e){return me(e.after.level,e.after.xpInLevel,e.after.xpForNext)}function Q(e){return ee(x(e.breakdown).map(e=>e.amount),e.breakdown.total)}var $=class extends o{constructor(...e){super(...e),this.view={kind:`hidden`},this.onScreen=!0,this.gameType=null,this.reveal=null,this.barAnimate=!1,this.barDurationMs=V,this.revealedProvisional=null,this.animationToken=0,this.announcedLegend=null,this.timers=[],this.settledView=null,this.claim={status:`idle`,failed:!1},this.claimPressed=!1,this.balanceCount=1,this.claimedIds=new Set,this.refusedHolds=new Map,this.claimToken=0,this.claimTimers=[],this.catalog=[],this.catalogRequested=!1}createRenderRoot(){return this}disconnectedCallback(){this.skipReveal(),this.clearClaimTimers(),this.balanceCount=1,super.disconnectedCallback()}willUpdate(e){if(e.has(`view`)){this.resetClaim();let t=this.view;t.kind===`result`&&t.data.eligible&&(t.data.flares??[]).length>0&&this.loadCatalog();let n=e.get(`view`);if(t.kind===`provisional`&&n?.kind===`provisional`&&n.provisional===t.provisional)return;if(!this.onScreen)this.skipReveal();else if(t.kind===`result`&&t.data.eligible){let e=t.reconciled,n=e?.provisional.response;if(e!==void 0&&n?.eligible&&this.revealedProvisional===e.provisional){if(e.outcome.matched)return;if(t.data.breakdown.total>n.breakdown.total){let e=n.before.prestige===t.data.before.prestige,r=this.reveal;this.startReveal(t.data,{kind:`celebrate`,from:e?r?.position??Z(n):0,countFrom:r?.counted??n.breakdown.total,celebrated:e?r?.level??n.after.level:0,celebratedLegend:e&&(r?.legend??n.after.legend)})}else this.skipReveal()}else this.startReveal(t.data,{kind:`full`})}else t.kind===`provisional`&&t.provisional.response.eligible?(this.revealedProvisional=t.provisional,this.startReveal(t.provisional.response,{kind:`full`})):this.skipReveal()}else e.has(`onScreen`)&&!this.onScreen&&(this.reveal!==null&&this.view.kind===`provisional`&&(this.revealedProvisional=null),this.skipReveal())}clearTimers(){this.animationToken++;for(let e of this.timers)clearTimeout(e);this.timers=[]}later(e,t){this.timers.push(setTimeout(t,e))}startReveal(e,t){if(this.clearTimers(),pe()){this.reveal=null;return}let n=this.animationToken,r=(e,t)=>this.later(e,()=>{n===this.animationToken&&this.reveal!==null&&t()}),i=e=>{this.reveal!==null&&(this.reveal={...this.reveal,...e})},a=0,o=(e,t)=>{let n=++a;r(e,()=>i({step:n,caption:t,levelUp:null}))},{breakdown:s}=e,c=x(s),l=c.map(e=>e.amount),u=g(s),d=me(e.before.level,e.before.xpInLevel,e.before.xpForNext),f=Z(e),p=t.kind===`celebrate`,h=p?Math.min(f,Math.max(d,t.from)):d;if(p&&h>=f&&t.countFrom===e.breakdown.total){this.reveal=null;return}let _=s.total,y=Math.max(1,s.subtotal),te=_<y?_/y:1,b=e=>_<=0?d:d+(f-d)*e/_,S=v(e),C=S.length>0?S[S.length-1].level:null,w=this.view.kind===`result`,T=w?N(e.rewards??[]):null,E=w&&(e.flares??[]).length>0,D=m(e)||this.milestoneOf(e)!==void 0,O=e=>{if(E&&r(e+le,()=>i({unlockShown:!0})),T===null)return;let t=e+(E||D?de:ue);r(t,()=>i({rewardsShown:!0}));let n=t+fe,a=Math.max(2,Math.round(K/40));for(let e=1;e<=a;e++)r(n+K*e/a,()=>i({rewardsCount:Y(e/a)}))};this.barAnimate=!1,this.reveal={step:0,caption:p?{kind:`heading`}:null,position:h,level:Math.min(100,Math.floor(h)),levelUp:null,legend:e.after.legend&&(!m(e)||p&&t.celebratedLegend),counted:p?t.countFrom:0,xpText:p?`none`:`before`,linesShown:p?c.length:0,multipliersShown:p?u.length:0,lineValues:p?Q(e):[...l],applying:null,rewardsShown:!1,rewardsCount:0,unlockShown:!1,celebrated:p?t.celebrated:0,celebratedLegend:p&&t.celebratedLegend};let k=h,A=p?Math.max(e.before.level,t.celebrated):e.before.level,j=v(e).map(e=>e.level).filter(e=>e>A&&e<=100).sort((e,t)=>e-t);p&&C!==null&&C<=A&&O(B);let M=(t,n,o,s,c=!1,l=V)=>{let u=k,d=(e,t,n,a)=>{let o=Math.max(2,Math.round(t/40));for(let c=1;c<=o;c++){let l=n+(a-n)*c/o;r(e+t*c/o,()=>i(s(l)))}};if(n<=u)return c?(d(t,l,0,1),t+l):t;k=n;let f=[];for(;j.length>0&&j[0]<=n;)f.push(j.shift());let p=n-u,m=(e,t)=>Math.max(re,Math.round(l*(t-e)/p)),h=u;for(let n of f){let s=m(h,n);d(t,s,(h-u)/p,(n-u)/p),r(t,()=>{this.barDurationMs=s,this.barAnimate=!0,i({position:n-1e-6,xpText:`none`})}),t+=s;let c=n,l=c>=100&&e.after.legend;r(t,()=>{if(this.barAnimate=!1,l&&this.announceLegend(e)){this.skipReveal();return}i({level:Math.min(100,c),levelUp:c,legend:l})}),c===C&&O(t),t+=l?ae:ie;let f=a+1;a=f,r(t,()=>{this.barAnimate=!1,i({position:c,levelUp:null,step:f,caption:o})}),t+=60,h=n}if(n>h){let e=m(h,n);d(t,e,(h-u)/p,1),r(t,()=>{this.barDurationMs=e,this.barAnimate=!0,i({position:n})}),t+=e}return t},P=B,F=0,I=p?t.countFrom:0;(p?[]:c).forEach((e,t)=>{let n={kind:`line`,key:e.key,amount:e.amount};o(P,n),P+=ne,F=Math.min(_,F+e.amount*te);let a=I;I+=e.amount;let s=I;P=M(P,b(F),n,e=>({counted:Math.round(a+(s-a)*e)})),r(P,()=>i({counted:s,linesShown:t+1})),P+=H});let L=[...l],R=1;(p?[]:u).forEach((e,t)=>{let n={kind:`multiplier`,key:e.key,permille:e.permille};o(P,n),P+=oe,R*=e.permille/1e3;let a=t===u.length-1?_:Math.round(y*R),s=L,c=ee(l,a);L=c;let d=I;I=a;let f=e.permille>1e3?`boost`:`cut`;r(P,()=>i({applying:f})),F=Math.max(F,Math.min(_,a));let p=l.length,m=M(P,b(F),n,e=>({counted:Math.round(d+(a-d)*e),lineValues:s.map((t,n)=>{let r=Math.min(1,Math.max(0,(e-G(n,p))/W));return Math.round(t+(c[n]-t)*r)})}),!0,U);P=Math.max(m,P+U),r(P,()=>i({counted:a,lineValues:c,multipliersShown:t+1,applying:null})),P+=se});let z=u.length>0&&!p?{kind:`multiplier`,key:u[u.length-1].key,permille:u[u.length-1].permille}:null,q=I;P=M(P,f,z??{kind:`heading`},e=>({counted:Math.round(q+(_-q)*e)}),p&&q!==_);let J=Q(e);r(P,()=>i({counted:_,lineValues:J,xpText:`after`})),P+=H;let $=this.payoffCaption(e);$!==null&&(r(P,()=>i({step:X,caption:$,levelUp:null})),P+=ce),r(P,()=>{this.barAnimate=!1,this.reveal=null})}announceSettled(){let e=this.view;e.kind!==`result`||this.reveal!==null||this.settledView!==e&&(this.settledView=e,this.dispatchEvent(new CustomEvent(`xp-reveal-settled`,{detail:e,bubbles:!0})))}announceLegend(e){if(this.announcedLegend===e)return!1;this.announcedLegend=e;let t=new CustomEvent(`xp-legend`,{detail:e,bubbles:!0,composed:!0,cancelable:!0});return!this.dispatchEvent(t)}updated(e){super.updated(e),this.announceSettled();let t=this.view;t.kind===`result`&&t.data.eligible&&this.reveal===null&&this.onScreen&&m(t.data)&&this.announceLegend(t.data)}skipReveal(){this.clearTimers(),this.barAnimate=!1,this.reveal=null}payoffCaption(e){let t=this.view;if(t.kind===`result`&&t.reconciled?.provisional===this.revealedProvisional&&this.adjustedLevel()!==null)return null;if(m(e))return{kind:`legend`};let n=v(e);return n.length===0?null:{kind:`level_up`,level:n[n.length-1].level}}accentOf(e){return e.key===`subscriber`?S(e.permille)?.colors??null:null}panelAccent(e){let t=g(e.breakdown),n=this.reveal,r=n!==null&&n.applying!==null?t[n.multipliersShown]:t.find(e=>this.accentOf(e)!==null),i=r===void 0?null:this.accentOf(r);return i===null?void 0:`--accent-a: ${i[0]}; --accent-b: ${i[1]}`}frame(e,n,a){let o=this.reveal!==null;return i`<section
      data-xp-panel
      data-xp-state=${n}
      data-xp-revealing=${o?`true`:t}
      style=${a??t}
      class="relative mb-4 rounded-lg bg-black/30 p-3 text-left text-white ${o?`cursor-pointer`:``}"
      aria-live="polite"
      aria-busy=${o?`true`:`false`}
      title=${o?r(`progression.tap_to_skip`):t}
      @click=${()=>this.skipReveal()}
    >
      ${o?i`<button
            type="button"
            data-xp-skip
            class="sr-only focus:not-sr-only focus:absolute focus:right-2 focus:top-2 focus:z-10 focus:rounded-sm focus:bg-black/80 focus:px-2 focus:py-1 focus:text-xs focus:font-bold focus:text-white"
            @click=${e=>{e.stopPropagation(),this.skipReveal()}}
          >
            ${r(`progression.skip_reveal`)}
          </button>`:t}
      ${e}
    </section>`}renderNote(e,t){return this.frame(i`<p class="m-0 text-sm text-white/80">${r(e)}</p>`,t)}renderIneligible(e,t){return this.frame(i`${this.renderStatus()}
        <p class="m-0 text-sm text-white/80">
          ${r(_(e,this.gameType))}
        </p>
        ${this.renderReconcileNotes()}`,t)}renderCalculating(){return this.frame(i`<div class="flex items-center gap-2 text-sm text-white/80">
        <span
          class="w-4 h-4 shrink-0 border-2 border-white/30 border-t-white/80 rounded-full animate-spin motion-reduce:animate-none"
          aria-hidden="true"
        ></span>
        <span>${r(`progression.calculating`)}</span>
      </div>`,`calculating`)}captionContent(e){switch(e.kind){case`line`:return i`${r(h[e.key])}
          <span class="text-yellow-300"
            >${r(`progression.xp_total`,{xp:T(e.amount)})}</span
          >`;case`multiplier`:return i`${C(e.key,e.permille)}`;case`heading`:return i`${r(`progression.xp_heading`)}`;case`level_up`:return i`<span class="text-yellow-300"
          >${r(`progression.level_reached`,{level:e.level})}</span
        >`;case`legend`:return i`<span class="text-yellow-300"
          >${r(`progression.legend_reached_title`)}</span
        >`}}renderCaption(e){let n=this.reveal,a=n?.levelUp??null,o=t,s;if(a!==null&&n?.legend)s=`legend`,o=i`<div
        class="xp-levelup-in xp-legend-text text-center text-2xl font-black uppercase italic tracking-wide sm:text-3xl"
        data-xp-caption-levelup=${a}
        data-xp-caption-legend
      >
        ${r(`progression.legend_reached_title`)}
      </div>`;else if(a!==null)s=`lvl-${a}`,o=i`<div
        class="xp-levelup-in text-center text-2xl font-black uppercase italic tracking-wide text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] sm:text-3xl"
        data-xp-caption-levelup=${a}
      >
        ${r(`progression.level_reached`,{level:a})}
      </div>`;else{s=`s-${n?.step??X}`;let t=n===null?this.payoffCaption(e)??{kind:`heading`}:n.caption;t?.kind===`multiplier`?o=i`<div
          class="xp-levelup-in xp-bonus-text ${t.permille>1e3?``:`xp-bonus-text-cut`} text-center text-xl font-black uppercase italic tracking-wide sm:text-2xl"
          data-xp-caption-step=${n?.step??X}
        >
          ${this.captionContent(t)}
        </div>`:t!==null&&(o=i`<div
          class="xp-caption-in text-center text-lg font-black uppercase italic tracking-wide sm:text-xl"
          data-xp-caption-step=${n?.step??X}
        >
          ${this.captionContent(t)}
        </div>`)}return i`<div
      class="flex h-9 items-end justify-center overflow-visible"
      data-xp-caption
    >
      ${k(s,o)}
    </div>`}renderSegmentedBar(e,n,a){return i`<div
      data-xp-bar
      class="relative h-3 w-full overflow-hidden rounded-sm bg-white/15 ${n?`xp-bar-flash`:``}"
      role="progressbar"
      aria-label=${r(`progression.xp_bar_label`)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${Math.round(e)}
      aria-valuetext=${a===``?t:a}
    >
      <div
        data-xp-bar-fill
        class="h-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)] ${this.barAnimate?`xp-bar-filling transition-[width] ease-linear`:``}"
        style="width: ${e}%; transition-duration: ${this.barDurationMs}ms"
      ></div>
      ${Array.from({length:z-1},(e,t)=>i`<span
            aria-hidden="true"
            class="absolute top-0 h-full w-[3px] -translate-x-1/2 bg-zinc-900"
            style="left: ${(t+1)*100/z}%"
          ></span>`)}
    </div>`}renderFull(e){let{after:n}=e,a=this.reveal,o=this.view.kind===`provisional`,s=a?.position??Z(e),c=a?.level??Math.min(100,Math.floor(s)),l=a===null?n.legend:a.legend,u=s>=100?100:Math.max(0,(s-Math.floor(s))*100),d=a?.levelUp??null,f=a===null||a.xpText===`after`?w(n.xpInLevel,n.xpForNext):a.xpText===`before`?w(e.before.xpInLevel,e.before.xpForNext):``,p=a?.counted??e.breakdown.total,m=a?.applying??null,h=a===null?n.prestige:e.before.prestige,g=d===null?c:d-1,_=d??(c<100?c+1:null),v=(e,t)=>i`<level-badge
        .level=${e}
        .prestige=${h}
        .legend=${t}
        .size=${40}
      ></level-badge>`,y=a===null?``:`xp-badge-in`;return this.frame(i`
        ${this.renderStyles()} ${this.renderStatus()}
        ${this.renderCaption(e)}
        <!-- Every box here is a fixed size, so nothing moves while the
             numbers and the level change. -->
        <div class="mt-1 flex items-start gap-3">
          <!-- The level the player is on. The same width as the next level's
               badge on the right, so the bar, and the counter under it, are
               centred in the panel like the caption above. -->
          <div class="grid h-10 w-10 shrink-0 place-items-center">
            ${k(`${g}-${l&&g>=100}`,i`<span
                data-xp-current-badge
                data-level=${g}
                class="inline-block ${y}"
                >${v(g,l&&g>=100)}</span
              >`)}
          </div>
          <div class="@container min-w-0 flex-1 pt-3.5">
            ${this.renderSegmentedBar(u,d!==null,f)}
            <!-- The counter centred under the bar, the level's progress at
                 its right end. A bar too narrow for both side by side (a
                 phone) stacks them, centred, so they never run together.
                 Fixed heights either way: nothing moves during the reveal. -->
            <div
              data-xp-counter-row
              class="mt-1 flex h-9 flex-col items-center @min-[16rem]:grid @min-[16rem]:h-5 @min-[16rem]:grid-cols-[1fr_auto_1fr] @min-[16rem]:gap-x-2"
            >
              <span class="hidden @min-[16rem]:block"></span>
              <span
                data-xp-total
                class="text-sm font-bold tabular-nums transition-colors ${m===`boost`?`xp-accent-text`:m===`cut`?`text-sky-300`:`text-white/90`}"
              >
                ${r(`progression.xp_total`,{xp:T(p)})}
              </span>
              <span
                data-xp-header-level
                class="max-w-full truncate text-center text-[11px] tabular-nums text-white/60 @min-[16rem]:text-right"
              >
                ${f}
              </span>
            </div>
          </div>
          <div class="relative grid h-10 w-10 shrink-0 place-items-center">
            ${d===null?t:k(`${d}-${l}`,i`<span
                      aria-hidden="true"
                      class="xp-burst pointer-events-none absolute inset-0 rounded-full border-2 border-yellow-200 shadow-[0_0_12px_rgba(250,204,21,0.9)]"
                    ></span
                    ><span
                      aria-hidden="true"
                      class="xp-burst-late pointer-events-none absolute inset-0 rounded-full border border-white/80"
                    ></span>`)}
            ${_===null?t:k(`${_}-${d!==null}-${l}`,i`<span
                    data-xp-next-badge
                    data-level=${_}
                    class="relative inline-block ${d===null?`opacity-60 ${y}`:l?`xp-legend-pop`:`xp-badge-pop`}"
                    >${v(_,d!==null&&l&&_>=100)}</span
                  >`)}
          </div>
        </div>
        ${this.renderBonuses(e)}
        <div data-xp-recap>${this.renderRecap(e)}</div>
        ${this.renderReconcileNotes()}
      `,o?`provisional`:`result`,this.panelAccent(e))}renderStatus(){let e=this.view;return e.kind===`provisional`?i`<div
        data-xp-provisional
        class="mb-1 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-300"
      >
        ${e.confirming?i`<span
              data-xp-confirming
              class="h-3 w-3 shrink-0 animate-spin rounded-full border-2 border-amber-300/30 border-t-amber-300 motion-reduce:animate-none"
              aria-hidden="true"
            ></span>`:t}
        <span
          >${r(e.confirming?`progression.provisional_confirming`:`progression.provisional_label`)}</span
        >
      </div>`:e.kind===`result`&&e.reconciled?.outcome.matched?i`<div
        data-xp-confirmed
        class="mb-1 text-center text-[11px] font-bold uppercase tracking-wider text-green-400"
      >
        ${r(`progression.xp_confirmed`)}
      </div>`:t}adjustedLevel(){let e=this.view;if(e.kind!==`result`||e.reconciled===void 0)return null;let t=e.reconciled.provisional.response;return!t.eligible||v(t).length===0?null:e.data.eligible?e.data.after.prestige===t.after.prestige&&e.data.after.level<t.after.level?e.data.after.level:null:t.before.level}renderReconcileNotes(){let e=this.view,n=[];if(e.kind===`provisional`){if(!e.provisional.response.eligible)return t;e.provisional.teamWinPending&&n.push({key:`progression.provisional_team_win_pending`}),e.provisional.featsPending&&n.push({key:`progression.provisional_feats_pending`})}else if(e.kind===`result`&&e.reconciled!==void 0){let{outcome:r}=e.reconciled;if(r.matched)return t;r.provisionalTotal!==null&&n.push({key:`progression.provisional_was`,params:{xp:T(r.provisionalTotal)}});for(let t of r.differences){let r=R[t];r===void 0||!e.data.eligible&&t===e.data.reason||n.push({key:r})}let i=this.adjustedLevel();i!==null&&n.push({key:`progression.reconcile_level_adjusted`,params:{level:String(i)}})}else return t;return n.length===0?t:i`<div data-xp-reconcile class="mt-3 space-y-0.5">
      ${n.map(e=>i`<p
            data-xp-note=${e.key}
            class="m-0 text-center text-xs text-white/60"
          >
            ${r(e.key,e.params)}
          </p>`)}
    </div>`}renderStyles(){return i`<style>
      @keyframes xp-caption-in {
        from {
          opacity: 0;
          transform: translateY(70%) skewX(-8deg);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      .xp-caption-in {
        animation: xp-caption-in 220ms ease-out;
      }
      @keyframes xp-levelup-in {
        0% {
          opacity: 0;
          transform: scale(2.2) skewX(-8deg);
        }
        55% {
          opacity: 1;
          transform: scale(0.92) skewX(-8deg);
        }
        100% {
          transform: scale(1) skewX(0);
        }
      }
      .xp-levelup-in {
        animation: xp-levelup-in 420ms cubic-bezier(0.2, 0.9, 0.3, 1.2);
      }
      @keyframes xp-bar-flash {
        0%,
        100% {
          filter: brightness(1);
          box-shadow: none;
        }
        50% {
          filter: brightness(1.9);
          box-shadow: 0 0 16px 2px rgba(255, 255, 255, 0.85);
        }
      }
      .xp-bar-flash {
        animation: xp-bar-flash 450ms ease-in-out 2;
      }
      /* While the bar fills, its leading edge glows white-hot and a sheen
         runs along the fill. Both are pseudo-elements clipped to the fill;
         the sheen moves by transform, one tile per loop. */
      [data-xp-panel] [data-xp-bar-fill] {
        position: relative;
        overflow: hidden;
      }
      [data-xp-panel] [data-xp-bar-fill]::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 42px;
        pointer-events: none;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0),
          rgba(255, 250, 210, 0.95)
        );
        opacity: 0;
        transition: opacity 160ms ease-out;
      }
      [data-xp-panel] .xp-bar-filling::after {
        opacity: 1;
      }
      [data-xp-panel] .xp-bar-filling::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -48px;
        right: 0;
        pointer-events: none;
        background-image: repeating-linear-gradient(
          115deg,
          rgba(255, 255, 255, 0) 0 10px,
          rgba(255, 255, 255, 0.28) 10px 14px,
          rgba(255, 255, 255, 0) 14px 24px
        );
        background-size: 48px 100%;
        animation: xp-bar-sheen 420ms linear infinite;
      }
      @keyframes xp-bar-sheen {
        to {
          transform: translateX(48px);
        }
      }
      @keyframes xp-badge-pop {
        0% {
          transform: scale(1);
        }
        30% {
          transform: scale(1.45);
        }
        60% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(1);
        }
      }
      .xp-badge-pop {
        animation: xp-badge-pop 650ms ease-out;
      }
      /* A level badge moving on after a level-up. No end opacity, so the
         next level's badge settles at its own dimmed opacity. */
      @keyframes xp-badge-in {
        from {
          opacity: 0;
          transform: scale(0.6);
        }
        to {
          transform: none;
        }
      }
      .xp-badge-in {
        animation: xp-badge-in 280ms cubic-bezier(0.2, 0.9, 0.3, 1.2);
      }
      @keyframes xp-legend-pop {
        0% {
          transform: scale(1) rotate(0);
          filter: brightness(1);
        }
        25% {
          transform: scale(1.8) rotate(-8deg);
          filter: brightness(2);
        }
        50% {
          transform: scale(1.3) rotate(6deg);
        }
        100% {
          transform: scale(1.15) rotate(0);
          filter: brightness(1.2);
        }
      }
      .xp-legend-pop {
        animation: xp-legend-pop 1100ms cubic-bezier(0.2, 0.9, 0.3, 1.2)
          forwards;
      }
      @keyframes xp-burst {
        from {
          transform: scale(0.6);
          opacity: 1;
        }
        to {
          transform: scale(2.4);
          opacity: 0;
        }
      }
      .xp-burst {
        animation: xp-burst 700ms ease-out forwards;
      }
      .xp-burst-late {
        opacity: 0;
        animation: xp-burst 700ms ease-out 180ms forwards;
      }
      /* A multiplier's wipe: a bright band runs across the caption, then
         across each card in turn (each card's own delay comes from its
         --wipe-delay), and the card's value turns over as it passes. In the
         bonus's colours: --accent-a to --accent-b, set on the panel for a
         subscription tier (Sovereign gold, Warlord cyan, Vanguard green),
         lime otherwise; blue for a cut. */
      @keyframes xp-wipe {
        from {
          background-position: 100% 0;
        }
        to {
          background-position: 0 0;
        }
      }
      @keyframes xp-text-wipe {
        from {
          background-position:
            100% 0,
            0 0;
        }
        to {
          background-position:
            0 0,
            0 0;
        }
      }
      .xp-bonus-text {
        background:
          linear-gradient(
            100deg,
            transparent 42%,
            #ffffff 50%,
            transparent 58%
          ),
          linear-gradient(
            90deg,
            var(--accent-a, #bef264),
            var(--accent-b, #bef264)
          );
        background-size:
          300% 100%,
          100% 100%;
        background-position:
          100% 0,
          0 0;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        filter: drop-shadow(
          0 0 8px color-mix(in srgb, var(--accent-a, #a3e635) 55%, transparent)
        );
      }
      .xp-bonus-text-cut {
        --accent-a: #7dd3fc;
        --accent-b: #7dd3fc;
      }
      .xp-levelup-in.xp-bonus-text {
        animation:
          xp-levelup-in 420ms cubic-bezier(0.2, 0.9, 0.3, 1.2),
          xp-text-wipe 900ms ease-in-out 250ms both;
      }
      /* The bonus line under the counter, in the same colours. */
      .xp-bonus-line {
        background: linear-gradient(
          90deg,
          var(--accent-a, #bef264),
          var(--accent-b, #bef264)
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .xp-accent-text {
        color: var(--accent-b, #bef264);
      }
      .xp-card-wipe {
        --wipe-glow: color-mix(
          in srgb,
          var(--accent-a, #bef264) 60%,
          transparent
        );
      }
      .xp-card-wipe.xp-wipe-cut {
        --wipe-glow: rgba(125, 211, 252, 0.55);
      }
      .xp-card-wipe::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
          100deg,
          transparent 36%,
          var(--wipe-glow) 46%,
          rgba(255, 255, 255, 0.7) 50%,
          var(--wipe-glow) 54%,
          transparent 64%
        );
        background-size: 300% 100%;
        background-position: 100% 0;
        animation: xp-wipe var(--wipe-ms, 400ms) ease-in-out
          var(--wipe-delay, 0ms) both;
      }
      .xp-card-boosted {
        border-color: color-mix(
          in srgb,
          var(--accent-a, #a3e635) 40%,
          transparent
        ) !important;
      }
      .xp-card-boosted [data-xp-card-value] {
        color: var(--accent-b, #d9f99d);
        text-shadow: 0 0 8px
          color-mix(in srgb, var(--accent-a, #a3e635) 50%, transparent);
      }
      .xp-card-cut {
        border-color: rgba(125, 211, 252, 0.35) !important;
      }
      .xp-card-cut [data-xp-card-value] {
        color: #bae6fd;
      }
      /* A card phasing in: it rises out of a blur, flares, overshoots a
         touch and settles, and a shine sweeps across it. */
      @keyframes xp-card-in {
        0% {
          opacity: 0;
          transform: translateY(18px) scale(0.82);
          filter: blur(8px) brightness(2.2);
        }
        55% {
          opacity: 1;
          transform: translateY(-3px) scale(1.05);
          filter: blur(0) brightness(1.7);
        }
        100% {
          opacity: 1;
          transform: none;
          filter: none;
        }
      }
      .xp-card-in {
        animation: xp-card-in 560ms cubic-bezier(0.2, 0.8, 0.3, 1) both;
      }
      @keyframes xp-card-shine {
        from {
          background-position: 100% 0;
        }
        to {
          background-position: 0 0;
        }
      }
      .xp-shine {
        position: relative;
      }
      .xp-card-in.xp-shine::after,
      .xp-card-in .xp-shine::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
          100deg,
          transparent 40%,
          rgba(255, 255, 255, 0.4) 50%,
          transparent 60%
        );
        background-size: 300% 100%;
        animation: xp-card-shine 750ms ease-out 150ms both;
      }
      /* Inside a space that is sliding open: wait for it to open first. */
      .xp-card-in.xp-after-slide,
      .xp-after-slide .xp-badge-pop {
        animation-delay: 260ms;
      }
      .xp-card-in.xp-after-slide.xp-shine::after {
        animation-delay: 410ms;
      }
      /* A cosmetic unlocked: the divider draws, the half wipes in from it,
         its preview pops. The rewards row's claimed state rises in. */
      @keyframes xp-unlock-sep {
        from {
          transform: scaleY(0);
        }
      }
      .xp-unlock-sep {
        animation: xp-unlock-sep 220ms ease-out both;
      }
      @keyframes xp-unlock-in {
        from {
          clip-path: inset(0 100% 0 0);
        }
        to {
          clip-path: inset(0 0 0 0);
        }
      }
      .xp-unlock-in {
        animation: xp-unlock-in 480ms cubic-bezier(0.2, 0.8, 0.2, 1) 120ms both;
      }
      @keyframes xp-unlock-pop {
        from {
          transform: scale(0.4);
          opacity: 0;
        }
      }
      .xp-unlock-pop {
        animation: xp-unlock-pop 420ms cubic-bezier(0.2, 0.9, 0.3, 1.35) 300ms
          both;
      }
      @keyframes xp-claimed-in {
        from {
          opacity: 0;
          transform: translateY(6px);
        }
      }
      .xp-claimed-in {
        animation: xp-claimed-in 280ms ease-out both;
      }
      @keyframes xp-check-in {
        from {
          transform: scale(0.3);
          opacity: 0;
        }
      }
      .xp-check-in {
        animation: xp-check-in 380ms cubic-bezier(0.2, 0.9, 0.3, 1.5) both;
      }
      .xp-legend-text {
        background: linear-gradient(90deg, #fde047, #f0abfc, #fde047);
        background-size: 200% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        filter: drop-shadow(0 0 10px rgba(250, 204, 21, 0.8));
      }
      @media (prefers-reduced-motion: reduce) {
        [data-xp-panel] .xp-bar-filling::before,
        [data-xp-panel] .xp-bar-filling::after {
          display: none;
        }
        .xp-caption-in,
        .xp-levelup-in,
        .xp-bar-flash,
        .xp-badge-pop,
        .xp-badge-in,
        .xp-legend-pop,
        .xp-burst,
        .xp-burst-late,
        .xp-levelup-in.xp-bonus-text,
        .xp-card-wipe::before,
        .xp-card-in,
        .xp-card-in.xp-shine::after,
        .xp-card-in .xp-shine::after,
        .xp-unlock-sep,
        .xp-unlock-in,
        .xp-unlock-pop,
        .xp-claimed-in,
        .xp-check-in {
          animation: none;
        }
      }
    </style>`}renderRecap(e){let n=this.reveal;return i`
      ${this.renderLevelUp(e)} ${this.renderRewards(e)}
      ${this.renderBreakdown(e)}
      ${e.breakdown.leftEarly?this.collapsible(n===null,i`<p data-xp-left-early class="m-0 mt-3 text-xs text-amber-300">
              ${r(`progression.left_early`)}
            </p>`):t}
    `}slotClass(e){return this.reveal===null?``:e?`xp-card-in`:`invisible`}slideSlotClass(e){return this.reveal===null?``:e?`xp-card-in xp-after-slide`:`invisible`}collapsible(e,t){return i`<div
      data-xp-collapsible=${e?`open`:`closed`}
      class="grid transition-[grid-template-rows] duration-300 ease-out ${e?`grid-rows-[1fr]`:`grid-rows-[0fr]`}"
    >
      <div class="min-h-0 ${e?``:`overflow-hidden`}">${t}</div>
    </div>`}renderLegendMoment(e){let n=this.reveal,a=n===null||n.legend,o=n?.celebratedLegend??!1;return this.collapsible(a,i`<div
        data-xp-legend
        data-xp-slot-hidden=${a?t:`true`}
        class="xp-shine mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-yellow-300/50 bg-gradient-to-r from-transparent via-fuchsia-500/15 to-transparent px-3 py-2.5 ${o?``:this.slideSlotClass(a)}"
      >
        <level-badge
          .level=${100}
          .prestige=${e.after.prestige}
          .legend=${!0}
          .size=${48}
        ></level-badge>
        <div class="min-w-0">
          <div
            class="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300"
          >
            ${r(`progression.legend`)}
          </div>
          <div class="text-sm text-white/80">
            ${r(`progression.legend_reached_body`,{xp:T(e.after.lifetimeXp)})}
          </div>
        </div>
        ${this.renderUnlocks(e,!0)}
      </div>`)}milestoneOf(e){return[...v(e)].reverse().find(e=>y(e.level))}renderLevelUp(e){if(m(e))return this.renderLegendMoment(e);let n=v(e).filter(e=>y(e.level));if(n.length===0)return this.renderUnlockCard(e);let a=this.reveal,o=n.filter(e=>a===null||a.level>=e.level),s=o.length>0?o[o.length-1]:n[n.length-1],c=o.length>0,l=a!==null&&s.level<=a.celebrated;return this.collapsible(c,i`<div
        data-xp-levelup
        data-xp-milestone=${s.level}
        data-xp-slot-hidden=${c?t:`true`}
        class="xp-shine mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-yellow-400/30 bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent px-3 py-2 ${l?``:this.slideSlotClass(c)}"
      >
        <span
          data-xp-level-reached=${s.level}
          class="grid h-11 w-11 shrink-0 place-items-center rounded-full shadow-[0_0_16px_rgba(250,204,21,0.55)] ${a!==null&&c&&!l?`xp-badge-pop`:``}"
        >
          <level-badge
            .level=${s.level}
            .prestige=${s.prestige}
            .size=${40}
          ></level-badge>
        </span>
        <div class="min-w-0">
          <div
            class="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300"
          >
            ${r(`progression.new_milestone`)}
          </div>
          <div class="text-lg font-black leading-tight text-white">
            ${r(`progression.level`,{level:s.level})}
          </div>
        </div>
        ${this.renderUnlocks(e,!0)}
      </div>`)}unlocks(e){return this.view.kind===`result`?(e.flares??[]).map(e=>L(e,this.catalog)):[]}loadCatalog(){this.catalogRequested||(this.catalogRequested=!0,p().then(e=>{this.catalog=d(e,!1,null)}).catch(()=>{}))}renderUnlocks(e,n){let a=this.unlocks(e);if(a.length===0)return t;let o=this.reveal,s=o===null||o.unlockShown,c=o!==null&&s,l=s?``:`invisible`;return i`${a.map(e=>i`${n?i`<span
                aria-hidden="true"
                class="hidden w-px self-stretch bg-yellow-400/30 sm:block ${l} ${c?`xp-unlock-sep`:``}"
              ></span>`:t}
          <div
            data-xp-unlock=${e.flare.flareName}
            data-xp-slot-hidden=${s?t:`true`}
            class="flex min-w-0 basis-full items-center justify-center gap-2.5 sm:basis-auto ${l} ${c?`xp-unlock-in`:``}"
          >
            <span
              class="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-purple-400/60 bg-white/5 p-0.5 shadow-[0_0_14px_rgba(192,132,252,0.45)] ${c?`xp-unlock-pop`:``}"
            >
              ${e.resolved===null?i`<span aria-hidden="true" class="text-xl text-purple-200"
                    >★</span
                  >`:i`<cosmetic-preview
                    class="block h-full w-full"
                    .resolved=${e.resolved}
                    size="card"
                  ></cosmetic-preview>`}
            </span>
            <div class="min-w-0 text-left">
              <div
                class="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-300"
              >
                ${r(`progression.unlocked`)}
              </div>
              <div
                data-xp-unlock-name
                class="truncate text-base font-black leading-tight text-white"
              >
                ${e.name}
              </div>
              <div class="truncate text-[11px] text-white/55">
                ${r(`progression.unlock_in_locker`,{type:e.typeLabel})}
              </div>
            </div>
          </div>`)}`}renderUnlockCard(e){if((e.flares??[]).length===0)return t;let n=this.reveal,r=n===null||n.unlockShown;return this.collapsible(r,i`<div
        data-xp-unlock-card
        class="xp-shine mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-purple-400/30 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent px-3 py-2"
      >
        ${this.renderUnlocks(e,!1)}
      </div>`)}renderRewards(e){let n=N(this.rewardsOf(e));if(n===null)return t;let a=this.reveal,o=a===null||a.rewardsShown,s=a===null?1:a.rewardsCount;return this.collapsible(o,i`<div
        data-xp-rewards
        data-xp-slot-hidden=${o?t:`true`}
        class="xp-shine mt-3 flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 ${this.slideSlotClass(o)}"
      >
        <div class="min-w-0 flex-[1_1_220px]">
          <div
            data-xp-rewards-heading
            class="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50"
          >
            ${r(n.headingKey,n.headingParams)}
          </div>
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
            ${n.lines.map(e=>this.renderRewardLine(e,s))}
            ${n.heldLines.map(e=>this.renderRewardLine(e,s,e.labelKey))}
          </div>
        </div>
        <div data-xp-claim-area class="ml-auto flex items-center gap-2">
          ${this.renderClaim(e,n)}
        </div>
      </div>`)}renderRewardLine(e,n,a){let o=e.currency===`soft`,s=n>=1?e.total.toLocaleString():Math.round(Number(e.total)*n).toLocaleString();return i`<div
      data-xp-reward=${e.currency}
      ?data-xp-reward-held-line=${a!==void 0}
      class="flex items-center gap-1.5"
    >
      ${o?i`<cap-icon .size=${24}></cap-icon>`:i`<plutonium-icon .size=${20}></plutonium-icon>`}
      <span
        data-xp-reward-amount
        class="text-xl font-black tabular-nums ${o?`text-amber-700`:`text-green-400`}"
        >+${s}</span
      >
      <span class="text-[13px] font-bold text-white/80"
        >${r(o?`cosmetics.soft`:`cosmetics.hard`)}</span
      >
      ${e.each===null?t:i`<span data-xp-reward-each class="text-xs text-white/45"
            >${r(`progression.rewards_each`,{count:e.count,amount:e.each.toLocaleString()})}</span
          >`}
      ${a===void 0?t:i`<span data-xp-reward-held class="text-xs font-bold text-white/60"
            >${r(a)}</span
          >`}
    </div>`}renderClaim(e,n){let a=this.claim;if(!n.claimable)return t;if(a.status===`claimed`||a.status===`idle`&&n.allClaimed){let e=a.status===`claimed`?a.to:null,t=a.status===`claimed`?a.from:null;return this.renderClaimed(n,t,e)}let o=a.status===`claiming`;return i`<div class="flex flex-col items-end gap-1">
      <span
        data-xp-claim
        class="inline-flex transition-transform duration-75 ${this.claimPressed&&!o?`scale-95`:``}"
        @pointerdown=${e=>{e.stopPropagation(),this.claimPressed=!0}}
        @pointerup=${()=>this.claimPressed=!1}
        @pointerleave=${()=>this.claimPressed=!1}
        @pointercancel=${()=>this.claimPressed=!1}
        @click=${t=>{t.stopPropagation(),this.claimRewards(e)}}
      >
        <o-button
          variant="primary"
          size="sm"
          translationKey=${o?`progression.rewards_claiming`:`account_modal.claim`}
          .disable=${o}
          .icon=${o?i`<span
                data-xp-claim-spinner
                aria-hidden="true"
                class="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-white/35 border-t-white motion-reduce:animate-none"
              ></span>`:void 0}
        ></o-button>
      </span>
      ${a.status===`idle`&&a.failed?i`<span
            data-xp-claim-error
            role="alert"
            class="text-xs text-red-300"
            >${r(`account_modal.claim_failed`)}</span
          >`:t}
    </div>`}renderClaimed(e,n,a){let o=this.balanceCount,s=e=>a===null?``:Math.round((n?.[e]??a[e])+(a[e]-(n?.[e]??a[e]))*o).toLocaleString(),c=e.lines.some(e=>e.currency===`hard`);return i`<div
      data-xp-claimed
      class="xp-claimed-in flex flex-col items-end gap-0.5"
    >
      <span
        class="inline-flex items-center gap-1.5 text-sm font-extrabold text-emerald-400"
      >
        <svg
          class="xp-check-in h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12.5l4.5 4.5L19 7.5"></path>
        </svg>
        ${r(`progression.rewards_claimed`)}
      </span>
      ${a===null?t:i`<span
            data-xp-balance
            class="text-[11px] tabular-nums text-white/50"
            >${c?r(`progression.rewards_balance`,{caps:s(`soft`),plutonium:s(`hard`)}):r(`progression.rewards_balance_caps`,{caps:s(`soft`)})}</span
          >`}
    </div>`}resetClaim(){this.claimToken++,this.clearClaimTimers(),this.claim={status:`idle`,failed:!1},this.claimPressed=!1,this.balanceCount=1,this.claimedIds=new Set,this.refusedHolds=new Map}rewardsOf(e){return this.view.kind===`result`?j(e.rewards??[],this.refusedHolds):[]}clearClaimTimers(){for(let e of this.claimTimers)clearTimeout(e);this.claimTimers=[]}async claimRewards(e){if(this.claim.status!==`idle`)return;let t=this.claimToken;this.claim={status:`claiming`};let n=await P(this.rewardsOf(e),this.claimedIds);if(t!==this.claimToken)return;for(let e of n.claimedIds)this.claimedIds.add(e);if(n.held.length>0){let e=new Map(this.refusedHolds);for(let{id:t,held:r}of n.held)e.set(t,r);this.refusedHolds=e}if(!n.ok){this.claim={status:`idle`,failed:!0};return}let r=await a();if(t!==this.claimToken)return;let i=n.currency??(r===!1?null:r.player.currency??null),o=i===null||n.currency===null?i:{soft:i.soft-n.credited.soft,hard:i.hard-n.credited.hard};this.claim={status:`claimed`,from:o,to:i},this.countBalance(),r!==!1&&this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:{currency:i,rewards:r.player.rewards??[]},bubbles:!0,composed:!0}))}countBalance(){if(this.clearClaimTimers(),pe()){this.balanceCount=1;return}this.balanceCount=0;let e=Math.max(2,Math.round(J/30));for(let t=1;t<=e;t++)this.claimTimers.push(setTimeout(()=>this.balanceCount=Y(t/e),q+J*t/e))}renderXpCard(e,n,r,a){return i`<div
      class="w-[calc(50%-0.25rem)] min-w-0 sm:w-[calc(25%-0.375rem)] ${this.slotClass(a.shown)}"
      data-xp-slot-hidden=${a.shown?t:`true`}
    >
      <div
        data-xp-card
        title=${e}
        class="xp-shine h-full rounded-xl border bg-white/5 px-2 py-2.5 text-center ${r}"
        style=${a.style??t}
      >
        <div
          data-xp-line=${a.line??t}
          class="truncate text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
        >
          ${e}
        </div>
        <div
          data-xp-card-value
          class="mt-1 truncate text-lg font-black leading-none tabular-nums"
        >
          ${n}
        </div>
      </div>
    </div>`}renderBonuses(e){let n=g(e.breakdown);if(n.length===0)return t;let r=this.reveal;return this.collapsible(r===null||r.multipliersShown>0,i`<div
        data-xp-bonuses
        class="mt-1 flex min-h-5 flex-wrap items-center justify-center gap-x-5"
      >
        ${n.map((e,n)=>{let a=r===null||n<r.multipliersShown,o=this.accentOf(e);return i`<span
            data-xp-multiplier=${e.key}
            data-xp-tier=${e.key===`subscriber`?S(e.permille)?.tier??t:t}
            data-xp-slot-hidden=${a?t:`true`}
            style=${o===null?t:`--accent-a: ${o[0]}; --accent-b: ${o[1]}`}
            class="inline-block text-sm font-bold uppercase italic tracking-wide ${e.permille>1e3?`xp-bonus-line`:`text-sky-300`} ${this.slideSlotClass(a)}"
            >${C(e.key,e.permille)}</span
          >`})}
      </div>`)}renderBreakdown(e){let t=x(e.breakdown);if(t.length===0)return i``;let n=this.reveal,a=n?.lineValues??Q(e),o=n?.applying??null;return i`<div
      data-xp-breakdown
      class="mt-3 flex flex-wrap justify-center gap-2"
    >
      ${t.map((e,i)=>{let s=n===null||i<n.linesShown,c=a[i]>e.amount?`xp-card-boosted`:a[i]<e.amount?`xp-card-cut`:``,l=o!==null&&s,u=l?`xp-card-wipe ${o===`cut`?`xp-wipe-cut`:``}`:``,d=l?`--wipe-delay: ${Math.round(G(i,t.length)*U)}ms; --wipe-ms: ${Math.round(W*U)}ms`:void 0;return this.renderXpCard(r(h[e.key]),r(`progression.xp_total`,{xp:T(a[i])}),`text-yellow-300 border-yellow-400/20 ${c} ${u}`,{line:e.key,shown:s,style:d})})}
    </div>`}render(){let e=this.view;switch(e.kind){case`hidden`:return t;case`signed_out`:return this.renderNote(`progression.sign_in_to_earn`,`signed_out`);case`awaiting_end`:return this.renderNote(`progression.awaiting_end`,`awaiting_end`);case`provisional`:return e.provisional.response.eligible?this.renderFull(e.provisional.response):this.renderIneligible(e.provisional.response.reason,`provisional_ineligible`);case`calculating`:return this.renderCalculating();case`result`:return e.data.eligible?this.renderFull(e.data):this.renderIneligible(e.data.reason,`ineligible`)}}};c([s({attribute:!1})],$.prototype,`view`,void 0),c([s({attribute:!1})],$.prototype,`onScreen`,void 0),c([s({attribute:!1})],$.prototype,`gameType`,void 0),c([e()],$.prototype,`reveal`,void 0),c([e()],$.prototype,`barAnimate`,void 0),c([e()],$.prototype,`barDurationMs`,void 0),c([e()],$.prototype,`claim`,void 0),c([e()],$.prototype,`claimPressed`,void 0),c([e()],$.prototype,`balanceCount`,void 0),c([e()],$.prototype,`catalog`,void 0),$=c([n(`game-xp-panel`)],$);export{$ as GameXpPanel};