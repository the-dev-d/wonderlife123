function w(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function q(){return Object.create(null)}function g(t){t.forEach(B)}function O(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function at(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function G(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(J(e,n))}function ft(t,e,n,i){if(t){const r=P(t,e,n,i);return t[0](r)}}function P(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],l=Math.max(e.dirty.length,r.length);for(let o=0;o<l;o+=1)a[o]=e.dirty[o]|r[o];return a}return e.dirty|r}return e.dirty}function _t(t,e,n,i,r,a){if(r){const l=P(e,n,i,a);t.p(l,r)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let v=!1;function K(){v=!0}function L(){v=!1}function W(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:W(1,r,x=>e[n[x]].claim_order,u))-1;i[c]=n[f]+1;const s=f+1;n[s]=c,r=Math.max(s,r)}const a=[],l=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);o>=c;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);a.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<a.length&&l[c].claim_order>=a[u].claim_order;)u++;const f=u<a.length?a[u]:null;t.insertBefore(l[c],f)}}function R(t,e){if(v){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){v&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function yt(){return A(" ")}function gt(){return A("")}function xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,e,n,i,r=!1){Y(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function Z(t,e,n,i){return T(t,r=>r.nodeName===e,r=>{const a=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||a.push(o.name)}a.forEach(l=>r.removeAttribute(l))},()=>i(e))}function bt(t,e,n){return Z(t,e,n,V)}function tt(t,e){return T(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function $t(t){return tt(t," ")}function wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function vt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Et(t,e){return new t(e)}let y;function p(t){y=t}function z(){if(!y)throw new Error("Function called outside component initialization");return y}function Nt(t){z().$$.on_mount.push(t)}function St(t){z().$$.after_update.push(t)}const h=[],C=[];let m=[];const M=[],D=Promise.resolve();let N=!1;function F(){N||(N=!0,D.then(H))}function At(){return F(),D}function S(t){m.push(t)}const E=new Set;let _=0;function H(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),et(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;C.length;)C.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;M.length;)M.pop()();N=!1,E.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function nt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function jt(){d={r:0,c:[],p:d}}function kt(){d.r||g(d.c),d=d.p}function it(t,e){t&&t.i&&($.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const rt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...rt];function Ct(t){t&&t.c()}function Mt(t,e){t&&t.l(e)}function lt(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||S(()=>{const l=t.$$.on_mount.map(B).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...l):g(l),t.$$.on_mount=[]}),a.forEach(S)}function ct(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Bt(t,e,n,i,r,a,l,o=[-1]){const c=y;p(t);const u=t.$$={fragment:null,ctx:[],props:a,update:w,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:q(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};l&&l(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(s,x,...j)=>{const k=j.length?j[0]:x;return u.ctx&&r(u.ctx[s],u.ctx[s]=k)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](k),f&&ut(t,s)),x}):[],u.update(),f=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){K();const s=X(e.target);u.fragment&&u.fragment.l(s),s.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&it(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),L(),H()}p(c)}class Ot{$destroy(){ct(this,1),this.$destroy=w}$on(e,n){if(!O(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{lt as A,ct as B,ft as C,_t as D,ht as E,dt as F,R as G,w as H,st as I,at as J,pt as K,Ot as S,yt as a,mt as b,$t as c,qt as d,gt as e,kt as f,it as g,U as h,Bt as i,St as j,V as k,bt as l,X as m,xt as n,Nt as o,vt as p,A as q,tt as r,ot as s,At as t,wt as u,jt as v,C as w,Et as x,Ct as y,Mt as z};