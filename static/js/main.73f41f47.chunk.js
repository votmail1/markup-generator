(this.webpackJsonpgenerator=this.webpackJsonpgenerator||[]).push([[0],{261:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),l=n.n(r),s=n(11),i=(n(38),n(39),n(40),n(15)),o=n(4),j=n(1),b=function(){return Object(j.jsxs)("header",{className:"App-header bg-dark text-white pt-2",children:[Object(j.jsx)("h4",{className:"px-3",children:"Markup Generator"}),Object(j.jsxs)("ul",{className:"nav nav-tabs  ",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{to:"/flexgen",className:"nav-link active bg-secondary text-white border-secondary",children:"Flex"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{to:"/",className:"nav-link text-white ",children:"Grid"})})]})]})},d=n(9),u=n(2),O=n(28),h=n(265),p=n(264),x="FLEXGEN_CONTAINER_QUANTITY",f="FLEXGEN_CONTAINER_DIRECTION",m="FLEXGEN_CONTAINER_WRAP",v="FLEXGEN_CONTAINER_JC",g="FLEXGEN_CONTAINER_AI",N="FLEXGEN_CONTAINER_AC",y="FLEXGEN_CONTAINER_AS",w="FLEXGEN_ITEMS",C="FLEXGEN_HTML",E="FLEXGEN_CSS",A=function(e){return{type:w,payload:e}},I=function(){var e=Object(a.useState)({0:!0}),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.b)(),l=Object(s.c)((function(e){return e.flexGen})),i=l.containersQuantity,o=l.containersDirection,b=l.containersWrap,w=l.containersJC,I=l.containersAI,F=l.containersAC,_=l.containersAS,G=l.items,S=l.html,T=l.css,k=function(e){for(var t=[],a=0;a<e;a++)t[a]=a;e>0&&(r(function(e){return{type:x,payload:e}}(t)),D(t.length-1," rows"),X(t.length-1," nowrap"),R(t.length-1," flex-start"),J(t.length-1," stretch"),Q(t.length-1," stretch"),W(t.length-1," stretch"),c(Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},t.length-1,!0))),L(t.length-1,G[t.length-1]?G[t.length-1].length:1))},L=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=G,a=[],c=0;c<t;c++)a[c]=c+1;n[e]=a,n.change=G.change+1,t>0&&r(A(n))},D=function(e,t){var n=Object(u.a)(Object(u.a)({},o),{},Object(d.a)({},e,t));r(function(e){return{type:f,payload:e}}(n))},X=function(e,t){var n=Object(u.a)(Object(u.a)({},b),{},Object(d.a)({},e,t));r({type:m,payload:n})},R=function(e,t){var n=Object(u.a)(Object(u.a)({},w),{},Object(d.a)({},e,t));r(function(e){return{type:v,payload:e}}(n))},J=function(e,t){var n=Object(u.a)(Object(u.a)({},I),{},Object(d.a)({},e,t));r(function(e){return{type:g,payload:e}}(n))},Q=function(e,t){var n=Object(u.a)(Object(u.a)({},F),{},Object(d.a)({},e,t));r(function(e){return{type:N,payload:e}}(n))},W=function(e,t){var n=Object(u.a)(Object(u.a)({},_),{},Object(d.a)({},e,t));r(function(e){return{type:y,payload:e}}(n))};return Object(a.useEffect)((function(){for(var e="",t=0;t<i.length;t++){for(var n="",a=0;a<G[t].length;a++)n+="    <div class='item'>\n"+"        item-".concat(+a+1,"\n")+"    </div>\n";e+="<div class='container-".concat(t+1," ").concat(o[t],"'>\n")+"   container-".concat(+t+1,"\n")+n+"</div>",t!==i.length-1&&(e+="\n")}r({type:C,payload:e});for(var c="",l=0;l<i.length;l++)c+=".container-".concat(l+1," {\n")+"   display : flex;\n"+"   flex-direction: ".concat(o[l],";\n")+"   flex-wrap: ".concat(b[l],";\n")+"   justify-content: ".concat(w[l],";\n")+"   align-items: ".concat(I[l],";\n")+"   align-content: ".concat(F[l],";\n")+"}\n";r(function(e){return{type:E,payload:e}}(c))}),[i.length,i,o,b,w,I,F,_,G,S,T,r,G.change]),Object(j.jsxs)("aside",{className:"p-2 bg-secondary text-white",children:[Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{className:"form-label",children:"Quantity Of Containers"}),Object(j.jsx)("input",{type:"number",className:"form-control mb-2 ",defaultValue:1,onInput:function(e){return k(e.target.value)}}),i.map((function(e,t){return Object(j.jsxs)("div",{className:"border border-dark p-2",children:["Container-",t+1,Object(j.jsx)("br",{}),Object(j.jsx)("label",{className:"form-label",children:"Quantity Of Items"}),Object(j.jsx)("input",{type:"number",className:"form-control mb-2",defaultValue:G[t].length,onInput:function(e){return L(t,e.target.value)}}),Object(j.jsx)("button",{className:"btn btn-dark",type:"button",onClick:function(){return function(e){c(Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},e,!n[e])))}(t)},children:"Flex Properties"}),Object(j.jsxs)("div",{id:"properties"+(t+1),className:n[t]?"hidden":"shown",children:[Object(j.jsx)("label",{className:"form-label",children:"Direction"}),Object(j.jsxs)("select",{className:"select w-100 p-2 rounded","aria-label":"Default select example",onChange:function(e){return D(t,e.target.value)},name:"direction",children:[Object(j.jsx)("option",{value:" rows",children:"rows"}),Object(j.jsx)("option",{value:" row-reverse",children:"row-reverse"}),Object(j.jsx)("option",{value:" column",children:"column"}),Object(j.jsx)("option",{value:" column-reverse",children:"column-reverse"})]}),Object(j.jsx)("label",{className:" form-label",children:"Wrap"}),Object(j.jsxs)("select",{className:" select w-100 p-2 rounded","aria-label":"Default select example",onChange:function(e){return X(t,e.target.value)},name:"wrap",children:[Object(j.jsx)("option",{value:" nowrap",children:"nowrap"}),Object(j.jsx)("option",{value:" wrap",children:"wrap"}),Object(j.jsx)("option",{value:" wrap-reverse",children:"wrap-reverse"})]}),Object(j.jsx)("label",{className:" form-label",children:"Justify-Content"}),Object(j.jsxs)("select",{className:" select w-100 p-2 rounded","aria-label":"Default select example",onChange:function(e){return R(t,e.target.value)},name:"justify-content",children:[Object(j.jsx)("option",{value:" jc-flex-start",children:"flex-start"}),Object(j.jsx)("option",{value:" jc-flex-end",children:"flex-end"}),Object(j.jsx)("option",{value:" jc-center ",children:"center"}),Object(j.jsx)("option",{value:" jc-space-between",children:"space-between"}),Object(j.jsx)("option",{value:" jc-space-around",children:"space-around"}),Object(j.jsx)("option",{value:" jc-space-evenly",children:"space-evenly"})]}),Object(j.jsx)("label",{className:"form-label",children:"Align-Items"}),Object(j.jsxs)("select",{className:"select w-100 p-2 rounded","aria-label":"Default select example",onChange:function(e){return J(t,e.target.value)},name:"align-items",children:[Object(j.jsx)("option",{value:" ai-stretch",children:"stretch"}),Object(j.jsx)("option",{value:" ai-flex-start",children:"flex-start"}),Object(j.jsx)("option",{value:" ai-flex-end",children:"flex-end"}),Object(j.jsx)("option",{value:" ai-center ",children:"center"}),Object(j.jsx)("option",{value:" ai-baseline",children:"baseline"})]}),Object(j.jsx)("label",{className:"form-label",children:"Align-Content"}),Object(j.jsxs)("select",{className:"select w-100 p-2 rounded","aria-label":"Default select example",onChange:function(e){return Q(t,e.target.value)},name:"align-items",children:[Object(j.jsx)("option",{value:" ac-stretch",children:"stretch"}),Object(j.jsx)("option",{value:" ac-flex-end",children:"flex-end"}),Object(j.jsx)("option",{value:" ac-center",children:"center"}),Object(j.jsx)("option",{value:" ac-space-between",children:"space-between"}),Object(j.jsx)("option",{value:" ac-space-around",children:"space-around"}),Object(j.jsx)("option",{value:" ac-flex-start",children:"flex-start"})]}),Object(j.jsx)("label",{className:"form-label",children:"Align-Self"}),Object(j.jsxs)("select",{className:"select w-100 p-2 rounded","aria-label":"Default select example",onChange:function(e){return W(t,e.target.value)},name:"align-items",children:[Object(j.jsx)("option",{value:" as-stretch",children:"stretch"}),Object(j.jsx)("option",{value:" as-auto ",children:"auto"}),Object(j.jsx)("option",{value:" as-flex-start",children:"flex-start"}),Object(j.jsx)("option",{value:" as-flex-end",children:"flex-end"}),Object(j.jsx)("option",{value:" as-center",children:"center"}),Object(j.jsx)("option",{value:" as-baseline",children:"baseline"})]})]})]},e)}))]}),S&&Object(j.jsxs)(j.Fragment,{children:[" HTML",Object(j.jsx)("div",{className:"bg-light text-dark",children:Object(j.jsx)(h.a,{language:"htmlbars",style:p.a,children:S})}),"CSS",Object(j.jsx)("div",{className:"bg-light text-dark",children:Object(j.jsx)(h.a,{language:"css",style:p.a,children:T})})]})]})},F=function(){var e=Object(s.c)((function(e){return e.flexGen})),t=e.containersDirection,n=e.containersQuantity,a=e.containersWrap,c=e.containersJC,r=e.containersAI,l=e.containersAC,i=e.containersAS,o=e.items,b=Object.values(n).map((function(e,n){return Object(j.jsxs)("div",{className:"container".concat(t[n]+a[n]+c[n]+r[n]+l[n]+i[n]," bg-dark text-white border border-secondary rounded-1 p-2"),children:["Container-",n+1,Object.values(o[n]).map((function(e,t){return Object(j.jsxs)("div",{className:"item m-1 bg-secondary border border-secondary rounded-1",children:["Item-",t+1]},e)}))]},e)}));return Object(j.jsx)("div",{className:"pt-3 w-100",children:b})},_=function(){return Object(j.jsx)("footer",{className:"d-flex bg-dark text-white d-flex align-items-center justify-content-center",children:Object(j.jsx)("span",{children:"Code and design by Yaroslav Shelekhan"})})},G=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"cont w-auto m-0 p-0",children:[Object(j.jsx)(I,{}),Object(j.jsx)(F,{})]}),Object(j.jsx)(_,{})]})};var S=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/flexgen",children:Object(j.jsx)(G,{})}),Object(j.jsx)(o.a,{path:"/",children:Object(j.jsx)(G,{})})]})})})},T=n(22),k={containersQuantity:[1],containersDirection:{0:" rows"},containersWrap:{0:" nowrap"},containersJC:{0:" flex-start"},containersAI:{0:" stretch"},containersAC:{0:" stretch"},containersAS:{0:" stretch"},items:{0:[1],change:0},html:"",css:""},L=Object(T.a)({flexGen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)(Object(u.a)({},e),{},{containersQuantity:t.payload});case f:return Object(u.a)(Object(u.a)({},e),{},{containersDirection:t.payload});case m:return Object(u.a)(Object(u.a)({},e),{},{containersWrap:t.payload});case v:return Object(u.a)(Object(u.a)({},e),{},{containersJC:t.payload});case g:return Object(u.a)(Object(u.a)({},e),{},{containersAI:t.payload});case N:return Object(u.a)(Object(u.a)({},e),{},{containersAC:t.payload});case y:return Object(u.a)(Object(u.a)({},e),{},{containersAS:t.payload});case w:return Object(u.a)(Object(u.a)({},e),{},{items:t.payload});case C:return Object(u.a)(Object(u.a)({},e),{},{html:t.payload});case E:return Object(u.a)(Object(u.a)({},e),{},{css:t.payload});default:return e}}}),D=Object(T.b)(L,{}),X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,266)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)}))};l.a.render(Object(j.jsx)(s.a,{store:D,children:Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})})}),document.getElementById("root")),X()},38:function(e,t,n){},40:function(e,t,n){}},[[261,1,2]]]);
//# sourceMappingURL=main.73f41f47.chunk.js.map