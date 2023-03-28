import { useState } from 'react'

import { topics, drinks } from '../utils/costants' //изначальные массивы селекторов

import Selector from './Selector'
import Button from './Button'

function Categories() {

  //selectedItems - переменная-массив выбраных пользователем селекторов. Реализация через хук useState. В дальнейшем думаю надо будет прокидывать его на бэк, при сабмите кнопки.
  const [selectedItems, setSelectedItems] = useState([])

  console.log(selectedItems) //потом удалить. Для наглядности добавления/удаления объектов в массив

  return (
    <main className="container mx-auto w-222 flex flex-col items-center pt-20 pb-28">
      <h2 className="mb-7 text-h2-mob leading-h2-web text-black">
        Привет, рады тебя видеть на нашем сервисе, чтобы мы могли подобрать
        для тебя собеседника, выбери нужные разделы ниже, а так же категорию
        напитков
      </h2>
      <section className="w-222 flex flex-row justify-between mb-15">
        <div className="w-82">
          <h3 className="mb-6 font-normal text-[100px] leading-[115px] text-black opacity-50">Тема</h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {topics.map((topic) => { // мапим объекты селекторов из изначального массива
              return <li key={topic.id}>
                <Selector
                  id={topic.id}
                  text={topic.theme}
                  selectedItems={selectedItems}
                  onSelect={setSelectedItems}
                />
              </li>
            })}
          </ul>
        </div>
        <div className="w-50 h-104 bg-categories_img bg-cover" />
        <div className="w-82">
          <h3 className="mb-6 font-normal text-[100px] leading-[115px] text-black text-center opacity-50">Напитки</h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {drinks.map((drink) => { // мапим объекты селекторов из изначального массива
              return <li key={drink.id}>
                <Selector
                  id={drink.id}
                  text={drink.type}
                  selectedItems={selectedItems}
                  onSelect={setSelectedItems}
                />
              </li>
            })}
          </ul>
        </div>
      </section>
      <Button
        text="Начать видео - связь"
        variant="orange-button"
        handler="link"
        url="/bar"
      />
    </main>
  )
}

export default Categories
