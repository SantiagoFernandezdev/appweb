(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{t8Hx:function(t,o,i){"use strict";i.r(o),i.d(o,"IVTproductosPageModule",function(){return O});var e=i("ofXK"),n=i("3Pt+"),s=i("TEn/"),r=i("tyNb"),a=i("mrSG"),c=i("SQQW"),d=i("fXoL"),l=i("fsfq"),b=i("5yQV"),h=i("fmoy");const u=["inifinito"];function p(t,o){if(1&t){const t=d.Nb();d.Mb(0,"ion-searchbar",20),d.Ub("ionChange",function(o){return d.lc(t),d.Wb().buscar(o)}),d.Lb()}}function g(t,o){if(1&t&&(d.Mb(0,"div",21),d.Kb(1,"img",22),d.Mb(2,"h3",23),d.rc(3),d.Lb(),d.Lb()),2&t){const t=d.Wb();d.zb(3),d.sc(t.mensaje)}}function m(t,o){1&t&&(d.Mb(0,"ion-item"),d.Kb(1,"ion-skeleton-text",26),d.Mb(2,"ion-label"),d.Kb(3,"ion-skeleton-text",27),d.Kb(4,"ion-skeleton-text",28),d.Lb(),d.Lb())}const f=function(){return[1,1,1,1,1]};function v(t,o){1&t&&(d.Mb(0,"div",24),d.Mb(1,"ion-list"),d.qc(2,m,5,0,"ion-item",25),d.Lb(),d.Lb()),2&t&&(d.zb(2),d.dc("ngForOf",d.gc(1,f)))}function M(t,o){if(1&t&&(d.Mb(0,"div"),d.Mb(1,"strong"),d.rc(2,"C\xf3digo: "),d.Lb(),d.rc(3),d.Lb()),2&t){const t=d.Wb().$implicit;d.zb(3),d.tc(" ",t.codigo,"")}}function x(t,o){1&t&&(d.Mb(0,"ion-chip",1),d.rc(1,"AL DIA"),d.Lb())}function P(t,o){1&t&&(d.Mb(0,"ion-chip",42),d.rc(1,"SE EST\xc1 AGOTANDO"),d.Lb())}function L(t,o){1&t&&(d.Mb(0,"ion-chip",43),d.rc(1,"PRODUCTO AGOTADO"),d.Lb())}function A(t,o){if(1&t){const t=d.Nb();d.Mb(0,"ion-item-sliding"),d.Mb(1,"ion-item",29),d.Mb(2,"ion-avatar",2),d.Kb(3,"img",30),d.Lb(),d.Mb(4,"ion-label"),d.Mb(5,"div"),d.rc(6),d.Lb(),d.qc(7,M,4,1,"div",15),d.Mb(8,"div"),d.Mb(9,"strong"),d.rc(10,"Categoria: "),d.Lb(),d.Mb(11,"strong",31),d.rc(12),d.Lb(),d.Lb(),d.Mb(13,"div",32),d.Mb(14,"strong"),d.rc(15,"Existencia: "),d.Mb(16,"span",33),d.rc(17),d.Lb(),d.Lb(),d.qc(18,x,2,0,"ion-chip",34),d.qc(19,P,2,0,"ion-chip",35),d.qc(20,L,2,0,"ion-chip",36),d.Lb(),d.Lb(),d.Lb(),d.Mb(21,"ion-item-options",37),d.Mb(22,"ion-item-option",38),d.Ub("click",function(){d.lc(t);const i=o.$implicit;return d.Wb(2).editar(i)}),d.Kb(23,"ion-icon",39),d.Lb(),d.Mb(24,"ion-item-option",40),d.Ub("click",function(){d.lc(t);const i=o.$implicit,e=o.index;return d.Wb(2).eliminar(i,e)}),d.Kb(25,"ion-icon",41),d.Lb(),d.Lb(),d.Lb()}if(2&t){const t=o.$implicit;d.zb(6),d.sc(t.nombre),d.zb(1),d.dc("ngIf",t.codigo),d.zb(5),d.sc(t.categoria),d.zb(5),d.sc(t.existencia),d.zb(1),d.dc("ngIf",t.existencia>t.limite),d.zb(1),d.dc("ngIf",t.existencia<=t.limite&&t.existencia>0),d.zb(1),d.dc("ngIf",0===t.existencia)}}function k(t,o){if(1&t&&(d.Mb(0,"ion-list"),d.qc(1,A,26,7,"ion-item-sliding",25),d.Lb()),2&t){const t=d.Wb();d.zb(1),d.dc("ngForOf",t.productos)}}function y(t,o){if(1&t){const t=d.Nb();d.Mb(0,"ion-infinite-scroll",44,45),d.Ub("ionInfinite",function(o){return d.lc(t),d.Wb().loadData(o)}),d.Kb(2,"ion-infinite-scroll-content",46),d.Lb()}}const C=[{path:"",component:(()=>{class t{constructor(t,o,i,e,n,s){this.modalCtrl=t,this.almacenamiento=o,this.ivtApi=i,this.toast=e,this.alertCtrl=n,this.ActiveRouter=s,this.productos=[],this.load=!1,this.patron="",this.desde=0,this.seleccion="Todos",this.mensaje="No hay productos registrados",this.prod=!0}ngOnInit(){}ionViewWillEnter(){"agotados"===this.ActiveRouter.snapshot.paramMap.get("modal")?(this.seleccion="Agotados",this.cargarProductosAgotados()):"proximos"===this.ActiveRouter.snapshot.paramMap.get("modal")?(this.seleccion="Pr\xf3ximos en agotarse",this.cargarProductosProximos()):this.cargarProductos()}refrescando(t){this.cargarProductos().then(()=>{t.target.complete()}).catch(()=>t.target.complete())}cargarProductos(){return Object(a.a)(this,void 0,void 0,function*(){this.desde=0,this.load&&(this.infinite.disabled=!1);const t=yield this.almacenamiento.obtenerToken();t&&this.ivtApi.leerProducto(t.token,{desde:this.desde,id:this.ActiveRouter.snapshot.paramMap.get("id")}).subscribe(t=>{t.exe?this.productos=t.response:this.toast.toastError("No se pudo cargar los datos, intentelo m\xe1s tarde"),this.load=!0},t=>{this.toast.toastError("No se pudo cargar los datos, intentelo m\xe1s tarde")})})}modal(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.modalCtrl.create({component:c.a,componentProps:{tipo:"productos",inventario:this.ActiveRouter.snapshot.paramMap.get("id")}});yield t.present();const o=yield t.onWillDismiss();o.data&&o.data.exe&&this.cargarProductos()})}editar(t){return Object(a.a)(this,void 0,void 0,function*(){const o=yield this.modalCtrl.create({component:c.a,componentProps:{tipo:"editarproductos",producto:t}});yield o.present();const i=yield o.onWillDismiss();i.data&&i.data.exe&&this.cargarProductos()})}eliminar(t,o){return Object(a.a)(this,void 0,void 0,function*(){const i=yield this.almacenamiento.obtenerToken();if(i){const e=yield this.alertCtrl.create({header:`Eliminar Producto: ${t.nombre}`,buttons:[{role:"cancel",text:"Cancelar"},{text:"Eliminar",cssClass:"rojoi",handler:()=>{this.ivtApi.eliminarProducto(i.token,t._id).subscribe(t=>{t.exe?(this.toast.toastExitoso("Producto eliminado!"),this.productos.splice(o,1)):this.toast.toastError("No se pudo eliminar el producto, intentelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo eliminar el proveedor, intentelo m\xe1s tarde")})}}]});yield e.present()}})}buscar(t){return Object(a.a)(this,void 0,void 0,function*(){if(""!==t.detail.value){this.desde=0,this.infinite.disabled=!1,this.patron=t.detail.value;const o=yield this.almacenamiento.obtenerToken();o&&this.ivtApi.leerProducto(o.token,{desde:this.desde,id:this.ActiveRouter.snapshot.paramMap.get("id"),patron:this.patron}).subscribe(t=>{t.exe?(this.productos=t.response,0===t.response.length&&(this.desde=0)):this.toast.toastError("No se pudo realizar la b\xfasqueda, intentelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo realizar la b\xfasqueda, intentelo m\xe1s tarde")})}else this.desde=0,this.cargarProductos()})}loadData(t){return Object(a.a)(this,void 0,void 0,function*(){this.desde=this.desde+5;const o=yield this.almacenamiento.obtenerToken();o&&(""===this.patron?this.ivtApi.leerProducto(o.token,{desde:this.desde,id:this.ActiveRouter.snapshot.paramMap.get("id")}).subscribe(o=>{o.exe?o.response.length>0?(o.response.forEach(t=>{this.productos.push(t)}),t.target.complete()):(t.target.disabled=!0,this.desde=0):this.toast.toastError("No se pudo traer las hojas de vida, int\xe9ntelo m\xe1s tarde.")},t=>{this.toast.toastError("No se pudo traer las hojas de vida, int\xe9ntelo m\xe1s tarde.")}):this.ivtApi.leerProducto(o.token,{desde:this.desde,id:this.ActiveRouter.snapshot.paramMap.get("id")}).subscribe(o=>{o.exe?o.response.length>0?(o.response.forEach(t=>{this.productos.push(t)}),t.target.complete()):(t.target.disabled=!0,this.desde=0):this.toast.toastError("No se pudo realizar la b\xfasqueda, intentelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo realizar la b\xfasqueda, intentelo m\xe1s tarde")}))})}cambioFiltro(t){this.seleccion=t.detail.value,"Todos"===this.seleccion?(this.prod=!0,this.cargarProductos()):"Agotados"===this.seleccion?(this.prod=!1,this.cargarProductosAgotados()):"Pr\xf3ximos en agotarse"===this.seleccion&&(this.prod=!1,this.cargarProductosProximos())}cargarProductosAgotados(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.ivtApi.leerAgotados(t.token,{_id:this.ActiveRouter.snapshot.paramMap.get("id")}).subscribe(t=>{t.exe?(0===t.response.length&&(this.mensaje="No hay productos agotados"),this.productos=t.response):this.toast.toastError("No se pudo cargar los datos, intentelo m\xe1s tarde"),this.load=!0},t=>{this.toast.toastError("No se pudo cargar los datos, intentelo m\xe1s tarde")})})}cargarProductosProximos(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.ivtApi.leerProximos(t.token,{_id:this.ActiveRouter.snapshot.paramMap.get("id")}).subscribe(t=>{t.exe?(0===t.response.length&&(this.mensaje="No hay productos pr\xf3ximos para agotarse"),this.productos=t.response):this.toast.toastError("No se pudo cargar los datos v2, intentelo m\xe1s tarde"),this.load=!0},t=>{this.toast.toastError("No se pudo cargar los datos, intentelo m\xe1s tarde")})})}}return t.\u0275fac=function(o){return new(o||t)(d.Jb(s.ob),d.Jb(l.a),d.Jb(b.a),d.Jb(h.a),d.Jb(s.b),d.Jb(r.a))},t.\u0275cmp=d.Db({type:t,selectors:[["app-ivtproductos"]],viewQuery:function(t,o){if(1&t&&d.vc(u,1),2&t){let t;d.kc(t=d.Vb())&&(o.infinite=t.first)}},decls:26,vars:6,consts:[[1,"ion-no-border"],["color","success"],["slot","start"],["icon","chevron-back-outline","defaultHref","/central/menu/ivt-inicio"],["slot","end","interface","popover",3,"value","ionChange"],["value","Todos"],["value","Agotados"],["value","Pr\xf3ximos en agotarse"],["slot","fixed","pullFactor","0.5","pullMin","50","pullMax","150",3,"ionRefresh"],["pullingIcon","arrow-dropdown","refreshingSpinner","circles"],["debounce","300","mode","ios","placeholder","Buscar Productos",3,"ionChange",4,"ngIf"],[1,"divider","light"],[1,"divider"],["class","cen",4,"ngIf"],["class","carga",4,"ngIf"],[4,"ngIf"],["threshold","100px",3,"ionInfinite",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","success",3,"click"],["name","add-outline"],["debounce","300","mode","ios","placeholder","Buscar Productos",3,"ionChange"],[1,"cen"],["src","/assets/Productos.png","width","100px","alt",""],[1,"tituloGrande"],[1,"carga"],[4,"ngFor","ngForOf"],["slot","start","animated","",2,"width","50px","height","50px"],["animated","",2,"width","50%","height","20px"],["animated","",2,"width","90%","height","20px"],["lines","none"],["src","/assets/Productos.png","width","100%","heigth","100%"],[1,"rojoi"],[1,"flexbet"],[1,"verdei"],["color","success",4,"ngIf"],["color","warning",4,"ngIf"],["color","danger",4,"ngIf"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","pencil-outline"],["color","danger",3,"click"],["slot","icon-only","name","trash-outline"],["color","warning"],["color","danger"],["threshold","100px",3,"ionInfinite"],["inifinito",""],["loadingSpinner","bubbles","loadingText","Cargando Hojas de Vida..."]],template:function(t,o){1&t&&(d.Mb(0,"ion-header",0),d.Mb(1,"ion-toolbar",1),d.Mb(2,"ion-buttons",2),d.Kb(3,"ion-back-button",3),d.Lb(),d.Mb(4,"ion-title"),d.rc(5,"Productos "),d.Lb(),d.Mb(6,"ion-select",4),d.Ub("ionChange",function(t){return o.cambioFiltro(t)}),d.Mb(7,"ion-select-option",5),d.rc(8,"Todos"),d.Lb(),d.Mb(9,"ion-select-option",6),d.rc(10,"Agotados"),d.Lb(),d.Mb(11,"ion-select-option",7),d.rc(12,"Pr\xf3ximos en agotarse"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(13,"ion-content"),d.Mb(14,"ion-refresher",8),d.Ub("ionRefresh",function(t){return o.refrescando(t)}),d.Kb(15,"ion-refresher-content",9),d.Lb(),d.qc(16,p,1,0,"ion-searchbar",10),d.Kb(17,"div",11),d.Kb(18,"div",12),d.qc(19,g,4,1,"div",13),d.qc(20,v,3,2,"div",14),d.qc(21,k,2,1,"ion-list",15),d.qc(22,y,3,0,"ion-infinite-scroll",16),d.Mb(23,"ion-fab",17),d.Mb(24,"ion-fab-button",18),d.Ub("click",function(){return o.modal()}),d.Kb(25,"ion-icon",19),d.Lb(),d.Lb(),d.Lb()),2&t&&(d.zb(6),d.dc("value",o.seleccion),d.zb(10),d.dc("ngIf",o.prod),d.zb(3),d.dc("ngIf",0===o.productos.length&&o.load),d.zb(1),d.dc("ngIf",!o.load),d.zb(1),d.dc("ngIf",o.productos.length>0),d.zb(1),d.dc("ngIf",o.load))},directives:[s.z,s.jb,s.k,s.g,s.h,s.hb,s.W,s.vb,s.X,s.t,s.P,s.Q,e.j,s.v,s.w,s.A,s.T,s.wb,s.L,e.i,s.F,s.Y,s.K,s.J,s.f,s.I,s.H,s.r,s.C,s.D],styles:[".cen[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.tituloGrande[_ngcontent-%COMP%]{width:300px;text-align:center}.verdei[_ngcontent-%COMP%]{color:#1e8c4a}ion-item-divider[_ngcontent-%COMP%]{border:0!important;margin-bottom:15px}.rojoi[_ngcontent-%COMP%]{color:#c1302c}ion-item-sliding[_ngcontent-%COMP%]:nth-child(odd)   ion-item[_ngcontent-%COMP%]{--background:var(--ion-color-light)!important}"]}),t})()}];let I=(()=>{class t{}return t.\u0275mod=d.Hb({type:t}),t.\u0275inj=d.Gb({factory:function(o){return new(o||t)},imports:[[r.i.forChild(C)],r.i]}),t})(),O=(()=>{class t{}return t.\u0275mod=d.Hb({type:t}),t.\u0275inj=d.Gb({factory:function(o){return new(o||t)},imports:[[e.b,n.e,s.kb,I]]}),t})()}}]);