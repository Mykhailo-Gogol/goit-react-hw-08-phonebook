(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{188:function(e,t,n){e.exports={contacts_page_wrapper:"Contacts_contacts_page_wrapper__2DI_v",blur:"Contacts_blur__2cJYK"}},189:function(e,t,n){e.exports={filter_input:"Filter_filter_input__19JVD",filter_wrapper:"Filter_filter_wrapper__TUyKj"}},190:function(e,t,n){"use strict";var a=n(34),r=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(36)).default)(c.createElement(c.Fragment,null,c.createElement("path",{d:"M7.06 5L2.4 12l4.67 7H22V5H7.06c.01 0 .01 0 0 0zM9 8.41L10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59 17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41z",opacity:".3"}),c.createElement("path",{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"})),"BackspaceTwoTone");t.default=i},200:function(e,t,n){"use strict";n.r(t);var a=n(188),r=n.n(a),c=n(18),i=n(54),o=n(189),l=n(9),s=n(184),d=n(2),f=function(){var e=Object(c.c)(i.a.filterSelector),t=Object(c.b)();return Object(d.jsx)("div",{className:o.filter_wrapper,children:Object(d.jsx)(s.a,{type:"text",placeholder:"Search contact",name:"filter",value:e,onChange:function(e){return t(l.a.onChangeFilter(e.target.value))},className:o.filter_input})})},p=n(0);var u="undefined"!==typeof window,h=function(e,t){void 0===t&&(t=!1);var n=Object(p.useState)(u?function(){return window.matchMedia(e).matches}:t),a=n[0],r=n[1];return Object(p.useEffect)((function(){var t=!0,n=window.matchMedia(e),a=function(){t&&r(!!n.matches)};return n.addListener(a),r(n.matches),function(){t=!1,n.removeListener(a)}}),[e]),a},b={maxWidth:"100%",marginLeft:"auto",marginRight:"auto",paddingLeft:0,paddingRight:0,display:"flex",flexWrap:"wrap",justifyContent:"flex-start",listStyle:"none"},j={display:"flex",alignItems:"center",justifyContent:"space-around",width:"calc(100% / 3 - 40px)",border:"2px solid #7cc6fe",borderRadius:5,backgroundColor:"#fff",margin:"10px 15px"},g={width:200,display:"flex",justifyContent:"space-between",alignItems:"center",margin:0,height:50,color:"#212121",paddingLeft:20},x={color:"#fff"},m={display:"flex",alignItems:"center",justifyContent:"center",width:50,fontSize:12,background:"#F4FAFF","&:hover":{background:"#758BFD"},"&:active":{background:"#758BFD"}},w={flexDirection:"column",flexWrap:"nowrap",width:300,height:500,paddingLeft:0,margin:"0 auto"},_={width:300,height:"auto",padding:0,marginBottom:2,margin:"10px auto",display:"flex",alignItems:"center",justifyContent:"space-around",border:"2px solid #7cc6fe",borderRadius:5,backgroundColor:"#fff"},O={width:200,flexWrap:"wrap",justifyContent:"space-between",display:"flex",alignItems:"center",margin:0,height:50,color:"#212121",paddingLeft:20},y=n(86),v=n(183),C=n(190),L=n.n(C),k=function(){var e=h("(max-width: 767px)"),t=Object(c.b)(),n=Object(c.c)(i.a.filteredContactsSelector);Object(p.useEffect)((function(){t(y.a.fetchContactOperation())}),[]);return Object(d.jsx)(d.Fragment,{children:n.length>0?Object(d.jsx)("ul",{style:e?w:b,children:n.map((function(n){var a=n.name,r=n.number,c=n.id;return Object(d.jsxs)("li",{style:e?_:j,children:[Object(d.jsxs)("p",{style:e?O:g,children:[Object(d.jsx)("span",{children:a}),Object(d.jsx)("span",{children:r})]}),Object(d.jsx)("div",{children:Object(d.jsx)(v.a,{style:m,onClick:function(){return function(e){return t(y.a.deleteContactOperation(e))}(c)},children:Object(d.jsx)(L.a,{color:"action"})})})]},a)}))}):Object(d.jsx)("p",{style:x,children:"No contacts"})})};t.default=function(){var e=Object(c.c)(i.a.isLoadingSelector);return Object(d.jsxs)("div",{style:e?{filter:"blur(20px)"}:{filter:"blur(0px)"},className:r.a.contacts_page_wrapper,children:[Object(d.jsx)(f,{}),Object(d.jsx)(k,{})]})}}}]);
//# sourceMappingURL=contacts-page.a31aa5d3.chunk.js.map