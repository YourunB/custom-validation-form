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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.sass":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.sass ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  padding: 0;\n  margin: 0;\n  font-family: monospace;\n  overflow-x: hidden;\n}\n\n.container {\n  min-height: 100vh;\n  width: 100%;\n  background: #000000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.form {\n  border-radius: 3px;\n  padding: 10px;\n  min-height: 200px;\n  max-width: 400px;\n  width: 100%;\n  background: #ffffff;\n  overflow-y: auto;\n  opacity: 1;\n  transition: 1s;\n}\n\n.form h3 {\n  text-align: center;\n}\n\n.form__input,\n.form__msg {\n  width: calc(100% - 10px);\n  font-family: monospace;\n  padding: 5px;\n  outline: none;\n  font-weight: 700;\n  font-size: 1.2em;\n}\n\n.form__input {\n  border: none;\n  border-bottom: solid 2px #484848;\n}\n\n.form__msg {\n  height: 100px;\n  overflow-y: auto;\n  border-radius: 3px;\n  border: solid 2px #484848;\n}\n\n.form button {\n  display: block;\n  outline: none;\n  margin: auto;\n  border: none;\n  padding: 5px;\n  color: #ffffff;\n  font-weight: 700;\n  border-radius: 3px;\n  background-color: #78c223;\n  transition: 1s;\n}\n\n.form_hide {\n  opacity: 0;\n  transform: translateX(-100vw);\n}\n\n.btn-open {\n  display: block;\n  width: 150px;\n  height: 150px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  position: absolute;\n  font-weight: 700;\n  transition: 1s;\n  border: none;\n  outline: none;\n  opacity: 1;\n  font-size: 1.5em;\n}\n\n.btn-open_hide {\n  transform: translateX(100vw);\n  opacity: 0;\n}\n\n.input-error {\n  border-color: #d3231d;\n}\n\n.error-message {\n  color: #d3231d;\n  font-size: 0.8em;\n  margin-top: 5px;\n}\n\n.modal {\n  position: fixed;\n  z-index: 100;\n  max-width: 500px;\n  min-height: 300px;\n  overflow-y: hidden;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  font-weight: 700;\n  color: #000000;\n  background-color: #ffffff;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(100vw, -50%);\n  font-size: 1.2em;\n  border-radius: 3px;\n  transition: 1s;\n}\n\n.modal_open {\n  transform: translate(-50%, -50%);\n}\n\n@media (hover: hover) {\n  .btn-open:hover,\n  .form button:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n  .btn-open:active,\n  .form button:active {\n    transition: 0.2s;\n    transform: scale(0.9);\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://custom-validation-form/./styles/style.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://custom-validation-form/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://custom-validation-form/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles/style.sass":
/*!***************************!*\
  !*** ./styles/style.sass ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.sass\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://custom-validation-form/./styles/style.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://custom-validation-form/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://custom-validation-form/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://custom-validation-form/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://custom-validation-form/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://custom-validation-form/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://custom-validation-form/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   handleCloseForm: () => (/* binding */ handleCloseForm),\n/* harmony export */   handleOpenForm: () => (/* binding */ handleOpenForm)\n/* harmony export */ });\n/* harmony import */ var _utils_formValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/formValidation.js */ \"./src/utils/formValidation.js\");\n/* harmony import */ var _utils_formSubmit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/formSubmit.js */ \"./src/utils/formSubmit.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _openFormButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./openFormButton.js */ \"./src/components/openFormButton.js\");\n\r\n\r\n\r\n\r\n\r\nconst form = document.createElement('form');\r\nform.className = 'form form_hide';\r\n\r\nconst handleCloseForm = () => {\r\n  form.classList.add('form_hide');\r\n  _openFormButton_js__WEBPACK_IMPORTED_MODULE_3__.openFormButton.classList.remove('btn-open_hide');\r\n}\r\n\r\nconst handleOpenForm = () => {\r\n  form.classList.remove('form_hide')\r\n  _openFormButton_js__WEBPACK_IMPORTED_MODULE_3__.openFormButton.classList.add('btn-open_hide')\r\n}\r\n\r\nconst formTitle = document.createElement('h3');\r\nformTitle.textContent = 'Тестовая форма';\r\n\r\nconst inputName = document.createElement('input');\r\ninputName.className = 'form__input';\r\ninputName.type = 'text';\r\ninputName.name = 'name';\r\ninputName.placeholder = 'Введите имя';\r\ninputName.required = true;\r\n\r\nconst inputMail = document.createElement('input');\r\ninputMail.className = 'form__input';\r\ninputMail.type = 'email';\r\ninputMail.name = 'email';\r\ninputMail.placeholder = 'Введите e-mail';\r\ninputMail.required = true;\r\n\r\nconst inputPhone = document.createElement('input');\r\ninputPhone.className = 'form__input';\r\ninputPhone.type = 'text';\r\ninputPhone.name = 'phone';\r\ninputPhone.placeholder = 'Введите телефон';\r\ninputPhone.required = true;\r\n\r\nconst areaMsg = document.createElement('textarea');\r\nareaMsg.className = 'form__msg';\r\nareaMsg.name = 'message';\r\nareaMsg.placeholder = 'Введите пожелания';\r\nareaMsg.required = true;\r\n\r\nconst btnSubmit = document.createElement('button');\r\nbtnSubmit.textContent = 'Отправить';\r\n\r\nbtnSubmit.addEventListener('click', async (event) => {\r\n  event.preventDefault();\r\n  const isValid = (0,_utils_formValidation_js__WEBPACK_IMPORTED_MODULE_0__.validateForm)(form);\r\n\r\n  if (isValid) {\r\n    const result = await (0,_utils_formSubmit_js__WEBPACK_IMPORTED_MODULE_1__.submitForm)(form);\r\n\r\n    if (result) {\r\n      if (result.msg) {\r\n        (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(result.msg);\r\n        handleCloseForm();\r\n        form.reset();\r\n      }\r\n\r\n      if (result.fields) {\r\n        for (const [key, message] of Object.entries(result.fields)) {\r\n          const inputField = form.querySelector(`[name=\"${key}\"]`);\r\n          const errorMessage = document.createElement('div');\r\n          errorMessage.className = 'error-message';\r\n          errorMessage.textContent = message;\r\n          inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);\r\n        }\r\n      }\r\n    } else {\r\n      console.error('Не удалось получить результат от сервера');\r\n    }\r\n  }\r\n});\r\n\r\nform.append(formTitle, inputName, inputMail, inputPhone, areaMsg, btnSubmit);\r\ndocument.body.appendChild(form);\r\n\r\nconst showError = (field, message) => {\r\n  const error = document.createElement('div');\r\n  error.className = 'error-message';\r\n  error.textContent = message;\r\n  field.parentNode.insertBefore(error, field);\r\n};\r\n\n\n//# sourceURL=webpack://custom-validation-form/./src/components/form.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n\r\nconst modal = document.createElement('div');\r\nmodal.className = 'modal';\r\n\r\nconst modalContent = document.createElement('div');\r\nmodalContent.className = 'modal__content';\r\n\r\nconst modalMessage = document.createElement('div');\r\nmodalMessage.id = 'modal__message';\r\n\r\nmodalContent.append(modalMessage);\r\nmodal.append(modalContent);\r\ndocument.body.append(modal);\r\n\r\nwindow.onclick = (e) => {\r\n  if (e.target === modal) {\r\n    document.body.style.overflow = '';\r\n    modal.classList.remove('modal_open');\r\n  }\r\n};\r\n\r\nconst openModal = (message) => {\r\n  const modal = document.querySelector('.modal');\r\n  modal.classList.add('modal_open')\r\n  const modalMessage = document.getElementById('modal__message');\r\n  modalMessage.textContent = message;\r\n  document.body.style.overflow = 'hidden';\r\n};\r\n\n\n//# sourceURL=webpack://custom-validation-form/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/openFormButton.js":
