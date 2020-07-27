(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{160:function(e,t,a){e.exports=a(300)},165:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(48),l=a.n(c),s=(a(165),a(20)),o=a(67),i=a(82),u=a(88),m=a(89),d=a(119),p=a(157),b=a(158),g=a(159),f=a(6),E=a(4),v=a(17),h=function(e){var t=e.posts,a=e.showAuthor,n=void 0===a||a,c=e.colSize,l=void 0===c?3:c,s=e.deletePostHandler,o=e.editable,i=void 0!==o&&o;return r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement("div",{className:"col-md-".concat(l," p-2"),key:"post-".concat(e._id)},r.a.createElement("div",{className:"card p-2",style:{height:"100%"}},r.a.createElement("div",{className:"card-body"},r.a.createElement(v.b,{to:"/react-gql-practice"+"/posts/".concat(e._id)},r.a.createElement("img",{className:"img-card-top",src:e.image.url,alt:"",style:{height:"100px",width:"300px"}}),r.a.createElement("h5",{className:"card-title"},e.title)),r.a.createElement("div",{className:"card-text"},n?r.a.createElement("div",null,r.a.createElement(v.b,{className:"text-secondary strong",to:"/react-gql-practice"+"/users/".concat(e.postedBy.username)},"Author: ",e.postedBy.name?e.postedBy.name:e.postedBy.username)):""),r.a.createElement("div",null,s?r.a.createElement("button",{onClick:function(){return s(e._id)},className:"float-left btn btn-raised btn-danger"},"Delete"):"",i?r.a.createElement(v.b,{to:"/react-gql-practice"+"/edit-post/".concat(e._id),className:"float-right btn btn-raised btn-info"},"Edit"):""))))})))},O=a(18);function j(){var e=Object(O.a)(["\nquery publicProfile($username: String!){\n  publicProfile(username: $username) {\n    ...userInfo\n  }\n}\n",""]);return j=function(){return e},e}function N(){var e=Object(O.a)(["\nquery {\n  allUsers {\n    _id\n    username\n    about\n    images {\n      url\n    }\n  }\n}\n"]);return N=function(){return e},e}function y(){var e=Object(O.a)(["\nquery {\n profile {\n   # using GQL fragment instead of directly specifying fields\n   ...userInfo\n  }\n}\n  ","\n"]);return y=function(){return e},e}function w(){var e=Object(O.a)(["\nquery searchPosts($keyword: String!){\n  searchPosts(keyword:$keyword) {\n    ...postData\n  }\n}\n","\n"]);return w=function(){return e},e}function x(){var e=Object(O.a)(["\nquery singlePost($_id: String!){\n  singlePost(_id: $_id) {\n    ...postData\n  }\n}\n","\n"]);return x=function(){return e},e}function k(){var e=Object(O.a)(["\nquery postsByCurrentUser($page: Int, $pageSize: Int){\n  postsByCurrentUser(page: $page, pageSize: $pageSize) {\n    ...postData\n  }\n}\n","\n"]);return k=function(){return e},e}function S(){var e=Object(O.a)(["\nquery {\n  totalPostsByUser\n}\n"]);return S=function(){return e},e}function P(){var e=Object(O.a)(["\nquery {\n  totalPosts\n}\n"]);return P=function(){return e},e}function _(){var e=Object(O.a)(["\nquery allPosts($page: Int, $pageSize: Int) {\n  allPosts(page: $page, pageSize: $pageSize) {\n   ...postData\n  }\n}\n","\n"]);return _=function(){return e},e}var q=a(26).gql,C=a(90),I=C.USER_INFO,U=C.POST_DATA,D=q(_(),U),F=q(P()),L=q(S()),R=q(k(),U),A=q(x(),U),$=q(w(),U),z=q(y(),I),G=q(N()),T=q(j(),I),B=a(151),W=a(120),H=a(50),J=a.n(H),M=function(e){var t=e.full,a=e.background;return r.a.createElement("div",{className:a?J.a.background:""},r.a.createElement("div",{className:t?J.a.full:""},r.a.createElement("div",{className:J.a.loaderContainer},r.a.createElement("div",{className:J.a.yellow}),r.a.createElement("div",{className:J.a.red}),r.a.createElement("div",{className:J.a.blue}),r.a.createElement("div",{className:J.a.violet}))))},Q=a(5),K=function(e){var t=e.page,a=e.pageSize,c=e.setPage,l=e.total,s=Array(Math.ceil(l/a)).fill(0),o=(t-1)*a+1,i=o+a-1;return r.a.createElement("div",null,s.length>1?r.a.createElement(n.Fragment,null,r.a.createElement("div",null,"Showing ",r.a.createElement("strong",null,o," - ",i<=l?i:l)," of ",l),r.a.createElement("button",{disabled:1===t,onClick:function(){return c(t-1)},className:"mr-2 btn btn-warning btn-raised"}," Previous "),s.map((function(e,a){return r.a.createElement("button",{onClick:function(){return c(a+1)},className:"btn ".concat(a+1===t?"btn-raised btn-success":"btn-outline-success"),key:"control"+a},a+1)})),r.a.createElement("button",{disabled:t===s.length,onClick:function(){return c(t+1)},className:"ml-2 btn btn-warning btn-raised"},"Next")):"")},V=a(90);function X(){var e=Object(O.a)(["\nsubscription {\n  postAdded {\n   ...postData\n  }\n}\n","\n"]);return X=function(){return e},e}var Y=(0,a(26).gql)(X(),V.POST_DATA),Z=function(){var e=Object(n.useState)(1),t=Object(E.a)(e,2),a=t[0],c=t[1];Object(B.a)(Y,{onSubscriptionData:function(e){e.client.cache,e.subscriptionData.data;o(),p({variables:a,pageSize:8})}});var l=Object(W.a)(F),s=l.data,o=l.refetch,i=Object(W.a)(D,{variables:{page:a,pageSize:8}}),u=i.data,m=i.error,d=i.loading,p=i.refetch;return Object(n.useEffect)((function(){m&&Q.b.error(m.message)}),[m]),r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),s?r.a.createElement(K,{total:s.totalPosts,page:a,pageSize:8,setPage:c}):"",d?r.a.createElement(M,null):u?r.a.createElement(h,{posts:u.allPosts}):"")},ee=a(8),te=a.n(ee),ae=a(15),ne=a(74),re=a.n(ne);re.a.initializeApp({apiKey:"AIzaSyAnN8yiImo8V6jCWBz5V5EXdkDujjI9OEo",authDomain:"gql-react-node-udemy.firebaseapp.com",projectId:"gql-react-node-udemy",storageBucket:"gql-react-node-udemy.appspot.com",appId:"1:660400582483:web:154b9c0912e81847467ba6",measurementId:"G-BYEN4PKHEH"}),re.a.analytics();re.a;var ce=re.a.auth(),le=new re.a.auth.GoogleAuthProvider,se=function(e,t){switch(t.type){case"LOGGED_IN_USER":return Object(s.a)(Object(s.a)({},e),{},{user:t.payload});default:return e}},oe={user:null},ie=Object(n.createContext)(),ue=function(e){var t=e.children,a=Object(n.useState)(!0),c=Object(E.a)(a,2),l=c[0],s=c[1],o=Object(n.useReducer)(se,oe),i=Object(E.a)(o,2),u=i[0],m=i[1];Object(n.useEffect)((function(){var e=ce.onAuthStateChanged(function(){var e=Object(ae.a)(te.a.mark((function e(t){var a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return e.next=3,t.getIdTokenResult();case 3:a=e.sent,m({type:"LOGGED_IN_USER",payload:{email:t.email,token:a.token}}),s(!1),e.next=10;break;case 8:m({type:"LOGGED_IN_USER",payload:null}),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return e()}}),[]);var d={state:u,dispatch:m};return r.a.createElement(ie.Provider,{value:d},l?r.a.createElement(M,{full:!0,background:!0}):t)},me=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],c=t[1],l=Object(f.f)();return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"form-inline my-2 my-lg-0",onSubmit:function(e){e.preventDefault(),l.push("/search/".concat(a))}},r.a.createElement("input",{value:a,onChange:function(e){return c(e.target.value)},className:"form-control mr-sm-2 bg-light",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-light my-2 my-sm-0",type:"submit"},"Search")))},de=function(){var e=Object(n.useContext)(ie),t=e.state,a=e.dispatch,c=Object(f.f)(),l=t.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-success"},r.a.createElement(v.b,{className:"navbar-brand text-white",to:"/react-gql-practice/"},"My App"),r.a.createElement("button",{className:"navbar-toggler text-white",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon text-white"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"nav nav-tabs navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.c,{className:"nav-link text-white",activeClassName:"active",to:"/react-gql-practice/users"},"Users ",r.a.createElement("span",{className:"sr-only"},"(current)"))),l?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.c,{className:"nav-link text-white",activeClassName:"active",to:"/react-gql-practice/dashboard"},"Dashboard ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item float-right"},r.a.createElement("span",{style:{cursor:"pointer"},className:"nav-link text-white",onClick:function(){ce.signOut(),a({type:"LOGGED_IN_USER",payload:null}),c.push("/login")}}," ",r.a.createElement("span",{className:"sr-only"},"(current)"),"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.c,{className:"nav-link text-white",activeClassName:"active",to:"/react-gql-practice/login"},"Login ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.c,{className:"nav-link text-white",activeClassName:"active",to:"/react-gql-practice/register"},"Register ",r.a.createElement("span",{className:"sr-only"},"(current)"))))),r.a.createElement("div",{className:"ml-auto"},r.a.createElement(me,null)))))},pe=function(e){var t=e.handleSubmit,a=e.email,n=void 0===a?"":a,c=e.setEmail,l=e.password,s=void 0===l?"":l,o=e.setPassword,i=e.loading,u=e.showPassword,m=void 0!==u&&u,d=e.submitLabel,p=void 0===d?"Submit":d,b=e.hideEmail,g=void 0!==b&&b,f=e.children;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t},g?"":r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Enter Email Address"),r.a.createElement("input",{id:"email",type:"email",value:n,onChange:function(e){return c(e.target.value)},disabled:i,className:"form-control"})),m?r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pasword"},"Enter Password"),r.a.createElement("input",{id:"password",type:"password",value:s,onChange:function(e){return o(e.target.value)},disabled:i,className:"form-control"})):"",r.a.createElement("button",{disabled:i||!g&&!n||m&&!s,className:"btn btn-outline-success "},i?"Please Wait...":p),f))},be=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),s=Object(E.a)(l,2),o=s[0],i=s[1],u=Object(n.useState)(!1),m=Object(E.a)(u,2),d=m[0],p=m[1],b=function(){var e=Object(ae.a)(te.a.mark((function e(t){var n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i(!0),n={url:"https://rahulbhooteshwar.github.io/react-gql-practice/complete-register",handleCodeInApp:!0},e.next=5,ce.sendSignInLinkToEmail(a,n);case 5:i(!1),Q.b.success("Please check your inbox for confirmation email!"),window.localStorage.setItem("emailFromRegistration",a),c(""),p(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"p-5"},r.a.createElement("h4",null,"Register"),o?r.a.createElement(M,null):d?r.a.createElement("div",{className:"alert alert-success",role:"alert"},"Check your email for completing Registration"):r.a.createElement(pe,{email:a,setEmail:c,loading:o,handleSubmit:b,submitLabel:"Proceed"}))},ge=a(150);function fe(){var e=Object(O.a)(["\nmutation postDelete($_id: String!){\n  postDelete(_id:$_id){\n    _id\n  }\n}\n\n"]);return fe=function(){return e},e}function Ee(){var e=Object(O.a)(["\nmutation postUpdate($_id:String!, $input:PostCreateUpdateInput!){\n  postUpdate(_id: $_id, input: $input) {\n    ...postData\n  }\n}\n","\n"]);return Ee=function(){return e},e}function ve(){var e=Object(O.a)(["\nmutation postCreate($input: PostCreateUpdateInput!) {\n  postCreate(input: $input) {\n   ...postData\n  }\n}\n","\n"]);return ve=function(){return e},e}function he(){var e=Object(O.a)(["\nmutation userUpdate($input:UserUpdateInput!){\n  userUpdate(input: $input){\n    # using GQL fragment instead of directly specifying fields\n    ...userInfo\n  }\n}\n  ","\n"]);return he=function(){return e},e}function Oe(){var e=Object(O.a)(["\nmutation {\n  userCreate {\n    username\n  }\n}\n"]);return Oe=function(){return e},e}var je=a(26).gql,Ne=a(90),ye=Ne.USER_INFO,we=Ne.POST_DATA,xe=je(Oe()),ke=je(he(),ye),Se=je(ve(),we),Pe=je(Ee(),we),_e=je(fe()),qe=function(){var e=Object(ge.a)(xe),t=Object(E.a)(e,1)[0],a=Object(n.useState)(""),c=Object(E.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(""),i=Object(E.a)(o,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(E.a)(d,2),b=p[0],g=p[1],h=Object(f.f)(),O=Object(n.useContext)(ie).dispatch,j=function(){var e=Object(ae.a)(te.a.mark((function e(a){var n,r,c;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),g(!0),e.prev=2,e.next=5,ce.signInWithEmailAndPassword(l,u);case 5:return n=e.sent,r=n.user,e.next=9,r.getIdTokenResult();case 9:return c=e.sent,O({type:"LOGGED_IN_USER",payload:{email:r.email,token:c.token}}),e.next=13,t();case 13:h.push("/dashboard"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),Q.b.error(e.t0.message),g(!1);case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(ae.a)(te.a.mark((function e(){var a,n,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,ce.signInWithPopup(le);case 4:return a=e.sent,n=a.user,e.next=8,n.getIdTokenResult();case 8:return r=e.sent,O({type:"LOGGED_IN_USER",payload:{email:n.email,token:r.token}}),e.next=12,t();case 12:h.push("/dashboard"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),Q.b.error(e.t0.message),g(!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"p-5"},r.a.createElement("h4",null,"Login"),b?r.a.createElement(M,{full:!0,background:!0}):r.a.createElement(n.Fragment,null,r.a.createElement("button",{className:"btn  btn-outline-danger mt-5",onClick:N},"Login with Google"),r.a.createElement("div",null,"Or"),r.a.createElement(pe,{email:l,password:u,setEmail:s,setPassword:m,loading:b,handleSubmit:j,submitLabel:"Login using email & password",showPassword:!0},r.a.createElement(v.b,{to:"/react-gql-practice/forgot-password"},r.a.createElement("button",{className:"btn btn-outline-secondary"},"Forgot Password")))))},Ce=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(E.a)(l,2),o=s[0],i=s[1],u=Object(n.useState)(!1),m=Object(E.a)(u,2),d=m[0],p=m[1],b=Object(f.f)(),g=Object(n.useContext)(ie).dispatch,v=Object(ge.a)(xe),h=Object(E.a)(v,1)[0];Object(n.useEffect)((function(){c(window.localStorage.getItem("emailFromRegistration"))}),[b]);var O=function(){var e=Object(ae.a)(te.a.mark((function e(t){var n,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p(!0),a&&o){e.next=5;break}return Q.b.error("Email & Password is required"),e.abrupt("return");case 5:return e.prev=5,e.next=8,ce.signInWithEmailLink(a,window.location.href);case 8:if(!e.sent.user.emailVerified){e.next=23;break}return window.localStorage.removeItem("emailFromRegistration"),n=ce.currentUser,e.next=14,n.updatePassword(o);case 14:return e.next=16,n.getIdTokenResult();case 16:return r=e.sent,g({type:"LOGGED_IN_USER",payload:{email:n.email,token:r.token}}),e.next=20,h();case 20:b.push("/dashboard"),e.next=24;break;case 23:Q.b.error("Email not verified");case 24:e.next=31;break;case 26:e.prev=26,e.t0=e.catch(5),console.log("Error in registration completion",e.t0.message),p(!1),Q.b.error(e.t0.message);case 31:case"end":return e.stop()}}),e,null,[[5,26]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"p-5"},r.a.createElement("h4",null,"Complete Registration"),d?r.a.createElement(M,null):r.a.createElement(pe,{email:a,password:o,setEmail:c,setPassword:i,loading:d,handleSubmit:O,submitLabel:"Complete Registration",showPassword:!0}))},Ie=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),s=Object(E.a)(l,2),o=s[0],i=s[1],u=Object(n.useState)(!1),m=Object(E.a)(u,2),d=m[0],p=m[1],b=function(){var e=Object(ae.a)(te.a.mark((function e(t){var n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i(!0),n={url:"https://rahulbhooteshwar.github.io/react-gql-practice/login"},e.next=5,ce.sendPasswordResetEmail(a,n);case 5:i(!1),Q.b.success("Please check your inbox for password reset email!"),c(""),p(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"p-5"},r.a.createElement("h4",null,"Forgot Password"),o?r.a.createElement(M,null):d?r.a.createElement("div",{className:"alert alert-success",role:"alert"},"Check your email for Password Reset Link"):r.a.createElement(pe,{email:a,setEmail:c,loading:o,handleSubmit:b,submitLabel:"Proceed"}))},Ue=a(97),De=function(e){var t=e.countFrom,a=e.path,c=Object(f.f)(),l=Object(n.useState)(t),s=Object(E.a)(l,2),o=s[0],i=s[1];return Object(n.useEffect)((function(){0===o?c.push(a):setTimeout((function(){console.log("executed at",new Date),i(o-1)}),1e3)}),[o,c,a]),r.a.createElement("div",{className:"p-5"},"Redirecting you in ",o," seconds ...")},Fe=function(e){var t=e.children,a=Object(Ue.a)(e,["children"]),c=Object(n.useContext)(ie).state.user;return r.a.createElement(n.Fragment,null,c?r.a.createElement(f.a,a,t):r.a.createElement(De,{path:"/login",countFrom:"5"}))},Le=a(156),Re=a(94),Ae=a.n(Re),$e=a(95),ze=a.n($e),Ge=function(e){var t=e.handleSubmit,a=e.profile,c=e.setProfile,l=e.loading,o=e.profileLoading;return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{id:"username",type:"text",value:a.username,onChange:function(e){return c(Object(s.a)(Object(s.a)({},a),{},{username:e.target.value}))},disabled:l||o,className:"form-control text-white"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{id:"name",type:"text",value:a.name,onChange:function(e){return c(Object(s.a)(Object(s.a)({},a),{},{name:e.target.value}))},disabled:l||o,className:"form-control text-white"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{id:"email",type:"text",value:a.email,onChange:function(e){return c(Object(s.a)(Object(s.a)({},a),{},{email:e.target.value}))},disabled:!0,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"about"},"About"),r.a.createElement("textarea",{id:"about",type:"text",value:a.about,onChange:function(e){return c(Object(s.a)(Object(s.a)({},a),{},{about:e.target.value}))},disabled:l||o,className:"form-control text-white",rows:"5"})),r.a.createElement("button",{disabled:l||o,className:"btn btn-outline-success "},l?"Please Wait...":"Update")))},Te=function(e){var t=e.images,a=e.processingImage,c=e.resizeAndUploadHandler,l=e.deleteImageHandler;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"form-group"},a?"Please Wait...":r.a.createElement("label",{htmlFor:"image"},r.a.createElement("span",{className:"btn btn-default btn-raised"},"Upload Image"),r.a.createElement("input",{hidden:!0,type:"file",id:"image",accept:"image/*",onChange:c,placeholder:"upload new image",className:"form-control"}))),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement("div",{className:"col-md-3",key:e.public_id},r.a.createElement("div",{className:"overlay-container"},r.a.createElement("img",{style:{height:"100px"},src:e.url,alt:e.public_id,className:"img-thumbnail float-right"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"overlay-contents"},r.a.createElement("button",{style:{cursor:e.url.includes("placeholder")?"not-allowed":"pointer"},disabled:e.url.includes("placeholder"),onClick:function(){return l(e.public_id)},type:"button",className:"btn btn-raised btn-success"},"Delete")))))}))))},Be=a(155),We=a.n(Be),He=function(){var e=Object(n.useContext)(ie).state;return We.a.create({baseURL:"https://node-gql-practice.herokuapp.com",headers:{authtoken:e.user.token}})},Je=function(){var e=He(),t=Object(n.useState)({name:"",username:"",email:"",about:"",images:[]}),a=Object(E.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),i=Object(E.a)(o,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(E.a)(d,2),b=p[0],g=p[1],f=Object(W.a)(z),v=f.data,h=f.loading,O=f.error,j=Object(ge.a)(ke,{refetchQueries:[{query:z},{query:G},{query:D}]}),N=Object(E.a)(j,1)[0];Object(n.useEffect)((function(){O&&Q.b.error(O.message)}),[O]),Object(n.useMemo)((function(){if(v&&v.profile){var e=ze()(v,["__typename"]);l({name:e.profile.name,username:e.profile.username,email:e.profile.email,about:e.profile.about,images:e.profile.images})}}),[v]);var y=function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),m(!0),e.prev=2,e.next=5,N({variables:{input:{username:c.username,name:c.name,about:c.about}}});case 5:Q.b.success("Profile Updated"),m(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),Q.b.error(e.t0.message),m(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var t=Object(ae.a)(te.a.mark((function t(a){var n,r,o;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.prev=1,t.next=4,e.post("".concat("https://node-gql-practice.herokuapp.com","/removeImage"),{public_id:a});case 4:if(n=t.sent,!(r=n.data).success){t.next=14;break}return o=c.images.filter((function(e){return e.public_id!==a})),t.next=10,N({variables:{input:{images:o}}});case 10:l(Object(s.a)(Object(s.a)({},c),{},{images:o})),Q.b.info("Deleted"),t.next=15;break;case 14:Q.b.error(r.error.message);case 15:g(!1),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(1),Q.b.error(t.t0.message),g(!1);case 22:case"end":return t.stop()}}),t,null,[[1,18]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,h?r.a.createElement(M,null):r.a.createElement("div",{className:"row jumbotron"},r.a.createElement("div",{className:"col-md-6 jumbotron bg-dark text-white border border-success"},r.a.createElement(Ge,{handleSubmit:y,profile:c,setProfile:l,loading:u,profileLoading:h})),r.a.createElement("div",{className:"col-md-6 jumbotron bg-light"},r.a.createElement(Te,{images:c.images,processingImage:b,resizeAndUploadHandler:function(t){g(!0);var a=!1;t.target.files[0]&&(a=!0),a&&Ae.a.imageFileResizer(t.target.files[0],300,300,"JPEG",100,0,function(){var t=Object(ae.a)(te.a.mark((function t(a){var n,r,o;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.post("".concat("https://node-gql-practice.herokuapp.com","/uploadImages"),{image:a});case 3:return n=t.sent,r=n.data,o=[].concat(Object(Le.a)(c.images),[r]),t.next=8,N({variables:{input:{images:o}}});case 8:l(Object(s.a)(Object(s.a)({},c),{},{images:o})),Q.b.info("Uploaded"),g(!1),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),Q.b.error(t.t0.message),g(!1);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),"base64")},deleteImageHandler:w}))))},Me=function(){var e=Object(n.useState)(),t=Object(E.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),s=Object(E.a)(l,2),o=s[0],i=s[1],u=function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i(!0),e.prev=2,e.next=5,ce.currentUser.updatePassword(a);case 5:i(!1),Q.b.success("Password Updated"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),Q.b.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h4",null,"Update Password"),r.a.createElement(pe,{password:a,setPassword:c,loading:o,handleSubmit:u,submitLabel:"Update Password",showPassword:!0,hideEmail:!0}))},Qe=function(){var e=Object(n.useState)(1),t=Object(E.a)(e,2),a=t[0],c=t[1],l=Object(W.a)(L).data,s=Object(W.a)(R,{variables:{page:a,pageSize:6}}),o=s.data,i=s.error,u=s.loading,m=Object(ge.a)(_e,{update:function(e){e.reset()}}),d=Object(E.a)(m,1)[0];Object(n.useEffect)((function(){i&&Q.b.error(i.message)}),[i]);var p=function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d({variables:{_id:t}});case 3:Q.b.success("Deleted"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Q.b.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(v.b,{to:"/react-gql-practice/create-post",className:"btn btn-raised btn-success-outline float-right"},"Create New Post"))),l?r.a.createElement(K,{total:l.totalPostsByUser,page:a,pageSize:6,setPage:c}):"",u?r.a.createElement(M,null):r.a.createElement(n.Fragment,null,o?r.a.createElement(h,{colSize:4,showAuthor:!1,posts:o.postsByCurrentUser,deletePostHandler:p,editable:!0}):""))},Ke=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"list-group"},r.a.createElement(v.c,{className:"text-center btn-lg btn-link btn-success",activeClassName:"active",to:"".concat("/react-gql-practice","/dashboard"),exact:!0},"Profile"),r.a.createElement(v.c,{className:"text-center btn-lg btn-link btn-success",activeClassName:"active",to:"".concat("/react-gql-practice","/dashboard/update-password")},"Update Password"),r.a.createElement(v.c,{className:"text-center btn-lg btn-link btn-success",activeClassName:"active",to:"".concat("/react-gql-practice","/dashboard/user-posts")},"Posts"))),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"tab-content"},r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"".concat("/react-gql-practice","/dashboard/update-password")},r.a.createElement(Me,null)),r.a.createElement(f.a,{path:"".concat("/react-gql-practice","/dashboard/user-posts")},r.a.createElement(Qe,null)),r.a.createElement(f.a,{path:"".concat("/react-gql-practice","/dashboard")},r.a.createElement(Je,null))))))},Ve=(a(299),function(e){var t=e.children,a=Object(Ue.a)(e,["children"]),c=Object(n.useContext)(ie).state,l=Object(f.f)();return Object(n.useEffect)((function(){c.user&&l.push("/dashboard")}),[c.user,l]),r.a.createElement("div",null,r.a.createElement(f.a,a,t))}),Xe=function(e){var t=e.user,a=t.username,n=t.about,c=t.images,l=Object(E.a)(c,2),s=l[0],o=l[1];return r.a.createElement("div",{className:"card text-center",style:{height:"100%",width:"200px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{className:"img-card-top",src:o?o.url:s.url,alt:"",style:{height:"100px",width:"100px"}}),r.a.createElement("h4",{className:"text-primary"},"@",a),r.a.createElement("hr",null),r.a.createElement("small",null,n)))},Ye=function(){var e=Object(W.a)(G),t=e.data,a=e.loading,c=e.error;return Object(n.useEffect)((function(){c&&Q.b.error(c.message)}),[c]),r.a.createElement("div",{className:"row"},a?r.a.createElement(M,null):"",t&&t.allUsers?t.allUsers.map((function(e){return r.a.createElement("div",{className:"col-md-2",key:"user-"+e._id},r.a.createElement(v.b,{to:"/react-gql-practice"+"/users/".concat(e.username)},r.a.createElement(Xe,{user:e})))})):"")},Ze=function(){var e=Object(f.g)().username,t=Object(W.a)(T,{variables:{username:e}}),a=t.data,c=t.loading,l=t.error;return Object(n.useEffect)((function(){l&&Q.b.error(l.message)}),[l]),r.a.createElement("div",null,c?r.a.createElement(M,null):"",a?r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},a.publicProfile.name),r.a.createElement("p",{className:"lead"},"@",a.publicProfile.username),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,a.publicProfile.about),r.a.createElement("h4",null,"Photos of ",a.publicProfile.name),a.publicProfile.images.map((function(e){var t=e.url;return r.a.createElement("img",{style:{height:"100px",width:"100px"},className:"img-thumbnail",alt:"",src:t})}))):"")},et=function(e){var t=e.title,a=e.content,c=e.image,l=e.setTitle,s=e.setContent,o=e.setImage,i=e.handleSubmit,u=e.loading,m=Object(n.useState)(!1),d=Object(E.a)(m,2),p=d[0],b=d[1],g=He(),f=function(){var e=Object(ae.a)(te.a.mark((function e(t){var a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,g.post("".concat("https://node-gql-practice.herokuapp.com","/removeImage"),{public_id:t});case 4:a=e.sent,a.data.success?(console.log("setting image to null"),o(null),Q.b.info("Deleted")):o(null),b(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),Q.b.error(e.t0.message),b(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,p?"Please Wait...":c?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"overlay-container"},r.a.createElement("img",{style:{height:"300px",width:"100%"},src:c.url,alt:c.public_id,className:"img-thumbnail float-right"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"overlay-contents"},r.a.createElement("button",{onClick:function(){return f(c.public_id)},type:"button",className:"btn btn-raised btn-success"},"Delete")))))):r.a.createElement("label",{htmlFor:"upload"},r.a.createElement("span",{className:"btn btn-default btn-raised"},"Upload Image"),r.a.createElement("input",{type:"file",hidden:!0,onChange:function(e){b(!0);var t=!1;e.target.files[0]&&(t=!0),t&&Ae.a.imageFileResizer(e.target.files[0],300,200,"JPEG",100,0,function(){var e=Object(ae.a)(te.a.mark((function e(t){var a,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.post("".concat("https://node-gql-practice.herokuapp.com","/uploadImages"),{image:t});case 3:a=e.sent,n=a.data,o(n),Q.b.info("Uploaded"),b(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),Q.b.error(e.t0.message),b(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),"base64")},id:"upload"})),r.a.createElement("form",{onSubmit:i},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",placeholder:"Enter Title",className:"form-control",id:"title",value:t,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{rows:"3",placeholder:"Write Something Here",className:"form-control",id:"content",value:a,onChange:function(e){return s(e.target.value)}})),r.a.createElement("button",{disabled:!t||!a||u,className:"btn btn-raised btn-success"},"Submit")))},tt=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(E.a)(l,2),o=s[0],i=s[1],u=Object(n.useState)(null),m=Object(E.a)(u,2),d=m[0],p=m[1],b=Object(n.useState)(!1),g=Object(E.a)(b,2),f=g[0],v=g[1],h=Object(ge.a)(Se,{update:function(e){}}),O=Object(E.a)(h,1)[0],j=function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),t.preventDefault(),e.prev=2,e.next=5,O({variables:{input:{title:a,content:o,image:d}}});case 5:Q.b.success("Post Created"),v(!1),c(""),i(""),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),Q.b.error(e.t0.message),console.log(),v(!1);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,f?r.a.createElement(M,null):r.a.createElement(et,{title:a,setTitle:c,content:o,image:d,setContent:i,setImage:p,handleSubmit:j}))},at=function(){var e=Object(f.g)()._id,t=Object(W.a)(A,{variables:{_id:e}}),a=t.data,c=t.loading,l=t.error;return Object(n.useEffect)((function(){l&&Q.b.error(l.message)}),[l]),r.a.createElement("div",{className:"container"},c?r.a.createElement(M,null):r.a.createElement("div",{className:"jumbotron"},r.a.createElement("img",{style:{width:"800px"},src:a.singlePost.image.url,alt:""}),r.a.createElement("h1",{className:"m-auto display-4"},a.singlePost.title),r.a.createElement("p",{className:"lead"},"By: ",r.a.createElement(v.b,{to:"/react-gql-practice"+"/users/".concat(a.singlePost.postedBy.username)},a.singlePost.postedBy.name)),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",{className:"lead"},a.singlePost.content)))},nt=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(E.a)(l,2),o=s[0],i=s[1],u=Object(n.useState)(null),m=Object(E.a)(u,2),d=m[0],p=m[1],b=Object(n.useState)(!1),g=Object(E.a)(b,2),v=g[0],h=g[1],O=Object(f.g)()._id,j=Object(W.a)(A,{variables:{_id:O}}),N=j.data,y=j.loading,w=j.error,x=Object(ge.a)(Pe),k=Object(E.a)(x,1)[0];Object(n.useEffect)((function(){w&&Q.b.error(w.message),N&&(console.log("setting initial data...."),c(N.singlePost.title),i(N.singlePost.content),N.singlePost.image.url.includes("placeholder")||p(N.singlePost.image))}),[N,w]);var S=function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),t.preventDefault(),e.prev=2,e.next=5,k({variables:{_id:O,input:{title:a,content:o,image:ze()(d,["__typename"])}},refetchQueries:[{query:R},{query:D}]});case 5:Q.b.success("Updated Post"),h(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),Q.b.error(e.t0.message),h(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h4",null,"Edit Post"),y||v?r.a.createElement(M,null):r.a.createElement(et,{title:a,setTitle:c,content:o,image:d,setContent:i,setImage:p,handleSubmit:S}))},rt=function(){var e=Object(f.g)().keyword,t=Object(W.a)($,{variables:{keyword:e}}),a=t.data,c=t.error,l=t.loading;return Object(n.useEffect)((function(){c&&Q.b.error(c.message)}),[c]),r.a.createElement("div",null,'Search Results for "',e,'"',l?r.a.createElement(M,null):a?r.a.createElement(h,{posts:a.searchPosts}):"")};var ct=function(){var e=Object(n.useContext)(ie).state,t=e.user,a=new p.a({uri:"".concat("wss://node-gql-practice.herokuapp.com/","/graphql"),options:{reconnect:!0,connectionParams:{authtoken:t?t.token:""}}}),c=Object(o.a)({uri:"".concat("https://node-gql-practice.herokuapp.com","/graphql")}),l=Object(g.a)((function(e,a){var n=a.headers;return{headers:Object(s.a)(Object(s.a)({},n),{},{authtoken:t?t.token:""})}})),E=Object(i.a)((function(e){var t=e.query,a=Object(b.a)(t);return"OperationDefinition"===a.kind&&"subscription"===a.operation}),a,l.concat(c)),v=new u.a({link:E,cache:new m.a});return r.a.createElement(d.a,{client:v},r.a.createElement(r.a.Fragment,null,r.a.createElement(de,null),r.a.createElement(Q.a,null),r.a.createElement("div",{className:"container-fluid p-5"},r.a.createElement(f.c,null,r.a.createElement(Ve,{exact:!0,path:"/react-gql-practice/login"},r.a.createElement(qe,null)),r.a.createElement(Ve,{exact:!0,path:"/react-gql-practice/register"},r.a.createElement(be,null)),r.a.createElement(Ve,{exact:!0,path:"/react-gql-practice/complete-register"},r.a.createElement(Ce,null)),r.a.createElement(Ve,{exact:!0,path:"/react-gql-practice/forgot-password"},r.a.createElement(Ie,null)),r.a.createElement(Fe,{path:"/react-gql-practice/dashboard"},r.a.createElement(Ke,null)),r.a.createElement(Fe,{path:"/react-gql-practice/create-post"},r.a.createElement(tt,null)),r.a.createElement(Fe,{path:"/react-gql-practice/edit-post/:_id"},r.a.createElement(nt,null)),r.a.createElement(f.a,{path:"/react-gql-practice/users/:username"},r.a.createElement(Ze,null)),r.a.createElement(f.a,{path:"/react-gql-practice/users"},r.a.createElement(Ye,null)),r.a.createElement(f.a,{path:"/react-gql-practice/posts/:_id"},r.a.createElement(at,null)),r.a.createElement(f.a,{path:"/react-gql-practice/search/:keyword"},r.a.createElement(rt,null)),r.a.createElement(f.a,{path:"/react-gql-practice/token"},e&&e.user&&e.user.token),r.a.createElement(f.a,{path:"/react-gql-practice/"},r.a.createElement(Z,null))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,{basename:"/react-gql-practice"},r.a.createElement(ue,null,r.a.createElement(ct,null)))),document.getElementById("root"))},50:function(e,t,a){e.exports={full:"Loader_full__Rnuvt",background:"Loader_background__XKUro",loaderContainer:"Loader_loaderContainer__1ehac",bounce:"Loader_bounce__2J07n",yellow:"Loader_yellow__3CWid",red:"Loader_red__2xz5W",blue:"Loader_blue__3EGtr",violet:"Loader_violet__1zwuB"}},90:function(e,t,a){"use strict";a.r(t),a.d(t,"USER_INFO",(function(){return s})),a.d(t,"POST_DATA",(function(){return o}));var n=a(18);function r(){var e=Object(n.a)(["\nfragment postData on Post {\n  _id,\n  title,\n  content,\n  postedBy {\n    _id\n    username,\n    name\n  },\n  image {\n    url\n    public_id\n  }\n}\n"]);return r=function(){return e},e}function c(){var e=Object(n.a)(["\nfragment userInfo on User {\n  _id\n  name\n  username\n  email\n  about\n  images {\n    url,\n    public_id\n  }\n}\n"]);return c=function(){return e},e}var l=a(26).gql,s=l(c()),o=l(r())}},[[160,1,2]]]);
//# sourceMappingURL=main.c1675dc6.chunk.js.map