import { Switch, Route } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Categories from "./Categories"

function App() {

  return (
    <div className="max-w-[100%] min-w-[320px] min-h-[100vh] bg-white font-sans">
      <Header />

      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/categories">
          <Categories />
        </Route>

      </Switch>

      <Footer />
    </div>
  )
}

export default App

