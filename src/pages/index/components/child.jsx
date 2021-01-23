import React from 'react'
import Taro from "@tarojs/taro"
import { View, Text, CoverView, CoverImage } from "@tarojs/components"
import "./child.less"

const Child = () => {
  function go(type) {
    Taro.navigateTo({
      url: `/pages/${type}/index`,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  }
  return <View>
    <View className='grid_squared'>
      <View className='button' onClick={() => { go('map') }}  >
        <CoverImage className='img' src='../../assets/image/ditu.png' />
        <Text className='text'>地图</Text>
      </View>
      <View className='button' onClick={() => { go('record') }}  >
        <CoverImage className='img' src='../../assets/image/niandurenwu.png' />
        <Text className='text'>Flag</Text>
      </View>
      <View className='button space' onClick={() => { }}  >
        <CoverImage className='img' src='../../assets/image/suo.png' />
        <Text className='text'>其他</Text>
      </View>
      <View className='button' onClick={() => { }}  >
        <CoverImage className='img' src='../../assets/image/suo.png' />
        <Text className='text'>其他</Text>
      </View>
      <View className='button' onClick={() => { }}  >
        <CoverImage className='img' src='../../assets/image/suo.png' />
        <Text className='text'>其他</Text>
      </View>
      <View className='button' onClick={() => { }}  >
        <CoverImage className='img' src='../../assets/image/suo.png' />
        <Text className='text'>其他</Text>
      </View>
      <View className='button' onClick={() => { }}  >
        <CoverImage className='img' src='../../assets/image/suo.png' />
        <Text className='text'>其他</Text>
      </View>
      <View className='button' onClick={() => { }}  >
        <CoverImage className='img' src='../../assets/image/suo.png' />
        <Text className='text'>其他</Text>
      </View>
      <View className='button' onClick={() => { }}  >
        <CoverImage className='img' src='../../assets/image/suo.png' />
        <Text className='text'>其他</Text>
      </View>
    </View>
  </View>
}
export default Child