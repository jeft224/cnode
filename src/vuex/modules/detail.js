/**
 * Created by 罗志伟 on 2017/2/24.
 */
import api from '../../fetch/api'
import * as types from '../type'

const state = {
   detail:{} //文章的详情
}
const actions ={
  /**
   * 获取文章详情
   * @param commit
   * @param id
   */
  getDetail:({commit},id)=>{
    commit(types.COM_LOADING_STATUS,true);
    api.TopicDetail(id).then(res =>{
      commit(types.COM_LOADING_STATUS,false);
      commit(types.GET_TOPICS_DETAIL,res)
    })
  }
}
const getters = {
  getDetail:state => state.detail
}
const mutations = {
  [types.GET_TOPICS_DETAIL](state,res){
      state.detail = res.data;
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
