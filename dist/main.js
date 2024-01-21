/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/weather_icon.png */ "./src/assets/weather_icon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --text-color: black;
  --border-color: #858080;
  --selected-color: #4D53B5
}

html {
  background: linear-gradient(to bottom, cyan, aquamarine);
  background-attachment: fixed;
}

body {
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  height: 100vh;
}

/* Header */

.header {
  padding-left: 16px;
  padding-right: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#logo-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

#weather-app-logo {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  height: 48px;
  width: 48px;
}

form {
  display: flex;
}

#search-bar {
  height: 24px;
  width: 300px;
  border-color: var(--text-color);
  padding: 8px;
  margin-right: 0;
}

#submit-city-btn {
  color: white;
  margin-left: 0;
  height: 44px;
  width: 64px;
  background-color: var(--selected-color);
  border-color: var(--text-color);
  border-left: none;
}

.convert-temp-btns {
  display: flex;
  gap: 16px;
}

.selected {
  background-color: var(--selected-color);
}

.temp-btn {
  font-weight: bold;
  border: 1px solid var(--border-color);
  height: 24px;
  width: 100px;
  border-radius: 8px;
}

/* Main Content */

.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

/* Card */
.card-container {
  display: flex;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 16px;
  width: 300px;
  height: 300px;
  padding: 16px 16px;
}

/* Weekly Forecast */
#weekly-forecast-title {
  text-align: center;
}

.weekly-forecast-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.forecast-section {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 16px 32px;
}

.forecast-list-header, .forecast-list, .forecast-item {
  grid-column: span 7;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  align-items: center;
}

.forecast-list-header {
  font-weight: bold;
}

.forecast-list-header > *, .forecast-item > *  {
  display: flex;
  justify-content: center;
}

.forecast-item > img {
  display: flex;
  justify-content: center;
}

.forecast-item > img {
  max-width: 100%;
  height: auto;
  display: block;
}

.forecast-list-header, .forecast-item:not(:last-child) {
  border-bottom: 2px solid var(--text-color);
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB;AACF;;AAEA;EACE,wDAAwD;EACxD,4BAA4B;AAC9B;;AAEA;EACE,2JAA2J;EAC3J,SAAS;EACT,aAAa;AACf;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,yDAAgD;EAChD,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,+BAA+B;EAC/B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,WAAW;EACX,uCAAuC;EACvC,+BAA+B;EAC/B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;EACjB,qCAAqC;EACrC,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,2CAA2C;EAC3C,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,qCAAqC;EACrC,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,0CAA0C;AAC5C","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n\n:root {\n  --text-color: black;\n  --border-color: #858080;\n  --selected-color: #4D53B5\n}\n\nhtml {\n  background: linear-gradient(to bottom, cyan, aquamarine);\n  background-attachment: fixed;\n}\n\nbody {\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  height: 100vh;\n}\n\n/* Header */\n\n.header {\n  padding-left: 16px;\n  padding-right: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#logo-left {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n#weather-app-logo {\n  background-image: url(./assets/weather_icon.png);\n  background-size: cover;\n  height: 48px;\n  width: 48px;\n}\n\nform {\n  display: flex;\n}\n\n#search-bar {\n  height: 24px;\n  width: 300px;\n  border-color: var(--text-color);\n  padding: 8px;\n  margin-right: 0;\n}\n\n#submit-city-btn {\n  color: white;\n  margin-left: 0;\n  height: 44px;\n  width: 64px;\n  background-color: var(--selected-color);\n  border-color: var(--text-color);\n  border-left: none;\n}\n\n.convert-temp-btns {\n  display: flex;\n  gap: 16px;\n}\n\n.selected {\n  background-color: var(--selected-color);\n}\n\n.temp-btn {\n  font-weight: bold;\n  border: 1px solid var(--border-color);\n  height: 24px;\n  width: 100px;\n  border-radius: 8px;\n}\n\n/* Main Content */\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n}\n\n/* Card */\n.card-container {\n  display: flex;\n  justify-content: center;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 16px;\n  width: 300px;\n  height: 300px;\n  padding: 16px 16px;\n}\n\n/* Weekly Forecast */\n#weekly-forecast-title {\n  text-align: center;\n}\n\n.weekly-forecast-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16px;\n}\n\n.forecast-section {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  padding: 16px 32px;\n}\n\n.forecast-list-header, .forecast-list, .forecast-item {\n  grid-column: span 7;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n  align-items: center;\n}\n\n.forecast-list-header {\n  font-weight: bold;\n}\n\n.forecast-list-header > *, .forecast-item > *  {\n  display: flex;\n  justify-content: center;\n}\n\n.forecast-item > img {\n  display: flex;\n  justify-content: center;\n}\n\n.forecast-item > img {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n\n.forecast-list-header, .forecast-item:not(:last-child) {\n  border-bottom: 2px solid var(--text-color);\n}\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Card {
  constructor(city, temp, feelsLike, humidity, wind, isFar) {
    this.city = city;
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.wind = wind;
    this.isFar = isFar;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/domelms.js":
/*!************************!*\
  !*** ./src/domelms.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCard: () => (/* binding */ createCard),
/* harmony export */   createForecast: () => (/* binding */ createForecast)
/* harmony export */ });
const createCard = (card) => {

  // Initilize Dom Elms
  const cardContainer = document.createElement('div');
  const cityLabel = document.createElement('h1');
  const tempLabel = document.createElement('h2');
  const feelsLikeLabel = document.createElement('p');
  const humdityLabel = document.createElement('p');
  const windLabel = document.createElement('p');

  // Add Classes
  cardContainer.classList.add('card');

  // Set text content
  cityLabel.textContent = card.city;
  tempLabel.textContent = card.isFar? `${card.temp} °F`: `${card.temp} °C`;
  feelsLikeLabel.textContent = `Feels like: ${card.isFar? `${card.feelsLike} °F`: `${card.feelsLike} °C`}`;
  humdityLabel.textContent = `Humidity: ${card.humidity}%`;
  windLabel.textContent = `Wind Speed: ${card.isFar? `${card.wind} mph` : `${card.wind} kph`}`;

  // Set children
  cardContainer.append(cityLabel, tempLabel, feelsLikeLabel, humdityLabel, windLabel);
  return cardContainer;
}

