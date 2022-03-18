import React from 'react'
import Card from './Card'

const CardList = ({robots, date}) => {
  const cardComponent = robots.map((robot, index) => {
    return <Card key={robots[index].id} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>}
  )
  return (
    <div>
      {cardComponent}
    </div>
  )
}

export default CardList