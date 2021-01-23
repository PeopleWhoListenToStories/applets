import request from "../request"

export const postLogin = (params) => {
    return request.post('/api/user/login', params)
}

// 获取用户信息
export const getUserInfo = () => {
    return request.get('/api/userInfo')
}

// 上传图片
export const postUpLoadImage = (params) => {
    return request.post('/api/upload', params, 'multipart/form-data')
}