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

export default function request(options = {},params = {}) {
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
    options.body = JSON.stringify({
      data
    })
  }
  options.headers={
    'Content-Type':'application/json'
  }
  return fetch(url,options,{credentials: 'include'})
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => ({err}))
}