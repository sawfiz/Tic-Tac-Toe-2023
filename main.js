/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  /* border: 1px solid red; */\\n  font-family: 'Courier New', Courier, monospace;\\n}\\n\\nh1 {\\n  color: blue;\\n}\\n\\n.board {\\n  display: grid;\\n  height: 500px;\\n  width: 500px;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-template-rows: repeat(3, 1fr);\\n  border: 5px solid black;\\n  gap: 20px;\\n  padding: 20px;\\n  background-color: yellow;\\n}\\n\\n.cell {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  font-size: 5rem;\\n  border: 1px solid purple;\\n  background: blue;\\n  cursor: pointer;\\n}\\n\\n.player-1 {\\n  background: red;\\n  border: 1px solid black;\\n  cursor: default;\\n}\\n\\n.player-2 {\\n  background: green;\\n  border: 1px solid black;\\n  cursor: default;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tic-tac-toe-2023/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tic-tac-toe-2023/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tic-tac-toe-2023/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tic-tac-toe-2023/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tic-tac-toe-2023/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tic-tac-toe-2023/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tic-tac-toe-2023/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tic-tac-toe-2023/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tic-tac-toe-2023/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tic-tac-toe-2023/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Cell class\n// Each playable location on the board is a cell object\nconst Cell = () => {\n  let value = '.';\n\n  const setValue = (marker) => {\n    value = marker;\n  };\n\n  const getValue = () => value;\n\n  return { setValue, getValue };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);\n\n//# sourceURL=webpack://tic-tac-toe-2023/./src/cell.js?");

/***/ }),

/***/ "./src/delay.js":
/*!**********************!*\
  !*** ./src/delay.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Global function\nfunction delay(time) {\n  return new Promise((resolve) => setTimeout(resolve, time));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delay);\n\n\n//# sourceURL=webpack://tic-tac-toe-2023/./src/delay.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalConstant */ \"./src/globalConstant.js\");\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ \"./src/cell.js\");\n\n\n\n// Game board class\nconst GameBoard = () => {\n  const board = [];\n\n  // Creat a 3x3 board, each location is a Cell object\n  for (let row = 0; row < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; row++) {\n    board[row] = [];\n    for (let col = 0; col < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; col++) {\n      board[row].push((0,_cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    }\n  }\n\n  // Getter function for the board\n  const getBoard = () => {\n    return board;\n  };\n\n  // Function to print the board to the console\n  const printBoard = () => {\n    const values = board\n      .map((row) => row.map((cell) => cell.getValue()).join(' '))\n      .join('\\n');\n    console.log(values);\n  };\n\n  // Place the marker of the active player in desired cell\n  const placeMarker = (row, col, player) => {\n    board[row][col].setValue(player);\n  };\n\n  function checkWinner() {\n    // Check rows\n    for (let i = 0; i < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; i++) {\n      if (equals3(board[i][0], board[i][1], board[i][2])) {\n        return board[i][0].getValue();\n      }\n    }\n    // Check columns\n    for (let i = 0; i < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; i++) {\n      if (equals3(board[0][i], board[1][i], board[2][i])) {\n        return board[0][i].getValue();\n      }\n    }\n    // Check diagnal\n    if (equals3(board[0][0], board[1][1], board[2][2])) {\n      return board[1][1].getValue();\n    }\n    // Check the other diagnal\n    if (equals3(board[0][2], board[1][1], board[2][0])) {\n      return board[1][1].getValue();\n    }\n    // Check for tie\n    let occupiedSqures = 0;\n    for (let i = 0; i < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; i++) {\n      for (let j = 0; j < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; j++) {\n        if (board[i][j].getValue() !== '.') occupiedSqures++;\n      }\n    }\n    if (occupiedSqures === 9) return 'tie'; // All squares are taken up\n    return null; // Not a game terminating play\n  }\n\n  // Compare if 3 cells have equal values (markers)\n  function equals3(a, b, c) {\n    const result =\n      a.getValue() === b.getValue() &&\n      a.getValue() === c.getValue() &&\n      a.getValue() !== '.';\n    return result;\n  }\n\n  // Check is a cell is available for playing\n  const isAvailable = (row, col) => {\n    if (board[row][col].getValue() === '.') {\n      return true;\n    }\n    return false;\n  };\n\n  // Count the number of cells that are avaialble\n  const availableCells = () => {\n    count = 0;\n    for (let i = 0; i < 3; i++) {\n      for (let j = 0; j < 3; j++) {\n        if (isAvailable) {\n          count++;\n        }\n      }\n    }\n    return count;\n  };\n\n  return {\n    getBoard,\n    printBoard,\n    placeMarker,\n    checkWinner,\n    isAvailable,\n    availableCells,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n\n//# sourceURL=webpack://tic-tac-toe-2023/./src/gameBoard.js?");

