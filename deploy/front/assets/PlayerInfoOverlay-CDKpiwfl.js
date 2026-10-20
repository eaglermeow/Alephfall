const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./WebGLGate-C64_9ivI.js","./index-B4QD0Fte.js","./vendor-DPAo4oW-.js","./rolldown-runtime-BpQH8Ho1.js","./index-C1j_oD-o.css"])))=>i.map(i=>d[i]);
import{E as e}from"./vendor-DPAo4oW-.js";import{$ as t,$n as n,Bi as r,Bn as i,Br as a,Ci as o,Di as s,Dn as c,Ei as l,En as u,Er as d,Gn as f,Gr as p,Hi as m,Hn as h,Hr as g,Ii as _,In as v,Ir as y,Jn as b,Jr as x,Kr as S,Ln as C,Lr as w,Ni as T,On as E,Pr as D,Q as O,Qr as k,Qt as ee,Sn as te,Ti as ne,Tn as re,Un as ie,Ur as ae,Vn as A,Wn as j,Xi as oe,Xn as se,Xt as ce,Z as le,Zt as ue,_n as de,_r as fe,ct as pe,di as me,dn as M,ei as N,et as P,fr as he,gn as F,gr as I,j as ge,ji as _e,jn as ve,ki as L,mi as ye,nr as be,qr as xe,sr as Se,tr as Ce,un as we,vi as Te,xi as Ee,zn as De}from"./index-B4QD0Fte.js";import{i as Oe,n as ke,r as Ae}from"./TerrainMapFileLoader-BquhaSVY.js";import{n as je,t as Me}from"./Format-Dhp90E0J.js";import{n as Ne}from"./unsafe-html-DPW-EDyf.js";import{t as Pe}from"./colord-BshiezEt.js";import{a as Fe,d as Ie,f as Le,i as Re,l as ze,m as Be,n as Ve,o as He,p as Ue,r as We,s as Ge,t as Ke,u as qe}from"./LobbySettingsSummary-C6zE3ifK.js";import{t as Je}from"./render-settings-CCTqZ9rI.js";import{t as Ye}from"./Sounds-BfVQXZvu.js";import{a as Xe,n as Ze}from"./ThemeProvider-BhioRYho.js";import{t as Qe}from"./repeat-aBuyf76T.js";var R=function(e){return e[e.Tile=0]=`Tile`,e[e.Unit=1]=`Unit`,e[e.Player=2]=`Player`,e[e.DisplayEvent=3]=`DisplayEvent`,e[e.DisplayChatEvent=4]=`DisplayChatEvent`,e[e.AllianceRequest=5]=`AllianceRequest`,e[e.AllianceRequestReply=6]=`AllianceRequestReply`,e[e.BrokeAlliance=7]=`BrokeAlliance`,e[e.AllianceExpired=8]=`AllianceExpired`,e[e.AllianceExtension=9]=`AllianceExtension`,e[e.TargetPlayer=10]=`TargetPlayer`,e[e.Emoji=11]=`Emoji`,e[e.Win=12]=`Win`,e[e.Hash=13]=`Hash`,e[e.UnitIncoming=14]=`UnitIncoming`,e[e.BonusEvent=15]=`BonusEvent`,e[e.RailroadDestructionEvent=16]=`RailroadDestructionEvent`,e[e.RailroadConstructionEvent=17]=`RailroadConstructionEvent`,e[e.RailroadSnapEvent=18]=`RailroadSnapEvent`,e[e.ConquestEvent=19]=`ConquestEvent`,e[e.EmbargoEvent=20]=`EmbargoEvent`,e[e.SpawnPhaseEnd=21]=`SpawnPhaseEnd`,e[e.GamePaused=22]=`GamePaused`,e[e.DonateEvent=23]=`DonateEvent`,e}({}),$e=50,et={enabled:!1,speed:`normal`,warnSeconds:30,drainStartPercent:2,drainMaxPercent:5,drainRampSeconds:90,drainFloorPercent:5,floorStartPercent:40,floorDecaySeconds:90,rotDeathSeconds:150,rotGrainSeconds:10,rotSpecklePercent:15,warshipDrainStartPercent:1,warshipDrainMaxPercent:50,warshipDrainCurveExponent:8},tt=80,z={enabled:!1,startMinutes:30,dropPercentPerMinute:2},nt=class{constructor(e,t,n=!1,r=!1){this._gameConfig=e,this._isReplay=t,this.listed=n,this._spectator=r,this.unitInfoCache=new Map}isReplay(){return this._isReplay}isIntentionalSpectator(){return this._spectator}traitorDefenseDebuff(){return .5}traitorDuration(){return 300}doomsdayClockConfig(){let e=this._gameConfig.doomsdayClock,t=et;return{enabled:e?.enabled??t.enabled,speed:e?.speed??t.speed,warnSeconds:t.warnSeconds,drainStartPercent:t.drainStartPercent,drainMaxPercent:t.drainMaxPercent,drainRampSeconds:t.drainRampSeconds,drainFloorPercent:t.drainFloorPercent,floorStartPercent:t.floorStartPercent,floorDecaySeconds:t.floorDecaySeconds,rotDeathSeconds:t.rotDeathSeconds,rotGrainSeconds:t.rotGrainSeconds,rotSpecklePercent:t.rotSpecklePercent,warshipDrainStartPercent:t.warshipDrainStartPercent,warshipDrainMaxPercent:t.warshipDrainMaxPercent,warshipDrainCurveExponent:t.warshipDrainCurveExponent}}overtimeConfig(){let e=this._gameConfig.overtime,t=z;return{enabled:e?.enabled??t.enabled,startMinutes:e?.startMinutes??t.startMinutes,dropPercentPerMinute:t.dropPercentPerMinute}}spawnImmunityDuration(){return this._gameConfig.spawnImmunityDuration??$e}nationSpawnImmunityDuration(){return $e}hasExtendedSpawnImmunity(){return this.spawnImmunityDuration()>$e}gameConfig(){return this._gameConfig}cityTroopIncrease(){return 25e4}msPerTick(){return 100}SAMCooldown(){return 90}SiloCooldown(){return 90}defensePostRange(){return 30}isUnitDisabled(e){return this._gameConfig.disabledUnits?.includes(e)??!1}instantBuild(){return this._gameConfig.instantBuild}disableAlliances(){return this._gameConfig.customAllianceDuration===0||(this._gameConfig.disableAlliances??!1)}isRandomSpawn(){return this._gameConfig.randomSpawn}infiniteTroops(){return this._gameConfig.infiniteTroops}donateTroops(){return this._gameConfig.donateTroops}trainStationMaxRange(){return 110}unitInfo(e){let t=this.unitInfoCache.get(e);if(t!==void 0)return t;let n;switch(e){case m.Warship:n={maxHealth:1e3};break;case m.Shell:n={damage:250};break;case m.Port:n={constructionDuration:this.instantBuild()?0:50,upgradable:!0};break;case m.MissileSilo:n={constructionDuration:this.instantBuild()?0:100,upgradable:!0};break;case m.DefensePost:n={constructionDuration:this.instantBuild()?0:50};break;case m.SAMLauncher:n={constructionDuration:this.instantBuild()?0:300,upgradable:!0};break;case m.City:case m.Factory:n={constructionDuration:this.instantBuild()?0:20,upgradable:!0};break;case m.TransportShip:case m.SAMMissile:case m.AtomBomb:case m.HydrogenBomb:case m.MIRV:case m.MIRVWarhead:case m.TradeShip:case m.Train:n={};break;default:x(e)}return this.unitInfoCache.set(e,n),n}hasInfiniteTroopsFor(e){return this.infiniteTroops()?!0:(this._gameConfig.hostCheats?.infiniteTroops??!1)&&e.isLobbyCreator()}deletionMarkDuration(){return 300}deleteUnitCooldown(){return 300}allianceRequestDuration(){return 200}allianceDuration(){let e=this._gameConfig.customAllianceDuration;return typeof e==`number`&&e>0?e*60*10:300*10}percentageTilesOwnedToWin(e){let t=tt,n=this.overtimeConfig();if(!n.enabled)return t;let r=Math.floor(e)-n.startMinutes*60;return r<=0?t:Math.max(0,t-Math.floor(r*n.dropPercentPerMinute/60))}armyLimitWarningThreshold(){return .8}numSpawnPhaseTurns(){return this._gameConfig.gameType===s.Singleplayer?100:this.isRandomSpawn()?150:200}maxTroops(e){return this.troopCap(e,!0)}maxTroopsWithoutCities(e){return this.troopCap(e,!1)}troopCap(e,t){let n=t?e.units(m.City).filter(e=>!e.isUnderConstruction()).map(e=>e.level()).reduce((e,t)=>e+t,0)*this.cityTroopIncrease():0,r=e.type()===T.Human&&this.hasInfiniteTroopsFor(e)?1e9:2*(k(e.numTilesOwned(),.6)*1e3+5e4)+n;if(e.type()===T.Bot)return r/3;if(e.type()===T.Human)return r;switch(this._gameConfig.difficulty){case o.Easy:return r*.5;case o.Medium:return r*.75;case o.Hard:return r*1;case o.Impossible:return r*1.25;default:x(this._gameConfig.difficulty)}}troopIncreaseRate(e){let t=this.maxTroops(e),n=10+k(e.troops(),.73)/4,r=1-e.troops()/t;if(n*=r,e.type()===T.Bot&&(n*=.5),e.type()===T.Nation)switch(this._gameConfig.difficulty){case o.Easy:n*=.9;break;case o.Medium:n*=.95;break;case o.Hard:n*=1;break;case o.Impossible:n*=1.05;break;default:x(this._gameConfig.difficulty)}return Math.min(e.troops()+n,t)-e.troops()}nukeMagnitudes(e){switch(e){case m.MIRVWarhead:return{inner:12,outer:18};case m.AtomBomb:return{inner:12,outer:30};case m.HydrogenBomb:return{inner:80,outer:100}}throw Error(`Unknown nuke type: ${e}`)}nukeAllianceBreakThreshold(){return 100}samRange(e){return this.maxSamRange()-480/(e+5)}maxSamRange(){return 150}structureMinDist(){return 15}warshipVeterancyHealthBonus(){return 20}allianceExtensionPromptOffset(){return 300}},rt=[{title:`emoji_table.faces`,emojis:[`😀`,`😊`,`🥰`,`😇`,`😎`,`😞`,`🥺`,`😭`,`😱`,`😡`,`😈`,`🤡`,`🥱`,`🫡`,`🤦‍♂️`]},{title:`emoji_table.gestures`,emojis:[`👍`,`👎`,`👋`,`👏`,`✋`,`🙏`,`💪`,`🫴`,`🤌`,`🖕`]},{title:`emoji_table.diplomacy`,emojis:[`🤝`,`🆘`,`🕊️`,`🏳️`,`⏳`,`⚠️`,`❓`,`❤️`,`💔`]},{title:`emoji_table.things`,emojis:[`🔥`,`💥`,`💀`,`☢️`,`🛡️`,`⚓`,`⛵`,`💰`,`🏡`,`🏭`,`🚂`,`🐔`,`🐀`]},{title:`emoji_table.directions`,emojis:[`↖️`,`⬆️`,`↗️`,`⬅️`,`🎯`,`➡️`,`↙️`,`⬇️`,`↘️`],columns:3},{title:`emoji_table.ranks`,emojis:[`👑`,`🥇`,`🥈`,`🥉`],columns:2}],it=`qweasd`;function at(e){return it[e]}function ot(e){if(e.shiftKey||e.ctrlKey||e.metaKey||e.altKey||!/^Key[A-Z]$/.test(e.code))return null;let t=it.indexOf(e.code[3].toLowerCase());return t===-1?null:t}function st(e,t,n){let r=[...e],i=r.indexOf(t);return i!==-1&&(r[i]=r[n]??null),r[n]=t,r}var ct=class{constructor(e,t){this.x=e,this.y=t}},lt=class{constructor(e,t){this.x=e,this.y=t}},ut=class{constructor(e,t){this.x=e,this.y=t}},dt=class{constructor(e,t,n=[]){this.unit=e,this.isSelected=t,this.units=n}},ft=class{constructor(e,t){this.x=e,this.y=t}},pt=class{constructor(e,t){this.x=e,this.y=t}},mt=class{constructor(e,t){this.x=e,this.y=t}},ht=class{constructor(e,t,n){this.x=e,this.y=t,this.delta=n}},gt=class{constructor(e,t){this.deltaX=e,this.deltaY=t}},_t=class{constructor(e){this.alternateView=e}},vt=class{},yt=class{},bt=class{},xt=class{},St=class{constructor(e){this.structureTypes=e}},Ct=class{},wt=class{constructor(e){this.rocketDirectionUp=e}},Tt=class{constructor(e,t,n,r){this.startX=e,this.startY=t,this.endX=n,this.endY=r}},Et=class{constructor(e,t,n,r){this.startX=e,this.startY=t,this.endX=n,this.endY=r}},Dt=class{},Ot=class{},kt=class{constructor(e,t){this.x=e,this.y=t}},At=class{constructor(e,t){this.x=e,this.y=t}},jt=class{constructor(e,t){this.x=e,this.y=t}},Mt=class{constructor(e,t){this.x=e,this.y=t}},Nt=class{constructor(e){this.visible=e}},Pt=class{constructor(e){this.slot=e}},Ft=class{constructor(e){this.tile=e}},It=class{},Lt=class{},Rt=class{constructor(e,t){this.tile=e,this.playerID=t}},zt=class{constructor(e,t){this.tile=e,this.playerID=t}},Bt=class{constructor(e,t){this.tile=e,this.playerID=t}},Vt=class{constructor(e){this.attackRatio=e}},Ht=class{constructor(e){this.replaySpeedMultiplier=e}},Ut=class{},Wt=class{},Gt=class{},Kt=class{constructor(){}},qt=class{constructor(e,t){this.x=e,this.y=t}},Jt=class{constructor(e){this.enabled=e}},Yt=class{constructor(e,t){this.tickExecutionDuration=e,this.tickDelay=t}},Xt=class{constructor(e,t,n,r){this.gameView=e,this.uiState=t,this.canvas=n,this.eventBus=r,this.lastPointerX=0,this.lastPointerY=0,this.lastMouseX=0,this.lastMouseY=0,this.emojiTableOpen=!1,this.emojiKeysDown=new Set,this.lastPointerDownX=0,this.lastPointerDownY=0,this.pointers=new Map,this.passThroughPointers=new Map,this.lastPinchDistance=0,this.lastGestureScale=null,this.pointerDown=!1,this.alternateView=!1,this.selectionBoxActive=!1,this.multiSelectionActive=!1,this.unitSelectionActive=!1,this.longPressTimer=null,this.longPressActive=!1,this.suppressNextTap=!1,this.LONG_PRESS_MS=800,this.moveInterval=null,this.listenerAbort=null,this.activeKeys=new Set,this.keybinds={},this.keybindAndEvent=[],this.coordinateGridEnabled=!1,this.PAN_SPEED=5,this.ZOOM_SPEED=10,this.DRAG_THRESHOLD_PX=10,this.userSettings=new be,this.onEmojiTableVisible=e=>{if(this.emojiTableOpen=e.visible,this.emojiKeysDown.clear(),e.visible)for(let e of this.activeKeys)ot(this.unmodifiedKey(e))!==null&&this.activeKeys.delete(e)},this.onUnitSelection=e=>{this.unitSelectionActive=e.isSelected&&(e.unit!==null||(e.units??[]).length>0),e.isSelected&&(e.units??[]).length>0?(this.multiSelectionActive=!0,this.canvas.style.cursor=`crosshair`):e.isSelected?(this.multiSelectionActive=!1,this.canvas.style.cursor=`crosshair`):(this.multiSelectionActive=!1,this.selectionBoxActive||(this.canvas.style.cursor=``))},this.onKeybindsChanged=()=>{this.buildKeybindTable()},this.onPassThroughPointerDown=e=>{this.isGameInputPassThrough(e)&&(e.button===0&&this.passThroughPointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.onPointerDown(e))},this.onPointerCancel=e=>{if(this.passThroughPointers.has(e.pointerId)){this.cancelPassThroughDrag(e.pointerId);return}this.onPointerUp(e)}}initialize(){this.buildKeybindTable(),globalThis.addEventListener(`${Ce}:${n}`,this.onKeybindsChanged),this.eventBus.off(dt,this.onUnitSelection),this.eventBus.on(dt,this.onUnitSelection),this.eventBus.off(Nt,this.onEmojiTableVisible),this.eventBus.on(Nt,this.onEmojiTableVisible),this.initializePointerAndKeyboardEvents()}unmodifiedKey(e){return{code:e,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1}}resetPointerState(){this.pointerDown=!1,this.pointers.clear(),this.passThroughPointers.clear(),this.lastGestureScale=null,this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressActive=!1,this.suppressNextTap=!1,this.selectionBoxActive=!1,this.multiSelectionActive=!1}buildKeybindTable(){this.keybinds=this.userSettings.keybinds(C.isMac),this.keybindAndEvent=[],this.addKeybindAndEvent(this.keybinds.boatAttack,()=>{this.eventBus.emit(new Ft)}),this.addKeybindAndEvent(this.keybinds.groundAttack,()=>{this.eventBus.emit(new It)}),this.addKeybindAndEvent(this.keybinds.retaliateAttack,()=>{this.eventBus.emit(new Lt)}),this.addKeybindAndEvent(this.keybinds.centerCamera,()=>{this.eventBus.emit(new Kt)}),this.addKeybindAndEvent(this.keybinds.selectAllWarships,()=>{this.eventBus.emit(new Ot)}),this.addKeybindAndEvent(this.keybinds.requestAlliance,()=>{this.eventBus.emit(new Rt)}),this.addKeybindAndEvent(this.keybinds.breakAlliance,()=>{this.eventBus.emit(new zt)}),this.addKeybindAndEvent(this.keybinds.targetPlayer,()=>{this.eventBus.emit(new Bt)}),this.addKeybindAndEvent(this.keybinds.quickChat,()=>{this.eventBus.emit(new Mt(this.lastMouseX,this.lastMouseY))},e=>!e.altKey&&!e.ctrlKey&&!e.metaKey&&!this.resetGfxModifierHeld(e)),this.addKeybindAndEvent(this.keybinds.pauseGame,()=>{this.eventBus.emit(new Ut)},e=>!e.repeat),this.addKeybindAndEvent(this.keybinds.gameSpeedUp,()=>{this.eventBus.emit(new Wt)},e=>!e.repeat),this.addKeybindAndEvent(this.keybinds.gameSpeedDown,()=>{this.eventBus.emit(new Gt)},e=>!e.repeat),this.addKeybindAndEvent(this.keybinds.attackRatioDown,()=>{let e=this.userSettings.attackRatioIncrement();this.eventBus.emit(new Vt(-e))}),this.addKeybindAndEvent(this.keybinds.attackRatioUp,()=>{let e=this.userSettings.attackRatioIncrement();this.eventBus.emit(new Vt(e))}),this.addKeybindAndEvent(this.keybinds.swapDirection,()=>{let e=!this.uiState.rocketDirectionUp;this.eventBus.emit(new wt(e))}),this.addKeybindAndEvent(`Shift+KeyD`,()=>{this.eventBus.emit(new xt)}),this.addKeybindAndEvent(this.keybinds.toggleView,()=>{this.alternateView=!1,this.eventBus.emit(new _t(!1))});let e=this.keybinds.resetGfx??`KeyR`;this.addKeybindAndEvent(e,()=>{this.eventBus.emit(new yt)},e=>this.resetGfxModifierHeld(e));let t=[`buildCity`,`buildFactory`,`buildPort`,`buildDefensePost`,`buildMissileSilo`,`buildSamLauncher`,`buildAtomBomb`,`buildHydrogenBomb`,`buildWarship`,`buildMIRV`];t=t.map(e=>this.keybinds[e]),t.push(`Numpad0`,`Numpad1`,`Numpad2`,`Numpad3`,`Numpad4`,`Numpad5`,`Numpad6`,`Numpad7`,`Numpad8`,`Numpad9`,`Digit0`,`Digit1`,`Digit2`,`Digit3`,`Digit4`,`Digit5`,`Digit6`,`Digit7`,`Digit8`,`Digit9`),t.push(...t.map(e=>`Shift+`+e)),t=[...new Set(t)].filter(e=>!!e);for(let e of t)this.addKeybindAndEvent(e,e=>{let t=this.resolveBuildKeybind(e.code,e.shiftKey);t!==null&&this.setGhostStructure(t)},()=>this.canUseBuildKeybinds(),e=>this.resolveBuildKeybind(e.code,e.shiftKey)!==null)}initializePointerAndKeyboardEvents(){this.listenerAbort?.abort(),this.moveInterval!==null&&(clearInterval(this.moveInterval),this.moveInterval=null),this.resetPointerState(),this.listenerAbort=new AbortController;let{signal:e}=this.listenerAbort;this.canvas.addEventListener(`pointerdown`,e=>this.onPointerDown(e),{signal:e}),window.addEventListener(`pointerdown`,this.onPassThroughPointerDown,{signal:e}),window.addEventListener(`pointerup`,e=>this.onPointerUp(e),{signal:e}),window.addEventListener(`pointercancel`,this.onPointerCancel,{signal:e}),this.canvas.addEventListener(`wheel`,e=>{this.onScroll(e),this.onShiftScroll(e),e.preventDefault()},{passive:!1,signal:e}),this.canvas.addEventListener(`gesturestart`,e=>{e.preventDefault(),this.lastGestureScale=e.scale},{passive:!1,signal:e}),this.canvas.addEventListener(`gesturechange`,e=>{e.preventDefault(),this.onGestureChange(e)},{passive:!1,signal:e}),this.canvas.addEventListener(`gestureend`,e=>{e.preventDefault(),this.lastGestureScale=null},{passive:!1,signal:e}),window.addEventListener(`pointermove`,this.onPointerMove.bind(this),{signal:e}),this.canvas.addEventListener(`contextmenu`,e=>this.onContextMenu(e),{signal:e}),window.addEventListener(`mousemove`,e=>{this.lastMouseX=e.clientX,this.lastMouseY=e.clientY,(e.movementX||e.movementY)&&this.eventBus.emit(new pt(e.clientX,e.clientY))},{signal:e}),window.addEventListener(`blur`,()=>{this.activeKeys.clear(),this.alternateView&&(this.alternateView=!1,this.eventBus.emit(new _t(!1)));let e=this.selectionBoxActive||this.multiSelectionActive;this.resetPointerState(),e&&this.eventBus.emit(new Dt),this.canvas.style.cursor=``},{signal:e}),this.pointers.clear(),this.moveInterval=setInterval(()=>{let e=0,t=0;if(this.activeKeys.has(this.keybinds.boxSelectWarships))return;(this.activeKeys.has(this.keybinds.moveUp)||this.activeKeys.has(this.keybinds.moveUpArrow))&&(t+=this.PAN_SPEED),(this.activeKeys.has(this.keybinds.moveDown)||this.activeKeys.has(this.keybinds.moveDownArrow))&&(t-=this.PAN_SPEED),(this.activeKeys.has(this.keybinds.moveLeft)||this.activeKeys.has(this.keybinds.moveLeftArrow))&&(e+=this.PAN_SPEED),(this.activeKeys.has(this.keybinds.moveRight)||this.activeKeys.has(this.keybinds.moveRightArrow))&&(e-=this.PAN_SPEED),(e||t)&&this.eventBus.emit(new gt(e,t));let n=window.innerWidth/2,r=window.innerHeight/2;(this.activeKeys.has(this.keybinds.zoomOut)||this.activeKeys.has(this.keybinds.zoomOutMinus)||this.activeKeys.has(this.keybinds.zoomOutNumpad))&&this.eventBus.emit(new ht(n,r,this.ZOOM_SPEED)),(this.activeKeys.has(this.keybinds.zoomIn)||this.activeKeys.has(this.keybinds.zoomInEqual)||this.activeKeys.has(this.keybinds.zoomInNumpad))&&this.eventBus.emit(new ht(n,r,-this.ZOOM_SPEED))},1),window.addEventListener(`keydown`,e=>{if(this.isTextInputTarget(e.target)&&e.code!==`Escape`)return;if(this.keybindMatchesEvent(e,this.keybinds.emojiMenu)&&!e.repeat){e.preventDefault(),this.emojiTableOpen?this.eventBus.emit(new vt):this.eventBus.emit(new jt(this.lastMouseX,this.lastMouseY));return}if(this.emojiTableOpen&&ot(e)!==null){e.preventDefault(),this.emojiKeysDown.add(e.code);return}if(this.keybindMatchesEvent(e,this.keybinds.toggleView)&&(e.preventDefault(),this.alternateView||(this.alternateView=!0,this.eventBus.emit(new _t(!0)))),this.keybindMatchesEvent(e,this.keybinds.coordinateGrid)&&!e.repeat&&(e.preventDefault(),this.coordinateGridEnabled=!this.coordinateGridEnabled,this.eventBus.emit(new Jt(this.coordinateGridEnabled))),e.code===`Escape`){e.preventDefault();let t=!1;this.uiState.ghostStructure!==null&&(this.setGhostStructure(null),t=!0),this.selectionBoxActive&&(this.selectionBoxActive=!1,this.eventBus.emit(new Dt),t=!0),this.eventBus.emit(new vt),!t&&(this.unitSelectionActive||this.multiSelectionActive)&&this.eventBus.emit(new dt(null,!1))}(e.code===`Enter`||e.code===`NumpadEnter`)&&this.uiState.ghostStructure!==null&&(e.preventDefault(),this.eventBus.emit(new Ct));let t=(e.metaKey||e.ctrlKey)&&(e.code===`Minus`||e.code===`Equal`||e.code===`NumpadAdd`||e.code===`NumpadSubtract`);(Object.values(this.keybinds).includes(e.code)||this.keybindAndEvent.some(([t])=>this.keybindMatchesEvent(e,t)))&&!t&&e.preventDefault(),!t&&[this.keybinds.moveUp,this.keybinds.moveDown,this.keybinds.moveLeft,this.keybinds.moveRight,this.keybinds.moveUpArrow,this.keybinds.moveDownArrow,this.keybinds.moveLeftArrow,this.keybinds.moveRightArrow,this.keybinds.zoomOut,this.keybinds.zoomIn,this.keybinds.zoomOutMinus,this.keybinds.zoomOutNumpad,this.keybinds.zoomInEqual,this.keybinds.zoomInNumpad,this.keybinds.attackRatioDown,this.keybinds.attackRatioUp,this.keybinds.centerCamera,`ControlLeft`,`ControlRight`,this.keybinds.boxSelectWarships,this.keybinds.emojiMenuModifier,this.keybinds.buildMenuModifier,this.keybinds.altKey].includes(e.code)&&this.activeKeys.add(e.code),e.code===this.keybinds.boxSelectWarships&&(this.uiState.ghostStructure!==null&&this.setGhostStructure(null),this.canvas.style.cursor=`crosshair`)},{signal:e}),window.addEventListener(`keyup`,e=>{if(!(this.isTextInputTarget(e.target)&&!this.activeKeys.has(e.code))){if((e.code===`MetaLeft`||e.code===`MetaRight`||e.code===`ControlLeft`||e.code===`ControlRight`)&&(this.activeKeys.delete(`Minus`),this.activeKeys.delete(`Equal`),this.activeKeys.delete(`NumpadAdd`),this.activeKeys.delete(`NumpadSubtract`),this.activeKeys.delete(this.keybinds.zoomIn),this.activeKeys.delete(this.keybinds.zoomOut)),this.emojiTableOpen){let t=ot(e);if(t!==null){e.preventDefault(),this.activeKeys.delete(e.code),this.emojiKeysDown.delete(e.code)&&this.eventBus.emit(new Pt(t));return}}outerLoop:for(let t of this.keybindAndEvent)if(this.keybindMatchesEvent(e,t[0])){for(let n of t[1].conditions)if(!n(e))continue outerLoop;e.preventDefault(),t[1].handler(e)}this.activeKeys.delete(e.code),e.code===this.keybinds.boxSelectWarships&&!this.selectionBoxActive&&!this.multiSelectionActive&&(this.canvas.style.cursor=``)}},{signal:e})}onPointerDown(e){if(e.button===1){e.preventDefault(),this.eventBus.emit(new qt(e.clientX,e.clientY));return}e.button>0||(this.pointerDown=!0,this.pointers.set(e.pointerId,e),this.pointers.size===1?(this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.lastPointerDownX=e.clientX,this.lastPointerDownY=e.clientY,this.eventBus.emit(new ft(e.clientX,e.clientY)),e.pointerType===`touch`&&(this.longPressActive=!1,this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressTimer=setTimeout(()=>{this.longPressTimer=null,this.longPressActive=!0,this.canvas.style.cursor=`crosshair`,this.eventBus.emit(new kt(this.lastPointerDownX,this.lastPointerDownY))},this.LONG_PRESS_MS))):this.pointers.size===2&&(this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressActive&&(this.longPressActive=!1,this.canvas.style.cursor=``),this.lastPinchDistance=this.getPinchDistance()))}isGameInputPassThrough(e){return e.composedPath?.().some(e=>e instanceof HTMLElement&&e.hasAttribute(`data-game-input-pass-through`))??!1}cancelPassThroughDrag(e){this.passThroughPointers.delete(e);let t=this.pointers.keys().next().value===e;if(this.pointers.delete(e)){if(this.pointerDown=this.pointers.size>0,this.pointerDown){if(t){let e=this.pointers.values().next().value;e&&(this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.lastPointerDownX=e.clientX,this.lastPointerDownY=e.clientY)}this.lastPinchDistance=this.pointers.size>=2?this.getPinchDistance():0;return}this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressActive&&(this.canvas.style.cursor=``),this.longPressActive=!1,this.suppressNextTap=!1}}onPointerUp(e){if(e.button===1){e.preventDefault();return}if(e.button>0)return;if(this.passThroughPointers.has(e.pointerId)&&this.pointers.size>1){this.cancelPassThroughDrag(e.pointerId);return}if(this.passThroughPointers.delete(e.pointerId),!this.pointerDown||!this.pointers.has(e.pointerId))return;this.pointerDown=!1,this.pointers.clear(),this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null);let t=this.longPressActive;if(this.longPressActive=!1,t&&(this.canvas.style.cursor=``,this.selectionBoxActive||(this.suppressNextTap=!0)),this.selectionBoxActive)if(this.selectionBoxActive=!1,Math.abs(e.clientX-this.lastPointerDownX)+Math.abs(e.clientY-this.lastPointerDownY)>=this.DRAG_THRESHOLD_PX){this.eventBus.emit(new Et(this.lastPointerDownX,this.lastPointerDownY,e.clientX,e.clientY));return}else this.eventBus.emit(new Dt);if(C.isMac&&e.ctrlKey&&!this.gameView.inSpawnPhase()){this.suppressNextTap=!1;return}if(this.activeKeys.has(this.keybinds.buildMenuModifier)){this.suppressNextTap=!1,this.eventBus.emit(new At(e.clientX,e.clientY));return}if(this.activeKeys.has(this.keybinds.emojiMenuModifier)){this.suppressNextTap=!1,this.eventBus.emit(new jt(e.clientX,e.clientY));return}if(Math.abs(e.x-this.lastPointerDownX)+Math.abs(e.y-this.lastPointerDownY)<this.DRAG_THRESHOLD_PX){if(e.pointerType===`touch`){if(this.suppressNextTap){this.suppressNextTap=!1,e.preventDefault();return}this.eventBus.emit(new ut(e.x,e.y)),e.preventDefault();return}!this.userSettings.leftClickOpensMenu()||e.shiftKey||this.gameView.inSpawnPhase()||this.uiState.ghostStructure!==null?this.eventBus.emit(new ct(e.x,e.y)):this.eventBus.emit(new mt(e.clientX,e.clientY))}}onScroll(e){if(!e.shiftKey){let t=this.activeKeys.has(`ControlLeft`)||this.activeKeys.has(`ControlRight`);if(e.ctrlKey){t||Math.abs(e.deltaY)<=10&&this.eventBus.emit(new ht(e.x,e.y,e.deltaY*10));return}if(Math.abs(e.deltaY)<2)return;this.eventBus.emit(new ht(e.x,e.y,e.deltaY))}}onGestureChange(e){if(this.lastGestureScale===null)return;let t=e.scale/this.lastGestureScale;if(!Number.isFinite(t)||t<=0||(this.lastGestureScale=e.scale,this.pointers.size>=2))return;let n=600*(1/t-1);n!==0&&this.eventBus.emit(new ht(e.clientX,e.clientY,n))}onShiftScroll(e){if(e.shiftKey){let t=e.deltaY===0?e.deltaX:e.deltaY,n=this.userSettings.attackRatioIncrement(),r=t>0?-n:n;this.eventBus.emit(new Vt(r))}}onPointerMove(e){if(e.button===1){e.preventDefault();return}if(e.button>0)return;if(!this.pointerDown){this.eventBus.emit(new lt(e.clientX,e.clientY));return}if(!this.pointers.has(e.pointerId))return;let t=this.passThroughPointers.get(e.pointerId);if(t){Math.abs(e.clientX-t.x)+Math.abs(e.clientY-t.y)>=this.DRAG_THRESHOLD_PX&&this.cancelPassThroughDrag(e.pointerId);return}if(this.pointers.set(e.pointerId,e),this.pointers.size===1){let t=e.clientX-this.lastPointerX,n=e.clientY-this.lastPointerY;this.longPressTimer!==null&&Math.abs(e.clientX-this.lastPointerDownX)+Math.abs(e.clientY-this.lastPointerDownY)>=this.DRAG_THRESHOLD_PX&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.selectionBoxActive||this.activeKeys.has(this.keybinds.boxSelectWarships)||this.longPressActive?(this.selectionBoxActive=!0,this.eventBus.emit(new Tt(this.lastPointerDownX,this.lastPointerDownY,e.clientX,e.clientY))):this.eventBus.emit(new gt(t,n)),this.lastPointerX=e.clientX,this.lastPointerY=e.clientY}else if(this.pointers.size===2){let e=this.getPinchDistance(),t=e-this.lastPinchDistance;if(Math.abs(t)>1){let n=this.getPinchCenter();this.eventBus.emit(new ht(n.x,n.y,-t*2)),this.lastPinchDistance=e}}}onContextMenu(e){if(e.preventDefault(),!this.gameView.inSpawnPhase()){if(this.uiState.ghostStructure!==null){this.setGhostStructure(null);return}if(this.unitSelectionActive){this.eventBus.emit(new dt(null,!1));return}this.eventBus.emit(new mt(e.clientX,e.clientY))}}setGhostStructure(e){this.uiState.ghostStructure===e&&e!==null?this.uiState.upgradeMultiplier=this.uiState.upgradeMultiplier===1?5:1:(this.uiState.upgradeMultiplier=1,this.uiState.ghostStructure=e)}parseKeybind(e){return e?.startsWith(`Shift+`)?{shift:!0,code:e.slice(6)}:{shift:!1,code:e}}keybindMatchesEvent(e,t){let n=this.parseKeybind(t);return e.code===n.code&&e.shiftKey===n.shift}digitFromKeyCode(e){return e?.length===6&&e.startsWith(`Digit`)&&/^[0-9]$/.test(e[5])?e[5]:e?.length===7&&e.startsWith(`Numpad`)&&/^[0-9]$/.test(e[6])?e[6]:null}buildKeybindMatchesDigit(e,t,n){let r=this.parseKeybind(n);if(t!==r.shift)return!1;let i=this.digitFromKeyCode(e),a=this.digitFromKeyCode(r.code);return i!==null&&a!==null&&i===a}resetGfxModifierHeld(e){return this.keybinds.altKey===`AltLeft`||this.keybinds.altKey===`AltRight`?e.altKey&&!e.ctrlKey:this.keybinds.altKey===`ControlLeft`||this.keybinds.altKey===`ControlRight`?e.ctrlKey:this.keybinds.altKey===`ShiftLeft`||this.keybinds.altKey===`ShiftRight`?e.shiftKey:this.keybinds.altKey===`MetaLeft`||this.keybinds.altKey===`MetaRight`?e.metaKey:this.activeKeys.has(this.keybinds.altKey)}addKeybindAndEvent(e,t,...n){let r={handler:t,conditions:n};this.keybindAndEvent.push([e,r])}resolveBuildKeybind(e,t){let n=[{key:`buildCity`,type:m.City},{key:`buildFactory`,type:m.Factory},{key:`buildPort`,type:m.Port},{key:`buildDefensePost`,type:m.DefensePost},{key:`buildMissileSilo`,type:m.MissileSilo},{key:`buildSamLauncher`,type:m.SAMLauncher},{key:`buildAtomBomb`,type:m.AtomBomb},{key:`buildHydrogenBomb`,type:m.HydrogenBomb},{key:`buildWarship`,type:m.Warship},{key:`buildMIRV`,type:m.MIRV}];for(let{key:r,type:i}of n)if(this.keybindMatchesEvent({code:e,shiftKey:t},this.keybinds[r]))return i;for(let{key:r,type:i}of n)if(this.buildKeybindMatchesDigit(e,t,this.keybinds[r]))return i;return null}canUseBuildKeybinds(){let e=this.gameView.myPlayer?.();return!this.gameView.inSpawnPhase()&&e?.isAlive()===!0}getPinchDistance(){let e=Array.from(this.pointers.values()),t=e[0].clientX-e[1].clientX,n=e[0].clientY-e[1].clientY;return Math.sqrt(t*t+n*n)}getPinchCenter(){let e=Array.from(this.pointers.values());return{x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}}isTextInputTarget(e){let t=e;return t?typeof t.closest==`function`&&t.closest(`setting-keybind`)!==null||t.tagName===`TEXTAREA`||t.isContentEditable?!0:t.tagName===`INPUT`?t.type!==`range`:!1:!1}destroy(){this.moveInterval!==null&&(clearInterval(this.moveInterval),this.moveInterval=null),globalThis.removeEventListener(`${Ce}:${n}`,this.onKeybindsChanged),this.listenerAbort?.abort(),this.listenerAbort=null,this.eventBus.off(Nt,this.onEmojiTableVisible),this.eventBus.off(dt,this.onUnitSelection),this.resetPointerState(),this.activeKeys.clear(),this.emojiTableOpen=!1,this.emojiKeysDown.clear(),this.keybindAndEvent=[],this.keybinds={}}},Zt=class{constructor(e,t){this.player=e,this.zoom=t}},Qt=class{constructor(e,t){this.x=e,this.y=t}},$t=class{constructor(e){this.unit=e}},en=.03,tn=class{constructor(e,t,n){this.game=e,this.eventBus=t,this.canvas=n,this.scale=1.8,this.offsetX=-350,this.offsetY=-200,this.lastGoToCallTime=null,this.targetScale=null,this.intervalID=null,this.changed=!1,this._boundingRect=this.canvas.getBoundingClientRect(),this.eventBus.on(ht,e=>this.onZoom(e)),this.eventBus.on(gt,e=>this.onMove(e)),this.eventBus.on(Zt,e=>this.onGoToPlayer(e)),this.eventBus.on(Qt,e=>this.onGoToPosition(e)),this.eventBus.on($t,e=>this.onGoToUnit(e)),this.eventBus.on(Kt,()=>this.centerCamera())}updateCanvasBoundingRect(){this._boundingRect=this.canvas.getBoundingClientRect()}boundingRect(){return this._boundingRect}width(){return this.boundingRect().width}hasChanged(){return this.changed}resetChanged(){this.changed=!1}handleTransform(e){e.imageSmoothingEnabled=!1,e.setTransform(this.scale,0,0,this.scale,this.game.width()/2-this.offsetX*this.scale,this.game.height()/2-this.offsetY*this.scale)}worldToCanvasCoordinates(e){let t=e.x,n=e.y,r=t-this.game.width()/2,i=n-this.game.height()/2;return{x:(r-this.offsetX)*this.scale+this.game.width()/2,y:(i-this.offsetY)*this.scale+this.game.height()/2}}worldToScreenCoordinates(e){let t=this.worldToCanvasCoordinates(e);return this.canvasToScreenCoordinates(t.x,t.y)}screenToWorldCoordinates(e,t){let n=this.screenToWorldCoordinatesFloat(e,t);return new Ee(Math.floor(n.x),Math.floor(n.y))}screenToWorldCoordinatesFloat(e,t){let n=this.screenToCanvasCoordinates(e,t);return{x:(n.x-this.game.width()/2)/this.scale+this.offsetX+this.game.width()/2,y:(n.y-this.game.height()/2)/this.scale+this.offsetY+this.game.height()/2}}canvasToScreenCoordinates(e,t){let n=this.boundingRect();return{x:e+n.left,y:t+n.top}}screenToCanvasCoordinates(e,t){let n=this.boundingRect();return{x:e-n.left,y:t-n.top}}screenBoundingRect(){let e=this.boundingRect(),t=e.width,n=e.height,r=-this.game.width()/2/this.scale+this.offsetX,i=-this.game.height()/2/this.scale+this.offsetY,a=r+this.game.width()/2,o=i+this.game.height()/2,s=(t-this.game.width()/2)/this.scale+this.offsetX,c=(n-this.game.height()/2)/this.scale+this.offsetY,l=s+this.game.width()/2,u=c+this.game.height()/2;return[new Ee(Math.floor(a),Math.floor(o)),new Ee(Math.floor(l),Math.floor(u))]}isOnScreen(e){let[t,n]=this.screenBoundingRect();return e.x>t.x&&e.x<n.x&&e.y>t.y&&e.y<n.y}screenCenter(){let[e,t]=this.screenBoundingRect();return{screenX:e.x+Math.floor((t.x-e.x)/2),screenY:e.y+Math.floor((t.y-e.y)/2)}}onGoToPlayer(e){this.clearTarget();let t=e.player.nameLocation();t&&(this.target=new Ee(t.x,t.y),this.targetScale=e.zoom??null,this.intervalID=setInterval(()=>this.goTo(),16))}onGoToPosition(e){this.clearTarget(),this.target=new Ee(e.x,e.y),this.intervalID=setInterval(()=>this.goTo(),16)}onGoToUnit(e){this.clearTarget(),this.target=new Ee(this.game.x(e.unit.lastTile()),this.game.y(e.unit.lastTile())),this.intervalID=setInterval(()=>this.goTo(),16)}centerCamera(){this.clearTarget();let e=this.game.myPlayer()?.nameLocation();e&&(this.target=new Ee(e.x,e.y),this.intervalID=setInterval(()=>this.goTo(),16))}goTo(){let{screenX:e,screenY:t}=this.screenCenter();if(this.target===null)throw Error(`null target`);let n=Math.abs(this.target.x-e)+Math.abs(this.target.y-t)<2,r=this.targetScale===null||Math.abs(this.scale-this.targetScale)<.01;if(n&&r){this.clearTarget();return}let i,a=window.performance.now();i=this.lastGoToCallTime===null?16:a-this.lastGoToCallTime,this.lastGoToCallTime=a;let o=1-en**(i/1e3);if(this.offsetX+=Math.max(Math.min((this.target.x-e)*o,15),-15),this.offsetY+=Math.max(Math.min((this.target.y-t)*o,15),-15),this.targetScale!==null){let e=this.scale,t=1-.7**(i/1e3),n=this.targetScale-this.scale,r=n*t,a=Math.sign(n)*Math.min(Math.abs(n),6*i/1e3);this.scale+=Math.abs(r)>=Math.abs(a)?r:a;let{width:o,height:s}=this.boundingRect();this.offsetX+=(o-this.game.width())*(1/(2*e)-1/(2*this.scale)),this.offsetY+=(s-this.game.height())*(1/(2*e)-1/(2*this.scale))}this.changed=!0}onZoom(e){this.clearTarget();let t=this.scale,n=1+e.delta/600;this.scale/=n,this.scale=Math.max(.2,Math.min(20,this.scale));let r=this.screenToCanvasCoordinates(e.x,e.y),i=(r.x-this.game.width()/2)/t+this.offsetX,a=(r.y-this.game.height()/2)/t+this.offsetY;this.offsetX=i-(r.x-this.game.width()/2)/this.scale,this.offsetY=a-(r.y-this.game.height()/2)/this.scale,this.clampOffsets(),this.changed=!0}clampOffsets(){let e=this.boundingRect(),t=e.width,n=e.height,r=this.game.width(),i=this.game.height(),a=this.scale,o=-r/2+(r-t)/(2*a),s=r/2+(r-t)/(2*a),c=-i/2+(i-n)/(2*a),l=i/2+(i-n)/(2*a);this.offsetX<o?this.offsetX=o:this.offsetX>s&&(this.offsetX=s),this.offsetY<c?this.offsetY=c:this.offsetY>l&&(this.offsetY=l)}onMove(e){this.clearTarget(),this.offsetX-=e.deltaX/this.scale,this.offsetY-=e.deltaY/this.scale,this.clampOffsets(),this.changed=!0}clearTarget(){this.intervalID!==null&&(clearInterval(this.intervalID),this.intervalID=null),this.target=null,this.targetScale=null}override(e=0,t=0,n=1){this.clearTarget(),this.offsetX=e,this.offsetY=t,this.scale=n,this.changed=!0}centerAll(e=1){let t=this.boundingRect().width,n=this.boundingRect().height,r=this.game.width(),i=this.game.height(),a=t/r*e,o=n/i*e,s=Math.min(a,o),c=(r-t)/2/s,l=(i-n)/2/s;this.override(c,l,s)}},nn=6e4;function rn(e){let t=()=>{try{if(I.isStaticBuild())return;let t=`${I.gameHttpBase(e)}/${I.gameWorkerPath(e)}/api/singleplayer/${e}/heartbeat`;fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({platform:ge()})}).catch(()=>{})}catch{}};t();let n=setInterval(t,nn);return()=>clearInterval(n)}var an=function(e){return e[e.slow=2]=`slow`,e[e.normal=1]=`normal`,e[e.fast=.5]=`fast`,e[e.fastest=0]=`fastest`,e}({}),on=[an.slow,an.normal,an.fast,an.fastest],sn=60,cn=class{constructor(e,t,n){this.lobbyConfig=e,this.isReplay=t,this.eventBus=n,this.replayTurns=[],this.turns=[],this.intents=[],this.paused=!1,this.replaySpeedMultiplier=1,this.winner=null,this.allPlayersStats={},this.archived=!1,this.archiveInFlight=!1,this.turnsExecuted=0,this.turnStartTime=0,this.stopHeartbeat=null}updateCallback(e,t){this.clientConnect=e,this.clientMessage=t}start(){if(console.log(`local server starting`),this.turnCheckInterval=setInterval(()=>{let e=I.turnIntervalMs()*this.replaySpeedMultiplier,t=Math.max(0,this.turns.length-this.turnsExecuted),n=this.replaySpeedMultiplier===an.fastest&&this.lobbyConfig.gameRecord!==void 0?sn:0;(t===0||n>0&&t<n)&&Date.now()>this.turnStartTime+e&&(this.turnStartTime=Date.now(),this.endTurn())},5),this.eventBus.on(Ht,e=>{this.replaySpeedMultiplier=e.replaySpeedMultiplier}),this.isReplay||(this.eventBus.on(Wt,()=>{let e=on.indexOf(this.replaySpeedMultiplier);e<0||e>=on.length-1||(this.replaySpeedMultiplier=on[e+1],this.eventBus.emit(new Ht(this.replaySpeedMultiplier)))}),this.eventBus.on(Gt,()=>{let e=on.indexOf(this.replaySpeedMultiplier);e<=0||(this.replaySpeedMultiplier=on[e-1],this.eventBus.emit(new Ht(this.replaySpeedMultiplier)))})),this.startedAt=Date.now(),this.clientConnect(),this.lobbyConfig.gameRecord&&(this.replayTurns=p(this.lobbyConfig.gameRecord).turns),this.lobbyConfig.gameStartInfo===void 0)throw Error(`missing gameStartInfo`);if(this.clientID=this.lobbyConfig.gameStartInfo.players[0]?.clientID,!this.clientID)throw Error(`missing clientID`);this.clientMessage({type:`start`,gameStartInfo:this.lobbyConfig.gameStartInfo,turns:[],lobbyCreatedAt:this.lobbyConfig.gameStartInfo.lobbyCreatedAt,myClientID:this.lobbyConfig.gameRecord?void 0:this.clientID}),this.isReplay||(this.stopHeartbeat=rn(this.lobbyConfig.gameStartInfo.gameID))}onMessage(e){if(e.type===`rejoin`){if(!this.clientID)throw Error(`missing clientID`);this.clientMessage({type:`start`,gameStartInfo:this.lobbyConfig.gameStartInfo,turns:this.turns,lobbyCreatedAt:this.lobbyConfig.gameStartInfo.lobbyCreatedAt,myClientID:this.lobbyConfig.gameRecord?void 0:this.clientID})}if(e.type===`intent`){let t={...e.intent,clientID:this.clientID};if(t.type===`toggle_pause`){t.paused?(this.intents.push(t),this.endTurn(),this.paused=!0):(this.paused=!1,this.intents.push(t),this.endTurn());return}if(this.lobbyConfig.gameRecord||this.paused)return;this.intents.push(t)}if(e.type===`hash`){if(!this.lobbyConfig.gameRecord){if(e.turnNumber%100==0){let t=this.turns[e.turnNumber];t&&(t.hash=e.hash)}return}let t=this.replayTurns[e.turnNumber].hash;if(!t){console.warn(`no archived hash found for turn ${e.turnNumber}, client hash: ${e.hash}`);return}t===e.hash?console.log(`hash verified on turn ${e.turnNumber}, client hash: ${e.hash}, server hash: ${t}`):(console.error(`desync detected on turn ${e.turnNumber}, client hash: ${e.hash}, server hash: ${t}`),this.clientMessage({type:`desync`,turn:e.turnNumber,correctHash:t,clientsWithCorrectHash:0,totalActiveClients:1,yourHash:e.hash}))}e.type===`winner`&&(this.winner=e,this.allPlayersStats=e.allPlayersStats,this.isReplay||this.archiveGameRecord(!1))}turnComplete(){this.turnsExecuted++}endTurn(){if(this.paused)return;if(this.replayTurns.length>0){if(this.turns.length>=this.replayTurns.length){this.endGame();return}this.intents=this.replayTurns[this.turns.length].intents}let e={turnNumber:this.turns.length,intents:this.intents};this.turns.push(e),this.intents=[],this.clientMessage({type:`turn`,turn:e})}endGame(){console.log(`local server ending game`),clearInterval(this.turnCheckInterval),this.stopHeartbeat?.(),this.stopHeartbeat=null,!this.isReplay&&this.archiveGameRecord(!0)}archiveGameRecord(t){if(this.archived||this.archiveInFlight)return;let n=[{persistentID:ue(),username:this.lobbyConfig.playerName,clanTag:this.lobbyConfig.playerClanTag??null,clientID:this.clientID,stats:this.allPlayersStats[this.clientID],cosmetics:this.lobbyConfig.gameStartInfo?.players[0].cosmetics}];if(this.lobbyConfig.gameStartInfo===void 0)throw Error(`missing gameStartInfo`);let r=ae(this.lobbyConfig.gameStartInfo.gameID,this.lobbyConfig.gameStartInfo.config,n,this.turns,this.startedAt,Date.now(),this.winner?.winner),i=d.safeParse(r);if(!i.success){let t=e(i.error);console.error(`Error parsing game record`,t);return}this.archiveGame(i.data,t)}async archiveGame(e,t){this.archiveInFlight=!0;try{let n=await ce();if(n===``)return;let r=await ln(JSON.stringify({...e,gitCommit:I.gitCommit()},xe)),i=await fetch(`${he()}/archive_singleplayer_game`,{method:`POST`,headers:{"Content-Type":`application/json`,"Content-Encoding":`gzip`,Authorization:n},body:r,keepalive:t});i.ok?this.archived=!0:console.error(`Failed to archive singleplayer game: ${i.status}`)}catch(e){console.warn(`Failed to archive singleplayer game:`,e)}finally{this.archiveInFlight=!1}}};async function ln(e){let t=new CompressionStream(`gzip`),n=t.writable.getWriter(),r=t.readable.getReader();n.write(new TextEncoder().encode(e)),n.close();let i=[],a=!1;for(;!a;){let{value:e,done:t}=await r.read();a=t,e&&i.push(e)}let o=i.reduce((e,t)=>e+t.length,0),s=new Uint8Array(o),c=0;for(let e of i)s.set(e,c),c+=e.length;return s.buffer}var un=class{constructor(e){this.paused=e}},dn=class{constructor(e,t){this.requestor=e,this.recipient=t}},fn=class{constructor(e,t){this.requestor=e,this.recipient=t}},pn=class{constructor(e,t,n=1){this.unitId=e,this.unitType=t,this.amount=n}},mn=class{constructor(e){this.requestor=e}},hn=class{constructor(e){this.recipient=e}},gn=class{constructor(e){this.tile=e}},_n=class{constructor(e,t){this.targetID=e,this.troops=t}};function vn(e,t){return Number.isFinite(e)?Math.min(e,t):t}var yn=class{constructor(e,t){this.dst=e,this.troops=t}},bn=class{constructor(e,t,n,r){this.unit=e,this.tile=t,this.rocketDirectionUp=n,this.amount=r}},xn=class{constructor(e){this.targetID=e}},Sn=class{constructor(e,t){this.recipient=e,this.emoji=t}},Cn=class{constructor(e,t){this.recipient=e,this.gold=t}},wn=class{constructor(e,t){this.recipient=e,this.troops=t}},Tn=class{constructor(e,t,n){this.recipient=e,this.quickChatKey=t,this.target=n}},En=class{constructor(e,t){this.target=e,this.action=t}},Dn=class{constructor(e){this.action=e}},On=class{constructor(e){this.unitId=e}},kn=class{constructor(e){this.attackID=e}},An=class{constructor(e){this.unitID=e}},jn=class{constructor(e,t){this.winner=e,this.allPlayersStats=t}},Mn=class{constructor(e){this.stats=e}},Nn=class{constructor(e,t){this.reported=e,this.reason=t}},Pn=class{constructor(e){this.reported=e}},Fn=class{constructor(e,t){this.tick=e,this.hash=t}},In=class{constructor(e){this.gameID=e}},Ln=class{constructor(e,t){this.unitIds=e,this.tile=t}},Rn=e=>`pool-redirect:${e}`,zn=`pool-redirect-from`,Bn=class e{static{this.RECONNECT_MAX_ATTEMPTS=10}static{this.RECONNECT_BASE_DELAY_MS=1e3}static{this.RECONNECT_MAX_DELAY_MS=15e3}constructor(e,n){this.lobbyConfig=e,this.eventBus=n,this.socket=null,this.buffer=[],this.pingInterval=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.connectionRefused=!1,this.isSessionReady=!1,this.zbinCtx=null,this.unsubscribers=[],this.isLocal=this.lobbyConfig.gameRecord!==void 0||this.lobbyConfig.gameStartInfo?.config.gameType===s.Singleplayer,this.subscribe(dn,e=>this.onSendAllianceRequest(e)),this.subscribe(mn,e=>this.onAllianceRejectUIEvent(e)),this.subscribe(hn,e=>this.onSendAllianceExtensionIntent(e)),this.subscribe(fn,e=>this.onBreakAllianceRequestUIEvent(e)),this.subscribe(gn,e=>this.onSendSpawnIntentEvent(e)),this.subscribe(_n,e=>this.onSendAttackIntent(e)),this.subscribe(pn,e=>this.onSendUpgradeStructureIntent(e)),this.subscribe(yn,e=>this.onSendBoatAttackIntent(e)),this.subscribe(xn,e=>this.onSendTargetPlayerIntent(e)),this.subscribe(Sn,e=>this.onSendEmojiIntent(e)),this.subscribe(Cn,e=>this.onSendDonateGoldIntent(e)),this.subscribe(wn,e=>this.onSendDonateTroopIntent(e)),this.subscribe(Tn,e=>this.onSendQuickChatIntent(e)),this.subscribe(En,e=>this.onSendEmbargoIntent(e)),this.subscribe(Dn,e=>this.onSendEmbargoAllIntent(e)),this.subscribe(bn,e=>this.onBuildUnitIntent(e)),this.subscribe(un,e=>this.onPauseGameIntent(e)),this.subscribe(jn,e=>this.onSendWinnerEvent(e)),this.subscribe(Mn,e=>this.onSendLiveStatsEvent(e)),this.subscribe(Nn,e=>this.onSendPlayerReportEvent(e)),this.subscribe(Fn,e=>this.onSendHashEvent(e)),this.subscribe(kn,e=>this.onCancelAttackIntentEvent(e)),this.subscribe(An,e=>this.onCancelBoatIntentEvent(e)),this.subscribe(Ln,e=>{this.onMoveWarshipEvent(e)}),this.subscribe(On,e=>this.onSendDeleteUnitIntent(e)),this.subscribe(le,e=>this.onSendKickPlayerIntent(e)),this.subscribe(P,e=>this.onSendUpdateGameConfigIntent(e)),this.subscribe(t,e=>this.onSendToggleGameStartTimer(e)),this.subscribe(O,e=>{this.lobbyConfig.spectator=e.spectator,this.sendMsg({type:`spectate`,spectator:e.spectator})})}subscribe(e,t){this.eventBus.on(e,t),this.unsubscribers.push(()=>this.eventBus.off(e,t))}startPing(){this.isLocal||(this.pingInterval??=window.setInterval(()=>{this.socket!==null&&this.socket.readyState===WebSocket.OPEN&&this.sendMsg({type:`ping`,sentAt:Math.floor(performance.now())})},5*1e3))}stopPing(){this.pingInterval&&=(window.clearInterval(this.pingInterval),null)}connect(e,t){this.isLocal?this.connectLocal(e,t):this.connectRemote(e,t)}updateCallback(e,t){this.isLocal?this.localServer.updateCallback(e,t):(this.onconnect=e,this.onmessage=t)}connectLocal(e,t){this.localServer=new cn(this.lobbyConfig,this.lobbyConfig.gameRecord!==void 0,this.eventBus),this.localServer.updateCallback(e,t),this.localServer.start()}connectRemote(e,t){if(this.connectionRefused)return;this.isSessionReady=!1,this.startPing(),this.killExistingSocket();let n;try{n=I.gameWorkerPath(this.lobbyConfig.gameID)}catch(e){if(!(e instanceof fe))throw e;console.warn(`No server for game`,this.lobbyConfig.gameID,e),this.handleConnectionRefused(Le.Unknown);return}let r=new WebSocket(`${I.gameWsBase(this.lobbyConfig.gameID)}/${n}`);this.socket=r;let i=null;this.socket.binaryType=`arraybuffer`,this.onconnect=e,this.onmessage=t,this.socket.onopen=()=>{if(i=Date.now(),console.log(`Connected to game server!`),this.socket===null){console.error(`socket is null`);return}e()},this.socket.onmessage=e=>{this.reconnectAttempts=0,this.cancelReconnect();try{let t=ze(new Uint8Array(e.data),this.zbinCtx??void 0);if(t.type===`redirect`){this.handlePoolRedirect(t.gameID);return}if(t.type===`start`&&(this.zbinCtx=Ge(t.gameStartInfo.players)),t.type===`lobby_info`||t.type===`start`){let e=sessionStorage.getItem(zn);e!==null&&(sessionStorage.removeItem(Rn(e)),sessionStorage.removeItem(zn))}this.isSessionReady=!0,this.flushBuffer(),this.onmessage(t)}catch(t){let n=e.data instanceof ArrayBuffer?`${e.data.byteLength} bytes`:typeof e.data;console.error(`Error in onmessage handler:`,t,`frame:`,n);return}},this.socket.onerror=()=>{this.socket!==null&&this.socket.close()},this.socket.onclose=e=>{this.isSessionReady=!1;let t=He(r.url,e,i);if(e.code===Ie.Normal)console.log(`Game socket ${t}`);else{let n=Be(e.code)?`not retrying`:`reconnecting`;console.warn(`Game socket ${t}; ${n}`)}if(Be(e.code)){e.code===Ie.Normal?(this.connectionRefused=!0,this.stopPing()):this.handleConnectionRefused(e.reason);return}this.scheduleReconnect()}}handlePoolRedirect(e){let t=this.lobbyConfig.gameID,n=Rn(t);if(sessionStorage.getItem(n)!==null){this.handleConnectionRefused(Le.PoolRedirect);return}sessionStorage.setItem(n,`1`),sessionStorage.setItem(zn,t),window.location.href=I.gamePath(e)}handleConnectionRefused(e){if(this.connectionRefused)return;if(this.connectionRefused=!0,this.stopPing(),e===Le.WrongWorker&&!Se()){let e=this.lobbyConfig.gameID,t=`wrong-worker-redirect:${e}`;if(sessionStorage.getItem(t)===null){sessionStorage.setItem(t,`1`),window.location.href=`${I.gameNavigateBase(e)}/game/${e}${window.location.search}`;return}}let t=Ue(e)?e:Le.Unknown;this.showTerminalDialog(v(`error_modal.connection_refused`,{reason:v(t)}))}showTerminalDialog(e){we(e,{variant:`warning`,confirmText:v(`win_modal.exit`),cancelText:v(`common.close`)}).then(e=>{e&&(window.location.href=E())})}reconnect(){if(this.isLocal){this.connect(this.onconnect,this.onmessage);return}this.scheduleReconnect()}scheduleReconnect(){if(this.connectionRefused||this.reconnectTimeout!==null||this.socket?.readyState===WebSocket.CONNECTING)return;if(this.reconnectAttempts>=e.RECONNECT_MAX_ATTEMPTS){console.warn(`giving up after ${this.reconnectAttempts} reconnect attempts`),this.connectionRefused=!0,this.stopPing(),this.showTerminalDialog(v(`error_modal.connection_lost`));return}this.reconnectAttempts++;let t=e.reconnectDelay(this.reconnectAttempts);console.log(`reconnect attempt ${this.reconnectAttempts}/${e.RECONNECT_MAX_ATTEMPTS} in ${t} ms`),this.reconnectTimeout=window.setTimeout(()=>{this.reconnectTimeout=null,this.connectRemote(this.onconnect,this.onmessage)},t)}static reconnectDelay(t){if(t<=1)return 0;let n=Math.min(e.RECONNECT_MAX_DELAY_MS,e.RECONNECT_BASE_DELAY_MS*2**(t-2));return Math.round(n*(.75+Math.random()*.5))}cancelReconnect(){this.reconnectTimeout!==null&&(window.clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null)}turnComplete(){this.isLocal&&this.localServer.turnComplete()}async joinGame(){let e=this.lobbyConfig.creatorToken??await ee();delete this.lobbyConfig.creatorToken,this.sendMsg({type:`join`,gameID:this.lobbyConfig.gameID,username:this.lobbyConfig.playerName,clanTag:this.lobbyConfig.playerClanTag??null,cosmetics:this.lobbyConfig.cosmetics,turnstileToken:this.lobbyConfig.turnstileToken,token:e,spectator:this.lobbyConfig.spectator,gitCommit:I.gitCommit(),platform:ge()})}async rejoinGame(e){this.sendMsg({type:`rejoin`,gameID:this.lobbyConfig.gameID,lastTurn:e,token:await ee(),gitCommit:I.gitCommit()})}leaveGame(){for(let e of this.unsubscribers.splice(0))e();if(this.isLocal){this.localServer.endGame();return}this.connectionRefused=!0,this.stopPing(),this.cancelReconnect(),this.socket!==null&&(this.socket.readyState===WebSocket.OPEN?console.log(`on stop: leaving game`):console.log(`WebSocket is not open. Current state:`,this.socket.readyState),this.killExistingSocket())}onSendAllianceRequest(e){this.sendIntent({type:`allianceRequest`,recipient:e.recipient.id()})}onAllianceRejectUIEvent(e){this.sendIntent({type:`allianceReject`,requestor:e.requestor.id()})}onBreakAllianceRequestUIEvent(e){this.sendIntent({type:`breakAlliance`,recipient:e.recipient.id()})}onSendAllianceExtensionIntent(e){this.sendIntent({type:`allianceExtension`,recipient:e.recipient.id()})}onSendSpawnIntentEvent(e){this.sendIntent({type:`spawn`,tile:e.tile})}onSendAttackIntent(e){this.isSendableTroops(`attack`,e.troops)&&this.sendIntent({type:`attack`,targetID:e.targetID,troops:e.troops})}onSendBoatAttackIntent(e){this.isSendableTroops(`boat`,e.troops)&&this.sendIntent({type:`boat`,troops:e.troops,dst:e.dst})}onSendUpgradeStructureIntent(e){this.sendIntent({type:`upgrade_structure`,unit:e.unitType,unitId:e.unitId,amount:e.amount})}onSendTargetPlayerIntent(e){this.sendIntent({type:`targetPlayer`,target:e.targetID})}onSendEmojiIntent(e){this.sendIntent({type:`emoji`,recipient:e.recipient===`AllPlayers`?Te:e.recipient.id(),emoji:e.emoji})}onSendDonateGoldIntent(e){this.sendIntent({type:`donate_gold`,recipient:e.recipient.id(),gold:e.gold?Number(e.gold):null})}onSendDonateTroopIntent(e){this.sendIntent({type:`donate_troops`,recipient:e.recipient.id(),troops:e.troops})}onSendQuickChatIntent(e){this.sendIntent({type:`quick_chat`,recipient:e.recipient.id(),quickChatKey:e.quickChatKey,target:e.target})}onSendEmbargoIntent(e){this.sendIntent({type:`embargo`,targetID:e.target.id(),action:e.action})}onSendEmbargoAllIntent(e){this.sendIntent({type:`embargo_all`,action:e.action})}onBuildUnitIntent(e){this.sendIntent({type:`build_unit`,unit:e.unit,tile:e.tile,rocketDirectionUp:e.rocketDirectionUp,amount:e.amount})}onPauseGameIntent(e){this.sendIntent({type:`toggle_pause`,paused:e.paused})}onSendWinnerEvent(e){this.isLocal||this.socket?.readyState===WebSocket.OPEN?this.sendMsg({type:`winner`,winner:e.winner,allPlayersStats:e.allPlayersStats}):console.log(`WebSocket is not open. Current state:`,this.socket?.readyState)}onSendLiveStatsEvent(e){(this.isLocal||this.socket?.readyState===WebSocket.OPEN)&&this.sendMsg({type:`live_stats`,stats:e.stats})}onSendPlayerReportEvent(e){if(!this.isLocal){if(this.socket?.readyState!==WebSocket.OPEN){console.log(`WebSocket is not open, dropping report. Current state:`,this.socket?.readyState);return}this.sendMsg({type:`report`,reported:e.reported,reason:e.reason}),this.eventBus.emit(new Pn(e.reported))}}onSendHashEvent(e){this.isLocal||this.socket?.readyState===WebSocket.OPEN?this.sendMsg({type:`hash`,turnNumber:e.tick,hash:e.hash}):console.log(`WebSocket is not open. Current state:`,this.socket?.readyState)}onCancelAttackIntentEvent(e){this.sendIntent({type:`cancel_attack`,attackID:e.attackID})}onCancelBoatIntentEvent(e){this.sendIntent({type:`cancel_boat`,unitID:e.unitID})}onMoveWarshipEvent(e){this.sendIntent({type:`move_warship`,unitIds:e.unitIds,tile:e.tile})}onSendDeleteUnitIntent(e){this.sendIntent({type:`delete_unit`,unitId:e.unitId})}onSendKickPlayerIntent(e){this.sendIntent({type:`kick_player`,targetClientID:e.target})}onSendUpdateGameConfigIntent(e){this.sendIntent({type:`update_game_config`,config:e.config})}onSendToggleGameStartTimer(e){this.sendIntent({type:`toggle_game_start_timer`})}isSendableTroops(e,t){return Number.isFinite(t)&&t>=0?!0:(console.error(Error(`Dropped ${e} intent with invalid troops: ${t}`)),!1)}sendIntent(e){let t={type:`intent`,intent:e};this.sendMsg(t)}flushBuffer(){if(!(this.socket===null||this.socket.readyState!==WebSocket.OPEN))for(;this.buffer.length>0;){console.log(`sending dropped message`);let e=this.buffer.shift();if(e===void 0){console.warn(`msg is undefined`);continue}this.socket.send(qe(e,this.zbinCtx??void 0))}}sendMsg(e){if(this.connectionRefused)return;if(this.isLocal){this.localServer.onMessage(e);return}else if(this.socket===null)return;let t=e.type===`join`||e.type===`rejoin`||e.type===`ping`;this.socket.readyState===WebSocket.OPEN?!t&&(!this.isSessionReady||this.buffer.length>0)?this.buffer.push(e):this.socket.send(qe(e,this.zbinCtx??void 0)):(console.warn(`socket not ready, buffering and reconnecting`),this.buffer.push(e),this.scheduleReconnect())}killExistingSocket(){if(this.isSessionReady=!1,this.socket!==null){this.socket.onmessage=null,this.socket.onopen=null,this.socket.onclose=null,this.socket.onerror=null;try{(this.socket.readyState===WebSocket.OPEN||this.socket.readyState===WebSocket.CONNECTING)&&this.socket.close()}catch(e){console.warn(`Error while closing WebSocket:`,e)}this.socket=null}}},Vn=1.5,Hn=4096;function Un(e,t,n){let r=new Map;for(let n of e){let e=n%t,i=(n-e)/t,a=r.get(i);a===void 0?r.set(i,{min:e,max:e}):(e<a.min&&(a.min=e),e>a.max&&(a.max=e))}let i=[...r.keys()].sort((e,t)=>e-t),a=[];for(let e of i){let t=r.get(e),n=t.max-t.min+1,i=a[a.length-1];if(i&&i.y+i.h===e){let e=Math.min(i.x,t.min),r=Math.max(i.x+i.w-1,t.max),a=(r-e+1)*(i.h+1),o=i.sourceArea+n,s=a-o;if(a<=o*Vn||s<=Hn){i.x=e,i.w=r-e+1,i.h++,i.sourceArea=o;continue}}a.push({x:t.min,y:e,w:n,h:1,sourceArea:n})}let o=0;for(let e of a)o+=e.w*e.h;let s=new Uint8Array(o),c=Array(a.length),l=0;for(let e=0;e<a.length;e++){let{x:r,y:i,w:o,h:u}=a[e];for(let e=0;e<u;e++){let a=(i+e)*t;for(let e=0;e<o;e++)s[l++]=n(a+r+e)}c[e]={x:r,y:i,w:o,h:u}}return{rects:c,bytes:s}}function Wn(e,t){t.changedTiles?(t.changedTiles.length>0&&e.uploadLiveDelta(t.tileState,t.changedTiles),t.trailDirtyRowMax>=0&&e.uploadLiveTrailDelta(t.trailState,t.trailDirtyRowMin,t.trailDirtyRowMax)):e.uploadTileAndTrailState(t.tileState,t.trailState),e.updateSpiralRibbons(t.spiralRibbons),t.railroadDirty&&(e.uploadRailroadState(t.railroadState),t.revealedRailTiles.length>0&&e.applyRailroadDust(t.revealedRailTiles)),e.updateUnits(t.units,t.tick),t.structuresDirty&&e.updateStructures(t.units),t.events.deadUnits.length>0&&e.applyDeadUnits(t.events.deadUnits),t.events.conquestEvents.length>0&&e.applyConquestEvents(t.events.conquestEvents),t.events.bonusEvents.length>0&&e.applyBonusEvents(t.events.bonusEvents),e.updateAttackRings(t.attackRings),e.updateNukeTelegraphs(t.nukeTelegraphs),e.updateNames(t.names,t.players,!1,t.playerStatus),t.relationsDirty&&e.updateRelations(t.relationMatrix,t.relationSize),e.setSAMAllianceClusters(t.allianceClusters)}var Gn=function(e){return e[e.Engine=0]=`Engine`,e[e.TailEngine=1]=`TailEngine`,e[e.Carriage=2]=`Carriage`,e}({}),Kn=function(e){return e[e.Human=0]=`Human`,e[e.Bot=1]=`Bot`,e[e.Nation=2]=`Nation`,e}({}),qn=[.6,.1,1],Jn=`Transport`,Yn=`Trade Ship`,Xn=`Warship`,Zn=`Atom Bomb`,Qn=`Hydrogen Bomb`,$n=`MIRV`,er=`SAMMissile`,tr=`Shell`,nr=`MIRV Warhead`,rr=`Train`,ir=`City`,ar=`Port`,or=`Factory`,sr=`Defense Post`,cr=`SAM Launcher`,lr=`Missile Silo`,ur=new Set([ir,ar,or,sr,cr,lr]),dr=new Set([Zn,Qn,$n]),fr=new Set([Zn,Qn,$n,nr]),pr=new Set([Jn,Zn,Qn,$n,nr]),mr={[Zn]:{inner:12,outer:30},[Qn]:{inner:80,outer:100},[nr]:{inner:12,outer:18}},hr=[Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,ir,ar,or,sr,cr,lr,rr],gr=4096;function B(){return gr}function V(e){let t=/^#?([0-9a-fA-F]{6})$/.exec(e.trim());if(!t)return null;let n=parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}var _r=V(Je.terrain.oceanColor),vr=V(Je.terrain.backgroundColor);function yr(e,t,n,r){let i=r?.backgroundColor,a=r?.oceanColor,o=r?.sandColor,s=r?.plainsColor,c=r?.highlandColor,l=r?.mountainColor,u=(e&128)!=0,d=(e&64)!=0,f=e&31,p,m,h,g={ocean:a??_r,shoreWater:[100,143,255],sand:o??[204,203,158],plains:s??[190,220,138],highland:c??[200,183,138],mountain:l??[230,230,230],peak:i??vr};if(u&&f===31)[p,m,h]=g.peak;else if(u&&d)[p,m,h]=g.sand;else if(u)if(f<10){let e=g.plains;p=e[0],m=e[1]-2*f,h=e[2]}else if(f<20){let e=g.highland,t=f-10;p=Math.min(255,e[0]+2*t),m=Math.min(255,e[1]+2*t),h=Math.min(255,e[2]+2*t)}else{let e=g.mountain,t=Math.floor(f/2);p=Math.min(255,e[0]+t),m=Math.min(255,e[1]+t),h=Math.min(255,e[2]+t)}else if(d){let e=a??_r;p=Math.round(.7*e[0]+76.5),m=Math.round(.7*e[1]+76.5),h=Math.round(.7*e[2]+76.5)}else{let e=Math.min(f,10),t=g.ocean;p=Math.max(0,t[0]-e),m=Math.max(0,t[1]-e),h=Math.max(0,t[2]-e)}t[n]=p,t[n+1]=m,t[n+2]=h,t[n+3]=255}function br(e,t,n,r){let i=new Uint8Array(t*n*4);for(let a=0;a<t*n;a++)yr(e[a],i,a*4,r);return i}var xr=32;function Sr(e){return e.map(e=>Pe(e)).filter(e=>e.isValid()).slice(0,8).map(e=>{let{r:t,g:n,b:r}=e.toRgb();return[t/255,n/255,r/255]})}function Cr(e,t){let n=Sr(e.colors),r,i,a;e.type===`transition`?(r=1,i=e.frequency,a=0):e.type===`spiral`?(r=2,i=e.rotationSpeed,a=0):(r=0,i=e.colorSize,a=e.movementSpeed);let o=[n.length,r,i,a];for(let e=0;e<8;e++){let r=e*4,i=n[e];t[r]=i?i[0]:0,t[r+1]=i?i[1]:0,t[r+2]=i?i[2]:0,t[r+3]=o[e]??0}}var wr=B(),Tr=150/255,Er=[...D,`structures`,`warship`,`train`,`railroad`];function Dr(e,t,n,r){let i=n.toRgb(),a=t*4;e[a]=i.r/255,e[a+1]=i.g/255,e[a+2]=i.b/255,e[a+3]=Tr;let o=r.toRgb(),s=wr*4+t*4;e[s]=o.r/255,e[s+1]=o.g/255,e[s+2]=o.b/255,e[s+3]=1}function Or(e,t,n,r){let i=n*4;if(e.fill(0,i,i+4),r?.patternData)try{let a=g(r.patternData,me);e[i]=1,e[i+1]=a.width,e[i+2]=a.height,e[i+3]=a.scale,t.set(a.bytes.slice(3),n*1024)}catch(e){console.warn(`Failed to decode territory pattern`,e)}}function kr(e,t,n){let r=t?.[n];if(!r)return;let i=w(e,n,r.name);if(!(!i||i.effectType!==n)&&!(!a(i)&&i.effectType!==`structures`&&i.effectType!==`warship`&&i.effectType!==`train`&&i.effectType!==`railroad`))return i.attributes}function Ar(e,t,n,r){let i=n*8,a=!1;for(let n=0;n<8;n++){let o=((i+n)*wr+t)*4;for(let t=0;t<4;t++){let i=r===null?0:r[n*4+t];e[o+t]!==i&&(e[o+t]=i,a=!0)}}return a}var jr=new Float32Array(xr);function Mr(e,t,n,r){let i=!1;return Er.forEach((a,o)=>{let s=n(a);if(a===`nukeTrail`){let e=s?.type===`spiral`?Sr(s.colors):[];s?.type===`spiral`&&e.length>0?r.setNukeTrailSpiral(t,{radius:s.radius,strands:s.strands,rotationSpeed:s.rotationSpeed,colors:e}):r.clearNukeTrailSpiral(t)}let c=null;s!==void 0&&(Cr(s,jr),c=jr),Ar(e,t,o,c)&&(i=!0)}),i}async function Nr(){let{default:e}=await pe(async()=>{let{default:e}=await import(`./Worker.worker-BUEGN4mw.js`);return{default:e}},[],import.meta.url);return new e}var Pr=class{constructor(e,t,n){this.gameStartInfo=e,this.clientID=t,this.snapshotToRestore=n,this.worker=null,this.isInitialized=!1,this.messageHandlers=new Map}handleWorkerMessage(e){let t=e.data;switch(t.type){case`game_update`:this.gameUpdateCallback&&t.gameUpdate&&this.gameUpdateCallback(t.gameUpdate);break;case`game_update_batch`:if(this.gameUpdateCallback&&t.gameUpdates)for(let e of t.gameUpdates)this.gameUpdateCallback(e);break;case`game_error`:this.gameUpdateCallback&&t.error&&this.gameUpdateCallback(t.error);break;default:t.id&&this.messageHandlers.has(t.id)&&(this.messageHandlers.get(t.id)(t),this.messageHandlers.delete(t.id));break}}async initialize(){let{gameMap:e,gameMapSize:t}=this.gameStartInfo.config,n=Nr(),r;try{r=await Ae(ke,e,t)}catch(e){throw n.then(e=>e.terminate(),()=>{}),e}let i=await n;return this.worker=i,i.addEventListener(`message`,this.handleWorkerMessage.bind(this)),new Promise((e,t)=>{let n=S();this.messageHandlers.set(n,n=>{n.type===`initialized`?(this.isInitialized=!0,e()):n.type===`init_error`&&(this.cleanup(),t(Error(n.error)))});let a={type:`init`,id:n,gameStartInfo:this.gameStartInfo,clientID:this.clientID,map:r,snapshot:this.snapshotToRestore};i.postMessage(a,Oe(r)),setTimeout(()=>{this.isInitialized||(this.cleanup(),t(Error(`Worker initialization timeout`)))},6e4)})}start(e){if(!this.isInitialized)throw Error(`Failed to initialize pathfinder`);this.gameUpdateCallback=e}sendTurn(e){if(!this.isInitialized)throw Error(`Worker not initialized`);this.worker.postMessage({type:`turn`,turn:e})}snapshot(e){return new Promise((t,n)=>{if(!this.isInitialized){n(Error(`Worker not initialized`));return}let r=S();this.messageHandlers.set(r,e=>{e.type===`snapshot_result`&&(e.snapshot===null?n(Error(`Snapshot failed`)):t(e.snapshot))}),this.worker.postMessage({type:`snapshot`,id:r,gitCommit:e})})}playerProfile(e){return new Promise((t,n)=>{if(!this.isInitialized){n(Error(`Worker not initialized`));return}let r=S();this.messageHandlers.set(r,e=>{e.type===`player_profile_result`&&e.result!==void 0&&t(e.result)}),this.worker.postMessage({type:`player_profile`,id:r,playerID:e})})}humanStats(){return new Promise((e,t)=>{if(!this.isInitialized){t(Error(`Worker not initialized`));return}let n=S(),r=e=>{clearTimeout(e),this.messageHandlers.delete(n)},i=setTimeout(()=>{r(i),console.warn(`human_stats request timed out (request ${n})`),t(Error(`human_stats request timed out`))},5e3);this.messageHandlers.set(n,t=>{t.type===`human_stats_result`&&(r(i),e(t.result))}),this.worker.postMessage({type:`human_stats`,id:n})})}playerBorderTiles(e){return new Promise((t,n)=>{if(!this.isInitialized){n(Error(`Worker not initialized`));return}let r=S();this.messageHandlers.set(r,e=>{e.type===`player_border_tiles_result`&&e.result!==void 0&&t(e.result)}),this.worker.postMessage({type:`player_border_tiles`,id:r,playerID:e})})}playerInteraction(e,t,n,r){return new Promise((i,a)=>{if(!this.isInitialized){a(Error(`Worker not initialized`));return}let o=S(),s=e=>{clearTimeout(e),this.messageHandlers.delete(o)},c=setTimeout(()=>{s(c),console.warn(`player_actions request timed out (request ${o})`),a(Error(`player_actions request timed out`))},5e3);this.messageHandlers.set(o,e=>{e.type===`player_actions_result`?(s(c),i(e.result)):e.type===`player_actions_error`&&(s(c),a(Error(e.error)))}),this.worker.postMessage({type:`player_actions`,id:o,playerID:e,x:t,y:n,units:r})})}playerBuildables(e,t,n,r){return new Promise((i,a)=>{if(!this.isInitialized){a(Error(`Worker not initialized`));return}let o=S();this.messageHandlers.set(o,e=>{e.type===`player_buildables_result`&&e.result!==void 0&&i(e.result)}),this.worker.postMessage({type:`player_buildables`,id:o,playerID:e,x:t,y:n,units:r})})}attackClusteredPositions(e,t){return new Promise((n,r)=>{if(!this.isInitialized){r(Error(`Worker not initialized`));return}let i=S(),a=setTimeout(()=>{this.messageHandlers.delete(i),r(Error(`attack_clustered_positions request timed out`))},5e3);this.messageHandlers.set(i,e=>{if(clearTimeout(a),e.type!==`attack_clustered_positions_result`){r(Error(`Unexpected message type for attackClusteredPositions: ${e.type}`));return}n(e.attacks.map(e=>({id:e.id,positions:e.positions.map(e=>new Ee(e.x,e.y))})))}),this.worker.postMessage({type:`attack_clustered_positions`,id:i,playerID:e,attackID:t})})}transportShipSpawn(e,t){return new Promise((n,r)=>{if(!this.isInitialized){r(Error(`Worker not initialized`));return}let i=S();this.messageHandlers.set(i,e=>{e.type===`transport_ship_spawn_result`&&e.result!==void 0&&n(e.result)}),this.worker.postMessage({type:`transport_ship_spawn`,id:i,playerID:e,targetTile:t})})}cleanup(){this.worker?.terminate(),this.messageHandlers.clear(),this.gameUpdateCallback=void 0}},Fr=class{constructor(e,t,n,r,i,a,o){this.view=e,this.gameMap=t,this.userSettings=n,this.gameMapType=r,this.gameMapSize=i,this.mapLoader=a,this.abortSignal=o}init(){this.gameMap.layers?.length&&Ir(this.gameMapType,this.gameMapSize,this.mapLoader,this.gameMap.layers).then(e=>{this.abortSignal.aborted||(this.view.setMapLayers(this.gameMap.layers,e),this.applyVisibility(),this.applyAlpha())}).catch(e=>console.warn(`[MapLayerController] Failed to load layer images:`,e))}applyVisibility(){let e=this.userSettings.graphicsOverrides();if(!(!e.mapLayerVisibility||!this.gameMap.layers))for(let t of this.gameMap.layers){let n=e.mapLayerVisibility[t.id];n!==void 0&&this.view.setLayerVisible(t.id,n)}}applyAlpha(){let e=this.userSettings.graphicsOverrides();if(this.gameMap.layers)for(let t of this.gameMap.layers){let n=e.mapLayerAlpha?.[t.id];n===void 0?t.alpha!==void 0&&this.view.setLayerAlpha(t.id,t.alpha):this.view.setLayerAlpha(t.id,n)}}};async function Ir(e,t,n,r){let i=n.getMapData(e),a=t===ne.Compact,o=new Map;return await Promise.all(r.map(async t=>{try{o.set(t.id,await i.layerImage(t.id,a))}catch(n){console.warn(`[MapLoader] Failed to load layer "${t.id}" for map ${e}: ${n}`)}})),o}var Lr=class extends Error{constructor(e){super(`WebGL context lost during shader ${e}. The GPU process crashed, reset, or ran out of memory — this is not a shader error.`),this.phase=e,this.name=`GLContextLostError`}};function Rr(e){let t=e.getExtension(`WEBGL_debug_renderer_info`);return t?String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)):`unknown`}function zr(e,t,n,r){if(e.isContextLost())return new Lr(t);let i=n?`\n${n}`:` (no info log, glGetError=${e.getError()})`;return Error(`${t===`compile`?`Shader compile`:`Program link`} error [${r}, GPU: ${Rr(e)}]:${i}`)}function Br(e,t,n,r){let i=e.createShader(t);if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=zr(e,`compile`,e.getShaderInfoLog(i),r);throw e.deleteShader(i),t}return i}function H(e,t,n,r){let i=Br(e,e.VERTEX_SHADER,t,`${r} vertex`),a=Br(e,e.FRAGMENT_SHADER,n,`${r} fragment`),o=e.createProgram();if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),!e.getProgramParameter(o,e.LINK_STATUS)){let t=zr(e,`link`,e.getProgramInfoLog(o),r);throw e.deleteProgram(o),t}return o}function U(e,t){let n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.filter??e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t.filter??e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrap??e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrap??e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t.internalFormat,t.width,t.height,0,t.format,t.type,t.data),n}function Vr(e){let t=e.createVertexArray();e.bindVertexArray(t);let n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null),t}function W(e,t){let n=Object.entries(t).map(([e,t])=>`#define ${e} ${t}`).join(`
`);return e.replace(`#version 300 es`,`#version 300 es\n${n}`)}function Hr(e,t,n){return e.bindFramebuffer(e.FRAMEBUFFER,t.fbo),e.viewport(0,0,t.w,t.h),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),n(),e.bindFramebuffer(e.FRAMEBUFFER,null),t.tex}function Ur(e,t,n,r){e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,t,n),r()}function Wr(e,t,n){let r=U(e,{width:t,height:n,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:null,filter:e.LINEAR}),i=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),{fbo:i,tex:r,w:t,h:n}}function Gr(e,t,n){let r=e.createVertexArray();e.bindVertexArray(r);let i=new Float32Array([0,0,t,0,0,n,0,n,t,0,t,n]),a=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null),r}var Kr=B(),qr=/swiftshader|llvmpipe|software/i;function Jr(e,t={}){let n=e.getContext(`webgl2`,{...t,failIfMajorPerformanceCaveat:!0});if(n){let e=Rr(n);if(qr.test(e))return{gl:null,status:`software`,renderer:e};let t=Number(n.getParameter(n.MAX_TEXTURE_SIZE));return t<Kr?{gl:n,status:`limited`,renderer:e,maxTextureSize:t}:{gl:n,status:`ok`}}let r=document.createElement(`canvas`).getContext(`webgl2`);return r?{gl:null,status:`software`,renderer:Rr(r)}:{gl:null,status:`unsupported`,renderer:``}}var Yr=class extends Error{constructor(e,t){super(`WebGL2 unavailable: ${e}`),this.glStatus=e,this.renderer=t,this.name=`GLUnavailableError`}};function Xr(e,t,n){window.gtag?.(`event`,`gl_init`,{status:e,renderer:e===`ok`?``:t,...n!==void 0&&{max_texture_size:n}})}function Zr(e){document.querySelector(`webgl-gate`)||pe(async()=>{let{WebGLGate:e}=await import(`./WebGLGate-C64_9ivI.js`);return{WebGLGate:e}},__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(({WebGLGate:t})=>{if(document.querySelector(`webgl-gate`))return;let n=new t;n.status=e,document.body.appendChild(n)})}function Qr(){return Math.min(window.devicePixelRatio||2,2)}var $r=.2,ei=20,ti=.7,ni=3,ri=class{constructor(e,t){this.canvasW=1,this.canvasH=1,this.mat=new Float32Array(9),this.dirty=!0,this.needsInitialFit=!0,this.mapW=e,this.mapH=t,this.offsetX=e/2,this.offsetY=t/2,this.zoom=1}resize(e,t){let n=Qr();this.canvasW=Math.round(e*n),this.canvasH=Math.round(t*n),this.needsInitialFit&&this.fitMap(),this.dirty=!0}fitMap(){this.offsetX=this.mapW/2,this.offsetY=this.mapH/2;let e=this.canvasW/this.mapW,t=this.canvasH/this.mapH;this.zoom=Math.min(e,t)*.9,this.dirty=!0,this.needsInitialFit=!1}focusBBox(e,t,n,r,i=1.4){this.offsetX=(e+n+1)/2,this.offsetY=(t+r+1)/2;let a=n-e+1,o=r-t+1,s=this.canvasW/a,c=this.canvasH/o;this.zoom=Math.max(ti,Math.min(ni,Math.min(s,c)/i)),this.clampOffset(),this.dirty=!0}panTo(e,t){this.offsetX=e,this.offsetY=t,this.clampOffset(),this.dirty=!0}panBy(e,t){this.offsetX+=e,this.offsetY+=t,this.clampOffset(),this.dirty=!0}setCameraState(e,t,n){this.offsetX=e,this.offsetY=t,this.zoom=n,this.needsInitialFit=!1,this.dirty=!0}zoomBy(e){this.zoom=Math.max($r,Math.min(ei,this.zoom*e)),this.clampOffset(),this.dirty=!0}zoomTo(e){this.zoom=Math.max($r,Math.min(ei,e)),this.clampOffset(),this.dirty=!0}zoomAtScreen(e,t,n){let r=this.screenToWorld(t,n);this.zoom=Math.max($r,Math.min(ei,this.zoom*e));let i=this.screenToWorld(t,n);this.offsetX+=r.x-i.x,this.offsetY+=r.y-i.y,this.clampOffset(),this.dirty=!0}getMatrix(){if(this.dirty){let e=this.zoom*2/this.canvasW,t=this.zoom*-2/this.canvasH,n=-this.offsetX*e,r=-this.offsetY*t,i=this.mat;i[0]=e,i[1]=0,i[2]=0,i[3]=0,i[4]=t,i[5]=0,i[6]=n,i[7]=r,i[8]=1,this.dirty=!1}return this.mat}screenToWorld(e,t){let n=Qr(),r=e*n/this.canvasW*2-1,i=-(t*n/this.canvasH*2-1),a=this.zoom*2/this.canvasW,o=this.zoom*-2/this.canvasH;return{x:(r- -this.offsetX*a)/a,y:(i- -this.offsetY*o)/o}}worldToScreen(e,t){let n=Qr();return{x:this.zoom*(e-this.offsetX)/n+this.canvasW/(2*n),y:this.zoom*(t-this.offsetY)/n+this.canvasH/(2*n)}}clampOffset(){let e=this.canvasW/(2*this.zoom),t=this.canvasH/(2*this.zoom);this.offsetX=Math.max(-e,Math.min(this.mapW+e,this.offsetX)),this.offsetY=Math.max(-t,Math.min(this.mapH+t,this.offsetY))}};function ii(e,t,n){return t<=0?e:e+Math.floor(e*t*n/100)}var ai=`#version 300 es
precision highp float;

uniform vec2 uBarSize;
uniform float uBorderWidth;
uniform vec3 uThresholds;
uniform vec3 uColorRed;
uniform vec3 uColorOrange;
uniform vec3 uColorYellow;
uniform vec3 uColorGreen;
uniform float uSolid;       // 1.0 = veterancy pip: fill solid with uSolidColor
uniform vec3 uSolidColor;

in vec2 vLocalPos;
flat in float vProgress;

out vec4 fragColor;

void main() {
  // Veterancy pips are simple solid-filled rectangles (no border/threshold).
  if (uSolid > 0.5) {
    fragColor = vec4(uSolidColor, 1.0);
    return;
  }

  float x = vLocalPos.x;
  float y = vLocalPos.y;
  float w = uBarSize.x;
  float h = uBarSize.y;

  // Border on each side
  float bw = uBorderWidth;
  bool inBorder = x < bw || x > w - bw || y < bw || y > h - bw;

  // Colored fill region
  float fillWidth = vProgress * (w - 2.0 * bw);
  bool inFill = !inBorder && (x - bw) < fillWidth;

  if (inFill) {
    vec3 color;
    if (vProgress < uThresholds.x) color = uColorRed;
    else if (vProgress < uThresholds.y) color = uColorOrange;
    else if (vProgress < uThresholds.z) color = uColorYellow;
    else color = uColorGreen;
    fragColor = vec4(color, 1.0);
  } else {
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
}
`,oi=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;        // unit quad [0,1]x[0,1]
layout(location = 1) in vec3 aInstData;   // x, y, progress

uniform mat3 uCamera;
uniform vec2 uBarSize;     // (width, height) in world tiles
uniform vec2 uBarOffset;   // offset from unit center in tiles
uniform float uSolid;      // 1.0 = veterancy pip mode (aInstData.z is a stack slot)
uniform float uPipStride;  // vertical spacing between stacked pips, in tiles

out vec2 vLocalPos;        // [0, barWidth] x [0, barHeight]
flat out float vProgress;

void main() {
  float worldX = aInstData.x;
  float worldY = aInstData.y;
  vProgress = aInstData.z;

  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  vec2 offset = uBarOffset;
  // In pip mode each instance is one stacked rank bar; raise it by its slot.
  offset.y -= uSolid * aInstData.z * uPipStride;
  vec2 barOrigin = center + offset;
  vec2 worldPos = barOrigin + aPos * uBarSize;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vLocalPos = aPos * uBarSize;
}
`,si=3,ci=si*4,li=class{constructor(e,t,n,r){this.config=r,this.maxBars=2048,this.healthCount=0,this.progressCount=0,this.veterancyCount=0,this.gl=e,this.settings=n,this.mapW=t.mapWidth,this.warshipMaxHealth=r.unitInfo(m.Warship).maxHealth??0,this.veterancyHealthBonus=r.warshipVeterancyHealthBonus(),this.program=H(e,oi,ai,`BarPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uBarSize=e.getUniformLocation(this.program,`uBarSize`),this.uBarOffset=e.getUniformLocation(this.program,`uBarOffset`),this.uBorderWidth=e.getUniformLocation(this.program,`uBorderWidth`),this.uThresholds=e.getUniformLocation(this.program,`uThresholds`),this.uColorRed=e.getUniformLocation(this.program,`uColorRed`),this.uColorOrange=e.getUniformLocation(this.program,`uColorOrange`),this.uColorYellow=e.getUniformLocation(this.program,`uColorYellow`),this.uColorGreen=e.getUniformLocation(this.program,`uColorGreen`),this.uSolid=e.getUniformLocation(this.program,`uSolid`),this.uSolidColor=e.getUniformLocation(this.program,`uSolidColor`),this.uPipStride=e.getUniformLocation(this.program,`uPipStride`),this.healthData=new Float32Array(this.maxBars*si),this.progressData=new Float32Array(this.maxBars*si),this.veterancyData=new Float32Array(this.maxBars*si),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),this.instanceBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf),e.bufferData(e.ARRAY_BUFFER,this.maxBars*ci,e.DYNAMIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,ci,0),e.vertexAttribDivisor(1,1),e.bindVertexArray(null)}updateBars(e,t,n){this.healthCount=0,this.progressCount=0,this.veterancyCount=0;for(let t of e.values()){if(t.health===null||t.health<=0)continue;let e=ii(this.warshipMaxHealth,t.veterancy,this.veterancyHealthBonus);t.health<e&&this.pushHealth(t,t.health/e),t.veterancy>0&&this.pushVeterancy(t)}for(let e of t.values()){if(!e.isActive)continue;let t=this.computeStructureProgress(e,n);t!==null&&this.pushProgress(e,t)}}draw(e){if(this.healthCount===0&&this.progressCount===0&&this.veterancyCount===0)return;let t=this.gl,n=this.settings.bar;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1f(this.uSolid,0),t.uniform1f(this.uBorderWidth,n.borderWidth),t.uniform3f(this.uThresholds,n.threshold1,n.threshold2,n.threshold3),t.uniform3f(this.uColorRed,n.colorRedR,n.colorRedG,n.colorRedB),t.uniform3f(this.uColorOrange,n.colorOrangeR,n.colorOrangeG,n.colorOrangeB),t.uniform3f(this.uColorYellow,n.colorYellowR,n.colorYellowG,n.colorYellowB),t.uniform3f(this.uColorGreen,n.colorGreenR,n.colorGreenG,n.colorGreenB),t.bindVertexArray(this.vao),this.healthCount>0&&(t.uniform2f(this.uBarSize,n.healthBarW,n.healthBarH),t.uniform2f(this.uBarOffset,-n.healthBarW/2,n.healthBarOffsetY),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.healthData.subarray(0,this.healthCount*si)),t.drawArraysInstanced(t.TRIANGLES,0,6,this.healthCount)),this.progressCount>0&&(t.uniform2f(this.uBarSize,n.progressBarW,n.progressBarH),t.uniform2f(this.uBarOffset,-n.progressBarW/2,n.progressBarOffsetY),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.progressData.subarray(0,this.progressCount*si)),t.drawArraysInstanced(t.TRIANGLES,0,6,this.progressCount)),this.veterancyCount>0&&(t.uniform1f(this.uSolid,1),t.uniform3f(this.uSolidColor,n.veterancyR,n.veterancyG,n.veterancyB),t.uniform1f(this.uPipStride,n.veterancyPipH+n.veterancyPipGap),t.uniform2f(this.uBarSize,n.veterancyPipW,n.veterancyPipH),t.uniform2f(this.uBarOffset,n.veterancyPipOffsetX,n.veterancyPipOffsetY),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.veterancyData.subarray(0,this.veterancyCount*si)),t.drawArraysInstanced(t.TRIANGLES,0,6,this.veterancyCount)),t.bindVertexArray(null)}dispose(){this.gl.deleteProgram(this.program),this.gl.deleteBuffer(this.instanceBuf),this.gl.deleteVertexArray(this.vao)}pushHealth(e,t){if(this.healthCount>=this.maxBars)return;let n=this.healthCount*si;this.healthData[n]=e.pos%this.mapW,this.healthData[n+1]=(e.pos-this.healthData[n])/this.mapW,this.healthData[n+2]=t,this.healthCount++}pushVeterancy(e){let t=e.pos%this.mapW,n=(e.pos-t)/this.mapW;for(let r=0;r<e.veterancy;r++){if(this.veterancyCount>=this.maxBars)return;let e=this.veterancyCount*si;this.veterancyData[e]=t,this.veterancyData[e+1]=n,this.veterancyData[e+2]=r,this.veterancyCount++}}pushProgress(e,t){if(this.progressCount>=this.maxBars)return;let n=this.progressCount*si,r=e.pos%this.mapW;this.progressData[n]=r,this.progressData[n+1]=(e.pos-r)/this.mapW,this.progressData[n+2]=t,this.progressCount++}computeStructureProgress(e,t){if(e.markedForDeletion!==!1){let n=e.markedForDeletion-t;return Math.max(0,Math.min(1,n/this.config.deletionMarkDuration()))}if(e.underConstruction&&e.constructionStartTick!==null){let n=this.config.unitInfo(e.unitType).constructionDuration??50,r=t-e.constructionStartTick;return Math.min(1,Math.max(0,r/n))}if(e.unitType===`Missile Silo`||e.unitType===`SAM Launcher`){let n=this.missileReadiness(e,t);if(n<1)return n}return null}missileReadiness(e,t){let n=e.level,r=e.missileTimerQueue.length;if(r===0)return 1;let i=n-r,a=e.unitType===`SAM Launcher`?this.config.SAMCooldown():this.config.SiloCooldown(),o=i/n;for(let r of e.missileTimerQueue){let e=t-r;o+=e/a/n}return Math.max(0,Math.min(1,o))}},ui=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uTileTex;   // R16UI — tile state per cell
uniform usampler2D uRelationTex; // R8UI — relationship matrix (ownerA × ownerB)
uniform vec2 uMapSize;
uniform uint uHighlightOwner;
uniform int uHighlightThicken; // Chebyshev radius for highlight expansion

out vec4 fragColor;

uint getOwner(ivec2 c) {
  if (c.x < 0 || c.y < 0 || c.x >= int(uMapSize.x) || c.y >= int(uMapSize.y))
    return 0u;
  return texelFetch(uTileTex, c, 0).r & uint(OWNER_MASK);
}

void main() {
  ivec2 tc = ivec2(gl_FragCoord.xy);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  uint owner = raw & uint(OWNER_MASK);

  // --- Border detection ---
  float borderType = 0.0; // 0=interior, ~0.5=normal border, ~1.0=highlight border
  uint maxRel = 0u;       // 0=neutral, 1=friendly, 2=embargo

  if (owner != 0u) {
    // Cardinal neighbor check (standard border)
    uint n = getOwner(tc + ivec2( 0, -1));
    uint s = getOwner(tc + ivec2( 0,  1));
    uint w = getOwner(tc + ivec2(-1,  0));
    uint e = getOwner(tc + ivec2( 1,  0));

    bool isBorder = (n != owner) || (s != owner) || (w != owner) || (e != owner);

    if (isBorder) {
      borderType = 0.5; // normal border

      // Relationship lookup for each cardinal neighbor with different owner
      if (n != owner && n != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, n), 0).r);
      if (s != owner && s != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, s), 0).r);
      if (w != owner && w != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, w), 0).r);
      if (e != owner && e != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, e), 0).r);
    }

    // Highlight: N-tile Chebyshev expansion
    if (uHighlightOwner != 0u && owner == uHighlightOwner) {
      if (isBorder) {
        borderType = 1.0; // upgrade to highlight border
      } else {
        // Check expanding rings for any tile with different owner
        for (int d = 1; d <= 10; d++) {
          if (d > uHighlightThicken) break;
          bool found = false;
          // Check all tiles at Chebyshev distance d
          for (int i = -d; i <= d; i++) {
            // Top/bottom edges
            if (getOwner(tc + ivec2(i, -d)) != owner) { found = true; break; }
            if (getOwner(tc + ivec2(i,  d)) != owner) { found = true; break; }
          }
          if (!found) {
            for (int i = -d + 1; i <= d - 1; i++) {
              // Left/right edges (excluding corners already checked)
              if (getOwner(tc + ivec2(-d, i)) != owner) { found = true; break; }
              if (getOwner(tc + ivec2( d, i)) != owner) { found = true; break; }
            }
          }
          if (found) {
            borderType = 1.0; // highlight border
            break;
          }
        }
      }
    }
  }

  // A = relationship: 0.0=neutral, 0.5=friendly, 1.0=embargo
  float relation = float(maxRel) * 0.5;
  // G channel is unused (formerly emberIntensity; ember is now computed in
  // FalloutBloomPass and FalloutLightPass). B channel is unused (defense post
  // proximity is now computed per-tile by DefenseCoveragePass).
  fragColor = vec4(borderType, 0.0, 0.0, relation);
}
`,di=`#version 300 es
layout(location = 0) in vec2 aPos;
void main() {
  gl_Position = vec4(aPos * 2.0 - 1.0, 0.0, 1.0);
}
`,fi=4095,pi=8192,mi={OWNER_MASK:4095,FALLOUT_BIT:13,DEFENSE_BIT:14},hi=`#version 300 es
precision highp float;
precision highp int;

// Per-patch tile coord (integer in [0, mapW) × [0, mapH))
layout(location = 0) in vec2 aPos;

uniform vec2 uMapSize;

void main() {
  // Position the point at the center of the target pixel so a 1×1 point
  // rasterizes into exactly that texel. Same trick as TileScatterPass.
  vec2 ndc = ((aPos + 0.5) / uMapSize) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,gi=2,_i=4096,vi=class{constructor(e,t,n,r,i,a,o){this.highlightOwner=0,this.patchCount=0,this.patchCapacity=_i,this.gpuCapacityBytes=0,this.gl=e,this.mapW=t,this.mapH=n,this.settings=o,this.tileTex=i,this.relationTex=a,this.program=H(e,hi,W(ui,{...mi}),`BorderScatterPass`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uHighlightOwner=e.getUniformLocation(this.program,`uHighlightOwner`),this.uHighlightThicken=e.getUniformLocation(this.program,`uHighlightThicken`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uRelationTex`),1),this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.vbo=e.createBuffer(),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.vbo),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,gi*4,0),e.bindVertexArray(null),this.patchData=new Float32Array(_i*gi)}push(e,t){this.patchCount>=this.patchCapacity&&this.grow();let n=this.patchCount*gi;this.patchData[n]=e,this.patchData[n+1]=t,this.patchCount++}pushWithNeighbors(e,t,n,r){if(!(this.highlightOwner!==0&&(n===this.highlightOwner||r===this.highlightOwner))){this.push(e,t),e>0&&this.push(e-1,t),e<this.mapW-1&&this.push(e+1,t),t>0&&this.push(e,t-1),t<this.mapH-1&&this.push(e,t+1);return}let i=Math.max(1,Math.floor(this.settings.mapOverlay.highlightThicken)),a=Math.max(0,e-i),o=Math.min(this.mapW-1,e+i),s=Math.max(0,t-i),c=Math.min(this.mapH-1,t+i);for(let e=s;e<=c;e++)for(let t=a;t<=o;t++)this.push(t,e)}get count(){return this.patchCount}clear(){this.patchCount=0}setHighlightOwner(e){this.highlightOwner=e}flush(){if(this.patchCount===0)return;let e=this.gl,t=this.patchCount*gi,n=t*4,r=this.patchData.subarray(0,t);e.bindBuffer(e.ARRAY_BUFFER,this.vbo),n>this.gpuCapacityBytes?(e.bufferData(e.ARRAY_BUFFER,r,e.STREAM_DRAW),this.gpuCapacityBytes=n):e.bufferSubData(e.ARRAY_BUFFER,0,r);let i=this.settings.mapOverlay;e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.BLEND),e.useProgram(this.program),e.uniform2f(this.uMapSize,this.mapW,this.mapH),e.uniform1ui(this.uHighlightOwner,this.highlightOwner),e.uniform1i(this.uHighlightThicken,Math.floor(i.highlightThicken)),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.relationTex),e.bindVertexArray(this.vao),e.drawArrays(e.POINTS,0,this.patchCount),e.bindFramebuffer(e.FRAMEBUFFER,null),this.patchCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteFramebuffer(this.fbo),e.deleteBuffer(this.vbo),e.deleteVertexArray(this.vao)}grow(){let e=this.patchCapacity*2,t=new Float32Array(e*gi);t.set(this.patchData),this.patchData=t,this.patchCapacity=e}},yi=1024,bi=class{constructor(e,t,n,r,i){this.highlightOwner=0,this.globalDirty=!0,this.gl=e,this.settings=i,this.mapW=t,this.mapH=n,this.program=H(e,di,W(ui,{...mi}),`BorderComputePass`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uHighlightOwner=e.getUniformLocation(this.program,`uHighlightOwner`),this.uHighlightThicken=e.getUniformLocation(this.program,`uHighlightThicken`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uRelationTex`),1),this.relationTex=U(e,{width:yi,height:yi,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.borderTex=U(e,{width:t,height:n,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.borderFbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.borderFbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.borderTex,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.vao=Vr(e),this._tileTex=r,this.scatter=new vi(e,t,n,this.borderTex,r,this.relationTex,i)}setHighlightOwner(e){e!==this.highlightOwner&&(this.highlightOwner=e,this.scatter.setHighlightOwner(e),this.globalDirty=!0)}updateRelations(e,t){let n=this.gl,r=Math.min(t,yi);n.bindTexture(n.TEXTURE_2D,this.relationTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,r,r,n.RED_INTEGER,n.UNSIGNED_BYTE,e),this.globalDirty=!0}markGlobalDirty(){this.globalDirty=!0}patchTile(e,t,n,r){if(!this.globalDirty){if(this.scatter.count>2048){this.globalDirty=!0,this.scatter.clear();return}this.scatter.pushWithNeighbors(e,t,n,r)}}getBorderTex(){return this.borderTex}draw(){if(this.globalDirty){this.globalDirty=!1,this.scatter.clear();let e=this.gl,t=this.settings.mapOverlay;e.bindFramebuffer(e.FRAMEBUFFER,this.borderFbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.BLEND),e.useProgram(this.program),e.uniform2f(this.uMapSize,this.mapW,this.mapH),e.uniform1ui(this.uHighlightOwner,this.highlightOwner),e.uniform1i(this.uHighlightThicken,Math.floor(t.highlightThicken)),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this._tileTex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.relationTex),e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6)}else this.scatter.count>0&&this.scatter.flush()}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.borderTex),e.deleteTexture(this.relationTex),e.deleteFramebuffer(this.borderFbo),this.scatter.dispose()}},xi=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uTileTex;
uniform sampler2D uPalette;
uniform sampler2D uBorderTex;     // RGBA8 — border flags from BorderComputePass
uniform sampler2D uDefenseCoverageTex; // R8 — 1.0 = defended by same-owner post
uniform sampler2D uAffiliation;   // 256×2 RGBA8 — affiliation colors (row 0 = border)
uniform vec2 uMapSize;
uniform int uAltView;
uniform float uHighlightBrighten;
uniform float uDefenseCheckerDarken;
uniform float uEmbargoTintRatio;
uniform float uFriendlyTintRatio;
uniform vec3 uEmbargoTint;
uniform vec3 uFriendlyTint;

in vec2 vWorldPos;
out vec4 fragColor;

void main() {
  ivec2 tc = ivec2(floor(vWorldPos));
  if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  uint owner = raw & uint(OWNER_MASK);

  // Read pre-computed border flags from BorderComputePass
  vec4 borderData = texelFetch(uBorderTex, tc, 0);
  float borderType = borderData.r;      // 0=interior, ~0.5=normal, ~1.0=highlight
  bool defense = texelFetch(uDefenseCoverageTex, tc, 0).r > 0.5; // same-owner defense post nearby
  float relation = borderData.a;        // 0.0=neutral, ~0.5=friendly, ~1.0=embargo

  bool isBorder = borderType > 0.25;
  bool isHighlightBorder = borderType > 0.75;

  // --- Border stamp: full-brightness border color ---
  if (isBorder && owner != 0u) {
    vec3 bc;
    if (uAltView != 0) {
      // Alt-view: pure affiliation color from palette row 0
      bc = texelFetch(uAffiliation, ivec2(int(owner), 0), 0).rgb;
    } else {
      float u = (float(owner) + 0.5) / float(PALETTE_SIZE);
      bc = texture(uPalette, vec2(u, 0.75)).rgb;
      if (isHighlightBorder) {
        bc = mix(bc, vec3(1.0), uHighlightBrighten);
      }
      // Relationship tint (applied BEFORE defense checkerboard, matching game)
      if (relation > 0.75) {
        bc = mix(bc, uEmbargoTint, uEmbargoTintRatio);
      } else if (relation > 0.25) {
        bc = mix(bc, uFriendlyTint, uFriendlyTintRatio);
      }
      // Defense bonus: checkerboard darken (applied AFTER tint, matching game)
      if (defense) {
        bool checker = ((tc.x + tc.y) & 1) == 1;
        if (checker) bc *= uDefenseCheckerDarken;
      }
    }
    fragColor = vec4(bc, 1.0);
    return;
  }

  discard;
}
`,Si=`#version 300 es
precision highp float;
layout(location = 0) in vec2 aPos;
uniform mat3 uCamera;
out vec2 vWorldPos;
void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
  vWorldPos = aPos;
}
`,Ci=class{constructor(e,t,n,r,i,a,o){this.defenseCoverageTex=null,this.affiliationTex=null,this.altView=!1,this.gl=e,this.settings=o,this.mapW=t,this.mapH=n,this.tileTex=r,this.paletteTex=i,this.borderTex=a,this.program=H(e,Si,W(xi,{PALETTE_SIZE:B(),...mi}),`BorderStampPass`),this.uCam=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uHighlightBrighten=e.getUniformLocation(this.program,`uHighlightBrighten`),this.uDefenseCheckerDarken=e.getUniformLocation(this.program,`uDefenseCheckerDarken`),this.uEmbargoTintRatio=e.getUniformLocation(this.program,`uEmbargoTintRatio`),this.uFriendlyTintRatio=e.getUniformLocation(this.program,`uFriendlyTintRatio`),this.uEmbargoTint=e.getUniformLocation(this.program,`uEmbargoTint`),this.uFriendlyTint=e.getUniformLocation(this.program,`uFriendlyTint`),this.uAltView=e.getUniformLocation(this.program,`uAltView`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),1),e.uniform1i(e.getUniformLocation(this.program,`uBorderTex`),2),e.uniform1i(e.getUniformLocation(this.program,`uAffiliation`),3),e.uniform1i(e.getUniformLocation(this.program,`uDefenseCoverageTex`),4),this.vao=Gr(e,t,n)}setAltView(e){this.altView=e}setAffiliationTex(e){this.affiliationTex=e}setDefenseCoverageTex(e){this.defenseCoverageTex=e}draw(e){let t=this.gl,n=this.settings.mapOverlay;t.useProgram(this.program),t.uniformMatrix3fv(this.uCam,!1,e),t.uniform2f(this.uMapSize,this.mapW,this.mapH),t.uniform1f(this.uHighlightBrighten,n.highlightBrighten),t.uniform1f(this.uDefenseCheckerDarken,n.defenseCheckerDarken),t.uniform1f(this.uEmbargoTintRatio,n.embargoTintRatio),t.uniform1f(this.uFriendlyTintRatio,n.friendlyTintRatio),t.uniform3f(this.uEmbargoTint,n.embargoTintR,n.embargoTintG,n.embargoTintB),t.uniform3f(this.uFriendlyTint,n.friendlyTintR,n.friendlyTintG,n.friendlyTintB),t.uniform1i(this.uAltView,+!!this.altView),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tileTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.paletteTex),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.borderTex),this.affiliationTex&&(t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,this.affiliationTex)),this.defenseCoverageTex&&(t.activeTexture(t.TEXTURE4),t.bindTexture(t.TEXTURE_2D,this.defenseCoverageTex)),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},wi=`#version 300 es
precision highp float;

uniform vec2 uMapSize;
uniform float uCellSize;
uniform float uZoom;
uniform float uFontSize;
uniform sampler2D uGlyphTex;
uniform float uOpacity;

in vec2 vWorldPos;
out vec4 fragColor;

const float GLYPH_COUNT = 36.0;  // 0-9, A-Z

void main() {
  vec2 wp = vWorldPos;
  if (wp.x < 0.0 || wp.y < 0.0 || wp.x >= uMapSize.x || wp.y >= uMapSize.y)
    discard;

  float cs = uCellSize;
  float px = 1.0 / uZoom;       // 1 screen pixel in world units
  float lineW = px * 1.25;

  // Grid cell index + position within cell
  int cellCol = int(floor(wp.x / cs));
  int cellRow = int(floor(wp.y / cs));
  float localX = wp.x - float(cellCol) * cs;
  float localY = wp.y - float(cellRow) * cs;

  // --- Grid lines (at cell boundaries) ---
  if (localX < lineW || localY < lineW) {
    fragColor = vec4(1.0, 1.0, 1.0, uOpacity);
    return;
  }

  // --- Labels (only when cells are large enough on screen) ---
  float cellScreenPx = cs * uZoom;
  if (cellScreenPx < 60.0) discard;

  float fontSize = clamp(uFontSize + (uZoom - 1.0) * 1.2, uFontSize * 0.9, uFontSize * 1.6);
  float gw = fontSize * 0.6 * px;   // glyph width in world units
  float gh = fontSize * px;          // glyph height
  float pad = 8.0 * px;              // padding from cell corner

  float lx = localX - pad;
  float ly = localY - pad;

  // Compute label characters: row alpha + col digits
  // Atlas indices: 0-9 = digits '0'-'9', 10-35 = letters 'A'-'Z'
  int c0, c1 = -1, c2 = -1, c3 = -1;
  int nc;

  // Row part (A, B, ..., Z, AA, AB, ...)
  if (cellRow < 26) {
    c0 = cellRow + 10;
    nc = 1;
  } else {
    c0 = (cellRow / 26 - 1) + 10;
    c1 = (cellRow % 26) + 10;
    nc = 2;
  }

  // Col part (1-indexed: 1, 2, ..., 50)
  int colNum = cellCol + 1;
  if (nc == 1) {
    if (colNum < 10) { c1 = colNum; nc = 2; }
    else { c1 = colNum / 10; c2 = colNum % 10; nc = 3; }
  } else {
    if (colNum < 10) { c2 = colNum; nc = 3; }
    else { c2 = colNum / 10; c3 = colNum % 10; nc = 4; }
  }

  float totalW = float(nc) * gw;

  // Check if on actual glyph
  if (lx < 0.0 || ly < 0.0 || lx >= totalW || ly >= gh) {
    discard;
  }

  int ci = int(floor(lx / gw));
  if (ci < nc) {
    int g;
    if (ci == 0) g = c0;
    else if (ci == 1) g = c1;
    else if (ci == 2) g = c2;
    else g = c3;

    float cu = fract(lx / gw);
    float cv = ly / gh;
    float au = (float(g) + cu) / GLYPH_COUNT;
    vec4 gColor = texture(uGlyphTex, vec2(au, cv));
    fragColor = gColor.a * vec4(gColor.rgb, uOpacity);
    return;
  }
}
`,Ti=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;

out vec2 vWorldPos;

void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
  vWorldPos = aPos;
}
`,Ei=10,Di=50,Oi=2,ki=24,Ai=36,ji=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`,Mi=class{constructor(e,t,n,r){this.gl=e,this.mapW=t,this.mapH=n,this.cellSize=Ni(t,n),this.settings=r,this.glyphTex=this.createGlyphAtlas(),this.program=H(e,Ti,wi,`CoordinateGridPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uCellSize=e.getUniformLocation(this.program,`uCellSize`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uFontSize=e.getUniformLocation(this.program,`uFontSize`),this.uOpacity=e.getUniformLocation(this.program,`uOpacity`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uGlyphTex`),0),this.vao=Gr(e,t,n)}draw(e,t){let n=this.gl;n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform2f(this.uMapSize,this.mapW,this.mapH),n.uniform1f(this.uCellSize,this.cellSize),n.uniform1f(this.uZoom,t),n.uniform1f(this.uFontSize,this.settings.altView.gridFontSize),n.uniform1f(this.uOpacity,this.settings.mapOverlay.coordinateGridOpacity),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.glyphTex),n.bindVertexArray(this.vao),n.drawArrays(n.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao),e.deleteTexture(this.glyphTex)}createGlyphAtlas(){let e=document.createElement(`canvas`);e.width=36*ki,e.height=Ai;let t=e.getContext(`2d`);t.clearRect(0,0,e.width,e.height),t.strokeStyle=`black`,t.lineWidth=4,t.fillStyle=`white`,t.font=`bold ${Ai-8}px monospace`,t.textAlign=`center`,t.textBaseline=`middle`;for(let e=0;e<36;e++)t.strokeText(ji[e],e*ki+ki/2,Ai/2),t.fillText(ji[e],e*ki+ki/2,Ai/2);let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}};function Ni(e,t){let n=Math.min(e,t)/Ei,r=Math.max(1,Math.round(t/n)),i=Math.max(1,Math.round(e/n));if(i>Di){let n=Math.floor(Di*t/e);r=Math.max(Oi,Math.min(r,n)),i=Di}return Math.min(e/i,t/r)}var Pi=`#version 300 es
precision highp float;

in vec2 vLocal; // [-1, +1]

uniform vec3 uColor;
uniform float uIsDiagonal;
uniform float uAlpha;

uniform sampler2D uStatusAtlas;
uniform float uHasAtlas;

out vec4 fragColor;

const float LINE_HALF_W = 0.08; // line half-width (normalized to quad)
const float GAP = 0.15;         // center gap radius (normalized)
const float AA = 0.02;          // anti-alias width

const vec3 OUTLINE_BLACK = vec3(0.0);
const vec3 ALLIANCE_GREEN = vec3(0.0, 0.9, 0.2); // Official Alliance Green

// 8 unit directions for the outline dilation sample ring (matching status-icon.frag.glsl)
const vec2 kRing[8] = vec2[8](
  vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
  vec2(0.707, 0.707), vec2(-0.707, 0.707),
  vec2(0.707, -0.707), vec2(-0.707, -0.707)
);

void main() {
  if (uIsDiagonal > 0.5) {
    // 1. Calculate Diagonal X with black outline
    float d1 = abs(vLocal.x - vLocal.y) * 0.7071;
    float d2 = abs(vLocal.x + vLocal.y) * 0.7071;
    float minD = min(d1, d2);
    float circleMask = 1.0 - smoothstep(0.85, 0.98, length(vLocal));
    float lineAlpha = (1.0 - smoothstep(0.08, 0.16, minD)) * circleMask;
    float outlineAlpha = (1.0 - smoothstep(0.20, 0.30, minD)) * circleMask;
    float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
    vec3 xCol = mix(OUTLINE_BLACK, uColor, blend);
    float xAlpha = outlineAlpha;

    // 2. Alliance Handshake Icon with 8-ring dark outline (matching status-icon.frag.glsl)
    vec4 iconTexel = vec4(0.0);
    if (uHasAtlas > 0.5) {
      // Map vLocal [-1.10, +1.10] to icon UV [0, 1] (Y flipped for WebGL)
      vec2 iconUV = vec2(
        (vLocal.x / 1.50) + 0.5,
        1.0 - ((vLocal.y / 1.50) + 0.5)
      );

      if (iconUV.x >= 0.0 && iconUV.x <= 1.0 && iconUV.y >= 0.0 && iconUV.y <= 1.0) {
        // Handshake Icon UV in status-atlas.png (col 0, row 1, cell 256x256, 16px pad)
        // mix(16/768, 240/768, iconUV.x) and mix(272/1024, 496/1024, iconUV.y)
        vec2 atlasUV = vec2(
          mix(0.0208333, 0.3125, iconUV.x),
          mix(0.265625, 0.484375, iconUV.y)
        );
        iconTexel = texture(uStatusAtlas, atlasUV);

        // 8-ring dark outline dilation (matching status-icon.frag.glsl)
        float uStatusOutlinePx = 4.0; // 4px outline radius
        vec2 uStatusTexel = vec2(1.0 / 768.0, 1.0 / 1024.0);
        vec2 sampleStep = uStatusTexel * uStatusOutlinePx;
        float ring = 0.0;
        for (int i = 0; i < 8; i++) {
          ring = max(ring, texture(uStatusAtlas, atlasUV + kRing[i] * sampleStep).a);
        }
        float outlineA = ring * (1.0 - iconTexel.a);
        iconTexel = vec4(mix(OUTLINE_BLACK, iconTexel.rgb, iconTexel.a), max(iconTexel.a, outlineA));
      }
    }

    // 3. Composite Alliance Handshake OVER the Red X reticle
    vec3 finalCol = mix(xCol, iconTexel.rgb, iconTexel.a);
    float finalAlpha = max(xAlpha, iconTexel.a);

    if (finalAlpha < 0.01) discard;
    fragColor = vec4(finalCol, finalAlpha * uAlpha);
  } else {
    float ax = abs(vLocal.x);
    float ay = abs(vLocal.y);

    // Horizontal arm: |y| < lineWidth, |x| > gap
    float hMask = smoothstep(LINE_HALF_W + AA, LINE_HALF_W - AA, ay)
                * smoothstep(GAP - AA, GAP + AA, ax)
                * (1.0 - smoothstep(1.0 - AA, 1.0, ax));

    // Vertical arm: |x| < lineWidth, |y| > gap
    float vMask = smoothstep(LINE_HALF_W + AA, LINE_HALF_W - AA, ax)
                * smoothstep(GAP - AA, GAP + AA, ay)
                * (1.0 - smoothstep(1.0 - AA, 1.0, ay));

    float mask = max(hMask, vMask);
    if (mask < 0.01) discard;

    fragColor = vec4(uColor, mask * 0.9);
  }
}
`,Fi=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos; // [0,1] quad

uniform mat3 uCamera;
uniform vec2 uCenter;    // world tile coords
uniform float uHalfSize; // half-size in pixels (screen space)
uniform vec2 uViewport;  // canvas width, height in pixels

out vec2 vLocal; // [-1, +1]

void main() {
  vLocal = aPos * 2.0 - 1.0;

  // Project center to clip space
  vec3 clip = uCamera * vec3(uCenter + 0.5, 1.0);

  // Offset in screen pixels → NDC
  vec2 pixelToNDC = 2.0 / uViewport;
  gl_Position = vec4(clip.xy + vLocal * uHalfSize * pixelToNDC, 0.0, 1.0);
}
`,Ii=N(`atlases/status-atlas.png`),Li=20,Ri=new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),zi=class{constructor(e){this.statusAtlasTex=null,this.disposed=!1,this.active=!1,this.centerX=0,this.centerY=0,this.canBuild=!1,this.blockedXTile=null,this.gl=e,this.program=H(e,Fi,Pi,`CrosshairPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uHalfSize=e.getUniformLocation(this.program,`uHalfSize`),this.uViewport=e.getUniformLocation(this.program,`uViewport`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.uIsDiagonal=e.getUniformLocation(this.program,`uIsDiagonal`),this.uAlpha=e.getUniformLocation(this.program,`uAlpha`),this.uStatusAtlas=e.getUniformLocation(this.program,`uStatusAtlas`),this.uHasAtlas=e.getUniformLocation(this.program,`uHasAtlas`);let t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{if(!this.gl||this.disposed)return;let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),this.statusAtlasTex=n},t.src=Ii,this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,Ri,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}updateGhostPreview(e){e&&(e.ghostType===`Warship`||e.ghostType===`MIRV`)?(this.active=!0,this.centerX=e.tileX,this.centerY=e.tileY,this.canBuild=e.canBuild||e.canUpgrade):this.active=!1}triggerBlockedFlash(e,t){this.blockedXTile={x:e,y:t,startTime:Date.now(),duration:600}}draw(e){let t=this.gl,n=Date.now();if(this.blockedXTile){let r=n-this.blockedXTile.startTime;if(r<this.blockedXTile.duration){let n=r/this.blockedXTile.duration,i=1-(1-n)*(1-n),a=this.blockedXTile.y-i*2,o=Math.max(0,1-i*i);t.useProgram(this.program),this.statusAtlasTex?(t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.statusAtlasTex),t.uniform1i(this.uStatusAtlas,1),t.uniform1f(this.uHasAtlas,1)):t.uniform1f(this.uHasAtlas,0),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uCenter,this.blockedXTile.x,a),t.uniform1f(this.uHalfSize,Li*2.2),t.uniform2f(this.uViewport,t.drawingBufferWidth,t.drawingBufferHeight),t.uniform3f(this.uColor,1,.05,.05),t.uniform1f(this.uIsDiagonal,1),t.uniform1f(this.uAlpha,o),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}else this.blockedXTile=null}this.active&&(t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uCenter,this.centerX,this.centerY),t.uniform1f(this.uHalfSize,Li),t.uniform2f(this.uViewport,t.drawingBufferWidth,t.drawingBufferHeight),t.uniform1f(this.uIsDiagonal,0),t.uniform1f(this.uAlpha,1),this.canBuild?t.uniform3f(this.uColor,.9,.15,.15):t.uniform3f(this.uColor,.4,.1,.1),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6))}dispose(){this.disposed=!0;let e=this.gl;this.statusAtlasTex&&=(e.deleteTexture(this.statusAtlasTex),null),e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},Bi=class{constructor(e,t,n,r){this.gl=e,this.buf=t,this.floatsPerInstance=r,this.capacity=n,this.data=new Float32Array(n*r),this.bytes=new Uint8Array(this.data.buffer),e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,this.data.byteLength,e.DYNAMIC_DRAW)}ensureCapacity(e){if(e<=this.capacity)return;for(;this.capacity<e;)this.capacity*=2;let t=new Float32Array(this.capacity*this.floatsPerInstance);t.set(this.data),this.data=t,this.bytes=new Uint8Array(t.buffer);let n=this.gl;n.bindBuffer(n.ARRAY_BUFFER,this.buf),n.bufferData(n.ARRAY_BUFFER,this.data.byteLength,n.DYNAMIC_DRAW)}get float32(){return this.data}get uint8(){return this.bytes}get buffer(){return this.buf}dispose(){this.buf!==null&&this.buf!==void 0&&this.gl.deleteBuffer(this.buf)}},Vi=`#version 300 es
precision highp float;
precision highp usampler2D;

// Writes 1.0 into the coverage texture for every tile within \`uRange\` of the
// post being stamped AND owned by that post's owner. The texture is cleared to
// 0 first, so a tile no post touches stays 0. Overlapping circles from the same
// owner compose as a boolean union (1.0 over 1.0 is still 1.0 — no blending);
// circles from other owners discard at this tile and leave it untouched.

uniform usampler2D uTileTex;  // R16UI — tile state per cell
uniform vec2 uMapSize;
uniform float uRange;

flat in vec2 vPostCenter;
flat in float vOwner;

out vec4 fragColor;

void main() {
  ivec2 tc = ivec2(gl_FragCoord.xy);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  // Circle test in tile-integer space (matches the old per-fragment loop).
  float dx = float(tc.x) - vPostCenter.x;
  float dy = float(tc.y) - vPostCenter.y;
  if (dx * dx + dy * dy > uRange * uRange) discard;

  // Same-owner test: only the tile's own owner's posts defend it.
  uint owner = texelFetch(uTileTex, tc, 0).r & uint(OWNER_MASK);
  if (owner != uint(vOwner)) discard;

  fragColor = vec4(1.0);
}
`,Hi=`#version 300 es
precision highp float;

// One instanced quad per defense post. The quad is a box centered on the post,
// sized to cover the post's range; the fragment shader trims it to a circle and
// filters by tile owner. See DefenseCoveragePass.

layout(location = 0) in vec2 aCorner;  // unit quad corner, [0,1]²
layout(location = 1) in vec3 aPost;     // (tileX, tileY, ownerID)

uniform vec2 uMapSize;
uniform float uRange;

flat out vec2 vPostCenter;
flat out float vOwner;

void main() {
  vPostCenter = aPost.xy;
  vOwner = aPost.z;

  // Box spanning [center - range, center + range] in tile coords, plus a
  // 1-tile margin so the boundary tiles at exactly \`range\` are rasterized
  // (their pixel centers sit just past the un-padded edge).
  vec2 tilePos = aPost.xy + (aCorner * 2.0 - 1.0) * (uRange + 1.0);

  // Tile-resolution FBO (viewport = map size), so map straight to clip space.
  vec2 ndc = (tilePos / uMapSize) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
}
`,Ui=3,Wi=128,Gi=class{constructor(e,t,n,r,i){this.count=0,this.fullDirty=!0,this.dirtyList=[],this.gl=e,this.settings=i,this.mapW=t,this.mapH=n,this.tileTex=r,this.blocksX=Math.ceil(t/Wi),this.blocksY=Math.ceil(n/Wi),this.dirtyBlock=new Uint8Array(this.blocksX*this.blocksY),this.fullFallback=Math.floor(this.blocksX*this.blocksY/2),this.program=H(e,Hi,W(Vi,{OWNER_MASK:mi.OWNER_MASK}),`DefenseCoveragePass`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uRange=e.getUniformLocation(this.program,`uRange`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),this.coverageTex=U(e,{width:t,height:n,internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.coverageTex,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.quadBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuf),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW);let a=e.createBuffer();this.instanceBuf=new Bi(e,a,256,Ui),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuf),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,a),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,Ui*4,0),e.vertexAttribDivisor(1,1),e.bindVertexArray(null)}updateDefensePosts(e){this.count=e.length,this.instanceBuf.ensureCapacity(e.length);let t=this.instanceBuf.float32;for(let n=0;n<e.length;n++){let r=e[n],i=n*Ui;t[i]=r.x,t[i+1]=r.y,t[i+2]=r.ownerID}if(e.length>0){let t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf.buffer),t.bufferSubData(t.ARRAY_BUFFER,0,this.instanceBuf.float32,0,e.length*Ui)}this.fullDirty=!0}markTileDirty(e,t){let n=e/Wi|0,r=(t/Wi|0)*this.blocksX+n;this.dirtyBlock[r]===0&&(this.dirtyBlock[r]=1,this.dirtyList.push(r))}markDirty(){this.fullDirty=!0}getCoverageTex(){return this.coverageTex}draw(){if(!this.fullDirty&&this.dirtyList.length===0)return;let e=this.gl;if(e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.BLEND),e.clearColor(0,0,0,0),e.useProgram(this.program),e.uniform2f(this.uMapSize,this.mapW,this.mapH),e.uniform1f(this.uRange,this.settings.mapOverlay.defensePostRange),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.bindVertexArray(this.vao),this.fullDirty||this.dirtyList.length>this.fullFallback)e.disable(e.SCISSOR_TEST),e.clear(e.COLOR_BUFFER_BIT),this.count>0&&e.drawArraysInstanced(e.TRIANGLES,0,6,this.count);else{e.enable(e.SCISSOR_TEST);for(let t of this.dirtyList){let n=t%this.blocksX*Wi,r=(t/this.blocksX|0)*Wi,i=Math.min(Wi,this.mapW-n),a=Math.min(Wi,this.mapH-r);e.scissor(n,r,i,a),e.clear(e.COLOR_BUFFER_BIT),this.count>0&&e.drawArraysInstanced(e.TRIANGLES,0,6,this.count)}e.disable(e.SCISSOR_TEST)}for(let e of this.dirtyList)this.dirtyBlock[e]=0;this.dirtyList.length=0,this.fullDirty=!1,e.bindFramebuffer(e.FRAMEBUFFER,null)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.coverageTex),e.deleteFramebuffer(this.fbo),e.deleteBuffer(this.quadBuf),e.deleteVertexArray(this.vao),this.instanceBuf.dispose()}},Ki=`#version 300 es
precision highp float;
uniform sampler2D uTex;
uniform float uBloomCoverage;
in vec2 vUV;
out vec4 fragColor;
void main() {
  vec4 bloom = texture(uTex, vUV);
  fragColor = bloom * uBloomCoverage;
}
`,qi=`#version 300 es
precision highp float;
precision highp usampler2D;
uniform usampler2D uTileTex;
uniform vec2 uMapSize;
uniform float uTick;
uniform float uTileScale;

uniform float uBroilSpeedCold;
uniform float uBroilSpeedHot;
uniform float uNoiseFreq1;
uniform float uNoiseFreq2;
uniform float uContrastLoCold;
uniform float uContrastLoHot;
uniform float uContrastHiCold;
uniform float uContrastHiHot;
uniform float uMetaFreq;
uniform float uIntensityCold;
uniform float uIntensityHot;
uniform float uMetaInfluenceCold;
uniform float uMetaInfluenceHot;
uniform float uOpacityFadeEnd;
uniform vec3 uBloomColor;
uniform vec3 uParticleColorDark;
uniform vec3 uParticleColorBright;
uniform float uParticleThresholdUnowned;
uniform float uParticleThresholdOwned;
uniform float uParticleFlickerSpeed;
uniform float uParticleStrength;
uniform float uParticleFreshScale;

uniform sampler2D uHeatTex;

out vec4 fragColor;

float hash3(vec3 p) {
  return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
}
float vnoise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash3(i);
  float n100 = hash3(i + vec3(1, 0, 0));
  float n010 = hash3(i + vec3(0, 1, 0));
  float n110 = hash3(i + vec3(1, 1, 0));
  float n001 = hash3(i + vec3(0, 0, 1));
  float n101 = hash3(i + vec3(1, 0, 1));
  float n011 = hash3(i + vec3(0, 1, 1));
  float n111 = hash3(i + vec3(1, 1, 1));
  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
    f.z);
}

void main() {
  // Bloom FBO is mapW/uTileScale × mapH/uTileScale; each output pixel maps
  // to the center tile of its uTileScale×uTileScale block. Still deterministic
  // and camera-independent — just sparser than 1:1.
  ivec2 tc = ivec2(gl_FragCoord.xy * uTileScale);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  if ((raw & (1u << FALLOUT_BIT)) == 0u) discard;
  uint owner = raw & uint(OWNER_MASK);

  float heat = texelFetch(uHeatTex, tc, 0).r;
  vec2 tileCenter = vec2(tc) + 0.5;

  float speed = mix(uBroilSpeedCold, uBroilSpeedHot, heat);
  float t = uTick * speed;

  float n1 = vnoise3(vec3(tileCenter * uNoiseFreq1, t));
  float n2 = vnoise3(vec3(tileCenter * uNoiseFreq2, t * 1.3));
  float broil = n1 * 0.6 + n2 * 0.4;

  float lo = mix(uContrastLoCold, uContrastLoHot, heat);
  float hi = mix(uContrastHiCold, uContrastHiHot, heat);
  broil = smoothstep(lo, hi, broil);

  float meta = vnoise3(vec3(tileCenter * uMetaFreq, t * 0.5));

  float baseIntensity = mix(uIntensityCold, uIntensityHot, heat);
  float metaInfluence = mix(uMetaInfluenceCold, uMetaInfluenceHot, heat);
  float intensity = baseIntensity * mix(1.0, meta, metaInfluence);

  float opacity = smoothstep(0.0, uOpacityFadeEnd, heat);

  fragColor = vec4(uBloomColor, 1.0) * broil * intensity * opacity;

  // Particle dots — sharper per-tile flicker gated by a stochastic hash.
  // (Relocated here from BorderStampPass; this is fallout-domain logic.)
  float h1 = fract(sin(float(tc.x) * 12.9898 + float(tc.y) * 78.233) * 43758.5453);
  float h2 = fract(sin(float(tc.x) * 63.7 + float(tc.y) * 157.3) * 23421.631);
  float pThresh = (owner == 0u) ? uParticleThresholdUnowned : uParticleThresholdOwned;
  if (h2 > pThresh) {
    // Per-tile rate variation breaks the global rhythm so tiles don't all
    // pulse at the same frequency. h1 spans [0,1] → rate spans 0.4×–1.6× base.
    float tileRate = uParticleFlickerSpeed * (0.4 + h1 * 1.2);
    float flick = max(0.0, sin(uTick * tileRate + h1 * 12.0) * 0.8 + 0.2);
    flick *= flick;
    // Dampen when fresh (high heat); ramp to full as heat decays.
    flick *= mix(uParticleFreshScale, 1.0, 1.0 - heat);
    // Fade dots out with the glow. Heat decays to 0, but the fallout bit is
    // permanent on tiles that stay unowned, so without this the dots flicker
    // forever once the bloom is gone.
    flick *= opacity;
    vec3 pc = mix(uParticleColorDark, uParticleColorBright, h1) * flick * uParticleStrength;
    float pa = max(pc.r, max(pc.g, pc.b));
    fragColor += vec4(pc, pa);
  }
}
`,Ji=`#version 300 es
precision highp float;
uniform sampler2D uTex;
uniform vec2 uDir;
in vec2 vUV;
out vec4 fragColor;
const float w[3] = float[3](0.375, 0.25, 0.0625);
void main() {
  vec4 result = texture(uTex, vUV) * w[0];
  for (int i = 1; i < 3; i++) {
    vec2 off = uDir * float(i);
    result += texture(uTex, vUV + off) * w[i];
    result += texture(uTex, vUV - off) * w[i];
  }
  fragColor = result;
}
`,Yi=`#version 300 es
precision highp float;
layout(location = 0) in vec2 aPos;
out vec2 vUV;
void main() {
  gl_Position = vec4(aPos * 2.0 - 1.0, 0.0, 1.0);
  vUV = aPos;
}
`,Xi=`#version 300 es
precision highp float;
// Camera-projected map quad -> tile-space UV. Shared by the bloom/glow
// composites so they sample an offscreen map-sized texture in world space.
layout(location = 0) in vec2 aPos;
uniform mat3 uCamera;
uniform vec2 uMapSize;
out vec2 vUV;
void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
  vUV = aPos / uMapSize;
}
`,Zi=8,Qi=class{constructor(e,t,n,r,i,a){this.gl=e,this.settings=a,this.mapW=t,this.mapH=n,this.tileTex=r,this.heatManager=i,this.extractProg=H(e,di,W(qi,mi),`FalloutBloomPass.extractProg`),this.uExtractMapSize=e.getUniformLocation(this.extractProg,`uMapSize`),this.uExtractTick=e.getUniformLocation(this.extractProg,`uTick`),this.uExtractTileScale=e.getUniformLocation(this.extractProg,`uTileScale`),this.uBroilSpeedCold=e.getUniformLocation(this.extractProg,`uBroilSpeedCold`),this.uBroilSpeedHot=e.getUniformLocation(this.extractProg,`uBroilSpeedHot`),this.uNoiseFreq1=e.getUniformLocation(this.extractProg,`uNoiseFreq1`),this.uNoiseFreq2=e.getUniformLocation(this.extractProg,`uNoiseFreq2`),this.uContrastLoCold=e.getUniformLocation(this.extractProg,`uContrastLoCold`),this.uContrastLoHot=e.getUniformLocation(this.extractProg,`uContrastLoHot`),this.uContrastHiCold=e.getUniformLocation(this.extractProg,`uContrastHiCold`),this.uContrastHiHot=e.getUniformLocation(this.extractProg,`uContrastHiHot`),this.uMetaFreq=e.getUniformLocation(this.extractProg,`uMetaFreq`),this.uIntensityCold=e.getUniformLocation(this.extractProg,`uIntensityCold`),this.uIntensityHot=e.getUniformLocation(this.extractProg,`uIntensityHot`),this.uMetaInfluenceCold=e.getUniformLocation(this.extractProg,`uMetaInfluenceCold`),this.uMetaInfluenceHot=e.getUniformLocation(this.extractProg,`uMetaInfluenceHot`),this.uOpacityFadeEnd=e.getUniformLocation(this.extractProg,`uOpacityFadeEnd`),this.uBloomColor=e.getUniformLocation(this.extractProg,`uBloomColor`),this.uParticleColorDark=e.getUniformLocation(this.extractProg,`uParticleColorDark`),this.uParticleColorBright=e.getUniformLocation(this.extractProg,`uParticleColorBright`),this.uParticleThresholdUnowned=e.getUniformLocation(this.extractProg,`uParticleThresholdUnowned`),this.uParticleThresholdOwned=e.getUniformLocation(this.extractProg,`uParticleThresholdOwned`),this.uParticleFlickerSpeed=e.getUniformLocation(this.extractProg,`uParticleFlickerSpeed`),this.uParticleStrength=e.getUniformLocation(this.extractProg,`uParticleStrength`),this.uParticleFreshScale=e.getUniformLocation(this.extractProg,`uParticleFreshScale`),e.useProgram(this.extractProg),e.uniform1i(e.getUniformLocation(this.extractProg,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.extractProg,`uHeatTex`),1),this.blurProg=H(e,Yi,Ji,`FalloutBloomPass.blurProg`),this.uBlurDir=e.getUniformLocation(this.blurProg,`uDir`),e.useProgram(this.blurProg),e.uniform1i(e.getUniformLocation(this.blurProg,`uTex`),0),this.compositeProg=H(e,Xi,Ki,`FalloutBloomPass.compositeProg`),this.uCompositeCam=e.getUniformLocation(this.compositeProg,`uCamera`),this.uCompositeMapSize=e.getUniformLocation(this.compositeProg,`uMapSize`),this.uBloomCoverage=e.getUniformLocation(this.compositeProg,`uBloomCoverage`),e.useProgram(this.compositeProg),e.uniform1i(e.getUniformLocation(this.compositeProg,`uTex`),0),this.bloomW=Math.max(1,Math.floor(t/Zi)),this.bloomH=Math.max(1,Math.floor(n/Zi)),this.texA=this.createBloomTex(this.bloomW,this.bloomH),this.texB=this.createBloomTex(this.bloomW,this.bloomH),this.fboA=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fboA),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texA,0),this.fboB=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fboB),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texB,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.mapVao=Gr(e,t,n),this.quadVao=Vr(e)}createBloomTex(e,t){let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}draw(e,t){let n=this.gl,r=n.canvas,i=r.width,a=r.height,o=this.mapW,s=this.mapH,c=this.bloomW,l=this.bloomH;n.bindFramebuffer(n.FRAMEBUFFER,this.fboA),n.viewport(0,0,c,l),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.disable(n.BLEND),n.useProgram(this.extractProg),n.uniform2f(this.uExtractMapSize,o,s),n.uniform1f(this.uExtractTick,t),n.uniform1f(this.uExtractTileScale,Zi);let u=this.settings.falloutBloom;n.uniform1f(this.uBroilSpeedCold,u.broilSpeedCold),n.uniform1f(this.uBroilSpeedHot,u.broilSpeedHot),n.uniform1f(this.uNoiseFreq1,u.noiseFreq1),n.uniform1f(this.uNoiseFreq2,u.noiseFreq2),n.uniform1f(this.uContrastLoCold,u.contrastLoCold),n.uniform1f(this.uContrastLoHot,u.contrastLoHot),n.uniform1f(this.uContrastHiCold,u.contrastHiCold),n.uniform1f(this.uContrastHiHot,u.contrastHiHot),n.uniform1f(this.uMetaFreq,u.metaFreq),n.uniform1f(this.uIntensityCold,u.intensityCold),n.uniform1f(this.uIntensityHot,u.intensityHot),n.uniform1f(this.uMetaInfluenceCold,u.metaInfluenceCold),n.uniform1f(this.uMetaInfluenceHot,u.metaInfluenceHot),n.uniform1f(this.uOpacityFadeEnd,u.opacityFadeEnd),n.uniform3f(this.uBloomColor,u.bloomR,u.bloomG,u.bloomB),n.uniform3f(this.uParticleColorDark,u.particleColorDarkR,u.particleColorDarkG,u.particleColorDarkB),n.uniform3f(this.uParticleColorBright,u.particleColorBrightR,u.particleColorBrightG,u.particleColorBrightB),n.uniform1f(this.uParticleThresholdUnowned,u.particleThresholdUnowned),n.uniform1f(this.uParticleThresholdOwned,u.particleThresholdOwned),n.uniform1f(this.uParticleFlickerSpeed,u.particleFlickerSpeed),n.uniform1f(this.uParticleStrength,u.particleStrength),n.uniform1f(this.uParticleFreshScale,u.particleFreshScale),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.tileTex),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.heatManager.getHeatTex()),n.bindVertexArray(this.quadVao),n.drawArrays(n.TRIANGLES,0,6),n.useProgram(this.blurProg),n.bindVertexArray(this.quadVao),n.bindFramebuffer(n.FRAMEBUFFER,this.fboB),n.viewport(0,0,c,l),n.clear(n.COLOR_BUFFER_BIT),n.uniform2f(this.uBlurDir,1/c,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.texA),n.drawArrays(n.TRIANGLES,0,6),n.bindFramebuffer(n.FRAMEBUFFER,this.fboA),n.viewport(0,0,c,l),n.clear(n.COLOR_BUFFER_BIT),n.uniform2f(this.uBlurDir,0,1/l),n.bindTexture(n.TEXTURE_2D,this.texB),n.drawArrays(n.TRIANGLES,0,6),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,i,a),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),n.useProgram(this.compositeProg),n.uniformMatrix3fv(this.uCompositeCam,!1,e),n.uniform2f(this.uCompositeMapSize,o,s),n.uniform1f(this.uBloomCoverage,u.bloomCoverage),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.texA),n.bindVertexArray(this.mapVao),n.drawArrays(n.TRIANGLES,0,6),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)}dispose(){let e=this.gl;e.deleteProgram(this.extractProg),e.deleteProgram(this.blurProg),e.deleteProgram(this.compositeProg),e.deleteFramebuffer(this.fboA),e.deleteFramebuffer(this.fboB),e.deleteTexture(this.texA),e.deleteTexture(this.texB),e.deleteVertexArray(this.mapVao),e.deleteVertexArray(this.quadVao)}},$i=`#version 300 es
precision highp float;
uniform sampler2D uTex;
in vec2 vUV;
out vec4 fragColor;
void main() {
  fragColor = texture(uTex, vUV);
}
`,ea=`#version 300 es
precision highp float;
precision highp usampler2D;
uniform sampler2D uHeatTex;
uniform usampler2D uTileTex;
uniform vec2 uMapSize;
uniform float uTick;
uniform float uTileScale;
uniform vec3 uFalloutLightColor;
uniform float uFalloutLightIntensity;
uniform float uFalloutLightThreshold;
uniform vec3 uEmberLightColor;
uniform float uEmberLightIntensity;
uniform float uParticleThresholdUnowned;
uniform float uParticleThresholdOwned;
uniform float uParticleFlickerSpeed;
uniform float uParticleFreshScale;
out vec4 fragColor;
void main() {
  // FBO is mapW/uTileScale × mapH/uTileScale; each output pixel samples one
  // tile near the center of its uTileScale×uTileScale source block.
  ivec2 tc = ivec2(gl_FragCoord.xy * uTileScale);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  bool fallout = (raw & (1u << FALLOUT_BIT)) != 0u;
  if (!fallout) discard;

  uint owner = raw & uint(OWNER_MASK);
  float heat = texelFetch(uHeatTex, tc, 0).r;

  // Green fallout glow
  vec3 light = vec3(0.0);
  if (heat >= uFalloutLightThreshold) {
    float fi = heat * uFalloutLightIntensity;
    light += uFalloutLightColor * fi;
  }

  // Ember light — compute the same flicker as FalloutBloomPass.extract inline.
  float h1 = fract(sin(float(tc.x) * 12.9898 + float(tc.y) * 78.233) * 43758.5453);
  float h2 = fract(sin(float(tc.x) * 63.7 + float(tc.y) * 157.3) * 23421.631);
  float pThresh = (owner == 0u) ? uParticleThresholdUnowned : uParticleThresholdOwned;
  if (h2 > pThresh) {
    float tileRate = uParticleFlickerSpeed * (0.4 + h1 * 1.2);
    float flick = max(0.0, sin(uTick * tileRate + h1 * 12.0) * 0.8 + 0.2);
    flick *= flick;
    flick *= mix(uParticleFreshScale, 1.0, 1.0 - heat);
    // Fade embers out with the heat. The fallout bit is permanent on tiles
    // that stay unowned, so without this the ember light flickers forever
    // once the blast has cooled.
    flick *= heat;
    light += uEmberLightColor * flick * uEmberLightIntensity;
  }

  float a = max(light.r, max(light.g, light.b));
  if (a < 0.001) discard;
  fragColor = vec4(light, a);
}
`,ta=8,na=class{constructor(e,t,n,r,i,a){this.gl=e,this.settings=a,this.mapW=t,this.mapH=n,this.tileTex=r,this.heatManager=i,this.falloutLightProg=H(e,di,W(ea,mi),`FalloutLightPass.falloutLightProg`),this.uFalloutMapSize=e.getUniformLocation(this.falloutLightProg,`uMapSize`),this.uFalloutLightColor=e.getUniformLocation(this.falloutLightProg,`uFalloutLightColor`),this.uFalloutLightIntensity=e.getUniformLocation(this.falloutLightProg,`uFalloutLightIntensity`),this.uFalloutLightThreshold=e.getUniformLocation(this.falloutLightProg,`uFalloutLightThreshold`),this.uEmberLightColor=e.getUniformLocation(this.falloutLightProg,`uEmberLightColor`),this.uEmberLightIntensity=e.getUniformLocation(this.falloutLightProg,`uEmberLightIntensity`),this.uFalloutTick=e.getUniformLocation(this.falloutLightProg,`uTick`),this.uFalloutTileScale=e.getUniformLocation(this.falloutLightProg,`uTileScale`),this.uParticleThresholdUnowned=e.getUniformLocation(this.falloutLightProg,`uParticleThresholdUnowned`),this.uParticleThresholdOwned=e.getUniformLocation(this.falloutLightProg,`uParticleThresholdOwned`),this.uParticleFlickerSpeed=e.getUniformLocation(this.falloutLightProg,`uParticleFlickerSpeed`),this.uParticleFreshScale=e.getUniformLocation(this.falloutLightProg,`uParticleFreshScale`),e.useProgram(this.falloutLightProg),e.uniform1i(e.getUniformLocation(this.falloutLightProg,`uHeatTex`),0),e.uniform1i(e.getUniformLocation(this.falloutLightProg,`uTileTex`),1),this.falloutCompositeProg=H(e,Xi,$i,`FalloutLightPass.falloutCompositeProg`),this.uFalloutCompositeCam=e.getUniformLocation(this.falloutCompositeProg,`uCamera`),this.uFalloutCompositeMapSize=e.getUniformLocation(this.falloutCompositeProg,`uMapSize`),e.useProgram(this.falloutCompositeProg),e.uniform1i(e.getUniformLocation(this.falloutCompositeProg,`uTex`),0),this.lightW=Math.max(1,Math.floor(t/ta)),this.lightH=Math.max(1,Math.floor(n/ta)),this.falloutTex=this.createRGBA8Tex(this.lightW,this.lightH),this.falloutFbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.falloutFbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.falloutTex,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.quadVao=Vr(e),this.mapQuadVao=Gr(e,t,n)}createRGBA8Tex(e,t){let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}draw(e,t,n,r,i){let a=this.gl,o=this.settings.lighting,s=this.settings.falloutBloom;a.bindFramebuffer(a.FRAMEBUFFER,this.falloutFbo),a.viewport(0,0,this.lightW,this.lightH),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.disable(a.BLEND),a.useProgram(this.falloutLightProg),a.uniform2f(this.uFalloutMapSize,this.mapW,this.mapH),a.uniform1f(this.uFalloutTileScale,ta),a.uniform3f(this.uFalloutLightColor,o.falloutLightR,o.falloutLightG,o.falloutLightB),a.uniform1f(this.uFalloutLightIntensity,o.falloutLightIntensity),a.uniform1f(this.uFalloutLightThreshold,o.falloutLightThreshold),a.uniform3f(this.uEmberLightColor,o.emberLightR,o.emberLightG,o.emberLightB),a.uniform1f(this.uEmberLightIntensity,o.emberLightIntensity),a.uniform1f(this.uFalloutTick,i),a.uniform1f(this.uParticleThresholdUnowned,s.particleThresholdUnowned),a.uniform1f(this.uParticleThresholdOwned,s.particleThresholdOwned),a.uniform1f(this.uParticleFlickerSpeed,s.particleFlickerSpeed),a.uniform1f(this.uParticleFreshScale,s.particleFreshScale),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,this.heatManager.getHeatTex()),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,this.tileTex),a.bindVertexArray(this.quadVao),a.drawArrays(a.TRIANGLES,0,6),a.bindFramebuffer(a.FRAMEBUFFER,t),a.viewport(0,0,n,r),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE),a.useProgram(this.falloutCompositeProg),a.uniformMatrix3fv(this.uFalloutCompositeCam,!1,e),a.uniform2f(this.uFalloutCompositeMapSize,this.mapW,this.mapH),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,this.falloutTex),a.bindVertexArray(this.mapQuadVao),a.drawArrays(a.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.falloutLightProg),e.deleteProgram(this.falloutCompositeProg),e.deleteFramebuffer(this.falloutFbo),e.deleteTexture(this.falloutTex),e.deleteVertexArray(this.quadVao),e.deleteVertexArray(this.mapQuadVao)}},ra=`#version 300 es
precision highp float;

uniform float uTime;        // seconds, for rotation
uniform float uRingWidth;   // line thickness in normalized coords

in vec2  vLocalPos;
flat in float vAlpha;

out vec4 fragColor;

const float INNER_R = 0.5;
const float OUTER_R = 0.8;
const float INNER_DASHES = 8.0;
const float OUTER_DASHES = 2.0;
const float PI = 3.14159265;

void main() {
  float dist = length(vLocalPos);
  float angle = atan(vLocalPos.y, vLocalPos.x);

  // Inner ring — thin, many dashes, rotating clockwise
  float innerDist = abs(dist - INNER_R);
  float innerRing = 1.0 - smoothstep(0.0, uRingWidth * 2.0, innerDist);
  float innerAngle = angle + uTime * 1.2;
  float innerDash = smoothstep(0.4, 0.5, abs(fract(innerAngle * INNER_DASHES / (2.0 * PI)) - 0.5) * 2.0);
  innerRing *= innerDash;

  // Outer ring — thick, few dashes, counter-rotating
  float outerDist = abs(dist - OUTER_R);
  float outerRing = 1.0 - smoothstep(0.0, uRingWidth * 3.0, outerDist);
  float outerAngle = angle - uTime * 0.6;
  float outerDash = smoothstep(0.3, 0.4, abs(fract(outerAngle * OUTER_DASHES / (2.0 * PI)) - 0.5) * 2.0);
  outerRing *= outerDash;

  float ring = max(innerRing, outerRing);
  if (ring < 0.01) discard;

  fragColor = vec4(1.0, 0.0, 0.0, ring * vAlpha);
}
`,ia=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;
layout(location = 1) in vec3 aInstData; // x, y, alpha

uniform mat3 uCamera;
uniform float uTilesPerPx;
// Quad half-size in screen px; visible outer ring = 0.8× (frag OUTER_R),
// the rest is headroom for SDF AA.
uniform float uRingScreenPx;

out vec2  vLocalPos;
flat out float vAlpha;

void main() {
  vec2 center = vec2(aInstData.x + 0.5, aInstData.y + 0.5);
  vAlpha = aInstData.z;

  float worldRadius = uRingScreenPx * uTilesPerPx;
  vec2 worldPos = center + (aPos - 0.5) * worldRadius * 2.0;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vLocalPos = (aPos - 0.5) * 2.0;
}
`,aa=3,oa=200,sa=300,ca=class{constructor(e,t){this.ringCount=0,this.active=[],this.gl=e,this.settings=t,this.program=H(e,ia,ra,`FxAttackRingPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTilesPerPx=e.getUniformLocation(this.program,`uTilesPerPx`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uRingWidth=e.getUniformLocation(this.program,`uRingWidth`),this.uRingScreenPx=e.getUniformLocation(this.program,`uRingScreenPx`);let n=e.createBuffer();this.instanceBuf=new Bi(e,n,8,aa),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,n),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,0,0),e.vertexAttribDivisor(1,1),e.bindVertexArray(null)}update(e){let t=performance.now(),n=new Set;for(let t of e)n.add(t.unitId);for(let e of this.active)!e.fadingOut&&!n.has(e.unitId)&&(e.fadingOut=!0,e.transitionMs=t);for(let n of e){let e=this.active.find(e=>e.unitId===n.unitId);e?(e.x=n.x,e.y=n.y,e.fadingOut&&(e.fadingOut=!1,e.transitionMs=t)):this.active.push({unitId:n.unitId,x:n.x,y:n.y,transitionMs:t,fadingOut:!1})}}tick(){if(this.active.length===0)return;let e=performance.now();for(let t=this.active.length-1;t>=0;t--){let n=this.active[t];n.fadingOut&&e-n.transitionMs>=sa&&(this.active[t]=this.active[this.active.length-1],this.active.pop())}let t=this.active.length;this.instanceBuf.ensureCapacity(t);let n=this.instanceBuf.float32;for(let r=0;r<t;r++){let t=this.active[r],i=e-t.transitionMs,a=t.fadingOut?Math.max(0,1-i/sa):Math.min(1,i/oa),o=r*aa;n[o+0]=t.x,n[o+1]=t.y,n[o+2]=a}this.ringCount=t}draw(e,t){if(this.ringCount===0)return;let n=this.gl;n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform1f(this.uTilesPerPx,1/t),n.uniform1f(this.uTime,performance.now()/1e3),n.uniform1f(this.uRingWidth,this.settings.fx.shockwaveRingWidth),n.uniform1f(this.uRingScreenPx,this.settings.fx.attackRingScreenPx),n.bindBuffer(n.ARRAY_BUFFER,this.instanceBuf.buffer),n.bufferSubData(n.ARRAY_BUFFER,0,this.instanceBuf.float32,0,this.ringCount*aa),n.bindVertexArray(this.vao),n.drawArraysInstanced(n.TRIANGLES,0,6,this.ringCount)}clear(){this.active.length=0,this.ringCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao)}};function la(e,t){switch(t){case Zn:return e.nukeRadiusAtom;case Qn:return e.nukeRadiusHydro;case nr:return e.nukeRadiusMirv;default:return}}var ua=`#version 300 es
precision highp float;

uniform float uRingWidth;
uniform float uTime;      // seconds — animates procedural styles

in vec2  vLocalPos;
flat in float vAlpha;   // 1 - lifetime progress (fades out over the effect)
flat in float vStyle;   // 0 = classic ring, 1 = EMP pulse, 2 = sparkles, 3 = embers
flat in vec3  vColor0;  // cosmetic: palette color 0
flat in vec3  vColor1;  // cosmetic: palette color 1
flat in vec3  vColor2;  // cosmetic: palette color 2 (pads repeat the last color)
flat in vec3  vColor3;  // cosmetic: palette color 3 (pads repeat the last color)
flat in float vColorCount; // active palette size (1..4)
flat in float vSpeed;   // cosmetic: animation-speed multiplier
flat in float vTransSpeed; // cosmetic: palette step rate (colors/s)
flat in float vThickness; // ring band thickness / avg sparkle size (world tiles)
flat in float vCell;    // sparkles: grid pitch (front-normalized); embers: keep-fraction
flat in float vRadius;  // current front radius (world tiles)

// Palette lookup by (already-wrapped) index.
vec3 colorAt(float i) {
  if (i < 0.5) return vColor0;
  if (i < 1.5) return vColor1;
  if (i < 2.5) return vColor2;
  return vColor3;
}

out vec4 fragColor;

// --- cheap 1D value noise -------------------------------------------------
float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}
float vnoise(float x) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  return mix(hash11(i), hash11(i + 1.0), u);
}

// Classic expanding white ring (SAM, and nuke style 0).
void classicRing(float dist) {
  float ringDist = abs(dist - 1.0);
  float ring = 1.0 - smoothstep(0.0, uRingWidth, ringDist);
  if (ring < 0.01) discard;
  fragColor = vec4(1.0, 1.0, 1.0, ring * vAlpha);
}

// EMP energy pulse — a jagged, crackling ring with rotating lightning arcs and
// a faint trailing energy fill. Colored by the firing player's cosmetic.
void empPulse(float dist) {
  float ang = atan(vLocalPos.y, vLocalPos.x); // -pi..pi
  float tt = uTime * vSpeed;                   // speed-scaled animation time

  // Jagged front: perturb the ideal r=1.0 ring by angular + time noise.
  float n = vnoise(ang * 6.0 + tt * 6.0)
          + 0.5 * vnoise(ang * 17.0 - tt * 11.0);
  float ringR = 0.95 + n * 0.05;
  float ringDist = abs(dist - ringR);

  // Band half-width in local units (dist 1.0 = vRadius world tiles), so the
  // cosmetic's thickness stays constant in tiles while the ring expands.
  // Per-angle flicker (averages ~1.0×) keeps it feeling electric.
  float halfW = 0.5 * vThickness / max(vRadius, 0.001);
  float w = halfW * (0.7 + 0.6 * vnoise(ang * 9.0 + tt * 20.0));
  float ring = 1.0 - smoothstep(0.0, w, ringDist);

  // A couple of bright rotating arcs of "lightning" chasing around the ring.
  float arc = pow(0.5 + 0.5 * sin(ang * 5.0 - tt * 8.0), 8.0)
            + pow(0.5 + 0.5 * sin(ang * 8.0 + tt * 13.0), 12.0);

  // Faint inner energy fill trailing behind the front.
  float inner = smoothstep(ringR, 0.0, dist) * 0.12
              * (0.6 + 0.4 * vnoise(ang * 20.0 + tt * 25.0));

  float glow = ring * (0.8 + arc) + inner;
  if (glow < 0.01) discard;

  // Base color cycles through the whole palette (color0 → color1 → … → wrap)
  // at transitionSpeed steps/s, like the trail shader's transition (0 →
  // static color0, negative → reverse cycle). Arcs flare toward white.
  float idx = uTime * vTransSpeed;
  vec3 base = mix(
    colorAt(mod(floor(idx), vColorCount)),
    colorAt(mod(floor(idx) + 1.0, vColorCount)),
    fract(idx));
  // Padded slots repeat a real color, so this max spans the active palette.
  vec3 bright = max(max(vColor0, vColor1), max(vColor2, vColor3));
  vec3 hot = mix(bright, vec3(1.0), 0.4);
  vec3 col = mix(base, hot, clamp(arc * 0.8, 0.0, 1.0));

  // Whole-ring flicker on top of the lifetime fade (speed-scaled like the rest).
  float life = vAlpha * (0.75 + 0.25 * vnoise(tt * 30.0));
  fragColor = vec4(col, clamp(glow, 0.0, 1.0) * life);
}

// Sparkles — a firework burst: glints start at the center and ride outward
// with the expanding front (fixed positions in front-normalized space, so
// world position = normalized position · radius), reaching the cosmetic's
// full size at fade-out. One candidate glint per normalized grid cell
// (jittered but confined to its cell so each fragment samples only its own
// cell; the pitch vCell comes from the cosmetic's density). Glints keep a
// constant world size (hash-varied ±50% around vThickness, so thickness is
// the average sparkle size) once the burst outgrows the grid; while it's
// young they're capped to their cell, so the early burst reads as a dense
// compact cluster. Each glint twinkles on a hashed phase and takes a hashed
// palette color; the palette cycle advances at transitionSpeed steps/s on
// top of that offset.
void sparkles() {
  float cell = max(vCell, 0.001); // grid pitch (front-normalized units)
  // Rotate the grid off the world axes so the young, dense burst doesn't
  // read as a lattice (the disc cull below is rotation-invariant).
  const mat2 ROT = mat2(0.8253, -0.5646, 0.5646, 0.8253);
  vec2 gp = ROT * vLocalPos;
  vec2 cid = floor(gp / cell);
  float h1 = hash11(dot(cid, vec2(157.0, 113.0)) + 41.7);
  float h2 = hash11(h1 * 251.0 + 7.3);
  float h3 = hash11(h2 * 199.0 + 3.1);
  float h4 = hash11(h3 * 173.0 + 11.3);
  float h5 = hash11(h4 * 149.0 + 5.7);

  // Drop ~1/3 of cells — an organic scatter, not one glint per cell.
  if (h3 < 0.33) discard;

  // Glint radius: constant world size, hash-varied ±50% per glint so
  // vThickness is the AVERAGE sparkle size, and capped to its cell. The
  // jitter amplitude is fixed (cap + jitter = half a cell exactly) so glint
  // positions don't drift as the cap relaxes with the growing radius.
  float rs = min(
    0.5 * vThickness * (0.5 + h5) / max(vRadius, 0.001),
    0.35 * cell);
  vec2 center = (cid + 0.5) * cell + (vec2(h1, h2) - 0.5) * 0.3 * cell;

  // Glints outside the unit disc are culled so the burst stays circular.
  if (length(center) > 1.0) discard;

  // Hashed birth stagger so glints pop in over the first fifth of the life
  // instead of the whole disc appearing at once.
  float lifeT = 1.0 - vAlpha;
  float birth = smoothstep(h4 * 0.2, h4 * 0.2 + 0.08, lifeT);
  if (birth <= 0.0) discard;

  // Solid glint core with a thin anti-aliased rim — glints render fully
  // opaque (the twinkle modulates color brightness, not alpha), holding full
  // opacity through life and fading only over the last quarter.
  float g = clamp((1.0 - length(gp - center) / max(rs, 1e-4)) * 3.0, 0.0, 1.0);
  float tt = uTime * vSpeed;
  float tw = 0.35 +
             0.65 * pow(0.5 + 0.5 * sin(6.2832 * (h3 + tt * (1.5 + h1))), 2.0);
  float endFade = smoothstep(0.0, 0.25, vAlpha);

  float glow = g * birth * endFade;
  if (glow < 0.01) discard;

  // Whole palette steps per glint (floor) keep static colors exact; the cycle
  // blends between steps at transitionSpeed steps/s (0 = static hashed color,
  // negative = reverse), like the EMP base color.
  float idx = uTime * vTransSpeed + floor(h2 * vColorCount);
  vec3 base = mix(
    colorAt(mod(floor(idx), vColorCount)),
    colorAt(mod(floor(idx) + 1.0, vColorCount)),
    fract(idx));
  // Twinkle lives in the color: peaks flare toward white, troughs dim the
  // base — alpha stays saturated so the glints read solid.
  vec3 col = mix(base * (0.7 + 0.3 * tw), vec3(1.0), 0.5 * tw);

  fragColor = vec4(col, clamp(glow, 0.0, 1.0));
}

// Pixel ember splash (style 3). Top-down: chunky embers scattered on a stable
// world-space grid, thrown outward as the blast expands and cooling through the
// palette over the effect. A 2D grid (not angular sectors) — reads as a field
// of pixels, never radial rays. vThickness = ember block size (world tiles);
// vCell = keep-fraction (density-derived: the share of grid cells that light up).
void emberScatter() {
  float R = max(vRadius, 0.001);
  vec2 worldPos = vLocalPos * R; // tiles from the blast centre (grid is stable)
  float block = max(vThickness, 0.5); // chunky pixel size, world tiles
  // Rotate the grid off the world axes so it never reads as a lattice.
  const mat2 ROT = mat2(0.8253, -0.5646, 0.5646, 0.8253);
  vec2 cid = floor((ROT * worldPos) / block);
  float h1 = hash11(dot(cid, vec2(157.0, 113.0)) + 41.7);
  float h2 = hash11(h1 * 251.0 + 7.3);
  // Sparse: keep only a fraction of cells as embers (vCell = keep-fraction).
  if (h1 > clamp(vCell, 0.02, 1.0)) discard;

  // This cell's distance from the centre, front-normalised (0 = centre, 1 = rim).
  vec2 blockCentre = (cid + 0.5) * block;
  float distN = length(blockCentre) / R;
  if (distN > 1.0) discard;

  // Thrown outward as the blast expands: a cell only appears once the eased
  // front has reached its hashed range, so embers spread over the effect.
  float lifeT = 1.0 - vAlpha;
  float ease = 1.0 - (1.0 - lifeT) * (1.0 - lifeT);
  float reach = (0.15 + 0.85 * h2) * ease;
  if (distN > reach) discard;

  float a = smoothstep(0.0, 0.22, vAlpha); // fade over the last fifth of life
  if (a < 0.01) discard;

  // Cooling: hot (color 0) at birth -> cool (last color) as the blast ages,
  // posterised (one palette entry, no blend), with transitionSpeed cycling.
  float coolStep = lifeT * (vColorCount - 1.0);
  float idx = floor(coolStep + uTime * vTransSpeed);
  vec3 col = colorAt(mod(idx, vColorCount));
  fragColor = vec4(col, a);
}

void main() {
  float dist = length(vLocalPos);
  if (vStyle > 2.5) {
    emberScatter();
  } else if (vStyle > 1.5) {
    sparkles();
  } else if (vStyle > 0.5) {
    empPulse(dist);
  } else {
    classicRing(dist);
  }
}
`,da=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;
layout(location = 1) in vec4 aInstData; // x, y, radius, alpha
layout(location = 2) in float aStyle;   // 0 = classic ring, 1 = EMP pulse, 2 = sparkles
layout(location = 3) in vec3 aColor0;   // EMP: palette color 0
layout(location = 4) in vec3 aColor1;   // EMP: palette color 1
layout(location = 5) in vec3 aColor2;   // EMP: palette color 2
layout(location = 6) in vec3 aColor3;   // EMP: palette color 3
layout(location = 7) in float aColorCount; // active palette size (1..4)
layout(location = 8) in float aSpeed;   // animation-speed multiplier
layout(location = 9) in float aTransSpeed; // palette step rate (colors/s)
layout(location = 10) in float aThickness; // EMP: ring band thickness (world tiles)
layout(location = 11) in float aCell;   // sparkles: grid pitch (front-normalized)

uniform mat3 uCamera;

out vec2  vLocalPos;
flat out float vAlpha;
flat out float vStyle;
flat out vec3  vColor0;
flat out vec3  vColor1;
flat out vec3  vColor2;
flat out vec3  vColor3;
flat out float vColorCount;
flat out float vSpeed;
flat out float vTransSpeed;
flat out float vThickness;
flat out float vCell;
flat out float vRadius;  // current ring radius (world tiles) — converts
                         // absolute thickness into local ring units

// Extra margin so the ring's outer feathering isn't clipped at the quad edge.
const float MARGIN = 1.1; // 10% beyond ring radius

void main() {
  vec2 center = vec2(aInstData.x + 0.5, aInstData.y + 0.5);
  float r = aInstData.z;
  vAlpha = aInstData.w;
  vStyle = aStyle;
  vColor0 = aColor0;
  vColor1 = aColor1;
  vColor2 = aColor2;
  vColor3 = aColor3;
  vColorCount = aColorCount;
  vSpeed = aSpeed;
  vTransSpeed = aTransSpeed;
  vThickness = aThickness;
  vCell = aCell;
  vRadius = r;

  // Quad extent: ring radius plus the full band thickness. The band is
  // absolute (world tiles), so while the ring is young it can be wider than
  // the radius itself — a pure percentage margin would clip it into a box.
  // aThickness is 0 for the classic style, giving the original r * MARGIN.
  float extent = (r + aThickness) * MARGIN;
  vec2 worldPos = center + (aPos - 0.5) * 2.0 * extent;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // vLocalPos stays normalized to the ring radius (dist 1.0 = radius r), so
  // scale by extent/r instead of the fixed margin.
  vLocalPos = (aPos - 0.5) * 2.0 * (extent / max(r, 0.001));
}
`,fa=[1,1,1],pa=new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),ma=22,ha=ma*4;function ga(e,t){if(!e)return t;let n=e.maxRadius*2;return Math.min(Math.max(n/Math.max(e.speed,.001)*1e3,100),15e3)}var _a=class{constructor(e,t){this.gl=e,this.settings=t,this.shockwaveCount=0,this.active=[],this.timeFn=()=>performance.now(),this.program=H(e,da,ua,`FxShockwavePass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uRingWidth=e.getUniformLocation(this.program,`uRingWidth`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),this.quadVbo=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVbo),e.bufferData(e.ARRAY_BUFFER,pa,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0);let n=e.createBuffer();this.instanceBuf=new Bi(e,n,64,ma),e.bindBuffer(e.ARRAY_BUFFER,n),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,ha,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,1,e.FLOAT,!1,ha,16),e.vertexAttribDivisor(2,1);for(let t=0;t<4;t++){let n=3+t;e.enableVertexAttribArray(n),e.vertexAttribPointer(n,3,e.FLOAT,!1,ha,20+t*12),e.vertexAttribDivisor(n,1)}e.enableVertexAttribArray(7),e.vertexAttribPointer(7,1,e.FLOAT,!1,ha,68),e.vertexAttribDivisor(7,1),e.enableVertexAttribArray(8),e.vertexAttribPointer(8,1,e.FLOAT,!1,ha,72),e.vertexAttribDivisor(8,1),e.enableVertexAttribArray(9),e.vertexAttribPointer(9,1,e.FLOAT,!1,ha,76),e.vertexAttribDivisor(9,1),e.enableVertexAttribArray(10),e.vertexAttribPointer(10,1,e.FLOAT,!1,ha,80),e.vertexAttribDivisor(10,1),e.enableVertexAttribArray(11),e.vertexAttribPointer(11,1,e.FLOAT,!1,ha,84),e.vertexAttribDivisor(11,1),e.bindVertexArray(null)}pushNukeShockwave(e,t,n,r){let i=this.settings.fx,a=ga(r,i.nukeShockwaveDurationMs),o=i.nukeShockwaveDurationMs/a,s=0;if(r?.type===`sparkles`||r?.type===`embers`){let e=r.density??50,t=Math.min(Math.max(Number.isFinite(e)?e:50,2),5e3);s=r.type===`sparkles`?Math.sqrt(2*Math.PI/3/t):Math.min(Math.max(t/500,.04),.6)}this.active.push({x:e,y:t,startMs:this.timeFn(),durationMs:a,maxRadius:r?.maxRadius??n*i.nukeShockwaveRadiusFactor,style:r?r.type===`sparkles`?2:r.type===`embers`?3:1:0,colors:r?.colors??[qn],speed:o,transitionSpeed:r?.transitionSpeed??0,thickness:r?r.thickness??4:0,cell:s})}pushSAMShockwave(e,t){let n=this.settings.fx;this.active.push({x:e,y:t,startMs:this.timeFn(),durationMs:n.samShockwaveDurationMs,maxRadius:n.samShockwaveRadius,style:0,colors:[fa],speed:1,transitionSpeed:0,thickness:0,cell:0})}tick(){if(this.active.length===0)return;let e=this.timeFn();for(let t=this.active.length-1;t>=0;t--)e-this.active[t].startMs>=this.active[t].durationMs&&(this.active[t]=this.active[this.active.length-1],this.active.pop());this.rebuildInstances(e)}rebuildInstances(e){let t=this.active.length;this.instanceBuf.ensureCapacity(t);let n=this.instanceBuf.float32;for(let r=0;r<t;r++){let t=this.active[r],i=(e-t.startMs)/t.durationMs,a=r*ma;n[a+0]=t.x,n[a+1]=t.y,n[a+2]=i*t.maxRadius,n[a+3]=1-i,n[a+4]=t.style;for(let e=0;e<4;e++){let r=t.colors[Math.min(e,t.colors.length-1)],i=a+5+e*3;n[i]=r[0],n[i+1]=r[1],n[i+2]=r[2]}n[a+17]=Math.min(t.colors.length,4),n[a+18]=t.speed,n[a+19]=t.transitionSpeed,n[a+20]=t.thickness,n[a+21]=t.cell}this.shockwaveCount=t}draw(e){if(this.shockwaveCount===0)return;let t=this.gl;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1f(this.uRingWidth,this.settings.fx.shockwaveRingWidth),t.uniform1f(this.uTime,this.timeFn()*.001),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf.buffer),t.bufferSubData(t.ARRAY_BUFFER,0,this.instanceBuf.float32,0,this.shockwaveCount*ma),t.bindVertexArray(this.vao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.shockwaveCount)}setTimeFn(e){this.timeFn=e}clear(){this.active.length=0,this.shockwaveCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao),e.deleteBuffer(this.quadVbo)}},va={width:540,height:242,rows:[{yOffset:0,height:60,worldWidth:60,worldHeight:60},{yOffset:60,height:38,worldWidth:48,worldHeight:38},{yOffset:98,height:15,worldWidth:17,worldHeight:15},{yOffset:113,height:19,worldWidth:19,worldHeight:19},{yOffset:132,height:12,worldWidth:13,worldHeight:12},{yOffset:144,height:14,worldWidth:16,worldHeight:14},{yOffset:158,height:13,worldWidth:7,worldHeight:13},{yOffset:171,height:12,worldWidth:11,worldHeight:12},{yOffset:183,height:16,worldWidth:24,worldHeight:16},{yOffset:199,height:16,worldWidth:24,worldHeight:16},{yOffset:215,height:7,worldWidth:9,worldHeight:7},{yOffset:222,height:20,worldWidth:21,worldHeight:20}]},ya=`#version 300 es
precision highp float;

uniform sampler2D uAtlas;

in vec2  vAtlasUV;
flat in float vAlpha;

out vec4 fragColor;

void main() {
  vec4 texel = texture(uAtlas, vAtlasUV);
  if (texel.a < 0.01) discard;
  fragColor = vec4(texel.rgb, texel.a * vAlpha);
}
`,ba=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;
layout(location = 1) in vec3 aInstPos;   // x, y, fxType
layout(location = 2) in vec2 aInstFlags; // frameIdx (uint8), alpha (uint8)

uniform mat3 uCamera;
uniform vec4 uFxUV[FX_TYPE_COUNT];    // vTop, vSpan, uFrameSpan, 0
uniform vec4 uFxWorld[FX_TYPE_COUNT]; // worldW, worldH, 0, 0

out vec2  vAtlasUV;
flat out float vAlpha;

void main() {
  int type = int(aInstPos.z + 0.5);
  float frameIdx = floor(aInstFlags.x + 0.5);
  float alpha = aInstFlags.y / 255.0;

  vec4 uv = uFxUV[type];
  vec4 world = uFxWorld[type];

  vec2 center = vec2(aInstPos.x + 0.5, aInstPos.y + 0.5);
  vec2 worldPos = center + (aPos - 0.5) * vec2(world.x, world.y);

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  float u = (frameIdx + aPos.x) * uv.z;
  float v = uv.x + aPos.y * uv.y;
  vAtlasUV = vec2(u, v);
  vAlpha = alpha;
}
`,xa=N(`atlases/fx-atlas.png`),Sa=12,Ca=[{frameWidth:60,frameCount:9,frameDurationMs:70,looping:!1},{frameWidth:48,frameCount:9,frameDurationMs:70,looping:!1},{frameWidth:17,frameCount:10,frameDurationMs:70,looping:!1},{frameWidth:19,frameCount:4,frameDurationMs:70,looping:!1},{frameWidth:13,frameCount:4,frameDurationMs:70,looping:!1},{frameWidth:16,frameCount:14,frameDurationMs:90,looping:!1},{frameWidth:7,frameCount:6,frameDurationMs:100,looping:!0},{frameWidth:11,frameCount:4,frameDurationMs:120,looping:!0},{frameWidth:24,frameCount:5,frameDurationMs:120,looping:!0},{frameWidth:24,frameCount:5,frameDurationMs:120,looping:!0},{frameWidth:9,frameCount:3,frameDurationMs:100,looping:!1},{frameWidth:21,frameCount:10,frameDurationMs:90,looping:!1}],wa=[{type:6,radiusFactor:1,density:1/25},{type:7,radiusFactor:1,density:1/28},{type:8,radiusFactor:.9,density:1/70},{type:9,radiusFactor:.9,density:1/70}];function Ta(e){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}var Ea=4,Da=16,Oa=class{constructor(e,t,n,r){this.config=r,this.spriteCount=0,this.atlasReady=!1,this.activeFx=[],this.timeFn=()=>performance.now(),this.isDisposed=!1,this.gl=e,this.mapW=t.mapWidth,this.settings=n,this.program=H(e,W(ba,{FX_TYPE_COUNT:Sa}),ya,`FxSpritePass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uFxUV=e.getUniformLocation(this.program,`uFxUV`),this.uFxWorld=e.getUniformLocation(this.program,`uFxWorld`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),0),this.atlasTex=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.atlasTex),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let i=e.createBuffer();this.instanceBuf=new Bi(e,i,256,Ea),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,i),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,Da,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.UNSIGNED_BYTE,!1,Da,12),e.vertexAttribDivisor(2,1),e.bindVertexArray(null),this.loadAtlas()}async loadAtlas(){try{let e=new Image;if(e.crossOrigin=`anonymous`,e.src=xa,await e.decode(),this.isDisposed)return;let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.atlasTex),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST);let n=va,r=new Float32Array(Sa*4),i=new Float32Array(Sa*4);for(let e=0;e<Sa;e++){let t=n.rows[e];r[e*4+0]=t.yOffset/n.height,r[e*4+1]=t.height/n.height,r[e*4+2]=t.worldWidth/n.width,r[e*4+3]=0,i[e*4+0]=t.worldWidth,i[e*4+1]=t.worldHeight,i[e*4+2]=0,i[e*4+3]=0}t.useProgram(this.program),t.uniform4fv(this.uFxUV,r),t.uniform4fv(this.uFxWorld,i),this.atlasReady=!0}catch(e){console.warn(`Failed to load fx atlas:`,e)}}applyRailroadDust(e){let t=this.timeFn();for(let n of e){if(Math.random()>.33)continue;let e=n%this.mapW,r=(n-e)/this.mapW;this.pushFx(e,r,10,t)}}applyConquestEvents(e){let t=this.timeFn(),n=this.settings.fx;for(let r of e){let e=t-(r.tickAge??0)*this.config.msPerTick();t-e>=n.conquestLifetimeMs||this.activeFx.push({x:r.x,y:r.y,fxType:11,startMs:e,lifetimeMs:n.conquestLifetimeMs,fadeIn:n.conquestFadeIn,fadeOut:n.conquestFadeOut})}}spawnFxForUnit(e,t){let n=e.unitType,r=e.pos%this.mapW,i=(e.pos-r)/this.mapW,a=la(this.settings.fx,n);if(a!==void 0){e.reachedTarget?this.spawnNukeSprites(r,i,a,t,e.pos):this.pushFx(r,i,1,t);return}if(n===`Warship`){this.pushFx(r,i,3,t),this.pushFx(r,i,5,t);return}if(n===`Shell`&&e.reachedTarget){this.pushFx(r,i,4,t);return}if(n===`Train`&&!e.reachedTarget){this.pushFx(r,i,4,t);return}ur.has(n)&&this.pushFx(r,i,2,t)}spawnNukeSprites(e,t,n,r,i){this.pushFx(e,t,0,r);let a=0,o=this.settings.fx.debrisDensity;for(let{type:s,radiusFactor:c,density:l}of wa){let u=Math.max(0,Math.floor(n*l*o)),d=n*c;for(let n=0;n<u;n++){let n=i*997+ a++,o=Ta(n)*Math.PI*2,c=Ta(n+65536)*(d/2),l=Math.floor(Math.cos(o)*c),u=Math.floor(Math.sin(o)*c);this.pushDebris(e+l,t+u,s,r)}}}pushFx(e,t,n,r){let i=Ca[n];this.activeFx.push({x:e,y:t,fxType:n,startMs:r,lifetimeMs:i.frameDurationMs*i.frameCount,fadeIn:0,fadeOut:1})}pushDebris(e,t,n,r){let i=this.settings.fx;this.activeFx.push({x:e,y:t,fxType:n,startMs:r,lifetimeMs:i.debrisLifetimeMs,fadeIn:i.debrisFadeIn,fadeOut:i.debrisFadeOut})}tick(){if(this.activeFx.length===0)return;let e=this.timeFn();for(let t=this.activeFx.length-1;t>=0;t--)e-this.activeFx[t].startMs>=this.activeFx[t].lifetimeMs&&(this.activeFx[t]=this.activeFx[this.activeFx.length-1],this.activeFx.pop());this.rebuildInstances(e)}rebuildInstances(e){let t=this.activeFx.length;this.instanceBuf.ensureCapacity(t);for(let n=0;n<t;n++){let t=this.activeFx[n],r=Ca[t.fxType],i=e-t.startMs,a;if(r.looping){let e=r.frameDurationMs*r.frameCount;a=Math.floor(i%e/r.frameDurationMs)}else a=Math.min(Math.floor(i/r.frameDurationMs),r.frameCount-1);let o=255;if(t.fadeIn>0||t.fadeOut<1){let e=i/t.lifetimeMs;e<t.fadeIn?o=Math.floor(e/t.fadeIn*255):e>t.fadeOut&&(o=Math.floor((1-e)/(1-t.fadeOut)*255))}let s=n*Ea;this.instanceBuf.float32[s+0]=t.x,this.instanceBuf.float32[s+1]=t.y,this.instanceBuf.float32[s+2]=t.fxType;let c=n*Da;this.instanceBuf.uint8[c+12]=a,this.instanceBuf.uint8[c+13]=o}this.spriteCount=t}draw(e){if(this.spriteCount===0||!this.atlasReady)return;let t=this.gl;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.atlasTex),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf.buffer),t.bufferSubData(t.ARRAY_BUFFER,0,this.instanceBuf.float32,0,this.spriteCount*Ea),t.bindVertexArray(this.vao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.spriteCount)}setTimeFn(e){this.timeFn=e}clear(){this.activeFx.length=0,this.spriteCount=0}dispose(){this.isDisposed=!0;let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao),e.deleteTexture(this.atlasTex)}},ka=class{constructor(e,t,n,r){this.config=r,this.timeFn=()=>performance.now(),this.mapW=t.mapWidth,this.settings=n,this.spritePass=new Oa(e,t,n,r),this.shockwavePass=new _a(e,n),this.attackRingPass=new ca(e,n)}applyDeadUnits(e){let t=this.timeFn();for(let n of e){let e=t-(n.tickAge??0)*this.config.msPerTick();this.spawnUnit(n,e)}}spawnUnit(e,t){let n=e.unitType,r=e.pos%this.mapW,i=(e.pos-r)/this.mapW,a=la(this.settings.fx,n);if(a!==void 0){e.reachedTarget?(this.spritePass.spawnFxForUnit(e,t),this.shockwavePass.pushNukeShockwave(r,i,a,e.explosion)):(this.spritePass.spawnFxForUnit(e,t),this.shockwavePass.pushSAMShockwave(r,i));return}this.spritePass.spawnFxForUnit(e,t)}applyRailroadDust(e){this.spritePass.applyRailroadDust(e)}applyConquestEvents(e){this.spritePass.applyConquestEvents(e)}updateAttackRings(e){this.attackRingPass.update(e)}tick(){this.spritePass.tick(),this.shockwavePass.tick(),this.attackRingPass.tick()}draw(e,t){this.spritePass.draw(e),this.shockwavePass.draw(e),this.attackRingPass.draw(e,t)}setTimeFn(e){this.timeFn=e,this.spritePass.setTimeFn(e),this.shockwavePass.setTimeFn(e)}clear(){this.spritePass.clear(),this.shockwavePass.clear(),this.attackRingPass.clear()}dispose(){this.spritePass.dispose(),this.shockwavePass.dispose(),this.attackRingPass.dispose()}},Aa=class{constructor(e,t,n,r,i,a){this.lightW=0,this.lightH=0,this.gl=e,this.settings=a,this.mapW=t,this.mapH=n,this.pointLightPass=r,this.falloutLightPass=i,this.blurProg=H(e,Yi,Ji,`LightmapPass`),this.uBlurDir=e.getUniformLocation(this.blurProg,`uDir`),e.useProgram(this.blurProg),e.uniform1i(e.getUniformLocation(this.blurProg,`uTex`),0),this.lightTexA=this.createRGBA8Tex(),this.lightTexB=this.createRGBA8Tex(),this.lightFboA=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.lightFboA),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.lightTexA,0),this.lightFboB=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.lightFboB),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.lightTexB,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.quadVao=Vr(e)}createRGBA8Tex(){let e=this.gl,t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),t}ensureLightSize(e,t){if(e===this.lightW&&t===this.lightH)return;this.lightW=e,this.lightH=t;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.lightTexA),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindTexture(n.TEXTURE_2D,this.lightTexB),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null)}draw(e,t,n,r){let i=this.gl,a=Math.max(1,t>>1),o=Math.max(1,n>>1);this.ensureLightSize(a,o),i.bindFramebuffer(i.FRAMEBUFFER,this.lightFboA),i.viewport(0,0,a,o),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.enable(i.BLEND),i.blendFunc(i.ONE,i.ONE),this.pointLightPass.draw(e),this.settings.passEnabled.falloutLight&&this.falloutLightPass.draw(e,this.lightFboA,a,o,r);let s=Math.abs(e[0]),c=Math.max(this.mapW,this.mapH),l=Math.min(s*c/this.settings.lighting.blurZoomDivisor,1);i.disable(i.BLEND),i.useProgram(this.blurProg),i.bindVertexArray(this.quadVao);for(let e=0;e<2;e++)i.bindFramebuffer(i.FRAMEBUFFER,this.lightFboB),i.viewport(0,0,a,o),i.clear(i.COLOR_BUFFER_BIT),i.uniform2f(this.uBlurDir,l/a,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.lightTexA),i.drawArrays(i.TRIANGLES,0,6),i.bindFramebuffer(i.FRAMEBUFFER,this.lightFboA),i.viewport(0,0,a,o),i.clear(i.COLOR_BUFFER_BIT),i.uniform2f(this.uBlurDir,0,l/o),i.bindTexture(i.TEXTURE_2D,this.lightTexB),i.drawArrays(i.TRIANGLES,0,6);return this.lightTexA}dispose(){let e=this.gl;e.deleteProgram(this.blurProg),e.deleteFramebuffer(this.lightFboA),e.deleteFramebuffer(this.lightFboB),e.deleteTexture(this.lightTexA),e.deleteTexture(this.lightTexB),e.deleteVertexArray(this.quadVao)}},ja=`#version 300 es
precision highp float;
precision highp usampler2D;

// Layer RGBA texture (PNG with transparency).
uniform sampler2D uLayerTex;

// Raw terrain bytes (R8UI): bit 7 = isLand.
uniform usampler2D uTerrainBytes;

// Per-tile destroyed mask (R8UI): 0 = intact, 1 = destroyed.
// Only sampled when uNukeable > 0.
uniform usampler2D uDestroyedMask;

// 0 = land layer (visible only on land tiles), 1 = water layer.
uniform int uPlacement;

// 0 = permanent, 1 = destroyed in nuke blast radius.
uniform int uNukeable;

// 0.0 = hidden (user toggle), 1.0 = visible.
uniform float uVisible;

// Per-layer alpha multiplier (0–1).  Manifest default × user slider.
uniform float uAlpha;

in vec2 vUV;
out vec4 fragColor;

void main() {
  // User toggle.
  if (uVisible < 0.5) discard;

  ivec2 tc = ivec2(
    int(vUV.x * float(MAP_W)),
    int(vUV.y * float(MAP_H))
  );
  tc = clamp(tc, ivec2(0), ivec2(MAP_W - 1, MAP_H - 1));

  // Land/water placement check: bit 7 of terrain byte = isLand.
  uint terrainByte = texelFetch(uTerrainBytes, tc, 0).r;
  bool isLand = (terrainByte & 0x80u) != 0u;

  if (uPlacement == 0 && !isLand) discard;  // land layer on water tile
  if (uPlacement == 1 && isLand) discard;   // water layer on land tile

  // Nukeable: skip destroyed tiles.
  if (uNukeable == 1) {
    uint destroyed = texelFetch(uDestroyedMask, tc, 0).r;
    if (destroyed > 0u) discard;
  }

  // Sample layer texture.
  vec4 layer = texture(uLayerTex, vUV);
  if (layer.a < 0.01) discard;

  fragColor = vec4(layer.rgb, layer.a * uAlpha);
}
`,Ma=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;

out vec2 vUV;

void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // aPos ranges [0, mapW] × [0, mapH] — normalize to [0,1] UV.
  vUV = aPos / vec2(float(MAP_W), float(MAP_H));
}
`,Na=class{constructor(e,t,n,r,i,a,o){this.gl=e,this.terrainBytesTex=t,this.mapW=r,this.mapH=i,this.placement=a,this.nukeable=o,this._visible=!0,this._alpha=1,this.program=H(e,W(Ma,{MAP_W:r,MAP_H:i}),W(ja,{MAP_W:r,MAP_H:i}),`MapLayerPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uPlacement=e.getUniformLocation(this.program,`uPlacement`),this.uNukeable=e.getUniformLocation(this.program,`uNukeable`),this.uVisible=e.getUniformLocation(this.program,`uVisible`),this.uAlpha=e.getUniformLocation(this.program,`uAlpha`),this.uLayerTex=e.getUniformLocation(this.program,`uLayerTex`),this.uTerrainBytes=e.getUniformLocation(this.program,`uTerrainBytes`),this.uDestroyedMask=e.getUniformLocation(this.program,`uDestroyedMask`),this.layerTex=U(e,{width:n.width,height:n.height,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),e.bindTexture(e.TEXTURE_2D,this.layerTex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n),this.destroyedData=new Uint8Array(r*i),this.destroyedTex=U(e,{width:r,height:i,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:this.destroyedData,filter:e.NEAREST}),this.vao=Gr(e,r,i)}setVisible(e){this._visible=e}setAlpha(e){this._alpha=Math.max(0,Math.min(1,e))}updateDestroyedMask(e){if(e.length!==this.mapW*this.mapH)return;this.destroyedData.set(e);let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.destroyedTex),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.mapW,this.mapH,t.RED_INTEGER,t.UNSIGNED_BYTE,this.destroyedData)}markTileDestroyed(e){if(e<0||e>=this.mapW*this.mapH||this.destroyedData[e]===1)return;this.destroyedData[e]=1;let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.destroyedTex),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texSubImage2D(t.TEXTURE_2D,0,e%this.mapW,Math.floor(e/this.mapW),1,1,t.RED_INTEGER,t.UNSIGNED_BYTE,new Uint8Array([1]))}markTilesDestroyed(e){let t=this.mapW,n=this.mapH,r=-1,i=-1,a=!1;for(let o of e){if(o<0||o>=this.mapW*this.mapH||this.destroyedData[o]===1)continue;this.destroyedData[o]=1;let e=o%this.mapW,s=(o-e)/this.mapW;e<t&&(t=e),e>r&&(r=e),s<n&&(n=s),s>i&&(i=s),a=!0}if(!a)return;let o=this.gl,s=r-t+1,c=i-n+1,l=new Uint8Array(s*c);for(let e=n;e<=i;e++){let r=e*this.mapW+t,i=(e-n)*s;l.set(this.destroyedData.subarray(r,r+s),i)}o.bindTexture(o.TEXTURE_2D,this.destroyedTex),o.pixelStorei(o.UNPACK_ALIGNMENT,1),o.texSubImage2D(o.TEXTURE_2D,0,t,n,s,c,o.RED_INTEGER,o.UNSIGNED_BYTE,l)}restoreFrom(e){let t=this.gl;t.deleteTexture(this.layerTex),this.layerTex=U(t,{width:e.width,height:e.height,internalFormat:t.RGBA8,format:t.RGBA,type:t.UNSIGNED_BYTE,data:null,filter:t.NEAREST}),t.bindTexture(t.TEXTURE_2D,this.layerTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,t.RGBA,t.UNSIGNED_BYTE,e),t.deleteTexture(this.destroyedTex),this.destroyedTex=U(t,{width:this.mapW,height:this.mapH,internalFormat:t.R8UI,format:t.RED_INTEGER,type:t.UNSIGNED_BYTE,data:this.destroyedData,filter:t.NEAREST})}draw(e){let t=this.gl;t.useProgram(this.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.layerTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.terrainBytesTex),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.destroyedTex),t.uniform1i(this.uLayerTex,0),t.uniform1i(this.uTerrainBytes,1),t.uniform1i(this.uDestroyedMask,2),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1i(this.uPlacement,this.placement),t.uniform1i(this.uNukeable,+!!this.nukeable),t.uniform1f(this.uVisible,+!!this._visible),t.uniform1f(this.uAlpha,this._alpha),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6),t.bindVertexArray(null)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.layerTex),e.deleteTexture(this.destroyedTex),e.deleteVertexArray(this.vao)}},Pa=`#version 300 es
precision highp float;

in vec2 vLocal; // [-1, +1] over ±HALF tiles

uniform float uElapsed;      // wall-clock ms since activation
uniform vec3  uColor;        // RGB [0-1]
uniform float uPxPerTile;    // camera zoom (pixels per tile)
uniform float uStartRadius;  // screen px
uniform float uChevronSize;  // screen px
uniform float uLineWidth;    // screen px
uniform float uDuration;     // ms
uniform float uConverge;     // 0–1

out vec4 fragColor;

const float HALF = 16.0; // quad half-size in tiles (must match vertex shader)

// SDF: distance to a V-chevron pointing in +Y, centered at origin.
// The chevron has wings at (±w, -wingOff) meeting tip at (0, +tipOff).
float chevronSDF(vec2 p, float w, float tipOff, float wingOff) {
  p.x = abs(p.x);
  vec2 a = vec2(w, -wingOff);
  vec2 b = vec2(0.0, tipOff);
  vec2 ab = b - a;
  float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
  return length(p - a - ab * t);
}

void main() {
  float t = uElapsed / uDuration;
  if (t >= 1.0) discard;

  // Convert vLocal to screen pixels relative to center
  float px = vLocal.x * HALF * uPxPerTile;
  float py = vLocal.y * HALF * uPxPerTile;

  // Scale factor (matches game: grows above zoom 10)
  float sc = uPxPerTile > 10.0 ? 1.0 + (uPxPerTile - 10.0) / 10.0 : 1.0;

  float radius = uStartRadius * sc * (1.0 - t * uConverge);
  float cs = uChevronSize * sc;
  float tipOff = cs * 0.4;
  float wingOff = cs * 0.6;
  float w = cs; // wing half-width

  // 4 chevrons pointing inward
  float d = chevronSDF(vec2(px, -(py - radius)), w, tipOff, wingOff);
  d = min(d, chevronSDF(vec2(px, py + radius), w, tipOff, wingOff));
  d = min(d, chevronSDF(vec2(py, -(px - radius)), w, tipOff, wingOff));
  d = min(d, chevronSDF(vec2(py, px + radius), w, tipOff, wingOff));

  // Anti-aliased stroke (in screen pixels)
  float half_w = uLineWidth * sc * 0.5;
  float aa = 1.0;
  float mask = 1.0 - smoothstep(half_w - aa, half_w + aa, d);

  if (mask < 0.01) discard;

  float alpha = 1.0 - t;
  fragColor = vec4(uColor, alpha * mask);
}
`,Fa=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;
uniform vec2 uCenter; // world-space tile center

out vec2 vLocal; // [-1, +1] local quad space

void main() {
  vLocal = aPos * 2.0 - 1.0;

  // Quad covers ±16 tiles around center (enough for the chevrons)
  float r = 16.0;
  vec2 world = uCenter + 0.5 + vLocal * r;

  vec3 clip = uCamera * vec3(world, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Ia=class{constructor(e,t){this.active=!1,this.centerX=0,this.centerY=0,this.colorR=1,this.colorG=0,this.colorB=0,this.startTime=0,this.gl=e,this.settings=t,this.program=H(e,Fa,Pa,`MoveIndicatorPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uElapsed=e.getUniformLocation(this.program,`uElapsed`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.uPxPerTile=e.getUniformLocation(this.program,`uPxPerTile`),this.uStartRadius=e.getUniformLocation(this.program,`uStartRadius`),this.uChevronSize=e.getUniformLocation(this.program,`uChevronSize`),this.uLineWidth=e.getUniformLocation(this.program,`uLineWidth`),this.uDuration=e.getUniformLocation(this.program,`uDuration`),this.uConverge=e.getUniformLocation(this.program,`uConverge`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}show(e,t,n,r,i){this.active=!0,this.centerX=e,this.centerY=t,this.colorR=n,this.colorG=r,this.colorB=i,this.startTime=performance.now()}draw(e,t){if(!this.active)return;let n=this.settings.moveIndicator,r=performance.now()-this.startTime;if(r>=n.duration){this.active=!1;return}let i=this.gl;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform2f(this.uCenter,this.centerX,this.centerY),i.uniform1f(this.uElapsed,r),i.uniform3f(this.uColor,this.colorR,this.colorG,this.colorB),i.uniform1f(this.uPxPerTile,t),i.uniform1f(this.uStartRadius,n.startRadius),i.uniform1f(this.uChevronSize,n.chevronSize),i.uniform1f(this.uLineWidth,n.lineWidth),i.uniform1f(this.uDuration,n.duration),i.uniform1f(this.uConverge,n.converge),i.bindVertexArray(this.vao),i.drawArrays(i.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},La={width:1280,height:768,cellSize:128,cols:10,emojis:{"😀":0,"😊":1,"🥰":2,"😇":3,"😎":4,"😞":5,"🥺":6,"😭":7,"😱":8,"😡":9,"😈":10,"🤡":11,"🥱":12,"🫡":13,"🖕":14,"👋":15,"👏":16,"✋":17,"🙏":18,"💪":19,"👍":20,"👎":21,"🫴":22,"🤌":23,"🤦‍♂️":24,"🤝":25,"🆘":26,"🕊️":27,"🏳️":28,"⌛":29,"🔥":30,"💥":31,"💀":32,"☢️":33,"⚠️":34,"↖️":35,"⬆️":36,"↗️":37,"👑":38,"🥇":39,"⬅️":40,"🎯":41,"➡️":42,"🥈":43,"🥉":44,"↙️":45,"⬇️":46,"↘️":47,"❤️":48,"💔":49,"💰":50,"⚓":51,"⛵":52,"🏡":53,"🛡️":54,"🏭":55,"🚂":56,"❓":57,"🐔":58,"🐀":59}},Ra=null,za=null;function Ba(){return za??=fetch(N(`atlases/msdf-atlas.json`)).then(e=>{if(!e.ok)throw Error(`Failed to fetch msdf-atlas.json: ${e.status}`);return e.json()}).then(e=>{Ra=e}),za}function Va(){if(Ra===null)throw Error(`Atlas data not loaded; await preloadAtlasData() first`);return{fontSize:Ra.info.size,base:Ra.common.base,scaleW:Ra.common.scaleW,scaleH:Ra.common.scaleH,distanceRange:Ra.distanceField?.distanceRange??4,chars:Ra.chars,kernings:Ra.kernings??[]}}function Ha(e){let t=new Float32Array(384),n=new Float32Array(384),r=new Float32Array(384);for(let i of e)i.id<384&&(t[i.id]=i.xadvance,n[i.id]=i.xoffset,r[i.id]=i.width);return{advance:t,xOffset:n,visW:r}}function Ua(e){let t=new Int8Array(384*384);for(let n of e)n.first<384&&n.second<384&&(t[n.first*384+n.second]=n.amount);return t}function Wa(){let e=new Map,t=La;for(let[n,r]of Object.entries(t.emojis))e.set(n,r);return e}function Ga(e,t){let n=new Float32Array(384*2*4);for(let e of t.chars){if(e.id>=384)continue;let r=e.id*4;n[r+0]=e.xadvance,n[r+1]=e.xoffset,n[r+2]=e.yoffset,n[r+3]=e.width;let i=(384+e.id)*4;n[i+0]=e.height,n[i+1]=e.x/t.scaleW,n[i+2]=e.y/t.scaleH,n[i+3]=(e.x+e.width)/t.scaleW}return U(e,{width:384,height:2,internalFormat:e.RGBA32F,format:e.RGBA,type:e.FLOAT,data:n})}function Ka(e,t){let n=t*2;return U(e,{width:32,height:n,internalFormat:e.R32F,format:e.RED,type:e.FLOAT,data:new Float32Array(32*n)})}function qa(e,t){let n=t*2;return U(e,{width:32,height:n,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:new Uint8Array(32*n)})}function Ja(e,t){return U(e,{width:9,height:t,internalFormat:e.RGBA32F,format:e.RGBA,type:e.FLOAT,data:new Float32Array(9*t*4)})}var Ya=`#version 300 es
precision highp float;

in vec2 vUV;
flat in int vBoxType;
flat in vec4 vColor;

out vec4 fragColor;

void main() {
  if (vColor.a <= 0.0) discard;

  if (vBoxType == 2) {
    // Center crosshair — draw a + shape, discard the four corner quadrants
    float cx = abs(vUV.x - 0.5);
    float cy = abs(vUV.y - 0.5);
    // Each arm is 0.15 wide (30% of half-width)
    if (cx > 0.15 && cy > 0.15) discard;
    fragColor = vColor;
  } else {
    // Wireframe border for name/flag boxes
    float borderWidth = 1.5;
    vec2 pixelSize = fwidth(vUV);
    vec2 border = borderWidth * pixelSize;

    if (vUV.x > border.x && vUV.x < 1.0 - border.x &&
        vUV.y > border.y && vUV.y < 1.0 - border.y) {
      discard;
    }
    fragColor = vColor;
  }
}
`,Xa=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec2 aPos; // unit quad [0,0]→[1,1]

uniform sampler2D uPlayerData;
uniform mat3  uCamera;
uniform float uTime;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uFontSize;
uniform float uFontBase;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;

// Flag layout (for computing flag box)
uniform float uFlagCellW;
uniform float uFlagCellH;

out vec2 vUV;
flat out int vBoxType; // 0=name, 1=flag, 2=center
flat out vec4 vColor;

void main() {
  // 3 debug boxes per player: 0=name, 1=flag, 2=center crosshair
  int playerIdx = gl_InstanceID / 3;
  int boxType   = gl_InstanceID - playerIdx * 3;

  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0);
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0);
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0);
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0);

  // Skip dead players
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vBoxType = -1;
    vColor = vec4(0.0);
    return;
  }

  // Lerped world position (same as name.vert.glsl)
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // Sizing pipeline (must match name.vert.glsl exactly)
  float baseSize      = max(1.0, floor(ws));
  float nameSize      = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale     = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;

  // Zoom-based culling
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize  = nameWorldScale * uFontBase * cameraScale;
  if (screenSize < uCullThreshold) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vBoxType = -1;
    vColor = vec4(0.0);
    return;
  }

  float nameHalfWidth = pd3.w;

  vec2 boxMin, boxMax;

  if (boxType == 0) {
    // Name text bounding box (green)
    float halfW = nameHalfWidth * nameWorldScale;
    float halfH = uFontBase * nameWorldScale * 0.5;
    boxMin = vec2(wx - halfW, wy - halfH);
    boxMax = vec2(wx + halfW, wy + halfH);
    vColor = vec4(0.0, 1.0, 0.0, 0.9);
  } else if (boxType == 1) {
    // Flag bounding box (yellow)
    float flagIdx = pd4.x;
    if (flagIdx < 0.0) {
      gl_Position = vec4(0.0);
      vUV = vec2(0.0);
      vBoxType = -1;
      vColor = vec4(0.0);
      return;
    }
    float halfW = nameHalfWidth * nameWorldScale;
    float flagWorldH = uFontBase * nameWorldScale * 1.2;
    float flagWorldW = flagWorldH * (uFlagCellW / uFlagCellH);
    boxMin = vec2(wx - halfW - flagWorldW, wy - flagWorldH * 0.5);
    boxMax = vec2(wx - halfW, wy + flagWorldH * 0.5);
    vColor = vec4(1.0, 1.0, 0.0, 0.9);
  } else {
    // Center crosshair (cyan) — fixed world size proportional to name
    float arm = uFontBase * nameWorldScale * 0.3;
    boxMin = vec2(wx - arm, wy - arm);
    boxMax = vec2(wx + arm, wy + arm);
    vColor = vec4(0.0, 1.0, 1.0, 1.0);
  }

  vUV = aPos;
  vBoxType = boxType;
  vec2 worldPos = mix(boxMin, boxMax, aPos);
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Za=128,Qa=85,$a=class{constructor(e,t,n,r){this.gl=e,this.playerDataTex=n,this.maxPlayers=r,this.program=H(e,Xa,Ya,`DebugProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),0),e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uFontBase`),t.base),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellW`),Za),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellH`),Qa),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`)}draw(e,t,n){let r=this.gl,i=t.name;r.useProgram(this.program),r.uniformMatrix3fv(this.uCamera,!1,e),r.uniform1f(this.uTime,performance.now()/1e3),r.uniform1f(this.uLerpSpeed,i.lerpSpeed),r.uniform1f(this.uCullThreshold,i.cullThreshold),r.uniform1f(this.uNameScaleFactor,i.nameScaleFactor),r.uniform1f(this.uNameScaleCap,i.nameScaleCap),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.playerDataTex),r.bindVertexArray(n),r.drawArraysInstanced(r.TRIANGLES,0,6,this.maxPlayers*3)}dispose(){this.gl.deleteProgram(this.program)}},eo=class{constructor(e,t,n=128,r=85,i=128){this.cellW=n,this.cellH=r,this.nextLayer=0,this.entries=new Map,this.gl=e,this.onLayerReady=t,this.hwMaxLayers=e.getParameter(e.MAX_ARRAY_TEXTURE_LAYERS),this.layerCount=Math.min(i,this.hwMaxLayers),this.tex=this.allocTexture(this.layerCount),this.canvas=document.createElement(`canvas`),this.canvas.width=this.cellW,this.canvas.height=this.cellH,this.ctx=this.canvas.getContext(`2d`,{willReadFrequently:!1})}allocTexture(e){let t=this.gl,n=t.createTexture();return t.bindTexture(t.TEXTURE_2D_ARRAY,n),t.texStorage3D(t.TEXTURE_2D_ARRAY,to(this.cellW,this.cellH),t.RGBA8,this.cellW,this.cellH,e),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),n}grow(){let e=Math.min(this.layerCount*2,this.hwMaxLayers);if(e<=this.layerCount)return!1;let t=this.gl,n=this.allocTexture(e),r=t.createFramebuffer();t.bindFramebuffer(t.READ_FRAMEBUFFER,r);for(let e=0;e<this.nextLayer;e++)t.framebufferTextureLayer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,this.tex,0,e),t.copyTexSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,e,0,0,this.cellW,this.cellH);return t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.deleteFramebuffer(r),t.generateMipmap(t.TEXTURE_2D_ARRAY),t.deleteTexture(this.tex),this.tex=n,this.layerCount=e,!0}get texture(){return this.tex}getLayer(e){let t=this.entries.get(e);return t&&t.ready?t.layer:-1}request(e){if(this.entries.has(e)||this.nextLayer>=this.layerCount&&!this.grow())return;let t=this.nextLayer++,n={layer:t,ready:!1};this.entries.set(e,n);let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>{this.ctx.clearRect(0,0,this.cellW,this.cellH);let i=r.width/r.height,a=this.cellW/this.cellH,o,s;i>a?(o=this.cellW,s=this.cellW/i):(s=this.cellH,o=this.cellH*i);let c=(this.cellW-o)*.5,l=(this.cellH-s)*.5;this.ctx.drawImage(r,c,l,o,s);let u=this.gl;u.bindTexture(u.TEXTURE_2D_ARRAY,this.tex),u.texSubImage3D(u.TEXTURE_2D_ARRAY,0,0,0,t,this.cellW,this.cellH,1,u.RGBA,u.UNSIGNED_BYTE,this.canvas),u.generateMipmap(u.TEXTURE_2D_ARRAY),n.ready=!0,this.onLayerReady(e,t)},r.onerror=()=>{console.warn(`Icon image failed to load:`,e)},r.src=e}dispose(){this.gl.deleteTexture(this.tex),this.entries.clear()}};function to(e,t){return Math.floor(Math.log2(Math.max(e,t)))+1}var no=`#version 300 es
precision highp float;
precision highp sampler2DArray;

uniform sampler2DArray uFlagAtlas;
uniform sampler2D      uEmojiAtlas;
uniform float          uFlagAlpha;

in vec2 vUV;
flat in int vIconType;  // 0 = flag, 1 = emoji, -1 = discard
flat in int vFlagLayer;
in float vHoverAlpha;

out vec4 fragColor;

void main() {
  if (vIconType < 0) discard;

  vec4 texel;
  if (vIconType == 0) {
    texel = texture(uFlagAtlas, vec3(vUV, float(vFlagLayer)));
    texel.a *= uFlagAlpha;
  } else {
    texel = texture(uEmojiAtlas, vUV);
  }

  if (texel.a < 0.01) discard;
  fragColor = vec4(texel.rgb, texel.a * vHoverAlpha);
}
`,ro=`#version 300 es
precision highp float;
precision highp int;

// Unit quad vertex position [0,0]→[1,1]
layout(location = 0) in vec2 aPos;

// Data textures (shared with name shader)
uniform sampler2D uPlayerData; // PLAYER_DATA_COLS × MAX_PLAYERS, RGBA32F

// Uniforms
uniform mat3  uCamera;
uniform float uTime;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;
uniform float uFontSize;        // atlas reference font size (same as name shader's uFontSize)
uniform float uFontBase;        // atlas baseline height (same as name shader's uBase)

// Flag cell shape (fixed, matches FlagAtlasArray cell size)
uniform float uFlagCellW;
uniform float uFlagCellH;

// Emoji atlas layout
uniform float uEmojiCell;    // texels per emoji cell (square)
uniform float uEmojiCols;    // columns in emoji atlas
uniform float uEmojiAtlasW;  // emoji atlas texture width
uniform float uEmojiAtlasH;  // emoji atlas texture height

// Row offset (multiples of uFontBase * nameWorldScale)
uniform float uEmojiRowOffset;

uniform float uFadeOwnerID;    // smallID of player whose name plate the cursor is over (0 = none)
uniform float uHoverFadeAlpha; // alpha multiplier applied to that player's name plate

out vec2 vUV;
flat out int vIconType;  // 0 = flag, 1 = emoji, -1 = discard
flat out int vFlagLayer; // valid when vIconType == 0
out float vHoverAlpha;

void main() {
  // Decode instance ID → playerIdx + iconType (0=flag, 1=emoji)
  int playerIdx = gl_InstanceID / 2;
  int iconType  = gl_InstanceID - playerIdx * 2;

  // Read player data
  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0); // srcX, srcY, srcScale, startTime
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0); // tgtX, tgtY, tgtScale, alive
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0); // nameLen, troopLen, isHuman, nameHalfWidth
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0); // flagLayer, emojiIdx, smallID, doomsday

  // Early out: dead player
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vIconType = -1;
    vFlagLayer = 0;
    vHoverAlpha = 1.0;
    return;
  }

  // Get atlas/layer index for this icon type
  float atlasIdx = (iconType == 0) ? pd4.x : pd4.y;
  if (atlasIdx < 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vIconType = -1;
    vFlagLayer = 0;
    vHoverAlpha = 1.0;
    return;
  }

  // Lerped world position and size (same math as name.vert.glsl)
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // Sizing pipeline (must match name.vert.glsl exactly)
  float baseSize      = max(1.0, floor(ws));
  float nameSize      = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale     = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;

  // Zoom-based culling (same as name shader)
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize  = nameWorldScale * uFontBase * cameraScale;
  // Targeted players' flag/emoji stay visible at any zoom, boosted in
  // lockstep with name.vert.glsl so the row stays aligned and centered.
  if (texelFetch(uPlayerData, ivec2(6, playerIdx), 0).y > 0.5 &&
      screenSize < uCullThreshold) {
    float boost = uCullThreshold / screenSize;
    nameWorldScale *= boost;
    screenSize = uCullThreshold;
  }
  if (screenSize < uCullThreshold) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vIconType = -1;
    vFlagLayer = 0;
    vHoverAlpha = 1.0;
    return;
  }

  float nameHalfWidth = pd3.w; // in font units (pre-scaled by nameWorldScale at runtime)

  // Compute icon size and position based on type
  float iconW, iconH;
  vec2 iconOrigin;

  if (iconType == 0) {
    // FLAG — to the left of the name. Sampled from sampler2DArray; uses
    // plain [0,1] UVs and the layer is passed via vFlagLayer.
    float flagWorldH = uFontBase * nameWorldScale * 1.2;
    float flagWorldW = flagWorldH * (uFlagCellW / uFlagCellH);

    iconOrigin = vec2(
      wx - nameHalfWidth * nameWorldScale - flagWorldW,
      wy - flagWorldH * 0.5
    );
    iconW = flagWorldW;
    iconH = flagWorldH;

    vUV = aPos;
    vFlagLayer = int(atlasIdx);
  } else {
    // EMOJI — above the name. Sampled from a 2D atlas; compute grid UVs.
    float cellW  = uEmojiCell;
    float cellH  = uEmojiCell;
    float cols   = uEmojiCols;
    float atlasW = uEmojiAtlasW;
    float atlasH = uEmojiAtlasH;

    float emojiWorldSize = uFontBase * nameWorldScale * 1.1;

    // Read precomputed active status icon count from pd8.z (set by CPU, avoids
    // duplicating flag logic here and in status-icon.vert.glsl).
    vec4 pd8 = texelFetch(uPlayerData, ivec2(8, playerIdx), 0);
    int totalStatusActive = int(pd8.z);

    // Place emoji as rightmost slot in the combined group, or centered if alone.
    float gap = emojiWorldSize * 0.15;
    int totalItems = totalStatusActive + 1;
    float totalWidth = float(totalItems) * emojiWorldSize + float(totalItems - 1) * gap;
    float emojiX = wx - totalWidth * 0.5 + float(totalStatusActive) * (emojiWorldSize + gap);

    iconOrigin = vec2(emojiX, wy - uFontBase * nameWorldScale * uEmojiRowOffset);
    iconW = emojiWorldSize;
    iconH = emojiWorldSize;

    int idx = int(atlasIdx);
    int col = idx - (idx / int(cols)) * int(cols);
    int row = idx / int(cols);
    float u0 = float(col) * cellW / atlasW;
    float v0 = float(row) * cellH / atlasH;
    float u1 = u0 + cellW / atlasW;
    float v1 = v0 + cellH / atlasH;
    vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
    vFlagLayer = 0;
  }

  // Fade the icon along with the rest of the name plate when the cursor is
  // over any part of it. Hit test runs on the CPU (NamePass).
  vHoverAlpha = (uFadeOwnerID > 0.0 && pd4.z == uFadeOwnerID)
    ? uHoverFadeAlpha : 1.0;

  // Quad world position
  vec2 worldPos = iconOrigin + aPos * vec2(iconW, iconH);

  // Camera transform
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vIconType = iconType;
}
`,io=N(`atlases/emoji-atlas.png`),ao=2,oo=class{constructor(e,t,n,r,i){this.emojiAtlasTex=null,this.emojiReady=!1,this.gl=e,this.playerDataTex=n,this.flagAtlas=r,this.maxPlayers=i,this.program=H(e,ro,no,`IconProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),0),e.uniform1i(e.getUniformLocation(this.program,`uFlagAtlas`),1),e.uniform1i(e.getUniformLocation(this.program,`uEmojiAtlas`),2);let a=La;e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uFontBase`),t.base),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellW`),128),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellH`),85),e.uniform1f(e.getUniformLocation(this.program,`uEmojiCell`),a.cellSize),e.uniform1f(e.getUniformLocation(this.program,`uEmojiCols`),a.cols),e.uniform1f(e.getUniformLocation(this.program,`uEmojiAtlasW`),a.width),e.uniform1f(e.getUniformLocation(this.program,`uEmojiAtlasH`),a.height),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`),this.uEmojiRowOffset=e.getUniformLocation(this.program,`uEmojiRowOffset`),this.uFadeOwnerID=e.getUniformLocation(this.program,`uFadeOwnerID`),this.uHoverFadeAlpha=e.getUniformLocation(this.program,`uHoverFadeAlpha`),this.uFlagAlpha=e.getUniformLocation(this.program,`uFlagAlpha`),this.loadEmojiAtlas()}get ready(){return this.emojiReady}loadEmojiAtlas(){let e=this.gl,t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),this.emojiAtlasTex=n,this.emojiReady=!0},t.src=io}draw(e,t,n,r){if(!this.emojiReady)return;let i=this.gl,a=t.name;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform1f(this.uTime,performance.now()/1e3),i.uniform1f(this.uLerpSpeed,a.lerpSpeed),i.uniform1f(this.uCullThreshold,a.cullThreshold),i.uniform1f(this.uNameScaleFactor,a.nameScaleFactor),i.uniform1f(this.uNameScaleCap,a.nameScaleCap),i.uniform1f(this.uEmojiRowOffset,a.emojiRowOffset),i.uniform1f(this.uFadeOwnerID,r),i.uniform1f(this.uHoverFadeAlpha,a.hoverFadeAlpha),i.uniform1f(this.uFlagAlpha,a.flagAlpha),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.playerDataTex),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D_ARRAY,this.flagAtlas.texture),i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D,this.emojiAtlasTex),i.bindVertexArray(n),i.drawArraysInstanced(i.TRIANGLES,0,6,this.maxPlayers*ao)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.emojiAtlasTex&&e.deleteTexture(this.emojiAtlasTex)}},so={width:768,height:1024,cellSize:256,cols:3,pad:16,icons:{crown:0,traitor:1,disconnected:2,alliance:3,allianceRequest:4,target:5,embargo:6,nukeRed:7,nukeWhite:8,allianceFaded:9,doomsdayClock:10,verified:11}},co=`#version 300 es
precision highp float;
precision highp sampler2DArray;

uniform sampler2D uStatusAtlas;
uniform sampler2DArray uCrownAtlas; // crown-cosmetic images (skins slot 0)
uniform vec2 uStatusTexel;     // 1/atlasW, 1/atlasH
uniform float uStatusOutlinePx; // outline radius in atlas texels (0 = off)

in vec2 vUV;
in vec2 vLocalUV;
flat in int vCrownLayer;
flat in int vDiscard;
flat in float vAllianceFraction;
flat in vec2 vFadedUV0;
flat in vec2 vFadedUV1;
flat in float vFlashAlpha;
flat in float vOutline;          // 1.0 = draw a dark outline behind this icon
flat in float vDecay;            // 1.0 = tint this icon red (decaying skull)
in float vHoverAlpha;

out vec4 fragColor;

// 8 unit directions for the outline dilation sample ring.
const vec2 kRing[8] = vec2[8](
  vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
  vec2(0.707, 0.707), vec2(-0.707, 0.707),
  vec2(0.707, -0.707), vec2(-0.707, -0.707)
);

void main() {
  if (vDiscard != 0) discard;

  // A crown cosmetic replaces the default first-place crown icon. Only slot 0
  // ever carries a layer, and its quad has no outline margin, so vLocalUV is
  // plain [0,1] over the icon.
  vec4 texel = (vCrownLayer >= 0)
    ? texture(uCrownAtlas, vec3(vLocalUV, float(vCrownLayer)))
    : texture(uStatusAtlas, vUV);

  // Alliance drain: composite faded icon behind colored icon, clipped by fraction.
  // Matches the game's CSS clip-path: inset(topCut% -2px 0 -2px) behavior.
  if (vAllianceFraction > 0.0) {
    // Game formula: topCut = 20 + (1-fraction) * 80 * 0.78  (% → 0..1)
    float topCut = 0.20 + (1.0 - vAllianceFraction) * 0.624;

    // Sample faded icon at corresponding local position
    vec2 fadedUV = mix(vFadedUV0, vFadedUV1, vLocalUV);
    vec4 fadedTexel = texture(uStatusAtlas, fadedUV);

    // Above the cut line → show faded; below → show colored
    texel = vLocalUV.y < topCut ? fadedTexel : texel;
  }

  // Decaying skull: tint red, keeping some luminance so its shading still reads.
  if (vDecay > 0.5) {
    float lum = dot(texel.rgb, vec3(0.299, 0.587, 0.114));
    texel.rgb = vec3(0.90, 0.10, 0.10) * (0.55 + 0.45 * lum);
  }

  // Traitor flash + hover fade: modulate alpha
  float fade = vFlashAlpha * vHoverAlpha;
  texel.a *= fade;

  // Dark outline: dilate the icon's alpha so it stays legible over terrain of a
  // similar color (the green alliance icon vs. irradiated land). Sampling the
  // padded atlas cell never reaches a neighbouring icon.
  if (vOutline > 0.5 && uStatusOutlinePx > 0.0) {
    float ring = 0.0;
    vec2 sampleStep = uStatusTexel * uStatusOutlinePx;
    for (int i = 0; i < 8; i++) {
      ring = max(ring, texture(uStatusAtlas, vUV + kRing[i] * sampleStep).a);
    }
    ring *= fade;
    float outlineA = ring * (1.0 - texel.a);
    texel = vec4(mix(vec3(0.0), texel.rgb, texel.a), max(texel.a, outlineA));
  }

  if (texel.a < 0.01) discard;
  fragColor = texel;
}
`,lo=`#version 300 es
precision highp float;
precision highp int;

// Unit quad vertex position [0,0]→[1,1]
layout(location = 0) in vec2 aPos;

// Data textures (shared with name shader)
uniform sampler2D uPlayerData; // 8 × MAX_PLAYERS, RGBA32F

// Uniforms
uniform mat3  uCamera;
uniform float uTime;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;
uniform float uFontSize;
uniform float uFontBase;

// Status atlas layout
uniform float uStatusCell;   // texels per cell (square)
uniform float uStatusCols;   // columns in atlas
uniform float uStatusAtlasW; // atlas texture width
uniform float uStatusAtlasH; // atlas texture height
uniform float uStatusPad;    // transparent padding in texels per side
uniform float uStatusOutlinePx; // dark-outline radius in atlas texels (0 = off)

// Configurable layout
uniform float uStatusRowOffset;  // row Y offset (multiples of uFontBase * nameWorldScale)

uniform float uFadeOwnerID;    // smallID of player whose name plate the cursor is over (0 = none)
uniform float uHoverFadeAlpha; // alpha multiplier applied to that player's name plate
uniform float uAllianceFlashWindowSec; // seconds before expiry the alliance icon flashes (= renewal prompt offset)

out vec2 vUV;
out vec2 vLocalUV;               // 0..1 within the icon cell
flat out int vCrownLayer;        // crown-cosmetic atlas layer for slot 0, or -1
flat out int vDiscard;
flat out float vAllianceFraction; // 0 = no drain effect, >0 = active drain
flat out vec2 vFadedUV0;         // top-left UV of faded alliance cell
flat out vec2 vFadedUV1;         // bottom-right UV of faded alliance cell
flat out float vFlashAlpha;      // traitor flash opacity (1.0 = fully visible)
flat out float vOutline;         // 1.0 = alliance icon, draw a dark outline
flat out float vDecay;           // 1.0 = doomsday skull is DECAYING -> tint red
out float vHoverAlpha;

// Status flag float array — indexed by icon slot.
// Slot mapping: 0=crown, 1=traitor, 2=disconnected, 3=alliance,
//               4=allianceReq, 5=target, 6=embargo, 7=nukeActive, 8=doomsdayClock
float statusFlag[9];

// Read status flags from pd4.w/pd5/pd6 into the statusFlag array.
void readStatusFlags(int playerIdx) {
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0);
  vec4 pd5 = texelFetch(uPlayerData, ivec2(5, playerIdx), 0);
  vec4 pd6 = texelFetch(uPlayerData, ivec2(6, playerIdx), 0);
  statusFlag[0] = pd5.x; // crown
  statusFlag[1] = pd5.y; // traitor
  statusFlag[2] = pd5.z; // disconnected
  statusFlag[3] = pd5.w; // alliance
  statusFlag[4] = pd6.x; // allianceReq
  statusFlag[5] = pd6.y; // target
  statusFlag[6] = pd6.z; // embargo
  statusFlag[7] = pd6.w; // nukeActive
  statusFlag[8] = pd4.w; // doomsdayClock
}

// Count active icons with index < pos.
int countBelow(int pos) {
  int count = 0;
  for (int i = 0; i < pos; i++) {
    if (statusFlag[i] > 0.5) count++;
  }
  return count;
}

// Compute padded UV rect for an atlas cell.
// Returns (u0, v0) in xy and (u1, v1) in zw, inset by pad pixels.
vec4 cellUV(int idx) {
  int col = idx - (idx / int(uStatusCols)) * int(uStatusCols);
  int row = idx / int(uStatusCols);
  float u0 = (float(col) * uStatusCell + uStatusPad) / uStatusAtlasW;
  float v0 = (float(row) * uStatusCell + uStatusPad) / uStatusAtlasH;
  float iconSize = uStatusCell - 2.0 * uStatusPad;
  float u1 = u0 + iconSize / uStatusAtlasW;
  float v1 = v0 + iconSize / uStatusAtlasH;
  return vec4(u0, v0, u1, v1);
}

void main() {
  // Decode instance ID → playerIdx + iconSlot (0..8 status row, 9 = verified
  // badge to the right of the name)
  int playerIdx = gl_InstanceID / 10;
  int iconSlot  = gl_InstanceID - playerIdx * 10;
  bool isVerifiedSlot = (iconSlot == 9);

  // Read player data
  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0); // srcX, srcY, srcScale, startTime
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0); // tgtX, tgtY, tgtScale, alive
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0); // nameLen, troopLen, nameShade, nameHalfWidth
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0); // flagIdx, emojiIdx, smallID, [free]
  vec4 pd7 = texelFetch(uPlayerData, ivec2(7, playerIdx), 0); // nukeTargetsMe, traitorRemainingTicks, allianceFraction, allianceRemainingTicks
  vec4 pd8 = texelFetch(uPlayerData, ivec2(8, playerIdx), 0); // crownLayer, verified, [free]

  // A crown cosmetic skins the first-place crown (slot 0).
  vCrownLayer = (iconSlot == 0 && pd8.x >= 0.0) ? int(pd8.x) : -1;

  vDecay = 0.0; // only the decaying doomsday skull raises this

  // Early out: dead player only (emoji no longer hides status icons)
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vLocalUV = vec2(0.0);
    vDiscard = 1;
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
    vFlashAlpha = 1.0;
    vOutline = 0.0;
    vHoverAlpha = 1.0;
    return;
  }

  // Read status flags into array
  readStatusFlags(playerIdx);

  // Early out: this icon slot is inactive. The verified badge (slot 9) is
  // driven by pd8.y, not the status-row flag array.
  bool slotActive = isVerifiedSlot ? (pd8.y > 0.5) : (statusFlag[iconSlot] > 0.5);
  if (!slotActive) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vLocalUV = vec2(0.0);
    vDiscard = 1;
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
    vFlashAlpha = 1.0;
    vOutline = 0.0;
    vHoverAlpha = 1.0;
    return;
  }

  // Lerped world position and size (same math as name.vert.glsl)
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // Sizing pipeline (must match name.vert.glsl exactly)
  float baseSize      = max(1.0, floor(ws));
  float nameSize      = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale     = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;

  // Zoom-based culling (same as name shader)
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize  = nameWorldScale * uFontBase * cameraScale;
  // Targeted players' icons (incl. the crosshair) stay visible at any zoom,
  // boosted in lockstep with name.vert.glsl so the layout stays aligned.
  if (statusFlag[5] > 0.5 && screenSize < uCullThreshold) {
    float boost = uCullThreshold / screenSize;
    nameWorldScale *= boost;
    screenSize = uCullThreshold;
  }
  if (screenSize < uCullThreshold) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vLocalUV = vec2(0.0);
    vDiscard = 1;
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
    vFlashAlpha = 1.0;
    vOutline = 0.0;
    vHoverAlpha = 1.0;
    return;
  }

  // Icon world size: matches name text height
  float iconWorldSize = uFontBase * nameWorldScale * 1.1;

  float iconX;
  float iconY;
  if (isVerifiedSlot) {
    // Verified badge: small mark tucked against the name's top-right corner,
    // like a superscript. The name line spans wy +- 0.5 * lineHeight; the
    // badge is raised so its lower half overlaps the line's top edge.
    float lineHeight = uFontBase * nameWorldScale;
    iconWorldSize = lineHeight * 0.55;
    iconX = wx + pd3.w * nameWorldScale - lineHeight * 0.04;
    iconY = wy - lineHeight * 0.5 - iconWorldSize * 0.5;
  } else {
    // Count active status icons and position of this one (left-to-right).
    // If an emoji is also active it occupies one extra slot on the right,
    // so include it in the total for centering purposes.
    // totalActive is precomputed by the CPU into pd8.z — single source of truth.
    int totalActive = int(pd8.z);
    bool hasEmoji = (pd4.y >= 0.0);
    int totalItems = totalActive + (hasEmoji ? 1 : 0);
    int myIndex = countBelow(iconSlot);

    // Horizontal centering: treat status icons + emoji as one group.
    float gap = iconWorldSize * 0.15;
    float totalWidth = float(totalItems) * iconWorldSize + float(totalItems - 1) * gap;
    float startX = wx - totalWidth * 0.5;
    iconX = startX + float(myIndex) * (iconWorldSize + gap);

    // Position: same row as the emoji
    iconY = wy - uFontBase * nameWorldScale * uStatusRowOffset;
  }

  // Determine atlas index
  // Slots 0-6 map directly to atlas indices 0-6
  // Slot 7 (nuke): use nukeRed (7) if nukeTargetsMe, else nukeWhite (8)
  int atlasIdx = iconSlot;
  if (iconSlot == 7) {
    atlasIdx = (pd7.x > 0.5) ? 7 : 8;
  }
  if (iconSlot == 8) {
    atlasIdx = 10; // doomsday-clock skull
  }
  if (isVerifiedSlot) {
    atlasIdx = 11; // blue verified check
  }

  // Only the alliance icon (slot 3) gets the dark outline.
  vOutline = (iconSlot == 3) ? 1.0 : 0.0;

  // Fade the status row along with the rest of the name plate when the cursor
  // is over any part of it. Hit test runs on the CPU (NamePass).
  vHoverAlpha = (uFadeOwnerID > 0.0 && pd4.z == uFadeOwnerID)
    ? uHoverFadeAlpha : 1.0;

  // Dark-outline margin: grow the alliance icon's quad outward into the cell's
  // transparent padding so the outline halo isn't clipped at the quad edge.
  // The icon content keeps its size; only the quad's bounding box grows. Other
  // icons keep marginWorld = 0 and render pixel-identically.
  float iconTexels = uStatusCell - 2.0 * uStatusPad;
  float marginTex = (vOutline > 0.5 && uStatusOutlinePx > 0.0)
    ? min(uStatusPad - 2.0, uStatusOutlinePx + 2.0)
    : 0.0;
  float marginWorld = marginTex * (iconWorldSize / iconTexels);

  // Quad world position (expanded by the outline margin, centred on the icon)
  vec2 iconOrigin = vec2(iconX, iconY) - vec2(marginWorld);
  float quadSize = iconWorldSize + 2.0 * marginWorld;
  vec2 worldPos = iconOrigin + aPos * vec2(quadSize, quadSize);

  // Camera transform
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // vLocalUV in icon-content space: 0..1 over the icon, <0/>1 in the outline
  // margin. This keeps the drain math below unchanged and samples the
  // transparent padding (never a neighbour) when the quad is expanded.
  vLocalUV = (aPos * quadSize - marginWorld) / iconWorldSize;

  // UV from atlas grid (padded to avoid mipmap bleed)
  vec4 uv = cellUV(atlasIdx);
  vUV = vec2(mix(uv.x, uv.z, vLocalUV.x), mix(uv.y, uv.w, vLocalUV.y));

  // Alliance drain: slot 3 = alliance icon
  float allianceFrac = pd7.z;
  if (iconSlot == 3 && allianceFrac > 0.0 && allianceFrac < 1.0) {
    vAllianceFraction = allianceFrac;
    // Faded alliance icon is at atlas index 9
    vec4 fadedUV = cellUV(9);
    vFadedUV0 = fadedUV.xy;
    vFadedUV1 = fadedUV.zw;
  } else {
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
  }

  // Traitor flash: slot 1 = traitor icon
  // Frequency ramps linearly from 2 Hz (at 15s) to 5 Hz (at 0s).
  // Phase = uTime*2 + elapsed²*0.1 — the quadratic term adds smooth
  // acceleration without phase discontinuities between ticks.
  vFlashAlpha = 1.0;
  if (iconSlot == 1) {
    float remaining = pd7.y;                          // ticks (0-300, 10/sec)
    float remainingSec = remaining / 10.0;             // seconds
    if (remainingSec <= 15.0 && remainingSec > 0.0) {
      float elapsed = 15.0 - remainingSec;
      float phase = uTime * 2.0 + elapsed * elapsed * 0.1;
      vFlashAlpha = 0.3 + 0.7 * (0.5 + 0.5 * cos(phase * 6.2832));
    }
  }

  // Alliance expiry flash: slot 3 = alliance icon
  // Window matches the renewal prompt offset so the icon flashes exactly
  // while the prompt is up. Same pulse as the traitor flash (2 Hz → 5 Hz).
  if (iconSlot == 3) {
    float window = uAllianceFlashWindowSec;
    float remainingSec = pd7.w / 10.0;                 // ticks → seconds
    if (window > 0.0 && remainingSec <= window && remainingSec > 0.0) {
      float elapsed = window - remainingSec;
      float phase = uTime * 2.0 + elapsed * elapsed * (1.5 / window);
      vFlashAlpha = 0.3 + 0.7 * (0.5 + 0.5 * cos(phase * 6.2832));
    }
  }

  // Doomsday Clock skull: slot 8. While in danger (flag 1.0-1.49) the skull
  // blinks and speeds up as the warn countdown runs out — the progress 0->1 is
  // packed into the flag's fraction. Base ~2 Hz plus a p^2 phase term so it
  // accelerates toward the drain (same trick as the alliance-renewal flash
  // above, which keeps the phase continuous). Holds steady once draining (>=1.5).
  if (iconSlot == 8) {
    if (statusFlag[8] < 1.5) {
      float p = clamp((statusFlag[8] - 1.0) / 0.49, 0.0, 1.0);
      float phase = uTime * 2.0 + p * p * 40.0;
      vFlashAlpha = 0.35 + 0.65 * (0.5 + 0.5 * cos(phase * 6.2832));
    } else {
      vFlashAlpha = 1.0;
    }
    // 3.0 = decaying: steady like draining, but tinted red.
    if (statusFlag[8] > 2.5) vDecay = 1.0;
  }

  vDiscard = 0;
}
`,uo=N(`atlases/status-atlas.png`),fo=10,po=class{constructor(e,t,n,r,i,a){this.crownAtlas=r,this.statusAtlasTex=null,this.atlasReady=!1,this.gl=e,this.playerDataTex=n,this.maxPlayers=i,this.program=H(e,lo,co,`StatusIconProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),0),e.uniform1i(e.getUniformLocation(this.program,`uStatusAtlas`),1),e.uniform1i(e.getUniformLocation(this.program,`uCrownAtlas`),2);let o=so;e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uFontBase`),t.base),e.uniform1f(e.getUniformLocation(this.program,`uStatusCell`),o.cellSize),e.uniform1f(e.getUniformLocation(this.program,`uStatusCols`),o.cols),e.uniform1f(e.getUniformLocation(this.program,`uStatusAtlasW`),o.width),e.uniform1f(e.getUniformLocation(this.program,`uStatusAtlasH`),o.height),e.uniform1f(e.getUniformLocation(this.program,`uStatusPad`),o.pad??0),e.uniform2f(e.getUniformLocation(this.program,`uStatusTexel`),1/o.width,1/o.height),e.uniform1f(e.getUniformLocation(this.program,`uAllianceFlashWindowSec`),a/10),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`),this.uStatusRowOffset=e.getUniformLocation(this.program,`uStatusRowOffset`),this.uFadeOwnerID=e.getUniformLocation(this.program,`uFadeOwnerID`),this.uHoverFadeAlpha=e.getUniformLocation(this.program,`uHoverFadeAlpha`),this.uStatusOutlinePx=e.getUniformLocation(this.program,`uStatusOutlinePx`),this.loadAtlas()}loadAtlas(){let e=this.gl,t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),this.statusAtlasTex=n,this.atlasReady=!0},t.src=uo}draw(e,t,n,r){if(!this.atlasReady)return;let i=this.gl,a=t.name;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform1f(this.uTime,performance.now()/1e3),i.uniform1f(this.uLerpSpeed,a.lerpSpeed),i.uniform1f(this.uCullThreshold,a.cullThreshold),i.uniform1f(this.uNameScaleFactor,a.nameScaleFactor),i.uniform1f(this.uNameScaleCap,a.nameScaleCap),i.uniform1f(this.uStatusRowOffset,a.statusRowOffset),i.uniform1f(this.uFadeOwnerID,r),i.uniform1f(this.uHoverFadeAlpha,a.hoverFadeAlpha),i.uniform1f(this.uStatusOutlinePx,a.statusOutlineWidth),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.playerDataTex),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,this.statusAtlasTex),i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D_ARRAY,this.crownAtlas.texture),i.bindVertexArray(n),i.drawArraysInstanced(i.TRIANGLES,0,6,this.maxPlayers*fo)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.statusAtlasTex&&e.deleteTexture(this.statusAtlasTex)}};function mo(e,t,n,r,i){r.fill(0),i.fill(0);let a=Math.min(e.length,32);for(let t=0;t<a;t++)r[t]=e.charCodeAt(t);let o=0,s=0;for(let e=0;e<a;e++){let a=r[e];i[e]=o;let c=t.advance[a];e>0&&(c+=n[s*384+a]),o+=c,s=a}let c=r[0],l=r[a-1],u=i[0]+t.xOffset[c],d=i[a-1]+t.xOffset[l]+t.visW[l],f=(u+d)*.5;for(let e=0;e<a;e++)i[e]-=f;return(d-u)*.5}var ho=`#version 300 es
precision highp float;

uniform sampler2D uAtlas;
uniform float uDistRange;
uniform float uOutlineWidth;
uniform float uNightAmbient;
uniform vec3  uOutlineColor;
uniform float uOutlineUsePlayerColor;
uniform float uFillUsePlayerColor;
uniform float uHoverGlowWidth; // px the white hover glow extends past the outline
uniform float uHoverGlowAlpha; // peak opacity of the hover glow

in vec2 vUV;
in vec4 vPlayerColor;   // player territory color (rgb) + alpha
in float vNameShade;      // name fill grayscale shade (0.0 = black)
flat in float vHighlight; // 1.0 when this player is hovered (white glow)
out vec4 fragColor;

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  // Degenerate fragment — skip
  if (vPlayerColor.a <= 0.0) discard;

  // Border darkens with night: t² stays dark longer, snaps toward the
  // outline color late in the day cycle.
  float t = 1.0 - uNightAmbient;
  float borderT = t * t;

  // Compute fill color: player color, or per-type grayscale shade
  // (black for human, grayer for nation/bot). Applies in day and night.
  vec3 defaultFill = vec3(vNameShade);
  vec3 fillColor = mix(defaultFill, vPlayerColor.rgb, uFillUsePlayerColor);

  vec3 msd = texture(uAtlas, vUV).rgb;
  float sd = median(msd.r, msd.g, msd.b);

  vec2 unitRange = uDistRange / vec2(textureSize(uAtlas, 0));
  vec2 screenTexSize = 1.0 / fwidth(vUV);
  float screenPxRange = max(0.5 * dot(unitRange, screenTexSize), 1.0);

  float screenPxDist = screenPxRange * (sd - 0.5);
  float fillAlpha = clamp(screenPxDist + 0.5, 0.0, 1.0);

  // The SDF saturates at sd=0 (screenPxDist = -screenPxRange*0.5).
  // Reserve a 1px margin so saturated fragments always get alpha=0.
  float maxOutline = max(screenPxRange * 0.5 - 1.0, 0.0);
  float effectiveOutline = min(uOutlineWidth, maxOutline);

  vec3 color;
  float coverage;
  if (uOutlineWidth > 0.0) {
    float outlineDist = screenPxDist + effectiveOutline;
    float outlineAlpha = clamp(outlineDist + 0.5, 0.0, 1.0);

    vec3 nightOutlineColor = mix(vec3(0.0), uOutlineColor, borderT);
    vec3 borderColor = mix(nightOutlineColor, vPlayerColor.rgb, uOutlineUsePlayerColor);
    color = mix(borderColor, fillColor, fillAlpha);
    coverage = outlineAlpha;
  } else {
    color = fillColor;
    coverage = fillAlpha;
  }

  // Soft white glow behind the hovered player's name. Width is clamped to
  // the SDF margin past the outline so it never hard-clips at the quad edge.
  if (vHighlight > 0.5 && uHoverGlowAlpha > 0.0) {
    float glowWidth = min(uHoverGlowWidth, max(maxOutline - effectiveOutline, 0.0));
    if (glowWidth > 0.0) {
      float g = clamp(1.0 + (screenPxDist + effectiveOutline) / glowWidth, 0.0, 1.0);
      float glowAlpha = g * g * uHoverGlowAlpha;
      float total = coverage + glowAlpha * (1.0 - coverage);
      if (total > 0.0) {
        color = mix(vec3(1.0), color, coverage / total);
        coverage = total;
      }
    }
  }

  fragColor = vec4(color, vPlayerColor.a * coverage);
}
`,go=`#version 300 es
precision highp float;
precision highp int;
precision highp usampler2D;

// Unit quad vertex position [0,0]→[1,1]
layout(location = 0) in vec2 aPos;

// Data textures
uniform sampler2D  uGlyphMetrics;  // CHAR_RANGE × 2, RGBA32F
uniform sampler2D  uCursorX;       // MAX_CHARS × (MAX_PLAYERS*2), R32F — pre-computed centered cursor X
uniform usampler2D uStrings;       // MAX_CHARS × (MAX_PLAYERS*2), R8UI
uniform sampler2D  uPlayerData;    // 4 × MAX_PLAYERS, RGBA32F

// Uniforms
uniform mat3  uCamera;
uniform float uTime;
uniform float uFontSize;    // atlas reference font size
uniform float uAtlasScaleW; // atlas texture width
uniform float uAtlasScaleH; // atlas texture height
uniform float uBase;        // atlas baseline height

const int MAX_CHARS_PER_LINE = MAX_CHARS;
const int LINES = LINES_PER_PLAYER;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;
uniform float uTroopSizeMultiplier;
uniform float uHighlightOwnerID;
uniform float uFadeOwnerID;    // smallID of player whose name plate the cursor is over (0 = none)
uniform float uHoverFadeAlpha; // alpha multiplier applied to that player's name plate

out vec2 vUV;
out vec4 vPlayerColor;  // player territory color (rgb) + alpha
out float vNameShade;     // name fill grayscale shade (0.0 = black)
flat out float vHighlight; // 1.0 when this player is hovered (white glow)

void main() {
  // 1. Decode instance ID → playerIdx, lineIdx, charPos
  int slotsPerPlayer = LINES * MAX_CHARS_PER_LINE;
  int playerIdx = gl_InstanceID / slotsPerPlayer;
  int remainder = gl_InstanceID - playerIdx * slotsPerPlayer;
  int lineIdx   = remainder / MAX_CHARS_PER_LINE;
  int charPos   = remainder - lineIdx * MAX_CHARS_PER_LINE;

  // 2. Read player data
  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0); // srcX, srcY, srcScale, startTime
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0); // tgtX, tgtY, tgtScale, alive
  vec4 pd2 = texelFetch(uPlayerData, ivec2(2, playerIdx), 0); // r, g, b, a
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0); // nameLen, troopLen, nameShade, nameHalfWidth
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0); // flagLayerIdx, emojiAtlasIdx, smallID, 0
  float smallID = pd4.z;

  // Early out: dead player
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // String length for this line
  int len = (lineIdx == 0) ? int(pd3.x) : int(pd3.y);
  if (charPos >= len) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 3. Read char code at this position
  int stringRow = playerIdx * LINES + lineIdx;
  uint charCode = texelFetch(uStrings, ivec2(charPos, stringRow), 0).r;
  if (charCode == 0u) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 4. Compute lerped world position and size
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // 5. Sizing pipeline (matches NameLayer.ts)
  float baseSize  = max(1.0, floor(ws));
  float nameSize  = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;
  float worldScale = nameWorldScale;

  bool isHighlighted = uHighlightOwnerID > 0.0 && smallID == uHighlightOwnerID;

  // Targeted players' names must stay findable at any zoom (pd6.y = target
  // status flag; the crosshair in status-icon.vert.glsl matches this).
  bool isTargeted = texelFetch(uPlayerData, ivec2(6, playerIdx), 0).y > 0.5;

  // Troop count is smaller
  if (lineIdx == 1) {
    worldScale *= uTroopSizeMultiplier;
  }

  // Zoom-based culling: compute screen-space size and skip if too small.
  // Highlighted (hovered) names bypass the cull so they're always visible.
  // uCamera[0][0] is the x-scale component of the camera matrix
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize = nameWorldScale * uBase * cameraScale;
  // Targeted names bypass the cull, boosted to the smallest size that
  // survives it, so a mark set from across the map is still visible.
  if (isTargeted && screenSize < uCullThreshold) {
    float boost = uCullThreshold / screenSize;
    nameWorldScale *= boost;
    worldScale *= boost;
    screenSize = uCullThreshold;
  }
  if (screenSize < uCullThreshold && !isHighlighted) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 6. Read pre-computed centered cursor X position
  float cursorX = texelFetch(uCursorX, ivec2(charPos, stringRow), 0).r;

  // 7. Glyph metrics for this character
  vec4 m0 = texelFetch(uGlyphMetrics, ivec2(int(charCode), 0), 0); // xadvance, xoffset, yoffset, width
  vec4 m1 = texelFetch(uGlyphMetrics, ivec2(int(charCode), 1), 0); // height, atlasU0, atlasV0, atlasU1
  // atlasV1 packed: we need 5 values from 2 RGBA texels (8 slots), so atlasV1 is in m0 slot?
  // Actually let's use: m0=(xadvance, xoffset, yoffset, width), m1=(height, u0, v0, u1), and compute v1
  float glyphW = m0.w;
  float glyphH = m1.x;
  float u0 = m1.y;
  float v0 = m1.z;
  float u1 = m1.w;
  float v1 = v0 + glyphH / uAtlasScaleH;

  // Degenerate if glyph has no size (e.g. space)
  if (glyphW <= 0.0 || glyphH <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 8. Compute world-space quad position
  float baselineY = -uBase * 0.5; // center vertically
  // Use name-line scale for offset so troops sit below the name, not overlapping
  float lineOffsetY = (lineIdx == 1) ? uBase * nameWorldScale * 1.1 : 0.0;

  vec2 glyphOrigin = vec2(
    cursorX + m0.y,  // + xoffset
    baselineY + m0.z // + yoffset
  ) * worldScale;

  vec2 glyphSize = vec2(glyphW, glyphH) * worldScale;

  vec2 worldPos = vec2(wx, wy + lineOffsetY) + glyphOrigin + aPos * glyphSize;

  // 9. Camera transform
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // 10. Fade the whole name plate when the cursor is on top of any part of it
  // so units underneath stay visible. Hit test runs on the CPU (NamePass).
  float hoverAlpha = (uFadeOwnerID > 0.0 && smallID == uFadeOwnerID)
    ? uHoverFadeAlpha : 1.0;

  // 11. UV interpolation across quad
  vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
  vPlayerColor = vec4(pd2.rgb, pd2.a * hoverAlpha); // player territory color + alpha
  vNameShade = pd3.z;         // name fill grayscale shade (0.0 = black)
  vHighlight = isHighlighted ? 1.0 : 0.0;
}
`,_o=N(`atlases/msdf-atlas.png`),vo=class{constructor(e,t,n){this.atlasTex=null,this.atlasReady=!1,this.gl=e,this.textures=n,this.distanceRange=t.distanceRange,this.program=H(e,W(go,{MAX_CHARS:32,LINES_PER_PLAYER:2}),ho,`TextProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),0),e.uniform1i(e.getUniformLocation(this.program,`uGlyphMetrics`),1),e.uniform1i(e.getUniformLocation(this.program,`uCursorX`),2),e.uniform1i(e.getUniformLocation(this.program,`uStrings`),3),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),4),e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uAtlasScaleW`),t.scaleW),e.uniform1f(e.getUniformLocation(this.program,`uAtlasScaleH`),t.scaleH),e.uniform1f(e.getUniformLocation(this.program,`uBase`),t.base),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uDistRange=e.getUniformLocation(this.program,`uDistRange`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`),this.uTroopSizeMultiplier=e.getUniformLocation(this.program,`uTroopSizeMultiplier`),this.uHighlightOwnerID=e.getUniformLocation(this.program,`uHighlightOwnerID`),this.uFadeOwnerID=e.getUniformLocation(this.program,`uFadeOwnerID`),this.uHoverFadeAlpha=e.getUniformLocation(this.program,`uHoverFadeAlpha`),this.uOutlineWidth=e.getUniformLocation(this.program,`uOutlineWidth`),this.uNightAmbient=e.getUniformLocation(this.program,`uNightAmbient`),this.uOutlineColor=e.getUniformLocation(this.program,`uOutlineColor`),this.uOutlineUsePlayerColor=e.getUniformLocation(this.program,`uOutlineUsePlayerColor`),this.uFillUsePlayerColor=e.getUniformLocation(this.program,`uFillUsePlayerColor`),this.uHoverGlowWidth=e.getUniformLocation(this.program,`uHoverGlowWidth`),this.uHoverGlowAlpha=e.getUniformLocation(this.program,`uHoverGlowAlpha`),this.loadAtlas()}get ready(){return this.atlasReady}loadAtlas(){let e=this.gl,t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),this.atlasTex=n,this.atlasReady=!0},t.src=_o}draw(e,t,n,r,i,a,o){if(!this.atlasReady)return;let s=this.gl,c=t.name;s.useProgram(this.program),s.uniformMatrix3fv(this.uCamera,!1,e),s.uniform1f(this.uTime,performance.now()/1e3),s.uniform1f(this.uDistRange,this.distanceRange),s.uniform1f(this.uLerpSpeed,c.lerpSpeed),s.uniform1f(this.uCullThreshold,c.cullThreshold),s.uniform1f(this.uNameScaleFactor,c.nameScaleFactor),s.uniform1f(this.uNameScaleCap,c.nameScaleCap),s.uniform1f(this.uTroopSizeMultiplier,c.troopSizeMultiplier),s.uniform1f(this.uHighlightOwnerID,a),s.uniform1f(this.uFadeOwnerID,o),s.uniform1f(this.uHoverFadeAlpha,c.hoverFadeAlpha),s.uniform1f(this.uOutlineWidth,c.outlineWidth),s.uniform1f(this.uNightAmbient,i),s.uniform3f(this.uOutlineColor,c.outlineR,c.outlineG,c.outlineB),s.uniform1f(this.uOutlineUsePlayerColor,+!!c.outlineUsePlayerColor),s.uniform1f(this.uFillUsePlayerColor,+!!c.fillUsePlayerColor),s.uniform1f(this.uHoverGlowWidth,c.hoverGlowWidth),s.uniform1f(this.uHoverGlowAlpha,c.hoverGlowAlpha),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,this.atlasTex),s.activeTexture(s.TEXTURE1),s.bindTexture(s.TEXTURE_2D,this.textures.glyphMetrics),s.activeTexture(s.TEXTURE2),s.bindTexture(s.TEXTURE_2D,this.textures.cursor),s.activeTexture(s.TEXTURE3),s.bindTexture(s.TEXTURE_2D,this.textures.strings),s.activeTexture(s.TEXTURE4),s.bindTexture(s.TEXTURE_2D,this.textures.playerData),s.bindVertexArray(n),s.drawArraysInstanced(s.TRIANGLES,0,6,r*2*32)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.atlasTex&&e.deleteTexture(this.atlasTex)}},yo=128/85,bo=32,xo=class e{static{this.UPDATE_SLICES=4}constructor(e,t,n,r,i){this.slots=new Map,this.playerColors=new Map,this.slotsWaitingForFlag=new Map,this.slotsWaitingForCrown=new Map,this.playerDataDirty=!1,this.stringDataDirty=!1,this.cursorDataDirty=!1,this.slicePhase=0,this.highlightOwnerID=0,this.mouseWorldX=-1e9,this.mouseWorldY=-1e9,this.gl=e,this.settings=r,this.maxPlayers=t.maxPlayers??t.players.length;let a=Va();this.fontSize=a.fontSize,this.fontBase=a.base,this.glyph=Ha(a.chars),this.kernTable=Ua(a.kernings),this.emojiCharToIndex=Wa(),this.flagAtlas=new eo(e,(e,t)=>{let n=this.slotsWaitingForFlag.get(e);if(n){this.slotsWaitingForFlag.delete(e);for(let r of n)r.flagUrl===e&&(r.flagLayerIdx=t,this.writePlayerDataRow(r))}}),this.crownAtlas=new eo(e,(e,t)=>{let n=this.slotsWaitingForCrown.get(e);if(n){this.slotsWaitingForCrown.delete(e);for(let r of n)r.crownUrl===e&&(r.crownLayerIdx=t,this.writePlayerDataRow(r))}},128,128,bo),this.playerByID=new Map;for(let e of t.players){this.playerByID.set(e.id,e);let t=e.smallID*4;this.playerColors.set(e.id,[n[t],n[t+1],n[t+2]])}let o=this.maxPlayers*2;this.cpuPlayerData=new Float32Array(9*this.maxPlayers*4),this.cpuStringData=new Uint8Array(32*o),this.cpuCursorData=new Float32Array(32*o),this.stringRow=new Uint8Array(32),this.cursorRow=new Float32Array(32),this.vao=Vr(e),this.glyphMetricsTex=Ga(e,a),this.cursorTex=Ka(e,this.maxPlayers),this.stringTex=qa(e,this.maxPlayers),this.playerDataTex=Ja(e,this.maxPlayers),this.textProgram=new vo(e,a,{glyphMetrics:this.glyphMetricsTex,cursor:this.cursorTex,strings:this.stringTex,playerData:this.playerDataTex}),this.iconProgram=new oo(e,a,this.playerDataTex,this.flagAtlas,this.maxPlayers),this.statusIconProgram=new po(e,a,this.playerDataTex,this.crownAtlas,this.maxPlayers,i.allianceExtensionPromptOffset()),this.debugProgram=new $a(e,a,this.playerDataTex,this.maxPlayers)}addPlayers(e,t){for(let n of e){if(this.playerByID.has(n.id))continue;this.playerByID.set(n.id,n);let e=n.smallID*4;this.playerColors.set(n.id,[t[e],t[e+1],t[e+2]])}}refreshPlayerColors(e){for(let[t,n]of this.playerByID){let r=n.smallID*4;this.playerColors.set(t,[e[r],e[r+1],e[r+2]])}for(let e of this.slots.values())this.writePlayerDataRow(e)}refreshNames(e){for(let[t,n]of e){let e=this.playerByID.get(t);if(e===void 0)continue;e.displayName=n;let r=this.slots.get(t);r!==void 0&&(r.nameLen=0)}}updatePlayerCosmetics(e){for(let t of e){let e=this.playerByID.get(t.id);if(e===void 0)continue;e.flag=t.flag,e.crown=t.crown;let n=this.slots.get(t.id);n!==void 0&&(n.flagUrl!==t.flag&&(n.flagUrl=t.flag,n.flagLayerIdx=-1,this.resolveSlotFlag(n)),n.crownUrl!==t.crown&&(n.crownUrl=t.crown,n.crownLayerIdx=-1,this.resolveSlotCrown(n)),this.writePlayerDataRow(n))}}resolveSlotFlag(e){let t=e.flagUrl;if(!t)return;this.flagAtlas.request(t);let n=this.flagAtlas.getLayer(t);if(n>=0){e.flagLayerIdx=n;return}let r=this.slotsWaitingForFlag.get(t);r||(r=new Set,this.slotsWaitingForFlag.set(t,r)),r.add(e)}resolveSlotCrown(e){let t=e.crownUrl;if(!t)return;this.crownAtlas.request(t);let n=this.crownAtlas.getLayer(t);if(n>=0){e.crownLayerIdx=n;return}let r=this.slotsWaitingForCrown.get(t);r||(r=new Set,this.slotsWaitingForCrown.set(t,r)),r.add(e)}updateNames(t,n,r,i){let a=performance.now()/1e3;if(this.slots.size!==this.playerByID.size){let e=0;for(let t of this.playerByID.values())if(this.slots.has(t.id))e=Math.max(e,this.slots.get(t.id).index+1);else{let n={index:e++,playerID:t.id,static:t,srcX:0,srcY:0,srcScale:0,tgtX:0,tgtY:0,tgtScale:0,startTime:a,alive:!1,nameLen:0,troopLen:0,lastTroopStr:``,lastTroopBucket:-1,flagUrl:t.flag,flagLayerIdx:-1,crownUrl:t.crown,crownLayerIdx:-1,emojiAtlasIdx:-1,nameHalfWidth:0,crown:!1,traitor:!1,disconnected:!1,alliance:!1,allianceReq:!1,target:!1,embargo:!1,nukeActive:!1,nukeTargetsMe:!1,inDoomsdayClock:!1,doomsdayClockDraining:!1,doomsdayClockDecaying:!1,doomsdayClockWarnProgress:0,traitorRemainingTicks:0,allianceFraction:0,allianceRemainingTicks:0};this.slots.set(t.id,n),this.resolveSlotFlag(n),this.resolveSlotCrown(n)}}let o=this.slicePhase;this.slicePhase=(o+1)%e.UPDATE_SLICES;for(let[s,c]of t){let t=this.slots.get(s);if(!t||!r&&t.nameLen!==0&&t.index%e.UPDATE_SLICES!==o)continue;let l=n.get(t.static.smallID),u=l?.isAlive??!1;if(!u&&!t.alive)continue;if(!u&&t.alive){t.alive=!1,this.writePlayerDataRow(t);continue}let d=!t.alive;if(t.alive=u,t.nameLen===0){let e=t.static.displayName;t.nameLen=Math.min(e.length,32),t.nameHalfWidth=this.uploadStringRow(t.index*2,e),d=!0}let f=Math.floor((a+t.index%5*.1)/.5);if(r||t.troopLen===0||f!==t.lastTroopBucket){t.lastTroopBucket=f;let e=je(l?.troops??0);e!==t.lastTroopStr&&(t.troopLen=Math.min(e.length,32),t.lastTroopStr=e,this.uploadStringRow(t.index*2+1,e),d=!0)}if(c.x!==t.tgtX||c.y!==t.tgtY||c.size!==t.tgtScale){if(r)t.srcX=c.x,t.srcY=c.y,t.srcScale=c.size;else{let e=a-t.startTime,n=Math.min(1-Math.exp(-this.settings.name.lerpSpeed*e),1);t.srcX+=(t.tgtX-t.srcX)*n,t.srcY+=(t.tgtY-t.srcY)*n,t.srcScale+=(t.tgtScale-t.srcScale)*n}t.tgtX=c.x,t.tgtY=c.y,t.tgtScale=c.size,t.startTime=a,d=!0}let p=-1;if(l?.outgoingEmojis&&l.outgoingEmojis.length>0){for(let e of l.outgoingEmojis)if(e.recipientID===`AllPlayers`){let t=this.emojiCharToIndex.get(e.message);if(t!==void 0){p=t;break}}}p!==t.emojiAtlasIdx&&(t.emojiAtlasIdx=p,d=!0);let m=i?.get(t.static.smallID),h=m?.crown??!1,g=m?.traitor??!1,_=m?.disconnected??!1,v=m?.inDoomsdayClock??!1,y=m?.doomsdayClockDraining??!1,b=m?.doomsdayClockDecaying??!1,x=m?.doomsdayClockWarnProgress??0,S=m?.alliance??!1,C=m?.allianceReq??!1,w=m?.target??!1,T=m?.embargo??!1,E=m?.nukeActive??!1,D=m?.nukeTargetsMe??!1,O=m?.traitorRemainingTicks??0,k=m?.allianceFraction??0,ee=m?.allianceRemainingTicks??0;(h!==t.crown||g!==t.traitor||_!==t.disconnected||v!==t.inDoomsdayClock||y!==t.doomsdayClockDraining||b!==t.doomsdayClockDecaying||x!==t.doomsdayClockWarnProgress||S!==t.alliance||C!==t.allianceReq||w!==t.target||T!==t.embargo||E!==t.nukeActive||D!==t.nukeTargetsMe||O!==t.traitorRemainingTicks||k!==t.allianceFraction||ee!==t.allianceRemainingTicks)&&(t.crown=h,t.traitor=g,t.disconnected=_,t.inDoomsdayClock=v,t.doomsdayClockDraining=y,t.doomsdayClockDecaying=b,t.doomsdayClockWarnProgress=x,t.alliance=S,t.allianceReq=C,t.target=w,t.embargo=T,t.nukeActive=E,t.nukeTargetsMe=D,t.traitorRemainingTicks=O,t.allianceFraction=k,t.allianceRemainingTicks=ee,d=!0),d&&this.writePlayerDataRow(t)}for(let[e,n]of this.slots)!t.has(e)&&n.alive&&(n.alive=!1,this.writePlayerDataRow(n))}uploadStringRow(e,t){let n=mo(t,this.glyph,this.kernTable,this.stringRow,this.cursorRow),r=e*32;return this.cpuStringData.set(this.stringRow,r),this.cpuCursorData.set(this.cursorRow,r),this.stringDataDirty=!0,this.cursorDataDirty=!0,n}writePlayerDataRow(e){let t=this.cpuPlayerData,n=e.index*36;t[n+0]=e.srcX,t[n+1]=e.srcY,t[n+2]=e.srcScale,t[n+3]=e.startTime,t[n+4]=e.tgtX,t[n+5]=e.tgtY,t[n+6]=e.tgtScale,t[n+7]=+!!e.alive;let r=this.playerColors.get(e.playerID)??[0,0,0];t[n+8]=r[0],t[n+9]=r[1],t[n+10]=r[2],t[n+11]=1;let i=this.settings.name,a=0;e.static.playerType===Kn.Nation?a=i.nameShadeNation:e.static.playerType===Kn.Bot&&(a=i.nameShadeBot),t[n+12]=e.nameLen,t[n+13]=e.troopLen,t[n+14]=a,t[n+15]=e.nameHalfWidth,t[n+16]=e.flagLayerIdx,t[n+17]=e.emojiAtlasIdx,t[n+18]=e.static.smallID,t[n+19]=e.doomsdayClockDecaying?3:e.doomsdayClockDraining?2:e.inDoomsdayClock?1+e.doomsdayClockWarnProgress*.49:0,t[n+20]=+!!e.crown,t[n+21]=+!!e.traitor,t[n+22]=+!!e.disconnected,t[n+23]=+!!e.alliance,t[n+24]=+!!e.allianceReq,t[n+25]=+!!e.target,t[n+26]=+!!e.embargo,t[n+27]=+!!e.nukeActive,t[n+28]=+!!e.nukeTargetsMe,t[n+29]=e.traitorRemainingTicks,t[n+30]=e.allianceFraction,t[n+31]=e.allianceRemainingTicks,t[n+32]=e.crownLayerIdx,t[n+33]=+(e.static.verified===!0),t[n+34]=[e.crown,e.traitor,e.disconnected,e.alliance,e.allianceReq,e.target,e.embargo,e.nukeActive,e.inDoomsdayClock||e.doomsdayClockDraining].filter(Boolean).length,t[n+35]=0,this.playerDataDirty=!0}setHighlightOwner(e){this.highlightOwnerID=e}setMouseWorldPos(e,t){this.mouseWorldX=e,this.mouseWorldY=t}hitTestNamePlate(e){let t=this.mouseWorldX,n=this.mouseWorldY,r=this.settings.name;for(let i of this.slots.values()){if(!i.alive)continue;let a=Math.min(1-Math.exp(-r.lerpSpeed*(e-i.startTime)),1),o=i.srcX+(i.tgtX-i.srcX)*a,s=i.srcY+(i.tgtY-i.srcY)*a,c=i.srcScale+(i.tgtScale-i.srcScale)*a,l=Math.max(1,Math.floor(c)),u=Math.max(4,Math.floor(l*r.nameScaleFactor)),d=Math.min(l*.25,r.nameScaleCap),f=this.fontBase*(u*d/this.fontSize),p=i.nameHalfWidth*(u*d/this.fontSize),m=o-p,h=o+p;i.flagLayerIdx>=0&&(m-=f*1.2*yo);let g=s-f*.6,_=i.crown||i.traitor||i.disconnected||i.alliance||i.allianceReq||i.target||i.embargo||i.nukeActive||i.inDoomsdayClock;i.emojiAtlasIdx>=0?g=s-f*r.emojiRowOffset:_&&(g=s-f*r.statusRowOffset);let v=s+f*(1.1+.5*r.troopSizeMultiplier);if(t>=m&&t<=h&&n>=g&&n<=v)return i.static.smallID}return 0}draw(e,t){if(!this.textProgram.ready||this.slots.size===0)return;let n=this.gl;this.stringDataDirty&&=(n.bindTexture(n.TEXTURE_2D,this.stringTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,32,this.maxPlayers*2,n.RED_INTEGER,n.UNSIGNED_BYTE,this.cpuStringData),!1),this.cursorDataDirty&&=(n.bindTexture(n.TEXTURE_2D,this.cursorTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,32,this.maxPlayers*2,n.RED,n.FLOAT,this.cpuCursorData),!1),this.playerDataDirty&&=(n.bindTexture(n.TEXTURE_2D,this.playerDataTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,9,this.maxPlayers,n.RGBA,n.FLOAT,this.cpuPlayerData),!1);let r=this.hitTestNamePlate(performance.now()/1e3);this.textProgram.draw(e,this.settings,this.vao,this.maxPlayers,t,this.highlightOwnerID,r),this.statusIconProgram.draw(e,this.settings,this.vao,r),this.iconProgram.draw(e,this.settings,this.vao,r),this.settings.passEnabled.nameDebug&&this.debugProgram.draw(e,this.settings,this.vao)}dispose(){let e=this.gl;this.textProgram.dispose(),this.iconProgram.dispose(),this.flagAtlas.dispose(),this.crownAtlas.dispose(),this.statusIconProgram.dispose(),this.debugProgram.dispose(),e.deleteTexture(this.glyphMetricsTex),e.deleteTexture(this.cursorTex),e.deleteTexture(this.stringTex),e.deleteTexture(this.playerDataTex),e.deleteVertexArray(this.vao)}},So=`#version 300 es
precision highp float;

uniform sampler2D uSceneTex;
uniform sampler2D uLightTex;
uniform float uAmbient;

in vec2 vUV;
out vec4 fragColor;

void main() {
  vec3 scene = texture(uSceneTex, vUV).rgb;
  vec3 light = texture(uLightTex, vUV).rgb;

  // Scale lights inversely with ambient — invisible at full day, full strength at deep night
  vec3 illumination = min(vec3(uAmbient) + light * (1.0 - uAmbient), vec3(1.2));
  fragColor = vec4(scene * illumination, 1.0);
}
`,Co=class{constructor(e,t){this.gl=e,this.settings=t,this.compositeProg=H(e,Yi,So,`NightCompositePass`),this.uCompositeAmbient=e.getUniformLocation(this.compositeProg,`uAmbient`),e.useProgram(this.compositeProg),e.uniform1i(e.getUniformLocation(this.compositeProg,`uSceneTex`),0),e.uniform1i(e.getUniformLocation(this.compositeProg,`uLightTex`),1),this.quadVao=Vr(e)}getAmbient(){return this.settings.lighting.ambient}draw(e,t){let n=this.gl;n.disable(n.BLEND),n.useProgram(this.compositeProg),n.uniform1f(this.uCompositeAmbient,this.getAmbient()),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,t),n.bindVertexArray(this.quadVao),n.drawArrays(n.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.compositeProg),e.deleteVertexArray(this.quadVao)}},wo=`#version 300 es
precision highp float;

in vec2 vLocal;
flat in float vInnerRadius;
flat in float vOuterRadius;
flat in float vRelation;        // 0 = self, 1 = ally, 2 = enemy

uniform float uTime;            // seconds
uniform vec4 uTelegraphStyle;   // (strokeWidth, dashLen, gapLen, rotationSpeed)
uniform vec4 uTelegraphAlpha;   // (baseAlpha, pulseAmplitude, pulseSpeed, fillAlphaOffset)
uniform vec3 uColorSelf;
uniform vec3 uColorAlly;
uniform vec3 uColorEnemy;

out vec4 fragColor;

void main() {
  float strokeWidth = uTelegraphStyle.x;
  float dashLen = uTelegraphStyle.y;
  float gapLen = uTelegraphStyle.z;
  float rotationSpeed = uTelegraphStyle.w;
  float baseAlphaVal = uTelegraphAlpha.x;
  float pulseAmp = uTelegraphAlpha.y;
  float pulseSpd = uTelegraphAlpha.z;
  float fillAlphaOff = uTelegraphAlpha.w;

  float paddedR = vOuterRadius + 2.0;
  float dist = length(vLocal) * paddedR;

  // Base alpha with gentle pulsation
  float baseAlpha = baseAlphaVal + pulseAmp * sin(uTime * pulseSpd);

  // Inner circle: filled disc + stroke
  float innerFill = 1.0 - smoothstep(vInnerRadius - 0.5, vInnerRadius, dist);
  float innerStroke = smoothstep(vInnerRadius - strokeWidth - 0.5, vInnerRadius - strokeWidth, dist)
                    * (1.0 - smoothstep(vInnerRadius + strokeWidth, vInnerRadius + strokeWidth + 0.5, dist));

  // Outer circle: dashed ring
  float outerRing = smoothstep(vOuterRadius - strokeWidth - 0.5, vOuterRadius - strokeWidth, dist)
                  * (1.0 - smoothstep(vOuterRadius + strokeWidth, vOuterRadius + strokeWidth + 0.5, dist));

  // Dash pattern on outer ring
  float angle = atan(vLocal.y, vLocal.x);
  float arcPos = angle * vOuterRadius;
  float period = dashLen + gapLen;
  float dashPhase = mod(arcPos + uTime * rotationSpeed, period);
  float dashAlpha = 1.0 - smoothstep(dashLen - 0.5, dashLen + 0.5, dashPhase);

  // Combine
  float fillAlpha = innerFill * max(0.0, baseAlpha - fillAlphaOff);
  float strokeAlpha = innerStroke * baseAlpha;
  float outerAlpha = outerRing * dashAlpha * baseAlpha;

  float alpha = max(max(fillAlpha, strokeAlpha), outerAlpha);
  if (alpha < 0.01) discard;

  vec3 color = vRelation < 0.5 ? uColorSelf
             : vRelation < 1.5 ? uColorAlly
             : uColorEnemy;
  fragColor = vec4(color, alpha);
}
`,To=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;
// Per-instance: x, y, innerRadius, outerRadius
layout(location = 1) in vec4 aInstance;
// Per-instance: 0 = self, 1 = ally, 2 = enemy
layout(location = 2) in float aRelation;

uniform mat3 uCamera;

out vec2 vLocal;              // [-1, +1] local coords
flat out float vInnerRadius;
flat out float vOuterRadius;
flat out float vRelation;

void main() {
  vLocal = aPos * 2.0 - 1.0;
  vInnerRadius = aInstance.z;
  vOuterRadius = aInstance.w;
  vRelation = aRelation;

  // Expand quad to cover outer circle bbox + padding
  float r = aInstance.w + 2.0;
  vec2 center = aInstance.xy + 0.5;
  vec2 worldPos = center + vLocal * r;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Eo=5,Do=class{constructor(e,t){this.instanceCount=0,this.startTime=performance.now(),this.gl=e,this.settings=t,this.program=H(e,To,wo,`NukeTelegraphPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uTelegraphStyle=e.getUniformLocation(this.program,`uTelegraphStyle`),this.uTelegraphAlpha=e.getUniformLocation(this.program,`uTelegraphAlpha`),this.uColorSelf=e.getUniformLocation(this.program,`uColorSelf`),this.uColorAlly=e.getUniformLocation(this.program,`uColorAlly`),this.uColorEnemy=e.getUniformLocation(this.program,`uColorEnemy`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let r=e.createBuffer();this.instanceBuf=new Bi(e,r,16,Eo);let i=Eo*4;e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,i,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,1,e.FLOAT,!1,i,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}update(e){let t=e.length;this.instanceBuf.ensureCapacity(t);let n=this.instanceBuf.float32;for(let r=0;r<t;r++){let t=e[r],i=r*Eo;n[i+0]=t.x,n[i+1]=t.y,n[i+2]=t.innerRadius,n[i+3]=t.outerRadius,n[i+4]=t.relation}if(this.instanceCount=t,t>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceBuf.float32,0,t*Eo)}}draw(e){if(this.instanceCount===0)return;let t=this.gl,n=this.settings.nukeTelegraph,r=(performance.now()-this.startTime)/1e3;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1f(this.uTime,r),t.uniform4f(this.uTelegraphStyle,n.strokeWidth,n.dashLen,n.gapLen,n.rotationSpeed),t.uniform4f(this.uTelegraphAlpha,n.baseAlpha,n.pulseAmplitude,n.pulseSpeed,n.fillAlphaOffset),t.uniform3f(this.uColorSelf,n.selfColorR,n.selfColorG,n.selfColorB),t.uniform3f(this.uColorAlly,n.allyColorR,n.allyColorG,n.allyColorB),t.uniform3f(this.uColorEnemy,n.colorR,n.colorG,n.colorB),t.bindVertexArray(this.vao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.instanceCount)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao)}},Oo=`#version 300 es
precision highp float;

in vec2 vUV;
flat in float vType;

out vec4 fragColor;

// Colors matching upstream
const vec3 COLOR_WHITE = vec3(1.0);
const vec3 OUTLINE_GRAY = vec3(0.549);    // rgba(140, 140, 140)
const vec3 COLOR_RED = vec3(1.0, 0.0, 0.0);
const vec3 OUTLINE_BLACK = vec3(0.0);

void main() {
  float alpha = 0.0;
  vec3 color = vec3(1.0);

  if (vType < 0.5) {
    // Circle marker at untargetable zone boundary
    // White ring with gray outline (upstream: 4px radius, 1.25px stroke)
    float dist = length(vUV);
    float ring = abs(dist - 0.55);
    float lineAlpha = 1.0 - smoothstep(0.06, 0.12, ring);
    float outlineAlpha = 1.0 - smoothstep(0.14, 0.22, ring);
    float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
    color = mix(OUTLINE_GRAY, COLOR_WHITE, blend);
    alpha = outlineAlpha;
  } else {
    // X marker at SAM intercept point
    // Red X with black outline (upstream: 6px arms, 2px stroke)
    float d1 = abs(vUV.x - vUV.y) * 0.7071;
    float d2 = abs(vUV.x + vUV.y) * 0.7071;
    float minD = min(d1, d2);
    float circleMask = 1.0 - smoothstep(0.7, 0.85, length(vUV));
    float lineAlpha = (1.0 - smoothstep(0.08, 0.16, minD)) * circleMask;
    float outlineAlpha = (1.0 - smoothstep(0.18, 0.28, minD)) * circleMask;
    float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
    color = mix(OUTLINE_BLACK, COLOR_RED, blend);
    alpha = outlineAlpha;
  }

  if (alpha < 0.01) discard;
  fragColor = vec4(color, alpha);
}
`,ko=`#version 300 es
precision highp float;

// Unit quad [-1, +1]
layout(location = 0) in vec2 aCorner;

uniform mat3 uCamera;
uniform vec2 uP0, uP1, uP2, uP3;
uniform float uPixelSize;
uniform vec4 uMarker;           // (t, type: 0=circle 1=X, 0, 0)
uniform vec2 uMarkerRadii;     // (circleRadiusPx, xRadiusPx)

out vec2 vUV;
flat out float vType;

vec2 bezier(float t) {
  float T = 1.0 - t;
  float TT = T * T;
  float tt = t * t;
  return TT * T * uP0 + 3.0 * TT * t * uP1 + 3.0 * T * tt * uP2 + tt * t * uP3;
}

void main() {
  vType = uMarker.y;
  vUV = aCorner;

  vec2 center = bezier(uMarker.x) + 0.5;
  float radius = (vType < 0.5 ? uMarkerRadii.x : uMarkerRadii.y) * uPixelSize;
  vec2 pos = center + aCorner * radius;

  vec3 clip = uCamera * vec3(pos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Ao=`#version 300 es
precision highp float;

in float vT;
in float vArcDist;
in float vEdgeDist;

uniform float uPixelSize;
uniform float uTUntargetableStart;  // -1 = no zone
uniform float uTUntargetableEnd;    // -1 = no zone
uniform float uTSamIntercept;       // 1.0 = no intercept

// Settings uniforms
uniform float uQuadHalfPx;          // total half-width of quad in pixels
uniform float uLineHalfPx;          // main line half-width in pixels
uniform float uOutlineHalfPx;       // outline half-width in pixels
uniform vec4 uDashPattern;          // (dashTargetable, gapTargetable, dashUntargetable, gapUntargetable)
uniform vec3 uLineColor;            // normal line color
uniform vec3 uInterceptColor;       // line color after SAM intercept
uniform vec3 uOutlineColor;         // outline color (normal)
uniform vec3 uInterceptOutlineColor; // outline color (after intercept)

out vec4 fragColor;

void main() {
  // Zone classification
  bool inUntargetable = uTUntargetableStart >= 0.0
    && vT >= uTUntargetableStart
    && vT <= uTUntargetableEnd;
  bool intercepted = vT >= uTSamIntercept;

  // Dash pattern (pixel space)
  float dashLen = inUntargetable ? uDashPattern.z : uDashPattern.x;
  float gapLen = inUntargetable ? uDashPattern.w : uDashPattern.y;
  float period = dashLen + gapLen;
  float pixelDist = vArcDist / uPixelSize;
  float phase = mod(pixelDist, period);
  float dashAlpha = 1.0 - smoothstep(dashLen - 0.5, dashLen + 0.5, phase);
  if (dashAlpha < 0.01) discard;

  // Line vs outline (pixel distance from center line)
  float d = abs(vEdgeDist) * uQuadHalfPx;
  float lineAlpha = 1.0 - smoothstep(uLineHalfPx - 0.4, uLineHalfPx + 0.4, d);
  float outlineAlpha = 1.0 - smoothstep(uOutlineHalfPx - 0.4, uOutlineHalfPx + 0.4, d);
  if (outlineAlpha < 0.01) discard;

  // Color selection
  vec3 lineColor = intercepted ? uInterceptColor : uLineColor;
  vec3 outlineColor = intercepted ? uInterceptOutlineColor : uOutlineColor;
  float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
  vec3 color = mix(outlineColor, lineColor, blend);

  fragColor = vec4(color, outlineAlpha * dashAlpha);
}
`,jo=`#version 300 es
precision highp float;

// Per-vertex: (t along curve, side: -1 or +1, cumulative arc distance)
layout(location = 0) in vec3 aVertex;

uniform mat3 uCamera;
uniform vec2 uP0, uP1, uP2, uP3;   // Bezier control points
uniform float uPixelSize;           // world units per pixel
uniform float uQuadHalfPx;          // half-width of quad in pixels

out float vT;          // curve parameter (0..1)
out float vArcDist;    // cumulative arc distance (world units)
out float vEdgeDist;   // -1..+1 across the line width

vec2 bezier(float t) {
  float T = 1.0 - t;
  float TT = T * T;
  float tt = t * t;
  return TT * T * uP0 + 3.0 * TT * t * uP1 + 3.0 * T * tt * uP2 + tt * t * uP3;
}

vec2 bezierDeriv(float t) {
  float T = 1.0 - t;
  return 3.0 * (T * T * (uP1 - uP0) + 2.0 * T * t * (uP2 - uP1) + t * t * (uP3 - uP2));
}

void main() {
  float t = aVertex.x;
  float side = aVertex.y;

  vec2 pos = bezier(t);
  vec2 tang = bezierDeriv(t);
  float tangLen = length(tang);
  vec2 normTang = tangLen > 0.001 ? tang / tangLen : vec2(1.0, 0.0);
  vec2 perp = vec2(-normTang.y, normTang.x);

  float halfWidth = uQuadHalfPx * uPixelSize;
  pos += perp * side * halfWidth;
  pos += 0.5; // tile center offset

  vT = t;
  vEdgeDist = side;
  vArcDist = aVertex.z;

  vec3 clip = uCamera * vec3(pos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Mo=128,No=2,Po=3,Fo=class{constructor(e,t){this.visible=!1,this.data=null,this.gl=e,this.settings=t,this.lineProgram=H(e,jo,Ao,`NukeTrajectoryPass.lineProgram`),this.uLineCamera=e.getUniformLocation(this.lineProgram,`uCamera`),this.uLineP0=e.getUniformLocation(this.lineProgram,`uP0`),this.uLineP1=e.getUniformLocation(this.lineProgram,`uP1`),this.uLineP2=e.getUniformLocation(this.lineProgram,`uP2`),this.uLineP3=e.getUniformLocation(this.lineProgram,`uP3`),this.uLinePixelSize=e.getUniformLocation(this.lineProgram,`uPixelSize`),this.uLineTUntargetableStart=e.getUniformLocation(this.lineProgram,`uTUntargetableStart`),this.uLineTUntargetableEnd=e.getUniformLocation(this.lineProgram,`uTUntargetableEnd`),this.uLineTSamIntercept=e.getUniformLocation(this.lineProgram,`uTSamIntercept`),this.uLineQuadHalfPx=e.getUniformLocation(this.lineProgram,`uQuadHalfPx`),this.uLineLineHalfPx=e.getUniformLocation(this.lineProgram,`uLineHalfPx`),this.uLineOutlineHalfPx=e.getUniformLocation(this.lineProgram,`uOutlineHalfPx`),this.uLineDashPattern=e.getUniformLocation(this.lineProgram,`uDashPattern`),this.uLineLineColor=e.getUniformLocation(this.lineProgram,`uLineColor`),this.uLineInterceptColor=e.getUniformLocation(this.lineProgram,`uInterceptColor`),this.uLineOutlineColor=e.getUniformLocation(this.lineProgram,`uOutlineColor`),this.uLineInterceptOutlineColor=e.getUniformLocation(this.lineProgram,`uInterceptOutlineColor`),this.lineVertexCount=129*No,this.lineVertices=new Float32Array(this.lineVertexCount*Po),this.lineVAO=e.createVertexArray(),e.bindVertexArray(this.lineVAO),this.lineBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.lineBuf),e.bufferData(e.ARRAY_BUFFER,this.lineVertices.byteLength,e.DYNAMIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),this.markerProgram=H(e,ko,Oo,`NukeTrajectoryPass.markerProgram`),this.uMarkerCamera=e.getUniformLocation(this.markerProgram,`uCamera`),this.uMarkerP0=e.getUniformLocation(this.markerProgram,`uP0`),this.uMarkerP1=e.getUniformLocation(this.markerProgram,`uP1`),this.uMarkerP2=e.getUniformLocation(this.markerProgram,`uP2`),this.uMarkerP3=e.getUniformLocation(this.markerProgram,`uP3`),this.uMarkerPixelSize=e.getUniformLocation(this.markerProgram,`uPixelSize`),this.uMarker=e.getUniformLocation(this.markerProgram,`uMarker`),this.uMarkerRadii=e.getUniformLocation(this.markerProgram,`uMarkerRadii`),this.markerVAO=e.createVertexArray(),e.bindVertexArray(this.markerVAO);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,-1,1,1,-1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}update(e){this.data=e,this.visible=e!==null,e&&this.rebuildVertices(e)}rebuildVertices(e){let t=Mo,n=this.lineVertices,r=0,i=e.p0x,a=e.p0y;for(let o=0;o<=t;o++){let s=o/t,c=1-s,l=c*c,u=s*s,d=l*c*e.p0x+3*l*s*e.p1x+3*c*u*e.p2x+u*s*e.p3x,f=l*c*e.p0y+3*l*s*e.p1y+3*c*u*e.p2y+u*s*e.p3y;if(o>0){let e=d-i,t=f-a;r+=Math.sqrt(e*e+t*t)}i=d,a=f;let p=o*No*Po;n[p+0]=s,n[p+1]=-1,n[p+2]=r,n[p+3]=s,n[p+4]=1,n[p+5]=r}let o=this.gl;o.bindBuffer(o.ARRAY_BUFFER,this.lineBuf),o.bufferSubData(o.ARRAY_BUFFER,0,n)}draw(e){if(!this.visible||!this.data)return;let t=this.gl,n=this.data,r=this.settings.nukeTrajectory,i=2/(e[0]*t.drawingBufferWidth),a=r.lineWidth/2,o=(r.lineWidth+r.outlineWidth)/2,s=o+1;t.useProgram(this.lineProgram),t.uniformMatrix3fv(this.uLineCamera,!1,e),t.uniform2f(this.uLineP0,n.p0x,n.p0y),t.uniform2f(this.uLineP1,n.p1x,n.p1y),t.uniform2f(this.uLineP2,n.p2x,n.p2y),t.uniform2f(this.uLineP3,n.p3x,n.p3y),t.uniform1f(this.uLinePixelSize,i),t.uniform1f(this.uLineTUntargetableStart,n.tUntargetableStart),t.uniform1f(this.uLineTUntargetableEnd,n.tUntargetableEnd),t.uniform1f(this.uLineTSamIntercept,n.tSamIntercept),t.uniform1f(this.uLineQuadHalfPx,s),t.uniform1f(this.uLineLineHalfPx,a),t.uniform1f(this.uLineOutlineHalfPx,o),t.uniform4f(this.uLineDashPattern,r.dashTargetable,r.gapTargetable,r.dashUntargetable,r.gapUntargetable),t.uniform3f(this.uLineLineColor,r.lineR,r.lineG,r.lineB),t.uniform3f(this.uLineInterceptColor,r.interceptR,r.interceptG,r.interceptB),t.uniform3f(this.uLineOutlineColor,r.outlineR,r.outlineG,r.outlineB),t.uniform3f(this.uLineInterceptOutlineColor,r.interceptOutlineR,r.interceptOutlineG,r.interceptOutlineB),t.bindVertexArray(this.lineVAO),t.drawArrays(t.TRIANGLE_STRIP,0,this.lineVertexCount),this.drawMarkers(e,n,i)}drawMarkers(e,t,n){let r=[];if(t.tUntargetableStart>=0&&(r.push([t.tUntargetableStart,0]),r.push([t.tUntargetableEnd,0])),t.tSamIntercept<1&&r.push([t.tSamIntercept,1]),r.length===0)return;let i=this.gl,a=this.settings.nukeTrajectory;i.useProgram(this.markerProgram),i.uniformMatrix3fv(this.uMarkerCamera,!1,e),i.uniform2f(this.uMarkerP0,t.p0x,t.p0y),i.uniform2f(this.uMarkerP1,t.p1x,t.p1y),i.uniform2f(this.uMarkerP2,t.p2x,t.p2y),i.uniform2f(this.uMarkerP3,t.p3x,t.p3y),i.uniform1f(this.uMarkerPixelSize,n),i.uniform2f(this.uMarkerRadii,a.markerCircleRadius,a.markerXRadius),i.bindVertexArray(this.markerVAO);for(let[e,t]of r)i.uniform4f(this.uMarker,e,t,0,0),i.drawArrays(i.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.lineProgram),e.deleteProgram(this.markerProgram),e.deleteVertexArray(this.lineVAO),e.deleteVertexArray(this.markerVAO)}},Io=`#version 300 es
precision highp float;

in vec2 vLocalPos;
flat in vec3 vColor;
flat in float vIntensity;

uniform float uFalloffPower;

out vec4 fragColor;

void main() {
  float dist = length(vLocalPos) * 2.0; // [0, 1] from center to edge
  if (dist > 1.0) discard;

  float falloff = pow(1.0 - dist, uFalloffPower);

  float brightness = falloff * vIntensity;
  fragColor = vec4(vColor * brightness, brightness);
}
`,Lo=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;         // quad corner [0,1]
layout(location = 1) in vec3 aLightPosIdx;  // x, y, typeIdx
layout(location = 2) in vec3 aLightColor;   // r, g, b

uniform mat3 uCamera;
uniform float uRadiusMultiplier;
uniform float uRadius[MAX_LIGHT_TYPES];
uniform float uIntensity[MAX_LIGHT_TYPES];

out vec2 vLocalPos;
flat out vec3 vColor;
flat out float vIntensity;

void main() {
  int typeIdx = int(aLightPosIdx.z);
  float radius = uRadius[typeIdx] * uRadiusMultiplier;
  vec2 center = vec2(aLightPosIdx.x + 0.5, aLightPosIdx.y + 0.5);
  vec2 worldPos = center + (aPos - 0.5) * radius * 2.0;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vLocalPos = aPos - 0.5; // [-0.5, 0.5]
  vColor = aLightColor.rgb;
  vIntensity = uIntensity[typeIdx];
}
`,Ro={[ir]:{r:1,g:.85,b:.5,radius:18,intensity:1.2},[ar]:{r:1,g:.75,b:.4,radius:18,intensity:1.2},[or]:{r:1,g:.6,b:.3,radius:18,intensity:1.2},[sr]:{r:.8,g:.85,b:1,radius:18,intensity:1.2},[cr]:{r:.8,g:.85,b:1,radius:18,intensity:1.2},[lr]:{r:1,g:.4,b:.2,radius:18,intensity:1.2},[Jn]:{r:.9,g:.8,b:.6,radius:6,intensity:2.7},[Yn]:{r:.9,g:.8,b:.6,radius:6,intensity:2.7},[Xn]:{r:.9,g:.85,b:.7,radius:10,intensity:2.8},[Zn]:{r:1,g:.9,b:.7,radius:16,intensity:1.1},[Qn]:{r:1,g:.95,b:.6,radius:22,intensity:1.3},[$n]:{r:1,g:.9,b:.7,radius:18,intensity:1.2},[nr]:{r:1,g:.6,b:.3,radius:12,intensity:1},[rr]:{r:1,g:.85,b:.5,radius:6,intensity:.5}},zo=6,Bo=zo*4,Vo=64,Ho=12288,Uo=5,Wo=class{constructor(e,t,n,r,i){this.lightCount=0,this.typeToIdx=new Map,this.radiusArr=new Float32Array(Vo),this.intensityArr=new Float32Array(Vo),this.smoothSegs=[],this.lastUnitsUpdateMs=0,this.gl=e,this.settings=r,this.paletteData=n,this.mapW=t.mapWidth,this.tickIntervalMs=i.msPerTick(),this.typeNames=t.unitTypes,this.typeConfigs=Array(t.unitTypes.length);for(let e=0;e<t.unitTypes.length;e++)this.typeConfigs[e]=Ro[t.unitTypes[e]],this.typeToIdx.set(t.unitTypes[e],e);this.lightProg=H(e,W(Lo,{MAX_LIGHT_TYPES:Vo}),Io,`PointLightPass`),this.uLightCam=e.getUniformLocation(this.lightProg,`uCamera`),this.uRadiusMultiplier=e.getUniformLocation(this.lightProg,`uRadiusMultiplier`),this.uRadiusArr=e.getUniformLocation(this.lightProg,`uRadius`),this.uIntensityArr=e.getUniformLocation(this.lightProg,`uIntensity`),this.uFalloffPower=e.getUniformLocation(this.lightProg,`uFalloffPower`),this.lightData=new Float32Array(Ho*zo),this.lightBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.lightBuf),e.bufferData(e.ARRAY_BUFFER,this.lightData.byteLength,e.DYNAMIC_DRAW),this.lightVao=e.createVertexArray(),e.bindVertexArray(this.lightVao);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this.lightBuf),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,Bo,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,Bo,12),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}updateLights(e){let t=0;this.smoothSegs.length=0,this.lastUnitsUpdateMs=performance.now();for(let n of e.values()){if(!n.isActive||n.waitTicks>0)continue;let e=this.typeToIdx.get(n.unitType);if(e===void 0||!this.typeConfigs[e])continue;if(t>=Ho)break;let r=n.pos%this.mapW,i=(n.pos-r)/this.mapW;if(fr.has(n.unitType)&&n.lastPos!==n.pos){let e=n.lastPos%this.mapW,a=(n.lastPos-e)/this.mapW;this.smoothSegs.push(t,e,a,r,i)}let a=t*zo,o=n.ownerID*4;this.lightData[a+0]=r,this.lightData[a+1]=i,this.lightData[a+2]=e,this.lightData[a+3]=this.paletteData[o],this.lightData[a+4]=this.paletteData[o+1],this.lightData[a+5]=this.paletteData[o+2],t++}if(this.lightCount=t,t>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.lightBuf),e.bufferSubData(e.ARRAY_BUFFER,0,this.lightData,0,t*zo)}}applySmoothing(){let e=this.smoothSegs;if(e.length===0)return;let t=Math.min(1,(performance.now()-this.lastUnitsUpdateMs)/this.tickIntervalMs),n=this.lightData,r=this.gl;r.bindBuffer(r.ARRAY_BUFFER,this.lightBuf);for(let i=0;i<e.length;i+=Uo){let a=e[i],o=a*zo;n[o+0]=e[i+1]+(e[i+3]-e[i+1])*t,n[o+1]=e[i+2]+(e[i+4]-e[i+2])*t,r.bufferSubData(r.ARRAY_BUFFER,a*Bo,n,o,2)}}draw(e){if(this.lightCount===0)return;this.applySmoothing();let t=this.gl,n=this.settings.lighting;t.useProgram(this.lightProg),t.uniformMatrix3fv(this.uLightCam,!1,e),t.uniform1f(this.uRadiusMultiplier,n.lightRadiusMultiplier),t.uniform1f(this.uFalloffPower,n.falloffPower);for(let e=0;e<this.typeNames.length;e++){let t=this.typeConfigs[e];if(!t)continue;let n=this.settings.lightConfigs[this.typeNames[e]];this.radiusArr[e]=n?.radius??t.radius,this.intensityArr[e]=n?.intensity??t.intensity}t.uniform1fv(this.uRadiusArr,this.radiusArr),t.uniform1fv(this.uIntensityArr,this.intensityArr),t.bindVertexArray(this.lightVao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.lightCount)}dispose(){let e=this.gl;e.deleteProgram(this.lightProg),e.deleteVertexArray(this.lightVao),e.deleteBuffer(this.lightBuf)}},Go=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uRailroadTex;     // R8UI — rail type per tile (0=none, 1-6)
uniform usampler2D uGhostRailTex;    // R8UI — ghost rail type per tile (0=none, 1-6)
uniform usampler2D uTileTex;         // R16UI — tile state (for owner lookup)
uniform sampler2D  uPalette;         // RGBA32F — player colors
uniform usampler2D uTerrainTex;      // R8UI — terrain bytes (bit 7 = isLand)
uniform sampler2D  uEffect;          // RGBA32F — shared effect palette, keyed by
                                     //   ownerID. The railroad block starts at
                                     //   row RAILROAD_EFFECT_ROW_BASE; same
                                     //   layout as trail.frag.glsl (row r =
                                     //   color r's rgb; row 0.a = count,
                                     //   1.a = styleId, 2.a = scalar0,
                                     //   3.a = scalar1)

uniform vec2 uMapSize;
uniform float uZoom;
uniform float uTime;                 // seconds, for animated effect styles
uniform float uRailDetailZoom;
uniform float uRailAlpha;
uniform float uRailFade;             // Zoom-based fade multiplier (0..1)
uniform float uRailThickness;        // Track width multiplier (1 = default)
uniform float uGhostOwnerID;         // Player smallID for ghost rail color
uniform float uLocalPlayerID;        // Local player smallID (0 = none)
uniform vec3 uLocalRailColor;        // Rail color for the local player's rails
uniform float uHoverOwner;           // Hovered territory's owner smallID (0 = none)

in vec2 vWorldPos;
out vec4 fragColor;

// Bridge pixel positions per rail type, from OpenFrontIO's RailroadSprites.ts.
// Tests whether 2x-pixel offset (lp) from a tile origin is a bridge pixel.
// Bridge pixel positions from game's RailroadSprites.ts, with -2 offsets
// shifted to -1 to close the gap (game's rail extends into neighbors, ours doesn't).
bool isBridgePixel(uint rt, ivec2 lp) {
  int x = lp.x, y = lp.y;
  if (rt == 1u) { // Vertical
    return (x == -1 || x == 2) && y >= -1 && y <= 1;
  } else if (rt == 2u) { // Horizontal
    return (y == -1 && x >= -1 && x <= 1)
        || (y == 2 && x >= -1 && x <= 1)
        || (y == 3 && (x == -1 || x == 1));
  } else if (rt == 3u) { // TopLeft
    return (x == -1 && (y == -1 || y == 2))
        || (x == 0 && y == 1)
        || (x == 1 && y == 0)
        || (x == 2 && y == -1);
  } else if (rt == 4u) { // TopRight
    return (x == -1 && (y == -1 || y == 0))
        || (x == 0 && y == 1)
        || (x == 1 && y == 2)
        || (x == 2 && (y == -1 || y == 2));
  } else if (rt == 5u) { // BottomLeft
    return (x == -1 && (y == -1 || y == 2))
        || (x == 0 && y == -1)
        || (x == 1 && y == 0)
        || (x == 2 && (y == 1 || y == 2));
  } else if (rt == 6u) { // BottomRight
    return (x == -1 && y >= 0 && y <= 2)
        || (x == 0 && y == -1)
        || (x == 1 && y == -1)
        || (x == 2 && (y == -1 || y == 2));
  }
  return false;
}

// Detailed-mode coverage: 3x3 sub-grid with cross-ties, rail band width
// scaled by uRailThickness (clamped so the two bands never overlap fully).
float railDetailCoverage(uint rt, vec2 f) {
  if (rt == 0u) return 0.0;
  float T = 1.0 / 3.0;
  float T2 = 2.0 / 3.0;
  float w = min(T * uRailThickness, 0.5);
  bool center = (f.x >= T && f.x < T2 && f.y >= T && f.y < T2);
  bool hit = false;
  if (rt == 1u) {
    hit = (f.x < w) || (f.x >= 1.0 - w) || center;
  } else if (rt == 2u) {
    hit = (f.y < w) || (f.y >= 1.0 - w) || center;
  } else if (rt == 3u) {
    hit = (f.y < w) || (f.x < w) || center;
  } else if (rt == 4u) {
    hit = (f.y < w) || (f.x >= 1.0 - w) || center;
  } else if (rt == 5u) {
    hit = (f.y >= 1.0 - w) || (f.x < w) || center;
  } else if (rt == 6u) {
    hit = (f.y >= 1.0 - w) || (f.x >= 1.0 - w) || center;
  }
  return hit ? 1.0 : 0.0;
}

float segDist(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
  return length(p - a - ab * t);
}

// Distance from tile-local point p to the rail centerline of type rt.
// Straights span the tile; corners are two half-segments meeting at center.
float railLineDist(uint rt, vec2 p) {
  if (rt == 1u) return segDist(p, vec2(0.5, 0.0), vec2(0.5, 1.0));
  if (rt == 2u) return segDist(p, vec2(0.0, 0.5), vec2(1.0, 0.5));
  vec2 c = vec2(0.5);
  vec2 e1 = vec2(0.5, (rt == 3u || rt == 4u) ? 0.0 : 1.0); // top or bottom edge
  vec2 e2 = vec2((rt == 3u || rt == 5u) ? 0.0 : 1.0, 0.5); // left or right edge
  return min(segDist(p, c, e1), segDist(p, c, e2));
}

// Line-mode coverage: screen-space anti-aliased line of width uRailThickness
// (in tiles) around the rail centerline of tile-local point p.
float railLineCoverage(uint rt, vec2 p) {
  if (rt == 0u || rt > 6u) return 0.0;
  float halfW = 0.5 * uRailThickness;
  float aa = 0.5 / uZoom; // ~1 screen pixel in tile units
  return 1.0 - smoothstep(halfW - aa, halfW + aa, railLineDist(rt, p));
}

// The owner's railroad cosmetic color, if equipped. Reads the railroad block
// of the shared effect palette with trail semantics (rails are static map
// geometry like trails): the gradient/transition math mirrors trail.frag.glsl
// so the same catalog attributes look identical on both. Returns false when
// the owner has no railroad effect (count 0).
bool railroadEffectColor(int owner, out vec3 color) {
  const int rowBase = RAILROAD_EFFECT_ROW_BASE;
  int count = int(texelFetch(uEffect, ivec2(owner, rowBase), 0).a + 0.5);
  if (count <= 0) return false;
  if (count == 1) {
    // Single color — flat recolor.
    color = texelFetch(uEffect, ivec2(owner, rowBase), 0).rgb;
  } else if (int(texelFetch(uEffect, ivec2(owner, rowBase + 1), 0).a + 0.5) == 1) {
    // transition — the whole track is one color at a time, cross-fading
    // through the list. frequency = color changes per second.
    float frequency = texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a;
    float t = uTime * frequency;
    int i = int(t) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(t));
  } else {
    // gradient — cyclic gradient banded across the map (world-space
    // diagonal), scrolling over time so the colors travel along the track.
    // colorSize = band width in tiles; movementSpeed = tiles/sec the bands
    // travel.
    float colorSize = max(texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a, 0.001);
    float movementSpeed = texelFetch(uEffect, ivec2(owner, rowBase + 3), 0).a;
    float cycle = colorSize * float(count);
    float phase =
      fract((vWorldPos.x + vWorldPos.y - uTime * movementSpeed) / cycle);
    float f = phase * float(count);
    int i = int(f) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(f));
  }
  return true;
}

void main() {
  ivec2 tc = ivec2(floor(vWorldPos));

  if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y))
    discard;

  uint railType = texelFetch(uRailroadTex, tc, 0).r;
  uint ghostRailType = texelFetch(uGhostRailTex, tc, 0).r;
  vec2 f = fract(vWorldPos);

  bool detailMode = uZoom >= uRailDetailZoom;

  // Compute coverage for real and ghost rails. In line mode, real coverage is
  // accumulated from the 3x3 neighborhood below so thick lines can spill into
  // neighboring tiles.
  float realCov = detailMode ? railDetailCoverage(railType, f) : 0.0;
  // Ghost only renders where there is no real rail (values 1-6 = ghost path)
  // Value 7 = highlight marker (existing rail turns green)
  float ghostCov = (ghostRailType >= 1u && ghostRailType <= 6u && railType == 0u)
    ? (detailMode ? railDetailCoverage(ghostRailType, f) : railLineCoverage(ghostRailType, f))
    : 0.0;
  bool highlighted = (ghostRailType == 7u && railType != 0u);

  // --- 3x3 neighborhood: bridges (both modes) + line coverage (line mode) ---
  bool hitBridge = false;
  ivec2 fp = ivec2(floor(vWorldPos * 2.0)); // fragment pos in game's 2x-pixel grid

  for (int dy = -1; dy <= 1; dy++) {
    for (int dx = -1; dx <= 1; dx++) {
      ivec2 ntc = tc + ivec2(dx, dy);
      if (ntc.x < 0 || ntc.y < 0 || ntc.x >= int(uMapSize.x) || ntc.y >= int(uMapSize.y))
        continue;
      uint nRail = texelFetch(uRailroadTex, ntc, 0).r;
      if (nRail == 0u) continue;
      if (!detailMode) {
        realCov = max(realCov, railLineCoverage(nRail, vWorldPos - vec2(ntc)));
      }
      if (hitBridge) continue;
      uint nTerr = texelFetch(uTerrainTex, ntc, 0).r;
      if ((nTerr & 0x80u) != 0u) continue; // land tile, no bridge
      ivec2 lp = fp - ntc * 2;
      if (isBridgePixel(nRail, lp)) hitBridge = true;
    }
  }

  bool hitRail = (realCov * uRailAlpha > 0.001);
  bool hitGhost = (ghostCov * uRailAlpha > 0.001);

  if (!hitBridge && !hitRail && !hitGhost) discard;

  // --- Color output ---
  vec3 bridgeColor = vec3(0.773, 0.271, 0.282);

  if (hitRail) {
    float railAlpha = uRailAlpha * realCov;
    uint tileRaw = texelFetch(uTileTex, tc, 0).r;
    uint owner = tileRaw & uint(OWNER_MASK);
    // Local rails use uLocalRailColor (white, or black over light territory)
    // instead of the palette border row.
    vec3 railColor = owner == 0u
      ? vec3(0.75)
      : (owner == uint(uLocalPlayerID)
        ? uLocalRailColor
        : texture(uPalette, vec2((float(owner) + 0.5) / float(PALETTE_SIZE), 0.75)).rgb);
    // railroad cosmetic: rails are colored by the tile owner, so the owner's
    // railroad effect (raw catalog colors, like trails) replaces that color —
    // including the local player's white/black rail color. Like the
    // structures effect it shows while the owner's territory is hovered, and
    // always for the local player (touch devices never hover, and buyers
    // should see what they paid for).
    vec3 effectRGB;
    if (owner != 0u &&
        (owner == uint(uLocalPlayerID) || owner == uint(uHoverOwner + 0.5)) &&
        railroadEffectColor(int(owner), effectRGB)) {
      railColor = effectRGB;
    }
    // Overlapping railroad highlight — green tint
    if (highlighted) railColor = vec3(0.2, 0.85, 0.3);
    if (hitBridge) {
      fragColor = vec4(mix(bridgeColor, railColor, railAlpha), uRailFade);
    } else {
      fragColor = vec4(railColor, railAlpha * uRailFade);
    }
  } else if (hitGhost) {
    float ghostAlpha = uRailAlpha * ghostCov * 0.5;
    vec3 ghostColor = uGhostOwnerID <= 0.0
      ? vec3(0.75)
      : (uGhostOwnerID == uLocalPlayerID
        ? uLocalRailColor
        : texture(uPalette, vec2((uGhostOwnerID + 0.5) / float(PALETTE_SIZE), 0.75)).rgb);
    fragColor = vec4(ghostColor, ghostAlpha * uRailFade);
  } else {
    fragColor = vec4(bridgeColor, uRailFade);
  }
}
`,Ko=0,qo=1,Jo=2,Yo=3,Xo=4,Zo=5;function Qo(e,t,n){let r=t%n-e%n,i=(t-t%n)/n-(e-e%n)/n;return r===0?Ko:i===0?qo:Ko}function $o(e,t,n,r){let i=e%r,a=(e-i)/r,o=t%r,s=(t-o)/r,c=n%r,l=(n-c)/r,u=o-i,d=s-a,f=c-o,p=l-s;if(u===f&&d===p)return u===0?Ko:qo;if(u===0&&f!==0||u!==0&&f===0){if(u===0&&f===1&&d===-1)return Zo;if(u===0&&f===-1&&d===-1)return Xo;if(u===0&&f===1&&d===1)return Yo;if(u===0&&f===-1&&d===1||u===1&&f===0&&p===-1)return Jo;if(u===-1&&f===0&&p===-1)return Yo;if(u===1&&f===0&&p===1)return Xo;if(u===-1&&f===0&&p===1)return Zo}return Ko}var es=class{constructor(e,t,n,r,i,a,o,s){this.gl=e,this.liveRailroadRef=null,this.railroadDirty=!1,this.ghostTiles=new Map,this.ghostOps=[],this.ghostOwnerID=0,this.localPlayerID=0,this.localRailColor=[.75,.75,.75],this.hoverOwner=0,this.startTime=performance.now(),this.mapW=t,this.mapH=n,this.tileTex=r,this.paletteTex=i,this.effectTex=a,this.settings=s,this.program=H(e,Ti,W(Go,{PALETTE_SIZE:B(),RAILROAD_EFFECT_ROW_BASE:40,...mi}),`RailroadPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uRailDetailZoom=e.getUniformLocation(this.program,`uRailDetailZoom`),this.uRailAlpha=e.getUniformLocation(this.program,`uRailAlpha`),this.uRailFade=e.getUniformLocation(this.program,`uRailFade`),this.uRailThickness=e.getUniformLocation(this.program,`uRailThickness`),this.uGhostOwnerID=e.getUniformLocation(this.program,`uGhostOwnerID`),this.uLocalPlayerID=e.getUniformLocation(this.program,`uLocalPlayerID`),this.uLocalRailColor=e.getUniformLocation(this.program,`uLocalRailColor`),this.uHoverOwner=e.getUniformLocation(this.program,`uHoverOwner`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uRailroadTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),1),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),2),e.uniform1i(e.getUniformLocation(this.program,`uTerrainTex`),3),e.uniform1i(e.getUniformLocation(this.program,`uGhostRailTex`),4),e.uniform1i(e.getUniformLocation(this.program,`uEffect`),5),e.uniform1f(this.uGhostOwnerID,0),this.terrainTex=U(e,{width:t,height:n,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:o,filter:e.NEAREST}),this.railroadTex=U(e,{width:t,height:n,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.ghostRailTex=U(e,{width:t,height:n,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.vao=Gr(e,t,n)}uploadRailroadState(e){this.liveRailroadRef=e,this.railroadDirty=!0}setLocalPlayer(e){this.localPlayerID=e}setLocalRailColor(e,t,n){this.localRailColor=[e,t,n]}setHighlightOwner(e){this.hoverOwner=e}applyTerrainRects(e,t){if(e.length===0)return;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.terrainTex),n.pixelStorei(n.UNPACK_ALIGNMENT,1);let r=0;for(let i of e)n.texSubImage2D(n.TEXTURE_2D,0,i.x,i.y,i.w,i.h,n.RED_INTEGER,n.UNSIGNED_BYTE,t,r),r+=i.w*i.h}updateGhostPreview(e){let t=new Map;if(e){let n=this.mapW*this.mapH;for(let r of e.ghostRailPaths){if(r.length===0)continue;let e=this.computePathOrientations(r);for(let r of e)r.ref>=0&&r.ref<n&&t.set(r.ref,r.type+1)}for(let r of e.overlappingRailroads)r>=0&&r<n&&t.set(r,7);this.ghostOwnerID=e.ownerID}else this.ghostOwnerID=0;for(let e of this.ghostTiles.keys())t.has(e)||this.ghostOps.push(e,0);for(let[e,n]of t)this.ghostTiles.get(e)!==n&&this.ghostOps.push(e,n);this.ghostTiles=t}draw(e,t){let n=this.gl,r=this.settings.railroad;this.flushGhostOps();let i=Math.max(r.railFadeRange,0),a=r.railMinZoom-i,o=i<=0?+(t>=r.railMinZoom):Math.min(1,Math.max(0,(t-a)/i));o<=0||(this.railroadDirty&&this.liveRailroadRef!==null&&(n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.railroadTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,this.mapW,this.mapH,n.RED_INTEGER,n.UNSIGNED_BYTE,this.liveRailroadRef),this.railroadDirty=!1),n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform2f(this.uMapSize,this.mapW,this.mapH),n.uniform1f(this.uZoom,t),n.uniform1f(this.uTime,(performance.now()-this.startTime)/1e3),n.uniform1f(this.uRailDetailZoom,r.railDetailZoom),n.uniform1f(this.uRailAlpha,r.railAlpha),n.uniform1f(this.uRailFade,o),n.uniform1f(this.uRailThickness,r.railThickness),n.uniform1f(this.uGhostOwnerID,this.ghostOwnerID),n.uniform1f(this.uLocalPlayerID,this.localPlayerID),n.uniform1f(this.uHoverOwner,this.hoverOwner),n.uniform3f(this.uLocalRailColor,this.localRailColor[0],this.localRailColor[1],this.localRailColor[2]),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.railroadTex),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.tileTex),n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,this.paletteTex),n.activeTexture(n.TEXTURE3),n.bindTexture(n.TEXTURE_2D,this.terrainTex),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,this.ghostRailTex),n.activeTexture(n.TEXTURE5),n.bindTexture(n.TEXTURE_2D,this.effectTex),n.bindVertexArray(this.vao),n.drawArrays(n.TRIANGLES,0,6))}flushGhostOps(){let e=this.ghostOps;if(e.length===0)return;let t=this.gl;t.activeTexture(t.TEXTURE4),t.bindTexture(t.TEXTURE_2D,this.ghostRailTex),t.pixelStorei(t.UNPACK_ALIGNMENT,1);let n=new Uint8Array(1);for(let r=0;r<e.length;r+=2){let i=e[r],a=i%this.mapW,o=(i-a)/this.mapW;n[0]=e[r+1],t.texSubImage2D(t.TEXTURE_2D,0,a,o,1,1,t.RED_INTEGER,t.UNSIGNED_BYTE,n)}e.length=0}computePathOrientations(e){if(e.length===0)return[];if(e.length===1)return[{ref:e[0],type:Ko}];let t=this.mapW,n=[];n.push({ref:e[0],type:Qo(e[0],e[1],t)});for(let r=1;r<e.length-1;r++)n.push({ref:e[r],type:$o(e[r-1],e[r],e[r+1],t)});let r=e.length-1;return n.push({ref:e[r],type:Qo(e[r],e[r-1],t)}),n}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.railroadTex),e.deleteTexture(this.ghostRailTex),e.deleteTexture(this.terrainTex)}},ts=`#version 300 es
precision highp float;

in vec2 vLocal; // [-1, +1]

uniform float uRadius;
uniform vec3 uColor;

out vec4 fragColor;

void main() {
  float dist = length(vLocal) * (uRadius + 1.0); // world-space distance from center
  float edge = uRadius;

  // Smooth fill: inside the circle at 20% white
  float fill = 1.0 - smoothstep(edge - 0.5, edge + 0.5, dist);

  // Stroke: 1-tile-wide ring at the edge
  float strokeInner = edge - 1.0;
  float strokeOuter = edge;
  float stroke = smoothstep(strokeInner - 0.5, strokeInner + 0.5, dist)
               * (1.0 - smoothstep(strokeOuter - 0.5, strokeOuter + 0.5, dist));

  float alpha = fill * 0.2 + stroke * 0.5;
  if (alpha < 0.001) discard;

  fragColor = vec4(uColor, alpha);
}
`,ns=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;
uniform vec2 uCenter;   // world-space circle center (tile coords)
uniform float uRadius;  // world-space radius in tiles

out vec2 vLocal; // [-1, +1] local coords within the quad

void main() {
  // Map [0,1] → [-1,+1]
  vLocal = aPos * 2.0 - 1.0;

  // Expand quad to cover circle bbox in world space
  // Add 1-tile padding for the stroke
  float r = uRadius + 1.0;
  vec2 worldPos = uCenter + 0.5 + vLocal * r;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,rs=class{constructor(e){this.centerX=0,this.centerY=0,this.radius=0,this.warning=!1,this.gl=e,this.program=H(e,ns,ts,`RangeCirclePass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uRadius=e.getUniformLocation(this.program,`uRadius`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}updateGhostPreview(e){e&&e.rangeRadius>0?(this.centerX=e.radiusTileX,this.centerY=e.radiusTileY,this.radius=e.rangeRadius,this.warning=e.rangeWarning):(this.radius=0,this.warning=!1)}draw(e){if(this.radius<=0)return;let t=this.gl;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.bindVertexArray(this.vao),t.uniform2f(this.uCenter,this.centerX,this.centerY),t.uniform1f(this.uRadius,this.radius),this.warning?t.uniform3f(this.uColor,1,.2,.2):t.uniform3f(this.uColor,1,1,1),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},is=50,as=150,os=as*as,ss=32,cs=150,ls=480,us=5,ds=.75;function fs(e){return cs-ls/(e+us)}function ps(e,t,n){return e<t?t:e>n?n:e}function ms(e,t,n,r,i,a){let o=n-e,s=r-t,c=Math.sqrt(o*o+s*s),l=Math.max(c/3,is),u=a?-1:1;return{p0x:e,p0y:t,p1x:e+o/4,p1y:ps(t+s/4+u*l,0,i-1),p2x:e+o*3/4,p2y:ps(t+s*3/4+u*l,0,i-1),p3x:n,p3y:r}}function hs(e,t,n,r,i,a,o,s,c,l,u,d,f,p){let m=!1;for(let h=0;h<10;h++){let h=(d+f)*.5,g=((e*h+t)*h+n)*h+r+.5|0,_=((i*h+a)*h+o)*h+s+.5|0,v=g-c,y=_-l,b=v*v+y*y<=u;b&&(m=!0),(p?b:!b)?d=h:f=h}if(!p&&!m){let d=((e*f+t)*f+n)*f+r+.5|0,p=((i*f+a)*f+o)*f+s+.5|0,m=d-c,h=p-l;if(m*m+h*h>u)return 1}return(d+f)*.5}function gs(e,t,n,r,i,a){let o=-1,s=-1,c=1,l=1/ss,u=3*(e.p1x-e.p0x),d=3*(e.p2x-2*e.p1x+e.p0x),f=r-3*e.p2x+3*e.p1x-e.p0x,p=e.p0x,m=3*(e.p1y-e.p0y),h=3*(e.p2y-2*e.p1y+e.p0y),g=i-3*e.p2y+3*e.p1y-e.p0y,_=e.p0y,v=r-t,y=i-n,b=v*v+y*y>4*os,x=a.length,S=e.p0x+.5|0,C=e.p0y+.5|0;for(let e=1;e<=ss;e++){let v=e*l,y=v-l,w=((f*v+d)*v+u)*v+p+.5|0,T=((g*v+h)*v+m)*v+_+.5|0,E=!1;if(b){if(o<0){let e=w-t,a=T-n;if(e*e+a*a>os){let e=w-r,a=T-i;e*e+a*a>=os&&(o=hs(f,d,u,p,g,h,m,_,t,n,os,y,v,!0),E=!0)}}else if(s<0){let e=w-r,t=T-i;e*e+t*t<os?s=hs(f,d,u,p,g,h,m,_,r,i,os,y,v,!1):E=!0}}if(s>=0&&y<s&&v>=s&&x>0){let e=((f*s+d)*s+u)*s+p+.5|0,t=((g*s+h)*s+m)*s+_+.5|0;for(let n=0;n<x;n++){let r=a[n],i=e-r.x,o=t-r.y;if(i*i+o*o<=r.r*r.r){c=s;break}}if(c<1)break}if(!E&&x>0){let e=w-S,t=T-C,n=e*e+t*t,r=n===0?0:1/n,i=Math.sqrt(n)+cs+ds,o=i*i;for(let i=0;i<x;i++){let l=a[i],b=l.x-S,x=l.y-C,w=b*b+x*x;if(w>o)continue;let T,E=b*e+x*t;T=E<=0?w:E>=n?w+n-2*E:w-E*E*r;let D=l.r*l.r,O=(l.r+ds)*(l.r+ds);if(T<=O){let e=s>=0&&y<s?s:y,t=hs(f,d,u,p,g,h,m,_,l.x,l.y,D,e,v,!1);if(t<1){c=t;break}}}if(c<1)break}S=w,C=T}return{tUntargetableStart:o,tUntargetableEnd:s,tSamIntercept:c}}function _s(e,t,n,r,i,a,o){let s=ms(e,t,n,r,i,a),c=gs(s,e,t,Math.round(n),Math.round(r),o);return{...s,...c}}var vs=`#version 300 es
precision highp float;

in vec2 vLocal;
flat in float vRadius;
flat in vec4 vColor;
flat in vec2 vArcBounds;
flat in float vSpin;

uniform float uTime;
uniform float uOutline;        // 1.0 = owner mode (outline edges), 0.0 = perspective
uniform float uStrokeWidth;    // ring half-width (world units)
uniform float uDashLen;        // dash length (world units)
uniform float uGapLen;         // gap length (world units)
uniform float uRotationSpeed;  // rotation (world units/sec)
uniform float uAlpha;          // base opacity
uniform float uOutlineWidth;   // outline border width (world units)
uniform float uOutlineSoftness; // smoothstep range (0 = hard edge)

out vec4 fragColor;

const float TWO_PI = 6.2831853;

void main() {
  float paddedR = vRadius + 2.0;
  float dist = length(vLocal) * paddedR;

  // Ring mask: stroke centered on the circle edge
  float ringAlpha = smoothstep(vRadius - uStrokeWidth - 0.5, vRadius - uStrokeWidth, dist)
                  * (1.0 - smoothstep(vRadius + uStrokeWidth, vRadius + uStrokeWidth + 0.5, dist));

  if (ringAlpha < 0.01) discard;

  // Arc clipping
  float angle = atan(vLocal.y, vLocal.x);
  float normAngle = angle < 0.0 ? angle + TWO_PI : angle;
  bool fullCircle = vArcBounds.y - vArcBounds.x >= TWO_PI - 0.001;
  if (!fullCircle) {
    if (normAngle < vArcBounds.x || normAngle > vArcBounds.y) discard;
  }

  // Dash pattern along circumference
  float arcPos = angle * vRadius;
  float period = uDashLen + uGapLen;
  float dashPhase = mod(arcPos + uTime * uRotationSpeed * vSpin, period);
  float dashAlpha = 1.0 - smoothstep(uDashLen - 0.5, uDashLen + 0.5, dashPhase);

  float alpha = ringAlpha * dashAlpha * uAlpha * vColor.a;
  if (alpha < 0.01) discard;

  // Outline: darken fragments near any edge of each dash segment
  float edgeFade = 1.0;
  if (uOutline > 0.5) {
    float ow = uOutlineWidth;
    float soft = uOutlineSoftness;
    // Radial edges (inner/outer ring boundary)
    float fromInner = dist - (vRadius - uStrokeWidth);
    float fromOuter = (vRadius + uStrokeWidth) - dist;
    edgeFade = min(smoothstep(ow - soft, ow + soft, fromInner),
                   smoothstep(ow - soft, ow + soft, fromOuter));
    // Dash start/end edges (circumferential)
    edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, dashPhase));
    edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, uDashLen - dashPhase));
    // Arc endpoint edges (where circle union clips the arc)
    if (!fullCircle) {
      float arcDistStart = (normAngle - vArcBounds.x) * vRadius;
      float arcDistEnd   = (vArcBounds.y - normAngle) * vRadius;
      edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, arcDistStart));
      edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, arcDistEnd));
    }
  }

  vec3 finalColor = vColor.rgb * edgeFade;
  fragColor = vec4(finalColor, alpha);
}
`,ys=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;
// Per-instance: x, y, radius
layout(location = 1) in vec3 aInstance;
// Per-instance: r, g, b, alpha
layout(location = 2) in vec4 aColor;
// Per-instance: arcStart, arcEnd, spin
layout(location = 3) in vec3 aArcBounds;

uniform mat3 uCamera;

out vec2 vLocal;        // [-1, +1] local coords
flat out float vRadius; // world-space radius for this instance
flat out vec4 vColor;   // relationship color + instance alpha
flat out vec2 vArcBounds; // arc start/end in [0, 2PI)
flat out float vSpin;   // 1.0 = spinning, 0.0 = static

void main() {
  vLocal = aPos * 2.0 - 1.0;
  vRadius = aInstance.z;
  vColor = aColor;
  vArcBounds = aArcBounds.xy;
  vSpin = aArcBounds.z;

  // Expand quad to cover circle bbox + padding for stroke
  float r = aInstance.z + 2.0;
  vec2 center = aInstance.xy + 0.5;
  vec2 worldPos = center + vLocal * r;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,bs=Math.PI*2,xs=1e-9,Ss=100,Cs=10,ws=[0,1,0],Ts=[1,1,0],Es=[1,0,0];function Ds(e,t){return e[0]-t[0]}function Os(e){for(;e<0;)e+=bs;for(;e>=bs;)e-=bs;return e}function ks(e){if(e.length===0)return[];let t=[];for(let[n,r]of e){let e=Os(n),i=Os(r);i<e?(t.push([e,bs]),t.push([0,i])):t.push([e,i])}t.sort(Ds);let n=[],r=[t[0][0],t[0][1]];for(let e=1;e<t.length;e++){let i=t[e];i[0]<=r[1]+xs?r[1]=Math.max(r[1],i[1]):(n.push(r),r=[i[0],i[1]])}return n.push(r),n}function As(e,t){let n=[];for(let r=0;r<t.length;r++){let i=t[r];if(e===i)continue;let a=i.x-e.x,o=i.y-e.y,s=a*a+o*o;if(s<=xs)continue;let c=i.radius-e.radius;if(c>=0&&s<=c*c+xs)return[];let l=e.radius+i.radius;if(s>=l*l-xs)continue;let u=Math.sqrt(s),d=(e.radius*e.radius+s-i.radius*i.radius)/(2*e.radius*u),f=Math.acos(Math.max(-1,Math.min(1,d))),p=Math.atan2(o,a);n.push([p-f,p+f])}let r=ks(n);if(r.length===0)return[[0,bs]];let i=[],a=0;for(let e=0;e<r.length;e++){let[t,n]=r[e];t>a+xs&&i.push([a,t]),a=Math.max(a,n)}return a<bs-xs&&i.push([a,bs]),i}var js=class e{static{this.GEOMETRY_REFRESH_INTERVAL_MS=50}constructor(e,t,n){this.instanceCount=0,this.visible=!1,this.mapW=0,this.startTime=performance.now(),this.localPlayerID=0,this.allies=new Set,this.currentTick=0,this.lastTickTime=performance.now(),this.hasUpgradingSAM=!1,this.groupBuckets=[],this.lastGeometryTime=0,this.dirtyGroups=new Set,this.colorScratch=[0,0,0],this.paletteData=null,this.colorMode=`perspective`,this.allianceClusters=new Map,this.lastStructures=null,this.gl=e,this.mapW=t,this.settings=n,this.program=H(e,ys,vs,`SamRadiusPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uOutline=e.getUniformLocation(this.program,`uOutline`),this.uStrokeWidth=e.getUniformLocation(this.program,`uStrokeWidth`),this.uDashLen=e.getUniformLocation(this.program,`uDashLen`),this.uGapLen=e.getUniformLocation(this.program,`uGapLen`),this.uRotationSpeed=e.getUniformLocation(this.program,`uRotationSpeed`),this.uAlpha=e.getUniformLocation(this.program,`uAlpha`),this.uOutlineWidth=e.getUniformLocation(this.program,`uOutlineWidth`),this.uOutlineSoftness=e.getUniformLocation(this.program,`uOutlineSoftness`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();this.instanceBuf=new Bi(e,i,64,Cs),e.bindBuffer(e.ARRAY_BUFFER,i);let a=Cs*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,a,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,4,e.FLOAT,!1,a,12),e.vertexAttribDivisor(2,1),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,3,e.FLOAT,!1,a,28),e.vertexAttribDivisor(3,1),e.bindVertexArray(null)}setLocalPlayer(e){e!==this.localPlayerID&&(this.localPlayerID=e,this.rebuild())}setAllies(e){this.allies=e,this.rebuild()}setPaletteData(e){this.paletteData=e}setColorMode(e){e!==this.colorMode&&(this.colorMode=e,this.rebuild())}setAllianceClusters(e){this.allianceClusters=e}setTick(e){e!==this.currentTick&&(this.currentTick=e,this.lastTickTime=performance.now(),this.hasUpgradingSAM&&this.rebuild())}getContinuousTick(){let e=Math.min(1,Math.max(0,(performance.now()-this.lastTickTime)/Ss));return this.currentTick+e}rebuild(){this.lastStructures&&this.updateStructures(this.lastStructures)}updateStructures(e,t){t!==void 0&&(this.currentTick=t,this.lastTickTime=performance.now()),this.lastGeometryTime=performance.now(),this.lastStructures=e;let n=this.collectSAMCircles(e,this.getContinuousTick());this.uploadInstances(n)}getSAMBaseGroup(e,t){return this.colorMode===`owner`?this.allianceClusters.get(e.ownerID)??e.ownerID:+!t}getSAMColor(e,t){if(this.colorMode===`owner`&&this.paletteData){let t=e*4;if(t+2<this.paletteData.length)return this.colorScratch[0]=this.paletteData[t],this.colorScratch[1]=this.paletteData[t+1],this.colorScratch[2]=this.paletteData[t+2],this.colorScratch}return e===this.localPlayerID?ws:this.allies.has(e)?Ts:Es}collectSAMCircles(e,t){let n=[],r=this.mapW;this.dirtyGroups.clear();for(let n of e.values()){if(n.unitType!==`SAM Launcher`||!n.isActive)continue;let e=n.ownerID===this.localPlayerID||this.allies.has(n.ownerID),r=this.getSAMBaseGroup(n,e),i=n.samUpgradeStartTick,a=n.samUpgradeDuration??0;i!==null&&t>=i&&t-i<a&&this.dirtyGroups.add(r)}this.hasUpgradingSAM=this.dirtyGroups.size>0;for(let i of e.values()){if(i.unitType!==`SAM Launcher`||!i.isActive)continue;let e=i.ownerID===this.localPlayerID||this.allies.has(i.ownerID),a=this.getSAMBaseGroup(i,e),o=this.getSAMColor(i.ownerID,e),s=i.pos%r,c=(i.pos-s)/r;this.pushSAMCircles(n,i,s,c,o,a,t,e,this.dirtyGroups.has(a))}return n}pushSAMCircles(e,t,n,r,i,a,o,s,c){let l=t.samUpgradeStartTick,u=t.samUpgradeDuration??0,d=a*2,f=a*2+1;if(l!==null&&o>=l&&o-l<u){let a=o-l,c=Math.max(0,Math.min(1,a/u)),p=fs(t.samUpgradeTargetLevel??0),m=t.samUpgradeStartRange??0,h=m+(p-m)*c;e.push({x:n,y:r,radius:h,r:i[0],g:i[1],b:i[2],alpha:s?1:.35,group:d,spin:+!!s}),e.push({x:n,y:r,radius:p,r:i[0],g:i[1],b:i[2],alpha:s?.35:1,group:f,spin:+!s})}else e.push({x:n,y:r,radius:fs(t.level),r:i[0],g:i[1],b:i[2],alpha:1,group:d,spin:1}),c&&e.push({x:n,y:r,radius:fs(t.level),r:i[0],g:i[1],b:i[2],alpha:s?.35:1,group:f,spin:+!s})}uploadInstances(e){for(let e=0;e<this.groupBuckets.length;e++){let t=this.groupBuckets[e];t&&(t.length=0)}for(let t=0;t<e.length;t++){let n=e[t],r=this.groupBuckets[n.group];r||(r=[],this.groupBuckets[n.group]=r),r.push(n)}let t=0;for(let e=0;e<this.groupBuckets.length;e++){let n=this.groupBuckets[e];if(!(!n||n.length===0))for(let e=0;e<n.length;e++){let r=n[e],i=As(r,n);for(let e=0;e<i.length;e++){let[n,a]=i[e];this.instanceBuf.ensureCapacity(t+1);let o=t*Cs,s=this.instanceBuf.float32;s[o+0]=r.x,s[o+1]=r.y,s[o+2]=r.radius,s[o+3]=r.r,s[o+4]=r.g,s[o+5]=r.b,s[o+6]=r.alpha,s[o+7]=n,s[o+8]=a,s[o+9]=r.spin,t++}}}if(this.instanceCount=t,t>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceBuf.float32,0,t*Cs)}}setVisible(e){this.visible=e}draw(t){if(!this.visible||this.instanceCount===0)return;let n=performance.now();if(this.hasUpgradingSAM&&this.lastStructures&&n-this.lastGeometryTime>=e.GEOMETRY_REFRESH_INTERVAL_MS){this.lastGeometryTime=n;let e=this.collectSAMCircles(this.lastStructures,this.getContinuousTick());this.uploadInstances(e)}let r=this.gl,i=(performance.now()-this.startTime)/1e3,a=this.settings.samRadius;r.useProgram(this.program),r.uniformMatrix3fv(this.uCamera,!1,t),r.uniform1f(this.uTime,i),r.uniform1f(this.uOutline,+(this.colorMode===`owner`)),r.uniform1f(this.uStrokeWidth,a.strokeWidth),r.uniform1f(this.uDashLen,a.dashLen),r.uniform1f(this.uGapLen,a.gapLen),r.uniform1f(this.uRotationSpeed,a.rotationSpeed),r.uniform1f(this.uAlpha,a.alpha),r.uniform1f(this.uOutlineWidth,a.outlineWidth),r.uniform1f(this.uOutlineSoftness,a.outlineSoftness),r.bindVertexArray(this.vao),r.drawArraysInstanced(r.TRIANGLES,0,6,this.instanceCount)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao)}},Ms=`#version 300 es
precision highp float;

in vec2 vWorld;

uniform vec2 uCenter;
uniform float uHalfSize;
uniform float uTime;     // frame tick counter (increments each frame)
uniform vec3 uColor;     // RGB [0-1], already lightened

out vec4 fragColor;

void main() {
  // Tile-space relative to center
  vec2 tile = floor(vWorld);
  vec2 rel = tile - floor(uCenter);
  float hs = uHalfSize;

  // Is this tile on the border of the selection box?
  bool inXRange = rel.x >= -hs && rel.x <= hs;
  bool inYRange = rel.y >= -hs && rel.y <= hs;
  bool isXEdge = abs(rel.x - hs) < 0.5 || abs(rel.x + hs) < 0.5;
  bool isYEdge = abs(rel.y - hs) < 0.5 || abs(rel.y + hs) < 0.5;

  bool onBorder = (isXEdge && inYRange) || (isYEdge && inXRange);
  if (!onBorder) discard;

  // Stipple: checkerboard pattern (every other tile)
  float stipple = mod(tile.x + tile.y, 2.0);
  if (stipple > 0.5) discard;

  // Pulsating alpha (matches game: base 200/255 ± 55/255)
  float baseAlpha = 0.784;  // 200/255
  float pulseAmp  = 0.216;  // 55/255
  float alpha = baseAlpha + sin(uTime * 0.1) * pulseAmp;

  fragColor = vec4(uColor, alpha);
}
`,Ns=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;
uniform vec2 uCenter;    // world-space tile center (integer)
uniform float uHalfSize; // box half-size in tiles

out vec2 vWorld; // world-space position

void main() {
  // Map [0,1] → [-1,+1]
  vec2 local = aPos * 2.0 - 1.0;

  // Expand quad to cover box + 1-tile padding for AA
  float r = uHalfSize + 1.0;
  vWorld = uCenter + 0.5 + local * r;

  vec3 clip = uCamera * vec3(vWorld, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Ps=6,Fs=class{constructor(e){this.selections=[],this.gl=e,this.program=H(e,Ns,Ms,`SelectionBoxPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uHalfSize=e.getUniformLocation(this.program,`uHalfSize`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}setSelections(e){this.selections.length=0;for(let t=0;t<e.length;t++)this.selections.push(e[t])}update(e,t,n,r,i,a){this.selections.length=0,e&&this.selections.push({centerX:t,centerY:n,r,g:i,b:a})}hide(){this.selections.length=0}draw(e,t){if(this.selections.length===0)return;let n=this.gl;n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform1f(this.uHalfSize,Ps),n.uniform1f(this.uTime,t),n.bindVertexArray(this.vao);for(let e=0;e<this.selections.length;e++){let t=this.selections[e];n.uniform2f(this.uCenter,t.centerX,t.centerY),n.uniform3f(this.uColor,t.r,t.g,t.b),n.drawArrays(n.TRIANGLES,0,6)}}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},Is=1024,Ls=class{constructor(e,t,n){if(this.layers=new Map,this.disposed=!1,this.gl=e,this.onLayerReady=n,t.length===0){this.tex=this.makeTex(1,1,1);return}this.tex=this.makeTex(Is,Is,t.length),t.forEach((e,t)=>{this.layers.set(e,t),this.load(e,t)})}get texture(){return this.tex}getLayer(e){return this.layers.get(e)??-1}load(e,t){let n=new Image;n.crossOrigin=`anonymous`,n.onload=()=>{this.disposed||(this.uploadImage(n,t),this.onLayerReady(e,t))},n.onerror=()=>{console.warn(`Skin image failed to load:`,e)},n.src=e}uploadImage(e,t){let n=document.createElement(`canvas`);n.width=Is,n.height=Is;let r=n.getContext(`2d`,{willReadFrequently:!1}),i=Math.min(1,Is/e.naturalWidth,Is/e.naturalHeight),a=e.naturalWidth*i|0,o=e.naturalHeight*i|0,s=(Is-a)/2|0,c=(Is-o)/2|0;r.drawImage(e,s,c,a,o);let l=this.gl;l.bindTexture(l.TEXTURE_2D_ARRAY,this.tex),l.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,t,Is,Is,1,l.RGBA,l.UNSIGNED_BYTE,n),l.generateMipmap(l.TEXTURE_2D_ARRAY)}makeTex(e,t,n){let r=this.gl,i=r.createTexture();return r.bindTexture(r.TEXTURE_2D_ARRAY,i),r.texStorage3D(r.TEXTURE_2D_ARRAY,Rs(e,t),r.RGBA8,e,t,n),r.texParameteri(r.TEXTURE_2D_ARRAY,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_2D_ARRAY,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D_ARRAY,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D_ARRAY,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),i}dispose(){this.disposed=!0,this.gl.deleteTexture(this.tex),this.layers.clear()}};function Rs(e,t){return Math.floor(Math.log2(Math.max(e,t)))+1}var zs=`#version 300 es
precision highp float;

// Tints the blurred aura with the glow color and the breathing intensity
// (alpha * pulse), premultiplied for an additive composite over the map.
uniform sampler2D uTex;
uniform vec3 uGlowColor;
uniform float uIntensity; // glow alpha * pulse (0 = invisible)
in vec2 vUV;
out vec4 fragColor;

void main() {
  float g = texture(uTex, vUV).r;
  float a = clamp(g * uIntensity, 0.0, 1.0);
  fragColor = vec4(uGlowColor * a, a); // premultiplied
}
`,Bs=`#version 300 es
precision highp float;
precision highp usampler2D;

// Emit 1 where a "small" player owns a tile. Territory is sparse (often lone
// tiles), so each cell scans its whole TILE_SCALE block instead of point-
// sampling, else single tiles get missed. OWNER_MASK/TILE_SCALE are injected.

uniform usampler2D uTileTex;      // R16UI — tile state (owner in low bits)
uniform usampler2D uHighlightSet; // R8UI, 1px per owner — 1 = highlighted
uniform vec2 uMapSize;

out vec4 fragColor;

void main() {
  ivec2 base = ivec2(gl_FragCoord.xy) * TILE_SCALE;
  for (int j = 0; j < TILE_SCALE; j++) {
    for (int i = 0; i < TILE_SCALE; i++) {
      ivec2 tc = base + ivec2(i, j);
      if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) continue;
      uint owner = texelFetch(uTileTex, tc, 0).r & uint(OWNER_MASK);
      if (owner != 0u &&
          texelFetch(uHighlightSet, ivec2(int(owner), 0), 0).r > 0u) {
        fragColor = vec4(1.0);
        return;
      }
    }
  }
  discard;
}
`,Vs=B(),Hs=4,Us=class{constructor(e,t,n,r,i){this.active=!1,this.dirty=!1,this.animTime=0,this.lastTime=0,this.gl=e,this.settings=i,this.mapW=t,this.mapH=n,this.tileTex=r,this.extractProg=H(e,di,W(Bs,{...mi,TILE_SCALE:Hs}),`SmallPlayerGlowPass.extractProg`),this.uExtractMapSize=e.getUniformLocation(this.extractProg,`uMapSize`),e.useProgram(this.extractProg),e.uniform1i(e.getUniformLocation(this.extractProg,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.extractProg,`uHighlightSet`),1),this.blurProg=H(e,Yi,Ji,`SmallPlayerGlowPass.blurProg`),this.uBlurDir=e.getUniformLocation(this.blurProg,`uDir`),e.useProgram(this.blurProg),e.uniform1i(e.getUniformLocation(this.blurProg,`uTex`),0),this.compositeProg=H(e,Xi,zs,`SmallPlayerGlowPass.compositeProg`),this.uCompositeCam=e.getUniformLocation(this.compositeProg,`uCamera`),this.uCompositeMapSize=e.getUniformLocation(this.compositeProg,`uMapSize`),this.uGlowColor=e.getUniformLocation(this.compositeProg,`uGlowColor`),this.uIntensity=e.getUniformLocation(this.compositeProg,`uIntensity`),e.useProgram(this.compositeProg),e.uniform1i(e.getUniformLocation(this.compositeProg,`uTex`),0),this.setTex=U(e,{width:Vs,height:1,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST});let a=Math.max(1,Math.ceil(t/Hs)),o=Math.max(1,Math.ceil(n/Hs));this.targetA=Wr(e,a,o),this.targetB=Wr(e,a,o),this.mapVao=Gr(e,t,n),this.quadVao=Vr(e)}update(e){if(e===null){this.active=!1;return}let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.setTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,Math.min(e.length,Vs),1,t.RED_INTEGER,t.UNSIGNED_BYTE,e),this.active=!0,this.dirty=!0}blurAxis(e,t,n,r){let i=this.gl;Hr(i,t,()=>{i.uniform2f(this.uBlurDir,n,r),i.bindTexture(i.TEXTURE_2D,e.tex),i.bindVertexArray(this.quadVao),i.drawArrays(i.TRIANGLES,0,6)})}draw(e){let t=Math.min(1,this.settings.strength);if(!this.active||t<=0)return;let n=this.gl,r=this.settings,i=n.canvas,a=this.targetA,o=this.targetB,s=performance.now();this.lastTime>0&&(this.animTime+=Math.min(s-this.lastTime,100)*r.pulseSpeed),this.lastTime=s;let c=.5+.5*Math.sin(this.animTime);this.dirty&&=(n.disable(n.BLEND),n.useProgram(this.extractProg),n.uniform2f(this.uExtractMapSize,this.mapW,this.mapH),Hr(n,a,()=>{n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.tileTex),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.setTex),n.bindVertexArray(this.quadVao),n.drawArrays(n.TRIANGLES,0,6)}),n.useProgram(this.blurProg),n.activeTexture(n.TEXTURE0),this.blurAxis(a,o,1/a.w,0),this.blurAxis(o,a,0,1/o.h),!1),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),Ur(n,i.width,i.height,()=>{n.useProgram(this.compositeProg),n.uniformMatrix3fv(this.uCompositeCam,!1,e),n.uniform2f(this.uCompositeMapSize,this.mapW,this.mapH),n.uniform3fv(this.uGlowColor,r.color),n.uniform1f(this.uIntensity,r.alpha*c*t),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,a.tex),n.bindVertexArray(this.mapVao),n.drawArrays(n.TRIANGLES,0,6)}),n.bindVertexArray(null),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)}dispose(){let e=this.gl;e.deleteProgram(this.extractProg),e.deleteProgram(this.blurProg),e.deleteProgram(this.compositeProg),e.deleteTexture(this.setTex),e.deleteTexture(this.targetA.tex),e.deleteTexture(this.targetB.tex),e.deleteFramebuffer(this.targetA.fbo),e.deleteFramebuffer(this.targetB.fbo),e.deleteVertexArray(this.mapVao),e.deleteVertexArray(this.quadVao)}},Ws=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uTileTex;
uniform vec2 uMapSize;

uniform float uBreathRadius;   // normalized [0..1], animated via sin

// Configurable parameters (from render settings)
uniform float uHighlightRadiusSq; // tile highlight radius squared
uniform float uHighlightAlpha;    // tile highlight opacity
uniform vec4 uSelfRadii;          // (minR, maxR, _, _)
uniform vec4 uMateRadii;          // (minR, maxR, _, _)
uniform vec2 uGradientStops;      // (innerEdge, solidEnd)

in vec2 vWorldPos;
flat in vec2 vCenter;
flat in float vKind;   // 0 = enemy highlight, 1 = self ring, 2 = teammate ring
flat in vec3 vColor;

out vec4 fragColor;

void main() {
  float dx = vWorldPos.x - vCenter.x;
  float dy = vWorldPos.y - vCenter.y;
  float distSq = dx * dx + dy * dy;
  float dist = sqrt(distSq);

  // --- Enemy tile highlights: only unowned tiles within radius ---
  if (vKind < 0.5) {
    ivec2 tc = ivec2(floor(vWorldPos));
    if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y))
      discard;
    if (distSq > uHighlightRadiusSq) discard;
    uint raw = texelFetch(uTileTex, tc, 0).r;
    if ((raw & uint(OWNER_MASK)) != 0u) discard; // owned tile → no highlight
    fragColor = vec4(vColor, uHighlightAlpha);
    return;
  }

  // --- Breathing rings (self or teammate) ---
  float minR, maxR;
  vec3 color;
  if (vKind > 1.5) {
    minR = uMateRadii.x;
    maxR = uMateRadii.y;
    color = vColor;
  } else {
    minR = uSelfRadii.x;
    maxR = uSelfRadii.y;
    // Self ring pulses white → its base color in phase with the breath so one
    // end of the pulse always contrasts with the terrain.
    color = mix(vec3(1.0), vColor, uBreathRadius);
  }

  // Breathing ring: the gradient halo shrinks/expands in radius AND its
  // opacity pulses in phase with the breath — both driven by uBreathRadius.
  // Smooth bell shape: glow ramps up from center to the inner edge, stays
  // solid through the ring's body, then fades out past solidEnd.
  float scale = 0.5 + 0.65 * uBreathRadius; // 0.5 → 1.15 of base radius
  float bMinR = minR * scale;
  float bMaxR = maxR * scale;
  float range = bMaxR - bMinR;
  float t = (dist - bMinR) / range;
  float solidEnd = uGradientStops.y;
  float alpha = 0.0;
  if (dist < bMinR) {
    // Inner glow: transparent at the center (so your territory shows through)
    // ramping up to fully solid at the ring's inner edge.
    alpha = dist / max(bMinR, 0.001);
  } else if (t < solidEnd) {
    alpha = 1.0;
  } else if (t < 1.0) {
    alpha = 1.0 - (t - solidEnd) / (1.0 - solidEnd);
  }
  if (alpha <= 0.0) discard;
  // Opacity pulses 65% → 100% in phase with the radius.
  alpha *= 0.65 + 0.35 * uBreathRadius;
  fragColor = vec4(color, alpha);
}
`,Gs=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;
// Per-instance: centerX, centerY, quadRadius, kind
//   kind: 0 = enemy tile highlight, 1 = self ring, 2 = teammate ring
layout(location = 1) in vec4 aInstance;
// Per-instance: r, g, b (base color)
layout(location = 2) in vec3 aColor;

uniform mat3 uCamera;

out vec2 vWorldPos;     // tile-space position of this fragment
flat out vec2 vCenter;  // spawn center (tile coords)
flat out float vKind;
flat out vec3 vColor;

void main() {
  vec2 local = aPos * 2.0 - 1.0; // [-1, +1]
  vec2 center = aInstance.xy;
  float r = aInstance.z;
  vKind = aInstance.w;
  vColor = aColor;
  vCenter = center;

  vec2 worldPos = center + local * r;
  vWorldPos = worldPos;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Ks=7,qs=1.15,Js=1,Ys=0,Xs=1,Zs=2,Qs=class{constructor(e,t,n,r,i){this.active=!1,this.instanceCount=0,this.animTime=0,this.lastTime=0,this.gl=e,this.mapW=t,this.mapH=n,this.tileTex=r,this.settings=i,this.program=H(e,Gs,W(Ws,{...mi}),`SpawnOverlayPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uBreathRadius=e.getUniformLocation(this.program,`uBreathRadius`),this.uHighlightRadiusSq=e.getUniformLocation(this.program,`uHighlightRadiusSq`),this.uHighlightAlpha=e.getUniformLocation(this.program,`uHighlightAlpha`),this.uSelfRadii=e.getUniformLocation(this.program,`uSelfRadii`),this.uMateRadii=e.getUniformLocation(this.program,`uMateRadii`),this.uGradientStops=e.getUniformLocation(this.program,`uGradientStops`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let o=e.createBuffer();this.instanceBuf=new Bi(e,o,64,Ks),e.bindBuffer(e.ARRAY_BUFFER,o);let s=Ks*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,s,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,s,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}update(e){if(this.active=e.length>0,!this.active){this.instanceCount=0;return}let t=this.settings,n=t.selfMaxRad*qs+Js,r=t.mateMaxRad*qs+Js,i=t.highlightRadius+Js;this.instanceBuf.ensureCapacity(e.length);let a=this.instanceBuf.float32,o=0,s=(e,t,n)=>{let r=o*Ks;a[r+0]=e.x,a[r+1]=e.y,a[r+2]=n,a[r+3]=t,a[r+4]=e.r,a[r+5]=e.g,a[r+6]=e.b,o++};for(let t of e)!t.isSelf&&!t.isTeammate&&s(t,Ys,i);for(let t of e)t.isTeammate&&s(t,Zs,r);for(let t of e)t.isSelf&&s(t,Xs,n);this.instanceCount=o;let c=this.gl;c.bindBuffer(c.ARRAY_BUFFER,this.instanceBuf.buffer),c.bufferSubData(c.ARRAY_BUFFER,0,this.instanceBuf.float32,0,o*Ks)}draw(e){if(!this.active||this.instanceCount===0)return;let t=this.gl,n=this.settings,r=performance.now();this.lastTime>0&&(this.animTime+=(r-this.lastTime)*n.animSpeed),this.lastTime=r;let i=.5+.5*Math.sin(this.animTime);t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uMapSize,this.mapW,this.mapH),t.uniform1f(this.uBreathRadius,i),t.uniform1f(this.uHighlightRadiusSq,n.highlightRadius*n.highlightRadius),t.uniform1f(this.uHighlightAlpha,n.highlightAlpha),t.uniform4f(this.uSelfRadii,n.selfMinRad,n.selfMaxRad,0,0),t.uniform4f(this.uMateRadii,n.mateMinRad,n.mateMaxRad,0,0),t.uniform2f(this.uGradientStops,n.gradientInnerEdge,n.gradientSolidEnd),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tileTex),t.bindVertexArray(this.vao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.instanceCount),t.bindVertexArray(null)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao)}},$s=2*Math.PI,ec=4,tc=8,nc=2,rc=class{constructor(e){this.params=new Map,this.ribbonsById=new Map,this.ribbonList=[],this.mapW=e}setParams(e,t){this.params.set(e,{radius:t.radius,strands:Math.min(Math.max(Math.round(t.strands),1),8),rotationSpeed:t.rotationSpeed,colors:t.colors})}clearParams(e){this.params.delete(e)}getRibbons(){return this.ribbonList}reset(){this.ribbonsById.clear(),this.ribbonList.length=0}update(e,t){let n=!1;for(let t of this.ribbonsById.keys())e.has(t)||(this.ribbonsById.delete(t),n=!0);for(let r of t){let t=e.get(r);if(!t||!fr.has(t.unitType)||t.unitType===`MIRV Warhead`)continue;let i=this.ribbonsById.get(r);if(!i){let e=this.params.get(t.ownerID);if(!e)continue;i=this.newRibbon(r,e,t.lastPos),this.ribbonsById.set(r,i),n=!0}t.lastPos!==i.lastPos&&this.advance(i,t.lastPos)}if(n){this.ribbonList.length=0;for(let e of this.ribbonsById.values())this.ribbonList.push(e)}}newRibbon(e,t,n){let r=Math.max(t.radius*ec,tc);return{id:e,radius:t.radius,strands:t.strands,twist:$s/r,rotationSpeed:t.rotationSpeed,colors:t.colors,headDist:0,sampleCount:0,samples:new Float32Array(256*5),lastPos:n,dirX:0,dirY:0,hasDir:!1}}advance(e,t){let n=this.mapW,r=e.lastPos%n,i=(e.lastPos-r)/n,a=t%n,o=(t-a)/n;e.lastPos=t;let s=a-r,c=o-i,l=Math.hypot(s,c);if(l===0)return;let u=s/l,d=c/l,f=e.hasDir?e.dirX:u,p=e.hasDir?e.dirY:d,m=e=>{let t=f+(u-f)*e,n=p+(d-p)*e,r=Math.hypot(t,n);return r<1e-6?[u,d]:[t/r,n/r]};if(e.sampleCount===0){let[t,n]=m(0);this.pushSample(e,r,i,-n,t,0)}let h=Math.ceil(l*nc);for(let t=1;t<=h;t++){let n=t/h,[a,o]=m(n);this.pushSample(e,r+s*n,i+c*n,-o,a,e.headDist+l*n)}e.dirX=u,e.dirY=d,e.hasDir=!0,e.headDist+=l}pushSample(e,t,n,r,i,a){let o=e.sampleCount*5;if(o+5>e.samples.length){let t=new Float32Array(e.samples.length*2);t.set(e.samples),e.samples=t}e.samples[o]=t,e.samples[o+1]=n,e.samples[o+2]=r,e.samples[o+3]=i,e.samples[o+4]=a,e.sampleCount++}},ic=`#version 300 es
precision highp float;

// Composite the reduced-resolution spiral halo buffer over the scene. The
// buffer holds premultiplied color; the composite blends ADDITIVELY
// (ONE, ONE) so the halo reads as emitted light, and bilinear upsampling
// keeps it soft. The sharp core ribbons draw above this at full resolution.

uniform sampler2D uTex;

in vec2 vUV;
out vec4 fragColor;

void main() {
  fragColor = texture(uTex, vUV);
}
`,ac=`#version 300 es
precision highp float;

// Spiral ribbon shading — a 3D vortex projected onto the map. Spin the helix
// angle with time and derive color (position around the circumference →
// palette, cross-faded) plus a depth cue (cos: segments facing the viewer
// bright, receding ones dark).
//
// Drawn twice per strand (see SpiralRibbonPass) for a glow look — a sharp
// bright core over a soft halo:
//   uCorePass 1: the core ribbon, full resolution, straight alpha into the
//     scene; facing segments get a white-hot center (neon-tube look).
//   uCorePass 0: the halo only, into the reduced-resolution buffer
//     (premultiplied); it is bilinearly upsampled and composited
//     ADDITIVELY over the scene, so it reads as emitted light.

uniform float uTime;       // seconds
uniform float uRotSpeed;   // vortex spin, radians/sec
uniform float uTrailAlpha;
uniform int uColorCount;   // 1..MAX_TRAIL_COLORS colors
uniform vec3 uColors[8];   // palette, wrapped once around the circumference
uniform int uCorePass;     // 1 = full-res core, 0 = low-res glow halo

in float vTheta;
in float vLateral;
out vec4 fragColor;

const float TAU = 6.28318530718;

// Core ribbon profile: opaque within RIB_IN of the strand centerline,
// fading out by RIB_OUT (half-width in tiles). The smoothstep edge doubles
// as anti-aliasing at full resolution.
const float RIB_IN = 0.55;
const float RIB_OUT = 1.0;
// Halo: quadratic falloff to GLOW_OUT tiles with GLOW_STRENGTH peak alpha.
// Composited additively, so crossings and the vortex interior brighten.
const float GLOW_OUT = 3.0;
const float GLOW_STRENGTH = 0.4;
// Core brightness: alpha boost over the plain-trail alpha (a glow's core
// reads as a light source, not a translucent breadcrumb).
const float CORE_ALPHA_BOOST = 1.5;

void main() {
  float d = abs(vLateral);
  float theta = vTheta - uTime * uRotSpeed;
  float f = fract(theta / TAU) * float(uColorCount);
  int i = int(f) % uColorCount;
  int j = (i + 1) % uColorCount;
  float depth = 0.5 + 0.5 * cos(theta);
  vec3 base = mix(uColors[i], uColors[j], fract(f)) * mix(0.55, 1.1, depth);

  if (uCorePass == 1) {
    float core = 1.0 - smoothstep(RIB_IN, RIB_OUT, d);
    if (core <= 0.003) discard;
    // White-hot center, strongest on segments facing the viewer.
    float hot = (1.0 - smoothstep(0.0, RIB_IN, d)) * mix(0.15, 0.55, depth);
    vec3 color = mix(base, vec3(1.0), hot);
    float a = min(uTrailAlpha * CORE_ALPHA_BOOST, 1.0) * core;
    fragColor = vec4(color, a); // straight alpha — scene default blending
  } else {
    float glowFall = 1.0 - smoothstep(0.0, GLOW_OUT, d);
    float glow = GLOW_STRENGTH * glowFall * glowFall;
    if (glow <= 0.003) discard;
    float a = uTrailAlpha * glow;
    fragColor = vec4(base * a, a); // premultiplied — halo buffer
  }
}
`,oc=`#version 300 es
precision highp float;

// Spiral ribbon strip — one strand of a spiral nuke trail. Vertices are
// centerline samples expanded to a fixed-width strip (aSide = ±1); this
// shader swings each sample sideways along its perpendicular by the helix
// offset, so the strip follows the strand. Amplitude ramps 0 → uRadius over
// one pitch behind the head (the cone that converges into the missile) —
// evaluated here from uHeadDist so appended vertices never need rewriting.

layout(location = 0) in vec2 aCenter; // centerline sample (world tiles)
layout(location = 1) in vec2 aPerp;   // unit perpendicular of the path there
layout(location = 2) in float aDist;  // cumulative centerline distance
layout(location = 3) in float aSide;  // ±1 — which edge of the strip

uniform mat3 uCamera;
uniform float uHeadDist;  // cumulative distance at the nuke's head
uniform float uConeLen;   // cone length = one helix pitch, tiles
uniform float uRadius;    // helix amplitude, tiles
uniform float uTwist;     // helix phase advance, radians per tile
uniform float uPhase0;    // this strand's phase offset around the axis
uniform float uHalfWidth; // strip half-width, tiles (covers core + glow)

out float vTheta;   // helix angle at this point (un-spun)
out float vLateral; // signed distance from the strand centerline, tiles

const float HALF_PI = 1.57079632679;

void main() {
  float behind = clamp((uHeadDist - aDist) / uConeLen, 0.0, 1.0);
  float amp = uRadius * sin(HALF_PI * behind);
  float theta = aDist * uTwist + uPhase0;
  float off = amp * sin(theta);

  // Strand tangent = centerline direction + lateral swing rate, so the strip
  // stays perpendicular to the strand even on steep swings and in the cone.
  // d(amp)/d(dist) via behind' = -1/uConeLen inside the cone, 0 past it.
  float ampDeriv = behind < 1.0
      ? -uRadius * HALF_PI * cos(HALF_PI * behind) / uConeLen
      : 0.0;
  float offDeriv = ampDeriv * sin(theta) + amp * uTwist * cos(theta);
  // aPerp = (-dirY, dirX), so the centerline direction is (aPerp.y, -aPerp.x).
  vec2 dir = vec2(aPerp.y, -aPerp.x);
  vec2 tangent = dir + aPerp * offDeriv; // never zero: |dir|=1, aPerp ⊥ dir
  vec2 n = normalize(vec2(-tangent.y, tangent.x));

  vec2 world = aCenter + aPerp * off + n * (aSide * uHalfWidth);
  vec3 clip = uCamera * vec3(world, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
  vTheta = theta;
  vLateral = aSide * uHalfWidth;
}
`,sc=6,cc=1.2,lc=3.2,uc=2*Math.PI,dc=class{constructor(e,t){this.fbo=null,this.fboTex=null,this.fboW=0,this.fboH=0,this.ribbons=[],this.buffers=new Map,this.vertScratch=new Float32Array(512*2*sc),this.colorScratch=new Float32Array(24),this.startTime=performance.now(),this.gl=e,this.settings=t,this.program=H(e,oc,ac,`SpiralRibbonPass.program`);let n=t=>e.getUniformLocation(this.program,t);this.uCamera=n(`uCamera`),this.uHeadDist=n(`uHeadDist`),this.uConeLen=n(`uConeLen`),this.uRadius=n(`uRadius`),this.uTwist=n(`uTwist`),this.uPhase0=n(`uPhase0`),this.uHalfWidth=n(`uHalfWidth`),this.uTime=n(`uTime`),this.uRotSpeed=n(`uRotSpeed`),this.uTrailAlpha=n(`uTrailAlpha`),this.uColorCount=n(`uColorCount`),this.uColors=n(`uColors`),this.uCorePass=n(`uCorePass`),this.compositeProgram=H(e,Yi,ic,`SpiralRibbonPass.compositeProgram`),e.useProgram(this.compositeProgram),e.uniform1i(e.getUniformLocation(this.compositeProgram,`uTex`),0),this.fsQuadVao=e.createVertexArray(),e.bindVertexArray(this.fsQuadVao);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}updateRibbons(e){this.ribbons=e;let t=new Set;for(let n of e)t.add(n.id),this.uploadRibbon(n);for(let[e,n]of this.buffers)t.has(e)||(this.gl.deleteVertexArray(n.vao),this.gl.deleteBuffer(n.vbo),this.buffers.delete(e))}uploadRibbon(e){let t=this.gl,n=this.buffers.get(e.id);if(!n){let r=t.createBuffer(),i=t.createVertexArray();t.bindVertexArray(i),t.bindBuffer(t.ARRAY_BUFFER,r);let a=sc*4;t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,a,0),t.enableVertexAttribArray(1),t.vertexAttribPointer(1,2,t.FLOAT,!1,a,8),t.enableVertexAttribArray(2),t.vertexAttribPointer(2,1,t.FLOAT,!1,a,16),t.enableVertexAttribArray(3),t.vertexAttribPointer(3,1,t.FLOAT,!1,a,20),t.bindVertexArray(null),n={vao:i,vbo:r,capacityVerts:0,uploadedSamples:0},this.buffers.set(e.id,n)}if(e.sampleCount<=n.uploadedSamples)return;let r=e.sampleCount*2;if(t.bindBuffer(t.ARRAY_BUFFER,n.vbo),r>n.capacityVerts){let e=Math.max(n.capacityVerts,512);for(;e<r;)e*=2;t.bufferData(t.ARRAY_BUFFER,e*sc*4,t.DYNAMIC_DRAW),n.capacityVerts=e,n.uploadedSamples=0}let i=n.uploadedSamples,a=e.sampleCount-i,o=this.expandSamples(e.samples,i,a);t.bufferSubData(t.ARRAY_BUFFER,i*2*sc*4,o),n.uploadedSamples=e.sampleCount}expandSamples(e,t,n){let r=n*2*sc;if(this.vertScratch.length<r){let e=this.vertScratch.length;for(;e<r;)e*=2;this.vertScratch=new Float32Array(e)}let i=this.vertScratch,a=0;for(let r=0;r<n;r++){let n=(t+r)*5;for(let t=-1;t<=1;t+=2)i[a++]=e[n],i[a++]=e[n+1],i[a++]=e[n+2],i[a++]=e[n+3],i[a++]=e[n+4],i[a++]=t}return i.subarray(0,r)}draw(e){let t=!1;for(let e of this.ribbons)if(e.sampleCount>=2){t=!0;break}t&&(this.renderBuffer(e),this.composite(),this.drawCores(e))}ensureTarget(e,t){if(this.fbo!==null&&e===this.fboW&&t===this.fboH)return;let n=this.gl;this.fboTex===null&&(this.fboTex=n.createTexture(),this.fbo=n.createFramebuffer()),n.bindTexture(n.TEXTURE_2D,this.fboTex),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindFramebuffer(n.FRAMEBUFFER,this.fbo),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,this.fboTex,0),n.bindFramebuffer(n.FRAMEBUFFER,null),this.fboW=e,this.fboH=t}renderBuffer(e){let t=this.gl,n=this.settings.mapOverlay.spiralResolutionScale,r=Math.max(1,Math.round(t.drawingBufferWidth*n)),i=Math.max(1,Math.round(t.drawingBufferHeight*n));this.ensureTarget(r,i);let a=t.getParameter(t.FRAMEBUFFER_BINDING),o=t.getParameter(t.VIEWPORT);t.bindFramebuffer(t.FRAMEBUFFER,this.fbo),t.viewport(0,0,r,i),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),this.drawStrips(e,0,lc),t.bindFramebuffer(t.FRAMEBUFFER,a),t.viewport(o[0],o[1],o[2],o[3]),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA)}drawStrips(e,t,n){let r=this.gl;r.useProgram(this.program),r.uniformMatrix3fv(this.uCamera,!1,e),r.uniform1i(this.uCorePass,t),r.uniform1f(this.uHalfWidth,n),r.uniform1f(this.uTime,(performance.now()-this.startTime)/1e3),r.uniform1f(this.uTrailAlpha,this.settings.mapOverlay.trailAlpha);for(let e of this.ribbons){if(e.sampleCount<2)continue;let t=this.buffers.get(e.id);if(!t)continue;r.uniform1f(this.uHeadDist,e.headDist),r.uniform1f(this.uConeLen,uc/e.twist),r.uniform1f(this.uRadius,e.radius),r.uniform1f(this.uTwist,e.twist),r.uniform1f(this.uRotSpeed,e.rotationSpeed);let n=Math.min(e.colors.length,8);for(let t=0;t<n;t++)this.colorScratch[t*3]=e.colors[t][0],this.colorScratch[t*3+1]=e.colors[t][1],this.colorScratch[t*3+2]=e.colors[t][2];r.uniform1i(this.uColorCount,n),r.uniform3fv(this.uColors,this.colorScratch),r.bindVertexArray(t.vao);let i=Math.min(e.sampleCount,t.uploadedSamples)*2;for(let t=0;t<e.strands;t++)r.uniform1f(this.uPhase0,t*uc/e.strands),r.drawArrays(r.TRIANGLE_STRIP,0,i)}}composite(){let e=this.gl;e.useProgram(this.compositeProgram),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.fboTex),e.blendFunc(e.ONE,e.ONE),e.bindVertexArray(this.fsQuadVao),e.drawArrays(e.TRIANGLES,0,6),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA)}drawCores(e){this.drawStrips(e,1,cc)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteProgram(this.compositeProgram),e.deleteVertexArray(this.fsQuadVao);for(let t of this.buffers.values())e.deleteVertexArray(t.vao),e.deleteBuffer(t.vbo);this.buffers.clear(),this.fbo&&e.deleteFramebuffer(this.fbo),this.fboTex&&e.deleteTexture(this.fboTex)}},fc=`#version 300 es
precision highp float;

uniform sampler2D uAtlas;
uniform float uDistRange;
uniform float uOutlineWidth;
uniform int   uHighlightMask;
uniform float uHighlightDimAlpha;
uniform int   uClassic; // 1 = round_6x6 bitmap font, 0 = overpass MSDF

in vec2 vUV;
flat in float vAlive;
flat in float vAtlasIdx;
out vec4 fragColor;

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  if (vAlive <= 0.0) discard;

  vec3 color;
  float alpha;

  if (uClassic == 1) {
    // round_6x6_modified bitmap: white digits with a baked-in dark outline
    // on a transparent background (non-premultiplied RGBA).
    vec4 texel = texture(uAtlas, vUV);
    if (texel.a <= 0.0) discard;
    color = texel.rgb;
    alpha = texel.a;
  } else {
    // overpass-bold MSDF: white fill with a synthesized dark outline.
    vec3 msd = texture(uAtlas, vUV).rgb;
    float sd = median(msd.r, msd.g, msd.b);

    vec2 unitRange = uDistRange / vec2(textureSize(uAtlas, 0));
    vec2 screenTexSize = 1.0 / fwidth(vUV);
    float screenPxRange = max(0.5 * dot(unitRange, screenTexSize), 1.0);

    float screenPxDist = screenPxRange * (sd - 0.5);
    float fillAlpha = clamp(screenPxDist + 0.5, 0.0, 1.0);

    float maxOutline = max(screenPxRange * 0.5 - 1.0, 0.0);
    float effectiveOutline = min(uOutlineWidth, maxOutline);
    float outlineAlpha = clamp(screenPxDist + effectiveOutline + 0.5, 0.0, 1.0);

    color = mix(vec3(0.0), vec3(1.0), fillAlpha);
    alpha = outlineAlpha;
  }

  // Dim level text for non-highlighted structure types
  if (uHighlightMask != 0) {
    int bit = 1 << int(vAtlasIdx + 0.5);
    if ((uHighlightMask & bit) == 0) {
      alpha *= uHighlightDimAlpha;
    }
  }

  fragColor = vec4(color, alpha);
}
`,pc=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

// Per-instance: worldX, worldY, cursorX, charCode
layout(location = 1) in vec4 aInst;
layout(location = 2) in float aAtlasIdx;

uniform sampler2D uGlyphMetrics;  // CHAR_RANGE x 2, RGBA32F

uniform mat3  uCamera;
uniform float uZoom;

// Structure icon sizing (mirrors structure.vert.glsl)
uniform float uIconSize;
uniform float uDotsThreshold;
uniform float uScaleFactor;
uniform float uIconGrowZoom;

// Text sizing
uniform float uFontSize;
uniform float uAtlasScaleH;
uniform float uBase;
uniform float uLevelScale;
uniform float uLevelOffsetY;  // extra height above icon, in halfIconSize units

out vec2 vUV;
flat out float vAlive;
flat out float vAtlasIdx;

void main() {
  float worldX  = aInst.x;
  float worldY  = aInst.y;
  float cursorX = aInst.z;
  int charCode  = int(aInst.w);

  // Same icon scale logic as structure.vert.glsl
  float iconScale;
  if (uZoom <= uDotsThreshold) {
    iconScale = 0.0;  // hidden in dots mode
  } else if (uZoom >= uIconGrowZoom) {
    // World-anchored: grow with the map past this zoom, matching the icons.
    iconScale = uZoom / uIconGrowZoom;
  } else {
    iconScale = min(1.0, uZoom / uScaleFactor);
  }

  // Cull when invisible
  if (iconScale <= 0.0 || charCode == 0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlive = 0.0;
    return;
  }
  vAlive = 1.0;
  vAtlasIdx = aAtlasIdx;

  float halfIconSize = uIconSize * iconScale * 0.5 / uZoom;

  // Level text scale: proportional to icon size
  float levelScale = halfIconSize * uLevelScale / uFontSize;

  // Glyph metrics from data texture
  vec4 m0 = texelFetch(uGlyphMetrics, ivec2(charCode, 0), 0); // xadvance, xoffset, yoffset, width
  vec4 m1 = texelFetch(uGlyphMetrics, ivec2(charCode, 1), 0); // height, u0, v0, u1

  float glyphW = m0.w;
  float glyphH = m1.x;
  float u0 = m1.y;
  float v0 = m1.z;
  float u1 = m1.w;
  float v1 = v0 + glyphH / uAtlasScaleH;

  // Skip degenerate glyphs
  if (glyphW <= 0.0 || glyphH <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlive = 0.0;
    return;
  }

  // Position above icon center
  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  float baselineY = -uBase * 0.5;
  // above icon top edge; uLevelOffsetY raises (or lowers) it proportionally
  float yOff =
    -halfIconSize * (1.0 + uLevelOffsetY) - levelScale * uBase * 0.6;

  vec2 glyphOrigin = vec2(
    cursorX + m0.y,  // + xoffset
    baselineY + m0.z // + yoffset
  ) * levelScale;

  vec2 glyphSize = vec2(glyphW, glyphH) * levelScale;

  vec2 worldPos = center + vec2(0.0, yOff) + glyphOrigin + aPos * glyphSize;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
}
`,mc=N(`fonts/round_6x6_modified.png`),hc=N(`atlases/msdf-atlas.png`),gc=[ir,ar,or,sr,cr,lr],_c=4,vc=5,yc=vc*4,bc=16,xc=16,Sc=208,Cc=114;function wc(){let e=[];for(let t=0;t<=9;t++)e.push({id:48+t,char:String(t),width:16,height:16,xoffset:0,yoffset:0,xadvance:14,x:t*16,y:64,page:0});return e}var Tc=class{constructor(e,t,n){this.instanceCount=0,this.charCodes=new Uint8Array(32),this.cursors=new Float32Array(32),this.typeToAtlasCol=new Map,this.highlightMask=0,this.lastUnits=null,this.layoutClassic=null,this.gl=e,this.settings=n,this.mapW=t.mapWidth;for(let e=0;e<t.unitTypes.length;e++){let n=gc.indexOf(t.unitTypes[e]);n>=0&&this.typeToAtlasCol.set(t.unitTypes[e],n)}this.kernTable=new Int8Array(384*384);let r=wc(),i={fontSize:bc,base:xc,scaleW:Sc,scaleH:Cc,distanceRange:0,chars:r,kernings:[]};this.classic={glyph:Ha(r),metricsTex:Ga(e,i),fontSize:i.fontSize,base:i.base,atlasScaleH:i.scaleH,distanceRange:i.distanceRange,atlasTex:null,atlasReady:!1};let a=Va();this.msdf={glyph:Ha(a.chars),metricsTex:Ga(e,a),fontSize:a.fontSize,base:a.base,atlasScaleH:a.scaleH,distanceRange:a.distanceRange,atlasTex:null,atlasReady:!1},this.program=H(e,pc,fc,`StructureLevelPass`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),0),e.uniform1i(e.getUniformLocation(this.program,`uGlyphMetrics`),1),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uIconSize=e.getUniformLocation(this.program,`uIconSize`),this.uDotsThreshold=e.getUniformLocation(this.program,`uDotsThreshold`),this.uScaleFactor=e.getUniformLocation(this.program,`uScaleFactor`),this.uIconGrowZoom=e.getUniformLocation(this.program,`uIconGrowZoom`),this.uFontSize=e.getUniformLocation(this.program,`uFontSize`),this.uAtlasScaleH=e.getUniformLocation(this.program,`uAtlasScaleH`),this.uBase=e.getUniformLocation(this.program,`uBase`),this.uDistRange=e.getUniformLocation(this.program,`uDistRange`),this.uOutlineWidth=e.getUniformLocation(this.program,`uOutlineWidth`),this.uLevelScale=e.getUniformLocation(this.program,`uLevelScale`),this.uLevelOffsetY=e.getUniformLocation(this.program,`uLevelOffsetY`),this.uHighlightMask=e.getUniformLocation(this.program,`uHighlightMask`),this.uHighlightDimAlpha=e.getUniformLocation(this.program,`uHighlightDimAlpha`),this.uClassic=e.getUniformLocation(this.program,`uClassic`),this.loadAtlas(mc,this.classic),this.loadAtlas(hc,this.msdf);let o=e.createBuffer();this.instanceBuf=new Bi(e,o,4096,vc),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,o),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,yc,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,1,e.FLOAT,!1,yc,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}loadAtlas(e,t){let n=new Image;n.crossOrigin=`anonymous`,n.onload=()=>{let e=this.gl,r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),t.atlasTex=r,t.atlasReady=!0},n.src=e}updateStructures(e){this.lastUnits=e;let t=this.settings.structureLevel.classicFont;this.layoutClassic=t;let n=t?this.classic.glyph:this.msdf.glyph,r=0;for(let t of e.values()){if(!t.isActive||!ur.has(t.unitType)||t.level<=1)continue;let e=t.level.toString();mo(e,n,this.kernTable,this.charCodes,this.cursors);let i=t.pos%this.mapW,a=(t.pos-i)/this.mapW,o=Math.min(e.length,_c),s=this.typeToAtlasCol.get(t.unitType)??0;for(let e=0;e<o;e++){this.instanceBuf.ensureCapacity(r+1);let t=r*vc,n=this.instanceBuf.float32;n[t+0]=i,n[t+1]=a,n[t+2]=this.cursors[e],n[t+3]=this.charCodes[e],n[t+4]=s,r++}}if(this.instanceCount=r,r>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceBuf.float32,0,r*vc)}}draw(e,t){let n=this.settings.structureLevel.classicFont;this.lastUnits!==null&&this.layoutClassic!==n&&this.updateStructures(this.lastUnits);let r=n?this.classic:this.msdf;if(!r.atlasReady||this.instanceCount===0)return;let i=this.gl,a=this.settings.structure,o=this.settings.structureLevel;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform1f(this.uZoom,t),i.uniform1f(this.uIconSize,a.iconSize),i.uniform1f(this.uDotsThreshold,a.dotsZoomThreshold),i.uniform1f(this.uScaleFactor,a.iconScaleFactorZoomedOut),i.uniform1f(this.uIconGrowZoom,a.iconGrowZoom),i.uniform1f(this.uFontSize,r.fontSize),i.uniform1f(this.uAtlasScaleH,r.atlasScaleH),i.uniform1f(this.uBase,r.base),i.uniform1f(this.uDistRange,r.distanceRange),i.uniform1f(this.uOutlineWidth,o.outlineWidth),i.uniform1f(this.uLevelScale,o.scale),i.uniform1f(this.uLevelOffsetY,o.offsetY),i.uniform1i(this.uHighlightMask,this.highlightMask),i.uniform1f(this.uHighlightDimAlpha,a.highlightDimAlpha),i.uniform1i(this.uClassic,+!!n),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,r.atlasTex),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,r.metricsTex),i.bindVertexArray(this.vao),i.drawArraysInstanced(i.TRIANGLES,0,6,this.instanceCount)}setHighlightTypes(e){let t=0;if(e)for(let n of e){let e=this.typeToAtlasCol.get(n);e!==void 0&&(t|=1<<e)}this.highlightMask=t}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao),e.deleteTexture(this.classic.metricsTex),e.deleteTexture(this.msdf.metricsTex),this.classic.atlasTex&&e.deleteTexture(this.classic.atlasTex),this.msdf.atlasTex&&e.deleteTexture(this.msdf.atlasTex)}},Ec=`#version 300 es
precision highp float;

uniform sampler2D uPalette;
uniform sampler2D uAtlas;
uniform sampler2D uAffiliation;   // 256×2 RGBA8 — row 1 = unit affiliation
uniform sampler2D uEffect;        // RGBA32F — shared effect palette, keyed by
                                  //   ownerID. The structures block starts at row
                                  //   STRUCT_EFFECT_ROW_BASE; same layout as
                                  //   trail.frag.glsl (row r = color r's rgb;
                                  //   row 0.a = count, 1.a = styleId,
                                  //   2.a = scalar0, 3.a = scalar1)
uniform float uTime;              // seconds, for animated effect styles
uniform float uHoverOwner;        // smallID of the hovered territory's owner
                                  //   (0 = none) — gates the structures effect
uniform float uDotsThreshold;
uniform float uGhostAlpha;       // 1.0 = normal, <1.0 = ghost transparency
uniform vec3  uOutlineColor;     // ghost outline color (vec3(0) = no outline)
uniform int   uAltView;
uniform int   uHighlightMask;   // bitmask of atlas columns to highlight (0 = off)
uniform float uHighlightOutlineW; // outline width for highlighted structures
uniform float uHighlightDimAlpha; // alpha multiplier for non-highlighted structures
uniform float uFillDarken;      // HSV value multiplier on icon fill
uniform float uBorderDarken;    // HSV value multiplier on icon border
uniform float uIconAlpha;       // global multiplier on final icon alpha
uniform vec3  uIconColor;       // color of the inner icon glyph (was white)
uniform float uIconDarken;      // >0: glyph = darkened player color instead of uIconColor
uniform float uLocalPlayerID;

in vec2  vLocalPos;
in vec2  vAtlasUV;
flat in float vOwnerID;
flat in float vUnderConstruction;
flat in float vMarkedForDeletion;
flat in float vZoom;
flat in float vAtlasIdx;
flat in float vShapeScale;

out vec4 fragColor;

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0/3.0, 1.0/3.0)) * 6.0 - 3.0);
  return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
}

vec3 darken(vec3 rgb, float vScale) {
  vec3 hsv = rgb2hsv(rgb);
  hsv.z *= vScale;
  return hsv2rgb(hsv);
}

// The owner's structures cosmetic color, if equipped. Reads the structures
// block of the shared effect palette; the gradient/transition math mirrors
// trail.frag.glsl so the same catalog attributes look identical on both.
// Returns false when the owner has no structures effect (count 0).
bool structuresEffectColor(int owner, out vec3 color) {
  const int rowBase = STRUCT_EFFECT_ROW_BASE;
  int count = int(texelFetch(uEffect, ivec2(owner, rowBase), 0).a + 0.5);
  if (count <= 0) return false;
  if (count == 1) {
    // Single color — flat recolor.
    color = texelFetch(uEffect, ivec2(owner, rowBase), 0).rgb;
  } else if (int(texelFetch(uEffect, ivec2(owner, rowBase + 1), 0).a + 0.5) == 1) {
    // transition — one color at a time, cross-fading through the list.
    // frequency = color changes per second.
    float frequency = texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a;
    float t = uTime * frequency;
    int i = int(t) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(t));
  } else {
    // gradient — the palette spans the icon's diagonal once, so the whole
    // gradient is visible across the shape (world-space banding like the
    // trail's would put the entire icon inside one band and read as a flat
    // color). It scrolls along the diagonal at the trail-equivalent pace:
    // one full slide every colorSize · count / movementSpeed seconds,
    // so both knobs keep their trail timing semantics.
    float colorSize = max(texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a, 0.001);
    float movementSpeed = texelFetch(uEffect, ivec2(owner, rowBase + 3), 0).a;
    float dn = (vLocalPos.x + vLocalPos.y) * 0.5; // icon diagonal, -0.5..0.5
    float phase =
      fract(dn - uTime * movementSpeed / (colorSize * float(count)));
    float f = phase * float(count);
    int i = int(f) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(f));
  }
  return true;
}

#define PI 3.14159265

// Signed distance to regular polygon edge.
// R = circumradius (center-to-vertex), n = sides, rot = rotation in radians.
// Returns negative inside, positive outside.
float sdPolygon(vec2 p, float R, float n, float rot) {
  float an = PI / n;
  float a = atan(p.y, p.x) - rot;
  a = mod(a + an, 2.0 * an) - an;
  return length(p) * cos(a) - R * cos(an);
}

// Per-structure-type shape SDF.
// Atlas indices: 0=City, 1=Port, 2=Factory, 3=DefensePost, 4=SAM, 5=Silo
float shapeSDF(vec2 p, float R) {
  if (vAtlasIdx < 0.5)
    return length(p) - R;                     // City → circle
  if (vAtlasIdx < 1.5)
    return sdPolygon(p, R, 5.0, PI * 0.5);    // Port → pentagon (vertex up)
  if (vAtlasIdx < 2.5)
    return sdPolygon(p, R, 6.0, PI / 6.0);    // Factory → hexagon (flat top)
  if (vAtlasIdx < 3.5)
    return sdPolygon(p, R, 8.0, 0.0);         // Defense Post → octagon (flat top)
  if (vAtlasIdx < 4.5)
    return sdPolygon(p, R, 4.0, 0.0);         // SAM Launcher → square (flat sides)
  return sdPolygon(p, R, 3.0, PI * 0.5);      // Missile Silo → triangle (vertex up)
}

void main() {
  float dist = length(vLocalPos);
  float radius = 0.45;
  float borderWidth = 0.06 / vShapeScale;

  float sdf = shapeSDF(vLocalPos, radius);
  float fw = fwidth(dist);

  // When highlight is active, expand the region to include the outer outline band.
  float highlightOutlineW = uHighlightMask != 0 ? uHighlightOutlineW / vShapeScale : 0.0;
  float outerAlpha = 1.0 - smoothstep(-fw, fw, sdf - highlightOutlineW);

  if (outerAlpha <= 0.0) discard;

  float borderMask = 1.0 - smoothstep(-fw, fw, sdf + borderWidth);

  // Player color
  vec4 fillColor;
  vec4 borderColor;

  if (uAltView != 0 && vUnderConstruction < 0.5) {
    vec3 ac = texelFetch(uAffiliation, ivec2(int(vOwnerID), 1), 0).rgb;
    fillColor = vec4(darken(ac, uFillDarken), 1.0);
    borderColor = vec4(darken(ac, uBorderDarken), 1.0);
  } else if (vUnderConstruction > 0.5) {
    fillColor = vec4(198.0/255.0, 198.0/255.0, 198.0/255.0, 1.0);
    borderColor = vec4(127.0/255.0, 127.0/255.0, 127.0/255.0, 1.0);
  } else {
    int owner = int(vOwnerID + 0.5);
    int local = int(uLocalPlayerID);
    float u = (vOwnerID + 0.5) / float(PALETTE_SIZE);
    fillColor = texture(uPalette, vec2(u, 0.25));
    // if local player, use territory color because the border color is grey
    borderColor = texture(uPalette, vec2(u, owner == local ? 0.25 : 0.75));
    // Darken via HSV value so hue/saturation stay intact
    // vScale < 1.0 = darker, > 1.0 = brighter
    fillColor.rgb = darken(fillColor.rgb, uFillDarken);
    borderColor.rgb = darken(borderColor.rgb, uBorderDarken);
    fillColor.a = 1.0;
    borderColor.a = 1.0;
  }

  // structures cosmetic: recolor the fill with the owner's effect (raw catalog
  // colors, like trails — no darken) while their territory is hovered. The
  // local player's own effect always shows — touch devices never hover, and
  // buyers should see what they paid for. The border keeps the player color
  // so ownership stays readable. Skipped for alt view and construction gray.
  bool effectActive = false;
  if (uAltView == 0 && vUnderConstruction < 0.5) {
    int effOwner = int(vOwnerID + 0.5);
    if ((effOwner == int(uHoverOwner + 0.5) ||
         effOwner == int(uLocalPlayerID)) && effOwner > 0) {
      vec3 effectRGB;
      if (structuresEffectColor(effOwner, effectRGB)) {
        fillColor.rgb = effectRGB;
        effectActive = true;
      }
    }
  }

  vec4 bgColor = mix(borderColor, fillColor, borderMask);

  // Sample icon from atlas (white on transparent)
  // Only show icon detail when zoomed in enough
  float iconAlpha = 0.0;
  if (vZoom > uDotsThreshold) {
    // Clamp UV to this atlas column to prevent bleeding into neighbours
    // when uIconFill shrinks the icon (expanding UV range beyond column).
    float colStart = vAtlasIdx / float(ATLAS_COLS);
    float colEnd = (vAtlasIdx + 1.0) / float(ATLAS_COLS);
    vec2 safeUV = vec2(clamp(vAtlasUV.x, colStart, colEnd), clamp(vAtlasUV.y, 0.0, 1.0));
    vec4 iconSample = texture(uAtlas, safeUV);
    // Zero out icon outside the valid UV region (clamped pixels would repeat the edge)
    float inBounds = step(colStart, vAtlasUV.x) * step(vAtlasUV.x, colEnd)
                   * step(0.0, vAtlasUV.y) * step(vAtlasUV.y, 1.0);
    // Clip to fill area so icon doesn't bleed into the border ring.
    iconAlpha = iconSample.a * borderMask * inBounds;
  }

  // Composite: tinted icon over player-colored shape.
  // Classic icons (uIconDarken > 0) tint the glyph with a darkened player
  // color. When the shape itself is already dark, that darkened glyph blends
  // into the shape (and the dark territory behind it) and becomes unreadable —
  // so flip the glyph to the light icon color when the fill is too dark.
  // While the structures effect is animating the fill, the flip becomes a
  // smooth luminance fade so the glyph cross-fades instead of snapping;
  // without the effect this is the classic hard threshold, pixel-identical
  // to having no cosmetic equipped.
  vec3 glyphColor = uIconColor;
  if (uIconDarken > 0.0) {
    float fillLum = dot(fillColor.rgb, vec3(0.299, 0.587, 0.114));
    if (effectActive) {
      float t = smoothstep(0.25, 0.45, fillLum); // 0 = dark fill → light glyph
      glyphColor = mix(uIconColor, darken(fillColor.rgb, uIconDarken), t);
    } else {
      glyphColor =
        fillLum < 0.25 ? uIconColor : darken(fillColor.rgb, uIconDarken);
    }
  }
  vec3 finalRGB = mix(bgColor.rgb, glyphColor, iconAlpha);

  // Red X overlay for units marked for deletion
  if (vMarkedForDeletion > 0.5) {
    float lineW = max(0.025, fw * 1.5);
    float d1 = abs(vLocalPos.x - vLocalPos.y) * 0.7071; // dist to y=x diagonal
    float d2 = abs(vLocalPos.x + vLocalPos.y) * 0.7071; // dist to y=-x diagonal
    float dMin = min(d1, d2);
    // Extend arms close to the circle edge
    float maskR = max(radius * 1.55, fw * 6.0);
    float mask = 1.0 - smoothstep(maskR - fw, maskR, dist);
    float xLine = (1.0 - smoothstep(lineW - fw, lineW + fw, dMin)) * mask;
    finalRGB = mix(finalRGB, vec3(1.0, 0.25, 0.25), xLine * 0.95);
  }

  // Ghost tint — blend entire surface toward uOutlineColor when non-zero
  float tintActive = step(0.01, dot(uOutlineColor, uOutlineColor));
  finalRGB = mix(finalRGB, uOutlineColor, tintActive * 0.5);

  float finalAlpha = bgColor.a * outerAlpha * uGhostAlpha * uIconAlpha;

  // Build-button hover highlight: white outline on matching types, dim the rest
  if (uHighlightMask != 0) {
    int bit = 1 << int(vAtlasIdx + 0.5);
    if ((uHighlightMask & bit) != 0) {
      // White outline band outside the shape edge (matches game's OutlineFilter)
      float shapeEdge = 1.0 - smoothstep(-fw, fw, sdf);           // 1 inside shape, 0 outside
      float expandedEdge = 1.0 - smoothstep(-fw, fw, sdf - highlightOutlineW); // includes outline band
      float outlineBand = expandedEdge - shapeEdge;                // 1 in outline region only
      finalRGB = mix(finalRGB, vec3(1.0), outlineBand);
      finalAlpha = max(finalAlpha, outlineBand);
    } else {
      finalAlpha *= uHighlightDimAlpha;
    }
  }

  fragColor = vec4(finalRGB, finalAlpha);
}
`,Dc=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

// Per-instance: x, y, ownerID, underConstruction, atlasIdx, markedForDeletion
layout(location = 1) in vec4 aInst0; // x, y, ownerID, underConstruction
layout(location = 2) in vec2 aInst1; // atlasIdx, markedForDeletion

uniform mat3  uCamera;
uniform float uZoom;

uniform float uIconSize;
uniform float uDotsThreshold;
uniform float uDotScale;
uniform float uScaleFactor;
uniform float uIconGrowZoom;
uniform float uShapeScales[ATLAS_COLS];
uniform float uIconFills[ATLAS_COLS];

out vec2  vLocalPos;
out vec2  vAtlasUV;
flat out float vOwnerID;
flat out float vUnderConstruction;
flat out float vMarkedForDeletion;
flat out float vZoom;
flat out float vAtlasIdx;
flat out float vShapeScale;

void main() {
  float worldX = aInst0.x;
  float worldY = aInst0.y;
  vOwnerID = aInst0.z;
  vUnderConstruction = aInst0.w;
  vMarkedForDeletion = aInst1.y;
  vZoom = uZoom;
  vAtlasIdx = aInst1.x;

  float iconScale;
  if (uZoom <= uDotsThreshold) {
    iconScale = uDotScale;
  } else if (uZoom >= uIconGrowZoom) {
    // World-anchored: grow proportionally to zoom so the structure covers a
    // fixed area of the map. Past this zoom, structures should feel like
    // they're "on" the canvas rather than overlaid at constant pixel size.
    iconScale = uZoom / uIconGrowZoom;
  } else {
    iconScale = min(1.0, uZoom / uScaleFactor);
  }

  int shapeIdx = int(aInst1.x);
  float shapeScale = uShapeScales[shapeIdx];
  vShapeScale = shapeScale;

  float halfSize = uIconSize * iconScale * 0.5 / uZoom * shapeScale;

  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  vec2 worldPos = center + (aPos - 0.5) * halfSize * 2.0;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vLocalPos = aPos - 0.5;

  // Atlas UV: icons stay the same world size regardless of shape scaling,
  // and are further shrunk by per-shape iconFill (0-1) to add padding inside the frame.
  float uvExpand = shapeScale / uIconFills[shapeIdx];
  float scaledX = 0.5 + (aPos.x - 0.5) * uvExpand;
  float scaledY = 0.5 + (aPos.y - 0.5) * uvExpand;
  float colU = (aInst1.x + scaledX) / float(ATLAS_COLS);
  vAtlasUV = vec2(colU, scaledY);
}
`,Oc=N(`atlases/icon-atlas.png`),kc=[ir,ar,or,sr,cr,lr],Ac=kc.length,jc=6,Mc=jc*4,Nc=class{constructor(e,t,n,r,i){this.localPlayerID=0,this.startTime=performance.now(),this.hoverOwner=0,this.affiliationTex=null,this.altView=!1,this.instanceCount=0,this.typeToAtlasCol=new Map,this.highlightMask=0,this.ghost=null,this.ghostBuf=new Float32Array(jc),this.gl=e,this.settings=i,this.mapW=t.mapWidth,this.paletteTex=n,this.effectTex=r;for(let e=0;e<t.unitTypes.length;e++){let n=kc.indexOf(t.unitTypes[e]);n>=0&&this.typeToAtlasCol.set(t.unitTypes[e],n)}this.program=H(e,W(Dc,{ATLAS_COLS:Ac}),W(Ec,{PALETTE_SIZE:B(),ATLAS_COLS:Ac,STRUCT_EFFECT_ROW_BASE:16}),`StructurePass`),this.uLocalPlayerID=e.getUniformLocation(this.program,`uLocalPlayerID`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uIconSize=e.getUniformLocation(this.program,`uIconSize`),this.uDotScale=e.getUniformLocation(this.program,`uDotScale`),this.uDotsThreshold=e.getUniformLocation(this.program,`uDotsThreshold`),this.uScaleFactor=e.getUniformLocation(this.program,`uScaleFactor`),this.uIconGrowZoom=e.getUniformLocation(this.program,`uIconGrowZoom`),this.uShapeScales=e.getUniformLocation(this.program,`uShapeScales`),this.uIconFills=e.getUniformLocation(this.program,`uIconFills`),this.uGhostAlpha=e.getUniformLocation(this.program,`uGhostAlpha`),this.uOutlineColor=e.getUniformLocation(this.program,`uOutlineColor`),this.uAltView=e.getUniformLocation(this.program,`uAltView`),this.uHighlightMask=e.getUniformLocation(this.program,`uHighlightMask`),this.uHighlightOutlineW=e.getUniformLocation(this.program,`uHighlightOutlineW`),this.uHighlightDimAlpha=e.getUniformLocation(this.program,`uHighlightDimAlpha`),this.uFillDarken=e.getUniformLocation(this.program,`uFillDarken`),this.uBorderDarken=e.getUniformLocation(this.program,`uBorderDarken`),this.uIconAlpha=e.getUniformLocation(this.program,`uIconAlpha`),this.uIconColor=e.getUniformLocation(this.program,`uIconColor`),this.uIconDarken=e.getUniformLocation(this.program,`uIconDarken`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uHoverOwner=e.getUniformLocation(this.program,`uHoverOwner`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),0),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),1),e.uniform1i(e.getUniformLocation(this.program,`uAffiliation`),2),e.uniform1i(e.getUniformLocation(this.program,`uEffect`),3),e.uniform1f(this.uGhostAlpha,1),e.uniform3f(this.uOutlineColor,0,0,0),e.uniform1i(this.uHighlightMask,0),this.atlasTex=e.createTexture(),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.atlasTex),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,255,255,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.loadAtlas();let a=e.createBuffer();this.instanceBuf=new Bi(e,a,2048,jc),this.ghostInstanceBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.ghostInstanceBuf),e.bufferData(e.ARRAY_BUFFER,Mc,e.DYNAMIC_DRAW),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,Mc,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,Mc,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}async loadAtlas(){let e=new Image;e.crossOrigin=`anonymous`,e.src=Oc,await e.decode();let t=this.gl;t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.atlasTex),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR)}setLocalPlayer(e){this.localPlayerID=e}setHighlightOwner(e){this.hoverOwner=e}updateStructures(e){let t=0;for(let n of e.values()){if(!n.isActive)continue;let e=this.typeToAtlasCol.get(n.unitType);if(e===void 0)continue;this.instanceBuf.ensureCapacity(t+1);let r=t*jc,i=n.pos%this.mapW,a=(n.pos-i)/this.mapW;this.instanceBuf.float32[r+0]=i,this.instanceBuf.float32[r+1]=a,this.instanceBuf.float32[r+2]=n.ownerID,this.instanceBuf.float32[r+3]=+!!n.underConstruction,this.instanceBuf.float32[r+4]=e,this.instanceBuf.float32[r+5]=n.markedForDeletion===!1?0:1,t++}if(this.instanceCount=t,t>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceBuf.float32,0,t*jc)}}updateGhostPreview(e){this.ghost=e}setAltView(e){this.altView=e}setHighlightTypes(e){let t=0;if(e)for(let n of e){let e=this.typeToAtlasCol.get(n);e!==void 0&&(t|=1<<e)}this.highlightMask=t}setAffiliationTex(e){this.affiliationTex=e}draw(e,t){let n=this.ghost!==null&&this.typeToAtlasCol.has(this.ghost.ghostType);if(this.instanceCount===0&&!n)return;let r=this.gl;r.useProgram(this.program);let i=this.settings.structure;r.uniformMatrix3fv(this.uCamera,!1,e),r.uniform1f(this.uLocalPlayerID,this.localPlayerID),r.uniform1f(this.uZoom,t),r.uniform1f(this.uIconSize,i.iconSize),r.uniform1f(this.uDotsThreshold,i.dotsZoomThreshold),r.uniform1f(this.uDotScale,i.dotScale),r.uniform1f(this.uScaleFactor,i.iconScaleFactorZoomedOut),r.uniform1f(this.uIconGrowZoom,i.iconGrowZoom);let a=new Float32Array(Ac),o=new Float32Array(Ac);for(let e=0;e<kc.length;e++){let t=i.shapes[kc[e]];a[e]=t?.scale??1,o[e]=t?.iconFill??.6}if(r.uniform1fv(this.uShapeScales,a),r.uniform1fv(this.uIconFills,o),r.uniform1i(this.uAltView,this.altView&&this.settings.altView.recolorStructures?1:0),r.uniform1i(this.uHighlightMask,this.highlightMask),r.uniform1f(this.uHighlightOutlineW,i.highlightOutlineWidth),r.uniform1f(this.uHighlightDimAlpha,i.highlightDimAlpha),r.uniform1f(this.uFillDarken,i.fillDarken),r.uniform1f(this.uBorderDarken,i.borderDarken),r.uniform1f(this.uIconAlpha,i.iconAlpha),r.uniform3f(this.uIconColor,i.iconR,i.iconG,i.iconB),r.uniform1f(this.uIconDarken,i.iconDarken),r.uniform1f(this.uTime,(performance.now()-this.startTime)/1e3),r.uniform1f(this.uHoverOwner,this.hoverOwner),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.paletteTex),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,this.atlasTex),this.affiliationTex&&(r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,this.affiliationTex)),r.activeTexture(r.TEXTURE3),r.bindTexture(r.TEXTURE_2D,this.effectTex),r.bindVertexArray(this.vao),this.instanceCount>0&&(r.uniform1f(this.uGhostAlpha,1),r.uniform3f(this.uOutlineColor,0,0,0),r.drawArraysInstanced(r.TRIANGLES,0,6,this.instanceCount)),n){let e=this.ghost,t=this.typeToAtlasCol.get(e.ghostType);if(r.bindBuffer(r.ARRAY_BUFFER,this.ghostInstanceBuf),r.vertexAttribPointer(1,4,r.FLOAT,!1,Mc,0),r.vertexAttribPointer(2,2,r.FLOAT,!1,Mc,16),e.canUpgrade&&e.upgradeTargetTile!==null){let n=e.upgradeTargetTile%this.mapW,i=(e.upgradeTargetTile-n)/this.mapW;this.ghostBuf[0]=n,this.ghostBuf[1]=i,this.ghostBuf[2]=e.ownerID,this.ghostBuf[3]=0,this.ghostBuf[4]=t,this.ghostBuf[5]=0,r.bufferSubData(r.ARRAY_BUFFER,0,this.ghostBuf),r.uniform1f(this.uGhostAlpha,.6),r.uniform3f(this.uOutlineColor,0,.8,0),r.drawArraysInstanced(r.TRIANGLES,0,6,1)}this.ghostBuf[0]=e.tileX,this.ghostBuf[1]=e.tileY,this.ghostBuf[2]=e.ownerID,this.ghostBuf[3]=0,this.ghostBuf[4]=t,this.ghostBuf[5]=0,r.bufferSubData(r.ARRAY_BUFFER,0,this.ghostBuf),r.uniform1f(this.uGhostAlpha,.5),e.canUpgrade?r.uniform3f(this.uOutlineColor,0,.8,0):e.canBuild?r.uniform3f(this.uOutlineColor,0,0,0):r.uniform3f(this.uOutlineColor,.8,.2,.2),r.drawArraysInstanced(r.TRIANGLES,0,6,1),r.bindBuffer(r.ARRAY_BUFFER,this.instanceBuf.buffer),r.vertexAttribPointer(1,4,r.FLOAT,!1,Mc,0),r.vertexAttribPointer(2,2,r.FLOAT,!1,Mc,16)}}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),this.ghostInstanceBuf&&e.deleteBuffer(this.ghostInstanceBuf),e.deleteVertexArray(this.vao),e.deleteTexture(this.atlasTex)}},Pc=`#version 300 es
precision highp float;

uniform sampler2D uTerrain;

in vec2 vUV;
out vec4 fragColor;

void main() {
  fragColor = texture(uTerrain, vUV);
}
`,Fc=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;

out vec2 vUV;

void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // aPos ranges [0, mapW] × [0, mapH] — normalize to [0,1] UV
  // (mapSize is baked into the quad vertices, so we pass it as a uniform)
  vUV = aPos / vec2(float(MAP_W), float(MAP_H));
}
`,Ic=class{constructor(e,t,n,r,i,a){this.gl=e,this.terrainSource=t,this.rgbaScratch=new Uint8Array,this.mapW=r,this.mapH=i,this.terrainColors=a,this.program=H(e,W(Fc,{MAP_W:r,MAP_H:i}),Pc,`TerrainPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.tex=U(e,{width:r,height:i,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:br(n,r,i,a),filter:e.NEAREST}),this.vao=Gr(e,r,i)}setTerrainColors(e){this.terrainColors=e;let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.tex),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.mapW,this.mapH,t.RGBA,t.UNSIGNED_BYTE,br(this.terrainSource(),this.mapW,this.mapH,e))}applyTerrainRects(e,t){if(e.length===0)return;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.tex),n.pixelStorei(n.UNPACK_ALIGNMENT,1);let r=0;for(let i of e){let e=i.w*i.h;this.rgbaScratch.length<e*4&&(this.rgbaScratch=new Uint8Array(e*4));for(let n=0;n<e;n++)yr(t[r+n],this.rgbaScratch,n*4,this.terrainColors);n.texSubImage2D(n.TEXTURE_2D,0,i.x,i.y,i.w,i.h,n.RGBA,n.UNSIGNED_BYTE,this.rgbaScratch,0),r+=e}}draw(e){let t=this.gl;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tex),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.tex)}},Lc=`#version 300 es
precision highp float;
precision highp usampler2D;
precision highp sampler2DArray;

uniform usampler2D uTileTex;      // R16UI — tile state per cell
uniform sampler2D  uPalette;      // RGBA32F — player colors
uniform sampler2D  uPatternMeta;  // RGBA32F — 1D buffer, 1 px per owner. R=hasPattern, G=width, B=height, A=scale
uniform usampler2D uPatternData;  // R8UI    — 2D buffer, row per owner, bytes for bitmask
uniform sampler2DArray uSkinAtlas; // RGBA8 — per-skin PNG layer, tiled via REPEAT wrap
uniform usampler2D uSkinLayer;    // R8UI — 1D buffer, 1 px per owner. 0=no skin, otherwise layer+1
uniform usampler2D uSkinAnchor;   // RG16UI — 1D buffer, anchor tile (cx, cy) per owner. (0,0) = world origin
uniform int uShowPatterns;
uniform int uIsTeamMode;          // 1 = teams (tint skin by team color), 0 = FFA (raw skin colors)
const float SKIN_DIM = 1024.0;    // atlas cell size in tiles — must match SkinAtlasArray.SKIN_DIM

uniform vec2 uMapSize;
uniform int uAltView;
uniform float uStaleNukeBase;
uniform float uStaleNukeVariation;
uniform float uStaleNukeAlpha;
uniform vec3 uStaleNukeColor;
uniform uint uHighlightOwner;      // 0 = no highlight; otherwise smallID of hovered owner
uniform float uHighlightBrighten;  // hover contrast boost strength; 0 = disabled
uniform sampler2D uDefenseCoverageTex; // R8 — 1.0 = tile defended by same-owner post
uniform float uDefenseDarken;      // multiplier applied to fill on defended tiles
uniform sampler2D uBorderTex;      // RGBA8 — border flags; R > 0.25 = border tile
uniform float uSaturation;         // 1 = full color, 0 = grayscale
uniform float uTerritoryAlpha;     // absolute fill opacity; 1 = fully opaque
uniform sampler2D uAffiliation;    // RGBA8 — alt-view relation colors (row 0)
uniform float uAltFillAlpha;       // alt-view translucent fill opacity

in vec2 vWorldPos;
out vec4 fragColor;

void main() {
  ivec2 tc = ivec2(floor(vWorldPos));
  if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y))
    discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  uint owner = raw & uint(OWNER_MASK);
  bool fallout = (raw & (1u << FALLOUT_BIT)) != 0u;

  if (owner == 0u && !fallout) discard;

  // --- Stale-nuke ground (any fallout tile, owned or not) ---
  // Renders for owned tiles too so the player's territory color can't bleed
  // through dim/transparent spots in the fallout bloom above.
  if (fallout) {
    float h = fract(sin(float(tc.x) * 12.9898 + float(tc.y) * 78.233) * 43758.5453);
    float noise = uStaleNukeBase + h * uStaleNukeVariation;
    fragColor = vec4(uStaleNukeColor + vec3(noise), uStaleNukeAlpha);
    return;
  }

  // Alt-view: translucent fill in the owner's relation color (matches the
  // border color BorderStampPass draws in alt-view).
  if (uAltView != 0) {
    vec3 rel = texelFetch(uAffiliation, ivec2(int(owner), 0), 0).rgb;
    fragColor = vec4(rel, uAltFillAlpha);
    return;
  }

  // --- Territory fill (owned, not fallout) ---
  float u = (float(owner) + 0.5) / float(PALETTE_SIZE);
  vec4 color = texture(uPalette, vec2(u, 0.25));

  // uShowPatterns gates both skins and patterns — they're the same
  // "decorate the territory fill" feature from the user's perspective.
  uint skinLayerPlus1 =
    uShowPatterns == 1
      ? texelFetch(uSkinLayer, ivec2(int(owner), 0), 0).r
      : 0u;
  if (skinLayerPlus1 > 0u) {
    // Skin overrides pattern entirely (mutually exclusive). The image is a
    // single stamp centered at the player's spawn tile — UVs outside [0,1]
    // are treated as transparent so tiles beyond the image bounds fall back
    // to the regular palette color. (0,0) anchor sentinel = world origin.
    uvec2 anchor = texelFetch(uSkinAnchor, ivec2(int(owner), 0), 0).rg;
    vec2 anchorOffset = (anchor == uvec2(0u)) ? vec2(0.0) : vec2(anchor);

    vec2 skinUV = (vec2(tc) - anchorOffset) / vec2(SKIN_DIM) + vec2(0.5);
    vec4 skin = texture(uSkinAtlas, vec3(skinUV, float(skinLayerPlus1) - 1.0));
    bool inBounds =
      skinUV.x >= 0.0 && skinUV.x <= 1.0 &&
      skinUV.y >= 0.0 && skinUV.y <= 1.0;
    float skinAlpha = inBounds ? skin.a : 0.0;
    // Transparent (or out-of-bounds) pixels fall through to the player color;
    // opaque pixels show the skin (tinted by team color in team games).
    vec3 skinColor = (uIsTeamMode == 1) ? color.rgb * skin.rgb : skin.rgb;
    color.rgb = mix(color.rgb, skinColor, skinAlpha);
  } else if (uShowPatterns == 1) {
    vec4 meta = texelFetch(uPatternMeta, ivec2(int(owner), 0), 0);
    if (meta.r > 0.0) {
      int pWidth = int(meta.g);
      int pHeight = int(meta.b);
      int pScale = int(meta.a);

      int px = tc.x >> pScale;
      int py = tc.y >> pScale;
      int mx = ((px % pWidth) + pWidth) % pWidth;
      int my = ((py % pHeight) + pHeight) % pHeight;
      int bitIndex = my * pWidth + mx;
      int byteIndex = bitIndex >> 3;

      uint patternByte = texelFetch(uPatternData, ivec2(byteIndex, int(owner)), 0).r;
      bool isPrimary = (patternByte & (1u << uint(bitIndex & 7))) == 0u;

      if (!isPrimary) {
        color = texture(uPalette, vec2(u, 0.75));
      }
    }
  }

  // Hover highlight: boost contrast on the hovered player's tiles, pushing
  // channels away from mid-gray. uHighlightBrighten is the strength; 0 disables.
  if (uHighlightOwner != 0u && owner == uHighlightOwner && uHighlightBrighten > 0.0) {
    float contrast = 1.0 + uHighlightBrighten;
    color.rgb = clamp((color.rgb - 0.5) * contrast + 0.5, 0.0, 1.0);
  }

  // Defense bonus: darken the fill on interior tiles defended by a same-owner
  // post. Border tiles are skipped — they get the checkerboard overlay from
  // BorderStampPass instead. Coverage is tested first so the (rarer) defended
  // tiles are the only ones that pay for the extra border fetch (&& short-
  // circuits in GLSL ES 3.00; texelFetch is derivative-free so this is safe).
  if (texelFetch(uDefenseCoverageTex, tc, 0).r > 0.5 &&
      texelFetch(uBorderTex, tc, 0).r <= 0.25) {
    color.rgb *= uDefenseDarken;
  }

  // Adjust how saturated the fill is by blending toward its luminance.
  if (uSaturation != 1.0) {
    float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    color.rgb = mix(vec3(luma), color.rgb, uSaturation);
  }

  color.a = uTerritoryAlpha;

  fragColor = color;
}
`,Rc=`#version 300 es
precision highp float;
precision highp int;

flat in uint vState;

// R16UI color attachment — integer output type required.
layout(location = 0) out uvec4 fragColor;

void main() {
  fragColor = uvec4(vState, 0u, 0u, 0u);
}
`,zc=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec2 aPos;    // tile coord (integer in [0, mapW) × [0, mapH))
layout(location = 1) in float aState; // R16UI state value (passed as float, fits in 16 bits exactly)

uniform vec2 uMapSize;

flat out uint vState;

void main() {
  // Position the point at the center of the target pixel so a 1×1 point
  // rasterizes into exactly that texel.
  vec2 ndc = ((aPos + 0.5) / uMapSize) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
  vState = uint(aState);
}
`,Bc=3,Vc=4096,Hc=class{constructor(e,t,n,r){this.patchCount=0,this.patchCapacity=Vc,this.gpuCapacityBytes=0,this.gl=e,this.mapW=t,this.mapH=n,this.program=H(e,zc,Rc,`TileScatterPass`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.vbo=e.createBuffer(),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.vbo);let i=Bc*4;e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,i,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,1,e.FLOAT,!1,i,8),e.bindVertexArray(null),this.patchData=new Float32Array(Vc*Bc)}push(e,t,n){this.patchCount>=this.patchCapacity&&this.grow();let r=this.patchCount*Bc;this.patchData[r]=e,this.patchData[r+1]=t,this.patchData[r+2]=n,this.patchCount++}get count(){return this.patchCount}clear(){this.patchCount=0}flush(){if(this.patchCount===0)return;let e=this.gl,t=this.patchCount*Bc,n=t*4,r=this.patchData.subarray(0,t);e.bindBuffer(e.ARRAY_BUFFER,this.vbo),n>this.gpuCapacityBytes?(e.bufferData(e.ARRAY_BUFFER,r,e.STREAM_DRAW),this.gpuCapacityBytes=n):e.bufferSubData(e.ARRAY_BUFFER,0,r),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.BLEND),e.useProgram(this.program),e.uniform2f(this.uMapSize,this.mapW,this.mapH),e.bindVertexArray(this.vao),e.drawArrays(e.POINTS,0,this.patchCount),e.bindFramebuffer(e.FRAMEBUFFER,null),this.patchCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteFramebuffer(this.fbo),e.deleteBuffer(this.vbo),e.deleteVertexArray(this.vao)}grow(){let e=this.patchCapacity*2,t=new Float32Array(e*Bc);t.set(this.patchData),this.patchData=t,this.patchCapacity=e}},Uc=class{constructor(e,t,n,r,i,a,o,s,c,l,u){this.highlightOwner=0,this.isTeamMode=!1,this.defenseCoverageTex=null,this.borderTex=null,this.affiliationTex=null,this.altView=!1,this.tilesDirty=!1,this.falloutTouched=!1,this.fullUploadPending=!1,this.borderPatchConsumer=null,this.dripBuckets=[],this.currentBucket=0,this.gl=e,this.settings=u,this.mapW=t,this.mapH=n,this.tileTex=r,this.paletteTex=i,this.patternMetaTex=a,this.patternDataTex=o,this.skinAtlasTex=s,this.skinLayerTex=c,this.skinAnchorTex=l,this.cpuTileState=new Uint16Array(t*n),this.nBuckets=Math.max(1,u.tileDrip.bucketCount|0);for(let e=0;e<this.nBuckets;e++)this.dripBuckets.push([]);this.program=H(e,Ti,W(Lc,{PALETTE_SIZE:B(),...mi}),`TerritoryPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uAltView=e.getUniformLocation(this.program,`uAltView`),this.uStaleNukeBase=e.getUniformLocation(this.program,`uStaleNukeBase`),this.uStaleNukeVariation=e.getUniformLocation(this.program,`uStaleNukeVariation`),this.uStaleNukeAlpha=e.getUniformLocation(this.program,`uStaleNukeAlpha`),this.uStaleNukeColor=e.getUniformLocation(this.program,`uStaleNukeColor`),this.uHighlightOwner=e.getUniformLocation(this.program,`uHighlightOwner`),this.uHighlightBrighten=e.getUniformLocation(this.program,`uHighlightBrighten`),this.uShowPatterns=e.getUniformLocation(this.program,`uShowPatterns`),this.uIsTeamMode=e.getUniformLocation(this.program,`uIsTeamMode`),this.uDefenseDarken=e.getUniformLocation(this.program,`uDefenseDarken`),this.uSaturation=e.getUniformLocation(this.program,`uSaturation`),this.uTerritoryAlpha=e.getUniformLocation(this.program,`uTerritoryAlpha`),this.uAltFillAlpha=e.getUniformLocation(this.program,`uAltFillAlpha`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),1),e.uniform1i(e.getUniformLocation(this.program,`uPatternMeta`),2),e.uniform1i(e.getUniformLocation(this.program,`uPatternData`),3),e.uniform1i(e.getUniformLocation(this.program,`uSkinAtlas`),4),e.uniform1i(e.getUniformLocation(this.program,`uSkinLayer`),5),e.uniform1i(e.getUniformLocation(this.program,`uSkinAnchor`),6),e.uniform1i(e.getUniformLocation(this.program,`uDefenseCoverageTex`),7),e.uniform1i(e.getUniformLocation(this.program,`uBorderTex`),8),e.uniform1i(e.getUniformLocation(this.program,`uAffiliation`),9),this.vao=Gr(e,t,n),this.scatter=new Hc(e,t,n,r)}setLiveRef(e){this.cpuTileState.set(e),this.clearDripBuckets(),this.scatter.clear(),this.fullUploadPending=!0,this.tilesDirty=!0,this.falloutTouched=!0}setBorderPatchConsumer(e){this.borderPatchConsumer=e}applyLiveDelta(e,t){let n=this.nBuckets,r=this.dripBuckets;for(let i=0;i<t.length;i++){let a=t[i];r[(a*2654435761>>>0)%n].push(a,e[a])}}drainDripBucket(){let e=this.dripBuckets[this.currentBucket];if(e.length>0){let t=this.cpuTileState,n=this.mapW,r=this.fullUploadPending,i=this.borderPatchConsumer;for(let a=0;a<e.length;a+=2){let o=e[a],s=e[a+1],c=t[o];if((c^s)&8192&&(this.falloutTouched=!0),t[o]=s,!r){let e=o%n,t=(o-e)/n;this.scatter.push(e,t,s),i&&i(e,t,c&fi,s&fi)}}e.length=0,this.tilesDirty=!0}this.currentBucket=(this.currentBucket+1)%this.nBuckets}flushAllDripBuckets(){let e=!1,t=this.cpuTileState,n=this.mapW,r=this.fullUploadPending,i=this.borderPatchConsumer;for(let a=0;a<this.nBuckets;a++){let o=this.dripBuckets[a];if(o.length!==0){e=!0;for(let e=0;e<o.length;e+=2){let a=o[e],s=o[e+1],c=t[a];if((c^s)&8192&&(this.falloutTouched=!0),t[a]=s,!r){let e=a%n,t=(a-e)/n;this.scatter.push(e,t,s),i&&i(e,t,c&fi,s&fi)}}o.length=0}}e&&(this.tilesDirty=!0)}clearDripBuckets(){for(let e=0;e<this.nBuckets;e++)this.dripBuckets[e].length=0;this.currentBucket=0}consumeFalloutTouched(){let e=this.falloutTouched;return this.falloutTouched=!1,e}flushTileTexture(){if(!this.tilesDirty)return`none`;let e=this.gl;return this.fullUploadPending?(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.mapW,this.mapH,e.RED_INTEGER,e.UNSIGNED_SHORT,this.cpuTileState),this.scatter.clear(),this.fullUploadPending=!1,this.tilesDirty=!1,`full`):this.scatter.count>0?(this.scatter.flush(),this.tilesDirty=!1,`scatter`):(this.tilesDirty=!1,`none`)}setAltView(e){this.altView=e}setSkinAtlas(e){this.skinAtlasTex=e}setTeamMode(e){this.isTeamMode=e}setHighlightOwner(e){this.highlightOwner=e}setDefenseCoverageTex(e){this.defenseCoverageTex=e}setBorderTex(e){this.borderTex=e}setAffiliationTex(e){this.affiliationTex=e}draw(e){this.flushTileTexture();let t=this.gl,n=this.settings.mapOverlay;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uMapSize,this.mapW,this.mapH),t.uniform1i(this.uAltView,+!!this.altView),t.uniform1f(this.uStaleNukeBase,n.staleNukeBase),t.uniform1f(this.uStaleNukeVariation,n.staleNukeVariation),t.uniform1f(this.uStaleNukeAlpha,n.staleNukeAlpha),t.uniform3f(this.uStaleNukeColor,n.staleNukeR,n.staleNukeG,n.staleNukeB),t.uniform1ui(this.uHighlightOwner,this.highlightOwner),t.uniform1f(this.uHighlightBrighten,n.highlightFillBrighten),t.uniform1i(this.uShowPatterns,+!!this.settings.passEnabled.territoryPatterns),t.uniform1i(this.uIsTeamMode,+!!this.isTeamMode),t.uniform1f(this.uDefenseDarken,n.territoryDefenseDarken),t.uniform1f(this.uSaturation,n.territorySaturation),t.uniform1f(this.uTerritoryAlpha,n.territoryAlpha),t.uniform1f(this.uAltFillAlpha,this.settings.altView.fillAlpha),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tileTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.paletteTex),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.patternMetaTex),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,this.patternDataTex),t.activeTexture(t.TEXTURE4),t.bindTexture(t.TEXTURE_2D_ARRAY,this.skinAtlasTex),t.activeTexture(t.TEXTURE5),t.bindTexture(t.TEXTURE_2D,this.skinLayerTex),t.activeTexture(t.TEXTURE6),t.bindTexture(t.TEXTURE_2D,this.skinAnchorTex),this.defenseCoverageTex&&(t.activeTexture(t.TEXTURE7),t.bindTexture(t.TEXTURE_2D,this.defenseCoverageTex)),this.borderTex&&(t.activeTexture(t.TEXTURE8),t.bindTexture(t.TEXTURE_2D,this.borderTex)),this.affiliationTex&&(t.activeTexture(t.TEXTURE9),t.bindTexture(t.TEXTURE_2D,this.affiliationTex)),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao),this.scatter.dispose()}},Wc=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uTrailTex;     // R16UI — trail texel: owner smallID (bits 0-11)
                                  //   + nuke bit (bit 12); 0 = no trail
uniform sampler2D  uPalette;      // RGBA32F — player colors
uniform sampler2D  uAffiliation;  // RGBA8 — affiliation colors (row 0 = border, row 1 = unit)
uniform sampler2D  uEffect;       // RGBA32F — trail effect, keyed by ownerID. Stacked blocks
                                  //   of MAX_TRAIL_COLORS rows: block 0 = transportShipTrail,
                                  //   block 1 = nukeTrail. Within a block (rowBase = block start):
                                  //   row r = color r's rgb; spare alphas hold scalars:
                                  //   row 0.a = color count (0 = no effect → territory color),
                                  //   row 1.a = styleId (0 = gradient, 1 = transition, 2 = spiral),
                                  //   row 2.a = scalar0 (gradient colorSize / transition freq),
                                  //   row 3.a = scalar1 (gradient movementSpeed)
uniform vec2 uMapSize;
uniform float uTrailAlpha;
uniform float uTime;              // seconds, for animated effect styles
uniform int uAltView;

in vec2 vWorldPos;
out vec4 fragColor;

void main() {
  ivec2 tc = ivec2(floor(vWorldPos));
  if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y))
    discard;

  uint trailVal = texelFetch(uTrailTex, tc, 0).r;
  uint owner = trailVal & 0xFFFu;       // bits 0-11 = owner smallID
  if (owner == 0u) discard;
  uint isNuke = (trailVal >> 12) & 1u;  // bit 12 = nuke trail

  vec3 color;
  if (uAltView != 0) {
    // Alt view recolors everything by affiliation — effects stay off so the
    // strategic overlay reads consistently.
    color = texelFetch(uAffiliation, ivec2(int(owner), 1), 0).rgb;
  } else {
    int o = int(owner);
    // Boat trails read block 0; nuke trails read block 1 (rows offset by
    // MAX_TRAIL_COLORS). The effect attributes are otherwise identical.
    int rowBase = isNuke == 1u ? MAX_TRAIL_COLORS : 0;
    int count = int(texelFetch(uEffect, ivec2(o, rowBase), 0).a + 0.5);
    if (count <= 0) {
      // No effect — fall back to the player's territory color.
      float u = (float(owner) + 0.5) / float(PALETTE_SIZE);
      color = texture(uPalette, vec2(u, 0.25)).rgb;
    } else if (count == 1) {
      // Single color — flat trail.
      color = texelFetch(uEffect, ivec2(o, rowBase), 0).rgb;
    } else if (int(texelFetch(uEffect, ivec2(o, rowBase + 1), 0).a + 0.5) == 2) {
      // spiral — the vortex itself renders as ribbon geometry above this
      // pass (SpiralRibbonPass); the stamped centerline underneath draws
      // flat in the first color, as the missile's spine.
      color = texelFetch(uEffect, ivec2(o, rowBase), 0).rgb;
    } else if (int(texelFetch(uEffect, ivec2(o, rowBase + 1), 0).a + 0.5) == 1) {
      // transition — the whole trail is one color at a time, cross-fading
      // through the list over time. frequency = color changes per second.
      float frequency = texelFetch(uEffect, ivec2(o, rowBase + 2), 0).a;
      float t = uTime * frequency;
      int i = int(t) % count;
      int j = (i + 1) % count;
      vec3 a = texelFetch(uEffect, ivec2(o, rowBase + i), 0).rgb;
      vec3 b = texelFetch(uEffect, ivec2(o, rowBase + j), 0).rgb;
      color = mix(a, b, fract(t));
    } else {
      // gradient — cyclic gradient banded across the map (world-space diagonal),
      // scrolling over time so a moving trail shifts hue along it. colorSize
      // = band width in tiles; movementSpeed = tiles/sec the bands travel.
      float colorSize = max(texelFetch(uEffect, ivec2(o, rowBase + 2), 0).a, 0.001);
      float movementSpeed = texelFetch(uEffect, ivec2(o, rowBase + 3), 0).a;
      float cycle = colorSize * float(count);
      float phase =
        fract((vWorldPos.x + vWorldPos.y - uTime * movementSpeed) / cycle);
      float f = phase * float(count);
      int i = int(f) % count;
      int j = (i + 1) % count;
      vec3 a = texelFetch(uEffect, ivec2(o, rowBase + i), 0).rgb;
      vec3 b = texelFetch(uEffect, ivec2(o, rowBase + j), 0).rgb;
      color = mix(a, b, fract(f));
    }
  }
  fragColor = vec4(color, uTrailAlpha);
}
`,Gc=class{constructor(e,t,n,r,i,a,o){this.affiliationTex=null,this.altView=!1,this.startTime=performance.now(),this.trailsDirty=!1,this.liveTrailRef=null,this.dirtyRowMin=1/0,this.dirtyRowMax=-1,this.gl=e,this.settings=o,this.mapW=t,this.mapH=n,this.trailTex=r,this.paletteTex=i,this.effectTex=a,this.program=H(e,Ti,W(Wc,{PALETTE_SIZE:B(),MAX_TRAIL_COLORS:8,...mi}),`TrailPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uTrailAlpha=e.getUniformLocation(this.program,`uTrailAlpha`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uAltView=e.getUniformLocation(this.program,`uAltView`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTrailTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),1),e.uniform1i(e.getUniformLocation(this.program,`uAffiliation`),2),e.uniform1i(e.getUniformLocation(this.program,`uEffect`),3),this.vao=Gr(e,t,n)}setAltView(e){this.altView=e}setAffiliationTex(e){this.affiliationTex=e}setLiveRef(e){this.liveTrailRef=e,this.trailsDirty=!0}applyLiveDelta(e,t,n){this.liveTrailRef=e,n>=0&&(this.trailsDirty&&this.dirtyRowMax<0||(this.dirtyRowMin=Math.min(this.dirtyRowMin,t),this.dirtyRowMax=Math.max(this.dirtyRowMax,n))),this.trailsDirty=!0}flushTexture(){if(!this.trailsDirty)return;let e=this.liveTrailRef;if(e===null)return;let t=this.gl;if(t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.trailTex),this.dirtyRowMax>=0){let n=this.dirtyRowMin,r=this.dirtyRowMax-n+1,i=n*this.mapW;t.texSubImage2D(t.TEXTURE_2D,0,0,n,this.mapW,r,t.RED_INTEGER,t.UNSIGNED_SHORT,e.subarray(i,i+r*this.mapW))}else t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.mapW,this.mapH,t.RED_INTEGER,t.UNSIGNED_SHORT,e);this.dirtyRowMin=1/0,this.dirtyRowMax=-1,this.trailsDirty=!1}draw(e){this.flushTexture();let t=this.gl;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uMapSize,this.mapW,this.mapH),t.uniform1f(this.uTrailAlpha,this.settings.mapOverlay.trailAlpha),t.uniform1f(this.uTime,(performance.now()-this.startTime)/1e3),t.uniform1i(this.uAltView,+!!this.altView),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.trailTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.paletteTex),this.affiliationTex&&(t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.affiliationTex)),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,this.effectTex),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},Kc=`#version 300 es
precision highp float;

uniform sampler2D uPalette;
uniform sampler2D uAtlas;
uniform sampler2D uAffiliation;   // 256×2 RGBA8 — row 1 = unit affiliation
uniform sampler2D uEffect;        // RGBA32F — shared effect palette, keyed by
                                  //   ownerID. The warship block starts at row
                                  //   WARSHIP_EFFECT_ROW_BASE and the train
                                  //   block at TRAIN_EFFECT_ROW_BASE; same
                                  //   layout as trail/structure.frag.glsl (row r =
                                  //   color r's rgb; row 0.a = count,
                                  //   1.a = styleId, 2.a = scalar0,
                                  //   3.a = scalar1)
uniform float uTime;              // seconds, for animated effect styles
uniform float uTick;
uniform float uFlickerSpeed;
uniform vec3  uAngryColor;
uniform int   uAltView;
uniform vec3  uSelfColor;         // affiliation self/ally colors (alt-view trade ships)
uniform vec3  uAllyColor;
uniform vec3  uHBombGlowColor;
uniform float uHBombGlowStrength;
uniform float uHBombGlowInner;
uniform float uUntargetableAlpha;

in vec2  vQuadPos;
in vec2  vCellUV;
in vec2  vWorldPos;
flat in float vAtlasCol;
flat in float vOwnerID;
flat in float vFlags;
flat in float vHash;
flat in float vGlow;

out vec4 fragColor;

// Flag constants — must match CPU-side FLAG_* values
const float FLAG_FLICKER        = 1.0;
const float FLAG_ANGRY          = 2.0;
const float FLAG_TRADE_FRIENDLY = 3.0;
const float FLAG_RETREATING     = 4.0;
const float FLAG_FLICKER_UNTARGETABLE = 5.0; // nuke out of SAM range — dimmed
const float FLAG_TRADE_SELF     = 6.0;

// Flicker hot colors: red → orange → yellow → white
const vec3 FLICKER_COLORS[4] = vec3[4](
  vec3(1.0, 0.0, 0.0),   // red
  vec3(1.0, 0.5, 0.0),   // orange
  vec3(1.0, 1.0, 0.0),   // yellow
  vec3(1.0, 1.0, 1.0)    // white
);

// The owner's sprite cosmetic color, if equipped, from the effect-palette
// block starting at row rowBase (the warship or train block). Returns false
// when the owner has no effect in that block (count 0).
//
// \`coord\` positions the gradient: with iconSpace the caller passes the sprite
// diagonal in 0..1 (the palette spans the sprite once, sliding one cycle every
// colorSize · count / movementSpeed seconds — structure.frag.glsl semantics);
// otherwise it passes the world diagonal x + y (colorSize = band width in
// tiles, movementSpeed = tiles/sec — trail.frag.glsl semantics).
bool spriteEffectColor(int rowBase, int owner, float coord, bool iconSpace, out vec3 color) {
  int count = int(texelFetch(uEffect, ivec2(owner, rowBase), 0).a + 0.5);
  if (count <= 0) return false;
  if (count == 1) {
    // Single color — flat recolor.
    color = texelFetch(uEffect, ivec2(owner, rowBase), 0).rgb;
  } else if (int(texelFetch(uEffect, ivec2(owner, rowBase + 1), 0).a + 0.5) == 1) {
    // transition — one color at a time, cross-fading through the list.
    // frequency = color changes per second.
    float frequency = texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a;
    float t = uTime * frequency;
    int i = int(t) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(t));
  } else {
    // gradient — cyclic palette along \`coord\` (see above), scrolling over
    // time.
    float colorSize = max(texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a, 0.001);
    float movementSpeed = texelFetch(uEffect, ivec2(owner, rowBase + 3), 0).a;
    float cycle = colorSize * float(count);
    float c = iconSpace ? coord : coord / cycle;
    float phase = fract(c - uTime * movementSpeed / cycle);
    float f = phase * float(count);
    int i = int(f) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(f));
  }
  return true;
}

void main() {
  // Untargetable nukes render translucent so players know SAMs can't hit them
  float alphaMul = abs(vFlags - FLAG_FLICKER_UNTARGETABLE) < 0.1
    ? uUntargetableAlpha
    : 1.0;

  // The sprite lives in the central cell-space region [0,1]; for the enlarged
  // hydrogen-bomb quad, anything outside that range is glow-only margin.
  vec4 texel = vec4(0.0);
  bool inSprite = vCellUV.x >= 0.0 && vCellUV.x <= 1.0 &&
                  vCellUV.y >= 0.0 && vCellUV.y <= 1.0;
  if (inSprite) {
    vec2 atlasUV = vec2((vAtlasCol + vCellUV.x) / float(ATLAS_COLS), vCellUV.y);
    texel = texture(uAtlas, atlasUV);
  }

  // Outside the sprite: render the steady soft glow under the hydrogen bomb,
  // otherwise discard. Glow is suppressed in alt (affiliation) view.
  if (texel.a < 0.01) {
    if (vGlow > 0.5 && uAltView == 0) {
      float d = length(vQuadPos - 0.5) * 2.0; // 0 at center → ~1 at quad edge
      float g = (1.0 - smoothstep(uHBombGlowInner, 1.0, d)) * uHBombGlowStrength;
      if (g > 0.001) {
        fragColor = vec4(uHBombGlowColor, g * alphaMul);
        return;
      }
    }
    discard;
  }

  float gray = texel.r;

  // Alt-view: solid affiliation color, no gray-replacement bands
  if (uAltView != 0) {
    // Trade ships: green if self is on either end, yellow if an ally is
    vec3 ac = abs(vFlags - FLAG_TRADE_SELF) < 0.1
      ? uSelfColor
      : abs(vFlags - FLAG_TRADE_FRIENDLY) < 0.1
        ? uAllyColor
        : texelFetch(uAffiliation, ivec2(int(vOwnerID), 1), 0).rgb;
    fragColor = vec4(ac, texel.a * alphaMul);
    return;
  }

  // Player color lookup from palette
  float u = (vOwnerID + 0.5) / float(PALETTE_SIZE);
  vec3 territoryColor = texture(uPalette, vec2(u, 0.25)).rgb;
  vec3 borderColor    = texture(uPalette, vec2(u, 0.75)).rgb;

  // warship cosmetic: recolor the warship's territory-color bands with the
  // owner's effect (raw catalog colors, like trails). The border band keeps
  // the player color so ownership stays readable, and combat signals win: the
  // angry (attacking) override below replaces this with red, and the retreat
  // blink still darkens the center band.
  if (abs(vAtlasCol - float(WARSHIP_COL)) < 0.1) {
    vec3 effectRGB;
    float dn = (vCellUV.x + vCellUV.y) * 0.5; // sprite diagonal, 0..1
    if (spriteEffectColor(WARSHIP_EFFECT_ROW_BASE, int(vOwnerID + 0.5), dn, true, effectRGB)) {
      territoryColor = effectRGB;
    }
  }

  // train cosmetic: the train sprites (engine, carriage, loaded carriage) are
  // the last three atlas columns. The engine is drawn entirely in the border
  // band and the carriages are a border-band frame around a territory-band
  // fill, so recolor both bands — the border band darkened — to keep that
  // engine/frame/fill structure while the whole train takes the effect.
  // The gradient is world-space (like trails and the railroad effect): the
  // 5×5 train sprites fill only the middle of the 13-tile unit cell, so an
  // icon-space gradient would show a sliver of the palette per car, whereas a
  // world-space one runs along the whole train.
  if (vAtlasCol > float(TRAIN_FIRST_COL) - 0.1) {
    vec3 effectRGB;
    float diag = vWorldPos.x + vWorldPos.y;
    if (spriteEffectColor(TRAIN_EFFECT_ROW_BASE, int(vOwnerID + 0.5), diag, false, effectRGB)) {
      territoryColor = effectRGB;
      borderColor = effectRGB * 0.6;
    }
  }

  // Flag states (uint8 passed as float via vertex attribute):
  //   0 = normal
  //   1 = flicker (nukes/warheads — cycling hot colors)
  //   2 = angry (warships attacking — outer ring (180 band) solid red)
  //   4 = retreating (warships fleeing to port — blinking black center)
  float retreatBlink = 0.0;
  if (abs(vFlags - FLAG_ANGRY) < 0.1) {
    // Angry: the outer ring (180) and center (100) go red via territoryColor
    territoryColor = uAngryColor;
  } else if (abs(vFlags - FLAG_RETREATING) < 0.1) {
    // Retreating: slowly blink the center (100 band) black so the ship reads as fleeing
    retreatBlink = step(0.5, fract(uTick * 0.07));
  } else if (abs(vFlags - FLAG_FLICKER) < 0.1 ||
             abs(vFlags - FLAG_FLICKER_UNTARGETABLE) < 0.1) {
    // Flicker: cycle through hot colors, offset by position hash
    float phase = fract(uTick * uFlickerSpeed + vHash);
    int idx = int(phase * 4.0) % 4;
    territoryColor = FLICKER_COLORS[idx];
    borderColor = FLICKER_COLORS[(idx + 2) % 4];
  }

  // Four-band gray replacement:
  //   180/255 ~ 0.706 -> territory color (light band)
  //   130/255 ~ 0.510 -> spawn/mid color (interpolated; used by missiles)
  //   100/255 ~ 0.392 -> center accent (warship center — tracks ring, blinks black)
  //   70/255  ~ 0.275 -> border color (dark band)
  vec3 spawnColor = mix(territoryColor, borderColor, 0.5);
  vec3 centerColor = mix(territoryColor, vec3(0.0), retreatBlink);

  vec3 color;
  if (gray > 0.6) {
    // Light band (180) -> territory color
    color = territoryColor;
  } else if (gray > 0.45) {
    // Mid band (130) -> spawn color
    color = spawnColor;
  } else if (gray > 0.34) {
    // Center accent band (100) -> center color
    color = centerColor;
  } else {
    // Dark band (70) -> border color
    color = borderColor;
  }

  fragColor = vec4(color, texel.a * alphaMul);
}
`,qc=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

// Per-instance attributes
layout(location = 1) in vec3 aInstPos;   // x, y, ownerID
layout(location = 2) in vec3 aInstFlags; // atlasIdx, flags, flickerHash (uint8→float)

uniform mat3  uCamera;

uniform float uUnitSize;
uniform float uHBombGlowScale; // quad enlargement for the hydrogen bomb glow halo

out vec2  vQuadPos;     // quad coords [0,1] — drives the radial glow falloff
out vec2  vCellUV;      // sprite cell coords; the central 1/scale region is the sprite
out vec2  vWorldPos;    // world-space tile coords — drives the train effect's gradient
flat out float vAtlasCol;
flat out float vOwnerID;
flat out float vFlags;  // 0.0 = normal, 1.0 = flicker, 2.0 = angry
flat out float vHash;   // per-instance hash for flicker phase offset
flat out float vGlow;   // 1.0 if this instance is a hydrogen bomb (draw glow), else 0.0

void main() {
  float worldX = aInstPos.x;
  float worldY = aInstPos.y;
  vOwnerID = aInstPos.z;

  float atlasCol = aInstFlags.x;
  vFlags = aInstFlags.y;
  vAtlasCol = atlasCol;

  // Per-instance hash so each unit flickers independently. Computed CPU-side
  // from the tick position — hashing worldX/Y here would re-roll the phase
  // every frame for nukes whose position is smoothed per frame.
  vHash = aInstFlags.z * (1.0 / 255.0);

  // Hydrogen bombs render an enlarged quad so there's room for a glow halo
  // around the sprite. All other units keep scale 1 (no behavior change).
  float isHBomb = step(abs(atlasCol - float(HYDROGEN_BOMB_COL)), 0.5);
  vGlow = isHBomb;
  float scale = mix(1.0, uHBombGlowScale, isHBomb);

  // UNIT_SIZE is in world-space tiles — no zoom division needed.
  // Units scale with the map like territory tiles do.
  float halfSize = uUnitSize * 0.5 * scale;

  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  vec2 worldPos = center + (aPos - 0.5) * halfSize * 2.0;
  vWorldPos = worldPos;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vQuadPos = aPos;

  // Map the enlarged quad back to sprite cell space: the central 1/scale
  // portion is the sprite, anything outside [0,1] is glow-only margin.
  vCellUV = (aPos - 0.5) * scale + 0.5;
}
`,Jc=N(`atlases/unit-atlas.png`),Yc=[Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,`TrainEngine`,`TrainCarriage`,`TrainCarriageLoaded`],Xc=Yc.length,Zc=Yc.indexOf(Qn),Qc=Yc.indexOf(Xn),$c=Yc.indexOf(`TrainEngine`),el=4,tl=el*4,nl=0,rl=1,il=2,al=3,ol=4,sl=5,cl=6,ll=Yc.indexOf(`TrainEngine`),ul=Yc.indexOf(`TrainCarriage`),dl=Yc.indexOf(`TrainCarriageLoaded`),fl=new Set([Zn,Qn,$n,nr,er,tr]),pl=new Set([Zn,Qn,$n,er,tr,nr]),ml=5;function hl(e,t){let n=e*.1731+t*.3179;return(n-Math.floor(n))*255|0}function gl(e,t,n){let r=e.createVertexArray();return e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,t),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,n),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,tl,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.UNSIGNED_BYTE,!1,tl,12),e.vertexAttribDivisor(2,1),e.bindVertexArray(null),r}var _l=class{constructor(e,t,n,r,i,a){this.affiliationTex=null,this.altView=!1,this.groundCount=0,this.missileCount=0,this.smoothSegs=[],this.lastUnitsUpdateMs=0,this.frameTick=0,this.lastGameTick=-1,this.startTime=performance.now(),this.typeToAtlasCol=new Map,this.localPlayerID=0,this.friendlyOwners=new Set,this.structures=new Map,this.gl=e,this.settings=i,this.mapW=t.mapWidth,this.paletteTex=n,this.effectTex=r,this.tickIntervalMs=a.msPerTick();for(let e=0;e<t.unitTypes.length;e++){let n=Yc.indexOf(t.unitTypes[e]);n>=0&&this.typeToAtlasCol.set(t.unitTypes[e],n)}this.program=H(e,W(qc,{ATLAS_COLS:Xc,HYDROGEN_BOMB_COL:Zc}),W(Kc,{PALETTE_SIZE:B(),ATLAS_COLS:Xc,WARSHIP_COL:Qc,WARSHIP_EFFECT_ROW_BASE:24,TRAIN_FIRST_COL:$c,TRAIN_EFFECT_ROW_BASE:32}),`UnitPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTick=e.getUniformLocation(this.program,`uTick`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uUnitSize=e.getUniformLocation(this.program,`uUnitSize`),this.uFlickerSpeed=e.getUniformLocation(this.program,`uFlickerSpeed`),this.uAngryColor=e.getUniformLocation(this.program,`uAngryColor`),this.uAltView=e.getUniformLocation(this.program,`uAltView`),this.uSelfColor=e.getUniformLocation(this.program,`uSelfColor`),this.uAllyColor=e.getUniformLocation(this.program,`uAllyColor`),this.uHBombGlowScale=e.getUniformLocation(this.program,`uHBombGlowScale`),this.uHBombGlowColor=e.getUniformLocation(this.program,`uHBombGlowColor`),this.uHBombGlowStrength=e.getUniformLocation(this.program,`uHBombGlowStrength`),this.uHBombGlowInner=e.getUniformLocation(this.program,`uHBombGlowInner`),this.uUntargetableAlpha=e.getUniformLocation(this.program,`uUntargetableAlpha`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),0),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),1),e.uniform1i(e.getUniformLocation(this.program,`uAffiliation`),2),e.uniform1i(e.getUniformLocation(this.program,`uEffect`),3),this.atlasTex=e.createTexture(),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.atlasTex),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([128,128,128,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.loadAtlas(),this.quadBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuf),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW);let o=e.createBuffer();this.groundBuf=new Bi(e,o,1024,el),this.groundVao=gl(e,this.quadBuf,o);let s=e.createBuffer();this.missileBuf=new Bi(e,s,512,el),this.missileVao=gl(e,this.quadBuf,s)}async loadAtlas(){let e=new Image;e.crossOrigin=`anonymous`,e.src=Jc,await e.decode();let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.atlasTex),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST)}emitGround(e,t,n,r,i){this.groundBuf.ensureCapacity(this.groundCount+1);let a=this.groundCount*el;this.groundBuf.float32[a+0]=e,this.groundBuf.float32[a+1]=t,this.groundBuf.float32[a+2]=n;let o=this.groundCount*tl;this.groundBuf.uint8[o+12]=r,this.groundBuf.uint8[o+13]=i,this.groundBuf.uint8[o+14]=hl(e,t),this.groundCount++}emitMissile(e,t,n,r,i){this.missileBuf.ensureCapacity(this.missileCount+1);let a=this.missileCount*el;this.missileBuf.float32[a+0]=e,this.missileBuf.float32[a+1]=t,this.missileBuf.float32[a+2]=n;let o=this.missileCount*tl;this.missileBuf.uint8[o+12]=r,this.missileBuf.uint8[o+13]=i,this.missileBuf.uint8[o+14]=hl(e,t),this.missileCount++}setFrameTick(e){this.frameTick=e}updateUnits(e,t){t!==this.lastGameTick&&(this.lastGameTick=t,this.lastUnitsUpdateMs=performance.now()),this.groundCount=0,this.missileCount=0,this.smoothSegs.length=0;for(let t of e.values()){if(!t.isActive||t.waitTicks>0)continue;let e=this.typeToAtlasCol.get(t.unitType);if(e===void 0&&t.unitType===`Train`){let n=t.trainType;e=n===Gn.Engine||n===Gn.TailEngine?ll:t.loaded?dl:ul}if(e===void 0)continue;let n=t.unitType===`Warship`&&t.retreating,r=t.unitType===`Warship`&&t.targetUnitId!==null,i=fl.has(t.unitType),a=nl;if(t.unitType===`Trade Ship`&&t.targetUnitId!==null&&this.localPlayerID>0){let e=this.structures.get(t.targetUnitId);if(e){let n=e.ownerID;t.ownerID===this.localPlayerID||n===this.localPlayerID?a=cl:(this.friendlyOwners.has(t.ownerID)||this.friendlyOwners.has(n))&&(a=al)}}let o=nl;a===nl?n?o=ol:r?o=il:i&&(o=t.targetable?rl:sl):o=a;let s=pl.has(t.unitType),c=t.pos%this.mapW,l=(t.pos-c)/this.mapW;if(s){if(fr.has(t.unitType)&&t.lastPos!==t.pos){let e=t.lastPos%this.mapW,n=(t.lastPos-e)/this.mapW;this.smoothSegs.push(this.missileCount,e,n,c,l)}if(this.emitMissile(c,l,t.ownerID,e,o),t.unitType===`Shell`&&t.lastPos!==t.pos){let n=t.lastPos%this.mapW,r=(t.lastPos-n)/this.mapW;this.emitMissile(n,r,t.ownerID,e,o)}}else this.emitGround(c,l,t.ownerID,e,o)}let n=this.gl;this.groundCount>0&&(n.bindBuffer(n.ARRAY_BUFFER,this.groundBuf.buffer),n.bufferSubData(n.ARRAY_BUFFER,0,this.groundBuf.float32,0,this.groundCount*el)),this.missileCount>0&&(n.bindBuffer(n.ARRAY_BUFFER,this.missileBuf.buffer),n.bufferSubData(n.ARRAY_BUFFER,0,this.missileBuf.float32,0,this.missileCount*el))}setAltView(e){this.altView=e}setAffiliationTex(e){this.affiliationTex=e}setLocalPlayer(e){this.localPlayerID=e}setAllies(e){this.friendlyOwners=e}setStructures(e){this.structures=e}bindProgram(e){let t=this.gl;t.useProgram(this.program);let n=this.settings.unit;t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1f(this.uTick,this.frameTick),t.uniform1f(this.uTime,(performance.now()-this.startTime)/1e3),t.uniform1f(this.uUnitSize,n.unitSize),t.uniform1f(this.uFlickerSpeed,n.flickerSpeed),t.uniform3f(this.uAngryColor,n.angryR,n.angryG,n.angryB),t.uniform1i(this.uAltView,+!!this.altView);let r=this.settings.affiliation;t.uniform3f(this.uSelfColor,r.selfR,r.selfG,r.selfB),t.uniform3f(this.uAllyColor,r.allyR,r.allyG,r.allyB),t.uniform1f(this.uHBombGlowScale,n.hBombGlowScale),t.uniform3f(this.uHBombGlowColor,n.hBombGlowR,n.hBombGlowG,n.hBombGlowB),t.uniform1f(this.uHBombGlowStrength,n.hBombGlowStrength),t.uniform1f(this.uHBombGlowInner,n.hBombGlowInner),t.uniform1f(this.uUntargetableAlpha,n.untargetableAlpha),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.paletteTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.atlasTex),this.affiliationTex&&(t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.affiliationTex)),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,this.effectTex)}drawGround(e){if(this.groundCount===0)return;this.bindProgram(e);let t=this.gl;t.bindVertexArray(this.groundVao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.groundCount)}drawMissiles(e){if(this.missileCount===0)return;this.applyMissileSmoothing(),this.bindProgram(e);let t=this.gl;t.bindVertexArray(this.missileVao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.missileCount)}applyMissileSmoothing(){let e=this.smoothSegs;if(e.length===0)return;let t=Math.min(1,(performance.now()-this.lastUnitsUpdateMs)/this.tickIntervalMs),n=this.missileBuf.float32;for(let r=0;r<e.length;r+=ml){let i=e[r]*el;n[i+0]=e[r+1]+(e[r+3]-e[r+1])*t,n[i+1]=e[r+2]+(e[r+4]-e[r+2])*t}let r=this.gl;r.bindBuffer(r.ARRAY_BUFFER,this.missileBuf.buffer),r.bufferSubData(r.ARRAY_BUFFER,0,n,0,this.missileCount*el)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.groundBuf.dispose(),this.missileBuf.dispose(),e.deleteBuffer(this.quadBuf),e.deleteVertexArray(this.groundVao),e.deleteVertexArray(this.missileVao),e.deleteTexture(this.atlasTex)}},vl=`#version 300 es
precision highp float;

uniform sampler2D uAtlas;
uniform float uDistRange;

in vec2 vUV;
flat in float vAlpha;
flat in vec3 vColor;
flat in float vOutlineWidth;
out vec4 fragColor;

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  if (vAlpha <= 0.0) discard;

  vec3 msd = texture(uAtlas, vUV).rgb;
  float sd = median(msd.r, msd.g, msd.b);

  vec2 unitRange = uDistRange / vec2(textureSize(uAtlas, 0));
  vec2 screenTexSize = 1.0 / fwidth(vUV);
  float screenPxRange = max(0.5 * dot(unitRange, screenTexSize), 1.0);

  float screenPxDist = screenPxRange * (sd - 0.5);
  float fillAlpha = clamp(screenPxDist + 0.5, 0.0, 1.0);

  // Colored text with dark outline
  float maxOutline = max(screenPxRange * 0.5 - 1.0, 0.0);
  float effectiveOutline = min(vOutlineWidth, maxOutline);
  float outlineDist = screenPxDist + effectiveOutline;
  float outlineAlpha = clamp(outlineDist + 0.5, 0.0, 1.0);

  // Soft dark halo extending past the hard outline — easier to read over
  // busy terrain. Uses whatever SDF range is left after the hard outline so
  // it can always fade fully to zero before hitting the SDF saturation
  // boundary (otherwise the glow clips at the glyph quad and looks square).
  // Quadratic falloff for a true glow shape — brightest right next to the
  // text, smoothly thinning to nothing.
  float glowExtent = max(screenPxRange * 0.5 - effectiveOutline - 0.5, 0.0);
  float glowT =
    clamp((outlineDist + glowExtent) / max(glowExtent, 0.0001), 0.0, 1.0);
  float glowAlpha = glowExtent > 0.0 ? glowT * glowT * 0.75 : 0.0;

  vec3 color = mix(vec3(0.0), vColor, fillAlpha);
  fragColor = vec4(color, max(outlineAlpha, glowAlpha) * vAlpha);
}
`,yl=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

// Per-instance: worldX, worldY, cursorX, charCode
layout(location = 1) in vec4 aInst;
// Per-instance: alpha, colorR, colorG, colorB
layout(location = 2) in vec4 aStyle;
// Per-instance: scale, outlineWidth
layout(location = 3) in vec2 aScaleOutline;

uniform sampler2D uGlyphMetrics;  // CHAR_RANGE x 2, RGBA32F

uniform mat3  uCamera;
uniform float uFontSize;
uniform float uAtlasScaleH;
uniform float uBase;
uniform float uZoom;
uniform float uMinScreenScale;  // minimum world-scale factor when zoomed out

out vec2 vUV;
flat out float vAlpha;
flat out vec3 vColor;
flat out float vOutlineWidth;

void main() {
  float worldX  = aInst.x;
  float worldY  = aInst.y;
  float cursorX = aInst.z;
  int charCode  = int(aInst.w);

  if (charCode == 0 || aStyle.x <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlpha = 0.0;
    vColor = vec3(1.0);
    vOutlineWidth = 0.0;
    return;
  }

  // Per-instance scale (world units per font em).
  // Zoom-aware minimum: ensure popups don't shrink below minScreenScale when
  // zoomed out.  effectiveScale = max(scale, minScreenScale / zoom) so that
  // at low zoom the popup grows in world-space to maintain a minimum screen
  // footprint.
  float effectiveScale = max(aScaleOutline.x, uMinScreenScale / uZoom);
  float worldScale = effectiveScale / uFontSize;

  // Glyph metrics from data texture
  vec4 m0 = texelFetch(uGlyphMetrics, ivec2(charCode, 0), 0);
  vec4 m1 = texelFetch(uGlyphMetrics, ivec2(charCode, 1), 0);

  float glyphW = m0.w;
  float glyphH = m1.x;
  float u0 = m1.y;
  float v0 = m1.z;
  float u1 = m1.w;
  float v1 = v0 + glyphH / uAtlasScaleH;

  if (glyphW <= 0.0 || glyphH <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlpha = 0.0;
    vColor = vec3(1.0);
    vOutlineWidth = 0.0;
    return;
  }

  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  float baselineY = -uBase * 0.5;

  vec2 glyphOrigin = vec2(
    cursorX + m0.y,
    baselineY + m0.z
  ) * worldScale;

  vec2 glyphSize = vec2(glyphW, glyphH) * worldScale;

  vec2 worldPos = center + glyphOrigin + aPos * glyphSize;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
  vAlpha = aStyle.x;
  vColor = aStyle.yzw;
  vOutlineWidth = aScaleOutline.y;
}
`,bl=N(`atlases/msdf-atlas.png`),xl=10,Sl=xl*4,Cl=2500,wl=8,Tl=6,El=2,Dl=1.4,Ol=17,kl=1.2;function Al(e){return e>=1e6?(e/1e6).toFixed(1)+`M`:e>=1e3?(e/1e3).toFixed(1)+`K`:e.toString()}var jl=class{now(){return this.timeFn()}constructor(e,t,n){this.config=n,this.maxInstances=512,this.instanceCount=0,this.atlasTex=null,this.atlasReady=!1,this.charCodes=new Uint8Array(32),this.cursors=new Float32Array(32),this.active=[],this.ghostCostLabel=null,this.attackTroopLabels=[],this.mapW=0,this.timeFn=()=>performance.now(),this.gl=e,this.settings=t;let r=Va();this.glyph=Ha(r.chars),this.kernTable=new Int8Array(384*384),this.distanceRange=r.distanceRange,this.fontSize=r.fontSize,this.atlasScaleH=r.scaleH,this.base=r.base,this.program=H(e,yl,vl,`WorldTextPass`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),0),e.uniform1i(e.getUniformLocation(this.program,`uGlyphMetrics`),1),e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),this.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uAtlasScaleH`),this.atlasScaleH),e.uniform1f(e.getUniformLocation(this.program,`uBase`),this.base),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uMinScreenScale=e.getUniformLocation(this.program,`uMinScreenScale`),this.uDistRange=e.getUniformLocation(this.program,`uDistRange`),this.glyphMetricsTex=Ga(e,r),this.loadAtlas(),this.instanceData=new Float32Array(this.maxInstances*xl),this.instanceBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf),e.bufferData(e.ARRAY_BUFFER,this.instanceData.byteLength,e.DYNAMIC_DRAW),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,Sl,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,4,e.FLOAT,!1,Sl,16),e.vertexAttribDivisor(2,1),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,2,e.FLOAT,!1,Sl,32),e.vertexAttribDivisor(3,1),e.bindVertexArray(null)}loadAtlas(){let e=new Image;e.crossOrigin=`anonymous`,e.onload=()=>{let t=this.gl,n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),this.atlasTex=n,this.atlasReady=!0},e.src=bl}setMapWidth(e){this.mapW=e}applyConquestEvents(e){let t=this.now();for(let n of e){let e=t-(n.tickAge??0)*this.config.msPerTick();t-e>=Cl||this.active.push({x:n.x,y:n.y+wl,text:`+ `+Al(n.gold),startMs:e,lifetimeMs:Cl,riseSpeed:0,colorR:1,colorG:1,colorB:1,scale:Tl,outlineWidth:El})}}applyBonusEvents(e){if(this.mapW===0)return;let t=this.now(),n=this.settings.bonusPopup;for(let r of e){if(r.gold===0)continue;let e=r.tile%this.mapW,i=Math.floor(r.tile/this.mapW),a=r.gold>=0?`+`:`-`;this.active.push({x:e,y:i+n.yOffset,text:a+` `+Al(Math.abs(r.gold)),startMs:t,lifetimeMs:n.lifetimeMs,riseSpeed:n.riseSpeed,colorR:n.colorR,colorG:n.colorG,colorB:n.colorB,scale:n.scale,outlineWidth:n.outlineWidth})}}setGhostCostLabel(e){if(e===null){this.ghostCostLabel=null;return}let t=1,n=1,r=1;e.canAfford?e.canPlace||(t=.6,n=.6,r=.6):(n=.3,r=.3),this.ghostCostLabel={x:e.tileX,y:e.tileY,text:e.cost>0?Me(e.cost):``,topText:e.topText,colorR:t,colorG:n,colorB:r}}setAttackTroopLabels(e){this.attackTroopLabels=e}tick(e){if(this.active.length===0&&this.ghostCostLabel===null&&this.attackTroopLabels.length===0){this.instanceCount=0;return}let t=this.now();for(let e=this.active.length-1;e>=0;e--)t-this.active[e].startMs>=this.active[e].lifetimeMs&&(this.active[e]=this.active[this.active.length-1],this.active.pop());this.rebuildInstances(t,e)}rebuildInstances(e,t){let n=0,r=Qr();for(let t of this.active){let r=e-t.startMs,i=Math.max(0,1-r/t.lifetimeMs);if(i<=0)continue;let a=t.riseSpeed>0?t.y-r/1e3*t.riseSpeed:t.y;mo(t.text,this.glyph,this.kernTable,this.charCodes,this.cursors);let o=Math.min(t.text.length,32);for(let e=0;e<o;e++){if(this.charCodes[e]===0)continue;n>=this.maxInstances&&this.growBuffer();let r=n*xl;this.instanceData[r+0]=t.x,this.instanceData[r+1]=a,this.instanceData[r+2]=this.cursors[e],this.instanceData[r+3]=this.charCodes[e],this.instanceData[r+4]=i,this.instanceData[r+5]=t.colorR,this.instanceData[r+6]=t.colorG,this.instanceData[r+7]=t.colorB,this.instanceData[r+8]=t.scale,this.instanceData[r+9]=t.outlineWidth,n++}}let i=Ol*r/Math.max(t,1e-4);for(let e of this.attackTroopLabels){mo(e.text,this.glyph,this.kernTable,this.charCodes,this.cursors);let t=Math.min(e.text.length,32);for(let r=0;r<t;r++){if(this.charCodes[r]===0)continue;n>=this.maxInstances&&this.growBuffer();let t=n*xl;this.instanceData[t+0]=e.x,this.instanceData[t+1]=e.y,this.instanceData[t+2]=this.cursors[r],this.instanceData[t+3]=this.charCodes[r],this.instanceData[t+4]=1,this.instanceData[t+5]=e.colorR,this.instanceData[t+6]=e.colorG,this.instanceData[t+7]=e.colorB,this.instanceData[t+8]=i,this.instanceData[t+9]=kl,n++}}let a=this.ghostCostLabel;if(a){let e=1/Math.max(t,1e-4),i=this.settings.ghostCost.screenScale*r*e,o=a.y+this.settings.ghostCost.screenYOffset*r*e;if(a.topText){let t=a.y-30*r*e;mo(a.topText,this.glyph,this.kernTable,this.charCodes,this.cursors);let o=Math.min(a.topText.length,32);for(let e=0;e<o;e++){if(this.charCodes[e]===0)continue;n>=this.maxInstances&&this.growBuffer();let r=n*xl;this.instanceData[r+0]=a.x,this.instanceData[r+1]=t,this.instanceData[r+2]=this.cursors[e],this.instanceData[r+3]=this.charCodes[e],this.instanceData[r+4]=1,this.instanceData[r+5]=a.colorR,this.instanceData[r+6]=a.colorG,this.instanceData[r+7]=a.colorB,this.instanceData[r+8]=i,this.instanceData[r+9]=Dl,n++}}if(a.text){mo(a.text,this.glyph,this.kernTable,this.charCodes,this.cursors);let e=Math.min(a.text.length,32);for(let t=0;t<e;t++){if(this.charCodes[t]===0)continue;n>=this.maxInstances&&this.growBuffer();let e=n*xl;this.instanceData[e+0]=a.x,this.instanceData[e+1]=o,this.instanceData[e+2]=this.cursors[t],this.instanceData[e+3]=this.charCodes[t],this.instanceData[e+4]=1,this.instanceData[e+5]=a.colorR,this.instanceData[e+6]=a.colorG,this.instanceData[e+7]=a.colorB,this.instanceData[e+8]=i,this.instanceData[e+9]=Dl,n++}}}this.instanceCount=n}growBuffer(){this.maxInstances*=2;let e=new Float32Array(this.maxInstances*xl);e.set(this.instanceData),this.instanceData=e;let t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferData(t.ARRAY_BUFFER,this.instanceData.byteLength,t.DYNAMIC_DRAW)}draw(e,t){if(!this.atlasReady||this.instanceCount===0||t<this.settings.bonusPopup.cullZoom)return;let n=this.gl;n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform1f(this.uZoom,t);let r=Qr();n.uniform1f(this.uMinScreenScale,this.settings.bonusPopup.minScreenScale*r),n.uniform1f(this.uDistRange,this.distanceRange),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.atlasTex),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.glyphMetricsTex),n.bindBuffer(n.ARRAY_BUFFER,this.instanceBuf),n.bufferSubData(n.ARRAY_BUFFER,0,this.instanceData,0,this.instanceCount*xl),n.bindVertexArray(this.vao),n.drawArraysInstanced(n.TRIANGLES,0,6,this.instanceCount)}setTimeFn(e){this.timeFn=e}clear(){this.active.length=0,this.attackTroopLabels=[],this.instanceCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteBuffer(this.instanceBuf),e.deleteVertexArray(this.vao),e.deleteTexture(this.glyphMetricsTex),this.atlasTex&&e.deleteTexture(this.atlasTex)}},Ml=0,Nl=1,Pl=2,Fl=B(),Il=2,Ll=class{constructor(e,t){this.settings=t,this.cpuData=new Uint8Array(Fl*Il*4),this.dirty=!1,this.localPlayerID=0,this.relationData=null,this.relationSize=0,this.gl=e,this.rebuild(),this.tex=U(e,{width:Fl,height:Il,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:this.cpuData,filter:e.NEAREST}),this.dirty=!1}getTexture(){return this.tex}setLocalPlayer(e){e!==this.localPlayerID&&(this.localPlayerID=e,this.rebuild())}updateRelations(e,t){this.relationData=e,this.relationSize=t,this.rebuild()}flush(){if(!this.dirty)return;let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.tex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,Fl,Il,e.RGBA,e.UNSIGNED_BYTE,this.cpuData),this.dirty=!1}rebuild(){let e=this.cpuData,t=this.localPlayerID,n=this.relationData,r=this.relationSize,i=this.settings.affiliation,a=e=>Math.round(e*255),o=a(i.selfR),s=a(i.selfG),c=a(i.selfB),l=a(i.allyR),u=a(i.allyG),d=a(i.allyB),f=a(i.neutralR),p=a(i.neutralG),m=a(i.neutralB),h=a(i.enemyR),g=a(i.enemyG),_=a(i.enemyB);for(let i=0;i<Fl;i++){let a=Ml;n&&t>0&&i>0&&i<r&&t<r&&(a=n[t*r+i]);let v=i>0&&i===t,y=i*4;i===0?(e[y]=0,e[y+1]=0,e[y+2]=0,e[y+3]=0):v?(e[y]=o,e[y+1]=s,e[y+2]=c,e[y+3]=255):a===Nl?(e[y]=l,e[y+1]=u,e[y+2]=d,e[y+3]=255):a===Pl?(e[y]=h,e[y+1]=g,e[y+2]=_,e[y+3]=255):(e[y]=f,e[y+1]=p,e[y+2]=m,e[y+3]=255);let b=(Fl+i)*4;i===0?(e[b]=0,e[b+1]=0,e[b+2]=0,e[b+3]=0):v?(e[b]=o,e[b+1]=s,e[b+2]=c,e[b+3]=255):a===Nl?(e[b]=l,e[b+1]=u,e[b+2]=d,e[b+3]=255):(e[b]=h,e[b+1]=g,e[b+2]=_,e[b+3]=255)}this.dirty=!0}dispose(){this.gl.deleteTexture(this.tex)}};function Rl(e,t,n,r,i){return{tileTex:U(e,{width:t,height:n,internalFormat:e.R16UI,format:e.RED_INTEGER,type:e.UNSIGNED_SHORT,data:null,filter:e.NEAREST}),trailTex:U(e,{width:t,height:n,internalFormat:e.R16UI,format:e.RED_INTEGER,type:e.UNSIGNED_SHORT,data:null,filter:e.NEAREST}),paletteTex:r,borderTex:i,heatTexA:U(e,{width:t,height:n,internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),heatTexB:U(e,{width:t,height:n,internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST})}}function zl(e,t){e.deleteTexture(t.tileTex),e.deleteTexture(t.trailTex),e.deleteTexture(t.heatTexA),e.deleteTexture(t.heatTexB)}var Bl=`#version 300 es
precision highp float;
precision highp usampler2D;
uniform sampler2D uHeatTex;
uniform usampler2D uTileTex;
uniform usampler2D uPrevTileTex;
uniform vec2 uMapSize;
uniform float uDecay;
out vec4 fragColor;
void main() {
  ivec2 tc = ivec2(gl_FragCoord.xy);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  float heat = texelFetch(uHeatTex, tc, 0).r;
  uint curr = texelFetch(uTileTex, tc, 0).r;
  uint prev = texelFetch(uPrevTileTex, tc, 0).r;

  bool wasFallout = (prev & (1u << FALLOUT_BIT)) != 0u;
  bool isFallout  = (curr & (1u << FALLOUT_BIT)) != 0u;

  if (isFallout && !wasFallout) {
    heat = 1.0;
  } else if (!isFallout && wasFallout) {
    heat = 0.0;
  } else {
    heat = max(0.0, heat - uDecay / 255.0);
  }

  fragColor = vec4(heat, 0.0, 0.0, 1.0);
}
`,Vl=class{constructor(e,t,n,r,i,a,o){this.heatCurrent=0,this.needsPrevTileCopy=!0,this.pendingDecay=0,this.heatActive=!1,this.decayAccumulated=0,this.gl=e,this.settings=o,this.mapW=t,this.mapH=n,this.tileTex=r,this.heatTexA=i,this.heatTexB=a,this.heatFboA=this.createFboFor(i),this.heatFboB=this.createFboFor(a),this.prevTileTex=U(e,{width:t,height:n,internalFormat:e.R16UI,format:e.RED_INTEGER,type:e.UNSIGNED_SHORT,data:null,filter:e.NEAREST}),this.prevTileFbo=this.createFboFor(this.prevTileTex),this.tileTexReadFbo=this.createFboFor(r),this.decayProg=H(e,di,W(Bl,mi),`HeatManager`),this.uDecayMapSize=e.getUniformLocation(this.decayProg,`uMapSize`),this.uDecayAmount=e.getUniformLocation(this.decayProg,`uDecay`),e.useProgram(this.decayProg),e.uniform1i(e.getUniformLocation(this.decayProg,`uHeatTex`),0),e.uniform1i(e.getUniformLocation(this.decayProg,`uTileTex`),1),e.uniform1i(e.getUniformLocation(this.decayProg,`uPrevTileTex`),2),this.quadVao=Vr(e)}createFboFor(e){let t=this.gl,n=t.createFramebuffer();return t.bindFramebuffer(t.FRAMEBUFFER,n),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),t.bindFramebuffer(t.FRAMEBUFFER,null),n}get heatReadTex(){return this.heatCurrent===0?this.heatTexA:this.heatTexB}get heatWriteFbo(){return this.heatCurrent===0?this.heatFboB:this.heatFboA}swapHeat(){this.heatCurrent=1-this.heatCurrent}getHeatTex(){return this.heatReadTex}updateHeat(){let e=this.gl,t=this.mapW,n=this.mapH;if(this.needsPrevTileCopy){this.blitTileToPrev(),this.needsPrevTileCopy=!1,e.bindFramebuffer(e.FRAMEBUFFER,null);return}if(!this.heatActive){this.pendingDecay=0;return}e.bindFramebuffer(e.FRAMEBUFFER,this.heatWriteFbo),e.viewport(0,0,t,n),e.disable(e.BLEND),e.useProgram(this.decayProg),e.uniform2f(this.uDecayMapSize,t,n),e.uniform1f(this.uDecayAmount,this.pendingDecay),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.heatReadTex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.prevTileTex),e.bindVertexArray(this.quadVao),e.drawArrays(e.TRIANGLES,0,6),this.swapHeat(),this.decayAccumulated+=this.pendingDecay,this.decayAccumulated>=255&&(this.heatActive=!1),this.pendingDecay=0,this.blitTileToPrev(),e.bindFramebuffer(e.FRAMEBUFFER,null)}blitTileToPrev(){let e=this.gl;e.bindFramebuffer(e.READ_FRAMEBUFFER,this.tileTexReadFbo),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this.prevTileFbo),e.blitFramebuffer(0,0,this.mapW,this.mapH,0,0,this.mapW,this.mapH,e.COLOR_BUFFER_BIT,e.NEAREST)}decayHeat(){this.pendingDecay+=this.settings.falloutBloom.heatDecayPerTick}activate(){this.heatActive=!0,this.decayAccumulated=0}dispose(){let e=this.gl;e.deleteProgram(this.decayProg),e.deleteFramebuffer(this.heatFboA),e.deleteFramebuffer(this.heatFboB),e.deleteFramebuffer(this.prevTileFbo),e.deleteFramebuffer(this.tileTexReadFbo),e.deleteTexture(this.prevTileTex),e.deleteVertexArray(this.quadVao)}},Hl=new Set([`Missile Silo`,`SAM Launcher`,`City`,`Atom Bomb`,`Hydrogen Bomb`]),Ul=new Set([`SAM Launcher`,`Atom Bomb`,`Hydrogen Bomb`]),Wl=`renderer:grid_view_enabled`,Gl=class{constructor(e,t,n,r,i,a,o=requestAnimationFrame.bind(window),s=cancelAnimationFrame.bind(window)){this.inSpawnPhase=!1,this.mapLayerPasses=new Map,this.terrainBytesTex=null,this.storedLayers=[],this.storedLayerImages=new Map,this.animId=null,this.frameTick=0,this.mapW=0,this.mapH=0,this.lastUnits=new Map,this.lastStructures=new Map,this.localPlayerID=0,this.playerTeams=new Map,this.altView=!1,this.gridView=!1,this.samGhostVisible=!1,this.samHighlightVisible=!1,this.selectedUnitIds=[],this.selectionBoxEntries=[],this.renderLoop=()=>{this.draw(),this.animId=this.raf(this.renderLoop)},this.canvas=e,this.settings=a,this.raf=o,this.caf=s;let c=Jr(e,{alpha:!1,antialias:!1,powerPreference:`high-performance`});if(c.gl===null)throw new Yr(c.status,c.renderer);this.glLimited=c.status===`limited`?{renderer:c.renderer,maxTextureSize:c.maxTextureSize}:null;let l=c.gl;this.gl=l,l.pixelStorei(l.UNPACK_ALIGNMENT,1),l.getExtension(`EXT_color_buffer_float`)||console.warn(`EXT_color_buffer_float not available — palette may fail`);let u=t.mapWidth,d=t.mapHeight;this.mapW=u,this.mapH=d,this.camera=new ri(u,d);let f=n();this.terrainPass=new Ic(l,n,f,u,d,{backgroundColor:V(this.settings.terrain.backgroundColor)??void 0,oceanColor:V(this.settings.terrain.oceanColor)??void 0,sandColor:V(this.settings.terrain.sandColor)??void 0,plainsColor:V(this.settings.terrain.plainsColor)??void 0,highlandColor:V(this.settings.terrain.highlandColor)??void 0,mountainColor:V(this.settings.terrain.mountainColor)??void 0}),this.terrainBytesTex=U(l,{width:u,height:d,internalFormat:l.R8UI,format:l.RED_INTEGER,type:l.UNSIGNED_BYTE,data:f,filter:l.NEAREST}),this.paletteData=r;let p=B();this.paletteTex=U(l,{width:p,height:2,internalFormat:l.RGBA32F,format:l.RGBA,type:l.FLOAT,data:r,filter:l.NEAREST}),this.effectTex=U(l,{width:p,height:48,internalFormat:l.RGBA32F,format:l.RGBA,type:l.FLOAT,data:new Float32Array(p*48*4),filter:l.NEAREST}),this.patternMetaTex=U(l,{width:p,height:1,internalFormat:l.RGBA32F,format:l.RGBA,type:l.FLOAT,data:new Float32Array(p*4),filter:l.NEAREST}),this.patternDataTex=U(l,{width:1024,height:p,internalFormat:l.R8UI,format:l.RED_INTEGER,type:l.UNSIGNED_BYTE,data:new Uint8Array(p*1024),filter:l.NEAREST}),this.skinLayerCpu=new Uint8Array(p),this.skinLayerTex=U(l,{width:p,height:1,internalFormat:l.R8UI,format:l.RED_INTEGER,type:l.UNSIGNED_BYTE,data:this.skinLayerCpu,filter:l.NEAREST}),this.skinAnchorCpu=new Uint16Array(p*2),this.skinAnchorTex=U(l,{width:p,height:1,internalFormat:l.RG16UI,format:l.RG_INTEGER,type:l.UNSIGNED_SHORT,data:this.skinAnchorCpu,filter:l.NEAREST}),this.skinAtlas=new Ls(l,[],()=>{}),this.res=Rl(l,u,d,this.paletteTex,null),this.borderPass=new bi(l,u,d,this.res.tileTex,this.settings),this.res.borderTex=this.borderPass.getBorderTex(),this.defenseCoveragePass=new Gi(l,u,d,this.res.tileTex,this.settings),this.heatManager=new Vl(l,u,d,this.res.tileTex,this.res.heatTexA,this.res.heatTexB,this.settings),this.territoryPass=new Uc(l,u,d,this.res.tileTex,this.paletteTex,this.patternMetaTex,this.patternDataTex,this.skinAtlas.texture,this.skinLayerTex,this.skinAnchorTex,this.settings),this.territoryPass.setBorderPatchConsumer((e,t,n,r)=>{this.borderPass.patchTile(e,t,n,r),this.defenseCoveragePass.markTileDirty(e,t)}),this.territoryPass.setDefenseCoverageTex(this.defenseCoveragePass.getCoverageTex()),this.territoryPass.setBorderTex(this.res.borderTex),this.spawnOverlayPass=new Qs(l,u,d,this.res.tileTex,this.settings.spawnOverlay),this.smallPlayerGlowPass=new Us(l,u,d,this.res.tileTex,this.settings.smallPlayerGlow),this.trailPass=new Gc(l,u,d,this.res.trailTex,this.paletteTex,this.effectTex,this.settings),this.spiralRibbonPass=new dc(l,this.settings),this.borderStampPass=new Ci(l,u,d,this.res.tileTex,this.paletteTex,this.res.borderTex,this.settings),this.borderStampPass.setDefenseCoverageTex(this.defenseCoveragePass.getCoverageTex()),this.bloomPass=new Qi(l,u,d,this.res.tileTex,this.heatManager,this.settings),this.pointLightPass=new Wo(l,t,r,this.settings,i),this.falloutLightPass=new na(l,u,d,this.res.tileTex,this.heatManager,this.settings),this.lightmapPass=new Aa(l,u,d,this.pointLightPass,this.falloutLightPass,this.settings),this.nightCompositePass=new Co(l,this.settings),this.railroadPass=new es(l,u,d,this.res.tileTex,this.paletteTex,this.effectTex,f,this.settings),this.rangeCirclePass=new rs(l),this.samRadiusPass=new js(l,u,this.settings),this.samRadiusPass.setPaletteData(r),this.crosshairPass=new zi(l),this.structurePass=new Nc(l,t,this.paletteTex,this.effectTex,this.settings),this.structureLevelPass=new Tc(l,t,this.settings),this.unitPass=new _l(l,t,this.paletteTex,this.effectTex,this.settings,i),this.namePass=new xo(l,t,r,this.settings,i),this.fxPass=new ka(l,t,this.settings,i),this.barPass=new li(l,t,this.settings,i),this.worldTextPass=new jl(l,this.settings,i),this.worldTextPass.setMapWidth(this.mapW),this.selectionBoxPass=new Fs(l),this.moveIndicatorPass=new Ia(l,this.settings),this.nukeTrajectoryPass=new Fo(l,this.settings),this.nukeTelegraphPass=new Do(l,this.settings);let m=l.createTexture();l.bindTexture(l.TEXTURE_2D,m),l.texImage2D(l.TEXTURE_2D,0,l.RGBA8,1,1,0,l.RGBA,l.UNSIGNED_BYTE,null),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE);let h=l.createFramebuffer();l.bindFramebuffer(l.FRAMEBUFFER,h),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,m,0),l.bindFramebuffer(l.FRAMEBUFFER,null),this.sceneTarget={fbo:h,tex:m,w:1,h:1},this.affiliationPalette=new Ll(l,this.settings);let g=this.affiliationPalette.getTexture();this.borderStampPass.setAffiliationTex(g),this.territoryPass.setAffiliationTex(g),this.unitPass.setAffiliationTex(g),this.structurePass.setAffiliationTex(g),this.trailPass.setAffiliationTex(g),this.coordinateGridPass=new Mi(l,u,d,this.settings);try{this.gridView=window.localStorage.getItem(Wl)===`true`}catch{this.setGridView(!1)}for(let e of t.players)e.team!==null&&this.playerTeams.set(e.smallID,e.team);this.territoryPass.setTeamMode(this.playerTeams.size>0),this.startLoop()}startLoop(){this.animId??=this.raf(this.renderLoop)}stopLoop(){this.animId!==null&&(this.caf(this.animId),this.animId=null)}resize(e,t){let n=Qr();this.canvas.width=Math.round(e*n),this.canvas.height=Math.round(t*n),this.camera.resize(e,t)}setCameraState(e,t,n){this.camera.setCameraState(e,t,n)}uploadTileAndTrailState(e,t){this.territoryPass.setLiveRef(e),this.trailPass.setLiveRef(t)}uploadLiveDelta(e,t){this.territoryPass.applyLiveDelta(e,t)}uploadLiveTrailDelta(e,t,n){this.trailPass.applyLiveDelta(e,t,n)}updateSpiralRibbons(e){this.spiralRibbonPass.updateRibbons(e)}updatePalette(e){let t=this.gl;this.paletteData.set(e),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.paletteTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,B(),2,t.RGBA,t.FLOAT,this.paletteData),this.samRadiusPass.setPaletteData(this.paletteData),this.namePass.refreshPlayerColors(this.paletteData)}updateEffectPalette(e){let t=this.gl;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.effectTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,B(),48,t.RGBA,t.FLOAT,e)}addPlayers(e,t,n,r){this.updatePalette(t),this.uploadPatterns(n,r),this.namePass.addPlayers(e,this.paletteData);for(let t of e)t.team!==null&&this.playerTeams.set(t.smallID,t.team);this.territoryPass.setTeamMode(this.playerTeams.size>0)}updatePlayerCosmetics(e,t,n,r){this.updatePalette(t),this.uploadPatterns(n,r),this.namePass.updatePlayerCosmetics(e)}uploadPatterns(e,t){let n=this.gl,r=B();n.bindTexture(n.TEXTURE_2D,this.patternMetaTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,r,1,n.RGBA,n.FLOAT,e),n.bindTexture(n.TEXTURE_2D,this.patternDataTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,1024,r,n.RED_INTEGER,n.UNSIGNED_BYTE,t)}setPlayerSpawn(e,t,n){let r=e*2;this.skinAnchorCpu[r]=t,this.skinAnchorCpu[r+1]=n;let i=this.gl;i.bindTexture(i.TEXTURE_2D,this.skinAnchorTex),i.texSubImage2D(i.TEXTURE_2D,0,0,0,B(),1,i.RG_INTEGER,i.UNSIGNED_SHORT,this.skinAnchorCpu)}initSkinAtlas(e){this.skinAtlas.dispose(),this.skinAtlas=new Ls(this.gl,e,()=>{}),this.territoryPass.setSkinAtlas(this.skinAtlas.texture)}setPlayerSkin(e,t){let n=-1;t!==null&&(n=this.skinAtlas.getLayer(t),n<0)||(this.skinLayerCpu[e]=n+1,this.uploadSkinLayerTex())}uploadSkinLayerTex(){let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.skinLayerTex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,B(),1,e.RED_INTEGER,e.UNSIGNED_BYTE,this.skinLayerCpu)}uploadRailroadState(e){this.railroadPass.uploadRailroadState(e)}updateUnits(e,t){this.lastUnits=e,this.frameTick++,this.unitPass.setFrameTick(this.frameTick),this.unitPass.updateUnits(e,t),this.samRadiusPass.setTick(t),this.barPass.updateBars(e,this.lastStructures,t),this.pointLightPass.updateLights(e),this.heatManager.decayHeat()}updateNames(e,t,n,r){if(this.namePass.updateNames(e,t,n,r),this.localPlayerID>0){let e=t.get(this.localPlayerID),n=new Set(e?.allies??[]),r=this.playerTeams.get(this.localPlayerID);if(r!==void 0)for(let[e,t]of this.playerTeams)t===r&&e!==this.localPlayerID&&n.add(e);this.samRadiusPass.setAllies(n),this.unitPass.setAllies(n)}}refreshNames(e){this.namePass.refreshNames(e)}updateRelations(e,t){this.borderPass.updateRelations(e,t),this.affiliationPalette.updateRelations(e,t)}updateStructures(e){this.lastStructures=e,this.structurePass.updateStructures(e),this.structureLevelPass.updateStructures(e),this.samRadiusPass.updateStructures(e),this.unitPass.setStructures(e);let t=[],n=this.mapW;for(let r of e.values())r.unitType===`Defense Post`&&!r.underConstruction&&t.push({x:r.pos%n,y:(r.pos-r.pos%n)/n,ownerID:r.ownerID});this.defenseCoveragePass.updateDefensePosts(t)}applyDeadUnits(e){e.length>0&&this.fxPass.applyDeadUnits(e)}applyRailroadDust(e){e.length>0&&this.fxPass.applyRailroadDust(e)}applyTerrainRects(e,t){if(e.length===0||(this.terrainPass.applyTerrainRects(e,t),this.railroadPass.applyTerrainRects(e,t),!this.terrainBytesTex))return;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.terrainBytesTex),n.pixelStorei(n.UNPACK_ALIGNMENT,1);let r=0;for(let i of e)n.texSubImage2D(n.TEXTURE_2D,0,i.x,i.y,i.w,i.h,n.RED_INTEGER,n.UNSIGNED_BYTE,t,r),r+=i.w*i.h}rebuildTerrain(){this.terrainPass.setTerrainColors({backgroundColor:V(this.settings.terrain.backgroundColor)??void 0,oceanColor:V(this.settings.terrain.oceanColor)??void 0,sandColor:V(this.settings.terrain.sandColor)??void 0,plainsColor:V(this.settings.terrain.plainsColor)??void 0,highlandColor:V(this.settings.terrain.highlandColor)??void 0,mountainColor:V(this.settings.terrain.mountainColor)??void 0})}applyConquestEvents(e){e.length>0&&(this.fxPass.applyConquestEvents(e),this.worldTextPass.applyConquestEvents(e))}setAttackTroopLabels(e){this.worldTextPass.setAttackTroopLabels(e)}applyBonusEvents(e){if(e.length===0)return;let t=this.localPlayerID>0?e.filter(e=>e.smallID===this.localPlayerID):e;t.length>0&&this.worldTextPass.applyBonusEvents(t)}triggerBlockedFlash(e,t){this.crosshairPass.triggerBlockedFlash(e,t)}updateAttackRings(e){this.fxPass.updateAttackRings(e)}updateGhostPreview(e){this.structurePass.updateGhostPreview(e),this.railroadPass.updateGhostPreview(e),this.rangeCirclePass.updateGhostPreview(e),this.crosshairPass.updateGhostPreview(e);let t=e?.multiplier&&e.multiplier>1?v(`build_menu.upgrade_amount`,{amount:e.multiplier.toString()}):void 0,n=e!==null&&e.showCost&&e.cost>0;this.worldTextPass.setGhostCostLabel(e&&(n||t!==void 0)?{tileX:e.tileX,tileY:e.tileY,cost:n?e.cost:0,canAfford:e.canAfford,canPlace:e.canBuild||e.canUpgrade,topText:t}:null),this.samGhostVisible=e!==null&&Hl.has(e.ghostType),this.samRadiusPass.setVisible(this.samGhostVisible||this.samHighlightVisible)}updateNukeTrajectory(e){this.nukeTrajectoryPass.update(e)}updateNukeTelegraphs(e){this.nukeTelegraphPass.update(e)}updateSpawnOverlay(e,t){this.inSpawnPhase=e,this.spawnOverlayPass.update(t)}updateSmallPlayerGlow(e){this.smallPlayerGlowPass.update(e)}setHighlightOwner(e){this.borderPass.setHighlightOwner(e),this.territoryPass.setHighlightOwner(e),this.namePass.setHighlightOwner(e),this.structurePass.setHighlightOwner(e),this.railroadPass.setHighlightOwner(e)}setMouseWorldPos(e,t){this.namePass.setMouseWorldPos(e,t)}setHighlightStructureTypes(e){this.structurePass.setHighlightTypes(e),this.structureLevelPass.setHighlightTypes(e),this.samHighlightVisible=e!==null&&e.some(e=>Ul.has(e)),this.samRadiusPass.setVisible(this.samGhostVisible||this.samHighlightVisible)}setLocalPlayerID(e){e!==this.localPlayerID&&(this.localPlayerID=e,this.samRadiusPass.setLocalPlayer(e),this.structurePass.setLocalPlayer(e),this.affiliationPalette.setLocalPlayer(e),this.unitPass.setLocalPlayer(e),this.railroadPass.setLocalPlayer(e))}setLocalRailColor(e,t,n){this.railroadPass.setLocalRailColor(e,t,n)}setSAMAllianceClusters(e){this.samRadiusPass.setAllianceClusters(e)}setAltView(e){this.altView=e,this.territoryPass.setAltView(e),this.borderStampPass.setAltView(e),this.unitPass.setAltView(e),this.structurePass.setAltView(e),this.trailPass.setAltView(e)}setGridView(e){this.gridView=e;try{window.localStorage.setItem(Wl,e?`true`:`false`)}catch{}}getSettings(){return this.settings}setSelectedUnits(e){this.selectedUnitIds.length=0;for(let t=0;t<e.length;t++)this.selectedUnitIds.push(e[t]);this.selectedUnitIds.length===0&&this.selectionBoxPass.hide()}updateSelectionBox(){if(this.selectedUnitIds.length===0)return;let e=this.selectionBoxEntries;e.length=0;let t=0;for(let n=0;n<this.selectedUnitIds.length;n++){let r=this.selectedUnitIds[n],i=this.lastUnits.get(r);if(!i||!i.isActive)continue;this.selectedUnitIds[t++]=r;let a=i.pos%this.mapW,o=Math.floor(i.pos/this.mapW),s=i.ownerID*4,c=Math.min(1,this.paletteData[s]+(1-this.paletteData[s])*.3),l=Math.min(1,this.paletteData[s+1]+(1-this.paletteData[s+1])*.3),u=Math.min(1,this.paletteData[s+2]+(1-this.paletteData[s+2])*.3);e.push({centerX:a,centerY:o,r:c,g:l,b:u})}this.selectedUnitIds.length=t,this.selectionBoxPass.setSelections(e)}showMoveIndicator(e,t,n){let r=n*4,i=Math.min(1,this.paletteData[r]+(1-this.paletteData[r])*.3),a=Math.min(1,this.paletteData[r+1]+(1-this.paletteData[r+1])*.3),o=Math.min(1,this.paletteData[r+2]+(1-this.paletteData[r+2])*.3);this.moveIndicatorPass.show(e,t,i,a,o)}draw(){this.uploadTextures(),this.computeTextures(),this.renderFrame()}uploadTextures(){this.altView&&this.affiliationPalette.flush(),this.inSpawnPhase?this.territoryPass.flushAllDripBuckets():this.territoryPass.drainDripBucket(),this.territoryPass.flushTileTexture()===`full`&&(this.borderPass.markGlobalDirty(),this.defenseCoveragePass.markDirty()),this.territoryPass.consumeFalloutTouched()&&this.heatManager.activate(),this.trailPass.flushTexture(),this.heatManager.updateHeat()}computeTextures(){this.settings.passEnabled.borderCompute&&this.borderPass.draw(),this.defenseCoveragePass.draw()}renderFrame(){let e=this.camera.getMatrix(),t=this.camera.zoom,n=this.canvas.width,r=this.canvas.height;if(this.isLightCompositingActive()){this.resizeSceneTargetIfNeeded(n,r);let t=Hr(this.gl,this.sceneTarget,()=>this.drawBaseLayer(e)),i=this.lightmapPass.draw(e,n,r,this.frameTick);Ur(this.gl,n,r,()=>this.nightCompositePass.draw(t,i))}else Ur(this.gl,n,r,()=>this.drawBaseLayer(e));this.renderOverlays(e,t)}isLightCompositingActive(){return this.settings.lighting.enabled}resizeSceneTargetIfNeeded(e,t){if(this.sceneTarget.w===e&&this.sceneTarget.h===t)return;this.sceneTarget.w=e,this.sceneTarget.h=t;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.sceneTarget.tex),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null)}drawBaseLayer(e){let t=this.gl,n=this.settings.passEnabled,[r,i,a]=V(this.settings.terrain.backgroundColor)??[60,60,60];t.clearColor(r/255,i/255,a/255,1),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.BLEND),n.terrain&&this.terrainPass.draw(e),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA);for(let t of this.mapLayerPasses.values())t.draw(e);n.territory&&this.territoryPass.draw(e)}renderOverlays(e,t){let n=this.gl,r=this.settings.passEnabled;n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),this.spawnOverlayPass.draw(e),r.borderStamp&&this.borderStampPass.draw(e),r.railroad&&this.railroadPass.draw(e,t),r.unit&&this.unitPass.drawGround(e),r.falloutBloom&&this.bloomPass.draw(e,this.frameTick),this.samRadiusPass.draw(e),this.rangeCirclePass.draw(e),this.nukeTrajectoryPass.draw(e),this.crosshairPass.draw(e),r.structure&&this.structurePass.draw(e,t),r.structure&&this.structureLevelPass.draw(e,t),this.smallPlayerGlowPass.draw(e),r.bar&&this.barPass.draw(e),this.updateSelectionBox(),this.selectionBoxPass.draw(e,this.frameTick),this.moveIndicatorPass.draw(e,t),this.nukeTelegraphPass.draw(e),r.trail&&this.trailPass.draw(e),this.altView||this.spiralRibbonPass.draw(e),r.unit&&this.unitPass.drawMissiles(e),r.fx&&(this.fxPass.tick(),this.fxPass.draw(e,t)),(this.gridView||this.altView)&&this.coordinateGridPass.draw(e,t),r.name&&!this.altView&&this.namePass.draw(e,this.nightCompositePass.getAmbient()),this.worldTextPass.tick(t),this.worldTextPass.draw(e,t),n.disable(n.BLEND)}setMapLayers(e,t){for(let e of this.mapLayerPasses.values())e.dispose();if(this.mapLayerPasses.clear(),this.storedLayers=e,this.storedLayerImages=t,!this.terrainBytesTex)return;let n=this.gl;for(let r of e){let e=t.get(r.id);if(!e){console.warn(`[Renderer] Layer image "${r.id}" not found`);continue}let i=+(r.placement===`water`),a=new Na(n,this.terrainBytesTex,e,this.mapW,this.mapH,i,r.nukeable??!1);this.mapLayerPasses.set(r.id,a)}}setLayerVisible(e,t){this.mapLayerPasses.get(e)?.setVisible(t)}setLayerAlpha(e,t){this.mapLayerPasses.get(e)?.setAlpha(t)}markLayerTilesDestroyed(e,t){this.mapLayerPasses.get(e)?.markTilesDestroyed(t)}setLayerDestroyedMask(e,t){this.mapLayerPasses.get(e)?.updateDestroyedMask(t)}dispose({releaseContext:e=!0}={}){this.stopLoop();for(let e of this.mapLayerPasses.values())e.dispose();this.mapLayerPasses.clear(),this.terrainBytesTex&&=(this.gl.deleteTexture(this.terrainBytesTex),null),this.terrainPass.dispose(),this.territoryPass.dispose(),this.trailPass.dispose(),this.spiralRibbonPass.dispose(),this.borderStampPass.dispose(),this.borderPass.dispose(),this.defenseCoveragePass.dispose(),this.bloomPass.dispose(),this.pointLightPass.dispose(),this.falloutLightPass.dispose(),this.lightmapPass.dispose(),this.nightCompositePass.dispose(),this.heatManager.dispose(),this.affiliationPalette.dispose(),this.coordinateGridPass.dispose(),this.spawnOverlayPass.dispose(),this.smallPlayerGlowPass.dispose(),this.railroadPass.dispose(),this.rangeCirclePass.dispose(),this.samRadiusPass.dispose(),this.crosshairPass.dispose(),this.structurePass.dispose(),this.structureLevelPass.dispose(),this.unitPass.dispose(),this.namePass.dispose(),this.fxPass.dispose(),this.worldTextPass.dispose(),this.selectionBoxPass.dispose(),this.moveIndicatorPass.dispose(),this.nukeTrajectoryPass.dispose(),this.nukeTelegraphPass.dispose(),this.barPass.dispose(),zl(this.gl,this.res),this.gl.deleteTexture(this.paletteTex),this.gl.deleteTexture(this.effectTex),this.gl.deleteTexture(this.patternMetaTex),this.gl.deleteTexture(this.patternDataTex),this.gl.deleteTexture(this.skinLayerTex),this.gl.deleteTexture(this.skinAnchorTex),this.skinAtlas.dispose(),this.gl.deleteFramebuffer(this.sceneTarget.fbo),this.gl.deleteTexture(this.sceneTarget.tex),this.lastUnits=new Map,this.lastStructures=new Map,e&&this.gl.getExtension(`WEBGL_lose_context`)?.loseContext()}},Kl=class{constructor(e,t,n,r,i,a,o,s){this.canvas=e,this.header=t,this.terrainSource=n,this.paletteData=r,this.config=i,this.settings=a,this.raf=o,this.caf=s,this.renderer=null,this.resizeObs=null,this.storedLayers=[],this.storedLayerImages=new Map,this.layerVisibility=new Map,this.layerAlpha=new Map,this.layerDestroyedMasks=new Map,this.onContextRestored=null,this.initRenderer=()=>{this.renderer=new Gl(this.canvas,this.header,this.terrainSource,this.paletteData,this.config,this.settings,this.raf,this.caf);let e=this.canvas.getBoundingClientRect();e.width>0&&this.renderer.resize(e.width,e.height)},this.handleContextLost=e=>{e.preventDefault(),console.warn(`[Renderer] WebGL context lost — awaiting restore`),this.renderer&&=(this.renderer.dispose({releaseContext:!1}),null)},this.handleContextRestored=()=>{console.warn(`[Renderer] WebGL context restored`);try{this.initRenderer()}catch(e){this.renderer=null,console.error(`[Renderer] context restore failed`,e);return}if(this.storedLayers.length>0&&this.storedLayerImages.size>0){this.renderer?.setMapLayers(this.storedLayers,this.storedLayerImages);for(let[e,t]of this.layerVisibility)this.renderer?.setLayerVisible(e,t);for(let[e,t]of this.layerAlpha)this.renderer?.setLayerAlpha(e,t);for(let[e,t]of this.layerDestroyedMasks)this.renderer?.setLayerDestroyedMask(e,t)}this.onContextRestored?.()},this.initRenderer(),this.resizeObs=new ResizeObserver(e=>{for(let t of e){let{width:e,height:n}=t.contentRect;e>0&&n>0&&this.renderer?.resize(e,n)}}),this.resizeObs.observe(e),e.addEventListener(`webglcontextlost`,this.handleContextLost,!1),e.addEventListener(`webglcontextrestored`,this.handleContextRestored,!1)}get glLimited(){return this.renderer?.glLimited??null}setCameraState(e,t,n){this.renderer?.setCameraState(e,t,n)}uploadLiveDelta(e,t){this.renderer?.uploadLiveDelta(e,t)}uploadLiveTrailDelta(e,t,n){this.renderer?.uploadLiveTrailDelta(e,t,n)}uploadTileAndTrailState(e,t){this.renderer?.uploadTileAndTrailState(e,t)}updateSpiralRibbons(e){this.renderer?.updateSpiralRibbons(e)}updatePalette(e){this.renderer?.updatePalette(e)}updateEffectPalette(e){this.renderer?.updateEffectPalette(e)}addPlayers(e,t,n,r){this.renderer?.addPlayers(e,t,n,r)}updatePlayerCosmetics(e,t,n,r){this.renderer?.updatePlayerCosmetics(e,t,n,r)}setPlayerSkin(e,t){this.renderer?.setPlayerSkin(e,t)}initSkinAtlas(e){this.renderer?.initSkinAtlas(e)}setPlayerSpawn(e,t,n){this.renderer?.setPlayerSpawn(e,t,n)}uploadRailroadState(e){this.renderer?.uploadRailroadState(e)}updateUnits(e,t){this.renderer?.updateUnits(e,t)}updateNames(e,t,n,r){this.renderer?.updateNames(e,t,n,r)}refreshNames(e){this.renderer?.refreshNames(e)}updateRelations(e,t){this.renderer?.updateRelations(e,t)}updateStructures(e){this.renderer?.updateStructures(e)}applyDeadUnits(e){this.renderer?.applyDeadUnits(e)}applyConquestEvents(e){this.renderer?.applyConquestEvents(e)}setAttackTroopLabels(e){this.renderer?.setAttackTroopLabels(e)}applyBonusEvents(e){this.renderer?.applyBonusEvents(e)}triggerBlockedFlash(e,t){this.renderer?.triggerBlockedFlash(e,t)}applyRailroadDust(e){this.renderer?.applyRailroadDust(e)}applyTerrainRects(e,t){this.renderer?.applyTerrainRects(e,t)}rebuildTerrain(){this.renderer?.rebuildTerrain()}updateAttackRings(e){this.renderer?.updateAttackRings(e)}updateGhostPreview(e){this.renderer?.updateGhostPreview(e)}updateNukeTrajectory(e){this.renderer?.updateNukeTrajectory(e)}updateNukeTelegraphs(e){this.renderer?.updateNukeTelegraphs(e)}updateSpawnOverlay(e,t){this.renderer?.updateSpawnOverlay(e,t)}updateSmallPlayerGlow(e){this.renderer?.updateSmallPlayerGlow(e)}setMapLayers(e,t){this.storedLayers=e,this.storedLayerImages=t,this.renderer?.setMapLayers(e,t);for(let[e,t]of this.layerDestroyedMasks)this.renderer?.setLayerDestroyedMask(e,t)}setLayerVisible(e,t){this.layerVisibility.set(e,t),this.renderer?.setLayerVisible(e,t)}setLayerAlpha(e,t){this.layerAlpha.set(e,t),this.renderer?.setLayerAlpha(e,t)}markLayerTilesDestroyed(e,t){let n=this.layerDestroyedMasks.get(e);n||(n=new Uint8Array(this.header.mapWidth*this.header.mapHeight),this.layerDestroyedMasks.set(e,n));for(let e of t)e>=0&&e<n.length&&(n[e]=1);this.renderer?.markLayerTilesDestroyed(e,t)}setLayerDestroyedMask(e,t){let n=this.layerDestroyedMasks.get(e);n?.length===t.length?n.set(t):this.layerDestroyedMasks.set(e,new Uint8Array(t)),this.renderer?.setLayerDestroyedMask(e,t)}setSelectedUnits(e){this.renderer?.setSelectedUnits(e)}showMoveIndicator(e,t,n){this.renderer?.showMoveIndicator(e,t,n)}setSAMAllianceClusters(e){this.renderer?.setSAMAllianceClusters(e)}setLocalPlayerID(e){this.renderer?.setLocalPlayerID(e)}setLocalRailColor(e,t,n){this.renderer?.setLocalRailColor(e,t,n)}setAltView(e){this.renderer?.setAltView(e)}setGridView(e){this.renderer?.setGridView(e)}setHighlightOwner(e){this.renderer?.setHighlightOwner(e)}setMouseWorldPos(e,t){this.renderer?.setMouseWorldPos(e,t)}setHighlightStructureTypes(e){this.renderer?.setHighlightStructureTypes(e)}getSettings(){return this.renderer?.getSettings()??{}}dispose(){this.resizeObs?.disconnect(),this.resizeObs=null,this.onContextRestored=null,this.renderer?.dispose(),this.canvas.removeEventListener(`webglcontextlost`,this.handleContextLost),this.canvas.removeEventListener(`webglcontextrestored`,this.handleContextRestored)}};function ql(e,t){if(t.name?.nameScaleFactor!==void 0&&(e.name.nameScaleFactor=t.name.nameScaleFactor),t.name?.cullThreshold!==void 0&&(e.name.cullThreshold=t.name.cullThreshold),t.name?.hoverFadeAlpha!==void 0&&(e.name.hoverFadeAlpha=t.name.hoverFadeAlpha),t.name?.hoverGlowWidth!==void 0&&(e.name.hoverGlowWidth=t.name.hoverGlowWidth),t.name?.hoverGlowAlpha!==void 0&&(e.name.hoverGlowAlpha=t.name.hoverGlowAlpha),t.cosmetics?.flagOpacity!==void 0&&(e.name.flagAlpha=t.cosmetics.flagOpacity),t.structure?.iconSize!==void 0&&(e.structure.iconSize=t.structure.iconSize),(t.structure?.classicIcons??!0)&&(e.structure.borderDarken=.7,e.structure.fillDarken=1,e.structure.iconDarken=.3,e.structure.iconAlpha=.9),t.structure?.classicNumbers!==void 0&&(e.structureLevel.classicFont=t.structure.classicNumbers),t.structure?.showDots===!1&&(e.structure.dotsZoomThreshold=0),t.mapOverlay?.navalHighlight!==void 0&&(e.mapOverlay.navalHighlight=t.mapOverlay.navalHighlight),t.mapOverlay?.highlightFillBrighten!==void 0&&(e.mapOverlay.highlightFillBrighten=t.mapOverlay.highlightFillBrighten),t.mapOverlay?.highlightBrighten!==void 0&&(e.mapOverlay.highlightBrighten=t.mapOverlay.highlightBrighten),t.mapOverlay?.highlightThicken!==void 0&&(e.mapOverlay.highlightThicken=t.mapOverlay.highlightThicken),t.mapOverlay?.territorySaturation!==void 0&&(e.mapOverlay.territorySaturation=t.mapOverlay.territorySaturation),t.mapOverlay?.territoryAlpha!==void 0&&(e.mapOverlay.territoryAlpha=t.mapOverlay.territoryAlpha),t.mapOverlay?.coordinateGridOpacity!==void 0&&(e.mapOverlay.coordinateGridOpacity=t.mapOverlay.coordinateGridOpacity),t.mapOverlay?.staleNukeColor!==void 0){let n=V(t.mapOverlay.staleNukeColor);n!==null&&(e.mapOverlay.staleNukeR=n[0]/255,e.mapOverlay.staleNukeG=n[1]/255,e.mapOverlay.staleNukeB=n[2]/255)}if(t.mapOverlay?.friendlyTintColor!==void 0&&Jl(t.mapOverlay.friendlyTintColor,(t,n,r)=>{e.mapOverlay.friendlyTintR=t,e.mapOverlay.friendlyTintG=n,e.mapOverlay.friendlyTintB=r}),t.mapOverlay?.embargoTintColor!==void 0&&Jl(t.mapOverlay.embargoTintColor,(t,n,r)=>{e.mapOverlay.embargoTintR=t,e.mapOverlay.embargoTintG=n,e.mapOverlay.embargoTintB=r}),t.mapOverlay?.friendlyTintRatio!==void 0&&(e.mapOverlay.friendlyTintRatio=t.mapOverlay.friendlyTintRatio),t.mapOverlay?.embargoTintRatio!==void 0&&(e.mapOverlay.embargoTintRatio=t.mapOverlay.embargoTintRatio),t.altView?.fillAlpha!==void 0&&(e.altView.fillAlpha=t.altView.fillAlpha),t.affiliation?.selfColor!==void 0&&Jl(t.affiliation.selfColor,(t,n,r)=>{e.affiliation.selfR=t,e.affiliation.selfG=n,e.affiliation.selfB=r}),t.affiliation?.allyColor!==void 0&&Jl(t.affiliation.allyColor,(t,n,r)=>{e.affiliation.allyR=t,e.affiliation.allyG=n,e.affiliation.allyB=r}),t.affiliation?.enemyColor!==void 0&&Jl(t.affiliation.enemyColor,(t,n,r)=>{e.affiliation.enemyR=t,e.affiliation.enemyG=n,e.affiliation.enemyB=r}),t.railroad?.railMinZoom!==void 0&&(e.railroad.railMinZoom=t.railroad.railMinZoom),t.railroad?.railThickness!==void 0&&(e.railroad.railThickness=t.railroad.railThickness),t.smallPlayerGlow?.strength!==void 0&&(e.smallPlayerGlow.strength=t.smallPlayerGlow.strength),t.passEnabled?.fx!==void 0&&(e.passEnabled.fx=t.passEnabled.fx),t.passEnabled?.fallout!==void 0&&(e.passEnabled.falloutBloom=t.passEnabled.fallout,e.passEnabled.falloutLight=t.passEnabled.fallout),t.terrain?.backgroundColor!==void 0&&(e.terrain.backgroundColor=t.terrain.backgroundColor),t.terrain?.oceanColor!==void 0&&(e.terrain.oceanColor=t.terrain.oceanColor),t.terrain?.sandColor!==void 0&&(e.terrain.sandColor=t.terrain.sandColor),t.terrain?.plainsColor!==void 0&&(e.terrain.plainsColor=t.terrain.plainsColor),t.terrain?.highlandColor!==void 0&&(e.terrain.highlandColor=t.terrain.highlandColor),t.terrain?.mountainColor!==void 0&&(e.terrain.mountainColor=t.terrain.mountainColor),t.lighting?.ambient!==void 0&&(e.lighting.ambient=t.lighting.ambient,e.lighting.enabled=t.lighting.ambient<1),t.lighting?.falloffPower!==void 0&&(e.lighting.falloffPower=t.lighting.falloffPower),t.name?.darkNames!==void 0){let n=t.name.darkNames;e.name.fillUsePlayerColor=!n,e.name.outlineUsePlayerColor=n;let r=+!n;e.name.outlineR=r,e.name.outlineG=r,e.name.outlineB=r}t.palette!==void 0&&(e.theme=Xe(t.palette))}function Jl(e,t){let n=V(e);n!==null&&t(n[0]/255,n[1]/255,n[2]/255)}function Yl(e,t){for(let n of Object.keys(t))Array.isArray(t[n])?n in e&&(e[n]=structuredClone(t[n])):typeof t[n]==`object`&&t[n]!==null&&typeof e[n]==`object`&&e[n]!==null?Yl(e[n],t[n]):n in e&&(e[n]=t[n])}var Xl=class{constructor(e,t){this.eventBus=e,this.view=t}init(){this.eventBus.on(_t,e=>this.view.setAltView(e.alternateView)),this.eventBus.on(Jt,e=>this.view.setGridView(e.enabled))}},Zl=class{constructor(){}smallID(){return 0}clientID(){return`TERRA_NULLIUS_CLIENT_ID`}id(){return null}isPlayer(){return!1}};function Ql(e){let t=new Map;function n(e){for(;t.get(e)!==e;){let n=t.get(e);t.set(e,t.get(n)),e=n}return e}function r(e,r){let i=n(e),a=n(r);i!==a&&t.set(a,i)}for(let n of e.values())n.smallID>0&&t.set(n.smallID,n.smallID);for(let n of e.values())if(!(!n.allies||n.smallID<=0))for(let e of n.allies)t.has(e)&&r(n.smallID,e);let i=new Map;for(let e of t.keys())i.set(e,n(e));return i}var $l=1;function eu(e,t,n,r){return t<=0?2:e===t?0:n&&e>0&&e<r&&t<r&&n[t*r+e]===$l?1:2}function tu(e,t,n=0,r,i=0,a,o=0){let s=[];for(let c of e.values()){if(c.targetTile===null||!c.isActive||c.waitTicks>0)continue;let e=a?.get(c.id);if(e&&e.startTick>o)continue;let l=mr[c.unitType];l&&s.push({x:c.targetTile%t,y:(c.targetTile-c.targetTile%t)/t,innerRadius:l.inner,outerRadius:l.outer,relation:eu(c.ownerID,n,r,i)})}return s}var nu=new Set([...dr,nr]),ru=4095;function iu(e,t,n={}){let r=new Map,i=n.localPlayerSmallID??0,a=n.localPlayerID??``,o=i>0?e.get(i):void 0,s=n.tileState,c=-1,l=0;for(let t of e.values())t.isAlive&&t.tilesOwned>l&&(l=t.tilesOwned,c=t.smallID);let u=new Set,d=new Set;for(let e of t.values())!e.isActive||!nu.has(e.unitType)||(u.add(e.ownerID),i>0&&s!==void 0&&e.targetTile!==null&&(s[e.targetTile]&ru)===i&&d.add(e.ownerID));for(let t of e.values()){if(!t.isAlive)continue;let e=t.smallID,s=e===c,l=t.isTraitor,f=t.isDisconnected,p=t.inDoomsdayClock,m=(n.tick??0)-t.markedDoomsdayClockTick,h=n.doomsdayClockWarnTicks??0,g=p&&m>=h,_=p&&t.isDecaying,v=p&&h>0?Math.max(0,Math.min(1,m/h)):0,y=t.traitorRemainingTicks,b=u.has(e),x=d.has(e),S=!1,C=!1,w=!1,T=!1,E=0,D=0;if(o!==void 0&&e!==i&&(S=o.allies.includes(e),T=t.outgoingAllianceRequests.includes(a),C=n.isTransitiveTarget?n.isTransitiveTarget(e):o.targets.includes(e),w=o.embargoes.includes(e)||t.embargoes.includes(i),S&&n.tick!==void 0&&n.allianceDuration!==void 0&&n.localPlayerID)){let e=t.alliances.find(e=>e.other===n.localPlayerID);if(e){let t=Math.max(0,e.expiresAt-n.tick);E=Math.max(0,Math.min(1,t/Math.max(1,n.allianceDuration))),D=t}}(s||l||f||p||y>0||b||S||T||C||w||x)&&r.set(e,{crown:s,traitor:l,disconnected:f,inDoomsdayClock:p,doomsdayClockDraining:g,doomsdayClockDecaying:_,doomsdayClockWarnProgress:v,alliance:S,allianceReq:T,target:C,embargo:w,nukeActive:b,nukeTargetsMe:x,traitorRemainingTicks:y,allianceFraction:E,allianceRemainingTicks:D})}return r}var au=1024,ou=0,su=1,cu=2,lu=new Uint8Array(au*au);function uu(e,t){if(lu.fill(ou),t&&t.size>0){let e=new Map;for(let[n,r]of t){if(n<=0||n>=au)continue;let t=e.get(r);t||(t=[],e.set(r,t)),t.push(n)}for(let t of e.values())for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let r=t[e],i=t[n];lu[r*au+i]=su,lu[i*au+r]=su}}for(let t of e.values()){let e=t.smallID;if(!(e<=0||e>=au)){if(t.allies){for(let n of t.allies)if(n>0&&n<au){let t=e*au+n,r=n*au+e;lu[t]<su&&(lu[t]=su),lu[r]<su&&(lu[r]=su)}}if(t.embargoes)for(let n of t.embargoes)n>0&&n<au&&(lu[e*au+n]=cu,lu[n*au+e]=cu)}}return{matrix:lu,size:au}}var du=3;function fu(e,t,n){let r=t%n-e%n,i=(t-t%n)/n-(e-e%n)/n;return r===0?0:+(i===0)}function pu(e,t,n,r){let i=e%r,a=(e-i)/r,o=t%r,s=(t-o)/r,c=n%r,l=(n-c)/r,u=o-i,d=s-a,f=c-o,p=l-s;if(u===f&&d===p)return u===0?0:1;if(u===0&&f!==0||u!==0&&f===0){if(u===0&&f===1&&d===-1)return 5;if(u===0&&f===-1&&d===-1)return 4;if(u===0&&f===1&&d===1)return 3;if(u===0&&f===-1&&d===1||u===1&&f===0&&p===-1)return 2;if(u===-1&&f===0&&p===-1)return 3;if(u===1&&f===0&&p===1)return 4;if(u===-1&&f===0&&p===1)return 5}return 0}function mu(e,t){if(e.length===0)return[];if(e.length===1)return[{ref:e[0],type:0}];let n=[];n.push({ref:e[0],type:fu(e[0],e[1],t)});for(let r=1;r<e.length-1;r++)n.push({ref:e[r],type:pu(e[r-1],e[r],e[r+1],t)});let r=e.length-1;return n.push({ref:e[r],type:fu(e[r],e[r-1],t)}),n}var hu=class{constructor(e,t){this.anims=new Map,this.tileRefCount=new Map,this.railroadDirty=!1,this.revealedRailTiles=[],this.mapW=e,this.railroadState=new Uint8Array(e*t)}apply(e){let t=e.updates[R.RailroadConstructionEvent]??[];for(let e of t)this.addRailroad(e.id,e.tiles,!1);let n=e.updates[R.RailroadSnapEvent]??[];for(let e of n)this.removeRailroad(e.originalId),this.addRailroad(e.newId1,e.tiles1,!0),this.addRailroad(e.newId2,e.tiles2,!0);let r=e.updates[R.RailroadDestructionEvent]??[];for(let e of r)this.removeRailroad(e.id);this.tickAnimations()}get animating(){for(let e of this.anims.values())if(!e.complete)return!0;return!1}clearDirty(){this.railroadDirty=!1}getRailroadTileRefs(e){let t=[];for(let n of e){let e=this.anims.get(n);if(e)for(let n of e.tiles)t.push(n.ref)}return t}getRailroads(){let e=new Map;for(let[t,n]of this.anims)e.set(t,n.tiles.map(e=>e.ref));return e}reset(){this.anims.clear(),this.tileRefCount.clear(),this.railroadState.fill(0),this.railroadDirty=!1}addRailroad(e,t,n){let r=mu(t,this.mapW),i={tiles:r,headIndex:n?r.length:0,tailIndex:n?0:r.length,complete:n};this.anims.set(e,i);for(let e of r)this.tileRefCount.set(e.ref,(this.tileRefCount.get(e.ref)??0)+1);if(n){for(let e of r)this.railroadState[e.ref]=e.type+1;this.railroadDirty=!0}}removeRailroad(e){let t=this.anims.get(e);if(t){for(let e of t.tiles){let t=(this.tileRefCount.get(e.ref)??1)-1;t<=0?(this.tileRefCount.delete(e.ref),this.railroadState[e.ref]=0):this.tileRefCount.set(e.ref,t)}this.anims.delete(e),this.railroadDirty=!0}}tickAnimations(){this.revealedRailTiles.length=0;for(let e of this.anims.values())if(!e.complete)if(e.tailIndex-e.headIndex<=2*du){for(let t=e.headIndex;t<e.tailIndex;t++){let n=e.tiles[t];this.railroadState[n.ref]=n.type+1,this.revealedRailTiles.push(n.ref)}e.headIndex=e.tailIndex,e.complete=!0,this.railroadDirty=!0}else{for(let t=e.headIndex;t<e.headIndex+du;t++){let n=e.tiles[t];this.railroadState[n.ref]=n.type+1,this.revealedRailTiles.push(n.ref)}for(let t=e.tailIndex-du;t<e.tailIndex;t++){let n=e.tiles[t];this.railroadState[n.ref]=n.type+1,this.revealedRailTiles.push(n.ref)}e.headIndex+=du,e.tailIndex-=du,e.headIndex>=e.tailIndex&&(e.complete=!0),this.railroadDirty=!0}}},gu=4096,_u=class{constructor(e,t){this.unitTrails=new Map,this._dirtyRowMin=1/0,this._dirtyRowMax=-1,this.mapW=e,this.trailState=new Uint16Array(e*t),this.trailCounts=new Uint16Array(e*t)}getTrailState(){return this.trailState}get dirtyRowMin(){return this._dirtyRowMin}get dirtyRowMax(){return this._dirtyRowMax}clearDirtyRows(){this._dirtyRowMin=1/0,this._dirtyRowMax=-1}reset(){this.unitTrails.clear(),this.trailState.fill(0),this.trailCounts.fill(0),this._dirtyRowMin=1/0,this._dirtyRowMax=-1}update(e,t){this.clearDeadUnits(e);for(let n of t){let t=e.get(n);if(!t)continue;let r=fr.has(t.unitType),i=this.unitTrails.get(n);i||(i={value:t.ownerID|(r?gu:0),tiles:new Set,lastPosStamped:-1},this.unitTrails.set(n,i));let a=r?t.lastPos:t.pos;i.lastPosStamped===-1?(this.claim(a,i),i.lastPosStamped=a):i.lastPosStamped!==a&&(this.bresenham(i.lastPosStamped,a,i),i.lastPosStamped=a)}}clearDeadUnits(e){for(let[t,n]of this.unitTrails)if(!e.has(t)){this.unitTrails.delete(t);for(let e of n.tiles)--this.trailCounts[e]===0&&this.stamp(e,0)}}claim(e,t){t.tiles.has(e)||(t.tiles.add(e),this.trailCounts[e]++),this.stamp(e,t.value)}stamp(e,t){this.trailState[e]=t;let n=e/this.mapW|0;n<this._dirtyRowMin&&(this._dirtyRowMin=n),n>this._dirtyRowMax&&(this._dirtyRowMax=n)}bresenham(e,t,n){let r=this.mapW,i=e%r,a=(e-i)/r,o=t%r,s=(t-o)/r,c=Math.abs(o-i),l=-Math.abs(s-a),u=i<o?1:-1,d=a<s?1:-1,f=c+l;for(;;){let e=a*r+i;if(this.claim(e,n),i===o&&a===s)break;let t=2*f;t>=l&&(f+=l,i+=u),t<=c&&(f+=c,a+=d)}}};function vu(e){switch(e){case r.Engine:return Gn.Engine;case r.TailEngine:return Gn.TailEngine;case r.Carriage:return Gn.Carriage;default:return null}}function yu(e){return{id:e.id,unitType:e.unitType,ownerID:e.ownerID,lastOwnerID:e.lastOwnerID??null,pos:e.pos,lastPos:e.lastPos,isActive:e.isActive,reachedTarget:e.reachedTarget,retreating:(e.transportShipState?.isRetreating??!1)||e.warshipState?.state===`retreating`,targetable:e.targetable,waitTicks:e.nukeState?.waitTicks??0,markedForDeletion:e.markedForDeletion,health:e.health??null,underConstruction:e.underConstruction??!1,targetUnitId:e.targetUnitId??null,targetTile:e.targetTile??null,troops:e.troops,missileTimerQueue:e.missileTimerQueue,level:e.level,veterancy:e.warshipState?.veterancy??0,hasTrainStation:e.hasTrainStation,trainType:vu(e.trainType),loaded:e.loaded??null,constructionStartTick:null,samUpgradeStartTick:e.samUpgrade?.upgradeStartTick??null,samUpgradeStartRange:e.samUpgrade?.startRange??null,samUpgradeTargetLevel:e.samUpgrade?.targetLevel??null,samUpgradeDuration:e.samUpgrade?.duration??null}}function bu(e,t){e.ownerID=t.ownerID,e.unitType=t.unitType,e.lastOwnerID=t.lastOwnerID??null,e.pos=t.pos,e.lastPos=t.lastPos,e.isActive=t.isActive,e.reachedTarget=t.reachedTarget,e.retreating=(t.transportShipState?.isRetreating??!1)||t.warshipState?.state===`retreating`,e.targetable=t.targetable,e.waitTicks=t.nukeState?.waitTicks??0,e.markedForDeletion=t.markedForDeletion,e.health=t.health??null,e.underConstruction=t.underConstruction??!1,e.targetUnitId=t.targetUnitId??null,e.targetTile=t.targetTile??null,e.troops=t.troops,e.missileTimerQueue=t.missileTimerQueue,e.level=t.level,e.veterancy=t.warshipState?.veterancy??0,e.hasTrainStation=t.hasTrainStation,e.trainType=vu(t.trainType),e.loaded=t.loaded??null,e.samUpgradeStartTick=t.samUpgrade?.upgradeStartTick??null,e.samUpgradeStartRange=t.samUpgrade?.startRange??null,e.samUpgradeTargetLevel=t.samUpgrade?.targetLevel??null,e.samUpgradeDuration=t.samUpgrade?.duration??null}function xu(e){switch(e){case T.Human:return Kn.Human;case T.Bot:return Kn.Bot;case T.Nation:return Kn.Nation;default:return Kn.Bot}}function Su(e){switch(e){case Kn.Human:return T.Human;case Kn.Nation:return T.Nation;default:return T.Bot}}function Cu(e){return{smallID:e.smallID,id:e.id,name:e.name,displayName:e.displayName,clanTag:e.clanTag??null,clientID:e.clientID??null,playerType:xu(e.playerType),team:e.team??null,isLobbyCreator:e.isLobbyCreator}}function wu(e){return{smallID:e.smallID,isAlive:e.isAlive,isDisconnected:e.isDisconnected,killedBy:e.killedBy??null,deathPosition:e.deathPosition??null,tilesOwned:e.tilesOwned,gold:Number(e.gold),tradeGold:Number(e.tradeGold??0n),trainGold:Number(e.trainGold??0n),piracyGold:Number(e.piracyGold??0n),goldEarned:Number(e.goldEarned??0n),troops:e.troops,isTraitor:e.isTraitor,traitorRemainingTicks:Math.max(0,e.traitorRemainingTicks??0),inDoomsdayClock:e.inDoomsdayClock??!1,isDecaying:e.isDecaying??!1,markedDoomsdayClockTick:e.markedDoomsdayClockTick??-1,betrayals:e.betrayals,hasSpawned:e.hasSpawned,spawnTile:e.spawnTile,lastDeleteUnitTick:e.lastDeleteUnitTick,allies:e.allies.slice(),embargoes:[],targets:e.targets.slice(),outgoingAttacks:e.outgoingAttacks,incomingAttacks:e.incomingAttacks,outgoingAllianceRequests:e.outgoingAllianceRequests.slice(),alliances:e.alliances,outgoingEmojis:e.outgoingEmojis}}function Tu(e,t){let n=[];for(let r of e){let e=t(r);e!==void 0&&n.push(e)}return n}function Eu(e,t,n){if(e!==void 0)for(let r=0;r+4<e.length;r+=5){let i=t(e[r]);i!==void 0&&(i.tilesOwned=e[r+1],i.gold=e[r+2],i.troops=e[r+3],i.goldEarned=e[r+4],n?.(e[r]))}}function Du(e,t,n={}){if(e!==void 0)for(let r=0;r+3<e.length;r+=4){let i=t(e[r]);if(i===void 0)continue;let a=e[r+1]===0?i.outgoingAttacks:i.incomingAttacks,o=e[r+2],s=a[o];s!==void 0&&(n.copy?a[o]={...s,troops:e[r+3]}:s.troops=e[r+3]),n.applied?.(e[r])}}function Ou(e,t,n){if(n===`self`)return e;let r=t.showFrom??`everyone`;if(r===`self`||r===`teammates`&&n!==`teammate`)return{verified:e.verified};let i={...e};return t.territorySkins===!1&&(delete i.pattern,delete i.skin),t.flags===!1&&delete i.flag,t.crowns===!1&&delete i.crown,e.effects!==void 0&&(i.effects=Object.fromEntries(Object.entries(e.effects).filter(([e])=>{let n=y(e);return n===void 0||t[n]!==!1}))),i}function ku(e,t,n,r,i){let a=e.borderColor(t),o=n.pattern?n.pattern.colorPalette??{primaryColor:t.toHex(),secondaryColor:a.toHex()}:void 0;return{territory:r===null?Pe(n.color?.color??o?.primaryColor??t.toHex()):t,border:Pe(o?.secondaryColor??n.color?.color??(i?e.focusedBorderColor():a).toHex())}}function Au(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ju(e){if(Array.isArray(e))return e}function Mu(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Nu(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pu(e,t){return ju(e)||Mu(e,t)||Fu(e,t)||Nu()}function Fu(e,t){if(e){if(typeof e==`string`)return Au(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Au(e,t):void 0}}var Iu=Object.entries,Lu=Object.setPrototypeOf,Ru=Object.isFrozen,zu=Object.getPrototypeOf,Bu=Object.getOwnPropertyDescriptor,G=Object.freeze,K=Object.seal,Vu=Object.create,Hu=typeof Reflect<`u`&&Reflect,Uu=Hu.apply,Wu=Hu.construct;G||=function(e){return e},K||=function(e){return e},Uu||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},Wu||=function(e){return new e(...[...arguments].slice(1))};var Gu=Y(Array.prototype.forEach),Ku=Y(Array.prototype.lastIndexOf),qu=Y(Array.prototype.pop),Ju=Y(Array.prototype.push),Yu=Y(Array.prototype.splice),Xu=Array.isArray,Zu=Y(String.prototype.toLowerCase),Qu=Y(String.prototype.toString),$u=Y(String.prototype.match),ed=Y(String.prototype.replace),td=Y(String.prototype.indexOf),nd=Y(String.prototype.trim),rd=Y(Number.prototype.toString),id=Y(Boolean.prototype.toString),ad=typeof BigInt>`u`?null:Y(BigInt.prototype.toString),od=typeof Symbol>`u`?null:Y(Symbol.prototype.toString),q=Y(Object.prototype.hasOwnProperty),sd=Y(Object.prototype.toString),J=Y(RegExp.prototype.test),cd=ld(TypeError);function Y(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return Uu(e,t,n)}}function ld(e){return function(){return Wu(e,[...arguments])}}function X(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Zu;if(Lu&&Lu(e,null),!Xu(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(Ru(t)||(t[r]=e),i=e)}e[i]=!0}return e}function ud(e){for(let t=0;t<e.length;t++)q(e,t)||(e[t]=null);return e}function Z(e){let t=Vu(null);for(let r of Iu(e)){var n=Pu(r,2);let i=n[0],a=n[1];q(e,i)&&(Xu(a)?t[i]=ud(a):a&&typeof a==`object`&&a.constructor===Object?t[i]=Z(a):t[i]=a)}return t}function dd(e){switch(typeof e){case`string`:return e;case`number`:return rd(e);case`boolean`:return id(e);case`bigint`:return ad?ad(e):`0`;case`symbol`:return od?od(e):`Symbol()`;case`undefined`:return sd(e);case`function`:case`object`:{if(e===null)return sd(e);let t=e,n=fd(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:sd(e)}return sd(e)}default:return sd(e)}}function fd(e,t){for(;e!==null;){let n=Bu(e,t);if(n){if(n.get)return Y(n.get);if(typeof n.value==`function`)return Y(n.value)}e=zu(e)}function n(){return null}return n}function pd(e){try{return J(e,``),!0}catch{return!1}}var md=G(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),hd=G(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),gd=G([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),_d=G([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),vd=G(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),yd=G([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),bd=G([`#text`]),xd=G(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),Sd=G(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),Cd=G(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),wd=G([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),Td=K(/{{[\w\W]*|^[\w\W]*}}/g),Ed=K(/<%[\w\W]*|^[\w\W]*%>/g),Dd=K(/\${[\w\W]*/g),Od=K(/^data-[\-\w.\u00B7-\uFFFF]+$/),kd=K(/^aria-[\-\w]+$/),Ad=K(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),jd=K(/^(?:\w+script|data):/i),Md=K(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Nd=K(/^html$/i),Pd=K(/^[a-z][.\w]*(-[.\w]+)+$/i),Fd=K(/<[/\w!]/g),Id=K(/<[/\w]/g),Ld=K(/<\/no(script|embed|frames)/i),Rd=K(/\/>/i),zd={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Bd=function(){return typeof window>`u`?null:window},Vd=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},Hd=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Ud=function(e,t,n,r){return q(e,t)&&Xu(e[t])?X(r.base?Z(r.base):{},e[t],r.transform):n};function Wd(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Bd(),t=e=>Wd(e);if(t.version=`3.4.13`,t.removed=[],!e||!e.document||e.document.nodeType!==zd.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,c=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let l=e.DOMParser,u=e.trustedTypes,d=s.prototype,f=fd(d,`cloneNode`),p=fd(d,`remove`),m=fd(d,`nextSibling`),h=fd(d,`childNodes`),g=fd(d,`parentNode`),_=fd(d,`shadowRoot`),v=fd(d,`attributes`),y=o&&o.prototype?fd(o.prototype,`nodeType`):null,b=o&&o.prototype?fd(o.prototype,`nodeName`):null,x=o&&o.prototype?fd(o.prototype,`ownerDocument`):null;if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let S,C=``,w,T=!1,E=0,D=function(){if(E>0)throw cd(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},O=function(e){D(),E++;try{return S.createHTML(e)}finally{E--}},k=function(e){D(),E++;try{return S.createScriptURL(e)}finally{E--}},ee=function(){return T||=(w=Vd(u,i),!0),w},te=n,ne=te.implementation,re=te.createNodeIterator,ie=te.createDocumentFragment,ae=te.getElementsByTagName,A=r.importNode,j=Hd();t.isSupported=typeof Iu==`function`&&typeof g==`function`&&ne&&ne.createHTMLDocument!==void 0;let oe=Td,se=Ed,ce=Dd,le=Od,ue=kd,de=jd,fe=Md,pe=Pd,me=Ad,M=null,N=X({},[...md,...hd,...gd,...vd,...bd]),P=null,he=X({},[...xd,...Sd,...Cd,...wd]),F=Object.seal(Vu(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),I=null,ge=null,_e=Object.seal(Vu(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),ve=!0,L=!0,ye=!1,be=!0,xe=!1,Se=!0,Ce=!1,we=!1,Te=null,Ee=null,De=!1,Oe=!1,ke=!1,Ae=!1,je=!0,Me=!1,Ne=`user-content-`,Pe=!0,Fe=!1,Ie={},Le=null,Re=X({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),ze=null,Be=X({},[`audio`,`video`,`img`,`source`,`image`,`track`]),Ve=null,He=X({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),Ue=`http://www.w3.org/1998/Math/MathML`,We=`http://www.w3.org/2000/svg`,Ge=`http://www.w3.org/1999/xhtml`,Ke=Ge,qe=!1,Je=null,Ye=X({},[Ue,We,Ge],Qu),Xe=G([`mi`,`mo`,`mn`,`ms`,`mtext`]),Ze=X({},Xe),Qe=G([`annotation-xml`]),R=X({},Qe),$e=X({},[`title`,`style`,`font`,`a`,`script`]),et=null,tt=[`application/xhtml+xml`,`text/html`],z=null,nt=null,rt=n.createElement(`form`),it=function(e){return e instanceof RegExp||e instanceof Function},at=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(nt&&nt===e)return;(!e||typeof e!=`object`)&&(e={}),e=Z(e),et=tt.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,z=et===`application/xhtml+xml`?Qu:Zu,M=Ud(e,`ALLOWED_TAGS`,N,{transform:z}),P=Ud(e,`ALLOWED_ATTR`,he,{transform:z}),Je=Ud(e,`ALLOWED_NAMESPACES`,Ye,{transform:Qu}),Ve=Ud(e,`ADD_URI_SAFE_ATTR`,He,{transform:z,base:He}),ze=Ud(e,`ADD_DATA_URI_TAGS`,Be,{transform:z,base:Be}),Le=Ud(e,`FORBID_CONTENTS`,Re,{transform:z}),I=Ud(e,`FORBID_TAGS`,Z({}),{transform:z}),ge=Ud(e,`FORBID_ATTR`,Z({}),{transform:z}),Ie=q(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?Z(e.USE_PROFILES):e.USE_PROFILES:!1,ve=e.ALLOW_ARIA_ATTR!==!1,L=e.ALLOW_DATA_ATTR!==!1,ye=e.ALLOW_UNKNOWN_PROTOCOLS||!1,be=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,xe=e.SAFE_FOR_TEMPLATES||!1,Se=e.SAFE_FOR_XML!==!1,Ce=e.WHOLE_DOCUMENT||!1,Oe=e.RETURN_DOM||!1,ke=e.RETURN_DOM_FRAGMENT||!1,Ae=e.RETURN_TRUSTED_TYPE||!1,De=e.FORCE_BODY||!1,je=e.SANITIZE_DOM!==!1,Me=e.SANITIZE_NAMED_PROPS||!1,Pe=e.KEEP_CONTENT!==!1,Fe=e.IN_PLACE||!1,me=pd(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:Ad,Ke=typeof e.NAMESPACE==`string`?e.NAMESPACE:Ge,Ze=q(e,`MATHML_TEXT_INTEGRATION_POINTS`)&&e.MATHML_TEXT_INTEGRATION_POINTS&&typeof e.MATHML_TEXT_INTEGRATION_POINTS==`object`?Z(e.MATHML_TEXT_INTEGRATION_POINTS):X({},Xe),R=q(e,`HTML_INTEGRATION_POINTS`)&&e.HTML_INTEGRATION_POINTS&&typeof e.HTML_INTEGRATION_POINTS==`object`?Z(e.HTML_INTEGRATION_POINTS):X({},Qe);let t=q(e,`CUSTOM_ELEMENT_HANDLING`)&&e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING==`object`?Z(e.CUSTOM_ELEMENT_HANDLING):Vu(null);if(F=Vu(null),q(t,`tagNameCheck`)&&it(t.tagNameCheck)&&(F.tagNameCheck=t.tagNameCheck),q(t,`attributeNameCheck`)&&it(t.attributeNameCheck)&&(F.attributeNameCheck=t.attributeNameCheck),q(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(F.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),K(F),xe&&(L=!1),ke&&(Oe=!0),Ie&&(M=X({},bd),P=Vu(null),Ie.html===!0&&(X(M,md),X(P,xd)),Ie.svg===!0&&(X(M,hd),X(P,Sd),X(P,wd)),Ie.svgFilters===!0&&(X(M,gd),X(P,Sd),X(P,wd)),Ie.mathMl===!0&&(X(M,vd),X(P,Cd),X(P,wd))),_e.tagCheck=null,_e.attributeCheck=null,q(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?_e.tagCheck=e.ADD_TAGS:Xu(e.ADD_TAGS)&&(M===N&&(M=Z(M)),X(M,e.ADD_TAGS,z))),q(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?_e.attributeCheck=e.ADD_ATTR:Xu(e.ADD_ATTR)&&(P===he&&(P=Z(P)),X(P,e.ADD_ATTR,z))),q(e,`ADD_URI_SAFE_ATTR`)&&Xu(e.ADD_URI_SAFE_ATTR)&&X(Ve,e.ADD_URI_SAFE_ATTR,z),q(e,`FORBID_CONTENTS`)&&Xu(e.FORBID_CONTENTS)&&(Le===Re&&(Le=Z(Le)),X(Le,e.FORBID_CONTENTS,z)),q(e,`ADD_FORBID_CONTENTS`)&&Xu(e.ADD_FORBID_CONTENTS)&&(Le===Re&&(Le=Z(Le)),X(Le,e.ADD_FORBID_CONTENTS,z)),Pe&&(M[`#text`]=!0),Ce&&X(M,[`html`,`head`,`body`]),M.table&&(X(M,[`tbody`]),delete I.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw cd(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw cd(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=S;S=e.TRUSTED_TYPES_POLICY;try{C=O(``)}catch(e){throw S=t,e}}else e.TRUSTED_TYPES_POLICY===null?(S=void 0,C=``):(S===void 0&&(S=ee()),S&&typeof C==`string`&&(C=O(``)));G&&G(e),nt=e},ot=X({},[...hd,...gd,..._d]),st=X({},[...vd,...yd]),ct=function(e,t,n){return t.namespaceURI===Ge?e===`svg`:t.namespaceURI===Ue?e===`svg`&&(n===`annotation-xml`||Ze[n]):!!ot[e]},lt=function(e,t,n){return t.namespaceURI===Ge?e===`math`:t.namespaceURI===We?e===`math`&&R[n]:!!st[e]},ut=function(e,t,n){return t.namespaceURI===We&&!R[n]||t.namespaceURI===Ue&&!Ze[n]?!1:!st[e]&&($e[e]||!ot[e])},dt=function(e){let t=g(e);(!t||!t.tagName)&&(t={namespaceURI:Ke,tagName:`template`});let n=Zu(e.tagName),r=Zu(t.tagName);return Je[e.namespaceURI]?e.namespaceURI===We?ct(n,t,r):e.namespaceURI===Ue?lt(n,t,r):e.namespaceURI===Ge?ut(n,t,r):!!(et===`application/xhtml+xml`&&Je[e.namespaceURI]):!1},ft=function(e){Ju(t.removed,{element:e});try{g(e).removeChild(e)}catch{if(p(e),!g(e))throw cd(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},pt=function(e){gt(e);let t=h(e);if(t){let e=[];Gu(t,t=>{Ju(e,t)}),Gu(e,e=>{try{p(e)}catch{}})}let n=v(e);if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;if(typeof i==`string`)try{e.removeAttribute(i)}catch{}}},mt=function(e,n){try{Ju(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{Ju(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e===`is`)if(Oe||ke)try{ft(n)}catch{}else try{n.setAttribute(e,``)}catch{}},ht=function(e){let t=v(e);if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;if(!(typeof i!=`string`||P[z(i)]))try{e.removeAttribute(i)}catch{}}},gt=function(e){let t=[e];for(;t.length>0;){let e=t.pop();(y?y(e):e.nodeType)===zd.element&&ht(e);let n=h(e);if(n)for(let e=n.length-1;e>=0;--e)t.push(n[e])}},_t=function(e){if(!Se)return;let t=[e];for(;t.length>0;){let e=t.pop(),n=y?y(e):e.nodeType;if(n===zd.processingInstruction||n===zd.comment&&J(Id,e.data)){try{p(e)}catch{}continue}if(n===zd.element){let t=e,n=z(b?b(e):e.nodeName);try{t.hasAttribute&&t.hasAttribute(`patchsrc`)&&t.removeAttribute(`patchsrc`),t.hasAttribute&&t.hasAttribute(`for`)&&n!==`label`&&n!==`output`&&t.removeAttribute(`for`)}catch{}}let r=h(e);if(r)for(let e=r.length-1;e>=0;--e)t.push(r[e])}},vt=function(e){let t=null,r=null;if(De)e=`<remove></remove>`+e;else{let t=$u(e,/^[\r\n\t ]+/);r=t&&t[0]}et===`application/xhtml+xml`&&Ke===Ge&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=S?O(e):e;if(Ke===Ge)try{t=new l().parseFromString(i,et)}catch{}if(!t||!t.documentElement){t=ne.createDocument(Ke,`template`,null);try{t.documentElement.innerHTML=qe?C:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),Ke===Ge?ae.call(t,Ce?`html`:`body`)[0]:Ce?t.documentElement:a},yt=function(e){let t=x?x(e):e.ownerDocument;return re.call(t||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},bt=function(e){return e=ed(e,oe,` `),e=ed(e,se,` `),e=ed(e,ce,` `),e},xt=function(e){e.normalize();let t=x?x(e):e.ownerDocument,n=re.call(t||e,e,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),r=n.nextNode();for(;r;)r.data=bt(r.data),r=n.nextNode();let i=e.querySelectorAll?.call(e,`template`);i&&Gu(i,e=>{Ct(e.content)&&xt(e.content)})},St=function(e){let t=b?b(e):null;return typeof t!=`string`||z(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==v(e)||typeof e.removeAttribute!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==y(e)||e.childNodes!==h(e)},Ct=function(e){if(!y||typeof e!=`object`||!e)return!1;try{return y(e)===zd.documentFragment}catch{return!1}},wt=function(e){if(!y||typeof e!=`object`||!e)return!1;try{return typeof y(e)==`number`}catch{return!1}};function Tt(e,n,r){e.length!==0&&Gu(e,e=>{e.call(t,n,r,nt)})}let Et=function(e,t){return!!(Se&&e.hasChildNodes()&&!wt(e.firstElementChild)&&J(Fd,e.textContent)&&J(Fd,e.innerHTML)||Se&&e.namespaceURI===Ge&&t===`style`&&wt(e.firstElementChild)||e.nodeType===zd.processingInstruction||Se&&e.nodeType===zd.comment&&J(Id,e.data))},Dt=function(e,t,n){if(!I[t]&&Mt(t)&&(F.tagNameCheck instanceof RegExp&&J(F.tagNameCheck,t)||F.tagNameCheck instanceof Function&&F.tagNameCheck(t)))return!1;if(Pe&&!Le[t]){let t=g(e),r=h(e);if(r&&t){let i=r.length;for(let a=i-1;a>=0;--a){let i=e===n?f(r[a],!0):r[a];t.insertBefore(i,m(e))}}}return ft(e),!0},Ot=function(e,t,n,r){return e.length===0?t:t===n||t===r?Z(t):t},kt=function(e,n){if(Tt(j.beforeSanitizeElements,e,null),e!==n&&g(e)===null)return Fe&&gt(e),!0;if(St(e))return ft(e),!0;let r=z(b?b(e):e.nodeName);if(M=Ot(j.uponSanitizeElement,M,N,Te),Tt(j.uponSanitizeElement,e,{tagName:r,allowedTags:M}),e!==n&&g(e)===null)return Fe&&gt(e),!0;if(Et(e,r))return ft(e),!0;if(I[r]||!(_e.tagCheck instanceof Function&&_e.tagCheck(r))&&!M[r]){let t=Dt(e,r,n);return t===!1&&Tt(j.afterSanitizeElements,e,null),t}if((y?y(e):e.nodeType)===zd.element&&!dt(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&J(Ld,e.innerHTML))return ft(e),!0;if(xe&&e.nodeType===zd.text){let n=bt(e.textContent);e.textContent!==n&&(Ju(t.removed,{element:e.cloneNode()}),e.textContent=n)}return Tt(j.afterSanitizeElements,e,null),!1},At=function(e,t,r){if(ge[t]||Se&&t===`patchsrc`||Se&&t===`for`&&e!==`label`&&e!==`output`||je&&(t===`id`||t===`name`)&&(r in n||r in rt))return!1;let i=P[t]||_e.attributeCheck instanceof Function&&_e.attributeCheck(t,e);if(!(L&&J(le,t))&&!(ve&&J(ue,t))){if(!i){if(!(Mt(e)&&(F.tagNameCheck instanceof RegExp&&J(F.tagNameCheck,e)||F.tagNameCheck instanceof Function&&F.tagNameCheck(e))&&(F.attributeNameCheck instanceof RegExp&&J(F.attributeNameCheck,t)||F.attributeNameCheck instanceof Function&&F.attributeNameCheck(t,e))||t===`is`&&F.allowCustomizedBuiltInElements&&(F.tagNameCheck instanceof RegExp&&J(F.tagNameCheck,r)||F.tagNameCheck instanceof Function&&F.tagNameCheck(r))))return!1}else if(!Ve[t]&&!J(me,ed(r,fe,``))&&!((t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&td(r,`data:`)===0&&ze[e])&&!(ye&&!J(de,ed(r,fe,``)))&&r)return!1}return!0},jt=X({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),Mt=function(e){return!jt[Zu(e)]&&J(pe,e)},Nt=function(e,t,n,r){if(S&&typeof u==`object`&&typeof u.getAttributeType==`function`&&!n)switch(u.getAttributeType(e,t)){case`TrustedHTML`:return O(r);case`TrustedScriptURL`:return k(r)}return r},Pt=function(e,n,r,i){try{r?e.setAttributeNS(r,n,i):e.setAttribute(n,i),St(e)?ft(e):qu(t.removed)}catch{mt(n,e)}},Ft=function(e){Tt(j.beforeSanitizeAttributes,e,null);let t=e.attributes;if(!t||St(e))return;P=Ot(j.uponSanitizeAttribute,P,he,Ee);let n={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:P,forceKeepAttr:void 0},r=t.length,i=z(e.nodeName);for(;r--;){let a=t[r],o=a.name,s=a.namespaceURI,c=a.value,l=z(o),u=c,d=o===`value`?u:nd(u);if(n.attrName=l,n.attrValue=d,n.keepAttr=!0,n.forceKeepAttr=void 0,Tt(j.uponSanitizeAttribute,e,n),d=n.attrValue,Me&&(l===`id`||l===`name`)&&td(d,Ne)!==0&&(mt(o,e),d=Ne+d),Se&&J(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,d)){mt(o,e);continue}if(l===`attributename`&&$u(d,`href`)){mt(o,e);continue}if(!n.forceKeepAttr){if(!n.keepAttr){mt(o,e);continue}if(!be&&J(Rd,d)){mt(o,e);continue}if(xe&&(d=bt(d)),!At(i,l,d)){mt(o,e);continue}d=Nt(i,l,s,d),d!==u&&Pt(e,o,s,d)}}Tt(j.afterSanitizeAttributes,e,null)},It=function(e){let t=null,n=yt(e);for(Tt(j.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if(Tt(j.uponSanitizeShadowNode,t,null),kt(t,e),Ft(t),Ct(t.content)&&It(t.content),(y?y(t):t.nodeType)===zd.element){let e=_(t);Ct(e)&&(Lt(e),It(e))}Tt(j.afterSanitizeShadowDOM,e,null)},Lt=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){It(e.shadow);continue}let n=e.node,r=(y?y(n):n.nodeType)===zd.element,i=h(n);if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=b?b(n):null;if(typeof e==`string`&&z(e)===`template`){let e=n.content;Ct(e)&&t.push({node:e,shadow:null})}}if(r){let e=_(n);Ct(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(qe=!e,qe&&(e=`<!-->`),typeof e!=`string`&&!wt(e)&&(e=dd(e),typeof e!=`string`))throw cd(`dirty is not a string, aborting`);if(!t.isSupported)return e;we?(M=Te,P=Ee):at(n),(j.uponSanitizeElement.length>0||j.uponSanitizeAttribute.length>0)&&(M=Z(M)),j.uponSanitizeAttribute.length>0&&(P=Z(P)),t.removed=[];let c=Fe&&typeof e!=`string`&&wt(e);if(c){_t(e);let t=b?b(e):e.nodeName;if(typeof t==`string`){let n=z(t);if(!M[n]||I[n])throw pt(e),cd(`root node is forbidden and cannot be sanitized in-place`)}if(St(e))throw pt(e),cd(`root node is clobbered and cannot be sanitized in-place`);try{Lt(e)}catch(t){throw pt(e),t}}else if(wt(e))i=vt(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===zd.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),Lt(a);else{if(!Oe&&!xe&&!Ce&&e.indexOf(`<`)===-1)return S&&Ae?O(e):e;if(i=vt(e),!i)return Oe?null:Ae?C:``}i&&De&&ft(i.firstChild);let l=c?e:i;try{let e=yt(l);for(;o=e.nextNode();)kt(o,l),Ft(o),Ct(o.content)&&It(o.content)}catch(n){throw c&&(pt(e),Gu(t.removed,e=>{e.element&&gt(e.element)})),n}if(c)return Gu(t.removed,e=>{e.element&&gt(e.element)}),xe&&xt(e),e;if(Oe){if(xe&&xt(i),ke)for(s=ie.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(P.shadowroot||P.shadowrootmode)&&(s=A.call(r,s,!0)),s}let u=Ce?i.outerHTML:i.innerHTML;return Ce&&M[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&J(Nd,i.ownerDocument.doctype.name)&&(u=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+u),xe&&(u=bt(u)),S&&Ae?O(u):u},t.setConfig=function(){at(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),we=!0,Te=M,Ee=P},t.clearConfig=function(){nt=null,we=!1,Te=null,Ee=null,S=w,C=``},t.isValidAttribute=function(e,t,n){return nt||at({}),At(z(e),z(t),n)},t.addHook=function(e,t){typeof t==`function`&&q(j,e)&&Ju(j[e],t)},t.removeHook=function(e,t){if(q(j,e)){if(t!==void 0){let n=Ku(j[e],t);return n===-1?void 0:Yu(j[e],n,1)[0]}return qu(j[e])}},t.removeHooks=function(e){q(j,e)&&(j[e]=[])},t.removeAllHooks=function(){j=Hd()},t}var Gd=Wd();function Kd(e){return Gd.sanitize(e,{ALLOWED_TAGS:[`span`,`img`],ALLOWED_ATTR:[`src`,`alt`,`class`,`style`],ALLOWED_URI_REGEXP:/^https:\/\/cdn\.jsdelivr\.net\/gh\/twitter\/twemoji/,ADD_ATTR:[`style`]})}var qd=new Set([`misc.join_discord`]),Jd=Object.fromEntries(Object.entries(oe).map(([e,t])=>[e,t.filter(t=>!qd.has(`${e}.${t.key}`))])),Yd=class{constructor(e){this.player=e}},Xd=`[P1]`,Zd=new Set([`help.troops`,`help.gold`,`help.alliance`,`help.no_attack`,`help.sorry_attack`,`help.help_defend`,`attack.attack`,`attack.mirv`,`attack.crown`,`defend.defend`,`defend.dont_attack`,`greet.hello`,`greet.good_luck`,`greet.gg`,`greet.thanks`,`greet.oops`,`misc.go`,`misc.team_up`,`warnings.betrayed`,`warnings.mirv_ready`]),Qd={"greet.oops":`misc`,"misc.team_up":`attack`},$d=Object.entries(Jd).flatMap(([e,t])=>t.map(t=>({category:e,phrase:t}))),ef=(e,t)=>`${e}.${t.key}`,tf=new Map($d.map(e=>[ef(e.category,e.phrase),e])),nf=`quick-chat-recent`,rf=10;function af(){try{let e=JSON.parse(localStorage.getItem(nf)??`[]`);return Array.isArray(e)?e.filter(e=>typeof e==`string`&&tf.has(e)).slice(0,rf):[]}catch(e){return console.warn(`Failed to read recent quick chats from localStorage:`,e),[]}}var of=class extends ie{constructor(...e){super(...e),this.isOpen=!1,this.pending=null,this.search=``,this.phraseSearch=``,this.showAll=!1,this.recent=af(),this.categories=[{id:`help`},{id:`attack`},{id:`defend`},{id:`greet`},{id:`misc`},{id:`warnings`}]}createRenderRoot(){return this}render(){return this.isOpen?b`
      <div
        class="fixed inset-0 bg-black/15 flex items-start sm:items-center justify-center z-10002 pt-4 sm:pt-0"
        @click=${e=>e.target===e.currentTarget&&this.close()}
      >
        <div class="relative">
          <button
            class="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center
                    bg-zinc-700 hover:bg-red-500 text-white rounded-full shadow-sm transition-colors z-10004"
            aria-label=${v(`common.close`)}
            @click=${()=>this.close()}
          >
            ✕
          </button>
          <div
            class="bg-zinc-900/95 p-3 rounded-xl shadow-2xl shadow-black/50 ring-1 ring-white/10 text-white
                   w-[min(44rem,calc(100vw-32px))] max-h-[calc(100vh-60px)] overflow-y-auto
                   flex flex-col gap-3"
            @contextmenu=${e=>e.preventDefault()}
            @wheel=${e=>e.stopPropagation()}
          >
            <div class="flex items-baseline gap-2 pe-4">
              <h2 class="font-semibold">${v(`chat.title`)}</h2>
              <span class="truncate text-sm text-zinc-400"
                >${this.recipient?.displayName()}</span
              >
              ${this.pending?null:this.renderAllPhrasesSwitch()}
            </div>
            ${this.pending?this.renderPlayerPicker():this.renderPhrases()}
          </div>
        </div>
      </div>
    `:null}renderAllPhrasesSwitch(){return b`
      <button
        class="ms-auto shrink-0 flex items-center gap-2 text-sm text-zinc-300 hover:text-white cursor-pointer"
        role="switch"
        aria-checked=${this.showAll}
        @click=${()=>this.showAll=!this.showAll}
      >
        ${v(`chat.all_phrases`)}
        <span
          class="relative inline-block w-8 h-4.5 rounded-full transition-colors ${this.showAll?`bg-blue-500`:`bg-zinc-600`}"
        >
          <span
            class="absolute top-0.5 left-0.5 size-3.5 rounded-full bg-white transition-transform ${this.showAll?`translate-x-3.5`:``}"
          ></span>
        </span>
      </button>
    `}renderPhrases(){let e=this.sections(),t=this.phraseQuery();return b`
      ${this.showAll?b`<input
            class="px-2 py-1.5 rounded-md bg-zinc-800 ring-1 ring-white/10 text-sm outline-none focus:ring-white/30"
            type="text"
            placeholder=${v(`chat.search_phrases`)}
            .value=${this.phraseSearch}
            @input=${e=>this.phraseSearch=e.target.value}
            @keydown=${n=>{let r=e[0]?.phrases[0];n.key===`Enter`&&!n.isComposing&&t&&r&&this.pickPhrase(r.category,r.phrase)}}
          />`:null}
      ${e.length===0?b`<p class="text-sm text-zinc-400">
            ${v(`chat.no_phrases`)}
          </p>`:e.map(({id:e,phrases:t})=>b`
              <section>
                <h3
                  class="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400"
                >
                  ${v(`chat.cat.${e}`)}
                </h3>
                <div class="flex flex-wrap gap-1">
                  ${t.map(e=>this.renderChip(e))}
                </div>
              </section>
            `)}
    `}phraseQuery(){return this.showAll?this.phraseSearch.trim().toLowerCase():``}sections(){let e=this.phraseQuery(),t=this.categories.map(({id:t})=>({id:t,phrases:$d.filter(n=>{let r=ef(n.category,n.phrase);return(Qd[r]??n.category)===t&&(this.showAll||Zd.has(r))&&(!e||this.matchesQuery(n,e))}).sort((e,n)=>Number(!Zd.has(ef(e.category,e.phrase)))-Number(!Zd.has(ef(n.category,n.phrase)))||Number(e.category!==t)-Number(n.category!==t))}));return e||t.unshift({id:`recent`,phrases:this.recent.flatMap(e=>tf.get(e)??[])}),t.filter(({phrases:e})=>e.length>0)}matchesQuery({category:e,phrase:t},n){let r=v(`chat.${e}.${t.key}`);return[r,this.chipLabel(e,t.key,r)].some(e=>e.replace(Xd,``).toLowerCase().includes(n))}renderChip({category:e,phrase:t}){let n=v(`chat.${e}.${t.key}`);return b`
      <button
        class="max-w-[15rem] truncate px-2.5 py-1 rounded-md text-sm text-left
               bg-white/5 hover:bg-white/15 active:bg-white/25 transition-colors cursor-pointer"
        title=${n.replace(Xd,`___`)}
        @click=${()=>this.pickPhrase(e,t)}
      >
        ${this.renderWithBlank(this.chipLabel(e,t.key,n))}
      </button>
    `}chipLabel(e,t,n){let r=`chat.short.${e}.${t}`;return c(r)?v(r):n}renderWithBlank(e){let[t,...n]=e.split(Xd);return n.length===0?e:b`${t}<span
        class="inline-block w-6 mx-0.5 border-b border-zinc-400 align-baseline"
      ></span
      >${n.join(Xd)}`}renderPlayerPicker(){let{category:e,phrase:t}=this.pending,n=this.targetChoices();return b`
      <div class="flex items-center gap-2">
        <button
          class="px-2 py-1 rounded-md bg-white/5 hover:bg-white/15 cursor-pointer"
          aria-label=${v(`common.back`)}
          @click=${()=>this.pending=null}
        >
          ←
        </button>
        <span class="font-medium">
          ${this.renderWithBlank(v(`chat.${e}.${t.key}`))}
        </span>
      </div>
      <input
        class="px-2 py-1.5 rounded-md bg-zinc-800 ring-1 ring-white/10 text-sm outline-none focus:ring-white/30"
        type="text"
        placeholder=${v(`chat.search`)}
        .value=${this.search}
        @input=${e=>this.search=e.target.value}
        @keydown=${e=>{e.key===`Enter`&&!e.isComposing&&n.length>0&&this.sendPending(n[0])}}
      />
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-1">
        ${n.map(e=>b`
            <button
              class="truncate px-2.5 py-1.5 rounded-md text-sm text-left border-l-4
                     bg-white/5 hover:bg-white/15 active:bg-white/25 transition-colors cursor-pointer"
              style="border-left-color: ${e.territoryColor().toHex()}"
              @click=${()=>this.sendPending(e)}
            >
              ${e.displayName()}
            </button>
          `)}
      </div>
    `}targetChoices(){let e=new Set;for(let t of[this.sender,this.recipient])for(let n of[...t.incomingAttacks(),...t.outgoingAttacks()])e.add(n.attackerID),e.add(n.targetID);e.delete(this.sender.smallID()),e.delete(this.recipient.smallID());let t=this.search.trim().toLowerCase();return this.g.players().filter(e=>e.isAlive()&&e.type()!==T.Bot&&e.displayName().toLowerCase().includes(t)).sort((t,n)=>Number(e.has(n.smallID()))-Number(e.has(t.smallID()))||n.numTilesOwned()-t.numTilesOwned())}updated(){if(this.pending){let e=this.querySelector(`input`);e&&document.activeElement!==e&&e.focus()}}initEventBus(e){this.eventBus=e,e.on(vt,()=>{this.isOpen&&this.close()}),e.on(Mt,e=>{if(this.isOpen){this.close();return}let t=this.g.myPlayer();if(!t?.isAlive())return;let n=this.transformHandler.screenToWorldCoordinates(e.x,e.y);if(!this.g.isValidCoord(n.x,n.y))return;let r=this.g.owner(this.g.ref(n.x,n.y));!r.isPlayer()||r===t||this.open(t,r)}),e.on(Yd,e=>{let t=this.g.myPlayer();t?.isAlive()&&this.open(t,e.player)})}remember(e){this.recent=[e,...this.recent.filter(t=>t!==e)].slice(0,rf);try{localStorage.setItem(nf,JSON.stringify(this.recent))}catch(e){console.warn(`Failed to save recent quick chats to localStorage:`,e)}}pickPhrase(e,t){if(t.requiresPlayer){this.search=``,this.pending={category:e,phrase:t};return}this.send(`${e}.${t.key}`)}sendPending(e){let{category:t,phrase:n}=this.pending;this.send(`${t}.${n.key}`,e)}send(e,t){this.sender&&this.recipient&&(this.eventBus.emit(new Tn(this.recipient,e,t?.id())),this.remember(e)),this.close()}open(e,t){e&&t&&(this.recipient=t,this.sender=e),this.pending=null,this.search=``,this.phraseSearch=``,this.isOpen=!0}close(){this.isOpen=!1,this.pending=null,this.search=``,this.phraseSearch=``}setRecipient(e){this.recipient=e}setSender(e){this.sender=e}openWithSelection(e,t,n,r){this.open(n,r);let i=Jd[e]?.find(e=>e.key===t);i&&this.pickPhrase(e,i)}};M([i()],of.prototype,`isOpen`,void 0),M([i()],of.prototype,`pending`,void 0),M([i()],of.prototype,`search`,void 0),M([i()],of.prototype,`phraseSearch`,void 0),M([i()],of.prototype,`showAll`,void 0),M([i()],of.prototype,`recent`,void 0),of=M([h(`chat-modal`)],of);var sf=N(`images/BattleshipIconWhite.svg`),cf=N(`images/CityIconWhite.svg`),lf=N(`images/FactoryIconWhite.svg`),uf=N(`images/GoldCoinIcon.svg`),df=N(`images/MIRVIcon.svg`),ff=N(`images/MissileSiloIconWhite.svg`),pf=N(`images/MushroomCloudIconWhite.svg`),mf=N(`images/NukeIconWhite.svg`),hf=N(`images/PortIcon.svg`),gf=N(`images/SamLauncherIconWhite.svg`),_f=N(`images/ShieldIconWhite.svg`),vf=N(`images/SoldierIcon.svg`),yf=N(`images/ClaimIcon.svg`),bf=N(`images/ProfileIcon.svg`),xf=N(`images/GuildIconWhite.svg`),Sf=N(`images/TeamIconSolidWhite.svg`),Cf=N(`images/UpperLimitIcon.svg`),wf=N(`images/AllianceIcon.svg`),Tf=N(`images/TraitorIcon.svg`),Ef=class{constructor(e){this.player=e}},Df=class extends ie{constructor(...e){super(...e),this.isVisible=!1,this.eventBus=null,this.userSettings=new be,this.favorites=[],this.dragOverSlot=null,this.dragged=null,this.onEmojiClicked=()=>{},this.handleBackdropClick=e=>{let t=this.querySelector(`div[class*="bg-zinc-900"]`);t&&!t.contains(e.target)&&this.hideTable()},this.dragOverElsewhere=e=>{this.dragged&&this.dragged.fromSlot!==null&&e.preventDefault()},this.dropElsewhere=e=>{if(!this.dragged||this.dragged.fromSlot===null)return;e.preventDefault();let t=[...this.favorites];t[this.dragged.fromSlot]=null,this.saveFavorites(t),this.dragged=null,this.dragOverSlot=null},this.endDrag=()=>{this.dragged=null,this.dragOverSlot=null}}initEventBus(e){this.eventBus=e,e.on(jt,t=>{let n=this.transformHandler.screenToWorldCoordinates(t.x,t.y);if(!this.game.isValidCoord(n.x,n.y))return;let r=this.game.ref(n.x,n.y);if(!this.game.hasOwner(r))return;let i=this.game.owner(r);i instanceof Zl||this.showForPlayer(e,i)}),e.on(Ef,t=>this.showForPlayer(e,t.player)),e.on(Pt,e=>{let t=this.favorites[e.slot];this.isVisible&&t&&this.onEmojiClicked(t)}),e.on(vt,()=>{this.hidden||this.hideTable()})}showForPlayer(e,t){this.isVisible||this.showTable(n=>{let r=t===this.game.myPlayer()?Te:t;e.emit(new Sn(r,ye.indexOf(n))),this.hideTable()})}render(){return this.isVisible?b`
      <div
        class="fixed inset-0 bg-black/15 backdrop-brightness-110 flex items-start sm:items-center justify-center z-10002 pt-4 sm:pt-0"
        @click=${this.handleBackdropClick}
        @dragover=${this.dragOverElsewhere}
        @drop=${this.dropElsewhere}
      >
        <div class="relative">
          <!-- Close button -->
          <button
            class="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center
                    bg-zinc-700 hover:bg-red-500 text-white rounded-full shadow-sm transition-colors z-10004"
            @click=${this.hideTable}
          >
            ✕
          </button>

          <div
            class="bg-zinc-900/95 p-3 rounded-xl z-10003 shadow-2xl shadow-black/50 ring-1 ring-white/10
                   max-w-[calc(100vw-32px)] max-h-[calc(100vh-60px)] overflow-y-auto
                   flex flex-col gap-3"
            @contextmenu=${e=>e.preventDefault()}
            @wheel=${e=>e.stopPropagation()}
            @click=${e=>e.stopPropagation()}
          >
            ${this.renderFavorites()}
            ${rt.filter(e=>!e.columns).map(e=>this.renderSection(e))}
            <!-- Fixed-column sections are small, so they share a row. -->
            <div class="flex gap-6">
              ${rt.filter(e=>e.columns).map(e=>this.renderSection(e))}
            </div>
          </div>
        </div>
      </div>
    `:null}renderFavorites(){let e=this.favorites.every(e=>e===null),t=!C.isTouch;return b`
      <section class="hidden sm:block">
        <h3
          class="mb-1 text-center text-[11px] font-semibold uppercase tracking-wider text-zinc-400"
        >
          ${v(`emoji_table.favorites`)}
        </h3>
        <div class="flex justify-center gap-1">
          ${this.favorites.map((e,n)=>{let r=`border border-dashed border-zinc-600`;return e&&(r=`cursor-pointer bg-white/5 hover:bg-white/10`),this.dragOverSlot===n&&(r+=` bg-white/20`),b`
              <button
                class="relative flex items-center justify-center size-16 rounded-lg text-5xl transition-colors ${r}"
                draggable=${e?`true`:`false`}
                title=${e?v(`emoji_table.favorite_remove_hint`):``}
                @click=${()=>e&&this.onEmojiClicked(e)}
                @dragstart=${t=>e&&this.startDrag(t,e,n)}
                @dragend=${this.endDrag}
                @dragover=${e=>this.dragOver(e,n)}
                @dragleave=${()=>this.dragOverSlot=null}
                @drop=${e=>this.drop(e,n)}
              >
                ${e??``}
                ${t?b`<span
                      class="pointer-events-none absolute top-0.5 left-1.5 text-xs leading-tight font-mono text-zinc-400"
                      translate="no"
                      >${at(n)}</span
                    >`:null}
              </button>
            `})}
        </div>
        ${e?b`<p class="mt-1 text-center text-xs text-zinc-500">
              ${v(t?`emoji_table.favorites_hint`:`emoji_table.favorites_hint_touch`)}
            </p>`:null}
      </section>
    `}startDrag(e,t,n){this.dragged={emoji:t,fromSlot:n},e.dataTransfer?.setData(`text/plain`,t)}dragOver(e,t){this.dragged&&(e.preventDefault(),this.dragOverSlot=t)}drop(e,t){e.preventDefault(),this.dragged&&this.saveFavorites(st(this.favorites,this.dragged.emoji,t)),this.dragged=null,this.dragOverSlot=null}saveFavorites(e){this.favorites=e,this.userSettings.setFavoriteEmojis(e)}renderSection(e){let t=`grid-cols-[repeat(5,auto)] sm:grid-cols-[repeat(8,auto)] lg:grid-cols-[repeat(10,auto)]`;return e.columns===2&&(t=`grid-cols-[repeat(2,auto)]`),e.columns===3&&(t=`grid-cols-[repeat(3,auto)]`),b`
      <section>
        <h3
          class="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400"
        >
          ${v(e.title)}
        </h3>
        <div class="grid ${t} gap-1">
          ${e.emojis.map(e=>b`
              <button
                class="flex items-center justify-center cursor-pointer size-12 sm:size-14 rounded-lg
                       text-3xl sm:text-4xl hover:bg-white/10 active:bg-white/20 transition-colors"
                draggable="true"
                @click=${()=>this.onEmojiClicked(e)}
                @dragstart=${t=>this.startDrag(t,e,null)}
                @dragend=${this.endDrag}
              >
                ${e}
              </button>
            `)}
        </div>
      </section>
    `}hideTable(){this.isVisible=!1,this.eventBus?.emit(new Nt(!1)),this.requestUpdate()}showTable(e){this.onEmojiClicked=e;let t=this.userSettings.favoriteEmojis();this.favorites=Array.from({length:6},(e,n)=>t[n]??null),this.isVisible=!0,this.eventBus?.emit(new Nt(!0)),this.requestUpdate()}createRenderRoot(){return this}};M([i()],Df.prototype,`isVisible`,void 0),M([i()],Df.prototype,`favorites`,void 0),M([i()],Df.prototype,`dragOverSlot`,void 0),Df=M([h(`emoji-table`)],Df);var Of=new Set([L.NUKE_INBOUND,L.HYDROGEN_BOMB_INBOUND,L.MIRV_INBOUND,L.NUKE_DETONATED,L.NAVAL_INVASION_INBOUND,L.ATTACK_REQUEST,L.ALLIANCE_ACCEPTED,L.ALLIANCE_REJECTED,L.ALLIANCE_BROKEN,L.RENEW_ALLIANCE,L.CONQUERED_PLAYER,L.CHAT,L.DONATION_RECEIVED]),kf=e=>Of.has(e),Af=class extends ie{updated(e){super.updated(e),this._eventsContainer&&this._shouldScrollToBottom&&(this._eventsContainer.scrollTop=this._eventsContainer.scrollHeight),this._importantEventsContainer&&this._shouldScrollImportantToBottom&&(this._importantEventsContainer.scrollTop=this._importantEventsContainer.scrollHeight)}renderButton(e){let{content:t,onClick:n,className:r=``,disabled:i=!1,translate:a=!0,hidden:o=!1}=e;return o?b``:b`
      <button
        class="${r}"
        @click=${n}
        ?disabled=${i}
        ?translate=${a}
      >
        ${t}
      </button>
    `}constructor(){super(),this.active=!1,this.events=[],this.userSettings=new be,this._isVisible=!1,this._shouldScrollToBottom=!0,this._shouldScrollImportantToBottom=!0,this.updateMap=[[R.DisplayEvent,this.onDisplayMessageEvent.bind(this)],[R.DisplayChatEvent,this.onDisplayChatEvent.bind(this)],[R.AllianceRequestReply,this.onAllianceRequestReplyEvent.bind(this)],[R.BrokeAlliance,this.onBrokeAllianceEvent.bind(this)],[R.TargetPlayer,this.onTargetPlayerEvent.bind(this)],[R.Emoji,this.onEmojiMessageEvent.bind(this)],[R.UnitIncoming,this.onUnitIncomingEvent.bind(this)],[R.AllianceExpired,this.onAllianceExpiredEvent.bind(this)],[R.DonateEvent,this.onDonateEvent.bind(this)]],this.events=[]}init(){this.eventBus.on(dn,this.onAllianceRequestSentConfirmation.bind(this))}onAllianceRequestSentConfirmation(e){let t=this.game.myPlayer();!t||e.requestor.id()!==t.id()||e.recipient.isRequestingAllianceWith(e.requestor)||this.addEvent({description:v(`events_display.alliance_request_sent`,{name:e.recipient.displayName()}),type:L.ALLIANCE_REQUEST,createdAt:this.game.ticks()})}tick(){if(this.active=!0,this._eventsContainer){let e=this._eventsContainer;this._shouldScrollToBottom=e.scrollHeight-e.scrollTop-e.clientHeight<5}else this._shouldScrollToBottom=!0;if(this._importantEventsContainer){let e=this._importantEventsContainer;this._shouldScrollImportantToBottom=e.scrollHeight-e.scrollTop-e.clientHeight<5}else this._shouldScrollImportantToBottom=!0;!this._isVisible&&!this.game.inSpawnPhase()&&(this._isVisible=!0,this.requestUpdate());let e=this.game.myPlayer();if(!e||!e.isAlive()){this._isVisible&&(this._isVisible=!1,this.requestUpdate());return}let t=this.game.updatesSinceLastTick();if(t)for(let[e,n]of this.updateMap)t[e]?.forEach(n);let n=this.events.filter(e=>{let t=this.game.ticks()-e.createdAt,n=t>=80||t<0,r=(e.type===L.NUKE_INBOUND||e.type===L.HYDROGEN_BOMB_INBOUND||e.type===L.MIRV_INBOUND||e.type===L.NAVAL_INVASION_INBOUND)&&e.unitView!==void 0&&!e.unitView.isActive(),i=!n&&!r;return!i&&e.onDelete&&e.onDelete(),i});n.length>30&&(n=n.slice(-30)),this.events.length!==n.length&&(this.events=n,this.requestUpdate()),this.requestUpdate()}addEvent(e){this.events=[...this.events,e],this.requestUpdate()}resolveParams(e){let t=e.params??{};if((e.message===`events_display.missile_intercepted`||e.message===`events_display.unit_destroyed`)&&typeof t.unit==`string`&&t.unit.startsWith(`unit_type.`)&&(t={...t,unit:v(t.unit)}),t.name===void 0||e.focusPlayerID===void 0)return t;let n=this.game.playerBySmallID(e.focusPlayerID);return n.isPlayer()?{...t,name:n.displayName()}:t}onDisplayMessageEvent(e){let t=this.game.myPlayer();if(e.playerID!==null&&(!t||t.smallID()!==e.playerID)||e.message===`events_display.received_gold_from_captured_ship`)return;let n=e.message;e.message.startsWith(`events_display.`)&&(n=v(e.message,this.resolveParams(e)));let r=e.unitID===void 0?void 0:this.game.unit(e.unitID);this.addEvent({description:n,createdAt:this.game.ticks(),highlight:!0,type:e.messageType,unsafeDescription:!0,unitView:r,focusID:e.focusPlayerID})}onDisplayChatEvent(e){let t=this.game.myPlayer();if(e.playerID===null||!t||t.smallID()!==e.playerID)return;let n=v(`chat.${e.category}.${e.key}`),r=n;if(e.target)try{let t=this.game.player(e.target)?.displayName()??e.target;r=n.replace(`[P1]`,t)}catch(t){console.warn(`Failed to resolve player for target ID '${e.target}'`,t);return}let i=``,a;if(e.recipient!==null){let t=this.game.player(e.recipient);i=t?t.displayName():``,a=t?.smallID()}let o=!e.isFrom;this.addEvent({description:v(o?`chat.to`:`chat.from`,{user:i,msg:r}),createdAt:this.game.ticks(),highlight:!o,minor:o,type:L.CHAT,unsafeDescription:!1,focusID:a}),o||this.eventBus.emit(new Ye(`message`))}onAllianceRequestReplyEvent(e){let t=this.game.myPlayer();if(!t||e.request.requestorID!==t.smallID())return;let n=this.game.playerBySmallID(e.request.recipientID);this.addEvent({description:v(`events_display.alliance_request_status`,{name:n.displayName(),status:e.accepted?v(`events_display.alliance_accepted`):v(`events_display.alliance_rejected`)}),type:e.accepted?L.ALLIANCE_ACCEPTED:L.ALLIANCE_REJECTED,highlight:!0,createdAt:this.game.ticks(),focusID:e.request.recipientID}),this.eventBus.emit(new Ye(e.accepted?`alliance-accepted`:`alliance-declined`))}onBrokeAllianceEvent(e){let t=this.game.myPlayer();if(!t)return;let n=this.game.playerBySmallID(e.betrayedID),r=this.game.playerBySmallID(e.traitorID);if(!n.isDisconnected())if(!n.isTraitor()&&r===t){this.eventBus.emit(new Ye(`alliance-broken`));let t=Math.round((1-this.game.config().traitorDefenseDebuff())*100),r=Math.floor(this.game.config().traitorDuration()*.1),i=r===1?v(`events_display.duration_second`):v(`events_display.duration_seconds_plural`,{seconds:r});this.addEvent({description:v(`events_display.betrayal_description`,{name:n.displayName(),malusPercent:t,durationText:i}),type:L.ALLIANCE_BROKEN,highlight:!0,createdAt:this.game.ticks(),focusID:e.betrayedID})}else n===t&&(this.eventBus.emit(new Ye(`alliance-broken`)),this.addEvent({description:v(`events_display.betrayed_you`,{name:r.displayName()}),type:L.ALLIANCE_BROKEN,highlight:!0,createdAt:this.game.ticks(),focusID:e.traitorID}))}onAllianceExpiredEvent(e){let t=this.game.myPlayer();if(!t)return;let n=e.player1ID===t.smallID()?e.player2ID:e.player2ID===t.smallID()?e.player1ID:null;if(n===null)return;let r=this.game.playerBySmallID(n);!r||!t.isAlive()||!r.isAlive()||this.addEvent({description:v(`events_display.alliance_expired`,{name:r.displayName()}),type:L.ALLIANCE_EXPIRED,highlight:!0,createdAt:this.game.ticks(),focusID:n})}onDonateEvent(e){let t=this.game.myPlayer();if(!t)return;let n=e.recipientId===t.id(),r=e.senderId===t.id();if(!n&&!r)return;let i=n?this.game.player(e.senderId):this.game.player(e.recipientId),a=e.donationType===`gold`,o=n?a?`events_display.received_gold_from_player`:`events_display.received_troops_from_player`:a?`events_display.sent_gold_to_player`:`events_display.sent_troops_to_player`,s={name:i.displayName(),[a?`gold`:`troops`]:a?Me(e.amount):je(Number(e.amount))};this.addEvent({description:v(o,s),type:n?L.DONATION_RECEIVED:L.DONATION_SENT,highlight:!0,createdAt:this.game.ticks(),focusID:i.smallID()})}onTargetPlayerEvent(e){let t=this.game.playerBySmallID(e.playerID),n=this.game.myPlayer();if(!n||!n.isFriendly(t))return;let r=this.game.playerBySmallID(e.targetID);this.addEvent({description:v(`events_display.attack_request`,{name:t.displayName(),target:r.displayName()}),type:L.ATTACK_REQUEST,highlight:!0,createdAt:this.game.ticks(),focusID:e.targetID})}emitGoToPlayerEvent(e){let t=this.game.playerBySmallID(e);t&&this.eventBus.emit(new Zt(t))}emitGoToUnitEvent(e){this.eventBus.emit(new $t(e))}onEmojiMessageEvent(e){let t=this.game.myPlayer();if(!t)return;let n=e.emoji.recipientID===`AllPlayers`?Te:this.game.playerBySmallID(e.emoji.recipientID),r=this.game.playerBySmallID(e.emoji.senderID);if(n===t){if(!this.userSettings.emojis())return;this.addEvent({description:`${r.displayName()}: ${e.emoji.message}`,unsafeDescription:!0,type:L.CHAT,highlight:!0,createdAt:this.game.ticks(),focusID:e.emoji.senderID})}else r===t&&n!==`AllPlayers`?this.addEvent({description:v(`events_display.sent_emoji`,{name:n.displayName(),emoji:e.emoji.message}),unsafeDescription:!0,type:L.CHAT,minor:!0,createdAt:this.game.ticks(),focusID:n.smallID()}):r===t&&this.addEvent({description:v(`events_display.sent_emoji_all`,{emoji:e.emoji.message}),unsafeDescription:!0,type:L.CHAT,minor:!0,createdAt:this.game.ticks()})}onUnitIncomingEvent(e){let t=this.game.myPlayer();if(!t||t.smallID()!==e.playerID)return;let n=this.game.unit(e.unitID),r=e.message;if(e.message.startsWith(`events_display.`)&&n){let t={name:n.owner().displayName()};e.messageType===L.NAVAL_INVASION_INBOUND&&(t.troops=je(n.troops())),r=v(e.message,t)}this.addEvent({description:r,type:e.messageType,unsafeDescription:!1,highlight:!0,createdAt:this.game.ticks(),unitView:n})}getEventDescription(e){return e.unsafeDescription?Ne(Kd(e.description)):e.description}renderBetrayalDebuffTimer(){let e=this.game.myPlayer();if(!e||!e.isTraitor())return b``;let t=e.getTraitorRemainingTicks(),n=Math.ceil(t/10);return n<=0?b``:b`
      ${this.renderButton({content:b`${v(`events_display.betrayal_debuff_ends`,{time:n})}`,className:`text-left text-yellow-400`,translate:!1})}
    `}renderEventRow(e){return b`
      <tr>
        <td
          class="lg:px-2 lg:py-1 p-1 text-left ${te(e.type)}"
        >
          ${e.focusID?this.renderButton({content:this.getEventDescription(e),onClick:()=>{e.focusID&&this.emitGoToPlayerEvent(e.focusID)},className:`text-left`}):e.unitView?this.renderButton({content:this.getEventDescription(e),onClick:()=>{e.unitView&&this.emitGoToUnitEvent(e.unitView)},className:`text-left`}):this.getEventDescription(e)}
        </td>
      </tr>
    `}render(){if(!this.active||!this._isVisible)return b``;let e=this.game.myPlayer(),t=!!(e&&e.isTraitor()&&e.getTraitorRemainingTicks()>0),n=[],r=[];for(let e of this.events)(kf(e.type)&&!e.minor?n:r).push(e);return n.sort((e,t)=>e.createdAt-t.createdAt),r.sort((e,t)=>e.createdAt-t.createdAt),r=r.slice(-4),n.length===0&&r.length===0&&!t?b``:b`
      <div class="flex flex-col gap-1 w-full min-[1200px]:w-96">
        ${r.length>0?b`
              <div
                class="bg-gray-800/92 backdrop-blur-sm max-h-[12vh] lg:max-h-[22vh] overflow-y-auto rounded-lg opacity-90 events-container"
              >
                <table
                  class="w-full border-collapse text-white text-xs lg:text-sm pointer-events-auto"
                >
                  <tbody>
                    ${r.map(e=>this.renderEventRow(e))}
                  </tbody>
                </table>
              </div>
            `:``}
        ${n.length>0||t?b`
              <div
                class="bg-gray-800 backdrop-blur-sm max-h-[30vh] lg:max-h-[40vh] overflow-y-auto rounded-lg shadow-lg border-l-4 border-red-500 important-events-container"
              >
                <table
                  class="w-full border-collapse text-white text-base lg:text-lg font-medium pointer-events-auto"
                >
                  <tbody>
                    ${n.map(e=>this.renderEventRow(e))}
                    ${t?b`
                          <tr>
                            <td class="lg:px-2 lg:py-1 p-1 text-left">
                              ${this.renderBetrayalDebuffTimer()}
                            </td>
                          </tr>
                        `:``}
                  </tbody>
                </table>
              </div>
            `:``}
      </div>
    `}createRenderRoot(){return this}};M([i()],Af.prototype,`_isVisible`,void 0),M([De(`.events-container`)],Af.prototype,`_eventsContainer`,void 0),M([De(`.important-events-container`)],Af.prototype,`_importantEventsContainer`,void 0),Af=M([h(`events-display`)],Af);var jf=class{constructor(e){this.visible=e}},Mf=class extends ie{constructor(...e){super(...e),this.isVisible=!1,this._barVisible=!1,this.isActive=!1,this.progressRatio=0}createRenderRoot(){return this.style.position=`fixed`,this.style.top=`0`,this.style.left=`0`,this.style.width=`100%`,this.style.height=`7px`,this.style.zIndex=`1000`,this.style.pointerEvents=`none`,this}init(){this.isVisible=!0}tick(){if(!this.game||!this.isVisible)return;let e=this.game.config().gameConfig().gameMode===l.Team&&!this.game.inSpawnPhase();this.style.top=e?`7px`:`0px`;let t=this.game.config().spawnImmunityDuration(),n=this.game.config().numSpawnPhaseTurns();if(!this.game.config().hasExtendedSpawnImmunity()||this.game.inSpawnPhase())this.setInactive();else{let e=n+t,r=this.game.ticks();if(r>=e||r<n)this.setInactive();else{let e=Math.max(0,r-n);this.progressRatio=Math.min(1,Math.max(0,e/t)),this.isActive=!0,this.requestUpdate()}}this.emitBarVisibility()}setInactive(){this.isActive&&(this.isActive=!1,this.requestUpdate())}emitBarVisibility(){let e=this.isVisible&&this.isActive;e!==this._barVisible&&(this._barVisible=e,this.eventBus?.emit(new jf(this._barVisible)))}render(){return!this.isVisible||!this.isActive?b``:b`
      <div class="w-full h-full flex z-999">
        <div
          class="h-full transition-all duration-100 ease-in-out"
          style="width: ${this.progressRatio*100}%; background-color: rgba(255, 165, 0, 0.9);"
        ></div>
      </div>
    `}};Mf=M([h(`immunity-timer`)],Mf);var Nf=class extends ie{constructor(...e){super(...e),this.columns=[],this.selected=[],this.open=!1,this.portal=null,this.onDocumentClick=e=>{let t=e.target;this.open&&!this.contains(t)&&!this.portal?.contains(t)&&(this.open=!1)},this.onViewportChange=e=>{let t=e.target;this.open&&!(t instanceof Node&&this.portal?.contains(t))&&this.renderPortal()}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this.onDocumentClick),window.addEventListener(`resize`,this.onViewportChange),window.addEventListener(`scroll`,this.onViewportChange,!0)}disconnectedCallback(){document.removeEventListener(`click`,this.onDocumentClick),window.removeEventListener(`resize`,this.onViewportChange),window.removeEventListener(`scroll`,this.onViewportChange,!0),this.removePortal(),super.disconnectedCallback()}updated(){this.renderPortal()}toggle(e){let t=this.selected.includes(e);if(t&&this.selected.length===1)return;let n=this.columns.map(e=>e.id).filter(n=>n===e?!t:this.selected.includes(n));this.dispatchEvent(new CustomEvent(`columns-changed`,{detail:n,bubbles:!0,composed:!0}))}renderPortal(){if(!this.open||!this.isConnected){this.removePortal();return}let e=this.querySelector(`button`);if(e===null)return;this.portal===null&&(this.portal=document.createElement(`div`),this.portal.className=`column-picker-portal`,document.body.appendChild(this.portal));let t=e.getBoundingClientRect(),n=Math.max(8,window.innerWidth-t.right),r=t.bottom+4;j(b`
        <div
          class="column-picker-popover fixed z-2000 bg-gray-800/95 border border-slate-500 rounded-md p-2 flex flex-col gap-1 overflow-y-auto whitespace-nowrap"
          style="top: ${r}px; right: ${n}px; max-height: ${Math.max(80,Math.min(window.innerHeight*.4,window.innerHeight-r-8))}px;"
        >
          ${this.columns.map(e=>{let t=this.selected.includes(e.id);return b`
              <label
                class="flex items-center gap-2 text-xs lg:text-sm text-white cursor-pointer"
              >
                <input
                  type="checkbox"
                  .checked=${t}
                  ?disabled=${t&&this.selected.length===1}
                  @change=${()=>this.toggle(e.id)}
                />
                ${v(e.labelKey)}
              </label>
            `})}
        </div>
      `,this.portal)}removePortal(){this.portal?.remove(),this.portal=null}render(){return b`
      <button
        class="px-0.5 leading-none text-xs lg:text-sm border rounded-md border-slate-500 transition-colors text-white hover:bg-white/10 bg-gray-700/50"
        title=${v(`leaderboard.configure_columns`)}
        aria-expanded=${this.open}
        aria-haspopup="menu"
        @click=${()=>this.open=!this.open}
      >
        ⚙️
      </button>
    `}};M([A({attribute:!1})],Nf.prototype,`columns`,void 0),M([A({attribute:!1})],Nf.prototype,`selected`,void 0),M([i()],Nf.prototype,`open`,void 0),Nf=M([h(`column-picker`)],Nf);var Pf=600,Ff=2*Pf,If=240,Lf=new class{constructor(){this.history=new Map}record(e,t,n){let r=this.history.get(e);(!r||r.length>0&&r[r.length-1].tick>n)&&(r=[],this.history.set(e,r)),r.push({...t,tick:n});let i=n-Ff;for(;r.length>0&&r[0].tick<i;)r.shift();r.length>If&&r.splice(0,r.length-If)}forget(e){this.history.delete(e)}resetAll(){this.history.clear()}goldIncomePerMin(e){return this.rate(e,e=>e.income)}shipTradeGoldPerMin(e){return this.rate(e,e=>e.trade)}trainTradeGoldPerMin(e){return this.rate(e,e=>e.train)}piracyGoldPerMin(e){return this.rate(e,e=>e.piracy)}rate(e,t){let n=this.history.get(e);if(!n||n.length<2)return 0;let r=n[0],i=n[n.length-1],a=(i.tick-r.tick)/Pf;return a<=0?0:(t(i)-t(r))/a}};function Q(e){return{width:`auto`,align:`end`,kinds:[`player`,`team`],isHideable:!0,...e,isOrderable:e.value!==void 0}}function Rf(e,t,n,r){return Q({id:e,labelKey:t,headerVisual:{kind:`icon`,src:r},align:`center`,value:e=>e.totalUnitLevels(n),cell:e=>Me(e.value)})}var zf={kind:`icon`,src:vf,white:!0},Bf=[Q({id:`rank`,labelKey:`leaderboard.rank`,headerVisual:{kind:`text`,text:`#`},width:`34px`,align:`center`,isHideable:!1,cell:e=>String(e.position)}),Q({id:`clan`,labelKey:`leaderboard.clan`,headerVisual:{kind:`icon`,src:xf},width:`80px`,align:`center`,kinds:[`player`],cell:e=>e.clanTag??``}),Q({id:`player`,labelKey:`leaderboard.player`,headerVisual:{kind:`icon`,src:bf},width:`100px`,align:`start`,kinds:[`player`],isHideable:!1,cell:e=>e.name}),Q({id:`playerType`,labelKey:`leaderboard.playerType`,headerVisual:{kind:`text`,text:`leaderboard.type`},kinds:[`player`],align:`center`,value:e=>{switch(e.type()){case T.Human:return 0;case T.Nation:return 1;case T.Bot:return 2;default:return 3}},cell:e=>{switch(e.value){case 0:return v(`player_type.player`);case 1:return v(`player_type.nation`);case 2:return v(`player_type.bot`);default:return`?`}}}),Q({id:`team`,labelKey:`leaderboard.team`,headerVisual:{kind:`icon`,src:Sf},width:`100px`,align:`start`,kinds:[`team`],isHideable:!1,cell:e=>e.name}),Q({id:`tiles`,labelKey:`leaderboard.owned`,headerVisual:{kind:`icon`,src:yf,white:!0},value:e=>e.numTilesOwned(),cell:(e,t)=>{let n=t.numLandTiles()-t.numTilesWithFallout();return de(n>0?e.value/n:0)}}),Q({id:`gold`,labelKey:`leaderboard.gold`,headerVisual:{kind:`icon`,src:uf},value:e=>Number(e.gold()),cell:e=>Me(e.value)}),Q({id:`goldIncomePerMin`,labelKey:`leaderboard.goldIncomePerMin`,headerVisual:{kind:`icon`,src:uf,superscript:{text:`/m`}},value:e=>Lf.goldIncomePerMin(e.smallID()),cell:e=>Me(e.value)}),Q({id:`shipTradeGoldPerMin`,labelKey:`leaderboard.shipTradeGoldPerMin`,headerVisual:{kind:`icon`,src:hf,superscript:{text:`/m`}},value:e=>Lf.shipTradeGoldPerMin(e.smallID()),cell:e=>Me(e.value)}),Q({id:`piracyGoldPerMin`,labelKey:`leaderboard.piracyGoldPerMin`,headerVisual:{kind:`icon`,src:sf,superscript:{text:`/m`}},value:e=>Lf.piracyGoldPerMin(e.smallID()),cell:e=>Me(e.value)}),Q({id:`trainTradeGoldPerMin`,labelKey:`leaderboard.trainTradeGoldPerMin`,headerVisual:{kind:`icon`,src:lf,superscript:{text:`/m`}},value:e=>Lf.trainTradeGoldPerMin(e.smallID()),cell:e=>Me(e.value)}),Q({id:`troops`,labelKey:`leaderboard.troops`,headerVisual:zf,value:e=>e.troops(),cell:e=>je(e.value)}),Q({id:`maxtroops`,labelKey:`leaderboard.maxtroops`,headerVisual:{...zf,superscript:{src:Cf,white:!0}},value:(e,t)=>t.config().maxTroops(e),cell:e=>je(e.value)}),Rf(`cities`,`leaderboard.cities`,m.City,cf),Rf(`ports`,`leaderboard.ports`,m.Port,hf),Rf(`factories`,`leaderboard.factories`,m.Factory,lf),Rf(`silos`,`leaderboard.launchers`,m.MissileSilo,ff),Rf(`sams`,`leaderboard.sams`,m.SAMLauncher,gf),Rf(`warships`,`leaderboard.warships`,m.Warship,sf),Q({id:`allies`,labelKey:`leaderboard.allies`,headerVisual:{kind:`icon`,src:wf},align:`center`,value:e=>e.allies().length,cell:e=>Me(e.value)}),Q({id:`betrayals`,labelKey:`leaderboard.betrayals`,headerVisual:{kind:`icon`,src:Tf},align:`center`,value:e=>e.betrayals(),cell:e=>Me(e.value)})];function Vf(e){return Bf.filter(t=>t.kinds.includes(e))}function Hf(e,t){Lf.record(e.smallID(),{income:e.goldEarned(),trade:e.tradeGold(),train:e.trainGold(),piracy:e.piracyGold()},t.ticks())}function Uf(e,t,n){Hf(e,t);let r=new Map;for(let i of n)i.value!==void 0&&r.set(i.id,i.value(e,t));return r}new Map(Bf.map(e=>[e.id,e]));var Wf=24,Gf=180,Kf=4,qf=4,Jf=`32px`,Yf={start:`justify-start text-left`,center:`justify-center text-center`,end:`justify-end text-right`},Xf=`h-6 md:h-8 lg:h-9 min-w-0 px-1 flex items-center`,Zf=`border-l border-l-slate-600/40`,Qf=`border-l border-l-slate-500`,$f=class extends ie{constructor(...e){super(...e),this.game=null,this.visible=!1,this.userSettings=new be,this.rows=[],this.sortKey=null,this.sortOrder=`desc`,this.scrollOffsetPx=0,this.rowHeightPx=Wf,this.viewportHeightPx=Gf}createRenderRoot(){return this}willUpdate(e){e.has(`visible`)&&this.visible&&(this.scrollOffsetPx=0,this.updateStats())}updated(){let e=this.querySelector(`.stats-table-scroll`);if(!(e instanceof HTMLElement))return;let t=e.querySelector(`.stats-table-row`),n=t instanceof HTMLElement?t.offsetHeight:0,r=e.clientHeight,i=!1;n>0&&n!==this.rowHeightPx&&(this.rowHeightPx=n,i=!0),r>0&&r!==this.viewportHeightPx&&(this.viewportHeightPx=r,i=!0),i&&this.requestUpdate()}onScroll(e){this.scrollOffsetPx=e.target.scrollTop}refresh(){this.visible&&this.updateStats()}visibleColumns(){let e=this.userSettings.statsColumns(this.tableKind);return Vf(this.tableKind).filter(t=>!t.isHideable||e.includes(t.id))}setSort(e){this.sortKey===e?this.sortOrder=this.sortOrder===`asc`?`desc`:`asc`:(this.sortKey=e,this.sortOrder=`desc`),this.updateStats()}onColumnsChanged(e){this.userSettings.setStatsColumns(this.tableKind,e.detail),this.updateStats()}updateStats(){if(this.game===null)return;let e=this.visibleColumns(),t=e.filter(e=>e.isOrderable);t.length>0&&!t.some(e=>e.id===this.sortKey)&&(this.sortKey=t[0].id,this.sortOrder=`desc`);let n=this.sortKey,r=this.buildRows(this.game,e),i=this.sortOrder===`asc`?1:-1;this.rows=t.length===0||n===null?r:r.sort((e,t)=>i*((e.values.get(n)??0)-(t.values.get(n)??0))),this.requestUpdate()}renderHeaderVisual(e,t){let n=e.headerVisual;return n===void 0?b`<span>${t}</span>`:n.kind===`text`?b`<span>${v(n.text)}</span>`:b`<span class="inline-flex items-start">
      <img
        class="size-[1.1rem] object-contain ${n.white===!0?`brightness-0 invert`:``}"
        src=${n.src}
        alt=""
        aria-hidden="true"
      />${n.superscript?`src`in n.superscript?b`<img
              class="size-[0.825rem] object-contain -ml-0.5 ${n.superscript.white===!0?`brightness-0 invert`:``}"
              src=${n.superscript.src}
              alt=""
              aria-hidden="true"
            />`:b`<span class="text-[0.6rem] ml-0.5 self-center leading-none"
              >${v(n.superscript.text)}</span
            >`:f}
    </span>`}renderHeaderCell(e,t){let n=v(e.labelKey),r=this.renderHeaderVisual(e,n),i=this.sortKey===e.id;return b`
      <div
        class="stats-table-header-cell ${Xf} justify-center text-center whitespace-nowrap border-b border-b-slate-500 ${t>0?Qf:``}"
        role="columnheader"
        title=${n}
        aria-sort=${e.isOrderable?i?this.sortOrder===`asc`?`ascending`:`descending`:`none`:f}
      >
        ${e.isOrderable?b`<button
              class="inline-flex items-center justify-center gap-1 hover:text-sky-200 transition-colors"
              aria-label=${n}
              @click=${()=>this.setSort(e.id)}
            >
              ${r}
              ${i?b`<span class="text-sky-300" aria-hidden="true"
                    >${this.sortOrder===`asc`?`↑`:`↓`}</span
                  >`:f}
            </button>`:r}
      </div>
    `}renderCell(e,t,n,r){return b`
      <div
        class="stats-table-cell ${Xf} ${Yf[e.align]} tabular-nums ${t>0?Zf:``} ${r}"
        role="cell"
      >
        <span class="block w-full truncate">${n}</span>
      </div>
    `}renderRow(e,t,{row:n,position:r},i,a=!1){return b`
      <div
        class="stats-table-row grid col-span-full hover:bg-slate-600/60 ${a?`stats-table-pinned-row bg-gray-700/95`:``} ${n.emphasized?`font-bold`:``} ${n.onClick?`cursor-pointer`:``}"
        style="grid-template-columns: subgrid; grid-column: 1 / -1;"
        role="row"
        @click=${n.onClick??f}
      >
        ${Qe(t,e=>e.id,(t,a)=>this.renderCell(t,a,t.cell({...n,position:r,value:n.values.get(t.id)??0},e),i))}
        <div
          class="h-6 md:h-8 lg:h-9 ${Zf} ${i}"
          aria-hidden="true"
        ></div>
      </div>
    `}render(){let e=this.game;if(!this.visible||e===null)return b``;let t=this.visibleColumns(),n=this.rows.findIndex(e=>e.pinned),r=n>qf?{row:this.rows[n],position:n+1}:null,i=r===null?this.rows:this.rows.filter((e,t)=>t!==n),a=Math.max(0,Math.floor(this.scrollOffsetPx/this.rowHeightPx)-Kf),o=Math.min(i.length,Math.ceil((this.scrollOffsetPx+this.viewportHeightPx)/this.rowHeightPx)+Kf),s=i.slice(a,o).map((e,t)=>{let i=a+t;return{row:e,position:r!==null&&i>=n?i+2:i+1}}),c=a*this.rowHeightPx,l=(i.length-o)*this.rowHeightPx,u=`${t.map(e=>e.width).join(` `)} ${Jf}`,d=r===null?`max-h-[7.5rem] md:max-h-[10rem] lg:max-h-[11.25rem]`:`max-h-[6rem] md:max-h-[8rem] lg:max-h-[9rem]`;return b`
      <div class="stats-table relative mt-1 text-white text-xs lg:text-sm">
        <div
          class="overflow-x-auto rounded-lg bg-gray-800/85"
          @contextmenu=${e=>e.preventDefault()}
        >
          <div
            class="stats-table-content grid w-max min-w-full"
            style="grid-template-columns: ${u};"
            role="table"
          >
            <div
              class="stats-table-header grid col-span-full font-bold bg-gray-700/95"
              style="grid-template-columns: subgrid; grid-column: 1 / -1;"
              role="row"
            >
              ${Qe(t,e=>e.id,(e,t)=>this.renderHeaderCell(e,t))}
              <div
                class="${Xf} justify-center border-b border-b-slate-500 ${Qf}"
                role="columnheader"
              >
                <column-picker
                  class="inline-flex"
                  .columns=${Vf(this.tableKind).filter(e=>e.isHideable)}
                  .selected=${this.userSettings.statsColumns(this.tableKind)}
                  @columns-changed=${this.onColumnsChanged}
                ></column-picker>
              </div>
            </div>

            <div
              class="stats-table-scroll ${d} grid col-span-full overflow-y-scroll overflow-x-hidden"
              style="grid-template-columns: subgrid; grid-column: 1 / -1;"
              role="rowgroup"
              @scroll=${this.onScroll}
            >
              ${c>0?b`<div
                    class="stats-table-spacer col-span-full"
                    style="height: ${c}px"
                    aria-hidden="true"
                  ></div>`:f}
              ${Qe(s,e=>e.row.key,(n,i)=>this.renderRow(e,t,n,i<s.length-1||r!==null||l>0?`border-b border-b-slate-500`:``))}
              ${l>0?b`<div
                    class="stats-table-spacer col-span-full"
                    style="height: ${l}px"
                    aria-hidden="true"
                  ></div>`:f}
            </div>

            ${r===null?f:this.renderRow(e,t,r,``,!0)}
          </div>
        </div>
      </div>
    `}};M([A({type:Boolean})],$f.prototype,`visible`,void 0),M([i()],$f.prototype,`sortKey`,void 0),M([i()],$f.prototype,`sortOrder`,void 0),M([i()],$f.prototype,`scrollOffsetPx`,void 0);var ep=class extends $f{constructor(...e){super(...e),this.eventBus=null,this.tableKind=`player`}buildRows(e,t){let n=e.myPlayer();return e.playerViews().filter(e=>e.isAlive()).map(r=>({key:r.id(),name:r.name(),clanTag:r.clanTag(),values:Uf(r,e,t),emphasized:n!==null&&(r===n||r.isOnSameTeam(n)),pinned:r===n,onClick:()=>{this.eventBus!==null&&this.eventBus.emit(new Zt(r))}}))}};ep=M([h(`player-stats`)],ep);var tp=class{constructor(e){this.visible=e}},np=class extends ie{constructor(...e){super(...e),this.ratios=[0],this._barVisible=!1,this.teams=[],this.colors=[`rgb(from var(--color-bright-blue) r g b / 0.85)`,`rgba(0, 0, 0, 0.5)`],this.isVisible=!1,this.hoveredIndex=null}createRenderRoot(){return this.style.position=`fixed`,this.style.top=`0`,this.style.left=`0`,this.style.width=`100%`,this.style.height=`9px`,this.style.zIndex=`1000`,this.style.pointerEvents=`none`,this}init(){this.isVisible=!0}tick(){if(this.game.config().gameConfig().gameType===s.Singleplayer&&this.game.inSpawnPhase()){this.ratios=[],this.teams=[],this.colors=[],this.requestUpdate();return}if(this.game.inSpawnPhase())this.ratios=[this.game.ticks()/this.game.config().numSpawnPhaseTurns()],this.teams=[],this.colors=[`rgb(from var(--color-bright-blue) r g b / 0.85)`];else if(this.ratios=[],this.teams=[],this.colors=[],this.game.config().gameConfig().gameMode===l.Team){let e=new Map;for(let t of this.game.players()){let n=t.team();if(n===null)continue;let r=e.get(n)??0;e.set(n,r+t.numTilesOwned())}let t=Ze.current(),n=rp(e.values());if(n>0)for(let[r,i]of e){let e=i/n;this.ratios.push(e),this.teams.push(r),this.colors.push(t.teamColor(r).toRgbString())}}this.requestUpdate(),this.emitBarVisibility()}emitBarVisibility(){let e=this.isVisible&&this.ratios.length>0;e!==this._barVisible&&(this._barVisible=e,this.eventBus?.emit(new tp(this._barVisible)))}render(){return!this.isVisible||this.ratios.length===0||this.colors.length===0||!this.game.inSpawnPhase()&&this.game.config().gameConfig().gameMode!==l.Team?b``:b`
      <div class="relative w-full h-full flex z-999">
        ${this.ratios.map((e,t)=>{let n=this.colors[t]||`rgba(0, 0, 0, 0.5)`;return b`
            <div
              class="h-full pointer-events-auto transition-all duration-100 ease-in-out w-(--width) bg-(--bg) border-b-3 border-r-2 border-black"
              style="--width: ${e*100}%; --bg: ${n};"
              @mouseenter=${()=>this.hoveredIndex=t}
              @mouseleave=${()=>this.hoveredIndex=null}
            ></div>
          `})}
        ${this.renderTooltip()}
      </div>
    `}renderTooltip(){let e=this.hoveredIndex,t=e===null?void 0:this.teams[e];if(e===null||t===void 0)return f;let n=0,r=0;for(let t=0;t<=e;t++)r=(n+this.ratios[t]/2)*100,n+=this.ratios[t];let i=`clamp(64px, ${r}%, calc(100% - 64px))`,a=`team_colors.${t.toLowerCase()}`,o=v(a);return b`
      <div
        class="absolute top-3.5 -translate-x-1/2 z-999 px-2 py-1 rounded bg-black/85 text-white text-xs text-center break-words pointer-events-none"
        style="left: ${i}; max-width: 128px"
      >
        ${v(`spawn_timer.team_percent_tooltip`,{team:o===a?t:o,percent:de(this.ratios[e])})}
      </div>
    `}};M([i()],np.prototype,`hoveredIndex`,void 0),np=M([h(`spawn-timer`)],np);function rp(e){let t=0;for(let n of e)t+=n;return t}var ip=N(`images/ExitIconWhite.svg`),ap=N(`images/SettingIconWhite.svg`),op=N(`images/TreeIconWhite.svg`),sp=class{constructor(e=!0,t=!1,n=!1){this.isVisible=e,this.shouldPause=t,this.isPaused=n}},cp=class extends ie{constructor(...e){super(...e),this.isVisible=!1,this.alternateView=!1,this.shouldPause=!1,this.wasPausedWhenOpened=!1,this.gameConfig=null,this.mapNationCount=null,this.handleOutsideClick=e=>{this.isVisible&&this.modalOverlay&&e.target===this.modalOverlay&&this.closeModal()},this.handleKeyDown=e=>{this.isVisible&&e.key===`Escape`&&this.closeModal()}}init(){this.eventBus.on(sp,e=>{this.isVisible=e.isVisible,this.shouldPause=e.shouldPause,this.wasPausedWhenOpened=e.isPaused,this.pauseGame(!0)})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener(`click`,this.handleOutsideClick,!0),window.addEventListener(`keydown`,this.handleKeyDown)}disconnectedCallback(){window.removeEventListener(`click`,this.handleOutsideClick,!0),window.removeEventListener(`keydown`,this.handleKeyDown),super.disconnectedCallback()}get open(){return this.isVisible}openModal(){this.isVisible=!0,this.requestUpdate()}closeModal({keepPause:e=!1}={}){this.isVisible=!1,this.requestUpdate(),e||this.pauseGame(!1)}pauseGame(e){e?se.gameplayStop():this.wasPausedWhenOpened||se.gameplayStart(),this.shouldPause&&!this.wasPausedWhenOpened&&this.eventBus.emit(new un(e))}onTerrainButtonClick(){this.alternateView=!this.alternateView,this.eventBus.emit(new _t(this.alternateView)),this.requestUpdate()}onOpenSettingsButtonClick(){let e=document.getElementById(`game-settings`);if(e===null||typeof e.open!=`function`){console.warn(`In-game settings modal (#game-settings) not found`);return}this.closeModal({keepPause:!0}),e.open({tab:`gameplay`,onReturn:()=>this.openModal()})}onRenderDebugGuiButtonClick(){this.eventBus.emit(new bt),this.closeModal()}onExitButtonClick(){window.location.href=E()}renderModifiers(){let e=this.gameConfig;if(e===null)return null;let t=Fe(e,this.mapNationCount),n=Ve(e,`mx-3 mt-2`),r=We(e,`mx-3 mt-2`);return t.length===0&&n===null&&r===null?null:b`
      <div class="border-t border-slate-600 pt-3 mt-4" data-game-modifiers>
        <div
          class="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider"
        >
          ${v(`user_setting.modifiers`)}
        </div>
        ${t.length>0?b`<div
              class="flex flex-wrap gap-1 px-3 pt-1 uppercase"
              data-modifier-tags
            >
              ${t.map(e=>b`<span class=${Ke}
                    >${Re(e)}</span
                  >`)}
            </div>`:null}
        ${n} ${r}
      </div>
    `}render(){return this.isVisible?b`
      <div
        class="modal-overlay fixed inset-0 bg-black/60 backdrop-blur-xs z-2000 flex items-center justify-center p-4"
        @contextmenu=${e=>e.preventDefault()}
      >
        <div
          class="bg-slate-800 border border-slate-600 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto"
        >
          <div
            class="flex items-center justify-between p-4 border-b border-slate-600"
          >
            <div class="flex items-center gap-2">
              <img
                src=${ap}
                alt=""
                width="24"
                height="24"
                class="align-middle"
              />
              <h2 class="text-xl font-semibold text-white">
                ${v(`user_setting.game_menu_title`)}
              </h2>
            </div>
            <button
              class="text-slate-400 hover:text-white text-2xl font-bold leading-none"
              @click=${this.closeModal}
            >
              ×
            </button>
          </div>

          <div class="p-4 flex flex-col gap-3">
            <button
              class="flex gap-3 items-center w-full text-left p-3 hover:bg-slate-700 rounded-sm text-white transition-colors"
              data-open-settings
              @click="${this.onOpenSettingsButtonClick}"
            >
              <img src=${ap} alt="" width="20" height="20" />
              <div class="flex-1">
                <div class="font-medium">
                  ${v(`user_setting.open_settings_label`)}
                </div>
                <div class="text-sm text-slate-400">
                  ${v(`user_setting.open_settings_desc`)}
                </div>
              </div>
            </button>

            <button
              class="flex gap-3 items-center w-full text-left p-3 hover:bg-slate-700 rounded-sm text-white transition-colors"
              @click="${this.onTerrainButtonClick}"
            >
              <img src=${op} alt="" width="20" height="20" />
              <div class="flex-1">
                <div class="font-medium">
                  ${v(`user_setting.toggle_terrain`)}
                </div>
                <div class="text-sm text-slate-400">
                  ${v(`user_setting.toggle_view_desc`)}
                </div>
              </div>
              <div class="text-sm text-slate-400">
                ${this.alternateView?v(`user_setting.on`):v(`user_setting.off`)}
              </div>
            </button>

            ${this.renderModifiers()}

            <div class="border-t border-slate-600 pt-3 mt-4">
              <div
                class="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider"
              >
                ${v(`user_setting.development_only`)}
              </div>

              <button
                class="flex gap-3 items-center w-full text-left p-3 hover:bg-slate-700 rounded-sm text-white transition-colors"
                @click="${this.onRenderDebugGuiButtonClick}"
              >
                <img src=${ap} alt="" width="20" height="20" />
                <div class="flex-1">
                  <div class="font-medium">
                    ${v(`user_setting.render_debug_gui`)}
                  </div>
                  <div class="text-sm text-slate-400">
                    ${v(`user_setting.render_debug_gui_desc`)}
                  </div>
                </div>
              </button>
            </div>

            <div class="border-t border-slate-600 pt-3 mt-4">
              <button
                class="flex gap-3 items-center w-full text-left p-3 hover:bg-red-600/20 rounded-sm text-red-400 transition-colors"
                @click="${this.onExitButtonClick}"
              >
                <img src=${ip} alt="" width="20" height="20" />
                <div class="flex-1">
                  <div class="font-medium">
                    ${v(`user_setting.exit_game_label`)}
                  </div>
                  <div class="text-sm text-slate-400">
                    ${v(`user_setting.exit_game_info`)}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    `:null}};M([i()],cp.prototype,`isVisible`,void 0),M([i()],cp.prototype,`alternateView`,void 0),M([De(`.modal-overlay`)],cp.prototype,`modalOverlay`,void 0),M([A({type:Boolean})],cp.prototype,`shouldPause`,void 0),M([A({type:Boolean})],cp.prototype,`wasPausedWhenOpened`,void 0),M([A({attribute:!1})],cp.prototype,`gameConfig`,void 0),M([A({attribute:!1})],cp.prototype,`mapNationCount`,void 0),cp=M([h(`settings-modal`)],cp);var lp={value:()=>{}};function up(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+``)||r in n||/[\s.]/.test(r))throw Error(`illegal type: `+r);n[r]=[]}return new dp(n)}function dp(e){this._=e}function fp(e,t){return e.trim().split(/^|\s+/).map(function(e){var n=``,r=e.indexOf(`.`);if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw Error(`unknown type: `+e);return{type:e,name:n}})}dp.prototype=up.prototype={constructor:dp,on:function(e,t){var n=this._,r=fp(e+``,n),i,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((i=(e=r[a]).type)&&(i=pp(n[i],e.name)))return i;return}if(t!=null&&typeof t!=`function`)throw Error(`invalid callback: `+t);for(;++a<o;)if(i=(e=r[a]).type)n[i]=mp(n[i],e.name,t);else if(t==null)for(i in n)n[i]=mp(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new dp(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(var r=this._[e],i=0,a=r.length;i<a;++i)r[i].value.apply(t,n)}};function pp(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function mp(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=lp,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var hp={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function gp(e){var t=e+=``,n=t.indexOf(`:`);return n>=0&&(t=e.slice(0,n))!==`xmlns`&&(e=e.slice(n+1)),hp.hasOwnProperty(t)?{space:hp[t],local:e}:e}function _p(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===`http://www.w3.org/1999/xhtml`&&t.documentElement.namespaceURI===`http://www.w3.org/1999/xhtml`?t.createElement(e):t.createElementNS(n,e)}}function vp(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function yp(e){var t=gp(e);return(t.local?vp:_p)(t)}function bp(){}function xp(e){return e==null?bp:function(){return this.querySelector(e)}}function Sp(e){typeof e!=`function`&&(e=xp(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=Array(o),c,l,u=0;u<o;++u)(c=a[u])&&(l=e.call(c,c.__data__,u,a))&&(`__data__`in c&&(l.__data__=c.__data__),s[u]=l);return new uh(r,this._parents)}function Cp(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function wp(){return[]}function Tp(e){return e==null?wp:function(){return this.querySelectorAll(e)}}function Ep(e){return function(){return Cp(e.apply(this,arguments))}}function Dp(e){e=typeof e==`function`?Ep(e):Tp(e);for(var t=this._groups,n=t.length,r=[],i=[],a=0;a<n;++a)for(var o=t[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&(r.push(e.call(c,c.__data__,l,o)),i.push(c));return new uh(r,i)}function Op(e){return function(){return this.matches(e)}}function kp(e){return function(t){return t.matches(e)}}var Ap=Array.prototype.find;function jp(e){return function(){return Ap.call(this.children,e)}}function Mp(){return this.firstElementChild}function Np(e){return this.select(e==null?Mp:jp(typeof e==`function`?e:kp(e)))}var Pp=Array.prototype.filter;function Fp(){return Array.from(this.children)}function Ip(e){return function(){return Pp.call(this.children,e)}}function Lp(e){return this.selectAll(e==null?Fp:Ip(typeof e==`function`?e:kp(e)))}function Rp(e){typeof e!=`function`&&(e=Op(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new uh(r,this._parents)}function zp(e){return Array(e.length)}function Bp(){return new uh(this._enter||this._groups.map(zp),this._parents)}function Vp(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Vp.prototype={constructor:Vp,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Hp(e){return function(){return e}}function Up(e,t,n,r,i,a){for(var o=0,s,c=t.length,l=a.length;o<l;++o)(s=t[o])?(s.__data__=a[o],r[o]=s):n[o]=new Vp(e,a[o]);for(;o<c;++o)(s=t[o])&&(i[o]=s)}function Wp(e,t,n,r,i,a,o){var s,c,l=new Map,u=t.length,d=a.length,f=Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=o.call(c,c.__data__,s,t)+``,l.has(p)?i[s]=c:l.set(p,c));for(s=0;s<d;++s)p=o.call(e,a[s],s,a)+``,(c=l.get(p))?(r[s]=c,c.__data__=a[s],l.delete(p)):n[s]=new Vp(e,a[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(i[s]=c)}function Gp(e){return e.__data__}function Kp(e,t){if(!arguments.length)return Array.from(this,Gp);var n=t?Wp:Up,r=this._parents,i=this._groups;typeof e!=`function`&&(e=Hp(e));for(var a=i.length,o=Array(a),s=Array(a),c=Array(a),l=0;l<a;++l){var u=r[l],d=i[l],f=d.length,p=qp(e.call(u,u&&u.__data__,l,r)),m=p.length,h=s[l]=Array(m),g=o[l]=Array(m);n(u,d,h,g,c[l]=Array(f),p,t);for(var _=0,v=0,y,b;_<m;++_)if(y=h[_]){for(_>=v&&(v=_+1);!(b=g[v])&&++v<m;);y._next=b||null}}return o=new uh(o,r),o._enter=s,o._exit=c,o}function qp(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function Jp(){return new uh(this._exit||this._groups.map(zp),this._parents)}function Yp(e,t,n){var r=this.enter(),i=this,a=this.exit();return typeof e==`function`?(r=e(r),r&&=r.selection()):r=r.append(e+``),t!=null&&(i=t(i),i&&=i.selection()),n==null?a.remove():n(a),r&&i?r.merge(i).order():i}function Xp(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,a=r.length,o=Math.min(i,a),s=Array(i),c=0;c<o;++c)for(var l=n[c],u=r[c],d=l.length,f=s[c]=Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<i;++c)s[c]=n[c];return new uh(s,this._parents)}function Zp(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,a=r[i],o;--i>=0;)(o=r[i])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function Qp(e){e||=$p;function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}for(var n=this._groups,r=n.length,i=Array(r),a=0;a<r;++a){for(var o=n[a],s=o.length,c=i[a]=Array(s),l,u=0;u<s;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new uh(i,this._parents).order()}function $p(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function em(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function tm(){return Array.from(this)}function nm(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}function rm(){let e=0;for(let t of this)++e;return e}function im(){return!this.node()}function am(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],a=0,o=i.length,s;a<o;++a)(s=i[a])&&e.call(s,s.__data__,a,i);return this}function om(e){return function(){this.removeAttribute(e)}}function sm(e){return function(){this.removeAttributeNS(e.space,e.local)}}function cm(e,t){return function(){this.setAttribute(e,t)}}function lm(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function um(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function dm(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function fm(e,t){var n=gp(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?sm:om:typeof t==`function`?n.local?dm:um:n.local?lm:cm)(n,t))}function pm(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function mm(e){return function(){this.style.removeProperty(e)}}function hm(e,t,n){return function(){this.style.setProperty(e,t,n)}}function gm(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function _m(e,t,n){return arguments.length>1?this.each((t==null?mm:typeof t==`function`?gm:hm)(e,t,n??``)):vm(this.node(),e)}function vm(e,t){return e.style.getPropertyValue(t)||pm(e).getComputedStyle(e,null).getPropertyValue(t)}function ym(e){return function(){delete this[e]}}function bm(e,t){return function(){this[e]=t}}function xm(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Sm(e,t){return arguments.length>1?this.each((t==null?ym:typeof t==`function`?xm:bm)(e,t)):this.node()[e]}function Cm(e){return e.trim().split(/^|\s+/)}function wm(e){return e.classList||new Tm(e)}function Tm(e){this._node=e,this._names=Cm(e.getAttribute(`class`)||``)}Tm.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute(`class`,this._names.join(` `)))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute(`class`,this._names.join(` `)))},contains:function(e){return this._names.indexOf(e)>=0}};function Em(e,t){for(var n=wm(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function Dm(e,t){for(var n=wm(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function Om(e){return function(){Em(this,e)}}function km(e){return function(){Dm(this,e)}}function Am(e,t){return function(){(t.apply(this,arguments)?Em:Dm)(this,e)}}function jm(e,t){var n=Cm(e+``);if(arguments.length<2){for(var r=wm(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t==`function`?Am:t?Om:km)(n,t))}function Mm(){this.textContent=``}function Nm(e){return function(){this.textContent=e}}function Pm(e){return function(){var t=e.apply(this,arguments);this.textContent=t??``}}function Fm(e){return arguments.length?this.each(e==null?Mm:(typeof e==`function`?Pm:Nm)(e)):this.node().textContent}function Im(){this.innerHTML=``}function Lm(e){return function(){this.innerHTML=e}}function Rm(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??``}}function zm(e){return arguments.length?this.each(e==null?Im:(typeof e==`function`?Rm:Lm)(e)):this.node().innerHTML}function Bm(){this.nextSibling&&this.parentNode.appendChild(this)}function Vm(){return this.each(Bm)}function Hm(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Um(){return this.each(Hm)}function Wm(e){var t=typeof e==`function`?e:yp(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Gm(){return null}function Km(e,t){var n=typeof e==`function`?e:yp(e),r=t==null?Gm:typeof t==`function`?t:xp(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function qm(){var e=this.parentNode;e&&e.removeChild(this)}function Jm(){return this.each(qm)}function Ym(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Xm(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Zm(e){return this.select(e?Xm:Ym)}function Qm(e){return arguments.length?this.property(`__data__`,e):this.node().__data__}function $m(e){return function(t){e.call(this,t,this.__data__)}}function eh(e){return e.trim().split(/^|\s+/).map(function(e){var t=``,n=e.indexOf(`.`);return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function th(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,a;n<i;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++r]=a;++r?t.length=r:delete this.__on}}}function nh(e,t,n){return function(){var r=this.__on,i,a=$m(t);if(r){for(var o=0,s=r.length;o<s;++o)if((i=r[o]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=n),i.value=t;return}}this.addEventListener(e.type,a,n),i={type:e.type,name:e.name,value:t,listener:a,options:n},r?r.push(i):this.__on=[i]}}function rh(e,t,n){var r=eh(e+``),i,a=r.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(i=0,u=s[c];i<a;++i)if((o=r[i]).type===u.type&&o.name===u.name)return u.value}return}for(s=t?nh:th,i=0;i<a;++i)this.each(s(r[i],t,n));return this}function ih(e,t,n){var r=pm(e),i=r.CustomEvent;typeof i==`function`?i=new i(t,n):(i=r.document.createEvent(`Event`),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function ah(e,t){return function(){return ih(this,e,t)}}function oh(e,t){return function(){return ih(this,e,t.apply(this,arguments))}}function sh(e,t){return this.each((typeof t==`function`?oh:ah)(e,t))}function*ch(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length,o;i<a;++i)(o=r[i])&&(yield o)}var lh=[null];function uh(e,t){this._groups=e,this._parents=t}function dh(){return new uh([[document.documentElement]],lh)}function fh(){return this}uh.prototype=dh.prototype={constructor:uh,select:Sp,selectAll:Dp,selectChild:Np,selectChildren:Lp,filter:Rp,data:Kp,enter:Bp,exit:Jp,join:Yp,merge:Xp,selection:fh,order:Zp,sort:Qp,call:em,nodes:tm,node:nm,size:rm,empty:im,each:am,attr:fm,style:_m,property:Sm,classed:jm,text:Fm,html:zm,raise:Vm,lower:Um,append:Wm,insert:Km,remove:Jm,clone:Zm,datum:Qm,on:rh,dispatch:sh,[Symbol.iterator]:ch};function ph(e){return typeof e==`string`?new uh([[document.querySelector(e)]],[document.documentElement]):new uh([[e]],lh)}function mh(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function hh(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function gh(){}var _h=.7,vh=1/_h,yh=`\\s*([+-]?\\d+)\\s*`,bh=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,xh=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,Sh=/^#([0-9a-f]{3,8})$/,Ch=RegExp(`^rgb\\(${yh},${yh},${yh}\\)$`),wh=RegExp(`^rgb\\(${xh},${xh},${xh}\\)$`),Th=RegExp(`^rgba\\(${yh},${yh},${yh},${bh}\\)$`),Eh=RegExp(`^rgba\\(${xh},${xh},${xh},${bh}\\)$`),Dh=RegExp(`^hsl\\(${bh},${xh},${xh}\\)$`),Oh=RegExp(`^hsla\\(${bh},${xh},${xh},${bh}\\)$`),kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};mh(gh,Ph,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Ah,formatHex:Ah,formatHex8:jh,formatHsl:Mh,formatRgb:Nh,toString:Nh});function Ah(){return this.rgb().formatHex()}function jh(){return this.rgb().formatHex8()}function Mh(){return qh(this).formatHsl()}function Nh(){return this.rgb().formatRgb()}function Ph(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=Sh.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Fh(t):n===3?new zh(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ih(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ih(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Ch.exec(e))?new zh(t[1],t[2],t[3],1):(t=wh.exec(e))?new zh(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Th.exec(e))?Ih(t[1],t[2],t[3],t[4]):(t=Eh.exec(e))?Ih(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Dh.exec(e))?Kh(t[1],t[2]/100,t[3]/100,1):(t=Oh.exec(e))?Kh(t[1],t[2]/100,t[3]/100,t[4]):kh.hasOwnProperty(e)?Fh(kh[e]):e===`transparent`?new zh(NaN,NaN,NaN,0):null}function Fh(e){return new zh(e>>16&255,e>>8&255,e&255,1)}function Ih(e,t,n,r){return r<=0&&(e=t=n=NaN),new zh(e,t,n,r)}function Lh(e){return e instanceof gh||(e=Ph(e)),e?(e=e.rgb(),new zh(e.r,e.g,e.b,e.opacity)):new zh}function Rh(e,t,n,r){return arguments.length===1?Lh(e):new zh(e,t,n,r??1)}function zh(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}mh(zh,Rh,hh(gh,{brighter(e){return e=e==null?vh:vh**+e,new zh(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?_h:_h**+e,new zh(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new zh(Wh(this.r),Wh(this.g),Wh(this.b),Uh(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Bh,formatHex:Bh,formatHex8:Vh,formatRgb:Hh,toString:Hh}));function Bh(){return`#${Gh(this.r)}${Gh(this.g)}${Gh(this.b)}`}function Vh(){return`#${Gh(this.r)}${Gh(this.g)}${Gh(this.b)}${Gh((isNaN(this.opacity)?1:this.opacity)*255)}`}function Hh(){let e=Uh(this.opacity);return`${e===1?`rgb(`:`rgba(`}${Wh(this.r)}, ${Wh(this.g)}, ${Wh(this.b)}${e===1?`)`:`, ${e})`}`}function Uh(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Wh(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Gh(e){return e=Wh(e),(e<16?`0`:``)+e.toString(16)}function Kh(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Yh(e,t,n,r)}function qh(e){if(e instanceof Yh)return new Yh(e.h,e.s,e.l,e.opacity);if(e instanceof gh||(e=Ph(e)),!e)return new Yh;if(e instanceof Yh)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,c=(a+i)/2;return s?(o=t===a?(n-r)/s+(n<r)*6:n===a?(r-t)/s+2:(t-n)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new Yh(o,s,c,e.opacity)}function Jh(e,t,n,r){return arguments.length===1?qh(e):new Yh(e,t,n,r??1)}function Yh(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}mh(Yh,Jh,hh(gh,{brighter(e){return e=e==null?vh:vh**+e,new Yh(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?_h:_h**+e,new Yh(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new zh(Qh(e>=240?e-240:e+120,i,r),Qh(e,i,r),Qh(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new Yh(Xh(this.h),Zh(this.s),Zh(this.l),Uh(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Uh(this.opacity);return`${e===1?`hsl(`:`hsla(`}${Xh(this.h)}, ${Zh(this.s)*100}%, ${Zh(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function Xh(e){return e=(e||0)%360,e<0?e+360:e}function Zh(e){return Math.max(0,Math.min(1,e||0))}function Qh(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var $h=e=>()=>e;function eg(e,t){return function(n){return e+n*t}}function tg(e,t,n){return e**=+n,t=t**+n-e,n=1/n,function(r){return(e+r*t)**+n}}function ng(e){return(e=+e)==1?rg:function(t,n){return n-t?tg(t,n,e):$h(isNaN(t)?n:t)}}function rg(e,t){var n=t-e;return n?eg(e,n):$h(isNaN(e)?t:e)}var ig=(function e(t){var n=ng(t);function r(e,t){var r=n((e=Rh(e)).r,(t=Rh(t)).r),i=n(e.g,t.g),a=n(e.b,t.b),o=rg(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+``}}return r.gamma=e,r})(1);function ag(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var og=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,sg=new RegExp(og.source,`g`);function cg(e){return function(){return e}}function lg(e){return function(t){return e(t)+``}}function ug(e,t){var n=og.lastIndex=sg.lastIndex=0,r,i,a,o=-1,s=[],c=[];for(e+=``,t+=``;(r=og.exec(e))&&(i=sg.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,c.push({i:o,x:ag(r,i)})),n=sg.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?lg(c[0].x):cg(t):(t=c.length,function(e){for(var n=0,r;n<t;++n)s[(r=c[n]).i]=r.x(e);return s.join(``)})}var dg=180/Math.PI,fg={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function pg(e,t,n,r,i,a){var o,s,c;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,c/=s),e*r<t*n&&(e=-e,t=-t,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*dg,skewX:Math.atan(c)*dg,scaleX:o,scaleY:s}}var mg;function hg(e){let t=new(typeof DOMMatrix==`function`?DOMMatrix:WebKitCSSMatrix)(e+``);return t.isIdentity?fg:pg(t.a,t.b,t.c,t.d,t.e,t.f)}function gg(e){return e==null||(mg||=document.createElementNS(`http://www.w3.org/2000/svg`,`g`),mg.setAttribute(`transform`,e),!(e=mg.transform.baseVal.consolidate()))?fg:(e=e.matrix,pg(e.a,e.b,e.c,e.d,e.e,e.f))}function _g(e,t,n,r){function i(e){return e.length?e.pop()+` `:``}function a(e,r,i,a,o,s){if(e!==i||r!==a){var c=o.push(`translate(`,null,t,null,n);s.push({i:c-4,x:ag(e,i)},{i:c-2,x:ag(r,a)})}else (i||a)&&o.push(`translate(`+i+t+a+n)}function o(e,t,n,a){e===t?t&&n.push(i(n)+`rotate(`+t+r):(e-t>180?t+=360:t-e>180&&(e+=360),a.push({i:n.push(i(n)+`rotate(`,null,r)-2,x:ag(e,t)}))}function s(e,t,n,a){e===t?t&&n.push(i(n)+`skewX(`+t+r):a.push({i:n.push(i(n)+`skewX(`,null,r)-2,x:ag(e,t)})}function c(e,t,n,r,a,o){if(e!==n||t!==r){var s=a.push(i(a)+`scale(`,null,`,`,null,`)`);o.push({i:s-4,x:ag(e,n)},{i:s-2,x:ag(t,r)})}else (n!==1||r!==1)&&a.push(i(a)+`scale(`+n+`,`+r+`)`)}return function(t,n){var r=[],i=[];return t=e(t),n=e(n),a(t.translateX,t.translateY,n.translateX,n.translateY,r,i),o(t.rotate,n.rotate,r,i),s(t.skewX,n.skewX,r,i),c(t.scaleX,t.scaleY,n.scaleX,n.scaleY,r,i),t=n=null,function(e){for(var t=-1,n=i.length,a;++t<n;)r[(a=i[t]).i]=a.x(e);return r.join(``)}}}var vg=_g(hg,`px, `,`px)`,`deg)`),yg=_g(gg,`, `,`)`,`)`),bg=0,xg=0,Sg=0,Cg=1e3,wg,Tg,Eg=0,Dg=0,Og=0,kg=typeof performance==`object`&&performance.now?performance:Date,Ag=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function jg(){return Dg||=(Ag(Mg),kg.now()+Og)}function Mg(){Dg=0}function Ng(){this._call=this._time=this._next=null}Ng.prototype=Pg.prototype={constructor:Ng,restart:function(e,t,n){if(typeof e!=`function`)throw TypeError(`callback is not a function`);n=(n==null?jg():+n)+(t==null?0:+t),!this._next&&Tg!==this&&(Tg?Tg._next=this:wg=this,Tg=this),this._call=e,this._time=n,zg()},stop:function(){this._call&&(this._call=null,this._time=1/0,zg())}};function Pg(e,t,n){var r=new Ng;return r.restart(e,t,n),r}function Fg(){jg(),++bg;for(var e=wg,t;e;)(t=Dg-e._time)>=0&&e._call.call(void 0,t),e=e._next;--bg}function Ig(){Dg=(Eg=kg.now())+Og,bg=xg=0;try{Fg()}finally{bg=0,Rg(),Dg=0}}function Lg(){var e=kg.now(),t=e-Eg;t>Cg&&(Og-=t,Eg=e)}function Rg(){for(var e,t=wg,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:wg=n);Tg=e,zg(r)}function zg(e){bg||(xg&&=clearTimeout(xg),e-Dg>24?(e<1/0&&(xg=setTimeout(Ig,e-kg.now()-Og)),Sg&&=clearInterval(Sg)):(Sg||=(Eg=kg.now(),setInterval(Lg,Cg)),bg=1,Ag(Ig)))}function Bg(e,t,n){var r=new Ng;return t=t==null?0:+t,r.restart(n=>{r.stop(),e(n+t)},t,n),r}var Vg=up(`start`,`end`,`cancel`,`interrupt`),Hg=[];function Ug(e,t,n,r,i,a){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;qg(e,n,{name:t,index:r,group:i,on:Vg,tween:Hg,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function Wg(e,t){var n=Kg(e,t);if(n.state>0)throw Error(`too late; already scheduled`);return n}function Gg(e,t){var n=Kg(e,t);if(n.state>3)throw Error(`too late; already running`);return n}function Kg(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw Error(`transition not found`);return n}function qg(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=Pg(a,0,n.time);function a(e){n.state=1,n.timer.restart(o,n.delay,n.time),n.delay<=e&&o(e-n.delay)}function o(a){var l,u,d,f;if(n.state!==1)return c();for(l in r)if(f=r[l],f.name===n.name){if(f.state===3)return Bg(o);f.state===4?(f.state=6,f.timer.stop(),f.on.call(`interrupt`,e,e.__data__,f.index,f.group),delete r[l]):+l<t&&(f.state=6,f.timer.stop(),f.on.call(`cancel`,e,e.__data__,f.index,f.group),delete r[l])}if(Bg(function(){n.state===3&&(n.state=4,n.timer.restart(s,n.delay,n.time),s(a))}),n.state=2,n.on.call(`start`,e,e.__data__,n.index,n.group),n.state===2){for(n.state=3,i=Array(d=n.tween.length),l=0,u=-1;l<d;++l)(f=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(i[++u]=f);i.length=u+1}}function s(t){for(var r=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(c),n.state=5,1),a=-1,o=i.length;++a<o;)i[a].call(e,r);n.state===5&&(n.on.call(`end`,e,e.__data__,n.index,n.group),c())}function c(){for(var i in n.state=6,n.timer.stop(),delete r[t],r)return;delete e.__transition}}function Jg(e,t){var n=e.__transition,r,i,a=!0,o;if(n){for(o in t=t==null?null:t+``,n){if((r=n[o]).name!==t){a=!1;continue}i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?`interrupt`:`cancel`,e,e.__data__,r.index,r.group),delete n[o]}a&&delete e.__transition}}function Yg(e){return this.each(function(){Jg(this,e)})}function Xg(e,t){var n,r;return function(){var i=Gg(this,e),a=i.tween;if(a!==n){r=n=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===t){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function Zg(e,t,n){var r,i;if(typeof n!=`function`)throw Error();return function(){var a=Gg(this,e),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:t,value:n},c=0,l=i.length;c<l;++c)if(i[c].name===t){i[c]=s;break}c===l&&i.push(s)}a.tween=i}}function Qg(e,t){var n=this._id;if(e+=``,arguments.length<2){for(var r=Kg(this.node(),n).tween,i=0,a=r.length,o;i<a;++i)if((o=r[i]).name===e)return o.value;return null}return this.each((t==null?Xg:Zg)(n,e,t))}function $g(e,t,n){var r=e._id;return e.each(function(){var e=Gg(this,r);(e.value||={})[t]=n.apply(this,arguments)}),function(e){return Kg(e,r).value[t]}}function e_(e,t){var n;return(typeof t==`number`?ag:t instanceof Ph?ig:(n=Ph(t))?(t=n,ig):ug)(e,t)}function t_(e){return function(){this.removeAttribute(e)}}function n_(e){return function(){this.removeAttributeNS(e.space,e.local)}}function r_(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttribute(e);return o===i?null:o===r?a:a=t(r=o,n)}}function i_(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttributeNS(e.space,e.local);return o===i?null:o===r?a:a=t(r=o,n)}}function a_(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttribute(e):(o=this.getAttribute(e),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function o_(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function s_(e,t){var n=gp(e),r=n===`transform`?yg:e_;return this.attrTween(e,typeof t==`function`?(n.local?o_:a_)(n,r,$g(this,`attr.`+e,t)):t==null?(n.local?n_:t_)(n):(n.local?i_:r_)(n,r,t))}function c_(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function l_(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function u_(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&l_(e,i)),n}return i._value=t,i}function d_(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&c_(e,i)),n}return i._value=t,i}function f_(e,t){var n=`attr.`+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!=`function`)throw Error();var r=gp(e);return this.tween(n,(r.local?u_:d_)(r,t))}function p_(e,t){return function(){Wg(this,e).delay=+t.apply(this,arguments)}}function m_(e,t){return t=+t,function(){Wg(this,e).delay=t}}function h_(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?p_:m_)(t,e)):Kg(this.node(),t).delay}function g_(e,t){return function(){Gg(this,e).duration=+t.apply(this,arguments)}}function __(e,t){return t=+t,function(){Gg(this,e).duration=t}}function v_(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?g_:__)(t,e)):Kg(this.node(),t).duration}function y_(e,t){if(typeof t!=`function`)throw Error();return function(){Gg(this,e).ease=t}}function b_(e){var t=this._id;return arguments.length?this.each(y_(t,e)):Kg(this.node(),t).ease}function x_(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!=`function`)throw Error();Gg(this,e).ease=n}}function S_(e){if(typeof e!=`function`)throw Error();return this.each(x_(this._id,e))}function C_(e){typeof e!=`function`&&(e=Op(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new Q_(r,this._parents,this._name,this._id)}function w_(e){if(e._id!==this._id)throw Error();for(var t=this._groups,n=e._groups,r=t.length,i=n.length,a=Math.min(r,i),o=Array(r),s=0;s<a;++s)for(var c=t[s],l=n[s],u=c.length,d=o[s]=Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<r;++s)o[s]=t[s];return new Q_(o,this._parents,this._name,this._id)}function T_(e){return(e+``).trim().split(/^|\s+/).every(function(e){var t=e.indexOf(`.`);return t>=0&&(e=e.slice(0,t)),!e||e===`start`})}function E_(e,t,n){var r,i,a=T_(t)?Wg:Gg;return function(){var o=a(this,e),s=o.on;s!==r&&(i=(r=s).copy()).on(t,n),o.on=i}}function D_(e,t){var n=this._id;return arguments.length<2?Kg(this.node(),n).on.on(e):this.each(E_(n,e,t))}function O_(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function k_(){return this.on(`end.remove`,O_(this._id))}function A_(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=xp(e));for(var r=this._groups,i=r.length,a=Array(i),o=0;o<i;++o)for(var s=r[o],c=s.length,l=a[o]=Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&(`__data__`in u&&(d.__data__=u.__data__),l[f]=d,Ug(l[f],t,n,f,l,Kg(u,n)));return new Q_(a,this._parents,t,n)}function j_(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=Tp(e));for(var r=this._groups,i=r.length,a=[],o=[],s=0;s<i;++s)for(var c=r[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=Kg(u,n),h=0,g=f.length;h<g;++h)(p=f[h])&&Ug(p,t,n,h,f,m);a.push(f),o.push(u)}return new Q_(a,o,t,n)}var M_=dh.prototype.constructor;function N_(){return new M_(this._groups,this._parents)}function P_(e,t){var n,r,i;return function(){var a=vm(this,e),o=(this.style.removeProperty(e),vm(this,e));return a===o?null:a===n&&o===r?i:i=t(n=a,r=o)}}function F_(e){return function(){this.style.removeProperty(e)}}function I_(e,t,n){var r,i=n+``,a;return function(){var o=vm(this,e);return o===i?null:o===r?a:a=t(r=o,n)}}function L_(e,t,n){var r,i,a;return function(){var o=vm(this,e),s=n(this),c=s+``;return s??(c=s=(this.style.removeProperty(e),vm(this,e))),o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s))}}function R_(e,t){var n,r,i,a=`style.`+t,o=`end.`+a,s;return function(){var c=Gg(this,e),l=c.on,u=c.value[a]==null?s||=F_(t):void 0;(l!==n||i!==u)&&(r=(n=l).copy()).on(o,i=u),c.on=r}}function z_(e,t,n){var r=(e+=``)==`transform`?vg:e_;return t==null?this.styleTween(e,P_(e,r)).on(`end.style.`+e,F_(e)):typeof t==`function`?this.styleTween(e,L_(e,r,$g(this,`style.`+e,t))).each(R_(this._id,e)):this.styleTween(e,I_(e,r,t),n).on(`end.style.`+e,null)}function B_(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function V_(e,t,n){var r,i;function a(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&B_(e,a,n)),r}return a._value=t,a}function H_(e,t,n){var r=`style.`+(e+=``);if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!=`function`)throw Error();return this.tween(r,V_(e,t,n??``))}function U_(e){return function(){this.textContent=e}}function W_(e){return function(){var t=e(this);this.textContent=t??``}}function G_(e){return this.tween(`text`,typeof e==`function`?W_($g(this,`text`,e)):U_(e==null?``:e+``))}function K_(e){return function(t){this.textContent=e.call(this,t)}}function q_(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&K_(r)),t}return r._value=e,r}function J_(e){var t=`text`;if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!=`function`)throw Error();return this.tween(t,q_(e))}function Y_(){for(var e=this._name,t=this._id,n=ev(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)if(c=o[l]){var u=Kg(c,t);Ug(c,e,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Q_(r,this._parents,e,n)}function X_(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(a,o){var s={value:o},c={value:function(){--i===0&&a()}};n.each(function(){var n=Gg(this,r),i=n.on;i!==e&&(t=(e=i).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),n.on=t}),i===0&&a()})}var Z_=0;function Q_(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function $_(e){return dh().transition(e)}function ev(){return++Z_}var tv=dh.prototype;Q_.prototype=$_.prototype={constructor:Q_,select:A_,selectAll:j_,selectChild:tv.selectChild,selectChildren:tv.selectChildren,filter:C_,merge:w_,selection:N_,transition:Y_,call:tv.call,nodes:tv.nodes,node:tv.node,size:tv.size,empty:tv.empty,each:tv.each,on:D_,attr:s_,attrTween:f_,style:z_,styleTween:H_,text:G_,textTween:J_,remove:k_,tween:Qg,delay:h_,duration:v_,ease:b_,easeVarying:S_,end:X_,[Symbol.iterator]:tv[Symbol.iterator]};function nv(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var rv={time:null,delay:0,duration:250,ease:nv};function iv(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw Error(`transition ${t} not found`);return n}function av(e){var t,n;e instanceof Q_?(t=e._id,e=e._name):(t=ev(),(n=rv).time=jg(),e=e==null?null:e+``);for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&Ug(c,e,t,l,o,n||iv(c,t));return new Q_(r,this._parents,e,t)}dh.prototype.interrupt=Yg,dh.prototype.transition=av;var{abs:ov,max:sv,min:cv}=Math;[`w`,`e`].map(lv),[`n`,`s`].map(lv),[`n`,`w`,`e`,`s`,`nw`,`ne`,`sw`,`se`].map(lv);function lv(e){return{type:e}}var uv=Math.PI,dv=2*uv,fv=1e-6,pv=dv-fv;function mv(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function hv(e){let t=Math.floor(e);if(!(t>=0))throw Error(`invalid digits: ${e}`);if(t>15)return mv;let n=10**t;return function(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=Math.round(arguments[t]*n)/n+e[t]}}var gv=class{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._=``,this._append=e==null?mv:hv(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,n,r){this._append`Q${+e},${+t},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(e,t,n,r,i,a){this._append`C${+e},${+t},${+n},${+r},${this._x1=+i},${this._y1=+a}`}arcTo(e,t,n,r,i){if(e=+e,t=+t,n=+n,r=+r,i=+i,i<0)throw Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,s=n-e,c=r-t,l=a-e,u=o-t,d=l*l+u*u;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(d>fv)if(!(Math.abs(u*s-c*l)>fv)||!i)this._append`L${this._x1=e},${this._y1=t}`;else{let f=n-a,p=r-o,m=s*s+c*c,h=f*f+p*p,g=Math.sqrt(m),_=Math.sqrt(d),v=i*Math.tan((uv-Math.acos((m+d-h)/(2*g*_)))/2),y=v/_,b=v/g;Math.abs(y-1)>fv&&this._append`L${e+y*l},${t+y*u}`,this._append`A${i},${i},0,0,${+(u*f>l*p)},${this._x1=e+b*s},${this._y1=t+b*c}`}}arc(e,t,n,r,i,a){if(e=+e,t=+t,n=+n,a=!!a,n<0)throw Error(`negative radius: ${n}`);let o=n*Math.cos(r),s=n*Math.sin(r),c=e+o,l=t+s,u=1^a,d=a?r-i:i-r;this._x1===null?this._append`M${c},${l}`:(Math.abs(this._x1-c)>fv||Math.abs(this._y1-l)>fv)&&this._append`L${c},${l}`,n&&(d<0&&(d=d%dv+dv),d>pv?this._append`A${n},${n},0,1,${u},${e-o},${t-s}A${n},${n},0,1,${u},${this._x1=c},${this._y1=l}`:d>fv&&this._append`A${n},${n},0,${+(d>=uv)},${u},${this._x1=e+n*Math.cos(i)},${this._y1=t+n*Math.sin(i)}`)}rect(e,t,n,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}};function _v(){return new gv}_v.prototype=gv.prototype;function vv(e){return function(){return e}}var yv=Math.abs,$=Math.atan2,bv=Math.cos,xv=Math.max,Sv=Math.min,Cv=Math.sin,wv=Math.sqrt,Tv=Math.PI,Ev=Tv/2,Dv=2*Tv;function Ov(e){return e>1?0:e<-1?Tv:Math.acos(e)}function kv(e){return e>=1?Ev:e<=-1?-Ev:Math.asin(e)}function Av(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{let e=Math.floor(n);if(!(e>=0))throw RangeError(`invalid digits: ${n}`);t=e}return e},()=>new gv(t)}function jv(e){return e.innerRadius}function Mv(e){return e.outerRadius}function Nv(e){return e.startAngle}function Pv(e){return e.endAngle}function Fv(e){return e&&e.padAngle}function Iv(e,t,n,r,i,a,o,s){var c=n-e,l=r-t,u=o-i,d=s-a,f=d*c-u*l;if(!(f*f<1e-12))return f=(u*(t-a)-d*(e-i))/f,[e+f*c,t+f*l]}function Lv(e,t,n,r,i,a,o){var s=e-n,c=t-r,l=(o?a:-a)/wv(s*s+c*c),u=l*c,d=-l*s,f=e+u,p=t+d,m=n+u,h=r+d,g=(f+m)/2,_=(p+h)/2,v=m-f,y=h-p,b=v*v+y*y,x=i-a,S=f*h-m*p,C=(y<0?-1:1)*wv(xv(0,x*x*b-S*S)),w=(S*y-v*C)/b,T=(-S*v-y*C)/b,E=(S*y+v*C)/b,D=(-S*v+y*C)/b,O=w-g,k=T-_,ee=E-g,te=D-_;return O*O+k*k>ee*ee+te*te&&(w=E,T=D),{cx:w,cy:T,x01:-u,y01:-d,x11:w*(i/x-1),y11:T*(i/x-1)}}function Rv(){var e=jv,t=Mv,n=vv(0),r=null,i=Nv,a=Pv,o=Fv,s=null,c=Av(l);function l(){var l,u,d=+e.apply(this,arguments),f=+t.apply(this,arguments),p=i.apply(this,arguments)-Ev,m=a.apply(this,arguments)-Ev,h=yv(m-p),g=m>p;if(s||=l=c(),f<d&&(u=f,f=d,d=u),!(f>1e-12))s.moveTo(0,0);else if(h>Dv-1e-12)s.moveTo(f*bv(p),f*Cv(p)),s.arc(0,0,f,p,m,!g),d>1e-12&&(s.moveTo(d*bv(m),d*Cv(m)),s.arc(0,0,d,m,p,g));else{var _=p,v=m,y=p,b=m,x=h,S=h,C=o.apply(this,arguments)/2,w=C>1e-12&&(r?+r.apply(this,arguments):wv(d*d+f*f)),T=Sv(yv(f-d)/2,+n.apply(this,arguments)),E=T,D=T,O,k;if(w>1e-12){var ee=kv(w/d*Cv(C)),te=kv(w/f*Cv(C));(x-=ee*2)>1e-12?(ee*=g?1:-1,y+=ee,b-=ee):(x=0,y=b=(p+m)/2),(S-=te*2)>1e-12?(te*=g?1:-1,_+=te,v-=te):(S=0,_=v=(p+m)/2)}var ne=f*bv(_),re=f*Cv(_),ie=d*bv(b),ae=d*Cv(b);if(T>1e-12){var A=f*bv(v),j=f*Cv(v),oe=d*bv(y),se=d*Cv(y),ce;if(h<Tv)if(ce=Iv(ne,re,oe,se,A,j,ie,ae)){var le=ne-ce[0],ue=re-ce[1],de=A-ce[0],fe=j-ce[1],pe=1/Cv(Ov((le*de+ue*fe)/(wv(le*le+ue*ue)*wv(de*de+fe*fe)))/2),me=wv(ce[0]*ce[0]+ce[1]*ce[1]);E=Sv(T,(d-me)/(pe-1)),D=Sv(T,(f-me)/(pe+1))}else E=D=0}S>1e-12?D>1e-12?(O=Lv(oe,se,ne,re,f,D,g),k=Lv(A,j,ie,ae,f,D,g),s.moveTo(O.cx+O.x01,O.cy+O.y01),D<T?s.arc(O.cx,O.cy,D,$(O.y01,O.x01),$(k.y01,k.x01),!g):(s.arc(O.cx,O.cy,D,$(O.y01,O.x01),$(O.y11,O.x11),!g),s.arc(0,0,f,$(O.cy+O.y11,O.cx+O.x11),$(k.cy+k.y11,k.cx+k.x11),!g),s.arc(k.cx,k.cy,D,$(k.y11,k.x11),$(k.y01,k.x01),!g))):(s.moveTo(ne,re),s.arc(0,0,f,_,v,!g)):s.moveTo(ne,re),!(d>1e-12)||!(x>1e-12)?s.lineTo(ie,ae):E>1e-12?(O=Lv(ie,ae,A,j,d,-E,g),k=Lv(ne,re,oe,se,d,-E,g),s.lineTo(O.cx+O.x01,O.cy+O.y01),E<T?s.arc(O.cx,O.cy,E,$(O.y01,O.x01),$(k.y01,k.x01),!g):(s.arc(O.cx,O.cy,E,$(O.y01,O.x01),$(O.y11,O.x11),!g),s.arc(0,0,d,$(O.cy+O.y11,O.cx+O.x11),$(k.cy+k.y11,k.cx+k.x11),g),s.arc(k.cx,k.cy,E,$(k.y11,k.x11),$(k.y01,k.x01),!g))):s.arc(0,0,d,b,y,g)}if(s.closePath(),l)return s=null,l+``||null}return l.centroid=function(){var n=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +a.apply(this,arguments))/2-Tv/2;return[bv(r)*n,Cv(r)*n]},l.innerRadius=function(t){return arguments.length?(e=typeof t==`function`?t:vv(+t),l):e},l.outerRadius=function(e){return arguments.length?(t=typeof e==`function`?e:vv(+e),l):t},l.cornerRadius=function(e){return arguments.length?(n=typeof e==`function`?e:vv(+e),l):n},l.padRadius=function(e){return arguments.length?(r=e==null?null:typeof e==`function`?e:vv(+e),l):r},l.startAngle=function(e){return arguments.length?(i=typeof e==`function`?e:vv(+e),l):i},l.endAngle=function(e){return arguments.length?(a=typeof e==`function`?e:vv(+e),l):a},l.padAngle=function(e){return arguments.length?(o=typeof e==`function`?e:vv(+e),l):o},l.context=function(e){return arguments.length?(s=e??null,l):s},l}Array.prototype.slice;function zv(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function Bv(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function Vv(e){return e}function Hv(){var e=Vv,t=Bv,n=null,r=vv(0),i=vv(Dv),a=vv(0);function o(o){var s,c=(o=zv(o)).length,l,u,d=0,f=Array(c),p=Array(c),m=+r.apply(this,arguments),h=Math.min(Dv,Math.max(-Dv,i.apply(this,arguments)-m)),g,_=Math.min(Math.abs(h)/c,a.apply(this,arguments)),v=_*(h<0?-1:1),y;for(s=0;s<c;++s)(y=p[f[s]=s]=+e(o[s],s,o))>0&&(d+=y);for(t==null?n!=null&&f.sort(function(e,t){return n(o[e],o[t])}):f.sort(function(e,n){return t(p[e],p[n])}),s=0,u=d?(h-c*v)/d:0;s<c;++s,m=g)l=f[s],y=p[l],g=m+(y>0?y*u:0)+v,p[l]={data:o[l],index:s,value:y,startAngle:m,endAngle:g,padAngle:_};return p}return o.value=function(t){return arguments.length?(e=typeof t==`function`?t:vv(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:vv(+e),o):r},o.endAngle=function(e){return arguments.length?(i=typeof e==`function`?e:vv(+e),o):i},o.padAngle=function(e){return arguments.length?(a=typeof e==`function`?e:vv(+e),o):a},o}function Uv(e,t,n){this.k=e,this.x=t,this.y=n}Uv.prototype={constructor:Uv,scale:function(e){return e===1?this:new Uv(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Uv(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return`translate(`+this.x+`,`+this.y+`) scale(`+this.k+`)`}};var Wv=new Uv(1,0,0);Gv.prototype=Uv.prototype;function Gv(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Wv;return e.__zoom}var Kv=N(`images/BackIconWhite.svg`);function qv(e,t){return typeof e.color==`function`?t?e.color(t):void 0:e.color}var Jv=class{constructor(){}},Yv=class{constructor(e,t,n,r={}){this.eventBus=e,this.rootMenu=t,this.centerButtonElement=n,this.tooltipElement=null,this.isVisible=!1,this.currentLevel=0,this.menuStack=[],this.currentMenuItems=[],this.centerButtonState=`default`,this.isTransitioning=!1,this.lastHideTime=0,this.reopenCooldownMs=300,this.anchorX=0,this.anchorY=0,this.menuGroups=new Map,this.menuPaths=new Map,this.menuIcons=new Map,this.selectedItemId=null,this.submenuHoverTimeout=null,this.backButtonHoverTimeout=null,this.navigationInProgress=!1,this.originalCenterButtonIcon=``,this.defaultCenterButtonColor=`#0f2744`,this.params=null,this.handleResize=()=>{this.isVisible&&this.clampAndSetMenuPositionForLevel(this.currentLevel)},this.config={menuSize:r.menuSize??190,submenuScale:r.submenuScale??1.5,centerButtonSize:r.centerButtonSize??30,iconSize:r.iconSize??32,centerIconSize:r.centerIconSize??48,disabledColor:r.disabledColor??Rh(128,128,128).toString(),menuTransitionDuration:r.menuTransitionDuration??300,mainMenuInnerRadius:r.mainMenuInnerRadius??40,centerButtonIcon:r.centerButtonIcon??``,maxNestedLevels:r.maxNestedLevels??3,innerRadiusIncrement:r.innerRadiusIncrement??20,tooltipStyle:r.tooltipStyle??``},this.originalCenterButtonIcon=this.config.centerButtonIcon,this.backIconSize=this.config.centerIconSize*.8,this.centerButtonColor=this.defaultCenterButtonColor,this.centerButtonIconSize=this.config.centerIconSize}init(){this.createMenuElement(),this.createTooltipElement(),this.eventBus.on(vt,e=>{this.hideRadialMenu()})}createMenuElement(){this.menuElement=ph(document.body).append(`div`).attr(`class`,`radial-menu-container`).style(`position`,`fixed`).style(`display`,`none`).style(`z-index`,`9999`).style(`touch-action`,`none`).style(`top`,`0`).style(`left`,`0`).style(`width`,`100vw`).style(`height`,`100vh`).on(`click`,()=>{this.hideRadialMenu(),this.eventBus.emit(new Jv)}).on(`contextmenu`,e=>{e.preventDefault(),this.hideRadialMenu(),this.eventBus.emit(new Jv)});let e=this.config.menuSize*this.config.submenuScale**(this.config.maxNestedLevels-1),t=this.menuElement.append(`svg`).attr(`width`,e).attr(`height`,e).style(`position`,`absolute`).style(`top`,`50%`).style(`left`,`50%`).style(`transform`,`translate(-50%, -50%)`).style(`pointer-events`,`all`).on(`click`,e=>this.hideRadialMenu()),n=t.append(`g`).attr(`class`,`menu-container`).attr(`transform`,`translate(${e/2},${e/2})`),r=t.append(`defs`).append(`filter`).attr(`id`,`glow`);r.append(`feGaussianBlur`).attr(`stdDeviation`,`2`).attr(`result`,`coloredBlur`);let i=r.append(`feMerge`);i.append(`feMergeNode`).attr(`in`,`coloredBlur`),i.append(`feMergeNode`).attr(`in`,`SourceGraphic`);let a=n.append(`g`).attr(`class`,`center-button`);a.append(`circle`).attr(`class`,`center-button-hitbox`).attr(`r`,this.config.centerButtonSize).attr(`fill`,`transparent`).style(`cursor`,`pointer`).on(`click`,e=>{e.stopPropagation(),this.handleCenterButtonClick()}).on(`touchstart`,e=>{e.preventDefault(),e.stopPropagation(),this.handleCenterButtonClick()}).on(`mouseover`,()=>this.onCenterButtonHover(!0)).on(`mouseout`,()=>this.onCenterButtonHover(!1)),a.append(`circle`).attr(`class`,`center-button-visible`).attr(`r`,this.config.centerButtonSize).attr(`fill`,this.centerButtonColor).style(`pointer-events`,`none`),a.append(`image`).attr(`class`,`center-button-icon`).attr(`xlink:href`,this.config.centerButtonIcon).attr(`width`,this.centerButtonIconSize).attr(`height`,this.centerButtonIconSize).attr(`x`,-this.centerButtonIconSize/2).attr(`y`,-this.centerButtonIconSize/2).style(`pointer-events`,`none`)}createTooltipElement(){this.tooltipElement=document.createElement(`div`),this.tooltipElement.className=`radial-tooltip`,this.tooltipElement.style.position=`absolute`,this.tooltipElement.style.pointerEvents=`none`,this.tooltipElement.style.background=`rgba(12, 35, 64, 0.88)`,this.tooltipElement.style.color=`white`,this.tooltipElement.style.padding=`6px 10px`,this.tooltipElement.style.borderRadius=`6px`,this.tooltipElement.style.fontSize=`12px`,this.tooltipElement.style.zIndex=`10000`,this.tooltipElement.style.maxWidth=`250px`,this.tooltipElement.style.display=`none`,document.body.appendChild(this.tooltipElement);let e=document.createElement(`style`);e.textContent=`
      .radial-tooltip .title {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 4px;
      }

      ${this.config.tooltipStyle}
    `,document.head.appendChild(e)}getInnerRadiusForLevel(e){return e===0?40:75}getOuterRadiusForLevel(e){let t=this.getInnerRadiusForLevel(e),n=55;return e!==0&&(n=65),t+n}renderMenuItems(e,t){let n=this.menuElement.select(`.menu-container`);n.selectAll(`.menu-level-${t}`).remove();let r=n.append(`g`).attr(`class`,`menu-level-${t}`);t===0?r.style(`opacity`,1).style(`transform`,`scale(1)`):r.style(`opacity`,0).style(`transform`,`scale(0.5)`),this.menuGroups.set(t,r);let i=-Math.PI/e.length,a=Hv().value(()=>1).padAngle(.03).startAngle(i).endAngle(2*Math.PI+i),o=this.getInnerRadiusForLevel(t),s=this.getOuterRadiusForLevel(t),c=Rv().innerRadius(o).outerRadius(s),l=r.selectAll(`.menu-item`).data(a(e)).enter().append(`g`).attr(`class`,`menu-item-group`);return this.renderPaths(l,c,t),this.setupEventHandlers(l,t),this.renderIconsAndText(l,c),this.setupAnimations(r),r}renderPaths(e,t,n){e.append(`path`).attr(`class`,`menu-item-path`).attr(`d`,t).attr(`fill`,e=>{let t=this.params===null||e.data.disabled(this.params),r=t?this.config.disabledColor:qv(e.data,this.params)??`#1e3a5f`,i=t?.4:.82;return e.data.id===this.selectedItemId&&this.currentLevel>n?r:Ph(r)?.copy({opacity:i})?.toString()??r}).attr(`stroke`,`none`).style(`cursor`,e=>this.params===null||e.data.disabled(this.params)?`not-allowed`:`pointer`).style(`opacity`,e=>this.params===null||e.data.disabled(this.params)?.5:1).style(`transition`,`filter ${this.config.menuTransitionDuration/2}ms, fill ${this.config.menuTransitionDuration/2}ms`).attr(`data-id`,e=>e.data.id),e.each(e=>{if(e.data.timerFraction&&this.params){let t=e.data.timerFraction(this.params),n=this.params===null||e.data.disabled(this.params),r=n?this.config.disabledColor:qv(e.data,this.params)??`#1e3a5f`,i=n?.4:.82,a=Ph(r)?.copy({opacity:i})?.toString()??r,o=Ph(ig(r,`white`)(.4))?.copy({opacity:i})?.toString()??a,s=`timer-gradient-${e.data.id}`,c=this.menuElement.select(`defs`);c.select(`#${s}`).remove();let l=1-t,u=c.append(`linearGradient`).attr(`id`,s).attr(`x1`,0).attr(`y1`,0).attr(`x2`,0).attr(`y2`,1);u.append(`stop`).attr(`class`,`timer-stop-faded`).attr(`offset`,l).attr(`stop-color`,o),u.append(`stop`).attr(`class`,`timer-stop-normal`).attr(`offset`,l).attr(`stop-color`,a),ph(`path[data-id="${e.data.id}"]`).attr(`fill`,`url(#${s})`)}}),e.each(e=>{let t=e.data.id,r=ph(`path[data-id="${t}"]`);if(this.menuPaths.set(t,r),t===this.selectedItemId&&n===0&&this.currentLevel>0){r.attr(`filter`,`url(#glow)`);let t=this.params===null||e.data.disabled(this.params)?this.config.disabledColor:qv(e.data,this.params)??`#1e3a5f`;r.attr(`fill`,t)}}),this.menuGroups.forEach((e,t)=>{t<this.currentLevel?e.selectAll(`path`).each(function(){ph(this).style(`pointer-events`,`none`)}):t===this.currentLevel&&e.selectAll(`path`).style(`pointer-events`,`auto`)})}setupEventHandlers(e,t){let n=(e,n)=>{let r=this.params===null||e.data.disabled(this.params);e.data.tooltipItems&&e.data.tooltipItems.length>0?this.showTooltip(e.data.tooltipItems):e.data.tooltipKeys&&e.data.tooltipKeys.length>0&&this.showTooltip(e.data.tooltipKeys),!(r||this.currentLevel>0&&this.currentLevel!==t||this.navigationInProgress)&&n.style(`filter`,`brightness(1.5)`)},r=(e,n)=>{let r=this.params===null||e.data.disabled(this.params);if(this.submenuHoverTimeout!==null&&(window.clearTimeout(this.submenuHoverTimeout),this.submenuHoverTimeout=null),this.hideTooltip(),r||this.currentLevel>0&&t===0&&e.data.id===this.selectedItemId)return;n.style(`filter`,null);let i=r?this.config.disabledColor:qv(e.data,this.params)??`#333333`,a=r?.4:.82;e.data.timerFraction?n.attr(`fill`,`url(#timer-gradient-${e.data.id})`):n.attr(`fill`,Ph(i)?.copy({opacity:a})?.toString()??i)},i=(e,n)=>{if(n.stopPropagation(),this.params===null||e.data.disabled(this.params)||this.navigationInProgress||(this.eventBus.emit(new Ye(`click`)),this.currentLevel>0&&t===0&&e.data.id!==this.selectedItemId))return;let r=e.data.subMenu?.(this.params);r&&r.length>0?(this.navigationInProgress=!0,this.selectedItemId=e.data.id,this.navigateToSubMenu(r),this.updateCenterButtonState(`back`)):(e.data.action?.(this.params),this.isTransitioning=!1,this.hideRadialMenu())};function a(e){let t=document.querySelector(`.radial-tooltip`);t&&t.style.display!==`none`&&(t.style.left=e.pageX+10+`px`,t.style.top=e.pageY+10+`px`)}e.each(e=>{let t=e.data.id,o=ph(`path[data-id="${t}"]`);o.on(`mouseover`,function(){n(e,o)}),o.on(`mouseout`,function(){r(e,o)}),o.on(`mousemove`,function(e){a(e)}),o.on(`click`,function(t){i(e,t)}),o.on(`touchstart`,function(t){t.preventDefault(),t.stopPropagation(),i(e,t)})})}isItemDisabled(e){return this.params===null||this.params.game.inSpawnPhase()||e.disabled(this.params)}renderIconsAndText(e,t){e.append(`g`).attr(`class`,`menu-item-content`).style(`pointer-events`,`none`).attr(`data-id`,e=>e.data.id).attr(`data-cx`,e=>t.centroid(e)[0].toString()).attr(`data-cy`,e=>t.centroid(e)[1].toString()).each(e=>{let n=e.data.id,r=ph(`g[data-id="${n}"]`),i=this.isItemDisabled(e.data);if(e.data.renderType&&this.params){let n=this.getStateKeyByType(e.data.renderType,i,this.params);n&&r.attr(`data-prev-state`,n),e.data.renderType===`allyExtend`&&this.renderAllyExtendIcon(r.node(),t.centroid(e)[0],t.centroid(e)[1],this.config.iconSize,i,this.params,e.data.icon)}else if(e.data.text)r.append(`text`).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`central`).attr(`x`,t.centroid(e)[0]).attr(`y`,t.centroid(e)[1]).attr(`fill`,`white`).attr(`font-size`,e.data.fontSize??`12px`).attr(`font-family`,`Arial, sans-serif`).style(`opacity`,i?.5:1).text(e.data.text);else{let n=r.append(`image`).attr(`xlink:href`,e.data.icon).attr(`width`,this.config.iconSize).attr(`height`,this.config.iconSize).attr(`x`,t.centroid(e)[0]-this.config.iconSize/2).attr(`y`,t.centroid(e)[1]-this.config.iconSize/2).attr(`opacity`,i?.5:1);if(re(e.data.icon).then(r=>{if(!r||r===1)return;let i=this.config.iconSize,a=this.config.iconSize,o=Math.round(i*r);r>1?i=o:a=o,n.attr(`width`,i).attr(`height`,a).attr(`x`,t.centroid(e)[0]-i/2).attr(`y`,t.centroid(e)[1]-a/2)}),this.params&&e.data.cooldown?.(this.params)){let n=Math.ceil(e.data.cooldown?.(this.params));r.append(`text`).attr(`class`,`cooldown-text`).text(n+`s`).attr(`fill`,`white`).attr(`opacity`,i?.5:1).attr(`font-size`,`14px`).attr(`font-weight`,`bold`).attr(`x`,t.centroid(e)[0]-this.config.iconSize/4).attr(`y`,t.centroid(e)[1]+this.config.iconSize/2+7)}}this.menuIcons.set(n,r)})}setupAnimations(e){e.transition().duration(this.config.menuTransitionDuration*.8).style(`opacity`,1).style(`transform`,`scale(1)`).on(`start`,()=>{this.isTransitioning=!0}).on(`end`,()=>{this.isTransitioning=!1})}navigateToSubMenu(e){this.isTransitioning=!0,this.menuStack.push(this.currentMenuItems),this.currentMenuItems=e,this.currentLevel++,this.clampAndSetMenuPositionForLevel(this.currentLevel),this.renderMenuItems(this.currentMenuItems,this.currentLevel),this.updateMenuGroupVisibility(),this.animatePreviousMenu()}updateMenuGroupVisibility(){this.updateMenuVisibility(`forward`)}updateMenuVisibility(e=`backward`){this.menuGroups.forEach((t,n)=>{n===this.currentLevel?(t.style(`display`,`block`),t.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(1)`).style(`opacity`,1),t.selectAll(`path`).style(`pointer-events`,`auto`)):n===this.currentLevel-1&&this.currentLevel>0?(t.style(`display`,`block`),t.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(${this.currentLevel===1?`0.65`:`0.5`})`).style(`opacity`,.8),e===`forward`&&t.selectAll(`path`).each(function(){ph(this).style(`pointer-events`,`none`)})):n!==this.currentLevel+1&&t.transition().duration(this.config.menuTransitionDuration*.5).style(`transform`,`scale(0.5)`).style(`opacity`,0).on(`end`,function(){ph(this).style(`display`,`none`)})})}animatePreviousMenu(){this.menuElement.select(`.menu-container`).select(`.menu-level-${this.currentLevel-1}`).transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(${this.currentLevel===1?`0.65`:`0.5`})`).style(`opacity`,.8).on(`end`,()=>{this.navigationInProgress=!1})}navigateBack(){this.menuStack.length!==0&&(this.isTransitioning=!0,this.updateMenuLevels(),this.clampAndSetMenuPositionForLevel(this.currentLevel),this.clearSelectedItemHoverState(),this.updateMenuVisibility(`backward`),this.animateMenuTransitions())}updateMenuLevels(){let e=this.menuStack.pop(),t=this.currentLevel-1;this.currentLevel=t,t===0&&(this.selectedItemId=null),this.currentMenuItems=e??[],this.currentLevel===0&&this.updateCenterButtonState(`default`)}clearSelectedItemHoverState(){if(this.selectedItemId){let e=this.menuPaths.get(this.selectedItemId);e&&e.attr(`filter`,null)}this.refresh()}animateMenuTransitions(){let e=this.menuElement.select(`.menu-container`),t=e.select(`.menu-level-${this.currentLevel+1}`),n=e.select(`.menu-level-${this.currentLevel}`);t.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(0.5)`).style(`opacity`,0).on(`end`,function(){ph(this).remove()}),n.empty()?this.renderAndAnimateNewMenu():this.animateExistingMenu(n)}renderAndAnimateNewMenu(){this.renderMenuItems(this.currentMenuItems,this.currentLevel).style(`transform`,`scale(0.8)`).style(`opacity`,.3).transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(1)`).style(`opacity`,1).on(`end`,()=>{this.isTransitioning=!1,this.navigationInProgress=!1})}animateExistingMenu(e){e.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(1)`).style(`opacity`,1).on(`end`,()=>{this.isTransitioning=!1,this.navigationInProgress=!1}),e.selectAll(`path`).style(`pointer-events`,`auto`)}showRadialMenu(e,t){this.isReopeningAllowed()&&(this.resetMenu(),this.isTransitioning=!1,this.selectedItemId=null,this.anchorX=e,this.anchorY=t,this.menuElement.style(`display`,`block`),this.clampAndSetMenuPositionForLevel(this.currentLevel),this.isVisible=!0,this.renderMenuItems(this.currentMenuItems,this.currentLevel),this.onCenterButtonHover(!0),window.addEventListener(`resize`,this.handleResize))}hideRadialMenu(){this.isVisible&&(this.isTransitioning=!1,this.menuElement.style(`display`,`none`),this.isVisible=!1,this.selectedItemId=null,this.hideTooltip(),this.resetMenu(),this.isTransitioning=!1,this.menuGroups.clear(),this.menuPaths.clear(),this.menuIcons.clear(),this.lastHideTime=Date.now(),window.removeEventListener(`resize`,this.handleResize))}handleCenterButtonClick(){if(this.centerButtonState==="default"){this.params&&this.isCenterButtonEnabled()&&this.centerButtonElement?.action(this.params);return}if(this.centerButtonState===`back`){this.navigationInProgress=!0,this.navigateBack();return}}disableAllButtons(){this.updateCenterButtonState(`default`),this.refresh()}updateCenterButtonState(e){if(this.centerButtonState=e,e===`back`){let e=this.config.centerButtonSize*.8;this.menuElement.select(`.center-button-hitbox`).transition().duration(0).attr(`r`,e),this.menuElement.select(`.center-button-visible`).transition().duration(0).attr(`r`,e),this.menuElement.select(`.center-button-icon`).attr(`xlink:href`,Kv).attr(`width`,this.backIconSize).attr(`height`,this.backIconSize).attr(`x`,-this.backIconSize/2).attr(`y`,-this.backIconSize/2)}e==="default"&&(this.menuElement.select(`.center-button-hitbox`).transition().duration(0).attr(`r`,this.config.centerButtonSize),this.menuElement.select(`.center-button-visible`).transition().duration(0).attr(`r`,this.config.centerButtonSize),this.menuElement.select(`.center-button-icon`).attr(`xlink:href`,this.originalCenterButtonIcon).attr(`width`,this.centerButtonIconSize).attr(`height`,this.centerButtonIconSize).attr(`x`,-this.centerButtonIconSize/2).attr(`y`,-this.centerButtonIconSize/2));let t=this.menuElement.select(`.center-button`),n=this.isCenterButtonEnabled();t.select(`.center-button-hitbox`).style(`cursor`,n?`pointer`:`not-allowed`);let r=e===`back`?this.defaultCenterButtonColor:this.centerButtonColor;t.select(`.center-button-visible`).attr(`fill`,n?r:`#999999`),t.select(`.center-button-icon`).style(`opacity`,n?1:.5)}isCenterButtonEnabled(){return this.currentLevel>0?!0:this.params&&this.centerButtonElement?!this.centerButtonElement.disabled(this.params):!1}onCenterButtonHover(e){if(!this.isCenterButtonEnabled())return;let t=e?1.2:1;this.menuElement.select(`.center-button-hitbox`).transition().duration(200).attr(`r`,this.config.centerButtonSize*t),this.menuElement.select(`.center-button-visible`).transition().duration(200).attr(`r`,this.config.centerButtonSize*t)}isMenuVisible(){return this.isVisible}getCurrentLevel(){return this.currentLevel}setParams(e){this.params=e}getDefaultCenterIconSize(){return this.config.centerIconSize}setCenterButtonAppearance(e,t,n){this.originalCenterButtonIcon=e,this.centerButtonColor=t??this.defaultCenterButtonColor,this.centerButtonIconSize=n??this.config.centerIconSize,this.menuElement&&(this.menuElement.select(`.center-button-icon`).attr(`xlink:href`,e).attr(`width`,this.centerButtonIconSize).attr(`height`,this.centerButtonIconSize).attr(`x`,-this.centerButtonIconSize/2).attr(`y`,-this.centerButtonIconSize/2),this.menuElement.select(`.center-button-visible`).attr(`fill`,this.isCenterButtonEnabled()?this.centerButtonColor:`#999999`),this.updateCenterButtonState(this.centerButtonState))}findMenuItem(e){return this.currentMenuItems.find(t=>t.id===e)}resetMenu(){this.currentLevel=0,this.menuStack=[],this.currentMenuItems=this.rootMenu.subMenu(this.params),this.navigationInProgress=!1,this.menuGroups.clear(),this.menuPaths.clear(),this.menuIcons.clear();let e=this.menuElement?.select(`.menu-container`);e&&e.selectAll(`[class^='menu-level-']`).remove(),this.updateCenterButtonState(`default`),this.submenuHoverTimeout!==null&&(window.clearTimeout(this.submenuHoverTimeout),this.submenuHoverTimeout=null),this.backButtonHoverTimeout!==null&&(window.clearTimeout(this.backButtonHoverTimeout),this.backButtonHoverTimeout=null)}refreshMenu(){this.isVisible&&this.renderMenuItems(this.currentMenuItems,this.currentLevel)}refresh(){!this.isVisible||!this.params||(this.menuPaths.forEach((e,t)=>{let n=this.findMenuItem(t);if(n){let r=this.isItemDisabled(n),i=r?this.config.disabledColor:qv(n,this.params)??`#333333`,a=r?.4:.82;n.timerFraction||e.attr(`fill`,Ph(i)?.copy({opacity:a})?.toString()??i),e.style(`opacity`,r?.5:1),e.style(`cursor`,r?`not-allowed`:`pointer`);let o=this.menuIcons.get(t);if(o){if(n.renderType===`allyExtend`&&this.params)this.refreshAllyExtendIcon(n,r,o);else{let e=o.select(`text`);e.empty()||e.style(`opacity`,r?.5:1);let t=o.select(`image`);t.empty()||t.attr(`opacity`,r?.5:1);let i=o.select(`.cooldown-text`);if(this.params&&!i.empty()&&n.cooldown){let e=Math.ceil(n.cooldown(this.params));e<=0?i.remove():i.text(e+`s`)}}this.maybeUpdateTimerGradient(n,i,a)}}}),this.updateCenterButtonState(this.centerButtonState))}refreshAllyExtendIcon(e,t,n){if(e.renderType!==`allyExtend`||!this.params)return;let r=this.getStateKeyByType(e.renderType,t,this.params),i=n.attr(`data-prev-state`);if(!(r&&r===i)){let i=parseFloat(n.attr(`data-cx`)||`0`),a=parseFloat(n.attr(`data-cy`)||`0`);r?n.attr(`data-prev-state`,r):n.selectAll(`*`).remove(),this.renderAllyExtendIcon(n.node(),i,a,this.config.iconSize,t,this.params,e.icon,!0)}}maybeUpdateTimerGradient(e,t,n){if(!e.timerFraction||!this.params)return;let r=e.timerFraction(this.params),i=this.menuElement.select(`#timer-gradient-${e.id}`);if(!i.empty()){let e=1-r,a=Ph(t)?.copy({opacity:n})?.toString()??t,o=Ph(ig(t,`white`)(.4))?.copy({opacity:n})?.toString()??a;i.select(`.timer-stop-faded`).attr(`offset`,e).attr(`stop-color`,o),i.select(`.timer-stop-normal`).attr(`offset`,e).attr(`stop-color`,a)}}getStateKeyByType(e,t,n){switch(e){case`allyExtend`:return this.getAllyExtendStateKey(t,n);default:return null}}getAllyExtendStateKey(e,t){let n=t.playerActions?.interaction;return`${e}:${n?.allianceInfo?.myPlayerAgreedToExtend??!1}:${n?.allianceInfo?.otherAgreedToExtend??!1}`}renderAllyExtendIcon(e,t,n,r,i,a,o,s){if(s)for(;e.firstChild;)e.removeChild(e.firstChild);let c=a.playerActions?.interaction,l=c?.allianceInfo?.myPlayerAgreedToExtend??!1,u=c?.allianceInfo?.otherAgreedToExtend??!1,d=`http://www.w3.org/2000/svg`,f=r*.8,p=o??``;re(p).then(r=>{let a=f*(r??1),o=a*2+2,s=document.createElementNS(d,`image`);if(s.setAttribute(`href`,p),s.setAttribute(`width`,a.toString()),s.setAttribute(`height`,f.toString()),s.setAttribute(`x`,(t-o/2).toString()),s.setAttribute(`y`,(n-f/2).toString()),s.setAttribute(`opacity`,i?`0.5`:`1`),!l){let e=document.createElementNS(d,`animate`);e.setAttribute(`attributeName`,`opacity`),e.setAttribute(`values`,i?`0.5;0.1;0.5`:`1;0.2;1`),e.setAttribute(`dur`,`1.5s`),e.setAttribute(`repeatCount`,`indefinite`),s.appendChild(e)}e.appendChild(s);let c=document.createElementNS(d,`image`);if(c.setAttribute(`href`,p),c.setAttribute(`width`,a.toString()),c.setAttribute(`height`,f.toString()),c.setAttribute(`x`,(t-o/2+a+2).toString()),c.setAttribute(`y`,(n-f/2).toString()),c.setAttribute(`opacity`,i?`0.5`:`1`),!u){let e=document.createElementNS(d,`animate`);e.setAttribute(`attributeName`,`opacity`),e.setAttribute(`values`,i?`0.5;0.1;0.5`:`1;0.2;1`),e.setAttribute(`dur`,`1.5s`),e.setAttribute(`repeatCount`,`indefinite`),c.appendChild(e)}e.appendChild(c)})}isReopeningAllowed(){return Date.now()-this.lastHideTime>=this.reopenCooldownMs}showTooltip(e){if(this.tooltipElement){this.tooltipElement.innerHTML=``;for(let t of e){let e=document.createElement(`div`);e.className=t.className,`key`in t?e.textContent=v(t.key,t.params):e.textContent=t.text,this.tooltipElement.appendChild(e)}this.tooltipElement.style.display=`block`}}hideTooltip(){this.tooltipElement&&(this.tooltipElement.style.display=`none`)}clampAndSetMenuPositionForLevel(e){let t=this.getOuterRadiusForLevel(e),n=Math.max(t,this.config.centerButtonSize)+10,r=window.innerWidth,i=window.innerHeight,a=2*n>r?r/2:Math.min(Math.max(this.anchorX,n),r-n),o=2*n>i?i/2:Math.min(Math.max(this.anchorY,n),i-n);this.menuElement.select(`svg`).style(`top`,`${o}px`).style(`left`,`${a}px`)}},Xv=N(`images/AllianceRequestBlackIcon.svg`),Zv=N(`images/AllianceRequestWhiteIcon.svg`),Qv=N(`images/CrownIcon.svg`),$v=N(`images/DisconnectedIcon.svg`),ey=N(`images/EmbargoBlackIcon.svg`),ty=N(`images/EmbargoWhiteIcon.svg`),ny=N(`images/NukeIconRed.svg`),ry=N(`images/NukeIconWhite.svg`),iy=N(`images/TargetIcon.svg`),ay=N(`images/DoomsdayClockSkull.svg`),oy=`doomsday-clock`,sy=`crown`,cy=`disconnected`,ly=`alliance-request`,uy=`target`,dy=`emoji`,fy=`embargo`,py=`nuke`,my=`image`,hy=`emoji`;function gy(e){let t=e.playerViews().sort((e,t)=>t.numTilesOwned()-e.numTilesOwned());return t.length>0?t[0]:null}function _y(e){let{game:t,player:n,firstPlace:r,darkMode:i,transitiveTargets:a}=e,o=t.myPlayer(),s=i??!1,c=[];if(n===r){let e=n.cosmetics.crown?.url;c.push({id:sy,kind:my,src:e?N(e):Qv})}if(n.inDoomsdayClock()&&c.push({id:oy,kind:my,src:ay}),n.isDisconnected()&&c.push({id:cy,kind:my,src:$v}),o!==null&&n.isRequestingAllianceWith(o)){let e=s?Xv:Zv;c.push({id:ly,kind:my,src:e})}(a??o?.transitiveTargets()??[]).includes(n)&&c.push({id:uy,kind:my,src:iy,center:!0});let l=n.outgoingEmojis().find(e=>e.recipientID===`AllPlayers`||e.recipientID===o?.smallID());if(l&&c.push({id:dy,kind:hy,text:l.message}),o?.hasEmbargo(n)){let e=s?ey:ty;c.push({id:fy,kind:my,src:e})}if(!o||n.id()!==o.id()){let e=!1,r=!1,i=n.units(..._e.types);for(let n of i)if(n.isActive()){e=!0;let i=n.targetTile();if(o&&i&&t.owner(i).id()===o.id()){r=!0;break}}if(e){let e=r?ny:ry;c.push({id:py,kind:my,src:e})}}return c}var vy={[_.Hostile]:{color:`#ef4444`,eyeCy:7.5,mouth:`M5 12 Q8 9 11 12`,brows:[`M4 5.5 L6.5 7`,`M12 5.5 L9.5 7`]},[_.Distrustful]:{color:`#f97316`,eyeCy:6.8,mouth:`M5.5 11 Q8 9.2 10.5 11`},[_.Friendly]:{color:`#22c55e`,eyeCy:6.5,mouth:`M5 10 Q8 13 11 10`}},yy=class extends ie{constructor(...e){super(...e),this.relation=_.Neutral}createRenderRoot(){return this}render(){let e=vy[this.relation];if(!e)return b``;let{color:t,eyeCy:n,mouth:r,brows:i}=e;return b`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      style="flex-shrink:0"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="6.5"
        stroke="${t}"
        stroke-width="1.4"
        fill="none"
      />
      ${i?.map(e=>b`<path
            d="${e}"
            stroke="${t}"
            stroke-width="1.4"
            stroke-linecap="round"
          />`)}
      <circle cx="5.8" cy="${n}" r="0.9" fill="${t}" />
      <circle cx="10.2" cy="${n}" r="0.9" fill="${t}" />
      <path
        d="${r}"
        stroke="${t}"
        stroke-width="1.4"
        fill="none"
        stroke-linecap="round"
      />
    </svg>`}};M([A({type:Number})],yy.prototype,`relation`,void 0),yy=M([h(`relation-smiley`)],yy);var by=N(`images/SoldierIconAquarius.svg`),xy=N(`images/AllianceIcon.svg`),Sy=N(`images/TraitorIcon.svg`),Cy=N(`images/BattleshipIconWhite.svg`),wy=N(`images/EmojiIconWhite.svg`),Ty=N(`images/ChatIconWhite.svg`),Ey=N(`images/AllianceIconWhite.svg`),Dy=N(`images/TraitorIconWhite.svg`),Oy=N(`images/TargetIconWhite.svg`),ky=N(`images/BoatIconWhite.svg`),Ay=N(`images/CityIconWhite.svg`),jy=N(`images/FactoryIconWhite.svg`),My=N(`images/GoldCoinIcon.svg`),Ny=N(`images/MissileSiloIconWhite.svg`),Py=N(`images/PortIcon.svg`),Fy=N(`images/SamLauncherIconWhite.svg`),Iy=N(`images/SoldierIcon.svg`);function Ly(e,t,n){let r=n.x(t),i=n.y(t),a=e.x-r,o=e.y-i;return Math.sqrt(a*a+o*o)}function Ry(e,t){return(n,r)=>Ly(e,n.tile(),t)-Ly(e,r.tile(),t)}var zy=class extends ie{constructor(...e){super(...e),this.player=null,this.tile=null,this.playerActions=null,this.playerActionsFor=null,this.playerActionsFetchedAt=0,this.playerActionsVersion=0,this.playerProfile=null,this.unit=null,this._isInfoVisible=!1,this.spawnBarVisible=!1,this.immunityBarVisible=!1,this._isActive=!1,this.userSettings=new be,this.lastMouseUpdate=0,this.pointerOnPanel=!1,this.onPanelEnter=()=>this.pointerOnPanel=!0,this.onPanelLeave=()=>this.pointerOnPanel=!1}showShortcutButtons(){return window.innerWidth>=1200&&!C.isTouch}get barOffset(){return(this.spawnBarVisible?7:0)+(this.immunityBarVisible?7:0)}init(){this.eventBus.on(pt,e=>this.onMouseEvent(e)),this.eventBus.on(mt,e=>this.maybeShow(e.x,e.y)),this.eventBus.on(ut,e=>this.maybeShow(e.x,e.y)),this.eventBus.on(Jv,()=>this.hide()),this.eventBus.on(tp,e=>{this.spawnBarVisible=e.visible}),this.eventBus.on(jf,e=>{this.immunityBarVisible=e.visible}),this.eventBus.on(Rt,e=>this.markActionTaken(e.tile,`requestAlliance`)),this.eventBus.on(zt,e=>this.markActionTaken(e.tile,`breakAlliance`)),this.eventBus.on(Bt,e=>this.markActionTaken(e.tile,`target`)),this._isActive=!0}markActionTaken(e,t){let n=this.playerActions;!n||n.player!==this.player||(e===void 0?this._isInfoVisible&&!this.pointerOnPanel:e===this.tile)&&(this.playerActionsVersion++,this.playerActionsFetchedAt=Date.now(),this.playerActions={...n,[t]:!1})}onMouseEvent(e){if(this.pointerOnPanel)return;let t=Date.now();t-this.lastMouseUpdate<100||(this.lastMouseUpdate=t,this.maybeShow(e.x,e.y))}hide(){this.pointerOnPanel=!1,this.setVisible(!1),this.unit=null,this.player=null}maybeShow(e,t){this.hide();let n=this.transform.screenToWorldCoordinates(e,t);if(!this.game.isValidCoord(n.x,n.y))return;let r=this.game.ref(n.x,n.y);if(!r)return;let i=this.game.owner(r);if(i&&i.isPlayer())this.player=i,this.tile=r,this.player.profile().then(e=>{this.playerProfile=e}),this.refreshPlayerActions(this.player,r),this.setVisible(!0);else if(!this.game.isLand(r)){let e=this.game.units(m.Warship,m.TradeShip,m.TransportShip).filter(e=>Ly(n,e.tile(),this.game)<50).sort(Ry(n,this.game));e.length>0&&(this.unit=e[0],this.setVisible(!0))}}refreshPlayerActions(e,t){let n=this.game.myPlayer();if(!n||e===n||!this.showShortcutButtons())return;if(this.game.inSpawnPhase()||this.game.owner(t)!==e){this.playerActionsVersion++,this.playerActionsFor=null,this.playerActions=null;return}let r=Date.now();if(this.playerActionsFor===e&&r-this.playerActionsFetchedAt<1e3)return;this.playerActionsFor=e,this.playerActionsFetchedAt=r;let i=++this.playerActionsVersion;n.actions(t,[m.TransportShip]).then(t=>{if(i!==this.playerActionsVersion)return;let n=t.interaction;this.playerActions={player:e,requestAlliance:n?.canSendAllianceRequest??!1,breakAlliance:n?.canBreakAlliance??!1,target:n?.canTarget??!1,boat:t.buildableUnits.some(e=>e.type===m.TransportShip&&e.canBuild!==!1)}}).catch(e=>{console.warn(`Failed to check player actions:`,e)})}tick(){this._isInfoVisible&&this.player&&this.tile!==null&&this.refreshPlayerActions(this.player,this.tile),this.requestUpdate()}setVisible(e){this._isInfoVisible=e,this.requestUpdate()}getPlayerNameColor(e){return e?`text-green-500`:`text-white`}getRelationSmiley(e,t){if(!t||t===e||e.type()!==T.Nation)return``;let n=this.playerProfile?.relations[t.smallID()]??_.Neutral;return n===_.Neutral?``:b`<relation-smiley .relation=${n}></relation-smiley>`}getRelationName(e){switch(e){case _.Hostile:return v(`relation.hostile`);case _.Distrustful:return v(`relation.distrustful`);case _.Neutral:return v(`relation.neutral`);case _.Friendly:return v(`relation.friendly`);default:return v(`relation.default`)}}displayUnitCount(e,t,n){return this.game.config().isUnitDisabled(t)?``:b`<div
          class="flex items-center justify-center gap-0.5 lg:gap-1 p-0.5 lg:p-1 border rounded-md border-gray-500 text-[10px] lg:text-xs w-9 lg:w-12 h-6 lg:h-7"
          translate="no"
        >
          <img
            src=${n}
            class="w-3 h-3 lg:w-4 lg:h-4 object-contain shrink-0"
          />
          <span>${e.totalUnitLevels(t)}</span>
        </div>`}allianceExpirationText(e){let{expiresAt:t}=e,n=t-this.game.ticks(),r=0;return n>0&&(r=Math.max(0,Math.floor(n/10))),ve(r)}renderPlayerNameIcons(e){return e.length===0?b``:b`<span class="flex items-center gap-1 shrink-0">
      ${e.map(e=>e.kind===`emoji`&&e.text?b`<span class="h-4 w-4 font-mono text-sm shrink-0" translate="no"
              >${e.text}</span
            >`:e.kind===`image`&&e.src?b`<img src=${e.src} alt="" class="w-4 h-4 shrink-0" />`:b``)}
    </span>`}getNameFontSize(e){let{nameLength:t,iconCount:n,hasFlag:r,hasBetrayal:i,hasAlliance:a,typeAndTeamLen:o}=e,s={perIcon:2,icon:.5,flag:3.5,betrayal:4.2,alliance:6.7,allianceWrapped:3.9},c={perIcon:2.2,icon:.5,flag:4.2,betrayal:4.6,alliance:8.6,allianceWrapped:4.8},l=window.innerWidth,u=l>=1024,d=u?s:c,f=(u?12/18*o+8/10.8:12/14*o+4/8.4)+n*d.perIcon+(n?d.icon:0)+(r?d.flag:0)+(i?d.betrayal:0),p;p=l<640?28.1+(Math.max(360,l)-360)*.119:l<768?44.8:l<1024?41:31.1;let m=!1,h=a?d.alliance:0,g=(p-(f+h))/t;a&&g<.85&&(m=!0,h=d.allianceWrapped,g=(p-(f+h))/t);let _=u?`lg`:`sm`;return{fontSize:`clamp(var(--text-${_}) * .65, var(--text-${_}) * ${g.toFixed(3)}, var(--text-${_}))`,isAllianceWrapped:m}}renderShortcutButton(e,t,n,r){let i=n?F(n):``;return b`<button
      class="relative flex items-center justify-center size-6.5 border rounded-md border-gray-500 hover:bg-white/10 cursor-pointer"
      title=${t}
      @click=${e=>{e.stopPropagation(),r(),this.hide()}}
    >
      <img src=${e} alt="" class="size-5 object-contain" />
      ${i?b`<span
            class="pointer-events-none absolute -bottom-1 -right-1 px-0.5 rounded-sm bg-gray-800 text-[9px] leading-tight font-mono text-gray-300"
            translate="no"
            >${i}</span
          >`:``}
    </button>`}renderPlayerInfo(e){let t=this.game.myPlayer(),n=t?.isFriendly(e),r=t?.isAlliedWith(e),i=e.getTraitorRemainingTicks(),a=null,o=null,s=gy(this.game),c=_y({game:this.game,player:e,firstPlace:s}),l=this.game.config().maxTroops(e),d=e.outgoingAttacks().map(e=>e.troops).reduce((e,t)=>e+t,0),f=e.troops(),p=``;switch(e.type()){case T.Bot:p=v(`player_type.bot`);break;case T.Nation:p=v(`player_type.nation`);break;case T.Human:p=v(`player_type.player`);break}let h=this.game.teamClanTag(e.team()),g=u(e.team(),h),_=p.length,y=g!==``&&e.type()!==T.Bot?(h??g).length+2:0,x=Math.max(_,y),{fontSize:S,isAllianceWrapped:w}=this.getNameFontSize({nameLength:e.displayName().length,iconCount:c.length,hasFlag:!!e.cosmetics.flag,hasBetrayal:i>0,hasAlliance:r??!1,typeAndTeamLen:x});if(r){let n=t?.alliances().find(t=>t.other===e.id());n!==void 0&&(a=w?b`<div
              class="${i===0?`ml-auto`:``} flex flex-col items-center gap-0 text-xs font-bold leading-none shrink-0"
            >
              <img
                src=${xy}
                width="14"
                height="14"
                class="shrink-0"
              />
              <span class="text-[10px] leading-tight"
                >${this.allianceExpirationText(n)}</span
              >
            </div>`:b`<div
              class="${i===0?`ml-auto`:``} flex items-center mr-0 gap-1 text-xs font-bold leading-tight shrink-0"
            >
              <img
                src=${xy}
                width="18"
                height="18"
                class="shrink-0"
              />
              <span>${this.allianceExpirationText(n)}</span>
            </div>`)}i>0&&(o=b`<span class="flex ml-auto items-center shrink-0 "
        ><img src=${Sy} alt="" class="w-4 h-4 shrink-0" />
        <span
          class="text-sm text-red-900 
          drop-shadow-[-.2px_-.2px_.8px_rgba(0,0,0,.7),.2px_.2px_.8px_rgba(0,0,0,.7)]"
        >
          ${ve(Math.floor(i/10))} </span
        ><span></span
      ></span>`);let E=this.userSettings.keybinds(C.isMac);return b`
      <div class="flex items-start gap-1 lg:gap-2 p-1 lg:p-1.5">
        ${t&&this.showShortcutButtons()?b`<div class="flex flex-col gap-1 self-center shrink-0">
              ${e===t?``:this.renderShortcutButton(Ty,v(`player_panel.chat`),E.quickChat,()=>this.eventBus.emit(new Yd(e)))}
              ${this.renderShortcutButton(wy,v(`player_panel.emotes`),E.emojiMenu,()=>this.eventBus.emit(new Ef(e)))}
            </div>`:``}
        <!-- Left: Gold & Troop bar -->
        <div class="flex flex-col gap-1 shrink-0 w-28 md:w-36">
          <div class="flex items-center gap-1">
            <div
              class="flex items-center justify-center px-1 py-0.5 border rounded-md border-yellow-400 font-bold text-yellow-400 text-sm lg:gap-1"
              translate="no"
            >
              <img src=${My} width="13" height="13" />
              <span class="px-0.5">${Me(e.gold())}</span>
            </div>
            <div
              class="flex flex-1 flex-col items-center justify-center text-xs font-bold ${d>0?`text-aquarius`:`text-white/40`} drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
              translate="no"
            >
              <span class="flex items-center gap-px leading-none text-xs"
                ><img
                  class="w-2.5 h-2.5 inline-block ${d>0?``:`brightness-0 invert opacity-40`}"
                  src=${d>0?by:Iy}
                  alt=""
                  aria-hidden="true"
                />↑</span
              >
              <span class="tabular-nums leading-none text-sm mt-0.5"
                >${je(d)}</span
              >
            </div>
          </div>
          <div class="w-28 md:w-36" translate="no">
            ${this.renderTroopBar(f,d,l)}
          </div>
        </div>
        <!-- Right: Player identity + Units below -->
        <div
          class="flex flex-col justify-between self-stretch w-[100%] flex-grow-1"
        >
          <div
            class="flex items-center gap-1 lg:gap-2 font-bold text-sm lg:text-lg ${this.getPlayerNameColor(n??!1)}"
          >
            ${e.cosmetics.flag?b`<img
                  class="h-6 object-contain shrink-0"
                  src=${N(e.cosmetics.flag)}
                />`:b``}
            <div class="shrink min-w-0">
              <span
                class="font-mono inline-block leading-[1.2] wrap-anywhere"
                style="font-size: ${S}"
                >${e.displayName()}</span
              >
            </div>
            ${this.getRelationSmiley(e,t)}
            ${g!==``&&e.type()!==T.Bot?b`<div
                  class="flex flex-col items-center leading-tight shrink-0"
                >
                  <span
                    class="text-gray-400 text-xs font-mono font-normal whitespace-nowrap"
                    >${p}</span
                  >
                  <span
                    class="text-xs font-mono font-normal text-gray-400 whitespace-nowrap"
                    >[<span
                      style="color: ${Ze.current().teamColor(e.team()).toHex()}"
                      >${h??g}</span
                    >]</span
                  >
                </div>`:b`<span
                  class="text-gray-400 text-xs font-mono font-normal shrink-0 whitespace-nowrap"
                  >${p}</span
                >`}
            ${this.renderPlayerNameIcons(c)} ${o??``}
            ${a??``}
          </div>
          <div class="flex gap-0.5 lg:gap-1 items-center mt-0.5">
            ${this.displayUnitCount(e,m.City,Ay)}
            ${this.displayUnitCount(e,m.Factory,jy)}
            ${this.displayUnitCount(e,m.Port,Py)}
            ${this.displayUnitCount(e,m.MissileSilo,Ny)}
            ${this.displayUnitCount(e,m.SAMLauncher,Fy)}
            ${this.displayUnitCount(e,m.Warship,Cy)}
          </div>
        </div>
        ${t&&this.showShortcutButtons()?this.renderActionButtons(e,t,E):``}
      </div>
    `}renderActionButtons(e,t,n){let r=e!==t&&this.playerActions?.player===e?this.playerActions:null,i=this.tile??void 0,a=[];return r?.requestAlliance?a.push(this.renderShortcutButton(Ey,v(`player_panel.send_alliance`),n.requestAlliance,()=>this.eventBus.emit(new Rt(i,e.id())))):r?.breakAlliance&&a.push(this.renderShortcutButton(Dy,v(`player_panel.break_alliance`),n.breakAlliance,()=>this.eventBus.emit(new zt(i,e.id())))),r?.target&&a.push(this.renderShortcutButton(Oy,v(`player_panel.target`),n.targetPlayer,()=>this.eventBus.emit(new Bt(i,e.id())))),r?.boat&&a.push(this.renderShortcutButton(ky,v(`user_setting.boat_attack`),n.boatAttack,()=>this.eventBus.emit(new Ft(i)))),b`<div
      class="grid grid-rows-2 grid-flow-col auto-cols-max justify-end gap-1 self-center shrink-0 w-14"
    >
      ${a}
    </div>`}renderTroopBar(e,t,n){let r=Math.max(n,1),i=e/r*100,a=t/r*100,o=Math.max(0,Math.min(100,i)),s=Math.max(0,Math.min(100-o,a));return b`
      <div
        class="w-full h-5 lg:h-6 border border-gray-600 rounded-md bg-gray-900/60 overflow-hidden relative"
      >
        <div class="relative h-full">
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-sky-700 transition-transform duration-200 ease-out"
            style="transform: scaleX(${o/100});"
          ></div>
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-malibu-blue transition-transform duration-200 ease-out"
            style="transform: translateX(${o}%) scaleX(${s/100});"
          ></div>
        </div>
        <div
          class="absolute inset-0 flex items-center justify-between px-1.5 text-sm font-bold leading-none pointer-events-none"
          translate="no"
        >
          <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >${je(e)}</span
          >
          <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >${je(n)}</span
          >
        </div>
        <img
          src=${Iy}
          alt=""
          aria-hidden="true"
          width="14"
          height="14"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-0 invert drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] pointer-events-none"
        />
      </div>
    `}renderUnitInfo(e){return b`
      <div class="p-2">
        <div class="font-bold mb-1 ${(e.owner()===this.game.myPlayer()||this.game.myPlayer()?.isFriendly(e.owner()))??!1?`text-green-500`:`text-white`}">
          ${e.owner().displayName()}
        </div>
        <div class="mt-1">
          <div class="text-sm opacity-80">${e.type()}</div>
          ${e.hasHealth()?b` <div class="text-sm">Health: ${e.health()}</div> `:``}
          ${e.type()===m.TransportShip?b`
                <div class="text-sm">
                  Troops: ${je(e.troops())}
                </div>
              `:``}
        </div>
      </div>
    `}render(){if(!this._isActive)return b``;let e=this._isInfoVisible?`opacity-100 visible`:`opacity-0 invisible pointer-events-none`;return b`
      <div
        class="fixed top-0 left-0 right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-[1001]"
        style="margin-top: ${this.barOffset}px;"
        @click=${()=>this.hide()}
        @contextmenu=${e=>e.preventDefault()}
      >
        <div
          class="bg-gray-800/92 backdrop-blur-sm shadow-xs min-[1200px]:rounded-lg sm:rounded-b-lg shadow-lg text-white text-lg lg:text-base w-full ${this.showShortcutButtons()?`sm:w-[598px]`:`sm:w-[500px]`} overflow-hidden ${e}"
          @mouseenter=${this.onPanelEnter}
          @mouseleave=${this.onPanelLeave}
        >
          ${this.player?this.renderPlayerInfo(this.player):``}
          ${this.unit?this.renderUnitInfo(this.unit):``}
        </div>
      </div>
    `}createRenderRoot(){return this}};M([A({type:Object})],zy.prototype,`game`,void 0),M([A({type:Object})],zy.prototype,`eventBus`,void 0),M([A({type:Object})],zy.prototype,`transform`,void 0),M([i()],zy.prototype,`player`,void 0),M([i()],zy.prototype,`playerActions`,void 0),M([i()],zy.prototype,`playerProfile`,void 0),M([i()],zy.prototype,`unit`,void 0),M([i()],zy.prototype,`_isInfoVisible`,void 0),M([i()],zy.prototype,`spawnBarVisible`,void 0),M([i()],zy.prototype,`immunityBarVisible`,void 0),zy=M([h(`player-info-overlay`)],zy);export{pi as $,vn as $t,Ou as A,bt as An,un as At,hu as B,wn as Bt,gf as C,Ot as Cn,Wn as Ct,Jd as D,Yt as Dn,An as Dt,of as E,wt as En,kn as Et,wu as F,Et as Fn,_n as Ft,Zl as G,Mn as Gt,iu as H,En as Ht,Cu as I,Tt as In,yn as It,ql as J,gn as Jt,Xl as K,Nn as Kt,Su as L,nt as Ln,fn as Lt,Eu as M,ut as Mn,hn as Mt,bu as N,dt as Nn,mn as Nt,Kd as O,Ut as On,Ln as Ot,Tu as P,Dt as Pn,dn as Pt,Ba as Q,Bn as Qt,yu as R,R as Rn,On as Rt,hf as S,Ht as Sn,Gn as St,sf as T,jt as Tn,bn as Tt,tu as U,Sn as Ut,uu as V,Dn as Vt,Ql as W,Fn as Wt,rc as X,pn as Xt,Kl as Y,xn as Yt,_s as Z,jn as Zt,lf as _,Bt as _n,Qn as _t,tp as a,tn as an,Fr as at,df as b,pt as bn,qn as bt,Hf as c,qt as cn,wr as ct,Mf as d,mt as dn,Or as dt,an as en,fi as et,Af as f,Ft as fn,Mr as ft,_f as g,Lt as gn,Zn as gt,cf as h,Rt as hn,pr as ht,sp as i,$t as in,Xr as it,Du as j,St as jn,Pn as jt,ku as k,xt as kn,In as kt,Lf as l,vt as ln,kr as lt,mf as m,It as mn,ur as mt,Yv as n,Zt as nn,Yr as nt,np as o,_t as on,Pr as ot,Df as p,zt as pn,hr as pt,Yl as q,Tn as qt,cp as r,Qt as rn,Zr as rt,$f as s,Vt as sn,Nr as st,zy as t,en as tn,Qr as tt,jf as u,Ct as un,Dr as ut,uf as v,Xt as vn,nr as vt,vf as w,At as wn,Un as wt,ff as x,ct as xn,Kn as xt,pf as y,ft as yn,Jn as yt,_u as z,Cn as zt};