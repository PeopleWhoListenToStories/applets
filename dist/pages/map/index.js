(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/map/index"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/map/index.jsx":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/map/index.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _components_start_end_form_StartEndForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/start-end-form/StartEndForm */ "./src/pages/components/start-end-form/StartEndForm.jsx");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
/* harmony import */ var _utils_QQMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/QQMap */ "./src/utils/QQMap.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.less */ "./src/pages/map/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);











var defaultTraffic = [{
  index: 0,
  name: '驾车',
  EN: 'driving'
}, {
  index: 1,
  name: '步行',
  EN: 'walking'
}, {
  index: 2,
  name: '骑行',
  EN: 'bicycling'
}, {
  index: 3,
  name: '公交',
  EN: 'transit'
}];

var Login = function Login() {
  var _useState5;

  var Location = _store_index__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Location;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(defaultTraffic),
      _useState2 = Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      typeArray = _useState2[0],
      setType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])((_useState5 = {
    showScale: false,
    subKey: '',
    enable3D: false,
    latitude: 40.07497505239997,
    //中心经度
    longitude: 116.33617818879702,
    // 中心纬度
    layerStyle: 1,
    rotate: 0,
    // 否	旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角	2.5.0
    skew: 50,
    // 否	倾斜角度，范围 0 ~40, 关于 z 轴的倾角	2.5.0
    scale: 12,
    // 缩放级别，取值范围为3-20
    minScale: 3,
    //否	最小缩放级别
    maxScale: 20,
    //否	最大缩放级别
    showLocation: true
  }, Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, "showScale", true), Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, "showCompass", true), Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, "enableOverlooking", true), Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, "enableZoom", true), Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, "enableScroll", true), Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, "enableRotate", true), Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, "enableSatellite", false), Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, "enableTraffic", false), Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, "markers", []), Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, "polyline", []), _useState5)),
      _useState4 = Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      setting = _useState4[0],
      setSetting = _useState4[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('驾车'),
      _useState7 = Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState6, 2),
      traffic = _useState7[0],
      setTraffic = _useState7[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useDidShow"])(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setNavigationBarTitle({
      title: "地理位置"
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getLocation();
    return function () {};
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return function () {};
  }, Location.markers);

  function getLocation() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getLocation({
      type: 'wgs84 '
    }).then(function (data) {
      // console.log(data, "getLocation")
      if (data.errMsg === "getLocation:ok") {
        console.log(data, "resdata");
        setSetting(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, setting), {}, {
          latitude: data.latitude,
          longitude: data.longitude,
          scale: 12
        }));
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.showToast({
          title: '获取当前位置失败',
          duration: 2000,
          icon: 'none',
          mask: false
        });
      }
    });
  }

  function onTap(e) {
    setSetting(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, setting), {}, {
      latitude: e.detail.latitude,
      longitude: e.detail.longitude
    }));
  } // 获取当前位置


  function clickLocation() {
    if (!Location.startAddress.title || !Location.endAddress.title) {
      getLocation();
      return;
    }

    var params = {
      latitudeS: Location.startAddress.lat,
      longitudeS: Location.startAddress.lng,
      latitudeE: Location.endAddress.lat,
      longitudeE: Location.endAddress.lng,
      mode: defaultTraffic.find(function (item) {
        return item.name === traffic;
      }).EN
    };
    changeDirection(params);
  } // 获取路线


  function changeDirection(params) {
    _utils_QQMap__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].direction({
      mode: params.mode,
      from: {
        latitude: params.latitudeS,
        longitude: params.longitudeS
      },
      to: {
        latitude: params.latitudeE,
        longitude: params.longitudeE
      },
      success: function success(res) {
        // 大于1 代表是公交方式需要另外处理
        if (!res.result.routes[0].mode) {
          var data = Object.keys(res.result.routes).map(function (index) {
            return Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, res.result.routes[index]), {}, {
              steps: res.result.routes[index].steps.map(function (item) {
                if (item.mode !== 'TRANSIT') {
                  return Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, item), {}, {
                    polyline: formatPolyline(item.polyline)
                  });
                } else {
                  return Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, item), {}, {
                    lines: item.lines.map(function (child) {
                      return Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, child), {}, {
                        polyline: formatPolyline(child.polyline)
                      });
                    })
                  });
                }
              })
            });
          });
          var polyline = [],
              markers = [{
            id: 1,
            latitude: params.latitudeS,
            longitude: params.longitudeS,
            callout: {
              content: Location.startAddress.title,
              padding: 5,
              display: 'ALWAYS',
              textAlign: 'center'
            }
          }, {
            id: 2,
            latitude: params.latitudeE,
            longitude: params.longitudeE,
            callout: {
              content: Location.endAddress.title,
              padding: 5,
              display: 'ALWAYS',
              textAlign: 'center'
            }
          }];
          data[0].steps.map(function (item) {
            if (item.mode === 'WALKING') {
              polyline.push({
                points: item.polyline,
                color: "#FF6347",
                width: 9,
                dottedLine: true
              });
            } else {
              item.lines.forEach(function (child, index) {
                child.stations.map(function (val) {
                  markers.push({
                    id: val.id,
                    latitude: val.location.lat,
                    longitude: val.location.lng,
                    zIndex: 100,
                    width: 0,
                    height: 0,
                    clusterId: val.id,
                    // 必须
                    label: {
                      fontSize: 8,
                      width: 10,
                      height: 10,
                      bgColor: '#fff',
                      borderRadius: 30,
                      textAlign: 'center',
                      anchorX: 0,
                      anchorY: 10
                    }
                  });
                });
                polyline.push({
                  points: child.polyline,
                  color: "#4395ff",
                  width: 9,
                  dottedLine: false,
                  arrowLine: true,
                  //带箭头的线
                  borderWidth: 1,
                  //线的边框宽度
                  borderColor: '#ccc'
                });
              });
            }
          });
          setSetting(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, setting), {}, {
            markers: markers,
            polyline: polyline
          }));
        } else {
          var coors = res.result.routes[0].polyline,
              points = [],
              scale = 12;

          for (var i = 2; i < coors.length; i++) {
            coors[i] = coors[i - 2] + coors[i] / 1000000;
          }

          for (var key = 0; key < coors.length; key += 2) {
            points.push({
              latitude: coors[key],
              longitude: coors[key + 1]
            });
          }

          var value = res.result.routes[0].distance / 1000;

          switch (value) {
            case value < 10 && value >= 0:
              scale = 19;
              break;

            case value < 20 && value >= 10:
              scale = 15;
              break;

            case value < 30 && value >= 20:
              scale = 10;
              break;

            case value < 40 && value >= 30:
              scale = 7;
              break;

            default:
              scale = 12;
              break;
          }

          setSetting(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, setting), {}, {
            scale: scale,
            latitude: params.latitudeS,
            longitude: params.longitudeS,
            markers: [{
              id: 1,
              latitude: +params.latitudeS,
              longitude: +params.longitudeS,
              callout: {
                content: Location.startAddress.title,
                padding: 5,
                display: 'ALWAYS',
                textAlign: 'center'
              }
            }, {
              id: 2,
              latitude: +params.latitudeE,
              longitude: +params.longitudeE,
              callout: {
                content: Location.endAddress.title,
                padding: 5,
                display: 'ALWAYS',
                textAlign: 'center'
              }
            }],
            polyline: [{
              points: points,
              color: "#4395ff",
              width: 10,
              dottedLine: false,
              arrowLine: true,
              //带箭头的线
              borderWidth: 1,
              //线的边框宽度
              borderColor: '#ccc'
            }]
          }));
        }
      }
    });
  } // 修改setting 配置参数


  function checkSettingProps(e, type) {
    setSetting(Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, type, !setting[type]));
  }

  function bindPickerChange(event) {
    var value = event.mpEvent.detail.value;
    setTraffic(defaultTraffic[value].name);
    clickLocation();
  }

  function formatPolyline(polyline) {
    var coors = polyline,
        points = [];

    for (var i = 2; i < coors.length; i++) {
      coors[i] = coors[i - 2] + coors[i] / 1000000;
    }

    for (var key = 0; key < coors.length; key += 2) {
      points.push({
        latitude: coors[key],
        longitude: coors[key + 1]
      });
    }

    return points;
  }

  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__[/* useObserver */ "d"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
      id: "login"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
      className: "nav"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("picker", {
      onChange: function onChange(e) {
        bindPickerChange(e);
      },
      range: typeArray,
      "range-key": "name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("view", {
      class: "picker"
    }, traffic)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_start_end_form_StartEndForm__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
      class: "map-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Map */ "h"], {
      id: "map",
      scale: setting.scale,
      markers: setting.markers,
      polyline: setting.polyline,
      "show-location": true,
      onClick: function onClick(e) {
        onTap(e);
      },
      setting: setting,
      includePoints: setting.markers
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* CoverView */ "c"], {
      className: "weixing",
      onClick: function onClick(e) {
        checkSettingProps(e, 'enableSatellite');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* CoverImage */ "b"], {
      className: "img",
      src: "../../assets/image/".concat(setting.enableSatellite ? 'weixingfasheSVG' : 'weixingtanceSVG', ".png")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* CoverView */ "c"], {
      className: "lukuang",
      onClick: function onClick(e) {
        checkSettingProps(e, 'enableTraffic');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* CoverImage */ "b"], {
      className: "img",
      src: "../../assets/image/".concat(setting.enableTraffic ? 'toggle' : 'lukuang', ".png")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* CoverView */ "c"], {
      className: "dingwei",
      onClick: function onClick() {
        clickLocation();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* CoverImage */ "b"], {
      className: "img",
      src: "../../assets/image/ditu.png"
    })))));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),

