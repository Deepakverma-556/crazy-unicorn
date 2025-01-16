import React, { useState, useEffect } from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { Email } from '../utils/icons'
import CustomButton from '../common/CustomButton'
import emailjs from 'emailjs-com';
import { toast, ToastContainer, Slide } from 'react-toastify';
import logo from "../assets/images/png/logo.png"
import { HEADER_SOCIAL_LINK_LIST } from '../utils/helper'
import rainbow from "../assets/images/webp/footer-rainbow.webp"
import centerAnimation from '../assets/images/png/footer-center-animation.png'
import bottomAnimation from '../assets/images/png/footer-bottom-animation.png'
import gsap from 'gsap'
import cloud from "../assets/images/webp/clouds.webp"
emailjs.init("w_qmvSmvlfC7ZIszP");

const Footer = () => {
  const SERVICE_ID = "service_rajt1jk";
  const TEMPLATE_ID = "template_4hhcmon";
  const [formValue, setFormValue] = useState({
    email: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formValue)
    toast.success("Submit Successfully")
    setFormValue({
      email: ""
    })
  }
  useEffect(() => {
    gsap.fromTo('.animation-icon',
      { y: -50 },
      { scale: 1, duration: 3, repeat: -1, yoyo: true, y: 20 }
    )
    gsap.fromTo('.animation-icon-2',
      { y: 50 },
      { scale: 1, duration: 3, repeat: -1, yoyo: true, y: -20 }
    )
  }, [])
  return (
    <div className='px-4 pb-16 max-md:pb-12 max-sm:pb-8 pt-[265px] max-lg:pt-20 max-md:pt-16 max-sm:pt-12 relative overflow-hidden'>
      <div className='max-w-[1920px] mx-auto relative'> 

      </div>
      <img src={cloud} alt="cloud" className='bottom-0 z-10 absolute max-[1921px]:h-[40%] h-[90%] w-full' />
      <img className='absolute top-20 max-md:max-w-[250px] max-xl:h-64 left-0 animation-icon pointer-events-none z-20' src={centerAnimation} alt="icons" />
      <img className='absolute bottom-20 max-md:max-w-[250px] max-xl:h-64 left-0 animation-icon-2 pointer-events-none z-20' src={bottomAnimation} alt="icons" />
      <img src={rainbow} alt="rainbow" className='absolute h-[667px] max-xl:h-[500px] max-lg:h-[400px] max-md:h-72 max-sm:h-52 right-0 bottom-20' />
      <ToastContainer position='top-center' transition={Slide} />
      <Heading text="sign up for the latest news" myClass="lg:!leading-[105px] !text-center relative z-20" imgClass="hidden" />
      <Description text="Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed aenean egestas ut sit." myClass="max-w-[659px] relative z-20 mx-auto pb-[33px] max-md:pb-7 max-sm:pb-5 max-md:pt-2" />
      <div className='bg-teamCard relative z-30 rounded-[10px] max-w-[523px] mx-auto p-[1px]'>
        <form onSubmit={handleSubmit} action="#" className='bg-white pb-[6px] pt-[12px] max-sm:pt-1 max-sm:pb-0 pl-[19px] pr-[9px] rounded-[10px] w-full flex items-center'>
          <label htmlFor="email" className='cursor-pointer pb-1'>
            <Email />
          </label>
          <input required value={formValue.email} onChange={(e) => setFormValue({ ...formValue, email: e.target.value })} id='email' type="email" placeholder='Your email' className='px-[9px] text-black text-base leading-6 h-full w-[60%] pt-[15px] pb-[18px] max-sm:pb-5 outline-none' />
          <CustomButton text="subscribe" buttonClass="!py-[9.5px] !px-[28.6px] !text-[25px] !leading-[28.76px] max-sm:!px-3 max-sm:!py-1" myClass="!h-[49px] max-sm:!h-9 max-sm:!w-[137px] !w-[156px] !ml-auto" />
        </form>
      </div>
      <a href="#logo" className='flex relative z-20 max-w-max mx-auto mt-[287px] max-lg:mt-40 mb-[60px] max-lg:mb-10 max-sm:mt-20 max-sm:mb-6'><img src={logo} alt="logo" className='h-[180px] max-md:h-40 max-sm:h-32 mx-auto pointer-events-none' /></a>
      <ul className='flex relative z-20 items-center gap-[21px] max-lg:gap-3 justify-center'>
        {HEADER_SOCIAL_LINK_LIST.map((obj, i) => (
          <li key={i}><a target='blank' href={obj.link} className='flex items-center justify-center size-[42px] max-lg:size-9 rounded-full border border-black hover:shadow-[0px_0px_22px_4px] hover:shadow-purple transition-all duration-300'>{obj.icon}</a></li>
        ))}
      </ul>
      <a href="#copyright" className='flex max-w-max mx-auto text-xl leading-[23px] text-center relative z-20 opacity-70 mt-[63px] max-lg:mt-10 max-sm:mt-6 transition-all duration-300 hover:opacity-100'>Copyright@CrazyUnicorn.com</a>
    </div>
  )
}

export default Footer