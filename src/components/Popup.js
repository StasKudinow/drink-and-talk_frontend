import Button from './Button'

function Popup(props) {

  return (
    <div className="w-full h-full bg-overlay flex justify-center items-center fixed top-0 left-0 z-20 pointer-events-auto opacity-1">
      <div className="w-147 px-35 py-20 bg-black flex flex-col rounded-default relative">
        <Button
          variant="close-popup"
        />
        <h2 className="mb-1 font-normal text-h2-web leading-46 text-white">{props.title}</h2>
        <p className="w-71 mb-4 font-light text-text-xsm-all leading-5 text-white">{props.description}</p>
          <form>
            {props.children}
            <Button
              text={props.title}
              variant="submit-popup"
            />
          </form>
      </div>
    </div>
  )
}

export default Popup
