import React from 'react'


const CardList = ({ cards }) => {
  console.log('CARDS ARE:', cards)  // array of 50 objects
  return cards.length > 0 ? (

    <ul>{cards && cards.map(card => <li>{card.name}</li>)}</ul>
  ) : (
      <div>
        <h2>No Results</h2>
      </div>
    );
}

export default CardList;
