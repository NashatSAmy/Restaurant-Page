"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./home.jpg */ "./src/home.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./order.jpg */ "./src/order.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./menu.jpg */ "./src/menu.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*********************************/\n/*************General*************/\n/*********************************/\n\nbody {\n  margin: 0;\n  box-sizing: border-box;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  border: none;\n  background-color: transparent;\n  resize: none;\n  outline: none;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nnav {\n  position: absolute;\n  left: 0;\n  top: 30%;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 15px;\n  box-shadow: 0px 0px 8px 1px rgb(169 203 189);\n  z-index: 3;\n}\n\nnav button {\n  font-size: 1.2rem;\n  padding: 8px;\n  margin-bottom: 15px;\n  border: 2px solid #23884f;\n  color: #23884f;\n  background-color: white;\n}\n\nnav button:last-of-type {\n  margin: 0;\n}\n\nnav button:hover {\n  cursor: pointer;\n  background-color: #23884f;\n  color: white;\n}\n\n.mainLogo {\n  position: absolute;\n  left: 0;\n  top: 5%;\n  background-color: white;\n  padding: 5px;\n  width: 8%;\n  height: 10%;\n  box-shadow: 0px 0px 8px 1px rgb(169 203 189);\n}\n\n.mainLogo img {\n  width: 100%;\n}\n\n#content {\n  height: 70%;\n  width: 70%;\n  position: relative;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.mask {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  background-color: #00000085;\n  z-index: -1;\n}\n\n/*********************************/\n/*******Home Page Settings********/\n/*********************************/\n\n.homeBody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-size: cover;\n}\n\n.logoHolder {\n  width: 45%;\n  margin-bottom: 4%;\n  background-color: #c9fde6a6;\n  padding: 10px;\n}\n\n.logoHolder img {\n  width: 100%;\n}\n\n.copy {\n  font-size: xxx-large;\n  color: #baffe0;\n  width: 80%;\n  text-align: center;\n  line-height: 1.5;\n}\n\n/*********************************/\n/******Order Page Settings********/\n/*********************************/\n\n.orderBody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n  background-size: cover;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  gap: 15px;\n}\n\n.right,\n.left {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.wrap {\n  display: flex;\n  justify-content: space-between;\n}\n\nlabel {\n  font-size: 1.8rem;\n  color: #baffe0;\n}\n\ninput {\n  font-size: 1rem;\n  padding: 5px;\n  width: 100%;\n}\n\nfieldset {\n  border: none;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  color: #baffe0;\n}\n\nfieldset label {\n  font-size: 1.3rem;\n  width: 100%;\n}\n\nfieldset input {\n  width: initial;\n  padding: initial;\n  margin-left: 10px;\n}\n\nlegend {\n  font-size: 1.5rem;\n  margin-bottom: 15px;\n}\n\ntextarea {\n  background-color: white;\n}\n\n#orderNow {\n  position: relative;\n  margin: auto;\n  font-size: 1.2rem;\n  padding: 10px;\n  margin-bottom: 15px;\n  border: 2px solid #23884f;\n  color: #23884f;\n  background-color: white;\n  width: 50%;\n}\n\n#orderNow:hover {\n  cursor: pointer;\n  background-color: #23884f;\n  color: white;\n}\n\n.banner {\n  font-size: 2.5rem;\n  background-color: white;\n  color: #23884f;\n  width: 60%;\n  padding: 25px;\n  text-align: center;\n  margin-top: -70px;\n  margin-bottom: 35px;\n}\n\n/*********************************/\n/*******Menu Page Settings********/\n/*********************************/\n\n.menuBody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n  background-size: cover;\n}\n\n.menu {\n  padding-left: 10%;\n  box-sizing: border-box;\n  width: 100% !important;\n}\n\n.mealsMenu {\n  display: grid;\n  width: 80%; \n  grid-template-columns: 1fr 1fr 1fr;\n  margin-top: 3%;\n  row-gap: 10%;\n  column-gap: 2%;\n  grid-auto-rows: 270px;\n}\n\n.meal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  color: white;\n  border: white 2px solid;\n}\n\n.meal img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.meal p {\n  background-color: #000000b0;\n  position: absolute;\n  width: 100%;\n  top: 76%;\n  line-height: 1.5;\n  padding: 5px 10px 5px 10px;\n  box-sizing: border-box;\n  font-size: 1.2rem;\n  text-align: justify;\n}\n\n.mealName {\n  font-size: 1.5rem;\n  display: block;\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*********************************/\n/*************General*************/\n/*********************************/\n\nbody {\n  margin: 0;\n  box-sizing: border-box;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  border: none;\n  background-color: transparent;\n  resize: none;\n  outline: none;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nnav {\n  position: absolute;\n  left: 0;\n  top: 30%;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 15px;\n  box-shadow: 0px 0px 8px 1px rgb(169 203 189);\n  z-index: 3;\n}\n\nnav button {\n  font-size: 1.2rem;\n  padding: 8px;\n  margin-bottom: 15px;\n  border: 2px solid #23884f;\n  color: #23884f;\n  background-color: white;\n}\n\nnav button:last-of-type {\n  margin: 0;\n}\n\nnav button:hover {\n  cursor: pointer;\n  background-color: #23884f;\n  color: white;\n}\n\n.mainLogo {\n  position: absolute;\n  left: 0;\n  top: 5%;\n  background-color: white;\n  padding: 5px;\n  width: 8%;\n  height: 10%;\n  box-shadow: 0px 0px 8px 1px rgb(169 203 189);\n}\n\n.mainLogo img {\n  width: 100%;\n}\n\n#content {\n  height: 70%;\n  width: 70%;\n  position: relative;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.mask {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  background-color: #00000085;\n  z-index: -1;\n}\n\n/*********************************/\n/*******Home Page Settings********/\n/*********************************/\n\n.homeBody {\n  background: url(./home.jpg) no-repeat;\n  background-size: cover;\n}\n\n.logoHolder {\n  width: 45%;\n  margin-bottom: 4%;\n  background-color: #c9fde6a6;\n  padding: 10px;\n}\n\n.logoHolder img {\n  width: 100%;\n}\n\n.copy {\n  font-size: xxx-large;\n  color: #baffe0;\n  width: 80%;\n  text-align: center;\n  line-height: 1.5;\n}\n\n/*********************************/\n/******Order Page Settings********/\n/*********************************/\n\n.orderBody {\n  background: url(./order.jpg) no-repeat;\n  background-size: cover;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  gap: 15px;\n}\n\n.right,\n.left {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.wrap {\n  display: flex;\n  justify-content: space-between;\n}\n\nlabel {\n  font-size: 1.8rem;\n  color: #baffe0;\n}\n\ninput {\n  font-size: 1rem;\n  padding: 5px;\n  width: 100%;\n}\n\nfieldset {\n  border: none;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  color: #baffe0;\n}\n\nfieldset label {\n  font-size: 1.3rem;\n  width: 100%;\n}\n\nfieldset input {\n  width: initial;\n  padding: initial;\n  margin-left: 10px;\n}\n\nlegend {\n  font-size: 1.5rem;\n  margin-bottom: 15px;\n}\n\ntextarea {\n  background-color: white;\n}\n\n#orderNow {\n  position: relative;\n  margin: auto;\n  font-size: 1.2rem;\n  padding: 10px;\n  margin-bottom: 15px;\n  border: 2px solid #23884f;\n  color: #23884f;\n  background-color: white;\n  width: 50%;\n}\n\n#orderNow:hover {\n  cursor: pointer;\n  background-color: #23884f;\n  color: white;\n}\n\n.banner {\n  font-size: 2.5rem;\n  background-color: white;\n  color: #23884f;\n  width: 60%;\n  padding: 25px;\n  text-align: center;\n  margin-top: -70px;\n  margin-bottom: 35px;\n}\n\n/*********************************/\n/*******Menu Page Settings********/\n/*********************************/\n\n.menuBody {\n  background: url(./menu.jpg) no-repeat;\n  background-size: cover;\n}\n\n.menu {\n  padding-left: 10%;\n  box-sizing: border-box;\n  width: 100% !important;\n}\n\n.mealsMenu {\n  display: grid;\n  width: 80%; \n  grid-template-columns: 1fr 1fr 1fr;\n  margin-top: 3%;\n  row-gap: 10%;\n  column-gap: 2%;\n  grid-auto-rows: 270px;\n}\n\n.meal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  color: white;\n  border: white 2px solid;\n}\n\n.meal img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.meal p {\n  background-color: #000000b0;\n  position: absolute;\n  width: 100%;\n  top: 76%;\n  line-height: 1.5;\n  padding: 5px 10px 5px 10px;\n  box-sizing: border-box;\n  font-size: 1.2rem;\n  text-align: justify;\n}\n\n.mealName {\n  font-size: 1.5rem;\n  display: block;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
/***/ ((module) => {



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
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
/***/ ((module) => {



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
/***/ ((module) => {



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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
/***/ ((module) => {



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
/***/ ((module) => {



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

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePageComponent)
/* harmony export */ });
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo2.png */ "./src/logo2.png");


function homePageComponent() {
  const element = document.createElement("div");
  element.setAttribute("id", "content");
  element.classList.add("home");
  element.innerHTML = `
  <div class="logoHolder">
    <img src="${_logo2_png__WEBPACK_IMPORTED_MODULE_0__}" alt="Restaurant logo" />
  </div>
  <div class="copy">
    Start eating healthy now by being one of our customers. Order now to
    enjoy the taste of a healthy life with delicious healthy food on your
    plate.
  </div>
  `;

  return element;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _orderPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderPage */ "./src/orderPage.js");
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo2.png */ "./src/logo2.png");






const main = () => {
  document.body.setAttribute("class", "homeBody");
  document.body.innerHTML = `
  <div class="mask"></div>
    <div class="mainLogo">
      <img src="${_logo2_png__WEBPACK_IMPORTED_MODULE_4__}" alt="Restaurant logo" />
    </div>
    <nav>
      <button id="homePage">Home</button>
      <button id="menuPage">Our Menu</button>
      <button id="orderPage">Order NOW!</button>
    </nav>
  `;

  document.body.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])());
};

const changePage = (e) => {
  if (e.target.id == "homePage") {
    document.body.removeChild(document.getElementById("content"));
    document.body.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])());
    document.body.setAttribute("class", "homeBody");
    return;
  } else if (e.target.id == "menuPage") {
    document.body.removeChild(document.getElementById("content"));
    document.body.appendChild((0,_menuPage__WEBPACK_IMPORTED_MODULE_2__["default"])());
    document.body.setAttribute("class", "menuBody");
    return;
  } else if (e.target.id == "orderPage") {
    document.body.removeChild(document.getElementById("content"));
    document.body.appendChild((0,_orderPage__WEBPACK_IMPORTED_MODULE_3__["default"])());
    document.body.setAttribute("class", "orderBody");
    return;
  }
};

main();

window.addEventListener("click", changePage);


/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPageComponent)
/* harmony export */ });
/* harmony import */ var _BeefStewI_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BeefStewI.jpg */ "./src/BeefStewI.jpg");
/* harmony import */ var _Poutine_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ Poutine.jpeg */ "./src/ Poutine.jpeg");
/* harmony import */ var _mushroomSoup_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mushroomSoup.png */ "./src/mushroomSoup.png");
/* harmony import */ var _fish_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fish.jpg */ "./src/fish.jpg");
/* harmony import */ var _HawaiianChickenSkewers_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HawaiianChickenSkewers.webp */ "./src/HawaiianChickenSkewers.webp");
/* harmony import */ var _steak_bites_with_sweet_potatoes_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./steak-bites-with-sweet-potatoes.webp */ "./src/steak-bites-with-sweet-potatoes.webp");








