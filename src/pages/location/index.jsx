import React, { useState, useEffect } from 'react'
import Taro, { useDidShow } from "@tarojs/taro"
import { View, Text, Input, CoverImage, Picker } from '@tarojs/components'
import QQMapWX from '../../utils/QQMap'
import { Toast } from "../../utils/tool"
import './index.less'

export default function index() {
    const [filterList, setFilterList] = useState([])
    const [cityList, setCityList] = useState([])
    const [city, setCity] = useState('')

    useDidShow(() => {
        Taro.setNavigationBarTitle({
            title: "位置"
        })
        Taro.request({
            url: `http://apis.map.qq.com/ws/district/v1/list`,
            method: 'GET',
            data: {
                key: 'B46BZ-TDXKW-Q5WRQ-OIKGT-UCW4K-6QBXD'
            },
            success: function (res) {
                if (res.statusCode === 200) {
                    setCityList(res.data.result[0].map(v => v.fullname))
                    setCity(res.data.result[0][0].fullname)
                } else {
                    Toast('失败', 'none', 1000)
                }
            }
        })
    })

    function inputText(e) {
        console.log(e.detail.value, "e")
        if (e.detail.value === '') {
            setFilterList([])
        } else {
            QQMapWX.search({
                keyword: e.detail.value,
                region: city,
                complete: function (res) {
                    setFilterList(res.data)
                }
            })
        }

    }

    function tapAddress(params) {
        Taro.navigateTo({
            url: `/pages/map/index?search=${Taro.Current.router.params.search}&title=${params.title}&lat=${params.location.lat}&lng=${params.location.lng}`,
        })
        setFilterList([])
    }

    function onChangeCity(e) {
        setCity(cityList[e.detail.value])
    }

    return (
        <View>
            <View className="nav">
                {/* <Text className="city">北京</Text> */}
                <View className="city">
                    <Picker mode='selector' range={cityList} onChange={(e) => { onChangeCity(e) }}>
                        <View className='picker' >
                            {city}
                        </View>
                    </Picker>
                </View>
                <Input class='address' type="search" onInput={(e) => { inputText(e) }} placeholder="请输入"></Input>
            </View>
            {
                filterList && filterList.map(item => {
                    return <View className="item">
                        <CoverImage className='img' src='../../assets/image/ditu.png' />
                        <View className="text" key={item.id} onTap={() => { tapAddress(item) }}>
                            <Text className="title" >{item.title}</Text>
                            <Text className="value" >{item.address}</Text>
                        </View>
                    </View>
                })
            }
        </View >
    )
}
