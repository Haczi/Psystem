import {createStore} from 'vuex';

import instalationModule from './modules/instalation';


const store = createStore({
    modules: {
        instalation: instalationModule,
        
    },
    // state(){
    //     return{
    //         userId: 'c3'
    //     }
    // },
    // getters:{
    //     coachId(state){
    //         return state.userId
    //     }
    // }
})

export default store