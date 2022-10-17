<template>
  <header>
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
    <div class="box-splide splide" data-splide='{"autoplay":"", "arrows":""}'>
      <Splide
        :options="{ rewind: true }"
        aria-label="My Favorite Images"
        data-splide='{"autoplay":"true","arrows":""}'
      >
        <SplideSlide>
          <div class="picture-slider" alt="Sample 1"></div>
        </SplideSlide>
        <SplideSlide>
          <div class="picture-slider2" alt="Sample 1"></div>
        </SplideSlide>

        <SplideSlide>
          <img class="picture-slider" src="./img/circle.jpg" alt="Sample 2" />
        </SplideSlide>
      </Splide>
    </div>
  </header>
  <section class="aboutUs">
    <div class="box-aboutUs">
      <div class="boss-photo"><img src="./img/pawel.png" /></div>
      <div class="text-aboutUs">
        <h3>O Firmie</h3>
        <p>
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsum
        </p>
        <h3 class="signature">Paweł Picheta</h3>
      </div>
    </div>
    <div class="achive">
      <h3 class="achive-title">Nasze Osiągnięcia</h3>
      <div class="line-1">
        <div class="circle-1">
          <p class="big-p">10</p>
          <p class="small-p">Lat</p>
          <p class="small-p">doświadczenia</p>
        </div>
        <div class="circle-1">
          <p class="big-p">500</p>
          <p class="small-p">nie wiem</p>
          <p class="small-p">cos tam</p>
        </div>
      </div>
      <div class="line-1">
        <div class="circle-1">
          <p class="big-p">300</p>
          <p class="small-p">Ukończonych</p>
          <p class="small-p">projektów</p>
        </div>
        <div class="circle-1">
          <p class="big-p">1000+</p>
          <p class="small-p">Zadowolonych</p>
          <p class="small-p">klientów</p>
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
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="card-box">
            <div class="offer-slider2" alt="Sample 1"></div>
            <h4>Zabezpieczenia</h4>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="card-box">
            <div class="offer-slider3" alt="Sample 1"></div>
            <h4>Monitoring</h4>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="card-box">
            <div class="offer-slider4" alt="Sample 1"></div>
            <h4>Satelity/TV</h4>
          </div>
        </SplideSlide>

        <SplideSlide>
          <!-- <img  class="picture-slider" src="./img/circle.jpg" alt="Sample 2"/> -->
          <div class="card-box">
            <div class="offer-slider5" alt="Sample 1"></div>
            <h4>Swiatlowody/Internet</h4>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>
<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  data() {
    return {
      menuActive: 'menu',
    };
  },
  methods: {
    toogleMenu() {
      if (this.menuActive === 'menu') {
        this.menuActive = 'open';
      } else {
        this.menuActive = 'menu';
      }
    },
  },
};
</script>
<style scoped>
.splide-offers {
}
.offers-title {
  text-align: center;
}
.card-box {
  width: 90%;
  height: 300px;
  margin: 0 0.3em;
  box-shadow: 3px 3px 10px rgba(46, 46, 46, 0.18);
  border-radius: 10px;
  overflow: hidden;
}
.offers {
  margin: 1em 0;
}
.big-p {
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
.circle-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 130px;
  height: 130px;
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
  left: -100px;
  top: -30px;
}
.box-splide {
  display: flex;
  justify-content: center;
  width: 100%;
}

.picture-slider,
.picture-slider2 {
  width: 100%;
  height: 200px;
  background-image: url('./img/kable.jpg');
  background-attachment: fixed;
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
  background-attachment: fixed;
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
.offer-slider4 {
  background-image: url('./img/satelity.jpg');
}
.offer-slider5 {
  background-image: url('./img/internet.jpg');
}

.nav {
  position: relative;
  display: flex;
  background-color: white;
  height: 50px;
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
.box-aboutUs {
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
  position: relative;
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
