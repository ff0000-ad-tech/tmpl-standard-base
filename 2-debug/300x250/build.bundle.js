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
/******/ 	return __webpack_require__(__webpack_require__.s = "./1-build/300x250/build.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./1-build/300x250/build.js":
/*!**********************************!*\
  !*** ./1-build/300x250/build.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./1-build/node_modules/preact/dist/preact.module.js");
/* harmony import */ var _ff0000_ad_tech_ad_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ff0000-ad-tech/ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");
/* harmony import */ var _common_js_Preflight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/js/Preflight.js */ "./1-build/common/js/Preflight.js");
/* harmony import */ var _components_Control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Control */ "./1-build/300x250/components/Control/index.jsx");



 // called from index.html onImpression()

const launch = binaryAssets => {
  console.log('Bundle.launch()');
  _ff0000_ad_tech_ad_control__WEBPACK_IMPORTED_MODULE_1__["Core"].init(binaryAssets).then(() => _common_js_Preflight_js__WEBPACK_IMPORTED_MODULE_2__["Preflight"].init()).then(() => _ff0000_ad_tech_ad_control__WEBPACK_IMPORTED_MODULE_1__["Core"].loadDynamic()).then(() => Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_components_Control__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.getElementById('main'))).catch(err => {
    throw err;
  });
};

window.Build = {
  launch
};

/***/ }),

/***/ "./1-build/300x250/components/Ad/index.jsx":
/*!*************************************************!*\
  !*** ./1-build/300x250/components/Ad/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./1-build/node_modules/preact/dist/preact.module.js");
/* harmony import */ var _ff0000_ad_tech_ad_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ff0000-ad-tech/ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");
/* harmony import */ var _Slideshow_Slideshow_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Slideshow/Slideshow.jsx */ "./1-build/300x250/components/Slideshow/Slideshow.jsx");
/* harmony import */ var _CopyBlock_CopyBlock_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../CopyBlock/CopyBlock.jsx */ "./1-build/300x250/components/CopyBlock/CopyBlock.jsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./1-build/300x250/components/Ad/styles.scss");
/* harmony import */ var _common_fonts_JosefinSans_Bold_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/fonts/JosefinSans-Bold.woff */ "./1-build/common/fonts/JosefinSans-Bold.woff");
/* harmony import */ var _common_fonts_JosefinSans_Bold_woff__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_fonts_JosefinSans_Bold_woff__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_fonts_JosefinSans_Medium_woff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/fonts/JosefinSans-Medium.woff */ "./1-build/common/fonts/JosefinSans-Medium.woff");
/* harmony import */ var _common_fonts_JosefinSans_Medium_woff__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_fonts_JosefinSans_Medium_woff__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_images_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @common/images/logo.svg */ "./1-build/common/images/logo.svg");
/* harmony import */ var _common_images_logo_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_images_logo_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _size_images_160over90_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @size/images/160over90-logo.png */ "./1-build/300x250/images/160over90-logo.png");
/* harmony import */ var _size_images_160over90_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_size_images_160over90_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _size_images_curve_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @size/images/curve.svg */ "./1-build/300x250/images/curve.svg");
/* harmony import */ var _size_images_curve_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_size_images_curve_svg__WEBPACK_IMPORTED_MODULE_9__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class Ad extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "getImage", name => {
      return _ff0000_ad_tech_ad_control__WEBPACK_IMPORTED_MODULE_1__["ImageManager"].get(name).src;
    });
  }

  render() {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      className: "ad"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_Slideshow_Slideshow_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: el => this.slideshow = el
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      className: "main-curve"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
      className: "main-curve__curve",
      src: this.getImage('curve')
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      className: "main-curve__fill"
    })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
      ref: el => this.logo = el,
      className: "logo",
      src: this.getImage('logo')
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      ref: el => this.cta = el,
      className: "ad__cta"
    }, "Learn More"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_CopyBlock_CopyBlock_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ref: el => this.copyblock = el,
      copy: adData.copy
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Ad);

/***/ }),

/***/ "./1-build/300x250/components/Ad/styles.scss":
/*!***************************************************!*\
  !*** ./1-build/300x250/components/Ad/styles.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./1-build/300x250/components/Ad/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./1-build/300x250/components/Control/index.jsx":
/*!******************************************************!*\
  !*** ./1-build/300x250/components/Control/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./1-build/node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Ad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Ad */ "./1-build/300x250/components/Ad/index.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Control extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      window.hidePreloader();
      this.startAnimation();
    });

    _defineProperty(this, "startAnimation", () => {
      // Destructure out all the elements from the reference to the Ad component
      const {
        slideshow,
        copyblock,
        cta,
        logo
      } = this.adRef;
      slideshow.start();
      copyblock.start();
      gsap.set(cta, {
        y: '-=20'
      });
      const del = 6;
      gsap.to(logo, {
        delay: del,
        duration: 1,
        x: '-=40'
      });
      gsap.to(cta, {
        delay: del,
        duration: 1,
        y: '+=20',
        opacity: 1
      });
    });

    _defineProperty(this, "handleClick", () => {// Network.exit(window.clickTag)
    });

    _defineProperty(this, "handleRollOver", () => {
      this.adRef.slideshow.over();
    });

    _defineProperty(this, "handleRollOut", () => {
      this.adRef.slideshow.out();
    });
  }

  render() {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      id: `control-${adParams.adWidth}x${adParams.adHeight}`,
      style: {
        width: `${adParams.adWidth}px`,
        height: `${adParams.adHeight}px`
      },
      onClick: this.handleClick,
      onMouseOver: this.handleRollOver,
      onMouseLeave: this.handleRollOut
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_Ad__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: el => this.adRef = el
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Control);

/***/ }),

/***/ "./1-build/300x250/components/CopyBlock/CopyBlock.jsx":
/*!************************************************************!*\
  !*** ./1-build/300x250/components/CopyBlock/CopyBlock.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./1-build/node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./1-build/node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _CopyBlock_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CopyBlock.scss */ "./1-build/300x250/components/CopyBlock/CopyBlock.scss");
/* harmony import */ var _size_images_160over90_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @size/images/160over90-logo.png */ "./1-build/300x250/images/160over90-logo.png");
/* harmony import */ var _size_images_160over90_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_size_images_160over90_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _size_images_frame1photo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @size/images/frame1photo.jpg */ "./1-build/300x250/images/frame1photo.jpg");
/* harmony import */ var _size_images_frame1photo_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_size_images_frame1photo_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _size_images_frame2photo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @size/images/frame2photo.jpg */ "./1-build/300x250/images/frame2photo.jpg");
/* harmony import */ var _size_images_frame2photo_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_size_images_frame2photo_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _size_images_frame3photo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @size/images/frame3photo.jpg */ "./1-build/300x250/images/frame3photo.jpg");
/* harmony import */ var _size_images_frame3photo_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_size_images_frame3photo_jpg__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class CopyBlock extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "generateCopyLine", line => {
      return line.split('\n').map(line => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, line));
    });

    for (let i = 0; i < props.copy.length; i++) {
      this[`line_${i}_ref`] = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    }
  }

  componentDidMount() {}

  start() {
    for (let i = 0; i < this.props.copy.length; i++) {
      const el = this[`line_${i}_ref`].current;
      const delay = i * 2;
      gsap.to(el, {
        delay: delay,
        opacity: 1,
        duration: 1
      });
      if (i === this.props.copy.length - 1) return;
      gsap.to(el, {
        delay: 1 + delay,
        duration: 2,
        y: '+=50'
      });
    }
  }

  render() {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      ref: el => this.copyblock = el,
      className: "copyblock"
    }, this.props.copy.map((line, i) => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      ref: this[`line_${i}_ref`],
      className: "copyblock__copyline",
      style: {
        opacity: 0
      }
    }, this.generateCopyLine(line))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CopyBlock);

/***/ }),

