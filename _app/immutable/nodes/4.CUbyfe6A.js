const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/CDLitPUN.js","../chunks/BUZsx2G4.js","../chunks/BIYjCGev.js","../assets/markdown.BPWJwfct.css","../assets/vendor.z57soX09.css"])))=>i.map(i=>d[i]);
import{i as Rt,P as Vt,t as B,B as rt,a as At}from"../chunks/fgFC8YNd.js";import{ac as Ot,p as nt,a as at,i as dt,f as R,a9 as xt,e as u,x as G,j as a,r,B as d,a1 as Ct,t as et,n as St,z as i,y as n,h,D,a2 as Tt,a3 as q,T as M,d as lt,ad as tt,w as it,K as Ut,s as ut,g as ct,_ as E,o as It,V as Wt,u as Ft,m as Bt,ae as Mt,W as qt,af as zt}from"../chunks/BUZsx2G4.js";import{F as L,d as _t,e as bt,g as wt,i as Ht,c as kt,f as Kt,j as Nt,h as ft}from"../chunks/DoKYny_C.js";import{W as vt}from"../chunks/BOj7U4Z2.js";const Gt=async({url:y,fetch:_})=>{const t=new Vt,e=y.pathname.split("/").slice(-1)[0],l=Rt.find(o=>o.id===e);if(l===void 0)throw Ot(404,"Project not found");return{project:l,projectService:t,fetch:_}},ge=Object.freeze(Object.defineProperty({__proto__:null,load:Gt},Symbol.toStringTag,{value:"Module"})),Jt=(y,_)=>{const t=new _.Renderer;return t.heading=(e,l)=>`<h${l} class="my-4 font-cascadia-mono dark:text-white">${e}</h${l}>`,t.paragraph=e=>`<span class="text-slate-600 dark:text-slate-300 mb-2">${e}</span><br>`,t.strong=e=>`<span class="font-bold text-black dark:text-white">${e}</span>`,t.list=(e,l)=>{const o=l?"ol":"ul";return'<div class="my-4"><'+o+`start="0">
`+e+"</"+o+`></div>
`},t.listitem=e=>`<li class="mb-2">${e}</li>`,t.image=(e,l,o)=>`<img class="my-4" src=${e} alt=${l??o} />`,t.table=(e,l)=>(l&&(l=`<tbody>${l}</tbody>`),`<table class="border-collapse border border-slate-500">
<thead>
`+e+`</thead>
`+l+`</table>
`),t.tablecell=(e,l)=>{const o=l.header?"th":"td";return(l.align?`<${o} align="${l.align}" class="border-collapse border border-slate-500 px-4 py-2">`:`<${o} class="border-collapse border border-slate-500 px-4 py-2">`)+e+`</${o}>
`},t.link=(e,l,o)=>{if(e===null)return o;(!e.startsWith("http")||e.startsWith("./"))&&(e=new URL(e,y).toString());let b='<a href="'+e+'"';return l&&(b+=' title="'+l+'"'),b+=' class="text-blue-500 dark:text-sky-500 hover:text-blue-300 dark:hover:text-sky-300 hover:underline">'+o+"</a>",b},t.codespan=e=>`<code class="bg-slate-200 dark:bg-slate-600 px-1.5 py-0.5 break-all rounded-md inline-block text-text dark:text-slate-50">${e}</code>`,t.html=(e,l)=>{var o,b;if(e.includes("<img")){const x=/src="([^"]+?)"/g,$=e.match(x)??[];for(const v of $){const g=(o=v.match(/src="([^"]+?)"/))==null?void 0:o[1];if(g&&(!g.startsWith("http")||g.startsWith("./"))){const c=new URL(g,y).toString();e=e.replace(v,`src="${c}"`)}}}if(e.includes("href=")){const x=/href="([^"]+?)"/g,$=e.match(x)??[];for(const v of $){const g=(b=v.match(/href="([^"]+?)"/))==null?void 0:b[1];if(g&&(!g.startsWith("http")||g.startsWith("./"))){const c=new URL(g,y).toString();e=e.replace(v,`href="${c}"`)}}}return`<div class="${l?"block":"inline"} my-5">${e}</div>`},t.blockquote=e=>'<blockquote class="my-4 py-4 border-l-4 dark:border-slate-600 pl-4 bg-slate-100 dark:bg-slate-700">'+e+`</blockquote>
`,t.hr=()=>'<hr class="my-4 border-slate-500" />',t};var Qt=R(`<style lang="postcss">.markdown-alert {

    margin-top: 1rem;

    margin-bottom: 1rem;

    margin-left: -0.5rem;

    border-left-width: 4px;

    --tw-bg-opacity: 1;

    background-color: rgb(241 245 249 / var(--tw-bg-opacity, 1));

    padding-top: 1rem;

    padding-bottom: 1rem;

    padding-left: 1rem
}

.markdown-alert:is(.dark *) {

    --tw-bg-opacity: 1;

    background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1))
}

    .markdown-alert-title {

    display: flex;

    align-items: center;

    gap: 0.5rem;

    --tw-text-opacity: 1;

    color: rgb(71 85 105 / var(--tw-text-opacity, 1))
}

    .markdown-alert-title:is(.dark *) {

    --tw-text-opacity: 1;

    color: rgb(203 213 225 / var(--tw-text-opacity, 1));

    outline-color: #cbd5e1
}

    .markdown-alert-title > svg {

    fill: #475569
}

    .markdown-alert-title > svg:is(.dark *) {

    fill: #cbd5e1
}

    .markdown-alert-note {

    --tw-border-opacity: 1;

    border-color: rgb(59 130 246 / var(--tw-border-opacity, 1));

    --tw-bg-opacity: 1;

    background-color: rgb(239 246 255 / var(--tw-bg-opacity, 1))
}

    .markdown-alert-note > .markdown-alert-title {

    --tw-text-opacity: 1;

    color: rgb(59 130 246 / var(--tw-text-opacity, 1))
}

    .markdown-alert-note > .markdown-alert-title > svg {

    fill: #3b82f6
}

    .markdown-alert-tip {

    --tw-border-opacity: 1;

    border-color: rgb(34 197 94 / var(--tw-border-opacity, 1));

    --tw-bg-opacity: 1;

    background-color: rgb(240 253 244 / var(--tw-bg-opacity, 1))
}

    .markdown-alert-tip > .markdown-alert-title {

    --tw-text-opacity: 1;

    color: rgb(34 197 94 / var(--tw-text-opacity, 1))
}

    .markdown-alert-tip > .markdown-alert-title > svg {

    fill: #22c55e
}

    .markdown-alert-important {

    --tw-border-opacity: 1;

    border-color: rgb(168 85 247 / var(--tw-border-opacity, 1));

    --tw-bg-opacity: 1;

    background-color: rgb(250 245 255 / var(--tw-bg-opacity, 1))
}

    .markdown-alert-important > .markdown-alert-title {

    --tw-text-opacity: 1;

    color: rgb(168 85 247 / var(--tw-text-opacity, 1))
}

    .markdown-alert-important > .markdown-alert-title > svg {

    fill: #a855f7
}

    .markdown-alert-warning {

    --tw-border-opacity: 1;

    border-color: rgb(234 179 8 / var(--tw-border-opacity, 1));

    --tw-bg-opacity: 1;

    background-color: rgb(254 252 232 / var(--tw-bg-opacity, 1))
}

    .markdown-alert-warning > .markdown-alert-title {

    --tw-text-opacity: 1;

    color: rgb(234 179 8 / var(--tw-text-opacity, 1))
}

    .markdown-alert-warning > .markdown-alert-title > svg {

    fill: #eab308
}

    .markdown-alert-caution {

    --tw-border-opacity: 1;

    border-color: rgb(239 68 68 / var(--tw-border-opacity, 1));

    --tw-bg-opacity: 1;

    background-color: rgb(254 242 242 / var(--tw-bg-opacity, 1))
}

    .markdown-alert-caution > .markdown-alert-title {

    --tw-text-opacity: 1;

    color: rgb(239 68 68 / var(--tw-text-opacity, 1))
}

    .markdown-alert-caution > .markdown-alert-title > svg {

    fill: #ef4444
}</style>`),Xt=R("<p> </p>"),Yt=R('<div class="text-slate-600 dark:text-slate-300 markdown-content"><!></div>'),Zt=R('<div class="dark:text-white font-cascadia-mono font-extrabold text-text text-4xl md:text-5xl lg:text-6xl"><!>Failed to load README</div> <p class="text-red-500 dark:text-red-400"> </p>',1),te=R('<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16"> </h1> <div class="w-full grid grid-cols-1 grid-flow-row grid-rows-2 lg:flex lg:flex-row-reverse lg:justify-between gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full border flex items-center"><img class="w-full" alt="Preview"/></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white font-space-grotesk"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!> <!></div></div></div> <hr class="mt-16 border border-slate-700 dark:border-slate-300"/> <a class="hover:underline"><span class="dark:text-white block my-2 md:text-lg lg:text-xl font-medium"><!></span></a> <hr class="mb-16 md:mb-24 border border-slate-700 dark:border-slate-300"/> <div class="mb-24"><!></div></div>'),ee=R('<section class="mt-16"><!></section> <div class="markdown-content hidden"><a href="/">_</a></div>',1);function re(y,_){nt(_,!1);let t=at(_,"project",8),e=at(_,"markdownPromise",8);const l=async()=>{const[{Octokit:v},{marked:g},{default:c},{baseUrl:j},{markedEmoji:V},{markedHighlight:P},{default:p},{default:w},{default:U},{default:A},{default:I},{default:C},{default:W}]=await Promise.all([E(()=>import("../chunks/CDLitPUN.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.m),__vite__mapDeps([2,3]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.i),__vite__mapDeps([2,3]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.a),__vite__mapDeps([2,3]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.b),__vite__mapDeps([2,3]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.c),__vite__mapDeps([2,3]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.d),__vite__mapDeps([2,3]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.j),__vite__mapDeps([2,3]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.t),__vite__mapDeps([2,3]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.x),__vite__mapDeps([2,3]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.e),__vite__mapDeps([2,3]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.f),__vite__mapDeps([2,3]),import.meta.url),E(()=>import("../chunks/BIYjCGev.js").then(s=>s.h),__vite__mapDeps([2,3]),import.meta.url)]);p.registerLanguage("javascript",w),p.registerLanguage("js",w),p.registerLanguage("typescript",U),p.registerLanguage("ts",U),p.registerLanguage("xml",A),p.registerLanguage("html",A),p.registerLanguage("css",I),p.registerLanguage("bash",C),p.registerLanguage("sh",C),p.registerLanguage("json",W);const O=await new v().rest.emojis.get().catch(()=>null),z=O==null?void 0:O.data;return g.use({renderer:Jt(t().baseUrl,g)},j(t().baseUrl),P({langPrefix:"hljs language-",highlight(s,T){const H=p.getLanguage(T)?T:"plaintext";return p.highlight(s,{language:H}).value}}),c(),V({emojis:z??{}}))},o=t().tags.map(v=>Object.prototype.hasOwnProperty.call(B,v)?{key:v,name:v}:{key:"default",name:v});dt();var b=ee();xt("12zqicn",v=>{var g=Qt();u(v,g)});var x=G(b),$=a(x);vt($,{children:(v,g)=>{var c=te(),j=a(c),V=a(j,!0);r(j);var P=d(j,2),p=a(P),w=a(p);r(p);var U=d(p,2),A=a(U),I=a(A,!0);r(A);var C=d(A,2),W=a(C),O=a(W);L(O,{get icon(){return _t}});var z=d(O);r(W);var s=d(W,2),T=a(s);L(T,{get icon(){return bt}});var H=d(T);r(s);var J=d(s,2),K=a(J);L(K,{get icon(){return wt}});var ot=d(K);r(J),r(C);var F=d(C,2);Ct(F,5,()=>o,Tt,(f,m)=>{var k=Xt(),S=a(k);r(k),et(()=>{St(k,1,`${n(B),h(m),i(()=>B[h(m).key].bg)??""} ${n(B),h(m),i(()=>B[h(m).key].border)??""} ${n(B),h(m),i(()=>B[h(m).key].text)??""}
								dark:bg-slate-800 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900`),D(S,`#${h(m),i(()=>h(m).name)??""}`)}),u(f,k)}),r(F);var Q=d(F,2),X=a(Q);rt(X,{get href(){return n(t()),i(()=>t().repositoryUrl)},target:"_blank",rel:"noreferrer",noDarkVariant:!1,children:(f,m)=>{q();var k=M("Source code");u(f,k)},$$slots:{default:!0,icon:(f,m)=>{L(f,{get icon(){return Ht},slot:"icon"})}}});var ht=d(X,2);{var yt=f=>{rt(f,{get href(){return n(t()),i(()=>t().livePreviewUrl)},target:"_blank",rel:"noreferrer",noDarkVariant:!1,variant:"white",children:(m,k)=>{q();var S=M("Live preview");u(m,S)},$$slots:{default:!0,icon:(m,k)=>{L(m,{get icon(){return Kt},slot:"icon"})}}})};lt(ht,f=>{n(t()),i(()=>t().hasLivePreview&&t().livePreviewUrl)&&f(yt)})}r(Q),r(U),r(P);var Y=d(P,4),mt=a(Y),$t=a(mt);tt($t,e,f=>{var m=M("Loading...");u(f,m)},f=>{var m=M("README.md");u(f,m)},f=>{var m=M("Error!");u(f,m)}),r(mt),r(Y);var pt=d(Y,4),jt=a(pt);tt(jt,e,null,(f,m)=>{var k=Yt(),S=a(k);tt(S,()=>i(l),null,(st,N)=>{var Z=it(),Pt=G(Z);tt(Pt,()=>(n(h(N)),n(h(m)),i(()=>h(N)(h(m)??"",{gfm:!0}))),null,(Et,Lt)=>{var gt=it(),Dt=G(gt);Ut(Dt,()=>h(Lt)),u(Et,gt)}),u(st,Z)}),r(k),u(f,k)},(f,m)=>{var k=Zt(),S=G(k),st=a(S);L(st,{get icon(){return kt}}),q(),r(S);var N=d(S,2),Z=a(N,!0);r(N),et(()=>D(Z,h(m))),u(f,k)}),r(pt),r(c),et(()=>{D(V,(n(t()),i(()=>t().name))),ut(w,"src",(n(t()),i(()=>t().imageUrl))),D(I,(n(t()),i(()=>t().description))),D(z,` ${n(t()),i(()=>t().starsCount)??""}
              ${n(t()),i(()=>(t().starsCount??0)<=1?"Star":"Stars")??""}`),D(H,` ${n(t()),i(()=>t().forksCount)??""}
              ${n(t()),i(()=>(t().forksCount??0)<=1?"Fork":"Forks")??""}`),D(ot,` ${n(t()),i(()=>t().downloadsCount)??""}
              ${n(t()),i(()=>(t().downloadsCount??0)<=1?"Download":"Downloads")??""}`),ut(Y,"href",(n(t()),i(()=>t().readmeUrl)))}),u(v,c)},$$slots:{default:!0}}),r(x),q(2),u(y,b),ct()}var ae=R('<div class="mt-16 w-full mb-32"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">Error!</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-red-600 dark:bg-red-400 aspect-[2/1] flex p-2"><div class="m-auto inline-flex flex-wrap gap-2 justify-center items-center"><div class="text-center text-white dark:text-text font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><!></div> <div class="font-cascadia-mono font-extrabold text-center text-white dark:text-text text-2xl md:text-3xl lg:text-4xl"> </div></div></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"><p class="dark:bg-slate-800 border-slate-900 dark:text-slate-300 dark:border-slate-300 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2">#error</p></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>'),oe=R('<section class="mt-16"><!></section>');function se(y,_){nt(_,!1);let t=at(_,"project",8);dt();var e=oe(),l=a(e);vt(l,{children:(o,b)=>{var x=ae(),$=d(a(x),2),v=a($),g=a(v),c=a(g),j=a(c);L(j,{get icon(){return kt}}),r(c);var V=d(c,2),P=a(V,!0);r(V),r(g),r(v);var p=d(v,2),w=a(p),U=a(w,!0);r(w);var A=d(w,2),I=a(A),C=a(I);L(C,{get icon(){return _t}});var W=d(C);r(I);var O=d(I,2),z=a(O);L(z,{get icon(){return bt}});var s=d(z);r(O);var T=d(O,2),H=a(T);L(H,{get icon(){return wt}});var J=d(H);r(T),r(A);var K=d(A,4),ot=a(K);rt(ot,{href:"/",noDarkVariant:!1,variant:"disabled",children:(F,Q)=>{q();var X=M("Back");u(F,X)},$$slots:{default:!0,icon:(F,Q)=>{L(F,{get icon(){return Nt},slot:"icon"})}}}),r(K),r(p),r($),r(x),et(()=>{D(P,(n(t()),i(()=>t().description))),D(U,(n(t()),i(()=>t().description))),D(W,` ${n(t()),i(()=>t().starsCount??"Unknown")??""}
              ${n(t()),i(()=>(t().starsCount??0)<=1?"Star":"Stars")??""}`),D(s,` ${n(t()),i(()=>t().forksCount??"Unknown")??""}
              ${n(t()),i(()=>(t().forksCount??0)<=1?"Fork":"Forks")??""}`),D(J,` ${n(t()),i(()=>t().downloadsCount??"Unknown")??""}
              ${n(t()),i(()=>(t().downloadsCount??0)<=1?"Download":"Downloads")??""}`)}),u(o,x)},$$slots:{default:!0}}),r(e),u(y,e),ct()}var le=R(`<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 animate-bounce">Loading...</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-primary animate-pulse aspect-[2/1] flex items-center"><div class="text-center m-auto text-white dark:text-text inline-flex gap-2 animate-bounce
            font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><span class="animate-spin"><!></span>Loading...</div></div> <div class="w-full"><p class="dark:text-slate-300">Fetching data...</p> <div class="my-4 md:my-6 lg:my-8 flex gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>`),ie=R('<section class="mt-16"><!></section>');function ne(y){var _=ie(),t=a(_);vt(t,{children:(e,l)=>{var o=le(),b=d(a(o),2),x=a(b),$=a(x),v=a($),g=a(v);L(g,{get icon(){return ft}}),r(v),q(),r($),r(x);var c=d(x,2),j=d(a(c),2),V=a(j);rt(V,{noDarkVariant:!1,variant:"disabled",children:(P,p)=>{q();var w=M("Loading");u(P,w)},$$slots:{default:!0,icon:(P,p)=>{L(P,{get icon(){return ft},slot:"icon",class:"animate-spin"})}}}),r(j),r(c),r(b),r(o),u(e,o)},$$slots:{default:!0}}),r(_),u(y,_)}var de=R("<main><!></main>");function ue(y,_){nt(_,!1);const t=()=>qt(At,"$projectDetail",e),[e,l]=Wt();let o=at(_,"data",8),b=Bt();It(()=>{o().projectService.fetchProjectDetail({project:o().project,fetch:o().fetch}),Ft(b,o().project.readmeUrl?o().projectService.getProjectReadme({project:o().project,fetch:o().fetch}):new Promise(c=>c("<h2>No README file</h2>")))}),dt();var x=de();xt("bwlt63",c=>{Mt(()=>{zt.title=(n(o()),i(()=>o().project.name)??"")})});var $=a(x);{var v=c=>{ne(c)},g=c=>{var j=it(),V=G(j);{var P=w=>{re(w,{get project(){return t()},get markdownPromise(){return h(b)}})},p=w=>{se(w,{get project(){return t()}})};lt(V,w=>{t(),i(()=>t().name!=="error"&&t().name!=="limit")?w(P):w(p,!1)},!0)}u(c,j)};lt($,c=>{t()?c(g,!1):c(v)})}r(x),u(y,x),ct(),l()}export{ue as component,ge as universal};
