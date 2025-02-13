import React, { useEffect } from 'react'
import Header from '../common/Header'
import hero from "../assets/images/webp/hero.webp"
import heroUnicorn from "../assets/images/webp/hero-unicorn.webp"
import leftAnimation from "../assets/images/png/hero-left-animation.png"
import rightAnimation from "../assets/images/png/hero-right-animation.png"
import cloud from "../assets/images/png/footer-cloud.png"
import gsap from 'gsap'

const Hero = () => {
  useEffect(() => {
    gsap.fromTo('.animation-icon',
      { y: -50 },
      { scale: 1, duration: 3, repeat: -1, yoyo: true, y: 50 }
    )

    gsap.fromTo('.animation-icon-2',
      { y: 50 },
      { scale: 1, duration: 3, repeat: -1, yoyo: true, y: -50 }
    )
  }, [])

  return (
    <div className='relative'>
      <img src={cloud} alt="cloud" className='absolute bottom-0 z-10 w-full max-[1921px]:h-[30%] h-[50%] pointer-events-none' />
      <img className='absolute top-[20%] max-md:max-w-[250px] left-0 animation-icon h-[529px] max-md:h-[400px] max-sm:h-72 max-md:object-cover pointer-events-none' src={leftAnimation} alt="icons" />
      <img className='absolute top-[20%] max-md:max-w-[250px] right-0 animation-icon-2 h-[529px] max-md:h-[400px] max-sm:h-72 max-md:object-cover pointer-events-none' src={rightAnimation} alt="icons" />
      <Header />
      <div className='max-w-[1296px] mx-auto px-4 pt-[165px] max-lg:pt-20 max-sm:pt-8'>
        <div className='relative'>
          <img id='home' src={hero} alt="hero" className='mx-auto relative' />
          <img src={heroUnicorn} alt="hero-unicorn" className='h-[288px] max-lg:h-[200px] max-md:h-[150px] max-sm:h-[90px] absolute z-20 top-[40%] left-1/2 -translate-x-1/2' />
        </div>
      </div>
    </div>
  )
}

export default Hero