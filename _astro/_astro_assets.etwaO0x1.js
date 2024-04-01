import{c as y,m as ht,_ as dt}from"./hoisted.S6KN3Rcg.js";import{A as u,a as H,b as M,E as z,c as D,r as Q,i as U,F as C,d as F,e as gt,D as ft,f as mt,g as tt}from"./astro/assets-service.3__6wVx0.js";import{c as et,r as k,m as st}from"./render-template.5GvZ_d9G.js";const ut="4.5.12";function wt(){return e=>{if(typeof e=="string")throw new u({...H,message:H.message(JSON.stringify(e))});let s=[...Object.values(e)];if(s.length===0)throw new u({...M,message:M.message(JSON.stringify(e))});return Promise.all(s.map(r=>r()))}}function rt(t){return{site:t?new URL(t):void 0,generator:`Astro v${ut}`,glob:wt()}}function v(t={},e,{class:s}={}){let r="";s&&(typeof t.class<"u"?t.class+=` ${s}`:typeof t["class:list"]<"u"?t["class:list"]=[t["class:list"],s]:t.class=s);for(const[i,n]of Object.entries(t))r+=y(n,i,!0);return ht(r)}const pt=new TextDecoder,c=(t,e=0,s=t.length)=>pt.decode(t.slice(e,s)),E=(t,e=0,s=t.length)=>t.slice(e,s).reduce((r,i)=>r+("0"+i.toString(16)).slice(-2),""),G=(t,e=0)=>{const s=t[e]+t[e+1]*256;return s|(s&2**15)*131070},A=(t,e=0)=>t[e]*2**8+t[e+1],d=(t,e=0)=>t[e]+t[e+1]*2**8,j=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16,It=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16+(t[e+3]<<24),l=(t,e=0)=>t[e]*2**24+t[e+1]*2**16+t[e+2]*2**8+t[e+3],I=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16+t[e+3]*2**24,vt={readUInt16BE:A,readUInt16LE:d,readUInt32BE:l,readUInt32LE:I};function g(t,e,s,r){s=s||0;const i=r?"BE":"LE",n="readUInt"+e+i;return vt[n](t,s)}function Et(t,e){if(t.length-e<4)return;const s=l(t,e);if(!(t.length-e<s))return{name:c(t,4+e,8+e),offset:e,size:s}}function p(t,e,s){for(;s<t.length;){const r=Et(t,s);if(!r)break;if(r.name===e)return r;s+=r.size}}const bt={validate:t=>c(t,0,2)==="BM",calculate:t=>({height:Math.abs(It(t,22)),width:I(t,18)})},yt=1,Tt=6,St=16;function Y(t,e){const s=t[e];return s===0?256:s}function V(t,e){const s=Tt+e*St;return{height:Y(t,s+1),width:Y(t,s)}}const it={validate(t){const e=d(t,0),s=d(t,4);return e!==0||s===0?!1:d(t,2)===yt},calculate(t){const e=d(t,4),s=V(t,0);if(e===1)return s;const r=[s];for(let i=1;i<e;i+=1)r.push(V(t,i));return{height:s.height,images:r,width:s.width}}},At=2,_t={validate(t){const e=d(t,0),s=d(t,4);return e!==0||s===0?!1:d(t,2)===At},calculate:t=>it.calculate(t)},Pt={validate:t=>I(t,0)===542327876,calculate:t=>({height:I(t,12),width:I(t,16)})},xt=/^GIF8[79]a/,Ft={validate:t=>xt.test(c(t,0,6)),calculate:t=>({height:d(t,8),width:d(t,6)})},nt={avif:"avif",mif1:"heif",msf1:"heif",heic:"heic",heix:"heic",hevc:"heic",hevx:"heic"};function kt(t,e,s){let r={};for(let i=e;i<=s;i+=4){const n=c(t,i,i+4);n in nt&&(r[n]=1)}if("avif"in r)return"avif";if("heic"in r||"heix"in r||"hevc"in r||"hevx"in r)return"heic";if("mif1"in r||"msf1"in r)return"heif"}const Nt={validate(t){const e=c(t,4,8),s=c(t,8,12);return e==="ftyp"&&s in nt},calculate(t){const e=p(t,"meta",0),s=e&&p(t,"iprp",e.offset+12),r=s&&p(t,"ipco",s.offset+8),i=r&&p(t,"ispe",r.offset+8);if(i)return{height:l(t,i.offset+16),width:l(t,i.offset+12),type:kt(t,8,e.offset)};throw new TypeError("Invalid HEIF, no size found")}},Ot=8,Lt=4,$t=4,Rt={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function J(t,e){const s=e+$t;return[c(t,e,s),l(t,s)]}function X(t){const e=Rt[t];return{width:e,height:e,type:t}}const Bt={validate:t=>c(t,0,4)==="icns",calculate(t){const e=t.length,s=l(t,Lt);let r=Ot,i=J(t,r),n=X(i[0]);if(r+=i[1],r===s)return n;const a={height:n.height,images:[n],width:n.width};for(;r<s&&r<e;)i=J(t,r),n=X(i[0]),r+=i[1],a.images.push(n);return a}},Ht={validate:t=>E(t,0,4)==="ff4fff51",calculate:t=>({height:l(t,12),width:l(t,8)})},Mt={validate(t){if(l(t,4)!==1783636e3||l(t,0)<1)return!1;const e=p(t,"ftyp",0);return e?l(t,e.offset+4)===1718909296:!1},calculate(t){const e=p(t,"jp2h",0),s=e&&p(t,"ihdr",e.offset+8);if(s)return{height:l(t,s.offset+8),width:l(t,s.offset+12)};throw new TypeError("Unsupported JPEG 2000 format")}},zt="45786966",Dt=2,N=6,Ut=2,Ct="4d4d",Gt="4949",Z=12,jt=2;function Yt(t){return E(t,2,6)===zt}function Vt(t,e){return{height:A(t,e),width:A(t,e+2)}}function Jt(t,e){const r=N+8,i=g(t,16,r,e);for(let n=0;n<i;n++){const a=r+jt+n*Z,f=a+Z;if(a>t.length)return;const h=t.slice(a,f);if(g(h,16,0,e)===274)return g(h,16,2,e)!==3||g(h,32,4,e)!==1?void 0:g(h,16,8,e)}}function Xt(t,e){const s=t.slice(Dt,e),r=E(s,N,N+Ut),i=r===Ct;if(i||r===Gt)return Jt(s,i)}function Zt(t,e){if(e>t.length)throw new TypeError("Corrupt JPG, exceeded buffer limits")}const Kt={validate:t=>E(t,0,2)==="ffd8",calculate(t){t=t.slice(4);let e,s;for(;t.length;){const r=A(t,0);if(t[r]!==255){t=t.slice(1);continue}if(Yt(t)&&(e=Xt(t,r)),Zt(t,r),s=t[r+1],s===192||s===193||s===194){const i=Vt(t,r+5);return e?{height:i.height,orientation:e,width:i.width}:i}t=t.slice(r+2)}throw new TypeError("Invalid JPG, no size found")}},Wt={validate:t=>{const e=c(t,1,7);return["KTX 11","KTX 20"].includes(e)},calculate:t=>{const e=t[5]===49?"ktx":"ktx2",s=e==="ktx"?36:20;return{height:I(t,s+4),width:I(t,s),type:e}}},qt=`PNG\r

`,Qt="IHDR",K="CgBI",te={validate(t){if(qt===c(t,1,8)){let e=c(t,12,16);if(e===K&&(e=c(t,28,32)),e!==Qt)throw new TypeError("Invalid PNG");return!0}return!1},calculate(t){return c(t,12,16)===K?{height:l(t,36),width:l(t,32)}:{height:l(t,20),width:l(t,16)}}},W={P1:"pbm/ascii",P2:"pgm/ascii",P3:"ppm/ascii",P4:"pbm",P5:"pgm",P6:"ppm",P7:"pam",PF:"pfm"},q={default:t=>{let e=[];for(;t.length>0;){const s=t.shift();if(s[0]!=="#"){e=s.split(" ");break}}if(e.length===2)return{height:parseInt(e[1],10),width:parseInt(e[0],10)};throw new TypeError("Invalid PNM")},pam:t=>{const e={};for(;t.length>0;){const s=t.shift();if(s.length>16||s.charCodeAt(0)>128)continue;const[r,i]=s.split(" ");if(r&&i&&(e[r.toLowerCase()]=parseInt(i,10)),e.height&&e.width)break}if(e.height&&e.width)return{height:e.height,width:e.width};throw new TypeError("Invalid PAM")}},ee={validate:t=>c(t,0,2)in W,calculate(t){const e=c(t,0,2),s=W[e],r=c(t,3).split(/[\r\n]+/);return(q[s]||q.default)(r)}},se={validate:t=>c(t,0,4)==="8BPS",calculate:t=>({height:l(t,14),width:l(t,18)})},ot=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,S={height:/\sheight=(['"])([^%]+?)\1/,root:ot,viewbox:/\sviewBox=(['"])(.+?)\1/i,width:/\swidth=(['"])([^%]+?)\1/},x=2.54,at={in:96,cm:96/x,em:16,ex:8,m:96/x*100,mm:96/x/10,pc:96/72/12,pt:96/72,px:1},re=new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(at).join("|")})?$`);function _(t){const e=re.exec(t);if(e)return Math.round(Number(e[1])*(at[e[2]]||1))}function ie(t){const e=t.split(" ");return{height:_(e[3]),width:_(e[2])}}function ne(t){const e=t.match(S.width),s=t.match(S.height),r=t.match(S.viewbox);return{height:s&&_(s[2]),viewbox:r&&ie(r[2]),width:e&&_(e[2])}}function oe(t){return{height:t.height,width:t.width}}function ae(t,e){const s=e.width/e.height;return t.width?{height:Math.floor(t.width/s),width:t.width}:t.height?{height:t.height,width:Math.floor(t.height*s)}:{height:e.height,width:e.width}}const ce={validate:t=>ot.test(c(t,0,1e3)),calculate(t){const e=c(t).match(S.root);if(e){const s=ne(e[0]);if(s.width&&s.height)return oe(s);if(s.viewbox)return ae(s,s.viewbox)}throw new TypeError("Invalid SVG")}},le={validate(t){return d(t,0)===0&&d(t,4)===0},calculate(t){return{height:d(t,14),width:d(t,12)}}};function he(t,e){const s=g(t,32,4,e);return t.slice(s+2)}function de(t,e){const s=g(t,16,8,e);return(g(t,16,10,e)<<16)+s}function ge(t){if(t.length>24)return t.slice(12)}function fe(t,e){const s={};let r=t;for(;r&&r.length;){const i=g(r,16,0,e),n=g(r,16,2,e),a=g(r,32,4,e);if(i===0)break;a===1&&(n===3||n===4)&&(s[i]=de(r,e)),r=ge(r)}return s}function me(t){const e=c(t,0,2);if(e==="II")return"LE";if(e==="MM")return"BE"}const ue=["49492a00","4d4d002a"],we={validate:t=>ue.includes(E(t,0,4)),calculate(t){const e=me(t)==="BE",s=he(t,e),r=fe(s,e),i=r[256],n=r[257];if(!i||!n)throw new TypeError("Invalid Tiff. Missing tags");return{height:n,width:i}}};function pe(t){return{height:1+j(t,7),width:1+j(t,4)}}function Ie(t){return{height:1+((t[4]&15)<<10|t[3]<<2|(t[2]&192)>>6),width:1+((t[2]&63)<<8|t[1])}}function ve(t){return{height:G(t,8)&16383,width:G(t,6)&16383}}const Ee={validate(t){const e=c(t,0,4)==="RIFF",s=c(t,8,12)==="WEBP",r=c(t,12,15)==="VP8";return e&&s&&r},calculate(t){const e=c(t,12,16);if(t=t.slice(20,30),e==="VP8X"){const r=t[0],i=(r&192)===0,n=(r&1)===0;if(i&&n)return pe(t);throw new TypeError("Invalid WebP")}if(e==="VP8 "&&t[0]!==47)return ve(t);const s=E(t,3,6);if(e==="VP8L"&&s!=="9d012a")return Ie(t);throw new TypeError("Invalid WebP")}},P=new Map([["bmp",bt],["cur",_t],["dds",Pt],["gif",Ft],["heif",Nt],["icns",Bt],["ico",it],["j2c",Ht],["jp2",Mt],["jpg",Kt],["ktx",Wt],["png",te],["pnm",ee],["psd",se],["svg",ce],["tga",le],["tiff",we],["webp",Ee]]),be=Array.from(P.keys()),ye=new Map([[56,"psd"],[66,"bmp"],[68,"dds"],[71,"gif"],[73,"tiff"],[77,"tiff"],[82,"webp"],[105,"icns"],[137,"png"],[255,"jpg"]]);function Te(t){const e=t[0],s=ye.get(e);return s&&P.get(s).validate(t)?s:be.find(r=>P.get(r).validate(t))}const Se={disabledTypes:[]};function Ae(t){const e=Te(t);if(typeof e<"u"){if(Se.disabledTypes.indexOf(e)>-1)throw new TypeError("disabled file type: "+e);const s=P.get(e).calculate(t);if(s!==void 0)return s.type=s.type??e,s}throw new TypeError("unsupported file type: "+e)}async function _e(t){const e=await fetch(t);if(!e.body||!e.ok)throw new Error("Failed to fetch image");const s=e.body.getReader();let r,i,n=new Uint8Array;for(;!r;){const a=await s.read();if(r=a.done,r)break;if(a.value){i=a.value;let f=new Uint8Array(n.length+i.length);f.set(n,0),f.set(i,n.length),n=f;try{const h=Ae(n);if(h)return await s.cancel(),h}catch{}}}throw new Error("Failed to parse the size")}async function Pe(){if(!globalThis?.astroAsset?.imageService){const{default:t}=await dt(()=>import("./astro/assets-service.3__6wVx0.js").then(e=>e.n),__vite__mapDeps([])).catch(e=>{const s=new u(mt);throw s.cause=e,s});return globalThis.astroAsset||(globalThis.astroAsset={}),globalThis.astroAsset.imageService=t,t}return globalThis.astroAsset.imageService}async function xe(t,e){if(!t||typeof t!="object")throw new u({...z,message:z.message(JSON.stringify(t))});if(typeof t.src>"u")throw new u({...D,message:D.message(t.src,"undefined",JSON.stringify(t))});const s=await Pe(),r={...t,src:await Q(t.src)};if(t.inferSize&&U(r.src))try{const o=await _e(r.src);r.width??=o.width,r.height??=o.height,delete r.inferSize}catch{throw new u({...C,message:C.message(r.src)})}const i=F(r.src)?r.src.fsPath:void 0,n=F(r.src)?r.src.clone??r.src:r.src;r.src=n;const a=s.validateOptions?await s.validateOptions(r,e):r,f=s.getSrcSet?await s.getSrcSet(a,e):[];let h=await s.getURL(a,e),w=await Promise.all(f.map(async o=>({transform:o.transform,url:await s.getURL(o.transform,e),descriptor:o.descriptor,attributes:o.attributes})));if(gt(s)&&globalThis.astroAsset.addStaticImage&&!(U(a.src)&&h===a.src)){const o=s.propertiesToHash??ft;h=globalThis.astroAsset.addStaticImage(a,o,i),w=f.map(m=>({transform:m.transform,url:globalThis.astroAsset.addStaticImage(m.transform,o,i),descriptor:m.descriptor,attributes:m.attributes}))}return{rawOptions:r,options:a,src:h,srcSet:{values:w,attribute:w.map(o=>`${o.url} ${o.descriptor}`).join(", ")},attributes:s.getHTMLAttributes!==void 0?await s.getHTMLAttributes(a,e):{}}}const Fe=rt("https://astro-cactus.chriswilliams.dev/"),ke=et(async(t,e,s)=>{const r=t.createAstro(Fe,e,s);r.self=ke;const i=r.props;if(i.alt===void 0||i.alt===null)throw new u(tt);typeof i.width=="string"&&(i.width=parseInt(i.width)),typeof i.height=="string"&&(i.height=parseInt(i.height));const n=await O(i),a={};return n.srcSet.values.length>0&&(a.srcset=n.srcSet.attribute),k`${st()}<img${y(n.src,"src")}${v(a)}${v(n.attributes)}>`},"/home/runner/work/lokiwager.github.io/lokiwager.github.io/node_modules/.pnpm/astro@4.5.12_typescript@5.3.3/node_modules/astro/components/Image.astro",void 0),Ne=rt("https://astro-cactus.chriswilliams.dev/"),Oe=et(async(t,e,s)=>{const r=t.createAstro(Ne,e,s);r.self=Oe;const i=["webp"],n="png",a=["gif","svg","jpg","jpeg"],{formats:f=i,pictureAttributes:h={},fallbackFormat:w,...o}=r.props;if(o.alt===void 0||o.alt===null)throw new u(tt);const m=await Q(o.src),ct=await Promise.all(f.map(async B=>await O({...o,src:m,format:B,widths:o.widths,densities:o.densities})));let L=w??n;!w&&F(m)&&m.format in a&&(L=m.format);const T=await O({...o,format:L,widths:o.widths,densities:o.densities}),$={},R={};return o.sizes&&(R.sizes=o.sizes),T.srcSet.values.length>0&&($.srcset=T.srcSet.attribute),k`${st()}<picture${v(h)}> ${Object.entries(ct).map(([B,b])=>{const lt=o.densities||!o.densities&&!o.widths?`${b.src}${b.srcSet.values.length>0?", "+b.srcSet.attribute:""}`:b.srcSet.attribute;return k`<source${y(lt,"srcset")}${y("image/"+b.options.format,"type")}${v(R)}>`})} <img${y(T.src,"src")}${v($)}${v(T.attributes)}> </picture>`},"/home/runner/work/lokiwager.github.io/lokiwager.github.io/node_modules/.pnpm/astro@4.5.12_typescript@5.3.3/node_modules/astro/components/Picture.astro",void 0),Le={service:{entrypoint:"astro/assets/services/noop",config:{}},domains:["webmention.io"],remotePatterns:[]},O=async t=>await xe(t,Le);export{O as g,v as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
