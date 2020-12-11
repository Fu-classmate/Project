import axios from 'axios'

// get请求
export function getData(url = '', params = {}) {
  return axios.get(url, {
      params: params
    })
    .then(res => {
      return res.data
    })
}

// post请求
export function postData(url = '', params = {}) {
  return axios.post(url, params)
    .then(res => {
      return res.data
    }).catch(err => {
      console.log(err)
    })
}
