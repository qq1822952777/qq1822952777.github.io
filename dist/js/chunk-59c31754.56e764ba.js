(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59c31754"],{1343:function(t,i,s){},"43f2":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"particulars"},[s("van-nav-bar",{attrs:{title:"课程详情","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"right",fn:function(){return[s("van-icon",{attrs:{name:"cluster-o"},on:{click:t.onClickRight}})]},proxy:!0}])}),s("div",{staticClass:"qb"},[s("div",{staticClass:"qb1"},[s("van-swipe",{staticClass:"imsg-w",attrs:{autoplay:3e3}},t._l(t.images,(function(t,i){return s("van-swipe-item",{key:i},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover_img,expression:"image.cover_img"}]})])})),1),s("div",{staticClass:"course"},[s("p",{staticClass:"ys"},[t._v(" "+t._s(t.list.title)+" "),s("van-icon",{attrs:{name:"star",color:1==t.list.is_buy?"red":""},on:{click:function(i){return t.sc(t.list)}}})],1),s("p",{staticClass:"ys3"},[t._v(" 共"+t._s(t.list.total_periods)+"课时 | "+t._s(t.list.is_free)+"人已报名 ")]),s("div",{staticClass:"bm-top"},[s("p",[t._v("教学团队")]),s("img",{attrs:{src:t.list2.avatar,alt:""}}),s("p",[t._v(t._s(t.list2.teacher_name))])]),s("van-tabs",{staticStyle:{width:"90%",margin:"auto"}},[s("van-tab",{staticStyle:{"font-size":"0.35rem"},attrs:{title:"课程介绍"}},[s("p",{staticStyle:{"font-size":"0.4rem"}},[t._v("课程介绍")]),s("p",{staticStyle:{"font-size":"0.3rem","padding-top":"0.2rem"},domProps:{innerHTML:t._s(t.list.course_details)}})]),s("van-tab",{staticStyle:{"font-size":"0.3rem"},attrs:{title:"关联大纲"}},[s("p",{staticStyle:{"font-size":"0.4rem"}},[t._v("课程大纲")]),s("ul",t._l(t.list3,(function(i,e){return s("li",{key:e,staticStyle:{"margin-top":"0.3rem",color:"red"}},[t._v(" "+t._s(i.periods_title)+" ")])})),0)]),s("van-tab",{attrs:{title:"课程评价"}},t._l(t.list4,(function(i,e){return s("div",{key:e,staticClass:"evaluate"},[s("div",{staticClass:"evaluate-top"},[s("div",[s("img",{attrs:{src:i.avatar,alt:""}})]),s("div",[s("p",[t._v(t._s(i.created_at))]),s("p",t._l(i.grade,(function(t,i){return s("van-icon",{key:i,attrs:{name:"star",color:"#FED201"}})})),1)])]),s("p",{staticClass:"ke1",staticStyle:{"font-size":"0.3rem"}},[t._v(t._s(i.nickname))]),s("p",{staticClass:"ke2",staticStyle:{"font-size":"0.3rem",color:"#ADADAD"}},[t._v(" 2018-01-01 -- 18:19:123 ")])])})),0)],1)],1)],1)]),s("div",{staticClass:"course-bom",on:{click:t.gm}},[t._v(t._s(t.title))]),s("van-popup",{staticClass:"popup-bom",style:{height:"40%"},attrs:{position:"bottom"},model:{value:t.show2,callback:function(i){t.show2=i},expression:"show2"}},[s("div",[s("ul",[s("li",{on:{click:t.wx}},[s("img",{attrs:{src:"/images_J/wx.png\n          ",alt:""}}),s("p",[t._v("微信好友")])]),s("li",[s("img",{attrs:{src:"/images_J/fx.png\n          ",alt:""}}),s("p",[t._v("朋友圈")])]),s("li",[s("img",{attrs:{src:"/images_J/qq.png\n          ",alt:""}}),s("p",[t._v("QQ好友")])]),s("li",[s("img",{attrs:{src:"/images_J/kj.png\n          ",alt:""}}),s("p",[t._v("QQ空间")])])])]),s("div",{on:{click:function(i){t.show2=!1}}},[t._v("取消")])])],1)},a=[],o=s("7b12"),n={data:function(){return{show2:!1,images:[],list:[],list2:[],id:"",list3:[],list4:[],title:""}},mounted:function(){var t=this;1==this.$store.state.id?this.title="立即学习":this.title="立即报名",Object(o["d"])(this.$route.query.id).then((function(i){console.log(i),t.images=i.recommendCourse,t.list=i.info,t.id=i.info.id,t.list2=i.teachers[0],console.log(t.list),Object(o["h"])({id:i.info.id,limit:10,page:1}).then((function(i){console.log(i),t.list4=i.list})),Object(o["a"])(i.info.id).then((function(i){console.log(i),t.list3=i.data}))})),console.log(this.$route.query.id)},methods:{sc:function(t){console.log(t),1==this.show?Object(o["j"])(t.id).then((function(t){})):console.log("不能取消收藏"),console.log(t)},wx:function(){this.$router.push({path:"/WeChat"})},gm:function(){this.$store.state.token?(console.log(this.list.id),Object(o["b"])({id:this.list.id,type:5}).then((function(t){console.log(t)})),this.$router.push({path:"/verify"})):this.$router.push({path:"/Login"})},onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){this.show2=!0}}},l=n,c=(s("d021"),s("2877")),r=Object(c["a"])(l,e,a,!1,null,null,null);i["default"]=r.exports},d021:function(t,i,s){"use strict";s("1343")}}]);
//# sourceMappingURL=chunk-59c31754.56e764ba.js.map