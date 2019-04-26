<template>
<div class="wrapper">
<div class="wrapper-left">
<div class="logo-wrap">
<h1><img class="logo animated fadeIn" src="/../../static/projects/csg-logo.png" alt="CSG Logo">COLORADO SOCCER GAMES</h1>
<br>
<h3>GALVANIZE CAPSTONE PROJECT </h3>
<h5>WEB APPLICATION</h5>
<br>
<h6 class="sum"> SUMMARY </h6>
  <p>
  Web application for the people of Colorado to help organize & track statistical data for all active pick-up soccer games across the state.
  <br>
    <br>
  Users have the ability to Create, Host, Schedule or RSVP to games.
    <br>
    This project was my final capstone project at Galvanize.
  </p>
<br>
<h6 class="tech"> TECHNOLOGIES </h6>
<br>
<img class="icon" src="/../../static/tech/vue.svg">
<img class="icon" src="/../../static/tech/html.svg">
<img class="icon" src="/../../static/tech/css.svg">
<img class="icon" src="/../../static/tech/sass.svg">
<img class="icon" src="/../../static/tech/js.svg">
<img class="icon" src="/../../static/tech/node.svg">
<img class="icon" src="/../../static/tech/twilio.svg">
<img class="icon" src="/../../static/tech/heroku.svg">
<img class="icon" src="/../../static/tech/vscode.svg">
<img class="icon" src="/../../static/tech/postgres.svg">
<img class="icon" src="/../../static/tech/knex.svg">
<img class="icon" src="/../../static/tech/cypress.svg">
<img class="icon" src="/../../static/tech/chart.svg">
<img class="icon" src="/../../static/tech/adobe.png">
<img class="icon" src="/../../static/tech/ps.png">
<img class="icon" src="/../../static/tech/ai.png">

<br>
  <!-- <p>Vue, HTML, CSS/SASS, JavaScript, Node.js, PostgreSQL, Knex, Chart.js & Twilio API
  </p> -->
<br>
  <a href="https://coloradosoccergames.today/#/">
  <button>
    VIEW SITE
  </button>
  </a>
  <a href="https://github.com/Colorado-Soccer-Games">
  <button>
    GITHUB
  </button>
  </a>
</div>
<div>
</div>
</div>
<div class="wrapper-right">
  <img class="screen animated fadeIn" src="/../../static/projects/csg1.png" alt="CSG Logo">
  <div>
<a href="https://bencasalino.com/#/Project_Cloud">
<img class="arrow" src="/../../static/projects/arrow-right.svg" alt="View Next Project">
</a>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Project_Clymb',
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
background-color: #2EFD96;
display: flex;
justify-content: space-between;

}
.wrapper-left {
display: flex;
justify-content: flex-start;
padding-top: 5rem;
background-color: #222;
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
margin-right: 4rem;
padding: 12px;
max-width: 600px;
-webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
-moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
background-color: #2EFD96;
}

h1 {
font-size: 1.5rem;
font-weight: 900;
color: #2EFD96;
/* display: flex; */
/* flex-direction: row; */
}
  h5 {
  font-weight: 900;
  color: #dcdada;
  }
  h3 {
  color: #dcdada;
  font-weight: 400;
  }
p {
  max-height: 60px;
min-height: 60px;
font-size: 12px;
font-weight: 400;
max-width: 100%;
background-color: #dcdada;
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
color:  #2EFD96;
background-color: rgb(55, 55, 55);
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
color:  #2EFD96;
background-color: rgb(55, 55, 55);
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
/* border-bottom: 4px white solid; */
}
button {
color: #222;
background-color: #2EFD96;
border:none;
text-decoration: none;
cursor: pointer;
padding-top: 5px;
padding-bottom: 5px;
padding-left: 12px;
padding-right: 12px;
border: 2px solid #2EFD96;
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
color: #f7f8f0;
border:none;
background-color: #222;
border: 2px solid #2EFD96;
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
a:hover {
color: #fff;
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
