import { useState } from 'react'
import { Formik, Form, Field } from 'formik'

import Button from './Button'
import VideoBlock from './VideoBlock'

import { validateLogin } from '../utils/validate'

function Profile({ onPopupOpen }) {

  const [disabled, setDisabled] = useState(false)

  const inputClassName =
    `
      w-70
      h-10
      mb-6
      p-3
      font-normal
      text-text-xsm-all
      leading-5
      text-black
      border
      rounded-default
    `

  const errorInputClassName =
    `
      w-70
      h-10
      mb-6
      p-3
      font-normal
      text-text-xsm-all
      leading-5
      text-error-red
      border
      border-error-red
      rounded-default
    `

  function handleProfileSubmit(values) {
    //TODO: submit profile
  }

  return (
    <main className="container mx-auto px-33 pt-30 flex justify-between relative">
      <section className="w-71 flex flex-col">
        <h2 className="mb-8 font-normal text-h2-mob leading-10 text-black">Редактировать профиль</h2>
        <Formik
          initialValues={{
            login: ''
          }}
          onSubmit={(values, {resetForm}) => {
            handleProfileSubmit(values)
            resetForm()
          }}
          validateOnMount
        >
          {({ errors, touched, handleChange, values, isValid }) => (
            <Form noValidate>
              <Field
                className={errors.login && touched.login ? errorInputClassName : inputClassName}
                type="text"
                name="login"
                placeholder="Ник"
                value={values.login}
                onChange={handleChange}
                validate={validateLogin}
                required
              />
              <p className="mb-3 font-normal text-text-sm-web leading-6 text-black">Пол</p>
              <div className="mb-6 flex justify-between">
                <label className="font-normal text-text-sm-web leading-6 text-black cursor-pointer">
                  <Field
                    className="w-4 h-4 mr-1"
                    type="radio"
                    name="sex"
                    value="male"
                  />
                  Мужской
                </label>
                <label className="font-normal text-text-sm-web leading-6 text-black cursor-pointer">
                  <Field
                    className="w-4 h-4 mr-1"
                    type="radio"
                    name="sex"
                    value="female"
                  />
                  Женский
                </label>
                <label className="font-normal text-text-sm-web leading-6 text-black cursor-pointer">
                  <Field
                    className="w-4 h-4 mr-1"
                    type="radio"
                    name="sex"
                    value="other"
                  />
                  Другое
                </label>
              </div>
              <button
                className="mb-6 font-normal text-text-sm-web leading-6 text-black underline hover:opacity-50 duration-300"
                type="button"
                onClick={onPopupOpen}
              >
                Сменить пароль
              </button>
              <Button
                text="Сохранить данные"
                variant="submit-profile"
                handler="null"
                type="submit"
                onDisabled={!isValid ? setDisabled(true) : setDisabled(false)}
                disabled={disabled}
              />
            </Form>
          )}
        </Formik>
      </section>
      <section className="w-108 flex flex-col">
        <div className="w-154 h-152 bg-dots_4 bg-cover absolute top-55 right-34" />
        <h2 className="mb-8 font-normal text-h2-mob leading-10 text-black">Камера</h2>
        <div className="w-full h-76 mb-6 rounded-lg z-10">
          <VideoBlock />
        </div>
        <div className="flex justify-between">
          <Button
            text="Начать видео - связь"
            variant="black-button-profile"
            handler="null"
            type="button"
          />
          <div className="w-37 h-65 bg-profile_image" />
        </div>
      </section>
    </main>
  )
}

export default Profile
