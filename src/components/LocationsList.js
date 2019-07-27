import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard'

const locs = axios.get('https://rickandmortyapi.com/api/location/')
console.log(locs);

export default function LocationsList() {
    console.log(LocationsList)
 
    const [locData, setLocData] = useState =([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
        .then(res => {
            setLocData(res.data.results)
        })
        .catch(error => {console.log('Riiiickkkkkk!!! The gps lost our loctation!!!')})

    }, [])

    useEffect(fetch, [])
    console.log(locData)
    
    return (
        <section className='grid-view'>
            {locData.map(locItem => {
                console.log(locItem)
                return<LocationCard key={locItem.id} {...locItem} />
            }
            )}
        </section>
    )
}
