(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/location/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/location/index.jsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/location/index.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
/* harmony import */ var _Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _utils_QQMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/QQMap */ "./src/utils/QQMap.js");
/* harmony import */ var _utils_tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/tool */ "./src/utils/tool.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/pages/location/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);







function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      filterList = _useState2[0],
      setFilterList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      cityList = _useState4[0],
      setCityList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = Object(_Users_sulei_Desktop_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
      city = _useState6[0],
      setCity = _useState6[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useDidShow"])(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.setNavigationBarTitle({
      title: "位置"
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request({
      url: "http://apis.map.qq.com/ws/district/v1/list",
      method: 'GET',
      data: {
        key: 'B46BZ-TDXKW-Q5WRQ-OIKGT-UCW4K-6QBXD'
      },
      success: function success(res) {
        if (res.statusCode === 200) {
          setCityList(res.data.result[0].map(function (v) {
            return v.fullname;
          }));
          setCity(res.data.result[0][0].fullname);
        } else {
          Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__[/* Toast */ "a"])('失败', 'none', 1000);
        }
      }
    });
  });

  function inputText(e) {
    console.log(e.detail.value, "e");

    if (e.detail.value === '') {
      setFilterList([]);
    } else {
      _utils_QQMap__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].search({
        keyword: e.detail.value,
        region: city,
        complete: function complete(res) {
          setFilterList(res.data);
        }
      });
    }
  }

  function tapAddress(params) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
      url: "/pages/map/index?search=".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.Current.router.params.search, "&title=").concat(params.title, "&lat=").concat(params.location.lat, "&lng=").concat(params.location.lng)
    });
    setFilterList([]);
  }

  function onChangeCity(e) {
    setCity(cityList[e.detail.value]);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "n"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "n"], {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "n"], {
    className: "city"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Picker */ "i"], {
    mode: "selector",
    range: cityList,
    onChange: function onChange(e) {
      onChangeCity(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "n"], {
    className: "picker"
  }, city))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Input */ "g"], {
    class: "address",
    type: "search",
    onInput: function onInput(e) {
      inputText(e);
    },
    placeholder: "\u8BF7\u8F93\u5165"
  })), filterList && filterList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "n"], {
      className: "item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* CoverImage */ "b"], {
      className: "img",
      src: "../../assets/image/ditu.png"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "n"], {
      className: "text",
      key: item.id,
      onTap: function onTap() {
        tapAddress(item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "l"], {
      className: "title"
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "l"], {
      className: "value"
    }, item.address)));
  }));
}

/***/ }),

/***/ "./src/pages/location/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/location/index.jsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/location/index.jsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/location/index', {}, config || {}))



/***/ }),

/***/ "./src/pages/location/index.less":
/*!***************************************!*\
  !*** ./src/pages/location/index.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/location/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map