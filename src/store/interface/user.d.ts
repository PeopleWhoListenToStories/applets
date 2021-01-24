export interface UserStoreType {
    userInfo: {
        [key: string]: string
    },
    setuserInfo: (parms: any) => void,
    login: () => void,
    loginOut: () => void,
}