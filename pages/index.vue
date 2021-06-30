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
      <SwitchButton class="absolute top-20 left-4" option1="🇳🇱" option2="🇬🇧">
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
        <div class="bg-light rounded-2xl overflow-hidden">
          <div
            class="
              bg-dark
              w-full
              flex
              justify-center
              items-center
              gap-4
              p-4
              font-bold
              text-white
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 42.486 42.486"
            >
              <path
                id="Icon"
                d="M526.729-281.771a21.108,21.108,0,0,1-8.268-1.669,21.173,21.173,0,0,1-6.752-4.553,21.172,21.172,0,0,1-4.553-6.752,21.108,21.108,0,0,1-1.669-8.268,21.11,21.11,0,0,1,1.669-8.269,21.173,21.173,0,0,1,4.553-6.753,21.172,21.172,0,0,1,6.752-4.553,21.108,21.108,0,0,1,8.268-1.669,5.1,5.1,0,0,1,4.313,2.049,18.213,18.213,0,0,1,2.306,4.706,19.752,19.752,0,0,0,3.146,6.035c1.245,1.437,3.365,2.233,5.414,3a17.991,17.991,0,0,1,4.184,1.967,4.06,4.06,0,0,1,1.881,3.485,21.109,21.109,0,0,1-1.669,8.268,21.174,21.174,0,0,1-4.553,6.752A21.173,21.173,0,0,1,535-283.441,21.11,21.11,0,0,1,526.729-281.771Zm-6.348-25.9a2.815,2.815,0,0,0-2.812,2.812v9.56a2.252,2.252,0,0,0,2.249,2.249h11.246a2.252,2.252,0,0,0,2.25-2.249v-9.56a2.815,2.815,0,0,0-2.812-2.812h-3.936v-2.249a1.126,1.126,0,0,0-1.125-1.125,1.126,1.126,0,0,0-1.125,1.125v2.249Zm14.058,4.5h0v6.748h1.125a1.126,1.126,0,0,0,1.124-1.125v-4.5a1.125,1.125,0,0,0-1.124-1.124Zm-19.12,0a1.125,1.125,0,0,0-1.124,1.124v4.5a1.126,1.126,0,0,0,1.124,1.125h1.125v-6.748Zm14.621,6.748h-2.25v-1.125h2.25v1.124Zm-3.374,0h-2.25v-1.125h2.25v1.124Zm-3.374,0h-2.249v-1.125h2.249v1.124Zm5.623-4.218a1.407,1.407,0,0,1-1.406-1.406,1.407,1.407,0,0,1,1.406-1.406,1.407,1.407,0,0,1,1.406,1.406A1.407,1.407,0,0,1,528.816-300.643Zm-6.748,0a1.407,1.407,0,0,1-1.406-1.406,1.407,1.407,0,0,1,1.406-1.406,1.407,1.407,0,0,1,1.406,1.406A1.407,1.407,0,0,1,522.068-300.643Z"
                transform="translate(-505.486 324.257)"
                fill="#fff"
              />
            </svg>
            Twente Digibuddy
          </div>
          <div class="p-6 flex flex-col items-center">
            <p class="text-white font-semibold text-center">
              Welcome to Twente! 🇳🇱
            </p>
            <p class="text-gray mt-4 text-center">
              Discover the digital world of Twente.
            </p>
            <div class="flex flex-col mt-4 gap-4">
              <p class="bg-dark text-gray px-6 py-2 rounded-2xl">
                See what different companies have to offer
              </p>
              <p class="bg-dark text-gray px-6 py-2 rounded-2xl">
                Chat and meet with potential partners
              </p>
              <p class="bg-dark text-gray px-6 py-2 rounded-2xl">
                Advertise yourself and your company
              </p>
            </div>
            <DButton
              href="javascript:void(0)"
              class="mt-6"
              selected
              @click="modalShown = false"
            >
              Explore
            </DButton>
          </div>
        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
</style>
