<template>
  <div class="conteiner" @scroll="onScroll">
    <nav class="nav">
      <div class="logo">
        <p>P</p>
        <p>-System</p>
      </div>
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
      <div
        class="splide-offers splide"
        data-splide='{"autoplay":"", "arrows":""}'
      >
        <Splide
          :options="{ rewind: true }"
          aria-label="My Favorite Images"
          data-splide='{"autoplay":"true","arrows":""}'
        >
          <SplideSlide>
            <div class="picture-slider" alt="Sample 1">
              <div class="shadow-text">
                <p class="main-text text-focus-in"><span>M</span>onitoring</p>
                <p class="text-focus-in">Zadbamy O Twoje Bezbieczeństwo</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="picture-slider0" alt="Sample 1">
              <div class="shadow-text">
                <p class="main-text text-focus-in2">
                  <span class="blue">Smart</span> Home
                </p>
                <p class="text-focus-in2">Dom Będzie Twoim Przyjacielem</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="picture-slider2" alt="Sample 1">
              <div class="shadow-text">
                <p class="main-text text-focus-in3">
                  <span class="blue">Foto</span>woltanika
                </p>
                <p class="text-focus-in3">Czysta Energia</p>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div class="picture-slider3" alt="Sample 2">
              <div class="shadow-text">
                <p class="main-text text-focus-in4">
                  <span class="blue">I</span>nstalacje
                </p>
                <p class="text-focus-in4">Wykonana Z Najwyższą Starannością</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </header>
    <section class="aboutUs">
      <h3>O Firmie</h3>
      <div class="box-aboutUs">
        <div class="boss-photo"><img src="./img/pawel.png" /></div>
        <div class="text-aboutUs">
          <p>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsum
          </p>
          <h3 class="signature">Paweł Picheta</h3>
        </div>
      </div>
      <!-- <observer @on-change="onChange"><div></div></observer> -->
      <div class="achive">
        <h3 class="achive-title">Nasze Liczby</h3>
        <div class="line-1">
        <div class="circle">
          <div class="circle-1">
            <number
              ref="number2"
              :from="0"
              :to="10"
              animationPaused
              :format="theFormat"
              :duration="5"
              :delay="0.3"
              easing="Power1.easeOut"
              class="big-p"
              >10</number
            >
            <p class="small-p">Lat</p>
            <p class="small-p">doświadczenia</p>
          </div>
        </div>
        <div class="circle">
          <div class="circle-1">
            <number
              ref="number1"
              :from="0"
              :to="500"
              animationPaused
              :format="theFormat"
              :duration="5"
              :delay="0.3"
              easing="Power1.easeOut"
              class="big-p"
              >500</number
            >
            <p class="small-p">nie wiem</p>
            <p class="small-p">cos tam</p>
          </div>
        </div>
        </div>
        <div id="listen" class="line-1">
          <div class="circle">
          <div class="circle-1">
            <number
              ref="number3"
              :from="0"
              :to="300"
              animationPaused
              :format="theFormat"
              :duration="5"
              :delay="0.3"
              easing="Power1.easeOut"
              class="big-p"
              >300</number
            >
            <p class="small-p">Ukończonych</p>
            <p class="small-p">projektów</p>
          </div>
          </div>
          <div class="circle">
          <div class="circle-1">
            <number
              ref="number4"
              :from="0"
              :to="1000"
              animationPaused
              :format="theFormat"
              :duration="5"
              :delay="0.3"
              easing="Power1.easeOut"
              class="big-p"
              >1000+</number
            >
            <p class="small-p">Zadowolonych</p>
            <p class="small-p">klientów</p>
          </div>
          </div>
        </div>
      </div>
    </section>
    <section class="offers">
      <h3 class="offers-title">Oferta</h3>
      <div
        class="splide-offers splide"
        data-splide='{"autoplay":"", "arrows":""}'
      >
        <Splide
          :options="{ rewind: true }"
          aria-label="My Favorite Images"
          data-splide='{"perPage":2}'
        >
          <SplideSlide>
            <div class="card-box">
              <div class="offer-slider1" alt="Sample 1"></div>
              <h4>Instalacje</h4>
              <div class="offer-btn"><p>Oferta</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <div class="offer-slider2" alt="Sample 1"></div>
              <h4>Zabezpieczenia</h4>
              <div class="offer-btn"><p>Oferta</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <div class="offer-slider3" alt="Sample 1"></div>
              <h4>Monitoring</h4>
              <div class="offer-btn"><p>Oferta</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <div class="offer-slider4" alt="Sample 1"></div>
              <h4>Satelity/TV</h4>
              <div class="offer-btn"><p>Oferta</p>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <!-- <img  class="picture-slider" src="./img/circle.jpg" alt="Sample 2"/> -->
            <div class="card-box">
              <div class="offer-slider5" alt="Sample 1"></div>
              <h4>Swiatlowody/Internet</h4>
              <div class="offer-btn"><p>Oferta</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  </div>
