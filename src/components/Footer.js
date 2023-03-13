// import facebookIcon from '../images/icons/facebook.svg'
// import telegramIcon from '../images/icons/telegram.svg'
// import instagramIcon from '../images/icons/instagram.svg'
// Убрано пока нету соцсетей.

function Footer() {
  return (
    <footer>
      <div className=" bg-footerColor">
        <div className="w-bg-size mx-auto">
          <div className="w-bg-size-container-footer pt-10 pb-10 flex justify-between">
            <div id="Contacts" className="ml-50">
              <ul>
                <li className="text-white text-text-xsm-all mb-4">
                  <a href="mailto:holdmydeercompany@gmail.com">
                    Написать нам
                  </a>
                </li>
                <li className="text-white text-text-xsm-all">
                  О нас
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h3 className="text-h3-web text-white">
                  Drink and Talk
                </h3>
                <p className="text-xsm-all text-white">
                  &copy; 2023
                </p>
              </div>
              {/* <div className="flex justify-between pt-5">
								<a href="#">
									<img
										src={facebookIcon}
										alt="facebook-icon-svg"
									/>
								</a>
								<a href="#">
									<img
										src={telegramIcon}
										alt="telegram-icon-svg"
									/>
								</a>
								<a href="#">
									<img
										src={instagramIcon}
										alt="instagram-icon-svg"
									/>
								</a>
							</div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
