import{s as D,f as b,l as g,a as I,g as v,h as _,m as x,d,c as R,j as h,i as V,x as o,n as j,y as w,z as q}from"../chunks/scheduler.39c914d8.js";import{S as z,i as A}from"../chunks/index.dfe10aef.js";import{d as C}from"../chunks/singletons.90b6b502.js";import{g as H}from"../chunks/socials.b8eac82c.js";const L=()=>{const e=C;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},B={subscribe(e){return L().page.subscribe(e)}};function F(e){var $;let t,a,s,i=e[0].status+"",p,k,u=(($=e[0].error)==null?void 0:$.message)+"",f,E,n,y;return{c(){t=b("div"),a=b("div"),s=b("h1"),p=g(i),k=g(": "),f=g(u),E=I(),n=b("a"),y=g("Report"),this.h()},l(r){t=v(r,"DIV",{class:!0});var c=_(t);a=v(c,"DIV",{class:!0});var l=_(a);s=v(l,"H1",{class:!0});var m=_(s);p=x(m,i),k=x(m,": "),f=x(m,u),m.forEach(d),E=R(l),n=v(l,"A",{href:!0,class:!0});var S=_(n);y=x(S,"Report"),S.forEach(d),l.forEach(d),c.forEach(d),this.h()},h(){h(s,"class","text-center dark:text-white mb-4"),h(n,"href",H+"ikhsan3adi.github.io/issues"),h(n,"class","text-center dark:text-sky-300 text-sky-500 hover:text-accent"),h(a,"class","m-auto flex flex-col justify-center"),h(t,"class","w-full h-full flex absolute dark:bg-slate-800")},m(r,c){V(r,t,c),o(t,a),o(a,s),o(s,p),o(s,k),o(s,f),o(a,E),o(a,n),o(n,y)},p(r,[c]){var l;c&1&&i!==(i=r[0].status+"")&&j(p,i),c&1&&u!==(u=((l=r[0].error)==null?void 0:l.message)+"")&&j(f,u)},i:w,o:w,d(r){r&&d(t)}}}function G(e,t,a){let s;return q(e,B,i=>a(0,s=i)),[s]}let O=class extends z{constructor(t){super(),A(this,t,G,F,D,{})}};export{O as component};
