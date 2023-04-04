import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Categories from './Categories'
import Bar from './Bar'
import Register from './Register'
import Login from './Login'


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false)

  function closeAllPopups() {
    setIsLoginPopupOpen(false)
  }

  function handleLoginPopupOpen() {
    setIsLoginPopupOpen(true)
  }

  return (
    <div className="max-w-full min-w-64 min-h-screen bg-white font-sans">
      <Header
        onPopupOpen={handleLoginPopupOpen}
        loggedIn={loggedIn}
      />

      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/categories">
          <Categories />
        </Route>

        <Route path="/bar">
          <Bar />
        </Route>

      </Switch>

      <Footer />

      <Register />

      <Login
        isLoginPopupOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  )
}

export default App

