import axios from 'axios'

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res
    } else {
      return Promise.reject(res.status)
    }
  }

  register = (username, email, password) => {
    return axios
      .post(
        `${this._baseUrl}/users/`,
        {username, email, sex: 1, password},
        {'Content-Type': 'application/json'}
      )
        .then(this._checkResponse)
  }

  login = (email, password) => {
    return axios
      .post(
        `${this._baseUrl}/login/`,
        {email, password},
        {'Content-Type': 'application/json'}
      )
        .then(this._checkResponse)
  }
}

const api = new Api({
  baseUrl: 'http://127.0.0.1:8000/api/v1'
})

export default api
