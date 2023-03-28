import { useHistory } from 'react-router-dom'

function Button({
  variant,
  text,
  handler,
  url,
  onOpenMenu,
  isMenuOpen,
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
    }
  }
  // тут обработка другух вариантов использования кнопки

  let buttonClassName
  if (variant === 'black-button') {
    buttonClassName = (
      `
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
    )
  } else if (variant === 'orange-button') {
    buttonClassName = (
      `
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
    )
  } else if (variant === 'green-button') {
    buttonClassName = (
      `
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
    )
  } else if (variant === 'drop-down-button') {
    buttonClassName = (
      `
        w-6
        h-3
        bg-profile_button
        bg-cover
        duration-300
        ${isMenuOpen ? 'rotate-180' : ''}
      `
    )
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