/***/ "./1-build/300x250/components/CopyBlock/CopyBlock.scss":
/*!*************************************************************!*\
  !*** ./1-build/300x250/components/CopyBlock/CopyBlock.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_sass_loader_dist_cjs_js_CopyBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/sass-loader/dist/cjs.js!./CopyBlock.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./1-build/300x250/components/CopyBlock/CopyBlock.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_sass_loader_dist_cjs_js_CopyBlock_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_sass_loader_dist_cjs_js_CopyBlock_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./1-build/300x250/components/Slideshow/Slideshow.jsx":
/*!************************************************************!*\
  !*** ./1-build/300x250/components/Slideshow/Slideshow.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./1-build/node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./1-build/node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _ff0000_ad_tech_ad_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ff0000-ad-tech/ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");
/* harmony import */ var _Slideshow_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slideshow.scss */ "./1-build/300x250/components/Slideshow/Slideshow.scss");
/* harmony import */ var _size_images_160over90_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @size/images/160over90-logo.png */ "./1-build/300x250/images/160over90-logo.png");
/* harmony import */ var _size_images_160over90_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_size_images_160over90_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _size_images_frame1photo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @size/images/frame1photo.jpg */ "./1-build/300x250/images/frame1photo.jpg");
/* harmony import */ var _size_images_frame1photo_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_size_images_frame1photo_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _size_images_frame2photo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @size/images/frame2photo.jpg */ "./1-build/300x250/images/frame2photo.jpg");
/* harmony import */ var _size_images_frame2photo_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_size_images_frame2photo_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _size_images_frame3photo_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @size/images/frame3photo.jpg */ "./1-build/300x250/images/frame3photo.jpg");
/* harmony import */ var _size_images_frame3photo_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_size_images_frame3photo_jpg__WEBPACK_IMPORTED_MODULE_7__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Slideshow extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "getImage", name => {
      return _ff0000_ad_tech_ad_control__WEBPACK_IMPORTED_MODULE_2__["ImageManager"].get(name).src;
    });
  }

  start() {
    gsap.to('#photo3', {
      duration: 3,
      x: 300
    });
    gsap.to('#photo2', {
      delay: 3,
      duration: 2,
      x: 300
    });
  }

  over() {
    gsap.to('#photo1', {
      duration: 0.5,
      scale: 1.2
    });
  }

  out() {
    gsap.to('#photo1', {
      duration: 0.5,
      scale: 1
    });
  }

  render() {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      className: "slideshow"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
      id: "photo1",
      src: this.getImage('frame1photo'),
      alt: "1"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
      id: "photo2",
      src: this.getImage('frame2photo'),
      alt: "2"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
      id: "photo3",
      src: this.getImage('frame3photo'),
      alt: "3"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Slideshow);

/***/ }),

/***/ "./1-build/300x250/components/Slideshow/Slideshow.scss":
/*!*************************************************************!*\
  !*** ./1-build/300x250/components/Slideshow/Slideshow.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_sass_loader_dist_cjs_js_Slideshow_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/sass-loader/dist/cjs.js!./Slideshow.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./1-build/300x250/components/Slideshow/Slideshow.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_sass_loader_dist_cjs_js_Slideshow_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_sass_loader_dist_cjs_js_Slideshow_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./1-build/300x250/images/160over90-logo.png":
/*!***************************************************!*\
  !*** ./1-build/300x250/images/160over90-logo.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '160over90-logo'

/***/ }),

/***/ "./1-build/300x250/images/curve.svg":
/*!******************************************!*\
  !*** ./1-build/300x250/images/curve.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = 'curve'

/***/ }),

/***/ "./1-build/300x250/images/frame1photo.jpg":
/*!************************************************!*\
  !*** ./1-build/300x250/images/frame1photo.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = 'frame1photo'

/***/ }),

/***/ "./1-build/300x250/images/frame2photo.jpg":
/*!************************************************!*\
  !*** ./1-build/300x250/images/frame2photo.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = 'frame2photo'

/***/ }),

/***/ "./1-build/300x250/images/frame3photo.jpg":
/*!************************************************!*\
  !*** ./1-build/300x250/images/frame3photo.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = 'frame3photo'

/***/ }),

/***/ "./1-build/common/fonts/JosefinSans-Bold.woff":
/*!****************************************************!*\
  !*** ./1-build/common/fonts/JosefinSans-Bold.woff ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = 'JosefinSans-Bold'

/***/ }),

/***/ "./1-build/common/fonts/JosefinSans-Medium.woff":
/*!******************************************************!*\
  !*** ./1-build/common/fonts/JosefinSans-Medium.woff ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = 'JosefinSans-Medium'

/***/ }),

/***/ "./1-build/common/images/logo.svg":
/*!****************************************!*\
  !*** ./1-build/common/images/logo.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = 'logo'

/***/ }),

/***/ "./1-build/common/js/AdData.js":
/*!*************************************!*\
  !*** ./1-build/common/js/AdData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdData; });
/* harmony import */ var _ff0000_ad_tech_ad_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ff0000-ad-tech/ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");

function AdData() {
  var self = this;
  /**
  	EXTRACT JSON DATA
  	Prepare dynamic data here.
   */

  /**
  	DYNAMIC IMAGES
  	Dynamically loaded images need to be in their own directory, like "dynamic_images/".
  		Then, you need to add your dynamic image-paths to the load-queue, so that when
  	the secondary preload happens, these assets will get loaded. For example:
  		self.theImageName = ImageManager.addToLoad(adParams.imagesPath + 'sample.jpg');
   */

  self.copy = ['WHY PAY MORE\nFOR ELECTRICITY?', 'MAKE THE MOST OF YOUR\nENERGY AND MONEY', 'CHOOSE SMART SAVINGS\nWITH DISCOUNT POWER.'];
  self.fonts = {
    primary: 'template_font'
  };
  self.colors = {}; // Store svg markup for use in all UISvg instances, reduces duplicate code across builds.  See UISvg.

  self.svg = {};
}

/***/ }),

/***/ "./1-build/common/js/Preflight.js":
/*!****************************************!*\
  !*** ./1-build/common/js/Preflight.js ***!
  \****************************************/
/*! exports provided: Preflight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preflight", function() { return Preflight; });
/* harmony import */ var _common_js_AdData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/js/AdData.js */ "./1-build/common/js/AdData.js");
/* harmony import */ var _ff0000_ad_tech_ad_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ff0000-ad-tech/ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");


/*-- Red.Imports.head.start --*/

/*-- Red.Imports.head.end --*/

/**
	PRE-FLIGHT		

	Resources that are shared by all the sizes should be loaded here. Boilerplate components 
	like {@link Velvet} & {@link DateManager} can be configured. Runtime JS loads. Etc.

	Once resolved, control moves to AdData.
*/

