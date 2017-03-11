/**
 * Created by 罗志伟 on 2017/2/22.
 */
import Vue from 'vue';
import Vuex from  'vuex';
import user from './modules/user'
import com from './modules/com'
import topics from './modules/topics'
import detail from './modules/detail'
import message from './modules/message'
import post from './modules/post'

Vue.use(Vuex)

var  store = new Vuex.Store({
    modules:{
      user,
      com,
      topics,
      detail,
      message,
      post
    }
})

export default  store;
// export default new Vuex.Store({
//   modules:{
//     user,
//     com
//   }
//   // store
// })
