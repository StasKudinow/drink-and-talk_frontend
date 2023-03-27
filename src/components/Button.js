import { useHistory } from 'react-router-dom'

function Button({
  buttonText,
  buttonColor,
  buttonTextColor,
  buttonHoverText,
  handler,
  url,
}) {

  const history = useHistory()

  const handleClick =
    handler === 'link'
      ? function handleClick() {
          history.push(url)
        }
      : handler
  // тут обработка другух вариантов использования кнопки

  const buttonClassName = `
      ${buttonColor}
      ${buttonTextColor}
      ${buttonHoverText}
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
    <button
      className={buttonClassName}
      type="button"
      onClick={handleClick}>
      {buttonText}
    </button>
  )
}

export default Button
