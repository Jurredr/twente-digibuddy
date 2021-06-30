<template>
  <div class="w-full h-screen flex flex-col bg-dark font-montserrat">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21.552"
          height="21.552"
          viewBox="0 0 21.552 21.552"
        >
          <g
            id="Icon_feather-info"
            data-name="Icon feather-info"
            transform="translate(1.5 1.5)"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M21.552,12.276A9.276,9.276,0,1,1,12.276,3a9.276,9.276,0,0,1,9.276,9.276Z"
              transform="translate(-3 -3)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M18,21.71V18"
              transform="translate(-8.724 -8.724)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              id="Path_3"
              data-name="Path 3"
              d="M18,12h0"
              transform="translate(-8.724 -6.434)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
          </g>
        </svg>
        Help
      </DButton>
      <SwitchButton class="absolute top-16 left-4" option1="🇳🇱" option2="🇬🇧">
      </SwitchButton>
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
      <div
        v-if="modalShown"
        class="
          absolute
          top-0
          left-0
          w-full
          h-full
          bg-black bg-opacity-50
          flex
          justify-center
          items-center
        "
      >
      <IntroModal @click="modalShown = false"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      modalShown: true,
      selected: 'All',
      filters: ['All', 'Persons', '🙋‍♂️ People', 'Things'],
    }
  },
})
</script>

<style>
/* Import Montserrat font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
</style>
