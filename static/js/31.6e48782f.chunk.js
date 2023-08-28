"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[31],{3601:function(e,r,n){n.d(r,{Z:function(){return s}});var t={item:"order-item_item__5sdE1"},A=n(1087),a=n(184),s=function(e){var r=e.order;return(0,a.jsx)("div",{className:t.item,children:(0,a.jsxs)(A.rU,{to:"/orders/".concat(r._id),children:[(0,a.jsx)("p",{className:t.name,children:r.name}),(0,a.jsxs)("p",{children:["$",r.totalPrice]}),(0,a.jsx)("p",{children:r.date})]})})}},3816:function(e,r,n){n.d(r,{Z:function(){return i}});var t="paginator_root__Ye6Gw",A="paginator_control__wrap__uC6-S",a="paginator_control__Efl85",s=(n(3264),n(184)),i=function(e){var r=e.currentPage>1?(0,s.jsx)("button",{className:a,onClick:e.onPrevious,children:(0,s.jsx)("img",{src:n(5334)})}):(0,s.jsx)("div",{className:a}),i=e.currentPage<e.lastPage?(0,s.jsx)("button",{className:a,onClick:e.onNext,children:(0,s.jsx)("img",{src:n(6404)})}):(0,s.jsx)("div",{className:a});return(0,s.jsxs)("div",{className:t,children:[e.children,(0,s.jsxs)("div",{className:A,children:[r,(0,s.jsxs)("p",{children:[e.currentPage," / ",e.lastPage]}),i]})]})}},1031:function(e,r,n){n.r(r),n.d(r,{loader:function(){return p}});var t=n(4165),A=n(5861),a=n(9439),s=n(2791),i=n(7689),o=n(3601),c=n(3816),u=n(3264),d=n(184),p=function(){var e=(0,A.Z)((0,t.Z)().mark((function e(){var r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dada-chinese-rest-api.herokuapp.com/shop/orders",{method:"POST",body:JSON.stringify({pageNum:1}),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}});case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("response not ok");case 6:return e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();r.default=function(){var e=(0,i.f_)(),r=e.orders,n=e.maxPage,p=(0,s.useState)(1),g=(0,a.Z)(p,2),l=g[0],h=g[1],m=(0,s.useState)(r),f=(0,a.Z)(m,2),x=f[0],j=f[1],I=function(){var e=(0,A.Z)((0,t.Z)().mark((function e(){var r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dada-chinese-rest-api.herokuapp.com/shop/user-orders",{method:"POST",body:JSON.stringify({pageNum:l+1}),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}});case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,h((function(e){return e+1})),j(n.orders);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,A.Z)((0,t.Z)().mark((function e(){var r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dada-chinese-rest-api.herokuapp.com/shop/user-orders",{method:"POST",body:JSON.stringify({pageNum:l-1}),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}});case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,h((function(e){return e-1})),j(n.orders);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:u.Z.title,children:"Orders"}),(0,d.jsx)("div",{className:u.Z.wrap,children:(0,d.jsx)(c.Z,{currentPage:l,lastPage:n,onPrevious:v,onNext:I,children:(0,d.jsx)("div",{className:u.Z.wrap,children:x.map((function(e){return(0,d.jsx)(o.Z,{order:e},e._id)}))})})})]})}},5334:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QA/wD/AP+gvaeTAAABcklEQVR4nO3bIU4cARiG4Xd7gopieoMGyQlqS+pIajhEj4FvOFuvQEUVCBKaLKIhGZbRLMz/PMmIUb94v1m3BQAAAAAAAAAAAAAAAADwfuyqb4PusrCrflX76mrAXRaWEZ6e14hxrLss7KrrnkfYVzfVyQbvsrD2Be6rP9XpBu+yIP5g4g8m/mDiDyb+YOIPJv5g4g8m/mDiDyb+YOIPJv5g4g8m/mDiDyb+YOIPJv5g4g8m/mDiDyb+YOIPJv5g4g8m/mDiDyb+cD97GeGm+rLRu2/ShyPe/nzw/rf6Wv3e6N036ZgDOPSxOht0d7zv1UPPf4ofqh8bvcuKi17G+FddbvQuK4wAI8AIyAjICMgIyAjICMgIyAjICMgIyAjICMgIyAjICMgIyAjICMgIyAjICMgIyAjICMgIyAjICOj/X8EPY9xWJxu9y4rlF3lfnW/8LisuqrteP8Kx7rLi07C7AAAAAAAAAAAAAAAAAMA79gipbu0p+XTAIQAAAABJRU5ErkJggg=="},6404:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QA/wD/AP+gvaeTAAABRElEQVR4nO3bsU0DURRE0RHt4CqoAeQAKqABp+4bhAmwxEq8BAJ/tHOO5MDRC+6s7GQTAAAAAAAAAAAAAAAAAIDfuy+7y8Y5yXuSl5K7bJyTXK6fW8ZYdZeNQ5K3fIe4XL8fd3qXwWN+xrjFE7nqLgMjwAgwAmIExAiIERAjIEZAjIAYATECYgTECIgRECMgRkCMgBgBMQJiBMQIiBEQIyBGQIyAGAExAmIExAjI16vg0yviDzu9y2CK8brju6O7VYf/gY+yu2z4CSj2lPnP2PNO77IhfjHxi4lfTPxi4hcTv5j4xcQvJn4x8YuJX0z8YuIXE7+Y+MXELyZ+MfGLiV9M/GLiFxO/mPjFxC8mfjHxi4lfTPxi4hc7ZH5V+rjTuwxOWfMErrrL4JQ1EVbdZXBfdhcAAAAAAAAAAAAAAAAA4E8+AWA287Ni+PB/AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=31.6e48782f.chunk.js.map