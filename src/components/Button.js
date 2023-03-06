function Button(props) {

  // @TODO refactoring
  const buttonClassName = (
    `
      ${props.buttonStyle}
      w-[352px]
      h-[76px]
      hover:bg-white
      font-normal
      text-h3-web
      leading-[34px]
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