class Preflight {
  static init() {
    console.log('Preflight.init()');
    return new Promise((resolve, reject) => {
      let promises = [// this.loadDynamicJS('define-your-case-id')
      ];
      Promise.all(promises).then(() => {
        this.addPreloadedImages();
        this.prepareAdData();
      }).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      });
    });
  }

  static addPreloadedImages() {
    console.log('Preflight.addPreloadedImages()');
    _ff0000_ad_tech_ad_control__WEBPACK_IMPORTED_MODULE_1__["ImageManager"].addToDictionary(assets.preloadedImages);
  }

  static prepareAdData() {
    console.log('Preflight.prepareAdData()');
    global.adData = new _common_js_AdData_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  /**
  	Method for loading dynamic, compiled ES6 modules at runtime. This should be threaded into 
  	Preflight.init()'s promise chain, as needed.
  		You must:
  		- define THIS_CASE__ID
  		- replace THIS_CASE__ASSET_PATH with a string
  		- handle the implementation of the loaded module.
  */


  static loadDynamicJS(id) {
    return new Promise((resolve, reject) => {
      switch (id) {
        /*
        case THIS_CASE__ID: // ex: '300x250_Endframe'
        	import('THIS_CASE__ASSET_PATH') // ex: '@common/dynamic_js/300x250_Endframe.js'
        		.then(module => {
        			// example implementation of loaded ES6 module
        			global[module.default.name] = module.default
        			resolve()
        		})
        		.catch(err => reject(err))
        	break
        */
        default:
          console.log(`Common.loadDynamicJS() has no import case for: ${id}`);
          resolve();
      }
    });
  }

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js":
/*!******************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js ***!
  \******************************************************************/
/*! exports provided: Core, ImageManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_Core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Core.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/Core.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Core", function() { return _lib_Core_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _lib_ImageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ImageManager.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/ImageManager.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ImageManager", function() { return _lib_ImageManager_js__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/Core.js":
/*!*********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/Core.js ***!
  \*********************************************************************/
/*! exports provided: init, loadDynamic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDynamic", function() { return loadDynamic; });
/* harmony import */ var _ImageManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageManager */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/ImageManager.js");
/**
 * @class Core
 * @desc
 * 	Boilerplate logic that is attempted for all ad templates happens here. The build of an ad should not need to affect this scope.
 * <codeblock>
 * import { Core } from 'ad-control'
 * </codeblock>
 */

/**
 * @memberOf Core
 * @method init
 * @param {(Image|SVGElement)[]} binaryAssets
 * 	Optionally passed in Images/SVGElements containing src and data on base64 images
 * @desc
 * 	This is the first step in the build file. The init() returns a Promise, which allows for chaining of .then() methods.
 * 	For synchronous actions, such as declaring AdData or FtData, simply wrap it in an anonymous function. For asynchronous
 * 	actions, such a inititalizing something with a created callback, this will need to be wrapped in a returned callback.
 * 	This will ensure that the chain will wait for the previous .then() to be fulfilled before moving on.
 * @example
 * Core.init(binaryAssets)
 * 	.then(function() {
 * 		global.adData = new AdData();
 * 	})
 * 	.then(function() {
 * 		return new Promise((resolve, reject) => {
 * 			// pass the resolve as the completed callback
 * 			SomeCustomClass.init(resolve)
 * 		})
 * 	})
 * 	.then(Core.loadDynamic)
 * 	.then(Control.prepareBuild)
 */

function init(binaryAssets) {
  console.log('Core.init()');
  return new Promise((resolve, reject) => {
    let promises = []; // fba payload

    _ImageManager__WEBPACK_IMPORTED_MODULE_0__["addToDictionary"](binaryAssets); // async

    Promise.all(promises).then(() => {
      resolve();
    }).catch(err => {
      reject(err);
    });
  });
}
/**
 * @memberOf Core
 * @method loadDynamic
 * @desc
 * 	This is the last step before preparing the build. The loadDynamic() loads all of the images that have been added
 * 	to the ImageLoader. After this method is called from the .then() promise chain, Control.prepareBuild can be
 * 	called as the entire prepare process is now complete when its Promise is fulfilled.
 * @example
 * Core.init(fbaContent)
 * 	.then(function() {
 * 		global.adData = new AdData();
 * 	})
 * 	.then(Core.loadDynamic)
 * 	.then(Control.prepareBuild)
 */

function loadDynamic() {
  console.log('Core.loadDynamic()');
  return new Promise((resolve, reject) => {
    console.log('\t Core load Image Queue');
    _ImageManager__WEBPACK_IMPORTED_MODULE_0__["load"](resolve, global.failAd);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/ImageManager.js":
/*!*****************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/ImageManager.js ***!
  \*****************************************************************************/
/*! exports provided: addToLoad, addLoader, get, available, load, addFbaImages, addToDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToLoad", function() { return addToLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLoader", function() { return addLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "available", function() { return available; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFbaImages", function() { return addFbaImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToDictionary", function() { return addToDictionary; });
/* harmony import */ var _ff0000_ad_tech_ad_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ff0000-ad-tech/ad-load */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/index.js");
/**
 * @class ImageManager
 * @desc
 * This module is used to add/load/manage all Images.
 * <codeblock>
 * import { ImageManager } from 'ad-control'
 * </codeblock>
 */

let _pendingImages = [];
let _pendingCanvasImages = [];
let _pendingLoaders = [];
let _nextLoadCallback = [];

let _imageManagerLoader;

let _dict = {};
let _isLoading = false;
let _loaderCount = 0;

let _onComplete = function () {};

let _onFail = function () {};
/* ------------------------------------------------------------------------------------------------------------- */
// PUBLIC METHODS

/**
 * @memberOf ImageManager
 * @method addToLoad
 * @param {string} file
 * 	A filename or path
 * @param {object} arg
 * 	Optional. Determines if the image should be loaded with a crossOrigin:'anonymous' for images used in a canvas. An object with one boolean key: forCanvas
 * @desc
 * 	Add an image file-path to be loaded.
 * @example
 * // Add an image from the "images/" folder
 * ImageManager.addToLoad(adParams.imagesPath + 'sample.png')
 *
 * // Add an image full path, and get the result key back
 * var sampleImageId = ImageManager.addToLoad('http://some/full/file/path/sample.png')
 *
 * // Add an image for use with CanvasDrawer, and get the result key back
 * // NOTE: The object must be there or images will error when used in Canvas
 * var sampleImageId = ImageManager.addToLoad('http://some/full/file/path/sample.png', { forCanvas:true })
 *
 * @returns {string}
 * 	An "imageId" which can be used to get an image by its id, see: {@link ImageManager.get}
 */


function addToLoad(file, arg) {
  var id = _ff0000_ad_tech_ad_load__WEBPACK_IMPORTED_MODULE_0__["LoaderUtils"].getFileName(file);

  if (!available(id, true)) {
    var forCanvas = arg && arg.forCanvas == true; //console.log( 'ImageManager.addToLoad(', id, ') forCanvas:', forCanvas )

    forCanvas ? _pendingCanvasImages.push(file) : _pendingImages.push(file);
  }

  return id;
}
/**
 * @memberOf ImageManager
 * @method addLoader
 * @param {Loader} loader
 * 	A {@link Loader}.
 * @desc
 * 	Add a Loader to loaded along with any other queued image requests.
 * @example
 * ImageManager.addLoader(
 * 	new Loader(
 * 		assets.images, {
 * 			name: 'imageLocalLoader',
 * 			prepend: adParams.imagesPath
 * 		}
 * 	)
 * )
 */

function addLoader(loader) {
  _pendingLoaders.push(loader);
}
/**
 * @memberOf ImageManager
 * @method get
 * @param {string} imageId
 * 	A String id of an Image
 * @returns {Image}
 * 	Returns the <<b></b>img> that was created when the requested image was loaded in.
 * @example
 * 	ImageManager.get('sample')
 */

function get(imageId) {
  if (_dict[imageId]) return _dict[imageId];else throw new Error("ImageManager : No image named '" + imageId + "' has been loaded");
}
/**
 * @memberOf ImageManager
 * @method available
 * @param {string} imageId
 * 	A String id of an Image
 * @returns {boolean}
 * 	If an image by the given imageID has been loaded
 * @example
 * 	ImageManager.available('sample')
 */

function available(imageId, internal) {
  var exists = _dict[imageId] != undefined; // if the image we are trying to load already exists

  if (exists) {
    // if this is an internal use - as in, called from I.addToLoad() or addToDictionary()
    if (internal) console.log('ImageManager.available() -->', true, ': Duplicate Image Id "' + imageId + '". One or more images loading in have the same name. Each Image needs a unique file name.');
  } else {
    // if the image doesn't already exist, we only want to know that if it is not from an internal ImageManager method
    // for example: checking to see if an image exists from build.js
    if (!internal) console.log('ImageManager.available() -->', false, ": No image named '" + imageId + "' has been loaded");
  }

  return exists;
}
/**
 * @memberOf ImageManager
 * @method load
 * @param {function} callback
 * 	Callback to execute when all images are loaded.
 * @param {function} onFail
 * 	Optional onFail callback - if not specified a failed load will cause the ad to failover.
 * @desc
 * 	Executes load queue, which, on success, will yield all of the requested images available with {@link ImageManager.get}
 */

function load(callback, onFail) {
  _onFail = onFail || global.failAd;

  if (_isLoading) {
    // set up a wait for the first one to finish
    _nextLoadCallback.push(callback);
  } else {
    _onComplete = [].concat(callback);
    _nextLoadCallback = [];

    const currentPendingImages = _pendingImages.slice();

    _pendingImages = [];
    const imgLoads = currentPendingImages.map(img => {
      return new Promise((resolve, reject) => {
        new _ff0000_ad_tech_ad_load__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"](img, {
          onComplete: event => {
            resolve(event.dataRaw);
          },
          onFail: reject
        }).load();
      });
    });

    const currentPendingCanvasImages = _pendingCanvasImages.slice();

    _pendingCanvasImages = [];
    const canvasImgLoads = currentPendingCanvasImages.map(canvasImg => {
      return new Promise((resolve, reject) => {
        new _ff0000_ad_tech_ad_load__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"](canvasImg, {
          onComplete: event => resolve(event.dataRaw),
          onFail: reject,
          crossOrigin: 'anonymous'
        }).load();
      });
    });

    const addedLoaderPromises = _pendingLoaders.map(loader => {
      return new Promise((resolve, reject) => {
        const _onComplete = loader.onComplete;
        const _onFail = loader.onFail;

        loader.onComplete = function (event) {
          _onComplete && _onComplete(event);
          resolve(event.dataRaw);
        };

        loader.onFail = function (event) {
          _onFail && _onFail(event);
          reject(event);
        };

        loader.load();
      });
    });

    _isLoading = true;
    Promise.all(imgLoads.concat(canvasImgLoads).concat(addedLoaderPromises)).then(imgDataArr => {
      _isLoading = false;
      addToDictionary(imgDataArr);
    }).catch(() => {
      _isLoading = false;

      _onFail.call();
    });
  }
}
function addFbaImages(target) {
  if (target) addToDictionary(target.getAllContentRaw());
}
/**
 * @memberOf ImageManager
 * @method addToDictionary
 * @desc
 * 	Allows images to be added to the ImageManager's dictionary from external classes. <b>This is not part of the load process, and can only add <i>loaded</i> image content.</b>
 */

