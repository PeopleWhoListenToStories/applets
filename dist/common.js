(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.constants = {
  website: 'https://humanweaknesses.com',
  // website: 'http://127.0.0.1:7001',
  name: 'weChat',
  icon: {
    mapIcon: 'http://picture-1302857231.cos.ap-beijing.myqcloud.com/402_1611416547670818.png',
    flagIcon: 'http://picture-1302857231.cos.ap-beijing.myqcloud.com/402_1611416512165149.png',
    otherIcon: 'http://picture-1302857231.cos.ap-beijing.myqcloud.com/402_1611416467103273.png',
    lukuangOffIcon: 'http://picture-1302857231.cos.ap-beijing.myqcloud.com/402_1611418418081583.png',
    lukuangOpenIcon: 'http://picture-1302857231.cos.ap-beijing.myqcloud.com/402_161141845409626.png',
    weixingOffIcon: 'http://picture-1302857231.cos.ap-beijing.myqcloud.com/402_1611419076167662.png',
    weixingOpenIcon: 'http://picture-1302857231.cos.ap-beijing.myqcloud.com/402_161142058554750.png',
    notAuthorityLogo: 'http://picture-1302857231.cos.ap-beijing.myqcloud.com/402_1611416591491965.png',
    notAuthorityLogin: 'http://picture-1302857231.cos.ap-beijing.myqcloud.com/402_1611416725880498.png',
    zanwushujuIcon: 'http://picture-1302857231.cos.ap-beijing.myqcloud.com/402_1611423136101319.png',
    newyear: 'https://picture-1302857231.cos.ap-beijing.myqcloud.com/402_1610885259711231.png'
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./config/dev.js":
/*!***********************!*\
  !*** ./config/dev.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {},
  h5: {}
};

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

var config = {
  projectName: 'myApp',
  date: '2021-1-23',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  alias: {
    '@components': Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(__dirname, '..', 'src/components'),
    '@utils': Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(__dirname, '..', 'src/utils')
  },
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [// 需添加如下配置
    {
      from: 'node_modules/taro-echarts/components/ec-canvas/',
      to: 'dist/npm/taro-echarts/components/ec-canvas',
      ignore: ['ec-canvas.js', 'wx-canvas.js']
    }],
    options: {}
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限

        }
      },
      cssModules: {
        enable: false,
        // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module',
          // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        url: {
          enable: true,
          limit: 10240
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false,
        // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module',
          // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
};
/* unused harmony default export */ var _unused_webpack_default_export = (function (merge) {
  if (true) {
    return merge({}, config, __webpack_require__(/*! ./dev */ "./config/dev.js"));
  }

  return merge({}, config, __webpack_require__(/*! ./prod */ "./config/prod.js"));
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./config/prod.js":
/*!************************!*\
  !*** ./config/prod.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
};

/***/ }),

/***/ "./src/const/status.js":
/*!*****************************!*\
  !*** ./src/const/status.js ***!
  \*****************************/
/*! exports provided: HTTP_STATUS, SUCCESS, FAIL, COMPLETE, PROMISE_STATUS, RESULT_STATUS */
/*! exports used: HTTP_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_STATUS; });
/* unused harmony export SUCCESS */
/* unused harmony export FAIL */
/* unused harmony export COMPLETE */
/* unused harmony export PROMISE_STATUS */
/* unused harmony export RESULT_STATUS */
var HTTP_STATUS = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}; // promise status

var SUCCESS = {
  success: 'success'
};
var FAIL = {
  fail: 'fail'
};
var COMPLETE = {
  complete: 'complete'
};
var PROMISE_STATUS = {
  success: 'success',
  fail: 'fail',
  complete: 'complete'
};
var RESULT_STATUS = {
  SUCCESS: 0,
  SIGNATURE_FAILED: 1000 // 签名失败

};

/***/ }),

/***/ "./src/service/apiModules/user.js":
/*!****************************************!*\
  !*** ./src/service/apiModules/user.js ***!
  \****************************************/
/*! exports provided: postLogin, getUserInfo, postUpLoadImage, updateUserName */
/*! exports used: getUserInfo, postLogin, updateUserName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserInfo; });
/* unused harmony export postUpLoadImage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateUserName; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request */ "./src/service/request.ts");

var postLogin = function postLogin(params) {
  return _request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/user/login', params);
}; // 获取用户信息

