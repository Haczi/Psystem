<template>
  <div v-if="!loading" class="conteiner" @scroll="onScroll">
    <nav class="nav">
      <div class="logo"></div>
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
                  <span class="blue">I</span>nstalacja
                </p>
                <p class="text-focus-in4">Wykonana Z Najwyższą Starannością</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </header>
    <section class="aboutUs">
      <figure class="snip1401" :class="snip1401Desktop">
        <!-- <div></div><img src="./img/whitecamera.jpg" alt="sample67" /> -->
        <div></div>
        <figcaption>
          <h3>O NAs</h3>
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

      <div class="achive" :class="achiveDesktop">
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
        <Splide v-if="numbersSlide"
          :options="{ rewind: true }"
          aria-label="My Favorite images"
          data-splide='{ "perPage": 4}'
        >
          <SplideSlide>
            <div class="card-box">
              <h4>Instalacje</h4>
              <div class="offer-slider1" alt="Sample 1"></div>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <h4>Zabezpieczenia</h4>
              <div class="offer-slider2" alt="Sample 1"></div>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <h4>Monitoring</h4>
              <div class="offer-slider3" alt="Sample 1"></div>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <h4>Satelity/TV</h4>
              <div class="offer-slider4" alt="Sample 1"></div>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <!-- <img  class="picture-slider" src="./img/circle.jpg" alt="Sample 2"/> -->
            <div class="card-box">
              <h4>Alarmy</h4>
              <div class="offer-slider5" alt="Sample 1"></div>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
        </Splide>
        <Splide v-if="!numbersSlide"
          :options="{ rewind: true }"
          aria-label="My Favorite images"
          data-splide='{ "perPage": 2}'
        >
          <SplideSlide>
            <div class="card-box">
              <h4>Instalacje</h4>
              <div class="offer-slider1" alt="Sample 1"></div>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <h4>Zabezpieczenia</h4>
              <div class="offer-slider2" alt="Sample 1"></div>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <h4>Monitoring</h4>
              <div class="offer-slider3" alt="Sample 1"></div>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card-box">
              <h4>Satelity/TV</h4>
              <div class="offer-slider4" alt="Sample 1"></div>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <!-- <img  class="picture-slider" src="./img/circle.jpg" alt="Sample 2"/> -->
            <div class="card-box">
              <h4>Alarmy</h4>
              <div class="offer-slider5" alt="Sample 1"></div>
              <div class="offer-btn"><p>Oferta</p></div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <p class="small-info">
        *Szczegółowa oferta zostanie przedstawiona po skontaktowaniu się z nami
      </p>
    </section>
    <section id="listen_projects" class="realisations">
      <div class="box-realis">
        <h3>Nasze Realizacje</h3>
        <figure class="snip1482" :class="projectOne">
          <figcaption>
            <p class="rel-number" :class="showProjectOneText">#1</p>
            <h2 :class="showProjectOneText">Prywatny Dom</h2>
            <p :class="showProjectOneText">Instalacja fotowoltaiki</p>
          </figcaption>
          <div
            @click="toggleShowInfoProject1"
            class="project1"
            :class="showProjectOneInfo"
          ></div>
        </figure>
        <figure class="snip1482" :class="projectTwo">
          <figcaption>
            <p class="rel-number" :class="showProjectTwoText">#2</p>
            <h2 :class="showProjectTwoText">Magazyn</h2>
            <p :class="showProjectTwoText">Monitoring</p>
          </figcaption>
          <div class="project2"  @click="toggleShowInfoProject2" :class="showProjectTwoInfo"></div>
        </figure>
        <figure class="snip1482" :class="projectThree">
          <figcaption>
            <p class="rel-number" :class="showProjectThirdText">#3</p>
            <h2 :class="showProjectThirdText">Osiedle</h2>
            <p :class="showProjectThirdText">Instalacja elektryczna oraz monitoring</p>
          </figcaption>
          <div class="project3" @click="toggleShowInfoProject3" :class="showProjectThirdInfo"></div>
        </figure>
      </div>
    </section>
    <section class="contactUs">
      <div class="contact-box">
        <p>SKONTAKTUJ SIĘ Z NAMI</p>
        <div class="card-contact">
          <!-- <img
            src="http://pixelcurse.com/wp-content/uploads/2011/02/minimalist_landscape_8.jpg"
            class="img"
            
          /> -->
          <div class="img" :class="contactActive">
            <ul>
              <li>
                <a :class="activePhone" id="phone"
                  ><i class="fas fa-phone"></i>
                  <div @click="setPhoneContact" class="inside"></div
                ></a>
              </li>
              <li>
                <a id="email" :class="activeEmail"
                  ><i class="fas fa-at"></i>
                  <div @click="setEmailContact" class="inside"></div
                ></a>
              </li>
              <li>
                <a id="adress" :class="activeAdress"
                  ><i class="fas fa-map-marker-alt"></i>
                  <div
                    id="adress1"
                    @click="setAdressContact"
                    class="inside"
                  ></div
                ></a>
              </li>
            </ul>
            <div v-if="showPhone" class="phone">
              <h2>Zadzwoń</h2>
              <p>Paweł Picheta</p>
              <i class="fas fa-mobile-alt"></i>
              <a href="tel:+48600499205">600 499 205</a>
              <div class="photo-contact"></div>
            </div>
            <div v-if="showEmail" class="phone">
              <h2>Napisz do Nas</h2>
              <p>E-mail</p>
              <i class="fas fa-envelope"></i>
              <a href="mailto:biuro@psystem.pl" target="_blank"
                >biuro@psystem.pl</a
              >
              <div class="photo-contact"></div>
            </div>
            <div v-if="showAdress" class="phone">
              <h2>Zapraszamy</h2>
              <p>Nasza Lokalizacja</p>
              <i class="fas fa-map-marked-alt"></i>
              <a href="https://goo.gl/maps/x8yRSwQcUe3svdnf8" target="_blank"
                >Google Maps - Sprawdź</a
              >
              <div class="photo-contact"></div>
            </div>
          </div>
        </div>
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
      numbersSlide:true,
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
      projectOne: '',
      projectTwo: '',
      projectThree: '',
      showProjectOneInfo: '',
      showProjectOneText:'',
      showProjectTwoInfo: '',
      showProjectTwoText:'',
      showProjectThirdInfo: '',
      showProjectThirdText:'',
      achiveDesktop:'achive-desktop',
      snip1401Desktop:'snip1401-desktop',
      loading:true
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
      let myScroll2 = document
        .querySelector('#listen_projects')
        .getBoundingClientRect().top;
      // console.log(myScroll);
      console.log(myScroll2 + 'cs');

      if (parseInt(myScroll.toFixed()) < 450 && this.countPlay === 0) {
        this.playAnimation();
        this.countPlay = 1;
      }
      if (parseInt(myScroll.toFixed()) < -1000) {
        this.contactActive = 'card-contact_hover';
      }
      if (parseInt(myScroll.toFixed()) > -800) {
        this.contactActive = '';
      }
      if (parseInt(myScroll2.toFixed()) < 300) {
        this.projectOne = 'show-project1';
      }
      if (parseInt(myScroll2.toFixed()) < 200) {
        this.projectTwo = 'show-project2';
      }
      if (parseInt(myScroll2.toFixed()) < 100) {
        this.projectThree = 'show-project3';
      }
    },
    listenOnResize(){
  console.log(window.innerWidth)
  if(window.innerWidth<660){
this.numbersSlide=false
this.achiveDesktop=""
this.snip1401Desktop=""
  }
  else{
this.numbersSlide=true
this.achiveDesktop="achive-desktop"
this.snip1401Desktop="snip1401-desktop"
  }

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
    toggleShowInfoProject1() {
      if (this.showProjectOneInfo === '') {
        this.showProjectOneInfo = 'show-project1-info';
      } else {
        this.showProjectOneInfo = '';
      }
      if(this.showProjectOneText===''){
        this.showProjectOneText="show-project1-text"
      }
      else{
        this.showProjectOneText=''
      }
    },
    toggleShowInfoProject2() {
      if (this.showProjectTwoInfo === '') {
        this.showProjectTwoInfo = 'show-project1-info';
      } else {
        this.showProjectTwoInfo = '';
      }
      if(this.showProjectTwoText===''){
        this.showProjectTwoText="show-project1-text"
      }
      else{
        this.showProjectTwoText=''
      }
    },
    toggleShowInfoProject3() {
      if (this.showProjectThirdInfo === '') {
        this.showProjectThirdInfo = 'show-project1-info';
      } else {
        this.showProjectThirdInfo = '';
      }
      if(this.showProjectThirdText===''){
        this.showProjectThirdText="show-project1-text"
      }
      else{
        this.showProjectThirdText=''
      }
    },
    turnOffLoading(){
      setTimeout(() => {
  this.loading=false
}, 2000);
    }
  },
  beforeMount() {
    document.addEventListener('scroll', this.listenScroll);
    window.addEventListener('resize', this.listenOnResize);
  },
  mounted(){
    this.turnOffLoading()
    window.addEventListener('resize', this.listenOnResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.listenOnResize);
  },
  
};
</script>
<style scoped>
/* Straight class*************************** */
.conteiner {
 
  position: relative;
  transition: all 1s;
  
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
.splide__arrow {
  opacity: 0;
}

p {
  margin: 0;
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
/* End Straight class*********************** */

/* Navigation class*************************************************************** */
.nav {
  width: 100%;
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
.logo {
  display: flex;
  background-image: url('./img/logopsystem.png');
  background-position: -10px 100px;
  background-size: cover;
  width: 140px;
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
  left: 90%;
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
/* End Hamburgr class******************************* */
/* End Navigation class**************************************************** */

/* Heroimg class************************************ */

.splide-offers {

}
.picture-slider,
.picture-slider2,
.picture-slider3,
.picture-slider0 {
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url('./img/kable.jpg');
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
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
.main-text {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main-text > span {
  color: #1488cc;
  font-size: 2.8rem;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  font-weight: bold;
}
.shadow-text {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.shadow-text > p {
  color: white;
  font-weight: 400;
  font-size: 1.3rem;
  padding-bottom: 2em;
  text-align: center;
  padding: .2em;;
}
header {
  margin-top: 3em;
}
/* End Heroimg class******************************** */

/* AboutUs class************************************ */
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
.snip1401-desktop{
  max-height: 500px;
}
.snip1401-desktop > div{
  height: 800px!important;
}
.snip1401-desktop~.cont-box{
  height:600px;
}
.snip1401 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1401 > div {
  background-image: url('./img/whitecamera.jpg');
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
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
.snip1401-desktop figcaption{
  right:20%;
}
.snip1401-desktop figcaption:before{
  border-width: 260px 260px 260px 0!important;
 
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
.snip1401-desktop:after{
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
  -webkit-transform: translateX(-30px)!important;
  transform: translateX(-130px)!important;
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
/* End AboutUs class******************************** */

/* Achive class************************************* */
.achive {
  padding-bottom: 2em;
  width: 100%;
  /* background: linear-gradient(to bottom, #1488cc, #2b32b2); */
  background-color: #2779a7;
}
.achive-desktop{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
}.achive-desktop> h3{
width:100%;
}
.achive-desktop .line-1{
  width:50%;
}
.big-p {
  text-align: center;
  padding-bottom: 0.1em;
  font-weight: bold;
  font-size: 1.8rem;
  color: white;
}
.small-p {
  font-size: 0.7rem;
  font-weight: 400;
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
/* End Achive class********************************* */

/* Offers class************************************* */
.offers {
  text-align: center;
}
.offers-title {
  color: #000000;
}
.small-info {
  font-size: 0.7rem;
  padding: 0 1em;
}
.card-box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 200px;
  height: 280px;
  margin: auto;
  box-shadow: 3px 3px 10px rgba(46, 46, 46, 0.18);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1em;
  background-color: rgba(0, 0, 0, 0.9);
}
.card-box > h4 {
  width: 100%;
  color: #ffffff;
  text-align: center;
  background:#1488cc;
  /* background-color: #2779a7; */
  margin: 0;
  padding: 1em 0;
}
.offer-btn {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.offer-btn > p {
  padding: 0.5em 2em;
  background-color: #1488cc;
  border-radius: 15px;
  color: white;
}
.offers {
  margin: 1em 0;
}
.offer-slider2,
.offer-slider1,
.offer-slider3,
.offer-slider4,
.offer-slider5 {
  width: 150px;
  height: 150px;
  background-image: url('./img/zabezpieczenia.png');
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
  transform: scale(0.6);
  box-shadow: inset 0 0 10px #021b79;
  border-radius: 50%;
}
.offer-slider1 {
  background-image: url('./img/cable.png');
  transform: scale(0.6);
}
.offer-slider3 {
  background-image: url('./img/monitoringcam.png');
  transform: scale(0.6);
}

.offer-slider4 {
  background-image: url('./img/tvsat.png');
  transform: scale(0.6);
}
.offer-slider5 {
  background-image: url('./img/alarm (2).png');
  transform: scale(0.6);
}
/* End Offers class********************************* */

/* Projects class*********************************** */
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
.snip1482 > div:hover,
.snip1482 > div.hover {
  /* width: 55%;
  right: -10%;
  height: 50%; */
}
.snip1482:hover figcaption h2,
.snip1482.hover figcaption h2,
.snip1482:hover figcaption p,
.snip1482.hover figcaption p {
  /* -webkit-transform: translateX(0px);
  transform: translateX(0px);
  opacity: 1; */
}
@keyframes show-text-project1 {
  0% {
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    opacity: 1;
  }
}
@-webkit-keyframes show-text-project1 {
  0% {
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    opacity: 1;
  }
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
  border-radius: 10px;
  visibility: hidden;
}
.snip1482 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1482 > div {
  /* background-image: url('./img/whitecamera.jpg'); */
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
  position: absolute;
  height: 100%;
  right: 0%;
  top: 50%;
  opacity: 1;
  width: 100%;
  -webkit-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(46, 46, 46, 0.18);
}
.realisations{
  overflow: hidden;

}
.box-realis {
  background: #01162b;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
  box-shadow: 3px 3px 10px rgba(46, 46, 46, 0.18);
  overflow: hidden;
}
h3 {
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 300;
  color: white;
  margin-bottom: 2em;

  /* padding-left: 1em; */
}
.project1 {
  background-image: url('./img/solarpanel.jpg');
  transform: rotateY(20deg);
  transform: rotateX(35deg);
  transform: translate(300px, -300px);
  transform: skew(-35deg, 10deg);
}
.project2 {
  background-image: url('./img/hala.jpg');
}
.project3 {
  background-image: url('./img/cctv.jpg');
}
.rel-number {
  position: absolute;
  font-size: 4rem !important;
  top: -50px;
  left: -70%;
  color: #ffffff;
}
/* End Projects class******************************* */

/* Contact class************************************ */
.photo-contact {
  /* position: absolute;
  top: 20%;
  left: -5%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-attachment: scroll;
  background-image: url('./img/pawel.png');
  background-size: cover;
  background-position: center;
  box-shadow: 3px 3px 10px rgba(46, 46, 46, 0.18); */
}
.phone {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  height: 80%;
  justify-content: center;
  margin-top: 2em;
  background-color: rgba(255, 255, 255, 0.936);
  border-radius: 10px;
  /* border: 2px solid #2779a7; */
  z-index: -1;
  box-shadow: 3px 3px 10px rgba(46, 46, 46, 0.18);
}
.phone > p {
  color: black;
  padding: 1em;
  font-size: 1.2rem;
}
.phone > h2 {
  margin-bottom: 0;
}
.phone svg {
  color: #2779a7;
  padding-bottom: 0.5em;
  font-size: 1.7rem;
}
.phone a {
  text-decoration: none;
  color: black;
}
.img > ul {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
}

.img > ul li {
  list-style: none;
  margin: 0 40px;
}

.img > ul li a i {
  font-size: 20px;
  color: black;
  line-height: 40px;
  transition: 0.5s;
  pointer-events: none;
  padding: 3em;
}
.inside {
  position: absolute;
  transform: perspective(1000px) rotate(-30deg) skew(-45deg) translate(0, 0);
  padding: 3em;
  background-color: transparent;
  z-index: 100000;
}
.img > ul li a svg {
  padding: 0em;
}
.img > ul li a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  text-align: center;
  transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
  transition: 0.5s;
  box-shadow: -30px 30px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  padding: 1em;
}

.img > ul li a:before {
  content: '';
  position: absolute;
  top: 10px;
  left: -20px;
  height: 100%;
  width: 20px;
  background: white;
  transition: 0.5s;
  transform: rotate(0deg) skewY(-45deg);
}

.img > ul li a:after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: -10px;
  height: 20px;
  width: 100%;
  background: white;
  transition: 0.5s;
  transform: rotate(0deg) skewX(-45deg);
}
.card-contact {
  perspective: 3000px;
  width: 90%;
  max-width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  margin-top: 1em;
}
.card-contact > .img {
  display: flex;
  justify-content: center;
  transform: rotateX(70deg) rotateZ(-60deg) translate3d(-120px, 0px, 70px);
  box-shadow: -80px 60px 15px 5px rgba(0, 0, 0, 0.4);
  transition: all 0.4s;
  transform-style: preserve-3d;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 300px;
}

.contact-box {
  overflow: hidden;
  position: relative;
  background: #01162b;
  /* background-image: url('./img/contact.jpg'); */
  width: 100%;
  height: 500px;
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
}
.contact-box > p {
  color: white;
  text-align: center;
  padding: 1em 0;
  margin-bottom: 2em;
  font-weight: bold;
  font-size: 1.3rem;
  font-weight: 300;
}
/* End Contact class******************************** */

/* Key frames*************************************** */
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
@keyframes contact-anime {
  from {
    -webkit-transform: rotateX(70deg) rotateZ(-60deg)
      translate3d(-120px, 0px, 70px);
    transform: rotateX(70deg) rotateZ(-60deg) translate3d(-120px, 0px, 70px);
    -webkit-box-shadow: -80px 60px 15px 5px rgba(0, 0, 0, 0.4);
    box-shadow: -80px 60px 15px 5px rgba(0, 0, 0, 0.4);
  }
  to {
    -webkit-transform: rotateX(0deg) rotateZ(0deg) translate3d(0px, 0px, 0px);
    transform: rotateX(0deg) rotateZ(0deg) translate3d(0px, 0px, 0px);
    -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  }
}
@-webkit-keyframes contact-anime {
  from {
    -webkit-transform: rotateX(70deg) rotateZ(-60deg)
      translate3d(-120px, 0px, 70px);
    transform: rotateX(70deg) rotateZ(-60deg) translate3d(-120px, 0px, 70px);
    -webkit-box-shadow: -80px 60px 15px 5px rgba(0, 0, 0, 0.4);
    box-shadow: -80px 60px 15px 5px rgba(0, 0, 0, 0.4);
  }
  to {
    -webkit-transform: rotateX(0deg) rotateZ(0deg) translate3d(0px, 0px, 0px);
    transform: rotateX(0deg) rotateZ(0deg) translate3d(0px, 0px, 0px);
    -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  }
}
@-webkit-keyframes start-anime-a {
  from {
    -webkit-transform: rotate(0deg) skewX(25deg);
    transform: rotate(0deg) skewX(25deg);
  }
  to {
    -webkit-transform: perspective(1000px) rotate(-30deg) skew(25deg)
      translate(20px, -20px);
    transform: perspective(1000px) rotate(-30deg) skew(25deg)
      translate(20px, -20px);
    -webkit-box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
  }
}
@keyframes start-anime-a {
  from {
    -webkit-transform: rotate(0deg) skewX(25deg);
    transform: rotate(0deg) skewX(25deg);
  }
  to {
    -webkit-transform: perspective(1000px) rotate(-30deg) skew(25deg)
      translate(20px, -20px);
    transform: perspective(1000px) rotate(-30deg) skew(25deg)
      translate(20px, -20px);
    -webkit-box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
  }
}
@-webkit-keyframes project-one {
  0% {
    -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
    visibility: visible;
  }
}
@keyframes project-one {
  0% {
    -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
    visibility: visible;
  }
}
@-webkit-keyframes project-two {
  0% {
    -webkit-transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
    transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
    visibility: visible;
  }
}
@keyframes project-two {
  0% {
    -webkit-transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
    transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
    visibility: visible;
  }
}
@-webkit-keyframes project-three {
  0% {
    -webkit-transform: rotateY(-35deg) rotateX(-20deg) translate(250px, 250px)
      skew(12deg, 15deg);
    transform: rotateY(-35deg) rotateX(-20deg) translate(250px, 250px)
      skew(12deg, 15deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
    visibility: visible;
  }
}
@keyframes project-three {
  0% {
    -webkit-transform: rotateY(-35deg) rotateX(-20deg) translate(250px, 250px)
      skew(12deg, 15deg);
    transform: rotateY(-35deg) rotateX(-20deg) translate(250px, 250px)
      skew(12deg, 15deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
    visibility: visible;
  }
}
@keyframes show-info-project1 {
  0% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 55%;
    height: 50%;
    right: -10%;
  }
}
@-webkit-keyframes show-info-project1 {
  0% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 55%;
    height: 50%;
    right: -10%;
  }
}
/* End key Frames*********************************** */

/* Animation class********************************** */
.show-project1 {
  -webkit-animation: project-one 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: project-one 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.show-project2 {
  -webkit-animation: project-two 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: project-two 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.show-project3 {
  -webkit-animation: project-three 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: project-three 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.show-project1-info {
  -webkit-animation: show-info-project1 0.65s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: show-info-project1 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.show-project1-text {
  -webkit-animation: show-text-project1 0.65s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: show-text-project1 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.startAnimeContact {
  animation: start-anime-a 0.4s ease-out 0.01s both;
  -webkit-animation-duration: 0.4s;
  -webkit-animation-fill-mode: both;
  -webkit-animation-timing-function: ease-out;
}
.card-contact_hover {
  animation: contact-anime 0.8s ease-out both;
  -webkit-animation-duration: 0.8s;
  -webkit-animation-fill-mode: both;
  -webkit-animation-timing-function: ease-out;
}
.menu-link_active {
  animation: swing-in-left-fwd 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  -webkit-animation-name: swing-in-left-fwd;
  -webkit-animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.nav-menu_active {
  animation: active-nav 0.4s cubic-bezier(0.55, 0.285, 0.68, 0.53) both;
  -webkit-animation-name: active-nav;
  -webkit-animation-duration: 0.4s;
  -webkit-animation-timing-function: cubic-bezier(0.55, 0.285, 0.68, 0.53);
  -webkit-animation-fill-mode: both;
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
/* End Animation class****************************** */


@media only screen and (min-width: 960px){
  .box-realis{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .box-realis h3{
    text-align: center;
    width:100%;
  }
}
</style>
