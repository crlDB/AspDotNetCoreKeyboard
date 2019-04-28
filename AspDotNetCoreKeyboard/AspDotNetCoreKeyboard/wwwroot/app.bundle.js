/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/jquery-ui/themes/base/theme.css":
/*!******************************************************!*\
  !*** ./node_modules/jquery-ui/themes/base/theme.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/jquery-ui/ui/position.js":
/*!********************************************************************************************************!*\
  !*** delegated ./node_modules/jquery-ui/ui/position.js from dll-reference vendor_1be437103cc779c9fcc1 ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_1be437103cc779c9fcc1 */ "dll-reference vendor_1be437103cc779c9fcc1"))("./node_modules/jquery-ui/ui/position.js");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!*****************************************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference vendor_1be437103cc779c9fcc1 ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_1be437103cc779c9fcc1 */ "dll-reference vendor_1be437103cc779c9fcc1"))("./node_modules/jquery/dist/jquery.js");

/***/ }),

/***/ "./node_modules/virtual-keyboard/dist/css/keyboard.min.css":
/*!*****************************************************************!*\
  !*** ./node_modules/virtual-keyboard/dist/css/keyboard.min.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/virtual-keyboard/dist/js/jquery.keyboard.js":
/*!***************************************************************************************************************************!*\
  !*** delegated ./node_modules/virtual-keyboard/dist/js/jquery.keyboard.js from dll-reference vendor_1be437103cc779c9fcc1 ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_1be437103cc779c9fcc1 */ "dll-reference vendor_1be437103cc779c9fcc1"))("./node_modules/virtual-keyboard/dist/js/jquery.keyboard.js");

/***/ }),

/***/ "./src/css/site.css":
/*!**************************!*\
  !*** ./src/css/site.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/img/core2.0.png":
/*!*****************************!*\
  !*** ./src/img/core2.0.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/image/core2.0.png";

/***/ }),

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
//! App
//! version : 1.0.0
//! author  : De Bels Carl
//! license : MIT
//! date    : Q1-2019
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../img/core2.0.png */ "./src/img/core2.0.png");
__webpack_require__(/*! ../css/site.css */ "./src/css/site.css");
__webpack_require__(/*! ../../node_modules/bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
__webpack_require__(/*! ../../node_modules/jquery-ui/themes/base/theme.css */ "./node_modules/jquery-ui/themes/base/theme.css");
__webpack_require__(/*! ../../node_modules/virtual-keyboard/dist/css/keyboard.min.css */ "./node_modules/virtual-keyboard/dist/css/keyboard.min.css");
__webpack_require__(/*! lib_virtualkeyboard */ "./node_modules/virtual-keyboard/dist/js/jquery.keyboard.js");
__webpack_require__(/*! lib_jqueryposition */ "./node_modules/jquery-ui/ui/position.js");
// Autocomplete demo
var test1 = $('.keyboard');
test1
    .keyboard({
    layout: 'num',
    //        layout: 'qwerty',
    //        layout: 'international',
    //        layout: 'alpha',
    //        layout: 'colemak',
    //        layout: 'dvorak',
    //        restrictInput: true, // Prevent keys not in the displayed keyboard from being typed in
    //        preventPaste: true,  // prevent ctrl-v and right click
    stickyShift: false,
    autoAccept: true,
    tabNavigation: true,
    enterNavigation: true,
    position: {
        //of: $('.keyboard'),
        my: 'center top',
        at: 'center top'
    },
    visible: function (e, keyboard, el) {
        keyboard.$preview[0].select();
    }
});
var test2 = $('.keyboard2');
test2
    .keyboard({
    stickyShift: false,
    autoAccept: true,
    tabNavigation: true,
    enterNavigation: true,
    layout: 'custom',
    customLayout: {
        'normal': [
            'C D E F',
            '8 9 A B',
            '4 5 6 7',
            '0 1 2 3',
            '{bksp} {a} {c}'
        ]
    },
    maxLength: 6,
    // Prevent keys not in the displayed keyboard from being typed in
    restrictInput: true,
    // include lower case characters (added v1.25.7)
    restrictInclude: 'a b c d e f',
    // don't use combos or A+E could become a ligature
    useCombos: false,
    // activate the "validate" callback function
    acceptValid: false,
    validate: function (keyboard, value, isClosing) {
        // only make valid if input is 6 characters in length
        return value.length === 6;
    }
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "dll-reference vendor_1be437103cc779c9fcc1":
/*!**********************************************!*\
  !*** external "vendor_1be437103cc779c9fcc1" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor_1be437103cc779c9fcc1;

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map