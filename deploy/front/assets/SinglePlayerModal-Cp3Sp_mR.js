import{Bn as e,Ci as t,Di as n,Ei as r,Hi as i,Hn as a,In as o,Jn as s,Kr as c,Ti as l,Xn as u,Yi as d,_ as f,_t as p,dn as m,ei as h,hr as g,ln as _,mt as v,nr as y,nt as b,ot as x,pt as S,qi as C,rt as w}from"./index-B4QD0Fte.js";import{n as T}from"./TerrainMapFileLoader-BquhaSVY.js";import{a as E,i as D}from"./ToggleInputCard-D4mjNFEY.js";import{c as O,i as k,l as A,n as j,o as M,r as N,s as P,t as F,u as I}from"./GameConfigHelpers-BuUBuQs0.js";var L=15e3,R=6e4;function z(e,t,n){let r,i=new Promise(e=>{r=setTimeout(()=>e(n()),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}var B={selectedMap:C.World,selectedDifficulty:t.Easy,bots:400,infiniteGold:!1,infiniteTroops:!1,compactMap:!1,maxTimer:!1,maxTimerValue:void 0,instantBuild:!1,randomSpawn:!1,useRandomMap:!1,gameMode:r.FFA,teamCount:2,goldMultiplier:!1,goldMultiplierValue:void 0,startingGold:!1,startingGoldValue:void 0,disabledUnits:[],customAlliances:!1,customAllianceMinutes:void 0,waterNukes:!1,doomsdayClock:!1,doomsdayClockSpeed:`normal`,overtime:!1,overtimeStartMinutes:void 0},V=null,H=null;async function U(){return V||(H??=(async()=>{let e=new Set,t=!1;return await Promise.all(d.map(async n=>{try{(await T.getMapData(n.type).manifest()).nations.length>0&&e.add(n.type)}catch{t=!0}})),t?(H=null,null):(V=e,e)})(),H)}var W=class extends w{constructor(...e){super(...e),this.routerName=`single-player`,this.selectedMap=B.selectedMap,this.selectedDifficulty=B.selectedDifficulty,this.nations=0,this.defaultNationCount=0,this.bots=B.bots,this.infiniteGold=B.infiniteGold,this.infiniteTroops=B.infiniteTroops,this.compactMap=B.compactMap,this.maxTimer=B.maxTimer,this.maxTimerValue=B.maxTimerValue,this.instantBuild=B.instantBuild,this.randomSpawn=B.randomSpawn,this.useRandomMap=B.useRandomMap,this.gameMode=B.gameMode,this.teamCount=B.teamCount,this.showAchievements=!1,this.mapWins=new Map,this.eligibleMaps=null,this.userMeResponse=!1,this.goldMultiplier=B.goldMultiplier,this.goldMultiplierValue=B.goldMultiplierValue,this.startingGold=B.startingGold,this.startingGoldValue=B.startingGoldValue,this.disabledUnits=[...B.disabledUnits],this.customAlliances=B.customAlliances,this.customAllianceMinutes=B.customAllianceMinutes,this.waterNukes=B.waterNukes,this.doomsdayClock=B.doomsdayClock,this.doomsdayClockSpeed=B.doomsdayClockSpeed,this.overtime=B.overtime,this.overtimeStartMinutes=B.overtimeStartMinutes,this.starting=!1,this.startAttempt=0,this.overlayAttempt=0,this.mapLoader=T,this.toggleAchievements=()=>{this.showAchievements=!this.showAchievements,this.showAchievements&&this.ensureEligibleMaps()},this.handleUserMeResponse=e=>{this.userMeResponse=e.detail,this.applyAchievements(e.detail)},this.handleConfigRandomMapSelected=()=>{this.handleSelectRandomMap()},this.handleConfigMapSelected=e=>{let t=e;this.handleMapSelection(t.detail.map)},this.handleConfigDifficultySelected=e=>{let t=e;this.handleDifficultySelection(t.detail.difficulty)},this.handleConfigDoomsdayClockSpeedSelected=e=>{let t=e;this.doomsdayClockSpeed=t.detail.speed},this.handleConfigGameModeSelected=e=>{let t=e;this.handleGameModeSelection(t.detail.mode)},this.handleConfigTeamCountSelected=e=>{let t=e;this.handleTeamCountSelection(t.detail.count)},this.handleConfigOptionToggleChanged=e=>{let{labelKey:t,checked:n}=e.detail;switch(t){case`game_settings.instant_build`:this.instantBuild=n;break;case`game_settings.random_spawn`:this.randomSpawn=n;break;case`game_settings.infinite_gold`:this.infiniteGold=n;break;case`game_settings.infinite_troops`:this.infiniteTroops=n;break;case`game_settings.compact_map`:this.handleCompactMapChange(n);break;case`game_settings.water_nukes`:this.waterNukes=n;break;case`game_settings.doomsday_clock`:this.doomsdayClock=n;break;default:break}},this.handleConfigUnitToggleChanged=e=>{let{unit:t,checked:n}=e.detail;this.disabledUnits=k(this.disabledUnits,t,n)},this.handleBotsChange=e=>{let t=e.detail.value;isNaN(t)||t<0||t>400||(this.bots=t)},this.handleNationsChange=e=>{let t=e.detail.value;isNaN(t)||t<0||t>400||(this.nations=t)},this.handleMaxTimerToggle=(e,t)=>{this.maxTimer=e,this.maxTimerValue=I(t)},this.handleGoldMultiplierToggle=(e,t)=>{this.goldMultiplier=e,this.goldMultiplierValue=I(t)},this.handleStartingGoldToggle=(e,t)=>{this.startingGold=e,this.startingGoldValue=I(t)},this.handleCustomAlliancesToggle=(e,t)=>{this.customAlliances=e,this.customAllianceMinutes=I(t)},this.handleOvertimeToggle=(e,t)=>{this.overtime=e,this.overtimeStartMinutes=I(t)},this.handleOvertimeMinutesKeyDown=e=>{O(e,[`-`,`+`,`e`])},this.handleOvertimeMinutesInput=e=>{let t=e.target,n=P(t,{min:1,max:120,stripPattern:/[e+-]/gi});n!==void 0&&(this.overtimeStartMinutes=n)},this.handleCustomAllianceMinutesKeyDown=e=>{O(e,[`-`,`+`,`e`])},this.handleCustomAllianceMinutesInput=e=>{let t=e.target,n=P(t,{min:0,max:15});n!==void 0&&(this.customAllianceMinutes=n)},this.handleMaxTimerValueKeyDown=e=>{O(e,[`-`,`+`,`e`])},this.handleMaxTimerValueChanges=e=>{let t=e.target,n=P(t,{min:1,max:120,stripPattern:/[e+-]/gi});this.maxTimerValue=n},this.handleGoldMultiplierValueKeyDown=e=>{O(e,[`+`,`-`,`e`,`E`])},this.handleGoldMultiplierValueChanges=e=>{let t=e.target,n=M(t,{min:.1,max:1e3});n===void 0?(this.goldMultiplierValue=void 0,t.value=``):this.goldMultiplierValue=n},this.handleStartingGoldValueKeyDown=e=>{O(e,[`-`,`+`,`e`,`E`])},this.handleStartingGoldValueChanges=e=>{let t=e.target,n=M(t,{min:.1,max:1e3});n===void 0?(this.startingGoldValue=void 0,t.value=``):this.startingGoldValue=n}}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.handleUserMeResponse);let e=f();e!==null&&(this.userMeResponse=e.response,this.applyAchievements(e.response)),this.loadNationCount()}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.handleUserMeResponse),super.disconnectedCallback()}async ensureEligibleMaps(){if(this.eligibleMaps)return;let e=await U();e&&(this.eligibleMaps=e)}medalCounts(){let e={[t.Easy]:0,[t.Medium]:0,[t.Hard]:0,[t.Impossible]:0};if(!this.eligibleMaps)return e;for(let[t,n]of this.mapWins)if(this.eligibleMaps.has(t))for(let t of n)e[t]++;return e}applyAchievements(e){if(!e){this.mapWins=new Map;return}let n=e.player.achievements.singleplayerMap,r=new Map;for(let e of n){let{mapName:n,difficulty:i}=e??{},a=typeof n==`string`&&Object.values(C).includes(n),o=typeof i==`string`&&Object.values(t).includes(i);if(!a||!o)continue;let s=n,c=r.get(s)??new Set;c.add(i),r.set(s,c)}this.mapWins=r}renderHeaderSlot(){return b({title:o(`main.solo`)||`Solo`,onBack:()=>this.close(),ariaLabel:o(`common.back`),rightContent:g(this.userMeResponse)?s`<button
              @click=${this.toggleAchievements}
              class="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all shrink-0 ${this.showAchievements?`bg-yellow-500/10 border-yellow-500/30 text-yellow-400`:`text-white/60`}"
            >
              <img
                src=${h(`images/MedalIconWhite.svg`)}
                class="w-4 h-4 opacity-80 shrink-0"
                style="${this.showAchievements?``:`filter: grayscale(1);`}"
              />
              <span
                class="text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                >${o(`single_modal.toggle_achievements`)}</span
              >
            </button>
            ${this.showAchievements?this.renderMedalOverview():null}`:void 0})}renderMedalOverview(){let e=this.medalCounts(),t=this.eligibleMaps?.size??null;return s`<div class="basis-full w-full">
      <div
        class="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2.5 rounded-xl border border-yellow-500/20 bg-yellow-500/5"
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-yellow-400/80 shrink-0"
        >
          ${o(`single_modal.medals_earned`)}
        </span>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          ${D.map(t=>this.renderMedalStat(t,e[t]))}
        </div>
        <span
          class="ml-auto text-[11px] font-semibold uppercase tracking-wider text-white/40 shrink-0"
        >
          ${o(`single_modal.medals_of_maps`,{total:t??`…`})}
        </span>
      </div>
    </div>`}renderMedalStat(e,t){return s`<div
      class="flex items-center gap-1.5"
      title=${o(`difficulty.${e.toLowerCase()}`)}
    >
      ${E(e,`w-4 h-4`)}
      <span class="text-xs font-medium text-white/50 hidden sm:inline"
        >${o(`difficulty.${e.toLowerCase()}`)}</span
      >
      <span class="text-sm font-bold text-white tabular-nums">${t}</span>
    </div>`}renderBody(){let e=[s`<toggle-input-card
        .labelKey=${`game_settings.max_timer`}
        .checked=${this.maxTimer}
        .inputId=${`end-timer-value`}
        .inputMin=${1}
        .inputMax=${120}
        .inputValue=${this.maxTimerValue}
        .inputAriaLabel=${o(`game_settings.max_timer`)}
        .inputPlaceholder=${o(`game_settings.mins_placeholder`)}
        .defaultInputValue=${30}
        .minValidOnEnable=${1}
        .onToggle=${this.handleMaxTimerToggle}
        .onInput=${this.handleMaxTimerValueChanges}
        .onKeyDown=${this.handleMaxTimerValueKeyDown}
      ></toggle-input-card>`,s`<toggle-input-card
        .labelKey=${`game_settings.gold_multiplier`}
        .checked=${this.goldMultiplier}
        .inputId=${`gold-multiplier-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.goldMultiplierValue}
        .inputAriaLabel=${o(`game_settings.gold_multiplier`)}
        .inputPlaceholder=${`2.0x`}
        .defaultInputValue=${2}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleGoldMultiplierToggle}
        .onChange=${this.handleGoldMultiplierValueChanges}
        .onKeyDown=${this.handleGoldMultiplierValueKeyDown}
      ></toggle-input-card>`,s`<toggle-input-card
        .labelKey=${`game_settings.starting_gold`}
        .checked=${this.startingGold}
        .inputId=${`starting-gold-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.startingGoldValue}
        .inputAriaLabel=${o(`game_settings.starting_gold`)}
        .inputPlaceholder=${`5`}
        .defaultInputValue=${5}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleStartingGoldToggle}
        .onChange=${this.handleStartingGoldValueChanges}
        .onKeyDown=${this.handleStartingGoldValueKeyDown}
      ></toggle-input-card>`,s`<toggle-input-card
        .labelKey=${`game_settings.custom_alliances`}
        .checked=${this.customAlliances}
        .inputMin=${0}
        .inputMax=${15}
        .inputStep=${1}
        .inputValue=${this.customAllianceMinutes}
        .inputAriaLabel=${o(`game_settings.custom_alliances`)}
        .inputPlaceholder=${o(`game_settings.mins_placeholder`)}
        .defaultInputValue=${0}
        .minValidOnEnable=${0}
        .zeroLabel=${`(${o(`public_game_modifier.disable_alliances`)})`}
        .onToggle=${this.handleCustomAlliancesToggle}
        .onInput=${this.handleCustomAllianceMinutesInput}
        .onKeyDown=${this.handleCustomAllianceMinutesKeyDown}
      ></toggle-input-card>`,s`<toggle-input-card
        .labelKey=${`game_settings.overtime`}
        .checked=${this.overtime}
        .inputMin=${1}
        .inputMax=${120}
        .inputStep=${1}
        .inputValue=${this.overtimeStartMinutes}
        .inputAriaLabel=${o(`game_settings.overtime`)}
        .inputPlaceholder=${o(`game_settings.mins_placeholder`)}
        .defaultInputValue=${30}
        .minValidOnEnable=${1}
        .onToggle=${this.handleOvertimeToggle}
        .onInput=${this.handleOvertimeMinutesInput}
        .onKeyDown=${this.handleOvertimeMinutesKeyDown}
      ></toggle-input-card>`];return s`
      <div class="flex flex-col h-full">
        <div
          class="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-6 pt-4 pb-6 mr-1 mx-auto w-full max-w-5xl"
        >
          <game-config-settings
            class="block"
            .sectionGapClass=${`space-y-6`}
            .settings=${{map:{selected:this.selectedMap,useRandom:this.useRandomMap,showMedals:this.showAchievements,mapWins:this.mapWins},difficulty:{selected:this.selectedDifficulty,disabled:this.nations===0},gameMode:{selected:this.gameMode},teamCount:{selected:this.teamCount},options:{titleKey:`game_settings.options`,bots:{value:this.bots,labelKey:`game_settings.bots`,disabledKey:`common.disabled`},nations:{value:this.nations,defaultValue:this.defaultNationCount,labelKey:`game_settings.nations`,disabledKey:`common.disabled`},toggles:[{labelKey:`game_settings.instant_build`,checked:this.instantBuild},{labelKey:`game_settings.random_spawn`,checked:this.randomSpawn},{labelKey:`game_settings.infinite_gold`,checked:this.infiniteGold},{labelKey:`game_settings.infinite_troops`,checked:this.infiniteTroops},{labelKey:`game_settings.compact_map`,checked:this.compactMap},{labelKey:`game_settings.water_nukes`,checked:this.waterNukes},{labelKey:`game_settings.doomsday_clock`,checked:this.doomsdayClock,doomsdayClockSpeed:this.doomsdayClockSpeed}],inputCards:e},unitTypes:{titleKey:`game_settings.disable_units`,disabledUnits:this.disabledUnits}}}
            @map-selected=${this.handleConfigMapSelected}
            @random-map-selected=${this.handleConfigRandomMapSelected}
            @difficulty-selected=${this.handleConfigDifficultySelected}
            @doomsday-clock-speed-selected=${this.handleConfigDoomsdayClockSpeedSelected}
            @game-mode-selected=${this.handleConfigGameModeSelected}
            @team-count-selected=${this.handleConfigTeamCountSelected}
            @bots-changed=${this.handleBotsChange}
            @nations-changed=${this.handleNationsChange}
            @option-toggle-changed=${this.handleConfigOptionToggleChanged}
            @unit-toggle-changed=${this.handleConfigUnitToggleChanged}
          ></game-config-settings>
        </div>

        <!-- Footer Action -->
        <div class="p-6 border-t border-white/10 bg-black/20 shrink-0">
          ${g(this.userMeResponse)&&this.hasOptionsChanged()?s`<div
                class="mb-4 px-4 py-3 rounded-xl bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider text-center"
              >
                ${o(`single_modal.options_changed_no_achievements`)}
              </div>`:null}
          <o-button
            variant="primary"
            width="block"
            size="lg"
            translationKey=${this.starting?`game_settings.starting`:`game_settings.start`}
            .disable=${this.starting}
            @click=${this.startGame}
          ></o-button>
        </div>
      </div>
    `}hasOptionsChanged(){return this.nations!==this.defaultNationCount||this.bots!==B.bots||this.infiniteGold!==B.infiniteGold||this.infiniteTroops!==B.infiniteTroops||this.compactMap!==B.compactMap||this.maxTimer!==B.maxTimer||this.instantBuild!==B.instantBuild||this.randomSpawn!==B.randomSpawn||this.gameMode!==B.gameMode||this.goldMultiplier!==B.goldMultiplier||this.startingGold!==B.startingGold||this.customAlliances!==B.customAlliances||this.customAllianceMinutes!==B.customAllianceMinutes||this.waterNukes!==B.waterNukes||this.doomsdayClock!==B.doomsdayClock||this.doomsdayClock&&this.doomsdayClockSpeed!==B.doomsdayClockSpeed||this.overtime!==B.overtime||this.disabledUnits.length>0}onClose(){if(this.startAttempt++,this.overlayAttempt!==0){this.overlayAttempt=0;let e=document.querySelector(`game-starting-modal`);e instanceof x&&e.hide()}this.resetOptions()}async startTutorial(){v(),this.resetOptions(),await this.loadNationCount(),new y().setTutorialDismissed(!1),await this.startGame()}resetOptions(){this.starting=!1,this.selectedMap=B.selectedMap,this.selectedDifficulty=B.selectedDifficulty,this.gameMode=B.gameMode,this.useRandomMap=B.useRandomMap,this.bots=B.bots,this.nations=0,this.defaultNationCount=0,this.infiniteGold=B.infiniteGold,this.infiniteTroops=B.infiniteTroops,this.compactMap=B.compactMap,this.maxTimer=B.maxTimer,this.maxTimerValue=B.maxTimerValue,this.instantBuild=B.instantBuild,this.randomSpawn=B.randomSpawn,this.teamCount=B.teamCount,this.disabledUnits=[...B.disabledUnits],this.goldMultiplier=B.goldMultiplier,this.goldMultiplierValue=B.goldMultiplierValue,this.startingGold=B.startingGold,this.startingGoldValue=B.startingGoldValue,this.customAlliances=B.customAlliances,this.customAllianceMinutes=B.customAllianceMinutes,this.waterNukes=B.waterNukes,this.doomsdayClock=B.doomsdayClock,this.doomsdayClockSpeed=B.doomsdayClockSpeed,this.overtime=B.overtime,this.overtimeStartMinutes=B.overtimeStartMinutes}onOpen(){this.loadNationCount(),v()}handleSelectRandomMap(){this.useRandomMap=!0,this.selectedMap=N(),this.loadNationCount()}handleMapSelection(e){this.selectedMap=e,this.useRandomMap=!1,this.loadNationCount()}handleDifficultySelection(e){this.selectedDifficulty=e}handleCompactMapChange(e){this.compactMap=e,this.bots=F(this.bots,e),this.nations=j(this.nations,this.defaultNationCount,e)}getEndTimerInput(){return this.renderRoot.querySelector(`#end-timer-value`)??this.querySelector(`#end-timer-value`)}handleGameModeSelection(e){this.gameMode=e}handleTeamCountSelection(e){this.teamCount=e}async resolveNameAndCosmetics(e){let t=()=>e?.resolvedName()??p();return await z((async()=>{await e?.whenSeeded();let n=t();return{resolvedName:n,cosmetics:await S({verified:n.verified})}})(),L,()=>{console.warn(`Start preparation exceeded its deadline; starting on defaults`);let e=t();return{resolvedName:e,cosmetics:e.verified?{verified:!0}:{}}})}awaitMidgameAd(){return z(u.requestMidgameAd(),R,()=>{console.warn(`Midgame ad never signalled completion; starting anyway`)})}async startGame(){if(this.starting)return;let e;if(this.maxTimer){if(!this.maxTimerValue||this.maxTimerValue<=0){console.error(`Max timer is enabled but no valid value is set`),await _(o(`single_modal.max_timer_invalid`)||`Please enter a valid max timer value (1-120 minutes)`);let e=this.getEndTimerInput();e&&(e.focus(),e.select());return}e=Math.max(1,Math.min(120,this.maxTimerValue))}this.starting=!0;let t=++this.startAttempt,a=document.querySelector(`game-starting-modal`),s=a instanceof x?a:null;this.overlayAttempt=t,s?.show();try{console.log(`Starting single player game with map: ${C[this.selectedMap]}${this.useRandomMap?` (Randomly selected)`:``}`);let a=c(),o=c(),s=document.querySelector(`username-input`),{resolvedName:u,cosmetics:d}=await this.resolveNameAndCosmetics(s);if(t!==this.startAttempt||(await this.awaitMidgameAd(),t!==this.startAttempt))return;this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:o,gameStartInfo:{gameID:o,players:[{clientID:a,username:u.name,clanTag:s?.getClanTag()??null,cosmetics:d}],config:{gameMap:this.selectedMap,gameMapSize:this.compactMap?l.Compact:l.Normal,gameType:n.Singleplayer,gameMode:this.gameMode,playerTeams:this.teamCount,difficulty:this.selectedDifficulty,maxTimerValue:e,bots:this.bots,infiniteGold:this.infiniteGold,donateGold:this.gameMode===r.Team,donateTroops:this.gameMode===r.Team,infiniteTroops:this.infiniteTroops,instantBuild:this.instantBuild,randomSpawn:this.randomSpawn,disabledUnits:this.disabledUnits.filter(e=>Object.values(i).includes(e)),nations:A(this.nations,this.defaultNationCount),...this.goldMultiplier&&this.goldMultiplierValue?{goldMultiplier:this.goldMultiplierValue}:{},...this.startingGold&&this.startingGoldValue!==void 0?{startingGold:Math.round(this.startingGoldValue*1e6)}:{},...this.customAlliances?{customAllianceDuration:this.customAllianceMinutes??0}:{},...this.waterNukes?{waterNukes:!0}:{},...this.doomsdayClock?{doomsdayClock:{enabled:!0,speed:this.doomsdayClockSpeed}}:{},...this.overtime?{overtime:{enabled:!0,startMinutes:this.overtimeStartMinutes??30}}:{}},lobbyCreatedAt:Date.now()},source:`singleplayer`},bubbles:!0,composed:!0})),this.overlayAttempt=0,this.close()}finally{t===this.startAttempt&&(this.starting=!1),this.overlayAttempt===t&&(this.overlayAttempt=0,s?.hide())}}async loadNationCount(){let e=this.selectedMap;try{let t=await this.mapLoader.getMapData(e).manifest();this.selectedMap===e&&(this.defaultNationCount=t.nations.length,this.nations=this.compactMap?Math.max(0,Math.floor(t.nations.length*.25)):t.nations.length)}catch(e){console.warn(`Failed to load nation count`,e)}}};m([e()],W.prototype,`selectedMap`,void 0),m([e()],W.prototype,`selectedDifficulty`,void 0),m([e()],W.prototype,`nations`,void 0),m([e()],W.prototype,`defaultNationCount`,void 0),m([e()],W.prototype,`bots`,void 0),m([e()],W.prototype,`infiniteGold`,void 0),m([e()],W.prototype,`infiniteTroops`,void 0),m([e()],W.prototype,`compactMap`,void 0),m([e()],W.prototype,`maxTimer`,void 0),m([e()],W.prototype,`maxTimerValue`,void 0),m([e()],W.prototype,`instantBuild`,void 0),m([e()],W.prototype,`randomSpawn`,void 0),m([e()],W.prototype,`useRandomMap`,void 0),m([e()],W.prototype,`gameMode`,void 0),m([e()],W.prototype,`teamCount`,void 0),m([e()],W.prototype,`showAchievements`,void 0),m([e()],W.prototype,`mapWins`,void 0),m([e()],W.prototype,`eligibleMaps`,void 0),m([e()],W.prototype,`userMeResponse`,void 0),m([e()],W.prototype,`goldMultiplier`,void 0),m([e()],W.prototype,`goldMultiplierValue`,void 0),m([e()],W.prototype,`startingGold`,void 0),m([e()],W.prototype,`startingGoldValue`,void 0),m([e()],W.prototype,`disabledUnits`,void 0),m([e()],W.prototype,`customAlliances`,void 0),m([e()],W.prototype,`customAllianceMinutes`,void 0),m([e()],W.prototype,`waterNukes`,void 0),m([e()],W.prototype,`doomsdayClock`,void 0),m([e()],W.prototype,`doomsdayClockSpeed`,void 0),m([e()],W.prototype,`overtime`,void 0),m([e()],W.prototype,`overtimeStartMinutes`,void 0),m([e()],W.prototype,`starting`,void 0),W=m([a(`single-player-modal`)],W);export{R as MIDGAME_AD_DEADLINE_MS,L as START_PREPARE_DEADLINE_MS,W as SinglePlayerModal};