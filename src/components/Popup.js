function Popup() { //Тест

  return (
    <div className="w-full h-full bg-overlay flex justify-center items-center fixed top-0 left-0 pointer-events-none opacity-0">
      <div className="w-147 h-122 px-35 py-20 bg-black flex flex-col items-center rounded-default">
        <h1 className="text-h1-web text-white">hello world!</h1>
      </div>
    </div>
  )
}

export default Popup