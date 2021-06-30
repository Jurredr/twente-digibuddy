<template>
  <div>
    <div
      class="bg-dark flex items-center cursor-pointer"
      :class="collapsed ? 'rounded-2xl' : 'rounded-t-2xl'"
      @click="collapsed = !collapsed"
    >
      <div :class="collapsed ? 'ml-5' : 'rotated-90 ml-5'">
        <slot />
      </div>
      <p class="text-gray px-5 py-3 rounded-2xl">
        {{ $t(translationKeyQ) }}
      </p>
    </div>
    <div v-if="!collapsed" class="bg-midDark rounded-b-2xl w-full h-12">
      <p class="text-gray px-5 py-3 rounded-2xl">
        {{ $t(translationKeyA) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    translationKeyQ: {
      type: String,
      default: 'helpQ1',
    },
    translationKeyA: {
      type: String,
      default: 'helpA1',
    },
  },
  data() {
    return {
      collapsed: true,
    }
  },
}
</script>

<style></style>
