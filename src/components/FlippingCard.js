import React, {useState} from 'react'
import './FlippingCard.css'

const FlippingCard = ({cardData}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div
      className={`flipping-card ${isFlipped ? 'flipped' : ''} frame`}
      onClick={handleClick}
    >
      <div className="flipping-card-inner container">
        <div className="flipping-card-front">
          <span className='title'>{cardData.front}</span>
        </div>
        <div className="flipping-card-back">
          <span className='title'>{cardData.back.title}</span>
          <span className='description'>{cardData.back.description}</span>
          <span>
            {cardData.order}
          </span>
        </div>
      </div>
      <div className="corner corner-rt"><span>{cardData.corner}</span></div>
      <div className="corner corner-ld"><span>{cardData.corner}</span></div>
    </div>
  )
}

export default FlippingCard
