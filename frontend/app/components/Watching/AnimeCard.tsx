import Image, { StaticImageData } from 'next/image'
import React from 'react'
import dummy from '@/app/assets/images/dummy.png'
import Variant from '../Button/Variant'

interface AnimeInfo{
    thumbnail?: StaticImageData,
    title?: string
    desc?: string
}

const dummytext = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, dolores et sed possimus in magni ducimus voluptatum corrupti nisi consequatur quas vel sapiente, voluptatibus provident expedita adipisci, consequuntur perferendis! Animi, eligendi maxime ad nesciunt vel a reiciendis ex repellendus nulla fugit quia qui veritatis odit sit perferendis dolores nobis neque. Excepturi iste nihil soluta, blanditiis eos neque commodi expedita explicabo error, beatae aliquam amet ad autem. Suscipit quaerat aut dolor ipsum similique temporibus, facere nostrum illum. Laudantium quo repudiandae dicta eaque. Quia consequuntur ad nemo deserunt perspiciatis pariatur nihil excepturi suscipit, quam voluptate dolores saepe quod exercitationem rem eligendi similique."
const AnimeCard = ( {thumbnail=dummy, title="Dummy Thumbnail", desc=dummytext}:AnimeInfo ) => {
  return (
    <div className='flex flex-col sm:flex-row gap-5 w-full justify-center items-center'>
        <Image src={thumbnail} alt="anime thumbnail" className='w-[181px] md:h-[238px] rounded-xl bg-cover bg-center shadow-2xl'></Image>
        <div className='flex flex-col justify-center items-center sm:items-start gap-5'>
            <div className='text-lg md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-center'>{title}</div>
            <div className='text-[#4A4A4A] font-bold overflow-y-hidden h-[100px] sm:h-max'>{desc}</div>
            <Variant content='Show More' route={false}/>
        </div>
    </div>
  )
}

export default AnimeCard