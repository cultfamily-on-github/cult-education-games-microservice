(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function O(){}const Te=t=>t;function ot(t,e){for(const n in e)t[n]=e[n];return t}function Re(t){return t()}function De(){return Object.create(null)}function V(t){t.forEach(Re)}function $e(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function rt(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return O;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function je(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Ye(t,e,n,l){if(t){const s=qe(t,e,n,l);return t[0](s)}}function qe(t,e,n,l){return t[1]&&l?ot(n.ctx.slice(),t[1](l(e))):n.ctx}function ze(t,e,n,l){if(t[2]&&l){const s=t[2](l(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],f=Math.max(e.dirty.length,s.length);for(let r=0;r<f;r+=1)i[r]=e.dirty[r]|s[r];return i}return e.dirty|s}return e.dirty}function Be(t,e,n,l,s,i){if(s){const f=qe(e,n,l,i);t.p(f,s)}}function We(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function Se(t){return t==null?"":t}const Ke=typeof window<"u";let Ve=Ke?()=>window.performance.now():()=>Date.now(),Ce=Ke?t=>requestAnimationFrame(t):O;const Q=new Set;function Ze(t){Q.forEach(e=>{e.c(t)||(Q.delete(e),e.f())}),Q.size!==0&&Ce(Ze)}function Xe(t){let e;return Q.size===0&&Ce(Ze),{promise:new Promise(n=>{Q.add(e={c:t,f:n})}),abort(){Q.delete(e)}}}function C(t,e){t.appendChild(e)}function Je(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ut(t){const e=k("style");return ct(Je(t),e),e.sheet}function ct(t,e){return C(t.head||t,e),e.sheet}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function k(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function D(){return L(" ")}function at(){return L("")}function q(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function mt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function dt(t){return Array.from(t.childNodes)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e){t.value=e==null?"":e}function pt(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function _t(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,l,e),s}const pe=new Map;let _e=0;function ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function bt(t,e){const n={stylesheet:ut(e),rules:{}};return pe.set(t,n),n}function Qe(t,e,n,l,s,i,f,r=0){const o=16.666/l;let c=`{
`;for(let a=0;a<=1;a+=o){const _=e+(n-e)*i(a);c+=a*100+`%{${f(_,1-_)}}
`}const v=c+`100% {${f(n,1-n)}}
}`,y=`__svelte_${ht(v)}_${r}`,h=Je(t),{stylesheet:$,rules:d}=pe.get(h)||bt(h,t);d[y]||(d[y]=!0,$.insertRule(`@keyframes ${y} ${v}`,$.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${y} ${l}ms linear ${s}ms 1 both`,_e+=1,y}function ke(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=n.length-l.length;s&&(t.style.animation=l.join(", "),_e-=s,_e||yt())}function yt(){Ce(()=>{_e||(pe.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&m(e)}),pe.clear())})}let re;function oe(t){re=t}function wt(){if(!re)throw new Error("Function called outside component initialization");return re}function gt(t){wt().$$.on_mount.push(t)}const ne=[],Oe=[],me=[],Pe=[],kt=Promise.resolve();let ve=!1;function vt(){ve||(ve=!0,kt.then(et))}function ee(t){me.push(t)}const ge=new Set;let ae=0;function et(){const t=re;do{for(;ae<ne.length;){const e=ne[ae];ae++,oe(e),Tt(e.$$)}for(oe(null),ne.length=0,ae=0;Oe.length;)Oe.pop()();for(let e=0;e<me.length;e+=1){const n=me[e];ge.has(n)||(ge.add(n),n())}me.length=0}while(ne.length);for(;Pe.length;)Pe.pop()();ve=!1,ge.clear(),oe(t)}function Tt(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ee)}}let te;function tt(){return te||(te=Promise.resolve(),te.then(()=>{te=null})),te}function he(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const de=new Set;let K;function le(){K={r:0,c:[],p:K}}function se(){K.r||V(K.c),K=K.p}function S(t,e){t&&t.i&&(de.delete(t),t.i(e))}function P(t,e,n,l){if(t&&t.o){if(de.has(t))return;de.add(t),K.c.push(()=>{de.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const nt={duration:0};function $t(t,e,n){let l=e(t,n),s=!1,i,f,r=0;function o(){i&&ke(t,i)}function c(){const{delay:y=0,duration:h=300,easing:$=Te,tick:d=O,css:b}=l||nt;b&&(i=Qe(t,0,1,h,y,$,b,r++)),d(0,1);const a=Ve()+y,_=a+h;f&&f.abort(),s=!0,ee(()=>he(t,!0,"start")),f=Xe(u=>{if(s){if(u>=_)return d(1,0),he(t,!0,"end"),o(),s=!1;if(u>=a){const g=$((u-a)/h);d(g,1-g)}}return s})}let v=!1;return{start(){v||(v=!0,ke(t),$e(l)?(l=l(),tt().then(c)):c())},invalidate(){v=!1},end(){s&&(o(),s=!1)}}}function Ct(t,e,n){let l=e(t,n),s=!0,i;const f=K;f.r+=1;function r(){const{delay:o=0,duration:c=300,easing:v=Te,tick:y=O,css:h}=l||nt;h&&(i=Qe(t,1,0,c,o,v,h));const $=Ve()+o,d=$+c;ee(()=>he(t,!1,"start")),Xe(b=>{if(s){if(b>=d)return y(0,1),he(t,!1,"end"),--f.r||V(f.c),!1;if(b>=$){const a=v((b-$)/c);y(1-a,a)}}return s})}return $e(l)?tt().then(()=>{l=l(),r()}):r(),{end(o){o&&l.tick&&l.tick(1,0),s&&(i&&ke(t,i),s=!1)}}}function Lt(t,e){P(t,1,1,()=>{e.delete(t.key)})}function Mt(t,e,n,l,s,i,f,r,o,c,v,y){let h=t.length,$=i.length,d=h;const b={};for(;d--;)b[t[d].key]=d;const a=[],_=new Map,u=new Map;for(d=$;d--;){const T=y(s,i,d),M=n(T);let N=f.get(M);N?l&&N.p(T,e):(N=c(M,T),N.c()),_.set(M,a[d]=N),M in b&&u.set(M,Math.abs(d-b[M]))}const g=new Set,I=new Set;function U(T){S(T,1),T.m(r,v),f.set(T.key,T),v=T.first,$--}for(;h&&$;){const T=a[$-1],M=t[h-1],N=T.key,Z=M.key;T===M?(v=T.first,h--,$--):_.has(Z)?!f.has(N)||g.has(N)?U(T):I.has(Z)?h--:u.get(N)>u.get(Z)?(I.add(N),U(T)):(g.add(Z),h--):(o(M,f),h--)}for(;h--;){const T=t[h];_.has(T.key)||o(T,f)}for(;$;)U(a[$-1]);return a}function j(t){t&&t.c()}function G(t,e,n,l){const{fragment:s,on_mount:i,on_destroy:f,after_update:r}=t.$$;s&&s.m(e,n),l||ee(()=>{const o=i.map(Re).filter($e);f?f.push(...o):V(o),t.$$.on_mount=[]}),r.forEach(ee)}function R(t,e){const n=t.$$;n.fragment!==null&&(V(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(ne.push(t),vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(t,e,n,l,s,i,f,r=[-1]){const o=re;oe(t);const c=t.$$={fragment:null,ctx:null,props:i,update:O,not_equal:s,bound:De(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:De(),dirty:r,skip_bound:!1,root:e.target||o.$$.root};f&&f(c.root);let v=!1;if(c.ctx=n?n(t,e.props||{},(y,h,...$)=>{const d=$.length?$[0]:h;return c.ctx&&s(c.ctx[y],c.ctx[y]=d)&&(!c.skip_bound&&c.bound[y]&&c.bound[y](d),v&&Dt(t,y)),h}):[],c.update(),v=!0,V(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const y=dt(e.target);c.fragment&&c.fragment.l(y),y.forEach(m)}else c.fragment&&c.fragment.c();e.intro&&S(t.$$.fragment),G(t,e.target,e.anchor,e.customElement),et()}oe(o)}class B{$destroy(){R(this,1),this.$destroy=O}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!rt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function St(t){let e,n,l,s,i,f,r,o,c,v,y,h,$,d,b,a,_;return{c(){e=k("p"),e.innerHTML="<br/><br/>",n=L(`
The games which can be found here might inspire people to inspire their friends to
explore
`),l=k("a"),l.textContent="CULT",s=L(`
and
`),i=k("a"),i.textContent="RVLT",f=L(`.
`),r=k("br"),o=k("br"),c=L(`
It seems fair to give all people the chance to come on board early. `),v=k("br"),y=k("br"),h=L(`



Let us play, learn and earn together in playful creativity to free the world.
`),$=k("br"),d=k("br"),b=L(`

If you do not like playing such games, you might want to let us know what we can
improve by
`),a=k("a"),a.textContent="submitting an issue",_=L("."),w(l,"href","https://rumble.com/v1lf51r-cultdao-in-100-seconds-michael-saylor-talks-about-cult.html"),w(l,"target","_blank"),w(l,"class","svelte-16scy71"),w(i,"href","https://rumble.com/v1lf3yb-revolt-2-earn-in-100-seconds-michael-saylor-talks-about-revolt-2-earn.html"),w(i,"target","_blank"),w(i,"class","svelte-16scy71"),w(a,"href","https://github.com/cultfamily-on-github/cult-education-games-microservice/issues"),w(a,"target","_blank"),w(a,"class","svelte-16scy71")},m(u,g){p(u,e,g),p(u,n,g),p(u,l,g),p(u,s,g),p(u,i,g),p(u,f,g),p(u,r,g),p(u,o,g),p(u,c,g),p(u,v,g),p(u,y,g),p(u,h,g),p(u,$,g),p(u,d,g),p(u,b,g),p(u,a,g),p(u,_,g)},p:O,i:O,o:O,d(u){u&&m(e),u&&m(n),u&&m(l),u&&m(s),u&&m(i),u&&m(f),u&&m(r),u&&m(o),u&&m(c),u&&m(v),u&&m(y),u&&m(h),u&&m($),u&&m(d),u&&m(b),u&&m(a),u&&m(_)}}}class Ot extends B{constructor(e){super(),z(this,e,null,St,Y,{})}}function Pt(t){let e,n,l,s,i,f,r,o,c,v,y,h,$;return{c(){e=k("p"),e.innerHTML="<br/><br/>",n=L(`
To become an Apprentice, please send a dm via
`),l=k("a"),l.textContent="Twitter",s=L(`
or via
`),i=k("a"),i.textContent="Telegram",f=L(`.
`),r=k("p"),r.innerHTML="<br/>",o=L(`

Depending on your track record of supporting the CULTDAO in constructive range
increasing ways, the host of this playground decides if you are ready for the
role as apprentice or even for the role as master.
`),c=k("p"),c.innerHTML="<br/>",v=L(`
If this is too much power in the hands of the playground host from your perspective,
feel free to fork the
`),y=k("a"),y.textContent="Code Repository",h=L(`
and host your own CULT Playground.

`),$=k("p"),$.innerHTML="<br/><br/>",w(l,"href","https://twitter.com/Peer2PeerE"),w(l,"target","_blank"),w(l,"class","svelte-16scy71"),w(i,"href","https://t.me/freedomplayer"),w(i,"target","_blank"),w(i,"class","svelte-16scy71"),w(y,"href","https://github.com/cultfamily-on-github/cult-education-games-microservice"),w(y,"target","_blank"),w(y,"class","svelte-16scy71")},m(d,b){p(d,e,b),p(d,n,b),p(d,l,b),p(d,s,b),p(d,i,b),p(d,f,b),p(d,r,b),p(d,o,b),p(d,c,b),p(d,v,b),p(d,y,b),p(d,h,b),p(d,$,b)},p:O,i:O,o:O,d(d){d&&m(e),d&&m(n),d&&m(l),d&&m(s),d&&m(i),d&&m(f),d&&m(r),d&&m(o),d&&m(c),d&&m(v),d&&m(y),d&&m(h),d&&m($)}}}class Ut extends B{constructor(e){super(),z(this,e,null,Pt,Y,{})}}function It(t){let e,n,l,s,i,f,r,o,c,v,y,h,$,d,b,a,_;return{c(){e=k("p"),e.innerHTML="<br/>",n=D(),l=k("h2"),l.textContent="Levels",s=D(),i=k("br"),f=L(`
1. Trainee: `),r=k("br"),o=L(`
As a trainee you can start executing the game of the day (see above). `),c=k("p"),c.innerHTML="<br/>",v=L(`

2. Apprentice: `),y=k("br"),h=L(`
You have trainee skills plus you can vote on Game of the Day Proposals.`),$=k("p"),$.innerHTML="<br/>",d=L(`

3. Master of the Game: `),b=k("br"),a=L(`
You have apprentice skills plus you can submit your own Game of the Day Proposals.

`),_=k("p"),_.innerHTML="<br/><br/>"},m(u,g){p(u,e,g),p(u,n,g),p(u,l,g),p(u,s,g),p(u,i,g),p(u,f,g),p(u,r,g),p(u,o,g),p(u,c,g),p(u,v,g),p(u,y,g),p(u,h,g),p(u,$,g),p(u,d,g),p(u,b,g),p(u,a,g),p(u,_,g)},p:O,i:O,o:O,d(u){u&&m(e),u&&m(n),u&&m(l),u&&m(s),u&&m(i),u&&m(f),u&&m(r),u&&m(o),u&&m(c),u&&m(v),u&&m(y),u&&m(h),u&&m($),u&&m(d),u&&m(b),u&&m(a),u&&m(_)}}}class At extends B{constructor(e){super(),z(this,e,null,It,Y,{})}}const X=[];function Et(t,e=O){let n;const l=new Set;function s(r){if(Y(t,r)&&(t=r,n)){const o=!X.length;for(const c of l)c[1](),X.push(c,t);if(o){for(let c=0;c<X.length;c+=2)X[c][0](X[c+1]);X.length=0}}}function i(r){s(r(t))}function f(r,o=O){const c=[r,o];return l.add(c),l.size===1&&(n=e(s)||O),r(t),()=>{l.delete(c),l.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:f}}const lt=Et([{id:1,rating:10,text:"Ensure the following hashtags are trending on Twitter today: #StarlinkIsCULT #RumbleIsCULT #CULTDAO. You might want to do so by retweeting: https://twitter.com/Peer2peerE/status/1574787191489941506?s=20&t=wUyNpuR8Sc7DtcPo7lp37A",utcDate:"2022-9-28"},{id:2,rating:9,text:"Ensure the following hashtags are trending on Twitter today: #BanklessIsCULT #RumbleIsCULT #CULTDAO. You might want to do so by retweeting: https://twitter.com/Peer2peerE/status/1575232469774651392?s=20&t=29KAdI7wbOWaaw0XtLt6sw",utcDate:"2022-9-29"},{id:3,rating:9,text:"Follow 10 new good people today who might love the CULTDAO. Look for common interests and connect with them - to learn, to make friends and to enhance our networks.",utcDate:"2022-9-30"},{id:4,rating:9,text:"Invite 5 new people (neighbors, friends, colleagues, ...) who might love the CULTDAO to https://discord.com/invite/wearecultdao to expand our network.",utcDate:"2022-10-01"},{id:14,rating:9,text:"Invite 5 new people (neighbors, friends, colleagues, ...) who might love the CULTDAO to https://discord.com/invite/wearecultdao to expand our network.",utcDate:"2022-10-1"},{id:5,rating:9,text:"To all who use facebook: Offer each of your facebook friends 1.000 RVLT if they post a supportive statement regarding the CULTDAO.",utcDate:"2022-10-2"},{id:6,rating:9,text:"Ensure #ElonMuskLovesCULT is trending on Twitter.",utcDate:"2022-10-3"},{id:7,rating:8,text:"Ensure #SaylorLovesCULT is trending on Twitter.",utcDate:"2022-10-4"}]);function Ht(t){let e,n;const l=t[1].default,s=Ye(l,t,t[0],null);return{c(){e=k("div"),s&&s.c(),w(e,"class","card svelte-1mj4ff7")},m(i,f){p(i,e,f),s&&s.m(e,null),n=!0},p(i,[f]){s&&s.p&&(!n||f&1)&&Be(s,l,i,i[0],n?ze(l,i[0],f,null):We(i[0]),null)},i(i){n||(S(s,i),n=!0)},o(i){P(s,i),n=!1},d(i){i&&m(e),s&&s.d(i)}}}function xt(t,e,n){let{$$slots:l={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&n(0,s=i.$$scope)},[s,l]}class st extends B{constructor(e){super(),z(this,e,xt,Ht,Y,{})}}function Ft(t){let e,n,l;const s=t[4].default,i=Ye(s,t,t[3],null);return{c(){e=k("button"),i&&i.c(),w(e,"type",t[1]),e.disabled=t[2],w(e,"class",n=Se(t[0])+" svelte-3lb9xd")},m(f,r){p(f,e,r),i&&i.m(e,null),l=!0},p(f,[r]){i&&i.p&&(!l||r&8)&&Be(i,s,f,f[3],l?ze(s,f[3],r,null):We(f[3]),null),(!l||r&2)&&w(e,"type",f[1]),(!l||r&4)&&(e.disabled=f[2]),(!l||r&1&&n!==(n=Se(f[0])+" svelte-3lb9xd"))&&w(e,"class",n)},i(f){l||(S(i,f),l=!0)},o(f){P(i,f),l=!1},d(f){f&&m(e),i&&i.d(f)}}}function Nt(t,e,n){let{$$slots:l={},$$scope:s}=e,{style:i="primary"}=e,{type:f="button"}=e,{disabled:r=!1}=e;return t.$$set=o=>{"style"in o&&n(0,i=o.style),"type"in o&&n(1,f=o.type),"disabled"in o&&n(2,r=o.disabled),"$$scope"in o&&n(3,s=o.$$scope)},[i,f,r,s,l]}class Gt extends B{constructor(e){super(),z(this,e,Nt,Ft,Y,{style:0,type:1,disabled:2})}}function Rt(t){let e;return{c(){e=L("Send")},m(n,l){p(n,e,l)},d(n){n&&m(e)}}}function Ue(t){let e,n;return{c(){e=k("div"),n=L(t[3]),w(e,"class","message svelte-hbldff")},m(l,s){p(l,e,s),C(e,n)},p(l,s){s&8&&ie(n,l[3])},d(l){l&&m(e)}}}function jt(t){let e,n,l,s,i,f,r,o,c,v,y,h,$,d,b,a;h=new Gt({props:{disabled:t[2],type:"submit",$$slots:{default:[Rt]},$$scope:{ctx:t}}});let _=t[3]&&Ue(t);return{c(){e=k("header"),e.innerHTML='<h2 class="svelte-hbldff">Master Mode</h2>',n=D(),l=k("form"),s=k("div"),i=k("input"),f=D(),r=k("div"),o=k("input"),c=D(),v=k("p"),v.innerHTML="<br/>",y=D(),j(h.$$.fragment),$=D(),_&&_.c(),w(e,"class","svelte-hbldff"),w(i,"type","text"),w(i,"placeholder","Please enter your Masterkey"),w(i,"class","svelte-hbldff"),w(s,"class","input-group svelte-hbldff"),w(o,"type","text"),w(o,"placeholder","Please enter your Challenge of the Day Proposal"),w(o,"class","svelte-hbldff"),w(r,"class","input-group svelte-hbldff")},m(u,g){p(u,e,g),p(u,n,g),p(u,l,g),C(l,s),C(s,i),ce(i,t[1]),C(l,f),C(l,r),C(r,o),ce(o,t[0]),C(l,c),C(l,v),C(l,y),G(h,l,null),C(l,$),_&&_.m(l,null),d=!0,b||(a=[q(i,"input",t[4]),q(i,"input",t[7]),q(o,"input",t[5]),q(o,"input",t[8]),q(l,"submit",mt(t[6]))],b=!0)},p(u,g){g&2&&i.value!==u[1]&&ce(i,u[1]),g&1&&o.value!==u[0]&&ce(o,u[0]);const I={};g&4&&(I.disabled=u[2]),g&4096&&(I.$$scope={dirty:g,ctx:u}),h.$set(I),u[3]?_?_.p(u,g):(_=Ue(u),_.c(),_.m(l,null)):_&&(_.d(1),_=null)},i(u){d||(S(h.$$.fragment,u),d=!0)},o(u){P(h.$$.fragment,u),d=!1},d(u){u&&m(e),u&&m(n),u&&m(l),R(h),_&&_.d(),b=!1,V(a)}}}function Yt(t){let e,n;return e=new st({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){j(e.$$.fragment)},m(l,s){G(e,l,s),n=!0},p(l,[s]){const i={};s&4111&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){P(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}let Ie=20;function qt(t,e,n){let l="",s="",i=!0,f;const r=()=>{},o=()=>{l.trim().length<=Ie?(n(3,f=`The Proposal Text must be at least ${Ie} characters`),n(2,i=!0)):(n(3,f=null),n(2,i=!1))},c=()=>{alert("nice try :) you can't be a master here yet because this playground is just getting started.")};function v(){s=this.value,n(1,s)}function y(){l=this.value,n(0,l)}return[l,s,i,f,r,o,c,v,y]}class zt extends B{constructor(e){super(),z(this,e,qt,Yt,Y,{})}}function Bt(t){const e=t-1;return e*e*e+1}function Wt(t,{delay:e=0,duration:n=400,easing:l=Te}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:l,css:i=>`opacity: ${i*s}`}}function Kt(t,{delay:e=0,duration:n=400,easing:l=Bt,start:s=0,opacity:i=0}={}){const f=getComputedStyle(t),r=+f.opacity,o=f.transform==="none"?"":f.transform,c=1-s,v=r*(1-i);return{delay:e,duration:n,easing:l,css:(y,h)=>`
			transform: ${o} scale(${1-c*h});
			opacity: ${r-v*h}
		`}}function Vt(t){let e,n,l,s,i,f,r,o,c,v,y,h,$,d,b;return{c(){e=L("UTC Date: "),n=L(t[3]),l=L("-"),s=L(t[5]),i=L("-"),f=L(t[4]),r=D(),o=k("br"),c=L(`
Countdown: `),v=L(t[0]),y=L("h "),h=L(t[1]),$=L("m "),d=L(t[2]),b=L("s")},m(a,_){p(a,e,_),p(a,n,_),p(a,l,_),p(a,s,_),p(a,i,_),p(a,f,_),p(a,r,_),p(a,o,_),p(a,c,_),p(a,v,_),p(a,y,_),p(a,h,_),p(a,$,_),p(a,d,_),p(a,b,_)},p(a,[_]){_&1&&ie(v,a[0]),_&2&&ie(h,a[1]),_&4&&ie(d,a[2])},i:O,o:O,d(a){a&&m(e),a&&m(n),a&&m(l),a&&m(s),a&&m(i),a&&m(f),a&&m(r),a&&m(o),a&&m(c),a&&m(v),a&&m(y),a&&m(h),a&&m($),a&&m(d),a&&m(b)}}}function Zt(t,e,n){let{deadline:l}=e,s=new Date,i=s.getUTCFullYear(),f=s.getUTCMonth(),r=s.getUTCDate(),o=f+1,c,v,y;return gt(async()=>{var h=setInterval(function(){var $=new Date().getTime(),d=l-$;n(0,c=Math.floor(d%864e5/36e5)),n(1,v=Math.floor(d%36e5/6e4)),n(2,y=Math.floor(d%6e4/1e3)),d<0&&clearInterval(h)},1e3)}),t.$$set=h=>{"deadline"in h&&n(6,l=h.deadline)},[c,v,y,i,r,o,l]}class Xt extends B{constructor(e){super(),z(this,e,Zt,Vt,Y,{deadline:6})}}function Jt(t){let e,n,l;return{c(){e=k("button"),e.textContent="Vote As Apprentice"},m(s,i){p(s,e,i),n||(l=q(e,"click",t[7]),n=!0)},p:O,d(s){s&&m(e),n=!1,l()}}}function Qt(t){let e,n,l;return{c(){e=k("button"),e.textContent="Let's Do It"},m(s,i){p(s,e,i),n||(l=q(e,"click",t[6]),n=!0)},p:O,d(s){s&&m(e),n=!1,l()}}}function Ae(t){return{c:O,m:O,d:O}}function en(t){let e,n=t[1].rating+"",l,s,i,f,r,o,c,v=t[5](t[1].text)+"",y,h,$,d,b,a,_;i=new Xt({props:{deadline:t[2]}});function u(T,M){return T[0]==="cultGameOfTheDay"?Qt:Jt}let g=u(t),I=g(t),U=t[0]==="apprentice"&&Ae();return{c(){e=k("div"),l=L(n),s=D(),j(i.$$.fragment),f=D(),r=k("p"),r.innerHTML="<br/>",o=D(),c=k("p"),y=D(),h=k("p"),h.innerHTML="<br/>",$=D(),I.c(),d=D(),U&&U.c(),b=D(),a=k("a"),a.textContent="you might only understand this if you try to delete it :)",w(e,"class","num-display svelte-1hwqke3"),w(c,"class","text-display"),w(a,"href","https://cultmagazine.org"),w(a,"class","linkInText svelte-1hwqke3"),pt(a,"display","none")},m(T,M){p(T,e,M),C(e,l),p(T,s,M),G(i,T,M),p(T,f,M),p(T,r,M),p(T,o,M),p(T,c,M),c.innerHTML=v,p(T,y,M),p(T,h,M),p(T,$,M),I.m(T,M),p(T,d,M),U&&U.m(T,M),p(T,b,M),p(T,a,M),_=!0},p(T,M){(!_||M&2)&&n!==(n=T[1].rating+"")&&ie(l,n),(!_||M&2)&&v!==(v=T[5](T[1].text)+"")&&(c.innerHTML=v),g===(g=u(T))&&I?I.p(T,M):(I.d(1),I=g(T),I&&(I.c(),I.m(d.parentNode,d))),T[0]==="apprentice"?U||(U=Ae(),U.c(),U.m(b.parentNode,b)):U&&(U.d(1),U=null)},i(T){_||(S(i.$$.fragment,T),_=!0)},o(T){P(i.$$.fragment,T),_=!1},d(T){T&&m(e),T&&m(s),R(i,T),T&&m(f),T&&m(r),T&&m(o),T&&m(c),T&&m(y),T&&m(h),T&&m($),I.d(T),T&&m(d),U&&U.d(T),T&&m(b),T&&m(a)}}}function tn(t){let e,n;return e=new st({props:{$$slots:{default:[en]},$$scope:{ctx:t}}}),{c(){j(e.$$.fragment)},m(l,s){G(e,l,s),n=!0},p(l,[s]){const i={};s&65539&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){P(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function nn(t,e,n){let{mode:l=""}=e,{item:s}=e,i=s.utcDate.split("-")[0],f=s.utcDate.split("-")[1].split("-")[0],r=s.utcDate.substr(s.utcDate.length-2,2),o=new Date(Date.UTC(i,r,f,23,59,59)).getTime();const c=b=>{const a=v(b);b.indexOf("https://")===-1?alert("ok. just do it."):window.open(a,"_blank")},v=b=>{let a="",_=b.indexOf("https://");if(_!==-1){let u=b.substr(_,b.length),g=u.indexOf(" ")-1;g===-2?a=u:a=u.substr(0,g)}return a},y=b=>{alert("nice try :) you can't be an apprentice yet, because this playground is just getting started.")},h=b=>{var a=/(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,_=b.replace(a,`<a class="linkInText" href='$1' target="_blank">$1</a>`),u=/(^|[^\/])(www\.[\S]+(\b|$))/gim,g=_.replace(u,'$1<a class="linkInText" target="_blank" href="http://$2">$2</a>');return g},$=()=>c(s.text),d=()=>y(s.id);return t.$$set=b=>{"mode"in b&&n(0,l=b.mode),"item"in b&&n(1,s=b.item)},[l,s,o,c,y,h,$,d]}class it extends B{constructor(e){super(),z(this,e,nn,tn,Y,{mode:0,item:1})}}function Ee(t,e,n){const l=t.slice();return l[1]=e[n],l}function He(t,e){let n,l,s,i,f,r;return l=new it({props:{mode:"apprentice",item:e[1]}}),{key:t,first:null,c(){n=k("div"),j(l.$$.fragment),s=D(),this.first=n},m(o,c){p(o,n,c),G(l,n,null),C(n,s),r=!0},p(o,c){e=o;const v={};c&1&&(v.item=e[1]),l.$set(v)},i(o){r||(S(l.$$.fragment,o),ee(()=>{f&&f.end(1),i=$t(n,Kt,{}),i.start()}),r=!0)},o(o){P(l.$$.fragment,o),i&&i.invalidate(),f=Ct(n,Wt,{duration:500}),r=!1},d(o){o&&m(n),R(l),o&&f&&f.end()}}}function ln(t){let e=[],n=new Map,l,s,i=t[0];const f=r=>r[1].id;for(let r=0;r<i.length;r+=1){let o=Ee(t,i,r),c=f(o);n.set(c,e[r]=He(c,o))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();l=at()},m(r,o){for(let c=0;c<e.length;c+=1)e[c].m(r,o);p(r,l,o),s=!0},p(r,[o]){o&1&&(i=r[0],le(),e=Mt(e,o,f,1,r,i,n,l.parentNode,Lt,He,l,Ee),se())},i(r){if(!s){for(let o=0;o<i.length;o+=1)S(e[o]);s=!0}},o(r){for(let o=0;o<e.length;o+=1)P(e[o]);s=!1},d(r){for(let o=0;o<e.length;o+=1)e[o].d(r);r&&m(l)}}}function sn(t,e,n){let l;return je(t,lt,s=>n(0,l=s)),[l]}class on extends B{constructor(e){super(),z(this,e,sn,ln,Y,{})}}function rn(t){let e,n,l,s,i,f,r,o,c,v,y,h,$,d,b;return document.title=e=t[0],{c(){n=k("meta"),l=k("meta"),s=k("meta"),f=k("meta"),r=k("meta"),o=k("meta"),c=k("meta"),v=k("meta"),y=k("meta"),h=k("meta"),$=k("meta"),b=k("meta"),w(n,"name","description"),w(n,"content",t[1]),w(l,"property","og:type"),w(l,"content","website"),w(s,"property","og:title"),w(s,"content",i=`${t[0]} - ${J}`),w(f,"property","og:site_name"),w(f,"content",J),w(r,"property","og:description"),w(r,"content",t[1]),w(o,"property","og:image"),w(o,"name","og:image"),w(o,"content",t[2]),w(c,"name","og:url"),w(c,"content",t[3]),w(v,"name","twitter:site"),w(v,"content",t[4]),w(y,"name","twitter:image"),w(y,"content",t[2]),w(h,"name","twitter:card"),w(h,"content","summary_large_image"),w($,"name","twitter:title"),w($,"content",d=`${t[0]} - ${J}`),w(b,"name","twitter:description"),w(b,"content",t[1])},m(a,_){C(document.head,n),C(document.head,l),C(document.head,s),C(document.head,f),C(document.head,r),C(document.head,o),C(document.head,c),C(document.head,v),C(document.head,y),C(document.head,h),C(document.head,$),C(document.head,b)},p(a,[_]){_&1&&e!==(e=a[0])&&(document.title=e),_&2&&w(n,"content",a[1]),_&1&&i!==(i=`${a[0]} - ${J}`)&&w(s,"content",i),_&2&&w(r,"content",a[1]),_&4&&w(o,"content",a[2]),_&8&&w(c,"content",a[3]),_&16&&w(v,"content",a[4]),_&4&&w(y,"content",a[2]),_&1&&d!==(d=`${a[0]} - ${J}`)&&w($,"content",d),_&2&&w(b,"content",a[1])},i:O,o:O,d(a){m(n),m(l),m(s),m(f),m(r),m(o),m(c),m(v),m(y),m(h),m($),m(b)}}}const J="CULT Challenge";function fn(t,e,n){let{title:l=J}=e,{description:s="We are a network of cultdao.io fans promoting freedom, fairness, education and love."}=e,{image:i="https://raw.githubusercontent.com/michael-spengler/fairness/main/diagrams-documents-images/cult-money-1500x500.jpeg"}=e,{url:f="https://cultplayground.org"}=e,{twitterHandle:r="@Peer2PeerE"}=e;return t.$$set=o=>{"title"in o&&n(0,l=o.title),"description"in o&&n(1,s=o.description),"image"in o&&n(2,i=o.image),"url"in o&&n(3,f=o.url),"twitterHandle"in o&&n(4,r=o.twitterHandle)},[l,s,i,f,r]}class un extends B{constructor(e){super(),z(this,e,fn,rn,Y,{title:0,description:1,image:2,url:3,twitterHandle:4})}}function xe(t){let e,n;return e=new Ut({}),{c(){j(e.$$.fragment)},m(l,s){G(e,l,s),n=!0},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){P(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function Fe(t){let e,n;return e=new Ot({}),{c(){j(e.$$.fragment)},m(l,s){G(e,l,s),n=!0},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){P(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function Ne(t){let e,n;return e=new zt({}),{c(){j(e.$$.fragment)},m(l,s){G(e,l,s),n=!0},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){P(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function Ge(t){let e,n;return e=new on({}),{c(){j(e.$$.fragment)},m(l,s){G(e,l,s),n=!0},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){P(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function cn(t){let e,n,l,s,i,f,r,o,c,v,y,h,$,d,b,a,_,u,g,I,U,T,M,N,Z,fe,Le,be,ye,ue,we,Me;e=new un({props:{title:"CULT Challenge Today",description:"We are a network of cultdao.io fans promoting freedom, fairness, education and love."}}),r=new it({props:{mode:"cultGameOfTheDay",item:t[8]}}),c=new At({});let E=t[0]&&xe(),H=t[1]&&Fe(),x=t[3]&&Ne(),F=t[2]&&Ge();return{c(){j(e.$$.fragment),n=D(),l=k("main"),s=k("div"),i=k("h2"),i.textContent="CULT Game Of The Day",f=D(),j(r.$$.fragment),o=D(),j(c.$$.fragment),v=D(),y=k("button"),y.textContent="Show Details",h=D(),E&&E.c(),$=D(),d=k("p"),d.innerHTML="<br/>",b=D(),a=k("button"),a.textContent="Show Philosophy",_=D(),H&&H.c(),u=D(),g=k("p"),g.innerHTML="<br/>",I=D(),U=k("button"),U.textContent="Show Master Mode",T=D(),x&&x.c(),M=D(),N=k("p"),N.innerHTML="<br/>",Z=D(),fe=k("button"),fe.textContent="Show Challenge Proposals",Le=D(),F&&F.c(),be=D(),ye=k("p"),ye.innerHTML="<br/>",w(s,"class","text-center"),w(l,"class","container")},m(A,W){G(e,A,W),p(A,n,W),p(A,l,W),C(l,s),C(s,i),C(s,f),G(r,s,null),C(s,o),G(c,s,null),C(s,v),C(s,y),C(s,h),E&&E.m(s,null),C(s,$),C(s,d),C(s,b),C(s,a),C(s,_),H&&H.m(s,null),C(s,u),C(s,g),C(s,I),C(s,U),C(s,T),x&&x.m(s,null),C(s,M),C(s,N),C(s,Z),C(s,fe),C(s,Le),F&&F.m(s,null),C(s,be),C(s,ye),ue=!0,we||(Me=[q(y,"click",t[9]),q(a,"click",t[10]),q(U,"click",t[11]),q(fe,"click",t[12])],we=!0)},p(A,[W]){A[0]?E?W&1&&S(E,1):(E=xe(),E.c(),S(E,1),E.m(s,$)):E&&(le(),P(E,1,1,()=>{E=null}),se()),A[1]?H?W&2&&S(H,1):(H=Fe(),H.c(),S(H,1),H.m(s,u)):H&&(le(),P(H,1,1,()=>{H=null}),se()),A[3]?x?W&8&&S(x,1):(x=Ne(),x.c(),S(x,1),x.m(s,M)):x&&(le(),P(x,1,1,()=>{x=null}),se()),A[2]?F?W&4&&S(F,1):(F=Ge(),F.c(),S(F,1),F.m(s,be)):F&&(le(),P(F,1,1,()=>{F=null}),se())},i(A){ue||(S(e.$$.fragment,A),S(r.$$.fragment,A),S(c.$$.fragment,A),S(E),S(H),S(x),S(F),ue=!0)},o(A){P(e.$$.fragment,A),P(r.$$.fragment,A),P(c.$$.fragment,A),P(E),P(H),P(x),P(F),ue=!1},d(A){R(e,A),A&&m(n),A&&m(l),R(r),R(c),E&&E.d(),H&&H.d(),x&&x.d(),F&&F.d(),we=!1,V(Me)}}}function an(t,e,n){let l;je(t,lt,g=>n(13,l=g));let s=!1,i=!1,f=!1,r=!1;const o=()=>{n(0,s=!s),s&&(n(1,i=!1),n(2,f=!1),n(3,r=!1))},c=()=>{n(1,i=!i),i&&(n(0,s=!1),n(2,f=!1),n(3,r=!1))},v=()=>{n(2,f=!f),f&&(n(0,s=!1),n(1,i=!1),n(3,r=!1))},y=()=>{n(3,r=!r),r&&(n(0,s=!1),n(1,i=!1),n(2,f=!1))};let h=new Date,$=`${h.getUTCFullYear()}-${h.getUTCMonth()+1}-${h.getUTCDate()}`,d=l.filter(g=>g.utcDate===$)[0];return[s,i,f,r,o,c,v,y,d,()=>o(),()=>c(),()=>y(),()=>v()]}class mn extends B{constructor(e){super(),z(this,e,an,cn,Y,{})}}new mn({target:document.getElementById("app")});