const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/fHxDjG-u.js","../chunks/RZBkwrFc.js","../chunks/BW5K7eeg.js","../chunks/CEi0rbLP.js","../assets/markdown.BPWJwfct.css","../assets/vendor.jL1egRUS.css","../chunks/BiEE8sZ_.js","../chunks/DfTtQ1R-.js"])))=>i.map(i=>d[i]);
import{i as Re,P as Ae,t as Y,a as Oe}from"../chunks/FO4lqzLM.js";import{ah as Ve,p as oe,G as L,_ as xe,e as v,f as H,k as a,r,s,a8 as Te,t as G,v as Ce,g as V,y as P,a9 as Ie,A as Se,a2 as W,W as F,d as fe,O as Z,c as pe,F as Ue,w as Fe,q as N,h as ie,T as We,ad as qe,$ as Me,a1 as ze,ae as Be}from"../chunks/BW5K7eeg.js";import{_ as h}from"../chunks/BAyeEIKD.js";import{F as y,e as le,g as _e,h as be,i as we,k as He,b as Ge,f as Ne,j as ge}from"../chunks/DrhIj8vr.js";import{B as $}from"../chunks/CJm7lW6L.js";import{W as ne}from"../chunks/dwn1T7U1.js";const Je=async({url:j,fetch:e})=>{const n=new Ae,t=j.pathname.split("/").slice(-1)[0],l=Re.find(u=>u.id===t);if(l===void 0)throw Ve(404,"Project not found");const d=l.readmeUrl?n.getProjectReadme({project:l,fetch:e}):Promise.resolve("<h2>No README file</h2>");return{project:l,projectService:n,fetch:e,markdownPromise:d}},xt=Object.freeze(Object.defineProperty({__proto__:null,load:Je},Symbol.toStringTag,{value:"Module"})),Ke=(j,e)=>{const n=new e.Renderer;return n.heading=(t,l)=>`<h${l} class="my-4 font-cascadia-mono dark:text-white">${t}</h${l}>`,n.paragraph=t=>`<span class="text-slate-600 dark:text-slate-300 mb-2">${t}</span><br>`,n.strong=t=>`<span class="font-bold text-black dark:text-white">${t}</span>`,n.list=(t,l)=>{const d=l?"ol":"ul";return'<div class="my-4"><'+d+`start="0">
`+t+"</"+d+`></div>
`},n.listitem=t=>`<li class="mb-2">${t}</li>`,n.image=(t,l,d)=>`<img class="my-4" src=${t} alt=${l??d} />`,n.table=(t,l)=>(l&&(l=`<tbody>${l}</tbody>`),`<table class="border-collapse border border-slate-500">
<thead>
`+t+`</thead>
`+l+`</table>
`),n.tablecell=(t,l)=>{const d=l.header?"th":"td";return(l.align?`<${d} align="${l.align}" class="border-collapse border border-slate-500 px-4 py-2">`:`<${d} class="border-collapse border border-slate-500 px-4 py-2">`)+t+`</${d}>
`},n.link=(t,l,d)=>{if(t===null)return d;(!t.startsWith("http")||t.startsWith("./"))&&(t=new URL(t,j).toString());let u='<a href="'+t+'"';return l&&(u+=' title="'+l+'"'),u+=' class="text-blue-500 dark:text-sky-500 hover:text-blue-300 dark:hover:text-sky-300 hover:underline">'+d+"</a>",u},n.codespan=t=>`<code class="bg-slate-200 dark:bg-slate-600 px-1.5 py-0.5 break-all rounded-md inline-block text-text dark:text-slate-50">${t}</code>`,n.html=(t,l)=>{var d,u;if(t.includes("<img")){const m=/src="([^"]+?)"/g,x=t.match(m)??[];for(const p of x){const o=(d=p.match(/src="([^"]+?)"/))==null?void 0:d[1];if(o&&(!o.startsWith("http")||o.startsWith("./"))){const b=new URL(o,j).toString();t=t.replace(p,`src="${b}"`)}}}if(t.includes("href=")){const m=/href="([^"]+?)"/g,x=t.match(m)??[];for(const p of x){const o=(u=p.match(/href="([^"]+?)"/))==null?void 0:u[1];if(o&&(!o.startsWith("http")||o.startsWith("./"))){const b=new URL(o,j).toString();t=t.replace(p,`href="${b}"`)}}}return`<div class="${l?"block":"inline"} my-5">${t}</div>`},n.blockquote=t=>'<blockquote class="my-4 py-4 border-l-4 dark:border-slate-600 pl-4 bg-slate-100 dark:bg-slate-700">'+t+`</blockquote>
`,n.hr=()=>'<hr class="my-4 border-slate-500" />',n};var Qe=L(`<style lang="postcss">.markdown-alert {
      @apply border-l-4 py-4 my-4 -ml-2 pl-4 bg-slate-100 dark:bg-slate-700;
    }

    .markdown-alert-title {
      @apply text-slate-600 dark:text-slate-300 dark:outline-slate-300 flex gap-2 items-center;
    }

    .markdown-alert-title > svg {
      @apply fill-slate-600 dark:fill-slate-300;
    }

    .markdown-alert-note {
      @apply border-blue-500 bg-blue-50;
    }

    .markdown-alert-note > .markdown-alert-title {
      @apply text-blue-500;
    }

    .markdown-alert-note > .markdown-alert-title > svg {
      @apply fill-blue-500;
    }

    .markdown-alert-tip {
      @apply border-green-500 bg-green-50;
    }

    .markdown-alert-tip > .markdown-alert-title {
      @apply text-green-500;
    }

    .markdown-alert-tip > .markdown-alert-title > svg {
      @apply fill-green-500;
    }

    .markdown-alert-important {
      @apply border-purple-500 bg-purple-50;
    }

    .markdown-alert-important > .markdown-alert-title {
      @apply text-purple-500;
    }

    .markdown-alert-important > .markdown-alert-title > svg {
      @apply fill-purple-500;
    }

    .markdown-alert-warning {
      @apply border-yellow-500 bg-yellow-50;
    }

    .markdown-alert-warning > .markdown-alert-title {
      @apply text-yellow-500;
    }

    .markdown-alert-warning > .markdown-alert-title > svg {
      @apply fill-yellow-500;
    }

    .markdown-alert-caution {
      @apply border-red-500 bg-red-50;
    }

    .markdown-alert-caution > .markdown-alert-title {
      @apply text-red-500;
    }

    .markdown-alert-caution > .markdown-alert-title > svg {
      @apply fill-red-500;
    }</style>`),Xe=L("<p> </p>"),Ye=L('<div class="text-slate-600 dark:text-slate-300 markdown-content"><!></div>'),Ze=L('<div class="dark:text-white font-cascadia-mono font-extrabold text-text text-4xl md:text-5xl lg:text-6xl"><!>Failed to load README</div> <p class="text-red-500 dark:text-red-400"> </p>',1),$e=L(`<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16"> </h1> <div class="w-full grid grid-cols-1 grid-flow-row grid-rows-2 lg:flex lg:flex-row-reverse lg:justify-between gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full flex items-center relative min-h-[250px] md:min-h-[320px]"><div class="inline-flex flex-wrap m-auto justify-center gap-2 items-center w-max py-8 pointer-events-none"><div class="dark:text-white text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-text"><!></div> <div class="dark:text-white text-center font-cascadia-mono font-extrabold text-text text-2xl md:text-3xl lg:text-4xl"> </div></div> <div class="absolute z-10 top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center
                 border-4 border-slate-900 dark:border-white
                 cursor-crosshair duration-200 active:brightness-75"></div></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white font-space-grotesk"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!> <!></div></div></div> <hr class="mt-16 border border-slate-700 dark:border-slate-300"/> <a class="hover:underline"><span class="dark:text-white block my-2 md:text-lg lg:text-xl font-medium"><!></span></a> <hr class="mb-16 md:mb-24 border border-slate-700 dark:border-slate-300"/> <div class="mb-24"><!></div></div>`),et=L('<section class="mt-16"><!></section> <div class="markdown-content hidden"><a href="/">_</a></div>',1);function tt(j,e){oe(e,!0);const n=async()=>{const[{Octokit:m},{marked:x},{default:p},{baseUrl:o},{markedEmoji:b},{markedHighlight:w},{default:c},{default:E},{default:k},{default:C},{default:R},{default:T},{default:I},{default:S}]=await Promise.all([h(()=>import("../chunks/fHxDjG-u.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.m),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.i),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.a),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.b),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.c),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.d),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.j),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.t),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.x),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.e),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.f),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.h),__vite__mapDeps([3,4]),import.meta.url),h(()=>import("../chunks/CEi0rbLP.js").then(i=>i.p),__vite__mapDeps([3,4]),import.meta.url)]);c.registerLanguage("javascript",E),c.registerLanguage("js",E),c.registerLanguage("typescript",k),c.registerLanguage("ts",k),c.registerLanguage("xml",C),c.registerLanguage("html",C),c.registerLanguage("css",R),c.registerLanguage("bash",T),c.registerLanguage("sh",T),c.registerLanguage("json",I),c.registerLanguage("plaintext",S),c.registerLanguage("txt",S);const D=await new m().rest.emojis.get().catch(()=>null),q=D==null?void 0:D.data;return x.use({renderer:Ke(e.project.baseUrl,x)},o(e.project.baseUrl),w({langPrefix:"hljs language-",highlight(i,O){const U=c.getLanguage(O)?O:"plaintext";return c.highlight(i,{language:U}).value}}),p(),b({emojis:q??{}}))},t=Se(()=>e.project.tags.map(m=>Object.prototype.hasOwnProperty.call(Y,m)?{key:m,name:m}:{key:"default",name:m}));var l=et();xe("12zqicn",m=>{var x=Qe();v(m,x)});var d=H(l),u=a(d);ne(u,{children:(m,x)=>{var p=$e(),o=a(p),b=a(o,!0);r(o);var w=s(o,2),c=a(w),E=a(c),k=a(E),C=a(k);y(C,{get icon(){return le}}),r(k);var R=s(k,2),T=a(R,!0);r(R),r(E);var I=s(E,2);r(c);var S=s(c,2),D=a(S),q=a(D,!0);r(D);var i=s(D,2),O=a(i),U=a(O);y(U,{get icon(){return _e}});var ee=s(U);r(O);var M=s(O,2),J=a(M);y(J,{get icon(){return be}});var se=s(J);r(M);var z=s(M,2),te=a(z);y(te,{get icon(){return we}});var re=s(te);r(z),r(i);var ae=s(i,2);Te(ae,21,()=>V(t),Ie,(f,g)=>{var _=Xe(),A=a(_);r(_),G(()=>{Ce(_,1,`${Y[V(g).key].bg??""} ${Y[V(g).key].border??""} ${Y[V(g).key].text??""}
								dark:bg-slate-800 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900`),P(A,`#${V(g).name??""}`)}),v(f,_)}),r(ae);var de=s(ae,2),ce=a(de);$(ce,{get href(){return e.project.repositoryUrl},target:"_blank",rel:"noreferrer",noDarkVariant:!1,icon:g=>{y(g,{get icon(){return He}})},children:(g,_)=>{W();var A=F("Source code");v(g,A)},$$slots:{icon:!0,default:!0}});var ke=s(ce,2);{var he=f=>{$(f,{get href(){return e.project.livePreviewUrl},target:"_blank",rel:"noreferrer",noDarkVariant:!1,variant:"white",icon:_=>{y(_,{get icon(){return Ge}})},children:(_,A)=>{W();var B=F("Live preview");v(_,B)},$$slots:{icon:!0,default:!0}})};fe(ke,f=>{e.project.hasLivePreview&&e.project.livePreviewUrl&&f(he)})}r(de),r(S),r(w);var K=s(w,4),me=a(K),ye=a(me);Z(ye,()=>e.markdownPromise,f=>{var g=F("Loading...");v(f,g)},f=>{var g=F("README.md");v(f,g)},f=>{var g=F("Error!");v(f,g)}),r(me),r(K);var ve=s(K,4),je=a(ve);Z(je,()=>e.markdownPromise,null,(f,g)=>{var _=Ye(),A=a(_);Z(A,n,null,(B,Q)=>{var X=pe(),Pe=H(X);Z(Pe,()=>V(Q)(V(g)??"",{gfm:!0}),null,(Ee,Le)=>{var ue=pe(),De=H(ue);Ue(De,()=>V(Le)),v(Ee,ue)}),v(B,X)}),r(_),v(f,_)},(f,g)=>{var _=Ze(),A=H(_),B=a(A);y(B,{get icon(){return le}}),W(),r(A);var Q=s(A,2),X=a(Q,!0);r(Q),G(()=>P(X,V(g))),v(f,_)}),r(ve),r(p),G(()=>{P(b,e.project.name),P(T,e.project.imageText??"Image not available"),Fe(I,`background-image: url('${e.project.imageUrl??""}');`),N(I,"title",e.project.imageText??e.project.name),P(q,e.project.description),P(ee,` ${e.project.starsCount??""}
              ${(e.project.starsCount??0)<=1?"Star":"Stars"}`),P(se,` ${e.project.forksCount??""}
              ${(e.project.forksCount??0)<=1?"Fork":"Forks"}`),P(re,` ${e.project.downloadsCount??""}
              ${(e.project.downloadsCount??0)<=1?"Download":"Downloads"}`),N(K,"href",e.project.readmeUrl)}),v(m,p)}}),r(d),W(2),v(j,l),ie()}var rt=L('<div class="mt-16 w-full mb-32"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">Error!</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-red-600 dark:bg-red-400 aspect-2/1 flex p-2 border-4 border-slate-900 dark:border-slate-700"><div class="m-auto inline-flex flex-wrap gap-2 justify-center items-center"><div class="text-center text-white dark:text-text font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><!></div> <div class="font-cascadia-mono font-extrabold text-center text-white dark:text-text text-2xl md:text-3xl lg:text-4xl"> </div></div></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"><p class="dark:bg-slate-800 border-slate-900 dark:text-slate-300 dark:border-slate-300 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2">#error</p></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>'),at=L('<section class="mt-16"><!></section>');function lt(j,e){oe(e,!0);var n=at(),t=a(n);ne(t,{children:(l,d)=>{var u=rt(),m=s(a(u),2),x=a(m),p=a(x),o=a(p),b=a(o);y(b,{get icon(){return le}}),r(o);var w=s(o,2),c=a(w,!0);r(w),r(p),r(x);var E=s(x,2),k=a(E),C=a(k,!0);r(k);var R=s(k,2),T=a(R),I=a(T);y(I,{get icon(){return _e}});var S=s(I);r(T);var D=s(T,2),q=a(D);y(q,{get icon(){return be}});var i=s(q);r(D);var O=s(D,2),U=a(O);y(U,{get icon(){return we}});var ee=s(U);r(O),r(R);var M=s(R,4),J=a(M);$(J,{href:"/",noDarkVariant:!1,variant:"disabled",icon:z=>{y(z,{get icon(){return Ne}})},children:(z,te)=>{W();var re=F("Back");v(z,re)},$$slots:{icon:!0,default:!0}}),r(M),r(E),r(m),r(u),G(()=>{P(c,e.project.description),P(C,e.project.description),P(S,` ${e.project.starsCount??"Unknown"??""}
              ${(e.project.starsCount??0)<=1?"Star":"Stars"}`),P(i,` ${e.project.forksCount??"Unknown"??""}
              ${(e.project.forksCount??0)<=1?"Fork":"Forks"}`),P(ee,` ${e.project.downloadsCount??"Unknown"??""}
              ${(e.project.downloadsCount??0)<=1?"Download":"Downloads"}`)}),v(l,u)}}),r(n),v(j,n),ie()}var ot=L(`<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 animate-bounce">Loading...</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-primary animate-pulse aspect-2/1 flex items-center border-4 border-slate-900 dark:border-slate-700"><div class="text-center m-auto text-white dark:text-text inline-flex gap-2 animate-bounce
            font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><span class="animate-spin"><!></span>Loading...</div></div> <div class="w-full"><p class="dark:text-slate-300">Fetching data...</p> <div class="my-4 md:my-6 lg:my-8 flex gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>`),it=L('<section class="mt-16"><!></section>');function nt(j){var e=it(),n=a(e);ne(n,{children:(t,l)=>{var d=ot(),u=s(a(d),2),m=a(u),x=a(m),p=a(x),o=a(p);y(o,{get icon(){return ge}}),r(p),W(),r(x),r(m);var b=s(m,2),w=s(a(b),2),c=a(w);$(c,{noDarkVariant:!1,variant:"disabled",icon:k=>{y(k,{get icon(){return ge},class:"animate-spin"})},children:(k,C)=>{W();var R=F("Loading");v(k,R)},$$slots:{icon:!0,default:!0}}),r(w),r(b),r(u),r(d),v(t,d)}}),r(e),v(j,e)}var st=L('<meta name="description"/> <meta property="og:description"/> <meta name="twitter:description"/>',1),dt=L("<main><!></main>");function ft(j,e){oe(e,!0);const n=()=>Be(Oe,"$projectDetail",t),[t,l]=qe();We(()=>{e.data.projectService.fetchProjectDetail({project:e.data.project,fetch:e.data.fetch})});var d=dt();xe("bwlt63",o=>{var b=st(),w=H(b),c=s(w,2),E=s(c,2);G(()=>{N(w,"content",e.data.project.description||""),N(c,"content",e.data.project.description||""),N(E,"content",e.data.project.description||"")}),Me(()=>{ze.title=e.data.project.name??""}),v(o,b)});var u=a(d);{var m=o=>{nt(o)},x=o=>{tt(o,{get project(){return n()},get markdownPromise(){return e.data.markdownPromise}})},p=o=>{lt(o,{get project(){return n()}})};fe(u,o=>{n()?n().name!=="error"&&n().name!=="limit"?o(x,1):o(p,-1):o(m)})}r(d),v(j,d),ie(),l()}export{ft as component,xt as universal};
