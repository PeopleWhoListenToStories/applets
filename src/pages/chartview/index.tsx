import React, { useEffect, useState, useRef } from 'react'
import Taro, { useDidShow, useDidHide } from '@tarojs/taro'
import { useObserver } from 'mobx-react'
import { View, Canvas } from '@tarojs/components'
import store from '../../store/index'
import '../../../config.ts'
import './index.scss'

interface InitType {
    [key: string]: any
}

const ChartView: React.FC = () => {
    const { User } = store
    const [defaultState, setDefaultState] = useState({
        screenWidth: 375, screenHeight: 500,
    })
    useDidShow(() => {
        Taro.setNavigationBarTitle({
            title: "图表"
        })
        const info = Taro.getSystemInfoSync()
        setDefaultState({
            screenWidth: info.screenWidth,
            screenHeight: info.screenHeight,
        })
        const data = {
            dataArr: [[2010, 95], [2011, 100], [2012, 101], [2013, 102], [2014, 105], [2015, 99], [2016, 98], [2017, 2001]],
            xTitle: '横轴标题',
            yTitle: '纵轴标题'
        }
        goBarChart(data)
    })

    //封装绘制图表的方法
    function goBarChart(params) {
        // 获得canvas上下文
        let ctx = Taro.createCanvasContext('Histogram', this);
        let initObj: InitType = {
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
        }
        if (ctx && (ctx as any)._context) {
            initObj.myCanvas = (ctx as any)._context.canvas
        } else {
            initObj.myCanvas = ctx
        }
        //鼠标移动
        var mousePosition = {};
        //     // 图表信息
        initObj.cHeight = initObj.height - initObj.cMargin * 2 - initObj.cSpace;
        initObj.cWidth = initObj.width - initObj.cMargin * 2 - initObj.cSpace;
        initObj.originX = initObj.cMargin + initObj.cSpace;
        initObj.originY = initObj.cMargin + initObj.cHeight;
        //     // 柱状图信息
        initObj.tobalBars = params.dataArr.length;

        initObj.bWidth = parseInt(initObj.cWidth / initObj.tobalBars - initObj.bMargin + '');
        for (var i = 0; i < params.dataArr.length; i++) {
            var barVal = parseInt(params.dataArr[i][1]);
            if (barVal > initObj.maxValue) {
                initObj.maxValue = barVal;
            }
        }
        initObj.maxValue += 50;
        // //柱状图渐变色
        initObj.gradient = ctx.createLinearGradient(0, 0, 0, 300);
        initObj.gradient.addColorStop(0, 'green');
        initObj.gradient.addColorStop(1, 'rgba(67,203,36,1)');

        drawLineLabelMarkers(ctx, initObj)
        // 绘制标记
        drawMarkers(ctx, params.dataArr, initObj)
        //绘制柱形图
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
        ctx.draw()
    }


    // 绘制图表轴、标签和标记
    function drawLineLabelMarkers(ctx, initObj) {
        const { originX, originY, cMargin, cWidth } = initObj
        ctx.translate(0.5, 0.5);  // 当只绘制1像素的线的时候，坐标点需要偏移，这样才能画出1像素实线
        ctx.font = "12px Arial";
        ctx.lineWidth = 1;
        ctx.fillStyle = "#000";
        ctx.strokeStyle = "#000";
        // y轴
        drawLine(ctx, originX, originY, originX, cMargin);
        // x轴
        drawLine(ctx, originX, originY, originX + cWidth, originY)
        ctx.translate(-0.5, -0.5);  // 还原位置
    }

    // 画线的方法
    function drawLine(ctx, x, y, X, Y) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(X, Y);
        ctx.stroke();
        ctx.closePath();
    }

    // 绘制标记
    function drawMarkers(ctx, dataArr, initObj) {
        const { width, xTitle, yTitle, maxValue, totalYNomber, originX, cHeight, cMargin, cSpace, cWidth, tobalBars, bMargin, bWidth, originY } = initObj
        ctx.strokeStyle = "#E0E0E0";
        // 绘制 y
        let oneVal = parseInt(maxValue / totalYNomber + '');
        ctx.textAlign = "right";
        ctx.font = "10px Calibri";
        for (var i = 0; i <= totalYNomber; i++) {
            let markerVal = Math.floor(i * oneVal / 100) * 100;
            // let markerVal = i * oneVal;
            let xMarker = originX - 5;
            let yMarker = parseInt(cHeight * (1 - markerVal / maxValue) + '') + cMargin;
            ctx.fillText(markerVal, xMarker, yMarker + 3, cSpace); // 文字
            if (i > 0) {
                drawLine(ctx, originX, yMarker, originX + cWidth, yMarker);
            }
        }
        // 绘制 x
        ctx.textAlign = "center";
        for (var i = 0; i < tobalBars; i++) {
            let markerVal = dataArr[i][0];
            var xMarker = parseInt(originX + cWidth * (i / tobalBars) + bMargin + bWidth / 2);
            var yMarker = originY + 15;
            ctx.fillText(markerVal, xMarker, yMarker, cSpace); // 文字
        }
        // 绘制标题 y
        ctx.save();
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(yTitle, -width / 2 - 50, cSpace - 8);
        ctx.restore();
        // 绘制标题 x
        ctx.fillText(xTitle, originX + cWidth / 2, originY + 30);
    };

    //绘制柱形图
    function drawBarAnimate(ctx, dataArr, initObj, isMouseMove = false) {
        let { canvas, width, cMargin, cSpace, tobalBars, maxValue, totalYNomber, cHeight, originX, originY, bWidth, bMargin, gradient, mousePosition } = initObj
        let space: number = 0;
        for (var i = 0; i < tobalBars; i++) {
            var oneVal = parseInt(maxValue / totalYNomber + '');
            var barVal = dataArr[i][1];
            // var barH = parseInt(cHeight * barVal / maxValue * ctr / numctr + '');
            var barH = parseInt(cHeight / maxValue * barVal + '');
            var y = originY - barH;
            var x = originX + (bWidth + bMargin) * i + bMargin;
            space = (width - cMargin * 2 - cSpace * 2 - ((dataArr.length + 1) * 10)) / dataArr.length / 2
            drawRect(canvas, ctx, x, y, bWidth, barH, mousePosition, gradient, isMouseMove);  //高度减一避免盖住x轴
            ctx.fillText(barVal, x + space, y - 8); // 文字
        }
        // if (ctr < numctr) {
        //     ctr++;
        //     setTimeout(function () {
        //         ctx.clearRect(0, 0, width, height);
        //         drawLineLabelMarkers(ctx, initObj);
        //         drawBarAnimate(ctx, dataArr, initObj);
        //     }, speed);
        // }
    }

    //绘制方块
    function drawRect(canvas, ctx, x, y, X, Y, mousePosition, gradient, mouseMove) {
        ctx.beginPath();
        ctx.rect(x, y, X, Y);
        if (mouseMove && canvas.isPointInPath(mousePosition.x, mousePosition.y)) { //如果是鼠标移动的到柱状图上，重新绘制图表
            ctx.fillStyle = "green";
        } else {
            ctx.fillStyle = gradient;
            ctx.strokeStyle = gradient;
        }
        ctx.fill();
        ctx.closePath();
    }

    function move(e) {
        console.log(e)
    }

    return useObserver(() => (
        <View className='container'>
            <Canvas style={{ width: defaultState.screenWidth, height: defaultState.screenHeight }} canvasId='Histogram' onLongTap={(e) => { move(e) }}></Canvas>
        </View >
    ))
}
export default ChartView
