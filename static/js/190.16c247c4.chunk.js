"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[190],{6721:function(e,t,n){var s=n(9439),o=n(2791),r=n(7689),a=n(1087),i=n(8808),l=n(3264),c=n(184);t.Z=function(e){var t=(0,o.useState)(),n=(0,s.Z)(t,2),d=n[0],u=n[1],h=(0,r.s0)(),p=e.date.split(" ");return(0,c.jsxs)(c.Fragment,{children:[d&&(0,c.jsx)("p",{children:d}),(0,c.jsx)(a.rU,{className:i.Z.link,to:e.admin?"/edit-post/".concat(e.id):"/blog-post/".concat(e.id),children:(0,c.jsxs)("div",{className:i.Z.item,children:[(0,c.jsx)("div",{className:i.Z.left,children:(0,c.jsx)("img",{src:"https://drive.google.com/thumbnail?id=0B6wwyazyzml-OGQ3VUo0Z2thdmc&sz=w1000",alt:"Page Image"})}),(0,c.jsxs)("div",{className:i.Z.right,children:[(0,c.jsx)("div",{className:i.Z.date,children:(0,c.jsxs)("p",{children:[p[1]," ",p[2]," ",p[3]]})}),(0,c.jsx)("div",{children:(0,c.jsx)("p",{className:l.Z.subtitle,children:e.title})})]})]})}),e.admin&&(0,c.jsx)("div",{className:i.Z.delete,children:(0,c.jsx)("button",{className:i.Z["delete-button"],onClick:function(){var t=prompt("Are you sure? (yes / no)");"no"!==t&&t&&fetch("https://dada-chinese-rest-api.herokuapp.com/delete-post",{method:"DELETE",body:JSON.stringify({postId:e.id}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){if(e.ok)return e.json()})).then((function(e){h("/blog")})).catch((function(e){console.log(e),u(e.message)}))},children:"Delete Post"})})]})}},9190:function(e,t,n){n.r(t),n.d(t,{default:function(){return l},loader:function(){return c}});var s=n(4165),o=n(5861),r=n(3264),a=(n(8808),n(6721),n(184)),i=n(7689),l=function(){var e=(0,i.f_)().reverse();return console.log(e),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:r.Z.title,children:"Blog"}),(0,a.jsx)("p",{className:r.Z.subtitle,children:"Blog coming soon!"})]})},c=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dada-chinese-rest-api.herokuapp.com/posts");case 3:if((t=e.sent).ok){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n.posts);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},8808:function(e,t){t.Z={root:"blog_root__lhRxv",list:"blog_list__vIyxN",item:"blog_item__JgxRn",link:"blog_link__5oouc",left:"blog_left__KzQ9I",right:"blog_right__3dNyp",date:"blog_date__xvgY3",delete:"blog_delete__tkaqD","delete-button":"blog_delete-button__QQuR2",auth:"blog_auth__VuVVx"}}}]);
//# sourceMappingURL=190.16c247c4.chunk.js.map