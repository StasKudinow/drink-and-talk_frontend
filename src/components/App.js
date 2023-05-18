import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Categories from './Categories'
import Bar from './Bar'
import ProtectedRoute from './ProtectedRoute'
import Register from './Register'
import Login from './Login'
import ChangePassword from './ChangePassword'
import CreateBar from './CreateBar'
import Profile from './Profile'
import BarList from './BarList'

import api from '../utils/api'

import { CurrentUserContext } from '../contexts/CurrentUserContext'


function App() {

  const [loggedIn, setLoggedIn] = useState(true)
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false)
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false)
  const [isChangePasswordPopupOpen, setIsChangePasswordPopupOpen] = useState(false)
  const [isCreateBarPopupOpen, setIsCreateBarPopupOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const history = useHistory()

  function closeAllPopups() {
    setIsLoginPopupOpen(false)
    setIsRegisterPopupOpen(false)
    setIsChangePasswordPopupOpen(false)
    setIsCreateBarPopupOpen(false)
  }

  function handleLoginPopupOpen() {
    setIsLoginPopupOpen(true)
  }

  function handleRegisterPopupOpen() {
    setIsRegisterPopupOpen(true)
  }

  function handleChangePasswordPopupOpen() {
    setIsChangePasswordPopupOpen(true)
  }

  function handleCreateBarPopupOpen() {
    setIsCreateBarPopupOpen(true)
  }

  function onLogout() {
    setLoggedIn(false)
    localStorage.clear()
  }

  function onRegister(username, email, password) {
    return api.post('users/', {username, email, password})
      .then((res) => {
        return res
      })
  }

  function onLogin(email, password) {
    return api.post('jwt/create/', {email, password})
      .then((res) => {
        if (res.data.access) {
          localStorage.setItem('token', res.data.access)
          setLoggedIn(true)
          history.push('/categories')
        }
      })
  }

  function checkToken() {
    return api.get('users/me/')
      .then((res) => {
        if (res) {
          setLoggedIn(true)
        }
      })
      .catch((err) => {
        throw new Error(`Ошибка: ${err}`)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  useEffect(() => {
    if (loggedIn) {
      api.get('users/me/')
        .then((res) => {
          setCurrentUser(res.data)
        })
        .catch((err) => {
          throw new Error(`Ошибка: ${err}`)
        })
    }
  }, [loggedIn])

  return (
    <div className="max-w-full min-w-64 min-h-screen bg-white font-sans">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          onPopupOpen={handleLoginPopupOpen}
          loggedIn={loggedIn}
          onLogout={onLogout}
        />

        <Switch>

          <Route exact path="/">
            <Main
              onPopupOpen={handleRegisterPopupOpen}
              loggedIn={loggedIn}
            />
          </Route>

          <ProtectedRoute
            path="/categories"
            component={Categories}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            path="/bar"
            component={Bar}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onPopupOpen={handleChangePasswordPopupOpen}
          />

          <ProtectedRoute
            path="/barlist"
            component={BarList}
            loggedIn={loggedIn}
            onPopupOpen={handleCreateBarPopupOpen}
          />

        </Switch>

        <Footer />

        <Register
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          isLoginClick={handleLoginPopupOpen}
          onRegister={onRegister}
          onLogin={onLogin}
        />

        <Login
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onLogin={onLogin}
        />

        <ChangePassword
          isOpen={isChangePasswordPopupOpen}
          onClose={closeAllPopups}
        />

        <CreateBar
          isOpen={isCreateBarPopupOpen}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
