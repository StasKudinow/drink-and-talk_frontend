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
    ${props.isOpen ? 'pointer-events-auto opacity-1' : 'pointer-events-none opacity-0'}
  `

  let popupContainerClassName
  let popupTitleClassName
  let popupDescriptionClassName

  switch (props.variant) {
    case 'form':
      popupContainerClassName = `
        w-147
        px-35
        py-20
        bg-black
        flex
        flex-col
        rounded-default
        relative
      `
      popupTitleClassName = `
        mb-1
        font-normal
        text-h2-web
        leading-h3-web
        text-white
      `
      popupDescriptionClassName = `
        mb-4
        w-71
        font-light
        text-text-xsm-all
        leading-5
        text-white
      `
      break
    case 'config':
      popupContainerClassName = `
        w-147
        px-38
        py-12
        bg-black
        rounded-default
        relative
      `
      popupTitleClassName = ''
      popupDescriptionClassName = ''
      break
    default:
      throw new Error('Popup variant not found')
  }

  return (
    <div className={popupClassName}>
      <div className={popupContainerClassName}>
        <Button
          variant="close-popup"
          handler="close-popup"
          type="button"
          onClose={props.onClose}
        />
        <h2 className={popupTitleClassName}>{props.title}</h2>
        <p className={popupDescriptionClassName}>{props.description}</p>
          {props.children}
      </div>
    </div>
  )
}

export default Popup
