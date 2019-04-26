<template>
<div class="wrapper">
<div class="wrapper-left">
<div class="logo-wrap">
<h1><img class="logo animated fadeIn" src="/../../static/projects/taco.png" alt="Taco">EL TACO DIARIO</h1>
<br>
<h3>GROUP PROJECT
</h3>
<h5>SIDE-SCROLLING & MINE-SWEEPER GAME</h5>
<br>
<h6 class="sum"> SUMMARY </h6>
  <p>
A website with taco inspired games and content, featuring a minesweeper application and side-scrolling 2d game. This was a group project while studying at Epicodus in Portland.
<br>
<br>
Use the links below to view the current project repositories.
  </p>
<br>
<h6 class="tech"> TECHNOLOGIES </h6>
<br>
<img class="icon" src="/../../static/tech/angular.svg">
<img class="icon" src="/../../static/tech/php.svg">
<img class="icon" src="/../../static/tech/html.svg">
<img class="icon" src="/../../static/tech/css.svg">
<img class="icon" src="/../../static/tech/js.svg">
<img class="icon" src="/../../static/tech/mocha.svg">
<img class="icon" src="/../../static/tech/chai.svg">
<img class="icon" src="/../../static/tech/trello.svg">
<img class="icon" src="/../../static/tech/bootstrap.svg">
<img class="icon" src="/../../static/tech/vscode.svg">
<img class="icon" src="/../../static/tech/yarn.svg">
<img class="icon" src="/../../static/tech/adobe.png">
<img class="icon" src="/../../static/tech/ai.png">
<img class="icon" src="/../../static/tech/ps.png">
<br>
<br>
  <button>
  <a href="https://github.com/jtorrespdx/taco_homepage">VIEW</a>
  </button>
  <button>
  <a href="https://github.com/jtorrespdx/taco_homepage">GITHUB</a>
  </button>
</div>
<div>
</div>
</div>
<div class="wrapper-right">
  <div class="team-images">

<h2 class="team-box animated slideInDown"> TEAM </h2>
<a href="https://github.com/bencasalino">
<h6 class="animated slideInDown">
<img class="team-pic" src="/../../static/team/ben.jpg">
Ben
</h6>
</a>
<a href="https://github.com/anniehoogendoorn">
<h6 class="animated slideInDown">
<img class="team-pic" src="/../../static/team/annie.png">
Annie
</h6>
</a>
<a href="https://github.com/jtorrespdx">
<h6 class="animated slideInDown">
<img class="team-pic" src="/../../static/team/jose.jpg">
Jose
</h6>
</a>
<a href="https://github.com/nathanhwyoung">
<h6 class="animated slideInDown">
<img class="team-pic" src="/../../static/team/nathan.jpg">
Nathan
</h6>
</a>
<a href="https://github.com/austinblanchard">
<h6 class="animated slideInDown">
<img class="team-pic" src="/../../static/team/austin.jpg">
Austin
</h6>
</a>
</div>


  <img class="screen animated fadeIn" src="/../../static/projects/taco.png" alt="Taco">
  <div>
<a href="https://bencasalino.com/#/Project_Clymb">
<img class="arrow" src="/../../static/projects/arrow-right.svg" alt="View Next Project">
</a>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Project_Taco',
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
background-color: #222;
display: flex;
justify-content: space-between;

}
.wrapper-left {
display: flex;
justify-content: flex-start;
padding-top: 5rem;
background-color: #f8ce4e;
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
    margin-left: 5rem;
  margin-right: 14rem;
padding: 12px;
background-color: #222;
max-width: 200px;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
}

h1 {
font-size: 1.5rem;
font-weight: 900;
color: #222;
/* display: flex; */
/* flex-direction: row; */
}
  h5 {
  font-weight: 900;
  color: #222;
  }
  h3 {
  color: #333;
  font-weight: 400;
  }
p {
  max-height: 60px;
min-height: 60px;
font-size: 12px;
font-weight: 400;
max-width: 100%;
background-color: #222;
padding: 10px;
word-wrap: break-word;
color:#aaa;
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
color:  #f8ce4e;
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
color:  #f8ce4e;
background-color: rgb(55, 55, 55);
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
/* border-bottom: 4px white solid; */
}
button {
    color: #fff;
    background-color: #222;
    border:none;
    text-decoration: none;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 12px;
    padding-right: 12px;
    border: 2px solid #222;
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
background-color: #f8ce4e;
border: 2px solid #222;
cursor: pointer;
-webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
-moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
}
a {
  color: #f8ce4e;
  text-decoration: none;
  list-style-type: none;
}
a:hover{
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

.team-pic {
  margin-right:2px;
  max-width: 30px;
    max-height: 30px;
border-radius: 50%;
cursor: pointer;
-webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
-moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
}
h6 {
padding-top: 10px;
color: #f8ce4e;
font-weight: 400;
font-size: 14px;
}
h6:hover {
padding-top: 10px;
color: #aaa;
font-weight: 400;
font-size: 14px;
}

.team-box {
  max-width: 70px;
font-weight: 700;
color:  #222;
background-color: #f8ce4e;
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
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
