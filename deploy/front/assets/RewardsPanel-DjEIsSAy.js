import{Bn as e,Hn as t,In as n,Jn as r,Nt as i,Pt as a,Un as o,Vn as s,Xn as c,bt as l,dn as u,ln as d,oi as f,xt as p}from"./index-B4QD0Fte.js";import"./CapIcon-CZ3M-qLe.js";import"./PlutoniumIcon-EBDEFxV4.js";import{d as m}from"./Progression-Dg-YxkFq.js";var h=class extends o{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.claiming=!1}createRenderRoot(){return this}emitChanged(e){this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:e,bubbles:!0,composed:!0}))}async handleClaim(e){if(!this.claiming){this.claiming=!0;try{let t=await p(e.id);if(t===!1){await d(n(`account_modal.claim_failed`));return}if(a(),t!==`not_found`&&`held`in t){let n=await i(),r=n===!1?this.rewards:n.player.rewards??[];this.emitChanged({currency:n===!1?null:n.player.currency??null,rewards:r.map(n=>n.id===e.id&&f(n)?{...n,held:t.held}:n)});return}if(t===`not_found`){let t=await i();this.emitChanged({currency:t===!1?null:t.player.currency??null,rewards:t===!1?this.rewards.filter(t=>t.id!==e.id):t.player.rewards??[]});return}this.emitChanged({currency:t.currency,rewards:this.rewards.filter(t=>t.id!==e.id)})}finally{this.claiming=!1}}}async handleClaimAll(){if(!this.claiming){this.claiming=!0;try{let e=await l();if(e===!1){await d(n(`account_modal.claim_failed`));return}a(),this.emitChanged({currency:e.currency,rewards:e.held})}finally{this.claiming=!1}}}formatAmount(e){try{return BigInt(e).toLocaleString()}catch{return e}}rewardLabel(e){let t=m(e.reason);return t===void 0?e.note?e.note:e.reason===`subscription_signup_bonus`?n(`account_modal.reward_signup_bonus`):e.reason===`subscription_monthly_bonus`?n(`account_modal.reward_monthly_bonus`):e.reason===`subscription_daily`?n(`account_modal.reward_daily`):e.reason:n(t)}renderReward(e){let t=e.currencyType===`hard`;return r`
      <div
        class="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
      >
        <div class="flex items-center gap-3 min-w-0">
          ${t?r`<plutonium-icon .size=${20}></plutonium-icon>`:r`<cap-icon .size=${20}></cap-icon>`}
          <div class="flex flex-col min-w-0">
            <span
              class="text-sm font-bold ${t?`text-green-400`:`text-amber-700`}"
              >+${this.formatAmount(e.amount)}</span
            >
            <span class="text-xs text-white/60 truncate"
              >${this.rewardLabel(e)}</span
            >
          </div>
        </div>
        ${f(e)?r`<o-button
              variant="primary"
              size="xs"
              translationKey="account_modal.claim"
              .disable=${this.claiming}
              @click=${()=>this.handleClaim(e)}
            ></o-button>`:r`<span
              data-reward-held
              class="shrink-0 text-xs font-bold text-white/60 text-right"
              >${e.held===`trust`?n(`account_modal.reward_held_trust`):``}</span
            >`}
      </div>
    `}trustNoteKey(){let e=c.isOnGamePortal();return this.signedIn?e?`account_modal.reward_held_trust_info_crazygames`:`account_modal.reward_held_trust_info`:e?`account_modal.reward_held_trust_info_signed_out_crazygames`:`account_modal.reward_held_trust_info_signed_out`}otherHoldNoteKey(){return`account_modal.reward_held_other_info`}renderHeldNotes(){let e=this.rewards.filter(e=>!f(e)),t=new Set;return e.some(e=>e.held===`trust`)&&t.add(this.trustNoteKey()),e.some(e=>e.held!==`trust`)&&t.add(this.otherHoldNoteKey()),[...t].map(e=>r`<p data-reward-held-note class="mt-3 text-xs text-white/60">
          ${n(e)}
        </p>`)}render(){if(this.rewards.length===0)return r``;let e=this.rewards.filter(f);return r`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="flex items-center justify-between gap-4 mb-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>🎁</span>
            ${n(`account_modal.unclaimed_rewards`)}
          </h3>
          ${e.length>1?r`<o-button
                variant="primary"
                size="xs"
                translationKey="account_modal.claim_all"
                .disable=${this.claiming}
                @click=${this.handleClaimAll}
              ></o-button>`:``}
        </div>
        <div class="flex flex-col gap-2">
          ${this.rewards.map(e=>this.renderReward(e))}
        </div>
        ${this.renderHeldNotes()}
      </div>
    `}};u([s({type:Array})],h.prototype,`rewards`,void 0),u([s({type:Boolean})],h.prototype,`signedIn`,void 0),u([e()],h.prototype,`claiming`,void 0),h=u([t(`rewards-panel`)],h);