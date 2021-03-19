import React, { useState, useEffect } from "react"
import { View, Form, Input, Text, CoverImage, Button } from "@tarojs/components"
import Taro, { useDidShow } from "@tarojs/taro"
import { Toast } from '../../utils/tool'
import store from "../../store/index"
import "../../../config"
import "./index.scss"

// import cloud from 'wx-server-sdk' //暂时没有使用指纹校验
// cloud.init()

const Notauthority = () => {
    const { User, Fingerprint } = store
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState(User.code)
    const [disabledCode, setDisabledCode] = useState(60)

    useDidShow(() => {
        Taro.setNavigationBarTitle({
            title: "登陆"
        })
    })

    useEffect(() => {
        if (!User.isOK) {
            setCode(User.code)
        }
    }, [User.code])

    useEffect(() => {
        User.setCode()
        setCode('')
        return () => { }
    }, [])

    // 指纹登陆
    function login() {
        Fingerprint.FingerprintLogin()
    }

    //登陆
    function Userlogin() {
        if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone)) return Toast('请输入正确的手机号', 'none', 1000)
        if (User.code && code + '' === User.code + '') {
            User.login()
        } else {
            Toast('验证码输入有误', 'none', 1000)
        }
    }

    // 获取验证码
    function getCode() {
        if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone)) return Toast('请输入正确的手机号', 'none', 1000)
        let count = 59
        setDisabledCode(59)
        User.getCode(+phone)
        let timer = setInterval(() => {
            if (count <= 0) {
                setDisabledCode(60)
                clearInterval(timer)
            } else {
                setDisabledCode(--count)
            }
        }, 1000)
    }

    // async function verifySignature(context) {
    //     try {
    //         const result = await cloud.openapi.soter.verifySignature({
    //             openid: Taro.getStorageSync('user_id'),
    //             jsonString: '$resultJSON',
    //             jsonSignature: '$resultJSONSignature'
    //         })
    //         return result
    //     } catch (err) {
    //         return err
    //     }
    // }

    return (
        <View>
            <View>
                <CoverImage className='logo' src={(global as any).constants.icon.notAuthorityLogo} />
            </View>
            <View onClick={() => { login() }} >
                <CoverImage className='login' src={(global as any).constants.icon.notAuthorityLogin} />
            </View>
            <View className="bottom">
                <Form className="form-login" onSubmit={() => { }} >
                    <View className='example-body'>
                        <Text>手机号：</Text><Input maxlength={11} value={phone} onInput={(e) => { setPhone(e.detail.value) }} className="phone" />
                    </View>
                    <View className='example-body'>
                        <Text>验证码：</Text><Input className="code" maxlength={6} value={code as any} onInput={(e) => { setCode(e.detail.value) }} />
                        {
                            disabledCode >= 60 ? <Button className="code-btn" onClick={() => { getCode() }}>获取验证码</Button> :
                                <Button className="code-btn" >{disabledCode}秒后再次获取</Button>
                        }
                    </View>
                    <View className='example-body'>
                        <Text className="btn" onClick={() => { Userlogin() }}>登陆</Text>
                    </View>
                </Form>
            </View>

            {/* <View className='btn' onClick={() => { Userlogin() }} >
                免密登陆
            </View> */}
        </View>
    )
}

export default Notauthority
