// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLeafletComponent from './components/Map'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-leaflet-component', VueLeafletComponent)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    VueLeafletComponent
  },
  template: '<VueLeafletComponent/>'
})
