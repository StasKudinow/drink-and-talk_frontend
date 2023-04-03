import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Categories from './Categories'
import Bar from './Bar'
import Register from './Register'

function App() {

  return (
    <div className="max-w-full min-w-64 min-h-screen bg-white font-sans">
      <Header />

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
    </div>
  )
}

export default App

