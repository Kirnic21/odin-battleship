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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --grid-cols: 1;\\n  --grid-rows: 1;\\n}\\n\\n.gameboard {\\n  display: grid;\\n  grid-gap: 0c;\\n  grid-template-rows: repeat(var(--grid-rows), 1fr);\\n  grid-template-columns: repeat(var(--grid-cols), 1fr);\\n}\\n#enemyGameboard {\\n  display: grid;\\n  grid-gap: 0c;\\n  grid-template-rows: repeat(var(--grid-rows), 1fr);\\n  grid-template-columns: repeat(var(--grid-cols), 1fr);\\n}\\n.grid-item {\\n  padding: 1em;\\n  size: 5px;\\n  border: 1px solid #ebebeb;\\n  text-align: center;\\n}\\n.grid-item-enemy {\\n  padding: 1em;\\n  size: 5px;\\n  border: 1px solid #ebebeb;\\n  text-align: center;\\n}\\n.ship-div {\\n  background-color: #553c9a;\\n}\\n.gameboard-container {\\n  display: flex;\\n  justify-content: space-evenly;\\n  gap: 0px;\\n}\\n.fuck-you {\\n  display: flex;\\n  justify-content: space-evenly;\\n  gap: 0px;\\n}\\n#header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 70px;\\n  font-weight: 600;\\n  background-image: linear-gradient(to left, #553c9a, #b393d3);\\n  color: transparent;\\n  background-clip: text;\\n  -webkit-background-clip: text;\\n}\\n#container {\\n  display: flex;\\n  justify-content: center;\\n  gap: 10vw;\\n}\\n.attacked {\\n  background-color: red;\\n}\\n.missed {\\n  background-color: blue;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://a/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://a/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://a/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://a/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboard\": () => (/* binding */ gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n\n\nconst gameboard = () => {\n  let shipArray = [];\n  const getShipArray = () => shipArray;\n  const verifyIfhasAShipInCoordinate = (position) => {\n    for (let i in position) {\n      if (verifyIfHasShip(position[i]) !== undefined) {\n        return false;\n      }\n    }\n  };\n  let shipCoordinatesArray = [];\n  const equal2DArray = (coordinateArray, position) => {\n    let coordinateArrayStringfied = JSON.stringify(coordinateArray);\n    for (let i in position) {\n      let stringfied = JSON.stringify(position[i]);\n      if (coordinateArrayStringfied.includes(stringfied)) {\n        return true;\n      }\n    }\n  };\n  const getShipCoordinates = () => {\n    const shipArray = getShipArray();\n    let coordinateArray = [];\n    for (let i in shipArray) {\n      coordinateArray.push(shipArray[i].getPosition());\n    }\n\n    return coordinateArray;\n  };\n  const ifHasShip = (coordinate) => {\n    let stringfiedCoordinate = JSON.stringify(coordinate);\n    let coordinateArray = JSON.stringify(getShipCoordinates());\n    console.log(coordinateArray);\n    if (coordinateArray.includes(stringfiedCoordinate)) {\n      return true;\n    } else {\n      return false;\n    }\n  };\n  const ifHasCoordinate = (coordinate) => {\n    let stringfiedCoordinate = JSON.stringify(coordinate);\n  \n    let coordinateArray = JSON.stringify(getCoordinates());\n    console.log(coordinateArray)\n    if (coordinateArray.includes(stringfiedCoordinate)) {\n      return true;\n    } else {\n      return false;\n    }\n  };\n  const getShipCoordinatesArray = () => shipCoordinatesArray;\n  const createShip = (length, position) => {\n    let coordinateArray = getShipCoordinatesArray();\n    if (!equal2DArray(coordinateArray, position)) {\n      let newShip = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.ship)(length, position);\n      let shiparray = getShipArray();\n      shiparray.push(newShip);\n      coordinateArray.push(newShip.getPosition());\n      return shiparray;\n    } else {\n      return \"no\";\n    }\n  };\n  const createBoard = () => {\n    const board = [];\n    for (let i = 0; i < 10; i++) {\n      board[i] = [];\n      for (let j = 0; j < 10; j++) {\n        board[i][j] = j;\n      }\n    }\n    return board;\n  };\n  const returnCoordinate = (ship, coordinate) => {\n    let stringfiedCoordinate = JSON.stringify(coordinate);\n    let shipArray = JSON.stringify(ship.getPosition());\n    if (shipArray.includes(stringfiedCoordinate)) {\n      return coordinate;\n    }\n  };\n  const verifyIfHasShip = (coordinate) => {\n    let stringfiedCoordinate = JSON.stringify(coordinate);\n    let shipArray = getShipArray();\n    for (let i in shipArray) {\n      let positionArray = shipArray[i].getPosition();\n      let stringfyPositionArray = JSON.stringify(positionArray);\n      if (stringfyPositionArray.includes(stringfiedCoordinate)) {\n        return shipArray[i];\n      } else {\n        continue;\n      }\n    }\n  };\n  const receiveAttack = (coordinate) => {\n    let receivedAttack = verifyIfHasShip(coordinate);\n\n    let coordinates = getCoordinates();\n    if (receivedAttack === undefined) {\n      coordinates.push(coordinate);\n      return coordinates;\n    } else {\n      let receivedAttackCoordinate = returnCoordinate(\n        receivedAttack,\n        coordinate,\n      );\n      let coordinates = getCoordinates();\n      if (\n        receivedAttackCoordinate[0] === coordinate[0] &&\n        receivedAttackCoordinate[1] === coordinate[1]\n      ) {\n        receivedAttack.gotHit();\n        coordinates.push(coordinate);\n        return receivedAttack.isSunk();\n      }\n    }\n  };\n  let coordinatesAttacked = [];\n  const getCoordinates = () => coordinatesAttacked;\n\n  const checkIfShipsAreSunk = () => {\n    let shipArray = getShipArray();\n    const testIfIsSunk = (currentValue) => {\n      return currentValue.isSunk() === true;\n    };\n    return shipArray.every(testIfIsSunk);\n  };\n  return {\n    createShip,\n    verifyIfHasShip,\n    receiveAttack,\n    verifyIfhasAShipInCoordinate,\n    createBoard,\n    checkIfShipsAreSunk,\n    getShipArray,\n    getCoordinates,\n    getShipCoordinatesArray,\n    getShipCoordinates,\n    ifHasShip,\n    ifHasCoordinate\n  };\n};\n\n\n\n//# sourceURL=webpack://a/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Interface.js":
/*!**************************!*\
  !*** ./src/Interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aiInputAttack\": () => (/* binding */ aiInputAttack),\n/* harmony export */   \"displayCoordinates\": () => (/* binding */ displayCoordinates),\n/* harmony export */   \"displayCoordinatesEnemy\": () => (/* binding */ displayCoordinatesEnemy),\n/* harmony export */   \"displayReceivedAttack\": () => (/* binding */ displayReceivedAttack),\n/* harmony export */   \"inputAttack\": () => (/* binding */ inputAttack),\n/* harmony export */   \"makeEnemyGrid\": () => (/* binding */ makeEnemyGrid),\n/* harmony export */   \"makePlayerGrid\": () => (/* binding */ makePlayerGrid),\n/* harmony export */   \"removeAllChildNodes\": () => (/* binding */ removeAllChildNodes)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nlet player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.player)(\"input\", true);\nlet player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.player)(0, false);\nlet player1Gameboard = player1.getGameboard();\nlet player2Gameboard = player2.getGameboard();\n\nplayer2Gameboard.createShip(2, [[1, 2]]);\nplayer2Gameboard.createShip(2, [[3, 4]]);\nplayer2Gameboard.createShip(2, [[0, 0]]);\n\n  function removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\n\nconst container = document.querySelector(\".gameboard\");\nconst enemyContainer = document.querySelector(\"#enemyGameboard\");\nconst makePlayerGrid = () => {\n  let board = player1Gameboard.createBoard();\n  container.style.setProperty(\"--grid-rows\", 10);\n  container.style.setProperty(\"--grid-cols\", 10);\n  for (let i in board) {\n    for (let j in board[i]) {\n      let cell = document.createElement(\"div\");\n      cell.innerText = \"\";\n      container.appendChild(cell).className = \"grid-item\";\n      cell.dataset.coordinateX = board[i][i];\n      cell.dataset.coordinateY = board[j][j];\n    }\n  }\n};\nconst makeEnemyGrid = () => {\n  let board = player2Gameboard.createBoard();\n  enemyContainer.style.setProperty(\"--grid-rows\", 10);\n  enemyContainer.style.setProperty(\"--grid-cols\", 10);\n  for (let i in board) {\n    for (let j in board[i]) {\n      let cell = document.createElement(\"div\");\n      cell.innerText = \"\";\n      enemyContainer.appendChild(cell).className = \"grid-item-enemy\";\n      cell.dataset.coordinateY = board[i][i];\n      cell.dataset.coordinateX = board[j][j];\n    }\n  }\n};\nconst displayCoordinates = () => {\n  const coordinateArray = player1Gameboard.getShipCoordinatesArray();\n\n  const coordinateArrayStringfied = JSON.stringify(coordinateArray);\n  const gridItems = document.querySelectorAll(\".grid-item\");\n  gridItems.forEach((element) => {\n    let coordinatesInDiv =\n      \"[\" +\n      element.dataset.coordinateX +\n      \",\" +\n      element.dataset.coordinateY +\n      \"]\";\n    if (coordinateArrayStringfied.includes(coordinatesInDiv)) {\n      element.classList.add(\"ship-div\");\n    }\n  });\n};\nconst displayCoordinatesEnemy = () => {\n  const coordinateArray = player2Gameboard.getShipCoordinatesArray();\n\n  const coordinateArrayStringfied = JSON.stringify(coordinateArray);\n  const gridItems = document.querySelectorAll(\".grid-item-enemy\");\n  gridItems.forEach((element) => {\n    let coordinatesInDiv =\n      \"[\" +\n      element.dataset.coordinateX +\n      \",\" +\n      element.dataset.coordinateY +\n      \"]\";\n    if (coordinateArrayStringfied.includes(coordinatesInDiv)) {\n      element.classList.add(\"ship-div-enemy\");\n    }\n  });\n};\nconst displayReceivedAttack = (user) => {\n  const coordinateArray = user.getGameboard().getCoordinates();\n\n  const coordinateArrayStringfied = JSON.stringify(coordinateArray);\n  const gridItems = document.querySelectorAll(\".grid-item\");\n  gridItems.forEach((element) => {\n    let coordinatesInDiv =\n      \"[\" +\n      element.dataset.coordinateX +\n      \",\" +\n      element.dataset.coordinateY +\n      \"]\";\n    if (\n      coordinateArrayStringfied.includes(coordinatesInDiv) &&\n      element.classList.contains(\"ship-div\")\n    ) {\n      element.classList.add(\"attacked\");\n    }\n  });\n};\n\nplayer2Gameboard.createShip(2, [[0, 0]]);\nconst inputAttack = (user, enemy) => {\n  const enemyCoordinates = document.querySelectorAll(\".grid-item-enemy\");\n  let gameboardEnemy = enemy.getGameboard();\n  enemyCoordinates.forEach((element) => {\n    element.addEventListener(\"click\", () => {\n      if (user.getPlayerTurn() === true) {\n        let xCoordinate = parseInt(element.dataset.coordinateX);\n        let yCoordinate = parseInt(element.dataset.coordinateY);\n        console.log(xCoordinate, yCoordinate);\n        gameboardEnemy.receiveAttack([xCoordinate, yCoordinate]);\n        if (gameboardEnemy.ifHasShip([xCoordinate, yCoordinate])) {\n          element.classList.add(\"attacked\");\n          user.endTurn();\n        } else {\n          element.classList.add(\"missed\");\n          user.endTurn();\n        }\n      } else {\n        return;\n      }\n    });\n  });\n};\nconst aiInputAttack = (coordinates, user, enemy) => {\n  const userCoordinates = document.querySelectorAll(\".grid-item\");\n  let gameboardEnemy = enemy.getGameboard();\n  userCoordinates.forEach((element) => {\n    let xCoordinate = parseInt(element.dataset.coordinateX);\n    let yCoordinate = parseInt(element.dataset.coordinateY);\n\n    for (let i in coordinates) {\n      if (\n        coordinates[i][0] === xCoordinate &&\n        coordinates[i][1] === yCoordinate\n      ) {\n        if (gameboardEnemy.ifHasShip([xCoordinate, yCoordinate])) {\n          element.classList.add(\"attacked\");\n          user.endTurn();\n        } else {\n          element.classList.add(\"missed\");\n          user.endTurn();\n        }\n      }\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack://a/./src/Interface.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ship\": () => (/* binding */ ship)\n/* harmony export */ });\nconst ship = (length, position) => {\n  let hit = 0;\n  position;\n  const gotHit = () => {\n    return ++hit;\n  };\n  const isSunk = () => getHit() >= length;\n  const getHit = () => hit;\n  const getPosition = () => {\n    return position;\n  };\n  const getLength = () => length;\n  return { gotHit, isSunk, getPosition, getHit, getLength };\n};\n\n\n\n\n//# sourceURL=webpack://a/./src/Ship.js?");

