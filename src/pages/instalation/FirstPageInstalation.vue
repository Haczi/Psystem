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
      <figure class="snip1401">
        <!-- <div></div><img src="./img/whitecamera.jpg" alt="sample67" /> -->
<div></div>
        <figcaption>
          <h3>O Nas</h3>
          <p>Cos madrego i krotkiego o firmie</p>
        </figcaption>
        
      </figure>
      <div class="cont-box">
        <div class="box">
          <div class="title">
            <span class="block1"></span>
            <h1>P-System<span></span></h1>
          </div>

          <div class="role">
            <div class="block"></div>
            <p>Zaufaj Nam</p>
          </div>
        </div>
      </div>

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
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <div class="offer-slider2" alt="Sample 1"></div>
              <h4>Zabezpieczenia</h4>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <div class="offer-slider3" alt="Sample 1"></div>
              <h4>Monitoring</h4>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <div class="offer-slider4" alt="Sample 1"></div>
              <h4>Satelity/TV</h4>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <!-- <img  class="picture-slider" src="./img/circle.jpg" alt="Sample 2"/> -->
            <div class="card-box">
              <div class="offer-slider5" alt="Sample 1"></div>
              <h4>Swiatlowody/Internet</h4>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
    <section class="realisations">
      <div class="box-realis">
        <h3>Nasze Realizacje</h3>
      <figure class="snip1482">
        <figcaption>
          <h2>Prywatny Dom</h2>
          <p>Instalacja fotowoltaiki</p>
        </figcaption>
        <img
          src="./img/solarpanel.jpg"
          alt="sample45"
        />
      </figure>
      <figure class="snip1482">
        <figcaption>
          <h2>Osiedle</h2>
          <p>Monitoring</p>
        </figcaption>
        <img
          src="./img/cctv.jpg"
          alt="sample45"
        />
      </figure>
      <figure class="snip1482">
        <figcaption>
          <h2>Magazyn</h2>
          <p>Instalacja elektryczna oraz monitoring</p>
        </figcaption>
        <img
          src="./img/hala.jpg"
          alt="sample45"
        />
      </figure>
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
      linkActive: '',
    };
  },
  methods: {
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
.box-realis{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
}
h3{
  border-left: 6px solid #2779a7;
  padding-left: 1em;
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
.cont-box {
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
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
.snip1401 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1401>div {
  background-image: url('./img/whitecamera.jpg');
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  height:300px;
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
  border-color: rgba(255, 255, 255, 0.5) transparent transparent transparent;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1401 h3,
.snip1401 p {
  line-height: 1.5em;
  -webkit-transform: translateX(-30px);
  transform: translateX(-30px);
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
.snip1482 {
  font-family: 'Fauna One', Arial, sans-serif;
  position: relative;
  margin: 0;
  min-width: 230px;
  max-width: 295px;
  min-height: 210px;
  width: 100%;
  color: #ffffff;
  text-align: right;
  line-height: 1.4em;
  background-color: #1a1a1a;
  font-size: 16px;
  margin-bottom: 2em;
}
.snip1482 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1482 img {
  position: absolute;
  right: 0%;
  top: 50%;
  opacity: 1;
  width: 100%;
  -webkit-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
}
.snip1482 figcaption {
  position: absolute;
  width: 50%;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 20px 0 20px 20px;
}
.snip1482 h2,
.snip1482 p {
  margin: 0;
  width: 100%;
  -webkit-transform: translateX(20px);
  transform: translateX(20px);
  opacity: 0;
}
.snip1482 h2 {
  font-family: 'Playfair Display', Arial, sans-serif;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.snip1482 p {
  font-size: 0.8em;
}
.snip1482 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.snip1482:hover img,
.snip1482.hover img {
  width: 55%;
  right: -10%;
}
.snip1482:hover figcaption h2,
.snip1482.hover figcaption h2,
.snip1482:hover figcaption p,
.snip1482.hover figcaption p {
  -webkit-transform: translateX(0px);
  transform: translateX(0px);
  opacity: 1;
}
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
.offers{
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
.card-box > h4 {
  text-align: center;
  border-left: 3px solid #16c0e9;
}
.offer-btn {
  position: absolute;
  bottom: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.offer-btn > p {
  padding: 0.5em 2em;
  background-color: #16c0e9;
  border-radius: 15px;
  color: #ffffff;
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
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #2779a7;
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
  margin: 0;
}
.signature {
  font-family: 'Sacramento';
  font-size: 1.6rem;
  position: relative;
  left: 0px;
  top: 0px;
  font-weight: 300;
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
.aboutUs {
  position: relative;
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
  /* background: linear-gradient(to bottom, #1488cc, #2b32b2); */
  background-color: #2779a7;
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