const createForecast = forecast => {
  // Initilize Dom Elms
  const forecastItem = document.createElement('div');
  const day = document.createElement('p');
  const imgContainer = document.createElement('div');
  const icon = document.createElement('img');
  const chance = document.createElement('p');
  const humidity = document.createElement('p');
  const maxTemp = document.createElement('p');
  const minTemp = document.createElement('p');
  const avgTemp = document.createElement('p');

  // Add Classes and Attributes
  forecastItem.classList.add('forecast-item');
  imgContainer.classList.add('img-container');
  icon.src = forecast.icon;

  // Set text content
  day.textContent = forecast.day;
  chance.textContent = `${forecast.chance}%`;
  humidity.textContent = `${forecast.humidity}%`;
  maxTemp.textContent = forecast.isFar? `${forecast.maxTemp} °F`: `${forecast.maxTemp} °C`;
  minTemp.textContent = forecast.isFar? `${forecast.minTemp} °F`: `${forecast.minTemp} °C`;
  avgTemp.textContent = forecast.isFar? `${forecast.avgTemp} °F`: `${forecast.avgTemp} °C`;

  // Set children
  imgContainer.appendChild(icon)
  forecastItem.append(day, imgContainer, chance, humidity, maxTemp, minTemp, avgTemp);
  return forecastItem;
}





/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCurrWeather: () => (/* binding */ fetchCurrWeather),
/* harmony export */   fetchForecast: () => (/* binding */ fetchForecast),
/* harmony export */   getForeCastProp: () => (/* binding */ getForeCastProp),
/* harmony export */   getWeatherOverView: () => (/* binding */ getWeatherOverView)
/* harmony export */ });
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const fetchCurrWeather = (search) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=777dad6b095b47f8b5d42049241801&q=${search}`;
  return fetch(url, {mode: 'cors'})
    .then(res => {
      if(!res.ok) {
        throw new Error(`City Not Found (${res.status} ${res.statusText})`)
      } else {
        return res.json()
      }
    })
    .catch(err => {
      throw err;
    });
}

const fetchForecast = (search) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=777dad6b095b47f8b5d42049241801&q=${search}&days=7`;
  return fetch(url, {mode: 'cors'})
  .then(res => {
    if(!res.ok) {
      throw new Error(`City Not Found (${res.status} ${res.statusText})`)
    } else {
      return res.json()
    }
  })
  .then(res => res.forecast.forecastday)
  .catch(err => {
    throw err;
  });
}

const getWeatherOverView = (weatherData, isFar) => 
  ({
    city: weatherData.location.name,
    condition: weatherData.current.condition,
    temp: isFar? weatherData.current.temp_f : weatherData.current.temp_c,
    feelsLike: isFar? weatherData.current.feelslike_f : weatherData.current.feelslike_c,
    gust: isFar? weatherData.current.gust_mph : weatherData.current.gust_kph,
    humidity: weatherData.current.humidity
  })

