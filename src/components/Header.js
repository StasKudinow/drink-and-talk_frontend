import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import Button from './Button'
import DropDownMenu from './DropDownMenu'

function Header({ loggedIn, onPopupOpen, onLogout }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const history = useHistory()
  const location = useLocation()

  let profileButton

  if (loggedIn) {
    profileButton =
      <Button
        variant="drop-down-button"
        handler="drop-down"
        type="button"
        onOpenMenu={handleProfileButtonClick}
        isMenuOpen={isMenuOpen}
      />
  } else {
    profileButton =
      <Button
        variant="login"
        handler="open-popup"
        type="button"
        text="Войти"
        onPopupOpen={onPopupOpen}
      />
  }

  function handleAboutClick() {
    history.push('/')
  }

  function handleProfileButtonClick() {
    setIsMenuOpen(!isMenuOpen)
  }

  function handleCloseMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className={`container mx-auto w-222 pt-7 ${location.pathname === '/profile' ? 'hidden' : 'flex'} justify-between`}>
      <nav>
        <ul className="w-66 flex justify-between">
          <li>
            <a className="font-normal text-h3-web leading-8 text-black" href="#About" onClick={handleAboutClick}>О сервисе</a>
          </li>
          <li>
            <a className="font-normal text-h3-web leading-8 text-black" href="#Contacts">Контакты</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row items-center gap-2 relative">
        <div className="w-10 h-10 bg-profile_icon bg-cover" />
        {profileButton}
        <DropDownMenu
          isOpen={isMenuOpen}
          onClose={handleCloseMenu}
          onLogout={onLogout}
        />
      </div>
    </header>
  )
}

export default Header
