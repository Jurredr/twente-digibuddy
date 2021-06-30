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
      <p class="text-white font-semibold text-lg">{{ getPageTitle(currentPage) }}</p>
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
        class="
          navigation
          absolute
          bg-dark
          rounded-3xl
          bottom-6
          w-10/12
          h-12
          flex
          justify-center
          items-center
          gap-11
        "
      >
        <div class="nav-news cursor-pointer flex justify-center hvr-grow" @click="currentPage = 0; collapsed = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.739"
            height="18.739"
            viewBox="0 0 19.739 18.739"
          >
            <path
              id="Icon_awesome-newspaper"
              data-name="Icon awesome-newspaper"
              d="M18.917,4.5H3.016c-.454,0-.822.524-.822,1.171v.39H.822C.368,6.062,0,6.586,0,7.233V20.506c0,1.509.859,2.733,1.919,2.733H18.094c.908,0,1.645-1.049,1.645-2.342V5.671C19.739,5.024,19.371,4.5,18.917,4.5Zm-17,16.4c-.151,0-.274-.175-.274-.39V8.4h.548v12.1C2.193,20.722,2.071,20.9,1.919,20.9Zm8.088-.781H4.8c-.227,0-.411-.262-.411-.586v-.39c0-.323.184-.586.411-.586h5.209c.227,0,.411.262.411.586v.39C10.418,19.854,10.234,20.116,10.007,20.116Zm7.128,0H11.926c-.227,0-.411-.262-.411-.586v-.39c0-.323.184-.586.411-.586h5.209c.227,0,.411.262.411.586v.39C17.546,19.854,17.362,20.116,17.135,20.116Zm-7.128-4.685H4.8c-.227,0-.411-.262-.411-.586v-.39c0-.323.184-.586.411-.586h5.209c.227,0,.411.262.411.586v.39C10.418,15.169,10.234,15.431,10.007,15.431Zm7.128,0H11.926c-.227,0-.411-.262-.411-.586v-.39c0-.323.184-.586.411-.586h5.209c.227,0,.411.262.411.586v.39C17.546,15.169,17.362,15.431,17.135,15.431Zm0-4.685H4.8c-.227,0-.411-.262-.411-.586V8.209c0-.323.184-.586.411-.586H17.135c.227,0,.411.262.411.586v1.952C17.546,10.484,17.362,10.746,17.135,10.746Z"
              transform="translate(0 -4.5)"
              fill="#fff"
            />
          </svg>
          <div
            v-if="currentPage === 0" class="select-bubble absolute rounded-full bg-pink h-1 w-1 top-6"
          ></div>
        </div>
        <div class="nav-profile cursor-pointer flex justify-center hvr-grow" @click="currentPage = 1; collapsed = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.739"
            height="18.739"
            viewBox="0 0 18.739 18.739"
          >
            <path
              id="Icon_material-person"
              data-name="Icon material-person"
              d="M15.37,15.37a4.685,4.685,0,1,0-4.685-4.685A4.684,4.684,0,0,0,15.37,15.37Zm0,2.342C12.243,17.712,6,19.281,6,22.4v2.342H24.739V22.4C24.739,19.281,18.5,17.712,15.37,17.712Z"
              transform="translate(-6 -6)"
              fill="#fff"
            />
          </svg>
          <div
            v-if="currentPage === 1" class="select-bubble absolute rounded-full bg-pink h-1 w-1 top-6"
          ></div>
        </div>
        <div class="nav-chat cursor-pointer flex justify-center hvr-grow" @click="currentPage = 2; collapsed = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21.411"
            height="21.414"
            viewBox="0 0 21.411 21.414"
          >
            <g
              id="Icon_ionic-ios-chatboxes"
              data-name="Icon ionic-ios-chatboxes"
              transform="translate(-3.375 -3.375)"
            >
              <path
                id="Path_4"
                data-name="Path 4"
                d="M25.055,11.981H13.647a1.964,1.964,0,0,0-1.961,1.961v7.943a1.96,1.96,0,0,0,1.961,1.956h6.528a.563.563,0,0,1,.391.165L23.81,27c.18.175.479.1.479-.149v-2.6c0-.309.2-.407.5-.407h.051a2.143,2.143,0,0,0,2.167-1.956V13.943A1.953,1.953,0,0,0,25.055,11.981Z"
                transform="translate(-2.226 -2.305)"
                fill="#fff"
              />
              <path
                id="Path_5"
                data-name="Path 5"
                d="M9.882,8.415h9.133V5.053a1.679,1.679,0,0,0-1.678-1.678H5.053A1.679,1.679,0,0,0,3.375,5.053v8.5a1.679,1.679,0,0,0,1.678,1.678H8.2V10.093A1.686,1.686,0,0,1,9.882,8.415Z"
                transform="translate(0)"
                fill="#fff"
              />
            </g>
          </svg>
          <div
            v-if="currentPage === 2" class="select-bubble absolute rounded-full bg-pink h-1 w-1 top-6"
          ></div>
        </div>
        <div class="nav-settings cursor-pointer flex justify-center hvr-grow" @click="currentPage = 3; collapsed = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.354"
            height="20.359"
            viewBox="0 0 20.354 20.359"
          >
            <path
              id="Icon_ionic-ios-settings"
              data-name="Icon ionic-ios-settings"
              d="M23.173,14.677a2.619,2.619,0,0,1,1.68-2.444A10.382,10.382,0,0,0,23.6,9.207a2.654,2.654,0,0,1-1.065.228,2.613,2.613,0,0,1-2.391-3.679A10.35,10.35,0,0,0,17.12,4.5a2.617,2.617,0,0,1-4.887,0A10.382,10.382,0,0,0,9.207,5.756a2.613,2.613,0,0,1-2.39,3.679,2.568,2.568,0,0,1-1.065-.228A10.611,10.611,0,0,0,4.5,12.239a2.618,2.618,0,0,1,.005,4.887,10.382,10.382,0,0,0,1.256,3.027A2.614,2.614,0,0,1,9.212,23.6a10.442,10.442,0,0,0,3.027,1.256,2.612,2.612,0,0,1,4.876,0A10.382,10.382,0,0,0,20.142,23.6a2.617,2.617,0,0,1,3.451-3.451,10.442,10.442,0,0,0,1.256-3.027A2.632,2.632,0,0,1,23.173,14.677Zm-8.449,4.235a4.24,4.24,0,1,1,4.24-4.24A4.239,4.239,0,0,1,14.725,18.912Z"
              transform="translate(-4.5 -4.5)"
              fill="#fff"
            />
          </svg>
          <div
            v-if="currentPage === 3" class="select-bubble absolute rounded-full bg-pink h-1 w-1 top-6"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      currentPage: 0,
    }
  },
  methods: {
    getPageTitle(currentPage) {
      switch(currentPage) {
        case 0:
          return this.$t('news')
        case 1:
          return this.$t('profile')
        case 2:
          return this.$t('chat')
        case 3:
          return this.$t('settings')
      }
    }
  }
}
</script>

<style></style>
