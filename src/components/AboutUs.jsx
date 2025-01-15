import React from 'react'
import unicorn from "../assets/images/webp/about-us-unicorn.webp"
import Heading from '../common/Heading'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'

const AboutUs = () => {
  return (
    <div id='about' className='pt-[139px] max-md:pt-28 max-sm:pt-20'>
      <div className='max-w-[1352px] mx-auto px-4'>
        <div className='flex items-center max-lg:flex-wrap max-lg:flex-col-reverse justify-between -mx-3'>
          <div className='w-7/12 px-3 max-lg:w-full max-lg:pt-8'>
            <img src={unicorn} alt="about-us-unicorn" className='h-[694px] max-xl:h-[650px] max-md:h-[500px] max-sm:h-[400px] max-lg:mx-auto xl:max-w-[661px] xl:w-full pointer-events-none' />
          </div>
          <div className='w-5/12 px-3 max-lg:w-full'>
            <Heading myClass="lg:!mx-[unset]" text="about us" />
            <Description myClass="lg:!text-left pt-6 pb-[10px] max-md:pt-4 max-sm:pt-3" text="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. " />
            <Description myClass="lg:!text-left" text="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris." />
            <CustomButton text="mint now" myClass="mt-[53px] max-lg:mt-10 max-sm:mt-7 max-lg:!mx-auto"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs