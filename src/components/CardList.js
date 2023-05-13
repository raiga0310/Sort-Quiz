import React from 'react'
import SortableCard from './SortableCard'

const CardList = ({ cards, moveCard }) => {
  return (
    <div className="flex flex-row gap-4">
      {cards.map((card, index) => (
        <SortableCard
          key={card.id}
          cardData={card}
          index={index}
          moveCard={moveCard}
        />
      ))}
    </div>
  );
}

export default CardList
