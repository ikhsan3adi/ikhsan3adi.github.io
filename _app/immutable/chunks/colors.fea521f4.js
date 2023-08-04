import{T as ce,U as fe,V as E,W as ue,s as x,r as $,f as N,a as de,g as O,h as y,c as me,d as k,j as u,i as w,x as U,u as ee,v as ae,w as te,X as ge,e as j,y as G,D as p,E as C,H as z}from"./scheduler.a7e45ac3.js";import{g as re,t as S,c as le,a as v,S as se,i as ie}from"./index.72264f79.js";import{d as ne,w as oe}from"./index.584d0700.js";import{H as he}from"./control.f5b05b5f.js";const be=!0;function Ae(a,e){const t=e.token={};function r(l,n,s,f){if(e.token!==t)return;e.resolved=f;let d=e.ctx;s!==void 0&&(d=d.slice(),d[s]=f);const c=l&&(e.current=l)(d);let h=!1;e.block&&(e.blocks?e.blocks.forEach((o,i)=>{i!==n&&o&&(re(),S(o,1,1,()=>{e.blocks[i]===o&&(e.blocks[i]=null)}),le())}):e.block.d(1),c.c(),v(c,1),c.m(e.mount(),e.anchor),h=!0),e.block=c,e.blocks&&(e.blocks[n]=c),h&&ue()}if(ce(a)){const l=fe();if(a.then(n=>{E(l),r(e.then,1,e.value,n),E(null)},n=>{if(E(l),r(e.catch,2,e.error,n),E(null),!e.hasCatch)throw n}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,a),!0;e.resolved=a}}function He(a,e,t){const r=e.slice(),{resolved:l}=a;a.current===a.then&&(r[a.value]=l),a.current===a.catch&&(r[a.error]=l),a.block.p(r,t)}const M=be,A=oe([]),H=oe(),Me=ne(A,a=>a),Te=ne(H,a=>a);function V(a,e){return new he(a,e)}new TextEncoder;class Pe{async fetchProject({project:e,fetch:t}){try{const r=await t(e.url,{method:"GET",headers:{"Content-Type":"application/json"}}),l=JSON.parse(await r.text());let n;if(r.status===200)return n={id:e.id,name:e.name,url:e.url,description:l.description,imageUrl:e.imageUrl,readmeUrl:e.readmeUrl,tags:[...e.tags,l.language.toLowerCase()],starsCount:l.stargazers_count,forksCount:l.forks,downloadsCount:await this.getDownloadsCount(e.url)},A.update(s=>{const f=[...s,n];if(M)try{localStorage.setItem("projects",JSON.stringify(f))}finally{}return f});{console.log(l);let s=[];if(M&&localStorage.getItem("projects"))s=JSON.parse(localStorage.getItem("projects")??"[]").map(f=>({...f,imageText:"Server error / API rate limit exceeded"}));else if(r.status===403)s=[{id:e.id,name:"limit",url:e.url,description:l.message,imageUrl:e.imageUrl,readmeUrl:e.readmeUrl,tags:[]}];else throw r;return A.update(()=>s),V(r.status??500,"Failed to fetch data")}}catch(r){console.log(r);let l=[];return localStorage.getItem("projects")?l=JSON.parse(localStorage.getItem("projects")??"[]").map(n=>({...n,imageText:"No internet connection"})):l=[{id:e.id,name:"error",url:e.url,description:"No internet connection",imageUrl:e.imageUrl,readmeUrl:e.readmeUrl,tags:[]}],A.update(()=>l),V(500,"Failed to fetch data")}}async fetchProjectDetail({project:e,fetch:t}){try{const r=await t(e.url,{method:"GET",headers:{"Content-Type":"application/json"}}),l=JSON.parse(await r.text());let n;if(r.status===200)return n={id:e.id,name:e.name,url:e.url,description:l.description,imageUrl:e.imageUrl,tags:[...e.tags,l.language.toLowerCase()],repositoryUrl:l.svn_url,hasLivePreview:!!l.homepage,livePreviewUrl:l.homepage,readmeUrl:e.readmeUrl,starsCount:l.stargazers_count,forksCount:l.forks,downloadsCount:await this.getDownloadsCount(e.url)},H.update(()=>n);{console.log(l);let s;if(M&&localStorage.getItem("projectDetail"))s={...JSON.parse(localStorage.getItem("projectDetail")??"{}"),imageText:"Server error / API rate limit exceeded"};else if(r.status===403)s={id:e.id,name:"limit",url:e.url,description:l.message,imageUrl:e.imageUrl,tags:[],hasLivePreview:!1,readmeUrl:e.readmeUrl,repositoryUrl:""};else throw r;return H.update(()=>s),V(r.status??500,"Failed to fetch data")}}catch(r){console.log(r);let l;return localStorage.getItem("projectDetail")?l={...JSON.parse(localStorage.getItem("projectDetail")??"{}"),imageText:"No internet connection"}:l={id:e.id,name:"error",url:e.url,description:"No internet connection",imageUrl:e.imageUrl,tags:[],hasLivePreview:!1,readmeUrl:e.readmeUrl,repositoryUrl:""},H.update(()=>l),V(500,"Failed to fetch data")}}async getProjectReadme({project:e,fetch:t}){try{return await(await t(e.readmeUrl??"",{method:"GET"})).text()}catch{return null}}async getDownloadsCount(e){const t=await fetch(`${e}/releases`,{method:"GET"});try{const r=await t.text(),l=JSON.parse(r);let n=0;for(let s=0;s<l.length;++s)for(let f=0;f<l[s].assets.length;++f)n+=l[s].assets[f].download_count;return n}catch{return 0}}}const D="https://api.github.com/repos/ikhsan3adi",Ie=[{id:0,name:"Online Auction App",url:`${D}/flutter-auction-app`,description:"",imageUrl:"https://github.com/ikhsan3adi/Flutter-Auction-App/raw/master/images/banner.png",readmeUrl:"https://raw.githubusercontent.com/ikhsan3adi/flutter-auction-app/master/README.md",tags:["flutter"]},{id:1,name:"Celenganku App Clone",url:`${D}/flutter-celenganku-clone`,description:"",imageUrl:"https://github.com/ikhsan3adi/flutter_celenganku_app_clone/raw/master/screenshots/screenshot-1.png",readmeUrl:"https://raw.githubusercontent.com/ikhsan3adi/flutter-celenganku-clone/master/README.md",tags:["flutter"]},{id:2,name:"Sistem Absensi QR Code",url:`${D}/absensi-sekolah-qr-code`,description:"",imageUrl:"https://github.com/ikhsan3adi/absensi-sekolah-qr-code/raw/master/screenshots/hero.png",readmeUrl:"https://raw.githubusercontent.com/ikhsan3adi/absensi-sekolah-qr-code/master/README.md",tags:["codeigniter","php"]},{id:3,name:"Portfolio website",url:`${D}/ikhsan3adi.github.io`,description:"",imageUrl:"https://github.com/ikhsan3adi/ikhsan3adi.github.io/raw/main/images/preview.png",readmeUrl:"https://raw.githubusercontent.com/ikhsan3adi/ikhsan3adi.github.io/master/README.md",tags:["html","typescript"]}],ke=a=>({}),Q=a=>({});function K(a){let e,t,r;const l=a[11].icon,n=$(l,a,a[10],Q);return{c(){e=N("div"),n&&n.c(),this.h()},l(s){e=O(s,"DIV",{class:!0});var f=y(e);n&&n.l(f),f.forEach(k),this.h()},h(){u(e,"class",t=(a[2]?"":a[8][a[1].key])+" mr-4 flex items-center justify-center")},m(s,f){w(s,e,f),n&&n.m(e,null),r=!0},p(s,f){n&&n.p&&(!r||f&1024)&&ee(n,l,s,s[10],r?te(l,s[10],f,ke):ae(s[10]),Q),(!r||f&6&&t!==(t=(s[2]?"":s[8][s[1].key])+" mr-4 flex items-center justify-center"))&&u(e,"class",t)},i(s){r||(v(n,s),r=!0)},o(s){S(n,s),r=!1},d(s){s&&k(e),n&&n.d(s)}}}function _e(a){let e,t,r,l,n,s,f,d,c=a[9].icon&&K(a);const h=a[11].default,o=$(h,a,a[10],null);return{c(){e=N("button"),t=N("div"),c&&c.c(),r=de(),l=N("h4"),o&&o.c(),this.h()},l(i){e=O(i,"BUTTON",{class:!0});var g=y(e);t=O(g,"DIV",{class:!0});var _=y(t);c&&c.l(_),r=me(_),l=O(_,"H4",{class:!0});var b=y(l);o&&o.l(b),b.forEach(k),_.forEach(k),g.forEach(k),this.h()},h(){u(l,"class",n=(a[2]?"":a[8][a[1].key])+" duration-200"),u(t,"class",s=a[7][a[1].key]+" "+(a[2]?"":"dark:bg-slate-900")+" "+(a[2]?"":a[6][a[1].key])+" "+(a[4]?" justify-center":"")+" "+(a[0]?"":"active:translate-x-0 active:translate-y-0")+" flex items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full"),u(e,"class",f=(a[2]?"":a[5][a[1].key])+" "+(a[3]?"w-full":"")+" bg-slate-900 duration-200")},m(i,g){w(i,e,g),U(e,t),c&&c.m(t,null),U(t,r),U(t,l),o&&o.m(l,null),d=!0},p(i,[g]){i[9].icon?c?(c.p(i,g),g&512&&v(c,1)):(c=K(i),c.c(),v(c,1),c.m(t,r)):c&&(re(),S(c,1,1,()=>{c=null}),le()),o&&o.p&&(!d||g&1024)&&ee(o,h,i,i[10],d?te(h,i[10],g,null):ae(i[10]),null),(!d||g&6&&n!==(n=(i[2]?"":i[8][i[1].key])+" duration-200"))&&u(l,"class",n),(!d||g&23&&s!==(s=i[7][i[1].key]+" "+(i[2]?"":"dark:bg-slate-900")+" "+(i[2]?"":i[6][i[1].key])+" "+(i[4]?" justify-center":"")+" "+(i[0]?"":"active:translate-x-0 active:translate-y-0")+" flex items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full"))&&u(t,"class",s),(!d||g&14&&f!==(f=(i[2]?"":i[5][i[1].key])+" "+(i[3]?"w-full":"")+" bg-slate-900 duration-200"))&&u(e,"class",f)},i(i){d||(v(c),v(o,i),d=!0)},o(i){S(c),S(o,i),d=!1},d(i){i&&k(e),c&&c.d(),o&&o.d(i)}}}function ye(a,e,t){let{$$slots:r={},$$scope:l}=e;const n=ge(r);let{disabled:s=!1}=e,{variant:f={key:s?"disabled":"primary"}}=e,{noDarkVariant:d=!0}=e,{fullWidth:c=!1}=e,{centerText:h=!0}=e;const o={primary:"dark:bg-primary",secondary:"dark:bg-white",disabled:"dark:bg-neutral-400",whatsapp:"dark:bg-green-400",email:"dark:bg-red-400",github:"dark:bg-slate-200",instagram:"dark:bg-fuchsia-400",facebook:"dark:bg-sky-400",linkedIn:"dark:bg-blue-400",medium:"dark:bg-neutral-400",telegram:"dark:bg-cyan-400"},i={primary:"dark:border-primary",secondary:"dark:border-white",disabled:"dark:border-neutral-400",whatsapp:"dark:border-green-400",email:"dark:border-red-400",github:"dark:border-slate-200",instagram:"dark:border-fuchsia-400",facebook:"dark:border-sky-400",linkedIn:"dark:border-blue-400",medium:"dark:border-neutral-400",telegram:"dark:border-cyan-400"},g={primary:"bg-primary",secondary:"bg-white",disabled:"bg-neutral-400",whatsapp:"bg-green-400",email:"bg-red-400",github:"bg-slate-200",instagram:"bg-fuchsia-400",facebook:"bg-sky-400",linkedIn:"bg-blue-400",medium:"bg-neutral-400",telegram:"bg-cyan-400"},_={primary:"dark:text-primary",secondary:"dark:text-white",disabled:"dark:text-neutral-400",whatsapp:"dark:text-green-400",email:"dark:text-red-400",github:"dark:text-slate-200",instagram:"dark:text-fuchsia-400",facebook:"dark:text-sky-400",linkedIn:"dark:text-blue-400",medium:"dark:text-neutral-400",telegram:"dark:text-cyan-400"};return a.$$set=b=>{"disabled"in b&&t(0,s=b.disabled),"variant"in b&&t(1,f=b.variant),"noDarkVariant"in b&&t(2,d=b.noDarkVariant),"fullWidth"in b&&t(3,c=b.fullWidth),"centerText"in b&&t(4,h=b.centerText),"$$scope"in b&&t(10,l=b.$$scope)},[s,f,d,c,h,o,i,g,_,n,l,r]}class Re extends se{constructor(e){super(),ie(this,e,ye,_e,x,{disabled:0,variant:1,noDarkVariant:2,fullWidth:3,centerText:4})}}var Fe={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Be={prefix:"fas",iconName:"code-fork",icon:[448,512,[],"e13b","M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]},we={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},Je=we,We={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},ve={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},qe=ve,Xe={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Ye={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},pe={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},je=pe,Ge={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};const L=parseFloat;function T(a,e=";"){let t;if(Array.isArray(a))t=a.filter(r=>r);else{t=[];for(const r in a)a[r]&&t.push(`${r}:${a[r]}`)}return t.join(e)}function Ce(a,e,t,r){let l,n;const s="1em";let f,d,c,h="-.125em";const o="visible";return r&&(c="center",n="1.25em"),t&&(l=t),e&&(e=="lg"?(d="1.33333em",f=".75em",h="-.225em"):e=="xs"?d=".75em":e=="sm"?d=".875em":d=e.replace("x","em")),T([T({float:l,width:n,height:s,"line-height":f,"font-size":d,"text-align":c,"vertical-align":h,"transform-origin":"center",overflow:o}),a])}function Ue(a,e,t,r,l,n=1,s="",f=""){let d=1,c=1;return l&&(l=="horizontal"?d=-1:l=="vertical"?c=-1:d=c=-1),T([`translate(${L(e)*n}${s},${L(t)*n}${s})`,`scale(${d*L(a)},${c*L(a)})`,r&&`rotate(${r}${f})`]," ")}function Z(a){let e,t,r,l,n,s,f,d;function c(i,g){return typeof i[10][4]=="string"?Ee:Se}let h=c(a),o=h(a);return{c(){e=p("svg"),t=p("g"),r=p("g"),o.c(),this.h()},l(i){e=C(i,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var g=y(e);t=C(g,"g",{transform:!0,"transform-origin":!0});var _=y(t);r=C(_,"g",{transform:!0});var b=y(r);o.l(b),b.forEach(k),_.forEach(k),g.forEach(k),this.h()},h(){u(r,"transform",a[12]),u(t,"transform",l="translate("+a[10][0]/2+" "+a[10][1]/2+")"),u(t,"transform-origin",n=a[10][0]/4+" 0"),u(e,"id",s=a[1]||void 0),u(e,"class",f="svelte-fa "+a[0]+" svelte-1cj2gr0"),u(e,"style",a[11]),u(e,"viewBox",d="0 0 "+a[10][0]+" "+a[10][1]),u(e,"aria-hidden","true"),u(e,"role","img"),u(e,"xmlns","http://www.w3.org/2000/svg"),z(e,"pulse",a[4]),z(e,"spin",a[3])},m(i,g){w(i,e,g),U(e,t),U(t,r),o.m(r,null)},p(i,g){h===(h=c(i))&&o?o.p(i,g):(o.d(1),o=h(i),o&&(o.c(),o.m(r,null))),g&4096&&u(r,"transform",i[12]),g&1024&&l!==(l="translate("+i[10][0]/2+" "+i[10][1]/2+")")&&u(t,"transform",l),g&1024&&n!==(n=i[10][0]/4+" 0")&&u(t,"transform-origin",n),g&2&&s!==(s=i[1]||void 0)&&u(e,"id",s),g&1&&f!==(f="svelte-fa "+i[0]+" svelte-1cj2gr0")&&u(e,"class",f),g&2048&&u(e,"style",i[11]),g&1024&&d!==(d="0 0 "+i[10][0]+" "+i[10][1])&&u(e,"viewBox",d),g&17&&z(e,"pulse",i[4]),g&9&&z(e,"spin",i[3])},d(i){i&&k(e),o.d()}}}function Se(a){let e,t,r,l,n,s,f,d,c,h;return{c(){e=p("path"),s=p("path"),this.h()},l(o){e=C(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),y(e).forEach(k),s=C(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),y(s).forEach(k),this.h()},h(){u(e,"d",t=a[10][4][0]),u(e,"fill",r=a[6]||a[2]||"currentColor"),u(e,"fill-opacity",l=a[9]!=!1?a[7]:a[8]),u(e,"transform",n="translate("+a[10][0]/-2+" "+a[10][1]/-2+")"),u(s,"d",f=a[10][4][1]),u(s,"fill",d=a[5]||a[2]||"currentColor"),u(s,"fill-opacity",c=a[9]!=!1?a[8]:a[7]),u(s,"transform",h="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")},m(o,i){w(o,e,i),w(o,s,i)},p(o,i){i&1024&&t!==(t=o[10][4][0])&&u(e,"d",t),i&68&&r!==(r=o[6]||o[2]||"currentColor")&&u(e,"fill",r),i&896&&l!==(l=o[9]!=!1?o[7]:o[8])&&u(e,"fill-opacity",l),i&1024&&n!==(n="translate("+o[10][0]/-2+" "+o[10][1]/-2+")")&&u(e,"transform",n),i&1024&&f!==(f=o[10][4][1])&&u(s,"d",f),i&36&&d!==(d=o[5]||o[2]||"currentColor")&&u(s,"fill",d),i&896&&c!==(c=o[9]!=!1?o[8]:o[7])&&u(s,"fill-opacity",c),i&1024&&h!==(h="translate("+o[10][0]/-2+" "+o[10][1]/-2+")")&&u(s,"transform",h)},d(o){o&&(k(e),k(s))}}}function Ee(a){let e,t,r,l;return{c(){e=p("path"),this.h()},l(n){e=C(n,"path",{d:!0,fill:!0,transform:!0}),y(e).forEach(k),this.h()},h(){u(e,"d",t=a[10][4]),u(e,"fill",r=a[2]||a[5]||"currentColor"),u(e,"transform",l="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")},m(n,s){w(n,e,s)},p(n,s){s&1024&&t!==(t=n[10][4])&&u(e,"d",t),s&36&&r!==(r=n[2]||n[5]||"currentColor")&&u(e,"fill",r),s&1024&&l!==(l="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")&&u(e,"transform",l)},d(n){n&&k(e)}}}function ze(a){let e,t=a[10][4]&&Z(a);return{c(){t&&t.c(),e=j()},l(r){t&&t.l(r),e=j()},m(r,l){t&&t.m(r,l),w(r,e,l)},p(r,[l]){r[10][4]?t?t.p(r,l):(t=Z(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:G,o:G,d(r){r&&k(e),t&&t.d(r)}}}function Ve(a,e,t){let{class:r=""}=e,{id:l=""}=e,{style:n=""}=e,{icon:s}=e,{size:f=""}=e,{color:d=""}=e,{fw:c=!1}=e,{pull:h=""}=e,{scale:o=1}=e,{translateX:i=0}=e,{translateY:g=0}=e,{rotate:_=""}=e,{flip:b=!1}=e,{spin:P=!1}=e,{pulse:I=!1}=e,{primaryColor:R=""}=e,{secondaryColor:F=""}=e,{primaryOpacity:B=1}=e,{secondaryOpacity:J=.4}=e,{swapOpacity:W=!1}=e,q,X,Y;return a.$$set=m=>{"class"in m&&t(0,r=m.class),"id"in m&&t(1,l=m.id),"style"in m&&t(13,n=m.style),"icon"in m&&t(14,s=m.icon),"size"in m&&t(15,f=m.size),"color"in m&&t(2,d=m.color),"fw"in m&&t(16,c=m.fw),"pull"in m&&t(17,h=m.pull),"scale"in m&&t(18,o=m.scale),"translateX"in m&&t(19,i=m.translateX),"translateY"in m&&t(20,g=m.translateY),"rotate"in m&&t(21,_=m.rotate),"flip"in m&&t(22,b=m.flip),"spin"in m&&t(3,P=m.spin),"pulse"in m&&t(4,I=m.pulse),"primaryColor"in m&&t(5,R=m.primaryColor),"secondaryColor"in m&&t(6,F=m.secondaryColor),"primaryOpacity"in m&&t(7,B=m.primaryOpacity),"secondaryOpacity"in m&&t(8,J=m.secondaryOpacity),"swapOpacity"in m&&t(9,W=m.swapOpacity)},a.$$.update=()=>{a.$$.dirty&16384&&t(10,q=s&&s.icon||[0,0,"",[],""]),a.$$.dirty&237568&&t(11,X=Ce(n,f,h,c)),a.$$.dirty&8126464&&t(12,Y=Ue(o,i,g,_,b,512))},[r,l,d,P,I,R,F,B,J,W,q,X,Y,n,s,f,c,h,o,i,g,_,b]}class Qe extends se{constructor(e){super(),ie(this,e,Ve,ze,x,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}const Ke={default:{bg:"bg-slate-400",border:"dark:border-slate-400",text:"dark:text-slate-400"},flutter:{bg:"bg-sky-400",border:"dark:border-sky-400",text:"dark:text-sky-400"},dart:{bg:"bg-teal-500",border:"dark:border-teal-500",text:"dark:text-teal-500"},html:{bg:"bg-rose-400",border:"dark:border-rose-400",text:"dark:text-rose-400"},php:{bg:"bg-indigo-300",border:"dark:border-indigo-300",text:"dark:text-indigo-300"},codeigniter:{bg:"bg-red-400",border:"dark:border-red-400",text:"dark:text-red-400"},javascript:{bg:"bg-yellow-400",border:"dark:border-yellow-400",text:"dark:text-yellow-400"},typescript:{bg:"bg-blue-400",border:"dark:border-blue-400",text:"dark:text-blue-400"},svelte:{bg:"bg-orange-400",border:"dark:border-orange-400",text:"dark:text-orange-400"}},Ze=(a,e)=>{if(e>a.length)throw new Error("Array size cannot be smaller than expected random numbers count.");const t=[],r=new Set;for(;t.length<e;){const l=Math.floor(e*Math.random());if(r.has(l))continue;const n=a[l];r.add(l),t.push(n)}return t};export{Re as B,Qe as F,Pe as P,Ge as a,je as b,Fe as c,Be as d,Ye as e,qe as f,Je as g,Ae as h,Ie as i,V as j,We as k,Xe as l,Te as m,Me as p,Ze as r,Ke as t,He as u};
