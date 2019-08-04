// import BootstrapVue from 'bootstrap-vue'

import {toaster} from './toast'
let Toast = {}
console.log('here')
Toast.install = function(Vue, options){
    let toast = {
        success(msg = 'Message', title='Success',position='b-toaster-top-right', append = false){
            return toaster()
        },
    }
    
    Vue.prototype.$toast = toast
}
export default Toast