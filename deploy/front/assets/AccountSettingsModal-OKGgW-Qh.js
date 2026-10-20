import{Bn as e,Gn as t,Hn as n,In as r,It as i,Jn as a,Jt as o,Mt as s,Rt as c,St as l,Tt as u,Un as d,Vn as f,Wn as p,Xn as m,an as h,cn as g,dn as _,ln as v,mr as y,pn as b,sr as x,tn as S,zt as C}from"./index-B4QD0Fte.js";import"./LevelBadge-BmsHRyDe.js";import{n as w,t as T}from"./LinkResult-Bde3tDwz.js";import{n as E}from"./OwnLevelBadge-DyDfO1lO.js";import{t as D}from"./ProfileMenuModal-mWVTxarj.js";var O=class extends d{constructor(...e){super(...e),this.typedWord=``,this.portal=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal)}disconnectedCallback(){super.disconnectedCallback(),this.portal&&=(p(a``,this.portal),this.portal.remove(),null)}render(){return this.portal&&p(this.renderOverlay(),this.portal),a``}confirmWord(){return r(`account_modal.delete_account_confirm_word`)}wordMatches(){return this.typedWord.trim().toUpperCase()===this.confirmWord().toUpperCase()}renderOverlay(){let e=this.confirmWord();return a`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${e=>{e.target===e.currentTarget&&this.handleCancel()}}
      >
        <div
          class="relative mx-4 w-full max-w-md p-6 rounded-2xl border border-red-500/50 bg-surface shadow-2xl"
        >
          <h2 class="text-lg font-bold text-white mb-2">
            ${r(`account_modal.delete_account_title`)}
          </h2>
          <p class="text-sm font-medium text-red-300 mb-5">
            ${r(`account_modal.delete_account_warning`)}
          </p>
          <label class="block mb-5">
            <span class="text-white/50 text-xs">
              ${r(`account_modal.delete_account_type_to_confirm`,{word:e})}
            </span>
            <input
              type="text"
              .value=${this.typedWord}
              @input=${e=>this.typedWord=e.target.value}
              placeholder=${e}
              autocomplete="off"
              class="mt-1.5 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/50 text-sm"
            />
          </label>
          <div class="flex gap-3">
            <button
              @click=${()=>this.handleCancel()}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all"
            >
              ${r(`common.cancel`)}
            </button>
            <button
              @click=${()=>this.handleConfirm()}
              ?disabled=${!this.wordMatches()}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all disabled:opacity-50 disabled:pointer-events-none border-0"
            >
              ${r(`account_modal.delete_account_confirm_button`)}
            </button>
          </div>
        </div>
      </div>
    `}handleConfirm(){this.wordMatches()&&this.dispatchEvent(new CustomEvent(`confirm`))}handleCancel(){this.dispatchEvent(new CustomEvent(`cancel`))}};_([e()],O.prototype,`typedWord`,void 0),O=_([n(`delete-account-dialog`)],O);var k=({options:e,value:t,onChange:n,ariaLabel:r,className:i=``})=>a`
  <div class="relative ${i}">
    <select
      class="w-full appearance-none py-1.5 pl-3 pr-9 border border-white/20 rounded-lg bg-black/40 text-white text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
      aria-label=${r}
      .value=${t}
      @change=${e=>n(e.target.value)}
    >
      ${e.map(e=>a`<option
            value=${e.value}
            ?selected=${e.value===t}
            class="bg-surface text-white"
          >
            ${e.label}
          </option>`)}
    </select>
    <span
      class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
      aria-hidden="true"
    >
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </div>
`,A=class extends d{constructor(...e){super(...e),this.audiences=[],this.audience=``,this.token=null,this.busy=!1,this.copied=!1,this.errorKey=null,this.expiryTimer=null,this.handleAudienceChange=e=>{this.audience=e,this.clearToken(),this.errorKey=null},this.handleGenerate=async()=>{if(this.busy)return;this.busy=!0,this.errorKey=null,this.clearToken();let e=this.audience,t=await l(e);if(this.busy=!1,e!==this.audience)return;if(!t.ok){this.errorKey=t.code===`rate_limited`?`account_modal.identity_token_rate_limited`:t.code===`logged_out`?`account_modal.identity_token_logged_out`:`account_modal.identity_token_failed`;return}this.token=t.data.token;let n=Date.parse(t.data.expiresAt)-Date.now();this.expiryTimer=setTimeout(()=>this.clearToken(),Math.max(n,0))},this.handleCopy=async()=>{if(this.token)try{await b(this.token,()=>this.copied=!0,()=>this.copied=!1)}catch{}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadAudiences()}disconnectedCallback(){this.clearToken(),super.disconnectedCallback()}async loadAudiences(){let e=await s();this.audiences=e,e.includes(this.audience)||(this.audience=e[0]??``,this.clearToken())}render(){return this.audiences.length===0?t:a`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="text-white font-medium">
          ${r(`account_modal.identity_token_title`)}
        </div>
        <div class="text-white/50 text-sm mt-1">
          ${r(`account_modal.identity_token_desc`)}
        </div>
        <div class="mt-4 flex items-center gap-3">
          ${k({options:this.audiences.map(e=>({value:e,label:e})),value:this.audience,onChange:this.handleAudienceChange,ariaLabel:r(`account_modal.identity_token_site`),className:`flex-1`})}
          <o-button
            variant="primary"
            size="sm"
            translationKey="account_modal.identity_token_generate"
            .disable=${this.busy}
            @click=${this.handleGenerate}
          ></o-button>
        </div>
        ${this.errorKey?a`<div class="text-red-400 text-sm mt-3">
              ${r(this.errorKey)}
            </div>`:t}
        ${this.token?this.renderToken(this.token):t}
      </div>
    `}renderToken(e){return a`
      <div class="mt-4 flex items-center gap-3">
        <input
          type="text"
          readonly
          .value=${e}
          aria-label=${r(`account_modal.identity_token_title`)}
          @focus=${e=>e.target.select()}
          class="flex-1 min-w-0 px-3 py-1.5 bg-black/40 border border-white/20 rounded-lg text-white text-xs font-mono focus:outline-none focus:border-blue-500"
        />
        <o-button
          variant="secondary"
          size="sm"
          translationKey=${this.copied?`account_modal.identity_token_copied`:`account_modal.identity_token_copy`}
          @click=${this.handleCopy}
        ></o-button>
      </div>
      <div class="text-white/50 text-xs mt-2">
        ${r(`account_modal.identity_token_note`,{site:this.audience})}
      </div>
    `}clearToken(){this.expiryTimer!==null&&(clearTimeout(this.expiryTimer),this.expiryTimer=null),this.token=null,this.copied=!1}};_([e()],A.prototype,`audiences`,void 0),_([e()],A.prototype,`audience`,void 0),_([e()],A.prototype,`token`,void 0),_([e()],A.prototype,`busy`,void 0),_([e()],A.prototype,`copied`,void 0),_([e()],A.prototype,`errorKey`,void 0),A=_([n(`identity-token-card`)],A);var j={levelHidden:{save:e=>i(e),failedKey:`account_modal.level_visibility_failed`},searchHidden:{save:e=>C(e),failedKey:`account_modal.search_visibility_failed`}},M=class extends d{constructor(...e){super(...e),this.player=null,this.user=null,this.email=``,this.consentBusy=!1,this.privacyBusy={levelHidden:!1,searchHidden:!1},this.deleteDialogOpen=!1,this.deleteBusy=!1,this.handleDeleteAccount=async()=>{if(this.deleteDialogOpen=!1,this.deleteBusy)return;this.deleteBusy=!0;let e=await u();if(this.deleteBusy=!1,e.ok){o(),await v(r(`account_modal.delete_account_scheduled`)),window.location.replace(`/`);return}if(e.code===`logged_out`){o(),window.location.replace(`/`);return}e.code===`forbidden`&&e.message!==void 0?await v(e.message):e.code===`rate_limited`?await v(r(`account_modal.delete_account_rate_limited`)):await v(r(`account_modal.delete_account_failed`))},this.handleEmailInput=e=>{this.email=e.target.value},this.handleSubmit=async()=>{if(!this.email){await v(r(`account_modal.enter_email_address`));return}await v(await h(this.email)?r(`account_modal.recovery_email_sent`,{email:this.email}):r(`account_modal.failed_to_send_recovery_email`))},this.handleLinkGoogle=async()=>{await S()||await v(r(`account_modal.link_google_failed`))}}createRenderRoot(){return this}closeDialogs(){this.deleteDialogOpen=!1}disconnectedCallback(){this.closeDialogs(),super.disconnectedCallback()}isSteamPrimary(){return y(this.user??void 0)}render(){return a`
      <div class="flex flex-col gap-6">
        ${this.renderMarketingCard()} ${this.renderPrivacyCard()}
        <identity-token-card></identity-token-card>
        ${this.renderDeleteAccountCard()}
      </div>
    `}renderMarketingCard(){let e=this.player?.marketingConsent;if(!e)return t;let n=e.hasEmail,i=e.consented===`approved`,o=!n&&this.isSteamPrimary();return a`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <!-- Centred against the title+description block, like the delete card. -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1">
            <div class="text-white font-medium">
              ${r(`account_modal.marketing_title`)}
            </div>
            <div class="text-white/50 text-sm mt-1">
              ${r(n?`account_modal.marketing_desc`:o?`account_modal.marketing_no_email_steam`:`account_modal.marketing_no_email`)}
            </div>
          </div>
          ${n||o?a`<button
                role="switch"
                aria-checked=${i?`true`:`false`}
                aria-label=${r(`account_modal.marketing_title`)}
                ?disabled=${this.consentBusy||o}
                @click=${()=>this.setConsent(!i)}
                class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 disabled:opacity-60 ${i?`bg-malibu-blue shadow-[var(--shadow-malibu-blue-pill)]`:`bg-white/15`}"
              >
                <span
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${i?`translate-x-6`:`translate-x-1`}"
                ></span>
              </button>`:t}
        </div>
        ${n||this.isSteamPrimary()?t:this.renderEmailBinding()}
      </div>
    `}renderPrivacyCard(){let e=this.player?.levelHidden,n=this.player?.searchHidden;return e===void 0&&n===void 0?t:a`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div
          class="text-xs text-white/40 uppercase tracking-widest font-bold mb-4"
        >
          ${r(`account_modal.privacy_title`)}
        </div>
        ${e===void 0?t:a`${this.renderPrivacySwitchRow(r(`account_modal.level_visibility_title`),r(`account_modal.level_visibility_desc`),!e,this.privacyBusy.levelHidden,e=>this.setPrivacyShown(`levelHidden`,e))}
            ${this.renderLevelPreview(!e)}`}
        ${n===void 0?t:a`<div
              class=${e===void 0?``:`mt-4 pt-4 border-t border-white/10`}
            >
              ${this.renderPrivacySwitchRow(r(`account_modal.search_visibility_title`),r(`account_modal.search_visibility_desc`),!n,this.privacyBusy.searchHidden,e=>this.setPrivacyShown(`searchHidden`,e))}
            </div>`}
      </div>
    `}renderPrivacySwitchRow(e,t,n,r,i){return a`
      <div class="flex items-center justify-between gap-4">
        <div class="flex-1">
          <div class="text-white font-medium">${e}</div>
          <div class="text-white/50 text-sm mt-1">${t}</div>
        </div>
        <button
          role="switch"
          aria-checked=${n?`true`:`false`}
          aria-label=${e}
          ?disabled=${r}
          @click=${()=>i(!n)}
          class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 disabled:opacity-60 ${n?`bg-malibu-blue shadow-[var(--shadow-malibu-blue-pill)]`:`bg-white/15`}"
        >
          <span
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${n?`translate-x-6`:`translate-x-1`}"
          ></span>
        </button>
      </div>
    `}renderLevelPreview(e){let n=this.player?.progress;return n===void 0?t:a`
      <div
        class="level-visibility-preview mt-4 flex items-center gap-3 rounded-lg bg-black/20 border border-white/5 px-4 py-3"
        aria-hidden="true"
      >
        <span
          class="text-[10px] uppercase tracking-widest font-bold text-white/40"
          >${r(`account_modal.level_visibility_others_see`)}</span
        >
        <span class="flex items-center gap-1.5 text-white font-semibold">
          ${e?a`<level-badge
                class="shrink-0"
                .level=${n.level}
                .prestige=${n.prestige}
                ?legend=${n.legend}
                size="24"
              ></level-badge>`:t}
          ${this.player?.username??``}
        </span>
        ${e?t:a`<span class="ml-auto text-xs text-white/40"
              >${r(`account_modal.level_visibility_hidden`)}</span
            >`}
      </div>
    `}renderEmailBinding(){return a`
      <div class="mt-4 space-y-3">
        ${this.renderEmailField()}
        <div class="flex items-center gap-4 py-1">
          <div class="h-px bg-white/10 flex-1"></div>
          <span
            class="text-[10px] uppercase tracking-widest text-white/30 font-bold"
          >
            ${r(`account_modal.or`)}
          </span>
          <div class="h-px bg-white/10 flex-1"></div>
        </div>
        ${this.user?.google?t:w(this.handleLinkGoogle,x()?`account_modal.link_google_on_web`:`account_modal.link_google`)}
      </div>
    `}renderEmailField(){return a`
      <input
        type="email"
        .value=${this.email}
        @input=${this.handleEmailInput}
        placeholder=${r(`account_modal.email_placeholder`)}
        class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10"
      />
      <o-button
        variant="primary"
        width="block"
        size="md"
        translationKey="account_modal.get_magic_link"
        @click=${this.handleSubmit}
      ></o-button>
    `}renderDeleteAccountCard(){return m.isOnGamePortal()||g.isOnSteam()?t:a`
      <div class="bg-white/5 rounded-xl border border-red-500/30 p-6">
        <!-- The button is one line against a two-line block, so centre it
             rather than pinning it to the first line. -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1">
            <div class="text-white font-medium">
              ${r(`account_modal.delete_account_title`)}
            </div>
            <div class="text-white/50 text-sm mt-1">
              ${r(`account_modal.delete_account_desc`)}
            </div>
          </div>
          <o-button
            variant="danger"
            size="sm"
            translationKey="account_modal.delete_account_title"
            .disable=${this.deleteBusy}
            @click=${()=>{this.deleteDialogOpen=!0}}
          ></o-button>
        </div>
      </div>
      ${this.deleteDialogOpen?a`<delete-account-dialog
            @confirm=${this.handleDeleteAccount}
            @cancel=${()=>{this.deleteDialogOpen=!1}}
          ></delete-account-dialog>`:t}
    `}async setConsent(e){let t=this.player?.marketingConsent;if(!t||!t.hasEmail||this.consentBusy)return;let n=t.consented,r=e?`approved`:`denied`;n!==r&&(this.consentBusy=!0,t.consented=r,this.requestUpdate(),await c(e)||(t.consented=n),this.consentBusy=!1,this.requestUpdate())}async setPrivacyShown(e,t){let n=this.player;if(!n||n[e]===void 0||this.privacyBusy[e])return;let i=n[e],a=!t;if(i===a)return;let o=j[e];this.privacyBusy={...this.privacyBusy,[e]:!0},n[e]=a;let s=await o.save(a);n[e]=s.ok?s.hidden:i,this.privacyBusy={...this.privacyBusy,[e]:!1},s.ok&&e===`levelHidden`&&E(),!s.ok&&s.code===`failed`&&await v(r(o.failedKey))}};_([f({attribute:!1})],M.prototype,`player`,void 0),_([f({attribute:!1})],M.prototype,`user`,void 0),_([e()],M.prototype,`email`,void 0),_([e()],M.prototype,`consentBusy`,void 0),_([e()],M.prototype,`privacyBusy`,void 0),_([e()],M.prototype,`deleteDialogOpen`,void 0),_([e()],M.prototype,`deleteBusy`,void 0),M=_([n(`account-settings-panel`)],M);var N=class extends D{constructor(...e){super(...e),this.routerName=`account-settings`,this.titleKey=`account_settings_modal.title`}renderSignedIn(e){return a`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">
          <account-settings-panel
            .player=${e.player}
            .user=${e.user}
          ></account-settings-panel>
        </div>
      </div>
    `}onOpenExtra(e){T(e)}onClose(){this.querySelector(`account-settings-panel`)?.closeDialogs()}};N=_([n(`account-settings-modal`)],N);export{N as AccountSettingsModal};