var getUserInfo = function getUserInfo() {
  return _request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/api/userInfo');
}; // 上传图片

var postUpLoadImage = function postUpLoadImage(params) {
  return _request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/upload', params, 'multipart/form-data');
}; // 修改用户名

var updateUserName = function updateUserName(params) {
  return _request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/updateUserName', params);
};

/***/ }),

/***/ "./src/service/request.ts":
/*!********************************!*\
  !*** ./src/service/request.ts ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _const_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/status */ "./src/const/status.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _utils_tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/tool */ "./src/utils/tool.ts");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/index */ "./src/store/index.ts");






 // eslint-disable-next-line no-unused-vars

var whileList = ['/api/user/login'];
/* harmony default export */ __webpack_exports__["a"] = ({
  baseOptions: function baseOptions(params) {
    var _arguments = arguments;
    return Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var method, User, url, data, authority, contentType, option;
      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              method = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 'GET';
              User = _store_index__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].User;
              url = params.url, data = params.data; // eslint-disable-next-line no-shadow

              authority = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getStorageSync('authority'); // let token = getApp().globalData.token

              if (!(!authority && !whileList.includes(params.url))) {
                _context.next = 8;
                break;
              }

              User.loginOut();
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.showModal({
                title: '登陆语',
                content: '未曾相逢先一笑',
                success: function success(res) {
                  if (res.confirm) {
                    console.log('用户点击确定');
                    User.login();
                  } else if (res.cancel) {
                    console.log('用户点击取消');
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
                      url: '/pages/notauthority/index'
                    });
                  }
                }
              });
              return _context.abrupt("return", {
                status: 401,
                data: {}
              });

            case 8:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.checkSession({
                success: function success() {
                  console.log('ok 未过期，并且在本生命周期一直有效'); //session_key 未过期，并且在本生命周期一直有效
                },
                fail: function fail() {
                  console.log('fail 已经失效，需要重新执行登录流程'); // session_key 已经失效，需要重新执行登录流程
                  // login() //重新登录
                }
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading({
                title: '正在加载',
                mask: true
              });
              contentType = 'application/x-www-form-urlencoded';
              contentType = params.contentType || contentType;
              option = {
                // isShowLoading: true,
                // loadingText: '正在加载',
                url: global.constants.website + url,
                data: data,
                method: method,
                header: {
                  'content-type': contentType,
                  'authority': _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getStorageSync('authority')
                },
                success: function success(result) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.hideLoading();

                  switch (result.data.status) {
                    case _const_status__WEBPACK_IMPORTED_MODULE_3__[/* HTTP_STATUS */ "a"].AUTHENTICATE:
                      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
                        url: '/pages/notauthority/index'
                      });
                      return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('当前用户已过期', 'none', 1000);

                    case _const_status__WEBPACK_IMPORTED_MODULE_3__[/* HTTP_STATUS */ "a"].NOT_FOUND:
                      return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('请求资源不存在', 'none', 1000);

                    case _const_status__WEBPACK_IMPORTED_MODULE_3__[/* HTTP_STATUS */ "a"].BAD_GATEWAY:
                      return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('服务端出现了问题', 'none', 1000);

                    case _const_status__WEBPACK_IMPORTED_MODULE_3__[/* HTTP_STATUS */ "a"].FORBIDDEN:
                      return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('没有权限访问', 'none', 1000);

                    case _const_status__WEBPACK_IMPORTED_MODULE_3__[/* HTTP_STATUS */ "a"].SUCCESS:
                      return result.data;

                    default:
                      return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('其他错误', 'none', 1000);
                  }
                },
                error: function error(result) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.hideLoading();
                  Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('请求接口出现问题');
                }
              };
              return _context.abrupt("return", _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request(option));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  get: function get(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var option = {
      url: url,
      data: data
    };
    return this.baseOptions(option);
  },
  post: function post(url, data, contentType) {
    var params = {
      url: url,
      data: data,
      contentType: contentType
    };
    return this.baseOptions(params, 'POST');
  },
  put: function put(url, data, contentType) {
    var params = {
      url: url,
      data: data,
      contentType: contentType
    };
    return this.baseOptions(params, 'PUT');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/user */ "./src/store/modules/user.ts");
/* harmony import */ var _modules_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/location */ "./src/store/modules/location.ts");
/* harmony import */ var _modules_fingerprint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fingerprint */ "./src/store/modules/fingerprint.ts");



