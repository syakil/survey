import {createStore} from 'vuex'

const store = createStore({
    state:{
      user:{
        data:{
          name:'John Doe',
          email:''
        },
        token:null
      }
    },
    getters:{},
    actions:{},
    modules:{},
    mutations:{},
})

export default store
