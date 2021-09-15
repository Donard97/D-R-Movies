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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\nheader {\\n  display: flex;\\n  background-color: rgba(197, 192, 192, 0.452);\\n  padding: 1rem;\\n  font-size: 2rem;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.logo {\\n  border-radius: 25px;\\n  background: #adb1a7;\\n  padding: 1rem;\\n}\\n\\n.show-list {\\n  border-radius: 5px;\\n  background: #adb1a7;\\n  padding: 1rem;\\n}\\n\\n.footer {\\n  position: relative;\\n  background-color: rgba(197, 192, 192, 0.452);\\n  padding: 2rem;\\n  font-size: 2rem;\\n  text-align: center;\\n  bottom: 0;\\n  width: 100%;\\n}\\n\\n.movies-list {\\n  padding: 2rem;\\n  list-style: none;\\n  justify-content: center;\\n  align-items: center;\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 4rem;\\n}\\n\\n.item {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  gap: 1rem;\\n}\\n\\n.item img {\\n  width: 25rem;\\n}\\n\\n.comments,\\n.reservation {\\n  font-size: 2rem;\\n}\\n\\n.info {\\n  display: flex;\\n  font-size: 2.2rem;\\n  justify-content: space-between;\\n  padding: 1rem;\\n  align-items: center;\\n}\\n\\n.title {\\n  margin: auto;\\n}\\n\\n.like {\\n  display: inline;\\n  width: 2.5rem;\\n}\\n\\n.search {\\n  padding: 1rem;\\n}\\n\\n.col-12 {\\n  width: 100%;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.overlay {\\n  position: fixed;\\n  background-color: rgba(5, 5, 5, 0.849);\\n  height: 100vh;\\n  width: 100%;\\n  font-size: 2rem;\\n  padding: 20rem;\\n}\\n\\n.popup {\\n  position: absolute;\\n  width: 80%;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  display: flex;\\n  gap: 5rem;\\n  align-items: center;\\n  color: rgb(221, 216, 216);\\n}\\n\\n.popup-img {\\n  height: 50rem;\\n  border-radius: 1rem;\\n  border: rgba(255, 255, 255, 0.856) solid 0.1rem;\\n}\\n\\n.summary {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5rem;\\n  color: rgb(226, 213, 213);\\n}\\n\\n.details {\\n  line-height: 4.5rem;\\n  list-style: none;\\n  font-size: 1.8rem;\\n  padding: 0;\\n}\\n\\n.summary-info {\\n  font-size: 2.2rem;\\n  line-height: 3.5rem;\\n}\\n\\n.summary-info b {\\n  line-height: 3.5rem;\\n  color: #fff;\\n}\\n\\n.spec {\\n  display: flex;\\n  gap: 2rem;\\n  font-size: 1.5rem;\\n}\\n\\n.resolution {\\n  background-color: #a7c54c;\\n  color: #000;\\n  width: 4.5rem;\\n  text-align: center;\\n  border-radius: 2rem;\\n}\\n\\n.rating {\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n}\\n\\n.exit {\\n  position: fixed;\\n  font-size: 3rem;\\n  right: 0;\\n  padding: 5rem;\\n  color: #fff;\\n}\\n\\n.popup-comments {\\n  display: flex;\\n  flex-direction: column;\\n  width: 50%;\\n  gap: 1rem;\\n}\\n\\ninput[type=\\\"search\\\"] {\\n  background: transparent;\\n  padding: 1rem;\\n  font-weight: 600;\\n  border: 1px solid white;\\n  border-radius: 10px;\\n  color: white;\\n}\\n\\ntextarea {\\n  background: transparent;\\n  border: 1px solid white;\\n  border-radius: 10px;\\n  padding: 1rem;\\n  color: white;\\n  font-weight: 600;\\n}\\n\\n.popup-comments h2 {\\n  font-size: 2.5rem;\\n  padding: 1rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes */ \"./src/getLikes.js\");\n/* harmony import */ var _postLikes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postLikes */ \"./src/postLikes.js\");\n\n\n\nconst displayShows = (shows, moviesList) => {\n  for (let i = 0; i <= shows.length - 1; i += 1) {\n    // const moviesList = document.querySelector('.movies-list');\n    // Create li for each show\n    const item = document.createElement('li');\n    item.id = `movie_${shows[i].id}`;\n    item.className = 'item';\n\n    // Create img for display the show\n    const img = document.createElement('img');\n    img.setAttribute('src', shows[i].image.medium);\n    item.appendChild(img);\n\n    // Create div for title, likes\n    const info = document.createElement('div');\n    const title = document.createElement('p');\n    const likeDiv = document.createElement('div');\n    const like = document.createElement('ion-icon');\n    const likeDisplay = document.createElement('span');\n\n    info.className = 'info';\n    title.className = 'title';\n    likeDiv.className = 'like-div';\n    like.className = 'like';\n    title.textContent = `${shows[i].name}`;\n    like.setAttribute('name', 'heart');\n\n    like.id = `${item.id}`;\n    item.appendChild(info);\n    info.appendChild(title);\n    info.appendChild(likeDiv);\n    info.appendChild(like);\n    info.appendChild(likeDisplay);\n\n    // Create comments and reservations buttons\n    const commentsBtn = document.createElement('button');\n    commentsBtn.className = 'btn btn-dark comments';\n    commentsBtn.innerHTML = 'Comments';\n\n    const reservationsBtn = document.createElement('button');\n    reservationsBtn.className = 'btn btn-dark reservation';\n    reservationsBtn.innerHTML = 'Reservations';\n    item.appendChild(commentsBtn);\n    item.appendChild(reservationsBtn);\n\n    // Make elements child of the movie container\n    moviesList.appendChild(item);\n\n    like.addEventListener('click', async (e) => {\n      await (0,_postLikes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.id);\n      const getReq = await (0,_getLikes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      for (let i = 0; i <= getReq.length - 1; i += 1) {\n        if (getReq[i].item_id === e.target.id) {\n          likeDisplay.innerHTML = `${getReq[i].likes}`;\n        }\n      }\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);\n\n\n//# sourceURL=webpack://webpack-demo/./src/displayElements.js?");

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = async () => {\n  const response = await fetch(' https://api.tvmaze.com/shows');\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://webpack-demo/./src/getData.js?");

/***/ }),

/***/ "./src/getLikes.js":
/*!*************************!*\
  !*** ./src/getLikes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JCBgN543iPS5iR49A5FE/likes');\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n\n//# sourceURL=webpack://webpack-demo/./src/getLikes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _displayElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayElements */ \"./src/displayElements.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n// import { divide } from 'lodash';\n\n\n\n\nconst showsContainer = document.querySelector('.movies-list');\n\nwindow.addEventListener('load', async () => {\n  // Launch showsList\n  const movies = await (0,_getData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const loadedShows = movies.slice(0, 18);\n\n  (0,_displayElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(loadedShows, showsContainer);\n\n  // const commnetsMenu = document.querySelector('.comments');\n  const commnetsMenu = document.querySelectorAll('.comments');\n  for (let i = 0; i < commnetsMenu.length; i += 1) {\n    commnetsMenu[i].addEventListener('click', () => {\n      const popupMenu = document.querySelector('.popup-menu');\n      while (popupMenu.firstChild) {\n        popupMenu.removeChild(popupMenu.lastChild);\n      }\n      popupMenu.classList.remove('hidden');\n      const popup = document.createElement('div');\n      popup.className = 'overlay';\n      popup.innerHTML = `<div class=\"popup\">\n        <img class=\"popup-img\" src=\"${loadedShows[i].image.original}\" alt=\"movie\" />\n        <div class=\"summary\">\n          <div class=\"summary-info\">\n          ${loadedShows[i].summary}\n          </div>\n          <div class=\"spec\">\n          <p class=\"resolution\">HD</p>\n          <p class=\"rating\"><ion-icon name=\"star\"></ion-icon>${loadedShows[i].rating.average}</p>\n          <p class=\"runtime\">${loadedShows[i].runtime} min</p>\n          </div>\n          <ul class=\"details\">\n            <li class=\"country\">Country: ${loadedShows[i].network.country.name}</li>\n            <li class=\"genres\">Genres: ${loadedShows[i].genres}</li>\n            <li class=\"relese-data\">Release: ${loadedShows[i].premiered}</li>\n            <li class=\"duration\">Language: ${loadedShows[i].language}</li>\n          </ul>\n          <div class=\"popup-comments\">\n          <h2>Add comment</h2>\n          <input class=\"comments-input\" type=\"search\" placeholder=\"Add comment\"/>\n          <textarea type=\"search\" placeholder=\"Add insights\"></textarea>\n          </div>\n          </div>\n        </div>\n      </div>`;\n      popupMenu.appendChild(popup);\n      // Exit from popup menu\n      const exit = document.createElement('div');\n      exit.innerHTML = '<ion-icon class=\"exit\" name=\"exit-outline\"></ion-icon>';\n      exit.addEventListener('click', () => {\n        popupMenu.classList.add('hidden');\n      });\n      popupMenu.appendChild(exit);\n    });\n  }\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/postLikes.js":
/*!**************************!*\
  !*** ./src/postLikes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// IEprda6bVbN0jOFjgzgK\n\nconst postLikes = async (item) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JCBgN543iPS5iR49A5FE/likes', {\n    method: 'POST',\n    body: JSON.stringify({ item_id: item }),\n    headers: {\n      'Content-type': 'application/json; Charset=UTF-8',\n    },\n  });\n\n  return response.text();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);\n\n\n//# sourceURL=webpack://webpack-demo/./src/postLikes.js?");

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