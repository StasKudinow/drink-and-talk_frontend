import Button from './Button'

function Popup(props) {

  const popupClassName = `
    w-full
    h-full
    bg-overlay
    flex
    justify-center
    items-center
    fixed
    top-0
    left-0
    z-20
    duration-300
    ${props.isLoginPopupOpen ? 'pointer-events-auto opacity-1' : 'pointer-events-none opacity-0'}
  `

  return (
    <div className={popupClassName}>
      <div className="w-147 px-35 py-20 bg-black flex flex-col rounded-default relative">
        <Button
          variant="close-popup"
          handler="close-popup"
          onClose={props.onClose}
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
