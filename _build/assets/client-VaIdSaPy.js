const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/IdleInfluencerPrivacyPolicy-CXWY2vNA.js","assets/web-x8bnSWTe.js","assets/privacyPolicy-vlytgIm9.css","assets/IdleTrillionairePrivacyPolicy-CVQUlr2C.js","assets/TurnBasedBoxingPrivacyPolicy-BI0oEe89.js","assets/bbq-B6Nxh0hN.js","assets/bbq-CqOOYlDi.css","assets/bbq2024-Dgl5Gi0P.js","assets/index-BN8WrdfI.js","assets/index-DCHVj7ba.css","assets/lmsDominatorCompantionPrivacyPolicy-B8n7m2VZ.js"])))=>i.map(i=>d[i]);
import{c as v,a as Y,b as qe,s as j,d as k,u as pe,e as me,o as Q,r as ge,f as S,g as ye,h as O,i as ee,j as we,k as Fe,l as Be,m as Ue,n as je,p as We,S as ve,q as ze,t as Ve,w as D,x as q,y as B,z as U,A as Pe,B as He,C as Ke,E as Ze,D as Ge}from"./web-x8bnSWTe.js";const H="Invariant Violation",{setPrototypeOf:Je=function(e,n){return e.__proto__=n,e}}=Object;class te extends Error{framesToPop=1;name=H;constructor(n=H){super(typeof n=="number"?`${H}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),Je(this,te.prototype)}}function K(e,n){if(!e)throw new te(n)}const Xe=/^[A-Za-z]:\//;function Ye(e=""){return e&&e.replace(/\\/g,"/").replace(Xe,n=>n.toUpperCase())}const Qe=/^[/\\]{2}/,et=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,tt=/^[A-Za-z]:$/,nt=function(e){if(e.length===0)return".";e=Ye(e);const n=e.match(Qe),t=J(e),r=e[e.length-1]==="/";return e=rt(e,!t),e.length===0?t?"/":r?"./":".":(r&&(e+="/"),tt.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!J(e)?`/${e}`:e)},be=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":nt(n.replace(/\/\/+/g,"/"))};function rt(e,n){let t="",r=0,o=-1,s=0,i=null;for(let a=0;a<=e.length;++a){if(a<e.length)i=e[a];else{if(i==="/")break;i="/"}if(i==="/"){if(!(o===a-1||s===1))if(s===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const c=t.lastIndexOf("/");c===-1?(t="",r=0):(t=t.slice(0,c),r=t.length-1-t.lastIndexOf("/")),o=a,s=0;continue}else if(t.length>0){t="",r=0,o=a,s=0;continue}}n&&(t+=t.length>0?"/..":"..",r=2)}else t.length>0?t+=`/${e.slice(o+1,a)}`:t=e.slice(o+1,a),r=a-o-1;o=a,s=0}else i==="."&&s!==-1?++s:s=-1}return t}const J=function(e){return et.test(e)};function ot(e){return`virtual:${e}`}function st(e){return e.handler?.endsWith(".html")?J(e.handler)?e.handler:be(e.root,e.handler):`$vinxi/handler/${e.name}`}const at=new Proxy({},{get(e,n){return K(typeof n=="string","Bundler name should be a string"),{name:n,type:"client",handler:ot(st({name:n})),baseURL:"/theSlantedRoomSolid/_build",chunks:new Proxy({},{get(t,r){K(typeof r=="string","Chunk expected");let o=be("/theSlantedRoomSolid/_build",r+".mjs");return{import(){return import(o)},output:{path:o}}}}),inputs:new Proxy({},{get(t,r){K(typeof r=="string","Input must be string");let o=window.manifest[r].output;return{async import(){return import(o)},async assets(){return window.manifest[r].assets},output:{path:o}}}})}}});globalThis.MANIFEST=at;const Ee=Y(),it=["title","meta"],ae=[],ie=["name","http-equiv","content","charset","media"].concat(["property"]),le=(e,n)=>{const t=Object.fromEntries(Object.entries(e.props).filter(([r])=>n.includes(r)).sort());return(Object.hasOwn(t,"name")||Object.hasOwn(t,"property"))&&(t.name=t.name||t.property,delete t.property),e.tag+JSON.stringify(t)};function lt(){if(!j.context){const t=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(t,r=>r.parentNode.removeChild(r))}const e=new Map;function n(t){if(t.ref)return t.ref;let r=document.querySelector(`[data-sm="${t.id}"]`);return r?(r.tagName.toLowerCase()!==t.tag&&(r.parentNode&&r.parentNode.removeChild(r),r=document.createElement(t.tag)),r.removeAttribute("data-sm")):r=document.createElement(t.tag),r}return{addTag(t){if(it.indexOf(t.tag)!==-1){const s=t.tag==="title"?ae:ie,i=le(t,s);e.has(i)||e.set(i,[]);let a=e.get(i),c=a.length;a=[...a,t],e.set(i,a);let l=n(t);t.ref=l,k(l,t.props);let u=null;for(var r=c-1;r>=0;r--)if(a[r]!=null){u=a[r];break}return l.parentNode!=document.head&&document.head.appendChild(l),u&&u.ref&&u.ref.parentNode&&document.head.removeChild(u.ref),c}let o=n(t);return t.ref=o,k(o,t.props),o.parentNode!=document.head&&document.head.appendChild(o),-1},removeTag(t,r){const o=t.tag==="title"?ae:ie,s=le(t,o);if(t.ref){const i=e.get(s);if(i){if(t.ref.parentNode){t.ref.parentNode.removeChild(t.ref);for(let a=r-1;a>=0;a--)i[a]!=null&&document.head.appendChild(i[a].ref)}i[r]=null,e.set(s,i)}else t.ref.parentNode&&t.ref.parentNode.removeChild(t.ref)}}}}const ct=e=>{const n=lt();return v(Ee.Provider,{value:n,get children(){return e.children}})},ut=(e,n,t)=>(dt({tag:e,props:n,setting:t,id:qe(),get name(){return n.name||n.property}}),null);function dt(e){const n=pe(Ee);if(!n)throw new Error("<MetaProvider /> should be in the tree");me(()=>{const t=n.addTag(e);Q(()=>n.removeTag(e,t))})}const ft=e=>ut("title",e,{escape:!0,close:!0});function Se(){let e=new Set;function n(o){return e.add(o),()=>e.delete(o)}let t=!1;function r(o,s){if(t)return!(t=!1);const i={to:o,options:s,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const a of e)a.listener({...i,from:a.location,retry:c=>{c&&(t=!0),a.navigate(o,{...s,resolve:!1})}});return!i.defaultPrevented}return{subscribe:n,confirm:r}}let X;function ne(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),X=window.history.state._depth}ne();function ht(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function pt(e,n){let t=!1;return()=>{const r=X;ne();const o=r==null?null:X-r;if(t){t=!1;return}o&&n(o)?(t=!0,window.history.go(-o)):e()}}const mt=/^(?:[a-z0-9]+:)?\/\//i,gt=/^\/+|(\/)\/+$/g,Re="http://sr";function M(e,n=!1){const t=e.replace(gt,"$1");return t?n||/^[?#]/.test(t)?t:"/"+t:""}function W(e,n,t){if(mt.test(n))return;const r=M(e),o=t&&M(t);let s="";return!o||n.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+M(n,!s)}function yt(e,n){return M(e).replace(/\/*(\*.*)?$/g,"")+M(n)}function $e(e){const n={};return e.searchParams.forEach((t,r)=>{r in n?Array.isArray(n[r])?n[r].push(t):n[r]=[n[r],t]:n[r]=t}),n}function wt(e,n,t){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),i=s.length;return a=>{const c=a.split("/").filter(Boolean),l=c.length-i;if(l<0||l>0&&o===void 0&&!n)return null;const u={path:i?"":"/",params:{}},f=p=>t===void 0?void 0:t[p];for(let p=0;p<i;p++){const m=s[p],b=m[0]===":",d=b?c[p]:c[p].toLowerCase(),h=b?m.slice(1):m.toLowerCase();if(b&&Z(d,f(h)))u.params[h]=d;else if(b||!Z(d,h))return null;u.path+=`/${d}`}if(o){const p=l?c.slice(-l).join("/"):"";if(Z(p,f(o)))u.params[o]=p;else return null}return u}}function Z(e,n){const t=r=>r===e;return n===void 0?!0:typeof n=="string"?t(n):typeof n=="function"?n(e):Array.isArray(n)?n.some(t):n instanceof RegExp?n.test(e):!1}function vt(e){const[n,t]=e.pattern.split("/*",2),r=n.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(t===void 0?0:1))}function _e(e){const n=new Map,t=ye();return new Proxy({},{get(r,o){return n.has(o)||ge(t,()=>n.set(o,S(()=>e()[o]))),n.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ae(e){let n=/(\/?\:[^\/]+)\?/.exec(e);if(!n)return[e];let t=e.slice(0,n.index),r=e.slice(n.index+n[0].length);const o=[t,t+=n[1]];for(;n=/^(\/\:[^\/]+)\?/.exec(r);)o.push(t+=n[1]),r=r.slice(n[0].length);return Ae(r).reduce((s,i)=>[...s,...o.map(a=>a+i)],[])}const Pt=100,bt=Y(),xe=Y();function Et(e,n=""){const{component:t,preload:r,load:o,children:s,info:i}=e,a=!s||Array.isArray(s)&&!s.length,c={key:e,component:t,preload:r||o,info:i};return Te(e.path).reduce((l,u)=>{for(const f of Ae(u)){const p=yt(n,f);let m=a?p:p.split("/*",1)[0];m=m.split("/").map(b=>b.startsWith(":")||b.startsWith("*")?b:encodeURIComponent(b)).join("/"),l.push({...c,originalPath:u,pattern:m,matcher:wt(m,!a,e.matchFilters)})}return l},[])}function St(e,n=0){return{routes:e,score:vt(e[e.length-1])*1e4-n,matcher(t){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],i=s.matcher(t);if(!i)return null;r.unshift({...i,route:s})}return r}}}function Te(e){return Array.isArray(e)?e:[e]}function Ce(e,n="",t=[],r=[]){const o=Te(e);for(let s=0,i=o.length;s<i;s++){const a=o[s];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const c=Et(a,n);for(const l of c){t.push(l);const u=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!u)Ce(a.children,l.pattern,t,r);else{const f=St([...t],r.length);r.push(f)}t.pop()}}}return t.length?r:r.sort((s,i)=>i.score-s.score)}function G(e,n){for(let t=0,r=e.length;t<r;t++){const o=e[t].matcher(n);if(o)return o}return[]}function Rt(e,n,t){const r=new URL(Re),o=S(u=>{const f=e();try{return new URL(f,r)}catch{return console.error(`Invalid path ${f}`),u}},r,{equals:(u,f)=>u.href===f.href}),s=S(()=>o().pathname),i=S(()=>o().search,!0),a=S(()=>o().hash),c=()=>"",l=ee(i,()=>$e(o()));return{get pathname(){return s()},get search(){return i()},get hash(){return a()},get state(){return n()},get key(){return c()},query:t?t(l):_e(l)}}let x;function $t(){return x}function _t(e,n,t,r={}){const{signal:[o,s],utils:i={}}=e,a=i.parsePath||(g=>g),c=i.renderPath||(g=>g),l=i.beforeLeave||Se(),u=W("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&s({value:u,replace:!0,scroll:!1});const[f,p]=O(!1);let m;const b=(g,y)=>{y.value===d()&&y.state===P()||(m===void 0&&p(!0),x=g,m=y,Be(()=>{m===y&&(h(m.value),w(m.state),je(),_[1](E=>E.filter(T=>T.pending)))}).finally(()=>{m===y&&Ue(()=>{x=void 0,g==="navigate"&&De(m),p(!1),m=void 0})}))},[d,h]=O(o().value),[P,w]=O(o().state),$=Rt(d,P,i.queryWrapper),R=[],_=O([]),I=S(()=>typeof r.transformUrl=="function"?G(n(),r.transformUrl($.pathname)):G(n(),$.pathname)),re=()=>{const g=I(),y={};for(let E=0;E<g.length;E++)Object.assign(y,g[E].params);return y},Ie=i.paramsWrapper?i.paramsWrapper(re,n):_e(re),oe={pattern:u,path:()=>u,outlet:()=>null,resolvePath(g){return W(u,g)}};return me(ee(o,g=>b("native",g),{defer:!0})),{base:oe,location:$,params:Ie,isRouting:f,renderPath:c,parsePath:a,navigatorFactory:Oe,matches:I,beforeLeave:l,preloadRoute:Me,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:_};function Ne(g,y,E){we(()=>{if(typeof y=="number"){y&&(i.go?i.go(y):console.warn("Router integration does not support relative routing"));return}const T=!y||y[0]==="?",{replace:z,resolve:C,scroll:V,state:N}={replace:!1,resolve:!T,scroll:!0,...E},F=C?g.resolvePath(y):W(T&&$.pathname||"",y);if(F===void 0)throw new Error(`Path '${y}' is not a routable path`);if(R.length>=Pt)throw new Error("Too many redirects");const se=d();(F!==se||N!==P())&&(Fe||l.confirm(F,E)&&(R.push({value:se,replace:z,scroll:V,state:P()}),b("navigate",{value:F,state:N})))})}function Oe(g){return g=g||pe(xe)||oe,(y,E)=>Ne(g,y,E)}function De(g){const y=R[0];y&&(s({...g,replace:y.replace,scroll:y.scroll}),R.length=0)}function Me(g,y){const E=G(n(),g.pathname),T=x;x="preload";for(let z in E){const{route:C,params:V}=E[z];C.component&&C.component.preload&&C.component.preload();const{preload:N}=C;y&&N&&ge(t(),()=>N({params:V,location:{pathname:g.pathname,search:g.search,hash:g.hash,query:$e(g),state:null,key:""},intent:"preload"}))}x=T}}function At(e,n,t,r){const{base:o,location:s,params:i}=e,{pattern:a,component:c,preload:l}=r().route,u=S(()=>r().path);c&&c.preload&&c.preload();const f=l?l({params:i,location:s,intent:x||"initial"}):void 0;return{parent:n,pattern:a,path:u,outlet:()=>c?v(c,{params:i,location:s,data:f,get children(){return t()}}):t(),resolvePath(m){return W(o.path(),m,u())}}}const xt=e=>n=>{const{base:t}=n,r=We(()=>n.children),o=S(()=>Ce(r(),n.base||""));let s;const i=_t(e,o,()=>s,{base:t,singleFlight:n.singleFlight,transformUrl:n.transformUrl});return e.create&&e.create(i),v(bt.Provider,{value:i,get children(){return v(Tt,{routerState:i,get root(){return n.root},get preload(){return n.rootPreload||n.rootLoad},get children(){return[S(()=>(s=ye())&&null),v(Ct,{routerState:i,get branches(){return o()}})]}})}})};function Tt(e){const n=e.routerState.location,t=e.routerState.params,r=S(()=>e.preload&&we(()=>{e.preload({params:t,location:n,intent:$t()||"initial"})}));return v(ve,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>v(o,{params:t,location:n,get data(){return r()},get children(){return e.children}})})}function Ct(e){const n=[];let t;const r=S(ee(e.routerState.matches,(o,s,i)=>{let a=s&&o.length===s.length;const c=[];for(let l=0,u=o.length;l<u;l++){const f=s&&s[l],p=o[l];i&&f&&p.route.key===f.route.key?c[l]=i[l]:(a=!1,n[l]&&n[l](),ze(m=>{n[l]=m,c[l]=At(e.routerState,c[l-1]||e.routerState.base,ce(()=>r()[l+1]),()=>e.routerState.matches()[l])}))}return n.splice(o.length).forEach(l=>l()),i&&a?i:(t=c[0],c)}));return ce(()=>r()&&t)()}const ce=e=>()=>v(ve,{get when(){return e()},keyed:!0,children:n=>v(xe.Provider,{value:n,get children(){return n.outlet()}})});function kt([e,n],t,r){return[e,r?o=>n(r(o)):n]}function Lt(e){let n=!1;const t=o=>typeof o=="string"?{value:o}:o,r=kt(O(t(e.get()),{equals:(o,s)=>o.value===s.value&&o.state===s.state}),void 0,o=>(!n&&e.set(o),j.registry&&!j.done&&(j.done=!0),o));return e.init&&Q(e.init((o=e.get())=>{n=!0,r[1](t(o)),n=!1})),xt({signal:r,create:e.create,utils:e.utils})}function It(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function Nt(e,n){const t=e&&document.getElementById(e);t?t.scrollIntoView():n&&window.scrollTo(0,0)}const Ot=new Map;function Dt(e=!0,n=!1,t="/_server",r){return o=>{const s=o.base.path(),i=o.navigatorFactory(o.base);let a,c;function l(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function u(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const h=d.composedPath().find(I=>I instanceof Node&&I.nodeName.toUpperCase()==="A");if(!h||n&&!h.hasAttribute("link"))return;const P=l(h),w=P?h.href.baseVal:h.href;if((P?h.target.baseVal:h.target)||!w&&!h.hasAttribute("state"))return;const R=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||R&&R.includes("external"))return;const _=P?new URL(w,document.baseURI):new URL(w);if(!(_.origin!==window.location.origin||s&&_.pathname&&!_.pathname.toLowerCase().startsWith(s.toLowerCase())))return[h,_]}function f(d){const h=u(d);if(!h)return;const[P,w]=h,$=o.parsePath(w.pathname+w.search+w.hash),R=P.getAttribute("state");d.preventDefault(),i($,{resolve:!1,replace:P.hasAttribute("replace"),scroll:!P.hasAttribute("noscroll"),state:R?JSON.parse(R):void 0})}function p(d){const h=u(d);if(!h)return;const[P,w]=h;r&&(w.pathname=r(w.pathname)),o.preloadRoute(w,P.getAttribute("preload")!=="false")}function m(d){clearTimeout(a);const h=u(d);if(!h)return c=null;const[P,w]=h;c!==P&&(r&&(w.pathname=r(w.pathname)),a=setTimeout(()=>{o.preloadRoute(w,P.getAttribute("preload")!=="false"),c=P},20))}function b(d){if(d.defaultPrevented)return;let h=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const w=new URL(h,Re);if(h=o.parsePath(w.pathname+w.search),!h.startsWith(t))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const P=Ot.get(h);if(P){d.preventDefault();const w=new FormData(d.target,d.submitter);P.call({r:o,f:d.target},d.target.enctype==="multipart/form-data"?w:new URLSearchParams(w))}}Ve(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mousemove",m,{passive:!0}),document.addEventListener("focusin",p,{passive:!0}),document.addEventListener("touchstart",p,{passive:!0})),document.addEventListener("submit",b),Q(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mousemove",m),document.removeEventListener("focusin",p),document.removeEventListener("touchstart",p)),document.removeEventListener("submit",b)})}}function Mt(e){const n=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,o=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:o}},t=Se();return Lt({get:n,set({value:r,replace:o,scroll:s,state:i}){o?window.history.replaceState(ht(i),"",r):window.history.pushState(i,"",r),Nt(decodeURIComponent(window.location.hash.slice(1)),s),ne()},init:r=>It(window,"popstate",pt(r,o=>{if(o&&o<0)return!t.confirm(o);{const s=n();return!t.confirm(s.value,{state:s.state})}})),create:Dt(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}function qt(e){e.forEach(n=>{if(!n.attrs.href)return;let t=document.head.querySelector(`link[href="${n.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.attrs.href),document.head.appendChild(t))})}var Ft=q("<style>"),Bt=q("<link>"),Ut=q("<script> "),jt=q("<noscript>");const Wt={style:e=>(()=>{var n=D(Ft);return k(n,B(()=>e.attrs),!1,!0),Pe(n,()=>e.children),U(),n})(),link:e=>(()=>{var n=D(Bt);return k(n,B(()=>e.attrs),!1,!1),U(),n})(),script:e=>e.attrs.src?(()=>{var n=D(Ut);return k(n,B(()=>e.attrs,{get id(){return e.key}}),!1,!0),U(),n})():null,noscript:e=>(()=>{var n=D(jt);return k(n,B(()=>e.attrs),!1,!0),U(),n})()};function zt(e,n){let{tag:t,attrs:{key:r,...o}={key:void 0},children:s}=e;return Wt[t]({attrs:{...o,nonce:n},key:r,children:s})}function Vt(e,n,t,r="default"){return He(async()=>{{const s=(await e.import())[r],a=(await n.inputs?.[e.src].assets()).filter(l=>l.tag==="style"||l.attrs.rel==="stylesheet");return typeof window<"u"&&qt(a),{default:l=>[...a.map(u=>zt(u)),v(s,l)]}}})}const L={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Ht(e={}){const n={options:e,rootNode:ke(),staticRoutesMap:{}},t=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)ue(n,t(r),e.routes[r]);return{ctx:n,lookup:r=>Kt(n,t(r)),insert:(r,o)=>ue(n,t(r),o),remove:r=>Zt(n,t(r))}}function Kt(e,n){const t=e.staticRoutesMap[n];if(t)return t.data;const r=n.split("/"),o={};let s=!1,i=null,a=e.rootNode,c=null;for(let l=0;l<r.length;l++){const u=r[l];a.wildcardChildNode!==null&&(i=a.wildcardChildNode,c=r.slice(l).join("/"));const f=a.children.get(u);if(f===void 0){if(a&&a.placeholderChildren.length>1){const p=r.length-l;a=a.placeholderChildren.find(m=>m.maxDepth===p)||null}else a=a.placeholderChildren[0]||null;if(!a)break;a.paramName&&(o[a.paramName]=u),s=!0}else a=f}return(a===null||a.data===null)&&i!==null&&(a=i,o[a.paramName||"_"]=c,s=!0),a?s?{...a.data,params:s?o:void 0}:a.data:null}function ue(e,n,t){let r=!0;const o=n.split("/");let s=e.rootNode,i=0;const a=[s];for(const c of o){let l;if(l=s.children.get(c))s=l;else{const u=Gt(c);l=ke({type:u,parent:s}),s.children.set(c,l),u===L.PLACEHOLDER?(l.paramName=c==="*"?`_${i++}`:c.slice(1),s.placeholderChildren.push(l),r=!1):u===L.WILDCARD&&(s.wildcardChildNode=l,l.paramName=c.slice(3)||"_",r=!1),a.push(l),s=l}}for(const[c,l]of a.entries())l.maxDepth=Math.max(a.length-c,l.maxDepth||0);return s.data=t,r===!0&&(e.staticRoutesMap[n]=s),s}function Zt(e,n){let t=!1;const r=n.split("/");let o=e.rootNode;for(const s of r)if(o=o.children.get(s),!o)return t;if(o.data){const s=r.at(-1)||"";o.data=null,Object.keys(o.children).length===0&&o.parent&&(o.parent.children.delete(s),o.parent.wildcardChildNode=null,o.parent.placeholderChildren=[]),t=!0}return t}function ke(e={}){return{type:e.type||L.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Gt(e){return e.startsWith("**")?L.WILDCARD:e[0]===":"||e==="*"?L.PLACEHOLDER:L.NORMAL}const Jt="modulepreload",Xt=function(e){return"/theSlantedRoomSolid/_build/"+e},de={},A=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=i?.nonce||i?.getAttribute("nonce");o=Promise.allSettled(t.map(c=>{if(c=Xt(c),c in de)return;de[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":Jt,l||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((p,m)=>{f.addEventListener("load",p),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&s(a.reason);return n().catch(s)})},Le=[{page:!0,$component:{src:"src/routes/IdleInfluencerPrivacyPolicy.tsx?pick=default&pick=$css",build:()=>A(()=>import("./IdleInfluencerPrivacyPolicy-CXWY2vNA.js"),__vite__mapDeps([0,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/IdleInfluencerPrivacyPolicy.tsx?pick=default&pick=$css"].output.path)},path:"/IdleInfluencerPrivacyPolicy",filePath:"/home/runner/work/theSlantedRoomSolid/theSlantedRoomSolid/src/routes/IdleInfluencerPrivacyPolicy.tsx"},{page:!0,$component:{src:"src/routes/IdleTrillionairePrivacyPolicy.tsx?pick=default&pick=$css",build:()=>A(()=>import("./IdleTrillionairePrivacyPolicy-CVQUlr2C.js"),__vite__mapDeps([3,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/IdleTrillionairePrivacyPolicy.tsx?pick=default&pick=$css"].output.path)},path:"/IdleTrillionairePrivacyPolicy",filePath:"/home/runner/work/theSlantedRoomSolid/theSlantedRoomSolid/src/routes/IdleTrillionairePrivacyPolicy.tsx"},{page:!0,$component:{src:"src/routes/TurnBasedBoxingPrivacyPolicy.tsx?pick=default&pick=$css",build:()=>A(()=>import("./TurnBasedBoxingPrivacyPolicy-BI0oEe89.js"),__vite__mapDeps([4,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/TurnBasedBoxingPrivacyPolicy.tsx?pick=default&pick=$css"].output.path)},path:"/TurnBasedBoxingPrivacyPolicy",filePath:"/home/runner/work/theSlantedRoomSolid/theSlantedRoomSolid/src/routes/TurnBasedBoxingPrivacyPolicy.tsx"},{page:!0,$component:{src:"src/routes/bbq.tsx?pick=default&pick=$css",build:()=>A(()=>import("./bbq-B6Nxh0hN.js"),__vite__mapDeps([5,1,6])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/bbq.tsx?pick=default&pick=$css"].output.path)},path:"/bbq",filePath:"/home/runner/work/theSlantedRoomSolid/theSlantedRoomSolid/src/routes/bbq.tsx"},{page:!0,$component:{src:"src/routes/bbq2024.tsx?pick=default&pick=$css",build:()=>A(()=>import("./bbq2024-Dgl5Gi0P.js"),__vite__mapDeps([7,1,6])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/bbq2024.tsx?pick=default&pick=$css"].output.path)},path:"/bbq2024",filePath:"/home/runner/work/theSlantedRoomSolid/theSlantedRoomSolid/src/routes/bbq2024.tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>A(()=>import("./index-BN8WrdfI.js"),__vite__mapDeps([8,1,9])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/home/runner/work/theSlantedRoomSolid/theSlantedRoomSolid/src/routes/index.tsx"},{page:!0,$component:{src:"src/routes/lmsDominatorCompantionPrivacyPolicy.tsx?pick=default&pick=$css",build:()=>A(()=>import("./lmsDominatorCompantionPrivacyPolicy-B8n7m2VZ.js"),__vite__mapDeps([10,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/lmsDominatorCompantionPrivacyPolicy.tsx?pick=default&pick=$css"].output.path)},path:"/lmsDominatorCompantionPrivacyPolicy",filePath:"/home/runner/work/theSlantedRoomSolid/theSlantedRoomSolid/src/routes/lmsDominatorCompantionPrivacyPolicy.tsx"}],Yt=Qt(Le.filter(e=>e.page));function Qt(e){function n(t,r,o,s){const i=Object.values(t).find(a=>o.startsWith(a.id+"/"));return i?(n(i.children||(i.children=[]),r,o.slice(i.id.length)),t):(t.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function en(e){return e.$HEAD||e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Ht({routes:Le.reduce((e,n)=>{if(!en(n))return e;let t=n.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`).split("/").map(r=>r.startsWith(":")||r.startsWith("*")?r:encodeURIComponent(r)).join("/");if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);return e[t]={route:n},e},{})});function tn(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:t.$component&&Vt(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return Yt.map(e)}let fe;const nn=()=>fe||(fe=tn());function rn(){return v(Mt,{get base(){return"/theSlantedRoomSolid/"},root:e=>v(ct,{get children(){return[v(ft,{children:"The Slanted Room"}),v(Ke,{get children(){return e.children}})]}}),get children(){return v(nn,{})}})}const on=e=>null;var sn=q("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const an=e=>{const n="Error | Uncaught Client Exception";return v(Ze,{fallback:t=>(console.error(t),[(()=>{var r=D(sn);return Pe(r,n),r})(),v(on,{code:500})]),get children(){return e.children}})};function ln(e,n){return Ge(e,n)}function he(e){return e.children}function cn(){return v(he,{get children(){return v(he,{get children(){return v(an,{get children(){return v(rn,{})}})}})}})}ln(()=>v(cn,{}),document.getElementById("app"));const fn=void 0;export{fn as default};
