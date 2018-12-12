import Axios from 'axios'
export default function ajax (url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = Axios.get(url)
    } else {
      promise = Axios.post(url, data)
    }
    promise.then(ok => resolve(ok.data)).catch(err => reject(err))
  })
}
