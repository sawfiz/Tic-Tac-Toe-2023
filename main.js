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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n  font-family: 'Courier New', Courier, monospace;\n}\n\nh1 {\n  color: blue;\n}\n\n.board {\n  display: grid;\n  height: 500px;\n  width: 500px;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  border: 5px solid black;\n  gap: 20px;\n  padding: 20px;\n  background-color: yellow;\n}\n\n.cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 5rem;\n  border: 1px solid purple;\n  background: blue;\n  cursor: pointer;\n}\n\n.player-1 {\n  background: red;\n  border: 1px solid black;\n  cursor: default;\n}\n\n.player-2 {\n  background: green;\n  border: 1px solid black;\n  cursor: default;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,2BAA2B;EAC3B,8CAA8C;AAChD;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,qCAAqC;EACrC,kCAAkC;EAClC,uBAAuB;EACvB,SAAS;EACT,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,eAAe;AACjB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n  font-family: 'Courier New', Courier, monospace;\n}\n\nh1 {\n  color: blue;\n}\n\n.board {\n  display: grid;\n  height: 500px;\n  width: 500px;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  border: 5px solid black;\n  gap: 20px;\n  padding: 20px;\n  background-color: yellow;\n}\n\n.cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 5rem;\n  border: 1px solid purple;\n  background: blue;\n  cursor: pointer;\n}\n\n.player-1 {\n  background: red;\n  border: 1px solid black;\n  cursor: default;\n}\n\n.player-2 {\n  background: green;\n  border: 1px solid black;\n  cursor: default;\n}\n"],"sourceRoot":""}]);
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




