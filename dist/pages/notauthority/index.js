(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/notauthority/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/notauthority/index.tsx":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/notauthority/index.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _utils_tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/tool */ "./src/utils/tool.ts");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config */ "./config/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/pages/notauthority/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);








 // import cloud from 'wx-server-sdk' //暂时没有使用指纹校验
// cloud.init()

var Notauthority = function Notauthority() {
  var User = _store_index__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].User,
      Fingerprint = _store_index__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Fingerprint;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      phone = _useState2[0],
      setPhone = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(User.code),
      _useState4 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      code = _useState4[0],
      setCode = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(60),
      _useState6 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
      disabledCode = _useState6[0],
      setDisabledCode = _useState6[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useDidShow"])(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.setNavigationBarTitle({
      title: "登陆"
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!User.isOK) {
      setCode(User.code);
    }
  }, [User.code]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    User.setCode();
    setCode('');
    return function () {};
  }, []); // 指纹登陆

  function login() {
    Fingerprint.FingerprintLogin();
  } //登陆


  function Userlogin() {
    if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone)) return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('请输入正确的手机号', 'none', 1000);

    if (User.code && code + '' === User.code + '') {
      User.login();
    } else {
      Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('验证码输入有误', 'none', 1000);
    }
  } // 获取验证码


  function getCode() {
    if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone)) return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('请输入正确的手机号', 'none', 1000);
    var count = 59;
    setDisabledCode(59);
    User.getCode(+phone);
    var timer = setInterval(function () {
      if (count <= 0) {
        setDisabledCode(60);
        clearInterval(timer);
      } else {
        setDisabledCode(--count);
      }
    }, 1000);
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


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "x"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "x"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* CoverImage */ "d"], {
    className: "logo",
    src: global.constants.icon.notAuthorityLogo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "x"], {
    onClick: function onClick() {
      login();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* CoverImage */ "d"], {
    className: "login",
    src: global.constants.icon.notAuthorityLogin
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtForm */ "c"], {
    className: "form-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtInput */ "d"], {
    name: "phone",
    title: "\u624B\u673A\u53F7",
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7...",
    value: phone,
    onChange: function onChange(value) {
      setPhone(value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "x"], {
    className: "example-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtInput */ "d"], {
    className: "code",
    name: "code",
    title: "\u9A8C\u8BC1\u7801",
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801...",
    value: code,
    onChange: function onChange(value) {
      setCode(value);
    }
  }), disabledCode >= 60 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtButton */ "b"], {
    className: "code-btn",
    onClick: function onClick() {
      getCode();
    }
  }, "\u83B7\u53D6\u9A8C\u8BC1\u7801") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtButton */ "b"], {
    className: "code-btn"
  }, disabledCode, "\u79D2\u540E\u518D\u6B21\u83B7\u53D6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtButton */ "b"], {
    className: "btn",
    formType: "submit",
    onClick: function onClick() {
      Userlogin();
    }
  }, "\u63D0\u4EA4")));
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