// import facebookIcon from '../images/icons/facebook.svg'
// import telegramIcon from '../images/icons/telegram.svg'
// import instagramIcon from '../images/icons/instagram.svg'
// Убрано пока нету соцсетей.

import { useHistory } from 'react-router-dom'

function Footer() {

  const history = useHistory()

  function handleAboutClick() {
    history.push('/')
  }

  return (
    <footer className="w-full bg-black">
      <div className="container mx-auto w-222 pt-11 pb-4 flex flex-start">
        <div className="w-128 flex justify-between">
          <ul id="Contacts">
            {/* <li>
              <a
                href="#"
                className="mb-3 font-normal text-text-xsm-all leading-5 text-white"
              >Контакты</a>
            </li> */}
            <li>
              <a
                href="#About"
                className="font-normal text-text-xsm-all leading-5 text-white"
                onClick={handleAboutClick}
              >О сервисе</a>
            </li>
          </ul>
          <div>
            <h3 className="font-normal text-h3-web leading-8 text-center text-white mb-2">
              Drink and Talk
            </h3>
            <a
              className="font-normal text-xsm-all leading-5 text-center text-white"
              href="mailto:holdmydeercompany@gmail.com"
            >
              holdmydeercompany@gmail.com
            </a>
            <p className="mt-6 font-normal text-xsm-all leading-8 text-center text-white">
              &copy; 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
