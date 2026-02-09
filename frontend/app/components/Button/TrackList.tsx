import React from 'react'

interface ContentType{
    content: string
}

const TrackList = ( {content}:ContentType ) => {
  return (
    <div className='cursor-pointer flex justify-center items-center font-bold text-xl bg-[#6200ED] py-2 px-10 rounded-xl transition-opacity duration-300 hover:opacity-85 active:opacity-75'>{content}</div>
  )
}

export default TrackList