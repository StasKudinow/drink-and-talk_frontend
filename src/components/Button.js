function Button(props) {

  return (
    <>
      <button
        className="w-[352px] h-[76px] rounded-default bg-black font-normal text-h3-web leading-[34px] text-white z-10"
        type="button"
      >
        {props.text}
      </button>
    </>
  )
}

export default Button
