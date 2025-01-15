import React, { useState } from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { Email } from '../utils/icons'
import CustomButton from '../common/CustomButton'
import emailjs from 'emailjs-com';
import { toast, ToastContainer, Slide } from 'react-toastify';
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
      email:""
    })
  }
  return (
    <div className='bg-footer bg-no-repeat bg-cover px-4'>
      <ToastContainer position='top-center' transition={Slide} />
      <Heading text="sign up for the latest news" myClass="lg:!leading-[105px]" imgClass="hidden" />
      <Description text="Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed aenean egestas ut sit." myClass="max-w-[659px] mx-auto" />
      <div className='bg-gradient-to-r from-purple to-darkPurple rounded-[10px] max-w-[523px] mx-auto p-[1px]'>
        <form onSubmit={handleSubmit} action="#" className='bg-white pb-[6px] pt-[14px] pl-[19px] pr-[9px] rounded-[10px] w-full flex items-center'>
          <Email />
          <input required value={formValue.email} onChange={(e) => setFormValue({ ...formValue, email: e.target.value })} id='email' type="email" placeholder='Your email' className='px-[9px] h-full w-[60%] py-[15px] outline-none' />
          <CustomButton text="subscribe" buttonClass="!py-[9.5px] !px-[28.6px] !text-[25px] !leading-[28.76px]" myClass="!h-[49px] !w-[156px] !ml-auto" />
        </form>
      </div>
    </div>
  )
}

export default Footer