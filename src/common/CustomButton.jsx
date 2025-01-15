import React from 'react'

const CustomButton = ({ text, myClass, buttonClass }) => {
  return (
    <div className={`${myClass} bg-gradient-to-r from-darkPurple to-purple relative h-[74px] rounded-xl max-w-[234px] max-md:h-[58px] max-md:w-[157px] max-sm:h-[48px] max-sm:w-[141px]`}>
      <button className={`${buttonClass} text-[35px] max-md:text-2xl max-md:py-3 max-sm:py-2 max-sm:px-6 max-md:px-8 leading-[40.26px] font-pinky bg-white py-[16.2px] px-[49px] rounded-xl text-nowrap border border-black absolute -top-[7px] -left-[5px] hover:top-0 hover:left-0 transition-all duration-300`}> <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple to-darkPurple'>{text}</span> </button>
    </div>
  )
}

export default CustomButton