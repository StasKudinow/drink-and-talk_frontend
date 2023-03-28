import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Categories from './Categories'
import Bar from './Bar'
import Popup from './Popup'

function App() {

  return (
    <div className="max-w-full min-w-[320px] min-h-[100vh] bg-white font-sans">
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

      {/* <Popup /> */}
    </div>
  )
}

export default App

