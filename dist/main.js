(self["webpackChunktic_tac_toe_2023"] = self["webpackChunktic_tac_toe_2023"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/tic-tact-toe-board Medium.jpeg */ "./src/images/tic-tact-toe-board Medium.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  /* border: 1px solid red; */\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  background: #888;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.board-container {\n  width: 1200px;\n  height: 675px;\n  display: flex;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  flex-direction: column;\n  align-items: center;\n}\n\n.board-head {\n  flex: 1;\n  color: lightblue;\n  text-align: center;\n  font-size: 1.5rem;\n\n}\n\n.play-area {\n  flex: 90;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.player-container {\n  flex: 1;\n  height: 60%;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 20px;\n  color: white;\n  margin: 30px;\n  box-shadow: 0px 0px 5px white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.player-container.turn{\n  box-shadow: 0px 0px 20px yellow;\n}\n\n.player-id {\n  font-size: 1.5rem;\n  font-weight: bolder;\n}\n.player-name {\n  font-size: 1.5rem;\n}\n.player-type {\n  font-size: 1.5rem;\n}\n.player-score {\n  font-size: 1.5rem;\n}\n.player-marker img {\n  width: 100px;\n}\n\nh1 {\n  color: blue;\n  text-align: center;\n}\n\n.board {\n  width: 720px;\n  flex: 3;\n  height: 90%;\n  display: grid;\n  grid-template-columns: 0.9fr 1.2fr 1fr;\n  grid-template-rows: 0.9fr 0.8fr 1fr;\n  gap: 50px;\n}\n\n.cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.cell:hover {\n  cursor: pointer;\n  background: #333;\n}\n\n.piece{\n  width: 60%;\n}\n\n.board-foot {\n  flex: 1;\n  color: white;\n  text-align: center;\n}\n\n.game-setup-modal {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 2rem;\n  background-color: #fffc;\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px black;\n}\n\n.game-setup {\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nfieldset {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\nlegend {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\nbutton {\n  width: 80%;\n  margin: 1rem auto;\n  display: flex;\n  justify-content: center;\n}\n.game-message {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 3rem;\n  color: yellow;\n  background: none;\n  border: none;\n  text-shadow: 0 0 4px black;\n}\n\n.game-over-modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 3rem;\n  background: white;\n  padding: 2rem;\n  border: none;\n  text-shadow: 0 0 4px black;\n  border-radius: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,8CAA8C;EAC9C,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,yDAA+D;EAC/D,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;;AAEnB;;AAEA;EACE,QAAQ;EACR,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,OAAO;EACP,WAAW;EACX,0CAA0C;EAC1C,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,OAAO;EACP,WAAW;EACX,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,kBAAkB;AACpB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  /* border: 1px solid red; */\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  background: #888;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.board-container {\n  width: 1200px;\n  height: 675px;\n  display: flex;\n  background-image: url(\"images/tic-tact-toe-board\\ Medium.jpeg\");\n  background-size: cover;\n  flex-direction: column;\n  align-items: center;\n}\n\n.board-head {\n  flex: 1;\n  color: lightblue;\n  text-align: center;\n  font-size: 1.5rem;\n\n}\n\n.play-area {\n  flex: 90;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.player-container {\n  flex: 1;\n  height: 60%;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 20px;\n  color: white;\n  margin: 30px;\n  box-shadow: 0px 0px 5px white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.player-container.turn{\n  box-shadow: 0px 0px 20px yellow;\n}\n\n.player-id {\n  font-size: 1.5rem;\n  font-weight: bolder;\n}\n.player-name {\n  font-size: 1.5rem;\n}\n.player-type {\n  font-size: 1.5rem;\n}\n.player-score {\n  font-size: 1.5rem;\n}\n.player-marker img {\n  width: 100px;\n}\n\nh1 {\n  color: blue;\n  text-align: center;\n}\n\n.board {\n  width: 720px;\n  flex: 3;\n  height: 90%;\n  display: grid;\n  grid-template-columns: 0.9fr 1.2fr 1fr;\n  grid-template-rows: 0.9fr 0.8fr 1fr;\n  gap: 50px;\n}\n\n.cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.cell:hover {\n  cursor: pointer;\n  background: #333;\n}\n\n.piece{\n  width: 60%;\n}\n\n.board-foot {\n  flex: 1;\n  color: white;\n  text-align: center;\n}\n\n.game-setup-modal {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 2rem;\n  background-color: #fffc;\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px black;\n}\n\n.game-setup {\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nfieldset {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\nlegend {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\nbutton {\n  width: 80%;\n  margin: 1rem auto;\n  display: flex;\n  justify-content: center;\n}\n.game-message {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 3rem;\n  color: yellow;\n  background: none;\n  border: none;\n  text-shadow: 0 0 4px black;\n}\n\n.game-over-modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 3rem;\n  background: white;\n  padding: 2rem;\n  border: none;\n  text-shadow: 0 0 4px black;\n  border-radius: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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
/***/ ((module) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module) => {

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

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Cell class
// Each playable location on the board is a cell object
const Cell = () => {
  let value = '.';

  const setValue = (marker) => {
    value = marker;
  };

  const getValue = () => value;

  return { setValue, getValue };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);

/***/ }),

/***/ "./src/delay.js":
/*!**********************!*\
  !*** ./src/delay.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Global function
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delay);


/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalConstant */ "./src/globalConstant.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./src/cell.js");



// Game board class
const GameBoard = () => {
  let board = [];

  // Creat a 3x3 board, each location is a Cell object
  const resetBoard = () => {
    board = [];
    for (let row = 0; row < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; row++) {
      board[row] = [];
      for (let col = 0; col < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; col++) {
        board[row].push((0,_cell__WEBPACK_IMPORTED_MODULE_1__["default"])());
      }
    }
  };
  resetBoard();

  // Getter function for the board
  const getBoard = () => {
    return board;
  };

  // Function to print the board to the console
  const printBoard = () => {
    const values = board
      .map((row) => row.map((cell) => cell.getValue()).join(' '))
      .join('\n');
    console.log(values);
  };

  // Place the marker of the active player in desired cell
  const placeMarker = (row, col, player) => {
    board[row][col].setValue(player);
  };

  function checkWinner() {
    // Check rows
    for (let i = 0; i < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; i++) {
      if (equals3(board[i][0], board[i][1], board[i][2])) {
        return board[i][0].getValue();
      }
    }
    // Check columns
    for (let i = 0; i < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; i++) {
      if (equals3(board[0][i], board[1][i], board[2][i])) {
        return board[0][i].getValue();
      }
    }
    // Check diagnal
    if (equals3(board[0][0], board[1][1], board[2][2])) {
      return board[1][1].getValue();
    }
    // Check the other diagnal
    if (equals3(board[0][2], board[1][1], board[2][0])) {
      return board[1][1].getValue();
    }
    // Check for tie
    let occupiedSqures = 0;
    for (let i = 0; i < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; i++) {
      for (let j = 0; j < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; j++) {
        if (board[i][j].getValue() !== '.') occupiedSqures++;
      }
    }
    if (occupiedSqures === 9) return 'tie'; // All squares are taken up
    return null; // Not a game terminating play
  }

  // Compare if 3 cells have equal values (markers)
  function equals3(a, b, c) {
    const result =
      a.getValue() === b.getValue() &&
      a.getValue() === c.getValue() &&
      a.getValue() !== '.';
    return result;
  }

  // Check is a cell is available for playing
  const isAvailable = (row, col) => {
    if (board[row][col].getValue() === '.') {
      return true;
    }
    return false;
  };

  // Count the number of cells that are avaialble
  const availableCells = () => {
    count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (isAvailable) {
          count++;
        }
      }
    }
    return count;
  };

  return {
    resetBoard,
    getBoard,
    printBoard,
    placeMarker,
    checkWinner,
    isAvailable,
    availableCells,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _ramdomPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ramdomPlay */ "./src/ramdomPlay.js");
