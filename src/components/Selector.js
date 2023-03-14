import { useState } from "react"

function Selector(props) {

  const [isClicked, setIsClicked] = useState(false)

  const selectorClassName = (
    `
      h-17
      px-2
      flex
      justify-center
      items-center
      ${isClicked ? 'bg-green' : 'bg-black'}
      rounded-default
      cursor-pointer
    `
  )

  const textClassName = (
    `
      font-normal
      text-h3-web
      leading-[34px]
      ${isClicked ? 'text-black' : 'text-white'}
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
    <div className={selectorClassName} onClick={handleClick}>
      <p className={textClassName}>{props.text}</p>
    </div>
  )
}

export default Selector
