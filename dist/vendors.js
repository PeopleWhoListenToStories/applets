(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _construct; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _get; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/set.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/set.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _set; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Class, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/ObserverComponent.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/ObserverComponent.js ***!
  \**************************************************************/
/*! exports provided: Observer */
/*! exports used: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObserverComponent; });
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return Object(_useObserver__WEBPACK_IMPORTED_MODULE_0__[/* useObserver */ "a"])(component);
}
ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/assertEnvironment.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/assertEnvironment.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


if (!react__WEBPACK_IMPORTED_MODULE_1__["useState"]) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx__WEBPACK_IMPORTED_MODULE_0__[/* spy */ "n"]) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/index.js ***!
  \**************************************************/
/*! exports provided: isUsingStaticRendering, useStaticRendering, observer, useObserver, Observer, useForceUpdate, useAsObservableSource, useLocalStore, useQueuedForceUpdate, useQueuedForceUpdateBlock, isObserverBatched, observerBatching */
/*! exports used: Observer, isUsingStaticRendering, observer, useObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _assertEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assertEnvironment */ "./node_modules/mobx-react-lite/es/assertEnvironment.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _observerBatching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observerBatching */ "./node_modules/mobx-react-lite/es/observerBatching.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _staticRendering__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observer */ "./node_modules/mobx-react-lite/es/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _observer__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _useObserver__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ObserverComponent */ "./node_modules/mobx-react-lite/es/ObserverComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _useLocalStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useLocalStore */ "./node_modules/mobx-react-lite/es/useLocalStore.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");



Object(_observerBatching__WEBPACK_IMPORTED_MODULE_2__[/* observerBatching */ "a"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__[/* unstable_batchedUpdates */ "a"]);











/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observer.js ***!
  \*****************************************************/
/*! exports provided: observer */
/*! exports used: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_1__[/* isUsingStaticRendering */ "a"])()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return Object(_useObserver__WEBPACK_IMPORTED_MODULE_2__[/* useObserver */ "a"])(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(wrappedComponent));
    }
    else {
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observerBatching.js":
/*!*************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observerBatching.js ***!
  \*************************************************************/
/*! exports provided: defaultNoopBatch, observerBatching, isObserverBatched */
/*! exports used: observerBatching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultNoopBatch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observerBatching; });
/* unused harmony export isObserverBatched */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");


var observerBatchingConfiguredSymbol = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getSymbol */ "b"])("observerBatching");
function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (true) {
            console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native");
        }
    }
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* configure */ "f"])({ reactionScheduler: reactionScheduler });
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getGlobal */ "a"])()[observerBatchingConfiguredSymbol] = true;
}
var isObserverBatched = function () { return !!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getGlobal */ "a"])()[observerBatchingConfiguredSymbol]; };


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/printDebugValue.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/printDebugValue.js ***!
  \************************************************************/
/*! exports provided: printDebugValue */
/*! exports used: printDebugValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return printDebugValue; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

function printDebugValue(v) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* getDependencyTree */ "h"])(v);
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/reactionCleanupTracking.js":
/*!********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/reactionCleanupTracking.js ***!
  \********************************************************************/
/*! exports provided: createTrackingData, CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS, CLEANUP_TIMER_LOOP_MILLIS, scheduleCleanupOfReactionIfLeaked, recordReactionAsCommitted, forceCleanupTimerToRunNowForTests, resetCleanupScheduleForTests */
/*! exports used: createTrackingData, recordReactionAsCommitted, scheduleCleanupOfReactionIfLeaked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTrackingData; });
/* unused harmony export CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS */
/* unused harmony export CLEANUP_TIMER_LOOP_MILLIS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return scheduleCleanupOfReactionIfLeaked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return recordReactionAsCommitted; });
/* unused harmony export forceCleanupTimerToRunNowForTests */
/* unused harmony export resetCleanupScheduleForTests */
function createTrackingData(reaction) {
    var trackingData = {
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS,
        reaction: reaction
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;
/**
 * Reactions created by components that have yet to be fully mounted.
 */
var uncommittedReactionRefs = new Set();
/**
 * Latest 'uncommitted reactions' cleanup timer handle.
 */
var reactionCleanupHandle;
function ensureCleanupTimerRunning() {
    if (reactionCleanupHandle === undefined) {
        reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
    }
}
function scheduleCleanupOfReactionIfLeaked(ref) {
    uncommittedReactionRefs.add(ref);
    ensureCleanupTimerRunning();
}
function recordReactionAsCommitted(reactionRef) {
    uncommittedReactionRefs.delete(reactionRef);
}
/**
 * Run by the cleanup timer to dispose any outstanding reactions
 */
function cleanUncommittedReactions() {
    reactionCleanupHandle = undefined;
    // Loop through all the candidate leaked reactions; those older
    // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
    var now = Date.now();
    uncommittedReactionRefs.forEach(function (ref) {
        var tracking = ref.current;
        if (tracking) {
            if (now >= tracking.cleanAt) {
                // It's time to tidy up this leaked reaction.
                tracking.reaction.dispose();
                ref.current = null;
                uncommittedReactionRefs.delete(ref);
            }
        }
    });
    if (uncommittedReactionRefs.size > 0) {
        // We've just finished a round of cleanups but there are still
        // some leak candidates outstanding.
        ensureCleanupTimerRunning();
    }
}
/* istanbul ignore next */
/**
 * Only to be used by test functions; do not export outside of mobx-react-lite
 */
function forceCleanupTimerToRunNowForTests() {
    // This allows us to control the execution of the cleanup timer
    // to force it to run at awkward times in unit tests.
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        cleanUncommittedReactions();
    }
}
/* istanbul ignore next */
function resetCleanupScheduleForTests() {
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        reactionCleanupHandle = undefined;
    }
    uncommittedReactionRefs.clear();
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/staticRendering.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/staticRendering.js ***!
  \************************************************************/
/*! exports provided: useStaticRendering, isUsingStaticRendering */
/*! exports used: isUsingStaticRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useStaticRendering */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isUsingStaticRendering; });
var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useAsObservableSource.js":
/*!******************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useAsObservableSource.js ***!
  \******************************************************************/
/*! exports provided: useAsObservableSourceInternal, useAsObservableSource */
/*! exports used: useAsObservableSourceInternal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAsObservableSourceInternal; });
/* unused harmony export useAsObservableSource */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSourceInternal(current, usedByLocalStore) {
    var culprit = usedByLocalStore ? "useLocalStore" : "useAsObservableSource";
    if ( true && usedByLocalStore) {
        var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(current), 1), initialSource = _a[0];
        if ((initialSource !== undefined && current === undefined) ||
            (initialSource === undefined && current !== undefined)) {
            throw new Error("make sure you never pass `undefined` to " + culprit);
        }
    }
    if (usedByLocalStore && current === undefined) {
        return undefined;
    }
    if ( true && !Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* isPlainObject */ "c"])(current)) {
        throw new Error(culprit + " expects a plain object as " + (usedByLocalStore ? "second" : "first") + " argument");
    }
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () { return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])(current, {}, { deep: false }); }), 1), res = _b[0];
    if ( true &&
        Object.keys(res).length !== Object.keys(current).length) {
        throw new Error("the shape of objects passed to " + culprit + " should be stable");
    }
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* runInAction */ "m"])(function () {
        Object.assign(res, current);
    });
    return res;
}
function useAsObservableSource(current) {
    return useAsObservableSourceInternal(current, false);
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useLocalStore.js":
/*!**********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useLocalStore.js ***!
  \**********************************************************/
/*! exports provided: useLocalStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useLocalStore */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");




function useLocalStore(initializer, current) {
    var source = Object(_useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__[/* useAsObservableSourceInternal */ "a"])(current, true);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
        var local = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])(initializer(source));
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* isPlainObject */ "c"])(local)) {
            Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* runInAction */ "m"])(function () {
                Object.keys(local).forEach(function (key) {
                    var value = local[key];
                    if (typeof value === "function") {
                        // @ts-ignore No idea why ts2536 is popping out here
                        local[key] = wrapInTransaction(value, local);
                    }
                });
            });
        }
        return local;
    })[0];
}
// tslint:disable-next-line: ban-types
function wrapInTransaction(fn, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* transaction */ "o"])(function () { return fn.apply(context, args); });
    };
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useObserver.js":
/*!********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useObserver.js ***!
  \********************************************************/
/*! exports provided: useObserver */
/*! exports used: useObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useObserver; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _printDebugValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printDebugValue */ "./node_modules/mobx-react-lite/es/printDebugValue.js");
/* harmony import */ var _reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactionCleanupTracking */ "./node_modules/mobx-react-lite/es/reactionCleanupTracking.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");







var EMPTY_OBJECT = {};
function observerComponentNameFor(baseComponentName) {
    return "observer" + baseComponentName;
}
function useObserver(fn, baseComponentName, options) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (options === void 0) { options = EMPTY_OBJECT; }
    if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_4__[/* isUsingStaticRendering */ "a"])()) {
        return fn();
    }
    var wantedForceUpdateHook = options.useForceUpdate || _utils__WEBPACK_IMPORTED_MODULE_5__[/* useForceUpdate */ "d"];
    var forceUpdate = wantedForceUpdateHook();
    var queuedForceUpdate = Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__[/* useQueuedForceUpdate */ "a"])(forceUpdate);
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction_1 = new mobx__WEBPACK_IMPORTED_MODULE_0__[/* Reaction */ "b"](observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                queuedForceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.  The easiest way to do that is just to
                // drop our current reaction and allow useEffect() to recreate it.
                newReaction_1.dispose();
                reactionTrackingRef.current = null;
            }
        });
        var trackingData_1 = Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* createTrackingData */ "a"])(newReaction_1);
        reactionTrackingRef.current = trackingData_1;
        Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* scheduleCleanupOfReactionIfLeaked */ "c"])(reactionTrackingRef);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(reaction, _printDebugValue__WEBPACK_IMPORTED_MODULE_2__[/* printDebugValue */ "a"]);
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
        // Called on first mount only
        Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* recordReactionAsCommitted */ "b"])(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This is either due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up, or we got a observable change
            // between render and useEffect
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx__WEBPACK_IMPORTED_MODULE_0__[/* Reaction */ "b"](observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    queuedForceUpdate();
                }),
                cleanAt: Infinity
            };
            queuedForceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // delay all force-update calls after rendering of this component
    return Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__[/* useQueuedForceUpdateBlock */ "b"])(function () {
        // render the original component, but have the
        // reaction track the observables, so that rendering
        // can be invalidated (see above) once a dependency changes
        var rendering;
        var exception;
        reaction.track(function () {
            try {
                rendering = fn();
            }
            catch (e) {
                exception = e;
            }
        });
        if (exception) {
            throw exception; // re-throw any exceptions caught during rendering
        }
        return rendering;
    });
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js ***!
  \*****************************************************************/
/*! exports provided: useQueuedForceUpdate, useQueuedForceUpdateBlock */
/*! exports used: useQueuedForceUpdate, useQueuedForceUpdateBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useQueuedForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useQueuedForceUpdateBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var insideRender = false;
var forceUpdateQueue = [];
function useQueuedForceUpdate(forceUpdate) {
    return function () {
        if (insideRender) {
            forceUpdateQueue.push(forceUpdate);
        }
        else {
            forceUpdate();
        }
    };
}
function useQueuedForceUpdateBlock(callback) {
    // start intercepting force-update calls
    insideRender = true;
    forceUpdateQueue = [];
    try {
        var result = callback();
        // stop intercepting force-update
        insideRender = false;
        // store queue or nothing if it was empty to execute useLayoutEffect only when necessary
        var queue_1 = forceUpdateQueue.length > 0 ? forceUpdateQueue : undefined;
        // run force-update queue in useLayoutEffect
        react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect(function () {
            if (queue_1) {
                queue_1.forEach(function (x) { return x(); });
            }
        }, [queue_1]);
        return result;
    }
    finally {
        insideRender = false;
    }
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils.js ***!
  \**************************************************/
/*! exports provided: useUnmount, useForceUpdate, isPlainObject, getSymbol, getGlobal */
/*! exports used: getGlobal, getSymbol, isPlainObject, useForceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global) {/* unused harmony export useUnmount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGlobal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var EMPTY_ARRAY = [];
function useUnmount(fn) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { return fn; }, EMPTY_ARRAY);
}
function useForceUpdate() {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), setTick = _a[1];
    var update = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setTick(function (tick) { return tick + 1; });
    }, []);
    return update;
}
function isPlainObject(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    return !proto || proto === Object.prototype;
}
function getSymbol(name) {
    if (typeof Symbol === "function") {
        return Symbol.for(name);
    }
    return "__$mobx-react " + name + "__";
}
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js ***!
  \**********************************************************************/
/*! exports provided: unstable_batchedUpdates */
/*! exports used: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),

/***/ "./node_modules/mobx/lib/mobx.module.js":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: $mobx, FlowCancellationError, IDerivationState, ObservableMap, ObservableSet, Reaction, _allowStateChanges, _allowStateChangesInsideComputed, _allowStateReadsEnd, _allowStateReadsStart, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, action, autorun, comparer, computed, configure, createAtom, decorate, entries, extendObservable, extendShallowObservable, flow, get, getAtom, getDebugName, getDependencyTree, getObserverTree, has, intercept, isAction, isArrayLike, isBoxedObservable, isComputed, isComputedProp, isFlowCancellationError, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, observable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, reaction, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
/*! exports used: $mobx, Reaction, _allowStateChanges, _allowStateReadsEnd, _allowStateReadsStart, configure, createAtom, getDependencyTree, isObservableArray, isObservableMap, isObservableObject, observable, runInAction, spy, transaction, untracked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global, process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $mobx; });
/* unused harmony export FlowCancellationError */
/* unused harmony export IDerivationState */
/* unused harmony export ObservableMap */
/* unused harmony export ObservableSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return allowStateChanges; });
/* unused harmony export _allowStateChangesInsideComputed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return allowStateReadsEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return allowStateReadsStart; });
/* unused harmony export _endAction */
/* unused harmony export _getAdministration */
/* unused harmony export _getGlobalState */
/* unused harmony export _interceptReads */
/* unused harmony export _isComputingDerivation */
/* unused harmony export _resetGlobalState */
/* unused harmony export _startAction */
/* unused harmony export action */
/* unused harmony export autorun */
/* unused harmony export comparer */
/* unused harmony export computed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createAtom; });
/* unused harmony export decorate */
/* unused harmony export entries */
/* unused harmony export extendObservable */
/* unused harmony export extendShallowObservable */
/* unused harmony export flow */
/* unused harmony export get */
/* unused harmony export getAtom */
/* unused harmony export getDebugName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getDependencyTree; });
/* unused harmony export getObserverTree */
/* unused harmony export has */
/* unused harmony export intercept */
/* unused harmony export isAction */
/* unused harmony export isArrayLike */
/* unused harmony export isBoxedObservable */
/* unused harmony export isComputed */
/* unused harmony export isComputedProp */
/* unused harmony export isFlowCancellationError */
/* unused harmony export isObservable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isObservableObject; });
/* unused harmony export isObservableProp */
/* unused harmony export isObservableSet */
/* unused harmony export keys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return observable; });
/* unused harmony export observe */
/* unused harmony export onBecomeObserved */
/* unused harmony export onBecomeUnobserved */
/* unused harmony export onReactionError */
/* unused harmony export reaction */
/* unused harmony export remove */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return runInAction; });
/* unused harmony export set */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return spy; });
/* unused harmony export toJS */
/* unused harmony export trace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return untracked; });
/* unused harmony export values */
/* unused harmony export when */
/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */
var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
        return dataStructure;
    }
    else if (Array.isArray(dataStructure)) {
        return new Map(dataStructure);
    }
    else if (isPlainObject(dataStructure)) {
        var map = new Map();
        for (var key in dataStructure) {
            map.set(key, dataStructure[key]);
        }
        return map;
    }
    else {
        return fail("Cannot convert to map from '" + dataStructure + "'");
    }
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if ( true && !isPropertyConfigurable(object, prop))
        fail("Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
function areBothNaN(a, b) {
    return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
        return true;
    return false;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
// use Array.from in Mobx 5
function iteratorToArray(it) {
    var res = [];
    while (true) {
        var r = it.next();
        if (r.done)
            break;
        res.push(r.value);
    }
    return res;
}
function primitiveSymbol() {
    // es-disable-next-line
    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}
// Use "for of" in V5
function forOf(iter, callback) {
    var next = iter.next();
    while (!next.done) {
        callback(next.value);
        next = iter.next();
    }
}

function iteratorSymbol() {
    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
}
function declareIterator(prototType, iteratorFactory) {
    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}
function makeIterable(iterator) {
    iterator[iteratorSymbol()] = getSelf;
    return iterator;
}
function toStringTagSymbol() {
    return (typeof Symbol === "function" && Symbol.toStringTag) || "@@toStringTag";
}
function getSelf() {
    return this;
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeUnobserved = function () {
        // noop
    };
    Atom.prototype.onBecomeObserved = function () {
        /* noop */
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    onBecomeObserved(atom, onBecomeObservedHandler);
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    return areBothNaN(a, b) || identityComparer(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    if (target.__mobxDidRunLazyInitializers === true)
        return;
    var decorators = target.__mobxDecorators;
    if (decorators) {
        addHiddenProp(target, "__mobxDidRunLazyInitializers", true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator(arguments))
                fail("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, "__mobxDecorators")) {
                var inheritedDecorators = target.__mobxDecorators;
                addHiddenProp(target, "__mobxDecorators", __assign({}, inheritedDecorators));
            }
            target.__mobxDecorators[prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail( true &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if ( true && isObservable(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        defineObservableProperty(target, propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined
};
var shallowCreateObservableOptions = {
    deep: false,
    name: undefined,
    defaultDecorator: undefined
};
Object.freeze(defaultCreateObservableOptions);
Object.freeze(shallowCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator)$/.test(key))
        fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true };
    if (true) {
        if (typeof thing !== "object")
            return fail("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail( true &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    shallowBox: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowBox");
        deprecated("observable.shallowBox", "observable.box(value, { deep: false })");
        return observable.box(value, { name: name, deep: false });
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return new ObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    shallowArray: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowArray");
        deprecated("observable.shallowArray", "observable.array(values, { deep: false })");
        return observable.array(initialValues, { name: name, deep: false });
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    shallowMap: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowMap");
        deprecated("observable.shallowMap", "observable.map(values, { deep: false })");
        return observable.map(initialValues, { name: name, deep: false });
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        return extendObservable({}, props, decorators, o);
    },
    shallowObject: function (props, name) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("shallowObject");
        deprecated("observable.shallowObject", "observable.object(values, {}, { deep: false })");
        return observable.object(props, {}, { name: name, deep: false });
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    if (true) {
        invariant(descriptor && descriptor.get, "Trying to declare a computed value for unspecified getter '" + propertyName + "'");
    }
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    defineComputedProperty(instance, propertyName, __assign({ get: get, set: set }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            // state propagation can occur outside of action/reactive context #2195
            var prevAllowStateReads = allowStateReadsStart(true);
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            allowStateReadsEnd(prevAllowStateReads);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        allowStateReadsEnd(prevAllowStateReads);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.length > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail( true &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail( true &&
            (globalState.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
function checkIfStateReadsAreAllowed(observable) {
    if ( true &&
        !globalState.allowStateReads &&
        globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    if (derivation.observing.length === 0) {
        warnAboutDerivationWithoutDependencies(derivation);
    }
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (false)
        {}
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    var res = action();
    untrackedEnd(prev);
    return res;
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () { }, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;
function createAction(actionName, fn) {
    if (true) {
        invariant(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction(actionName, fn, this, arguments);
    };
    if (true) {
        if (isFunctionNameConfigurable) {
            Object.defineProperty(res, "name", { value: actionName });
        }
    }
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy) {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: nextActionId++,
        parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy) {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState.computationDepth = prev;
    }
    return res;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ObservableValue;
}(Atom));
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        invariant(options.get, "missing option for computed: get");
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeUnobserved = function () { };
    ComputedValue.prototype.onBecomeObserved = function () { };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.length === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false,  true &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ComputedValue;
}());
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be supressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    var l = observable.observers.length;
    if (l) {
        // because object assignment is relatively expensive, let's not store data about index 0.
        observable.observersIndexes[node.__mapid] = l;
    }
    observable.observers[l] = node;
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    if (observable.observers.length === 1) {
        // deleting last observer
        observable.observers.length = 0;
        queueForUnobservation(observable);
    }
    else {
        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
        var list = observable.observers;
        var map = observable.observersIndexes;
        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
        if (filler !== node) {
            // otherwise node was the last element, which already got removed from array
            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
            if (index) {
                // map store all indexes but 0, see comment in `addObserver`
                map[filler.__mapid] = index;
            }
            else {
                delete map[filler.__mapid];
            }
            list[index] = filler;
        }
        delete map[node.__mapid];
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.length === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observable of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.length === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    }
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    }
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    }
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending && isSpyEnabled()) {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = __assign(__assign({}, event), { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(__assign(__assign({}, change), { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function () {
        globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
    });
}

function dontReassignFields() {
    fail( true && "@action fields are not reassignable");
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        arg1[arg2] = createAction(arg1.name || arg2, arg3.value);
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    // TODO: deprecate?
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof view === "function", "Autorun expects a function as first argument");
        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (typeof opts === "boolean") {
        opts = { fireImmediately: opts };
        deprecated("Using fireImmediately as argument is deprecated. Use '{ fireImmediately: true }' instead");
    }
    if (true) {
        invariant(typeof expression === "function", "First argument to reaction should be a function");
        invariant(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail( true && "Not an atom that can be (un)observed");
    atom[hook] = function () {
        orig.call(this);
        cb.call(this);
    };
    return function () {
        atom[hook] = orig;
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, arrayBuffer = options.arrayBuffer, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (typeof arrayBuffer === "number") {
        reserveArrayBuffer(arrayBuffer);
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function decorate(thing, decorators) {
    if ( true && !isPlainObject(decorators))
        fail("Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
        // prettier-ignore
        if ( true && !propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }))
            fail("Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendShallowObservable(target, properties, decorators) {
    deprecated("'extendShallowObservable' is deprecated, use 'extendObservable(target, props, { deep: false })' instead");
    return extendObservable(target, properties, decorators, shallowCreateObservableOptions);
}
function extendObservable(target, properties, decorators, options) {
    if (true) {
        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators)
            for (var key in decorators)
                if (!(key in properties))
                    fail("Trying to declare a decorator for unspecified property '" + key + "'");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
    initializeInstance(target);
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    startBatch();
    try {
        var keys = Object.getOwnPropertyNames(properties);
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            var descriptor = Object.getOwnPropertyDescriptor(properties, key);
            if (true) {
                if (isComputed(descriptor.value))
                    fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
            }
            var decorator = decorators && key in decorators
                ? decorators[key]
                : descriptor.get
                    ? computedDecorator
                    : defaultDecorator;
            if ( true && typeof decorator !== "function")
                return fail("Not a valid decorator for '" + key + "', got: " + decorator);
            var resultDescriptor = decorator(target, key, descriptor, true);
            if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
            )
                Object.defineProperty(target, key, resultDescriptor);
        }
    }
    finally {
        endBatch();
    }
    return target;
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = getObservers(node).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = Object.create(Error.prototype);
function isFlowCancellationError(error) {
    return error instanceof FlowCancellationError;
}
function flow(generator) {
    if (arguments.length !== 1)
        fail( true && "Flow expects one 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var res = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        res.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res_1 = gen.return(undefined);
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res_1.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new FlowCancellationError());
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return res;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail( true &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail( true &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value.$mobx.values[property])
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail( true &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true &&
            "isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ( true &&
            (isObservableMap(value) || isObservableArray(value)))
            return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value.$mobx ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail( true &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj.$mobx.getKeys();
    }
    if (isObservableMap(obj)) {
        return iteratorToArray(obj.keys());
    }
    if (isObservableSet(obj)) {
        return iteratorToArray(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail( true &&
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet(obj)) {
        return iteratorToArray(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail( true &&
        "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet(obj)) {
        return iteratorToArray(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail( true &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj.$mobx;
        var existingObservable = adm.values[key];
        if (existingObservable) {
            adm.write(obj, key, value);
        }
        else {
            defineObservableProperty(obj, key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail( true &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj.$mobx.remove(key);
    }
    else if (isObservableMap(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail( true &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        adm.getKeys(); // make sure we get notified of key changes, but for performance, use the values map to look up existence
        return !!adm.values[key];
    }
    else if (isObservableMap(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail( true &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get(obj, key) {
    if (!has(obj, key))
        return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    }
    else if (isObservableMap(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray(obj)) {
        return obj[key];
    }
    else {
        return fail( true &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source))
        keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    for (var key in source) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    }
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail( true &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer.$mobx.isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError)
        return fail("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign(__assign({}, opts), { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", {
        set: function () {
            v = true;
        }
    });
    Object.create(p)["0"] = 1;
    return v === false;
})();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = /** @class */ (function () {
    function StubArray() {
    }
    return StubArray;
}());
function inherit(ctor, proto) {
    if (typeof Object["setPrototypeOf"] !== "undefined") {
        Object["setPrototypeOf"](ctor.prototype, proto);
    }
    else if (typeof ctor.prototype.__proto__ !== "undefined") {
        ctor.prototype.__proto__ = proto;
    }
    else {
        ctor["prototype"] = proto;
    }
}
inherit(StubArray, Array.prototype);
// Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529
if (Object.isFrozen(Array)) {
    [
        "constructor",
        "push",
        "shift",
        "concat",
        "pop",
        "unshift",
        "replace",
        "find",
        "findIndex",
        "splice",
        "reverse",
        "sort"
    ].forEach(function (key) {
        Object.defineProperty(StubArray.prototype, key, {
            configurable: true,
            writable: true,
            value: Array.prototype[key]
        });
    });
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, array, owned) {
        this.array = array;
        this.owned = owned;
        this.values = [];
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    // adds / removes the necessary numeric properties to this object
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta + 1);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems =
            newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta); // create or remove new entries
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = /** @class */ (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
        if (owned === void 0) { owned = false; }
        var _this = _super.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
        addHiddenFinalProp(_this, "$mobx", adm);
        if (initialValues && initialValues.length) {
            var prev = allowStateChangesStart(true);
            _this.spliceWithArray(0, 0, initialValues);
            allowStateChangesEnd(prev);
        }
        if (safariPrototypeSetterInheritanceBug) {
            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(adm.array, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$mobx.atom.reportObserved();
        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return (isObservableArray(a) ? a.peek() : a); }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        this.$mobx.atom.reportObserved();
        return this.$mobx.dehanceValues(this.$mobx.values);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        if (arguments.length === 3)
            deprecated("The array.find fromIndex argument to find will not be supported anymore in the next major");
        var idx = this.findIndex.apply(this, arguments);
        return idx === -1 ? undefined : this.get(idx);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        if (arguments.length === 3)
            deprecated("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
        var items = this.peek(), l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return i;
        return -1;
    };
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        deprecated("observableArray.move is deprecated, use .slice() & .replace() instead");
        function checkIndex(index) {
            if (index < 0) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
            }
            var length = this.$mobx.values.length;
            if (index >= length) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
            }
        }
        checkIndex.call(this, fromIndex);
        checkIndex.call(this, toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$mobx.values;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex + 1));
        }
        else {
            // toIndex < fromIndex
            newItems = __spread(oldItems.slice(0, toIndex), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.get = function (index) {
        var impl = this.$mobx;
        if (impl) {
            if (index < impl.values.length) {
                impl.atom.reportObserved();
                return impl.dehanceValue(impl.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.set = function (index, newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    };
    return ObservableArray;
}(StubArray));
declareIterator(ObservableArray.prototype, function () {
    this.$mobx.atom.reportObserved();
    var self = this;
    var nextIndex = 0;
    return makeIterable({
        next: function () {
            return nextIndex < self.length
                ? { value: self[nextIndex++], done: false }
                : { done: true, value: undefined };
        }
    });
});
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
addHiddenProp(ObservableArray.prototype, toStringTagSymbol(), "Array");
["indexOf", "join", "lastIndexOf", "slice", "toString", "toLocaleString"].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        return baseFunc.apply(this.peek(), arguments);
    });
});
[
    "every",
    "filter",
    //"find", // implemented individually (IE support)
    //"findIndex", // implemented individually (IE support)
    //"flatMap", // not supported
    "forEach",
    "map",
    "some"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function (callback, thisArg) {
        var _this = this;
        var adm = this.$mobx;
        adm.atom.reportObserved();
        var dehancedValues = adm.dehanceValues(adm.values);
        return dehancedValues[funcName](function (element, index) {
            return callback.call(thisArg, element, index, _this);
        }, thisArg);
    });
});
["reduce", "reduceRight"].forEach(function (funcName) {
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        var _this = this;
        var adm = this.$mobx;
        adm.atom.reportObserved();
        // #2432 - reduce behavior depends on arguments.length
        var callback = arguments[0];
        arguments[0] = function (accumulator, currentValue, index) {
            currentValue = adm.dehanceValue(currentValue);
            return callback(accumulator, currentValue, index, _this);
        };
        return adm.values[funcName].apply(adm.values, arguments);
    });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "get",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "findIndex",
    "splice",
    "spliceWithArray",
    "push",
    "pop",
    "set",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString"
]);
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            return this.get(index);
        },
        set: function (value) {
            this.set(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var ObservableMapMarker = {};
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this.$mobx = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _a = keys.next(), done = _a.done, value = _a.value;
                return {
                    done: done,
                    value: done ? undefined : self.get(value)
                };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _a = keys.next(), done = _a.done, value = _a.value;
                return {
                    done: done,
                    value: done ? undefined : [value, self.get(value)]
                };
            }
        });
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this._keysAtom.reportObserved();
        this._data.forEach(function (_, key) { return callback.call(thisArg, _this.get(key), key, _this); });
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (isPlainObject(other))
                    Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
                else if (Array.isArray(other))
                    other.forEach(function (_a) {
                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                        return _this.set(key, value);
                    });
                else if (isES6Map(other)) {
                    if (other.constructor !== Map)
                        fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                    else
                        other.forEach(function (value, key) { return _this.set(key, value); });
                }
                else if (other !== null && other !== undefined)
                    fail("Cannot initialize map from " + other);
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                // Note we are concurrently reading/deleting the same keys
                // forEach handles this properly
                _this._data.forEach(function (_, key) { return _this.delete(key); });
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        // Implementation requirements:
        // - respect ordering of replacement map
        // - allow interceptors to run and potentially prevent individual operations
        // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
        // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
        // - note that result map may differ from replacement map due to the interceptors
        transaction(function () {
            // Convert to map so we can do quick key lookups
            var replacementMap = convertToMap(values);
            var orderedData = new Map();
            // Used for optimization
            var keysReportChangedCalled = false;
            // Delete keys that don't exist in replacement map
            // if the key deletion is prevented by interceptor
            // add entry at the beginning of the result map
            forOf(_this._data.keys(), function (key) {
                // Concurrently iterating/deleting keys
                // iterator should handle this correctly
                if (!replacementMap.has(key)) {
                    var deleted = _this.delete(key);
                    // Was the key removed?
                    if (deleted) {
                        // _keysAtom.reportChanged() was already called
                        keysReportChangedCalled = true;
                    }
                    else {
                        // Delete prevented by interceptor
                        var value = _this._data.get(key);
                        orderedData.set(key, value);
                    }
                }
            });
            // Merge entries
            forOf(replacementMap.entries(), function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                // We will want to know whether a new key is added
                var keyExisted = _this._data.has(key);
                // Add or update value
                _this.set(key, value);
                // The addition could have been prevent by interceptor
                if (_this._data.has(key)) {
                    // The update could have been prevented by interceptor
                    // and also we want to preserve existing values
                    // so use value from _data map (instead of replacement map)
                    var value_1 = _this._data.get(key);
                    orderedData.set(key, value_1);
                    // Was a new key added?
                    if (!keyExisted) {
                        // _keysAtom.reportChanged() was already called
                        keysReportChangedCalled = true;
                    }
                }
            });
            // Check for possible key order change
            if (!keysReportChangedCalled) {
                if (_this._data.size !== orderedData.size) {
                    // If size differs, keys are definitely modified
                    _this._keysAtom.reportChanged();
                }
                else {
                    var iter1 = _this._data.keys();
                    var iter2 = orderedData.keys();
                    var next1 = iter1.next();
                    var next2 = iter2.next();
                    while (!next1.done) {
                        if (next1.value !== next2.value) {
                            _this._keysAtom.reportChanged();
                            break;
                        }
                        next1 = iter1.next();
                        next2 = iter2.next();
                    }
                }
            }
            // Use correctly ordered map
            _this._data = orderedData;
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var _this = this;
        var res = {};
        this.forEach(function (_, key) {
            return (res[typeof key === "symbol" ? key : stringifyKey(key)] = _this.get(key));
        });
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            iteratorToArray(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
declareIterator(ObservableMap.prototype, function () {
    return this.entries();
});
addHiddenFinalProp(ObservableMap.prototype, toStringTagSymbol(), "Map");
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this.$mobx = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                _this._data.forEach(function (value) {
                    _this.delete(value);
                });
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var _this = this;
        this._atom.reportObserved();
        this._data.forEach(function (value) {
            callbackFn.call(thisArg, value, value, _this);
        });
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = iteratorToArray(this.keys());
        var values = iteratorToArray(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues;
        if (this._data.values !== undefined) {
            observableValues = iteratorToArray(this._data.values());
        }
        else {
            // There is no values function in IE11
            observableValues = [];
            this._data.forEach(function (e) { return observableValues.push(e); });
        }
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (Array.isArray(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (isES6Set(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (other !== null && other !== undefined) {
                    fail("Cannot initialize set from " + other);
                }
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + iteratorToArray(this.keys()).join(", ") + " ]";
    };
    return ObservableSet;
}());
declareIterator(ObservableSet.prototype, function () {
    return this.values();
});
addHiddenFinalProp(ObservableSet.prototype, toStringTagSymbol(), "Set");
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, name, defaultEnhancer) {
        this.target = target;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.values = {};
    }
    ObservableObjectAdministration.prototype.read = function (owner, key) {
        if (false) {}
        return this.values[key].get();
    };
    ObservableObjectAdministration.prototype.write = function (owner, key, newValue) {
        var instance = this.target;
        if (false) {}
        var observable = this.values[key];
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values[key])
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldValue = this.values[key].get();
            if (this.keys)
                this.keys.remove(key);
            delete this.values[key];
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var _this = this;
        if (this.keys === undefined) {
            this.keys = (new ObservableArray(Object.keys(this.values).filter(function (key) { return _this.values[key] instanceof ObservableValue; }), referenceEnhancer, "keys(" + this.name + ")", true));
        }
        return this.keys.slice();
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    var adm = target.$mobx;
    if (adm)
        return adm;
     true &&
        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    adm = new ObservableObjectAdministration(target, name, defaultEnhancer);
    addHiddenFinalProp(target, "$mobx", adm);
    return adm;
}
function defineObservableProperty(target, propName, newValue, enhancer) {
    var adm = asObservableObject(target);
    assertPropertyConfigurable(target, propName);
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            object: target,
            name: propName,
            type: "add",
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    var observable = (adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false));
    newValue = observable.value; // observableValue might have changed it
    Object.defineProperty(target, propName, generateObservablePropConfig(propName));
    if (adm.keys)
        adm.keys.push(propName);
    notifyPropertyAddition(adm, target, propName, newValue);
}
function defineComputedProperty(target, // which objects holds the observable and provides `this` context?
propName, options) {
    var adm = asObservableObject(target);
    options.name = adm.name + "." + propName;
    options.context = target;
    adm.values[propName] = new ComputedValue(options);
    Object.defineProperty(target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this.$mobx.read(this, propName);
            },
            set: function (v) {
                this.$mobx.write(this, propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner.$mobx;
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner.$mobx;
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(this, propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(this, propName, v);
            }
        }));
}
function notifyPropertyAddition(adm, object, key, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy
        ? {
            type: "add",
            object: object,
            name: key,
            newValue: newValue
        }
        : null;
    if (notifySpy)
        spyReportStart(__assign(__assign({}, change), { name: adm.name, key: key }));
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing.$mobx);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail( true &&
                    "It is not possible to get index atoms from arrays");
            return thing.$mobx.atom;
        }
        if (isObservableSet(thing)) {
            return thing.$mobx;
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail( true &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing.$mobx)
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail( true && "please specify a property");
            var observable = thing.$mobx.values[property];
            if (!observable)
                fail( true &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing.$mobx)) {
            // disposer function
            return thing.$mobx;
        }
    }
    return fail( true && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing)
        fail("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing.$mobx)
        return thing.$mobx;
    fail( true && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) { depth = -1; }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (
            // eslint-disable-next-line
            typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    }
    else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.peek();
    if (isES6Map(a) || isObservableMap(a))
        return iteratorToArray(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return iteratorToArray(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

/**
 * (c) Michel Weststrate 2015 - 2019
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    // tslint:disable-next-line
    "development";
}
catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production" &&
        typeof process !== 'undefined' && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
// forward compatibility with mobx, so that packages can easily support mobx 4 & 5
var $mobx = "$mobx";
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}
// TODO: remove in some future build
if ( true &&
    typeof module.exports !== "undefined") {
    var warnedAboutDefaultExport_1 = false;
    Object.defineProperty(module.exports, "default", {
        enumerable: false,
        get: function () {
            if (!warnedAboutDefaultExport_1) {
                warnedAboutDefaultExport_1 = true;
                console.warn("The MobX package does not have a default export. Use 'import { thing } from \"mobx\"' (recommended) or 'import * as mobx from \"mobx\"' instead.\"");
            }
            return undefined;
        }
    });
    [
        "extras",
        "Atom",
        "BaseAtom",
        "asFlat",
        "asMap",
        "asReference",
        "asStructure",
        "autorunAsync",
        "createTranformer",
        "expr",
        "isModifierDescriptor",
        "isStrictModeEnabled",
        "map",
        "useStrict",
        "whyRun"
    ].forEach(function (prop) {
        Object.defineProperty(module.exports, prop, {
            enumerable: false,
            get: function () {
                fail("'" + prop + "' is no longer part of the public MobX api. Please consult the changelog to find out where this functionality went");
            },
            set: function () { }
        });
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! exports used: resolve */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-reconciler/cjs/react-reconciler.production.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-reconciler/cjs/react-reconciler.production.min.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/** @license React v0.23.0
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
'use strict';var aa=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),ba=__webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js"),m=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/cjs/scheduler.production.min.js");function n(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
q.hasOwnProperty("ReactCurrentDispatcher")||(q.ReactCurrentDispatcher={current:null});q.hasOwnProperty("ReactCurrentBatchConfig")||(q.ReactCurrentBatchConfig={suspense:null});
var u="function"===typeof Symbol&&Symbol.for,ca=u?Symbol.for("react.element"):60103,da=u?Symbol.for("react.portal"):60106,ea=u?Symbol.for("react.fragment"):60107,fa=u?Symbol.for("react.strict_mode"):60108,ha=u?Symbol.for("react.profiler"):60114,ia=u?Symbol.for("react.provider"):60109,ja=u?Symbol.for("react.context"):60110,ka=u?Symbol.for("react.concurrent_mode"):60111,la=u?Symbol.for("react.forward_ref"):60112,ma=u?Symbol.for("react.suspense"):60113,na=u?Symbol.for("react.suspense_list"):60120,oa=
u?Symbol.for("react.memo"):60115,pa=u?Symbol.for("react.lazy"):60116;u&&Symbol.for("react.fundamental");u&&Symbol.for("react.responder");u&&Symbol.for("react.scope");var qa="function"===typeof Symbol&&Symbol.iterator;function ra(a){if(null===a||"object"!==typeof a)return null;a=qa&&a[qa]||a["@@iterator"];return"function"===typeof a?a:null}
function sa(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function ta(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ea:return"Fragment";case da:return"Portal";case ha:return"Profiler";case fa:return"StrictMode";case ma:return"Suspense";case na:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ja:return"Context.Consumer";case ia:return"Context.Provider";case la:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case oa:return ta(a.type);case pa:if(a=1===a._status?a._result:null)return ta(a)}return null}function ua(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function va(a){if(ua(a)!==a)throw Error(n(188));}
function wa(a){var b=a.alternate;if(!b){b=ua(a);if(null===b)throw Error(n(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return va(e),a;if(f===d)return va(e),b;f=f.sibling}throw Error(n(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,l=e.child;l;){if(l===c){g=!0;c=e;d=f;break}if(l===d){g=!0;d=e;c=f;break}l=l.sibling}if(!g){for(l=f.child;l;){if(l===
c){g=!0;c=f;d=e;break}if(l===d){g=!0;d=f;c=e;break}l=l.sibling}if(!g)throw Error(n(189));}}if(c.alternate!==d)throw Error(n(190));}if(3!==c.tag)throw Error(n(188));return c.stateNode.current===c?a:b}function xa(a){a=wa(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ya(a){a=wa(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var za=$$$hostConfig.getPublicInstance,Aa=$$$hostConfig.getRootHostContext,Ba=$$$hostConfig.getChildHostContext,Ca=$$$hostConfig.prepareForCommit,Da=$$$hostConfig.resetAfterCommit,Ea=$$$hostConfig.createInstance,Fa=$$$hostConfig.appendInitialChild,Ga=$$$hostConfig.finalizeInitialChildren,Ia=$$$hostConfig.prepareUpdate,Ja=$$$hostConfig.shouldSetTextContent,Ka=$$$hostConfig.shouldDeprioritizeSubtree,La=$$$hostConfig.createTextInstance,Ma=$$$hostConfig.setTimeout,Na=$$$hostConfig.clearTimeout,Oa=$$$hostConfig.noTimeout,
Pa=$$$hostConfig.isPrimaryRenderer,Qa=$$$hostConfig.supportsMutation,Ra=$$$hostConfig.supportsPersistence,Sa=$$$hostConfig.supportsHydration,Ta=$$$hostConfig.appendChild,Ua=$$$hostConfig.appendChildToContainer,Va=$$$hostConfig.commitTextUpdate,Wa=$$$hostConfig.commitMount,Xa=$$$hostConfig.commitUpdate,Ya=$$$hostConfig.insertBefore,Za=$$$hostConfig.insertInContainerBefore,$a=$$$hostConfig.removeChild,ab=$$$hostConfig.removeChildFromContainer,bb=$$$hostConfig.resetTextContent,cb=$$$hostConfig.hideInstance,
db=$$$hostConfig.hideTextInstance,eb=$$$hostConfig.unhideInstance,fb=$$$hostConfig.unhideTextInstance,gb=$$$hostConfig.cloneInstance,hb=$$$hostConfig.createContainerChildSet,ib=$$$hostConfig.appendChildToContainerChildSet,kb=$$$hostConfig.finalizeContainerChildren,lb=$$$hostConfig.replaceContainerChildren,mb=$$$hostConfig.cloneHiddenInstance,nb=$$$hostConfig.cloneHiddenTextInstance,ob=$$$hostConfig.canHydrateInstance,pb=$$$hostConfig.canHydrateTextInstance,qb=$$$hostConfig.isSuspenseInstancePending,
rb=$$$hostConfig.isSuspenseInstanceFallback,sb=$$$hostConfig.getNextHydratableSibling,tb=$$$hostConfig.getFirstHydratableChild,ub=$$$hostConfig.hydrateInstance,vb=$$$hostConfig.hydrateTextInstance,wb=$$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,xb=$$$hostConfig.commitHydratedContainer,yb=$$$hostConfig.commitHydratedSuspenseInstance,zb=/^(.*)[\\\/]/;
function Ab(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ta(a.type);c=null;d&&(c=ta(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(zb,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}new Set;var Bb=[],Cb=-1;function y(a){0>Cb||(a.current=Bb[Cb],Bb[Cb]=null,Cb--)}function z(a,b){Cb++;Bb[Cb]=a.current;a.current=b}
var Db={},A={current:Db},B={current:!1},Eb=Db;function Fb(a,b){var c=a.type.contextTypes;if(!c)return Db;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function C(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gb(a){y(B,a);y(A,a)}
function Hb(a){y(B,a);y(A,a)}function Ib(a,b,c){if(A.current!==Db)throw Error(n(168));z(A,b,a);z(B,c,a)}function Jb(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(n(108,ta(b)||"Unknown",e));return aa({},c,{},d)}function Kb(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Db;Eb=A.current;z(A,b,a);z(B,B.current,a);return!0}
function Lb(a,b,c){var d=a.stateNode;if(!d)throw Error(n(169));c?(b=Jb(a,b,Eb),d.__reactInternalMemoizedMergedChildContext=b,y(B,a),y(A,a),z(A,b,a)):y(B,a);z(B,c,a)}
var Mb=m.unstable_runWithPriority,Nb=m.unstable_scheduleCallback,Ob=m.unstable_cancelCallback,Pb=m.unstable_shouldYield,Qb=m.unstable_requestPaint,Tb=m.unstable_now,Ub=m.unstable_getCurrentPriorityLevel,Vb=m.unstable_ImmediatePriority,Wb=m.unstable_UserBlockingPriority,Xb=m.unstable_NormalPriority,Yb=m.unstable_LowPriority,Zb=m.unstable_IdlePriority,$b={},ac=void 0!==Qb?Qb:function(){},bc=null,cc=null,dc=!1,ec=Tb(),E=1E4>ec?Tb:function(){return Tb()-ec};
function fc(){switch(Ub()){case Vb:return 99;case Wb:return 98;case Xb:return 97;case Yb:return 96;case Zb:return 95;default:throw Error(n(332));}}function gc(a){switch(a){case 99:return Vb;case 98:return Wb;case 97:return Xb;case 96:return Yb;case 95:return Zb;default:throw Error(n(332));}}function hc(a,b){a=gc(a);return Mb(a,b)}function ic(a,b,c){a=gc(a);return Nb(a,b,c)}function jc(a){null===bc?(bc=[a],cc=Nb(Vb,kc)):bc.push(a);return $b}function F(){if(null!==cc){var a=cc;cc=null;Ob(a)}kc()}
function kc(){if(!dc&&null!==bc){dc=!0;var a=0;try{var b=bc;hc(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});bc=null}catch(c){throw null!==bc&&(bc=bc.slice(a+1)),Nb(Vb,F),c;}finally{dc=!1}}}var lc=3;function mc(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function nc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var oc="function"===typeof Object.is?Object.is:nc,pc=Object.prototype.hasOwnProperty;
function qc(a,b){if(oc(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!pc.call(b,c[d])||!oc(a[c[d]],b[c[d]]))return!1;return!0}function rc(a,b){if(a&&a.defaultProps){b=aa({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var sc={current:null},tc=null,uc=null,vc=null;function wc(){vc=uc=tc=null}
function xc(a,b){var c=a.type._context;Pa?(z(sc,c._currentValue,a),c._currentValue=b):(z(sc,c._currentValue2,a),c._currentValue2=b)}function yc(a){var b=sc.current;y(sc,a);a=a.type._context;Pa?a._currentValue=b:a._currentValue2=b}function zc(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}
function Ac(a,b){tc=a;vc=uc=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(Bc=!0),a.firstContext=null)}function Cc(a,b){if(vc!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)vc=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===uc){if(null===tc)throw Error(n(308));uc=b;tc.dependencies={expirationTime:0,firstContext:b,responders:null}}else uc=uc.next=b}return Pa?a._currentValue:a._currentValue2}var Dc=!1;
function Ec(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Fc(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Gc(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Hc(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Ic(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Ec(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Ec(a.memoizedState),e=c.updateQueue=Ec(c.memoizedState)):d=a.updateQueue=Fc(e):null===e&&(e=c.updateQueue=Fc(d));null===e||d===e?Hc(d,b):null===d.lastUpdate||null===e.lastUpdate?(Hc(d,b),Hc(e,b)):(Hc(d,b),e.lastUpdate=b)}
function Jc(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Ec(a.memoizedState):Kc(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Kc(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Fc(b));return b}
function Lc(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-4097|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return aa({},d,e);case 2:Dc=!0}return d}
function Nc(a,b,c,d,e){Dc=!1;b=Kc(a,b);for(var f=b.baseState,g=null,l=0,h=b.firstUpdate,k=f;null!==h;){var p=h.expirationTime;p<e?(null===g&&(g=h,f=k),l<p&&(l=p)):(Oc(p,h.suspenseConfig),k=Lc(a,b,h,k,c,d),null!==h.callback&&(a.effectTag|=32,h.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=h:(b.lastEffect.nextEffect=h,b.lastEffect=h)));h=h.next}p=null;for(h=b.firstCapturedUpdate;null!==h;){var D=h.expirationTime;D<e?(null===p&&(p=h,null===g&&(f=k)),l<D&&(l=D)):(k=Lc(a,b,h,k,c,d),null!==
h.callback&&(a.effectTag|=32,h.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=h:(b.lastCapturedEffect.nextEffect=h,b.lastCapturedEffect=h)));h=h.next}null===g&&(b.lastUpdate=null);null===p?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===p&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=p;Pc(l);a.expirationTime=l;a.memoizedState=k}
function Qc(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Rc(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Rc(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Rc(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw Error(n(191,c));c.call(d)}a=a.nextEffect}}
var Sc=q.ReactCurrentBatchConfig,Tc=(new ba.Component).refs;function Uc(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:aa({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Xc={isMounted:function(a){return(a=a._reactInternalFiber)?ua(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=G(),e=Sc.suspense;d=Vc(d,a,e);e=Gc(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Ic(a,e);Wc(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=G(),e=Sc.suspense;d=Vc(d,a,e);e=Gc(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Ic(a,e);Wc(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=G(),d=Sc.suspense;
c=Vc(c,a,d);d=Gc(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);Ic(a,d);Wc(a,c)}};function Yc(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!qc(c,d)||!qc(e,f):!0}
function Zc(a,b,c){var d=!1,e=Db;var f=b.contextType;"object"===typeof f&&null!==f?f=Cc(f):(e=C(b)?Eb:A.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Fb(a,e):Db);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Xc;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function $c(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Xc.enqueueReplaceState(b,b.state,null)}
function ad(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Tc;var f=b.contextType;"object"===typeof f&&null!==f?e.context=Cc(f):(f=C(b)?Eb:A.current,e.context=Fb(a,f));f=a.updateQueue;null!==f&&(Nc(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Uc(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Xc.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Nc(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var bd=Array.isArray;
function cd(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(n(309));var d=c.stateNode}if(!d)throw Error(n(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(b){var a=d.refs;a===Tc&&(a=d.refs={});null===b?delete a[e]:a[e]=b};b._stringRef=e;return b}if("string"!==typeof a)throw Error(n(284));if(!c._owner)throw Error(n(290,a));}return a}
function dd(a,b){if("textarea"!==a.type)throw Error(n(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function ed(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(b,a){for(b=new Map;null!==a;)null!==a.key?b.set(a.key,a):b.set(a.index,a),a=a.sibling;return b}function e(b,a,c){b=fd(b,a,c);b.index=0;b.sibling=null;return b}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function l(b,a,c,d){if(null===a||6!==a.tag)return a=gd(c,b.mode,d),a.return=b,a;a=e(a,c,d);a.return=b;return a}function h(b,a,c,d){if(null!==a&&a.elementType===c.type)return d=e(a,c.props,d),d.ref=cd(b,a,c),d.return=b,d;d=hd(c.type,c.key,c.props,null,b.mode,d);d.ref=cd(b,a,c);d.return=b;return d}function k(b,a,c,d){if(null===a||4!==a.tag||a.stateNode.containerInfo!==c.containerInfo||a.stateNode.implementation!==
c.implementation)return a=id(c,b.mode,d),a.return=b,a;a=e(a,c.children||[],d);a.return=b;return a}function p(b,a,c,d,f){if(null===a||7!==a.tag)return a=jd(c,b.mode,d,f),a.return=b,a;a=e(a,c,d);a.return=b;return a}function D(b,a,c){if("string"===typeof a||"number"===typeof a)return a=gd(""+a,b.mode,c),a.return=b,a;if("object"===typeof a&&null!==a){switch(a.$$typeof){case ca:return c=hd(a.type,a.key,a.props,null,b.mode,c),c.ref=cd(b,null,a),c.return=b,c;case da:return a=id(a,b.mode,c),a.return=b,a}if(bd(a)||
ra(a))return a=jd(a,b.mode,c,null),a.return=b,a;dd(b,a)}return null}function x(b,a,c,d){var e=null!==a?a.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:l(b,a,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case ca:return c.key===e?c.type===ea?p(b,a,c.props.children,d,e):h(b,a,c,d):null;case da:return c.key===e?k(b,a,c,d):null}if(bd(c)||ra(c))return null!==e?null:p(b,a,c,d,null);dd(b,c)}return null}function K(b,a,c,d,e){if("string"===typeof d||"number"===typeof d)return b=
b.get(c)||null,l(a,b,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case ca:return b=b.get(null===d.key?c:d.key)||null,d.type===ea?p(a,b,d.props.children,e,d.key):h(a,b,d,e);case da:return b=b.get(null===d.key?c:d.key)||null,k(a,b,d,e)}if(bd(d)||ra(d))return b=b.get(c)||null,p(a,b,d,e,null);dd(a,d)}return null}function Ha(e,g,h,l){for(var k=null,w=null,t=g,r=g=0,p=null;null!==t&&r<h.length;r++){t.index>r?(p=t,t=null):p=t.sibling;var v=x(e,t,h[r],l);if(null===v){null===t&&(t=p);break}a&&
t&&null===v.alternate&&b(e,t);g=f(v,g,r);null===w?k=v:w.sibling=v;w=v;t=p}if(r===h.length)return c(e,t),k;if(null===t){for(;r<h.length;r++)t=D(e,h[r],l),null!==t&&(g=f(t,g,r),null===w?k=t:w.sibling=t,w=t);return k}for(t=d(e,t);r<h.length;r++)p=K(t,e,r,h[r],l),null!==p&&(a&&null!==p.alternate&&t.delete(null===p.key?r:p.key),g=f(p,g,r),null===w?k=p:w.sibling=p,w=p);a&&t.forEach(function(a){return b(e,a)});return k}function O(e,g,h,l){var k=ra(h);if("function"!==typeof k)throw Error(n(150));h=k.call(h);
if(null==h)throw Error(n(151));for(var t=k=null,r=g,w=g=0,p=null,v=h.next();null!==r&&!v.done;w++,v=h.next()){r.index>w?(p=r,r=null):p=r.sibling;var N=x(e,r,v.value,l);if(null===N){null===r&&(r=p);break}a&&r&&null===N.alternate&&b(e,r);g=f(N,g,w);null===t?k=N:t.sibling=N;t=N;r=p}if(v.done)return c(e,r),k;if(null===r){for(;!v.done;w++,v=h.next())v=D(e,v.value,l),null!==v&&(g=f(v,g,w),null===t?k=v:t.sibling=v,t=v);return k}for(r=d(e,r);!v.done;w++,v=h.next())v=K(r,e,w,v.value,l),null!==v&&(a&&null!==
v.alternate&&r.delete(null===v.key?w:v.key),g=f(v,g,w),null===t?k=v:t.sibling=v,t=v);a&&r.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ea&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case ca:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===ea:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ea?f.props.children:f.props,h);d.ref=cd(a,k,f);d.return=a;a=d;break a}else{c(a,
k);break}else b(a,k);k=k.sibling}f.type===ea?(d=jd(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=hd(f.type,f.key,f.props,null,a.mode,h),h.ref=cd(a,d,f),h.return=a,a=h)}return g(a);case da:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=id(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===
typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=gd(f,a.mode,h),d.return=a,a=d),g(a);if(bd(f))return Ha(a,d,f,h);if(ra(f))return O(a,d,f,h);l&&dd(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(n(152,a.displayName||a.name||"Component"));}return c(a,d)}}var kd=ed(!0),ld=ed(!1),md={},H={current:md},nd={current:md},od={current:md};function pd(a){if(a===md)throw Error(n(174));return a}
function qd(a,b){z(od,b,a);z(nd,a,a);z(H,md,a);b=Aa(b);y(H,a);z(H,b,a)}function rd(a){y(H,a);y(nd,a);y(od,a)}function sd(a){var b=pd(od.current),c=pd(H.current);b=Ba(c,a.type,b);c!==b&&(z(nd,a,a),z(H,b,a))}function td(a){nd.current===a&&(y(H,a),y(nd,a))}var I={current:0};
function ud(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||qb(c)||rb(c)))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function vd(a,b){return{responder:a,props:b}}
var wd=q.ReactCurrentDispatcher,J=q.ReactCurrentBatchConfig,xd=0,yd=null,L=null,zd=null,Ad=null,M=null,Bd=null,Cd=0,Dd=null,Ed=0,Fd=!1,Gd=null,Hd=0;function P(){throw Error(n(321));}function Id(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!oc(a[c],b[c]))return!1;return!0}
function Jd(a,b,c,d,e,f){xd=f;yd=b;zd=null!==a?a.memoizedState:null;wd.current=null===zd?Kd:Ld;b=c(d,e);if(Fd){do Fd=!1,Hd+=1,zd=null!==a?a.memoizedState:null,Bd=Ad,Dd=M=L=null,wd.current=Ld,b=c(d,e);while(Fd);Gd=null;Hd=0}wd.current=Md;a=yd;a.memoizedState=Ad;a.expirationTime=Cd;a.updateQueue=Dd;a.effectTag|=Ed;a=null!==L&&null!==L.next;xd=0;Bd=M=Ad=zd=L=yd=null;Cd=0;Dd=null;Ed=0;if(a)throw Error(n(300));return b}
function Nd(){wd.current=Md;xd=0;Bd=M=Ad=zd=L=yd=null;Cd=0;Dd=null;Ed=0;Fd=!1;Gd=null;Hd=0}function Od(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===M?Ad=M=a:M=M.next=a;return M}function Pd(){if(null!==Bd)M=Bd,Bd=M.next,L=zd,zd=null!==L?L.next:null;else{if(null===zd)throw Error(n(310));L=zd;var a={memoizedState:L.memoizedState,baseState:L.baseState,queue:L.queue,baseUpdate:L.baseUpdate,next:null};M=null===M?Ad=a:M.next=a;zd=L.next}return M}
function Qd(a,b){return"function"===typeof b?b(a):b}
function Rd(a){var b=Pd(),c=b.queue;if(null===c)throw Error(n(311));c.lastRenderedReducer=a;if(0<Hd){var d=c.dispatch;if(null!==Gd){var e=Gd.get(c);if(void 0!==e){Gd.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);oc(f,b.memoizedState)||(Bc=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var l=e=null,h=d,k=!1;do{var p=h.expirationTime;p<xd?(k||(k=!0,l=g,e=f),p>Cd&&(Cd=p,Pc(Cd))):(Oc(p,h.suspenseConfig),f=h.eagerReducer===a?h.eagerState:a(f,h.action));g=h;h=h.next}while(null!==h&&h!==d);k||(l=g,e=f);oc(f,b.memoizedState)||(Bc=!0);b.memoizedState=f;b.baseUpdate=l;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function Sd(a){var b=Od();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:a};a=a.dispatch=Td.bind(null,yd,a);return[b.memoizedState,a]}function Ud(a){return Rd(Qd,a)}function Vd(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===Dd?(Dd={lastEffect:null},Dd.lastEffect=a.next=a):(b=Dd.lastEffect,null===b?Dd.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,Dd.lastEffect=a));return a}
function Wd(a,b,c,d){var e=Od();Ed|=a;e.memoizedState=Vd(b,c,void 0,void 0===d?null:d)}function Xd(a,b,c,d){var e=Pd();d=void 0===d?null:d;var f=void 0;if(null!==L){var g=L.memoizedState;f=g.destroy;if(null!==d&&Id(d,g.deps)){Vd(0,c,f,d);return}}Ed|=a;e.memoizedState=Vd(b,c,f,d)}function Yd(a,b){return Wd(516,192,a,b)}function Zd(a,b){return Xd(516,192,a,b)}
function $d(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function ae(){}function be(a,b){Od().memoizedState=[a,void 0===b?null:b];return a}function ce(a,b){var c=Pd();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Id(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Td(a,b,c){if(!(25>Hd))throw Error(n(301));var d=a.alternate;if(a===yd||null!==d&&d===yd)if(Fd=!0,a={expirationTime:xd,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===Gd&&(Gd=new Map),c=Gd.get(b),void 0===c)Gd.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=G(),f=Sc.suspense;e=Vc(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var g=b.last;if(null===g)f.next=f;else{var l=g.next;null!==l&&(f.next=
l);g.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var h=b.lastRenderedState,k=d(h,c);f.eagerReducer=d;f.eagerState=k;if(oc(k,h))return}catch(p){}finally{}Wc(a,e)}}
var Md={readContext:Cc,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useResponder:P,useDeferredValue:P,useTransition:P},Kd={readContext:Cc,useCallback:be,useContext:Cc,useEffect:Yd,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Wd(4,36,$d.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Wd(4,36,a,b)},useMemo:function(a,b){var c=Od();b=void 0===b?null:b;a=a();c.memoizedState=
[a,b];return a},useReducer:function(a,b,c){var d=Od();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Td.bind(null,yd,a);return[d.memoizedState,a]},useRef:function(a){var b=Od();a={current:a};return b.memoizedState=a},useState:Sd,useDebugValue:ae,useResponder:vd,useDeferredValue:function(a,b){var c=Sd(a),d=c[0],e=c[1];Yd(function(){m.unstable_next(function(){var c=J.suspense;J.suspense=void 0===b?null:b;try{e(a)}finally{J.suspense=
c}})},[a,b]);return d},useTransition:function(a){var b=Sd(!1),c=b[0],d=b[1];return[be(function(b){d(!0);m.unstable_next(function(){var c=J.suspense;J.suspense=void 0===a?null:a;try{d(!1),b()}finally{J.suspense=c}})},[a,c]),c]}},Ld={readContext:Cc,useCallback:ce,useContext:Cc,useEffect:Zd,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Xd(4,36,$d.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Xd(4,36,a,b)},useMemo:function(a,b){var c=Pd();b=void 0===b?
null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Id(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:Rd,useRef:function(){return Pd().memoizedState},useState:Ud,useDebugValue:ae,useResponder:vd,useDeferredValue:function(a,b){var c=Ud(a),d=c[0],e=c[1];Zd(function(){m.unstable_next(function(){var c=J.suspense;J.suspense=void 0===b?null:b;try{e(a)}finally{J.suspense=c}})},[a,b]);return d},useTransition:function(a){var b=Ud(!1),c=b[0],d=b[1];return[ce(function(b){d(!0);m.unstable_next(function(){var c=
J.suspense;J.suspense=void 0===a?null:a;try{d(!1),b()}finally{J.suspense=c}})},[a,c]),c]}},de=null,ee=null,fe=!1;function ge(a,b){var c=he(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function ie(a,b){switch(a.tag){case 5:return b=ob(b,a.type,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 6:return b=pb(b,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}function je(a){if(fe){var b=ee;if(b){var c=b;if(!ie(a,b)){b=sb(c);if(!b||!ie(a,b)){a.effectTag=a.effectTag&-1025|2;fe=!1;de=a;return}ge(de,c)}de=a;ee=tb(b)}else a.effectTag=a.effectTag&-1025|2,fe=!1,de=a}}
function ke(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;de=a}function ne(a){if(!Sa||a!==de)return!1;if(!fe)return ke(a),fe=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ja(b,a.memoizedProps))for(b=ee;b;)ge(a,b),b=sb(b);ke(a);if(13===a.tag){if(!Sa)throw Error(n(316));a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(n(317));ee=wb(a)}else ee=de?sb(a.stateNode):null;return!0}function oe(){Sa&&(ee=de=null,fe=!1)}var pe=q.ReactCurrentOwner,Bc=!1;
function Q(a,b,c,d){b.child=null===a?ld(b,null,c,d):kd(b,a.child,c,d)}function qe(a,b,c,d,e){c=c.render;var f=b.ref;Ac(b,e);d=Jd(a,b,c,d,f,e);if(null!==a&&!Bc)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),re(a,b,e);b.effectTag|=1;Q(a,b,d,e);return b.child}
function se(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!te(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ue(a,b,g,d,e,f);a=hd(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:qc,c(e,d)&&a.ref===b.ref))return re(a,b,f);b.effectTag|=1;a=fd(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function ue(a,b,c,d,e,f){return null!==a&&qc(a.memoizedProps,d)&&a.ref===b.ref&&(Bc=!1,e<f)?re(a,b,f):ve(a,b,c,d,f)}function we(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function ve(a,b,c,d,e){var f=C(c)?Eb:A.current;f=Fb(b,f);Ac(b,e);c=Jd(a,b,c,d,f,e);if(null!==a&&!Bc)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),re(a,b,e);b.effectTag|=1;Q(a,b,c,e);return b.child}
function xe(a,b,c,d,e){if(C(c)){var f=!0;Kb(b)}else f=!1;Ac(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Zc(b,c,d,e),ad(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,l=b.memoizedProps;g.props=l;var h=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=Cc(k):(k=C(c)?Eb:A.current,k=Fb(b,k));var p=c.getDerivedStateFromProps,D="function"===typeof p||"function"===typeof g.getSnapshotBeforeUpdate;D||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(l!==d||h!==k)&&$c(b,g,d,k);Dc=!1;var x=b.memoizedState;h=g.state=x;var K=b.updateQueue;null!==K&&(Nc(b,K,d,g,e),h=b.memoizedState);l!==d||x!==h||B.current||Dc?("function"===typeof p&&(Uc(b,c,p,d),h=b.memoizedState),(l=Dc||Yc(b,c,l,d,x,h,k))?(D||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=h),g.props=d,g.state=h,g.context=k,d=l):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,l=b.memoizedProps,g.props=b.type===b.elementType?l:rc(b.type,l),h=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=Cc(k):(k=C(c)?Eb:A.current,k=Fb(b,k)),p=c.getDerivedStateFromProps,(D=
"function"===typeof p||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(l!==d||h!==k)&&$c(b,g,d,k),Dc=!1,h=b.memoizedState,x=g.state=h,K=b.updateQueue,null!==K&&(Nc(b,K,d,g,e),x=b.memoizedState),l!==d||h!==x||B.current||Dc?("function"===typeof p&&(Uc(b,c,p,d),x=b.memoizedState),(p=Dc||Yc(b,c,l,d,h,x,k))?(D||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||
("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||l===a.memoizedProps&&h===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||l===a.memoizedProps&&h===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=p):("function"!==typeof g.componentDidUpdate||l===a.memoizedProps&&h===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||l===a.memoizedProps&&h===a.memoizedState||(b.effectTag|=256),d=!1);return ye(a,b,c,d,f,e)}
function ye(a,b,c,d,e,f){we(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Lb(b,c,!1),re(a,b,f);d=b.stateNode;pe.current=b;var l=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=kd(b,a.child,null,f),b.child=kd(b,null,l,f)):Q(a,b,l,f);b.memoizedState=d.state;e&&Lb(b,c,!0);return b.child}function ze(a){var b=a.stateNode;b.pendingContext?Ib(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ib(a,b.context,!1);qd(a,b.containerInfo)}
var Ae={dehydrated:null,retryTime:0};
function Be(a,b,c){var d=b.mode,e=b.pendingProps,f=I.current,g=!1,l;(l=0!==(b.effectTag&64))||(l=0!==(f&2)&&(null===a||null!==a.memoizedState));l?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);z(I,f&1,b);if(null===a){void 0!==e.fallback&&je(b);if(g){g=e.fallback;e=jd(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=jd(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=Ae;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=ld(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=fd(a,a.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=fd(d,e,d.expirationTime);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=Ae;b.child=c;return d}c=kd(b,a.child,e.children,c);b.memoizedState=
null;return b.child=c}a=a.child;if(g){g=e.fallback;e=jd(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=jd(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=Ae;b.child=e;return c}b.memoizedState=null;return b.child=kd(b,a,e.children,c)}
function Ce(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);zc(a.return,b)}function De(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function Ee(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Q(a,b,d.children,c);d=I.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&Ce(a,c);else if(19===a.tag)Ce(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}z(I,d,b);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ud(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);De(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ud(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}De(b,!0,c,null,f,b.lastEffect);break;case "together":De(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function re(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Pc(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(n(153));if(null!==b.child){a=b.child;c=fd(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=fd(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function Fe(a){a.effectTag|=4}var Ge,He,Ie,Je;
if(Qa)Ge=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)Fa(a,c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}},He=function(){},Ie=function(a,b,c,d,e){a=a.memoizedProps;if(a!==d){var f=b.stateNode,g=pd(H.current);c=Ia(f,c,a,d,e,g);(b.updateQueue=c)&&Fe(b)}},Je=function(a,b,c,d){c!==d&&Fe(b)};else if(Ra){Ge=function(a,
b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=mb(f,e.type,e.memoizedProps,e));Fa(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=nb(f,e.memoizedProps,e)),Fa(a,f);else if(4!==e.tag){if(13===e.tag&&0!==(e.effectTag&4)&&(f=null!==e.memoizedState)){var g=e.child;if(null!==g&&(null!==g.child&&(g.child.return=g,Ge(a,g,!0,f)),f=g.sibling,null!==f)){f.return=e;e=f;continue}}if(null!==e.child){e.child.return=e;e=e.child;continue}}if(e===b)break;for(;null===e.sibling;){if(null===
e.return||e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};var Ke=function(a,b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=mb(f,e.type,e.memoizedProps,e));ib(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=nb(f,e.memoizedProps,e)),ib(a,f);else if(4!==e.tag){if(13===e.tag&&0!==(e.effectTag&4)&&(f=null!==e.memoizedState)){var g=e.child;if(null!==g&&(null!==g.child&&(g.child.return=g,Ke(a,g,!0,f)),f=g.sibling,null!==f)){f.return=e;e=f;continue}}if(null!==
e.child){e.child.return=e;e=e.child;continue}}if(e===b)break;for(;null===e.sibling;){if(null===e.return||e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};He=function(a){var b=a.stateNode;if(null!==a.firstEffect){var c=b.containerInfo,d=hb(c);Ke(d,a,!1,!1);b.pendingChildren=d;Fe(a);kb(c,d)}};Ie=function(a,b,c,d,e){var f=a.stateNode,g=a.memoizedProps;if((a=null===b.firstEffect)&&g===d)b.stateNode=f;else{var l=b.stateNode,h=pd(H.current),k=null;g!==d&&(k=Ia(l,c,g,d,e,h));a&&null===
k?b.stateNode=f:(f=gb(f,k,c,g,d,b,a,l),Ga(f,c,d,e,h)&&Fe(b),b.stateNode=f,a?Fe(b):Ge(f,b,!1,!1))}};Je=function(a,b,c,d){c!==d&&(a=pd(od.current),c=pd(H.current),b.stateNode=La(d,a,c,b),Fe(b))}}else He=function(){},Ie=function(){},Je=function(){};
function Le(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Me(a){switch(a.tag){case 1:C(a.type)&&Gb(a);var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:rd(a);Hb(a);b=a.effectTag;if(0!==(b&64))throw Error(n(285));a.effectTag=b&-4097|64;return a;case 5:return td(a),null;case 13:return y(I,a),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return y(I,a),null;case 4:return rd(a),null;case 10:return yc(a),null;default:return null}}function Ne(a,b){return{value:a,source:b,stack:Ab(b)}}
var Oe="function"===typeof WeakSet?WeakSet:Set;function Pe(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Ab(c));null!==c&&ta(c.type);b=b.value;null!==a&&1===a.tag&&ta(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Qe(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Re(a,c)}}function Se(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Re(a,c)}else b.current=null}
function Te(a,b){switch(b.tag){case 0:case 11:case 15:Ue(2,0,b);break;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:rc(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break;case 3:case 5:case 6:case 4:case 17:break;default:throw Error(n(163));}}
function Ue(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}0!==(d.tag&b)&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function Ve(a,b,c){"function"===typeof We&&We(b);switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;hc(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(l){Re(g,l)}}a=a.next}while(a!==d)})}break;case 1:Se(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Qe(b,c);break;case 5:Se(b);break;case 4:Qa?Xe(a,b,c):Ra&&Ye(b)}}
function Ze(a,b,c){for(var d=b;;)if(Ve(a,d,c),null===d.child||Qa&&4===d.tag){if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return}d.sibling.return=d.return;d=d.sibling}else d.child.return=d,d=d.child}function $e(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;null!==b&&$e(b)}
function Ye(a){if(Ra){a=a.stateNode.containerInfo;var b=hb(a);lb(a,b)}}function af(a){return 5===a.tag||3===a.tag||4===a.tag}
function bf(a){if(Qa){a:{for(var b=a.return;null!==b;){if(af(b)){var c=b;break a}b=b.return}throw Error(n(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(n(161));}c.effectTag&16&&(bb(b),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||af(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f)f=f?e.stateNode:e.stateNode.instance,c?d?Za(b,f,c):Ya(b,f,c):d?Ua(b,f):Ta(b,f);else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}}
function Xe(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(n(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag)Ze(a,d,c),g?ab(f,d.stateNode):$a(f,d.stateNode);else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ve(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;
for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function cf(a,b){if(Qa)switch(b.tag){case 0:case 11:case 14:case 15:Ue(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Xa(c,f,e,a,d,b)}break;case 6:if(null===b.stateNode)throw Error(n(162));c=b.memoizedProps;Va(b.stateNode,null!==a?a.memoizedProps:c,c);break;case 3:Sa&&(b=b.stateNode,b.hydrate&&(b.hydrate=!1,xb(b.containerInfo)));break;case 12:break;case 13:df(b);ef(b);break;
case 19:ef(b);break;case 17:break;case 20:break;case 21:break;default:throw Error(n(163));}else{switch(b.tag){case 0:case 11:case 14:case 15:Ue(4,8,b);return;case 12:return;case 13:df(b);ef(b);return;case 19:ef(b);return;case 3:Sa&&(c=b.stateNode,c.hydrate&&(c.hydrate=!1,xb(c.containerInfo)))}a:if(Ra)switch(b.tag){case 1:case 5:case 6:case 20:break a;case 3:case 4:b=b.stateNode;lb(b.containerInfo,b.pendingChildren);break a;default:throw Error(n(163));}}}
function df(a){var b=a;if(null===a.memoizedState)var c=!1;else c=!0,b=a.child,ff=E();if(Qa&&null!==b)a:if(a=b,Qa)for(b=a;;){if(5===b.tag){var d=b.stateNode;c?cb(d):eb(b.stateNode,b.memoizedProps)}else if(6===b.tag)d=b.stateNode,c?db(d):fb(d,b.memoizedProps);else if(13===b.tag&&null!==b.memoizedState&&null===b.memoizedState.dehydrated){d=b.child.sibling;d.return=b;b=d;continue}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break a;for(;null===b.sibling;){if(null===b.return||b.return===
a)break a;b=b.return}b.sibling.return=b.return;b=b.sibling}}function ef(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Oe);b.forEach(function(b){var d=gf.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}var hf="function"===typeof WeakMap?WeakMap:Map;function jf(a,b,c){c=Gc(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){kf||(kf=!0,lf=d);Pe(a,b)};return c}
function mf(a,b,c){c=Gc(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Pe(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===nf?nf=new Set([this]):nf.add(this),Pe(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var of=Math.ceil,pf=q.ReactCurrentDispatcher,qf=q.ReactCurrentOwner,R=0,rf=8,S=16,sf=32,tf=0,uf=1,vf=2,wf=3,xf=4,yf=5,T=R,U=null,V=null,W=0,X=tf,zf=null,Af=1073741823,Bf=1073741823,Cf=null,Df=0,Ef=!1,ff=0,Ff=500,Y=null,kf=!1,lf=null,nf=null,Gf=!1,Hf=null,If=90,Jf=null,Kf=0,Lf=null,Mf=0;function G(){return(T&(S|sf))!==R?1073741821-(E()/10|0):0!==Mf?Mf:Mf=1073741821-(E()/10|0)}
function Vc(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=fc();if(0===(b&4))return 99===d?1073741823:1073741822;if((T&S)!==R)return W;if(null!==c)a=mc(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=mc(a,150,100);break;case 97:case 96:a=mc(a,5E3,250);break;case 95:a=2;break;default:throw Error(n(326));}null!==U&&a===W&&--a;return a}
function Wc(a,b){if(50<Kf)throw Kf=0,Lf=null,Error(n(185));a=Nf(a,b);if(null!==a){var c=fc();1073741823===b?(T&rf)!==R&&(T&(S|sf))===R?Of(a):(Z(a),T===R&&F()):Z(a);(T&4)===R||98!==c&&99!==c||(null===Jf?Jf=new Map([[a,b]]):(c=Jf.get(a),(void 0===c||c>b)&&Jf.set(a,b)))}}
function Nf(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(U===e&&(Pc(b),X===xf&&Pf(e,W)),Qf(e,b));return e}
function Rf(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Sf(a,b))return b;b=a.lastPingedTime;a=a.nextKnownPendingLevel;return b>a?b:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=jc(Of.bind(null,a));else{var b=Rf(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=G();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==$b&&Ob(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?jc(Of.bind(null,a)):ic(d,Tf.bind(null,a),{timeout:10*(1073741821-b)-E()});a.callbackNode=b}}}
function Tf(a,b){Mf=0;if(b)return b=G(),Uf(a,b),Z(a),null;var c=Rf(a);if(0!==c){b=a.callbackNode;if((T&(S|sf))!==R)throw Error(n(327));Vf();a===U&&c===W||Wf(a,c);if(null!==V){var d=T;T|=S;var e=Xf(a);do try{Yf();break}catch(l){Zf(a,l)}while(1);wc();T=d;pf.current=e;if(X===uf)throw b=zf,Wf(a,c),Pf(a,c),Z(a),b;if(null===V)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=X,U=null,d){case tf:case uf:throw Error(n(345));case vf:Uf(a,2<c?2:c);break;case wf:Pf(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=$f(e));if(1073741823===Af&&(e=ff+Ff-E(),10<e)){if(Ef){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Wf(a,c);break}}f=Rf(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Ma(ag.bind(null,a),e);break}ag(a);break;case xf:Pf(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=$f(e));if(Ef&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Wf(a,c);break}e=Rf(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==Bf?d=10*(1073741821-Bf)-E():1073741823===Af?d=0:(d=10*(1073741821-Af)-5E3,e=E(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*of(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Ma(ag.bind(null,a),d);break}ag(a);break;case yf:if(1073741823!==Af&&null!==Cf){f=Af;var g=Cf;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=E()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){Pf(a,c);a.timeoutHandle=
Ma(ag.bind(null,a),d);break}}ag(a);break;default:throw Error(n(329));}Z(a);if(a.callbackNode===b)return Tf.bind(null,a)}}return null}
function Of(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if(a.finishedExpirationTime===b)ag(a);else{if((T&(S|sf))!==R)throw Error(n(327));Vf();a===U&&b===W||Wf(a,b);if(null!==V){var c=T;T|=S;var d=Xf(a);do try{bg();break}catch(e){Zf(a,e)}while(1);wc();T=c;pf.current=d;if(X===uf)throw c=zf,Wf(a,b),Pf(a,b),Z(a),c;if(null!==V)throw Error(n(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;U=null;ag(a);Z(a)}}return null}function cg(a,b){Uf(a,b);Z(a);(T&(S|sf))===R&&F()}
function dg(){if(null!==Jf){var a=Jf;Jf=null;a.forEach(function(a,c){Uf(c,a);Z(c)});F()}}function eg(a,b){if((T&(S|sf))!==R)throw Error(n(187));var c=T;T|=1;try{return hc(99,a.bind(null,b))}finally{T=c,F()}}
function Wf(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;c!==Oa&&(a.timeoutHandle=Oa,Na(c));if(null!==V)for(c=V.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Gb(d);break;case 3:rd(d);Hb(d);break;case 5:td(d);break;case 4:rd(d);break;case 13:y(I,d);break;case 19:y(I,d);break;case 10:yc(d)}c=c.return}U=a;V=fd(a.current,null,b);W=b;X=tf;zf=null;Bf=Af=1073741823;Cf=null;Df=0;Ef=!1}
function Zf(a,b){do{try{wc();Nd();if(null===V||null===V.return)return X=uf,zf=b,null;a:{var c=a,d=V.return,e=V,f=b;b=W;e.effectTag|=2048;e.firstEffect=e.lastEffect=null;if(null!==f&&"object"===typeof f&&"function"===typeof f.then){var g=f,l=0!==(I.current&1),h=d;do{var k;if(k=13===h.tag){var p=h.memoizedState;if(null!==p)k=null!==p.dehydrated?!0:!1;else{var D=h.memoizedProps;k=void 0===D.fallback?!1:!0!==D.unstable_avoidThisFallback?!0:l?!1:!0}}if(k){var x=h.updateQueue;if(null===x){var K=new Set;
K.add(g);h.updateQueue=K}else x.add(g);if(0===(h.mode&2)){h.effectTag|=64;e.effectTag&=-2981;if(1===e.tag)if(null===e.alternate)e.tag=17;else{var Ha=Gc(1073741823,null);Ha.tag=2;Ic(e,Ha)}e.expirationTime=1073741823;break a}f=void 0;e=b;var O=c.pingCache;null===O?(O=c.pingCache=new hf,f=new Set,O.set(g,f)):(f=O.get(g),void 0===f&&(f=new Set,O.set(g,f)));if(!f.has(e)){f.add(e);var w=fg.bind(null,c,g,e);g.then(w,w)}h.effectTag|=4096;h.expirationTime=b;break a}h=h.return}while(null!==h);f=Error((ta(e.type)||
"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Ab(e))}X!==yf&&(X=vf);f=Ne(f,e);h=d;do{switch(h.tag){case 3:g=f;h.effectTag|=4096;h.expirationTime=b;var r=jf(h,g,b);Jc(h,r);break a;case 1:g=f;var t=h.type,N=h.stateNode;if(0===(h.effectTag&64)&&("function"===typeof t.getDerivedStateFromError||null!==N&&"function"===typeof N.componentDidCatch&&
(null===nf||!nf.has(N)))){h.effectTag|=4096;h.expirationTime=b;var Mc=mf(h,g,b);Jc(h,Mc);break a}}h=h.return}while(null!==h)}V=gg(V)}catch(Rb){b=Rb;continue}break}while(1)}function Xf(){var a=pf.current;pf.current=Md;return null===a?Md:a}function Oc(a,b){a<Af&&2<a&&(Af=a);null!==b&&a<Bf&&2<a&&(Bf=a,Cf=b)}function Pc(a){a>Df&&(Df=a)}function bg(){for(;null!==V;)V=hg(V)}function Yf(){for(;null!==V&&!Pb();)V=hg(V)}
function hg(a){var b=ig(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=gg(a));qf.current=null;return b}
function gg(a){V=a;do{var b=V.alternate;a=V.return;if(0===(V.effectTag&2048)){a:{var c=b;b=V;var d=W,e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:C(b.type)&&Gb(b);break;case 3:rd(b);Hb(b);e=b.stateNode;e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null);(null===c||null===c.child)&&ne(b)&&Fe(b);He(b);break;case 5:td(b);var f=pd(od.current);d=b.type;if(null!==c&&null!=b.stateNode)Ie(c,b,d,e,f),c.ref!==b.ref&&(b.effectTag|=128);else if(e){c=pd(H.current);
if(ne(b)){e=b;if(!Sa)throw Error(n(175));c=ub(e.stateNode,e.type,e.memoizedProps,f,c,e);e.updateQueue=c;c=null!==c?!0:!1;c&&Fe(b)}else{var g=Ea(d,e,f,c,b);Ge(g,b,!1,!1);b.stateNode=g;Ga(g,d,e,f,c)&&Fe(b)}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw Error(n(166));break;case 6:if(c&&null!=b.stateNode)Je(c,b,c.memoizedProps,e);else{if("string"!==typeof e&&null===b.stateNode)throw Error(n(166));c=pd(od.current);f=pd(H.current);if(ne(b)){c=b;if(!Sa)throw Error(n(176));(c=vb(c.stateNode,
c.memoizedProps,c))&&Fe(b)}else b.stateNode=La(e,c,f,b)}break;case 11:break;case 13:y(I,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}e=null!==e;f=!1;null===c?void 0!==b.memoizedProps.fallback&&ne(b):(d=c.memoizedState,f=null!==d,e||null===d||(d=c.child.sibling,null!==d&&(g=b.firstEffect,null!==g?(b.firstEffect=d,d.nextEffect=g):(b.firstEffect=b.lastEffect=d,d.nextEffect=null),d.effectTag=8)));if(e&&!f&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||
0!==(I.current&1))X===tf&&(X=wf);else{if(X===tf||X===wf)X=xf;0!==Df&&null!==U&&(Pf(U,W),Qf(U,Df))}Ra&&e&&(b.effectTag|=4);Qa&&(e||f)&&(b.effectTag|=4);break;case 7:break;case 8:break;case 12:break;case 4:rd(b);He(b);break;case 10:yc(b);break;case 9:break;case 14:break;case 17:C(b.type)&&Gb(b);break;case 19:y(I,b);e=b.memoizedState;if(null===e)break;f=0!==(b.effectTag&64);g=e.rendering;if(null===g)if(f)Le(e,!1);else{if(X!==tf||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){g=ud(c);if(null!==
g){b.effectTag|=64;Le(e,!1);c=g.updateQueue;null!==c&&(b.updateQueue=c,b.effectTag|=4);null===e.lastEffect&&(b.firstEffect=null);b.lastEffect=e.lastEffect;c=d;for(e=b.child;null!==e;)f=e,d=c,f.effectTag&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childExpirationTime=0,f.expirationTime=d,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null):(f.childExpirationTime=g.childExpirationTime,f.expirationTime=g.expirationTime,
f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,d=g.dependencies,f.dependencies=null===d?null:{expirationTime:d.expirationTime,firstContext:d.firstContext,responders:d.responders}),e=e.sibling;z(I,I.current&1|2,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=ud(g),null!==c){if(b.effectTag|=64,f=!0,c=c.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),Le(e,!0),null===e.tail&&"hidden"===e.tailMode){b=b.lastEffect=e.lastEffect;null!==
b&&(b.nextEffect=null);break}}else E()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,Le(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(g.sibling=b.child,b.child=g):(c=e.last,null!==c?c.sibling=g:b.child=g,e.last=g)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=E()+500);c=e.tail;e.rendering=c;e.tail=c.sibling;e.lastEffect=b.lastEffect;c.sibling=null;e=I.current;e=f?e&1|2:e&1;z(I,e,b);b=c;break a}break;case 20:break;case 21:break;default:throw Error(n(156,b.tag));}b=null}c=
V;if(1===W||1!==c.childExpirationTime){e=0;for(f=c.child;null!==f;)d=f.expirationTime,g=f.childExpirationTime,d>e&&(e=d),g>e&&(e=g),f=f.sibling;c.childExpirationTime=e}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=V.firstEffect),a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V:a.firstEffect=V,a.lastEffect=V))}else{b=Me(V,W);if(null!==
b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===tf&&(X=yf);return null}function $f(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function ag(a){var b=fc();hc(99,jg.bind(null,a,b));return null}
function jg(a,b){Vf();if((T&(S|sf))!==R)throw Error(n(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(n(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=$f(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=d-1);d<=a.lastPingedTime&&
(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===U&&(V=U=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=T;T|=sf;qf.current=null;Ca(a.containerInfo);Y=e;do try{kg()}catch(jb){if(null===Y)throw Error(n(330));Re(Y,jb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(var g=a,l=b;null!==Y;){var h=Y.effectTag;h&16&&Qa&&bb(Y.stateNode);if(h&128){var k=Y.alternate;if(null!==k){var p=k.ref;null!==p&&("function"===
typeof p?p(null):p.current=null)}}switch(h&1038){case 2:bf(Y);Y.effectTag&=-3;break;case 6:bf(Y);Y.effectTag&=-3;cf(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=-1025;cf(Y.alternate,Y);break;case 4:cf(Y.alternate,Y);break;case 8:var D=g,x=Y,K=l;Qa?Xe(D,x,K):Ze(D,x,K);$e(x)}Y=Y.nextEffect}}catch(jb){if(null===Y)throw Error(n(330));Re(Y,jb);Y=Y.nextEffect}while(null!==Y);Da(a.containerInfo);a.current=c;Y=e;do try{for(h=d;null!==Y;){var Ha=Y.effectTag;if(Ha&36){var O=
Y.alternate;k=Y;p=h;switch(k.tag){case 0:case 11:case 15:Ue(16,32,k);break;case 1:var w=k.stateNode;if(k.effectTag&4)if(null===O)w.componentDidMount();else{var r=k.elementType===k.type?O.memoizedProps:rc(k.type,O.memoizedProps);w.componentDidUpdate(r,O.memoizedState,w.__reactInternalSnapshotBeforeUpdate)}var t=k.updateQueue;null!==t&&Qc(k,t,w,p);break;case 3:var N=k.updateQueue;if(null!==N){g=null;if(null!==k.child)switch(k.child.tag){case 5:g=za(k.child.stateNode);break;case 1:g=k.child.stateNode}Qc(k,
N,g,p)}break;case 5:var Mc=k.stateNode;null===O&&k.effectTag&4&&Wa(Mc,k.type,k.memoizedProps,k);break;case 6:break;case 4:break;case 12:break;case 13:if(Sa&&null===k.memoizedState){var Rb=k.alternate;if(null!==Rb){var le=Rb.memoizedState;if(null!==le){var me=le.dehydrated;null!==me&&yb(me)}}}break;case 19:case 17:case 20:case 21:break;default:throw Error(n(163));}}if(Ha&128){k=void 0;var Sb=Y.ref;if(null!==Sb){var v=Y.stateNode;switch(Y.tag){case 5:k=za(v);break;default:k=v}"function"===typeof Sb?
Sb(k):Sb.current=k}}Y=Y.nextEffect}}catch(jb){if(null===Y)throw Error(n(330));Re(Y,jb);Y=Y.nextEffect}while(null!==Y);Y=null;ac();T=f}else a.current=c;if(Gf)Gf=!1,Hf=a,If=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(nf=null);1073741823===b?a===Lf?Kf++:(Kf=0,Lf=a):Kf=0;"function"===typeof lg&&lg(c.stateNode,d);Z(a);if(kf)throw kf=!1,a=lf,lf=null,a;if((T&rf)!==R)return null;F();return null}
function kg(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Te(Y.alternate,Y);0===(a&512)||Gf||(Gf=!0,ic(97,function(){Vf();return null}));Y=Y.nextEffect}}function Vf(){if(90!==If){var a=97<If?97:If;If=90;return hc(a,mg)}}
function mg(){if(null===Hf)return!1;var a=Hf;Hf=null;if((T&(S|sf))!==R)throw Error(n(331));var b=T;T|=sf;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:Ue(128,0,c),Ue(0,64,c)}}catch(d){if(null===a)throw Error(n(330));Re(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}T=b;F();return!0}function ng(a,b,c){b=Ne(c,b);b=jf(a,b,1073741823);Ic(a,b);a=Nf(a,1073741823);null!==a&&Z(a)}
function Re(a,b){if(3===a.tag)ng(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){ng(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===nf||!nf.has(d))){a=Ne(b,a);a=mf(c,a,1073741823);Ic(c,a);c=Nf(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function fg(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);U===a&&W===c?X===xf||X===wf&&1073741823===Af&&E()-ff<Ff?Wf(a,W):Ef=!0:Sf(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),Z(a)))}function gf(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=G(),b=Vc(b,a,null));a=Nf(a,b);null!==a&&Z(a)}var ig;
ig=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||B.current)Bc=!0;else{if(d<c){Bc=!1;switch(b.tag){case 3:ze(b);oe();break;case 5:sd(b);if(b.mode&4&&1!==c&&Ka(b.type,e))return b.expirationTime=b.childExpirationTime=1,null;break;case 1:C(b.type)&&Kb(b);break;case 4:qd(b,b.stateNode.containerInfo);break;case 10:xc(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Be(a,b,c);z(I,I.current&
1,b);b=re(a,b,c);return null!==b?b.sibling:null}z(I,I.current&1,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Ee(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);z(I,I.current,b);if(!d)return null}return re(a,b,c)}Bc=!1}}else Bc=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Fb(b,A.current);Ac(b,c);e=Jd(null,b,d,a,e,c);b.effectTag|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;Nd();if(C(d)){var f=!0;Kb(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Uc(b,d,g,a);e.updater=Xc;b.stateNode=e;e._reactInternalFiber=b;ad(b,d,a,c);b=ye(null,b,d,!0,f,c)}else b.tag=0,Q(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;sa(e);if(1!==e._status)throw e._result;
e=e._result;b.type=e;f=b.tag=og(e);a=rc(e,a);switch(f){case 0:b=ve(null,b,e,a,c);break;case 1:b=xe(null,b,e,a,c);break;case 11:b=qe(null,b,e,a,c);break;case 14:b=se(null,b,e,rc(e.type,a),d,c);break;default:throw Error(n(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:rc(d,e),ve(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:rc(d,e),xe(a,b,d,e,c);case 3:ze(b);d=b.updateQueue;if(null===d)throw Error(n(282));e=b.memoizedState;e=null!==e?e.element:
null;Nc(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)oe(),b=re(a,b,c);else{if(e=b.stateNode.hydrate)Sa?(ee=tb(b.stateNode.containerInfo),de=b,e=fe=!0):e=!1;if(e)for(c=ld(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else Q(a,b,d,c),oe();b=b.child}return b;case 5:return sd(b),null===a&&je(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ja(d,e)?g=null:null!==f&&Ja(d,f)&&(b.effectTag|=16),we(a,b),b.mode&4&&1!==c&&Ka(d,e)?(b.expirationTime=
b.childExpirationTime=1,b=null):(Q(a,b,g,c),b=b.child),b;case 6:return null===a&&je(b),null;case 13:return Be(a,b,c);case 4:return qd(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=kd(b,null,d,c):Q(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:rc(d,e),qe(a,b,d,e,c);case 7:return Q(a,b,b.pendingProps,c),b.child;case 8:return Q(a,b,b.pendingProps.children,c),b.child;case 12:return Q(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;
e=b.pendingProps;g=b.memoizedProps;f=e.value;xc(b,f);if(null!==g){var l=g.value;f=oc(l,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(l,f):1073741823)|0;if(0===f){if(g.children===e.children&&!B.current){b=re(a,b,c);break a}}else for(l=b.child,null!==l&&(l.return=b);null!==l;){var h=l.dependencies;if(null!==h){g=l.child;for(var k=h.firstContext;null!==k;){if(k.context===d&&0!==(k.observedBits&f)){1===l.tag&&(k=Gc(c,null),k.tag=2,Ic(l,k));l.expirationTime<c&&(l.expirationTime=
c);k=l.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);zc(l.return,c);h.expirationTime<c&&(h.expirationTime=c);break}k=k.next}}else g=10===l.tag?l.type===b.type?null:l.child:l.child;if(null!==g)g.return=l;else for(g=l;null!==g;){if(g===b){g=null;break}l=g.sibling;if(null!==l){l.return=g.return;g=l;break}g=g.return}l=g}}Q(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ac(b,c),e=Cc(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,Q(a,b,d,c),b.child;
case 14:return e=b.type,f=rc(e,b.pendingProps),f=rc(e.type,f),se(a,b,e,f,d,c);case 15:return ue(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:rc(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,C(d)?(a=!0,Kb(b)):a=!1,Ac(b,c),Zc(b,d,e,c),ad(b,d,e,c),ye(null,b,d,!0,a,c);case 19:return Ee(a,b,c)}throw Error(n(156,b.tag));};var lg=null,We=null;
function pg(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);lg=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};We=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function qg(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function he(a,b,c,d){return new qg(a,b,c,d)}
function te(a){a=a.prototype;return!(!a||!a.isReactComponent)}function og(a){if("function"===typeof a)return te(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===la)return 11;if(a===oa)return 14}return 2}
function fd(a,b){var c=a.alternate;null===c?(c=he(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function hd(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)te(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ea:return jd(c.children,e,f,b);case ka:g=8;e|=7;break;case fa:g=8;e|=1;break;case ha:return a=he(12,c,b,e|8),a.elementType=ha,a.type=ha,a.expirationTime=f,a;case ma:return a=he(13,c,b,e),a.type=ma,a.elementType=ma,a.expirationTime=f,a;case na:return a=he(19,c,b,e),a.elementType=na,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case ia:g=
10;break a;case ja:g=9;break a;case la:g=11;break a;case oa:g=14;break a;case pa:g=16;d=null;break a}throw Error(n(130,null==a?a:typeof a,""));}b=he(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function jd(a,b,c,d){a=he(7,a,d,b);a.expirationTime=c;return a}function gd(a,b,c){a=he(6,a,null,b);a.expirationTime=c;return a}
function id(a,b,c){b=he(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function rg(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=Oa;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Sf(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function Pf(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function Qf(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Uf(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function sg(a){var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(n(188));throw Error(n(268,Object.keys(a)));}a=xa(b);return null===a?null:a.stateNode}function tg(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ug(a,b){tg(a,b);(a=a.alternate)&&tg(a,b)}
var vg={createContainer:function(a,b,c){a=new rg(a,b,c);b=he(3,null,null,2===b?7:1===b?3:0);a.current=b;return b.stateNode=a},updateContainer:function(a,b,c,d){var e=b.current,f=G(),g=Sc.suspense;f=Vc(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(ua(c)!==c||1!==c.tag)throw Error(n(170));var l=c;do{switch(l.tag){case 3:l=l.stateNode.context;break b;case 1:if(C(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break b}}l=l.return}while(null!==l);throw Error(n(171));}if(1===c.tag){var h=
c.type;if(C(h)){c=Jb(c,h,l);break a}}c=l}else c=Db;null===b.context?b.context=c:b.pendingContext=c;b=Gc(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);Ic(e,b);Wc(e,f);return f},batchedEventUpdates:function(a,b){var c=T;T|=2;try{return a(b)}finally{T=c,T===R&&F()}},batchedUpdates:function(a,b){var c=T;T|=1;try{return a(b)}finally{T=c,T===R&&F()}},unbatchedUpdates:function(a,b){var c=T;T&=-2;T|=rf;try{return a(b)}finally{T=c,T===R&&F()}},deferredUpdates:function(a){return hc(97,
a)},syncUpdates:function(a,b,c,d){return hc(99,a.bind(null,b,c,d))},discreteUpdates:function(a,b,c,d){var e=T;T|=4;try{return hc(98,a.bind(null,b,c,d))}finally{T=e,T===R&&F()}},flushDiscreteUpdates:function(){(T&(1|S|sf))===R&&(dg(),Vf())},flushControlled:function(a){var b=T;T|=1;try{hc(99,a)}finally{T=b,T===R&&F()}},flushSync:eg,flushPassiveEffects:Vf,IsThisRendererActing:{current:!1},getPublicRootInstance:function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return za(a.child.stateNode);
default:return a.child.stateNode}},attemptSynchronousHydration:function(a){switch(a.tag){case 3:var b=a.stateNode;b.hydrate&&cg(b,b.firstPendingTime);break;case 13:eg(function(){return Wc(a,1073741823)}),b=mc(G(),150,100),ug(a,b)}},attemptUserBlockingHydration:function(a){if(13===a.tag){var b=mc(G(),150,100);Wc(a,b);ug(a,b)}},attemptContinuousHydration:function(a){if(13===a.tag){G();var b=lc++;Wc(a,b);ug(a,b)}},attemptHydrationAtCurrentPriority:function(a){if(13===a.tag){var b=G();b=Vc(b,a,null);
Wc(a,b);ug(a,b)}},findHostInstance:sg,findHostInstanceWithWarning:function(a){return sg(a)},findHostInstanceWithNoPortals:function(a){a=ya(a);return null===a?null:20===a.tag?a.stateNode.instance:a.stateNode},shouldSuspend:function(){return!1},injectIntoDevTools:function(a){var b=a.findFiberByHostInstance;return pg(aa({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=xa(a);
return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))}};module.exports=vg.default||vg;

    var $$$renderer = module.exports;
    module.exports = $$$reconciler;
    return $$$renderer;
};


/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/*!********************************************************!*\
  !*** ./node_modules/react/cjs/react.production.min.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.14.0";


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/** @license React v0.17.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout,A=window.requestAnimationFrame,B=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));if("object"===typeof w&&
"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var C=x.now();exports.unstable_now=function(){return x.now()-C}}var D=!1,E=null,F=-1,G=5,H=0;k=function(){return exports.unstable_now()>=H};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):G=0<a?Math.floor(1E3/a):33.33};var I=new MessageChannel,J=I.port2;I.port1.onmessage=
function(){if(null!==E){var a=exports.unstable_now();H=a+G;try{E(!0,a)?J.postMessage(null):(D=!1,E=null)}catch(b){throw J.postMessage(null),b;}}else D=!1};f=function(a){E=a;D||(D=!0,J.postMessage(null))};g=function(a,b){F=y(function(){a(exports.unstable_now())},b)};h=function(){z(F);F=-1}}function K(a,b){var c=a.length;a.push(b);a:for(;;){var d=Math.floor((c-1)/2),e=a[d];if(void 0!==e&&0<L(e,b))a[d]=b,a[c]=e,c=d;else break a}}function M(a){a=a[0];return void 0===a?null:a}
function N(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>L(n,c))void 0!==r&&0>L(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>L(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function L(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var O=[],P=[],Q=1,R=null,S=3,T=!1,U=!1,V=!1;
function W(a){for(var b=M(P);null!==b;){if(null===b.callback)N(P);else if(b.startTime<=a)N(P),b.sortIndex=b.expirationTime,K(O,b);else break;b=M(P)}}function X(a){V=!1;W(a);if(!U)if(null!==M(O))U=!0,f(Y);else{var b=M(P);null!==b&&g(X,b.startTime-a)}}
function Y(a,b){U=!1;V&&(V=!1,h());T=!0;var c=S;try{W(b);for(R=M(O);null!==R&&(!(R.expirationTime>b)||a&&!k());){var d=R.callback;if(null!==d){R.callback=null;S=R.priorityLevel;var e=d(R.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?R.callback=e:R===M(O)&&N(O);W(b)}else N(O);R=M(O)}if(null!==R)var m=!0;else{var n=M(P);null!==n&&g(X,n.startTime-b);m=!1}return m}finally{R=null,S=c,T=!1}}
function Z(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var aa=l;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=S;S=a;try{return b()}finally{S=c}};
exports.unstable_next=function(a){switch(S){case 1:case 2:case 3:var b=3;break;default:b=S}var c=S;S=b;try{return a()}finally{S=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Z(a)}else c=Z(a),e=d;c=e+c;a={id:Q++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,K(P,a),null===M(O)&&a===M(P)&&(V?h():V=!0,g(X,e-d))):(a.sortIndex=c,K(O,a),U||T||(U=!0,f(Y)));return a};exports.unstable_cancelCallback=function(a){a.callback=null};
exports.unstable_wrapCallback=function(a){var b=S;return function(){var c=S;S=b;try{return a.apply(this,arguments)}finally{S=c}}};exports.unstable_getCurrentPriorityLevel=function(){return S};exports.unstable_shouldYield=function(){var a=exports.unstable_now();W(a);var b=M(O);return b!==R&&null!==R&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<R.expirationTime||k()};exports.unstable_requestPaint=aa;exports.unstable_continueExecution=function(){U||T||(U=!0,f(Y))};
exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return M(O)};exports.unstable_Profiling=null;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/taro-ui/dist/index.umd.js":
/*!************************************************!*\
  !*** ./node_modules/taro-ui/dist/index.umd.js ***!
  \************************************************/
/*! no static exports found */
/*! exports used: AtAccordion, AtButton, AtForm, AtInput, AtList, AtListItem, AtMessage, AtNavBar, AtSwipeAction, AtTextarea */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window, global, document) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js"), __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js"), __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js"), __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js"), __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, React, components, Taro) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  Taro = Taro && Object.prototype.hasOwnProperty.call(Taro, 'default') ? Taro['default'] : Taro;
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  /* global Reflect, Promise */

  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  function __extends(d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };

  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  }

  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) {
      ar = ar.concat(__read(arguments[i]));
    }

    return ar;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var classnames = createCommonjsModule(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    /* global define */
    (function () {
      var hasOwn = {}.hasOwnProperty;

      function classNames() {
        var classes = [];

        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;

          var argType = _typeof(arg);

          if (argType === 'string' || argType === 'number') {
            classes.push(arg);
          } else if (Array.isArray(arg) && arg.length) {
            var inner = classNames.apply(null, arg);

            if (inner) {
              classes.push(inner);
            }
          } else if (argType === 'object') {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }

        return classes.join(' ');
      }

      if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  });
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var b = "function" === typeof Symbol && Symbol.for,
      c = b ? Symbol.for("react.element") : 60103,
      d = b ? Symbol.for("react.portal") : 60106,
      e = b ? Symbol.for("react.fragment") : 60107,
      f = b ? Symbol.for("react.strict_mode") : 60108,
      g = b ? Symbol.for("react.profiler") : 60114,
      h = b ? Symbol.for("react.provider") : 60109,
      k = b ? Symbol.for("react.context") : 60110,
      l = b ? Symbol.for("react.async_mode") : 60111,
      m = b ? Symbol.for("react.concurrent_mode") : 60111,
      n = b ? Symbol.for("react.forward_ref") : 60112,
      p = b ? Symbol.for("react.suspense") : 60113,
      q = b ? Symbol.for("react.suspense_list") : 60120,
      r = b ? Symbol.for("react.memo") : 60115,
      t = b ? Symbol.for("react.lazy") : 60116,
      v = b ? Symbol.for("react.block") : 60121,
      w = b ? Symbol.for("react.fundamental") : 60117,
      x = b ? Symbol.for("react.responder") : 60118,
      y = b ? Symbol.for("react.scope") : 60119;

  function z(a) {
    if ("object" === _typeof(a) && null !== a) {
      var u = a.$$typeof;

      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;

            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;

                default:
                  return u;
              }

          }

        case d:
          return u;
      }
    }
  }

  function A(a) {
    return z(a) === m;
  }

  var AsyncMode = l;
  var ConcurrentMode = m;
  var ContextConsumer = k;
  var ContextProvider = h;
  var Element = c;
  var ForwardRef = n;
  var Fragment = e;
  var Lazy = t;
  var Memo = r;
  var Portal = d;
  var Profiler = g;
  var StrictMode = f;
  var Suspense = p;

  var isAsyncMode = function isAsyncMode(a) {
    return A(a) || z(a) === l;
  };

  var isConcurrentMode = A;

  var isContextConsumer = function isContextConsumer(a) {
    return z(a) === k;
  };

  var isContextProvider = function isContextProvider(a) {
    return z(a) === h;
  };

  var isElement = function isElement(a) {
    return "object" === _typeof(a) && null !== a && a.$$typeof === c;
  };

  var isForwardRef = function isForwardRef(a) {
    return z(a) === n;
  };

  var isFragment = function isFragment(a) {
    return z(a) === e;
  };

  var isLazy = function isLazy(a) {
    return z(a) === t;
  };

  var isMemo = function isMemo(a) {
    return z(a) === r;
  };

  var isPortal = function isPortal(a) {
    return z(a) === d;
  };

  var isProfiler = function isProfiler(a) {
    return z(a) === g;
  };

  var isStrictMode = function isStrictMode(a) {
    return z(a) === f;
  };

  var isSuspense = function isSuspense(a) {
    return z(a) === p;
  };

  var isValidElementType = function isValidElementType(a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };

  var typeOf = z;
  var reactIs_production_min = {
    AsyncMode: AsyncMode,
    ConcurrentMode: ConcurrentMode,
    ContextConsumer: ContextConsumer,
    ContextProvider: ContextProvider,
    Element: Element,
    ForwardRef: ForwardRef,
    Fragment: Fragment,
    Lazy: Lazy,
    Memo: Memo,
    Portal: Portal,
    Profiler: Profiler,
    StrictMode: StrictMode,
    Suspense: Suspense,
    isAsyncMode: isAsyncMode,
    isConcurrentMode: isConcurrentMode,
    isContextConsumer: isContextConsumer,
    isContextProvider: isContextProvider,
    isElement: isElement,
    isForwardRef: isForwardRef,
    isFragment: isFragment,
    isLazy: isLazy,
    isMemo: isMemo,
    isPortal: isPortal,
    isProfiler: isProfiler,
    isStrictMode: isStrictMode,
    isSuspense: isSuspense,
    isValidElementType: isValidElementType,
    typeOf: typeOf
  };
  var reactIs_development = createCommonjsModule(function (module, exports) {
    if (true) {
      (function () {
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

        function isValidElementType(type) {
          return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }

        function typeOf(object) {
          if (_typeof(object) === 'object' && object !== null) {
            var $$typeof = object.$$typeof;

            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;

                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;

                  default:
                    var $$typeofType = type && type.$$typeof;

                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;

                      default:
                        return $$typeof;
                    }

                }

              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }

          return undefined;
        } // AsyncMode is deprecated along with isAsyncMode


        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

              console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }

        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }

        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }

        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }

        function isElement(object) {
          return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }

        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }

        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }

        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }

        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }

        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }

        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }

        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }

        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }

        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  });
  var reactIs_development_1 = reactIs_development.AsyncMode;
  var reactIs_development_2 = reactIs_development.ConcurrentMode;
  var reactIs_development_3 = reactIs_development.ContextConsumer;
  var reactIs_development_4 = reactIs_development.ContextProvider;
  var reactIs_development_5 = reactIs_development.Element;
  var reactIs_development_6 = reactIs_development.ForwardRef;
  var reactIs_development_7 = reactIs_development.Fragment;
  var reactIs_development_8 = reactIs_development.Lazy;
  var reactIs_development_9 = reactIs_development.Memo;
  var reactIs_development_10 = reactIs_development.Portal;
  var reactIs_development_11 = reactIs_development.Profiler;
  var reactIs_development_12 = reactIs_development.StrictMode;
  var reactIs_development_13 = reactIs_development.Suspense;
  var reactIs_development_14 = reactIs_development.isAsyncMode;
  var reactIs_development_15 = reactIs_development.isConcurrentMode;
  var reactIs_development_16 = reactIs_development.isContextConsumer;
  var reactIs_development_17 = reactIs_development.isContextProvider;
  var reactIs_development_18 = reactIs_development.isElement;
  var reactIs_development_19 = reactIs_development.isForwardRef;
  var reactIs_development_20 = reactIs_development.isFragment;
  var reactIs_development_21 = reactIs_development.isLazy;
  var reactIs_development_22 = reactIs_development.isMemo;
  var reactIs_development_23 = reactIs_development.isPortal;
  var reactIs_development_24 = reactIs_development.isProfiler;
  var reactIs_development_25 = reactIs_development.isStrictMode;
  var reactIs_development_26 = reactIs_development.isSuspense;
  var reactIs_development_27 = reactIs_development.isValidElementType;
  var reactIs_development_28 = reactIs_development.typeOf;
  var reactIs = createCommonjsModule(function (module) {
    if (false) {} else {
      module.exports = reactIs_development;
    }
  });
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118


      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function printWarning() {};

  if (true) {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */


  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (true) {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error; // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.

          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
              err.name = 'Invariant Violation';
              throw err;
            }

            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }

          if (error && !(error instanceof Error)) {
            printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }

          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }
  /**
   * Resets warning cache when testing.
   *
   * @private
   */


  checkPropTypes.resetWarningCache = function () {
    if (true) {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  var printWarning$1 = function printWarning$1() {};

  if (true) {
    printWarning$1 = function printWarning$1(text) {
      var message = 'Warning: ' + text;

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */

    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }
    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */


    var ANONYMOUS = '<<anonymous>>'; // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */

    /*eslint-disable no-self-compare*/

    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */


    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    } // Make `instanceof Error` still work for returned errors.


    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (true) {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }

      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if ( true && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;

            if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }

        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }

            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }

          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }

        var propValue = props[propName];

        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }

        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (true) {
          if (arguments.length > 1) {
            printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
          } else {
            printWarning$1('Invalid argument supplied to oneOf, expected an array.');
          }
        }

        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);

          if (type === 'symbol') {
            return String(value);
          }

          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }

      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }

        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }

        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

            if (error instanceof Error) {
              return error;
            }
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
         true ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (typeof checker !== 'function') {
          printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];

          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }

      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }

        for (var key in shapeTypes) {
          var checker = shapeTypes[key];

          if (!checker) {
            continue;
          }

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        } // We need to check all keys in case some are required but missing from
        // props.


        var allKeys = objectAssign({}, props[propName], shapeTypes);

        for (var key in allKeys) {
          var checker = shapeTypes[key];

          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (_typeof(propValue)) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;

        case 'boolean':
          return !propValue;

        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }

          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);

          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;

            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;

                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;

        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      } // falsy value can't be a Symbol


      if (!propValue) {
        return false;
      } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      } // Fallback for non-spec compliant Symbols which are polyfilled.


      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    } // Equivalent of `typeof` but with special handling for array and regexp.


    function getPropType(propValue) {
      var propType = _typeof(propValue);

      if (Array.isArray(propValue)) {
        return 'array';
      }

      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }

      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }

      return propType;
    } // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.


    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }

      var propType = getPropType(propValue);

      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }

      return propType;
    } // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"


    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);

      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;

        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;

        default:
          return type;
      }
    } // Returns class name of the object, if any.


    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }

      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  function emptyFunction() {}

  function emptyFunctionWithReset() {}

  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function factoryWithThrowingShims() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }

      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }

    shim.isRequired = shim;

    function getShim() {
      return shim;
    } // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.


    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    if (true) {
      var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod

      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
    } else {}
  });

  var AtActionSheetBody =
  /** @class */
  function (_super) {
    __extends(AtActionSheetBody, _super);

    function AtActionSheetBody() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtActionSheetBody.prototype.render = function () {
      var rootClass = classnames('at-action-sheet__body', this.props.className);
      return React__default.createElement(components.View, {
        className: rootClass
      }, this.props.children);
    };

    return AtActionSheetBody;
  }(React__default.Component);

  var AtActionSheetFooter =
  /** @class */
  function (_super) {
    __extends(AtActionSheetFooter, _super);

    function AtActionSheetFooter() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.handleClick = function () {
        var _a;

        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (typeof _this.props.onClick === 'function') {
          (_a = _this.props).onClick.apply(_a, __spread(args));
        }
      };

      return _this;
    }

    AtActionSheetFooter.prototype.render = function () {
      var rootClass = classnames('at-action-sheet__footer', this.props.className);
      return React__default.createElement(components.View, {
        onClick: this.handleClick,
        className: rootClass
      }, this.props.children);
    };

    return AtActionSheetFooter;
  }(React__default.Component);

  AtActionSheetFooter.propTypes = {
    onClick: propTypes.func
  };

  var AtActionSheetHeader =
  /** @class */
  function (_super) {
    __extends(AtActionSheetHeader, _super);

    function AtActionSheetHeader() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtActionSheetHeader.prototype.render = function () {
      var rootClass = classnames('at-action-sheet__header', this.props.className);
      return React__default.createElement(components.View, {
        className: rootClass
      }, this.props.children);
    };

    return AtActionSheetHeader;
  }(React__default.Component);

  var AtActionSheet =
  /** @class */
  function (_super) {
    __extends(AtActionSheet, _super);

    function AtActionSheet(props) {
      var _this = _super.call(this, props) || this;

      _this.handleClose = function () {
        if (typeof _this.props.onClose === 'function') {
          _this.props.onClose();
        }
      };

      _this.handleCancel = function () {
        if (typeof _this.props.onCancel === 'function') {
          return _this.props.onCancel();
        }

        _this.close();
      };

      _this.close = function () {
        _this.setState({
          _isOpened: false
        }, _this.handleClose);
      };

      _this.handleTouchMove = function (e) {
        e.stopPropagation();
        e.preventDefault();
      };

      var isOpened = props.isOpened;
      _this.state = {
        _isOpened: isOpened
      };
      return _this;
    }

    AtActionSheet.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      var isOpened = nextProps.isOpened;

      if (isOpened !== this.state._isOpened) {
        this.setState({
          _isOpened: isOpened
        });
        !isOpened && this.handleClose();
      }
    };

    AtActionSheet.prototype.render = function () {
      var _a = this.props,
          title = _a.title,
          cancelText = _a.cancelText,
          className = _a.className;
      var _isOpened = this.state._isOpened;
      var rootClass = classnames('at-action-sheet', {
        'at-action-sheet--active': _isOpened
      }, className);
      return React__default.createElement(components.View, {
        className: rootClass,
        onTouchMove: this.handleTouchMove
      }, React__default.createElement(components.View, {
        onClick: this.close,
        className: 'at-action-sheet__overlay'
      }), React__default.createElement(components.View, {
        className: 'at-action-sheet__container'
      }, title && React__default.createElement(AtActionSheetHeader, null, title), React__default.createElement(AtActionSheetBody, null, this.props.children), cancelText && React__default.createElement(AtActionSheetFooter, {
        onClick: this.handleCancel
      }, cancelText)));
    };

    return AtActionSheet;
  }(React__default.Component);

  AtActionSheet.defaultProps = {
    title: '',
    cancelText: '',
    isOpened: false
  };
  AtActionSheet.propTypes = {
    title: propTypes.string,
    onClose: propTypes.func,
    onCancel: propTypes.func,
    isOpened: propTypes.bool.isRequired,
    cancelText: propTypes.string
  };

  var AtActionSheetItem =
  /** @class */
  function (_super) {
    __extends(AtActionSheetItem, _super);

    function AtActionSheetItem() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.handleClick = function (args) {
        if (typeof _this.props.onClick === 'function') {
          _this.props.onClick(args);
        }
      };

      return _this;
    }

    AtActionSheetItem.prototype.render = function () {
      var rootClass = classnames('at-action-sheet__item', this.props.className);
      return React__default.createElement(components.View, {
        className: rootClass,
        onClick: this.handleClick
      }, this.props.children);
    };

    return AtActionSheetItem;
  }(React__default.Component);

  AtActionSheetItem.propTypes = {
    onClick: propTypes.func
  };
  var ENV = Taro.getEnv();

  function delay(delayTime) {
    if (delayTime === void 0) {
      delayTime = 25;
    }

    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, delayTime);
    });
  }

  function delayQuerySelector(selectorStr, delayTime) {
    if (delayTime === void 0) {
      delayTime = 500;
    }

    return new Promise(function (resolve) {
      var selector = Taro.createSelectorQuery();
      delay(delayTime).then(function () {
        selector.select(selectorStr).boundingClientRect().exec(function (res) {
          resolve(res);
        });
      });
    });
  }

  function delayGetScrollOffset(_a) {
    var _b = _a.delayTime,
        delayTime = _b === void 0 ? 500 : _b;
    return new Promise(function (resolve) {
      delay(delayTime).then(function () {
        Taro.createSelectorQuery().selectViewport().scrollOffset().exec(function (res) {
          resolve(res);
        });
      });
    });
  }

  function delayGetClientRect(_a) {
    var selectorStr = _a.selectorStr,
        _b = _a.delayTime,
        delayTime = _b === void 0 ? 500 : _b;
    var selector = Taro.createSelectorQuery();
    return new Promise(function (resolve) {
      delay(delayTime).then(function () {
        selector.select(selectorStr).boundingClientRect().exec(function (res) {
          resolve(res);
        });
      });
    });
  }

  function uuid(len, radix) {
    if (len === void 0) {
      len = 8;
    }

    if (radix === void 0) {
      radix = 16;
    }

    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var value = [];
    var i = 0;
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) {
        value[i] = chars[0 | Math.random() * radix];
      }
    } else {
      // rfc4122, version 4 form
      var r // rfc4122 requires these characters

      /* eslint-disable-next-line */
      = void 0; // rfc4122 requires these characters

      /* eslint-disable-next-line */

      value[8] = value[13] = value[18] = value[23] = '-';
      value[14] = '4'; // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5

      for (i = 0; i < 36; i++) {
        if (!value[i]) {
          r = 0 | Math.random() * 16;
          value[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
        }
      }
    }

    return value.join('');
  }

  function getEventDetail(event) {
    var detail;

    switch (ENV) {
      case Taro.ENV_TYPE.WEB:
        detail = {
          pageX: event.pageX,
          pageY: event.pageY,
          clientX: event.clientX,
          clientY: event.clientY,
          offsetX: event.offsetX,
          offsetY: event.offsetY,
          x: event.x,
          y: event.y
        };
        break;

      case Taro.ENV_TYPE.WEAPP:
        detail = {
          pageX: event.touches[0].pageX,
          pageY: event.touches[0].pageY,
          clientX: event.touches[0].clientX,
          clientY: event.touches[0].clientY,
          offsetX: event.target.offsetLeft,
          offsetY: event.target.offsetTop,
          x: event.target.x,
          y: event.target.y
        };
        break;

      case Taro.ENV_TYPE.ALIPAY:
        detail = {
          pageX: event.target.pageX,
          pageY: event.target.pageY,
          clientX: event.target.clientX,
          clientY: event.target.clientY,
          offsetX: event.target.offsetLeft,
          offsetY: event.target.offsetTop,
          x: event.target.x,
          y: event.target.y
        };
        break;

      case Taro.ENV_TYPE.SWAN:
        detail = {
          pageX: event.changedTouches[0].pageX,
          pageY: event.changedTouches[0].pageY,
          clientX: event.target.clientX,
          clientY: event.target.clientY,
          offsetX: event.target.offsetLeft,
          offsetY: event.target.offsetTop,
          x: event.detail.x,
          y: event.detail.y
        };
        break;

      default:
        detail = {
          pageX: 0,
          pageY: 0,
          clientX: 0,
          clientY: 0,
          offsetX: 0,
          offsetY: 0,
          x: 0,
          y: 0
        };
        console.warn('getEventDetail暂未支持该环境');
        break;
    }

    return detail;
  }

  function isTest() {
    return "development" === 'test';
  }

  var scrollTop = 0;

  function handleTouchScroll(flag) {
    if (ENV !== Taro.ENV_TYPE.WEB) {
      return;
    }

    if (flag) {
      scrollTop = document.documentElement.scrollTop; // 使body脱离文档流

      document.body.classList.add('at-frozen'); // 把脱离文档流的body拉上去！否则页面会回到顶部！

      document.body.style.top = -scrollTop + "px";
    } else {
      document.body.style.top = '';
      document.body.classList.remove('at-frozen');
      document.documentElement.scrollTop = scrollTop;
    }
  }

  function pxTransform(size) {
    if (!size) return '';
    var designWidth = 750;
    var deviceRatio = {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2
    };
    return size / deviceRatio[designWidth] + "rpx";
  }

  function objectToString(style) {
    if (style && _typeof(style) === 'object') {
      var styleStr_1 = '';
      Object.keys(style).forEach(function (key) {
        var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
      });
      return styleStr_1;
    } else if (style && typeof style === 'string') {
      return style;
    }

    return '';
  }
  /**
   * 合并 style
   * @param {Object|String} style1
   * @param {Object|String} style2
   * @returns {String}
   */


  function mergeStyle(style1, style2) {
    if (style1 && _typeof(style1) === 'object' && style2 && _typeof(style2) === 'object') {
      return Object.assign({}, style1, style2);
    }

    return objectToString(style1) + objectToString(style2);
  }

  var AtLoading =
  /** @class */
  function (_super) {
    __extends(AtLoading, _super);

    function AtLoading() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtLoading.prototype.render = function () {
      var _a = this.props,
          color = _a.color,
          size = _a.size;
      var loadingSize = typeof size === 'string' ? size : String(size);
      var sizeStyle = {
        width: size ? "" + pxTransform(parseInt(loadingSize)) : '',
        height: size ? "" + pxTransform(parseInt(loadingSize)) : ''
      };
      var colorStyle = {
        border: color ? "1px solid " + color : '',
        borderColor: color ? color + " transparent transparent transparent" : ''
      };
      var ringStyle = Object.assign({}, colorStyle, sizeStyle);
      return React__default.createElement(components.View, {
        className: 'at-loading',
        style: sizeStyle
      }, React__default.createElement(components.View, {
        className: 'at-loading__ring',
        style: ringStyle
      }), React__default.createElement(components.View, {
        className: 'at-loading__ring',
        style: ringStyle
      }), React__default.createElement(components.View, {
        className: 'at-loading__ring',
        style: ringStyle
      }));
    };

    return AtLoading;
  }(React__default.Component);

  AtLoading.defaultProps = {
    size: 0,
    color: ''
  };
  AtLoading.propTypes = {
    size: propTypes.oneOfType([propTypes.string, propTypes.number]),
    color: propTypes.oneOfType([propTypes.string, propTypes.number])
  };

  var AtActivityIndicator =
  /** @class */
  function (_super) {
    __extends(AtActivityIndicator, _super);

    function AtActivityIndicator() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtActivityIndicator.prototype.render = function () {
      var _a = this.props,
          color = _a.color,
          size = _a.size,
          mode = _a.mode,
          content = _a.content,
          isOpened = _a.isOpened;
      var rootClass = classnames('at-activity-indicator', {
        'at-activity-indicator--center': mode === 'center',
        'at-activity-indicator--isopened': isOpened
      }, this.props.className);
      return React__default.createElement(components.View, {
        className: rootClass
      }, React__default.createElement(components.View, {
        className: 'at-activity-indicator__body'
      }, React__default.createElement(AtLoading, {
        size: size,
        color: color
      })), content && React__default.createElement(components.Text, {
        className: 'at-activity-indicator__content'
      }, content));
    };

    return AtActivityIndicator;
  }(React__default.Component);

  AtActivityIndicator.defaultProps = {
    size: 0,
    mode: 'normal',
    color: '',
    content: '',
    className: '',
    isOpened: true
  };
  AtActivityIndicator.propTypes = {
    size: propTypes.number,
    mode: propTypes.string,
    color: propTypes.string,
    content: propTypes.string,
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    isOpened: propTypes.bool
  };
  var SIZE_CLASS = {
    large: 'large',
    normal: 'normal',
    small: 'small'
  };

  var AtAvatar =
  /** @class */
  function (_super) {
    __extends(AtAvatar, _super);

    function AtAvatar(props) {
      var _this = _super.call(this, props) || this;

      _this.state = {
        isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP
      };
      return _this;
    }

    AtAvatar.prototype.render = function () {
      var _a;

      var _b = this.props,
          size = _b.size,
          circle = _b.circle,
          image = _b.image,
          text = _b.text,
          openData = _b.openData,
          customStyle = _b.customStyle;
      var rootClassName = ['at-avatar'];
      var iconSize = SIZE_CLASS[size || 'normal'];
      var classObject = (_a = {}, _a["at-avatar--" + iconSize] = iconSize, _a['at-avatar--circle'] = circle, _a);
      var letter = '';
      if (text) letter = text[0];
      var elem;

      if (openData && openData.type === 'userAvatarUrl' && this.state.isWEAPP) {
        elem = React__default.createElement(components.OpenData, {
          type: openData.type
        });
      } else if (image) {
        elem = React__default.createElement(components.Image, {
          className: 'at-avatar__img',
          src: image
        });
      } else {
        elem = React__default.createElement(components.Text, {
          className: 'at-avatar__text'
        }, letter);
      }

      return React__default.createElement(components.View, {
        className: classnames(rootClassName, classObject, this.props.className),
        style: customStyle
      }, elem);
    };

    return AtAvatar;
  }(React__default.Component);

  AtAvatar.defaultProps = {
    size: 'normal',
    circle: false,
    text: '',
    image: '',
    customStyle: {},
    className: ''
  };
  AtAvatar.propTypes = {
    size: propTypes.oneOf(['large', 'normal', 'small']),
    circle: propTypes.bool,
    text: propTypes.string,
    image: propTypes.string,
    openData: propTypes.object,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string])
  };

  var AtBadge =
  /** @class */
  function (_super) {
    __extends(AtBadge, _super);

    function AtBadge(props) {
      var _this = _super.call(this, props) || this;

      _this.state = {};
      return _this;
    }

    AtBadge.prototype.formatValue = function (value, maxValue) {
      if (value === '' || value === null || typeof value === 'undefined') return '';
      var numValue = +value;

      if (Number.isNaN(numValue)) {
        return value;
      }

      return numValue > maxValue ? maxValue + "+" : numValue;
    };

    AtBadge.prototype.render = function () {
      var _a = this.props,
          dot = _a.dot,
          value = _a.value,
          _b = _a.maxValue,
          maxValue = _b === void 0 ? 99 : _b,
          customStyle = _a.customStyle;
      var rootClassName = ['at-badge'];
      var val = this.formatValue(value, maxValue);
      return React__default.createElement(components.View, {
        className: classnames(rootClassName, this.props.className),
        style: customStyle
      }, this.props.children, dot ? React__default.createElement(components.View, {
        className: 'at-badge__dot'
      }) : val !== '' && React__default.createElement(components.View, {
        className: 'at-badge__num'
      }, val));
    };

    return AtBadge;
  }(React__default.Component);

  AtBadge.defaultProps = {
    dot: false,
    value: '',
    maxValue: 99,
    customStyle: {},
    className: ''
  };
  AtBadge.propTypes = {
    dot: propTypes.bool,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    maxValue: propTypes.number,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string])
  };
  var SIZE_CLASS$1 = {
    normal: 'normal',
    small: 'small'
  };
  var TYPE_CLASS = {
    primary: 'primary',
    secondary: 'secondary'
  };

  var AtButton =
  /** @class */
  function (_super) {
    __extends(AtButton, _super);

    function AtButton(props) {
      var _this = _super.call(this, props) || this;

      _this.state = {
        isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
        isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
        isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY
      };
      return _this;
    }

    AtButton.prototype.onClick = function (event) {
      if (!this.props.disabled) {
        this.props.onClick && this.props.onClick(event);
      }
    };

    AtButton.prototype.onGetUserInfo = function (event) {
      this.props.onGetUserInfo && this.props.onGetUserInfo(event);
    };

    AtButton.prototype.onContact = function (event) {
      this.props.onContact && this.props.onContact(event);
    };

    AtButton.prototype.onGetPhoneNumber = function (event) {
      this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(event);
    };

    AtButton.prototype.onError = function (event) {
      this.props.onError && this.props.onError(event);
    };

    AtButton.prototype.onOpenSetting = function (event) {
      this.props.onOpenSetting && this.props.onOpenSetting(event);
    };

    AtButton.prototype.onSumit = function (event) {
      if (this.state.isWEAPP || this.state.isWEB) {
        // TODO: 3.0 this.$scope
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.$scope.triggerEvent('submit', event.detail, {
          bubbles: true,
          composed: true
        });
      }
    };

    AtButton.prototype.onReset = function (event) {
      if (this.state.isWEAPP || this.state.isWEB) {
        // TODO: 3.0 this.$scope
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.$scope.triggerEvent('reset', event.detail, {
          bubbles: true,
          composed: true
        });
      }
    };

    AtButton.prototype.render = function () {
      var _a;

      var _b = this.props,
          _c = _b.size,
          size = _c === void 0 ? 'normal' : _c,
          _d = _b.type,
          type = _d === void 0 ? '' : _d,
          circle = _b.circle,
          full = _b.full,
          loading = _b.loading,
          disabled = _b.disabled,
          customStyle = _b.customStyle,
          formType = _b.formType,
          openType = _b.openType,
          lang = _b.lang,
          sessionFrom = _b.sessionFrom,
          sendMessageTitle = _b.sendMessageTitle,
          sendMessagePath = _b.sendMessagePath,
          sendMessageImg = _b.sendMessageImg,
          showMessageCard = _b.showMessageCard,
          appParameter = _b.appParameter;
      var _e = this.state,
          isWEAPP = _e.isWEAPP,
          isALIPAY = _e.isALIPAY,
          isWEB = _e.isWEB;
      var rootClassName = ['at-button'];
      var classObject = (_a = {}, _a["at-button--" + SIZE_CLASS$1[size]] = SIZE_CLASS$1[size], _a['at-button--disabled'] = disabled, _a["at-button--" + type] = TYPE_CLASS[type], _a['at-button--circle'] = circle, _a['at-button--full'] = full, _a);
      var loadingColor = type === 'primary' ? '#fff' : '';
      var loadingSize = size === 'small' ? '30' : 0;
      var loadingComponent = null;

      if (loading) {
        loadingComponent = React__default.createElement(components.View, {
          className: 'at-button__icon'
        }, React__default.createElement(AtLoading, {
          color: loadingColor,
          size: loadingSize
        }));
        rootClassName.push('at-button--icon');
      }

      var webButton = React__default.createElement(components.Button, {
        className: 'at-button__wxbutton',
        lang: lang,
        formType: formType
      });
      var button = React__default.createElement(components.Button, {
        className: 'at-button__wxbutton',
        formType: formType,
        openType: openType,
        lang: lang,
        sessionFrom: sessionFrom,
        sendMessageTitle: sendMessageTitle,
        sendMessagePath: sendMessagePath,
        sendMessageImg: sendMessageImg,
        showMessageCard: showMessageCard,
        appParameter: appParameter,
        onGetUserInfo: this.onGetUserInfo.bind(this),
        onGetPhoneNumber: this.onGetPhoneNumber.bind(this),
        onOpenSetting: this.onOpenSetting.bind(this),
        onError: this.onError.bind(this),
        onContact: this.onContact.bind(this)
      });
      return React__default.createElement(components.View, {
        className: classnames(rootClassName, classObject, this.props.className),
        style: customStyle,
        onClick: this.onClick.bind(this)
      }, isWEB && !disabled && webButton, isWEAPP && !disabled && React__default.createElement(components.Form, {
        onSubmit: this.onSumit.bind(this),
        onReset: this.onReset.bind(this)
      }, button), isALIPAY && !disabled && button, loadingComponent, React__default.createElement(components.View, {
        className: 'at-button__text'
      }, this.props.children));
    };

    return AtButton;
  }(React__default.Component);

  AtButton.defaultProps = {
    size: 'normal',
    circle: false,
    full: false,
    loading: false,
    disabled: false,
    customStyle: {},
    // Button props
    lang: 'en',
    sessionFrom: '',
    sendMessageTitle: '',
    sendMessagePath: '',
    sendMessageImg: '',
    showMessageCard: false,
    appParameter: ''
  };
  AtButton.propTypes = {
    size: propTypes.oneOf(['normal', 'small']),
    type: propTypes.oneOf(['primary', 'secondary', '']),
    circle: propTypes.bool,
    full: propTypes.bool,
    loading: propTypes.bool,
    disabled: propTypes.bool,
    onClick: propTypes.func,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    formType: propTypes.oneOf(['submit', 'reset', '']),
    openType: propTypes.oneOf(['contact', 'share', 'getUserInfo', 'getPhoneNumber', 'launchApp', 'openSetting', 'feedback', 'getRealnameAuthInfo', 'getAuthorize', 'contactShare', '']),
    lang: propTypes.string,
    sessionFrom: propTypes.string,
    sendMessageTitle: propTypes.string,
    sendMessagePath: propTypes.string,
    sendMessageImg: propTypes.string,
    showMessageCard: propTypes.bool,
    appParameter: propTypes.string,
    onGetUserInfo: propTypes.func,
    onContact: propTypes.func,
    onGetPhoneNumber: propTypes.func,
    onError: propTypes.func,
    onOpenSetting: propTypes.func
  };

  var AtCard =
  /** @class */
  function (_super) {
    __extends(AtCard, _super);

    function AtCard() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.handleClick = function (args) {
        if (typeof _this.props.onClick === 'function') {
          _this.props.onClick(args);
        }
      };

      return _this;
    }

    AtCard.prototype.render = function () {
      var _a;

      var _b = this.props,
          title = _b.title,
          note = _b.note,
          extra = _b.extra,
          extraStyle = _b.extraStyle,
          thumb = _b.thumb,
          isFull = _b.isFull,
          icon = _b.icon,
          renderIcon = _b.renderIcon;
      var rootClass = classnames('at-card', {
        'at-card--full': isFull
      }, this.props.className);
      var iconClass = classnames((_a = {
        'at-icon': true
      }, _a["at-icon-" + (icon && icon.value)] = icon && icon.value, _a['at-card__header-icon'] = true, _a));
      var iconStyle = {
        color: icon && icon.color || '',
        fontSize: icon && icon.size + "px" || ''
      };
      return React__default.createElement(components.View, {
        onClick: this.handleClick,
        className: rootClass
      }, React__default.createElement(components.View, {
        className: 'at-card__header'
      }, thumb && React__default.createElement(components.View, {
        className: 'at-card__header-thumb'
      }, React__default.createElement(components.Image, {
        className: 'at-card__header-thumb-info',
        mode: 'scaleToFill',
        src: thumb
      })), renderIcon || '', !thumb && icon && icon.value && React__default.createElement(components.Text, {
        className: iconClass,
        style: iconStyle
      }), React__default.createElement(components.Text, {
        className: 'at-card__header-title'
      }, title), extra && React__default.createElement(components.Text, {
        style: _assign({}, extraStyle),
        className: 'at-card__header-extra'
      }, extra)), React__default.createElement(components.View, {
        className: 'at-card__content'
      }, React__default.createElement(components.View, {
        className: 'at-card__content-info'
      }, this.props.children), note && React__default.createElement(components.View, {
        className: 'at-card__content-note'
      }, note)));
    };

    return AtCard;
  }(React__default.Component);

  AtCard.defaultProps = {
    note: '',
    isFull: false,
    thumb: '',
    title: '',
    extra: '',
    extraStyle: {}
  };
  AtCard.propTypes = {
    note: propTypes.string,
    isFull: propTypes.bool,
    thumb: propTypes.string,
    title: propTypes.string,
    extra: propTypes.string,
    icon: propTypes.object,
    onClick: propTypes.func,
    renderIcon: propTypes.oneOfType([propTypes.string, propTypes.element]),
    extraStyle: propTypes.object // 自定义extra样式

  };

  var AtCheckbox =
  /** @class */
  function (_super) {
    __extends(AtCheckbox, _super);

    function AtCheckbox() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtCheckbox.prototype.handleClick = function (idx) {
      var _a = this.props,
          selectedList = _a.selectedList,
          options = _a.options;
      var option = options[idx];
      var disabled = option.disabled,
          value = option.value;
      if (disabled) return;
      var selectedSet = new Set(selectedList);

      if (!selectedSet.has(value)) {
        selectedSet.add(value);
      } else {
        selectedSet.delete(value);
      }

      this.props.onChange(__spread(selectedSet));
    };

    AtCheckbox.prototype.render = function () {
      var _this = this;

      var _a = this.props,
          customStyle = _a.customStyle,
          className = _a.className,
          options = _a.options,
          selectedList = _a.selectedList;
      var rootCls = classnames('at-checkbox', className);
      return React__default.createElement(components.View, {
        className: rootCls,
        style: customStyle
      }, options.map(function (option, idx) {
        var value = option.value,
            disabled = option.disabled,
            label = option.label,
            desc = option.desc;
        var optionCls = classnames('at-checkbox__option', {
          'at-checkbox__option--disabled': disabled,
          'at-checkbox__option--selected': selectedList.includes(value)
        });
        return React__default.createElement(components.View, {
          className: optionCls,
          key: value,
          onClick: _this.handleClick.bind(_this, idx)
        }, React__default.createElement(components.View, {
          className: 'at-checkbox__option-wrap'
        }, React__default.createElement(components.View, {
          className: 'at-checkbox__option-cnt'
        }, React__default.createElement(components.View, {
          className: 'at-checkbox__icon-cnt'
        }, React__default.createElement(components.Text, {
          className: 'at-icon at-icon-check'
        })), React__default.createElement(components.View, {
          className: 'at-checkbox__title'
        }, label)), desc && React__default.createElement(components.View, {
          className: 'at-checkbox__desc'
        }, desc)));
      }));
    };

    return AtCheckbox;
  }(React__default.Component);

  AtCheckbox.defaultProps = {
    customStyle: '',
    className: '',
    options: [],
    selectedList: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function onChange() {}
  };
  AtCheckbox.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    options: propTypes.array,
    selectedList: propTypes.array,
    onChange: propTypes.func
  };

  var AtList =
  /** @class */
  function (_super) {
    __extends(AtList, _super);

    function AtList() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtList.prototype.render = function () {
      var rootClass = classnames('at-list', {
        'at-list--no-border': !this.props.hasBorder
      }, this.props.className);
      return React__default.createElement(components.View, {
        className: rootClass
      }, this.props.children);
    };

    return AtList;
  }(React__default.Component);

  AtList.defaultProps = {
    hasBorder: true
  };
  AtList.propTypes = {
    hasBorder: propTypes.bool
  };

  var AtListItem =
  /** @class */
  function (_super) {
    __extends(AtListItem, _super);

    function AtListItem() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.handleClick = function (event) {
        if (typeof _this.props.onClick === 'function' && !_this.props.disabled) {
          _this.props.onClick(event);
        }
      };

      _this.handleSwitchChange = function (event) {
        if (typeof _this.props.onSwitchChange === 'function' && !_this.props.disabled) {
          _this.props.onSwitchChange(event);
        }
      };

      return _this;
    }

    AtListItem.prototype.handleSwitchClick = function (e) {
      e.stopPropagation();
    };

    AtListItem.prototype.render = function () {
      var _a;

      var _b = this.props,
          note = _b.note,
          arrow = _b.arrow,
          thumb = _b.thumb,
          iconInfo = _b.iconInfo,
          disabled = _b.disabled,
          isSwitch = _b.isSwitch,
          hasBorder = _b.hasBorder,
          extraThumb = _b.extraThumb,
          switchColor = _b.switchColor,
          switchIsCheck = _b.switchIsCheck;
      var _c = this.props,
          extraText = _c.extraText,
          title = _c.title;
      extraText = String(extraText);
      title = String(title);
      var rootClass = classnames('at-list__item', {
        'at-list__item--thumb': thumb,
        'at-list__item--multiple': note,
        'at-list__item--disabled': disabled,
        'at-list__item--no-border': !hasBorder
      }, this.props.className);
      var iconClass = classnames(iconInfo && iconInfo.prefixClass || 'at-icon', (_a = {}, _a[(iconInfo && iconInfo.prefixClass || 'at-icon') + "-" + (iconInfo && iconInfo.value)] = iconInfo && iconInfo.value, _a), iconInfo && iconInfo.className);
      return React__default.createElement(components.View, {
        className: rootClass,
        onClick: this.handleClick
      }, React__default.createElement(components.View, {
        className: 'at-list__item-container'
      }, thumb && React__default.createElement(components.View, {
        className: 'at-list__item-thumb item-thumb'
      }, React__default.createElement(components.Image, {
        className: 'item-thumb__info',
        mode: 'scaleToFill',
        src: thumb
      })), iconInfo && iconInfo.value && React__default.createElement(components.View, {
        className: 'at-list__item-icon item-icon'
      }, React__default.createElement(components.Text, {
        className: iconClass,
        style: mergeStyle({
          color: iconInfo.color || '',
          fontSize: (iconInfo.size || 24) + "px"
        }, iconInfo.customStyle || '')
      })), React__default.createElement(components.View, {
        className: 'at-list__item-content item-content'
      }, React__default.createElement(components.View, {
        className: 'item-content__info'
      }, React__default.createElement(components.View, {
        className: 'item-content__info-title'
      }, title), note && React__default.createElement(components.View, {
        className: 'item-content__info-note'
      }, note))), React__default.createElement(components.View, {
        className: 'at-list__item-extra item-extra'
      }, extraText && React__default.createElement(components.View, {
        className: 'item-extra__info'
      }, extraText), extraThumb && !extraText && React__default.createElement(components.View, {
        className: 'item-extra__image'
      }, React__default.createElement(components.Image, {
        className: 'item-extra__image-info',
        mode: 'aspectFit',
        src: extraThumb
      })), isSwitch && !extraThumb && !extraText && React__default.createElement(components.View, {
        className: 'item-extra__switch',
        onClick: this.handleSwitchClick
      }, React__default.createElement(components.Switch, {
        color: switchColor,
        disabled: disabled,
        checked: switchIsCheck,
        onChange: this.handleSwitchChange
      })), arrow ? React__default.createElement(components.View, {
        className: 'item-extra__icon'
      }, React__default.createElement(components.Text, {
        className: "at-icon item-extra__icon-arrow at-icon-chevron-" + arrow
      })) : null)));
    };

    return AtListItem;
  }(React__default.Component);

  AtListItem.defaultProps = {
    note: '',
    disabled: false,
    title: '',
    thumb: '',
    isSwitch: false,
    hasBorder: true,
    switchColor: '#6190E8',
    switchIsCheck: false,
    extraText: '',
    extraThumb: '',
    iconInfo: {
      value: ''
    }
  };
  AtListItem.propTypes = {
    note: propTypes.string,
    disabled: propTypes.bool,
    title: propTypes.string,
    thumb: propTypes.string,
    onClick: propTypes.func,
    isSwitch: propTypes.bool,
    hasBorder: propTypes.bool,
    switchColor: propTypes.string,
    switchIsCheck: propTypes.bool,
    extraText: propTypes.string,
    extraThumb: propTypes.string,
    onSwitchChange: propTypes.func,
    arrow: propTypes.oneOf(['up', 'down', 'right']),
    iconInfo: propTypes.shape({
      size: propTypes.number,
      value: propTypes.string,
      color: propTypes.string,
      prefixClass: propTypes.string,
      customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
      className: propTypes.oneOfType([propTypes.array, propTypes.string])
    })
  };

  var AtDrawer =
  /** @class */
  function (_super) {
    __extends(AtDrawer, _super);

    function AtDrawer(props) {
      var _this = _super.call(this, props) || this;

      _this.state = {
        animShow: false,
        _show: props.show
      };
      return _this;
    }

    AtDrawer.prototype.componentDidMount = function () {
      var _show = this.state._show;
      if (_show) this.animShow();
    };

    AtDrawer.prototype.onItemClick = function (index) {
      this.props.onItemClick && this.props.onItemClick(index);
      this.animHide();
    };

    AtDrawer.prototype.onHide = function () {
      var _this = this;

      this.setState({
        _show: false
      }, function () {
        _this.props.onClose && _this.props.onClose();
      });
    };

    AtDrawer.prototype.animHide = function () {
      var _this = this;

      this.setState({
        animShow: false
      });
      setTimeout(function () {
        _this.onHide();
      }, 300);
    };

    AtDrawer.prototype.animShow = function () {
      var _this = this;

      this.setState({
        _show: true
      });
      setTimeout(function () {
        _this.setState({
          animShow: true
        });
      }, 200);
    };

    AtDrawer.prototype.onMaskClick = function () {
      this.animHide();
    };

    AtDrawer.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      var show = nextProps.show;

      if (show !== this.state._show) {
        show ? this.animShow() : this.animHide();
      }
    };

    AtDrawer.prototype.render = function () {
      var _this = this;

      var _a = this.props,
          mask = _a.mask,
          width = _a.width,
          right = _a.right,
          items = _a.items;
      var _b = this.state,
          animShow = _b.animShow,
          _show = _b._show;
      var rootClassName = ['at-drawer'];
      var maskStyle = {
        display: mask ? 'block' : 'none',
        opacity: animShow ? 1 : 0
      };
      var listStyle = {
        width: width,
        transition: animShow ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)' : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
      };
      var classObject = {
        'at-drawer--show': animShow,
        'at-drawer--right': right,
        'at-drawer--left': !right
      };
      return _show ? React__default.createElement(components.View, {
        className: classnames(rootClassName, classObject, this.props.className)
      }, React__default.createElement(components.View, {
        className: 'at-drawer__mask',
        style: maskStyle,
        onClick: this.onMaskClick.bind(this)
      }), React__default.createElement(components.View, {
        className: 'at-drawer__content',
        style: listStyle
      }, !!items && items.length ? React__default.createElement(AtList, null, items.map(function (name, index) {
        return React__default.createElement(AtListItem, {
          key: name + "-" + index,
          "data-index": index,
          onClick: _this.onItemClick.bind(_this, index),
          title: name,
          arrow: 'right'
        });
      })) : this.props.children)) : React__default.createElement(components.View, null);
    };

    return AtDrawer;
  }(React__default.Component);

  AtDrawer.defaultProps = {
    show: false,
    mask: true,
    width: '',
    right: false,
    items: []
  };
  AtDrawer.propTypes = {
    show: propTypes.bool,
    mask: propTypes.bool,
    width: propTypes.string,
    items: propTypes.arrayOf(propTypes.string),
    onItemClick: propTypes.func,
    onClose: propTypes.func
  };

  var AtFloatLayout =
  /** @class */
  function (_super) {
    __extends(AtFloatLayout, _super);

    function AtFloatLayout(props) {
      var _this = _super.call(this, props) || this;

      _this.handleClose = function () {
        if (typeof _this.props.onClose === 'function') {
          // TODO: Fix typings
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          _this.props.onClose();
        }
      };

      _this.close = function () {
        _this.setState({
          _isOpened: false
        }, _this.handleClose);
      };

      _this.handleTouchMove = function (e) {
        e.stopPropagation();
      };

      var isOpened = props.isOpened;
      _this.state = {
        _isOpened: isOpened
      };
      return _this;
    }

    AtFloatLayout.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      var isOpened = nextProps.isOpened;

      if (this.props.isOpened !== isOpened) {
        handleTouchScroll(isOpened);
      }

      if (isOpened !== this.state._isOpened) {
        this.setState({
          _isOpened: isOpened
        });
      }
    };

    AtFloatLayout.prototype.render = function () {
      var _isOpened = this.state._isOpened;
      var _a = this.props,
          title = _a.title,
          scrollY = _a.scrollY,
          scrollX = _a.scrollX,
          scrollTop = _a.scrollTop,
          scrollLeft = _a.scrollLeft,
          upperThreshold = _a.upperThreshold,
          lowerThreshold = _a.lowerThreshold,
          scrollWithAnimation = _a.scrollWithAnimation;
      var rootClass = classnames('at-float-layout', {
        'at-float-layout--active': _isOpened
      }, this.props.className);
      return React__default.createElement(components.View, {
        className: rootClass,
        onTouchMove: this.handleTouchMove
      }, React__default.createElement(components.View, {
        onClick: this.close,
        className: 'at-float-layout__overlay'
      }), React__default.createElement(components.View, {
        className: 'at-float-layout__container layout'
      }, title ? React__default.createElement(components.View, {
        className: 'layout-header'
      }, React__default.createElement(components.Text, {
        className: 'layout-header__title'
      }, title), React__default.createElement(components.View, {
        className: 'layout-header__btn-close',
        onClick: this.close
      })) : null, React__default.createElement(components.View, {
        className: 'layout-body'
      }, React__default.createElement(components.ScrollView, {
        scrollY: scrollY,
        scrollX: scrollX,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        upperThreshold: upperThreshold,
        lowerThreshold: lowerThreshold,
        scrollWithAnimation: scrollWithAnimation,
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore // TODO: Fix typings
        onScroll: this.props.onScroll,
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore // TODO: Fix typings
        onScrollToLower: this.props.onScrollToLower,
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore // TODO: Fix typings
        onScrollToUpper: this.props.onScrollToUpper,
        className: 'layout-body__content'
      }, this.props.children))));
    };

    return AtFloatLayout;
  }(React__default.Component);

  AtFloatLayout.defaultProps = {
    title: '',
    isOpened: false,
    scrollY: true,
    scrollX: false,
    scrollWithAnimation: false
  };
  AtFloatLayout.propTypes = {
    title: propTypes.string,
    isOpened: propTypes.bool,
    scrollY: propTypes.bool,
    scrollX: propTypes.bool,
    scrollTop: propTypes.number,
    scrollLeft: propTypes.number,
    upperThreshold: propTypes.number,
    lowerThreshold: propTypes.number,
    scrollWithAnimation: propTypes.bool,
    onClose: propTypes.func,
    onScroll: propTypes.func,
    onScrollToLower: propTypes.func,
    onScrollToUpper: propTypes.func
  };

  var AtForm =
  /** @class */
  function (_super) {
    __extends(AtForm, _super);

    function AtForm() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtForm.prototype.onSubmit = function () {
      this.props.onSubmit && this.props.onSubmit(arguments);
    };

    AtForm.prototype.onReset = function () {
      this.props.onReset && this.props.onReset(arguments);
    };

    AtForm.prototype.render = function () {
      var _a = this.props,
          customStyle = _a.customStyle,
          className = _a.className,
          reportSubmit = _a.reportSubmit;
      var rootCls = classnames('at-form', className);
      return React__default.createElement(components.Form, {
        className: rootCls,
        style: customStyle,
        onSubmit: this.onSubmit.bind(this),
        reportSubmit: reportSubmit,
        onReset: this.onReset.bind(this)
      }, this.props.children);
    };

    return AtForm;
  }(React__default.Component);

  AtForm.defaultProps = {
    customStyle: '',
    className: '',
    reportSubmit: false
  };
  AtForm.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    reportSubmit: propTypes.bool,
    onSubmit: propTypes.func,
    onReset: propTypes.func
  };
  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */

  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }

    end = end > length ? length : end;

    if (end < 0) {
      end += length;
    }

    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);

    while (++index < length) {
      result[index] = array[index + start];
    }

    return result;
  }

  var _baseSlice = baseSlice;
  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */

  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  var eq_1 = eq;
  /** Detect free variable `global` from Node.js. */

  var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal;
  /** Detect free variable `self`. */

  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = _freeGlobal || freeSelf || Function('return this')();
  var _root = root;
  /** Built-in value references. */

  var Symbol$1 = _root.Symbol;
  var _Symbol = Symbol$1;
  /** Used for built-in method references. */

  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$1 = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto.toString;
  /** Built-in value references. */

  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */

  function getRawTag(value) {
    var isOwn = hasOwnProperty$1.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }

    return result;
  }

  var _getRawTag = getRawTag;
  /** Used for built-in method references. */

  var objectProto$1 = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString$1 = objectProto$1.toString;
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */

  function objectToString$1(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString$1;
  /** `Object#toString` result references. */

  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';
  /** Built-in value references. */

  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */

  function isObject(value) {
    var type = _typeof(value);

    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;
  /** `Object#toString` result references. */

  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */

  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    } // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.


    var tag = _baseGetTag(value);

    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;
  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER = 9007199254740991;
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */

  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var isLength_1 = isLength;
  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */

  function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike;
  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */

  function isIndex(value, length) {
    var type = _typeof(value);

    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  var _isIndex = isIndex;
  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */

  function isIterateeCall(value, index, object) {
    if (!isObject_1(object)) {
      return false;
    }

    var type = _typeof(index);

    if (type == 'number' ? isArrayLike_1(object) && _isIndex(index, object.length) : type == 'string' && index in object) {
      return eq_1(object[index], value);
    }

    return false;
  }

  var _isIterateeCall = isIterateeCall;
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */

  function isObjectLike(value) {
    return value != null && _typeof(value) == 'object';
  }

  var isObjectLike_1 = isObjectLike;
  /** `Object#toString` result references. */

  var symbolTag = '[object Symbol]';
  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */

  function isSymbol(value) {
    return _typeof(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
  }

  var isSymbol_1 = isSymbol;
  /** Used as references for various `Number` constants. */

  var NAN = 0 / 0;
  /** Used to match leading and trailing whitespace. */

  var reTrim = /^\s+|\s+$/g;
  /** Used to detect bad signed hexadecimal string values. */

  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  /** Used to detect binary string values. */

  var reIsBinary = /^0b[01]+$/i;
  /** Used to detect octal string values. */

  var reIsOctal = /^0o[0-7]+$/i;
  /** Built-in method references without a dependency on `root`. */

  var freeParseInt = parseInt;
  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */

  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }

    if (isSymbol_1(value)) {
      return NAN;
    }

    if (isObject_1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject_1(other) ? other + '' : other;
    }

    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }

    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }

  var toNumber_1 = toNumber;
  /** Used as references for various `Number` constants. */

  var INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308;
  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */

  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }

    value = toNumber_1(value);

    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }

    return value === value ? value : 0;
  }

  var toFinite_1 = toFinite;
  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */

  function toInteger(value) {
    var result = toFinite_1(value),
        remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }

  var toInteger_1 = toInteger;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeCeil = Math.ceil,
      nativeMax = Math.max;
  /**
   * Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining
   * elements.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to process.
   * @param {number} [size=1] The length of each chunk
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the new array of chunks.
   * @example
   *
   * _.chunk(['a', 'b', 'c', 'd'], 2);
   * // => [['a', 'b'], ['c', 'd']]
   *
   * _.chunk(['a', 'b', 'c', 'd'], 3);
   * // => [['a', 'b', 'c'], ['d']]
   */

  function chunk(array, size, guard) {
    if (guard ? _isIterateeCall(array, size, guard) : size === undefined) {
      size = 1;
    } else {
      size = nativeMax(toInteger_1(size), 0);
    }

    var length = array == null ? 0 : array.length;

    if (!length || size < 1) {
      return [];
    }

    var index = 0,
        resIndex = 0,
        result = Array(nativeCeil(length / size));

    while (index < length) {
      result[resIndex++] = _baseSlice(array, index, index += size);
    }

    return result;
  }

  var chunk_1 = chunk;

  var AtGrid =
  /** @class */
  function (_super) {
    __extends(AtGrid, _super);

    function AtGrid() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.handleClick = function (item, index, row, event) {
        var _a = _this.props,
            onClick = _a.onClick,
            _b = _a.columnNum,
            columnNum = _b === void 0 ? 3 : _b;

        if (typeof onClick === 'function') {
          var clickIndex = row * columnNum + index;
          onClick(item, clickIndex, event);
        }
      };

      return _this;
    }

    AtGrid.prototype.render = function () {
      var _this = this;

      var _a = this.props,
          data = _a.data,
          mode = _a.mode,
          _b = _a.columnNum,
          columnNum = _b === void 0 ? 3 : _b,
          hasBorder = _a.hasBorder;

      if (Array.isArray(data) && data.length === 0) {
        return null;
      }

      var gridGroup = chunk_1(data, columnNum);
      var bodyClass = classnames(['at-grid__flex-item', 'at-grid-item', "at-grid-item--" + mode], {
        'at-grid-item--no-border': !hasBorder
      });
      return React__default.createElement(components.View, {
        className: classnames('at-grid', this.props.className)
      }, gridGroup.map(function (item, i) {
        return React__default.createElement(components.View, {
          className: 'at-grid__flex',
          key: "at-grid-group-" + i
        }, item.map(function (childItem, index) {
          var _a;

          return React__default.createElement(components.View, {
            key: "at-grid-item-" + index,
            className: classnames(bodyClass, {
              'at-grid-item--last': index === columnNum - 1
            }),
            onClick: _this.handleClick.bind(_this, childItem, index, i),
            style: {
              flex: "0 0 " + 100 / columnNum + "%"
            }
          }, React__default.createElement(components.View, {
            className: 'at-grid-item__content'
          }, React__default.createElement(components.View, {
            className: 'at-grid-item__content-inner'
          }, React__default.createElement(components.View, {
            className: 'content-inner__icon'
          }, childItem.image && React__default.createElement(components.Image, {
            className: 'content-inner__img',
            src: childItem.image,
            mode: 'scaleToFill'
          }), childItem.iconInfo && !childItem.image && React__default.createElement(components.Text, {
            className: classnames(childItem.iconInfo.prefixClass || 'at-icon', (_a = {}, _a[(childItem.iconInfo.prefixClass || 'at-icon') + "-" + childItem.iconInfo.value] = childItem.iconInfo.value, _a), childItem.iconInfo.className),
            style: mergeStyle({
              color: childItem.iconInfo.color,
              fontSize: (childItem.iconInfo.size || 24) + "px"
            }, // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            childItem.iconInfo.customStyle)
          })), React__default.createElement(components.Text, {
            className: 'content-inner__text'
          }, childItem.value))));
        }));
      }));
    };

    return AtGrid;
  }(React__default.Component);

  AtGrid.defaultProps = {
    data: [],
    columnNum: 3,
    mode: 'square',
    hasBorder: true
  };
  AtGrid.propTypes = {
    mode: propTypes.string,
    onClick: propTypes.func,
    hasBorder: propTypes.bool,
    columnNum: propTypes.number,
    data: propTypes.arrayOf(propTypes.shape({
      image: propTypes.string,
      value: propTypes.string,
      iconInfo: propTypes.shape({
        size: propTypes.number,
        value: propTypes.string,
        color: propTypes.string,
        prefixClass: propTypes.string,
        customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
        className: propTypes.oneOfType([propTypes.array, propTypes.string])
      })
    }))
  };

  var AtIcon =
  /** @class */
  function (_super) {
    __extends(AtIcon, _super);

    function AtIcon() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtIcon.prototype.handleClick = function () {
      this.props.onClick && this.props.onClick(arguments);
    };

    AtIcon.prototype.render = function () {
      var _a = this.props,
          customStyle = _a.customStyle,
          className = _a.className,
          prefixClass = _a.prefixClass,
          value = _a.value,
          size = _a.size,
          color = _a.color;
      var rootStyle = {
        fontSize: "" + pxTransform(parseInt(String(size)) * 2),
        color: color
      };
      var iconName = value ? prefixClass + "-" + value : '';
      return React__default.createElement(components.Text, {
        className: classnames(prefixClass, iconName, className),
        style: mergeStyle(rootStyle, customStyle),
        onClick: this.handleClick.bind(this)
      });
    };

    return AtIcon;
  }(React__default.Component);

  AtIcon.defaultProps = {
    customStyle: '',
    className: '',
    prefixClass: 'at-icon',
    value: '',
    color: '',
    size: 24
  };
  AtIcon.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    prefixClass: propTypes.string,
    value: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onClick: propTypes.func
  };

  function getInputProps(props) {
    var actualProps = {
      type: props.type,
      maxLength: props.maxlength,
      disabled: props.disabled,
      password: false
    };

    switch (actualProps.type) {
      case 'phone':
        actualProps.type = 'number';
        actualProps.maxLength = 11;
        break;

      case 'password':
        actualProps.type = 'text';
        actualProps.password = true;
        break;
    }

    if (!props.disabled && !props.editable) {
      actualProps.disabled = true;
    }

    return actualProps;
  }

  var AtInput =
  /** @class */
  function (_super) {
    __extends(AtInput, _super);

    function AtInput() {
      var _this = _super !== null && _super.apply(this, arguments) || this; // TODO: 有待考证是否为合理方式处理 #840


      _this.inputClearing = false;

      _this.handleInput = function (event) {
        return _this.props.onChange(event.detail.value, event);
      };

      _this.handleFocus = function (event) {
        if (typeof _this.props.onFocus === 'function') {
          _this.props.onFocus(event.detail.value, event);
        }
      };

      _this.handleBlur = function (event) {
        if (typeof _this.props.onBlur === 'function') {
          _this.props.onBlur(event.detail.value, event);
        }

        if (event.type === 'blur' && !_this.inputClearing) {
          // fix # 583 AtInput 不触发 onChange 的问题
          _this.props.onChange(event.detail.value, event);
        } // 还原状态


        _this.inputClearing = false;
      };

      _this.handleConfirm = function (event) {
        if (typeof _this.props.onConfirm === 'function') {
          _this.props.onConfirm(event.detail.value, event);
        }
      };

      _this.handleClick = function (event) {
        if (!_this.props.editable && typeof _this.props.onClick === 'function') {
          _this.props.onClick(event);
        }
      };

      _this.handleClearValue = function (event) {
        _this.inputClearing = true;

        _this.props.onChange('', event);
      };

      _this.handleKeyboardHeightChange = function (event) {
        if (typeof _this.props.onKeyboardHeightChange === 'function') {
          _this.props.onKeyboardHeightChange(event);
        }
      };

      _this.handleErrorClick = function (event) {
        if (typeof _this.props.onErrorClick === 'function') {
          _this.props.onErrorClick(event);
        }
      };

      return _this;
    }

    AtInput.prototype.render = function () {
      var _a = this.props,
          className = _a.className,
          customStyle = _a.customStyle,
          name = _a.name,
          cursorSpacing = _a.cursorSpacing,
          confirmType = _a.confirmType,
          cursor = _a.cursor,
          selectionStart = _a.selectionStart,
          selectionEnd = _a.selectionEnd,
          adjustPosition = _a.adjustPosition,
          border = _a.border,
          title = _a.title,
          error = _a.error,
          clear = _a.clear,
          placeholder = _a.placeholder,
          placeholderStyle = _a.placeholderStyle,
          placeholderClass = _a.placeholderClass,
          autoFocus = _a.autoFocus,
          focus = _a.focus,
          value = _a.value,
          required = _a.required;

      var _b = getInputProps(this.props),
          type = _b.type,
          maxlength = _b.maxlength,
          disabled = _b.disabled,
          password = _b.password;

      var rootCls = classnames('at-input', {
        'at-input--without-border': !border
      }, className);
      var containerCls = classnames('at-input__container', {
        'at-input--error': error,
        'at-input--disabled': disabled
      });
      var overlayCls = classnames('at-input__overlay', {
        'at-input__overlay--hidden': !disabled
      });
      var placeholderCls = classnames('placeholder', placeholderClass);
      return React__default.createElement(components.View, {
        className: rootCls,
        style: customStyle
      }, React__default.createElement(components.View, {
        className: containerCls
      }, React__default.createElement(components.View, {
        className: overlayCls,
        onClick: this.handleClick
      }), title && React__default.createElement(components.Label, {
        className: "at-input__title " + (required && 'at-input__title--required'),
        for: name
      }, title), React__default.createElement(components.Input, {
        className: 'at-input__input',
        id: name,
        name: name,
        type: type,
        password: password,
        placeholderStyle: placeholderStyle,
        placeholderClass: placeholderCls,
        placeholder: placeholder,
        cursorSpacing: cursorSpacing,
        maxlength: maxlength,
        autoFocus: autoFocus,
        focus: focus,
        value: value,
        confirmType: confirmType,
        cursor: cursor,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        adjustPosition: adjustPosition,
        onInput: this.handleInput,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onConfirm: this.handleConfirm,
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        onKeyboardHeightChange: this.handleKeyboardHeightChange
      }), clear && value && React__default.createElement(components.View, {
        className: 'at-input__icon',
        onTouchEnd: this.handleClearValue
      }, React__default.createElement(components.Text, {
        className: 'at-icon at-icon-close-circle at-input__icon-close'
      })), error && React__default.createElement(components.View, {
        className: 'at-input__icon',
        onTouchStart: this.handleErrorClick
      }, React__default.createElement(components.Text, {
        className: 'at-icon at-icon-alert-circle at-input__icon-alert'
      })), React__default.createElement(components.View, {
        className: 'at-input__children'
      }, this.props.children)));
    };

    return AtInput;
  }(React__default.Component);

  AtInput.defaultProps = {
    className: '',
    customStyle: '',
    value: '',
    name: '',
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: '',
    title: '',
    cursorSpacing: 50,
    confirmType: 'done',
    cursor: 0,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    maxlength: 140,
    type: 'text',
    disabled: false,
    border: true,
    editable: true,
    error: false,
    clear: false,
    autoFocus: false,
    focus: false,
    required: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function onChange() {}
  };
  AtInput.propTypes = {
    className: propTypes.oneOfType([propTypes.string, propTypes.array]),
    customStyle: propTypes.oneOfType([propTypes.string, propTypes.object]),
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    name: propTypes.string,
    placeholder: propTypes.string,
    placeholderStyle: propTypes.string,
    placeholderClass: propTypes.string,
    title: propTypes.string,
    confirmType: propTypes.string,
    cursor: propTypes.oneOfType([propTypes.string, propTypes.number]),
    selectionStart: propTypes.oneOfType([propTypes.string, propTypes.number]),
    selectionEnd: propTypes.oneOfType([propTypes.string, propTypes.number]),
    adjustPosition: propTypes.bool,
    cursorSpacing: propTypes.oneOfType([propTypes.string, propTypes.number]),
    maxlength: propTypes.oneOfType([propTypes.string, propTypes.number]),
    type: propTypes.string,
    disabled: propTypes.bool,
    border: propTypes.bool,
    editable: propTypes.bool,
    error: propTypes.bool,
    clear: propTypes.bool,
    autoFocus: propTypes.bool,
    focus: propTypes.bool,
    onChange: propTypes.func,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    onConfirm: propTypes.func,
    onErrorClick: propTypes.func,
    onClick: propTypes.func,
    required: propTypes.bool
  };
  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */

  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }

    return result;
  }

  var _arrayMap = arrayMap;
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */

  var isArray = Array.isArray;
  var isArray_1 = isArray;
  /** Used as references for various `Number` constants. */

  var INFINITY$1 = 1 / 0;
  /** Used to convert symbols to primitives and strings. */

  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;
  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */

  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }

    if (isArray_1(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return _arrayMap(value, baseToString) + '';
    }

    if (isSymbol_1(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
  }

  var _baseToString = baseToString;
  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */

  function toString(value) {
    return value == null ? '' : _baseToString(value);
  }

  var toString_1 = toString; // TODO: Check all types
  // 实现两数相加并保留小数点后最短尾数

  function addNum(num1, num2) {
    var sq1, sq2;

    try {
      sq1 = toString_1(num1).split('.')[1].length;
    } catch (e) {
      sq1 = 0;
    }

    try {
      sq2 = toString_1(num2).split('.')[1].length;
    } catch (e) {
      sq2 = 0;
    }

    var m = Math.pow(10, Math.max(sq1, sq2));
    return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
  } // 格式化数字，处理01变成1,并且不处理1. 这种情况


  function parseValue(num) {
    if (num === '') return '0';
    var numStr = toString_1(num);

    if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
      // 处理01变成1,并且不处理1.
      return toString_1(parseFloat(num));
    }

    return toString_1(num);
  }

  var AtInputNumber =
  /** @class */
  function (_super) {
    __extends(AtInputNumber, _super);

    function AtInputNumber() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.handleValue = function (value) {
        var _a = _this.props,
            _b = _a.max,
            max = _b === void 0 ? 100 : _b,
            _c = _a.min,
            min = _c === void 0 ? 0 : _c;
        var resultValue = value === '' ? min : value; // 此处不能使用 Math.max，会是字符串变数字，并丢失 .

        if (resultValue > max) {
          resultValue = max;

          _this.handleError({
            type: 'OVER',
            errorValue: resultValue
          });
        }

        if (resultValue < min) {
          resultValue = min;

          _this.handleError({
            type: 'LOW',
            errorValue: resultValue
          });
        }

        if (resultValue && !Number(resultValue)) {
          resultValue = parseFloat(String(resultValue)) || min;

          _this.handleError({
            type: 'OVER',
            errorValue: resultValue
          });
        }

        resultValue = parseValue(String(resultValue));
        return resultValue;
      };

      _this.handleInput = function (e) {
        var value = e.target.value;
        var disabled = _this.props.disabled;
        if (disabled) return '';

        var newValue = _this.handleValue(value);

        _this.props.onChange(Number(newValue), e);

        return newValue;
      };

      _this.handleBlur = function (event) {
        return _this.props.onBlur && _this.props.onBlur(event);
      };

      _this.handleError = function (errorValue) {
        if (!_this.props.onErrorInput) {
          return;
        }

        _this.props.onErrorInput(errorValue);
      };

      return _this;
    }

    AtInputNumber.prototype.handleClick = function (clickType, e) {
      var _a = this.props,
          disabled = _a.disabled,
          value = _a.value,
          _b = _a.min,
          min = _b === void 0 ? 0 : _b,
          _c = _a.max,
          max = _c === void 0 ? 100 : _c,
          _d = _a.step,
          step = _d === void 0 ? 1 : _d;
      var lowThanMin = clickType === 'minus' && value <= min;
      var overThanMax = clickType === 'plus' && value >= max;

      if (lowThanMin || overThanMax || disabled) {
        var deltaValue_1 = clickType === 'minus' ? -step : step;
        var errorValue = addNum(Number(value), deltaValue_1);

        if (disabled) {
          this.handleError({
            type: 'DISABLED',
            errorValue: errorValue
          });
        } else {
          this.handleError({
            type: lowThanMin ? 'LOW' : 'OVER',
            errorValue: errorValue
          });
        }

        return;
      }

      var deltaValue = clickType === 'minus' ? -step : step;
      var newValue = addNum(Number(value), deltaValue);
      newValue = Number(this.handleValue(newValue));
      this.props.onChange(newValue, e);
    };

    AtInputNumber.prototype.render = function () {
      var _a = this.props,
          customStyle = _a.customStyle,
          className = _a.className,
          width = _a.width,
          disabled = _a.disabled,
          value = _a.value,
          type = _a.type,
          _b = _a.min,
          min = _b === void 0 ? 0 : _b,
          _c = _a.max,
          max = _c === void 0 ? 100 : _c,
          size = _a.size,
          disabledInput = _a.disabledInput;
      var inputStyle = {
        width: width ? "" + pxTransform(width) : ''
      };
      var inputValue = Number(this.handleValue(value));
      var rootCls = classnames('at-input-number', {
        'at-input-number--lg': size === 'large'
      }, className);
      var minusBtnCls = classnames('at-input-number__btn', {
        'at-input-number--disabled': inputValue <= min || disabled
      });
      var plusBtnCls = classnames('at-input-number__btn', {
        'at-input-number--disabled': inputValue >= max || disabled
      });
      return React__default.createElement(components.View, {
        className: rootCls,
        style: customStyle
      }, React__default.createElement(components.View, {
        className: minusBtnCls,
        onClick: this.handleClick.bind(this, 'minus')
      }, React__default.createElement(components.Text, {
        className: 'at-icon at-icon-subtract at-input-number__btn-subtract'
      })), React__default.createElement(components.Input, {
        className: 'at-input-number__input',
        style: inputStyle,
        type: type,
        value: String(inputValue),
        disabled: disabledInput || disabled,
        onInput: this.handleInput,
        onBlur: this.handleBlur
      }), React__default.createElement(components.View, {
        className: plusBtnCls,
        onClick: this.handleClick.bind(this, 'plus')
      }, React__default.createElement(components.Text, {
        className: 'at-icon at-icon-add at-input-number__btn-add'
      })));
    };

    return AtInputNumber;
  }(React__default.Component);

  AtInputNumber.defaultProps = {
    customStyle: '',
    className: '',
    disabled: false,
    disabledInput: false,
    value: 1,
    type: 'number',
    width: 0,
    min: 0,
    max: 100,
    step: 1,
    size: 'normal',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function onChange() {}
  };
  AtInputNumber.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    value: propTypes.oneOfType([propTypes.number, propTypes.string]),
    type: propTypes.oneOf(['number', 'digit']),
    disabled: propTypes.bool,
    width: propTypes.number,
    min: propTypes.number,
    max: propTypes.number,
    step: propTypes.number,
    size: propTypes.oneOf(['normal', 'large']),
    disabledInput: propTypes.bool,
    onChange: propTypes.func,
    onBlur: propTypes.func,
    onErrorInput: propTypes.func
  };

  var AtModalAction =
  /** @class */
  function (_super) {
    __extends(AtModalAction, _super);

    function AtModalAction() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtModalAction.prototype.render = function () {
      var rootClass = classnames('at-modal__footer', {
        'at-modal__footer--simple': this.props.isSimple
      }, this.props.className);
      return React__default.createElement(components.View, {
        className: rootClass
      }, React__default.createElement(components.View, {
        className: 'at-modal__action'
      }, this.props.children));
    };

    return AtModalAction;
  }(React__default.Component);

  AtModalAction.defaultProps = {
    isSimple: false
  };
  AtModalAction.propTypes = {
    isSimple: propTypes.bool
  };

  var AtModalContent =
  /** @class */
  function (_super) {
    __extends(AtModalContent, _super);

    function AtModalContent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtModalContent.prototype.render = function () {
      var rootClass = classnames('at-modal__content', this.props.className);
      return React__default.createElement(components.ScrollView, {
        scrollY: true,
        className: rootClass
      }, this.props.children);
    };

    return AtModalContent;
  }(React__default.Component);

  var AtModalHeader =
  /** @class */
  function (_super) {
    __extends(AtModalHeader, _super);

    function AtModalHeader() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtModalHeader.prototype.render = function () {
      var rootClass = classnames('at-modal__header', this.props.className);
      return React__default.createElement(components.View, {
        className: rootClass
      }, this.props.children);
    };

    return AtModalHeader;
  }(React__default.Component);

  var AtModal =
  /** @class */
  function (_super) {
    __extends(AtModal, _super);

    function AtModal(props) {
      var _this = _super.call(this, props) || this;

      _this.handleClickOverlay = function () {
        if (_this.props.closeOnClickOverlay) {
          _this.setState({
            _isOpened: false
          }, _this.handleClose);
        }
      };

      _this.handleClose = function (event) {
        if (typeof _this.props.onClose === 'function') {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          _this.props.onClose(event);
        }
      };

      _this.handleCancel = function (event) {
        if (typeof _this.props.onCancel === 'function') {
          _this.props.onCancel(event);
        }
      };

      _this.handleConfirm = function (event) {
        if (typeof _this.props.onConfirm === 'function') {
          _this.props.onConfirm(event);
        }
      };

      _this.handleTouchMove = function (e) {
        e.stopPropagation();
      };

      var isOpened = props.isOpened;
      _this.state = {
        _isOpened: isOpened,
        isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB
      };
      return _this;
    }

    AtModal.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      var isOpened = nextProps.isOpened;

      if (this.props.isOpened !== isOpened) {
        handleTouchScroll(isOpened);
      }

      if (isOpened !== this.state._isOpened) {
        this.setState({
          _isOpened: isOpened
        });
      }
    };

    AtModal.prototype.render = function () {
      var _a = this.state,
          _isOpened = _a._isOpened,
          isWEB = _a.isWEB;
      var _b = this.props,
          title = _b.title,
          content = _b.content,
          cancelText = _b.cancelText,
          confirmText = _b.confirmText;
      var rootClass = classnames('at-modal', {
        'at-modal--active': _isOpened
      }, this.props.className);

      if (title || content) {
        var isRenderAction = cancelText || confirmText;
        return React__default.createElement(components.View, {
          className: rootClass
        }, React__default.createElement(components.View, {
          onClick: this.handleClickOverlay,
          className: 'at-modal__overlay'
        }), React__default.createElement(components.View, {
          className: 'at-modal__container'
        }, title && React__default.createElement(AtModalHeader, null, React__default.createElement(components.Text, null, title)), content && React__default.createElement(AtModalContent, null, React__default.createElement(components.View, {
          className: 'content-simple'
        }, isWEB ? React__default.createElement(components.Text // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        , {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          dangerouslySetInnerHTML: {
            __html: content.replace(/\n/g, '<br/>')
          }
        }) : React__default.createElement(components.Text, null, content))), isRenderAction && React__default.createElement(AtModalAction, {
          isSimple: true
        }, cancelText && React__default.createElement(components.Button, {
          onClick: this.handleCancel
        }, cancelText), confirmText && React__default.createElement(components.Button, {
          onClick: this.handleConfirm
        }, confirmText))));
      }

      return React__default.createElement(components.View, {
        onTouchMove: this.handleTouchMove,
        className: rootClass
      }, React__default.createElement(components.View, {
        className: 'at-modal__overlay',
        onClick: this.handleClickOverlay
      }), React__default.createElement(components.View, {
        className: 'at-modal__container'
      }, this.props.children));
    };

    return AtModal;
  }(React__default.Component);

  AtModal.defaultProps = {
    isOpened: false,
    closeOnClickOverlay: true
  };
  AtModal.propTypes = {
    title: propTypes.string,
    isOpened: propTypes.bool,
    onCancel: propTypes.func,
    onConfirm: propTypes.func,
    onClose: propTypes.func,
    content: propTypes.string,
    closeOnClickOverlay: propTypes.bool,
    cancelText: propTypes.string,
    confirmText: propTypes.string
  };

  var AtNavBar =
  /** @class */
  function (_super) {
    __extends(AtNavBar, _super);

    function AtNavBar() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtNavBar.prototype.handleClickLeftView = function (event) {
      this.props.onClickLeftIcon && this.props.onClickLeftIcon(event);
    };

    AtNavBar.prototype.handleClickSt = function (event) {
      this.props.onClickRgIconSt && this.props.onClickRgIconSt(event);
    };

    AtNavBar.prototype.handleClickNd = function (event) {
      this.props.onClickRgIconNd && this.props.onClickRgIconNd(event);
    };

    AtNavBar.prototype.render = function () {
      var _a, _b, _c;

      var _d = this.props,
          customStyle = _d.customStyle,
          className = _d.className,
          color = _d.color,
          fixed = _d.fixed,
          border = _d.border,
          leftIconType = _d.leftIconType,
          leftText = _d.leftText,
          title = _d.title,
          rightFirstIconType = _d.rightFirstIconType,
          rightSecondIconType = _d.rightSecondIconType;
      var linkStyle = {
        color: color
      };
      var defaultIconInfo = {
        customStyle: '',
        className: '',
        prefixClass: 'at-icon',
        value: '',
        color: '',
        size: 24
      };
      var leftIconInfo = leftIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), leftIconType) : _assign(_assign({}, defaultIconInfo), {
        value: leftIconType
      });
      var leftIconClass = classnames(leftIconInfo.prefixClass, (_a = {}, _a[leftIconInfo.prefixClass + "-" + leftIconInfo.value] = leftIconInfo.value, _a), leftIconInfo.className);
      var rightFirstIconInfo = rightFirstIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), rightFirstIconType) : _assign(_assign({}, defaultIconInfo), {
        value: rightFirstIconType
      });
      var rightFirstIconClass = classnames(rightFirstIconInfo.prefixClass, (_b = {}, _b[rightFirstIconInfo.prefixClass + "-" + rightFirstIconInfo.value] = rightFirstIconInfo.value, _b), rightFirstIconInfo.className);
      var rightSecondIconInfo = rightSecondIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), rightSecondIconType) : _assign(_assign({}, defaultIconInfo), {
        value: rightSecondIconType
      });
      var rightSecondIconClass = classnames(rightSecondIconInfo.prefixClass, (_c = {}, _c[rightSecondIconInfo.prefixClass + "-" + rightSecondIconInfo.value] = rightSecondIconInfo.value, _c), rightSecondIconInfo.className);
      return React__default.createElement(components.View, {
        className: classnames({
          'at-nav-bar': true,
          'at-nav-bar--fixed': fixed,
          'at-nav-bar--no-border': !border
        }, className),
        style: customStyle
      }, React__default.createElement(components.View, {
        className: 'at-nav-bar__left-view',
        onClick: this.handleClickLeftView.bind(this),
        style: linkStyle
      }, leftIconType && React__default.createElement(components.Text, {
        className: leftIconClass,
        style: mergeStyle({
          color: leftIconInfo.color,
          fontSize: "" + pxTransform(parseInt(leftIconInfo.size.toString()) * 2)
        }, leftIconInfo.customStyle)
      }), React__default.createElement(components.Text, {
        className: 'at-nav-bar__text'
      }, leftText)), React__default.createElement(components.View, {
        className: 'at-nav-bar__title'
      }, title || this.props.children), React__default.createElement(components.View, {
        className: 'at-nav-bar__right-view'
      }, React__default.createElement(components.View, {
        className: classnames({
          'at-nav-bar__container': true,
          'at-nav-bar__container--hide': !rightSecondIconType
        }),
        style: linkStyle,
        onClick: this.handleClickNd.bind(this)
      }, rightSecondIconType && React__default.createElement(components.Text, {
        className: rightSecondIconClass,
        style: mergeStyle({
          color: rightSecondIconInfo.color,
          fontSize: "" + pxTransform(parseInt(rightSecondIconInfo.size.toString()) * 2)
        }, rightSecondIconInfo.customStyle)
      })), React__default.createElement(components.View, {
        className: classnames({
          'at-nav-bar__container': true,
          'at-nav-bar__container--hide': !rightFirstIconType
        }),
        style: linkStyle,
        onClick: this.handleClickSt.bind(this)
      }, rightFirstIconType && React__default.createElement(components.Text, {
        className: rightFirstIconClass,
        style: mergeStyle({
          color: rightFirstIconInfo.color,
          fontSize: "" + pxTransform(parseInt(rightFirstIconInfo.size.toString()) * 2)
        }, rightFirstIconInfo.customStyle)
      }))));
    };

    return AtNavBar;
  }(React__default.Component);

  AtNavBar.defaultProps = {
    customStyle: '',
    className: '',
    fixed: false,
    border: true,
    color: '',
    leftIconType: '',
    leftText: '',
    title: '',
    rightFirstIconType: '',
    rightSecondIconType: ''
  };
  AtNavBar.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    fixed: propTypes.bool,
    border: propTypes.bool,
    color: propTypes.string,
    leftIconType: propTypes.oneOfType([propTypes.string, propTypes.object]),
    leftText: propTypes.string,
    title: propTypes.string,
    rightFirstIconType: propTypes.oneOfType([propTypes.string, propTypes.object]),
    rightSecondIconType: propTypes.oneOfType([propTypes.string, propTypes.object]),
    onClickLeftIcon: propTypes.func,
    onClickRgIconSt: propTypes.func,
    onClickRgIconNd: propTypes.func
  };

  var AtNoticebar =
  /** @class */
  function (_super) {
    __extends(AtNoticebar, _super);

    function AtNoticebar(props) {
      var _this = _super.call(this, props) || this;

      var animElemId = "J_" + Math.ceil(Math.random() * 10e5).toString(36);
      _this.state = {
        show: true,
        animElemId: animElemId,
        animationData: {
          actions: [{}]
        },
        dura: 15,
        isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
        isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
        isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB
      };
      return _this;
    }

    AtNoticebar.prototype.onClose = function (event) {
      this.setState({
        show: false
      });
      this.props.onClose && this.props.onClose(event);
    };

    AtNoticebar.prototype.onGotoMore = function (event) {
      this.props.onGotoMore && this.props.onGotoMore(event);
    };

    AtNoticebar.prototype.UNSAFE_componentWillReceiveProps = function () {
      if (!this.timeout) {
        this.interval && clearInterval(this.interval);
        this.initAnimation();
      }
    };

    AtNoticebar.prototype.componentDidMount = function () {
      if (!this.props.marquee) return;
      this.initAnimation();
    };

    AtNoticebar.prototype.initAnimation = function () {
      var _this = this;

      var _a = this.state,
          isWEAPP = _a.isWEAPP,
          isALIPAY = _a.isALIPAY;
      this.timeout = setTimeout(function () {
        _this.timeout = null;

        if (_this.state.isWEB) {
          var _a = _this.props.speed,
              speed = _a === void 0 ? 100 : _a;
          var elem = document.querySelector("." + _this.state.animElemId);
          if (!elem) return;
          var width = elem.getBoundingClientRect().width;
          var dura = width / +speed;

          _this.setState({
            dura: dura
          });
        } else if (isWEAPP || isALIPAY) {
          var query = Taro.createSelectorQuery();
          query.select("." + _this.state.animElemId).boundingClientRect().exec(function (res) {
            var queryRes = res[0];
            if (!queryRes) return;
            var width = queryRes.width;
            var _a = _this.props.speed,
                speed = _a === void 0 ? 100 : _a;
            var dura = width / +speed;
            var animation = Taro.createAnimation({
              duration: dura * 1000,
              timingFunction: 'linear'
            });
            var resetAnimation = Taro.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });
            var resetOpacityAnimation = Taro.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });

            var animBody = function animBody() {
              resetOpacityAnimation.opacity(0).step();

              _this.setState({
                animationData: resetOpacityAnimation.export()
              });

              setTimeout(function () {
                resetAnimation.translateX(0).step();

                _this.setState({
                  animationData: resetAnimation.export()
                });
              }, 300);
              setTimeout(function () {
                resetOpacityAnimation.opacity(1).step();

                _this.setState({
                  animationData: resetOpacityAnimation.export()
                });
              }, 600);
              setTimeout(function () {
                animation.translateX(-width).step();

                _this.setState({
                  animationData: animation.export()
                });
              }, 900);
            };

            animBody();
            _this.interval = setInterval(animBody, dura * 1000 + 1000);
          });
        }
      }, 1000);
    };

    AtNoticebar.prototype.render = function () {
      var _a = this.props,
          single = _a.single,
          icon = _a.icon,
          marquee = _a.marquee,
          customStyle = _a.customStyle,
          className = _a.className,
          _b = _a.moreText,
          moreText = _b === void 0 ? '查看详情' : _b;
      var _c = this.props,
          showMore = _c.showMore,
          close = _c.close;
      var _d = this.state,
          dura = _d.dura,
          show = _d.show,
          animElemId = _d.animElemId,
          animationData = _d.animationData,
          isWEAPP = _d.isWEAPP,
          isALIPAY = _d.isALIPAY;
      var rootClassName = ['at-noticebar'];
      if (!single) showMore = false;
      var style = {};
      var innerClassName = ['at-noticebar__content-inner'];

      if (marquee) {
        close = false;
        style['animation-duration'] = dura + "s";
        innerClassName.push(animElemId);
      }

      var classObject = {
        'at-noticebar--marquee': marquee,
        'at-noticebar--weapp': marquee && (isWEAPP || isALIPAY),
        'at-noticebar--single': !marquee && single
      };
      var iconClass = ['at-icon'];
      if (icon) iconClass.push("at-icon-" + icon);
      return show && React__default.createElement(components.View, {
        className: classnames(rootClassName, classObject, className),
        style: customStyle
      }, close && React__default.createElement(components.View, {
        className: 'at-noticebar__close',
        onClick: this.onClose.bind(this)
      }, React__default.createElement(components.Text, {
        className: 'at-icon at-icon-close'
      })), React__default.createElement(components.View, {
        className: 'at-noticebar__content'
      }, icon && React__default.createElement(components.View, {
        className: 'at-noticebar__content-icon'
      }, React__default.createElement(components.Text, {
        className: classnames(iconClass, iconClass)
      })), React__default.createElement(components.View, {
        className: 'at-noticebar__content-text'
      }, React__default.createElement(components.View, {
        id: animElemId,
        animation: animationData,
        className: classnames(innerClassName),
        style: style
      }, this.props.children))), showMore && React__default.createElement(components.View, {
        className: 'at-noticebar__more',
        onClick: this.onGotoMore.bind(this)
      }, React__default.createElement(components.Text, {
        className: 'text'
      }, moreText), React__default.createElement(components.View, {
        className: 'at-noticebar__more-icon'
      }, React__default.createElement(components.Text, {
        className: 'at-icon at-icon-chevron-right'
      }))));
    };

    return AtNoticebar;
  }(React__default.Component);

  AtNoticebar.defaultProps = {
    close: false,
    single: false,
    marquee: false,
    speed: 100,
    moreText: '查看详情',
    showMore: false,
    icon: '',
    customStyle: {}
  };
  AtNoticebar.propTypes = {
    close: propTypes.bool,
    single: propTypes.bool,
    marquee: propTypes.bool,
    speed: propTypes.number,
    moreText: propTypes.string,
    showMore: propTypes.bool,
    icon: propTypes.string,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    onClose: propTypes.func,
    onGotoMore: propTypes.func
  };
  var MIN_MAXPAGE = 1;

  var getMaxPage = function getMaxPage(maxPage) {
    if (maxPage === void 0) {
      maxPage = 0;
    }

    if (maxPage <= 0) return MIN_MAXPAGE;
    return maxPage;
  };

  var createPickerRange = function createPickerRange(max) {
    var range = new Array(max).fill(0).map(function (_val, index) {
      return index + 1;
    });
    return range;
  };

  var AtPagination =
  /** @class */
  function (_super) {
    __extends(AtPagination, _super);

    function AtPagination(props) {
      var _this = _super.call(this, props) || this;

      var _a = _this.props,
          current = _a.current,
          _b = _a.pageSize,
          pageSize = _b === void 0 ? 20 : _b,
          total = _a.total;
      var maxPage = getMaxPage(Math.ceil(total / pageSize));
      _this.state = {
        currentPage: current || 1,
        maxPage: maxPage,
        pickerRange: createPickerRange(maxPage)
      };
      return _this;
    }

    AtPagination.prototype.onPrev = function () {
      var currentPage = this.state.currentPage;
      var originCur = currentPage;
      currentPage -= 1;
      currentPage = Math.max(1, currentPage);
      if (originCur === currentPage) return;
      this.props.onPageChange && this.props.onPageChange({
        type: 'prev',
        current: currentPage
      });
      this.setState({
        currentPage: currentPage
      });
    };

    AtPagination.prototype.onNext = function () {
      var currentPage = this.state.currentPage;
      var originCur = currentPage;
      var maxPage = this.state.maxPage;
      currentPage += 1;
      currentPage = Math.min(maxPage, currentPage);
      if (originCur === currentPage) return;
      this.props.onPageChange && this.props.onPageChange({
        type: 'next',
        current: currentPage
      });
      this.setState({
        currentPage: currentPage
      });
    };

    AtPagination.prototype.UNSAFE_componentWillReceiveProps = function (props) {
      var total = props.total,
          _a = props.pageSize,
          pageSize = _a === void 0 ? 20 : _a,
          current = props.current;
      var maxPage = getMaxPage(Math.ceil(total / pageSize));

      if (maxPage !== this.state.maxPage) {
        this.setState({
          maxPage: maxPage,
          pickerRange: createPickerRange(maxPage)
        });
      }

      if (typeof current === 'number' && current !== this.state.currentPage) {
        this.setState({
          currentPage: current
        });
      }
    }; // onPickerChange (evt) {
    //   const { value } = evt.detail
    //   const current = +value + 1
    //   if (current === this.state.currentPage) return
    //   this.props.onPageChange && this.props.onPageChange({ type: 'pick', current })
    //   this.setState({
    //     currentPage: current,
    //   })
    // }


    AtPagination.prototype.render = function () {
      var _a = this.props,
          icon = _a.icon,
          // pickerSelect,
      customStyle = _a.customStyle;
      var _b = this.state,
          currentPage = _b.currentPage,
          maxPage = _b.maxPage // pickerRange,
      ;
      var rootClassName = ['at-pagination'];
      var prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1;
      var nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage;
      var classObject = {
        'at-pagination--icon': icon
      };
      return React__default.createElement(components.View, {
        className: classnames(rootClassName, classObject, this.props.className),
        style: customStyle
      }, React__default.createElement(components.View, {
        className: 'at-pagination__btn-prev'
      }, icon && React__default.createElement(AtButton, {
        onClick: this.onPrev.bind(this),
        size: 'small',
        disabled: prevDisabled
      }, React__default.createElement(components.Text, {
        className: 'at-icon at-icon-chevron-left'
      })), !icon && React__default.createElement(AtButton, {
        onClick: this.onPrev.bind(this),
        size: 'small',
        disabled: prevDisabled
      }, "\u4E0A\u4E00\u9875")), React__default.createElement(components.View, {
        className: 'at-pagination__number'
      }, React__default.createElement(components.Text, {
        className: 'at-pagination__number-current'
      }, currentPage), "/", maxPage), React__default.createElement(components.View, {
        className: 'at-pagination__btn-next'
      }, icon && React__default.createElement(AtButton, {
        onClick: this.onNext.bind(this),
        size: 'small',
        disabled: nextDisabled
      }, React__default.createElement(components.Text, {
        className: 'at-icon at-icon-chevron-right'
      })), !icon && React__default.createElement(AtButton, {
        onClick: this.onNext.bind(this),
        size: 'small',
        disabled: nextDisabled
      }, "\u4E0B\u4E00\u9875")));
    };

    return AtPagination;
  }(React__default.Component);

  AtPagination.defaultProps = {
    current: 1,
    total: 0,
    pageSize: 20,
    icon: false,
    customStyle: {}
  };
  AtPagination.propTypes = {
    current: propTypes.number,
    total: propTypes.number,
    pageSize: propTypes.number,
    icon: propTypes.bool,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    onPageChange: propTypes.func
  };

  var AtProgress =
  /** @class */
  function (_super) {
    __extends(AtProgress, _super);

    function AtProgress() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtProgress.prototype.render = function () {
      var _a;

      var color = this.props.color;
      var percent = this.props.percent;
      var _b = this.props,
          strokeWidth = _b.strokeWidth,
          status = _b.status,
          isHidePercent = _b.isHidePercent;

      if (typeof percent !== 'number') {
        percent = 0;
      }

      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      }

      var rootClass = classnames('at-progress', (_a = {}, _a["at-progress--" + status] = !!status, _a), this.props.className);
      var iconClass = classnames('at-icon', {
        'at-icon-close-circle': status === 'error',
        'at-icon-check-circle': status === 'success'
      });
      var progressStyle = {
        width: percent && +percent + "%",
        height: strokeWidth && +strokeWidth + "px",
        backgroundColor: color
      };
      return React__default.createElement(components.View, {
        className: rootClass
      }, React__default.createElement(components.View, {
        className: 'at-progress__outer'
      }, React__default.createElement(components.View, {
        className: 'at-progress__outer-inner'
      }, React__default.createElement(components.View, {
        className: 'at-progress__outer-inner-background',
        style: progressStyle
      }))), !isHidePercent && React__default.createElement(components.View, {
        className: 'at-progress__content'
      }, !status || status === 'progress' ? percent + "%" : React__default.createElement(components.Text, {
        className: iconClass
      })));
    };

    return AtProgress;
  }(React__default.Component);

  AtProgress.propTypes = {
    color: propTypes.string,
    status: propTypes.string,
    percent: propTypes.number,
    strokeWidth: propTypes.number,
    isHidePercent: propTypes.bool
  };

  var AtRadio =
  /** @class */
  function (_super) {
    __extends(AtRadio, _super);

    function AtRadio() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtRadio.prototype.handleClick = function (option, event) {
      if (option.disabled) return;
      this.props.onClick(option.value, event);
    };

    AtRadio.prototype.render = function () {
      var _this = this;

      var _a = this.props,
          customStyle = _a.customStyle,
          className = _a.className,
          options = _a.options,
          value = _a.value;
      return React__default.createElement(components.View, {
        className: classnames('at-radio', className),
        style: customStyle
      }, options.map(function (option) {
        return React__default.createElement(components.View, {
          key: option.value,
          onClick: _this.handleClick.bind(_this, option),
          className: classnames({
            'at-radio__option': true,
            'at-radio__option--disabled': option.disabled
          })
        }, React__default.createElement(components.View, {
          className: 'at-radio__option-wrap'
        }, React__default.createElement(components.View, {
          className: 'at-radio__option-container'
        }, React__default.createElement(components.View, {
          className: 'at-radio__title'
        }, option.label), React__default.createElement(components.View, {
          className: classnames({
            'at-radio__icon': true,
            'at-radio__icon--checked': value === option.value
          })
        }, React__default.createElement(components.Text, {
          className: 'at-icon at-icon-check'
        }))), option.desc && React__default.createElement(components.View, {
          className: 'at-radio__desc'
        }, option.desc)));
      }));
    };

    return AtRadio;
  }(React__default.Component);

  AtRadio.defaultProps = {
    customStyle: '',
    className: '',
    value: '',
    options: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function onClick() {}
  };
  AtRadio.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    value: propTypes.string,
    options: propTypes.array,
    onClick: propTypes.func
  };

  var AtRate =
  /** @class */
  function (_super) {
    __extends(AtRate, _super);

    function AtRate() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtRate.prototype.handleClick = function (event) {
      this.props.onChange && this.props.onChange(event);
    };

    AtRate.prototype.render = function () {
      var _this = this;

      var _a = this.props,
          customStyle = _a.customStyle,
          className = _a.className,
          _b = _a.value,
          value = _b === void 0 ? 0 : _b,
          _c = _a.max,
          max = _c === void 0 ? 5 : _c,
          size = _a.size,
          _d = _a.margin,
          margin = _d === void 0 ? 5 : _d;
      var iconStyle = {
        marginRight: pxTransform(margin)
      };
      var starIconStyle = {
        fontSize: size ? size + "px" : ''
      }; // 生成星星颜色 className 数组，方便在jsx中直接map

      var classNameArr = [];
      var floorValue = Math.floor(value);
      var ceilValue = Math.ceil(value);

      for (var i = 0; i < max; i++) {
        if (floorValue > i) {
          classNameArr.push('at-rate__icon at-rate__icon--on');
        } else if (ceilValue - 1 === i) {
          classNameArr.push('at-rate__icon at-rate__icon--half');
        } else {
          classNameArr.push('at-rate__icon at-rate__icon--off');
        }
      }

      return React__default.createElement(components.View, {
        className: classnames('at-rate', className),
        style: customStyle
      }, classNameArr.map(function (cls, i) {
        return React__default.createElement(components.View, {
          className: cls,
          key: "at-rate-star-" + i,
          style: iconStyle,
          onClick: _this.handleClick.bind(_this, i + 1)
        }, React__default.createElement(components.Text, {
          className: 'at-icon at-icon-star-2',
          style: starIconStyle
        }), React__default.createElement(components.View, {
          className: 'at-rate__left'
        }, React__default.createElement(components.Text, {
          className: 'at-icon at-icon-star-2',
          style: starIconStyle
        })));
      }));
    };

    return AtRate;
  }(React__default.Component);

  AtRate.defaultProps = {
    customStyle: '',
    className: '',
    size: 0,
    value: 0,
    max: 5,
    margin: 5
  };
  AtRate.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    size: propTypes.oneOfType([propTypes.string, propTypes.number]),
    value: propTypes.number,
    max: propTypes.number,
    margin: propTypes.number,
    onChange: propTypes.func
  };

  var AtSegmentedControl =
  /** @class */
  function (_super) {
    __extends(AtSegmentedControl, _super);

    function AtSegmentedControl() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtSegmentedControl.prototype.handleClick = function (index, event) {
      if (this.props.disabled) return;
      this.props.onClick(index, event);
    };

    AtSegmentedControl.prototype.render = function () {
      var _this = this;

      var _a = this.props,
          _b = _a.customStyle,
          customStyle = _b === void 0 ? '' : _b,
          className = _a.className,
          disabled = _a.disabled,
          values = _a.values,
          selectedColor = _a.selectedColor,
          current = _a.current,
          color = _a.color,
          _c = _a.fontSize,
          fontSize = _c === void 0 ? 28 : _c;
      var rootStyle = {
        borderColor: selectedColor
      };
      var itemStyle = {
        color: selectedColor,
        fontSize: pxTransform(fontSize),
        borderColor: selectedColor,
        backgroundColor: color
      };
      var selectedItemStyle = {
        color: color,
        fontSize: pxTransform(fontSize),
        borderColor: selectedColor,
        backgroundColor: selectedColor
      };
      var rootCls = classnames('at-segmented-control', {
        'at-segmented-control--disabled': disabled
      }, className);
      return React__default.createElement(components.View, {
        className: rootCls,
        style: mergeStyle(rootStyle, customStyle)
      }, values.map(function (value, i) {
        return React__default.createElement(components.View, {
          className: classnames('at-segmented-control__item', {
            'at-segmented-control__item--active': current === i
          }),
          style: current === i ? selectedItemStyle : itemStyle,
          key: value,
          onClick: _this.handleClick.bind(_this, i)
        }, value);
      }));
    };

    return AtSegmentedControl;
  }(React__default.Component);

  AtSegmentedControl.defaultProps = {
    customStyle: '',
    className: '',
    current: 0,
    color: '',
    fontSize: 28,
    disabled: false,
    selectedColor: '',
    values: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function onClick() {}
  };
  AtSegmentedControl.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    current: propTypes.number,
    color: propTypes.string,
    fontSize: propTypes.oneOfType([propTypes.string, propTypes.number]),
    disabled: propTypes.bool,
    values: propTypes.array,
    onClick: propTypes.func
  };

  var AtSwitch =
  /** @class */
  function (_super) {
    __extends(AtSwitch, _super);

    function AtSwitch() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.handleChange = function (event) {
        var _a = event.detail,
            value = _a.value,
            checked = _a.checked;
        var state = typeof value === 'undefined' ? checked : value;
        _this.props.onChange && _this.props.onChange(state);
      };

      return _this;
    }

    AtSwitch.prototype.render = function () {
      var _a = this.props,
          customStyle = _a.customStyle,
          className = _a.className,
          disabled = _a.disabled,
          border = _a.border,
          title = _a.title,
          checked = _a.checked,
          color = _a.color;
      var rootCls = classnames('at-switch', {
        'at-switch--without-border': !border
      }, className);
      var containerCls = classnames('at-switch__container', {
        'at-switch--disabled': disabled
      });
      return React__default.createElement(components.View, {
        className: rootCls,
        style: customStyle
      }, React__default.createElement(components.View, {
        className: 'at-switch__title'
      }, title), React__default.createElement(components.View, {
        className: containerCls
      }, React__default.createElement(components.View, {
        className: 'at-switch__mask'
      }), React__default.createElement(components.Switch, {
        className: 'at-switch__switch',
        checked: checked,
        color: color,
        onChange: this.handleChange
      })));
    };

    return AtSwitch;
  }(React__default.Component);

  AtSwitch.defaultProps = {
    customStyle: '',
    className: '',
    title: '',
    color: '#6190e8',
    border: true,
    disabled: false,
    checked: false
  };
  AtSwitch.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    title: propTypes.string,
    color: propTypes.string,
    checked: propTypes.bool,
    border: propTypes.bool,
    disabled: propTypes.bool,
    onChange: propTypes.func
  };

  var AtTabBar =
  /** @class */
  function (_super) {
    __extends(AtTabBar, _super);

    function AtTabBar() {
      return _super !== null && _super.apply(this, arguments) || this;
    } // constructor () {
    //   super(...arguments)
    //   this.state = {
    //     isIPhoneX: false
    //   }
    // }
    // componentDidMount () {
    //   const curEnv = Taro.getEnv()
    //   if (
    //     curEnv === Taro.ENV_TYPE.WEAPP &&
    //     Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
    //   ) {
    //     this.setState({ isIPhoneX: true })
    //   }
    // }


    AtTabBar.prototype.handleClick = function (index, event) {
      this.props.onClick(index, event);
    };

    AtTabBar.prototype.render = function () {
      var _this = this;

      var _a = this.props,
          _b = _a.customStyle,
          customStyle = _b === void 0 ? '' : _b,
          className = _a.className,
          fixed = _a.fixed,
          backgroundColor = _a.backgroundColor,
          tabList = _a.tabList,
          current = _a.current,
          color = _a.color,
          iconSize = _a.iconSize,
          fontSize = _a.fontSize,
          selectedColor = _a.selectedColor; // const { isIPhoneX } = this.state

      var defaultStyle = {
        color: color || ''
      };
      var selectedStyle = {
        color: selectedColor || ''
      };
      var titleStyle = {
        fontSize: fontSize ? fontSize + "px" : ''
      };
      var rootStyle = {
        backgroundColor: backgroundColor || ''
      };
      var imgStyle = {
        width: iconSize + "px",
        height: iconSize + "px"
      };
      return React__default.createElement(components.View, {
        className: classnames({
          'at-tab-bar': true,
          'at-tab-bar--fixed': fixed // 'at-tab-bar--ipx': isIPhoneX

        }, className),
        style: mergeStyle(rootStyle, customStyle)
      }, tabList.map(function (item, i) {
        var _a;

        return React__default.createElement(components.View, {
          className: classnames('at-tab-bar__item', {
            'at-tab-bar__item--active': current === i
          }),
          style: current === i ? selectedStyle : defaultStyle,
          key: item.title,
          onClick: _this.handleClick.bind(_this, i)
        }, item.iconType ? React__default.createElement(AtBadge, {
          dot: !!item.dot,
          value: item.text,
          maxValue: Number(item.max)
        }, React__default.createElement(components.View, {
          className: 'at-tab-bar__icon'
        }, React__default.createElement(components.Text, {
          className: classnames("" + (item.iconPrefixClass || 'at-icon'), (_a = {}, _a[(item.iconPrefixClass || 'at-icon') + "-" + item.selectedIconType] = current === i && item.selectedIconType, _a[(item.iconPrefixClass || 'at-icon') + "-" + item.iconType] = !(current === i && item.selectedIconType), _a)),
          style: {
            color: current === i ? selectedColor : color,
            fontSize: iconSize ? iconSize + "px" : ''
          }
        }))) : null, item.image ? React__default.createElement(AtBadge, {
          dot: !!item.dot,
          value: item.text,
          maxValue: Number(item.max)
        }, React__default.createElement(components.View, {
          className: 'at-tab-bar__icon'
        }, React__default.createElement(components.Image, {
          className: classnames('at-tab-bar__inner-img', {
            'at-tab-bar__inner-img--inactive': current !== i
          }),
          mode: 'widthFix',
          src: item.selectedImage || item.image,
          style: imgStyle
        }), React__default.createElement(components.Image, {
          className: classnames('at-tab-bar__inner-img', {
            'at-tab-bar__inner-img--inactive': current === i
          }),
          mode: 'widthFix',
          src: item.image,
          style: imgStyle
        }))) : null, React__default.createElement(components.View, null, React__default.createElement(AtBadge, {
          dot: item.iconType || item.image ? false : !!item.dot,
          value: item.iconType || item.image ? '' : item.text,
          maxValue: item.iconType || item.image ? 0 : Number(item.max)
        }, React__default.createElement(components.View, {
          className: 'at-tab-bar__title',
          style: titleStyle
        }, item.title))));
      }));
    };

    return AtTabBar;
  }(React__default.Component);

  AtTabBar.defaultProps = {
    customStyle: '',
    className: '',
    fixed: false,
    current: 0,
    tabList: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function onClick() {}
  };
  AtTabBar.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    fixed: propTypes.bool,
    backgroundColor: propTypes.string,
    current: propTypes.number,
    iconSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
    fontSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
    color: propTypes.string,
    selectedColor: propTypes.string,
    tabList: propTypes.array,
    onClick: propTypes.func
  };
  var ENV$1 = Taro.getEnv();
  var MIN_DISTANCE = 100;
  var MAX_INTERVAL = 10;

  var AtTabs =
  /** @class */
  function (_super) {
    __extends(AtTabs, _super);

    function AtTabs(props) {
      var _this = _super.call(this, props) || this;

      _this.updateState = function (idx) {
        if (_this.props.scroll) {
          // 标签栏滚动
          switch (ENV$1) {
            case Taro.ENV_TYPE.WEAPP:
            case Taro.ENV_TYPE.ALIPAY:
            case Taro.ENV_TYPE.SWAN:
              {
                var index = Math.max(idx - 1, 0);

                _this.setState({
                  _scrollIntoView: "tab" + _this._tabId + index
                });

                break;
              }

            case Taro.ENV_TYPE.WEB:
              {
                var index = Math.max(idx - 1, 0);
                var prevTabItem = _this.tabHeaderRef.childNodes[index];
                prevTabItem && _this.setState({
                  _scrollTop: prevTabItem.offsetTop,
                  _scrollLeft: prevTabItem.offsetLeft
                });
                break;
              }

            default:
              {
                console.warn('AtTab 组件在该环境还未适配');
                break;
              }
          }
        }
      };

      _this.state = {
        _scrollLeft: 0,
        _scrollTop: 0,
        _scrollIntoView: ''
      };
      _this._tabId = isTest() ? 'tabs-AOTU2018' : uuid(); // 触摸时的原点

      _this._touchDot = 0; // 定时器

      _this._timer = null; // 滑动时间间隔

      _this._interval = 0; // 是否已经在滑动

      _this._isMoving = false;
      return _this;
    }

    AtTabs.prototype.handleClick = function (index, event) {
      this.props.onClick(index, event);
    };

    AtTabs.prototype.handleTouchStart = function (e) {
      var _this = this;

      var _a = this.props,
          swipeable = _a.swipeable,
          tabDirection = _a.tabDirection;
      if (!swipeable || tabDirection === 'vertical') return; // 获取触摸时的原点

      this._touchDot = e.touches[0].pageX; // 使用js计时器记录时间

      this._timer = setInterval(function () {
        _this._interval++;
      }, 100);
    };

    AtTabs.prototype.handleTouchMove = function (e) {
      var _a = this.props,
          swipeable = _a.swipeable,
          tabDirection = _a.tabDirection,
          current = _a.current,
          tabList = _a.tabList;
      if (!swipeable || tabDirection === 'vertical') return;
      var touchMove = e.touches[0].pageX;
      var moveDistance = touchMove - this._touchDot;
      var maxIndex = tabList.length;

      if (!this._isMoving && this._interval < MAX_INTERVAL && this._touchDot > 20) {
        // 向左滑动
        if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
          this._isMoving = true;
          this.handleClick(current + 1, e); // 向右滑动
        } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
          this._isMoving = true;
          this.handleClick(current - 1, e);
        }
      }
    };

    AtTabs.prototype.handleTouchEnd = function () {
      var _a = this.props,
          swipeable = _a.swipeable,
          tabDirection = _a.tabDirection;
      if (!swipeable || tabDirection === 'vertical') return;
      clearInterval(this._timer);
      this._interval = 0;
      this._isMoving = false;
    };

    AtTabs.prototype.getTabHeaderRef = function () {
      if (ENV$1 === Taro.ENV_TYPE.WEB) {
        this.tabHeaderRef = document.getElementById(this._tabId);
      }
    };

    AtTabs.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      if (nextProps.scroll !== this.props.scroll) {
        this.getTabHeaderRef();
      }

      if (nextProps.current !== this.props.current) {
        this.updateState(nextProps.current);
      }
    };

    AtTabs.prototype.componentDidMount = function () {
      this.getTabHeaderRef();
      this.updateState(this.props.current);
    };

    AtTabs.prototype.componentWillUnmount = function () {
      this.tabHeaderRef = null;
    };

    AtTabs.prototype.render = function () {
      var _a;

      var _this = this;

      var _b = this.props,
          _c = _b.customStyle,
          customStyle = _c === void 0 ? '' : _c,
          className = _b.className,
          height = _b.height,
          tabDirection = _b.tabDirection,
          animated = _b.animated,
          tabList = _b.tabList,
          scroll = _b.scroll,
          current = _b.current;
      var _d = this.state,
          _scrollLeft = _d._scrollLeft,
          _scrollTop = _d._scrollTop,
          _scrollIntoView = _d._scrollIntoView;
      var heightStyle = {
        height: height
      };
      var underlineStyle = {
        height: tabDirection === 'vertical' ? tabList.length * 100 + "%" : '1PX',
        width: tabDirection === 'horizontal' ? tabList.length * 100 + "%" : '1PX'
      };
      var bodyStyle = {};
      var transformStyle = "translate3d(0px, -" + current * 100 + "%, 0px)";

      if (tabDirection === 'horizontal') {
        transformStyle = "translate3d(-" + current * 100 + "%, 0px, 0px)";
      }

      Object.assign(bodyStyle, {
        transform: transformStyle,
        '-webkit-transform': transformStyle
      });

      if (!animated) {
        bodyStyle.transition = 'unset';
      }

      var tabItems = tabList.map(function (item, idx) {
        var itemCls = classnames({
          'at-tabs__item': true,
          'at-tabs__item--active': current === idx
        });
        return React__default.createElement(components.View, {
          className: itemCls,
          id: "tab" + _this._tabId + idx,
          key: item.title,
          onClick: _this.handleClick.bind(_this, idx)
        }, item.title, React__default.createElement(components.View, {
          className: 'at-tabs__item-underline'
        }));
      });
      var rootCls = classnames((_a = {
        'at-tabs': true,
        'at-tabs--scroll': scroll
      }, _a["at-tabs--" + tabDirection] = true, _a["at-tabs--" + ENV$1] = true, _a), className);
      var scrollX = tabDirection === 'horizontal';
      var scrollY = tabDirection === 'vertical';
      return React__default.createElement(components.View, {
        className: rootCls,
        style: mergeStyle(heightStyle, customStyle)
      }, scroll ? React__default.createElement(components.ScrollView, {
        id: this._tabId,
        className: 'at-tabs__header',
        style: heightStyle,
        scrollX: scrollX,
        scrollY: scrollY,
        scrollWithAnimation: true,
        scrollLeft: _scrollLeft,
        scrollTop: _scrollTop,
        scrollIntoView: _scrollIntoView
      }, tabItems) : React__default.createElement(components.View, {
        id: this._tabId,
        className: 'at-tabs__header'
      }, tabItems), React__default.createElement(components.View, {
        className: 'at-tabs__body',
        onTouchStart: this.handleTouchStart.bind(this),
        onTouchEnd: this.handleTouchEnd.bind(this),
        onTouchMove: this.handleTouchMove.bind(this),
        style: mergeStyle(bodyStyle, heightStyle)
      }, React__default.createElement(components.View, {
        className: 'at-tabs__underline',
        style: underlineStyle
      }), this.props.children));
    };

    return AtTabs;
  }(React__default.Component);

  AtTabs.defaultProps = {
    customStyle: '',
    className: '',
    tabDirection: 'horizontal',
    height: '',
    current: 0,
    swipeable: true,
    scroll: false,
    animated: true,
    tabList: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function onClick() {}
  };
  AtTabs.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    height: propTypes.string,
    tabDirection: propTypes.oneOf(['horizontal', 'vertical']),
    current: propTypes.number,
    swipeable: propTypes.bool,
    scroll: propTypes.bool,
    animated: propTypes.bool,
    tabList: propTypes.array,
    onClick: propTypes.func
  };

  var AtTabsPane =
  /** @class */
  function (_super) {
    __extends(AtTabsPane, _super);

    function AtTabsPane() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtTabsPane.prototype.render = function () {
      var _a = this.props,
          customStyle = _a.customStyle,
          className = _a.className,
          tabDirection = _a.tabDirection,
          index = _a.index,
          current = _a.current;
      return React__default.createElement(components.View, {
        className: classnames({
          'at-tabs-pane': true,
          'at-tabs-pane--vertical': tabDirection === 'vertical',
          'at-tabs-pane--active': index === current,
          'at-tabs-pane--inactive': index !== current
        }, className),
        style: customStyle
      }, this.props.children);
    };

    return AtTabsPane;
  }(React__default.Component);

  AtTabsPane.defaultProps = {
    customStyle: '',
    className: '',
    tabDirection: 'horizontal',
    index: 0,
    current: 0
  };
  AtTabsPane.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    tabDirection: propTypes.oneOf(['horizontal', 'vertical']),
    index: propTypes.number,
    current: propTypes.number
  };
  var SIZE_CLASS$2 = {
    normal: 'normal',
    small: 'small'
  };
  var TYPE_CLASS$1 = {
    primary: 'primary'
  };

  var AtTag =
  /** @class */
  function (_super) {
    __extends(AtTag, _super);

    function AtTag() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtTag.prototype.onClick = function (event) {
      var _a = this.props,
          _b = _a.name,
          name = _b === void 0 ? '' : _b,
          _c = _a.active,
          active = _c === void 0 ? false : _c,
          disabled = _a.disabled,
          onClick = _a.onClick;

      if (!disabled) {
        typeof onClick === 'function' && onClick({
          name: name,
          active: active
        }, event);
      }
    };

    AtTag.prototype.render = function () {
      var _a;

      var _b = this.props,
          _c = _b.size,
          size = _c === void 0 ? 'normal' : _c,
          _d = _b.type,
          type = _d === void 0 ? '' : _d,
          _e = _b.circle,
          circle = _e === void 0 ? false : _e,
          _f = _b.disabled,
          disabled = _f === void 0 ? false : _f,
          _g = _b.active,
          active = _g === void 0 ? false : _g,
          customStyle = _b.customStyle;
      var rootClassName = ['at-tag'];
      var classObject = (_a = {}, _a["at-tag--" + SIZE_CLASS$2[size]] = SIZE_CLASS$2[size], _a["at-tag--" + type] = TYPE_CLASS$1[type], _a['at-tag--disabled'] = disabled, _a['at-tag--active'] = active, _a['at-tag--circle'] = circle, _a);
      return React__default.createElement(components.View, {
        className: classnames(rootClassName, classObject, this.props.className),
        style: customStyle,
        onClick: this.onClick.bind(this)
      }, this.props.children);
    };

    return AtTag;
  }(React__default.Component);

  AtTag.defaultProps = {
    size: 'normal',
    type: '',
    name: '',
    circle: false,
    active: false,
    disabled: false,
    customStyle: {}
  };
  AtTag.propTypes = {
    size: propTypes.oneOf(['normal', 'small']),
    type: propTypes.oneOf(['', 'primary']),
    name: propTypes.string,
    circle: propTypes.bool,
    active: propTypes.bool,
    disabled: propTypes.bool,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    onClick: propTypes.func
  };

  function getMaxLength(maxLength, textOverflowForbidden) {
    if (!textOverflowForbidden) {
      return maxLength + 500;
    }

    return maxLength;
  }

  var ENV$2 = Taro.getEnv();

  var AtTextarea =
  /** @class */
  function (_super) {
    __extends(AtTextarea, _super);

    function AtTextarea() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.handleInput = function (event) {
        _this.props.onChange(event.target.value, event);
      };

      _this.handleFocus = function (event) {
        _this.props.onFocus && _this.props.onFocus(event);
      };

      _this.handleBlur = function (event) {
        _this.props.onBlur && _this.props.onBlur(event);
      };

      _this.handleConfirm = function (event) {
        _this.props.onConfirm && _this.props.onConfirm(event);
      };

      _this.handleLinechange = function (event) {
        _this.props.onLinechange && _this.props.onLinechange(event);
      };

      return _this;
    }

    AtTextarea.prototype.render = function () {
      var _a = this.props,
          customStyle = _a.customStyle,
          className = _a.className,
          value = _a.value,
          cursorSpacing = _a.cursorSpacing,
          placeholder = _a.placeholder,
          placeholderStyle = _a.placeholderStyle,
          placeholderClass = _a.placeholderClass,
          _b = _a.maxLength,
          maxLength = _b === void 0 ? 200 : _b,
          count = _a.count,
          disabled = _a.disabled,
          autoFocus = _a.autoFocus,
          focus = _a.focus,
          showConfirmBar = _a.showConfirmBar,
          selectionStart = _a.selectionStart,
          selectionEnd = _a.selectionEnd,
          fixed = _a.fixed,
          _c = _a.textOverflowForbidden,
          textOverflowForbidden = _c === void 0 ? true : _c,
          height = _a.height;

      var _maxLength = parseInt(maxLength.toString());

      var actualMaxLength = getMaxLength(_maxLength, textOverflowForbidden);
      var textareaStyle = height ? "height:" + pxTransform(Number(height)) : '';
      var rootCls = classnames('at-textarea', "at-textarea--" + ENV$2, {
        'at-textarea--error': _maxLength < value.length
      }, className);
      var placeholderCls = classnames('placeholder', placeholderClass);
      return React__default.createElement(components.View, {
        className: rootCls,
        style: customStyle
      }, React__default.createElement(components.Textarea, {
        className: 'at-textarea__textarea',
        style: textareaStyle,
        placeholderStyle: placeholderStyle,
        placeholderClass: placeholderCls,
        cursorSpacing: cursorSpacing,
        value: value,
        maxlength: actualMaxLength,
        placeholder: placeholder,
        disabled: disabled,
        autoFocus: autoFocus,
        focus: focus,
        showConfirmBar: showConfirmBar,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        fixed: fixed,
        onInput: this.handleInput,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onConfirm: this.handleConfirm,
        onLineChange: this.handleLinechange
      }), count && React__default.createElement(components.View, {
        className: 'at-textarea__counter'
      }, value.length, "/", _maxLength));
    };

    return AtTextarea;
  }(React__default.Component);

  AtTextarea.defaultProps = {
    customStyle: '',
    className: '',
    value: '',
    cursorSpacing: 100,
    maxLength: 200,
    placeholder: '',
    disabled: false,
    autoFocus: false,
    focus: false,
    showConfirmBar: false,
    selectionStart: -1,
    selectionEnd: -1,
    count: true,
    fixed: false,
    height: '',
    textOverflowForbidden: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function onChange() {}
  };
  AtTextarea.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    value: propTypes.string.isRequired,
    cursorSpacing: propTypes.number,
    maxLength: propTypes.oneOfType([propTypes.string, propTypes.number]),
    placeholderClass: propTypes.string,
    placeholderStyle: propTypes.string,
    placeholder: propTypes.string,
    disabled: propTypes.bool,
    autoFocus: propTypes.bool,
    focus: propTypes.bool,
    showConfirmBar: propTypes.bool,
    selectionStart: propTypes.number,
    selectionEnd: propTypes.number,
    count: propTypes.bool,
    textOverflowForbidden: propTypes.bool,
    fixed: propTypes.bool,
    height: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onLinechange: propTypes.func,
    onChange: propTypes.func.isRequired,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    onConfirm: propTypes.func
  };

  var AtTimeline =
  /** @class */
  function (_super) {
    __extends(AtTimeline, _super);

    function AtTimeline() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtTimeline.prototype.render = function () {
      var _a = this.props,
          pending = _a.pending,
          items = _a.items,
          customStyle = _a.customStyle;
      var rootClassName = ['at-timeline'];
      if (pending) rootClassName.push('at-timeline--pending');
      var rootClassObject = {
        'at-timeline--pending': pending
      };
      var itemElems = items.map(function (item, index) {
        var _a;

        var _b = item.title,
            title = _b === void 0 ? '' : _b,
            color = item.color,
            icon = item.icon,
            _c = item.content,
            content = _c === void 0 ? [] : _c;
        var iconClass = classnames((_a = {
          'at-icon': true
        }, _a["at-icon-" + icon] = icon, _a));
        var itemRootClassName = ['at-timeline-item'];
        if (color) itemRootClassName.push("at-timeline-item--" + color);
        var dotClass = [];

        if (icon) {
          dotClass.push('at-timeline-item__icon');
        } else {
          dotClass.push('at-timeline-item__dot');
        }

        return React__default.createElement(components.View, {
          className: classnames(itemRootClassName),
          key: "at-timeline-item-" + index
        }, React__default.createElement(components.View, {
          className: 'at-timeline-item__tail'
        }), React__default.createElement(components.View, {
          className: classnames(dotClass)
        }, icon && React__default.createElement(components.Text, {
          className: iconClass
        })), React__default.createElement(components.View, {
          className: 'at-timeline-item__content'
        }, React__default.createElement(components.View, {
          className: 'at-timeline-item__content-item'
        }, title), content.map(function (sub, subIndex) {
          return React__default.createElement(components.View, {
            className: 'at-timeline-item__content-item at-timeline-item__content--sub',
            key: subIndex
          }, sub);
        })));
      });
      return React__default.createElement(components.View, {
        className: classnames(rootClassName, rootClassObject, this.props.className),
        style: customStyle
      }, itemElems);
    };

    return AtTimeline;
  }(React__default.Component);

  AtTimeline.defaultProps = {
    pending: false,
    items: [],
    customStyle: {}
  };
  AtTimeline.propTypes = {
    pending: propTypes.bool,
    items: propTypes.arrayOf(propTypes.object),
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string])
  };
  var error = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAGwtJREFUeAHtnUusndV1x7mAIYABG/MUYGzLBCUtFHcCtB3YZgISGaCodOQ4QGGSoJAgV5FiOTAALBowY6tFASoUmYyS0EoRYPEonUUKRETYKNhWEnCwFZvWEIzB/f3v/T773HPP2Wt/79da0v/uc85+rfVfa93vsff5zswpLpUwcPz48aUMvAKsTMpLKC8Ey0bKc3h9JjhjpOTlKUfBpyPlEV4fBAdGyv283gPeUzkzM/NnSpeSGZgpebzBDUciXITR1yW4NilXU54P6pTDTPYueBO8lZRvkjgf8tolJwOeIBmJIyGuoMs6sD7B8oxD1N18LxO+DHaqJGH+ULcCXZ7PE8TwXnKESBNC5ZeNLm2v3oWCacLs9CNM2F2eIBP4ISlu4uM7wM3gr0FfeTqObb8BL4EdJMv/ULqMMNBXx4+YGPeSpFhJyw0JdA0xRNE1zLMCyaKL/8HLoBOEpNCFtI4USox/AIPmA/tT0ZHldaBk0ZFFNwAGKYMLCJLiNDx9K/gG+Br4EnCZzsBfqPo5eAb8J8nyxfSm/asZTIKQGItwn44U3wdX1+TK/2WedxLsptTaxehaxiHej653aP1DMrouonWSJSBdQ9E6yqVANlyT4FzKOkQ2bAU6BfusjgmbnqP3CUJi6AhxN/gXsLwiwvcw7tsgTYbZkiB6v6L55g2LjZfxQZosaflVPlsxr2F5b/Yx1GPg37FRRxiXrjFA0CwGm8D7oGzZx4BPg43gyrZyI90SHaWrdC5bxK04XtxWDlyvMQZw1lKwBRwEZcl+BvoJuBd09g6XdE9skC2yqSwR1+Jc22tc2sgAzjkN3AcOgTJE/x0fB2vaaG8ZOsk28AQo6ygr7uUD3QhxaQsDOORG8CtQVD5mgOfArWAwTpatic2yXRwUFfnihrbEx2D1wAnLwHbwBcgr6rsT3AXquhvUWp/BwXkJFzspi/Iq3+ium0udDED6DLgbHAB55Qgdt4Gr6tS9S3OJm4QjcZVX5CP5qvd3TFvhW4i+HrwB8sphOj4MtE3dJYIBcQUeAeIur8hn10dM503yMAC5p4LN4BjII/pPpv5adHPJwYC4SzjMe+SW734ATs0xvXeZxgCEXgx+CfLIH+n0ANC391xKYEBcJpyK2zwiX15cgio+BESuBXkc8Qn9dG/e91pVFEbiNuFYXGcV+XRtRar1f1jI0ymVAvxzkFVeoMOq/rPUDgvFNRDnWUWnXPKxn3JlcSWEXQJeBFllLx1uzzKXty2PAXEP5IOsIl/roRYuFgMQtQ5kXdk9Sp+t4GxrfK+vlgF8oOsT+UI+ySLy+bpqtev46BC0AXyWhVXavgK+0nHTe6e+fAJeBVlEvtdXElzGGYAY3WnKsnKra5OHgJ+/jpPZkvfyTeKjLNeRioEHWmJC82pAxgx4DGQRHY7XN6+9axDDgHwFsp42KyaGvfoOAaeDH4Ms4hd0MVHZsjY4OM+NF8XG6S0zpR51MPxs8AsQKzpM+y3BetxTySz4T6dc8mGWUy7FyLBuvmDwBeANECu+qFRJyDYzKE7PuvirWLmgGW1rnlWGgrdArKjt5TWr6dNVzIB8CrLGQb+TBEJ0WpXlyPE67f1rnBUHa1PDy7dAPo4VxU4/T7cwTBfkWa45fkb7s5pyns9bDwPyMZCvY0Ux1K8LdwzSrdynYxmg3VNgMF95rScU2zuLfJ34nCJKFEv9uQWMMVnWOR5trytdsyoZIE4ejUqPuUZ6Llf3BVu0Qh4jWkG9v/sWuwVFGFAMAMVCjHR7xR0LN4BYYz05ikRWj/oSM0qSGFFsdXPvFopre0HsxkM/repRgJdhCrETe7qlGOvWLmAU1raC2L03T5VBqI/RPwaIoadAjCjWuvF9EhTVdoLYLzvp9p7frepfbJdikWIDxN4CVsy1f2c3Sm4BMaIFIl/nKCWU+juIYgTELiZuaTUTGKI9NjEb0bTFwFfIW+3N9iinWAEx21KO0W5tezQf0QTF9GgebSq0RG18b9UId/7SZkAxA2Ljq12PFEJxXXfEPLeqvRlu+8hbNMwAMaYzFMWQJYrF9lyPoMxmS+Okvt3niA0HgE9vM0AcxV7jbrZHq6EFCutZuTFZ/SLt2pPVNXDjU5TPgGIIKJYsUUw2+yxgFNAmRG1BtqQ796nL96mPWDIDBFvsOptis7lNjUyux9pborta/oCFkoNk6MMppkDMHdO7G+EK5ZaBmKd8P9iIgj5p7xkg/h4ElihG6/8RHybdbmlG/SvArzt6H6rNGKjYSmKMIijba9UQVW4A2kkZEj160p94WKtnhjeZYgwo1kKiWL2xFnaYSPtjYn4wc2stCvkkg2eAeNSzgC1RzFa/749J9DO/luylQT+/XD/4cGwfAYo1oJiz5L5KtWd27Yk5ZGlBvf8EQaWe8MHHGVDMRcSlYre6PYAM/sMIJV4YV97fOwN1MEBsxvyITzW7OZh8MThoJMgn1K+qgwyfo34G8K0W6J4B2jT4J/BT0Jqf0UaXVUAxGBLF8OLS2WPQTaFZk7pqsrOgNeh2JfgO+BH4JvDfLczIKZxpS5GSYlx02tKmJInZq7Upo/nh5hCgH2v8YJyZsff6r9K6wEOnr4OPxnR9h/fXha322pQBuFJyaMFtmjyftm26REHFqmIxJNr6VF6sMti3Q7Mldd9rmpzx+dFrORhPjtQUOfxvxvv4+/kMiCMQSg7xuX9+r2bfoc8DUsqQb5WiJZMsAtYtNBHYut8hR6fvgpB4kgSiBOJikkP8/j4wTO1V6KPfSbSSWjG9yFIuZhuInju03BjoyZmZmSNGmyaqLb21R+cliPIjyZh3Ek5e4uOYfUxq1xpJYvFJQyHFhmI7v0CSVs13gZAcpnJJ/lmq64led4UUH6nzI8mIG+Al9sghCnXh3rpH7qDTEqDYDIliO//qOp1vC42e1D08wm2rXqKfnoihC/IY8STBexCVJTlazRm2PBLh+NtyBy2D7zAmOEL9RbknqKEj+l0H5MgYabXDq6YLgnqTHOIKey4CitGQ7MjFKyPqEGUtumzLNXjNnbCjV46vgr6+coRd20BIFOPZLxHodE9oVOq0hbg1C0RW0KCrJ8kUkvrMjWIUKFZDcs8UaqZ/zGivhUakbuf03u2sQWdPkjHXDIETxSoIyWtjtITfMtJKYGXdneFR2lmLXZ4kiWuGwgV23glColiP30NI4y2h0aj7GJzbzhSwtUL3wSfJkDhQrALFbEji9xEyyu7QSNQ9Z4dhu1tgw2CTZIi2K2ZBSHZHRSwj3BQaJam7JWqwljfClsElyRBtVhhi9y1J7IaKvzNDlt5PhkagTjsh868+mhrU2wBbBpMkOWztzY5nxSxQ7IbE2p4ym2nWY+YfrzeEq58NxnqfJEOw0YoUOHg8lB3UvRkcgwZaebTuXq0JDtLRSuxWknwIYqRTK+4YlOUfgDjo5eZN7FpjOFexP31nCJV3GAO0at9/2bmI7VkCSUnS+lOQHDb1MjnSWIGP/SAkd6RtVY5vd18/WjnhdecWByfYMPUjtkn/msqbwcGpjU5WaBv4yzDd2iRJdIvdsi6bb044OGll/15ZMTw9ByDU2tp+b//4WmgRPHT+SKLkAL5Jc8y9cHIvCMmusS5zb+lxRahXUrd6Yucefoi9nU0SdPfkmBKTcLM6ieVQccWC7rTeEOpB3b4FnXr+ATZ3LknQ2ZPDiEvFMgjJiW8ajl6DTD/3mpvQOncz1OpeddeuSfC4rodeBjFfkx3KNcekwLNieWEuQK71YIaNk2Yawmdw0/ojSQ4de323KhSXcLURhGTvvP601PqHJVfO6zSwN5CT9dSltrtbbdatjWECX3qQoCUn10NoebPR+r02Glq3TnCUNUkq/y+NTq0/utXtp5j54O09EBLd7j+xDmL9t3s7ZtK+t+GaRFsRdH4au06iRwpZ3OamLRk7yzrH+sSG3HP2qKMV07N+Sy/SLSe+0yNiCpmSI0kqWUxMkiPLBbknx3zPWzE9L0Gund93wTtrsAUd+vxB00mSMTkO4AtPjoUBacX0yZyA8EMgJGsXju+fQFiWaxJtArSO1CapGefsxH4x0+gKGsDjWhCSQ7PT0mJpqFVSd1kFOvZiSPipLUmSubLsOC6ckL1w0gQj4PKyJLZDxVJ908raAnx4wvj+0QgDcFh5kiRzeHKM8F70JZxajyZdo4v0lcZEkzdvGZ2GVJ3xmuRCuMl0d0vJoT5AfS3RHTa/5rBYmqu3YnulEmSFMZZ1MWN0H0b1SJLootiS6CRJkkN3q2KSwy/ILebn11uxvUIJcun8PgveWVm2oMNQP0iSJPb7JGaSjBw5suytCn9tdKjOmWy3FduXKkEs8nv9LcLJvOX/tKwjyUhy+JEjvzusnlZsL4tJkJhVY0uRQdWPHElynW7lSA59E9CPHNmjzIrt2QSx/kPFODm7aj3vkTdJPDlqDQwrti/Ubd7fgpCcXFGsVfd+TAaxWW8Bx97KLWXhsR8s57MC31wbCnzqfqtTrMXG8HMrikYjr57MQI5rEuuIron0n89PqyZTnuVTK7YXK0HOMEb81Kj3aoOBjKdbxmieHBZBGeqt2D4jJkGOZpjQm05hoKQk8SPHFH5zfmzF9hm6BrEeC39Wzsm92wQG4FvXJLHXGTQ9IX7NMYHPIh/BrH7kNSQfK0GOhVpQ15sHVRchs8y+cJo1STw5ynRAMpZi24j9YzrFcukGA8e7oWa/tFSC2Odh/bK5UWt09ECB2I2Hqa66s6VvJvot95SRckrrBtVRJYh1JX9mObr4KDmTIyXOkyRlorzSiu1P/QhSHtnBkQomRzq2J0nKRDmlH0HK4bHYKCUlR6pEmiT+bcGUkfxl1BHkiDH+EqPeqwMMZEwOrXMIlihJMn3pyhpwoPVWbB/RKZa1o1HOcMnBQI7k0HdJ1gNPkhx85+hixfZBJYjlDOv7Ijn06n+XPMmh1XbwFux4ktQTIlZsH4g5gliD1GNKh2bJmxypiZ4kKROVl1Zszx5BrFMs6yu5lVvRpQmKJkdqqydJykSlpRXbs0eQDwwVrjbqvTphoKzkSAn1JEmZqKy0Ynu/TrH2GNNfY9R7NQyUnRwpqUmS6OLdulZUF7+7lRIXV1qxvUeOtR4c91HcXMNtpeQAsTt0c208rGOOoXkQTj8CIVmjBPFHjxaIDPirPDlS9eqcK52zryVcxj16VATQ2B9enSMSmgjYJubMQU3ru8DjWhCS2a/j6hpE8u5cMfWvda42tWNfK2A2y65cXT+U8h1yrkn0eB+/JikeWFZMz+ZEmiDWM5WswYqr26ERmkqOlCJPkpSJQqUV07M5kSaIVm9DYg0W6turuqaTIyXTkyRlIndpxfTJnMDp/iOeETwrOUCld6si1JjXBH30bKdW6TRPwZa+gbP3QEh0GjsntPKfgU7JmFLCUeuSI1W1zbqlOraphK9sPwMt5em0F4RkY5uMrFMXSGltcqQ8dEHHVNemS7jaCEKyJ9UxvQbRe/0GRUjWhyr7WgeLjdytysqnX5NkYsyK5YW5QCBsCKUUdfsyqdCDxkoO0Knz+y7qXHeoKJZBSDYs0InWV4R6JHWrF3Ts6QfY27nkSF3RZd1TG6oq4WZ1Esuh4vKJ89NjV6gXdfdO7NizD7Gzs8mRuqIPNqS2lFkqhkFI5v0s2+g1iPRYeO41Xzvr3G1+6w6+g7lOXHNY1Po1yVSGrBiengMExx2h1KLO+smqqVp1oULJATp1zWHx2kebLJtD9YphEJI7pvanl9ZDvgj1pm7N1AE6XIFdvUuO1B19ti21MaaEh78FIVHsXxQciwZvhkag7vHgAB2sxKbeJkfqjiHYmNo6rYSDJ0BIrD2JswuG20IjUPc+OG2aEl37HFt6nxypT4Zka2pzWipmgWI3JNvS9lNLet8UGiGpu3XqAB2qwJbBJEfqliHaLNux+9YkdkPFTSlPwZIRdodGoe654AAdqMSGwSVH6pYh2q6YBSHZnfJjloyyJTQSdfpVqnPNgVraAN0HmxypS4bEAbaeB6xfUtuScmOWDLYSWHez7jIHamED7Bp8cqRuGQoX2HkXCIlifWXKS1RJh9dCI1K3M2qgFjVCZ0+OMX8MgRPFKgjJq2O02G8Z7Z7QiNQp666yR2pHC3T15Jjiij5zoxgF1tnQPVOomf4xg54PPgEhsW+LTZ+ithoM8OQw2O4rR9hlLVsoxs836JlcTccdICRHqAyvPE4eurZP0c+TI5LtHFxdGzl0I80Um0AxGpIduZVj1NtCIyd1D+eeoOKO6OfJkZHjjJy9Q/uzMk5RW3N0ewRYcltuhRhZq4/WFvjDtLF+qSe3Dnk7otMl4E8gRrRB0X/SLCFbXIDYTZt35vVRlf3QfwlQbIZEsX1qIT0YwLpFJgU2F5qkgs7o9LQUixBPjgn8w1tskjwxoXvjH6H/5gjfF1+qYJJFwHqgwwHanNM4KyMKoM8fgCWeHCOcjb+EvJgk+e54v6bfo/c5QDEZEsX0olJ0ZaBvh2ZK6h4oZbKSBkEna9+/J0cE1/AYShI9HX15xDC1NkGnB4Al3ypNKWb6EvjAmPGPalfapAUHQpfnA/p6cmTgFx71cDpdkI+KkuPrGYappSk6KVYViyHRrt5yY5UBN4VmTOri97NUTBf6XAUmPbVeF+5+QZ6RfzhT4H0T/Ah8B1yZcYhamqPXFmDJptKVYcbF4KAxsxZdVpU+ec4B0eUq8FOgpNB/lWfAJTmH824tZwDfrgLW4rZieHElpjBwTHa+UMnkPqgzYDBAfL4ALKnuLIeZ9WtUk05bxpW63bDFq52BUhkgAG8fD8IJ7xW7S0udeHwwJrhvwsTjH+kW2tnjff29M1AFA4o1YC1FKEbvq2L+eWMyiVbXf6XZDNk6r6O/cQYqYoA43GrEoqoVs/U8S4GJbgTWFuKjtPlKRZz4sM7ALAOKMaBYC4li9YZaKWPC7SGNkrpXKIvtdanVKp+sSwwotsCrSayFiu2124U2y8CBkFZJ3UO1K+cTDoIB4uuhiPhTjC5rhBAmvjtCwc9ps74RBX3S3jKgmAKKLUvubowENJsBb1gaUq+lfV+ga8xT/ZpYsZTEFEVQFJszjVqPAteDY0E15ypfpPDrkUa91f3JFUNAsWSJYvL6VliMIpstbZP66lYxW8GEK1E1A8RRzG4OhdsPqtYlenyUUVb/UloZonPGtdEDe0NnYIQBxQ6Iue5QLLbrbAWFLgbWNmOazLaZ/BNXI2T4S2dglAHi5vIM8XXxaN/WvMaA2Ax/i7bV7olpDSuuSFEGFCtAMWOJrjvWFp2v0v4oGHuO+DptW/tEjEpJ8sGjGVCMAMVKjLT/GhcrYu8yyOCfgXr2x0S7xBu2hQHFRhIjFKbozla7rjumEYmisfepZfVT08bxz4fNgGJDARIh3Vtnw6h14LMI49Tk0WGHgls/zoBiIjJ2FGPrxvt34j2KbwDaSRkj93fCKFeycgYIlvtjAoY2iq0NlStU5QQYEPMIFvEhYz1JqnRGB8ZWDCSxQGFKqx41lZtezHzMNPVkAz/dys10tzsSArGnVYqWx7pt7Yj2GKNNjU/LqkjRxZnf3RrhsM8v5Wsgn8eKYqnZTYhlOwSDTge/iGWAdroF7OskZTuiZePJx4mvKaJEMXR6y8woRx0M05frY7bHp0xpgchX3Muhv3WjyLcgdhFQMaHY6ffDQDDwAhCzbYBms6K2vnerdeFdTCH5FGSNgwuKzdqR3hCjJMlyJNEmyLUdMc/VNBiQL4F8GiuKlWEkR8odBut0K8s1iTaibQHd2E6QGurlCQbku8SH8mWsKEb6fVp1gqGxFxiuC/csd7dEqvbc+Nd3x7hs+1v5LPEdRbQoNvp5QR7rMAiYAVnWScSu9t6sj53D2zXLgHyV+IwiWhQT/bqVW8QNkKEVd62mx4q+WfYg8FOuIsRX2Fe+SXwU8y1Ams6KYqAfK+Rlcwsx2rsVu8Fxlk3+vAr8CY5lO6PgePJJ4huKaJHvu723qiBvZncIynM41qMn9XzWYV7MmazW10A+SHwhn2QRnTZ3c1duffTOzQRReS7o5Iy9wH96oW6HJfOJ+8QHFJnEb7xk9Rn06vxVt3WznL+mXtEPqazKOqe3z8eAuAYxP16T+ict5Vu/dZ+P9rleEJh1USkl/5OE/HJ/rLGIMT3rC7/63UIFuLjOKr74W1Y8wLweKRTz3K1JTpIjvgda9TvuZXHTxDjiEuiuY5bVcJqfEPmynY/maYLQMuaEUJ1ybQZZVmFpfkL0lG/1X1KGPkMcQ9wlHMY81Z+mC0S+kw/81nxVAQS5ehaw9ubklcN0fBhcVJWOfRtXXCWcibu8Ip+141m5fXPQuD0QrdV3/fRC3v9kdD1+BGwDV42P7+/nGBA3CUfiKq/IR/KVr4rXHViQvgxsB1p9zSvquxPcCc6t24a2zScOEi52UhblVb5p5sdr2kZsk/rghBtAzA+L0iwoH1P7HLgFDOYrv7I1sVm2i4OiIl/c2GRM+NxjDOAQOVk/UX0IlCFa2X0crBmbqjdvZVtio2wtQ8S9fDCYfy6dCwacsxT8EBwEZcl+BvoJuBes7hwpicLSPbFBtsimskRcaz3Evx7dleDAWYvBJlDWf0eGOiH7ePU02AiubCsn0i3R8ceU0rlsEbfieHFbOSiqV+/vLOA8raT/M9gElhclbEr/PXz+NnhnFDMzM+/zvnLBxsuY5JoxfJX3K0AVso9B/xX8Gzb+pYoJ2jJm7xMkJZogWsRrbaX+Prg6/bzi8iPG3wWUOCr3g4PgQFIeovwUHB0peXnKGeDMkVKLm7obdGFS6huVXwZKCpXngTpkN5NsBc+SGJ/VMWHTcwwmQVKiSRRdQN4KvgG+BnyvFiQEREeIn4NnwH+RGJ8H2vauanAJMupBkkX/mf8RKFn+HgyaD+xP5Tgv/hsoKZ4nKXSkG6R4QCRuJ1lW8lKnYEJn71Ql5uQt3qXjs+A/SIrf5R2kT/08QSZ4k2S5iY//CdwM/gr0lScdKX4DXgY7SIo3KF1GGOir40dMLPaSZNGmxnVgfYK6LvCLKT69ty60lRDCTpLiw+lNvcYTJGMMkDBX0GU0YZZnHKLu5rolO5oQv69bgS7P5wlS0HvJEeY6hklxLa91DXN+waGzdj9MB11DvAXeTOFHCJgoIJ4gBcgLdSVxtO1iBViZlJdSai1jdD1DK9Ba8xDSdQ9ezlsX0RrJ/4HR9RO9/gDsAe+pJBH+TOlSMgP/D3W7PKH+6NniAAAAAElFTkSuQmCC";
  var success = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAGfFJREFUeAHtnWusXmWVx3soFES0QAsFp+lQLuIFCHyZUjRDWz4pYIxA0SiUW4uGYRwlVRg6ZVRmxjBRHD/QSdPqSImXTjKSiKLggEIpycQBA8g9HO5QaAslU7BQOPP7H/bb8563736eZ99vayX/s/e7n9ta/7XW2ZdnX0ammBTCwNjY2AF0fBiYGy1nsZwJZvQt38v63mBa35LVKW+CHX3L7axvAZv7lptYfxKMajkyMvIKS5OcGRjJub/OdUciHITRx0U4NloeyXI6KFO2Mdjj4D5wf7S8j8R5mXWTlAxYgiQkjoSYTZOFYFGEOQm7KLv6Uwx4G7hdSxLmubIVaPJ4liAe70V7iF5CaPlBT5O6Fz+Kgr2Eud32MG53WYIM4YekmM/mxeAUcAxoK09j2PYA+G+wnmS5m6VJHwNtdXyfiWGrJMVcap4TQecQXRSdw6wTSBad/HdeOp0gJIVOpLWnUGJ8HHSaD+zvifYsG4CSRXsWXQDopHQuIEiKqXj6E+BccDrYB5jEM/Bnin4Brge/Ilneia/avpLOJAiJsRfu057icnBUSa7U3MUjEXT48hLon894jd/98x2a/5D0z4tonuT9oH/+RJeWdRh4dATNr5QhjzHIt4EOwd4qY8Cqx2h9gpAY2kNcCL4G5hRAuA5HlAQPR8teQjxCECkZChdsVPL0kqW3/FC0rQgfP03f14C12Kg9jEnTGCBo9gPLwQsgb3mYDq8DZ4Ky/nsndoF0i3SUrtI5bxG34ni/xMpZg2oYwFkHgJVgC8hLRuloLfgC+EA1lmUfVbqDzwPZMgryEnEtznV7jUkdGcA5U8Gl4FWQhzxGJ3J6ay/5yrbIRtmah4h7+UAXQkzqwgAOORHcA7LKVjpYBU6qi21l6YHN8yPbxUFWkS/mlaW7jRPDAE6YAVaDd0BaeZOGN4IzgK4YdVrgYBr4DBAn4iatyCfyjS4gmJTJAKSPgAvBZpBWXqbhClDbk+wyOR02FtzoH9CVQFylFflIviriatowtbu9DaKPBxtBWnmehl8FehbDJIABcQW+Ap4DaUU+Oz5gOKuShgHI3QPoP/5OkEZGafQl0PnDqDT8q424A18EoyCNyHfaI+2RVgdrN4QBCD0Y3ALSiK7/nwf2HNK1bUrBgLgES0DauRX58uAUQ1uTQQYgcgHQYVFS0bX5ZcD+Ww2SmtNvcQuWAnGdVOTTBTmp0r1uIE/kax7ibZBEdPVEE2F28l1S2MC1TubXAHGfRHTIJR/bP7EkvoKwWeC3IKn8kQadm8NIwm2RdeFecyn3JnUa9eVrvdTCxMcARC0ESe+f2kabvwM2g+sjuOBy+QB8GcgnSUQ+X1iwes3uHoLOAW8lYZW668Ghzba8fdrLJ+CnIInI93okwWSQAYi5DCQ5hn2d+rqN3aTGDOCjC8B2ECqKgctqbFK5qkGGZsWvCWUvqvcgS71MwaQBDOCrj4I/Rb4LXSgmuj37DgG6nv4foYxF9X7E0mbBG5AY/Sris31BUl+rfjfnryLCbmIZKtpNn99Puq03jwF8uAQkOeRSjOzbPEszaIzBBwLdmxMq2j1/JMOQ1rRGDODLD4MHQp1PPcXKgTUyoThVZCi4H4TKrVS0RzqLc0klPcun4DehQUA9xUy7kwQDdRyaZM/xE+rrDR8mLWQA3+4FfgxCRbHTzsMtDNMJeZJzju9Tv9tXMVqYFIMmycfgeyBUFEPtOnHHIJGgq0+hcuUgkfa73QwQGFeEBgf1FEvt+eeJMaHzHLp57aJ2h4JZF8cAvteTh4qBENF7uZovWKoZ8hB5g0qfbr7FZkEWBoiBTwHFQog0e8YdC3VvVcjtI7oHR+/JNTEGphALp4KQe/IUW828dwvFFwUaSTWbALS8mMwAMbEEhP5zXTi5dc1/YZie5wi9Zf3rNTfH1KuIAWJoOQgRxVoznidBUT0JGPqw07UVcW/DNoQBYuk7IEQUc/V/MhElV4ZYQ50bQHsu1TUk4JqmpmIErAMhsrLW9mHBAhDyDPmvqafvdZgYA14GFCvgZuATXSJe4O2wigooplfzPO+zgHK9t9VuV6/CSQ0eUzED/hf4RDFYr1cKoZDOO/SuI5/oOeUjG+wnU71CBoidI0DIs+6Kxfqcj6DMChAiZ1fIrw3dAgYIsrNCAo06K2phLoroXbk69vPJqloobEo0ngEC7TpfsFGumKz2XcAooCsMugXZJ3pflX1NtvGhWQ8DiKW9Qcj7txSb1V0pZXDdXOaT16hQ1ldl6+FB06JwBhRTQLHlk2refINWM0DI9zk+VzhbNkAnGSD+PuvLjihGy/+IDwOvDlBubSc9Z0aXxgAxuCYgDleXppAGQqF5wHcj2UvUsa+eluqZ7g2mGAOKNZcoVk8shR0Gmgo02eeT80pRyAbpPAME4hJfMFKumC3+3c0McmmAMndSp7qrB50PmW4RoFgDijmfXFooM4yu3dmrHi30oMuxhSpinRsDAwwo5oDvISvFbnGH/XR+FfDJdwd0t5/GQCkMEJght8YXc8cvg+tFX1s82fEc5e8rhQ0bxBgYYCCK0Wc9MaoYzv9FhHQa8nSX3Ws14DT7WS4DxOliT4KoeHmuWtHhPuBF9eyQjbkOap0ZAykZIEbvcsSpivSIbn63PtHZ36hXj5ya0h5rZgzkygBx+klPrKr4klwGpSM9zfWUenTIvbkMZp0YAzkxQKz65uoU09mfaqUTfULLJ2fmZJd1YwzkwgABe4YvaCm/INNgdKBZ80c9Az1EeX2e3spksTVuCwOKSaBP9blEsZ1+dp3Gp7l6j8rObQupZke7GCA+9WZPn5yW2mp6Xu/p/QnK2/Uq+tRsWcO6MaDYBIpRl6xPpTc97g/ecPVM2cWpOrdGxkBJDBCjyzwxrBjfP7E6NFrq6Xgr5Xsn7tgaGAMlMqAYBb47QJbGqeQ6ufadW/xsZGRkR1zHtt0YqAMDUYz+zKOLL9YnNyfj5gLfA1EnTW5lv4yBejJALM8HLlGsHz5M+7g9iL654Hqe43Ey024tGcaobasdA8Tq3Sj1uEMxxfoXhpW7EmRY/d62db0VWxoDDWHAF7NhH+JhV5N6d9QQokzNDjJAXKc6bRi2B/Hdsn4Xu6wnOsixmdxgBojZUdTf4DFh8WD5sAQ5ZbDSwO/rB37bzw4zwH9mPYb9cfCXDaDBd5i1yGkDRuoTBq6rVzsoTz6p4hzVCpvIAHHwHvBvA/Hye34fXld70G06UAzHiWL/oFj9KfQ9jXVHbGMr6AwDxIm+1fE7MEweYeN76koGuimJXTLpMGuPAUPcu5gpU24bqG8/O8YAkaWPH/0SnBxj+gfZHnZFKKaDgjff7ul/Ug5YgnjYsuIJBgKSo1f5hN5KDZe+f/KTEmSX/hg/27Xfoex1MG1XA1vpFAP43nVYNRg6K+tKjmIYbB9UeOD37J7+/XuQhb2NMcsNXCp7M6bMNreYAYLHd1jVb/1b/Ph5/4Y6rUcxfJdHp1250J8gw3ctEz35jt0matpaaxhImByyewVBeH/NCUh+mAURTw3sZgZ/zqu50aZezgwoOUDc1arB+NDvb+asQiHdoae+TuCSpyYNTM2DXLUp2wamTmpkP1rNAP5uZXLIaYrlKKZZxMrEfAhVTomt9m7Bza2OBjNuEgO4PGlyfGNSBw34gY03e2J+/I6S3jnIcR6bHvSUW3FLGFByYIprnmPQ0m9xznHV4MYG/PbF9HhOhCbIIw0w2FTMyEDK5KjtJV0PHb6YnthpQMwfPLubuFlTjw5W3BQGlBygdSfkcfxj68nAJX/Y1ZZavo/iHLKrsq20jgH8nzQ5vtV0ErD5EFd2KCfGbWRFtyu7ZFvTyTD94xnA8Z1Ljh4b2O7bMRygS14nuLKDsv/pdWjLdjGAbzubHPKkYtsT+yfoJH2ux+2+kxlPcyuuIwNKDvRKcrXqaq5W/UMdbcmgky+25ypBDvMM4OvE09yK68ZAiuTQpdy2JYfc4ovtw5QgvhPwR+vmYNMnPQMpk6Opl3J9RPli+xAlyAxPL5s85VbcEAZSJIcOq9qaHPKaL7ZnhCTIlob439R0MJAyOdp4WNXPki+2xxNkZn+LIeubh2yzTQ1iwJIj1lm+2J6pS10PAZdk/45brH5WUDQDOLbTl3Jd/MKNvr/pkoeUIM84amx3DWBl9WYAvyZNjm/W26L8tYMj1+O3zyhBNjkSZGv+KlmPZTCQIjkaf/tIGl7hSd+5iZNNSpBX4krZ/kKaQa1NtQzgt6R7jk4mh7ykGHfE/yuqoLeVxMnkRw+r9buNHsAAjrTkCOCpVwW+XI+av64E2RmXHWx/rNeRLevPAP6y5EjoJsW4I/53WoIkJLSu1S050nkmJEHsECsdt7VpZcmR3hVw5z3Ecp2kv5h+aGtZBgOWHNlYhr8XQZyMn6TbZd5sHFfWGq/aOUdG9uHQe5n36bj0YbtNFGZ0QFHNLTnyYVYx7oj/p3WS3rpbTbBpDvgYaOXHfrAr6Z6jczPkIekDj0G3mmygokt8z4uE6FJKHYw4AtzRZ8zbrF8LavtBl6TEYIslR1LSYurD5aHAJRu0B7nRVYOyY2L6r9Vm9NQnwR6NseU2tu9bK4VTKIMNSZOjszPkIfTC5zEx8dLbfKOeB/HeEx8yWA3qnIcOR8XosZDtN2F1Y5ME3ZM+Q97Wx2RjXJxqs+9hwS0hCTIr1dDlNzreM2RjkyRFcrT9SUCPq4OLfbG9WQnim+vQN+eaID47ZEPjkiRlcrT9ScC84tEX25uUIE96RjvaU16X4v9CkZ0ByjQmSSw5AryZrYovtp/USXprXhyHLVeAUKn1iTtG2Al5tuD3toZj74vjlCCtevUo9vwzCJVaJgnKW3J4wzt7BXje5gmUA8ZHoZLvHaWNmQuRQdjT2CRBd0uO7LHv7QGew15eHQVU6z5/0MQkseTwxnVuFeD6ZOCSSZ8/+IGrJmXLctOsxI7QuzF7EnS1PUe5sbHME/M/kDq6iiXxfbbXd7b/bi81+8tbAf8elf4lUK3Krm4pOdAxyYuk/6ml78oNdFUu1XwxPZETOKjVH/HEvtruSZQc4HcgVOz2kRzyA7KDPuI5PhSVW/8ZaGysXZKgU9LkuDqH2Oh8F/A+FfiuYB00iSgauB49pHjsryY1aOAPbKhNkqBL0uSwPUdOMQf384BLntxtKGr/0NWCsst3a9TADdhReZKgQ9LksD1HjrEG/74J5fET9ElD0ugc4JJbJjVo8A+MrCxJGNuSo+LYwQe3ugKdsnN2U5GNsz2N9GjitN0aNnQDtpSeJIxpyVFxvCiGgetNPhSP/cVQNSmIe+BIjSR/PbRhQzdiT2lJwliWHDWIE8UwcEn8Z9lo9e+ulpRdVQMbc1UBmwpPEsaw5MjVa+k7wxf/CFyyKrZ3Wi12taTs97GNG1yAXYUlCX1bctQoNvBH/zsL+LmbLI5Vl6qaD3lntyYTG3awOj22gwYXYFfuSUKflhw1ign8sT9QDMeJYn/y/Meg/lS4L651tH3pYJu2/Ma+3JKEviw5ahYY+GRpFMNxi/u8KtNSr8lxyZ3eThpcAcMzJwl9WHLUMAbwy52uwKbsWq/aVJrv6US7obnejhpcAftSJwltLTlq6Hv8cjhwnT5QPDY/SHUqur6ZoI7a/O3scY6wMXGS0MaSIyjCyq+kmAUuCf8WDr3k11n5XOQ2IjwkTZIkd+Xa7SO5ecrfEb7M758+nc0F+eyO/LrXukbCJKF6kFhylOh1PHKSxyuK9WSnDTTwndDET6iUaHwZQ8FFkj2JxxdjlhxlOK1vDByyyuOUO/qqh63Soe+SmL6rsHdYb82vha15JIklR8mhoBgFrm+AUDyWfOqCRtPBG2rtkItLtrfS4eAhS5JYclTgPXx2sSN+VaQYTzf5TcP16sEhT1C2ZwV2VzYk9qZJEkuOCjym2ASKUZesT60avZ7m6jkq2/3e+dQjNqMhdidJEkuOityKn84NiN/TUqtH53p213cL/IPU6b0dJfVYTWuIzSFJYslRkWMVk+Ah4BLFdrbYpYMLXCNEZWdWxEOlw2L71Q5uvlGpch0fHL+c5fBNr+iCzDTRk77j5nuhwz2ZB2poB3BzMtBn7J4Bz4FbwKKGmtMatfHBvcAlium9cjGYji5xjRSVfTKXwawTYyAjA8TjqQHxeknGYSaaM9g+wPXBdemzcaKFrRkD1TFALN6tgHTIC5Ttk6uGdLjcMWCvKP5prFy1sc6MgeEMEIhn94LRsVw+vHWGrQy2H9jiGFRFz4L9MgxjTY2B1AwQe+8DOg90iWK4mBil45WukaOy76S20BoaAxkYIP6+GxCfxT2qweD6GpXvYztvUeeYDHZaU2MgMQPE3LFAsecSxe67X41KPEJgAwa41KVBVKY3R4wEdmnVjIFMDCjWgC61++TSTAOFNEYDza7f49OE8iUh/VkdYyArA8TaeQHxqJidmnWsoPYMdCJ4x6PUJsqL3Z0FaWuV2syAYgy85IlFxeq8UnlgwNUepVS8plSlbLDOMUCMrQ2Iw9WlE4NSM8DmAOU+W7pyNmAnGCD2PhcQf4rRGZUQwsAXBij4GnWOqkRBG7S1DCimgGLLJxdWRgKa6erBRp+GlOvGsc48nluZQzoyMLGkW5/+CHyi2Kz2aioKHA92+jSl/LqO+M/MLJgBYmlVQLwpJo8vWJWw7lFkRYDCqnJWWI9WyxgYzgAxFHKvlWLtyuE9VLAVZfT0lp6D8Im+LHpEBSrakC1ggNg5EoScdygWsz0pmDdfKHQweB74RBM27817fOuv3QwoZoDvISjFnmLw4FqygWILwNvAJ7+iQj5Pc9WSCVMqTwYUK+DXvqCiXOcdC/IcO/e+UDDkjl/Zug5Ue4Uhd+utw7wZUIyAG0CIFHenbl6GYYXOR34bYg117Nb4vIhvaT/EyLWBsaSYq9d5R5xPUHQW0GONIfK1uH5se7cZIHi+HhJA1FGszWoUWyi8EPjuz6fK+E2Pdudvo7xbvLLExfkKjgBRjC0sXqMCRkDxc4Dvrl9xICNPLUAF67KBDBALp0cxwcIpiq1mv9kTAy5zmjhR+Aarn2qgP03lHBkgBj4NFAshclmOQ1fXFZZeE2ItdXSZLvvb7qoz1UbOwAC+vyiKARZeuSbDUPVqiqm6VPcjr8kTFa6olwWmTdEM4PorJ9zvXVMstWuKAIP2BDd5TZ+o8D1W20VC0VHWwP7lY/D9Cbd71xRD7fzkBobtC0Juj++x9GNWbMa9gYEfojK+nQZ+0nN2wFKxs29I342tg4EHgvsDyOhV+Q0rxbzoq7EsNl9x+RTc2nNywFIxc2DzLQ+wQIaCJHuSB6j/4YCurUoDGMCXHwF/AqGiWOlGcvT8h8E63EpyTrKd+jah2COwoUt8qFf0yJehohhp92FVnC8xXCfuSa5uidQfgm4SFkdkA7bjM92untTXqt/OE/JQn0GArmKEzpNQdVy0e/5o6BhWr1oG8NUxQJ/qSyKKCbuK2XMdZGjGPeS2lB7J2k2f32tvy3oygI/05pvXe04LWCoG2jFDnrdLIEb3bum+rCTyUyofkrcu1l82BvDJoWB9EkdSV75v9r1V2Wjzt4agRSD0Vnmqjouedf9bUM67V/1mdLaGfAC+DEKeHafaLpHPF3aWuCSGQ5SeJwl96GoXw6zomeX5ScayuvkxAPcngZD3VVFtksjXzXqeIz/a0vUEYXoycSUIecadartEx7BrQDWvm0xnbqNbwfVMsBYkOYek+rhv5eNmPAlYRy9Bnl4E8TxIKnon61Jg5BfkWHELlgF91iypyKcLClKtW91CpF4pFPLerWFOepiNS0C3r6fnGDLiMuJU3KYR+bKer+bJkadSu4JQ/bdaAXaCNDJKoy8Ce0dwSs+JO/AlMArSiHwnH9pePaUPvM0gV+8C1r05aUVfQf0KsJfXedl+t4K4Al8FaQ51aTYu8lk93pUbaHdjq0G0Zt81AaXzjLTyMg31kI6dzMdEAtzo5Fsciau0Ih/JVzYrHsNzYZshfQZYDZJePaHJLnmTtRvBZ8C0wpRtSMdwoMOoM4A4ETdpRT6Rb+wfUNW+xwnzQMiHRanmlK2UrgKdm0uRzZHt4iCryBcnVh0XNn4fAzhEM7j6RPWrIA95jE50jf7IvmFatSrbIhtlax4i7uUDu6OhrpGCc/TV06tAmmvzNBsqo2zVRNjnwQfqartPL+ke2SBbRkFeIq71z8S+auxzQl3KcdZ+YDlIel8XTbzyEDWuA2eCmXWxeVAP6RbpKF3TzlnQNFbErThu7SPRrb+ygPP2IXAuAsvBnMEgyuH3GH08Ah6OlrvWR0ZGtubQv7cLbNSJ8NED+FD0uwgfP03f/wrWYOOfWbZWiiCvlmQRRHo7im6lvhyU9dXdzYylhBEeBy+DLUDbtXwN7IjwJktBoqtpgiY1hfcDJYH2VloeBHRu1EuKsvZijzHmt8E6EuMtlq2XziRIz5Mkik4gPwHOBacD7WFM4hnQHuIX4HpwM4nxdnzV9pV0LkH6XUiy7M9vfVhUyfIx0Gk+sL8nOmy8Cygp/pOkeLVX0LWlBUTkcZJlLqs6BBNae2k3MjduocPAdeAGkuKJuEpd2m4JMsTbJMt8Np8NTgF6OURbedKe4gFwG1hPUmxkadLHQFsd32ditlWSRSfEC8GiCGWd4GdTPL61TrSVEMLtJIUuHJjEMGAJEkNM3GYSZjZl/QkzJ65uTbbrkmx/QjxbE70aoYYlSEY3RXuY4+imh2NZ1znM9IxdJ22+jQY6h7gf3NeD7SFgIoNYgmQgz9WUxNFtF4eBudHyEJaawxB68xmage6f89C6RPMhmh/pzY38H+v98ydafxE8CUa1JBFeYWmSMwP/D9ulVgFLdbgRAAAAAElFTkSuQmCC";
  var loading = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA6AN+QRH69xUI7Z7x2sWzcWYvphvj4MxiXVIiGAuH08K9ibepmI+Oc2tKHQ+helY5NykfkF5N9AAABmhJREFUeNrdnWlT4kAQhjt3CARIwg1yH3Lpqv3/f9tabsYJMUGCsM6b56NVVjGV6WP6pLvTijTb8bS2X29U581BaBEmLY9T1LrVpukSGhFn06n2W4SExvn4q2ecL6PxeSbrPwRBxN/iG0NSHyHs55kGB1KdVqTxBTjLnU6qo1csdx+ag8CIujXOxe+pf5QEIzPYNDo5OnlbITD2/WObM9AeHwiOYbDMEB/PgHRiwo3GaWpbKFkR6LvI4RTdF4Lk0JtyihXk/Xrnbe2kRKVHoLjjlImphwSKZXicxH4iVB4eNU6ywPHy01SME1nRTIJluOAEtgFpU/4xaHOC2YhgeRjbJble9Dplid0nXHSDEzQJGFNjyZyAGc1YUgVWXqfXqwH3dsy7XnVUf/iD1oQ/mUCfxKonvgn07ao0EnKCLPGkVxO6i6AZl8SeEDVLYuNPToLsd53cLhvZF35HSrwG/D55R5daeAathKkiLaNB0FiTsohJS/sUE9wo0QcmCxaEjcEC3BjkB/rsU0xg48L/GH2KSZ2wkWICm3VIi4kH/V4k0qccsyJsXm2OAc0zfnWEu9g+Fz20OWZL2Aw4pgYu77QoiRtMQ0eoYMC6lWxj8kjYVDThz0PHHt95LIvievBEpRq4LSGjLL6jJepWfPRP8umo7AgbV9iSJYGzFvXC6lc+n+eNYwICR7ywpgROj2MQOgTOcXBK4gNTJEwJgbPjGJBOmlx04QOvCZyNKIkgcEKOAc8yyEa0ZwJnWZKgIwVlUcBDjsHqMc2gXY5yCKJjOaqGiPoiBkHg7EtjSUQ/I3gJAVGjHGVcRJuySLswiV0CxxQ5HwJnxDHoySsSoVPwkg6iLv9jQOBEZdG/Rjkqm4mCshgSkXRvEDhmSeq3KCzLa1c48u2PASxaBPvodUXGPR6J46GexBLVHMKiRIRJRWTgSBOfBhNd1M+SqKwDzVfLg4i8D2h5irxaHrZDL4Vdww6oSPUroo57gkQaRB/7iSVdlDp2iEs6jQ3st6J046vYJR3yYTXHrh+QT90mQztbMvgwwA46ynBQiB10lAE6i2MgW2CTIdMasiFJBrG7yPo3mVYQhmRDgCQTPU3kEFcy9WYip3iTyVCXcR350/R0B7cOIlkwIKX9SHDIEo7ksdoEx2lRTQu2Ejhd5uSjmsR04dkKtYMhXQr4zKBh03RxpsuYkZSv5bITTHfrawHzWtwtqEh2Rkn5H8jOq6wifx8xApHVdmEAdl5lNsIMARstZWtSVufVjGDIbhYLOOaNQMhp3zs4aN0xeQ2VS/F3kMyVbHHNU8pjgiC36Vj3oWZ0nGkD70HN6DjTmK93gGZ0nB2VsAWa0SGHV2DP6Pjmpz7CSIkc8HL+4jmKh1O+HbljgIxBlEOQ8pUzQtL9+7FUUnG1FVbBlwwK07sAjsr8ktFtLxxjv5KiXDhMb8UxU0UDKpeON7Q8xY3JxQMne8wqp6sLjACtqzxEu8hQ1tBWd4h2sTG5T+oO0S44uHihqpgUHSXtyiHaSpX+Fx/ubdoqLmG5Zty6oeASlqsG4Osz5ZawXLmSYKSptoSl8JIIKSZKOcLXr+3oK7WEJblIBXmdzM9+y5xVuV0/XTZ0VGNlXHL90/FKjafCyrhbLOSq1H9/ZdxtVqRZyZVxLSqKQkvrrPoPdpAqtUYweUO50Ipb1RY76sffWXGbXrV51G8SECt+vVRcftrkotdL1XW0fZsl01f6BoUXBJ98ZXv8QLmovrL5RO64PaAc1F+irRs2J1gMKQuIteYn14sdI0etAyyadxecRHtMiQrQ6v8nm5N4hkU3xTI8TmI/0Z0I63xCbezSzXDHNT6hHtL96Hl8grN+o5vwtnb4BK9Hd8VacYpZ70A/5NCbcYqVRffmpcspnGin09Xou8jhFN0X+g/o2xqn0TbhlWK30ThNbavT3ZHqJY22DIYFTV+wFKcoqAzvpPAl7WN/Txex7x/bLMk1T/ensu1wJp3GJjBHlMvIDDaNvP/dVuj/o/d8zqXWjYxgYIZ716roesVy96E5CIyoW+Nc/J5Ov4O+Wzp8I5zlTqdf5BBM+QZMAwXaC4aGzz/CN5SpdPuznvCVTNaKLatwn1c+F8RfPatZwd7qVzt8IZ1qX6nk9xdcs1kVOjZPM1ebpppf4itWOGjOq42639Y8x7YdT2v79UZ13hyEFt2Fv6Loy9OZgJFyAAAAAElFTkSuQmCC";
  var statusImg = {
    error: error,
    success: success,
    loading: loading
  };

  var AtToast =
  /** @class */
  function (_super) {
    __extends(AtToast, _super);

    function AtToast(props) {
      var _this = _super.call(this, props) || this;

      _this.handleClick = function (event) {
        var _a = _this.props,
            onClick = _a.onClick,
            status = _a.status;

        if (status === 'loading') {
          return;
        }

        if (onClick) {
          return onClick(event);
        }

        _this.close();
      };

      var isOpened = props.isOpened,
          duration = props.duration;

      if (isOpened) {
        _this.makeTimer(duration || 0);
      }

      _this._timer = null;
      _this.state = {
        _isOpened: isOpened
      };
      return _this;
    }

    AtToast.prototype.clearTimmer = function () {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    };

    AtToast.prototype.makeTimer = function (duration) {
      var _this = this;

      if (duration === 0) {
        return;
      }

      this._timer = setTimeout(function () {
        _this.close();
      }, +duration);
    };

    AtToast.prototype.close = function () {
      var _isOpened = this.state._isOpened;

      if (_isOpened) {
        this.setState({
          _isOpened: false
        }, this.handleClose // TODO: Fix dirty hack
        );
        this.clearTimmer();
      }
    };

    AtToast.prototype.handleClose = function (event) {
      // TODO: Fix dirty hack
      if (typeof this.props.onClose === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.props.onClose(event);
      }
    };

    AtToast.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      var isOpened = nextProps.isOpened,
          duration = nextProps.duration;

      if (!isOpened) {
        this.close();
        return;
      }

      if (!this.state._isOpened) {
        this.setState({
          _isOpened: true
        });
      } else {
        this.clearTimmer();
      }

      this.makeTimer(duration || 0);
    };

    AtToast.prototype.render = function () {
      var _a, _b;

      var _isOpened = this.state._isOpened;
      var _c = this.props,
          customStyle = _c.customStyle,
          text = _c.text,
          icon = _c.icon,
          status = _c.status,
          image = _c.image,
          hasMask = _c.hasMask;
      /* eslint-disable @typescript-eslint/no-non-null-assertion */

      var realImg = image || statusImg[status] || null;
      var isRenderIcon = !!(icon && !(image || statusImg[status]));
      /* eslint-enable @typescript-eslint/no-non-null-assertion */

      var bodyClass = classnames('toast-body', (_a = {
        'at-toast__body--custom-image': image,
        'toast-body--text': !realImg && !icon
      }, _a["at-toast__body--" + status] = !!status, _a));
      var iconClass = classnames('at-icon', (_b = {}, _b["at-icon-" + icon] = icon, _b));
      return _isOpened ? React__default.createElement(components.View, {
        className: classnames('at-toast', this.props.className)
      }, hasMask && React__default.createElement(components.View, {
        className: 'at-toast__overlay'
      }), React__default.createElement(components.View, {
        className: bodyClass,
        style: customStyle,
        onClick: this.handleClick
      }, React__default.createElement(components.View, {
        className: 'toast-body-content'
      }, realImg ? React__default.createElement(components.View, {
        className: 'toast-body-content__img'
      }, React__default.createElement(components.Image, {
        className: 'toast-body-content__img-item',
        src: realImg,
        mode: 'scaleToFill'
      })) : null, isRenderIcon && React__default.createElement(components.View, {
        className: 'toast-body-content__icon'
      }, React__default.createElement(components.Text, {
        className: iconClass
      })), text && React__default.createElement(components.View, {
        className: 'toast-body-content__info'
      }, React__default.createElement(components.Text, null, text))))) : null;
    };

    return AtToast;
  }(React__default.Component);

  AtToast.defaultProps = {
    duration: 3000,
    isOpened: false
  };
  AtToast.propTypes = {
    text: propTypes.string,
    icon: propTypes.string,
    hasMask: propTypes.bool,
    image: propTypes.string,
    isOpened: propTypes.bool,
    duration: propTypes.number,
    status: propTypes.oneOf(['', 'error', 'loading', 'success']),
    onClick: propTypes.func,
    onClose: propTypes.func
  };

  var AtAccordion =
  /** @class */
  function (_super) {
    __extends(AtAccordion, _super);

    function AtAccordion(props) {
      var _this = _super.call(this, props) || this;

      _this.handleClick = function (event) {
        var open = _this.props.open;
        if (!_this.isCompleted) return;
        _this.props.onClick && _this.props.onClick(!open, event);
      };

      _this.isCompleted = true;
      _this.startOpen = false;
      _this.state = {
        wrapperHeight: 0
      };
      return _this;
    }

    AtAccordion.prototype.toggleWithAnimation = function () {
      var _this = this;

      var _a = this.props,
          open = _a.open,
          isAnimation = _a.isAnimation;
      if (!this.isCompleted || !isAnimation) return;
      this.isCompleted = false;
      delayQuerySelector('.at-accordion__body', 0).then(function (rect) {
        var height = parseInt(rect[0].height.toString());
        var startHeight = open ? height : 0;
        var endHeight = open ? 0 : height;
        _this.startOpen = false;

        _this.setState({
          wrapperHeight: startHeight
        }, function () {
          setTimeout(function () {
            _this.setState({
              wrapperHeight: endHeight
            }, function () {
              setTimeout(function () {
                _this.isCompleted = true;

                _this.setState({});
              }, 700);
            });
          }, 100);
        });
      });
    };

    AtAccordion.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      if (nextProps.open !== this.props.open) {
        this.startOpen = !!nextProps.open && !!nextProps.isAnimation;
        this.toggleWithAnimation();
      }
    };

    AtAccordion.prototype.render = function () {
      var _a;

      var _b = this.props,
          customStyle = _b.customStyle,
          className = _b.className,
          title = _b.title,
          icon = _b.icon,
          hasBorder = _b.hasBorder,
          open = _b.open,
          note = _b.note;
      var wrapperHeight = this.state.wrapperHeight;
      var rootCls = classnames('at-accordion', className);
      var prefixClass = icon && icon.prefixClass || 'at-icon';
      var iconCls = classnames((_a = {}, _a[prefixClass] = true, _a[prefixClass + "-" + (icon && icon.value)] = icon && icon.value, _a['at-accordion__icon'] = true, _a));
      var headerCls = classnames('at-accordion__header', {
        'at-accordion__header--noborder': !hasBorder
      });
      var arrowCls = classnames('at-accordion__arrow', {
        'at-accordion__arrow--folded': !!open
      });
      var contentCls = classnames('at-accordion__content', {
        'at-accordion__content--inactive': !open && this.isCompleted || this.startOpen
      });
      var iconStyle = {
        color: icon && icon.color || '',
        fontSize: icon && icon.size + "px" || ''
      };
      var contentStyle = {
        height: wrapperHeight + "px"
      };

      if (this.isCompleted) {
        contentStyle.height = '';
      }

      return React__default.createElement(components.View, {
        className: rootCls,
        style: customStyle
      }, React__default.createElement(components.View, {
        className: headerCls,
        onClick: this.handleClick
      }, icon && icon.value && React__default.createElement(components.Text, {
        className: iconCls,
        style: iconStyle
      }), React__default.createElement(components.View, {
        className: 'at-accordion__info'
      }, React__default.createElement(components.View, {
        className: 'at-accordion__info__title'
      }, title), React__default.createElement(components.View, {
        className: 'at-accordion__info__note'
      }, note)), React__default.createElement(components.View, {
        className: arrowCls
      }, React__default.createElement(components.Text, {
        className: 'at-icon at-icon-chevron-down'
      }))), React__default.createElement(components.View, {
        style: contentStyle,
        className: contentCls
      }, React__default.createElement(components.View, {
        className: 'at-accordion__body'
      }, this.props.children)));
    };

    return AtAccordion;
  }(React__default.Component);

  AtAccordion.defaultProps = {
    open: false,
    customStyle: '',
    className: '',
    title: '',
    note: '',
    icon: {
      value: ''
    },
    hasBorder: true,
    isAnimation: true
  };
  AtAccordion.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    open: propTypes.bool,
    isAnimation: propTypes.bool,
    title: propTypes.string,
    note: propTypes.string,
    icon: propTypes.object,
    hasBorder: propTypes.bool,
    onClick: propTypes.func
  };

  var AtSlider =
  /** @class */
  function (_super) {
    __extends(AtSlider, _super);

    function AtSlider(props) {
      var _this = _super.call(this, props) || this;

      var _a = props.value,
          value = _a === void 0 ? 0 : _a,
          _b = props.min,
          min = _b === void 0 ? 0 : _b,
          _c = props.max,
          max = _c === void 0 ? 100 : _c;
      _this.state = {
        _value: AtSlider.clampNumber(value, min, max)
      };
      return _this;
    }

    AtSlider.clampNumber = function (value, lower, upper) {
      return Math.max(lower, Math.min(upper, value));
    };

    AtSlider.prototype.handleChanging = function (e) {
      var _value = this.state._value;
      var value = e.detail.value;

      if (value !== _value) {
        this.setState({
          _value: value
        });
      }

      this.props.onChanging && this.props.onChanging(value);
    };

    AtSlider.prototype.handleChange = function (e) {
      var value = e.detail.value;
      this.setState({
        _value: value
      });
      this.props.onChange && this.props.onChange(value);
    };

    AtSlider.prototype.UNSAFE_componentWillReceiveProps = function (props) {
      var _a = props.value,
          value = _a === void 0 ? 0 : _a,
          _b = props.min,
          min = _b === void 0 ? 0 : _b,
          _c = props.max,
          max = _c === void 0 ? 100 : _c;
      this.setState({
        _value: AtSlider.clampNumber(value, min, max)
      });
    };

    AtSlider.prototype.render = function () {
      var _value = this.state._value;
      var _a = this.props,
          customStyle = _a.customStyle,
          className = _a.className,
          min = _a.min,
          max = _a.max,
          step = _a.step,
          disabled = _a.disabled,
          activeColor = _a.activeColor,
          backgroundColor = _a.backgroundColor,
          blockSize = _a.blockSize,
          blockColor = _a.blockColor,
          showValue = _a.showValue;
      return React__default.createElement(components.View, {
        className: classnames({
          'at-slider': true,
          'at-slider--disabled': disabled
        }, className),
        style: customStyle
      }, React__default.createElement(components.View, {
        className: 'at-slider__inner'
      }, React__default.createElement(components.Slider, {
        min: min,
        max: max,
        step: step,
        value: _value,
        disabled: disabled,
        activeColor: activeColor,
        backgroundColor: backgroundColor,
        blockSize: blockSize,
        blockColor: blockColor,
        onChanging: this.handleChanging.bind(this),
        onChange: this.handleChange.bind(this)
      })), showValue && React__default.createElement(components.View, {
        className: 'at-slider__text'
      }, "" + _value));
    };

    return AtSlider;
  }(React__default.Component);

  AtSlider.defaultProps = {
    customStyle: '',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    value: 0,
    disabled: false,
    activeColor: '#6190e8',
    backgroundColor: '#e9e9e9',
    blockSize: 28,
    blockColor: '#ffffff',
    showValue: false
  };
  AtSlider.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    min: propTypes.number,
    max: propTypes.number,
    step: propTypes.number,
    value: propTypes.number,
    disabled: propTypes.bool,
    activeColor: propTypes.string,
    backgroundColor: propTypes.string,
    blockSize: propTypes.number,
    blockColor: propTypes.string,
    showValue: propTypes.bool,
    onChange: propTypes.func,
    onChanging: propTypes.func
  };
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeMax$1 = Math.max,
      nativeMin = Math.min;
  /**
   * The base implementation of `_.inRange` which doesn't coerce arguments.
   *
   * @private
   * @param {number} number The number to check.
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
   */

  function baseInRange(number, start, end) {
    return number >= nativeMin(start, end) && number < nativeMax$1(start, end);
  }

  var _baseInRange = baseInRange;
  /**
   * Checks if `n` is between `start` and up to, but not including, `end`. If
   * `end` is not specified, it's set to `start` with `start` then set to `0`.
   * If `start` is greater than `end` the params are swapped to support
   * negative ranges.
   *
   * @static
   * @memberOf _
   * @since 3.3.0
   * @category Number
   * @param {number} number The number to check.
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
   * @see _.range, _.rangeRight
   * @example
   *
   * _.inRange(3, 2, 4);
   * // => true
   *
   * _.inRange(4, 8);
   * // => true
   *
   * _.inRange(4, 2);
   * // => false
   *
   * _.inRange(2, 2);
   * // => false
   *
   * _.inRange(1.2, 2);
   * // => true
   *
   * _.inRange(5.2, 4);
   * // => false
   *
   * _.inRange(-3, -2, -6);
   * // => true
   */

  function inRange(number, start, end) {
    start = toFinite_1(start);

    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite_1(end);
    }

    number = toNumber_1(number);
    return _baseInRange(number, start, end);
  }

  var inRange_1 = inRange;
  /** Used for built-in method references. */

  var objectProto$2 = Object.prototype;
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */

  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$2;
    return value === proto;
  }

  var _isPrototype = isPrototype;
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */

  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeKeys = _overArg(Object.keys, Object);

  var _nativeKeys = nativeKeys;
  /** Used for built-in method references. */

  var objectProto$3 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeys(object) {
    if (!_isPrototype(object)) {
      return _nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }

  var _baseKeys = baseKeys;
  /** Used to detect overreaching core-js shims. */

  var coreJsData = _root['__core-js_shared__'];
  var _coreJsData = coreJsData;
  /** Used to detect methods masquerading as native. */

  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();
  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */


  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  var _isMasked = isMasked;
  /** Used for built-in method references. */

  var funcProto = Function.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString = funcProto.toString;
  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */

  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}

      try {
        return func + '';
      } catch (e) {}
    }

    return '';
  }

  var _toSource = toSource;
  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  /** Used to detect host constructors (Safari). */

  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  /** Used for built-in method references. */

  var funcProto$1 = Function.prototype,
      objectProto$4 = Object.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString$1 = funcProto$1.toString;
  /** Used to check objects for own properties. */

  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  /** Used to detect if a method is native. */

  var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */

  function baseIsNative(value) {
    if (!isObject_1(value) || _isMasked(value)) {
      return false;
    }

    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;
  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */

  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;
  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */

  function getNative(object, key) {
    var value = _getValue(object, key);

    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;
  /* Built-in method references that are verified to be native. */

  var DataView = _getNative(_root, 'DataView');

  var _DataView = DataView;
  /* Built-in method references that are verified to be native. */

  var Map = _getNative(_root, 'Map');

  var _Map = Map;
  /* Built-in method references that are verified to be native. */

  var Promise$1 = _getNative(_root, 'Promise');

  var _Promise = Promise$1;
  /* Built-in method references that are verified to be native. */

  var Set$1 = _getNative(_root, 'Set');

  var _Set = Set$1;
  /* Built-in method references that are verified to be native. */

  var WeakMap = _getNative(_root, 'WeakMap');

  var _WeakMap = WeakMap;
  /** `Object#toString` result references. */

  var mapTag = '[object Map]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      setTag = '[object Set]',
      weakMapTag = '[object WeakMap]';
  var dataViewTag = '[object DataView]';
  /** Used to detect maps, sets, and weakmaps. */

  var dataViewCtorString = _toSource(_DataView),
      mapCtorString = _toSource(_Map),
      promiseCtorString = _toSource(_Promise),
      setCtorString = _toSource(_Set),
      weakMapCtorString = _toSource(_WeakMap);
  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */


  var getTag = _baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

  if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag || _Map && getTag(new _Map()) != mapTag || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag || _WeakMap && getTag(new _WeakMap()) != weakMapTag) {
    getTag = function getTag(value) {
      var result = _baseGetTag(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? _toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;

          case mapCtorString:
            return mapTag;

          case promiseCtorString:
            return promiseTag;

          case setCtorString:
            return setTag;

          case weakMapCtorString:
            return weakMapTag;
        }
      }

      return result;
    };
  }

  var _getTag = getTag;
  /** `Object#toString` result references. */

  var argsTag = '[object Arguments]';
  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */

  function baseIsArguments(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments;
  /** Used for built-in method references. */

  var objectProto$5 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
  /** Built-in value references. */

  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */

  var isArguments = _baseIsArguments(function () {
    return arguments;
  }()) ? _baseIsArguments : function (value) {
    return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  };
  var isArguments_1 = isArguments;
  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;
  var isBuffer_1 = createCommonjsModule(function (module, exports) {
    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Built-in value references. */

    var Buffer = moduleExports ? _root.Buffer : undefined;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */

    var isBuffer = nativeIsBuffer || stubFalse_1;
    module.exports = isBuffer;
  });
  /** `Object#toString` result references. */

  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag$1 = '[object Map]',
      numberTag = '[object Number]',
      objectTag$1 = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag$1 = '[object Set]',
      stringTag = '[object String]',
      weakMapTag$1 = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  /** Used to identify `toStringTag` values of typed arrays. */

  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */

  function baseIsTypedArray(value) {
    return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;
  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */

  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var _nodeUtil = createCommonjsModule(function (module, exports) {
    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Detect free variable `process` from Node.js. */

    var freeProcess = moduleExports && _freeGlobal.process;
    /** Used to access faster Node.js helpers. */

    var nodeUtil = function () {
      try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;

        if (types) {
          return types;
        } // Legacy `process.binding('util')` for Node.js < 10.


        return freeProcess && freeProcess.binding && freeProcess.binding('util');
      } catch (e) {}
    }();

    module.exports = nodeUtil;
  });
  /* Node.js helper references. */


  var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */

  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
  var isTypedArray_1 = isTypedArray;
  /** `Object#toString` result references. */

  var mapTag$2 = '[object Map]',
      setTag$2 = '[object Set]';
  /** Used for built-in method references. */

  var objectProto$6 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  /**
   * Checks if `value` is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
   * jQuery-like collections are considered empty if they have a `length` of `0`.
   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */

  function isEmpty(value) {
    if (value == null) {
      return true;
    }

    if (isArrayLike_1(value) && (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
      return !value.length;
    }

    var tag = _getTag(value);

    if (tag == mapTag$2 || tag == setTag$2) {
      return !value.size;
    }

    if (_isPrototype(value)) {
      return !_baseKeys(value).length;
    }

    for (var key in value) {
      if (hasOwnProperty$5.call(value, key)) {
        return false;
      }
    }

    return true;
  }

  var isEmpty_1 = isEmpty;

  var AtSwipeActionOptions =
  /** @class */
  function (_super) {
    __extends(AtSwipeActionOptions, _super);

    function AtSwipeActionOptions() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtSwipeActionOptions.prototype.trrigerOptionsDomUpadte = function () {
      var _this = this;

      delayQuerySelector("#swipeActionOptions-" + this.props.componentId, 100).then(function (res) {
        _this.props.onQueryedDom(res[0]);
      });
    };

    AtSwipeActionOptions.prototype.componentDidMount = function () {
      this.trrigerOptionsDomUpadte();
    };

    AtSwipeActionOptions.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      if (nextProps.options !== this.props.options) {
        this.trrigerOptionsDomUpadte();
      }
    };

    AtSwipeActionOptions.prototype.render = function () {
      var rootClass = classnames('at-swipe-action__options', this.props.className);
      return React__default.createElement(components.View, {
        id: "swipeActionOptions-" + this.props.componentId,
        className: rootClass
      }, this.props.children);
    };

    return AtSwipeActionOptions;
  }(React__default.Component);

  var AtSwipeAction =
  /** @class */
  function (_super) {
    __extends(AtSwipeAction, _super);

    function AtSwipeAction(props) {
      var _this = _super.call(this, props) || this;

      _this.computeTransform = function (value) {
        // if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
        //   return !_isNil(value) ? `translate3d(${value}px,0,0)` : null
        // }
        return value ? "translate3d(" + value + "px,0,0)" : null;
      };

      _this.handleOpened = function (event) {
        var onOpened = _this.props.onOpened;

        if (typeof onOpened === 'function' && _this.state._isOpened) {
          onOpened(event);
        }
      };

      _this.handleClosed = function (event) {
        var onClosed = _this.props.onClosed;

        if (typeof onClosed === 'function' && !_this.state._isOpened) {
          onClosed(event);
        }
      };

      _this.handleTouchStart = function (e) {
        var _a = e.touches[0],
            clientX = _a.clientX,
            clientY = _a.clientY;
        if (_this.props.disabled) return;

        _this.getDomInfo();

        _this.startX = clientX;
        _this.startY = clientY;
        _this.isTouching = true;
      };

      _this.handleTouchMove = function (e) {
        if (isEmpty_1(_this.domInfo)) {
          return;
        }

        var _a = _this,
            startX = _a.startX,
            startY = _a.startY;
        var _b = _this.domInfo,
            top = _b.top,
            bottom = _b.bottom,
            left = _b.left,
            right = _b.right;
        var _c = e.touches[0],
            clientX = _c.clientX,
            clientY = _c.clientY,
            pageX = _c.pageX,
            pageY = _c.pageY;
        var x = Math.abs(clientX - startX);
        var y = Math.abs(clientY - startY);
        var inDom = inRange_1(pageX, left, right) && inRange_1(pageY, top, bottom);

        if (!_this.isMoving && inDom) {
          _this.isMoving = y === 0 || x / y >= Number.parseFloat(Math.tan(45 * Math.PI / 180).toFixed(2));
        }

        if (_this.isTouching && _this.isMoving) {
          e.preventDefault();
          var offsetSize = clientX - _this.startX;
          var isRight = offsetSize > 0;
          if (_this.state.offsetSize === 0 && isRight) return;
          var value = _this.endValue + offsetSize;

          _this.setState({
            offsetSize: value >= 0 ? 0 : value
          });
        }
      };

      _this.handleTouchEnd = function (event) {
        _this.isTouching = false;
        var offsetSize = _this.state.offsetSize;
        _this.endValue = offsetSize;
        var breakpoint = _this.maxOffsetSize / 2;
        var absOffsetSize = Math.abs(offsetSize);

        if (absOffsetSize > breakpoint) {
          _this._reset(true);

          _this.handleOpened(event);

          return;
        }

        _this._reset(false); // TODO: Check behavior


        _this.handleClosed(event);
      };

      _this.handleDomInfo = function (_a) {
        var width = _a.width;
        var _isOpened = _this.state._isOpened;
        _this.maxOffsetSize = width;

        _this._reset(_isOpened);
      };

      _this.handleClick = function (item, index, event) {
        var _a = _this.props,
            onClick = _a.onClick,
            autoClose = _a.autoClose;

        if (typeof onClick === 'function') {
          onClick(item, index, event);
        }

        if (autoClose) {
          _this._reset(false); // TODO: Check behavior


          _this.handleClosed(event);
        }
      };

      var isOpened = props.isOpened;
      _this.endValue = 0;
      _this.startX = 0;
      _this.startY = 0;
      _this.maxOffsetSize = 0;
      _this.domInfo = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      };
      _this.isMoving = false;
      _this.isTouching = false;
      _this.state = {
        componentId: uuid(),
        offsetSize: 0,
        _isOpened: !!isOpened
      };
      return _this;
    }

    AtSwipeAction.prototype.getDomInfo = function () {
      var _this = this;

      return Promise.all([delayGetClientRect({
        delayTime: 0,
        selectorStr: "#swipeAction-" + this.state.componentId
      }), delayGetScrollOffset({
        delayTime: 0
      })]).then(function (_a) {
        var _b = __read(_a, 2),
            rect = _b[0],
            scrollOffset = _b[1];

        rect[0].top += scrollOffset[0].scrollTop;
        rect[0].bottom += scrollOffset[0].scrollTop;
        _this.domInfo = rect[0];
      });
    };

    AtSwipeAction.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      var isOpened = nextProps.isOpened;
      var _isOpened = this.state._isOpened;

      if (isOpened !== _isOpened) {
        this._reset(!!isOpened); // TODO: Check behavior

      }
    };

    AtSwipeAction.prototype._reset = function (isOpened) {
      this.isMoving = false;
      this.isTouching = false;

      if (isOpened) {
        this.endValue = -this.maxOffsetSize;
        this.setState({
          _isOpened: true,
          offsetSize: -this.maxOffsetSize
        });
      } else {
        this.endValue = 0;
        this.setState({
          offsetSize: 0,
          _isOpened: false
        });
      }
    };

    AtSwipeAction.prototype.render = function () {
      var _this = this;

      var _a = this.state,
          offsetSize = _a.offsetSize,
          componentId = _a.componentId;
      var options = this.props.options;
      var rootClass = classnames('at-swipe-action', this.props.className);
      var transform = this.computeTransform(offsetSize);
      var transformStyle = transform ? {
        transform: transform
      } : {};
      return React__default.createElement(components.View, {
        id: "swipeAction-" + componentId,
        className: rootClass,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        onTouchStart: this.handleTouchStart
      }, React__default.createElement(components.View, {
        className: classnames('at-swipe-action__content', {
          animtion: !this.isTouching
        }),
        style: transformStyle
      }, this.props.children), Array.isArray(options) && options.length > 0 ? React__default.createElement(AtSwipeActionOptions, {
        options: options,
        componentId: componentId,
        onQueryedDom: this.handleDomInfo
      }, options.map(function (item, key) {
        return React__default.createElement(components.View, {
          key: item.text + "-" + key,
          style: item.style,
          onClick: function onClick(e) {
            return _this.handleClick(item, key, e);
          },
          className: classnames('at-swipe-action__option', item.className)
        }, React__default.createElement(components.Text, {
          className: 'option__text'
        }, item.text));
      })) : null);
    };

    return AtSwipeAction;
  }(React__default.Component);

  AtSwipeAction.defaultProps = {
    options: [],
    isOpened: false,
    disabled: false,
    autoClose: false
  };
  AtSwipeAction.propTypes = {
    isOpened: propTypes.bool,
    disabled: propTypes.bool,
    autoClose: propTypes.bool,
    options: propTypes.arrayOf(propTypes.shape({
      text: propTypes.string,
      style: propTypes.oneOfType([propTypes.object, propTypes.string]),
      className: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.array])
    })),
    onClick: propTypes.func,
    onOpened: propTypes.func,
    onClosed: propTypes.func
  };

  var AtSearchBar =
  /** @class */
  function (_super) {
    __extends(AtSearchBar, _super);

    function AtSearchBar(props) {
      var _this = _super.call(this, props) || this;

      _this.handleFocus = function (event) {
        _this.setState({
          isFocus: true
        });

        _this.props.onFocus && _this.props.onFocus(event);
      };

      _this.handleBlur = function (event) {
        _this.setState({
          isFocus: false
        });

        _this.props.onBlur && _this.props.onBlur(event);
      };

      _this.handleChange = function (e) {
        _this.props.onChange(e.target.value, e);
      };

      _this.handleClear = function (event) {
        if (_this.props.onClear) {
          _this.props.onClear(event);
        } else {
          _this.props.onChange('', event);
        }
      };

      _this.handleConfirm = function (event) {
        _this.props.onConfirm && _this.props.onConfirm(event);
      };

      _this.handleActionClick = function (event) {
        _this.props.onActionClick && _this.props.onActionClick(event);
      };

      _this.state = {
        isFocus: !!props.focus
      };
      return _this;
    }

    AtSearchBar.prototype.render = function () {
      var _a = this.props,
          value = _a.value,
          placeholder = _a.placeholder,
          maxLength = _a.maxLength,
          fixed = _a.fixed,
          disabled = _a.disabled,
          showActionButton = _a.showActionButton,
          _b = _a.actionName,
          actionName = _b === void 0 ? '搜索' : _b,
          inputType = _a.inputType,
          // 处理issue#464
      className = _a.className,
          customStyle = _a.customStyle;
      var isFocus = this.state.isFocus;
      var fontSize = 14;
      var rootCls = classnames('at-search-bar', {
        'at-search-bar--fixed': fixed
      }, className);
      var placeholderWrapStyle = {};
      var actionStyle = {};

      if (isFocus || !isFocus && value) {
        actionStyle.opacity = 1;
        actionStyle.marginRight = "0";
        placeholderWrapStyle.flexGrow = 0;
      } else if (!isFocus && !value) {
        placeholderWrapStyle.flexGrow = 1;
        actionStyle.opacity = 0;
        actionStyle.marginRight = "-" + ((actionName.length + 1) * fontSize + fontSize / 2 + 10) + "px";
      }

      if (showActionButton) {
        actionStyle.opacity = 1;
        actionStyle.marginRight = "0";
      }

      var clearIconStyle = {
        display: 'flex'
      };
      var placeholderStyle = {
        visibility: 'hidden'
      };

      if (!value.length) {
        clearIconStyle.display = 'none';
        placeholderStyle.visibility = 'visible';
      }

      return React__default.createElement(components.View, {
        className: rootCls,
        style: customStyle
      }, React__default.createElement(components.View, {
        className: 'at-search-bar__input-cnt'
      }, React__default.createElement(components.View, {
        className: 'at-search-bar__placeholder-wrap',
        style: placeholderWrapStyle
      }, React__default.createElement(components.Text, {
        className: 'at-icon at-icon-search'
      }), React__default.createElement(components.Text, {
        className: 'at-search-bar__placeholder',
        style: placeholderStyle
      }, isFocus ? '' : placeholder)), React__default.createElement(components.Input, {
        className: 'at-search-bar__input',
        type: inputType,
        confirmType: 'search',
        value: value,
        focus: isFocus,
        disabled: disabled,
        maxlength: maxLength,
        onInput: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onConfirm: this.handleConfirm
      }), React__default.createElement(components.View, {
        className: 'at-search-bar__clear',
        style: clearIconStyle,
        onTouchStart: this.handleClear
      }, React__default.createElement(components.Text, {
        className: 'at-icon at-icon-close-circle'
      }))), React__default.createElement(components.View, {
        className: 'at-search-bar__action',
        style: actionStyle,
        onClick: this.handleActionClick
      }, actionName));
    };

    return AtSearchBar;
  }(React__default.Component);

  AtSearchBar.defaultProps = {
    value: '',
    placeholder: '搜索',
    maxLength: 140,
    fixed: false,
    focus: false,
    disabled: false,
    showActionButton: false,
    actionName: '搜索',
    inputType: 'text',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function onChange() {}
  };
  AtSearchBar.propTypes = {
    value: propTypes.string,
    placeholder: propTypes.string,
    maxLength: propTypes.number,
    fixed: propTypes.bool,
    focus: propTypes.bool,
    disabled: propTypes.bool,
    showActionButton: propTypes.bool,
    actionName: propTypes.string,
    inputType: propTypes.oneOf(['text', 'number', 'idcard', 'digit']),
    onChange: propTypes.func,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    onConfirm: propTypes.func,
    onActionClick: propTypes.func,
    onClear: propTypes.func
  };

  var AtLoadMore =
  /** @class */
  function (_super) {
    __extends(AtLoadMore, _super);

    function AtLoadMore() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtLoadMore.prototype.onClick = function () {
      this.props.onClick && this.props.onClick(arguments);
    };

    AtLoadMore.prototype.render = function () {
      var _a = this.props,
          className = _a.className,
          customStyle = _a.customStyle,
          loadingText = _a.loadingText,
          moreText = _a.moreText,
          status = _a.status,
          moreBtnStyle = _a.moreBtnStyle,
          noMoreTextStyle = _a.noMoreTextStyle,
          noMoreText = _a.noMoreText;
      var component = null;

      if (status === 'loading') {
        component = React__default.createElement(AtActivityIndicator, {
          mode: 'center',
          content: loadingText
        });
      } else if (status === 'more') {
        component = React__default.createElement(components.View, {
          className: 'at-load-more__cnt'
        }, React__default.createElement(AtButton, {
          full: true,
          onClick: this.onClick.bind(this),
          customStyle: moreBtnStyle
        }, moreText));
      } else {
        component = React__default.createElement(components.Text, {
          className: 'at-load-more__tip',
          style: noMoreTextStyle
        }, noMoreText);
      }

      return React__default.createElement(components.View, {
        className: classnames('at-load-more', className),
        style: customStyle
      }, component);
    };

    return AtLoadMore;
  }(React__default.Component);

  AtLoadMore.defaultProps = {
    customStyle: '',
    className: '',
    noMoreTextStyle: '',
    moreBtnStyle: '',
    status: 'more',
    loadingText: '加载中',
    moreText: '查看更多',
    noMoreText: '没有更多'
  };
  AtLoadMore.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    noMoreTextStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    moreBtnStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    status: propTypes.oneOf(['more', 'loading', 'noMore']),
    loadingText: propTypes.string,
    moreText: propTypes.string,
    noMoreText: propTypes.string,
    onClick: propTypes.func
  };

  var AtDivider =
  /** @class */
  function (_super) {
    __extends(AtDivider, _super);

    function AtDivider() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtDivider.prototype.render = function () {
      var _a = this.props,
          className = _a.className,
          customStyle = _a.customStyle,
          content = _a.content,
          height = _a.height,
          fontColor = _a.fontColor,
          fontSize = _a.fontSize,
          lineColor = _a.lineColor;
      var rootStyle = {
        height: height ? "" + pxTransform(Number(height)) : ''
      };
      var fontStyle = {
        color: fontColor,
        'font-size': fontSize ? "" + pxTransform(Number(fontSize)) : ''
      };
      var lineStyle = {
        backgroundColor: lineColor
      };
      return React__default.createElement(components.View, {
        className: classnames('at-divider', className),
        style: mergeStyle(rootStyle, customStyle)
      }, React__default.createElement(components.View, {
        className: 'at-divider__content',
        style: fontStyle
      }, content === '' ? this.props.children : content), React__default.createElement(components.View, {
        className: 'at-divider__line',
        style: lineStyle
      }));
    };

    return AtDivider;
  }(React__default.Component);

  AtDivider.defaultProps = {
    content: '',
    height: 0,
    fontColor: '',
    fontSize: 0,
    lineColor: ''
  };
  AtDivider.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    content: propTypes.string,
    height: propTypes.oneOfType([propTypes.number, propTypes.string]),
    fontColor: propTypes.string,
    fontSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
    lineColor: propTypes.string
  };

  var AtCountdownItem =
  /** @class */
  function (_super) {
    __extends(AtCountdownItem, _super);

    function AtCountdownItem() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtCountdownItem.prototype.formatNum = function (num) {
      return num <= 9 ? "0" + num : "" + num;
    };

    AtCountdownItem.prototype.render = function () {
      var _a = this.props,
          num = _a.num,
          separator = _a.separator;
      return React__default.createElement(components.View, {
        className: 'at-countdown__item'
      }, React__default.createElement(components.View, {
        className: 'at-countdown__time-box'
      }, React__default.createElement(components.Text, {
        className: 'at-countdown__time'
      }, this.formatNum(num))), React__default.createElement(components.Text, {
        className: 'at-countdown__separator'
      }, separator));
    };

    return AtCountdownItem;
  }(React__default.Component);

  AtCountdownItem.defaultProps = {
    num: 0,
    separator: ':'
  };
  AtCountdownItem.propTypes = {
    num: propTypes.number.isRequired,
    separator: propTypes.string
  };

  var toSeconds = function toSeconds(day, hours, minutes, seconds) {
    return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
  };

  var AtCountdown =
  /** @class */
  function (_super) {
    __extends(AtCountdown, _super);

    function AtCountdown(props) {
      var _this = _super.call(this, props) || this;

      var _a = _this.props,
          _b = _a.day,
          day = _b === void 0 ? 0 : _b,
          _c = _a.hours,
          hours = _c === void 0 ? 0 : _c,
          _d = _a.minutes,
          minutes = _d === void 0 ? 0 : _d,
          _e = _a.seconds,
          seconds = _e === void 0 ? 0 : _e;
      _this.seconds = toSeconds(day, hours, minutes, seconds);

      var _f = _this.calculateTime(),
          _day = _f.day,
          _hours = _f.hours,
          _minutes = _f.minutes,
          _seconds = _f.seconds;

      _this.state = {
        _day: _day,
        _hours: _hours,
        _minutes: _minutes,
        _seconds: _seconds
      };
      return _this;
    }

    AtCountdown.prototype.setTimer = function () {
      if (!this.timer) this.countdonwn();
    };

    AtCountdown.prototype.clearTimer = function () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    };

    AtCountdown.prototype.calculateTime = function () {
      var _a = __read([0, 0, 0, 0], 4),
          day = _a[0],
          hours = _a[1],
          minutes = _a[2],
          seconds = _a[3];

      if (this.seconds > 0) {
        day = this.props.isShowDay ? Math.floor(this.seconds / (60 * 60 * 24)) : 0;
        hours = Math.floor(this.seconds / (60 * 60)) - day * 24;
        minutes = Math.floor(this.seconds / 60) - day * 24 * 60 - hours * 60;
        seconds = Math.floor(this.seconds) - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
      }

      return {
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    };

    AtCountdown.prototype.countdonwn = function () {
      var _this = this;

      var _a = this.calculateTime(),
          day = _a.day,
          hours = _a.hours,
          minutes = _a.minutes,
          seconds = _a.seconds;

      this.setState({
        _day: day,
        _hours: hours,
        _minutes: minutes,
        _seconds: seconds
      });
      this.seconds--;

      if (this.seconds < 0) {
        this.clearTimer();
        this.props.onTimeUp && this.props.onTimeUp();
        return;
      }

      this.timer = setTimeout(function () {
        _this.countdonwn();
      }, 1000);
    };

    AtCountdown.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      if (JSON.stringify(this.props) === JSON.stringify(nextProps)) return;
      var day = nextProps.day,
          hours = nextProps.hours,
          minutes = nextProps.minutes,
          seconds = nextProps.seconds;
      this.seconds = toSeconds(day, hours, minutes, seconds);
      this.clearTimer();
      this.setTimer();
    };

    AtCountdown.prototype.componentDidMount = function () {
      this.setTimer();
    };

    AtCountdown.prototype.componentWillUnmount = function () {
      this.clearTimer();
    };

    AtCountdown.prototype.componentDidHide = function () {
      this.clearTimer();
    };

    AtCountdown.prototype.componentDidShow = function () {
      this.setTimer();
    };

    AtCountdown.prototype.render = function () {
      var _a = this.props,
          className = _a.className,
          customStyle = _a.customStyle,
          format = _a.format,
          isShowDay = _a.isShowDay,
          isCard = _a.isCard,
          isShowHour = _a.isShowHour;
      var _b = this.state,
          _day = _b._day,
          _hours = _b._hours,
          _minutes = _b._minutes,
          _seconds = _b._seconds;
      return React__default.createElement(components.View, {
        className: classnames({
          'at-countdown': true,
          'at-countdown--card': isCard
        }, className),
        style: customStyle
      }, isShowDay && React__default.createElement(AtCountdownItem, {
        num: _day,
        separator: format.day
      }), isShowHour && React__default.createElement(AtCountdownItem, {
        num: _hours,
        separator: format.hours
      }), React__default.createElement(AtCountdownItem, {
        num: _minutes,
        separator: format.minutes
      }), React__default.createElement(AtCountdownItem, {
        num: _seconds,
        separator: format.seconds
      }));
    };

    return AtCountdown;
  }(React__default.Component);

  AtCountdown.defaultProps = {
    customStyle: '',
    className: '',
    isCard: false,
    isShowDay: false,
    isShowHour: true,
    format: {
      day: '天',
      hours: '时',
      minutes: '分',
      seconds: '秒'
    },
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  AtCountdown.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    isCard: propTypes.bool,
    isShowDay: propTypes.bool,
    isShowHour: propTypes.bool,
    format: propTypes.object,
    day: propTypes.number,
    hours: propTypes.number,
    minutes: propTypes.number,
    seconds: propTypes.number,
    onTimeUp: propTypes.func
  };

  var AtSteps =
  /** @class */
  function (_super) {
    __extends(AtSteps, _super);

    function AtSteps() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtSteps.prototype.handleClick = function (current, event) {
      this.props.onChange(current, event);
    };

    AtSteps.prototype.render = function () {
      var _this = this;

      var _a = this.props,
          customStyle = _a.customStyle,
          className = _a.className,
          items = _a.items,
          current = _a.current;
      return React__default.createElement(components.View, {
        className: classnames('at-steps', className),
        style: customStyle
      }, !!items && items.map(function (item, i) {
        var _a;

        return React__default.createElement(components.View, {
          key: item.title,
          className: classnames({
            'at-steps__item': true,
            'at-steps__item--active': i === current,
            'at-steps__item--inactive': i !== current
          }),
          onClick: _this.handleClick.bind(_this, i)
        }, React__default.createElement(components.View, {
          className: 'at-steps__circular-wrap'
        }, i !== 0 && React__default.createElement(components.View, {
          className: 'at-steps__left-line'
        }), item.status ? React__default.createElement(components.View, {
          className: classnames({
            'at-icon': true,
            'at-icon-check-circle': item.status === 'success',
            'at-icon-close-circle': item.status === 'error',
            'at-steps__single-icon': true,
            'at-steps__single-icon--success': item.status === 'success',
            'at-steps__single-icon--error': item.status === 'error'
          })
        }) : React__default.createElement(components.View, {
          className: 'at-steps__circular'
        }, item.icon ? React__default.createElement(components.Text, {
          className: classnames('at-icon', (_a = {}, _a["at-icon-" + item.icon.value] = item.icon.value, _a['at-steps__circle-icon'] = true, _a))
        }) : React__default.createElement(components.Text, {
          className: 'at-steps__num'
        }, i + 1)), i !== items.length - 1 && React__default.createElement(components.View, {
          className: 'at-steps__right-line'
        })), React__default.createElement(components.View, {
          className: 'at-steps__title'
        }, item.title), React__default.createElement(components.View, {
          className: 'at-steps__desc'
        }, item.desc));
      }));
    };

    return AtSteps;
  }(React__default.Component);

  AtSteps.defaultProps = {
    customStyle: '',
    className: '',
    current: 0,
    items: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function onChange() {}
  };
  AtSteps.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    current: propTypes.number,
    items: propTypes.array,
    onChange: propTypes.func
  };

  var AtCurtain =
  /** @class */
  function (_super) {
    __extends(AtCurtain, _super);

    function AtCurtain() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtCurtain.prototype.onClose = function (e) {
      e.stopPropagation();
      this.props.onClose(e);
    };

    AtCurtain.prototype._stopPropagation = function (e) {
      e.stopPropagation();
    };

    AtCurtain.prototype.render = function () {
      var _a;

      var _b = this.props,
          className = _b.className,
          customStyle = _b.customStyle,
          isOpened = _b.isOpened,
          closeBtnPosition = _b.closeBtnPosition;
      var curtainClass = classnames({
        'at-curtain': true,
        'at-curtain--closed': !isOpened
      }, className);
      var btnCloseClass = classnames((_a = {
        'at-curtain__btn-close': true
      }, _a["at-curtain__btn-close--" + closeBtnPosition] = closeBtnPosition, _a));
      return React__default.createElement(components.View, {
        className: curtainClass,
        style: customStyle,
        onClick: this._stopPropagation
      }, React__default.createElement(components.View, {
        className: 'at-curtain__container'
      }, React__default.createElement(components.View, {
        className: 'at-curtain__body'
      }, this.props.children, React__default.createElement(components.View, {
        className: btnCloseClass,
        onClick: this.onClose.bind(this)
      }))));
    };

    return AtCurtain;
  }(React__default.Component);

  AtCurtain.defaultProps = {
    customStyle: '',
    className: '',
    isOpened: false,
    closeBtnPosition: 'bottom',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClose: function onClose() {}
  };
  AtCurtain.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    isOpened: propTypes.bool,
    closeBtnPosition: propTypes.string,
    onClose: propTypes.func
  };

  var AtMessage =
  /** @class */
  function (_super) {
    __extends(AtMessage, _super);

    function AtMessage(props) {
      var _this = _super.call(this, props) || this;

      _this.state = {
        _isOpened: false,
        _message: '',
        _type: 'info',
        _duration: 3000
      };
      _this._timer = null;
      return _this;
    }

    AtMessage.prototype.bindMessageListener = function () {
      var _this = this;

      Taro.eventCenter.on('atMessage', function (options) {
        if (options === void 0) {
          options = {};
        }

        var message = options.message,
            type = options.type,
            duration = options.duration;
        var newState = {
          _isOpened: true,
          _message: message,
          _type: type,
          _duration: duration || _this.state._duration
        };

        _this.setState(newState, function () {
          clearTimeout(_this._timer);
          _this._timer = setTimeout(function () {
            _this.setState({
              _isOpened: false
            });
          }, _this.state._duration);
        });
      }); // 绑定函数

      Taro.atMessage = Taro.eventCenter.trigger.bind(Taro.eventCenter, 'atMessage');
    };

    AtMessage.prototype.componentDidShow = function () {
      this.bindMessageListener();
    };

    AtMessage.prototype.componentDidMount = function () {
      this.bindMessageListener();
    };

    AtMessage.prototype.componentDidHide = function () {
      Taro.eventCenter.off('atMessage');
    };

    AtMessage.prototype.componentWillUnmount = function () {
      Taro.eventCenter.off('atMessage');
    };

    AtMessage.prototype.render = function () {
      var _a = this.props,
          className = _a.className,
          customStyle = _a.customStyle;
      var _b = this.state,
          _message = _b._message,
          _isOpened = _b._isOpened,
          _type = _b._type;
      var rootCls = classnames({
        'at-message': true,
        'at-message--show': _isOpened,
        'at-message--hidden': !_isOpened
      }, "at-message--" + _type, className);
      return React__default.createElement(components.View, {
        className: rootCls,
        style: customStyle
      }, _message);
    };

    return AtMessage;
  }(React__default.Component);

  AtMessage.defaultProps = {
    customStyle: '',
    className: ''
  };
  AtMessage.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string])
  }; // 生成 jsx 二维矩阵

  var generateMatrix = function generateMatrix(files, col, showAddBtn) {
    var matrix = [];
    var length = showAddBtn ? files.length + 1 : files.length;
    var row = Math.ceil(length / col);

    for (var i = 0; i < row; i++) {
      if (i === row - 1) {
        // 最后一行数据加上添加按钮
        var lastArr = files.slice(i * col);

        if (lastArr.length < col) {
          if (showAddBtn) {
            lastArr.push({
              type: 'btn',
              uuid: uuid()
            });
          } // 填补剩下的空列


          for (var j = lastArr.length; j < col; j++) {
            lastArr.push({
              type: 'blank',
              uuid: uuid()
            });
          }
        }

        matrix.push(lastArr);
      } else {
        matrix.push(files.slice(i * col, (i + 1) * col));
      }
    }

    return matrix;
  };

  var ENV$3 = Taro.getEnv();

  var AtImagePicker =
  /** @class */
  function (_super) {
    __extends(AtImagePicker, _super);

    function AtImagePicker() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.chooseFile = function () {
        var _a = _this.props,
            _b = _a.files,
            files = _b === void 0 ? [] : _b,
            multiple = _a.multiple,
            count = _a.count,
            sizeType = _a.sizeType,
            sourceType = _a.sourceType;
        var filePathName = ENV$3 === Taro.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles'; // const count = multiple ? 99 : 1

        var params = {};

        if (multiple) {
          params.count = 99;
        }

        if (count) {
          params.count = count;
        }

        if (sizeType) {
          params.sizeType = sizeType;
        }

        if (sourceType) {
          params.sourceType = sourceType;
        }

        Taro.chooseImage(params).then(function (res) {
          var targetFiles = res.tempFilePaths.map(function (path, i) {
            return {
              url: path,
              file: res[filePathName][i]
            };
          });
          var newFiles = files.concat(targetFiles);

          _this.props.onChange(newFiles, 'add');
        }).catch(_this.props.onFail);
      };

      _this.handleImageClick = function (idx) {
        _this.props.onImageClick && _this.props.onImageClick(idx, _this.props.files[idx]);
      };

      _this.handleRemoveImg = function (idx) {
        var _a = _this.props.files,
            files = _a === void 0 ? [] : _a;

        if (ENV$3 === Taro.ENV_TYPE.WEB) {
          window.URL.revokeObjectURL(files[idx].url);
        }

        var newFiles = files.filter(function (_, i) {
          return i !== idx;
        });

        _this.props.onChange(newFiles, 'remove', idx);
      };

      return _this;
    }

    AtImagePicker.prototype.render = function () {
      var _this = this;

      var _a = this.props,
          className = _a.className,
          customStyle = _a.customStyle,
          files = _a.files,
          mode = _a.mode,
          _b = _a.length,
          length = _b === void 0 ? 4 : _b,
          _c = _a.showAddBtn,
          showAddBtn = _c === void 0 ? true : _c;
      var rowLength = length <= 0 ? 1 : length; // 行数

      var matrix = generateMatrix(files, rowLength, showAddBtn);
      var rootCls = classnames('at-image-picker', className);
      return React__default.createElement(components.View, {
        className: rootCls,
        style: customStyle
      }, matrix.map(function (row, i) {
        return React__default.createElement(components.View, {
          className: 'at-image-picker__flex-box',
          key: i + 1
        }, row.map(function (item, j) {
          return item.url ? React__default.createElement(components.View, {
            className: 'at-image-picker__flex-item',
            key: i * length + j
          }, React__default.createElement(components.View, {
            className: 'at-image-picker__item'
          }, React__default.createElement(components.View, {
            className: 'at-image-picker__remove-btn',
            onClick: _this.handleRemoveImg.bind(_this, i * length + j)
          }), React__default.createElement(components.Image, {
            className: 'at-image-picker__preview-img',
            mode: mode,
            src: item.url,
            onClick: _this.handleImageClick.bind(_this, i * length + j)
          }))) : React__default.createElement(components.View, {
            className: 'at-image-picker__flex-item',
            key: i * length + j
          }, item.type === 'btn' && React__default.createElement(components.View, {
            className: 'at-image-picker__item at-image-picker__choose-btn',
            onClick: _this.chooseFile
          }, React__default.createElement(components.View, {
            className: 'add-bar'
          }), React__default.createElement(components.View, {
            className: 'add-bar'
          })));
        }));
      }));
    };

    return AtImagePicker;
  }(React__default.Component);

  AtImagePicker.defaultProps = {
    className: '',
    customStyle: '',
    files: [],
    mode: 'aspectFill',
    showAddBtn: true,
    multiple: false,
    length: 4,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function onChange() {}
  };
  AtImagePicker.propTypes = {
    className: propTypes.oneOfType([propTypes.string, propTypes.array]),
    customStyle: propTypes.oneOfType([propTypes.string, propTypes.object]),
    files: propTypes.array,
    mode: propTypes.oneOf(['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'top', 'bottom', 'center', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']),
    showAddBtn: propTypes.bool,
    multiple: propTypes.bool,
    length: propTypes.number,
    onChange: propTypes.func,
    onImageClick: propTypes.func,
    onFail: propTypes.func,
    count: propTypes.number,
    sizeType: propTypes.array,
    sourceType: propTypes.array
  };

  var AtRange =
  /** @class */
  function (_super) {
    __extends(AtRange, _super);

    function AtRange(props) {
      var _this = _super.call(this, props) || this;

      _this.handleClick = function (event) {
        if (_this.currentSlider && !_this.props.disabled) {
          var sliderValue = 0;
          var detail = getEventDetail(event);
          sliderValue = detail.x - _this.left;

          _this.setSliderValue(_this.currentSlider, sliderValue, 'onChange');
        }
      };

      var _a = props.min,
          min = _a === void 0 ? 0 : _a,
          _b = props.max,
          max = _b === void 0 ? 100 : _b; // range 宽度

      _this.width = 0; // range 到屏幕左边的距离

      _this.left = 0;
      _this.deltaValue = max - min;
      _this.currentSlider = '';
      _this.state = {
        aX: 0,
        bX: 0
      };
      return _this;
    }

    AtRange.prototype.handleTouchMove = function (sliderName, event) {
      if (this.props.disabled) return;
      event.stopPropagation();
      var clientX = event.touches[0].clientX;
      this.setSliderValue(sliderName, clientX - this.left, 'onChange');
    };

    AtRange.prototype.handleTouchEnd = function (sliderName) {
      if (this.props.disabled) return;
      this.currentSlider = sliderName;
      this.triggerEvent('onAfterChange');
    };

    AtRange.prototype.setSliderValue = function (sliderName, targetValue, funcName) {
      var _a, _b;

      var _this = this;

      var distance = Math.min(Math.max(targetValue, 0), this.width);
      var sliderValue = Math.floor(distance / this.width * 100);

      if (funcName) {
        this.setState((_a = {}, _a[sliderName] = sliderValue, _a), function () {
          return _this.triggerEvent(funcName);
        });
      } else {
        this.setState((_b = {}, _b[sliderName] = sliderValue, _b));
      }
    };

    AtRange.prototype.setValue = function (value) {
      var _a = this.props.min,
          min = _a === void 0 ? 0 : _a;
      var aX = Math.round((value[0] - min) / this.deltaValue * 100); // fix issue #670

      var bX = Math.round((value[1] - min) / this.deltaValue * 100); // fix issue #670

      this.setState({
        aX: aX,
        bX: bX
      });
    };

    AtRange.prototype.triggerEvent = function (funcName) {
      var _a = this.props.min,
          min = _a === void 0 ? 0 : _a;
      var _b = this.state,
          aX = _b.aX,
          bX = _b.bX;
      var a = Math.round(aX / 100 * this.deltaValue) + min; // fix issue #670

      var b = Math.round(bX / 100 * this.deltaValue) + min; // fix issue #670

      var result = [a, b].sort(function (x, y) {
        return x - y;
      });

      if (funcName === 'onChange') {
        this.props.onChange && this.props.onChange(result);
      } else if (funcName === 'onAfterChange') {
        this.props.onAfterChange && this.props.onAfterChange(result);
      }
    };

    AtRange.prototype.updatePos = function () {
      var _this = this;

      delayQuerySelector('.at-range__container', 0).then(function (rect) {
        _this.width = Math.round(rect[0].width);
        _this.left = Math.round(rect[0].left);
      });
    };

    AtRange.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      var value = nextProps.value;
      this.updatePos();

      if (this.props.value[0] !== value[0] || this.props.value[1] !== value[1]) {
        this.setValue(value);
      }
    };

    AtRange.prototype.componentDidMount = function () {
      var value = this.props.value;
      this.updatePos();
      this.setValue(value);
    };

    AtRange.prototype.render = function () {
      var _a = this.props,
          className = _a.className,
          customStyle = _a.customStyle,
          sliderStyle = _a.sliderStyle,
          railStyle = _a.railStyle,
          trackStyle = _a.trackStyle,
          blockSize = _a.blockSize,
          disabled = _a.disabled;
      var rootCls = classnames('at-range', {
        'at-range--disabled': disabled
      }, className);
      var _b = this.state,
          aX = _b.aX,
          bX = _b.bX;
      var sliderCommonStyle = {
        width: blockSize ? blockSize + "PX" : '',
        height: blockSize ? blockSize + "PX" : '',
        marginLeft: blockSize ? -blockSize / 2 + "PX" : ''
      };

      var sliderAStyle = _assign(_assign({}, sliderCommonStyle), {
        left: aX + "%"
      });

      var sliderBStyle = _assign(_assign({}, sliderCommonStyle), {
        left: bX + "%"
      });

      var containerStyle = {
        height: blockSize ? blockSize + "PX" : ''
      };
      var smallerX = Math.min(aX, bX);
      var deltaX = Math.abs(aX - bX);
      var atTrackStyle = {
        left: smallerX + "%",
        width: deltaX + "%"
      };
      return React__default.createElement(components.View, {
        className: rootCls,
        style: customStyle,
        onClick: this.handleClick
      }, React__default.createElement(components.View, {
        className: 'at-range__container',
        style: containerStyle
      }, React__default.createElement(components.View, {
        className: 'at-range__rail',
        style: railStyle
      }), React__default.createElement(components.View, {
        className: 'at-range__track',
        style: mergeStyle(atTrackStyle, trackStyle)
      }), React__default.createElement(components.View, {
        className: 'at-range__slider',
        style: mergeStyle(sliderAStyle, sliderStyle),
        onTouchMove: this.handleTouchMove.bind(this, 'aX'),
        onTouchEnd: this.handleTouchEnd.bind(this, 'aX')
      }), React__default.createElement(components.View, {
        className: 'at-range__slider',
        style: mergeStyle(sliderBStyle, sliderStyle),
        onTouchMove: this.handleTouchMove.bind(this, 'bX'),
        onTouchEnd: this.handleTouchEnd.bind(this, 'bX')
      })));
    };

    return AtRange;
  }(React__default.Component);

  AtRange.defaultProps = {
    customStyle: '',
    className: '',
    sliderStyle: '',
    railStyle: '',
    trackStyle: '',
    value: [0, 0],
    min: 0,
    max: 100,
    disabled: false,
    blockSize: 0
  };
  AtRange.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    sliderStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    railStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    trackStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    value: propTypes.array,
    min: propTypes.number,
    max: propTypes.number,
    disabled: propTypes.bool,
    blockSize: propTypes.number,
    onChange: propTypes.func,
    onAfterChange: propTypes.func
  };
  var ENV$4 = Taro.getEnv();

  var AtIndexes =
  /** @class */
  function (_super) {
    __extends(AtIndexes, _super);

    function AtIndexes(props) {
      var _this = _super.call(this, props) || this;

      _this.handleClick = function (item) {
        _this.props.onClick && _this.props.onClick(item);
      };

      _this.handleTouchMove = function (event) {
        event.stopPropagation();
        event.preventDefault();
        var list = _this.props.list;
        var pageY = event.touches[0].pageY;
        var index = Math.floor((pageY - _this.startTop) / _this.itemHeight);

        if (index >= 0 && index <= list.length && _this.currentIndex !== index) {
          _this.currentIndex = index;
          var key = index > 0 ? list[index - 1].key : 'top';
          var touchView = "at-indexes__list-" + key;

          _this.jumpTarget(touchView, index);
        }
      };

      _this.handleTouchEnd = function () {
        _this.currentIndex = -1;
      };

      _this.state = {
        _scrollIntoView: '',
        _scrollTop: 0,
        _tipText: '',
        _isShowToast: false,
        isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB
      }; // 右侧导航高度

      _this.menuHeight = 0; // 右侧导航距离顶部高度

      _this.startTop = 0; // 右侧导航元素高度

      _this.itemHeight = 0; // 当前索引

      _this.currentIndex = -1;
      _this.listId = isTest() ? 'indexes-list-AOTU2018' : "list-" + uuid();
      return _this;
    }

    AtIndexes.prototype.jumpTarget = function (_scrollIntoView, idx) {
      var _this = this;

      var _a = this.props,
          _b = _a.topKey,
          topKey = _b === void 0 ? 'Top' : _b,
          list = _a.list;

      var _tipText = idx === 0 ? topKey : list[idx - 1].key;

      if (ENV$4 === Taro.ENV_TYPE.WEB) {
        delayQuerySelector('.at-indexes', 0).then(function (rect) {
          var targetOffsetTop = _this.listRef.childNodes[idx].offsetTop;

          var _scrollTop = targetOffsetTop - rect[0].top;

          _this.updateState({
            _scrollTop: _scrollTop,
            _scrollIntoView: _scrollIntoView,
            _tipText: _tipText
          });
        });
        return;
      }

      this.updateState({
        _scrollIntoView: _scrollIntoView,
        _tipText: _tipText
      });
    };

    AtIndexes.prototype.__jumpTarget = function (key) {
      var list = this.props.list; // const index = _findIndex(list, ['key', key])

      var index = list.findIndex(function (item) {
        return item.key === key;
      });
      var targetView = "at-indexes__list-" + key;
      this.jumpTarget(targetView, index + 1);
    };

    AtIndexes.prototype.updateState = function (state) {
      var _this = this;

      var _a = this.props,
          isShowToast = _a.isShowToast,
          isVibrate = _a.isVibrate;
      var _scrollIntoView = state._scrollIntoView,
          _tipText = state._tipText,
          _scrollTop = state._scrollTop; // TODO: Fix dirty hack

      /* eslint-disable @typescript-eslint/no-non-null-assertion */

      this.setState({
        _scrollIntoView: _scrollIntoView,
        _tipText: _tipText,
        _scrollTop: _scrollTop,
        _isShowToast: isShowToast
      },
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
      function () {
        clearTimeout(_this.timeoutTimer);
        _this.timeoutTimer = setTimeout(function () {
          _this.setState({
            _tipText: '',
            _isShowToast: false
          });
        }, 3000);
      });

      if (isVibrate) {
        Taro.vibrateShort();
      }
    };

    AtIndexes.prototype.initData = function () {
      var _this = this;

      delayQuerySelector('.at-indexes__menu').then(function (rect) {
        var len = _this.props.list.length;
        _this.menuHeight = rect[0].height;
        _this.startTop = rect[0].top;
        _this.itemHeight = Math.floor(_this.menuHeight / (len + 1));
      });
    };

    AtIndexes.prototype.handleScroll = function (e) {
      if (e && e.detail) {
        this.setState({
          _scrollTop: e.detail.scrollTop
        });
      }
    };

    AtIndexes.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      if (nextProps.list.length !== this.props.list.length) {
        this.initData();
      }
    };

    AtIndexes.prototype.componentDidMount = function () {
      if (ENV$4 === Taro.ENV_TYPE.WEB) {
        this.listRef = document.getElementById(this.listId);
      }

      this.initData();
    };

    AtIndexes.prototype.UNSAFE_componentWillMount = function () {
      this.props.onScrollIntoView && this.props.onScrollIntoView(this.__jumpTarget.bind(this));
    };

    AtIndexes.prototype.render = function () {
      var _this = this;

      var _a = this.props,
          className = _a.className,
          customStyle = _a.customStyle,
          animation = _a.animation,
          topKey = _a.topKey,
          list = _a.list;
      var _b = this.state,
          _scrollTop = _b._scrollTop,
          _scrollIntoView = _b._scrollIntoView,
          _tipText = _b._tipText,
          _isShowToast = _b._isShowToast,
          isWEB = _b.isWEB;
      var toastStyle = {
        minWidth: pxTransform(100)
      };
      var rootCls = classnames('at-indexes', className);
      var menuList = list.map(function (dataList, i) {
        var key = dataList.key;
        var targetView = "at-indexes__list-" + key;
        return React__default.createElement(components.View, {
          className: 'at-indexes__menu-item',
          key: key,
          onClick: _this.jumpTarget.bind(_this, targetView, i + 1)
        }, key);
      });
      var indexesList = list.map(function (dataList) {
        return React__default.createElement(components.View, {
          id: "at-indexes__list-" + dataList.key,
          className: 'at-indexes__list',
          key: dataList.key
        }, React__default.createElement(components.View, {
          className: 'at-indexes__list-title'
        }, dataList.title), React__default.createElement(AtList, null, dataList.items && dataList.items.map(function (item) {
          return React__default.createElement(AtListItem, {
            key: item.name,
            title: item.name,
            onClick: _this.handleClick.bind(_this, item)
          });
        })));
      });
      return React__default.createElement(components.View, {
        className: rootCls,
        style: customStyle
      }, React__default.createElement(AtToast, {
        customStyle: toastStyle,
        isOpened: _isShowToast,
        text: _tipText,
        duration: 2000
      }), React__default.createElement(components.View, {
        className: 'at-indexes__menu',
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd
      }, React__default.createElement(components.View, {
        className: 'at-indexes__menu-item',
        onClick: this.jumpTarget.bind(this, 'at-indexes__top', 0)
      }, topKey), menuList), React__default.createElement(components.ScrollView, {
        className: 'at-indexes__body',
        id: this.listId,
        scrollY: true,
        scrollWithAnimation: animation,
        // eslint-disable-next-line no-undefined
        scrollTop: isWEB ? _scrollTop : undefined,
        scrollIntoView: !isWEB ? _scrollIntoView : '',
        onScroll: this.handleScroll.bind(this)
      }, React__default.createElement(components.View, {
        className: 'at-indexes__content',
        id: 'at-indexes__top'
      }, this.props.children), indexesList));
    };

    return AtIndexes;
  }(React__default.Component);

  AtIndexes.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    animation: propTypes.bool,
    isVibrate: propTypes.bool,
    isShowToast: propTypes.bool,
    topKey: propTypes.string,
    list: propTypes.array,
    onClick: propTypes.func,
    onScrollIntoView: propTypes.func
  };
  AtIndexes.defaultProps = {
    customStyle: '',
    className: '',
    animation: false,
    topKey: 'Top',
    isVibrate: true,
    isShowToast: true,
    list: []
  };
  var dayjs_min = createCommonjsModule(function (module, exports) {
    !function (t, n) {
      module.exports = n();
    }(commonjsGlobal, function () {
      var t = "millisecond",
          n = "second",
          e = "minute",
          r = "hour",
          i = "day",
          s = "week",
          u = "month",
          o = "quarter",
          a = "year",
          h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
          f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          c = function c(t, n, e) {
        var r = String(t);
        return !r || r.length >= n ? t : "" + Array(n + 1 - r.length).join(e) + t;
      },
          d = {
        s: c,
        z: function z(t) {
          var n = -t.utcOffset(),
              e = Math.abs(n),
              r = Math.floor(e / 60),
              i = e % 60;
          return (n <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");
        },
        m: function m(t, n) {
          var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),
              r = t.clone().add(e, u),
              i = n - r < 0,
              s = t.clone().add(e + (i ? -1 : 1), u);
          return Number(-(e + (n - r) / (i ? r - s : s - r)) || 0);
        },
        a: function a(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function p(h) {
          return {
            M: u,
            y: a,
            w: s,
            d: i,
            D: "date",
            h: r,
            m: e,
            s: n,
            ms: t,
            Q: o
          }[h] || String(h || "").toLowerCase().replace(/s$/, "");
        },
        u: function u(t) {
          return void 0 === t;
        }
      },
          $ = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      },
          l = "en",
          m = {};

      m[l] = $;

      var y = function y(t) {
        return t instanceof v;
      },
          M = function M(t, n, e) {
        var r;
        if (!t) return l;
        if ("string" == typeof t) m[t] && (r = t), n && (m[t] = n, r = t);else {
          var i = t.name;
          m[i] = t, r = i;
        }
        return !e && r && (l = r), r || !e && l;
      },
          g = function g(t, n, e) {
        if (y(t)) return t.clone();
        var r = n ? "string" == typeof n ? {
          format: n,
          pl: e
        } : n : {};
        return r.date = t, new v(r);
      },
          D = d;

      D.l = M, D.i = y, D.w = function (t, n) {
        return g(t, {
          locale: n.$L,
          utc: n.$u,
          $offset: n.$offset
        });
      };

      var v = function () {
        function c(t) {
          this.$L = this.$L || M(t.locale, null, !0), this.parse(t);
        }

        var d = c.prototype;
        return d.parse = function (t) {
          this.$d = function (t) {
            var n = t.date,
                e = t.utc;
            if (null === n) return new Date(NaN);
            if (D.u(n)) return new Date();
            if (n instanceof Date) return new Date(n);

            if ("string" == typeof n && !/Z$/i.test(n)) {
              var r = n.match(h);
              if (r) return e ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);
            }

            return new Date(n);
          }(t), this.init();
        }, d.init = function () {
          var t = this.$d;
          this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, d.$utils = function () {
          return D;
        }, d.isValid = function () {
          return !("Invalid Date" === this.$d.toString());
        }, d.isSame = function (t, n) {
          var e = g(t);
          return this.startOf(n) <= e && e <= this.endOf(n);
        }, d.isAfter = function (t, n) {
          return g(t) < this.startOf(n);
        }, d.isBefore = function (t, n) {
          return this.endOf(n) < g(t);
        }, d.$g = function (t, n, e) {
          return D.u(t) ? this[n] : this.set(e, t);
        }, d.year = function (t) {
          return this.$g(t, "$y", a);
        }, d.month = function (t) {
          return this.$g(t, "$M", u);
        }, d.day = function (t) {
          return this.$g(t, "$W", i);
        }, d.date = function (t) {
          return this.$g(t, "$D", "date");
        }, d.hour = function (t) {
          return this.$g(t, "$H", r);
        }, d.minute = function (t) {
          return this.$g(t, "$m", e);
        }, d.second = function (t) {
          return this.$g(t, "$s", n);
        }, d.millisecond = function (n) {
          return this.$g(n, "$ms", t);
        }, d.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }, d.valueOf = function () {
          return this.$d.getTime();
        }, d.startOf = function (t, o) {
          var h = this,
              f = !!D.u(o) || o,
              c = D.p(t),
              d = function d(t, n) {
            var e = D.w(h.$u ? Date.UTC(h.$y, n, t) : new Date(h.$y, n, t), h);
            return f ? e : e.endOf(i);
          },
              $ = function $(t, n) {
            return D.w(h.toDate()[t].apply(h.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), h);
          },
              l = this.$W,
              m = this.$M,
              y = this.$D,
              M = "set" + (this.$u ? "UTC" : "");

          switch (c) {
            case a:
              return f ? d(1, 0) : d(31, 11);

            case u:
              return f ? d(1, m) : d(0, m + 1);

            case s:
              var g = this.$locale().weekStart || 0,
                  v = (l < g ? l + 7 : l) - g;
              return d(f ? y - v : y + (6 - v), m);

            case i:
            case "date":
              return $(M + "Hours", 0);

            case r:
              return $(M + "Minutes", 1);

            case e:
              return $(M + "Seconds", 2);

            case n:
              return $(M + "Milliseconds", 3);

            default:
              return this.clone();
          }
        }, d.endOf = function (t) {
          return this.startOf(t, !1);
        }, d.$set = function (s, o) {
          var h,
              f = D.p(s),
              c = "set" + (this.$u ? "UTC" : ""),
              d = (h = {}, h[i] = c + "Date", h.date = c + "Date", h[u] = c + "Month", h[a] = c + "FullYear", h[r] = c + "Hours", h[e] = c + "Minutes", h[n] = c + "Seconds", h[t] = c + "Milliseconds", h)[f],
              $ = f === i ? this.$D + (o - this.$W) : o;

          if (f === u || f === a) {
            var l = this.clone().set("date", 1);
            l.$d[d]($), l.init(), this.$d = l.set("date", Math.min(this.$D, l.daysInMonth())).toDate();
          } else d && this.$d[d]($);

          return this.init(), this;
        }, d.set = function (t, n) {
          return this.clone().$set(t, n);
        }, d.get = function (t) {
          return this[D.p(t)]();
        }, d.add = function (t, o) {
          var h,
              f = this;
          t = Number(t);

          var c = D.p(o),
              d = function d(n) {
            var e = g(f);
            return D.w(e.date(e.date() + Math.round(n * t)), f);
          };

          if (c === u) return this.set(u, this.$M + t);
          if (c === a) return this.set(a, this.$y + t);
          if (c === i) return d(1);
          if (c === s) return d(7);
          var $ = (h = {}, h[e] = 6e4, h[r] = 36e5, h[n] = 1e3, h)[c] || 1,
              l = this.$d.getTime() + t * $;
          return D.w(l, this);
        }, d.subtract = function (t, n) {
          return this.add(-1 * t, n);
        }, d.format = function (t) {
          var n = this;
          if (!this.isValid()) return "Invalid Date";

          var e = t || "YYYY-MM-DDTHH:mm:ssZ",
              r = D.z(this),
              i = this.$locale(),
              s = this.$H,
              u = this.$m,
              o = this.$M,
              a = i.weekdays,
              h = i.months,
              c = function c(t, r, i, s) {
            return t && (t[r] || t(n, e)) || i[r].substr(0, s);
          },
              d = function d(t) {
            return D.s(s % 12 || 12, t, "0");
          },
              $ = i.meridiem || function (t, n, e) {
            var r = t < 12 ? "AM" : "PM";
            return e ? r.toLowerCase() : r;
          },
              l = {
            YY: String(this.$y).slice(-2),
            YYYY: this.$y,
            M: o + 1,
            MM: D.s(o + 1, 2, "0"),
            MMM: c(i.monthsShort, o, h, 3),
            MMMM: h[o] || h(this, e),
            D: this.$D,
            DD: D.s(this.$D, 2, "0"),
            d: String(this.$W),
            dd: c(i.weekdaysMin, this.$W, a, 2),
            ddd: c(i.weekdaysShort, this.$W, a, 3),
            dddd: a[this.$W],
            H: String(s),
            HH: D.s(s, 2, "0"),
            h: d(1),
            hh: d(2),
            a: $(s, u, !0),
            A: $(s, u, !1),
            m: String(u),
            mm: D.s(u, 2, "0"),
            s: String(this.$s),
            ss: D.s(this.$s, 2, "0"),
            SSS: D.s(this.$ms, 3, "0"),
            Z: r
          };

          return e.replace(f, function (t, n) {
            return n || l[t] || r.replace(":", "");
          });
        }, d.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, d.diff = function (t, h, f) {
          var c,
              d = D.p(h),
              $ = g(t),
              l = 6e4 * ($.utcOffset() - this.utcOffset()),
              m = this - $,
              y = D.m(this, $);
          return y = (c = {}, c[a] = y / 12, c[u] = y, c[o] = y / 3, c[s] = (m - l) / 6048e5, c[i] = (m - l) / 864e5, c[r] = m / 36e5, c[e] = m / 6e4, c[n] = m / 1e3, c)[d] || m, f ? y : D.a(y);
        }, d.daysInMonth = function () {
          return this.endOf(u).$D;
        }, d.$locale = function () {
          return m[this.$L];
        }, d.locale = function (t, n) {
          if (!t) return this.$L;
          var e = this.clone(),
              r = M(t, n, !0);
          return r && (e.$L = r), e;
        }, d.clone = function () {
          return D.w(this.$d, this);
        }, d.toDate = function () {
          return new Date(this.valueOf());
        }, d.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }, d.toISOString = function () {
          return this.$d.toISOString();
        }, d.toString = function () {
          return this.$d.toUTCString();
        }, c;
      }();

      return g.prototype = v.prototype, g.extend = function (t, n) {
        return t(n, v, g), g;
      }, g.locale = M, g.isDayjs = y, g.unix = function (t) {
        return g(1e3 * t);
      }, g.en = m[l], g.Ls = m, g;
    });
  });
  /** Built-in value references. */

  var objectCreate = Object.create;
  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */

  var baseCreate = function () {
    function object() {}

    return function (proto) {
      if (!isObject_1(proto)) {
        return {};
      }

      if (objectCreate) {
        return objectCreate(proto);
      }

      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  }();

  var _baseCreate = baseCreate;
  /**
   * The function whose prototype chain sequence wrappers inherit from.
   *
   * @private
   */

  function baseLodash() {// No operation performed.
  }

  var _baseLodash = baseLodash;
  /**
   * The base constructor for creating `lodash` wrapper objects.
   *
   * @private
   * @param {*} value The value to wrap.
   * @param {boolean} [chainAll] Enable explicit method chain sequences.
   */

  function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
  }

  LodashWrapper.prototype = _baseCreate(_baseLodash.prototype);
  LodashWrapper.prototype.constructor = LodashWrapper;
  var _LodashWrapper = LodashWrapper;
  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */

  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }

  var _arrayPush = arrayPush;
  /** Built-in value references. */

  var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;
  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */

  function isFlattenable(value) {
    return isArray_1(value) || isArguments_1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  var _isFlattenable = isFlattenable;
  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */

  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;
    predicate || (predicate = _isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];

      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          _arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }

    return result;
  }

  var _baseFlatten = baseFlatten;
  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */

  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? _baseFlatten(array, 1) : [];
  }

  var flatten_1 = flatten;
  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */

  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);

      case 1:
        return func.call(thisArg, args[0]);

      case 2:
        return func.call(thisArg, args[0], args[1]);

      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }

    return func.apply(thisArg, args);
  }

  var _apply = apply;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeMax$2 = Math.max;
  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */

  function overRest(func, start, transform) {
    start = nativeMax$2(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
          index = -1,
          length = nativeMax$2(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }

      index = -1;
      var otherArgs = Array(start + 1);

      while (++index < start) {
        otherArgs[index] = args[index];
      }

      otherArgs[start] = transform(array);
      return _apply(func, this, otherArgs);
    };
  }

  var _overRest = overRest;
  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */

  function constant(value) {
    return function () {
      return value;
    };
  }

  var constant_1 = constant;

  var defineProperty = function () {
    try {
      var func = _getNative(Object, 'defineProperty');

      func({}, '', {});
      return func;
    } catch (e) {}
  }();

  var _defineProperty = defineProperty;
  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */

  function identity(value) {
    return value;
  }

  var identity_1 = identity;
  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */

  var baseSetToString = !_defineProperty ? identity_1 : function (func, string) {
    return _defineProperty(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant_1(string),
      'writable': true
    });
  };
  var _baseSetToString = baseSetToString;
  /** Used to detect hot functions by number of calls within a span of milliseconds. */

  var HOT_COUNT = 800,
      HOT_SPAN = 16;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeNow = Date.now;
  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */

  function shortOut(func) {
    var count = 0,
        lastCalled = 0;
    return function () {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;

      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }

      return func.apply(undefined, arguments);
    };
  }

  var _shortOut = shortOut;
  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */

  var setToString = _shortOut(_baseSetToString);

  var _setToString = setToString;
  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */

  function flatRest(func) {
    return _setToString(_overRest(func, undefined, flatten_1), func + '');
  }

  var _flatRest = flatRest;
  /** Used to store function metadata. */

  var metaMap = _WeakMap && new _WeakMap();
  var _metaMap = metaMap;
  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */

  function noop() {// No operation performed.
  }

  var noop_1 = noop;
  /**
   * Gets metadata for `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {*} Returns the metadata for `func`.
   */

  var getData = !_metaMap ? noop_1 : function (func) {
    return _metaMap.get(func);
  };
  var _getData = getData;
  /** Used to lookup unminified function names. */

  var realNames = {};
  var _realNames = realNames;
  /** Used for built-in method references. */

  var objectProto$7 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  /**
   * Gets the name of `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {string} Returns the function name.
   */

  function getFuncName(func) {
    var result = func.name + '',
        array = _realNames[result],
        length = hasOwnProperty$6.call(_realNames, result) ? array.length : 0;

    while (length--) {
      var data = array[length],
          otherFunc = data.func;

      if (otherFunc == null || otherFunc == func) {
        return data.name;
      }
    }

    return result;
  }

  var _getFuncName = getFuncName;
  /** Used as references for the maximum length and index of an array. */

  var MAX_ARRAY_LENGTH = 4294967295;
  /**
   * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
   *
   * @private
   * @constructor
   * @param {*} value The value to wrap.
   */

  function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = MAX_ARRAY_LENGTH;
    this.__views__ = [];
  } // Ensure `LazyWrapper` is an instance of `baseLodash`.


  LazyWrapper.prototype = _baseCreate(_baseLodash.prototype);
  LazyWrapper.prototype.constructor = LazyWrapper;
  var _LazyWrapper = LazyWrapper;
  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */

  function copyArray(source, array) {
    var index = -1,
        length = source.length;
    array || (array = Array(length));

    while (++index < length) {
      array[index] = source[index];
    }

    return array;
  }

  var _copyArray = copyArray;
  /**
   * Creates a clone of `wrapper`.
   *
   * @private
   * @param {Object} wrapper The wrapper to clone.
   * @returns {Object} Returns the cloned wrapper.
   */

  function wrapperClone(wrapper) {
    if (wrapper instanceof _LazyWrapper) {
      return wrapper.clone();
    }

    var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = _copyArray(wrapper.__actions__);
    result.__index__ = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
  }

  var _wrapperClone = wrapperClone;
  /** Used for built-in method references. */

  var objectProto$8 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
  /**
   * Creates a `lodash` object which wraps `value` to enable implicit method
   * chain sequences. Methods that operate on and return arrays, collections,
   * and functions can be chained together. Methods that retrieve a single value
   * or may return a primitive value will automatically end the chain sequence
   * and return the unwrapped value. Otherwise, the value must be unwrapped
   * with `_#value`.
   *
   * Explicit chain sequences, which must be unwrapped with `_#value`, may be
   * enabled using `_.chain`.
   *
   * The execution of chained methods is lazy, that is, it's deferred until
   * `_#value` is implicitly or explicitly called.
   *
   * Lazy evaluation allows several methods to support shortcut fusion.
   * Shortcut fusion is an optimization to merge iteratee calls; this avoids
   * the creation of intermediate arrays and can greatly reduce the number of
   * iteratee executions. Sections of a chain sequence qualify for shortcut
   * fusion if the section is applied to an array and iteratees accept only
   * one argument. The heuristic for whether a section qualifies for shortcut
   * fusion is subject to change.
   *
   * Chaining is supported in custom builds as long as the `_#value` method is
   * directly or indirectly included in the build.
   *
   * In addition to lodash methods, wrappers have `Array` and `String` methods.
   *
   * The wrapper `Array` methods are:
   * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
   *
   * The wrapper `String` methods are:
   * `replace` and `split`
   *
   * The wrapper methods that support shortcut fusion are:
   * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
   * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
   * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
   *
   * The chainable wrapper methods are:
   * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
   * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
   * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
   * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
   * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
   * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
   * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
   * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
   * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
   * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
   * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
   * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
   * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
   * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
   * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
   * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
   * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
   * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
   * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
   * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
   * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
   * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
   * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
   * `zipObject`, `zipObjectDeep`, and `zipWith`
   *
   * The wrapper methods that are **not** chainable by default are:
   * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
   * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
   * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
   * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
   * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
   * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
   * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
   * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
   * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
   * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
   * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
   * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
   * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
   * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
   * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
   * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
   * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
   * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
   * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
   * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
   * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
   * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
   * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
   * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
   * `upperFirst`, `value`, and `words`
   *
   * @name _
   * @constructor
   * @category Seq
   * @param {*} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var wrapped = _([1, 2, 3]);
   *
   * // Returns an unwrapped value.
   * wrapped.reduce(_.add);
   * // => 6
   *
   * // Returns a wrapped value.
   * var squares = wrapped.map(square);
   *
   * _.isArray(squares);
   * // => false
   *
   * _.isArray(squares.value());
   * // => true
   */

  function lodash(value) {
    if (isObjectLike_1(value) && !isArray_1(value) && !(value instanceof _LazyWrapper)) {
      if (value instanceof _LodashWrapper) {
        return value;
      }

      if (hasOwnProperty$7.call(value, '__wrapped__')) {
        return _wrapperClone(value);
      }
    }

    return new _LodashWrapper(value);
  } // Ensure wrappers are instances of `baseLodash`.


  lodash.prototype = _baseLodash.prototype;
  lodash.prototype.constructor = lodash;
  var wrapperLodash = lodash;
  /**
   * Checks if `func` has a lazy counterpart.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
   *  else `false`.
   */

  function isLaziable(func) {
    var funcName = _getFuncName(func),
        other = wrapperLodash[funcName];

    if (typeof other != 'function' || !(funcName in _LazyWrapper.prototype)) {
      return false;
    }

    if (func === other) {
      return true;
    }

    var data = _getData(other);

    return !!data && func === data[0];
  }

  var _isLaziable = isLaziable;
  /** Error message constants. */

  var FUNC_ERROR_TEXT = 'Expected a function';
  /** Used to compose bitmasks for function metadata. */

  var WRAP_CURRY_FLAG = 8,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256;
  /**
   * Creates a `_.flow` or `_.flowRight` function.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new flow function.
   */

  function createFlow(fromRight) {
    return _flatRest(function (funcs) {
      var length = funcs.length,
          index = length,
          prereq = _LodashWrapper.prototype.thru;

      if (fromRight) {
        funcs.reverse();
      }

      while (index--) {
        var func = funcs[index];

        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }

        if (prereq && !wrapper && _getFuncName(func) == 'wrapper') {
          var wrapper = new _LodashWrapper([], true);
        }
      }

      index = wrapper ? index : length;

      while (++index < length) {
        func = funcs[index];

        var funcName = _getFuncName(func),
            data = funcName == 'wrapper' ? _getData(func) : undefined;

        if (data && _isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
          wrapper = wrapper[_getFuncName(data[0])].apply(wrapper, data[3]);
        } else {
          wrapper = func.length == 1 && _isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
        }
      }

      return function () {
        var args = arguments,
            value = args[0];

        if (wrapper && args.length == 1 && isArray_1(value)) {
          return wrapper.plant(value).value();
        }

        var index = 0,
            result = length ? funcs[index].apply(this, args) : value;

        while (++index < length) {
          result = funcs[index].call(this, result);
        }

        return result;
      };
    });
  }

  var _createFlow = createFlow;
  /**
   * Creates a function that returns the result of invoking the given functions
   * with the `this` binding of the created function, where each successive
   * invocation is supplied the return value of the previous.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Util
   * @param {...(Function|Function[])} [funcs] The functions to invoke.
   * @returns {Function} Returns the new composite function.
   * @see _.flowRight
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var addSquare = _.flow([_.add, square]);
   * addSquare(1, 2);
   * // => 9
   */

  var flow = _createFlow();

  var flow_1 = flow;
  var TYPE_PRE_MONTH = -1;
  var TYPE_NOW_MONTH = 0;
  var TYPE_NEXT_MONTH = 1;

  function handleActive(args, item) {
    var selectedDate = args.selectedDate;
    var _value = item._value;
    var start = selectedDate.start,
        end = selectedDate.end;
    var dayjsEnd = dayjs_min(end);
    var dayjsStart = start ? dayjs_min(start) : dayjsEnd;
    item.isSelected = _value.isSame(dayjsEnd) || _value.isSame(dayjsStart) || _value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd);
    item.isSelectedHead = _value.isSame(dayjsStart);
    item.isSelectedTail = _value.isSame(dayjsEnd);
    item.isToday = _value.diff(dayjs_min(Date.now()).startOf('day'), 'day') === 0;
    return item;
  }

  function handleMarks(args, item) {
    var options = args.options;
    var _value = item._value;
    var marks = options.marks;
    var markList = marks.filter(function (mark) {
      return dayjs_min(mark.value).startOf('day').isSame(_value);
    });
    item.marks = markList.slice(0, 1);
    return item;
  } // export function handleSelectedDates (args: PluginArg): Calendar.Item {
  // const { item, options } = args
  // const { _value } = item
  // const { selectedDates } = options
  // if (selectedDates.length === 0) return args
  // _forEach(selectedDates, date => {
  //   const { isSelected, isHead, isTail } = item
  //   // 如果当前 Item 已经具备了 三种状态下 无需继续判断 跳出循环
  //   if (isSelected) {
  //     return false
  //   }
  //   const { start, end } = date
  //   const dayjsEnd = dayjs(end).startOf('day')
  //   const dayjsStart = dayjs(start).startOf('day')
  //   item.isSelected =
  //     item.isSelected ||
  //     (_value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd))
  //   item.isHead = item.isHead || _value.isSame(dayjsStart)
  //   item.isTail = item.isTail || _value.isSame(dayjsEnd)
  // })
  //   return item
  // }


  function handleDisabled(args, item) {
    var options = args.options;
    var _value = item._value;
    var minDate = options.minDate,
        maxDate = options.maxDate;
    var dayjsMinDate = dayjs_min(minDate);
    var dayjsMaxDate = dayjs_min(maxDate);
    item.isDisabled = !!(minDate && _value.isBefore(dayjsMinDate)) || !!(maxDate && _value.isAfter(dayjsMaxDate));
    return item;
  }

  function handleValid(args, item) {
    var options = args.options;
    var _value = item._value;
    var validDates = options.validDates;

    if (!isEmpty_1(validDates)) {
      var isInclude = validDates.some(function (date) {
        return dayjs_min(date.value).startOf('day').isSame(_value);
      });
      item.isDisabled = !isInclude;
    }

    delete item._value;
    return item;
  }

  var plugins = [handleActive, handleMarks, handleDisabled, handleValid];
  var TOTAL = 7 * 6;

  function getFullItem(item, options, selectedDate, isShowStatus) {
    if (!isShowStatus) return item;
    var bindedPlugins = plugins.map(function (fn) {
      return fn.bind(null, {
        options: options,
        selectedDate: selectedDate
      });
    });
    return flow_1(bindedPlugins)(item);
  }

  function generateCalendarGroup(options) {
    return function (generateDate, selectedDate, isShowStatus) {
      var date = dayjs_min(generateDate);
      var format = options.format; // 获取生成日期的第一天 和 最后一天

      var firstDate = date.startOf('month');
      var lastDate = date.endOf('month');
      var preMonthDate = date.subtract(1, 'month');
      var list = [];
      var nowMonthDays = date.daysInMonth(); // 获取这个月有多少天

      var preMonthLastDay = preMonthDate.endOf('month').day(); // 获取上个月最后一天是周几
      // 生成上个月的日期

      for (var i_1 = 1; i_1 <= preMonthLastDay + 1; i_1++) {
        var thisDate = firstDate.subtract(i_1, 'day').startOf('day');
        var item = {
          marks: [],
          _value: thisDate,
          text: thisDate.date(),
          type: TYPE_PRE_MONTH,
          value: thisDate.format(format)
        };
        item = getFullItem(item, options, selectedDate, isShowStatus);
        list.push(item);
      }

      list.reverse(); // 生成这个月的日期

      for (var i_2 = 0; i_2 < nowMonthDays; i_2++) {
        var thisDate = firstDate.add(i_2, 'day').startOf('day');
        var item = {
          marks: [],
          _value: thisDate,
          text: thisDate.date(),
          type: TYPE_NOW_MONTH,
          value: thisDate.format(format)
        };
        item = getFullItem(item, options, selectedDate, isShowStatus);
        list.push(item);
      } // 生成下个月的日期


      var i = 1;

      while (list.length < TOTAL) {
        var thisDate = lastDate.add(i++, 'day').startOf('day');
        var item = {
          marks: [],
          _value: thisDate,
          text: thisDate.date(),
          type: TYPE_NEXT_MONTH,
          value: thisDate.format(format)
        };
        item = getFullItem(item, options, selectedDate, isShowStatus);
        list.push(item);
      }

      return {
        list: list,
        value: generateDate
      };
    };
  }

  var _a;

  var MAP = (_a = {}, _a[TYPE_PRE_MONTH] = 'pre', _a[TYPE_NOW_MONTH] = 'now', _a[TYPE_NEXT_MONTH] = 'next', _a);

  var AtCalendarList =
  /** @class */
  function (_super) {
    __extends(AtCalendarList, _super);

    function AtCalendarList() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.handleClick = function (item) {
        if (typeof _this.props.onClick === 'function') {
          _this.props.onClick(item);
        }
      };

      _this.handleLongClick = function (item) {
        if (typeof _this.props.onLongClick === 'function') {
          _this.props.onLongClick(item);
        }
      };

      return _this;
    }

    AtCalendarList.prototype.render = function () {
      var _this = this;

      var list = this.props.list;
      if (!list || list.length === 0) return null;
      return React__default.createElement(components.View, {
        className: 'at-calendar__list flex'
      }, list.map(function (item) {
        return React__default.createElement(components.View, {
          key: "list-item-" + item.value,
          onClick: _this.handleClick.bind(_this, item),
          onLongPress: _this.handleLongClick.bind(_this, item),
          className: classnames('flex__item', "flex__item--" + MAP[item.type], {
            'flex__item--today': item.isToday,
            'flex__item--active': item.isActive,
            'flex__item--selected': item.isSelected,
            'flex__item--selected-head': item.isSelectedHead,
            'flex__item--selected-tail': item.isSelectedTail,
            'flex__item--blur': item.isDisabled || item.type === TYPE_PRE_MONTH || item.type === TYPE_NEXT_MONTH
          })
        }, React__default.createElement(components.View, {
          className: 'flex__item-container'
        }, React__default.createElement(components.View, {
          className: 'container-text'
        }, item.text)), React__default.createElement(components.View, {
          className: 'flex__item-extra extra'
        }, item.marks && item.marks.length > 0 ? React__default.createElement(components.View, {
          className: 'extra-marks'
        }, item.marks.map(function (mark, key) {
          return React__default.createElement(components.Text, {
            key: key,
            className: 'mark'
          }, mark);
        })) : null));
      }));
    };

    return AtCalendarList;
  }(React__default.Component);

  var AtCalendarHeader =
  /** @class */
  function (_super) {
    __extends(AtCalendarHeader, _super);

    function AtCalendarHeader() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtCalendarHeader.prototype.render = function () {
      return React__default.createElement(components.View, {
        className: 'at-calendar__header header'
      }, React__default.createElement(components.View, {
        className: 'header__flex'
      }, React__default.createElement(components.View, {
        className: 'header__flex-item'
      }, "\u65E5"), React__default.createElement(components.View, {
        className: 'header__flex-item'
      }, "\u4E00"), React__default.createElement(components.View, {
        className: 'header__flex-item'
      }, "\u4E8C"), React__default.createElement(components.View, {
        className: 'header__flex-item'
      }, "\u4E09"), React__default.createElement(components.View, {
        className: 'header__flex-item'
      }, "\u56DB"), React__default.createElement(components.View, {
        className: 'header__flex-item'
      }, "\u4E94"), React__default.createElement(components.View, {
        className: 'header__flex-item'
      }, "\u516D")));
    };

    return AtCalendarHeader;
  }(React__default.Component);

  var ANIMTE_DURATION = 300;
  var defaultProps = {
    marks: [],
    selectedDate: {
      end: Date.now(),
      start: Date.now()
    },
    format: 'YYYY-MM-DD',
    generateDate: Date.now()
  };

  var AtCalendarBody =
  /** @class */
  function (_super) {
    __extends(AtCalendarBody, _super);

    function AtCalendarBody(props) {
      var _this = _super.call(this, props) || this;

      _this.changeCount = 0;
      _this.currentSwiperIndex = 1;
      _this.startX = 0;
      _this.swipeStartPoint = 0;
      _this.isPreMonth = false;
      _this.maxWidth = 0;
      _this.isTouching = false;

      _this.getGroups = function (generateDate, selectedDate) {
        var dayjsDate = dayjs_min(generateDate);
        var arr = [];

        var preList = _this.generateFunc(dayjsDate.subtract(1, 'month').valueOf(), selectedDate);

        var nowList = _this.generateFunc(generateDate, selectedDate, true);

        var nextList = _this.generateFunc(dayjsDate.add(1, 'month').valueOf(), selectedDate);

        var preListIndex = _this.currentSwiperIndex === 0 ? 2 : _this.currentSwiperIndex - 1;
        var nextListIndex = _this.currentSwiperIndex === 2 ? 0 : _this.currentSwiperIndex + 1;
        arr[preListIndex] = preList;
        arr[nextListIndex] = nextList;
        arr[_this.currentSwiperIndex] = nowList;
        return arr;
      };

      _this.handleTouchStart = function (e) {
        if (!_this.props.isSwiper) {
          return;
        }

        _this.isTouching = true;
        _this.startX = e.touches[0].clientX;
      };

      _this.handleTouchMove = function (e) {
        if (!_this.props.isSwiper) {
          return;
        }

        if (!_this.isTouching) return;
        var clientX = e.touches[0].clientX;
        var offsetSize = clientX - _this.startX;

        _this.setState({
          offsetSize: offsetSize
        });
      };

      _this.animateMoveSlide = function (offset, callback) {
        _this.setState({
          isAnimate: true
        }, function () {
          _this.setState({
            offsetSize: offset
          });

          setTimeout(function () {
            _this.setState({
              isAnimate: false
            }, function () {
              callback && callback();
            });
          }, ANIMTE_DURATION);
        });
      };

      _this.handleTouchEnd = function () {
        if (!_this.props.isSwiper) {
          return;
        }

        var offsetSize = _this.state.offsetSize;
        _this.isTouching = false;
        var isRight = offsetSize > 0;
        var breakpoint = _this.maxWidth / 2;
        var absOffsetSize = Math.abs(offsetSize);

        if (absOffsetSize > breakpoint) {
          var res = isRight ? _this.maxWidth : -_this.maxWidth;
          return _this.animateMoveSlide(res, function () {
            _this.props.onSwipeMonth(isRight ? -1 : 1);
          });
        }

        _this.animateMoveSlide(0);
      };

      _this.handleChange = function (e) {
        var _a = e.detail,
            current = _a.current,
            source = _a.source;

        if (source === 'touch') {
          _this.currentSwiperIndex = current;
          _this.changeCount += 1;
        }
      };

      _this.handleAnimateFinish = function () {
        if (_this.changeCount > 0) {
          _this.props.onSwipeMonth(_this.isPreMonth ? -_this.changeCount : _this.changeCount);

          _this.changeCount = 0;
        }
      };

      _this.handleSwipeTouchStart = function (e) {
        var _a = e.changedTouches[0],
            clientY = _a.clientY,
            clientX = _a.clientX;
        _this.swipeStartPoint = _this.props.isVertical ? clientY : clientX;
      };

      _this.handleSwipeTouchEnd = function (e) {
        var _a = e.changedTouches[0],
            clientY = _a.clientY,
            clientX = _a.clientX;
        _this.isPreMonth = _this.props.isVertical ? clientY - _this.swipeStartPoint > 0 : clientX - _this.swipeStartPoint > 0;
      };

      var validDates = props.validDates,
          marks = props.marks,
          format = props.format,
          minDate = props.minDate,
          maxDate = props.maxDate,
          generateDate = props.generateDate,
          selectedDate = props.selectedDate,
          selectedDates = props.selectedDates;
      _this.generateFunc = generateCalendarGroup({
        validDates: validDates,
        format: format,
        minDate: minDate,
        maxDate: maxDate,
        marks: marks,
        selectedDates: selectedDates
      });

      var listGroup = _this.getGroups(generateDate, selectedDate);

      _this.state = {
        listGroup: listGroup,
        offsetSize: 0,
        isAnimate: false
      };
      return _this;
    }

    AtCalendarBody.prototype.componentDidMount = function () {
      var _this = this;

      delayQuerySelector('.at-calendar-slider__main').then(function (res) {
        _this.maxWidth = res[0].width;
      });
    };

    AtCalendarBody.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      var validDates = nextProps.validDates,
          marks = nextProps.marks,
          format = nextProps.format,
          minDate = nextProps.minDate,
          maxDate = nextProps.maxDate,
          generateDate = nextProps.generateDate,
          selectedDate = nextProps.selectedDate,
          selectedDates = nextProps.selectedDates;
      this.generateFunc = generateCalendarGroup({
        validDates: validDates,
        format: format,
        minDate: minDate,
        maxDate: maxDate,
        marks: marks,
        selectedDates: selectedDates
      });
      var listGroup = this.getGroups(generateDate, selectedDate);
      this.setState({
        offsetSize: 0,
        listGroup: listGroup
      });
    };

    AtCalendarBody.prototype.render = function () {
      var _this = this;

      var isSwiper = this.props.isSwiper;
      var _a = this.state,
          isAnimate = _a.isAnimate,
          offsetSize = _a.offsetSize,
          listGroup = _a.listGroup;

      if (!isSwiper) {
        return React__default.createElement(components.View, {
          className: classnames('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + "weapp")
        }, React__default.createElement(AtCalendarHeader, null), React__default.createElement(components.View, {
          className: 'main__body body'
        }, React__default.createElement(components.View, {
          className: 'body__slider body__slider--now'
        }, React__default.createElement(AtCalendarList, {
          list: listGroup[1].list,
          onClick: this.props.onDayClick,
          onLongClick: this.props.onLongClick
        }))));
      }
      /* 需要 Taro 组件库维护 Swiper 使 小程序 和 H5 的表现保持一致  */


      if (false) {}

      return React__default.createElement(components.View, {
        className: classnames('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + "weapp")
      }, React__default.createElement(AtCalendarHeader, null), React__default.createElement(components.Swiper, {
        circular: true,
        current: 1,
        skipHiddenItemLayout: true,
        className: classnames('main__body'),
        onChange: this.handleChange,
        vertical: this.props.isVertical,
        onAnimationFinish: this.handleAnimateFinish,
        onTouchEnd: this.handleSwipeTouchEnd,
        onTouchStart: this.handleSwipeTouchStart
      }, listGroup.map(function (item, key) {
        return React__default.createElement(components.SwiperItem, {
          key: item.value,
          itemId: key.toString()
        }, React__default.createElement(AtCalendarList, {
          list: item.list,
          onClick: _this.props.onDayClick,
          onLongClick: _this.props.onLongClick
        }));
      })));
    };

    AtCalendarBody.defaultProps = defaultProps;
    return AtCalendarBody;
  }(React__default.Component);

  var AtCalendarController =
  /** @class */
  function (_super) {
    __extends(AtCalendarController, _super);

    function AtCalendarController() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtCalendarController.prototype.render = function () {
      var _a = this.props,
          generateDate = _a.generateDate,
          minDate = _a.minDate,
          maxDate = _a.maxDate,
          monthFormat = _a.monthFormat,
          hideArrow = _a.hideArrow;
      var dayjsDate = dayjs_min(generateDate);
      var dayjsMinDate = !!minDate && dayjs_min(minDate);
      var dayjsMaxDate = !!maxDate && dayjs_min(maxDate);
      var isMinMonth = dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate);
      var isMaxMonth = dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate);
      var minDateValue = dayjsMinDate ? dayjsMinDate.format('YYYY-MM') : '';
      var maxDateValue = dayjsMaxDate ? dayjsMaxDate.format('YYYY-MM') : '';
      return React__default.createElement(components.View, {
        className: 'at-calendar__controller controller'
      }, hideArrow ? null : React__default.createElement(components.View, {
        className: classnames('controller__arrow controller__arrow--left', {
          'controller__arrow--disabled': isMinMonth
        }),
        onClick: this.props.onPreMonth.bind(this, isMinMonth)
      }), React__default.createElement(components.Picker, {
        mode: 'date',
        fields: 'month',
        end: maxDateValue,
        start: minDateValue,
        onChange: this.props.onSelectDate,
        value: dayjsDate.format('YYYY-MM')
      }, React__default.createElement(components.Text, {
        className: 'controller__info'
      }, dayjsDate.format(monthFormat))), hideArrow ? null : React__default.createElement(components.View, {
        className: classnames('controller__arrow controller__arrow--right', {
          'controller__arrow--disabled': isMaxMonth
        }),
        onClick: this.props.onNextMonth.bind(this, isMaxMonth)
      }));
    };

    return AtCalendarController;
  }(React__default.Component);

  var defaultProps$1 = {
    validDates: [],
    marks: [],
    isSwiper: true,
    hideArrow: false,
    isVertical: false,
    selectedDates: [],
    isMultiSelect: false,
    format: 'YYYY-MM-DD',
    currentDate: Date.now(),
    monthFormat: 'YYYY年MM月'
  };

  var AtCalendar =
  /** @class */
  function (_super) {
    __extends(AtCalendar, _super);

    function AtCalendar(props) {
      var _this = _super.call(this, props) || this;

      _this.getSingleSelectdState = function (value) {
        var generateDate = _this.state.generateDate;
        var stateValue = {
          selectedDate: _this.getSelectedDate(value.valueOf())
        };
        var dayjsGenerateDate = value.startOf('month');
        var generateDateValue = dayjsGenerateDate.valueOf();

        if (generateDateValue !== generateDate) {
          _this.triggerChangeDate(dayjsGenerateDate);

          stateValue.generateDate = generateDateValue;
        }

        return stateValue;
      };

      _this.getMultiSelectedState = function (value) {
        var selectedDate = _this.state.selectedDate;
        var end = selectedDate.end,
            start = selectedDate.start;
        var valueUnix = value.valueOf();
        var state = {
          selectedDate: selectedDate
        };

        if (end) {
          state.selectedDate = _this.getSelectedDate(valueUnix, 0);
        } else {
          state.selectedDate.end = Math.max(valueUnix, +start);
          state.selectedDate.start = Math.min(valueUnix, +start);
        }

        return state;
      };

      _this.getSelectedDate = function (start, end) {
        var stateValue = {
          start: start,
          end: start
        };

        if (typeof end !== 'undefined') {
          stateValue.end = end;
        }

        return stateValue;
      };

      _this.triggerChangeDate = function (value) {
        var format = _this.props.format;
        if (typeof _this.props.onMonthChange !== 'function') return;

        _this.props.onMonthChange(value.format(format));
      };

      _this.setMonth = function (vectorCount) {
        var format = _this.props.format;
        var generateDate = _this.state.generateDate;

        var _generateDate = dayjs_min(generateDate).add(vectorCount, 'month');

        _this.setState({
          generateDate: _generateDate.valueOf()
        });

        if (vectorCount && typeof _this.props.onMonthChange === 'function') {
          _this.props.onMonthChange(_generateDate.format(format));
        }
      };

      _this.handleClickPreMonth = function (isMinMonth) {
        if (isMinMonth === true) {
          return;
        }

        _this.setMonth(-1);

        if (typeof _this.props.onClickPreMonth === 'function') {
          _this.props.onClickPreMonth();
        }
      };

      _this.handleClickNextMonth = function (isMaxMonth) {
        if (isMaxMonth === true) {
          return;
        }

        _this.setMonth(1);

        if (typeof _this.props.onClickNextMonth === 'function') {
          _this.props.onClickNextMonth();
        }
      }; // picker 选择时间改变时触发


      _this.handleSelectDate = function (e) {
        var value = e.detail.value;

        var _generateDate = dayjs_min(value);

        var _generateDateValue = _generateDate.valueOf();

        if (_this.state.generateDate === _generateDateValue) return;

        _this.triggerChangeDate(_generateDate);

        _this.setState({
          generateDate: _generateDateValue
        });
      };

      _this.handleDayClick = function (item) {
        var isMultiSelect = _this.props.isMultiSelect;
        var isDisabled = item.isDisabled,
            value = item.value;
        if (isDisabled) return;
        var dayjsDate = dayjs_min(value);
        var stateValue = {};

        if (isMultiSelect) {
          stateValue = _this.getMultiSelectedState(dayjsDate);
        } else {
          stateValue = _this.getSingleSelectdState(dayjsDate);
        }

        _this.setState(stateValue, function () {
          _this.handleSelectedDate();
        });

        if (typeof _this.props.onDayClick === 'function') {
          _this.props.onDayClick({
            value: item.value
          });
        }
      };

      _this.handleSelectedDate = function () {
        var selectDate = _this.state.selectedDate;

        if (typeof _this.props.onSelectDate === 'function') {
          var info = {
            start: dayjs_min(selectDate.start).format(_this.props.format)
          };

          if (selectDate.end) {
            info.end = dayjs_min(selectDate.end).format(_this.props.format);
          }

          _this.props.onSelectDate({
            value: info
          });
        }
      };

      _this.handleDayLongClick = function (item) {
        if (typeof _this.props.onDayLongClick === 'function') {
          _this.props.onDayLongClick({
            value: item.value
          });
        }
      };

      var _a = props,
          currentDate = _a.currentDate,
          isMultiSelect = _a.isMultiSelect;
      _this.state = _this.getInitializeState(currentDate, isMultiSelect);
      return _this;
    }

    AtCalendar.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      var currentDate = nextProps.currentDate,
          isMultiSelect = nextProps.isMultiSelect;
      if (!currentDate || currentDate === this.props.currentDate) return;

      if (isMultiSelect && this.props.isMultiSelect) {
        var _a = currentDate,
            start = _a.start,
            end = _a.end;
        var _b = this.props.currentDate,
            preStart = _b.start,
            preEnd = _b.end;

        if (start === preStart && preEnd === end) {
          return;
        }
      }

      var stateValue = this.getInitializeState(currentDate, isMultiSelect);
      this.setState(stateValue);
    };

    AtCalendar.prototype.getInitializeState = function (currentDate, isMultiSelect) {
      var end;
      var start;
      var generateDateValue;

      if (!currentDate) {
        var dayjsStart = dayjs_min();
        start = dayjsStart.startOf('day').valueOf();
        generateDateValue = dayjsStart.startOf('month').valueOf();
        return {
          generateDate: generateDateValue,
          selectedDate: {
            start: ''
          }
        };
      }

      if (isMultiSelect) {
        var _a = currentDate,
            cStart = _a.start,
            cEnd = _a.end;
        var dayjsStart = dayjs_min(cStart);
        start = dayjsStart.startOf('day').valueOf();
        generateDateValue = dayjsStart.startOf('month').valueOf();
        end = cEnd ? dayjs_min(cEnd).startOf('day').valueOf() : start;
      } else {
        var dayjsStart = dayjs_min(currentDate);
        start = dayjsStart.startOf('day').valueOf();
        generateDateValue = dayjsStart.startOf('month').valueOf();
        end = start;
      }

      return {
        generateDate: generateDateValue,
        selectedDate: this.getSelectedDate(start, end)
      };
    };

    AtCalendar.prototype.render = function () {
      var _a = this.state,
          generateDate = _a.generateDate,
          selectedDate = _a.selectedDate;
      var _b = this.props,
          validDates = _b.validDates,
          marks = _b.marks,
          format = _b.format,
          minDate = _b.minDate,
          maxDate = _b.maxDate,
          isSwiper = _b.isSwiper,
          className = _b.className,
          hideArrow = _b.hideArrow,
          isVertical = _b.isVertical,
          monthFormat = _b.monthFormat,
          selectedDates = _b.selectedDates;
      return React__default.createElement(components.View, {
        className: classnames('at-calendar', className)
      }, React__default.createElement(AtCalendarController, {
        minDate: minDate,
        maxDate: maxDate,
        hideArrow: hideArrow,
        monthFormat: monthFormat,
        generateDate: generateDate,
        onPreMonth: this.handleClickPreMonth,
        onNextMonth: this.handleClickNextMonth,
        onSelectDate: this.handleSelectDate
      }), React__default.createElement(AtCalendarBody, {
        validDates: validDates,
        marks: marks,
        format: format,
        minDate: minDate,
        maxDate: maxDate,
        isSwiper: isSwiper,
        isVertical: isVertical,
        selectedDate: selectedDate,
        selectedDates: selectedDates,
        generateDate: generateDate,
        onDayClick: this.handleDayClick,
        onSwipeMonth: this.setMonth,
        onLongClick: this.handleDayLongClick
      }));
    };

    AtCalendar.defaultProps = defaultProps$1;
    return AtCalendar;
  }(React__default.Component);

  var AtFab =
  /** @class */
  function (_super) {
    __extends(AtFab, _super);

    function AtFab() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AtFab.prototype.onClick = function (e) {
      if (typeof this.props.onClick === 'function') {
        this.props.onClick(e);
      }
    };

    AtFab.prototype.render = function () {
      var _a;

      var _b = this.props,
          size = _b.size,
          className = _b.className,
          children = _b.children;
      var rootClass = classnames('at-fab', className, (_a = {}, _a["at-fab--" + size] = size, _a));
      return React__default.createElement(components.View, {
        className: rootClass,
        onClick: this.onClick.bind(this)
      }, children);
    };

    return AtFab;
  }(React__default.Component);

  AtFab.propTypes = {
    size: propTypes.oneOf(['normal', 'small']),
    onClick: propTypes.func
  };
  AtFab.defaultProps = {
    size: 'normal'
  };

  var objectToString$2 = function objectToString$2(style) {
    if (style && _typeof(style) === 'object') {
      var styleStr_1 = '';
      Object.keys(style).forEach(function (key) {
        var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
      });
      return styleStr_1;
    } else if (style && typeof style === 'string') {
      return style;
    }

    return '';
  };

  var AtComponent =
  /** @class */
  function (_super) {
    __extends(AtComponent, _super);

    function AtComponent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 合并 style
     * @param {Object|String} style1
     * @param {Object|String} style2
     * @returns {String}
     */


    AtComponent.prototype.mergeStyle = function (style1, style2) {
      if (style1 && _typeof(style1) === 'object' && style2 && _typeof(style2) === 'object') {
        return Object.assign({}, style1, style2);
      }

      return objectToString$2(style1) + objectToString$2(style2);
    };

    return AtComponent;
  }(React.Component);

  exports.AtAccordion = AtAccordion;
  exports.AtActionSheet = AtActionSheet;
  exports.AtActionSheetItem = AtActionSheetItem;
  exports.AtActivityIndicator = AtActivityIndicator;
  exports.AtAvatar = AtAvatar;
  exports.AtBadge = AtBadge;
  exports.AtButton = AtButton;
  exports.AtCalendar = AtCalendar;
  exports.AtCard = AtCard;
  exports.AtCheckbox = AtCheckbox;
  exports.AtComponent = AtComponent;
  exports.AtCountdown = AtCountdown;
  exports.AtCurtain = AtCurtain;
  exports.AtDivider = AtDivider;
  exports.AtDrawer = AtDrawer;
  exports.AtFab = AtFab;
  exports.AtFloatLayout = AtFloatLayout;
  exports.AtForm = AtForm;
  exports.AtGrid = AtGrid;
  exports.AtIcon = AtIcon;
  exports.AtImagePicker = AtImagePicker;
  exports.AtIndexes = AtIndexes;
  exports.AtInput = AtInput;
  exports.AtInputNumber = AtInputNumber;
  exports.AtList = AtList;
  exports.AtListItem = AtListItem;
  exports.AtLoadMore = AtLoadMore;
  exports.AtLoading = AtLoading;
  exports.AtMessage = AtMessage;
  exports.AtModal = AtModal;
  exports.AtModalAction = AtModalAction;
  exports.AtModalContent = AtModalContent;
  exports.AtModalHeader = AtModalHeader;
  exports.AtNavBar = AtNavBar;
  exports.AtNoticebar = AtNoticebar;
  exports.AtPagination = AtPagination;
  exports.AtProgress = AtProgress;
  exports.AtRadio = AtRadio;
  exports.AtRange = AtRange;
  exports.AtRate = AtRate;
  exports.AtSearchBar = AtSearchBar;
  exports.AtSegmentedControl = AtSegmentedControl;
  exports.AtSlider = AtSlider;
  exports.AtSteps = AtSteps;
  exports.AtSwipeAction = AtSwipeAction;
  exports.AtSwitch = AtSwitch;
  exports.AtTabBar = AtTabBar;
  exports.AtTabs = AtTabs;
  exports.AtTabsPane = AtTabsPane;
  exports.AtTag = AtTag;
  exports.AtTextarea = AtTextarea;
  exports.AtTimeline = AtTimeline;
  exports.AtToast = AtToast;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/icon.scss":
/*!**************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/icon.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/swipe-action.scss":
/*!**********************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/swipe-action.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=vendors.js.map