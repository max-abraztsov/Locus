"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./scss/zero.scss":
/*!************************!*\
  !*** ./scss/zero.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/zero.scss?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_zero_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/zero.scss */ \"./scss/zero.scss\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/logo.png */ \"./img/logo.png\");\n/* harmony import */ var _img_inside_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/inside.jpg */ \"./img/inside.jpg\");\n/* harmony import */ var _img_Play_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Play.png */ \"./img/Play.png\");\n/* harmony import */ var _img_main_img_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/main-img.png */ \"./img/main-img.png\");\n/* harmony import */ var _img_visual_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/visual.jpg */ \"./img/visual.jpg\");\n/* harmony import */ var _img_circle_rect_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/circle-rect.png */ \"./img/circle-rect.png\");\n/* harmony import */ var _img_circle_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/circle.png */ \"./img/circle.png\");\n/* harmony import */ var _img_circle_rect2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/circle-rect2.png */ \"./img/circle-rect2.png\");\n/* harmony import */ var _img_logos1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/logos1.png */ \"./img/logos1.png\");\n/* harmony import */ var _img_logos2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/logos2.png */ \"./img/logos2.png\");\n/* harmony import */ var _img_logos3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/logos3.png */ \"./img/logos3.png\");\n/* harmony import */ var _img_logos4_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/logos4.png */ \"./img/logos4.png\");\n/* harmony import */ var _img_expirience_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/expirience.jpg */ \"./img/expirience.jpg\");\n/* harmony import */ var _img_backtic_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/backtic.png */ \"./img/backtic.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    \r\n    // Tabs and scroll in navigation\r\n    const navigation = document.querySelector('.header__navigation'),\r\n          itemsChildren = navigation.querySelectorAll('.header__item'),\r\n          underLine = navigation.querySelector('.header__under'),\r\n          projects =document.querySelector('.projects'),\r\n          footer = document.querySelector('.footer'),\r\n          menuBurgerTab = document.querySelector('.header__burger');\r\n\r\n    underLine.style.width = `${itemsChildren[0].offsetWidth}px`;\r\n\r\n    function removeClass(){\r\n        itemsChildren.forEach( item => {\r\n            item.classList.remove('active__item');\r\n        });\r\n    }\r\n\r\n    function scrollTo(elem){\r\n        setTimeout(() =>{\r\n            window.scroll({\r\n                left:0,\r\n                top:elem.offsetTop,\r\n                behavior:'smooth'\r\n            }); \r\n        }, 500);\r\n    }\r\n\r\n    itemsChildren.forEach( item => {\r\n        item.addEventListener('click', () => {\r\n            removeClass();\r\n            \r\n            item.classList.add('active__item');\r\n            menuBurgerTab.classList.remove('active');\r\n            navigation.classList.remove('active');\r\n\r\n            underLine.style.cssText = `\r\n                width: ${item.offsetWidth}px;\r\n                transition: 0.4s ease-in-out;\r\n                margin-left: ${item.offsetLeft}px;\r\n            `;\r\n           \r\n            if (item.textContent == \"Contact\"){\r\n                scrollTo(footer);\r\n            } else if (item.textContent == \"About Us\"){\r\n                scrollTo(projects);\r\n            } else {\r\n                scrollTo(document);\r\n            }\r\n        });\r\n    });\r\n\r\n\r\n\r\n    // Menu-burger\r\n    const navigationBurger = document.querySelector('.header__navigation'),\r\n          menuBurger = document.querySelector('.header__burger');\r\n\r\n    menuBurger.addEventListener('click', (e) => {\r\n        menuBurger.classList.toggle('active');\r\n        navigationBurger.classList.toggle('active');\r\n        document.body.classList.toggle('lock');\r\n    });\r\n\r\n\r\n\r\n    //PostData\r\n    const form = document.querySelector('.footer__form form'),\r\n          nameInput = form.querySelector('[name=\"name\"]'),\r\n          emailInput = form.querySelector('[name=\"email\"]'),\r\n          descInput = form.querySelector('[name=\"description\"]');\r\n\r\n    async function workWithNewData (url, method, headers,body){\r\n        const newData = await fetch(url, {\r\n            method:method,\r\n            headers:headers,\r\n            body:JSON.stringify(body),\r\n        });\r\n        return await newData.json();\r\n    }\r\n\r\n    postData(form);\r\n\r\n    function postData(form){\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n\r\n            const bodyData = {\r\n                name:nameInput.value,\r\n                email:emailInput.value,\r\n                description:descInput.value\r\n            }\r\n\r\n            // const formData = new FormData();\r\n            // const convertJson = JSON.stringify(Object.fromEntries(formData.entries()));\r\n\r\n            workWithNewData('https://jsonplaceholder.typicode.com/users',\r\n            'POST',\r\n            {'Content-Type':'application/json'},\r\n            bodyData)\r\n            .then(data => {\r\n                console.log(data);\r\n            }).catch(() => {\r\n                console.error('Error');\r\n            }).finally(() => {\r\n                form.reset();\r\n            })\r\n        });\r\n    }\r\n\r\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./img/Play.png":
