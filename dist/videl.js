var Videl =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
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

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_camel_case__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Container_Container__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Container_Container___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Container_Container__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Columns_Columns__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Columns_Columns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Columns_Columns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Columns_Column__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Columns_Column___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Columns_Column__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Tile_Tile__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Tile_Tile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Tile_Tile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Box_Box__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Box_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Box_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Button_Button__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Button_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_Button_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Content_Content__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Content_Content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Content_Content__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Delete_Delete__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Delete_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_Delete_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Form_Field__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Form_Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_Form_Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Form_FieldLabel__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Form_FieldLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_Form_FieldLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Form_FieldBody__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Form_FieldBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_Form_FieldBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Form_Label__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Form_Label___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_Form_Label__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Form_Control__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Form_Control___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_Form_Control__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Form_Input__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Form_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_Form_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Form_Textarea__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Form_Textarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_Form_Textarea__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return __WEBPACK_IMPORTED_MODULE_1__components_Container_Container___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Columns", function() { return __WEBPACK_IMPORTED_MODULE_2__components_Columns_Columns___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return __WEBPACK_IMPORTED_MODULE_3__components_Columns_Column___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return __WEBPACK_IMPORTED_MODULE_4__components_Tile_Tile___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return __WEBPACK_IMPORTED_MODULE_5__components_Box_Box___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_6__components_Button_Button___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return __WEBPACK_IMPORTED_MODULE_7__components_Content_Content___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return __WEBPACK_IMPORTED_MODULE_8__components_Delete_Delete___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return __WEBPACK_IMPORTED_MODULE_9__components_Form_Field___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "FieldLabel", function() { return __WEBPACK_IMPORTED_MODULE_10__components_Form_FieldLabel___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "FieldBody", function() { return __WEBPACK_IMPORTED_MODULE_11__components_Form_FieldBody___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return __WEBPACK_IMPORTED_MODULE_12__components_Form_Label___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return __WEBPACK_IMPORTED_MODULE_13__components_Form_Control___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_14__components_Form_Input___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return __WEBPACK_IMPORTED_MODULE_15__components_Form_Textarea___default.a; });


















var defaults = {
  componentPrefix: 'Vd'
};

var components = {
  Container: __WEBPACK_IMPORTED_MODULE_1__components_Container_Container___default.a,
  Columns: __WEBPACK_IMPORTED_MODULE_2__components_Columns_Columns___default.a,
  Column: __WEBPACK_IMPORTED_MODULE_3__components_Columns_Column___default.a,
  Tile: __WEBPACK_IMPORTED_MODULE_4__components_Tile_Tile___default.a,
  Box: __WEBPACK_IMPORTED_MODULE_5__components_Box_Box___default.a,
  Button: __WEBPACK_IMPORTED_MODULE_6__components_Button_Button___default.a,
  Content: __WEBPACK_IMPORTED_MODULE_7__components_Content_Content___default.a,
  Delete: __WEBPACK_IMPORTED_MODULE_8__components_Delete_Delete___default.a,
  Field: __WEBPACK_IMPORTED_MODULE_9__components_Form_Field___default.a,
  FieldLabel: __WEBPACK_IMPORTED_MODULE_10__components_Form_FieldLabel___default.a,
  FieldBody: __WEBPACK_IMPORTED_MODULE_11__components_Form_FieldBody___default.a,
  Label: __WEBPACK_IMPORTED_MODULE_12__components_Form_Label___default.a,
  Control: __WEBPACK_IMPORTED_MODULE_13__components_Form_Control___default.a,
  Input: __WEBPACK_IMPORTED_MODULE_14__components_Form_Input___default.a,
  Textarea: __WEBPACK_IMPORTED_MODULE_15__components_Form_Textarea___default.a
};

