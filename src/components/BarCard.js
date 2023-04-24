import testImage from '../images/test_bar_card_img.jpg' //TODO: захардкодил картинку бара пока

function BarCard(props) {

  return (
    <button
      className="w-70 h-80 bg-black rounded-default group relative"
      type="button"
      onClick={props.onClick}
    >
      <div className="w-full h-full p-4 absolute top-0 right-0 z-10 hidden group-hover:block">
        <p className="font-normal text-h3-mob leading-8 text-white">{props.about}</p>
      </div>
      <div className="p-4 group-hover:p-0">
        <div className="mb-4 flex justify-between group-hover:hidden">
          <h3 className="font-normal text-h3-mob leading-6 text-white">{props.name}</h3>
          <p className="font-normal text-text-sm-web leading-6 text-white">{props.users}/8</p>
        </div>
        <div
          className="
            w-62
            h-46
            mb-4
            group-hover:w-full
            group-hover:h-full
            group-hover:absolute
            group-hover:inset-0
            group-hover:duration-300
          "
        >
          <img
            className="w-full h-full rounded-default group-hover:opacity-50 duration-500"
            src={testImage} //TODO: {props.image}
            alt="обложка"
          />
        </div>
        <div className="flex flex-col items-start gap-3 group-hover:hidden">
          <p className="font-normal text-text-sm-web leading-6 text-white">{props.drinks}</p>
          <p className="font-normal text-text-sm-web leading-6 text-white">{props.topics}</p>
        </div>
      </div>
    </button>
  )
}

export default BarCard
