(this["webpackJsonpattainu-assesment"]=this["webpackJsonpattainu-assesment"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),o=n.n(s),a=(n(9),n(2)),i=(n(10),n(0));function u(e){var t=Object(r.useState)(5),n=Object(a.a)(t,2),c=n[0],s=n[1],o=Object(r.useState)(5),u=Object(a.a)(o,2),j=u[0],b=u[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{id:"title",children:"Hey, Please enter number of rows and colums for your desired table here"}),Object(i.jsx)("input",{placeholder:"rows",value:c,type:"number",min:"5",max:"15",step:"1",maxLength:"2",onChange:function(e){return s(e.target.value)}}),Object(i.jsx)("input",{min:"5",step:"1",max:"15",type:"number",maxLength:"2",value:j,onChange:function(e){return b(e.target.value)},placeholder:"columns"}),Object(i.jsx)("button",{style:{backgroundColor:"white"},onClick:function(){return e.generateTable(c,j)},children:"Generate Table"}),Object(i.jsx)("p",{children:"Caution: It won't work on mobile, since it's a keyboard game"})]})}function j(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),c=n[0],s=n[1],o=Object(r.useCallback)((function(t){t.key===e&&s(!0)}),[e]),i=Object(r.useCallback)((function(t){t.key===e&&s(!1)}),[e]);return Object(r.useEffect)((function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",i),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)}}),[o,i]),c}var b=function(e){var t=e.r,n=e.c,c=e.randomFoodPosition,s=e.userPosition,o=e.setUserPosition,a=e.setGameOver,u=e.setStepsTakenByUser,b=e.stepsTakenByUser,l=j("ArrowUp"),d=j("ArrowDown"),O=j("ArrowLeft"),f=j("ArrowRight");Object(r.useEffect)((function(){if(l){var e=s.x,t=s.y;0!==t&&(o({x:e,y:t-1}),u(b+1))}}),[l]),Object(r.useEffect)((function(){if(d){var e=s.x,n=s.y;n<t-1&&(o({x:e,y:n+1}),u(b+1))}}),[d,t]),Object(r.useEffect)((function(){if(O){var e=s.x,t=s.y;0!==e&&(o({x:e-1,y:t}),u(b+1))}}),[O]),Object(r.useEffect)((function(){if(f){var e=s.x,t=s.y;e<n-1&&(o({x:e+1,y:t}),u(b+1))}}),[n,f]);for(var h=function(e){var t=e.x,n=e.y;var r=t.toString()+n.toString()===(null===s||void 0===s?void 0:s.x.toString())+(null===s||void 0===s?void 0:s.y.toString()),o=-1!==c.indexOf(t.toString()+n.toString());return r&&o&&function(e,t){var n=c.indexOf(e.toString()+t.toString());n>-1&&(c.splice(n,1),0===c.length&&a(!0))}(t,n),Object(i.jsxs)("td",{className:"cell",children:[r&&"\ud83d\udc39",o&&"\ud83c\udf3f"]})},x=[],g=0;g<t;g++){for(var v=[],m=0;m<n;m++)v.push(Object(i.jsx)(h,{x:m,y:g}));x.push(Object(i.jsx)("tr",{children:v}))}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:JSON.stringify(s)}),Object(i.jsx)("table",{children:x})]})},l=function(){var e=Object(r.useState)(),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(),o=Object(a.a)(s,2),j=o[0],l=o[1],d=Object(r.useState)(!1),O=Object(a.a)(d,2),f=O[0],h=O[1],x=Object(r.useState)({}),g=Object(a.a)(x,2),v=g[0],m=g[1],y=Object(r.useState)([]),p=Object(a.a)(y,1)[0],S=Object(r.useState)(!1),w=Object(a.a)(S,2),k=w[0],M=w[1],C=Object(r.useState)(0),E=Object(a.a)(C,2),P=E[0],L=E[1];return Object(i.jsx)("div",{className:"container",children:f?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h4",{children:["Hi hamster\ud83d\udc4b",Object(i.jsx)("br",{}),"eat fast, grass are limited",Object(i.jsx)("br",{})]}),Object(i.jsx)("p",{children:" Please press arrow keys to move"}),k?Object(i.jsxs)("div",{children:["You have taken ",P," steps for grass"]}):Object(i.jsx)(b,{r:n,c:j,randomFoodPosition:p,userPosition:v,setUserPosition:m,setGameOver:M,setStepsTakenByUser:L,stepsTakenByUser:P})]}):Object(i.jsx)(u,{generateTable:function(e,t){for(c(e),l(t),h(!0);p.length<t;){var n=Math.trunc(Math.random()*e),r=Math.trunc(Math.random()*t);-1===p.indexOf(r)&&p.push(r.toString()+n.toString())}e>t?(console.log(Math.trunc(e/2)),console.log(Math.trunc(t/2)),m({y:Math.trunc(e/2),x:Math.trunc(t/2)})):(console.log("object"),console.log(Math.trunc(e/2)),console.log(Math.trunc(t/2)),m({y:Math.trunc(e/2),x:Math.trunc((t-1)/2)}))}})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.28460b4b.chunk.js.map