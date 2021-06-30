<template>
  <div>
    <div
      :class="
        colorSelected + ' absolute w-1/2 h-full rounded-2xl ' +
        ($i18n.locale === 'nl'
          ? 'left-0'
          : 'right-0')
      "
    ></div>
    <div
      :class="
        'flex items-center rounded-2xl shadow ' + color + ' gap-' +
        gap +
        ' px-' +
        px +
        ' py-' +
        py
      "
    >
      <p
        :class="'text-white relative text-xl cursor-pointer hvr-grow pr-' + pr"
        @click="$i18n.locale = locale1"
      >
        {{ option1 }}
      </p>
      <p
        class="text-white relative text-xl cursor-pointer hvr-grow"
        @click="$i18n.locale = locale2"
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
    },
    px: {
      type: String,
      default: '5',
    },
    py: {
      type: String,
      default: '2',
    },
    pr: {
      type: String,
      default: '4',
    },
    gap: {
      type: String,
      default: '2',
    },
    color: {
      type: String,
      default: 'bg-light',
    },
    colorSelected: {
      type: String,
      default: 'bg-dark',
    },
  },
})
</script>

<style></style>
