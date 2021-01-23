import { observable } from 'mobx'
import Taro from "@tarojs/taro"
import UserStore from "./user"
import { Toast } from "../../utils/tool"

const FingerprintStore = observable({

    FingerprintLogin() {
        if (Taro.canIUse('checkIsSupportSoterAuthentication')) { // 检测当前微信版本是否支持调用指纹相关接口
            Taro.checkIsSupportSoterAuthentication({
                success(res) {
                    // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
                    // res.supportMode = ['fingerPrint'] 只支持指纹识别
                    // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
                    if (res.supportMode.length !== 0) {
                        Taro.checkIsSoterEnrolledInDevice({
                            // supportMode.length > 1 ? supportMode[1] : supportMode[0]
                            checkAuthMode: 'fingerPrint',
                            success(res) {
                                if (res.errMsg === 'checkIsSoterEnrolledInDevice:ok') {
                                    Taro.startSoterAuthentication({
                                        requestAuthModes: ['fingerPrint'],
                                        challenge: '123456',
                                        authContent: '请用指纹解锁',
                                        success(res) {
                                            if (res.errCode === 0) {
                                                // verifySignature(res)
                                                Toast('指纹验证成功', 'success', 1000)
                                                UserStore.login()
                                            } else {
                                                Toast('验证失败', 'none', 1000)
                                            }
                                        }
                                    })
                                } else {
                                    Toast('验证失败', 'none', 1000)
                                }
                                // console.log(res, "fingerPrint")// isEnrolled的值是0或者1，不知道是不是指纹个数或是Boolean
                            }
                        })
                    } else {
                        Toast('不具备识别', 'none', 1000)
                    }
                }
            })
        } else {
            Toast('暂不支持指纹验', 'none', 1000)
        }
    },
})
export default FingerprintStore