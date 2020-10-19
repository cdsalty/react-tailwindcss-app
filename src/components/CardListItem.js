import React from 'react'

const CardListItem = ({ eachCard }) => {

  // The card represents one element in the array being mapped through
  return (
    <div>
      <h2 className="text-red-700">{eachCard.name}</h2>
    </div>
  )
}

export default CardListItem
