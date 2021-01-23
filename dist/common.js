(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.constants = {
  website: 'https://humanweaknesses.com',
  // website: 'http://127.0.0.1:7001',
  name: '百度'
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
/*! exports provided: postLogin, getUserInfo, postUpLoadImage */
/*! exports used: getUserInfo, postLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserInfo; });
/* unused harmony export postUpLoadImage */
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request */ "./src/service/request.js");

var postLogin = function postLogin(params) {
  return _request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/user/login', params);
}; // 获取用户信息

var getUserInfo = function getUserInfo() {
  return _request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/api/userInfo');
}; // 上传图片

var postUpLoadImage = function postUpLoadImage(params) {
  return _request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/upload', params, 'multipart/form-data');
};

/***/ }),

/***/ "./src/service/request.js":
/*!********************************!*\
  !*** ./src/service/request.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _const_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/status */ "./src/const/status.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/tool */ "./src/utils/tool.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");







var authority = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getStorageSync('authority');
var whileList = ['/api/user/login'];
/* harmony default export */ __webpack_exports__["a"] = ({
  baseOptions: function baseOptions(params) {
    var _arguments = arguments;
    return Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var method, User, url, data, authority, contentType, option;
      return _Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              method = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 'GET';
              User = _store_index__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].User;
              url = params.url, data = params.data;
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
                success: function success(res) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.hideLoading();

                  switch (res.data.status) {
                    case _const_status__WEBPACK_IMPORTED_MODULE_3__[/* HTTP_STATUS */ "a"].AUTHENTICATE:
                      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.switchTab({
                        url: '/pages/my/index'
                      });
                      return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('当前用户已过期', null, 1000);

                    case _const_status__WEBPACK_IMPORTED_MODULE_3__[/* HTTP_STATUS */ "a"].NOT_FOUND:
                      return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('请求资源不存在', null, 1000);

                    case _const_status__WEBPACK_IMPORTED_MODULE_3__[/* HTTP_STATUS */ "a"].BAD_GATEWAY:
                      return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('服务端出现了问题', null, 1000);

                    case _const_status__WEBPACK_IMPORTED_MODULE_3__[/* HTTP_STATUS */ "a"].FORBIDDEN:
                      return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('没有权限访问', null, 1000);

                    case _const_status__WEBPACK_IMPORTED_MODULE_3__[/* HTTP_STATUS */ "a"].SUCCESS:
                      return res.data;

                    default:
                      return Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('其他错误', null, 1000);
                  }
                },
                error: function error(e) {
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

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_location_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/location.js */ "./src/store/modules/location.js");
/* harmony import */ var _modules_user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/user.js */ "./src/store/modules/user.js");
/* harmony import */ var _modules_fingerprint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fingerprint */ "./src/store/modules/fingerprint.js");



/* harmony default export */ __webpack_exports__["a"] = ({
  Location: _modules_location_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  User: _modules_user_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  Fingerprint: _modules_fingerprint__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
});

/***/ }),

/***/ "./src/store/modules/fingerprint.js":
/*!******************************************!*\
  !*** ./src/store/modules/fingerprint.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/store/modules/user.js");
/* harmony import */ var _utils_tool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/tool */ "./src/utils/tool.js");




var FingerprintStore = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])({
  FingerprintLogin: function FingerprintLogin() {
    if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.canIUse('checkIsSupportSoterAuthentication')) {
      // 检测当前微信版本是否支持调用指纹相关接口
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.checkIsSupportSoterAuthentication({
        success: function success(res) {
          // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
          // res.supportMode = ['fingerPrint'] 只支持指纹识别
          // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
          if (res.supportMode.length !== 0) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.checkIsSoterEnrolledInDevice({
              // supportMode.length > 1 ? supportMode[1] : supportMode[0]
              checkAuthMode: 'fingerPrint',
              success: function success(res) {
                if (res.errMsg === 'checkIsSoterEnrolledInDevice:ok') {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.startSoterAuthentication({
                    requestAuthModes: ['fingerPrint'],
                    challenge: '123456',
                    authContent: '请用指纹解锁',
                    success: function success(res) {
                      if (res.errCode === 0) {
                        // verifySignature(res)
                        Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])('指纹验证成功', 'success', 1000);
                        _user__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].login();
                      } else {
                        Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])('验证失败', 'none', 1000);
                      }
                    }
                  });
                } else {
                  Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])('验证失败', 'none', 1000);
                } // console.log(res, "fingerPrint")// isEnrolled的值是0或者1，不知道是不是指纹个数或是Boolean

              }
            });
          } else {
            Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])('不具备识别', 'none', 1000);
          }
        }
      });
    } else {
      Object(_utils_tool__WEBPACK_IMPORTED_MODULE_3__[/* Toast */ "a"])('暂不支持指纹验', 'none', 1000);
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (FingerprintStore);

/***/ }),

