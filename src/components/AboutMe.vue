<template>
<div class="wrapper">
<div class="whoami">
<img class="me" src="/../../static/me/meh.jpg">
<div class="heler"> HELLO WORLD </div>
<!-- <img class="me" src="/../../static/me/nite.gif"> -->
</div>
<div class="wrapper-about">
<!-- <div class="heler"> HELLO WORLD </div> -->
<br>
<p>I'm a Denver, Colorado based Front-End Web Developer.</p>
<br>
<p>I enjoy making
<a><router-link :to="{name: 'Art'}">
<button>ART</button>.
</router-link>
</a>
&nbsp; / &nbsp;<a href="https://dribbble.com/bencasalino">
<button>DESIGN</button>
</a>&nbsp; & &nbsp;
<a><router-link :to="{name: 'BenoftheUniverse'}">
<button>MUSIC</button>.
</router-link>
</a>
</p>
<br>
<p>Oh and might be a huge fan of sports,
<br>
here are some of those related projects...
<br>
<!-- project name - Colorado Soccer Games app   -->
<a class="remove-hover">
<router-link :to="{name: 'Project_CSG'}">
<img class="sosmall" data-wow-duration="2.4s" src="/../../static/projects/csg-logo.png" />
</router-link>
</a>
<!-- project name - BSFB web app   -->
<a class="remove-hover">
<router-link :to="{name: 'Project_BSFB'}">
<img class="sosmall" data-wow-duration="1.6s" src="/../../static/projects/bsfb.png" />
</router-link>
</a>
<!-- project name  - RM CUP  set proj -->
<a class="remove-hover">
<router-link :to="{name: 'Project_RmCup'}">
<img class="sosmall" data-wow-duration="2.2s" src="/../../static/projects/rmlog-port.svg" />
</router-link>
</a>
<!-- project name  - SFDOC proj -->
<a class="remove-hover">
<router-link :to="{name: 'Project_SFDOC'}">
<img class="sosmall" data-wow-duration="2s" src="/../../static/projects/sfdoc-black.png" />
</router-link>
</a>
<!-- project name - Game Cover Nash   -->
<a class="remove-hover">
<router-link :to="{name: 'Project_Nash'}">
<img class="sosmall" data-wow-duration=".8s" src="/../../static/projects/nash.png" />
</router-link>
</a>
<!-- project - Nuggets Logo Rework proj -->
<a class="remove-hover">
<router-link :to="{name: 'Project_Nuggets'}">
<img class="sosmall"
src="/../../static/projects/nug.png" />
</router-link>
</a>
<a class="remove-hover">
<router-link :to="{name: 'Project_TF'}">
<img class="sosmall" data-wow-duration="1.6s" src="/../../static/projects/tfnew.png" />
</router-link>
</a>
</p>
<h2>
  <br>
<a class="remove-hover about">
<router-link :to="{name: 'Overview'}">
<button>EXPERIENCE OVERVIEW </button>
</router-link>
</a>
<br>
<br>
<br>
<span class="undaline">
LET'S CONNECT!
</span>
<br>
<br>
</h2>
<form action="mailto:bencasalino@gmail.com" method="post" enctype="text/plain">
<span class="ting">
NAME: &nbsp;
<input type="text" name="name">
&nbsp; &nbsp;EMAIL: &nbsp;
<input type="text" name="mail">
</span>
<br>
MESSAGE: &nbsp; &nbsp;<br>
<br>
<input type="textarea" name="comment" size="60"><br><br>
<input  class="form-btn" type="submit" value="SEND">
<input class="form-btn"  type="reset" value="RESET">
</form>
</div>
<div class="spoty">
  <h2> <img class="music-icons" src="/../../static/me/notes.svg">

  <span class="undaline"> JAMS IN HEAVY ROTATION!</span>
  <br>
  <br> </h2>
<iframe src="https://open.spotify.com/embed/user/bencasalino/playlist/6qEncgO6stxQ13SkG2O9Db" width="400" height="322" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</div>
</div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {};
  }
};
</script>

<style scoped>
.wrapper {
  font-size: 0.8rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  padding-left: 1rem;
  height: 70vh;
  /* width: 100vw; */
  background-color: #222;
  display: flex;
  color: #eee;
  justify-content: center;
}
.wrapper-about {
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  padding-top: 5rem;
  /* background-color: #333; */
  color: #eee;
  /* max-width: 400px;
  min-width: 400px; */
}

.whoami {
  padding-right: 2rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  /* justify-content: flex-start; */
  padding-top: 5rem;
  /* background-color: #333; */
  color: #eee;
  /* max-width: 400px;
  min-width: 400px; */
}

.me {
  border-radius: 50%;
  max-width: 80px;
  min-width: 80px;
  max-height: 80px;
  min-height: 80px;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
}

.sosmall {
  padding: 15px 5px 5px 5px;
  max-width: 40px;
  min-width: 40px;
  max-height: 40px;
  min-height: 40px;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  border-bottom: white 2px solid;
}

.sosmall:hover {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
  color: #000000;
}

.heler {
  font-size: 40px;
  border-bottom: white 2px solid;
  width: 160px;
  text-align: right;
}

button {
  padding: 5px 20px;
  background-color: #222;
  border: 2px solid #eee;
  color: white;
  text-decoration: none;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
}

button:hover {
  padding: 5px 20px;
  border: 2px solid #333;
  text-decoration: none;
  background: #eee;
  color: #222;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
}
.ting {
  display: flex;
}

h2 {
  font-size: 12px;
  font-weight: 900;
}

.undaline {
  border-bottom: white 1px solid;
}

.form-btn {
  padding: 5px 20px;
  background-color: #222;
  border: 2px solid #eee;
  color: white;
  text-decoration: none;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
}

.form-btn:hover {
  padding: 5px 20px;
  border: 2px solid #333;
  text-decoration: none;
  background: #eee;
  color: #222;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
}

.spoty {
  margin-top: 92px;
  margin-left: 1rem;
  /* padding-right: 1rem; */
}

.music-icons {
  max-width: 12px;
  min-width: 12px;
  max-height: 12px;
  min-height: 12px;
}

.music-text {
  /* padding-top: 10px;
     border-bottom: white 1px solid; */
}
h1 {
  padding-bottom: 10px;
}

iframe {
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
}
</style>
