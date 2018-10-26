<template>
  <div>
    <div
      class="vue-leaflet-container"
      :style="{
        width: `${width}px`,
        height: `${height}px`
      }"
    >
      <div id="map" class="vue-leaflet-map"></div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

export default {
  name: 'vue-leaflet-map',
  props: {
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 600
    },
    zoom: {
      type: Number,
      default: 2
    },
    latLng: {
      type: Array,
      default: [0, 0]
    },
    tile: {
      type: String,
      default: 'osm'
    }
  },
  data () {
    return {
      map: null
    }
  },
  mounted () {
    this.initMap()
  },
  computed: {
    mapTile () {
      switch (this.tile) {
        case 'osm':
          return 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
        case 'google':
          return 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
        case 'googleSatellite':
          return 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
        case 'stamenToner':
          return 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
        case 'stamenWatercolor':
          return 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
        default:
          return 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
      }
      return xyzUrl
    }
  },
  methods: {
    initMap () {
      this.$nextTick(() => {
        this.map = L.map('map', {
          zoomControl: false
        })
        L.tileLayer(this.mapTile)
          .addTo(this.map)
        this.map.setView(this.latLng, this.zoom)
        this.$emit('init', this.map)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.vue-leaflet-container {
  // width: 100%;
  // width: 800px;
  // height: 400px;
  background: black;
  position: relative;
  .vue-leaflet-map {
    // position: absolute;
    // margin-top: 200px;
    width: 100%;
    height: 100%;
    // max-height: 100%;
  }
}
</style>
