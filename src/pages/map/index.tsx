import React, { useState, useEffect } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { useObserver } from 'mobx-react'
import { View, Map, CoverView, CoverImage, Picker } from '@tarojs/components'
import StartEndForm from './components/start-end-form/index'
import LocationCom from "./components/location/index"
import store from '../../store/index'
import qqmapsdk from '../../utils/QQMap'
import { Toast } from "../../utils/tool"
import './index.scss'

const defaultTraffic = [{ index: 0, name: '驾车', EN: 'driving' }, { index: 1, name: '步行', EN: 'walking' }, { index: 2, name: '骑行', EN: 'bicycling' }, { index: 3, name: '公交', EN: 'transit' }]

interface defaultTrafficItemType {
    index: number,
    name: string,
    EN: string
}

const MapLoaction: React.FC = () => {
    const { Location } = store
    const [traffic, setTraffic] = useState<string>('驾车')
    const [typeArray, setType] = useState<defaultTrafficItemType[]>([])
    const [setting, setSetting] = useState<{
        subKey: string,
        enable3D: false,
        latitude: number,//中心经度
        longitude: number,// 中心纬度
        layerStyle: number,
        rotate: number,	// 否	旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角	2.5.0
        skew: number,	// 否	倾斜角度，范围 0 ~40, 关于 z 轴的倾角	2.5.0
        scale: number, // 缩放级别，取值范围为3-20
        minScale: number,	//否	最小缩放级别
        maxScale: number,	//否	最大缩放级别
        showLocation: boolean, //		显示带有方向的当前定位点	1.0.0
        showScale: boolean,
        showCompass: boolean,//	显示指南针	2.3.0
        enableOverlooking: boolean,	//		开启俯视	2.3.0
        enableZoom: boolean,		//是否支持缩放	2.3.0
        enableScroll: boolean,		//是否支持拖动	2.3.0
        enableRotate: boolean,		//是否支持旋转	2.3.0
        enableSatellite: boolean,	//否	是否开启卫星图	2.7.0
        enableTraffic: boolean,	 //否	是否开启实时路况	2.7.0 
        markers: any[],
        polyline: any[]
        [key: string]: any
    }>({
        subKey: '',
        enable3D: false,
        latitude: 40.07497505239997,//中心经度
        longitude: 116.33617818879702,// 中心纬度
        layerStyle: 1,
        rotate: 0,	// 否	旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角	2.5.0
        skew: 50,	// 否	倾斜角度，范围 0 ~40, 关于 z 轴的倾角	2.5.0
        scale: 12, // 缩放级别，取值范围为3-20
        minScale: 3,	//否	最小缩放级别
        maxScale: 20,	//否	最大缩放级别
        showLocation: true, //		显示带有方向的当前定位点	1.0.0
        showScale: true,
        showCompass: true,//	显示指南针	2.3.0
        enableOverlooking: true,	//		开启俯视	2.3.0
        enableZoom: true,		//是否支持缩放	2.3.0
        enableScroll: true,		//是否支持拖动	2.3.0
        enableRotate: true,		//是否支持旋转	2.3.0
        enableSatellite: false,	//否	是否开启卫星图	2.7.0
        enableTraffic: false,	 //否	是否开启实时路况	2.7.0 
        markers: [],
        polyline: []
        // covers	Array.<cover>		否	即将移除，请使用 markers	1.0.0
        // polyline	Array.<polyline>		否	路线	1.0.0
        // circles	Array.<circle>		否	圆	1.0.0
        // controls	Array.<control>		否	控件（即将废弃，建议使用 cover-view 代替）	1.0.0
        // include-points	Array.<point>		否	缩放视野以包含所有给定的坐标点	1.0.0
        // polygons	Array.<polygon>		否	多边形	2.3.0
        // subkey	string		否	个性化地图使用的key	2.3.0
        // layer-style	number	1	否	个性化地图配置的 style，不支持动态修改	

        // enable-3D	boolean	false	否	展示3D楼块(工具暂不支持）	2.3.0
        // show-scale	boolean	false	否	显示比例尺，工具暂不支持	2.8.0
        // enable-poi	boolean		否	是否展示 POI 点	2.14.0
        // enable-building	boolean		否	是否展示建筑物	2.14.0
        // setting	object		否	配置项	2.8.2
        // bindtap	eventhandle		否	点击地图时触发，2.9.0起返回经纬度信息	1.0.0
        // bindmarkertap	eventhandle		否	点击标记点时触发，e.detail = {markerId}	1.0.0
        // bindlabeltap	eventhandle		否	点击label时触发，e.detail = {markerId}	2.9.0
        // bindcontroltap	eventhandle		否	点击控件时触发，e.detail = {controlId}	1.0.0
        // bindcallouttap	eventhandle		否	点击标记点对应的气泡时触发e.detail = {markerId}	1.2.0
        // bindupdated	eventhandle		否	在地图渲染更新完成时触发	1.6.0
        // bindregionchange	eventhandle		否	视野发生变化时触发，	2.3.0
        // bindpoitap	eventhandle		否	点击地图poi点时触发，e.detail = {name, longitude, latitude}	2.3.0
        // bindanchorpointtap	eventhandle		否	点击定位标时触发，e.detail = {longitude, latitude}	2.13.0
    })

    useEffect(() => {
        clickLocation()
    }, [traffic])

    useDidShow(() => {
        Taro.setNavigationBarTitle({
            title: "地理位置"
        })
        Location.isLocationCom = ''
    })

    useEffect(() => {
        setType(defaultTraffic)
        getLocation()
        return () => { }
    }, [])

    useEffect(() => {
        return () => { }
    }, [(Location as any).markers])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function getLocation() {
        Taro.getLocation({ type: 'wgs84 ' }).then(data => {
            // console.log(data, "getLocation")
            if (data.errMsg === "getLocation:ok") {
                console.log(data, "resdata")
                setSetting({
                    ...setting,
                    latitude: data.latitude,
                    longitude: data.longitude,
                    scale: 12
                })
            } else {
                Taro.showToast({
                    title: '获取当前位置失败',
                    duration: 2000,
                    icon: 'none',
                    mask: false,
                })
            }

        })
    }

    function onTap(e) {
        setSetting({
            ...setting,
            latitude: e.detail.latitude,
            longitude: e.detail.longitude
        })
    }

    // 获取当前位置
    function clickLocation() {
        if (!Location.startAddress.title) {
            Toast('还没有输入起始位置', 'none', 500)
            getLocation()
            return;
        }
        if (!Location.endAddress.title) {
            Toast('还没有输入结束位置', 'none', 500)
            getLocation()
            return;
        }
        const params = {
            latitudeS: Location.startAddress.lat,
            longitudeS: Location.startAddress.lng,
            latitudeE: Location.endAddress.lat,
            longitudeE: Location.endAddress.lng,
            mode: (defaultTraffic.find((item: any) => item.name === traffic))?.EN
        }
        changeDirection(params)
    }

    // 获取路线
    function changeDirection(params) {
        qqmapsdk.direction({
            mode: params.mode,
            from: {
                latitude: params.latitudeS,
                longitude: params.longitudeS
            },
            to: {
                latitude: params.latitudeE,
                longitude: params.longitudeE
            },
            success: res => {
                // 大于1 代表是公交方式需要另外处理
                if (!res.result.routes[0].mode) {
                    const data = Object.keys(res.result.routes).map(index => {
                        return {
                            ...res.result.routes[index],
                            steps: res.result.routes[index].steps.map(item => {
                                if (item.mode !== 'TRANSIT') {
                                    return {
                                        ...item,
                                        polyline: formatPolyline(item.polyline)
                                    }
                                } else {
                                    return {
                                        ...item,
                                        lines: item.lines.map(child => {
                                            return {
                                                ...child,
                                                polyline: formatPolyline(child.polyline)
                                            }
                                        })
                                    }
                                }

                            })
                        }
                    })
                    let polyline: {
                        points: string | number,
                        color: string,
                        width: number,
                        dottedLine: boolean,
                        arrowLine?: boolean,
                        borderWidth?: number,
                        borderColor?: string,
                    }[] = [],
                        markers: {
                            id: number,
                            latitude: string,
                            longitude: string,
                            zIndex?: number,
                            width?: number,
                            height?: number,
                            clusterId?: number | string, // 必须
                            label?: {
                                fontSize: number,
                                width: number,
                                height: number,
                                bgColor: string,
                                borderRadius: number,
                                textAlign: string,
                                anchorX: number,
                                anchorY: number,
                            }
                            callout?: {
                                content: string,
                                padding: number,
                                display: string,
                                textAlign: string
                            }
                        }[] = [{
                            id: 1,
                            latitude: params.latitudeS,
                            longitude: params.longitudeS,
                            callout: {
                                content: Location.startAddress.title,
                                padding: 5,
                                display: 'ALWAYS',
                                textAlign: 'center'
                            }
                        },
                        {
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

                    data[0].steps.map((item) => {
                        if (item.mode === 'WALKING') {
                            polyline.push({
                                points: item.polyline,
                                color: "#FF6347",
                                width: 9,
                                dottedLine: true,
                            })
                        } else {
                            item.lines.forEach((child) => {
                                child.stations.map(val => {
                                    markers.push({
                                        id: val.id,
                                        latitude: val.location.lat,
                                        longitude: val.location.lng,
                                        zIndex: 100,
                                        width: 0,
                                        height: 0,
                                        clusterId: val.id, // 必须
                                        label: {
                                            fontSize: 8,
                                            width: 10,
                                            height: 10,
                                            bgColor: '#fff',
                                            borderRadius: 30,
                                            textAlign: 'center',
                                            anchorX: 0,
                                            anchorY: 10,
                                        }
                                    })
                                })

                                polyline.push({
                                    points: child.polyline,
                                    color: "#4395ff",
                                    width: 9,
                                    dottedLine: false,
                                    arrowLine: true, //带箭头的线
                                    borderWidth: 1, //线的边框宽度
                                    borderColor: '#ccc',
                                })

                            })
                        }
                    })

                    setSetting({
                        ...setting,
                        markers,
                        polyline
                    })
                } else {
                    let coors = res.result.routes[0].polyline, points: {
                        latitude: number | string,
                        longitude: number | string,
                    }[] = [], scale = 12;
                    for (let i = 2; i < coors.length; i++) { coors[i] = coors[i - 2] + coors[i] / 1000000 }
                    for (let key = 0; key < coors.length; key += 2) {
                        points.push({
                            latitude: coors[key],
                            longitude: coors[key + 1],
                        })
                    }
                    const value: number = Number(res.result.routes[0].distance / 1000)
                    switch (value) {
                        case Number(value) < 10 && Number(value) >= 0:
                            scale = 19
                            break;
                        case Number(value) < 20 && Number(value) >= 10:
                            scale = 15
                            break;
                        case Number(value) < 30 && Number(value) >= 20:
                            scale = 10
                            break;
                        case Number(value) < 40 && Number(value) >= 30:
                            scale = 7
                            break;
                        default:
                            scale = 12
                            break;
                    }
                    setSetting({
                        ...setting,
                        scale,
                        latitude: params.latitudeS,
                        longitude: params.longitudeS,
                        markers: [
                            {
                                id: 1,
                                latitude: +params.latitudeS,
                                longitude: +params.longitudeS,
                                callout: {
                                    content: Location.startAddress.title,
                                    padding: 5,
                                    display: 'ALWAYS',
                                    textAlign: 'center'
                                }
                            },
                            {
                                id: 2,
                                latitude: +params.latitudeE,
                                longitude: +params.longitudeE,
                                callout: {
                                    content: Location.endAddress.title,
                                    padding: 5,
                                    display: 'ALWAYS',
                                    textAlign: 'center'
                                }
                            }
                        ],
                        polyline: [{
                            points,
                            color: "#4395ff",
                            width: 10,
                            dottedLine: false,
                            arrowLine: true, //带箭头的线
                            borderWidth: 1, //线的边框宽度
                            borderColor: '#ccc',
                        }]
                    })
                }
            }
        })
    }

    // 修改setting 配置参数
    function checkSettingProps(type: string) {
        setSetting({
            ...setting,
            [type]: !setting[type]
        })
    }

    function bindPickerChange(event) {
        const { value } = event.mpEvent.detail
        setTraffic(defaultTraffic[value].name)
    }

    function formatPolyline(polyline) {
        let coors = polyline, points: {
            latitude: number | string,
            longitude: number | string
        }[] = [];
        for (let i = 2; i < coors.length; i++) { coors[i] = coors[i - 2] + coors[i] / 1000000 }
        for (let key = 0; key < coors.length; key += 2) {
            points.push({
                latitude: coors[key],
                longitude: coors[key + 1],
            })
        }
        return points
    }

    return useObserver(() => (
        <View id='mapLoaction' >
            {          !Location.isLocationCom &&
                <View className='nav'>
                    <Picker onChange={(e) => { bindPickerChange(e) }} range={typeArray} range-key='name' >
                        <View className='picker'>{traffic}</View>
                    </Picker>
                    <StartEndForm />
                </View>
            }
            {
                !Location.isLocationCom && <View className='map-wrapper'>
                    <Map id='map' show-location scale={setting.scale} markers={setting.markers} polyline={setting.polyline} setting={setting} includePoints={setting.markers} onClick={(e) => { onTap(e) }}>
                        <CoverView className='weixing' onClick={() => { checkSettingProps('enableSatellite') }}  >
                            <CoverImage className='img' src={(global as any).constants.icon[`${setting.enableSatellite ? 'weixingOpenIcon' : 'weixingOffIcon'}`]} />
                        </CoverView>
                        <CoverView className='lukuang' onClick={() => { checkSettingProps('enableTraffic') }}  >
                            <CoverImage className='img' src={(global as any).constants.icon[`${setting.enableTraffic ? 'lukuangOpenIcon' : 'lukuangOffIcon'}`]} />
                        </CoverView>
                        <CoverView className='dingwei' onClick={() => { clickLocation() }}  >
                            <CoverImage className='img' src={(global as any).constants.icon.mapIcon} />
                        </CoverView>
                    </Map>
                </View>
            }
            {
                Location.isLocationCom && <LocationCom />
            }
        </View >
    ))
}
export default MapLoaction