/*!******************************************!*\
  !*** ./src/components/openFormButton.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openFormButton: () => (/* binding */ openFormButton)\n/* harmony export */ });\nconst openFormButton = document.createElement('button');\r\nopenFormButton.className = 'btn-open';\r\nopenFormButton.textContent = 'Открыть';\n\n//# sourceURL=webpack://custom-validation-form/./src/components/openFormButton.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.sass */ \"./styles/style.sass\");\n/* harmony import */ var _components_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form.js */ \"./src/components/form.js\");\n/* harmony import */ var _components_openFormButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/openFormButton.js */ \"./src/components/openFormButton.js\");\n\r\n\r\n\r\n\r\n\r\nconst app = document.createElement('div');\r\napp.classList.add('container');\r\ndocument.body.append(app)\r\napp.append(_components_openFormButton_js__WEBPACK_IMPORTED_MODULE_2__.openFormButton, _components_form_js__WEBPACK_IMPORTED_MODULE_1__.form);\r\n\r\napp.addEventListener('click', (e) => {\r\n  if (e.target.classList.contains('container')) {\r\n    (0,_components_form_js__WEBPACK_IMPORTED_MODULE_1__.handleCloseForm)()\r\n  }\r\n})\r\n\r\n_components_openFormButton_js__WEBPACK_IMPORTED_MODULE_2__.openFormButton.addEventListener('click', (e) => {\r\n  e.stopPropagation();\r\n  (0,_components_form_js__WEBPACK_IMPORTED_MODULE_1__.handleOpenForm)()\r\n})\r\n\n\n//# sourceURL=webpack://custom-validation-form/./src/index.js?");

