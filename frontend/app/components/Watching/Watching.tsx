import React from 'react'
import AnimeCard from './AnimeCard'

import { anime } from './localdb'

const Watching = () => {
  return (
    <div className='flex flex-col gap-5 p-10'>
        <span className='sm:text-[21px] font-bold'>Recently Watched</span>
        <div className='flex flex-col gap-10'>
            {anime.map((animeItem, index) => (
                <AnimeCard key={index} thumbnail={animeItem.thumbnail} title={animeItem.title} desc={animeItem.desc}/>
            ))}
        </div>
    </div>
  )
}

export default Watching