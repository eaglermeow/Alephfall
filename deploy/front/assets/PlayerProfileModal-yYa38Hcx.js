const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RewardTrack-DufiGj0R.js","./index-B4QD0Fte.js","./vendor-DPAo4oW-.js","./rolldown-runtime-BpQH8Ho1.js","./index-C1j_oD-o.css","./LevelBadge-BmsHRyDe.js","./unsafe-html-DPW-EDyf.js","./Progression-Dg-YxkFq.js","./CapIcon-CZ3M-qLe.js","./PlutoniumIcon-EBDEFxV4.js","./ReducedMotion-C6I9hQNc.js"])))=>i.map(i=>d[i]);
import{At as e,B as t,Bn as n,Ci as r,Di as i,Ei as a,F as o,Fi as s,G as c,Gi as l,Gn as u,Hn as d,I as ee,In as f,Jn as p,K as te,L as ne,M as m,Nn as h,Nt as g,Pt as _,Un as v,Vn as y,_i as re,at as ie,ci as ae,ct as oe,dn as b,ei as x,g as se,gi as ce,gr as S,hn as le,ht as ue,ii as de,it as fe,jn as pe,kt as me,ln as he,n as C,nt as ge,pn as _e,qn as ve,rt as ye,t as be,ut as xe,xn as Se,xt as Ce,z as we}from"./index-B4QD0Fte.js";import{n as Te}from"./TerrainMapFileLoader-BquhaSVY.js";import"./CopyButton-ClHPskLX.js";import{t as w}from"./Format-Dhp90E0J.js";import"./CapIcon-CZ3M-qLe.js";import"./PlutoniumIcon-EBDEFxV4.js";import{t as Ee}from"./UsernameText-D__bV6X3.js";import{r as De,s as T,u as Oe}from"./Progression-Dg-YxkFq.js";import{t as ke}from"./ReducedMotion-C6I9hQNc.js";import{t as Ae}from"./LevelBadge-BmsHRyDe.js";import{r as je,t as Me}from"./XpBar-B5p30m1B.js";import{n as Ne,r as Pe,t as Fe}from"./CosmeticPreview-qeN1fsJw.js";import"./ProfileShare-Bl2sOYKg.js";import{n as Ie,r as Le,t as Re}from"./GameStatsModal-CLi46Tcl.js";function ze(e){return e.mode===a.FFA||e.mode===void 0&&(e.playerTeams===null||e.playerTeams===void 0)}function Be(e){if(e.rankedType&&e.rankedType!==`unranked`)return f(`clan_modal.history_type_ranked`,{ranked:e.rankedType});if(ze(e))return f(`clan_modal.history_type_ffa`);let t=e.playerTeams;return t===`Humans Vs Nations`?f(`clan_modal.history_type_hvn`):t===`Duos`||t===`Trios`||t===`Quads`?f(`clan_modal.history_type_${t.toLowerCase()}`):t&&/^\d+$/.test(t)?f(`clan_modal.history_type_n_teams`,{count:Number(t)}):f(`clan_modal.history_type_team`)}var Ve=x(`images/LeaderboardIconRegularWhite.svg`),He=x(`images/ReplayRegularIconWhite.svg`),Ue=x(`images/LinkIconWhite.svg`),We=[{key:`all`,labelKey:`clan_modal.history_filter_all`},{key:`public`,labelKey:`account_modal.games_type_public`},{key:`private`,labelKey:`account_modal.games_type_private`},{key:`singleplayer`,labelKey:`account_modal.games_type_singleplayer`}],Ge=[{key:`all`,labelKey:`clan_modal.history_filter_all`},{key:`ffa`,labelKey:`clan_modal.history_type_ffa`},{key:`team`,labelKey:`clan_modal.history_type_team`},{key:`hvn`,labelKey:`clan_modal.stats_hvn`},{key:`ranked`,labelKey:`clan_modal.stats_ranked`}],E=class extends v{constructor(...e){super(...e),this.publicId=``,this.cachedState=null,this.games=[],this.nextCursor=null,this.loading=!1,this.loadingMore=!1,this.loadState=`ok`,this.appendFailed=!1,this.typeFilter=`all`,this.modeFilter=`all`,this.asyncGeneration=0,this.sentinel=null,this.observer=null,this.groupedFor=null,this.grouped=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.syncToPublicId()}syncToPublicId(){this.cachedState&&this.cachedState.publicId===this.publicId?(this.games=this.cachedState.games,this.nextCursor=this.cachedState.nextCursor,this.typeFilter=this.cachedState.typeFilter,this.modeFilter=this.cachedState.modeFilter,this.appendFailed=!1,this.loadState=`ok`):this.publicId&&(this.typeFilter=`all`,this.modeFilter=`all`,this.reload())}disconnectedCallback(){super.disconnectedCallback(),this.teardownObserver()}willUpdate(e){let t=e.get(`publicId`);e.has(`publicId`)&&t!==void 0&&t!==this.publicId&&this.syncToPublicId()}updated(){this.ensureObserver()}async reload(){this.games=[],this.nextCursor=null,this.appendFailed=!1,await this.load({append:!1})}setTypeFilter(e){e!==this.typeFilter&&(this.typeFilter=e,this.reload())}setModeFilter(e){e!==this.modeFilter&&(this.modeFilter=e,this.reload())}async load({append:e}){if(!this.publicId)return;let t=++this.asyncGeneration;e?(this.loadingMore=!0,this.appendFailed=!1):(this.loading=!0,this.loadState=`ok`,this.loadingMore=!1);let n=e?this.nextCursor??void 0:void 0,r=await me(this.publicId,{filter:this.modeFilter===`all`?void 0:this.modeFilter,type:this.typeFilter===`all`?void 0:this.typeFilter,cursor:n});if(t===this.asyncGeneration){if(e?this.loadingMore=!1:this.loading=!1,`error`in r){e?this.appendFailed=!0:(this.loadState=`failed`,this.games=[],this.nextCursor=null);return}this.games=e?[...this.games,...r.results]:r.results,this.nextCursor=r.nextCursor,this.dispatchEvent(new CustomEvent(`history-updated`,{detail:{publicId:this.publicId,typeFilter:this.typeFilter,modeFilter:this.modeFilter,games:this.games,nextCursor:this.nextCursor},bubbles:!0,composed:!0}))}}ensureObserver(){let e=this.querySelector(`[data-scroll-sentinel]`);e!==this.sentinel&&(this.teardownObserver(),this.sentinel=e,e&&(this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(this.loading||this.loadingMore||this.nextCursor!==null&&(this.appendFailed||this.load({append:!0})))}),this.observer.observe(e)))}teardownObserver(){this.observer&&=(this.observer.disconnect(),null),this.sentinel=null}watchReplay(e){this.dispatchEvent(new CustomEvent(`view-game`,{detail:{gameId:e},bubbles:!0,composed:!0}))}showStats(e){this.dispatchEvent(new CustomEvent(`view-stats`,{detail:{gameId:e},bubbles:!0,composed:!0}))}async copyGameLink(e){let t=`${S.shareOrigin()}${S.gamePath(e)}`;try{await void _e(t),h(f(`common.copied`),`green`)}catch{h(f(`common.failed_copy`),`red`)}}render(){return p`<div class="space-y-3">
      ${this.renderFilters()}${this.renderBody()}
    </div>`}renderFilters(){return p`
      <div class="space-y-2">
        ${this.renderFilterRow(We,this.typeFilter,e=>this.setTypeFilter(e))}
        ${this.renderFilterRow(Ge,this.modeFilter,e=>this.setModeFilter(e))}
      </div>
    `}renderFilterRow(e,t,n){return p`
      <div
        role="tablist"
        class="flex flex-wrap gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${e.map(e=>{let r=t===e.key;return p`
            <button
              type="button"
              role="tab"
              aria-selected=${r}
              @click=${()=>n(e.key)}
              class="grow ${e.key===`all`?`basis-full sm:basis-20`:`basis-20`} px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${r?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
            >
              ${f(e.labelKey)}
            </button>
          `})}
      </div>
    `}renderBody(){return this.loading&&this.games.length===0?fe():this.loadState===`failed`?p`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm mb-3">
            ${f(`clan_modal.history_unavailable`)}
          </p>
          <button
            type="button"
            @click=${()=>this.reload()}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${f(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:this.games.length===0?p`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${f(`clan_modal.history_empty`)}
          </p>
        </div>
      `:(this.groupedFor!==this.games&&(this.grouped=Le(this.games),this.groupedFor=this.games),p`
      <div class="space-y-5">
        ${this.grouped.map(e=>p`
            <div class="space-y-3">
              <div
                class="sticky top-0 z-10 flex items-center gap-3 px-1 py-1.5"
              >
                <span class="h-px flex-1 bg-white/10"></span>
                <h3
                  class="text-xs font-bold uppercase tracking-widest text-white/70 whitespace-nowrap"
                >
                  ${Ie(e.day)}
                </h3>
                <span class="h-px flex-1 bg-white/10"></span>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                ${e.items.map(e=>this.renderGameRow(e))}
              </div>
            </div>
          `)}
        ${this.renderScrollFooter()}
      </div>
    `)}renderScrollFooter(){return this.nextCursor===null?p`
        <div class="text-center text-[11px] text-white/30 py-3 select-none">
          ${f(`clan_modal.history_end_of_history`)}
        </div>
      `:this.appendFailed?p`
        <div class="text-center py-3">
          <p class="text-white/40 text-xs mb-2">
            ${f(`clan_modal.history_load_more_failed`)}
          </p>
          <button
            type="button"
            @click=${()=>this.load({append:!0})}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${f(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:p`
      <div class="py-3">
        <div data-scroll-sentinel aria-hidden="true" class="h-px"></div>
        ${this.loadingMore?fe():``}
      </div>
    `}renderGameRow(e){let t=null;if(e.map)try{t=Te.getMapData(e.map).webpPath}catch{t=null}let n=e.map?Se(e.map)??e.map:null;return p`
      <div
        class="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden"
      >
        ${t?p`<div
              class="relative w-full aspect-[30/15] overflow-hidden bg-surface"
            >
              <img
                src=${t}
                alt=${n??``}
                draggable="false"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              ></div>
              ${n?p`<div
                    class="absolute bottom-2 left-3 text-xs font-bold text-white uppercase tracking-wider drop-shadow"
                  >
                    ${n}
                  </div>`:``}
              <div class="absolute top-2 left-2">
                ${this.renderResultBadge(e)}
              </div>
              <div
                class="absolute bottom-2 right-2 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
              >
                ${Re(e.start)}
              </div>
            </div>`:``}
        <div
          class=${t?`absolute top-2 right-2 z-[1]`:`flex items-center justify-end px-4 py-3 border-b border-white/5`}
        >
          <div class="flex items-center gap-2 shrink-0">
            <button
              type="button"
              title=${f(`game_list.stats`)}
              aria-label=${f(`game_list.stats`)}
              @click=${()=>this.showStats(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Ve}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only">${f(`game_list.stats`)}</span>
            </button>
            <button
              type="button"
              title=${f(`common.click_to_copy`)}
              aria-label=${f(`common.click_to_copy`)}
              @click=${()=>this.copyGameLink(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Ue}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${f(`common.click_to_copy`)}</span
              >
            </button>
            <button
              type="button"
              title=${f(`clan_modal.history_watch_replay`)}
              aria-label=${f(`clan_modal.history_watch_replay`)}
              @click=${()=>this.watchReplay(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${He}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${f(`clan_modal.history_watch_replay`)}</span
              >
            </button>
          </div>
        </div>
        <div
          class="px-4 py-3 grid grid-cols-2 gap-x-4 gap-y-2 justify-items-center text-center border-b border-white/5"
        >
          ${this.renderField(f(`account_modal.games_clan_tag`),e.clanTag??`—`)}
          ${this.renderField(f(`account_modal.username_title`),e.username)}
        </div>
        <div
          class="px-4 py-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 justify-items-center text-center"
        >
          ${this.renderField(f(`clan_modal.history_game_type`),Be(e))}
          ${t?``:this.renderField(f(`clan_modal.history_map`),n??`—`)}
          ${this.renderField(f(`clan_modal.history_players`),e.totalPlayers===null?`—`:`${e.totalPlayers}`)}
          ${this.renderField(f(`clan_modal.history_duration`),pe(e.durationSeconds))}
        </div>
      </div>
    `}renderField(e,t){return p`
      <div class="min-w-0">
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-0.5"
        >
          ${e}
        </div>
        <div class="text-sm text-white truncate" title=${t}>${t}</div>
      </div>
    `}renderResultBadge(e){let t,n;return e.result===`victory`?(t=f(`clan_modal.history_result_victory`),n=`text-white bg-green-600 border-green-500`):e.result===`defeat`?(t=f(`clan_modal.history_result_defeat`),n=`text-white bg-red-600 border-red-500`):(t=f(`account_modal.games_result_incomplete`),n=`text-white bg-gray-500 border-gray-400`),p`<span
      class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-lg ${n}"
      >${t}</span
    >`}};b([y()],E.prototype,`publicId`,void 0),b([y({type:Object})],E.prototype,`cachedState`,void 0),b([n()],E.prototype,`games`,void 0),b([n()],E.prototype,`nextCursor`,void 0),b([n()],E.prototype,`loading`,void 0),b([n()],E.prototype,`loadingMore`,void 0),b([n()],E.prototype,`loadState`,void 0),b([n()],E.prototype,`appendFailed`,void 0),b([n()],E.prototype,`typeFilter`,void 0),b([n()],E.prototype,`modeFilter`,void 0),E=b([d(`player-game-history-view`)],E);var D={city:1,port:2,fact:3,defp:4,silo:5,saml:6},Ke=Object.keys(D).sort((e,t)=>D[e]-D[t]),O={city:`unit_type.city`,defp:`unit_type.defense_post`,fact:`unit_type.factory`,port:`unit_type.port`,saml:`unit_type.sam_launcher`,silo:`unit_type.missile_silo`,wshp:`unit_type.warship`,abomb:`unit_type.atom_bomb`,hbomb:`unit_type.hydrogen_bomb`,mirv:`unit_type.mirv`,mirvw:`player_stats_table.unit.mirvw`,trade:`player_stats_table.unit.trade`,trans:`player_stats_table.unit.trans`};function k(e,t,n,r){return p`
    <div class="w-full">
      <div
        class="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2"
      >
        ${f(e)}
      </div>
      <div class="overflow-x-auto rounded-lg border border-white/5 bg-black/20">
        <table class="w-full table-fixed text-sm text-gray-300">
          <thead>
            <tr class="bg-white/5">
              ${r===void 0?u:p`<th
                    class="px-4 py-2 text-left font-semibold text-gray-400"
                  >
                    ${f(r)}
                  </th>`}
              ${t.map(e=>p`
                  <th class="px-3 py-2 text-center font-semibold text-gray-400">
                    ${f(e)}
                  </th>
                `)}
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            ${n.map(e=>p`
                <tr class="hover:bg-white/5 transition-colors">
                  ${e.label===void 0?u:p`<td
                        class="px-4 py-2 text-left font-medium text-white/80"
                      >
                        ${f(e.label)}
                      </td>`}
                  ${e.values.map(e=>p`
                      <td class="px-3 py-2 text-center text-white/60">
                        ${w(e)}
                      </td>
                    `)}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    </div>
  `}var qe=[`player_stats_table.built`,`player_stats_table.destroyed`,`player_stats_table.captured`,`player_stats_table.lost`],A=class extends v{createRenderRoot(){return this}render(){let e=this.stats,t=(e,t)=>e?.[t]??0n,n=(e,n)=>Array.from({length:n},(n,r)=>t(e,r));return p`
      <div class="grid grid-cols-1 gap-6 w-full">
        ${k(`player_stats_table.building_stats`,qe,Ke.map(t=>({label:O[t],values:n(e?.units?.[t],4)})),`player_stats_table.building`)}
        ${k(`player_stats_table.warship_stats`,qe,[{values:n(e?.units?.wshp,4)}])}
        ${k(`player_stats_table.ship_arrivals`,[`player_stats_table.sent`,`player_stats_table.arrived`,`player_stats_table.captured`,`player_stats_table.destroyed`],ce.map(t=>({label:O[t],values:n(e?.boats?.[t],4)})),`player_stats_table.ship_type`)}
        <!-- Launched and Landed count missiles this player fired; Intercepted
        counts incoming missiles their SAMs shot down (bombIntercept credits
        the SAM owner), so the last column is defensive. -->
        ${k(`player_stats_table.nuke_stats`,[`player_stats_table.launched`,`player_stats_table.landed`,`player_stats_table.intercepted`],re.map(t=>({label:O[t],values:n(e?.bombs?.[t],3)})),`player_stats_table.weapon`)}
        ${k(`player_stats_table.attack_stats`,[`player_stats_table.sent`,`player_stats_table.incoming`,`player_stats_table.cancelled`],[{values:n(e?.attacks,3)}])}
        ${k(`player_stats_table.gold_stats`,[`player_stats_table.workers`,`player_stats_table.war`,`player_stats_table.trade`,`player_stats_table.piracy`,`player_stats_table.trains`,`player_stats_table.trains_external`],[{values:n(e?.gold,6)}])}
        ${k(`player_stats_table.diplomacy_stats`,[`player_stats_table.betrayals`],[{values:[e?.betrayals??0n]}])}
      </div>
    `}};b([y({type:Object})],A.prototype,`stats`,void 0),A=b([d(`player-stats-table`)],A);var Je={cities:`player_stats_tree.stats_cities_per_game`,ports:`player_stats_tree.stats_ports_per_game`,factories:`player_stats_tree.stats_factories_per_game`,defensePosts:`player_stats_tree.stats_defense_posts_per_game`,transports:`player_stats_tree.stats_transports_sent_per_game`,landings:`player_stats_tree.stats_transports_landed_per_game`,tradeArrived:`player_stats_tree.stats_trade_arrived_per_game`,tradeCaptured:`player_stats_tree.stats_trade_captured_per_game`,outgoing:`player_stats_tree.stats_troops_sent_per_game`,incoming:`player_stats_tree.stats_troops_incoming_per_game`,nukes:`player_stats_tree.stats_nukes_launched_per_game`,warships:`player_stats_tree.stats_warships_built_per_game`,tradeGold:`player_stats_tree.stats_trade_gold_per_game`,piracyGold:`player_stats_tree.stats_piracy_gold_per_game`,trainGold:`player_stats_tree.stats_train_gold_per_game`,othersTrainGold:`player_stats_tree.stats_others_train_gold_per_game`},Ye={cities:`player_stats_table.built`,ports:`player_stats_table.built`,factories:`player_stats_table.built`,defensePosts:`player_stats_table.built`,transports:`player_stats_tree.stats_transports_sent_short`,landings:`player_stats_tree.stats_transports_landed_short`,tradeArrived:`player_stats_tree.stats_trade_arrived_short`,tradeCaptured:`player_stats_tree.stats_trade_captured_short`,outgoing:`player_stats_tree.stats_outgoing_short`,incoming:`player_stats_table.incoming`,nukes:`player_stats_table.launched`,warships:`player_stats_table.built`,tradeGold:`player_stats_table.trade`,piracyGold:`player_stats_table.piracy`,trainGold:`player_stats_table.trains`,othersTrainGold:`player_stats_table.trains_external`},Xe=[{heading:`player_stats_tree.stats_group_buildings`,keys:[`cities`,`ports`,`factories`,`defensePosts`]},{heading:`player_stats_tree.stats_group_naval`,keys:[`transports`,`landings`,`tradeArrived`,`tradeCaptured`]},{heading:`player_stats_tree.stats_group_combat`,keys:[`outgoing`,`incoming`,`nukes`,`warships`]},{heading:`player_stats_tree.stats_group_gold`,keys:[`tradeGold`,`piracyGold`,`trainGold`,`othersTrainGold`]}],Ze={city:`images/CityIconWhite.svg`,port:`images/PortIcon.svg`,factory:`images/FactoryIconWhite.svg`,defensePost:`images/ShieldIconWhite.svg`,transport:`images/BoatIconWhite.svg`,tradeShip:`images/TradeShipIconWhite.svg`,troop:`images/SoldierIcon.svg`,nuke:`images/NukeIconWhite.svg`,warship:`images/DestroyerIconWhite.svg`,gold:`images/GoldCoinIcon.svg`},Qe=new Set([`troop`]),$e=`ml-1 inline-block h-[1em] w-[1em] object-contain`,et={city:1.1,port:1.11,factory:1.1,warship:1.1,tradeShip:.5,gold:.9,nuke:.9},tt={cities:`city`,ports:`port`,factories:`factory`,defensePosts:`defensePost`,transports:`transport`,landings:`transport`,tradeArrived:`tradeShip`,tradeCaptured:`tradeShip`,outgoing:`troop`,incoming:`troop`,nukes:`nuke`,warships:`warship`,tradeGold:`gold`,piracyGold:`gold`,trainGold:`gold`,othersTrainGold:`gold`},j=`text-emerald-300 border-emerald-400/20`,M=`text-blue-300 border-blue-400/20`,N=`text-rose-300 border-rose-400/20`,P=`text-amber-300 border-amber-400/20`,nt={cities:j,ports:j,factories:j,defensePosts:j,transports:M,landings:M,tradeArrived:M,tradeCaptured:M,outgoing:N,incoming:N,nukes:N,warships:N,tradeGold:P,piracyGold:P,trainGold:P,othersTrainGold:P};function F(e,t){if(t<=0n)return`—`;let n=Number(e)/Number(t);return n>=1e3?w(n):n>=10?Math.round(n).toString():n.toFixed(1)}function rt(e){let t=e.total,n=e.stats,r=n?.attacks?.[0]??0n,i=n?.attacks?.[1]??0n,a=n?.gold?.[2]??0n,o=n?.gold?.[3]??0n,s=n?.gold?.[4]??0n,c=n?.gold?.[5]??0n,l=n?.units?.city?.[0]??0n,u=n?.units?.port?.[0]??0n,d=n?.units?.fact?.[0]??0n,ee=n?.units?.defp?.[0]??0n,f=n?.units?.wshp?.[0]??0n,p=(n?.bombs?.abomb?.[0]??0n)+(n?.bombs?.hbomb?.[0]??0n)+(n?.bombs?.mirv?.[0]??0n),te=n?.boats?.trans?.[0]??0n,ne=n?.boats?.trans?.[1]??0n,m=n?.boats?.trade?.[1]??0n,h=n?.boats?.trade?.[2]??0n,g=e.recentGames??[],_=e.recent?.games??g.length,v=e.recent?.wins??g.filter(e=>e.won).length;return{winRate:t>0n?`${(Number(e.wins)/Number(t)*100).toFixed(1)}%`:`—`,recentWinRate:_>0?`${(v/_*100).toFixed(1)}%`:`—`,played:w(t),wins:w(e.wins),losses:w(e.losses),metrics:[{key:`cities`,value:F(l,t)},{key:`ports`,value:F(u,t)},{key:`factories`,value:F(d,t)},{key:`defensePosts`,value:F(ee,t)},{key:`transports`,value:F(te,t)},{key:`landings`,value:F(ne,t)},{key:`tradeArrived`,value:F(m,t)},{key:`tradeCaptured`,value:F(h,t)},{key:`outgoing`,value:F(r,t)},{key:`incoming`,value:F(i,t)},{key:`nukes`,value:F(p,t)},{key:`warships`,value:F(f,t)},{key:`tradeGold`,value:F(a,t)},{key:`piracyGold`,value:F(o,t)},{key:`trainGold`,value:F(s,t)},{key:`othersTrainGold`,value:F(c,t)}]}}var I=class extends v{createRenderRoot(){return this}renderMetric(e,t){let n=Ye[e],r=f(Je[e]),i=tt[e],a=`transform:scale(${et[i]??1})${Qe.has(i)?`;filter:invert(1)`:``}`;return p`
      <div
        data-stat=${e}
        title=${r}
        class="min-w-0 rounded-xl border bg-white/5 px-3 py-3 text-center ${nt[e]}"
      >
        <div
          data-label
          aria-hidden="true"
          class="truncate text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
        >
          ${f(n)}
        </div>
        <span class="sr-only">${r}</span>
        <div
          class="mt-1 truncate text-2xl font-black leading-none tabular-nums"
        >
          ${t}<img
            data-unit
            src=${x(Ze[i])}
            style=${a}
            alt=""
            aria-hidden="true"
            class="${$e} align-[-0.1em]"
          /><span data-per-game class="ml-1 text-xs font-semibold text-white/35"
            >${f(`player_stats_tree.stats_per_game_suffix`)}</span
          >
        </div>
      </div>
    `}render(){if(!this.leaf)return p``;let e=rt(this.leaf),t=new Map(e.metrics.map(e=>[e.key,e.value])),n=this.leaf.recent?.games??this.leaf.recentGames?.length??0,r=this.leaf.total>100n&&n>0,i=[{key:`played`,label:`player_stats_tree.stats_played`,value:e.played,tone:`text-blue-300`},{key:`victories`,label:`player_stats_tree.stats_victories`,value:e.wins,tone:`text-emerald-300`},{key:`losses`,label:`player_stats_tree.stats_losses`,value:e.losses,tone:`text-rose-300`}];return p`
      <section
        class="space-y-3"
        aria-label=${f(`player_stats_tree.stats_summary`)}
      >
        <div
          data-win-rate
          class="relative overflow-hidden rounded-xl border border-malibu-blue/25 bg-gradient-to-br from-malibu-blue/15 via-white/5 to-transparent px-4 py-3"
        >
          <div
            class="pointer-events-none absolute -right-8 -top-12 h-32 w-32 rounded-full bg-aquarius/10 blur-2xl"
          ></div>
          <div
            class="relative grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(17rem,20rem)] sm:items-center"
          >
            <!-- Flex, not a 2-col grid: the halves of a grid would each take
            50% of this flexible column, so the two rates drift apart as the
            viewport widens. Flex sizes them to content and keeps the gap
            fixed. -->
            <div class="flex flex-wrap items-start gap-x-8 gap-y-3">
              <div>
                <div
                  class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/60"
                >
                  ${f(`player_stats_tree.stats_win_rate`)}
                </div>
                <div
                  class="mt-1 text-3xl font-black leading-none tabular-nums text-emerald-300"
                >
                  ${e.winRate}
                </div>
              </div>
              ${r?p`
                    <div data-last-100>
                      <div
                        class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/60"
                      >
                        ${f(`player_stats_tree.stats_last_100`)}
                      </div>
                      <div
                        class="mt-1 text-3xl font-black leading-none tabular-nums text-cyan-300"
                      >
                        ${e.recentWinRate}
                      </div>
                    </div>
                  `:u}
            </div>
            <div
              data-record-group
              class="grid grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-black/20 shadow-inner shadow-black/20"
            >
              ${i.map((e,t)=>p`
                  <div
                    data-record-stat=${e.key}
                    class="min-w-0 px-2 py-3 text-center ${t===0?``:`border-l border-white/10`}"
                  >
                    <div
                      class="truncate text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
                      title=${f(e.label)}
                    >
                      ${f(e.label)}
                    </div>
                    <div
                      class="mt-1 truncate text-xl font-black leading-none tabular-nums ${e.tone}"
                    >
                      ${e.value}
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>

        <div class="space-y-3">
          ${Xe.map(e=>p`
              <div data-metric-group=${e.heading}>
                <div
                  class="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/45"
                >
                  ${f(e.heading)}
                </div>
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  ${e.keys.map(e=>this.renderMetric(e,t.get(e)??`—`))}
                </div>
              </div>
            `)}
        </div>
      </section>
    `}};b([y({attribute:!1})],I.prototype,`leaf`,void 0),I=b([d(`player-stats-summary`)],I);var it=new Set,at=new Set([3]),L=`all`,ot=[i.Public,i.Private,`Ranked`,i.Singleplayer],R=class extends v{constructor(...e){super(...e),this.selectedType=L,this.selectedMode=L,this.selectedDifficulty=L,this.selectedRankedType=L}get typeNode(){if(!(this.selectedType===L||this.selectedType===`Ranked`))return this.statsTree?.[this.selectedType]}get availableTypes(){return this.statsTree?ot.filter(e=>e===`Ranked`?Object.keys(this.statsTree?.Ranked??{}).length>0:Object.keys(this.statsTree?.[e]??{}).length>0):[]}get availableModes(){return this.typeNode?de.filter(e=>this.typeNode?.[e]):[]}get availableRankedTypes(){return this.statsTree?.Ranked?Object.keys(this.statsTree.Ranked).filter(e=>Object.values(s).includes(e)):[]}get availableDifficulties(){if(!this.typeNode||this.selectedType===i.Public)return[];let e=this.selectedMode===L?this.availableModes:[this.selectedMode];return Object.values(r).filter(t=>e.some(e=>this.typeNode?.[e]?.[t]))}labelForMode(e){return e===a.FFA?f(`game_mode.ffa`):e===a.Team?f(`game_mode.teams`):f(`game_mode.hvn`)}labelForType(e){return e===L?f(`player_stats_tree.all`):e===`Ranked`?f(`player_stats_tree.ranked`):e===i.Public?f(`player_stats_tree.public`):e===i.Private?f(`player_stats_tree.private`):f(`player_stats_tree.solo`)}renderFilterRow(e){return p`
      <div
        role="tablist"
        class="flex flex-wrap gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${e}
      </div>
    `}renderFilterTab(e,t,n,r){return p`
      <button
        type="button"
        role="tab"
        aria-selected=${t}
        title=${r??u}
        @click=${n}
        class="grow basis-20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${t?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
      >
        ${e}
      </button>
    `}labelForRankedType(e){switch(e){case s.OneVOne:return f(`player_stats_tree.ranked_1v1`);case s.TwoVTwo:return f(`player_stats_tree.ranked_2v2`);case s.FreeForAll:return f(`player_stats_tree.ranked_ffa`);case s.ClanWars:return f(`player_stats_tree.ranked_clanwars`)}}createRenderRoot(){return this}getSelectedLeaf(){let e;if(e=this.selectedType===L?this.mergeLeaves(this.availableTypes.flatMap(e=>e===`Ranked`?this.getRankedLeaves(L):this.getGameTypeLeaves(e,L,L))):this.selectedType===`Ranked`?this.mergeLeaves(this.getRankedLeaves(this.selectedRankedType)):this.mergeLeaves(this.getGameTypeLeaves(this.selectedType,this.selectedMode,this.selectedType===i.Public?L:this.selectedDifficulty)),!e)return null;let t=this.getSelectedRecentStats();return t?{...e,recent:t}:e}getSelectedRecentStats(){let e=this.statsTree?.recent;if(!e)return;if(this.selectedType===L)return e.all;if(this.selectedType===`Ranked`){let t=e.Ranked;return t?this.selectedRankedType===L?t.all:t[this.selectedRankedType]:void 0}let t=e[this.selectedType];if(!t)return;if(this.selectedMode===L)return this.selectedType===i.Public||this.selectedDifficulty===L?t.all:t[this.selectedDifficulty];let n=t[this.selectedMode];if(n)return this.selectedType===i.Public||this.selectedDifficulty===L?n.all:n[this.selectedDifficulty]}getGameTypeLeaves(e,t,n){let r=this.statsTree?.[e];return r?(t===L?de.filter(e=>r[e]):[t]).flatMap(e=>{let t=r[e];return t?(n===L?Object.keys(t).filter(l):[n]).flatMap(e=>{let n=t[e];return n?[n]:[]}):[]}):[]}getRankedLeaves(e){let t=this.statsTree?.Ranked;return t?(e===L?this.availableRankedTypes:[e]).flatMap(e=>{let n=t[e];return n?[n]:[]}):[]}mergeLeaves(e){let t=this.reduceLeaves(e);if(t===null)return null;let n=e.length===1?e[0].recent:void 0;return n===void 0?t:{...t,recent:n}}reduceLeaves(e){return e.reduce((e,t)=>e?{wins:e.wins+t.wins,losses:e.losses+t.losses,total:e.total+t.total,stats:this.mergeStats(e.stats,t.stats),recentGames:this.mergeRecentGames(e.recentGames,t.recentGames)}:{wins:t.wins,losses:t.losses,total:t.total,stats:this.cloneStats(t.stats),recentGames:this.mergeRecentGames(void 0,t.recentGames)},null)}mergeRecentGames(e,t){if(!e&&!t)return;let n=new Map;for(let r of[...e??[],...t??[]])n.set(r.gameId,r);return[...n.values()].sort((e,t)=>e.gameId===t.gameId?0:e.gameId>t.gameId?-1:1).slice(0,100)}syncSelection(){let e=this.availableTypes;if(this.selectedType!==L&&!e.includes(this.selectedType)&&(this.selectedType=L),this.selectedType===L)return;if(this.selectedType===`Ranked`){let e=this.availableRankedTypes;this.selectedRankedType!==L&&!e.includes(this.selectedRankedType)&&(this.selectedRankedType=L);return}let t=this.availableModes;this.selectedMode!==L&&!t.includes(this.selectedMode)&&(this.selectedMode=L);let n=this.availableDifficulties;this.selectedDifficulty!==L&&!n.includes(this.selectedDifficulty)&&(this.selectedDifficulty=L)}willUpdate(e){e.has(`statsTree`)&&(this.selectedType=L,this.selectedMode=L,this.selectedDifficulty=L,this.selectedRankedType=L),(e.has(`statsTree`)||e.has(`selectedType`)||e.has(`selectedMode`)||e.has(`selectedDifficulty`)||e.has(`selectedRankedType`))&&this.syncSelection()}setGameType(e){this.selectedType!==e&&(this.selectedType=e,this.requestUpdate())}setMode(e){this.selectedMode!==e&&(this.selectedMode=e,this.requestUpdate())}setRankedType(e){this.selectedRankedType!==e&&(this.selectedRankedType=e,this.requestUpdate())}setDifficulty(e){this.selectedDifficulty!==e&&(this.selectedDifficulty=e,this.requestUpdate())}mergeStats(e,t){if(!(!e&&!t))return e?t?{attacks:this.mergeStatArrays(e.attacks,t.attacks,at),betrayals:this.mergeStatValue(e.betrayals,t.betrayals),killedAt:this.mergeStatValue(e.killedAt,t.killedAt),conquests:this.mergeStatArrays(e.conquests,t.conquests),boats:this.mergeStatRecord(e.boats,t.boats),bombs:this.mergeStatRecord(e.bombs,t.bombs),gold:this.mergeStatArrays(e.gold,t.gold),units:this.mergeStatRecord(e.units,t.units)}:this.cloneStats(e):this.cloneStats(t)}mergeStatValue(e,t){if(!(e===void 0&&t===void 0))return(e??0n)+(t??0n)}mergeStatArrays(e,t,n=it){if(!e&&!t)return;let r=Math.max(e?.length??0,t?.length??0),i=[];for(let a=0;a<r;a+=1){let r=e?.[a]??0n,o=t?.[a]??0n;i[a]=n.has(a)?r>o?r:o:r+o}return i}mergeStatRecord(e,t){if(!e&&!t)return;let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=this.mergeStatArrays(e?.[r],t?.[r]);i&&(n[r]=i)}),Object.keys(n).length?n:void 0}cloneStats(e){if(e)return{attacks:e.attacks?[...e.attacks]:void 0,betrayals:e.betrayals,killedAt:e.killedAt,conquests:e.conquests?[...e.conquests]:void 0,boats:e.boats?{...e.boats}:void 0,bombs:e.bombs?{...e.bombs}:void 0,gold:e.gold?[...e.gold]:void 0,units:e.units?{...e.units}:void 0}}render(){let e=this.availableTypes,t=this.availableModes,n=this.availableDifficulties,r=this.availableRankedTypes,i=this.getSelectedLeaf();return p`
      <div class="flex flex-col gap-4">
        <!-- Filters: a type row, then a context-dependent second row (ranked
             type / mode / difficulty), styled like the game-history tab. -->
        <div class="space-y-2">
          ${this.renderFilterRow([this.renderFilterTab(this.labelForType(L),this.selectedType===L,()=>this.setGameType(L)),...e.map(e=>this.renderFilterTab(this.labelForType(e),this.selectedType===e,()=>this.setGameType(e)))])}
          ${this.selectedType===`Ranked`&&r.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(L),this.selectedRankedType===L,()=>this.setRankedType(L)),...r.map(e=>this.renderFilterTab(this.labelForRankedType(e)??``,this.selectedRankedType===e,()=>this.setRankedType(e)))]):u}
          ${t.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(L),this.selectedMode===L,()=>this.setMode(L),f(`player_stats_tree.mode`)),...t.map(e=>this.renderFilterTab(this.labelForMode(e),this.selectedMode===e,()=>this.setMode(e),f(`player_stats_tree.mode`)))]):u}
          ${n.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(L),this.selectedDifficulty===L,()=>this.setDifficulty(L),f(`difficulty.difficulty`)),...n.map(e=>this.renderFilterTab(f(`difficulty.${e.toLowerCase()}`),this.selectedDifficulty===e,()=>this.setDifficulty(e),f(`difficulty.difficulty`)))]):u}
        </div>

        ${i?p`
              <div class="border-t border-white/10">
                <div class="py-3">
                  <player-stats-summary .leaf=${i}></player-stats-summary>
                </div>

                <div class="border-t border-white/10 pt-6">
                  <player-stats-table
                    .stats=${i?.stats??null}
                  ></player-stats-table>
                </div>
              </div>
            `:p`
              <div
                class="py-12 text-center text-white/30 italic border border-white/5 rounded-xl bg-white/5"
              >
                ${f(`player_stats_tree.no_stats`)}
              </div>
            `}
      </div>
    `}};b([y({type:Object})],R.prototype,`statsTree`,void 0),b([n()],R.prototype,`selectedType`,void 0),b([n()],R.prototype,`selectedMode`,void 0),b([n()],R.prototype,`selectedDifficulty`,void 0),b([n()],R.prototype,`selectedRankedType`,void 0),R=b([d(`player-stats-tree-view`)],R);function st(e){if(e==null)return null;if(typeof e==`number`)return Number.isFinite(e)?e.toLocaleString():null;if(!e)return null;try{return BigInt(e).toLocaleString()}catch{return null}}var z=class extends v{constructor(...e){super(...e),this.hard=null,this.soft=null,this.compact=!1}createRenderRoot(){return this}render(){let e=st(this.hard),t=st(this.soft);if(e===null&&t===null)return p``;let n=this.compact,r=n?`flex items-center gap-3 text-xs`:`flex gap-3 justify-center`,i=n?`text-xs text-green-400/70`:`text-sm font-bold text-green-400`,a=n?`text-xs text-amber-600/80`:`text-sm font-bold text-amber-700`;return p`
      <div class="${r}">
        ${e===null?``:p`<div
              class="flex items-center gap-1.5"
              title=${f(`cosmetics.hard`)}
            >
              <plutonium-icon .size=${n?12:16}></plutonium-icon>
              <span class="${i}">${e}</span>
            </div>`}
        ${t===null?``:p`<div
              class="flex items-center gap-1.5"
              title=${f(`cosmetics.soft`)}
            >
              <cap-icon
                .size=${n?14:20}
                style=${n?``:`margin-top:3px`}
              ></cap-icon>
              <span class="${a}">${t}</span>
            </div>`}
      </div>
    `}};b([y({attribute:!1})],z.prototype,`hard`,void 0),b([y({attribute:!1})],z.prototype,`soft`,void 0),b([y({type:Boolean})],z.prototype,`compact`,void 0),z=b([d(`currency-display`)],z);var B=class extends v{constructor(...e){super(...e),this.username=null,this.publicId=``,this.copyText=``,this.onNameClick=null,this.nameClass=``}createRenderRoot(){return this}render(){let e=this.username??this.publicId,t=this.copyText===``?this.username??this.publicId:this.copyText,n=this.username!==null&&this.username!==void 0&&this.username!==``?Ee(this.username,this.nameClass===``?void 0:``):null;return p`
      <span class="inline-flex items-center gap-1.5 min-w-0 max-w-full">
        ${this.onNameClick?p`<button
              type="button"
              class=${this.nameClass===``?`text-xs text-white/60 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:bg-white/10 hover:text-white transition-colors`:this.nameClass}
              title=${f(`player_profile.view`)}
              aria-label=${f(`player_profile.view`)}
              @click=${()=>this.onNameClick?.()}
            >
              ${n??e}
            </button>`:p`<copy-button
              compact
              .copyText=${t}
              .displayText=${e}
              .displayContent=${n}
              .showVisibilityToggle=${!1}
              .showCopyIcon=${!1}
            ></copy-button>`}
        ${ae(this.username)?se():u}
      </span>
    `}};b([y({attribute:!1})],B.prototype,`username`,void 0),b([y({type:String})],B.prototype,`publicId`,void 0),b([y({type:String})],B.prototype,`copyText`,void 0),b([y({attribute:!1})],B.prototype,`onNameClick`,void 0),b([y({type:String})],B.prototype,`nameClass`,void 0),B=b([d(`player-name`)],B);var ct=`font-bold text-blue-300 truncate hover:underline`;function lt(e,t){e.dispatchEvent(new CustomEvent(`view-profile`,{detail:{publicId:t},bubbles:!0,composed:!0}))}function ut(e,t,n,r=``){return p`<player-name
    class=${r}
    .username=${t}
    .publicId=${n}
    .nameClass=${ct}
    .onNameClick=${()=>lt(e,n)}
  ></player-name>`}var dt=10,ft=90,V=110,H=`profile-card-pulse-fade`,U=`profile-card-gold-ring`,pt=0,W=[];function mt(){try{return window.self!==window.top}catch{return!0}}function ht(){return!ke()&&document.visibilityState!==`hidden`&&!mt()}var G=class extends v{constructor(...e){super(...e),this.patternId=`profile-card-hex-${pt++}`,this.variant=`full`,this.username=``,this.clanTag=null,this.progress=null,this.prestigeable=!1,this.provisional=!1,this.openKey=void 0,this.intro=!1,this.pulse=null,this.introDecided=!1,this.pulseMeasured=!1,this.onVisibilityChange=()=>{document.visibilityState===`hidden`&&this.stopPulse()},this.onPulseEnd=e=>{let t=this.pulse?.kind===`gold`?U:H;e.animationName===t&&this.stopPulse()}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),_t()}disconnectedCallback(){super.disconnectedCallback(),this.stopPulse()}get compact(){return this.variant===`compact`}willUpdate(e){if(super.willUpdate(e),this.introDecided||this.compact||this.progress===null)return;this.introDecided=!0;let t=this.openKey;if(t!==void 0){if(W.includes(t))return;W.push(t),W.length>8&&W.shift()}this.intro=ht()}updated(e){super.updated(e),!(!this.intro||this.pulseMeasured)&&(this.pulseMeasured=!0,this.startPulse())}async startPulse(){let e=this.querySelector(`[data-profile-card="full"]`);if(e===null)return;let t=e.querySelector(`level-badge`);if(await t?.updateComplete,!this.isConnected||!this.intro)return;let n=e.getBoundingClientRect();if(n.width===0||n.height===0)return;let r=e.offsetWidth>0?e.offsetWidth/n.width:1,i=n.width*r,a=n.height*r,o=t?.getBoundingClientRect(),s=o&&o.width>0?o:n,c=(s.left+s.width/2-n.left)*r,l=(s.top+s.height/2-n.top)*r,u=Math.max(Math.hypot(c,l),Math.hypot(i-c,l),Math.hypot(c,a-l),Math.hypot(i-c,a-l)),d=this.progress?.legend?`gold`:`blue`;this.pulse={kind:d,cx:Math.round(c),cy:Math.round(l),reach:Math.round(u+(d===`gold`?V:ft))},document.addEventListener(`visibilitychange`,this.onVisibilityChange)}stopPulse(){document.removeEventListener(`visibilitychange`,this.onVisibilityChange),this.pulse=null}renderLevelLine(e){let t=this.compact?`text-sm tracking-wider`:`text-lg tracking-widest sm:text-xl`,n=T(e.prestige);return e.legend?p`<div
        data-profile-level-line
        class="bg-gradient-to-r from-yellow-300 via-fuchsia-300 to-yellow-300 bg-clip-text font-black uppercase text-transparent ${t}"
      >
        ${f(`progression.legend`)}
        <span class="text-white/40">·</span>
        ${f(`progression.prestige`,{prestige:n})}
      </div>`:p`<div
      data-profile-level-line
      class="font-black uppercase text-white ${t}"
    >
      ${n>0?p`<span class="text-yellow-300"
              >${f(`progression.prestige`,{prestige:n})}</span
            >
            <span class="text-white/30">·</span>`:u}
      ${f(`progression.level`,{level:e.level})}
    </div>`}renderProvisional(){return this.provisional?p`<div
      data-profile-provisional
      class="mt-0.5 text-xs font-semibold text-amber-200/80"
    >
      ${f(`progression.provisional_label`)}
    </div>`:u}renderBar(e){return p`<div
      data-xp-bar
      class="relative w-full overflow-hidden rounded-sm bg-white/15 ${this.compact?`h-2`:`h-3`}"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${Math.round(e*100)}
    >
      <div
        data-xp-bar-fill
        class="h-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]"
        style="width: ${e*100}%"
      ></div>
      ${Array.from({length:dt-1},(e,t)=>p`<span
            aria-hidden="true"
            class="absolute top-0 h-full w-[2px] -translate-x-1/2 bg-[#0b1424]"
            style="left: ${(t+1)*100/dt}%"
          ></span>`)}
    </div>`}renderXp(e){let{xpInLevel:t,xpForNext:n}=e,r=t!==void 0&&n!==void 0,i=e.legend?1:Oe(t??0,n??0),a=this.compact?u:p`<div data-profile-lifetime class="truncate">
          <span
            class="text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
            >${f(`profile_card.lifetime_xp`)}</span
          >
          <span class="ml-1 font-black tabular-nums text-yellow-300"
            >${Me(e.lifetimeXp)}</span
          >
        </div>`;return p`<div class=${this.compact?`mt-1.5`:`mt-3`}>
      ${r?this.renderBar(i):u}
      <div
        class="mt-1 flex items-baseline justify-between gap-3 text-xs ${this.compact?`justify-end`:``}"
      >
        ${a}
        ${r?p`<div
              data-profile-xp
              class="shrink-0 font-semibold tabular-nums text-white/55"
            >
              ${je(t,e.legend?0:n)}
            </div>`:u}
      </div>
    </div>`}renderCompactXp(e){let{xpInLevel:t,xpForNext:n}=e;if(t===void 0||n===void 0)return u;let r=e.legend?1:Oe(t,n);return p`<div class="w-full shrink-0 sm:w-64">
      <div
        data-profile-xp
        class="mb-1.5 text-right text-xs font-semibold tabular-nums text-white/60"
      >
        ${je(t,e.legend?0:n)}
      </div>
      ${this.renderBar(r)}
    </div>`}canPrestige(e){return this.prestigeable&&e.canPrestige===!0}renderPrestigeButton(){return p`<button
      type="button"
      data-profile-prestige
      class="profile-prestige-button rounded-xl border border-yellow-300/70 bg-gradient-to-b from-yellow-300 to-amber-500 px-6 py-2.5 text-sm font-black uppercase tracking-widest text-zinc-900 transition-transform hover:-translate-y-0.5"
      @click=${()=>this.dispatchEvent(new CustomEvent(`prestige-request`,{bubbles:!0,composed:!0}))}
    >
      ${f(`prestige.button`)}
    </button>`}renderPattern(e,t,n){return p`<svg
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 h-full w-full ${n.className}"
      style=${n.style??u}
    >
      <defs>
        <pattern
          id=${e}
          width="60"
          height="103.92"
          patternUnits="userSpaceOnUse"
        >
          ${t}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#${e})"></rect>
    </svg>`}hexPath(e,t,n){return ve`<path
      d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z M30 69.28 L30 103.92"
      fill="none"
      stroke=${e}
      stroke-opacity=${t}
      stroke-width=${n}
    ></path>`}renderBackground(e){return this.renderPattern(this.patternId,e?this.hexPath(`#facc15`,.075,1.5):this.hexPath(`#2dd4bf`,.07,1.5),{className:``})}renderPulse(e){let t=e.kind===`gold`?ve`${this.hexPath(`#f59e0b`,.25,6)}${this.hexPath(`#fde68a`,.8,1.8)}`:this.hexPath(`#7dd3fc`,.75,2),n=this.renderPattern(`${this.patternId}-pulse`,t,{className:`profile-card-pulse profile-card-pulse-${e.kind}`,style:`--cx: ${e.cx}px; --cy: ${e.cy}px; --reach: ${e.reach}px`});return p`<div
      data-profile-pulse=${e.kind}
      class="pointer-events-none absolute inset-0"
      @animationend=${this.onPulseEnd}
    >
      ${n}
    </div>`}renderBadge(e,t){return p`<div class="relative grid shrink-0 place-items-center">
      <div
        aria-hidden="true"
        class="absolute rounded-full ${this.compact?`-inset-4`:`-inset-8`}"
        style="background: radial-gradient(circle, ${t}55 0%, transparent 70%)"
      ></div>
      <level-badge
        class="relative"
        .level=${e.level}
        .prestige=${e.prestige}
        .legend=${e.legend}
        .size=${this.compact?64:120}
      ></level-badge>
    </div>`}render(){let e=this.progress;if(e===null)return u;let t=Ae(e.prestige,e.legend),n=this.clanTag===null?u:p`<span
            data-profile-clan
            class="font-black tracking-wider text-aquarius ${this.compact?`shrink-0 text-sm`:`block text-sm`}"
            >[${this.clanTag}]</span
          >`,r=p`<span
      data-profile-name
      class="truncate font-black leading-tight ${this.compact?`text-2xl`:`block text-3xl sm:text-4xl`}"
      title=${this.username}
      >${this.username}</span
    >`;if(this.compact)return p`<section
        data-profile-card="compact"
        class="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0b1424] to-[#132644] px-5 py-4 text-white"
      >
        ${this.renderBackground(!1)}
        <div
          class="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          <div class="flex min-w-0 flex-1 items-center gap-4">
            ${this.renderBadge(e,t)}
            <div class="min-w-0">
              <div class="flex min-w-0 items-baseline gap-2">
                ${n} ${r}
              </div>
              <div class="mt-0.5">${this.renderLevelLine(e)}</div>
              ${this.renderProvisional()}
            </div>
          </div>
          ${this.canPrestige(e)?p`<div class="flex shrink-0 justify-end">
                ${this.renderPrestigeButton()}
              </div>`:this.renderCompactXp(e)}
        </div>
      </section>`;let i=e.legend;return p`<section
      data-profile-card="full"
      ?data-profile-legend=${i}
      class="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0b1424] to-[#132644] p-5 text-white sm:p-6 ${i?`profile-card-legend`:``} ${this.intro?`profile-card-intro`:``}"
    >
      ${this.renderBackground(i)}
      ${this.pulse===null?u:this.renderPulse(this.pulse)}
      <div
        class="relative flex flex-col items-center gap-5 sm:flex-row sm:gap-7"
      >
        ${this.renderBadge(e,t)}
        <div class="w-full min-w-0 flex-1 text-center sm:text-left">
          ${n} ${r} ${this.renderLevelLine(e)}
          ${this.renderProvisional()} ${this.renderXp(e)}
          ${this.canPrestige(e)?p`<div
                class="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between"
              >
                <span class="text-sm text-yellow-100/80"
                  >${f(`prestige.ready`)}</span
                >
                ${this.renderPrestigeButton()}
              </div>`:u}
        </div>
      </div>
    </section>`}};b([y({type:String})],G.prototype,`variant`,void 0),b([y({type:String})],G.prototype,`username`,void 0),b([y({attribute:!1})],G.prototype,`clanTag`,void 0),b([y({attribute:!1})],G.prototype,`progress`,void 0),b([y({type:Boolean})],G.prototype,`prestigeable`,void 0),b([y({type:Boolean})],G.prototype,`provisional`,void 0),b([y({attribute:!1})],G.prototype,`openKey`,void 0),b([n()],G.prototype,`intro`,void 0),b([n()],G.prototype,`pulse`,void 0),G=b([d(`profile-card`)],G);var gt=`profile-card-styles`;function _t(){if(document.getElementById(gt))return;let e=document.createElement(`style`);e.id=gt,e.textContent=bt,document.head.appendChild(e)}var vt=`radial-gradient(circle at var(--cx) var(--cy),
    transparent calc(var(--pc-wave1) - var(--band)),
    rgba(0, 0, 0, 0.35) calc(var(--pc-wave1) - var(--band) * 0.55),
    #000 calc(var(--pc-wave1) - var(--band) * 0.1),
    transparent calc(var(--pc-wave1) + var(--band) * 0.2)),
  radial-gradient(circle at var(--cx) var(--cy),
    transparent calc(var(--pc-wave2) - var(--band) * 0.8),
    rgba(0, 0, 0, 0.45) calc(var(--pc-wave2) - var(--band) * 0.15),
    transparent calc(var(--pc-wave2) + var(--band) * 0.15))`,yt=`radial-gradient(circle at var(--cx) var(--cy),
    transparent calc(var(--pc-gold) - var(--band)),
    rgba(0, 0, 0, 0.28) calc(var(--pc-gold) - var(--band) * 0.55),
    rgba(0, 0, 0, 0.7) calc(var(--pc-gold) - var(--band) * 0.12),
    transparent calc(var(--pc-gold) + var(--band) * 0.18))`,bt=`
@property --pc-wave1 { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --pc-wave2 { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --pc-gold { syntax: "<length>"; inherits: false; initial-value: 0px; }

/* Opening: the badge settles in, the XP bar fills, one sheen crosses. */
.profile-card-intro level-badge {
  animation: profile-card-badge-in 520ms cubic-bezier(0.2, 0.9, 0.3, 1.25) 100ms both;
}
@keyframes profile-card-badge-in {
  from { opacity: 0; transform: scale(0.7); }
}
.profile-card-intro [data-xp-bar-fill] {
  transform-origin: left center;
  animation: profile-card-bar-in 900ms cubic-bezier(0.2, 0.8, 0.2, 1) 250ms both;
}
@keyframes profile-card-bar-in {
  from { transform: scaleX(0); }
}
.profile-card-intro::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.1) 47%,
    rgba(255, 255, 255, 0.18) 50%, rgba(255, 255, 255, 0.1) 53%, transparent 65%);
  transform: translateX(-100%);
  animation: profile-card-sheen 1100ms ease-out 450ms both;
}
@keyframes profile-card-sheen {
  to { transform: translateX(100%); }
}

