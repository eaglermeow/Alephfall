import{Bn as e,Gn as t,Hn as n,In as r,Jn as i,Pt as a,Un as o,Vn as s,dn as c,gt as l,oi as u,xt as d,zr as f}from"./index-B4QD0Fte.js";import"./CapIcon-CZ3M-qLe.js";import"./PlutoniumIcon-EBDEFxV4.js";import{t as p}from"./ProfileShare-Bl2sOYKg.js";function m(e){return typeof e==`object`&&!!e&&`currency`in e&&typeof e.currency==`object`&&e.currency!==null}function h(e){if(typeof e!=`object`||!e||!(`held`in e))return null;let t=e.held;return typeof t==`string`&&t.length>0?t:null}async function g(e,{claim:t=d,stopped:n=()=>!1}={}){let r={claimedIds:[],creditedIds:[],currency:null,held:[],failed:!1};for(let i of e){if(!u(i))continue;if(n())break;let e=i.id,a=await t(e);if(a===`not_found`){r.claimedIds.push(e);continue}let o=h(a);if(o!==null){r.held.push({id:e,held:o});continue}if(!m(a)){r.failed=!0;break}r.claimedIds.push(e),r.creditedIds.push(e),r.currency=a.currency}return(r.claimedIds.length>0||r.held.length>0)&&a(),r}function _(e){let t=e.cosmetic;return t===null?e.type===`crown`||e.type===`flag`?r(`common.none`):r(`territory_patterns.pattern.default`):e.type===`flag`&&e.key===`country:xx`?r(`common.none`):e.type===`pattern`||e.type===`skin`?l(`territory_patterns.pattern`,t.name):e.type===`pack`||e.type===`cosmeticPack`?(t.displayName??``).replace(/(^|[\s-])\p{L}/gu,e=>e.toLocaleUpperCase()):e.type===`subscription`?l(`subscriptions`,t.name):e.type===`effect`?l(`effects`,t.name):e.type===`crown`?l(`crowns`,t.name):l(`flags`,t.name)}function v(e){let t=_(e),n=e.colorPalette;return n===null||e.cosmetic===null?t:r(`inventory.selected_cosmetic_variant`,{name:t,variant:l(`territory_patterns.color_palette`,n.name)})}function y(e){switch(e.type){case`pattern`:case`skin`:return r(`cosmetics.type_skin`);case`flag`:return r(`cosmetics.type_flag`);case`crown`:return r(`cosmetics.type_crown`);case`effect`:return r(`cosmetics.type_effect`,{type:r(`effects.type.${e.effectType}`)});default:return``}}var b=`400px`,x=new Map,S;function C(){return S===void 0?typeof IntersectionObserver>`u`?(S=null,S):(S=new IntersectionObserver(e=>{for(let t of e)x.get(t.target)?.(t.isIntersecting)},{rootMargin:b,scrollMargin:b}),S):S}function w(e,t){let n=C();return n===null?(t(!0),()=>{}):(x.set(e,t),n.observe(e),()=>{x.get(e)===t&&(x.delete(e),n.unobserve(e))})}var T=class extends o{constructor(...e){super(...e),this.size=`card`,this.near=!1,this.stopObserving=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.classList.add(`block`,`h-full`,`w-full`),this.stopObserving=w(this,e=>{this.near=e})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserving?.(),this.stopObserving=null,this.near=!1}render(){return i`<div
      data-cosmetic-preview=${this.resolved.cosmetic===null?`default`:this.resolved.type}
      class=${this.size===`detail`?`h-full w-full`:this.resolved.type===`subscription`?`w-full`:`aspect-square w-full`}
    >
      ${this.near||!this.deferrable()?this.renderResolvedPreview():t}
    </div>`}deferrable(){if(this.size!==`card`)return!1;let e=this.resolved.type;return e===`pattern`||e===`effect`||e===`flag`||e===`crown`||e===`skin`}renderResolvedPreview(){if(this.resolved.type===`pattern`){let e=this.resolved.cosmetic;return p(e===null?null:{name:e.name,patternData:e.pattern,colorPalette:this.resolved.colorPalette??void 0},150,150)}if(this.resolved.type===`skin`){let e=this.resolved.cosmetic;return e===null?this.renderDefaultPreview():i`<img
        src=${e.url}
        alt=${_(this.resolved)}
        class="w-full h-full object-contain pointer-events-none"
        draggable="false"
        loading="lazy"
      />`}if(this.resolved.type===`effect`){let e=this.resolved.cosmetic;return e===null?this.renderDefaultPreview():f(e)?e.attributes.type===`sparkles`?i`<sparkles-swatch
            class="block w-full h-full"
            .explosion=${e.attributes}
          ></sparkles-swatch>`:i`<shockwave-swatch
          class="block w-full h-full"
          .explosion=${e.attributes}
        ></shockwave-swatch>`:i`<effect-scene
        class="block w-full h-full"
        .effect=${e}
      ></effect-scene>`}if(this.resolved.type===`crown`){let e=this.resolved.cosmetic;return e===null?this.renderDefaultPreview():i`<img
        src=${e.url}
        alt=${_(this.resolved)}
        class="w-full h-full object-contain pointer-events-none"
        draggable="false"
        loading="lazy"
      />`}if(this.resolved.type===`pack`){let e=this.resolved.cosmetic,n=e.currency===`hard`,a=n?i`<plutonium-icon
            class="block shrink-0"
            .size=${80}
          ></plutonium-icon>`:i`<cap-icon class="block shrink-0" .size=${80}></cap-icon>`,o=n?`text-green-400`:`text-amber-700`,s=n?`cosmetics.hard`:`cosmetics.soft`;return i`<div
        class="relative flex h-full w-full flex-col items-center justify-center gap-0.5 overflow-visible text-center"
      >
        ${a}
        <span class="text-lg font-black leading-none ${o}"
          >${e.amount.toLocaleString()}</span
        >
        <span class="text-[10px] font-bold leading-none text-white/50 uppercase"
          >${r(s)}</span
        >
        ${e.product?.price?i`<span
              data-pack-price
              class="pt-0.5 text-sm font-bold leading-none text-blue-300"
              >${e.product.price}</span
            >`:t}
        ${e.bonusAmount>0?i`<div
              class="absolute top-8 -right-10 w-40 bg-green-500 text-white text-[10px] font-black py-0.5 rotate-45 shadow-md uppercase tracking-wide pointer-events-none"
            >
              ${r(`cosmetics.free`,{numFree:e.bonusAmount.toLocaleString()})}
            </div>`:t}
      </div>`}if(this.resolved.type===`cosmeticPack`)return this.renderPackPreview(this.resolved.packItems??[]);if(this.resolved.type===`subscription`){let e=this.resolved.cosmetic,n=this.size===`detail`,a=n?36:24,o=n?`text-2xl font-bold text-green-400`:`text-sm font-bold text-green-400`,s=n?`text-xs text-white/50 uppercase`:`text-[10px] text-white/50 uppercase`,c=`self-start text-left ${n?`text-xs`:`text-[10px]`} font-bold text-purple-300 uppercase tracking-wide`,l=!e.requiresSteamLicence;return i`<div
        class="flex flex-col items-center justify-center h-full w-full text-center gap-2 p-1"
      >
        <div
          class="flex flex-col items-center ${n?`gap-2`:`gap-1`} w-full"
        >
          <div class="self-start flex items-center gap-1.5">
            <plutonium-icon .size=${a}></plutonium-icon>
            <span class=${o}
              >${e.hardCurrencySignupBonus.toLocaleString()}</span
            >
            <span class=${s}
              >${r(`cosmetics.per_month`)}</span
            >
          </div>
          <div class="self-start flex items-center gap-1.5">
            <plutonium-icon .size=${a}></plutonium-icon>
            <span class=${o}
              >${e.dailyHardCurrency.toLocaleString()}</span
            >
            <span class=${s}
              >${r(`cosmetics.per_day`)}</span
            >
          </div>
          ${l?i`<span
                data-subscription-perk="verified_name"
                class=${c}
                ><span class="text-green-400">✓</span> ${r(`cosmetics.verified_name`)}</span
              >`:t}
          ${l&&e.canCreatePublicLobbies?i`<span
                data-subscription-perk="public_lobbies"
                class=${c}
                ><span class="text-green-400">✓</span> ${r(`cosmetics.public_lobbies`)}</span
              >`:t}
        </div>
      </div>`}return i`<img
      src=${this.resolved.cosmetic.url}
      alt=${_(this.resolved)}
      class="w-full h-full object-contain pointer-events-none"
      draggable="false"
      loading="lazy"
      @error=${e=>{let t=e.currentTarget,n=`/flags/xx.svg`;t.src&&!t.src.endsWith(n)&&(t.src=n)}}
    />`}renderPackPreview(e){let n=e.slice(0,4),a=e.length-n.length;return i`<div
      class="relative grid h-full w-full grid-cols-2 grid-rows-2 gap-1 overflow-hidden"
    >
      ${n.map(e=>i`<div
            data-cosmetic-pack-item=${e.key}
            class="flex min-h-0 min-w-0 items-center justify-center overflow-hidden rounded bg-black/30 p-1"
          >
            <cosmetic-preview .resolved=${e} size="card"></cosmetic-preview>
          </div>`)}
      ${a>0?i`<span
            class="absolute bottom-1 right-1 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white"
            >${r(`cosmetics.pack_more_items`,{count:a})}</span
          >`:t}
    </div>`}renderDefaultPreview(){return i`<div
      class="w-full h-full flex items-center justify-center text-white/40 text-xs uppercase"
    >
      ${r(`territory_patterns.pattern.default`)}
    </div>`}};c([s({attribute:!1})],T.prototype,`resolved`,void 0),c([s({type:String})],T.prototype,`size`,void 0),c([e()],T.prototype,`near`,void 0),T=c([n(`cosmetic-preview`)],T);export{y as n,g as r,v as t};