function addToDictionary(content) {
  for (var i = 0; i < content.length; i++) {
    if (content[i] instanceof Image || content[i] instanceof SVGElement) {
      var img = content[i];
      if (!available(content[i].id, true)) _dict[img.id] = img;
    }
  }

  console.log('ImageManager:', _dict);

  for (var i = 0; i < _onComplete.length; i++) {
    _onComplete[i].call();
  }

  if (_nextLoadCallback.length > 0) {
    load(_nextLoadCallback);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/index.js":
/*!*******************************************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: LoaderUtils, ImageLoader, InlineLoader, DataLoader, FontLoader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var _lib_mixin_MixinBuilder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mixin/MixinBuilder.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/MixinBuilder.js");
/* harmony import */ var _lib_mixin_LoaderBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/mixin/LoaderBase.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderBase.js");
/* harmony import */ var _lib_mixin_LoaderUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/mixin/LoaderUtils.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderUtils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "LoaderUtils", function() { return _lib_mixin_LoaderUtils_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _lib_single_ImageLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/single/ImageLoader.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/ImageLoader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return _lib_single_ImageLoader_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _lib_single_InlineLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/single/InlineLoader.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/InlineLoader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineLoader", function() { return _lib_single_InlineLoader_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _lib_single_DataLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/single/DataLoader.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/DataLoader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLoader", function() { return _lib_single_DataLoader_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _lib_single_FontLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/single/FontLoader.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/FontLoader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontLoader", function() { return _lib_single_FontLoader_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/** 
	@npmpackage
	@class Loader
	@param {string|array|Loader} arg
		load target
	@param {object} arg
		Object with any of the following optional parameters for customizing the load routine.
	@property {string} query
	@property {string} name
	@property {boolean} prioritize
	@property {boolean} cacheBuster
	@property {string} method 
		"POST" or "GET"
	@property {object} scope
	@property {function} onComplete
	@property {function} onProgress
	@property {function} onFail
	@property {string} prepend
		A file path to be added to all loader targets.
	@property {function} platformGetUrl
		A callback method to wrap the url, such as DoubleClick's <code>Enabler.getUrl</code>.
	@property {string} fileType
		Manually assign the file type, eg: <code>jpg</code>, <code>svg</code>.
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-load">ad-load</a>
		<br><br>

		This class is designed to handle all load processes: images, fonts and data, even other Loaders! Below are multiple use case scenarios.
		<br><br>


		<b>Single Load:</b>
		<codeblock>
			var singleLoader = new Loader('images/img0.jpg', { onComplete:handleLoadComplete, scope:this });
			singleLoader.load();

			function handleLoadComplete( target ) {
				console.log( target.content[0].dataRaw );
			}
		</codeblock>
		<br><br>


		<b>Array of loads from one Constructor:</b>
		<codeblock>
			// Array load - you can pass in multiple files on creation of a Loader
			var arrayLoader = new Loader(['font1.ttf', 'font2.ttf'], { name:'fontLoader', onComplete:handleLoadComplete, prepend:adParams.commonPath + 'fonts/' });
			arrayLoader.load();

			function handleLoadComplete( target ) {
				console.log( target.content[0].dataRaw );
			}		
		</codeblock>
		<br><br>
		

		<b>Complex Load:</b>
		<codeblock>
			var myLoader = new Loader('images/img0.jpg', { onComplete:handleLoadComplete, scope:this });	

			// append to that loader
			myLoader.add('images/img1.jpg');

			// append multiple
			myLoader.add(['images/img2.jpg', 'images/img3.jpg']);
			myLoader.load();

			function handleLoadComplete( target ) {
				console.log( target.content[0].dataRaw );
			}		
		</codeblock>
		<br><br>


		<b>Nested Loads:</b>
		<codeblock>
			// Nested loads - best practice is to make a loader for one file type
			var masterLoader = new Loader({ name:'master', onComplete:handleAllComplete, onProgress:handleAllProgress, onFail:handleLoadFail, scope:this });

			// declare a var to reference later, then add it to main loader
			var _imgLoader = new Loader( [ 'images/img2.jpg', 'images/img3.jpg' ], { name:'load_images', prepend:'images/' });
			masterLoader.add( _imgLoader );

			// or just add a new loader instance
			masterLoader.add( new Loader( [ 'font1.ttf', 'font2.ttf' ], { name:'load_fonts', prepend:adParams.commonPath + 'fonts/' }) );
			masterLoader.add( new Loader( ['Ad_Data.js', 'NetUtils.js', 'Align.js', 'Analytics.js'], { name:'load_js', prepend:adParams.corePath + 'utils/' }) );
			masterLoader.load();

			function handleLoadComplete( target ) {
				console.log( target.content[0].dataRaw );
			}
			function handleLoadProgress( target ) {
				console.log( target.progress, target.rawProgress )
			}
			function handleLoadFail( target ) {
				console.log( target );
			}
			function handleAllComplete( target ) {
				var a = target.getLoader( _imgLoader )
				console.log( "Loader found by var:", a )

				var b = target.getContent( 'font1.ttf' );
				console.log( "Content found by name:", b );

				var c = target.getLoader( 'load_fonts' );
				console.log( "Loader found by url:", c );
			}		
		</codeblock>

*/

/* TODO
	- change getAllContent() to take secret boolean so can call getAllContentRaw(true) for no extra loop
	- ? comment out progress calculations
*/








class Blank {}


class Loader extends Object(_lib_mixin_MixinBuilder_js__WEBPACK_IMPORTED_MODULE_0__["mix"])(Blank).with(_lib_mixin_LoaderBase_js__WEBPACK_IMPORTED_MODULE_1__["LoaderBase"]) {
  constructor(...args) {
    super(...args);
    let arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};
    const L = this;
    L._queue = {};
    L._total = 0;
    L._active = false;
    L._startedCount = 0;
    L.prepend = arg.prepend || '';
    L.platformGetUrl = arg.platformGetUrl;
    L.fileType = arg.fileType || null;
    L.content = [];
    L.crossOrigin = arg.crossOrigin || undefined;
    L.add(arguments[0]);
  }
  /* ---------------------------------------------------------------------------------------------------------------- */
  // PUBLIC

  /**
  	@memberOf Loader
  	@method add
  	@param {string|array|Loader} arg
  		a file, array of files, or Loader instance
  	@desc
  		Add to the load queue: a single or array of files or even another Loader.
  	@example
  		// Single load
  		var imgLoader = new Loader({ name:'img_loader' });
  		
  		// add to that loader
  		imgLoader.add('images/img1.jpg');
  		
  		// add multiple
  		imgLoader.add(['images/img2.jpg', 'images/img3.jpg']);
  	
  		// Nested loads - best practice is to make a loader for one file type
  		var mainLoader = new Loader({ name:'main', onComplete:handleComplete });
  			mainLoader.add( imgLoader );
  		
  		// or just add a new loader instance
  		mainLoader.add( new Loader(['font1.ttf', 'font2.ttf'], { name:'load_fonts' }) );				
  */


  add(arg) {
    const L = this;

    if (typeof arg === 'string') {
      // single load as first parameter
      L._addSingleLoad(arg);
    } else if (arg instanceof Array) {
      // first parameter is an Array of urls
      for (var i = 0; i < arg.length; i++) {
        L._addSingleLoad(arg[i]);
      }
    } else if (arg instanceof Loader) {
      if (arg.content && arg.content[0] && arg.content[0].fileType == 'fba') {
        L._addFbaSubLoads(arg.content[0]);
      } else {
        L._addSubLoad(arg);
      }
    }
  }
  /**
  	@memberOf Loader
  	@method load
  	@desc
  		Starts the load process.
  	@example
  		// Single load
  		var imgLoader = new Loader({ onComplete:handleComplete });
  		imgLoader.load();				
  */


  load() {
    const L = this;
    L._active = true;

    if (L._total <= 0) {
      console.log('Loader "' + L.name + '" has NO assets to be loaded.');
    } else {
      let _has = false;
      let _output = '';

      for (let l in L._queue) {
        if (!(L._queue[l] instanceof Loader)) {
          if (!_has) {
            _has = true;
            _output += 'Loader "' + L.name + '" requesting:';
          }

          const fileName = L._queue[l].fileName;
          const extension = L._queue[l].fileType;
          const extensionIndex = fileName.indexOf('.' + extension);
          const fileAndExtension = extensionIndex > -1 ? fileName : fileName + '.' + extension;
          _output += '\n\t -> ' + (L._queue[l].prepend || '') + fileAndExtension;
        }
      }

      if (_has) {
        console.log(_output);
      }
    }

    L._startSingleLoad(0);
  }
  /**	
  	@memberOf Loader
  	@method getAllContent
  	@returns {array}
  		An array of LoaderData Objects with relevant loading information (like an Event Object).  
  		Access the loaded content via the property 'dataRaw': an image, raw Json, raw XML, or font name
  	@desc
  		Get all loaded content from the Loader and all nested Loaders
  	@example
  		var myLoader = new Loader(['img1.jpg', 'img2.jpg', 'img3.jpg'], { onComplete:handleComplete });
  		myLoader.load();
  			function handleComplete( target ) {
  			var myContent = target.getAllContent();
  			console.log( "Content found:", myContent );
  		}
  */


  getAllContent() {
    let _found = [];

    function searchSubLoader(content) {
      for (let i = 0; i < content.length; i++) {
        //console.log( "   -> sub:", content[i] )
        if (content[i] instanceof Loader) {
          searchSubLoader(content[i].content);
        } else {
          _found.push(content[i]);
        }
      }
    }

    searchSubLoader(this.content);

    if (_found.length < 1) {
      console.log('No Content found');
    }

    return _found;
  }
  /**	
  	@memberOf Loader
  	@method getAllContentRaw
  	@returns {array}
  		An array of only the raw data: an image, raw Json, raw XML, or font name
  	@desc
  		Get all raw loaded content from the Loader and all nested Loaders, no LoaderData Objects
  	@example
  		var myLoader = new Loader(['img1.jpg', 'img2.jpg', 'img3.jpg'], { onComplete:handleComplete });
  		myLoader.load();
  			function handleComplete( target ) {
  			var myContent = target.getAllContentRaw();
  			console.log( "Content found:", myContent );
  		}
  */


  getAllContentRaw() {
    let _content = this.getAllContent();

    for (let i = 0; i < _content.length; i++) {
      _content[i] = _content[i].dataRaw;
    }

    return _content;
  }
  /**	
  	@memberOf Loader
  	@method getLoader
  	@param {string} id
  		the string optionally assigned to the 'name' property or the variable assigned to the Loader instance
  	@returns {Loader}
  	@desc
  		Get the Loader instance from the Loader or any nested Loader
  	@example
  		var mainLoader = new Loader({ name:'main', onComplete:handleLoadComplete });
  		mainLoader.add( new Loader( [ 'font1.ttf', 'font2.ttf' ], { name:'load_fonts', prepend:adParams.commonPath + 'fonts/' }) );
  		mainLoader.add( new Loader( ['Ad_Data.js', 'NetUtils.js'], { name:'load_js', prepend:adParams.corePath + 'utils/' }) );
  		mainLoader.load();
  			function handleLoadComplete( target ) {
  			var fontLoader = target.getLoader('load_fonts');
  		}
  */


  getLoader(id) {
    let _found = null;

    function searchSubLoader(content) {
      for (let i = 0; i < content.length; i++) {
        //console.log( "   -> sub:", content[i] )
        if (content[i] instanceof Loader) {
          if (content[i] && (content[i].name === id || content[i] === id)) {
            _found = content[i];
          } else {
            searchSubLoader(content[i].content);
          }
        }
      }
    }

    searchSubLoader(this.content);

    if (!_found) {
      console.log('No Loader found of that name');
    }

    return _found;
  }
  /* ------------------------------------------------------------------------------------------------------------- */
  // PRIVATE METHODS


  _addSingleLoad(url, fbaOverwrite) {
    // console.log('_addSingleLoad()', url, fbaOverwrite)
    const L = this; // fbaOverwrite is an array [ file name, file extension ]

    const fileType = fbaOverwrite ? fbaOverwrite[1] : L.fileType || _lib_mixin_LoaderUtils_js__WEBPACK_IMPORTED_MODULE_2__["getFileType"](url);
    let loaderType; // console.log('\t fileType:', fileType)

    switch (fileType) {
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'png':
      case 'svg':
        loaderType = _lib_single_ImageLoader_js__WEBPACK_IMPORTED_MODULE_3__["default"];
        break;

      case 'ttf':
      case 'woff':
        loaderType = _lib_single_FontLoader_js__WEBPACK_IMPORTED_MODULE_6__["default"];
        break;

      case 'json':
      case 'fba':
      case 'bin':
      case 'binary':
      case 'svg+xml':
        loaderType = _lib_single_DataLoader_js__WEBPACK_IMPORTED_MODULE_5__["default"];
        break;

      default:
        loaderType = _lib_single_InlineLoader_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    } // either the data as binary OR the file path and name


    const urlChoice = fbaOverwrite ? url : L.prepend + url; // console.log('\t url:', url, '| loaderType:', loaderType)

    var singleLoader = new loaderType(urlChoice, {
      scope: L,
      platformGetUrl: L.platformGetUrl,
      onComplete: L._handleSingleLoadComplete,
      onFail: L._handleFail,
      fileType: fileType,
      cacheBuster: L.cacheBuster,
      crossOrigin: L.crossOrigin
    }); // console.log('\t singleLoader:', singleLoader)
    // from fba, the files are binary, so there is
    // no file name to reference so set it here

    if (fbaOverwrite) {
      singleLoader.fileName = fbaOverwrite[0];
    }

    singleLoader.queueIndex = L._total;
    L._queue[L._total] = singleLoader;
    L._total++; // console.log(L._total, L._queue)
  }

  _addSubLoad(loader) {
    const L = this; //console.log(L.name, '_addSubLoad()')

    loader.onComplete = L._handleSingleLoadComplete.bind(L);
    loader.onProgress = L._handleProgress.bind(L);
    loader.onFail = L._handleFail; //loader.platformGetUrl = L.platformGetUrl;

    loader.queueIndex = L._total;
    L._queue[L._total] = loader;
    L._total++;
  }

  _addFbaSubLoads(loader) {
    // console.log("_addFbaSubLoads()", loader)
    // Conversion between uint8s and uint32s.
    let uint8 = new Uint8Array(4);
    let uint32 = new Uint32Array(uint8.buffer); // start after = signature(8 bytes) + IHDR(25 bytes) + fbAc(16 bytes total, but only 11: size,type,content-1 )

    let idx = 44;
    const chunkTotal = new Uint8Array(loader.dataRaw, idx, 1)[0]; //console.log( 'number of images as chunks:', chunkTotal )
    // skip over rest of fbAc chunk: count value byte + CRC 4 bytes

    idx += 5;

    for (let i = 0; i < chunkTotal; i++) {
      // size, type, content, crc
      // get the size of next chunk as on UintArray
      let sizeOfChunk = new Uint8Array(loader.dataRaw, idx, 4); // Read the length of the current chunk, which is stored as a Uint32.
      // this one has to be a loop, as values get assigned to uint8, that changes buffer of uint32
      // also, the values must be set reversed, henced the count down loop

      let up = 4;

      for (var k = 0; k < 4; k++) {
        //console.log( k, up, sizeOfChunk[k] )
        uint8[--up] = sizeOfChunk[k];
      } // all chunk data NOT including the type


      let length = uint32[0];
      idx += 7; // Get the chunk type in ASCII, only last character really matters

      let type = String.fromCharCode.apply(String, new Uint8Array(loader.dataRaw, idx++, 1)); // console.log('\ttype:', type, '\tlength:', length)

      let fileNameLengthArray = new Uint8Array(loader.dataRaw, idx + 3, 1);
      let fileNameLength = fileNameLengthArray[0] || 0; // default to zero incase array fails? maybe unnecessary

      let nameBuffer = new Uint8Array(loader.dataRaw, idx + 4, fileNameLength);
      let fileName = String.fromCharCode.apply(String, nameBuffer); // first add to the file name length 4 bytes: file name length byte count

      fileNameLength += 4; // offset the array start and length by the file name length

      let chunkData = new Uint8Array(loader.dataRaw, idx + fileNameLength, length - fileNameLength); // NOTE: ArrayBuffer.slice() does not exist in IE10, so have to do it manually inline
      //var chunkData = new Uint8Array(chunk.buffer.slice(4))
      // skip over the content AND skip over the CRC value by incrementing by 4 bytes

      idx += length + 4;
      let fileNameSplit = fileName.split('.'); //var blobFileType = '';// 'application/octet-stream';

      let blobFileType;

      if (type === 'f') {
        blobFileType = 'application/' + (fileNameSplit[1] === 'ttf' ? 'x-font-ttf' : `font-${fileNameSplit[1]}`);
      } else {
        blobFileType = 'image/' + (fileNameSplit[1] == 'svg' ? 'svg+xml' : fileNameSplit[1]);
      }

      let blob = new Blob([chunkData], {
        type: blobFileType
      });
      let url = URL.createObjectURL(blob); // url will be ~ blob:32c3c7af-ef04-414f-a073-685602fe8a28
      // console.log(fileNameSplit, blobFileType, url)

      this._addSingleLoad(url, fileNameSplit);
    }
  }

  _startSingleLoad(i) {
    const L = this;
    const _inst = L._queue[i]; // console.log(L.name, '_startSingleLoad()', 'index:', i, 'total:', L._total)

    if (L._total == 0) {
      // fire a complete because there are no requests
      L._handleComplete();
    } else {
      if (i < L._total) {
        // console.log( L.name, '_startSingleLoad() ->', _inst )
        if (!(_inst instanceof Loader)) {
          //console.log( _inst.name, 'is a subloader' )
          //} else {
          if (i < L._total - 1) {
            L._startLoadTimeOut(++i);
          }
        }

        _inst.load();
      }
    }
  }

  _startLoadTimeOut(i) {
    const L = this;
    setTimeout(() => {
      L._startSingleLoad(i);
    }, 10);
  }
  /* ------------------------------------------------------------------------------------------------------------- */
  // EVENT HANDLERS


  _handleSingleLoadComplete(target) {
    const L = this; // console.log('_handleSingleLoadComplete(), target:', target)

    L.content[target.queueIndex] = target;
    delete L._queue[target.queueIndex];

    L._handleProgress(); // is a nested Loader


    if (target.url == undefined) {
      //console.log( '"' + L.name + '" nested Loader "' + target.name + '" Complete' );
      if (target.queueIndex < L._total - 1) {
        L._startLoadTimeOut(target.queueIndex + 1);
      }
    }
  }

  _handleProgress() {
    const L = this;
    const _length = L.content.length;
    let _count = 0;

    for (let i = 0; i < _length; i++) {
      if (L.content[i]) _count++;
    } // console.log(L.name, '_handleProgress()', '_count:', _count, 'total:', L._total)


    const _consecutive = _count;
    let _subProgress = 0;

    if (_count < L._total && L._queue[_count]) {
      _subProgress = L._queue[_count].progress / L._total || 0;
    }

    L.progress = _consecutive / L._total + _subProgress;
    L.rawProgress = _count / L._total + _subProgress;
    L.onProgress.call(L.scope, L); //console.log( 'progress')

    if (_count >= L._total) {
      //console.log( 'Loader calling _handleComplete()')
      L._handleComplete();
    }
  }

  _handleComplete() {
    const L = this; // console.log('Loader "' + L.name + '" is Complete')

    L.onComplete.call(L.scope, L);
  }

}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderBase.js":
/*!**********************************************************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderBase.js ***!
  \**********************************************************************************************************************/
/*! exports provided: LoaderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderBase", function() { return LoaderBase; });
const LoaderBase = superclass => class extends superclass {
  constructor(...args) {
    super(...args);
    const arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};
    const L = this;

    L.onComplete = arg.onComplete || function () {};

    L.onFail = arg.onFail || function () {};

    L.onProgress = arg.onProgress || function () {};

    L.name = arg.name || '';
    L.scope = arg.scope || L;
    L.dataRaw;
    L.cacheBuster = arg.cacheBuster || false;
    L._failCalled = false;
  }

  _handleFail() {
    const L = this; // console.log( 'LoaderBase._handleFail()' )

    if (!L._failCalled) {
      L._failCalled = true;
      L.onFail.call(L.scope, L);
      console.log('Loader "' + L.name + '" Fail:', L.url);
    }
  }

};

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderSource.js":
/*!************************************************************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderSource.js ***!
  \************************************************************************************************************************/
/*! exports provided: LoaderSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderSource", function() { return LoaderSource; });
/* harmony import */ var _LoaderUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoaderUtils.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderUtils.js");
/* harmony import */ var ad_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ad-global */ "ad-global");
/* harmony import */ var ad_global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ad_global__WEBPACK_IMPORTED_MODULE_1__);


const LoaderSource = superclass => class extends superclass {
  constructor(...args) {
    super(...args);
    const arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};
    const L = this;
    L.url = Object(ad_global__WEBPACK_IMPORTED_MODULE_1__["matchProtocolTo"])(arguments[0] || '');

    if (arg.platformGetUrl) {
      L.platformGetUrl = arg.platformGetUrl;
      L.url = arg.platformGetUrl(L.url);
    }

    L.fileName = arg.id === undefined ? _LoaderUtils_js__WEBPACK_IMPORTED_MODULE_0__["getFileName"](L.url) : arg.id;
    L.fileType = arg.fileType || _LoaderUtils_js__WEBPACK_IMPORTED_MODULE_0__["getFileType"](L.url);
  }

};

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderTicker.js":
/*!************************************************************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderTicker.js ***!
  \************************************************************************************************************************/
