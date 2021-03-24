import React, { useState } from 'react'
import Taro, { useDidShow } from "@tarojs/taro"
import { AtTextarea, AtMessage, AtButton, AtNavBar } from 'taro-ui'
import { View } from "@tarojs/components"
// import HandleButton from "../components/handle_button"
import { createLeavingMessage } from '../../../service/apiModules/api'

import "taro-ui/dist/style/components/message.scss";
import "taro-ui/dist/style/components/modal.scss";
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import "./index.scss"

const LeavingMessage: React.FC = () => {
    const [message, setMessage] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false)


    useDidShow(() => {
        Taro.setNavigationBarTitle({
            title: ""
        })
    })

    function handleMessageChange(value: any) {
        setMessage(value)
    }

    function handleClose() {
        setOpen(false)
    }

    function handleCancel() {
        setOpen(false)
    }

    function handle_Confirm() {
        Taro.atMessage({
            'message': '消息通知',
            'type': 'success',
        })
        setOpen(false)
    }

    async function sendMessage() {
        if (message) {
            const { data } = await createLeavingMessage({ message: message })
            if (data.code === 200) {
                setMessage('')
                Taro.atMessage({
                    'message': data.massage,
                    'type': 'success',
                })
            } else {
                Taro.atMessage({
                    'message': data.massage,
                    'type': 'warning',
                })
            }
        } else {
            Taro.atMessage({
                'message': '留言内容不能为空',
                'type': 'warning',
            })
        }
    }

    function handleClickBack() {
        Taro.switchTab({
            url: '/pages/my/index'
        })
    }

    return (
        <View className='leaving-message'>
            <AtNavBar
                onClickRgIconSt={() => { handleClickBack() }}
                onClickRgIconNd={() => { handleClickBack() }}
                onClickLeftIcon={() => { handleClickBack() }}
                color='#000'
                leftText='返回'
                title="留言"
                leftIconType='chevron-left'
            > </AtNavBar>
            <AtTextarea
                className="text"
                value={message}
                onChange={(e) => { handleMessageChange(e) }}
                maxLength={200}
                height={300}
                placeholder='您的问题是...'
            />
            <AtButton className='at-icon-menu' type='primary' onClick={() => { sendMessage() }}>提交</AtButton>
            <AtMessage />
            {/* <AtModal
                isOpened={open}
                title='确认写好了?'
                cancelText='取消'
                confirmText='确认'
                onClose={() => { handleClose() }}
                onCancel={() => { handleCancel() }}
                onConfirm={() => { handleConfirm() }}
                content=''
            /> */}
        </View>
    )
}

export default LeavingMessage
