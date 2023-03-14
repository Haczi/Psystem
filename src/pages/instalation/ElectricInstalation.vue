<template>

        <router-link to="/instalation" class="circle"><i class="fas fa-home"></i></router-link>
    
    <div class="main-content">
        <svg style="height:100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2779a7" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,74.7C384,64,480,64,576,85.3C672,107,768,149,864,170.7C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div class="main-text">
            <h1>Instalacje elektryczne</h1>
            <p>Nasza firma specjalizuje się w projektowaniu, montażu i serwisie instalacji elektrycznych.</p>
        </div>
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
          offer:[{title:"Projektowanie i wykonanie instalacji elektrycznych ", text:"Przedstawimy opis całego procesu projektowania oraz wykonania instalacji, wraz z informacją o możliwych do zastoaowania materiałach i urządzeniach "}, {title:"Modernizacja istniejących instalacji elektrycznych", text:"Przedstawienie wszystkich możliwości modernizacji istniejących instalacji wraz z propozycja zasosowania nowych technologi i rozwiązań"}, {title:"Serwis i konserwacja instalacji elektrycznych", text:"Oferujemy usługi serwisowe i konserwacyjne, w tym przeglądy okresowe, naprawy awaryjne i inne"}, {title:"Systemy automatyki budynkowej", text:"W ofercie inteligentne sterowanie oświetleniem, ogrzewaniem, wentylacją i innymi urządzeniami"}, {title:"Montaż oświetlenia zewnętrznego i dekoracyjnego", text:"Montaż oświetlenia ogrodowego, kinkietów, lamp oraz innych urządzeń"}]  
        }
    },
    mounted(){
        window.scrollTo(0, 0);
    }
}
</script>
<style scoped>
 .main-content{
    background: #1488cc;
    position: relative;
    width:100%;
    height: 400px;
    overflow: hidden;
}
.main-text{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    color:white;
    width:100%;
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
</style>