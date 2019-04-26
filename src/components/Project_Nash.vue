<template>
<div class="wrapper">
<div class="wrapper-left">
<div class="logo-wrap">
<h1><img class="logo animated fadeIn" src="/../../static/projects/nash.png" alt="Phoenix Suns">PHOENIX SUNS</h1>
<br>
<h3>GAME PROGRAM COVER ART
</h3>
<h5>5x CONTEST WINNER</h5>
<br>
<h6 class="sum"> SUMMARY </h6>
  <p>
    My designs were featured on the cover of the Phoenix Suns game program called "Free Throw".
    <br>
    <br>
    Fans attended the game are given a copy of the program before tipoff. Over two seasons my design won the cover contest five times.
  </p>
<br>
<h6 class="tech"> TECHNOLOGIES </h6>
<br>
<img class="icon" src="/../../static/tech/adobe.png">
<img class="icon" src="/../../static/tech/ps.png">
<img class="icon" src="/../../static/tech/ai.png">
<br>
<br>
  <button>
  <a href="https://dribbble.com/shots/2287089-Nash-Game-Cover">VIEW NASH</a>
  </button>
  <button>
  <a href="http://www.nba.com/suns/gallery/2014-15-free-throw-covers#gref">VIEW DRAGIC</a>
  </button>
</div>
<div>
</div>
</div>
<div class="wrapper-right">
  <img class="nash animated fadeIn" src="/../../static/projects/nash1.jpg" alt="Nash">
    <img class="dragic animated fadeIn" src="/../../static/projects/suns_4.jpg" alt="Suns">
  <img class="nash animated fadeIn" src="/../../static/projects/goran.jpg" alt="Dragic">
  <div>
<a href="https://bencasalino.com/#/Project_RmCup">
<img class="arrow" src="/../../static/projects/arrow-right-black.svg" alt="View Next Project">
</a>
</div>
</div>

</div>
</div>
</template>

<script>
export default {
  name: 'Project_Nash',
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
background-color: #f7f8f0;
display: flex;
justify-content: space-between;

}
.wrapper-left {
display: flex;
justify-content: flex-start;
padding-top: 5rem;
background-color: #63727A;
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
.nash {
  margin-right: .4rem;
background-color: #f7f8f0;
padding:12px;
  margin: 2px;
    min-height: 240px;
    max-height: 240px;
      -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
}


.dragic {
  margin: 2px;
background-color: #f7f8f0;
padding:12px;
    min-height: 240px;
    max-height: 240px;
      -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  /* margin-right: 14rem;
padding-right: 1rem;
max-width: 600px; */
}

h1 {
font-size: 1.5rem;
font-weight: 900;
color: #E56020;
/* display: flex; */
/* flex-direction: row; */
}

  h5 {
  font-weight: 900;
  color: #111;
  }
  h3 {
  color: #222;
  font-weight: 400;
  }
p {
  max-height: 60px;
min-height: 60px;
font-size: 12px;
font-weight: 400;
max-width: 100%;
background-color: #BEC0C2;
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
color:  #E56020;
background-color: #1D1160;
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
color:  #E56020;
background-color: #1D1160;
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
/* border-bottom: 4px white solid; */
}
button {
    color: #1D1160;
    background-color: #E56020;
    border:none;
    text-decoration: none;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 12px;
    padding-right: 12px;
    border: 2px solid #E56020;
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
color: #1D1160;
border:none;
background-color: #63727A;
border: 2px solid #1D1160;
cursor: pointer;
-webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
-moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
}
a {
  color: #1D1160;
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
