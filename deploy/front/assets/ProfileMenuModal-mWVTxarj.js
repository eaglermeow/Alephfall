import{Bn as e,In as t,Jn as n,Nt as r,dn as i,nt as a,rt as o}from"./index-B4QD0Fte.js";var s=(e,r=t(`account_modal.sign_in_desc`))=>n`
  <div class="p-6">
    <div
      class="bg-white/5 rounded-xl border border-white/10 p-8 text-center flex flex-col items-center gap-4"
    >
      <p class="text-white/60 text-sm">${r}</p>
      <o-button
        variant="primary"
        size="md"
        translationKey="main.sign_in"
        @click=${e}
      ></o-button>
    </div>
  </div>
`,c=class extends o{constructor(...e){super(...e),this.userMeResponse=!1,this.isLoadingUser=!1}modalConfig(){return{maxWidth:`620px`}}renderHeaderSlot(){return a({title:t(this.titleKey),onBack:()=>this.close(),ariaLabel:t(`common.back`)})}renderBody(){return this.isLoadingUser?this.renderLoadingSpinner(t(`account_modal.fetching_account`)):this.userMeResponse===!1?s(()=>{this.close(),window.showPage?.(`page-account`)}):this.renderSignedIn(this.userMeResponse)}onOpen(e){this.loadUser(),this.onOpenExtra(e)}onOpenExtra(e){}loadUser(){this.userMeResponse=!1,this.isLoadingUser=!0,r().then(e=>{this.userMeResponse=e??!1}).catch(e=>{console.warn(`${this.tagName.toLowerCase()}: failed to fetch user`,e)}).finally(()=>{this.isLoadingUser=!1})}};i([e()],c.prototype,`userMeResponse`,void 0),i([e()],c.prototype,`isLoadingUser`,void 0);export{c as t};