/*! exports provided: LoaderTicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderTicker", function() { return LoaderTicker; });
/* harmony import */ var _LoaderUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoaderUtils.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderUtils.js");

const LoaderTicker = superclass => class extends superclass {
  constructor(...args) {
    super(...args);
  }

  _setTicker(args) {
    const L = this;
    let node = document.createElement('div');
    node.innerHTML = args.content;
    node.style.cssText = args.css || '';
    document.body.appendChild(node);
    const width = args.width != undefined ? args.width : node.offsetWidth;
    node.style.fontFamily = args.font || '';

    let _timeOut = setTimeout(() => {
      clearInterval(_interval);

      L._handleFail();
    }, 5000);

    let _interval = setInterval(() => {
      if (node.offsetWidth != width) {
        clearTimeout(_timeOut);
        clearInterval(_interval);

        L._handleTickerComplete(node);
      }
    }, 10);
  }

  _removeTickerNode(node) {
    node.parentNode.removeChild(node);
  }

};

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderUtils.js":
/*!***********************************************************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderUtils.js ***!
  \***********************************************************************************************************************/
/*! exports provided: createXMLHttpRequest, getFileName, getFontName, getFileType, getFullUrl, getUrlPrepend, getParamsFromData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createXMLHttpRequest", function() { return createXMLHttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileName", function() { return getFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontName", function() { return getFontName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileType", function() { return getFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullUrl", function() { return getFullUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlPrepend", function() { return getUrlPrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParamsFromData", function() { return getParamsFromData; });
/* harmony import */ var ad_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ad-global */ "ad-global");
/* harmony import */ var ad_global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ad_global__WEBPACK_IMPORTED_MODULE_0__);