/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _ramdomPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ramdomPlay */ \"./src/ramdomPlay.js\");\n/* harmony import */ var _miniMax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miniMax */ \"./src/miniMax.js\");\n\n\n\n\n// Game controller where the game playing logic is\nconst GameController = (\n  playerOneName = 'Player One',\n  playerTwoName = 'Player Two'\n) => {\n  const board = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  board.printBoard();\n\n  const players = [\n    { name: playerOneName, marker: 'X', type: 'human', level: 'none' },\n    { name: playerTwoName, marker: 'O', type: 'computer', level: 'ai' },\n  ];\n\n  let activePlayer = players[0];\n\n  const getActivePlayer = () => activePlayer;\n\n  const switchPlayer = () => {\n    activePlayer = activePlayer === players[0] ? players[1] : players[0];\n  };\n\n  // Make a play in a chosen cell\n  // If there is a computer player, the computer makes a play too\n  const playRound = (row, col) => {\n    let result;\n\n    // Play the human player play\n    board.placeMarker(row, col, activePlayer.marker);\n    board.printBoard();\n\n    // Check for end of game and game result\n    result = board.checkWinner();\n    if (result) return result;\n\n    switchPlayer();\n\n    // Computer player plays\n    if (getActivePlayer().type === 'computer') {\n      if (activePlayer.level === 'random') {\n        result = (0,_ramdomPlay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(board, activePlayer.marker);\n        switchPlayer();\n      }\n\n      if (activePlayer.level === 'ai') {\n        result = (0,_miniMax__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(board, activePlayer.marker);\n        switchPlayer();\n      }\n\n      board.printBoard();\n      if (result) return result;\n    }\n  };\n\n  return { playRound, getBoard: board.getBoard, getActivePlayer };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);\n\n\n//# sourceURL=webpack://tic-tac-toe-2023/./src/gameController.js?");

/***/ }),

/***/ "./src/globalConstant.js":
/*!*******************************!*\
  !*** ./src/globalConstant.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoardSize\": () => (/* binding */ BoardSize)\n/* harmony export */ });\n// Global constants\nconst BoardSize = 3;\n\n\n\n\n//# sourceURL=webpack://tic-tac-toe-2023/./src/globalConstant.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screenController */ \"./src/screenController.js\");\n\n\n// Prompt user for number of games to play\n// const numGames = parseInt(prompt('How many games do you want to play?'));\n\n// Create ScreenController instance and play game\n(0,_screenController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1);\n\n\n//# sourceURL=webpack://tic-tac-toe-2023/./src/index.js?");

/***/ }),

/***/ "./src/miniMax.js":
/*!************************!*\
  !*** ./src/miniMax.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalConstant */ \"./src/globalConstant.js\");\n\n\n// A computer player that plays using the Minimax algorithm\nconst makeMinimaxPlay = (board, marker) => {\n  let bestScore = -Infinity;\n  let bestRow, bestCol;\n  let result;\n\n  // Go through all avaialble cells to find the best posible move\n  for (let row = 0; row < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; row++) {\n    for (let col = 0; col < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; col++) {\n      if (board.isAvailable(row, col)) {\n        // Try to play an available cell\n        board.placeMarker(row, col, marker);\n        // Recursively get the score of this play\n        const score = minimax(board, false);\n        // Record if it is a better move\n        if (score > bestScore) {\n          bestScore = score;\n          bestRow = row;\n          bestCol = col;\n        }\n        // Reset the cell\n        board.placeMarker(row, col, '.');\n      }\n    }\n  }\n\n  // Play the best move found\n  board.placeMarker(bestRow, bestCol, marker);\n\n  // If the games with a winner of tie, return result\n  result = board.checkWinner();\n  if (result) return result;\n};\n\n// Recursive minimax algorithm\nfunction minimax(board, isMaximizing) {\n  const scores = {\n    O: 10,\n    tie: 0,\n    X: -10,\n  };\n\n  // Terminating condition for the recursive algorithm\n  const result = board.checkWinner();\n  if (result !== null) {\n    return scores[result];\n  }\n\n  // Alternate between Min and Max players\n  if (isMaximizing) {\n    let bestScore = -Infinity;\n    for (let i = 0; i < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; i++) {\n      for (let j = 0; j < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; j++) {\n        if (board.isAvailable(i, j)) {\n          board.placeMarker(i, j, 'O');\n          const score = minimax(board, false);\n          bestScore = Math.max(score, bestScore);\n          board.placeMarker(i, j, '.');\n        }\n      }\n    }\n    return bestScore;\n  } else {\n    let bestScore = Infinity;\n    for (let i = 0; i < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; i++) {\n      for (let j = 0; j < _globalConstant__WEBPACK_IMPORTED_MODULE_0__.BoardSize; j++) {\n        if (board.isAvailable(i, j)) {\n          board.placeMarker(i, j, 'X');\n          const score = minimax(board, true);\n          bestScore = Math.min(score, bestScore);\n          board.placeMarker(i, j, '.');\n        }\n      }\n    }\n    return bestScore;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMinimaxPlay);\n\n\n//# sourceURL=webpack://tic-tac-toe-2023/./src/miniMax.js?");

