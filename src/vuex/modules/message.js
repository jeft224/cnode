/**
 * Created by 罗志伟 on 2017/3/11.
 */
import api from '../../fetch/api'
import * as types from '../type'


const state = {
  post: {}
}
const actions = {
  /**
   * 获取信息列表
   * @param {any} {commit}
   * @param {any} accesstoken
   */
  getMessageInfo({ commit, rootState }) {
    commit(types.COM_LOADING_STATUS, true)
    let accesstoken = rootState.user.userInfo.accesstoken
    api.Messages(accesstoken)
      .then(res => {
        commit(types.GET_MESSAGE_LIST, res.data)
        commit(types.COM_LOADING_STATUS, true)
      })
  }
}

const getters = {
  getMessageInfo: state => state.post
}

const mutations = {
  [types.GET_MESSAGE_LIST](state, res) {
    state.post = res
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