const getForeCastProp = (forecastData, isFar) => 
  forecastData.map((forecast, index) => 
    ({
      day: days[index],
      icon: forecast.day.condition.icon,
      chance: forecast.day.daily_chance_of_rain,
      humidity: forecast.day.avghumidity,
      maxTemp: isFar? forecast.day.maxtemp_f : forecast.day.maxtemp_c,
      minTemp: isFar? forecast.day.mintemp_f : forecast.day.mintemp_c,
      avgTemp: isFar? forecast.day.avgtemp_f : forecast.day.avgtemp_c
    })
  )





/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Forecast {
  constructor(day, icon, chance, humidity, maxTemp, minTemp, avgTemp, isFar) {
    this.day = day;
    this.icon = icon;
    this.chance = chance;
    this.humidity = humidity;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.avgTemp = avgTemp;
    this.isFar = isFar;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forecast);

/***/ }),

/***/ "./src/assets/weather_icon.png":
/*!*************************************!*\
  !*** ./src/assets/weather_icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0778a8e30dad376c3dbf.png";

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _domelms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domelms */ "./src/domelms.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forecast */ "./src/forecast.js");






const searchBar = document.querySelector("#search-bar");
const submitCityBtn = document.querySelector("#submit-city-btn");
const cardContainer = document.querySelector('.card-container');
const farBtn = document.querySelector('#fahrenheit-btn');
const celBtn = document.querySelector('#celcius-btn');
const foreCastList = document.querySelector('.forecast-list');

let currIsFar = true;
let selected = "F";
let prevSearch = "New York";

// Helper functions

const validateForm = async search => {
  try {
    if(search === "") {
      console.log('search is empty')
      searchBar.setCustomValidity("Input Must Not Be Empty");
      searchBar.reportValidity();
      return false;
    } 
    await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchCurrWeather)(search);
    searchBar.setCustomValidity("");
    return true;
  } catch (err) {
    // console.log('caught err in validateForm', err);
    if (err.message.includes("City Not Found")) {
      searchBar.setCustomValidity("City Not Found");
      searchBar.reportValidity();
    } else {
      throw err;  // Re-throw other errors
    }
    return false;
  }
}

const clearCardContainer = () => {
  cardContainer.innerHTML = '';
}

const clearForecastList = () => {
  foreCastList.innerHTML = '';
}

const toggleCurrTemp = () => {
  currIsFar = !currIsFar;
}

const toggleSelected = () => {
  if(farBtn.classList.contains('selected')) {
    farBtn.classList.remove('selected');
    celBtn.classList.add('selected');
    console.log('selected celcius')
    selected = "C"
  } else {
    celBtn.classList.remove('selected');
    farBtn.classList.add('selected');
    console.log('selected farienheight')
    selected = "F"
  }
}

const updatePrevSearch = newSearch => {
  prevSearch = newSearch;
}

// Event listener functions

const displayCard = async search => {
  const data = await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchCurrWeather)(search);
  console.log(data);
  const cardData = (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.getWeatherOverView)(data, currIsFar);
  console.log(cardData);
  const newCard = new _card__WEBPACK_IMPORTED_MODULE_3__["default"](cardData.city, cardData.temp, cardData.feelsLike, cardData.humidity, cardData.gust, currIsFar);
  const newCardElm = (0,_domelms__WEBPACK_IMPORTED_MODULE_2__.createCard)(newCard);
  clearCardContainer();
  cardContainer.appendChild(newCardElm);
}

const displayForeCast = async search => {
  const data = await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchForecast)(search);
  console.log('forecastData', data);
  const forecastDataArr = (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.getForeCastProp)(data, currIsFar);
  console.table('forecastDataArr', forecastDataArr);
  clearForecastList();
  forecastDataArr.forEach(forecast => {
    const newForecast = new _forecast__WEBPACK_IMPORTED_MODULE_4__["default"](forecast.day, forecast.icon, forecast.chance, forecast.humidity, forecast.maxTemp, forecast.minTemp, forecast.avgTemp, currIsFar);
    const newForecastElm = (0,_domelms__WEBPACK_IMPORTED_MODULE_2__.createForecast)(newForecast);
    foreCastList.appendChild(newForecastElm);
  })
}

const switchTempSettings = async setting => {
  if (setting !== selected) {
    toggleSelected();
    toggleCurrTemp();
    if (prevSearch !== undefined) {
      await displayCard(prevSearch);
      await displayForeCast(prevSearch);
    }
  }
}

// Add event listeners

