"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[134],{4134:function(e,n,t){t.r(n);var a=t(9439),s=t(2791),r=t(7689),i=t(2845),l=t(7172),o=t(2352),c=t(3264),d=t(184);n.default=function(){var e=(0,s.useState)(),n=(0,a.Z)(e,2),t=n[0],u=n[1],p=(0,s.useState)(),f=(0,a.Z)(p,2),_=f[0],h=f[1],m=(0,r.s0)(),g=(0,s.useRef)(),x=(0,s.useRef)(),b=(0,s.useRef)();return console.log(t),(0,d.jsxs)("div",{className:l.Z.root,children:[(0,d.jsx)("p",{className:c.Z.title,children:"New Blog Entry"}),_&&(0,d.jsx)("p",{className:c.Z.error,children:_}),(0,d.jsxs)("form",{className:l.Z.form,onSubmit:function(e){e.preventDefault();var n=new FormData;n.append("title",g.current.value),n.append("content",x.current.value),n.append("image",t),n.append("videoUrl",b.current.value),n.append("date",(new Date).toDateString());var a=!1;fetch("https://dada-chinese-rest-api.herokuapp.com/posts",{method:"POST",body:n,headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.ok||(a=!0),e.json()})).then((function(e){a?h(e.error):(console.log(e.message),m("/dada-chinese/blog"))})).catch((function(e){return console.log(e)}))},children:[(0,d.jsxs)("div",{className:o.Z.block,children:[(0,d.jsx)("label",{children:"Title"}),(0,d.jsx)("input",{type:"text",ref:g})]}),(0,d.jsxs)("div",{className:o.Z.block,children:[(0,d.jsx)("label",{children:"Image"}),(0,d.jsx)("input",{type:"file",onChange:function(e){u(e.target.files[0])}.bind(undefined)})]}),(0,d.jsxs)("div",{className:o.Z.block,children:[(0,d.jsx)("label",{children:"Video Url"}),(0,d.jsx)("input",{type:"text",ref:b})]}),(0,d.jsxs)("div",{className:o.Z.block,children:[(0,d.jsx)("label",{children:"Content"}),(0,d.jsx)("textarea",{className:l.Z.textarea,ref:x})]}),(0,d.jsx)("div",{className:l.Z.center,children:(0,d.jsx)(i.Z,{type:"submit",children:"Add blog"})})]})]})}},2352:function(e,n){n.Z={wrap:"sign-in-form_wrap__uyA1X",block:"sign-in-form_block__sFmMD",invalid:"sign-in-form_invalid__Fj2iK",inputs:"sign-in-form_inputs__MVwqR","input-field":"sign-in-form_input-field__tLrji"}},7172:function(e,n){n.Z={form:"new-blog_form__igf5g",wrap:"new-blog_wrap__8K6mA",root:"new-blog_root__zNqEj",center:"new-blog_center__2s6Ox",textarea:"new-blog_textarea__URmiA"}}}]);
//# sourceMappingURL=134.cbddf311.chunk.js.map