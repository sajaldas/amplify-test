(this["webpackJsonpamplify-test"]=this["webpackJsonpamplify-test"]||[]).push([[0],{102:function(e,t,a){e.exports=a(502)},107:function(e,t,a){},108:function(e,t,a){},44:function(e,t){},502:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),o=a(94),s=a.n(o),l=(a(107),a(24)),i=a(25),c=a(27),m=a(26),u=a(28),g=(a(108),a(18)),d={aws_project_region:"ap-south-1",aws_cognito_identity_pool_id:"ap-south-1:3123af32-621c-448b-9673-dc7ec62ad7d7",aws_cognito_region:"ap-south-1",aws_user_pools_id:"ap-south-1_liUanytM7",aws_user_pools_web_client_id:"14m65ng79m89e58r1ls5iftoar",oauth:{}},h=a(38),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){console.log(e.target.id),a.setState(Object(h.a)({},e.target.id,e.target.value))},a.handleFormSubmit=function(){var e=a.state,t=e.username,n=e.email,r=e.password,o=e.signedUp,s=e.confirmationCode;o?g.a.confirmSignUp(t,s,{forceAliasCreation:!0}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})):g.a.signUp({username:t,password:r,attributes:{email:n}}).then((function(e){console.log("data = ",e),e.message?(console.log("error"),a.setState({errorMsg:e.message})):e.user&&(console.log("success"),a.setState({signedUp:!0}))})).catch((function(e){console.log("err = ",e),e.message&&(console.log("error"),a.setState({errorMsg:e.message}))}))},a.renderSignupForm=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"formrow"},r.a.createElement("div",{className:"msg"},a.state.errorMsg)),r.a.createElement("div",{className:"formrow"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",id:"username",onChange:a.handleChange})),r.a.createElement("div",{className:"formrow"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:a.handleChange})),r.a.createElement("div",{className:"formrow"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:a.handleChange})),r.a.createElement("div",{className:"formrow"},r.a.createElement("label",null,"Phone"),r.a.createElement("input",{type:"text",id:"phone",onChange:a.handleChange})),r.a.createElement("div",{className:"formrow"},r.a.createElement("label",null," "),r.a.createElement("input",{type:"button",id:"btnsubmit",value:"Sign Up",onClick:function(){return a.handleFormSubmit()}})))},a.renderSignupSuccess=function(){return r.a.createElement("div",null,"Signup Successful. please sign in to continue.")},a.state={username:"",email:"",password:"",confirmationCode:"",signedUp:!1,errorMsg:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"signupform"},r.a.createElement("form",null,this.state.signedUp?this.renderSignupSuccess():this.renderSignupForm()))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(h.a)({},e.target.id,e.target.value))},a.handleFormSubmit=function(){var e=a.state,t=e.email,n=e.password;g.a.signIn({username:t,password:n}).then((function(e){console.log("after login data = ",e),e.message?console.log("error"):e.username&&(console.log("success"),a.setState({signedIn:!0}))})).catch((function(e){console.log(e),e.message&&(console.log("error"),a.setState({errorMsg:e.message}))}))},a.state={email:"",password:"",signedIn:!1,errorMsg:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.state.signedIn?r.a.createElement("div",{className:"signupform"},r.a.createElement("form",null,r.a.createElement("div",null,"You are signed in!"))):r.a.createElement("div",{className:"signupform"},r.a.createElement("form",null,r.a.createElement("div",{className:"formrow"},r.a.createElement("div",{className:"msg"},this.state.errorMsg)),r.a.createElement("div",{className:"formrow"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"formrow"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"formrow"},r.a.createElement("label",null," "),r.a.createElement("input",{type:"button",id:"btnsubmit",value:"Sign In",onClick:function(){return e.handleFormSubmit()}}))))}}]),t}(n.Component);g.b.configure(d);var E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleFormToggle=function(){a.setState({showLoginForm:!a.state.showLoginForm})},a.state={showLoginForm:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.showLoginForm?r.a.createElement(f,null):r.a.createElement(p,null),r.a.createElement("div",{className:"toggleform"},r.a.createElement("a",{href:"#",onClick:this.handleFormToggle},this.state.showLoginForm?"No Account, Sign Up":"Have an accout, Sign In")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[102,1,2]]]);
//# sourceMappingURL=main.0bf5704c.chunk.js.map