function createXMLHttpRequest() {
  try {
    return new XMLHttpRequest();
  } catch (e) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP');
  } catch (e) {}

  console.warn('XMLHttpRequest not supported');
  return null;
}
function getFileName(url) {
  let extension = url.lastIndexOf('.');
  let directory = url.lastIndexOf('/') + 1;
  if (directory > extension) extension = undefined;
  return url.substring(directory, extension);
}
function getFontName(url) {
  return url.substring(url.lastIndexOf('/') + 1, url.indexOf('.'));
}
function getFileType(url) {
  url = url || '';

  const _index = url.indexOf('?');

  if (_index > -1) {
    url = url.substr(0, _index);
  }

  const _split = url.match(/[^\\]*\.(\w+)$/);

  const _base64 = url.match(/image\/(jpeg|jpg|png)/);

  const _type = _split ? _split[1] : _base64 ? _base64[1] : 'unknown';

  return _type;
}
function getFullUrl(prepend, file, platformGetUrl) {
  const _prepend = getUrlPrepend(prepend);

  let _url = Object(ad_global__WEBPACK_IMPORTED_MODULE_0__["matchProtocolTo"])(_prepend + _file);

  if (platformGetUrl) {
    _url = platformGetUrl(_url);
  }

  return url;
}
function getUrlPrepend(path) {
  return path ? path.replace(/\/?$/, '/') : '';
}
function getParamsFromData(query) {
  if (typeof query === 'string') {
    /*
     * TODO - check the string is formatted correctly?
     */
    return query;
  } else {
    let queryString = '';

    for (let prop in query) {
      console.log('      prop =', prop);
      queryString += prop + '=' + query[prop] + '&';
    }

    return queryString.substr(0, queryString.length - 1);
  }
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/MixinBuilder.js":
/*!************************************************************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/MixinBuilder.js ***!
  \************************************************************************************************************************/
/*! exports provided: mix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
let mix = superclass => new MixinBuilder(superclass);

class MixinBuilder {
  constructor(superclass) {
    this.superclass = superclass;
  }

  with(...mixins) {
    return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  }

}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/DataLoader.js":
/*!***********************************************************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/DataLoader.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataLoader; });
/* harmony import */ var _mixin_MixinBuilder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/MixinBuilder.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/MixinBuilder.js");
/* harmony import */ var _mixin_LoaderBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixin/LoaderBase.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderBase.js");
/* harmony import */ var _mixin_LoaderSource_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixin/LoaderSource.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderSource.js");
/* harmony import */ var _mixin_LoaderUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixin/LoaderUtils.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderUtils.js");





class Blank {}

class DataLoader extends Object(_mixin_MixinBuilder_js__WEBPACK_IMPORTED_MODULE_0__["mix"])(Blank).with(_mixin_LoaderBase_js__WEBPACK_IMPORTED_MODULE_1__["LoaderBase"], _mixin_LoaderSource_js__WEBPACK_IMPORTED_MODULE_2__["LoaderSource"]) {
  constructor(...args) {
    super(...args);
    let arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};
    const D = this;
    D.method = (arg.method || 'get').toLowerCase();
    D.query = arg.query || null;
    D.responseType = arg.responseType || null;
  }

  load() {
    const D = this; // console.log('DataLoader "' + D.name + '" requesting:\n\t->', D.url)

    let queryString = null;
    const isPost = D.method === 'post';
    D.req = _mixin_LoaderUtils_js__WEBPACK_IMPORTED_MODULE_3__["createXMLHttpRequest"]();
    if (D.responseType != undefined) D.req.responseType = D.responseType;
    let url = D.url;

    if (D.query) {
      queryString = _mixin_LoaderUtils_js__WEBPACK_IMPORTED_MODULE_3__["getParamsFromData"](D.query);
      encodeURIComponent(queryString);

      if (!isPost) {
        url += '?' + queryString;
        queryString = null;
      }
    }

    if (D.cacheBuster) {
      url += D.query && !isPost ? '&' : '?';
      url += 'cb=' + new Date().getTime();
    }

    D.req.onreadystatechange = D._handleStateChange.bind(D);
    D.req.open(D.method, url, true); // Set Mime Type
    // NOTE: responseType has to be set AFTER the XmlHttpRequest.open() is called because IE is terrible

    switch (D.fileType) {
      case 'xml':
        if (D.req.overrideMimeType) D.req.overrideMimeType('text/xml');
        break;

      case 'json':
        if (D.req.overrideMimeType) D.req.overrideMimeType('application/json');
        break;

      case 'fba':
      case 'bin':
      case 'binary':
        D.responseType = D.req.responseType = 'arraybuffer'; //D.req.overrideMimeType( 'text/plain charset=x-user-defined' )

        break;
    }

    if (D.method === 'post') {
      D.req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }

    D.req.send(queryString);
  }

  _handleStateChange(target) {
    const D = this;

    switch (D.req.readyState) {
      case 3:
        if (this.req.status == 200) {
          D.dataRaw = D.responseType ? D.req.response : D.req.responseText;

          D._handleProgress(D);
        }

        break;

      case 4:
        if (D.req.status == 200) {
          D.dataRaw = D.responseType ? D.req.response : D.req.responseText;

          D._handleComplete(D);
        } else {
          D._handleFail({
            target: target
          });
        }

        break;
    }
  }

  _handleProgress() {
    const D = this;
    D.onProgress.call(D.scope, D);
  }

  _handleComplete() {
    const D = this; // console.log('DataLoader "' + D.name + '" is Complete')

    D.onComplete.call(D.scope, D);
  }

}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/FontLoader.js":
/*!***********************************************************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/FontLoader.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FontLoader; });
/* harmony import */ var _mixin_MixinBuilder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/MixinBuilder.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/MixinBuilder.js");
/* harmony import */ var _mixin_LoaderBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixin/LoaderBase.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderBase.js");
/* harmony import */ var _mixin_LoaderSource_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixin/LoaderSource.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderSource.js");
/* harmony import */ var _mixin_LoaderTicker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixin/LoaderTicker.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderTicker.js");





