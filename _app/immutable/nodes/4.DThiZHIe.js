const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/DeEruOPA.js","../chunks/DBQibWg5.js","../chunks/BIYjCGev.js","../assets/markdown.BPWJwfct.css","../assets/vendor.z57soX09.css"])))=>i.map(i=>d[i]);
import{i as Rt,P as Vt,t as B,a as At}from"../chunks/BleTf1Pn.js";import{ae as Ot,p as dt,a as at,i as ct,f as V,V as _t,e as u,x as K,j as a,r,B as d,a3 as Ct,t as G,n as St,z as s,y as n,h as $,D as R,a4 as Tt,Y as q,T as M,d as lt,af as rt,w as nt,K as Ut,s as J,g as vt,_ as L,o as It,aa as Wt,W as Ft,u as Bt,m as Mt,$ as qt,ab as zt}from"../chunks/DBQibWg5.js";import{F as D,g as xt,h as bt,i as wt,k as Ht,e as kt,b as Kt,f as Nt,j as ft}from"../chunks/Bbjd1QBn.js";import{B as ot}from"../chunks/DUxNMQiW.js";import{W as mt}from"../chunks/B_eAZefK.js";const Yt=async({url:j,fetch:x})=>{const t=new Vt,e=j.pathname.split("/").slice(-1)[0],l=Rt.find(o=>o.id===e);if(l===void 0)throw Ot(404,"Project not found");return{project:l,projectService:t,fetch:x}},fe=Object.freeze(Object.defineProperty({__proto__:null,load:Yt},Symbol.toStringTag,{value:"Module"})),Gt=(j,x)=>{const t=new x.Renderer;return t.heading=(e,l)=>`<h${l} class="my-4 font-cascadia-mono dark:text-white">${e}</h${l}>`,t.paragraph=e=>`<span class="text-slate-600 dark:text-slate-300 mb-2">${e}</span><br>`,t.strong=e=>`<span class="font-bold text-black dark:text-white">${e}</span>`,t.list=(e,l)=>{const o=l?"ol":"ul";return'<div class="my-4"><'+o+`start="0">
`+e+"</"+o+`></div>
`},t.listitem=e=>`<li class="mb-2">${e}</li>`,t.image=(e,l,o)=>`<img class="my-4" src=${e} alt=${l??o} />`,t.table=(e,l)=>(l&&(l=`<tbody>${l}</tbody>`),`<table class="border-collapse border border-slate-500">
<thead>
`+e+`</thead>
`+l+`</table>
`),t.tablecell=(e,l)=>{const o=l.header?"th":"td";return(l.align?`<${o} align="${l.align}" class="border-collapse border border-slate-500 px-4 py-2">`:`<${o} class="border-collapse border border-slate-500 px-4 py-2">`)+e+`</${o}>
`},t.link=(e,l,o)=>{if(e===null)return o;(!e.startsWith("http")||e.startsWith("./"))&&(e=new URL(e,j).toString());let b='<a href="'+e+'"';return l&&(b+=' title="'+l+'"'),b+=' class="text-blue-500 dark:text-sky-500 hover:text-blue-300 dark:hover:text-sky-300 hover:underline">'+o+"</a>",b},t.codespan=e=>`<code class="bg-slate-200 dark:bg-slate-600 px-1.5 py-0.5 break-all rounded-md inline-block text-text dark:text-slate-50">${e}</code>`,t.html=(e,l)=>{var o,b;if(e.includes("<img")){const _=/src="([^"]+?)"/g,P=e.match(_)??[];for(const v of P){const g=(o=v.match(/src="([^"]+?)"/))==null?void 0:o[1];if(g&&(!g.startsWith("http")||g.startsWith("./"))){const c=new URL(g,j).toString();e=e.replace(v,`src="${c}"`)}}}if(e.includes("href=")){const _=/href="([^"]+?)"/g,P=e.match(_)??[];for(const v of P){const g=(b=v.match(/href="([^"]+?)"/))==null?void 0:b[1];if(g&&(!g.startsWith("http")||g.startsWith("./"))){const c=new URL(g,j).toString();e=e.replace(v,`href="${c}"`)}}}return`<div class="${l?"block":"inline"} my-5">${e}</div>`},t.blockquote=e=>'<blockquote class="my-4 py-4 border-l-4 dark:border-slate-600 pl-4 bg-slate-100 dark:bg-slate-700">'+e+`</blockquote>
`,t.hr=()=>'<hr class="my-4 border-slate-500" />',t};var Jt=V(`<style lang="postcss">.markdown-alert {

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
}</style>`),Qt=V("<p> </p>"),Xt=V('<div class="text-slate-600 dark:text-slate-300 markdown-content"><!></div>'),Zt=V('<div class="dark:text-white font-cascadia-mono font-extrabold text-text text-4xl md:text-5xl lg:text-6xl"><!>Failed to load README</div> <p class="text-red-500 dark:text-red-400"> </p>',1),te=V('<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16"> </h1> <div class="w-full grid grid-cols-1 grid-flow-row grid-rows-2 lg:flex lg:flex-row-reverse lg:justify-between gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full border flex items-center"><img class="w-full" alt="Preview"/></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white font-space-grotesk"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!> <!></div></div></div> <hr class="mt-16 border border-slate-700 dark:border-slate-300"/> <a class="hover:underline"><span class="dark:text-white block my-2 md:text-lg lg:text-xl font-medium"><!></span></a> <hr class="mb-16 md:mb-24 border border-slate-700 dark:border-slate-300"/> <div class="mb-24"><!></div></div>'),ee=V('<section class="mt-16"><!></section> <div class="markdown-content hidden"><a href="/">_</a></div>',1);function re(j,x){dt(x,!1);let t=at(x,"project",8),e=at(x,"markdownPromise",8);const l=async()=>{const[{Octokit:v},{marked:g},{default:c},{baseUrl:k},{markedEmoji:E},{markedHighlight:h},{default:m},{default:w},{default:U},{default:A},{default:I},{default:C},{default:W}]=await Promise.all([L(()=>import("../chunks/DeEruOPA.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.m),__vite__mapDeps([2,3]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.i),__vite__mapDeps([2,3]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.a),__vite__mapDeps([2,3]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.b),__vite__mapDeps([2,3]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.c),__vite__mapDeps([2,3]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.d),__vite__mapDeps([2,3]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.j),__vite__mapDeps([2,3]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.t),__vite__mapDeps([2,3]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.x),__vite__mapDeps([2,3]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.e),__vite__mapDeps([2,3]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.f),__vite__mapDeps([2,3]),import.meta.url),L(()=>import("../chunks/BIYjCGev.js").then(i=>i.h),__vite__mapDeps([2,3]),import.meta.url)]);m.registerLanguage("javascript",w),m.registerLanguage("js",w),m.registerLanguage("typescript",U),m.registerLanguage("ts",U),m.registerLanguage("xml",A),m.registerLanguage("html",A),m.registerLanguage("css",I),m.registerLanguage("bash",C),m.registerLanguage("sh",C),m.registerLanguage("json",W);const O=await new v().rest.emojis.get().catch(()=>null),z=O==null?void 0:O.data;return g.use({renderer:Gt(t().baseUrl,g)},k(t().baseUrl),h({langPrefix:"hljs language-",highlight(i,T){const H=m.getLanguage(T)?T:"plaintext";return m.highlight(i,{language:H}).value}}),c(),E({emojis:z??{}}))},o=t().tags.map(v=>Object.prototype.hasOwnProperty.call(B,v)?{key:v,name:v}:{key:"default",name:v});ct();var b=ee();_t("12zqicn",v=>{var g=Jt();u(v,g)});var _=K(b),P=a(_);mt(P,{children:(v,g)=>{var c=te(),k=a(c),E=a(k,!0);r(k);var h=d(k,2),m=a(h),w=a(m);r(m);var U=d(m,2),A=a(U),I=a(A,!0);r(A);var C=d(A,2),W=a(C),O=a(W);D(O,{get icon(){return xt}});var z=d(O);r(W);var i=d(W,2),T=a(i);D(T,{get icon(){return bt}});var H=d(T);r(i);var Q=d(i,2),N=a(Q);D(N,{get icon(){return wt}});var st=d(N);r(Q),r(C);var F=d(C,2);Ct(F,5,()=>o,Tt,(f,p)=>{var y=Qt(),S=a(y);r(y),G(()=>{St(y,1,`${n(B),$(p),s(()=>B[$(p).key].bg)??""} ${n(B),$(p),s(()=>B[$(p).key].border)??""} ${n(B),$(p),s(()=>B[$(p).key].text)??""}
								dark:bg-slate-800 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900`),R(S,`#${$(p),s(()=>$(p).name)??""}`)}),u(f,y)}),r(F);var X=d(F,2),Z=a(X);ot(Z,{get href(){return n(t()),s(()=>t().repositoryUrl)},target:"_blank",rel:"noreferrer",noDarkVariant:!1,children:(f,p)=>{q();var y=M("Source code");u(f,y)},$$slots:{default:!0,icon:(f,p)=>{D(f,{get icon(){return Ht},slot:"icon"})}}});var ht=d(Z,2);{var yt=f=>{ot(f,{get href(){return n(t()),s(()=>t().livePreviewUrl)},target:"_blank",rel:"noreferrer",noDarkVariant:!1,variant:"white",children:(p,y)=>{q();var S=M("Live preview");u(p,S)},$$slots:{default:!0,icon:(p,y)=>{D(p,{get icon(){return Kt},slot:"icon"})}}})};lt(ht,f=>{n(t()),s(()=>t().hasLivePreview&&t().livePreviewUrl)&&f(yt)})}r(X),r(U),r(h);var tt=d(h,4),pt=a(tt),$t=a(pt);rt($t,e,f=>{var p=M("Loading...");u(f,p)},f=>{var p=M("README.md");u(f,p)},f=>{var p=M("Error!");u(f,p)}),r(pt),r(tt);var gt=d(tt,4),jt=a(gt);rt(jt,e,null,(f,p)=>{var y=Xt(),S=a(y);rt(S,()=>s(l),null,(it,Y)=>{var et=nt(),Pt=K(et);rt(Pt,()=>(n($(Y)),n($(p)),s(()=>$(Y)($(p)??"",{gfm:!0}))),null,(Et,Lt)=>{var ut=nt(),Dt=K(ut);Ut(Dt,()=>$(Lt)),u(Et,ut)}),u(it,et)}),r(y),u(f,y)},(f,p)=>{var y=Zt(),S=K(y),it=a(S);D(it,{get icon(){return kt}}),q(),r(S);var Y=d(S,2),et=a(Y,!0);r(Y),G(()=>R(et,$(p))),u(f,y)}),r(gt),r(c),G(()=>{R(E,(n(t()),s(()=>t().name))),J(w,"src",(n(t()),s(()=>t().imageUrl))),R(I,(n(t()),s(()=>t().description))),R(z,` ${n(t()),s(()=>t().starsCount)??""}
              ${n(t()),s(()=>(t().starsCount??0)<=1?"Star":"Stars")??""}`),R(H,` ${n(t()),s(()=>t().forksCount)??""}
              ${n(t()),s(()=>(t().forksCount??0)<=1?"Fork":"Forks")??""}`),R(st,` ${n(t()),s(()=>t().downloadsCount)??""}
              ${n(t()),s(()=>(t().downloadsCount??0)<=1?"Download":"Downloads")??""}`),J(tt,"href",(n(t()),s(()=>t().readmeUrl)))}),u(v,c)},$$slots:{default:!0}}),r(_),q(2),u(j,b),vt()}var ae=V('<div class="mt-16 w-full mb-32"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">Error!</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-red-600 dark:bg-red-400 aspect-[2/1] flex p-2"><div class="m-auto inline-flex flex-wrap gap-2 justify-center items-center"><div class="text-center text-white dark:text-text font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><!></div> <div class="font-cascadia-mono font-extrabold text-center text-white dark:text-text text-2xl md:text-3xl lg:text-4xl"> </div></div></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"><p class="dark:bg-slate-800 border-slate-900 dark:text-slate-300 dark:border-slate-300 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2">#error</p></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>'),oe=V('<section class="mt-16"><!></section>');function se(j,x){dt(x,!1);let t=at(x,"project",8);ct();var e=oe(),l=a(e);mt(l,{children:(o,b)=>{var _=ae(),P=d(a(_),2),v=a(P),g=a(v),c=a(g),k=a(c);D(k,{get icon(){return kt}}),r(c);var E=d(c,2),h=a(E,!0);r(E),r(g),r(v);var m=d(v,2),w=a(m),U=a(w,!0);r(w);var A=d(w,2),I=a(A),C=a(I);D(C,{get icon(){return xt}});var W=d(C);r(I);var O=d(I,2),z=a(O);D(z,{get icon(){return bt}});var i=d(z);r(O);var T=d(O,2),H=a(T);D(H,{get icon(){return wt}});var Q=d(H);r(T),r(A);var N=d(A,4),st=a(N);ot(st,{href:"/",noDarkVariant:!1,variant:"disabled",children:(F,X)=>{q();var Z=M("Back");u(F,Z)},$$slots:{default:!0,icon:(F,X)=>{D(F,{get icon(){return Nt},slot:"icon"})}}}),r(N),r(m),r(P),r(_),G(()=>{R(h,(n(t()),s(()=>t().description))),R(U,(n(t()),s(()=>t().description))),R(W,` ${n(t()),s(()=>t().starsCount??"Unknown")??""}
              ${n(t()),s(()=>(t().starsCount??0)<=1?"Star":"Stars")??""}`),R(i,` ${n(t()),s(()=>t().forksCount??"Unknown")??""}
              ${n(t()),s(()=>(t().forksCount??0)<=1?"Fork":"Forks")??""}`),R(Q,` ${n(t()),s(()=>t().downloadsCount??"Unknown")??""}
              ${n(t()),s(()=>(t().downloadsCount??0)<=1?"Download":"Downloads")??""}`)}),u(o,_)},$$slots:{default:!0}}),r(e),u(j,e),vt()}var ie=V(`<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 animate-bounce">Loading...</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-primary animate-pulse aspect-[2/1] flex items-center"><div class="text-center m-auto text-white dark:text-text inline-flex gap-2 animate-bounce
            font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><span class="animate-spin"><!></span>Loading...</div></div> <div class="w-full"><p class="dark:text-slate-300">Fetching data...</p> <div class="my-4 md:my-6 lg:my-8 flex gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>`),le=V('<section class="mt-16"><!></section>');function ne(j){var x=le(),t=a(x);mt(t,{children:(e,l)=>{var o=ie(),b=d(a(o),2),_=a(b),P=a(_),v=a(P),g=a(v);D(g,{get icon(){return ft}}),r(v),q(),r(P),r(_);var c=d(_,2),k=d(a(c),2),E=a(k);ot(E,{noDarkVariant:!1,variant:"disabled",children:(h,m)=>{q();var w=M("Loading");u(h,w)},$$slots:{default:!0,icon:(h,m)=>{D(h,{get icon(){return ft},slot:"icon",class:"animate-spin"})}}}),r(k),r(c),r(b),r(o),u(e,o)},$$slots:{default:!0}}),r(x),u(j,x)}var de=V('<meta name="description"/> <meta property="og:description"/> <meta name="twitter:description"/>',1),ce=V("<main><!></main>");function _e(j,x){dt(x,!1);const t=()=>zt(At,"$projectDetail",e),[e,l]=Wt();let o=at(x,"data",8),b=Mt();It(()=>{o().projectService.fetchProjectDetail({project:o().project,fetch:o().fetch}),Bt(b,o().project.readmeUrl?o().projectService.getProjectReadme({project:o().project,fetch:o().fetch}):new Promise(c=>c("<h2>No README file</h2>")))}),ct();var _=ce();_t("bwlt63",c=>{var k=de(),E=K(k),h=d(E,2),m=d(h,2);G(()=>{J(E,"content",(n(o()),s(()=>o().project.description||""))),J(h,"content",(n(o()),s(()=>o().project.description||""))),J(m,"content",(n(o()),s(()=>o().project.description||"")))}),Ft(()=>{qt.title=(n(o()),s(()=>o().project.name)??"")}),u(c,k)});var P=a(_);{var v=c=>{ne(c)},g=c=>{var k=nt(),E=K(k);{var h=w=>{re(w,{get project(){return t()},get markdownPromise(){return $(b)}})},m=w=>{se(w,{get project(){return t()}})};lt(E,w=>{t(),s(()=>t().name!=="error"&&t().name!=="limit")?w(h):w(m,!1)},!0)}u(c,k)};lt(P,c=>{t()?c(g,!1):c(v)})}r(_),u(j,_),vt(),l()}export{_e as component,fe as universal};
