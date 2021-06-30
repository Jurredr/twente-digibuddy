<template>
  <div class="bg-light rounded-3xl overflow-hidden">
    <div
      class="
        bg-dark
        w-full
        flex
        justify-center
        items-center
        gap-4
        p-4
        font-bold
        text-white
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 42.486 42.486"
      >
        <path
          id="Icon"
          d="M526.729-281.771a21.108,21.108,0,0,1-8.268-1.669,21.173,21.173,0,0,1-6.752-4.553,21.172,21.172,0,0,1-4.553-6.752,21.108,21.108,0,0,1-1.669-8.268,21.11,21.11,0,0,1,1.669-8.269,21.173,21.173,0,0,1,4.553-6.753,21.172,21.172,0,0,1,6.752-4.553,21.108,21.108,0,0,1,8.268-1.669,5.1,5.1,0,0,1,4.313,2.049,18.213,18.213,0,0,1,2.306,4.706,19.752,19.752,0,0,0,3.146,6.035c1.245,1.437,3.365,2.233,5.414,3a17.991,17.991,0,0,1,4.184,1.967,4.06,4.06,0,0,1,1.881,3.485,21.109,21.109,0,0,1-1.669,8.268,21.174,21.174,0,0,1-4.553,6.752A21.173,21.173,0,0,1,535-283.441,21.11,21.11,0,0,1,526.729-281.771Zm-6.348-25.9a2.815,2.815,0,0,0-2.812,2.812v9.56a2.252,2.252,0,0,0,2.249,2.249h11.246a2.252,2.252,0,0,0,2.25-2.249v-9.56a2.815,2.815,0,0,0-2.812-2.812h-3.936v-2.249a1.126,1.126,0,0,0-1.125-1.125,1.126,1.126,0,0,0-1.125,1.125v2.249Zm14.058,4.5h0v6.748h1.125a1.126,1.126,0,0,0,1.124-1.125v-4.5a1.125,1.125,0,0,0-1.124-1.124Zm-19.12,0a1.125,1.125,0,0,0-1.124,1.124v4.5a1.126,1.126,0,0,0,1.124,1.125h1.125v-6.748Zm14.621,6.748h-2.25v-1.125h2.25v1.124Zm-3.374,0h-2.25v-1.125h2.25v1.124Zm-3.374,0h-2.249v-1.125h2.249v1.124Zm5.623-4.218a1.407,1.407,0,0,1-1.406-1.406,1.407,1.407,0,0,1,1.406-1.406,1.407,1.407,0,0,1,1.406,1.406A1.407,1.407,0,0,1,528.816-300.643Zm-6.748,0a1.407,1.407,0,0,1-1.406-1.406,1.407,1.407,0,0,1,1.406-1.406,1.407,1.407,0,0,1,1.406,1.406A1.407,1.407,0,0,1,522.068-300.643Z"
          transform="translate(-505.486 324.257)"
          fill="#fff"
        />
      </svg>
      Twente Digibuddy
    </div>
    <div class="p-8 flex flex-col items-center">
      <p class="text-white font-semibold text-center text-lg">
        Welcome to Twente! 🇳🇱
      </p>
      <p class="text-gray font-light mt-5 text-center">
        Discover the digital world of Twente.
      </p>
      <div class="flex flex-col font-extralight mt-6 gap-4">
        <div class="bg-dark rounded-2xl flex items-center hvr-grow">
          <p class="pl-5">💼</p>
          <p class="text-gray px-5 py-3 rounded-2xl">
            See what different companies have to offer
          </p>
        </div>
        <div class="bg-dark rounded-2xl flex items-center hvr-grow">
          <p class="pl-5">💬</p>
          <p class="text-gray px-5 py-3 rounded-2xl">
            Chat and meet with potential partners
          </p>
        </div>
        <div class="bg-dark rounded-2xl flex items-center hvr-grow">
          <p class="pl-5">⚡️</p>
          <p class="text-gray px-5 py-3">Advertise yourself and your company</p>
        </div>
      </div>
      <DButton
        href="javascript:void(0)"
        class="mt-8 mb-2 font-semibold text-sm text-light px-8 py-3 hvr-shrink"
        selected
        @click="$emit('modal-close')"
      >
        Explore
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15.75"
          height="7.742"
          viewBox="0 0 15.75 7.742"
        >
          <path
            id="Icon_awesome-long-arrow-alt-right"
            data-name="Icon awesome-long-arrow-alt-right"
            d="M11.037,12.723H.422A.422.422,0,0,0,0,13.145v1.969a.422.422,0,0,0,.422.422H11.037v1.619a.844.844,0,0,0,1.44.6L15.5,14.726a.844.844,0,0,0,0-1.193l-3.026-3.026a.844.844,0,0,0-1.44.6Z"
            transform="translate(0 -10.258)"
            fill="#2b2a65"
          />
        </svg>
      </DButton>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
