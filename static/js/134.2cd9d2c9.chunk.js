"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[134],{4134:function(e,n,t){t.r(n);var a=t(9439),i=t(2791),s=t(7689),r=t(2845),l=t(7172),o=t(2352),c=t(3264),d=t(184);n.default=function(){var e=(0,i.useState)(),n=(0,a.Z)(e,2),t=n[0],u=n[1],f=(0,s.s0)(),_=(0,i.useRef)(),p=(0,i.useRef)();(0,i.useRef)();return console.log(t),(0,d.jsxs)("div",{className:l.Z.root,children:[(0,d.jsx)("p",{className:c.Z.title,children:"New Blog Entry"}),(0,d.jsxs)("form",{className:l.Z.form,onSubmit:function(e){e.preventDefault();var n=new FormData;n.append("title",_.current.value),n.append("content",p.current.value),n.append("image",t),n.append("date",(new Date).toDateString()),fetch("https://dada-chinese-rest-api.herokuapp.com/posts",{method:"POST",body:n,headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e),f("/dada-chinese/blog")})).catch((function(e){return console.log(e)}))},children:[(0,d.jsxs)("div",{className:o.Z.block,children:[(0,d.jsx)("label",{children:"Title"}),(0,d.jsx)("input",{type:"text",ref:_})]}),(0,d.jsxs)("div",{className:o.Z.block,children:[(0,d.jsx)("label",{children:"Image"}),(0,d.jsx)("input",{type:"file",onChange:function(e){u(e.target.files[0])}.bind(undefined)})]}),(0,d.jsxs)("div",{className:o.Z.block,children:[(0,d.jsx)("label",{children:"Content"}),(0,d.jsx)("textarea",{className:l.Z.textarea,ref:p})]}),(0,d.jsx)("div",{className:l.Z.center,children:(0,d.jsx)(r.Z,{type:"submit",children:"Add blog"})})]})]})}},2352:function(e,n){n.Z={wrap:"sign-in-form_wrap__uyA1X",block:"sign-in-form_block__sFmMD",invalid:"sign-in-form_invalid__Fj2iK",inputs:"sign-in-form_inputs__MVwqR","input-field":"sign-in-form_input-field__tLrji"}},7172:function(e,n){n.Z={form:"new-blog_form__igf5g",wrap:"new-blog_wrap__8K6mA",root:"new-blog_root__zNqEj",center:"new-blog_center__2s6Ox",textarea:"new-blog_textarea__URmiA"}}}]);
//# sourceMappingURL=134.2cd9d2c9.chunk.js.map