function menuPageComponent () {
  const element = document.createElement("div");
  element.setAttribute("id", "content");
  element.classList.add("menu");
  element.innerHTML = `
  <div class="banner">Our Menu</div>
      <ul class="mealsMenu">
        <li class="meal">
          <img src="${_BeefStewI_jpg__WEBPACK_IMPORTED_MODULE_0__}" alt="Beef Stew picture" class="mealPic" />
          <p class="mealDescribtion">
            <span class="mealName">Beef Stew</span>
            A cozy, classic beef stew with tender beef, carrots, mushrooms +
            potatoes. Everyone will love this, especially on those chilly
            nights!
          </p>
        </li>
        <li class="meal">
          <img src="${_Poutine_jpeg__WEBPACK_IMPORTED_MODULE_1__}" alt="Poutine picture" class="mealPic" />
          <p class="mealDescribtion">
            <span class="mealName">Homemade Poutine</span>
            Fries covered in cheese curds and then a super savory beefy gravy so
            the curds get all melty? Yeah, poutine is the BEST.
          </p>
        </li>
        <li class="meal">
          <img
            src="${_mushroomSoup_png__WEBPACK_IMPORTED_MODULE_2__}"
            alt="Mushroom Soup picture"
            class="mealPic"
          />
          <p class="mealDescribtion">
            <span class="mealName">Hungarian Mushroom Soup </span>
            Earthy mushrooms are the savory stars of this creamy, pungent,
            satisfying Hungarian mushroom soup.
          </p>
        </li>
        <li class="meal">
          <img
            src="${_fish_jpg__WEBPACK_IMPORTED_MODULE_3__}"
            alt="Baked Cod with Lemon and Garlic picture"
            class="mealPic"
          />
          <p class="mealDescribtion">
            <span class="mealName">Baked Cod with Lemon and Garlic</span>
            Best baked cod out there! Prepared Mediterranean style with a few
            spices and a mixture of lemon juice, olive oil and lots of garlic.
          </p>
        </li>
        <li class="meal">
          <img
            src="${_HawaiianChickenSkewers_webp__WEBPACK_IMPORTED_MODULE_4__}"
            alt="Hawaiian Chicken Skewers picture"
            class="mealPic"
          />
          <p class="mealDescribtion">
            <span class="mealName">Hawaiian Chicken Kabobs</span>
            Sweet and savory, these super easy pineapple-dotted Hawaiian chicken
            kabobs are pure summertime fun.
          </p>
        </li>
        <li class="meal">
          <img
            src="${_steak_bites_with_sweet_potatoes_webp__WEBPACK_IMPORTED_MODULE_5__}"
            alt="Steak Bites with Sweet Potatoes picture"
            class="mealPic"
          />
          <p class="mealDescribtion">
            <span class="mealName">Steak Bites with Sweet Potatoes</span>
            Steak bites and sweet potatoes with curry aioli for dipping- you
            heard that right! Can you think of a more delicious skillet dinner?
          </p>
        </li>
      </ul>
  `;

  return element;
};

