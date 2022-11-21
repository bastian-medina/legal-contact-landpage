<template>
  <div ref="myListRef" class="row justify-right q-gutter-sm" style="margin-top: 80px;">
    <GoogleMap
      api-key="AIzaSyAcVZeaQkG4SZxVU9WJwj67mpfX6ivYuy8"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
  </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { GoogleMap, Marker } from 'vue3-google-map'
  
  export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
      const center = { lat: -33.44013743597887, lng: -70.6449185000114 }
  
      return { center }
    },
  })
  </script>
  