<template>
  <div class="w-full h-screen flex flex-col bg-dark">
    <div class="relative flex-grow m-4 rounded-2xl overflow-hidden">
      <GmapMap
        class="w-full h-full"
        :center="{ lat: 52.21833, lng: 6.89583 }"
        :zoom="1"
        :options="{
          mapId: '42c056fc8fd3543',
          disableDefaultUI: true,
          restriction: {
            latLngBounds: {
              north: 52.25975249383111,
              south: 52.17603712615544,
              east: 6.992454528808594,
              west: 6.794700622558593,
            },
            strictBounds: false,
          },
        }"
      >
        <GmapMarker
          :position="{ lat: 52.21833, lng: 6.89583 }"
          icon="http://maps.google.com/mapfiles/kml/paddle/purple-blank.png"
        />
      </GmapMap>
      <DButton href="#" class="absolute top-4 left-4">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
          />
        </svg>
        Help
      </DButton>
      <div class="absolute top-4 right-4 flex gap-4">
        <DButton
          v-for="filter in filters"
          :key="filter"
          href="javascript:void(0)"
          :selected="selected === filter"
          @click="selected = filter"
          >{{ filter }}</DButton
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      selected: 'All',
      filters: ['All', 'Persons', 'People', 'Things'],
    }
  },
})
</script>
