import React from 'react'
// import handleClick from './Scroll'

function Header() {
  return (
    <header className="pt-10">
      <nav className="container w-widthHeader mx-auto">
        <div>
          <ul className="flex">
            <li className="text-h3-web ml-33">
              <a href="#About">О сервисе</a>
            </li>
            <li className="text-h3-web ml-28">
              <a href="#Contacts">Контакты</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
