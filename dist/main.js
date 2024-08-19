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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody{\r\n    font-family: 'Roboto'; \r\n    font-size: 22px;\r\n    display: flex;\r\n    background-color: #f1f1f1;\r\n\r\n}\r\n#content{\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n    background-color: white;\r\n    height: auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: 150px 150px 150px 150px 150px;\r\n    gap: 20px;\r\n}\r\n.today{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: space-between;\r\n    height: 600px;\r\n    background-color: white;\r\n    height: auto;\r\n\r\n   \r\n}\r\n\r\n.side-bar{\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: #f1f1f1;\r\n    width: 350px;\r\n    min-height: 100vh;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.view img{\r\n    width: 20px;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.top{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 30px;\r\n}\r\n.view{\r\n    border: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100px;\r\n}\r\n#today img{\r\n    width: 20px;\r\n    margin-right: 35px;\r\n}\r\n\r\n.view span{\r\n    padding: 10px;\r\n    margin: 10px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n}\r\n#today span{\r\n    position: relative;\r\n    left: -35px;\r\n}\r\n.add-btn{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: none;\r\n    font-size: 20px;\r\n    margin-right: 25px;\r\n    cursor: pointer;\r\n}\r\n.add-btn > *{\r\n    margin: 10px;\r\n}\r\n\r\n#add-task-form{\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 20px;\r\n    border: 1px solid #374151;\r\n    border-radius: 10px;\r\n    max-width: 400px;\r\n    height: auto;\r\n    margin-left: 300px;\r\n    margin-top: 100px;\r\n    \r\n   \r\n}\r\n.task-item{\r\n    width: 300px;\r\n    height: 100px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n    white-space: normal;\r\n    text-overflow: ellipsis;\r\n    max-width: 100%;\r\n    margin: 0;\r\n    overflow-y: auto;\r\n    max-height: 500px;\r\n    border-radius: 12px;\r\n}\r\n\r\n.task-item > p, .task-item >h3{\r\n    font-size: 16px;\r\n}\r\n.priority-color{\r\n    height: 25px;\r\n    width: 25px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n.description{\r\n    font-size: 16px;\r\n}\r\n#submit{\r\n    border-radius: 12px;\r\n    background-color: greenyellow;\r\n}\r\n\r\n#cancel{\r\n    border-radius: 12px;\r\n    background-color: red;\r\n}\r\n\r\n.taskBtn{\r\n    width: 60px;\r\n    font-size: 10px;\r\n    border-radius: 12px;\r\n    border: none;\r\n}\r\n.taskBtn:hover{\r\n    background-color: #64748b;\r\n    cursor: pointer;\r\n}\r\n#form-container{\r\n    width: 100%;\r\n    background: white;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayToday.js":
/*!*****************************!*\
  !*** ./src/displayToday.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayCompleted: () => (/* binding */ displayCompleted),\n/* harmony export */   displayToday: () => (/* binding */ displayToday),\n/* harmony export */   displayUpcoming: () => (/* binding */ displayUpcoming)\n/* harmony export */ });\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\nfunction displayToday(){\r\n    const allTasks = document.querySelectorAll('.task-item');\r\n    allTasks.forEach(task => task.style.display = 'none');\r\n    let tasksArray = (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();\r\n    const todaysTasks = (0,_filter__WEBPACK_IMPORTED_MODULE_2__.getTodayTasks)(tasksArray);\r\n    \r\n    todaysTasks.forEach(task => {\r\n        console.log('were here today');\r\n        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderTask)(task, content, todaysTasks);\r\n    })\r\n}\r\nfunction displayUpcoming(){\r\n    const allTasks = document.querySelectorAll('.task-item');\r\n    allTasks.forEach(task => task.style.display = 'none');\r\n    let tasksArray = (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();\r\n    const upcomingTasks = (0,_filter__WEBPACK_IMPORTED_MODULE_2__.getUpcomingTasks)(tasksArray);\r\n\r\n    upcomingTasks.forEach(task => {\r\n        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderTask)(task, content, upcomingTasks);\r\n    })\r\n}\r\n\r\nfunction displayCompleted(){\r\n    const allTasks = document.querySelectorAll('.task-item');\r\n    allTasks.forEach(task => task.style.display = 'none');\r\n    let tasksArray = (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();\r\n    const completedTasks = (0,_filter__WEBPACK_IMPORTED_MODULE_2__.getCompletedTasks)(tasksArray);\r\n\r\n    completedTasks.forEach(task => {\r\n        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderTask)(task, content, completedTasks);\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/displayToday.js?");

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCompletedTasks: () => (/* binding */ getCompletedTasks),\n/* harmony export */   getTodayTasks: () => (/* binding */ getTodayTasks),\n/* harmony export */   getUpcomingTasks: () => (/* binding */ getUpcomingTasks)\n/* harmony export */ });\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n\r\n\r\nconst getTodayDate = () =>{\r\n    const today = new Date();\r\n    return today.toISOString().split('T')[0];\r\n}\r\n\r\nconst getTodayTasks = (todos) => {\r\n    const today = getTodayDate();\r\n    let taskArray = (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();\r\n    taskArray.forEach(task => {\r\n        console.log(today, task.dueDate);\r\n    })\r\n\r\n    return todos.filter(todo => todo.dueDate === today && !todo.completed);\r\n}\r\n\r\nconst getUpcomingTasks = (todos) => {\r\n    const today = getTodayDate();\r\n    return todos.filter(todo => todo.dueDate > today && !todo.completed);\r\n};\r\n\r\nconst getCompletedTasks = (todos) =>{\r\n    return todos.filter(todo => todo.completed);\r\n};\r\n\n\n//# sourceURL=webpack://todo-list/./src/filter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _images_calender_Month_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/calender_Month.svg */ \"./src/images/calender_Month.svg\");\n/* harmony import */ var _images_today_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/today.svg */ \"./src/images/today.svg\");\n/* harmony import */ var _images_event_completed_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/event_completed.svg */ \"./src/images/event_completed.svg\");\n/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/add.svg */ \"./src/images/add.svg\");\n/* harmony import */ var _displayToday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayToday */ \"./src/displayToday.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createTabs() {\r\n    console.log('we made it to createTabs');\r\n    const today = document.getElementById('today');\r\n    const todayIcon = document.createElement('img');\r\n    todayIcon.src = _images_today_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n    todayIcon.alt = 'today';\r\n    todayIcon.classList.add('icon');\r\n    today.appendChild(todayIcon);\r\n    const todayDiv = document.createElement('span');\r\n    todayDiv.textContent = 'Today';\r\n    today.appendChild(todayDiv);\r\n    const upcoming = document.getElementById('upcoming');\r\n    const upcomingDiv = document.createElement('span');\r\n\r\n    const calenderIcon = document.createElement('img');\r\n    calenderIcon.src = _images_calender_Month_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n    calenderIcon.alt = 'calender';\r\n    calenderIcon.classList.add('icon');\r\n    upcomingDiv.textContent = 'Upcoming';\r\n    upcoming.appendChild(calenderIcon);\r\n    upcoming.appendChild(upcomingDiv);\r\n   \r\n\r\n\r\n\r\n    const completed = document.getElementById('completed');\r\n    const completedIcon = document.createElement('img');\r\n    completedIcon.src = _images_event_completed_svg__WEBPACK_IMPORTED_MODULE_4__;\r\n    completedIcon.alt = 'completed';\r\n    completedIcon.classList.add('icon');\r\n\r\n    const completedDiv = document.createElement('span');\r\n    completedDiv.textContent = 'Completed';\r\n    completed.appendChild(completedIcon);\r\n    completed.appendChild(completedDiv);\r\n\r\n    const addBtn =  document.querySelector('.add-btn');\r\n    const addBtnImg = document.createElement('img');\r\n    addBtnImg.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_5__;\r\n    addBtnImg.alt = 'add';\r\n    const addBtnDiv = document.createElement('span');\r\n    addBtnDiv.textContent = 'Add Task';\r\n    addBtn.appendChild(addBtnImg);\r\n    addBtn.appendChild(addBtnDiv);\r\n    \r\n    addBtn.classList.add('add-btn');\r\n    addBtn.classList.add('view');\r\n\r\n    const inbox = document.getElementById('inbox');\r\n    const projects = document.getElementById('new-projects');\r\n}\r\n\r\n\r\n\r\ncreateTabs();\r\n(0,_today__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   loadTasks: () => (/* binding */ loadTasks),\n/* harmony export */   saveTasks: () => (/* binding */ saveTasks)\n/* harmony export */ });\n\r\n\r\nfunction saveTasks(tasks){\r\n    localStorage.setItem('tasks', JSON.stringify(tasks));\r\n \r\n}\r\nfunction loadTasks(){\r\n    let tasks = localStorage.getItem('tasks');\r\n    if(!tasks){\r\n        return [];\r\n    }\r\n    return JSON.parse(tasks);\r\n}\r\n\r\nfunction deleteTask(taskTitle){\r\n    let tasks = loadTasks();\r\n    tasks = tasks.filter(task => task.title !== taskTitle );\r\n    saveTasks(tasks);\r\n}\n\n//# sourceURL=webpack://todo-list/./src/localstorage.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTask: () => (/* binding */ renderTask)\n/* harmony export */ });\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* harmony import */ var _displayToday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayToday */ \"./src/displayToday.js\");\n\r\n\r\nfunction renderTask(task, container, tasksArray) {\r\n    const taskItem = document.createElement('div');\r\n    taskItem.classList.add('task-item');\r\n\r\n    taskItem.innerHTML = `\r\n        <h3>${task.title}</h3>\r\n        <p class=\"description\" style=\"display:none\">${task.description}</p>\r\n        <p>Due date: ${task.dueDate}</p>\r\n        <button class=\"complete-btn taskBtn\">${task.completed ? \"restore task\": \"Complete\"}</button>\r\n        <button class=\"delete-btn taskBtn\">Delete</button>\r\n        <button class=\"descriptionB taskBtn\">Description</button>\r\n    `;\r\n    \r\n    \r\n\r\n    const completeBtn = taskItem.querySelector('.complete-btn');\r\n    const deleteBtn = taskItem.querySelector('.delete-btn');\r\n    \r\n    const descriptionBtn = taskItem.querySelector('.descriptionB');\r\n    \r\n    descriptionBtn.addEventListener('click', () =>{\r\n        const description = taskItem.querySelector('.description');\r\n        if(description.style.display === 'none'){\r\n            description.style.display = 'block';\r\n            descriptionBtn.textContent = 'Hide Description';\r\n        }\r\n        else{\r\n            description.style.display = 'none';\r\n            descriptionBtn.textContent = 'Description';\r\n        }\r\n    })\r\n\r\n    completeBtn.addEventListener('click', () => {\r\n        const initialState = task.completed;\r\n        const alltasks = (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();\r\n        task.completed = !task.completed;\r\n        completeBtn.textContent = task.completed ? \"restore task\": \"Complete\";\r\n        const taskIndex = alltasks.findIndex(t => t.title === task.title);\r\n\r\n        if(taskIndex !== -1){\r\n            alltasks[taskIndex].completed = task.completed;\r\n        }\r\n\r\n        (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.saveTasks)(alltasks);\r\n\r\n        if(task.dueDate === new Date().toISOString().split('T')[0] && (!initialState)){\r\n            (0,_displayToday__WEBPACK_IMPORTED_MODULE_1__.displayToday)();\r\n        }\r\n        else if(task.dueDate > new Date().toISOString().split('T')[0] && (!initialState)){\r\n            (0,_displayToday__WEBPACK_IMPORTED_MODULE_1__.displayUpcoming)();\r\n    }\r\n    else if(initialState){\r\n        (0,_displayToday__WEBPACK_IMPORTED_MODULE_1__.displayCompleted)();\r\n    }\r\n});\r\n\r\n\r\n\r\n\r\n\r\n    deleteBtn.addEventListener('click', () => {\r\n        // Remove task from the array and re-render the task list\r\n        tasksArray.filter(t => t !== task);\r\n        taskItem.remove(); // Remove the task from the DOM\r\n        (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(task.title); // Remove the task from local storage\r\n    });\r\n\r\n    const priorityColor = document.createElement('div');\r\n    priorityColor.classList.add('priority-color');\r\n\r\n    switch (task.priority) {\r\n        case 'low':\r\n            taskItem.style.backgroundColor = 'green';\r\n            break;\r\n        case 'medium':\r\n            taskItem.style.backgroundColor = 'orange';\r\n            break;\r\n        case 'high':\r\n            taskItem.style.backgroundColor = 'red';\r\n            break;\r\n    }\r\n    taskItem.appendChild(priorityColor);\r\n\r\n    container.appendChild(taskItem);\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Remove the extra closing curly brace\n\n//# sourceURL=webpack://todo-list/./src/render.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n/* harmony import */ var _displayToday__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayToday */ \"./src/displayToday.js\");\n\r\n\r\n \r\n\r\n\r\n\r\n\r\nfunction loadToday() {\r\n\r\n    let tasksArray = (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();\r\n\r\n    tasksArray.forEach(task => {\r\n        if(task.dueDate < new Date().toISOString().split('T')[0] && !task.completed){\r\n            (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(task);\r\n        }\r\n    });\r\n\r\n    \r\n    const content = document.getElementById('content');\r\n\r\n\r\n\r\n    const today = document.createElement('div');\r\n    \r\n\r\n    const addTask = document.createElement('form');\r\n    today.classList.add('today');\r\n    document.body.appendChild(today);\r\n    addTask.style.display = 'none';\r\n    const addBtn = document.getElementById('add-btn');\r\n    addBtn.classList.add('view');\r\n    addTask.setAttribute('id', 'add-task-form');\r\n    addTask.innerHTML = `\r\n        <label for=\"task-title\">Task title:</label>\r\n        <input type=\"text\" id=\"task-title\" name=\"taskTitle\" placeholder=\"Task title\" required>\r\n\r\n        <label for=\"task-description\">Task description:</label>\r\n        <textarea id=\"description\" name=\"description\" placeholder=\"Enter task description\" rows=\"10\" cols=\"50\"></textarea>\r\n        \r\n        <label for=\"task-date\">Due date:</label>\r\n        <input type=\"date\" id=\"task-date\" name=\"taskDate\" required>\r\n\r\n        <label for=\"priority\">Priority:</label>\r\n        <select id=\"priority\" name=\"priority\" required>\r\n            <option value=\"low\" style=\"color: green;\">Low</option>\r\n            <option value=\"medium\" style=\"color: orange;\">Medium</option>\r\n            <option value=\"high\" style=\"color:red;\">High</option>\r\n        </select>\r\n\r\n        <button type=\"submit\" id=\"submit\">Add Task</button>\r\n        <button type=\"button\" id=\"cancel\">cancel </button>\r\n    `;\r\n\r\n    const formContainer = document.getElementById('form-container');\r\n    formContainer.appendChild(addTask);\r\n  \r\n    const cancel = document.getElementById('cancel');\r\n    cancel.addEventListener('click', () =>{\r\n        addTask.style.display = 'none';\r\n        addBtn.style.display = 'flex';\r\n    })\r\n\r\n    addBtn.addEventListener('click', () => {\r\n        addTask.style.display = 'flex';\r\n        const tasks = document.querySelectorAll('.task-item');\r\n        tasks.forEach(task => task.style.display = 'none');\r\n   \r\n    });\r\n\r\n    addTask.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n\r\n      \r\n\r\n        const title = document.getElementById('task-title').value;\r\n        const description = document.getElementById('description').value;\r\n        const dueDate = document.getElementById('task-date').value;\r\n        const priority = document.getElementById('priority').value;\r\n\r\n        const duplicate = tasksArray.find(task => task.title === title);\r\n        if(duplicate){\r\n            alert('Task with the same title already exists');\r\n            return;\r\n        }\r\n\r\n        const newTodo = new _todos__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority);\r\n        tasksArray.push(newTodo);\r\n\r\n        (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.saveTasks)(tasksArray);\r\n\r\n        \r\n\r\n        addTask.style.display = 'none';\r\n\r\n\r\n    });\r\n\r\n    const todayTasks = document.getElementById('today');\r\n    todayTasks.addEventListener('click', () =>{\r\n        (0,_displayToday__WEBPACK_IMPORTED_MODULE_4__.displayToday)();\r\n    })\r\n    const upcoming = document.getElementById('upcoming');\r\n    upcoming.addEventListener('click', () =>{\r\n        (0,_displayToday__WEBPACK_IMPORTED_MODULE_4__.displayUpcoming)();\r\n    })\r\n    const completed = document.getElementById('completed');\r\n    completed.addEventListener('click', () =>{\r\n        (0,_displayToday__WEBPACK_IMPORTED_MODULE_4__.displayCompleted)();\r\n        console.log('completed clicked');\r\n    })\r\n\r\n  \r\n\r\n       \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadToday);\r\n\n\n//# sourceURL=webpack://todo-list/./src/today.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo{\r\n    constructor(title, description, dueDate, priority){\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.completed = false;\r\n    }\r\n\r\n    setDescription(description){\r\n        this.description = description;\r\n    }\r\n    getDescription(){\r\n        return this.description;\r\n    }\r\n    setDueDate(dueDate){\r\n        this.dueDate = dueDate;\r\n    }\r\n    getDueDate(){\r\n        return this.dueDate;\r\n    }\r\n    setPriority(priority){\r\n        this.priority = priority;\r\n    }\r\n    getPriority(){\r\n        return this.priority;\r\n    }\r\n    toggleComplete(){\r\n        this.completed = !this.completed;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/todos.js?");

/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af3b66aebbb2d4b249a2.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/add.svg?");

/***/ }),

/***/ "./src/images/calender_Month.svg":
/*!***************************************!*\
  !*** ./src/images/calender_Month.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b90fba709210c502532c.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/calender_Month.svg?");

/***/ }),

/***/ "./src/images/event_completed.svg":
/*!****************************************!*\
  !*** ./src/images/event_completed.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1d788fb37fa149f95b3.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/event_completed.svg?");

/***/ }),

/***/ "./src/images/today.svg":
/*!******************************!*\
  !*** ./src/images/today.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae41a010bd020cce702f.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/today.svg?");

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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