import{t as e}from"./vendor-DPAo4oW-.js";import{Bn as t,Cn as n,Di as r,Ei as i,Hn as a,Ht as o,In as s,Jn as c,Kt as l,Q as u,Ut as d,Vn as f,Vt as p,Wt as m,Xn as h,_r as g,br as _,dn as v,ei as y,fn as b,fr as ee,gr as x,i as S,j as C,jn as w,kn as T,ln as E,nr as D,nt as O,pi as k,qt as A,rt as j,tt as M,wn as N,wr as P,xn as F,yn as I,zn as L}from"./index-B4QD0Fte.js";import{n as R}from"./TerrainMapFileLoader-BquhaSVY.js";import"./CopyButton-ClHPskLX.js";import{a as z,c as B,d as V,i as H,n as U,o as W,r as G,t as K}from"./LobbySettingsSummary-C6zE3ifK.js";import{t as q}from"./InviteFriendsButton-B9oGbGgS.js";import{a as J}from"./GameConfigHelpers-BuUBuQs0.js";var Y=3e4;function X(e){return`/w${Math.floor(Math.random()*e)}`}var Z=class{constructor(e,t){this.onLobbiesUpdate=e,this.ws=null,this.wsReconnectTimeout=null,this.wsConnectionAttempts=0,this.wsAttemptCounted=!1,this.gaveUp=!1,this.workerPath=``,this.stopped=!0,this.generation=0,this.lastFull=null,this.updateAvailableFired=!1,this.reconnectDelay=t?.reconnectDelay??3e3,this.maxWsAttempts=t?.maxWsAttempts??3,this.onUpdateAvailable=t?.onUpdateAvailable,this.onGaveUp=t?.onGaveUp}async start(e){if(A(window.location.hostname)){this.stop(),this.onGaveUp?.();return}this.stopped=!1,this.generation++,this.wsConnectionAttempts=0,this.gaveUp=!1,this.disconnectWebSocket(),await this.discoverAndConnect(e?.refreshList)}async discoverAndConnect(e=!1){this.wsAttemptCounted=!1;let t=this.generation,n=await(e?d():p());if(t===this.generation){n===`outdated`&&this.fireUpdateAvailable();try{this.workerPath=X(x.numWorkers())}catch(e){if(!(e instanceof g))throw e;this.handleConnectError(e,!0);return}this.connectWebSocket()}}stop(){this.stopped=!0,this.generation++,this.lastFull=null,this.disconnectWebSocket()}connectWebSocket(){try{this.ws&&=(this.ws.close(),null),this.lastFull=null;let e=`${x.serverWsBase()}${this.workerPath}/lobbies?platform=${C()}`,t=new WebSocket(e);this.ws=t,t.binaryType=`arraybuffer`,this.wsAttemptCounted=!1;let n=e=>()=>{this.ws===t&&e()},r=null;t.addEventListener(`open`,n(()=>{r=Date.now(),this.handleOpen()})),t.addEventListener(`message`,e=>{this.ws===t&&this.handleMessage(e)}),t.addEventListener(`close`,e=>{this.ws===t&&this.handleClose(t.url,e,r)})}catch(e){this.handleConnectError(e)}}handleOpen(){console.log(`WebSocket connected: lobby updating`),this.wsReconnectTimeout!==null&&(clearTimeout(this.wsReconnectTimeout),this.wsReconnectTimeout=null)}handleMessage(e){try{let t=B(new Uint8Array(e.data));if(this.wsConnectionAttempts=0,this.gaveUp=!1,t.type===`full`){this.checkServerCommit(t.gitCommit),this.checkDeploymentActive(t.active),this.lastFull={serverTime:t.serverTime,games:t.games},this.onLobbiesUpdate(this.lastFull);return}if(this.lastFull===null)return;let n={...this.lastFull.games};for(let e of Object.keys(n)){let r=n[e];r&&(n[e]=r.map(e=>{let n=t.counts[e.gameID];return n===void 0||n===e.numClients?e:{...e,numClients:n}}))}this.lastFull={serverTime:t.serverTime,games:n},this.onLobbiesUpdate(this.lastFull)}catch(e){if(console.error(`Error parsing WebSocket message:`,e),this.ws&&this.ws.readyState===WebSocket.OPEN)try{this.ws.close()}catch(e){console.error(`Error closing WebSocket after parse failure:`,e)}}}fireUpdateAvailable(){this.updateAvailableFired||this.onUpdateAvailable===void 0||(this.updateAvailableFired=!0,this.onUpdateAvailable())}checkServerCommit(e){if(this.updateAvailableFired||this.onUpdateAvailable===void 0||e===void 0)return;let t=x.gitCommit();t===`DEV`||e===t||this.fireUpdateAvailable()}checkDeploymentActive(e){this.updateAvailableFired||this.onUpdateAvailable===void 0||e===!1&&this.fireUpdateAvailable()}handleClose(e,t,n){if(this.stopped)return;this.wsAttemptCounted||(this.wsAttemptCounted=!0,this.wsConnectionAttempts++);let r=`Lobby socket ${W(e,t,n)}; attempt ${this.wsConnectionAttempts}/${this.maxWsAttempts}, reconnecting`;t.code===V.Normal?console.log(r):console.warn(r),this.wsConnectionAttempts>=this.maxWsAttempts&&(this.gaveUp||console.warn(`Max WebSocket attempts reached`),this.giveUp()),this.scheduleReconnect()}giveUp(){let e=!this.gaveUp;return this.gaveUp=!0,e&&this.onGaveUp?.(),this.promptIfOutdated(),e}async promptIfOutdated(){if(this.updateAvailableFired||this.onUpdateAvailable===void 0)return;let e=this.generation,t=await p();e===this.generation&&m(t)&&this.fireUpdateAvailable()}handleConnectError(e,t=!1){console.warn(`Error connecting WebSocket:`,e),this.wsAttemptCounted||(this.wsAttemptCounted=!0,this.wsConnectionAttempts++),this.wsConnectionAttempts>=this.maxWsAttempts&&this.giveUp()&&E(s(`error_modal.connection_error`)),this.scheduleReconnect(t)}scheduleReconnect(e=!1){this.wsReconnectTimeout===null&&(this.wsReconnectTimeout=window.setTimeout(()=>{if(this.wsReconnectTimeout=null,e||this.gaveUp){this.discoverAndConnect();return}this.connectWebSocket()},this.nextReconnectDelay()))}nextReconnectDelay(){return this.gaveUp?Y*(.5+Math.random()):this.reconnectDelay}disconnectWebSocket(){this.ws&&=(this.ws.close(),null),this.wsReconnectTimeout!==null&&(clearTimeout(this.wsReconnectTimeout),this.wsReconnectTimeout=null)}},Q=e(),te=class{constructor(e,t){this.host=e,this.isWaitingForGame=t,this.armed=!1,this.sound=null,this.userSettings=new D,this.toggle=()=>{if(this.armed){this.armed=!1,this.host.requestUpdate();return}this.armed=!0,this.host.requestUpdate(),window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:s(`public_lobby.notify_armed`),duration:3e3,color:`green`}})),typeof Notification<`u`&&Notification.permission==="default"&&Notification.requestPermission(),this.loadSound()},this.handleGameStarting=()=>{if(!(!this.armed||!this.isWaitingForGame())){try{this.loadSound().play()}catch(e){console.warn(`Failed to play game-start alert sound`,e)}if(!(typeof Notification>`u`||Notification.permission!==`granted`))try{let e=new Notification(s(`public_lobby.notify_started`));e.onclick=()=>{window.focus(),e.close()}}catch(e){console.warn(`Failed to show game-start notification`,e)}}},e.addController(this)}hostConnected(){document.addEventListener(`game-starting`,this.handleGameStarting)}hostDisconnected(){document.removeEventListener(`game-starting`,this.handleGameStarting)}renderBell(){let e=s(this.armed?`public_lobby.notify_on`:`public_lobby.notify_off`);return c`<button
      type="button"
      class="inline-flex ml-auto p-1 rounded-lg transition-colors ${this.armed?`text-amber-300 hover:text-amber-200`:`text-white/40 hover:text-white`}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.armed}
      @click=${this.toggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill=${this.armed?`currentColor`:`none`}
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    </button>`}reset(){this.armed=this.userSettings.lobbyStartAlerts(),this.armed&&this.loadSound(),this.host.requestUpdate()}loadSound(){return this.sound??=new Q.Howl({src:[y(`sounds/effects/game-start-alert.mp3`)]}),this.sound}},$=class extends j{constructor(...e){super(...e),this.eventBus=null,this.players=[],this.playerCount=0,this.gameConfig=null,this.currentLobbyId=``,this.currentClientID=``,this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.isConnecting=!0,this.lobbyCreatorClientID=null,this.hostedLobbies=[],this.hostedLobbiesLoaded=!1,this.hostedServerTimeOffset=0,this.gameStartAlert=new te(this,()=>this.currentLobbyId!==``),this.leaveLobbyOnClose=!0,this.countdownTimerId=null,this.handledJoinTimeout=!1,this.hostedLobbySocket=new Z(e=>{this.hostedServerTimeOffset=b(e.serverTime),this.hostedLobbies=e.games?.hosted??[],this.hostedLobbiesLoaded=!0}),this.handleLobbyInfo=e=>{let t=e.lobby;this.currentClientID=e.myClientID,this.isConnecting&&t.clients&&(this.isConnecting=!1),this.updateFromLobby({...t,startsAt:t.startsAt??void 0})}}isPrivateLobby(){return this.gameConfig?.gameType===r.Private}get isSpectating(){return this.players.find(e=>e.clientID===this.currentClientID)?.spectator===!0}setSpectating(e){this.eventBus?.emit(new u(e))}renderHeaderSlot(){if(!this.currentLobbyId)return O({title:s(`private_lobby.title`),onBack:()=>this.closeAndLeave(),ariaLabel:s(`common.close`)});let e=this.gameConfig?.gameType===r.Public&&this.gameConfig.gameMode!==i.Team,t=this.gameConfig!==null&&!e,n=t?c`<copy-button .lobbyId=${this.currentLobbyId}></copy-button>`:void 0,a=t?q():void 0;return O({titleContent:c`<span class="${M}"
          >${s(`public_lobby.title`)}</span
        >
        ${this.gameStartAlert.renderBell()}`,onBack:()=>this.closeAndLeave(),ariaLabel:s(`common.close`),rightContent:a?c`<div class="flex items-center gap-2">${n}${a}</div>`:n})}renderSpectateToggle(){if(this.isConnecting)return c``;let e=this.isSpectating,t=e=>`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest transition ${e?`bg-white text-black`:`text-white/60 hover:text-white`}`;return c`
      <div class="flex items-center gap-1 rounded-xl bg-white/5 p-1">
        <button
          class=${t(!e)}
          ?disabled=${!e}
          @click=${()=>this.setSpectating(!1)}
        >
          ${s(`private_lobby.play`)}
        </button>
        <button
          class=${t(e)}
          ?disabled=${e}
          @click=${()=>this.setSpectating(!0)}
        >
          ${s(`private_lobby.spectate`)}
        </button>
      </div>
    `}renderBody(){if(!this.currentLobbyId)return this.renderJoinForm();let e=this.lobbyStartAt===null?null:n(this.lobbyStartAt,this.serverTimeOffset),t=e===null?this.isPrivateLobby()?s(`private_lobby.joined_waiting`):s(`public_lobby.waiting_for_players`):e>0?s(`public_lobby.starting_in`,{time:w(e)}):s(`public_lobby.started`),a=this.gameConfig?.maxPlayers??0,o=this.players?.filter(e=>!e.spectator).length??0,l=this.isPrivateLobby()?this.lobbyCreatorClientID??``:``;return c`
      <div class="flex flex-col h-full">
        <div class="flex-1 custom-scrollbar p-6 space-y-4 mr-1">
          ${this.isConnecting?c`
                <div
                  class="min-h-[240px] flex flex-col items-center justify-center gap-4"
                >
                  <div
                    class="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"
                  ></div>
                  <p class="text-center text-white/80 text-sm">
                    ${s(`public_lobby.connecting`)}
                  </p>
                </div>
              `:c`
                ${this.gameConfig?this.renderGameConfig():c``}
                ${this.players.length>0?c`
                      <lobby-player-view
                        class="mt-6"
                        .gameMode=${this.gameConfig?.gameMode??i.FFA}
                        .clients=${this.players}
                        .lobbyCreatorClientID=${l}
                        .currentClientID=${this.currentClientID}
                        .anonymizeNames=${this.gameConfig?.anonymizeNames??!1}
                        .teamCount=${this.gameConfig?.playerTeams??2}
                        .isPublicGame=${this.gameConfig?.gameType===r.Public}
                        .nationCount=${J(this.gameConfig?.nations??`default`,this.nationCount)}
                      ></lobby-player-view>
                    `:``}
              `}
        </div>

        ${c`
          <div
            class="p-6 lg:p-6 border-t border-white/10 bg-black/60 backdrop-blur-md shrink-0 sticky bottom-0 z-10"
          >
            <div
              class="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between gap-3"
            >
              <div class="flex flex-col">
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-white/40"
                  >${s(`public_lobby.status`)}</span
                >
                <span class="text-sm font-bold text-white">${t}</span>
              </div>
              ${this.renderSpectateToggle()}
              ${a>0?c`
                    <div
                      class="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest"
                    >
                      <span>${o}/${a}</span>
                      <svg
                        class="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.972 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                        ></path>
                      </svg>
                    </div>
                  `:c``}
            </div>
          </div>
        `}
      </div>
    `}renderJoinForm(){return c`
      <div class="custom-scrollbar p-6 space-y-4 mr-1">
        <form @submit=${this.joinLobbyFromInput}>
          <div class="flex flex-col gap-3">
            <div class="flex gap-2">
              <input
                type="text"
                id="lobbyIdInput"
                placeholder=${s(`private_lobby.enter_id`)}
                @keyup=${this.handleChange}
                class="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-mono text-sm tracking-wider"
              />
              <o-button
                variant="ghost"
                size="md"
                iconPosition="only"
                .title=${s(`common.paste`)}
                .icon=${c`<svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 32 32"
                  height="18px"
                  width="18px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 15 3 C 13.742188 3 12.847656 3.890625 12.40625 5 L 5 5 L 5 28 L 13 28 L 13 30 L 27 30 L 27 14 L 25 14 L 25 5 L 17.59375 5 C 17.152344 3.890625 16.257813 3 15 3 Z M 15 5 C 15.554688 5 16 5.445313 16 6 L 16 7 L 19 7 L 19 9 L 11 9 L 11 7 L 14 7 L 14 6 C 14 5.445313 14.445313 5 15 5 Z M 7 7 L 9 7 L 9 11 L 21 11 L 21 7 L 23 7 L 23 14 L 13 14 L 13 26 L 7 26 Z M 15 16 L 25 16 L 25 28 L 15 28 Z"
                  ></path>
                </svg>`}
                @click=${this.pasteFromClipboard}
              ></o-button>
            </div>
            <div class="flex gap-2">
              <div class="flex-[2]">
                <o-button
                  title=${s(`private_lobby.join_lobby`)}
                  width="block"
                  submit
                ></o-button>
              </div>
              <div class="flex-1">
                <o-button
                  variant="ghost"
                  title=${s(`private_lobby.spectate`)}
                  width="block"
                  @click=${this.spectateLobbyFromInput}
                ></o-button>
              </div>
            </div>
          </div>
        </form>
        ${this.renderHostedLobbies()}
      </div>
    `}renderHostedLobbies(){let e;return e=this.hostedLobbiesLoaded?this.hostedLobbies.length===0?c`<p class="text-sm text-white/50">
        ${s(`private_lobby.no_open_lobbies`)}
      </p>`:c`<div class="flex flex-col gap-2">
        ${this.hostedLobbies.map(e=>this.renderHostedLobbyRow(e))}
      </div>`:c`<div class="flex justify-center py-3">
        <div
          class="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"
        ></div>
      </div>`,c`
      <div class="pt-2">
        <div
          class="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2"
        >
          ${s(`private_lobby.open_lobbies`)}
        </div>
        ${e}
      </div>
    `}renderHostedLobbyRow(e){let t=e.gameConfig,r=t?F(t.gameMap)??t.gameMap:``,i=t?y(`maps/${encodeURIComponent(T(t.gameMap))}/thumbnail.webp`):``,a=t?z(t,null):[],o=t?.disabledUnits?.length??0,l=e.featured?e.label:void 0,u=l===void 0?`text-white`:{gold:`text-amber-300`,blue:`text-sky-300`,green:`text-emerald-300`,red:`text-rose-300`}[e.accent??`gold`],d=t?I(t):``,f=l?[r,d].filter(Boolean).join(` · `):d,p=e.startsAt??e.autoStartAt,m=p===void 0?void 0:n(p,this.hostedServerTimeOffset);return c`
      <button
        type="button"
        @click=${()=>this.joinHostedLobby(e)}
        class="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all flex items-center gap-3 text-left"
      >
        <img
          src=${i}
          alt=${r}
          class="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
          @error=${e=>{e.target.style.display=`none`}}
        />
        <div class="flex flex-col flex-1 min-w-0">
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-sm font-bold truncate ${u}"
              >${l??r}</span
            >
            ${e.custom?c`<span
                  class="px-1.5 py-0.5 bg-orange-500 text-white text-[10px] rounded font-bold uppercase tracking-wider shrink-0"
                  >${s(`public_lobby.custom`)}</span
                >`:``}
          </div>
          <span class="text-xs text-white/60">${f}</span>
          ${a.length>0||o>0?c`<div class="flex flex-wrap gap-1 mt-1">
                ${a.map(e=>c`<span
                    class="px-1.5 py-0.5 bg-white/10 text-white/70 text-[10px] rounded font-bold"
                    >${H(e)}</span
                  >`)}
                ${o>0?c`<span
                      class="px-1.5 py-0.5 bg-red-500/20 text-red-200 text-[10px] rounded font-bold border border-red-500/30"
                      >${s(`private_lobby.disabled_units`)}:
                      ${o}</span
                    >`:``}
              </div>`:``}
        </div>
        <div class="flex flex-col items-end gap-1 shrink-0">
          <div class="flex items-center gap-1 text-white/80 text-xs font-bold">
            ${e.numClients}${t?.maxPlayers?`/${t.maxPlayers}`:``}
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.972 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              ></path>
            </svg>
          </div>
          ${m===void 0?``:c`<span
                class="text-amber-300 text-xs font-bold tabular-nums"
                title=${s(`host_modal.auto_start_timer`)}
                >${m>0?w(m):s(`public_lobby.starting_game`)}</span
              >`}
        </div>
      </button>
    `}async joinHostedLobby(e){let t=e.gameID;this.startTrackingLobby(t,e);try{await this.checkActiveLobby(t)||(this.resetTrackingState(),this.showMessage(s(`private_lobby.not_found`),`red`))}catch(e){console.error(`Error joining hosted lobby:`,e),this.resetTrackingState(),this.showMessage(s(`private_lobby.error`),`red`)}}onOpen(e){this.leaveLobbyOnClose=!0,this.hostedLobbiesLoaded=!1,this.hostedLobbySocket.start();let t=typeof e?.lobbyId==`string`?e.lobbyId:``,n=e?.lobbyInfo;t&&(this.startTrackingLobby(t,n),n||this.handleUrlJoin(t,e?.spectate===!0))}async handleUrlJoin(e,t=!1){try{if(await this.checkActiveLobby(e,t))return;switch(await this.checkArchivedGame(e)){case`success`:return;case`redirected`:return;case`not_found`:this.resetTrackingState(),this.showMessage(s(`private_lobby.not_found`),`red`);return;case`version_mismatch`:this.resetTrackingState(),this.showMessage(s(`private_lobby.version_mismatch`),`red`);return;case`error`:this.resetTrackingState(),this.showMessage(s(`private_lobby.error`),`red`);return}}catch(e){console.warn(`Error checking lobby from URL:`,e),this.resetTrackingState(),this.showMessage(s(`private_lobby.error`),`red`)}}startTrackingLobby(e,t){this.currentLobbyId=e,this.currentClientID=``,this.gameConfig=null,this.players=[],this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.lobbyCreatorClientID=null,this.gameStartAlert.reset(),this.isConnecting=!0,this.handledJoinTimeout=!1,this.startLobbyUpdates(),t&&(this.updateFromLobby(t),`clients`in t&&t.clients&&(this.isConnecting=!1))}resetTrackingState(){this.stopLobbyUpdates(),this.currentLobbyId=``,this.currentClientID=``,this.isConnecting=!1}leaveLobby(){this.currentLobbyId&&this.dispatchEvent(new CustomEvent(`leave-lobby`,{detail:{lobby:this.currentLobbyId},bubbles:!0,composed:!0}))}confirmBeforeClose(){return this.currentLobbyId?this.confirmClose(s(`host_modal.leave_confirmation`)):!0}onClose(){this.hostedLobbySocket.stop(),this.hostedLobbies=[],this.hostedLobbiesLoaded=!1,this.clearCountdownTimer(),this.stopLobbyUpdates(),this.leaveLobbyOnClose&&(this.leaveLobby(),this.updateHistory(`/`)),this.lobbyIdInput&&(this.lobbyIdInput.value=``),this.gameConfig=null,this.players=[],this.currentLobbyId=``,this.currentClientID=``,this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.lobbyCreatorClientID=null,this.gameStartAlert.reset(),this.isConnecting=!0}disconnectedCallback(){this.hostedLobbySocket.stop(),this.clearCountdownTimer(),this.stopLobbyUpdates(),super.disconnectedCallback()}closeAndLeave(){this.leaveLobby();try{this.updateHistory(`/`)}catch(e){console.warn(`Failed to restore URL on leave:`,e)}this.leaveLobbyOnClose=!1,this.close()}disarmLeaveOnClose(){this.leaveLobbyOnClose=!1}closeWithoutLeaving(){this.disarmLeaveOnClose(),this.close()}updateHistory(e){h.isOnGamePortal()||history.replaceState(null,``,e)}renderGameConfig(){if(!this.gameConfig)return c``;let e=this.gameConfig,t=F(e.gameMap),n=T(e.gameMap),r=y(`maps/${encodeURIComponent(n)}/thumbnail.webp`),i=I(e),a=z(e,this.nationCount).map(e=>c`<span class="${K}"
          >${H(e)}</span
        >`);return c`
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
        <span class="text-lg font-bold text-white">${t}</span>
        <span class="text-sm text-white/60">${i}</span>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 mb-6">
        <div
          data-test-map-preview
          class="flex items-center justify-center w-full ${a.length>0?`sm:w-3/5`:``} shrink-0 rounded-lg border border-white/10 bg-black/20 overflow-hidden"
        >
          <img
            src=${r}
            alt=${t??e.gameMap}
            class="block w-full max-h-60 object-contain"
            @error=${e=>{let t=e.target.parentElement;t&&(t.style.display=`none`)}}
          />
        </div>
        ${a.length>0?c`<div
              data-test-lobby-settings
              class="flex flex-wrap content-start gap-1 min-w-0 flex-1 uppercase"
            >
              ${a}
            </div>`:c``}
      </div>
      ${U(e,`mt-4 mb-6`)} ${G(e,`mt-4 mb-6`)}
    `}updateFromLobby(e){if(this.players=`clients`in e?e.clients??[]:[],`serverTime`in e&&typeof e.serverTime==`number`&&(this.serverTimeOffset=b(e.serverTime)),this.lobbyStartAt=e.startsAt??null,this.syncCountdownTimer(),e.gameConfig){let t=this.gameConfig?.gameMap!==e.gameConfig.gameMap;this.gameConfig=e.gameConfig,t&&this.loadNationCount()}this.lobbyCreatorClientID=`lobbyCreatorClientID`in e?e.lobbyCreatorClientID??null:null}startLobbyUpdates(){if(this.stopLobbyUpdates(),!this.eventBus){console.warn(`JoinLobbyModal: eventBus not set, cannot subscribe to lobby updates`);return}this.eventBus.on(P,this.handleLobbyInfo)}stopLobbyUpdates(){this.eventBus?.off(P,this.handleLobbyInfo)}syncCountdownTimer(){if(this.lobbyStartAt===null){this.clearCountdownTimer();return}this.countdownTimerId===null&&(this.countdownTimerId=window.setInterval(()=>{this.checkForJoinTimeout(),this.requestUpdate()},1e3))}clearCountdownTimer(){this.countdownTimerId!==null&&(clearInterval(this.countdownTimerId),this.countdownTimerId=null)}checkForJoinTimeout(){this.handledJoinTimeout||!this.isConnecting||this.lobbyStartAt===null||!this.isModalOpen||N(this.serverTimeOffset)<this.lobbyStartAt||(this.handledJoinTimeout=!0,window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:s(`public_lobby.join_timeout`),color:`red`,duration:3500}})),this.closeAndLeave())}async loadNationCount(){if(!this.gameConfig){this.nationCount=0;return}let e=this.gameConfig.gameMap;try{let t=await R.getMapData(e).manifest();this.gameConfig?.gameMap===e&&(this.nationCount=t.nations.length)}catch(t){console.warn(`Failed to load nation count`,t),this.gameConfig?.gameMap===e&&(this.nationCount=0)}}isValidLobbyId(e){return k.test(e)}normalizeLobbyId(e){let t=e.trim();if(!t)return null;let n=this.extractLobbyIdFromUrl(t).trim();return this.isValidLobbyId(n)?n:null}sanitizeForLog(e){return e.replace(/[\r\n]/g,``)}extractLobbyIdFromUrl(e){if(!e.startsWith(`http`))return e;try{let t=new URL(e).pathname.match(/game\/([^/]+)/)?.[1];return t&&k.test(t)?t:e}catch(t){return console.warn(`Failed to parse lobby URL`,t),e}}setLobbyId(e){this.lobbyIdInput&&(this.lobbyIdInput.value=this.extractLobbyIdFromUrl(e))}handleChange(e){let t=e.target.value.trim();this.setLobbyId(t)}async pasteFromClipboard(){try{let e=await navigator.clipboard.readText();this.setLobbyId(e)}catch(e){console.warn(`Failed to read clipboard contents: `,e)}}joinLobbyFromInput(e){return e.preventDefault(),this.enterLobbyFromInput(!1)}spectateLobbyFromInput(){return this.enterLobbyFromInput(!0)}async enterLobbyFromInput(e){let t=this.normalizeLobbyId(this.lobbyIdInput.value);if(!t){this.showMessage(s(`private_lobby.not_found`),`red`);return}this.lobbyIdInput.value=t,console.log(`Joining lobby with ID: ${this.sanitizeForLog(t)}`),this.startTrackingLobby(t);try{if(await this.checkActiveLobby(t,e))return;switch(await this.checkArchivedGame(t)){case`success`:return;case`redirected`:return;case`not_found`:this.resetTrackingState(),this.showMessage(s(`private_lobby.not_found`),`red`);return;case`version_mismatch`:this.resetTrackingState(),this.showMessage(s(`private_lobby.version_mismatch`),`red`);return;case`error`:this.resetTrackingState(),this.showMessage(s(`private_lobby.error`),`red`);return}}catch(e){console.warn(`Error checking lobby existence:`,e),this.resetTrackingState(),this.showMessage(s(`private_lobby.error`),`red`)}}showMessage(e,t=`green`){window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:e,duration:3e3,color:t}}))}async checkActiveLobby(e,t=!1){if(await p(),o(e,t))return!0;let n=`${x.gameHttpBase(e)}/${x.gameWorkerPath(e)}/api/game/${e}/exists`,r=await fetch(n,{method:`GET`,headers:{"Content-Type":`application/json`}});if(!r.ok||!(r.headers.get(`content-type`)??``).includes(`application/json`))return!1;let i;try{i=await r.json()}catch(e){return console.warn(`Failed to parse active lobby response`,e),!1}return i.exists?(this.showMessage(s(t?`private_lobby.spectating`:`private_lobby.joined_waiting`)),this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e,source:`private`,spectator:t},bubbles:!0,composed:!0})),!0):!1}async checkArchivedGame(e){let t=await fetch(`${ee()}/game/${e}`,{method:`GET`,headers:{"Content-Type":`application/json`}});if(t.status===404)return`not_found`;if(t.status!==200)return`error`;let n=await t.json(),r=_.safeParse(n);if(!r.success)return`version_mismatch`;let i=x.gitCommit();if(i!==`DEV`&&r.data.gitCommit!==i){let t=this.sanitizeForLog(e);return console.warn(`Git commit hash mismatch for game ${t}`,n.details),await this.redirectToVersionedShell(e)?`redirected`:`version_mismatch`}return this.leaveLobbyOnClose=!1,S(e,r.data)?(this.close(),`success`):(this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e,gameRecord:r.data,source:`private`},bubbles:!0,composed:!0})),`success`)}async redirectToVersionedShell(e){let t=await l(x.jwtAudience(),e,window.location.hostname);return t===null?!1:(window.location.href=t,!0)}};v([L(`#lobbyIdInput`)],$.prototype,`lobbyIdInput`,void 0),v([f({attribute:!1})],$.prototype,`eventBus`,void 0),v([t()],$.prototype,`players`,void 0),v([t()],$.prototype,`playerCount`,void 0),v([t()],$.prototype,`gameConfig`,void 0),v([t()],$.prototype,`currentLobbyId`,void 0),v([t()],$.prototype,`currentClientID`,void 0),v([t()],$.prototype,`nationCount`,void 0),v([t()],$.prototype,`lobbyStartAt`,void 0),v([t()],$.prototype,`serverTimeOffset`,void 0),v([t()],$.prototype,`isConnecting`,void 0),v([t()],$.prototype,`lobbyCreatorClientID`,void 0),v([t()],$.prototype,`hostedLobbies`,void 0),v([t()],$.prototype,`hostedLobbiesLoaded`,void 0),$=v([a(`join-lobby-modal`)],$);export{$ as JoinLobbyModal};