/* harmony import */ var _miniMax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miniMax */ "./src/miniMax.js");




// Game controller where the game playing logic is
const GameController = (players, startPlayerIndex) => {
  const board = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  board.printBoard();

  let activePlayer = players[startPlayerIndex];
  console.log(activePlayer);

  const getActivePlayer = () => activePlayer;

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const makeComputerPlay = () => {
    let result;
    // Computer player plays
    if (activePlayer.type === 'random') {
      result = (0,_ramdomPlay__WEBPACK_IMPORTED_MODULE_1__["default"])(board, activePlayer.marker);
      board.printBoard();
      if (result) return result;
      switchPlayer();
    }

    if (activePlayer.type === 'ai') {
      result = (0,_miniMax__WEBPACK_IMPORTED_MODULE_2__["default"])(board, activePlayer.marker);
      board.printBoard();
      if (result) return result;
      switchPlayer();
    }
  };

  // Make a play in a chosen cell
  // If there is a computer player, the computer makes a play too
  const playRound = (row, col) => {
    let result;

    // Play the human player play
    console.log("human player plays");
    board.placeMarker(row, col, activePlayer.marker);
    board.printBoard();

    // Check for end of game and game result
    result = board.checkWinner();
    if (result) return result;

    switchPlayer();

    // Computer player plays
    console.log("Computer plays");
    result = makeComputerPlay();
    if (result) return result;
  };

  // If computer player is player 1, make a computer play first
  if (activePlayer.type !== 'human') {
    console.log("Computer 1st plays");
    makeComputerPlay();
  }

  return { playRound, getBoard: board.getBoard,  resetBoard: board.resetBoard, getActivePlayer };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);


/***/ }),

/***/ "./src/globalConstant.js":
/*!*******************************!*\
  !*** ./src/globalConstant.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardSize": () => (/* binding */ BoardSize)
/* harmony export */ });
// Global constants
const BoardSize = 3;




/***/ }),

/***/ "./src/images/O.png":
/*!**************************!*\
  !*** ./src/images/O.png ***!
  \**************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/images/X.png":
/*!**************************!*\
  !*** ./src/images/X.png ***!
  \**************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");


// Create ScreenController instance and play game
(0,_screenController__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/miniMax.js":
/*!************************!*\
  !*** ./src/miniMax.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalConstant */ "./src/globalConstant.js");


// A computer player that plays using the Minimax algorithm
const makeMinimaxPlay = (board, marker) => {
  let bestScore = -Infinity;
  let bestRow, bestCol;
  let result;
  const oppositeMarker = marker === 'O' ? 'X' : 'O';

  // Go through all avaialble cells to find the best posible move
  for (let row = 0; row < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; row++) {
    for (let col = 0; col < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; col++) {
      if (board.isAvailable(row, col)) {
        // Try to play an available cell
        board.placeMarker(row, col, marker);
        // Recursively get the score of this play
        const score = minimax(board, false);
        // Record if it is a better move
        if (score > bestScore) {
          bestScore = score;
          bestRow = row;
          bestCol = col;
        }
        // Reset the cell
        board.placeMarker(row, col, '.');
      }
    }
  }

  // Play the best move found
  board.placeMarker(bestRow, bestCol, marker);

  // If the games with a winner of tie, return result
  result = board.checkWinner();
  if (result) return result;

  // Recursive minimax algorithm
  function minimax(board, isMaximizing) {
    // Terminating condition for the recursive algorithm
    const result = board.checkWinner();
    if (result !== null) {
      if (result === marker) {
        return 10;
      } 
      if (result === 'tie') {
        return 0;
      } 
      if (result === oppositeMarker) {
        return -10;
      } 
    }

    // Alternate between Min and Max players
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; i++) {
        for (let j = 0; j < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; j++) {
          if (board.isAvailable(i, j)) {
            board.placeMarker(i, j, marker);
            const score = minimax(board, false);
            bestScore = Math.max(score, bestScore);
            board.placeMarker(i, j, '.');
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; i++) {
        for (let j = 0; j < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; j++) {
          if (board.isAvailable(i, j)) {
            board.placeMarker(i, j, oppositeMarker);
            const score = minimax(board, true);
            bestScore = Math.min(score, bestScore);
            board.placeMarker(i, j, '.');
          }
        }
      }
      return bestScore;
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMinimaxPlay);


/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Players": () => (/* binding */ Players)
/* harmony export */ });
const Players = () => {
  let players = [];

  const setPlayers = (values) => {
    players = values;
  };

  const getPlayers = () => players;

  return {setPlayers, getPlayers};
};




/***/ }),

/***/ "./src/ramdomPlay.js":
/*!***************************!*\
  !*** ./src/ramdomPlay.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// A computer player that plays at random cells
const makeRandomPlay = (board, marker) => {
  let row, col;
  let result; // Result from checkWinner, can be 'X', 'O', 'Tie', or null

  // Try until computer finds a valid cell to play
  do {
    row = Math.floor(Math.random() * 3);
    col = Math.floor(Math.random() * 3);
  } while (!board.isAvailable(row, col));

  // Play a valid move
  board.placeMarker(row, col, marker);
  result = board.checkWinner();

  // Getting a valid result means a game is ended with a winner or a tie
  if (result) return result;

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeRandomPlay);

/***/ }),

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameController */ "./src/gameController.js");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delay */ "./src/delay.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _images_O_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/O.png */ "./src/images/O.png");
/* harmony import */ var _images_O_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_O_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_X_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/X.png */ "./src/images/X.png");
/* harmony import */ var _images_X_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_X_png__WEBPACK_IMPORTED_MODULE_5__);







