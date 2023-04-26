import { useHistory } from 'react-router-dom'

import { cardsData } from '../utils/costants'

import BarCard from './BarCard'

function BarList({ onPopupOpen }) {

  const history = useHistory()

  function handleBarCardClick() {
    history.push('/bar')
  }

  return (
    <main className="container mx-auto px-33 pt-12 pb-22 grid grid-cols-3 gap-6">
      <button
        className="w-70 h-80 bg-black flex justify-center items-center rounded-default group hover:bg-gray duration-300"
        type="button"
        onClick={onPopupOpen}
      >
        <div className="w-20 h-20 bg-add_bar bg-cover group-hover:bg-add_bar_black duration-300" />
      </button>
      {cardsData.map((card) => {
        return <BarCard
          key={card.id}
          name={card.name}
          about={card.about}
          users={card.users}
          image={card.image}
          drinks={card.drinks.join(', ')}
          topics={card.topics.join(', ')}
          onClick={handleBarCardClick}
        />
      })}
    </main>
  )
}

export default BarList
