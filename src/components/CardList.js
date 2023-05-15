import React, { useState, useEffect } from 'react';
import SortableCard from './SortableCard';

const CardList = ({ cardsPromise, moveCard, setSrcs }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadCards = async () => {
      const cardsData = await cardsPromise;
      console.log(cardsData);
      setCards(cardsData);
      setSrcs(cardsData.map(({ front }) => front));
      console.log('setCards called');
    }

    loadCards();
  }, [cardsPromise, setSrcs]);

  if (!cards || cards.length === 0) {
    return <p>Loading...</p>;
  }

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

export default CardList;
