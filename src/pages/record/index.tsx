import React, { useState, useEffect } from 'react'
import Taro, { useDidShow } from "@tarojs/taro"
import { AtSwipeAction } from "taro-ui"
import { View, Text, Button, CoverImage, Icon, Picker, Checkbox, RadioGroup } from "@tarojs/components"
import { Toast } from '../../utils/tool'

import CreateFlag from "./components/createFlag"
import Histogram from "../../components/Histogram/index"
import {
    getRecordList,
    removeFlagType,
    getRecordAllList,
    removeDayFlagType,
    getRecordMonthList,
    recordChangeStatus
} from "../../service/apiModules/api"
import "taro-ui/dist/style/components/swipe-action.scss";
import "../../../config"
import "./index.scss"

const Record: React.FC = () => {
    const [navMenu, setNavMenu] = useState(['今日', '全部', '图表'])
    const [currentMenu, setCurrentMenu] = useState('今日')
    const [todayList, setTodayList] = useState([])
    const [allList, setAllList] = useState([])
    const [chartList, setChartList] = useState([])
    const [off, setOff] = useState(false)
    const [date, setDate] = useState([new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()])

    useDidShow(() => {
        getList()
        getChartList()
        Taro.setNavigationBarTitle({
            title: "每日一记"
        })
    })


    useEffect(() => {
        getAllList()
        return () => { }
    }, [date])

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

    async function getChartList() {
        const result = await getRecordMonthList({
            year: date[0],
            month: date[1]
        })
        if (result.data.status === 200) {
            setChartList(result.data.data)
        }
    }

    async function changeStatus(status: any, user_id: string, type_id: number) {
        const result = await recordChangeStatus({
            status: +status === 1 ? 0 : 1,
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
        const searchDate = e.detail.value.split('-')
        setDate([searchDate[0], searchDate[1].startsWith('0') ? searchDate[1].substr(1) : searchDate[1], searchDate[2].startsWith('0') ? searchDate[2].substr(1) : searchDate[2]])
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
            case 2:
                getChartList()
                break;
            default:
                break;
        }
    }

    async function handleClick(e, type_id) {
        if (e.text === '确认') {
            const { data } = await removeFlagType(type_id)
            if (data.status === 200) {
                Toast('删除成功', 'success', 500)
                let timer = setTimeout(() => {
                    getList()
                    clearTimeout(timer)
                }, 300)
            }
        }
    }

    async function handleAllClick(e, type_id) {
        if (e.text === '确认') {
            const { data } = await removeDayFlagType({ type_id, updateTime: date[0] + '-' + date[1] + '-' + date[2] })
            if (data.status === 200) {
                Toast('删除成功', 'success', 500)
                let timer = setTimeout(() => {
                    getAllList()
                    clearTimeout(timer)
                }, 300)
            }
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
                off ? <CreateFlag close={() => showCreateFlag('close')} />
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
                            currentMenu === '今日' && (todayList.length ? todayList.map((item: any) => {
                                return <AtSwipeAction autoClose={true} onClick={(e) => { handleClick(e, item.type_id) }} options={[{ text: '取消', style: { backgroundColor: '#6190E8' } }, { text: '确认', style: { backgroundColor: '#FF4949' } }]}>
                                    <View className='normal item' key={item.user_id}>
                                        <Text > {item.label}  </Text>
                                        <RadioGroup onChange={() => { changeStatus(item.status, item.user_id, item.type_id) }}>
                                            <Checkbox checked={item.status === '1'} />
                                        </RadioGroup>
                                    </View>
                                </AtSwipeAction>
                            }) : <CoverImage className='img' src={(global as any).constants.icon.zanwushujuIcon} />)
                        }
                        {
                            currentMenu === '全部' && (allList.length ? allList.map((item: any) => {
                                return <AtSwipeAction autoClose={true} onClick={(e) => { handleAllClick(e, item.type_id) }} options={[{ text: '取消', style: { backgroundColor: '#6190E8' } }, { text: '确认', style: { backgroundColor: '#FF4949' } }]}>
                                    <View className='item' key={item.user_id}>
                                        <Text > {item.label}  </Text>
                                        {
                                            item.status === '1' ? <Icon size='20' type='success' /> : <Icon size='20' type='waiting' />
                                        }
                                    </View>
                                </AtSwipeAction>
                            }) : <CoverImage className='img' src={(global as any).constants.icon.zanwushujuIcon} />)
                        }
                    </View>
            }

            {
                !off && currentMenu === '今日' && <View className='createFlag'>
                    <Button size='mini' type='primary' plain onClick={() => { showCreateFlag('show') }}>Flag</Button>
                </View>
            }
            {
                !off && currentMenu === '图表' && <Histogram defaultData={chartList} />
            }
        </View >
    )
}
export default Record