/*!**********************!*\
  !*** ./img/Play.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/Play.png\";\n\n//# sourceURL=webpack:///./img/Play.png?");

/***/ }),

/***/ "./img/backtic.png":
/*!*************************!*\
  !*** ./img/backtic.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/backtic.png\";\n\n//# sourceURL=webpack:///./img/backtic.png?");

/***/ }),

/***/ "./img/circle-rect.png":
/*!*****************************!*\
  !*** ./img/circle-rect.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/circle-rect.png\";\n\n//# sourceURL=webpack:///./img/circle-rect.png?");

/***/ }),

/***/ "./img/circle-rect2.png":
/*!******************************!*\
  !*** ./img/circle-rect2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/circle-rect2.png\";\n\n//# sourceURL=webpack:///./img/circle-rect2.png?");

/***/ }),

/***/ "./img/circle.png":
/*!************************!*\
  !*** ./img/circle.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/circle.png\";\n\n//# sourceURL=webpack:///./img/circle.png?");

/***/ }),

/***/ "./img/expirience.jpg":
/*!****************************!*\
  !*** ./img/expirience.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/expirience.jpg\";\n\n//# sourceURL=webpack:///./img/expirience.jpg?");

/***/ }),

/***/ "./img/inside.jpg":
/*!************************!*\
  !*** ./img/inside.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/inside.jpg\";\n\n//# sourceURL=webpack:///./img/inside.jpg?");

/***/ }),

/***/ "./img/logo.png":
/*!**********************!*\
  !*** ./img/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/logo.png\";\n\n//# sourceURL=webpack:///./img/logo.png?");

/***/ }),

/***/ "./img/logos1.png":
/*!************************!*\
  !*** ./img/logos1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/logos1.png\";\n\n//# sourceURL=webpack:///./img/logos1.png?");

/***/ }),

/***/ "./img/logos2.png":
/*!************************!*\
  !*** ./img/logos2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/logos2.png\";\n\n//# sourceURL=webpack:///./img/logos2.png?");

/***/ }),

/***/ "./img/logos3.png":
/*!************************!*\
  !*** ./img/logos3.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/logos3.png\";\n\n//# sourceURL=webpack:///./img/logos3.png?");

/***/ }),

/***/ "./img/logos4.png":
/*!************************!*\
  !*** ./img/logos4.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/logos4.png\";\n\n//# sourceURL=webpack:///./img/logos4.png?");

/***/ }),

/***/ "./img/main-img.png":
/*!**************************!*\
  !*** ./img/main-img.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/main-img.png\";\n\n//# sourceURL=webpack:///./img/main-img.png?");

/***/ }),

/***/ "./img/visual.jpg":
/*!************************!*\
  !*** ./img/visual.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/visual.jpg\";\n\n//# sourceURL=webpack:///./img/visual.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./js/script.js"));
/******/ }
]);