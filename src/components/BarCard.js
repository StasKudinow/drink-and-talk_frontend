import testImage from '../images/test_bar_card_img.jpg' //TODO: захардкодил картинку бара пока

function BarCard(props) {

  return (
    <button
      className="w-70 h-80 bg-black rounded-default group relative"
      type="button"
      onClick={props.onClick}
    >
      <img
        className="w-full h-full rounded-default opacity-50 absolute top-0 right-0 hidden group-hover:block animate-smooth"
        src={testImage} //TODO: {props.image}
        alt="обложка"
      />
      <div className="w-full h-full p-4 absolute top-0 right-0 hidden group-hover:block">
        <p className="font-normal text-h3-mob leading-8 text-white">{props.about}</p>
      </div>
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
