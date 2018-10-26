import VueLeafletComponent from './components/Map.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-leaflet-component', VueLeafletComponent)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    VueLeafletComponent
  },
  template: `
    <vue-leaflet-component
      :width="${800}"
      :height="${600}"
      :zoom="${4}"
      :lat-lng="[37, 127]"
      tile = "osm"
      @init="logMap"
    >
    </vue-leaflet-component>
  `,
  methods: {
    logMap (map) {
      console.log(map)
    }
  }
})

// export { VueLeafletComponent }
// export default VueLeafletComponent
