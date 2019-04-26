<template>
  <header>
    <nav>
      <div class="header-leftside-wrapper">
        <a href="https://www.linkedin.com/in/bencasalino/"><img class="header-logo animated wow slideInLeft" src="/../../static/botu.ico" /> </a>
        <span class="header-name">BEN CASALINO
        </span>
      </div>
      <div class="header-right-wrapper animated wow slideInDown">
          <!-- <router-link :to="{name: '/'}"> -->
            <a class="nav-cta-links header-cta" href="/"> HOME </a>
          <!-- </router-link> -->
        <em class="animated fadeIn pipe-header"> | </em>
        <a class="nav-cta-links" href="https://www.linkedin.com/in/bencasalino/" target="blank"> CONTACT </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style scoped>
nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  width: 100vw;
  background-color: #ffffff;
  -webkit-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  -moz-box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
  box-shadow: 0 11px 24px 0 rgba(26, 26, 26, 0.5);
}
.header-logo {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}

.header-leftside-wrapper {
  padding-left: 1rem;
}

.header-leftside-wrapper .header-name {
  font-size: 1.7rem;
  font-weight: 900;
  color: #000000;
}

.header-right-wrapper {
  padding-right: 1rem;
  color: #000000;
}

.header-right-wrapper a {
  font-family: "Lato", sans-serif;
  color: #000000;
}

.nav-cta-links {
  padding: 0.8rem;
}

.nav-cta-links:hover {
  padding: 0.8rem;
  color: #222;
}

.pipe-header {
  padding-top: 10px;
  font-weight: 900;
}
.pipe-styles {
  padding-top: 10px;
  font-weight: 900;
}

/* underline styles */
a {
  font-size: 1rem;
  color: #222;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 8px;
}
a:before,
a:after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: black;
}
a:before {
  opacity: 0;
  -webkit-transform: translateY(-8px);
  -ms-transform: translateY(-8px);
  transform: translateY(-8px);
  -webkit-transition: -webkit-transform 0s
      cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0s;
  transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s;
}
a:after {
  opacity: 0;
  -webkit-transform: translateY(4px);
  -ms-transform: translateY(4px);
  transform: translateY(4px);
  -webkit-transition: -webkit-transform 0.2s
      cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.2s;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.2s;
}
a:hover:before,
a:hover:after,
a:focus:before,
a:focus:after {
  opacity: 1;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
a:hover:before,
a:focus:before {
  -webkit-transition: -webkit-transform 0.2s
      cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.2s;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.2s;
}
a:hover:after,
a:focus:after {
  -webkit-transition: -webkit-transform 0s 0.2s
      cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0s 0.2s;
  transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0s 0.2s;
}

.remove-hover:before {
  display: none;
}

.remove-hover:after {
  display: none;
}
/* MEDIA QUERIES START /////////////////////////////////////////////////// */
/* anything under 600px make the header height have some padding */
@media screen and (max-width: 500px) {
  nav {
    max-height: 80px;
    min-height: 80px;
    max-width: 100%;
    min-width: 100%;
  }
}
@media screen and (max-width: 401px) {
  .pipe-header,
  .header-cta {
    display: none;
  } /* hide it elsewhere */
}
</style>
