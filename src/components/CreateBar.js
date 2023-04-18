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
    console.log(values)
  }

  return (
    <Popup
      variant="config"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Formik
        initialValues={{
          barName: '',
          file: null
        }}
        onSubmit={values => {
          handleCreateBarSubmit(values)
        }}
        validateOnMount
      >
        {({ errors, touched, handleChange, values, isValid, setFieldValue }) => (
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
            {!values.file ?
              <label className="w-32 h-24 mb-2 flex items-center justify-center bg-white rounded-default hover:cursor-pointer hover:opacity-50 duration-300">
                <div className="w-8 h-8 bg-add_image hover:cursor-pointer" />
                <input
                  type="file"
                  name="file"
                  onChange={(e) => {
                    const fileReader = new FileReader()
                    fileReader.onload = () => {
                      setFieldValue('file', fileReader.result)
                    }
                    fileReader.readAsDataURL(e.target.files[0])
                  }}
                  accept="image/*"
                  hidden
                />
              </label> :
              <img
                className="w-32 h-24 mb-2 bg-cover rounded-default"
                src={values.file}
                alt="обложка"
              />
            }
            <button
              className="mb-8 font-normal text-4 leading-4 text-white text-center underline hover:opacity-50 duration-300"
              type="button"
              onClick={() => setFieldValue('file', null)}
            >
              удалить фото
            </button>
            <p className="mb-2 font-normal text-text-sm-web leading-6 text-white text-center">
              Выберите количество людей, которое сможет к вам присоединиться
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

export default CreateBar
