(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{lBrD:function(e,t,o){"use strict";o.r(t),o.d(t,"ClavePageModule",function(){return O});var i=o("ofXK"),r=o("3Pt+"),a=o("TEn/"),n=o("tyNb"),s=o("mrSG"),c=o("fXoL"),l=o("fsfq"),d=o("oQG1"),b=o("fmoy");function u(e,t){if(1&e){const e=c.Nb();c.Mb(0,"div"),c.Mb(1,"ion-item",7),c.Mb(2,"ion-label",8),c.rc(3,"Contrase\xf1a Actual"),c.Lb(),c.Lb(),c.Mb(4,"ion-item",9),c.Mb(5,"ion-input",10),c.Ub("ngModelChange",function(t){return c.lc(e),c.Wb().valido=t}),c.Lb(),c.Lb(),c.Mb(6,"ion-button",11),c.Ub("click",function(){return c.lc(e),c.Wb().validar()}),c.rc(7,"Validar Contrase\xf1a"),c.Lb(),c.Lb()}if(2&e){const e=c.Wb();c.zb(5),c.dc("ngModel",e.valido)}}function h(e,t){1&e&&(c.Mb(0,"div",12),c.Kb(1,"ion-spinner",13),c.rc(2," Validando, por favor espere... "),c.Lb())}function p(e,t){if(1&e){const e=c.Nb();c.Mb(0,"div"),c.Mb(1,"ion-item",14),c.Mb(2,"ion-label",8),c.rc(3,"Escriba su contrase\xf1a"),c.Lb(),c.Lb(),c.Mb(4,"ion-item",15),c.Mb(5,"ion-input",16),c.Ub("ngModelChange",function(t){return c.lc(e),c.Wb().clave=t}),c.Lb(),c.Lb(),c.Mb(6,"ion-item",14),c.Mb(7,"ion-label",8),c.rc(8,"Confirmar la contrase\xf1a"),c.Lb(),c.Lb(),c.Mb(9,"ion-item",15),c.Mb(10,"ion-input",17),c.Ub("ngModelChange",function(t){return c.lc(e),c.Wb().confirmar=t}),c.Lb(),c.Lb(),c.Mb(11,"ion-button",11),c.Ub("click",function(){return c.lc(e),c.Wb().actualizar()}),c.rc(12,"Actualizar Contrase\xf1a"),c.Lb(),c.Lb()}if(2&e){const e=c.Wb();c.zb(5),c.dc("ngModel",e.clave),c.zb(5),c.dc("ngModel",e.confirmar)}}function f(e,t){1&e&&(c.Mb(0,"ion-item",29),c.Mb(1,"ion-label",8),c.rc(2,"PLACA DEL VEH\xcdCULO"),c.Lb(),c.Lb())}function m(e,t){if(1&e){const e=c.Nb();c.Mb(0,"ion-item",9),c.Mb(1,"ion-input",30),c.Ub("ngModelChange",function(t){return c.lc(e),c.Wb(2).placa=t}),c.Lb(),c.Lb()}if(2&e){const e=c.Wb(2);c.zb(1),c.dc("ngModel",e.placa)}}function g(e,t){if(1&e&&(c.Mb(0,"ion-select-option",31),c.rc(1),c.Lb()),2&e){const e=t.$implicit;c.ec("value",e.nombre),c.zb(1),c.sc(e.nombre)}}function M(e,t){if(1&e&&(c.Mb(0,"ion-select-option",31),c.rc(1),c.Lb()),2&e){const e=t.$implicit;c.ec("value",e.nombre),c.zb(1),c.sc(e.nombre)}}function v(e,t){if(1&e){const e=c.Nb();c.Mb(0,"ion-item",25),c.Mb(1,"ion-label",8),c.rc(2,"Selecciona la ciudad"),c.Lb(),c.Mb(3,"ion-select",26),c.Ub("ionChange",function(t){return c.lc(e),c.Wb(2).seleccionarCiudad(t)}),c.qc(4,M,2,2,"ion-select-option",27),c.Lb(),c.Lb()}if(2&e){const e=c.Wb(2);c.zb(3),c.dc("value",e.miciudad),c.zb(1),c.dc("ngForOf",e.ciudades)}}function E(e,t){if(1&e){const e=c.Nb();c.Mb(0,"ion-list"),c.Mb(1,"ion-item-divider",18),c.rc(2,"DATOS DEL USUARIO"),c.Lb(),c.Mb(3,"ion-item",19),c.Mb(4,"ion-label",8),c.rc(5,"NOMBRE"),c.Lb(),c.Lb(),c.Mb(6,"ion-item",9),c.Mb(7,"ion-input",20),c.Ub("ngModelChange",function(t){return c.lc(e),c.Wb().ncompleto=t}),c.Lb(),c.Lb(),c.qc(8,f,3,0,"ion-item",21),c.qc(9,m,2,1,"ion-item",22),c.Mb(10,"ion-item",19),c.Mb(11,"ion-label",8),c.rc(12,"TEL\xc9FONO O CELULAR"),c.Lb(),c.Lb(),c.Mb(13,"ion-item",9),c.Mb(14,"ion-input",23),c.Ub("ngModelChange",function(t){return c.lc(e),c.Wb().tel=t}),c.Lb(),c.Lb(),c.Mb(15,"ion-item",19),c.Mb(16,"ion-label",8),c.rc(17,"CORREO ELECTR\xd3NICO"),c.Lb(),c.Lb(),c.Mb(18,"ion-item",9),c.Mb(19,"ion-input",24),c.Ub("ngModelChange",function(t){return c.lc(e),c.Wb().correo=t}),c.Lb(),c.Lb(),c.Mb(20,"ion-item",19),c.Mb(21,"ion-label",8),c.rc(22,"PAIS"),c.Lb(),c.Lb(),c.Mb(23,"ion-item",25),c.Mb(24,"ion-label",8),c.rc(25,"Selecciona el Pa\xeds"),c.Lb(),c.Mb(26,"ion-select",26),c.Ub("ionChange",function(t){return c.lc(e),c.Wb().listarCiudades(t)}),c.qc(27,g,2,2,"ion-select-option",27),c.Lb(),c.Lb(),c.Mb(28,"ion-item",19),c.Mb(29,"ion-label",8),c.rc(30,"CIUDAD"),c.Lb(),c.Lb(),c.qc(31,v,5,2,"ion-item",28),c.Mb(32,"ion-button",11),c.Ub("click",function(){return c.lc(e),c.Wb().guardar()}),c.rc(33,"GUARDAR DATOS"),c.Lb(),c.Lb()}if(2&e){const e=c.Wb();c.zb(7),c.dc("ngModel",e.ncompleto),c.zb(1),c.dc("ngIf","USER_ROLE"===e.role),c.zb(1),c.dc("ngIf","USER_ROLE"===e.role),c.zb(5),c.dc("ngModel",e.tel),c.zb(5),c.dc("ngModel",e.correo),c.zb(7),c.dc("value",e.pais),c.zb(1),c.dc("ngForOf",e.paises),c.zb(4),c.dc("ngIf",e.ciudad)}}const L=[{path:"",component:(()=>{class e{constructor(e,t,o){this.almacenamiento=e,this.apiUsuario=t,this.toast=o,this.validado=!1,this.clave="",this.confirmar="",this.valido="",this.vl=!1,this.paises=[],this.ciudades=[],this.ciudad=!1,this.load=!1,this.pais="",this.miciudad="",this.correo="",this.tel=0,this.ncompleto="",this.placa="",this.cargatodo=!1,this.role=""}ngOnInit(){}ionViewWillEnter(){this.datos()}refrescando(e){this.cargatodo=!1,this.datos().then(()=>{e.detail.complete()}).catch(()=>{e.detail.complete()})}validar(){return Object(s.a)(this,void 0,void 0,function*(){this.vl=!0;const e=yield this.almacenamiento.obtenerToken();e&&this.apiUsuario.validarClave(e.token,{clave:this.valido}).subscribe(e=>{e.exe?this.validado=!0:this.toast.toastError("la contrase\xf1a no es correcta"),this.vl=!1},e=>{this.vl=!1,this.toast.toastError("No se pudo validar la contrase\xf1a, int\xe9ntelo m\xe1s tarde")})})}actualizar(){return Object(s.a)(this,void 0,void 0,function*(){if(this.clave===this.confirmar&&""!==this.clave&&""!==this.confirmar){const e=yield this.almacenamiento.obtenerToken();e&&this.apiUsuario.editarClaves(e.token,{clave:this.confirmar}).subscribe(e=>{e.exe?(this.validado=!1,this.toast.toastExitoso("Contrase\xf1a actualizada")):this.toast.toastError("No se pudo actualizar la contrase\xf1a, int\xe9ntelo m\xe1s tarde")},e=>{this.toast.toastError("No se pudo actualizar la contrase\xf1a, int\xe9ntelo m\xe1s tarde")})}else this.toast.toastError("Las contrase\xf1as no co\xednciden")})}datos(){return Object(s.a)(this,void 0,void 0,function*(){const e=yield this.almacenamiento.obtenerToken();e&&(this.role=e.role,this.apiUsuario.usuarioDatos(e.token).subscribe(e=>{e.exe?(this.ncompleto=e.response.nombrecompleto,this.tel=e.response.tel,this.correo=e.response.correo,this.placa=e.response.placa?e.response.placa:"",this.pais=e.response.pais,this.miciudad=e.response.ciudad,this.cargatodo=!0,this.listarPaises()):this.toast.toastError("No se pudo traer los datos del usuario, int\xe9ntelo m\xe1s tarde")},e=>{this.toast.toastError("No se pudo traer los datos del usuario, int\xe9ntelo m\xe1s tarde")}))})}listarPaises(){this.apiUsuario.listarPaises().subscribe(e=>{e.exe?(this.paises=e.response,""!==this.pais&&this.listarCiudades({detail:{value:this.pais}})):this.paises.push("Colombia")},e=>{this.paises.push("Colombia")})}listarCiudades(e){this.pais=e.detail.value,this.miciudad=""!==this.miciudad?this.miciudad:"";const t=this.paises.filter(e=>e.nombre===this.pais)[0]._id;this.apiUsuario.listarCiudades(t).subscribe(e=>{e.exe?(this.ciudades=e.response,this.ciudad=!0):this.toast.toastError("No se pudo traer las ciudades, intente registrarse m\xe1s tarde")},e=>{this.toast.toastError("No se pudo traer las ciudades, intente registrarse m\xe1s tarde")})}seleccionarCiudad(e){this.miciudad=e.detail.value}guardar(){return Object(s.a)(this,void 0,void 0,function*(){const e=yield this.almacenamiento.obtenerToken();e&&(this.role=e.role,this.apiUsuario.editarUusuario(e.token,{ciudad:this.miciudad,pais:this.pais,placa:this.placa,nombrecompleto:this.ncompleto,telefono:this.tel,correo:this.correo}).subscribe(e=>{e.exe?this.toast.Especial("Uusario editado correctamente"):this.toast.toastError("No se pudo editar los datos del usuario, int\xe9ntelo m\xe1s tarde")},e=>{this.toast.toastError("No se pudo editar los datos del usuario, int\xe9ntelo m\xe1s tarde")}))})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(l.a),c.Jb(d.a),c.Jb(b.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-clave"]],decls:13,vars:4,consts:[["color","oscuro"],["slot","start","icon","chevron-back-outline","defaultHref","/central/menu"],[1,"ion-padding"],["slot","fixed","pullFactor","0.5","pullMin","50","pullMax","150",3,"ionRefresh"],["pullingIcon","arrow-dropdown","refreshingSpinner","circles"],[4,"ngIf"],["class","fl",4,"ngIf"],["lines","none","mode","md",1,"ion-margin-top"],[1,"ion-text-wrap"],["lines","none","mode","ios"],["placeholder","Escribe tu contrase\xf1a","type","password",3,"ngModel","ngModelChange"],["color","barra","expand","block","mode","ios",3,"click"],[1,"fl"],["name","crescent","color","oscuro"],["lines","none","mode","md",1,"sinfondo","ion-margin-top"],["color","light","lines","none","mode","ios",1,"campo","ion-margin-top"],["placeholder","Escriba nueva contrase\xf1a","type","password",3,"ngModel","ngModelChange"],["placeholder","Confirmar nueva contrase\xf1a","type","password",3,"ngModel","ngModelChange"],["color","success"],["color","light","lines","none","mode","md",1,"ion-margin-top"],["placeholder","Escribe tu Nombre","type","text",3,"ngModel","ngModelChange"],["lines","none","class"," ion-margin-top","mode","md","color","light",4,"ngIf"],["lines","none","mode","ios",4,"ngIf"],["placeholder","Digita tu n\xfamero tel\xe9fono o celular","type","number",3,"ngModel","ngModelChange"],["placeholder","Escribe tu correo","type","text",3,"ngModel","ngModelChange"],["lines","none","mode","md",1,"noborder"],["okText","Aceptar","cancelText","Cancelar",3,"value","ionChange"],[3,"value",4,"ngFor","ngForOf"],["lines","none","class"," noborder","mode","md",4,"ngIf"],["lines","none","mode","md","color","light",1,"ion-margin-top"],["placeholder","Escribe la placa del veh\xedculo","type","text",3,"ngModel","ngModelChange"],[3,"value"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar",0),c.Kb(2,"ion-back-button",1),c.Mb(3,"ion-title"),c.rc(4,"Seguridad"),c.Lb(),c.Lb(),c.Lb(),c.Mb(5,"ion-content",2),c.Mb(6,"ion-refresher",3),c.Ub("ionRefresh",function(e){return t.refrescando(e)}),c.Kb(7,"ion-refresher-content",4),c.Lb(),c.Mb(8,"ion-list"),c.qc(9,u,8,1,"div",5),c.qc(10,h,3,0,"div",6),c.qc(11,p,13,2,"div",5),c.Lb(),c.qc(12,E,34,8,"ion-list",5),c.Lb()),2&e&&(c.zb(9),c.dc("ngIf",!t.validado),c.zb(1),c.dc("ngIf",!t.validado&&t.vl),c.zb(1),c.dc("ngIf",t.validado),c.zb(1),c.dc("ngIf",t.cargatodo))},directives:[a.z,a.jb,a.g,a.h,a.hb,a.t,a.P,a.Q,a.L,i.j,a.F,a.K,a.E,a.wb,r.i,r.k,a.j,a.bb,a.G,a.qb,a.W,a.vb,i.i,a.X],styles:[".fl[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:5px 0}ion-spinner[_ngcontent-%COMP%]{margin-right:5px}"]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[n.i.forChild(L)],n.i]}),e})(),O=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[i.b,r.e,a.kb,C]]}),e})()},oQG1:function(e,t,o){"use strict";o.d(t,"a",function(){return m});var i=o("tk/3"),r=o("PqYM"),a=o("Cfvw"),n=o("coGc"),s=o("lJxs"),c=o("IzEk"),l=o("MtjB"),d=o("JIr8"),b=o("AytR"),u=o("fXoL"),h=o("B7Rs"),p=o("fsfq"),f=o("TEn/");let m=(()=>{class e{constructor(e,t,o,i){this.http=e,this.transfer=t,this.almacenamiento=o,this.navCtrl=i}hanflerError(e){let t=0;return e.pipe(Object(n.a)(()=>Object(r.a)(5e3)),Object(s.a)(e=>{if(t++,console.log("Entramos a intentos"),e instanceof ErrorEvent){if(3===t)throw new Error("Error de Red")}else{if(!(e instanceof ProgressEvent))throw 404===e.status?new Error(" al realizar la solicictud "):401===e.status?(this.almacenamiento.terminarPartida().then(()=>{this.navCtrl.navigateRoot("/home")}),new Error("No tiene permisos para realizar la petici\xf3n ")):(console.log(e,"Error de servidor"),new Error(" No se pudo realizar la petici\xf3n, intentalo m\xe1s tarde "));if(3===t)throw new Error("Error de Red")}}),Object(c.a)(3))}registrar(e){return this.http.post(`${b.a}/usuarios`,e).pipe(Object(s.a)(e=>e.exe?(e.response.exe=e.exe,e.response.token=e.token,e.response):e),Object(l.a)(e=>this.hanflerError(e)))}usuario(e){return this.http.post(`${b.a}/usuarios/unico`,{buscar:e}).pipe(Object(l.a)(e=>this.hanflerError(e)))}iniciarPartida(e,t){const o={headers:new i.c({"x-dispositivoID":t})};return this.http.post(`${b.a}/login`,e,o).pipe(Object(s.a)(e=>(console.log(e),e.exe?(e.response.exe=e.exe,e.response.token=e.token,e.response):e.exe)),Object(l.a)(e=>this.hanflerError(e)))}fotoPerfilUsuarioMoto(e,t,o){const i={fileKey:"archivo",httpMethod:"PUT",headers:{"x-token":t},params:{tipo:o}},r=this.transfer.create();return Object(a.a)(r.upload(e,`${b.a}/upload`,i)).pipe(Object(d.a)(e=>{throw console.log("No se pudo subir la imagen "),new Error("No se pudo subir la imagen ")}))}fotoPortada(e,t,o){const i={fileKey:"archivo",httpMethod:"PUT",headers:{"x-token":t},params:{old:o}},r=this.transfer.create();return Object(a.a)(r.upload(e,`${b.a}/upload/portada/`,i)).pipe(Object(d.a)(e=>{throw console.log("No se pudo subir la imagen "),new Error("No se pudo subir la imagen ")}))}viewImagen(e){const t={headers:new i.c({"x-token":e})};return this.http.get(`${b.a}/ver`,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}buscarUsuario(e,t){const o={headers:new i.c({"x-token":t})};return this.http.get(`${b.a}/usuarios/${e}`,o).pipe(Object(l.a)(e=>this.hanflerError(e)))}cerrar(e){const t={headers:new i.c({"x-token":e})};return this.http.put(`${b.a}/usuarios/cerrar/`,{},t).pipe(Object(l.a)(e=>this.hanflerError(e)))}usuarioDatos(e){const t={headers:new i.c({"x-token":e})};return this.http.put(`${b.a}/usuarios/uno/`,{},t).pipe(Object(l.a)(e=>this.hanflerError(e)))}editarUusuario(e,t){const o={headers:new i.c({"x-token":e})};return this.http.put(`${b.a}/usuarios/editar/uno/`,t,o).pipe(Object(l.a)(e=>this.hanflerError(e)))}buscarPerfilUsuario(e,t){const o={headers:new i.c({"x-token":t})};return this.http.get(`${b.a}/usuarios/perfil/${e}`,o).pipe(Object(l.a)(e=>this.hanflerError(e)))}traerMisNotificaciones(e,t){const o={headers:new i.c({"x-token":e,"x-desde":t.toString()})};return this.http.get(`${b.a}/notificaciones/misnotificaciones/`,o).pipe(Object(l.a)(e=>this.hanflerError(e)))}notiCantidad(e){const t={headers:new i.c({"x-token":e})};return this.http.get(`${b.a}/notificaciones/numero/`,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}ActualizarNotificaciones(e,t){const o={headers:new i.c({"x-token":e})};return this.http.put(`${b.a}/notificaciones/misnotificaciones/cambiarestado/`,{id:t},o).pipe(Object(l.a)(e=>this.hanflerError(e)))}validarClave(e,t){const o={headers:new i.c({"x-token":e})};return this.http.put(`${b.a}/usuarios/claves/`,t,o).pipe(Object(l.a)(e=>this.hanflerError(e)))}editarClaves(e,t){const o={headers:new i.c({"x-token":e})};return this.http.put(`${b.a}/usuarios/claves/editar`,t,o).pipe(Object(l.a)(e=>this.hanflerError(e)))}editarClaves2(e){return this.http.put(`${b.a}/usuarios/claves/editar/dos`,e).pipe(Object(l.a)(e=>this.hanflerError(e)))}listarPaises(){return this.http.get(`${b.a}/paises`).pipe(Object(l.a)(e=>this.hanflerError(e)))}listarCiudades(e){const t={headers:new i.c({"x-pais":e})};return this.http.get(`${b.a}/ciudad`,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}CodigoComprobar(e){return this.http.put(`${b.a}/codigos`,e).pipe(Object(l.a)(e=>this.hanflerError(e)))}EditarCodigo(e){return this.http.put(`${b.a}/codigos/cambiar`,e).pipe(Object(l.a)(e=>this.hanflerError(e)))}negocios(){return this.http.get(`${b.a}/tiponegocio`).pipe(Object(l.a)(e=>this.hanflerError(e)))}modulos(e){const t={headers:new i.c({"x-token":e})};return this.http.get(`${b.a}/modulos`,t).pipe(Object(l.a)(e=>this.hanflerError(e)))}modulosTALLER(e,t){const o={headers:new i.c({"x-token":e})};return this.http.post(`${b.a}/modulos`,t,o).pipe(Object(l.a)(e=>this.hanflerError(e)))}Cambio(e){return this.http.post(`${b.a}/cambio`,e).pipe(Object(l.a)(e=>this.hanflerError(e)))}Validar(e){return this.http.put(`${b.a}/cambio`,e).pipe(Object(l.a)(e=>this.hanflerError(e)))}}return e.\u0275fac=function(t){return new(t||e)(u.Qb(i.a),u.Qb(h.a),u.Qb(p.a),u.Qb(f.pb))},e.\u0275prov=u.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);