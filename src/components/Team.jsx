import React from 'react'
import Heading from '../common/Heading'
import { TEAM_LIST } from '../utils/helper'
import Description from '../common/Description'

const Team = () => {
  return (
    <div id='team' className='pb-[121.5px] pt-[94.5px]'>
        <Heading text={'Team'} myClass={'mb-[190px] max-xl:mb-[150px] max-lg:mb-[100px] max-md:mb-[80px] max-sm:mb-10'}/>
        <div className='max-w-[1321px] flex relative z-10 mx-auto gap-[23.64px] max-md:gap-[30px] max-xl:flex-wrap max-xl:justify-center max-xl:px-5'>
          {TEAM_LIST.map((obj , index) => (
              <div className='max-w-[424px] group hover:scale-y-110 max-md:scale-y-105 cursor-pointer origin-bottom transition-all duration-300 p-[1px] bg-teamCard w-full rounded-[25px]' key={index}>
                  <div className='bg-white justify-center items-center flex flex-col pb-5 rounded-[25px]'>
                    <img className='max-w-[312px] max-md:max-w-[250px] max-md:w-full max-md:mt-0 -mt-9 group-hover:scale-[1.20] max-md:group-hover:scale-[1] origin-bottom transition-all duration-300' src={obj.image} alt="images" />
                    <h3 className='text-[40px] pt-[28.84px] max-lg:text-4xl group-hover:scale-y-[0.99] max-md:text-3xl max-sm:text-2xl font-pinky text-center text-black'>{obj.title}</h3>
                    <Description text={obj.position}/>
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}

export default Team