<template>
  <div class="flex items-center gap-4">
    <p class="text-2xl">{{ icon }}</p>
    <div class="flex-col">
      <p class="font-semibold text-sm text-pink">{{ value }}</p>
      <p class="font-regular text-sm text-gray">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '💼',
    },
    name: {
      type: String,
      default: 'name',
    },
    value: {
      type: String,
      default: 'value',
    },
  },
}
</script>

<style></style>
