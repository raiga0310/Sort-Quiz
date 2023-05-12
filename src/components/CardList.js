import React, {useState, useEffect} from 'react'
import SortableCard from './SortableCard'
import { getLanguageInfo } from '../data/data';

const generateCards = (Array) => {
  console.log('generateCards');
  console.log(Array);
  const quizes = getLanguageInfo(Array);
  console.log(quizes);
  const cards = [];
  for (let i = 0; i < quizes.length; i++) {
    cards.push({
      id: i, // もしくは年を入れる
      front: quizes[i][2],
      back: {title: quizes[i][2], description: quizes[i][1]},
      corner: quizes[i][3],
    })
  }
  if(cards.length < 5) {
    console.log('uooooooooooooooooooooooooooooooooooooooooooooooooo');
  }
  return cards
}

const CardList = ({ quizKeyArray }) => {
  const [cards, setCards] = useState(generateCards(quizKeyArray));

  // quizKeyArrayが変更されたときに新しいカード列を生成
  useEffect(() => {
    setCards(generateCards(quizKeyArray));
  }, [quizKeyArray]);

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
