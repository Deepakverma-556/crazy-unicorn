import React, { useEffect } from 'react'
import RoadMapImage from '../assets/images/webp/roadmap-image.webp'
import ScrollReveal from 'scrollreveal'
import { ROADMAP_LIST } from '../utils/helper'
import Description from '../common/Description'
import RoadmapSmImage from '../assets/images/webp/roadmap-sm-image.webp'
import UnicornImage from '../assets/images/webp/roadmap-unicorn-image.webp'
import Heading from '../common/Heading'
import leftAnimation from "../assets/images/png/our-story-left-animation.png"
import rightAnimation from "../assets/images/png/our-story-right-animation.png"
import gsap from 'gsap'

const Roadmap = () => {
  useEffect(() => {
    gsap.fromTo('.animation-icon',
      { y: -30 },
      { scale: 1, duration: 3, repeat: -1, yoyo: true, y: 30 }
    )
    gsap.fromTo('.animation-icon-2',
      { y: 50 },
      { scale: 1, duration: 3, repeat: -1, yoyo: true, y: -50 }
    )
    gsap.fromTo('.animation-icon-3',
      { y: 50 },
      { scale: 1, duration: 3, repeat: -1, yoyo: true, y: -50 }
    )
    ScrollReveal().reveal('.card', { interval: 200 , reset: true , distance: '50px' });
    ScrollReveal().reveal('.roadmap-image', { interval: 200 , reset: true , distance: '-50px' });
  })
  return (
    <div id='roadmap' className='pt-[231px] max-lg:pt-20 max-md:pt-16 max-sm:pt-12 relative'>
      <img className='absolute bottom-0 max-md:max-w-[250px] left-0 animation-icon h-[529px] max-md:h-[400px] max-sm:h-72 max-md:object-cover pointer-events-none' src={leftAnimation} alt="icons" />
      <img className='absolute top-0 max-md:max-w-[250px] right-0 animation-icon-2 h-[529px] max-md:h-[400px] max-sm:h-72 max-md:object-cover pointer-events-none' src={rightAnimation} alt="icons" />
      <img className='absolute -bottom-40 max-md:max-w-[250px] right-0 animation-icon-3 h-[529px] max-md:h-[400px] max-sm:h-72 max-md:object-cover pointer-events-none' src={rightAnimation} alt="icons" />
    <Heading text="Roadmap" myClass={'pb-[117px] max-lg:pb-16 max-sm:pb-8'} />
    <div className='max-w-[1322px] max-lg:gap-5 max-[1200px]:max-w-[1000px] max-[1440px]:max-w-[1140px] w-full justify-center items-center flex flex-col relative max-xl:px-5 mx-auto'>
        <img className='roadmap-image max-lg:hidden pointer-events-none max-[1440px]:max-w-[650px] max-[1200px]:max-w-[450px]' src={RoadMapImage} alt="roadmap-image" />
        <img className='lg:hidden h-[90%] left-[8%] max-md:left-[10%] max-sm:hidden absolute' src={RoadmapSmImage} alt="roadmapIMage" />
        <div className='absolute top-[-3%] h-full left-[0%] max-sm:hidden'>
        <img className='lg:hidden sticky top-[3%] left-[5%]' src={UnicornImage} alt="UnicornImage" />
        </div>
        {ROADMAP_LIST.map((obj, index) => (
          <div key={index} className={` card max-md:ml-auto max-sm:ml-[unset] absolute max-lg:relative max-lg:max-w-[400px] max-lg:top-[unset] max-lg:left-[unset] max-lg:right-[unset] max-[1440px]:max-w-[400px] ${ index === 0 ? 'max-w-[451px] top-[6%] max-[1440px]:left-[-2%] left-[2%] max-[1200px]:left-[2%]' : index  === 1 ? 'max-w-[465px] right-[1%] max-[1440px]:right-[3%] max-[1440px]:top-[19%] top-[20%] max-[1200px]:right-[1%]': index === 2 ? 'max-w-[411px] left-[2%] max-[1440px]:left-[-2%] top-[35%] max-[1440px]:top-[33%] max-[1200px]:left-[2%] max-[1200px]:max-w-[370px]' : index === 3 ? 'max-w-[465px] right-[-4%] max-[1440px]:right-[-2%] max-[1440px]:top-[47%] top-[50%] max-[1200px]:max-w-[350px] max-[1200px]:right-[-0%]' : index === 4 ? 'max-w-[397px] left-[2%] top-[60%] max-[1440px]:left-[-2%] max-[1440px]:max-w-[355px] max-[1200px]:left-[2%] max-[1200px]:max-w-[320px]' : 'max-w-[465px]' }`}>
              <h3 className='text-[40px] pb-[15px] leading-[46.02px] max-lg:leading-[40.02px] max-md:leading-[36.02px] max-sm:leading-[32.02px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-pinky'>{obj.heading}</h3>
              <Description text={obj.description} myClass={`!text-left !leading-[32.93px]  ${index === 0 ? '!text-[18.93px]' : ''}`}/>
          </div>
        ))}
    </div>
    </div>
  )
}

export default Roadmap