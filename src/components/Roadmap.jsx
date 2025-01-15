import React from 'react'
import RoadMapImage from '../assets/images/webp/roadmap-image.webp'

const Roadmap = () => {
  return (
    <div className='bg-roadmap bg-no-repeat bg-cover'>
{/*  */}
    <div className='max-w-[1322px] w-full justify-center items-center flex relative max-xl:px-5 mx-auto'>
        <img src={RoadMapImage} alt="roadmap-image" />
    </div>
    </div>
  )
}

export default Roadmap