import facebookIcon from '../images/icons/facebook.png'
import telegramIcon from '../images/icons/telegram.png'
import instagramIcon from '../images/icons/instagram.png'

function Footer() {
	return (
    <footer>
      <div className=" bg-footerColor w-screen relative">
        <div className="container mx-auto pt-10 pb-10 flex">
          <div className="ml-50">
            <ul>
              <li className="text-white text-[18px] mb-4">
                Контакты
              </li>
              <li className="text-white text-[18px]">
                О нас
              </li>
            </ul>
          </div>
          <div className="absolute left-1/2">
            <div>
              <h3 className="text-[30px] text-white">
                Drink and Talk
              </h3>
            </div>
            <div className="flex justify-between pt-[25px]">
              <img src={facebookIcon} alt="facebook-icon" />
              <img src={telegramIcon} alt="telegram-icon" />
              <img
                src={instagramIcon}
                alt="instagram-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
