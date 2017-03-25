(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("videl", [], factory);
	else if(typeof exports === 'object')
		exports["videl"] = factory();
	else
		root["videl"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Container_Container__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Container_Container___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Container_Container__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Columns_Columns__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Columns_Columns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Columns_Columns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Columns_Column__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Columns_Column___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Columns_Column__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tile_Tile__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tile_Tile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Tile_Tile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Box_Box__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Box_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Box_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button_Button__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Button_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Content_Content__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Content_Content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Content_Content__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Delete_Delete__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Delete_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Delete_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Form_Field__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Form_Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Form_Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Form_FieldLabel__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Form_FieldLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Form_FieldLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Form_FieldBody__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Form_FieldBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Form_FieldBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Form_Label__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Form_Label___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Form_Label__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Form_Control__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Form_Control___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__Form_Control__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Form_Input__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Form_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__Form_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Form_Textarea__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Form_Textarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__Form_Textarea__);
















/* harmony default export */ exports["a"] = {
  Container: __WEBPACK_IMPORTED_MODULE_0__Container_Container___default.a,
  Columns: __WEBPACK_IMPORTED_MODULE_1__Columns_Columns___default.a,
  Column: __WEBPACK_IMPORTED_MODULE_2__Columns_Column___default.a,
  Tile: __WEBPACK_IMPORTED_MODULE_3__Tile_Tile___default.a,
  Box: __WEBPACK_IMPORTED_MODULE_4__Box_Box___default.a,
  Button: __WEBPACK_IMPORTED_MODULE_5__Button_Button___default.a,
  Content: __WEBPACK_IMPORTED_MODULE_6__Content_Content___default.a,
  Delete: __WEBPACK_IMPORTED_MODULE_7__Delete_Delete___default.a,
  Field: __WEBPACK_IMPORTED_MODULE_8__Form_Field___default.a,
  FieldLabel: __WEBPACK_IMPORTED_MODULE_9__Form_FieldLabel___default.a,
  FieldBody: __WEBPACK_IMPORTED_MODULE_10__Form_FieldBody___default.a,
  Label: __WEBPACK_IMPORTED_MODULE_11__Form_Label___default.a,
  Control: __WEBPACK_IMPORTED_MODULE_12__Form_Control___default.a,
  Input: __WEBPACK_IMPORTED_MODULE_13__Form_Input___default.a,
  Textarea: __WEBPACK_IMPORTED_MODULE_14__Form_Textarea___default.a
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function camelCase(string) {
  return string.replace(/(\-[a-z0-9])/g, function ($1) {
    return $1.toUpperCase().replace('-', '');
  });
}

/* unused harmony default export */ var _unused_webpack_default_export = camelCase;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function load(cb) {
  if (document.readyState === 'complete') {
    return setTimeout(cb, 0);
  }

  if (document.readyState === 'interactive') {
    return setTimeout(() => load(cb), 150);
  }

  document.addEventListener('DOMContentLoaded', cb);
}

/* harmony default export */ exports["a"] = load;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports
exports.i(__webpack_require__(18), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  data() {
    return {};
  },

  props: {
    'is-white': Boolean,
    'is-light': Boolean,
    'is-dark': Boolean,
    'is-black': Boolean,
    'is-link': Boolean,
    'is-primary': Boolean,
    'is-info': Boolean,
    'is-success': Boolean,
    'is-warning': Boolean,
    'is-danger': Boolean,
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean,
    'is-outlined': Boolean,
    'is-inverted': Boolean,
    'is-hovered': Boolean,
    'is-focused': Boolean,
    'is-active': Boolean,
    'is-loading': Boolean,
    'is-disabled': Boolean,
    'el': {
      type: String,
      default: 'a'
    }
  },

  computed: {
    classes() {
      return {
        'is-white': this.isWhite,
        'is-light': this.isLight,
        'is-dark': this.isDark,
        'is-black': this.isBlock,
        'is-link': this.isLink,
        'is-primary': this.isPrimary,
        'is-info': this.isInfo,
        'is-success': this.isSuccess,
        'is-warning': this.isWarning,
        'is-danger': this.isDanger,
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge,
        'is-outlined': this.isOutlined,
        'is-inverted': this.isInverted,
        'is-hovered': this.isHovered,
        'is-focused': this.isFocused,
        'is-active': this.isActive,
        'is-loading': this.isLoading,
        'is-disabled': this.isDisabled
      };
    }
  }
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

let sizeWords = ['three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter'];
let sizePrefixes = ['is', 'is-offset'];
let sizeSuffixes = ['mobile', 'tablet', 'desktop'];
let sizeNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let properties = {
  'is-narrow': Boolean,
  'is-narrow-mobile': Boolean,
  'is-narrow-tablet': Boolean,
  'is-narrow-desktop': Boolean
};
let sizes = [];
let sizesCamel = [];

// Word sizes
for (let word of sizeWords) {
  generateSizes(word);
}

// Num sizes
for (let num of sizeNums) {
  generateSizes(num);
}

function generateSizes(word) {
  for (let prefix of sizePrefixes) {
    let size = prefix + '-' + word;

    sizes.push(size);
    sizesCamel.push(camelCase(size));

    Object.assign(properties, {
      [size]: Boolean
    });

    // Suffixes
    for (let suffix of sizeSuffixes) {
      let sizeWithSuffix = size + '-' + suffix;

      sizes.push(sizeWithSuffix);
      sizesCamel.push(camelCase(sizeWithSuffix));

      Object.assign(properties, {
        [sizeWithSuffix]: Boolean
      });
    }
  }
}

function camelCase(string) {
  return string.replace(/(\-[a-z0-9])/g, function ($1) {
    return $1.toUpperCase().replace('-', '');
  });
}

/* harmony default export */ exports["default"] = {
  data() {
    return {
      sizingClasses: {}
    };
  },

  created() {
    for (let [index, word] of sizes.entries()) {
      Object.assign(this.sizingClasses, {
        [sizes[index]]: this[sizesCamel[index]]
      });
    }
  },

  computed: {
    classes() {
      let classes = {
        'is-narrow': this.isNarrow,
        'is-narrow-mobile': this.isNarrowMobile,
        'is-narrow-tablet': this.isNarrowTablet,
        'is-narrow-desktop': this.isNarrowDesktop
      };

      return Object.assign(this.sizingClasses, classes);
    }
  },

  props: properties
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    'is-mobile': Boolean,
    'is-desktop': Boolean,
    'is-multiline': Boolean,
    'is-gapless': Boolean
  },

  computed: {
    classes() {
      return {
        'is-mobile': this.isMobile,
        'is-desktop': this.isDesktop,
        'is-multiline': this.isMultiline,
        'is-gapless': this.isGapless
      };
    }
  }
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    'is-fluid': Boolean
  },

  computed: {
    classes() {
      return {
        'is-fluid': this.isFluid
      };
    }
  }
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean
  },

  computed: {
    classes() {
      return {
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge
      };
    }
  }
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean,
    'el': {
      type: String,
      default: 'a'
    }
  },

  computed: {
    classes() {
      return {
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge
      };
    }
  }
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    'has-icon': Boolean,
    'has-icon-right': Boolean,
    'is-loading': Boolean,
    'is-expanded': Boolean
  },

  computed: {
    classes() {
      return {
        'has-icon': this.hasIcon,
        'has-icon-right': this.hasIconRight,
        'is-loading': this.isLoading,
        'is-expanded': this.isExpanded
      };
    }
  }
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    'has-addons': Boolean,
    'has-addons-centered': Boolean,
    'has-addons-right': Boolean,
    'is-grouped': Boolean,
    'is-horizontal': Boolean
  },

  computed: {
    classes() {
      return {
        'has-addons': this.hasAddons,
        'has-addons-centered': this.hasAddonsCentered,
        'has-addons-right': this.hasAddonsRight,
        'is-grouped': this.isGrouped,
        'is-horizontal': this.isHorizontal
      };
    }
  }
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    'is-normal': Boolean,
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean
  },

  computed: {
    classes() {
      return {
        'is-normal': this.isNormal,
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge
      };
    }
  }
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    'is-white': Boolean,
    'is-light': Boolean,
    'is-dark': Boolean,
    'is-black': Boolean,
    'is-link': Boolean,
    'is-primary': Boolean,
    'is-info': Boolean,
    'is-success': Boolean,
    'is-warning': Boolean,
    'is-danger': Boolean,
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean,
    'is-hovered': Boolean,
    'is-focused': Boolean
  },

  computed: {
    classes() {
      return {
        'is-white': this.isWhite,
        'is-light': this.isLight,
        'is-dark': this.isDark,
        'is-black': this.isBlock,
        'is-link': this.isLink,
        'is-primary': this.isPrimary,
        'is-info': this.isInfo,
        'is-success': this.isSuccess,
        'is-warning': this.isWarning,
        'is-danger': this.isDanger,
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge,
        'is-hovered': this.isHovered,
        'is-focused': this.isFocused
      };
    }
  }
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    'is-white': Boolean,
    'is-light': Boolean,
    'is-dark': Boolean,
    'is-black': Boolean,
    'is-link': Boolean,
    'is-primary': Boolean,
    'is-info': Boolean,
    'is-success': Boolean,
    'is-warning': Boolean,
    'is-danger': Boolean,
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean,
    'is-hovered': Boolean,
    'is-focused': Boolean,
    'value': {}
  },

  computed: {
    classes() {
      return {
        'is-white': this.isWhite,
        'is-light': this.isLight,
        'is-dark': this.isDark,
        'is-black': this.isBlock,
        'is-link': this.isLink,
        'is-primary': this.isPrimary,
        'is-info': this.isInfo,
        'is-success': this.isSuccess,
        'is-warning': this.isWarning,
        'is-danger': this.isDanger,
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge,
        'is-hovered': this.isHovered,
        'is-focused': this.isFocused
      };
    }
  }
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

