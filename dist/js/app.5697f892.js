(function(t){function e(e){for(var r,o,a=e[0],l=e[1],b=e[2],s=0,f=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);i&&i(e);while(f.length)f.shift()();return u.push.apply(u,b||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(u.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},u=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/music-browser/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var b=0;b<a.length;b++)e(a[b]);var i=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0b0f":function(t,e,n){"use strict";n("bc27")},af74:function(t,e,n){},bc27:function(t,e,n){},cc73:function(t,e,n){"use strict";n("af74")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},u=Object(r["g"])("Home"),o=Object(r["g"])(" | "),a=Object(r["g"])("About");function l(t,e){var n=Object(r["x"])("router-link"),l=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",c,[Object(r["h"])(n,{to:"/"},{default:Object(r["D"])((function(){return[u]})),_:1}),o,Object(r["h"])(n,{to:"/about"},{default:Object(r["D"])((function(){return[a]})),_:1})]),Object(r["h"])(l)],64)}n("cc73");var b=n("6b0d"),i=n.n(b);const s={},f=i()(s,[["render",l]]);var p=f,j=n("6c02"),O=function(t){return Object(r["t"])("data-v-9257bc90"),t=t(),Object(r["r"])(),t},d=O((function(){return Object(r["f"])("h1",null,"Albums",-1)})),m={class:"albums"};function v(t,e,n,c,u,o){var a=Object(r["x"])("AlbumCard");return Object(r["q"])(),Object(r["e"])(r["a"],null,[d,Object(r["E"])(Object(r["f"])("input",{type:"search",placeholder:"Artist/Album Name","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.term=e})},null,512),[[r["B"],t.term]]),Object(r["f"])("div",m,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(t.albums,(function(t){return Object(r["q"])(),Object(r["d"])(a,{key:t.collectionId,album:t},null,8,["album"])})),128))])],64)}var h={class:"album-card"},y=["src"];function g(t,e,n,c,u,o){return Object(r["q"])(),Object(r["e"])("div",h,[Object(r["f"])("h2",null,Object(r["z"])(t.album.collectionName),1),Object(r["f"])("img",{src:t.album.artworkUrl100,alt:""},null,8,y),Object(r["f"])("h3",null,Object(r["z"])(t.album.artistName),1)])}var w=Object(r["i"])({name:"AlbumCard",props:{album:Object}});const A=i()(w,[["render",g]]);var _=A,x=n("bc3a"),P=n.n(x),k=P.a.create({baseURL:"",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),q={getEvents:function(t){return k.get(t)}},C=Object(r["i"])({name:"AlbumList",components:{AlbumCard:_},data:function(){return{albums:null,term:""}},updated:function(){var t=this;q.getEvents("https://itunes.apple.com/search?term="+this.term+"&country=us&entity=album").then((function(e){t.albums=e.data.results})).catch((function(t){console.log(t)}))}});n("0b0f");const S=i()(C,[["render",v],["__scopeId","data-v-9257bc90"]]);var M=S,T={class:"about"},E=Object(r["f"])("h2",null,"Album browser using iTunes API.",-1),I=[E];function L(t,e){return Object(r["q"])(),Object(r["e"])("div",T,I)}const N={},U=i()(N,[["render",L]]);var z=U,D=[{path:"/",name:"AlbumList",component:M},{path:"/about",name:"About",component:z}],J=Object(j["a"])({history:Object(j["b"])(),routes:D}),B=J,H=n("5502"),R=Object(H["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(p).use(R).use(B).mount("#app")}});
//# sourceMappingURL=app.5697f892.js.map