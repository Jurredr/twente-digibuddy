<template>
  <div class="w-full h-screen">
    <google-map
      :center="{ lat: 52.21833, lng: 6.89583 }"
      :zoom="14"
      :options="{ mapId: '42c056fc8fd3543', disableDefaultUI: true }"
    >
      <google-map-marker
        :position="{ lat: 52.21833, lng: 6.89583 }"
        icon="http://maps.google.com/mapfiles/kml/paddle/purple-blank.png"
      />
    </google-map>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
