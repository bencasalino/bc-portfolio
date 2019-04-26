<template>
<div class="wrapper">
<div class="wrapper-left">
<div class="logo-wrap">
<h1><img class="logo animated fadeIn" src="/../../static/projects/tile-tptoe.png" alt="TPTOE">CSS GRID PROJECT</h1>
<br>
<h3>PERIODIC TABLE OF ELEMENTS
</h3>
<h5>MADE WITH BOURBON.IO/NEAT GRIDS</h5>
<br>
<h6 class="sum"> SUMMARY </h6>
  <p>
      This project utilizes the use of grids and pure divs to recreate the Periodic Table of Elements.
     <br>
     <br>
     Created primarily out of HTML div tags, this grid is built with the Bourbon.io framework with CSS animate on load.
  </p>
<br>
<h6 class="tech"> TECHNOLOGIES </h6>
<br>
<img class="icon" src="/../../static/tech/html.svg">
<img class="icon" src="/../../static/tech/css.svg">
<img class="icon" src="/../../static/tech/js.svg">
<img class="icon" src="/../../static/tech/bourbon.svg">
<img class="icon" src="/../../static/tech/sass.svg">
<img class="icon" src="/../../static/tech/npm.svg">
<img class="icon" src="/../../static/tech/adobe.png">
<img class="icon" src="/../../static/tech/ai.png">
  <!-- <p> HTML, CSS/SASS, Bourbon.io/Neat Grids
  </p> -->
  <br>
<br>
  <button>
  <a href="https://periodictable-of-elements.firebaseapp.com/">VIEW PROJECT</a>
  </button>
  <button>
  <a href="https://github.com/bencasalino/Periodic-Table-of-Elements">GITHUB</a>
  </button>
</div>
<div>
</div>
</div>
<div class="wrapper-right">
  <img class="screen animated fadeIn" src="/../../static/projects/pero.png" alt="TPTOE">
  <div>
<a href="https://bencasalino.com/#/Project_BSFB">
<img class="arrow" src="/../../static/projects/arrow-right.svg" alt="View Next Project">
</a>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Project_Periodic',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.wrapper {
height: 70vh;
width: 100vw;
background-color: #3a9bfc;
display: flex;
justify-content: space-between;

}
.wrapper-left {
display: flex;
justify-content: flex-start;
padding-top: 5rem;
background-color: #6acdfd;
max-width: 400px;
min-width: 400px;
padding-left: 3rem;
padding-right: 3rem;
}

.wrapper-right {
padding-top: 5rem;
padding-left: 1rem;
padding-right: 1rem;
color: #222;
display: flex;
justify-content: center;
align-items: center;
}

.logo {
max-width: 70px;
border-radius: 50%;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
}

.screen {
  margin-right:8rem;
padding: 12px;
max-width: 450px;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
background-color: #3a9bfc;
}


h1 {
font-size: 1.5rem;
font-weight: 900;
color: #f7f8f0;
/* display: flex; */
/* flex-direction: row; */
}
  h5 {
  font-weight: 900;
  color: #222;
  }
  h3 {
  color: #111;
  font-weight: 400;
  }
p {
  max-height: 60px;
min-height: 60px;
font-size: 12px;
font-weight: 400;
max-width: 100%;
background-color: #f7f8f0;
padding: 10px;
word-wrap: break-word;
/* color: #f7f8f0; */
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
    border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
}

.sum {
  max-width: 70px;
font-weight: 700;
color:  #f7f8f0;
background-color: #3a9bfc;
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
/* border-bottom: 4px white solid; */
}

.tech {
max-width: 100px;
font-weight: 700;
color:  #f7f8f0;
background-color: #3a9bfc;
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
/* border-bottom: 4px white solid; */
}
button {
    color: #fff;
    background-color: #3a9bfc;
    border:none;
    text-decoration: none;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 12px;
    padding-right: 12px;
    border: 2px solid #3a9bfc;
    -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
    -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
    box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
    margin-right: 20px;
    }

button:hover {
text-decoration: none;
margin-right: 20px;
padding-top: 5px;
padding-bottom: 5px;
padding-left: 12px;
padding-right: 12px;
color: #fd996b;
border:none;
background-color: #f7f8f0;
border: 2px solid #3a9bfc;
cursor: pointer;
-webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
-moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
}
a {
  color: #222;
  text-decoration: none;
  list-style-type: none;
}
.icon {
max-width: 20px;
min-width: 20px;
max-height: 20px;
min-height: 20px;
}

.arrow {
  max-width: 20px;
min-width: 20px;
max-height: 20px;
min-height: 20px;
}

@media screen and (max-width: 801px) {
.wrapper-right { display: none; }   /* hide it elsewhere */
}

@media screen and (max-width: 500px) {
.wrapper {
min-width: 100%;
max-width: 100%;
}

.wrapper-left {
margin-top:20px;
padding-left: 10px;
padding-right: 10px;
min-width: 380px;
max-width: 380px;
}
p {
min-width: 330px;
max-width: 330px;
}

.logo {
min-width: 50px;
max-width: 50px;
}

.icon {
max-width: 12px;
min-width: 12px;
max-height: 12px;
min-height: 12px;
}
/* hide it elsewhere */
}
</style>
