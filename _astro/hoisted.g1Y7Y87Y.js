import{_ as o}from"./astro/assets-service.1mn5GyWb.js";function b(e,t){e.classList.toggle(t)}function y(e,t){return e.classList.contains(t)}function u(){return y(document.documentElement,"dark")}typeof process<"u"&&process.stdout&&process.stdout.isTTY;const{replace:E}="",L=/[&<>'"]/g,T={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},v=e=>T[e],w=e=>E.call(e,L,v);function B(e){return!!e&&typeof e=="object"&&typeof e.then=="function"}async function*k(e){const t=e.getReader();try{for(;;){const{done:n,value:s}=await t.read();if(n)return;yield s}}finally{t.releaseLock()}}const H=w;class h extends Uint8Array{}Object.defineProperty(h.prototype,Symbol.toStringTag,{get(){return"HTMLBytes"}});class p extends String{get[Symbol.toStringTag](){return"HTMLString"}}const M=e=>e instanceof p?e:typeof e=="string"?new p(e):e;function V(e){return Object.prototype.toString.call(e)==="[object HTMLString]"}function R(e){return new h(e)}function g(e){return typeof e.getReader=="function"}async function*m(e){if(g(e))for await(const t of k(e))yield i(t);else for await(const t of e)yield i(t)}function*S(e){for(const t of e)yield i(t)}function i(e){if(e&&typeof e=="object"){if(e instanceof Uint8Array)return R(e);if(e instanceof Response&&e.body){const t=e.body;return m(t)}else{if(typeof e.then=="function")return Promise.resolve(e).then(t=>i(t));if(Symbol.iterator in e)return S(e);if(Symbol.asyncIterator in e||g(e))return m(e)}}return M(e)}new TextEncoder;new TextDecoder;function x(e){return!!e&&typeof e=="object"&&"render"in e&&typeof e.render=="function"}function r({globResult:e,contentDir:t}){const n={};for(const s in e){const l=s.replace(new RegExp(`^${t}`),"").split("/");if(l.length<=1)continue;const d=l[0];n[d]??={},n[d][s]=e[s]}return n}const c="/src/content/",f=Object.assign({"/src/content/post/building-gpu-service-1.md":()=>o(()=>import("./building-gpu-service-1.zxAvo0xX.js"),__vite__mapDeps([])),"/src/content/post/building-gpu-service-2.md":()=>o(()=>import("./building-gpu-service-2.PWFFiAks.js"),__vite__mapDeps([])),"/src/content/post/building-gpu-service-3.md":()=>o(()=>import("./building-gpu-service-3.6j7zzmXe.js"),__vite__mapDeps([])),"/src/content/post/ceph-mds.md":()=>o(()=>import("./ceph-mds.JWDevdhE.js"),__vite__mapDeps([])),"/src/content/post/golang-http-url.md":()=>o(()=>import("./golang-http-url._ijJ8cNt.js"),__vite__mapDeps([])),"/src/content/post/reduce-image-size.md":()=>o(()=>import("./reduce-image-size.5EMa_t9F.js"),__vite__mapDeps([]))});r({globResult:f,contentDir:c});const _=Object.assign({});r({globResult:_,contentDir:c});r({globResult:{...f,..._},contentDir:c});const O=Object.assign({"/src/content/post/building-gpu-service-1.md":()=>o(()=>import("./building-gpu-service-1.TVweo2r9.js"),__vite__mapDeps([0,1])),"/src/content/post/building-gpu-service-2.md":()=>o(()=>import("./building-gpu-service-2.MjknqNUz.js"),__vite__mapDeps([2,1])),"/src/content/post/building-gpu-service-3.md":()=>o(()=>import("./building-gpu-service-3.2NCT2qX1.js"),__vite__mapDeps([3,1])),"/src/content/post/ceph-mds.md":()=>o(()=>import("./ceph-mds.FeTpUBWq.js"),__vite__mapDeps([4,1])),"/src/content/post/golang-http-url.md":()=>o(()=>import("./golang-http-url.RDeTyEoT.js"),__vite__mapDeps([5,1])),"/src/content/post/reduce-image-size.md":()=>o(()=>import("./reduce-image-size.0cilRU0f.js"),__vite__mapDeps([6,1]))});r({globResult:O,contentDir:c});const I="https://astro-cactus.chriswilliams.dev/";new URL(I).hostname;class D extends HTMLElement{headerEl;mobileButtonEl;menuOpen;constructor(){super(),this.headerEl=document.getElementById("main-header"),this.mobileButtonEl=this.querySelector("button"),this.menuOpen=!1,this.mobileButtonEl.addEventListener("click",this.toggleMobileMenu)}toggleMobileMenu=()=>{b(this.headerEl,"menu-open"),this.menuOpen=!this.menuOpen,this.mobileButtonEl.setAttribute("aria-expanded",this.menuOpen.toString())}}customElements.define("mobile-button",D);class A extends HTMLElement{button;observer;constructor(){super(),this.button=this.querySelector("button"),this.observer=null,this.button.setAttribute("aria-pressed",String(u())),this.button.addEventListener("click",this.handleThemeBtnClick)}connectedCallback(){const t=document.documentElement;this.observer=new MutationObserver(n=>{for(const s of n)if(s.type==="attributes"&&s.attributeName==="class"){const a=s.target.classList.contains("dark");this.button.setAttribute("aria-pressed",String(a))}}),this.observer.observe(t,{attributeFilter:["class"]})}disconnectedCallback(){this.observer?.disconnect()}handleThemeBtnClick=()=>{let t=u(),n=new CustomEvent("theme-change",{detail:{theme:t?"light":"dark"}});document.dispatchEvent(n)}}customElements.define("theme-toggle",A);class C extends HTMLElement{openBtn;closeBtn;dialog;dialogFrame;constructor(){super(),this.openBtn=this.querySelector("button[data-open-modal]"),this.closeBtn=this.querySelector("button[data-close-modal]"),this.dialog=this.querySelector("dialog"),this.dialogFrame=this.querySelector(".dialog-frame"),this.openBtn.addEventListener("click",this.openModal),this.openBtn.disabled=!1,this.closeBtn.addEventListener("click",this.closeModal)}connectedCallback(){window.addEventListener("keydown",this.onWindowKeydown),(window.requestIdleCallback||(n=>setTimeout(n,1)))(async()=>{const{PagefindUI:n}=await o(()=>import("./ui-core.jIv1WI5U.js"),__vite__mapDeps([7,1]));new n({element:"#cactus__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,showSubResults:!0})})}disconnectedCallback(){window.removeEventListener("keydown",this.onWindowKeydown)}onWindowClick=t=>{("href"in(t.target||{})||document.body.contains(t.target)&&!this.dialogFrame.contains(t.target))&&this.closeModal()};onWindowKeydown=t=>{t.key==="/"&&!this.dialog.open&&(this.openModal(),t.preventDefault())};openModal=t=>{this.dialog.showModal(),this.querySelector("input")?.focus(),t?.stopPropagation(),window.addEventListener("click",this.onWindowClick)};closeModal=()=>{this.dialog.open&&(this.dialog.close(),window.removeEventListener("click",this.onWindowClick))}}customElements.define("site-search",C);export{p as H,x as a,B as b,H as e,V as i,M as m,i as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/building-gpu-service-1.TVweo2r9.js","_astro/astro/assets-service.1mn5GyWb.js","_astro/building-gpu-service-2.MjknqNUz.js","_astro/building-gpu-service-3.2NCT2qX1.js","_astro/ceph-mds.FeTpUBWq.js","_astro/golang-http-url.RDeTyEoT.js","_astro/reduce-image-size.0cilRU0f.js","_astro/ui-core.jIv1WI5U.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}