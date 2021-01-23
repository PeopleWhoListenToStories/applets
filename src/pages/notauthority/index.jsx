import React from "react"
import { View, CoverImage } from "@tarojs/components"
import Taro, { useDidShow } from "@tarojs/taro"
import store from "../../store/index"
import "./index.less"

// import cloud from 'wx-server-sdk' //暂时没有使用指纹校验
// cloud.init()

const Notauthority = () => {
    const { User, Fingerprint } = store

    useDidShow(() => {
        Taro.setNavigationBarTitle({
            title: "登陆"
        })
    })

    function login() {
        Fingerprint.FingerprintLogin()
    }

    function Userlogin() {
        User.login()
    }

    async function verifySignature(context) {
        try {
            const result = await cloud.openapi.soter.verifySignature({
                openid: Taro.getStorageSync('user_id'),
                jsonString: '$resultJSON',
                jsonSignature: '$resultJSONSignature'
            })
            return result
        } catch (err) {
            return err
        }
    }

    return (
        <View>
            <View>
                <CoverImage className='logo' src='../../assets/image/huangeshenfengenghaowan.png' />
            </View>
            <View onClick={() => { login() }} >
                <CoverImage className='login' src='../../assets/image/feiji_1.png' />
            </View>
            <View className="btn" onClick={() => { Userlogin() }} >
                免密登陆
            </View>
        </View>
    )
}

export default Notauthority
