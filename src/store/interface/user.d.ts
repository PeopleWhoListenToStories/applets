export interface UserStoreType {
    userInfo: {
        [key: string]: string
    },
    code: string | number,
    isOK: boolean,
    setuserInfo: (parms: any) => void,
    login: () => void,
    loginOut: () => void,
    getCode: (value: number) => void,
    setCode: () => void
}