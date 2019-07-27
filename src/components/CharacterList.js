import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import CharacterCard from './CharacterCard.js';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [charData, setCharData] = useState ([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
     
  
          axios.get('https://rickandmortyapi.com/api/character/')
          .then(res => {
              setCharData(res.data.results)
          })
          .catch(error => {console.log('hey Morty, wheres my DATA?!?!!?')})

        }, [])

      useEffect(fetch, [])
      console.log(charData)

 

  return (
  <section className='character-list grid-view'>
      {charData.map(charItem => {
        console.log(charItem)
        return <CharacterCard key={charItem.id} {...charItem} />
  }
  )}
    </section>
  )
}
