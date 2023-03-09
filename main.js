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
      console.log(
        '🚀 ~ file: gameController.js:25 ~ makeComputerPlay ~ result:',
        result
      );
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
    board.placeMarker(row, col, activePlayer.marker);
    board.printBoard();

    // Check for end of game and game result
    result = board.checkWinner();
    if (result) return result;

    switchPlayer();

    // Computer player plays
    result = makeComputerPlay();
    if (result) return result;
  };

  // If computer player is player 1, make a computer play first
  if (activePlayer.type !== 'human') {
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

  const playGame = (startPlayerIndex) => {
    console.log("🚀 ~ file: screenController.js:11 ~ playGame ~ startPlayerIndex:", startPlayerIndex)
    const game = (0,_gameController__WEBPACK_IMPORTED_MODULE_1__["default"])(players, startPlayerIndex);

    return new Promise((resolve, reject) => {
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
            resolve('Tie!');
          } else {
            winnerIndex = players.indexOf(game.getActivePlayer());
            console.log(
              '🚀 ~ file: screenController.js:67 ~ clickHandlerBoard ~ winnerIndex:',
              winnerIndex
            );
            resolve(`${game.getActivePlayer().type} wins!`);
          }
        }
      }
      boardEl.addEventListener('click', clickHandlerBoard);

      updateScreen();
    });
  };

  let startPlayerIndex = 0;
  while (gamePlayed < numGames) {
    await playGame(startPlayerIndex).then(async (message) => {
      gamePlayed++;
      // Make the loser the start player of the new game
      startPlayerIndex = winnerIndex === 1 ? 0 : 1;
      console.log("🚀 ~ file: screenController.js:87 ~ awaitplayGame ~ startPlayerIndex:", startPlayerIndex)
      console.log(
        '🚀 ~ file: screenController.js:98 ~ ScreenController ~ gamePlayed:',
        gamePlayed
      );
      console.log(
        '🚀 ~ file: screenController.js:98 ~ endPlay.then ~ message:',
        message
      );
      await (0,_delay__WEBPACK_IMPORTED_MODULE_2__["default"])(500);
      alert(message);
      // TODO: add logic so the lose go first next round
    });
  }
  alert('Game Over!');
  // TODO: disable all cells here
  // TODO: end game screen to summarize scores, allow user to play again
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvY2VsbC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL2RlbGF5LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9nbG9iYWxDb25zdGFudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL21pbmlNYXguanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvLi9zcmMvcmFtZG9tUGxheS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzLy4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RpYy10YWMtdG9lLTIwMjMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS0yMDIzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UtMjAyMy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxuICBiYWNrZ3JvdW5kOiBibHVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGxheWVyLTEge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5wbGF5ZXItMiB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbGF5ZXItMSB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnBsYXllci0yIHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIENlbGwgY2xhc3Ncbi8vIEVhY2ggcGxheWFibGUgbG9jYXRpb24gb24gdGhlIGJvYXJkIGlzIGEgY2VsbCBvYmplY3RcbmNvbnN0IENlbGwgPSAoKSA9PiB7XG4gIGxldCB2YWx1ZSA9ICcuJztcblxuICBjb25zdCBzZXRWYWx1ZSA9IChtYXJrZXIpID0+IHtcbiAgICB2YWx1ZSA9IG1hcmtlcjtcbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+IHZhbHVlO1xuXG4gIHJldHVybiB7IHNldFZhbHVlLCBnZXRWYWx1ZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDsiLCIvLyBHbG9iYWwgZnVuY3Rpb25cbmZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsYXk7XG4iLCJpbXBvcnQgeyBCb2FyZFNpemUgfSBmcm9tICcuL2dsb2JhbENvbnN0YW50JztcbmltcG9ydCBDZWxsIGZyb20gJy4vY2VsbCc7XG5cbi8vIEdhbWUgYm9hcmQgY2xhc3NcbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgbGV0IGJvYXJkID0gW107XG5cbiAgLy8gQ3JlYXQgYSAzeDMgYm9hcmQsIGVhY2ggbG9jYXRpb24gaXMgYSBDZWxsIG9iamVjdFxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgQm9hcmRTaXplOyByb3crKykge1xuICAgICAgYm9hcmRbcm93XSA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgQm9hcmRTaXplOyBjb2wrKykge1xuICAgICAgICBib2FyZFtyb3ddLnB1c2goQ2VsbCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJlc2V0Qm9hcmQoKTtcblxuICAvLyBHZXR0ZXIgZnVuY3Rpb24gZm9yIHRoZSBib2FyZFxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gcHJpbnQgdGhlIGJvYXJkIHRvIHRoZSBjb25zb2xlXG4gIGNvbnN0IHByaW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gYm9hcmRcbiAgICAgIC5tYXAoKHJvdykgPT4gcm93Lm1hcCgoY2VsbCkgPT4gY2VsbC5nZXRWYWx1ZSgpKS5qb2luKCcgJykpXG4gICAgICAuam9pbignXFxuJyk7XG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgfTtcblxuICAvLyBQbGFjZSB0aGUgbWFya2VyIG9mIHRoZSBhY3RpdmUgcGxheWVyIGluIGRlc2lyZWQgY2VsbFxuICBjb25zdCBwbGFjZU1hcmtlciA9IChyb3csIGNvbCwgcGxheWVyKSA9PiB7XG4gICAgYm9hcmRbcm93XVtjb2xdLnNldFZhbHVlKHBsYXllcik7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2hlY2tXaW5uZXIoKSB7XG4gICAgLy8gQ2hlY2sgcm93c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQm9hcmRTaXplOyBpKyspIHtcbiAgICAgIGlmIChlcXVhbHMzKGJvYXJkW2ldWzBdLCBib2FyZFtpXVsxXSwgYm9hcmRbaV1bMl0pKSB7XG4gICAgICAgIHJldHVybiBib2FyZFtpXVswXS5nZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBDaGVjayBjb2x1bW5zXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCb2FyZFNpemU7IGkrKykge1xuICAgICAgaWYgKGVxdWFsczMoYm9hcmRbMF1baV0sIGJvYXJkWzFdW2ldLCBib2FyZFsyXVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkWzBdW2ldLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIENoZWNrIGRpYWduYWxcbiAgICBpZiAoZXF1YWxzMyhib2FyZFswXVswXSwgYm9hcmRbMV1bMV0sIGJvYXJkWzJdWzJdKSkge1xuICAgICAgcmV0dXJuIGJvYXJkWzFdWzFdLmdldFZhbHVlKCk7XG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBvdGhlciBkaWFnbmFsXG4gICAgaWYgKGVxdWFsczMoYm9hcmRbMF1bMl0sIGJvYXJkWzFdWzFdLCBib2FyZFsyXVswXSkpIHtcbiAgICAgIHJldHVybiBib2FyZFsxXVsxXS5nZXRWYWx1ZSgpO1xuICAgIH1cbiAgICAvLyBDaGVjayBmb3IgdGllXG4gICAgbGV0IG9jY3VwaWVkU3F1cmVzID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEJvYXJkU2l6ZTsgaisrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtqXS5nZXRWYWx1ZSgpICE9PSAnLicpIG9jY3VwaWVkU3F1cmVzKys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvY2N1cGllZFNxdXJlcyA9PT0gOSkgcmV0dXJuICd0aWUnOyAvLyBBbGwgc3F1YXJlcyBhcmUgdGFrZW4gdXBcbiAgICByZXR1cm4gbnVsbDsgLy8gTm90IGEgZ2FtZSB0ZXJtaW5hdGluZyBwbGF5XG4gIH1cblxuICAvLyBDb21wYXJlIGlmIDMgY2VsbHMgaGF2ZSBlcXVhbCB2YWx1ZXMgKG1hcmtlcnMpXG4gIGZ1bmN0aW9uIGVxdWFsczMoYSwgYiwgYykge1xuICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICBhLmdldFZhbHVlKCkgPT09IGIuZ2V0VmFsdWUoKSAmJlxuICAgICAgYS5nZXRWYWx1ZSgpID09PSBjLmdldFZhbHVlKCkgJiZcbiAgICAgIGEuZ2V0VmFsdWUoKSAhPT0gJy4nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBDaGVjayBpcyBhIGNlbGwgaXMgYXZhaWxhYmxlIGZvciBwbGF5aW5nXG4gIGNvbnN0IGlzQXZhaWxhYmxlID0gKHJvdywgY29sKSA9PiB7XG4gICAgaWYgKGJvYXJkW3Jvd11bY29sXS5nZXRWYWx1ZSgpID09PSAnLicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gQ291bnQgdGhlIG51bWJlciBvZiBjZWxscyB0aGF0IGFyZSBhdmFpYWxibGVcbiAgY29uc3QgYXZhaWxhYmxlQ2VsbHMgPSAoKSA9PiB7XG4gICAgY291bnQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICBpZiAoaXNBdmFpbGFibGUpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlc2V0Qm9hcmQsXG4gICAgZ2V0Qm9hcmQsXG4gICAgcHJpbnRCb2FyZCxcbiAgICBwbGFjZU1hcmtlcixcbiAgICBjaGVja1dpbm5lcixcbiAgICBpc0F2YWlsYWJsZSxcbiAgICBhdmFpbGFibGVDZWxscyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IG1ha2VSYW5kb21QbGF5IGZyb20gJy4vcmFtZG9tUGxheSc7XG5pbXBvcnQgbWFrZU1pbmltYXhQbGF5IGZyb20gJy4vbWluaU1heCc7XG5cbi8vIEdhbWUgY29udHJvbGxlciB3aGVyZSB0aGUgZ2FtZSBwbGF5aW5nIGxvZ2ljIGlzXG5jb25zdCBHYW1lQ29udHJvbGxlciA9IChwbGF5ZXJzLCBzdGFydFBsYXllckluZGV4KSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gR2FtZUJvYXJkKCk7XG4gIGJvYXJkLnByaW50Qm9hcmQoKTtcblxuICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyc1tzdGFydFBsYXllckluZGV4XTtcbiAgY29uc29sZS5sb2coYWN0aXZlUGxheWVyKTtcblxuICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXI7XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyID0gKCkgPT4ge1xuICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VDb21wdXRlclBsYXkgPSAoKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICAvLyBDb21wdXRlciBwbGF5ZXIgcGxheXNcbiAgICBpZiAoYWN0aXZlUGxheWVyLnR5cGUgPT09ICdyYW5kb20nKSB7XG4gICAgICByZXN1bHQgPSBtYWtlUmFuZG9tUGxheShib2FyZCwgYWN0aXZlUGxheWVyLm1hcmtlcik7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ/CfmoAgfiBmaWxlOiBnYW1lQ29udHJvbGxlci5qczoyNSB+IG1ha2VDb21wdXRlclBsYXkgfiByZXN1bHQ6JyxcbiAgICAgICAgcmVzdWx0XG4gICAgICApO1xuICAgICAgYm9hcmQucHJpbnRCb2FyZCgpO1xuICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIHN3aXRjaFBsYXllcigpO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmVQbGF5ZXIudHlwZSA9PT0gJ2FpJykge1xuICAgICAgcmVzdWx0ID0gbWFrZU1pbmltYXhQbGF5KGJvYXJkLCBhY3RpdmVQbGF5ZXIubWFya2VyKTtcbiAgICAgIGJvYXJkLnByaW50Qm9hcmQoKTtcbiAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gTWFrZSBhIHBsYXkgaW4gYSBjaG9zZW4gY2VsbFxuICAvLyBJZiB0aGVyZSBpcyBhIGNvbXB1dGVyIHBsYXllciwgdGhlIGNvbXB1dGVyIG1ha2VzIGEgcGxheSB0b29cbiAgY29uc3QgcGxheVJvdW5kID0gKHJvdywgY29sKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIC8vIFBsYXkgdGhlIGh1bWFuIHBsYXllciBwbGF5XG4gICAgYm9hcmQucGxhY2VNYXJrZXIocm93LCBjb2wsIGFjdGl2ZVBsYXllci5tYXJrZXIpO1xuICAgIGJvYXJkLnByaW50Qm9hcmQoKTtcblxuICAgIC8vIENoZWNrIGZvciBlbmQgb2YgZ2FtZSBhbmQgZ2FtZSByZXN1bHRcbiAgICByZXN1bHQgPSBib2FyZC5jaGVja1dpbm5lcigpO1xuICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG5cbiAgICBzd2l0Y2hQbGF5ZXIoKTtcblxuICAgIC8vIENvbXB1dGVyIHBsYXllciBwbGF5c1xuICAgIHJlc3VsdCA9IG1ha2VDb21wdXRlclBsYXkoKTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIElmIGNvbXB1dGVyIHBsYXllciBpcyBwbGF5ZXIgMSwgbWFrZSBhIGNvbXB1dGVyIHBsYXkgZmlyc3RcbiAgaWYgKGFjdGl2ZVBsYXllci50eXBlICE9PSAnaHVtYW4nKSB7XG4gICAgbWFrZUNvbXB1dGVyUGxheSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGxheVJvdW5kLCBnZXRCb2FyZDogYm9hcmQuZ2V0Qm9hcmQsICByZXNldEJvYXJkOiBib2FyZC5yZXNldEJvYXJkLCBnZXRBY3RpdmVQbGF5ZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiLy8gR2xvYmFsIGNvbnN0YW50c1xuY29uc3QgQm9hcmRTaXplID0gMztcblxuZXhwb3J0IHsgQm9hcmRTaXplIH07XG4iLCJpbXBvcnQgeyBCb2FyZFNpemUgfSBmcm9tICcuL2dsb2JhbENvbnN0YW50JztcblxuLy8gQSBjb21wdXRlciBwbGF5ZXIgdGhhdCBwbGF5cyB1c2luZyB0aGUgTWluaW1heCBhbGdvcml0aG1cbmNvbnN0IG1ha2VNaW5pbWF4UGxheSA9IChib2FyZCwgbWFya2VyKSA9PiB7XG4gIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gIGxldCBiZXN0Um93LCBiZXN0Q29sO1xuICBsZXQgcmVzdWx0O1xuICBjb25zdCBvcHBvc2l0ZU1hcmtlciA9IG1hcmtlciA9PT0gJ08nID8gJ1gnIDogJ08nO1xuXG4gIC8vIEdvIHRocm91Z2ggYWxsIGF2YWlhbGJsZSBjZWxscyB0byBmaW5kIHRoZSBiZXN0IHBvc2libGUgbW92ZVxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBCb2FyZFNpemU7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgQm9hcmRTaXplOyBjb2wrKykge1xuICAgICAgaWYgKGJvYXJkLmlzQXZhaWxhYmxlKHJvdywgY29sKSkge1xuICAgICAgICAvLyBUcnkgdG8gcGxheSBhbiBhdmFpbGFibGUgY2VsbFxuICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihyb3csIGNvbCwgbWFya2VyKTtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZ2V0IHRoZSBzY29yZSBvZiB0aGlzIHBsYXlcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBtaW5pbWF4KGJvYXJkLCBmYWxzZSk7XG4gICAgICAgIC8vIFJlY29yZCBpZiBpdCBpcyBhIGJldHRlciBtb3ZlXG4gICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICAgIGJlc3RSb3cgPSByb3c7XG4gICAgICAgICAgYmVzdENvbCA9IGNvbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB0aGUgY2VsbFxuICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihyb3csIGNvbCwgJy4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQbGF5IHRoZSBiZXN0IG1vdmUgZm91bmRcbiAgYm9hcmQucGxhY2VNYXJrZXIoYmVzdFJvdywgYmVzdENvbCwgbWFya2VyKTtcblxuICAvLyBJZiB0aGUgZ2FtZXMgd2l0aCBhIHdpbm5lciBvZiB0aWUsIHJldHVybiByZXN1bHRcbiAgcmVzdWx0ID0gYm9hcmQuY2hlY2tXaW5uZXIoKTtcbiAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyBSZWN1cnNpdmUgbWluaW1heCBhbGdvcml0aG1cbiAgZnVuY3Rpb24gbWluaW1heChib2FyZCwgaXNNYXhpbWl6aW5nKSB7XG4gICAgLy8gVGVybWluYXRpbmcgY29uZGl0aW9uIGZvciB0aGUgcmVjdXJzaXZlIGFsZ29yaXRobVxuICAgIGNvbnN0IHJlc3VsdCA9IGJvYXJkLmNoZWNrV2lubmVyKCk7XG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHJlc3VsdCA9PT0gbWFya2VyKSB7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICAgIH0gXG4gICAgICBpZiAocmVzdWx0ID09PSAndGllJykge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gXG4gICAgICBpZiAocmVzdWx0ID09PSBvcHBvc2l0ZU1hcmtlcikge1xuICAgICAgICByZXR1cm4gLTEwO1xuICAgICAgfSBcbiAgICB9XG5cbiAgICAvLyBBbHRlcm5hdGUgYmV0d2VlbiBNaW4gYW5kIE1heCBwbGF5ZXJzXG4gICAgaWYgKGlzTWF4aW1pemluZykge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQm9hcmRTaXplOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBCb2FyZFNpemU7IGorKykge1xuICAgICAgICAgIGlmIChib2FyZC5pc0F2YWlsYWJsZShpLCBqKSkge1xuICAgICAgICAgICAgYm9hcmQucGxhY2VNYXJrZXIoaSwgaiwgbWFya2VyKTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5tYXgoc2NvcmUsIGJlc3RTY29yZSk7XG4gICAgICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihpLCBqLCAnLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJlc3RTY29yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCb2FyZFNpemU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEJvYXJkU2l6ZTsgaisrKSB7XG4gICAgICAgICAgaWYgKGJvYXJkLmlzQXZhaWxhYmxlKGksIGopKSB7XG4gICAgICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihpLCBqLCBvcHBvc2l0ZU1hcmtlcik7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIHRydWUpO1xuICAgICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5taW4oc2NvcmUsIGJlc3RTY29yZSk7XG4gICAgICAgICAgICBib2FyZC5wbGFjZU1hcmtlcihpLCBqLCAnLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJlc3RTY29yZTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNaW5pbWF4UGxheTtcbiIsImNvbnN0IFBsYXllcnMgPSAoKSA9PiB7XG4gIGxldCBwbGF5ZXJzID0gW107XG5cbiAgY29uc3Qgc2V0UGxheWVycyA9ICh2YWx1ZXMpID0+IHtcbiAgICBwbGF5ZXJzID0gdmFsdWVzO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiBwbGF5ZXJzO1xuXG4gIHJldHVybiB7c2V0UGxheWVycywgZ2V0UGxheWVyc307XG59O1xuXG5leHBvcnQgeyBQbGF5ZXJzIH07XG4iLCIvLyBBIGNvbXB1dGVyIHBsYXllciB0aGF0IHBsYXlzIGF0IHJhbmRvbSBjZWxsc1xuY29uc3QgbWFrZVJhbmRvbVBsYXkgPSAoYm9hcmQsIG1hcmtlcikgPT4ge1xuICBsZXQgcm93LCBjb2w7XG4gIGxldCByZXN1bHQ7IC8vIFJlc3VsdCBmcm9tIGNoZWNrV2lubmVyLCBjYW4gYmUgJ1gnLCAnTycsICdUaWUnLCBvciBudWxsXG5cbiAgLy8gVHJ5IHVudGlsIGNvbXB1dGVyIGZpbmRzIGEgdmFsaWQgY2VsbCB0byBwbGF5XG4gIGRvIHtcbiAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgICBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgfSB3aGlsZSAoIWJvYXJkLmlzQXZhaWxhYmxlKHJvdywgY29sKSk7XG5cbiAgLy8gUGxheSBhIHZhbGlkIG1vdmVcbiAgYm9hcmQucGxhY2VNYXJrZXIocm93LCBjb2wsIG1hcmtlcik7XG4gIHJlc3VsdCA9IGJvYXJkLmNoZWNrV2lubmVyKCk7XG5cbiAgLy8gR2V0dGluZyBhIHZhbGlkIHJlc3VsdCBtZWFucyBhIGdhbWUgaXMgZW5kZWQgd2l0aCBhIHdpbm5lciBvciBhIHRpZVxuICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlUmFuZG9tUGxheTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2dhbWVDb250cm9sbGVyJztcbmltcG9ydCBkZWxheSBmcm9tICcuL2RlbGF5JztcblxuLy8gVGhlIFNjcmVlbkNvbnRyb2xsZXIgdGhhdCBwcmVzZW50cyBhIHZpZXcgYW5kIGdldHMgdXNlciByZXF1ZXN0c1xuY29uc3QgU2NyZWVuQ29udHJvbGxlciA9IGFzeW5jIChudW1HYW1lcywgcGxheWVycykgPT4ge1xuICBsZXQgZ2FtZVBsYXllZCA9IDA7XG4gIGxldCB3aW5uZXJJbmRleCA9IDE7XG5cbiAgY29uc3QgcGxheUdhbWUgPSAoc3RhcnRQbGF5ZXJJbmRleCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IHNjcmVlbkNvbnRyb2xsZXIuanM6MTEgfiBwbGF5R2FtZSB+IHN0YXJ0UGxheWVySW5kZXg6XCIsIHN0YXJ0UGxheWVySW5kZXgpXG4gICAgY29uc3QgZ2FtZSA9IEdhbWVDb250cm9sbGVyKHBsYXllcnMsIHN0YXJ0UGxheWVySW5kZXgpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcblxuICAgICAgLy8gUmVkcmF3cyB0aGUgZ2FtZSBib2FyZCBpbiB0aGUgd2ViIHBhZ2VcbiAgICAgIGNvbnN0IHVwZGF0ZVNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgYm9hcmRFbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgYm9hcmQgPSBnYW1lLmdldEJvYXJkKCk7XG5cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmQubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZXMgZWFjaCBjZWxsIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IGNlbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIGNlbGxFbC50ZXh0Q29udGVudCA9IGJvYXJkW3Jvd11bY29sXS5nZXRWYWx1ZSgpO1xuXG4gICAgICAgICAgICAvLyBBZGQgZGF0YSBhdHRyaWJ1dGVzIHRvIHRoZSBjZWxsIGVsZW1lbnRzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgIGNlbGxFbC5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICAgICAgICAgIGNlbGxFbC5kYXRhc2V0LmNvbCA9IGNvbDtcblxuICAgICAgICAgICAgLy8gU3R5bGUgYW5kIGRpc2FibGUgcGxheWVkIGNlbGxzXG4gICAgICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2xdLmdldFZhbHVlKCkgPT09ICdYJykge1xuICAgICAgICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgncGxheWVyLTEnKTtcbiAgICAgICAgICAgICAgY2VsbEVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0uZ2V0VmFsdWUoKSA9PT0gJ08nKSB7XG4gICAgICAgICAgICAgIGNlbGxFbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItMicpO1xuICAgICAgICAgICAgICBjZWxsRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmRFbC5hcHBlbmRDaGlsZChjZWxsRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gSGFuZGxlcyBjbGlja3Mgb24gdGhlIGJvYXJkXG4gICAgICAvLyBOZWVkcyB0byBiZSBheW5jcyB0byB1c2UgdGhlIGRlbGF5IGZ1bmN0aW9uIHRvIGRlbGF5IHRoZSBhbGVydHNcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGNsaWNrSGFuZGxlckJvYXJkKGUpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3c7XG4gICAgICAgIGNvbnN0IGNvbCA9IGUudGFyZ2V0LmRhdGFzZXQuY29sO1xuICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgIC8vIElnbm9yZSBpbnZhbGlkIHVzZXIgaW5wdXRcbiAgICAgICAgLy8gV2hlbiBhIGNlbGwgaGFzIGFscmVhZHkgYmVlbiBjbGlja2VkLCBpdCdzIHBvaW50ZXIgZXZlbnQgaXMgZGlzYWJsZWRcbiAgICAgICAgLy8gQ2xpa2VkIG9uIGl0IHJlc3VsdHMgaW4gcm93IGFuZCBjb2wgYmVpbmcgdW5kZWZpbmVkXG4gICAgICAgIGlmICghcm93IHx8ICFjb2wpIHJldHVybjtcblxuICAgICAgICAvLyBQbGF5IGEgdmFsaWQgbW92ZVxuICAgICAgICByZXN1bHQgPSBnYW1lLnBsYXlSb3VuZChyb3csIGNvbCk7XG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgZ2FtZS5yZXNldEJvYXJkKCk7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ3RpZScpIHtcbiAgICAgICAgICAgIHJlc29sdmUoJ1RpZSEnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2lubmVySW5kZXggPSBwbGF5ZXJzLmluZGV4T2YoZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgJ/CfmoAgfiBmaWxlOiBzY3JlZW5Db250cm9sbGVyLmpzOjY3IH4gY2xpY2tIYW5kbGVyQm9hcmQgfiB3aW5uZXJJbmRleDonLFxuICAgICAgICAgICAgICB3aW5uZXJJbmRleFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJlc29sdmUoYCR7Z2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS50eXBlfSB3aW5zIWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlckJvYXJkKTtcblxuICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgbGV0IHN0YXJ0UGxheWVySW5kZXggPSAwO1xuICB3aGlsZSAoZ2FtZVBsYXllZCA8IG51bUdhbWVzKSB7XG4gICAgYXdhaXQgcGxheUdhbWUoc3RhcnRQbGF5ZXJJbmRleCkudGhlbihhc3luYyAobWVzc2FnZSkgPT4ge1xuICAgICAgZ2FtZVBsYXllZCsrO1xuICAgICAgLy8gTWFrZSB0aGUgbG9zZXIgdGhlIHN0YXJ0IHBsYXllciBvZiB0aGUgbmV3IGdhbWVcbiAgICAgIHN0YXJ0UGxheWVySW5kZXggPSB3aW5uZXJJbmRleCA9PT0gMSA/IDAgOiAxO1xuICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogc2NyZWVuQ29udHJvbGxlci5qczo4NyB+IGF3YWl0cGxheUdhbWUgfiBzdGFydFBsYXllckluZGV4OlwiLCBzdGFydFBsYXllckluZGV4KVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICfwn5qAIH4gZmlsZTogc2NyZWVuQ29udHJvbGxlci5qczo5OCB+IFNjcmVlbkNvbnRyb2xsZXIgfiBnYW1lUGxheWVkOicsXG4gICAgICAgIGdhbWVQbGF5ZWRcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ/CfmoAgfiBmaWxlOiBzY3JlZW5Db250cm9sbGVyLmpzOjk4IH4gZW5kUGxheS50aGVuIH4gbWVzc2FnZTonLFxuICAgICAgICBtZXNzYWdlXG4gICAgICApO1xuICAgICAgYXdhaXQgZGVsYXkoNTAwKTtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgICAgLy8gVE9ETzogYWRkIGxvZ2ljIHNvIHRoZSBsb3NlIGdvIGZpcnN0IG5leHQgcm91bmRcbiAgICB9KTtcbiAgfVxuICBhbGVydCgnR2FtZSBPdmVyIScpO1xuICAvLyBUT0RPOiBkaXNhYmxlIGFsbCBjZWxscyBoZXJlXG4gIC8vIFRPRE86IGVuZCBnYW1lIHNjcmVlbiB0byBzdW1tYXJpemUgc2NvcmVzLCBhbGxvdyB1c2VyIHRvIHBsYXkgYWdhaW5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlbkNvbnRyb2xsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSAnLi9wbGF5ZXJzJztcbmltcG9ydCBTY3JlZW5Db250cm9sbGVyIGZyb20gJy4vc2NyZWVuQ29udHJvbGxlcic7XG5cbmNvbnN0IHBsYXllcnMgPSBQbGF5ZXJzKCk7XG5cbi8vIFRPRE86IEFkZCBhIGZvcm0gZm9yIGdhbWUgc2V0IHVwXG4vLyBQbGF5ZXIgYXR0cmlidXRlc1xuLy8gTnVtYmVyIG9mIGdhbWVzIHRvIHBsYXlcblxucGxheWVycy5zZXRQbGF5ZXJzKFtcbiAgeyBuYW1lOiAncGxheWVyT25lTmFtZScsIG1hcmtlcjogJ1gnLCB0eXBlOiAnYWknIH0sXG4gIHsgbmFtZTogJ3BsYXllclR3b05hbWUnLCBtYXJrZXI6ICdPJywgdHlwZTogJ2h1bWFuJyB9LFxuXSk7XG5cbi8vIFByb21wdCB1c2VyIGZvciBudW1iZXIgb2YgZ2FtZXMgdG8gcGxheVxuLy8gY29uc3QgbnVtR2FtZXMgPSBwYXJzZUludChwcm9tcHQoJ0hvdyBtYW55IGdhbWVzIGRvIHlvdSB3YW50IHRvIHBsYXk/JykpO1xuXG4vLyBDcmVhdGUgU2NyZWVuQ29udHJvbGxlciBpbnN0YW5jZSBhbmQgcGxheSBnYW1lXG5TY3JlZW5Db250cm9sbGVyKDMsIHBsYXllcnMuZ2V0UGxheWVycygpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==