import axios from 'axios'
export default class Http {
  static setPromise (method, url, data) {
    return new Promise((resolve, reject) => {
      switch (method.toUpperCase()) {
        case 'GET':
          axios.get(url, {params: data}).then(res => {
              if (res) {
                resolve(res.data)
              } else {
                reject(new Error())
              }
            }).catch(err => {
              reject(err)
            })
          break
        case 'POST':
        case 'PUT':
          axios({
            method: method,
            url: url,
            data: data,
            transformRequest: method === 'POST' && url.includes('/gologin')? [
                  data => {
                    let ret = ''
                    for (let it in data) {
                      ret +=
                          encodeURIComponent(it) +
                          '=' +
                          encodeURIComponent(data[it]) +
                          '&'
                    }
                    return ret
                  }
                ]
                : null
          }).then(res => {
              if (res) {
                resolve(res.data)
              } else {
                reject(new Error())
              }
            }).catch(err => {
              reject(err)
            })
          break
        case 'DELETE':
          axios.delete(url, {data: data}).then(res => {
              if (res) {
                resolve(res.data)
              } else {
                reject(new Error())
              }
            }).catch(err => {
              reject(err)
            })
          break
      }
    })
  }
}
