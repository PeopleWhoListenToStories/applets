import React from 'react'
import Taro, { useDidShow } from "@tarojs/taro"
import { View } from "@tarojs/components"
import "./index.scss"


const About: React.FC = () => {

    useDidShow(() => {
        Taro.setNavigationBarTitle({
            title: "关于我们"
        })
    })

    return (
        <View className='about'>
            知世故而不事故 善自嘲而不嘲人 ！
        </View>
    )
}

export default About
