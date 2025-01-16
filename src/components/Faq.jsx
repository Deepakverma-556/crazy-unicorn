import React, { useEffect, useState } from 'react'
import Heading from '../common/Heading'
import { FAQS_LIST } from '../utils/helper'
import { FaqArrow } from '../utils/icons'
import Description from '../common/Description'
import AnimationIcon from '../assets/images/webp/faq-animation-icons.webp'
import rightAnimation from '../assets/images/png/our-story-right-animation.png'
import gsap from 'gsap'

const Faq = () => {
  const [openIndex , setOpenIndex] = useState(null)
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    gsap.fromTo('.animation-icon',
       { y: -50 },
       {scale: 1 , duration: 3 , repeat: -1 , yoyo: true , y: 50}
    )
    gsap.fromTo('.animation-icon-2',
      { y: 50 },
      { scale: 1, duration: 3, repeat: -1, yoyo: true, y: -50 }
    )
  }, [])

  return (
    <div id='faq' className='relative pt-[207px] max-lg:pt-20 max-md:pt-16 max-sm:pt-12'>
      <img className='absolute bottom-40 max-md:max-w-[250px] right-0 animation-icon h-[529px] max-md:h-[400px] max-sm:h-72 max-md:object-cover pointer-events-none' src={rightAnimation} alt="icons" />
      <img className='absolute top-[-40%] max-md:max-w-[250px] left-0 animation-icon-2 pointer-events-auto' src={AnimationIcon} alt="icons" />
        <div className='max-w-[1189px] relative z-10 flex gap-[35px] max-md:gap-[25px] max-sm:gap-[15px] flex-col max-xl:px-5 mx-auto'>
            <Heading text={'FAQs'} myClass={'pb-[88px] max-lg:pb-16 max-sm:pb-2'}/>
            { FAQS_LIST.map((obj , index) => (
              <div className='w-full' key={index}>
                  <button onClick={() => handleClick(index)} className='flex w-full !text-left font-pinky text-[40px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl justify-between items-center'>{obj.title}<span className={`transition-all duration-300 ease-linear ${openIndex === index ? 'rotate-180' : ''}`}><FaqArrow/></span> </button>
                  <Description text={obj.description} myClass={`!text-left max-w-[831px] overflow-hidden transition-all duration-300  border-solid border-black border-opacity-30 ${openIndex === index ? 'max-h-28 border-b pb-[22px] max-md:pb-[15px]' : 'max-h-0'}`}/>
              </div>
            ))
            }
        </div>
    </div>
  )
}

export default Faq