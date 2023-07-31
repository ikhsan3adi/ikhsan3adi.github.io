import{s as W,r as C,f as p,a as F,g as v,h as _,c as A,d as k,j as g,i as E,x as I,u as O,v as J,w as V,X as H}from"./scheduler.39c914d8.js";import{S as G,i as R,a as y,g as q,t as w,c as X}from"./index.dfe10aef.js";import{d as B,w as L}from"./index.42418fce.js";import{H as z}from"./control.f5b05b5f.js";const K=!0;function ee(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const T=K,M=e=>({}),N=e=>({});function P(e){let l,a,t;const o=e[11].icon,i=C(o,e,e[10],N);return{c(){l=p("div"),i&&i.c(),this.h()},l(s){l=v(s,"DIV",{class:!0});var d=_(l);i&&i.l(d),d.forEach(k),this.h()},h(){g(l,"class",a=(e[2]?"":e[8][e[1].key])+" mr-4 flex items-center justify-center")},m(s,d){E(s,l,d),i&&i.m(l,null),t=!0},p(s,d){i&&i.p&&(!t||d&1024)&&O(i,o,s,s[10],t?V(o,s[10],d,M):J(s[10]),N),(!t||d&6&&a!==(a=(s[2]?"":s[8][s[1].key])+" mr-4 flex items-center justify-center"))&&g(l,"class",a)},i(s){t||(y(i,s),t=!0)},o(s){w(i,s),t=!1},d(s){s&&k(l),i&&i.d(s)}}}function Q(e){let l,a,t,o,i,s,d,f,n=e[9].icon&&P(e);const b=e[11].default,u=C(b,e,e[10],null);return{c(){l=p("button"),a=p("div"),n&&n.c(),t=F(),o=p("h4"),u&&u.c(),this.h()},l(r){l=v(r,"BUTTON",{class:!0});var c=_(l);a=v(c,"DIV",{class:!0});var h=_(a);n&&n.l(h),t=A(h),o=v(h,"H4",{class:!0});var m=_(o);u&&u.l(m),m.forEach(k),h.forEach(k),c.forEach(k),this.h()},h(){g(o,"class",i=(e[2]?"":e[8][e[1].key])+" duration-200"),g(a,"class",s=e[7][e[1].key]+" "+(e[2]?"":"dark:bg-slate-900")+" "+(e[2]?"":e[6][e[1].key])+" "+(e[4]?" justify-center":"")+" "+(e[0]?"":"active:translate-x-0 active:translate-y-0")+" flex items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full"),g(l,"class",d=(e[2]?"":e[5][e[1].key])+" "+(e[3]?"w-full":"")+" bg-slate-900 duration-200")},m(r,c){E(r,l,c),I(l,a),n&&n.m(a,null),I(a,t),I(a,o),u&&u.m(o,null),f=!0},p(r,[c]){r[9].icon?n?(n.p(r,c),c&512&&y(n,1)):(n=P(r),n.c(),y(n,1),n.m(a,t)):n&&(q(),w(n,1,1,()=>{n=null}),X()),u&&u.p&&(!f||c&1024)&&O(u,b,r,r[10],f?V(b,r[10],c,null):J(r[10]),null),(!f||c&6&&i!==(i=(r[2]?"":r[8][r[1].key])+" duration-200"))&&g(o,"class",i),(!f||c&23&&s!==(s=r[7][r[1].key]+" "+(r[2]?"":"dark:bg-slate-900")+" "+(r[2]?"":r[6][r[1].key])+" "+(r[4]?" justify-center":"")+" "+(r[0]?"":"active:translate-x-0 active:translate-y-0")+" flex items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full"))&&g(a,"class",s),(!f||c&14&&d!==(d=(r[2]?"":r[5][r[1].key])+" "+(r[3]?"w-full":"")+" bg-slate-900 duration-200"))&&g(l,"class",d)},i(r){f||(y(n),y(u,r),f=!0)},o(r){w(n),w(u,r),f=!1},d(r){r&&k(l),n&&n.d(),u&&u.d(r)}}}function Y(e,l,a){let{$$slots:t={},$$scope:o}=l;const i=H(t);let{disabled:s=!1}=l,{variant:d={key:s?"disabled":"primary"}}=l,{noDarkVariant:f=!0}=l,{fullWidth:n=!1}=l,{centerText:b=!0}=l;const u={primary:"dark:bg-primary",secondary:"dark:bg-white",disabled:"dark:bg-neutral-400",whatsapp:"dark:bg-green-400",email:"dark:bg-red-400",github:"dark:bg-slate-200",instagram:"dark:bg-fuchsia-400",facebook:"dark:bg-sky-400",linkedIn:"dark:bg-blue-400",medium:"dark:bg-neutral-400",telegram:"dark:bg-cyan-400"},r={primary:"dark:border-primary",secondary:"dark:border-white",disabled:"dark:border-neutral-400",whatsapp:"dark:border-green-400",email:"dark:border-red-400",github:"dark:border-slate-200",instagram:"dark:border-fuchsia-400",facebook:"dark:border-sky-400",linkedIn:"dark:border-blue-400",medium:"dark:border-neutral-400",telegram:"dark:border-cyan-400"},c={primary:"bg-primary",secondary:"bg-white",disabled:"bg-neutral-400",whatsapp:"bg-green-400",email:"bg-red-400",github:"bg-slate-200",instagram:"bg-fuchsia-400",facebook:"bg-sky-400",linkedIn:"bg-blue-400",medium:"bg-neutral-400",telegram:"bg-cyan-400"},h={primary:"dark:text-primary",secondary:"dark:text-white",disabled:"dark:text-neutral-400",whatsapp:"dark:text-green-400",email:"dark:text-red-400",github:"dark:text-slate-200",instagram:"dark:text-fuchsia-400",facebook:"dark:text-sky-400",linkedIn:"dark:text-blue-400",medium:"dark:text-neutral-400",telegram:"dark:text-cyan-400"};return e.$$set=m=>{"disabled"in m&&a(0,s=m.disabled),"variant"in m&&a(1,d=m.variant),"noDarkVariant"in m&&a(2,f=m.noDarkVariant),"fullWidth"in m&&a(3,n=m.fullWidth),"centerText"in m&&a(4,b=m.centerText),"$$scope"in m&&a(10,o=m.$$scope)},[s,d,f,n,b,u,r,c,h,i,o,t]}class ae extends G{constructor(l){super(),R(this,l,Y,Q,W,{disabled:0,variant:1,noDarkVariant:2,fullWidth:3,centerText:4})}}const U=L([]),S=L(),te=B(U,e=>e),re=B(S,e=>e);function D(e,l){return new z(e,l)}new TextEncoder;const le=async({project:e,fetch:l})=>{try{const a=await l(e.url,{method:"GET",headers:{"Content-Type":"application/json"}}),t=JSON.parse(await a.text());let o;if(a.status===200)return o={id:e.id,name:e.name,url:e.url,description:t.description,imageUrl:e.imageUrl,readmeUrl:e.readmeUrl,tags:[...e.tags,t.language.toLowerCase()]},U.update(i=>{const s=[...i,o];if(T)try{localStorage.setItem("projects",JSON.stringify(s))}finally{}return s});{console.log(t);let i=[];if(T&&localStorage.getItem("projects"))i=JSON.parse(localStorage.getItem("projects")??"[]").map(s=>({...s,imageText:"Server error / API rate limit exceeded"}));else if(a.status===403)i=[{id:e.id,name:"limit",url:e.url,description:t.message,imageUrl:e.imageUrl,readmeUrl:e.readmeUrl,tags:[]}];else throw a;return U.update(()=>i),D(a.status??500,"Failed to fetch data")}}catch(a){console.log(a);let t=[];return localStorage.getItem("projects")?t=JSON.parse(localStorage.getItem("projects")??"[]").map(o=>({...o,imageText:"No internet connection"})):t=[{id:e.id,name:"error",url:e.url,description:"No internet connection",imageUrl:e.imageUrl,readmeUrl:e.readmeUrl,tags:[]}],U.update(()=>t),D(500,"Failed to fetch data")}},se=async({project:e,fetch:l})=>{try{const a=await l(e.url,{method:"GET",headers:{"Content-Type":"application/json"}}),t=JSON.parse(await a.text());let o;if(a.status===200)return o={id:e.id,name:e.name,url:e.url,description:t.description,imageUrl:e.imageUrl,tags:[...e.tags,t.language.toLowerCase()],repositoryUrl:t.svn_url,hasLivePreview:!!t.homepage,livePreviewUrl:t.homepage,readmeUrl:e.readmeUrl},S.update(()=>o);{console.log(t);let i;if(T&&localStorage.getItem("projectDetail"))i={...JSON.parse(localStorage.getItem("projectDetail")??"{}"),imageText:"Server error / API rate limit exceeded"};else if(a.status===403)i={id:e.id,name:"limit",url:e.url,description:t.message,imageUrl:e.imageUrl,tags:[],hasLivePreview:!1,readmeUrl:e.readmeUrl,repositoryUrl:""};else throw a;return S.update(()=>i),D(a.status??500,"Failed to fetch data")}}catch(a){console.log(a);let t;return localStorage.getItem("projectDetail")?t={...JSON.parse(localStorage.getItem("projectDetail")??"{}"),imageText:"No internet connection"}:t={id:e.id,name:"error",url:e.url,description:"No internet connection",imageUrl:e.imageUrl,tags:[],hasLivePreview:!1,readmeUrl:e.readmeUrl,repositoryUrl:""},S.update(()=>t),D(500,"Failed to fetch data")}};export{ae as B,D as a,se as b,re as c,ee as e,le as f,te as p};
