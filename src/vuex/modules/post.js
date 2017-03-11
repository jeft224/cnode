/**
 * Created by 罗志伟 on 2017/3/11.
 */
import api from '../../fetch/api'
import * as types from '../type'


const state = {}

const actions = {

  savePost({ commit }, form) {
    api.Post(form)
      .then(res => {

      })
  }
}

const getters = {

}

const mutations = {

}

export default {
  state,
  actions,
  getters,
  mutations
}