submitCityBtn.addEventListener('click', async e => {
  e.preventDefault();
  const city = searchBar.value;
  console.log(`searchbar input: ${city}`);
  try {
    if (await validateForm(city)) {
      // console.log('in if')
      updatePrevSearch(city);
      await displayCard(city);
      await displayForeCast(city);
    }
  } catch (err) {
      console.log('Unexpected error in submitCityBtn event listener:', err);
  }
});

searchBar.addEventListener('input', () => {
  searchBar.setCustomValidity("");
})

farBtn.addEventListener('click', () => switchTempSettings("F"));
celBtn.addEventListener('click', () => switchTempSettings("C"));

// Run functions when page first loads

displayCard('New York');
displayForeCast('New York');

// fetchCurrWeather('london').then(res => console.log(res));
// fetchForecast('london').then(res => console.log("forecast", res));


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbWVsbXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvd2VhdGhlcl9pY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXRleHQtY29sb3I6IGJsYWNrO1xuICAtLWJvcmRlci1jb2xvcjogIzg1ODA4MDtcbiAgLS1zZWxlY3RlZC1jb2xvcjogIzRENTNCNVxufVxuXG5odG1sIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgY3lhbiwgYXF1YW1hcmluZSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiBIZWFkZXIgKi9cblxuLmhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jbG9nby1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4jd2VhdGhlci1hcHAtbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNzZWFyY2gtYmFyIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4jc3VibWl0LWNpdHktYnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWQtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLmNvbnZlcnQtdGVtcC1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3RlZC1jb2xvcik7XG59XG5cbi50ZW1wLWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4vKiBNYWluIENvbnRlbnQgKi9cblxuLm1haW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLyogQ2FyZCAqL1xuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMTZweCAxNnB4O1xufVxuXG4vKiBXZWVrbHkgRm9yZWNhc3QgKi9cbiN3ZWVrbHktZm9yZWNhc3QtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53ZWVrbHktZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbn1cblxuLmZvcmVjYXN0LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG59XG5cbi5mb3JlY2FzdC1saXN0LWhlYWRlciwgLmZvcmVjYXN0LWxpc3QsIC5mb3JlY2FzdC1pdGVtIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JlY2FzdC1saXN0LWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9yZWNhc3QtbGlzdC1oZWFkZXIgPiAqLCAuZm9yZWNhc3QtaXRlbSA+ICogIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JlY2FzdC1pdGVtID4gaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JlY2FzdC1pdGVtID4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9yZWNhc3QtbGlzdC1oZWFkZXIsIC5mb3JlY2FzdC1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFLHdEQUF3RDtFQUN4RCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwySkFBMko7RUFDM0osU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQSxXQUFXOztBQUVYO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UseURBQWdEO0VBQ2hELHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLCtCQUErQjtFQUMvQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLXRleHQtY29sb3I6IGJsYWNrO1xcbiAgLS1ib3JkZXItY29sb3I6ICM4NTgwODA7XFxuICAtLXNlbGVjdGVkLWNvbG9yOiAjNEQ1M0I1XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgY3lhbiwgYXF1YW1hcmluZSk7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNsb2dvLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbiN3ZWF0aGVyLWFwcC1sb2dvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy93ZWF0aGVyX2ljb24ucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICB3aWR0aDogNDhweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2VhcmNoLWJhciB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4jc3VibWl0LWNpdHktYnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgaGVpZ2h0OiA0NHB4O1xcbiAgd2lkdGg6IDY0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3RlZC1jb2xvcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbi5jb252ZXJ0LXRlbXAtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWQtY29sb3IpO1xcbn1cXG5cXG4udGVtcC1idG4ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4vKiBNYWluIENvbnRlbnQgKi9cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLyogQ2FyZCAqL1xcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcGFkZGluZzogMTZweCAxNnB4O1xcbn1cXG5cXG4vKiBXZWVrbHkgRm9yZWNhc3QgKi9cXG4jd2Vla2x5LWZvcmVjYXN0LXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndlZWtseS1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmZvcmVjYXN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBwYWRkaW5nOiAxNnB4IDMycHg7XFxufVxcblxcbi5mb3JlY2FzdC1saXN0LWhlYWRlciwgLmZvcmVjYXN0LWxpc3QsIC5mb3JlY2FzdC1pdGVtIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWxpc3QtaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9yZWNhc3QtbGlzdC1oZWFkZXIgPiAqLCAuZm9yZWNhc3QtaXRlbSA+ICogIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWl0ZW0gPiBpbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtaXRlbSA+IGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZvcmVjYXN0LWxpc3QtaGVhZGVyLCAuZm9yZWNhc3QtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoY2l0eSwgdGVtcCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgd2luZCwgaXNGYXIpIHtcbiAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gICAgdGhpcy5mZWVsc0xpa2UgPSBmZWVsc0xpa2U7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICAgIHRoaXMud2luZCA9IHdpbmQ7XG4gICAgdGhpcy5pc0ZhciA9IGlzRmFyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQiLCJjb25zdCBjcmVhdGVDYXJkID0gKGNhcmQpID0+IHtcblxuICAvLyBJbml0aWxpemUgRG9tIEVsbXNcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCB0ZW1wTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBmZWVsc0xpa2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaHVtZGl0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB3aW5kTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgLy8gQWRkIENsYXNzZXNcbiAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgLy8gU2V0IHRleHQgY29udGVudFxuICBjaXR5TGFiZWwudGV4dENvbnRlbnQgPSBjYXJkLmNpdHk7XG4gIHRlbXBMYWJlbC50ZXh0Q29udGVudCA9IGNhcmQuaXNGYXI/IGAke2NhcmQudGVtcH0gwrBGYDogYCR7Y2FyZC50ZW1wfSDCsENgO1xuICBmZWVsc0xpa2VMYWJlbC50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2NhcmQuaXNGYXI/IGAke2NhcmQuZmVlbHNMaWtlfSDCsEZgOiBgJHtjYXJkLmZlZWxzTGlrZX0gwrBDYH1gO1xuICBodW1kaXR5TGFiZWwudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7Y2FyZC5odW1pZGl0eX0lYDtcbiAgd2luZExhYmVsLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7Y2FyZC5pc0Zhcj8gYCR7Y2FyZC53aW5kfSBtcGhgIDogYCR7Y2FyZC53aW5kfSBrcGhgfWA7XG5cbiAgLy8gU2V0IGNoaWxkcmVuXG4gIGNhcmRDb250YWluZXIuYXBwZW5kKGNpdHlMYWJlbCwgdGVtcExhYmVsLCBmZWVsc0xpa2VMYWJlbCwgaHVtZGl0eUxhYmVsLCB3aW5kTGFiZWwpO1xuICByZXR1cm4gY2FyZENvbnRhaW5lcjtcbn1cblxuY29uc3QgY3JlYXRlRm9yZWNhc3QgPSBmb3JlY2FzdCA9PiB7XG4gIC8vIEluaXRpbGl6ZSBEb20gRWxtc1xuICBjb25zdCBmb3JlY2FzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBjaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBhdmdUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIC8vIEFkZCBDbGFzc2VzIGFuZCBBdHRyaWJ1dGVzXG4gIGZvcmVjYXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1pdGVtJyk7XG4gIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctY29udGFpbmVyJyk7XG4gIGljb24uc3JjID0gZm9yZWNhc3QuaWNvbjtcblxuICAvLyBTZXQgdGV4dCBjb250ZW50XG4gIGRheS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmRheTtcbiAgY2hhbmNlLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuY2hhbmNlfSVgO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0Lmh1bWlkaXR5fSVgO1xuICBtYXhUZW1wLnRleHRDb250ZW50ID0gZm9yZWNhc3QuaXNGYXI/IGAke2ZvcmVjYXN0Lm1heFRlbXB9IMKwRmA6IGAke2ZvcmVjYXN0Lm1heFRlbXB9IMKwQ2A7XG4gIG1pblRlbXAudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5pc0Zhcj8gYCR7Zm9yZWNhc3QubWluVGVtcH0gwrBGYDogYCR7Zm9yZWNhc3QubWluVGVtcH0gwrBDYDtcbiAgYXZnVGVtcC50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmlzRmFyPyBgJHtmb3JlY2FzdC5hdmdUZW1wfSDCsEZgOiBgJHtmb3JlY2FzdC5hdmdUZW1wfSDCsENgO1xuXG4gIC8vIFNldCBjaGlsZHJlblxuICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbilcbiAgZm9yZWNhc3RJdGVtLmFwcGVuZChkYXksIGltZ0NvbnRhaW5lciwgY2hhbmNlLCBodW1pZGl0eSwgbWF4VGVtcCwgbWluVGVtcCwgYXZnVGVtcCk7XG4gIHJldHVybiBmb3JlY2FzdEl0ZW07XG59XG5cbmV4cG9ydCB7Y3JlYXRlRm9yZWNhc3QsIGNyZWF0ZUNhcmR9XG5cbiIsImNvbnN0IGRheXMgPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J107XG5cblxuY29uc3QgZmV0Y2hDdXJyV2VhdGhlciA9IChzZWFyY2gpID0+IHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9Nzc3ZGFkNmIwOTViNDdmOGI1ZDQyMDQ5MjQxODAxJnE9JHtzZWFyY2h9YDtcbiAgcmV0dXJuIGZldGNoKHVybCwge21vZGU6ICdjb3JzJ30pXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaXR5IE5vdCBGb3VuZCAoJHtyZXMuc3RhdHVzfSAke3Jlcy5zdGF0dXNUZXh0fSlgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuXG5jb25zdCBmZXRjaEZvcmVjYXN0ID0gKHNlYXJjaCkgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9Nzc3ZGFkNmIwOTViNDdmOGI1ZDQyMDQ5MjQxODAxJnE9JHtzZWFyY2h9JmRheXM9N2A7XG4gIHJldHVybiBmZXRjaCh1cmwsIHttb2RlOiAnY29ycyd9KVxuICAudGhlbihyZXMgPT4ge1xuICAgIGlmKCFyZXMub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2l0eSBOb3QgRm91bmQgKCR7cmVzLnN0YXR1c30gJHtyZXMuc3RhdHVzVGV4dH0pYClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9XG4gIH0pXG4gIC50aGVuKHJlcyA9PiByZXMuZm9yZWNhc3QuZm9yZWNhc3RkYXkpXG4gIC5jYXRjaChlcnIgPT4ge1xuICAgIHRocm93IGVycjtcbiAgfSk7XG59XG5cbmNvbnN0IGdldFdlYXRoZXJPdmVyVmlldyA9ICh3ZWF0aGVyRGF0YSwgaXNGYXIpID0+IFxuICAoe1xuICAgIGNpdHk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgY29uZGl0aW9uOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbixcbiAgICB0ZW1wOiBpc0Zhcj8gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2YgOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICBmZWVsc0xpa2U6IGlzRmFyPyB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mIDogd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICBndXN0OiBpc0Zhcj8gd2VhdGhlckRhdGEuY3VycmVudC5ndXN0X21waCA6IHdlYXRoZXJEYXRhLmN1cnJlbnQuZ3VzdF9rcGgsXG4gICAgaHVtaWRpdHk6IHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHlcbiAgfSlcblxuY29uc3QgZ2V0Rm9yZUNhc3RQcm9wID0gKGZvcmVjYXN0RGF0YSwgaXNGYXIpID0+IFxuICBmb3JlY2FzdERhdGEubWFwKChmb3JlY2FzdCwgaW5kZXgpID0+IFxuICAgICh7XG4gICAgICBkYXk6IGRheXNbaW5kZXhdLFxuICAgICAgaWNvbjogZm9yZWNhc3QuZGF5LmNvbmRpdGlvbi5pY29uLFxuICAgICAgY2hhbmNlOiBmb3JlY2FzdC5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICBodW1pZGl0eTogZm9yZWNhc3QuZGF5LmF2Z2h1bWlkaXR5LFxuICAgICAgbWF4VGVtcDogaXNGYXI/IGZvcmVjYXN0LmRheS5tYXh0ZW1wX2YgOiBmb3JlY2FzdC5kYXkubWF4dGVtcF9jLFxuICAgICAgbWluVGVtcDogaXNGYXI/IGZvcmVjYXN0LmRheS5taW50ZW1wX2YgOiBmb3JlY2FzdC5kYXkubWludGVtcF9jLFxuICAgICAgYXZnVGVtcDogaXNGYXI/IGZvcmVjYXN0LmRheS5hdmd0ZW1wX2YgOiBmb3JlY2FzdC5kYXkuYXZndGVtcF9jXG4gICAgfSlcbiAgKVxuXG5leHBvcnQge2ZldGNoQ3VycldlYXRoZXIsIGZldGNoRm9yZWNhc3QsIGdldFdlYXRoZXJPdmVyVmlldywgZ2V0Rm9yZUNhc3RQcm9wfVxuXG4iLCJjbGFzcyBGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKGRheSwgaWNvbiwgY2hhbmNlLCBodW1pZGl0eSwgbWF4VGVtcCwgbWluVGVtcCwgYXZnVGVtcCwgaXNGYXIpIHtcbiAgICB0aGlzLmRheSA9IGRheTtcbiAgICB0aGlzLmljb24gPSBpY29uO1xuICAgIHRoaXMuY2hhbmNlID0gY2hhbmNlO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLm1heFRlbXAgPSBtYXhUZW1wO1xuICAgIHRoaXMubWluVGVtcCA9IG1pblRlbXA7XG4gICAgdGhpcy5hdmdUZW1wID0gYXZnVGVtcDtcbiAgICB0aGlzLmlzRmFyID0gaXNGYXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZWNhc3QiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZmV0Y2hDdXJyV2VhdGhlciwgZmV0Y2hGb3JlY2FzdCwgZ2V0V2VhdGhlck92ZXJWaWV3LCBnZXRGb3JlQ2FzdFByb3B9IGZyb20gJy4vZmV0Y2gnO1xuaW1wb3J0IHtjcmVhdGVDYXJkLCBjcmVhdGVGb3JlY2FzdH0gZnJvbSAnLi9kb21lbG1zJztcbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZCc7XG5pbXBvcnQgRm9yZWNhc3QgZnJvbSAnLi9mb3JlY2FzdCc7XG5cbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWJhclwiKTtcbmNvbnN0IHN1Ym1pdENpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdC1jaXR5LWJ0blwiKTtcbmNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbmNvbnN0IGZhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYWhyZW5oZWl0LWJ0bicpO1xuY29uc3QgY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NlbGNpdXMtYnRuJyk7XG5jb25zdCBmb3JlQ2FzdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtbGlzdCcpO1xuXG5sZXQgY3VycklzRmFyID0gdHJ1ZTtcbmxldCBzZWxlY3RlZCA9IFwiRlwiO1xubGV0IHByZXZTZWFyY2ggPSBcIk5ldyBZb3JrXCI7XG5cbi8vIEhlbHBlciBmdW5jdGlvbnNcblxuY29uc3QgdmFsaWRhdGVGb3JtID0gYXN5bmMgc2VhcmNoID0+IHtcbiAgdHJ5IHtcbiAgICBpZihzZWFyY2ggPT09IFwiXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzZWFyY2ggaXMgZW1wdHknKVxuICAgICAgc2VhcmNoQmFyLnNldEN1c3RvbVZhbGlkaXR5KFwiSW5wdXQgTXVzdCBOb3QgQmUgRW1wdHlcIik7XG4gICAgICBzZWFyY2hCYXIucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IFxuICAgIGF3YWl0IGZldGNoQ3VycldlYXRoZXIoc2VhcmNoKTtcbiAgICBzZWFyY2hCYXIuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjYXVnaHQgZXJyIGluIHZhbGlkYXRlRm9ybScsIGVycik7XG4gICAgaWYgKGVyci5tZXNzYWdlLmluY2x1ZGVzKFwiQ2l0eSBOb3QgRm91bmRcIikpIHtcbiAgICAgIHNlYXJjaEJhci5zZXRDdXN0b21WYWxpZGl0eShcIkNpdHkgTm90IEZvdW5kXCIpO1xuICAgICAgc2VhcmNoQmFyLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycjsgIC8vIFJlLXRocm93IG90aGVyIGVycm9yc1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuY29uc3QgY2xlYXJDYXJkQ29udGFpbmVyID0gKCkgPT4ge1xuICBjYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xufVxuXG5jb25zdCBjbGVhckZvcmVjYXN0TGlzdCA9ICgpID0+IHtcbiAgZm9yZUNhc3RMaXN0LmlubmVySFRNTCA9ICcnO1xufVxuXG5jb25zdCB0b2dnbGVDdXJyVGVtcCA9ICgpID0+IHtcbiAgY3VycklzRmFyID0gIWN1cnJJc0Zhcjtcbn1cblxuY29uc3QgdG9nZ2xlU2VsZWN0ZWQgPSAoKSA9PiB7XG4gIGlmKGZhckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICBmYXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICBjZWxCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgY2VsY2l1cycpXG4gICAgc2VsZWN0ZWQgPSBcIkNcIlxuICB9IGVsc2Uge1xuICAgIGNlbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIGZhckJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBmYXJpZW5oZWlnaHQnKVxuICAgIHNlbGVjdGVkID0gXCJGXCJcbiAgfVxufVxuXG5jb25zdCB1cGRhdGVQcmV2U2VhcmNoID0gbmV3U2VhcmNoID0+IHtcbiAgcHJldlNlYXJjaCA9IG5ld1NlYXJjaDtcbn1cblxuLy8gRXZlbnQgbGlzdGVuZXIgZnVuY3Rpb25zXG5cbmNvbnN0IGRpc3BsYXlDYXJkID0gYXN5bmMgc2VhcmNoID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoQ3VycldlYXRoZXIoc2VhcmNoKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IGNhcmREYXRhID0gZ2V0V2VhdGhlck92ZXJWaWV3KGRhdGEsIGN1cnJJc0Zhcik7XG4gIGNvbnNvbGUubG9nKGNhcmREYXRhKTtcbiAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKGNhcmREYXRhLmNpdHksIGNhcmREYXRhLnRlbXAsIGNhcmREYXRhLmZlZWxzTGlrZSwgY2FyZERhdGEuaHVtaWRpdHksIGNhcmREYXRhLmd1c3QsIGN1cnJJc0Zhcik7XG4gIGNvbnN0IG5ld0NhcmRFbG0gPSBjcmVhdGVDYXJkKG5ld0NhcmQpO1xuICBjbGVhckNhcmRDb250YWluZXIoKTtcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkRWxtKTtcbn1cblxuY29uc3QgZGlzcGxheUZvcmVDYXN0ID0gYXN5bmMgc2VhcmNoID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRm9yZWNhc3Qoc2VhcmNoKTtcbiAgY29uc29sZS5sb2coJ2ZvcmVjYXN0RGF0YScsIGRhdGEpO1xuICBjb25zdCBmb3JlY2FzdERhdGFBcnIgPSBnZXRGb3JlQ2FzdFByb3AoZGF0YSwgY3VycklzRmFyKTtcbiAgY29uc29sZS50YWJsZSgnZm9yZWNhc3REYXRhQXJyJywgZm9yZWNhc3REYXRhQXJyKTtcbiAgY2xlYXJGb3JlY2FzdExpc3QoKTtcbiAgZm9yZWNhc3REYXRhQXJyLmZvckVhY2goZm9yZWNhc3QgPT4ge1xuICAgIGNvbnN0IG5ld0ZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0KGZvcmVjYXN0LmRheSwgZm9yZWNhc3QuaWNvbiwgZm9yZWNhc3QuY2hhbmNlLCBmb3JlY2FzdC5odW1pZGl0eSwgZm9yZWNhc3QubWF4VGVtcCwgZm9yZWNhc3QubWluVGVtcCwgZm9yZWNhc3QuYXZnVGVtcCwgY3VycklzRmFyKTtcbiAgICBjb25zdCBuZXdGb3JlY2FzdEVsbSA9IGNyZWF0ZUZvcmVjYXN0KG5ld0ZvcmVjYXN0KTtcbiAgICBmb3JlQ2FzdExpc3QuYXBwZW5kQ2hpbGQobmV3Rm9yZWNhc3RFbG0pO1xuICB9KVxufVxuXG5jb25zdCBzd2l0Y2hUZW1wU2V0dGluZ3MgPSBhc3luYyBzZXR0aW5nID0+IHtcbiAgaWYgKHNldHRpbmcgIT09IHNlbGVjdGVkKSB7XG4gICAgdG9nZ2xlU2VsZWN0ZWQoKTtcbiAgICB0b2dnbGVDdXJyVGVtcCgpO1xuICAgIGlmIChwcmV2U2VhcmNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGF3YWl0IGRpc3BsYXlDYXJkKHByZXZTZWFyY2gpO1xuICAgICAgYXdhaXQgZGlzcGxheUZvcmVDYXN0KHByZXZTZWFyY2gpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG5cbnN1Ym1pdENpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBjaXR5ID0gc2VhcmNoQmFyLnZhbHVlO1xuICBjb25zb2xlLmxvZyhgc2VhcmNoYmFyIGlucHV0OiAke2NpdHl9YCk7XG4gIHRyeSB7XG4gICAgaWYgKGF3YWl0IHZhbGlkYXRlRm9ybShjaXR5KSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2luIGlmJylcbiAgICAgIHVwZGF0ZVByZXZTZWFyY2goY2l0eSk7XG4gICAgICBhd2FpdCBkaXNwbGF5Q2FyZChjaXR5KTtcbiAgICAgIGF3YWl0IGRpc3BsYXlGb3JlQ2FzdChjaXR5KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ1VuZXhwZWN0ZWQgZXJyb3IgaW4gc3VibWl0Q2l0eUJ0biBldmVudCBsaXN0ZW5lcjonLCBlcnIpO1xuICB9XG59KTtcblxuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICBzZWFyY2hCYXIuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG59KVxuXG5mYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hUZW1wU2V0dGluZ3MoXCJGXCIpKTtcbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFRlbXBTZXR0aW5ncyhcIkNcIikpO1xuXG4vLyBSdW4gZnVuY3Rpb25zIHdoZW4gcGFnZSBmaXJzdCBsb2Fkc1xuXG5kaXNwbGF5Q2FyZCgnTmV3IFlvcmsnKTtcbmRpc3BsYXlGb3JlQ2FzdCgnTmV3IFlvcmsnKTtcblxuLy8gZmV0Y2hDdXJyV2VhdGhlcignbG9uZG9uJykudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XG4vLyBmZXRjaEZvcmVjYXN0KCdsb25kb24nKS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhcImZvcmVjYXN0XCIsIHJlcykpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=