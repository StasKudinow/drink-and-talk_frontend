import { Link } from 'react-router-dom'

function DropDownMenu({ isOpen, onClose }) {

  const popupClassName = (
    `
      w-51
      h-27
      px-5
      py-7
      bg-black
      rounded-default
      flex-col
      absolute
      top-13
      right-0
      z-10
      ${isOpen ? 'flex' : 'hidden'}
    `
  ) // Анимации не работают с display: none. Подумать

  return (
    <ul className={popupClassName}>
      <li className="mb-4 font-normal text-text-sm-web text-white leading-5">
        <Link to="/profile" onClick={onClose}>Редактировать профиль</Link>
      </li>
      <li className="font-normal text-text-sm-web text-white leading-5">
        <Link to="/" onClick={onClose}>Выход</Link>
      </li>
    </ul>
  )
}

export default DropDownMenu
