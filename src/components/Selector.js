import { useState } from "react"

function Selector(props) {

  const [isClicked, setIsClicked] = useState(false)

  const selectorClassName = (
    `
      font-normal
      text-h3-web
      leading-8
      duration-300
      cursor-pointer
      ${isClicked ? 'text-orange' : 'text-white'}
    `
  )

  // При клике на элемент селектора, закрашиваем элемент, добавляем объект (с id и text, пока хз какие данные нужны на бэк) в массив выбраных пользователем селекторов
  function handleClick() {
    if (!isClicked) { // если не кликнуто - красим, добавляем в массив
      setIsClicked(true)
      props.onSelect([
        {
          id: props.id,
          text: props.text
        }, ...props.selectedItems
      ])
    } else { // если кликнуто - удаляем заливку, фильтруем и возвращаем массив, где нет элемента с данным text
      setIsClicked(false)
      props.onSelect((state) => state.filter((item) => item.text !== props.text && item)) // сравниваем по полю text. Ведь текст у селекторов будет всегда разный? (anakin_skywalker.jpg)
    }
  }

  return (
    <>
      <h3 className={selectorClassName} onClick={handleClick}>{props.text}</h3>
    </>
  )
}

export default Selector
