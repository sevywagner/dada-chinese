"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[132],{3601:function(e,r,n){n.d(r,{Z:function(){return c}});var t={item:"order-item_item__5sdE1"},a=n(1087),s=n(184),c=function(e){var r=e.order;return(0,s.jsx)("div",{className:t.item,children:(0,s.jsxs)(a.rU,{to:"/orders/".concat(r._id),children:[(0,s.jsx)("p",{className:t.name,children:r.name}),(0,s.jsxs)("p",{children:["$",r.totalPrice]}),(0,s.jsx)("p",{children:r.date})]})})}},9132:function(e,r,n){n.r(r),n.d(r,{default:function(){return d},loader:function(){return i}});var t=n(4165),a=n(5861),s=n(7689),c=n(3601),o="user-orders_wrap__LQ0Fp",u=n(184),i=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dada-chinese-rest-api.herokuapp.com/shop/user-orders",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n.orders);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,s.f_)();return console.log(e),(0,u.jsx)("div",{className:o,children:e.map((function(e){return(0,u.jsx)(c.Z,{order:e},Math.random())}))})}}}]);
//# sourceMappingURL=132.3fbe99e0.chunk.js.map