import React, {useState} from 'react'
import SortableCard from './SortableCard'
import '../data/data';
import { getLanguageInfo } from '../data/data';

const generateCards = (Array) => {
  const quizes = getLanguageInfo(Array);
  const cards = [];
  for (let i = 0; i < quizes.length; i++) {
    cards.push({
      id: i, // もしくは年を入れる
      front: `${quizes[i][2]}`,
      back: `裏${quizes[i][1]}`,
    })
  }
  return cards
}

const CardList = ({ quizKeyArray }) => {
  const [cards, setCards] = useState(generateCards(quizKeyArray));

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