class Blank {}

class FontLoader extends Object(_mixin_MixinBuilder_js__WEBPACK_IMPORTED_MODULE_0__["mix"])(Blank).with(_mixin_LoaderBase_js__WEBPACK_IMPORTED_MODULE_1__["LoaderBase"], _mixin_LoaderSource_js__WEBPACK_IMPORTED_MODULE_2__["LoaderSource"], _mixin_LoaderTicker_js__WEBPACK_IMPORTED_MODULE_3__["LoaderTicker"]) {
  constructor(...args) {
    super(...args);
  }

  load() {
    const F = this; // console.log('FontLoader "' + F.name + '" requesting:\n\t->', F.url)

    F.fileName = F.fileName.split('.')[0];
    let format = 'truetype';

    if (F.fileType.match(/woff/)) {
      format = F.fileType;
    }

    const assembledFontRule = "@font-face { font-family: '" + F.fileName + "'; src: url(" + F.url + ") format('" + format + "'); }";
    let getSheet = document.getElementById('RED_fontStyleSheet');

    if (getSheet) {
      getSheet.innerHTML += assembledFontRule;
    } else {
      let styleScript = document.createElement('style');
      styleScript.type = 'text/css';
      styleScript.media = 'screen';
      styleScript.id = 'RED_fontStyleSheet';
      styleScript.appendChild(document.createTextNode(assembledFontRule));
      document.getElementsByTagName('head')[0].appendChild(styleScript);
    }

    F._setTicker({
      content: ' !"\\#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~',
      css: 'position:absolute; top:-1000px; font-size:100px; font-family:san-serif; font-variant:normal; font-style:normal; font-weight:normal; letter-spacing:0; white-space:nowrap;',
      font: F.fileName
    });
  }

  _handleTickerComplete(node) {
    const F = this; // added timeout to leave a rendered textfield on stage for initial textfields
    // to return proper offsetWidth values

    setTimeout(function () {
      // leave the test textfield temporarily to allow dom
      // to have a reference to rendered characters. hack?
      F._removeTickerNode(node);
    }, 300);

    F._handleComplete();
  }

  _handleComplete(event) {
    const F = this; // console.log('FontLoader "' + F.name + '" is Complete')

    F.dataRaw = F.fileName;
    F.onComplete.call(F.scope, F);
  }

}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/ImageLoader.js":
/*!************************************************************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/ImageLoader.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageLoader; });
/* harmony import */ var _mixin_MixinBuilder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/MixinBuilder.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/MixinBuilder.js");
/* harmony import */ var _mixin_LoaderBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixin/LoaderBase.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderBase.js");
/* harmony import */ var _mixin_LoaderSource_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixin/LoaderSource.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderSource.js");
/* harmony import */ var _mixin_LoaderTicker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixin/LoaderTicker.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderTicker.js");





class Blank {}

class ImageLoader extends Object(_mixin_MixinBuilder_js__WEBPACK_IMPORTED_MODULE_0__["mix"])(Blank).with(_mixin_LoaderBase_js__WEBPACK_IMPORTED_MODULE_1__["LoaderBase"], _mixin_LoaderSource_js__WEBPACK_IMPORTED_MODULE_2__["LoaderSource"], _mixin_LoaderTicker_js__WEBPACK_IMPORTED_MODULE_3__["LoaderTicker"]) {
  constructor(...args) {
    super(...args);
    let arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {}; // used when only needing to render, such as writing into the DOM as markup <svg>

    this.renderOnly = !!arg.renderOnly;
    this.crossOrigin = arg.crossOrigin;
  }

  load() {
    const I = this;

    if (I.renderOnly) {
      I._setTicker({
        content: I.url,
        width: 0
      });
    } else {
      let img = new Image();
      img.id = I.fileName;
      img.crossOrigin = I.crossOrigin;
      img.onload = I._handleComplete.bind(I);
      img.onerror = I._handleFail;
      img.src = I.url;
    }
  }

  _handleComplete(event) {
    const I = this; // console.log('ImageLoader "' + I.name + '" is Complete')

    I.dataRaw = event.target;
    I.onComplete.call(I.scope, I);
  }

}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/InlineLoader.js":
/*!*************************************************************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/single/InlineLoader.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InlineLoader; });
/* harmony import */ var _mixin_MixinBuilder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/MixinBuilder.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/MixinBuilder.js");
/* harmony import */ var _mixin_LoaderBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixin/LoaderBase.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderBase.js");
/* harmony import */ var _mixin_LoaderSource_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixin/LoaderSource.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/node_modules/@ff0000-ad-tech/ad-load/lib/mixin/LoaderSource.js");




class Blank {}

class InlineLoader extends Object(_mixin_MixinBuilder_js__WEBPACK_IMPORTED_MODULE_0__["mix"])(Blank).with(_mixin_LoaderBase_js__WEBPACK_IMPORTED_MODULE_1__["LoaderBase"], _mixin_LoaderSource_js__WEBPACK_IMPORTED_MODULE_2__["LoaderSource"]) {
  constructor(...args) {
    super(...args);
  }

  load() {
    const I = this;
    let elem;

    if (I.fileType == 'css') {
      elem = I._createCssLink();
    } else if (I.fileType == 'html') {
      elem = I._createHtmlLink();
    } else {
      elem = I._createScript();
    }

    elem.charset = 'utf-8';
    elem.onload = I._handleComplete.bind(I);
    elem.onerror = I._handleFail;
    I.fileType == 'css' || I.fileType == 'html' ? elem.href = this.url : elem.src = I.url;
    document.getElementsByTagName('head')[0].appendChild(elem);
  }

  _createCssLink() {
    let elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.type = 'text/css';
    return elem;
  }

  _createHtmlLink() {
    let elem = document.createElement('link');
    elem.rel = 'import'; // elem.async = ''

    return elem;
  }

  _createScript() {
    let elem = document.createElement('script');
    elem.type = 'text/javascript';
    return elem;
  }

  _handleComplete(event) {
    const I = this; // console.log('InlineLoader "' + I.name + '" is Complete')

    I.dataRaw = event.target;
    I.onComplete.call(I.scope, I);
  }

}

/***/ }),

