(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/leaving-message/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/my/leaving-message/index.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/my/leaving-message/index.tsx ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _service_apiModules_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/apiModules/api */ "./src/service/apiModules/api.js");
/* harmony import */ var taro_ui_dist_style_components_message_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! taro-ui/dist/style/components/message.scss */ "./node_modules/taro-ui/dist/style/components/message.scss");
/* harmony import */ var taro_ui_dist_style_components_message_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_message_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-ui/dist/style/components/modal.scss */ "./node_modules/taro-ui/dist/style/components/modal.scss");
/* harmony import */ var taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var taro_ui_dist_style_components_nav_bar_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! taro-ui/dist/style/components/nav-bar.scss */ "./node_modules/taro-ui/dist/style/components/nav-bar.scss");
/* harmony import */ var taro_ui_dist_style_components_nav_bar_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_nav_bar_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var taro_ui_dist_style_components_icon_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! taro-ui/dist/style/components/icon.scss */ "./node_modules/taro-ui/dist/style/components/icon.scss");
/* harmony import */ var taro_ui_dist_style_components_icon_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_icon_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.scss */ "./src/pages/my/leaving-message/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_12__);






 // import HandleButton from "../components/handle_button"








var LeavingMessage = function LeavingMessage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useDidShow"])(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setNavigationBarTitle({
      title: ""
    });
  });

  function handleMessageChange(value) {
    setMessage(value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleCancel() {
    setOpen(false);
  }

  function handle_Confirm() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.atMessage({
      'message': '消息通知',
      'type': 'success'
    });
    setOpen(false);
  }

  function sendMessage() {
    return _sendMessage.apply(this, arguments);
  }

  function _sendMessage() {
    _sendMessage = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$createLeavingM, data;

      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!message) {
                _context.next = 8;
                break;
              }

              _context.next = 3;
              return Object(_service_apiModules_api__WEBPACK_IMPORTED_MODULE_7__[/* createLeavingMessage */ "a"])({
                message: message
              });

            case 3:
              _yield$createLeavingM = _context.sent;
              data = _yield$createLeavingM.data;

              if (data.code === 200) {
                setMessage('');
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.atMessage({
                  'message': data.massage,
                  'type': 'success'
                });
              } else {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.atMessage({
                  'message': data.massage,
                  'type': 'warning'
                });
              }

              _context.next = 9;
              break;

            case 8:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.atMessage({
                'message': '留言内容不能为空',
                'type': 'warning'
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _sendMessage.apply(this, arguments);
  }

  function handleClickBack() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.switchTab({
      url: '/pages/my/index'
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "leaving-message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtNavBar"], {
    onClickRgIconSt: function onClickRgIconSt() {
      handleClickBack();
    },
    onClickRgIconNd: function onClickRgIconNd() {
      handleClickBack();
    },
    onClickLeftIcon: function onClickLeftIcon() {
      handleClickBack();
    },
    color: "#000",
    leftText: "\u8FD4\u56DE",
    title: "\u7559\u8A00",
    leftIconType: "chevron-left"
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtTextarea"], {
    className: "text",
    value: message,
    onChange: function onChange(e) {
      handleMessageChange(e);
    },
    maxLength: 200,
    height: 300,
    placeholder: "\u60A8\u7684\u95EE\u9898\u662F..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtButton"], {
    className: "at-icon-menu",
    type: "primary",
    onClick: function onClick() {
      sendMessage();
    }
  }, "\u63D0\u4EA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtMessage"], null));
};

/* harmony default export */ __webpack_exports__["a"] = (LeavingMessage);

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/message.scss":
/*!*****************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/message.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/modal.scss":
/*!***************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/modal.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/nav-bar.scss":
/*!*****************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/nav-bar.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/my/leaving-message/index.scss":
/*!*************************************************!*\
  !*** ./src/pages/my/leaving-message/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/my/leaving-message/index.tsx":
/*!************************************************!*\
  !*** ./src/pages/my/leaving-message/index.tsx ***!
  \************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/my/leaving-message/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/my/leaving-message/index', {}, config || {}))



/***/ })

},[["./src/pages/my/leaving-message/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map