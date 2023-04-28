import { useState } from 'react'
import { Formik, Form, Field } from 'formik'

import Popup from './Popup'
import Button from './Button'

import { validateLogin, validateEmail, validatePassword, validateConfirmPassword, validateCheckbox } from '../utils/validate'

function Register({ isOpen, onClose, isLoginClick, onRegister, onLogin }) {

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

  function handleRegisterSubmit(values) {
    onRegister(values.username, values.email, values.password)
      .then(() => {
        onLogin(values.email, values.password)
        console.log('Success!')
      })
      .catch((err) => {
        throw new Error(`Ошибка: ${err}`)
      })
  }


  function handleLoginClick() {
    onClose()
    isLoginClick()
  }

  return (
    <Popup
      variant="form"
      title="Регистрация"
      description="Пожалуйста введите ваши данные для регистрации на нашем сайте"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values, {resetForm}) => {
          if (values.password === values.confirmPassword) {
            handleRegisterSubmit(values)
            resetForm()
            onClose()
          }
        }}
        validateOnMount
      >
        {({ errors, touched, handleChange, values, isValid }) => (
          <Form noValidate>
            <Field
              className={errors.username && touched.username ? errorInputClassName : inputClassName}
              type="text"
              name="username"
              placeholder="Логин"
              value={values.username}
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
              <Field
                className="w-4 h-4 rounded-default cursor-pointer"
                type="checkbox"
                name="toggle"
                validate={validateCheckbox}
                required
              />
              <p className={`font-normal text-text-xsm-all leading-5 duration-300 ${values.toggle ? 'text-white' : 'text-gray'}`}>Мне есть 18 лет</p>
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
              variant="submit"
              handler="null"
              type="submit"
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
