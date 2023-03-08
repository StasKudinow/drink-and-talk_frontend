import { Switch, Route } from "react-router-dom"

import Header from "./Header"
import Footer from './Footer'
import Main from "./Main"

function App() {

	return (
			<div className="max-w-[100%] min-w-[320px] min-h-[100vh] bg-white font-sans">
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
