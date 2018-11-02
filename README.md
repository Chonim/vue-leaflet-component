# vue-leaflet-component

> A leaflet map comonent for Vue.js

## Installation

### NPM

``` bash
npm install vue-leaflet-component --save
```

### ES6

```js
import Vue from 'vue'
import Leaflet from 'vue-leaflet-component'

new Vue({
  components: {
    Leaflet
  }
})
```

### Props
#### width
Type: `Number`<br>
Required: `false`<br>
Default: `800`

#### height
Type: `Number`<br>
Required: `false`<br>
Default: `600`

#### zoom
Type: `Number`<br>
Required: `false`<br>
Default: `2`

#### latLng
Type: `Array`<br>
Required: `false`<br>
Default: `800`

#### tile
Type: `String`<br>
Required: `false`<br>
Default: `osm`

- Supported options

  `osm`, `google`, `googleSatellite`, `stamenToner`, `stamenWatercolor`

### Events
#### init