// The ScreenController that presents a view and gets user requests
const ScreenController = async (numGames, players) => {
  let gamePlayed = 0;
  let winnerIndex = 1;
  let score = [0, 0, 0]; // Scores for player 1, player 2, tie

  const playGame = (players, startPlayerIndex) => {
    console.log(
      '🚀 ~ file: screenController.js:11 ~ playGame ~ startPlayerIndex:',
      startPlayerIndex
    );
    let game = (0,_gameController__WEBPACK_IMPORTED_MODULE_1__["default"])(players, startPlayerIndex);

    return new Promise((resolve) => {
      const boardEl = document.querySelector('.board');

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

            // Style and disable played cells
            if (board[row][col].getValue() === 'X') {
              cellEl.classList.add('player-1');
              cellEl.disabled = true;
            }
            if (board[row][col].getValue() === 'O') {
              cellEl.classList.add('player-2');
              cellEl.disabled = true;
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
            score[2]++;
            // Terminate this game.  This causes some issues with Promise
            // Error message in console. But the game runs fine.
            game = null;
            resolve(2);  // Index of Tie is Scores is 2
          } else {
            winnerIndex = players.indexOf(game.getActivePlayer());
            score[winnerIndex] = score[winnerIndex] + 1;
            // Terminate this game.  This causes some issues with Promise
            // Error message in console. But the game runs fine.
            game = null;
            resolve(winnerIndex);
          }
        }
      }
      boardEl.addEventListener('click', clickHandlerBoard);

      updateScreen();
    });
  };

  const playMultipleGames = (numGames, players) => {
    let gameIndex = 0;
    let scores = [0, 0, 0];

    const playNextGame = (startPlayerIndex) => {
      return playGame(players, startPlayerIndex).then(async (winnerIndex) => {
        // update the scores
        scores[winnerIndex] += 1;

        // display result of each game
        await (0,_delay__WEBPACK_IMPORTED_MODULE_2__["default"])(100);
        if (winnerIndex < 2) {
          alert(`${players[winnerIndex].type} wins! ` + scores);
        } else {
          alert('Tie!' + ' ' + scores);
        }

        // check if all games have been played
        if (gameIndex >= numGames - 1) {
          alert('Game Over! ' + scores);
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

  playMultipleGames(numGames, players);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenController);


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
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");



const players = (0,_players__WEBPACK_IMPORTED_MODULE_0__.Players)();

// TODO: Add a form for game set up
// Player attributes
// Number of games to play

players.setPlayers([
  { name: 'playerOneName', marker: 'X', type: 'ai' },
  { name: 'playerTwoName', marker: 'O', type: 'human' },
]);

// Prompt user for number of games to play
// const numGames = parseInt(prompt('How many games do you want to play?'));

// Create ScreenController instance and play game
(0,_screenController__WEBPACK_IMPORTED_MODULE_1__["default"])(3, players.getPlayers());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0Q7QUFDcEQsSUFBSSxtREFBbUQ7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZEQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9jZWxsLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL2dsb2JhbENvbnN0YW50LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvbWluaU1heC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9yYW1kb21QbGF5LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvc2NyZWVuQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbGF5ZXItMSB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnBsYXllci0yIHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsU0FBUztFQUNULGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgYmFja2dyb3VuZDogYmx1ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYXllci0xIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ucGxheWVyLTIge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gQ2VsbCBjbGFzc1xuLy8gRWFjaCBwbGF5YWJsZSBsb2NhdGlvbiBvbiB0aGUgYm9hcmQgaXMgYSBjZWxsIG9iamVjdFxuY29uc3QgQ2VsbCA9ICgpID0+IHtcbiAgbGV0IHZhbHVlID0gJy4nO1xuXG4gIGNvbnN0IHNldFZhbHVlID0gKG1hcmtlcikgPT4ge1xuICAgIHZhbHVlID0gbWFya2VyO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlID0gKCkgPT4gdmFsdWU7XG5cbiAgcmV0dXJuIHsgc2V0VmFsdWUsIGdldFZhbHVlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDZWxsOyIsIi8vIEdsb2JhbCBmdW5jdGlvblxuZnVuY3Rpb24gZGVsYXkodGltZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxheTtcbiIsImltcG9ydCB7IEJvYXJkU2l6ZSB9IGZyb20gJy4vZ2xvYmFsQ29uc3RhbnQnO1xuaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcblxuLy8gR2FtZSBib2FyZCBjbGFzc1xuY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBbXTtcblxuICAvLyBDcmVhdCBhIDN4MyBib2FyZCwgZWFjaCBsb2NhdGlvbiBpcyBhIENlbGwgb2JqZWN0XG4gIGNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBCb2FyZFNpemU7IHJvdysrKSB7XG4gICAgICBib2FyZFtyb3ddID0gW107XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBCb2FyZFNpemU7IGNvbCsrKSB7XG4gICAgICAgIGJvYXJkW3Jvd10ucHVzaChDZWxsKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmVzZXRCb2FyZCgpO1xuXG4gIC8vIEdldHRlciBmdW5jdGlvbiBmb3IgdGhlIGJvYXJkXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byBwcmludCB0aGUgYm9hcmQgdG8gdGhlIGNvbnNvbGVcbiAgY29uc3QgcHJpbnRCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBib2FyZFxuICAgICAgLm1hcCgocm93KSA9PiByb3cubWFwKChjZWxsKSA9PiBjZWxsLmdldFZhbHVlKCkpLmpvaW4oJyAnKSlcbiAgICAgIC5qb2luKCdcXG4nKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuICB9O1xuXG4gIC8vIFBsYWNlIHRoZSBtYXJrZXIgb2YgdGhlIGFjdGl2ZSBwbGF5ZXIgaW4gZGVzaXJlZCBjZWxsXG4gIGNvbnN0IHBsYWNlTWFya2VyID0gKHJvdywgY29sLCBwbGF5ZXIpID0+IHtcbiAgICBib2FyZFtyb3ddW2NvbF0uc2V0VmFsdWUocGxheWVyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjaGVja1dpbm5lcigpIHtcbiAgICAvLyBDaGVjayByb3dzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCb2FyZFNpemU7IGkrKykge1xuICAgICAgaWYgKGVxdWFsczMoYm9hcmRbaV1bMF0sIGJvYXJkW2ldWzFdLCBib2FyZFtpXVsyXSkpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkW2ldWzBdLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIENoZWNrIGNvbHVtbnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgICBpZiAoZXF1YWxzMyhib2FyZFswXVtpXSwgYm9hcmRbMV1baV0sIGJvYXJkWzJdW2ldKSkge1xuICAgICAgICByZXR1cm4gYm9hcmRbMF1baV0uZ2V0VmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2hlY2sgZGlhZ25hbFxuICAgIGlmIChlcXVhbHMzKGJvYXJkWzBdWzBdLCBib2FyZFsxXVsxXSwgYm9hcmRbMl1bMl0pKSB7XG4gICAgICByZXR1cm4gYm9hcmRbMV1bMV0uZ2V0VmFsdWUoKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgdGhlIG90aGVyIGRpYWduYWxcbiAgICBpZiAoZXF1YWxzMyhib2FyZFswXVsyXSwgYm9hcmRbMV1bMV0sIGJvYXJkWzJdWzBdKSkge1xuICAgICAgcmV0dXJuIGJvYXJkWzFdWzFdLmdldFZhbHVlKCk7XG4gICAgfVxuICAgIC8vIENoZWNrIGZvciB0aWVcbiAgICBsZXQgb2NjdXBpZWRTcXVyZXMgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQm9hcmRTaXplOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQm9hcmRTaXplOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdLmdldFZhbHVlKCkgIT09ICcuJykgb2NjdXBpZWRTcXVyZXMrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9jY3VwaWVkU3F1cmVzID09PSA5KSByZXR1cm4gJ3RpZSc7IC8vIEFsbCBzcXVhcmVzIGFyZSB0YWtlbiB1cFxuICAgIHJldHVybiBudWxsOyAvLyBOb3QgYSBnYW1lIHRlcm1pbmF0aW5nIHBsYXlcbiAgfVxuXG4gIC8vIENvbXBhcmUgaWYgMyBjZWxscyBoYXZlIGVxdWFsIHZhbHVlcyAobWFya2VycylcbiAgZnVuY3Rpb24gZXF1YWxzMyhhLCBiLCBjKSB7XG4gICAgY29uc3QgcmVzdWx0ID1cbiAgICAgIGEuZ2V0VmFsdWUoKSA9PT0gYi5nZXRWYWx1ZSgpICYmXG4gICAgICBhLmdldFZhbHVlKCkgPT09IGMuZ2V0VmFsdWUoKSAmJlxuICAgICAgYS5nZXRWYWx1ZSgpICE9PSAnLic7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIENoZWNrIGlzIGEgY2VsbCBpcyBhdmFpbGFibGUgZm9yIHBsYXlpbmdcbiAgY29uc3QgaXNBdmFpbGFibGUgPSAocm93LCBjb2wpID0+IHtcbiAgICBpZiAoYm9hcmRbcm93XVtjb2xdLmdldFZhbHVlKCkgPT09ICcuJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIGNlbGxzIHRoYXQgYXJlIGF2YWlhbGJsZVxuICBjb25zdCBhdmFpbGFibGVDZWxscyA9ICgpID0+IHtcbiAgICBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVzZXRCb2FyZCxcbiAgICBnZXRCb2FyZCxcbiAgICBwcmludEJvYXJkLFxuICAgIHBsYWNlTWFya2VyLFxuICAgIGNoZWNrV2lubmVyLFxuICAgIGlzQXZhaWxhYmxlLFxuICAgIGF2YWlsYWJsZUNlbGxzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVCb2FyZCc7XG5pbXBvcnQgbWFrZVJhbmRvbVBsYXkgZnJvbSAnLi9yYW1kb21QbGF5JztcbmltcG9ydCBtYWtlTWluaW1heFBsYXkgZnJvbSAnLi9taW5pTWF4JztcblxuLy8gR2FtZSBjb250cm9sbGVyIHdoZXJlIHRoZSBnYW1lIHBsYXlpbmcgbG9naWMgaXNcbmNvbnN0IEdhbWVDb250cm9sbGVyID0gKHBsYXllcnMsIHN0YXJ0UGxheWVySW5kZXgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgYm9hcmQucHJpbnRCb2FyZCgpO1xuXG4gIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzW3N0YXJ0UGxheWVySW5kZXhdO1xuICBjb25zb2xlLmxvZyhhY3RpdmVQbGF5ZXIpO1xuXG4gIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGFjdGl2ZVBsYXllcjtcblxuICBjb25zdCBzd2l0Y2hQbGF5ZXIgPSAoKSA9PiB7XG4gICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07XG4gIH07XG5cbiAgY29uc3QgbWFrZUNvbXB1dGVyUGxheSA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIC8vIENvbXB1dGVyIHBsYXllciBwbGF5c1xuICAgIGlmIChhY3RpdmVQbGF5ZXIudHlwZSA9PT0gJ3JhbmRvbScpIHtcbiAgICAgIHJlc3VsdCA9IG1ha2VSYW5kb21QbGF5KGJvYXJkLCBhY3RpdmVQbGF5ZXIubWFya2VyKTtcbiAgICAgIGJvYXJkLnByaW50Qm9hcmQoKTtcbiAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlUGxheWVyLnR5cGUgPT09ICdhaScpIHtcbiAgICAgIHJlc3VsdCA9IG1ha2VNaW5pbWF4UGxheShib2FyZCwgYWN0aXZlUGxheWVyLm1hcmtlcik7XG4gICAgICBib2FyZC5wcmludEJvYXJkKCk7XG4gICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgc3dpdGNoUGxheWVyKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIE1ha2UgYSBwbGF5IGluIGEgY2hvc2VuIGNlbGxcbiAgLy8gSWYgdGhlcmUgaXMgYSBjb21wdXRlciBwbGF5ZXIsIHRoZSBjb21wdXRlciBtYWtlcyBhIHBsYXkgdG9vXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChyb3csIGNvbCkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICAvLyBQbGF5IHRoZSBodW1hbiBwbGF5ZXIgcGxheVxuICAgIGNvbnNvbGUubG9nKFwiaHVtYW4gcGxheWVyIHBsYXlzXCIpO1xuICAgIGJvYXJkLnBsYWNlTWFya2VyKHJvdywgY29sLCBhY3RpdmVQbGF5ZXIubWFya2VyKTtcbiAgICBib2FyZC5wcmludEJvYXJkKCk7XG5cbiAgICAvLyBDaGVjayBmb3IgZW5kIG9mIGdhbWUgYW5kIGdhbWUgcmVzdWx0XG4gICAgcmVzdWx0ID0gYm9hcmQuY2hlY2tXaW5uZXIoKTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuXG4gICAgc3dpdGNoUGxheWVyKCk7XG5cbiAgICAvLyBDb21wdXRlciBwbGF5ZXIgcGxheXNcbiAgICBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIHBsYXlzXCIpO1xuICAgIHJlc3VsdCA9IG1ha2VDb21wdXRlclBsYXkoKTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIElmIGNvbXB1dGVyIHBsYXllciBpcyBwbGF5ZXIgMSwgbWFrZSBhIGNvbXB1dGVyIHBsYXkgZmlyc3RcbiAgaWYgKGFjdGl2ZVBsYXllci50eXBlICE9PSAnaHVtYW4nKSB7XG4gICAgY29uc29sZS5sb2coXCJDb21wdXRlciAxc3QgcGxheXNcIik7XG4gICAgbWFrZUNvbXB1dGVyUGxheSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGxheVJvdW5kLCBnZXRCb2FyZDogYm9hcmQuZ2V0Qm9hcmQsICByZXNldEJvYXJkOiBib2FyZC5yZXNldEJvYXJkLCBnZXRBY3RpdmVQbGF5ZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiLy8gR2xvYmFsIGNvbnN0YW50c1xuY29uc3QgQm9hcmRTaXplID0gMztcblxuZXhwb3J0IHsgQm9hcmRTaXplIH07XG4iLCJpbXBvcnQgeyBCb2FyZFNpemUgfSBmcm9tICcuL2dsb2JhbENvbnN0YW50JztcblxuLy8gQSBjb21wdXRlciBwbGF5ZXIgdGhhdCBwbGF5cyB1c2luZyB0aGUgTWluaW1heCBhbGdvcml0aG1cbmNvbnN0IG1ha2VNaW5pbWF4UGxheSA9IChib2FyZCwgbWFya2VyKSA9PiB7XG4gIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gIGxldCBiZXN0Um93LCBiZXN0Q29sO1xuICBsZXQgcmVzdWx0O1xuICBjb25zdCBvcHBvc2l0ZU1hcmtlciA9IG1hcmtlciA9PT0gJ08nID8gJ1gnIDogJ08nO1xuXG4gIC8vIEdvIHRocm91Z2ggYWxsIGF2YWlhbGJsZSBjZWxscyB0byBmaW5kIHRoZSBiZXN0IHBvc2libGUgbW92ZVxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBCb2FyZFNpemU7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgQm9hcmRTaXplOyBjb2wrKykge1xuICAgICAgaWYgKGJvYXJkLmlzQXZhaWxhYmxlKHJvdywgY29sKSkge1xuICAgICAgICAvLyBUcnkgdG8gcGxheSBhbiBhdmFpbGFibGUgY2VsbFxuICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihyb3csIGNvbCwgbWFya2VyKTtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZ2V0IHRoZSBzY29yZSBvZiB0aGlzIHBsYXlcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBtaW5pbWF4KGJvYXJkLCBmYWxzZSk7XG4gICAgICAgIC8vIFJlY29yZCBpZiBpdCBpcyBhIGJldHRlciBtb3ZlXG4gICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICAgIGJlc3RSb3cgPSByb3c7XG4gICAgICAgICAgYmVzdENvbCA9IGNvbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB0aGUgY2VsbFxuICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihyb3csIGNvbCwgJy4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQbGF5IHRoZSBiZXN0IG1vdmUgZm91bmRcbiAgYm9hcmQucGxhY2VNYXJrZXIoYmVzdFJvdywgYmVzdENvbCwgbWFya2VyKTtcblxuICAvLyBJZiB0aGUgZ2FtZXMgd2l0aCBhIHdpbm5lciBvZiB0aWUsIHJldHVybiByZXN1bHRcbiAgcmVzdWx0ID0gYm9hcmQuY2hlY2tXaW5uZXIoKTtcbiAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyBSZWN1cnNpdmUgbWluaW1heCBhbGdvcml0aG1cbiAgZnVuY3Rpb24gbWluaW1heChib2FyZCwgaXNNYXhpbWl6aW5nKSB7XG4gICAgLy8gVGVybWluYXRpbmcgY29uZGl0aW9uIGZvciB0aGUgcmVjdXJzaXZlIGFsZ29yaXRobVxuICAgIGNvbnN0IHJlc3VsdCA9IGJvYXJkLmNoZWNrV2lubmVyKCk7XG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHJlc3VsdCA9PT0gbWFya2VyKSB7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICAgIH0gXG4gICAgICBpZiAocmVzdWx0ID09PSAndGllJykge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gXG4gICAgICBpZiAocmVzdWx0ID09PSBvcHBvc2l0ZU1hcmtlcikge1xuICAgICAgICByZXR1cm4gLTEwO1xuICAgICAgfSBcbiAgICB9XG5cbiAgICAvLyBBbHRlcm5hdGUgYmV0d2VlbiBNaW4gYW5kIE1heCBwbGF5ZXJzXG4gICAgaWYgKGlzTWF4aW1pemluZykge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQm9hcmRTaXplOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBCb2FyZFNpemU7IGorKykge1xuICAgICAgICAgIGlmIChib2FyZC5pc0F2YWlsYWJsZShpLCBqKSkge1xuICAgICAgICAgICAgYm9hcmQucGxhY2VNYXJrZXIoaSwgaiwgbWFya2VyKTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5tYXgoc2NvcmUsIGJlc3RTY29yZSk7XG4gICAgICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihpLCBqLCAnLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJlc3RTY29yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCb2FyZFNpemU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEJvYXJkU2l6ZTsgaisrKSB7XG4gICAgICAgICAgaWYgKGJvYXJkLmlzQXZhaWxhYmxlKGksIGopKSB7XG4gICAgICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihpLCBqLCBvcHBvc2l0ZU1hcmtlcik7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIHRydWUpO1xuICAgICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5taW4oc2NvcmUsIGJlc3RTY29yZSk7XG4gICAgICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihpLCBqLCAnLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJlc3RTY29yZTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNaW5pbWF4UGxheTtcbiIsImNvbnN0IFBsYXllcnMgPSAoKSA9PiB7XG4gIGxldCBwbGF5ZXJzID0gW107XG5cbiAgY29uc3Qgc2V0UGxheWVycyA9ICh2YWx1ZXMpID0+IHtcbiAgICBwbGF5ZXJzID0gdmFsdWVzO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiBwbGF5ZXJzO1xuXG4gIHJldHVybiB7c2V0UGxheWVycywgZ2V0UGxheWVyc307XG59O1xuXG5leHBvcnQgeyBQbGF5ZXJzIH07XG4iLCIvLyBBIGNvbXB1dGVyIHBsYXllciB0aGF0IHBsYXlzIGF0IHJhbmRvbSBjZWxsc1xuY29uc3QgbWFrZVJhbmRvbVBsYXkgPSAoYm9hcmQsIG1hcmtlcikgPT4ge1xuICBsZXQgcm93LCBjb2w7XG4gIGxldCByZXN1bHQ7IC8vIFJlc3VsdCBmcm9tIGNoZWNrV2lubmVyLCBjYW4gYmUgJ1gnLCAnTycsICdUaWUnLCBvciBudWxsXG5cbiAgLy8gVHJ5IHVudGlsIGNvbXB1dGVyIGZpbmRzIGEgdmFsaWQgY2VsbCB0byBwbGF5XG4gIGRvIHtcbiAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgICBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgfSB3aGlsZSAoIWJvYXJkLmlzQXZhaWxhYmxlKHJvdywgY29sKSk7XG5cbiAgLy8gUGxheSBhIHZhbGlkIG1vdmVcbiAgYm9hcmQucGxhY2VNYXJrZXIocm93LCBjb2wsIG1hcmtlcik7XG4gIHJlc3VsdCA9IGJvYXJkLmNoZWNrV2lubmVyKCk7XG5cbiAgLy8gR2V0dGluZyBhIHZhbGlkIHJlc3VsdCBtZWFucyBhIGdhbWUgaXMgZW5kZWQgd2l0aCBhIHdpbm5lciBvciBhIHRpZVxuICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlUmFuZG9tUGxheTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2dhbWVDb250cm9sbGVyJztcbmltcG9ydCBkZWxheSBmcm9tICcuL2RlbGF5JztcblxuLy8gVGhlIFNjcmVlbkNvbnRyb2xsZXIgdGhhdCBwcmVzZW50cyBhIHZpZXcgYW5kIGdldHMgdXNlciByZXF1ZXN0c1xuY29uc3QgU2NyZWVuQ29udHJvbGxlciA9IGFzeW5jIChudW1HYW1lcywgcGxheWVycykgPT4ge1xuICBsZXQgZ2FtZVBsYXllZCA9IDA7XG4gIGxldCB3aW5uZXJJbmRleCA9IDE7XG4gIGxldCBzY29yZSA9IFswLCAwLCAwXTsgLy8gU2NvcmVzIGZvciBwbGF5ZXIgMSwgcGxheWVyIDIsIHRpZVxuXG4gIGNvbnN0IHBsYXlHYW1lID0gKHBsYXllcnMsIHN0YXJ0UGxheWVySW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICfwn5qAIH4gZmlsZTogc2NyZWVuQ29udHJvbGxlci5qczoxMSB+IHBsYXlHYW1lIH4gc3RhcnRQbGF5ZXJJbmRleDonLFxuICAgICAgc3RhcnRQbGF5ZXJJbmRleFxuICAgICk7XG4gICAgbGV0IGdhbWUgPSBHYW1lQ29udHJvbGxlcihwbGF5ZXJzLCBzdGFydFBsYXllckluZGV4KTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgYm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuXG4gICAgICAvLyBSZWRyYXdzIHRoZSBnYW1lIGJvYXJkIGluIHRoZSB3ZWIgcGFnZVxuICAgICAgY29uc3QgdXBkYXRlU2NyZWVuID0gKCkgPT4ge1xuICAgICAgICBib2FyZEVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBib2FyZCA9IGdhbWUuZ2V0Qm9hcmQoKTtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmQubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgLy8gQ3JlYXRlcyBlYWNoIGNlbGwgZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgY2VsbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbEVsLnRleHRDb250ZW50ID0gYm9hcmRbcm93XVtjb2xdLmdldFZhbHVlKCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBkYXRhIGF0dHJpYnV0ZXMgdG8gdGhlIGNlbGwgZWxlbWVudHMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgYnkgZXZlbnQgaGFuZGxlclxuICAgICAgICAgICAgY2VsbEVsLmRhdGFzZXQucm93ID0gcm93O1xuICAgICAgICAgICAgY2VsbEVsLmRhdGFzZXQuY29sID0gY29sO1xuXG4gICAgICAgICAgICAvLyBTdHlsZSBhbmQgZGlzYWJsZSBwbGF5ZWQgY2VsbHNcbiAgICAgICAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0uZ2V0VmFsdWUoKSA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgIGNlbGxFbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItMScpO1xuICAgICAgICAgICAgICBjZWxsRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXS5nZXRWYWx1ZSgpID09PSAnTycpIHtcbiAgICAgICAgICAgICAgY2VsbEVsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci0yJyk7XG4gICAgICAgICAgICAgIGNlbGxFbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZEVsLmFwcGVuZENoaWxkKGNlbGxFbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBIYW5kbGVzIGNsaWNrcyBvbiB0aGUgYm9hcmRcbiAgICAgIC8vIE5lZWRzIHRvIGJlIGF5bmNzIHRvIHVzZSB0aGUgZGVsYXkgZnVuY3Rpb24gdG8gZGVsYXkgdGhlIGFsZXJ0c1xuICAgICAgYXN5bmMgZnVuY3Rpb24gY2xpY2tIYW5kbGVyQm9hcmQoZSkge1xuICAgICAgICAvLyBFcnJvciBoYW5kbGluZyBmb3IgaXMgdGhlIGdhbWUgcHJldmlvdXNseSBjcmVhdGVkIGlzIGFscmVhZHkgaGFuZGxlZC5cbiAgICAgICAgaWYgKGdhbWUgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICBjb25zdCByb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvdztcbiAgICAgICAgY29uc3QgY29sID0gZS50YXJnZXQuZGF0YXNldC5jb2w7XG4gICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgLy8gSWdub3JlIGludmFsaWQgdXNlciBpbnB1dFxuICAgICAgICAvLyBXaGVuIGEgY2VsbCBoYXMgYWxyZWFkeSBiZWVuIGNsaWNrZWQsIGl0J3MgcG9pbnRlciBldmVudCBpcyBkaXNhYmxlZFxuICAgICAgICAvLyBDbGlrZWQgb24gaXQgcmVzdWx0cyBpbiByb3cgYW5kIGNvbCBiZWluZyB1bmRlZmluZWRcbiAgICAgICAgaWYgKCFyb3cgfHwgIWNvbCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIFBsYXkgYSB2YWxpZCBtb3ZlXG4gICAgICAgIHJlc3VsdCA9IGdhbWUucGxheVJvdW5kKHJvdywgY29sKTtcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBnYW1lLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSAndGllJykge1xuICAgICAgICAgICAgc2NvcmVbMl0rKztcbiAgICAgICAgICAgIC8vIFRlcm1pbmF0ZSB0aGlzIGdhbWUuICBUaGlzIGNhdXNlcyBzb21lIGlzc3VlcyB3aXRoIFByb21pc2VcbiAgICAgICAgICAgIC8vIEVycm9yIG1lc3NhZ2UgaW4gY29uc29sZS4gQnV0IHRoZSBnYW1lIHJ1bnMgZmluZS5cbiAgICAgICAgICAgIGdhbWUgPSBudWxsO1xuICAgICAgICAgICAgcmVzb2x2ZSgyKTsgIC8vIEluZGV4IG9mIFRpZSBpcyBTY29yZXMgaXMgMlxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5uZXJJbmRleCA9IHBsYXllcnMuaW5kZXhPZihnYW1lLmdldEFjdGl2ZVBsYXllcigpKTtcbiAgICAgICAgICAgIHNjb3JlW3dpbm5lckluZGV4XSA9IHNjb3JlW3dpbm5lckluZGV4XSArIDE7XG4gICAgICAgICAgICAvLyBUZXJtaW5hdGUgdGhpcyBnYW1lLiAgVGhpcyBjYXVzZXMgc29tZSBpc3N1ZXMgd2l0aCBQcm9taXNlXG4gICAgICAgICAgICAvLyBFcnJvciBtZXNzYWdlIGluIGNvbnNvbGUuIEJ1dCB0aGUgZ2FtZSBydW5zIGZpbmUuXG4gICAgICAgICAgICBnYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUod2lubmVySW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlckJvYXJkKTtcblxuICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcGxheU11bHRpcGxlR2FtZXMgPSAobnVtR2FtZXMsIHBsYXllcnMpID0+IHtcbiAgICBsZXQgZ2FtZUluZGV4ID0gMDtcbiAgICBsZXQgc2NvcmVzID0gWzAsIDAsIDBdO1xuXG4gICAgY29uc3QgcGxheU5leHRHYW1lID0gKHN0YXJ0UGxheWVySW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBwbGF5R2FtZShwbGF5ZXJzLCBzdGFydFBsYXllckluZGV4KS50aGVuKGFzeW5jICh3aW5uZXJJbmRleCkgPT4ge1xuICAgICAgICAvLyB1cGRhdGUgdGhlIHNjb3Jlc1xuICAgICAgICBzY29yZXNbd2lubmVySW5kZXhdICs9IDE7XG5cbiAgICAgICAgLy8gZGlzcGxheSByZXN1bHQgb2YgZWFjaCBnYW1lXG4gICAgICAgIGF3YWl0IGRlbGF5KDEwMCk7XG4gICAgICAgIGlmICh3aW5uZXJJbmRleCA8IDIpIHtcbiAgICAgICAgICBhbGVydChgJHtwbGF5ZXJzW3dpbm5lckluZGV4XS50eXBlfSB3aW5zISBgICsgc2NvcmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydCgnVGllIScgKyAnICcgKyBzY29yZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgYWxsIGdhbWVzIGhhdmUgYmVlbiBwbGF5ZWRcbiAgICAgICAgaWYgKGdhbWVJbmRleCA+PSBudW1HYW1lcyAtIDEpIHtcbiAgICAgICAgICBhbGVydCgnR2FtZSBPdmVyISAnICsgc2NvcmVzKTtcbiAgICAgICAgICByZXR1cm4gc2NvcmVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBkZXRlcm1pbmUgd2hvIGdvZXMgZmlyc3QgbmV4dCBhbmQgcGxheSB0aGUgbmV4dCBnYW1lXG4gICAgICAgIGdhbWVJbmRleCArPSAxO1xuICAgICAgICBjb25zdCBuZXh0U3RhcnRQbGF5ZXJJbmRleCA9IHdpbm5lckluZGV4ID09PSAxID8gMCA6IDE7XG4gICAgICAgIHJldHVybiBwbGF5TmV4dEdhbWUobmV4dFN0YXJ0UGxheWVySW5kZXgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHN0YXJ0IHRoZSBmaXJzdCBnYW1lXG4gICAgcmV0dXJuIHBsYXlOZXh0R2FtZSgwKTtcbiAgfTtcblxuICBwbGF5TXVsdGlwbGVHYW1lcyhudW1HYW1lcywgcGxheWVycyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JlZW5Db250cm9sbGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUGxheWVycyB9IGZyb20gJy4vcGxheWVycyc7XG5pbXBvcnQgU2NyZWVuQ29udHJvbGxlciBmcm9tICcuL3NjcmVlbkNvbnRyb2xsZXInO1xuXG5jb25zdCBwbGF5ZXJzID0gUGxheWVycygpO1xuXG4vLyBUT0RPOiBBZGQgYSBmb3JtIGZvciBnYW1lIHNldCB1cFxuLy8gUGxheWVyIGF0dHJpYnV0ZXNcbi8vIE51bWJlciBvZiBnYW1lcyB0byBwbGF5XG5cbnBsYXllcnMuc2V0UGxheWVycyhbXG4gIHsgbmFtZTogJ3BsYXllck9uZU5hbWUnLCBtYXJrZXI6ICdYJywgdHlwZTogJ2FpJyB9LFxuICB7IG5hbWU6ICdwbGF5ZXJUd29OYW1lJywgbWFya2VyOiAnTycsIHR5cGU6ICdodW1hbicgfSxcbl0pO1xuXG4vLyBQcm9tcHQgdXNlciBmb3IgbnVtYmVyIG9mIGdhbWVzIHRvIHBsYXlcbi8vIGNvbnN0IG51bUdhbWVzID0gcGFyc2VJbnQocHJvbXB0KCdIb3cgbWFueSBnYW1lcyBkbyB5b3Ugd2FudCB0byBwbGF5PycpKTtcblxuLy8gQ3JlYXRlIFNjcmVlbkNvbnRyb2xsZXIgaW5zdGFuY2UgYW5kIHBsYXkgZ2FtZVxuU2NyZWVuQ29udHJvbGxlcigzLCBwbGF5ZXJzLmdldFBsYXllcnMoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=