/***/ "./1-build/node_modules/preact/dist/preact.module.js":
/*!***********************************************************!*\
  !*** ./1-build/node_modules/preact/dist/preact.module.js ***!
  \***********************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = {};

  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) void 0 === f[o] && (f[o] = n.defaultProps[o]);
  return h(n, f, i, t, null);
}

function h(l, u, i, t, o) {
  var r = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == o ? ++n.__v : o
  };
  return null != n.vnode && n.vnode(r), r;
}

function y() {
  return {
    current: null
  };
}

function p(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function _(n, l) {
  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? _(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function k(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !g.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(g);
}

function g() {
  for (var n; g.__r = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, o, r;
    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s({}, t)).__v = t.__v + 1, $(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _(t) : o, t.__h), j(u, t), t.__e != o && w(t)));
  });
}

function m(n, l, u, i, t, o, r, c, s, v) {
  var y,
      d,
      w,
      k,
      g,
      m,
      x,
      P = i && i.__k || e,
      C = P.length;

  for (s == f && (s = null != r ? r[0] : C ? _(i, 0) : null), u.__k = [], y = 0; y < l.length; y++) if (null != (k = u.__k[y] = null == (k = l[y]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? h(null, k, null, null, k) : Array.isArray(k) ? h(p, {
    children: k
  }, null, null, null) : k.__b > 0 ? h(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (w = P[y]) || w && k.key == w.key && k.type === w.type) P[y] = void 0;else for (d = 0; d < C; d++) {
      if ((w = P[d]) && k.key == w.key && k.type === w.type) {
        P[d] = void 0;
        break;
      }

      w = null;
    }
    $(n, k, w = w || f, t, o, r, c, s, v), g = k.__e, (d = k.ref) && w.ref != d && (x || (x = []), w.ref && x.push(w.ref, null, k), x.push(d, k.__c || g, k)), null != g ? (null == m && (m = g), "function" == typeof k.type && null != k.__k && k.__k === w.__k ? k.__d = s = b(k, s, n) : s = A(n, k, w, P, r, g, s), v || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && w.__e == s && s.parentNode != n && (s = _(w));
  }

  if (u.__e = m, null != r && "function" != typeof u.type) for (y = r.length; y--;) null != r[y] && a(r[y]);

  for (y = C; y--;) null != P[y] && ("function" == typeof u.type && null != P[y].__e && P[y].__e == u.__d && (u.__d = _(i, y + 1)), L(P[y], P[y]));

  if (x) for (y = 0; y < x.length; y++) I(x[y], x[++y], x[++y]);
}

function b(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? b(t, l, u) : A(u, t, t, n.__k, null, t.__e, l));

  return l;
}

function x(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    x(n, l);
  }) : l.push(n)), l;
}

function A(n, l, u, i, t, o, r) {
  var f, e, c;
  if (void 0 !== l.__d) f = l.__d, l.__d = void 0;else if (t == u || o != r || null == o.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(o), f = null;else {
    for (e = r, c = 0; (e = e.nextSibling) && c < i.length; c += 2) if (e == o) break n;

    n.insertBefore(o, r), f = r;
  }
  return void 0 !== f ? f : o.nextSibling;
}

function P(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || z(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || z(n, o, l[o], u[o], i);
}

function C(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
}

function z(n, l, u, i, t) {
  var o, r, f;
  if (t && "className" == l && (l = "class"), "style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || C(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || C(n.style, l, u[l]);
    }
  } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), (r = l.toLowerCase()) in n && (l = r), l = l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, f = o ? T : N, u ? i || n.addEventListener(l, f, o) : n.removeEventListener(l, f, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && "download" !== l && "href" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type + !1](n.event ? n.event(l) : l);
}

function T(l) {
  this.l[l.type + !0](n.event ? n.event(l) : l);
}

function $(l, u, i, t, o, r, f, e, c) {
  var a,
      v,
      h,
      y,
      _,
      w,
      k,
      g,
      b,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (g = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? k = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new d(g, x), v.constructor = P, v.render = M), b && b.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(g, v.__s))), y = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
          v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v);
          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(y, _, w);
        });
      }
      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(y, _)), A = null != a && a.type === p && null == a.key ? a.props.children : a, m(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), v.base = u.__e, u.__h = null, v.__h.length && f.push(v), k && (v.__E = v.__ = null), v.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = H(i.__e, u, i, t, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), n.__e(l, u, i);
  }
}

function j(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function H(n, l, u, i, t, o, r, c) {
  var s,
      a,
      v,
      h,
      y,
      p = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
      is: d.is
    }), o = null, c = !1;
  }

  if (null === l.type) p === d || c && n.data === d || (n.data = d);else {
    if (null != o && (o = e.slice.call(n.childNodes)), v = (p = u.props || f).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
    }

    P(n, d, p, t, c), h ? l.__k = [] : (s = l.props.children, m(n, Array.isArray(s) ? s : [s], l, u, i, "foreignObject" !== l.type && t, o, r, f, c)), c || ("value" in d && void 0 !== (s = d.value) && (s !== n.value || "progress" === l.type && !s) && z(n, "value", s, p.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && z(n, "checked", s, p.checked, !1));
  }
  return n;
}

function I(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function L(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || I(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && L(t[r], u, i);
  null != o && a(o);
}

function M(n, l, u) {
  return this.constructor(n, u);
}

function O(l, u, i) {
  var t, r, c;
  n.__ && n.__(l, u), r = (t = i === o) ? null : i && i.__k || u.__k, l = v(p, null, [l]), c = [], $(u, (t ? u : i || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : r ? null : u.childNodes.length ? e.slice.call(u.childNodes) : null, c, i || f, t), j(c, l);
}

function S(n, l) {
  O(n, l, o);
}

function q(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = s({}, n.props);

  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  return null != u && (f.children = u), h(n.type, f, i || n.key, t || n.ref, null);
}

function B(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(k);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

n = {
  __e: function (n, l) {
    for (var u, i, t, o = l.__h; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return l.__h = o, u.__E = u;
    } catch (l) {
      n = l;
    }

    throw n;
  },
  __v: 0
}, l = function (n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
}, d.prototype.render = p, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, o = f, r = 0;


/***/ }),

/***/ "./1-build/node_modules/preact/hooks/dist/hooks.module.js":
/*!****************************************************************!*\
  !*** ./1-build/node_modules/preact/hooks/dist/hooks.module.js ***!
  \****************************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return q; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./1-build/node_modules/preact/dist/preact.module.js");

var t,
    u,
    r,
    o = 0,
    i = [],
    c = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
    f = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
    e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
    a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
    v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;

function m(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function l(n) {
  return o = 1, p(w, n);
}

function p(n, r, o) {
  var i = m(t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}

function y(r, o) {
  var i = m(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}

function h(r, o) {
  var i = m(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
}

function s(n) {
  return o = 5, d(function () {
    return {
      current: n
    };
  }, []);
}

function _(n, t, u) {
  o = 6, h(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function d(n, u) {
  var r = m(t++, 7);
  return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}

function A(n, t) {
  return o = 8, d(function () {
    return n;
  }, t);
}

function F(n) {
  var r = u.context[n.__c],
      o = m(t++, 9);
  return o.__c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function T(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u ? u(t) : t);
}

function q(n) {
  var r = m(t++, 10),
      o = l();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}

function x() {
  i.forEach(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
    } catch (u) {
      t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
    }
  }), i = [];
}

preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  u = null, c && c(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  f && f(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  e && e(t);
  var o = t.__c;
  o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((r = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    b && (t = requestAnimationFrame(u));
  })(x)), u = void 0;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || j(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
    }
  }), a && a(t, u);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  v && v(t);
  var u = t.__c;
  if (u && u.__H) try {
    u.__H.__.forEach(g);
  } catch (t) {
    preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(t, u.__v);
  }
};
var b = "function" == typeof requestAnimationFrame;

function g(n) {
  var t = u;
  "function" == typeof n.__c && n.__c(), u = t;
}

function j(n) {
  var t = u;
  n.__c = n.__(), u = t;
}

function k(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}

function w(n, t) {
  return "function" == typeof t ? t(n) : t;
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./1-build/300x250/components/Ad/styles.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js!./1-build/300x250/components/Ad/styles.scss ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.ad {\n  position: relative;\n  width: 300px;\n  height: 250px;\n  border: 1px solid #303030;\n  overflow: hidden;\n}\n.ad__cta {\n  top: 214px;\n  left: 160px;\n  opacity: 0;\n  position: absolute;\n  height: 23px;\n  border-radius: 50em;\n  background: white;\n  padding: 2px 10px;\n  color: #004c97;\n  font-family: \"JosefinSans-Medium\";\n  font-size: 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s;\n}\n.ad__cta:hover {\n  background-color: #ffa300;\n  cursor: pointer;\n}\n.ad .logo {\n  position: absolute;\n  width: 60px;\n  height: 31px;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.ad .main-curve {\n  position: absolute;\n  height: 104px;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  bottom: 0;\n}\n.ad .main-curve__curve {\n  width: 100%;\n  height: 22.8px;\n}\n.ad .main-curve__fill {\n  width: 100%;\n  background: #004c97;\n  flex-grow: 1;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./1-build/300x250/components/CopyBlock/CopyBlock.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js!./1-build/300x250/components/CopyBlock/CopyBlock.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".copyblock {\n  width: 100%;\n  position: relative;\n  height: 30px;\n  overflow: hidden;\n  top: 117px;\n  display: flex;\n  justify-content: center;\n}\n.copyblock__copyline {\n  width: 100%;\n  position: absolute;\n  text-align: center;\n  color: white;\n  font-family: \"JosefinSans-Bold\";\n  font-size: 16px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./1-build/300x250/components/Slideshow/Slideshow.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js!./1-build/300x250/components/Slideshow/Slideshow.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slideshow {\n  width: 100px;\n  height: 50px;\n  background: green;\n  position: relative;\n}\n.slideshow img {\n  position: absolute;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "ad-global":
/*!*************************!*\
  !*** external "window" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window;

/***/ })

/******/ });
//# sourceMappingURL=build.bundle.js.map