/***/ }),

/***/ "./src/utils/formSubmit.js":
/*!*********************************!*\
  !*** ./src/utils/formSubmit.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   submitForm: () => (/* binding */ submitForm)\n/* harmony export */ });\nconst submitForm = async (form) => {\r\n  const formData = new FormData(form);\r\n  const data = Object.fromEntries(formData.entries());\r\n\r\n  try {\r\n    const response = await fetch('http://localhost:9090/send', {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(data),\r\n    });\r\n\r\n    const result = await response.json();\r\n\r\n    if (response.ok) {\r\n      return { msg: result.message };\r\n    } else {\r\n      return { msg: result.message };\r\n    }\r\n  } catch (error) {\r\n    console.error('Ошибка при отправке формы:', error);\r\n    return { msg: 'Произошла ошибка, попробуйте еще раз.' };\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://custom-validation-form/./src/utils/formSubmit.js?");

/***/ }),

/***/ "./src/utils/formValidation.js":
/*!*************************************!*\
  !*** ./src/utils/formValidation.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateForm: () => (/* binding */ validateForm)\n/* harmony export */ });\nconst validateForm = (form) => {\r\n  let isValid = true;\r\n  \r\n  const errorElements = form.querySelectorAll('.error-message');\r\n  errorElements.forEach((el) => el.remove());\r\n\r\n  const requiredFields = form.querySelectorAll('input[required], textarea[required]');\r\n  requiredFields.forEach((field) => {\r\n    if (!field.value.trim()) {\r\n      isValid = false;\r\n      field.classList.add('input-error');\r\n      showError(field, 'Это поле обязательно для заполнения');\r\n    } else {\r\n      field.classList.remove('input-error');\r\n    }\r\n  });\r\n\r\n  const nameField = form.querySelector('input[type=\"text\"][placeholder=\"Введите имя\"]');\r\n  if (nameField && nameField.value) {\r\n    const namePattern = /^[A-ZА-ЯЁ][a-zа-яё]{2,}$/;\r\n    if (!namePattern.test(nameField.value)) {\r\n      isValid = false;\r\n      nameField.classList.add('input-error');\r\n      showError(nameField, 'Имя должно начинаться с заглавной буквы и иметь минимум 3 буквы');\r\n    } else {\r\n      nameField.classList.remove('input-error');\r\n    }\r\n  }\r\n\r\n  const emailField = form.querySelector('input[type=\"mail\"]');\r\n  if (emailField && emailField.value) {\r\n    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n    if (!emailPattern.test(emailField.value)) {\r\n      isValid = false;\r\n      emailField.classList.add('input-error');\r\n      showError(emailField, 'Введите корректный адрес электронной почты');\r\n    } else {\r\n      emailField.classList.remove('input-error');\r\n    }\r\n  }\r\n\r\n  const phoneField = form.querySelector('input[type=\"text\"][placeholder=\"Введите телефон\"]');\r\n  if (phoneField && phoneField.value) {\r\n    const phonePattern = /^\\+375(29|25|44|33|17|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99)\\d{7}$|^\\+7(9[0-9]{9})$/;\r\n    if (!phonePattern.test(phoneField.value)) {\r\n      isValid = false;\r\n      phoneField.classList.add('input-error');\r\n      showError(phoneField, 'Введите корректный номер телефона (например, +375298999111)');\r\n    } else {\r\n      phoneField.classList.remove('input-error');\r\n    }\r\n  }\r\n\r\n  return isValid;\r\n};\r\n\r\nconst showError = (field, message) => {\r\n  const error = document.createElement('div');\r\n  error.className = 'error-message';\r\n  error.textContent = message;\r\n  field.parentNode.insertBefore(error, field.nextSibling);\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://custom-validation-form/./src/utils/formValidation.js?");

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