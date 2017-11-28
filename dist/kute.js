/*!
 *     kute v0.0.10
 *     https://github.com/R701/kute
 * 
 *     Copyright (c) 2017 zhanziyang & thisisandy
 *     Released under the MIT license
 *   
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["Kute"] = factory(require("vue"));
	else
		root["Kute"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue-outside-events/dist/vue-outside-events.min.js
var vue_outside_events_min = __webpack_require__(4);
var vue_outside_events_min_default = /*#__PURE__*/__webpack_require__.n(vue_outside_events_min);

// EXTERNAL MODULE: ./src/stylus/main.styl
var main = __webpack_require__(5);
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// EXTERNAL MODULE: ./node_modules/is-css-color/index.js
var is_css_color = __webpack_require__(6);
var is_css_color_default = /*#__PURE__*/__webpack_require__.n(is_css_color);

// CONCATENATED MODULE: ./src/utils/styling.js


/* harmony default export */ var styling = ({
  getCSSLength: function getCSSLength(val, math) {
    if (typeof +val === 'number' && !isNaN(val)) {
      if (typeof math === 'function') {
        return math(+val) + 'px';
      }
      return val + 'px';
    }

    var units = ['%', 'em', 'ex', 'cap', 'ch', 'ic', 'rem', '1h', 'rlh', 'vh', 'vw', 'vi', 'vb', 'vmin', 'vmax', 'px', 'mm', 'q', 'cm', 'in', 'pt', 'pc'];
    if (typeof val === 'string' && new RegExp('^[\\d.]+(' + units.join('|') + ')$').test(val)) {
      if (typeof math === 'function') {
        var result = new RegExp('^([\\d.]+)(' + units.join('|') + ')$').exec(val);
        var num = result[1];
        var unit = result[2];
        return math(+num) + unit;
      } else {
        return val;
      }
    }

    if (typeof val === 'string' && /([1-9]\d*)\/([1-9]\d*)/.test(val)) {
      var _result = /([1-9]\d*)\/([1-9]\d*)/.exec(val);
      var numerator = void 0,
          denominator = void 0;
      numerator = _result[1];
      denominator = _result[2];
      var number = numerator / denominator * 100;
      if (typeof math === 'function') {
        number = math(number);
      }
      return number + '%';
    }

    return 'auto';
  },
  getCSSColor: function getCSSColor(val) {
    if (is_css_color_default()(val)) return val;

    var cssSettings = {
      '$theme-primary': '#0287c8',
      '$theme-primary-lighter': '#03abff',
      '$theme-primary-darker': '#01608f',
      /*  */
      '$theme-secondary': '#E5B547',
      '$theme-secondary-lighter': '#ffca4f',
      '$theme-secondary-darker': '#cca23f',
      /*  */
      $black: '#272727',
      '$black-lighter': '#303030',
      '$black-darker': '#222222',
      /*  */
      $grey: '#737780',
      '$grey-lighter': '#8a8f99',
      '$grey-darker': '#5c5f66',
      /*  */
      $white: '#dcdee0',
      '$white-darker': '#c8cacc',
      '$white-lighter': '#eff1f3',
      /*  */
      '$state-info': '#009fb7',
      '$state-success': '#00c246',
      '$state-warn': '#f7990c',
      '$state-error': '#f24236'
    };

    return cssSettings[val] || val;
  },
  getPxValue: function getPxValue(str) {
    var result = /^(\d+)px$/.exec(str);
    return result ? +result[1] : null;
  },
  assignStyle: function assignStyle(targetElem, sourceElem) {
    if (!sourceElem) return;
    var source = sourceElem.style;
    if (!('style' in targetElem)) {
      targetElem.style = {};
    }
    for (var rule in source) {
      if (source.hasOwnProperty(rule) && !!source[rule]) {
        targetElem.style[rule] = source[rule];
      }
    }

    return targetElem;
  }
});
// EXTERNAL MODULE: ./node_modules/object.omit/index.js
var object_omit = __webpack_require__(7);
var object_omit_default = /*#__PURE__*/__webpack_require__.n(object_omit);

// EXTERNAL MODULE: ./node_modules/object-assign/index.js
var object_assign = __webpack_require__(2);
var object_assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue__ = __webpack_require__(1);
var external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default = /*#__PURE__*/__webpack_require__.n(external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue__);

