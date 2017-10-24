<template>
  <section class="container">
    <k-container class="main"
      relative
      w="100%"
      h="35%"
      mt="10%"
      mh="auto">

      <svg viewBox="0 0 600 300">
        <!-- Symbol-->
        <symbol id="s-text">
          <text text-anchor="middle"
            x="50%"
            y="50%"
            dy=".35em">Kute</text>
        </symbol>
        <!-- Duplicate symbols-->
        <use class="text"
          xlink:href="#s-text"></use>
        <use class="text"
          xlink:href="#s-text"></use>
        <use class="text"
          xlink:href="#s-text"></use>
        <use class="text"
          xlink:href="#s-text"></use>
        <use class="text"
          xlink:href="#s-text"></use>
      </svg>

    </k-container>
    <k-button :style="{width: '115px'}"
      href="components">Components</k-button>
    <k-button :style="{width: '115px'}"
      blank
      href="https://github.com/R701/kute">Github</k-button>
  </section>
</template>

<script>
  import { Button as KButton } from 'kute'

  export default {
    components: {
      KButton
    }
  }
</script>

<style scoped>
  /* Main styles */
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:800);
  .container {
    text-align: center;
    height: 100%;
  }
  .main {
    font: 10em/1 Open Sans, Impact;
    /* text-transform: uppercase; */
    margin: 0;
    text-align: left;
  }
  .text {
    fill: none;
    stroke-width: 3px;
    stroke-linejoin: round;
    stroke-dasharray: 70 330;
    stroke-dashoffset: 0;
    -webkit-animation: stroke 10s infinite linear;
    animation: stroke 10s infinite linear;
  }
  .text:nth-child(5n + 1) {
    stroke: #f24236;
    -webkit-animation-delay: -2s;
    animation-delay: -2s;
  }
  .text:nth-child(5n + 2) {
    stroke: #00c246;
    -webkit-animation-delay: -4s;
    animation-delay: -4s;
  }
  .text:nth-child(5n + 3) {
    stroke: #eff1f3;
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
  }
  .text:nth-child(5n + 4) {
    stroke: #03abff;
    -webkit-animation-delay: -8s;
    animation-delay: -8s;
  }
  .text:nth-child(5n + 5) {
    stroke: #ffca4f;
    -webkit-animation-delay: -10s;
    animation-delay: -10s;
  }

  @-webkit-keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>