/***/ }),

/***/ "./src/orderPage.js":
/*!**************************!*\
  !*** ./src/orderPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderPageComponent)
/* harmony export */ });
function orderPageComponent () {
  const element = document.createElement("div");
  element.setAttribute("id", "content");
  element.classList.add("order");
  element.innerHTML = `
  <div class="banner">
  We Are Happy! to Take your Order.
</div>
<form action="#">
  <div class="wrap">
    <div class="left">
      <label for="firstName">First name:</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        required
        placeholder="ex.Layla"
      />
      <label for="number">Phone number:</label>
      <input
        type="tel"
        name="number"
        id="number"
        required
        placeholder="ex.0123456789"
      />
    </div>
    <div class="right">
      <label for="lastName">Last name:</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        required
        placeholder="ex.Mohamed"
      />
      <label for="email">Your e-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="exmaple@gmail.com"
      />
    </div>
  </div>
  <label for="address">Delivery address:</label>
  <input
    type="text"
    name="address"
    id="address"
    required
    placeholder="42St at example city near example road"
  />

  <fieldset>
    <legend>Choose a preferred payment method/methods</legend>
    <label for="card">Credit Card
    <input type="checkbox" name="card" id="card" /></label>
    <label for="cash">Cash
    <input type="checkbox" name="cash" id="cash" /></label>
    <label for="ewallet">E-Wallet
    <input type="checkbox" name="ewallet" id="ewallet" /></label>
  </fieldset>
  <label for="oder">Please type in your order in details.</label>
  <textarea
    name="order"
    id="order"
    cols="30"
    rows="10"
    required
    placeholder="1 example dish with extra examples"
  ></textarea>
  <button type="submit" id="orderNow">Order Now!</button>
</form>
  `;

  return element;
};

