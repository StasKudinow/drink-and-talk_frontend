function Button(props) {
  const buttonClassName = `
      ${props.buttonColor}
      ${props.buttonHover}
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
    `

  return (
    <button className={buttonClassName} type="button">
      {props.buttonText}
    </button>
  )
}

export default Button
