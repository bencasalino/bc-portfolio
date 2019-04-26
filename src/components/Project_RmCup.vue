<template>
<div class="wrapper">
<div class="wrapper-left">
<div class="logo-wrap">
<h1><img class="logo animated fadeIn" src="/../../static/projects/rmlog-port.svg" alt="Icon Set">ROCKY MOUNTAIN CUP</h1>
<br>
<h3>RSL vs COL
</h3>
<h5>
PUBLIC API & DATABASE</h5>
<br>
<h6 class="sum"> SUMMARY </h6>
  <p>
   The Rocky Mountain Cup is a soccer trophy contested between Real Salt Lake and the Colorado Rapids.
    <br>
    <br>
   This is a full RESTful API linked to an extensive database detailing everything about the Rocky Mountain Cup series.
  </p>
<br>
<h6 class="tech"> TECHNOLOGIES </h6>
<br>
<img class="icon" src="/../../static/tech/html.svg">
<img class="icon" src="/../../static/tech/css.svg">
<img class="icon" src="/../../static/tech/js.svg">
<img class="icon" src="/../../static/tech/vue.svg">
<img class="icon" src="/../../static/tech/postgres.svg">
<img class="icon" src="/../../static/tech/knex.svg">
<img class="icon" src="/../../static/tech/cypress.svg">
<img class="icon" src="/../../static/tech/node.svg">
<img class="icon" src="/../../static/tech/adobe.png">
<img class="icon" src="/../../static/tech/ai.png">
<br>
<br>
  <a href="https://rockymountaincup.firebaseapp.com/#/" target="_blank">
  <button>
    VIEW
  </button>
  </a>
    <a href="https://github.com/bencasalino/rmcup" target="_blank">
  <button>
    GITHUB
  </button>
  </a>
      <a href="https://rmcup.herokuapp.com/matches" target="_blank">
  <button>
   PUBLIC API
  </button>
  </a>
</div>
<div>
</div>
</div>
<div class="wrapper-right">
  <img class="screen animated fadeIn" src="/../../static/projects/rmfinal.png" alt="Icon Set">
  <div>
<a href="https://bencasalino.com/#/Project_Taco">
<img class="arrow" src="/../../static/projects/arrow-right.svg" alt="View Next Project">
</a>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Project_RmCup',
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
background-color: #A4A19B;
display: flex;
justify-content: space-between;

}
.wrapper-left {
display: flex;
justify-content: flex-start;
padding-top: 5rem;
/* background-color: #20303f; */
	 background: linear-gradient(to bottom,#4D3F3F , #9B9487);
max-width: 400px;
min-width: 400px;
padding-left: 3rem;
padding-right: 3rem;
}

.wrapper-right {
padding-top: 5rem;
padding-bottom: 2rem;
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
background-color: #A4A19B;
-webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
}

h1 {
font-size: 1.5rem;
font-weight: 900;
color: #A4A19B;
/* display: flex; */
/* flex-direction: row; */
}

  h5 {
  font-weight: 900;
color: #A4A19B;
  }
  h3 {
color: #A4A19B;
  font-weight: 400;
  }
p {
  max-height: 60px;
min-height: 60px;
font-size: 12px;
font-weight: 400;
max-width: 100%;
background-color: #444;
padding: 10px;
word-wrap: break-word;
color: #aaa;
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
color:  #A4A19B;
background-color: #555;
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
color:  #A4A19B;
background-color: #555;
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
/* border-bottom: 4px white solid; */
}
button {
    color: #A4A19B;
    background-color: #555;
    border:none;
    text-decoration: none;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 12px;
    padding-right: 12px;
    border: 2px solid #555;
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
color: #555;
border:none;
background-color: #333;
border: 2px solid #555;
cursor: pointer;
-webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
-moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
}
a {
  color: #A4A19B;
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
