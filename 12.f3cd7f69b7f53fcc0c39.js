(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Vycu:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=function(){function n(n){this.store$=n}return n.prototype.ngOnInit=function(){this.ws$=this.store$.select(function(n){return n.containers.currentWorkspace})},n}(),o=e("mrSG"),a=e("LvDl"),c=e("VnD/"),r=e("W4AR"),p={LoadExperiencemap:Object(r.g)("[LoadExperiencemap]"),LoadExperiencemapSucceeded:Object(r.g)("[LoadExperiencemap] Success"),LoadExperiencemapFailed:Object(r.g)("[LoadExperiencemap] Fail"),UpdateExperiencemap:Object(r.g)("[UpdateExperiencemap]"),UpdateExperiencemapSucceeded:Object(r.g)("[UpdateExperiencemap] Success"),UpdateExperiencemapFailed:Object(r.g)("[UpdateExperiencemap] Fail")},i=function(){return function(n){this.payload=n,this.type=p.LoadExperiencemap}}(),d=function(){return function(n){this.payload=n,this.type=p.UpdateExperiencemap}}(),s=e("jUk4"),m=function(n){function l(l,e){var t=n.call(this,l)||this;return t.store$=l,t.route=e,t}return o.__extends(l,n),l.prototype.localOnInit=function(){var n=this;this.experiencemap$=this.store$.select(function(n){return n.experiencemaps.experiencemap}).pipe(Object(c.a)(function(n){return null!==n})),this.experiencemapSubscription=this.experiencemap$.subscribe(function(l){n.experiencemap=l,n.memento=a.cloneDeep(l)})},l.prototype.localOnDestroy=function(){this.experiencemapSubscription.unsubscribe()},l.prototype.onCurrentWSSet=function(){var n=this.getCurrentWSLite();this.store$.dispatch(new i({ws:n}))},l}(s.c),f=function(){return function(){}}(),h=e("9AJC"),g=e("pMnS"),_=e("eVFG"),b=e("ZYCi"),v=e("Ip0R"),x=e("yGQT"),y=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,4,"h1",[["class","mt-1 mb-1"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,2,"a",[["routerLink","../details"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t["\u0275nov"](n,3).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](3,671744,null,0,b.n,[b.l,b.a,v.LocationStrategy],{routerLink:[0,"routerLink"]},null),(n()(),t["\u0275eld"](4,0,null,null,0,"i",[["class","fa fa-home"]],null,null,null,null,null)),(n()(),t["\u0275ted"](5,null,[" | "," "])),(n()(),t["\u0275eld"](6,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t["\u0275eld"](7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](8,212992,null,0,b.p,[b.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(n,l){n(l,3,0,"../details"),n(l,8,0)},function(n,l){n(l,2,0,t["\u0275nov"](l,3).target,t["\u0275nov"](l,3).href),n(l,5,0,l.context.ngIf.title)})}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","scrollable"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,2,null,k)),t["\u0275did"](2,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275pid"](131072,v.AsyncPipe,[t.ChangeDetectorRef])],function(n,l){var e=l.component;n(l,2,0,t["\u0275unv"](l,2,0,t["\u0275nov"](l,3).transform(e.ws$)))},null)}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-experiencemap-home",[],null,null,null,C,y)),t["\u0275did"](1,114688,null,0,u,[x.o],null,null)],function(n,l){n(l,1,0)},null)}var E=t["\u0275ccf"]("app-experiencemap-home",u,M,{},{},[]),S=e("LK7e"),j=e("nX/Y"),O=e("gIcY"),F=function(){function n(n,l){var e=this;this.store$=n,this.route=l,this.edit=!1,this.newTargetMarket="",this.canUpdate=function(){return e.memento!==e.context&&""!==a.trim(e.context)}}return n.prototype.ngOnInit=function(){this.experiencemap&&(this.context=this.experiencemap.context,this.memento=this.context)},n.prototype.reset=function(n){void 0===n&&(n=!1),this.context=this.memento,n&&(this.edit=!1)},n.prototype.update=function(){this.store$.dispatch(new d({context:this.context,ws:this.currentWS})),this.edit=!1},n}(),I=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"button",[["class","btn btn-link btn-sm"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=0!=(n.component.edit=!0)&&t),t},null,null)),(n()(),t["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-exclamation-triangle text-warning"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","pl-2"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Define the user experience context"]))],null,null)}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"h3",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,"div",[["class","hover-container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"button",[["class","hover-button btn btn-link"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=0!=(n.component.edit=!0)&&t),t},null,null)),(n()(),t["\u0275eld"](3,0,null,null,0,"i",[["class","fa fa-pencil-alt text-muted"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"ngx-md",[],null,null,null,S.b,S.a)),t["\u0275did"](5,4243456,null,0,j.a,[j.c,t.ElementRef,t.PLATFORM_ID],{data:[0,"data"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](7,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,5,0,e.context),n(l,7,0,!e.context||0===e.context.length)},null)}function L(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,25,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"div",[["class","text-muted mb-1"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Set the context "])),(n()(),t["\u0275eld"](3,0,null,null,2,"div",[["class","clearfix float-right"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"button",[["class","btn btn-link"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.reset(!0)&&t),t},null,null)),(n()(),t["\u0275eld"](5,0,null,null,0,"i",[["class","fa fa-times text-muted"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,19,"div",[["class","mr-5"]],null,null,null,null,null)),(n()(),t["\u0275eld"](7,0,null,null,6,"textarea",[["class","form-control form-control-lg"],["placeholder","purpose of the product"],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.control.enter"],[null,"ngModelChange"],[null,"keyup.esc"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var u=!0,o=n.component;return"input"===l&&(u=!1!==t["\u0275nov"](n,8)._handleInput(e.target.value)&&u),"blur"===l&&(u=!1!==t["\u0275nov"](n,8).onTouched()&&u),"compositionstart"===l&&(u=!1!==t["\u0275nov"](n,8)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t["\u0275nov"](n,8)._compositionEnd(e.target.value)&&u),"keyup.control.enter"===l&&(u=!1!==o.update()&&u),"ngModelChange"===l&&(u=!1!==(o.context=e)&&u),"keyup.esc"===l&&(u=!1!==o.reset()&&u),u},null,null)),t["\u0275did"](8,16384,null,0,O.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,O.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,O.NG_VALUE_ACCESSOR,function(n){return[n]},[O.DefaultValueAccessor]),t["\u0275did"](10,671744,null,0,O.NgModel,[[8,null],[8,null],[8,null],[6,O.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,O.NgControl,null,[O.NgModel]),t["\u0275did"](12,16384,null,0,O.NgControlStatus,[[4,O.NgControl]],null,null),t["\u0275did"](13,1720320,null,0,s.A,[t.ElementRef],{shouldFocusElement:[0,"shouldFocusElement"]},null),(n()(),t["\u0275eld"](14,0,null,null,6,"div",[["class","float-right mt-1"]],null,null,null,null,null)),(n()(),t["\u0275eld"](15,0,null,null,2,"button",[["class","btn btn-sm btn-primary mr-1"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.update()&&t),t},null,null)),(n()(),t["\u0275eld"](16,0,null,null,0,"i",[["class","fa fa-check"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Save changes"])),(n()(),t["\u0275eld"](18,0,null,null,2,"button",[["class","btn btn-sm btn-secondary"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.reset()&&t),t},null,null)),(n()(),t["\u0275eld"](19,0,null,null,0,"i",[["class","fa fa-redo"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Reset"])),(n()(),t["\u0275eld"](21,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](22,0,null,null,1,"help-ctrl-enter-save",[],null,null,null,_.k,_.d)),t["\u0275did"](23,49152,null,0,s.i,[],null,null),(n()(),t["\u0275eld"](24,0,null,null,1,"help-gfm-spec",[],null,null,null,_.l,_.e)),t["\u0275did"](25,49152,null,0,s.j,[],null,null)],function(n,l){var e=l.component;n(l,10,0,e.context),n(l,13,0,e.edit)},function(n,l){var e=l.component;n(l,7,0,t["\u0275nov"](l,12).ngClassUntouched,t["\u0275nov"](l,12).ngClassTouched,t["\u0275nov"](l,12).ngClassPristine,t["\u0275nov"](l,12).ngClassDirty,t["\u0275nov"](l,12).ngClassValid,t["\u0275nov"](l,12).ngClassInvalid,t["\u0275nov"](l,12).ngClassPending),n(l,15,0,!e.canUpdate())})}function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","card custom-shadow mb-4"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](3,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,L)),t["\u0275did"](5,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,3,0,!e.edit),n(l,5,0,e.edit)},null)}var H=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","mb-2"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"h5",[["class","text-muted"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,0,"i",[["class","fa fa-chalkboard-teacher"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" CONTEXT"])),(n()(),t["\u0275eld"](4,0,null,null,2,"app-context",[],null,null,null,T,I)),t["\u0275did"](5,114688,null,0,F,[x.o,b.a],{currentWS:[0,"currentWS"],experiencemap:[1,"experiencemap"]},null),t["\u0275pid"](131072,v.AsyncPipe,[t.ChangeDetectorRef])],function(n,l){var e=l.component;n(l,5,0,e.currentWS,t["\u0275unv"](l,5,1,t["\u0275nov"](l,6).transform(e.experiencemap$)))},null)}function U(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-experiencemap",[],null,null,null,D,H)),t["\u0275did"](1,245760,null,0,m,[x.o,b.a],null,null)],function(n,l){n(l,1,0)},null)}var N=t["\u0275ccf"]("app-experiencemap",m,U,{},{},[]),$=e("4GxJ"),A=e("hwsA"),V=e("t/Na"),P=e("4Vzq"),X=e("1bD0"),B=e("/CeA"),W=e("ZYjt"),G=e("HF1C"),K=e("38E1"),Y=e("Fa87"),q=e("VSng"),J=e("7LN8"),z=e("h5lK"),Z=e("GS5F"),Q=e("WwML"),nn=e("VYqR"),ln=e("QvwM"),en=e("Pchq"),tn=e("g4HV"),un=e("pODc"),on=e("jhFJ"),an=e("8uIU"),cn=e("G5kV"),rn=e("gKem");function pn(n,l){switch(l.type){case p.LoadExperiencemapSucceeded:return o.__assign({},n,{experiencemap:l.payload});case p.UpdateExperiencemapSucceeded:return o.__assign({},n,{experiencemap:o.__assign({},n.experiencemap,{experiencemap:l.payload.context})});default:return n}}var dn=e("jYNz"),sn=e("15JJ"),mn=e("67Y/"),fn=e("9Z1F"),hn=e("F/XL"),gn=function(n){function l(l){var e=n.call(this,{headers:{servicename:"journeys-api"}})||this;return e.httpClient=l,e.baseUrl="/journeymaps",e.updateExperiencemap$=function(n){return e.extendPayload(n,null),e.httpClient.put(e.baseUrl+"/"+n.record.code,n,e.options)},e}return o.__extends(l,n),l.prototype.getList$=function(n,l){return this.httpClient.get(this.baseUrl,this.buildHttpOptions(n,l))},l.prototype.getDetails$=function(n,l){return this.httpClient.get(this.baseUrl+"/"+n,this.buildHttpOptions({},l))},l.prototype.createExperiencemap$=function(n){return this.extendPayload(n,null),this.httpClient.post(this.baseUrl,n,this.options)},l.ngInjectableDef=t.defineInjectable({factory:function(){return new l(t.inject(V.HttpClient))},token:l,providedIn:"root"}),l}(s.b),_n=function(){function n(n,l){var e=this;this.actions$=n,this.emService=l,this.loadExperiencemapDetails=this.actions$.pipe(Object(dn.d)(p.LoadExperiencemap),Object(sn.a)(function(n){return e.emService.getDetails$(n.code,n.currentWS).pipe(Object(mn.a)(function(n){return{type:p.LoadExperiencemapSucceeded,payload:n}}),Object(fn.a)(function(){return Object(hn.a)({type:p.LoadExperiencemapFailed})}))})),this.updateExperiencemap=this.actions$.pipe(Object(dn.d)(p.UpdateExperiencemap),Object(sn.a)(function(n){return e.emService.updateExperiencemap$(n.payload).pipe(Object(mn.a)(function(n){return{type:p.UpdateExperiencemapSucceeded,payload:n}}),Object(fn.a)(function(){return Object(hn.a)({type:p.UpdateExperiencemapFailed})}))}))}return n.ngInjectableDef=t.defineInjectable({factory:function(){return new n(t.inject(dn.a),t.inject(gn))},token:n,providedIn:"root"}),o.__decorate([Object(dn.b)(),o.__metadata("design:type",Object)],n.prototype,"loadExperiencemapDetails",void 0),o.__decorate([Object(dn.b)(),o.__metadata("design:type",Object)],n.prototype,"updateExperiencemap",void 0),n}();e.d(l,"ExperiencemapsModuleNgFactory",function(){return bn});var bn=t["\u0275cmf"](f,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[h.a,h.b,h.h,h.i,h.e,h.f,h.g,g.a,_.q,_.a,E,N]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[t.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,O["\u0275angular_packages_forms_forms_j"],O["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,O.FormBuilder,O.FormBuilder,[]),t["\u0275mpd"](4608,$.A,$.A,[t.ComponentFactoryResolver,t.Injector,$.kb,$.B]),t["\u0275mpd"](4608,A.a,A.a,[]),t["\u0275mpd"](4608,V.HttpXsrfTokenExtractor,V["\u0275angular_packages_common_http_http_g"],[v.DOCUMENT,t.PLATFORM_ID,V["\u0275angular_packages_common_http_http_e"]]),t["\u0275mpd"](4608,V["\u0275angular_packages_common_http_http_h"],V["\u0275angular_packages_common_http_http_h"],[V.HttpXsrfTokenExtractor,V["\u0275angular_packages_common_http_http_f"]]),t["\u0275mpd"](4608,P.MessageService,P.MessageService,[]),t["\u0275mpd"](5120,V.HTTP_INTERCEPTORS,function(n,l,e,t){return[n,new X.b(l),new s.h(e),new s.q(t)]},[V["\u0275angular_packages_common_http_http_h"],B.c,P.MessageService,r.a]),t["\u0275mpd"](4608,V["\u0275angular_packages_common_http_http_d"],V["\u0275angular_packages_common_http_http_d"],[]),t["\u0275mpd"](6144,V.XhrFactory,null,[V["\u0275angular_packages_common_http_http_d"]]),t["\u0275mpd"](4608,V.HttpXhrBackend,V.HttpXhrBackend,[V.XhrFactory]),t["\u0275mpd"](6144,V.HttpBackend,null,[V.HttpXhrBackend]),t["\u0275mpd"](4608,V.HttpHandler,V["\u0275HttpInterceptingHandler"],[V.HttpBackend,t.Injector]),t["\u0275mpd"](4608,V.HttpClient,V.HttpClient,[V.HttpHandler]),t["\u0275mpd"](4608,j.c,j.c,[V.HttpClient,W.DomSanitizer]),t["\u0275mpd"](4608,s.e,s.e,[x.o,b.l]),t["\u0275mpd"](4608,s.n,s.n,[]),t["\u0275mpd"](5120,s.s,s.u,[]),t["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),t["\u0275mpd"](1073742336,O["\u0275angular_packages_forms_forms_bc"],O["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,O.FormsModule,O.FormsModule,[]),t["\u0275mpd"](1073742336,O.ReactiveFormsModule,O.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,$.c,$.c,[]),t["\u0275mpd"](1073742336,$.f,$.f,[]),t["\u0275mpd"](1073742336,$.h,$.h,[]),t["\u0275mpd"](1073742336,$.l,$.l,[]),t["\u0275mpd"](1073742336,$.n,$.n,[]),t["\u0275mpd"](1073742336,$.s,$.s,[]),t["\u0275mpd"](1073742336,$.x,$.x,[]),t["\u0275mpd"](1073742336,$.C,$.C,[]),t["\u0275mpd"](1073742336,$.G,$.G,[]),t["\u0275mpd"](1073742336,$.H,$.H,[]),t["\u0275mpd"](1073742336,$.K,$.K,[]),t["\u0275mpd"](1073742336,$.P,$.P,[]),t["\u0275mpd"](1073742336,$.S,$.S,[]),t["\u0275mpd"](1073742336,$.W,$.W,[]),t["\u0275mpd"](1073742336,$.X,$.X,[]),t["\u0275mpd"](1073742336,$.Y,$.Y,[]),t["\u0275mpd"](1073742336,$.D,$.D,[]),t["\u0275mpd"](1073742336,G.a,G.a,[]),t["\u0275mpd"](1073742336,K.a,K.a,[]),t["\u0275mpd"](1073742336,Y.InputTextModule,Y.InputTextModule,[]),t["\u0275mpd"](1073742336,q.ButtonModule,q.ButtonModule,[]),t["\u0275mpd"](1073742336,J.SharedModule,J.SharedModule,[]),t["\u0275mpd"](1073742336,z.AutoCompleteModule,z.AutoCompleteModule,[]),t["\u0275mpd"](1073742336,Z.ProgressBarModule,Z.ProgressBarModule,[]),t["\u0275mpd"](1073742336,Q.MessagesModule,Q.MessagesModule,[]),t["\u0275mpd"](1073742336,nn.FileUploadModule,nn.FileUploadModule,[]),t["\u0275mpd"](1073742336,ln.a,ln.a,[]),t["\u0275mpd"](1073742336,V.HttpClientXsrfModule,V.HttpClientXsrfModule,[]),t["\u0275mpd"](1073742336,V.HttpClientModule,V.HttpClientModule,[]),t["\u0275mpd"](1073742336,j.b,j.b,[]),t["\u0275mpd"](1073742336,en.SidebarModule,en.SidebarModule,[]),t["\u0275mpd"](1073742336,tn.TooltipModule,tn.TooltipModule,[]),t["\u0275mpd"](1073742336,un.TabViewModule,un.TabViewModule,[]),t["\u0275mpd"](1073742336,on.b,on.b,[]),t["\u0275mpd"](1073742336,an.b,an.b,[]),t["\u0275mpd"](1073742336,b.o,b.o,[[2,b.u],[2,b.l]]),t["\u0275mpd"](1073742336,s.v,s.v,[]),t["\u0275mpd"](1073742336,B.b,B.b,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,cn.ToastModule,cn.ToastModule,[]),t["\u0275mpd"](1073742336,rn.c,rn.c,[]),t["\u0275mpd"](1024,x.F,function(){return[{initialState:{commands:[],currentWorkspace:null,menulist:null,workspaces:[],isLeftPaneCollapsed:!1}},{initialState:{experiencemap:null}}]},[]),t["\u0275mpd"](1024,x.k,function(){return[{key:"containers",reducerFactory:x.B,metaReducers:[],initialState:{commands:[],currentWorkspace:null,menulist:null,workspaces:[],isLeftPaneCollapsed:!1}},{key:"experiencemaps",reducerFactory:x.B,metaReducers:[],initialState:{experiencemap:null}}]},[]),t["\u0275mpd"](1024,x.G,x.H,[t.Injector,x.F,x.k]),t["\u0275mpd"](1024,x.s,function(){return[s.x,pn]},[]),t["\u0275mpd"](1024,x.t,function(n,l){return[n,l]},[x.s,x.s]),t["\u0275mpd"](1024,x.b,function(n,l,e,t,u,o){return[x.y(n,l,e),x.y(t,u,o)]},[t.Injector,x.s,x.t,t.Injector,x.s,x.t]),t["\u0275mpd"](1073873408,x.p,x.p,[x.G,x.b,x.h,x.q]),t["\u0275mpd"](512,s.y,s.y,[dn.a,b.l,v.Location,s.z]),t["\u0275mpd"](512,_n,_n,[dn.a,gn]),t["\u0275mpd"](1024,dn.i,function(n,l){return[dn.e(n),dn.e(l)]},[s.y,_n]),t["\u0275mpd"](1073742336,dn.g,dn.g,[dn.f,dn.i,[2,x.q],[2,x.p]]),t["\u0275mpd"](1073742336,s.d,s.d,[]),t["\u0275mpd"](1073742336,f,f,[]),t["\u0275mpd"](256,V["\u0275angular_packages_common_http_http_e"],"XSRF-TOKEN",[]),t["\u0275mpd"](256,V["\u0275angular_packages_common_http_http_f"],"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,b.j,function(){return[[{path:"not-implemented",component:s.w},{path:"app-home",component:s.a}],[{path:"",component:u,children:[{path:"details",component:m}]}]]},[])])})}}]);