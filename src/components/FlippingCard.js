import React, {useState} from 'react'
import './FlippingCard.css'

const FlippingCard = ({cardData}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`flipping-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="flipping-card-inner">
        <div className="flipping-card-front">{cardData.front}</div>
        <div className="flipping-card-back">{cardData.back}</div>
      </div>
    </div>
  )
}

export default FlippingCard
