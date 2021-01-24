import React, { useState, useEffect } from 'react'
import Taro from "@tarojs/taro"
import { View, Text, Input, CoverImage, Picker } from '@tarojs/components'
import stroe from "../../../../store/index"
import QQMapWX from '../../../../utils/QQMap'
import { Toast } from "../../../../utils/tool"
import "../../../../../config"
import './index.scss'

const LocationCom: React.FC = () => {
    const { Location } = stroe
    const [filterList, setFilterList] = useState<[]>([])
    const [cityList, setCityList] = useState<string[]>([])
    const [city, setCity] = useState<string>('')
    const [list, setList] = useState<any[]>([])

    useEffect(() => {
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
                    setList(res.data.result[0])
                } else {
                    Toast('失败', 'none', 1000)
                }
            }
        })
        return () => { }
    }, [])

    function inputText(e) {
        if (e.detail.value === '') {
            setFilterList([])
        } else {
            QQMapWX.search({
                keyword: e.detail.value,
                region: city,
                page_index: 1,
                page_size: 20,
                orderby: '_distance',
                complete: function (res) {
                    setFilterList(res.data)
                }
            })
        }

    }

    function tapAddress(params) {
        Location[Location.isLocationCom] = {
            title: params.title,
            lat: params.location.lat,
            lng: params.location.lng,
        }
        Location.isLocationCom = ''
        setFilterList([])
    }

    function onChangeCity(e) {
        setCity(cityList[e.detail.value])
    }

    return (
        <View className='location'>
            <View className='nav'>
                {/* <Text className="city">北京</Text> */}
                <View className='city'>
                    <Picker mode='selector' range={cityList} onChange={(e) => { onChangeCity(e) }}>
                        <View className='picker' >
                            {city}
                        </View>
                    </Picker>
                </View>
                <Input className='address' type='text' onInput={(e) => { inputText(e) }} placeholder='请输入'></Input>
            </View>
            <View className='content'>
                {
                    filterList && filterList.map((item: { id: string | number, title: string, address: string }) => {
                        return <View className='item' key={item.id}>
                            <CoverImage className='img' src={(global as any).constants.icon.mapIcon} />
                            <View className='text' key={item.id} onClick={() => { tapAddress(item) }}>
                                <Text className='title' >{item.title}</Text>
                                <Text className='value' >{item.address}</Text>
                            </View>
                        </View>
                    })
                }
            </View>
        </View >
    )
}
export default LocationCom 