(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{266:function(e,t,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("deae4e90",content,!0,{sourceMap:!1})},268:function(e,t,n){"use strict";n(266)},269:function(e,t,n){var r=n(40)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.text-contact{\n  overflow:hidden;\n  border-right:.15em solid orange;\n  white-space:nowrap;\n  margin:0 auto;\n  letter-spacing:.15em;\n  -webkit-animation:typing 3.5s steps(40),blink-caret .75s step-end infinite;\n          animation:typing 3.5s steps(40),blink-caret .75s step-end infinite\n}\n@-webkit-keyframes typing{\n0%{\n    width:0\n}\nto{\n    width:100%\n}\n}\n@keyframes typing{\n0%{\n    width:0\n}\nto{\n    width:100%\n}\n}\n@-webkit-keyframes blink-caret{\n0%,to{\n    border-color:transparent\n}\n50%{\n    border-color:orange\n}\n}\n@keyframes blink-caret{\n0%,to{\n    border-color:transparent\n}\n50%{\n    border-color:orange\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},270:function(e,t,n){"use strict";n.r(t);var r=n(23);n(36);const o={_origin:"https://api.emailjs.com"},l=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class c{constructor(e){this.status=e.status,this.text=e.responseText}}const m=(e,data,t={})=>new Promise(((n,r)=>{const l=new XMLHttpRequest;l.addEventListener("load",(({target:e})=>{const t=new c(e);200===t.status||"OK"===t.text?n(t):r(t)})),l.addEventListener("error",(({target:e})=>{r(new c(e))})),l.open("POST",o._origin+e,!0),Object.keys(t).forEach((e=>{l.setRequestHeader(e,t[e])})),l.send(data)}));var d=(e,t,form,n)=>{const r=n||o._userID,c=(form=>{let e;if(e="string"==typeof form?document.querySelector(form):form,!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e})(form);l(r,e,t);const d=new FormData(c);return d.append("lib_version","3.2.0"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",r),m("/api/v1.0/email/send-form",d)},v={data:function(){return{name:"",email:"",message:""}},methods:{sendEmail:function(e){var t=this;d("my_web","template_0vkl9vp",e.target,"user_fAY0dsqhd5zpHFYDhkMD6",{name:this.name,email:this.email,message:this.message,from_name:this.name}).then((function(){t.$vs.notification({color:"#ffa500",title:"¡Mensaje enviado!",text:"El mensaje se ha enviado correctamente."}),t.name="",t.email="",t.message="",t.$router.push({path:"/"})})).catch((function(e){var n;t.$vs.notification((n={title:"Documentation Vuesax 4.0+",color:"error"},Object(r.a)(n,"title","¡Mensaje enviado!"),Object(r.a)(n,"text","Ocurrio un problema al enviar el mensaje."),n))}))}}},f=(n(268),n(31)),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col justify-center items-center mt-10"},[e._m(0),e._v(" "),n("p",{staticClass:"text-1xl"},[e._v("¡enviame un correo si estas interesado!")]),e._v(" "),n("div",{staticClass:"mt-5"},[n("form",{staticClass:"flex flex-col justify-center items-center",attrs:{method:"POST"},on:{submit:function(t){return t.preventDefault(),e.sendEmail.apply(null,arguments)}}},[n("label",{staticClass:"font-extrabold text-1xl mb-2"},[e._v("Nombre")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"\n          text-center\n          p-2\n          border-2 border-opacity-90 border-black\n          rounded-xl\n        ",attrs:{type:"text",name:"name",placeholder:"Ingresa tu nombre"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("label",{staticClass:"font-extrabold text-1xl mt-5 mb-2"},[e._v("Correo electrónico")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"\n          text-center\n          p-2\n          border-2 border-opacity-90 border-black\n          rounded-xl\n        ",attrs:{type:"email",name:"email",placeholder:"Ingresa tu email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("label",{staticClass:"font-extrabold text-1xl mt-5 mb-2"},[e._v("Mensaje")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"\n          text-center\n          p-2\n          border-2 border-opacity-90 border-black\n          rounded-xl\n        ",attrs:{name:"message",cols:"30",rows:"5",placeholder:"Hola!, me encantaría hablar contigo..."},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),n("input",{staticClass:"\n          hover:cursor-pointer\n          px-24\n          py-3\n          rounded-xl\n          bg-orange\n          text-white\n          mt-10\n        ",attrs:{type:"submit",value:"Enviar"}})])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-auto"},[n("h1",{staticClass:"font-bold text-3xl text-contact"},[e._v("\n      Ideas,proyectos,trabajo etc...\n    ")])])}],!1,null,null,null);t.default=component.exports}}]);