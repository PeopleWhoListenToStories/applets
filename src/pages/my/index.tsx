import React, { useEffect, useState } from 'react'
import Taro, { useDidShow, useDidHide } from '@tarojs/taro'
import { useObserver } from 'mobx-react'
import { View, Text, Input, Button } from '@tarojs/components'
import Photo from './components/Phtot'
import store from '../../store/index'
import { Toast } from '../../utils/tool'
import { getUserInfo, updateUserName } from '../../service/apiModules/user'
import '../../../config.ts'
import './index.scss'

const My: React.FC = () => {
  const { User } = store
  const [touchStartTime, setTouchStartTime] = useState<number>(0)
  const [isShowUserName, setShowUserName] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>('')

  useDidShow(() => {
    getUserInfoFn()
    Taro.setNavigationBarTitle({
      title: '个人中心'
    })
  })

  useDidHide(() => {
    setShowUserName(false)
  })

  async function getUserInfoFn() {
    const result = await getUserInfo()
    if (result.data.status === 200) {
      User.setuserInfo(result.data.data)
      setUserName(result.data.data.codeName)
    }
  }

  // 上传头像调用接口
  async function upload(imgList = []) {
    //小程序
    if (process.env.TARO_ENV === 'weapp') {
      Taro.showLoading({
        title: '正在加载',
        mask: true
      })
      Taro.uploadFile({
        url: `${(global as any).constants.website}/api/updateUserPhoto`, //仅为示例，非真实的接口地址
        filePath: (imgList[0] as any).url,
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
      Taro.chooseImage({
        count: 1,   // 可选图片数量, 这里限制为1张
        sizeType: ['original', 'compressed'], // 可以指定是原图还是缩图，默认二者都有
        sourceType: ['album', 'camera'],  // 可以指定来源是相机还是相册，默认二者
        success(res) {
          const files: any = [];
          // 以下几行代码是为了处理成自己想要的格式[{file: {path: '', size: ''}, url: '' }]
          const obj: any = {};
          obj.file = res.tempFiles[0];
          obj.url = res.tempFilePaths[0];
          files.push(obj);
          upload(files)
        }
      })
    }
  }

  // 修改用户名
  async function updateName() {
    const result = await updateUserName({ userName })
    if (result.data.code === 200) {
      getUserInfoFn()
      setShowUserName(false)
      Toast('修改成功', 'success', 1000)
    } else {
      Toast('修改失败', 'none', 1000)
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
      url: `/pages/my/${name}/index`
    })
  }

  // 双击显示编辑名字
  function touchStart(e) {
    let timer: any = null;
    if (!touchStartTime) {
      setTouchStartTime(e.timeStamp)
      timer = setTimeout(() => {
        setTouchStartTime(0)
        clearTimeout(timer);
      }, 500)
    } else {
      if (e.timeStamp - touchStartTime < 350) {
        setTouchStartTime(0)
        setShowUserName(true)
        clearTimeout(timer);
      }
    }
  }

  return useObserver(() => (
    <View className='container'>
      <View className='nav'>
        <View className='photo'>
          <Photo photoUrl={User.userInfo.photo} uploadImg={uploadImg.bind(this)} />
        </View>
        <View className='info' onTouchStart={(e) => { touchStart(e) }}>
          {
            isShowUserName ?
              <View className='changeInfo'><Input focus value={userName} onInput={(e) => { setUserName(e.detail.value) }} /> <Text className="btn" onClick={() => { updateName() }}>OK</Text></View>
              : <Text>{userName}</Text>
          }
        </View>
      </View>
      <View className='content'>
        <Text className='lebalItem' onClick={() => { clickToEmptyPage('about') }}>关于我们</Text>
        <Text className='lebalItem' onClick={() => { exitLogin() }}>退出登陆</Text>
      </View>
      {/* <CoverView className='play' >
                <CoverImage className='img' src='../../assets/image/newyear.png' />
            </CoverView> */}
    </View>
  ))
}
export default My