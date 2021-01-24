import React, { useEffect } from 'react'
import Taro from "@tarojs/taro"
import { Form, Input, View } from '@tarojs/components'
import { useObserver } from 'mobx-react'
import store from '../../../../store/index'
import './index.scss'

export default function StartEndForm() {

    const { Location } = store

    function changeText(type) {
        // Taro.navigateTo({
        //     url: `/pages/location/index?search=${type}`,
        // })
        Location.isLocationCom = type
    }

    useEffect(() => {
        switch ((Taro.Current as any).router.params.search) {
            case 'startAddress':
                Location.setStartAddress({
                    title: (Taro.Current as any).router.params.title,
                    lat: (Taro.Current as any).router.params.lat,
                    lng: (Taro.Current as any).router.params.lng
                })
                break;
            case 'endAddress':
                Location.setEndAddress({
                    title: (Taro.Current as any).router.params.title,
                    lat: (Taro.Current as any).router.params.lat,
                    lng: (Taro.Current as any).router.params.lng
                })
                break;
            default:
                return;
        }
        return () => { }
    }, [])

    return useObserver(() => (
        <View className='input-box'>
            <Input className='input' value={Location.startAddress.title} type='text' onClick={() => { changeText("startAddress") }} placeholder='输入起始位置' />
                        -
            <Input className='input' value={Location.endAddress.title} type='text' onClick={() => { changeText("endAddress") }} placeholder='输入结束位置' />
        </View>
    ))
}

