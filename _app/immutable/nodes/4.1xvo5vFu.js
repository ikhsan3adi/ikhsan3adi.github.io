const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/D19zytiM.js","../chunks/DHM3yed0.js","../chunks/BIYjCGev.js","../assets/markdown.BPWJwfct.css","../assets/vendor.EFy4xGvE.css"])))=>i.map(i=>d[i]);
import{i as Rt,P as Vt,t as B,B as lt,a as At}from"../chunks/CbW_oVOP.js";import{ac as Ot,p as ct,a as st,i as vt,f as D,a9 as _t,e as u,x as X,j as a,r,B as d,a1 as Ct,t as Y,n as St,z as i,y as n,h,D as E,a2 as Tt,a3 as q,T as M,d as nt,ad as at,w as dt,K as Ut,s as ot,g as mt,_ as P,o as It,V as Wt,u as Ft,m as Bt,ae as Mt,W as qt,af as zt}from"../chunks/DHM3yed0.js";import{F as L,d as xt,e as bt,g as wt,i as Ht,c as kt,f as Kt,j as Nt,h as Gt}from"../chunks/Bm7eHUyi.js";import{W as pt}from"../chunks/_wgRBnu2.js";const Jt=async({url:y,fetch:x})=>{const t=new Vt,e=y.pathname.split("/").slice(-1)[0],s=Rt.find(o=>o.id===e);if(s===void 0)throw Ot(404,"Project not found");return{project:s,projectService:t,fetch:x}},fe=Object.freeze(Object.defineProperty({__proto__:null,load:Jt},Symbol.toStringTag,{value:"Module"})),Qt=(y,x)=>{const t=new x.Renderer;return t.heading=(e,s)=>`<h${s} class="my-4 font-cascadia-mono dark:text-white">${e}</h${s}>`,t.paragraph=e=>`<span class="text-slate-600 dark:text-slate-300 mb-2">${e}</span><br>`,t.strong=e=>`<span class="font-bold text-black dark:text-white">${e}</span>`,t.list=(e,s)=>{const o=s?"ol":"ul";return'<div class="my-4"><'+o+`start="0">
`+e+"</"+o+`></div>
`},t.listitem=e=>`<li class="mb-2">${e}</li>`,t.image=(e,s,o)=>`<img class="my-4" src=${e} alt=${s??o} />`,t.table=(e,s)=>(s&&(s=`<tbody>${s}</tbody>`),`<table class="border-collapse border border-slate-500">
<thead>
`+e+`</thead>
`+s+`</table>
`),t.tablecell=(e,s)=>{const o=s.header?"th":"td";return(s.align?`<${o} align="${s.align}" class="border-collapse border border-slate-500 px-4 py-2">`:`<${o} class="border-collapse border border-slate-500 px-4 py-2">`)+e+`</${o}>
`},t.link=(e,s,o)=>{if(e===null)return o;(!e.startsWith("http")||e.startsWith("./"))&&(e=new URL(e,y).toString());let b='<a href="'+e+'"';return s&&(b+=' title="'+s+'"'),b+=' class="text-blue-500 dark:text-sky-500 hover:text-blue-300 dark:hover:text-sky-300 hover:underline">'+o+"</a>",b},t.codespan=e=>`<code class="bg-slate-200 dark:bg-slate-600 px-1.5 py-0.5 break-all rounded-md inline-block text-text dark:text-slate-50">${e}</code>`,t.html=(e,s)=>{var o,b;if(e.includes("<img")){const _=/src="([^"]+?)"/g,$=e.match(_)??[];for(const m of $){const p=(o=m.match(/src="([^"]+?)"/))==null?void 0:o[1];if(p&&(!p.startsWith("http")||p.startsWith("./"))){const c=new URL(p,y).toString();e=e.replace(m,`src="${c}"`)}}}if(e.includes("href=")){const _=/href="([^"]+?)"/g,$=e.match(_)??[];for(const m of $){const p=(b=m.match(/href="([^"]+?)"/))==null?void 0:b[1];if(p&&(!p.startsWith("http")||p.startsWith("./"))){const c=new URL(p,y).toString();e=e.replace(m,`href="${c}"`)}}}return`<div class="${s?"block":"inline"} my-5">${e}</div>`},t.blockquote=e=>'<blockquote class="my-4 py-4 border-l-4 dark:border-slate-600 pl-4 bg-slate-100 dark:bg-slate-700">'+e+`</blockquote>
`,t.hr=()=>'<hr class="my-4 border-slate-500" />',t};var Xt=D(`<style lang="postcss">.markdown-alert {

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
}</style>`),Yt=D("<p> </p>"),Zt=D('<a target="_blank"><!></a>'),te=D('<div class="text-slate-600 dark:text-slate-300 markdown-content"><!></div>'),ee=D('<div class="dark:text-white font-cascadia-mono font-extrabold text-text text-4xl md:text-5xl lg:text-6xl"><!>Failed to load README</div> <p class="text-red-500 dark:text-red-400"> </p>',1),re=D('<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16"> </h1> <div class="w-full grid grid-cols-1 grid-flow-row grid-rows-2 lg:flex lg:flex-row-reverse lg:justify-between gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full border flex items-center"><img class="w-full" alt="Preview"/></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white font-space-grotesk"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><a target="_blank"><!></a> <!></div></div></div> <hr class="mt-16 border border-slate-700 dark:border-slate-300"/> <a class="hover:underline"><span class="dark:text-white block my-2 md:text-lg lg:text-xl font-medium"><!></span></a> <hr class="mb-16 md:mb-24 border border-slate-700 dark:border-slate-300"/> <div class="mb-24"><!></div></div>'),ae=D('<section class="mt-16"><!></section> <div class="markdown-content hidden"><a href="/">_</a></div>',1);function oe(y,x){ct(x,!1);let t=st(x,"project",8),e=st(x,"markdownPromise",8);const s=async()=>{const[{Octokit:m},{marked:p},{default:c},{baseUrl:j},{markedEmoji:A},{markedHighlight:R},{default:g},{default:w},{default:U},{default:O},{default:I},{default:S},{default:W}]=await Promise.all([P(()=>import("../chunks/D19zytiM.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.m),__vite__mapDeps([2,3]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.i),__vite__mapDeps([2,3]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.a),__vite__mapDeps([2,3]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.b),__vite__mapDeps([2,3]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.c),__vite__mapDeps([2,3]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.d),__vite__mapDeps([2,3]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.j),__vite__mapDeps([2,3]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.t),__vite__mapDeps([2,3]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.x),__vite__mapDeps([2,3]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.e),__vite__mapDeps([2,3]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.f),__vite__mapDeps([2,3]),import.meta.url),P(()=>import("../chunks/BIYjCGev.js").then(l=>l.h),__vite__mapDeps([2,3]),import.meta.url)]);g.registerLanguage("javascript",w),g.registerLanguage("js",w),g.registerLanguage("typescript",U),g.registerLanguage("ts",U),g.registerLanguage("xml",O),g.registerLanguage("html",O),g.registerLanguage("css",I),g.registerLanguage("bash",S),g.registerLanguage("sh",S),g.registerLanguage("json",W);const C=await new m().rest.emojis.get().catch(()=>null),z=C==null?void 0:C.data;return p.use({renderer:Qt(t().baseUrl,p)},j(t().baseUrl),R({langPrefix:"hljs language-",highlight(l,T){const H=g.getLanguage(T)?T:"plaintext";return g.highlight(l,{language:H}).value}}),c(),A({emojis:z??{}}))},o=t().tags.map(m=>Object.prototype.hasOwnProperty.call(B,m)?{key:m,name:m}:{key:"default",name:m});vt();var b=ae();_t("12zqicn",m=>{var p=Xt();u(m,p)});var _=X(b),$=a(_);pt($,{children:(m,p)=>{var c=re(),j=a(c),A=a(j,!0);r(j);var R=d(j,2),g=a(R),w=a(g);r(g);var U=d(g,2),O=a(U),I=a(O,!0);r(O);var S=d(O,2),W=a(S),C=a(W);L(C,{get icon(){return xt}});var z=d(C);r(W);var l=d(W,2),T=a(l);L(T,{get icon(){return bt}});var H=d(T);r(l);var Z=d(l,2),G=a(Z);L(G,{get icon(){return wt}});var tt=d(G);r(Z),r(S);var J=d(S,2);Ct(J,5,()=>o,Tt,(f,v)=>{var k=Yt(),V=a(k);r(k),Y(()=>{St(k,1,`${n(B),h(v),i(()=>B[h(v).key].bg)??""} ${n(B),h(v),i(()=>B[h(v).key].border)??""} ${n(B),h(v),i(()=>B[h(v).key].text)??""}
								dark:bg-slate-800 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900`),E(V,`#${h(v),i(()=>h(v).name)??""}`)}),u(f,k)}),r(J);var K=d(J,2),N=a(K),it=a(N);lt(it,{noDarkVariant:!1,children:(f,v)=>{q();var k=M("Source code");u(f,k)},$$slots:{default:!0,icon:(f,v)=>{L(f,{get icon(){return Ht},slot:"icon"})}}}),r(N);var ht=d(N,2);{var yt=f=>{var v=Zt(),k=a(v);lt(k,{noDarkVariant:!1,variant:"white",children:(V,Q)=>{q();var F=M("Live preview");u(V,F)},$$slots:{default:!0,icon:(V,Q)=>{L(V,{get icon(){return Kt},slot:"icon"})}}}),r(v),Y(()=>ot(v,"href",(n(t()),i(()=>t().livePreviewUrl)))),u(f,v)};nt(ht,f=>{n(t()),i(()=>t().hasLivePreview&&t().livePreviewUrl)&&f(yt)})}r(K),r(U),r(R);var et=d(R,4),gt=a(et),$t=a(gt);at($t,e,f=>{var v=M("Loading...");u(f,v)},f=>{var v=M("README.md");u(f,v)},f=>{var v=M("Error!");u(f,v)}),r(gt),r(et);var ut=d(et,4),jt=a(ut);at(jt,e,null,(f,v)=>{var k=te(),V=a(k);at(V,()=>i(s),null,(Q,F)=>{var rt=dt(),Pt=X(rt);at(Pt,()=>(n(h(F)),n(h(v)),i(()=>h(F)(h(v)??"",{gfm:!0}))),null,(Et,Lt)=>{var ft=dt(),Dt=X(ft);Ut(Dt,()=>h(Lt)),u(Et,ft)}),u(Q,rt)}),r(k),u(f,k)},(f,v)=>{var k=ee(),V=X(k),Q=a(V);L(Q,{get icon(){return kt}}),q(),r(V);var F=d(V,2),rt=a(F,!0);r(F),Y(()=>E(rt,h(v))),u(f,k)}),r(ut),r(c),Y(()=>{E(A,(n(t()),i(()=>t().name))),ot(w,"src",(n(t()),i(()=>t().imageUrl))),E(I,(n(t()),i(()=>t().description))),E(z,` ${n(t()),i(()=>t().starsCount)??""}
              ${n(t()),i(()=>(t().starsCount??0)<=1?"Star":"Stars")??""}`),E(H,` ${n(t()),i(()=>t().forksCount)??""}
              ${n(t()),i(()=>(t().forksCount??0)<=1?"Fork":"Forks")??""}`),E(tt,` ${n(t()),i(()=>t().downloadsCount)??""}
              ${n(t()),i(()=>(t().downloadsCount??0)<=1?"Download":"Downloads")??""}`),ot(N,"href",(n(t()),i(()=>t().repositoryUrl))),ot(et,"href",(n(t()),i(()=>t().readmeUrl)))}),u(m,c)},$$slots:{default:!0}}),r(_),q(2),u(y,b),mt()}var le=D('<div class="mt-16 w-full mb-32"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">Error!</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-red-600 dark:bg-red-400 aspect-[2/1] flex p-2"><div class="m-auto inline-flex flex-wrap gap-2 justify-center items-center"><div class="text-center text-white dark:text-text font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><!></div> <div class="font-cascadia-mono font-extrabold text-center text-white dark:text-text text-2xl md:text-3xl lg:text-4xl"> </div></div></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"><p class="dark:bg-slate-800 border-slate-900 dark:text-slate-300 dark:border-slate-300 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2">#error</p></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><a href="/" class="flex"><!></a></div></div></div></div>'),se=D('<section class="mt-16"><!></section>');function ie(y,x){ct(x,!1);let t=st(x,"project",8);vt();var e=se(),s=a(e);pt(s,{children:(o,b)=>{var _=le(),$=d(a(_),2),m=a($),p=a(m),c=a(p),j=a(c);L(j,{get icon(){return kt}}),r(c);var A=d(c,2),R=a(A,!0);r(A),r(p),r(m);var g=d(m,2),w=a(g),U=a(w,!0);r(w);var O=d(w,2),I=a(O),S=a(I);L(S,{get icon(){return xt}});var W=d(S);r(I);var C=d(I,2),z=a(C);L(z,{get icon(){return bt}});var l=d(z);r(C);var T=d(C,2),H=a(T);L(H,{get icon(){return wt}});var Z=d(H);r(T),r(O);var G=d(O,4),tt=a(G),J=a(tt);lt(J,{noDarkVariant:!1,variant:"disabled",children:(K,N)=>{q();var it=M("Back");u(K,it)},$$slots:{default:!0,icon:(K,N)=>{L(K,{get icon(){return Nt},slot:"icon"})}}}),r(tt),r(G),r(g),r($),r(_),Y(()=>{E(R,(n(t()),i(()=>t().description))),E(U,(n(t()),i(()=>t().description))),E(W,` ${n(t()),i(()=>t().starsCount??"Unknown")??""}
              ${n(t()),i(()=>(t().starsCount??0)<=1?"Star":"Stars")??""}`),E(l,` ${n(t()),i(()=>t().forksCount??"Unknown")??""}
              ${n(t()),i(()=>(t().forksCount??0)<=1?"Fork":"Forks")??""}`),E(Z,` ${n(t()),i(()=>t().downloadsCount??"Unknown")??""}
              ${n(t()),i(()=>(t().downloadsCount??0)<=1?"Download":"Downloads")??""}`)}),u(o,_)},$$slots:{default:!0}}),r(e),u(y,e),mt()}var ne=D(`<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 animate-bounce">Loading...</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-primary animate-pulse aspect-[2/1] flex items-center"><div class="text-center m-auto text-white dark:text-text inline-flex gap-2 animate-bounce
            font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><span class="animate-spin"><!></span>Loading...</div></div> <div class="w-full"><p class="dark:text-slate-300">Fetching data...</p> <div class="my-4 md:my-6 lg:my-8 flex gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>`),de=D('<section class="mt-16"><!></section>');function ce(y){var x=de(),t=a(x);pt(t,{children:(e,s)=>{var o=ne(),b=d(a(o),2),_=a(b),$=a(_),m=a($),p=a(m);L(p,{get icon(){return Gt}}),r(m),q(),r($),r(_);var c=d(_,2),j=d(a(c),2),A=a(j);lt(A,{noDarkVariant:!1,variant:"disabled",children:(R,g)=>{q();var w=M("Loading");u(R,w)},$$slots:{default:!0}}),r(j),r(c),r(b),r(o),u(e,o)},$$slots:{default:!0}}),r(x),u(y,x)}var ve=D("<main><!></main>");function _e(y,x){ct(x,!1);const t=()=>qt(At,"$projectDetail",e),[e,s]=Wt();let o=st(x,"data",8),b=Bt();It(()=>{o().projectService.fetchProjectDetail({project:o().project,fetch:o().fetch}),Ft(b,o().project.readmeUrl?o().projectService.getProjectReadme({project:o().project,fetch:o().fetch}):new Promise(c=>c("<h2>No README file</h2>")))}),vt();var _=ve();_t("bwlt63",c=>{Mt(()=>{zt.title=(n(o()),i(()=>o().project.name)??"")})});var $=a(_);{var m=c=>{ce(c)},p=c=>{var j=dt(),A=X(j);{var R=w=>{oe(w,{get project(){return t()},get markdownPromise(){return h(b)}})},g=w=>{ie(w,{get project(){return t()}})};nt(A,w=>{t(),i(()=>t().name!=="error"&&t().name!=="limit")?w(R):w(g,!1)},!0)}u(c,j)};nt($,c=>{t()?c(p,!1):c(m)})}r(_),u(y,_),mt(),s()}export{_e as component,fe as universal};
