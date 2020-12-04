import axios from 'axios'

export function getData(url = '', params = {}) {
  return axios.get(url, {
    params: params
  }).then(res => {
    return res.data
  })
}

export function postData(url = '', params = {}) {
  return axios.post(url, {
    data: JSON.stringify(params),
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
  }).then(res => {
    return res.data
  })
}
