import React, { useEffect } from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import AboutUs from './AboutUs'
import leftAnimation from "../assets/images/png/our-story-left-animation.png"
import rightAnimation from "../assets/images/png/our-story-right-animation.png"
import cloud from "../assets/images/png/footer-cloud.png"
import gsap from 'gsap'

const OurStory = () => {
  useEffect(() => {
    gsap.fromTo('.animation-icon',
      { y: -30 },
      { scale: 1, duration: 3, repeat: -1, yoyo: true, y: 30 }
    )
    
    gsap.fromTo('.animation-icon-2',
      { y: 50 },
      { scale: 1, duration: 3, repeat: -1, yoyo: true, y: -50 }
    )
  }, [])
  return (
    <div className='relative pt-[6px] max-lg:pt-20 max-md:pt-16 max-sm:pt-12'>
      <img src={cloud} alt="cloud" className='absolute md:hidden rotate-180 top-0 h-[2%] w-full' />
      <img className='absolute top-0 max-md:max-w-[250px] left-0 animation-icon h-[529px] max-md:h-[400px] max-sm:h-72 max-md:object-cover pointer-events-none' src={leftAnimation} alt="icons" />
      <img className='absolute top-[20%] max-md:max-w-[250px] right-0 animation-icon-2 h-[529px] max-md:h-[400px] max-sm:h-72 max-md:object-cover pointer-events-none' src={rightAnimation} alt="icons" />
      <div id='story' className='px-4 relative'>
        <Heading text="our story" myClass="relative z-20" />
        <Description myClass="max-w-[1109px] mx-auto pt-[22px] max-md:pt-4 max-sm:pt-3" text="Vestibulum, id lacus, volutpat nec. Magna senectus enim nisi, sit. Sagittis, ac velit gravida a nullam lobortis in malesuada. Cras pellentesque convallis semper dolor at velit diam odio. Nullam quam sollicitudin urna eget. In gravida maecenas amet tincidunt feugiat tellus, pulvinar nulla. Ultricies eu lectus consequat et imperdiet eget elementum. Euismod placerat amet nisl sagittis arcu, et, sodales velit. Pretium elit volutpat orci accumsan, a ac id rutrum enim. Tellus luctus eget elit vitae eget nisl ante." />
        <Description myClass="max-w-[953px] mx-auto" text="Sed lectus ut elit id lectus diam massa nisl pretium. Vel amet, sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius lobortis. Morbi sit sit magna lorem arcu facilisi ipsum sed amet. At bibendum egestas in maecenas." />
      </div>
      <AboutUs />
    </div>
  )
}

export default OurStory