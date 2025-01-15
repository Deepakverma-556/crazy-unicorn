import React, { useState } from 'react'
import Heading from '../common/Heading'
import { FAQS_LIST } from '../utils/helper'
import { FaqArrow } from '../utils/icons'
import Description from '../common/Description'

const Faq = () => {
  const [openIndex , setOpenIndex] = useState(null)
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='bg-faqs bg-no-repeat bg-cover py-12'>
        <div className='max-w-[1189px] flex gap-[35px] max-md:gap-[25px] flex-col max-xl:px-5 mx-auto'>
            <Heading text={'FAQs'} myClass={'pb-[88px]'}/>
            { FAQS_LIST.map((obj , index) => (
              <div className='w-full' key={index}>
                  <button onClick={() => handleClick(index)} className='flex w-full !text-left font-pinky text-[40px] max-lg:text-4xl max-md:text-3xl max-sm:text-3xl justify-between items-center'>{obj.title}<span className={`transition-all duration-300 ease-linear ${openIndex === index ? 'rotate-180' : ''}`}><FaqArrow/></span> </button>
                  <Description text={obj.description} myClass={`!text-left max-w-[831px] overflow-hidden transition-all duration-300  border-solid border-black border-opacity-30 ${openIndex === index ? 'max-h-28 border-b pb-[22px] max-md:pb-[15px]' : 'max-h-0'}`}/>
              </div>
            ))
            }
        </div>
    </div>
  )
}

export default Faq