(this["webpackJsonpvoice-driven-music-app"]=this["webpackJsonpvoice-driven-music-app"]||[]).push([[0],{55:function(e,t,n){e.exports=n(72)},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(33),l=n.n(i),c=n(18),o=n(10),s=n(4),u=n(81),d=n(80),p=n(21),f=function(e){var t=e.value;return r.a.createElement(s.a,{d:"flex",alignItems:"center"},r.a.createElement(s.a,{as:p.g,paddingRight:"1"}),r.a.createElement(s.a,{d:"flex",alignItems:"center"},r.a.createElement(u.d,{width:"24",value:t,onChange:DZ.player.setVolume},r.a.createElement(u.c,null),r.a.createElement(u.a,null),r.a.createElement(u.b,null))))},m=function(e){var t=e.isPlaying;return r.a.createElement(s.a,null,r.a.createElement(d.a,{variant:"outline","aria-label":"previous track",icon:p.a,onClick:DZ.player.prev}),r.a.createElement(d.a,{variant:"outline","aria-label":"play/pause track",icon:t?p.e:p.f,onClick:t?DZ.player.pause:DZ.player.play}),r.a.createElement(d.a,{variant:"outline","aria-label":"next track",icon:p.d,onClick:DZ.player.next}))},h=function(e){var t,n=e.details;return r.a.createElement(s.a,{px:"2",flexGrow:1},r.a.createElement(s.a,{fontWeight:"bold",fontSize:"md"},null===n||void 0===n?void 0:n.title),r.a.createElement(s.a,{fontSize:"xs"},null===n||void 0===n||null===(t=n.artist)||void 0===t?void 0:t.name))},b=function(e){var t=e.position,n=e.duration,a=n?t/n*100:0;return r.a.createElement(u.d,{onChange:DZ.player.seek,value:a},r.a.createElement(u.c,null),r.a.createElement(u.a,null),r.a.createElement(u.b,null))},E=function(e){var t=C(),n=t.track,i=t.volume,l=t.isPlaying,c=t.position,o=t.duration;return Object(a.useEffect)((function(){DZ.player.playAlbum(7102365,!1)}),[]),r.a.createElement(s.a,e,r.a.createElement(b,{position:c,duration:o}),r.a.createElement(s.a,{d:"flex",alignItems:"center"},r.a.createElement(m,{isPlaying:l}),r.a.createElement(h,{details:n}),r.a.createElement(f,{value:i})))},C=function(){var e=Object(a.useState)(DZ.player.getVolume()),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(DZ.player.isPlaying()),l=Object(o.a)(i,2),c=l[0],s=l[1],u=Object(a.useState)(0),d=Object(o.a)(u,2),p=d[0],f=d[1],m=Object(a.useState)(0),h=Object(o.a)(m,2),b=h[0],E=h[1],C=Object(a.useState)(DZ.player.getCurrentTrack()),v=Object(o.a)(C,2),g=v[0],y=v[1];return Object(a.useLayoutEffect)((function(){DZ.Event.subscribe("volume_changed",r),DZ.Event.subscribe("current_track",(function(e){var t=e.track;return y(t)})),DZ.Event.subscribe("player_play",(function(){return s(!0)})),DZ.Event.subscribe("player_paused",(function(){return s(!1)})),DZ.Event.subscribe("player_position",(function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];f(n),E(a)}))}),[]),{track:g,volume:n,isPlaying:c,position:p,duration:b}},v=n(12),g=n(11),y=n(13),_=n(8),O=n(45),j=function e(){var t=this;Object(_.a)(this,e),this._apiPath=void 0,this._request=function(e,t,n){return new Promise((function(a){var r=[e,t,n,function(e){var t=e.error?{error:e.error}:{body:e};a(t)}].filter(Object(O.negate)(O.isNil)),i=Object(O.curry)(DZ.api,r.length);try{r.reduce((function(e,t){return e(t)}),i)}catch(l){a({error:l})}}))},this._buildUrl=function(e){return e?"".concat(t._apiPath,"/").concat(e):t._apiPath}},w=function(e){function t(){var e,n;Object(_.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r))))._apiPath="track",n.fetchById=function(e){return n._request(n._buildUrl(e))},n}return Object(y.a)(t,e),t}(j),Z=function(e){function t(){var e,n;Object(_.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r))))._apiPath="album",n.fetchById=function(e){return n._request(n._buildUrl(e))},n.fetchTracks=function(e){return n._request(n._buildUrl("".concat(e,"/tracks")))},n}return Object(y.a)(t,e),t}(j),H=function(e){function t(){var e,n;Object(_.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r))))._apiPath="radio",n.fetchById=function(e){return n._request(n._buildUrl(e))},n.fetchStations=function(){return n._request(n._buildUrl())},n.fetchTracks=function(e){return n._request(n._buildUrl("".concat(e,"/tracks")))},n}return Object(y.a)(t,e),t}(j),x=function(e){function t(){var e,n;Object(_.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r))))._apiPath="genre",n.fetchById=function(e){return n._request(n._buildUrl(e))},n.fetchGenres=function(){return n._request(n._buildUrl())},n}return Object(y.a)(t,e),t}(j),k=function(e){function t(){var e,n;Object(_.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r))))._apiPath="search",n.searchEverything=function(e){return n._request(n._buildUrl("track?q=".concat(e)))},n.searchTracks=function(e){return n._request(n._buildUrl("track?q=".concat(e)))},n}return Object(y.a)(t,e),t}(j),V=function(e){function t(){var e,n;Object(_.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r))))._apiPath="artist",n.fetchById=function(e){return n._request(n._buildUrl(e))},n.fetchAlbums=function(e){return n._request(n._buildUrl("".concat(e,"/albums")))},n.fetchRelatedArtists=function(e){return n._request(n._buildUrl("".concat(e,"/related")))},n}return Object(y.a)(t,e),t}(j),M={track:new w,album:new Z,radio:new H,genre:new x,search:new k,artist:new V},L=n(79),U=n(82),D=n(52),S=n(27),A=n(74),P=function e(){var t=this;Object(_.a)(this,e),this._recognition=void 0,this._commandsMap=new Map,this._eventListenersMap=new Map,this.setLanguage=function(e){return t._recognition.lang=e,t},this.setAlternatives=function(e){return t._recognition.maxAlternatives=e,t},this.setInterimResults=function(e){return t._recognition.interimResults=e,t},this.setContinuous=function(e){return t._recognition.continuous=e,t},this._initializeEventHandlers=function(){["speechstart","speechend","soundstart","soundend","nomatch","error","audiostart","audioend","result","start","end"].forEach((function(e){return t._recognition.addEventListener(e,(function(n){return t._getEventListener(e)(n)}))})),t._recognition.addEventListener("result",(function(e){var n=e.results[e.resultIndex],a=!0,r=!1,i=void 0;try{for(var l,c=n[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var o=l.value;t._getCommandCallback(o.transcript)()}}catch(s){r=!0,i=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}})),t._recognition.addEventListener("end",(function(){t.start()}))},this._getCommandCallback=function(e){return t._commandsMap.get(e.toLocaleLowerCase(t._recognition.lang))||A.a},this._getEventListener=function(e){return t._eventListenersMap.get(e)||A.a},this.addCommand=function(e){return t._commandsMap.set(e.trigger.toLocaleLowerCase(t._recognition.lang),e.callback),t},this.addCommands=function(e){return e.forEach(t.addCommand),t},this.addEventListener=function(e,n){t._eventListenersMap.set(e,n)},this.removeEventListener=function(e){t._eventListenersMap.delete(e)},this.start=function(){t._recognition.start()},this.abort=function(){t._recognition.abort()},this.stop=function(){t._recognition.stop()};var n=window.webkitSpeechRecognition;if(!n)throw new Error("Speech recognition is not supported by your browser");this._recognition=new n,this._recognition.maxAlternatives=5,this._recognition.lang="en-US",this._recognition.interimResults=!1,this._recognition.continuous=!1,this._initializeEventHandlers()},I=n(75),z=n(76);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var R=r.a.createElement("path",{d:"M335.461 94.9999C324.691 94.9999 315.831 88.5099 315.671 77.1099H366.671C367.339 74.0958 367.675 71.0173 367.671 67.93C367.671 47.34 353.581 34.2 332.841 34.2C310.671 34.2 295.471 51.4599 295.471 72.8299C295.471 96.5799 311.941 112.42 335.211 112.42C352.791 112.42 364.981 103.55 370.211 88.98L352.881 82.21C350.501 90.73 344.641 94.9999 335.461 94.9999ZM332.771 50.51C341.771 50.51 347.971 55.42 347.971 63.02L347.811 63.65H315.671C317.571 55.42 324.541 50.51 332.771 50.51Z",fill:"white"}),F=r.a.createElement("path",{d:"M437.73 52.41V35.78H372.34V53.2H412.24L371.07 93.42V110.83H438.84V92.62H396.4L437.73 52.41Z",fill:"white"}),G=r.a.createElement("path",{d:"M559.86 60.01C559.866 61.2709 559.782 62.5307 559.61 63.78H578.82C579.287 61.338 579.511 58.856 579.49 56.37C579.49 43.54 571.42 34.2 557.96 34.2C549.25 34.2 543.08 38.4799 539.91 45.4399V35.79H519.65V110.79H539.91V62.54C539.91 54.94 544.03 50.67 550.36 50.67C556.06 50.67 559.86 54.47 559.86 60.01Z",fill:"white"}),W=r.a.createElement("path",{d:"M194.999 47.03C190.399 39.27 181.849 34.2 171.249 34.2C150.659 34.2 135.619 50.04 135.619 73.63C135.619 96.9 150.509 112.42 171.719 112.42C182.329 112.42 190.879 107.82 195.789 100.07V110.83H215.259V0H194.999V47.03ZM175.829 95.21C164.589 95.21 155.829 86.98 155.829 73.68C155.829 60.22 164.539 51.68 175.829 51.68C186.749 51.68 195.779 60.23 195.779 73.68C195.779 86.93 186.749 95.21 175.829 95.21Z",fill:"white"}),T=r.a.createElement("path",{d:"M479.81 94.9999C469.04 94.9999 460.18 88.5099 460.02 77.1099H511.02C511.689 74.0958 512.024 71.0173 512.02 67.93C512.02 47.34 497.93 34.2 477.19 34.2C455.02 34.2 439.82 51.4599 439.82 72.8299C439.82 96.5799 456.29 112.42 479.56 112.42C497.14 112.42 509.33 103.55 514.56 88.98L497.22 82.21C494.85 90.73 489 94.9999 479.81 94.9999ZM477.12 50.51C486.12 50.51 492.32 55.42 492.32 63.02L492.16 63.65H460C461.92 55.42 468.88 50.51 477.12 50.51Z",fill:"white"}),J=r.a.createElement("path",{d:"M260.63 94.9999C249.86 94.9999 241 88.5099 240.84 77.1099H291.84C292.497 74.0947 292.815 71.0157 292.79 67.93C292.79 47.34 278.7 34.2 257.96 34.2C235.79 34.2 220.59 51.4599 220.59 72.8299C220.59 96.5799 237.06 112.42 260.33 112.42C277.91 112.42 290.1 103.55 295.33 88.98L278.05 82.21C275.67 90.73 269.81 94.9999 260.63 94.9999ZM257.94 50.51C266.94 50.51 273.14 55.42 273.14 63.02L272.98 63.65H240.84C242.74 55.42 249.71 50.51 257.94 50.51Z",fill:"white"}),X=r.a.createElement("path",{d:"M115.35 35.73H90.5195V50.22H115.35V35.73Z",fill:"#29AB70"}),N=r.a.createElement("path",{d:"M115.35 55.9099H90.5195V70.3999H115.35V55.9099Z",fill:"url(#paint0_linear)"}),K=r.a.createElement("path",{d:"M115.35 76.08H90.5195V90.57H115.35V76.08Z",fill:"url(#paint1_linear)"}),Q=r.a.createElement("path",{d:"M25.3398 96.26H0.509766V110.75H25.3398V96.26Z",fill:"url(#paint2_linear)"}),Y=r.a.createElement("path",{d:"M55.3398 96.26H30.5098V110.75H55.3398V96.26Z",fill:"url(#paint3_linear)"}),$=r.a.createElement("path",{d:"M85.3495 96.26H60.5195V110.75H85.3495V96.26Z",fill:"url(#paint4_linear)"}),ee=r.a.createElement("path",{d:"M115.35 96.26H90.5195V110.75H115.35V96.26Z",fill:"url(#paint5_linear)"}),te=r.a.createElement("path",{d:"M85.3495 76.08H60.5195V90.57H85.3495V76.08Z",fill:"url(#paint6_linear)"}),ne=r.a.createElement("path",{d:"M55.3398 76.08H30.5098V90.57H55.3398V76.08Z",fill:"url(#paint7_linear)"}),ae=r.a.createElement("path",{d:"M55.3398 55.9099H30.5098V70.3999H55.3398V55.9099Z",fill:"url(#paint8_linear)"}),re=r.a.createElement("path",{d:"M335.461 94.9999C324.691 94.9999 315.831 88.5099 315.671 77.1099H366.671C367.339 74.0958 367.675 71.0173 367.671 67.93C367.671 47.34 353.581 34.2 332.841 34.2C310.671 34.2 295.471 51.4599 295.471 72.8299C295.471 96.5799 311.941 112.42 335.211 112.42C352.791 112.42 364.981 103.55 370.211 88.98L352.881 82.21C350.501 90.73 344.641 94.9999 335.461 94.9999ZM332.771 50.51C341.771 50.51 347.971 55.42 347.971 63.02L347.811 63.65H315.671C317.571 55.42 324.541 50.51 332.771 50.51Z",fill:"black"}),ie=r.a.createElement("path",{d:"M437.73 52.41V35.78H372.34V53.2H412.24L371.07 93.42V110.83H438.84V92.62H396.4L437.73 52.41Z",fill:"black"}),le=r.a.createElement("path",{d:"M559.86 60.01C559.866 61.2709 559.782 62.5307 559.61 63.78H578.82C579.287 61.338 579.511 58.856 579.49 56.37C579.49 43.54 571.42 34.2 557.96 34.2C549.25 34.2 543.08 38.4799 539.91 45.4399V35.79H519.65V110.79H539.91V62.54C539.91 54.94 544.03 50.67 550.36 50.67C556.06 50.67 559.86 54.47 559.86 60.01Z",fill:"black"}),ce=r.a.createElement("path",{d:"M194.999 47.03C190.399 39.27 181.849 34.2 171.249 34.2C150.659 34.2 135.619 50.04 135.619 73.63C135.619 96.9 150.509 112.42 171.719 112.42C182.329 112.42 190.879 107.82 195.789 100.07V110.83H215.259V0H194.999V47.03ZM175.829 95.21C164.589 95.21 155.829 86.98 155.829 73.68C155.829 60.22 164.539 51.68 175.829 51.68C186.749 51.68 195.779 60.23 195.779 73.68C195.779 86.93 186.749 95.21 175.829 95.21Z",fill:"black"}),oe=r.a.createElement("path",{d:"M479.81 94.9999C469.04 94.9999 460.18 88.5099 460.02 77.1099H511.02C511.689 74.0958 512.024 71.0173 512.02 67.93C512.02 47.34 497.93 34.2 477.19 34.2C455.02 34.2 439.82 51.4599 439.82 72.8299C439.82 96.5799 456.29 112.42 479.56 112.42C497.14 112.42 509.33 103.55 514.56 88.98L497.22 82.21C494.85 90.73 489 94.9999 479.81 94.9999ZM477.12 50.51C486.12 50.51 492.32 55.42 492.32 63.02L492.16 63.65H460C461.92 55.42 468.88 50.51 477.12 50.51Z",fill:"black"}),se=r.a.createElement("path",{d:"M260.63 94.9999C249.86 94.9999 241 88.5099 240.84 77.1099H291.84C292.497 74.0947 292.815 71.0157 292.79 67.93C292.79 47.34 278.7 34.2 257.96 34.2C235.79 34.2 220.59 51.4599 220.59 72.8299C220.59 96.5799 237.06 112.42 260.33 112.42C277.91 112.42 290.1 103.55 295.33 88.98L278.05 82.21C275.67 90.73 269.81 94.9999 260.63 94.9999ZM257.94 50.51C266.94 50.51 273.14 55.42 273.14 63.02L272.98 63.65H240.84C242.74 55.42 249.71 50.51 257.94 50.51Z",fill:"black"}),ue=r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"paint0_linear",x1:104.55,y1:72.2999,x2:101.32,y2:53.9999,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#2C8C9D"}),r.a.createElement("stop",{offset:.04,stopColor:"#298E9A"}),r.a.createElement("stop",{offset:.39,stopColor:"#129C83"}),r.a.createElement("stop",{offset:.72,stopColor:"#05A475"}),r.a.createElement("stop",{offset:1,stopColor:"#00A770"})),r.a.createElement("linearGradient",{id:"paint1_linear",x1:90.1495,y1:89.84,x2:115.72,y2:76.81,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#2839BA"}),r.a.createElement("stop",{offset:1,stopColor:"#148CB3"})),r.a.createElement("linearGradient",{id:"paint2_linear",x1:.509766,y1:103.5,x2:25.3398,y2:103.5,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#F6A500"}),r.a.createElement("stop",{offset:1,stopColor:"#F29100"})),r.a.createElement("linearGradient",{id:"paint3_linear",x1:30.5098,y1:103.5,x2:55.3398,y2:103.5,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#F29100"}),r.a.createElement("stop",{offset:1,stopColor:"#D12F5F"})),r.a.createElement("linearGradient",{id:"paint4_linear",x1:60.5195,y1:103.5,x2:85.3495,y2:103.5,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#B4197C"}),r.a.createElement("stop",{offset:1,stopColor:"#472EAD"})),r.a.createElement("linearGradient",{id:"paint5_linear",x1:90.5195,y1:103.5,x2:115.35,y2:103.5,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#2839BA"}),r.a.createElement("stop",{offset:1,stopColor:"#3072B7"})),r.a.createElement("linearGradient",{id:"paint6_linear",x1:59.5395,y1:87.24,x2:86.3195,y2:79.41,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#B4197C"}),r.a.createElement("stop",{offset:1,stopColor:"#373AAC"})),r.a.createElement("linearGradient",{id:"paint7_linear",x1:29.6398,y1:78.49,x2:56.2198,y2:88.16,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#FFCB00"}),r.a.createElement("stop",{offset:1,stopColor:"#D12F5F"})),r.a.createElement("linearGradient",{id:"paint8_linear",x1:32.6098,y1:53.6299,x2:53.2398,y2:72.6699,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#FFCF00"}),r.a.createElement("stop",{offset:1,stopColor:"#ED743B"}))),de=function(e){var t=e.svgRef,n=e.title,a=B(e,["svgRef","title"]);return r.a.createElement("svg",q({width:580,height:113,viewBox:"0 0 580 113",fill:"none",ref:t},a),n?r.a.createElement("title",null,n):null,R,F,G,W,T,J,X,N,K,Q,Y,$,ee,te,ne,ae,re,ie,le,ce,oe,se,ue)},pe=r.a.forwardRef((function(e,t){return r.a.createElement(de,q({svgRef:t},e))})),fe=(n.p,function(){return r.a.createElement(I.a,{as:"header",justify:"flex-end",p:"2"},r.a.createElement(I.a,{align:"baseline"},r.a.createElement(z.a,{as:"span",fontWeight:"bold",pr:"2"},"Powered by"),r.a.createElement(s.a,{as:pe,height:"4",width:"auto"})))}),me=n(44),he=n(77),be=function(e){e.id;var t=e.title,n=e.onPlay,a=e.description,i=e.src,l=Object(me.a)(e,["id","title","onPlay","description","src"]);return r.a.createElement(s.a,Object.assign({},l,{w:"3xs",borderWidth:"1px",rounded:"lg",overflow:"hidden",boxShadow:"sm"}),r.a.createElement(s.a,{position:"relative"},r.a.createElement(d.a,{onClick:n,"aria-label":"play ".concat(t),icon:p.f,isRound:!0,m:"2",size:"sm",bottom:"0",position:"absolute"}),r.a.createElement(he.a,{src:i,alt:t})),r.a.createElement(s.a,{d:"flex",flexDirection:"column",p:"1"},r.a.createElement(s.a,{fontWeight:"bold"},t),a&&r.a.createElement(s.a,{fontSize:"sm"},a)))};be.defaultProps={onPlay:A.a};var Ee=n(78),Ce=function(e){var t=e.children,n=e.label,i=Object(me.a)(e,["children","label"]),l=Object(a.useRef)(null),c=Object(a.useRef)(null),u=Object(a.useState)(0),f=Object(o.a)(u,2),m=f[0],h=f[1],b=Object(a.useState)(0),E=Object(o.a)(b,2),C=E[0],v=E[1],g=Object(a.useState)(0),y=Object(o.a)(g,2),_=y[0],O=y[1],j=Object(a.useState)(0),w=Object(o.a)(j,2),Z=w[0],H=w[1],x=r.a.Children.count(t);Object(a.useEffect)((function(){var e=function(){return O(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.useLayoutEffect)((function(){var e,t,n,a,r=null!==(e=null===(t=c.current)||void 0===t?void 0:t.clientWidth)&&void 0!==e?e:0,i=null!==(n=null===(a=l.current)||void 0===a?void 0:a.clientWidth)&&void 0!==n?n:0,o=x&&i/x,s=o&&Math.ceil(x-r/o)+1;h(o),H(s)}),[x,_]);var k=Object(a.useCallback)((function(){return v((function(e){return(e-1+Z)%Z}))}),[Z]),V=Object(a.useCallback)((function(){return v((function(e){return(e+1)%Z}))}),[Z]);return r.a.createElement(s.a,Object.assign({},i,{width:"100%",position:"relative"}),r.a.createElement(Ee.a,{pl:"3"},n),r.a.createElement(d.a,{size:"lg",isRound:!0,position:"absolute",zIndex:1,left:"0",top:"50%",bottom:"50%","aria-label":"".concat(n," section forward"),icon:p.b,onClick:k}),r.a.createElement(s.a,{ref:c,overflowX:"hidden"},r.a.createElement(I.a,{ref:l,width:"max-content",transform:"translateX(-".concat(m*C,"px)"),transition:"transform .3s ease"},t)),r.a.createElement(d.a,{size:"lg",isRound:!0,position:"absolute",zIndex:1,right:"0",top:"50%",bottom:"50%","aria-label":"".concat(n," section forward"),icon:p.c,onClick:V}))},ve=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){M.artist.fetchAlbums(8506054).then((function(e){var t;return i((null===(t=e.body)||void 0===t?void 0:t.data)||[])}))}),[]),r.a.createElement(s.a,{mb:"20",d:"flex",flexWrap:"wrap"},r.a.createElement(Ce,{label:"Ghost"},n.map((function(e){var t=e.id,n=e.cover_medium,a=e.title;return r.a.createElement(be,{key:t,title:a,src:n,onPlay:function(){return DZ.player.playAlbum(t)},m:"3"})}))))};function ge(){var e=Object(L.a)();return Object(a.useEffect)((function(){var t=(new P).addCommand({trigger:"play",callback:DZ.player.play}).addCommand({trigger:"stop",callback:DZ.player.pause}).addCommand({trigger:"next",callback:DZ.player.next}).addCommand({trigger:"previous",callback:DZ.player.prev}).addCommand({trigger:"volume up",callback:function(){return DZ.player.setVolume(DZ.player.getVolume()+20)}}).addCommand({trigger:"volume down",callback:function(){return DZ.player.setVolume(DZ.player.getVolume()-20)}});t.addEventListener("result",(function(t){var n=t,a=Array.from(n.results[n.resultIndex]).map((function(e){return e.transcript}));e({position:"top-right",title:"Recognized:",description:a.join(" | ")})})),t.start()}),[e]),r.a.createElement(D.a,{basename:"/voice-driven-music-app"},r.a.createElement(U.a,null),r.a.createElement(s.a,null,r.a.createElement(fe,null),r.a.createElement(s.a,{as:"main"},r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/"},r.a.createElement(ve,null)))),r.a.createElement(E,{p:"2",bg:"white",position:"fixed",left:"0",right:"0",bottom:"0"})))}!function(e){var t=e.appId,n=e.channelUrl,a=e.onload,r=document.createElement("div");r.id="dz-root",document.body.appendChild(r);var i=document.createElement("script");i.src="https://e-cdns-files.dzcdn.net/js/min/dz.js",document.head.appendChild(i),window.dzAsyncInit=function(){DZ.init({appId:t,channelUrl:n,player:{onload:a}})}}({appId:"404684",channelUrl:window.location.href+"channel.html",onload:function(){l.a.render(r.a.createElement(c.a,null,r.a.createElement(ge,null)),document.getElementById("root"))}})}},[[55,1,2]]]);
//# sourceMappingURL=main.56ab5e20.chunk.js.map