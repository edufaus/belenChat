import{S as X,i as Y,s as Z,k as U,q as S,a as M,l as w,m as C,r as T,h as p,c as R,n as I,p as $,b,C as y,A as H,Q as te,u as A,J as B,K as G,N as se,H as ne,I as le,v as O,w as j,x as q,M as ie,f as J,t as P,y as W,G as ae,o as re}from"../../../../chunks/index-8d7571b2.js";import{s as ee,r as x,L as oe,d as L,g as ue,c as ce,o as me}from"../../../../chunks/login-c099c1ab.js";import{p as de}from"../../../../chunks/stores-8c698b3f.js";import{c as k}from"../../../../chunks/singletons-25a81d38.js";k.disable_scroll_handling;const ge=k.goto;k.invalidate;k.invalidateAll;k.prefetch;k.prefetch_routes;k.before_navigate;k.after_navigate;let E;const fe=new Uint8Array(16);function _e(){if(!E&&(E=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!E))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(fe)}const h=[];for(let t=0;t<256;++t)h.push((t+256).toString(16).slice(1));function he(t,e=0){return(h[t[e+0]]+h[t[e+1]]+h[t[e+2]]+h[t[e+3]]+"-"+h[t[e+4]]+h[t[e+5]]+"-"+h[t[e+6]]+h[t[e+7]]+"-"+h[t[e+8]]+h[t[e+9]]+"-"+h[t[e+10]]+h[t[e+11]]+h[t[e+12]]+h[t[e+13]]+h[t[e+14]]+h[t[e+15]]).toLowerCase()}const pe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),K={randomUUID:pe};function be(t,e,s){if(K.randomUUID&&!e&&!t)return K.randomUUID();t=t||{};const n=t.random||(t.rng||_e)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){s=s||0;for(let r=0;r<16;++r)e[s+r]=n[r];return e}return he(n)}function Q(t,e,s){const n=t.slice();return n[8]=e[s][0],n[9]=e[s][1],n}function F(t){let e=t[9].User+"",s,n,r=t[9].Message+"",o,c,a;return{c(){s=S(e),n=S(": "),o=S(r),c=M(),a=U("br")},l(i){s=T(i,e),n=T(i,": "),o=T(i,r),c=R(i),a=w(i,"BR",{})},m(i,l){b(i,s,l),b(i,n,l),b(i,o,l),b(i,c,l),b(i,a,l)},p(i,l){l&1&&e!==(e=i[9].User+"")&&A(s,e),l&1&&r!==(r=i[9].Message+"")&&A(o,r)},d(i){i&&p(s),i&&p(n),i&&p(o),i&&p(c),i&&p(a)}}}function ve(t){let e;return{c(){e=S("To send a message Login With Google")},l(s){e=T(s,"To send a message Login With Google")},m(s,n){b(s,e,n)},p:H,d(s){s&&p(e)}}}function ye(t){let e,s,n,r,o,c;return{c(){e=U("input"),s=M(),n=U("button"),r=S("Send Message"),this.h()},l(a){e=w(a,"INPUT",{class:!0,type:!0,placeholder:!0}),s=R(a),n=w(a,"BUTTON",{style:!0,class:!0});var i=C(n);r=T(i,"Send Message"),i.forEach(p),this.h()},h(){I(e,"class","input is-info svelte-3h2rxz"),I(e,"type","text"),I(e,"placeholder","Type a message..."),$(n,"color","white"),I(n,"class","button svelte-3h2rxz")},m(a,i){b(a,e,i),B(e,t[2]),b(a,s,i),b(a,n,i),y(n,r),o||(c=[G(e,"input",t[7]),G(n,"click",t[4])],o=!0)},p(a,i){i&4&&e.value!==a[2]&&B(e,a[2])},d(a){a&&p(e),a&&p(s),a&&p(n),o=!1,se(c)}}}function Ue(t){let e,s,n,r,o,c,a,i,l,u,g=t[3](t[0]),d=[];for(let m=0;m<g.length;m+=1)d[m]=F(Q(t,g,m));function V(m,_){return m[1]!=null?ye:ve}let N=V(t),v=N(t);return{c(){e=U("div"),s=U("h1"),n=S("Chat"),r=M(),o=U("hr"),c=M(),a=U("div");for(let m=0;m<d.length;m+=1)d[m].c();i=M(),l=U("br"),u=M(),v.c(),this.h()},l(m){e=w(m,"DIV",{class:!0});var _=C(e);s=w(_,"H1",{class:!0,style:!0});var f=C(s);n=T(f,"Chat"),f.forEach(p),r=R(_),o=w(_,"HR",{}),c=R(_),a=w(_,"DIV",{class:!0});var D=C(a);for(let z=0;z<d.length;z+=1)d[z].l(D);D.forEach(p),i=R(_),l=w(_,"BR",{}),u=R(_),v.l(_),_.forEach(p),this.h()},h(){I(s,"class","title"),$(s,"text-align","center"),I(a,"class","message svelte-3h2rxz"),I(e,"class","main-Chat svelte-3h2rxz")},m(m,_){b(m,e,_),y(e,s),y(s,n),y(e,r),y(e,o),y(e,c),y(e,a);for(let f=0;f<d.length;f+=1)d[f].m(a,null);y(e,i),y(e,l),y(e,u),v.m(e,null)},p(m,[_]){if(_&9){g=m[3](m[0]);let f;for(f=0;f<g.length;f+=1){const D=Q(m,g,f);d[f]?d[f].p(D,_):(d[f]=F(D),d[f].c(),d[f].m(a,null))}for(;f<d.length;f+=1)d[f].d(1);d.length=g.length}N===(N=V(m))&&v?v.p(m,_):(v.d(1),v=N(m),v&&(v.c(),v.m(e,null)))},i:H,o:H,d(m){m&&p(e),te(d,m),v.d()}}}function we(t,e,s){let{messages:n={}}=e,{db:r}=e,{roomid:o}=e,{user:c}=e,a="";function i(){return Object.entries(n).sort(([,d],[,V])=>d.Time-V.Time).slice(-9)}function l(){a!=""&&(ee(x(r,"Rooms/"+o+"/Messages/"+be()),{User:c.displayName,Message:a,Time:Date.now()}),s(2,a=""))}function u(){a=this.value,s(2,a)}return t.$$set=g=>{"messages"in g&&s(0,n=g.messages),"db"in g&&s(5,r=g.db),"roomid"in g&&s(6,o=g.roomid),"user"in g&&s(1,c=g.user)},[n,c,a,i,l,r,o,u]}class Ie extends X{constructor(e){super(),Y(this,e,we,Ue,Z,{messages:0,db:5,roomid:6,user:1})}}function ke(t){let e,s,n,r,o,c;function a(l){t[3](l)}let i={};return t[0]!==void 0&&(i.resultuser=t[0]),e=new oe({props:i}),ne.push(()=>le(e,"resultuser",a)),o=new Ie({props:{user:t[0],messages:t[1],db:L,roomid:t[2]}}),{c(){O(e.$$.fragment),n=M(),r=U("div"),O(o.$$.fragment),this.h()},l(l){j(e.$$.fragment,l),n=R(l),r=w(l,"DIV",{class:!0});var u=C(r);j(o.$$.fragment,u),u.forEach(p),this.h()},h(){I(r,"class","box has-text-centered")},m(l,u){q(e,l,u),b(l,n,u),b(l,r,u),q(o,r,null),c=!0},p(l,[u]){const g={};!s&&u&1&&(s=!0,g.resultuser=l[0],ie(()=>s=!1)),e.$set(g);const d={};u&1&&(d.user=l[0]),u&2&&(d.messages=l[1]),o.$set(d)},i(l){c||(J(e.$$.fragment,l),J(o.$$.fragment,l),c=!0)},o(l){P(e.$$.fragment,l),P(o.$$.fragment,l),c=!1},d(l){W(e,l),l&&p(n),l&&p(r),W(o)}}}function Me(t,e,s){var l;let n;ae(t,de,u=>s(4,n=u));let r=n.url.toString().split("/").pop().replace(/\?/g,""),o=null;o=(l=JSON.parse(window.sessionStorage.getItem("user")))!=null?l:"",re(async()=>{isNaN(r)||r.length!=8?ge("/room/invalidId"):ue(ce(x(L),`Rooms/${r}`)).then(u=>{u.exists()||ee(x(L,"Rooms/"+r),{Messages:{ignor:""}})}).catch(u=>{console.error(u)})});let c={};const a=x(L,"Rooms/"+r);me(a,async function(u){u.exists()&&(s(1,c=await u.val().Messages),delete c.ignor)}),console.log(o);function i(u){o=u,s(0,o)}return[o,c,r,i]}class Ce extends X{constructor(e){super(),Y(this,e,Me,ke,Z,{})}}export{Ce as default};
