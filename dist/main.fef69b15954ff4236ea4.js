/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Sorting.js":
/*!********************!*\
  !*** ./Sorting.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sorting; });\nclass Sorting{\r\n    // конструктор принимает значения для задания параметров коллекции\r\n    constructor (collectionSize, sortSpeed, maxNum) {\r\n        this.collectionSize = collectionSize;\r\n        this.sortSpeed = sortSpeed;\r\n        this.maxNum = maxNum;\r\n    }\r\n    // геттеры, сеттеры добавлены, исключительно, для возможности расширения интерфейса\r\n    setCollectionSize (size) {\r\n        this.collectionSize = size;\r\n    }\r\n    setSortSpeed (speed) {\r\n        this.sortSpeed = speed;\r\n    }\r\n    setMaxNum (num) {\r\n        this.maxNum = num;\r\n    }\r\n    getCollectionSize () {\r\n        return this.collectionSize;\r\n    }\r\n    getSortSpeed () {\r\n        return this.sortSpeed;\r\n    }\r\n    getMaxNum () {\r\n        return this.maxNum;\r\n    }\r\n    // создание набора на основе заданных в конструкторе параметров\r\n    makeCollection () {\r\n        const collection = [];\r\n        const randNumber = (size) => Math.round(Math.random() * size);\r\n        for (let i = 0; i < this.collectionSize; i += 1) {\r\n            collection.push({\r\n                number: randNumber(this.maxNum),\r\n                property: \"\"\r\n            });\r\n        }\r\n        this.collection = collection;\r\n    }\r\n    // отрисовка переданной коллекции, принимает в параметры коллекцию и селектор в документе\r\n    render (collection, selector) {\r\n        const wrap = document.querySelector(selector);\r\n        const html = collection.reduce(\r\n            (acc, { number, property}) => `${acc}<span style = \"height:${number}px;\" class = \"${property}\"></span>`, \"\",\r\n        )\r\n        wrap.innerHTML = html;\r\n    }\r\n    // рекусрсивный процесс прохода по коллекции для сортировки, исключительно, для внутреннего использования\r\n    iterate (i, arr, size) {\r\n        if (i !== (size - 1)) {\r\n            arr[i].property = 'darkgreen';\r\n            arr[i+1].property = 'darkgreen';\r\n            this.render(arr, '#view_after');\r\n            if (arr[i].property === \"darkgreen\") arr[i].property = '';\r\n            if (arr[i+1].property === \"darkgreen\") arr[i+1].property = '';\r\n          \r\n            if (arr[i].number > arr[i + 1].number) {\r\n                const temp = arr[i];\r\n                arr[i] = arr[i + 1];\r\n                temp.property = 'darkgreen';\r\n                arr[i + 1] = temp;\r\n            }\r\n            else if (arr[i].number === arr[i + 1].number) {\r\n                arr[i+1].property = 'darkgreen';\r\n                arr[i].property = '';\r\n            }\r\n            else {\r\n                arr[i+1].property = 'darkgreen';\r\n            }\r\n            setTimeout(() => {\r\n                i += 1;\r\n                this.iterate(i, arr, size);\r\n            }, this.sortSpeed/arr.length)\r\n        }\r\n    }\r\n    // метод сортировки, так же итеративный\r\n    sortCollection (size, count = 0) {\r\n        if (count === this.collectionSize) return;\r\n        this.iterate(0, this.collection, size);\r\n        setTimeout(() => {\r\n            count += 1;\r\n            size -= 1;\r\n            this.sortCollection(size, count);\r\n        }, this.sortSpeed);  \r\n    }  \r\n}\n\n//# sourceURL=webpack:///./Sorting.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sorting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sorting.js */ \"./Sorting.js\");\n\r\n\r\nconst collectionSize = 120; // количество элементов в коллекции\r\nconst sortSpeed = 500; // скорость сортировки\r\nconst maxNum = 200; // максимальное число в коллекции (соответственно и высота столбика)\r\n\r\nconst sort = new _Sorting_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](collectionSize, sortSpeed, maxNum); // инициализация\r\n\r\n// привязка обработчиков\r\ndocument.getElementById('generate').addEventListener('click', () => {\r\n    document.getElementById('sort').removeAttribute('disabled')\r\n    sort.makeCollection(); // создание коллекции\r\n    sort.render(sort.collection, '#view_before') // рендеринг\r\n} );\r\ndocument.getElementById('sort').addEventListener('click', () => {\r\n    sort.sortCollection(sort.collectionSize); // запуск сортировки\r\n    document.getElementById('generate').setAttribute('disabled', 'disabled'); // блокировка кнопки до сброса\r\n    document.getElementById('sort').setAttribute('disabled', 'disabled');  // блокировка кнопки до сброса\r\n} );\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });