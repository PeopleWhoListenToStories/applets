(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/my/index.tsx":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/my/index.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _components_Phtot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Phtot */ "./src/pages/my/components/Phtot.tsx");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.ts");
/* harmony import */ var _utils_tool__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/tool */ "./src/utils/tool.ts");
/* harmony import */ var _service_apiModules_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/apiModules/user */ "./src/service/apiModules/user.js");
/* harmony import */ var taro_ui_dist_style_components_accordion_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! taro-ui/dist/style/components/accordion.scss */ "./node_modules/taro-ui/dist/style/components/accordion.scss");
/* harmony import */ var taro_ui_dist_style_components_accordion_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_accordion_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var taro_ui_dist_style_components_icon_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! taro-ui/dist/style/components/icon.scss */ "./node_modules/taro-ui/dist/style/components/icon.scss");
/* harmony import */ var taro_ui_dist_style_components_icon_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_icon_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var taro_ui_dist_style_components_swipe_action_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! taro-ui/dist/style/components/swipe-action.scss */ "./node_modules/taro-ui/dist/style/components/swipe-action.scss");
/* harmony import */ var taro_ui_dist_style_components_swipe_action_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_swipe_action_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _config_ts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../config.ts */ "./config.ts");
/* harmony import */ var _config_ts__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_config_ts__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index.scss */ "./src/pages/my/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_16__);




var _this = undefined;
















