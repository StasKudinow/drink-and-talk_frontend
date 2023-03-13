import categoriesImage from "../images/categories-image.png"

import Selector from "./Selector"
import Button from "./Button"

function Categories() {

  return (
    <main className="container mx-auto max-w-[1110px] flex flex-col items-center pt-20 pb-28">
      <h2 className="mb-7 text-h2-mob leading-h2-web text-black">
        Привет, рады тебя видеть на нашем сервисе, чтобы мы могли подобрать
        для тебя собеседника, выбери нужные разделы ниже, а так же категорию
        напитков
      </h2>
      <div className="w-[1110px] flex flex-row justify-between mb-15">
        <div className="max-w-80">
          <h3 className="mb-6 font-normal text-[100px] leading-[115px] text-black opacity-50">Тема</h3>
          <ul className="grid justify-items-start gap-3">
            <li>
              <Selector text="Общение на свободные темы" />
            </li>
            <li>
              <Selector text="Общение IT направлений" />
            </li>
            <li>
              <Selector text="Общение о науке" />
            </li>
            <li>
              <Selector text="Общение философов" />
            </li>
          </ul>
        </div>
        <img src={categoriesImage} alt="categories" />
        <div className="max-w-80">
          <h3 className="mb-6 font-normal text-[100px] leading-[115px] text-black text-center opacity-50">Напитки</h3>
          <ul className="grid grid-cols-2 justify-items-start gap-x-5 gap-y-3">
            <li>
              <Selector text="Крепкий алкоголь" />
            </li>
            <li>
              <Selector text="Самогон" />
            </li>
            <li>
              <Selector text="Безалкогольное" />
            </li>
            <li>
              <Selector text="Пиво" />
            </li>
            <li>
              <Selector text="Шампанское" />
            </li>
            <li>
              <Selector text="Вино" />
            </li>
          </ul>
        </div>
      </div>
      <Button
        buttonColor="bg-orange"
        buttonTextColor="text-white"
        buttonHover="hover:opacity-50"
        buttonText="Начать видео - связь"
        buttonHoverText="hover:text-white"
      />
    </main>
  )
}

export default Categories
