"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[275],{9275:function(e,r,n){n.r(r),n.d(r,{default:function(){return l},loader:function(){return u}});var t=n(4165),s=n(5861),a=n(7689),c={item:"order-item_item__5sdE1"},i=n(184),d=function(e){var r=e.order;return(0,i.jsxs)("div",{className:c.item,children:[(0,i.jsx)("p",{className:c.name,children:r.name}),(0,i.jsx)("p",{children:r.address}),(0,i.jsx)("p",{children:r.userEmail}),(0,i.jsx)("p",{children:"Order:"}),r.items.map((function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:e.title}),(0,i.jsxs)("p",{children:["Quantity: ",e.quantity]})]})})),(0,i.jsxs)("p",{children:["Total Price: ",r.totalPrice]}),(0,i.jsx)("p",{children:r.date})]})},o=n(3264),u=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dada-chinese-rest-api.herokuapp.com/shop/orders",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("response not ok");case 6:return e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",n.orders);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.f_)();return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:o.Z.title,children:"Orders"}),(0,i.jsx)("div",{className:o.Z.wrap,children:e.map((function(e){return(0,i.jsx)(d,{order:e})}))})]})}}}]);
//# sourceMappingURL=275.b9e6eaf4.chunk.js.map