import{Bn as e,Hn as t,In as n,Jn as r,dn as i,nt as a,oi as o,rt as s}from"./index-B4QD0Fte.js";import"./RewardsPanel-DjEIsSAy.js";var c=class extends s{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.handleRewardsChanged=e=>{this.rewards=e.detail.rewards,this.hasClaimable()||this.close()}}modalConfig(){return{maxWidth:`620px`}}openWithRewards(e,t){this.rewards=e,this.signedIn=t,this.open()}hasClaimable(){return this.rewards.some(o)}open(e){this.hasClaimable()&&super.open(e)}renderHeaderSlot(){return a({title:n(`rewards_modal.title`),onBack:()=>this.close(),ariaLabel:n(`common.back`)})}renderBody(){return r`
      <div class="p-6">
        <rewards-panel
          .rewards=${this.rewards}
          .signedIn=${this.signedIn}
          @rewards-changed=${this.handleRewardsChanged}
        ></rewards-panel>
      </div>
    `}};i([e()],c.prototype,`rewards`,void 0),i([e()],c.prototype,`signedIn`,void 0),c=i([t(`rewards-modal`)],c);export{c as RewardsModal};