</template>
<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  data() {
    return {
      menuActive: 'menu',
      navActive: '',
      linkActive:''
    };
  },
  methods: {
    toogleMenu() {
      if (this.menuActive === 'menu') {
        this.menuActive = 'open';
        this.navActive = 'nav-menu_active';
        this.linkActive= 'menu-link_active';
      } else {
        this.menuActive = 'menu';
        this.navActive = '';
        this.linkActive='';
      }
    },
    theFormat(number) {
      return number.toFixed();
    },
    completed() {
      console.log('Animation ends!');
    },
    playAnimation() {
      this.$refs.number1.play();
      this.$refs.number2.play();
      this.$refs.number3.play();
      this.$refs.number4.play();
    },

    listenScroll() {
      let myScroll = document
        .querySelector('#listen')
        .getBoundingClientRect().top;
      console.log(myScroll.toFixed());
      if (parseInt(myScroll.toFixed()) < 450) {
        this.playAnimation();
      }
    },
  },
  beforeMount() {
    document.addEventListener('scroll', this.listenScroll);
  },
};
</script>
<style scoped>
.conteiner {
  position: relative;
  transition: all 1s;
}
.nav-menu {
  /*nav menu hidden for mobile*/
  display: flex;
  flex-direction: column;
  position: absolute;
  list-style: none;
  top: -300px;
  left: 0;
  align-items: start;
  margin: auto;
  margin-bottom: 30px;
  padding: 20px 0;
  width: 100%;
  height: auto;
  background-color: #ffffff;
  z-index: 2;
}
.nav-menu > li > p {
  padding: 0.5em;
  font-weight: bold;
  opacity: 0;
}
.menu-link_active {
  animation: swing-in-left-fwd 7s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
}
@keyframes swing-in-left-fwd {
  0% {
    transform: rotateY(100deg);

    transform-origin: left;
    opacity: 0;
  }
  100% {
    transform: rotateY(0);

    transform-origin: left;
    opacity: 1;
  }
}
.nav-menu_active {
  animation: active-nav 1s cubic-bezier(0.55, 0.285, 0.68, 0.53) forwards;
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
.text-focus-in {
  animation: text-focus-in 2s cubic-bezier(0.55, 0.285, 0.68, 0.53) forwards;
}
.text-focus-in2 {
  animation: text-focus-in 7s cubic-bezier(0.55, 0.285, 0.68, 0.53) forwards;
}
.text-focus-in3 {
  animation: text-focus-in 12s cubic-bezier(0.55, 0.285, 0.68, 0.53) forwards;
}
.text-focus-in4 {
  animation: text-focus-in 17s cubic-bezier(0.55, 0.285, 0.68, 0.53) forwards;
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
.main-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-text > span {
  color: #1488cc;
  font-size: 2.3rem;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}
.shadow-text {
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.shadow-text > p {
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
  padding-bottom: 2em;
}
.splide-offers {
}
.offers-title {
  text-align: center;
}
.card-box {
  position: relative;
  width: 90%;
  height: 280px;
  margin: 0 0.3em;
  box-shadow: 3px 3px 10px rgba(46, 46, 46, 0.18);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1em;
}
.card-box>h4{
  text-align: center;
  border-left: 3px solid #16c0e9 ;
}
.offer-btn{
  position: absolute;
  bottom: 10%;
  width:100%;
  display:flex;
  justify-content: center;
}
.offer-btn>p{
  padding: .5em 2em;
  background-color: #16c0e9;
  border-radius: 15px;
  color:#ffffff;
}
.offers {
  margin: 1em 0;
  
}
.big-p {
  text-align: center;
  padding-bottom: 0.1em;
  font-weight: bold;
  font-size: 2rem;
  color: white;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}
.small-p {
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  text-shadow: 2px 2px 2px rgba(206, 89, 55, 0);
}
.line-1 {
  display: flex;
  justify-content: space-around;
}
.circle{
  display: flex;
  justify-content: center;
  align-items: center;
  width:130px;
  height: 130px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #1488cc, #2b32b2);
  box-shadow: 0px 0px 3px 8px #1488cc;
  margin-bottom: 1.5em;
}
.circle-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 90%;
  margin: 0.3em;
  /* border:1px solid white; */
  border-radius: 50%;
  box-shadow: 3px 3px 10px rgba(46, 46, 46, 0.18);
  background-color: #1488cc;
}
.circle-1 > p {
  text-align: center;
}
.achive-title {
  color: white;
  text-align: center;
  padding: 1em 0;
}
.signature {
  font-family: 'Sacramento';
  font-size: 1.6rem;
  position: relative;
  left: 0px;
  top: 0px;
}
.box-splide {
  display: flex;
  justify-content: center;
  width: 100%;
}

.picture-slider,
.picture-slider2,
.picture-slider3,
.picture-slider0 {
  position: relative;
  width: 100%;
  height: 200px;
  background-image: url('./img/kable.jpg');
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
}
.offer-slider2,
.offer-slider1,
.offer-slider3,
.offer-slider4,
.offer-slider5 {
  width: 100%;
  height: 100px;
  background-image: url('./img/camera.jpg');
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
}
.offer-slider1 {
  background-image: url('./img/swiatlo.jpg');
}
.offer-slider3 {
  background-image: url('./img/lock.jpg');
}
.picture-slider2 {
  background-image: url('./img/solar.png');
}
.picture-slider {
  background-image: url('./img/circle.jpg');
}
.picture-slider0 {
  background-image: url('./img/smarthome.jpg');
}
.offer-slider4 {
  background-image: url('./img/satelity.jpg');
}
.offer-slider5 {
  background-image: url('./img/internet.jpg');
}

.nav {
  position: sticky;
  top: 0;
  display: flex;
  background-color: white;
  height: 50px;
  z-index: 1000;
}
.splide__arrow {
  opacity: 0;
}
p {
  margin: 0;
}
.logo {
  display: flex;
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
  width: 100%;
}
.boss-photo > img {
  height: 80px;
  margin-top: 1em;
  margin-left: 0.5em;
  border-radius: 50%;
  box-shadow: 3px 3px 10px rgba(46, 46, 46, 0.18);
}
.boss-photo {
  position: absolute;
  top: 30%;
  left: 10%;
}
.achive {
  padding-bottom: 2em;
  width: 100%;
  background: linear-gradient(to bottom, #1488cc, #2b32b2);
}
.btn11 {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 0px;
  left: 85%;
  transition-duration: 0.5s;
}
.btn11 .icon-left {
  transition-duration: 0.5s;
  position: absolute;
  height: 4px;
  width: 15px;
  top: 20px;
  background-color: #212121;
}
.btn11 .icon-left:before {
  transition-duration: 0.5s;
  position: absolute;
  width: 15px;
  height: 4px;
  background-color: #212121;
  content: '';
  top: -10px;
}
.btn11 .icon-left:after {
  transition-duration: 0.5s;
  position: absolute;
  width: 15px;
  height: 4px;
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
  height: 4px;
  width: 15px;
  top: 20px;
  background-color: #212121;
  left: 15px;
}
.btn11 .icon-right:before {
  transition-duration: 0.5s;
  position: absolute;
  width: 15px;
  height: 4px;
  background-color: #212121;
  content: '';
  top: -10px;
}
.btn11 .icon-right:after {
  transition-duration: 0.5s;
  position: absolute;
  width: 15px;
  height: 4px;
  background-color: #212121;
  content: '';
  top: 10px;
}
.btn11.open .icon-left {
  transition-duration: 0.5s;
  background: transparent;
}
.btn11.open .icon-left:before {
  transform: rotateZ(45deg) scaleX(1.4) translate(2px, 2px);
}
.btn11.open .icon-left:after {
  transform: rotateZ(-45deg) scaleX(1.4) translate(2px, -2px);
}
.btn11.open .icon-right {
  transition-duration: 0.5s;
  background: transparent;
}
.btn11.open .icon-right:before {
  transform: rotateZ(-45deg) scaleX(1.4) translate(-2px, 2px);
}
.btn11.open .icon-right:after {
  transform: rotateZ(45deg) scaleX(1.4) translate(-2px, -2px);
}
.btn11:hover {
  cursor: pointer;
}
</style>
