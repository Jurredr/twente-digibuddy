<template>
  <div class="w-full h-screen">
    <google-map
      :center="{ lat: 52.21833, lng: 6.89583 }"
      :zoom="14"
      :options="{ mapId: '42c056fc8fd3543' }"
    ></google-map>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