/***/ "./src/pages/components/start-end-form/StartEndForm.jsx":
/*!**************************************************************!*\
  !*** ./src/pages/components/start-end-form/StartEndForm.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartEndForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/index */ "./src/store/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./src/pages/components/start-end-form/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);






function StartEndForm() {
  var _this = this;

  var Location = _store_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Location;

  function changeText(e, type) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo({
      url: "/pages/location/index?search=".concat(type)
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    switch (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.Current.router.params.search) {
      case 'startAddress':
        Location.setStartAddress({
          title: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.Current.router.params.title,
          lat: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.Current.router.params.lat,
          lng: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.Current.router.params.lng
        });
        break;

      case 'endAddress':
        Location.setEndAddress({
          title: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.Current.router.params.title,
          lat: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.Current.router.params.lat,
          lng: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.Current.router.params.lng
        });
        break;

      default:
        return;
    }

    return function () {};
  }, []);
  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[/* useObserver */ "d"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Form */ "d"], {
      onSubmit: function onSubmit() {},
      onReset: function onReset() {
        _this.formReset();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "n"], {
      className: "input-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "g"], {
      class: "input",
      value: Location.startAddress.title,
      type: "search",
      onClick: function onClick(e) {
        changeText(e, "startAddress");
      },
      placeholder: "\u8F93\u5165\u8D77\u59CB\u4F4D\u7F6E"
    }), "-", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "g"], {
      class: "input",
      value: Location.endAddress.title,
      type: "search",
      onClick: function onClick(e) {
        changeText(e, "endAddress");
      },
      placeholder: "\u8F93\u5165\u7ED3\u675F\u4F4D\u7F6E"
    })));
  });
}

/***/ }),

/***/ "./src/pages/components/start-end-form/index.less":
/*!********************************************************!*\
  !*** ./src/pages/components/start-end-form/index.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/map/index.jsx":
/*!*********************************!*\
  !*** ./src/pages/map/index.jsx ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/map/index.jsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/map/index', {}, config || {}))



/***/ }),

/***/ "./src/pages/map/index.less":
/*!**********************************!*\
  !*** ./src/pages/map/index.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/map/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map