import Taro from '@tarojs/taro'
import { HTTP_STATUS } from '../const/status'
import '../../config'
import { Toast } from '../utils/tool'
import stroe from "../store/index"

const authority = Taro.getStorageSync('authority')

const whileList = ['/api/user/login']

export default {
    async baseOptions(params, method = 'GET') {
        const { User } = stroe
        let { url, data } = params
        let authority = Taro.getStorageSync('authority')
        // let token = getApp().globalData.token
        if (!authority && !whileList.includes(params.url)) {
            User.loginOut()
            Taro.showModal({
                title: '登陆语',
                content: '未曾相逢先一笑',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                        User.login()
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                        Taro.navigateTo({
                            url: '/pages/notauthority/index'
                        })
                    }
                }
            })
            return {
                status: 401,
                data: {}
            }
        }
        Taro.checkSession({
            success: function () {
                console.log('ok 未过期，并且在本生命周期一直有效',)
                //session_key 未过期，并且在本生命周期一直有效
            },
            fail: function () {
                console.log('fail 已经失效，需要重新执行登录流程')
                // session_key 已经失效，需要重新执行登录流程

                // login() //重新登录
            }
        })
        Taro.showLoading({
            title: '正在加载',
            mask: true
        })
        let contentType = 'application/x-www-form-urlencoded'
        contentType = params.contentType || contentType
        const option = {
            // isShowLoading: true,
            // loadingText: '正在加载',
            url: global.constants.website + url,
            data: data,
            method: method,
            header: { 'content-type': contentType, 'authority': Taro.getStorageSync('authority') },
            success(res) {
                Taro.hideLoading()
                switch (res.data.status) {
                    case HTTP_STATUS.AUTHENTICATE:
                        Taro.switchTab({
                            url: '/pages/my/index'
                        })
                        return Toast('当前用户已过期', null, 1000)
                    case HTTP_STATUS.NOT_FOUND:
                        return Toast('请求资源不存在', null, 1000)
                    case HTTP_STATUS.BAD_GATEWAY:
                        return Toast('服务端出现了问题', null, 1000)
                    case HTTP_STATUS.FORBIDDEN:
                        return Toast('没有权限访问', null, 1000)
                    case HTTP_STATUS.SUCCESS:
                        return res.data
                    default:
                        return Toast('其他错误', null, 1000)
                }
            },
            error(e) {
                Taro.hideLoading()
                Toast('请求接口出现问题')
            }
        }
        return Taro.request(option)
    },
    get(url, data = '') {
        let option = { url, data }
        return this.baseOptions(option)
    },
    post: function (url, data, contentType) {
        let params = { url, data, contentType }
        return this.baseOptions(params, 'POST')
    },
    put: function (url, data, contentType) {
        let params = { url, data, contentType }
        return this.baseOptions(params, 'PUT')
    }
}