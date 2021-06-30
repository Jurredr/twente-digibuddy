<template>
  <a
    class="
      flex
      items-center
      gap-2
      rounded-2xl
      text-white
      px-4
      py-2
      bg-dark
      hover:bg-light
    "
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