/* harmony default export */ __webpack_exports__["a"] = ({
  User: _modules_user__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  Location: _modules_location__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  Fingerprint: _modules_fingerprint__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
});

/***/ }),

/***/ "./src/store/modules/fingerprint.ts":
/*!******************************************!*\
  !*** ./src/store/modules/fingerprint.ts ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/store/modules/user.ts");
/* harmony import */ var _utils_tool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/tool */ "./src/utils/tool.ts");




var FingerprintStore = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])({
  FingerprintLogin: function FingerprintLogin() {
    if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.canIUse('checkIsSupportSoterAuthentication')) {
      // 检测当前微信版本是否支持调用指纹相关接口
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.checkIsSupportSoterAuthentication({
        success: function success(result) {
          // result.supportMode = [] 不具备任何被SOTER支持的生物识别方式
          // result.supportMode = ['fingerPrint'] 只支持指纹识别
          // result.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
          if (result.supportMode.length !== 0) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.checkIsSoterEnrolledInDevice({
              // supportMode.length > 1 ? supportMode[1] : supportMode[0]
              checkAuthMode: result.supportMode[0],
              success: function success(result1) {
                if (result1.errMsg === 'checkIsSoterEnrolledInDevice:ok' && result.supportMode[0] === 'fingerPrint') {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.startSoterAuthentication({
                    requestAuthModes: ['fingerPrint'],
                    challenge: '123456',
                    authContent: '请用指纹解锁',
                    success: function success(result2) {
                      if (result2.errCode === 0) {
                        // verifySignature(result)
                        Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])('指纹验证成功', 'success', 1000);
                        _user__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].login();
                      } else {
                        Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])(result2.errMsg || '验证失败', 'none', 1000);
                      }
                    }
                  });
                } else if (result1.errMsg === 'checkIsSoterEnrolledInDevice:ok' && result.supportMode[0] === 'facial') {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.checkIsSupportFacialRecognition({
                    checkAliveType: 2,
                    // complete: result => {
                    //     console.log(result, "result123123")
                    // }
                    success: function success(res) {
                      if (res.errCode === 0 || res.errMsg === "checkIsSupportFacialRecognition:ok") {
                        //调用人脸识别
                        // _this.startface(_this.data.custName.replace(/(^\s*)|(\s*)$/g, ""), _this.data.custIdCard);//身份证名称，身份证号码
                        return;
                      }

                      Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])('微信版本过低暂时无法使用此功能请升级微信最新版本');
                    },
                    fail: function fail(res) {
                      Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])('微信版本过低暂时无法使用此功能请升级微信最新版本');
                    }
                  });
                } else {
                  Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])(result1.errMsg || '验证失败', 'none', 1000);
                } // console.log(res, "fingerPrint")// isEnrolled的值是0或者1，不知道是不是指纹个数或是Boolean

              }
            });
          } else {
            Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])('不具备识别', 'none', 1000);
          }
        },
        fail: function fail(result) {
          Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])(result.errMsg || '暂不支持指纹验', 'none', 1000);
        }
      });
    } else {
      Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])('暂不支持指纹验', 'none', 1000);
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (FingerprintStore);

/***/ }),

/***/ "./src/store/modules/location.ts":
/*!***************************************!*\
  !*** ./src/store/modules/location.ts ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var locationStore = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])({
  startAddress: {
    title: '',
    lat: null,
    lng: null
  },
  endAddress: {
    title: '',
    lat: null,
    lng: null
  },
  currentAddress: {
    title: ''
  },
  isLocationCom: '',
  setStartAddress: function setStartAddress(params) {
    this.startAddress = params;
  },
  setEndAddress: function setEndAddress(params) {
    this.endAddress = params;
  },
  setCurrentAddress: function setCurrentAddress(params) {
    this.currentAddress = params.toString();
  }
});
/* harmony default export */ __webpack_exports__["a"] = (locationStore);

/***/ }),

/***/ "./src/store/modules/user.ts":
/*!***********************************!*\
  !*** ./src/store/modules/user.ts ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_apiModules_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/apiModules/user */ "./src/service/apiModules/user.js");





