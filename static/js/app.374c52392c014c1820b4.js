webpackJsonp([2],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("IvJb"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("C7Lr")({name:"App"},a,!1,function(t){n("VotE")},null,null).exports,u=n("zO6J");o.a.use(u.a);var c=new u.a({routes:[{path:"/",name:"demo",component:function(){return n.e(0).then(n.bind(null,"8p6N"))}}]}),i=n("9rMa");o.a.use(i.a);var s=new i.a.Store({state:{allGoodsData:[],totalNum:0,totalPrice:0},actions:{setGoodsData:function(t,e){(0,t.commit)("setGoodsData",e)},add:function(t,e){(0,t.commit)("incrementMut",e)},reduce:function(t,e){(0,t.commit)("decreaseMut",e)}},mutations:{setGoodsData:function(t,e){t.allGoodsData=e},incrementMut:function(t,e){t.totalNum++,t.totalPrice+=e},decreaseMut:function(t,e){t.totalNum--,t.totalPrice-=e}},getters:{}});o.a.config.productionTip=!1,new o.a({el:"#app",router:c,store:s,components:{App:r},template:"<App/>"})},VotE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.374c52392c014c1820b4.js.map