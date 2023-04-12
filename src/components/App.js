import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

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



function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false)
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false)
  const [isChangePasswordPopupOpen, setIsChangePasswordPopupOpen] = useState(false)
  const [isCreateBarPopupOpen, setIsCreateBarPopupOpen] = useState(false)

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
  }

  return (
    <div className="max-w-full min-w-64 min-h-screen bg-white font-sans">
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

      </Switch>

      <Footer />

      <Register
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        isLoginClick={handleLoginPopupOpen}
      />

      <Login
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
      />

      <ChangePassword
        isOpen={isChangePasswordPopupOpen}
        onClose={closeAllPopups}
      />

      <CreateBar
        isOpen={isCreateBarPopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  )
}

export default App

