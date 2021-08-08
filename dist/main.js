/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"../node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ \"../node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0__(function () {\n  /* Nav toggle on mobile\r\n  ================================================================*/\n  var navToggle = jquery__WEBPACK_IMPORTED_MODULE_0__('#navToggle');\n  var nav = jquery__WEBPACK_IMPORTED_MODULE_0__('#nav');\n  navToggle.on(\"click\", function (event) {\n    event.preventDefault();\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").toggleClass('show-nav');\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass('active');\n    nav.toggleClass(\"show\");\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0__(window).resize(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").removeClass('show-nav');\n    navToggle.removeClass('active');\n    nav.removeClass('show');\n  });\n  var intro = jquery__WEBPACK_IMPORTED_MODULE_0__(\"#intro\");\n  var header = jquery__WEBPACK_IMPORTED_MODULE_0__(\"#header\");\n  var introH = intro.innerHeight();\n  var headerH = header.innerHeight();\n  var scrollTop = jquery__WEBPACK_IMPORTED_MODULE_0__(window).scrollTop();\n  /* Header scroll\r\n  ================================================================*/\n\n  headerScroll();\n  jquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"scroll resize\", function () {\n    headerScroll();\n  });\n\n  function headerScroll() {\n    introH = intro.innerHeight();\n    headerH = header.innerHeight();\n    scrollTop = jquery__WEBPACK_IMPORTED_MODULE_0__(this).scrollTop();\n\n    if (scrollTop >= introH - headerH) {\n      header.addClass(\"header--dark\");\n    } else {\n      header.removeClass(\"header--dark\");\n    }\n  }\n  /* Smooth scroll to sections\r\n  ================================================================*/\n\n\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"[data-scroll]\").on(\"click\", function (event) {\n    event.preventDefault();\n    var scrollEl = jquery__WEBPACK_IMPORTED_MODULE_0__(this).data(\"scroll\");\n    var scrollElPosition = jquery__WEBPACK_IMPORTED_MODULE_0__(scrollEl).offset().top;\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").removeClass('show-nav');\n    navToggle.removeClass('active');\n    nav.removeClass('show');\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\"html, body\").animate({\n      scrollTop: scrollElPosition - headerH\n    }, 500);\n  });\n  /* ScrollSpy\r\n  ================================================================*/\n\n  var windowHeight = jquery__WEBPACK_IMPORTED_MODULE_0__(window).height();\n  scrollSpy(scrollTop);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"scroll\", function () {\n    scrollTop = jquery__WEBPACK_IMPORTED_MODULE_0__(this).scrollTop();\n    scrollSpy(scrollTop);\n  });\n\n  function scrollSpy(scrollTop) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\"[data-scrollspy]\").each(function () {\n      var $this = jquery__WEBPACK_IMPORTED_MODULE_0__(this);\n      var sectionId = jquery__WEBPACK_IMPORTED_MODULE_0__(this).data(\"scrollspy\");\n      var sectionOffset = $this.offset().top;\n      sectionOffsetForScrollSpy = sectionOffset - windowHeight * 0.3;\n\n      if (scrollTop >= sectionOffsetForScrollSpy) {\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\"#nav [data-scroll]\").removeClass(\"active\");\n        jquery__WEBPACK_IMPORTED_MODULE_0__('#nav [data-scroll=\"' + sectionId + '\"]').addClass(\"active\");\n      }\n\n      if (scrollTop <= headerH) {\n        jquery__WEBPACK_IMPORTED_MODULE_0__(\"#nav [data-scroll]\").removeClass(\"active\");\n      }\n    });\n  }\n  /* Modal\r\n  ================================================================*/\n\n\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"[data-modal]\").on(\"click\", function (event) {\n    event.preventDefault();\n    var modal = jquery__WEBPACK_IMPORTED_MODULE_0__(this).data(\"modal\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").addClass(\"no-scroll\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(modal).addClass(\"show\");\n    setTimeout(function () {\n      jquery__WEBPACK_IMPORTED_MODULE_0__(modal).find(\".modal__content\").css({\n        transform: \"scale(1)\",\n        opacity: \"1\"\n      });\n    }, 200);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"[data-modal-close]\").on(\"click\", function (event) {\n    event.preventDefault();\n    var modal = jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents(\".modal\");\n    modalClose(modal);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".modal\").on(\"click\", function () {\n    var modal = jquery__WEBPACK_IMPORTED_MODULE_0__(this);\n    modalClose(modal);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".modal__content\").on(\"click\", function () {\n    event.stopPropagation();\n  });\n\n  function modalClose(modal) {\n    modal.find(\".modal__content\").css({\n      transform: \"scale(0.3)\",\n      opacity: \"0\"\n    });\n    setTimeout(function () {\n      modal.removeClass(\"show\");\n      jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").removeClass(\"no-scroll\");\n    }, 200);\n  }\n  /* Slick slider https://kenwheeler.github.io/slick/\r\n  ================================================================*/\n\n  /* Intro slider */\n\n\n  var introSlider = jquery__WEBPACK_IMPORTED_MODULE_0__('#introSlider');\n  introSlider.slick({\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    arrows: false,\n    fade: true,\n    autoplay: true,\n    autoplaySpeed: 4000,\n    speed: 1000\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0__('#introSliderPrev').on('click', function () {\n    introSlider.slick('slickPrev');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0__('#introSliderNext').on('click', function () {\n    introSlider.slick('slickNext');\n  });\n  /* Reviews slider */\n\n  var reviewsSlider = jquery__WEBPACK_IMPORTED_MODULE_0__('#reviewsSlider');\n  reviewsSlider.slick({\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    arrows: false,\n    dots: true,\n    autoplay: true,\n    autoplaySpeed: 7000,\n    speed: 1000\n  });\n  /* AOS \r\n     https://github.com/michalsnik/aos\r\n   ================================================================*/\n  // You can also pass an optional settings object\n  // below listed default settings\n\n  aos__WEBPACK_IMPORTED_MODULE_2___default().init({\n    // Global settings:\n    disable: false,\n    // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function\n    startEvent: 'DOMContentLoaded',\n    // name of the event dispatched on the document, that AOS should initialize on\n    initClassName: 'aos-init',\n    // class applied after initialization\n    animatedClassName: 'aos-animate',\n    // class applied on animation\n    useClassNames: false,\n    // if true, will add content of `data-aos` as classes on scroll\n    disableMutationObserver: false,\n    // disables automatic mutations' detections (advanced)\n    debounceDelay: 50,\n    // the delay on debounce used while resizing window (advanced)\n    throttleDelay: 99,\n    // the delay on throttle used while scrolling the page (advanced)\n    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:\n    offset: 80,\n    // offset (in px) from the original trigger point\n    delay: 0,\n    // values from 0 to 3000, with step 50ms\n    duration: 400,\n    // values from 0 to 3000, with step 50ms\n    easing: 'ease',\n    // default easing for AOS animations\n    once: false,\n    // whether animation should happen only once - while scrolling down\n    mirror: false,\n    // whether elements should animate out while scrolling past them\n    anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation\n\n  });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_aos_dist_aos_js-node_modules_sl-8bb516"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_aos_dist_aos_js-node_modules_sl-8bb516"], function() { return __webpack_require__("./js/app.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;