import Popup from './Popup'

function Login({ isLoginPopupOpen, onClose }) {

  const inputClassName =
  `
    w-71
    h-10
    mb-4
    p-3
    font-normal
    text-text-xsm-all
    leading-5
    rounded-default
  `

  return (
    <Popup
      title="Авторизация"
      description="Пожалуйста введите ваши данные для авторизации на нашем сайте"
      isLoginPopupOpen={isLoginPopupOpen}
      onClose={onClose}
    >
      <input
        className={inputClassName}
        type="text"
        name="login"
        placeholder="Логин"
      />
      <input
        className={inputClassName}
        type="text"
        name="password"
        placeholder="Пароль"
      />
      <p className="mb-4 font-normal text-text-xsm-all leading-5 text-white">
        <a className="text-orange hover:text-gray duration-300" href="#login">Забыли</a> пароль?
      </p>
    </Popup>
  )
}

export default Login
