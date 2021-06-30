<template>
  <div>
    <div
      class="absolute w-1/2 h-full rounded-2xl bg-dark"
      :class="selected == 0 ? 'left-0' : 'right-0'"
    ></div>
    <div class="flex items-center gap-2 rounded-2xl px-5 py-2 shadow bg-light">
      <p
        class="text-white relative pr-4 text-xl cursor-pointer hvr-grow"
        @click="selected = 0; $i18n.locale = locale1"
      >
        {{ option1 }}
      </p>
      <p
        class="text-white relative text-xl cursor-pointer hvr-grow"
        @click="selected = 1; $i18n.locale = locale2"
      >
        {{ option2 }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    option1: {
      type: String,
      default: 'Opt1',
    },
    option2: {
      type: String,
      default: 'Opt2',
    },
    locale1: {
      type: String,
      default: 'nl',
    },
    locale2: {
      type: String,
      default: 'en',
    }
  },
  data() {
    return {
      selected: 0,
    }
  },
})
</script>

<style></style>
