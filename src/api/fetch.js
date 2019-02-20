// import fetch from 'fetch';

// const baseUrl = 'https://cnodejs.org/api/v1';
// 解析json
function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if(response.status >= 200 && response.status < 500){
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error;
}

export default function request(options = {},params = null) {
  let {url,data} = options;
  // let url = 
  // get 请求参数
  if(params){
    let paramsArr = []; 

    Object.keys(params).forEach((key) => {
      paramsArr.push(key + "=" + params[key])
    })
    let gp = url.search(/\?/) === -1 ? '?':'&';
    url += `${gp}${paramsArr.join('&')}`
  }
  options = {...options}
  options.mode = 'cors';
  delete options.url
  if(data){
    delete options.data
    // fetch 不对传递表单传递数据做处理
    // 方法一 不安全 可能后端获取不到数据
    options.body = JSON.stringify(data)

    // 方法二 新建formData对象，再将数据赋值给formData对象
    // let formData = new FormData();  
    // Object.assign(formData,data)
    // options.body = formData;
  }
  options.headers={
    'Content-Type':'application/json'
  }
  return fetch(url,options,{credentials: 'include'})
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => ({err}))
}