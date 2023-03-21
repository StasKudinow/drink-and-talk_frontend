// import facebookIcon from '../images/icons/facebook.svg'
// import telegramIcon from '../images/icons/telegram.svg'
// import instagramIcon from '../images/icons/instagram.svg'
// Убрано пока нету соцсетей.

function Footer() {
  return (
    <footer className="w-[100%] bg-black">
      <div className="container mx-auto w-222 pt-11 pb-4 flex flex-start">
        <div className="w-124 flex justify-between">
          <div id="Contacts">
            <ul>
              <li className="font-normal text-text-xsm-all leading-[21px] text-white">
                <a href="mailto:holdmydeercompany@gmail.com">
                  Напишите нам
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-normal text-h3-web leading-[34px] text-center text-white mb-2">
              Drink and Talk
            </h3>
            <p className="font-normal text-xsm-all leading-[21px] text-center text-white mb-6">
              holdmydeercompany@gmail.com
            </p>
            <p className="font-normal text-xsm-all leading-[21px] text-center text-white">
              &copy; 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
