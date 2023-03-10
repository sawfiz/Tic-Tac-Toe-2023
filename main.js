"use strict";
(self["webpackChunktic_tac_toe_2023"] = self["webpackChunktic_tac_toe_2023"] || []).push([["main"],{

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

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardSize": () => (/* binding */ BoardSize)
/* harmony export */ });
// Global constants
const BoardSize = 3;




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameController */ "./src/gameController.js");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delay */ "./src/delay.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _images_O_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/O.png */ "./src/images/O.png");
/* harmony import */ var _images_X_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/X.png */ "./src/images/X.png");







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
              markerEl.src = _images_X_png__WEBPACK_IMPORTED_MODULE_5__;
              // Disables click, no more hover effect, cursor becomes default
              cellEl.style.pointerEvents = 'none';
            }
            if (marker === 'O') {
              markerEl.src = _images_O_png__WEBPACK_IMPORTED_MODULE_4__;
              // Disables click, no more hover effect, cursor becomes default
              cellEl.style.pointerEvents = 'none';
            }
            boardEl.appendChild(cellEl);
          }
        }
      };

      const highlightActivePlayer = () => {
        const activePlayerIndex = players.indexOf(game.getActivePlayer());
        console.log(
          '🚀 ~ file: screenController.js:180 ~ highlightActivePlayer ~ activePlayerIndex:',
          activePlayerIndex
        );
        const player1ContainerEl = document.querySelector('#player1-container');
        const player2ContainerEl = document.querySelector('#player2-container');
        if (activePlayerIndex === 0) {
          player1ContainerEl.classList.add('turn');
          player2ContainerEl.classList.remove('turn');
        } else {
          player1ContainerEl.classList.remove('turn');
          player2ContainerEl.classList.add('turn');
        }
      };

      // Handles clicks on the board
      // Needs to be ayncs to use the delay function to delay the alerts
      async function clickHandlerBoard(e) {
        // Error handling for is the game previously created is already handled.
        if (game === null) return;

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
        highlightActivePlayer();
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
      highlightActivePlayer();
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
    player1MarkerEl.src = players[0].marker === 'X' ? _images_X_png__WEBPACK_IMPORTED_MODULE_5__ : _images_O_png__WEBPACK_IMPORTED_MODULE_4__;

    const player2MarkerEl = document.querySelector('#player2-marker');
    player2MarkerEl.src = players[1].marker === 'X' ? _images_X_png__WEBPACK_IMPORTED_MODULE_5__ : _images_O_png__WEBPACK_IMPORTED_MODULE_4__;
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

/***/ "./src/images/O.png":
/*!**************************!*\
  !*** ./src/images/O.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55fe14f6398f00becd41.png";

/***/ }),

/***/ "./src/images/X.png":
/*!**************************!*\
  !*** ./src/images/X.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9e0f645c52590c3ada9.png";

/***/ }),

