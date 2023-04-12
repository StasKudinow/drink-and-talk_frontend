import { useState } from 'react'
import { Formik, Form, Field } from 'formik'

import Popup from './Popup'
import Button from './Button'

import { validateBarName } from '../utils/validate'

function CreateBar({ isOpen, onClose }) {

  const [disabled, setDisabled] = useState(false)
  const [counter, setCounter] = useState(2)

  const inputClassName =
  `
    w-71
    h-10
    mb-8
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
    mb-8
    p-3
    font-normal
    text-text-xsm-all
    leading-5
    text-error-red
    border
    border-error-red
    rounded-default
  `

  function countPlus() {
    if (counter <= 8) {
      setCounter(counter+1)
    }
  }

  function countMinus() {
    if (counter >= 3) {
      setCounter(counter-1)
    }
  }

  function handleCreateBarSubmit(values) {
    //TODO: submit createBar
  }

  return (
    <Popup
      variant="config"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Formik
        initialValues={{
          barName: ''
        }}
        onSubmit={values => {
          handleCreateBarSubmit(values)
        }}
        validateOnMount
      >
        {({ errors, touched, handleChange, values, isValid }) => (
          <Form className="flex flex-col items-center" noValidate>
            <p className="mb-2 font-normal text-text-sm-web leading-6 text-white text-center">
              Впишите название бара
            </p>
            <Field
              className={errors.barName && touched.barName ? errorInputClassName : inputClassName}
              type="text"
              name="barName"
              value={values.barName}
              onChange={handleChange}
              validate={validateBarName}
              required
            />
            <p className="mb-2 font-normal text-text-sm-web leading-6 text-white text-center">
              Добавить обложку (необязательно)
            </p>
            <button
              className="w-32 h-24 mb-8 flex items-center justify-center bg-white rounded-default hover:cursor-pointer hover:opacity-50 duration-300"
              type="button"
            >
              <div className="w-8 h-8 bg-add_image" />
            </button>
            <p className="mb-2 font-normal text-text-sm-web leading-6 text-white text-center">
              Выберите количество людей, которое сможет к вам присоедениться
            </p>
            <div className="w-26 h-10 mb-8 flex justify-between">
              <button
                className="w-4 font-normal text-h3-web leading-all-mob text-white active:opacity-50"
                type="button"
                onClick={countMinus}
              >
                &ndash;
              </button>
              <div className="w-12 h-10 flex items-center justify-center bg-white rounded-default">
                <p className="font-normal text-h3-mob leading-all-mob text-black">{counter}</p>
              </div>
              <button
                className="w-4 font-normal text-h3-web leading-all-mob text-white active:opacity-50"
                type="button"
                onClick={countPlus}
              >
                +
              </button>
            </div>
            <Button
              text="Создать бар"
              variant="submit"
              handler="submit"
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

export default CreateBar
