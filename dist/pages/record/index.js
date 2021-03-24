(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/record/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/record/index.tsx":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/record/index.tsx ***!
  \*****************************************************************************************************/
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
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _utils_tool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/tool */ "./src/utils/tool.ts");
/* harmony import */ var _components_createFlag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/createFlag */ "./src/pages/record/components/createFlag.tsx");
/* harmony import */ var _components_Histogram_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Histogram/index */ "./src/components/Histogram/index.tsx");
/* harmony import */ var _service_apiModules_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/apiModules/api */ "./src/service/apiModules/api.js");
/* harmony import */ var taro_ui_dist_style_components_swipe_action_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! taro-ui/dist/style/components/swipe-action.scss */ "./node_modules/taro-ui/dist/style/components/swipe-action.scss");
/* harmony import */ var taro_ui_dist_style_components_swipe_action_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_swipe_action_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../config */ "./config/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.scss */ "./src/pages/record/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_13__);















var Record = function Record() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(['今日', '全部', '图表']),
      _useState2 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      navMenu = _useState2[0],
      setNavMenu = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('今日'),
      _useState4 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      currentMenu = _useState4[0],
      setCurrentMenu = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      todayList = _useState6[0],
      setTodayList = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState8 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState7, 2),
      allList = _useState8[0],
      setAllList = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState10 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState9, 2),
      chartList = _useState10[0],
      setChartList = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState12 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState11, 2),
      off = _useState12[0],
      setOff = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()]),
      _useState14 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState13, 2),
      date = _useState14[0],
      setDate = _useState14[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useDidShow"])(function () {
    getList();
    getChartList();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.setNavigationBarTitle({
      title: "每日一记"
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getAllList();
    return function () {};
  }, [date]);

  function getList() {
    return _getList.apply(this, arguments);
  }

  function _getList() {
    _getList = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var result;
      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_service_apiModules_api__WEBPACK_IMPORTED_MODULE_10__[/* getRecordList */ "d"])();

            case 2:
              result = _context.sent;

              if (result.data.status === 200) {
                setTodayList(result.data.data);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getList.apply(this, arguments);
  }

  function getAllList() {
    return _getAllList.apply(this, arguments);
  }

  function _getAllList() {
    _getAllList = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var result;
      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_service_apiModules_api__WEBPACK_IMPORTED_MODULE_10__[/* getRecordAllList */ "c"])({
                year: date[0],
                month: date[1],
                day: date[2]
              });

            case 2:
              result = _context2.sent;

              if (result.data.status === 200) {
                setAllList(result.data.data);
              } else {
                setAllList([]);
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getAllList.apply(this, arguments);
  }

  function getChartList() {
    return _getChartList.apply(this, arguments);
  }

  function _getChartList() {
    _getChartList = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var result;
      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_service_apiModules_api__WEBPACK_IMPORTED_MODULE_10__[/* getRecordMonthList */ "e"])({
                year: date[0],
                month: date[1]
              });

            case 2:
              result = _context3.sent;

              if (result.data.status === 200) {
                setChartList(result.data.data);
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getChartList.apply(this, arguments);
  }

  function changeStatus(_x, _x2, _x3) {
    return _changeStatus.apply(this, arguments);
  }

  function _changeStatus() {
    _changeStatus = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(status, user_id, type_id) {
      var result;
      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_service_apiModules_api__WEBPACK_IMPORTED_MODULE_10__[/* recordChangeStatus */ "f"])({
                status: +status === 1 ? 0 : 1,
                user_id: user_id,
                type_id: type_id
              });

            case 2:
              result = _context4.sent;

              if (result.data.status === 200) {
                getList();
              }

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _changeStatus.apply(this, arguments);
  }

  function showCreateFlag(type) {
    setOff(type === 'close' ? false : true);
    getList();
  }

  function onDateChange(e) {
    var searchDate = e.detail.value.split('-');
    setDate([searchDate[0], searchDate[1].startsWith('0') ? searchDate[1].substr(1) : searchDate[1], searchDate[2].startsWith('0') ? searchDate[2].substr(1) : searchDate[2]]);
  }

  function setMenu(index) {
    setCurrentMenu(navMenu[index]);

    switch (index) {
      case 0:
        getList();
        break;

      case 1:
        getAllList();
        break;

      case 2:
        getChartList();
        break;

      default:
        break;
    }
  }

  function handleClick(_x4, _x5) {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(e, type_id) {
      var _yield$removeFlagType, data, timer;

      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(e.text === '确认')) {
                _context5.next = 6;
                break;
              }

              _context5.next = 3;
              return Object(_service_apiModules_api__WEBPACK_IMPORTED_MODULE_10__[/* removeFlagType */ "h"])(type_id);

            case 3:
              _yield$removeFlagType = _context5.sent;
              data = _yield$removeFlagType.data;

              if (data.status === 200) {
                Object(_utils_tool__WEBPACK_IMPORTED_MODULE_7__[/* Toast */ "a"])('删除成功', 'success', 500);
                timer = setTimeout(function () {
                  getList();
                  clearTimeout(timer);
                }, 300);
              }

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleAllClick(_x6, _x7) {
    return _handleAllClick.apply(this, arguments);
  }

  function _handleAllClick() {
    _handleAllClick = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(e, type_id) {
      var _yield$removeDayFlagT, data, timer;

      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(e.text === '确认')) {
                _context6.next = 6;
                break;
              }

              _context6.next = 3;
              return Object(_service_apiModules_api__WEBPACK_IMPORTED_MODULE_10__[/* removeDayFlagType */ "g"])({
                type_id: type_id,
                updateTime: date[0] + '-' + date[1] + '-' + date[2]
              });

            case 3:
              _yield$removeDayFlagT = _context6.sent;
              data = _yield$removeDayFlagT.data;

              if (data.status === 200) {
                Object(_utils_tool__WEBPACK_IMPORTED_MODULE_7__[/* Toast */ "a"])('删除成功', 'success', 500);
                timer = setTimeout(function () {
                  getAllList();
                  clearTimeout(timer);
                }, 300);
              }

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _handleAllClick.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "record"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "recoed_nav"
  }, navMenu.map(function (navName, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      className: 'text ' + (currentMenu === navName ? 'text-active' : ''),
      key: navName,
      onClick: function onClick() {
        setMenu(index);
      }
    }, navName);
  })), off ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_createFlag__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    close: function close() {
      return showCreateFlag('close');
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "content"
  }, currentMenu === '全部' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "page-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Picker"], {
    mode: "date",
    onChange: function onChange(e) {
      onDateChange(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "picker"
  }, date[0], " - ", date[1], " - ", date[2]))), currentMenu === '今日' && (todayList.length ? todayList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtSwipeAction"], {
      autoClose: true,
      onClick: function onClick(e) {
        handleClick(e, item.type_id);
      },
      options: [{
        text: '取消',
        style: {
          backgroundColor: '#6190E8'
        }
      }, {
        text: '确认',
        style: {
          backgroundColor: '#FF4949'
        }
      }]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "normal item",
      key: item.user_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Text"], null, " ", item.label, "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["RadioGroup"], {
      onChange: function onChange() {
        changeStatus(item.status, item.user_id, item.type_id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
      checked: item.status === '1'
    }))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["CoverImage"], {
    className: "img",
    src: global.constants.icon.zanwushujuIcon
  })), currentMenu === '全部' && (allList.length ? allList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_5__["AtSwipeAction"], {
      autoClose: true,
      onClick: function onClick(e) {
        handleAllClick(e, item.type_id);
      },
      options: [{
        text: '取消',
        style: {
          backgroundColor: '#6190E8'
        }
      }, {
        text: '确认',
        style: {
          backgroundColor: '#FF4949'
        }
      }]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "item",
      key: item.user_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Text"], null, " ", item.label, "  "), item.status === '1' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
      size: "20",
      type: "success"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
      size: "20",
      type: "waiting"
    })));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["CoverImage"], {
    className: "img",
    src: global.constants.icon.zanwushujuIcon
  }))), !off && currentMenu === '今日' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "createFlag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    size: "mini",
    type: "primary",
    plain: true,
    onClick: function onClick() {
      showCreateFlag('show');
    }
  }, "Flag")), !off && currentMenu === '图表' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Histogram_index__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    defaultData: chartList
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Record);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/components/Histogram/index.scss":
/*!*********************************************!*\
  !*** ./src/components/Histogram/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Histogram/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Histogram/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/components/Histogram/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);







var Histogram = function Histogram(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    screenWidth: 375,
    screenHeight: 500
  }),
      _useState2 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      defaultState = _useState2[0],
      setDefaultState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var info = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getSystemInfoSync();
    setDefaultState({
      screenWidth: info.screenWidth,
      screenHeight: 500 //info.screenHeight,

    });
  }, []);
  goBarChart(props.defaultData); //封装绘制图表的方法

  function goBarChart(params) {
    // 获得canvas上下文
    var ctx = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.createCanvasContext('Histogram', this);
    var initObj = {
      myCanvas: null,
      width: defaultState.screenWidth,
      height: defaultState.screenHeight,
      cWidth: 0,
      cHeight: 0,
      cMargin: 20,
      cSpace: 20,
      originX: null,
      originY: null,
      bMargin: 15,
      tobalBars: null,
      bWidth: null,
      maxValue: 0,
      totalYNomber: 10,
      ctr: 1,
      numctr: 100,
      speed: 10,
      gradient: null,
      xTitle: params.xTitle || '',
      yTitle: params.yTitle || ''
    };

    if (ctx && ctx._context) {
      initObj.myCanvas = ctx._context.canvas;
    } else {
      initObj.myCanvas = ctx;
    } //鼠标移动


    var mousePosition = {}; //     // 图表信息

    initObj.cHeight = initObj.height - initObj.cMargin * 2 - initObj.cSpace;
    initObj.cWidth = initObj.width - initObj.cMargin * 2 - initObj.cSpace;
    initObj.originX = initObj.cMargin + initObj.cSpace;
    initObj.originY = initObj.cMargin + initObj.cHeight; //     // 柱状图信息

    initObj.tobalBars = params.dataArr.length;
    initObj.bWidth = parseInt(initObj.cWidth / initObj.tobalBars - initObj.bMargin + '');

    for (var i = 0; i < params.dataArr.length; i++) {
      var barVal = parseInt(params.dataArr[i][1]);

      if (barVal > initObj.maxValue) {
        initObj.maxValue = barVal;
      }
    }

    initObj.maxValue += 50; // //柱状图渐变色

    initObj.gradient = ctx.createLinearGradient(0, 0, 0, 300);
    initObj.gradient.addColorStop(0, 'green');
    initObj.gradient.addColorStop(1, 'rgba(67,203,36,1)');
    drawLineLabelMarkers(ctx, initObj); // 绘制标记

    drawMarkers(ctx, params.dataArr, initObj); //绘制柱形图

    drawBarAnimate(ctx, params.dataArr, initObj, false); // 绘制柱状图的动画
    //检测鼠标移动
    // var mouseTimer: any = null;
    // initObj.myCanvas.addEventListener("touchmove", function (e) {
    //     e = e || window.event;
    //     if (e.layerX || e.layerX == 0) {
    //         initObj.mousePosition.x = e.layerX;
    //         initObj.mousePosition.y = e.layerY;
    //     } else if (e.offsetX || e.offsetX == 0) {
    //         initObj.mousePosition.x = e.offsetX;
    //         initObj.mousePosition.y = e.offsetY;
    //     }
    //     clearTimeout(mouseTimer);
    //     mouseTimer = setTimeout(function () {
    //         ctx.clearRect(0, 0, initObj.width, initObj.height);
    //         drawLineLabelMarkers(ctx, initObj)
    //         drawBarAnimate(ctx, dataArr, initObj, true); // 绘制柱状图的动画
    //     }, 10);
    // });
    //点击刷新图表
    // initObj.myCanvas.ontouchstart = function () {
    //     // initChart(); // 图表初始化
    //     // drawLineLabelMarkers(); // 绘制图表轴、标签和标记
    //     // drawBarAnimate(); // 绘制折线图的动画
    // };

    ctx.draw();
  } // 绘制图表轴、标签和标记


  function drawLineLabelMarkers(ctx, initObj) {
    var originX = initObj.originX,
        originY = initObj.originY,
        cMargin = initObj.cMargin,
        cWidth = initObj.cWidth;
    ctx.translate(0.5, 0.5); // 当只绘制1像素的线的时候，坐标点需要偏移，这样才能画出1像素实线

    ctx.font = "12px Arial";
    ctx.lineWidth = 1;
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000"; // y轴

    drawLine(ctx, originX, originY, originX, cMargin); // x轴

    drawLine(ctx, originX, originY, originX + cWidth, originY);
    ctx.translate(-0.5, -0.5); // 还原位置
  } // 画线的方法


  function drawLine(ctx, x, y, X, Y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(X, Y);
    ctx.stroke();
    ctx.closePath();
  } // 绘制标记


  function drawMarkers(ctx, dataArr, initObj) {
    var width = initObj.width,
        xTitle = initObj.xTitle,
        yTitle = initObj.yTitle,
        maxValue = initObj.maxValue,
        totalYNomber = initObj.totalYNomber,
        originX = initObj.originX,
        cHeight = initObj.cHeight,
        cMargin = initObj.cMargin,
        cSpace = initObj.cSpace,
        cWidth = initObj.cWidth,
        tobalBars = initObj.tobalBars,
        bMargin = initObj.bMargin,
        bWidth = initObj.bWidth,
        originY = initObj.originY;
    ctx.strokeStyle = "#E0E0E0"; // 绘制 y

    var oneVal = parseInt(maxValue / totalYNomber + '');
    ctx.textAlign = "right";
    ctx.font = "10px Calibri";

    for (var i = 0; i <= totalYNomber; i++) {
      var markerVal = Math.floor(i * oneVal / 100) * 100; // let markerVal = i * oneVal;

      var _xMarker = originX - 5;

      var _yMarker = parseInt(cHeight * (1 - markerVal / maxValue) + '') + cMargin;

      ctx.fillText(markerVal, _xMarker, _yMarker + 3, cSpace); // 文字

      if (i > 0) {
        drawLine(ctx, originX, _yMarker, originX + cWidth, _yMarker);
      }
    } // 绘制 x


    ctx.textAlign = "center";

    for (var i = 0; i < tobalBars; i++) {
      var _markerVal = dataArr[i][0];
      var xMarker = parseInt(originX + cWidth * (i / tobalBars) + bMargin + bWidth / 2);
      var yMarker = originY + 15;
      ctx.fillText(_markerVal, xMarker, yMarker, cSpace); // 文字
    } // 绘制标题 y


    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yTitle, -width / 2 - 50, cSpace - 8);
    ctx.restore(); // 绘制标题 x

    ctx.fillText(xTitle, originX + cWidth / 2, originY + 30);
  }

  ; //绘制柱形图

  function drawBarAnimate(ctx, dataArr, initObj) {
    var isMouseMove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var canvas = initObj.canvas,
        width = initObj.width,
        cMargin = initObj.cMargin,
        cSpace = initObj.cSpace,
        tobalBars = initObj.tobalBars,
        maxValue = initObj.maxValue,
        totalYNomber = initObj.totalYNomber,
        cHeight = initObj.cHeight,
        originX = initObj.originX,
        originY = initObj.originY,
        bWidth = initObj.bWidth,
        bMargin = initObj.bMargin,
        gradient = initObj.gradient,
        mousePosition = initObj.mousePosition;
    var space = 0;

    for (var i = 0; i < tobalBars; i++) {
      var oneVal = parseInt(maxValue / totalYNomber + '');
      var barVal = dataArr[i][1]; // var barH = parseInt(cHeight * barVal / maxValue * ctr / numctr + '');

      var barH = parseInt(cHeight / maxValue * barVal + '');
      var y = originY - barH;
      var x = originX + (bWidth + bMargin) * i + bMargin;
      space = (width - cMargin * 2 - cSpace * 2 - (dataArr.length + 1) * 10) / dataArr.length / 2;
      drawRect(canvas, ctx, x, y, bWidth, barH, mousePosition, gradient, isMouseMove); //高度减一避免盖住x轴

      ctx.fillText(barVal, x + space, y - 8); // 文字
    } // if (ctr < numctr) {
    //     ctr++;
    //     setTimeout(function () {
    //         ctx.clearRect(0, 0, width, height);
    //         drawLineLabelMarkers(ctx, initObj);
    //         drawBarAnimate(ctx, dataArr, initObj);
    //     }, speed);
    // }

  } //绘制方块


  function drawRect(canvas, ctx, x, y, X, Y, mousePosition, gradient, mouseMove) {
    ctx.beginPath();
    ctx.rect(x, y, X, Y);

    if (mouseMove && canvas.isPointInPath(mousePosition.x, mousePosition.y)) {
      //如果是鼠标移动的到柱状图上，重新绘制图表
      ctx.fillStyle = "green";
    } else {
      ctx.fillStyle = gradient;
      ctx.strokeStyle = gradient;
    }

    ctx.fill();
    ctx.closePath();
  }

  function move(e) {
    console.log(e);
  }

  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[/* useObserver */ "d"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__["Canvas"], {
      style: {
        width: defaultState.screenWidth,
        height: defaultState.screenHeight
      },
      canvasId: "Histogram",
      onLongTap: function onLongTap(e) {
        move(e);
      }
    }));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Histogram);

