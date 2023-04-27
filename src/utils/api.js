import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/v1'

const checkResponse = (res) => {
  if (res.ok) {
    return res
  } else {
    return Promise.reject(res.status)
  }
}

export const register = (username, email, password) => {
  return axios
    .post(
      `${BASE_URL}/users/`,
      {username, email, sex: 1, password},
      {'Content-Type': 'application/json', mode: 'no-cors'}
    )
      .then(checkResponse)
}

export const login = (email, password) => {
  return axios
    .post(
      `${BASE_URL}/login/`,
      {email, password},
      {'Content-Type': 'application/json', mode: 'no-cors'}
    )
      .then(checkResponse)
}
