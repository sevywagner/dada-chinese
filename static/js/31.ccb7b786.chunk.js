"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[31],{3601:function(e,r,n){n.d(r,{Z:function(){return c}});var t={item:"order-item_item__5sdE1"},s=n(1087),a=n(184),c=function(e){var r=e.order;return(0,a.jsx)("div",{className:t.item,children:(0,a.jsxs)(s.rU,{to:"/orders/".concat(r._id),children:[(0,a.jsx)("p",{className:t.name,children:r.name}),(0,a.jsxs)("p",{children:["$",r.totalPrice]}),(0,a.jsx)("p",{children:r.date})]})})}},1031:function(e,r,n){n.r(r),n.d(r,{loader:function(){return d}});var t=n(4165),s=n(5861),a=n(7689),c=n(3601),o=n(3264),i=n(184),d=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dada-chinese-rest-api.herokuapp.com/shop/orders",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("response not ok");case 6:return e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",n.orders);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();r.default=function(){var e=(0,a.f_)();return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:o.Z.title,children:"Orders"}),(0,i.jsx)("div",{className:o.Z.wrap,children:e.map((function(e){return(0,i.jsx)(c.Z,{order:e})}))})]})}}}]);
//# sourceMappingURL=31.ccb7b786.chunk.js.map