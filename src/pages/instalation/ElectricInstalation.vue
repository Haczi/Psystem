<template>

    <div @click="showNavOffer=!showNavOffer" class="circle-offer"></div>
    <transition name="bounce">
        <router-link to="/oferta_alarmy" v-if="showNavOffer" class="circle-offer-alarm"></router-link>
    </transition>
    <transition name="bounce">
        <div v-if="showNavOffer" class="circle-offer-lock"></div>
    </transition>
    <transition name="bounce">
        <div v-if="showNavOffer" class="circle-offer-monitoring"></div>
    </transition>
        <router-link to="/instalation" class="circle"><i class="fas fa-home"></i></router-link>
    
    <div class="main-content">
        <svg style="height:100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2779a7" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,74.7C384,64,480,64,576,85.3C672,107,768,149,864,170.7C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div class="main-text">
            <h1>Instalacje elektryczne</h1>
            <p>Nasza firma specjalizuje się w projektowaniu, montażu i serwisie instalacji elektrycznych.</p>
        </div>
        <div class="top-picture"></div>
        <div class="bg-shadow"></div>
    </div>
    
    <div class="body-content">
       <div class="offer-box" v-for="(item,idx) in offer" :key="idx" >
        <svg style="height:100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2779a7" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,74.7C384,64,480,64,576,85.3C672,107,768,149,864,170.7C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div class="main-text">
            <h2>{{item.title}}</h2>
            <p>{{ item.text }}</p>
        </div>
       </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
          offer:[{title:"Projektowanie i wykonanie instalacji elektrycznych ", text:"Przedstawimy opis całego procesu projektowania oraz wykonania instalacji, wraz z informacją o możliwych do zastoaowania materiałach i urządzeniach "}, {title:"Modernizacja istniejących instalacji elektrycznych", text:"Przedstawienie wszystkich możliwości modernizacji istniejących instalacji wraz z propozycja zasosowania nowych technologi i rozwiązań"}, {title:"Serwis i konserwacja instalacji elektrycznych", text:"Oferujemy usługi serwisowe i konserwacyjne, w tym przeglądy okresowe, naprawy awaryjne i inne"}, {title:"Systemy automatyki budynkowej", text:"W ofercie inteligentne sterowanie oświetleniem, ogrzewaniem, wentylacją i innymi urządzeniami"}, {title:"Montaż oświetlenia zewnętrznego i dekoracyjnego", text:"Montaż oświetlenia ogrodowego, kinkietów, lamp oraz innych urządzeń"}],
          offerAlarm:[{title:"Projektowanie i montaż systemów alarmowych", text:"Nasz zespół specjalistów pomoże Ci dobrać odpowiedni system alarmowy do Twojego domu lub firmy. Oferujemy kompleksowe projektowanie, instalację i konfigurację systemu, aby zapewnić optymalne rozwiązanie dostosowane do Twoich potrzeb."},{title:"Monitoring", text:" W ramach naszej oferty zapewniamy 24-godzinny monitoring systemów alarmowych. W razie potrzeby, nasi operatorzy reagują na sygnały z systemu alarmowego, aby zminimalizować skutki zdarzenia."}, {title:"Serwis i konserwacja",text:" Oferujemy regularne przeglądy i konserwacje systemów alarmowych, aby upewnić się, że działa on zawsze sprawnie i niezawodnie. W przypadku usterek lub problemów z systemem alarmowym, nasi technicy są do Twojej dyspozycji, aby szybko rozwiązać problem."}, {title:"Integracja z innymi systemami", text:"Nasze systemy alarmowe można zintegrować z innymi systemami bezpieczeństwa, takimi jak kamery, systemy kontroli dostępu czy oświetlenie, aby zapewnić kompleksowe rozwiązanie bezpieczeństwa."}],
          showNavOffer:false,  
        }
    },
    mounted(){
        window.scrollTo(0, 0);
    }
}
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
 .main-content{
    background: #1488cc;
    position: relative;
    width:100%;
    height: 400px;
    overflow: hidden;
}

.top-picture{
    position: absolute;
    top:80px;
    right:px;
    height:70%;
    width:100%;
    background-image: url("../instalation/img/-worker-transformed.jpeg");
    background-position: center;
   background-size: cover;
   clip-path: polygon(100% 0%, 85% 52%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
   z-index: 10;
}
.bg-shadow{
    position: absolute;
    top:80px;
    right:px;
    height:70%;
    width:100%;
    background-color:rgba(66, 68, 90, .5);
   clip-path: polygon(100% 0%, 85% 52%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
   z-index: 10;
}
.main-text{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    color:white;
    width:100%;
    z-index: 20;
}
.body-content{
    background: white;
    display:flex;
    flex-direction: column;
    align-items: center;
    
}
.offer-box{
    overflow: hidden;
    background: #1488cc;
   
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    position: relative;
    /* padding:.5em 2em; */
    /* height:500px;
    width:400px; */
    margin:1em 0;
    height:250px;
    width:90%;
    border-radius: 8px;
}
.main-text h2, .main-text p, .main-text h1{
   padding: 0 .5em; 
}
.circle{
    cursor:pointer;
    background: white;
    position: fixed;
    top:2%;
    left:2%;
    width:50px;
    height:50px;
    padding:1em;
    border-radius: 50%;

    display:flex;
    justify-content: center;
    z-index: 100;
}
.circle-offer{
    cursor:pointer;
    background-image: url("./img/cable.png");
    background-size: cover;
    border: 2px solid yellow;
    position: fixed;
    top:2%;
    right:2%;
    width:50px;
    height:50px;
    padding:1em;
    border-radius: 50%;

    display:flex;
    justify-content: center;
    z-index: 100;
}
.circle-offer-alarm{
    cursor:pointer;
    background-image: url("./img/alarm\ \(2\).png");
    background-size: cover;
    border: 2px solid yellow;
    position: fixed;
    top:10%;
    right:2%;
    width:50px;
    height:50px;
    padding:1em;
    border-radius: 50%;

    display:flex;
    justify-content: center;
    z-index: 100;
}
.circle-offer-lock{
    cursor:pointer;
    background-image: url("./img/zabezpieczenia.png");
    background-size: cover;
    border: 2px solid yellow;
    position: fixed;
    top:18%;
    right:2%;
    width:50px;
    height:50px;
    padding:1em;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    z-index: 100;
}
.circle-offer-monitoring{
    cursor:pointer;
    background-image: url("./img/monitoringcam.png");
    background-size: cover;
    border: 2px solid yellow;
    position: fixed;
    top:26%;
    right:2%;
    width:50px;
    height:50px;
    padding:1em;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    z-index: 100;
}
</style>