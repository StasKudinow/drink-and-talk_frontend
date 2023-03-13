import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'

function App() {
  return (
    <div className="max-w-full min-w-64 min-h-screen bg-white ">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
      </Switch>
    </div>
  )
}

export default App
