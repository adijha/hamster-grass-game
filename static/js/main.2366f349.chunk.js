(this["webpackJsonpattainu-assesment"]=this["webpackJsonpattainu-assesment"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(4),s=n.n(c),i=(n(9),n(2)),o=(n(10),n(0));function u(e){var t=Object(r.useState)(5),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(5),u=Object(i.a)(s,2),j=u[0],b=u[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{id:"title",children:"Hey, Please enter number of rows and colums for your desired table here"}),Object(o.jsx)("input",{placeholder:"rows",value:a,type:"number",min:"5",max:"15",step:"1",maxLength:"2",onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("input",{min:"5",step:"1",max:"15",type:"number",maxLength:"2",value:j,onChange:function(e){return b(e.target.value)},placeholder:"columns"}),Object(o.jsx)("button",{style:{backgroundColor:"white"},onClick:function(){return e.generateTable(a,j)},children:"Generate Table"}),Object(o.jsx)("p",{children:"Caution: It won't work on mobile, since it's a keyboard game"})]})}function j(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useCallback)((function(t){t.key===e&&c(!0)}),[e]),o=Object(r.useCallback)((function(t){t.key===e&&c(!1)}),[e]);return Object(r.useEffect)((function(){return window.addEventListener("keydown",s),window.addEventListener("keyup",o),function(){window.removeEventListener("keydown",s),window.removeEventListener("keyup",o)}}),[s,o]),a}var b=function(e){var t=e.r,n=e.c,a=e.randomFoodPosition,c=e.userPosition,s=e.setUserPosition,i=e.setGameOver,u=e.setStepsTakenByUser,b=e.stepsTakenByUser,l=j("ArrowUp"),d=j("ArrowDown"),O=j("ArrowLeft"),f=j("ArrowRight");Object(r.useEffect)((function(){if(l){var e=c.x,t=c.y;0!==t&&(s({x:e,y:t-1}),u(b+1))}}),[l]),Object(r.useEffect)((function(){if(d){var e=c.x,n=c.y;n<t-1&&(s({x:e,y:n+1}),u(b+1))}}),[d,t]),Object(r.useEffect)((function(){if(O){var e=c.x,t=c.y;0!==e&&(s({x:e-1,y:t}),u(b+1))}}),[O]),Object(r.useEffect)((function(){if(f){var e=c.x,t=c.y;e<n-1&&(s({x:e+1,y:t}),u(b+1))}}),[n,f]);for(var h=function(e){var t=e.x,n=e.y;var r=t.toString()+n.toString()===(null===c||void 0===c?void 0:c.x.toString())+(null===c||void 0===c?void 0:c.y.toString()),s=-1!==a.indexOf(t.toString()+n.toString());return r&&s&&function(e,t){var n=a.indexOf(e.toString()+t.toString());n>-1&&(a.splice(n,1),0===a.length&&i(!0))}(t,n),Object(o.jsxs)("td",{className:"cell",children:[r&&"\ud83d\udc39",s&&"\ud83c\udf3f"]})},x=[],v=0;v<t;v++){for(var g=[],m=0;m<n;m++)g.push(Object(o.jsx)(h,{x:m,y:v}));x.push(Object(o.jsx)("tr",{children:g}))}return Object(o.jsx)("div",{className:"table-wrapper",children:Object(o.jsx)("table",{children:x})})},l=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),s=Object(i.a)(c,2),j=s[0],l=s[1],d=Object(r.useState)(!1),O=Object(i.a)(d,2),f=O[0],h=O[1],x=Object(r.useState)({}),v=Object(i.a)(x,2),g=v[0],m=v[1],y=Object(r.useState)([]),p=Object(i.a)(y,1)[0],w=Object(r.useState)(!1),S=Object(i.a)(w,2),k=S[0],C=S[1],E=Object(r.useState)(0),P=Object(i.a)(E,2),L=P[0],M=P[1];return Object(o.jsx)("div",{className:"container",children:f?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h4",{children:["Hi hamster\ud83d\udc4b",Object(o.jsx)("br",{}),"eat fast, grass are limited",Object(o.jsx)("br",{})]}),Object(o.jsx)("p",{children:" Please press arrow keys to move"}),k?Object(o.jsxs)("div",{children:["You have taken ",L," steps for grass"]}):Object(o.jsx)(b,{r:n,c:j,randomFoodPosition:p,userPosition:g,setUserPosition:m,setGameOver:C,setStepsTakenByUser:M,stepsTakenByUser:L})]}):Object(o.jsx)(u,{generateTable:function(e,t){for(a(e),l(t),h(!0);p.length<t;){var n=Math.trunc(Math.random()*e),r=Math.trunc(Math.random()*t);-1===p.indexOf(r)&&p.push(r.toString()+n.toString())}m(e>t?{y:Math.trunc(e/2),x:Math.trunc(t/2)}:{y:Math.trunc(e/2),x:Math.trunc((t-1)/2)})}})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.2366f349.chunk.js.map