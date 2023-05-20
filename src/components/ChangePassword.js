import { useState } from 'react'
import { Formik, Form, Field } from 'formik'

import Popup from './Popup'
import Button from './Button'

import { validatePassword, validateConfirmPassword } from '../utils/validate'

function ChangePassword({ isOpen, onClose, onChangePassword }) {

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
      p-3
      font-normal
      text-text-xsm-all
      leading-5
      text-error-red
      border
      border-error-red
      rounded-default
    `

  function handleChangePasswordSubmit(values, {resetForm}) {
    onChangePassword(values.password, values.oldPassword)
      .then(() => {
        resetForm()
        onClose()
      })
      .catch((err) => {
        throw new Error(`Ошибка: ${err}`)
      })
  }

  return (
    <Popup
      variant="form"
      title="Смена пароля"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Formik
        initialValues={{
          oldPassword: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values, {resetForm}) => {
          if (values.password === values.confirmPassword && values.password !== values.oldPassword) {
            handleChangePasswordSubmit(values, {resetForm})
          }
        }}
        validateOnMount
      >
        {({ errors, touched, handleChange, values, isValid }) => (
          <Form noValidate>
            <Field
              className={errors.oldPassword && touched.oldPassword ? errorInputClassName : inputClassName}
              type="password"
              name="oldPassword"
              placeholder="Старый пароль"
              value={values.oldPassword}
              onChange={handleChange}
              validate={validatePassword}
              required
            />
            {errors.oldPassword && touched.oldPassword && (
              <span
                className="font-light text-error text-error-red leading-5"
              >
                {errors.oldPassword}
              </span>
            )}
            <Field
              className={errors.password && touched.password ? errorInputClassName : inputClassName}
              type="password"
              name="password"
              placeholder="Новый пароль"
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
            <Field
              className={errors.confirmPassword && touched.confirmPassword ? errorInputClassName : inputClassName}
              type="password"
              name="confirmPassword"
              placeholder="Повторите пароль"
              value={values.confirmPassword}
              onChange={handleChange}
              validate={() =>
                validateConfirmPassword(
                  values.password,
                  values.confirmPassword
                )
              }
              required
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span
                className="font-light text-error text-error-red leading-5"
              >
                {errors.confirmPassword}
              </span>
            )}
            <Button
              text="Сохранить изменения"
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

export default ChangePassword
