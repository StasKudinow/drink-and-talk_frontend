import { useHistory } from 'react-router-dom'

function Button({
  variant,
  text,
  handler,
  url,
  onOpenMenu,
  isMenuOpen,
  onRefreshPage,
  onPopupOpen,
  onClose,
}) {
  const history = useHistory()

  // const handleClick =
  //   handler === 'link'
  //     ? function openLink() {
  //         history.push(url)
  //       }
  //   : handler === 'drop-down'
  //       function openMenu() {
  //         onOpenMenu()
  //       }

  function openLink() {
    history.push(url)
  }

  function handleClick() {
    if (handler === 'link') {
      openLink()
    } else if (handler === 'drop-down') {
      onOpenMenu()
    } else if (handler === 'stop-stream') {
      onRefreshPage()
    } else if (handler === 'open-popup') {
      onPopupOpen()
    } else if (handler === 'close-popup') {
      onClose()
    }
  }
  // тут обработка другух вариантов использования кнопки

  let buttonClassName
  switch (variant) {
    case 'black-button':
      buttonClassName = `
          w-70
          h-15
          bg-black
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
    case 'submit-popup':
      buttonClassName = `
          w-71
          h-10
          bg-orange
          font-normal
          text-22
          leading-6
          text-black
          rounded-default
          duration-300
          z-10
          active:shadow-button-shadow
          hover:bg-opacity-10
          hover:text-white
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
      type="button">
      {text}
    </button>
  )
}

export default Button
