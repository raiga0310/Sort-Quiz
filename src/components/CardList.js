import React from 'react'
import SortableCard from './SortableCard'

const CardList = ({ cards, moveCard }) => {
  return (
    <div className="card-list">
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
