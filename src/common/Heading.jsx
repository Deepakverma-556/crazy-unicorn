import React from 'react'
import unicorn from "../assets/images/webp/heading-img.webp"

const Heading = ({ text, myClass,imgClass }) => {
  return (
    <h2 className={`${myClass} font-pinky text-[70px] max-md:text-6xl max-sm:text-[40px] leading-[80.53px] max-w-max mx-auto relative`}>{text} <img src={unicorn} alt="unicorn" className={`${imgClass} absolute h-[84px] sm:w-[118px] max-sm:h-16 -right-10 -top-[42px] max-md:-top-12 max-sm:-top-10 max-sm:-right-7 pointer-events-none`} /> </h2>
  )
}

export default Heading