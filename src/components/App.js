import { useState, useEffect } from "react"
import { Switch, Route, useLocation } from "react-router-dom"

import Main from "./Main"

function App() {

  // @TODO refactoring
  const [buttonStyle, setButtonStyle] = useState('')
  const [buttonText, setButtonText] = useState('')

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      setButtonStyle('bg-black text-white')
      setButtonText('Начать видео - связь')
    }
  }, [location.pathname])

  return (
    <div className="max-w-[100%] min-w-[320px] min-h-[100vh] bg-white font-sans">
      <Switch>

        <Route exact path="/">
          <Main
            buttonStyle={buttonStyle}
            buttonText={buttonText}
          />
        </Route>

      </Switch>
    </div>
  )
}

export default App
