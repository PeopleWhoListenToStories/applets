import React, { useState } from 'react'
import { View, Picker } from "@tarojs/components"
import Store from '../../../../store/index'
import "./index.scss"

const PickerCom: React.FC = () => {
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
            <Picker className='picker' mode='region' value={address} onChange={onChange}>
                <View className='picker'>
                    {currentAddress.length ? currentAddress : '选择当前地址'}
                </View>
            </Picker>
        </View>
    )
}
export default PickerCom