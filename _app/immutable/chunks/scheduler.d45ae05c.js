function k(){}function T(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function C(t){return t()}function $(){return Object.create(null)}function P(t){t.forEach(C)}function H(t){return typeof t=="function"}function tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function et(t){return Object.keys(t).length===0}function L(t,...e){if(t==null){for(const i of e)i(void 0);return k}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function nt(t,e,n){t.$$.on_destroy.push(L(e,n))}function it(t,e,n,i){if(t){const r=N(t,e,n,i);return t[0](r)}}function N(t,e,n,i){return t[1]&&i?T(n.ctx.slice(),t[1](i(e))):n.ctx}function rt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function ct(t,e,n,i,r,o){if(r){const c=N(e,n,i,o);t.p(c,r)}}function lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function st(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ot(t){const e={};for(const n in t)e[n]=!0;return e}function ut(t){return t&&H(t.destroy)?t.destroy:k}let m=!1;function at(){m=!0}function ft(){m=!1}function M(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function B(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:M(1,r,O=>e[n[O]].claim_order,u))-1;i[l]=n[a]+1;const v=a+1;n[v]=l,r=Math.max(v,r)}const o=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function q(t,e){if(m){for(B(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function _t(t,e,n){m&&!n?q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function dt(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function z(t){return document.createElement(t)}function F(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function mt(){return g(" ")}function pt(){return g("")}function yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const R=["width","height"];function W(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&R.indexOf(i)===-1?t[i]=e[i]:A(t,i,e[i])}function G(t,e){Object.keys(e).forEach(n=>{I(t,n,e[n])})}function I(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:A(t,e,n)}function gt(t){return/-/.test(t)?G:W}function xt(t){return t.dataset.svelteH}function vt(t){return Array.from(t.childNodes)}function J(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,i,r=!1){J(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function S(t,e,n,i){return j(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function wt(t,e,n){return S(t,e,n,z)}function Et(t,e,n){return S(t,e,n,F)}function K(t,e){return j(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>g(e),!0)}function kt(t){return K(t," ")}function Nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function At(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function jt(t,e,n){t.classList.toggle(e,!!n)}function Q(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function St(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Dt(t,e){return new t(e)}let h;function p(t){h=t}function x(){if(!h)throw new Error("Function called outside component initialization");return h}function Ot(t){x().$$.on_mount.push(t)}function Tt(t){x().$$.after_update.push(t)}function Ct(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=Q(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const d=[],w=[];let _=[];const E=[],D=Promise.resolve();let b=!1;function U(){b||(b=!0,D.then(X))}function Pt(){return U(),D}function V(t){_.push(t)}const y=new Set;let f=0;function X(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const e=d[f];f++,p(e),Y(e.$$)}}catch(e){throw d.length=0,f=0,e}for(p(null),d.length=0,f=0;w.length;)w.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];y.has(n)||(y.add(n),n())}_.length=0}while(d.length);for(;E.length;)E.pop()();b=!1,y.clear(),p(t)}function Y(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}function Ht(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{at as $,Z as A,x as B,p as C,X as D,F as E,Et as F,St as G,xt as H,yt as I,ht as J,P as K,V as L,ot as M,jt as N,bt as O,T as P,st as Q,gt as R,ut as S,H as T,$ as U,et as V,Ht as W,h as X,C as Y,d as Z,U as _,mt as a,ft as a0,Ct as a1,Tt as b,kt as c,dt as d,pt as e,z as f,wt as g,vt as h,_t as i,A as j,At as k,g as l,K as m,Nt as n,Ot as o,w as p,Dt as q,it as r,tt as s,Pt as t,ct as u,lt as v,rt as w,q as x,k as y,nt as z};