var UserStore = Object(mobx__WEBPACK_IMPORTED_MODULE_2__[/* observable */ "l"])({
  userInfo: {},
  setuserInfo: function setuserInfo(params) {
    this.userInfo = params;
  },
  login: function login() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.login({
      success: function () {
        var _success = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
          var result;
          return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!res.code) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 3;
                  return Object(_service_apiModules_user__WEBPACK_IMPORTED_MODULE_4__[/* postLogin */ "b"])({
                    code: res.code
                  });

                case 3:
                  result = _context.sent;

                  if (result.data.status === 200) {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.setStorageSync("user_id", result.data.openid);
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.setStorageSync("authority", result.data.Authority);
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.switchTab({
                      url: '/pages/index/index'
                    });
                  } else {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showToast({
                      title: result.message || '失败了',
                      duration: 1000,
                      icon: 'none',
                      mask: false
                    });
                  }

                  _context.next = 10;
                  break;

                case 7:
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.removeStorageSync('user_id');
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.removeStorageSync('authority');
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showToast({
                    title: res.errMsg,
                    duration: 2000,
                    icon: 'none',
                    mask: false
                  });

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function success(_x) {
          return _success.apply(this, arguments);
        }

        return success;
      }()
    });
  },
  loginOut: function loginOut() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.removeStorageSync('user_id');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.removeStorageSync('authority');
  }
});
/* harmony default export */ __webpack_exports__["a"] = (UserStore);

/***/ }),

/***/ "./src/utils/tool.ts":
/*!***************************!*\
  !*** ./src/utils/tool.ts ***!
  \***************************/
/*! exports provided: Toast */
/*! exports used: Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
 // export const promisify = (func, ctx) => {
//     // 返回一个新的function
//     return function () {
//         // 初始化this作用域
//         var ctx = ctx || this;
//         // 新方法返回的promise
//         return new Promise((resolve, reject) => {
//             // 调用原来的非promise方法func，绑定作用域，传参，以及callback（callback为func的最后一个参数）
//             func.call(ctx, ...arguments, function () {
//                 // 将回调函数中的的第一个参数error单独取出
//                 var args = Array.prototype.map.call(arguments, item => item);
//                 var err = args.shift();
//                 // 判断是否有error
//                 if (err) {
//                     reject(err)
//                 } else {
//                     // 没有error则将后续参数resolve出来
//                     args = args.length > 1 ? args : args[0];
//                     resolve(args);
//                 }
//             });
//         })
//     };
// }
// export const promiseImage = (url) => {
//     return new Promise(function (resolve, reject) {
//         resolve(url)
//     })
// }
// export const isChinese = (str) => {
//     if (escape(str).indexOf("%u") < 0) return false
//     return true
// }
// export const handleName = (str) => {
//     let res = emoj2str(str)
//     if (isChinese(res)) {
//         res = res.length > 4 ? res.slice(0, 4) + '...' : res
//     } else {
//         res = res.length > 7 ? res.slice(0, 7) + '...' : res
//     }
//     return res
// }
// export const emoj2str = (str) => {
//     return unescape(escape(str).replace(/\%uD.{3}/g, ''))
// }
// /*获取当前页url*/
// export const getCurrentPageUrl = () => {
//     let pages = getCurrentPages()
//     let currentPage = pages[pages.length - 1]
//     let url = currentPage.route
//     return url
// }
// export const formatTime = date => {
//     const year = date.getFullYear()
//     const month = date.getMonth() + 1
//     const day = date.getDate()
//     const hour = date.getHours()
//     const minute = date.getMinutes()
//     const second = date.getSeconds()
//     return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }
// export const formatNumber = n => {
//     n = n.toString()
//     return n[1] ? n : '0' + n
// }
// export const logError = (name, action, info) => {
//     if (!info) {
//         info = 'empty'
//     }
//     try {
//         let deviceInfo = Taro.getSystemInfoSync()
//         var device = JSON.stringify(deviceInfo)
//     } catch (e) {
//         console.error('not support getSystemInfoSync api', err.message)
//     }
//     let time = formatTime(new Date())
//     console.error(time, name, action, info, device)
//     // if (typeof action !== 'object') {
//     // fundebug.notify(name, action, info)
//     // }
//     // fundebug.notifyError(info, { name, action, device, time })
//     if (typeof info === 'object') {
//         info = JSON.stringify(info)
//     }
// }

var Toast = function Toast() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
  var mask = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.showToast({
    title: title,
    icon: icon,
    duration: duration,
    mask: mask
  });
};

/***/ })

}]);
//# sourceMappingURL=common.js.map