webpackJsonp([0],{"4T+2":function(t,a){},"7ZaZ":function(t,a){},DRx3:function(t,a){},Dd2n:function(t,a){},DmQd:function(t,a){},HdTI:function(t,a){},Il2P:function(t,a){},McVO:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},[s("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("Fool Village")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExampleDefault"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("a",[s("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[t._v("主页")])],1)]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",[s("router-link",{staticClass:"nav-link",attrs:{to:"/photo"}},[t._v("相册")])],1)]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",[s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("关于我们")])],1)])])])]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]};var r=s("VU/8")({},i,!1,function(t){s("gaNU")},null,null).exports,n=s("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[a("div",{staticClass:"container starter-template"},[a("img",{staticClass:"container",attrs:{src:"/static/img/main.png"}}),this._v(" "),a("h4",[this._v("关于青春、成长、欢乐、痛苦、坚持、放弃、等待和不再等待的回忆……")]),this._v(" "),a("p",{staticClass:"lead"},[a("br"),this._v("兰州西北中学 1996 - 1999 高中 4 班\n      "),a("br"),this._v("一群 2B 青年由于彼此无理由的真诚和亲密\n      "),a("br"),this._v("组织了一个 NPO 性质的 NGO\n      "),a("br"),this._v("有好事者称其 —— 傻子村\n    ")])])])}]},c=s("VU/8")(null,o,!1,null,null,null).exports,l=s("d7W4"),h=s.n(l),m={data:function(){return{imgsArr:[],linkRange:"card",flag:!1}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){if(!this.flag){this.imgsArr=[{src:"/static/img/1997/1.jpg",href:"/photo_1997",info:"加入 WTO 之前，我们都是土鳖……"},{src:"/static/img/1998/2.jpg",href:"/photo_1998",info:"南方发大水，我们浪啊浪……"},{src:"/static/img/1999/0.jpg",href:"/photo_1999",info:"本以为是结束，其实才刚刚开始……"},{src:"/static/img/2000/3.jpg",href:"/photo_2000",info:"新世纪，走天涯……"},{src:"/static/img/2001/0.jpg",href:"/photo_2001",info:"这一年，很神秘……"},{src:"/static/img/2002/1.jpg",href:"/photo_2002",info:"手拉手的，是闺蜜……"},{src:"/static/img/2003/0.jpg",href:"/photo_2003",info:"这一年，很神秘……"},{src:"/static/img/2004/0.jpg",href:"/photo_2003",info:"这一年，很神秘……"},{src:"/static/img/2005/0.jpg",href:"/photo_2005",info:"这一年，很神秘……"},{src:"/static/img/2006/1.jpg",href:"/photo_2006",info:"开始，进入衰老……"},{src:"/static/img/2007/5.jpg",href:"/photo_2007",info:"半生不熟的交情，开始准备流失……"},{src:"/static/img/2008/0.jpg",href:"/photo_2008",info:"大地震，照像也有震感……"},{src:"/static/img/2009/0.jpg",href:"/photo_2009",info:"开始，脏了起来……"},{src:"/static/img/2010/0.jpg",href:"/photo_2010",info:"开始，开始……"},{src:"/static/img/2011/0.jpg",href:"/photo_2011",info:"这一年，很神秘……"},{src:"/static/img/2012/0.jpg",href:"/photo_2012",info:"这一年，很神秘……"},{src:"/static/img/2013/2.jpg",href:"/photo_2013",info:"一个字，没有意外……"},{src:"/static/img/2014/0.jpg",href:"/photo_2014",info:"一个字，还是没有意外……"},{src:"/static/img/2015/93.jpg",href:"/photo_2015",info:"开始加速衰老……"},{src:"/static/img/2016/63.jpg",href:"/photo_2016",info:"北京热……"},{src:"/static/img/2017/43.jpg",href:"/photo_2017",info:"总算，总算……"},{src:"/static/img/2018/1.jpg",href:"/photo_2018",info:"三高朋友圈……"},{src:"/static/img/2019/389.jpg",href:"/photo_2019",info:"终于，终于……"}],this.flag=!0;try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}}}},created:function(){this.getData()}},u={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[t._m(0),t._v(" "),s("div",{attrs:{id:"context"}},[s("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:t.imgsArr,imgWidth:360,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0,isRouterLink:!0,linkRange:t.linkRange},on:{scrollReachBottom:t.getData},scopedSlots:t._u([{key:"default",fn:function(a){return s("div",{staticClass:"img-info"},[s("div",{staticClass:"card mb-4 shadow-sm"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text some-info"},[t._v(t._s(a.value.info))]),t._v(" "),s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("div",{staticClass:"btn-group"}),t._v(" "),s("small",{staticClass:"text-muted some-info"},[t._v(t._s(a.index+1996+1))])])])])])}}])})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("留下影像的，都是记不清的场景……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("发胖、脱发、谢顶、老脸松弛的时间线！")])])}]};var g=s("VU/8")(m,u,!1,function(t){s("McVO")},"data-v-b8064b9a",null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[s("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[s("h3",{staticClass:"jumbotron-heading"},[t._v("钢铁是怎样没有炼成的……")]),t._v(" "),s("p",{staticClass:"lead text-muted"},[t._v("从未成年人渣到成年人渣！")])]),t._v(" "),s("div",{staticClass:"container starter-template"},[s("img",{staticClass:"container",attrs:{src:"/static/img/about/1.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/3.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/4.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/5.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/6.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/7.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/9.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/10.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/11.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/12.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/13.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/14.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/15.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/16.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/17.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/18.png"}}),t._v(" "),s("img",{staticClass:"container",attrs:{src:"/static/img/about/19.png"}})])])}]},p=s("VU/8")(null,f,!1,null,null,null).exports,d={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>10){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/1997/"+this.group+".jpg",href:"/static/img/1997/"+this.group+++".jpg"})}}},created:function(){this.getData()}},v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("加入WTO之前，我们都是土鳖……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("那时的牛仔裤是高腰的")])])}]};var _=s("VU/8")(d,v,!1,function(t){s("Tpo4")},"data-v-1936a0c2",null).exports,C={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>3){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/1998/"+this.group+".jpg",href:"/static/img/1998/"+this.group+++".jpg"})}}},created:function(){this.getData()}},x={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("南方发大水，我们浪啊浪……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("在未成年的时候，成了成年人！")])])}]};var b=s("VU/8")(C,x,!1,function(t){s("HdTI")},"data-v-69f19386",null).exports,w={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>26){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/1999/"+this.group+".jpg",href:"/static/img/1999/"+this.group+++".jpg"})}}},created:function(){this.getData()}},D={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("本以为是结束，其实才刚刚开始……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("一顿生日饭，吃了几十年！")])])}]};var E=s("VU/8")(w,D,!1,function(t){s("7ZaZ")},"data-v-1bd1a12c",null).exports,A={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>3){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2000/"+this.group+".jpg",href:"/static/img/2000/"+this.group+++".jpg"})}}},created:function(){this.getData()}},j={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("新世纪，走天涯……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("本以为看破人事沧桑，却只知道一碗吃不饱吃两碗！")])])}]};var y=s("VU/8")(A,j,!1,function(t){s("ke4i")},"data-v-733e0fea",null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[a("div",{staticClass:"container starter-template"},[a("h4",[this._v("留下影像的，都是记不清的场景……")]),this._v(" "),a("p",{staticClass:"lead"},[this._v("发胖、脱发、谢顶、老脸松弛的时间线！")]),this._v(" "),a("img",{staticClass:"container my-3 p-3 bg-white rounded shadow-sm",attrs:{src:"/static/img/2001/0.jpg"}})])])}]},R=s("VU/8")(null,$,!1,null,null,null).exports,P={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>1){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2002/"+this.group+".jpg",href:"/static/img/2002/"+this.group+++".jpg"})}}},created:function(){this.getData()}},k={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("手拉手的，是闺蜜……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("同性闺蜜都有快乐的秘密，异性闺蜜都有难言的苦衷！")])])}]};var W=s("VU/8")(P,k,!1,function(t){s("l4Cz")},"data-v-11cd142d",null).exports,V={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[a("div",{staticClass:"container starter-template"},[a("h4",[this._v("留下影像的，都是记不清的场景……")]),this._v(" "),a("p",{staticClass:"lead"},[this._v("发胖、脱发、谢顶、老脸松弛的时间线！")]),this._v(" "),a("img",{staticClass:"container my-3 p-3 bg-white rounded shadow-sm",attrs:{src:"/static/img/2003/0.jpg"}})])])}]},U=s("VU/8")(null,V,!1,null,null,null).exports,F={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[a("div",{staticClass:"container starter-template"},[a("h4",[this._v("留下影像的，都是记不清的场景……")]),this._v(" "),a("p",{staticClass:"lead"},[this._v("发胖、脱发、谢顶、老脸松弛的时间线！")]),this._v(" "),a("img",{staticClass:"container my-3 p-3 bg-white rounded shadow-sm",attrs:{src:"/static/img/2004/0.jpg"}})])])}]},O=s("VU/8")(null,F,!1,null,null,null).exports,B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[a("div",{staticClass:"container starter-template"},[a("h4",[this._v("留下影像的，都是记不清的场景……")]),this._v(" "),a("p",{staticClass:"lead"},[this._v("发胖、脱发、谢顶、老脸松弛的时间线！")]),this._v(" "),a("img",{staticClass:"container my-3 p-3 bg-white rounded shadow-sm",attrs:{src:"/static/img/2005/0.jpg"}})])])}]},T=s("VU/8")(null,B,!1,null,null,null).exports,N={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>33){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2006/"+this.group+".jpg",href:"/static/img/2006/"+this.group+++".jpg"})}}},created:function(){this.getData()}},H={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("开始进入衰老……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("眼下的事不好说，以后的事说不好，只能怀念过去！")])])}]};var L=s("VU/8")(N,H,!1,function(t){s("DmQd")},"data-v-44925b2c",null).exports,S={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>5){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2007/"+this.group+".jpg",href:"/static/img/2007/"+this.group+++".jpg"})}}},created:function(){this.getData()}},I={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("半生不熟的交情，开始准备流失……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("年龄不断增长，记不住所有过往的人！")])])}]};var Z=s("VU/8")(S,I,!1,function(t){s("iVW2")},"data-v-12970f87",null).exports,M={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>0){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2008/"+this.group+".jpg",href:"/static/img/2008/"+this.group+++".jpg"})}}},created:function(){this.getData()}},z={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("大地震，照像也有震感……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("从此，团聚变得慢慢奢侈起来！")])])}]};var Q=s("VU/8")(M,z,!1,function(t){s("Y7LS")},"data-v-1553e6d6",null).exports,X={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>44){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2009/"+this.group+".jpg",href:"/static/img/2009/"+this.group+++".jpg"})}}},created:function(){this.getData()}},Y={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("开始，脏了起来……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("十年是一种，很油的东西！")])])}]};var q=s("VU/8")(X,Y,!1,function(t){s("4T+2")},"data-v-cae620a8",null).exports,G={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>0){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2010/"+this.group+".jpg",href:"/static/img/2010/"+this.group+++".jpg"})}}},created:function(){this.getData()}},J={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("开始，开始……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("这是重要的时刻，从此告别洒脱……")])])}]};var K=s("VU/8")(G,J,!1,function(t){s("Dd2n")},"data-v-506edc63",null).exports,tt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[a("div",{staticClass:"container starter-template"},[a("h4",[this._v("留下影像的，都是记不清的场景……")]),this._v(" "),a("p",{staticClass:"lead"},[this._v("发胖、脱发、谢顶、老脸松弛的时间线！")]),this._v(" "),a("img",{staticClass:"container my-3 p-3 bg-white rounded shadow-sm",attrs:{src:"/static/img/2011/0.jpg"}})])])}]},at=s("VU/8")(null,tt,!1,null,null,null).exports,st={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[a("div",{staticClass:"container starter-template"},[a("h4",[this._v("留下影像的，都是记不清的场景……")]),this._v(" "),a("p",{staticClass:"lead"},[this._v("发胖、脱发、谢顶、老脸松弛的时间线！")]),this._v(" "),a("img",{staticClass:"container my-3 p-3 bg-white rounded shadow-sm",attrs:{src:"/static/img/2011/0.jpg"}})])])}]},et=s("VU/8")(null,st,!1,null,null,null).exports,it={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>2){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2013/"+this.group+".jpg",href:"/static/img/2013/"+this.group+++".jpg"})}}},created:function(){this.getData()}},rt={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("一个字，没有意外……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("吃饭的目的，不再是吃饭……")])])}]};var nt=s("VU/8")(it,rt,!1,function(t){s("eLU3")},"data-v-344f3b52",null).exports,ot={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>0){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2014/"+this.group+".jpg",href:"/static/img/2014/"+this.group+++".jpg"})}}},created:function(){this.getData()}},ct={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("一个字，还是没有意外……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("喝酒的目的，还是喝酒……")])])}]};var lt=s("VU/8")(ot,ct,!1,function(t){s("SEdE")},"data-v-d2676bcc",null).exports,ht={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>105){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2015/"+this.group+".jpg",href:"/static/img/2015/"+this.group+++".jpg"})}}},created:function(){this.getData()}},mt={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("开始加速衰老……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("黄河边的小时代，西湖边的小团圆……")])])}]};var ut=s("VU/8")(ht,mt,!1,function(t){s("TT3A")},"data-v-d802e4aa",null).exports,gt={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>209){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2016/"+this.group+".jpg",href:"/static/img/2016/"+this.group+++".jpg"})}}},created:function(){this.getData()}},ft={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("北京热……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("北京，比东京还热！")])])}]};var pt=s("VU/8")(gt,ft,!1,function(t){s("Il2P")},"data-v-7e7a0850",null).exports,dt={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>60){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2017/"+this.group+".jpg",href:"/static/img/2017/"+this.group+++".jpg"})}}},created:function(){this.getData()}},vt={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("总算，总算……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("等你等到花儿都开了！")])])}]};var _t=s("VU/8")(dt,vt,!1,function(t){s("m2wp")},"data-v-5569e857",null).exports,Ct={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>11){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2018/"+this.group+".jpg",href:"/static/img/2018/"+this.group+++".jpg"})}}},created:function(){this.getData()}},xt={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("三高朋友圈……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("还是吃白水面片子舒服！")])])}]};var bt=s("VU/8")(Ct,xt,!1,function(t){s("DRx3")},"data-v-f96f9f9e",null).exports,wt={data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:h.a},methods:{getData:function(){var t=0;for(t=0;t<=8;t++){if(this.group>428){try{this.$refs.waterfall.waterfallOver()}catch(t){console.log(t)}return}this.imgsArr=this.imgsArr.concat({src:"/static/img/2019/"+this.group+".jpg",href:"/static/img/2019/"+this.group+++".jpg"})}}},created:function(){this.getData()}},Dt={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"flex-shrink-0",attrs:{role:"main"}},[this._m(0),this._v(" "),a("div",{attrs:{id:"context"}},[a("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:this.imgsArr,imgWidth:480,maxCols:3,loadingDotCount:0,enablePullDownEvent:!0},on:{scrollReachBottom:this.getData}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h3",{staticClass:"jumbotron-heading"},[this._v("终于，终于……")]),this._v(" "),a("p",{staticClass:"lead text-muted"},[this._v("想你想的，都想不起来了！")])])}]};var Et=s("VU/8")(wt,Dt,!1,function(t){s("ostX")},"data-v-4ab1c4af",null).exports;e.a.use(n.a);var At=new n.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:c},{path:"/photo",name:"Photo",component:g},{path:"/about",name:"About",component:p},{path:"/photo_1997",name:"Photo_1997",component:_},{path:"/photo_1998",name:"Photo_1998",component:b},{path:"/photo_1999",name:"Photo_1999",component:E},{path:"/photo_2000",name:"Photo_2000",component:y},{path:"/photo_2001",name:"Photo_2001",component:R},{path:"/photo_2002",name:"Photo_2002",component:W},{path:"/photo_2003",name:"Photo_2003",component:U},{path:"/photo_2004",name:"Photo_2004",component:O},{path:"/photo_2005",name:"Photo_2005",component:T},{path:"/photo_2006",name:"Photo_2006",component:L},{path:"/photo_2007",name:"Photo_2007",component:Z},{path:"/photo_2008",name:"Photo_2008",component:Q},{path:"/photo_2009",name:"Photo_2009",component:q},{path:"/photo_2010",name:"Photo_2010",component:K},{path:"/photo_2011",name:"Photo_2011",component:at},{path:"/photo_2012",name:"Photo_2012",component:et},{path:"/photo_2013",name:"Photo_2013",component:nt},{path:"/photo_2014",name:"Photo_2014",component:lt},{path:"/photo_2015",name:"Photo_2015",component:ut},{path:"/photo_2016",name:"Photo_2016",component:pt},{path:"/photo_2017",name:"Photo_2017",component:_t},{path:"/photo_2018",name:"Photo_2018",component:bt},{path:"/photo_2019",name:"Photo_2019",component:Et}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:At,components:{App:r},template:"<App/>"})},SEdE:function(t,a){},TT3A:function(t,a){},Tpo4:function(t,a){},Y7LS:function(t,a){},eLU3:function(t,a){},gaNU:function(t,a){},iVW2:function(t,a){},ke4i:function(t,a){},l4Cz:function(t,a){},m2wp:function(t,a){},ostX:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.1a879fb0bb66e6e4b9e0.js.map