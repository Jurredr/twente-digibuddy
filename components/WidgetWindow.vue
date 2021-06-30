<template>
  <div
    class="widget-window absolute w-80 bg-light rounded-3xl shadow"
    :class="collapsed ? 'h-28' : 'h-72'"
  >
    <div
      v-if="!collapsed"
      class="title w-full h-14 bg-dark rounded-t-3xl"
    ></div>

    <div class="content flex justify-center">
      <div v-if="collapsed" class="uncollapse"></div>
      <div
        class="navigation absolute bg-dark rounded-3xl bottom-6 w-10/12 h-12"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    }
  },
}
</script>

<style></style>
