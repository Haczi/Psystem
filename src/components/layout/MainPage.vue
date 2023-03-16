<template>
  <div class="container">
    <div class="box-selection">
      <transition name="bounce">
        <div v-if="showElement" class="instalation-page">
          <img src="./img/instalacjelogo.png" />
          <router-link to="/instalation" class="start-page"><i class="fa-solid fa-circle-arrow-right"></i></router-link>
        </div>
      </transition>
      <transition name="bouncel">
        <div v-if="showElement" class="instalation-page">
          <img src="./img/transportlogo.png" />
          <router-link to="/transport" class="start-page"><i class="fa-solid fa-circle-arrow-right"></i></router-link>
        </div>
      </transition>
    </div>
  </div>
  <!-- <div class="image-top">
      <video autoplay loop playsinline muted>
        <source src="./video/clock.mp4" type="video/mp4">
      </video>
    </div> -->
</template>
<script>
export default{
  data(){
    return{
      showElement:false
    }
  },
  methods:{
    turnOnAnime(){
      setTimeout(() => {
  this.showElement=true
}, "1000");
    }
  },
  mounted() {
    this.turnOnAnime()
  },
}
</script>

<style scoped>
video {
  object-fit: cover;
  position: absolute;
  width: 110px;
  height: 200px;
  position: absolute;
  z-index: 1;
}
.instalation-page {
  display: flex;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 3px 3px 10px rgba(46, 46, 46, 0.18);
  margin: 0.5em;
  overflow: hidden;
}
img {
  width:80%;
  max-width: 300px;
  height: auto;
}
.box-selection {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.start-page{
  width:20%;
  display:flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  background-color: #0487cb;
  color:white;
}
svg{
  height:30px;

}
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
.bouncel-enter-active {
  animation: bouncel-in 0.5s;
}
.bouncel-leave-active {
  animation: bouncel-in 0.5s reverse;
}
@keyframes bouncel-in {
  0% {
    transform: translateX(-200%);
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
</style>
