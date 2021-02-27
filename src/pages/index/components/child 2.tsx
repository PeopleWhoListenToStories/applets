import React, { useState } from 'react'
import Taro from "@tarojs/taro"
import { View, Text, CoverImage } from "@tarojs/components"
import "../../../../config"
import "./child.scss"

interface GirdItem {
  label: string,
  value: string,
  icon: string
}

const Child: React.FC = () => {
  const [list, setList] = useState<GirdItem[]>([
    {
      label: '地图',
      value: 'map',
      icon: global && (global as any).constants.icon.mapIcon
    },
    {
      label: 'Flag',
      value: 'record',
      icon: (global as any).constants.icon.flagIcon
    },
    {
      label: '其他',
      value: '',
      icon: (global as any).constants.icon.otherIcon
    },
    {
      label: '其他',
      value: '',
      icon: (global as any).constants.icon.otherIcon
    },
    {
      label: '其他',
      value: '',
      icon: (global as any).constants.icon.otherIcon
    },
    {
      label: '其他',
      value: '',
      icon: (global as any).constants.icon.otherIcon
    },
    {
      label: '其他',
      value: '',
      icon: (global as any).constants.icon.otherIcon
    },
    {
      label: '其他',
      value: '',
      icon: (global as any).constants.icon.otherIcon
    },
    {
      label: '其他',
      value: '',
      icon: (global as any).constants.icon.otherIcon
    }
  ])

  function go(type: string) {
    Taro.navigateTo({
      url: `/pages/${type}/index`,
    })
  }
  return <View className='grid_squared'>
    {
      list.map((item: GirdItem, index: number) => {
        return <View key={index} className='button' onClick={() => { go(item.value) }}  >
          <CoverImage className='img' src={item.icon} />
          <Text className='text'>{item.label}</Text>
        </View>
      })
    }
  </View>
}
export default Child