/**
 * Created by 罗志伟 on 2017/2/23.
 */
import axios from 'axios'

//api 路径
const HOST = 'https://cnodejs.org/api/v1'

export function fetch(url, method = 'GET') {
  return new Promise((resolve,reject)=>{
    axios({
      method:method,
      url:HOST+url
    }).then((response) => {
      console.log(response.data)
      resolve(response.data)
    }).catch((error)=>{
      reject(error)
    })
  })
}

export default {
  /**
   * 获取文章列表
   * @param params
   * @returns {Promise}
   * @constructor
   */
  TopicsList(params){
    return fetch(`/topics/${params}`)
  },
  /**
   * 获取文章详情
   * @param id
   * @returns {Promise}
   * @constructor
   */
  TopicDetail(id){
    return fetch(`/topic/${id}`)
  },
  /**
   * 获取用户信息
   * @param name
   * @returns {Promise}
   * @constructor
   */
  UserInfo(name){
    return fetch(`/user/${name}`)
  },
  /**
   * 用户登录
   * @param accesstoken
   * @returns {Promise}
   * @constructor
   */
  Login(accesstoken){
    return fetch(`/accesstoken?accesstoken=${accesstoken}`,'post')
  },
  /**topics
   * 获取已读和未读消息
   * @param {any} accesstoken
   * @returns  {Promise}
   * @constructor
   */
  Messages(accesstoken) {
    return fetch(`/messages?mdrender=true&accesstoken=${accesstoken}`)
  },
  /**
   * 提交表单
   * @param form
   * @returns {*}
   * @constructor
   */
  Post(form){
    return fetch(`/topics?${form}`,'post')
  }
}

