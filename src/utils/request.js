import Taro from '@tarojs/react'
const Fly = require("flyio/dist/npm/wx")
const fly = new Fly

//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = "http://127.0.0.1:7002";
// 请求公共参数
fly.config.params = {
    x_app_network: 'wifi',
    _: '17688fe7a8f.124',
    x_system_version: 'iOS 14.0.1',
    x_system_type: 'wx_xcx',
    x_app_version: '8.2.31',
    x_device_name: 'iPhone 11 Pro Max<iPhone12,5>',
    x_app_name: 'wx_xcx',
    x_api_sign: 'ad35b96942cd0021b7888a7291a3dc1e'
};

//添加请求拦截器
fly.interceptors.request.use((request) => {
    //给所有请求添加自定义header
    request.headers["X-Tag"] = "flyio";
    //打印出请求体
    console.log(request.body)
    //终止请求
    //var err=new Error("xxx")
    //err.request=request
    //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        if (response.data) {
            if (response.data.code == 1) {
                return response.data.data
            } else {
                Taro.showToast({
                    title: response.data.msg, //提示的内容,
                    icon: 'none', //图标,
                });
            }
        }
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)

export default fly;