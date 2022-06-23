/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scripts/mobile_menu.js":
/*!************************************!*\
  !*** ./src/scripts/mobile_menu.js ***!
  \************************************/
/***/ (function() {

var navButton = document.querySelector('#topNavButton');
var ul = document.querySelector('#nav');
var lis = document.querySelectorAll('ul > li');
navButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  ul.classList.toggle('openMenu');
  navButton.classList.toggle('mobileMenuClose');
  navButton.classList.toggle('mobileMenuOpen');
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Montserrat-Regular.ttf */ "./src/assets/fonts/Montserrat-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Anton-Regular.ttf */ "./src/assets/fonts/Anton-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/images/bg_Slider_1.png */ "./src/assets/images/bg_Slider_1.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Montserrat Regular;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n@font-face {\n  font-family: CrimsonText Regular;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n@font-face {\n  font-family: Amsdam;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n}\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nmain {\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  padding: 0;\n  border: none;\n  font: inherit;\n  color: inherit;\n  background: transparent;\n  outline: none;\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\ninput {\n  outline: none;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n@-webkit-keyframes openMenu {\n  0% {\n    bottom: 90%;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n\n@keyframes openMenu {\n  0% {\n    bottom: 90%;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@-webkit-keyframes closeMenu {\n  0% {\n    bottom: 0;\n  }\n  100% {\n    bottom: 90%;\n  }\n}\n@keyframes closeMenu {\n  0% {\n    bottom: 0;\n  }\n  100% {\n    bottom: 90%;\n  }\n}\n@-webkit-keyframes showTextNav {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes showTextNav {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.container {\n  width: 90vw;\n  margin: 0 auto;\n}\n\n.sliderBody {\n  position: relative;\n  height: 100vh;\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content;\n  display: grid;\n  grid-template-rows: -webkit-min-content 1fr;\n  grid-template-rows: min-content 1fr;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.sliderBody header {\n  padding: 16px 0;\n  display: grid;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fff;\n  color: #aaaaaa;\n}\n.sliderBody header .header {\n  display: grid;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  grid-template-columns: -webkit-max-content -webkit-max-content -webkit-max-content;\n  grid-template-columns: max-content max-content max-content;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n@media screen and (max-width: 992px) {\n  .sliderBody header .header {\n    grid-template-columns: -webkit-max-content -webkit-max-content;\n    grid-template-columns: max-content max-content;\n  }\n}\n@media screen and (max-width: 992px) {\n  .sliderBody header .header .header__logo {\n    position: relative;\n    z-index: 100;\n  }\n}\n.sliderBody header .header .header__nav {\n  display: grid;\n  grid-template-columns: -webkit-max-content -webkit-max-content;\n  grid-template-columns: max-content max-content;\n  align-self: center;\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav .openMenu {\n    position: absolute;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-name: openMenu;\n            animation-name: openMenu;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    display: grid;\n    grid-template-rows: -webkit-min-content -webkit-min-content -webkit-min-content -webkit-min-content -webkit-min-content -webkit-min-content -webkit-min-content -webkit-min-content;\n    grid-template-rows: min-content min-content min-content min-content min-content min-content min-content min-content;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    min-height: 100vh;\n    padding-left: 15px;\n    padding-top: 60px;\n    background-color: #fff;\n  }\n  .sliderBody header .header .header__nav .closeMenu {\n    position: relative;\n    top: o;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-name: closeMenu;\n            animation-name: closeMenu;\n  }\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav ul {\n    display: none;\n  }\n}\n.sliderBody header .header .header__nav ul li {\n  display: inline-block;\n  margin-right: 10px;\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav ul li {\n    padding: 5px 10px;\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n    -webkit-animation-name: showTextNav;\n            animation-name: showTextNav;\n    opacity: 1;\n  }\n}\n.sliderBody header .header .header__nav ul li a {\n  font-size: 12px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: Montserrat Regular, serif;\n  color: #aaaaaa;\n}\n.sliderBody header .header .header__nav ul li a:hover {\n  color: red;\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav ul li a {\n    font-size: 18px;\n  }\n}\n.sliderBody header .header .header__nav .mobileMenuClose {\n  width: 20px;\n  height: 20px;\n  display: none;\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav .mobileMenuClose {\n    display: block;\n    position: relative;\n    z-index: 10;\n  }\n}\n.sliderBody header .header .header__nav .mobileMenuClose hr {\n  margin-bottom: 2.5px;\n}\n.sliderBody header .header .header__nav .mobileMenuOpen {\n  width: 20px;\n  height: 20px;\n  display: none;\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav .mobileMenuOpen {\n    display: block;\n    position: relative;\n    z-index: 10;\n  }\n}\n.sliderBody header .header .header__nav .mobileMenuOpen hr:first-child {\n  -webkit-transform: translate(0px, 3px) rotate(45deg);\n          transform: translate(0px, 3px) rotate(45deg);\n}\n.sliderBody header .header .header__nav .mobileMenuOpen hr:last-child {\n  -webkit-transform: translate(0px, 0px) rotate(135deg);\n          transform: translate(0px, 0px) rotate(135deg);\n}\n.sliderBody header .header .header__nav .mobileMenuOpen .mide {\n  display: none;\n}\n.sliderBody header .header .header__links ul li {\n  display: inline-block;\n}\n.sliderBody header .header .header__links ul li a img {\n  padding-right: 3px;\n  border-right: 1px solid #aaaaaa;\n}\n@media screen and (max-width: 992px) {\n  .sliderBody header .header .header__links {\n    display: none;\n  }\n}\n.sliderBody .container {\n  display: grid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.sliderBody .container .slider {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto -webkit-min-content;\n  grid-template-columns: min-content auto min-content;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.sliderBody .container .slider .sliderText {\n  text-align: center;\n}\n.sliderBody .container .slider .sliderText .sliderText__tagline {\n  font-size: 14px;\n  font-family: CrimsonText Regular, sans-serif;\n  line-height: 50px;\n  color: #fff;\n}\n.sliderBody .container .slider .sliderText .sliderText__title {\n  font-size: 36px;\n  line-height: 100px;\n  font-family: Amsdam, sans-serif;\n  color: #fff;\n}\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/helpers/_fonts.scss","webpack://./src/styles/index.scss","webpack://./src/styles/helpers/normalize.scss","webpack://./src/styles/helpers/_extends.scss","webpack://./src/styles/helpers/_global.scss","webpack://./src/styles/components/header.scss"],"names":[],"mappings":"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","sourcesContent":["// @font-face {\r\n//     font-family: LeagueGothic;\r\n//     src: url(../fonts/LeagueGothic_Condensed-Regular.ttf) format('truetype');\r\n// }\r\n\r\n@font-face {\r\n    font-family: Montserrat Regular;\r\n    src: url(../assets/fonts/Montserrat-Regular.ttf) format('truetype');\r\n}\r\n@font-face {\r\n    font-family: CrimsonText Regular;\r\n    src: url(../assets/fonts/Montserrat-Regular.ttf) format('truetype');\r\n}\r\n@font-face {\r\n    font-family: Amsdam;\r\n    src: url(../assets/fonts/Anton-Regular.ttf) format('truetype');\r\n}","@font-face {\n  font-family: Montserrat Regular;\n  src: url(../assets/fonts/Montserrat-Regular.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: CrimsonText Regular;\n  src: url(../assets/fonts/Montserrat-Regular.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: Amsdam;\n  src: url(../assets/fonts/Anton-Regular.ttf) format(\"truetype\");\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nmain {\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  padding: 0;\n  border: none;\n  font: inherit;\n  color: inherit;\n  background: transparent;\n  outline: none;\n  order: 1;\n}\n\ninput {\n  outline: none;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  order: 1;\n}\n\n@keyframes openMenu {\n  0% {\n    bottom: 90%;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes closeMenu {\n  0% {\n    bottom: 0;\n  }\n  100% {\n    bottom: 90%;\n  }\n}\n@keyframes showTextNav {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.container {\n  width: 90vw;\n  margin: 0 auto;\n}\n\n.sliderBody {\n  position: relative;\n  height: 100vh;\n  min-height: min-content;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n  background-image: url(\"./../assets/images/bg_Slider_1.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.sliderBody header {\n  padding: 16px 0;\n  display: grid;\n  justify-content: center;\n  background-color: #fff;\n  color: #aaaaaa;\n}\n.sliderBody header .header {\n  display: grid;\n  justify-content: space-between;\n  grid-template-columns: max-content max-content max-content;\n  align-items: center;\n}\n@media screen and (max-width: 992px) {\n  .sliderBody header .header {\n    grid-template-columns: max-content max-content;\n  }\n}\n@media screen and (max-width: 992px) {\n  .sliderBody header .header .header__logo {\n    position: relative;\n    z-index: 100;\n  }\n}\n.sliderBody header .header .header__nav {\n  display: grid;\n  grid-template-columns: max-content max-content;\n  align-self: center;\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav .openMenu {\n    position: absolute;\n    animation-duration: 1s;\n    animation-name: openMenu;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    display: grid;\n    grid-template-rows: min-content min-content min-content min-content min-content min-content min-content min-content;\n    align-items: center;\n    min-height: 100vh;\n    padding-left: 15px;\n    padding-top: 60px;\n    background-color: #fff;\n  }\n  .sliderBody header .header .header__nav .closeMenu {\n    position: relative;\n    top: o;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    animation-duration: 1s;\n    animation-name: closeMenu;\n  }\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav ul {\n    display: none;\n  }\n}\n.sliderBody header .header .header__nav ul li {\n  display: inline-block;\n  margin-right: 10px;\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav ul li {\n    padding: 5px 10px;\n    animation-duration: 1.5s;\n    animation-name: showTextNav;\n    opacity: 1;\n  }\n}\n.sliderBody header .header .header__nav ul li a {\n  font-size: 12px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: Montserrat Regular, serif;\n  color: #aaaaaa;\n}\n.sliderBody header .header .header__nav ul li a:hover {\n  color: red;\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav ul li a {\n    font-size: 18px;\n  }\n}\n.sliderBody header .header .header__nav .mobileMenuClose {\n  width: 20px;\n  height: 20px;\n  display: none;\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav .mobileMenuClose {\n    display: block;\n    position: relative;\n    z-index: 10;\n  }\n}\n.sliderBody header .header .header__nav .mobileMenuClose hr {\n  margin-bottom: 2.5px;\n}\n.sliderBody header .header .header__nav .mobileMenuOpen {\n  width: 20px;\n  height: 20px;\n  display: none;\n}\n@media screen and (max-width: 769px) {\n  .sliderBody header .header .header__nav .mobileMenuOpen {\n    display: block;\n    position: relative;\n    z-index: 10;\n  }\n}\n.sliderBody header .header .header__nav .mobileMenuOpen hr:first-child {\n  transform: translate(0px, 3px) rotate(45deg);\n}\n.sliderBody header .header .header__nav .mobileMenuOpen hr:last-child {\n  transform: translate(0px, 0px) rotate(135deg);\n}\n.sliderBody header .header .header__nav .mobileMenuOpen .mide {\n  display: none;\n}\n.sliderBody header .header .header__links ul li {\n  display: inline-block;\n}\n.sliderBody header .header .header__links ul li a img {\n  padding-right: 3px;\n  border-right: 1px solid #aaaaaa;\n}\n@media screen and (max-width: 992px) {\n  .sliderBody header .header .header__links {\n    display: none;\n  }\n}\n.sliderBody .container {\n  display: grid;\n  align-items: center;\n}\n.sliderBody .container .slider {\n  display: grid;\n  grid-template-columns: min-content auto min-content;\n  justify-content: space-between;\n}\n.sliderBody .container .slider .sliderText {\n  text-align: center;\n}\n.sliderBody .container .slider .sliderText .sliderText__tagline {\n  font-size: 14px;\n  font-family: CrimsonText Regular, sans-serif;\n  line-height: 50px;\n  color: #fff;\n}\n.sliderBody .container .slider .sliderText .sliderText__title {\n  font-size: 36px;\n  line-height: 100px;\n  font-family: Amsdam, sans-serif;\n  color: #fff;\n}\n.hidden {\n  display: none;\n}","*{\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n  \r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nmain {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n  \r\nbutton {\r\n  padding: 0;\r\n  border: none;\r\n  font: inherit;\r\n\r\n  color: inherit;\r\n  background: transparent;\r\n\r\n  outline: none;\r\n  order: 1;\r\n}\r\n  \r\ninput {\r\n  outline: none;\r\n}\r\n  \r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n\r\n  list-style: none;\r\n  order: 1;\r\n}","@keyframes openMenu {\r\n    0% {\r\n      bottom: 90%;\r\n    }\r\n\r\n    100% {\r\n        bottom: 0;\r\n    }\r\n}\r\n\r\n@keyframes closeMenu {\r\n    0% {\r\n      bottom: 0;\r\n    }\r\n\r\n    100% {\r\n        bottom: 90%;\r\n    }\r\n}\r\n\r\n@keyframes showTextNav {\r\n    0%{\r\n        opacity: 0;\r\n    }\r\n\r\n    50%{\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n}\r\n",".container{\r\n    width: 90vw;\r\n    margin: 0 auto;\r\n}\r\n\r\n$colorText: #aaaaaa;","@import './../helpers/extends';\r\n@import './../helpers/global';\r\n\r\n.sliderBody {\r\n    position: relative;\r\n    height: 100vh;\r\n    min-height: min-content;\r\n    display: grid;\r\n    grid-template-rows: min-content 1fr;\r\n\r\n    background-image: url('./../assets/images/bg_Slider_1.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n    header {\r\n        padding: 16px 0;\r\n        display: grid;\r\n        justify-content: center;\r\n\r\n        background-color: #fff;\r\n        color: $colorText;\r\n\r\n        .header {\r\n            display: grid;\r\n            justify-content: space-between;\r\n            grid-template-columns: max-content max-content max-content;\r\n            align-items: center;\r\n\r\n            @media screen and (max-width: 992px) {\r\n                grid-template-columns: max-content max-content;\r\n            }\r\n\r\n            .header__logo {\r\n                @media screen and (max-width: 992px) {\r\n                    position: relative;\r\n                    z-index: 100;\r\n                }\r\n            }\r\n\r\n            .header__nav {\r\n                display: grid;\r\n                grid-template-columns: max-content max-content;\r\n                align-self: center;\r\n\r\n                @media screen and (max-width: 769px) {                   \r\n\r\n                    .openMenu {\r\n                        position: absolute;\r\n\r\n                        animation-duration: 1s;\r\n                        animation-name: openMenu;\r\n\r\n                        bottom: 0;\r\n                        left: 0;\r\n                        right: 0;\r\n                        z-index: 2;\r\n\r\n                        display: grid;\r\n                        grid-template-rows: min-content min-content min-content min-content min-content min-content min-content min-content;\r\n                        \r\n                        align-items: center;\r\n                        min-height: 100vh;\r\n                        padding-left: 15px;\r\n                        padding-top: 60px;\r\n\r\n                        background-color: #fff;\r\n                    }\r\n                    .closeMenu{\r\n                        position: relative;\r\n                        top: o;\r\n                        left: 0;\r\n                        right: 0;\r\n                        z-index: 2;\r\n\r\n                        animation-duration: 1s;\r\n                        animation-name: closeMenu;\r\n                    }\r\n                }\r\n\r\n                ul {\r\n                    @media screen and (max-width: 769px) {\r\n                        display: none;\r\n                    }\r\n                    li {\r\n                        display: inline-block;\r\n                        margin-right: 10px;\r\n\r\n                        @media screen and (max-width: 769px) {\r\n                            \r\n                            padding: 5px 10px;\r\n\r\n                            animation-duration: 1.5s;\r\n                            animation-name: showTextNav;\r\n                            opacity: 1;\r\n                            \r\n                        }\r\n\r\n                        a {\r\n                            font-size: 12px;\r\n                            text-decoration: none;\r\n                            text-transform: uppercase;\r\n\r\n                            font-family: Montserrat Regular, serif;\r\n                            color: $colorText;\r\n\r\n                            &:hover {\r\n                                color: red;\r\n                            }\r\n\r\n                            @media screen and (max-width: 769px) {\r\n                                font-size: 18px;\r\n                            }\r\n                        }\r\n                    }\r\n\r\n                }\r\n\r\n                .mobileMenuClose {\r\n                    width: 20px;\r\n                    height: 20px;\r\n                    display: none;\r\n\r\n                    @media screen and (max-width: 769px) {\r\n                        display: block;\r\n                        position: relative;\r\n                        z-index: 10;\r\n                    }\r\n\r\n                    hr {\r\n                        margin-bottom: 2.5px;\r\n                    }\r\n                }\r\n\r\n                .mobileMenuOpen{\r\n                    width: 20px;\r\n                    height: 20px;\r\n                    display: none;\r\n\r\n                    @media screen and (max-width: 769px) {\r\n                        display: block;\r\n                        position: relative;\r\n                        z-index: 10;\r\n                    }\r\n\r\n                    hr {\r\n                        &:first-child{\r\n                           transform:translate(0px, 3px) rotate(45deg);\r\n                        }\r\n\r\n                        &:last-child{\r\n                            transform:translate(0px, 0px) rotate(135deg);\r\n                        }\r\n                    }\r\n                    .mide{\r\n                        display: none;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .header__links {\r\n\r\n                ul{\r\n                    li{\r\n                        display: inline-block;\r\n                        a{\r\n                            img{\r\n                                padding-right: 3px;\r\n                                border-right: 1px solid $colorText;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n\r\n                @media screen and (max-width: 992px) {\r\n                    display: none;\r\n                }\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    .container{\r\n        display: grid;\r\n        align-items: center;\r\n\r\n        .slider{\r\n        \r\n            display: grid;\r\n            grid-template-columns: min-content auto min-content;\r\n            justify-content: space-between;\r\n\r\n            .sliderText{\r\n                text-align: center;\r\n\r\n                .sliderText__tagline{\r\n                font-size: 14px;\r\n                font-family: CrimsonText Regular, sans-serif;\r\n                line-height: 50px;\r\n\r\n                color: #fff;\r\n                }\r\n                .sliderText__img{\r\n                \r\n                }\r\n                .sliderText__title{\r\n                    font-size: 36px;\r\n                    line-height: 100px;\r\n                    font-family: Amsdam, sans-serif;\r\n                    color: #fff\r\n                }\r\n                .sliderText__start{\r\n                \r\n                }\r\n            }\r\n            \r\n        }\r\n    }\r\n}   \r\n\r\n.hidden{\r\n    display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Anton-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Anton-Regular.ttf ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/170b842f9a8cd6150a0d.ttf";

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Regular.ttf ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/ac98a5f5ca71180fe293.ttf";

/***/ }),

/***/ "./src/assets/images/bg_Slider_1.png":
/*!*******************************************!*\
  !*** ./src/assets/images/bg_Slider_1.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/15375677046aedd47fd0.png";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/mobile_menu */ "./src/scripts/mobile_menu.js");
/* harmony import */ var _scripts_mobile_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_mobile_menu__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;
//# sourceMappingURL=main.2daad6fa5c4ae0878c42.js.map