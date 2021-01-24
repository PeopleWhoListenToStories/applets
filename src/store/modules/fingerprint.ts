import { observable } from 'mobx'
import Taro from "@tarojs/taro"
import UserStore from "./user"
import { Toast } from "../../utils/tool"

import { FingerprintStoreType } from "../interface/fingerprint"

const FingerprintStore = observable<FingerprintStoreType>({

    FingerprintLogin() {
        if (Taro.canIUse('checkIsSupportSoterAuthentication')) { // 检测当前微信版本是否支持调用指纹相关接口
            Taro.checkIsSupportSoterAuthentication({
                success(result: any) {
                    // result.supportMode = [] 不具备任何被SOTER支持的生物识别方式
                    // result.supportMode = ['fingerPrint'] 只支持指纹识别
                    // result.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
                    if (result.supportMode.length !== 0) {
                        Taro.checkIsSoterEnrolledInDevice({
                            // supportMode.length > 1 ? supportMode[1] : supportMode[0]
                            checkAuthMode: result.supportMode[0],
                            success(result1: any) {
                                if (result1.errMsg === 'checkIsSoterEnrolledInDevice:ok' && result.supportMode[0] === 'fingerPrint') {
                                    Taro.startSoterAuthentication({
                                        requestAuthModes: ['fingerPrint'],
                                        challenge: '123456',
                                        authContent: '请用指纹解锁',
                                        success(result2: any) {
                                            if (result2.errCode === 0) {
                                                // verifySignature(result)
                                                Toast('指纹验证成功', 'success', 1000)
                                                UserStore.login()
                                            } else {
                                                Toast(result2.errMsg || '验证失败', 'none', 1000)
                                            }
                                        }
                                    })

                                } else if (result1.errMsg === 'checkIsSoterEnrolledInDevice:ok' && result.supportMode[0] === 'facial') {
                                    Taro.checkIsSupportFacialRecognition({
                                        checkAliveType: 2,
                                        // complete: result => {
                                        //     console.log(result, "result123123")
                                        // }
                                        success: function (res) {
                                            if (res.errCode === 0 || res.errMsg === "checkIsSupportFacialRecognition:ok") {
                                                //调用人脸识别
                                                // _this.startface(_this.data.custName.replace(/(^\s*)|(\s*)$/g, ""), _this.data.custIdCard);//身份证名称，身份证号码
                                                return;
                                            }
                                            Toast('微信版本过低暂时无法使用此功能请升级微信最新版本')
                                        },
                                        fail: res => {
                                            Toast('微信版本过低暂时无法使用此功能请升级微信最新版本')
                                        }

                                    })
                                } else {
                                    Toast(result1.errMsg || '验证失败', 'none', 1000)
                                }
                                // console.log(res, "fingerPrint")// isEnrolled的值是0或者1，不知道是不是指纹个数或是Boolean
                            }
                        })

                    } else {
                        Toast('不具备识别', 'none', 1000)
                    }
                },
                fail(result) {
                    Toast(result.errMsg || '暂不支持指纹验', 'none', 1000)
                }
            })
        } else {
            Toast('暂不支持指纹验', 'none', 1000)
        }
    },

})
export default FingerprintStore