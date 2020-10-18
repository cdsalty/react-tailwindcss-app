import React from 'react'


const CardList = ({ cardData }) => {
  console.log(cardData);
  const lengthOfCards = cardData.length;
  console.log(lengthOfCards)
  return (
    <div>
      <ul>
        {cardData.map((card) => <li>{card.name}</li>)}

      </ul>
    </div>
  )
}

export default CardList



/*
cards.length > 0 ? (
  <ul>{cards.map(card => <li>{card.name}</li>)}</ul>
) :
*/