// The ScreenController that presents a view and gets user requests
const ScreenController = async () => {
  const playersObj = (0,_players__WEBPACK_IMPORTED_MODULE_3__.Players)();
  let players;
  let numGames;
  let winnerIndex = 1;
  let scores = [0, 0, 0]; // Scores for player 1, player 2, tie
  const boardEl = document.querySelector('.board');
  const resultsEl = document.querySelector('.results');

  const playGame = (players, startPlayerIndex) => {
    let game = (0,_gameController__WEBPACK_IMPORTED_MODULE_1__["default"])(players, startPlayerIndex);

    return new Promise((resolve) => {
      // Redraws the game board in the web page
      const updateScreen = () => {
        boardEl.innerHTML = '';
        const board = game.getBoard();

        for (let row = 0; row < board.length; row++) {
          for (let col = 0; col < board.length; col++) {
            // Creates each cell element
            const cellEl = document.createElement('div');
            cellEl.classList.add('cell');
            // cellEl.textContent = board[row][col].getValue();

            // Add data attributes to the cell elements that can be accessed by event handler
            cellEl.dataset.row = row;
            cellEl.dataset.col = col;

            const marker = board[row][col].getValue();
            const markerEl = document.createElement('img');
            // markerEl.src = marker === 'X' ? xIcon : oIcon;
            markerEl.classList.add('piece');
            cellEl.appendChild(markerEl);

            // Style and disable played cells
            if (marker === 'X') {
              markerEl.src = (_images_X_png__WEBPACK_IMPORTED_MODULE_5___default());
              // Disables click, no more hover effect, cursor becomes default
              cellEl.style.pointerEvents = 'none';
            }
            if (marker === 'O') {
              markerEl.src = (_images_O_png__WEBPACK_IMPORTED_MODULE_4___default());
              // Disables click, no more hover effect, cursor becomes default
              cellEl.style.pointerEvents = 'none';
            }
            boardEl.appendChild(cellEl);
          }
        }
      };

      // Handles clicks on the board
      // Needs to be ayncs to use the delay function to delay the alerts
      async function clickHandlerBoard(e) {
        // Error handling for is the game previously created is already handled.
        if (game === null) return;
        updateScreen();

        const row = e.target.dataset.row;
        const col = e.target.dataset.col;
        let result;

        // Ignore invalid user input
        // When a cell has already been clicked, it's pointer event is disabled
        // Cliked on it results in row and col being undefined
        if (!row || !col) return;

        // Play a valid move
        result = game.playRound(row, col);
        updateScreen();
        if (result) {
          game.resetBoard();
          if (result === 'tie') {
            // Terminate this game.  This causes some issues with Promise
            // Error message in console. But the game runs fine.
            game = null;
            resolve(2); // Index of Tie is Scores is 2
          } else {
            winnerIndex = players.indexOf(game.getActivePlayer());
            // Terminate this game.  This causes some issues with Promise
            // Error message in console. But the game runs fine.
            game = null;
            resolve(winnerIndex);
          }
        }
      }
      updateScreen();
      boardEl.addEventListener('click', clickHandlerBoard);
    });
  };

  const playMultipleGames = (numGames, players) => {
    let gameIndex = 0;
    // updateScoresDisplay();

    const playNextGame = (startPlayerIndex) => {
      return playGame(players, startPlayerIndex).then(async (winnerIndex) => {
        // update the scores
        scores[winnerIndex] += 1;
        updateScoresDisplay();
        const gameMsgEl = document.querySelector('.game-message');

        // display result of each game
        if (winnerIndex < 2) {
          gameMsgEl.innerText = `${players[winnerIndex].name} wins!`;
        } else {
          gameMsgEl.innerText = 'Tie!';
        }

        gameMsgEl.showModal();
        setTimeout(() => {
          gameMsgEl.close();
        }, 1000);
        await (0,_delay__WEBPACK_IMPORTED_MODULE_2__["default"])(1000);

        // check if all games have been played
        if (gameIndex >= numGames - 1) {
          // alert('Game Over!');
          const gameOverModal = document.querySelector('.game-over-modal');
          const restartBtn = document.querySelector('#restart-game');
          gameOverModal.showModal();
          restartBtn.addEventListener('click', (event) => {
            event.preventDefault();
            gameOverModal.close();
            // game();
            window.location.reload();
          });
          return scores;
        }

        // otherwise, determine who goes first next and play the next game
        gameIndex += 1;
        const nextStartPlayerIndex = winnerIndex === 1 ? 0 : 1;
        return playNextGame(nextStartPlayerIndex);
      });
    };

    // start the first game
    return playNextGame(0);
  };

  const initScoresDisplay = () => {
    const player1NameEl = document.querySelector('#player1-name');
    player1NameEl.innerText = players[0].name;
    const player2NameEl = document.querySelector('#player2-name');
    player2NameEl.innerText = players[1].name;

    const player1TypeEl = document.querySelector('#player1-type');
    player1TypeEl.innerText = players[0].type;
    const player2TypeEl = document.querySelector('#player2-type');
    player2TypeEl.innerText = players[1].type;

    const player1MarkerEl = document.querySelector('#player1-marker');
    player1MarkerEl.src = players[0].marker === 'X' ? (_images_X_png__WEBPACK_IMPORTED_MODULE_5___default()) : (_images_O_png__WEBPACK_IMPORTED_MODULE_4___default());

    const player2MarkerEl = document.querySelector('#player2-marker');
    player2MarkerEl.src = players[1].marker === 'X' ? (_images_X_png__WEBPACK_IMPORTED_MODULE_5___default()) : (_images_O_png__WEBPACK_IMPORTED_MODULE_4___default());
  };

  const updateScoresDisplay = () => {
    const player1ScoreEl = document.querySelector('#player1-score');
    player1ScoreEl.innerHTML = scores[0];
    const player2ScoreEl = document.querySelector('#player2-score');
    player2ScoreEl.innerHTML = scores[1];
    const boardFootEl = document.querySelector('.board-foot');
    boardFootEl.innerHTML = 'Ties: ' + scores[2];
  };

  // Game setup modal
  const gameSetupModal = document.querySelector('.game-setup-modal');
  const startBtn = document.querySelector('#start-game');

  gameSetupModal.showModal();
  startBtn.addEventListener('click', (e) => {
    e.preventDefault();

    playersObj.setPlayers([
      {
        name: document.querySelector('#player1-name-input').value,
        marker: 'X',
        type: 'human',
      },
      {
        name: document.querySelector('#player2-name-input').value,
        marker: 'O',
        type: document.querySelector('#player2-type-input').value,
      },
    ]);
    players = playersObj.getPlayers();
    numGames = document.querySelector('#number-of-games').value;
    gameSetupModal.close();

    initScoresDisplay();

    playMultipleGames(numGames, players);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenController);


/***/ }),

