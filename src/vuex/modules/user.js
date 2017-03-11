/**
 * Created by 罗志伟 on 2017/2/22.
 */
import api from '../../fetch/api'
import * as types from '../type'
export default {
  state:{
    // 用户登录状态
    loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
    // 用户登录信息
    userInfo : JSON.parse(localStorage.getItem('userInfo')) || {},
    /*用户信息*/
    userData:[]
  },
  actions:{
    /**
     * 用户登录
     * @param {any} {commit}
     * @param {any} accesstoken
     */
    setUserInfo({ commit }, res) {
      localStorage.setItem('userInfo', JSON.stringify(res))
      localStorage.setItem('loginStatus', true)
      commit(types.SET_USER_INFO, res)
      commit(types.SET_LOGIN_STATUS, true)
    },
    /**
     * 退出登录
     * @param commit
     * @param res
     */
    setSignOut:({commit},res)=>{
      localStorage.removeItem('loginStatus')
      localStorage.removeItem('userInfo')
      commit(types.SET_LOGIN_STATUS, false)
      commit(types.SET_USER_INFO, {})
    },
    /**
     * 获取用户信息
     * @param commit
     * @param name
     */
    getUserData:({commit},name)=>{
      commit(types.COM_LOADING_STATUS,true)
      api.UserInfo(name).then(res => {
        commit(types.COM_LOADING_STATUS,false)
        console.log(res.data)
        commit(types.GET_USER_DATA,res.data)
      })
    }
  },
  getters:{
    getUserData: state => state.userData
  },
  mutations:{
    [types.GET_USER_DATA](state,res){
      state.userData = res
    },
    [types.SET_LOGIN_STATUS](state, status) {
      state.loginStatus = status
    },
    [types.SET_USER_INFO](state, res) {
      state.userInfo = res
    },
  }
}
