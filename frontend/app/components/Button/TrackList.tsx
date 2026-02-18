import React from 'react'

interface ContentType{
    content: string
}

const TrackList = ( {content}:ContentType ) => {
  return (
    <div className='cursor-pointer flex justify-center items-center text-[14px] sm:text-xl font-bold text-xl bg-[#6200ED] py-2 px-5 sm:px-10 rounded-xl transition-opacity duration-300 hover:opacity-85 active:opacity-75'>{content}</div>
  )
}

export default TrackList