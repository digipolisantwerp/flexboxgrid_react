(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactFlexboxGrid"] = factory(require("react"));
	else
		root["ReactFlexboxGrid"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getColumnProps = exports.Col = exports.getRowProps = exports.Row = exports.Grid = undefined;

	var _Row2 = __webpack_require__(1);

	Object.defineProperty(exports, 'getRowProps', {
	  enumerable: true,
	  get: function get() {
	    return _Row2.getRowProps;
	  }
	});

	var _Col2 = __webpack_require__(14);

	Object.defineProperty(exports, 'getColumnProps', {
	  enumerable: true,
	  get: function get() {
	    return _Col2.getColumnProps;
	  }
	});

	var _Grid2 = __webpack_require__(15);

	var _Grid3 = _interopRequireDefault(_Grid2);

	var _Row3 = _interopRequireDefault(_Row2);

	var _Col3 = _interopRequireDefault(_Col2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Grid = _Grid3.default;
	exports.Row = _Row3.default;
	exports.Col = _Col3.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRowProps = getRowProps;
	exports.default = Row;

	var _classNames = __webpack_require__(2);

	var _classNames2 = _interopRequireDefault(_classNames);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createProps = __webpack_require__(12);

	var _createProps2 = _interopRequireDefault(_createProps);

	var _types = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

	var propTypes = {
	  reverse: _propTypes2.default.bool,
	  start: _types.ViewportSizeType,
	  center: _types.ViewportSizeType,
	  end: _types.ViewportSizeType,
	  top: _types.ViewportSizeType,
	  middle: _types.ViewportSizeType,
	  bottom: _types.ViewportSizeType,
	  around: _types.ViewportSizeType,
	  between: _types.ViewportSizeType,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};

	function getRowClassNames(props) {
	  var modificators = [props.className, (0, _classNames2.default)('row')];

	  for (var i = 0; i < rowKeys.length; ++i) {
	    var key = rowKeys[i];
	    var value = props[key];
	    if (value) {
	      modificators.push((0, _classNames2.default)(key + '-' + value));
	    }
	  }

	  if (props.reverse) {
	    modificators.push((0, _classNames2.default)('reverse'));
	  }

	  return modificators;
	}

	function getRowProps(props) {
	  return (0, _createProps2.default)(propTypes, props, getRowClassNames(props));
	}

	function Row(props) {
	  return _react2.default.createElement(props.tagName || 'div', getRowProps(props));
	}

	Row.propTypes = propTypes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getClass;

	var _flexboxgrid = __webpack_require__(3);

	var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getClass(className) {
	  return _flexboxgrid2.default && _flexboxgrid2.default[className] ? _flexboxgrid2.default[className] : className;
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container-fluid":"flexboxgrid__container-fluid___mghiW","container":"flexboxgrid__container___3wVpl","row":"flexboxgrid__row___1uAm4","reverse":"flexboxgrid__reverse___2WqsX","col":"flexboxgrid__col___1FeoU","col-xs":"flexboxgrid__col-xs___3kUG7","col-xs-1":"flexboxgrid__col-xs-1___3LHlz","col-xs-2":"flexboxgrid__col-xs-2___32usw","col-xs-3":"flexboxgrid__col-xs-3___3Y2N2","col-xs-4":"flexboxgrid__col-xs-4___2YQCI","col-xs-5":"flexboxgrid__col-xs-5___ej7MU","col-xs-6":"flexboxgrid__col-xs-6___2YAgB","col-xs-7":"flexboxgrid__col-xs-7___3ECjD","col-xs-8":"flexboxgrid__col-xs-8___hYB91","col-xs-9":"flexboxgrid__col-xs-9___37iYQ","col-xs-10":"flexboxgrid__col-xs-10___Kb9Fe","col-xs-11":"flexboxgrid__col-xs-11___2jY9O","col-xs-12":"flexboxgrid__col-xs-12___2_51F","col-xs-offset-0":"flexboxgrid__col-xs-offset-0___Ke7h7","col-xs-offset-1":"flexboxgrid__col-xs-offset-1___2UpIn","col-xs-offset-2":"flexboxgrid__col-xs-offset-2___29vcm","col-xs-offset-3":"flexboxgrid__col-xs-offset-3___1XtnT","col-xs-offset-4":"flexboxgrid__col-xs-offset-4___116Ob","col-xs-offset-5":"flexboxgrid__col-xs-offset-5___1UEqJ","col-xs-offset-6":"flexboxgrid__col-xs-offset-6___2CsLS","col-xs-offset-7":"flexboxgrid__col-xs-offset-7___3dzGJ","col-xs-offset-8":"flexboxgrid__col-xs-offset-8___nItKM","col-xs-offset-9":"flexboxgrid__col-xs-offset-9___l5_CW","col-xs-offset-10":"flexboxgrid__col-xs-offset-10___AOlZu","col-xs-offset-11":"flexboxgrid__col-xs-offset-11___1HAcG","col-xs-offset-12":"flexboxgrid__col-xs-offset-12___2ONuD","start-xs":"flexboxgrid__start-xs___vTA3v","center-xs":"flexboxgrid__center-xs___3k9ep","end-xs":"flexboxgrid__end-xs___21wpz","top-xs":"flexboxgrid__top-xs___ymAQd","middle-xs":"flexboxgrid__middle-xs___233Wg","bottom-xs":"flexboxgrid__bottom-xs___2bXn7","around-xs":"flexboxgrid__around-xs___eSQJu","between-xs":"flexboxgrid__between-xs___3TFnT","first-xs":"flexboxgrid__first-xs___yDc1m","last-xs":"flexboxgrid__last-xs___1tsQ5","col-sm":"flexboxgrid__col-sm___DBkzV","col-sm-1":"flexboxgrid__col-sm-1___qbZRf","col-sm-2":"flexboxgrid__col-sm-2___1pDUu","col-sm-3":"flexboxgrid__col-sm-3___1Bb-E","col-sm-4":"flexboxgrid__col-sm-4___3OFUs","col-sm-5":"flexboxgrid__col-sm-5___2qBhN","col-sm-6":"flexboxgrid__col-sm-6___3wyf6","col-sm-7":"flexboxgrid__col-sm-7___qbOex","col-sm-8":"flexboxgrid__col-sm-8___2O3Om","col-sm-9":"flexboxgrid__col-sm-9___2Raup","col-sm-10":"flexboxgrid__col-sm-10___5f_Zw","col-sm-11":"flexboxgrid__col-sm-11___27YZh","col-sm-12":"flexboxgrid__col-sm-12___2zgAz","col-sm-offset-0":"flexboxgrid__col-sm-offset-0___2KYV4","col-sm-offset-1":"flexboxgrid__col-sm-offset-1___1YWyn","col-sm-offset-2":"flexboxgrid__col-sm-offset-2___2KlD5","col-sm-offset-3":"flexboxgrid__col-sm-offset-3___2esXU","col-sm-offset-4":"flexboxgrid__col-sm-offset-4___2qR3Y","col-sm-offset-5":"flexboxgrid__col-sm-offset-5___3iPhy","col-sm-offset-6":"flexboxgrid__col-sm-offset-6___rScNX","col-sm-offset-7":"flexboxgrid__col-sm-offset-7___1KEH9","col-sm-offset-8":"flexboxgrid__col-sm-offset-8___KZdpj","col-sm-offset-9":"flexboxgrid__col-sm-offset-9___1fWxR","col-sm-offset-10":"flexboxgrid__col-sm-offset-10___3LOmE","col-sm-offset-11":"flexboxgrid__col-sm-offset-11___go6qX","col-sm-offset-12":"flexboxgrid__col-sm-offset-12___1D3lJ","start-sm":"flexboxgrid__start-sm___3DPPA","center-sm":"flexboxgrid__center-sm___1clZv","end-sm":"flexboxgrid__end-sm___38w-G","top-sm":"flexboxgrid__top-sm___2uGq2","middle-sm":"flexboxgrid__middle-sm___1uyNl","bottom-sm":"flexboxgrid__bottom-sm___PXkT6","around-sm":"flexboxgrid__around-sm___15Zuq","between-sm":"flexboxgrid__between-sm___2uRgw","first-sm":"flexboxgrid__first-sm___1e5fe","last-sm":"flexboxgrid__last-sm___71dtZ","col-md":"flexboxgrid__col-md___1JB_O","col-md-1":"flexboxgrid__col-md-1___1_-_3","col-md-2":"flexboxgrid__col-md-2___2k8fW","col-md-3":"flexboxgrid__col-md-3___1E-GX","col-md-4":"flexboxgrid__col-md-4___2k4_m","col-md-5":"flexboxgrid__col-md-5___3FU2H","col-md-6":"flexboxgrid__col-md-6___3oGNO","col-md-7":"flexboxgrid__col-md-7___1705Q","col-md-8":"flexboxgrid__col-md-8___3yk9y","col-md-9":"flexboxgrid__col-md-9___3QO66","col-md-10":"flexboxgrid__col-md-10___1RuCf","col-md-11":"flexboxgrid__col-md-11___3TNKt","col-md-12":"flexboxgrid__col-md-12___23Fb2","col-md-offset-0":"flexboxgrid__col-md-offset-0___2NDEk","col-md-offset-1":"flexboxgrid__col-md-offset-1___3PKe1","col-md-offset-2":"flexboxgrid__col-md-offset-2___2Gcsf","col-md-offset-3":"flexboxgrid__col-md-offset-3___2Uugo","col-md-offset-4":"flexboxgrid__col-md-offset-4___z8p7E","col-md-offset-5":"flexboxgrid__col-md-offset-5___1tdO0","col-md-offset-6":"flexboxgrid__col-md-offset-6___2rC0r","col-md-offset-7":"flexboxgrid__col-md-offset-7___1i42k","col-md-offset-8":"flexboxgrid__col-md-offset-8___5W-rf","col-md-offset-9":"flexboxgrid__col-md-offset-9___S9qBG","col-md-offset-10":"flexboxgrid__col-md-offset-10___11vdK","col-md-offset-11":"flexboxgrid__col-md-offset-11___11eLi","col-md-offset-12":"flexboxgrid__col-md-offset-12___3cpx9","start-md":"flexboxgrid__start-md___3y1rv","center-md":"flexboxgrid__center-md___3UYcZ","end-md":"flexboxgrid__end-md___myhB6","top-md":"flexboxgrid__top-md___1j5Wb","middle-md":"flexboxgrid__middle-md___3jMhv","bottom-md":"flexboxgrid__bottom-md___LraSi","around-md":"flexboxgrid__around-md___22nW3","between-md":"flexboxgrid__between-md___3M9pe","first-md":"flexboxgrid__first-md___3yvcE","last-md":"flexboxgrid__last-md___1R1Fu","col-lg":"flexboxgrid__col-lg___3WCnA","col-lg-1":"flexboxgrid__col-lg-1___3Y-zi","col-lg-2":"flexboxgrid__col-lg-2___1NAPm","col-lg-3":"flexboxgrid__col-lg-3___Rr36d","col-lg-4":"flexboxgrid__col-lg-4___2rmdE","col-lg-5":"flexboxgrid__col-lg-5___aGve_","col-lg-6":"flexboxgrid__col-lg-6___2nJIZ","col-lg-7":"flexboxgrid__col-lg-7___31WRf","col-lg-8":"flexboxgrid__col-lg-8___2wm1w","col-lg-9":"flexboxgrid__col-lg-9___2iKHV","col-lg-10":"flexboxgrid__col-lg-10___3JX5_","col-lg-11":"flexboxgrid__col-lg-11___cmZyD","col-lg-12":"flexboxgrid__col-lg-12___2cNXK","col-lg-offset-0":"flexboxgrid__col-lg-offset-0___3y-IA","col-lg-offset-1":"flexboxgrid__col-lg-offset-1___2fXo6","col-lg-offset-2":"flexboxgrid__col-lg-offset-2___2A-hh","col-lg-offset-3":"flexboxgrid__col-lg-offset-3___2eNoy","col-lg-offset-4":"flexboxgrid__col-lg-offset-4___F4iiC","col-lg-offset-5":"flexboxgrid__col-lg-offset-5___hnGu6","col-lg-offset-6":"flexboxgrid__col-lg-offset-6___1QERo","col-lg-offset-7":"flexboxgrid__col-lg-offset-7___1Ud5W","col-lg-offset-8":"flexboxgrid__col-lg-offset-8___3_sBV","col-lg-offset-9":"flexboxgrid__col-lg-offset-9___3FO1K","col-lg-offset-10":"flexboxgrid__col-lg-offset-10___uDP4z","col-lg-offset-11":"flexboxgrid__col-lg-offset-11___2XOPG","col-lg-offset-12":"flexboxgrid__col-lg-offset-12___3oVG-","start-lg":"flexboxgrid__start-lg___1FVE7","center-lg":"flexboxgrid__center-lg___3GU8R","end-lg":"flexboxgrid__end-lg___Mc8Wt","top-lg":"flexboxgrid__top-lg___mgNK8","middle-lg":"flexboxgrid__middle-lg___2Iosb","bottom-lg":"flexboxgrid__bottom-lg___3af0b","around-lg":"flexboxgrid__around-lg___2Y7mu","between-lg":"flexboxgrid__between-lg___3muZt","first-lg":"flexboxgrid__first-lg___2b3Bl","last-lg":"flexboxgrid__last-lg___3cqWH"};

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(9)();
	}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(10);
	var invariant = __webpack_require__(11);

	module.exports = function() {
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  function shim() {
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createProps;
	function createProps(propTypes, props, classNames) {
	  var newProps = {};

	  Object.keys(props).filter(function (key) {
	    return key === 'children' || !propTypes[key];
	  }).forEach(function (key) {
	    return newProps[key] = props[key];
	  });

	  var className = classNames.filter(function (cn) {
	    return cn;
	  }).join(' ');
	  return Object.assign({}, newProps, { className: className });
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ViewportSizeType = exports.ColumnSizeType = undefined;

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ColumnSizeType = exports.ColumnSizeType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);
	var ViewportSizeType = exports.ViewportSizeType = _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getColumnProps = getColumnProps;
	exports.default = Col;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createProps = __webpack_require__(12);

	var _createProps2 = _interopRequireDefault(_createProps);

	var _classNames = __webpack_require__(2);

	var _classNames2 = _interopRequireDefault(_classNames);

	var _types = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var propTypes = {
	  xs: _types.ColumnSizeType,
	  sm: _types.ColumnSizeType,
	  md: _types.ColumnSizeType,
	  lg: _types.ColumnSizeType,
	  xl: _types.ColumnSizeType,
	  xsOffset: _propTypes2.default.number,
	  smOffset: _propTypes2.default.number,
	  mdOffset: _propTypes2.default.number,
	  lgOffset: _propTypes2.default.number,
	  xlOffset: _propTypes2.default.number,
	  first: _types.ViewportSizeType,
	  last: _types.ViewportSizeType,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};

	var classMap = {
	  xs: 'col-xs',
	  sm: 'col-sm',
	  md: 'col-md',
	  lg: 'col-lg',
	  xl: 'col-xl',
	  xsOffset: 'col-xs-offset',
	  smOffset: 'col-sm-offset',
	  mdOffset: 'col-md-offset',
	  lgOffset: 'col-lg-offset',
	  xlOffset: 'col-xl-offset'
	};

	function isInteger(value) {
	  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
	}

	function getColClassNames(props) {
	  var extraClasses = [];

	  if (props.className) {
	    extraClasses.push(props.className);
	  }

	  if (props.first) {
	    extraClasses.push((0, _classNames2.default)('first-' + props.first));
	  }

	  if (props.last) {
	    extraClasses.push((0, _classNames2.default)('last-' + props.last));
	  }

	  return Object.keys(props).filter(function (key) {
	    return classMap[key];
	  }).map(function (key) {
	    return (0, _classNames2.default)(isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]);
	  }).concat(extraClasses);
	}

	function getColumnProps(props) {
	  return (0, _createProps2.default)(propTypes, props, getColClassNames(props));
	}

	function Col(props) {
	  var tagName = props.tagName,
	      columnProps = _objectWithoutProperties(props, ['tagName']);

	  return _react2.default.createElement(tagName || 'div', getColumnProps(columnProps));
	}

	Col.propTypes = propTypes;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Grid;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createProps = __webpack_require__(12);

	var _createProps2 = _interopRequireDefault(_createProps);

	var _classNames = __webpack_require__(2);

	var _classNames2 = _interopRequireDefault(_classNames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  fluid: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};

	function Grid(props) {
	  var containerClass = (0, _classNames2.default)(props.fluid ? 'container-fluid' : 'container');
	  var classNames = [props.className, containerClass];

	  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, classNames));
	}

	Grid.propTypes = propTypes;

/***/ })
/******/ ])
});
;