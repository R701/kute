webpackJsonp([17],{KZNW:function(n,t,o){t=n.exports=o("FZ+f")(!1),t.push([n.i,".button[data-v-0312ae61]{margin-bottom:1.5em;margin-left:0!important;margin-right:15px}.button[data-v-0312ae61]:last-child{margin-right:0}",""])},LRuj:function(n,t,o){var i=o("KZNW");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);o("rjj0")("5e65331e",i,!0)},Qbhh:function(n,t,o){"use strict";function i(n){o("LRuj")}Object.defineProperty(t,"__esModule",{value:!0});var c=o("Ws8Q"),e=o("twKl"),s=o("VU/8"),a=i,l=s(c.a,e.a,!1,a,"data-v-0312ae61",null);t.default=l.exports},Ws8Q:function(n,t,o){"use strict";t.a={methods:{onDefaultClick:function(){this.$notify({message:"发布成功"})},onClosableClick:function(){this.$notify({message:"发布成功",closable:!0,duration:0})},onIconClick:function(){this.$notify({message:"操作请谨慎",icon:"attention",iconSize:"19px"})},onInfoClick:function(){this.$notify({message:"正在发布",state:"info"})},onSuccessClick:function(){this.$notify({message:"发布成功",state:"success"})},onWarnClick:function(){this.$notify({message:"网络较慢",state:"warn"})},onErrorClick:function(){this.$notify({message:"发布失败",state:"error"})},onCallbackClick:function(){var n=this;this.$notify({message:"等待后成功",state:"info",loading:!0,onClose:function(){n.onSuccessClick()}})},onLinkClick:function(){this.$notify({message:"点击跳转到百度",blank:!0,href:"http://www.baidu.com/"})},onRouterLinkClick:function(){this.$notify({message:"点击跳转到配色页",nuxt:!0,href:"color"})}}}},twKl:function(n,t,o){"use strict";var i=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"c-toast"},[o("k-button",{on:{click:n.onDefaultClick}},[n._v("default")]),o("k-button",{on:{click:n.onClosableClick}},[n._v("closable")]),o("k-button",{on:{click:n.onIconClick}},[n._v("icon")]),o("br"),o("k-button",{on:{click:n.onInfoClick}},[n._v("info")]),o("k-button",{on:{click:n.onSuccessClick}},[n._v("success")]),o("k-button",{on:{click:n.onWarnClick}},[n._v("warn")]),o("k-button",{on:{click:n.onErrorClick}},[n._v("error")]),o("k-button",{on:{click:n.onCallbackClick}},[n._v("callback")]),o("br"),o("k-button",{on:{click:n.onLinkClick}},[n._v("link")]),o("k-button",{on:{click:n.onRouterLinkClick}},[n._v("router link")])],1)},c=[],e={render:i,staticRenderFns:c};t.a=e}});
//# sourceMappingURL=notification.e2e9fa53363365c3266f.js.map