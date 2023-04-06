import Promo from './Promo'
import AboutProject from './AboutProject'

function Main({ loggedIn, onPopupOpen}) {

	return (
		<main>
			<Promo
				onPopupOpen={onPopupOpen}
				loggedIn={loggedIn}
			/>
			<AboutProject />
		</main>
	)
}

export default Main
