import axios from 'axios'

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl
  }

  _checkResponse = (res) => {
    if (res.data) {
      return res
    } else {
      console.log(res)
      return Promise.reject(res.status)
    }
  }

  post(endPoint, data) {
    return axios
      .post(
        `${this._baseUrl}/${endPoint}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then(this._checkResponse)
  }

  get(endPoint) {
    return axios
      .get(
        `${this._baseUrl}/${endPoint}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
        .then(this._checkResponse)
  }

  changePass(endPoint, data) {
    return axios
      .post(
        `${this._baseUrl}/${endPoint}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
  }

}

const api = new Api({
  baseUrl: 'http://127.0.0.1:8000/api/v1'
})

export default api
