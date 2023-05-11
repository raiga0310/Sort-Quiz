import React from 'react'
import FlippingCard from './FlippingCard'

const SortableCard = ({id, cardData, index, moveCard}) => {
  const handleMoveLeft = () => {
    if (index > 0) {
      moveCard(index, index - 1)
    }
  }

  const handleMoveRight = () => {
    moveCard(index, index + 1)
  }

  return (
    <div className="sortable-card">
      <FlippingCard cardData={cardData} />
      <div className="sortable-card-buttons">
        <button onClick={handleMoveLeft}>&#x25C0;</button>
        <button onClick={handleMoveRight}>&#x25B6;</button>
      </div>
    </div>
  )
}

export default SortableCard
