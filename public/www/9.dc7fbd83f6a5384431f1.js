(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/cRh":function(t,e,i){"use strict";i.d(e,"a",function(){return s});var o=i("wd/R"),n=i("fXoL");let s=(()=>{class t{transform(t){return o.locale("es"),o(t).format("LLLL")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Ib({name:"fecha",type:t,pure:!0}),t})()},"5EfH":function(t,e,i){"use strict";i.r(e),i.d(e,"CitasPageModule",function(){return q});var o=i("ofXK"),n=i("3Pt+"),s=i("TEn/"),r=i("tyNb"),a=i("mrSG"),c=i("fXoL"),l=i("fsfq"),b=i("fmoy"),d=i("HavB");const h=[{path:"",component:(()=>{class t{constructor(t,e,i,o,n){this.almacenamiento=t,this.router=e,this.active=i,this.toast=o,this.apiPedido=n}ngOnInit(){}ionViewWillEnter(){this.crear()}crear(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiPedido.consultarChat(t.token,{id:this.active.snapshot.paramMap.get("id")}).subscribe(t=>{t.exe?this.almacenamiento.insertarChat(t.response[0]).then(()=>{this.router.navigate(["/central/chats/chat"])}).catch(()=>{this.router.navigate(["/central/menu"]),this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")}):this.toast.toastError("No se pudo traer la informaci\xf3n, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo traer la informaci\xf3n, int\xe9ntelo m\xe1s tarde")})})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(l.a),c.Jb(r.g),c.Jb(r.a),c.Jb(b.a),c.Jb(d.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-citas"]],decls:6,vars:0,consts:[["scrollEvents","true"],["contenido",""],["name","crescent","color","barra"]],template:function(t,e){1&t&&(c.Mb(0,"ion-content",0,1),c.Mb(2,"div"),c.Kb(3,"ion-spinner",2),c.Mb(4,"h3"),c.rc(5,"Cargando..."),c.Lb(),c.Lb(),c.Lb())},directives:[s.t,s.bb],styles:["div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:30px!important;font-weight:300;text-align:center}"]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(h)],r.i]}),t})();var p=i("wd/R"),f=i("R0Ic"),m=i("AQLj"),g=i("W7Eg"),v=i("Y6Il"),M=i("/cRh");const O=["slide"];function j(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-buttons",5),c.Mb(1,"ion-button",6),c.Ub("click",function(){return c.lc(t),c.Wb(2).descartar()}),c.Kb(2,"ion-icon",7),c.Lb(),c.Lb()}}function k(t,e){if(1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar",3),c.Mb(2,"ion-title"),c.rc(3,"Creando nuevas citas"),c.Lb(),c.qc(4,j,3,0,"ion-buttons",4),c.Lb(),c.Lb()),2&t){const t=c.Wb();c.zb(4),c.dc("ngIf","chat"!==t.type)}}function L(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar",8),c.Mb(2,"ion-buttons",9),c.Mb(3,"ion-button",6),c.Ub("click",function(){return c.lc(t),c.Wb().descartar()}),c.Kb(4,"ion-icon",7),c.Lb(),c.Lb(),c.Mb(5,"ion-title"),c.rc(6,"Fotos y V\xeddeos"),c.Lb(),c.Lb(),c.Lb()}}function w(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar",3),c.Mb(2,"ion-buttons",9),c.Mb(3,"ion-button",6),c.Ub("click",function(){return c.lc(t),c.Wb().descartar()}),c.Kb(4,"ion-icon",7),c.Lb(),c.Lb(),c.Mb(5,"ion-title"),c.rc(6,"Carpeta de Citas"),c.Lb(),c.Lb(),c.Lb()}}function y(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-item",23),c.Ub("press",function(){c.lc(t);const i=e.$implicit;return c.Wb(3).opciones(i.usuarioReceptor.nombrecompleto)})("click",function(){c.lc(t);const i=e.$implicit;return c.Wb(3).crear(i)}),c.Mb(1,"ion-avatar",24),c.Kb(2,"img",25),c.Lb(),c.Mb(3,"ion-label",26),c.Mb(4,"div"),c.rc(5),c.Lb(),c.Mb(6,"div"),c.rc(7),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=e.$implicit;c.zb(2),c.fc("src","https://motocaliapp.com/",t.avatar,"",c.mc),c.zb(3),c.sc(t.usuarioReceptor.nombrecompleto),c.zb(2),c.sc(t.usuarioReceptor.nombreusuario)}}function C(t,e){if(1&t){const t=c.Nb();c.Mb(0,"div",12),c.Mb(1,"ion-slides",null,13),c.Mb(3,"ion-slide"),c.Mb(4,"ion-grid",14),c.Mb(5,"ion-row"),c.Mb(6,"ion-col",15),c.Kb(7,"ion-searchbar",16),c.Lb(),c.Mb(8,"ion-col",15),c.Kb(9,"div",12),c.Lb(),c.Lb(),c.Mb(10,"ion-row"),c.Mb(11,"ion-col",15),c.Mb(12,"ion-list"),c.qc(13,y,8,3,"ion-item",17),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(14,"ion-slide",18),c.Mb(15,"ion-grid",14),c.Mb(16,"ion-row"),c.Mb(17,"ion-col",15),c.Mb(18,"h3",19),c.rc(19),c.Lb(),c.Lb(),c.Lb(),c.Mb(20,"ion-row"),c.Mb(21,"ion-col",20),c.Mb(22,"ion-button",21),c.Ub("click",function(){return c.lc(t),c.Wb(2).cancelar()}),c.rc(23,"Cancelar "),c.Lb(),c.Lb(),c.Mb(24,"ion-col",20),c.Mb(25,"ion-button",22),c.Ub("click",function(){return c.lc(t),c.Wb(2).generarTicket()}),c.rc(26,"Generar "),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=c.Wb(2);c.zb(13),c.dc("ngForOf",t.listaTalleres),c.zb(6),c.tc("Creando un nuevo turno para ",t.usuario,"")}}function x(t,e){if(1&t&&(c.Mb(0,"ion-content",10),c.qc(1,C,27,2,"div",11),c.Kb(2,"div"),c.Lb()),2&t){const t=c.Wb();c.zb(1),c.dc("ngIf","buscar"===t.vista)}}function E(t,e){if(1&t&&c.Kb(0,"app-video",30),2&t){const t=c.Wb(2);c.fc("url","https://motocaliapp.com/Citas/",t.urlArchivo,"")}}function P(t,e){if(1&t&&(c.Mb(0,"ion-slides",31),c.Mb(1,"ion-slide"),c.Kb(2,"img",32),c.Lb(),c.Lb()),2&t){const t=c.Wb(2);c.dc("options",t.slideOpt),c.zb(2),c.fc("src","https://motocaliapp.com/Citas/",t.urlArchivo,"",c.mc)}}function z(t,e){if(1&t&&(c.Mb(0,"ion-content",27),c.qc(1,E,1,1,"app-video",28),c.qc(2,P,3,2,"ion-slides",29),c.Lb()),2&t){const t=c.Wb();c.zb(1),c.dc("ngIf","video"===t.tipoArchivo),c.zb(1),c.dc("ngIf","imagen"===t.tipoArchivo)}}const I=function(t,e,i){return{"estado-amarillo ":t,"estado-azul ":e,"estado-verde ":i}};function T(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-item-sliding"),c.Mb(1,"ion-item",35),c.Ub("click",function(){c.lc(t);const i=e.$implicit;return c.Wb(2).escogerChat(i._id)}),c.Mb(2,"ion-avatar",36),c.Kb(3,"img",37),c.Lb(),c.Mb(4,"ion-label",26),c.Mb(5,"strong",38),c.rc(6),c.Lb(),c.Mb(7,"p"),c.rc(8),c.Lb(),c.rc(9),c.Xb(10,"fecha"),c.Lb(),c.Kb(11,"div",39),c.Lb(),c.Mb(12,"ion-item-options",40),c.Mb(13,"ion-item-option",16),c.Kb(14,"ion-icon",41),c.Lb(),c.Mb(15,"ion-item-option",42),c.Kb(16,"ion-icon",43),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=e.$implicit;c.zb(3),c.fc("src","https://motocaliapp.com/",t.imagenTaller,"",c.mc),c.zb(3),c.sc(t.nombrecompleto),c.zb(2),c.tc("@",t.nombreusuario," - Estado pendiente"),c.zb(1),c.tc("Cita creada el ",c.Yb(10,5,t.fechainicio)," "),c.zb(2),c.dc("ngClass",c.jc(7,I,"PENDIENTE"===t.estado,"EN PROGRESO"===t.estado,"TERMINADO"===t.estado))}}function _(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-content",10),c.Mb(1,"div",12),c.Mb(2,"ion-searchbar",33),c.Ub("ionChange",function(e){return c.lc(t),c.Wb().filtro(e)}),c.Lb(),c.Lb(),c.Mb(3,"ion-list"),c.qc(4,T,17,11,"ion-item-sliding",34),c.Xb(5,"miFiltro"),c.Lb(),c.Lb()}if(2&t){const t=c.Wb();c.zb(4),c.dc("ngForOf",c.Zb(5,1,t.citas,t.texto))}}p.locale("es");const $=[{path:"",component:(()=>{class t{constructor(t,e,i,o,n,s,r){this.modalCtrl=t,this.actionSheetCtrl=e,this.citasService=i,this.utitlities=o,this.almacenamiento=n,this.animationCtrl=s,this.toast=r,this.titulo="Configuraci\xf3n",this.listaTalleres=[],this.mensaje="",this.estado="",this.estadoCambio="",this.role="",this.usuario="",this.urlArchivo="",this.tipoArchivo="",this.slideOpt={zoom:{maxRatio:3,minRatio:1,toggle:!0}},this.citas=[],this.texto="",this.listaCreados=[],this.trabajos=[],this.nuevoTrabajo=!1,this.textoTrabajo="",this.textoBuscar="",this.precioconfig=!1,this.precio=0,this.msgEstado="",this.msgpro="",this.msgter="",this.terminado=!1}ngOnInit(){}ionViewWillEnter(){return Object(a.a)(this,void 0,void 0,function*(){switch(this.type){case"setting":const t=yield this.almacenamiento.obtenerToken();t&&this.citasService.obtenerListaTrabajos(t.token).subscribe(t=>{t.exe&&(this.listaCreados=t.response[0].listaTrabajos)}),this.vista="setting";break;case"buscar":this.titulo="Buscar Talleres",this.vista="buscar",setTimeout(()=>{this.slide.lockSwipes(!0).then(()=>{})},500),this.listarTalleres();break;case"media":this.vista="media",this.urlArchivo=this.data.url,this.tipoArchivo=this.data.tipo;break;case"carpetas":if(this.vista="carpetas","TALLER_ROLE"===this.data.role){const t=this.data.info.filter(t=>t.usuariopedido._id===this.data.unico);this.citas=t}else{const t=this.data.info.filter(t=>t.idtaller._id===this.data.unico);this.citas=t}}})}filtro(t){this.texto=t.detail.value}guardar(){return Object(a.a)(this,void 0,void 0,function*(){(yield this.almacenamiento.obtenerToken())&&(this.modalCtrl.dismiss({estado:this.estadoCambio,info:{trabajos:this.trabajos,precio:this.precio}}),this.nuevoTrabajo=!1)})}escogerChat(t){this.modalCtrl.dismiss({salir:!0,cita:t})}descartar(){this.modalCtrl.dismiss({salir:!0})}listarTalleres(){this.almacenamiento.obtenerToken().then(t=>{this.citasService.listadoTalleres(t.token).subscribe(t=>{t.response.length>0&&t.response.forEach(t=>{t.avatar=t.usuarioReceptor.imagen[0].path,this.listaTalleres.push(t)})})})}opciones(t){return Object(a.a)(this,void 0,void 0,function*(){yield this.slide.lockSwipes(!0);const e=yield this.actionSheetCtrl.create({translucent:!0,header:`Que quieres hacer con ${t}`,buttons:[{text:"Compartir Perf\xedl",icon:"arrow-redo-outline",handler:()=>{}},{text:"Enviar mensaje",icon:"chatbubble-outline",handler:()=>{}},{text:"Invitar a grupo",icon:"people-outline",handler:()=>{}},{text:"Eliminar Usuario",icon:"trash-outline",cssClass:"eliminar",handler:()=>{}},{text:"Cancelar",role:"cancel",icon:"close-outline"}]});return yield e.present()})}crear(t){return Object(a.a)(this,void 0,void 0,function*(){yield this.slide.lockSwipes(!1),yield this.slide.slideNext(300),this.usuario=t.usuarioReceptor.nombrecompleto,this.taller=t,yield this.slide.lockSwipes(!0)})}generarTicket(){this.almacenamiento.obtenerToken().then(t=>{this.citasService.crearCita(t.token,{idtaller:this.taller.usuarioReceptor._id}).subscribe(t=>Object(a.a)(this,void 0,void 0,function*(){yield this.modalCtrl.dismiss({})}),t=>Object(a.a)(this,void 0,void 0,function*(){yield this.utitlities.alertApplication("No se pudo agendar la cita",!1),yield this.modalCtrl.dismiss({})}))})}cancelar(){return Object(a.a)(this,void 0,void 0,function*(){yield this.slide.lockSwipes(!1),yield this.slide.slidePrev(300),yield this.slide.lockSwipes(!0)})}filtroTrabajo(t){this.textoBuscar=t.detail.value}check(t){return this.trabajos.find(e=>e===t)}borrarTrabajo(t){this.trabajos.splice(t,1)}habilitarTrabajo(){this.nuevoTrabajo=!0}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(s.ob),c.Jb(s.a),c.Jb(m.a),c.Jb(b.a),c.Jb(l.a),c.Jb(s.c),c.Jb(b.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-modal-citas"]],viewQuery:function(t,e){if(1&t&&c.vc(O,1),2&t){let t;c.kc(t=c.Vb())&&(e.slide=t.first)}},inputs:{type:"type",data:"data"},decls:6,vars:6,consts:[[4,"ngIf"],["fullscreen","true",4,"ngIf"],["fullscreen","true","color","darkgold",4,"ngIf"],["color","blanco"],["fill","clear","slot","end",4,"ngIf"],["fill","clear","slot","end"],["fill","clear",3,"click"],["name","close-outline"],["color","dark"],["fill","clear","slot","start"],["fullscreen","true"],["class","divider",4,"ngIf"],[1,"divider"],["slide",""],["fixed",""],["size","12"],["color","light"],[3,"press","click",4,"ngFor","ngForOf"],[1,"anchofull"],[1,"opacity"],["size","6"],["expand","block","mode","ios","color","light",3,"click"],["expand","block","mode","ios","color","primary",3,"click"],[3,"press","click"],["slot","start"],["width","100%","alt","",3,"src"],[1,"ion-text-wrap"],["fullscreen","true","color","darkgold"],[3,"url",4,"ngIf"],["class","diapositiva",3,"options",4,"ngIf"],[3,"url"],[1,"diapositiva",3,"options"],["alt","",3,"src"],["mode","ios",3,"ionChange"],[4,"ngFor","ngForOf"],[3,"click"],["slot","start",1,"avatar"],["width","100%",3,"src"],[1,"medium"],["slot","end",1,"estadobol",3,"ngClass"],["side","start"],["slot","icon-only","name","ellipsis-vertical-outline"],["color","secondary"],["slot","icon-only","name","trash-outline"]],template:function(t,e){1&t&&(c.qc(0,k,5,1,"ion-header",0),c.qc(1,L,7,0,"ion-header",0),c.qc(2,w,7,0,"ion-header",0),c.qc(3,x,3,1,"ion-content",1),c.qc(4,z,3,2,"ion-content",2),c.qc(5,_,6,4,"ion-content",1)),2&t&&(c.dc("ngIf","buscar"===e.vista),c.zb(1),c.dc("ngIf","media"===e.vista),c.zb(1),c.dc("ngIf","carpetas"===e.vista),c.zb(1),c.dc("ngIf","buscar"===e.vista||"chat"===e.vista||"setting"===e.vista),c.zb(1),c.dc("ngIf","media"===e.vista),c.zb(1),c.dc("ngIf","carpetas"===e.vista))},directives:[o.j,s.z,s.jb,s.hb,s.k,s.j,s.A,s.t,s.ab,s.Z,s.y,s.S,s.s,s.T,s.wb,s.L,o.i,s.F,s.f,s.K,g.a,s.J,o.h,s.I,s.H],pipes:[v.a,M.a],styles:["ion-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}ion-item[_ngcontent-%COMP%]{touch-action:pan-y!important}ion-list[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%], ion-slides[_ngcontent-%COMP%]{width:100%}.fullancho[_ngcontent-%COMP%]{min-height:100%;height:auto}.diapositiva[_ngcontent-%COMP%]{width:100%;height:100%}.estado[_ngcontent-%COMP%]{padding:10px}.estadobol[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:100%}.estado-verde[_ngcontent-%COMP%]{background:#85b84f}.estado-amarillo[_ngcontent-%COMP%]{background:#fcd573}.estado-azul[_ngcontent-%COMP%]{background:#5591b1}.es-bottom[_ngcontent-%COMP%]{margin-bottom:15px}.es-bottom-small[_ngcontent-%COMP%]{margin-bottom:10px}.precio[_ngcontent-%COMP%]{height:80px;display:flex;justify-content:center;align-items:center;font-size:42px;opacity:.8;font-weight:bolder;color:var(--ion-color-success)}.trabajo[_ngcontent-%COMP%]{border-bottom:1px solid rgba(3,3,3,.1)}.trabajo[_ngcontent-%COMP%]:nth-child(2n){--background:#f9f9f9}ion-item-divider[_ngcontent-%COMP%]{margin-bottom:10px}.ok[_ngcontent-%COMP%]{opacity:.3}video[_ngcontent-%COMP%]{max-height:100%}.fl[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.aviso[_ngcontent-%COMP%]{--background:#fee491}.aviso[_ngcontent-%COMP%]:hover{--background:#fee491!important}"],data:{animation:[Object(f.l)("entrada",[Object(f.k)(":enter",[Object(f.j)({opacity:0,transform:"scale(0)"}),Object(f.e)("250ms",Object(f.j)({opacity:1,transform:"scale(1)"}))]),Object(f.k)(":leave",[Object(f.j)({opacity:1,transform:"scale(1)"}),Object(f.e)("250ms",Object(f.j)({opacity:0,transform:"scale(0)"}))])])]}}),t})()}];let W=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[r.i.forChild($)],r.i]}),t})();var N=i("zon2"),R=i("iTUp");let K=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[o.b,n.e,s.kb,W,N.a,R.a]]}),t})(),q=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[o.b,n.e,s.kb,u,K,R.a]]}),t})()},HavB:function(t,e,i){"use strict";i.d(e,"a",function(){return f});var o=i("AytR"),n=i("tk/3"),s=i("coGc"),r=i("lJxs"),a=i("IzEk"),c=i("MtjB"),l=i("JIr8"),b=i("PqYM"),d=i("Cfvw"),h=i("fXoL"),u=i("tyNb"),p=i("B7Rs");let f=(()=>{class t{constructor(t,e,i){this.http=t,this.router=e,this.MmyTransfer=i}hanflerError(t){return t.pipe(Object(s.a)(()=>Object(b.a)(3e3)),Object(r.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada");if(401===t.status)throw new Error(" No tiene permisos ")}),Object(a.a)(3))}crearPedido(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/crear/`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedido(t){const e={headers:new n.c({"x-token":t})};return this.http.get(`${o.a}/pedidos/lista/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}misChats(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/chats/lista/`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedidoUsuario(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/lista/`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misSalas(t){const e={headers:new n.c({"x-token":t})};return this.http.get(`${o.a}/ticket/salas`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}mensajes(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/chat`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}traermensajesNoVistos(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/chat/vistos`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}marcarvisto(t,e){const i={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/chat/vistos`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedido(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/info`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedidoPut(t,e){const i={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/info`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEstados(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/estados`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarEstados(t,e){const i={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/estados`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChat(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/unico/consultar/chat`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChatFotos(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/unico/consultar/chat/fotos`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarSala(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/consultar/chat`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapa(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/consultar/mapa`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapaUnico(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/consultar/mapa/unico`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearMapa(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/crear/mapa`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapa(t,e){const i={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/editar/mapa`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfo(t,e){const i={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/editar/mapa/info`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfoD(t,e){const i={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/editar/mapa/infod`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarPedido(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/editar`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarChat(t,e){const i={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/chat/editar`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}subirArchivosChat(t,e,i,n,s,r,a){console.log("archivo",i);const c={fileKey:"archivo",fileName:r,mimeType:a,httpMethod:"PUT",headers:{"x-token":t,"x-sala":e,"x-final":n,"x-cont":s}},b=this.MmyTransfer.create();return Object(d.a)(b.upload(i,`${o.a}/pedido/upload`,c)).pipe(Object(l.a)(t=>{throw new Error(i)}))}}return t.\u0275fac=function(e){return new(e||t)(h.Qb(n.a),h.Qb(u.g),h.Qb(p.a))},t.\u0275prov=h.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},W7Eg:function(t,e,i){"use strict";i.d(e,"a",function(){return u});var o=i("R0Ic"),n=i("fXoL"),s=i("ofXK"),r=i("TEn/");const a=["video"],c=["range"];function l(t,e){1&t&&(n.Mb(0,"ion-chip",6),n.Kb(1,"ion-spinner",7),n.rc(2,"Cargando Video..."),n.Lb())}function b(t,e){if(1&t){const t=n.Nb();n.Mb(0,"ion-button",15),n.Ub("click",function(){return n.lc(t),n.Wb(2).play()}),n.Kb(1,"ion-icon",16),n.Lb()}}function d(t,e){if(1&t){const t=n.Nb();n.Mb(0,"ion-button",15),n.Ub("click",function(){return n.lc(t),n.Wb(2).pause()}),n.Kb(1,"ion-icon",17),n.Lb()}}function h(t,e){if(1&t){const t=n.Nb();n.Mb(0,"div",8),n.Mb(1,"div",9),n.qc(2,b,2,0,"ion-button",10),n.qc(3,d,2,0,"ion-button",10),n.Mb(4,"div",11),n.Mb(5,"ion-range",12,13),n.Ub("ionChange",function(e){return n.lc(t),n.Wb().progreso(e)})("ionFocus",function(e){return n.lc(t),n.Wb().foco(e)})("ionBlur",function(e){return n.lc(t),n.Wb().foco(e)}),n.Lb(),n.Lb(),n.Mb(7,"div",14),n.Mb(8,"strong"),n.rc(9),n.Lb(),n.Lb(),n.Lb(),n.Lb()}if(2&t){const t=n.Wb();n.zb(2),n.dc("ngIf",!t.paused),n.zb(1),n.dc("ngIf",t.paused),n.zb(2),n.dc("value",t.currProgress),n.zb(4),n.sc(t.currentt)}}let u=(()=>{class t{constructor(){this.paused=!0,this.currProgress=0,this.slideOpts={zoom:{maxRatio:3,minRatio:1,toggle:!0}},this.focus=!1,this.progress=0,this.value=0,this.bandera=!0,this.carga=!0,this.mostrar=!1}ngAfterViewInit(){this.current(),console.log(this.url," archivo")}play(){this.paused=!0,this.bandera=!0,this.focus=!0,this.video.nativeElement.play()}pause(){this.paused=!1,this.bandera=!1,this.focus=!1,this.video.nativeElement.pause()}current(){this.video.nativeElement.addEventListener("canplay",()=>{this.carga=!1,this.bandera&&this.play()}),this.video.nativeElement.addEventListener("progress",()=>{this.carga=!0}),this.video.nativeElement.addEventListener("timeupdate",()=>{this.currProgress=100*this.video.nativeElement.currentTime/this.video.nativeElement.duration,this.currentt=Math.round(this.video.nativeElement.currentTime),this.currentt<10&&(this.currentt="0"+this.currentt),this.video.nativeElement.currentTime===this.video.nativeElement.duration&&this.play()})}toggle(){console.log(this.bandera,this.focus),this.bandera?(this.mostrar=!0,this.bandera=!1,this.pause()):(this.mostrar=!1,this.focus?this.pause():this.play())}progreso(t){this.progress=t.detail.value,this.focus&&(this.play(),this.focus=!1),this.video.nativeElement.currentTime=Number((this.video.nativeElement.duration*(t.detail.value/100)).toFixed(6))}foco(t){this.bandera=!0,this.focus=!0,this.pause()}onProgress(){}ngOnDestroy(){this.video.nativeElement.pause(),console.log("Destrucci\xf3n")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Db({type:t,selectors:[["app-video"]],viewQuery:function(t,e){if(1&t&&(n.vc(a,3),n.vc(c,1)),2&t){let t;n.kc(t=n.Vb())&&(e.video=t.first),n.kc(t=n.Vb())&&(e.range=t.first)}},inputs:{url:"url"},decls:6,vars:3,consts:[[1,"reproductor"],[1,"video",3,"click"],["poster","/assets/Video.png",3,"src"],["video",""],["class","cargando","color","success",4,"ngIf"],["class","controles",4,"ngIf"],["color","success",1,"cargando"],["name","crescent"],[1,"controles"],[1,"botones"],["fill","clear","color","blanco","mode","ios",3,"click",4,"ngIf"],[1,"volumen"],["debounce","500","min","0","max","100","color","success",3,"value","ionChange","ionFocus","ionBlur"],["range",""],[1,"tiempo"],["fill","clear","color","blanco","mode","ios",3,"click"],["name","play-outline","slot","icon-only"],["name","pause-outline","slot","icon-only"]],template:function(t,e){1&t&&(n.Mb(0,"div",0),n.Mb(1,"div",1),n.Ub("click",function(){return e.toggle()}),n.Kb(2,"video",2,3),n.qc(4,l,3,0,"ion-chip",4),n.Lb(),n.qc(5,h,10,4,"div",5),n.Lb()),2&t&&(n.zb(2),n.dc("src",e.url,n.mc),n.zb(2),n.dc("ngIf",e.carga),n.zb(1),n.dc("ngIf",e.mostrar))},directives:[s.j,r.r,r.bb,r.O,r.vb,r.j,r.A],styles:[".reproductor[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}video[_ngcontent-%COMP%]{width:100vw;height:100vh}.cargando[_ngcontent-%COMP%]{position:absolute;width:200px;bottom:10px;right:10px;display:flex;justify-content:center;align-items:center;z-index:100}.oculto[_ngcontent-%COMP%]{opacity:0}.controles[_ngcontent-%COMP%]{width:100%;height:70px;padding:5px;background:rgba(0,0,0,.01);position:absolute;bottom:0;left:0}.botones[_ngcontent-%COMP%]{width:100%;height:50px;display:flex;align-items:center}.volumen[_ngcontent-%COMP%]{padding-left:5px;width:60%}.tiempo[_ngcontent-%COMP%]{width:calc(100% - 80%);color:#fff;font-size:12px;display:flex;justify-content:center;align-items:center}ion-range[_ngcontent-%COMP%]{--bar-height:10px}ion-slides[_ngcontent-%COMP%]{width:100%;height:calc(100% - 70px)}"],data:{animation:[Object(o.l)("entry",[Object(o.i)("closed",Object(o.j)({transform:"scale(0)"})),Object(o.i)("open",Object(o.j)({transform:"scale(1)"})),Object(o.k)("* <=> *",[Object(o.e)("50ms")])])]}}),t})()}}]);