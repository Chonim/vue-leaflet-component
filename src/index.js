import VueLeafletComponent from './components/Map.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-leaflet-component', VueLeafletComponent)
}

export { VueLeafletComponent }
export default VueLeafletComponent
