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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car  {\n    constructor (id, make, model, year) {\n    this.id = id;\n    this.make = make;\n    this.model = model;\n    this.year = year; \n    }\n}\n\n//  created a car class with constructor parameters id, make, model, and year.  set each property with this.id = id (as an example)\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\n\n//selecting the html elements to use in JS\n\nconst submitForm = document.querySelector(\"#submitForm\");\nconst makeInput = document.querySelector(\"#makeInput\");\nconst modelInput = document.querySelector(\"#modelInput\");\nconst yearInput = document.querySelector(\"#yearInput\");\nconst carMakePara = document.querySelector(\"#car-make\");\nconst carModelPara = document.querySelector(\"#car-model\");\nconst carYearPara = document.querySelector(\"#car-year\");\nconst removeBtn = document.querySelector(\".removeBtn\");\nconst wishListUl = document.querySelector(\"#wishListContainer > ul\");\n\n\nconst wishList = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nsubmitForm.addEventListener(\"submit\", addCar);\nremoveBtn.addEventListener(\"click\", removeCar);\n\nfunction showCarDetails (car) {\n    carMakePara.textContent = car.make;\n    carModelPara.textContent = car.model\n    carYearPara.textContent = car.year;\n    //enable the remove button\n    removeBtn.disabled = false;\n    //storing information on the DOM button to be accessed later\n    removeBtn.setAttribute(\"data-carId\", car.id);\n}\n  \nfunction updateDOMList() {\n    //clear out any previous stuff from the UL\n    wishListUl.textContent = \"\";\n    //iterate over list of cars \n    wishList.list.forEach((car) => {\n        const tempLi = document.createElement(\"li\");\n        tempLi.textContent = `${car.make} : ${car.model}`;\n        tempLi.addEventListener(\"click\", () => showCarDetails(car));\n        wishListUl.append(tempLi);       \n    });\n}\n\n//takes in an event - event handler function\nfunction addCar(event) {\n  // done for submit event\n  event.preventDefault(); // Prevent the default form submission behavior\n  wishList.add(makeInput.value, modelInput.value, yearInput.value); // Call wishlist.add with input values\n  updateDOMList(wishList); // Update the DOM list\n}\n\n\n//   const makeInput = document.querySelector(\"makeInput\");\n//   const modelInput = document.querySelector(\"modelInput\");\n//   const yearInput = document.querySelector(\"yearInput\");\n\n//   const make = makeInput.value;\n//   const model = modelInput.value;\n//   const year = yearInput.value;\n\nfunction removeCar () {\n    const carId = removeBtn.getAttribute(\"data-carId\");\n    wishList.remove(carId);\n    updateDOMList();\n    carMakePara.textContent = \"\";\n    carModelPara.textContent = \"\";\n    carYearPara.textContent = \"\";\n    removeBtn.disable = true;\n}\n\n\n\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n \n \n// imported car from car.js - then need to create and export a WishList class - needs to have two properties list and nextId\n\n class WishList {\n    constructor () {\n    this.list = [];\n    this.nextId = 0;\n    } \n\n    add (make, model, year) {\n        const tempCar = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\n        this.list.push(tempCar);   \n    } \n    \n    remove (carId) {\n        this.list = this.list.filter((car) => {\n            return car.id != carId;\n        });\n    }\n}\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 			// no module.id needed
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