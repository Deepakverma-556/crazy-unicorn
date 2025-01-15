import React from 'react'

const Description = ({ myClass, text }) => {
  return (
    <p className={`text-[22px] max-lg:text-xl max-md:text-lg max-sm:text-base leading-[38.28px] text-center ${myClass}`}>{text}</p>
  )
}

export default Description