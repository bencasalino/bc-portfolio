<template>
<div class="wrapper">
<div class="wrapper-left">
<div class="logo-wrap">
<h1><img class="logo animated fadeIn" src="/../../static/projects/social.png" alt="Social Cloud">SOCIAL CLOUD PROJECT</h1>
<br>
<h3>GROUP WEB APPLICATION
</h3>
<h5>
GOOGLE CHROME EXTENSION</h5>
<br>
<h6 class="sum"> SUMMARY </h6>
<p>
 Social Cloud is a web experience that visualizes real-time Twitter trends by location.
<br>
<br>
 The intuitive user interface includes Hashtags that are sized according to Tweet volume and/or by US City, World City, Country.
</p>
<br>
<h6 class="tech"> TECHNOLOGIES </h6>
<br>
<img class="icon" src="/../../static/tech/react.svg" alt="React.js">
<img class="icon" src="/../../static/tech/twitter.svg" alt="React.js">
<img class="icon" src="/../../static/tech/html.svg" alt="HTML">
<img class="icon" src="/../../static/tech/css.svg" alt="CSS">
<img class="icon" src="/../../static/tech/js.svg" alt="JavaScript">
<img class="icon" src="/../../static/tech/json.svg" alt="JSON">
<img class="icon" src="/../../static/tech/cypress.svg" alt="Cypress">
<img class="icon" src="/../../static/tech/node.svg" alt="Node">
<img class="icon" src="/../../static/tech/firebase.svg" alt="Firebase">
<img class="icon" src="/../../static/tech/heroku.svg" alt="Heroku">
<img class="icon" src="/../../static/tech/postgres.svg" alt="PostgreSQL">
<img class="icon" src="/../../static/tech/adobe.png" alt="Adobe">
<img class="icon" src="/../../static/tech/ps.png" alt="Photoshop">
<img class="icon" src="/../../static/tech/chrome.svg" alt="Chrome">
<br>
<br>
<a href="https://social-cloud-trends.firebaseapp.com/" target="_blank">
<button>
VIEW
</button>
</a>
<a href="https://github.com/SocialIssuesWordCloud" target="_blank">
<button>
GITHUB
</button>
</a>
<a href="https://chrome.google.com/webstore/detail/social-cloud/oiajhngngfjeolkboffbefmegjkoannk" target="_blank">
<button>
  <img class="small" src="/../../static/tech/chrome.svg" alt="Chrome">
CHROME EXTENSION
</button>
</a>
</div>
<div>
</div>
</div>
<div class="wrapper-right">
 <div class="team-images">

<h2 class="team-box animated fadeIn"> TEAM </h2>
<a href="https://github.com/bencasalino">
<h6 class="animated slideInDown">
<img class="team-pic" src="/../../static/team/ben.jpg">
Ben
</h6>
</a>
<a href="https://github.com/lebeerman">
<h6 class="animated slideInDown">
<img class="team-pic" src="/../../static/team/dan.jpg">
Dan
</h6>
</a>
<a href="https://github.com/sarahevelynn">
<h6 class="animated slideInDown">
<img class="team-pic" src="/../../static/team/sarah.jpg">
Sarah
</h6>
</a>
<a href="https://github.com/BryanLong14">
<h6 class="animated slideInDown">
<img class="team-pic" src="/../../static/team/bryan.jpg">
Bryan
</h6>
</a>
</div>

<img class="screen animated fadeIn" src="/../../static/projects/cloudy.png" alt="Social Cloud">
<div>
<a href="https://bencasalino.com/#/Project_SFDOC">
<img class="arrow" src="/../../static/projects/arrow-right.svg" alt="View Next Project">
</a>
</div>
</div>
</div>
</template>

<script>
export default {
  name: "Project_Cloud",
  data() {
    return {};
  }
};
</script>

<style scoped>
.wrapper {
  height: 70vh;
  width: 100vw;
  background-color: #345d7f;
  display: flex;
  justify-content: space-between;
}
.wrapper-left {
  display: flex;
  justify-content: flex-start;
  padding-top: 5rem;
  background-color: #4983b2;
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
  margin-right: 2rem;
  padding: 12px;
  max-width: 500px;
  background-color: #345d7f;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
}

h1 {
  font-size: 1.5rem;
  font-weight: 900;
  color: #244158;
  /* display: flex; */
  /* flex-direction: row; */
}
  h5 {
  font-weight: 900;
  color: #f7f8f0;
  }
  h3 {
  color: #f7f8f0;
  font-weight: 400;
  }
p {
  font-size: 12px;
  font-weight: 400;
  max-height: 60px;
  min-height: 60px;
  max-width: 100%;
  background-color: #345d7f;
  padding: 10px;
  word-wrap: break-word;
  color: #f7f8f0;
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
  color: #4983b2;
  background-color: #244158;
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
  color: #4983b2;
  background-color: #244158;
  padding-top: 5px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 12px;
  /* border-bottom: 4px white solid; */
}
button {
  color: #fff;
  background-color: #244158;
  border: none;
  text-decoration: none;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
  border: 2px solid #244158;
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
  border: none;
  background-color: #4983b2;
  border: 2px solid #f7f8f0;
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

.small {
  max-width: 12px;
  min-width: 12px;
    max-height: 12px;
  min-height: 12px;
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
color: #aaa;
font-weight: 400;
font-size: 14px;
}
h6:hover {
padding-top: 10px;
color: #4983b2;
font-weight: 400;
font-size: 14px;
}

.team-box {
  max-width: 70px;
font-weight: 700;
color:  #244158;
background-color: #4983b2;
padding-top: 5px;
padding-bottom: 4px;
padding-left: 12px;
padding-right: 12px;
font-size: 12px;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.2);
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
