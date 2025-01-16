import React, { useState, useEffect } from 'react'
import logo from "../assets/images/png/logo.png"
import { HEADER_LIST, HEADER_SOCIAL_LINK_LIST } from '../utils/helper'
import { LinkUnderline } from '../utils/icons'

const Header = () => {
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

  return (
    <>
      <div className='flex items-center w-full justify-between max-w-[1360px] px-4 mx-auto pt-[6px]'>
        <a href="#logo"><img src={logo} alt="logo" className='h-[88px] max-lg:h-16 pointer-events-none' /></a>
        <ul className='flex items-center gap-[30px] max-md:hidden max-lg:gap-5'>
          {HEADER_LIST.map((obj, i) => (
            <li key={i}><a href={obj.link} className='font-pinky text-[22px] max-lg:text-xl leading-[25.31px] relative group'>{obj.title}<LinkUnderline myClass="absolute -bottom-4 max-lg:-bottom-3 w-0 group-hover:w-full transition-all duration-300" /></a></li>
          ))}
        </ul>
        <ul className='flex items-center gap-[19.46px] max-lg:gap-3 max-md:hidden'>
          {HEADER_SOCIAL_LINK_LIST.map((obj, i) => (
            <li key={i}><a target='blank' href={obj.link} className='flex items-center justify-center size-[42px] max-lg:size-9 rounded-full border border-black hover:shadow-[0px_0px_22px_4px] hover:shadow-purple transition-all duration-300'>{obj.icon}</a></li>
          ))}
        </ul>
        <div
          className={`md:hidden z-30 cursor-pointer`}
          onClick={() => setOpen(!open)}
        >
          <button
            className="overflow-hidden relative z-50 lg:hidden size-6 flex flex-col justify-between items-center"
          >
            <span
              className={`bg-black rounded-md w-6 h-0.5 block transition-all duration-300 ${open ? "translate-x-10" : ""
                }`}
            ></span>
            <span
              className={`bg-black rounded-md after:rounded-lg w-6 h-0.5 block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:transition-all after:duration-300 transition-all duration-300 ${open ? "rotate-45 after:rotate-90 after:!bg-black" : ""
                }`}
            ></span>
            <span
              className={`bg-black rounded-md w-6 h-0.5 block transition-all duration-300 ${open ? "-translate-x-10" : ""
                }`}
            ></span>
          </button>
        </div>
      </div>
      <div className={`w-full h-full bg-gradient-to-bl from-purple to-darkPurple transition-all duration-500 left-0 md:-top-full z-20 fixed flex flex-col justify-center items-center ${open ? "top-0 left-0" : "-top-full"
        }`}>
        <ul className='flex flex-col items-center gap-6'>
          {HEADER_LIST.map((obj, i) => (
            <li key={i}><a onClick={() => setOpen(false)} href={obj.link} className='text-base leading-5 text-white'>{obj.title}</a></li>
          ))}
        </ul>
        <ul className='flex items-center gap-[19.46px] pt-6'>
          {HEADER_SOCIAL_LINK_LIST.map((obj, i) => (
            <li key={i}><a onClick={() => setOpen(false)} target='blank' href={obj.link} className='flex items-center justify-center h-[42px] w-[42px] max-lg:h-9 max-lg:w-9 rounded-full border border-white bg-white'>{obj.icon}</a></li>
          ))}
        </ul>
      </div>
    </>

  )
}

export default Header