/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cpuAttack\": () => (/* binding */ cpuAttack),\n/* harmony export */   \"game\": () => (/* binding */ game),\n/* harmony export */   \"gameLoop\": () => (/* binding */ gameLoop),\n/* harmony export */   \"playerTurnAttack\": () => (/* binding */ playerTurnAttack)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n/* harmony import */ var _Interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Interface */ \"./src/Interface.js\");\n\n\n\nlet player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(\"a\", true);\nlet player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(0, false);\nconst playerTurnAttack = (user, enemy) => {\n  let playerTurn = user.getPlayerTurn();\n\n  if (playerTurn === true) {\n    (0,_Interface__WEBPACK_IMPORTED_MODULE_2__.inputAttack)(user, enemy);\n    user.endTurn();\n    enemy.startTurn();\n  }\n};\nconst cpuAttack = (cpu, user) => {\n  let cpuTurn = cpu.getPlayerTurn();\n\n  if (cpuTurn === true) {\n    (0,_Interface__WEBPACK_IMPORTED_MODULE_2__.aiInputAttack)(cpu.aiBehavior(user), cpu, user);\n    cpu.endTurn();\n    user.startTurn();\n  }\n};\nconst gameLoop = (user, cpu) => {\n  const userGameboardDOM = document.querySelectorAll(\".grid-item\");\n  const enemyGameboardDOM = document.querySelectorAll(\".grid-item-enemy\");\n  const gameboardEnemy = cpu.getGameboard();\n  const container = document.querySelector(\"#container\")\n  enemyGameboardDOM.forEach((element) => {\n    element.addEventListener(\"click\", () => {\n      if (user.getPlayerTurn() === true) {\n        let xCoordinate = parseInt(element.dataset.coordinateX);\n        let yCoordinate = parseInt(element.dataset.coordinateY);\n\n        if (\n          cpu.getGameboard().checkIfShipsAreSunk() === true ||\n          user.getGameboard().checkIfShipsAreSunk() === true\n        ) {\n          if(cpu.getGameboard().checkIfShipsAreSunk() === true)\n          {\n          const wonText = document.createElement(\"div\")\n          wonText.textContent = user.getPlayerName() + \" won\"\n          ;(0,_Interface__WEBPACK_IMPORTED_MODULE_2__.removeAllChildNodes)(container)\n          container.appendChild(wonText)\n          }\n          else if(user.getGameboard().checkIfShipsAreSunk() === true)\n          {\n          const wonText = document.createElement(\"div\")\n          wonText.textContent = \"CPU won \"\n          ;(0,_Interface__WEBPACK_IMPORTED_MODULE_2__.removeAllChildNodes)(container)\n          container.appendChild(wonText)\n          } \n        }\n        else if (\n          gameboardEnemy.ifHasShip([xCoordinate, yCoordinate]) &&\n          !gameboardEnemy.ifHasCoordinate([xCoordinate, yCoordinate])\n        ) {\n          gameboardEnemy.receiveAttack([xCoordinate, yCoordinate]);\n          element.classList.add(\"attacked\");\n          cpu.startTurn();\n          user.endTurn();\n          cpuAttack(cpu, user);\n        } else if (!gameboardEnemy.ifHasCoordinate([xCoordinate, yCoordinate])) {\n          gameboardEnemy.receiveAttack([xCoordinate, yCoordinate]);\n          element.classList.add(\"missed\");\n          user.endTurn();\n          cpu.startTurn();\n          cpuAttack(cpu, user);\n        }\n      }\n    });\n  });\n};\nconst game = (user,cpu)=>{\n  (0,_Interface__WEBPACK_IMPORTED_MODULE_2__.makePlayerGrid)();\n  (0,_Interface__WEBPACK_IMPORTED_MODULE_2__.makeEnemyGrid)();\n  gameLoop(user,cpu)\n}\n\n\n\n//# sourceURL=webpack://a/./src/gameloop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n/* harmony import */ var _Interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Interface */ \"./src/Interface.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameloop */ \"./src/gameloop.js\");\n\n\n\n\n\n\n\n\nlet player1 = (0,_player__WEBPACK_IMPORTED_MODULE_4__.player)(\"1\", true);\nlet player2 = (0,_player__WEBPACK_IMPORTED_MODULE_4__.player)(0, true);\nplayer1.getGameboard().createShip(1,[[2,3]])\nplayer2.getGameboard().createShip(1,[[2,3]])\n;(0,_gameloop__WEBPACK_IMPORTED_MODULE_5__.game)(player1,player2)\n\n//# sourceURL=webpack://a/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n\n\nconst player = (name, playerTurn) => {\n  let itsPlayerTurn = playerTurn;\n  const playerGameboard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)();\n  const getGameboard = () => {\n    return playerGameboard;\n  };\n  let playerName = name\n  const getPlayerName = (playerName)=>name;\n  const getEnemy = (enemy) => enemy;\n  let isAi = false;\n  const getPlayerTurn = () => itsPlayerTurn;\n  const getIsAi = () => isAi;\n  const endTurn = () => {\n    return (itsPlayerTurn = false);\n  };\n  const attackOtherGameboard = (enemy, coordinate) => {\n    if (getIsAi() === false) {\n      const enemyGameboard = getEnemy(enemy).getGameboard();\n\n      if (getPlayerTurn() === true) {\n        if (checkCoordinate(enemyGameboard.getCoordinates(), coordinate)) {\n          return \"Illegal Move(repeated move)\";\n        } else {\n          endTurn();\n          enemy.startTurn();\n          return enemyGameboard.receiveAttack(coordinate);\n        }\n      }\n    }\n  };\n  const startTurn = () => {\n    return (itsPlayerTurn = true);\n  };\n  const turnIntoAi = () => {\n    if (name === 0) {\n      isAi = true;\n      return isAi;\n    } else {\n      isAi = false;\n      return isAi;\n    }\n  };\n\n  const checkCoordinate = (coordinateArray, coordinate) => {\n    let stringfiedCoordinate = JSON.stringify(coordinate);\n    let stringfiedCoordinateArray = JSON.stringify(coordinateArray);\n\n    if (stringfiedCoordinateArray.includes(stringfiedCoordinate)) {\n      return true;\n    }\n  };\n  const aiBehavior = (enemy) => {\n    turnIntoAi();\n\n    if (getIsAi() === true) {\n      if (getPlayerTurn() === true) {\n        let xCoordinateRandom = Math.floor(Math.random() * 9);\n        let yCoordinateRandom = Math.floor(Math.random() * 9);\n\n        const enemyGameboard = getEnemy(enemy).getGameboard();\n        if (\n          checkCoordinate(enemyGameboard.getCoordinates(), [\n            xCoordinateRandom,\n            yCoordinateRandom,\n          ])\n        ) {\n          return \"Illegal Move(repeated move)\";\n        } else {\n          enemyGameboard.receiveAttack([xCoordinateRandom, yCoordinateRandom]);\n          return enemyGameboard.getCoordinates();\n        }\n      }\n    }\n  };\n  return {\n    endTurn,\n    startTurn,\n    turnIntoAi,\n    getGameboard,\n    aiBehavior,\n    getEnemy,\n    getPlayerTurn,\n    getPlayerName,\n    attackOtherGameboard,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://a/./src/player.js?");

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