function Button(props) {
  const buttonClassName = `
      ${props.buttonColor}
      ${props.buttonHover}
      ${props.buttonTextColor}
      w-70
      h-15
      font-normal
      text-h3-web
      leading-[34px]
      ${props.buttonTextColor}
      ${props.buttonHoverText}
      leading-7
      rounded-default
      duration-300
      z-10
      hover:bg-opacity-10
      hover:text-black
      active:shadow-button-shadow
    `

  return (
    <button className={buttonClassName} type="button">
      {props.buttonText}
    </button>
  )
}

export default Button
