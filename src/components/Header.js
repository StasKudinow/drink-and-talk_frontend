import React from 'react'

function Header() {
  return (
    <header className="pt-10">
      <nav className="container mx-auto">
        <div>
          <ul className="flex">
            <li className="text-h3-web ml-28">
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
