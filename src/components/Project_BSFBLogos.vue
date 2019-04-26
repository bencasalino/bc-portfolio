<template>
<div class="wrapper">
<div class="wrapper-left">
<div class="logo-wrap">
<h1><img class="logo animated fadeIn" src="/../../static/projects/logo-grid.png" alt="BSFB LOGOS">BSFB LEAGUE LOGOS </h1>
<br>
<h3>
ESTABLISHED 2007</h3>
<h5>LOGO DESIGN & BRANDING</h5>
<br>
<h6 class="sum"> SUMMARY </h6>
  <p class="blej">
    Logos for current/past teams in our fantasy basketball league. Select the team below to view more details.
    <br>
        <br>
Check out our league <a href="http://www.bsfbbasketball.com/">HOME</a> to discover additional information.
<br>
View more unused/past league logos <a href="http://www.bsfbbasketball.com/"> HERE </a></p>
<br>
<h6 class="tech"> TECHNOLOGIES </h6>
<br>
<img class="icon" src="/../../static/tech/adobe.png">
<img class="icon" src="/../../static/tech/ai.png">
<img class="icon" src="/../../static/tech/ps.png">
<br>
<br>
    <button class="adam">
  <a href="https://dribbble.com/shots/2298500-Fantasy-Basketball-League-Logo-Idea-2" target="_blank">VIEW LOGO</a>
    </button>
    <button class="ben">
  <a href="https://dribbble.com/shots/2831287-Barles-Basketball" target="_blank">VIEW LOGO</a>
  </button>
    <button class="rafa">
  <a href="https://dribbble.com/shots/2782504-PNDB-Basketball-Club" target="_blank">VIEW LOGO</a>
  </button>
    <button class="jon">
  <a href="https://dribbble.com/shots/2286701-WCC-Basketball-Logo" target="_blank">VIEW LOGO</a>
  </button>
</div>
<div>
</div>
</div>
<div class="wrapper-right">
  <img class="screen animated fadeIn" src="/../../static/projects/adam.png" alt="ADAM LOGO">
  <img class="screen animated fadeIn" src="/../../static/projects/ben.png" alt="BEN LOGO">
    <img class="screen animated fadeIn" src="/../../static/projects/rafa.png" alt="RAFA LOGO">
      <img class="screen animated fadeIn" src="/../../static/projects/jon.png" alt="JON LOGO">
      <div>
<a href="https://bencasalino.com/#/Project_Periodic">
<img class="arrow" src="/../../static/projects/arrow-right-black.svg" alt="View Next Project">
</a>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Project_BSFBLogos',
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
.wrapper-left {
display: flex;
justify-content: flex-start;
padding-top: 5rem;
background-color: rgb(63, 62, 62);
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

  margin-right: 22px;
padding: 12px;
max-width: 130px;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
}

h1 {
font-size: 1.5rem;
font-weight: 900;
color: #e1e2db;
/* display: flex; */
/* flex-direction: row; */
}

  h5 {
  font-weight: 900;
  color: #aaa;
  }
  h3 {
  color: rgb(186, 183, 183);
  font-weight: 400;
  }
p {
font-size: 12px;
font-weight: 400;
max-width: 100%;
background-color:#777;
padding: 10px;
max-height: 60px;
min-height: 60px;
word-wrap: break-word;
color: #f7f9f9;
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
color:  #222;
background-color: #f7f8f0;
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
  /* -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33); */
/* border-bottom: 4px white solid; */
}

.tech {
max-width: 100px;
font-weight: 700;
color:  #222;
background-color: #f7f8f0;
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
/* border-bottom: 4px white solid; */
}
button {
    color: #fff;
    background-color: #e64c3c;
    border:none;
    text-decoration: none;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    border: 2px solid #e64c3c;
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
padding-left: 5px;
padding-right: 5px;
color: #fff;
border:none;
background-color: #222;
border: 2px solid #fff;
cursor: pointer;
-webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
-moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
}
a {
  color: #aaa;
  text-decoration: none;
  list-style-type: none;
}
a:hover {
  color: #aaa;
  text-decoration: none;
  list-style-type: none;
}

.rafa {
  background-color: #d81117;
  border: 2px solid #d81117;
}

.ben {
  background-color: #095198;
  border: 2px solid #095198;
}

.adam {
  background-color: #243b45;
  border: 2px solid #243b45;
}

.jon {
  background-color: #0d685e;
  border: 2px solid #0d685e;
}

.icon {
  max-width: 20px;
  min-width: 20px;
    max-height: 20px;
  min-height: 20px;
}
.blej {
  color: #222;
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
