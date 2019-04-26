<template>
    <div class="hero-banner">
    </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.hero-banner {
  background: url(/../../static/banner/hero-waterfall-bg.png),
    url(/../../static/banner/hero-space-bg.png), url(/../../static/banner/hero-pillars-bg.png),
    url(/../../static/banner/hero-main-bg.png);
  height: 100vh;
  width: 100vw;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  z-index: -99999;
  animation: parallax_bg linear 40s infinite;
}

@keyframes parallax_bg {
  100% {
    background-position-y: -1200px, 1000px, 300px, 0px;
  }
}

@media screen and (max-width: 350px) {
  .hero-banner {
display: none;
  }
}
</style>