/***/ }),

/***/ "./src/ramdomPlay.js":
/*!***************************!*\
  !*** ./src/ramdomPlay.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// A computer player that plays at random cells\nconst makeRandomPlay = (board, marker) => {\n  let row, col;\n  let result; // Result from checkWinner, can be 'X', 'O', 'Tie', or null\n\n  // Try until computer finds a valid cell to play\n  do {\n    row = Math.floor(Math.random() * 3);\n    col = Math.floor(Math.random() * 3);\n  } while (!board.isAvailable(row, col));\n\n  // Play a valid move\n  board.placeMarker(row, col, marker);\n  result = board.checkWinner();\n\n  // Getting a valid result means a game is ended with a winner or a tie\n  if (result) return result;\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeRandomPlay);\n\n//# sourceURL=webpack://tic-tac-toe-2023/./src/ramdomPlay.js?");

/***/ }),

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameController */ \"./src/gameController.js\");\n/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delay */ \"./src/delay.js\");\n\n\n\n\n// The ScreenController that presents a view and gets user requests\nconst ScreenController = (numGames) => {\n  let gameCount = 0;\n  let endGame = false;\n\n  const playNextGame = () => {\n    gameCount++;\n\n    if (gameCount <= numGames) {\n      const game = (0,_gameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      const boardEl = document.querySelector('.board');\n\n      // Redraws the game board in the web page\n      const updateScreen = () => {\n        boardEl.innerHTML = '';\n        const board = game.getBoard();\n\n        for (let row = 0; row < board.length; row++) {\n          for (let col = 0; col < board.length; col++) {\n            // Creates each cell element\n            const cellEl = document.createElement('button');\n            cellEl.classList.add('cell');\n            cellEl.textContent = board[row][col].getValue();\n\n            // Add data attributes to the cell elements that can be accessed by event handler\n            cellEl.dataset.row = row;\n            cellEl.dataset.col = col;\n\n            // Style and disable played cells\n            if (board[row][col].getValue() === 'X') {\n              cellEl.classList.add('player-1');\n              cellEl.disabled = true;\n            }\n            if (board[row][col].getValue() === 'O') {\n              cellEl.classList.add('player-2');\n              cellEl.disabled = true;\n            }\n\n            // If the game is over, disable all cells\n            if (endGame) {\n              cellEl.disabled = true;\n              cellEl.style.cursor = 'default';\n            }\n\n            boardEl.appendChild(cellEl);\n          }\n        }\n      };\n\n      // Handles clicks on the board\n      // Needs to be ayncs to use the delay function to delay the alerts\n      async function clickHandlerBoard(e) {\n        const row = e.target.dataset.row;\n        const col = e.target.dataset.col;\n        let result;\n\n        // Ignore invalid user input\n        // When a cell has already been clicked, it's pointer event is disabled\n        // Cliked on it results in row and col being undefined\n        if (!row || !col) return;\n\n        // Play a valid move\n        result = game.playRound(row, col);\n        if (result) {\n          endGame = true;\n          updateScreen();\n          if (result === 'tie') {\n            await (0,_delay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(100);\n            alert('Tie!');\n          } else {\n            await (0,_delay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(100);\n            alert(`${game.getActivePlayer().name} wins!`);\n          }\n        }\n        updateScreen();\n      }\n      boardEl.addEventListener('click', clickHandlerBoard);\n\n      updateScreen();\n    } else {\n      alert(`You have played ${numGames} games.  Thanks for playing!`);\n    }\n  };\n\n  playNextGame();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenController);\n\n\n//# sourceURL=webpack://tic-tac-toe-2023/./src/screenController.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;