/***/ "./src/store/modules/location.js":
/*!***************************************!*\
  !*** ./src/store/modules/location.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var locationStore = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])({
  startAddress: {},
  endAddress: {},
  currentAddress: {},
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

/***/ "./src/store/modules/user.js":
/*!***********************************!*\
  !*** ./src/store/modules/user.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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
        var _success = Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
          var result;
          return _Users_sulei_Desktop_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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

/***/ "./src/utils/QQMap.js":
/*!****************************!*\
  !*** ./src/utils/QQMap.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



/**
 * 微信小程序JavaScriptSDK
 * 
 * @version 1.2
 * @date 2019-03-06
 * @author v_ylyue@tencent.com
 */
var ERROR_CONF = {
  KEY_ERR: 311,
  KEY_ERR_MSG: 'key格式错误',
  PARAM_ERR: 310,
  PARAM_ERR_MSG: '请求参数信息有误',
  SYSTEM_ERR: 600,
  SYSTEM_ERR_MSG: '系统错误',
  WX_ERR_CODE: 1000,
  WX_OK_CODE: 200
};
var BASE_URL = 'https://apis.map.qq.com/ws/';
var URL_SEARCH = BASE_URL + 'place/v1/search';
var URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';
var URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';
var URL_CITY_LIST = BASE_URL + 'district/v1/list';
var URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';
var URL_DISTANCE = BASE_URL + 'distance/v1/';
var URL_DIRECTION = BASE_URL + 'direction/v1/';
var MODE = {
  driving: 'driving',
  transit: 'transit'
};
var EARTH_RADIUS = 6378136.49;
var Utils = {
  /**
  * md5加密方法
  * 版权所有©2011 Sebastian Tschan，https：//blueimp.net
  */
  safeAdd: function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
  },
  bitRotateLeft: function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  },
  md5cmn: function md5cmn(q, a, b, x, s, t) {
    return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);
  },
  md5ff: function md5ff(a, b, c, d, x, s, t) {
    return this.md5cmn(b & c | ~b & d, a, b, x, s, t);
  },
  md5gg: function md5gg(a, b, c, d, x, s, t) {
    return this.md5cmn(b & d | c & ~d, a, b, x, s, t);
  },
  md5hh: function md5hh(a, b, c, d, x, s, t) {
    return this.md5cmn(b ^ c ^ d, a, b, x, s, t);
  },
  md5ii: function md5ii(a, b, c, d, x, s, t) {
    return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);
  },
  binlMD5: function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = this.md5ff(a, b, c, d, x[i], 7, -680876936);
      d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = this.md5gg(b, c, d, a, x[i], 20, -373897302);
      a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = this.md5hh(d, a, b, c, x[i], 11, -358537222);
      c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = this.md5ii(a, b, c, d, x[i], 6, -198630844);
      d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = this.safeAdd(a, olda);
      b = this.safeAdd(b, oldb);
      c = this.safeAdd(c, oldc);
      d = this.safeAdd(d, oldd);
    }

    return [a, b, c, d];
  },
  binl2rstr: function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;

    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
    }

    return output;
  },
  rstr2binl: function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;

    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }

    var length8 = input.length * 8;

    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }

    return output;
  },
  rstrMD5: function rstrMD5(s) {
    return this.binl2rstr(this.binlMD5(this.rstr2binl(s), s.length * 8));
  },
  rstrHMACMD5: function rstrHMACMD5(key, data) {
    var i;
    var bkey = this.rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;

    if (bkey.length > 16) {
      bkey = this.binlMD5(bkey, key.length * 8);
    }

    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }

    hash = this.binlMD5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
    return this.binl2rstr(this.binlMD5(opad.concat(hash), 512 + 128));
  },
  rstr2hex: function rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;

    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
    }

    return output;
  },
  str2rstrUTF8: function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  },
  rawMD5: function rawMD5(s) {
    return this.rstrMD5(this.str2rstrUTF8(s));
  },
  hexMD5: function hexMD5(s) {
    return this.rstr2hex(this.rawMD5(s));
  },
  rawHMACMD5: function rawHMACMD5(k, d) {
    return this.rstrHMACMD5(this.str2rstrUTF8(k), str2rstrUTF8(d));
  },
  hexHMACMD5: function hexHMACMD5(k, d) {
    return this.rstr2hex(this.rawHMACMD5(k, d));
  },
  md5: function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return this.hexMD5(string);
      }

      return this.rawMD5(string);
    }

    if (!raw) {
      return this.hexHMACMD5(key, string);
    }

    return this.rawHMACMD5(key, string);
  },

  /**
   * 得到md5加密后的sig参数
   * @param {Object} requestParam 接口参数
   * @param {String} sk签名字符串
   * @param {String} featrue 方法名
   * @return 返回加密后的sig参数
   */
  getSig: function getSig(requestParam, sk, feature, mode) {
    var sig = null;
    var requestArr = [];
    Object.keys(requestParam).sort().forEach(function (key) {
      requestArr.push(key + '=' + requestParam[key]);
    });

    if (feature == 'search') {
      sig = '/ws/place/v1/search?' + requestArr.join('&') + sk;
    }

    if (feature == 'suggest') {
      sig = '/ws/place/v1/suggestion?' + requestArr.join('&') + sk;
    }

    if (feature == 'reverseGeocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }

    if (feature == 'geocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }

    if (feature == 'getCityList') {
      sig = '/ws/district/v1/list?' + requestArr.join('&') + sk;
    }

    if (feature == 'getDistrictByCityId') {
      sig = '/ws/district/v1/getchildren?' + requestArr.join('&') + sk;
    }

    if (feature == 'calculateDistance') {
      sig = '/ws/distance/v1/?' + requestArr.join('&') + sk;
    }

    if (feature == 'direction') {
      sig = '/ws/direction/v1/' + mode + '?' + requestArr.join('&') + sk;
    }

    sig = this.md5(sig);
    return sig;
  },

  /**
   * 得到终点query字符串
   * @param {Array|String} 检索数据
   */
  location2query: function location2query(data) {
    if (typeof data == 'string') {
      return data;
    }

    var query = '';

    for (var i = 0; i < data.length; i++) {
      var d = data[i];

      if (!!query) {
        query += ';';
      }

      if (d.location) {
        query = query + d.location.lat + ',' + d.location.lng;
      }

      if (d.latitude && d.longitude) {
        query = query + d.latitude + ',' + d.longitude;
      }
    }

    return query;
  },

  /**
   * 计算角度
   */
  rad: function rad(d) {
    return d * Math.PI / 180.0;
  },

  /**
   * 处理终点location数组
   * @return 返回终点数组
   */
  getEndLocation: function getEndLocation(location) {
    var to = location.split(';');
    var endLocation = [];

    for (var i = 0; i < to.length; i++) {
      endLocation.push({
        lat: parseFloat(to[i].split(',')[0]),
        lng: parseFloat(to[i].split(',')[1])
      });
    }

    return endLocation;
  },

  /**
   * 计算两点间直线距离
   * @param a 表示纬度差
   * @param b 表示经度差
   * @return 返回的是距离，单位m
   */
  getDistance: function getDistance(latFrom, lngFrom, latTo, lngTo) {
    var radLatFrom = this.rad(latFrom);
    var radLatTo = this.rad(latTo);
    var a = radLatFrom - radLatTo;
    var b = this.rad(lngFrom) - this.rad(lngTo);
    var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLatFrom) * Math.cos(radLatTo) * Math.pow(Math.sin(b / 2), 2)));
    distance = distance * EARTH_RADIUS;
    distance = Math.round(distance * 10000) / 10000;
    return parseFloat(distance.toFixed(0));
  },

  /**
   * 使用微信接口进行定位
   */
  getWXLocation: function getWXLocation(success, fail, complete) {
    wx.getLocation({
      type: 'gcj02',
      success: success,
      fail: fail,
      complete: complete
    });
  },

  /**
   * 获取location参数
   */
  getLocationParam: function getLocationParam(location) {
    if (typeof location == 'string') {
      var locationArr = location.split(',');

      if (locationArr.length === 2) {
        location = {
          latitude: location.split(',')[0],
          longitude: location.split(',')[1]
        };
      } else {
        location = {};
      }
    }

    return location;
  },

  /**
   * 回调函数默认处理
   */
  polyfillParam: function polyfillParam(param) {
    param.success = param.success || function () {};

    param.fail = param.fail || function () {};

    param.complete = param.complete || function () {};
  },

  /**
   * 验证param对应的key值是否为空
   * 
   * @param {Object} param 接口参数
   * @param {String} key 对应参数的key
   */
  checkParamKeyEmpty: function checkParamKeyEmpty(param, key) {
    if (!param[key]) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key + '参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return true;
    }

    return false;
  },

  /**
   * 验证参数中是否存在检索词keyword
   * 
   * @param {Object} param 接口参数
   */
  checkKeyword: function checkKeyword(param) {
    return !this.checkParamKeyEmpty(param, 'keyword');
  },

  /**
   * 验证location值
   * 
   * @param {Object} param 接口参数
   */
  checkLocation: function checkLocation(param) {
    var location = this.getLocationParam(param.location);

    if (!location || !location.latitude || !location.longitude) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return false;
    }

    return true;
  },

  /**
   * 构造错误数据结构
   * @param {Number} errCode 错误码
   * @param {Number} errMsg 错误描述
   */
  buildErrorConfig: function buildErrorConfig(errCode, errMsg) {
    return {
      status: errCode,
      message: errMsg
    };
  },

  /**
   * 
   * 数据处理函数
   * 根据传入参数不同处理不同数据
   * @param {String} feature 功能名称
   * search 地点搜索
   * suggest关键词提示
   * reverseGeocoder逆地址解析
   * geocoder地址解析
   * getCityList获取城市列表：父集
   * getDistrictByCityId获取区县列表：子集
   * calculateDistance距离计算
   * @param {Object} param 接口参数
   * @param {Object} data 数据
   */
  handleData: function handleData(param, data, feature) {
    if (feature == 'search') {
      var searchResult = data.data;
      var searchSimplify = [];

      for (var i = 0; i < searchResult.length; i++) {
        searchSimplify.push({
          id: searchResult[i].id || null,
          title: searchResult[i].title || null,
          latitude: searchResult[i].location && searchResult[i].location.lat || null,
          longitude: searchResult[i].location && searchResult[i].location.lng || null,
          address: searchResult[i].address || null,
          category: searchResult[i].category || null,
          tel: searchResult[i].tel || null,
          adcode: searchResult[i].ad_info && searchResult[i].ad_info.adcode || null,
          city: searchResult[i].ad_info && searchResult[i].ad_info.city || null,
          district: searchResult[i].ad_info && searchResult[i].ad_info.district || null,
          province: searchResult[i].ad_info && searchResult[i].ad_info.province || null
        });
      }

      param.success(data, {
        searchResult: searchResult,
        searchSimplify: searchSimplify
      });
    } else if (feature == 'suggest') {
      var suggestResult = data.data;
      var suggestSimplify = [];

      for (var i = 0; i < suggestResult.length; i++) {
        suggestSimplify.push({
          adcode: suggestResult[i].adcode || null,
          address: suggestResult[i].address || null,
          category: suggestResult[i].category || null,
          city: suggestResult[i].city || null,
          district: suggestResult[i].district || null,
          id: suggestResult[i].id || null,
          latitude: suggestResult[i].location && suggestResult[i].location.lat || null,
          longitude: suggestResult[i].location && suggestResult[i].location.lng || null,
          province: suggestResult[i].province || null,
          title: suggestResult[i].title || null,
          type: suggestResult[i].type || null
        });
      }

      param.success(data, {
        suggestResult: suggestResult,
        suggestSimplify: suggestSimplify
      });
    } else if (feature == 'reverseGeocoder') {
      var reverseGeocoderResult = data.result;
      var reverseGeocoderSimplify = {
        address: reverseGeocoderResult.address || null,
        latitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lat || null,
        longitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lng || null,
        adcode: reverseGeocoderResult.ad_info && reverseGeocoderResult.ad_info.adcode || null,
        city: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.city || null,
        district: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.district || null,
        nation: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.nation || null,
        province: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.province || null,
        street: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street || null,
        street_number: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street_number || null,
        recommend: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.recommend || null,
        rough: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.rough || null
      };

      if (reverseGeocoderResult.pois) {
        //判断是否返回周边poi
        var pois = reverseGeocoderResult.pois;
        var poisSimplify = [];

        for (var i = 0; i < pois.length; i++) {
          poisSimplify.push({
            id: pois[i].id || null,
            title: pois[i].title || null,
            latitude: pois[i].location && pois[i].location.lat || null,
            longitude: pois[i].location && pois[i].location.lng || null,
            address: pois[i].address || null,
            category: pois[i].category || null,
            adcode: pois[i].ad_info && pois[i].ad_info.adcode || null,
            city: pois[i].ad_info && pois[i].ad_info.city || null,
            district: pois[i].ad_info && pois[i].ad_info.district || null,
            province: pois[i].ad_info && pois[i].ad_info.province || null
          });
        }

        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify,
          pois: pois,
          poisSimplify: poisSimplify
        });
      } else {
        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify
        });
      }
    } else if (feature == 'geocoder') {
      var geocoderResult = data.result;
      var geocoderSimplify = {
        title: geocoderResult.title || null,
        latitude: geocoderResult.location && geocoderResult.location.lat || null,
        longitude: geocoderResult.location && geocoderResult.location.lng || null,
        adcode: geocoderResult.ad_info && geocoderResult.ad_info.adcode || null,
        province: geocoderResult.address_components && geocoderResult.address_components.province || null,
        city: geocoderResult.address_components && geocoderResult.address_components.city || null,
        district: geocoderResult.address_components && geocoderResult.address_components.district || null,
        street: geocoderResult.address_components && geocoderResult.address_components.street || null,
        street_number: geocoderResult.address_components && geocoderResult.address_components.street_number || null,
        level: geocoderResult.level || null
      };
      param.success(data, {
        geocoderResult: geocoderResult,
        geocoderSimplify: geocoderSimplify
      });
    } else if (feature == 'getCityList') {
      var provinceResult = data.result[0];
      var cityResult = data.result[1];
      var districtResult = data.result[2];
      param.success(data, {
        provinceResult: provinceResult,
        cityResult: cityResult,
        districtResult: districtResult
      });
    } else if (feature == 'getDistrictByCityId') {
      var districtByCity = data.result[0];
      param.success(data, districtByCity);
    } else if (feature == 'calculateDistance') {
      var calculateDistanceResult = data.result.elements;
      var distance = [];

      for (var i = 0; i < calculateDistanceResult.length; i++) {
        distance.push(calculateDistanceResult[i].distance);
      }

      param.success(data, {
        calculateDistanceResult: calculateDistanceResult,
        distance: distance
      });
    } else if (feature == 'direction') {
      var direction = data.result.routes;
      param.success(data, direction);
    } else {
      param.success(data);
    }
  },

  /**
   * 构造微信请求参数，公共属性处理
   * 
   * @param {Object} param 接口参数
   * @param {Object} param 配置项
   * @param {String} feature 方法名
   */
  buildWxRequestConfig: function buildWxRequestConfig(param, options, feature) {
    var that = this;
    options.header = {
      "content-type": "application/json"
    };
    options.method = 'GET';

    options.success = function (res) {
      var data = res.data;

      if (data.status === 0) {
        that.handleData(param, data, feature);
      } else {
        param.fail(data);
      }
    };

    options.fail = function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };

    options.complete = function (res) {
      var statusCode = +res.statusCode;

      switch (statusCode) {
        case ERROR_CONF.WX_ERR_CODE:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
            break;
          }

        case ERROR_CONF.WX_OK_CODE:
          {
            var data = res.data;

            if (data.status === 0) {
              param.complete(data);
            } else {
              param.complete(that.buildErrorConfig(data.status, data.message));
            }

            break;
          }

        default:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));
          }
      }
    };

    return options;
  },

  /**
   * 处理用户参数是否传入坐标进行不同的处理
   */
  locationProcess: function locationProcess(param, locationsuccess, locationfail, locationcomplete) {
    var that = this;

    locationfail = locationfail || function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };

    locationcomplete = locationcomplete || function (res) {
      if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {
        param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
      }
    };

    if (!param.location) {
      that.getWXLocation(locationsuccess, locationfail, locationcomplete);
    } else if (that.checkLocation(param)) {
      var location = Utils.getLocationParam(param.location);
      locationsuccess(location);
    }
  }
};

