import { Link } from 'react-router-dom'

function PopupInHeader({ isOpen }) {

  const popupClassName = (
    `
      w-51
      h-27
      px-5
      py-7
      bg-black
      rounded-default
      flex
      flex-col
      absolute
      top-13
      right-0
      z-10
      duration-300
      delay-150
      ${isOpen ? 'opacity-1' : 'opacity-0'}
    `
  )

  return (
    <div className={popupClassName}>
      <Link to="/profile" className="mb-4 font-normal text-text-sm-web text-white leading-5">Редактировать профиль</Link>
      <Link to="/" className="font-normal text-text-sm-web text-white leading-5">Выход</Link>
    </div>
  )
}

export default PopupInHeader
