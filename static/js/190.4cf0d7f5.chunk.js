"use strict";(self.webpackChunkdada_chinese=self.webpackChunkdada_chinese||[]).push([[190],{6721:function(e,t,n){var s=n(9439),i=n(2791),r=n(7689),o=n(1087),a=n(8808),l=n(3264),c=n(184);t.Z=function(e){var t=(0,i.useState)(),n=(0,s.Z)(t,2),d=n[0],u=n[1],h=(0,i.useState)(),p=(0,s.Z)(h,2),_=(p[0],p[1],(0,r.s0)()),f=e.date.split(" ");return(0,c.jsxs)(c.Fragment,{children:[d&&(0,c.jsx)("p",{children:d}),(0,c.jsx)(o.rU,{className:a.Z.link,to:e.admin?"/edit-post/".concat(e.id):"/blog-post/".concat(e.id),children:(0,c.jsxs)("div",{className:a.Z.item,children:[(0,c.jsx)("div",{className:a.Z.left,children:(0,c.jsx)("img",{src:e.imageWebContentLink,alt:"blog"})}),(0,c.jsxs)("div",{className:a.Z.right,children:[(0,c.jsx)("div",{className:a.Z.date,children:(0,c.jsxs)("p",{children:[f[1]," ",f[2]," ",f[3]]})}),(0,c.jsx)("div",{children:(0,c.jsx)("p",{className:l.Z.subtitle,children:e.title})})]})]})}),e.admin&&(0,c.jsx)("div",{className:a.Z.delete,children:(0,c.jsx)("button",{className:a.Z["delete-button"],onClick:function(){var t=prompt("Are you sure? (yes / no)");"no"!==t&&t&&fetch("https://dada-chinese-rest-api.herokuapp.com/delete-post",{method:"DELETE",body:JSON.stringify({postId:e.id}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){if(e.ok)return e.json()})).then((function(e){_("/blog")})).catch((function(e){console.log(e),u(e.message)}))},children:"Delete Post"})})]})}},9190:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},loader:function(){return h}});var s=n(4165),i=n(5861),r=n(3264),o=n(8808),a=n(6721),l=n(184),c=function(e){var t=e.posts;return(0,l.jsx)("div",{className:o.Z.root,children:(0,l.jsx)("div",{className:o.Z.list,children:t&&t.map((function(e){return(0,l.jsx)(a.Z,{id:e._id,title:e.title,imageWebContentLink:e.imageWebContentLinks[0],content:e.content,date:e.date},e._id)}))})})},d=n(7689),u=function(){var e=(0,d.f_)().reverse();return(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:r.Z.title,children:"Blog"}),(0,l.jsx)(c,{posts:e})]})},h=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dada-chinese-rest-api.herokuapp.com/posts");case 3:if((t=e.sent).ok){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n.posts);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},8808:function(e,t){t.Z={root:"blog_root__lhRxv",list:"blog_list__vIyxN",item:"blog_item__JgxRn",link:"blog_link__5oouc",left:"blog_left__KzQ9I",right:"blog_right__3dNyp",date:"blog_date__xvgY3",delete:"blog_delete__tkaqD","delete-button":"blog_delete-button__QQuR2",auth:"blog_auth__VuVVx"}}}]);
//# sourceMappingURL=190.4cf0d7f5.chunk.js.map