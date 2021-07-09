(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(t,e,n){},24:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(19),s=n.n(a),i=(n(24),n(3)),o=n.n(i),u=n(4),l=n(6),d=n(5),j=n.n(d),p=n(0),b=function(t){var e=t.title,n=t.content,c=t.id,r=t.url,a=t.setIsUpdate,s=t.setIsEdit,i=t.setCurrentPost,l=function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.delete("".concat(r,"/").concat(e));case 3:a(!0),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"post",id:c,children:[Object(p.jsx)("h2",{children:e}),Object(p.jsx)("p",{children:n}),Object(p.jsx)("button",{id:"delete-btn",onClick:function(){return l(c)},children:"Delete"}),Object(p.jsx)("button",{id:"edit-btn",onClick:function(){return function(t){s(!0),i({_id:t,title:e,content:n})}(c)},children:"Edit"})]})},f=(n(18),function(t){var e=t.url,n=t.setIsUpdate,r=Object(c.useState)(""),a=Object(l.a)(r,2),s=a[0],i=a[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),f=b[0],h=b[1],O=function(){var t=Object(u.a)(o.a.mark((function t(c){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),s.trim()&&f.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,r={title:s.trim(),content:f.trim()},t.next=7,j.a.post(e,r);case 7:i(""),h(""),n(!0),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"form post-form",children:Object(p.jsxs)("form",{onSubmit:O,children:[Object(p.jsx)("input",{type:"text",id:"title",name:"title",placeholder:"Post title",value:s,onChange:function(t){i(t.target.value)}}),Object(p.jsx)("textarea",{id:"content",name:"content",placeholder:"Your content here...",value:f,onChange:function(t){h(t.target.value)}}),Object(p.jsx)("button",{type:"submit",children:"Add Post!"})]})})}),h=n(7),O=n(9),x=function(t){var e=t.setIsEdit,n=t.setIsUpdate,c=t.currentPost,r=t.setCurrentPost,a=t.url,s=c._id,i=c.title,l=c.content,d=function(t){r(Object(O.a)(Object(O.a)({},c),{},Object(h.a)({},t.target.id,t.target.value)))},b=function(){var t=Object(u.a)(o.a.mark((function t(c){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),""!==i&&""!==l){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,j.a.patch("".concat(a,"/").concat(s),{title:i,content:l});case 6:n(!0),e(!1),r(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.log(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"form edit-form",onSubmit:b,children:Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{type:"text",id:"title",name:"title",value:i,placeholder:"Post title",onChange:d}),Object(p.jsx)("textarea",{id:"content",name:"content",placeholder:"Your content here...",value:l,onChange:d}),Object(p.jsx)("button",{type:"submit",onClick:b,children:"Edit Post!"}),Object(p.jsx)("button",{id:"close-edit",onClick:function(){e(!1),r()},children:"Dismiss"})]})})};n(45);var v=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(!1),s=Object(l.a)(a,2),i=s[0],d=s[1],h=Object(c.useState)(!0),O=Object(l.a)(h,2),v=O[0],m=O[1],g=Object(c.useState)(),k=Object(l.a)(g,2),C=k[0],P=k[1],I="https://mern-app-stack-post.herokuapp.com";Object(c.useEffect)((function(){v&&(w(),m(!1))}),[v]);var w=function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get(I);case 3:e=t.sent,r(e.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Post Page"}),i?Object(p.jsx)(x,{setIsEdit:d,setIsUpdate:m,currentPost:C,setCurrentPost:P,url:I}):Object(p.jsx)(f,{url:I,setIsUpdate:m}),Object(p.jsx)("div",{className:i?"hidden":"posts-container",children:n.length>0?n.map((function(t){return Object(p.jsx)(b,{title:t.title,content:t.content,id:t._id,setIsUpdate:m,setCurrentPost:P,setIsEdit:d,url:I},t._id)})):Object(p.jsx)("p",{children:"No post available!"})})]})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d17de411.chunk.js.map