var Videl = {
  Container: __WEBPACK_IMPORTED_MODULE_1__components_Container_Container___default.a,
  Columns: __WEBPACK_IMPORTED_MODULE_2__components_Columns_Columns___default.a,
  Column: __WEBPACK_IMPORTED_MODULE_3__components_Columns_Column___default.a,
  Tile: __WEBPACK_IMPORTED_MODULE_4__components_Tile_Tile___default.a,
  Box: __WEBPACK_IMPORTED_MODULE_5__components_Box_Box___default.a,
  Button: __WEBPACK_IMPORTED_MODULE_6__components_Button_Button___default.a,
  Content: __WEBPACK_IMPORTED_MODULE_7__components_Content_Content___default.a,
  Delete: __WEBPACK_IMPORTED_MODULE_8__components_Delete_Delete___default.a,
  Field: __WEBPACK_IMPORTED_MODULE_9__components_Form_Field___default.a,
  FieldLabel: __WEBPACK_IMPORTED_MODULE_10__components_Form_FieldLabel___default.a,
  FieldBody: __WEBPACK_IMPORTED_MODULE_11__components_Form_FieldBody___default.a,
  Label: __WEBPACK_IMPORTED_MODULE_12__components_Form_Label___default.a,
  Control: __WEBPACK_IMPORTED_MODULE_13__components_Form_Control___default.a,
  Input: __WEBPACK_IMPORTED_MODULE_14__components_Form_Input___default.a,
  Textarea: __WEBPACK_IMPORTED_MODULE_15__components_Form_Textarea___default.a,

  install: function install(Vue) {
    Vue.component('vd-button', __WEBPACK_IMPORTED_MODULE_6__components_Button_Button___default.a);
  }
};

// Automatically install Videl if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Videl);
}

/* harmony default export */ __webpack_exports__["default"] = (Videl);

















