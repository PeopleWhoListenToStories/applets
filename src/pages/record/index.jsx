import React, { useState, useEffect } from 'react'
import Taro, { useDidShow } from "@tarojs/taro"
import { View, Text, Button, CoverImage, Icon, Picker, Radio, RadioGroup } from "@tarojs/components"
import CreateFlag from "./components/createFlag"
import {
    getRecordList,
    getRecordAllList,
    recordChangeStatus
} from "../../service/apiModules/api"
import "./index.less"

export default function index() {
    const [navMenu, setNavMenu] = useState(['今日', '全部'])
    const [currentMenu, setCurrentMenu] = useState('今日')
    const [todayList, setTodayList] = useState([])
    const [allList, setAllList] = useState([])
    const [off, setOff] = useState(false)
    const [date, setDate] = useState([new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()])

    useDidShow(() => {
        getList()
        Taro.setNavigationBarTitle({
            title: "每日一记"
        })
    })


    useEffect(() => {
        getAllList()
        return () => { }
    }, date)

    async function getList() {
        const result = await getRecordList()
        if (result.data.status === 200) {
            setTodayList(result.data.data)
        }
    }

    async function getAllList() {
        const result = await getRecordAllList({
            year: date[0],
            month: date[1],
            day: date[2]
        })
        if (result.data.status === 200) {
            setAllList(result.data.data)
        }
    }

    async function changeStatus(status, user_id, type_id) {
        const result = await recordChangeStatus({
            status: 1,
            user_id,
            type_id
        })
        if (result.data.status === 200) {
            getList()
        }
    }

    function showCreateFlag(type) {
        setOff(type === 'close' ? false : true)
        getList()
    }

    function onDateChange(e) {
        const date = e.detail.value.split('-')
        setDate([date[0], date[1].startsWith('0') ? date[1].substr(1) : date[1], date[2].startsWith('0') ? date[2].substr(1) : date[2]])
    }

    function setMenu(index) {
        setCurrentMenu(navMenu[index])
        switch (index) {
            case 0:
                getList()
                break;
            case 1:
                getAllList()
                break;
            default:
                break;
        }
    }

    return (
        <View className='record'>
            <View className='recoed_nav'>
                {
                    navMenu.map((navName, index) => {
                        return <Text className={'text ' + (currentMenu === navName ? 'text-active' : '')} key={navName} onClick={() => { setMenu(index) }}>{navName}</Text>
                    })
                }
            </View>
            {
                off ? <CreateFlag close={() => { showCreateFlag('close') }} />
                    :
                    <View className='content'>
                        {
                            currentMenu === '全部' && <View className='page-section'>
                                <Picker mode='date' onChange={(e) => { onDateChange(e) }}>
                                    <View className='picker'>
                                        {date[0]} - {date[1]} - {date[2]}
                                    </View>
                                </Picker>
                            </View>
                        }
                        {
                            currentMenu === '今日' && (todayList.length ? todayList.map(item => {
                                return <View className='item' key={item.user_id}>
                                    <Text > {item.label}  </Text>
                                    <RadioGroup onChange={(e) => { changeStatus(e, item.user_id, item.type_id) }}>
                                        <Radio checked={item.status === '1'} />
                                    </RadioGroup>
                                </View>
                            }) : <CoverImage className='img' src='../../assets/image/wushuju.png' />)
                        }
                        {
                            currentMenu === '全部' && (allList.length ? allList.map(item => {
                                return <View className='item' key={item.user_id}>
                                    <Text > {item.label}  </Text>
                                    {
                                        item.status === '1' ? <Icon size='20' type='success' /> : <Icon size='20' type='waiting' />
                                    }
                                </View>
                            }) : <CoverImage className='img' src='../../assets/image/wushuju.png' />)
                        }
                    </View>
            }

            {
                !off && currentMenu === '今日' && <View className="createFlag">
                    <Button size='mini' type='primary' plain onClick={() => { showCreateFlag('show') }}>Flag</Button>
                </View>
            }
        </View>
    )
}