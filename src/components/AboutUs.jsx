import React,{useEffect} from 'react'
import unicorn from "../assets/images/webp/about-us-unicorn.webp"
import Heading from '../common/Heading'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import gsap from 'gsap'
import leftAnimation from "../assets/images/png/our-story-left-animation.png"

const AboutUs = () => {
    useEffect(() => {
      gsap.fromTo('.animation-icon',
        { y: -30 },
        { scale: 1, duration: 3, repeat: -1, yoyo: true, y: 30 }
      )
    }, [])
  return (
    <div id='about' className='pt-[139px] max-lg:pt-20 max-sm:pt-16 relative'>
      <img className='absolute -bottom-[30%] max-md:max-w-[250px] left-0 animation-icon h-[529px] max-md:h-[400px] max-sm:h-72 max-md:object-cover pointer-events-none' src={leftAnimation} alt="icons" />
      <div className='max-w-[1352px] relative mx-auto px-4'>
        <div className='flex items-center max-lg:flex-wrap max-lg:flex-col-reverse justify-between -mx-3'>
          <div className='w-7/12 px-3 max-lg:w-full max-lg:pt-8 max-sm:pt-5'>
            <img src={unicorn} alt="about-us-unicorn" className='h-[766px] max-xl:h-[650px] max-md:h-[500px] max-sm:h-[400px] max-lg:mx-auto xl:max-w-[661px] xl:w-full pointer-events-none' />
          </div>
          <div className='w-5/12 px-3 max-lg:w-full'>
            <Heading myClass="lg:!mx-[unset]" text="about us" />
            <Description myClass="lg:!text-left pt-6 pb-[10px] max-md:pt-4 max-sm:pt-3" text="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas." />
            <Description myClass="lg:!text-left" text="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris." />
            <CustomButton text="mint now" myClass="mt-[53px] max-lg:mt-10 max-sm:mt-7 max-lg:!mx-auto"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs