import React, { useEffect } from 'react'
import Taro from "@tarojs/taro"
import { Form, Input, View } from '@tarojs/components'
import { useObserver } from 'mobx-react'
import store from '../../../store/index'
import './index.less'

export default function StartEndForm() {

    const { Location } = store

    function changeText(e, type) {
        Taro.navigateTo({
            url: `/pages/location/index?search=${type}`,
        })
    }
    useEffect(() => {
        switch (Taro.Current.router.params.search) {
            case 'startAddress':
                Location.setStartAddress({
                    title: Taro.Current.router.params.title,
                    lat: Taro.Current.router.params.lat,
                    lng: Taro.Current.router.params.lng
                })
                break;
            case 'endAddress':
                Location.setEndAddress({
                    title: Taro.Current.router.params.title,
                    lat: Taro.Current.router.params.lat,
                    lng: Taro.Current.router.params.lng
                })
                break;
            default:
                return;
        }
        return () => { }
    }, [])

    return useObserver(() => (
        <Form onSubmit={() => { }} onReset={() => { this.formReset() }} >
            <View className='input-box'>
                <Input class='input' value={Location.startAddress.title} type='search' onClick={(e) => { changeText(e, "startAddress") }} placeholder='输入起始位置' />
                        -
                        <Input class='input' value={Location.endAddress.title} type='search' onClick={(e) => { changeText(e, "endAddress") }} placeholder='输入结束位置' />
            </View>
        </Form>
    ))
}

