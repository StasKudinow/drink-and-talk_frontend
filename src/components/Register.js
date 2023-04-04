import Popup from './Popup'

function Register() {

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
      title="Регистрация"
      description="Пожалуйста введите ваши данные для регистрации на нашем сайте"
    >
      <input
        className={inputClassName}
        type="text"
        name="login"
        placeholder="Логин"
      />
      <input
        className={inputClassName}
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className={inputClassName}
        type="text"
        name="password"
        placeholder="Пароль"
      />
      <input
        className={inputClassName}
        type="text"
        name="password"
        placeholder="Повторите пароль"
      />
      <label className="w-31 mb-4 flex gap-2 cursor-pointer">
        <input
          className="w-4 h-4 rounded-default cursor-pointer"
          type="checkbox"
        />
        <p className="font-normal text-text-xsm-all leading-5 text-gray">Мне есть 18 лет</p>
      </label>
      <p className="mb-4 font-normal text-text-xsm-all leading-5 text-white">
        Или <a className="text-orange hover:text-gray duration-300" href="#login">войдите</a> в аккаунт
      </p>
    </Popup>
  )
}

export default Register
