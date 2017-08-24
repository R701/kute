/*!
 *     kute v0.0.1
 *     https://github.com/R701/kute
 * 
 *     Copyright (c) 2017 zhanziyang & thisisandy
 *     Released under the MIT license
 *   
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Kute"] = factory();
	else
		root["Kute"] = factory();
})(this, (function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ ((function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Button_Button_vue__ = __webpack_require__(2);


module.exports = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var prefix = options.prefix || 'k';
    Vue.component(prefix + '-button', __WEBPACK_IMPORTED_MODULE_0__components_Button_Button_vue__["a" /* default */]);
  },


  Button: __WEBPACK_IMPORTED_MODULE_0__components_Button_Button_vue__["a" /* default */]
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ })),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/components/Button/_props.js
/* harmony default export */ var _props = ({
  link: Boolean,
  routerLink: Boolean,
  nuxt: Boolean,
  href: {
    type: String,
    default: ''
  },
  outline: Boolean,
  block: Boolean,
  disabled: Boolean,
  loading: Boolean,
  disableWhileLoading: {
    type: Boolean,
    default: true
  },
  icon: String,
  iconClassPrefix: {
    type: String,
    default: 'iconfont icon-'
  },
  state: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'default'
  }
});
// CONCATENATED MODULE: ./src/components/Button/_events.js
/* harmony default export */ var _events = ({
  CLICK: 'click',
  FOCUS: 'focus',
  BLUR: 'blur'
});
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




/* harmony default export */ var Button = ({
  props: _props,

  inheritAttrs: false,

  computed: {
    root: function root() {
      if (this.routerLink) {
        return 'nuxt-link';
      } else if (this.link) {
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
      this.$emit(_events.CLICK, evt);
    },
    onFocus: function onFocus(evt) {
      this.$emit(_events.FOCUS, evt);
    },
    onBlur: function onBlur(evt) {
      this.$emit(_events.BLUR, evt);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-61c76d52","hasScoped":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Button/Button.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c(_vm.root, {
    tag: "component",
    class: ['button', (_vm.state + "-btn"), _vm.size, {
      'link-btn': _vm.routerLink || _vm.link,
      'no-outline': !_vm.outline,
      'btn-block': _vm.block,
      'no-text': _vm.emptySlot
    }],
    attrs: {
      "to": _vm.href,
      "href": _vm.href,
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.onClick,
      "focus": _vm.onFocus,
      "blur": _vm.onBlur
    }
  }, [(_vm.loading) ? _c('i', {
    staticClass: "btn-spinner"
  }) : _vm._e(), _vm._v(" "), (_vm.icon) ? _c('i', {
    class: [("" + _vm.iconClassPrefix + _vm.icon), {
      'btn--faded': _vm.loading
    }]
  }) : _vm._e(), _vm._v(" "), _c('span', {
    class: ['btn-text', _vm.size, {
      'btn--faded': _vm.loading
    }]
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Button_Button = (esExports);
// CONCATENATED MODULE: ./src/components/Button/Button.vue
function injectStyle (ssrContext) {
  __webpack_require__(3)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61c76d52"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Button,
  Button_Button,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Button_Button = __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ ((function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
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


/***/ }))
/******/ ]);
}));