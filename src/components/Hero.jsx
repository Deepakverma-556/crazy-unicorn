import React from 'react'
import Header from '../common/Header'
import hero from "../assets/images/webp/hero.webp"

const Hero = () => {
  return (
    <div className='bg-hero bg-cover bg-no-repeat'>
      <Header />
      <div className='max-w-[1296px] mx-auto px-4 pt-[165px] max-lg:pt-20 max-sm:pt-8'>
        <img id='home' src={hero} alt="hero" className='mx-auto' />
      </div>
    </div>
  )
}

export default Hero