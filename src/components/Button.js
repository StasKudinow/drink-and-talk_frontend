import { useHistory, useLocation } from 'react-router-dom'

function Button({
  variant,
  text,
  handler,
  url,
  type,
  onOpenMenu,
  isMenuOpen,
  onRefreshPage,
  onPopupOpen,
  onClose,
  onDisabled,
  disabled,
}) {

  const history = useHistory()
  const location = useLocation()

  function openLink() {
    history.push(url)
  }
  function returnNull() {
    return null
  }

  function handleClick() {
    switch (handler) {
      case 'link':
        openLink()
        break
      case 'drop-down':
        onOpenMenu()
        break
      case 'stop-stream':
        onRefreshPage()
        break
      case 'open-popup':
        onPopupOpen()
        break
      case 'close-popup':
        onClose()
        break
      case 'null':
        returnNull()
        break
      default:
        throw new Error('Button handler not found')
    }
  }
  // тут обработка другух вариантов использования кнопки

  let buttonClassName
  switch (variant) {
    case 'black-button':
      buttonClassName = `
          ${location.pathname === '/profile' ? 'w-51': 'w-70'}
          ${location.pathname === '/profile' ? 'h-11': 'h-15'}
          bg-black
          font-normal
          ${location.pathname === '/profile' ? 'text-text-sm-web': 'text-h3-web'}
          leading-7
          text-white
          rounded-default
          duration-300
          z-10
          active:shadow-button-shadow
          hover:bg-opacity-10
          hover:text-black
        `
      break
    case 'orange-button':
      buttonClassName = `
          w-70
          h-15
          bg-orange
          font-normal
          text-h3-web
          leading-7
          text-white
          rounded-default
          duration-300
          z-10
          active:shadow-button-shadow
          hover:bg-opacity-10
          hover:text-black
        `
      break
    case 'green-button':
      buttonClassName = `
          w-70
          h-15
          bg-green
          font-normal
          text-h3-web
          leading-7
          text-black
          rounded-default
          duration-300
          z-10
          active:shadow-button-shadow
          hover:bg-opacity-10
          hover:text-black
        `
      break
    case 'drop-down-button':
      buttonClassName = `
          w-6
          h-3
          bg-profile_button
          bg-cover
          duration-300
          ${isMenuOpen ? 'rotate-180' : ''}
        `
      break
    case 'close-popup':
      buttonClassName = `
          w-3
          h-3
          bg-popup_close_btn
          bg-cover
          absolute
          top-6
          right-6
        `
      break
    case 'submit':
      buttonClassName = `
          w-71
          h-10
          bg-orange
          font-normal
          ${location.pathname === '/profile' ? 'text-text-sm-web': 'text-22'}
          leading-6
          ${location.pathname === '/profile' ? 'text-white': 'text-black'}
          rounded-default
          duration-300
          z-10
          ${disabled ? 'opacity-50 cursor-auto' : 'active:shadow-button-shadow hover:bg-opacity-10 hover:text-white'}
        `
      break
    case 'login':
      buttonClassName = `
          bg-white
          font-normal
          text-h3-web
          leading-8
          text-black
        `
      break
    default:
      throw new Error('Button variant not found')
  }

  return (
    <button
      className={buttonClassName}
      onClick={handleClick}
      type={type}
      disabled={onDisabled}
    >
      {text}
    </button>
  )
}

export default Button
