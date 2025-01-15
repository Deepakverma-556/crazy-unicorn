import React from 'react'
import unicorn from "../assets/images/webp/about-us-unicorn.webp"
import Heading from '../common/Heading'
import Description from '../common/Description'

const AboutUs = () => {
  return (
    <div>
      <div className='max-w-[1352px] mx-auto px-4'>
        <div className='flex items-center gap-[83px]'>
          <img src={unicorn} alt="about-us-unicorn" className='h-[694px]' />
          <div>
            <Heading myClass="!flex !justify-start !items-start" text="about us" />
            <Description myClass="!text-left" text="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. " />
            <Description myClass="!text-left" text="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris."/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs