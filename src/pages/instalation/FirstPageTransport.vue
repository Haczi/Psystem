<template>
  <div v-if="!loading" class="conteiner" @scroll="onScroll">
    <nav class="nav">
      <router-link to="/psystem/" class="logo"
        ><img src="./img/transportlogo.png"
      /></router-link>
      <div @click="toogleMenu" class="btn11" :class="menuActive" data-menu="11">
        <div class="icon-left"></div>
        <div class="icon-right"></div>
      </div>
    </nav>
    <ul class="nav-menu" :class="navActive">
      <li><p :class="linkActive">HOME</p></li>
      <li><p :class="linkActive">OFERTA</p></li>
      <li><p :class="linkActive">PROJEKTY</p></li>
      <li><p :class="linkActive">KONTAKT</p></li>
      <li><p :class="linkActive">O NAS</p></li>
    </ul>
    <header>
      <div class="image-top">
        <div class="text-top">
          <h1>
            <span style="color: #1488cc; font-size: 2.9rem">Transport</span> i
            Logistyka
          </h1>
          <transition name="bounce">
            <p v-if="showText">Zaufaj ekspertom</p>
          </transition>
          <transition name="bounce">
            <p v-if="showText2">
              Nasza firma to gwarancja niezawodności i punktualności
            </p>
          </transition>
          <transition name="bounce">
            <p v-if="showText3">Szybko, bezpiecznie, tanio</p>
          </transition>
        </div>
        <div class="bg-shadow"></div>
        <video
          playbackRate="0.7"
          loop
          autoplay
          playsinline
          muted
          v-on:loadedmetadata="showFirstText"
          v-on:timeupdate="showFirstTextAgain"
        >
          <source
            src="./img/transport.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </header>
    <section class="aboutUs">
      <figure class="snip1401" :class="snip1401Desktop">
        <!-- <div></div><img src="./img/whitecamera.jpg" alt="sample67" /> -->
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1488cc"
              fill-opacity="1"
              d="M0,64L1440,160L1440,0L0,0Z"
            ></path>
          </svg>
        </div>
        <figcaption>
          <h3 style="color: black">O NAs</h3>
          <p
            style="
              border-right: 5px solid #1488cc;
              padding-right: 0.3em;
              text-align: right;
            "
          >
            Jesteśmy dynamiczną firmą, oferującą wysokiej jakości produkty i
            usługi, zorientowaną na potrzeby klientów i rozwój.
          </p>
        </figcaption>
      </figure>
      <div @click="addHoverClass" class="cont-box">
        <div class="box">
          <div class="title">
            <span class="block1"></span>
            <h1 style="color: white">P-System<span></span></h1>
          </div>

          <div class="role">
            <div class="block"></div>
            <p style="color: white">Zaufaj Nam</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1488cc"
              fill-opacity="1"
              d="M0,64L1440,160L1440,0L0,0Z"
            ></path>
          </svg>
        </div>
      <h2 class="text-main-clip">Co możesz oczekiwac?</h2>
      <p class="text-clip">Optymalizacja łańcucha dostaw</p>
      <p class="text-clip-right">Magazynowanie i dystrybucja</p>
      <p class="text-clip">Transport międzynarodowy</p>
      <p class="text-clip-right">Śledzenie przesyłek</p>
      <p class="text-clip">Logistyka miejska</p>
      <p class="text-clip-right">Usługi spedycyjne</p>
      <p class="text-clip">Zarządzanie flotą pojazdów</p>
      <p class="text-clip-right">Outsourcing logistyczny</p>
      <p class="text-clip">Magazynowanie na zasadzie cross-docking</p>
      <p class="text-clip-right">Transport ładunków ponadgabarytowych</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,256L288,224L576,128L864,224L1152,64L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path>
</svg>
    </section>
    <section>
 
      <h2>Flota</h2>
      <div>

      </div>
    </section>
  </div>
  <base-spinner v-if="loading"></base-spinner>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  data() {
    return {
      dynamicSplideOptions: {
        perPage: 2,
        gap: 20,
      },
      twoSlide: 2,
      numbersSlide: false,
      menuActive: 'menu',
      navActive: '',
      linkActive: '',
      contactActive: '',
      showPhone: true,
      showEmail: false,
      showAdress: false,
      activePhone: 'startAnimeContact',
      activeEmail: '',
      activeAdress: '',
      countPlay: 0,
      countPlay1: 0,
      countPlay2: 0,
      countPlay3: 0,
      projectOne: '',
      projectTwo: '',
      projectThree: '',
      showProjectOneInfo: '',
      showProjectOneText: '',
      showProjectTwoInfo: '',
      showProjectTwoText: '',
      showProjectThirdInfo: '',
      showProjectThirdText: '',
      achiveDesktop: '',
      snip1401Desktop: '',
      loading: true,
      showText: false,
      showText1: false,
      showText2: false,
      showText3: false,
      hoverIsOn: false,
    };
  },
  methods: {
    addHoverClass() {
      const element = document.querySelector('.snip1401');

      if (this.hoverIsOn === false) {
        element.classList.add('hover');
        this.hoverIsOn = true;
      } else if (this.hoverIsOn === true) {
        element.classList.remove('hover');
        this.hoverIsOn = false;
      }
      console.log(this.hoverIsOn);
    },
    toogleMenu() {
      if (this.menuActive === 'menu') {
        this.menuActive = 'open';
        this.navActive = 'nav-menu_active';
        this.linkActive = 'menu-link_active';
      } else {
        this.menuActive = 'menu';
        this.navActive = '';
        this.linkActive = '';
      }
    },
    theFormat(number) {
      return number.toFixed();
    },
    completed() {
      console.log('Animation ends!');
    },

    setAdressContact() {
      this.activeEmail = '';
      this.activeAdress = 'startAnimeContact';
      this.activePhone = '';
      this.showEmail = false;
      this.showPhone = false;
      this.showAdress = true;
    },
    setEmailContact() {
      this.activeEmail = 'startAnimeContact';
      this.activeAdress = '';
      this.activePhone = '';
      this.showEmail = true;
      this.showPhone = false;
      this.showAdress = false;
    },
    setPhoneContact() {
      this.activeEmail = '';
      this.activeAdress = '';
      this.activePhone = 'startAnimeContact';
      this.showEmail = false;
      this.showPhone = true;
      this.showAdress = false;
    },

    turnOffLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    showFirstText() {
      setTimeout(() => {
        this.showText = true;
      }, 300);
      setTimeout(() => {
        this.showText = false;
      }, 2300);
      setTimeout(() => {
        this.showText2 = true;
      }, 2600);
      setTimeout(() => {
        this.showText2 = false;
      }, 5700);
      setTimeout(() => {
        this.showText3 = true;
      }, 6000);
    },
    showFirstTextAgain(event) {
      let video = event.target;
  
      if (parseInt(video.currentTime) === 0 && !video.paused) {
        this.showText3=false
        setTimeout(() => {
          this.showText = true;
        }, 300);
        setTimeout(() => {
          this.showText = false;
        }, 2300);
        setTimeout(() => {
          this.showText2 = true;
        }, 2600);
        setTimeout(() => {
          this.showText2 = false;
        }, 5700);
        setTimeout(() => {
          this.showText3 = true;
        }, 6000);
      }
    },
    scrollTo() {
      this.$refs.home.scrollIntoView({ behavior: 'smooth' });
      this.toogleMenu();
    },
    scrollToOffer() {
      this.$refs.offersId.scrollIntoView({ behavior: 'smooth' });
      this.toogleMenu();
    },
    scrollToProjects() {
      this.$refs.projects.scrollIntoView({ behavior: 'smooth' });
      this.toogleMenu();
    },
    scrollToContact() {
      this.$refs.contact.scrollIntoView({ behavior: 'smooth' });
      this.toogleMenu();
    },
    listenOnResize() {
      console.log(window.innerWidth);
      if (window.innerWidth < 660) {
        this.snip1401Desktop = '';
      } else {
        this.snip1401Desktop = 'snip1401-desktop';
      }
    },
  },
  beforeMount() {
    if (window.innerWidth > 500) {
      this.snip1401Desktop = 'snip1401-desktop';
    }
  },
  mounted() {
    this.turnOffLoading();
    window.addEventListener('resize', this.listenOnResize);
  },

  unmounted() {
    window.addEventListener('resize', this.listenOnResize);
  },
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateX(200%);
    opacity: 0;
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
.conteiner {
  position: relative;
  transition: all 1s;
  max-width: 1200px;
  margin: auto;
  align-self: center;
}
p {
  margin: 0;
}
/* Navigation class*************************************************************** */
.nav {
  width: 100%;
  max-width: 1200px;
  position: fixed;
  top: 0;
  display: flex;
  background-color: rgba(255, 255, 255, 0.836);
  height: 50px;
  z-index: 1000;
}
.nav-menu {
  /*nav menu hidden for mobile*/
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  position: fixed;
  list-style: none;
  top: -350px;
  /* left: 0; */
  align-items: start;
  margin: auto;
  margin-bottom: 30px;
  padding: 10px 0;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  z-index: 1000;
  margin: auto !important;
}
.nav-menu > li > p {
  padding: 0.5em;
  font-weight: bold;
  opacity: 0;
}
.logo {
  display: flex;
  background-position: -10px 110px;
  background-size: cover;
  width: 140px;
}
.logo img {
}

.logo > p {
  display: flex;
  align-items: center;
}
.logo:first-child {
  padding-left: 0.5em;
  font-weight: bold;
  color: blue;
}
/* Hamburger classs*************************************************** */
.btn11 {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0px;
  right: 20px;
  transition-duration: 0.5s;
}
.btn11 .icon-left {
  transition-duration: 0.5s;
  position: absolute;
  height: 3px;
  width: 15px;
  top: 20px;
  background-color: #212121;
}
.btn11 .icon-left:before {
  transition-duration: 0.5s;
  position: absolute;
  width: 15px;
  height: 3px;
  background-color: #212121;
  content: '';
  top: -10px;
}
.btn11 .icon-left:after {
  transition-duration: 0.5s;
  position: absolute;
  width: 15px;
  height: 3px;
  background-color: #212121;
  content: '';
  top: 10px;
}
.btn11 .icon-left:hover {
  cursor: pointer;
}
.btn11 .icon-right {
  transition-duration: 0.5s;
  position: absolute;
  height: 3px;
  width: 15px;
  top: 20px;
  background-color: #212121;
  left: 15px;
}
.btn11 .icon-right:before {
  transition-duration: 0.5s;
  position: absolute;
  width: 15px;
  height: 3px;
  background-color: #212121;
  content: '';
  top: -10px;
}
.btn11 .icon-right:after {
  transition-duration: 0.5s;
  position: absolute;
  width: 15px;
  height: 3px;
  background-color: #212121;
  content: '';
  top: 10px;
}
.btn11.open .icon-left {
  transition-duration: 0.5s;
  background: transparent;
}
.btn11.open .icon-left:before {
  transform: rotateZ(45deg) scaleX(0.9) translate(2px, 2px);
  left: 3px;
  top: -6px;
}
.btn11.open .icon-left:after {
  transform: rotateZ(-45deg) scaleX(0.9) translate(2px, -2px);
  left: 3px;
}
.btn11.open .icon-right {
  transition-duration: 0.5s;
  background: transparent;
}
.btn11.open .icon-right:before {
  transform: rotateZ(-45deg) scaleX(0.9) translate(-2px, 2px);
  right: 3px;
  top: -6px;
}
.btn11.open .icon-right:after {
  transform: rotateZ(45deg) scaleX(0.9) translate(-2px, -2px);
  right: 3px;
}
.btn11:hover {
  cursor: pointer;
}

