"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[4],{270:function(e,a,t){var n=t(9439),r=t(2791);a.Z=function(e){var a=(0,r.useState)(""),t=(0,n.Z)(a,2),s=t[0],i=t[1],l=(0,r.useState)(!1),o=(0,n.Z)(l,2),c=o[0],u=o[1],d=e(s);return{value:s,isValid:d,hasError:!d&&c,blurHandler:function(){u(!0)},valueChangeHandler:function(e){i(e.target.value)},reset:function(){i(""),u(!1)}}}},4:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var n=t(3264),r=t(9439),s=t(2791),i=t(270),l=t(4644),o={_origin:"https://api.emailjs.com"},c=function(e,a,t){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!a)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},u=t(3144),d=t(5671),m=(0,u.Z)((function e(a){(0,d.Z)(this,e),this.status=a?a.status:0,this.text=a?a.responseText:"Network Error"})),h=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,r){var s=new XMLHttpRequest;s.addEventListener("load",(function(e){var a=e.target,t=new m(a);200===t.status||"OK"===t.text?n(t):r(t)})),s.addEventListener("error",(function(e){var a=e.target;r(new m(a))})),s.open("POST",o._origin+e,!0),Object.keys(t).forEach((function(e){s.setRequestHeader(e,t[e])})),s.send(a)}))},f=function(e,a,t,n){var r=n||o._userID,s=function(e){var a;if(!(a="string"===typeof e?document.querySelector(e):e)||"FORM"!==a.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return a}(t);c(r,e,a);var i=new FormData(s);return i.append("lib_version","3.10.0"),i.append("service_id",e),i.append("template_id",a),i.append("user_id",r),h("/api/v1.0/email/send-form",i)},v=t(184),p=function(){var e=(0,s.useRef)(),a=(0,s.useState)(!1),t=(0,r.Z)(a,2),o=t[0],c=t[1],u=(0,s.useState)(!1),d=(0,r.Z)(u,2),m=d[0],h=d[1],p=(0,s.useState)(),b=(0,r.Z)(p,2),_=b[0],x=b[1],Z=(0,i.Z)((function(e){return""!==e.trim()})),g=Z.value,j=Z.isValid,w=Z.hasError,N=Z.valueChangeHandler,y=Z.blurHandler,E=Z.reset,k=(0,i.Z)((function(e){return e.includes("@")})),H=k.value,C=k.isValid,S=k.hasError,T=k.valueChangeHandler,M=k.blurHandler,P=k.reset,R=(0,i.Z)((function(e){return""!==e.trim()})),V=R.value,q=R.isValid,D=R.hasError,B=R.valueChangeHandler,I=R.blurHandler,L=R.reset,O={name:w?l.Z.invalid:"",email:S?l.Z.invalid:"",message:D?l.Z.invalid:""};return(0,v.jsxs)(v.Fragment,{children:[o&&(0,v.jsx)("p",{className:n.Z.subtitle,children:"Sent, we will get back to you shortly"}),m&&(0,v.jsx)("p",{className:n.Z.error,children:"Error"}),_&&(0,v.jsx)("p",{className:n.Z.error,children:_}),(0,v.jsx)("div",{className:l.Z.wrap,children:(0,v.jsxs)("form",{className:l.Z.contact,onSubmit:function(a){return a.preventDefault(),j?C?q?void(j&&C&&q&&f("service_iff9mux","template_lszstvs",e.current,"PyPxMRbgnyMI7gkRQ").then((function(e){console.log(e),c(!0),E(),P(),L()})).catch((function(e){h(!0),console.log(e)}))):x("Please enter a valid message"):x("Please enter a valid email"):x("Please enter a valid name")},ref:e,children:[(0,v.jsx)("label",{className:l.Z.label,children:"Name"}),(0,v.jsx)("input",{className:O.name,type:"text",onChange:N,onBlur:y,value:g,name:"name"}),(0,v.jsx)("label",{className:l.Z.label,children:"Email"}),(0,v.jsx)("input",{className:O.email,type:"text",onChange:T,onBlur:M,value:H,name:"email"}),(0,v.jsx)("label",{className:l.Z.label,children:"Message"}),(0,v.jsx)("textarea",{className:O.message,onChange:B,onBlur:I,value:V,name:"message"}),(0,v.jsx)("div",{className:l.Z.wrap,children:(0,v.jsx)("button",{className:l.Z.submit,type:"submit",children:"Submit"})})]})})]})},b=function(){return(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{className:n.Z.title,children:"Contact"}),(0,v.jsx)(p,{})]})}},4644:function(e,a){a.Z={contact:"contact-form_contact__e1TKj",wrap:"contact-form_wrap__7XlKk",invalid:"contact-form_invalid__EycRU",label:"contact-form_label__AksD3",submit:"contact-form_submit__B9Q05",hover:"contact-form_hover__EZvMx"}}}]);
//# sourceMappingURL=4.37561c3c.chunk.js.map