/***/ "./src/images/tic-tact-toe-board Medium.jpeg":
/*!***************************************************!*\
  !*** ./src/images/tic-tact-toe-board Medium.jpeg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4e170b243869a3b0edd6.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUMsMkJBQTJCO0FBQzlELFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxjQUFjLGtEQUFLOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0Qsc0RBQUssR0FBRyxzREFBSzs7QUFFbkU7QUFDQSxzREFBc0Qsc0RBQUssR0FBRyxzREFBSztBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9jZWxsLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL2dsb2JhbENvbnN0YW50LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9taW5pTWF4LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL3JhbWRvbVBsYXkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9zY3JlZW5Db250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdGljLXRhY3QtdG9lLWJvYXJkIE1lZGl1bS5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEyMDBweDtcXG4gIGhlaWdodDogNjc1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWhlYWQge1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiBsaWdodGJsdWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG5cXG59XFxuXFxuLnBsYXktYXJlYSB7XFxuICBmbGV4OiA5MDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLnBsYXllci1jb250YWluZXIudHVybntcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCB5ZWxsb3c7XFxufVxcblxcbi5wbGF5ZXItaWQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4ucGxheWVyLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5wbGF5ZXItdHlwZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLnBsYXllci1zY29yZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLnBsYXllci1tYXJrZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICB3aWR0aDogNzIwcHg7XFxuICBmbGV4OiAzO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjlmciAxLjJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuOWZyIDAuOGZyIDFmcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxufVxcblxcbi5waWVjZXtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5ib2FyZC1mb290IHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLXNldHVwLW1vZGFsIHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggYmxhY2s7XFxufVxcblxcbi5nYW1lLXNldHVwIHtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdhbWUtbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDRweCBibGFjaztcXG59XFxuXFxuLmdhbWUtb3Zlci1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA0cHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qiw4Q0FBOEM7RUFDOUMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYix5REFBK0Q7RUFDL0Qsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsUUFBUTtFQUNSLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztFQUNQLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTIwMHB4O1xcbiAgaGVpZ2h0OiA2NzVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImltYWdlcy90aWMtdGFjdC10b2UtYm9hcmRcXFxcIE1lZGl1bS5qcGVnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1oZWFkIHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogbGlnaHRibHVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgZmxleDogOTA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1jb250YWluZXIge1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMzBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5wbGF5ZXItY29udGFpbmVyLnR1cm57XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggeWVsbG93O1xcbn1cXG5cXG4ucGxheWVyLWlkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLnBsYXllci1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ucGxheWVyLXR5cGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5wbGF5ZXItc2NvcmUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5wbGF5ZXItbWFya2VyIGltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgd2lkdGg6IDcyMHB4O1xcbiAgZmxleDogMztcXG4gIGhlaWdodDogOTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC45ZnIgMS4yZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjlmciAwLjhmciAxZnI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbn1cXG5cXG4ucGllY2V7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uYm9hcmQtZm9vdCB7XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1zZXR1cC1tb2RhbCB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZjO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1zZXR1cCB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5nYW1lLW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA0cHggYmxhY2s7XFxufVxcblxcbi5nYW1lLW92ZXItbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gQ2VsbCBjbGFzc1xuLy8gRWFjaCBwbGF5YWJsZSBsb2NhdGlvbiBvbiB0aGUgYm9hcmQgaXMgYSBjZWxsIG9iamVjdFxuY29uc3QgQ2VsbCA9ICgpID0+IHtcbiAgbGV0IHZhbHVlID0gJy4nO1xuXG4gIGNvbnN0IHNldFZhbHVlID0gKG1hcmtlcikgPT4ge1xuICAgIHZhbHVlID0gbWFya2VyO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlID0gKCkgPT4gdmFsdWU7XG5cbiAgcmV0dXJuIHsgc2V0VmFsdWUsIGdldFZhbHVlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDZWxsOyIsIi8vIEdsb2JhbCBmdW5jdGlvblxuZnVuY3Rpb24gZGVsYXkodGltZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxheTtcbiIsImltcG9ydCB7IEJvYXJkU2l6ZSB9IGZyb20gJy4vZ2xvYmFsQ29uc3RhbnQnO1xuaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcblxuLy8gR2FtZSBib2FyZCBjbGFzc1xuY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBbXTtcblxuICAvLyBDcmVhdCBhIDN4MyBib2FyZCwgZWFjaCBsb2NhdGlvbiBpcyBhIENlbGwgb2JqZWN0XG4gIGNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBCb2FyZFNpemU7IHJvdysrKSB7XG4gICAgICBib2FyZFtyb3ddID0gW107XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBCb2FyZFNpemU7IGNvbCsrKSB7XG4gICAgICAgIGJvYXJkW3Jvd10ucHVzaChDZWxsKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmVzZXRCb2FyZCgpO1xuXG4gIC8vIEdldHRlciBmdW5jdGlvbiBmb3IgdGhlIGJvYXJkXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byBwcmludCB0aGUgYm9hcmQgdG8gdGhlIGNvbnNvbGVcbiAgY29uc3QgcHJpbnRCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBib2FyZFxuICAgICAgLm1hcCgocm93KSA9PiByb3cubWFwKChjZWxsKSA9PiBjZWxsLmdldFZhbHVlKCkpLmpvaW4oJyAnKSlcbiAgICAgIC5qb2luKCdcXG4nKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuICB9O1xuXG4gIC8vIFBsYWNlIHRoZSBtYXJrZXIgb2YgdGhlIGFjdGl2ZSBwbGF5ZXIgaW4gZGVzaXJlZCBjZWxsXG4gIGNvbnN0IHBsYWNlTWFya2VyID0gKHJvdywgY29sLCBwbGF5ZXIpID0+IHtcbiAgICBib2FyZFtyb3ddW2NvbF0uc2V0VmFsdWUocGxheWVyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjaGVja1dpbm5lcigpIHtcbiAgICAvLyBDaGVjayByb3dzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCb2FyZFNpemU7IGkrKykge1xuICAgICAgaWYgKGVxdWFsczMoYm9hcmRbaV1bMF0sIGJvYXJkW2ldWzFdLCBib2FyZFtpXVsyXSkpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkW2ldWzBdLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIENoZWNrIGNvbHVtbnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgICBpZiAoZXF1YWxzMyhib2FyZFswXVtpXSwgYm9hcmRbMV1baV0sIGJvYXJkWzJdW2ldKSkge1xuICAgICAgICByZXR1cm4gYm9hcmRbMF1baV0uZ2V0VmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2hlY2sgZGlhZ25hbFxuICAgIGlmIChlcXVhbHMzKGJvYXJkWzBdWzBdLCBib2FyZFsxXVsxXSwgYm9hcmRbMl1bMl0pKSB7XG4gICAgICByZXR1cm4gYm9hcmRbMV1bMV0uZ2V0VmFsdWUoKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgdGhlIG90aGVyIGRpYWduYWxcbiAgICBpZiAoZXF1YWxzMyhib2FyZFswXVsyXSwgYm9hcmRbMV1bMV0sIGJvYXJkWzJdWzBdKSkge1xuICAgICAgcmV0dXJuIGJvYXJkWzFdWzFdLmdldFZhbHVlKCk7XG4gICAgfVxuICAgIC8vIENoZWNrIGZvciB0aWVcbiAgICBsZXQgb2NjdXBpZWRTcXVyZXMgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQm9hcmRTaXplOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQm9hcmRTaXplOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdLmdldFZhbHVlKCkgIT09ICcuJykgb2NjdXBpZWRTcXVyZXMrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9jY3VwaWVkU3F1cmVzID09PSA5KSByZXR1cm4gJ3RpZSc7IC8vIEFsbCBzcXVhcmVzIGFyZSB0YWtlbiB1cFxuICAgIHJldHVybiBudWxsOyAvLyBOb3QgYSBnYW1lIHRlcm1pbmF0aW5nIHBsYXlcbiAgfVxuXG4gIC8vIENvbXBhcmUgaWYgMyBjZWxscyBoYXZlIGVxdWFsIHZhbHVlcyAobWFya2VycylcbiAgZnVuY3Rpb24gZXF1YWxzMyhhLCBiLCBjKSB7XG4gICAgY29uc3QgcmVzdWx0ID1cbiAgICAgIGEuZ2V0VmFsdWUoKSA9PT0gYi5nZXRWYWx1ZSgpICYmXG4gICAgICBhLmdldFZhbHVlKCkgPT09IGMuZ2V0VmFsdWUoKSAmJlxuICAgICAgYS5nZXRWYWx1ZSgpICE9PSAnLic7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIENoZWNrIGlzIGEgY2VsbCBpcyBhdmFpbGFibGUgZm9yIHBsYXlpbmdcbiAgY29uc3QgaXNBdmFpbGFibGUgPSAocm93LCBjb2wpID0+IHtcbiAgICBpZiAoYm9hcmRbcm93XVtjb2xdLmdldFZhbHVlKCkgPT09ICcuJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIGNlbGxzIHRoYXQgYXJlIGF2YWlhbGJsZVxuICBjb25zdCBhdmFpbGFibGVDZWxscyA9ICgpID0+IHtcbiAgICBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVzZXRCb2FyZCxcbiAgICBnZXRCb2FyZCxcbiAgICBwcmludEJvYXJkLFxuICAgIHBsYWNlTWFya2VyLFxuICAgIGNoZWNrV2lubmVyLFxuICAgIGlzQXZhaWxhYmxlLFxuICAgIGF2YWlsYWJsZUNlbGxzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVCb2FyZCc7XG5pbXBvcnQgbWFrZVJhbmRvbVBsYXkgZnJvbSAnLi9yYW1kb21QbGF5JztcbmltcG9ydCBtYWtlTWluaW1heFBsYXkgZnJvbSAnLi9taW5pTWF4JztcblxuLy8gR2FtZSBjb250cm9sbGVyIHdoZXJlIHRoZSBnYW1lIHBsYXlpbmcgbG9naWMgaXNcbmNvbnN0IEdhbWVDb250cm9sbGVyID0gKHBsYXllcnMsIHN0YXJ0UGxheWVySW5kZXgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgYm9hcmQucHJpbnRCb2FyZCgpO1xuXG4gIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzW3N0YXJ0UGxheWVySW5kZXhdO1xuICBjb25zb2xlLmxvZyhhY3RpdmVQbGF5ZXIpO1xuXG4gIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGFjdGl2ZVBsYXllcjtcblxuICBjb25zdCBzd2l0Y2hQbGF5ZXIgPSAoKSA9PiB7XG4gICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07XG4gIH07XG5cbiAgY29uc3QgbWFrZUNvbXB1dGVyUGxheSA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIC8vIENvbXB1dGVyIHBsYXllciBwbGF5c1xuICAgIGlmIChhY3RpdmVQbGF5ZXIudHlwZSA9PT0gJ3JhbmRvbScpIHtcbiAgICAgIHJlc3VsdCA9IG1ha2VSYW5kb21QbGF5KGJvYXJkLCBhY3RpdmVQbGF5ZXIubWFya2VyKTtcbiAgICAgIGJvYXJkLnByaW50Qm9hcmQoKTtcbiAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlUGxheWVyLnR5cGUgPT09ICdhaScpIHtcbiAgICAgIHJlc3VsdCA9IG1ha2VNaW5pbWF4UGxheShib2FyZCwgYWN0aXZlUGxheWVyLm1hcmtlcik7XG4gICAgICBib2FyZC5wcmludEJvYXJkKCk7XG4gICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgc3dpdGNoUGxheWVyKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIE1ha2UgYSBwbGF5IGluIGEgY2hvc2VuIGNlbGxcbiAgLy8gSWYgdGhlcmUgaXMgYSBjb21wdXRlciBwbGF5ZXIsIHRoZSBjb21wdXRlciBtYWtlcyBhIHBsYXkgdG9vXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChyb3csIGNvbCkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICAvLyBQbGF5IHRoZSBodW1hbiBwbGF5ZXIgcGxheVxuICAgIGNvbnNvbGUubG9nKFwiaHVtYW4gcGxheWVyIHBsYXlzXCIpO1xuICAgIGJvYXJkLnBsYWNlTWFya2VyKHJvdywgY29sLCBhY3RpdmVQbGF5ZXIubWFya2VyKTtcbiAgICBib2FyZC5wcmludEJvYXJkKCk7XG5cbiAgICAvLyBDaGVjayBmb3IgZW5kIG9mIGdhbWUgYW5kIGdhbWUgcmVzdWx0XG4gICAgcmVzdWx0ID0gYm9hcmQuY2hlY2tXaW5uZXIoKTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuXG4gICAgc3dpdGNoUGxheWVyKCk7XG5cbiAgICAvLyBDb21wdXRlciBwbGF5ZXIgcGxheXNcbiAgICBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIHBsYXlzXCIpO1xuICAgIHJlc3VsdCA9IG1ha2VDb21wdXRlclBsYXkoKTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIElmIGNvbXB1dGVyIHBsYXllciBpcyBwbGF5ZXIgMSwgbWFrZSBhIGNvbXB1dGVyIHBsYXkgZmlyc3RcbiAgaWYgKGFjdGl2ZVBsYXllci50eXBlICE9PSAnaHVtYW4nKSB7XG4gICAgY29uc29sZS5sb2coXCJDb21wdXRlciAxc3QgcGxheXNcIik7XG4gICAgbWFrZUNvbXB1dGVyUGxheSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGxheVJvdW5kLCBnZXRCb2FyZDogYm9hcmQuZ2V0Qm9hcmQsICByZXNldEJvYXJkOiBib2FyZC5yZXNldEJvYXJkLCBnZXRBY3RpdmVQbGF5ZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiLy8gR2xvYmFsIGNvbnN0YW50c1xuY29uc3QgQm9hcmRTaXplID0gMztcblxuZXhwb3J0IHsgQm9hcmRTaXplIH07XG4iLCJpbXBvcnQgU2NyZWVuQ29udHJvbGxlciBmcm9tICcuL3NjcmVlbkNvbnRyb2xsZXInO1xuXG4vLyBDcmVhdGUgU2NyZWVuQ29udHJvbGxlciBpbnN0YW5jZSBhbmQgcGxheSBnYW1lXG5TY3JlZW5Db250cm9sbGVyKCk7XG4iLCJpbXBvcnQgeyBCb2FyZFNpemUgfSBmcm9tICcuL2dsb2JhbENvbnN0YW50JztcblxuLy8gQSBjb21wdXRlciBwbGF5ZXIgdGhhdCBwbGF5cyB1c2luZyB0aGUgTWluaW1heCBhbGdvcml0aG1cbmNvbnN0IG1ha2VNaW5pbWF4UGxheSA9IChib2FyZCwgbWFya2VyKSA9PiB7XG4gIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gIGxldCBiZXN0Um93LCBiZXN0Q29sO1xuICBsZXQgcmVzdWx0O1xuICBjb25zdCBvcHBvc2l0ZU1hcmtlciA9IG1hcmtlciA9PT0gJ08nID8gJ1gnIDogJ08nO1xuXG4gIC8vIEdvIHRocm91Z2ggYWxsIGF2YWlhbGJsZSBjZWxscyB0byBmaW5kIHRoZSBiZXN0IHBvc2libGUgbW92ZVxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBCb2FyZFNpemU7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgQm9hcmRTaXplOyBjb2wrKykge1xuICAgICAgaWYgKGJvYXJkLmlzQXZhaWxhYmxlKHJvdywgY29sKSkge1xuICAgICAgICAvLyBUcnkgdG8gcGxheSBhbiBhdmFpbGFibGUgY2VsbFxuICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihyb3csIGNvbCwgbWFya2VyKTtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZ2V0IHRoZSBzY29yZSBvZiB0aGlzIHBsYXlcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBtaW5pbWF4KGJvYXJkLCBmYWxzZSk7XG4gICAgICAgIC8vIFJlY29yZCBpZiBpdCBpcyBhIGJldHRlciBtb3ZlXG4gICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICAgIGJlc3RSb3cgPSByb3c7XG4gICAgICAgICAgYmVzdENvbCA9IGNvbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB0aGUgY2VsbFxuICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihyb3csIGNvbCwgJy4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQbGF5IHRoZSBiZXN0IG1vdmUgZm91bmRcbiAgYm9hcmQucGxhY2VNYXJrZXIoYmVzdFJvdywgYmVzdENvbCwgbWFya2VyKTtcblxuICAvLyBJZiB0aGUgZ2FtZXMgd2l0aCBhIHdpbm5lciBvZiB0aWUsIHJldHVybiByZXN1bHRcbiAgcmVzdWx0ID0gYm9hcmQuY2hlY2tXaW5uZXIoKTtcbiAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyBSZWN1cnNpdmUgbWluaW1heCBhbGdvcml0aG1cbiAgZnVuY3Rpb24gbWluaW1heChib2FyZCwgaXNNYXhpbWl6aW5nKSB7XG4gICAgLy8gVGVybWluYXRpbmcgY29uZGl0aW9uIGZvciB0aGUgcmVjdXJzaXZlIGFsZ29yaXRobVxuICAgIGNvbnN0IHJlc3VsdCA9IGJvYXJkLmNoZWNrV2lubmVyKCk7XG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHJlc3VsdCA9PT0gbWFya2VyKSB7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICAgIH0gXG4gICAgICBpZiAocmVzdWx0ID09PSAndGllJykge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gXG4gICAgICBpZiAocmVzdWx0ID09PSBvcHBvc2l0ZU1hcmtlcikge1xuICAgICAgICByZXR1cm4gLTEwO1xuICAgICAgfSBcbiAgICB9XG5cbiAgICAvLyBBbHRlcm5hdGUgYmV0d2VlbiBNaW4gYW5kIE1heCBwbGF5ZXJzXG4gICAgaWYgKGlzTWF4aW1pemluZykge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQm9hcmRTaXplOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBCb2FyZFNpemU7IGorKykge1xuICAgICAgICAgIGlmIChib2FyZC5pc0F2YWlsYWJsZShpLCBqKSkge1xuICAgICAgICAgICAgYm9hcmQucGxhY2VNYXJrZXIoaSwgaiwgbWFya2VyKTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5tYXgoc2NvcmUsIGJlc3RTY29yZSk7XG4gICAgICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihpLCBqLCAnLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJlc3RTY29yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCb2FyZFNpemU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEJvYXJkU2l6ZTsgaisrKSB7XG4gICAgICAgICAgaWYgKGJvYXJkLmlzQXZhaWxhYmxlKGksIGopKSB7XG4gICAgICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihpLCBqLCBvcHBvc2l0ZU1hcmtlcik7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIHRydWUpO1xuICAgICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5taW4oc2NvcmUsIGJlc3RTY29yZSk7XG4gICAgICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihpLCBqLCAnLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJlc3RTY29yZTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNaW5pbWF4UGxheTtcbiIsImNvbnN0IFBsYXllcnMgPSAoKSA9PiB7XG4gIGxldCBwbGF5ZXJzID0gW107XG5cbiAgY29uc3Qgc2V0UGxheWVycyA9ICh2YWx1ZXMpID0+IHtcbiAgICBwbGF5ZXJzID0gdmFsdWVzO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiBwbGF5ZXJzO1xuXG4gIHJldHVybiB7c2V0UGxheWVycywgZ2V0UGxheWVyc307XG59O1xuXG5leHBvcnQgeyBQbGF5ZXJzIH07XG4iLCIvLyBBIGNvbXB1dGVyIHBsYXllciB0aGF0IHBsYXlzIGF0IHJhbmRvbSBjZWxsc1xuY29uc3QgbWFrZVJhbmRvbVBsYXkgPSAoYm9hcmQsIG1hcmtlcikgPT4ge1xuICBsZXQgcm93LCBjb2w7XG4gIGxldCByZXN1bHQ7IC8vIFJlc3VsdCBmcm9tIGNoZWNrV2lubmVyLCBjYW4gYmUgJ1gnLCAnTycsICdUaWUnLCBvciBudWxsXG5cbiAgLy8gVHJ5IHVudGlsIGNvbXB1dGVyIGZpbmRzIGEgdmFsaWQgY2VsbCB0byBwbGF5XG4gIGRvIHtcbiAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgICBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgfSB3aGlsZSAoIWJvYXJkLmlzQXZhaWxhYmxlKHJvdywgY29sKSk7XG5cbiAgLy8gUGxheSBhIHZhbGlkIG1vdmVcbiAgYm9hcmQucGxhY2VNYXJrZXIocm93LCBjb2wsIG1hcmtlcik7XG4gIHJlc3VsdCA9IGJvYXJkLmNoZWNrV2lubmVyKCk7XG5cbiAgLy8gR2V0dGluZyBhIHZhbGlkIHJlc3VsdCBtZWFucyBhIGdhbWUgaXMgZW5kZWQgd2l0aCBhIHdpbm5lciBvciBhIHRpZVxuICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlUmFuZG9tUGxheTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2dhbWVDb250cm9sbGVyJztcbmltcG9ydCBkZWxheSBmcm9tICcuL2RlbGF5JztcbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tICcuL3BsYXllcnMnO1xuaW1wb3J0IG9JY29uIGZyb20gJy4vaW1hZ2VzL08ucG5nJztcbmltcG9ydCB4SWNvbiBmcm9tICcuL2ltYWdlcy9YLnBuZyc7XG5cbi8vIFRoZSBTY3JlZW5Db250cm9sbGVyIHRoYXQgcHJlc2VudHMgYSB2aWV3IGFuZCBnZXRzIHVzZXIgcmVxdWVzdHNcbmNvbnN0IFNjcmVlbkNvbnRyb2xsZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBsYXllcnNPYmogPSBQbGF5ZXJzKCk7XG4gIGxldCBwbGF5ZXJzO1xuICBsZXQgbnVtR2FtZXM7XG4gIGxldCB3aW5uZXJJbmRleCA9IDE7XG4gIGxldCBzY29yZXMgPSBbMCwgMCwgMF07IC8vIFNjb3JlcyBmb3IgcGxheWVyIDEsIHBsYXllciAyLCB0aWVcbiAgY29uc3QgYm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICBjb25zdCByZXN1bHRzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0cycpO1xuXG4gIGNvbnN0IHBsYXlHYW1lID0gKHBsYXllcnMsIHN0YXJ0UGxheWVySW5kZXgpID0+IHtcbiAgICBsZXQgZ2FtZSA9IEdhbWVDb250cm9sbGVyKHBsYXllcnMsIHN0YXJ0UGxheWVySW5kZXgpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAvLyBSZWRyYXdzIHRoZSBnYW1lIGJvYXJkIGluIHRoZSB3ZWIgcGFnZVxuICAgICAgY29uc3QgdXBkYXRlU2NyZWVuID0gKCkgPT4ge1xuICAgICAgICBib2FyZEVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBib2FyZCA9IGdhbWUuZ2V0Qm9hcmQoKTtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmQubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgLy8gQ3JlYXRlcyBlYWNoIGNlbGwgZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgY2VsbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgLy8gY2VsbEVsLnRleHRDb250ZW50ID0gYm9hcmRbcm93XVtjb2xdLmdldFZhbHVlKCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBkYXRhIGF0dHJpYnV0ZXMgdG8gdGhlIGNlbGwgZWxlbWVudHMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgYnkgZXZlbnQgaGFuZGxlclxuICAgICAgICAgICAgY2VsbEVsLmRhdGFzZXQucm93ID0gcm93O1xuICAgICAgICAgICAgY2VsbEVsLmRhdGFzZXQuY29sID0gY29sO1xuXG4gICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBib2FyZFtyb3ddW2NvbF0uZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAvLyBtYXJrZXJFbC5zcmMgPSBtYXJrZXIgPT09ICdYJyA/IHhJY29uIDogb0ljb247XG4gICAgICAgICAgICBtYXJrZXJFbC5jbGFzc0xpc3QuYWRkKCdwaWVjZScpO1xuICAgICAgICAgICAgY2VsbEVsLmFwcGVuZENoaWxkKG1hcmtlckVsKTtcblxuICAgICAgICAgICAgLy8gU3R5bGUgYW5kIGRpc2FibGUgcGxheWVkIGNlbGxzXG4gICAgICAgICAgICBpZiAobWFya2VyID09PSAnWCcpIHtcbiAgICAgICAgICAgICAgbWFya2VyRWwuc3JjID0geEljb247XG4gICAgICAgICAgICAgIC8vIERpc2FibGVzIGNsaWNrLCBubyBtb3JlIGhvdmVyIGVmZmVjdCwgY3Vyc29yIGJlY29tZXMgZGVmYXVsdFxuICAgICAgICAgICAgICBjZWxsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXJrZXIgPT09ICdPJykge1xuICAgICAgICAgICAgICBtYXJrZXJFbC5zcmMgPSBvSWNvbjtcbiAgICAgICAgICAgICAgLy8gRGlzYWJsZXMgY2xpY2ssIG5vIG1vcmUgaG92ZXIgZWZmZWN0LCBjdXJzb3IgYmVjb21lcyBkZWZhdWx0XG4gICAgICAgICAgICAgIGNlbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmRFbC5hcHBlbmRDaGlsZChjZWxsRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gSGFuZGxlcyBjbGlja3Mgb24gdGhlIGJvYXJkXG4gICAgICAvLyBOZWVkcyB0byBiZSBheW5jcyB0byB1c2UgdGhlIGRlbGF5IGZ1bmN0aW9uIHRvIGRlbGF5IHRoZSBhbGVydHNcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGNsaWNrSGFuZGxlckJvYXJkKGUpIHtcbiAgICAgICAgLy8gRXJyb3IgaGFuZGxpbmcgZm9yIGlzIHRoZSBnYW1lIHByZXZpb3VzbHkgY3JlYXRlZCBpcyBhbHJlYWR5IGhhbmRsZWQuXG4gICAgICAgIGlmIChnYW1lID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xuXG4gICAgICAgIGNvbnN0IHJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93O1xuICAgICAgICBjb25zdCBjb2wgPSBlLnRhcmdldC5kYXRhc2V0LmNvbDtcbiAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAvLyBJZ25vcmUgaW52YWxpZCB1c2VyIGlucHV0XG4gICAgICAgIC8vIFdoZW4gYSBjZWxsIGhhcyBhbHJlYWR5IGJlZW4gY2xpY2tlZCwgaXQncyBwb2ludGVyIGV2ZW50IGlzIGRpc2FibGVkXG4gICAgICAgIC8vIENsaWtlZCBvbiBpdCByZXN1bHRzIGluIHJvdyBhbmQgY29sIGJlaW5nIHVuZGVmaW5lZFxuICAgICAgICBpZiAoIXJvdyB8fCAhY29sKSByZXR1cm47XG5cbiAgICAgICAgLy8gUGxheSBhIHZhbGlkIG1vdmVcbiAgICAgICAgcmVzdWx0ID0gZ2FtZS5wbGF5Um91bmQocm93LCBjb2wpO1xuICAgICAgICB1cGRhdGVTY3JlZW4oKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGdhbWUucmVzZXRCb2FyZCgpO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09ICd0aWUnKSB7XG4gICAgICAgICAgICAvLyBUZXJtaW5hdGUgdGhpcyBnYW1lLiAgVGhpcyBjYXVzZXMgc29tZSBpc3N1ZXMgd2l0aCBQcm9taXNlXG4gICAgICAgICAgICAvLyBFcnJvciBtZXNzYWdlIGluIGNvbnNvbGUuIEJ1dCB0aGUgZ2FtZSBydW5zIGZpbmUuXG4gICAgICAgICAgICBnYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUoMik7IC8vIEluZGV4IG9mIFRpZSBpcyBTY29yZXMgaXMgMlxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5uZXJJbmRleCA9IHBsYXllcnMuaW5kZXhPZihnYW1lLmdldEFjdGl2ZVBsYXllcigpKTtcbiAgICAgICAgICAgIC8vIFRlcm1pbmF0ZSB0aGlzIGdhbWUuICBUaGlzIGNhdXNlcyBzb21lIGlzc3VlcyB3aXRoIFByb21pc2VcbiAgICAgICAgICAgIC8vIEVycm9yIG1lc3NhZ2UgaW4gY29uc29sZS4gQnV0IHRoZSBnYW1lIHJ1bnMgZmluZS5cbiAgICAgICAgICAgIGdhbWUgPSBudWxsO1xuICAgICAgICAgICAgcmVzb2x2ZSh3aW5uZXJJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1cGRhdGVTY3JlZW4oKTtcbiAgICAgIGJvYXJkRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXJCb2FyZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcGxheU11bHRpcGxlR2FtZXMgPSAobnVtR2FtZXMsIHBsYXllcnMpID0+IHtcbiAgICBsZXQgZ2FtZUluZGV4ID0gMDtcbiAgICAvLyB1cGRhdGVTY29yZXNEaXNwbGF5KCk7XG5cbiAgICBjb25zdCBwbGF5TmV4dEdhbWUgPSAoc3RhcnRQbGF5ZXJJbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHBsYXlHYW1lKHBsYXllcnMsIHN0YXJ0UGxheWVySW5kZXgpLnRoZW4oYXN5bmMgKHdpbm5lckluZGV4KSA9PiB7XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgc2NvcmVzXG4gICAgICAgIHNjb3Jlc1t3aW5uZXJJbmRleF0gKz0gMTtcbiAgICAgICAgdXBkYXRlU2NvcmVzRGlzcGxheSgpO1xuICAgICAgICBjb25zdCBnYW1lTXNnRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1tZXNzYWdlJyk7XG5cbiAgICAgICAgLy8gZGlzcGxheSByZXN1bHQgb2YgZWFjaCBnYW1lXG4gICAgICAgIGlmICh3aW5uZXJJbmRleCA8IDIpIHtcbiAgICAgICAgICBnYW1lTXNnRWwuaW5uZXJUZXh0ID0gYCR7cGxheWVyc1t3aW5uZXJJbmRleF0ubmFtZX0gd2lucyFgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdhbWVNc2dFbC5pbm5lclRleHQgPSAnVGllISc7XG4gICAgICAgIH1cblxuICAgICAgICBnYW1lTXNnRWwuc2hvd01vZGFsKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGdhbWVNc2dFbC5jbG9zZSgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgYWxsIGdhbWVzIGhhdmUgYmVlbiBwbGF5ZWRcbiAgICAgICAgaWYgKGdhbWVJbmRleCA+PSBudW1HYW1lcyAtIDEpIHtcbiAgICAgICAgICAvLyBhbGVydCgnR2FtZSBPdmVyIScpO1xuICAgICAgICAgIGNvbnN0IGdhbWVPdmVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyLW1vZGFsJyk7XG4gICAgICAgICAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXJ0LWdhbWUnKTtcbiAgICAgICAgICBnYW1lT3Zlck1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICAgIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBnYW1lT3Zlck1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAvLyBnYW1lKCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHNjb3JlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG90aGVyd2lzZSwgZGV0ZXJtaW5lIHdobyBnb2VzIGZpcnN0IG5leHQgYW5kIHBsYXkgdGhlIG5leHQgZ2FtZVxuICAgICAgICBnYW1lSW5kZXggKz0gMTtcbiAgICAgICAgY29uc3QgbmV4dFN0YXJ0UGxheWVySW5kZXggPSB3aW5uZXJJbmRleCA9PT0gMSA/IDAgOiAxO1xuICAgICAgICByZXR1cm4gcGxheU5leHRHYW1lKG5leHRTdGFydFBsYXllckluZGV4KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBzdGFydCB0aGUgZmlyc3QgZ2FtZVxuICAgIHJldHVybiBwbGF5TmV4dEdhbWUoMCk7XG4gIH07XG5cbiAgY29uc3QgaW5pdFNjb3Jlc0Rpc3BsYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyMU5hbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxLW5hbWUnKTtcbiAgICBwbGF5ZXIxTmFtZUVsLmlubmVyVGV4dCA9IHBsYXllcnNbMF0ubmFtZTtcbiAgICBjb25zdCBwbGF5ZXIyTmFtZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjItbmFtZScpO1xuICAgIHBsYXllcjJOYW1lRWwuaW5uZXJUZXh0ID0gcGxheWVyc1sxXS5uYW1lO1xuXG4gICAgY29uc3QgcGxheWVyMVR5cGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxLXR5cGUnKTtcbiAgICBwbGF5ZXIxVHlwZUVsLmlubmVyVGV4dCA9IHBsYXllcnNbMF0udHlwZTtcbiAgICBjb25zdCBwbGF5ZXIyVHlwZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjItdHlwZScpO1xuICAgIHBsYXllcjJUeXBlRWwuaW5uZXJUZXh0ID0gcGxheWVyc1sxXS50eXBlO1xuXG4gICAgY29uc3QgcGxheWVyMU1hcmtlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjEtbWFya2VyJyk7XG4gICAgcGxheWVyMU1hcmtlckVsLnNyYyA9IHBsYXllcnNbMF0ubWFya2VyID09PSAnWCcgPyB4SWNvbiA6IG9JY29uO1xuXG4gICAgY29uc3QgcGxheWVyMk1hcmtlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjItbWFya2VyJyk7XG4gICAgcGxheWVyMk1hcmtlckVsLnNyYyA9IHBsYXllcnNbMV0ubWFya2VyID09PSAnWCcgPyB4SWNvbiA6IG9JY29uO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVNjb3Jlc0Rpc3BsYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyMVNjb3JlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMS1zY29yZScpO1xuICAgIHBsYXllcjFTY29yZUVsLmlubmVySFRNTCA9IHNjb3Jlc1swXTtcbiAgICBjb25zdCBwbGF5ZXIyU2NvcmVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyLXNjb3JlJyk7XG4gICAgcGxheWVyMlNjb3JlRWwuaW5uZXJIVE1MID0gc2NvcmVzWzFdO1xuICAgIGNvbnN0IGJvYXJkRm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLWZvb3QnKTtcbiAgICBib2FyZEZvb3RFbC5pbm5lckhUTUwgPSAnVGllczogJyArIHNjb3Jlc1syXTtcbiAgfTtcblxuICAvLyBHYW1lIHNldHVwIG1vZGFsXG4gIGNvbnN0IGdhbWVTZXR1cE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc2V0dXAtbW9kYWwnKTtcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtZ2FtZScpO1xuXG4gIGdhbWVTZXR1cE1vZGFsLnNob3dNb2RhbCgpO1xuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcGxheWVyc09iai5zZXRQbGF5ZXJzKFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjEtbmFtZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBtYXJrZXI6ICdYJyxcbiAgICAgICAgdHlwZTogJ2h1bWFuJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyLW5hbWUtaW5wdXQnKS52YWx1ZSxcbiAgICAgICAgbWFya2VyOiAnTycsXG4gICAgICAgIHR5cGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyLXR5cGUtaW5wdXQnKS52YWx1ZSxcbiAgICAgIH0sXG4gICAgXSk7XG4gICAgcGxheWVycyA9IHBsYXllcnNPYmouZ2V0UGxheWVycygpO1xuICAgIG51bUdhbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI251bWJlci1vZi1nYW1lcycpLnZhbHVlO1xuICAgIGdhbWVTZXR1cE1vZGFsLmNsb3NlKCk7XG5cbiAgICBpbml0U2NvcmVzRGlzcGxheSgpO1xuXG4gICAgcGxheU11bHRpcGxlR2FtZXMobnVtR2FtZXMsIHBsYXllcnMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlbkNvbnRyb2xsZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=