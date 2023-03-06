import Promo from './Promo'
import AboutProject from './AboutProject'

function Main(props) {

  return (
    <main>
      <Promo
        buttonStyle={props.buttonStyle}
        buttonText={props.buttonText}
      />
      <AboutProject />
    </main>
  )
}

export default Main
