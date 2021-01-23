import React, { useState } from 'react'
import Taro from "@tarojs/react"
import { View, Picker } from "@tarojs/components"
import Store from '../../../store/index'
import "./index.less"

export default function index() {
    const { Location } = Store
    const [address, setAddress] = useState([])
    const [currentAddress, setCurrentAddress] = useState([])
    function onChange(event) {
        const { value } = event.mpEvent.detail
        setCurrentAddress(value)
        Location.setCurrentAddress(value)
    }
    return (
        <View>
            <Picker class="picker" mode='region' value={address} onChange={onChange}>
                <View className='picker'>
                    {currentAddress.length ? currentAddress : '选择当前地址'}
                </View>
            </Picker>
        </View>
    )
}
