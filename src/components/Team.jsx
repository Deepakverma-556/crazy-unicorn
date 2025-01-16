import React from 'react'
import Heading from '../common/Heading'
import { TEAM_LIST } from '../utils/helper'
import Description from '../common/Description'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Team = () => {
  return (
    <div id='team' className='pt-[137px] max-lg:pt-20 max-md:pt-16 max-sm:pt-12'>
      <Heading text={'Team'} />
      <div className='max-w-[1321px] flex max-2xl:px-5 relative z-10 mx-auto gap-[23.64px] max-xl:flex-wrap max-xl:justify-center max-xl:px-5'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={
            {
              pagination: '.swiper-pagination',
              clickable: true
            }
          } modules={[Pagination, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true
            },
            770: {
              slidesPerView: 2,
              spaceBetween: 40,
              centeredSlides: true,
              autoplay: true
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 23,
              centeredSlides: false,
              autoplay: false
            },
          }
          } className="mySwiper">
          {TEAM_LIST.map((obj, index) => (
            <SwiperSlide key={index}>
              <div className='max-w-[424px] group max-lg:mx-auto hover:scale-y-110 cursor-pointer origin-bottom transition-all duration-300 p-[1px] bg-teamCard w-full rounded-[25px]' >
                <div className='bg-white justify-center items-center flex flex-col pb-5 rounded-[25px]'>
                  <img className='max-w-[312px] pointer-events-none max-md:max-w-[250px] w-full -mt-9 max-md:mt-[unset] max-md:group-hover:scale-y-[0.99] group-hover:scale-[1.20] origin-bottom transition-all duration-300' src={obj.image} alt="images" />
                  <h3 className='text-[40px] pt-[28.84px] max-lg:text-4xl group-hover:scale-y-[0.99] max-md:text-3xl max-sm:text-2xl font-pinky text-center text-black'>{obj.title}</h3>
                  <Description text={obj.position} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Team