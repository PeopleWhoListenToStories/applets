(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/notauthority/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/notauthority/index.tsx":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/notauthority/index.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./config/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/pages/notauthority/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);





 // import cloud from 'wx-server-sdk' //暂时没有使用指纹校验
// cloud.init()

var Notauthority = function Notauthority() {
  var User = _store_index__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].User,
      Fingerprint = _store_index__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].Fingerprint;
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useDidShow"])(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.setNavigationBarTitle({
      title: "登陆"
    });
  });

  function login() {
    Fingerprint.FingerprintLogin();
  }

  function Userlogin() {
    User.login();
  } // async function verifySignature(context) {
  //     try {
  //         const result = await cloud.openapi.soter.verifySignature({
  //             openid: Taro.getStorageSync('user_id'),
  //             jsonString: '$resultJSON',
  //             jsonSignature: '$resultJSONSignature'
  //         })
  //         return result
  //     } catch (err) {
  //         return err
  //     }
  // }


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "m"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "m"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* CoverImage */ "b"], {
    className: "logo",
    src: global.constants.icon.notAuthorityLogo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "m"], {
    onClick: function onClick() {
      login();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* CoverImage */ "b"], {
    className: "login",
    src: global.constants.icon.notAuthorityLogin
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "m"], {
    className: "btn",
    onClick: function onClick() {
      Userlogin();
    }
  }, "\u514D\u5BC6\u767B\u9646"));
};

/* harmony default export */ __webpack_exports__["a"] = (Notauthority);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/pages/notauthority/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/notauthority/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/notauthority/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/notauthority/index.tsx ***!
  \******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/notauthority/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/notauthority/index', {}, config || {}))



/***/ })

},[["./src/pages/notauthority/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map