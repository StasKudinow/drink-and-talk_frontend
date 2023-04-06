import { useState } from 'react'
import { Formik, Form, Field } from 'formik'

import Popup from './Popup'
import Button from './Button'

import { validateLogin, validateEmail, validatePassword, validateConfirmPassword } from '../utils/validate'

function Register({ isOpen, onClose, isLoginClick }) {

  const [disabled, setDisabled] = useState(false)

  const inputClassName =
    `
      w-71
      h-10
      mb-4
      p-3
      font-normal
      text-text-xsm-all
      leading-5
      text-black
      rounded-default
    `

    const errorInputClassName =
    `
      w-71
      h-10
      mb-4
      p-3
      font-normal
      text-text-xsm-all
      leading-5
      text-error-red
      border
      border-error-red
      rounded-default
    `

  function handleLoginClick() {
    onClose()
    isLoginClick()
  }

  return (
    <Popup
      title="Регистрация"
      description="Пожалуйста введите ваши данные для регистрации на нашем сайте"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Formik
        initialValues={{
          login: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={values => {
          if (values.password === values.confirmPassword) {
            console.log(values)
            onClose()
          } else {
            console.log(false)
          }
        }}
        validateOnMount
      >
        {({ errors, touched, handleChange, handleSubmit, values, isValid }) => (
          <Form noValidate>
            <Field
              className={errors.login && touched.login ? errorInputClassName : inputClassName}
              type="text"
              name="login"
              placeholder="Логин"
              value={values.login}
              onChange={handleChange}
              validate={validateLogin}
              required
            />
            <Field
              className={errors.email && touched.email ? errorInputClassName : inputClassName}
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              validate={validateEmail}
              required
            />
            <Field
              className={errors.password && touched.password ? errorInputClassName : inputClassName}
              type="password"
              name="password"
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
              validate={validatePassword}
              required
            />
            <Field
              className={errors.confirmPassword && touched.confirmPassword ? errorInputClassName : inputClassName}
              type="password"
              name="confirmPassword"
              placeholder="Повторите пароль"
              value={values.confirmPassword}
              onChange={handleChange}
              validate={validateConfirmPassword}
              required
            />
            <label className="w-31 mb-4 flex gap-2 cursor-pointer">
              <input
                className="w-4 h-4 rounded-default cursor-pointer"
                type="checkbox"
              />
              <p className="font-normal text-text-xsm-all leading-5 text-gray">Мне есть 18 лет</p>
            </label>
            <p className="mb-4 font-normal text-text-xsm-all leading-5 text-white">
              Или&nbsp;
              <button
                type="button"
                className="text-orange hover:text-gray duration-300"
                onClick={handleLoginClick}>войдите
              </button>
              &nbsp;в аккаунт
            </p>
            <Button
              text="Регистрация"
              variant="auth"
              handler="submit"
              type="submit"
              onSubmit={handleSubmit}
              onDisabled={!isValid ? setDisabled(true) : setDisabled(false)}
              disabled={disabled}
            />
          </Form>
        )}
      </Formik>
    </Popup>
  )
}

export default Register
