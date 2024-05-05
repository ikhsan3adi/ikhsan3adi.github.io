import{s as ae,D as W,l as M,E as G,h,m as I,d as u,j as r,i as T,x as c,y as R,f as p,g,a as z,c as O,A as oe,G as xe,q as he,P as Ee,B as Ve,o as He}from"./scheduler.a7e45ac3.js";import{S as se,i as le,b as J,d as ne,m as Q,a as B,t as U,e as ee,g as ke,c as be}from"./index.72264f79.js";import{W as Le,e as te}from"./Wrappper.b424ac37.js";import{s as Ze}from"./socials.036bd6dc.js";import{w as ye}from"./index.584d0700.js";const Se=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,de=[{text:"Home",link:"home"},{text:"About",link:"about"},{text:"Portfolio",link:"portfolio"},{text:"Tools",link:"tools"},{text:"Social",link:"social"},{text:"Contact",link:"contact"}];function Me(o){let e,n,a,t;return{c(){e=W("svg"),n=W("title"),a=M("ikhsan3adi"),t=W("path"),this.h()},l(l){e=G(l,"svg",{id:!0,class:!0,"data-name":!0,xmlns:!0,viewBox:!0});var s=h(e);n=G(s,"title",{});var i=h(n);a=I(i,"ikhsan3adi"),i.forEach(u),t=G(s,"path",{d:!0}),h(t).forEach(u),s.forEach(u),this.h()},h(){r(t,"d","M57,57V663H663V57ZM589.54,181.02V130.37h33.77V265.44H589.54V214.79H522.01l33.77-33.77ZM471.36,130.37h33.76v50.65h33.77l-33.77,33.77v50.65H471.36Zm1.69,195.85,33.76,33.77v67.53H473.05ZM401.78,130.37h33.77v16.88L384.9,197.9l50.65,50.66v16.88H401.78L334.25,197.9Zm34.17,280.27v16.88H402.19l-84.42-84.41v33.76h16.88l33.77,33.77H317.77v16.88H284V292.45h33.77ZM283.6,130.37h33.77V265.44H283.6ZM94.96,309.34V292.45h33.76L246.91,410.64v16.88H94.96V393.76h84.42Zm50.65-16.89h101.3v33.77H179.38ZM94.98,589.61V572.72l16.89-16.88h33.76l-33.76,33.77Zm33.77-50.65V522.07l16.88-16.88h50.65l-33.76,33.77Zm118.19,50.65H128.75l33.77-33.77h50.65V538.96H179.4l67.54-67.54Zm-33.77-101.3H111.87L94.98,471.42V454.54H246.94Zm-.83-222.94H94.48l33.77-33.77h26.17V192.74l33.76,33.77v5.09h59Zm34.84-101.48h-59v48.35l-33.76-33.77V163.89H136.09L94.82,130.13H230.3l16.88,16.88ZM412.34,589.61H378.58V572.72H327.92l33.77-33.76h16.89V505.19l-84.42,84.42H260.39V572.72L378.58,454.54h33.76Zm165.41-50.65L527.1,589.61H425.8l33.76-33.77h50.66l33.76-33.77-33.76-33.76H459.56v50.65L425.8,572.72V454.54H527.1l50.65,50.65Zm47.22,50.65H591.21V454.54h33.76ZM625,427.52H591.23L473.05,309.34V292.45h33.76l84.42,84.42V292.45H625Z"),r(e,"id","Layer_1"),r(e,"class","fill-current"),r(e,"data-name","Layer 1"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"viewBox","0 0 720 720")},m(l,s){T(l,e,s),c(e,n),c(n,a),c(e,t)},p:R,i:R,o:R,d(l){l&&u(e)}}}class Ie extends se{constructor(e){super(),le(this,e,null,Me,ae,{})}}function me(o,e,n){const a=o.slice();return a[3]=e[n],a}function ve(o,e,n){const a=o.slice();return a[6]=e[n],a}function pe(o){let e,n=te(de),a=[];for(let t=0;t<n.length;t+=1)a[t]=ge(ve(o,n,t));return{c(){e=p("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=g(t,"DIV",{class:!0});var l=h(e);for(let s=0;s<a.length;s+=1)a[s].l(l);l.forEach(u),this.h()},h(){r(e,"class","w-full flex justify-center md:justify-around flex-wrap items-center text-white gap-x-8 gap-y-6")},m(t,l){T(t,e,l);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(e,null)},p(t,l){if(l&0){n=te(de);let s;for(s=0;s<n.length;s+=1){const i=ve(t,n,s);a[s]?a[s].p(i,l):(a[s]=ge(i),a[s].c(),a[s].m(e,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=n.length}},d(t){t&&u(e),xe(a,t)}}}function ge(o){let e,n=o[6].text+"",a;return{c(){e=p("a"),a=M(n),this.h()},l(t){e=g(t,"A",{class:!0,href:!0});var l=h(e);a=I(l,n),l.forEach(u),this.h()},h(){r(e,"class","hover:underline active:text-primary"),r(e,"href","#"+o[6].link)},m(t,l){T(t,e,l),c(e,a)},p:R,d(t){t&&u(e)}}}function _e(o){let e,n,a,t,l,s;var i=o[3].icon;function H(w){return{}}return i&&(t=he(i,H())),{c(){e=p("a"),n=p("div"),a=p("div"),t&&J(t.$$.fragment),l=z(),this.h()},l(w){e=g(w,"A",{href:!0,target:!0,class:!0});var E=h(e);n=g(E,"DIV",{class:!0});var y=h(n);a=g(y,"DIV",{class:!0});var V=h(a);t&&ne(t.$$.fragment,V),V.forEach(u),y.forEach(u),l=O(E),E.forEach(u),this.h()},h(){r(a,"class","w-10 h-10 text-transparent stroke-slate-400 group-hover:stroke-slate-100 group-active:stroke-primary"),r(n,"class","w-10 h-10 flex overflow-hidden"),r(e,"href",o[3].link),r(e,"target","_blank"),r(e,"class","group")},m(w,E){T(w,e,E),c(e,n),c(n,a),t&&Q(t,a,null),c(e,l),s=!0},p(w,E){if(i!==(i=w[3].icon)){if(t){ke();const y=t;U(y.$$.fragment,1,0,()=>{ee(y,1)}),be()}i?(t=he(i,H()),J(t.$$.fragment),B(t.$$.fragment,1),Q(t,a,null)):t=null}},i(w){s||(t&&B(t.$$.fragment,w),s=!0)},o(w){t&&U(t.$$.fragment,w),s=!1},d(w){w&&u(e),t&&ee(t)}}}function Te(o){let e,n,a,t,l,s,i,H,w,E,y,V,k,j,N=new Date().getFullYear()+"",A,C,b,P,q,_,x,K="SvelteKit",D,L,X="Tailwind CSS",Z;l=new Ie({});let $=!o[0]&&pe(o),F=te(o[1]),m=[];for(let f=0;f<F.length;f+=1)m[f]=_e(me(o,F,f));const $e=f=>U(m[f],1,1,()=>{m[f]=null});return{c(){e=p("div"),n=p("div"),a=p("div"),t=p("div"),J(l.$$.fragment),s=z(),$&&$.c(),H=z(),w=p("hr"),E=z(),y=p("div");for(let f=0;f<m.length;f+=1)m[f].c();V=z(),k=p("p"),j=M("© "),A=M(N),C=M(`, made with ❤️ by
          `),b=p("a"),P=M("Ikhsan Satriadi"),_=M(`, using
          `),x=p("a"),x.textContent=K,D=M(`
          and
          `),L=p("a"),L.textContent=X,this.h()},l(f){e=g(f,"DIV",{class:!0});var v=h(e);n=g(v,"DIV",{class:!0});var d=h(n);a=g(d,"DIV",{class:!0});var Y=h(a);t=g(Y,"DIV",{class:!0});var ce=h(t);ne(l.$$.fragment,ce),ce.forEach(u),Y.forEach(u),s=O(d),$&&$.l(d),d.forEach(u),H=O(v),w=g(v,"HR",{class:!0}),E=O(v),y=g(v,"DIV",{class:!0});var ue=h(y);for(let re=0;re<m.length;re+=1)m[re].l(ue);ue.forEach(u),V=O(v),k=g(v,"P",{class:!0});var S=h(k);j=I(S,"© "),A=I(S,N),C=I(S,`, made with ❤️ by
          `),b=g(S,"A",{href:!0,target:!0,class:!0});var fe=h(b);P=I(fe,"Ikhsan Satriadi"),fe.forEach(u),_=I(S,`, using
          `),x=g(S,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),oe(x)!=="svelte-1p2ok1r"&&(x.textContent=K),D=I(S,`
          and
          `),L=g(S,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),oe(L)!=="svelte-126jaf4"&&(L.textContent=X),S.forEach(u),v.forEach(u),this.h()},h(){r(t,"class","h-24 w-24 sm:w-28 sm:h-28 md:w-36 md:h-36 my-auto"),r(a,"class","flex"),r(n,"class",i="py-6 flex "+(o[0]?"justify-center":"justify-between")+" gap-4 md:gap-12 lg:gap-36 xl:gap-52 items-center text-white"),r(w,"class","my-4 border-slate-500"),r(y,"class","flex justify-center gap-4 my-10 opacity-90 h-10"),r(b,"href",q=o[0]?"/":"#social"),r(b,"target","_blank"),r(b,"class","text-primary hover:underline active:text-custom-3"),r(x,"href","https://svelte.dev"),r(x,"target","_blank"),r(x,"class","text-orange-500 hover:underline active:text-white"),r(L,"href","https://tailwindcss.com"),r(L,"target","_blank"),r(L,"class","text-cyan-500 hover:underline active:text-white"),r(k,"class","text-slate-200 text-center text-sm"),r(e,"class","w-full py-4")},m(f,v){T(f,e,v),c(e,n),c(n,a),c(a,t),Q(l,t,null),c(n,s),$&&$.m(n,null),c(e,H),c(e,w),c(e,E),c(e,y);for(let d=0;d<m.length;d+=1)m[d]&&m[d].m(y,null);c(e,V),c(e,k),c(k,j),c(k,A),c(k,C),c(k,b),c(b,P),c(k,_),c(k,x),c(k,D),c(k,L),Z=!0},p(f,v){if(f[0]?$&&($.d(1),$=null):$?$.p(f,v):($=pe(f),$.c(),$.m(n,null)),(!Z||v&1&&i!==(i="py-6 flex "+(f[0]?"justify-center":"justify-between")+" gap-4 md:gap-12 lg:gap-36 xl:gap-52 items-center text-white"))&&r(n,"class",i),v&2){F=te(f[1]);let d;for(d=0;d<F.length;d+=1){const Y=me(f,F,d);m[d]?(m[d].p(Y,v),B(m[d],1)):(m[d]=_e(Y),m[d].c(),B(m[d],1),m[d].m(y,null))}for(ke(),d=F.length;d<m.length;d+=1)$e(d);be()}(!Z||v&1&&q!==(q=f[0]?"/":"#social"))&&r(b,"href",q)},i(f){if(!Z){B(l.$$.fragment,f);for(let v=0;v<F.length;v+=1)B(m[v]);Z=!0}},o(f){U(l.$$.fragment,f),m=m.filter(Boolean);for(let v=0;v<m.length;v+=1)U(m[v]);Z=!1},d(f){f&&u(e),ee(l),$&&$.d(),xe(m,f)}}}function je(o){let e,n,a,t;return a=new Le({props:{$$slots:{default:[Te]},$$scope:{ctx:o}}}),{c(){e=p("footer"),n=p("div"),J(a.$$.fragment),this.h()},l(l){e=g(l,"FOOTER",{});var s=h(e);n=g(s,"DIV",{class:!0});var i=h(n);ne(a.$$.fragment,i),i.forEach(u),s.forEach(u),this.h()},h(){r(n,"class","w-full bg-slate-800 h-max border-t-4 border-slate-800 dark:border-white")},m(l,s){T(l,e,s),c(e,n),Q(a,n,null),t=!0},p(l,[s]){const i={};s&513&&(i.$$scope={dirty:s,ctx:l}),a.$set(i)},i(l){t||(B(a.$$.fragment,l),t=!0)},o(l){U(a.$$.fragment,l),t=!1},d(l){l&&u(e),ee(a)}}}function Ae(o,e,n){let{noNavLinks:a=!1}=e;const t=Ze;t.splice(4,Number.MAX_VALUE);const l=t;return o.$$set=s=>{"noNavLinks"in s&&n(0,a=s.noNavLinks)},[a,l]}class Re extends se{constructor(e){super(),le(this,e,Ae,je,ae,{noNavLinks:0})}}const Ue=ye(!1),ie=ye(!1);function Ce(o){let e,n,a,t;return{c(){e=W("svg"),n=W("title"),a=M("dark-mode"),t=W("path"),this.h()},l(l){e=G(l,"svg",{id:!0,class:!0,role:!0,"data-name":!0,xmlns:!0,viewBox:!0});var s=h(e);n=G(s,"title",{});var i=h(n);a=I(i,"dark-mode"),i.forEach(u),t=G(s,"path",{d:!0}),h(t).forEach(u),s.forEach(u),this.h()},h(){r(t,"d","M199.87,105.22A100,100,0,1,1,94.78.13,75,75,0,0,0,199.87,105.22Z"),r(e,"id","Layer_1"),r(e,"class","fill-current"),r(e,"role","img"),r(e,"data-name","Layer 1"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"viewBox","0 0 200 200")},m(l,s){T(l,e,s),c(e,n),c(n,a),c(e,t)},p:R,i:R,o:R,d(l){l&&u(e)}}}class De extends se{constructor(e){super(),le(this,e,null,Ce,ae,{})}}const{document:we}=Se;function Be(o){let e,n=`if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }`,a,t,l,s,i,H,w,E,y,V,k,j,N,A,C,b,P,q;return H=new De({}),{c(){e=p("script"),e.textContent=n,a=z(),t=p("button"),l=p("span"),s=p("span"),i=p("div"),J(H.$$.fragment),y=z(),V=p("span"),k=p("div"),this.h()},l(_){const x=Ee("svelte-1ozrzz9",we.head);e=g(x,"SCRIPT",{"data-svelte-h":!0}),oe(e)!=="svelte-s2289w"&&(e.textContent=n),x.forEach(u),a=O(_),t=g(_,"BUTTON",{class:!0});var K=h(t);l=g(K,"SPAN",{class:!0});var D=h(l);s=g(D,"SPAN",{class:!0,"aria-hidden":!0});var L=h(s);i=g(L,"DIV",{class:!0});var X=h(i);ne(H.$$.fragment,X),X.forEach(u),L.forEach(u),y=O(D),V=g(D,"SPAN",{class:!0,"aria-hidden":!0});var Z=h(V);k=g(Z,"DIV",{class:!0}),h(k).forEach(u),Z.forEach(u),D.forEach(u),K.forEach(u),this.h()},h(){r(i,"class",w="w-4 h-4 text-black translate-y-0 "+(o[0]?"dark:text-white":"dark:text-text")+" duration-800"),r(s,"class",E=(o[1]?"opacity-100 ease-in-out duration-800":"opacity-0 ease-in-out duration-800")+" translate-y-0 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"),r(s,"aria-hidden","true"),r(k,"class",j="h-4 w-4 rounded-full translate-y-0 "+(o[0]?"dark:bg-white":"dark:bg-slate-900")+" bg-slate-900"),r(V,"class",N=(o[1]?"opacity-0 ease-in-out duration-800":"opacity-100 ease-in-out duration-800")+" translate-y-0 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"),r(V,"aria-hidden","true"),r(l,"class",A=(o[1]?"translate-x-5":"translate-x-0")+" translate-y-0 pointer-events-none relative inline-block h-4 w-4 rounded-full shadow transform ring-0 transition ease-in-out duration-200"),r(t,"class",C=(o[1]&&o[0]?"border-white focus:ring-white":"border-slate-900 focus:ring-slate-900 focus:ring-offset-text")+" border-2 relative inline-flex flex-shrink-0 h-6 w-11 items-center px-0.5 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-1 focus:ring-offset-1")},m(_,x){c(we.head,e),T(_,a,x),T(_,t,x),c(t,l),c(l,s),c(s,i),Q(H,i,null),c(l,y),c(l,V),c(V,k),b=!0,P||(q=Ve(t,"click",o[2]),P=!0)},p(_,[x]){(!b||x&1&&w!==(w="w-4 h-4 text-black translate-y-0 "+(_[0]?"dark:text-white":"dark:text-text")+" duration-800"))&&r(i,"class",w),(!b||x&2&&E!==(E=(_[1]?"opacity-100 ease-in-out duration-800":"opacity-0 ease-in-out duration-800")+" translate-y-0 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"))&&r(s,"class",E),(!b||x&1&&j!==(j="h-4 w-4 rounded-full translate-y-0 "+(_[0]?"dark:bg-white":"dark:bg-slate-900")+" bg-slate-900"))&&r(k,"class",j),(!b||x&2&&N!==(N=(_[1]?"opacity-0 ease-in-out duration-800":"opacity-100 ease-in-out duration-800")+" translate-y-0 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"))&&r(V,"class",N),(!b||x&2&&A!==(A=(_[1]?"translate-x-5":"translate-x-0")+" translate-y-0 pointer-events-none relative inline-block h-4 w-4 rounded-full shadow transform ring-0 transition ease-in-out duration-200"))&&r(l,"class",A),(!b||x&3&&C!==(C=(_[1]&&_[0]?"border-white focus:ring-white":"border-slate-900 focus:ring-slate-900 focus:ring-offset-text")+" border-2 relative inline-flex flex-shrink-0 h-6 w-11 items-center px-0.5 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-1 focus:ring-offset-1"))&&r(t,"class",C)},i(_){b||(B(H.$$.fragment,_),b=!0)},o(_){U(H.$$.fragment,_),b=!1},d(_){_&&(u(a),u(t)),u(e),ee(H),P=!1,q()}}}function Ne(o,e,n){let{isBgTransparent:a=!0}=e,t=!1;He(()=>{ie.set(localStorage.theme=="dark"),ie.subscribe(i=>{t!=i&&s(i)})});function l(){s(!t)}function s(i){n(1,t=i),ie.set(i),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.theme=t?"dark":"light"}return o.$$set=i=>{"isBgTransparent"in i&&n(0,a=i.isBgTransparent)},[a,t,l]}class We extends se{constructor(e){super(),le(this,e,Ne,Be,ae,{isBgTransparent:0})}}export{Re as F,We as T,Se as g,Ue as h,de as n};