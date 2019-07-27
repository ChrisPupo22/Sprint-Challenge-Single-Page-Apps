import React from 'react'

export default function CharacterCard (props) {
  return(
    <div>
      
      <img src = {props.image}/>
      <h1>{props.name}</h1>
      <p>{props.species} {props.status}</p>
      <p>{props.location.name}</p>

    </div>
  )
}

