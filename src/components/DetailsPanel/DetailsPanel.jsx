import React from 'react'

const DetailsPanel = ({ tutor }) => {
  return (
    <div>
        <p>{tutor.id}</p>
        <p>{tutor.major}</p>
        <p>{tutor.year}</p>
        <p>{tutor.name}</p>
        <p>{tutor.price}</p>
    </div>
  )
}

export default DetailsPanel