<template>
  <div
    class="widget-window absolute w-80 bg-light rounded-3xl shadow"
    :class="collapsed ? 'h-28' : 'h-72'"
  >
    <div
      v-if="!collapsed"
      class="
        title
        w-full
        h-14
        bg-dark
        rounded-t-3xl
        flex
        justify-center
        items-center
      "
    >
      <div
        class="
          minimize-button
          absolute
          left-4
          cursor-pointer
          rounded-3xl
          bg-light
          w-8
          h-6
          flex
          justify-center
          items-center
          hvr-grow
        "
        @click="collapsed = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.448"
          height="3.584"
          viewBox="0 0 16.448 3.584"
        >
          <path
            id="Icon_awesome-window-minimize"
            data-name="Icon awesome-window-minimize"
            d="M14.906,24.75H1.542A1.454,1.454,0,0,0,0,26.094v.9a1.454,1.454,0,0,0,1.542,1.344H14.906a1.454,1.454,0,0,0,1.542-1.344v-.9A1.454,1.454,0,0,0,14.906,24.75Z"
            transform="translate(0 -24.75)"
            fill="#fff"
          />
        </svg>
      </div>
      <p class="text-white font-semibold text-lg">{{ pages[currentPage] }}</p>
    </div>

    <div class="content-container flex justify-center">
      <div class="content"></div>
      <div
        v-if="collapsed"
        class="
          uncollapse
          absolute
          cursor-pointer
          rounded-3xl
          bg-dark
          w-10
          h-6
          flex
          justify-center
          items-center
          top-2
          hvr-grow
        "
        @click="collapsed = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.395"
          height="9.373"
          viewBox="0 0 16.395 9.373"
        >
          <path
            id="Icon_ionic-ios-arrow-up"
            data-name="Icon ionic-ios-arrow-up"
            d="M14.387,14.076l6.2,6.2A1.172,1.172,0,1,0,22.24,18.62l-7.023-7.028a1.169,1.169,0,0,0-1.615-.034L6.529,18.615a1.172,1.172,0,0,0,1.655,1.659Z"
            transform="translate(-6.188 -11.251)"
            fill="#fff"
          />
        </svg>
      </div>
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
      pages: ['News', 'Profile', 'Chat', 'Settings'],
      currentPage: 0,
    }
  },
}
</script>

<style></style>
