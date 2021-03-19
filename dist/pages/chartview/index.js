(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/chartview/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/chartview/index.tsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/chartview/index.tsx ***!
  \********************************************************************************************************/
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
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.ts");
/* harmony import */ var _config_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config.ts */ "./config.ts");
/* harmony import */ var _config_ts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_ts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./src/pages/chartview/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);









var ChartView = function ChartView() {
  var User = _store_index__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].User;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    screenWidth: 375,
    screenHeight: 500
  }),
      _useState2 = Object(_Users_sulei_Desktop_study_applets_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      defaultState = _useState2[0],
      setDefaultState = _useState2[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useDidShow"])(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.setNavigationBarTitle({
      title: "图表"
    });
    var info = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getSystemInfoSync();
    setDefaultState({
      screenWidth: info.screenWidth,
      screenHeight: info.screenHeight
    });
    var data = {
      dataArr: [[2010, 95], [2011, 100], [2012, 101], [2013, 102], [2014, 105], [2015, 99], [2016, 98], [2017, 2001]],
      xTitle: '横轴标题',
      yTitle: '纵轴标题'
    };
    goBarChart(data);
  }); //封装绘制图表的方法

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
      xTitle: params.xTitle,
      yTitle: params.yTitle
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Canvas */ "b"], {
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

/* harmony default export */ __webpack_exports__["a"] = (ChartView);

/***/ }),

/***/ "./src/pages/chartview/index.scss":
/*!****************************************!*\
  !*** ./src/pages/chartview/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/chartview/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/chartview/index.tsx ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/chartview/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/chartview/index', {}, config || {}))



/***/ })

},[["./src/pages/chartview/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map