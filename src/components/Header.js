import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from './Button'
import DropDownMenu from './DropDownMenu'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const history = useHistory()

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
    <header className="container mx-auto w-222 pt-7 flex justify-between">
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
      <div className="w-18 flex flex-row items-center gap-2 relative">
        <div className="w-10 h-10 bg-profile_icon bg-cover" />
        <Button
          variant="drop-down-button"
          handler="drop-down"
          onOpenMenu={handleProfileButtonClick}
          isMenuOpen={isMenuOpen}
        />
        <DropDownMenu
          isOpen={isMenuOpen}
          onClose={handleCloseMenu}
        />
      </div>
    </header>
  )
}

export default Header
