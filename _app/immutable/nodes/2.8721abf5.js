import{s as A,c as G,u as J,g as K,d as Q,n as B}from"../chunks/scheduler.e108d1fd.js";import{S,i as q,g as $,h as y,j as p,f as c,k as o,a as I,z as u,d as V,t as E,r as Z,s as D,u as M,c as L,v as T,w as j,B as O,m as z,n as U,x as k,y as w,l as R}from"../chunks/index.67ef530c.js";import{W as F}from"../chunks/Wrappper.d8bb79d0.js";function X(m){let t,a,i,n,r,e,s;const v=m[7].default,d=G(v,m,m[6],null);return{c(){t=$("button"),a=$("div"),i=$("h4"),d&&d.c(),this.h()},l(l){t=y(l,"BUTTON",{class:!0});var h=p(t);a=y(h,"DIV",{class:!0});var g=p(a);i=y(g,"H4",{class:!0});var b=p(i);d&&d.l(b),b.forEach(c),g.forEach(c),h.forEach(c),this.h()},h(){o(i,"class",n=m[4][m[0].key]+" duration-200"),o(a,"class",r=m[3][m[0].key]+" "+m[2][m[0].key]+" border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 hover:-translate-x-1.5 hover:-translate-y-1.5"),o(t,"class",e=m[1][m[0].key]+" duration-200")},m(l,h){I(l,t,h),u(t,a),u(a,i),d&&d.m(i,null),s=!0},p(l,[h]){d&&d.p&&(!s||h&64)&&J(d,v,l,l[6],s?Q(v,l[6],h,null):K(l[6]),null),(!s||h&1&&n!==(n=l[4][l[0].key]+" duration-200"))&&o(i,"class",n),(!s||h&1&&r!==(r=l[3][l[0].key]+" "+l[2][l[0].key]+" border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 hover:-translate-x-1.5 hover:-translate-y-1.5"))&&o(a,"class",r),(!s||h&1&&e!==(e=l[1][l[0].key]+" duration-200"))&&o(t,"class",e)},i(l){s||(V(d,l),s=!0)},o(l){E(d,l),s=!1},d(l){l&&c(t),d&&d.d(l)}}}function Y(m,t,a){let{$$slots:i={},$$scope:n}=t,{variant:r={key:"primary"}}=t,{noDarkVariant:e=!0}=t;const s={primary:e?"bg-text":"bg-text dark:bg-primary",secondary:e?"bg-text":"bg-text dark:bg-white"},v={primary:e?"border-text":"border-text dark:border-primary",secondary:e?"border-text":"border-text dark:border-white"},d={primary:e?"bg-primary":"bg-primary dark:bg-text",secondary:e?"bg-white":"bg-white dark:bg-text"},l={primary:e?"":"dark:text-primary",secondary:e?"":"dark:text-white"};return m.$$set=h=>{"variant"in h&&a(0,r=h.variant),"noDarkVariant"in h&&a(5,e=h.noDarkVariant),"$$scope"in h&&a(6,n=h.$$scope)},[r,s,v,d,l,e,n,i]}class tt extends S{constructor(t){super(),q(this,t,Y,X,A,{variant:0,noDarkVariant:5})}}const et={links:{linkedIn:"https://www.linkedin.com/in/ikhsan-satriadi/"}};function at(m){let t;return{c(){t=z("Visit LinkedIn")},l(a){t=U(a,"Visit LinkedIn")},m(a,i){I(a,t,i)},d(a){a&&c(t)}}}function rt(m){let t,a,i="About",n,r,e,s=`<h3 class="mb-4">About me</h3> <p>I&#39;m Ikhsan, a passionate software engineer with a love for problem-solving and creating
						impactful solutions. I thrive on continuous learning and enjoy collaborating with teams
						to tackle challenges and deliver high-quality software solutions. Let&#39;s build something
						great together!</p>`,v,d,l,h="To learn more about my experience and skills, feel free to visit my LinkedIn profile:",g,b,x,_;return x=new tt({props:{variant:m[0],$$slots:{default:[at]},$$scope:{ctx:m}}}),{c(){t=$("div"),a=$("h1"),a.textContent=i,n=D(),r=$("div"),e=$("div"),e.innerHTML=s,v=D(),d=$("div"),l=$("p"),l.textContent=h,g=D(),b=$("a"),Z(x.$$.fragment),this.h()},l(f){t=y(f,"DIV",{class:!0});var H=p(t);a=y(H,"H1",{class:!0,id:!0,"data-svelte-h":!0}),O(a)!=="svelte-l1nhli"&&(a.textContent=i),n=L(H),r=y(H,"DIV",{class:!0});var C=p(r);e=y(C,"DIV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-jqpbw0"&&(e.innerHTML=s),v=L(C),d=y(C,"DIV",{class:!0});var N=p(d);l=y(N,"P",{class:!0,"data-svelte-h":!0}),O(l)!=="svelte-45l2qn"&&(l.textContent=h),g=L(N),b=y(N,"A",{href:!0});var P=p(b);M(x.$$.fragment,P),P.forEach(c),N.forEach(c),C.forEach(c),H.forEach(c),this.h()},h(){o(a,"class","text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"),o(a,"id","about"),o(e,"class","bg-custom-2 px-4 py-4 md:px-6 lg:py-6 lg:px-8 w-full h-full border-4 border-text dark:border-white"),o(l,"class","mb-4"),o(b,"href",et.links.linkedIn),o(d,"class","bg-secondary px-4 py-4 md:px-6 lg:py-6 lg:px-8 w-full border-4 border-text dark:border-white"),o(r,"class","w-full flex flex-col gap-4 md:flex-row md:justify-between h-max"),o(t,"class","w-full pb-36")},m(f,H){I(f,t,H),u(t,a),u(t,n),u(t,r),u(r,e),u(r,v),u(r,d),u(d,l),u(d,g),u(d,b),T(x,b,null),_=!0},p(f,H){const C={};H&2&&(C.$$scope={dirty:H,ctx:f}),x.$set(C)},i(f){_||(V(x.$$.fragment,f),_=!0)},o(f){E(x.$$.fragment,f),_=!1},d(f){f&&c(t),j(x)}}}function st(m){let t,a,i,n,r;return a=new F({props:{$$slots:{default:[rt]},$$scope:{ctx:m}}}),{c(){t=$("section"),Z(a.$$.fragment),i=D(),n=$("div"),this.h()},l(e){t=y(e,"SECTION",{class:!0});var s=p(t);M(a.$$.fragment,s),i=L(s),n=y(s,"DIV",{class:!0}),p(n).forEach(c),s.forEach(c),this.h()},h(){o(n,"class","absolute left-0 right-0 bottom-0 bg-custom-3 h-16 border-text border-y-4"),o(t,"class","w-full bg-custom-1 dark:bg-slate-700 relative")},m(e,s){I(e,t,s),T(a,t,null),u(t,i),u(t,n),r=!0},p(e,[s]){const v={};s&2&&(v.$$scope={dirty:s,ctx:e}),a.$set(v)},i(e){r||(V(a.$$.fragment,e),r=!0)},o(e){E(a.$$.fragment,e),r=!1},d(e){e&&c(t),j(a)}}}function lt(m){return[{key:"primary"}]}class nt extends S{constructor(t){super(),q(this,t,lt,st,A,{})}}const ot="/_app/immutable/assets/hero-bg.41959126.svg";function it(m){let t,a,i,n,r,e,s,v,d,l,h,g,b,x;return{c(){t=k("svg"),a=k("title"),i=z("emblem"),n=k("polygon"),r=k("polyline"),e=k("path"),s=k("path"),v=k("path"),d=k("path"),l=k("path"),h=k("path"),g=k("path"),b=k("path"),x=k("path"),this.h()},l(_){t=w(_,"svg",{role:!0,class:!0,id:!0,"data-name":!0,xmlns:!0,viewBox:!0});var f=p(t);a=w(f,"title",{});var H=p(a);i=U(H,"emblem"),H.forEach(c),n=w(f,"polygon",{points:!0}),p(n).forEach(c),r=w(f,"polyline",{points:!0}),p(r).forEach(c),e=w(f,"path",{d:!0}),p(e).forEach(c),s=w(f,"path",{d:!0}),p(s).forEach(c),v=w(f,"path",{d:!0}),p(v).forEach(c),d=w(f,"path",{d:!0}),p(d).forEach(c),l=w(f,"path",{d:!0}),p(l).forEach(c),h=w(f,"path",{d:!0}),p(h).forEach(c),g=w(f,"path",{d:!0}),p(g).forEach(c),b=w(f,"path",{d:!0}),p(b).forEach(c),x=w(f,"path",{d:!0}),p(x).forEach(c),f.forEach(c),this.h()},h(){o(n,"points","237 127.75 237 146.16 172.66 146.16 172.66 198.88 135.84 162.06 135.84 146.16 115.85 146.16 70.85 109.34 218.59 109.34 237 127.75"),o(r,"points","70.48 256.82 107.3 220 135.84 220 135.84 177.62 172.66 214.44 172.66 220 237 220 199 256.82"),o(e,"d","M276.709,153.764V109.606h36.822V256.9H276.709Zm55.234,29.487,73.645-73.645H442.41v18.411l-55.234,55.234,55.234,55.234V256.9H405.588Z"),o(s,"d","M481.456,153.764V109.606h36.823v55.233H555.1l-36.823,36.823V256.9H481.456Zm128.879,47.9H536.69l36.823-36.823h36.822V109.606h36.823V256.9H610.335Z"),o(v,"d","M71,407.9V396.823h92.056L71,304.766V286.355h36.823L236.7,415.234v18.411H71Zm55.234-121.543H236.7v36.822H163.056Z"),o(d,"d","M277.148,330.513V286.355h36.823L442.85,415.234v18.411H406.027l-92.056-92.056v36.822h18.411l36.823,36.823H313.971v18.411H277.148Z"),o(l,"d","M483.3,304.766V286.355h36.823l92.056,92.056V286.355H649v147.29H612.177Zm0,51.494V323.177L520.121,360v73.645H483.3Z"),o(h,"d","M71.028,481.515V463.1h165.7l-36.823,36.823H89.439Zm0,115.934v-5.466l18.411-18.411h36.823L89.439,610.394H71.028Zm73.645-23.877h55.234V555.161H163.084l73.646-73.646V610.394H107.851Zm-36.822-36.823,18.411-18.411H181.5l-36.823,36.823H107.851Z"),o(g,"d","M417.1,610.394H380.28V591.983H325.046l36.823-36.822H380.28V518.338l-92.056,92.056H251.4V591.983L380.28,463.1H417.1v147.29Z"),o(b,"d","M468.6,573.572h55.234l36.822-36.823-36.822-36.822H468.6v55.234l-36.823,36.822V463.1H542.242l55.234,55.234v36.823l-55.234,55.233H431.774Z"),o(x,"d","M612.147,507.262V463.1H648.97v147.29H612.147Z"),o(t,"role","img"),o(t,"class","fill-current"),o(t,"id","Layer_1"),o(t,"data-name","Layer 1"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 0 650 650")},m(_,f){I(_,t,f),u(t,a),u(a,i),u(t,n),u(t,r),u(t,e),u(t,s),u(t,v),u(t,d),u(t,l),u(t,h),u(t,g),u(t,b),u(t,x)},p:B,i:B,o:B,d(_){_&&c(t)}}}class W extends S{constructor(t){super(),q(this,t,null,it,A,{})}}function dt(m){let t,a,i='<h4 class="dark:text-white">Hello, my name is</h4> <h1 class="mb-2 dark:text-white">Ikhsan <h1 class="inline text-primary">Satriadi</h1></h1> <h4 class="mb-4 dark:text-white">A mobile developer</h4> <div class="flex gap-3 sm:max-md:justify-center"><button class="bg-text dark:bg-primary"><div class="bg-primary px-4 py-2 -translate-x-1 -translate-y-1 border-text dark:border-primary border-2 dark:bg-text"><h4 class="dark:text-primary">See projects</h4></div></button> <button class="bg-text dark:bg-white"><div class="bg-background px-4 py-2 -translate-x-1 -translate-y-1 border-text dark:border-white border-2 dark:bg-text"><h4 class="dark:text-white">Contact me</h4></div></button></div>',n,r,e,s,v,d,l,h;return s=new W({}),l=new W({}),{c(){t=$("div"),a=$("div"),a.innerHTML=i,n=D(),r=$("div"),e=$("div"),Z(s.$$.fragment),v=D(),d=$("div"),Z(l.$$.fragment),this.h()},l(g){t=y(g,"DIV",{class:!0});var b=p(t);a=y(b,"DIV",{class:!0,"data-svelte-h":!0}),O(a)!=="svelte-1wb8jlw"&&(a.innerHTML=i),n=L(b),r=y(b,"DIV",{class:!0});var x=p(r);e=y(x,"DIV",{class:!0});var _=p(e);M(s.$$.fragment,_),_.forEach(c),v=L(x),d=y(x,"DIV",{class:!0});var f=p(d);M(l.$$.fragment,f),f.forEach(c),x.forEach(c),b.forEach(c),this.h()},h(){o(a,"class","mb-52 mt-16 md:m-0 py-2 md:py-8 lg:py-9 sm:max-md:text-center"),o(e,"class","w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 dark:text-white absolute -top-3 right-2"),o(d,"class","w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 text-secondary dark:text-transparent dark:stroke-[4] dark:stroke-custom-3"),o(r,"class","max-md:mx-auto w-max md:my-auto relative"),o(t,"class","w-full md:flex md:gap-4 md:justify-between my-auto")},m(g,b){I(g,t,b),u(t,a),u(t,n),u(t,r),u(r,e),T(s,e,null),u(r,v),u(r,d),T(l,d,null),h=!0},p:B,i(g){h||(V(s.$$.fragment,g),V(l.$$.fragment,g),h=!0)},o(g){E(s.$$.fragment,g),E(l.$$.fragment,g),h=!1},d(g){g&&c(t),j(s),j(l)}}}function ct(m){let t,a,i,n;return i=new F({props:{$$slots:{default:[dt]},$$scope:{ctx:m}}}),{c(){t=$("section"),a=$("div"),Z(i.$$.fragment),this.h()},l(r){t=y(r,"SECTION",{});var e=p(t);a=y(e,"DIV",{class:!0,style:!0});var s=p(a);M(i.$$.fragment,s),s.forEach(c),e.forEach(c),this.h()},h(){o(a,"class","h-[1000px] md:h-[870px] bg-cover bg-no-repeat flex"),R(a,"background-image","url("+ot+")")},m(r,e){I(r,t,e),u(t,a),T(i,a,null),n=!0},p(r,[e]){const s={};e&1&&(s.$$scope={dirty:e,ctx:r}),i.$set(s)},i(r){n||(V(i.$$.fragment,r),n=!0)},o(r){E(i.$$.fragment,r),n=!1},d(r){r&&c(t),j(i)}}}class ut extends S{constructor(t){super(),q(this,t,null,ct,A,{})}}function ht(m){let t,a,i,n,r;return a=new ut({}),n=new nt({}),{c(){t=$("main"),Z(a.$$.fragment),i=D(),Z(n.$$.fragment)},l(e){t=y(e,"MAIN",{});var s=p(t);M(a.$$.fragment,s),i=L(s),M(n.$$.fragment,s),s.forEach(c)},m(e,s){I(e,t,s),T(a,t,null),u(t,i),T(n,t,null),r=!0},p:B,i(e){r||(V(a.$$.fragment,e),V(n.$$.fragment,e),r=!0)},o(e){E(a.$$.fragment,e),E(n.$$.fragment,e),r=!1},d(e){e&&c(t),j(a),j(n)}}}class gt extends S{constructor(t){super(),q(this,t,null,ht,A,{})}}export{gt as component};