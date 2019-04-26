<template>
<div class="wrapper">
<div class="wrapper-left">
<div class="logo-wrap">
<h1><img class="logo animated fadeIn" src="/../../static/projects/sfdoc-black.png" alt="SFDOC">SFDOC</h1>
<br>
<h3>SOCCER FIELD DIRECTORY OF COLORADO
</h3>
<h5>WEB APPLICATION PROJECT </h5>
<br>
<h6 class="sum"> SUMMARY </h6>
  <p>
A web application that users can gain information about all indoor/outdoor soccer fields in Colorado.
<br>
<br> This application is decoupled with a dedicated API/database featuring full CRUD functionality.
  </p>
<br>
<h6 class="tech"> TECHNOLOGIES </h6>
<div>
<br>
<img class="icon" src="/../../static/tech/vue.svg" alt="Vue.js">
<img class="icon" src="/../../static/tech/html.svg" alt="HTML">
<img class="icon" src="/../../static/tech/css.svg" alt="CSS">
<img class="icon" src="/../../static/tech/sass.svg" alt="Sass">
<img class="icon" src="/../../static/tech/js.svg" alt="JavaScript">
<img class="icon" src="/../../static/tech/json.svg" alt="JSON">
<img class="icon" src="/../../static/tech/cypress.svg" alt="Cypress">
<img class="icon" src="/../../static/tech/node.svg" alt="Node">
<img class="icon" src="/../../static/tech/knex.svg" alt="Knex">
<img class="icon" src="/../../static/tech/postgres.svg" alt="PostgreSQL">
<img class="icon" src="/../../static/tech/firebase.svg" alt="Firebase">
<img class="icon" src="/../../static/tech/heroku.svg" alt="Heroku">
<img class="icon" src="/../../static/tech/postman.svg" alt="Postman">
<img class="icon" src="/../../static/tech/nodemon.svg" alt="Nodemon">
<img class="icon" src="/../../static/tech/adobe.png" alt="Adobe">
<img class="icon" src="/../../static/tech/ps.png" alt="Photoshop">
</div>
<br>
  <a href="https://github.com/bencasalino/SFDOC" target="_blank">
  <button>
    GITHUB
  </button>
  </a>
  <a href="soccer-directory-colorado.firebaseapp.com" target="_blank">
  <button>
    VIEW PROJECT
  </button>
  </a>
</div>
<div>
</div>
</div>
<div class="wrapper-right">
  <img class="screen animated fadeIn" src="/../../static/projects/soccer.png" alt="SFDOC">
  <div>
<a href="https://bencasalino.com/#/Project_TF">
<img class="arrow" src="/../../static/projects/arrow-right.svg" alt="View Next Project">
</a>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Project_SFDOC',
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
background-color: #2f866a;
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
  margin-right: 3rem;
  background-color: #333;
padding: 12px;
max-width: 600px;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
}

h1 {
font-size: 1.5rem;
font-weight: 900;
color: #1e5342;
/* display: flex; */
/* flex-direction: row; */
}
  h5 {
  font-weight: 900;
  color: #222;
  }
  h3 {
  color: #222;
  font-weight: 400;
  }
p {
font-size: 12px;
font-weight: 400;
max-width: 100%;
background-color: #1e5342;
padding: 10px;
max-height: 60px;
min-height: 60px;
word-wrap: break-word;
color: #cdceca;
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
color:  #2f866a;
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
color:  #2f866a;
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
    background-color: #1e5342;
    border:none;
    text-decoration: none;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 12px;
    padding-right: 12px;
    border: 2px solid #1e5342;
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
background-color: #2f866a;
border: 2px solid #1e5342;
cursor: pointer;
-webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
-moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.33);
}
a {
  color: #f7f8f0;
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
