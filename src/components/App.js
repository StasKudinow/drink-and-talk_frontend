import { Switch, Route } from "react-router-dom"

import Main from "./Main"
import Categories from "./Categories"

function App() {

  return (
    <div className="max-w-[100%] min-w-[320px] min-h-[100vh] bg-white font-sans">
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/categories">
          <Categories />
        </Route>

      </Switch>
    </div>
  )
}

export default App
