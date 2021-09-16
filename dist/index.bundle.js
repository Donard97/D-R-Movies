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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-size: 62.5%;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  padding: 1rem;\\r\\n  font-size: 2rem;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  background: #133954;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  padding: 1rem 2rem;\\r\\n  color: white;\\r\\n  font-weight: 600;\\r\\n  font-size: 3rem;\\r\\n}\\r\\n\\r\\n.show-list {\\r\\n  padding: 1rem 2rem;\\r\\n  color: white;\\r\\n  font-weight: 600;\\r\\n  font-size: 3rem;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  background: #133954;\\r\\n  padding: 2rem;\\r\\n  font-size: 2rem;\\r\\n  text-align: center;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  color: white;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.movies {\\r\\n  width: 80%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.movies-list {\\r\\n  padding: 2rem;\\r\\n  list-style: none;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 4rem;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.item img {\\r\\n  width: 25rem;\\r\\n  cursor: pointer;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.item img:hover {\\r\\n  width: 27rem;\\r\\n  box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.comments,\\r\\n.reservation {\\r\\n  font-size: 1.5rem;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.comments:hover,\\r\\n.reservation:hover {\\r\\n  background: #a7c54c;\\r\\n  color: white;\\r\\n  border: 1px solid #a7c54c;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.info {\\r\\n  display: flex;\\r\\n  font-size: 2.2rem;\\r\\n  justify-content: space-between;\\r\\n  padding: 1rem;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  display: inline;\\r\\n  width: 2.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.search {\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.col-12 {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  position: fixed;\\r\\n  background-color: rgba(5, 5, 5, 0.849);\\r\\n  height: 100vh;\\r\\n  width: 100%;\\r\\n  font-size: 2rem;\\r\\n  padding: 20rem;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  position: absolute;\\r\\n  width: 80%;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  display: flex;\\r\\n  gap: 5rem;\\r\\n  align-items: center;\\r\\n  color: rgb(221, 216, 216);\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  height: 60rem;\\r\\n  border-radius: 1rem;\\r\\n  border: rgba(255, 255, 255, 0.856) solid 0.1rem;\\r\\n}\\r\\n\\r\\n.summary {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  color: rgb(226, 213, 213);\\r\\n}\\r\\n\\r\\n.details {\\r\\n  line-height: 4.5rem;\\r\\n  list-style: none;\\r\\n  font-size: 1.8rem;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  font-size: 17px;\\r\\n}\\r\\n\\r\\n.description b {\\r\\n  line-height: 3.5rem;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.spec {\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.resolution {\\r\\n  background-color: #a7c54c;\\r\\n  color: #000;\\r\\n  width: 4.5rem;\\r\\n  text-align: center;\\r\\n  border-radius: 2rem;\\r\\n}\\r\\n\\r\\n.rating {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\n.exit {\\r\\n  position: fixed;\\r\\n  font-size: 5rem;\\r\\n  right: 0;\\r\\n  padding: 5rem;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  overflow: hidden;\\r\\n  overflow-y: scroll;\\r\\n  height: 30rem;\\r\\n  border-radius: 1rem;\\r\\n  border: rgba(255, 255, 255, 0.856) solid 0.1rem;\\r\\n  padding: 1rem 0.5rem;\\r\\n  position: absolute;\\r\\n  width: 35%;\\r\\n  float: right;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.list-item::-webkit-scrollbar-track {\\r\\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\r\\n  border-radius: 10px;\\r\\n  background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\n.list-item::-webkit-scrollbar {\\r\\n  width: 12px;\\r\\n  background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\n.list-item::-webkit-scrollbar-thumb {\\r\\n  border-radius: 10px;\\r\\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\r\\n  background-color: #555;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  width: 95%;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  border: 1px solid #a7c54c;\\r\\n  font-weight: 600;\\r\\n  background: transparent;\\r\\n  width: 25%;\\r\\n  border-radius: 10px;\\r\\n  margin-right: 0;\\r\\n  color: white;\\r\\n  font-size: 1.5rem;\\r\\n  padding: 4px 0;\\r\\n}\\r\\n\\r\\n.comment-btn:hover {\\r\\n  background: #a7c54c;\\r\\n  font-size: 1.8rem;\\r\\n}\\r\\n\\r\\n.commentH3 {\\r\\n  font-size: 3rem;\\r\\n  padding: 1rem;\\r\\n  color: #a7c54c;\\r\\n  margin-top: 8rem;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  background: transparent;\\r\\n  padding: 0.7rem;\\r\\n  font-weight: 600;\\r\\n  border: 1px solid white;\\r\\n  border-radius: 10px;\\r\\n  color: white;\\r\\n  font-size: 1.5rem;\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  background: transparent;\\r\\n  border: 1px solid white;\\r\\n  border-radius: 10px;\\r\\n  padding: 1rem;\\r\\n  color: white;\\r\\n  font-weight: 600;\\r\\n  width: 40%;\\r\\n  height: 15rem;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayElements.js":
/*!********************************!*\
  !*** ./src/displayElements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes */ \"./src/getLikes.js\");\n/* harmony import */ var _postLikes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postLikes */ \"./src/postLikes.js\");\n\n\n\nconst displayShows = (shows, moviesList) => {\n  for (let i = 0; i <= shows.length - 1; i += 1) {\n    // Create li for each show\n    const item = document.createElement('li');\n    item.id = `movie_${shows[i].id}`;\n    item.className = 'item';\n\n    // Create img for display the show\n    const img = document.createElement('img');\n    img.setAttribute('src', shows[i].image.medium);\n    item.appendChild(img);\n\n    // Create div for title, likes\n    const info = document.createElement('div');\n    const title = document.createElement('p');\n    const likeDiv = document.createElement('div');\n    const like = document.createElement('ion-icon');\n    const likeDisplay = document.createElement('span');\n\n    info.className = 'info';\n    title.className = 'title';\n    likeDiv.className = 'like-div';\n    like.className = 'like';\n    title.textContent = `${shows[i].name}`;\n    like.setAttribute('name', 'heart');\n\n    like.id = `${item.id}`;\n    item.appendChild(info);\n    info.appendChild(title);\n    info.appendChild(likeDiv);\n    info.appendChild(like);\n    info.appendChild(likeDisplay);\n\n    // Create comments and reservations buttons\n    const commentsBtn = document.createElement('button');\n    commentsBtn.className = 'btn btn-dark comments';\n    commentsBtn.innerHTML = 'Comments';\n\n    const reservationsBtn = document.createElement('button');\n    reservationsBtn.className = 'btn btn-dark reservation';\n    reservationsBtn.innerHTML = 'Reservations';\n    item.appendChild(commentsBtn);\n    item.appendChild(reservationsBtn);\n\n    // Make elements child of the movie container\n    moviesList.appendChild(item);\n\n    like.addEventListener('click', async (e) => {\n      await (0,_postLikes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.id);\n      const getReq = await (0,_getLikes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      for (let i = 0; i <= getReq.length - 1; i += 1) {\n        if (getReq[i].item_id === e.target.id) {\n          likeDisplay.innerHTML = `${getReq[i].likes}`;\n        }\n      }\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);\n\n//# sourceURL=webpack://webpack-demo/./src/displayElements.js?");

