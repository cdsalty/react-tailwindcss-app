import React from 'react'
import CardListItem from './CardListItem';


const CardList = ({ cardData }) => {
  // const lengthOfCards = cardData.length;
  // console.log(lengthOfCards)
  return cardData.length > 0 ? (
    <ul>
      {/* {cardData && cardData.map((card) => <li>{card.name} </li>)} */}
      {cardData && cardData.map((card) => <CardListItem eachCard={card} />)}
    </ul>
  ) :
    (
      <div>
        <h2>No Results Found</h2>
      </div>
    );
};


export default CardList


/*
to extract to a card item
1. Create a card item component
2. Remove the ul: <li>{card.name} </li>
3.

*/