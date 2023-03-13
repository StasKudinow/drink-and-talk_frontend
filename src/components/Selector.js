function Selector(props) {
  return (
    <div className="h-[84px] px-2 flex justify-center items-center bg-black rounded-default">
      <p className="font-normal text-h3-web leading-[34px] text-white">{props.text}</p>
    </div>
  )
}

export default Selector
