webpackJsonp([21],{"2mvn":function(t,o,n){"use strict";o.a={methods:{onDefaultClick:function(){var t=this,o=this.$showDialog({title:"请确认",message:"该操作不可撤销，确认要删除这个片单吗？",onConfirm:function(){t.$showToast({message:"片单已删除"})},onCancel:function(){return t.$showDialog({title:"确认",message:"是否关闭确认窗口？",onConfirm:function(){o.close()}}),!0},onClose:function(){t.$showToast({message:"已关闭"})}})},onHideCancelClick:function(){this.$showDialog({title:"请确认",message:"取消按钮被隐藏了。🌚🌚🌚🌚🌚🌚",hideCancelButton:!0})},onIconClick:function(){this.$showDialog({title:"请确认",message:"看到对话框标题旁边的ICON了吗？那是可以自定义的🌚🌚🌚🌚🌚🌚",icon:"attention",iconSize:"26px"})},onInfoClick:function(){this.$showDialog({title:"请确认",message:"Info 是默认的状态色",state:"info"})},onSuccessClick:function(){this.$showDialog({title:"请确认",message:"该操作不可撤销，确认要删除这个片单吗？",state:"success"})},onWarnClick:function(){this.$showDialog({title:"请确认",message:"该操作不可撤销，确认要删除这个片单吗？",state:"warn"})},onErrorClick:function(){this.$showDialog({title:"请确认",message:"该操作不可撤销，确认要删除这个片单吗？",state:"error"})},onCustomClick:function(){this.$showDialog({title:"请确认",message:"该操作不可撤销，确认要删除这个片单吗？",confirmText:"Yeah",cancelText:"Nah"})},onSwitchedClick:function(){this.$showDialog({title:"请确认",message:"该操作不可撤销，确认要删除这个片单吗？",primaryButton:"cancel"})},onScrollableClick:function(){this.$showDialog({title:"请确认",message:"该操作不可撤销，确认要删除这个片单吗？",freezeScreen:!1})}}}},"3Voe":function(t,o,n){"use strict";var i=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"c-toast"},[n("k-button",{on:{click:t.onDefaultClick}},[t._v("default")]),n("k-button",{on:{click:t.onHideCancelClick}},[t._v("hide cancel")]),n("k-button",{on:{click:t.onIconClick}},[t._v("icon")]),n("br"),n("k-button",{on:{click:t.onInfoClick}},[t._v("info")]),n("k-button",{on:{click:t.onSuccessClick}},[t._v("success")]),n("k-button",{on:{click:t.onWarnClick}},[t._v("warn")]),n("k-button",{on:{click:t.onErrorClick}},[t._v("error")]),n("br"),n("k-button",{on:{click:t.onCustomClick}},[t._v("自定义按钮文字")]),n("k-button",{on:{click:t.onSwitchedClick}},[t._v("更换主按钮")]),n("k-button",{on:{click:t.onScrollableClick}},[t._v("不禁用滚动")])],1)},e=[],c={render:i,staticRenderFns:e};o.a=c},"3xk/":function(t,o,n){"use strict";function i(t){n("YZiT")}Object.defineProperty(o,"__esModule",{value:!0});var e=n("2mvn"),c=n("3Voe"),s=n("VU/8"),a=i,l=s(e.a,c.a,!1,a,"data-v-4d05cabe",null);o.default=l.exports},YZiT:function(t,o,n){var i=n("YfWx");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("73ead972",i,!0)},YfWx:function(t,o,n){o=t.exports=n("FZ+f")(!1),o.push([t.i,".button[data-v-4d05cabe]{margin-bottom:1.5em;margin-left:0!important;margin-right:15px}.button[data-v-4d05cabe]:last-child{margin-right:0}",""])}});
//# sourceMappingURL=dialog.d0d159445a0de66c3550.js.map