<template>
  <div class="w-full h-screen flex flex-col bg-dark font-montserrat">
    <div class="relative flex-grow m-5 rounded-2xl overflow-hidden">
      <!-- Map Interface -->
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
        <template v-for="marker in markers">
          <GmapMarker
            v-if="selectedFilter.matches(marker)"
            :key="marker.name"
            :position="{ lat: marker.location[0], lng: marker.location[1] }"
            :title="marker.name"
            :icon="
              selectedMarker === marker
                ? '/markers/marker-default-selected.svg'
                : '/markers/marker-default.svg'
            "
            @click="
              selectedMarker = marker
              infoWindowShown = true
            "
          />
        </template>

        <template v-if="selectedMarker !== null">
          <template v-for="connection in markers">
            <GmapPolyline
              v-if="hasConnection(selectedMarker, connection)"
              :key="connection.name"
              :editable="false"
              :path="[
                {
                  lat: selectedMarker.location[0],
                  lng: selectedMarker.location[1],
                },
                {
                  lat: connection.location[0],
                  lng: connection.location[1],
                },
              ]"
            />
          </template>

          <GmapInfoWindow
            :opened="infoWindowShown"
            :position="{
              lat: selectedMarker.location[0],
              lng: selectedMarker.location[1],
            }"
            :options="{
              pixelOffset: {
                width: 0,
                height: -35,
              },
            }"
            @closeclick="
              infoWindowShown = false
              selectedMarker = null
            "
          >
            <div
              class="font-montserrat text-base bg-light rounded-3xl shadow p-8"
            >
              <div class="flex gap-4 items-stretch">
                <div class="w-20 h-20 bg-white rounded-2xl" />
                <div class="flex flex-col justify-between">
                  <p class="font-semibold text-white">Combidesk</p>
                  <p class="text-sm font-semibold text-pink">App Development</p>
                  <p class="text-gray">
                    0.3 km ·
                    <a class="underline" href="#">Hengelosestraat 500</a>
                  </p>
                </div>
              </div>
              <p class="mt-4 max-w-xs text-sm text-white">
                Combidesk combines and links software packages using our custom
                website platform.
              </p>
            </div>
          </GmapInfoWindow>
        </template>
      </GmapMap>

      <!-- Help -->
      <DButton
        class="absolute top-6 left-6 text-sm h-11 hvr-grow"
        @click="helpShown = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.157"
          height="18.157"
          viewBox="0 0 18.157 18.157"
        >
          <g
            id="Icon_feather-info"
            data-name="Icon feather-info"
            transform="translate(1.5 1.5)"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M18.157,10.578A7.578,7.578,0,1,1,10.578,3a7.578,7.578,0,0,1,7.578,7.578Z"
              transform="translate(-3 -3)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.3"
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M18,21.031V18"
              transform="translate(-10.422 -10.422)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.3"
            />
            <path
              id="Path_3"
              data-name="Path 3"
              d="M18,12h0"
              transform="translate(-10.422 -7.453)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.3"
            />
          </g>
        </svg>
        {{ $t('help') }}
      </DButton>

      <!-- Language Selector -->
      <SwitchButton
        class="absolute top-20 left-6"
        option1="🇳🇱"
        option2="🇬🇧"
        locale1="nl"
        locale2="en"
      />

      <!-- Filters -->
      <div class="absolute top-6 right-6 flex gap-4">
        <DButton
          v-for="filter in filters"
          :key="filter.name"
          href="javascript:void(0)"
          :selected="selectedFilter === filter"
          @click="selectedFilter = filter"
        >
          <p>{{ filter.icon }}</p>
          <p class="text-sm ml-1">{{ filter.name }}</p>
        </DButton>
      </div>

      <!-- Widget Window -->
      <WidgetWindow class="right-6 bottom-6" />

      <!-- Intro Modal -->
      <div
        v-if="introShown"
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
          shadow
        "
      >
        <IntroModal @modal-close="introShown = false" />
      </div>

      <!-- Help Modal -->
      <div
        v-if="helpShown"
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
          shadow
        "
      >
        <HelpModal @modal-close="helpShown = false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { Marker } from '../assets/types/api'

export default Vue.extend({
  data() {
    const filters = [
      { name: 'All', icon: '🙋‍♂️', matches: (_: Marker) => true },
      {
        name: 'Persons',
        icon: '🙋‍♂️',
        matches: (m: Marker) => m.tags.includes('persons'),
      },
      {
        name: 'People',
        icon: '🙋‍♂️',
        matches: (m: Marker) => m.tags.includes('people'),
      },
      {
        name: 'Things',
        icon: '🙋‍♂️',
        matches: (m: Marker) => m.tags.includes('things'),
      },
    ]

    return {
      introShown: true,
      helpShown: false,
      filters,
      selectedFilter: filters[0],
      selectedMarker: null,
      infoWindowShown: false,
      markers: [
        {
          name: 'Somewhere',
          location: [52.20833, 6.89583],
          tags: ['persons'],
        },
        {
          name: 'Somewhere else',
          location: [52.24833, 6.85583],
          tags: ['people', 'persons'],
        },
        {
          name: 'Nowhere',
          location: [52.23833, 6.83583],
          tags: ['things'],
        },
        {
          name: 'What',
          location: [52.22833, 6.85583],
          tags: ['persons, things'],
        },
        {
          name: 'Huh',
          location: [52.21833, 6.89583],
          tags: ['people', 'things'],
        },
      ] as Array<Marker>,
    }
  },
  methods: {
    hasConnection(_m1: Marker, _m2: Marker) {
      return true
    },
  },
})
</script>

<style>
/* Import custom fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');

/* Import custom styles */
@import url('../assets/styles/custom.scss');

/* Import custom animations */
@import url('../assets/styles/animations.scss');
</style>