@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes active-nav {
  0% {
    opacity: 0;
  }
  100% {
    position: fixed;
    top: 50px;
    opacity: 1;
  }
}
@-webkit-keyframes active-nav {
  0% {
    -webkit-opacity: 0;
    opacity: 0;
  }
  100% {
    -webkit-position: fixed;
    position: fixed;
    -webkit-top: 50px;
    top: 50px;
    -webkit-opacity: 1;
    opacity: 1;
  }
}
@keyframes swing-in-left-fwd {
  0% {
    -webkit-transform: rotateY(100deg);
    transform: rotateY(100deg);
    -webkit-transform-origin: left;
    transform-origin: left;
    -webkit-opacity: 0;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    -webkit-transform-origin: left;
    transform-origin: left;
    -webkit-opacity: 1;
    opacity: 1;
  }
}
.menu-link_active {
  animation: swing-in-left-fwd 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  -webkit-animation-name: swing-in-left-fwd;
  -webkit-animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}
.nav-menu_active {
  animation: active-nav 0.4s cubic-bezier(0.55, 0.285, 0.68, 0.53) both;
  -webkit-animation-name: active-nav;
  -webkit-animation-duration: 0.4s;
  -webkit-animation-timing-function: cubic-bezier(0.55, 0.285, 0.68, 0.53);
  -webkit-animation-fill-mode: both;
}
/* End Hamburgr class******************************* */
/* End Navigation class**************************************************** */

/*Header class***************/
.image-top {
  position: relative;
  height: 430px;
  overflow: hidden;
}
.text-top {
  position: absolute;
  top: 160px;
  /* height:100%; */
  width: 100%;
  z-index: 3;
  font-weight: bold;
}
.text-top h1,
.text-top p {
  color: white;
  width: 100%;
  text-align: center;
}
.text-top p{
  font-size: 1.4rem;
}
video {
  object-fit: cover;
  position: absolute;
  top: 50px;
  max-width: 1200px;
  width: 100%;
  height: 400px;
  z-index: 1;
}
.bg-shadow {
  position: absolute;
  top: 50px;
  left: 0;
  height: 400px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
}
/* AboutUs class************************************ */
.aboutUs {
  position: relative;
  z-index: 100;
}
.aboutUs > h3 {
  text-align: center;
}
.box-aboutUs {
  position: relative;
  display: flex;
  justify-content: end;
}
.text-aboutUs {
  position: relative;
  padding: 0 0.5em;
  text-align: center;
  /* width: 100%; */
}
.snip1401 {
  font-family: 'Playfair Display', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  /* margin: 10px; */
  min-width: 230px;
  max-width: 100%;
  max-height: 220px;
  width: 100%;
  color: #000000;
  text-align: right;
  font-size: 16px;
  background-color: #000000;
  margin: 0;
}
.snip1401-desktop {
  max-height: 240px;
}
.snip1401-desktop > div {
  height: 780px !important;
}
.snip1401-desktop ~ .cont-box {
  height: 600px;
}
.snip1401 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1401 > div {
  /* background-image: url('../instalation/img/whitevan-transformed.jpeg');
  background-attachment: scroll;
  background-size: cover;
  background-position: center; */
  /* background-color: #ffffff; */
  max-width: 100%;
  height: 300px;
  backface-visibility: hidden;
}
.snip1401 figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 1;
  padding: 30px 0 30px 10px;
  background-color: #ffffff;
  width: 40%;
  -webkit-transform: translateX(150%);
  transform: translateX(150%);
}
.snip1401-desktop figcaption {
  right: 20%;
}
.snip1401-desktop figcaption:before {
  border-width: 260px 260px 260px 0 !important;
}
.snip1401 figcaption:before {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 100%;
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 120px 120px 120px 0;
  border-color: transparent #ffffff transparent transparent;
}
.snip1401:after {
  position: absolute;
  bottom: 50%;
  right: 40%;
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 120px 120px 0 120px;
  border-color: rgba(20, 136, 204, 1) transparent transparent transparent;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1401-desktop:after {
  bottom: 35%;
  right: 55%;
  border-width: 330px 330px 0 330px;
}
.snip1401 h3,
.snip1401 p {
  line-height: 1.5em;
  -webkit-transform: translateX(-30px);
  transform: translateX(-30px);
  margin: 0;
}
.snip1401-desktop h3,
.snip1401-desktop p {
  line-height: 1.5em;
  -webkit-transform: translateX(-30px) !important;
  transform: translateX(-30px) !important;
  margin: 0;
}
.snip1401 h3 {
  margin: 0 0 5px;
  line-height: 1.1em;
  font-weight: 900;
  font-size: 1.4em;
  opacity: 0.75;
}
.snip1401 p {
  font-size: 0.8em;
}
.snip1401 i {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px 30px;
  font-size: 44px;
  color: #ffffff;
  opacity: 0;
}
.snip1401 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.snip1401:hover img,
.snip1401.hover img {
  zoom: 1;
  filter: alpha(opacity=50);
  -webkit-opacity: 0.5;
  opacity: 0.5;
}

.snip1401:hover:after,
.snip1401.hover:after,
.snip1401:hover figcaption,
.snip1401.hover figcaption,
.snip1401:hover i,
.snip1401.hover i {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}
.snip1401-desktop:hover:after,
.snip1401-desktop.hover:after,
.snip1401-desktop:hover figcaption,
.snip1401-desktop.hover figcaption,
.snip1401-desktop:hover i,
.snip1401-desktop.hover i {
  -webkit-transform: translateX(0);
  transform: translateX(50%);
  opacity: 1;
}
.cont-box {
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: start;
}
.box {
  width: 250px;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* z-index: 1000; */
}

.title {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
}

.block1 {
  width: 0%;
  border-radius: 10px;
  height: inherit;
  background: #1488cc;
  position: absolute;
  animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  display: flex;
}

.title > h1 {
  font-family: 'Poppins';
  color: black;
  font-size: 32px;
  -webkit-animation: mainFadeIn 2s forwards;
  -o-animation: mainFadeIn 2s forwards;
  animation: mainFadeIn 2s forwards;
  animation-delay: 1.6s;
  opacity: 0;
  display: flex;
  align-items: baseline;
  position: relative;
}

.title > h1 > span {
  width: 0px;
  height: 0px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  color: #000000;
  background: #1488cc;
  -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-delay: 2s;
  margin-left: 5px;
  margin-top: -10px;
  position: absolute;
  bottom: 13px;
  right: -12px;
}

.role {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: -10px;
}

.block {
  width: 0%;
  height: inherit;
  border-radius: 10px;
  background: #9c9c9c;
  position: absolute;
  animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-delay: 2s;
  display: flex;
}

.role > p {
  animation: secFadeIn 2s forwards;
  animation-delay: 3.2s;
  opacity: 0;
  font-weight: 400;
  font-family: 'Lato';
  color: #000000;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 5px;
}
@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #1488cc;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #1488cc;
    opacity: 1;
    bottom: 45px;
  }
  65% {
    width: 7px;
    height: 7px;
    bottom: 0px;
    width: 15px;
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
  }
  100% {
    width: 7px;
    height: 7px;
    background: #1488cc;
    border: 0px solid #222;
    bottom: 13px;
  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
/* End AboutUs class******************************** */

.text-clip,.text-clip-right{
  padding: 1em 1em;
  background-color: #1488cc;
  width:90%;
  border-radius: 8px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  color: #ffffff;
  margin: auto;
  margin-bottom: 1em;
  
}
.text-clip-right{

  background-color: #01162b;

}
.text-main-clip{
  padding: 1em;
  padding-top: 0;
  margin-top: 0;
}
</style>
