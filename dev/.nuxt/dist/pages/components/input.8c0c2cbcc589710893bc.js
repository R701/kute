webpackJsonp([4],{"+Df2":function(e,a,t){"use strict";var i=t("lS9U");a.a={components:{NamedBlock:i.a},data:function(){return{value:"fskdjfkakjf",viewIconName:"view",viewType:"text"}},methods:{passwordChecker:function(e){return e&&e.length<8?"密码长度过短，不安全":""},onViewIconClick:function(){"view"===this.viewIconName?(this.viewIconName="unview",this.viewType="password"):(this.viewIconName="view",this.viewType="text")}}}},"1LYJ":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"c-input"},[t("named-block",{attrs:{name:"initial",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"disabled",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名",disabled:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"success",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名",state:"success"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"warn",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名",state:"warn"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"error",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名",state:"error"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"error message",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名",validator:"请输入真实姓名"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"validator",position:"right"}},[t("k-input",{attrs:{placeholder:"请输入密码",type:"password",validatorEvent:"input change",validator:e.passwordChecker},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"clearable",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名",clearable:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"loading",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名",loading:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"auto select",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名","auto-select":""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"icon search",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名",icon:"search"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"icon attention",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名",icon:"attention"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"icon view clickable",position:"right"}},[t("k-input",{attrs:{placeholder:"密码",icon:e.viewIconName,type:e.viewType,"icon-clickable":""},on:{"icon-click":e.onViewIconClick},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"suggestions",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名",suggestions:["Chris","Christian","Christina","Christ","Christmas","Chris","Christian","Christina"]},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"with label",position:"right"}},[t("k-input",{attrs:{placeholder:"姓名",label:"真实姓名："},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"block",position:"bottom"}},[t("k-input",{attrs:{placeholder:"姓名",block:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("k-container",{attrs:{flex:""}},[t("named-block",{attrs:{name:"small",position:"bottom"}},[t("k-input",{attrs:{placeholder:"姓名",icon:"search",clearable:"",suggestions:["Chris","Christian","Christina","Christ","Christmas","Chris","Christian","Christina"],size:"small"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"default",position:"bottom"}},[t("k-input",{attrs:{placeholder:"姓名",icon:"search",clearable:"",suggestions:["Chris","Christian","Christina","Christ","Christmas","Chris","Christian","Christina"],size:"default"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("br"),t("named-block",{attrs:{name:"large",position:"bottom"}},[t("k-input",{attrs:{placeholder:"姓名",icon:"search",clearable:"",suggestions:["Chris","Christian","Christina","Christ","Christmas","Chris","Christian","Christina"],size:"large"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)],1)],1)},n=[],l={render:i,staticRenderFns:n};a.a=l},"I+cG":function(e,a,t){"use strict";a.a={props:{name:String,position:{type:String,default:"bottom",validator:function(e){return["top","bottom","left","right"].indexOf(e)>=0}}}}},O6db:function(e,a,t){"use strict";function i(e){t("ccAb")}Object.defineProperty(a,"__esModule",{value:!0});var n=t("+Df2"),l=t("1LYJ"),o=t("VU/8"),r=i,s=o(n.a,l.a,!1,r,null,null);a.default=s.exports},Oulj:function(e,a,t){var i=t("ewbZ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("665c6fab",i,!0)},Y4ak:function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{class:["named-block",e.position,"_"+e.name]},[t("div",{staticClass:"named-block-main"},[e._t("default")],2),t("div",{staticClass:"named-block-name"},[e._v(e._s(e.name))])])},n=[],l={render:i,staticRenderFns:n};a.a=l},ccAb:function(e,a,t){var i=t("vThO");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("0900f57f",i,!0)},ewbZ:function(e,a,t){a=e.exports=t("FZ+f")(!1),a.push([e.i,".named-block{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.named-block.top{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.named-block.bottom{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.named-block.right{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.named-block.left{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.named-block-name{font-size:12px;color:#8a8f99;text-shadow:0 2px 2px rgba(0,0,0,.75);line-height:3;text-align:center}",""])},lS9U:function(e,a,t){"use strict";function i(e){t("Oulj")}var n=t("I+cG"),l=t("Y4ak"),o=t("VU/8"),r=i,s=o(n.a,l.a,!1,r,null,null);a.a=s.exports},vThO:function(e,a,t){a=e.exports=t("FZ+f")(!1),a.push([e.i,".named-block{margin-right:16px}.c-input .right .named-block-name{margin-left:32px}.c-input .named-block._block .named-block-main{width:100%}.c-input .named-block._suggestions{z-index:2;position:relative}",""])}});
//# sourceMappingURL=input.8c0c2cbcc589710893bc.js.map