webpackJsonp([26],{EQv7:function(e,t,r){"use strict";t.a={data:function(){return this.setNav(),{navigator:[{divider:!0,color:"$grey",margin:"2em",text:"Basic"},{text:"Color",href:"color",ch:"配色"},{text:"Typography",href:"typography",ch:"排版"},{text:"Spinner",href:"spinner",ch:"加载动画"},{divider:!0,color:"$grey",margin:"2em",text:"Form"},{text:"Button",href:"button",ch:"按钮"},{text:"Input",href:"input",ch:"输入框"},{text:"Select",href:"select",ch:"选择框"},{text:"Group",href:"group",ch:"组合"},{text:"Textarea",href:"textarea",ch:"长文本输入框"},{text:"Checkbox/Radio",href:"checkboxradio",ch:"复选/单选"},{text:"Switch",href:"switch",ch:"开关"},{text:"Slider",href:"slider",ch:"滑块"},{text:"Picker",href:"picker",ch:"时间/日期 选择器",badge:"TODO",disabled:!0},{text:"Editor",href:"editor",ch:"富文本编辑器",badge:"TODO",disabled:!0},{divider:!0,color:"$grey",margin:"2em",text:"View"},{text:"Basic Container",href:"container",ch:"基础容器"},{text:"Scrollable Container",href:"scrollable-container",ch:"滚动容器"},{text:"Carousel",href:"carousel",ch:"轮播",badge:"TODO",disabled:!0},{text:"Panel",href:"panel",ch:"板块"},{text:"Divider",href:"divider",ch:"分割线"},{divider:!0,color:"$grey",margin:"2em",text:"Navigation"},{text:"Popover",href:"popover",ch:"气泡弹出框"},{text:"Navigator",href:"navigator",ch:"导航栏"},{text:"Breadcrumb",href:"breadcrumb",ch:"面包屑导航",badge:"TODO"},{text:"Tabs",href:"tabs",ch:"标签页"},{text:"Pagination",href:"pagination",ch:"分页",badge:"TODO",disabled:!0},{divider:!0,color:"$grey",margin:"2em",text:"Overlay"},{text:"Toast",href:"toast",ch:"吐司提示"},{text:"Notification",href:"notification",ch:"通知"},{text:"Dialog",href:"dialog",ch:"对话框"},{text:"Modal",href:"modal",ch:"弹窗"},{text:"Loading",href:"loading",ch:"加载遮罩"},{divider:!0,color:"$grey",margin:"2em",text:"Data"},{text:"List",href:"list",ch:"列表"},{text:"Table",href:"table",ch:"表格",badge:"TODO",disabled:!0},{text:"Progress",href:"progress",ch:"进度条"}],initialNav:[0],currentTitle:""}},computed:{path:function(){var e=/\/components\/(.+)/.exec(this.$route.path);return e&&e[1]?e[1]:"color"}},mounted:function(){this.setNav()},methods:{setNav:function(){var e=this;if(this.navigator)e:for(var t=0,r=this.navigator.length;t<r;t++){var a=this.navigator[t];if(a.children)for(var i=0,n=a.children.length;i<n;i++){var c=a.children[i];if(c.href===this.path){this.$nextTick(function(){e.$refs.nav.setValue([t,i]),e.currentTitle=c.text+" "+c.ch});break e}if(c.children)for(var h=0,o=c.children.length;h<o;h++){var s=c.children[h];if(s.href===this.path){this.$nextTick(function(){e.$refs.nav.setValue([t,i,h]),e.currentTitle=s.text+" "+s.ch});break e}}}else if(a.href===this.path){this.$nextTick(function(){e.$refs.nav.setValue([t]),e.currentTitle=a.text+" "+a.ch});break}}}}}},dvAg:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("EQv7"),i=r("sd6E"),n=r("VU/8"),c=n(a.a,i.a,!1,null,null,null);t.default=c.exports},sd6E:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("k-container",{attrs:{pv:"36",flex:""}},[r("k-container",{staticClass:"left",attrs:{w:"20em",ph:"2em"}},[r("keep-alive",[r("k-navigator",{ref:"nav",staticStyle:{"margin-top":"-1em"},attrs:{items:e.navigator,"base-path":"/components/","badge-color":"$grey-darker",router:""}})],1)],1),r("k-container",{staticClass:"right",attrs:{pr:"60"}},[r("k-panel",{staticStyle:{position:"relative"},attrs:{header:e.currentTitle}},[r("k-container",[r("keep-alive",[r("nuxt-child")],1)],1)],1)],1)],1)},i=[],n={render:a,staticRenderFns:i};t.a=n}});
//# sourceMappingURL=components.d67362cc0c881e5c4c7f.js.map