import request from "../request"

export const getRecordList = () => {
    return request.get('/api/target')
}

export const getRecordAllList = (params) => {
    return request.get('/api/target/date', params)
}

export const getRecordMonthList = (params) => {
    return request.get('/api/targetChart', params)
}

export const recordChangeStatus = (params) => {
    return request.put(`/api/target/${1}`, params)
}

export const createType = (params) => {
    return request.post('/api/target', params)
}