/***/ }),

/***/ "./src/getComments.js":
/*!****************************!*\
  !*** ./src/getComments.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (button) => {\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KY0cha7s0RdDoyqcn23E/comments?item_id=${button}`);\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://webpack-demo/./src/getComments.js?");

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = async () => {\n  const response = await fetch(' https://api.tvmaze.com/shows');\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://webpack-demo/./src/getData.js?");

/***/ }),

/***/ "./src/getLikes.js":
/*!*************************!*\
  !*** ./src/getLikes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JCBgN543iPS5iR49A5FE/likes');\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://webpack-demo/./src/getLikes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _displayElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayElements */ \"./src/displayElements.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\n\n\n\n\nconst allShowsContainer = document.querySelector('.movies-list');\n\nwindow.addEventListener('load', async () => {\n  const shows = await (0,_getData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const sixShows = shows.slice(0, 20);\n\n  await (0,_displayElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sixShows, allShowsContainer);\n\n  const commentPopup = [...document.querySelectorAll('.comments')];\n  (0,_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(commentPopup, sixShows);\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments */ \"./src/getComments.js\");\n/* harmony import */ var _postComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postComments */ \"./src/postComments.js\");\n/* harmony import */ var _renderComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderComments */ \"./src/renderComments.js\");\n/* eslint-disable no-unused-expressions */\n\n\n\n\n\nconst getCommentCount = (section, lists) => {\n  section.textContent = '';\n  lists.length >= 1 ? (section.textContent = `Comments (${lists.length})`) : (section.textContent = 'Comments (0)');\n};\n\nconst modalBody = async (buttons, showsList) => {\n  for (let i = 0; i < buttons.length; i += 1) {\n    buttons[i].addEventListener('click', async () => {\n      const popupMenu = document.querySelector('.popup-menu');\n\n      popupMenu.classList.remove('hidden');\n\n      const overlay = document.createElement('div');\n      overlay.className = 'overlay';\n      while (popupMenu.firstChild) {\n        popupMenu.removeChild(popupMenu.lastChild);\n      }\n      const modal = document.createElement('div');\n      modal.classList.add('popup');\n\n      const img = document.createElement('img');\n      img.className = 'popup-img';\n      img.setAttribute('src', showsList[i].image.original);\n\n      const summary = document.createElement('div');\n      summary.className = 'summary';\n\n      const description = document.createElement('div');\n      description.className = 'description';\n      description.innerHTML = `${showsList[i].summary}`;\n\n      const spec = document.createElement('div');\n      spec.className = 'spec';\n      spec.innerHTML = `<p class=\"resolution\">HD</p>\n                <p class=\"rating\"><ion-icon name=\"star\"></ion-icon>${showsList[i].rating.average}</p>\n                <p class=\"runtime\">${showsList[i].runtime} min</p>`;\n\n      const details = document.createElement('ul');\n      details.className = 'details';\n      details.innerHTML = `<li class=\"country\">Country: ${showsList[i].network.country.name}</li>\n                  <li class=\"genres\">Genres: ${showsList[i].genres}</li>\n                  <li class=\"relese-data\">Release: ${showsList[i].premiered}</li>\n                  <li class=\"duration\">Language: ${showsList[i].language}</li>`;\n\n      const commentSection = document.createElement('h3');\n      commentSection.classList.add('number');\n      const addComment = document.createElement('h3');\n      addComment.classList.add('commentH3');\n      addComment.textContent = 'Add a comment';\n      addComment.style.marginBottom = '1rem';\n      const commentForm = document.createElement('form');\n      commentForm.classList.add('form');\n      const userName = document.createElement('input');\n      userName.classList.add('name');\n      userName.placeholder = 'Your name';\n      const userMsg = document.createElement('textarea');\n      userMsg.classList.add('message');\n      userMsg.placeholder = 'Your insights';\n      const commentButton = document.createElement('button');\n      commentButton.classList.add('comment-btn');\n      commentButton.textContent = 'Submit';\n      commentButton.id = `movie_cmt_${showsList[i].id}`;\n\n      const commentDiv = document.createElement('div');\n      commentDiv.classList.add('list-item');\n\n      const comments = await (0,_getComments__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(commentButton.id);\n\n      (0,_renderComments__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commentDiv, comments);\n      comments.length >= 1 ? (commentSection.textContent = `Comments (${comments.length})`) : (commentSection.textContent = 'Comments (0)');\n\n      commentButton.addEventListener('click', async (e) => {\n        e.preventDefault();\n        await (0,_postComments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentButton.id, userName, userMsg);\n        const getCmts = await (0,_getComments__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(commentButton.id);\n        getCommentCount(commentSection, getCmts);\n        (0,_renderComments__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commentDiv, getCmts);\n        userName.value = '';\n        userMsg.value = '';\n      });\n\n      const exit = document.createElement('div');\n      exit.innerHTML = '<ion-icon class=\"exit\" name=\"exit-outline\"></ion-icon>';\n      exit.addEventListener('click', () => {\n        popupMenu.classList.add('hidden');\n      });\n\n      summary.append(description, spec, commentSection, commentDiv, addComment, commentForm);\n      modal.append(img, summary);\n      commentForm.append(userName, userMsg, commentButton);\n      overlay.appendChild(modal);\n      popupMenu.appendChild(overlay);\n      popupMenu.appendChild(exit);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalBody);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modal.js?");

