export interface locationStoreType {
    startAddress: {
        title: string,
        lat: null,
        lng: null
    },
    endAddress: {
        title: string,
        lat: null,
        lng: null
    },
    currentAddress: {
        title: string
    },
    isLocationCom: string,
    setStartAddress: (params: any) => void,
    setEndAddress: (params: any) => void,
    setCurrentAddress: (params: any) => void,
}