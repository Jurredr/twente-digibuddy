<template>
  <a
    class="flex items-center gap-2 rounded-2xl px-4 py-2"
    :class="selected ? 'bg-white' : 'bg-dark hover:bg-light text-white'"
    v-on="$listeners"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
