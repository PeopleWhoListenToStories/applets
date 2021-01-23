import { observable } from 'mobx'
import Taro from "@tarojs/taro"

import { postLogin } from "../../service/apiModules/user"

const UserStore = observable({
    userInfo: {},

    setuserInfo(params) {
        this.userInfo = params
    },

    login() {
        Taro.login({
            success: async function (res) {
                if (res.code) {
                    //发起网络请求
                    const result = await postLogin({ code: res.code })
                    if (result.data.status === 200) {
                        Taro.setStorageSync("user_id", result.data.openid)
                        Taro.setStorageSync("authority", result.data.Authority)
                        Taro.switchTab({
                            url: '/pages/index/index'
                        })
                    } else {
                        Taro.showToast({
                            title: result.message || '失败了',
                            duration: 1000,
                            icon: 'none',
                            mask: false,
                        })
                    }

                } else {
                    Taro.removeStorageSync('user_id')
                    Taro.removeStorageSync('authority')
                    Taro.showToast({
                        title: res.errMsg,
                        duration: 2000,
                        icon: 'none',
                        mask: false,
                    })
                }
            }
        })
    },

    loginOut() {
        Taro.removeStorageSync('user_id')
        Taro.removeStorageSync('authority')
    }
})

export default UserStore