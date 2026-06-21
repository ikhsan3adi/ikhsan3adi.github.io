const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/ERuiquk9.js","../chunks/Cyuzqnbw.js","../chunks/DLn9cFAg.js","../chunks/gCt8Dtu0.js","../chunks/DV1rIHbo.js","../chunks/D92SYlq2.js","../assets/markdown.NpCLAIfh.css"])))=>i.map(i=>d[i]);
import{r as e}from"../chunks/Cyuzqnbw.js";import{A as t,B as n,Ct as r,G as i,J as a,K as o,Mt as s,N as c,O as l,Ot as u,St as d,U as f,V as p,W as m,X as h,a as g,d as ee,f as _,g as v,gt as y,ht as b,i as x,jt as S,k as C,kt as w,lt as T,mt as E,n as D,nt as O,ot as k,pt as A,q as j,r as M,s as N,t as P,u as F,wt as I,z as te}from"../chunks/BqjPY6ap.js";import{n as ne}from"../chunks/C_L-_NMO.js";import{n as L}from"../chunks/CvUc8qHe.js";import{t as R}from"../chunks/BV69Ogbz.js";import{t as z}from"../chunks/T65E7BoJ.js";import{a as B,i as V,o as H,r as U}from"../chunks/CuZ8ohG7.js";var W=e({load:()=>G}),G=(async({url:e,fetch:t})=>{let n=new B,r=e.pathname.split(`/`).slice(-1)[0],i=V.find(e=>e.id===r);if(i===void 0)throw ne(404,`Project not found`);return{project:i,projectService:n,fetch:t,markdownPromise:i.readmeUrl?n.getProjectReadme({project:i,fetch:t}):Promise.resolve(`<h2>No README file</h2>`)}}),re=(e,t)=>{let n=new t.Renderer;return n.heading=(e,t)=>`<h${t} class="my-4 font-cascadia-mono dark:text-white">${e}</h${t}>`,n.paragraph=e=>`<span class="text-slate-600 dark:text-slate-300 mb-2">${e}</span><br>`,n.strong=e=>`<span class="font-bold text-black dark:text-white">${e}</span>`,n.list=(e,t)=>{let n=t?`ol`:`ul`;return`<div class="my-4"><`+n+`start="0">
`+e+`</`+n+`></div>
`},n.listitem=e=>`<li class="mb-2">${e}</li>`,n.image=(e,t,n)=>`<img class="my-4" src=${e} alt=${t??n} />`,n.table=(e,t)=>(t&&=`<tbody>${t}</tbody>`,`<table class="border-collapse border border-slate-500">
<thead>
`+e+`</thead>
`+t+`</table>
`),n.tablecell=(e,t)=>{let n=t.header?`th`:`td`;return(t.align?`<${n} align="${t.align}" class="border-collapse border border-slate-500 px-4 py-2">`:`<${n} class="border-collapse border border-slate-500 px-4 py-2">`)+e+`</${n}>\n`},n.link=(t,n,r)=>{if(t===null)return r;(!t.startsWith(`http`)||t.startsWith(`./`))&&(t=new URL(t,e).toString());let i=`<a href="`+t+`"`;return n&&(i+=` title="`+n+`"`),i+=` class="text-blue-500 dark:text-sky-500 hover:text-blue-300 dark:hover:text-sky-300 hover:underline">`+r+`</a>`,i},n.codespan=e=>`<code class="bg-slate-200 dark:bg-slate-600 px-1.5 py-0.5 break-all rounded-md inline-block text-text dark:text-slate-50">${e}</code>`,n.html=(t,n)=>{if(t.includes(`<img`)){let n=t.match(/src="([^"]+?)"/g)??[];for(let r of n){let n=r.match(/src="([^"]+?)"/)?.[1];if(n&&(!n.startsWith(`http`)||n.startsWith(`./`))){let i=new URL(n,e).toString();t=t.replace(r,`src="${i}"`)}}}if(t.includes(`href=`)){let n=t.match(/href="([^"]+?)"/g)??[];for(let r of n){let n=r.match(/href="([^"]+?)"/)?.[1];if(n&&(!n.startsWith(`http`)||n.startsWith(`./`))){let i=new URL(n,e).toString();t=t.replace(r,`href="${i}"`)}}}return`<div class="${n?`block`:`inline`} my-5">${t}</div>`},n.blockquote=e=>`<blockquote class="my-4 py-4 border-l-4 dark:border-slate-600 pl-4 bg-slate-100 dark:bg-slate-700">`+e+`</blockquote>
`,n.hr=()=>`<hr class="my-4 border-slate-500" />`,n},K=a(`<style lang="postcss">.markdown-alert {
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
    }</style>`),ie=a(`<p> </p>`),ae=a(`<div class="text-slate-600 dark:text-slate-300 markdown-content"><!></div>`),oe=a(`<div class="dark:text-white font-cascadia-mono font-extrabold text-text text-4xl md:text-5xl lg:text-6xl"><!>Failed to load README</div> <p class="text-red-500 dark:text-red-400"> </p>`,1),se=a(`<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16"> </h1> <div class="w-full grid grid-cols-1 grid-flow-row grid-rows-2 lg:flex lg:flex-row-reverse lg:justify-between gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full flex items-center relative min-h-62.5 md:min-h-80"><div class="inline-flex flex-wrap m-auto justify-center gap-2 items-center w-max py-8 pointer-events-none"><div class="dark:text-white text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-text"><!></div> <div class="dark:text-white text-center font-cascadia-mono font-extrabold text-text text-2xl md:text-3xl lg:text-4xl"> </div></div> <div class="absolute z-10 top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center
                 border-4 border-slate-900 dark:border-white
                 cursor-crosshair duration-200 active:brightness-75"></div></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white font-space-grotesk"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!> <!></div></div></div> <hr class="mt-16 border border-slate-700 dark:border-slate-300"/> <a class="hover:underline"><span class="dark:text-white block my-2 md:text-lg lg:text-xl font-medium"><!></span></a> <hr class="mb-16 md:mb-24 border border-slate-700 dark:border-slate-300"/> <div class="mb-24"><!></div></div>`),q=a(`<section class="mt-16"><!></section> <div class="markdown-content hidden"><a href="/">_</a></div>`,1);function ce(e,r){w(r,!0);let a=async()=>{let[{Octokit:e},{marked:t},{default:n},{baseUrl:i},{markedEmoji:a},{markedHighlight:o},{default:s},{default:c},{default:l},{default:u},{default:d},{default:f},{default:p},{default:m}]=await Promise.all([L(()=>import(`../chunks/ERuiquk9.js`).then(e=>e.t),__vite__mapDeps([0,1,2,3,4]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.t),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.a),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.i),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.r),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.n),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.p),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.u),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.s),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.o),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.d),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.f),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.l),__vite__mapDeps([5,1,6]),import.meta.url),L(()=>import(`../chunks/D92SYlq2.js`).then(e=>e.c),__vite__mapDeps([5,1,6]),import.meta.url)]);s.registerLanguage(`javascript`,c),s.registerLanguage(`js`,c),s.registerLanguage(`typescript`,l),s.registerLanguage(`ts`,l),s.registerLanguage(`xml`,u),s.registerLanguage(`html`,u),s.registerLanguage(`css`,d),s.registerLanguage(`bash`,f),s.registerLanguage(`sh`,f),s.registerLanguage(`json`,p),s.registerLanguage(`plaintext`,m),s.registerLanguage(`txt`,m);let h=(await new e().rest.emojis.get().catch(()=>null))?.data;return t.use({renderer:re(r.project.baseUrl,t)},i(r.project.baseUrl),o({langPrefix:`hljs language-`,highlight(e,t){let n=s.getLanguage(t)?t:`plaintext`;return s.highlight(e,{language:n}).value}}),n(),a({emojis:h??{}}))},v=d(()=>r.project.tags.map(e=>Object.prototype.hasOwnProperty.call(U,e)?{key:e,name:e}:{key:`default`,name:e}));var D=q();c(`12zqicn`,e=>{o(e,K())});var k=b(D);z(E(k),{children:(e,c)=>{var u=se(),d=E(u),w=E(d,!0);s(d);var D=y(d,2),k=E(D),A=E(k),F=E(A);P(E(F),{get icon(){return _}}),s(F);var I=y(F,2),ne=E(I,!0);s(I),s(A);var L=y(A,2);s(k);var z=y(k,2),B=E(z),V=E(B,!0);s(B);var H=y(B,2),W=E(H),G=E(W);P(G,{get icon(){return ee}});var re=y(G);s(W);var K=y(W,2),q=E(K);P(q,{get icon(){return x}});var ce=y(q);s(K);var J=y(K,2),Y=E(J);P(Y,{get icon(){return g}});var le=y(Y);s(J),s(H);var X=y(H,2);n(X,21,()=>O(v),p,(e,n)=>{var r=ie(),a=E(r);s(r),T(()=>{t(r,1,`${U[O(n).key].bg??``} ${U[O(n).key].border??``} ${U[O(n).key].text??``}
								dark:bg-slate-800 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900`),i(a,`#${O(n).name??``}`)}),o(e,r)}),s(X);var Z=y(X,2),Q=E(Z);R(Q,{get href(){return r.project.repositoryUrl},target:`_blank`,rel:`noreferrer`,noDarkVariant:!1,icon:e=>{P(e,{get icon(){return M}})},children:(e,t)=>{S(),o(e,h(`Source code`))},$$slots:{icon:!0,default:!0}});var ue=y(Q,2),de=e=>{R(e,{get href(){return r.project.livePreviewUrl},target:`_blank`,rel:`noreferrer`,noDarkVariant:!1,variant:`white`,icon:e=>{P(e,{get icon(){return N}})},children:(e,t)=>{S(),o(e,h(`Live preview`))},$$slots:{icon:!0,default:!0}})};f(ue,e=>{r.project.hasLivePreview&&r.project.livePreviewUrl&&e(de)}),s(Z),s(z),s(D);var $=y(D,4),fe=E($);m(E(fe),()=>r.markdownPromise,e=>{o(e,h(`Loading...`))},e=>{o(e,h(`README.md`))},e=>{o(e,h(`Error!`))}),s(fe),s($);var pe=y($,4);m(E(pe),()=>r.markdownPromise,null,(e,t)=>{var n=ae();m(E(n),a,null,(e,n)=>{var r=j();m(b(r),()=>O(n)(O(t)??``,{gfm:!0}),null,(e,t)=>{var n=j();te(b(n),()=>O(t)),o(e,n)}),o(e,r)}),s(n),o(e,n)},(e,t)=>{var n=oe(),r=b(n);P(E(r),{get icon(){return _}}),S(),s(r);var a=y(r,2),c=E(a,!0);s(a),T(()=>i(c,O(t))),o(e,n)}),s(pe),s(u),T(()=>{i(w,r.project.name),i(ne,r.project.imageText??`Image not available`),C(L,`background-image: url('${r.project.imageUrl??``}');`),l(L,`title`,r.project.imageText??r.project.name),i(V,r.project.description),i(re,` ${r.project.starsCount??``}
              ${(r.project.starsCount??0)<=1?`Star`:`Stars`}`),i(ce,` ${r.project.forksCount??``}
              ${(r.project.forksCount??0)<=1?`Fork`:`Forks`}`),i(le,` ${r.project.downloadsCount??``}
              ${(r.project.downloadsCount??0)<=1?`Download`:`Downloads`}`),l($,`href`,r.project.readmeUrl)}),o(e,u)},$$slots:{default:!0}}),s(k),S(2),o(e,D),u()}var J=a(`<div class="mt-16 w-full mb-32"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16">Error!</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-red-600 dark:bg-red-400 aspect-2/1 flex p-2 border-4 border-slate-900 dark:border-slate-700"><div class="m-auto inline-flex flex-wrap gap-2 justify-center items-center"><div class="text-center text-white dark:text-text font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><!></div> <div class="font-cascadia-mono font-extrabold text-center text-white dark:text-text text-2xl md:text-3xl lg:text-4xl"> </div></div></div> <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left"> </p> <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white"><div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div> <div class="flex gap-2 items-center"><!> </div></div> <div class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"><p class="dark:bg-slate-800 border-slate-900 dark:text-slate-300 dark:border-slate-300 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2">#error</p></div> <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>`),Y=a(`<section class="mt-16"><!></section>`);function le(e,t){w(t,!0);var n=Y();z(E(n),{children:(e,n)=>{var r=J(),a=y(E(r),2),c=E(a),l=E(c),u=E(l);P(E(u),{get icon(){return _}}),s(u);var d=y(u,2),f=E(d,!0);s(d),s(l),s(c);var p=y(c,2),m=E(p),v=E(m,!0);s(m);var b=y(m,2),C=E(b),w=E(C);P(w,{get icon(){return ee}});var O=y(w);s(C);var k=y(C,2),A=E(k);P(A,{get icon(){return x}});var j=y(A);s(k);var M=y(k,2),N=E(M);P(N,{get icon(){return g}});var F=y(N);s(M),s(b);var I=y(b,4);R(E(I),{href:`/`,noDarkVariant:!1,variant:`disabled`,icon:e=>{P(e,{get icon(){return D}})},children:(e,t)=>{S(),o(e,h(`Back`))},$$slots:{icon:!0,default:!0}}),s(I),s(p),s(a),s(r),T(()=>{i(f,t.project.description),i(v,t.project.description),i(O,` ${t.project.starsCount??`Unknown`??``}
              ${(t.project.starsCount??0)<=1?`Star`:`Stars`}`),i(j,` ${t.project.forksCount??`Unknown`??``}
              ${(t.project.forksCount??0)<=1?`Fork`:`Forks`}`),i(F,` ${t.project.downloadsCount??`Unknown`??``}
              ${(t.project.downloadsCount??0)<=1?`Download`:`Downloads`}`)}),o(e,r)},$$slots:{default:!0}}),s(n),o(e,n),u()}var X=a(`<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 animate-bounce">Loading...</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-primary animate-pulse aspect-2/1 flex items-center border-4 border-slate-900 dark:border-slate-700"><div class="text-center m-auto text-white dark:text-text inline-flex gap-2 animate-bounce
            font-cascadia-mono font-extrabold text-4xl md:text-5xl lg:text-6xl"><span class="animate-spin"><!></span>Loading...</div></div> <div class="w-full"><p class="dark:text-slate-300">Fetching data...</p> <div class="my-4 md:my-6 lg:my-8 flex gap-4 md:gap-6 lg:gap-8"><!></div></div></div></div>`),Z=a(`<section class="mt-16"><!></section>`);function Q(e){var t=Z();z(E(t),{children:(e,t)=>{var n=X(),r=y(E(n),2),i=E(r),a=E(i),c=E(a);P(E(c),{get icon(){return F}}),s(c),S(),s(a),s(i);var l=y(i,2),u=y(E(l),2);R(E(u),{noDarkVariant:!1,variant:`disabled`,icon:e=>{P(e,{get icon(){return F},class:`animate-spin`})},children:(e,t)=>{S(),o(e,h(`Loading`))},$$slots:{icon:!0,default:!0}}),s(u),s(l),s(r),s(n),o(e,n)},$$slots:{default:!0}}),s(t),o(e,t)}var ue=a(`<meta name="description"/> <meta property="og:description"/> <meta name="twitter:description"/>`,1),de=a(`<main><!></main>`);function $(e,t){w(t,!0);let n=()=>I(H,`$projectDetail`,i),[i,a]=r();v(()=>{t.data.projectService.fetchProjectDetail({project:t.data.project,fetch:t.data.fetch})});var d=de();c(`bwlt63`,e=>{var n=ue(),r=b(n),i=y(r,2),a=y(i,2);T(()=>{l(r,`content`,t.data.project.description||``),l(i,`content`,t.data.project.description||``),l(a,`content`,t.data.project.description||``)}),k(()=>{A.title=t.data.project.name??``}),o(e,n)});var p=E(d),m=e=>{Q(e,{})},h=e=>{ce(e,{get project(){return n()},get markdownPromise(){return t.data.markdownPromise}})},g=e=>{le(e,{get project(){return n()}})};f(p,e=>{n()?n().name!==`error`&&n().name!==`limit`?e(h,1):e(g,-1):e(m)}),s(d),o(e,d),u(),a()}export{$ as component,W as universal};