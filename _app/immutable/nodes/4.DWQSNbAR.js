const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/ChSSIT7T.js","../chunks/B_m7Ufl1.js","../chunks/DvrdwSAn.js","../chunks/BIYjCGev.js","../assets/markdown.BPWJwfct.css","../assets/vendor.jL1egRUS.css","../chunks/BiEE8sZ_.js","../chunks/DfTtQ1R-.js"])))=>i.map(i=>d[i]);
import{i as jt,P as Pt,t as Z,a as Et}from"../chunks/CZd4jiIw.js";import{ah as Lt,p as at,G as E,_ as vt,e as v,f as H,k as a,r,s,a8 as Dt,t as G,v as Rt,g as V,y as P,a9 as At,A as Ot,a2 as F,W as I,d as gt,O as $,c as ct,F as Vt,q as N,h as ot,T as Ct,ad as Tt,$ as St,a1 as Ut,ae as It}from"../chunks/DvrdwSAn.js";import{_ as y}from"../chunks/V6fU8NOU.js";import{F as j,g as ut,h as pt,i as ft,e as xt,k as Ft,b as Wt,f as qt,j as mt}from"../chunks/CC2xtzuc.js";import{B as tt}from"../chunks/4ediHEZ4.js";import{W as it}from"../chunks/C1AZaERJ.js";const Mt=async({url:k,fetch:t})=>{const n=new Pt,e=k.pathname.split("/").slice(-1)[0],o=jt.find(g=>g.id===e);if(o===void 0)throw Lt(404,"Project not found");const d=o.readmeUrl?n.getProjectReadme({project:o,fetch:t}):Promise.resolve("<h2>No README file</h2>");return{project:o,projectService:n,fetch:t,markdownPromise:d}},ce=Object.freeze(Object.defineProperty({__proto__:null,load:Mt},Symbol.toStringTag,{value:"Module"})),Bt=(k,t)=>{const n=new t.Renderer;return n.heading=(e,o)=>`<h${o} class="my-4 font-cascadia-mono dark:text-white">${e}</h${o}>`,n.paragraph=e=>`<span class="text-slate-600 dark:text-slate-300 mb-2">${e}</span><br>`,n.strong=e=>`<span class="font-bold text-black dark:text-white">${e}</span>`,n.list=(e,o)=>{const d=o?"ol":"ul";return'<div class="my-4"><'+d+`start="0">
`+e+"</"+d+`></div>
`},n.listitem=e=>`<li class="mb-2">${e}</li>`,n.image=(e,o,d)=>`<img class="my-4" src=${e} alt=${o??d} />`,n.table=(e,o)=>(o&&(o=`<tbody>${o}</tbody>`),`<table class="border-collapse border border-slate-500">
<thead>
`+e+`</thead>
`+o+`</table>
`),n.tablecell=(e,o)=>{const d=o.header?"th":"td";return(o.align?`<${d} align="${o.align}" class="border-collapse border border-slate-500 px-4 py-2">`:`<${d} class="border-collapse border border-slate-500 px-4 py-2">`)+e+`</${d}>
`},n.link=(e,o,d)=>{if(e===null)return d;(!e.startsWith("http")||e.startsWith("./"))&&(e=new URL(e,k).toString());let g='<a href="'+e+'"';return o&&(g+=' title="'+o+'"'),g+=' class="text-blue-500 dark:text-sky-500 hover:text-blue-300 dark:hover:text-sky-300 hover:underline">'+d+"</a>",g},n.codespan=e=>`<code class="bg-slate-200 dark:bg-slate-600 px-1.5 py-0.5 break-all rounded-md inline-block text-text dark:text-slate-50">${e}</code>`,n.html=(e,o)=>{var d,g;if(e.includes("<img")){const c=/src="([^"]+?)"/g,f=e.match(c)??[];for(const u of f){const i=(d=u.match(/src="([^"]+?)"/))==null?void 0:d[1];if(i&&(!i.startsWith("http")||i.startsWith("./"))){const b=new URL(i,k).toString();e=e.replace(u,`src="${b}"`)}}}if(e.includes("href=")){const c=/href="([^"]+?)"/g,f=e.match(c)??[];for(const u of f){const i=(g=u.match(/href="([^"]+?)"/))==null?void 0:g[1];if(i&&(!i.startsWith("http")||i.startsWith("./"))){const b=new URL(i,k).toString();e=e.replace(u,`href="${b}"`)}}}return`<div class="${o?"block":"inline"} my-5">${e}</div>`},n.blockquote=e=>'<blockquote class="my-4 py-4 border-l-4 dark:border-slate-600 pl-4 bg-slate-100 dark:bg-slate-700">'+e+`</blockquote>
`,n.hr=()=>'<hr class="my-4 border-slate-500" />',n};var zt=E(`<style lang="postcss">.markdown-alert {

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
}</style>`),Ht=E("<p> </p>"),Gt=E('<div class="text-slate-600 dark:text-slate-300 markdown-content"><!></div>'),Nt=E('<div class="dark:text-white font-cascadia-mono font-extrabold text-text text-4xl md:text-5xl lg:text-6xl"><!>Failed to load README</div> <p class="text-red-500 dark:text-red-400"> </p>',1),Jt=E('<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16"> </h1> <div class="w-full grid grid-cols-1 grid-flow-row grid-rows-2 lg:flex lg:flex-row-reverse lg:justify-between gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full border flex items-center"><img class="w-full" alt="Preview"/></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white font-space-grotesk"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!> <!></div></div></div> <hr class="mt-16 border border-slate-700 dark:border-slate-300"/> <a class="hover:underline"><span class="dark:text-white block my-2 md:text-lg lg:text-xl font-medium"><!></span></a> <hr class="mb-16 md:mb-24 border border-slate-700 dark:border-slate-300"/> <div class="mb-24"><!></div></div>'),Kt=E('<section class="mt-16"><!></section> <div class="markdown-content hidden"><a href="/">_</a></div>',1);function Qt(k,t){at(t,!0);const n=async()=>{const[{Octokit:c},{marked:f},{default:u},{baseUrl:i},{markedEmoji:b},{markedHighlight:w},{default:m},{default:L},{default:h},{default:A},{default:O},{default:D},{default:C}]=await Promise.all([y(()=>import("../chunks/ChSSIT7T.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.m),__vite__mapDeps([3,4]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.i),__vite__mapDeps([3,4]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.a),__vite__mapDeps([3,4]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.b),__vite__mapDeps([3,4]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.c),__vite__mapDeps([3,4]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.d),__vite__mapDeps([3,4]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.j),__vite__mapDeps([3,4]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.t),__vite__mapDeps([3,4]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.x),__vite__mapDeps([3,4]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.e),__vite__mapDeps([3,4]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.f),__vite__mapDeps([3,4]),import.meta.url),y(()=>import("../chunks/BIYjCGev.js").then(l=>l.h),__vite__mapDeps([3,4]),import.meta.url)]);m.registerLanguage("javascript",L),m.registerLanguage("js",L),m.registerLanguage("typescript",h),m.registerLanguage("ts",h),m.registerLanguage("xml",A),m.registerLanguage("html",A),m.registerLanguage("css",O),m.registerLanguage("bash",D),m.registerLanguage("sh",D),m.registerLanguage("json",C);const T=await new c().rest.emojis.get().catch(()=>null),S=T==null?void 0:T.data;return f.use({renderer:Bt(t.project.baseUrl,f)},i(t.project.baseUrl),w({langPrefix:"hljs language-",highlight(l,U){const W=m.getLanguage(U)?U:"plaintext";return m.highlight(l,{language:W}).value}}),u(),b({emojis:S??{}}))},e=Ot(()=>t.project.tags.map(c=>Object.prototype.hasOwnProperty.call(Z,c)?{key:c,name:c}:{key:"default",name:c}));var o=Kt();vt("12zqicn",c=>{var f=zt();v(c,f)});var d=H(o),g=a(d);it(g,{children:(c,f)=>{var u=Jt(),i=a(u),b=a(i,!0);r(i);var w=s(i,2),m=a(w),L=a(m);r(m);var h=s(m,2),A=a(h),O=a(A,!0);r(A);var D=s(A,2),C=a(D),T=a(C);j(T,{get icon(){return ut}});var S=s(T);r(C);var l=s(C,2),U=a(l);j(U,{get icon(){return pt}});var W=s(U);r(l);var M=s(l,2),J=a(M);j(J,{get icon(){return ft}});var K=s(J);r(M),r(D);var B=s(D,2);Dt(B,21,()=>V(e),At,(x,p)=>{var _=Ht(),R=a(_);r(_),G(()=>{Rt(_,1,`${Z[V(p).key].bg??""} ${Z[V(p).key].border??""} ${Z[V(p).key].text??""}
								dark:bg-slate-800 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900`),P(R,`#${V(p).name??""}`)}),v(x,_)}),r(B);var et=s(B,2),q=a(et);tt(q,{get href(){return t.project.repositoryUrl},target:"_blank",rel:"noreferrer",noDarkVariant:!1,icon:p=>{j(p,{get icon(){return Ft}})},children:(p,_)=>{F();var R=I("Source code");v(p,R)},$$slots:{icon:!0,default:!0}});var lt=s(q,2);{var rt=x=>{tt(x,{get href(){return t.project.livePreviewUrl},target:"_blank",rel:"noreferrer",noDarkVariant:!1,variant:"white",icon:_=>{j(_,{get icon(){return Wt}})},children:(_,R)=>{F();var z=I("Live preview");v(_,z)},$$slots:{icon:!0,default:!0}})};gt(lt,x=>{t.project.hasLivePreview&&t.project.livePreviewUrl&&x(rt)})}r(et),r(h),r(w);var Q=s(w,4),nt=a(Q),_t=a(nt);$(_t,()=>t.markdownPromise,x=>{var p=I("Loading...");v(x,p)},x=>{var p=I("README.md");v(x,p)},x=>{var p=I("Error!");v(x,p)}),r(nt),r(Q);var st=s(Q,4),bt=a(st);$(bt,()=>t.markdownPromise,null,(x,p)=>{var _=Gt(),R=a(_);$(R,n,null,(z,X)=>{var Y=ct(),wt=H(Y);$(wt,()=>V(X)(V(p)??"",{gfm:!0}),null,(kt,ht)=>{var dt=ct(),yt=H(dt);Vt(yt,()=>V(ht)),v(kt,dt)}),v(z,Y)}),r(_),v(x,_)},(x,p)=>{var _=Nt(),R=H(_),z=a(R);j(z,{get icon(){return xt}}),F(),r(R);var X=s(R,2),Y=a(X,!0);r(X),G(()=>P(Y,V(p))),v(x,_)}),r(st),r(u),G(()=>{P(b,t.project.name),N(L,"src",t.project.imageUrl),P(O,t.project.description),P(S,` ${t.project.starsCount??""}
              ${(t.project.starsCount??0)<=1?"Star":"Stars"}`),P(W,` ${t.project.forksCount??""}
              ${(t.project.forksCount??0)<=1?"Fork":"Forks"}`),P(K,` ${t.project.downloadsCount??""}
              ${(t.project.downloadsCount??0)<=1?"Download":"Downloads"}`),N(Q,"href",t.project.readmeUrl)}),v(c,u)}}),r(d),F(2),v(k,o),ot()}var Xt=E('<div class="mt-16 w-full mb-32"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">Error!</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-red-600 dark:bg-red-400 aspect-[2/1] flex p-2"><div class="m-auto inline-flex flex-wrap gap-2 justify-center items-center"><div class="text-center text-white dark:text-text font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><!></div> <div class="font-cascadia-mono font-extrabold text-center text-white dark:text-text text-2xl md:text-3xl lg:text-4xl"> </div></div></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"><p class="dark:bg-slate-800 border-slate-900 dark:text-slate-300 dark:border-slate-300 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2">#error</p></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>'),Yt=E('<section class="mt-16"><!></section>');function Zt(k,t){at(t,!0);var n=Yt(),e=a(n);it(e,{children:(o,d)=>{var g=Xt(),c=s(a(g),2),f=a(c),u=a(f),i=a(u),b=a(i);j(b,{get icon(){return xt}}),r(i);var w=s(i,2),m=a(w,!0);r(w),r(u),r(f);var L=s(f,2),h=a(L),A=a(h,!0);r(h);var O=s(h,2),D=a(O),C=a(D);j(C,{get icon(){return ut}});var T=s(C);r(D);var S=s(D,2),l=a(S);j(l,{get icon(){return pt}});var U=s(l);r(S);var W=s(S,2),M=a(W);j(M,{get icon(){return ft}});var J=s(M);r(W),r(O);var K=s(O,4),B=a(K);tt(B,{href:"/",noDarkVariant:!1,variant:"disabled",icon:q=>{j(q,{get icon(){return qt}})},children:(q,lt)=>{F();var rt=I("Back");v(q,rt)},$$slots:{icon:!0,default:!0}}),r(K),r(L),r(c),r(g),G(()=>{P(m,t.project.description),P(A,t.project.description),P(T,` ${t.project.starsCount??"Unknown"??""}
              ${(t.project.starsCount??0)<=1?"Star":"Stars"}`),P(U,` ${t.project.forksCount??"Unknown"??""}
              ${(t.project.forksCount??0)<=1?"Fork":"Forks"}`),P(J,` ${t.project.downloadsCount??"Unknown"??""}
              ${(t.project.downloadsCount??0)<=1?"Download":"Downloads"}`)}),v(o,g)}}),r(n),v(k,n),ot()}var $t=E(`<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 animate-bounce">Loading...</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-primary animate-pulse aspect-[2/1] flex items-center"><div class="text-center m-auto text-white dark:text-text inline-flex gap-2 animate-bounce
            font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><span class="animate-spin"><!></span>Loading...</div></div> <div class="w-full"><p class="dark:text-slate-300">Fetching data...</p> <div class="my-4 md:my-6 lg:my-8 flex gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>`),te=E('<section class="mt-16"><!></section>');function ee(k){var t=te(),n=a(t);it(n,{children:(e,o)=>{var d=$t(),g=s(a(d),2),c=a(g),f=a(c),u=a(f),i=a(u);j(i,{get icon(){return mt}}),r(u),F(),r(f),r(c);var b=s(c,2),w=s(a(b),2),m=a(w);tt(m,{noDarkVariant:!1,variant:"disabled",icon:h=>{j(h,{get icon(){return mt},class:"animate-spin"})},children:(h,A)=>{F();var O=I("Loading");v(h,O)},$$slots:{icon:!0,default:!0}}),r(w),r(b),r(g),r(d),v(e,d)}}),r(t),v(k,t)}var re=E('<meta name="description"/> <meta property="og:description"/> <meta name="twitter:description"/>',1),ae=E("<main><!></main>");function me(k,t){at(t,!0);const n=()=>It(Et,"$projectDetail",e),[e,o]=Tt();Ct(()=>{t.data.projectService.fetchProjectDetail({project:t.data.project,fetch:t.data.fetch})});var d=ae();vt("bwlt63",i=>{var b=re(),w=H(b),m=s(w,2),L=s(m,2);G(()=>{N(w,"content",t.data.project.description||""),N(m,"content",t.data.project.description||""),N(L,"content",t.data.project.description||"")}),St(()=>{Ut.title=t.data.project.name??""}),v(i,b)});var g=a(d);{var c=i=>{ee(i)},f=i=>{Qt(i,{get project(){return n()},get markdownPromise(){return t.data.markdownPromise}})},u=i=>{Zt(i,{get project(){return n()}})};gt(g,i=>{n()?n().name!=="error"&&n().name!=="limit"?i(f,1):i(u,-1):i(c)})}r(d),v(k,d),ot(),o()}export{me as component,ce as universal};
