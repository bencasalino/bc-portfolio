<template>
  <div id="wrappy">
<div id = "container">
<img  id = "image1" src="/../../static/art/art1.jpg">
<img id = "image2" src="/../../static/art/art2.jpg">
<img id = "image3" src="/../../static/art/art3.jpg">
<img id = "image4" src="/../../static/art/art4.jpg">
<img id = "image5" src="/../../static/art/art5.jpg">
<img id = "image6" src="/../../static/art/art6.jpg">
<img id = "image7" src="/../../static/art/art7.jpg">
<img id = "image8" src="/../../static/art/art8.jpg">
<img id = "image9" src="/../../static/art/art9.jpg">
<img id = "image10" src="/../../static/art/art10.jpg">
<img id = "image11" src="/../../static/art/art11.jpg">
<img id = "image12" src="/../../static/art/art12.jpg">
</div>
  </div>
</template>

<script>
export default {
  name: "Art"
};
</script>

<style scoped>
@keyframes imageSwap {
  0% {
    opacity: 0;
  }
  19% {
    opacity: 1;
  }
  33% {
    opacity: 0;
  }
  55% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#wrappy {
  height: 55vh;
  background-color: #222;
  display: flex;
  padding-left: 460px;
  padding-top: 100px;
}

#containter {
  position: relative;
}
#image1 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}
#image2 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 2s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}

#image3 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 8s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}

#image4 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 12s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}

#image4 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 16s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}

#image5 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 20s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}

#image6 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 24s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}

#image7 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 28s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}

#image8 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 32s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}

#image9 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 36s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}

#image10 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 40s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}
#image11 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 44s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}
#image12 {
  max-height: 333px;
  max-width: 333px;
  position: absolute;
  opacity: 0;
  animation-name: imageSwap;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 48s;
  animation-delay: 48s;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.7);
}
</style>