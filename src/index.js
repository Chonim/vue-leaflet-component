// import Vue from 'vue'
import VueLeafletComponent from './components/Map.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-leaflet-component', VueLeafletComponent)
}

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {
//     VueLeafletComponent
//   },
//   template: '<VueLeafletComponent/>'
// })

export { VueLeafletComponent }
export default VueLeafletComponent
