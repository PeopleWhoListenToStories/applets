import React, { useState } from 'react'
import Taro, { useDidShow, useDidHide } from "@tarojs/taro"
import { useObserver } from 'mobx-react'
import { View, CoverView, CoverImage, Canvas, Text } from '@tarojs/components'
import Photo from "./components/Phtot"
import store from '../../store/index'
import { Toast } from "../../utils/tool"
import { getUserInfo } from "../../service/apiModules/user"
import "../../../config"
import "./index.less"

export default function My(props) {
    const { User } = store
    const [canvasStyle, setCanvasStyle] = useState({ height: '100rpx', width: '100rpx' })

    useDidShow(() => {
        getUserInfoFn()
        Taro.setNavigationBarTitle({
            title: "个人中心"
        })
    })

    useDidHide(() => {
        // console.log('useDidHide')
    })

    async function getUserInfoFn() {
        const result = await getUserInfo()
        if (result.data.status === 200) {
            User.setuserInfo(result.data.data)
        }
    }

    function handleOperaClick(e) {
        e.preventDefault();
        let {
            flag,
        } = e.currentTarget.dataset;
        switch (flag) {
            case 'portrait': {
                // 从手机相册中选择图片或使用相机拍照
                // Taro.chooseImage({
                //     count: 1,
                //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                //     sourceType: ['album', 'camera'],  // 可以指定来源是相册还是相机
                // }).then(async (res) => {  //我使用链式写法，也可以使用官方文档提供的方式
                //     console.warn('chooseImage then', res)
                // const files = [];
                // // 以下几行代码是为了处理成自己想要的格式[{file: {path: '', size: ''}, url: '' }]
                // const obj = {};
                // obj.file = res.tempFiles[0];
                // obj.url = res.tempFilePaths[0];
                //     files.push(obj);
                //     console.warn('then obj', files)
                //     // 上传到七牛返回的图片连接，可以在线访问
                //     const itemImgUrlLIst = await utils.transImgList(files || [])
                //     console.warn('then itemImgUrlLIst', itemImgUrlLIst)
                //     Taro.showLoading();
                //     // 把返回的链接传给更换个人信息的接口，完成头像更换
                //     this.props.dispatch({
                //         type: 'mine/fecthupdatePersonInfo',
                //         payload: {
                //             headImg: itemImgUrlLIst[0]  // 因为是个数组，获取数组第一个元素
                //         }
                //     }).then(res => {
                //         if (res.resultCode === 200) {
                //             Taro.hideLoading();
                //             // 更换调全局缓存的数据，要不显示不出来
                //             const userInfo = getGlobalData('userInfo');
                //             userInfo.headImg = itemImgUrlLIst[0];
                //             setGlobalData('userInfo', userInfo);
                //             this.componentDidMount();
                //         }
                //     })
                // })
                break;
            }
            case 'name': {
                Taro.navigateTo({
                    url: `/subMinePages/UpdateName/UpdateName`
                })
                break;
            }

            case 'phone': {
                Taro.navigateTo({
                    url: `/subMinePages/UpdatePhone/UpdatePhone`
                })
                break;
            }

            case 'address': {
                Taro.navigateTo({
                    url: `/subMinePages/MyAddress/MyAddress`
                })
                break;
            }
            default: {
                break;
            }
        }
    }

    // 上传头像调用接口
    async function upload(imgList = []) {
        const Taro = require('@tarojs/taro')
        // const wx = require('m-commonjs-jweixin');
        //小程序
        if (process.env.TARO_ENV === 'weapp') {
            // const base64 = wx.getFileSystemManager().readFileSync(imgList[0].url, 'base64')
            // const arrayBuffer = Taro.base64ToArrayBuffer(base64)
            // const result = await postUpLoadImage(arrayBuffer)
            Taro.showLoading({
                title: '正在加载',
                mask: true
            })
            Taro.uploadFile({
                url: `${global.constants.website}/api/updateUserPhoto`, //仅为示例，非真实的接口地址
                filePath: imgList[0].url,
                name: 'file',
                formData: {},
                header: { 'content-type': 'multipart/form-data', 'authority': Taro.getStorageSync('authority') },
                success(res) {
                    const data = JSON.parse(res.data)
                    if (data.code === 200) {
                        const userInfo = User.userInfo
                        userInfo.photo = data.url
                        User.setuserInfo(userInfo)
                        Toast('更新成功', 'success', 1000)
                    } else {
                        Toast('更新失败', 'none', 1000)
                    }
                    Taro.hideLoading()
                }
            })
        }
    }

    // 修改头像
    async function uploadImg(e) {
        if (process.env.TARO_ENV === 'weapp') {
            const Taro = require('@tarojs/taro')
            Taro.chooseImage({
                count: 1,   // 可选图片数量, 这里限制为1张
                sizeType: ['original', 'compressed'], // 可以指定是原图还是缩图，默认二者都有
                sourceType: ['album', 'camera'],  // 可以指定来源是相机还是相册，默认二者
                success(res) {
                    const files = [];
                    // 以下几行代码是为了处理成自己想要的格式[{file: {path: '', size: ''}, url: '' }]
                    const obj = {};
                    obj.file = res.tempFiles[0];
                    obj.url = res.tempFilePaths[0];
                    files.push(obj);
                    upload(files)
                    // Taro.getImageInfo({
                    //     src: res.tempFilePaths[0],
                    //     success: (res) => {
                    //         console.log('getImageInfo=>res', res)
                    //         console.log('getImageInfo=>', res.path)
                    //         let originW = res.width
                    //         let originH = res.height
                    //         //压缩比例
                    //         //最大尺寸限制，这里我不知道为什么规定的320和420无法压缩到对应的值，只好/3试试，发现可以
                    //         let maxW = 320 / 3
                    //         let maxH = 420 / 3
                    //         //目标尺寸
                    //         let targetW = originW
                    //         let targetH = originH
                    //         if (originW > maxW || originH > maxH) {
                    //             if (originW / originH > maxW / maxH) {
                    //                 // 要求宽度*(原生图片比例)=新图片尺寸
                    //                 targetW = maxW;
                    //                 targetH = Math.round(maxW * (originH / originW));
                    //             } else {
                    //                 targetH = maxH;
                    //                 targetW = Math.round(maxH * (originW / originH));
                    //             }
                    //         }
                    //         //尝试压缩文件，创建 canvas
                    //         let ctx = Taro.createCanvasContext('firstCanvas');
                    //         ctx.clearRect(0, 0, targetW, targetH);
                    //         console.log(res.path, targetW, targetH)
                    //         ctx.drawImage(res.path, 0, 0, targetW, targetH);
                    //         ctx.draw();
                    //         //设置canvas的长宽
                    //         setCanvasStyle({
                    //             width: targetW + 'px',
                    //             height: targetH + 'px',
                    //         })
                    //         setTimeout(() => {
                    //             Taro.canvasToTempFilePath({
                    //                 canvasId: 'firstCanvas',
                    //                 width: targetW,
                    //                 height: targetH,
                    //                 success: (res) => {
                    //                     console.log('画布信息=>', res)
                    //                     console.log('画布信息=>', res.tempFilePath)
                    //                     Taro.getImageInfo({
                    //                         src: res.tempFilePath,
                    //                         success: (res) => {
                    //                             console.log('压缩后的res', res)
                    //                         }
                    //                     })
                    //                     this.setState({
                    //                         tempFilePaths: res.tempFilePath,
                    //                         hidden: true,
                    //                         isChanged: true
                    //                     })
                    //                     Taro.setStorageSync('userImage', res.tempFilePath)
                    //                 }
                    //             })
                    //         }, 500)
                    //     }
                    // })
                }
            })

        }
    }

    // 退出登陆
    function exitLogin() {
        Toast('正在退出', 'loading', 1000)
        User.loginOut()
        setTimeout(() => {
            Taro.navigateTo({
                url: '/pages/notauthority/index'
            })
        }, 600)
    }

    function clickToEmptyPage(name) {
        Taro.navigateTo({
            url: '/pages/my/about/index'
        })
    }

    return useObserver(() => (
        <View className="container">
            <View className="nav">
                <View className="photo">
                    <Photo photoUrl={User.userInfo.photo} uploadImg={uploadImg.bind(this)} />
                </View>
                <View className="info">
                    <Text>{User.userInfo.codeName}</Text>
                </View>
            </View>
            <View className="content">
                <Text className="lebalItem" onClick={() => { clickToEmptyPage('about') }}>关于我们</Text>
                <Text className="lebalItem" onClick={() => { exitLogin() }}>退出登陆</Text>
            </View>
            {/* <CoverView className='play' >
                <CoverImage className='img' src='../../assets/image/newyear.png' />
            </CoverView> */}
        </View>
    ))
}
