import{C as e,D as t,E as n,Hn as r,In as i,Jn as a,Nt as o,O as s,Pt as c,S as l,T as u,b as d,dn as f,en as p,hr as m,nt as h,rt as g,w as _}from"./index-B4QD0Fte.js";var v,y={account_already_has_steam:`steam_link_modal.reason_account_already_has_steam`,steam_linked_elsewhere:`steam_link_modal.reason_steam_linked_elsewhere`,steam_has_progress:`steam_link_modal.reason_steam_has_progress`,expired:`steam_link_modal.reason_expired`,rate_limited:`steam_link_modal.reason_rate_limited`,discard_blocked:`steam_link_modal.reason_discard_blocked`,discard_blocked_paid:`steam_link_modal.reason_discard_blocked_paid`,discard_deferred:`steam_link_modal.reason_discard_deferred`,offer_unavailable:`steam_link_modal.reason_offer_unavailable`,offer_invalid:`steam_link_modal.reason_offer_unavailable`,account_is_guest:`steam_link_modal.reason_offer_unavailable`,discard_not_linked:`steam_link_modal.reason_discard_not_linked`},b=`common.error_generic`,x=new Set([`discard_deferred`,`rate_limited`,`failed`]);function S(e){return e!==!1&&!m(e)}function C(e,t){let n=y[e??``]??b;return e===`rate_limited`?i(n,{seconds:t??0}):i(n)}var w=`flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all disabled:opacity-50 disabled:pointer-events-none border-0`,T=v=class extends g{constructor(...e){super(...e),this.mode=`token`,this.loadState=`loading`,this.redeemState=`idle`,this.failureReason=null,this.retryAfterSeconds=null,this.token=null,this.personaName=null,this.username=null,this.code=null,this.codeDraft=``,this.codeError=null,this.conflict=null,this.conflictAnswered=!1,this.requestId=0}modalConfig(){return{maxWidth:`480px`}}renderHeaderSlot(){return h({title:i(`steam_link_modal.title`),onBack:()=>this.close(),ariaLabel:i(`common.back`)})}async needsAccountLogin(){return await p()?S(await o()):!0}routeToAccountLogin(e){this.requestId++,e.kind===`token`?s(e.token):t(),this.isOpen()&&this.close(),window.location.hash=`modal=account`}async openWithToken(e){if(await this.needsAccountLogin()){this.routeToAccountLogin({kind:`token`,token:e});return}this.mode=`token`,this.token=e,this.open()}async openForCodeEntry(){if(await this.needsAccountLogin()){this.routeToAccountLogin({kind:`code_entry`});return}this.mode=`code`,this.token=null,this.open()}async openForConflict(e){this.mode=`conflict`,this.token=null,this.conflict=e,this.open()}onOpen(){let e=++this.requestId;if(this.mode!==`conflict`&&(this.conflict=null),this.conflictAnswered=!1,this.redeemState=`idle`,this.failureReason=null,this.retryAfterSeconds=null,this.personaName=null,this.username=null,this.mode===`code`){this.loadState=`code_entry`,this.code=null,this.codeDraft=``,this.codeError=null;return}if(this.mode===`conflict`){this.loadState=`loading`,this.personaName=this.conflict?.personaName??null,o().then(t=>{if(e===this.requestId){if(t===!1||S(t)){this.loadState=`load_error`,this.requestUpdate();return}this.username=t.player.username??t.player.publicId,this.loadState=`ready`,this.requestUpdate()}});return}this.loadState=`loading`;let t=this.token;if(t===null){this.loadState=`load_error`;return}Promise.all([l(t),o()]).then(([n,r])=>{if(e===this.requestId){if(S(r)){this.routeToAccountLogin({kind:`token`,token:t});return}if(!n.ok||r===!1){this.loadState=`load_error`,this.requestUpdate();return}this.personaName=n.personaName,this.username=r.player.username??r.player.publicId,this.loadState=`ready`,this.requestUpdate()}})}onClose(){this.conflict!==null&&!this.conflictAnswered&&this.mode!==`conflict`&&d(`cancel`),this.conflict=null,this.conflictAnswered=!1,this.token=null,this.code=null,this.codeDraft=``,this.codeError=null,this.requestId++}handleCodeInput(e){this.codeDraft=e.target.value}handleCodeSubmit(){let t=_(this.codeDraft);if(!e(t)){this.codeError=i(`steam_link_modal.invalid_code`),this.requestUpdate();return}let n=this.requestId;this.code=t,this.codeError=null,this.loadState=`loading`,this.requestUpdate(),o().then(e=>{if(n===this.requestId){if(S(e)){this.routeToAccountLogin({kind:`code_entry`});return}if(e===!1){this.loadState=`load_error`,this.requestUpdate();return}this.personaName=null,this.username=e.player.username??e.player.publicId,this.loadState=`ready`,this.requestUpdate()}})}async handleConfirm(){if(this.loadState!==`ready`||this.redeemState===`redeeming`||this.redeemState===`success`)return;let e;if(this.mode===`code`){let t=this.code;if(t===null)return;e=()=>n(t)}else{let t=this.token;if(t===null)return;e=()=>u(t)}let t=this.requestId;this.redeemState=`redeeming`,this.failureReason=null,this.retryAfterSeconds=null,this.requestUpdate();let r=await e();if(r.ok&&c(),t!==this.requestId)return;if(r.ok){this.redeemState=`success`,this.requestUpdate();return}let i=r.conflict;if(i!==void 0&&i.discardable){this.showConflict(i.account),this.requestUpdate();return}let a=i!==void 0&&!i.discardable?v.blockedReasonKey(i.block):r.reason,o=r.retryAfterSeconds??null;this.mode===`code`?(this.loadState=`code_entry`,this.codeError=C(a,o),this.redeemState=`idle`,this.failureReason=null,this.retryAfterSeconds=null):(this.redeemState=`failed`,this.failureReason=a,this.retryAfterSeconds=o),this.requestUpdate()}static blockedReasonKey(e){return e===`paid`?`discard_blocked_paid`:`discard_blocked`}showConflict(e){this.conflict=e,this.conflictAnswered=!1,this.personaName=e.personaName??this.personaName,this.redeemState=`idle`,this.failureReason=null,this.retryAfterSeconds=null}conflictPhase(){return this.redeemState===`redeeming`?`deleting`:this.conflictAnswered?`spent`:this.loadState===`ready`?`ready`:`naming`}async handleDiscard(){if(this.conflict===null||this.conflictPhase()!==`ready`)return;let e=this.requestId;this.conflictAnswered=!0,this.redeemState=`redeeming`,this.failureReason=null,this.retryAfterSeconds=null,this.requestUpdate();let t=await d(`discard`);if(t.ok&&c(),e!==this.requestId)return;if(t.ok&&t.linked){this.conflict=null,this.redeemState=`success`,this.requestUpdate();return}let n;n=t.ok?`discard_not_linked`:t.reason===`discard_blocked`?v.blockedReasonKey(t.block):t.reason,this.redeemState=`failed`,this.failureReason=n,this.retryAfterSeconds=t.ok?null:t.retryAfterSeconds??null,this.conflictAnswered=!x.has(n),this.requestUpdate()}handleDeclineConflict(){this.conflictAnswered=!0,this.mode!==`conflict`&&d(`cancel`),this.close()}renderBody(){if(this.loadState===`load_error`)return a`
        <div class="flex flex-col gap-4 p-6 text-center">
          <p
            class="steam-link-load-error-text text-red-300 text-sm font-medium"
          >
            ${this.mode===`token`?i(`steam_link_modal.load_error`):i(`steam_link_modal.load_error_code`)}
          </p>
          <button
            class="${w} bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80"
            @click=${()=>this.close()}
          >
            ${i(`common.close`)}
          </button>
        </div>
      `;if(this.redeemState===`success`)return a`
        <div class="flex flex-col gap-4 p-6 text-center">
          <p class="text-white/90 text-sm font-medium">
            ${i(`steam_link_modal.success`)}
          </p>
          <button
            class="${w} bg-malibu-blue text-white hover:bg-aquarius"
            @click=${()=>this.close()}
          >
            ${i(`common.close`)}
          </button>
        </div>
      `;if(this.conflict!==null){let e=this.conflict,t=this.conflictPhase(),n=t===`naming`?`…`:this.username??``,r=e.createdAt===null?null:new Date(e.createdAt),o=r===null||Number.isNaN(r.getTime())?null:r.toLocaleDateString(),s=e.gamesPlayedCapped?i(`steam_link_modal.conflict_games_capped`,{games:e.gamesPlayed}):i(`steam_link_modal.conflict_games`,{games:e.gamesPlayed});return a`
        <div class="flex flex-col gap-4 p-6">
          <p class="text-white text-base font-medium text-center">${e.personaName===null?i(`steam_link_modal.conflict_prompt_no_persona`):i(`steam_link_modal.conflict_prompt`,{persona:e.personaName})}</p>
          <p class="text-white/70 text-sm text-center">
            ${i(`steam_link_modal.conflict_explain`)}
          </p>
          <div
            class="steam-link-conflict-account flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
          >
            <span class="text-white text-sm font-semibold"
              >${e.username??e.publicId}</span
            >
            <span class="text-white/50 text-xs">
              ${s}${o===null?``:` · ${o}`}
            </span>
          </div>
          <p class="text-white/70 text-sm text-center">
            ${i(`steam_link_modal.conflict_keep`,{username:n})}
          </p>
          <p class="text-red-400 text-sm text-center font-medium">
            ${i(`steam_link_modal.conflict_warning`)}
          </p>
          ${this.redeemState===`failed`?a`<p class="text-red-400 text-sm text-center">
                ${C(this.failureReason,this.retryAfterSeconds)}
              </p>`:null}
          <div class="flex gap-3">
            <button
              class="steam-link-cancel-btn ${w} bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80"
              ?disabled=${t===`deleting`}
              @click=${()=>t===`spent`?this.close():this.handleDeclineConflict()}
            >
              ${i(t===`spent`?`common.close`:`common.cancel`)}
            </button>
            ${t===`spent`?null:a`<button
                  class="steam-link-discard-btn ${w} bg-red-500/90 text-white hover:bg-red-500"
                  ?disabled=${t!==`ready`}
                  @click=${()=>this.handleDiscard()}
                >
                  ${i(t===`deleting`?`steam_link_modal.conflict_deleting`:`steam_link_modal.conflict_confirm`)}
                </button>`}
          </div>
        </div>
      `}if(this.loadState===`code_entry`)return a`
        <div class="flex flex-col gap-4 p-6">
          <p class="text-white text-sm text-center">
            ${i(`steam_link_modal.code_prompt`)}
          </p>
          <input
            type="text"
            class="steam-link-code-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-center tracking-widest uppercase placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium"
            placeholder=${i(`steam_link_modal.code_placeholder`)}
            .value=${this.codeDraft}
            @input=${e=>this.handleCodeInput(e)}
            @keydown=${e=>{e.key===`Enter`&&this.handleCodeSubmit()}}
          />
          ${this.codeError?a`<p class="text-red-400 text-sm text-center">
                ${this.codeError}
              </p>`:null}
          <div class="flex gap-3">
            <button
              class="steam-link-cancel-btn ${w} bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80"
              @click=${()=>this.close()}
            >
              ${i(`common.cancel`)}
            </button>
            <button
              class="steam-link-code-submit-btn ${w} bg-malibu-blue text-white hover:bg-aquarius"
              @click=${()=>this.handleCodeSubmit()}
            >
              ${i(`steam_link_modal.code_submit`)}
            </button>
          </div>
        </div>
      `;let e=this.loadState===`ready`,t=e?this.username??``:`…`,n=e&&this.personaName===null?i(`steam_link_modal.confirm_prompt_no_persona`,{username:t}):i(`steam_link_modal.confirm_prompt`,{persona:e?this.personaName:`…`,username:t}),r=!e||this.redeemState===`redeeming`,o=this.redeemState===`redeeming`?i(`steam_link_modal.linking`):i(`steam_link_modal.confirm`);return a`
      <div class="flex flex-col gap-6 p-6">
        <p class="text-white text-lg font-medium text-center">${n}</p>
        ${this.redeemState===`failed`?a`<p class="text-red-400 text-sm text-center">
              ${C(this.failureReason,this.retryAfterSeconds)}
            </p>`:null}
        <div class="flex gap-3">
          <button
            class="steam-link-cancel-btn ${w} bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80"
            ?disabled=${this.redeemState===`redeeming`}
            @click=${()=>this.close()}
          >
            ${i(`common.cancel`)}
          </button>
          <button
            class="steam-link-confirm-btn ${w} bg-malibu-blue text-white hover:bg-aquarius"
            ?disabled=${r}
            @click=${()=>this.handleConfirm()}
          >
            ${o}
          </button>
        </div>
      </div>
    `}};T=v=f([r(`steam-link-modal`)],T);export{T as SteamLinkModal};