<template>
  <div
    class="
      font-montserrat
      text-base
      bg-light
      rounded-3xl
      shadow
      p-8
      flex flex-col
    "
  >
    <div class="flex gap-4 items-stretch">
      <div class="w-20 h-20 bg-white rounded-3xl" />
      <div class="flex flex-col justify-between">
        <p class="font-bold text-white flex gap-2 items-center">
          {{ marker.company ? marker.company.name : marker.person.name }}
          <svg
            v-if="marker.company != null"
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
        <p class="text-sm font-semibold text-pink">
          {{
            marker.company ? marker.company.industry : 'Looking for partners'
          }}
        </p>
        <p class="text-sm text-gray">
          0.3 km ·
          <a class="underline" href="#">{{
            marker.company ? marker.company.address : 'Hengelosestraat 500'
          }}</a>
        </p>
      </div>
    </div>
    <p class="mt-4 max-w-xs text-sm text-white">
      {{
        marker.company
          ? marker.company.about
          : "I am looking for a partner to collaborate with on a new project for my company"
      }}
    </p>

    <div
      class="
        mt-4
        bg-dark
        rounded-3xl
        flex
        justify-between
        p-2
        text-xs text-white
      "
    >
      <a
        :href="marker.company ? marker.company.website : '#'"
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
        :href="marker.company ? marker.company.linkedinUrl : '#'"
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
    <div v-if="marker.company">
      <template v-if="showMore" class="flex justify-center">
        <a
          href="javascript:void(0)"
          class="
            mt-4
            self-center
            rounded-3xl
            bg-dark
            w-10
            h-6
            flex
            justify-center
            items-center
            ml-auto
            mr-auto
            hvr-grow
          "
          @click="showMore = false"
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
        </a>
        <div class="mt-4 bg-midDark rounded-t-3xl flex justify-center gap-8">
          <div class="mt-5 mb-5">
            <InfoFeature
              icon="💼"
              :name="$t('infoEmployees')"
              :value="marker.company.companySize"
            />
            <InfoFeature
              class="mt-3"
              icon="👥"
              :name="$t('infoConnections')"
              value="???"
            />
          </div>
          <div class="mt-5 mb-5">
            <InfoFeature
              icon="⌛️"
              :name="$t('infoFounded')"
              :value="marker.company.founded"
            />
            <InfoFeature
              class="mt-3"
              icon="🗺"
              :name="$t('infoCity')"
              :value="marker.company.headquartersCity"
            />
          </div>
        </div>
        <div class="bg-pink rounded-b-3xl flex justify-center items-center">
          <p class="text-xs text-white font-semibold pr-3">
            {{ $t('infoComparable') }}
          </p>
          <div class="flex mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="43"
              height="43"
              viewBox="0 0 43 43"
            >
              <defs>
                <filter
                  id="Ellipse_4"
                  x="0"
                  y="0"
                  width="43"
                  height="43"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood flood-opacity="0.161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g
                id="Group_31"
                data-name="Group 31"
                transform="translate(-4717 -2605.714)"
              >
                <g
                  transform="matrix(1, 0, 0, 1, 4717, 2605.71)"
                  filter="url(#Ellipse_4)"
                >
                  <circle
                    id="Ellipse_4-2"
                    data-name="Ellipse 4"
                    cx="12.5"
                    cy="12.5"
                    r="12.5"
                    transform="translate(9 6)"
                    fill="#fff"
                  />
                </g>
                <g
                  id="amazon-icon-1"
                  transform="translate(4733.128 2619.821)"
                  opacity="0.8"
                >
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M13.661,191.11c-4.448,2.117-7.208.346-8.975-.73-.109-.068-.3.016-.134.2a7.077,7.077,0,0,0,5.036,2.434,5.863,5.863,0,0,0,4.207-1.615c.186-.238.055-.369-.134-.29Zm1.249-.69c-.119-.156-.726-.185-1.108-.138s-.957.279-.907.42c.026.053.078.029.341.005s1-.119,1.155.082-.235,1.167-.307,1.322.026.2.156.092a2.017,2.017,0,0,0,.513-.751,1.756,1.756,0,0,0,.157-1.032Z"
                    transform="translate(-4.489 -182.239)"
                    fill="#f90"
                  />
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M55.555,4.99A2.789,2.789,0,0,1,55.288,6.5a1.156,1.156,0,0,1-.987.648c-.547,0-.866-.417-.866-1.033,0-1.215,1.089-1.436,2.119-1.436Zm1.438,3.475a.3.3,0,0,1-.337.034,3.509,3.509,0,0,1-.818-.95,2.821,2.821,0,0,1-2.35,1.037,2.023,2.023,0,0,1-2.134-2.222,2.422,2.422,0,0,1,1.52-2.33,9.876,9.876,0,0,1,2.681-.5V3.354a1.835,1.835,0,0,0-.172-1.033.954.954,0,0,0-.8-.371,1.087,1.087,0,0,0-1.147.856.3.3,0,0,1-.247.261l-1.384-.148a.253.253,0,0,1-.213-.3C51.911.943,53.425.438,54.781.438a3.232,3.232,0,0,1,2.148.71c.694.648.628,1.512.628,2.452V5.822a1.95,1.95,0,0,0,.537,1.321.268.268,0,0,1,0,.379c-.291.243-.808.694-1.093.946l0,0"
                    transform="translate(-49.373 -0.438)"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M13.661,191.11c-4.448,2.117-7.208.346-8.975-.73-.109-.068-.3.016-.134.2a7.077,7.077,0,0,0,5.036,2.434,5.863,5.863,0,0,0,4.207-1.615c.186-.238.055-.369-.134-.29Zm1.249-.69c-.119-.156-.726-.185-1.108-.138s-.957.279-.907.42c.026.053.078.029.341.005s1-.119,1.155.082-.235,1.167-.307,1.322.026.2.156.092a2.017,2.017,0,0,0,.513-.751,1.756,1.756,0,0,0,.157-1.032Z"
                    transform="translate(-4.489 -182.239)"
                    fill="#f90"
                  />
                  <path
                    id="Path_15"
                    data-name="Path 15"
                    d="M55.555,4.99A2.789,2.789,0,0,1,55.288,6.5a1.156,1.156,0,0,1-.987.648c-.547,0-.866-.417-.866-1.033,0-1.215,1.089-1.436,2.119-1.436Zm1.438,3.475a.3.3,0,0,1-.337.034,3.509,3.509,0,0,1-.818-.95,2.821,2.821,0,0,1-2.35,1.037,2.023,2.023,0,0,1-2.134-2.222,2.422,2.422,0,0,1,1.52-2.33,9.876,9.876,0,0,1,2.681-.5V3.354a1.835,1.835,0,0,0-.172-1.033.954.954,0,0,0-.8-.371,1.087,1.087,0,0,0-1.147.856.3.3,0,0,1-.247.261l-1.384-.148a.253.253,0,0,1-.213-.3C51.911.943,53.425.438,54.781.438a3.232,3.232,0,0,1,2.148.71c.694.648.628,1.512.628,2.452V5.822a1.95,1.95,0,0,0,.537,1.321.268.268,0,0,1,0,.379c-.291.243-.808.694-1.093.946l0,0"
                    transform="translate(-49.373 -0.438)"
                    fill-rule="evenodd"
                  />
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="43"
              height="42"
              viewBox="0 0 43 42"
            >
              <defs>
                <filter
                  id="Ellipse_6"
                  x="0"
                  y="0"
                  width="43"
                  height="42"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood flood-opacity="0.161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g
                id="Group_29"
                data-name="Group 29"
                transform="translate(-4728 -2605.838)"
              >
                <g
                  transform="matrix(1, 0, 0, 1, 4728, 2605.84)"
                  filter="url(#Ellipse_6)"
                >
                  <ellipse
                    id="Ellipse_6-2"
                    data-name="Ellipse 6"
                    cx="12.5"
                    cy="12"
                    rx="12.5"
                    ry="12"
                    transform="translate(9 6)"
                    fill="#fff"
                  />
                </g>
                <image
                  id="Image_5"
                  data-name="Image 5"
                  width="11"
                  height="11"
                  transform="translate(4744 2618.838)"
                  opacity="0.8"
                  xlink:href="/google.png"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="43"
              height="43"
              viewBox="0 0 43 43"
            >
              <defs>
                <filter
                  id="Ellipse_5"
                  x="0"
                  y="0"
                  width="43"
                  height="43"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood flood-opacity="0.161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g
                id="Group_30"
                data-name="Group 30"
                transform="translate(-4739 -2606)"
              >
                <g
                  transform="matrix(1, 0, 0, 1, 4739, 2606)"
                  filter="url(#Ellipse_5)"
                >
                  <circle
                    id="Ellipse_5-2"
                    data-name="Ellipse 5"
                    cx="12.5"
                    cy="12.5"
                    r="12.5"
                    transform="translate(9 6)"
                    fill="#fff"
                  />
                </g>
                <path
                  id="Icon_simple-apple"
                  data-name="Icon simple-apple"
                  d="M5.772,11.708a2.674,2.674,0,0,1-.619-.572,7.669,7.669,0,0,1-.529-.723A6.993,6.993,0,0,1,3.74,8.605,6.8,6.8,0,0,1,3.37,6.444a4.017,4.017,0,0,1,.5-2.034A2.874,2.874,0,0,1,4.913,3.326a2.784,2.784,0,0,1,1.412-.418,2.331,2.331,0,0,1,.562.075c.144.04.318.1.532.184.273.1.423.169.472.184a1.165,1.165,0,0,0,.4.085,1.19,1.19,0,0,0,.321-.065c.072-.025.209-.07.4-.154s.344-.129.465-.174A4.149,4.149,0,0,1,10,2.913a2.464,2.464,0,0,1,.571-.025,3.386,3.386,0,0,1,.965.209,2.6,2.6,0,0,1,1.222.974,2.447,2.447,0,0,0-.36.273,3.044,3.044,0,0,0-.612.748,2.535,2.535,0,0,0-.32,1.253,2.566,2.566,0,0,0,.418,1.422,2.65,2.65,0,0,0,.763.764,1.954,1.954,0,0,0,.418.224c-.06.186-.125.368-.2.547a7.055,7.055,0,0,1-.621,1.149c-.215.313-.384.547-.512.7a2.772,2.772,0,0,1-.587.545,1.306,1.306,0,0,1-.722.217,1.6,1.6,0,0,1-.514-.063c-.144-.047-.286-.1-.426-.161a3.45,3.45,0,0,0-.45-.169,2.247,2.247,0,0,0-.579-.073,2.32,2.32,0,0,0-.577.072,3.584,3.584,0,0,0-.451.162c-.209.087-.346.144-.425.169a2.223,2.223,0,0,1-.492.087,1.367,1.367,0,0,1-.739-.224ZM9.18,2.53a1.852,1.852,0,0,1-.981.217,1.994,1.994,0,0,1,.134-1.013A2.738,2.738,0,0,1,8.831.9a2.689,2.689,0,0,1,.81-.626A2.306,2.306,0,0,1,10.581,0a2.26,2.26,0,0,1-.124,1.029,2.952,2.952,0,0,1-.5.875,2.508,2.508,0,0,1-.789.626Z"
                  transform="translate(4752.284 2617.532)"
                />
              </g>
            </svg>
          </div>
        </div>
      </template>
      <a
        v-else
        href="javascript:void(0)"
        class="
          mt-4
          self-center
          rounded-3xl
          bg-dark
          w-10
          h-6
          flex
          justify-center
          items-center
          ml-auto
          mr-auto
          hvr-grow
        "
        @click="showMore = true"
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
            transform="translate(22.582 20.623) rotate(180)"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
    <div
      v-else
      class="
        flex
        mt-4
        p-3
        justify-center
        items-center
        gap-10
        bg-midDark
        rounded-3xl
      "
    >
      <InfoFeature
        icon="💼"
        :name="$t('infoCompany')"
        :value="marker.person.company"
      />
      <InfoFeature
        icon="🛠"
        :name="$t('infoPosition')"
        :value="marker.person.position"
      />
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
  data() {
    return {
      showMore: false,
    }
  },
})
</script>
