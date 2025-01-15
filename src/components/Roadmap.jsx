import React, { useEffect } from 'react'
import RoadMapImage from '../assets/images/webp/roadmap-image.webp'
import ScrollReveal from 'scrollreveal'
import { ROADMAP_LIST } from '../utils/helper'
import Description from '../common/Description'
import RoadmapSmImage from '../assets/images/webp/roadmap-sm-image.webp'
import UnicornImage from '../assets/images/webp/roadmap-unicorn-image.webp'
import Heading from '../common/Heading'
// import { scrollInfo } from 'motion/react'

const Roadmap = () => {
  useEffect(() => {
    ScrollReveal().reveal('.card', { interval: 200 , reset: true , distance: '50px' });
    ScrollReveal().reveal('.roadmap-image', { interval: 200 , reset: true , distance: '-50px' });
  })
  return (
    <>
    <div className='bg-roadmap py-12 bg-no-repeat bg-cover'>
    <Heading text="Roadmap" myClass={'pb-[177px] max-lg:pb-24 max-sm:pb-12'} />
    <div className='max-w-[1322px] max-lg:gap-5 max-[1200px]:max-w-[1000px] max-[1440px]:max-w-[1140px] w-full justify-center items-center flex flex-col relative max-xl:px-5 mx-auto'>
        <img className='roadmap-image max-lg:hidden max-[1440px]:max-w-[650px] max-[1200px]:max-w-[450px]' src={RoadMapImage} alt="roadmap-image" />
        <img className='lg:hidden h-[90%] left-[8%] max-md:left-[10%] max-sm:hidden absolute' src={RoadmapSmImage} alt="roadmapIMage" />
        <div className='absolute top-[-3%] h-full left-[0%] max-sm:hidden'>
        <img className='lg:hidden sticky top-[3%] left-[5%]' src={UnicornImage} alt="UnicornImage" />
        </div>
        {ROADMAP_LIST.map((obj, index) => (
          <div className={` card max-md:ml-auto max-sm:ml-[unset] absolute max-lg:relative max-lg:max-w-[400px] max-lg:top-[unset] max-lg:left-[unset] max-lg:right-[unset] max-[1440px]:max-w-[400px] ${ index === 0 ? 'max-w-[451px] top-[6%] max-[1440px]:left-[2%] left-[2%] max-[1200px]:left-[2%]' : index  === 1 ? 'max-w-[465px] right-[1%] max-[1440px]:right-[3%] max-[1440px]:top-[19%] top-[20%] max-[1200px]:right-[1%]': index === 2 ? 'max-w-[411px] left-[2%] max-[1440px]:left-[2%] top-[35%] max-[1440px]:top-[33%] max-[1200px]:left-[2%] max-[1200px]:max-w-[370px]' : index === 3 ? 'max-w-[465px] right-[-4%] max-[1440px]:right-[-2%] max-[1440px]:top-[47%] top-[50%] max-[1200px]:max-w-[350px] max-[1200px]:right-[-0%]' : index === 4 ? 'max-w-[397px] left-[2%] top-[60%] max-[1440px]:left-[2%] max-[1440px]:max-w-[355px] max-[1200px]:left-[2%] max-[1200px]:max-w-[320px]' : 'max-w-[465px]' }`}>
              <h3 className='text-[40px] pb-[15px] leading-[46.02px] max-lg:leading-[40.02px] max-md:leading-[36.02px] max-sm:leading-[32.02px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-pinky'>{obj.heading}</h3>
              <Description text={obj.description} myClass={`!text-left !leading-[32.93px]  ${index === 0 ? '!text-[18.93px]' : ''}`}/>
          </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default Roadmap