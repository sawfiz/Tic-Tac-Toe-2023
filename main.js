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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  /* border: 1px solid red; */\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  background: #888;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.board-container {\n  width: 1200px;\n  height: 675px;\n  display: flex;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  flex-direction: column;\n  align-items: center;\n}\n\n.board-head {\n  flex: 1;\n  color: lightblue;\n  text-align: center;\n  font-size: 1.5rem;\n\n}\n\n.play-area {\n  flex: 90;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* border: 1px solid red; */\n}\n\n.player-container {\n  /* width: 20%; */\n  flex: 1;\n  height: 60%;\n  /* border: 1px solid red; */\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 20px;\n  color: white;\n  margin: 30px;\n  box-shadow: 0px 0px 5px white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.player-container.turn{\n  box-shadow: 0px 0px 20px yellow;\n}\n\n.player-id {\n  font-size: 1.5rem;\n  font-weight: bolder;\n}\n.player-name {\n  font-size: 1.5rem;\n}\n.player-type {\n  font-size: 1.5rem;\n}\n.player-score {\n  font-size: 1.5rem;\n}\n.player-marker img {\n  width: 100px;\n}\n\nh1 {\n  color: blue;\n  text-align: center;\n}\n\n.board {\n  /* width: 60%; */\n  flex: 3;\n  height: 90%;\n  display: grid;\n  grid-template-columns: 0.9fr 1.2fr 1fr;\n  grid-template-rows: 0.9fr 0.8fr 1fr;\n  gap: 50px;\n  /* border: 1px solid red; */\n}\n\n.cell {\n  width: 100%;\n  height: 100%;\n  background-size:cover;\n  background: center center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid purple;\n  /* color: blue; */\n  cursor: pointer;\n}\n\n.cell:hover {\n  cursor: pointer;\n  background: #333;\n}\n\n.piece{\n  /* background: blue; */\n  width: 60%;\n}\n\n.board-foot {\n  flex: 1;\n  color: white;\n  text-align: center;\n}\n\n.game-setup-modal {\n  /* position: absolute; */\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 2rem;\n  background-color: #fffc;\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px black;\n}\n\n.game-setup {\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nfieldset {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\nlegend {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\nbutton {\n  width: 80%;\n  margin: 1rem auto;\n  display: flex;\n  justify-content: center;\n}\n.game-message {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 3rem;\n  color: yellow;\n  background: none;\n  border: none;\n  text-shadow: 0 0 4px black;\n}\n\n.game-over-modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 3rem;\n  background: white;\n  padding: 2rem;\n  border: none;\n  text-shadow: 0 0 4px black;\n  border-radius: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,8CAA8C;EAC9C,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,yDAA+D;EAC/D,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;;AAEnB;;AAEA;EACE,QAAQ;EACR,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,OAAO;EACP,WAAW;EACX,2BAA2B;EAC3B,0CAA0C;EAC1C,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,OAAO;EACP,WAAW;EACX,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;EACxB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,kBAAkB;AACpB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  /* border: 1px solid red; */\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  background: #888;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.board-container {\n  width: 1200px;\n  height: 675px;\n  display: flex;\n  background-image: url(\"images/tic-tact-toe-board\\ Medium.jpeg\");\n  background-size: cover;\n  flex-direction: column;\n  align-items: center;\n}\n\n.board-head {\n  flex: 1;\n  color: lightblue;\n  text-align: center;\n  font-size: 1.5rem;\n\n}\n\n.play-area {\n  flex: 90;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* border: 1px solid red; */\n}\n\n.player-container {\n  /* width: 20%; */\n  flex: 1;\n  height: 60%;\n  /* border: 1px solid red; */\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 20px;\n  color: white;\n  margin: 30px;\n  box-shadow: 0px 0px 5px white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.player-container.turn{\n  box-shadow: 0px 0px 20px yellow;\n}\n\n.player-id {\n  font-size: 1.5rem;\n  font-weight: bolder;\n}\n.player-name {\n  font-size: 1.5rem;\n}\n.player-type {\n  font-size: 1.5rem;\n}\n.player-score {\n  font-size: 1.5rem;\n}\n.player-marker img {\n  width: 100px;\n}\n\nh1 {\n  color: blue;\n  text-align: center;\n}\n\n.board {\n  /* width: 60%; */\n  flex: 3;\n  height: 90%;\n  display: grid;\n  grid-template-columns: 0.9fr 1.2fr 1fr;\n  grid-template-rows: 0.9fr 0.8fr 1fr;\n  gap: 50px;\n  /* border: 1px solid red; */\n}\n\n.cell {\n  width: 100%;\n  height: 100%;\n  background-size:cover;\n  background: center center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid purple;\n  /* color: blue; */\n  cursor: pointer;\n}\n\n.cell:hover {\n  cursor: pointer;\n  background: #333;\n}\n\n.piece{\n  /* background: blue; */\n  width: 60%;\n}\n\n.board-foot {\n  flex: 1;\n  color: white;\n  text-align: center;\n}\n\n.game-setup-modal {\n  /* position: absolute; */\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 2rem;\n  background-color: #fffc;\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px black;\n}\n\n.game-setup {\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nfieldset {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\nlegend {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\nbutton {\n  width: 80%;\n  margin: 1rem auto;\n  display: flex;\n  justify-content: center;\n}\n.game-message {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 3rem;\n  color: yellow;\n  background: none;\n  border: none;\n  text-shadow: 0 0 4px black;\n}\n\n.game-over-modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 3rem;\n  background: white;\n  padding: 2rem;\n  border: none;\n  text-shadow: 0 0 4px black;\n  border-radius: 5px;\n}"],"sourceRoot":""}]);
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
            const cellEl = document.createElement('button');
            cellEl.classList.add('cell');
            cellEl.textContent = board[row][col].getValue();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDJCQUEyQjtBQUM5RCxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsY0FBYyxrREFBSzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNELHNEQUFLLEdBQUcsc0RBQUs7O0FBRW5FO0FBQ0Esc0RBQXNELHNEQUFLLEdBQUcsc0RBQUs7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvY2VsbC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL2RlbGF5LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9nbG9iYWxDb25zdGFudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvbWluaU1heC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9yYW1kb21QbGF5LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvc2NyZWVuQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3RpYy10YWN0LXRvZS1ib2FyZCBNZWRpdW0uanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogIzg4ODtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBoZWlnaHQ6IDY3NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1oZWFkIHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogbGlnaHRibHVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgZmxleDogOTA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLnBsYXllci1jb250YWluZXIge1xcbiAgLyogd2lkdGg6IDIwJTsgKi9cXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDMwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ucGxheWVyLWNvbnRhaW5lci50dXJue1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHllbGxvdztcXG59XFxuXFxuLnBsYXllci1pZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLnBsYXllci10eXBlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ucGxheWVyLXNjb3JlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ucGxheWVyLW1hcmtlciBpbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIC8qIHdpZHRoOiA2MCU7ICovXFxuICBmbGV4OiAzO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjlmciAxLjJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuOWZyIDAuOGZyIDFmcjtcXG4gIGdhcDogNTBweDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLmNlbGwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gIC8qIGNvbG9yOiBibHVlOyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbn1cXG5cXG4ucGllY2V7XFxuICAvKiBiYWNrZ3JvdW5kOiBibHVlOyAqL1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmJvYXJkLWZvb3Qge1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtc2V0dXAtbW9kYWwge1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCBibGFjaztcXG59XFxuXFxuLmdhbWUtc2V0dXAge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ2FtZS1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogeWVsbG93O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDRweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDhDQUE4QztFQUM5QywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHlEQUErRDtFQUMvRCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsU0FBUztFQUNULDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTIwMHB4O1xcbiAgaGVpZ2h0OiA2NzVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImltYWdlcy90aWMtdGFjdC10b2UtYm9hcmRcXFxcIE1lZGl1bS5qcGVnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1oZWFkIHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogbGlnaHRibHVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgZmxleDogOTA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLnBsYXllci1jb250YWluZXIge1xcbiAgLyogd2lkdGg6IDIwJTsgKi9cXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDMwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ucGxheWVyLWNvbnRhaW5lci50dXJue1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHllbGxvdztcXG59XFxuXFxuLnBsYXllci1pZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLnBsYXllci10eXBlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ucGxheWVyLXNjb3JlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ucGxheWVyLW1hcmtlciBpbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIC8qIHdpZHRoOiA2MCU7ICovXFxuICBmbGV4OiAzO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjlmciAxLjJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuOWZyIDAuOGZyIDFmcjtcXG4gIGdhcDogNTBweDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLmNlbGwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gIC8qIGNvbG9yOiBibHVlOyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbn1cXG5cXG4ucGllY2V7XFxuICAvKiBiYWNrZ3JvdW5kOiBibHVlOyAqL1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmJvYXJkLWZvb3Qge1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtc2V0dXAtbW9kYWwge1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCBibGFjaztcXG59XFxuXFxuLmdhbWUtc2V0dXAge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ2FtZS1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogeWVsbG93O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDRweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIENlbGwgY2xhc3Ncbi8vIEVhY2ggcGxheWFibGUgbG9jYXRpb24gb24gdGhlIGJvYXJkIGlzIGEgY2VsbCBvYmplY3RcbmNvbnN0IENlbGwgPSAoKSA9PiB7XG4gIGxldCB2YWx1ZSA9ICcuJztcblxuICBjb25zdCBzZXRWYWx1ZSA9IChtYXJrZXIpID0+IHtcbiAgICB2YWx1ZSA9IG1hcmtlcjtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+IHZhbHVlO1xuXG4gIHJldHVybiB7IHNldFZhbHVlLCBnZXRWYWx1ZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDsiLCIvLyBHbG9iYWwgZnVuY3Rpb25cbmZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsYXk7XG4iLCJpbXBvcnQgeyBCb2FyZFNpemUgfSBmcm9tICcuL2dsb2JhbENvbnN0YW50JztcbmltcG9ydCBDZWxsIGZyb20gJy4vY2VsbCc7XG5cbi8vIEdhbWUgYm9hcmQgY2xhc3NcbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgbGV0IGJvYXJkID0gW107XG5cbiAgLy8gQ3JlYXQgYSAzeDMgYm9hcmQsIGVhY2ggbG9jYXRpb24gaXMgYSBDZWxsIG9iamVjdFxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgQm9hcmRTaXplOyByb3crKykge1xuICAgICAgYm9hcmRbcm93XSA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgQm9hcmRTaXplOyBjb2wrKykge1xuICAgICAgICBib2FyZFtyb3ddLnB1c2goQ2VsbCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJlc2V0Qm9hcmQoKTtcblxuICAvLyBHZXR0ZXIgZnVuY3Rpb24gZm9yIHRoZSBib2FyZFxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gcHJpbnQgdGhlIGJvYXJkIHRvIHRoZSBjb25zb2xlXG4gIGNvbnN0IHByaW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gYm9hcmRcbiAgICAgIC5tYXAoKHJvdykgPT4gcm93Lm1hcCgoY2VsbCkgPT4gY2VsbC5nZXRWYWx1ZSgpKS5qb2luKCcgJykpXG4gICAgICAuam9pbignXFxuJyk7XG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgfTtcblxuICAvLyBQbGFjZSB0aGUgbWFya2VyIG9mIHRoZSBhY3RpdmUgcGxheWVyIGluIGRlc2lyZWQgY2VsbFxuICBjb25zdCBwbGFjZU1hcmtlciA9IChyb3csIGNvbCwgcGxheWVyKSA9PiB7XG4gICAgYm9hcmRbcm93XVtjb2xdLnNldFZhbHVlKHBsYXllcik7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2hlY2tXaW5uZXIoKSB7XG4gICAgLy8gQ2hlY2sgcm93c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQm9hcmRTaXplOyBpKyspIHtcbiAgICAgIGlmIChlcXVhbHMzKGJvYXJkW2ldWzBdLCBib2FyZFtpXVsxXSwgYm9hcmRbaV1bMl0pKSB7XG4gICAgICAgIHJldHVybiBib2FyZFtpXVswXS5nZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBDaGVjayBjb2x1bW5zXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCb2FyZFNpemU7IGkrKykge1xuICAgICAgaWYgKGVxdWFsczMoYm9hcmRbMF1baV0sIGJvYXJkWzFdW2ldLCBib2FyZFsyXVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkWzBdW2ldLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIENoZWNrIGRpYWduYWxcbiAgICBpZiAoZXF1YWxzMyhib2FyZFswXVswXSwgYm9hcmRbMV1bMV0sIGJvYXJkWzJdWzJdKSkge1xuICAgICAgcmV0dXJuIGJvYXJkWzFdWzFdLmdldFZhbHVlKCk7XG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBvdGhlciBkaWFnbmFsXG4gICAgaWYgKGVxdWFsczMoYm9hcmRbMF1bMl0sIGJvYXJkWzFdWzFdLCBib2FyZFsyXVswXSkpIHtcbiAgICAgIHJldHVybiBib2FyZFsxXVsxXS5nZXRWYWx1ZSgpO1xuICAgIH1cbiAgICAvLyBDaGVjayBmb3IgdGllXG4gICAgbGV0IG9jY3VwaWVkU3F1cmVzID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEJvYXJkU2l6ZTsgaisrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtqXS5nZXRWYWx1ZSgpICE9PSAnLicpIG9jY3VwaWVkU3F1cmVzKys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvY2N1cGllZFNxdXJlcyA9PT0gOSkgcmV0dXJuICd0aWUnOyAvLyBBbGwgc3F1YXJlcyBhcmUgdGFrZW4gdXBcbiAgICByZXR1cm4gbnVsbDsgLy8gTm90IGEgZ2FtZSB0ZXJtaW5hdGluZyBwbGF5XG4gIH1cblxuICAvLyBDb21wYXJlIGlmIDMgY2VsbHMgaGF2ZSBlcXVhbCB2YWx1ZXMgKG1hcmtlcnMpXG4gIGZ1bmN0aW9uIGVxdWFsczMoYSwgYiwgYykge1xuICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICBhLmdldFZhbHVlKCkgPT09IGIuZ2V0VmFsdWUoKSAmJlxuICAgICAgYS5nZXRWYWx1ZSgpID09PSBjLmdldFZhbHVlKCkgJiZcbiAgICAgIGEuZ2V0VmFsdWUoKSAhPT0gJy4nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBDaGVjayBpcyBhIGNlbGwgaXMgYXZhaWxhYmxlIGZvciBwbGF5aW5nXG4gIGNvbnN0IGlzQXZhaWxhYmxlID0gKHJvdywgY29sKSA9PiB7XG4gICAgaWYgKGJvYXJkW3Jvd11bY29sXS5nZXRWYWx1ZSgpID09PSAnLicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gQ291bnQgdGhlIG51bWJlciBvZiBjZWxscyB0aGF0IGFyZSBhdmFpYWxibGVcbiAgY29uc3QgYXZhaWxhYmxlQ2VsbHMgPSAoKSA9PiB7XG4gICAgY291bnQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICBpZiAoaXNBdmFpbGFibGUpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlc2V0Qm9hcmQsXG4gICAgZ2V0Qm9hcmQsXG4gICAgcHJpbnRCb2FyZCxcbiAgICBwbGFjZU1hcmtlcixcbiAgICBjaGVja1dpbm5lcixcbiAgICBpc0F2YWlsYWJsZSxcbiAgICBhdmFpbGFibGVDZWxscyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IG1ha2VSYW5kb21QbGF5IGZyb20gJy4vcmFtZG9tUGxheSc7XG5pbXBvcnQgbWFrZU1pbmltYXhQbGF5IGZyb20gJy4vbWluaU1heCc7XG5cbi8vIEdhbWUgY29udHJvbGxlciB3aGVyZSB0aGUgZ2FtZSBwbGF5aW5nIGxvZ2ljIGlzXG5jb25zdCBHYW1lQ29udHJvbGxlciA9IChwbGF5ZXJzLCBzdGFydFBsYXllckluZGV4KSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gR2FtZUJvYXJkKCk7XG4gIGJvYXJkLnByaW50Qm9hcmQoKTtcblxuICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyc1tzdGFydFBsYXllckluZGV4XTtcbiAgY29uc29sZS5sb2coYWN0aXZlUGxheWVyKTtcblxuICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXI7XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyID0gKCkgPT4ge1xuICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VDb21wdXRlclBsYXkgPSAoKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICAvLyBDb21wdXRlciBwbGF5ZXIgcGxheXNcbiAgICBpZiAoYWN0aXZlUGxheWVyLnR5cGUgPT09ICdyYW5kb20nKSB7XG4gICAgICByZXN1bHQgPSBtYWtlUmFuZG9tUGxheShib2FyZCwgYWN0aXZlUGxheWVyLm1hcmtlcik7XG4gICAgICBib2FyZC5wcmludEJvYXJkKCk7XG4gICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgc3dpdGNoUGxheWVyKCk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZVBsYXllci50eXBlID09PSAnYWknKSB7XG4gICAgICByZXN1bHQgPSBtYWtlTWluaW1heFBsYXkoYm9hcmQsIGFjdGl2ZVBsYXllci5tYXJrZXIpO1xuICAgICAgYm9hcmQucHJpbnRCb2FyZCgpO1xuICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIHN3aXRjaFBsYXllcigpO1xuICAgIH1cbiAgfTtcblxuICAvLyBNYWtlIGEgcGxheSBpbiBhIGNob3NlbiBjZWxsXG4gIC8vIElmIHRoZXJlIGlzIGEgY29tcHV0ZXIgcGxheWVyLCB0aGUgY29tcHV0ZXIgbWFrZXMgYSBwbGF5IHRvb1xuICBjb25zdCBwbGF5Um91bmQgPSAocm93LCBjb2wpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgLy8gUGxheSB0aGUgaHVtYW4gcGxheWVyIHBsYXlcbiAgICBjb25zb2xlLmxvZyhcImh1bWFuIHBsYXllciBwbGF5c1wiKTtcbiAgICBib2FyZC5wbGFjZU1hcmtlcihyb3csIGNvbCwgYWN0aXZlUGxheWVyLm1hcmtlcik7XG4gICAgYm9hcmQucHJpbnRCb2FyZCgpO1xuXG4gICAgLy8gQ2hlY2sgZm9yIGVuZCBvZiBnYW1lIGFuZCBnYW1lIHJlc3VsdFxuICAgIHJlc3VsdCA9IGJvYXJkLmNoZWNrV2lubmVyKCk7XG4gICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcblxuICAgIHN3aXRjaFBsYXllcigpO1xuXG4gICAgLy8gQ29tcHV0ZXIgcGxheWVyIHBsYXlzXG4gICAgY29uc29sZS5sb2coXCJDb21wdXRlciBwbGF5c1wiKTtcbiAgICByZXN1bHQgPSBtYWtlQ29tcHV0ZXJQbGF5KCk7XG4gICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBJZiBjb21wdXRlciBwbGF5ZXIgaXMgcGxheWVyIDEsIG1ha2UgYSBjb21wdXRlciBwbGF5IGZpcnN0XG4gIGlmIChhY3RpdmVQbGF5ZXIudHlwZSAhPT0gJ2h1bWFuJykge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgMXN0IHBsYXlzXCIpO1xuICAgIG1ha2VDb21wdXRlclBsYXkoKTtcbiAgfVxuXG4gIHJldHVybiB7IHBsYXlSb3VuZCwgZ2V0Qm9hcmQ6IGJvYXJkLmdldEJvYXJkLCAgcmVzZXRCb2FyZDogYm9hcmQucmVzZXRCb2FyZCwgZ2V0QWN0aXZlUGxheWVyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbGxlcjtcbiIsIi8vIEdsb2JhbCBjb25zdGFudHNcbmNvbnN0IEJvYXJkU2l6ZSA9IDM7XG5cbmV4cG9ydCB7IEJvYXJkU2l6ZSB9O1xuIiwiaW1wb3J0IFNjcmVlbkNvbnRyb2xsZXIgZnJvbSAnLi9zY3JlZW5Db250cm9sbGVyJztcblxuLy8gQ3JlYXRlIFNjcmVlbkNvbnRyb2xsZXIgaW5zdGFuY2UgYW5kIHBsYXkgZ2FtZVxuU2NyZWVuQ29udHJvbGxlcigpO1xuIiwiaW1wb3J0IHsgQm9hcmRTaXplIH0gZnJvbSAnLi9nbG9iYWxDb25zdGFudCc7XG5cbi8vIEEgY29tcHV0ZXIgcGxheWVyIHRoYXQgcGxheXMgdXNpbmcgdGhlIE1pbmltYXggYWxnb3JpdGhtXG5jb25zdCBtYWtlTWluaW1heFBsYXkgPSAoYm9hcmQsIG1hcmtlcikgPT4ge1xuICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xuICBsZXQgYmVzdFJvdywgYmVzdENvbDtcbiAgbGV0IHJlc3VsdDtcbiAgY29uc3Qgb3Bwb3NpdGVNYXJrZXIgPSBtYXJrZXIgPT09ICdPJyA/ICdYJyA6ICdPJztcblxuICAvLyBHbyB0aHJvdWdoIGFsbCBhdmFpYWxibGUgY2VsbHMgdG8gZmluZCB0aGUgYmVzdCBwb3NpYmxlIG1vdmVcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgQm9hcmRTaXplOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEJvYXJkU2l6ZTsgY29sKyspIHtcbiAgICAgIGlmIChib2FyZC5pc0F2YWlsYWJsZShyb3csIGNvbCkpIHtcbiAgICAgICAgLy8gVHJ5IHRvIHBsYXkgYW4gYXZhaWxhYmxlIGNlbGxcbiAgICAgICAgYm9hcmQucGxhY2VNYXJrZXIocm93LCBjb2wsIG1hcmtlcik7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGdldCB0aGUgc2NvcmUgb2YgdGhpcyBwbGF5XG4gICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgZmFsc2UpO1xuICAgICAgICAvLyBSZWNvcmQgaWYgaXQgaXMgYSBiZXR0ZXIgbW92ZVxuICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgICAgICBiZXN0Um93ID0gcm93O1xuICAgICAgICAgIGJlc3RDb2wgPSBjb2w7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgdGhlIGNlbGxcbiAgICAgICAgYm9hcmQucGxhY2VNYXJrZXIocm93LCBjb2wsICcuJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUGxheSB0aGUgYmVzdCBtb3ZlIGZvdW5kXG4gIGJvYXJkLnBsYWNlTWFya2VyKGJlc3RSb3csIGJlc3RDb2wsIG1hcmtlcik7XG5cbiAgLy8gSWYgdGhlIGdhbWVzIHdpdGggYSB3aW5uZXIgb2YgdGllLCByZXR1cm4gcmVzdWx0XG4gIHJlc3VsdCA9IGJvYXJkLmNoZWNrV2lubmVyKCk7XG4gIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG5cbiAgLy8gUmVjdXJzaXZlIG1pbmltYXggYWxnb3JpdGhtXG4gIGZ1bmN0aW9uIG1pbmltYXgoYm9hcmQsIGlzTWF4aW1pemluZykge1xuICAgIC8vIFRlcm1pbmF0aW5nIGNvbmRpdGlvbiBmb3IgdGhlIHJlY3Vyc2l2ZSBhbGdvcml0aG1cbiAgICBjb25zdCByZXN1bHQgPSBib2FyZC5jaGVja1dpbm5lcigpO1xuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgIGlmIChyZXN1bHQgPT09IG1hcmtlcikge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgICB9IFxuICAgICAgaWYgKHJlc3VsdCA9PT0gJ3RpZScpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IFxuICAgICAgaWYgKHJlc3VsdCA9PT0gb3Bwb3NpdGVNYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIC0xMDtcbiAgICAgIH0gXG4gICAgfVxuXG4gICAgLy8gQWx0ZXJuYXRlIGJldHdlZW4gTWluIGFuZCBNYXggcGxheWVyc1xuICAgIGlmIChpc01heGltaXppbmcpIHtcbiAgICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQm9hcmRTaXplOyBqKyspIHtcbiAgICAgICAgICBpZiAoYm9hcmQuaXNBdmFpbGFibGUoaSwgaikpIHtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlTWFya2VyKGksIGosIG1hcmtlcik7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIGZhbHNlKTtcbiAgICAgICAgICAgIGJlc3RTY29yZSA9IE1hdGgubWF4KHNjb3JlLCBiZXN0U2NvcmUpO1xuICAgICAgICAgICAgYm9hcmQucGxhY2VNYXJrZXIoaSwgaiwgJy4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBiZXN0U2NvcmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQm9hcmRTaXplOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBCb2FyZFNpemU7IGorKykge1xuICAgICAgICAgIGlmIChib2FyZC5pc0F2YWlsYWJsZShpLCBqKSkge1xuICAgICAgICAgICAgYm9hcmQucGxhY2VNYXJrZXIoaSwgaiwgb3Bwb3NpdGVNYXJrZXIpO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBtaW5pbWF4KGJvYXJkLCB0cnVlKTtcbiAgICAgICAgICAgIGJlc3RTY29yZSA9IE1hdGgubWluKHNjb3JlLCBiZXN0U2NvcmUpO1xuICAgICAgICAgICAgYm9hcmQucGxhY2VNYXJrZXIoaSwgaiwgJy4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBiZXN0U2NvcmU7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlTWluaW1heFBsYXk7XG4iLCJjb25zdCBQbGF5ZXJzID0gKCkgPT4ge1xuICBsZXQgcGxheWVycyA9IFtdO1xuXG4gIGNvbnN0IHNldFBsYXllcnMgPSAodmFsdWVzKSA9PiB7XG4gICAgcGxheWVycyA9IHZhbHVlcztcbiAgfTtcblxuICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4gcGxheWVycztcblxuICByZXR1cm4ge3NldFBsYXllcnMsIGdldFBsYXllcnN9O1xufTtcblxuZXhwb3J0IHsgUGxheWVycyB9O1xuIiwiLy8gQSBjb21wdXRlciBwbGF5ZXIgdGhhdCBwbGF5cyBhdCByYW5kb20gY2VsbHNcbmNvbnN0IG1ha2VSYW5kb21QbGF5ID0gKGJvYXJkLCBtYXJrZXIpID0+IHtcbiAgbGV0IHJvdywgY29sO1xuICBsZXQgcmVzdWx0OyAvLyBSZXN1bHQgZnJvbSBjaGVja1dpbm5lciwgY2FuIGJlICdYJywgJ08nLCAnVGllJywgb3IgbnVsbFxuXG4gIC8vIFRyeSB1bnRpbCBjb21wdXRlciBmaW5kcyBhIHZhbGlkIGNlbGwgdG8gcGxheVxuICBkbyB7XG4gICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XG4gICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XG4gIH0gd2hpbGUgKCFib2FyZC5pc0F2YWlsYWJsZShyb3csIGNvbCkpO1xuXG4gIC8vIFBsYXkgYSB2YWxpZCBtb3ZlXG4gIGJvYXJkLnBsYWNlTWFya2VyKHJvdywgY29sLCBtYXJrZXIpO1xuICByZXN1bHQgPSBib2FyZC5jaGVja1dpbm5lcigpO1xuXG4gIC8vIEdldHRpbmcgYSB2YWxpZCByZXN1bHQgbWVhbnMgYSBnYW1lIGlzIGVuZGVkIHdpdGggYSB3aW5uZXIgb3IgYSB0aWVcbiAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJhbmRvbVBsYXk7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9nYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgZGVsYXkgZnJvbSAnLi9kZWxheSc7XG5pbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSAnLi9wbGF5ZXJzJztcbmltcG9ydCBvSWNvbiBmcm9tICcuL2ltYWdlcy9PLnBuZyc7XG5pbXBvcnQgeEljb24gZnJvbSAnLi9pbWFnZXMvWC5wbmcnO1xuXG4vLyBUaGUgU2NyZWVuQ29udHJvbGxlciB0aGF0IHByZXNlbnRzIGEgdmlldyBhbmQgZ2V0cyB1c2VyIHJlcXVlc3RzXG5jb25zdCBTY3JlZW5Db250cm9sbGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJzT2JqID0gUGxheWVycygpO1xuICBsZXQgcGxheWVycztcbiAgbGV0IG51bUdhbWVzO1xuICBsZXQgd2lubmVySW5kZXggPSAxO1xuICBsZXQgc2NvcmVzID0gWzAsIDAsIDBdOyAvLyBTY29yZXMgZm9yIHBsYXllciAxLCBwbGF5ZXIgMiwgdGllXG4gIGNvbnN0IGJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgY29uc3QgcmVzdWx0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMnKTtcblxuICBjb25zdCBwbGF5R2FtZSA9IChwbGF5ZXJzLCBzdGFydFBsYXllckluZGV4KSA9PiB7XG4gICAgbGV0IGdhbWUgPSBHYW1lQ29udHJvbGxlcihwbGF5ZXJzLCBzdGFydFBsYXllckluZGV4KTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgLy8gUmVkcmF3cyB0aGUgZ2FtZSBib2FyZCBpbiB0aGUgd2ViIHBhZ2VcbiAgICAgIGNvbnN0IHVwZGF0ZVNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgYm9hcmRFbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgYm9hcmQgPSBnYW1lLmdldEJvYXJkKCk7XG5cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmQubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZXMgZWFjaCBjZWxsIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IGNlbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIGNlbGxFbC50ZXh0Q29udGVudCA9IGJvYXJkW3Jvd11bY29sXS5nZXRWYWx1ZSgpO1xuXG4gICAgICAgICAgICAvLyBBZGQgZGF0YSBhdHRyaWJ1dGVzIHRvIHRoZSBjZWxsIGVsZW1lbnRzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgIGNlbGxFbC5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICAgICAgICAgIGNlbGxFbC5kYXRhc2V0LmNvbCA9IGNvbDtcblxuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gYm9hcmRbcm93XVtjb2xdLmdldFZhbHVlKCk7XG4gICAgICAgICAgICBjb25zdCBtYXJrZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgLy8gbWFya2VyRWwuc3JjID0gbWFya2VyID09PSAnWCcgPyB4SWNvbiA6IG9JY29uO1xuICAgICAgICAgICAgbWFya2VyRWwuY2xhc3NMaXN0LmFkZCgncGllY2UnKTtcbiAgICAgICAgICAgIGNlbGxFbC5hcHBlbmRDaGlsZChtYXJrZXJFbCk7XG5cbiAgICAgICAgICAgIC8vIFN0eWxlIGFuZCBkaXNhYmxlIHBsYXllZCBjZWxsc1xuICAgICAgICAgICAgaWYgKG1hcmtlciA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgIG1hcmtlckVsLnNyYyA9IHhJY29uO1xuICAgICAgICAgICAgICAvLyBEaXNhYmxlcyBjbGljaywgbm8gbW9yZSBob3ZlciBlZmZlY3QsIGN1cnNvciBiZWNvbWVzIGRlZmF1bHRcbiAgICAgICAgICAgICAgY2VsbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWFya2VyID09PSAnTycpIHtcbiAgICAgICAgICAgICAgbWFya2VyRWwuc3JjID0gb0ljb247XG4gICAgICAgICAgICAgIC8vIERpc2FibGVzIGNsaWNrLCBubyBtb3JlIGhvdmVyIGVmZmVjdCwgY3Vyc29yIGJlY29tZXMgZGVmYXVsdFxuICAgICAgICAgICAgICBjZWxsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkRWwuYXBwZW5kQ2hpbGQoY2VsbEVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIEhhbmRsZXMgY2xpY2tzIG9uIHRoZSBib2FyZFxuICAgICAgLy8gTmVlZHMgdG8gYmUgYXluY3MgdG8gdXNlIHRoZSBkZWxheSBmdW5jdGlvbiB0byBkZWxheSB0aGUgYWxlcnRzXG4gICAgICBhc3luYyBmdW5jdGlvbiBjbGlja0hhbmRsZXJCb2FyZChlKSB7XG4gICAgICAgIC8vIEVycm9yIGhhbmRsaW5nIGZvciBpcyB0aGUgZ2FtZSBwcmV2aW91c2x5IGNyZWF0ZWQgaXMgYWxyZWFkeSBoYW5kbGVkLlxuICAgICAgICBpZiAoZ2FtZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB1cGRhdGVTY3JlZW4oKTtcblxuICAgICAgICBjb25zdCByb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvdztcbiAgICAgICAgY29uc3QgY29sID0gZS50YXJnZXQuZGF0YXNldC5jb2w7XG4gICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgLy8gSWdub3JlIGludmFsaWQgdXNlciBpbnB1dFxuICAgICAgICAvLyBXaGVuIGEgY2VsbCBoYXMgYWxyZWFkeSBiZWVuIGNsaWNrZWQsIGl0J3MgcG9pbnRlciBldmVudCBpcyBkaXNhYmxlZFxuICAgICAgICAvLyBDbGlrZWQgb24gaXQgcmVzdWx0cyBpbiByb3cgYW5kIGNvbCBiZWluZyB1bmRlZmluZWRcbiAgICAgICAgaWYgKCFyb3cgfHwgIWNvbCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIFBsYXkgYSB2YWxpZCBtb3ZlXG4gICAgICAgIHJlc3VsdCA9IGdhbWUucGxheVJvdW5kKHJvdywgY29sKTtcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBnYW1lLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSAndGllJykge1xuICAgICAgICAgICAgLy8gVGVybWluYXRlIHRoaXMgZ2FtZS4gIFRoaXMgY2F1c2VzIHNvbWUgaXNzdWVzIHdpdGggUHJvbWlzZVxuICAgICAgICAgICAgLy8gRXJyb3IgbWVzc2FnZSBpbiBjb25zb2xlLiBCdXQgdGhlIGdhbWUgcnVucyBmaW5lLlxuICAgICAgICAgICAgZ2FtZSA9IG51bGw7XG4gICAgICAgICAgICByZXNvbHZlKDIpOyAvLyBJbmRleCBvZiBUaWUgaXMgU2NvcmVzIGlzIDJcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2lubmVySW5kZXggPSBwbGF5ZXJzLmluZGV4T2YoZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKSk7XG4gICAgICAgICAgICAvLyBUZXJtaW5hdGUgdGhpcyBnYW1lLiAgVGhpcyBjYXVzZXMgc29tZSBpc3N1ZXMgd2l0aCBQcm9taXNlXG4gICAgICAgICAgICAvLyBFcnJvciBtZXNzYWdlIGluIGNvbnNvbGUuIEJ1dCB0aGUgZ2FtZSBydW5zIGZpbmUuXG4gICAgICAgICAgICBnYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUod2lubmVySW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgICBib2FyZEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyQm9hcmQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlNdWx0aXBsZUdhbWVzID0gKG51bUdhbWVzLCBwbGF5ZXJzKSA9PiB7XG4gICAgbGV0IGdhbWVJbmRleCA9IDA7XG4gICAgLy8gdXBkYXRlU2NvcmVzRGlzcGxheSgpO1xuXG4gICAgY29uc3QgcGxheU5leHRHYW1lID0gKHN0YXJ0UGxheWVySW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBwbGF5R2FtZShwbGF5ZXJzLCBzdGFydFBsYXllckluZGV4KS50aGVuKGFzeW5jICh3aW5uZXJJbmRleCkgPT4ge1xuICAgICAgICAvLyB1cGRhdGUgdGhlIHNjb3Jlc1xuICAgICAgICBzY29yZXNbd2lubmVySW5kZXhdICs9IDE7XG4gICAgICAgIHVwZGF0ZVNjb3Jlc0Rpc3BsYXkoKTtcbiAgICAgICAgY29uc3QgZ2FtZU1zZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtbWVzc2FnZScpO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgcmVzdWx0IG9mIGVhY2ggZ2FtZVxuICAgICAgICBpZiAod2lubmVySW5kZXggPCAyKSB7XG4gICAgICAgICAgZ2FtZU1zZ0VsLmlubmVyVGV4dCA9IGAke3BsYXllcnNbd2lubmVySW5kZXhdLm5hbWV9IHdpbnMhYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lTXNnRWwuaW5uZXJUZXh0ID0gJ1RpZSEnO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2FtZU1zZ0VsLnNob3dNb2RhbCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBnYW1lTXNnRWwuY2xvc2UoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIGFsbCBnYW1lcyBoYXZlIGJlZW4gcGxheWVkXG4gICAgICAgIGlmIChnYW1lSW5kZXggPj0gbnVtR2FtZXMgLSAxKSB7XG4gICAgICAgICAgLy8gYWxlcnQoJ0dhbWUgT3ZlciEnKTtcbiAgICAgICAgICBjb25zdCBnYW1lT3Zlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlci1tb2RhbCcpO1xuICAgICAgICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGFydC1nYW1lJyk7XG4gICAgICAgICAgZ2FtZU92ZXJNb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgICAgICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZ2FtZU92ZXJNb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgLy8gZ2FtZSgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBzY29yZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvdGhlcndpc2UsIGRldGVybWluZSB3aG8gZ29lcyBmaXJzdCBuZXh0IGFuZCBwbGF5IHRoZSBuZXh0IGdhbWVcbiAgICAgICAgZ2FtZUluZGV4ICs9IDE7XG4gICAgICAgIGNvbnN0IG5leHRTdGFydFBsYXllckluZGV4ID0gd2lubmVySW5kZXggPT09IDEgPyAwIDogMTtcbiAgICAgICAgcmV0dXJuIHBsYXlOZXh0R2FtZShuZXh0U3RhcnRQbGF5ZXJJbmRleCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gc3RhcnQgdGhlIGZpcnN0IGdhbWVcbiAgICByZXR1cm4gcGxheU5leHRHYW1lKDApO1xuICB9O1xuXG4gIGNvbnN0IGluaXRTY29yZXNEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllcjFOYW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMS1uYW1lJyk7XG4gICAgcGxheWVyMU5hbWVFbC5pbm5lclRleHQgPSBwbGF5ZXJzWzBdLm5hbWU7XG4gICAgY29uc3QgcGxheWVyMk5hbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyLW5hbWUnKTtcbiAgICBwbGF5ZXIyTmFtZUVsLmlubmVyVGV4dCA9IHBsYXllcnNbMV0ubmFtZTtcblxuICAgIGNvbnN0IHBsYXllcjFUeXBlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMS10eXBlJyk7XG4gICAgcGxheWVyMVR5cGVFbC5pbm5lclRleHQgPSBwbGF5ZXJzWzBdLnR5cGU7XG4gICAgY29uc3QgcGxheWVyMlR5cGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyLXR5cGUnKTtcbiAgICBwbGF5ZXIyVHlwZUVsLmlubmVyVGV4dCA9IHBsYXllcnNbMV0udHlwZTtcblxuICAgIGNvbnN0IHBsYXllcjFNYXJrZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxLW1hcmtlcicpO1xuICAgIHBsYXllcjFNYXJrZXJFbC5zcmMgPSBwbGF5ZXJzWzBdLm1hcmtlciA9PT0gJ1gnID8geEljb24gOiBvSWNvbjtcblxuICAgIGNvbnN0IHBsYXllcjJNYXJrZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyLW1hcmtlcicpO1xuICAgIHBsYXllcjJNYXJrZXJFbC5zcmMgPSBwbGF5ZXJzWzFdLm1hcmtlciA9PT0gJ1gnID8geEljb24gOiBvSWNvbjtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTY29yZXNEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllcjFTY29yZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjEtc2NvcmUnKTtcbiAgICBwbGF5ZXIxU2NvcmVFbC5pbm5lckhUTUwgPSBzY29yZXNbMF07XG4gICAgY29uc3QgcGxheWVyMlNjb3JlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMi1zY29yZScpO1xuICAgIHBsYXllcjJTY29yZUVsLmlubmVySFRNTCA9IHNjb3Jlc1sxXTtcbiAgICBjb25zdCBib2FyZEZvb3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1mb290Jyk7XG4gICAgYm9hcmRGb290RWwuaW5uZXJIVE1MID0gJ1RpZXM6ICcgKyBzY29yZXNbMl07XG4gIH07XG5cbiAgLy8gR2FtZSBzZXR1cCBtb2RhbFxuICBjb25zdCBnYW1lU2V0dXBNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXNldHVwLW1vZGFsJyk7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0LWdhbWUnKTtcblxuICBnYW1lU2V0dXBNb2RhbC5zaG93TW9kYWwoKTtcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHBsYXllcnNPYmouc2V0UGxheWVycyhbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxLW5hbWUtaW5wdXQnKS52YWx1ZSxcbiAgICAgICAgbWFya2VyOiAnWCcsXG4gICAgICAgIHR5cGU6ICdodW1hbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMi1uYW1lLWlucHV0JykudmFsdWUsXG4gICAgICAgIG1hcmtlcjogJ08nLFxuICAgICAgICB0eXBlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMi10eXBlLWlucHV0JykudmFsdWUsXG4gICAgICB9LFxuICAgIF0pO1xuICAgIHBsYXllcnMgPSBwbGF5ZXJzT2JqLmdldFBsYXllcnMoKTtcbiAgICBudW1HYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW1iZXItb2YtZ2FtZXMnKS52YWx1ZTtcbiAgICBnYW1lU2V0dXBNb2RhbC5jbG9zZSgpO1xuXG4gICAgaW5pdFNjb3Jlc0Rpc3BsYXkoKTtcblxuICAgIHBsYXlNdWx0aXBsZUdhbWVzKG51bUdhbWVzLCBwbGF5ZXJzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JlZW5Db250cm9sbGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9