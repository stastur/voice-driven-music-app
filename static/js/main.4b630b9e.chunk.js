(this["webpackJsonpvoice-driven-music-app"]=this["webpackJsonpvoice-driven-music-app"]||[]).push([[0],{40:function(e,t,n){e.exports=n(55)},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(33),c=n.n(i),o=n(10),l=n(57),u=function e(){var t=this;Object(o.a)(this,e),this._recognition=void 0,this._commandsMap=new Map,this._eventListenersMap=new Map,this.setLanguage=function(e){return t._recognition.lang=e,t},this.setAlternatives=function(e){return t._recognition.maxAlternatives=e,t},this.setInterimResults=function(e){return t._recognition.interimResults=e,t},this.setContinuous=function(e){return t._recognition.continuous=e,t},this._initializeEventHandlers=function(){["speechstart","speechend","soundstart","soundend","nomatch","error","audiostart","audioend","result","start","end"].forEach((function(e){return t._recognition.addEventListener(e,(function(n){return t._getEventListener(e)(n)}))})),t._recognition.addEventListener("result",(function(e){var n=e.results[e.resultIndex],a=!0,r=!1,i=void 0;try{for(var c,o=n[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){var l=c.value;t._getCommandCallback(l.transcript)()}}catch(u){r=!0,i=u}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}})),t._recognition.addEventListener("end",(function(){t.start()}))},this._getCommandCallback=function(e){return t._commandsMap.get(e.toLocaleLowerCase(t._recognition.lang))||l.a},this._getEventListener=function(e){return t._eventListenersMap.get(e)||l.a},this.addCommand=function(e){return t._commandsMap.set(e.trigger.toLocaleLowerCase(t._recognition.lang),e.callback),t},this.addCommands=function(e){return e.forEach(t.addCommand),t},this.addEventListener=function(e,n){t._eventListenersMap.set(e,n)},this.removeEventListener=function(e){t._eventListenersMap.delete(e)},this.start=function(){t._recognition.start()},this.abort=function(){t._recognition.abort()},this.stop=function(){t._recognition.stop()};var n=window.webkitSpeechRecognition;if(!n)throw new Error("Speech recognition is not supported by your browser");this._recognition=new n,this._recognition.maxAlternatives=5,this._recognition.lang="en-US",this._recognition.interimResults=!1,this._recognition.continuous=!1,this._initializeEventHandlers()},s=n(13),d=n(5),f=n(60),m=n(59),p=n(15),h=function(e){var t=e.value;return r.a.createElement(d.a,{d:"flex",alignItems:"center"},r.a.createElement(d.a,{as:p.e,paddingRight:"1"}),r.a.createElement(d.a,{d:"flex",alignItems:"center"},r.a.createElement(f.d,{width:"24",value:t,onChange:DZ.player.setVolume},r.a.createElement(f.c,null),r.a.createElement(f.a,null),r.a.createElement(f.b,null))))},b=function(e){var t=e.isPlaying;return r.a.createElement(d.a,null,r.a.createElement(m.a,{variant:"outline","aria-label":"previous track",icon:p.a,onClick:DZ.player.prev}),r.a.createElement(m.a,{variant:"outline","aria-label":"play/pause track",icon:t?p.c:p.d,onClick:t?DZ.player.pause:DZ.player.play}),r.a.createElement(m.a,{variant:"outline","aria-label":"next track",icon:p.b,onClick:DZ.player.next}))},v=function(e){var t,n=e.details;return r.a.createElement(d.a,{px:"2",flexGrow:1},r.a.createElement(d.a,{fontWeight:"bold",fontSize:"md"},null===n||void 0===n?void 0:n.title),r.a.createElement(d.a,{fontSize:"xs"},null===n||void 0===n||null===(t=n.artist)||void 0===t?void 0:t.name))},g=function(e){var t=e.position,n=e.duration,a=n?t/n*100:0;return r.a.createElement(f.d,{onChange:DZ.player.seek,value:a},r.a.createElement(f.c,null),r.a.createElement(f.a,null),r.a.createElement(f.b,null))},y=function(e){var t=_(),n=t.track,i=t.volume,c=t.isPlaying,o=t.position,l=t.duration;return Object(a.useEffect)((function(){DZ.player.playAlbum(7102365,!1)}),[]),r.a.createElement(d.a,e,r.a.createElement(g,{position:o,duration:l}),r.a.createElement(d.a,{d:"flex",alignItems:"center"},r.a.createElement(b,{isPlaying:c}),r.a.createElement(v,{details:n}),r.a.createElement(h,{value:i})))},_=function(){var e=Object(a.useState)(DZ.player.getVolume()),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(DZ.player.isPlaying()),c=Object(s.a)(i,2),o=c[0],l=c[1],u=Object(a.useState)(0),d=Object(s.a)(u,2),f=d[0],m=d[1],p=Object(a.useState)(0),h=Object(s.a)(p,2),b=h[0],v=h[1],g=Object(a.useState)(DZ.player.getCurrentTrack()),y=Object(s.a)(g,2),_=y[0],E=y[1];return Object(a.useLayoutEffect)((function(){DZ.Event.subscribe("volume_changed",r),DZ.Event.subscribe("current_track",(function(e){var t=e.track;return E(t)})),DZ.Event.subscribe("player_play",(function(){return l(!0)})),DZ.Event.subscribe("player_paused",(function(){return l(!1)})),DZ.Event.subscribe("player_position",(function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];m(n),v(a)}))}),[]),{track:_,volume:n,isPlaying:o,position:f,duration:b}},E=n(18),j=n(17),O=n(19),w=n(30),k=function e(t){var n=this;Object(o.a)(this,e),this._apiPath=void 0,this._callToAPI=function(e,t,n){return new Promise((function(a){var r=[e,t,n,function(e){var t=e.error?{error:e.error}:{body:e};a(t)}].filter(Object(w.negate)(w.isNil)),i=Object(w.curry)(DZ.api,r.length);try{r.reduce((function(e,t){return e(t)}),i)}catch(c){a({error:c})}}))},this._buildUrl=function(e){return e?"".concat(n._apiPath,"/").concat(e):n._apiPath},this._apiPath=t},A=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).fetchById=function(e){return n._callToAPI(n._buildUrl(e))},n}return Object(O.a)(t,e),t}(k),I=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).fetchById=function(e){return n._callToAPI(n._buildUrl(e))},n.fetchTracks=function(e){return n._callToAPI(n._buildUrl("".concat(e,"/tracks")))},n}return Object(O.a)(t,e),t}(k),P=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).fetchById=function(e){return n._callToAPI(n._buildUrl(e))},n.fetchStations=function(){return n._callToAPI(n._buildUrl())},n.fetchTracks=function(e){return n._callToAPI(n._buildUrl("".concat(e,"/tracks")))},n}return Object(O.a)(t,e),t}(k),D=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).fetchById=function(e){return n._callToAPI(n._buildUrl(e))},n.fetchGenres=function(){return n._callToAPI(n._buildUrl())},n}return Object(O.a)(t,e),t}(k),Z=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).searchEverything=function(e){return n._callToAPI(n._buildUrl("track?q=".concat(e)))},n.searchTracks=function(e){return n._callToAPI(n._buildUrl("track?q=".concat(e)))},n}return Object(O.a)(t,e),t}(k),C=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).fetchById=function(e){return n._callToAPI(n._buildUrl(e))},n.fetchAlbums=function(e){return n._callToAPI(n._buildUrl("".concat(e,"/albums")))},n.fetchRelatedArtists=function(e){return n._callToAPI(n._buildUrl("".concat(e,"/related")))},n}return Object(O.a)(t,e),t}(k),x={track:new A("track"),album:new I("album"),radio:new P("radio"),genre:new D("genre"),search:new Z("search"),artist:new C("artist")},L=n(22),T=n(61),U=n(38),S=n(58),z=function(e){e.id;var t=e.title,n=e.onPlay,a=e.description,i=e.src,c=Object(U.a)(e,["id","title","onPlay","description","src"]);return r.a.createElement(d.a,Object.assign({},c,{w:"3xs",borderWidth:"1px",rounded:"lg",overflow:"hidden",boxShadow:"sm"}),r.a.createElement(d.a,{position:"relative"},r.a.createElement(m.a,{onClick:n,"aria-label":"play ".concat(t),icon:p.d,isRound:!0,m:"2",size:"sm",bottom:"0",position:"absolute"}),r.a.createElement(S.a,{src:i,alt:t})),r.a.createElement(d.a,{d:"flex",flexDirection:"column",p:"1"},r.a.createElement(d.a,{fontWeight:"bold"},t),a&&r.a.createElement(d.a,{fontSize:"sm"},a)))};function M(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){x.artist.fetchAlbums(8506054).then((function(e){var t;return i((null===(t=e.body)||void 0===t?void 0:t.data)||[])}))}),[]),r.a.createElement(L.a,null,r.a.createElement(T.a,null),r.a.createElement(d.a,{mb:"20",d:"flex",flexWrap:"wrap"},n.map((function(e){var t=e.id,n=e.cover_medium,a=e.title;return r.a.createElement(z,{key:t,title:a,src:n,onPlay:function(){return DZ.player.playAlbum(t)},m:"3"})}))),r.a.createElement(y,{position:"fixed",bottom:"0",left:"0",right:"0",p:"2",bg:"white"}))}z.defaultProps={onPlay:l.a};!function(e){var t=e.appId,n=e.channelUrl,a=e.onload,r=document.createElement("div");r.id="dz-root",document.body.appendChild(r);var i=document.createElement("script");i.src="https://e-cdns-files.dzcdn.net/js/min/dz.js",document.head.appendChild(i),window.dzAsyncInit=function(){DZ.init({appId:t,channelUrl:n,player:{onload:a}})}}({appId:"404684",channelUrl:window.location.href+"channel.html",onload:function(){c.a.render(r.a.createElement(M,null),document.getElementById("root"));var e=(new u).addCommand({trigger:"play",callback:DZ.player.play}).addCommand({trigger:"stop",callback:DZ.player.pause}).addCommand({trigger:"next",callback:DZ.player.next}).addCommand({trigger:"previous",callback:DZ.player.prev}).addCommand({trigger:"volume up",callback:function(){return DZ.player.setVolume(DZ.player.getVolume()+20)}}).addCommand({trigger:"volume down",callback:function(){return DZ.player.setVolume(DZ.player.getVolume()-20)}});e.addEventListener("result",(function(e){console.log(e)})),e.start()}})}},[[40,1,2]]]);
//# sourceMappingURL=main.4b630b9e.chunk.js.map