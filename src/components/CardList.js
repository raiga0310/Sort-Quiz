import React, {useState} from 'react'
import SortableCard from './SortableCard'

const generateCards = (count) => {
  const cards = []
  for (let i = 1; i <= count; i++) {
    cards.push({
      id: i,
      front: `表${i}`,
      back: `裏${i}`,
    })
  }
  return cards
}

const CardList = (props) => {
  const [cards, setCards] = useState(generateCards(props.cardCount))

  const moveCard = (fromIndex, toIndex) => {
    const newCards = [...cards]
    const cardToMove = newCards[fromIndex]
    newCards.splice(fromIndex, 1)
    newCards.splice(toIndex, 0, cardToMove)
    setCards(newCards)
  }

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
  )
}

export default CardList
