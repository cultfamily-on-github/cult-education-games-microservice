(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();function j(){}const Me=t=>t;function At(t,e){for(const l in e)t[l]=e[l];return t}function dt(t){return t()}function tt(){return Object.create(null)}function Q(t){t.forEach(dt)}function Ae(t){return typeof t=="function"}function A(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Nt(t){return Object.keys(t).length===0}function Gt(t,...e){if(t==null)return j;const l=t.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function Ne(t,e,l){t.$$.on_destroy.push(Gt(e,l))}function mt(t,e,l,n){if(t){const s=pt(t,e,l,n);return t[0](s)}}function pt(t,e,l,n){return t[1]&&n?At(l.ctx.slice(),t[1](n(e))):l.ctx}function _t(t,e,l,n){if(t[2]&&n){const s=t[2](n(l));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)i[u]=e.dirty[u]|s[u];return i}return e.dirty|s}return e.dirty}function ht(t,e,l,n,s,i){if(s){const r=pt(e,l,n,i);t.p(r,s)}}function gt(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function nt(t){return t==null?"":t}const $t=typeof window<"u";let bt=$t?()=>window.performance.now():()=>Date.now(),Ge=$t?t=>requestAnimationFrame(t):j;const oe=new Set;function vt(t){oe.forEach(e=>{e.c(t)||(oe.delete(e),e.f())}),oe.size!==0&&Ge(vt)}function yt(t){let e;return oe.size===0&&Ge(vt),{promise:new Promise(l=>{oe.add(e={c:t,f:l})}),abort(){oe.delete(e)}}}function f(t,e){t.appendChild(e)}function kt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ht(t){const e=p("style");return zt(kt(t),e),e.sheet}function zt(t,e){return f(t.head||t,e),e.sheet}function v(t,e,l){t.insertBefore(e,l||null)}function b(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function y(){return D(" ")}function wt(){return D("")}function O(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function Vt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function c(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Bt(t){return Array.from(t.childNodes)}function $e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function lt(t,e){t.value=e==null?"":e}function Ct(t,e,{bubbles:l=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,l,n,e),s}const Ue=new Map;let De=0;function Yt(t){let e=5381,l=t.length;for(;l--;)e=(e<<5)-e^t.charCodeAt(l);return e>>>0}function Kt(t,e){const l={stylesheet:Ht(e),rules:{}};return Ue.set(t,l),l}function jt(t,e,l,n,s,i,r,u=0){const o=16.666/n;let a=`{
`;for(let k=0;k<=1;k+=o){const S=e+(l-e)*i(k);a+=k*100+`%{${r(S,1-S)}}
`}const h=a+`100% {${r(l,1-l)}}
}`,d=`__svelte_${Yt(h)}_${u}`,m=kt(t),{stylesheet:$,rules:g}=Ue.get(m)||Kt(m,t);g[d]||(g[d]=!0,$.insertRule(`@keyframes ${d} ${h}`,$.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${d} ${n}ms linear ${s}ms 1 both`,De+=1,d}function qe(t,e){const l=(t.style.animation||"").split(", "),n=l.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=l.length-n.length;s&&(t.style.animation=n.join(", "),De-=s,De||Wt())}function Wt(){Ge(()=>{De||(Ue.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),Ue.clear())})}let be;function ge(t){be=t}function Xt(){if(!be)throw new Error("Function called outside component initialization");return be}function Jt(){const t=Xt();return(e,l,{cancelable:n=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=Ct(e,l,{cancelable:n});return s.slice().forEach(r=>{r.call(t,i)}),!i.defaultPrevented}return!0}}const he=[],st=[],Le=[],it=[],Qt=Promise.resolve();let Fe=!1;function Zt(){Fe||(Fe=!0,Qt.then(St))}function ee(t){Le.push(t)}const Oe=new Set;let Se=0;function St(){const t=be;do{for(;Se<he.length;){const e=he[Se];Se++,ge(e),en(e.$$)}for(ge(null),he.length=0,Se=0;st.length;)st.pop()();for(let e=0;e<Le.length;e+=1){const l=Le[e];Oe.has(l)||(Oe.add(l),l())}Le.length=0}while(he.length);for(;it.length;)it.pop()();Fe=!1,Oe.clear(),ge(t)}function en(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ee)}}let _e;function Tt(){return _e||(_e=Promise.resolve(),_e.then(()=>{_e=null})),_e}function xe(t,e,l){t.dispatchEvent(Ct(`${e?"intro":"outro"}${l}`))}const Ee=new Set;let J;function Lt(){J={r:0,c:[],p:J}}function Et(){J.r||Q(J.c),J=J.p}function T(t,e){t&&t.i&&(Ee.delete(t),t.i(e))}function E(t,e,l,n){if(t&&t.o){if(Ee.has(t))return;Ee.add(t),J.c.push(()=>{Ee.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}const Ut={duration:0};function Dt(t,e,l){let n=e(t,l),s=!1,i,r,u=0;function o(){i&&qe(t,i)}function a(){const{delay:d=0,duration:m=300,easing:$=Me,tick:g=j,css:_}=n||Ut;_&&(i=jt(t,0,1,m,d,$,_,u++)),g(0,1);const k=bt()+d,S=k+m;r&&r.abort(),s=!0,ee(()=>xe(t,!0,"start")),r=yt(L=>{if(s){if(L>=S)return g(1,0),xe(t,!0,"end"),o(),s=!1;if(L>=k){const w=$((L-k)/m);g(w,1-w)}}return s})}let h=!1;return{start(){h||(h=!0,qe(t),Ae(n)?(n=n(),Tt().then(a)):a())},invalidate(){h=!1},end(){s&&(o(),s=!1)}}}function xt(t,e,l){let n=e(t,l),s=!0,i;const r=J;r.r+=1;function u(){const{delay:o=0,duration:a=300,easing:h=Me,tick:d=j,css:m}=n||Ut;m&&(i=jt(t,1,0,a,o,h,m));const $=bt()+o,g=$+a;ee(()=>xe(t,!1,"start")),yt(_=>{if(s){if(_>=g)return d(0,1),xe(t,!1,"end"),--r.r||Q(r.c),!1;if(_>=$){const k=h((_-$)/a);d(1-k,k)}}return s})}return Ae(n)?Tt().then(()=>{n=n(),u()}):u(),{end(o){o&&n.tick&&n.tick(1,0),s&&(i&&qe(t,i),s=!1)}}}function Rt(t,e){E(t,1,1,()=>{e.delete(t.key)})}function It(t,e,l,n,s,i,r,u,o,a,h,d){let m=t.length,$=i.length,g=m;const _={};for(;g--;)_[t[g].key]=g;const k=[],S=new Map,L=new Map;for(g=$;g--;){const C=d(s,i,g),F=l(C);let x=r.get(F);x?n&&x.p(C,e):(x=a(F,C),x.c()),S.set(F,k[g]=x),F in _&&L.set(F,Math.abs(g-_[F]))}const w=new Set,z=new Set;function R(C){T(C,1),C.m(u,h),r.set(C.key,C),h=C.first,$--}for(;m&&$;){const C=k[$-1],F=t[m-1],x=C.key,Z=F.key;C===F?(h=C.first,m--,$--):S.has(Z)?!r.has(x)||w.has(x)?R(C):z.has(Z)?m--:L.get(x)>L.get(Z)?(z.add(x),R(C)):(w.add(Z),m--):(o(F,r),m--)}for(;m--;){const C=t[m];S.has(C.key)||o(C,r)}for(;$;)R(k[$-1]);return k}function M(t){t&&t.c()}function P(t,e,l,n){const{fragment:s,on_mount:i,on_destroy:r,after_update:u}=t.$$;s&&s.m(e,l),n||ee(()=>{const o=i.map(dt).filter(Ae);r?r.push(...o):Q(o),t.$$.on_mount=[]}),u.forEach(ee)}function q(t,e){const l=t.$$;l.fragment!==null&&(Q(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function tn(t,e){t.$$.dirty[0]===-1&&(he.push(t),Zt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,l,n,s,i,r,u=[-1]){const o=be;ge(t);const a=t.$$={fragment:null,ctx:null,props:i,update:j,not_equal:s,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:tt(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let h=!1;if(a.ctx=l?l(t,e.props||{},(d,m,...$)=>{const g=$.length?$[0]:m;return a.ctx&&s(a.ctx[d],a.ctx[d]=g)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](g),h&&tn(t,d)),m}):[],a.update(),h=!0,Q(a.before_update),a.fragment=n?n(a.ctx):!1,e.target){if(e.hydrate){const d=Bt(e.target);a.fragment&&a.fragment.l(d),d.forEach(b)}else a.fragment&&a.fragment.c();e.intro&&T(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),St()}ge(o)}class H{$destroy(){q(this,1),this.$destroy=j}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let Te;const nn=new Uint8Array(16);function ln(){if(!Te&&(Te=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Te))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Te(nn)}const U=[];for(let t=0;t<256;++t)U.push((t+256).toString(16).slice(1));function sn(t,e=0){return(U[t[e+0]]+U[t[e+1]]+U[t[e+2]]+U[t[e+3]]+"-"+U[t[e+4]]+U[t[e+5]]+"-"+U[t[e+6]]+U[t[e+7]]+"-"+U[t[e+8]]+U[t[e+9]]+"-"+U[t[e+10]]+U[t[e+11]]+U[t[e+12]]+U[t[e+13]]+U[t[e+14]]+U[t[e+15]]).toLowerCase()}const rn=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),rt={randomUUID:rn};function un(t,e,l){if(rt.randomUUID&&!e&&!t)return rt.randomUUID();t=t||{};const n=t.random||(t.rng||ln)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){l=l||0;for(let s=0;s<16;++s)e[l+s]=n[s];return e}return sn(n)}const ue=[];function Ot(t,e=j){let l;const n=new Set;function s(u){if(A(t,u)&&(t=u,l)){const o=!ue.length;for(const a of n)a[1](),ue.push(a,t);if(o){for(let a=0;a<ue.length;a+=2)ue[a][0](ue[a+1]);ue.length=0}}}function i(u){s(u(t))}function r(u,o=j){const a=[u,o];return n.add(a),n.size===1&&(l=e(s)||j),u(t),()=>{n.delete(a),n.size===0&&(l(),l=null)}}return{set:s,update:i,subscribe:r}}const on=Ot([{id:1,rating:10,text:"Ensure the following hashtags are trending on Twitter today: #StarlinkIsCULT #RumbleIsCULT #CULTDAO. You might want to do so by retweeting: https://twitter.com/Peer2peerE/status/1574787191489941506?s=20&t=wUyNpuR8Sc7DtcPo7lp37A"}]),Re=Ot([{id:1,rating:10,text:"Ensure the following hashtags are trending on Twitter today: #StarlinkIsCULT #RumbleIsCULT #CULTDAO. You might want to do so by retweeting: https://twitter.com/Peer2peerE/status/1574787191489941506?s=20&t=wUyNpuR8Sc7DtcPo7lp37A."},{id:2,rating:9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae."},{id:3,rating:8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae."}]);function an(t){let e,l;const n=t[1].default,s=mt(n,t,t[0],null);return{c(){e=p("div"),s&&s.c(),c(e,"class","card svelte-1mj4ff7")},m(i,r){v(i,e,r),s&&s.m(e,null),l=!0},p(i,[r]){s&&s.p&&(!l||r&1)&&ht(s,n,i,i[0],l?_t(n,i[0],r,null):gt(i[0]),null)},i(i){l||(T(s,i),l=!0)},o(i){E(s,i),l=!1},d(i){i&&b(e),s&&s.d(i)}}}function cn(t,e,l){let{$$slots:n={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&l(0,s=i.$$scope)},[s,n]}class Pt extends H{constructor(e){super(),G(this,e,cn,an,A,{})}}function fn(t){let e,l,n;const s=t[4].default,i=mt(s,t,t[3],null);return{c(){e=p("button"),i&&i.c(),c(e,"type",t[1]),e.disabled=t[2],c(e,"class",l=nt(t[0])+" svelte-ketqkq")},m(r,u){v(r,e,u),i&&i.m(e,null),n=!0},p(r,[u]){i&&i.p&&(!n||u&8)&&ht(i,s,r,r[3],n?_t(s,r[3],u,null):gt(r[3]),null),(!n||u&2)&&c(e,"type",r[1]),(!n||u&4)&&(e.disabled=r[2]),(!n||u&1&&l!==(l=nt(r[0])+" svelte-ketqkq"))&&c(e,"class",l)},i(r){n||(T(i,r),n=!0)},o(r){E(i,r),n=!1},d(r){r&&b(e),i&&i.d(r)}}}function dn(t,e,l){let{$$slots:n={},$$scope:s}=e,{style:i="primary"}=e,{type:r="button"}=e,{disabled:u=!1}=e;return t.$$set=o=>{"style"in o&&l(0,i=o.style),"type"in o&&l(1,r=o.type),"disabled"in o&&l(2,u=o.disabled),"$$scope"in o&&l(3,s=o.$$scope)},[i,r,u,s,n]}class mn extends H{constructor(e){super(),G(this,e,dn,fn,A,{style:0,type:1,disabled:2})}}function pn(t){let e,l,n,s,i,r,u,o,a,h,d,m,$,g,_,k,S,L,w,z,R,C,F,x,Z,te,V,ve,He,ae,ze,ne,B,ye,Ve,ce,Be,le,Y,ke,Ye,fe,Ke,se,K,we,We,de,Xe,ie,W,Ce,Je,me,Qe,re,X,je,Ze,pe,Ie,et;return{c(){e=p("ul"),l=p("li"),n=p("input"),i=y(),r=p("label"),r.textContent="1",u=y(),o=p("li"),a=p("input"),d=y(),m=p("label"),m.textContent="2",$=y(),g=p("li"),_=p("input"),S=y(),L=p("label"),L.textContent="3",w=y(),z=p("li"),R=p("input"),F=y(),x=p("label"),x.textContent="4",Z=y(),te=p("li"),V=p("input"),He=y(),ae=p("label"),ae.textContent="5",ze=y(),ne=p("li"),B=p("input"),Ve=y(),ce=p("label"),ce.textContent="6",Be=y(),le=p("li"),Y=p("input"),Ye=y(),fe=p("label"),fe.textContent="7",Ke=y(),se=p("li"),K=p("input"),We=y(),de=p("label"),de.textContent="8",Xe=y(),ie=p("li"),W=p("input"),Je=y(),me=p("label"),me.textContent="9",Qe=y(),re=p("li"),X=p("input"),Ze=y(),pe=p("label"),pe.textContent="10",c(n,"type","radio"),c(n,"id","num1"),c(n,"name","rating"),n.value="1",n.checked=s=t[0]===1,c(n,"class","svelte-1ua1t9j"),c(r,"for","num1"),c(r,"class","svelte-1ua1t9j"),c(l,"class","svelte-1ua1t9j"),c(a,"type","radio"),c(a,"id","num2"),c(a,"name","rating"),a.value="2",a.checked=h=t[0]===2,c(a,"class","svelte-1ua1t9j"),c(m,"for","num2"),c(m,"class","svelte-1ua1t9j"),c(o,"class","svelte-1ua1t9j"),c(_,"type","radio"),c(_,"id","num3"),c(_,"name","rating"),_.value="3",_.checked=k=t[0]===3,c(_,"class","svelte-1ua1t9j"),c(L,"for","num3"),c(L,"class","svelte-1ua1t9j"),c(g,"class","svelte-1ua1t9j"),c(R,"type","radio"),c(R,"id","num4"),c(R,"name","rating"),R.value="4",R.checked=C=t[0]===4,c(R,"class","svelte-1ua1t9j"),c(x,"for","num4"),c(x,"class","svelte-1ua1t9j"),c(z,"class","svelte-1ua1t9j"),c(V,"type","radio"),c(V,"id","num5"),c(V,"name","rating"),V.value="5",V.checked=ve=t[0]===5,c(V,"class","svelte-1ua1t9j"),c(ae,"for","num5"),c(ae,"class","svelte-1ua1t9j"),c(te,"class","svelte-1ua1t9j"),c(B,"type","radio"),c(B,"id","num6"),c(B,"name","rating"),B.value="6",B.checked=ye=t[0]===6,c(B,"class","svelte-1ua1t9j"),c(ce,"for","num6"),c(ce,"class","svelte-1ua1t9j"),c(ne,"class","svelte-1ua1t9j"),c(Y,"type","radio"),c(Y,"id","num7"),c(Y,"name","rating"),Y.value="7",Y.checked=ke=t[0]===7,c(Y,"class","svelte-1ua1t9j"),c(fe,"for","num7"),c(fe,"class","svelte-1ua1t9j"),c(le,"class","svelte-1ua1t9j"),c(K,"type","radio"),c(K,"id","num8"),c(K,"name","rating"),K.value="8",K.checked=we=t[0]===8,c(K,"class","svelte-1ua1t9j"),c(de,"for","num8"),c(de,"class","svelte-1ua1t9j"),c(se,"class","svelte-1ua1t9j"),c(W,"type","radio"),c(W,"id","num9"),c(W,"name","rating"),W.value="9",W.checked=Ce=t[0]===9,c(W,"class","svelte-1ua1t9j"),c(me,"for","num9"),c(me,"class","svelte-1ua1t9j"),c(ie,"class","svelte-1ua1t9j"),c(X,"type","radio"),c(X,"id","num10"),c(X,"name","rating"),X.value="10",X.checked=je=t[0]===10,c(X,"class","svelte-1ua1t9j"),c(pe,"for","num10"),c(pe,"class","svelte-1ua1t9j"),c(re,"class","svelte-1ua1t9j"),c(e,"class","rating svelte-1ua1t9j")},m(I,N){v(I,e,N),f(e,l),f(l,n),f(l,i),f(l,r),f(e,u),f(e,o),f(o,a),f(o,d),f(o,m),f(e,$),f(e,g),f(g,_),f(g,S),f(g,L),f(e,w),f(e,z),f(z,R),f(z,F),f(z,x),f(e,Z),f(e,te),f(te,V),f(te,He),f(te,ae),f(e,ze),f(e,ne),f(ne,B),f(ne,Ve),f(ne,ce),f(e,Be),f(e,le),f(le,Y),f(le,Ye),f(le,fe),f(e,Ke),f(e,se),f(se,K),f(se,We),f(se,de),f(e,Xe),f(e,ie),f(ie,W),f(ie,Je),f(ie,me),f(e,Qe),f(e,re),f(re,X),f(re,Ze),f(re,pe),Ie||(et=[O(n,"change",t[1]),O(a,"change",t[1]),O(_,"change",t[1]),O(R,"change",t[1]),O(V,"change",t[1]),O(B,"change",t[1]),O(Y,"change",t[1]),O(K,"change",t[1]),O(W,"change",t[1]),O(X,"change",t[1])],Ie=!0)},p(I,[N]){N&1&&s!==(s=I[0]===1)&&(n.checked=s),N&1&&h!==(h=I[0]===2)&&(a.checked=h),N&1&&k!==(k=I[0]===3)&&(_.checked=k),N&1&&C!==(C=I[0]===4)&&(R.checked=C),N&1&&ve!==(ve=I[0]===5)&&(V.checked=ve),N&1&&ye!==(ye=I[0]===6)&&(B.checked=ye),N&1&&ke!==(ke=I[0]===7)&&(Y.checked=ke),N&1&&we!==(we=I[0]===8)&&(K.checked=we),N&1&&Ce!==(Ce=I[0]===9)&&(W.checked=Ce),N&1&&je!==(je=I[0]===10)&&(X.checked=je)},i:j,o:j,d(I){I&&b(e),Ie=!1,Q(et)}}}function _n(t,e,l){let n=10;const s=Jt();return[n,r=>{l(0,n=r.currentTarget.value),s("rating-select",n)}]}class hn extends H{constructor(e){super(),G(this,e,_n,pn,A,{})}}function gn(t){let e;return{c(){e=D("Send")},m(l,n){v(l,e,n)},d(l){l&&b(e)}}}function ut(t){let e,l;return{c(){e=p("div"),l=D(t[2]),c(e,"class","message svelte-1osx45f")},m(n,s){v(n,e,s),f(e,l)},p(n,s){s&4&&$e(l,n[2])},d(n){n&&b(e)}}}function $n(t){let e,l,n,s,i,r,u,o,a,h,d,m,$;s=new hn({}),s.$on("rating-select",t[3]),a=new mn({props:{disabled:t[1],type:"submit",$$slots:{default:[gn]},$$scope:{ctx:t}}});let g=t[2]&&ut(t);return{c(){e=p("header"),e.innerHTML='<h2 class="svelte-1osx45f">Please enter your CULT Game Proposal.</h2>',l=y(),n=p("form"),M(s.$$.fragment),i=y(),r=p("div"),u=p("input"),o=y(),M(a.$$.fragment),h=y(),g&&g.c(),c(e,"class","svelte-1osx45f"),c(u,"type","text"),c(u,"placeholder","Tell us something that keeps you coming back"),c(u,"class","svelte-1osx45f"),c(r,"class","input-group svelte-1osx45f")},m(_,k){v(_,e,k),v(_,l,k),v(_,n,k),P(s,n,null),f(n,i),f(n,r),f(r,u),lt(u,t[0]),f(r,o),P(a,r,null),f(n,h),g&&g.m(n,null),d=!0,m||($=[O(u,"input",t[4]),O(u,"input",t[6]),O(n,"submit",Vt(t[5]))],m=!0)},p(_,k){k&1&&u.value!==_[0]&&lt(u,_[0]);const S={};k&2&&(S.disabled=_[1]),k&256&&(S.$$scope={dirty:k,ctx:_}),a.$set(S),_[2]?g?g.p(_,k):(g=ut(_),g.c(),g.m(n,null)):g&&(g.d(1),g=null)},i(_){d||(T(s.$$.fragment,_),T(a.$$.fragment,_),d=!0)},o(_){E(s.$$.fragment,_),E(a.$$.fragment,_),d=!1},d(_){_&&b(e),_&&b(l),_&&b(n),q(s),q(a),g&&g.d(),m=!1,Q($)}}}function bn(t){let e,l;return e=new Pt({props:{$$slots:{default:[$n]},$$scope:{ctx:t}}}),{c(){M(e.$$.fragment)},m(n,s){P(e,n,s),l=!0},p(n,[s]){const i={};s&263&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){l||(T(e.$$.fragment,n),l=!0)},o(n){E(e.$$.fragment,n),l=!1},d(n){q(e,n)}}}let Pe=10;function vn(t,e,l){let n="",s=10,i=!0,r;const u=d=>s=d.detail,o=()=>{n.trim().length<=Pe?(l(2,r=`Text must be at least ${Pe} characters`),l(1,i=!0)):(l(2,r=null),l(1,i=!1))},a=()=>{if(n.trim().length>Pe){const d={id:un(),text:n,rating:+s};Re.update(m=>[d,...m]),l(0,n="")}};function h(){n=this.value,l(0,n)}return[n,i,r,u,o,a,h]}class yn extends H{constructor(e){super(),G(this,e,vn,bn,A,{})}}function kn(t){const e=t-1;return e*e*e+1}function qt(t,{delay:e=0,duration:l=400,easing:n=Me}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:l,easing:n,css:i=>`opacity: ${i*s}`}}function Ft(t,{delay:e=0,duration:l=400,easing:n=kn,start:s=0,opacity:i=0}={}){const r=getComputedStyle(t),u=+r.opacity,o=r.transform==="none"?"":r.transform,a=1-s,h=u*(1-i);return{delay:e,duration:l,easing:n,css:(d,m)=>`
			transform: ${o} scale(${1-a*m});
			opacity: ${u-h*m}
		`}}function wn(t){let e,l=t[0].rating+"",n,s,i,r,u,o=t[0].text+"",a,h,d;return{c(){e=p("div"),n=D(l),s=y(),i=p("button"),i.textContent="X",r=y(),u=p("p"),a=D(o),c(e,"class","num-display svelte-s2w90w"),c(i,"class","close svelte-s2w90w"),c(u,"class","text-display")},m(m,$){v(m,e,$),f(e,n),v(m,s,$),v(m,i,$),v(m,r,$),v(m,u,$),f(u,a),h||(d=O(i,"click",t[2]),h=!0)},p(m,$){$&1&&l!==(l=m[0].rating+"")&&$e(n,l),$&1&&o!==(o=m[0].text+"")&&$e(a,o)},d(m){m&&b(e),m&&b(s),m&&b(i),m&&b(r),m&&b(u),h=!1,d()}}}function Cn(t){let e,l;return e=new Pt({props:{$$slots:{default:[wn]},$$scope:{ctx:t}}}),{c(){M(e.$$.fragment)},m(n,s){P(e,n,s),l=!0},p(n,[s]){const i={};s&9&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){l||(T(e.$$.fragment,n),l=!0)},o(n){E(e.$$.fragment,n),l=!1},d(n){q(e,n)}}}function jn(t,e,l){let{item:n}=e;const s=r=>{Re.update(u=>u.filter(o=>o.id!=r))},i=()=>s(n.id);return t.$$set=r=>{"item"in r&&l(0,n=r.item)},[n,s,i]}class Mt extends H{constructor(e){super(),G(this,e,jn,Cn,A,{item:0})}}function ot(t,e,l){const n=t.slice();return n[1]=e[l],n}function at(t,e){let l,n,s,i,r,u;return n=new Mt({props:{item:e[1]}}),{key:t,first:null,c(){l=p("div"),M(n.$$.fragment),s=y(),this.first=l},m(o,a){v(o,l,a),P(n,l,null),f(l,s),u=!0},p(o,a){e=o;const h={};a&1&&(h.item=e[1]),n.$set(h)},i(o){u||(T(n.$$.fragment,o),ee(()=>{r&&r.end(1),i=Dt(l,Ft,{}),i.start()}),u=!0)},o(o){E(n.$$.fragment,o),i&&i.invalidate(),r=xt(l,qt,{duration:500}),u=!1},d(o){o&&b(l),q(n),o&&r&&r.end()}}}function Sn(t){let e=[],l=new Map,n,s,i=t[0];const r=u=>u[1].id;for(let u=0;u<i.length;u+=1){let o=ot(t,i,u),a=r(o);l.set(a,e[u]=at(a,o))}return{c(){for(let u=0;u<e.length;u+=1)e[u].c();n=wt()},m(u,o){for(let a=0;a<e.length;a+=1)e[a].m(u,o);v(u,n,o),s=!0},p(u,[o]){o&1&&(i=u[0],Lt(),e=It(e,o,r,1,u,i,l,n.parentNode,Rt,at,n,ot),Et())},i(u){if(!s){for(let o=0;o<i.length;o+=1)T(e[o]);s=!0}},o(u){for(let o=0;o<e.length;o+=1)E(e[o]);s=!1},d(u){for(let o=0;o<e.length;o+=1)e[o].d(u);u&&b(n)}}}function Tn(t,e,l){let n;return Ne(t,Re,s=>l(0,n=s)),[n]}class Ln extends H{constructor(e){super(),G(this,e,Tn,Sn,A,{})}}function En(t){let e,l,n,s,i,r,u,o;return{c(){e=p("div"),l=p("h4"),n=D(t[1]),s=D(" Reviews"),i=y(),r=p("h4"),u=D("Ratings Average: "),o=D(t[0]),c(e,"class","feedback-stats svelte-ga2qn0")},m(a,h){v(a,e,h),f(e,l),f(l,n),f(l,s),f(e,i),f(e,r),f(r,u),f(r,o)},p(a,[h]){h&2&&$e(n,a[1]),h&1&&$e(o,a[0])},i:j,o:j,d(a){a&&b(e)}}}function Un(t,e,l){let n,s,i;return Ne(t,Re,r=>l(2,i=r)),t.$$.update=()=>{t.$$.dirty&4&&l(1,n=i.length),t.$$.dirty&4&&l(0,s=i.reduce((r,{rating:u})=>r+u,0)/i.length)},[s,n,i]}class Dn extends H{constructor(e){super(),G(this,e,Un,En,A,{})}}function ct(t,e,l){const n=t.slice();return n[1]=e[l],n}function ft(t,e){let l,n,s,i,r,u;return n=new Mt({props:{item:e[1]}}),{key:t,first:null,c(){l=p("div"),M(n.$$.fragment),s=y(),this.first=l},m(o,a){v(o,l,a),P(n,l,null),f(l,s),u=!0},p(o,a){e=o;const h={};a&1&&(h.item=e[1]),n.$set(h)},i(o){u||(T(n.$$.fragment,o),ee(()=>{r&&r.end(1),i=Dt(l,Ft,{}),i.start()}),u=!0)},o(o){E(n.$$.fragment,o),i&&i.invalidate(),r=xt(l,qt,{duration:500}),u=!1},d(o){o&&b(l),q(n),o&&r&&r.end()}}}function xn(t){let e=[],l=new Map,n,s,i=t[0];const r=u=>u[1].id;for(let u=0;u<i.length;u+=1){let o=ct(t,i,u),a=r(o);l.set(a,e[u]=ft(a,o))}return{c(){for(let u=0;u<e.length;u+=1)e[u].c();n=wt()},m(u,o){for(let a=0;a<e.length;a+=1)e[a].m(u,o);v(u,n,o),s=!0},p(u,[o]){o&1&&(i=u[0],Lt(),e=It(e,o,r,1,u,i,l,n.parentNode,Rt,ft,n,ct),Et())},i(u){if(!s){for(let o=0;o<i.length;o+=1)T(e[o]);s=!0}},o(u){for(let o=0;o<e.length;o+=1)E(e[o]);s=!1},d(u){for(let o=0;o<e.length;o+=1)e[o].d(u);u&&b(n)}}}function Rn(t,e,l){let n;return Ne(t,on,s=>l(0,n=s)),[n]}class In extends H{constructor(e){super(),G(this,e,Rn,xn,A,{})}}function On(t){let e,l,n,s,i;return{c(){e=p("h2"),e.textContent="How it works",l=y(),n=p("p"),n.innerHTML="<br/><br/>",s=D(`

The CULT Family votes on which Challenge of the Day shall be executed.

Everyone can submit Challenge of the Day Proposals.



`),i=p("p"),i.innerHTML="<br/><br/>"},m(r,u){v(r,e,u),v(r,l,u),v(r,n,u),v(r,s,u),v(r,i,u)},p:j,i:j,o:j,d(r){r&&b(e),r&&b(l),r&&b(n),r&&b(s),r&&b(i)}}}class Pn extends H{constructor(e){super(),G(this,e,null,On,A,{})}}function qn(t){let e,l,n,s,i,r,u,o,a,h;return{c(){e=p("p"),e.innerHTML="<br/><br/>",l=D(`
The games which can be found here might inspire people to inspire their
friends to explore 
`),n=p("a"),n.textContent="CULT",s=D(`
and 
`),i=p("a"),i.textContent=`RVLT
`,r=D(`.
`),u=p("br"),o=p("br"),a=D(`
It seems fair to give all people the chance to come on board early.

`),h=p("p"),h.innerHTML="<br/><br/>",c(n,"href","https://rumble.com/v1lf51r-cultdao-in-100-seconds-michael-saylor-talks-about-cult.html"),c(n,"target","_blank"),c(i,"href","https://rumble.com/v1lf3yb-revolt-2-earn-in-100-seconds-michael-saylor-talks-about-revolt-2-earn.html"),c(i,"target","_blank")},m(d,m){v(d,e,m),v(d,l,m),v(d,n,m),v(d,s,m),v(d,i,m),v(d,r,m),v(d,u,m),v(d,o,m),v(d,a,m),v(d,h,m)},p:j,i:j,o:j,d(d){d&&b(e),d&&b(l),d&&b(n),d&&b(s),d&&b(i),d&&b(r),d&&b(u),d&&b(o),d&&b(a),d&&b(h)}}}class Fn extends H{constructor(e){super(),G(this,e,null,qn,A,{})}}function Mn(t){let e,l,n,s,i;return{c(){e=p("br"),l=p("br"),n=D(`
Please join the games. If you do not like that, please let us know what we can improve by
`),s=p("a"),s.textContent="submitting an issue",i=D("."),c(s,"href","https://github.com/cultfamily-on-github/cult-education-games-microservice/issues"),c(s,"target","_blank")},m(r,u){v(r,e,u),v(r,l,u),v(r,n,u),v(r,s,u),v(r,i,u)},p:j,i:j,o:j,d(r){r&&b(e),r&&b(l),r&&b(n),r&&b(s),r&&b(i)}}}class An extends H{constructor(e){super(),G(this,e,null,Mn,A,{})}}function Nn(t){let e,l,n,s,i,r,u,o,a,h,d,m,$,g,_,k,S,L;return i=new In({}),u=new Fn({}),a=new Pn({}),d=new yn({}),$=new Ln({}),_=new Dn({}),S=new An({}),{c(){e=p("main"),l=p("div"),n=p("h2"),n.textContent="CULT Game Of The Day",s=y(),M(i.$$.fragment),r=y(),M(u.$$.fragment),o=y(),M(a.$$.fragment),h=y(),M(d.$$.fragment),m=y(),M($.$$.fragment),g=y(),M(_.$$.fragment),k=y(),M(S.$$.fragment),c(l,"class","text-center"),c(e,"class","container")},m(w,z){v(w,e,z),f(e,l),f(l,n),f(l,s),P(i,l,null),f(l,r),P(u,l,null),f(l,o),P(a,l,null),f(l,h),P(d,l,null),f(l,m),P($,l,null),f(l,g),P(_,l,null),f(l,k),P(S,l,null),L=!0},p:j,i(w){L||(T(i.$$.fragment,w),T(u.$$.fragment,w),T(a.$$.fragment,w),T(d.$$.fragment,w),T($.$$.fragment,w),T(_.$$.fragment,w),T(S.$$.fragment,w),L=!0)},o(w){E(i.$$.fragment,w),E(u.$$.fragment,w),E(a.$$.fragment,w),E(d.$$.fragment,w),E($.$$.fragment,w),E(_.$$.fragment,w),E(S.$$.fragment,w),L=!1},d(w){w&&b(e),q(i),q(u),q(a),q(d),q($),q(_),q(S)}}}class Gn extends H{constructor(e){super(),G(this,e,null,Nn,A,{})}}new Gn({target:document.getElementById("app")});