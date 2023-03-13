function Button(props) {

//TODO: refactoring
  const buttonClassName = (
    `
      w-[352px]
      h-[76px]
      ${props.buttonColor}
      hover:bg-white
      font-normal
      text-h3-web
      leading-[34px]
      ${props.buttonTextColor}
      hover:text-black
      rounded-default
      z-10
      active:shadow-button-shadow
    `
  )

	return (
		<>
			<button
				className={buttonClassName}
				type="button"
			>
				{props.buttonText}
			</button>
		</>
	)
}

export default Button
