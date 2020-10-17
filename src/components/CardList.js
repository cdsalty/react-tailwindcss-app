import React from 'react'


const CardList = ({ data }) => {
  // console.log(props.list);
  console.log('CARDS ARE:', data)  // array of 50 objects
  console.log('cards are really', data[0])
  console.log("I should be able to use data[0].name and it list out a name but it doesn't work??? WHY?!!!!")
  console.log("something to do with async and await??? I see the original output is blank.")
  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
}

export default CardList;


// cards.length > 0 ? (
//   <ul>{cards.map(card => <li>{card.name}</li>)}</ul>
// ) :