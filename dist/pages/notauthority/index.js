(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/notauthority/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/notauthority/index.jsx":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/notauthority/index.jsx ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/pages/notauthority/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);






 // import cloud from 'wx-server-sdk' //暂时没有使用指纹校验
// cloud.init()

var Notauthority = function Notauthority() {
  var User = _store_index__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].User,
      Fingerprint = _store_index__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].Fingerprint;
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useDidShow"])(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setNavigationBarTitle({
      title: "登陆"
    });
  });

  function login() {
    Fingerprint.FingerprintLogin();
  }

  function Userlogin() {
    User.login();
  }

  function verifySignature(_x) {
    return _verifySignature.apply(this, arguments);
  }

  function _verifySignature() {
    _verifySignature = Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
      var result;
      return _Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return cloud.openapi.soter.verifySignature({
                openid: _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync('user_id'),
                jsonString: '$resultJSON',
                jsonSignature: '$resultJSONSignature'
              });

            case 3:
              result = _context.sent;
              return _context.abrupt("return", result);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", _context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _verifySignature.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "n"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "n"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* CoverImage */ "b"], {
    className: "logo",
    src: "../../assets/image/huangeshenfengenghaowan.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "n"], {
    onClick: function onClick() {
      login();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* CoverImage */ "b"], {
    className: "login",
    src: "../../assets/image/feiji_1.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "n"], {
    className: "btn",
    onClick: function onClick() {
      Userlogin();
    }
  }, "\u514D\u5BC6\u767B\u9646"));
};

/* harmony default export */ __webpack_exports__["a"] = (Notauthority);

/***/ }),

/***/ "./src/pages/notauthority/index.jsx":
/*!******************************************!*\
  !*** ./src/pages/notauthority/index.jsx ***!
  \******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/notauthority/index.jsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/notauthority/index', {}, config || {}))



/***/ }),

/***/ "./src/pages/notauthority/index.less":
/*!*******************************************!*\
  !*** ./src/pages/notauthority/index.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/notauthority/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map