let sizePrefixes = ['is'];
let sizeNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let properties = {
  'is-ancestor': Boolean,
  'is-parent': Boolean,
  'is-child': Boolean,
  'is-vertical': Boolean
};
let sizes = [];
let sizesCamel = [];

// Sizes
for (let num of sizeNums) {
  generateSizes(num);
}

function generateSizes(word) {
  for (let prefix of sizePrefixes) {
    let size = prefix + '-' + word;

    sizes.push(size);
    sizesCamel.push(camelCase(size));

    Object.assign(properties, {
      [size]: Boolean
    });
  }
}

function camelCase(string) {
  return string.replace(/(\-[a-z0-9])/g, function ($1) {
    return $1.toUpperCase().replace('-', '');
  });
}

/* harmony default export */ exports["default"] = {
  data() {
    return {
      sizingClasses: {}
    };
  },

  created() {
    for (let [index, word] of sizes.entries()) {
      Object.assign(this.sizingClasses, {
        [sizes[index]]: this[sizesCamel[index]]
      });
    }
  },

  computed: {
    classes() {
      let classes = {
        'is-ancestor': this.isAncestor,
        'is-parent': this.isParent,
        'is-child': this.isChild,
        'is-vertical': this.isVertical
      };

      return Object.assign(this.sizingClasses, classes);
    }
  },

  props: properties
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*! bulma.io v0.4.0 | MIT License | github.com/jgthms/bulma */\n@charset \"utf-8\"\n\n@import \"sass/utilities/_all\"\n@import \"sass/base/_all\"\n@import \"sass/elements/_all\"\n@import \"sass/components/_all\"\n@import \"sass/grid/_all\"\n@import \"sass/layout/_all\"\n", ""]);

// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(44)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(47)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(45)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(43)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(46)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(42)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(34)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(37)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* template */
var __vue_template__ = __webpack_require__(36)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(48)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(35)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* template */
var __vue_template__ = __webpack_require__(41)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(40)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(39)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    staticClass: "input",
    class: _vm.classes,
    attrs: {
      "type": "text"
    }
  })
},staticRenderFns: []}

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-body"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "column",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tile",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('textarea', {
    staticClass: "textarea",
    class: _vm.classes
  }, [_vm._v(_vm._s(_vm.value))])
},staticRenderFns: []}

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "label"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.el == 'button') ? _c('button', {
    staticClass: "delete",
    class: _vm.classes
  }) : _c('a', {
    staticClass: "delete",
    class: _vm.classes
  })
},staticRenderFns: []}

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "columns",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.el == 'button') ? _c('button', {
    staticClass: "button",
    class: _vm.classes
  }, [_vm._t("default")], 2) : _c('a', {
    staticClass: "button",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label",
    class: _vm.classes
  }, [_c('vd-label', [_vm._t("default")], 2)], 1)
},staticRenderFns: []}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_load__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_camel_case__ = __webpack_require__(2);
__webpack_require__(4);





const defaults = {
  componentPrefix: 'Vd'
};

function plugin(Vue, options) {
  options = Object.assign(defaults, options || {});

  Object.keys(__WEBPACK_IMPORTED_MODULE_0__components_components__["a" /* default */]).forEach(name => {
    Vue.component(`${options.componentPrefix}${name}`, __WEBPACK_IMPORTED_MODULE_0__components_components__["a" /* default */][name]);
  });

  Vue.prototype.$videl = {
    load: __WEBPACK_IMPORTED_MODULE_1__utilities_load__["a" /* default */]
  };
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

/* harmony default export */ exports["default"] = plugin;

/***/ }
/******/ ])
});
;