/***/ }),

/***/ "./src/pages/record/components/createFlag.scss":
/*!*****************************************************!*\
  !*** ./src/pages/record/components/createFlag.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/record/components/createFlag.tsx":
/*!****************************************************!*\
  !*** ./src/pages/record/components/createFlag.tsx ***!
  \****************************************************/
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
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _service_apiModules_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/apiModules/api */ "./src/service/apiModules/api.js");
/* harmony import */ var _createFlag_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createFlag.scss */ "./src/pages/record/components/createFlag.scss");
/* harmony import */ var _createFlag_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_createFlag_scss__WEBPACK_IMPORTED_MODULE_7__);









var CreateFlag = function CreateFlag(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  function save() {
    return _save.apply(this, arguments);
  }

  function _save() {
    _save = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var result;
      return _Users_sulei_Desktop_study_applets_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (value) {
                _context.next = 3;
                break;
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.showToast({
                title: '您还没有输入',
                duration: 2000,
                icon: 'none',
                mask: true
              });
              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return Object(_service_apiModules_api__WEBPACK_IMPORTED_MODULE_6__[/* createType */ "b"])({
                label: value
              });

            case 5:
              result = _context.sent;

              if (result.data.status === 200) {
                props.close();
              } else {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.showToast({
                  title: '您录入的Flag已存在·',
                  duration: 2000,
                  icon: 'none',
                  mask: true
                });
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _save.apply(this, arguments);
  }

  function changeText(e) {
    setValue(e);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "CreateFlag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "title"
  }, "\u8F93\u5165\u521B\u5EFA\u7684\u6807\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Textarea"], {
    className: "text",
    placeholder: "\u5927\u80C6\u7684\u8F93\u5165\u5427\uFF01",
    autoFocus: true,
    onInput: function onInput(e) {
      changeText(e.detail.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "save"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "mini",
    type: "primary",
    plain: true,
    onClick: function onClick() {
      save();
    }
  }, "\u521B\u5EFA")));
};

/* harmony default export */ __webpack_exports__["a"] = (CreateFlag);

/***/ }),

/***/ "./src/pages/record/index.scss":
/*!*************************************!*\
  !*** ./src/pages/record/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/record/index.tsx":
/*!************************************!*\
  !*** ./src/pages/record/index.tsx ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/record/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/record/index', {}, config || {}))



/***/ })

},[["./src/pages/record/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map