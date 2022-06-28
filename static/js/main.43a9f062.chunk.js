(this["webpackJsonpreact-redux-typescript-app"]=this["webpackJsonpreact-redux-typescript-app"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var s,r=a(0),n=a.n(r),i=a(7),c=a.n(i),l=(a(25),a(26),a(27),a(8)),d=a(2),o=function(e){var t=e.item;return Object(d.jsx)("li",{className:"posts-item-wrapper",children:Object(d.jsx)("div",{className:"posts-item",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"posts-item-heading",children:t.heading}),Object(d.jsx)("li",{className:"posts-item-subheading",children:t["sub-heading"]}),Object(d.jsx)("li",{className:"posts-item-summary",children:Object(d.jsx)("textarea",{readOnly:!0,value:t.summary})})]})})})},u=function(){var e=Object(l.c)((function(e){return e.form.formData})),t=e&&e.map((function(e,t){return Object(d.jsx)(o,{item:e},t)}));return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsx)("ul",{className:"posts",children:t})})},m=a(12),j=a(5),b=a(18),h=(a(32),a(15)),x=a.n(h);!function(e){e.SET_DATA="SET_DATA"}(s||(s={}));var g=function(){var e={heading:"","sub-heading":"",summary:""},t=Object(r.useState)(e),a=Object(b.a)(t,2),n=a[0],i=a[1],c=Object(r.useState)({}),o=Object(b.a)(c,2),u=o[0],h=o[1],g=Object(l.b)(),p=function(e){var t=document.querySelector("#heading"),a=document.querySelector("#sub-heading"),s=document.querySelector("#summary");t.value.length<1?t.style.outline="1px solid red":t.style.outline="1px solid rgba(60, 179, 113, 0.4)",a.value.length<1?a.style.outline="1px solid red":a.style.outline="1px solid rgba(60, 179, 113, 0.4)",s.value.length<1?s.style.outline="1px solid red":s.style.outline="1px solid rgba(60, 179, 113, 0.4)",i(Object(j.a)(Object(j.a)({},n),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(d.jsx)("div",{className:"form-wrapper",children:Object(d.jsx)("form",{className:"msform",autoComplete:"off",onSubmit:function(t){t.preventDefault(),function(){var e=document.querySelector("#heading"),t=document.querySelector("#sub-heading"),a=document.querySelector("#summary");n.heading?e.style.outline="1px solid rgba(0, 0, 0, 0.4)":e.style.outline="1px solid red",n["sub-heading"]?t.style.outline="1px solid rgba(0, 0, 0, 0.4)":t.style.outline="1px solid red",n.summary?a.style.outline="1px solid rgba(0, 0, 0, 0.4)":a.style.outline="1px solid red"}(),function(){var e,t={},a=!0;for(e in n)n[e]||(a=!1,t[e]="Please enter a valid ".concat(e));return h(a?{}:Object(j.a)({},t)),a}()&&(g({type:s.SET_DATA,payload:n}),setTimeout((function(){i(Object(j.a)({},e))}),500))},children:Object(d.jsxs)("fieldset",{className:"msform-fieldset",children:[Object(d.jsx)("h2",{children:"Create Post"}),Object(d.jsx)("h3",{children:"Fill all text fields to submit the form"}),Object(d.jsxs)("div",{className:"msform-fieldset-div",children:[Object(d.jsx)("label",{htmlFor:"heading",children:"Heading"}),Object(d.jsx)("input",{id:"heading",className:"msform-field",type:"text",name:"heading",value:n.heading,placeholder:"Heading",onChange:p}),u.heading&&!n.heading&&Object(d.jsx)(x.a,{className:"input-error-icon error-icon"}),u.heading&&!n.heading&&Object(d.jsx)("p",{className:"alert",children:u.heading})]}),Object(d.jsxs)("div",{className:"msform-fieldset-div",children:[Object(d.jsx)("label",{htmlFor:"sub-heading",children:"Sub-Heading"}),Object(d.jsx)("input",{id:"sub-heading",className:"msform-field",type:"text",name:"sub-heading",value:n["sub-heading"],placeholder:"Sub-Heading",onChange:p}),u["sub-heading"]&&!n["sub-heading"]&&Object(d.jsx)(x.a,{className:"input-error-icon error-icon"}),u["sub-heading"]&&!n["sub-heading"]&&Object(d.jsx)("p",{className:"alert",children:u["sub-heading"]})]}),Object(d.jsxs)("div",{className:"msform-fieldset-div",children:[Object(d.jsx)("label",{htmlFor:"summary",children:"Summary"}),Object(d.jsx)("textarea",{id:"summary",className:"msform-field",name:"summary",value:n.summary,placeholder:"Summary",onChange:p}),u.summary&&!n.summary&&Object(d.jsx)(x.a,{className:"textarea-error-icon error-icon"}),u.summary&&!n.summary&&Object(d.jsx)("p",{className:"alert",children:u.summary})]}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})})})};var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"gridContainer",children:[Object(d.jsx)("div",{className:"gridPosts",children:Object(d.jsx)(u,{})}),Object(d.jsx)("div",{className:"gridForm",children:Object(d.jsx)(g,{})})]})})},O=a(14),f=a(19),y={formData:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.SET_DATA:return Object(j.a)(Object(j.a)({},e),{},{formData:[].concat(Object(f.a)(e.formData),[t.payload])});default:return e}},N=Object(O.a)({form:v}),S=Object(O.b)(N);S.subscribe((function(){return console.log(S.getState())}));var A=S;c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(l.a,{store:A,children:Object(d.jsx)(p,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.43a9f062.chunk.js.map