/***/ }),

/***/ "./src/ Poutine.jpeg":
/*!***************************!*\
  !*** ./src/ Poutine.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf214538db206485b856.jpeg";

/***/ }),

/***/ "./src/BeefStewI.jpg":
/*!***************************!*\
  !*** ./src/BeefStewI.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0c9981a958b0a31bbe3.jpg";

/***/ }),

/***/ "./src/HawaiianChickenSkewers.webp":
/*!*****************************************!*\
  !*** ./src/HawaiianChickenSkewers.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "932618fa8149b9a896f1.webp";

/***/ }),

/***/ "./src/fish.jpg":
/*!**********************!*\
  !*** ./src/fish.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "521ca97f1ffbdbeb0405.jpg";

/***/ }),

/***/ "./src/home.jpg":
/*!**********************!*\
  !*** ./src/home.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24b373774d655f3cd77c.jpg";

/***/ }),

/***/ "./src/logo2.png":
/*!***********************!*\
  !*** ./src/logo2.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f6c5b9e9d1b55a212a4.png";

/***/ }),

/***/ "./src/menu.jpg":
/*!**********************!*\
  !*** ./src/menu.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf18810488750d379822.jpg";

/***/ }),

/***/ "./src/mushroomSoup.png":
/*!******************************!*\
  !*** ./src/mushroomSoup.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2eafaa9618f096d13556.png";

/***/ }),

/***/ "./src/order.jpg":
/*!***********************!*\
  !*** ./src/order.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71533b90a5bb18008fca.jpg";

/***/ }),

/***/ "./src/steak-bites-with-sweet-potatoes.webp":
/*!**************************************************!*\
  !*** ./src/steak-bites-with-sweet-potatoes.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a49cf9732ee9adfb7ac.webp";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=index.bundle.js.map