/***/ "./src/images/tic-tact-toe-board Medium.jpeg":
/*!***************************************************!*\
  !*** ./src/images/tic-tact-toe-board Medium.jpeg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e170b243869a3b0edd6.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQywyQkFBMkI7QUFDOUQsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGNBQWMsa0RBQUs7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCwwQ0FBSyxHQUFHLDBDQUFLOztBQUVuRTtBQUNBLHNEQUFzRCwwQ0FBSyxHQUFHLDBDQUFLO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL2NlbGwuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9kZWxheS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvZ2xvYmFsQ29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL21pbmlNYXguanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvcmFtZG9tUGxheS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltYWdlcy90aWMtdGFjdC10b2UtYm9hcmQgTWVkaXVtLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTIwMHB4O1xcbiAgaGVpZ2h0OiA2NzVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtaGVhZCB7XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbn1cXG5cXG4ucGxheS1hcmVhIHtcXG4gIGZsZXg6IDkwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDMwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ucGxheWVyLWNvbnRhaW5lci50dXJue1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHllbGxvdztcXG59XFxuXFxuLnBsYXllci1pZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLnBsYXllci10eXBlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ucGxheWVyLXNjb3JlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ucGxheWVyLW1hcmtlciBpbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIHdpZHRoOiA3MjBweDtcXG4gIGZsZXg6IDM7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuOWZyIDEuMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC45ZnIgMC44ZnIgMWZyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG59XFxuXFxuLnBpZWNle1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmJvYXJkLWZvb3Qge1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtc2V0dXAtbW9kYWwge1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCBibGFjaztcXG59XFxuXFxuLmdhbWUtc2V0dXAge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ2FtZS1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogeWVsbG93O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDRweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDhDQUE4QztFQUM5QywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHlEQUErRDtFQUMvRCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsV0FBVztFQUNYLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogIzg4ODtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBoZWlnaHQ6IDY3NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaW1hZ2VzL3RpYy10YWN0LXRvZS1ib2FyZFxcXFwgTWVkaXVtLmpwZWdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWhlYWQge1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiBsaWdodGJsdWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG5cXG59XFxuXFxuLnBsYXktYXJlYSB7XFxuICBmbGV4OiA5MDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLnBsYXllci1jb250YWluZXIudHVybntcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCB5ZWxsb3c7XFxufVxcblxcbi5wbGF5ZXItaWQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4ucGxheWVyLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5wbGF5ZXItdHlwZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLnBsYXllci1zY29yZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLnBsYXllci1tYXJrZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICB3aWR0aDogNzIwcHg7XFxuICBmbGV4OiAzO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjlmciAxLjJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuOWZyIDAuOGZyIDFmcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxufVxcblxcbi5waWVjZXtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5ib2FyZC1mb290IHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLXNldHVwLW1vZGFsIHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggYmxhY2s7XFxufVxcblxcbi5nYW1lLXNldHVwIHtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdhbWUtbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDRweCBibGFjaztcXG59XFxuXFxuLmdhbWUtb3Zlci1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA0cHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBDZWxsIGNsYXNzXG4vLyBFYWNoIHBsYXlhYmxlIGxvY2F0aW9uIG9uIHRoZSBib2FyZCBpcyBhIGNlbGwgb2JqZWN0XG5jb25zdCBDZWxsID0gKCkgPT4ge1xuICBsZXQgdmFsdWUgPSAnLic7XG5cbiAgY29uc3Qgc2V0VmFsdWUgPSAobWFya2VyKSA9PiB7XG4gICAgdmFsdWUgPSBtYXJrZXI7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsdWUgPSAoKSA9PiB2YWx1ZTtcblxuICByZXR1cm4geyBzZXRWYWx1ZSwgZ2V0VmFsdWUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENlbGw7IiwiLy8gR2xvYmFsIGZ1bmN0aW9uXG5mdW5jdGlvbiBkZWxheSh0aW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGF5O1xuIiwiaW1wb3J0IHsgQm9hcmRTaXplIH0gZnJvbSAnLi9nbG9iYWxDb25zdGFudCc7XG5pbXBvcnQgQ2VsbCBmcm9tICcuL2NlbGwnO1xuXG4vLyBHYW1lIGJvYXJkIGNsYXNzXG5jb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IFtdO1xuXG4gIC8vIENyZWF0IGEgM3gzIGJvYXJkLCBlYWNoIGxvY2F0aW9uIGlzIGEgQ2VsbCBvYmplY3RcbiAgY29uc3QgcmVzZXRCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEJvYXJkU2l6ZTsgcm93KyspIHtcbiAgICAgIGJvYXJkW3Jvd10gPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEJvYXJkU2l6ZTsgY29sKyspIHtcbiAgICAgICAgYm9hcmRbcm93XS5wdXNoKENlbGwoKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXNldEJvYXJkKCk7XG5cbiAgLy8gR2V0dGVyIGZ1bmN0aW9uIGZvciB0aGUgYm9hcmRcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHByaW50IHRoZSBib2FyZCB0byB0aGUgY29uc29sZVxuICBjb25zdCBwcmludEJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyA9IGJvYXJkXG4gICAgICAubWFwKChyb3cpID0+IHJvdy5tYXAoKGNlbGwpID0+IGNlbGwuZ2V0VmFsdWUoKSkuam9pbignICcpKVxuICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XG4gIH07XG5cbiAgLy8gUGxhY2UgdGhlIG1hcmtlciBvZiB0aGUgYWN0aXZlIHBsYXllciBpbiBkZXNpcmVkIGNlbGxcbiAgY29uc3QgcGxhY2VNYXJrZXIgPSAocm93LCBjb2wsIHBsYXllcikgPT4ge1xuICAgIGJvYXJkW3Jvd11bY29sXS5zZXRWYWx1ZShwbGF5ZXIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNoZWNrV2lubmVyKCkge1xuICAgIC8vIENoZWNrIHJvd3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgICBpZiAoZXF1YWxzMyhib2FyZFtpXVswXSwgYm9hcmRbaV1bMV0sIGJvYXJkW2ldWzJdKSkge1xuICAgICAgICByZXR1cm4gYm9hcmRbaV1bMF0uZ2V0VmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2hlY2sgY29sdW1uc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQm9hcmRTaXplOyBpKyspIHtcbiAgICAgIGlmIChlcXVhbHMzKGJvYXJkWzBdW2ldLCBib2FyZFsxXVtpXSwgYm9hcmRbMl1baV0pKSB7XG4gICAgICAgIHJldHVybiBib2FyZFswXVtpXS5nZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBDaGVjayBkaWFnbmFsXG4gICAgaWYgKGVxdWFsczMoYm9hcmRbMF1bMF0sIGJvYXJkWzFdWzFdLCBib2FyZFsyXVsyXSkpIHtcbiAgICAgIHJldHVybiBib2FyZFsxXVsxXS5nZXRWYWx1ZSgpO1xuICAgIH1cbiAgICAvLyBDaGVjayB0aGUgb3RoZXIgZGlhZ25hbFxuICAgIGlmIChlcXVhbHMzKGJvYXJkWzBdWzJdLCBib2FyZFsxXVsxXSwgYm9hcmRbMl1bMF0pKSB7XG4gICAgICByZXR1cm4gYm9hcmRbMV1bMV0uZ2V0VmFsdWUoKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgZm9yIHRpZVxuICAgIGxldCBvY2N1cGllZFNxdXJlcyA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCb2FyZFNpemU7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBCb2FyZFNpemU7IGorKykge1xuICAgICAgICBpZiAoYm9hcmRbaV1bal0uZ2V0VmFsdWUoKSAhPT0gJy4nKSBvY2N1cGllZFNxdXJlcysrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2NjdXBpZWRTcXVyZXMgPT09IDkpIHJldHVybiAndGllJzsgLy8gQWxsIHNxdWFyZXMgYXJlIHRha2VuIHVwXG4gICAgcmV0dXJuIG51bGw7IC8vIE5vdCBhIGdhbWUgdGVybWluYXRpbmcgcGxheVxuICB9XG5cbiAgLy8gQ29tcGFyZSBpZiAzIGNlbGxzIGhhdmUgZXF1YWwgdmFsdWVzIChtYXJrZXJzKVxuICBmdW5jdGlvbiBlcXVhbHMzKGEsIGIsIGMpIHtcbiAgICBjb25zdCByZXN1bHQgPVxuICAgICAgYS5nZXRWYWx1ZSgpID09PSBiLmdldFZhbHVlKCkgJiZcbiAgICAgIGEuZ2V0VmFsdWUoKSA9PT0gYy5nZXRWYWx1ZSgpICYmXG4gICAgICBhLmdldFZhbHVlKCkgIT09ICcuJztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gQ2hlY2sgaXMgYSBjZWxsIGlzIGF2YWlsYWJsZSBmb3IgcGxheWluZ1xuICBjb25zdCBpc0F2YWlsYWJsZSA9IChyb3csIGNvbCkgPT4ge1xuICAgIGlmIChib2FyZFtyb3ddW2NvbF0uZ2V0VmFsdWUoKSA9PT0gJy4nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIENvdW50IHRoZSBudW1iZXIgb2YgY2VsbHMgdGhhdCBhcmUgYXZhaWFsYmxlXG4gIGNvbnN0IGF2YWlsYWJsZUNlbGxzID0gKCkgPT4ge1xuICAgIGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgICAgaWYgKGlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZXNldEJvYXJkLFxuICAgIGdldEJvYXJkLFxuICAgIHByaW50Qm9hcmQsXG4gICAgcGxhY2VNYXJrZXIsXG4gICAgY2hlY2tXaW5uZXIsXG4gICAgaXNBdmFpbGFibGUsXG4gICAgYXZhaWxhYmxlQ2VsbHMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQ7XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkJztcbmltcG9ydCBtYWtlUmFuZG9tUGxheSBmcm9tICcuL3JhbWRvbVBsYXknO1xuaW1wb3J0IG1ha2VNaW5pbWF4UGxheSBmcm9tICcuL21pbmlNYXgnO1xuXG4vLyBHYW1lIGNvbnRyb2xsZXIgd2hlcmUgdGhlIGdhbWUgcGxheWluZyBsb2dpYyBpc1xuY29uc3QgR2FtZUNvbnRyb2xsZXIgPSAocGxheWVycywgc3RhcnRQbGF5ZXJJbmRleCkgPT4ge1xuICBjb25zdCBib2FyZCA9IEdhbWVCb2FyZCgpO1xuICBib2FyZC5wcmludEJvYXJkKCk7XG5cbiAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbc3RhcnRQbGF5ZXJJbmRleF07XG4gIGNvbnNvbGUubG9nKGFjdGl2ZVBsYXllcik7XG5cbiAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xuXG4gIGNvbnN0IHN3aXRjaFBsYXllciA9ICgpID0+IHtcbiAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcbiAgfTtcblxuICBjb25zdCBtYWtlQ29tcHV0ZXJQbGF5ID0gKCkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgLy8gQ29tcHV0ZXIgcGxheWVyIHBsYXlzXG4gICAgaWYgKGFjdGl2ZVBsYXllci50eXBlID09PSAncmFuZG9tJykge1xuICAgICAgcmVzdWx0ID0gbWFrZVJhbmRvbVBsYXkoYm9hcmQsIGFjdGl2ZVBsYXllci5tYXJrZXIpO1xuICAgICAgYm9hcmQucHJpbnRCb2FyZCgpO1xuICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIHN3aXRjaFBsYXllcigpO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmVQbGF5ZXIudHlwZSA9PT0gJ2FpJykge1xuICAgICAgcmVzdWx0ID0gbWFrZU1pbmltYXhQbGF5KGJvYXJkLCBhY3RpdmVQbGF5ZXIubWFya2VyKTtcbiAgICAgIGJvYXJkLnByaW50Qm9hcmQoKTtcbiAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gTWFrZSBhIHBsYXkgaW4gYSBjaG9zZW4gY2VsbFxuICAvLyBJZiB0aGVyZSBpcyBhIGNvbXB1dGVyIHBsYXllciwgdGhlIGNvbXB1dGVyIG1ha2VzIGEgcGxheSB0b29cbiAgY29uc3QgcGxheVJvdW5kID0gKHJvdywgY29sKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIC8vIFBsYXkgdGhlIGh1bWFuIHBsYXllciBwbGF5XG4gICAgY29uc29sZS5sb2coXCJodW1hbiBwbGF5ZXIgcGxheXNcIik7XG4gICAgYm9hcmQucGxhY2VNYXJrZXIocm93LCBjb2wsIGFjdGl2ZVBsYXllci5tYXJrZXIpO1xuICAgIGJvYXJkLnByaW50Qm9hcmQoKTtcblxuICAgIC8vIENoZWNrIGZvciBlbmQgb2YgZ2FtZSBhbmQgZ2FtZSByZXN1bHRcbiAgICByZXN1bHQgPSBib2FyZC5jaGVja1dpbm5lcigpO1xuICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG5cbiAgICBzd2l0Y2hQbGF5ZXIoKTtcblxuICAgIC8vIENvbXB1dGVyIHBsYXllciBwbGF5c1xuICAgIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgcGxheXNcIik7XG4gICAgcmVzdWx0ID0gbWFrZUNvbXB1dGVyUGxheSgpO1xuICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gSWYgY29tcHV0ZXIgcGxheWVyIGlzIHBsYXllciAxLCBtYWtlIGEgY29tcHV0ZXIgcGxheSBmaXJzdFxuICBpZiAoYWN0aXZlUGxheWVyLnR5cGUgIT09ICdodW1hbicpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIDFzdCBwbGF5c1wiKTtcbiAgICBtYWtlQ29tcHV0ZXJQbGF5KCk7XG4gIH1cblxuICByZXR1cm4geyBwbGF5Um91bmQsIGdldEJvYXJkOiBib2FyZC5nZXRCb2FyZCwgIHJlc2V0Qm9hcmQ6IGJvYXJkLnJlc2V0Qm9hcmQsIGdldEFjdGl2ZVBsYXllciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7XG4iLCIvLyBHbG9iYWwgY29uc3RhbnRzXG5jb25zdCBCb2FyZFNpemUgPSAzO1xuXG5leHBvcnQgeyBCb2FyZFNpemUgfTtcbiIsImltcG9ydCBTY3JlZW5Db250cm9sbGVyIGZyb20gJy4vc2NyZWVuQ29udHJvbGxlcic7XG5cbi8vIENyZWF0ZSBTY3JlZW5Db250cm9sbGVyIGluc3RhbmNlIGFuZCBwbGF5IGdhbWVcblNjcmVlbkNvbnRyb2xsZXIoKTtcbiIsImltcG9ydCB7IEJvYXJkU2l6ZSB9IGZyb20gJy4vZ2xvYmFsQ29uc3RhbnQnO1xuXG4vLyBBIGNvbXB1dGVyIHBsYXllciB0aGF0IHBsYXlzIHVzaW5nIHRoZSBNaW5pbWF4IGFsZ29yaXRobVxuY29uc3QgbWFrZU1pbmltYXhQbGF5ID0gKGJvYXJkLCBtYXJrZXIpID0+IHtcbiAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgbGV0IGJlc3RSb3csIGJlc3RDb2w7XG4gIGxldCByZXN1bHQ7XG4gIGNvbnN0IG9wcG9zaXRlTWFya2VyID0gbWFya2VyID09PSAnTycgPyAnWCcgOiAnTyc7XG5cbiAgLy8gR28gdGhyb3VnaCBhbGwgYXZhaWFsYmxlIGNlbGxzIHRvIGZpbmQgdGhlIGJlc3QgcG9zaWJsZSBtb3ZlXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEJvYXJkU2l6ZTsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBCb2FyZFNpemU7IGNvbCsrKSB7XG4gICAgICBpZiAoYm9hcmQuaXNBdmFpbGFibGUocm93LCBjb2wpKSB7XG4gICAgICAgIC8vIFRyeSB0byBwbGF5IGFuIGF2YWlsYWJsZSBjZWxsXG4gICAgICAgIGJvYXJkLnBsYWNlTWFya2VyKHJvdywgY29sLCBtYXJrZXIpO1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBnZXQgdGhlIHNjb3JlIG9mIHRoaXMgcGxheVxuICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIGZhbHNlKTtcbiAgICAgICAgLy8gUmVjb3JkIGlmIGl0IGlzIGEgYmV0dGVyIG1vdmVcbiAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgYmVzdFJvdyA9IHJvdztcbiAgICAgICAgICBiZXN0Q29sID0gY29sO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHRoZSBjZWxsXG4gICAgICAgIGJvYXJkLnBsYWNlTWFya2VyKHJvdywgY29sLCAnLicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFBsYXkgdGhlIGJlc3QgbW92ZSBmb3VuZFxuICBib2FyZC5wbGFjZU1hcmtlcihiZXN0Um93LCBiZXN0Q29sLCBtYXJrZXIpO1xuXG4gIC8vIElmIHRoZSBnYW1lcyB3aXRoIGEgd2lubmVyIG9mIHRpZSwgcmV0dXJuIHJlc3VsdFxuICByZXN1bHQgPSBib2FyZC5jaGVja1dpbm5lcigpO1xuICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuXG4gIC8vIFJlY3Vyc2l2ZSBtaW5pbWF4IGFsZ29yaXRobVxuICBmdW5jdGlvbiBtaW5pbWF4KGJvYXJkLCBpc01heGltaXppbmcpIHtcbiAgICAvLyBUZXJtaW5hdGluZyBjb25kaXRpb24gZm9yIHRoZSByZWN1cnNpdmUgYWxnb3JpdGhtXG4gICAgY29uc3QgcmVzdWx0ID0gYm9hcmQuY2hlY2tXaW5uZXIoKTtcbiAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICBpZiAocmVzdWx0ID09PSBtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIDEwO1xuICAgICAgfSBcbiAgICAgIGlmIChyZXN1bHQgPT09ICd0aWUnKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSBcbiAgICAgIGlmIChyZXN1bHQgPT09IG9wcG9zaXRlTWFya2VyKSB7XG4gICAgICAgIHJldHVybiAtMTA7XG4gICAgICB9IFxuICAgIH1cblxuICAgIC8vIEFsdGVybmF0ZSBiZXR3ZWVuIE1pbiBhbmQgTWF4IHBsYXllcnNcbiAgICBpZiAoaXNNYXhpbWl6aW5nKSB7XG4gICAgICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCb2FyZFNpemU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEJvYXJkU2l6ZTsgaisrKSB7XG4gICAgICAgICAgaWYgKGJvYXJkLmlzQXZhaWxhYmxlKGksIGopKSB7XG4gICAgICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihpLCBqLCBtYXJrZXIpO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBtaW5pbWF4KGJvYXJkLCBmYWxzZSk7XG4gICAgICAgICAgICBiZXN0U2NvcmUgPSBNYXRoLm1heChzY29yZSwgYmVzdFNjb3JlKTtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlTWFya2VyKGksIGosICcuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYmVzdFNjb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYmVzdFNjb3JlID0gSW5maW5pdHk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQm9hcmRTaXplOyBqKyspIHtcbiAgICAgICAgICBpZiAoYm9hcmQuaXNBdmFpbGFibGUoaSwgaikpIHtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlTWFya2VyKGksIGosIG9wcG9zaXRlTWFya2VyKTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgdHJ1ZSk7XG4gICAgICAgICAgICBiZXN0U2NvcmUgPSBNYXRoLm1pbihzY29yZSwgYmVzdFNjb3JlKTtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlTWFya2VyKGksIGosICcuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYmVzdFNjb3JlO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZU1pbmltYXhQbGF5O1xuIiwiY29uc3QgUGxheWVycyA9ICgpID0+IHtcbiAgbGV0IHBsYXllcnMgPSBbXTtcblxuICBjb25zdCBzZXRQbGF5ZXJzID0gKHZhbHVlcykgPT4ge1xuICAgIHBsYXllcnMgPSB2YWx1ZXM7XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxheWVycyA9ICgpID0+IHBsYXllcnM7XG5cbiAgcmV0dXJuIHtzZXRQbGF5ZXJzLCBnZXRQbGF5ZXJzfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllcnMgfTtcbiIsIi8vIEEgY29tcHV0ZXIgcGxheWVyIHRoYXQgcGxheXMgYXQgcmFuZG9tIGNlbGxzXG5jb25zdCBtYWtlUmFuZG9tUGxheSA9IChib2FyZCwgbWFya2VyKSA9PiB7XG4gIGxldCByb3csIGNvbDtcbiAgbGV0IHJlc3VsdDsgLy8gUmVzdWx0IGZyb20gY2hlY2tXaW5uZXIsIGNhbiBiZSAnWCcsICdPJywgJ1RpZScsIG9yIG51bGxcblxuICAvLyBUcnkgdW50aWwgY29tcHV0ZXIgZmluZHMgYSB2YWxpZCBjZWxsIHRvIHBsYXlcbiAgZG8ge1xuICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuICB9IHdoaWxlICghYm9hcmQuaXNBdmFpbGFibGUocm93LCBjb2wpKTtcblxuICAvLyBQbGF5IGEgdmFsaWQgbW92ZVxuICBib2FyZC5wbGFjZU1hcmtlcihyb3csIGNvbCwgbWFya2VyKTtcbiAgcmVzdWx0ID0gYm9hcmQuY2hlY2tXaW5uZXIoKTtcblxuICAvLyBHZXR0aW5nIGEgdmFsaWQgcmVzdWx0IG1lYW5zIGEgZ2FtZSBpcyBlbmRlZCB3aXRoIGEgd2lubmVyIG9yIGEgdGllXG4gIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSYW5kb21QbGF5OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vZ2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0IGRlbGF5IGZyb20gJy4vZGVsYXknO1xuaW1wb3J0IHsgUGxheWVycyB9IGZyb20gJy4vcGxheWVycyc7XG5pbXBvcnQgb0ljb24gZnJvbSAnLi9pbWFnZXMvTy5wbmcnO1xuaW1wb3J0IHhJY29uIGZyb20gJy4vaW1hZ2VzL1gucG5nJztcblxuLy8gVGhlIFNjcmVlbkNvbnRyb2xsZXIgdGhhdCBwcmVzZW50cyBhIHZpZXcgYW5kIGdldHMgdXNlciByZXF1ZXN0c1xuY29uc3QgU2NyZWVuQ29udHJvbGxlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGxheWVyc09iaiA9IFBsYXllcnMoKTtcbiAgbGV0IHBsYXllcnM7XG4gIGxldCBudW1HYW1lcztcbiAgbGV0IHdpbm5lckluZGV4ID0gMTtcbiAgbGV0IHNjb3JlcyA9IFswLCAwLCAwXTsgLy8gU2NvcmVzIGZvciBwbGF5ZXIgMSwgcGxheWVyIDIsIHRpZVxuICBjb25zdCBib2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gIGNvbnN0IHJlc3VsdHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzJyk7XG5cbiAgY29uc3QgcGxheUdhbWUgPSAocGxheWVycywgc3RhcnRQbGF5ZXJJbmRleCkgPT4ge1xuICAgIGxldCBnYW1lID0gR2FtZUNvbnRyb2xsZXIocGxheWVycywgc3RhcnRQbGF5ZXJJbmRleCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIC8vIFJlZHJhd3MgdGhlIGdhbWUgYm9hcmQgaW4gdGhlIHdlYiBwYWdlXG4gICAgICBjb25zdCB1cGRhdGVTY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIGJvYXJkRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZ2FtZS5nZXRCb2FyZCgpO1xuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZC5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGVzIGVhY2ggY2VsbCBlbGVtZW50XG4gICAgICAgICAgICBjb25zdCBjZWxsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGxFbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICAvLyBjZWxsRWwudGV4dENvbnRlbnQgPSBib2FyZFtyb3ddW2NvbF0uZ2V0VmFsdWUoKTtcblxuICAgICAgICAgICAgLy8gQWRkIGRhdGEgYXR0cmlidXRlcyB0byB0aGUgY2VsbCBlbGVtZW50cyB0aGF0IGNhbiBiZSBhY2Nlc3NlZCBieSBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICBjZWxsRWwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgICAgICAgICBjZWxsRWwuZGF0YXNldC5jb2wgPSBjb2w7XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IGJvYXJkW3Jvd11bY29sXS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgY29uc3QgbWFya2VyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIC8vIG1hcmtlckVsLnNyYyA9IG1hcmtlciA9PT0gJ1gnID8geEljb24gOiBvSWNvbjtcbiAgICAgICAgICAgIG1hcmtlckVsLmNsYXNzTGlzdC5hZGQoJ3BpZWNlJyk7XG4gICAgICAgICAgICBjZWxsRWwuYXBwZW5kQ2hpbGQobWFya2VyRWwpO1xuXG4gICAgICAgICAgICAvLyBTdHlsZSBhbmQgZGlzYWJsZSBwbGF5ZWQgY2VsbHNcbiAgICAgICAgICAgIGlmIChtYXJrZXIgPT09ICdYJykge1xuICAgICAgICAgICAgICBtYXJrZXJFbC5zcmMgPSB4SWNvbjtcbiAgICAgICAgICAgICAgLy8gRGlzYWJsZXMgY2xpY2ssIG5vIG1vcmUgaG92ZXIgZWZmZWN0LCBjdXJzb3IgYmVjb21lcyBkZWZhdWx0XG4gICAgICAgICAgICAgIGNlbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hcmtlciA9PT0gJ08nKSB7XG4gICAgICAgICAgICAgIG1hcmtlckVsLnNyYyA9IG9JY29uO1xuICAgICAgICAgICAgICAvLyBEaXNhYmxlcyBjbGljaywgbm8gbW9yZSBob3ZlciBlZmZlY3QsIGN1cnNvciBiZWNvbWVzIGRlZmF1bHRcbiAgICAgICAgICAgICAgY2VsbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZEVsLmFwcGVuZENoaWxkKGNlbGxFbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoaWdobGlnaHRBY3RpdmVQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVBsYXllckluZGV4ID0gcGxheWVycy5pbmRleE9mKGdhbWUuZ2V0QWN0aXZlUGxheWVyKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAn8J+agCB+IGZpbGU6IHNjcmVlbkNvbnRyb2xsZXIuanM6MTgwIH4gaGlnaGxpZ2h0QWN0aXZlUGxheWVyIH4gYWN0aXZlUGxheWVySW5kZXg6JyxcbiAgICAgICAgICBhY3RpdmVQbGF5ZXJJbmRleFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBwbGF5ZXIxQ29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcGxheWVyMkNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjItY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChhY3RpdmVQbGF5ZXJJbmRleCA9PT0gMCkge1xuICAgICAgICAgIHBsYXllcjFDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKCd0dXJuJyk7XG4gICAgICAgICAgcGxheWVyMkNvbnRhaW5lckVsLmNsYXNzTGlzdC5yZW1vdmUoJ3R1cm4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXIxQ29udGFpbmVyRWwuY2xhc3NMaXN0LnJlbW92ZSgndHVybicpO1xuICAgICAgICAgIHBsYXllcjJDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKCd0dXJuJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIEhhbmRsZXMgY2xpY2tzIG9uIHRoZSBib2FyZFxuICAgICAgLy8gTmVlZHMgdG8gYmUgYXluY3MgdG8gdXNlIHRoZSBkZWxheSBmdW5jdGlvbiB0byBkZWxheSB0aGUgYWxlcnRzXG4gICAgICBhc3luYyBmdW5jdGlvbiBjbGlja0hhbmRsZXJCb2FyZChlKSB7XG4gICAgICAgIC8vIEVycm9yIGhhbmRsaW5nIGZvciBpcyB0aGUgZ2FtZSBwcmV2aW91c2x5IGNyZWF0ZWQgaXMgYWxyZWFkeSBoYW5kbGVkLlxuICAgICAgICBpZiAoZ2FtZSA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93O1xuICAgICAgICBjb25zdCBjb2wgPSBlLnRhcmdldC5kYXRhc2V0LmNvbDtcbiAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAvLyBJZ25vcmUgaW52YWxpZCB1c2VyIGlucHV0XG4gICAgICAgIC8vIFdoZW4gYSBjZWxsIGhhcyBhbHJlYWR5IGJlZW4gY2xpY2tlZCwgaXQncyBwb2ludGVyIGV2ZW50IGlzIGRpc2FibGVkXG4gICAgICAgIC8vIENsaWtlZCBvbiBpdCByZXN1bHRzIGluIHJvdyBhbmQgY29sIGJlaW5nIHVuZGVmaW5lZFxuICAgICAgICBpZiAoIXJvdyB8fCAhY29sKSByZXR1cm47XG5cbiAgICAgICAgLy8gUGxheSBhIHZhbGlkIG1vdmVcbiAgICAgICAgcmVzdWx0ID0gZ2FtZS5wbGF5Um91bmQocm93LCBjb2wpO1xuICAgICAgICB1cGRhdGVTY3JlZW4oKTtcbiAgICAgICAgaGlnaGxpZ2h0QWN0aXZlUGxheWVyKCk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBnYW1lLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSAndGllJykge1xuICAgICAgICAgICAgLy8gVGVybWluYXRlIHRoaXMgZ2FtZS4gIFRoaXMgY2F1c2VzIHNvbWUgaXNzdWVzIHdpdGggUHJvbWlzZVxuICAgICAgICAgICAgLy8gRXJyb3IgbWVzc2FnZSBpbiBjb25zb2xlLiBCdXQgdGhlIGdhbWUgcnVucyBmaW5lLlxuICAgICAgICAgICAgZ2FtZSA9IG51bGw7XG4gICAgICAgICAgICByZXNvbHZlKDIpOyAvLyBJbmRleCBvZiBUaWUgaXMgU2NvcmVzIGlzIDJcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2lubmVySW5kZXggPSBwbGF5ZXJzLmluZGV4T2YoZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKSk7XG4gICAgICAgICAgICAvLyBUZXJtaW5hdGUgdGhpcyBnYW1lLiAgVGhpcyBjYXVzZXMgc29tZSBpc3N1ZXMgd2l0aCBQcm9taXNlXG4gICAgICAgICAgICAvLyBFcnJvciBtZXNzYWdlIGluIGNvbnNvbGUuIEJ1dCB0aGUgZ2FtZSBydW5zIGZpbmUuXG4gICAgICAgICAgICBnYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUod2lubmVySW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB1cGRhdGVTY3JlZW4oKTtcbiAgICAgIGhpZ2hsaWdodEFjdGl2ZVBsYXllcigpO1xuICAgICAgYm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlckJvYXJkKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwbGF5TXVsdGlwbGVHYW1lcyA9IChudW1HYW1lcywgcGxheWVycykgPT4ge1xuICAgIGxldCBnYW1lSW5kZXggPSAwO1xuICAgIC8vIHVwZGF0ZVNjb3Jlc0Rpc3BsYXkoKTtcblxuICAgIGNvbnN0IHBsYXlOZXh0R2FtZSA9IChzdGFydFBsYXllckluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gcGxheUdhbWUocGxheWVycywgc3RhcnRQbGF5ZXJJbmRleCkudGhlbihhc3luYyAod2lubmVySW5kZXgpID0+IHtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBzY29yZXNcbiAgICAgICAgc2NvcmVzW3dpbm5lckluZGV4XSArPSAxO1xuICAgICAgICB1cGRhdGVTY29yZXNEaXNwbGF5KCk7XG4gICAgICAgIGNvbnN0IGdhbWVNc2dFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW1lc3NhZ2UnKTtcblxuICAgICAgICAvLyBkaXNwbGF5IHJlc3VsdCBvZiBlYWNoIGdhbWVcbiAgICAgICAgaWYgKHdpbm5lckluZGV4IDwgMikge1xuICAgICAgICAgIGdhbWVNc2dFbC5pbm5lclRleHQgPSBgJHtwbGF5ZXJzW3dpbm5lckluZGV4XS5uYW1lfSB3aW5zIWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2FtZU1zZ0VsLmlubmVyVGV4dCA9ICdUaWUhJztcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWVNc2dFbC5zaG93TW9kYWwoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZ2FtZU1zZ0VsLmNsb3NlKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICBhd2FpdCBkZWxheSgxMDAwKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBhbGwgZ2FtZXMgaGF2ZSBiZWVuIHBsYXllZFxuICAgICAgICBpZiAoZ2FtZUluZGV4ID49IG51bUdhbWVzIC0gMSkge1xuICAgICAgICAgIC8vIGFsZXJ0KCdHYW1lIE92ZXIhJyk7XG4gICAgICAgICAgY29uc3QgZ2FtZU92ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXItbW9kYWwnKTtcbiAgICAgICAgICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnQtZ2FtZScpO1xuICAgICAgICAgIGdhbWVPdmVyTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgICAgICAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGdhbWVPdmVyTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIC8vIGdhbWUoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gc2NvcmVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBkZXRlcm1pbmUgd2hvIGdvZXMgZmlyc3QgbmV4dCBhbmQgcGxheSB0aGUgbmV4dCBnYW1lXG4gICAgICAgIGdhbWVJbmRleCArPSAxO1xuICAgICAgICBjb25zdCBuZXh0U3RhcnRQbGF5ZXJJbmRleCA9IHdpbm5lckluZGV4ID09PSAxID8gMCA6IDE7XG4gICAgICAgIHJldHVybiBwbGF5TmV4dEdhbWUobmV4dFN0YXJ0UGxheWVySW5kZXgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHN0YXJ0IHRoZSBmaXJzdCBnYW1lXG4gICAgcmV0dXJuIHBsYXlOZXh0R2FtZSgwKTtcbiAgfTtcblxuICBjb25zdCBpbml0U2NvcmVzRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIxTmFtZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjEtbmFtZScpO1xuICAgIHBsYXllcjFOYW1lRWwuaW5uZXJUZXh0ID0gcGxheWVyc1swXS5uYW1lO1xuICAgIGNvbnN0IHBsYXllcjJOYW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMi1uYW1lJyk7XG4gICAgcGxheWVyMk5hbWVFbC5pbm5lclRleHQgPSBwbGF5ZXJzWzFdLm5hbWU7XG5cbiAgICBjb25zdCBwbGF5ZXIxVHlwZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjEtdHlwZScpO1xuICAgIHBsYXllcjFUeXBlRWwuaW5uZXJUZXh0ID0gcGxheWVyc1swXS50eXBlO1xuICAgIGNvbnN0IHBsYXllcjJUeXBlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMi10eXBlJyk7XG4gICAgcGxheWVyMlR5cGVFbC5pbm5lclRleHQgPSBwbGF5ZXJzWzFdLnR5cGU7XG5cbiAgICBjb25zdCBwbGF5ZXIxTWFya2VyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMS1tYXJrZXInKTtcbiAgICBwbGF5ZXIxTWFya2VyRWwuc3JjID0gcGxheWVyc1swXS5tYXJrZXIgPT09ICdYJyA/IHhJY29uIDogb0ljb247XG5cbiAgICBjb25zdCBwbGF5ZXIyTWFya2VyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMi1tYXJrZXInKTtcbiAgICBwbGF5ZXIyTWFya2VyRWwuc3JjID0gcGxheWVyc1sxXS5tYXJrZXIgPT09ICdYJyA/IHhJY29uIDogb0ljb247XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlU2NvcmVzRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIxU2NvcmVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxLXNjb3JlJyk7XG4gICAgcGxheWVyMVNjb3JlRWwuaW5uZXJIVE1MID0gc2NvcmVzWzBdO1xuICAgIGNvbnN0IHBsYXllcjJTY29yZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjItc2NvcmUnKTtcbiAgICBwbGF5ZXIyU2NvcmVFbC5pbm5lckhUTUwgPSBzY29yZXNbMV07XG4gICAgY29uc3QgYm9hcmRGb290RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtZm9vdCcpO1xuICAgIGJvYXJkRm9vdEVsLmlubmVySFRNTCA9ICdUaWVzOiAnICsgc2NvcmVzWzJdO1xuICB9O1xuXG4gIC8vIEdhbWUgc2V0dXAgbW9kYWxcbiAgY29uc3QgZ2FtZVNldHVwTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zZXR1cC1tb2RhbCcpO1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1nYW1lJyk7XG5cbiAgZ2FtZVNldHVwTW9kYWwuc2hvd01vZGFsKCk7XG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBwbGF5ZXJzT2JqLnNldFBsYXllcnMoW1xuICAgICAge1xuICAgICAgICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMS1uYW1lLWlucHV0JykudmFsdWUsXG4gICAgICAgIG1hcmtlcjogJ1gnLFxuICAgICAgICB0eXBlOiAnaHVtYW4nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjItbmFtZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBtYXJrZXI6ICdPJyxcbiAgICAgICAgdHlwZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjItdHlwZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgfSxcbiAgICBdKTtcbiAgICBwbGF5ZXJzID0gcGxheWVyc09iai5nZXRQbGF5ZXJzKCk7XG4gICAgbnVtR2FtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtYmVyLW9mLWdhbWVzJykudmFsdWU7XG4gICAgZ2FtZVNldHVwTW9kYWwuY2xvc2UoKTtcblxuICAgIGluaXRTY29yZXNEaXNwbGF5KCk7XG5cbiAgICBwbGF5TXVsdGlwbGVHYW1lcyhudW1HYW1lcywgcGxheWVycyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NyZWVuQ29udHJvbGxlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==