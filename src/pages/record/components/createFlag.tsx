import React, { useState } from 'react'
import Taro from "@tarojs/taro"
import { View, Button, Textarea } from "@tarojs/components"
import { createType } from "../../../service/apiModules/api"
import "./createFlag.scss"

const CreateFlag: React.FC = (props: any) => {
    const [value, setValue] = useState('')

    async function save() {
        if (!value) {
            Taro.showToast({
                title: '您还没有输入',
                duration: 2000,
                icon: 'none',
                mask: true,
            })
            return
        }
        const result = await createType({ label: value })
        if (result.data.status === 200) {
            props.close()
        } else {
            Taro.showToast({
                title: '您录入的Flag已存在·',
                duration: 2000,
                icon: 'none',
                mask: true,
            })
        }
    }

    function changeText(e) {
        setValue(e)
    }

    return (
        <View className='CreateFlag'>
            {/* <View className="close" onClick={() => { close() }}>X</View> */}
            <View className='title'>输入创建的标题</View>
            <Textarea className='text' placeholder='大胆的输入吧！' autoFocus onInput={(e) => { changeText(e.detail.value) }} />
            <View className='save'>
                <Button size='mini' type='primary' plain onClick={() => { save() }}>创建</Button>
            </View>
        </View>
    )
}
export default CreateFlag