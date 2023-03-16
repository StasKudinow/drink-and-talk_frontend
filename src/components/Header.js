import { useLocation, useHistory } from "react-router-dom"

function Header() {

  const location = useLocation()
  const history = useHistory()

  function handleClick() {
    if (location.pathname === '/categories') {
      history.push('/')
    }
  }

  return (
    <header className="pt-10">
      <nav className="container mx-auto">
        <div>
          <ul className="flex">
            <li className="text-h3-web ml-33">
              <a href="#About" onClick={handleClick}>О сервисе</a>
            </li>
            <li className="text-h3-web ml-15">
              <a href="#Contacts">Контакты</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
