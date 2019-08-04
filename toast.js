import Vue from 'vue'
import  BootstrapVue  from 'bootstrap-vue'
Vue.use(BootstrapVue)
export function toaster(msg = 'Message', title='Success',position='b-toaster-top-right', append = false){
    return this.$bvToast.toast( msg, {
        title: title,
        toaster: position,
        variant: 'success',
        solid: true,
        appendToast: append
      })
}