import testImage from '../images/test_bar_card_img.jpg' //TODO: захардкодил картинку бара пока

function BarCard(props) {

  return (
    <button
      className="w-70 h-80 bg-black rounded-default group"
      type="button"
      onClick={props.onClick}
    >
      <p className="font-normal text-h3-mob leading-8 text-white hidden group-hover:block">{props.about}</p>
      <div className="p-4 group-hover:hidden">
        <div className="mb-4 flex justify-between">
          <h3 className="font-normal text-h3-mob leading-6 text-white">{props.name}</h3>
          <p className="font-normal text-text-sm-web leading-6 text-white">{props.users}/8</p>
        </div>
        <img
          className="w-62 h-46 mb-4 rounded-default"
          src={testImage} //TODO: {props.image}
          alt="обложка"
        />
        <div className="flex flex-col items-start gap-3">
          <p className="font-normal text-text-sm-web leading-6 text-white">{props.drinks}</p>
          <p className="font-normal text-text-sm-web leading-6 text-white">{props.topics}</p>
        </div>
      </div>
    </button>
  )
}

export default BarCard
