import { observable } from 'mobx'
import { locationStoreType } from "../interface/localtion"

const locationStore = observable<locationStoreType>({
    startAddress: {
        title: '',
        lat: null,
        lng: null
    },
    endAddress: {
        title: '',
        lat: null,
        lng: null
    },
    currentAddress: {
        title: ''
    },

    isLocationCom: '',

    setStartAddress(params) {
        this.startAddress = params
    },

    setEndAddress(params) {
        this.endAddress = params
    },
    setCurrentAddress(params) {
        this.currentAddress = params.toString()
    }

})

export default locationStore