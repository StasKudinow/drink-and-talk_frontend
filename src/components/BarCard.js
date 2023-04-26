import testImage from '../images/test_bar_card_img.jpg' //TODO: захардкодил картинку бара пока

function BarCard(props) {

  return (
    <button
      className="w-70 h-80 bg-black flex justify-center items-center rounded-default group relative overflow-hidden"
      type="button"
      onClick={props.onClick}
    >
      <div className="w-full h-full flex justify-center items-center absolute">
        <div className="w-62 flex justify-between absolute top-4 duration-300 group-hover:-top-7">
          <h3 className="font-normal text-h3-mob leading-6 text-white">{props.name}</h3>
          <p className="font-normal text-text-sm-web leading-6 text-white">{props.users}/8</p>
        </div>
        <div className="p-4 invisible opacity-0 duration-300 z-10 group-hover:visible group-hover:opacity-100">
          <p className="font-normal text-h3-mob leading-8 text-white">{props.about}</p>
        </div>
        <div className="w-62 absolute bottom-4 left-4 duration-300 group-hover:-bottom-13">
          <p className="mb-2 text-start font-normal text-text-sm-web leading-6 text-white">{props.drinks}</p>
          <p className="text-start font-normal text-text-sm-web leading-6 text-white">{props.topics}</p>
        </div>
      </div>
      <div className="w-62 h-46 duration-300 group-hover:w-full group-hover:h-full">
        <img
          className="w-full h-full bg-cover bg-no-repeat bg-center rounded-default group-hover:opacity-30"
          src={testImage} //TODO: {props.image}
          alt="обложка"
        />
      </div>
    </button>
  )
}

export default BarCard
