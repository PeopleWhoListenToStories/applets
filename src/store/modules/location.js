import { observable } from 'mobx'

const locationStore = observable({
    startAddress: {},
    endAddress: {},
    currentAddress: {},

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