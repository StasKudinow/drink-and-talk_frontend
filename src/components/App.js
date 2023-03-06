import { Switch, Route } from "react-router-dom"

import Main from "./Main"

function App() {

  return (
    <div className="max-w-[100%] min-w-[320px] min-h-[100vh] bg-white font-sans">
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

      </Switch>
    </div>
  )
}

export default App
