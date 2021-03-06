<template>
  <div class="w-full h-screen flex flex-col bg-dark font-montserrat">
    <div class="relative flex-grow m-5 rounded-2xl overflow-hidden">
      <!-- Map Interface -->
      <GmapMap
        class="w-full h-full"
        :center="{ lat: 52.21833, lng: 6.89583 }"
        :zoom="12.5"
        :options="{
          mapId: '42c056fc8fd3543',
          disableDefaultUI: true,
          restriction: {
            latLngBounds: {
              north: 52.30975249383111,
              south: 52.10603712615544,
              east: 7.052454528808594,
              west: 6.744700622558593,
            },
            strictBounds: false,
          },
        }"
      >
        <template v-for="marker in markers">
          <GmapMarker
            v-if="matchesFilter(marker)"
            :key="marker.name"
            :position="{ lat: marker.location[0], lng: marker.location[1] }"
            :title="marker.name"
            :icon="
              selectedMarker === marker
                ? getMarkerLink(marker, true)
                : getMarkerLink(marker, false)
            "
            @click="
              selectedMarker = marker
              infoWindowShown = true
              showConnections = true
            "
          />
        </template>

        <template v-if="selectedMarker !== null">
          <template v-if="showConnections">
            <template v-for="connection in markers">
              <GmapPolyline
                v-if="
                  matchesFilter(connection) &&
                  hasConnection(selectedMarker, connection)
                "
                :key="connection.name"
                :editable="false"
                :path="[
                  {
                    lat: selectedMarker.location[0],
                    lng: selectedMarker.location[1],
                  },
                  {
                    lat: connection.location[0],
                    lng: connection.location[1],
                  },
                ]"
              />
            </template>
          </template>

          <GmapInfoWindow
            :opened="infoWindowShown"
            :position="{
              lat: selectedMarker.location[0],
              lng: selectedMarker.location[1],
            }"
            :options="{
              pixelOffset: {
                width: 0,
                height: -35,
              },
            }"
            @closeclick="
              infoWindowShown = false
              selectedMarker = null
            "
          >
            <InfoWindow
              :marker="selectedMarker"
              :show-connections="showConnections"
              @toggleConnections="showConnections = !showConnections"
            />
          </GmapInfoWindow>
        </template>
      </GmapMap>

      <!-- Help -->
      <DButton
        class="absolute top-6 left-6 text-sm h-11 hvr-grow"
        selected
        @click="helpShown = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.157"
          height="18.157"
          viewBox="0 0 18.157 18.157"
        >
          <g
            id="Icon_feather-info"
            data-name="Icon feather-info"
            transform="translate(1.5 1.5)"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M18.157,10.578A7.578,7.578,0,1,1,10.578,3a7.578,7.578,0,0,1,7.578,7.578Z"
              transform="translate(-3 -3)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.3"
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M18,21.031V18"
              transform="translate(-10.422 -10.422)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.3"
            />
            <path
              id="Path_3"
              data-name="Path 3"
              d="M18,12h0"
              transform="translate(-10.422 -7.453)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.3"
            />
          </g>
        </svg>
        {{ $t('help') }}
      </DButton>

      <!-- Language Selector -->
      <SwitchButton
        class="absolute top-20 left-6"
        option1="🇳🇱"
        option2="🇬🇧"
        locale1="nl"
        locale2="en"
      />

      <!-- Filters -->
      <div
        class="absolute top-6 right-6 flex gap-4 flex-wrap max-w-xl justify-end"
      >
        <DButton
          v-for="filter in filters"
          :key="filter.name"
          href="javascript:void(0)"
          :selected="filter.toggled"
          @click="filter.toggled = !filter.toggled"
        >
          <p>{{ filter.icon }}</p>
          <p class="text-sm ml-1">{{ filter.name }}</p>
        </DButton>
      </div>

      <!-- Widget Window -->
      <WidgetWindow class="right-6 bottom-6" />

      <!-- Intro Modal -->
      <div
        v-if="introShown"
        class="
          absolute
          top-0
          left-0
          w-full
          h-full
          bg-black bg-opacity-50
          flex
          justify-center
          items-center
          shadow
        "
      >
        <IntroModal @modal-close="introShown = false" />
      </div>

      <!-- Help Modal -->
      <div
        v-if="helpShown"
        class="
          absolute
          top-0
          left-0
          w-full
          h-full
          bg-black bg-opacity-50
          flex
          justify-center
          items-center
          shadow
        "
      >
        <HelpModal @modal-close="helpShown = false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { ApiCompany, Marker } from '../assets/types/api'

