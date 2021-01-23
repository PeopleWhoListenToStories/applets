import locationStore from './modules/location.js'
import userStore from './modules/user.js'
import FingerprintStore from "./modules/fingerprint"
export default {
    Location: locationStore,
    User: userStore,
    Fingerprint: FingerprintStore
}