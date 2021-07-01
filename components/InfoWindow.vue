<template>
  <div class="font-montserrat text-base bg-light rounded-3xl shadow p-8">
    <div class="flex gap-4 items-stretch">
      <div class="w-20 h-20 bg-white rounded-3xl" />
      <div class="flex flex-col justify-between">
        <p class="font-bold text-white">{{ marker.name }}</p>
        <p class="text-sm font-semibold text-pink">App Development</p>
        <p class="text-sm text-gray">
          0.3 km ·
          <a class="underline" href="#">Hengelosestraat 500</a>
        </p>
      </div>
    </div>
    <p class="mt-4 max-w-xs text-sm text-white">
      Combidesk combines and links software packages using our custom website
      platform.
    </p>
    <div
      class="
        mt-4
        bg-dark
        rounded-3xl
        flex
        justify-between
        p-2
        text-sm text-white
      "
    >
      <a href="#" class="px-2 py-2">Website</a>
      <a href="#" class="px-2 py-2">Chat</a>
      <a href="#" class="px-2 py-2">LinkedIn</a>
      <a
        href="javascript:void(0)"
        class="px-2 py-2"
        :class="showConnections ? 'bg-light rounded-2xl' : ''"
        @click="showConnections = !showConnections"
      >
        Connections
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { Marker } from '~/assets/types/api'

export default Vue.extend({
  props: {
    marker: {
      type: Object as PropType<Marker>,
      required: true,
    },
  },
})
</script>
