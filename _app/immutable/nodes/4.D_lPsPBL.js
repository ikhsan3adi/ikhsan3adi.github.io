const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/c7UZn76T.js","../chunks/CY50H6Sp.js","../chunks/Bk7QeSU9.js","../chunks/CEi0rbLP.js","../assets/markdown.BPWJwfct.css","../assets/vendor.jL1egRUS.css","../chunks/BiEE8sZ_.js","../chunks/DfTtQ1R-.js"])))=>i.map(i=>d[i]);
import{i as Rt,P as At,t as Y,a as Ot}from"../chunks/TR3PTKjo.js";import{ah as Vt,p as it,G as L,_ as xt,e as m,f as H,k as a,r,s,a8 as Tt,t as G,v as Ct,g as V,y as P,a9 as It,A as St,a2 as W,W as F,d as ft,O as Z,c as ut,F as Ut,w as Ft,q as N,h as lt,T as Wt,ad as qt,$ as Mt,a1 as zt,ae as Bt}from"../chunks/Bk7QeSU9.js";import{_ as h}from"../chunks/BxgZKAqv.js";import{F as y,e as ot,g as bt,h as _t,i as wt,k as Ht,b as Gt,f as Nt,j as pt}from"../chunks/LmcbN0n1.js";import{B as $}from"../chunks/D47dTLqK.js";import{W as nt}from"../chunks/CVmxyyTe.js";const Jt=async({url:j,fetch:t})=>{const n=new At,e=j.pathname.split("/").slice(-1)[0],o=Rt.find(g=>g.id===e);if(o===void 0)throw Vt(404,"Project not found");const d=o.readmeUrl?n.getProjectReadme({project:o,fetch:t}):Promise.resolve("<h2>No README file</h2>");return{project:o,projectService:n,fetch:t,markdownPromise:d}},xe=Object.freeze(Object.defineProperty({__proto__:null,load:Jt},Symbol.toStringTag,{value:"Module"})),Kt=(j,t)=>{const n=new t.Renderer;return n.heading=(e,o)=>`<h${o} class="my-4 font-cascadia-mono dark:text-white">${e}</h${o}>`,n.paragraph=e=>`<span class="text-slate-600 dark:text-slate-300 mb-2">${e}</span><br>`,n.strong=e=>`<span class="font-bold text-black dark:text-white">${e}</span>`,n.list=(e,o)=>{const d=o?"ol":"ul";return'<div class="my-4"><'+d+`start="0">
`+e+"</"+d+`></div>
`},n.listitem=e=>`<li class="mb-2">${e}</li>`,n.image=(e,o,d)=>`<img class="my-4" src=${e} alt=${o??d} />`,n.table=(e,o)=>(o&&(o=`<tbody>${o}</tbody>`),`<table class="border-collapse border border-slate-500">
<thead>
`+e+`</thead>
`+o+`</table>
`),n.tablecell=(e,o)=>{const d=o.header?"th":"td";return(o.align?`<${d} align="${o.align}" class="border-collapse border border-slate-500 px-4 py-2">`:`<${d} class="border-collapse border border-slate-500 px-4 py-2">`)+e+`</${d}>
`},n.link=(e,o,d)=>{if(e===null)return d;(!e.startsWith("http")||e.startsWith("./"))&&(e=new URL(e,j).toString());let g='<a href="'+e+'"';return o&&(g+=' title="'+o+'"'),g+=' class="text-blue-500 dark:text-sky-500 hover:text-blue-300 dark:hover:text-sky-300 hover:underline">'+d+"</a>",g},n.codespan=e=>`<code class="bg-slate-200 dark:bg-slate-600 px-1.5 py-0.5 break-all rounded-md inline-block text-text dark:text-slate-50">${e}</code>`,n.html=(e,o)=>{var d,g;if(e.includes("<img")){const v=/src="([^"]+?)"/g,x=e.match(v)??[];for(const u of x){const i=(d=u.match(/src="([^"]+?)"/))==null?void 0:d[1];if(i&&(!i.startsWith("http")||i.startsWith("./"))){const _=new URL(i,j).toString();e=e.replace(u,`src="${_}"`)}}}if(e.includes("href=")){const v=/href="([^"]+?)"/g,x=e.match(v)??[];for(const u of x){const i=(g=u.match(/href="([^"]+?)"/))==null?void 0:g[1];if(i&&(!i.startsWith("http")||i.startsWith("./"))){const _=new URL(i,j).toString();e=e.replace(u,`href="${_}"`)}}}return`<div class="${o?"block":"inline"} my-5">${e}</div>`},n.blockquote=e=>'<blockquote class="my-4 py-4 border-l-4 dark:border-slate-600 pl-4 bg-slate-100 dark:bg-slate-700">'+e+`</blockquote>
`,n.hr=()=>'<hr class="my-4 border-slate-500" />',n};var Qt=L(`<style lang="postcss">.markdown-alert {

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
}</style>`),Xt=L("<p> </p>"),Yt=L('<div class="text-slate-600 dark:text-slate-300 markdown-content"><!></div>'),Zt=L('<div class="dark:text-white font-cascadia-mono font-extrabold text-text text-4xl md:text-5xl lg:text-6xl"><!>Failed to load README</div> <p class="text-red-500 dark:text-red-400"> </p>',1),$t=L(`<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16"> </h1> <div class="w-full grid grid-cols-1 grid-flow-row grid-rows-2 lg:flex lg:flex-row-reverse lg:justify-between gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full flex items-center relative min-h-[250px] md:min-h-[320px]"><div class="inline-flex flex-wrap m-auto justify-center gap-2 items-center w-max py-8 pointer-events-none"><div class="dark:text-white text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-text"><!></div> <div class="dark:text-white text-center font-cascadia-mono font-extrabold text-text text-2xl md:text-3xl lg:text-4xl"> </div></div> <div class="absolute z-10 top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center
                 border-4 border-slate-900 dark:border-white
                 cursor-crosshair duration-200 active:brightness-75"></div></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white font-space-grotesk"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!> <!></div></div></div> <hr class="mt-16 border border-slate-700 dark:border-slate-300"/> <a class="hover:underline"><span class="dark:text-white block my-2 md:text-lg lg:text-xl font-medium"><!></span></a> <hr class="mb-16 md:mb-24 border border-slate-700 dark:border-slate-300"/> <div class="mb-24"><!></div></div>`),te=L('<section class="mt-16"><!></section> <div class="markdown-content hidden"><a href="/">_</a></div>',1);function ee(j,t){it(t,!0);const n=async()=>{const[{Octokit:v},{marked:x},{default:u},{baseUrl:i},{markedEmoji:_},{markedHighlight:w},{default:c},{default:E},{default:k},{default:C},{default:R},{default:T},{default:I},{default:S}]=await Promise.all([h(()=>import("../chunks/c7UZn76T.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.m),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.i),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.a),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.b),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.c),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.d),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.j),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.t),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.x),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.e),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.f),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.h),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(l=>l.p),__vite__mapDeps([3,4]),import.meta.url)]);c.registerLanguage("javascript",E),c.registerLanguage("js",E),c.registerLanguage("typescript",k),c.registerLanguage("ts",k),c.registerLanguage("xml",C),c.registerLanguage("html",C),c.registerLanguage("css",R),c.registerLanguage("bash",T),c.registerLanguage("sh",T),c.registerLanguage("json",I),c.registerLanguage("plaintext",S),c.registerLanguage("txt",S);const D=await new v().rest.emojis.get().catch(()=>null),q=D==null?void 0:D.data;return x.use({renderer:Kt(t.project.baseUrl,x)},i(t.project.baseUrl),w({langPrefix:"hljs language-",highlight(l,O){const U=c.getLanguage(O)?O:"plaintext";return c.highlight(l,{language:U}).value}}),u(),_({emojis:q??{}}))},e=St(()=>t.project.tags.map(v=>Object.prototype.hasOwnProperty.call(Y,v)?{key:v,name:v}:{key:"default",name:v}));var o=te();xt("12zqicn",v=>{var x=Qt();m(v,x)});var d=H(o),g=a(d);nt(g,{children:(v,x)=>{var u=$t(),i=a(u),_=a(i,!0);r(i);var w=s(i,2),c=a(w),E=a(c),k=a(E),C=a(k);y(C,{get icon(){return ot}}),r(k);var R=s(k,2),T=a(R,!0);r(R),r(E);var I=s(E,2);r(c);var S=s(c,2),D=a(S),q=a(D,!0);r(D);var l=s(D,2),O=a(l),U=a(O);y(U,{get icon(){return bt}});var tt=s(U);r(O);var M=s(O,2),J=a(M);y(J,{get icon(){return _t}});var st=s(J);r(M);var z=s(M,2),et=a(z);y(et,{get icon(){return wt}});var rt=s(et);r(z),r(l);var at=s(l,2);Tt(at,21,()=>V(e),It,(f,p)=>{var b=Xt(),A=a(b);r(b),G(()=>{Ct(b,1,`${Y[V(p).key].bg??""} ${Y[V(p).key].border??""} ${Y[V(p).key].text??""}
								dark:bg-slate-800 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900`),P(A,`#${V(p).name??""}`)}),m(f,b)}),r(at);var dt=s(at,2),ct=a(dt);$(ct,{get href(){return t.project.repositoryUrl},target:"_blank",rel:"noreferrer",noDarkVariant:!1,icon:p=>{y(p,{get icon(){return Ht}})},children:(p,b)=>{W();var A=F("Source code");m(p,A)},$$slots:{icon:!0,default:!0}});var kt=s(ct,2);{var ht=f=>{$(f,{get href(){return t.project.livePreviewUrl},target:"_blank",rel:"noreferrer",noDarkVariant:!1,variant:"white",icon:b=>{y(b,{get icon(){return Gt}})},children:(b,A)=>{W();var B=F("Live preview");m(b,B)},$$slots:{icon:!0,default:!0}})};ft(kt,f=>{t.project.hasLivePreview&&t.project.livePreviewUrl&&f(ht)})}r(dt),r(S),r(w);var K=s(w,4),vt=a(K),yt=a(vt);Z(yt,()=>t.markdownPromise,f=>{var p=F("Loading...");m(f,p)},f=>{var p=F("README.md");m(f,p)},f=>{var p=F("Error!");m(f,p)}),r(vt),r(K);var mt=s(K,4),jt=a(mt);Z(jt,()=>t.markdownPromise,null,(f,p)=>{var b=Yt(),A=a(b);Z(A,n,null,(B,Q)=>{var X=ut(),Pt=H(X);Z(Pt,()=>V(Q)(V(p)??"",{gfm:!0}),null,(Et,Lt)=>{var gt=ut(),Dt=H(gt);Ut(Dt,()=>V(Lt)),m(Et,gt)}),m(B,X)}),r(b),m(f,b)},(f,p)=>{var b=Zt(),A=H(b),B=a(A);y(B,{get icon(){return ot}}),W(),r(A);var Q=s(A,2),X=a(Q,!0);r(Q),G(()=>P(X,V(p))),m(f,b)}),r(mt),r(u),G(()=>{P(_,t.project.name),P(T,t.project.imageText??"Image not available"),Ft(I,`background-image: url('${t.project.imageUrl??""}');`),N(I,"title",t.project.imageText??t.project.name),P(q,t.project.description),P(tt,` ${t.project.starsCount??""}
              ${(t.project.starsCount??0)<=1?"Star":"Stars"}`),P(st,` ${t.project.forksCount??""}
              ${(t.project.forksCount??0)<=1?"Fork":"Forks"}`),P(rt,` ${t.project.downloadsCount??""}
              ${(t.project.downloadsCount??0)<=1?"Download":"Downloads"}`),N(K,"href",t.project.readmeUrl)}),m(v,u)}}),r(d),W(2),m(j,o),lt()}var re=L('<div class="mt-16 w-full mb-32"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">Error!</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-red-600 dark:bg-red-400 aspect-[2/1] flex p-2 border-4 border-slate-900 dark:border-slate-700"><div class="m-auto inline-flex flex-wrap gap-2 justify-center items-center"><div class="text-center text-white dark:text-text font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><!></div> <div class="font-cascadia-mono font-extrabold text-center text-white dark:text-text text-2xl md:text-3xl lg:text-4xl"> </div></div></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"><p class="dark:bg-slate-800 border-slate-900 dark:text-slate-300 dark:border-slate-300 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2">#error</p></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>'),ae=L('<section class="mt-16"><!></section>');function oe(j,t){it(t,!0);var n=ae(),e=a(n);nt(e,{children:(o,d)=>{var g=re(),v=s(a(g),2),x=a(v),u=a(x),i=a(u),_=a(i);y(_,{get icon(){return ot}}),r(i);var w=s(i,2),c=a(w,!0);r(w),r(u),r(x);var E=s(x,2),k=a(E),C=a(k,!0);r(k);var R=s(k,2),T=a(R),I=a(T);y(I,{get icon(){return bt}});var S=s(I);r(T);var D=s(T,2),q=a(D);y(q,{get icon(){return _t}});var l=s(q);r(D);var O=s(D,2),U=a(O);y(U,{get icon(){return wt}});var tt=s(U);r(O),r(R);var M=s(R,4),J=a(M);$(J,{href:"/",noDarkVariant:!1,variant:"disabled",icon:z=>{y(z,{get icon(){return Nt}})},children:(z,et)=>{W();var rt=F("Back");m(z,rt)},$$slots:{icon:!0,default:!0}}),r(M),r(E),r(v),r(g),G(()=>{P(c,t.project.description),P(C,t.project.description),P(S,` ${t.project.starsCount??"Unknown"??""}
              ${(t.project.starsCount??0)<=1?"Star":"Stars"}`),P(l,` ${t.project.forksCount??"Unknown"??""}
              ${(t.project.forksCount??0)<=1?"Fork":"Forks"}`),P(tt,` ${t.project.downloadsCount??"Unknown"??""}
              ${(t.project.downloadsCount??0)<=1?"Download":"Downloads"}`)}),m(o,g)}}),r(n),m(j,n),lt()}var ie=L(`<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 animate-bounce">Loading...</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-primary animate-pulse aspect-[2/1] flex items-center border-4 border-slate-900 dark:border-slate-700"><div class="text-center m-auto text-white dark:text-text inline-flex gap-2 animate-bounce
            font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><span class="animate-spin"><!></span>Loading...</div></div> <div class="w-full"><p class="dark:text-slate-300">Fetching data...</p> <div class="my-4 md:my-6 lg:my-8 flex gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>`),le=L('<section class="mt-16"><!></section>');function ne(j){var t=le(),n=a(t);nt(n,{children:(e,o)=>{var d=ie(),g=s(a(d),2),v=a(g),x=a(v),u=a(x),i=a(u);y(i,{get icon(){return pt}}),r(u),W(),r(x),r(v);var _=s(v,2),w=s(a(_),2),c=a(w);$(c,{noDarkVariant:!1,variant:"disabled",icon:k=>{y(k,{get icon(){return pt},class:"animate-spin"})},children:(k,C)=>{W();var R=F("Loading");m(k,R)},$$slots:{icon:!0,default:!0}}),r(w),r(_),r(g),r(d),m(e,d)}}),r(t),m(j,t)}var se=L('<meta name="description"/> <meta property="og:description"/> <meta name="twitter:description"/>',1),de=L("<main><!></main>");function fe(j,t){it(t,!0);const n=()=>Bt(Ot,"$projectDetail",e),[e,o]=qt();Wt(()=>{t.data.projectService.fetchProjectDetail({project:t.data.project,fetch:t.data.fetch})});var d=de();xt("bwlt63",i=>{var _=se(),w=H(_),c=s(w,2),E=s(c,2);G(()=>{N(w,"content",t.data.project.description||""),N(c,"content",t.data.project.description||""),N(E,"content",t.data.project.description||"")}),Mt(()=>{zt.title=t.data.project.name??""}),m(i,_)});var g=a(d);{var v=i=>{ne(i)},x=i=>{ee(i,{get project(){return n()},get markdownPromise(){return t.data.markdownPromise}})},u=i=>{oe(i,{get project(){return n()}})};ft(g,i=>{n()?n().name!=="error"&&n().name!=="limit"?i(x,1):i(u,-1):i(v)})}r(d),m(j,d),lt(),o()}export{fe as component,xe as universal};
