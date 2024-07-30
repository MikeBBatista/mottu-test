import{e as V,h as w,i as R,j as A,k,l as $,m as o,n as z,o as G,p as W,q as Y,r as q,u as J}from"./chunk-CTMG24TV.js";import{Ac as B,Bb as x,Bc as j,Cb as u,D as L,J as F,Sb as C,Tb as v,Xa as T,Y as M,Za as n,_a as b,ba as m,la as I,ma as h,ob as p,qb as a,ua as S,ub as d,v as y,va as P,vb as f,wb as g,xb as D,xc as N,yb as E,yc as O,zb as H}from"./chunk-5RYQOEAP.js";function X(e,s){if(e&1&&g(0,"app-no-data-info",6),e&2){let t=u(2);a("title",t.noDataTitle)("info",t.noDataInfo)}}function Z(e,s){if(e&1&&(D(0),p(1,X,1,2,"app-no-data-info",5),E()),e&2){let t=s.ngIf;n(),a("ngIf",t.length===0)}}function tt(e,s){if(e&1){let t=H();d(0,"app-character-info",7),x("favCharater",function(r){S(t);let c=u();return P(c.toggleFavorite(r))}),f()}if(e&2){let t=s.$implicit,i=u();a("character",t)("isFavorite",i.isFavoriteMap[t.id])}}function et(e,s){e&1&&g(0,"app-page-loading")}var Q=(()=>{class e{store;debounceService;characters$;favorites$;favoriteCount$;loading$;isFavorite$;totalPages$;error$;subscription;isFavoriteMap={};nameFilter="";page=1;noDataTitle="Nada foi encontrado";noDataInfo="Tente realizar uma nova busca.";constructor(t,i){this.store=t,this.debounceService=i,this.characters$=this.store.select(o.getCharacters),this.favorites$=this.store.select(o.getFavorites),this.favoriteCount$=this.store.select(o.getFavoriteCount),this.loading$=this.store.select(o.isLoading),this.isFavorite$=this.store.select(o.isFavorite),this.totalPages$=this.store.select(o.getPages),this.error$=this.store.select(o.getError),this.subscription=this.debounceService.searchValueChanged.subscribe(r=>{this.page=1,this.nameFilter=r;let c={name:this.nameFilter,page:this.page};this.store.dispatch(new $(c))})}ngOnInit(){console.log("teste"),this.loadCharacters(),this.isFavorite$.subscribe(t=>{this.characters$.subscribe(i=>{i.forEach(r=>{this.isFavoriteMap[r.id]=t(r.id)})})})}loadCharacters(){let t={name:this.nameFilter,page:this.page};this.store.dispatch(new R(t))}toggleFavorite(t){this.isFavorite$.pipe(F(1)).subscribe(i=>{i(t.id)?this.store.dispatch(new k(t)):this.store.dispatch(new A(t))})}onSearchValueChanged(t){this.page=1,this.nameFilter=t;let i={name:this.nameFilter,page:this.page};this.store.dispatch(new $(i))}onScroll(){let t=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,i=window.innerHeight,r=document.documentElement.scrollHeight;(t+i)/r>=.99&&y([this.loading$,this.totalPages$]).pipe(L(([l,_])=>!l&&this.page<=_),F(1),M(([l,_])=>{this.page<_&&(this.page+=1,this.loadCharacters())})).subscribe()}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||e)(b(V),b(z))};static \u0275cmp=I({type:e,selectors:[["app-character-list"]],hostBindings:function(i,r){i&1&&x("scroll",function(l){return r.onScroll(l)},!1,T)},decls:9,vars:11,consts:[[1,"breadcrumb"],[3,"title","hasFilter"],[4,"ngIf"],[1,"character-list"],["class","info-card",3,"character","isFavorite","favCharater",4,"ngFor","ngForOf"],[3,"title","info",4,"ngIf"],[3,"title","info"],[1,"info-card",3,"favCharater","character","isFavorite"]],template:function(i,r){i&1&&(d(0,"div",0),g(1,"app-breadcrumb",1),p(2,Z,2,1,"ng-container",2),C(3,"async"),f(),d(4,"div",3),p(5,tt,1,2,"app-character-info",4),C(6,"async"),p(7,et,1,0,"app-page-loading",2),C(8,"async"),f()),i&2&&(n(),a("title","In\xEDcio")("hasFilter",!0),n(),a("ngIf",v(3,5,r.characters$)),n(3),a("ngForOf",v(6,7,r.characters$)),n(2),a("ngIf",v(8,9,r.loading$)===!0))},dependencies:[N,O,G,W,Y,q,B],styles:[".breadcrumb[_ngcontent-%COMP%]{padding-top:112px;max-width:720px;margin-left:auto;margin-right:auto}.character-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:24px;max-width:720px;flex-wrap:wrap;margin-left:auto;margin-right:auto}@media (max-width: 600px){.character-list[_ngcontent-%COMP%]{margin-left:24px}}"]})}return e})();var it=[{path:"",component:Q}],U=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=h({type:e});static \u0275inj=m({imports:[w.forChild(it),w]})}return e})();var xt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=h({type:e});static \u0275inj=m({imports:[j,J,U]})}return e})();export{xt as CharacterListModule};