// CONCATENATED MODULE: ./src/utils/index.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ var utils = (_extends({}, styling, {
  isTolerantNumber: function isTolerantNumber(n) {
    n = +n;
    return !isNaN(n);
  },
  isArray: function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
  },


  assign: object_assign_default.a,

  omit: object_omit_default.a,

  isVM: function isVM(obj) {
    return obj instanceof external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default.a;
  },
  isWhichVM: function isWhichVM(obj, name) {
    return this.isVM(obj) && obj.$options.name === name;
  },

  noop: function noop() {}
}));
// CONCATENATED MODULE: ./src/components/Button/_props.js
/* harmony default export */ var _props = ({
  outline: Boolean,
  block: Boolean,
  disabled: Boolean,
  loading: Boolean,
  disableWhileLoading: {
    type: Boolean,
    default: true
  },
  ghost: Boolean,
  state: {
    type: String,
    default: 'default'
  }
});
// CONCATENATED MODULE: ./src/mixins/with-icon.js
/* harmony default export */ var with_icon = ({
  props: {
    icon: {
      default: ''
    },
    iconPosition: {
      default: 'prepend',
      validator: function validator(val) {
        return val == 'prepend' || val == 'append';
      }
    },
    iconClickable: Boolean,
    iconColor: {
      default: 'inherit'
    },
    iconSize: {
      default: 'inherit'
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/linkable.js
/* harmony default export */ var linkable = ({
  props: {
    router: Boolean,
    nuxt: Boolean,
    href: {
      type: String,
      default: ''
    },
    basePath: {
      default: ''
    },
    blank: Boolean,
    preventDefault: Boolean
  },

  computed: {
    fullHref: function fullHref() {
      return '' + (this.basePath || '') + this.href;
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/size.js
/* harmony default export */ var size = ({
  props: {
    size: {
      type: String,
      default: 'default',
      validator: function validator(val) {
        var valid = ['default', 'large', 'small'];
        return valid.indexOf(val) >= 0;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Spinner/_props.js
/* harmony default export */ var Spinner__props = ({
  d: {
    default: '1.5em',
    type: [String, Number]
  },

  color: {
    default: '#eee'
  },

  rainbow: Boolean,

  strokeWidth: {
    default: 2,
    type: Number
  },

  duration: {
    default: 2,
    type: Number
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Spinner/Spinner.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Spinner = ({
  props: Spinner__props,

  computed: {
    width: function width() {
      return utils.getCSSLength(this.d);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-412a114a","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Spinner/Spinner.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['spinner', { '-rainbow': _vm.rainbow }],style:({width: _vm.width})},[_c('svg',{staticClass:"circular",style:({animationDuration: _vm.duration + 's'}),attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"path",style:({animationDuration: _vm.duration * (3/4) + 's'}),attrs:{"cx":"50","cy":"50","r":"20","fill":"none","stroke":_vm.color,"stroke-width":_vm.strokeWidth,"stroke-miterlimit":"10"}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Spinner_Spinner = (esExports);
// CONCATENATED MODULE: ./src/components/Spinner/Spinner.vue
function injectStyle (ssrContext) {
  __webpack_require__(12)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-412a114a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Spinner,
  Spinner_Spinner,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Spinner_Spinner = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Button/Button.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var Button = ({
  props: _props,
  mixins: [with_icon, linkable, size],

  components: {
    Spinner: components_Spinner_Spinner
  },

  data: function data() {
    return {
      active: false
    };
  },


  computed: {
    root: function root() {
      if (this.blank) {
        return 'a';
      } else if (this.nuxt) {
        return 'nuxt-link';
      } else if (this.router) {
        return 'router-link';
      } else if (this.href) {
        return 'a';
      } else {
        return 'button';
      }
    },
    emptySlot: function emptySlot() {
      return !this.$slots.default;
    }
  },

  methods: {
    onClick: function onClick(evt) {
      if (this.disabled || this.loading && this.disableWhileLoading) {
        return;
      }
      this.$emit('click', evt);
    },
    onFocus: function onFocus(evt) {
      this.$emit('focus', evt);
    },
    onBlur: function onBlur(evt) {
      this.$emit('blur', evt);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cb190364","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Button/Button.vue
var Button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.root,{tag:"component",class:['button', _vm.size ? ("-" + _vm.size) : '', _vm.state ? ("-" + _vm.state + "-bg") : '', { '-link': _vm.href, '-no-outline': !_vm.outline,  '-block': _vm.block,  '-no-text': _vm.emptySlot, '-ghost': _vm.ghost } ],attrs:{"to":_vm.fullHref,"href":_vm.fullHref,"target":_vm.blank ? '_blank' : '_self',"disabled":_vm.disabled || (_vm.disableWhileLoading && _vm.loading)},on:{"click":_vm.onClick,"focus":_vm.onFocus,"blur":_vm.onBlur}},[(_vm.loading)?_c('div',{staticClass:"button-spinner"},[_c('spinner')],1):_vm._e(),_vm._v(" "),_c('span',{class:[ 'button-text', { '-faded': _vm.loading } ]},[(_vm.icon && _vm.iconPosition == 'prepend')?_c('i',{class:['button-icon', 'prepend', ("" + (_vm.config$.iconClassPrefix) + _vm.icon)]}):_vm._e(),_vm._v(" "),_vm._t("default"),_vm._v(" "),(_vm.icon && _vm.iconPosition == 'append')?_c('i',{class:['button-icon', 'append', ("" + (_vm.config$.iconClassPrefix) + _vm.icon)]}):_vm._e()],2)])}
var Button_staticRenderFns = []
var Button_esExports = { render: Button_render, staticRenderFns: Button_staticRenderFns }
/* harmony default export */ var Button_Button = (Button_esExports);
// CONCATENATED MODULE: ./src/components/Button/Button.vue
function Button_injectStyle (ssrContext) {
  __webpack_require__(11)
}
var Button_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Button___vue_template_functional__ = false
/* styles */
var Button___vue_styles__ = Button_injectStyle
/* scopeId */
var Button___vue_scopeId__ = "data-v-cb190364"
/* moduleIdentifier (server only) */
var Button___vue_module_identifier__ = null
var Button_Component = Button_normalizeComponent(
  Button,
  Button_Button,
  Button___vue_template_functional__,
  Button___vue_styles__,
  Button___vue_scopeId__,
  Button___vue_module_identifier__
)

/* harmony default export */ var components_Button_Button = (Button_Component.exports);

// CONCATENATED MODULE: ./src/components/Container/_props.js
/* harmony default export */ var Container__props = ({
  tag: {
    type: String,
    default: 'div'
  },
  inline: Boolean,
  flex: Boolean,
  column: Boolean,
  wrap: Boolean,
  relative: Boolean,
  scroll: Boolean,
  overflow: {
    default: true,
    type: Boolean
  },
  scrollX: Boolean,
  scrollY: Boolean,
  scrollLeft: Number,
  scrollTop: Number,
  scrollIntoView: String,
  upperThreshold: {
    type: Number,
    default: 20
  },
  lowerThreshold: {
    type: Number,
    default: 20
  },
  w: [Number, String],
  h: [Number, String],
  pa: [Number, String],
  ph: [Number, String],
  pv: [Number, String],
  pt: [Number, String],
  pb: [Number, String],
  pl: [Number, String],
  pr: [Number, String],
  ma: [Number, String],
  mh: [Number, String],
  mv: [Number, String],
  mt: [Number, String],
  mb: [Number, String],
  ml: [Number, String],
  mr: [Number, String],
  bg: String
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Container/Container.vue
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Container = ({
  props: Container__props,

  data: function data() {
    return {
      lastScroll: {}
    };
  },


  computed: {
    computedClassNames: function computedClassNames() {
      return {
        '-flex': this.flex && !this.inline,
        '-inline-flex': this.flex && this.inline,
        '-inline': !this.flex && this.inline,
        '-flex-wrap': this.flex && this.wrap,
        '-flex-column': this.column,
        '-relative': this.relative,
        '-scroll': this.scroll,
        '-scroll-x': this.scrollX && !this.scrollY,
        '-scroll-y': this.scrollY && !this.scrollX
      };
    },
    inColumnParent: function inColumnParent() {
      return this.$parent.column && this.$parent.flex;
    },
    boxStyle: function boxStyle() {
      var obj = {};
      if (this.w) {
        obj.width = utils.getCSSLength(this.w);
        if (!this.inColumnParent) {
          obj.flexBasis = utils.getCSSLength(this.w);
          obj.flexGrow = 0;
        }
      }
      if (this.h) {
        obj.height = utils.getCSSLength(this.h);
        if (this.inColumnParent) {
          obj.flexBasis = utils.getCSSLength(this.h);
          obj.flexGrow = 0;
        }
      }

      if (this.pa) {
        obj.padding = utils.getCSSLength(this.pa);
      }
      if (this.ph) {
        obj.paddingLeft = utils.getCSSLength(this.ph);
        obj.paddingRight = utils.getCSSLength(this.ph);
      }
      if (this.pv) {
        obj.paddingTop = utils.getCSSLength(this.pv);
        obj.paddingBottom = utils.getCSSLength(this.pv);
      }
      if (this.pl) {
        obj.paddingLeft = utils.getCSSLength(this.pl);
      }
      if (this.pr) {
        obj.paddingRight = utils.getCSSLength(this.pr);
      }
      if (this.pt) {
        obj.paddingTop = utils.getCSSLength(this.pt);
      }
      if (this.pb) {
        obj.paddingBottom = utils.getCSSLength(this.pb);
      }

      if (this.ma) {
        obj.margin = utils.getCSSLength(this.ma);
      }
      if (this.mh) {
        obj.marginLeft = utils.getCSSLength(this.mh);
        obj.marginRight = utils.getCSSLength(this.mh);
      }
      if (this.mv) {
        obj.marginTop = utils.getCSSLength(this.mv);
        obj.marginBottom = utils.getCSSLength(this.mv);
      }
      if (this.ml) {
        obj.marginLeft = utils.getCSSLength(this.ml);
      }
      if (this.mr) {
        obj.marginRight = utils.getCSSLength(this.mr);
      }
      if (this.mt) {
        obj.marginTop = utils.getCSSLength(this.mt);
      }
      if (this.mb) {
        obj.marginBottom = utils.getCSSLength(this.mb);
      }
      if (this.bg) {
        obj.backgroundColor = utils.getCSSColor(this.bg);
      }

      if (this.overflow) {
        obj.overflow = 'visible';
      } else {
        obj.overflow = 'hidden';
      }

      return obj;
    }
  },

  created: function created() {
    if (this.scrollX && this.scrollY) {
      throw new Error('"scrollX" and "scrollY" should not be set at the same time.');
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.scrollY && this.scrollTop > 0) {
      this.$refs.container.scrollTop = this.scrollTop;
    }

    if (this.scrollX && this.scrollLeft > 0) {
      this.$refs.container.scrollLeft = this.scrollLeft;
    }

    if (this.scrollIntoView && this.$refs.container.querySelector(this.scrollIntoView)) {
      this.$nextTick(function () {
        _this.$refs.container.querySelector(_this.scrollIntoView).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  },


  methods: {
    onScroll: function onScroll(_ref) {
      var target = _ref.target;

      if (!this.scrollX && !this.scrollY) return;
      var scrollLeft = target.scrollLeft,
          scrollTop = target.scrollTop,
          scrollWidth = target.scrollWidth,
          scrollHeight = target.scrollHeight,
          clientWidth = target.clientWidth,
          clientHeight = target.clientHeight;

      var lastScrollLeft = (this.lastScroll ? this.lastScroll.scrollLeft : null) || this.scrollLeft || 0;
      var lastScrollTop = (this.lastScroll ? this.lastScroll.scrollTop : null) || this.scrollTop || 0;
      var deltaLeft = scrollLeft - lastScrollLeft;
      var deltaTop = scrollTop - lastScrollTop;
      var detail = { scrollLeft: scrollLeft, scrollTop: scrollTop, scrollWidth: scrollWidth, scrollHeight: scrollHeight, clientWidth: clientWidth, clientHeight: clientHeight, deltaLeft: deltaLeft, deltaTop: deltaTop };
      this.$emit('scroll', detail);
      if (deltaTop > 0 && scrollTop >= scrollHeight - clientHeight - this.lowerThreshold || deltaLeft > 0 && scrollLeft >= scrollWidth - clientWidth - this.lowerThreshold) {
        this.$emit('scroll-to-lower', detail);
      }

      if (deltaTop < 0 && scrollTop <= this.upperThreshold || deltaLeft < 0 && scrollLeft <= this.upperThreshold) {
        this.$emit('scroll-to-upper', detail);
      }

      this.lastScroll = { scrollLeft: scrollLeft, scrollTop: scrollTop };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-276f7e1e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Container/Container.vue
var Container_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{ref:"container",tag:"component",class:['container', _vm.computedClassNames],style:(_vm.boxStyle),on:{"scroll":_vm.onScroll}},[_vm._t("default")],2)}
var Container_staticRenderFns = []
var Container_esExports = { render: Container_render, staticRenderFns: Container_staticRenderFns }
/* harmony default export */ var Container_Container = (Container_esExports);
// CONCATENATED MODULE: ./src/components/Container/Container.vue
function Container_injectStyle (ssrContext) {
  __webpack_require__(13)
}
var Container_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Container___vue_template_functional__ = false
/* styles */
var Container___vue_styles__ = Container_injectStyle
/* scopeId */
var Container___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Container___vue_module_identifier__ = null
var Container_Component = Container_normalizeComponent(
  Container,
  Container_Container,
  Container___vue_template_functional__,
  Container___vue_styles__,
  Container___vue_scopeId__,
  Container___vue_module_identifier__
)

/* harmony default export */ var components_Container_Container = (Container_Component.exports);

// CONCATENATED MODULE: ./src/components/Panel/_props.js
/* harmony default export */ var Panel__props = ({
  header: String,
  plain: Boolean,
  backgroundColor: String
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Panel/Panel.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Panel = ({
  props: Panel__props,

  computed: {
    bgValue: function bgValue() {
      if (this.backgroundColor) {
        return utils.getCSSColor(this.backgroundColor);
      } else {
        return utils.getCSSColor('$black-lighter');
      }
    }
  },

  methods: {
    onHeaderClick: function onHeaderClick() {}
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a1febdb4","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Panel/Panel.vue
var Panel_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['panel', { '-plain': _vm.plain }],style:({backgroundColor: _vm.bgValue})},[(_vm.$slots.head || _vm.header)?_c('div',{staticClass:"panel-head",on:{"click":_vm.onHeaderClick}},[(_vm.$slots.head)?_vm._t("head"):_c('h2',{staticClass:"title"},[_vm._v(_vm._s(_vm.header))])],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"panel-body"},[_vm._t("default")],2),_vm._v(" "),(_vm.$slots.foot)?_c('div',{staticClass:"panel-foot"},[(_vm.$slots.foot)?_vm._t("foot"):_vm._e()],2):_vm._e()])}
var Panel_staticRenderFns = []
var Panel_esExports = { render: Panel_render, staticRenderFns: Panel_staticRenderFns }
/* harmony default export */ var Panel_Panel = (Panel_esExports);
// CONCATENATED MODULE: ./src/components/Panel/Panel.vue
function Panel_injectStyle (ssrContext) {
  __webpack_require__(14)
}
var Panel_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Panel___vue_template_functional__ = false
/* styles */
var Panel___vue_styles__ = Panel_injectStyle
/* scopeId */
var Panel___vue_scopeId__ = "data-v-a1febdb4"
/* moduleIdentifier (server only) */
var Panel___vue_module_identifier__ = null
var Panel_Component = Panel_normalizeComponent(
  Panel,
  Panel_Panel,
  Panel___vue_template_functional__,
  Panel___vue_styles__,
  Panel___vue_scopeId__,
  Panel___vue_module_identifier__
)

/* harmony default export */ var components_Panel_Panel = (Panel_Component.exports);

// CONCATENATED MODULE: ./src/components/Divider/_props.js
/* harmony default export */ var Divider__props = ({
  margin: {
    type: [String, Number],
    default: '1.5em'
  },
  vertical: Boolean,
  color: String,
  lineWidth: {
    type: [Number, String],
    default: 1
  },
  full: {
    type: Boolean,
    default: true
  },

  directParent: {
    type: Boolean,
    default: true
  },

  lineStyle: {
    default: 'solid',
    type: String
  },

  hideLine: Boolean,

  text: String,
  textBg: String
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Divider/Divider.vue
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Divider = ({
  props: Divider__props,
  data: function data() {
    return {
      show: false
    };
  },

  inheritAttrs: false,
  computed: {
    marginValue: function marginValue() {
      var _this = this;

      var cssLength = utils.getCSSLength(this.margin, function (val) {
        if (_this.full && !_this.vertical) {
          return val * 2;
        }
        return val;
      });
      if (this.vertical) {
        return '0 ' + cssLength;
      } else {
        return cssLength + ' 0';
      }
    }
  },

  mounted: function mounted() {
    this.init();
  },
  updated: function updated() {
    this.init();
  },


  methods: {
    init: function init() {
      var parentNode = this.$el.parentNode;
      if (!getComputedStyle || !parentNode) return;
      var parentStyles = getComputedStyle(parentNode);
      if (parentStyles.position === 'static' && this.full && this.directParent) {
        parentNode.style.position = 'relative';
      }

      var offset = utils.getCSSLength(this.margin);
      var indicator = this.$refs.indicator;
      indicator.style[this.vertical ? 'border-left-width' : 'border-top-width'] = this.lineWidth + 'px';
      indicator.style[this.vertical ? 'border-left-style' : 'border-top-style'] = this.lineStyle;
      if (this.full) {
        if (this.vertical) {
          indicator.style.marginLeft = '-' + this.lineWidth / 2 + 'px';
        } else {
          indicator.style.marginTop = 'calc(' + ('-' + offset) + ' - ' + this.lineWidth / 2 + 'px)';
        }
      }
      var text = this.$refs.text;
      if (text) {
        if (this.lineWidth > 1) {
          text.style.marginTop = 'calc(-.5em - ' + this.lineWidth / 2 + 'px)';
        }
        if (this.textBg) {
          text.style.backgroundColor = utils.getCSSColor(this.textBg);
        }
      }
      if (this.vertical) {
        var parentHeight;
        if (this.full) {
          parentHeight = utils.getPxValue(parentStyles.height) - utils.getPxValue(parentStyles.borderTopWidth) - utils.getPxValue(parentStyles.borderBottomWidth);
        } else {
          parentHeight = utils.getPxValue(parentStyles.height) - utils.getPxValue(parentStyles.paddingTop) - utils.getPxValue(parentStyles.paddingBottom) - utils.getPxValue(parentStyles.borderTopWidth) - utils.getPxValue(parentStyles.borderBottomWidth);
        }
        indicator.style.height = parentHeight + 'px';
      }
      if (this.color) {
        indicator.style.borderColor = utils.getCSSColor(this.color);
      }

      this.show = true;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f1269440","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Divider/Divider.vue
var Divider_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['divider-container', {'-vertical': _vm.vertical}],style:({margin: _vm.marginValue})},[_c('div',{ref:"indicator",class:['divider-line', {'-full': _vm.full}, {'-show': _vm.show}, {'-faded': _vm.hideLine}]},[(_vm.text && !_vm.vertical)?_c('span',{ref:"text",staticClass:"divider-text"},[_vm._v(_vm._s(_vm.text))]):_vm._e()])])}
var Divider_staticRenderFns = []
var Divider_esExports = { render: Divider_render, staticRenderFns: Divider_staticRenderFns }
/* harmony default export */ var Divider_Divider = (Divider_esExports);
// CONCATENATED MODULE: ./src/components/Divider/Divider.vue
function Divider_injectStyle (ssrContext) {
  __webpack_require__(15)
}
var Divider_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Divider___vue_template_functional__ = false
/* styles */
var Divider___vue_styles__ = Divider_injectStyle
/* scopeId */
var Divider___vue_scopeId__ = "data-v-f1269440"
/* moduleIdentifier (server only) */
var Divider___vue_module_identifier__ = null
var Divider_Component = Divider_normalizeComponent(
  Divider,
  Divider_Divider,
  Divider___vue_template_functional__,
  Divider___vue_styles__,
  Divider___vue_scopeId__,
  Divider___vue_module_identifier__
)

/* harmony default export */ var components_Divider_Divider = (Divider_Component.exports);

// CONCATENATED MODULE: ./src/components/Navigator/_props.js
var containerProps = {
  items: {
    type: Array, // [itemProps+]
    required: true,
    default: function _default() {
      return [];
    }
  },
  level: {
    type: Number,
    default: 0
  },
  parentIndex: Number,
  value: Array,
  horizontal: Boolean,
  horizontalGap: {
    default: 10,
    type: Number
  },
  horizontalItemWidth: [Number, String],
  united: {
    type: Boolean,
    default: true
  },
  autoToggle: Boolean,
  initialToggleIndexes: {
    default: function _default() {
      return [];
    },
    type: Array
  }

  // Item props passed to container will be passed to all items :)
};var _props_itemProps = {
  index: Number,
  text: String,
  badge: [Number, String],
  badgeColor: String,
  disabled: Boolean,
  children: Array,
  active: Boolean,
  showChildren: Boolean
};


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Navigator/NavigatorItem.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var NavigatorItem = ({
  mixins: [linkable, with_icon],

  components: { Navigator: components_Navigator_Navigator },

  props: _props_itemProps,

  computed: {
    tag: function tag() {
      return this.nuxt ? 'nuxt-link' : this.router ? 'router-link' : 'a';
    },
    level: function level() {
      return this.$parent ? this.$parent.level : 0;
    },
    isParent: function isParent() {
      return Array.isArray(this.children);
    }
  },

  mounted: function mounted() {
    if (this.badgeColor && this.badge) {
      this.$refs.badge.style.backgroundColor = utils.getCSSColor(this.badgeColor);
    }
  },


  methods: {
    onClick: function onClick(evt) {
      if (this.preventDefault || this.isParent) {
        evt.preventDefault();
      }
      evt.stopPropagation();
      if (this.disabled) return;

      this.$emit('item-click', this.index, this.isParent);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3264c340","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Navigator/NavigatorItem.vue
var NavigatorItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['navigator-item', { '-active': _vm.active, '-parent': _vm.isParent, '-toggled': _vm.showChildren, '-disabled': _vm.disabled }]},[_c(_vm.tag,{tag:"component",attrs:{"to":_vm.fullHref,"href":_vm.fullHref,"target":_vm.blank ? '_blank' : '_self',"event":_vm.preventDefault || _vm.disabled || _vm.isParent ? '' : 'click'},on:{"click":function($event){$event.stopPropagation();_vm.onClick($event)}},nativeOn:{"click":function($event){$event.stopPropagation();_vm.onClick($event)}}},[(_vm.icon)?_c('i',{class:['navigator-item-icon', ("" + (_vm.config$.iconClassPrefix) + _vm.icon)]}):_vm._e(),_vm._v(" "),(_vm.icon || _vm.badge)?_c('span',[_vm._v(_vm._s(_vm.text))]):[_vm._v(_vm._s(_vm.text))],_vm._v(" "),(_vm.badge)?_c('span',{ref:"badge",staticClass:"navigator-item-badge"},[_vm._v(_vm._s(_vm.badge))]):_vm._e()],2),_vm._v(" "),(_vm.children)?_c('transition',{attrs:{"name":"children"}},[_vm._t("default")],2):_vm._e()],1)}
var NavigatorItem_staticRenderFns = []
var NavigatorItem_esExports = { render: NavigatorItem_render, staticRenderFns: NavigatorItem_staticRenderFns }
/* harmony default export */ var Navigator_NavigatorItem = (NavigatorItem_esExports);
// CONCATENATED MODULE: ./src/components/Navigator/NavigatorItem.vue
function NavigatorItem_injectStyle (ssrContext) {
  __webpack_require__(17)
}
var NavigatorItem_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var NavigatorItem___vue_template_functional__ = false
/* styles */
var NavigatorItem___vue_styles__ = NavigatorItem_injectStyle
/* scopeId */
var NavigatorItem___vue_scopeId__ = "data-v-3264c340"
/* moduleIdentifier (server only) */
var NavigatorItem___vue_module_identifier__ = null
var NavigatorItem_Component = NavigatorItem_normalizeComponent(
  NavigatorItem,
  Navigator_NavigatorItem,
  NavigatorItem___vue_template_functional__,
  NavigatorItem___vue_styles__,
  NavigatorItem___vue_scopeId__,
  NavigatorItem___vue_module_identifier__
)

/* harmony default export */ var components_Navigator_NavigatorItem = (NavigatorItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Navigator/Navigator.vue
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Navigator = ({
  props: containerProps,

  model: {
    prop: 'value',
    event: 'update:value'
  },

  name: 'k-navigator',

  mixins: [size],

  inheritAttrs: false,

  components: { NavigatorItem: components_Navigator_NavigatorItem },

  data: function data() {
    return {
      innerValue: [],
      activeIndex: null,
      showChildrenIndex: null,
      toggledIndexes: [],
      inited: false
    };
  },


  computed: {
    inheritableProps: function inheritableProps() {
      var omittedProps = utils.omit(this.$props, 'items', 'level', 'horizontal', 'parentIndex', 'initialToggleIndexes', 'value');
      return utils.assign({}, this.$attrs, omittedProps);
    },
    isNested: function isNested() {
      return this.isNumber(this.parentIndex);
    }
  },

  watch: {
    horizontal: function horizontal() {
      this.initLayout();
    },

    horizontalItemWidth: function horizontalItemWidth() {
      this.initLayout();
    },

    horizontalGap: function horizontalGap() {
      this.initLayout();
    },

    innerValue: function innerValue(value) {
      if (Array.isArray(value)) {
        if (this.parentIndex !== value[this.level - 1] || !this.isNumber(value[this.level])) {
          this.deactivate();
          if (this.autoToggle) {
            this.toggledIndexes = [];
            this.noChildrenShow();
          }
        }
      }
      this.setValue(value);
    },
    value: function value(_value) {
      this.innerValue = _value;
    },
    showChildrenIndex: function showChildrenIndex(newVal, oldVal) {
      if (this.isNumber(newVal)) {
        this.toggleDown(newVal);
      }
    }
  },

  mounted: function mounted() {
    this.init();
  },


  methods: {
    itemProps: function itemProps(item) {
      return utils.assign({}, this.$attrs, item);
    },
    isNumber: function isNumber(n) {
      return typeof n === 'number' && !isNaN(n);
    },
    init: function init() {
      var _this = this;

      this.initLayout();
      if (this.value) {
        this.innerValue = this.value;
      }
      if (Array.isArray(this.initialToggleIndexes)) {
        this.toggledIndexes = this.initialToggleIndexes.map(function (item) {
          if (_this.isNumber(item)) {
            return item;
          } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && _this.isNumber(+Object.keys(item)[0])) {
            return +Object.keys(item)[0];
          }
        });
      }

      this.inited = true;
    },
    getNested: function getNested(index) {
      if (this.$refs.item[index] && this.$refs.item[index].$children) {
        for (var i = 0, len = this.$refs.item[index].$children.length; i < len; i++) {
          if (utils.isWhichVM(this.$refs.item[index].$children[i], 'k-navigator')) {
            return this.$refs.item[index].$children[i];
          }
        }
      }

      return false;
    },
    getNestedInitialToggleIndexes: function getNestedInitialToggleIndexes(index) {
      if (Array.isArray(this.toggledIndexes) && this.toggledIndexes.indexOf(index) >= 0) {
        var objIndex = this.toggledIndexes.indexOf(index);
        if (_typeof(this.initialToggleIndexes[objIndex]) === 'object' && Array.isArray(this.initialToggleIndexes[objIndex][index])) {
          return this.initialToggleIndexes[objIndex][index];
        }
      }
    },
    deactivate: function deactivate() {
      this.activeIndex = null;
    },
    noChildrenShow: function noChildrenShow() {
      this.showChildrenIndex = null;
    },
    isToggled: function isToggled(index) {
      return Array.isArray(this.toggledIndexes) && this.toggledIndexes.indexOf(index) >= 0;
    },
    toggleDown: function toggleDown(index) {
      if (this.isToggled(index)) return;
      this.toggledIndexes.push(index);
    },
    toggleUp: function toggleUp(index) {
      if (!this.isToggled(index)) return;
      this.toggledIndexes.splice(this.toggledIndexes.indexOf(index), 1);
    },
    toggle: function toggle(index) {
      if (this.isToggled(index)) {
        this.toggleUp(index);
      } else {
        this.toggleDown(index);
      }
    },
    setValue: function setValue(value) {
      if (this.isNested || !Array.isArray(value)) return;
      var nav = this;
      for (var level = 0, len = value.length; level < len; level++) {
        var activeIndex = value[level];
        nav.activeIndex = activeIndex;
        var nested = nav.getNested(activeIndex);
        if (nested) {
          nav.showChildrenIndex = activeIndex;
          nav = nested;
        } else if (level !== len - 1) {
          console.error('Invalid value [' + value + ']. Item ' + activeIndex + ' on level ' + level + ' does not have a nested nav.');
        }
      }
    },
    getSelectedItem: function getSelectedItem() {
      if (this.isNested) return;
      var nav = this;
      while (this.isNumber(nav.showChildrenIndex)) {
        // value.push(nav.showChildrenIndex)
        nav = this.getNested(nav.showChildrenIndex);
      }
      return nav.items[nav.activeIndex];
    },
    initLayout: function initLayout() {
      var _this2 = this;

      if (this.horizontal) {
        var items = this.$refs.item;
        var itemLen = items.length;

        var w = this.horizontalItemWidth ? utils.getCSSLength(this.horizontalItemWidth) : null;

        items.forEach(function (item, i) {
          if (i < itemLen - 1) {
            item.$el.style.marginRight = (_this2.horizontalGap || 10) + 'px';
          }
          item.$el.style.width = w;
        });
      }
    },
    onClickOutside: function onClickOutside() {
      if (this.horizontal) {
        this.showChildrenIndex = null;
        this.toggledIndexes = [];
      }
    },
    onItemClick: function onItemClick(index, isParent) {
      if (isParent) {
        if (this.showChildrenIndex === index) {
          this.noChildrenShow();
          this.toggleUp(index);
        } else if (this.isToggled(index)) {
          this.toggleUp(index);
        } else {
          if (this.autoToggle) {
            this.toggledIndexes = [];
          }
          this.showChildrenIndex = index;
        }
      } else {
        this.activeIndex = index;
        if (this.autoToggle) {
          this.toggledIndexes = [];
          this.noChildrenShow();
        }
        if (this.isNested) {
          this.$emit('select:inside', {
            level: this.level,
            index: index
          }, [this.parentIndex, index], this.items[index]);
        } else {
          if (this.horizontal) {
            this.toggledIndexes = [];
            this.noChildrenShow();
          }
          this.$emit('select', this.items[index], [index]);
          this.innerValue = [index];
          this.$emit('update:value', [index]);
        }
      }
    },
    onNestedSelect: function onNestedSelect(_ref, arr, data) {
      var level = _ref.level,
          index = _ref.index;

      if (this.level !== level - 1) return;

      if (this.isNested) {
        arr.unshift(this.parentIndex);
        this.$emit('select:inside', {
          level: this.level,
          index: index
        }, arr, data);
      } else {
        this.$emit('select', data, arr);
        this.innerValue = arr;
        this.$emit('update:value', arr);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5a340ef3","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Navigator/Navigator.vue
var Navigator_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.onClickOutside),expression:"onClickOutside"}],ref:"container",class:['navigator', _vm.size ? ("-" + _vm.size) : '', {'-horizontal': _vm.horizontal, '-united': _vm.horizontal && _vm.united }]},[_vm._l((_vm.items),function(item,index){return [(item.divider && !_vm.horizontal)?_c('k-divider',_vm._b({key:index},'k-divider',item,false)):_c('navigator-item',_vm._b({key:index,ref:"item",refInFor:true,attrs:{"index":index,"level":_vm.level,"active":_vm.activeIndex === index || item.active,"show-children":_vm.isToggled(index)},on:{"item-click":_vm.onItemClick}},'navigator-item',_vm.itemProps(item),false),[_c('k-navigator',_vm._g(_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.isToggled(index)),expression:"isToggled(index)"}],ref:"nested",refInFor:true,attrs:{"items":item.children,"level":_vm.level + 1,"parent-index":index,"value":_vm.innerValue,"initial-toggle-indexes":_vm.getNestedInitialToggleIndexes(index)},on:{"select:inside":_vm.onNestedSelect}},'k-navigator',_vm.inheritableProps,false),_vm.$listeners))],1)]})],2)}
var Navigator_staticRenderFns = []
var Navigator_esExports = { render: Navigator_render, staticRenderFns: Navigator_staticRenderFns }
/* harmony default export */ var Navigator_Navigator = (Navigator_esExports);
// CONCATENATED MODULE: ./src/components/Navigator/Navigator.vue
function Navigator_injectStyle (ssrContext) {
  __webpack_require__(16)
}
var Navigator_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Navigator___vue_template_functional__ = false
/* styles */
var Navigator___vue_styles__ = Navigator_injectStyle
/* scopeId */
var Navigator___vue_scopeId__ = "data-v-5a340ef3"
/* moduleIdentifier (server only) */
var Navigator___vue_module_identifier__ = null
var Navigator_Component = Navigator_normalizeComponent(
  Navigator,
  Navigator_Navigator,
  Navigator___vue_template_functional__,
  Navigator___vue_styles__,
  Navigator___vue_scopeId__,
  Navigator___vue_module_identifier__
)

/* harmony default export */ var components_Navigator_Navigator = (Navigator_Component.exports);

// CONCATENATED MODULE: ./src/components/Group/_props.js
/* harmony default export */ var Group__props = ({
  vertical: Boolean,
  gap: {
    type: Number,
    default: 1,
    validator: function validator(value) {
      return value >= 0;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Group/Group.vue



/* harmony default export */ var Group = ({
  props: Group__props,

  render: function render(h) {
    var _this = this;

    var slotL = this.$slots.default.length;
    this.$slots.default.forEach(function (child, i) {
      var cls = child.data.staticClass || '';
      var sty = child.data.staticStyle || {};
      var attrs = child.data.attrs || {};
      if (!_this.vertical) {
        if (i < slotL - 1) {
          sty.marginRight = '1px';
        }
        if (i === 0) {
          cls += ' -sharp-corner-2 -sharp-corner-3';
          attrs['sharp-corner-2'] = '';
          attrs['sharp-corner-3'] = '';
        } else if (i === slotL - 1) {
          cls += ' -sharp-corner-1 -sharp-corner-4';
          attrs['sharp-corner-1'] = '';
          attrs['sharp-corner-4'] = '';
        } else {
          cls += ' -sharp-corner-1 -sharp-corner-2 -sharp-corner-3 -sharp-corner-4';
          attrs['sharp-corner-1'] = '';
          attrs['sharp-corner-2'] = '';
          attrs['sharp-corner-3'] = '';
          attrs['sharp-corner-4'] = '';
        }
      } else {
        if (i < slotL - 1) {
          sty.marginBottom = '1px';
        }
        if (i === 0) {
          cls += ' -sharp-corner-3 -sharp-corner-4';
          attrs['sharp-corner-3'] = '';
          attrs['sharp-corner-4'] = '';
        } else if (i === slotL - 1) {
          cls += ' -sharp-corner-1 -sharp-corner-2';
          attrs['sharp-corner-1'] = '';
          attrs['sharp-corner-2'] = '';
        } else {
          cls += ' -sharp-corner-1 -sharp-corner-2 -sharp-corner-3 -sharp-corner-4';
          attrs['sharp-corner-1'] = '';
          attrs['sharp-corner-2'] = '';
          attrs['sharp-corner-3'] = '';
          attrs['sharp-corner-4'] = '';
        }
      }
      child.data.staticClass = cls;
      child.data.staticStyle = sty;
      child.data.attrs = attrs;
    });
    return h('div', {
      class: {
        group: true,
        vertical: this.vertical
      }
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/Group/Group.vue
function Group_injectStyle (ssrContext) {
  __webpack_require__(18)
}
var Group_normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var Group___vue_template_functional__ = false
/* styles */
var Group___vue_styles__ = Group_injectStyle
/* scopeId */
var Group___vue_scopeId__ = "data-v-19565a60"
/* moduleIdentifier (server only) */
var Group___vue_module_identifier__ = null
var Group_Component = Group_normalizeComponent(
  Group,
  __vue_template__,
  Group___vue_template_functional__,
  Group___vue_styles__,
  Group___vue_scopeId__,
  Group___vue_module_identifier__
)

/* harmony default export */ var Group_Group = (Group_Component.exports);

// CONCATENATED MODULE: ./src/components/Input/_props.js
/* harmony default export */ var Input__props = ({
  select: Boolean,
  textarea: Boolean,
  value: [String, Number],
  block: Boolean,
  outline: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  loading: Boolean,
  readonly: Boolean,
  validator: [Function, String],
  validatorEvent: {
    type: String,
    default: 'change'
  },
  label: String,
  state: String,
  suggestions: [Array, Promise],
  suggestDebounce: {
    type: Number,
    default: 0
  },
  listFilter: Function,
  options: Array,
  optionValueKey: {
    default: 'value'
  },
  optionTextKey: {
    default: 'text'
  },
  resize: {
    // textarea only
    default: 'none',
    validator: function validator(val) {
      var valid = ['none', 'both', 'vertical', 'horizontal'];
      return valid.indexOf(val) >= 0;
    }
  },

  autoHeight: Boolean,
  autoSelect: Boolean,
  spellcheck: Boolean
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-85063012","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/_Icons/Close.vue
var Close_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"t":"1504678682093","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2501","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('path',{attrs:{"d":"M512 423.1257264239249L165.48581064762436 76.61154001734309C160.06906888753866 71.19479678436056 152.5421902526894 71.5893652373976 147.65639099467006 76.475164495417L76.475164495417 147.65639099467006C71.44745898769497 152.68409650239215 71.65042270457474 160.52469333485612 76.61154001734309 165.48581064762436L423.1257264239249 512 76.61154001734309 858.5141878794789C71.65042270457474 863.4753066651442 71.44745898769497 871.3159005518139 76.475164495417 876.3436090053299L147.65639099467006 947.5248325587894C152.5421902526894 952.4106332897054 160.06906888753866 952.8052032156394 165.48581064762436 947.3884614555537L512 600.874273576075 858.5141878794789 947.3884614555537C863.9309296395645 952.8052032156394 871.4578068015169 952.4106332897054 876.3436090053299 947.5248325587894L947.5248325587894 876.3436090053299C952.5525395394081 871.3159005518139 952.3495802412192 863.4753066651442 947.3884614555537 858.5141878794789L600.874273576075 512 947.3884614555537 165.48581064762436C952.3495802412192 160.52469333485612 952.5525395394081 152.68409650239215 947.5248325587894 147.65639099467006L876.3436090053299 76.475164495417C871.4578068015169 71.5893652373976 863.9309296395645 71.19479678436056 858.5141878794789 76.61154001734309L512 423.1257264239249Z","p-id":"2316"}})])}
var Close_staticRenderFns = []
var Close_esExports = { render: Close_render, staticRenderFns: Close_staticRenderFns }
/* harmony default export */ var Close = (Close_esExports);
// CONCATENATED MODULE: ./src/components/_Icons/Close.vue
function Close_injectStyle (ssrContext) {
  __webpack_require__(20)
}
var Close_normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var Close___vue_template_functional__ = false
/* styles */
var Close___vue_styles__ = Close_injectStyle
/* scopeId */
var Close___vue_scopeId__ = "data-v-85063012"
/* moduleIdentifier (server only) */
var Close___vue_module_identifier__ = null
var Close_Component = Close_normalizeComponent(
  __vue_script__,
  Close,
  Close___vue_template_functional__,
  Close___vue_styles__,
  Close___vue_scopeId__,
  Close___vue_module_identifier__
)

/* harmony default export */ var _Icons_Close = (Close_Component.exports);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6a0cfb6b","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/_Icons/ArrowDown.vue
var ArrowDown_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"t":"1504710944573","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"3844","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"200","height":"200"}},[_c('path',{attrs:{"d":"M749.991674 379.789628c-7.961956-7.954731-20.836915-7.954731-28.769971 0L512.859776 607.90472 304.505073 379.789628c-7.933056-7.954731-20.822465-7.954731-28.748296 0-7.954731 7.976406-7.954731 20.894715 0 28.849446l221.699287 242.745728c4.255528 4.241078 9.876582 6.061779 15.418161 5.765554 5.541579 0.296225 11.155408-1.524476 15.410936-5.765554l221.720962-242.745728C757.917505 400.684343 757.917505 387.766034 749.991674 379.789628z","p-id":"3845"}})])}
var ArrowDown_staticRenderFns = []
var ArrowDown_esExports = { render: ArrowDown_render, staticRenderFns: ArrowDown_staticRenderFns }
/* harmony default export */ var ArrowDown = (ArrowDown_esExports);
// CONCATENATED MODULE: ./src/components/_Icons/ArrowDown.vue
var ArrowDown_normalizeComponent = __webpack_require__(0)
/* script */
var ArrowDown___vue_script__ = null
/* template */

/* template functional */
var ArrowDown___vue_template_functional__ = false
/* styles */
var ArrowDown___vue_styles__ = null
/* scopeId */
var ArrowDown___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ArrowDown___vue_module_identifier__ = null
var ArrowDown_Component = ArrowDown_normalizeComponent(
  ArrowDown___vue_script__,
  ArrowDown,
  ArrowDown___vue_template_functional__,
  ArrowDown___vue_styles__,
  ArrowDown___vue_scopeId__,
  ArrowDown___vue_module_identifier__
)

/* harmony default export */ var _Icons_ArrowDown = (ArrowDown_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Input/Input.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var Input = ({
  inheritAttrs: false,
  props: Input__props,
  model: {
    prop: 'value',
    event: 'sync'
  },

  mixins: [with_icon, size],

  components: {
    Spinner: components_Spinner_Spinner,
    IconClose: _Icons_Close,
    IconArrowDown: _Icons_ArrowDown
  },

  data: function data() {
    return {
      focused: false,
      errmsg: '',
      activeIndex: -1,
      showSuggestions: false,
      showOptions: false,
      innerValue: '',
      scrollableList: false,
      scrollMax: 0,
      scrollMin: 0
    };
  },


  computed: {
    tag: function tag() {
      return this.textarea ? 'textarea' : 'input';
    },
    realValue: function realValue() {
      return this.value || this.innerValue;
    },
    listShown: function listShown() {
      return this.showOptions || this.showSuggestions;
    },
    realList: function realList() {
      return this.select ? this.options : this.suggestions;
    }
  },

  watch: {
    value: function value(newVal) {
      if (this.select) {
        this.validate();
      } else {
        this.$refs.input.value = newVal;
      }
    },
    showOptions: function showOptions(newVal) {
      var _this = this;

      if (newVal) {
        this.$nextTick(function () {
          var options = _this.$refs.options;
          if (window) {
            var windowHeight = window.innerHeight;
            var optionHeight = options.clientHeight;
            _this.scrollableList = optionHeight > windowHeight;
            if (_this.scrollableList) {
              _this.scrollMax = -options.getBoundingClientRect().top;
              _this.scrollMin = -(optionHeight - _this.scrollMax - windowHeight);
            }
          }
        });
      }
    }
  },

  mounted: function mounted() {
    this.bindValidationEvents();

    var elem = this.$refs.input;
    if (this.textarea) {
      elem.style.resize = this.resize;
      if (this.autoHeight) {
        this.autoResize();
      }
    }

    if (this.autoSelect && this.value) {
      elem.focus();
      elem.select();
    }
  },


  methods: {
    onInput: function onInput(evt) {
      this.$emit('sync', evt.target.value);
      this.innerValue = evt.target.value;
      this.$emit('input', evt);
      this.showList();
    },
    onFocus: function onFocus(evt) {
      this.focused = true;
      this.showList();
      this.$emit('focus', evt);
    },
    showList: function showList() {
      if (this.select) {
        this.showOptions = true;
      } else if (this.suggestions && this.suggestions.length) {
        this.showSuggestions = true;
      }
    },
    onBlur: function onBlur(evt) {
      var _this2 = this;

      this.focused = false;
      if (this.showSuggestions) {
        setTimeout(function () {
          _this2.showSuggestions = false;
          _this2.showOptions = false;
        }, 500);
      }
      this.$emit('blur', evt);
    },
    onChange: function onChange(evt) {
      this.$emit('change', evt);
      if (!this.select) {
        this.activeIndex = 0;
      }
    },
    onKeydown: function onKeydown(evt) {
      this.$emit('keydown', evt);
      if (this.textarea) return;
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
      var length = this.realList ? this.realList.length : 0;
      switch (evt.key) {
        case 'ArrowDown':
          if (this.listShown && this.activeIndex < length - 1) {
            evt.preventDefault();

            this.activeIndex++;
          }
          break;
        case 'ArrowUp':
          if (this.listShown && this.activeIndex > 0) {
            evt.preventDefault();

            this.activeIndex--;
          }
          break;
        case 'Enter':
          this.$emit('enter');
          if (this.listShown) {
            evt.preventDefault();
            var item = this.realList[this.activeIndex];
            var synced = this.showOptions ? item[this.optionTextKey] : item;
            this.$emit('sync', synced);
            this.innerValue = synced;
            this.showSuggestions = false;
            this.showOptions = false;
            this.$refs.input.select();
            if (!this.select) {
              this.$emit('suggestion-select', item);
            }
          } else {
            this.showOptions = true;
            this.$emit('enter');
          }
          break;
        case 'Escape':
          if (this.listShown) {
            evt.preventDefault();
            this.showOptions = false;
            this.showSuggestions = false;
          }
          break;
      }
    },
    autoResize: function autoResize() {
      var observe = function observe(element, event, handler) {
        element.addEventListener(event, handler, false);
      };

      var text = this.$refs.input;
      function resize() {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight + 'px';
      }
      /* 0-timeout to get the already changed text */
      function delayedResize() {
        window.setTimeout(resize, 0);
      }
      observe(text, 'change', resize);
      observe(text, 'cut', delayedResize);
      observe(text, 'paste', delayedResize);
      observe(text, 'drop', delayedResize);
      observe(text, 'keydown', delayedResize);
      resize();
    },
    bindValidationEvents: function bindValidationEvents() {
      var input = this.$refs.input;
      var events = this.validatorEvent.split(' ');
      for (var i = 0, len = events.length; i < len; i++) {
        var event = events[i];
        input.addEventListener(event, this.validate);
      }

      if (typeof this.validator === 'string') {
        this.errmsg = this.validator;
      }
    },
    validate: function validate() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        if (typeof _this3.validator === 'function') {
          var returnValue = _this3.validator(_this3.value);
          if (returnValue instanceof Promise) {
            returnValue.then(function (msg) {
              _this3.errmsg = msg;
              resolve(msg === '');
            });
          } else {
            _this3.errmsg = returnValue;
            resolve(returnValue === '');
          }
        }
      });
    },
    onClearClick: function onClearClick() {
      this.$emit('sync', '');
      this.innerValue = '';
    },
    onClickOutside: function onClickOutside() {
      this.showSuggestions = false;
      this.showOptions = false;
    },
    onSuggestionItemClick: function onSuggestionItemClick(item) {
      this.innerValue = item;
      this.$emit('sync', this.innerValue);
      this.showSuggestions = false;
      this.$refs.input.select();
      this.$emit('suggestion-select', item);
    },
    onOptionItemClick: function onOptionItemClick(item, index) {
      this.innerValue = item[this.optionTextKey];
      this.$emit('sync', this.innerValue);
      this.showOptions = false;
      this.activeIndex = index;
    },
    onIconClick: function onIconClick() {
      if (this.iconClickable) {
        this.$emit('icon-click');
      }
    },
    handleWheel: function handleWheel(evt) {
      if (!this.scrollableList) return;
      evt.preventDefault();
      var options = this.$refs.options;
      var marginTop = +window.getComputedStyle(options).marginTop.match(/-?\d+/)[0] || 0;
      if (marginTop <= this.scrollMin) {
        marginTop = this.scrollMin + 1;
      }
      if (marginTop >= this.scrollMax) {
        marginTop = this.scrollMax - 1;
      }
      options.style.marginTop = marginTop - evt.deltaY + 'px';
    },
    onArrowClick: function onArrowClick() {
      this.showOptions = !this.showOptions;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-703d1db1","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Input/Input.vue
var Input_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.onClickOutside),expression:"onClickOutside"}],class:['input-field', _vm.size ? ("-" + _vm.size) : '', _vm.state ? ("-" + _vm.state) : '', { '-focused': _vm.focused, '-disabled': _vm.disabled, '-error': _vm.errmsg, '-pr': _vm.clearable || _vm.loading || _vm.select, '-pl': _vm.icon, '-block': _vm.block, 'select': _vm.select, 'textarea': _vm.textarea, '-resizable': _vm.resize != 'none' }]},[(_vm.label)?_c('label',{attrs:{"for":_vm.$attrs.id}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"input-wrapper"},[_c(_vm.tag,_vm._g(_vm._b({ref:"input",tag:"component",attrs:{"value":_vm.realValue,"disabled":_vm.disabled,"readonly":_vm.readonly || _vm.select,"spellcheck":_vm.spellcheck},on:{"input":_vm.onInput,"focus":_vm.onFocus,"blur":_vm.onBlur,"change":_vm.onChange,"keydown":_vm.onKeydown}},'component',_vm.$attrs,false),_vm.$listeners),[_vm._v(_vm._s(_vm.textarea && _vm.value ? _vm.value: ''))]),_vm._v(" "),(_vm.icon)?_c('i',{class:['input-icon', ("" + (_vm.config$.iconClassPrefix) + _vm.icon), { '-icon-clickable': _vm.iconClickable }],on:{"click":_vm.onIconClick}}):_vm._e(),_vm._v(" "),(_vm.clearable && _vm.value && !_vm.loading && !_vm.select)?_c('icon-close',{staticClass:"icon icon-clear",nativeOn:{"click":function($event){_vm.onClearClick($event)}}}):_vm._e(),_vm._v(" "),(_vm.select)?_c('icon-arrow-down',{class:['icon', 'icon-down', { '-reverse': _vm.showOptions }],nativeOn:{"click":function($event){$event.stopPropagation();_vm.onArrowClick($event)}}}):_vm._e(),_vm._v(" "),(_vm.loading && !_vm.select)?_c('div',{staticClass:"input-spinner"},[_c('spinner',{attrs:{"color":"#8a8f99","d":"1.4em"}})],1):_vm._e(),_vm._v(" "),_c('transition',{attrs:{"name":"errmsg"}},[(_vm.errmsg)?_c('span',{staticClass:"input-errmsg"},[_vm._v(_vm._s(_vm.errmsg))]):_vm._e()]),_vm._v(" "),_c('transition',{attrs:{"name":"suggestions"}},[(_vm.suggestions && _vm.suggestions.length && _vm.showSuggestions)?_c('div',{staticClass:"suggestions"},_vm._l((_vm.suggestions),function(item,index){return _c('div',{key:item,class:['suggestion-item', { '-active': index == _vm.activeIndex }],on:{"click":function($event){_vm.onSuggestionItemClick(item, index)}}},[_vm._v(_vm._s(item))])})):_vm._e()]),_vm._v(" "),_c('transition',{attrs:{"name":"options"}},[(_vm.showOptions)?_c('div',{ref:"options",staticClass:"options",on:{"DOMMouseScroll":function($event){$event.stopPropagation();_vm.handleWheel($event)},"wheel":function($event){$event.stopPropagation();_vm.handleWheel($event)},"mousewheel":function($event){$event.stopPropagation();_vm.handleWheel($event)}}},_vm._l((_vm.options),function(item,index){return _c('div',{key:item[_vm.optionValueKey],class:['option-item', { '-active': index == _vm.activeIndex }],on:{"click":function($event){_vm.onOptionItemClick(item, index)}}},[_vm._v(_vm._s(item[_vm.optionTextKey]))])})):_vm._e()])],1)])}
var Input_staticRenderFns = []
var Input_esExports = { render: Input_render, staticRenderFns: Input_staticRenderFns }
/* harmony default export */ var Input_Input = (Input_esExports);
// CONCATENATED MODULE: ./src/components/Input/Input.vue
function Input_injectStyle (ssrContext) {
  __webpack_require__(19)
}
var Input_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Input___vue_template_functional__ = false
/* styles */
var Input___vue_styles__ = Input_injectStyle
/* scopeId */
var Input___vue_scopeId__ = "data-v-703d1db1"
/* moduleIdentifier (server only) */
var Input___vue_module_identifier__ = null
var Input_Component = Input_normalizeComponent(
  Input,
  Input_Input,
  Input___vue_template_functional__,
  Input___vue_styles__,
  Input___vue_scopeId__,
  Input___vue_module_identifier__
)

/* harmony default export */ var components_Input_Input = (Input_Component.exports);

// CONCATENATED MODULE: ./src/components/Checkbox/_props.js
/* harmony default export */ var Checkbox__props = ({
  arr: {
    default: function _default() {
      return [];
    },
    type: Array
  },
  checked: Boolean,
  outline: Boolean,
  value: String,
  disabled: Boolean,
  label: String,
  state: {
    default: 'primary'
  },
  size: String,
  light: Boolean
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-db5ca6ec","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/_Icons/Check.vue
var Check_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"t":"1506564223094","viewBox":"0 0 1036 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"3086","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"202.34375","height":"200"}},[_c('path',{attrs:{"d":"M359.483062 623.839829 112.881059 427.470367 3.567973 516.434849l426.41609 440.437783c73.737606-190.660532 306.352893-563.702809 590.407304-828.750707L994.336632 67.129478C684.873648 259.680129 460.506169 501.80197 359.483062 623.839829z","p-id":"3087"}})])}
var Check_staticRenderFns = []
var Check_esExports = { render: Check_render, staticRenderFns: Check_staticRenderFns }
/* harmony default export */ var Check = (Check_esExports);
// CONCATENATED MODULE: ./src/components/_Icons/Check.vue
function Check_injectStyle (ssrContext) {
  __webpack_require__(22)
}
var Check_normalizeComponent = __webpack_require__(0)
/* script */
var Check___vue_script__ = null
/* template */

/* template functional */
var Check___vue_template_functional__ = false
/* styles */
var Check___vue_styles__ = Check_injectStyle
/* scopeId */
var Check___vue_scopeId__ = "data-v-db5ca6ec"
/* moduleIdentifier (server only) */
var Check___vue_module_identifier__ = null
var Check_Component = Check_normalizeComponent(
  Check___vue_script__,
  Check,
  Check___vue_template_functional__,
  Check___vue_styles__,
  Check___vue_scopeId__,
  Check___vue_module_identifier__
)

/* harmony default export */ var _Icons_Check = (Check_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Checkbox/Checkbox.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Checkbox = ({

  model: {
    prop: 'arr',
    event: 'update'
  },

  components: {
    IconCheck: _Icons_Check
  },

  inheritAttrs: false,

  props: Checkbox__props,

  computed: {
    containedInArr: function containedInArr() {
      return this.arr && this.arr.indexOf(this.realValue) >= 0 || this.checked;
    },
    realValue: function realValue() {
      return this.value || this.label;
    }
  },

  methods: {
    onChange: function onChange(evt) {
      var newArr = this.arr.slice(0);
      this.$emit('update:checked', !this.containedInArr);
      if (this.containedInArr) {
        newArr.splice(this.arr.indexOf(this.realValue), 1);
      } else {
        newArr.push(this.realValue);
      }
      this.$emit('update', newArr);
      this.$emit('change', evt);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-17604f04","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Checkbox/Checkbox.vue
var Checkbox_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:['checkbox', _vm.size ? ("-" + _vm.size) : '', _vm.state ? ("-" + _vm.state) : '', { '-checked': _vm.containedInArr, '-disabled': _vm.disabled, '-light': _vm.light }]},[_c('input',_vm._g(_vm._b({ref:"elem",attrs:{"type":"checkbox","disabled":_vm.disabled},domProps:{"checked":_vm.containedInArr,"value":_vm.realValue},on:{"change":_vm.onChange}},'input',_vm.$attrs,false),_vm.$listeners)),_vm._v(" "),_c('icon-check',{staticClass:"icon-check"}),_vm._v(" "),(_vm.label)?_c('span',{staticClass:"checkbox-label"},[_vm._v(_vm._s(_vm.label))]):_c('span',{staticClass:"checkbox-content"},[_vm._t("default")],2)],1)}
var Checkbox_staticRenderFns = []
var Checkbox_esExports = { render: Checkbox_render, staticRenderFns: Checkbox_staticRenderFns }
/* harmony default export */ var Checkbox_Checkbox = (Checkbox_esExports);
// CONCATENATED MODULE: ./src/components/Checkbox/Checkbox.vue
function Checkbox_injectStyle (ssrContext) {
  __webpack_require__(21)
}
var Checkbox_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Checkbox___vue_template_functional__ = false
/* styles */
var Checkbox___vue_styles__ = Checkbox_injectStyle
/* scopeId */
var Checkbox___vue_scopeId__ = "data-v-17604f04"
/* moduleIdentifier (server only) */
var Checkbox___vue_module_identifier__ = null
var Checkbox_Component = Checkbox_normalizeComponent(
  Checkbox,
  Checkbox_Checkbox,
  Checkbox___vue_template_functional__,
  Checkbox___vue_styles__,
  Checkbox___vue_scopeId__,
  Checkbox___vue_module_identifier__
)

/* harmony default export */ var components_Checkbox_Checkbox = (Checkbox_Component.exports);

// CONCATENATED MODULE: ./src/components/Radio/_props.js
/* harmony default export */ var Radio__props = ({
  result: String,
  outline: Boolean,
  value: String,
  disabled: Boolean,
  label: String,
  state: {
    default: 'primary'
  },
  size: String,
  light: Boolean
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Radio/Radio.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Radio = ({

  model: {
    prop: 'result',
    event: 'update'
  },

  inheritAttrs: false,

  props: Radio__props,

  computed: {
    realValue: function realValue() {
      return this.value || this.label;
    },
    checked: function checked() {
      return this.result == this.realValue;
    }
  },

  methods: {
    onChange: function onChange(evt) {
      this.$emit('update', this.realValue);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-56f63f5f","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Radio/Radio.vue
var Radio_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:['radio', _vm.size ? ("-" + _vm.size) : '', _vm.state ? ("-" + _vm.state) : '', { '-checked': _vm.checked, '-disabled': _vm.disabled, '-light': _vm.light }]},[_c('input',_vm._g(_vm._b({ref:"elem",attrs:{"type":"radio","disabled":_vm.disabled},domProps:{"checked":_vm.checked,"value":_vm.realValue},on:{"change":function($event){_vm.onChange($event)}}},'input',_vm.$attrs,false),_vm.$listeners)),_vm._v(" "),(_vm.label)?_c('span',{staticClass:"radio-label"},[_vm._v(_vm._s(_vm.label))]):_c('span',{staticClass:"radio-content"},[_vm._t("default")],2)])}
var Radio_staticRenderFns = []
var Radio_esExports = { render: Radio_render, staticRenderFns: Radio_staticRenderFns }
/* harmony default export */ var Radio_Radio = (Radio_esExports);
// CONCATENATED MODULE: ./src/components/Radio/Radio.vue
function Radio_injectStyle (ssrContext) {
  __webpack_require__(23)
}
var Radio_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Radio___vue_template_functional__ = false
/* styles */
var Radio___vue_styles__ = Radio_injectStyle
/* scopeId */
var Radio___vue_scopeId__ = "data-v-56f63f5f"
/* moduleIdentifier (server only) */
var Radio___vue_module_identifier__ = null
var Radio_Component = Radio_normalizeComponent(
  Radio,
  Radio_Radio,
  Radio___vue_template_functional__,
  Radio___vue_styles__,
  Radio___vue_scopeId__,
  Radio___vue_module_identifier__
)

/* harmony default export */ var components_Radio_Radio = (Radio_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Switch/Switch.vue
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Switch = ({
  extends: components_Checkbox_Checkbox,

  model: {
    prop: 'checked',
    event: 'update:checked'
  },

  inheritAttrs: true,

  data: function data() {
    return {
      innerChecked: false
    };
  },


  watch: {
    checked: function checked(val) {
      this.innerChecked = val;
    }
  },

  created: function created() {
    this.innerChecked = this.checked;
  },


  methods: {
    onClick: function onClick() {
      this.$refs.checkbox.click();
    },
    onChange: function onChange(evt) {
      this.innerChecked = evt.target.checked;
      this.$emit('update:checked', this.innerChecked);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-91942aa8","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Switch/Switch.vue
var Switch_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['switch', _vm.size ? ("-" + _vm.size) : '', { '-disabled': _vm.disabled, '-light': _vm.light, '-checked': _vm.innerChecked, }],on:{"click":_vm.onClick}},[_c('input',{ref:"checkbox",attrs:{"type":"checkbox","disabled":_vm.disabled},domProps:{"checked":_vm.innerChecked},on:{"change":_vm.onChange,"click":function($event){$event.stopPropagation();}}}),_vm._v(" "),_c('div',{class:['switch-indicator', _vm.state ? ("-" + _vm.state + "-bg") : '']})])}
var Switch_staticRenderFns = []
var Switch_esExports = { render: Switch_render, staticRenderFns: Switch_staticRenderFns }
/* harmony default export */ var Switch_Switch = (Switch_esExports);
// CONCATENATED MODULE: ./src/components/Switch/Switch.vue
function Switch_injectStyle (ssrContext) {
  __webpack_require__(24)
}
var Switch_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Switch___vue_template_functional__ = false
/* styles */
var Switch___vue_styles__ = Switch_injectStyle
/* scopeId */
var Switch___vue_scopeId__ = "data-v-91942aa8"
/* moduleIdentifier (server only) */
var Switch___vue_module_identifier__ = null
var Switch_Component = Switch_normalizeComponent(
  Switch,
  Switch_Switch,
  Switch___vue_template_functional__,
  Switch___vue_styles__,
  Switch___vue_scopeId__,
  Switch___vue_module_identifier__
)

/* harmony default export */ var components_Switch_Switch = (Switch_Component.exports);

// CONCATENATED MODULE: ./src/components/Slider/_props.js
/* harmony default export */ var Slider__props = ({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: Number,
  value: Number,
  state: String,
  length: {
    type: Number,
    default: 220
  },
  disabled: Boolean,
  hint: Boolean,
  tip: Boolean,
  annotated: Boolean,
  precision: Number,
  lineColor: [String, Array]
});
// EXTERNAL MODULE: ./node_modules/v-dragged/dist/v-dragged.js
var v_dragged = __webpack_require__(26);
var v_dragged_default = /*#__PURE__*/__webpack_require__.n(v_dragged);

// CONCATENATED MODULE: ./src/mixins/draggable.js


/* harmony default export */ var draggable = ({
  directives: {
    dragged: v_dragged["directive"]
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Slider/Slider.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Slider = ({
  props: Slider__props,

  model: {
    event: 'update:value',
    prop: 'value'
  },

  data: function data() {
    return {
      errmsg: '',
      focused: false,
      offset: 0,
      offsetStepCount: 0
    };
  },


  mixins: [draggable],

  computed: {
    grooveStyle: function grooveStyle() {
      return {
        width: this.length + 'px'
      };
    },
    formattedTipValue: function formattedTipValue() {
      if (utils.isTolerantNumber(this.precision)) {
        return this._value.toFixed(this.precision);
      } else {
        return this._value;
      }
    },
    ratio: function ratio() {
      return this.offset / this.length;
    },
    rangeSize: function rangeSize() {
      return this.max - this.min;
    },
    stepRatio: function stepRatio() {
      if (!this.step) return null;
      return this.step / this.rangeSize;
    },
    stepSize: function stepSize() {
      if (!this.stepRatio) return null;
      return this.stepRatio * this.length;
    },
    totalSteps: function totalSteps() {
      if (!this.step) return 0;
      return this.rangeSize / this.step;
    },
    _value: function _value() {
      var result = this.min + this.ratio * this.rangeSize;
      if (utils.isTolerantNumber(this.precision)) {
        result = +result.toFixed(this.precision);
      }
      return result;
    }
  },

  watch: {
    value: function value(_value2) {
      if (!isNaN(_value2)) {
        this.offset = (_value2 - this.min) / this.rangeSize * this.length;
      }
    },
    _value: function _value(value) {
      this.$emit('update:value', value);
    }
  },

  mounted: function mounted() {
    if (this.value) {
      this.offset = (this.value - this.min) / this.rangeSize * this.length;
    }

    if (typeof this.lineColor === 'string') {
      this.$refs.indicator.style.background = utils.getCSSColor(this.lineColor);
    } else if (utils.isArray(this.lineColor)) {
      var colors = this.lineColor.map(function (item) {
        return utils.getCSSColor(item);
      }).join(', ');
      this.$refs.indicator.style.background = 'linear-gradient(to right, ' + colors + ')';
      this.$refs.indicator.style.background = '-webkit-linear-gradient(to right, ' + colors + ')';
      this.$refs.indicator.style.background = '-moz-linear-gradient(to right, ' + colors + ')';
      this.$refs.indicator.style.backgroundSize = this.length + 'px 100%';
    }
  },


  methods: {
    onHandlerDrag: function onHandlerDrag(_ref) {
      var deltaX = _ref.deltaX,
          offsetX = _ref.offsetX,
          first = _ref.first,
          last = _ref.last,
          el = _ref.el;

      if (this.disabled) return;
      if (first) {
        this.focused = true;
        document.documentElement.style.cursor = 'pointer';
        document.documentElement.style.userSelect = 'none';
        this.offsetStepCount = 0;
      }
      if (last) {
        this.focused = false;
        document.documentElement.style.cursor = 'default';
        document.documentElement.style.userSelect = 'unset';
      }
      if (!deltaX) return;
      var realStep = 0;
      if (this.stepSize) {
        if (deltaX > 0 && offsetX >= this.stepSize * (this.offsetStepCount + 1)) {
          this.offsetStepCount++;
          realStep = this.stepSize;
        }

        if (deltaX < 0 && offsetX <= this.stepSize * (this.offsetStepCount - 1)) {
          this.offsetStepCount--;
          realStep = -this.stepSize;
        }
      }
      var newOffset = this.step ? this.offset + realStep : this.offset + deltaX;
      if (isNaN(+deltaX)) return;
      if (newOffset < 0) newOffset = 0;
      if (newOffset > this.length) newOffset = this.length;
      this.offset = newOffset;
    },
    onGrooveMouseDown: function onGrooveMouseDown(evt) {
      var newOffset = evt.offsetX;
      if (this.stepSize) {
        newOffset = Math.ceil(evt.offsetX / this.stepSize) * this.stepSize;
      }

      this.offset = newOffset;
    },
    onHintMouseDown: function onHintMouseDown(n) {
      this.offset = (n - 1) * this.stepSize;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c47f3ea","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Slider/Slider.vue
var Slider_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['slider', { '-disabled': _vm.disabled, '-focused': _vm.focused }],style:({height: _vm.totalSteps && _vm.annotated && _vm.hint ? '2.5em' : '2em'})},[_c('div',{staticClass:"slider-groove",style:(_vm.grooveStyle),on:{"mousedown":_vm.onGrooveMouseDown}},[(_vm.totalSteps && _vm.hint)?_vm._l(((_vm.totalSteps + 1)),function(n){return _c('div',{key:n,staticClass:"slider-hint",style:({left: ((((n - 1)/_vm.totalSteps) * _vm.length) + "px")}),on:{"mousedown":function($event){$event.stopPropagation();$event.preventDefault();_vm.onHintMouseDown(n)}}},[(_vm.annotated)?_c('div',{staticClass:"slider-annotation"},[_vm._v(_vm._s(((n - 1) * _vm.step).toFixed(_vm.precision)))]):_vm._e()])}):_vm._e(),_vm._v(" "),_c('div',{ref:"indicator",class:['slider-indicator', _vm.state ? ("-" + _vm.state + "-gradient") : ''],style:({width: ((this.offset) + "px")})},[_c('div',{directives:[{name:"dragged",rawName:"v-dragged",value:(_vm.onHandlerDrag),expression:"onHandlerDrag"}],class:['slider-handle', {'-dragged': _vm.focused}],style:({transform: ("translateX(-50%)" + (_vm.focused ? ' scale(0.35)' : '')), left: ((this.offset) + "px")}),on:{"mousedown":function($event){$event.stopPropagation();$event.preventDefault();}}}),_vm._v(" "),_c('transition',{attrs:{"name":"zoom-down-in"}},[(_vm.tip && _vm.focused)?_c('div',{staticClass:"slider-tooltip"},[_vm._v(_vm._s(_vm.formattedTipValue))]):_vm._e()])],1)],2)])}
var Slider_staticRenderFns = []
var Slider_esExports = { render: Slider_render, staticRenderFns: Slider_staticRenderFns }
/* harmony default export */ var Slider_Slider = (Slider_esExports);
// CONCATENATED MODULE: ./src/components/Slider/Slider.vue
function Slider_injectStyle (ssrContext) {
  __webpack_require__(25)
}
var Slider_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Slider___vue_template_functional__ = false
/* styles */
var Slider___vue_styles__ = Slider_injectStyle
/* scopeId */
var Slider___vue_scopeId__ = "data-v-2c47f3ea"
/* moduleIdentifier (server only) */
var Slider___vue_module_identifier__ = null
var Slider_Component = Slider_normalizeComponent(
  Slider,
  Slider_Slider,
  Slider___vue_template_functional__,
  Slider___vue_styles__,
  Slider___vue_scopeId__,
  Slider___vue_module_identifier__
)

/* harmony default export */ var components_Slider_Slider = (Slider_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/_Helpers/Overlay.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var zIndex = 2000;

/* harmony default export */ var Overlay = ({

  props: {
    transition: String,
    transitionDuration: {
      default: 500,
      type: [Number, String],
      validator: function validator(val) {
        return utils.isTolerantNumber(val);
      }
    },
    stay: Boolean
  },

  data: function data() {
    return {
      zIndex: zIndex,
      mounted: false,
      remove: function remove() {}
    };
  },


  computed: {
    slot: function slot() {
      return this.$slots.default[0];
    }
  },

  created: function created() {
    zIndex++;
  },
  mounted: function mounted() {
    this.mounted = true;
  },
  destroyed: function destroyed() {
    zIndex--;
  },


  methods: {
    beforeEnter: function beforeEnter() {
      this.$emit('before-enter');
    },
    onEnter: function onEnter() {
      this.$emit('enter');
      this.slot.elm.style.transitionDuration = +this.transitionDuration / 1000 + 's';
    },
    afterEnter: function afterEnter() {
      this.remove = this.slot.context.remove;
      this.$emit('after-enter');
    },
    unmount: function unmount() {
      this.$emit('before-leave');
      this.mounted = false;
    },
    onLeave: function onLeave() {
      this.$emit('leave');
    },
    afterLeave: function afterLeave() {
      this.remove && !this.stay && this.remove();
      this.$emit('after-leave');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6b6183de","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/_Helpers/Overlay.vue
var Overlay_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"floater",style:({zIndex: _vm.zIndex})},[_c('transition',{attrs:{"name":_vm.transition},on:{"before-enter":_vm.beforeEnter,"enter":_vm.onEnter,"after-enter":_vm.afterEnter,"leave":_vm.onLeave,"after-leave":_vm.afterLeave}},[(_vm.mounted)?_vm._t("default"):_vm._e()],2)],1)}
var Overlay_staticRenderFns = []
var Overlay_esExports = { render: Overlay_render, staticRenderFns: Overlay_staticRenderFns }
/* harmony default export */ var _Helpers_Overlay = (Overlay_esExports);
// CONCATENATED MODULE: ./src/components/_Helpers/Overlay.vue
function Overlay_injectStyle (ssrContext) {
  __webpack_require__(28)
}
var Overlay_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Overlay___vue_template_functional__ = false
/* styles */
var Overlay___vue_styles__ = Overlay_injectStyle
/* scopeId */
var Overlay___vue_scopeId__ = "data-v-6b6183de"
/* moduleIdentifier (server only) */
var Overlay___vue_module_identifier__ = null
var Overlay_Component = Overlay_normalizeComponent(
  Overlay,
  _Helpers_Overlay,
  Overlay___vue_template_functional__,
  Overlay___vue_styles__,
  Overlay___vue_scopeId__,
  Overlay___vue_module_identifier__
)

/* harmony default export */ var components__Helpers_Overlay = (Overlay_Component.exports);

// CONCATENATED MODULE: ./src/mixins/overlaying.js


/* harmony default export */ var overlaying = ({
  components: { Overlay: components__Helpers_Overlay },
  props: {
    local: Boolean
  },
  methods: {
    insert: function insert(onInsert) {
      if (this.$isServer) return;
      var vm = this.$mount();
      var parent = this.parent || document.body;
      parent.appendChild(vm.$el);

      onInsert && onInsert(this);
    },
    remove: function remove() {
      if (this.$isServer) return;
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Toast/_props.js
/* harmony default export */ var Toast__props = ({
  message: {
    type: String,
    required: true
  },
  state: {
    type: String,
    default: 'default'
  },
  duration: {
    default: 3000,
    type: Number
  },
  closable: Boolean,
  loading: Boolean,
  top: Number
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Toast/Toast.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var Toast = ({
  props: Toast__props,
  mixins: [overlaying, with_icon],

  components: {
    Spinner: components_Spinner_Spinner,
    IconClose: _Icons_Close
  },

  data: function data() {
    return {
      timeout: null
    };
  },


  computed: {
    realTop: function realTop() {
      if (utils.isTolerantNumber(this.top)) {
        return this.top;
      }

      if (utils.isTolerantNumber(this.config$.defaultToastTop)) {
        return this.config$.defaultToastTop;
      }

      return 100;
    }
  },

  mounted: function mounted() {
    this.startCountDown();
  },


  methods: {
    startCountDown: function startCountDown() {
      if (this.duration > 0) {
        this.timeout = setTimeout(this.close, this.duration);
      }
    },
    close: function close() {
      clearTimeout(this.timeout);
      this.$refs.overlay.unmount();
    },
    onEnter: function onEnter() {
      this.$refs.main.style.top = this.realTop + 'px';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2f4ac3fb","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Toast/Toast.vue
var Toast_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('overlay',{ref:"overlay",attrs:{"transition":"bounce-drop","transition-duration":"300"},on:{"enter":_vm.onEnter}},[_c('div',{ref:"main",class:['toast', _vm.state ? ("-" + _vm.state) : '', { '-closable': _vm.closable, '-loading': _vm.loading && _vm.message, '-loading-only': _vm.loading && !_vm.message }]},[(_vm.loading)?_c('spinner',{staticClass:"toast-spinner"}):_vm._e(),_vm._v(" "),(_vm.icon)?_c('i',{class:['toast-icon', ("" + (_vm.config$.iconClassPrefix) + _vm.icon)],style:({ fontSize: _vm.iconSize })}):_vm._e(),_vm._v(" "),(_vm.message)?_c('div',{staticClass:"toast-message"},[_vm._v(_vm._s(_vm.message))]):_vm._e(),_vm._v(" "),(_vm.closable)?_c('icon-close',{staticClass:"toast-close",nativeOn:{"click":function($event){_vm.close($event)}}}):_vm._e()],1)])}
var Toast_staticRenderFns = []
var Toast_esExports = { render: Toast_render, staticRenderFns: Toast_staticRenderFns }
/* harmony default export */ var Toast_Toast = (Toast_esExports);
// CONCATENATED MODULE: ./src/components/Toast/Toast.vue
function Toast_injectStyle (ssrContext) {
  __webpack_require__(27)
}
var Toast_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Toast___vue_template_functional__ = false
/* styles */
var Toast___vue_styles__ = Toast_injectStyle
/* scopeId */
var Toast___vue_scopeId__ = "data-v-2f4ac3fb"
/* moduleIdentifier (server only) */
var Toast___vue_module_identifier__ = null
var Toast_Component = Toast_normalizeComponent(
  Toast,
  Toast_Toast,
  Toast___vue_template_functional__,
  Toast___vue_styles__,
  Toast___vue_scopeId__,
  Toast___vue_module_identifier__
)

/* harmony default export */ var components_Toast_Toast = (Toast_Component.exports);

// CONCATENATED MODULE: ./src/components/Toast/index.js
var Toast__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var ToastConstructor = external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default.a.extend(components_Toast_Toast);

var showToast = function showToast() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var onClose = _ref.onClose,
      rest = _objectWithoutProperties(_ref, ['onClose']);

  var instance = new ToastConstructor({
    propsData: Toast__extends({}, rest),

    destroyed: function destroyed() {
      onClose && onClose();
    }
  });

  instance.insert();

  return instance;
};


// CONCATENATED MODULE: ./src/components/Notification/_props.js
/* harmony default export */ var Notification__props = ({
  message: {
    default: '',
    required: true
  },
  state: {
    type: String,
    default: 'default'
  },
  duration: {
    default: 3000,
    type: Number
  },
  closable: {
    type: Boolean,
    default: true
  },
  parent: {
    default: function _default() {
      var p = document.querySelector('.k-notifications');

      if (!p) {
        p = document.createElement('div');
        p.setAttribute('class', 'k-notifications');
        document.body.appendChild(p);
      }

      return p;
    }
  },
  routerObj: Object
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Notification/Notification.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var Notification = ({
  props: Notification__props,
  mixins: [with_icon, overlaying, linkable],

  components: {
    IconClose: _Icons_Close
  },

  data: function data() {
    return {
      timeout: null
    };
  },
  mounted: function mounted() {
    this.startCountDown();
  },


  methods: {
    startCountDown: function startCountDown() {
      if (this.duration > 0) {
        this.timeout = setTimeout(this.close, this.duration);
      }
    },
    close: function close() {
      clearTimeout(this.timeout);
      this.$refs.overlay.unmount();
    },
    onClick: function onClick(evt) {
      if (this.preventDefault) {
        evt.preventDefault();
      } else if (this.href) {
        if (this.blank) {
          window.open(this.fullHref);
        } else if (this.routerObj && (this.router || this.nuxt)) {
          this.routerObj.push(this.fullHref);
        } else {
          window.location.href = this.fullHref;
        }
      }

      this.clickHandler(evt);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5b07a3ce","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Notification/Notification.vue
var Notification_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('overlay',{ref:"overlay",attrs:{"transition":"bottom-in"}},[_c('div',{ref:"main",class:['notification', _vm.state ? ("-" + _vm.state) : '', {'-link': _vm.href}],on:{"click":_vm.onClick}},[(_vm.icon)?_c('i',{class:['notification-icon', ("" + (_vm.config$.iconClassPrefix) + _vm.icon)]}):_vm._e(),_vm._v(" "),_c('span',{staticClass:"notification-message"},[_vm._v(_vm._s(_vm.message))]),_vm._v(" "),(_vm.closable)?_c('icon-close',{staticClass:"notification-close",nativeOn:{"click":function($event){_vm.close($event)}}}):_vm._e()],1)])}
var Notification_staticRenderFns = []
var Notification_esExports = { render: Notification_render, staticRenderFns: Notification_staticRenderFns }
/* harmony default export */ var Notification_Notification = (Notification_esExports);
// CONCATENATED MODULE: ./src/components/Notification/Notification.vue
function Notification_injectStyle (ssrContext) {
  __webpack_require__(29)
}
var Notification_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Notification___vue_template_functional__ = false
/* styles */
var Notification___vue_styles__ = Notification_injectStyle
/* scopeId */
var Notification___vue_scopeId__ = "data-v-5b07a3ce"
/* moduleIdentifier (server only) */
var Notification___vue_module_identifier__ = null
var Notification_Component = Notification_normalizeComponent(
  Notification,
  Notification_Notification,
  Notification___vue_template_functional__,
  Notification___vue_styles__,
  Notification___vue_scopeId__,
  Notification___vue_module_identifier__
)

/* harmony default export */ var components_Notification_Notification = (Notification_Component.exports);

// CONCATENATED MODULE: ./src/components/Notification/index.js
var Notification__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Notification__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var NotificationConstructor = external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default.a.extend(components_Notification_Notification);

var notify = function notify($router) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var onClose = _ref.onClose,
      onClick = _ref.onClick,
      rest = Notification__objectWithoutProperties(_ref, ['onClose', 'onClick']);

  var instance = new NotificationConstructor({
    propsData: Notification__extends({}, rest, {
      routerObj: $router
    }),

    destroyed: function destroyed() {
      onClose && onClose();
    },


    methods: {
      clickHandler: function clickHandler(evt) {
        return onClick && onClick(evt);
      }
    }
  });

  instance.insert();

  return instance;
};


// CONCATENATED MODULE: ./src/components/Dialog/_props.js
/* harmony default export */ var Dialog__props = ({
  title: {
    type: String,
    default: ''
  },
  message: String,
  state: {
    type: String,
    default: 'info'
  },
  hideCancelButton: Boolean,
  confirmText: {
    default: '确定',
    type: String
  },
  cancelText: {
    default: '取消',
    type: String
  },
  primaryButton: {
    default: 'confirm'
  },
  freezeScreen: {
    type: Boolean,
    default: true
  },
  top: Number
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Dialog/Dialog.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var Dialog = ({
  props: Dialog__props,
  mixins: [overlaying, with_icon],

  components: {
    IconClose: _Icons_Close,
    KButton: components_Button_Button
  },

  data: function data() {
    return {
      entered: false
    };
  },


  computed: {
    realTop: function realTop() {
      if (utils.isTolerantNumber(this.top)) {
        return this.top;
      }

      if (utils.isTolerantNumber(this.config$.defaultDialogTop)) {
        return this.config$.defaultDialogTop;
      }

      return 100;
    }
  },

  methods: {
    close: function close() {
      this.entered = false;
    },
    afterDialogLeave: function afterDialogLeave() {
      if (this.freezeScreen && !document.querySelector('.dialog.-freezing')) {
        document.documentElement.style.overflow = 'initial';
      }
      this.$refs.overlay.unmount();
    },
    maskEnter: function maskEnter() {
      this.entered = true;
      if (this.freezeScreen) {
        document.documentElement.style.overflow = 'hidden';
      }
    },
    onDialogEnter: function onDialogEnter() {
      this.$refs.dialog.style.top = this.realTop + 'px';
      this.$refs.content.style.maxHeight = window.innerHeight - this.realTop * 2 - 67 - 72 + 'px';
    },
    onConfirmClick: function onConfirmClick() {
      this.$emit('confirm');
      var stopped = false;
      if (this.confirmHandler) {
        stopped = this.confirmHandler();
      }
      if (!stopped) {
        this.close();
      }
    },
    onCancelClick: function onCancelClick() {
      this.$emit('cancel');
      var stopped = false;
      if (this.cancelHandler) {
        stopped = this.cancelHandler();
      }
      if (!stopped) {
        this.close();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-071a6846","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Dialog/Dialog.vue
var Dialog_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('overlay',{ref:"overlay",attrs:{"transition":"fade","transition-duration":"300"},on:{"enter":_vm.maskEnter}},[_c('div',{ref:"mask",staticClass:"mask"},[_c('transition',{attrs:{"name":"bounce-zoom-in"},on:{"enter":_vm.onDialogEnter,"after-leave":_vm.afterDialogLeave}},[(_vm.entered)?_c('div',{ref:"dialog",class:['dialog', _vm.state ? ("-" + _vm.state) : '', {'-freezing': _vm.freezeScreen}],on:{"click":function($event){$event.stopPropagation();}}},[_c('icon-close',{staticClass:"dialog-close",nativeOn:{"click":function($event){_vm.close($event)}}}),_vm._v(" "),_c('div',{staticClass:"dialog-title"},[(_vm.icon)?_c('i',{class:['dialog-icon', ("" + (_vm.config$.iconClassPrefix) + _vm.icon)],style:({ fontSize: _vm.iconSize })}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{ref:"content",staticClass:"dialog-message"},[_vm._v(_vm._s(_vm.message))]),_vm._v(" "),_c('div',{staticClass:"dialog-btns"},[_c('k-button',{attrs:{"state":_vm.primaryButton == 'confirm' ? _vm.state : 'default'},on:{"click":_vm.onConfirmClick}},[_vm._v(_vm._s(_vm.confirmText))]),_vm._v(" "),(!_vm.hideCancelButton)?_c('k-button',{attrs:{"state":_vm.primaryButton == 'cancel' ? _vm.state : 'default'},on:{"click":_vm.onCancelClick}},[_vm._v(_vm._s(_vm.cancelText))]):_vm._e()],1)],1):_vm._e()])],1)])}
var Dialog_staticRenderFns = []
var Dialog_esExports = { render: Dialog_render, staticRenderFns: Dialog_staticRenderFns }
/* harmony default export */ var Dialog_Dialog = (Dialog_esExports);
// CONCATENATED MODULE: ./src/components/Dialog/Dialog.vue
function Dialog_injectStyle (ssrContext) {
  __webpack_require__(30)
}
var Dialog_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Dialog___vue_template_functional__ = false
/* styles */
var Dialog___vue_styles__ = Dialog_injectStyle
/* scopeId */
var Dialog___vue_scopeId__ = "data-v-071a6846"
/* moduleIdentifier (server only) */
var Dialog___vue_module_identifier__ = null
var Dialog_Component = Dialog_normalizeComponent(
  Dialog,
  Dialog_Dialog,
  Dialog___vue_template_functional__,
  Dialog___vue_styles__,
  Dialog___vue_scopeId__,
  Dialog___vue_module_identifier__
)

/* harmony default export */ var components_Dialog_Dialog = (Dialog_Component.exports);

// CONCATENATED MODULE: ./src/components/Dialog/index.js
var Dialog__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Dialog__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var DialogConstructor = external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default.a.extend(components_Dialog_Dialog);

var showDialog = function showDialog() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var onClose = _ref.onClose,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      rest = Dialog__objectWithoutProperties(_ref, ['onClose', 'onConfirm', 'onCancel']);

  var instance = new DialogConstructor({
    propsData: Dialog__extends({}, rest),

    destroyed: function destroyed() {
      onClose && onClose();
    },


    methods: {
      confirmHandler: function confirmHandler() {
        return onConfirm && onConfirm();
      },
      cancelHandler: function cancelHandler() {
        return onCancel && onCancel();
      }
    }
  });

  instance.insert();

  return instance;
};


// CONCATENATED MODULE: ./src/components/Progress/_props.js
/* harmony default export */ var Progress__props = ({
  format: {
    default: function _default(str, status) {
      if (status !== 'active') {
        return status;
      }
      return str + '%';
    },
    type: Function
  },
  percent: {
    default: 0,
    type: Number
  },
  state: {
    default: 'active',
    type: String
  },
  size: {
    type: String
  },
  type: {
    type: String,
    default: 'bar'
  },
  tooltip: Boolean
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Progress/Progress.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Progress = ({
  props: Progress__props,
  data: function data() {
    return {
      radius: 47.5
    };
  },

  computed: {
    _percent: function _percent() {
      if (this.percent > 100) {
        return 100;
      }
      if (this.percent < 0) {
        return 0;
      }
      return this.percent;
    },
    _dashLength: function _dashLength() {
      var perimeter = 3.14 * 2 * this.radius;
      return perimeter * this.percent / 100 + ' ' + (100 - this.percent) * perimeter / 100 + ' ';
    },
    _state: function _state() {
      if (this._percent >= 100) {
        return 'success';
      }
      return this.state;
    },
    _text: function _text() {
      return this.format(this._percent, this._state);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ba92418c","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Progress/Progress.vue
var Progress_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress",style:({display:_vm.type === 'bar' ? 'block' : 'inline-block'})},[(_vm.type === 'bar')?_c('div',{staticClass:"progress-bar-container",class:_vm.size},[_c('div',{staticClass:"progress-bar-main",class:("-" + _vm._state),style:({  'clip-path': ("inset(0 " + (100-_vm._percent) + "% 0 0 round 999px)")})}),_vm._v(" "),(_vm.tooltip)?_c('span',{staticClass:"progress-bar-tooltip",style:({left:(_vm._percent + "%")})},[_vm._v("\n      "+_vm._s(_vm._text)+"\n    ")]):_vm._e()]):_c('svg',{staticClass:"progress-circle-container",class:("-" + _vm.size),attrs:{"viewBox":"0 0 100 100"}},[_c('text',{staticClass:"progress-circle-text",attrs:{"x":"50","y":"50","font-family":"YaHei","font-size":"15","dominant-baseline":"central","text-anchor":"middle"}},[_vm._v("\n      "+_vm._s(_vm._text)+"\n    ")]),_vm._v(" "),_c('circle',{staticClass:"progress-circle-outsider",attrs:{"cx":"50","cy":"50","r":47.5,"stroke-width":"5","fill":"none"}}),_vm._v(" "),_c('circle',{staticClass:"progress-circle-insider",class:("-" + _vm._state),attrs:{"cx":"50","cy":"50","r":_vm.radius,"stroke-width":"5","fill":"none","stroke-dasharray":_vm._dashLength,"stroke-linecap":"round"}})])])}
var Progress_staticRenderFns = []
var Progress_esExports = { render: Progress_render, staticRenderFns: Progress_staticRenderFns }
/* harmony default export */ var Progress_Progress = (Progress_esExports);
// CONCATENATED MODULE: ./src/components/Progress/Progress.vue
function Progress_injectStyle (ssrContext) {
  __webpack_require__(32)
}
var Progress_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Progress___vue_template_functional__ = false
/* styles */
var Progress___vue_styles__ = Progress_injectStyle
/* scopeId */
var Progress___vue_scopeId__ = "data-v-ba92418c"
/* moduleIdentifier (server only) */
var Progress___vue_module_identifier__ = null
var Progress_Component = Progress_normalizeComponent(
  Progress,
  Progress_Progress,
  Progress___vue_template_functional__,
  Progress___vue_styles__,
  Progress___vue_scopeId__,
  Progress___vue_module_identifier__
)

/* harmony default export */ var components_Progress_Progress = (Progress_Component.exports);

// CONCATENATED MODULE: ./src/components/Loading/_props.js
/* harmony default export */ var Loading__props = ({
  message: String,
  freezeScreen: {
    type: Boolean,
    default: true
  },
  bar: Boolean,
  autoProgress: Boolean,
  scale: {
    type: Number,
    default: 1
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Loading/Loading.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Loading = ({
  props: Loading__props,
  mixins: [overlaying],

  components: {
    KSpinner: components_Spinner_Spinner,
    KProgress: components_Progress_Progress
  },

  inheritAttrs: false,

  data: function data() {
    return {
      entered: false,
      innerMessage: '',
      progress: 0
    };
  },


  computed: {
    _message: function _message() {
      if (this.innerMessage !== null && this.innerMessage !== undefined) {
        return this.innerMessage;
      } else {
        return this.config$.defaultLoadingMessage;
      }
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.innerMessage = this.message;
    var interval;
    if (this.autoProgress) {
      interval = setInterval(function () {
        if (_this.progress > 55) {
          clearInterval(interval);
          interval = setInterval(function () {
            if (_this.progress > 75) {
              clearInterval(interval);
              interval = setInterval(function () {
                if (_this.progress >= 99) {
                  clearInterval(interval);
                } else {
                  _this.progress++;
                }
              }, 300);
            } else {
              _this.progress++;
            }
          }, 200);
        } else {
          _this.progress++;
        }
      }, 100);
    }
  },


  methods: {
    close: function close() {
      var _this2 = this;

      if (this.bar) {
        this.progress = 100;
        setTimeout(function () {
          _this2.entered = false;
        }, 500);
      } else {
        this.entered = false;
      }
    },
    afterLoadingLeave: function afterLoadingLeave() {
      if (this.freezeScreen && !document.querySelector('.loading.-freezing')) {
        document.documentElement.style.overflow = 'initial';
      }
      this.$refs.overlay.unmount();
    },
    maskEnter: function maskEnter() {
      this.entered = true;
      if (this.freezeScreen && !this.local) {
        document.documentElement.style.overflow = 'hidden';
      }
    },
    onLoadingEnter: function onLoadingEnter() {
      // ref here
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-67dba358","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Loading/Loading.vue
var Loading_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('overlay',{ref:"overlay",attrs:{"transition":"fade","transition-duration":"300"},on:{"enter":_vm.maskEnter}},[_c('div',{ref:"mask",class:['mask', {'-local': _vm.local}]},[_c('transition',{attrs:{"name":"fade"},on:{"enter":_vm.onLoadingEnter,"after-leave":_vm.afterLoadingLeave}},[(_vm.entered)?_c('div',{class:['loading', {'-freezing': _vm.freezeScreen}]},[(_vm.bar)?_c('div',{staticClass:"bar-wrapper",style:({width: ((240 * _vm.scale) + "px")})},[_c('k-progress',_vm._b({attrs:{"size":"small","percent":_vm.progress}},'k-progress',_vm.$attrs,false))],1):_c('k-spinner',_vm._b({attrs:{"rainbow":"","d":100 * _vm.scale,"stroke-width":3}},'k-spinner',_vm.$attrs,false)),_vm._v(" "),(_vm.message)?_c('div',{staticClass:"message"},[_vm._v(_vm._s(_vm._message))]):_vm._e()],1):_vm._e()])],1)])}
var Loading_staticRenderFns = []
var Loading_esExports = { render: Loading_render, staticRenderFns: Loading_staticRenderFns }
/* harmony default export */ var Loading_Loading = (Loading_esExports);
// CONCATENATED MODULE: ./src/components/Loading/Loading.vue
function Loading_injectStyle (ssrContext) {
  __webpack_require__(31)
}
var Loading_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Loading___vue_template_functional__ = false
/* styles */
var Loading___vue_styles__ = Loading_injectStyle
/* scopeId */
var Loading___vue_scopeId__ = "data-v-67dba358"
/* moduleIdentifier (server only) */
var Loading___vue_module_identifier__ = null
var Loading_Component = Loading_normalizeComponent(
  Loading,
  Loading_Loading,
  Loading___vue_template_functional__,
  Loading___vue_styles__,
  Loading___vue_scopeId__,
  Loading___vue_module_identifier__
)

/* harmony default export */ var components_Loading_Loading = (Loading_Component.exports);

// CONCATENATED MODULE: ./src/components/Loading/index.js
var Loading__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Loading__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var LoadingConstructor = external___commonjs___vue___commonjs2___vue___amd___vue___root___Vue___default.a.extend(components_Loading_Loading);

var instance;

var startLoading = function startLoading() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var onShow = _ref.onShow,
      onClose = _ref.onClose,
      onProgress = _ref.onProgress,
      onTimeout = _ref.onTimeout,
      timeout = _ref.timeout,
      rest = Loading__objectWithoutProperties(_ref, ['onShow', 'onClose', 'onProgress', 'onTimeout', 'timeout']);

  if (instance) return;
  instance = new LoadingConstructor({
    propsData: Loading__extends({}, rest),

    destroyed: function destroyed() {
      instance = null;
      onClose && onClose();
    },


    watch: {
      progress: function progress(val) {
        onProgress && onProgress(val);
      }
    }
  });

  instance.insert(onShow);

  timeout = timeout || instance.config$.defaultLoadingTimeout;
  if (timeout) {
    setTimeout(function () {
      if (instance) {
        onTimeout && onTimeout(instance);
        instance.close();
      }
    }, timeout);
  }

  return instance;
};

var stopLoading = function stopLoading() {
  if (!instance) return;

  instance.close();
};


// CONCATENATED MODULE: ./src/components/Modal/_props.js
/* harmony default export */ var Modal__props = ({
  freezeScreen: {
    type: Boolean,
    default: true
  },
  state: String,
  noCloseBtn: Boolean,
  noDivider: Boolean,
  hideOnBlur: Boolean,
  show: Boolean
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Modal/Modal.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






// import u from '~utils'

/* harmony default export */ var Modal = ({
  props: Modal__props,
  mixins: [overlaying],

  components: {
    IconClose: _Icons_Close,
    KDivider: components_Divider_Divider
  },

  data: function data() {
    return {
      entered: false,
      innerShow: false
    };
  },


  watch: {
    show: function show(val) {
      if (val) {
        this.innerShow = val;
      } else {
        this.close();
      }
    },
    innerShow: function innerShow(val) {
      this.$emit('update:show', val);
    }
  },

  methods: {
    close: function close() {
      this.entered = false;
    },
    showUp: function showUp() {
      this.innerShow = true;
    },
    afterModalLeave: function afterModalLeave() {
      if (this.freezeScreen && !document.querySelector('.modal.-freezing')) {
        document.documentElement.style.overflow = 'initial';
      }
      this.$refs.overlay.unmount();
    },
    maskEnter: function maskEnter() {
      this.entered = true;
      if (this.freezeScreen) {
        document.documentElement.style.overflow = 'hidden';
      }

      this.$emit('shown');
    },
    onModalEnter: function onModalEnter() {
      // can use refs
    },
    afterMaskLeave: function afterMaskLeave() {
      this.innerShow = false;
      this.$emit('hidden');
    },
    onMaskClick: function onMaskClick() {
      if (this.hideOnBlur) {
        this.close();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3b9fed58","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Modal/Modal.vue
var Modal_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.innerShow)?_c('overlay',{ref:"overlay",attrs:{"transition":"fade","transition-duration":"300","stay":""},on:{"enter":_vm.maskEnter,"after-leave":_vm.afterMaskLeave}},[_c('div',{ref:"mask",staticClass:"mask",on:{"click":_vm.onMaskClick}},[_c('transition',{attrs:{"name":"bounce-zoom-in-2"},on:{"enter":_vm.onModalEnter,"after-leave":_vm.afterModalLeave}},[(_vm.entered)?_c('div',{ref:"modal",class:['modal', {'-freezing': _vm.freezeScreen}],on:{"click":function($event){$event.stopPropagation();}}},[(!_vm.noCloseBtn)?_c('icon-close',{staticClass:"modal-close",nativeOn:{"click":function($event){_vm.close($event)}}}):_vm._e(),_vm._v(" "),(_vm.$slots.header)?_c('div',{class:['modal-header', _vm.state ? ("-" + _vm.state + "-gradient") : '']},[_vm._t("header")],2):_vm._e(),_vm._v(" "),_vm._t("default")],2):_vm._e()])],1)]):_vm._e()}
var Modal_staticRenderFns = []
var Modal_esExports = { render: Modal_render, staticRenderFns: Modal_staticRenderFns }
/* harmony default export */ var Modal_Modal = (Modal_esExports);
// CONCATENATED MODULE: ./src/components/Modal/Modal.vue
function Modal_injectStyle (ssrContext) {
  __webpack_require__(33)
}
var Modal_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Modal___vue_template_functional__ = false
/* styles */
var Modal___vue_styles__ = Modal_injectStyle
/* scopeId */
var Modal___vue_scopeId__ = "data-v-3b9fed58"
/* moduleIdentifier (server only) */
var Modal___vue_module_identifier__ = null
var Modal_Component = Modal_normalizeComponent(
  Modal,
  Modal_Modal,
  Modal___vue_template_functional__,
  Modal___vue_styles__,
  Modal___vue_scopeId__,
  Modal___vue_module_identifier__
)

/* harmony default export */ var components_Modal_Modal = (Modal_Component.exports);

// CONCATENATED MODULE: ./src/components/Drawer/_props.js
/* harmony default export */ var Drawer__props = ({
  side: {
    type: String,
    default: 'left'
  },
  freezeScreen: {
    type: Boolean,
    default: true
  },
  hideOnBlur: {
    type: Boolean,
    default: true
  },
  show: Boolean
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Drawer/Drawer.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Drawer = ({
  mixins: [overlaying],
  props: Drawer__props,
  data: function data() {
    return {
      entered: false,
      innerShow: false
    };
  },


  watch: {
    show: function show(val) {
      if (val) {
        this.innerShow = val;
      } else {
        this.close();
      }
    },
    innerShow: function innerShow(val) {
      this.$emit('update:show', val);
    }
  },

  methods: {
    close: function close() {
      this.entered = false;
    },
    showUp: function showUp() {
      this.innerShow = true;
    },
    afterDrawerLeave: function afterDrawerLeave() {
      if (this.freezeScreen && !document.querySelector('.drawer.-freezing')) {
        document.documentElement.style.overflow = 'initial';
      }
      this.innerShow = false;
    },
    maskEnter: function maskEnter() {
      this.entered = true;
      if (this.freezeScreen) {
        document.documentElement.style.overflow = 'hidden';
      }

      this.$emit('shown');
    },
    onDrawerEnter: function onDrawerEnter() {
      // can use refs
    },
    afterMaskLeave: function afterMaskLeave() {
      this.innerShow = false;
      this.$emit('hidden');
    },
    onMaskClick: function onMaskClick() {
      if (this.hideOnBlur) {
        this.close();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-25ebaab8","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Drawer/Drawer.vue
var Drawer_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('overlay',{ref:"overlay",attrs:{"transition":"fade","transition-duration":"100","stay":""},on:{"enter":_vm.maskEnter,"after-leave":_vm.afterMaskLeave}},[(_vm.innerShow)?_c('div',{ref:"mask",staticClass:"mask",on:{"click":_vm.onMaskClick}},[_c('transition',{attrs:{"name":("slide-in-" + _vm.side)},on:{"enter":_vm.onDrawerEnter,"after-leave":_vm.afterDrawerLeave}},[(_vm.entered)?_c('div',{ref:"drawer",class:['drawer', ("-" + _vm.side + "-side"), {'-freezing': _vm.freezeScreen}],on:{"click":function($event){$event.stopPropagation();}}},[_vm._t("default")],2):_vm._e()])],1):_vm._e()])}
var Drawer_staticRenderFns = []
var Drawer_esExports = { render: Drawer_render, staticRenderFns: Drawer_staticRenderFns }
/* harmony default export */ var Drawer_Drawer = (Drawer_esExports);
// CONCATENATED MODULE: ./src/components/Drawer/Drawer.vue
function Drawer_injectStyle (ssrContext) {
  __webpack_require__(34)
}
var Drawer_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Drawer___vue_template_functional__ = false
/* styles */
var Drawer___vue_styles__ = Drawer_injectStyle
/* scopeId */
var Drawer___vue_scopeId__ = "data-v-25ebaab8"
/* moduleIdentifier (server only) */
var Drawer___vue_module_identifier__ = null
var Drawer_Component = Drawer_normalizeComponent(
  Drawer,
  Drawer_Drawer,
  Drawer___vue_template_functional__,
  Drawer___vue_styles__,
  Drawer___vue_scopeId__,
  Drawer___vue_module_identifier__
)

/* harmony default export */ var components_Drawer_Drawer = (Drawer_Component.exports);

// CONCATENATED MODULE: ./src/components/Popover/_props.js
var _props_main = {
  width: [Number, String],
  position: {
    type: String,
    default: 's'
  },
  links: Array,
  show: Boolean,
  fixed: Boolean
};

var _props_link = {
  text: {
    type: String,
    required: true
  },
  disabled: Boolean
};


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Popover/PopoverLink.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var PopoverLink = ({
  props: _props_link,
  mixins: [linkable, with_icon],
  computed: {
    tag: function tag() {
      if (this.blank) {
        return 'a';
      } else if (this.nuxt) {
        return 'nuxt-link';
      } else if (this.router) {
        return 'router-link';
      } else {
        return 'a';
      }
    }
  },

  methods: {
    onClick: function onClick(evt) {
      if (this.preventDefault || this.disabled) {
        evt.preventDefault();
      }
      if (!this.disabled) {
        this.$emit('click');
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-544615d5","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Popover/PopoverLink.vue
var PopoverLink_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:['popover-link', {'-disabled': _vm.disabled}],attrs:{"to":_vm.fullHref,"href":_vm.fullHref,"target":_vm.blank ? '_blank' : '_self',"event":_vm.preventDefault || _vm.disabled ? '' : 'click'},on:{"click":_vm.onClick},nativeOn:{"click":function($event){_vm.onClick($event)}}},[(_vm.icon)?_c('i',{class:("popover-link-icon " + (_vm.config$.iconClassPrefix) + _vm.icon)}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.text))])])}
var PopoverLink_staticRenderFns = []
var PopoverLink_esExports = { render: PopoverLink_render, staticRenderFns: PopoverLink_staticRenderFns }
/* harmony default export */ var Popover_PopoverLink = (PopoverLink_esExports);
// CONCATENATED MODULE: ./src/components/Popover/PopoverLink.vue
function PopoverLink_injectStyle (ssrContext) {
  __webpack_require__(36)
}
var PopoverLink_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var PopoverLink___vue_template_functional__ = false
/* styles */
var PopoverLink___vue_styles__ = PopoverLink_injectStyle
/* scopeId */
var PopoverLink___vue_scopeId__ = "data-v-544615d5"
/* moduleIdentifier (server only) */
var PopoverLink___vue_module_identifier__ = null
var PopoverLink_Component = PopoverLink_normalizeComponent(
  PopoverLink,
  Popover_PopoverLink,
  PopoverLink___vue_template_functional__,
  PopoverLink___vue_styles__,
  PopoverLink___vue_scopeId__,
  PopoverLink___vue_module_identifier__
)

/* harmony default export */ var components_Popover_PopoverLink = (PopoverLink_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Popover/Popover.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Popover = ({
  props: _props_main,
  data: function data() {
    return {
      innerShow: false
    };
  },

  components: {
    PLink: components_Popover_PopoverLink,
    KDivider: components_Divider_Divider
  },

  watch: {
    show: function show(val) {
      this.innerShow = val;
    },
    innerShow: function innerShow(val) {
      this.$emit('update:show', val);
    }
  },
  inheritAttrs: false,
  computed: {
    realWidth: function realWidth() {
      return utils.getCSSLength(this.width);
    }
  },

  created: function created() {
    this.innerShow = this.show;
  },


  methods: {
    linkItemProp: function linkItemProp(item) {
      return object_assign_default()({}, this.$attrs || {}, item);
    },
    onClickOutside: function onClickOutside() {
      if (!this.fixed) {
        this.innerShow = false;
      }
    },
    onLinkClick: function onLinkClick(index) {
      this.$emit('select', this.links[index], index);
      if (!this.fixed) {
        this.innerShow = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c6a7694","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Popover/Popover.vue
var Popover_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.onClickOutside),expression:"onClickOutside"}],staticClass:"popover-wrapper"},[_vm._t("default"),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.innerShow),expression:"innerShow"}],class:['popover', ("-" + _vm.position)],style:({width: _vm.realWidth})},[(!_vm.links)?_vm._t("content"):_vm._l((_vm.links),function(link,index){return [(link.divider)?_c('k-divider',{key:index,attrs:{"margin":"4","color":"$white-darker"}}):_c('p-link',_vm._b({key:index,on:{"click":function($event){_vm.onLinkClick(index)}}},'p-link',_vm.linkItemProp(link),false))]})],2)],2)}
var Popover_staticRenderFns = []
var Popover_esExports = { render: Popover_render, staticRenderFns: Popover_staticRenderFns }
/* harmony default export */ var Popover_Popover = (Popover_esExports);
// CONCATENATED MODULE: ./src/components/Popover/Popover.vue
function Popover_injectStyle (ssrContext) {
  __webpack_require__(35)
}
var Popover_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Popover___vue_template_functional__ = false
/* styles */
var Popover___vue_styles__ = Popover_injectStyle
/* scopeId */
var Popover___vue_scopeId__ = "data-v-2c6a7694"
/* moduleIdentifier (server only) */
var Popover___vue_module_identifier__ = null
var Popover_Component = Popover_normalizeComponent(
  Popover,
  Popover_Popover,
  Popover___vue_template_functional__,
  Popover___vue_styles__,
  Popover___vue_scopeId__,
  Popover___vue_module_identifier__
)

/* harmony default export */ var components_Popover_Popover = (Popover_Component.exports);

// CONCATENATED MODULE: ./src/components/Tabs/_props.js
var Tabs__props_main = {
  defaultActiveKey: {
    type: null
  },
  currentKey: {
    type: null
  },
  type: {
    type: String,
    default: 'default'
  },
  width: {
    type: String,
    default: '250px'
  },
  gap: {
    type: String,
    default: '5px'
  }
};

var nav = {
  panes: Array,
  activeKey: null,
  width: {
    type: String,
    default: '250px'
  },
  gap: {
    type: String,
    default: '5px'
  }
};

var pane = {
  tabKey: String,
  label: String,
  disabled: Boolean
};


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Tabs/TabNav.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var TabNav = ({
  props: nav,

  data: function data() {
    return {
      currentPosiOfBar: 0,
      barWidth: 0
    };
  },
  mounted: function mounted() {
    this.scrollToActive();
  },


  watch: {
    activeKey: function activeKey(newTabKey) {
      this.$nextTick(this.scrollToActive);
    }
  },

  methods: {
    scrollToActive: function scrollToActive() {
      var _$refs = this.$refs,
          nav = _$refs.nav,
          activeScrollBar = _$refs.activeScrollBar;

      var activeTab = nav.querySelector('.-active');
      if (activeTab) {
        var activeTabClientRect = activeTab.getBoundingClientRect();
        var scrollBarClientReact = activeScrollBar.getBoundingClientRect();
        var currentPosiOfBar = this.currentPosiOfBar;
        this.currentPosiOfBar = currentPosiOfBar - (scrollBarClientReact.left - activeTabClientRect.left);
        this.barWidth = activeTabClientRect.width;
      }
    },
    onNavClick: function onNavClick(key) {
      this.$emit('active-change', key);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2bec767e","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Tabs/TabNav.vue
var TabNav_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabs-nav"},[_c('div',{ref:"nav"},_vm._l((_vm.panes),function(item,i){return _c('span',{key:i,class:['tabs-nav-item', {'-active':_vm.activeKey===item.tabKey, '-disabled':item.disabled}],style:({'width':_vm.width, 'margin-right':_vm.gap}),on:{"click":function($event){_vm.onNavClick(item.tabKey)}}},[_vm._v("\n      "+_vm._s(item.label)+"\n    ")])})),_vm._v(" "),_c('div',{ref:"activeScrollBar",staticClass:"tabs-nav-activebar",style:({'transform':("translateX(" + _vm.currentPosiOfBar + "px)"),'width':(_vm.barWidth + "px")})})])}
var TabNav_staticRenderFns = []
var TabNav_esExports = { render: TabNav_render, staticRenderFns: TabNav_staticRenderFns }
/* harmony default export */ var Tabs_TabNav = (TabNav_esExports);
// CONCATENATED MODULE: ./src/components/Tabs/TabNav.vue
function TabNav_injectStyle (ssrContext) {
  __webpack_require__(37)
}
var TabNav_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var TabNav___vue_template_functional__ = false
/* styles */
var TabNav___vue_styles__ = TabNav_injectStyle
/* scopeId */
var TabNav___vue_scopeId__ = "data-v-2bec767e"
/* moduleIdentifier (server only) */
var TabNav___vue_module_identifier__ = null
var TabNav_Component = TabNav_normalizeComponent(
  TabNav,
  Tabs_TabNav,
  TabNav___vue_template_functional__,
  TabNav___vue_styles__,
  TabNav___vue_scopeId__,
  TabNav___vue_module_identifier__
)

/* harmony default export */ var components_Tabs_TabNav = (TabNav_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Tabs/Tabs.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Tabs = ({
  components: {
    TabNav: components_Tabs_TabNav
  },
  props: Tabs__props_main,
  data: function data() {
    return {
      priCurrentKey: null,
      panesProps: null
    };
  },


  watch: {
    currentKey: function currentKey(val) {
      this.priCurrentKey = val;
    }
  },
  created: function created() {
    this.priCurrentKey = this.defaultActiveKey || this.$slots.default[0].componentOptions.propsData['tabKey'];
    this.panesProps = this.$slots.default.map(function (i) {
      return i.componentOptions.propsData;
    });
  },

  methods: {
    handleUpdate: function handleUpdate(key) {
      this.$emit('keyChanged', key);
      this.priCurrentKey = key;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dc5eb410","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Tabs/Tabs.vue
var Tabs_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("tabs -" + (this.type))},[_c('tab-nav',{attrs:{"panes":_vm.panesProps,"active-key":_vm.priCurrentKey,"width":_vm.width,"gap":_vm.gap},on:{"active-change":_vm.handleUpdate}}),_vm._v(" "),_c('div',{staticClass:"tabs-content"},[_vm._t("default")],2)],1)}
var Tabs_staticRenderFns = []
var Tabs_esExports = { render: Tabs_render, staticRenderFns: Tabs_staticRenderFns }
/* harmony default export */ var Tabs_Tabs = (Tabs_esExports);
// CONCATENATED MODULE: ./src/components/Tabs/Tabs.vue
var Tabs_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Tabs___vue_template_functional__ = false
/* styles */
var Tabs___vue_styles__ = null
/* scopeId */
var Tabs___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Tabs___vue_module_identifier__ = null
var Tabs_Component = Tabs_normalizeComponent(
  Tabs,
  Tabs_Tabs,
  Tabs___vue_template_functional__,
  Tabs___vue_styles__,
  Tabs___vue_scopeId__,
  Tabs___vue_module_identifier__
)

/* harmony default export */ var components_Tabs_Tabs = (Tabs_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Tabs/TabPane.vue
//
//
//
//
//
//
//


/* harmony default export */ var TabPane = ({
  props: pane,
  computed: {
    active: function active() {
      return this.$parent.priCurrentKey === this.tabKey;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1aae04f3","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Tabs/TabPane.vue
var TabPane_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}]},[_vm._t("default")],2)}
var TabPane_staticRenderFns = []
var TabPane_esExports = { render: TabPane_render, staticRenderFns: TabPane_staticRenderFns }
/* harmony default export */ var Tabs_TabPane = (TabPane_esExports);
// CONCATENATED MODULE: ./src/components/Tabs/TabPane.vue
var TabPane_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var TabPane___vue_template_functional__ = false
/* styles */
var TabPane___vue_styles__ = null
/* scopeId */
var TabPane___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TabPane___vue_module_identifier__ = null
var TabPane_Component = TabPane_normalizeComponent(
  TabPane,
  Tabs_TabPane,
  TabPane___vue_template_functional__,
  TabPane___vue_styles__,
  TabPane___vue_scopeId__,
  TabPane___vue_module_identifier__
)

/* harmony default export */ var components_Tabs_TabPane = (TabPane_Component.exports);

// CONCATENATED MODULE: ./src/components/Breadcrumbs/_props.js
var Breadcrumbs__props_main = {
  data: Array,
  separator: String,
  root: {
    type: [String, Object],
    default: '首页'
  }
};

var _props_item = {
  text: String,
  disabled: Boolean,
  active: Boolean,
  index: Number
};


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Breadcrumbs/BreadcrumbItem.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BreadcrumbItem = ({
  mixins: [with_icon, linkable],
  props: _props_item,
  computed: {
    tag: function tag() {
      if (this.active) return 'span';
      return this.nuxt ? 'nuxt-link' : this.router ? 'router-link' : 'a';
    },
    iconOnly: function iconOnly() {
      return !this.text && !this.$slots.default && this.icon;
    }
  },
  methods: {
    onClick: function onClick(evt) {
      if (this.preventDefault || this.disabled) {
        evt.preventDefault();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8d3afc32","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Breadcrumbs/BreadcrumbItem.vue
var BreadcrumbItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:['breadcrumb-item', { '-active': _vm.active, '-disabled': _vm.disabled, '-icon-only': _vm.iconOnly }],attrs:{"to":_vm.fullHref,"href":_vm.fullHref,"target":_vm.blank ? '_blank' : '_self',"event":_vm.preventDefault || _vm.disabled ? '' : 'click'},on:{"click":function($event){$event.stopPropagation();_vm.onClick($event)}},nativeOn:{"click":function($event){$event.stopPropagation();_vm.onClick($event)}}},[(_vm.icon && _vm.iconPosition == 'prepend')?_c('i',{class:['breadcrumb-item-icon', 'prepend', ("" + (_vm.config$.iconClassPrefix) + _vm.icon)]}):_vm._e(),_vm._v(" "),(!_vm.text)?_vm._t("default"):_c('span',[_vm._v(_vm._s(_vm.text))]),_vm._v(" "),(_vm.icon && _vm.iconPosition == 'append')?_c('i',{class:['breadcrumb-item-icon', 'append', ("" + (_vm.config$.iconClassPrefix) + _vm.icon)]}):_vm._e()],2)}
var BreadcrumbItem_staticRenderFns = []
var BreadcrumbItem_esExports = { render: BreadcrumbItem_render, staticRenderFns: BreadcrumbItem_staticRenderFns }
/* harmony default export */ var Breadcrumbs_BreadcrumbItem = (BreadcrumbItem_esExports);
// CONCATENATED MODULE: ./src/components/Breadcrumbs/BreadcrumbItem.vue
function BreadcrumbItem_injectStyle (ssrContext) {
  __webpack_require__(39)
}
var BreadcrumbItem_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var BreadcrumbItem___vue_template_functional__ = false
/* styles */
var BreadcrumbItem___vue_styles__ = BreadcrumbItem_injectStyle
/* scopeId */
var BreadcrumbItem___vue_scopeId__ = "data-v-8d3afc32"
/* moduleIdentifier (server only) */
var BreadcrumbItem___vue_module_identifier__ = null
var BreadcrumbItem_Component = BreadcrumbItem_normalizeComponent(
  BreadcrumbItem,
  Breadcrumbs_BreadcrumbItem,
  BreadcrumbItem___vue_template_functional__,
  BreadcrumbItem___vue_styles__,
  BreadcrumbItem___vue_scopeId__,
  BreadcrumbItem___vue_module_identifier__
)

/* harmony default export */ var components_Breadcrumbs_BreadcrumbItem = (BreadcrumbItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Breadcrumbs/Breadcrumbs.vue
var Breadcrumbs__typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Breadcrumbs = ({
  inheritAttrs: false,
  components: { BreadcrumbItem: components_Breadcrumbs_BreadcrumbItem },
  props: Breadcrumbs__props_main,

  computed: {
    realArr: function realArr() {
      return this.data || this.parsedRoutes;
    },
    parsedRoutes: function parsedRoutes() {
      if (!this.$route) return [];
      var arr = this.$route.matched.map(function (i) {
        return {
          text: i.meta.name || i.name || i.path.split('/').reverse()[0],
          href: i.path,
          router: true
        };
      }).slice(0);
      var index = {
        text: this.root,
        href: '/',
        router: true
      };
      if (Breadcrumbs__typeof(this.root) === 'object' && this.root !== null) {
        index = utils.assign({}, index, this.root);
      }
      arr.unshift(index);
      return arr;
    }
  },

  methods: {
    itemProps: function itemProps(item) {
      return utils.assign({}, this.$attrs, item);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-656bd129","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Breadcrumbs/Breadcrumbs.vue
var Breadcrumbs_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breadcrumbs"},[_vm._l((_vm.realArr),function(item,index){return [_c('breadcrumb-item',_vm._b({key:index,attrs:{"active":index === _vm.realArr.length - 1}},'breadcrumb-item',_vm.itemProps(item),false)),_vm._v(" "),(index < _vm.realArr.length - 1)?_c('span',{key:index,class:['breadcrumb-sep', {'-default': !_vm.separator && !_vm.$scopedSlots.sep, '-active': index === _vm.realArr.length - 2}]},[(_vm.$scopedSlots.sep)?_vm._t("sep"):[_vm._v(_vm._s(_vm.separator))]],2):_vm._e()]})],2)}
var Breadcrumbs_staticRenderFns = []
var Breadcrumbs_esExports = { render: Breadcrumbs_render, staticRenderFns: Breadcrumbs_staticRenderFns }
/* harmony default export */ var Breadcrumbs_Breadcrumbs = (Breadcrumbs_esExports);
// CONCATENATED MODULE: ./src/components/Breadcrumbs/Breadcrumbs.vue
function Breadcrumbs_injectStyle (ssrContext) {
  __webpack_require__(38)
}
var Breadcrumbs_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var Breadcrumbs___vue_template_functional__ = false
/* styles */
var Breadcrumbs___vue_styles__ = Breadcrumbs_injectStyle
/* scopeId */
var Breadcrumbs___vue_scopeId__ = "data-v-656bd129"
/* moduleIdentifier (server only) */
var Breadcrumbs___vue_module_identifier__ = null
var Breadcrumbs_Component = Breadcrumbs_normalizeComponent(
  Breadcrumbs,
  Breadcrumbs_Breadcrumbs,
  Breadcrumbs___vue_template_functional__,
  Breadcrumbs___vue_styles__,
  Breadcrumbs___vue_scopeId__,
  Breadcrumbs___vue_module_identifier__
)

/* harmony default export */ var components_Breadcrumbs_Breadcrumbs = (Breadcrumbs_Component.exports);

// CONCATENATED MODULE: ./src/components/List/_props.js
/* harmony default export */ var List__props = ({
  data: {
    type: Array,
    required: true
  },
  itemKey: String,
  listStyle: {
    type: String, // https://developer.mozilla.org/en-US/docs/Web/CSS/list-style
    default: 'none'
  },
  flex: Boolean,
  wrap: {
    type: Boolean,
    default: true
  },
  reverse: Boolean,
  xgap: {
    type: Number,
    default: 15
  },
  ygap: {
    type: Number,
    default: 20
  },
  cols: {
    type: Number,
    default: 1
  },
  balanced: Boolean,
  sortable: Boolean,
  transitionName: {
    type: String,
    default: 'cell'
  },
  transitionEnterClass: {
    type: String,
    default: 'fade'
  },
  transitionLeaveClass: {
    type: String,
    default: 'fade'
  }
});
// EXTERNAL MODULE: ./node_modules/sortablejs/Sortable.js
var Sortable = __webpack_require__(41);
var Sortable_default = /*#__PURE__*/__webpack_require__.n(Sortable);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/List/List.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var List = ({
  props: List__props,
  model: {
    prop: 'data',
    event: 'update:data'
  },

  inheritAttrs: false,

  data: function data() {
    return {
      containerWidth: 0,
      arr: [],
      mySortable: null,
      draggedIndex: null,
      dragEnteredIndex: null,
      ghost: null,
      dragCoord: null,
      equal: false,
      swapMode: false
    };
  },


  computed: {
    outerStyle: function outerStyle() {
      var obj = {};
      obj.listStyle = this.listStyle;
      if (this.cols > 1) {
        if (this.flex) {
          obj.display = 'flex';
          obj.flexWrap = this.wrap ? 'wrap' : 'nowrap';
        }
        obj.whiteSpace = this.wrap ? 'normal' : 'nowrap';
      }
      if (this.reverse) {
        if (this.flex) {
          obj.flexDirection = 'row-reverse';
        } else {
          obj.direction = 'rtl';
        }
      }
      return obj;
    },
    rowCount: function rowCount() {
      return Math.ceil(this.arr.length / this.cols);
    },
    autoWidth: function autoWidth() {
      var gapCount = this.wrap ? this.cols - 1 : this.data.length - 1;
      var gapWidth = this.xgap || 0;
      if (this.equal) {
        gapCount++;
      }
      return (this.containerWidth - gapCount * gapWidth) / (this.wrap ? this.cols : this.data.length);
    },
    maxIndex: function maxIndex() {
      return this.arr.length - 1;
    }
  },

  watch: {
    arr: function arr(val) {
      this.$emit('update:data', val);
    },
    data: function data(val) {
      this.arr = val;
    },
    sortable: function sortable(val) {
      if (val) {
        this.createSortable();
      } else {
        this.destroySortable();
      }
    },
    balanced: function balanced(val) {
      this.equal = !!val;
    }
  },

  mounted: function mounted() {
    this.containerWidth = this.$el.clientWidth;

    this.arr = this.data.slice(0);
    this.equal = !!this.balanced;

    if (this.sortable) {
      this.createSortable();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.destroySortable();
  },


  methods: {
    itemStyle: function itemStyle(index) {
      var obj = {};
      var isInLastRow = this.rowIndex(index) + 1 === this.rowCount;

      if (!this.flex) {
        obj.display = 'inline-block';
        obj.verticalAlign = 'middle';
        if (this.listStyle && this.listStyle !== 'none') {
          obj.display = 'list-item';
          obj.float = this.reverse ? 'right' : 'left';
        }
      }

      if (this.cols > 1) {
        obj.width = this.autoWidth + 'px';
      } else {
        obj.width = this.containerWidth + 'px';
      }

      if (this.ygap && (!isInLastRow || this.equal) && this.wrap) {
        obj.marginBottom = utils.getCSSLength(this.ygap);
      }

      if (this.xgap && this.cols > 1) {
        if (this.wrap && this.colIndex(index) + 1 !== this.cols || !this.wrap && index !== this.maxIndex || this.equal) {
          obj[this.reverse ? 'marginLeft' : 'marginRight'] = utils.getCSSLength(this.xgap / 2);
        }

        if (this.wrap && this.colIndex(index) !== 0 || !this.wrap && index !== 0 || this.equal) {
          obj[this.reverse ? 'marginRight' : 'marginLeft'] = utils.getCSSLength(this.xgap / 2);
        }
      }

      return obj;
    },
    rowIndex: function rowIndex(index) {
      return Math.floor(index / this.cols);
    },
    colIndex: function colIndex(index) {
      return index % this.cols;
    },
    forceUpdate: function forceUpdate() {
      this.containerWidth = this.$el.clientWidth;
    },
    createSortable: function createSortable() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.destroySortable();
        var options = _this2.$attrs || {};
        options.scrollFn = function (offsetX, offsetY, originalEven) {
          _this2.$emit('sort-scroll', offsetX, offsetY, originalEven);
        };
        options.onChoose = function (evt) {
          _this2.$emit('drag-choose', evt);
        };
        options.onStart = function (evt) {
          _this2.$emit('drag-start', evt);
        };
        options.onMove = function (evt, originalEven) {
          _this2.equal = true;
          _this2.$emit('drag-move', evt, originalEven);
        };
        options.onEnd = function (evt) {
          _this2.equal = !!_this2.balanced;
          _this2.$emit('drag-end', evt);
        };
        options.onFilter = function (evt) {
          _this2.$emit('filtered-drag', evt);
        };
        options.onUpdate = function (evt) {
          var newIndex = evt.newIndex,
              oldIndex = evt.oldIndex;

          _this2.arr.splice(newIndex, 0, _this2.arr.splice(oldIndex, 1)[0]);
          _this2.$emit('update', evt); // within list
        };
        // options.onAdd = evt => {
        //   this.$emit('add', evt) // from another
        // }
        // options.onRemove = evt => {
        //   this.$emit('remove', evt) // to another
        // }
        // options.onSort = evt => {
        //   this.$emit('sort', evt) // add, update, remove
        // }
        // options.onClone = evt => {
        //   this.$emit('clone', evt)
        // }

        _this2.mySortable = Sortable_default.a.create(_this2.$el, options);
      });
    },
    destroySortable: function destroySortable() {
      if (this.mySortable && this.mySortable.destroy) {
        this.mySortable.destroy();
        this.mySortable = null;
      }
    },
    swap: function swap(i1, i2) {
      var _this3 = this;

      var _this = this;
      function validNumber(n) {
        n = +n;
        return typeof n === 'number' && n >= 0 && n <= _this.maxIndex;
      }
      if (i1 === i2 || !validNumber(i1) || !validNumber(i2)) return;
      this.swapMode = true;
      var item1 = this.arr[i1];
      this.arr.splice(i1, 1, this.arr.splice(i2, 1, item1)[0]);
      setTimeout(function () {
        _this3.swapMode = false;
      }, 500);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-909e6f0c","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/List/List.vue
var List_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"list",style:(_vm.outerStyle),attrs:{"name":_vm.sortable || _vm.swapMode ? _vm.transitionName : null,"tag":"ul","data-row-count":_vm.rowCount,"data-col-count":_vm.cols}},_vm._l((_vm.arr),function(item,index){return _c('li',{key:_vm.itemKey ? item[_vm.itemKey] : item,class:['list-item', {'-dragged': index === _vm.draggedIndex}],style:(_vm.itemStyle(index)),attrs:{"data-row-index":_vm.rowIndex(index),"data-col-index":_vm.colIndex(index)}},[_vm._t("default",null,{item:item,index:index})],2)}))}
var List_staticRenderFns = []
var List_esExports = { render: List_render, staticRenderFns: List_staticRenderFns }
/* harmony default export */ var List_List = (List_esExports);
// CONCATENATED MODULE: ./src/components/List/List.vue
function List_injectStyle (ssrContext) {
  __webpack_require__(40)
}
var List_normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var List___vue_template_functional__ = false
/* styles */
var List___vue_styles__ = List_injectStyle
/* scopeId */
var List___vue_scopeId__ = "data-v-909e6f0c"
/* moduleIdentifier (server only) */
var List___vue_module_identifier__ = null
var List_Component = List_normalizeComponent(
  List,
  List_List,
  List___vue_template_functional__,
  List___vue_styles__,
  List___vue_scopeId__,
  List___vue_module_identifier__
)

/* harmony default export */ var components_List_List = (List_Component.exports);

// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Button", function() { return components_Button_Button; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Container", function() { return components_Container_Container; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Panel", function() { return components_Panel_Panel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Divider", function() { return components_Divider_Divider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Navigator", function() { return components_Navigator_Navigator; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Spinner", function() { return components_Spinner_Spinner; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Group", function() { return Group_Group; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Input", function() { return components_Input_Input; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return components_Checkbox_Checkbox; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Radio", function() { return components_Radio_Radio; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Switch", function() { return components_Switch_Switch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Slider", function() { return components_Slider_Slider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Toast", function() { return components_Toast_Toast; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Notification", function() { return components_Notification_Notification; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Dialog", function() { return components_Dialog_Dialog; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Loading", function() { return components_Loading_Loading; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Modal", function() { return components_Modal_Modal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Drawer", function() { return components_Drawer_Drawer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Popover", function() { return components_Popover_Popover; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PopoverLink", function() { return components_Popover_PopoverLink; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Progress", function() { return components_Progress_Progress; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return components_Tabs_Tabs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TabPane", function() { return components_Tabs_TabPane; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return components_Breadcrumbs_Breadcrumbs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "List", function() { return components_List_List; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
var src__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




























// import Breadcrumb from './components/Breadcrumb/Breadcrumb'
// import BreadcrumbItem from './components/Breadcrumb/BreadcrumbItem'



var components = {
  button: components_Button_Button,
  container: components_Container_Container,
  panel: components_Panel_Panel,
  divider: components_Divider_Divider,
  navigator: components_Navigator_Navigator,
  spinner: components_Spinner_Spinner,
  group: Group_Group,
  input: components_Input_Input,
  checkbox: components_Checkbox_Checkbox,
  radio: components_Radio_Radio,
  switch: components_Switch_Switch,
  slider: components_Slider_Slider,
  toast: components_Toast_Toast,
  notification: components_Notification_Notification,
  dialog: components_Dialog_Dialog,
  loading: components_Loading_Loading,
  modal: components_Modal_Modal,
  drawer: components_Drawer_Drawer,
  popover: components_Popover_Popover,
  'popover-link': components_Popover_PopoverLink,
  progress: components_Progress_Progress,
  tabs: components_Tabs_Tabs,
  'tab-pane': components_Tabs_TabPane,
  // breadcrumb: Breadcrumb,
  // 'breadcrumb-item': BreadcrumbItem,
  breadcrumbs: components_Breadcrumbs_Breadcrumbs,
  list: components_List_List
};

/* harmony default export */ var src = __webpack_exports__["default"] = (src__extends({
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Vue.use(vue_outside_events_min_default.a);

    var namespace = options.prefix || 'k';

    for (var key in components) {
      if (components.hasOwnProperty(key)) {
        Vue.component(namespace + '-' + key, components[key]);
      }
    }
    // console.log('env:', process.env.NODE_ENV)
    Vue.mixin({
      props:  false ? {
        debug: Boolean
      } : {},

      data: function data() {
        return {
          config$: {
            defaultLoadingMessage: options.defaultLoadingMessage || '加载中，请稍等片刻',
            defaultLoadingTimeout: options.defaultLoadingTimeout || 0,
            defaultToastTop: options.defaultToastTop,
            defaultDialogTop: options.defaultDialogTop,
            iconClassPrefix: options.iconClassPrefix || 'iconfont icon-',
            namespace: namespace
          }
        };
      }
    });

    Vue.prototype.$showToast = showToast;
    Vue.prototype.$notify = function (payload) {
      notify(this.$router, payload);
    };
    Vue.prototype.$showDialog = showDialog;
    Vue.prototype.$startLoading = startLoading;
    Vue.prototype.$stopLoading = stopLoading;
  }
}, components, {
  utils: utils
}));



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * vue-outside-events @ 1.1.0
 * Nicholas Hutchind <nicholas@hutchind.com>
 *
 * Vue directive to react to various events outside the current element
 *
 * License: MIT
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("vue-outside-events",t):e["vue-outside-events"]=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(t,i){var n={};return n.directiveName=t,n.eventName=i,n.bind=function(n,o,u){var d=void 0!==console.error?console.error:console.log,r=null,v=void 0;if("function"!=typeof o.value)if("object"===e(o.value)&&o.value.hasOwnProperty("handler")&&"function"==typeof o.value.handler)r=o.value.handler,v=Object.assign({},o.value),delete v.handler;else{var c="["+t+"]: provided expression '"+o.expression+"' must be a function or an object containing a property named 'handler' that is a function.";u.context.name&&(c+="\nFound in component '"+u.context.name+"'"),d(c)}else r=o.value;var a=function(e){n.contains(e.target)||n===e.target||r(e,n,v)};n.__vueEventOutside__=a,document.addEventListener(i,a)},n.unbind=function(e,t){document.removeEventListener(i,e.__vueEventOutside__),e.__vueEventOutside__=null},n},i={directiveName:"event-outside",bind:function(t,i,n){var o=void 0!==console.error?console.error:console.log,u=void 0;if("object"!==e(i.value)||void 0===i.value.name||"string"!=typeof i.value.name||void 0===i.value.handler||"function"!=typeof i.value.handler){var d="[v-event-outside]: provided expression '"+i.expression+'\' must be an object containing a "name" string and a "handler" function.';return n.context.name&&(d+="\nFound in component '"+n.context.name+"'"),void o(d)}if(u=Object.assign({},i.value),delete u.name,delete u.handler,i.modifiers.jquery&&void 0===window.$&&void 0===window.jQuery){var r="[v-event-outside]: jQuery is not present in window.";return n.context.name&&(r+="\nFound in component '"+n.context.name+"'"),void o(r)}var v=function(e){t.contains(e.target)||t===e.target||i.value.handler(e,t,u)};t.__vueEventOutside__=v,i.modifiers.jquery?jQuery(document).on(i.value.name,v):document.addEventListener(i.value.name,v)},unbind:function(e,t){t.modifiers.jquery?jQuery(document).off(t.value.name,e.__vueEventOutside__):document.removeEventListener(t.value.name,e.__vueEventOutside__),e.__vueEventOutside__=null}},n=t("click-outside","click"),o=t("dblclick-outside","dblclick"),u=t("focus-outside","focusin"),d=t("blur-outside","focusout"),r=t("mousemove-outside","mousemove"),v=t("mousedown-outside","mousedown"),c=t("mouseup-outside","mouseup"),a=t("mouseover-outside","mouseover"),s=t("mouseout-outside","mouseout"),m=t("change-outside","change"),l=t("select-outside","select"),f=t("submit-outside","submit"),p=t("keydown-outside","keydown"),y=t("keypress-outside","keypress"),_=t("keyup-outside","keyup"),b={install:function(e){e.directive(n.directiveName,n),e.directive(o.directiveName,o),e.directive(u.directiveName,u),e.directive(d.directiveName,d),e.directive(r.directiveName,r),e.directive(v.directiveName,v),e.directive(c.directiveName,c),e.directive(a.directiveName,a),e.directive(s.directiveName,s),e.directive(m.directiveName,m),e.directive(l.directiveName,l),e.directive(f.directiveName,f),e.directive(p.directiveName,p),e.directive(y.directiveName,y),e.directive(y.directiveName,y),e.directive(_.directiveName,_),e.directive(i.directiveName,i)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(b),b});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//every string I match against are lowercase
var HEX_PATTERN = /^#(?:[a-f0-9]{3})?(?:[a-f0-9]{3})$/;
// css color names + initial + inherit + currentColor + transparent
var CSS_COLOR_NAMES = [
  'aliceblue',
  'antiquewhite',
  'aqua',
  'aquamarine',
  'azure',
  'beige',
  'bisque',
  'black',
  'blanchedalmond',
  'blue',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  'cornsilk',
  'crimson',
  'currentColor',
  'cyan',
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgreen',
  'darkgrey',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkslategrey',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray',
  'dimgrey',
  'dodgerblue',
  'firebrick',
  'floralwhite',
  'forestgreen',
  'fuchsia',
  'gainsboro',
  'ghostwhite',
  'gold',
  'goldenrod',
  'gray',
  'green',
  'greenyellow',
  'grey',
  'honeydew',
  'hotpink',
  'indianred',
  'indigo',
  'inherit',
  'initial',
  'ivory',
  'khaki',
  'lavender',
  'lavenderblush',
  'lawngreen',
  'lemonchiffon',
  'lightblue',
  'lightcoral',
  'lightcyan',
  'lightgoldenrodyellow',
  'lightgray',
  'lightgreen',
  'lightgrey',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightslategrey',
  'lightsteelblue',
  'lightyellow',
  'lime',
  'limegreen',
  'linen',
  'magenta',
  'maroon',
  'mediumaquamarine',
  'mediumblue',
  'mediumorchid',
  'mediumpurple',
  'mediumseagreen',
  'mediumslateblue',
  'mediumspringgreen',
  'mediumturquoise',
  'mediumvioletred',
  'midnightblue',
  'mintcream',
  'mistyrose',
  'moccasin',
  'navajowhite',
  'navy',
  'oldlace',
  'olive',
  'olivedrab',
  'orange',
  'orangered',
  'orchid',
  'palegoldenrod',
  'palegreen',
  'paleturquoise',
  'palevioletred',
  'papayawhip',
  'peachpuff',
  'peru',
  'pink',
  'plum',
  'powderblue',
  'purple',
  'rebeccapurple',
  'red',
  'rosybrown',
  'royalblue',
  'saddlebrown',
  'salmon',
  'sandybrown',
  'seagreen',
  'seashell',
  'sienna',
  'silver',
  'skyblue',
  'slateblue',
  'slategray',
  'slategrey',
  'snow',
  'springgreen',
  'steelblue',
  'tan',
  'teal',
  'thistle',
  'tomato',
  'transparent',
  'turquoise',
  'violet',
  'wheat',
  'white',
  'whitesmoke',
  'yellow',
  'yellowgreen',
];

var PREFIX = '^(rgb|hsl)(a?)\\s*\\(';
var VALUE = '\\s*([-+]?\\d+%?)\\s*';
var ALPHA = '(?:,\\s*([-+]?(?:(?:\\d+(?:\.\\d+)?)|(?:\.\\d+))\\s*))?';
var SUFFIX = '\\)$';
var RGB_HSL_PATTERN = new RegExp(PREFIX + VALUE + ',' + VALUE + ',' + VALUE + ALPHA + SUFFIX);

var NUM_TYPE = 1;
var PERCENTAGE_TYPE = 2;
var ERROR_TYPE = NUM_TYPE & PERCENTAGE_TYPE;

module.exports = function(str) {
  function getColorType(token) {
    return token.indexOf('%') !== -1 ? PERCENTAGE_TYPE : NUM_TYPE;
  }

  if(!str || typeof str !== 'string') {
    return false;
  }

  var color = str.replace(/^\s+|\s+$/g, '').toLocaleLowerCase();

  // named colors or hex code
  if((CSS_COLOR_NAMES.indexOf(color) !== -1) || HEX_PATTERN.test(color)) {
    return true;
  }

  var result = color.match(RGB_HSL_PATTERN);
  if(result) {
    var flavor = result[1];
    var alpha = result[2];
    var rh = result[3];
    var gs = result[4];
    var bl = result[5];
    var a = result[6];

    // alpha test
    if((alpha === 'a' && !a) || (a && alpha === '')) {
      return false;
    }

    // hsl
    if(flavor === 'hsl') {
      if(getColorType(rh) !== NUM_TYPE) {
        return false;
      }
      return (getColorType(gs) & getColorType(bl)) === PERCENTAGE_TYPE;
    }

    // rgb
    return (getColorType(rh) & getColorType(gs) & getColorType(bl)) !== ERROR_TYPE;
  }

  return false;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * object.omit <https://github.com/jonschlinkert/object.omit>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(8);

module.exports = function omit(obj, props, fn) {
  if (!isObject(obj)) return {};

  if (typeof props === 'function') {
    fn = props;
    props = [];
  }

  if (typeof props === 'string') {
    props = [props];
  }

  var isFunction = typeof fn === 'function';
  var keys = Object.keys(obj);
  var res = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var val = obj[key];

    if (!props || (props.indexOf(key) === -1 && (!isFunction || fn(val, key, obj)))) {
      res[key] = val;
    }
  }
  return res;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isPlainObject = __webpack_require__(9);

module.exports = function isExtendable(val) {
  return isPlainObject(val) || typeof val === 'function' || Array.isArray(val);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(10);

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * v-dragged v0.0.5
 * https://github.com/zhanziyang/v-dragged
 * 
 * Copyright (c) 2017 zhanziyang
 * Released under the ISC license
 */
  
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VDragged = factory());
}(this, (function () { 'use strict';

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var u = {
  addEventListeners: function addEventListeners(el, events, handler) {
    for (var i = 0, len = events.length; i < len; i++) {
      el.addEventListener(events[i], handler);
    }
  },
  removeEventListeners: function removeEventListeners(el, events, handler) {
    for (var i = 0, len = events.length; i < len; i++) {
      el.removeEventListener(events[i], handler);
    }
  },
  getPointer: function getPointer(evt) {
    var pointer = void 0;
    if (evt.touches && evt.touches[0]) {
      pointer = evt.touches[0];
    } else if (evt.changedTouches && evt.changedTouches[0]) {
      pointer = evt.changedTouches[0];
    } else {
      pointer = evt;
    }
    return pointer;
  }
};

var POINTER_START_EVENTS = ['mousedown', 'touchstart'];
var POINTER_MOVE_EVENTS = ['mousemove', 'touchmove'];
var POINTER_END_EVENTS = ['mouseup', 'touchend'];
var draggedElem;

var directive = {
  inserted: function inserted(el, binding, vnode) {
    if (!document) return;
    var prevent = !!binding.modifiers.prevent;
    function onPointerStart(evt) {
      prevent && evt.preventDefault();
      var pointer = u.getPointer(evt);
      el.lastCoords = el.firstCoords = {
        x: pointer.clientX,
        y: pointer.clientY
      };
      binding.value({
        el: el,
        first: true,
        clientX: pointer.clientX,
        clientY: pointer.clientY
      });
      draggedElem = el;
    }
    function onPointerEnd(evt) {
      prevent && evt.preventDefault();
      if (el !== draggedElem) return;
      el.lastCoords = null;
      var pointer = u.getPointer(evt);
      binding.value({
        el: el,
        last: true,
        clientX: pointer.clientX,
        clientY: pointer.clientY
      });
      draggedElem = null;
    }
    function onPointerMove(evt) {
      prevent && evt.preventDefault();
      if (el !== draggedElem) return;
      var pointer = u.getPointer(evt);
      if (el.lastCoords) {
        var deltaX = pointer.clientX - el.lastCoords.x;
        var deltaY = pointer.clientY - el.lastCoords.y;
        var offsetX = pointer.clientX - el.firstCoords.x;
        var offsetY = pointer.clientY - el.firstCoords.y;
        var clientX = pointer.clientX;
        var clientY = pointer.clientY;

        binding.value({
          el: el,
          deltaX: deltaX,
          deltaY: deltaY,
          offsetX: offsetX,
          offsetY: offsetY,
          clientX: clientX,
          clientY: clientY
        });
        el.lastCoords = {
          x: pointer.clientX,
          y: pointer.clientY
        };
      }
    }
    u.addEventListeners(el, POINTER_START_EVENTS, onPointerStart);
    u.addEventListeners(document.documentElement, POINTER_END_EVENTS, onPointerEnd);
    u.addEventListeners(document.documentElement, POINTER_MOVE_EVENTS, onPointerMove);
  },
  unbind: function unbind(el) {
    u.removeEventListeners(el, POINTER_START_EVENTS);
    u.removeEventListeners(document.documentElement, POINTER_END_EVENTS);
    u.removeEventListeners(document.documentElement, POINTER_MOVE_EVENTS);
  }
};

var defaultOptions = {};

var VDragged = {
  install: function install(Vue, options) {
    options = index({}, defaultOptions, options);
    var major = Number(Vue.version.split('.')[0]);
    var minor = Number(Vue.version.split('.')[1]);
    if (major < 2 && minor < 1) {
      throw new Error('v-dragged supports vue version 2.1 and above. You are using Vue@' + Vue.version + '. Please upgrade to the latest version of Vue.');
    }
    // registration
    Vue.directive('dragged', directive);
  },

  directive: directive
};

return VDragged;

})));


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function sortableFactory() {
	"use strict";

	if (typeof window === "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		lastEl,
		lastCSS,
		lastParentCSS,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScroll = {},

		tapEvt,
		touchEvt,

		moved,

		/** @const */
		R_SPACE = /\s+/g,
		R_FLOAT = /left|right|inline/,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,
		setTimeout = win.setTimeout,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = false,
		passiveMode = false,

		supportDraggable = ('draggable' in document.createElement('div')),
		supportCssPointerEvents = (function (el) {
			// false when IE11
			if (!!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)) {
				return false;
			}
			el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,

		abs = Math.abs,
		min = Math.min,

		savedInputChecked = [],
		touchDragOverListeners = [],

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (rootEl && options.scroll) {
				var _this = rootEl[expando],
					el,
					rect,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					vx,
					vy,

					scrollOffsetX,
					scrollOffsetY
				;

				// Delect scrollEl
				if (scrollParentEl !== rootEl) {
					scrollEl = options.scroll;
					scrollParentEl = rootEl;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = rootEl;

						do {
							if ((scrollEl.offsetWidth < scrollEl.scrollWidth) ||
								(scrollEl.offsetHeight < scrollEl.scrollHeight)
							) {
								break;
							}
							/* jshint boss:true */
						} while (scrollEl = scrollEl.parentNode);
					}
				}

				if (scrollEl) {
					el = scrollEl;
					rect = scrollEl.getBoundingClientRect();
					vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
					vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
				}


				if (!(vx || vy)) {
					vx = (winWidth - x <= sens) - (x <= sens);
					vy = (winHeight - y <= sens) - (y <= sens);

					/* jshint expr:true */
					(vx || vy) && (el = win);
				}


				if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
					autoScroll.el = el;
					autoScroll.vx = vx;
					autoScroll.vy = vy;

					clearInterval(autoScroll.pid);

					if (el) {
						autoScroll.pid = setInterval(function () {
							scrollOffsetY = vy ? vy * speed : 0;
							scrollOffsetX = vx ? vx * speed : 0;

							if ('function' === typeof(scrollCustomFn)) {
								return scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt);
							}

							if (el === win) {
								win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
							} else {
								el.scrollTop += scrollOffsetY;
								el.scrollLeft += scrollOffsetX;
							}
						}, 24);
					}
				}
			}
		}, 30),

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				if (value === void 0 || value === true) {
					value = group.name;
				}

				if (typeof value === 'function') {
					return value;
				} else {
					return function (to, from) {
						var fromGroup = from.options.group.name;

						return pull
							? value
							: value && (value.join
								? value.indexOf(fromGroup) > -1
								: (fromGroup == value)
							);
					};
				}
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		}
	;

	// Detect support a passive mode
	try {
		window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
			get: function () {
				// `false`, because everything starts to work incorrectly and instead of d'n'd,
				// begins the page has scrolled.
				passiveMode = false;
				captureMode = {
					capture: false,
					passive: passiveMode
				};
			}
		}));
	} catch (err) {}

	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: Math.random(),
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0},
			supportPointer: Sortable.supportPointer !== false
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		_on(el, 'mousedown', this._onTapStart);
		_on(el, 'touchstart', this._onTapStart);
		options.supportPointer && _on(el, 'pointerdown', this._onTapStart);

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		touchDragOverListeners.push(this._onDragOver);

		// Restore sorting
		options.store && this.sort(options.store.get(this));
	}


	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_onTapStart: function (/** Event|TouchEvent */evt) {
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0]) || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button or enabled
			}

			// cancel dnd if original target is content editable
			if (originalTarget.isContentEditable) {
				return;
			}

			target = _closest(target, options.draggable, el);

			if (!target) {
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				tapEvt = evt;

				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'all';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				_on(ownerDocument, 'mouseup', _this._onDrop);
				_on(ownerDocument, 'touchend', _this._onDrop);
				_on(ownerDocument, 'touchcancel', _this._onDrop);
				_on(ownerDocument, 'selectstart', _this);
				options.supportPointer && _on(ownerDocument, 'pointercancel', _this._onDrop);

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchmove', _this._disableDelayedDrag);
					options.supportPointer && _on(ownerDocument, 'pointermove', _this._disableDelayedDrag);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}


			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._disableDelayedDrag);
			_off(ownerDocument, 'touchmove', this._disableDelayedDrag);
			_off(ownerDocument, 'pointermove', this._disableDelayedDrag);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (touch) {
				// Touch device support
				tapEvt = {
					target: dragEl,
					clientX: touch.clientX,
					clientY: touch.clientY
				};

				this._onDragStart(tapEvt, 'touch');
			}
			else if (!this.nativeDraggable) {
				this._onDragStart(tapEvt, true);
			}
			else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					_nextTick(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function () {
			if (rootEl && dragEl) {
				var options = this.options;

				// Apply effect
				_toggleClass(dragEl, options.ghostClass, true);
				_toggleClass(dragEl, options.dragClass, false);

				Sortable.active = this;

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function () {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY) {
					return;
				}

				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', 'none');
				}

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				var parent = target;
				var i = touchDragOverListeners.length;

				if (target && target.shadowRoot) {
					target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
					parent = target;
				}

				if (parent) {
					do {
						if (parent[expando]) {
							while (i--) {
								touchDragOverListeners[i]({
									clientX: touchEvt.clientX,
									clientY: touchEvt.clientY,
									target: target,
									rootEl: parent
								});
							}

							break;
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', '');
				}
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					dx = (touch.clientX - tapEvt.clientX) + fallbackOffset.x,
					dy = (touch.clientY - tapEvt.clientY) + fallbackOffset.y,
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}

					this._dragStarted();
				}

				// as well as creating the ghost element on the document body
				this._appendGhost();

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = dragEl.getBoundingClientRect(),
					css = _css(dragEl),
					options = this.options,
					ghostRect;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
				_css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

				// Fixing dimensions.
				ghostRect = ghostEl.getBoundingClientRect();
				_css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
				_css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/useFallback) {
			var _this = this;
			var dataTransfer = evt.dataTransfer;
			var options = _this.options;

			_this._offUpEvents();

			if (activeGroup.checkPull(_this, _this, dragEl, evt)) {
				cloneEl = _clone(dragEl);

				cloneEl.draggable = false;
				cloneEl.style['will-change'] = '';

				_css(cloneEl, 'display', 'none');
				_toggleClass(cloneEl, _this.options.chosenClass, false);

				// #1143: IFrame support workaround
				_this._cloneId = _nextTick(function () {
					rootEl.insertBefore(cloneEl, dragEl);
					_dispatchEvent(_this, rootEl, 'clone', dragEl);
				});
			}

			_toggleClass(dragEl, options.dragClass, true);

			if (useFallback) {
				if (useFallback === 'touch') {
					// Bind touch events
					_on(document, 'touchmove', _this._onTouchMove);
					_on(document, 'touchend', _this._onDrop);
					_on(document, 'touchcancel', _this._onDrop);

					if (options.supportPointer) {
						_on(document, 'pointermove', _this._onTouchMove);
						_on(document, 'pointerup', _this._onDrop);
					}
				} else {
					// Old brwoser
					_on(document, 'mousemove', _this._onTouchMove);
					_on(document, 'mouseup', _this._onDrop);
				}

				_this._loopId = setInterval(_this._emulateDragOver, 50);
			}
			else {
				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(_this, dataTransfer, dragEl);
				}

				_on(document, 'drop', _this);

				// #1143: Бывает элемент с IFrame внутри блокирует `drop`,
				// поэтому если вызвался `mouseover`, значит надо отменять весь d'n'd.
				// Breaking Chrome 62+
				// _on(document, 'mouseover', _this);

				_this._dragStartId = _nextTick(_this._dragStarted);
			}
		},

		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				isMovingBetweenSortable = false,
				canSort = options.sort;

			if (evt.preventDefault !== void 0) {
				evt.preventDefault();
				!options.dragoverBubble && evt.stopPropagation();
			}

			if (dragEl.animated) {
				return;
			}

			moved = true;

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(activeSortable.lastPullMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				) &&
				(evt.rootEl === void 0 || evt.rootEl === this.el) // touch fallback
			) {
				// Smart auto-scrolling
				_autoScroll(evt, options, this.el);

				if (_silent) {
					return;
				}

				target = _closest(evt.target, options.draggable, el);
				dragRect = dragEl.getBoundingClientRect();

				if (putSortable !== this) {
					putSortable = this;
					isMovingBetweenSortable = true;
				}

				if (revert) {
					_cloneHide(activeSortable, true);
					parentEl = rootEl; // actualization

					if (cloneEl || nextEl) {
						rootEl.insertBefore(dragEl, cloneEl || nextEl);
					}
					else if (!canSort) {
						rootEl.appendChild(dragEl);
					}

					return;
				}


				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					(el === evt.target) && (_ghostIsLast(el, evt))
				) {
					//assign target only if condition is true
					if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
						target = el.lastElementChild;
					}

					if (target) {
						if (target.animated) {
							return;
						}

						targetRect = target.getBoundingClientRect();
					}

					_cloneHide(activeSortable, isOwner);

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt) !== false) {
						if (!dragEl.contains(el)) {
							el.appendChild(dragEl);
							parentEl = el; // actualization
						}

						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
					}
				}
				else if (target && !target.animated && target !== dragEl && (target.parentNode[expando] !== void 0)) {
					if (lastEl !== target) {
						lastEl = target;
						lastCSS = _css(target);
						lastParentCSS = _css(target.parentNode);
					}

					targetRect = target.getBoundingClientRect();

					var width = targetRect.right - targetRect.left,
						height = targetRect.bottom - targetRect.top,
						floating = R_FLOAT.test(lastCSS.cssFloat + lastCSS.display)
							|| (lastParentCSS.display == 'flex' && lastParentCSS['flex-direction'].indexOf('row') === 0),
						isWide = (target.offsetWidth > dragEl.offsetWidth),
						isLong = (target.offsetHeight > dragEl.offsetHeight),
						halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
						nextSibling = target.nextElementSibling,
						after = false
					;

					if (floating) {
						var elTop = dragEl.offsetTop,
							tgTop = target.offsetTop;

						if (elTop === tgTop) {
							after = (target.previousElementSibling === dragEl) && !isWide || halfway && isWide;
						}
						else if (target.previousElementSibling === dragEl || dragEl.previousElementSibling === target) {
							after = (evt.clientY - targetRect.top) / height > 0.5;
						} else {
							after = tgTop > elTop;
						}
						} else if (!isMovingBetweenSortable) {
						after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
					}

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						_cloneHide(activeSortable, isOwner);

						if (!dragEl.contains(el)) {
							if (after && !nextSibling) {
								el.appendChild(dragEl);
							} else {
								target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
							}
						}

						parentEl = dragEl.parentNode; // actualization

						this._animate(dragRect, dragEl);
						this._animate(targetRect, target);
					}
				}
			}
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = target.getBoundingClientRect();

				if (prevRect.nodeType === 1) {
					prevRect = prevRect.getBoundingClientRect();
				}

				_css(target, 'transition', 'none');
				_css(target, 'transform', 'translate3d('
					+ (prevRect.left - currentRect.left) + 'px,'
					+ (prevRect.top - currentRect.top) + 'px,0)'
				);

				target.offsetWidth; // repaint

				_css(target, 'transition', 'all ' + ms + 'ms');
				_css(target, 'transform', 'translate3d(0,0,0)');

				clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(ownerDocument, 'pointercancel', this._onDrop);
			_off(ownerDocument, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;

			clearInterval(this._loopId);
			clearInterval(autoScroll.pid);
			clearTimeout(this._dragStartTimer);

			_cancelNextTick(this._cloneId);
			_cancelNextTick(this._dragStartId);

			// Unbind events
			_off(document, 'mouseover', this);
			_off(document, 'mousemove', this._onTouchMove);

			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || Sortable.active.lastPullMode !== 'clone') {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
							_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
						}
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex);
								_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex);

						// Save sorting
						this.save();
					}
				}

			}

			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =

			tapEvt =
			touchEvt =

			moved =
			newIndex =

			lastEl =
			lastCSS =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});
			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragover':
				case 'dragenter':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'mouseover':
					this._onDrop(evt);
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}

			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);

			this._onDrop();

			this.el = el = null;
		}
	};


	function _cloneHide(sortable, state) {
		if (sortable.lastPullMode !== 'clone') {
			state = true;
		}

		if (cloneEl && (cloneEl.state !== state)) {
			_css(cloneEl, 'display', state ? 'none' : '');

			if (!state) {
				if (cloneEl.state) {
					if (sortable.options.group.revertClone) {
						rootEl.insertBefore(cloneEl, nextEl);
						sortable._animate(dragEl, cloneEl);
					} else {
						rootEl.insertBefore(cloneEl, dragEl);
					}
				}
			}

			cloneEl.state = state;
		}
	}


	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
		if (el) {
			ctx = ctx || document;

			do {
				if ((selector === '>*' && el.parentNode === ctx) || _matches(el, selector)) {
					return el;
				}
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		var parent = el.host;

		return (parent && parent.nodeType) ? parent : el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style)) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex) {
		sortable = (sortable || rootEl[expando]);

		var evt = document.createEvent('Event'),
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);

		evt.initEvent(name, true, true);

		evt.to = toEl || rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		rootEl.dispatchEvent(evt);

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;

		evt = document.createEvent('Event');
		evt.initEvent('move', true, true);

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || toEl.getBoundingClientRect();
		evt.willInsertAfter = willInsertAfter;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}


	function _disableDraggable(el) {
		el.draggable = false;
	}


	function _unsilent() {
		_silent = false;
	}


	/** @returns {HTMLElement|false} */
	function _ghostIsLast(el, evt) {
		var lastEl = el.lastElementChild,
			rect = lastEl.getBoundingClientRect();

		// 5 — min delta
		// abs — нельзя добавлять, а то глюки при наведении сверху
		return (evt.clientY - (rect.top + rect.height) > 5) ||
			(evt.clientX - (rect.left + rect.width) > 5);
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && (selector === '>*' || _matches(el, selector))) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			selector = selector.split('.');

			var tag = selector.shift().toUpperCase(),
				re = new RegExp('\\s(' + selector.join('|') + ')(?=\\s)', 'g');

			return (
				(tag === '' || el.nodeName.toUpperCase() == tag) &&
				(!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length)
			);
		}

		return false;
	}

	function _throttle(callback, ms) {
		var args, _this;

		return function () {
			if (args === void 0) {
				args = arguments;
				_this = this;

				setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					args = void 0;
				}, ms);
			}
		};
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		if (Polymer && Polymer.dom) {
			return Polymer.dom(el).cloneNode(true);
		}
		else if ($) {
			return $(el).clone(true)[0];
		}
		else {
			return el.cloneNode(true);
		}
	}

	function _saveInputCheckedState(root) {
		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	function _nextTick(fn) {
		return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
		return clearTimeout(id);
	}

	// Fixed #973:
	_on(document, 'touchmove', function (evt) {
		if (Sortable.active) {
			evt.preventDefault();
		}
	});

	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index,
		nextTick: _nextTick,
		cancelNextTick: _cancelNextTick
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.7.0';
	return Sortable;
});


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=kute.js.map