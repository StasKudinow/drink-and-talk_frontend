import { useState, useContext } from 'react'

import { topics, drinks } from '../utils/costants'

import Selector from './Selector'
import Button from './Button'

import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Categories() {

  const [selectedItems, setSelectedItems] = useState([])
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false)
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false)

  const currentUser = useContext(CurrentUserContext)

  function handleLeftMenuButtonClick() {
    setIsLeftMenuOpen(!isLeftMenuOpen)
  }

  function handleRightMenuButtonClick() {
    setIsRightMenuOpen(!isRightMenuOpen)
  }

  return (
    <main className="container mx-auto w-222 flex flex-col items-center pt-20 pb-28">
      <p className="mb-7 text-h2-mob leading-h2-web text-black">
        Привет <span className="text-h2-mob leading-h2-web text-orange">{currentUser.username}
        </span>, рады тебя видеть на нашем сервисе, чтобы мы могли подобрать
        для тебя собеседника, выбери нужные разделы ниже, а так же категорию
        напитков
      </p>
      <section className="w-222 flex flex-row justify-between mb-15 relative">
        <div className="w-161 h-113 bg-dots_3 bg-cover absolute top-45 left-94" />
        <div className="flex flex-col">
          <h2 className="mb-4 font-normal text-8xl leading-115 text-black opacity-50">Тема</h2>
          <div className="w-50 px-2 py-5 flex justify-between items-center border rounded-default">
            <h3 className="font-normal text-h3-web leading-8 text-black">Выбрать тему</h3>
            <Button
              variant="drop-down-button"
              handler="drop-down"
              type="button"
              onOpenMenu={handleLeftMenuButtonClick}
              isMenuOpen={isLeftMenuOpen}
            />
          </div>
          <ul className={`px-2 py-6 bg-black flex-col gap-6 rounded-default absolute top-48 left-0 ${isLeftMenuOpen ? 'flex' : 'hidden'}`}>
            {topics.map((topic) => {
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
        <div className="flex flex-col">
          <h2 className="mb-4 font-normal text-8xl leading-115 text-black text-center opacity-50">Напитки</h2>
          <div className="w-59 px-2 py-5 flex justify-between items-center border rounded-default">
            <h3 className="font-normal text-h3-web leading-8 text-black">Выбрать напиток</h3>
            <Button
              variant="drop-down-button"
              handler="drop-down"
              type="button"
              onOpenMenu={handleRightMenuButtonClick}
              isMenuOpen={isRightMenuOpen}
            />
          </div>
          <ul className={`px-2 py-6 bg-black flex-col gap-6 rounded-default absolute top-48 right-20 ${isRightMenuOpen ? 'flex' : 'hidden'}`}>
            {drinks.map((drink) => {
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
        text="Перейти к барам"
        variant="orange-button"
        handler="link"
        type="button"
        url="/barlist"
      />
    </main>
  )
}

export default Categories
