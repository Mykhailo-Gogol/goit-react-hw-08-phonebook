(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{100:function(e,t,n){e.exports={modal_container:"ModalForm_modal_container__yFerW"}},108:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);n(108);var c,r,a,o,s,i,u=n(0),l=n.n(u),b=n(12),d=n.n(b),j=n(24),O=n(18),p=n(65),f=n(6),h=n(33),g=n(93),m=n.n(g),_=n(94),C=n.n(_),v=n(5),F=n(15),x=n(7),k={name:null,email:null},S=Object(f.c)(k,(c={},Object(v.a)(c,x.a.registerSuccess,(function(e,t){return t.payload.user})),Object(v.a)(c,x.a.loginSuccess,(function(e,t){return t.payload.user})),Object(v.a)(c,x.a.logoutSuccess,(function(){return k})),Object(v.a)(c,x.a.getCurrentUserSuccess,(function(e,t){return t.payload})),c)),A=Object(f.c)(null,(r={},Object(v.a)(r,x.a.registerSuccess,(function(e,t){return t.payload.token})),Object(v.a)(r,x.a.loginSuccess,(function(e,t){return t.payload.token})),Object(v.a)(r,x.a.logoutSuccess,(function(){return null})),r)),y=Object(f.c)(null,(a={},Object(v.a)(a,x.a.registerFailure,(function(e,t){return t.payload})),Object(v.a)(a,x.a.loginFailure,(function(e,t){return t.payload})),Object(v.a)(a,x.a.logoutFailure,(function(e,t){return t.payload})),Object(v.a)(a,x.a.getCurrentUserFailure,(function(e,t){return t.payload})),a)),T=Object(f.c)(!1,(o={},Object(v.a)(o,x.a.registerSuccess,(function(){return!0})),Object(v.a)(o,x.a.loginSuccess,(function(){return!0})),Object(v.a)(o,x.a.getCurrentUserSuccess,(function(){return!0})),Object(v.a)(o,x.a.logoutSuccess,(function(){return!1})),Object(v.a)(o,x.a.registerFailure,(function(){return!1})),Object(v.a)(o,x.a.loginFailure,(function(){return!1})),Object(v.a)(o,x.a.getCurrentUserFailure,(function(){return!1})),o)),R=Object(F.c)({user:S,token:A,error:y,isAuthenticated:T}),N=n(9),E=[],B="",U=!1,w=Object(f.c)(E,(s={},Object(v.a)(s,N.a.onFetchContactsSuccess,(function(e,t){return t.payload})),Object(v.a)(s,N.a.onAddContactSuccess,(function(e,t){t.type;var n=t.payload;return[].concat(Object(p.a)(e),[n])})),Object(v.a)(s,N.a.onDeleteContactSuccess,(function(e,t){t.type;var n=t.payload;return e.filter((function(e){return e.id!==n}))})),s)),D=Object(f.c)(U,(i={},Object(v.a)(i,N.a.onAddContactRequest,(function(){return!0})),Object(v.a)(i,N.a.onAddContactSuccess,(function(){return!1})),Object(v.a)(i,N.a.onAddContactFailure,(function(){return!1})),Object(v.a)(i,N.a.onDeleteContactRequest,(function(){return!0})),Object(v.a)(i,N.a.onDeleteContactSuccess,(function(){return!1})),Object(v.a)(i,N.a.onDeleteContactFailure,(function(){return!1})),Object(v.a)(i,N.a.onFetchContactsRequest,(function(){return!0})),Object(v.a)(i,N.a.onFetchContactsSuccess,(function(){return!1})),Object(v.a)(i,N.a.onFetchContactsFailure,(function(){return!1})),i)),L=Object(f.c)(B,Object(v.a)({},N.a.onChangeFilter,(function(e,t){t.type;return t.payload}))),q=Object(F.c)({contacts:w,filter:L,loading:D}),I={key:"react_phonebook_token",storage:m.a,whitelist:["token"]},P=Object(h.g)(I,R),z=[].concat(Object(p.a)(Object(f.d)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),[C.a]),H=Object(f.a)({reducer:{auth:P,contacts:q},middleware:z,devTools:!0}),G=Object(h.h)(H),M=n(95),Z=n(96),J=(n(119),n(97)),W=n.n(J),V=n(98),K=n(2),Q=function(){return Object(K.jsx)("div",{children:Object(K.jsx)(W.a,{type:"Circles",color:"#00BFFF",height:150,width:150,timeout:3e3,className:V.loader})})},X=n(57),Y=n(44),$=n(21),ee=n(39),te=n(186),ne=n(182),ce=n(102),re=n.n(ce),ae=n(103),oe=n.n(ae),se=n(91),ie=n.n(se),ue=n(104),le=n.n(ue),be=n(68),de=n(80),je=n.n(de),Oe=n(79),pe=n.n(Oe),fe=Object(ne.a)({button_mobile:{display:"flex",alignItems:"center",justifyContent:"center",width:50,fontSize:12,background:"#F4FAFF","&:hover":{background:"#F4FAFF"},"&:active":{background:"#F4FAFF"}}}),he=function(){var e=fe();return Object(K.jsxs)("div",{className:be.auth_menu,children:[Object(K.jsx)(j.c,{to:$.a.login,className:be.app_bar_link,children:Object(K.jsx)(te.a,{className:e.button_mobile,variant:"outlined",children:Object(K.jsx)(pe.a,{color:"action"})})}),Object(K.jsx)(j.c,{to:$.a.register,className:be.app_bar_link_decoration,children:Object(K.jsx)(te.a,{className:e.button_mobile,variant:"outlined",color:"primary",children:Object(K.jsx)(je.a,{color:"action"})})})]})},ge=n(78),me=n(99),_e=n.n(me),Ce=n(56),ve=Object(ne.a)({button_mobile:{display:"flex",alignItems:"center",justifyContent:"center",minWidth:50,fontSize:12,background:"#F4FAFF","&:hover":{background:"#F4FAFF"},"&:active":{background:"#F4FAFF"}}}),Fe=function(){var e=ve(),t=Object(O.b)();return Object(K.jsx)("div",{children:Object(K.jsx)("div",{className:ge.user_menu,children:Object(K.jsx)("span",{className:ge.app_bar_link,children:Object(K.jsx)(te.a,{className:e.button_mobile,variant:"outlined",onClick:function(){return t(Ce.a.logout())},children:Object(K.jsx)(_e.a,{color:"action"})})})})})},xe=n(100),ke=n.n(xe),Se=n(185),Ae=n(188),ye=n(40),Te=n(69),Re=n(187),Ne=n(101),Ee=n.n(Ne),Be=n(27),Ue=n(90),we=n(55),De=Object(ne.a)({button_mobile:{display:"flex",alignItems:"center",justifyContent:"center",width:300,fontSize:12,background:"#758BFD","&:hover":{background:"#758BFD"},"&:active":{background:"#758BFD"}}}),Le=function(e){var t=e.onClose,n=De(),c=Object(O.c)(we.a.contactsReselect),r=Object(O.b)(),a=Object(u.useState)({name:"",number:"+380"}),o=Object(X.a)(a,2),s=o[0],i=o[1],l=function(e){var t=e.target,n=t.name,c=t.value;i(Object(ye.a)(Object(ye.a)({},s),{},Object(v.a)({},n,c.charAt(0).toUpperCase()+c.slice(1))))},b=function(e){var t=e.name,n=e.number,a=/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(t),o=/(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/.test(n);c.some((function(e){return e.name===t}))?Object(Be.b)(t):!0!==a?Object(Be.f)():!0!==o?Object(Be.g)():(r(Ue.a.addContactOperation({name:t,number:n})),i({name:"",number:"+380"}))};return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)("form",{className:Te.contact_form,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),b(s),t&&t(!1)},children:[Object(K.jsx)(Re.a,{placeholder:"Name",className:Te.form_input,inputProps:{"aria-label":"contact name"},type:"text",onChange:l,name:"name",value:s.name,id:"name",required:!0,variant:"outlined"}),Object(K.jsx)(Re.a,{placeholder:"Number",className:Te.form_input,inputProps:{"aria-label":"contact number"},type:"tel",onChange:l,name:"number",value:s.number,id:"number",required:!0}),Object(K.jsx)(te.a,{variant:"outlined",type:"submit",className:n.button_mobile,children:Object(K.jsx)(Ee.a,{color:"action"})})]})})},qe=function(e){var t=e.open,n=e.onClose;return Object(K.jsxs)("div",{children:[Object(K.jsx)(Se.a,{open:t,onClose:function(){return n(!1)},closeAfterTransition:!0,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",BackdropProps:{timeout:500},children:Object(K.jsxs)("div",{className:ke.a.modal_container,children:[Object(K.jsx)("h4",{style:{textAlign:"center"},children:"Add contact"}),Object(K.jsx)(Le,{onClose:n})]})}),Object(K.jsx)(Ae.a,{in:t,children:Object(K.jsx)("div",{})})]})},Ie=Object(ne.a)({button_mobile:{display:"flex",alignItems:"center",justifyContent:"center",width:50,fontSize:12,marginRight:20,background:"#F4FAFF",transition:"200ms","&:hover":{background:"#F4FAFF",transform:"scale(1.1)",transition:"200ms"},"&:active":{background:"#F4FAFF"}},user_button_mobile:{display:"flex",alignItems:"center",justifyContent:"center",width:300,fontSize:12,marginLeft:"auto",marginRight:"auto",background:"#F4FAFF","&:hover":{background:"#F4FAFF"},"&:active":{background:"#F4FAFF"}}});var Pe=function(){var e=Ie(),t=Object(u.useState)(!1),n=Object(X.a)(t,2),c=n[0],r=n[1],a=Object(O.c)(ee.a.userEmailSelector),o=Object(O.c)(ee.a.isAuthenticatedSelector);return Object(K.jsxs)("header",{children:[Object(K.jsxs)("nav",{className:Y.app_bar_nav,children:[Object(K.jsxs)("div",{className:Y.main_nav,children:[Object(K.jsx)(j.c,{exact:!0,to:$.a.home,className:Y.app_bar_link_decoration,children:Object(K.jsx)(te.a,{className:e.button_mobile,variant:"outlined",children:Object(K.jsx)(re.a,{color:"action"})})}),Object(K.jsx)(qe,{open:c,onClose:r}),o?Object(K.jsxs)("div",{className:Y.left_user_menu,children:[Object(K.jsx)(j.c,{to:$.a.contacts,className:Y.app_bar_link,children:Object(K.jsx)(te.a,{className:e.button_mobile,variant:"outlined",color:"primary",children:Object(K.jsx)(oe.a,{color:"action"})})}),Object(K.jsx)(te.a,{variant:"outlined",className:e.button_mobile,onClick:function(){r(!0)},children:Object(K.jsx)(le.a,{color:"action"})})]}):null]}),o?Object(K.jsx)(Fe,{}):Object(K.jsx)(he,{})]}),o&&Object(K.jsx)("div",{children:Object(K.jsx)(j.c,{to:$.a.userInfo,className:Y.app_bar_link,children:Object(K.jsxs)(te.a,{className:"".concat(e.user_button_mobile," ").concat(e.icon_margin),variant:"outlined",children:[Object(K.jsx)(ie.a,{color:"action"}),Object(K.jsx)("span",{children:a})]})})})]})},ze=n(11),He=n(67),Ge=function(e){var t=e.component,n=Object(He.a)(e,["component"]),c=Object(O.c)(ee.a.isAuthenticatedSelector);return Object(K.jsx)(ze.b,{render:function(){return c?Object(K.jsx)(t,Object(ye.a)({},n)):Object(K.jsx)(ze.a,{to:n.redirectTo})}})},Me=function(e){var t=e.component,n=Object(He.a)(e,["component"]),c=Object(O.c)(ee.a.isAuthenticatedSelector);return Object(K.jsx)(ze.b,{render:function(){return c&&n.restricted?Object(K.jsx)(ze.a,{to:n.redirectTo}):Object(K.jsx)(t,Object(ye.a)({},n))}})},Ze=n(16),Je=Object(u.lazy)((function(){return n.e(2).then(n.bind(null,207))})),We=Object(u.lazy)((function(){return n.e(1).then(n.bind(null,203))})),Ve=Object(u.lazy)((function(){return n.e(3).then(n.bind(null,204))})),Ke=Object(u.lazy)((function(){return n.e(5).then(n.bind(null,205))})),Qe=Object(u.lazy)((function(){return n.e(0).then(n.bind(null,206))})),Xe=Object(u.lazy)((function(){return n.e(7).then(n.bind(null,202))})),Ye=function(){var e=Object(O.b)(),t=Object(O.c)(we.a.isLoadingSelector);return Object(u.useEffect)((function(){e(Ce.a.getCurrentUser())}),[]),Object(K.jsxs)("div",{className:Z.container,children:[Object(K.jsx)("div",{children:Object(K.jsx)(Pe,{})}),Object(K.jsx)("div",{children:Object(K.jsx)(u.Suspense,{fallback:Object(K.jsx)(Q,{}),children:Object(K.jsxs)(ze.d,{children:[Object(K.jsx)(ze.b,{exact:!0,path:$.a.home,component:Je}),Object(K.jsx)(Me,{path:$.a.login,component:Ve,redirectTo:"/contacts",restricted:!0}),Object(K.jsx)(Me,{path:$.a.register,component:Ke,redirectTo:"/contacts",restricted:!0}),Object(K.jsx)(Ge,{path:$.a.contacts,component:We,redirectTo:"/login"}),Object(K.jsx)(Ge,{path:$.a.userInfo,component:Xe,redirectTo:"/login"}),Object(K.jsx)(ze.b,{component:Qe})]})})}),t&&Object(K.jsx)(Q,{}),Object(K.jsx)(Ze.a,{})]})};d.a.render(Object(K.jsx)(O.a,{store:H,children:Object(K.jsx)(M.a,{loading:null,persistor:G,children:Object(K.jsx)(j.a,{children:Object(K.jsx)(l.a.StrictMode,{children:Object(K.jsx)(Ye,{})})})})}),document.getElementById("root"))},21:function(e,t,n){"use strict";t.a={home:"/",login:"/login",register:"/register",contacts:"/contacts",userInfo:"/user-info"}},27:function(e,t,n){"use strict";n.d(t,"i",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"h",(function(){return b})),n.d(t,"c",(function(){return d}));var c=n(16),r=(n(89),function(){return c.b.error("Registration Error",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),a=function(){return c.b.error("Login Error",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},o=function(){return c.b.error("Logout Error",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},s=function(){return c.b.error("The name can only consist of letters, apostrophes, dashes and spaces.",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},i=function(){return c.b.error("The phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},u=function(e){return c.b.warn("".concat(e," is already in contacts!"),{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},l=function(e){return c.b.error("".concat(e),{position:"bottom-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},b=function(){return c.b.error("Minimum eight characters, at least one letter and one number",{position:"bottom-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},d=function(){return c.b.error("@",{position:"bottom-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},39:function(e,t,n){"use strict";var c={userEmailSelector:function(e){return e.auth.user.email},userNameSelector:function(e){return e.auth.user.name},isAuthenticatedSelector:function(e){return e.auth.isAuthenticated}};t.a=c},43:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(16),r=(n(89),function(){return c.b.success("Registration Success",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),a=function(){return c.b.success("Login Success",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},o=function(){return c.b.success("Logout Success",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},s=function(e){return c.b.success("".concat(e," added"),{position:"bottom-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},i=function(){return c.b.success("Contact deleted",{position:"bottom-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},44:function(e,t,n){e.exports={app_bar_nav:"AppBar_app_bar_nav__U2iPq",main_nav:"AppBar_main_nav__KeBFZ",app_bar_link:"AppBar_app_bar_link__3faFw",app_bar_link_decoration:"AppBar_app_bar_link_decoration__lyFYI",left_user_menu:"AppBar_left_user_menu__25jIW"}},55:function(e,t,n){"use strict";var c=n(41),r=function(e){return e.contacts.contacts},a=function(e){return e.contacts.filter},o={contactsSelector:r,filterSelector:a,isLoadingSelector:function(e){return e.contacts.loading},contactsReselect:Object(c.a)(r,(function(e){return e})),filteredContactsSelector:Object(c.a)([r,a],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)||e.number.toLowerCase().includes(n)}))}))};t.a=o},56:function(e,t,n){"use strict";var c=n(32),r=n.n(c),a=n(54),o=n(23),s=n.n(o),i=n(7),u=n(43),l=n(27);s.a.defaults.baseURL="https://connections-api.herokuapp.com";var b=function(e){s.a.defaults.headers.common.Authorization="Bearer ".concat(e)},d=function(){s.a.defaults.headers.common.Authorization=""},j={register:function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(i.a.registerRequest()),t.prev=1,t.next=4,s.a.post("/users/signup",e);case 4:c=t.sent,b(c.data.token),n(i.a.registerSuccess(c.data)),Object(u.e)(),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),n(i.a.registerFailure(t.t0)),Object(l.i)();case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},login:function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(i.a.loginRequest()),t.prev=1,t.next=4,s.a.post("/users/login",e);case 4:c=t.sent,b(c.data.token),n(i.a.loginSuccess(c.data)),Object(u.c)(),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),n(i.a.loginFailure(t.t0)),Object(l.d)();case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(i.a.logoutRequest()),e.prev=1,e.next=4,s.a.post("/users/logout");case 4:d(),t(i.a.logoutSuccess()),Object(u.d)(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t(i.a.logoutFailure(e.t0)),Object(l.e)();case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n(),a=c.auth.token){e.next=3;break}return e.abrupt("return");case 3:return b(a),t(i.a.getCurrentUserRequest()),e.prev=5,e.next=8,s.a.get("/users/current");case 8:o=e.sent,t(i.a.getCurrentUserSuccess(o.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(i.a.getCurrentUserFailure(e.t0));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()}};t.a=j},68:function(e,t,n){e.exports={auth_menu:"AuthNav_auth_menu__36XCW",app_bar_link:"AuthNav_app_bar_link__3tQvn",app_bar_link_decoration:"AuthNav_app_bar_link_decoration__1h05E"}},69:function(e,t,n){e.exports={contact_form:"Form_contact_form__2kgVi",form_input:"Form_form_input__3p7qB"}},7:function(e,t,n){"use strict";var c=n(6),r={registerRequest:Object(c.b)("auth/REGISTER_R"),registerSuccess:Object(c.b)("auth/REGISTER_S"),registerFailure:Object(c.b)("auth/REGISTER_F"),loginRequest:Object(c.b)("auth/LOGIN_R"),loginSuccess:Object(c.b)("auth/LOGIN_S"),loginFailure:Object(c.b)("auth/LOGIN_F"),logoutRequest:Object(c.b)("auth/LOGOUT_R"),logoutSuccess:Object(c.b)("auth/LOGOUT_S"),logoutFailure:Object(c.b)("auth/LOGOUT_F"),getCurrentUserRequest:Object(c.b)("auth/GET_CURRENT_USER_R"),getCurrentUserSuccess:Object(c.b)("auth/GET_CURRENT_USER_S"),getCurrentUserFailure:Object(c.b)("auth/GET_CURRENT USER_F")};t.a=r},78:function(e,t,n){e.exports={user_menu:"UserMenu_user_menu__2tDL-",app_bar_link:"UserMenu_app_bar_link__ATJk5"}},9:function(e,t,n){"use strict";var c=n(6),r={onFetchContactsRequest:Object(c.b)("contacts/FETCH_CONTACTS_R"),onFetchContactsSuccess:Object(c.b)("contacts/FETCH_CONTACTS_S"),onFetchContactsFailure:Object(c.b)("contacts/FETCH_CONTACTS_F"),onAddContactRequest:Object(c.b)("contacts/ADD_CONTACT_R"),onAddContactSuccess:Object(c.b)("contacts/ADD_CONTACT_S"),onAddContactFailure:Object(c.b)("contacts/ADD_CONTACT_F"),onDeleteContactRequest:Object(c.b)("contacts/DELETE_CONTACT_R"),onDeleteContactSuccess:Object(c.b)("contacts/DELETE_CONTACT_S"),onDeleteContactFailure:Object(c.b)("contacts/DELETE_CONTACT_F"),onChangeFilter:Object(c.b)("contacts/FILTER_CONTACT")};t.a=r},90:function(e,t,n){"use strict";var c=n(23),r=n.n(c),a=n(9),o=n(43),s=n(27);r.a.defaults.baseURL="https://connections-api.herokuapp.com";var i={fetchContactOperation:function(e){return function(e){e(a.a.onFetchContactsRequest()),r.a.get("/contacts").then((function(t){var n=t.data;return e(a.a.onFetchContactsSuccess(n))})).catch((function(t){Object(s.a)(t.message),e(a.a.onFetchContactsFailure(t))}))}},addContactOperation:function(e){return function(t){t(a.a.onAddContactRequest()),r.a.post("/contacts",e).then((function(n){var c=n.data;t(a.a.onAddContactSuccess(c)),Object(o.a)(e.name)})).catch((function(e){Object(s.a)(e.message),t(a.a.onAddContactFailure(e))}))}},deleteContactOperation:function(e){return function(t){t(a.a.onDeleteContactRequest()),r.a.delete("/contacts/".concat(e)).then((function(){t(a.a.onDeleteContactSuccess(e)),Object(o.b)()})).catch((function(e){Object(s.a)(e.message),t(a.a.onDeleteContactFailure(e))}))}}};t.a=i},96:function(e,t,n){e.exports={container:"App_container__eSJ6i"}},98:function(e,t,n){e.exports={loader:"Loader_loader__2hZcM"}}},[[160,6,8]]]);
//# sourceMappingURL=main.1fcd85ad.chunk.js.map