var QQMapWX = /*#__PURE__*/function () {
  /**
   * 构造函数
   * 
   * @param {Object} options 接口参数,key 为必选参数
   */
  function QQMapWX(options) {
    Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, QQMapWX);

    if (!options.key) {
      throw Error('key值不能为空');
    }

    this.key = options.key;
  }

  Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(QQMapWX, [{
    key: "search",

    /**
     * POI周边检索
     *
     * @param {Object} options 接口参数对象
     * 
     * 参数对象结构可以参考
     * @see http://lbs.qq.com/webservice_v1/guide-search.html
     */
    value: function search(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (!Utils.checkKeyword(options)) {
        return;
      }

      var requestParam = {
        keyword: options.keyword,
        orderby: options.orderby || '_distance',
        page_size: options.page_size || 10,
        page_index: options.page_index || 1,
        output: 'json',
        key: that.key
      };

      if (options.address_format) {
        requestParam.address_format = options.address_format;
      }

      if (options.filter) {
        requestParam.filter = options.filter;
      }

      var distance = options.distance || "1000";
      var auto_extend = options.auto_extend || 1;
      var region = null;
      var rectangle = null; //判断城市限定参数

      if (options.region) {
        region = options.region;
      } //矩形限定坐标(暂时只支持字符串格式)


      if (options.rectangle) {
        rectangle = options.rectangle;
      }

      var locationsuccess = function locationsuccess(result) {
        if (region && !rectangle) {
          //城市限定参数拼接
          requestParam.boundary = "region(" + region + "," + auto_extend + "," + result.latitude + "," + result.longitude + ")";

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        } else if (rectangle && !region) {
          //矩形搜索
          requestParam.boundary = "rectangle(" + rectangle + ")";

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        } else {
          requestParam.boundary = "nearby(" + result.latitude + "," + result.longitude + "," + distance + "," + auto_extend + ")";

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        }

        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_SEARCH,
          data: requestParam
        }, 'search'));
      };

      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "getSuggestion",

    /**
     * sug模糊检索
     *
     * @param {Object} options 接口参数对象
     * 
     * 参数对象结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-suggestion.html
     */
    value: function getSuggestion(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (!Utils.checkKeyword(options)) {
        return;
      }

      var requestParam = {
        keyword: options.keyword,
        region: options.region || '全国',
        region_fix: options.region_fix || 0,
        policy: options.policy || 0,
        page_size: options.page_size || 10,
        //控制显示条数
        page_index: options.page_index || 1,
        //控制页数
        get_subpois: options.get_subpois || 0,
        //返回子地点
        output: 'json',
        key: that.key
      }; //长地址

      if (options.address_format) {
        requestParam.address_format = options.address_format;
      } //过滤


      if (options.filter) {
        requestParam.filter = options.filter;
      } //排序


      if (options.location) {
        var locationsuccess = function locationsuccess(result) {
          requestParam.location = result.latitude + ',' + result.longitude;

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
          }

          wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_SUGGESTION,
            data: requestParam
          }, "suggest"));
        };

        Utils.locationProcess(options, locationsuccess);
      } else {
        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
        }

        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_SUGGESTION,
          data: requestParam
        }, "suggest"));
      }
    }
  }, {
    key: "reverseGeocoder",

    /**
     * 逆地址解析
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-gcoder.html
     */
    value: function reverseGeocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        coord_type: options.coord_type || 5,
        get_poi: options.get_poi || 0,
        output: 'json',
        key: that.key
      };

      if (options.poi_options) {
        requestParam.poi_options = options.poi_options;
      }

      var locationsuccess = function locationsuccess(result) {
        requestParam.location = result.latitude + ',' + result.longitude;

        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'reverseGeocoder');
        }

        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_GET_GEOCODER,
          data: requestParam
        }, 'reverseGeocoder'));
      };

      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "geocoder",

    /**
     * 地址解析
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-geocoder.html
     */
    value: function geocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'address')) {
        return;
      }

      var requestParam = {
        address: options.address,
        output: 'json',
        key: that.key
      }; //城市限定

      if (options.region) {
        requestParam.region = options.region;
      }

      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'geocoder');
      }

      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_GET_GEOCODER,
        data: requestParam
      }, 'geocoder'));
    }
  }, {
    key: "getCityList",

    /**
     * 获取城市列表
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-region.html
     */
    value: function getCityList(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        output: 'json',
        key: that.key
      };

      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getCityList');
      }

      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_CITY_LIST,
        data: requestParam
      }, 'getCityList'));
    }
  }, {
    key: "getDistrictByCityId",

    /**
     * 获取对应城市ID的区县列表
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-region.html
     */
    value: function getDistrictByCityId(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'id')) {
        return;
      }

      var requestParam = {
        id: options.id || '',
        output: 'json',
        key: that.key
      };

      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getDistrictByCityId');
      }

      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_AREA_LIST,
        data: requestParam
      }, 'getDistrictByCityId'));
    }
  }, {
    key: "calculateDistance",

    /**
     * 用于单起点到多终点的路线距离(非直线距离)计算：
     * 支持两种距离计算方式：步行和驾车。
     * 起点到终点最大限制直线距离10公里。
     *
     * 新增直线距离计算。
     * 
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-distance.html
     */
    value: function calculateDistance(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }

      var requestParam = {
        mode: options.mode || 'walking',
        to: Utils.location2query(options.to),
        output: 'json',
        key: that.key
      };

      if (options.from) {
        options.location = options.from;
      } //计算直线距离


      if (requestParam.mode == 'straight') {
        var locationsuccess = function locationsuccess(result) {
          var locationTo = Utils.getEndLocation(requestParam.to); //处理终点坐标

          var data = {
            message: "query ok",
            result: {
              elements: []
            },
            status: 0
          };

          for (var i = 0; i < locationTo.length; i++) {
            data.result.elements.push({
              //将坐标存入
              distance: Utils.getDistance(result.latitude, result.longitude, locationTo[i].lat, locationTo[i].lng),
              duration: 0,
              from: {
                lat: result.latitude,
                lng: result.longitude
              },
              to: {
                lat: locationTo[i].lat,
                lng: locationTo[i].lng
              }
            });
          }

          var calculateResult = data.result.elements;
          var distanceResult = [];

          for (var i = 0; i < calculateResult.length; i++) {
            distanceResult.push(calculateResult[i].distance);
          }

          return options.success(data, {
            calculateResult: calculateResult,
            distanceResult: distanceResult
          });
        };

        Utils.locationProcess(options, locationsuccess);
      } else {
        var locationsuccess = function locationsuccess(result) {
          requestParam.from = result.latitude + ',' + result.longitude;

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'calculateDistance');
          }

          wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_DISTANCE,
            data: requestParam
          }, 'calculateDistance'));
        };

        Utils.locationProcess(options, locationsuccess);
      }
    }
  }, {
    key: "direction",

    /**
     * 路线规划：
     * 
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * https://lbs.qq.com/webservice_v1/guide-road.html
     */
    value: function direction(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }

      var requestParam = {
        output: 'json',
        key: that.key
      }; //to格式处理

      if (typeof options.to == 'string') {
        requestParam.to = options.to;
      } else {
        requestParam.to = options.to.latitude + ',' + options.to.longitude;
      } //初始化局部请求域名


      var SET_URL_DIRECTION = null; //设置默认mode属性

      options.mode = options.mode || MODE.driving; //设置请求域名

      SET_URL_DIRECTION = URL_DIRECTION + options.mode;

      if (options.from) {
        options.location = options.from;
      }

      if (options.mode == MODE.driving) {
        if (options.from_poi) {
          requestParam.from_poi = options.from_poi;
        }

        if (options.heading) {
          requestParam.heading = options.heading;
        }

        if (options.speed) {
          requestParam.speed = options.speed;
        }

        if (options.accuracy) {
          requestParam.accuracy = options.accuracy;
        }

        if (options.road_type) {
          requestParam.road_type = options.road_type;
        }

        if (options.to_poi) {
          requestParam.to_poi = options.to_poi;
        }

        if (options.from_track) {
          requestParam.from_track = options.from_track;
        }

        if (options.waypoints) {
          requestParam.waypoints = options.waypoints;
        }

        if (options.policy) {
          requestParam.policy = options.policy;
        }

        if (options.plate_number) {
          requestParam.plate_number = options.plate_number;
        }
      }

      if (options.mode == MODE.transit) {
        if (options.departure_time) {
          requestParam.departure_time = options.departure_time;
        }

        if (options.policy) {
          requestParam.policy = options.policy;
        }
      }

      var locationsuccess = function locationsuccess(result) {
        requestParam.from = result.latitude + ',' + result.longitude;

        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'direction', options.mode);
        }

        wx.request(Utils.buildWxRequestConfig(options, {
          url: SET_URL_DIRECTION,
          data: requestParam
        }, 'direction'));
      };

      Utils.locationProcess(options, locationsuccess);
    }
  }]);

  return QQMapWX;
}();

