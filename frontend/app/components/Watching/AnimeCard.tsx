import Image, { StaticImageData } from 'next/image'
import React from 'react'
import dummy from '@/app/assets/images/dummy.png'

interface AnimeInfo{
    thumbnail?: StaticImageData,
    title?: string
    desc?: string
}

const AnimeCard = ( {thumbnail=dummy, title="Dummy Thumbnail", desc="Dummy description"}:AnimeInfo ) => {
  return (
    <div>
        <Image src={thumbnail} alt="anime thumbnail"></Image>
        <div>
            <div>{title}</div>
            <div>{desc}</div>
        </div>
    </div>
  )
}

export default AnimeCard