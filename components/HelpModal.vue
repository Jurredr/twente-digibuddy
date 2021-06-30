<template>
  <div class="bg-light rounded-3xl overflow-hidden absolute">
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
      <div
        class="
          minimize-button
          absolute
          left-4
          cursor-pointer
          rounded-3xl
          bg-light
          w-9
          h-7
          flex
          justify-center
          items-center
          hvr-grow
        "
        @click="$emit('modal-close')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15.979"
          height="15.979"
          viewBox="0 0 15.979 15.979"
        >
          <path
            id="Icon_material-close"
            data-name="Icon material-close"
            d="M23.479,9.109,21.869,7.5l-6.38,6.38L9.109,7.5,7.5,9.109l6.38,6.38L7.5,21.869l1.609,1.609,6.38-6.38,6.38,6.38,1.609-1.609-6.38-6.38Z"
            transform="translate(-7.5 -7.5)"
            fill="#fff"
          />
        </svg>
      </div>
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
        {{ $t('helpHeader') }}
      </p>
      <p class="text-gray font-light mt-5 text-center">
        {{ $t('helpSubHeader') }}
      </p>
      <div class="flex flex-col font-extralight mt-6 gap-4">
        <FAQitem translation-key-q="helpQ1" translation-key-a="helpA1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.146"
            height="14.247"
            viewBox="0 0 8.146 14.247"
          >
            <path
              id="Icon_ionic-ios-arrow-forward"
              data-name="Icon ionic-ios-arrow-forward"
              d="M16.937,13.317,11.546,7.93a1.014,1.014,0,0,1,0-1.438,1.027,1.027,0,0,1,1.442,0L19.1,12.6a1.016,1.016,0,0,1,.03,1.4l-6.133,6.146a1.018,1.018,0,1,1-1.442-1.438Z"
              transform="translate(-11.246 -6.196)"
              fill="#fff"
            />
          </svg>
        </FAQitem>
        <FAQitem translation-key-q="helpQ2" translation-key-a="helpA2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.146"
            height="14.247"
            viewBox="0 0 8.146 14.247"
          >
            <path
              id="Icon_ionic-ios-arrow-forward"
              data-name="Icon ionic-ios-arrow-forward"
              d="M16.937,13.317,11.546,7.93a1.014,1.014,0,0,1,0-1.438,1.027,1.027,0,0,1,1.442,0L19.1,12.6a1.016,1.016,0,0,1,.03,1.4l-6.133,6.146a1.018,1.018,0,1,1-1.442-1.438Z"
              transform="translate(-11.246 -6.196)"
              fill="#fff"
            />
          </svg>
        </FAQitem>
        <FAQitem translation-key-q="helpQ3" translation-key-a="helpA3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.146"
            height="14.247"
            viewBox="0 0 8.146 14.247"
          >
            <path
              id="Icon_ionic-ios-arrow-forward"
              data-name="Icon ionic-ios-arrow-forward"
              d="M16.937,13.317,11.546,7.93a1.014,1.014,0,0,1,0-1.438,1.027,1.027,0,0,1,1.442,0L19.1,12.6a1.016,1.016,0,0,1,.03,1.4l-6.133,6.146a1.018,1.018,0,1,1-1.442-1.438Z"
              transform="translate(-11.246 -6.196)"
              fill="#fff"
            />
          </svg>
        </FAQitem>
      </div>
      <p class="text-gray font-light text-center mt-7">
        {{ $t('helpUnanswered') }}
      </p>
      <DButton
        href="mailto:info@wired-u.nl"
        class="mt-8 mb-2 font-semibold text-sm text-light px-8 py-3 hvr-grow"
        selected
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.131"
          height="14.246"
          viewBox="0 0 18.131 14.246"
        >
          <path
            id="Icon_ionic-md-mail"
            data-name="Icon ionic-md-mail"
            d="M18.655,5.625H3.977A1.732,1.732,0,0,0,2.25,7.352V18.144a1.732,1.732,0,0,0,1.727,1.727H18.655a1.732,1.732,0,0,0,1.727-1.727V7.352A1.732,1.732,0,0,0,18.655,5.625Zm-.216,3.669-7.123,4.749L4.193,9.294V7.568l7.123,4.749,7.123-4.749Z"
            transform="translate(-2.25 -5.625)"
            fill="#2b2a65"
          />
        </svg>
        {{ $t('helpButton') }}
      </DButton>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style></style>