;
/* harmony default export */ __webpack_exports__["a"] = (new QQMapWX({
  key: 'B46BZ-TDXKW-Q5WRQ-OIKGT-UCW4K-6QBXD'
}));

/***/ }),

/***/ "./src/utils/tool.js":
/*!***************************!*\
  !*** ./src/utils/tool.js ***!
  \***************************/
/*! exports provided: promisify, promiseImage, isChinese, handleName, emoj2str, getCurrentPageUrl, formatTime, formatNumber, logError, Toast */
/*! exports used: Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export promisify */
/* unused harmony export promiseImage */
/* unused harmony export isChinese */
/* unused harmony export handleName */
/* unused harmony export emoj2str */
/* unused harmony export getCurrentPageUrl */
/* unused harmony export formatTime */
/* unused harmony export formatNumber */
/* unused harmony export logError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);



var promisify = function promisify(func, ctx) {
  // 返回一个新的function
  return function () {
    var _arguments = arguments;
    // 初始化this作用域
    var ctx = ctx || this; // 新方法返回的promise

    return new Promise(function (resolve, reject) {
      // 调用原来的非promise方法func，绑定作用域，传参，以及callback（callback为func的最后一个参数）
      func.call.apply(func, [ctx].concat(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_arguments), [function () {
        // 将回调函数中的的第一个参数error单独取出
        var args = Array.prototype.map.call(arguments, function (item) {
          return item;
        });
        var err = args.shift(); // 判断是否有error

        if (err) {
          reject(err);
        } else {
          // 没有error则将后续参数resolve出来
          args = args.length > 1 ? args : args[0];
          resolve(args);
        }
      }]));
    });
  };
};
var promiseImage = function promiseImage(url) {
  return new Promise(function (resolve, reject) {
    resolve(url);
  });
};
var isChinese = function isChinese(str) {
  if (escape(str).indexOf("%u") < 0) return false;
  return true;
};
var handleName = function handleName(str) {
  var res = emoj2str(str);

  if (isChinese(res)) {
    res = res.length > 4 ? res.slice(0, 4) + '...' : res;
  } else {
    res = res.length > 7 ? res.slice(0, 7) + '...' : res;
  }

  return res;
};
var emoj2str = function emoj2str(str) {
  return unescape(escape(str).replace(/\%uD.{3}/g, ''));
};
/*获取当前页url*/

var getCurrentPageUrl = function getCurrentPageUrl() {
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  var url = currentPage.route;
  return url;
};
var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};
var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};
var logError = function logError(name, action, info) {
  if (!info) {
    info = 'empty';
  }

  try {
    var deviceInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getSystemInfoSync();
    var device = JSON.stringify(deviceInfo);
  } catch (e) {
    console.error('not support getSystemInfoSync api', err.message);
  }

  var time = formatTime(new Date());
  console.error(time, name, action, info, device); // if (typeof action !== 'object') {
  // fundebug.notify(name, action, info)
  // }
  // fundebug.notifyError(info, { name, action, device, time })

  if (Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(info) === 'object') {
    info = JSON.stringify(info);
  }
};
var Toast = function Toast() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'null';
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
  var mask = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.showToast({
    title: title,
    icon: icon,
    duration: duration,
    mask: mask
  });
};

/***/ })

}]);
//# sourceMappingURL=common.js.map