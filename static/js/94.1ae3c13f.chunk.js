"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[94],{7094:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var s=n(9439),a=n(2791),c=n(9434),r=n(7689),i="checkout-item_item__ds-f5",o="checkout-item_title__Q75xj",l="checkout-item_price__Q4+Ir",u="checkout-item_quantity__R6c8N",h=n(184),d=function(e){var t=e.title,n=e.price,s=e.quantity;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:i,children:[(0,h.jsx)("p",{className:o,children:t}),s>1&&(0,h.jsxs)("p",{className:u,children:["x",s]}),n?(0,h.jsxs)("p",{className:l,children:["$",n]}):(0,h.jsx)("p",{className:l,children:"Price"})]})})},m=n(100),p=n(2845),f=n(7558),g=n(3264),x="checkout_wrap__qFQpx",j="checkout_form__8VUDs",_="checkout_section__IudwW",k="checkout_subtitle__74zhl",N="checkout_total__8FLne",S="checkout_total__text__LDVRi",v="checkout_summary__I3BxR",y="checkout_list-wrap__f35ZQ",I="checkout_box-wrap__HStVi",P="checkout_input__nBZ9u",C=(n(4644),function(){var e=(0,c.v9)((function(e){return e.cart})),t=(0,a.useState)(!1),n=(0,s.Z)(t,2),i=n[0],o=n[1],l=(0,a.useState)(),u=(0,s.Z)(l,2),C=u[0],Z=u[1],b=(0,a.useState)(!1),w=(0,s.Z)(b,2),A=w[0],T=w[1],O=(0,a.useState)(e.totalPrice),R=(0,s.Z)(O,2),F=R[0],q=R[1],B=e.items.findIndex((function(e){return"t1"===e.id})),D=(0,r.s0)(),J=(0,c.I0)(),U=(0,a.useRef)(),Q=(0,a.useRef)(),z=(0,a.useRef)(),E=(0,a.useRef)(),V=function(){var t="";-1!==B&&(t=""!==Q.current.value.trim()?U.current.value+" Apt #: "+Q.current.value:U.current.value);var n=!1,s="https://dada-chinese-rest-api.herokuapp.com/shop/new-order",a="https://dada-chinese-rest-api.herokuapp.com/shop/new-order-guest",c=null;localStorage.getItem("token")||(c=E.current.value);var r=JSON.stringify({items:e.items,totalPrice:e.totalPrice}),i=JSON.stringify({items:e.items,totalPrice:e.totalPrice,address:t,name:localStorage.getItem("token")?"":z.current.value,email:localStorage.getItem("token")?"":E.current.value}),o={"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},l={"Content-Type":"application/json"};fetch(null!==localStorage.getItem("token")?s:a,{method:"PUT",body:null!==localStorage.getItem("token")?r:i,headers:null!==localStorage.getItem("token")?o:l}).then((function(e){return e.ok||(n=!0),e.json()})).then((function(t){n?Z(t.error):(s="https://dada-chinese-rest-api.herokuapp.com/shop/order-email",a="https://dada-chinese-rest-api.herokuapp.com/shop/order-email-guest",r=JSON.stringify({cartItems:e.items}),i=JSON.stringify({cartItems:e.items,email:c}),console.log(t.message),fetch(null!==localStorage.getItem("token")?s:a,{method:"POST",body:null!==localStorage.getItem("token")?r:i,headers:null!==localStorage.getItem("token")?o:l}).then().catch())})).then((function(){A&&fetch("https://dada-chinese-rest-api.herokuapp.com/shop/use-credit",{method:"POST",body:JSON.stringify({creditUsed:e.totalPrice-e.creditPrice}),headers:{"Content-Type":"Application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){console.log(e),D("/dada-chinese/order-confirmation"),J(f.U.resetCart({guest:null===localStorage.getItem("token")}))})).catch((function(e){Z(e.message),console.log(e)}))})).catch((function(e){Z(e.message),console.log(e)}))},L=function(e){if(e.preventDefault(),-1!==B&&""===U.current.value.trim()||!localStorage.getItem("token")&&(""===z.current.value.trim()||""===E.current.value.trim()))return Z("Please fill out the entirety of the form");o((function(e){return!e}))};return(0,a.useEffect)((function(){q(A?e.creditPrice:e.totalPrice)}),[A]),(0,a.useEffect)((function(){q(e.totalPrice)}),[e.totalPrice]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{className:g.Z.title,children:"Checkout"}),(0,h.jsx)("div",{className:x,children:(0,h.jsxs)("div",{className:I,children:[(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("p",{className:v,children:"Summary"}),e.items.map((function(e){return(0,h.jsx)(d,{title:e.title,price:e.price,quantity:e.quantity},e.title)})),(0,h.jsxs)("div",{className:N,children:[(0,h.jsx)("p",{className:S,children:"Total:"}),(0,h.jsxs)("p",{className:S,children:["$",F]})]})]}),(0,h.jsxs)("div",{className:_,children:[C&&(0,h.jsx)("p",{className:g.Z.error,children:C}),(0,h.jsxs)("form",{className:j,onSubmit:L,children:[!localStorage.getItem("token")&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{className:k,children:"Basic Info"}),(0,h.jsxs)("fieldset",{children:[(0,h.jsx)("legend",{children:"Name"}),(0,h.jsx)("input",{name:"name",className:P,type:"text",ref:z})]}),(0,h.jsxs)("fieldset",{children:[(0,h.jsx)("legend",{children:"Email"}),(0,h.jsx)("input",{name:"email",className:P,type:"text",ref:E})]})]}),-1!==B&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{className:k,children:"Shipping Info"}),(0,h.jsxs)("fieldset",{children:[(0,h.jsx)("legend",{children:"Address"}),(0,h.jsx)("input",{name:"address",className:P,type:"text",ref:U})]}),(0,h.jsxs)("fieldset",{children:[(0,h.jsx)("legend",{children:"Apt # (optional)"}),(0,h.jsx)("input",{type:"text",className:P,ref:Q})]})]}),localStorage.getItem("token")&&-1===B&&(0,h.jsx)("p",{className:g.Z.title,children:"Thank you for choosing Dada Chinese!"}),(0,h.jsxs)("button",{onClick:function(){T((function(e){return!e}))},children:[A?"Don't u":"U","se Credit"]}),(0,h.jsxs)("div",{className:x,children:[i?0!==F&&(0,h.jsx)(m.Z,{onApprove:V,totalAmount:F}):(0,h.jsx)(p.Z,{onClick:L,children:"Pay"}),0===F&&(0,h.jsx)(p.Z,{onClick:V,children:"Continue"})]})]})]})]})})]})})}}]);
//# sourceMappingURL=94.1ae3c13f.chunk.js.map