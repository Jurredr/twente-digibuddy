<template>
  <div class="font-montserrat text-base bg-light rounded-3xl shadow p-8">
    <div class="flex gap-4 items-stretch">
      <div class="w-20 h-20 bg-white rounded-3xl" />
      <div class="flex flex-col justify-between">
        <p class="font-bold text-white flex gap-2 items-center">
          {{ marker.name }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.226"
            height="11.276"
            viewBox="0 0 9.226 11.276"
          >
            <path
              id="Icon_material-verified-user"
              data-name="Icon material-verified-user"
              d="M9.113,1.5,4.5,3.55V6.625a6.378,6.378,0,0,0,4.613,6.15,6.378,6.378,0,0,0,4.613-6.15V3.55ZM8.088,9.7,6.038,7.65l.723-.723L8.088,8.25l3.378-3.378.723.728Z"
              transform="translate(-4.5 -1.5)"
              fill="#f09bd9"
            />
          </svg>
        </p>
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
      <a
        href="#"
        class="
          px-2
          py-2
          flex flex-col
          gap-1
          items-center
          hvr-grow
          justify-between
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.729"
          height="20.729"
          viewBox="0 0 20.729 20.729"
        >
          <g
            id="Icon_feather-globe"
            data-name="Icon feather-globe"
            transform="translate(-2 -2)"
          >
            <path
              id="Path_9"
              data-name="Path 9"
              d="M21.729,12.365A9.365,9.365,0,1,1,12.365,3a9.365,9.365,0,0,1,9.365,9.365Z"
              transform="translate(0 0)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Path_10"
              data-name="Path 10"
              d="M3,18H21.729"
              transform="translate(0 -5.635)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Path_11"
              data-name="Path 11"
              d="M15.746,3a14.328,14.328,0,0,1,3.746,9.365,14.328,14.328,0,0,1-3.746,9.365A14.328,14.328,0,0,1,12,12.365,14.328,14.328,0,0,1,15.746,3Z"
              transform="translate(-3.381)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
        </svg>
        {{ $t('infoWebsite') }}
      </a>
      <a
        href="#"
        class="
          px-2
          py-2
          flex flex-col
          gap-1
          items-center
          hvr-grow
          justify-between
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.377"
          height="18.38"
          viewBox="0 0 18.377 18.38"
        >
          <g
            id="Icon_ionic-ios-chatboxes"
            data-name="Icon ionic-ios-chatboxes"
            transform="translate(-3.375 -3.375)"
          >
            <path
              id="Path_4"
              data-name="Path 4"
              d="M23.161,11.981H13.369a1.686,1.686,0,0,0-1.683,1.683v6.818a1.682,1.682,0,0,0,1.683,1.679h5.6a.483.483,0,0,1,.336.141l2.784,2.567c.155.15.411.088.411-.128V22.506c0-.265.168-.349.433-.349h.044a1.839,1.839,0,0,0,1.86-1.679V13.665A1.676,1.676,0,0,0,23.161,11.981Z"
              transform="translate(-3.088 -3.198)"
              fill="#fff"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M8.96,7.7H16.8V4.815a1.441,1.441,0,0,0-1.44-1.44H4.815a1.441,1.441,0,0,0-1.44,1.44v7.3a1.441,1.441,0,0,0,1.44,1.44h2.7V9.141A1.447,1.447,0,0,1,8.96,7.7Z"
              transform="translate(0 0)"
              fill="#fff"
            />
          </g>
        </svg>
        {{ $t('infoChat') }}
      </a>
      <a
        href="#"
        class="
          px-2
          py-2
          flex flex-col
          gap-1
          items-center
          hvr-grow
          justify-between
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.38"
          height="18.38"
          viewBox="0 0 18.38 18.38"
        >
          <path
            id="Icon_awesome-linkedin"
            data-name="Icon awesome-linkedin"
            d="M17.067,2.25H1.309A1.319,1.319,0,0,0,0,3.575V19.3A1.319,1.319,0,0,0,1.309,20.63H17.067A1.322,1.322,0,0,0,18.38,19.3V3.575A1.322,1.322,0,0,0,17.067,2.25ZM5.555,18H2.831V9.233H5.559V18ZM4.193,8.035a1.58,1.58,0,1,1,1.58-1.58A1.58,1.58,0,0,1,4.193,8.035ZM15.766,18H13.042V13.737c0-1.017-.021-2.326-1.415-2.326-1.42,0-1.637,1.108-1.637,2.252V18H7.266V9.233H9.879v1.2h.037A2.869,2.869,0,0,1,12.5,9.015c2.757,0,3.27,1.817,3.27,4.181Z"
            transform="translate(0 -2.25)"
            fill="#fff"
          />
        </svg>
        LinkedIn
      </a>
      <a
        href="javascript:void(0)"
        :class="showConnections ? 'bg-light rounded-2xl' : ''"
        @click="$emit('toggleConnections')"
      >
        <div
          class="
            h-full
            px-2
            py-2
            hvr-grow
            flex flex-col
            gap-1
            items-center
            justify-between
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.528"
            height="15.097"
            viewBox="0 0 24.528 15.097"
          >
            <g
              id="Group_22"
              data-name="Group 22"
              transform="translate(-4789.692 -2632.268)"
            >
              <path
                id="Icon_material-linear-scale"
                data-name="Icon material-linear-scale"
                d="M24.462,14.25a3.068,3.068,0,0,0-2.808,1.84H18.072a3.064,3.064,0,0,0-5.617,0H8.874a3.066,3.066,0,1,0,0,2.453h3.581a3.064,3.064,0,0,0,5.617,0h3.581a3.065,3.065,0,1,0,2.808-4.292Z"
                transform="translate(4786.692 2622.618)"
                fill="#fff"
              />
              <path
                id="Icon_metro-flow-line"
                data-name="Icon metro-flow-line"
                d="M17.348,14.995V8.122a2.157,2.157,0,1,0-1.8,0V15a2.156,2.156,0,1,0,1.8,0Zm-.9-10.072a1.245,1.245,0,1,1-1.244,1.245A1.244,1.244,0,0,1,16.45,4.922Zm0,13.272a1.245,1.245,0,1,1,1.244-1.245,1.244,1.244,0,0,1-1.244,1.245Z"
                transform="translate(4785.507 2628.257)"
                fill="#fff"
              />
            </g>
          </svg>
          {{ $t('infoConnections') }}
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import type { Marker } from '~/assets/types/api'

export default Vue.extend({
  props: {
    marker: {
      type: Object as PropType<Marker>,
      required: true,
    },
    showConnections: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
