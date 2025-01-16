import React from 'react'
import Heading from '../common/Heading'
import { TEAM_LIST } from '../utils/helper'
import Description from '../common/Description'

const Team = () => {
  return (
    <div className='bg-team py-12 bg-cover bg-no-repeat'>
        <Heading text={'Team'} myClass={'mb-[190px]'}/>
        <div className='max-w-[1321px] flex mx-auto gap-[23.64px] max-xl:flex-wrap max-xl:justify-center max-xl:px-5'>
          {TEAM_LIST.map((obj , index) => (
              <div className='max-w-[424px] group hover:scale-y-110 cursor-pointer origin-bottom transition-all duration-300 p-[1px] bg-teamCard w-full rounded-[25px]' key={index}>
                  <div className='bg-white justify-center items-center flex flex-col pb-5 rounded-[25px]'>
                    <img className='max-w-[312px] -mt-9 group-hover:scale-[1.20] origin-bottom transition-all duration-300' src={obj.image} alt="images" />
                    <h3 className='text-[40px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-pinky text-center text-black'>{obj.title}</h3>
                    <Description text={obj.position}/>
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}

export default Team