import { useLocation, useHistory } from "react-router-dom"

function Button(props) {

  const location = useLocation()
  const history = useHistory()

  function handleClick() {
    if (location.pathname === '/') {
      history.push('/categories')
    }
  }

  const buttonClassName = `
      ${props.buttonColor}
      ${props.buttonTextColor}
      ${props.buttonHoverText}
      w-70
      h-15
      font-normal
      text-h3-web
      leading-7
      rounded-default
      duration-300
      z-10
      active:shadow-button-shadow
      hover:bg-opacity-10
    `

  return (
    <button className={buttonClassName} type="button" onClick={handleClick}>
      {props.buttonText}
    </button>
  )
}

export default Button
