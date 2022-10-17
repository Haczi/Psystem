<template>
  <div class="container">
    <div class="box-selection">
      <div class="instalation-page">
        <img src="./img/instalacjelogo.png" />
        <router-link to="/instalation" class="start-page"><i class="fa-solid fa-circle-arrow-right"></i></router-link>
      </div>
      <div class="instalation-page">
        <img src="./img/transportlogo.png" />
        <router-link to="to" class="start-page"><i class="fa-solid fa-circle-arrow-right"></i></router-link>
      </div>
    </div>
  </div>
  <!-- <div class="image-top">
      <video autoplay loop playsinline muted>
        <source src="./video/clock.mp4" type="video/mp4">
      </video>
    </div> -->
</template>

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
</style>
