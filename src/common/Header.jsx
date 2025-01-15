import React, { useState, useEffect } from 'react'
import logo from '../assets/images/png/venveo-logo.png'
import { NAV_LIST } from '../utils/helper'
import { SearchIcon } from '../utils/icons'
import CustomButton from './CustomButton'

const Header = ({ myClass }) => {
  const [open, setOpen] = useState()
  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 780) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);

  const handleSelectChange = (e) => {
    setOpen(false);
  }
  return (
    <div className='max-w-[1358px] mx-auto pt-[30px] max-lg:pt-2 max-sm:pt-4 max-md:flex max-md:items-center max-md:justify-between'>
      <div className=' max-w-max'>
        <a href="#logo" className='relative z-10'>
          <img src={logo} alt="venveo-logo" className='h-[90px] max-lg:h-20 max-md:h-14 max-sm:h-16 pointer-events-none' />
        </a>
      </div>
      <div className={`flex items-center ${myClass} max-md:hidden`}>
        <div className='bg-white relative z-10 py-7 max-lg:py-4 flex item-center gap-[42px] max-lg:gap-5 max-lg:px-6 pl-[41.79px] pr-[29.5px]'>
          {NAV_LIST.map((obj, i) => (
            <select key={i} name="venveo" id="myLink" className='cursor-pointer appearance-none bg-no-repeat pr-4 text-[15px] leading-[15px] font-maisonMedium outline-none'>
              <option value={obj.title}>{obj.title}</option>
              <option value={obj.optionOne}>{obj.optionOne}</option>
              <option value={obj.optionTwo}>{obj.optionTwo}</option>
              <option value={obj.optionThree}>{obj.optionThree}</option>
            </select>
          ))}
          <div>
            <a href="#search" className='search-icon group'>
              <SearchIcon myclass='group-hover:fill-darkGreen transition-all duration-300' stroke='group-hover:stroke-darkGreen transition-all duration-300' />
            </a>
          </div>
        </div>
        <CustomButton text="Let's Talk" myClass="max-lg:py-[20.5px] py-[32.5px] px-[31.63px]" />
      </div>
      <div
        className={`md:hidden z-30 cursor-pointer`}
        onClick={() => setOpen(!open)}
      >
        <div className={`flex flex-col gap-3 items-center cursor-pointer ${open ? "!gap-0 transition-all duration-300" : "transition-all duration-300"}`}>
          <div className={`h-[2px] bg-white w-8 transition-all duration-300 rounded-lg ${open ? "rotate-[50deg] origin-center" : ""} `}></div>
          <div className={`h-[2px] bg-white w-8 transition-all duration-300 rounded-lg ${open ? "-rotate-[53deg] origin-center" : ""} `}></div>
        </div>
      </div>
      <div className={`w-full h-full bg-darkGreen transition-all duration-500 left-0 md:-top-full z-20 fixed flex flex-col bg-blue justify-center items-center ${open ? "top-0 left-0" : "-top-full"
        }`}>
        <div className=' relative z-10 flex flex-col item-center justify-center text-center gap-7'>
          {NAV_LIST.map((obj, i) => (
            <select onChange={handleSelectChange} key={i} name="venveo" id="myLink" className='custom-select appearance-none pr-4 bg-no-repeat cursor-pointer text-[15px] text-white leading-[15px] font-maisonMedium outline-none max-md:mx-auto bg-transparent'>
              <option value={obj.title}>{obj.title}</option>
              <option value={obj.optionOne}>{obj.optionOne}</option>
              <option value={obj.optionTwo}>{obj.optionTwo}</option>
              <option value={obj.optionThree}>{obj.optionThree}</option>
            </select>
          ))}
          <a onClick={() => setOpen(false)} href="#search" className='search-icon group max-md:mx-auto'>
            <SearchIcon myclass='group-hover:fill-black transition-all duration-300' stroke='group-hover:stroke-black transition-all duration-300' />
          </a>
          <CustomButton customOnClick={() => setOpen(false)} text="Let's Talk" myClass="max-lg:py-[20.5px] py-[32.5px] px-[31.63px]" />
        </div>
      </div>
    </div>
  )
}

export default Header