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

// 修改用户名
export const updateUserName = (params) => {
    return request.post('/api/updateUserName', params)
}

// 获取登陆验证码
export const getUserCode = (parmas) => {
    return request.post(`/api/note`, parmas)
}