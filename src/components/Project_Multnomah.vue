

<template>
<div class="wrapper">
<div class="wrapper-left">
<div class="logo-wrap">
<h1><img class="logo animated fadeIn" src="/../../static/projects/mult.png" alt="Multnomah">MULTNOMAH COUNTY</h1>
<br>
<h3>WEB DEVELOPER INTERNSHIP </h3>
<h5> BRIDGE NOTIFICATIONS MOBILE APPLICATION</h5>
<br>
<h6 class="sum"> SUMMARY </h6>
  <p>
 Bridge Alerts provides scheduled and actual lift event notification for the 4 drawbridges maintained by Multnomah County Oregon, the Hawthorne, Morrison, Burnside, and Broadway bridges.
 <br>
 <br>
 The Bridge Alerts app & API is available for iOS & Android platforms.
 <br>
  </p>
<br>
<h6 class="tech"> TECHNOLOGIES </h6>
<br>
<img class="icon" src="/../../static/tech/drupal.svg">
<img class="icon" src="/../../static/tech/php.svg">
<img class="icon" src="/../../static/tech/adobe.png">
<img class="icon" src="/../../static/tech/ps.png">
<img class="icon" src="/../../static/tech/js.svg">
<img class="icon" src="/../../static/tech/trello.svg">
<img class="icon" src="/../../static/tech/heroku.svg">
<img class="icon" src="/../../static/tech/node.svg">
<img class="icon" src="/../../static/tech/mocha.svg">
<img class="icon" src="/../../static/tech/chai.svg">
<img class="icon" src="/../../static/tech/mac.png">
<img class="icon" src="/../../static/tech/and.png">
<br>
<br>
  <a href="https://multco.us/it/multnomah-county-bridge-alerts">
  <button>
      ALERTS
        </button>
  </a>
  <a href="https://multco.us/bridges/news/multnomah-county-launches-bridge-alerts-app">
  <button>
    ABOUT
  </button>
  </a>
  <a href="https://itunes.apple.com/us/app/bridge-alerts-by-multnomah/id1047410956?ls=1&mt=8">
  <button>
   <img class="small" src="/../../static/tech/mac.png"> iOS
  </button>
  </a>
  <a href="https://play.google.com/store/apps/details?id=com.multco.bridges&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
  <button>
      <img class="small" src="/../../static/tech/and.png">  ANDROID
  </button>
  </a>
</div>
<div>
</div>
</div>
<div class="wrapper-right">
  <img class="screen animated fadeIn" src="/../../static/projects/mult.png" alt="Multnomah">
  <div class="blej">
  <iframe width="500" height="315" src="https://www.youtube.com/embed/kKqOygugvrc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
  <div>
<a href="https://bencasalino.com/#/Project_Where">
<img class="arrow" src="/../../static/projects/arrow-right.svg" alt="View Next Project">
</a>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Project_Multnomah',
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
background-color: #99d3ef;
display: flex;
justify-content: space-between;

}

.wrapper-left {
display: flex;
justify-content: flex-start;
padding-top: 5rem;
background-color: #208dcd;
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
  margin-right: 1rem;
padding: 12px;
max-width: 150px;
background-color: #99d3ef;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  margin-bottom: 30px;
}

h1 {
font-size: 1.5rem;
font-weight: 900;
color: #99d3ef;
/* display: flex; */
/* flex-direction: row; */
}


  h5 {
  font-weight: 900;
  color: #9bd2b6;
  }
  h3 {
  color: #9bd2b6;
  font-weight: 400;
  }
p {
font-size: 12px;
font-weight: 400;
max-width: 100%;
background-color: #99d3ef;
padding: 10px;
word-wrap: break-word;
max-height: 60px;
min-height: 60px;
color: #222;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
}
.blej {
    -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
    margin-right: 1rem;
      margin-bottom: 30px;
}
.sum {
max-width: 70px;
font-weight: 700;
color:  #222;
background-color: #9bd2b6;
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
color:  #222;
/* color:  #f7f8f0; */
background-color: #0e9247;
background-color: #9bd2b6;
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
}
button {
    color: #222;
    background-color: #99d3ef;
    border:none;
    text-decoration: none;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 12px;
    padding-right: 12px;
    border: 2px solid #99d3ef;
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
color: #222;
border:none;
background-color: #9bd2b6;
border: 2px solid #0e9247;
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
.small {
  max-width: 12px;
  min-width: 12px;
    max-height: 12px;
  min-height: 12px;
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
