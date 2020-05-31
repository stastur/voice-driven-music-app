(this["webpackJsonpvoice-driven-music-app"]=this["webpackJsonpvoice-driven-music-app"]||[]).push([[0],{70:function(e,t,a){e.exports=a(90)},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),i=a.n(c),l=a(17),o=a(24),u=a(99),s=a(105),d=a(4),m=a(22),f=a(29),p=a(6),b=a(8),h=a(92),v=function e(){var t=this;Object(b.a)(this,e),this._recognition=void 0,this._commandsMap=new Map,this._eventListenersMap=new Map,this.setLanguage=function(e){return t._recognition.lang=e,t},this.setAlternatives=function(e){return t._recognition.maxAlternatives=e,t},this.setInterimResults=function(e){return t._recognition.interimResults=e,t},this.setContinuous=function(e){return t._recognition.continuous=e,t},this._initializeEventHandlers=function(){["speechstart","speechend","soundstart","soundend","nomatch","error","audiostart","audioend","result","start","end"].forEach((function(e){return t._recognition.addEventListener(e,(function(a){return t._getEventListener(e)(a)}))})),t._recognition.addEventListener("result",(function(e){var a=e.results[e.resultIndex],n=!0,r=!1,c=void 0;try{for(var i,l=a[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var o=i.value;t._getCommandCallback(o.transcript)()}}catch(u){r=!0,c=u}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}})),t._recognition.addEventListener("end",(function(){t.start()}))},this._getCommandCallback=function(e){var a=!0,n=!1,r=void 0;try{for(var c,i=function(){var t=Object(p.a)(c.value,2),a=t[0],n=t[1],r=new RegExp("^".concat(a)).exec(e);if(r)return{v:function(){return n(r.slice(1))}}},l=t._commandsMap.entries()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var o=i();if("object"===typeof o)return o.v}}catch(u){n=!0,r=u}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return h.a},this._getEventListener=function(e){return t._eventListenersMap.get(e)||h.a},this.addCommand=function(e){return t._commandsMap.set(e.trigger,e.callback),t},this.addCommands=function(e){return e.forEach(t.addCommand),t},this.addEventListener=function(e,a){t._eventListenersMap.set(e,a)},this.removeEventListener=function(e){t._eventListenersMap.delete(e)},this.start=function(){t._recognition.start()},this.abort=function(){t._recognition.abort()},this.stop=function(){t._recognition.stop()};var a=window.webkitSpeechRecognition;if(!a)throw new Error("Speech recognition is not supported by your browser");this._recognition=new a,this._recognition.maxAlternatives=5,this._recognition.lang="en-US",this._recognition.interimResults=!1,this._recognition.continuous=!1,this._initializeEventHandlers()},E={myTracks:"/my-tracks",genre:"/genre/:id",home:"/",artist:"/artist/:id"},y=function e(t){var a=this;Object(b.a)(this,e),this._history=t,this.scrollTo=function(e){var t=document.evaluate('//div[@id="root"]//*[contains(translate(text(), "ABCDEFGHIJKLMNOPURSTUWXYZ","abcdefghijklmnopurstuwxyz"),"'.concat(e.toLowerCase(),'")]'),document.body).iterateNext(),a=null===t||void 0===t?void 0:t.parentElement;a&&a.scrollIntoView({behavior:"smooth"})},this.goTo=function(e){Object.values(E).includes(e)&&a._history.push(e)},this.back=function(){a._history.goBack()},this.forward=function(){a._history.goForward()}},g=a(11),O=a.n(g),j=a(20),C=a(103),_=a(93),k=a(94),x=a(95),w=a(57),Z=a(18),S=a(15),H=a(14),D=a(16),U=a(53),M=function e(){var t=this;Object(b.a)(this,e),this._apiPath=void 0,this._request=function(e,t,a){return new Promise((function(n){var r=[e,t,a,function(e){var t=e.error?{error:e.error}:{body:e};n(t)}].filter(Object(U.negate)(U.isNil)),c=Object(U.curry)(DZ.api,r.length);try{r.reduce((function(e,t){return e(t)}),c)}catch(i){n({error:i})}}))},this._buildUrl=function(e){return e?"".concat(t._apiPath,"/").concat(e):t._apiPath}},V=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r))))._apiPath="track",a.fetchById=function(e){return a._request(a._buildUrl(e))},a}return Object(D.a)(t,e),t}(M),P=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r))))._apiPath="album",a.fetchById=function(e){return a._request(a._buildUrl(e))},a.fetchTracks=function(e){return a._request(a._buildUrl("".concat(e,"/tracks")))},a}return Object(D.a)(t,e),t}(M),L=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r))))._apiPath="radio",a.fetchById=function(e){return a._request(a._buildUrl(e))},a.fetchTopStations=function(){return a._request(a._buildUrl("top"))},a.fetchStations=function(){return a._request(a._buildUrl())},a.fetchTracks=function(e){return a._request(a._buildUrl("".concat(e,"/tracks")))},a}return Object(D.a)(t,e),t}(M),A=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r))))._apiPath="genre",a.fetchById=function(e){return a._request(a._buildUrl(e))},a.fetchGenres=function(){return a._request(a._buildUrl())},a}return Object(D.a)(t,e),t}(M),T=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r))))._apiPath="search",a.searchEverything=function(e){return a._request(a._buildUrl("track?q=".concat(e)))},a.searchTracks=function(e){return a._request(a._buildUrl("track?q=".concat(e)))},a}return Object(D.a)(t,e),t}(M),q=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r))))._apiPath="artist",a.fetchById=function(e){return a._request(a._buildUrl(e))},a.fetchAlbums=function(e){return a._request(a._buildUrl("".concat(e,"/albums")))},a.fetchRelatedArtists=function(e){return a._request(a._buildUrl("".concat(e,"/related")))},a.fetchTopTracks=function(e){return a._request(a._buildUrl("".concat(e,"/top")))},a.fetchAllTracks=function(){var e=Object(j.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchTopTracks(t);case 2:return n=e.sent.body,r=(null===n||void 0===n?void 0:n.total)||10,e.abrupt("return",a._request(a._buildUrl("".concat(t,"/top?limit=").concat(r))));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(D.a)(t,e),t}(M),I=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r))))._apiPath="chart",a.fetchById=function(e){return a._request(a._buildUrl(e))},a.fetchCharts=function(){return a._request(a._buildUrl())},a}return Object(D.a)(t,e),t}(M),z=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r))))._apiPath="user/me",a.fetchMe=function(){return a._request(a._buildUrl())},a.fetchTracks=function(){return a._request(a._buildUrl("tracks"))},a.addToFavorites=function(e){return a._request(a._buildUrl("tracks"),"POST",{track_id:e})},a.removeFromFavorites=function(e){return a._request(a._buildUrl("tracks"),"DELETE",{track_id:e})},a.isFavoriteTrack=function(){var e=Object(j.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchTracks();case 2:if(n=e.sent,r=n.body){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!!r.data.find((function(e){return e.id===t})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(D.a)(t,e),t}(M),R=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r))))._apiPath="editorial",a.fetchEditorials=function(){return a._request(a._buildUrl())},a.fetchReleases=function(e){return a._request(a._buildUrl("".concat(e||0,"/releases")))},a}return Object(D.a)(t,e),t}(M),F={track:new V,album:new P,radio:new L,genre:new A,search:new T,artist:new q,chart:new I,user:new z,editorial:new R},B=function(e){var t=e.trackId,a=Object(n.useState)(!1),c=Object(p.a)(a,2),i=c[0],l=c[1];Object(n.useEffect)((function(){(function(){var e=Object(j.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.user.isFavoriteTrack(t);case 2:a=e.sent,l(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var o=i?{onClick:function(){F.user.removeFromFavorites(t),l(!1)},title:"Remove from favorites",color:"red.500"}:{onClick:function(){F.user.addToFavorites(t),l(!0)},title:"Add to favorites",color:"gray.500",_hover:{color:"red.300"}};return r.a.createElement(d.a,{px:"2"},r.a.createElement(m.a,Object.assign({as:Z.e,cursor:"pointer"},o)))},W=function(e){var t=e.value;return r.a.createElement(d.a,{px:2,d:"flex",alignItems:"center"},r.a.createElement(d.a,{as:Z.i,paddingRight:"1"}),r.a.createElement(d.a,{d:"flex",alignItems:"center"},r.a.createElement(C.d,{width:"24",value:t,onChange:DZ.player.setVolume},r.a.createElement(C.c,null),r.a.createElement(C.a,null),r.a.createElement(C.b,null))))},G=function(e){var t=e.isPlaying;return r.a.createElement(d.a,null,r.a.createElement(_.a,{variant:"outline","aria-label":"previous track",icon:Z.a,onClick:DZ.player.prev}),r.a.createElement(_.a,{variant:"outline","aria-label":"play/pause track",icon:t?Z.g:Z.h,onClick:t?DZ.player.pause:DZ.player.play}),r.a.createElement(_.a,{variant:"outline","aria-label":"next track",icon:Z.d,onClick:DZ.player.next}))},N=function(e){var t,a=e.details;return r.a.createElement(d.a,{px:"2",flexGrow:1},r.a.createElement(d.a,{fontWeight:"bold",fontSize:"md"},null===a||void 0===a?void 0:a.title),r.a.createElement(d.a,{fontSize:"xs"},null===a||void 0===a||null===(t=a.artist)||void 0===t?void 0:t.name))},J=function(e){var t=e.position,a=e.duration,n=a?t/a*100:0;return r.a.createElement(C.d,{onChange:DZ.player.seek,value:n},r.a.createElement(C.c,null),r.a.createElement(C.a,null),r.a.createElement(C.b,null))},X=function(e){var t=e.tracks,a=e.active,c=Object(n.useState)(!1),i=Object(p.a)(c,2),l=i[0],o=i[1];return r.a.createElement(d.a,null,r.a.createElement(d.a,{position:"relative"},r.a.createElement(k.a,{backgroundColor:"white",position:"absolute",bottom:0,right:0,isOpen:l,width:"3xs",maxHeight:"lg",overflowY:"auto",borderWidth:"1px",shadow:"sm",rounded:"lg",p:3,mb:2},t.length?r.a.createElement(x.c,{height:"100%",width:"100%"},t.map((function(e){return r.a.createElement(x.b,{key:e.id,d:"flex",alignItems:"center"},a===e.id&&r.a.createElement(x.a,{icon:Z.f}),r.a.createElement(N,{key:e.id,details:e}))}))):"Queue is empty")),r.a.createElement(w.a,{onClick:function(){return o((function(e){return!e}))},size:"sm"},"Queue"))},Q=function(e){var t=Y(),a=t.track,c=t.volume,i=t.isPlaying,l=t.position,o=t.duration,u=t.queue,s=Object(n.useState)(!1),m=Object(p.a)(s,2),f=m[0],b=m[1];return DZ.getLoginStatus((function(e){var t=e.status;b("connected"===t)})),r.a.createElement(d.a,e,r.a.createElement(J,{position:l,duration:o}),r.a.createElement(d.a,{d:"flex",alignItems:"center"},r.a.createElement(G,{isPlaying:i}),r.a.createElement(N,{details:a}),a&&f&&r.a.createElement(B,{trackId:Number(a.id)}),r.a.createElement(W,{value:c}),r.a.createElement(X,{tracks:u,active:null===a||void 0===a?void 0:a.id})))},Y=function(){var e=Object(n.useState)(DZ.player.getTrackList()),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(DZ.player.getVolume()),i=Object(p.a)(c,2),l=i[0],o=i[1],u=Object(n.useState)(DZ.player.isPlaying()),s=Object(p.a)(u,2),d=s[0],m=s[1],f=Object(n.useState)(0),b=Object(p.a)(f,2),h=b[0],v=b[1],E=Object(n.useState)(0),y=Object(p.a)(E,2),g=y[0],O=y[1],j=Object(n.useState)(DZ.player.getCurrentTrack()),C=Object(p.a)(j,2),_=C[0],k=C[1];return Object(n.useEffect)((function(){DZ.Event.subscribe("volume_changed",o),DZ.Event.subscribe("current_track",(function(e){var t=e.track;return k(t)})),DZ.Event.subscribe("player_play",(function(){return m(!0)})),DZ.Event.subscribe("player_paused",(function(){return m(!1)})),DZ.Event.subscribe("player_position",(function(e){var t=Object(p.a)(e,2),a=t[0],n=t[1];v(a),O(n)})),DZ.Event.subscribe("tracklist_changed",(function(){return r(DZ.player.getTrackList())}))}),[]),{track:_,volume:l,isPlaying:d,position:h,duration:g,queue:a}},K=a(96),$=a(100),ee=a(104),te=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){DZ.getLoginStatus(function(){var e=Object(j.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.authResponse){e.next=6;break}return e.next=3,F.user.fetchMe();case 3:return a=e.sent,n=a.body,e.abrupt("return",n&&c(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),!!a?r.a.createElement(K.a,{justify:"center"},r.a.createElement($.f,null,r.a.createElement($.a,null,r.a.createElement(ee.a,{size:"sm",src:null===a||void 0===a?void 0:a.picture_small,name:"".concat(null===a||void 0===a?void 0:a.firstname," ").concat(null===a||void 0===a?void 0:a.lastname)})),r.a.createElement($.e,null,r.a.createElement($.c,{title:"Profile"},r.a.createElement($.d,null,r.a.createElement(o.b,{to:E.myTracks},"My Tracks"))),r.a.createElement($.b,null),r.a.createElement($.c,null,r.a.createElement($.d,{onClick:function(){DZ.logout(),c(null)}},"Sign out"))))):r.a.createElement(d.a,null,r.a.createElement(w.a,{onClick:function(){return DZ.login(function(){var e=Object(j.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.authResponse){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,F.user.fetchMe();case 4:return a=e.sent,n=a.body,e.abrupt("return",n&&c(n));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log in"))},ae=a(64);function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ce=r.a.createElement("path",{d:"M335.461 94.9999C324.691 94.9999 315.831 88.5099 315.671 77.1099H366.671C367.339 74.0958 367.675 71.0173 367.671 67.93C367.671 47.34 353.581 34.2 332.841 34.2C310.671 34.2 295.471 51.4599 295.471 72.8299C295.471 96.5799 311.941 112.42 335.211 112.42C352.791 112.42 364.981 103.55 370.211 88.98L352.881 82.21C350.501 90.73 344.641 94.9999 335.461 94.9999ZM332.771 50.51C341.771 50.51 347.971 55.42 347.971 63.02L347.811 63.65H315.671C317.571 55.42 324.541 50.51 332.771 50.51Z",fill:"white"}),ie=r.a.createElement("path",{d:"M437.73 52.41V35.78H372.34V53.2H412.24L371.07 93.42V110.83H438.84V92.62H396.4L437.73 52.41Z",fill:"white"}),le=r.a.createElement("path",{d:"M559.86 60.01C559.866 61.2709 559.782 62.5307 559.61 63.78H578.82C579.287 61.338 579.511 58.856 579.49 56.37C579.49 43.54 571.42 34.2 557.96 34.2C549.25 34.2 543.08 38.4799 539.91 45.4399V35.79H519.65V110.79H539.91V62.54C539.91 54.94 544.03 50.67 550.36 50.67C556.06 50.67 559.86 54.47 559.86 60.01Z",fill:"white"}),oe=r.a.createElement("path",{d:"M194.999 47.03C190.399 39.27 181.849 34.2 171.249 34.2C150.659 34.2 135.619 50.04 135.619 73.63C135.619 96.9 150.509 112.42 171.719 112.42C182.329 112.42 190.879 107.82 195.789 100.07V110.83H215.259V0H194.999V47.03ZM175.829 95.21C164.589 95.21 155.829 86.98 155.829 73.68C155.829 60.22 164.539 51.68 175.829 51.68C186.749 51.68 195.779 60.23 195.779 73.68C195.779 86.93 186.749 95.21 175.829 95.21Z",fill:"white"}),ue=r.a.createElement("path",{d:"M479.81 94.9999C469.04 94.9999 460.18 88.5099 460.02 77.1099H511.02C511.689 74.0958 512.024 71.0173 512.02 67.93C512.02 47.34 497.93 34.2 477.19 34.2C455.02 34.2 439.82 51.4599 439.82 72.8299C439.82 96.5799 456.29 112.42 479.56 112.42C497.14 112.42 509.33 103.55 514.56 88.98L497.22 82.21C494.85 90.73 489 94.9999 479.81 94.9999ZM477.12 50.51C486.12 50.51 492.32 55.42 492.32 63.02L492.16 63.65H460C461.92 55.42 468.88 50.51 477.12 50.51Z",fill:"white"}),se=r.a.createElement("path",{d:"M260.63 94.9999C249.86 94.9999 241 88.5099 240.84 77.1099H291.84C292.497 74.0947 292.815 71.0157 292.79 67.93C292.79 47.34 278.7 34.2 257.96 34.2C235.79 34.2 220.59 51.4599 220.59 72.8299C220.59 96.5799 237.06 112.42 260.33 112.42C277.91 112.42 290.1 103.55 295.33 88.98L278.05 82.21C275.67 90.73 269.81 94.9999 260.63 94.9999ZM257.94 50.51C266.94 50.51 273.14 55.42 273.14 63.02L272.98 63.65H240.84C242.74 55.42 249.71 50.51 257.94 50.51Z",fill:"white"}),de=r.a.createElement("path",{d:"M115.35 35.73H90.5195V50.22H115.35V35.73Z",fill:"#29AB70"}),me=r.a.createElement("path",{d:"M115.35 55.9099H90.5195V70.3999H115.35V55.9099Z",fill:"url(#paint0_linear)"}),fe=r.a.createElement("path",{d:"M115.35 76.08H90.5195V90.57H115.35V76.08Z",fill:"url(#paint1_linear)"}),pe=r.a.createElement("path",{d:"M25.3398 96.26H0.509766V110.75H25.3398V96.26Z",fill:"url(#paint2_linear)"}),be=r.a.createElement("path",{d:"M55.3398 96.26H30.5098V110.75H55.3398V96.26Z",fill:"url(#paint3_linear)"}),he=r.a.createElement("path",{d:"M85.3495 96.26H60.5195V110.75H85.3495V96.26Z",fill:"url(#paint4_linear)"}),ve=r.a.createElement("path",{d:"M115.35 96.26H90.5195V110.75H115.35V96.26Z",fill:"url(#paint5_linear)"}),Ee=r.a.createElement("path",{d:"M85.3495 76.08H60.5195V90.57H85.3495V76.08Z",fill:"url(#paint6_linear)"}),ye=r.a.createElement("path",{d:"M55.3398 76.08H30.5098V90.57H55.3398V76.08Z",fill:"url(#paint7_linear)"}),ge=r.a.createElement("path",{d:"M55.3398 55.9099H30.5098V70.3999H55.3398V55.9099Z",fill:"url(#paint8_linear)"}),Oe=r.a.createElement("path",{d:"M335.461 94.9999C324.691 94.9999 315.831 88.5099 315.671 77.1099H366.671C367.339 74.0958 367.675 71.0173 367.671 67.93C367.671 47.34 353.581 34.2 332.841 34.2C310.671 34.2 295.471 51.4599 295.471 72.8299C295.471 96.5799 311.941 112.42 335.211 112.42C352.791 112.42 364.981 103.55 370.211 88.98L352.881 82.21C350.501 90.73 344.641 94.9999 335.461 94.9999ZM332.771 50.51C341.771 50.51 347.971 55.42 347.971 63.02L347.811 63.65H315.671C317.571 55.42 324.541 50.51 332.771 50.51Z",fill:"black"}),je=r.a.createElement("path",{d:"M437.73 52.41V35.78H372.34V53.2H412.24L371.07 93.42V110.83H438.84V92.62H396.4L437.73 52.41Z",fill:"black"}),Ce=r.a.createElement("path",{d:"M559.86 60.01C559.866 61.2709 559.782 62.5307 559.61 63.78H578.82C579.287 61.338 579.511 58.856 579.49 56.37C579.49 43.54 571.42 34.2 557.96 34.2C549.25 34.2 543.08 38.4799 539.91 45.4399V35.79H519.65V110.79H539.91V62.54C539.91 54.94 544.03 50.67 550.36 50.67C556.06 50.67 559.86 54.47 559.86 60.01Z",fill:"black"}),_e=r.a.createElement("path",{d:"M194.999 47.03C190.399 39.27 181.849 34.2 171.249 34.2C150.659 34.2 135.619 50.04 135.619 73.63C135.619 96.9 150.509 112.42 171.719 112.42C182.329 112.42 190.879 107.82 195.789 100.07V110.83H215.259V0H194.999V47.03ZM175.829 95.21C164.589 95.21 155.829 86.98 155.829 73.68C155.829 60.22 164.539 51.68 175.829 51.68C186.749 51.68 195.779 60.23 195.779 73.68C195.779 86.93 186.749 95.21 175.829 95.21Z",fill:"black"}),ke=r.a.createElement("path",{d:"M479.81 94.9999C469.04 94.9999 460.18 88.5099 460.02 77.1099H511.02C511.689 74.0958 512.024 71.0173 512.02 67.93C512.02 47.34 497.93 34.2 477.19 34.2C455.02 34.2 439.82 51.4599 439.82 72.8299C439.82 96.5799 456.29 112.42 479.56 112.42C497.14 112.42 509.33 103.55 514.56 88.98L497.22 82.21C494.85 90.73 489 94.9999 479.81 94.9999ZM477.12 50.51C486.12 50.51 492.32 55.42 492.32 63.02L492.16 63.65H460C461.92 55.42 468.88 50.51 477.12 50.51Z",fill:"black"}),xe=r.a.createElement("path",{d:"M260.63 94.9999C249.86 94.9999 241 88.5099 240.84 77.1099H291.84C292.497 74.0947 292.815 71.0157 292.79 67.93C292.79 47.34 278.7 34.2 257.96 34.2C235.79 34.2 220.59 51.4599 220.59 72.8299C220.59 96.5799 237.06 112.42 260.33 112.42C277.91 112.42 290.1 103.55 295.33 88.98L278.05 82.21C275.67 90.73 269.81 94.9999 260.63 94.9999ZM257.94 50.51C266.94 50.51 273.14 55.42 273.14 63.02L272.98 63.65H240.84C242.74 55.42 249.71 50.51 257.94 50.51Z",fill:"black"}),we=r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"paint0_linear",x1:104.55,y1:72.2999,x2:101.32,y2:53.9999,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#2C8C9D"}),r.a.createElement("stop",{offset:.04,stopColor:"#298E9A"}),r.a.createElement("stop",{offset:.39,stopColor:"#129C83"}),r.a.createElement("stop",{offset:.72,stopColor:"#05A475"}),r.a.createElement("stop",{offset:1,stopColor:"#00A770"})),r.a.createElement("linearGradient",{id:"paint1_linear",x1:90.1495,y1:89.84,x2:115.72,y2:76.81,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#2839BA"}),r.a.createElement("stop",{offset:1,stopColor:"#148CB3"})),r.a.createElement("linearGradient",{id:"paint2_linear",x1:.509766,y1:103.5,x2:25.3398,y2:103.5,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#F6A500"}),r.a.createElement("stop",{offset:1,stopColor:"#F29100"})),r.a.createElement("linearGradient",{id:"paint3_linear",x1:30.5098,y1:103.5,x2:55.3398,y2:103.5,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#F29100"}),r.a.createElement("stop",{offset:1,stopColor:"#D12F5F"})),r.a.createElement("linearGradient",{id:"paint4_linear",x1:60.5195,y1:103.5,x2:85.3495,y2:103.5,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#B4197C"}),r.a.createElement("stop",{offset:1,stopColor:"#472EAD"})),r.a.createElement("linearGradient",{id:"paint5_linear",x1:90.5195,y1:103.5,x2:115.35,y2:103.5,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#2839BA"}),r.a.createElement("stop",{offset:1,stopColor:"#3072B7"})),r.a.createElement("linearGradient",{id:"paint6_linear",x1:59.5395,y1:87.24,x2:86.3195,y2:79.41,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#B4197C"}),r.a.createElement("stop",{offset:1,stopColor:"#373AAC"})),r.a.createElement("linearGradient",{id:"paint7_linear",x1:29.6398,y1:78.49,x2:56.2198,y2:88.16,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#FFCB00"}),r.a.createElement("stop",{offset:1,stopColor:"#D12F5F"})),r.a.createElement("linearGradient",{id:"paint8_linear",x1:32.6098,y1:53.6299,x2:53.2398,y2:72.6699,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#FFCF00"}),r.a.createElement("stop",{offset:1,stopColor:"#ED743B"}))),Ze=function(e){var t=e.svgRef,a=e.title,n=re(e,["svgRef","title"]);return r.a.createElement("svg",ne({width:580,height:113,viewBox:"0 0 580 113",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,ce,ie,le,oe,ue,se,de,me,fe,pe,be,he,ve,Ee,ye,ge,Oe,je,Ce,_e,ke,xe,we)},Se=r.a.forwardRef((function(e,t){return r.a.createElement(Ze,ne({svgRef:t},e))})),He=(a.p,function(e){var t=e.children;return r.a.createElement(K.a,{as:"header",justify:"space-between",p:"2"},r.a.createElement(K.a,{align:"center"},t),r.a.createElement(K.a,{align:"baseline"},r.a.createElement(ae.a,{as:"span",fontWeight:"bold",pr:"2"},"Powered by"),r.a.createElement(d.a,{as:Se,height:"4",width:"auto"})))}),De=a(68),Ue=a(102),Me=a(97),Ve=a(52),Pe=a(65),Le=function(e){var t=e.title,a=e.onPlay,n=e.description,c=e.src,i=Object(Ve.a)(e,["title","onPlay","description","src"]);return r.a.createElement(d.a,Object.assign({},i,{w:"3xs",borderWidth:"1px",rounded:"lg",overflow:"hidden",boxShadow:"sm"}),r.a.createElement(d.a,{position:"relative"},a&&r.a.createElement(_.a,{onClick:a,"aria-label":"play ".concat(t),icon:Z.h,isRound:!0,m:"2",size:"sm",bottom:"0",position:"absolute"}),r.a.createElement(Pe.a,{src:c,alt:t})),r.a.createElement(d.a,{d:"flex",flexDirection:"column",p:"1"},r.a.createElement(d.a,{fontWeight:"bold"},t),n&&r.a.createElement(d.a,{fontSize:"sm"},n)))},Ae=function(e){var t=e.children,a=e.label,c=Object(Ve.a)(e,["children","label"]),i=Object(n.useRef)(null),l=Object(n.useRef)(null),o=Object(n.useState)(0),u=Object(p.a)(o,2),s=u[0],m=u[1],f=Object(n.useState)(0),b=Object(p.a)(f,2),h=b[0],v=b[1],E=Object(n.useState)(0),y=Object(p.a)(E,2),g=y[0],O=y[1],j=Object(n.useState)(0),C=Object(p.a)(j,2),k=C[0],x=C[1],w=r.a.Children.count(t);Object(n.useEffect)((function(){var e=function(){return O(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useLayoutEffect)((function(){var e,t,a,n,r=null!==(e=null===(t=l.current)||void 0===t?void 0:t.clientWidth)&&void 0!==e?e:0,c=null!==(a=null===(n=i.current)||void 0===n?void 0:n.clientWidth)&&void 0!==a?a:0,o=w&&c/w,u=o&&Math.ceil(w-r/o)+1;m(o),x(u>0?u:0)}),[w,g]);var S=Object(n.useCallback)((function(){return v((function(e){return(e-1+k)%k}))}),[k]),H=Object(n.useCallback)((function(){return v((function(e){return(e+1)%k}))}),[k]);return r.a.createElement(d.a,Object.assign({},c,{width:"100%",position:"relative"}),r.a.createElement(Me.a,{pl:3},a),!!k&&r.a.createElement(_.a,{size:"lg",isRound:!0,position:"absolute",zIndex:1,left:"0",top:"50%",bottom:"50%","aria-label":"".concat(a," section forward"),icon:Z.b,onClick:S}),r.a.createElement(d.a,{ref:l,overflowX:"hidden"},r.a.createElement(K.a,{ref:i,width:"max-content",transform:"translateX(-".concat(s*h,"px)"),transition:"transform .3s ease"},t)),!!k&&r.a.createElement(_.a,{size:"lg",isRound:!0,position:"absolute",zIndex:1,right:"0",top:"50%",bottom:"50%","aria-label":"".concat(a," section forward"),icon:Z.c,onClick:H}))},Te=a(30),qe=a(98),Ie=function(e,t){return[t].concat(Object(Te.a)(Object(qe.a)(e,t)))},ze=function(e){var t=e.title,a=e.duration,n=e.artist,c=e.liked,i=e.onPlay;return r.a.createElement(K.a,{align:"center",justify:"space-between",borderWidth:"1px",flexGrow:1,p:2},r.a.createElement(K.a,{align:"center",justify:"center"},r.a.createElement(_.a,{variant:"outline",icon:Z.h,"aria-label":"play ".concat(t," by ").concat(n),onClick:i,mr:3}),r.a.createElement(d.a,null,r.a.createElement(d.a,{fontWeight:"bold",fontSize:"md"},t),r.a.createElement(d.a,{fontSize:"sm"},n))),r.a.createElement(K.a,{align:"center"},c&&r.a.createElement(d.a,{mr:"3",color:"red.500",as:Z.e}),r.a.createElement(d.a,null,function(e){var t=Math.floor(e/60),a="".concat(e%60).padStart(2,"0");return"".concat(t,":").concat(a)}(a))))};ze.defaultProps={liked:!1,onPlay:h.a};var Re=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),l=Object(p.a)(i,2),u=l[0],s=l[1],m=Object(n.useState)([]),f=Object(p.a)(m,2),b=f[0],h=f[1],v=Object(n.useState)([]),E=Object(p.a)(v,2),y=E[0],g=E[1],C=Object(n.useState)(!0),_=Object(p.a)(C,2),k=_[0],x=_[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(O.a.mark((function e(){var t,a,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,F.chart.fetchCharts();case 3:return t=e.sent.body,e.next=6,F.radio.fetchTopStations();case 6:return a=e.sent.body,e.next=9,F.editorial.fetchReleases();case 9:return n=e.sent.body,e.next=12,F.editorial.fetchEditorials();case 12:r=e.sent.body,g((null===r||void 0===r?void 0:r.data)||[]),s((null===a||void 0===a?void 0:a.data)||[]),c((null===n||void 0===n?void 0:n.data)||[]),h((null===t||void 0===t?void 0:t.tracks.data)||[]),x(!1);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),k?r.a.createElement(K.a,{justify:"center",w:"100%"},r.a.createElement(De.a,{size:"xl"})):r.a.createElement(d.a,{d:"flex",flexWrap:"wrap"},r.a.createElement(Ae,{mb:3,label:"Top stations"},u.map((function(e){var t=e.id,a=e.picture_medium,n=e.title;return r.a.createElement(Le,{key:t,title:n,src:a,onPlay:function(){return DZ.player.playRadio(t)},m:"3"})}))),r.a.createElement(Ae,{label:"Latest releases"},a.map((function(e){var t=e.id,a=e.artist,n=e.title,c=e.cover_medium;return r.a.createElement(Le,{key:t,title:n,description:a.name,src:c,onPlay:function(){return DZ.player.playAlbum(t)},m:"3"})}))),r.a.createElement(Ue.a,{width:"100%",columns:[1,2],spacing:8,px:3},b.map((function(e){var t=e.title,a=e.artist,n=e.duration,c=e.id;return r.a.createElement(ze,{key:c,onPlay:function(){return DZ.player.playTracks(Ie(b.map((function(e){return e.id})),c).map(String))},title:t,duration:n,artist:a.name})}))),r.a.createElement(d.a,null,r.a.createElement(Me.a,{p:3},"Music by genre"),r.a.createElement(K.a,{justify:{xs:"center",md:"space-between"},flexWrap:"wrap",width:"100%",px:3},y.filter((function(e){return 0!==e.id})).map((function(e){var t=e.name,a=e.id,n=e.picture_medium;return r.a.createElement(o.b,{key:a,to:"/genre/".concat(a)},r.a.createElement(Le,{mb:3,title:t,src:n}))})))))},Fe=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(),l=Object(p.a)(i,2),u=l[0],s=l[1],m=Object(n.useState)(!0),b=Object(p.a)(m,2),h=b[0],v=b[1],E=Object(f.g)().id;return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,F.chart.fetchById(E);case 3:return t=e.sent.body,e.next=6,F.genre.fetchById(E);case 6:(a=e.sent.body)&&s(a),t&&c(t),v(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[E]),h?r.a.createElement(K.a,{justify:"center",w:"100%"},r.a.createElement(De.a,{size:"xl"})):r.a.createElement(d.a,null,(null===u||void 0===u?void 0:u.name)&&r.a.createElement(K.a,{pl:3,align:"center"},r.a.createElement(d.a,{as:Z.f,size:8}),r.a.createElement(Me.a,{pl:3},u.name)),r.a.createElement(Ae,{label:"Artists"},null===a||void 0===a?void 0:a.artists.data.map((function(e){var t=e.id,a=e.name,n=e.picture_medium;return r.a.createElement(o.b,{key:t,to:"/artist/".concat(t)},r.a.createElement(Le,{m:3,src:n,title:a}))}))),r.a.createElement(Ae,{label:"Albums"},null===a||void 0===a?void 0:a.albums.data.map((function(e){var t=e.id,a=e.title,n=e.cover_medium,c=e.artist;return r.a.createElement(Le,{m:3,key:t,src:n,title:a,description:c.name,onPlay:function(){return DZ.player.playAlbum(t)}})}))),r.a.createElement(Ae,{label:"Playlists"},null===a||void 0===a?void 0:a.playlists.data.map((function(e){var t=e.id,a=e.title,n=e.picture_medium;return r.a.createElement(Le,{m:3,key:t,src:n,title:a,onPlay:function(){return DZ.player.playPlaylist(t)}})}))),r.a.createElement(Me.a,{pl:3},"Popular tracks"),r.a.createElement(Ue.a,{columns:{xs:1,sm:2},spacing:3,px:3},null===a||void 0===a?void 0:a.tracks.data.map((function(e,t,a){var n=e.id,c=e.title,i=e.duration,l=e.artist;return r.a.createElement(ze,{key:n,title:c,duration:i,artist:l.name,onPlay:function(){return Ie(a.map((function(e){return e.id})),n).map(String)}})}))))},Be=a(101),We=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),l=Object(p.a)(i,2),u=l[0],s=l[1],b=Object(n.useState)([]),h=Object(p.a)(b,2),v=h[0],E=h[1],y=Object(n.useState)([]),g=Object(p.a)(y,2),C=g[0],_=g[1],k=Object(n.useState)(!0),x=Object(p.a)(k,2),w=x[0],Z=x[1],S=Object(f.g)().id;return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(O.a.mark((function e(){var t,a,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.next=3,F.artist.fetchById(S);case 3:return t=e.sent.body,e.next=6,F.artist.fetchAlbums(S);case 6:return a=e.sent.body,e.next=9,F.artist.fetchRelatedArtists(S);case 9:return n=e.sent.body,e.next=12,F.artist.fetchTopTracks(S);case 12:r=e.sent.body,n&&s(n.data),a&&E(a.data),t&&c(t),_((null===r||void 0===r?void 0:r.data)||[]),Z(!1);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[S]),w?r.a.createElement(K.a,{justify:"center",w:"100%"},r.a.createElement(De.a,{size:"xl"})):r.a.createElement(d.a,null,r.a.createElement(K.a,{mx:3},r.a.createElement(Pe.a,{size:"2xs",alt:null===a||void 0===a?void 0:a.name,src:null===a||void 0===a?void 0:a.picture_big}),r.a.createElement(d.a,{ml:3},r.a.createElement(ae.a,{textTransform:"uppercase"},"Artist"),r.a.createElement(Me.a,null,null===a||void 0===a?void 0:a.name),r.a.createElement(d.a,null,r.a.createElement(ae.a,{as:"span",fontWeight:"semibold",pr:1},"Related artists:"),Object(Be.a)(u,3).map((function(e,t,a){var n=e.id,c=e.name;return r.a.createElement(r.a.Fragment,{key:n},r.a.createElement(m.a,{as:"span",_hover:{textDecoration:"underline"}},r.a.createElement(o.b,{to:"/artist/".concat(n)},c)),t!==a.length-1&&r.a.createElement(ae.a,{as:"span"},", "))}))))),r.a.createElement(d.a,{m:3},r.a.createElement(Me.a,{mb:3},"Top tracks"),C.map((function(e){var t=e.id,a=e.title,n=e.artist,c=e.duration;return r.a.createElement(ze,{key:t,title:a,artist:n.name,duration:c,onPlay:function(){return DZ.player.playTracks(Ie(C.map((function(e){return e.id})),t).map(String))}})}))),r.a.createElement(Ae,{label:"Albums"},null===v||void 0===v?void 0:v.map((function(e){var t=e.id,a=e.title,n=e.cover_medium;return r.a.createElement(Le,{m:3,key:t,title:a,src:n,onPlay:function(){return DZ.player.playAlbum(t)}})}))),r.a.createElement(Ae,{label:"Related artists"},null===u||void 0===u?void 0:u.map((function(e){var t=e.id,a=e.name,n=e.picture_medium;return r.a.createElement(o.b,{key:t,to:"/artist/".concat(t)},r.a.createElement(Le,{m:3,title:a,src:n}))}))))},Ge=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.user.fetchTracks();case 2:if(e.t1=t=e.sent.body,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===t;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=t.data;case 11:(a=e.t2)&&c(a);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement(d.a,{mx:3},a.map((function(e){var t=e.title,n=e.duration,c=e.artist,i=e.id;return r.a.createElement(ze,{title:t,duration:n,artist:c.name,onPlay:function(){return DZ.player.playTracks(Ie(a.map((function(e){return e.id})),i).map(String))}})})))};function Ne(){var e=Object(u.a)(),t=Object(f.f)();return Object(n.useEffect)((function(){var a=new y(t),n=(new v).addCommand({trigger:"play",callback:DZ.player.play}).addCommand({trigger:"stop",callback:DZ.player.pause}).addCommand({trigger:"next",callback:DZ.player.next}).addCommand({trigger:"previous",callback:DZ.player.prev}).addCommand({trigger:"volume up",callback:function(){return DZ.player.setVolume(DZ.player.getVolume()+20)}}).addCommand({trigger:"volume down",callback:function(){return DZ.player.setVolume(DZ.player.getVolume()-20)}}).addCommand({trigger:"go to (.+)",callback:function(e){a.scrollTo(e[0])}});n.addEventListener("result",(function(t){var a=t,n=Array.from(a.results[a.resultIndex]).map((function(e){return e.transcript}));e({position:"top-right",title:"Recognized:",description:n.join(" | ")})})),n.start()}),[e,t]),r.a.createElement(n.Fragment,null,r.a.createElement(s.a,null),r.a.createElement(d.a,null,r.a.createElement(He,null,r.a.createElement(te,null),r.a.createElement(m.a,{pl:3,_hover:{textDecoration:"underline"}},r.a.createElement(o.b,{to:E.home},"Home"))),r.a.createElement(d.a,{mb:"20",as:"main"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:E.home},r.a.createElement(Re,null)),r.a.createElement(f.a,{exact:!0,path:E.genre},r.a.createElement(Fe,null)),r.a.createElement(f.a,{exact:!0,path:E.artist},r.a.createElement(We,null)),r.a.createElement(f.a,{exact:!0,path:E.myTracks},r.a.createElement(Ge,null)))),r.a.createElement(Q,{p:"2",bg:"white",position:"fixed",left:"0",right:"0",bottom:"0",zIndex:10})))}!function(e){var t=e.appId,a=e.channelUrl,n=e.onload,r=document.createElement("div");r.id="dz-root",document.body.appendChild(r);var c=document.createElement("script");c.src="https://e-cdns-files.dzcdn.net/js/min/dz.js",document.head.appendChild(c),window.dzAsyncInit=function(){DZ.init({appId:t,channelUrl:a,player:{onload:n}})}}({appId:"414462",channelUrl:window.location.href+"channel.html",onload:function(){i.a.render(r.a.createElement(o.a,{basename:"/voice-driven-music-app"},r.a.createElement(l.a,null,r.a.createElement(Ne,null))),document.getElementById("root"))}})}},[[70,1,2]]]);
//# sourceMappingURL=main.7d16f2cc.chunk.js.map