
<template>
<div class="wrapper">
<div class="wrapper-left">
<div class="logo-wrap">
<h1><img class="logo animated fadeIn" src="/../../static/projects/bsfb.png" alt="">BSFB LEAGUE</h1>
<br>
<h3>
LEAGUE MANAGER </h3>
<h5>WEBSITE FOR DATA & STATS</h5>
<br>
<h6 class="sum"> SUMMARY </h6>
  <p>
 BSFB is a fantasy basketball ran by myself since 2007 with this website housing all past league data and statistical/historical rankings.
<br>
<br>
This site contains all current managers past records, our league constitution & Hall of Fame.
  </p>
<br>
<h6 class="tech"> TECHNOLOGIES </h6>
<br>
<img class="icon" src="/../../static/tech/vue.svg">
<img class="icon" src="/../../static/tech/html.svg">
<img class="icon" src="/../../static/tech/css.svg">
<img class="icon" src="/../../static/tech/js.svg">
<img class="icon" src="/../../static/tech/heroku.svg">
<img class="icon" src="/../../static/tech/firebase.svg">
<img class="icon" src="/../../static/tech/mocha.svg">
<img class="icon" src="/../../static/tech/chai.svg">
<img class="icon" src="/../../static/tech/yarn.svg">
<img class="icon" src="/../../static/tech/bootstrap.svg">
<img class="icon" src="/../../static/tech/adobe.png">
<img class="icon" src="/../../static/tech/ps.png">
<img class="icon" src="/../../static/tech/ai.png">
<br>
<br>
  <a href="https://bsfbbasketball.com/#/"  target="_blank">
  <button>
    LEAGUE HOME
  </button>
  </a>
  <a href="https://github.com/bencasalino/bsfb-client" target="_blank">
  <button>
    GITHUB
  </button>
  </a>
</div>
<div>
</div>
</div>
<div class="wrapper-right">
  <img class="screen animated fadeIn" src="/../../static/projects/bsfb2.png" alt="BSFB LOGO">
  <div>
<a href="https://bencasalino.com/#/Project_G70">
<img class="arrow" src="/../../static/projects/arrow-right-black.svg" alt="View Next Project">
</a>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Project_BSFB',
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
background-color: #f7f9f9;
display: flex;
justify-content: space-between;
}

/*  1174bb*/
.wrapper-left {
display: flex;
justify-content: flex-start;
padding-top: 5rem;
background-color: #1174bb;
max-width: 400px;
min-width: 400px;
padding-left: 3rem;
padding-right: 3rem;
}

.wrapper-right {
padding-top: 5rem;
padding-left: 1rem;
padding-right: 1rem;
color: #f7f9f9;
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
  margin-right: 5rem;
padding: 12px;
max-width: 550px;
background-color: #f7f9f9;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
}

h1 {
font-size: 1.5rem;
font-weight: 900;
color: #f7f9f9;
/* display: flex; */
/* flex-direction: row; */
}

  h5 {
  font-weight: 900;
  color: #f7f9f9;
  }
  h3 {
  color: #ebebeb;
  font-weight: 400;
  }
p {
  max-height: 60px;
min-height: 60px;
font-size: 12px;
font-weight: 400;
max-width: 100%;
background-color: #f7f9f9;
padding: 10px;
word-wrap: break-word;
color: #222;
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
color:  #f7f9f9;
background-color: #cb202c;
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
color:  #f7f9f9;
background-color: #cb202c;
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
/* border-bottom: 4px white solid; */
}
button {
    color: #f7f9f9;
    background-color: #cb202c;
    border:none;
    text-decoration: none;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 12px;
    padding-right: 12px;
      list-style-type: none;
    border: 2px solid #cb202c;
    -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
    -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
    box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
    margin-right: 20px;
    }

button:hover {
text-decoration: none;
  list-style-type: none;
margin-right: 20px;
padding-top: 5px;
padding-bottom: 5px;
padding-left: 12px;
padding-right: 12px;
color: #f7f9f9;
border:none;
background-color: #1174bb;
border: 2px solid #cb202c;
cursor: pointer;
-webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
-moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
}

a {
  color: #f7f9f9;
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
