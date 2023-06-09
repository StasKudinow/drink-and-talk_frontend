import { useState } from 'react'
import { Formik, Form, Field } from 'formik'

import Popup from './Popup'
import Button from './Button'

import { validateEmail, validatePassword } from '../utils/validate'

function Login({ isOpen, onClose, onLogin }) {

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
    rounded-default
  `

  const errorInputClassName =
  `
    w-71
    h-10
    p-3
    font-normal
    text-text-xsm-all
    leading-5
    text-error-red
    border
    border-error-red
    rounded-default
  `

  function handleLoginSubmit(values) {
    onLogin(values.email, values.password)
      .catch((err) => {
        throw new Error(`Ошибка: ${err}`)
      })
  }

  return (
    <Popup
      variant="form"
      title="Авторизация"
      description="Пожалуйста введите ваши данные для авторизации на нашем сайте"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, {resetForm}) => {
          handleLoginSubmit(values)
          resetForm()
          onClose()
        }}
        validateOnMount
      >
        {({ errors, touched, handleChange, values, isValid }) => (
          <Form noValidate>
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
            {errors.email && touched.email && (
              <span
                className="font-light text-error text-error-red leading-5"
              >
                {errors.email}
              </span>
            )}
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
            {errors.password && touched.password && (
              <span
                className="font-light text-error text-error-red leading-5"
              >
                {errors.password}
              </span>
            )}
            <p className="mb-4 font-normal text-text-xsm-all leading-5 text-white">
              <a className="text-orange hover:text-gray duration-300" href="#forgot-password">Забыли</a> пароль?
            </p>
            <Button
              text="Авторизация"
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

export default Login