export default Vue.extend({
  data() {
    const filters = [
      {
        name: 'People',
        icon: '🙋‍♂️',
        toggled: true,
        matches: (m: Marker) => m.person != null,
      },
      {
        name: 'Software',
        icon: '💻',
        toggled: true,
        matches: (m: Marker) =>
          m.person != null ? false : m.company?.industry.includes('Software'),
      },
      {
        name: 'E-Learning',
        icon: '🎓',
        toggled: true,
        matches: (m: Marker) =>
          m.person != null ? false : m.company?.industry === 'E-Learning',
      },
      {
        name: 'Design',
        icon: '🎨',
        toggled: true,
        matches: (m: Marker) =>
          m.person != null ? false : m.company?.industry.includes('Design'),
      },
      {
        name: 'Telecommunications',
        icon: '📞',
        toggled: true,
        matches: (m: Marker) =>
          m.person != null
            ? false
            : m.company?.industry?.startsWith('Telecommunication'),
      },
      {
        name: 'Marketing',
        icon: '📈',
        toggled: true,
        matches: (m: Marker) =>
          m.person != null ? false : m.company?.industry.includes('Marketing'),
      },
      {
        name: 'Media',
        icon: '🎥',
        toggled: true,
        matches: (m: Marker) =>
          m.person != null ? false : m.company?.industry?.endsWith('Media'),
      },
      {
        name: 'Publishing',
        icon: '📚',
        toggled: true,
        matches: (m: Marker) =>
          m.person != null ? false : m.company?.industry.includes('Publishing'),
      },
      {
        name: 'Internet',
        icon: '🌐',
        toggled: true,
        matches: (m: Marker) =>
          m.person != null ? false : m.company?.industry.includes('Internet'),
      },
      {
        name: 'Information',
        icon: '🤖',
        toggled: true,
        matches: (m: Marker) =>
          m.person != null
            ? false
            : m.company?.industry.includes('Information Technology'),
      },
    ]

    return {
      introShown: true,
      helpShown: false,
      filters,
      selectedMarker: null,
      infoWindowShown: false,
      showConnections: true,
      markers: [] as Array<Marker>,
    }
  },
  async fetch() {
    const companies = (await this.$axios.$get(
      '/api/companies'
    )) as Array<ApiCompany>

    const persons = (await this.$axios.$get(
      '/api/persons'
    )) as Array<ApiCompany>

    // @ts-ignore
    this.markers = [
      ...companies.map((c) => ({
        name: c.name,
        location: [c.bubbleLatitude, c.bubbleLongtitude],
        company: c,
      })),
      ...persons.map((p) => ({
        name: p.name,
        location: [p.bubbleLatitude, p.bubbleLongtitude],
        person: p,
      })),
    ]
  },
  methods: {
    hasConnection(m1: Marker, m2: Marker) {
      if (!m1.company || !m2.company) {
        return m1.person && m2.person
      }
      return (
        m1.company.industry === m2.company.industry &&
        m1.company.headquartersCity === m2.company.headquartersCity
      )
    },
    matchesFilter(marker: Marker) {
      for (let i = 0; i < this.filters.length; i++) {
        if (this.filters[i].toggled && this.filters[i].matches(marker)) {
          return true
        }
      }
    },
    getMarkerLink(marker: Marker, selected: Boolean) {
      const switchItem =
        marker.person != null ? 'Person' : marker.company?.industry
      switch (switchItem) {
        case 'Person':
          return selected
            ? '/markers/marker-person-selected.svg'
            : '/markers/marker-person.svg'
        case 'E-Learning':
          return selected
            ? '/markers/marker-elearning-selected.svg'
            : '/markers/marker-elearning.svg'
        case 'Computer Software':
          return selected
            ? '/markers/marker-software-selected.svg'
            : '/markers/marker-software.svg'
        case 'Telecommunication':
        case 'Telecommunications':
          return selected
            ? '/markers/marker-telecom-selected.svg'
            : '/markers/marker-telecom.svg'
        case 'Marketing & Advertising':
          return selected
            ? '/markers/marker-marketing-selected.svg'
            : '/markers/marker-marketing.svg'
        case 'Broadcast Media':
        case 'Online Media':
          return selected
            ? '/markers/marker-media-selected.svg'
            : '/markers/marker-media.svg'
        case 'Publishing':
          return selected
            ? '/markers/marker-publishing-selected.svg'
            : '/markers/marker-publishing.svg'
        case 'Graphic Design':
          return selected
            ? '/markers/marker-graphicdesign-selected.svg'
            : '/markers/marker-graphicdesign.svg'
        case 'Internet':
          return selected
            ? '/markers/marker-internet-selected.svg'
            : '/markers/marker-internet.svg'
        case 'Information Technology & Services':
          return selected
            ? '/markers/marker-it-selected.svg'
            : '/markers/marker-it.svg'
        default:
          return selected
            ? '/markers/marker-default-selected.svg'
            : '/markers/marker-default.svg'
      }
    },
  },
  fetchOnServer: false,
})
</script>

<style>
/* Import custom fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');

/* Import custom styles */
@import url('../assets/styles/custom.scss');

/* Import custom animations */
@import url('../assets/styles/animations.scss');
</style>