/***/ }),

/***/ "./src/postComments.js":
/*!*****************************!*\
  !*** ./src/postComments.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postComments = async (button, userName, comment) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KY0cha7s0RdDoyqcn23E/comments', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: button,\n      username: userName.value,\n      comment: comment.value,\n    }),\n    headers: {\n      'Content-type': 'application/json; Charset=UTF-8',\n    },\n  });\n\n  return response.text();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComments);\n\n//# sourceURL=webpack://webpack-demo/./src/postComments.js?");

/***/ }),

/***/ "./src/postLikes.js":
/*!**************************!*\
  !*** ./src/postLikes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postLikes = async (item) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JCBgN543iPS5iR49A5FE/likes', {\n    method: 'POST',\n    body: JSON.stringify({ item_id: item }),\n    headers: {\n      'Content-type': 'application/json; Charset=UTF-8',\n    },\n  });\n\n  return response.text();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);\n\n//# sourceURL=webpack://webpack-demo/./src/postLikes.js?");

/***/ }),

/***/ "./src/renderComments.js":
/*!*******************************!*\
  !*** ./src/renderComments.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showComments = (commentContainer, list) => {\n  if (list.length >= 1) {\n    commentContainer.innerHTML = '';\n    for (let i = 0; i <= list.length - 1; i += 1) {\n      const commentsParagraph = document.createElement('p');\n      commentsParagraph.innerHTML = `${list[i].creation_date} ${list[i].username} ${list[i].comment}`;\n      commentContainer.appendChild(commentsParagraph);\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComments);\n\n//# sourceURL=webpack://webpack-demo/./src/renderComments.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;