/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
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
    classes: function classes() {
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
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//

var sizeWords = ['three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter'];
var sizePrefixes = ['is', 'is-offset'];
var sizeSuffixes = ['mobile', 'tablet', 'desktop'];
var sizeNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var properties = {
  'is-narrow': Boolean,
  'is-narrow-mobile': Boolean,
  'is-narrow-tablet': Boolean,
  'is-narrow-desktop': Boolean
};
var sizes = [];
var sizesCamel = [];

// Word sizes
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sizeWords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var word = _step.value;

    generateSizes(word);
  }

  // Num sizes
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = sizeNums[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var num = _step2.value;

    generateSizes(num);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

function generateSizes(word) {
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = sizePrefixes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var prefix = _step3.value;

      var size = prefix + '-' + word;

      sizes.push(size);
      sizesCamel.push(camelCase(size));

      Object.assign(properties, _defineProperty({}, size, Boolean));

      // Suffixes
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = sizeSuffixes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var suffix = _step4.value;

          var sizeWithSuffix = size + '-' + suffix;

          sizes.push(sizeWithSuffix);
          sizesCamel.push(camelCase(sizeWithSuffix));

          Object.assign(properties, _defineProperty({}, sizeWithSuffix, Boolean));
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

function camelCase(string) {
  return string.replace(/(\-[a-z0-9])/g, function ($1) {
    return $1.toUpperCase().replace('-', '');
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      sizingClasses: {}
    };
  },
  created: function created() {
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = sizes.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _ref = _step5.value;

        var _ref2 = _slicedToArray(_ref, 2);

        var index = _ref2[0];
        var _word = _ref2[1];

        Object.assign(this.sizingClasses, _defineProperty({}, sizes[index], this[sizesCamel[index]]));
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  },


  computed: {
    classes: function classes() {
      var classes = {
        'is-narrow': this.isNarrow,
        'is-narrow-mobile': this.isNarrowMobile,
        'is-narrow-tablet': this.isNarrowTablet,
        'is-narrow-desktop': this.isNarrowDesktop
      };

      return Object.assign(this.sizingClasses, classes);
    }
  },

  props: properties
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'is-mobile': Boolean,
    'is-desktop': Boolean,
    'is-multiline': Boolean,
    'is-gapless': Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'is-mobile': this.isMobile,
        'is-desktop': this.isDesktop,
        'is-multiline': this.isMultiline,
        'is-gapless': this.isGapless
      };
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'is-fluid': Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'is-fluid': this.isFluid
      };
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge
      };
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
    classes: function classes() {
      return {
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge
      };
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'has-icon': Boolean,
    'has-icon-right': Boolean,
    'is-loading': Boolean,
    'is-expanded': Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'has-icon': this.hasIcon,
        'has-icon-right': this.hasIconRight,
        'is-loading': this.isLoading,
        'is-expanded': this.isExpanded
      };
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'has-addons': Boolean,
    'has-addons-centered': Boolean,
    'has-addons-right': Boolean,
    'is-grouped': Boolean,
    'is-horizontal': Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'has-addons': this.hasAddons,
        'has-addons-centered': this.hasAddonsCentered,
        'has-addons-right': this.hasAddonsRight,
        'is-grouped': this.isGrouped,
        'is-horizontal': this.isHorizontal
      };
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'is-normal': Boolean,
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'is-normal': this.isNormal,
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge
      };
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
    classes: function classes() {
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
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
    classes: function classes() {
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
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//

var sizePrefixes = ['is'];
var sizeNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var properties = {
  'is-ancestor': Boolean,
  'is-parent': Boolean,
  'is-child': Boolean,
  'is-vertical': Boolean
};
var sizes = [];
var sizesCamel = [];

// Sizes
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sizeNums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var num = _step.value;

    generateSizes(num);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function generateSizes(word) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = sizePrefixes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var prefix = _step2.value;

      var size = prefix + '-' + word;

      sizes.push(size);
      sizesCamel.push(camelCase(size));

      Object.assign(properties, _defineProperty({}, size, Boolean));
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function camelCase(string) {
  return string.replace(/(\-[a-z0-9])/g, function ($1) {
    return $1.toUpperCase().replace('-', '');
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      sizingClasses: {}
    };
  },
  created: function created() {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = sizes.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _ref = _step3.value;

        var _ref2 = _slicedToArray(_ref, 2);

        var index = _ref2[0];
        var word = _ref2[1];

        Object.assign(this.sizingClasses, _defineProperty({}, sizes[index], this[sizesCamel[index]]));
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  },


  computed: {
    classes: function classes() {
      var classes = {
        'is-ancestor': this.isAncestor,
        'is-parent': this.isParent,
        'is-child': this.isChild,
        'is-vertical': this.isVertical
      };

      return Object.assign(this.sizingClasses, classes);
    }
  },

  props: properties
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function camelCase(string) {
  return string.replace(/(\-[a-z0-9])/g, function ($1) {
    return $1.toUpperCase().replace('-', '');
  });
}

/* unused harmony default export */ var _unused_webpack_default_export = (camelCase);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Box/Box.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Box.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46da6d5e", Component.options)
  } else {
    hotAPI.reload("data-v-46da6d5e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Button/Button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4eb378f4", Component.options)
  } else {
    hotAPI.reload("data-v-4eb378f4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Columns/Column.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Column.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08de78c1", Component.options)
  } else {
    hotAPI.reload("data-v-08de78c1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Columns/Columns.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Columns.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-169c4082", Component.options)
  } else {
    hotAPI.reload("data-v-169c4082", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Container/Container.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Container.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65834dca", Component.options)
  } else {
    hotAPI.reload("data-v-65834dca", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Content/Content.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Content.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f89c1ba", Component.options)
  } else {
    hotAPI.reload("data-v-0f89c1ba", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Delete/Delete.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Delete.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d20c966", Component.options)
  } else {
    hotAPI.reload("data-v-0d20c966", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Form/Control.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Control.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eaf345ea", Component.options)
  } else {
    hotAPI.reload("data-v-eaf345ea", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(32),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Form/Field.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Field.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02126fa8", Component.options)
  } else {
    hotAPI.reload("data-v-02126fa8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Form/FieldBody.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FieldBody.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dfc646a", Component.options)
  } else {
    hotAPI.reload("data-v-5dfc646a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Form/FieldLabel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FieldLabel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1570b748", Component.options)
  } else {
    hotAPI.reload("data-v-1570b748", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Form/Input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c673e78", Component.options)
  } else {
    hotAPI.reload("data-v-1c673e78", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(45),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Form/Label.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Label.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-db207ebc", Component.options)
  } else {
    hotAPI.reload("data-v-db207ebc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Form/Textarea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Textarea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b091808", Component.options)
  } else {
    hotAPI.reload("data-v-9b091808", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/artur/Code/videl/src/components/Tile/Tile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77321bc6", Component.options)
  } else {
    hotAPI.reload("data-v-77321bc6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-02126fa8", module.exports)
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "column",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-08de78c1", module.exports)
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.el == 'button') ? _c('button', {
    staticClass: "delete",
    class: _vm.classes
  }) : _c('a', {
    staticClass: "delete",
    class: _vm.classes
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d20c966", module.exports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0f89c1ba", module.exports)
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label",
    class: _vm.classes
  }, [_c('vd-label', [_vm._t("default")], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1570b748", module.exports)
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "columns",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-169c4082", module.exports)
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    staticClass: "input",
    class: _vm.classes,
    attrs: {
      "type": "text"
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c673e78", module.exports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46da6d5e", module.exports)
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.el == 'button') ? _c('button', {
    staticClass: "button",
    class: _vm.classes
  }, [_vm._t("default")], 2) : _c('a', {
    staticClass: "button",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4eb378f4", module.exports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-body"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5dfc646a", module.exports)
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-65834dca", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tile",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-77321bc6", module.exports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('textarea', {
    staticClass: "textarea",
    class: _vm.classes
  }, [_vm._v(_vm._s(_vm.value))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9b091808", module.exports)
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "label"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-db207ebc", module.exports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-eaf345ea", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);