/* The pulse layers. */
.profile-card-pulse-blue {
  --band: ${ft}px;
  filter: drop-shadow(0 0 4px #38bdf8);
  -webkit-mask-image: ${vt};
  mask-image: ${vt};
  animation:
    profile-card-wave1 1700ms cubic-bezier(0.3, 0.55, 0.45, 1) 150ms both,
    profile-card-wave2 1700ms cubic-bezier(0.3, 0.55, 0.45, 1) 560ms both,
    ${H} 2400ms linear both;
}
@keyframes profile-card-wave1 {
  from { --pc-wave1: 0px; }
  to { --pc-wave1: var(--reach); }
}
@keyframes profile-card-wave2 {
  from { --pc-wave2: 0px; }
  to { --pc-wave2: var(--reach); }
}
@keyframes ${H} {
  0%, 70% { opacity: 1; }
  100% { opacity: 0; }
}
.profile-card-pulse-gold {
  --band: ${V}px;
  -webkit-mask-image: ${yt};
  mask-image: ${yt};
  animation: ${U} 3600ms cubic-bezier(0.33, 0.5, 0.5, 1) 300ms 8 both;
}
@keyframes ${U} {
  0% { --pc-gold: 0px; opacity: 0; }
  6% { opacity: 1; }
  70% { opacity: 1; }
  100% { --pc-gold: var(--reach); opacity: 0; }
}

/* A Legend's full card: a thin gold edge and a gold-tinted pattern. */
.profile-card-legend {
  border-color: rgba(250, 204, 21, 0.38);
  box-shadow: 0 0 0 1px rgba(250, 204, 21, 0.12), 0 0 28px rgba(250, 204, 21, 0.1),
    inset 0 0 40px rgba(250, 204, 21, 0.05);
  background-image: linear-gradient(135deg, rgba(250, 204, 21, 0.06), transparent 45%),
    linear-gradient(to bottom right, #0b1424, #132644);
}
/* Its Legend line shimmers once as the card opens. */
.profile-card-legend.profile-card-intro [data-profile-level-line] {
  background-size: 200% 100%;
  animation: profile-card-line-shimmer 2.4s ease-in-out both;
}
@keyframes profile-card-line-shimmer {
  from { background-position: 100% 0; }
  to { background-position: -100% 0; }
}

/* The Prestige button glows on and off: the glow is its own layer, and only
   that layer's opacity animates. */
.profile-prestige-button {
  position: relative;
  box-shadow: 0 0 8px rgba(250, 204, 21, 0.45);
}
.profile-prestige-button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 22px rgba(250, 204, 21, 0.9);
  opacity: 0;
  pointer-events: none;
  animation: profile-prestige-glow 1.8s ease-in-out infinite;
}
@keyframes profile-prestige-glow {
  50% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .profile-card-intro level-badge,
  .profile-card-intro [data-xp-bar-fill],
  .profile-card-legend.profile-card-intro [data-profile-level-line],
  .profile-prestige-button::before {
    animation: none;
  }
  .profile-card-intro::after,
  .profile-card-pulse {
    display: none;
  }
}
`;function xt(e,t){for(let n of e)if(n.cosmetic!==null&&(n.type===`effect`?`effect:${n.key.split(`:`).slice(2).join(`:`)}`:n.key)===t)return n;return null}function St(e){return e.split(`_`).filter(e=>e.length>0).map(e=>e[0].toUpperCase()+e.substring(1)).join(` `)}function Ct(e){return e?p`<img
      src=${e}
      alt=""
      class="h-full w-full object-contain"
      draggable="false"
    />`:p`<svg
    viewBox="0 0 24 24"
    width="40"
    height="40"
    aria-hidden="true"
  >
    <path
      fill="var(--tier)"
      d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"
    />
  </svg>`}function wt(e){let t=e.cosmetic??null;return t===null?null:{name:St(t.name),typeLabel:``,preview:Ct(t.url)}}async function Tt(e){if((e.cosmetic??null)===null)return null;let t=null;try{t=xt(ue(await xe(),!1,null),e.flareName)}catch(e){console.warn(`describeFlareCosmetic: catalog unavailable`,e)}return t===null?wt(e):{name:Fe(t),typeLabel:Ne(t),preview:p`<cosmetic-preview
      class="block h-full w-full"
      .resolved=${t}
      size="card"
    ></cosmetic-preview>`}}var K=`rounded-xl border border-white/10 bg-white/5 px-5 py-[18px] mb-4 last:mb-0`,q=`text-xs font-bold uppercase tracking-[0.12em] text-white/45`;function Et(e){let t=new Date(e);return Number.isNaN(t.getTime())?null:t.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}function Dt(e){let t=new Map;for(let n of e.prestigeHistory??[])t.has(n.rank)||t.set(n.rank,n.at);let n=[];for(let r=1;r<=T(e.prestige);r++)n.push({rank:r,at:t.get(r)??null});return n}function Ot(e){let t=T(e.prestige),n=new Map;for(let r of e.milestones??[]){if(!Number.isInteger(r.level)||r.level<1||!Number.isInteger(r.prestige)||r.prestige<0||r.prestige>t)continue;let e=n.get(r.prestige);e===void 0&&(e=new Map,n.set(r.prestige,e)),e.has(r.level)||e.set(r.level,r.at)}let r=(e,t)=>e-t,i=n.get(t)??new Map,a=[{prestige:t,current:!0,slots:[...new Set([...De,...i.keys()])].sort(r).map(t=>{let n=i.get(t)??null;return{level:t,reached:n!==null||e.level>=t,at:n}})}],o=[...n.keys()].filter(e=>e<t).sort((e,t)=>t-e);for(let e of o){let t=n.get(e);a.push({prestige:e,current:!1,slots:[...t.keys()].sort(r).map(e=>({level:e,reached:!0,at:t.get(e)}))})}return a}var kt=380,At=2500,J=null;function jt(){return J??=oe(()=>import(`./RewardTrack-DufiGj0R.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url).catch(e=>{throw J=null,e}),J}var Mt;function Y(e,t){return e===!1||e.player.publicId!==t?{rewards:null,rewardsFrom:null}:{rewards:e.player.rewards??[],rewardsFrom:e.player.progress??null}}var X=class extends v{constructor(...e){super(...e),this.progress=null,this.publicId=null,this.confirmedLevel=null,this.provisional=!1,this.popKey=void 0,this.loadConfig=c,this.loadUserMe=g,this.claim=Ce,this.alert=he,this.describeCosmetic=Tt,this.loadTrackModule=jt,this.ready=!1,this.track=null,this.claiming=!1,this.loadedFor=void 0,this.loadToken=0,this.claimToken=0,this.popDecided=!1,this.popping=!1,this.popTimer=null,this.onUserMe=e=>{let t=e.detail,n=this.track;!n?.rewards||t===!1||!t?.player||t.player.publicId===this.publicId&&(this.track={...n,...Y(t,this.publicId)})},this.onScored=e=>{let n=this.track;if(!n?.rewards||we(e).length===0||(n.rewardsFrom?.lifetimeXp??0)>=t(e))return;let r=this.publicId;this.loadOwnAccount(r).then(e=>{this.track!==n||e===!1||(this.track={...n,...Y(e,r)})})}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),Pt(),document.addEventListener(`userMeResponse`,this.onUserMe),document.addEventListener(m,this.onScored),this.claiming&&=!1}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`userMeResponse`,this.onUserMe),document.removeEventListener(m,this.onScored),this.claimToken++,this.popTimer!==null&&clearTimeout(this.popTimer),this.popTimer=null,this.endPop()}willUpdate(e){super.willUpdate(e),this.progress!==null&&this.publicId!==this.loadedFor&&(this.loadedFor=this.publicId,this.loadTrack(this.publicId))}async loadTrack(e){let t=++this.loadToken;this.ready=!1,this.track=null;let n=setTimeout(()=>{t===this.loadToken&&(this.ready=!0)},At),[r,i,a]=await Promise.all([this.loadConfig().catch(()=>!1),this.loadOwnAccount(e),this.loadTrackModule().catch(e=>(console.warn(`ProfileProgression: reward track failed to load`,e),null))]);clearTimeout(n),t===this.loadToken&&(this.track=a!==null&&r!==!1&&a.trackHasRewards(r)?{config:r,...Y(i,e),model:a.rewardTrackModel}:null,this.ready=!0)}trackConfirmedLevel(e){let t=this.track?.rewardsFrom,n=this.confirmedLevel;return!t||t.prestige!==e.prestige?n:t.level<(n??e.level)?t.level:n}async loadOwnAccount(e){if(e===null)return!1;let t=await this.loadUserMe().catch(()=>!1);return t===!1||t.player.publicId!==e?t:(_(),this.loadUserMe().catch(()=>!1))}async claimAll(){let e=this.track,t=this.progress;if(this.claiming||e===null||t===null)return;let n=e.rewards;if(n===null)return;let r=new Set(e.model(t,e.config,n,this.trackConfirmedLevel(t)).claim?.ids??[]),i=n.filter(e=>r.has(e.id));if(i.length===0)return;let a=this.claimToken;this.claiming=!0;try{let t=await Pe(i,{claim:this.claim,stopped:()=>a!==this.claimToken}),r=t.currency,o=new Set(t.claimedIds),s=new Map(t.held.map(e=>[e.id,e.held])),c=t.creditedIds.length<t.claimedIds.length||s.size>0;if(a!==this.claimToken){this.loadedFor=void 0;return}if(o.size>0||s.size>0){let t=n.filter(e=>!o.has(e.id)).map(e=>{let t=s.get(e.id);return t===void 0?e:{...e,held:t}});if(c){let e=await this.loadUserMe().catch(()=>!1);e!==!1&&(t=e.player.rewards??[],r=e.player.currency??r)}this.track===e&&(this.track={...e,rewards:t}),this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:{currency:r,rewards:t},bubbles:!0,composed:!0}))}t.failed&&await this.alert(f(`account_modal.claim_failed`))}finally{a===this.claimToken&&(this.claiming=!1)}}updated(e){super.updated(e),!(!this.ready||this.progress===null)&&(this.popDecided||(this.popDecided=!0,this.startPop()),this.popping&&this.orderPop())}startPop(){let e=this.popKey;if(e!==void 0){if(e===Mt)return;Mt=e}ke()||(this.popping=!0,this.classList.add(`pp-anim`),this.popTimer=setTimeout(()=>{this.popTimer=null,this.endPop()},1240))}endPop(){this.popping=!1,this.classList.remove(`pp-anim`)}async orderPop(){let e=this.querySelector(`reward-track`);if(e!==null&&await e.updateComplete,!this.popping)return;let t=[...this.querySelectorAll(`[data-pp]`)];t.forEach((e,t)=>e.style.setProperty(`--i`,String(Math.min(t,12))));let n=this.querySelector(`[data-next-milestone]`),r=n===null?0:Math.min(t.indexOf(n),12);this.style.setProperty(`--ring-delay`,`${Math.max(0,r)*55+kt}ms`)}render(){let e=this.progress;if(e===null||!this.ready)return u;let t=this.track;return p`
      ${t===null?u:p`<reward-track
            .progress=${e}
            .config=${t.config}
            .rewards=${t.rewards}
            .confirmedLevel=${this.trackConfirmedLevel(e)}
            .provisional=${this.provisional}
            .claiming=${this.claiming}
            .describeCosmetic=${this.describeCosmetic}
            @claim-all=${()=>void this.claimAll()}
          ></reward-track>`}
      ${this.renderHistory(e)}
      ${this.renderMilestones(this.confirmedLevel===null?e:{...e,level:this.confirmedLevel})}
    `}renderHistory(e){let t=Dt(e);return p`
      <section class=${K} data-prestige-history>
        <h3 class="mb-3.5 ${q}">
          ${f(`player_profile.prestige_history`)}
        </h3>
        ${t.length===0?p`<p class="text-sm text-white/50" data-no-prestige data-pp>
              ${f(`player_profile.no_prestige`)}
            </p>`:p`<div class="flex flex-wrap gap-3">
              ${t.map(e=>this.renderPrestigeTile(e))}
            </div>`}
      </section>
    `}renderPrestigeTile(e){let t=e.at===null?null:Et(e.at);return p`
      <div
        class="flex flex-[1_1_150px] items-center gap-2.5 rounded-[10px] border border-white/[0.06] bg-black/20 px-3.5 py-2.5"
        data-prestige-tile=${e.rank}
        data-pp
      >
        <level-badge
          .level=${1}
          .prestige=${e.rank}
          .size=${36}
        ></level-badge>
        <div class="min-w-0">
          <div class="font-bold text-white">
            ${f(`progression.prestige`,{prestige:e.rank})}
          </div>
          ${t===null?u:p`<div class="text-xs text-white/50" data-date>${t}</div>`}
        </div>
      </div>
    `}renderMilestones(e){return p`
      <section class=${K} data-milestones>
        <h3 class="mb-3.5 ${q}">
          ${f(`player_profile.milestones`)}
        </h3>
        ${Ot(e).map(t=>this.renderRun(t,e.legend))}
      </section>
    `}runLabel(e,t){return e.current&&t?f(`player_profile.legend_run`,{prestige:e.prestige}):e.current?e.prestige===0?f(`player_profile.current_run`):f(`player_profile.current_run_prestige`,{prestige:e.prestige}):e.prestige===0?f(`player_profile.first_run`):f(`progression.prestige`,{prestige:e.prestige})}renderRun(e,t){let n=e.current?e.slots.find(e=>!e.reached):void 0;return p`
      <div
        class="mb-4 last:mb-0"
        data-milestone-run=${e.prestige}
        ?data-current-run=${e.current}
      >
        <h4 class="mb-2.5 mt-1 text-sm font-bold text-white" data-pp>
          ${this.runLabel(e,t)}
        </h4>
        <div class="flex flex-wrap gap-2.5">
          ${e.slots.map(r=>this.renderSlot(e.prestige,r,e.current&&t&&r.level===100,r===n))}
        </div>
      </div>
    `}renderSlot(e,t,n,r){let i=t.at===null?null:Et(t.at),a=t.reached?i:f(`player_profile.milestone_not_yet`);return p`
      <div
        class="flex w-[78px] flex-col items-center gap-1.5 ${t.reached?``:`opacity-30`}"
        data-milestone=${t.level}
        ?data-reached=${t.reached}
        ?data-next-milestone=${r}
        data-pp
      >
        <level-badge
          .level=${t.level}
          .prestige=${e}
          .legend=${n}
          .size=${40}
        ></level-badge>
        ${a===null?u:p`<div
              class="text-center text-[11px] text-white/55"
              data-caption
            >
              ${a}
            </div>`}
      </div>
    `}};b([y({attribute:!1})],X.prototype,`progress`,void 0),b([y({attribute:!1})],X.prototype,`publicId`,void 0),b([y({attribute:!1})],X.prototype,`confirmedLevel`,void 0),b([y({type:Boolean})],X.prototype,`provisional`,void 0),b([y({attribute:!1})],X.prototype,`popKey`,void 0),b([n()],X.prototype,`ready`,void 0),b([n()],X.prototype,`track`,void 0),b([n()],X.prototype,`claiming`,void 0),X=b([d(`profile-progression`)],X);var Nt=`profile-progression-styles`;function Pt(){if(document.getElementById(Nt))return;let e=document.createElement(`style`);e.id=Nt,e.textContent=Ft,document.head.appendChild(e)}var Ft=`
profile-progression.pp-anim [data-pp] {
  animation: pp-pop ${kt}ms cubic-bezier(0.2, 0.9, 0.3, 1.3) both;
  animation-delay: calc(var(--i, 0) * 55ms);
}
@keyframes pp-pop {
  from { opacity: 0; transform: translateY(8px) scale(0.8); }
}
profile-progression [data-next-milestone] { opacity: 0.6; }
profile-progression [data-next-milestone] level-badge {
  border-radius: 9999px;
  outline: 2px dashed rgba(250, 204, 21, 0.6);
  outline-offset: 3px;
  animation: pp-breathe 2.4s ease-in-out var(--ring-delay, 0ms) infinite;
}
@keyframes pp-breathe {
  0%, 100% { outline-color: rgba(250, 204, 21, 0.25); }
  50% { outline-color: rgba(250, 204, 21, 0.85); }
}
@media (prefers-reduced-motion: reduce) {
  profile-progression.pp-anim [data-pp],
  profile-progression [data-next-milestone] level-badge { animation: none; }
}
`;function It(e){return f(`clan_modal.role_${e}`)}var Z=class extends v{constructor(...e){super(...e),this.pending=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.style.display=`block`}onClick(){this.dispatchEvent(new CustomEvent(`clan-select`,{detail:{tag:this.clan.tag,source:this.source},bubbles:!0,composed:!0}))}renderBadge(){let e=`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0`;return this.clanRole?p`<span class="${e} ${this.clanRole===`leader`?`bg-amber-500/20 text-amber-400 border border-amber-500/30`:`bg-malibu-blue/15 text-aquarius border border-malibu-blue/30`}"
        >${It(this.clanRole)}</span
      >`:this.pending?p`<span
        class="${e} bg-amber-500/20 text-amber-400 border border-amber-500/30"
        >${f(`clan_modal.request_pending`)}</span
      >`:this.clan.isOpen?p`<span
        class="${e} bg-green-500/20 text-green-400 border border-green-500/30"
        >${f(`clan_modal.open`)}</span
      >`:p`<span
      class="${e} bg-red-500/20 text-red-400 border border-red-500/30"
      >${f(`clan_modal.invite_only`)}</span
    >`}render(){let e=this.clan;return p`
      <button
        @click=${()=>this.onClick()}
        class="w-full text-left bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 p-4 transition-all cursor-pointer group"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br ${e.isOpen?`from-malibu-blue/20 to-aquarius/20`:`from-amber-500/20 to-orange-500/20`} flex items-center justify-center border border-white/10 shrink-0"
          >
            <span class="text-white font-bold text-sm">${e.tag}</span>
          </div>
          <div class="flex-1 min-w-0">
            <span class="text-white font-bold truncate block"
              >${e.name}</span
            >
            <div
              class="flex items-center flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-white/40"
            >
              <span
                >${f(`clan_modal.member_count`,{count:e.memberCount??0})}</span
              >
              <!-- Balances ride along on the clan payload — no extra request.
                   Renders nothing when the API reported neither. -->
              <currency-display
                compact
                .hard=${e.hardBalance??null}
                .soft=${e.softBalance??null}
              ></currency-display>
            </div>
          </div>
          ${this.clan.boosted?p`<span
                data-boosted
                class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 bg-malibu-blue/15 text-aquarius border border-malibu-blue/40 shadow-malibu-blue-pill"
                >${f(`clan_modal.boosted`)}</span
              >`:``}
          ${this.renderBadge()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-white/20 group-hover:text-white/50 transition-colors shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    `}};b([y({type:Object})],Z.prototype,`clan`,void 0),b([y()],Z.prototype,`clanRole`,void 0),b([y({type:Boolean})],Z.prototype,`pending`,void 0),b([y()],Z.prototype,`source`,void 0),Z=b([d(`clan-card`)],Z);async function Q(e){try{let t=await te(e),n=t===!1?null:t;if(n===null){let t=await g();if(t===!1||t.player.publicId!==e)return null;n=t.player.progress??null}return n!==null&&ee(e,n),n}catch{return null}}var Lt=0,$=class extends ye{constructor(...e){super(...e),this.routerName=`profile`,this.publicId=null,this.username=null,this.statsTree=null,this.clans=[],this.displayClanTag=null,this.progress=null,this.loading=!1,this.openedLink=null,this.openedFrom=null,this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1,this.loadGeneration=0,this.wantsProgressionTab=!1,this.openCount=0,this.progressRead=0,this.handleProvisionalChanged=e=>{we(e).length>0&&this.rereadProgress(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),document.addEventListener(m,this.handleProvisionalChanged)}disconnectedCallback(){document.removeEventListener(m,this.handleProvisionalChanged),super.disconnectedCallback()}rereadProgress(){let e=this.publicId;if(e===null||this.progress===null||!this.isConnected||!this.isOpen()||!o(e))return;let t=this.loadGeneration,n=++this.progressRead;Q(e).then(r=>{t!==this.loadGeneration||n!==this.progressRead||r===null||this.publicId!==e||(this.progress=r)})}progressView(){return this.progress===null?null:ne(this.publicId,this.progress)}modalConfig(){return{maxWidth:`960px`,tabs:[{key:`stats`,label:f(`account_modal.tab_stats`)},{key:`games`,label:f(`account_modal.tab_games`)},{key:`clans`,label:f(`account_modal.tab_clans`)},...this.progress===null?[]:[{key:`progression`,label:f(`account_modal.tab_progression`)}]]}}renderHeaderSlot(){return ge({title:f(`player_profile.title`),titleContent:this.username?p`<span
            class="text-white text-xl lg:text-2xl font-bold tracking-wide break-words hyphens-auto min-w-0 inline-flex items-center gap-2"
          >
            ${Ee(this.username)}
            ${ae(this.username)?se(`w-5 h-5`):u}
          </span>`:void 0,onBack:()=>this.back(),ariaLabel:f(`common.back`),rightContent:this.publicId?p`
            <player-name
              class="shrink-0"
              .publicId=${this.publicId}
              .copyText=${C(this.publicId)}
            ></player-name>
          `:void 0})}renderBody(e){return p`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">${this.renderTab(e)}</div>
      </div>
    `}renderTab(e){switch(e){case`games`:return this.renderGames();case`clans`:return this.renderClans();case`progression`:return this.renderProgression();default:return this.renderProfile()}}renderClans(){return this.loading?this.renderLoadingSpinner(f(`player_profile.loading`)):this.profileLoaded()?this.clans.length===0?p`
        <div class="flex flex-col items-center justify-center p-12 text-center">
          <span class="text-4xl mb-4">🛡️</span>
          <p class="text-white/40 text-sm">
            ${f(`player_profile.no_clans`)}
          </p>
        </div>
      `:p`
      <div class="space-y-3">
        ${this.clans.map(e=>p`
            <clan-card
              .clan=${{tag:e.tag,name:e.name,description:``,isOpen:!1,memberCount:e.memberCount,softBalance:e.softBalance,hardBalance:e.hardBalance}}
              .clanRole=${e.role}
              @clan-select=${e=>this.openClan(e.detail.tag)}
            ></clan-card>
          `)}
      </div>
    `:this.renderNotFound()}openClan(e){let t=this.publicId;t!==null&&document.querySelector(`clan-modal`)?.openFromProfile(e,t,this.openedFrom)}returnFromClan(e,t){this.open({publicID:e,tab:`clans`}),this.openedFrom=t}renderGames(){let e=this.publicId;return e?p`
      <player-game-history-view
        .publicId=${e}
        .cachedState=${this.gameHistoryCache?.publicId===e?this.gameHistoryCache:null}
        @history-updated=${e=>{this.gameHistoryCache=e.detail}}
        @view-stats=${e=>this.openGameStats(e.detail.gameId)}
        @view-game=${e=>this.viewGame(e.detail.gameId)}
      ></player-game-history-view>
    `:p`
        <div class="flex flex-col items-center justify-center p-12 text-center">
          <span class="text-4xl mb-4">🎮</span>
          <p class="text-white/40 text-sm">
            ${f(`account_modal.no_games`)}
          </p>
        </div>
      `}renderProfile(){if(this.loading)return this.renderLoadingSpinner(f(`player_profile.loading`));let e=this.publicId;if(!this.profileLoaded()||e===null)return this.renderNotFound();let t=this.progressView();return p`
      ${t===null?u:p`<profile-card
            class="mb-4 block"
            .username=${this.username??this.publicId??``}
            .clanTag=${this.displayClanTag}
            .progress=${t.progress}
            .provisional=${t.provisional}
            .openKey=${`profile-${this.openCount}`}
          ></profile-card>`}
      <profile-share
        class="mb-[18px] block"
        .url=${C(e)}
        .name=${this.username??e}
      ></profile-share>
      <player-stats-tree-view
        .statsTree=${this.statsTree}
      ></player-stats-tree-view>
    `}renderProgression(){let e=this.progressView();return e===null?this.renderProfile():p`<profile-progression
      .progress=${e.progress}
      .confirmedLevel=${e.confirmedLevel}
      .provisional=${e.provisional}
      .publicId=${this.publicId}
      .popKey=${`profile-${this.openCount}`}
    ></profile-progression>`}profileLoaded(){return!!this.publicId&&!!this.statsTree}renderNotFound(){return p`
      <div
        class="mx-auto flex max-w-2xl flex-col items-center px-6 py-12 text-center"
        data-not-found
      >
        <div
          class="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="8" r="4" />
            <path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 3 .8" />
            <path d="M17 14.5a2.5 2.5 0 1 1 3.2 2.4c-.7.2-1.2.8-1.2 1.6" />
            <path d="M19 21h.01" />
          </svg>
        </div>
        <h2 class="text-xl font-bold text-white">
          ${f(`player_profile.not_found_title`)}
        </h2>
        <p class="mt-2 max-w-md text-sm text-white/60">
          ${f(`player_profile.not_found_body`)}
        </p>
        ${this.openedLink===null?u:p`<p
              class="mt-3 break-all font-mono text-xs text-white/35"
              data-opened-link
            >
              ${this.openedLink}
            </p>`}
        <!-- Side by side where there's room, stacked on a phone. -->
        <div
          class="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          data-not-found-actions
        >
          <o-button
            variant="primary"
            size="md"
            translationKey="player_profile.play"
            data-action="play"
            @click=${()=>this.goHome()}
          ></o-button>
          <o-button
            variant="secondary"
            size="md"
            translationKey="player_profile.view_leaderboard"
            data-action="leaderboard"
            @click=${()=>this.openLeaderboard()}
          ></o-button>
        </div>
      </div>
    `}goHome(){this.close()}openLeaderboard(){this.close(),document.querySelector(`leaderboard-modal`)?.open()}open(e){let t=this.isOpen(),n=this.publicId;super.open(e),t&&this.isOpen()&&this.publicId!==n&&ie.syncOpened(this.routerName,e)}onOpen(e){let t=typeof e?.publicID==`string`&&e.publicID.length>0?e.publicID:null;if(this.restoreGamesScrollAfterOpen&&t!==null&&t===this.publicId){this.restoreGamesScrollAfterOpen=!1,this.restoreGamesScroll();return}this.wantsProgressionTab=typeof e?.tab==`string`?e.tab===`progression`:this.activeTab===`progression`,(this.wantsProgressionTab||this.activeTab===`progression`)&&(this.activeTab=`stats`),this.openedFrom=null,this.openCount=++Lt,this.publicId=t,this.username=null,this.statsTree=null,this.clans=[],this.displayClanTag=null,this.progress=null,this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1,this.openedLink=t!==null&&ie.isPathRouted(`profile`)&&be(window.location.pathname)===t?`${window.location.host}${window.location.pathname}`:null,this.loading=t!==null,t!==null&&this.loadProfile(t)}async loadProfile(t){let n=++this.loadGeneration,r=()=>n===this.loadGeneration&&this.publicId===t,i=++this.progressRead;Q(t).then(e=>{if(!r()||i!==this.progressRead)return;this.progress=e;let t=this.wantsProgressionTab;this.wantsProgressionTab=!1,t&&e!==null&&this.activeTab===`stats`&&this.isOpen()&&this.setActiveTab(`progression`)});let a=await e(t);r()&&(this.loading=!1,this.statsTree=a===!1?null:a.stats,this.username=a===!1?null:a.username??null,this.clans=a===!1?[]:a.clans??[],this.displayClanTag=a===!1?null:a.displayClanTag??null)}onClose(){}openGameStats(e){this.gamesScrollTop=this.modalEl?.getScrollTop()??0,document.querySelector(`game-stats-modal`)?.openFromProfile(e,this.publicId??void 0)}viewGame(e){this.close();let t=encodeURIComponent(e),n=le(S.gamePath(e));history.pushState({join:e},``,n),window.dispatchEvent(new CustomEvent(`join-changed`,{detail:{gameId:t}}))}returnToGames(){this.restoreGamesScrollAfterOpen=!0,this.open({publicID:this.publicId??void 0,tab:`games`})}async restoreGamesScroll(){await this.updateComplete,await this.modalEl?.updateComplete,await this.querySelector(`player-game-history-view`)?.updateComplete,this.modalEl?.setScrollTop(this.gamesScrollTop)}openFromClan(e){this.open({publicID:e}),this.openedFrom=`clan`}openFromLeaderboard(e){this.open({publicID:e}),this.openedFrom=`leaderboard`}openFromAccount(e){this.open({publicID:e}),this.openedFrom=`account`}back(){let e=this.openedFrom;this.close(),e===`clan`?document.querySelector(`clan-modal`)?.returnFromPlayerProfile():e===`leaderboard`?document.querySelector(`leaderboard-modal`)?.open():e===`account`&&document.querySelector(`account-modal`)?.returnToFriends()}};b([n()],$.prototype,`publicId`,void 0),b([n()],$.prototype,`username`,void 0),b([n()],$.prototype,`statsTree`,void 0),b([n()],$.prototype,`clans`,void 0),b([n()],$.prototype,`displayClanTag`,void 0),b([n()],$.prototype,`progress`,void 0),b([n()],$.prototype,`loading`,void 0),b([n()],$.prototype,`openedLink`,void 0),$=b([d(`player-profile-modal`)],$);export{$ as PlayerProfileModal,wt as a,Tt as i,K as n,ut as o,C as playerProfileUrl,q as r,Q as t};