var My = function My() {
  var User = _store_index__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].User;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      touchStartTime = _useState2[0],
      setTouchStartTime = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      isShowUserName = _useState4[0],
      setShowUserName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState6 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      userName = _useState6[0],
      setUserName = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState8 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useDidShow"])(function () {
    getUserInfoFn();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setNavigationBarTitle({
      title: '个人中心'
    });
  });
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useDidHide"])(function () {
    setShowUserName(false);
  });

  function getUserInfoFn() {
    return _getUserInfoFn.apply(this, arguments);
  } // 上传头像调用接口


  function _getUserInfoFn() {
    _getUserInfoFn = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var result;
      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_service_apiModules_user__WEBPACK_IMPORTED_MODULE_11__[/* getUserInfo */ "b"])();

            case 2:
              result = _context.sent;

              if (result.data.status === 200) {
                User.setuserInfo(result.data.data);
                setUserName(result.data.data.codeName);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getUserInfoFn.apply(this, arguments);
  }

  function upload() {
    return _upload.apply(this, arguments);
  } // 修改头像


  function _upload() {
    _upload = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var imgList,
          _args2 = arguments;
      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              imgList = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : []; //小程序

              if (true) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.showLoading({
                  title: '正在加载',
                  mask: true
                });
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.uploadFile({
                  url: "".concat(global.constants.website, "/api/updateUserPhoto"),
                  //仅为示例，非真实的接口地址
                  filePath: imgList[0].url,
                  name: 'file',
                  formData: {},
                  header: {
                    'content-type': 'multipart/form-data',
                    'authority': _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync('authority')
                  },
                  success: function success(res) {
                    var data = JSON.parse(res.data);

                    if (data.code === 200) {
                      var userInfo = User.userInfo;
                      userInfo.photo = data.url;
                      User.setuserInfo(userInfo);
                      Object(_utils_tool__WEBPACK_IMPORTED_MODULE_10__[/* Toast */ "a"])('更新成功', 'success', 1000);
                    } else {
                      Object(_utils_tool__WEBPACK_IMPORTED_MODULE_10__[/* Toast */ "a"])('更新失败', 'none', 1000);
                    }

                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
                  }
                });
              }

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _upload.apply(this, arguments);
  }

  function uploadImg(_x) {
    return _uploadImg.apply(this, arguments);
  } // 修改用户名


  function _uploadImg() {
    _uploadImg = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (true) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.chooseImage({
                  count: 1,
                  // 可选图片数量, 这里限制为1张
                  sizeType: ['original', 'compressed'],
                  // 可以指定是原图还是缩图，默认二者都有
                  sourceType: ['album', 'camera'],
                  // 可以指定来源是相机还是相册，默认二者
                  success: function success(res) {
                    var files = []; // 以下几行代码是为了处理成自己想要的格式[{file: {path: '', size: ''}, url: '' }]

                    var obj = {};
                    obj.file = res.tempFiles[0];
                    obj.url = res.tempFilePaths[0];
                    files.push(obj);
                    upload(files);
                  }
                });
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _uploadImg.apply(this, arguments);
  }

  function updateName() {
    return _updateName.apply(this, arguments);
  } // 退出登陆


  function _updateName() {
    _updateName = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var result;
      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_service_apiModules_user__WEBPACK_IMPORTED_MODULE_11__[/* updateUserName */ "d"])({
                userName: userName
              });

            case 2:
              result = _context4.sent;

              if (result.data.code === 200) {
                getUserInfoFn();
                setShowUserName(false);
                Object(_utils_tool__WEBPACK_IMPORTED_MODULE_10__[/* Toast */ "a"])('修改成功', 'success', 1000);
              } else {
                Object(_utils_tool__WEBPACK_IMPORTED_MODULE_10__[/* Toast */ "a"])('修改失败', 'none', 1000);
              }

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _updateName.apply(this, arguments);
  }

  function exitLogin() {
    Object(_utils_tool__WEBPACK_IMPORTED_MODULE_10__[/* Toast */ "a"])('正在退出', 'loading', 1000);
    User.loginOut();
    setTimeout(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
        url: '/pages/notauthority/index'
      });
    }, 600);
  }

  function clickToEmptyPage(name) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
      url: "/pages/my/".concat(name, "/index")
    });
  } // 双击显示编辑名字


  function touchStart(e) {
    var timer = null;

    if (!touchStartTime) {
      setTouchStartTime(e.timeStamp);
      timer = setTimeout(function () {
        setTouchStartTime(0);
        clearTimeout(timer);
      }, 500);
    } else {
      if (e.timeStamp - touchStartTime < 350) {
        setTouchStartTime(0);
        setShowUserName(true);
        clearTimeout(timer);
      }
    }
  }

  function handleOpenClick(value) {
    setOpen(value);
  }

  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__[/* useObserver */ "d"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "nav"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "photo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Phtot__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      photoUrl: User.userInfo.photo,
      uploadImg: uploadImg.bind(_this)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "info",
      onTouchStart: function onTouchStart(e) {
        touchStart(e);
      }
    }, isShowUserName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "changeInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      focus: true,
      value: userName,
      onInput: function onInput(e) {
        setUserName(e.detail.value);
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      className: "btn",
      onClick: function onClick() {
        updateName();
      }
    }, "OK")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Text"], null, userName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtAccordion"], {
      open: open,
      onClick: function onClick(e) {
        handleOpenClick(e);
      },
      title: "    \u672C\u662F\u9752\u706F\u4E0D\u5F52\u5BA2\uFF0C\u5374\u56E0\u6D4A\u9152\u604B\u7EA2\u5C18.",
      note: "     \u661F\u5149\u4E0D\u8D1F\u8D76\u8DEF\u4EBA\uFF0C\u5C81\u6708\u4E0D\u8D1F\u6709\u5FC3\u4EBA."
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtList"], {
      hasBorder: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtListItem"], {
      title: "\u5173\u4E8E\u6211\u4EEC",
      arrow: "right",
      thumb: "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
      onClick: function onClick() {
        clickToEmptyPage('about');
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtListItem"], {
      title: "\u610F\u89C1\u7559\u8A00",
      note: "\u60A8\u7684\u5EFA\u8BAE\u662F\u6211\u4EEC\u7684\u52A8\u529B\uFF01",
      arrow: "right",
      thumb: "http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
      onClick: function onClick() {
        clickToEmptyPage('leaving-message');
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_6__["AtListItem"], {
      className: "lebalItem",
      title: "\u9000\u51FA\u767B\u9646",
      onClick: function onClick() {
        exitLogin();
      }
    })));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (My);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/accordion.scss":
/*!*******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/accordion.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/my/components/Photo.scss":
/*!********************************************!*\
  !*** ./src/pages/my/components/Photo.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/my/components/Phtot.tsx":
/*!*******************************************!*\
  !*** ./src/pages/my/components/Phtot.tsx ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phtot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _Photo_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Photo.scss */ "./src/pages/my/components/Photo.scss");
/* harmony import */ var _Photo_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Photo_scss__WEBPACK_IMPORTED_MODULE_3__);




function Phtot(props) {
  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[/* useObserver */ "d"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "userinfo-img-view portrait flex-box jc-sb ai-ce",
      "data-flag": "portrait"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: props.photoUrl,
      className: "userinfo-img",
      onClick: function onClick(e) {
        props.uploadImg(e);
      },
      mode: "aspectFill"
    }));
  });
}

/***/ }),

/***/ "./src/pages/my/index.scss":
/*!*********************************!*\
  !*** ./src/pages/my/index.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/my/index.tsx":
/*!********************************!*\
  !*** ./src/pages/my/index.tsx ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/my/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/my/index', {}, config || {}))



/***/ })

},[["./src/pages/my/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map