(this.webpackJsonpiweblens=this.webpackJsonpiweblens||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(59),i=a.n(s),o=(a(81),a(14)),c=a(15),l=a(18),m=a(17),u=(a(82),a(83),a(6)),d=a.n(u),h=a(22),g=a(24),p=a(29),f=a.n(p),v=a(70),b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).clearErrorState=function(){n.setState({errors:{cognito:null,blankfield:!1}})},n.handleSubmit=function(){var e=Object(g.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("".concat(n.state.username)),t.preventDefault(),e.prev=2,e.next=5,v.a.signIn(n.state.username,n.state.password);case 5:a=e.sent,console.log(a),n.props.history.push("./welcome"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),r=null,r=e.t0.message?e.t0:{message:e.t0},n.setState({errors:Object(h.a)(Object(h.a)({},n.state.errors),{},{cognito:r})});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),n.handleUsernameChange=function(e){n.setState({username:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.state={username:"",password:"",errors:{cognito:null,blankfield:!1}},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"base-container",ref:this.props.containerRef},r.a.createElement("div",{className:"header"},"Login"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:f.a,alt:"login"}),r.a.createElement("div",{className:"header"},"Welcome to iWebLens")),r.a.createElement("div",{className:"header"},"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.username,onChange:this.handleUsernameChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"pasword",placeholder:"password",value:this.state.password,onChange:this.handlePasswordChange})),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{type:"submit",className:"btn"},"Login"))))))}}]),a}(n.Component);var E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).clearErrorState=function(){n.setState({errors:{cognito:null,blankfield:!1}})},n.handleSubmit=function(){var e=Object(g.a)(d.a.mark((function e(t){var a,r,s,i,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("".concat(n.state.username)),t.preventDefault(),n.setState({isLoading:!0}),a=n.state,r=a.username,s=a.email,i=a.password,e.prev=4,e.next=7,v.a.signUp({username:r,password:i,attributes:{email:s}});case 7:o=e.sent,console.log(o),n.setState({newUser:o}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(4),c=null,c=e.t0.message?e.t0:{message:e.t0},n.setState({errors:Object(h.a)(Object(h.a)({},n.state.errors),{},{cognito:c})});case 17:n.setState({isLoading:!1});case 18:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),n.handleConfirmationSubmit=function(){var e=Object(g.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.setState({isLoading:!0}),e.prev=2,e.next=5,v.a.confirmSignUp(n.state.username,n.state.code);case 5:return e.next=7,v.a.signIn(n.state.email,n.state.password);case 7:n.props.history.push("/"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),alert(e.t0.message),n.setState({isLoading:!1});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),n.handleUsernameChange=function(e){n.setState({username:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.handleEmailChange=function(e){n.setState({email:e.target.value})},n.handleCodeChange=function(e){n.setState({code:e.target.value})},n.state={isLoading:!1,username:"",password:"",email:"",code:"",newUser:null,errors:{cognito:null,blankfield:!1}},n}return Object(c.a)(a,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"renderConfirmationForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleConfirmationSubmit},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmationcode"},"Confirmation Code"),r.a.createElement("input",{type:"text",name:"code",placeholder:"code",value:this.state.code,onChange:this.handleCodeChange}))),r.a.createElement("button",{type:"submit",isLoading:this.state.isLoading},"Submit"))}},{key:"renderForm",value:function(){return r.a.createElement("div",{className:"base-container",ref:this.props.containerRef},r.a.createElement("div",{className:"header"},"Login"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:f.a,alt:"register"}),r.a.createElement("div",{className:"header"},"Welcome to iWebLens")),r.a.createElement("div",{className:"header"},"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.username,onChange:this.handleUsernameChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.email,onChange:this.handleEmailChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("p",null,"Password require Lowecase, uppercase and number"),r.a.createElement("input",{type:"password",name:"pasword",placeholder:"password",value:this.state.password,onChange:this.handlePasswordChange})),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{type:"submit",className:"btn"},"Register"))))))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Signup"},null===this.state.newUser?this.renderForm():this.renderConfirmationForm())}}]),a}(r.a.Component),w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLogginActive:!0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.rightSide.classList.add("right")}},{key:"changeState",value:function(){this.state.isLogginActive?(this.rightSide.classList.remove("right"),this.rightSide.classList.add("left")):(this.rightSide.classList.remove("left"),this.rightSide.classList.add("right")),this.setState((function(e){return{isLogginActive:!e.isLogginActive}}))}},{key:"render",value:function(){var e=this,t=this.state.isLogginActive,a=t?"Register":"Login",n=t?"login":"register";return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"container",ref:function(t){return e.container=t}},t&&r.a.createElement(b,{containerRef:function(t){return e.current=t}}),!t&&r.a.createElement(E,{containerRef:function(t){return e.current=t}})),r.a.createElement(S,{current:a,currentActive:n,containerRef:function(t){return e.rightSide=t},onClick:this.changeState.bind(this)})))}}]),a}(r.a.Component),S=function(e){return r.a.createElement("div",{className:"right-side",ref:e.containerRef,onClick:e.onClick},r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"text"},e.current)))},C=w,N=a(27);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));N.default.configure({Auth:{mandatorySignId:!0,region:"us-east-1",userPoolId:"us-east-1_gOSIRZBy7",userPoolWebClientId:"2ho6qk4plnut1fb42921l7s0qa"}}),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){e.exports=a.p+"static/media/user.8aea2cbc.svg"},76:function(e,t,a){e.exports=a(140)},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.4fc3f184.chunk.js.map