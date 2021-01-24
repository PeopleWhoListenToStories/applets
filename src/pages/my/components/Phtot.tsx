import React from 'react'
import { useObserver } from 'mobx-react'
import { View, Image } from "@tarojs/components"
import "./Photo.scss"

export default function Phtot(props) {
    return useObserver(() => (
        <View className='userinfo-img-view portrait flex-box jc-sb ai-ce' data-flag='portrait'>
            <Image src={props.photoUrl} className='userinfo-img' onClick={(e) => { props.uploadImg(e) }} mode='aspectFill'></Image>
        </View>
    ))
}
