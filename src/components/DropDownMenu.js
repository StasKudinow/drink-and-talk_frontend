import { Link } from 'react-router-dom'

function DropDownMenu({ isOpen, onClose, onLogout }) {

  const menuClassName = (
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
  )

  function handleLogoutClick() {
    onLogout()
    onClose()
  }

  return (
    <ul className={menuClassName}>
      <li className="mb-4 font-normal text-text-sm-web text-white leading-5">
        <Link to="/profile" onClick={onClose}>Редактировать профиль</Link>
      </li>
      <li className="font-normal text-text-sm-web text-white leading-5">
        <Link to="/" onClick={handleLogoutClick}>Выход</Link>
      </li>
    </ul>
  )
}

export default DropDownMenu
