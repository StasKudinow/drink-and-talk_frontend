import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Categories from './Categories'
import Bar from './Bar'
import Register from './Register'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false)
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false)

  function closeAllPopups() {
    setIsLoginPopupOpen(false)
    setIsRegisterPopupOpen(false)
  }

  function handleLoginPopupOpen() {
    setIsLoginPopupOpen(true)
  }

  function handleRegisterPopupOpen() {
    setIsRegisterPopupOpen(true)
  }

  return (
    <div className="max-w-full min-w-64 min-h-screen bg-white font-sans">
      <Header
        onPopupOpen={handleLoginPopupOpen}
        loggedIn={loggedIn}
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
    </div>
  )
}

export default App

