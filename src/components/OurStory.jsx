import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import AboutUs from './AboutUs'

const OurStory = () => {
  return (
    <div className='bg-aboutUs bg-no-repeat bg-cover'>
      <div id='story' className='pt-8 px-4 max-sm:pt-14 bg-'>
        <Heading text="our story" />
        <Description myClass="max-w-[1109px] mx-auto pt-[22px] max-md:pt-4 max-sm:pt-3" text="Vestibulum, id lacus, volutpat nec. Magna senectus enim nisi, sit. Sagittis, ac velit gravida a nullam lobortis in malesuada. Cras pellentesque convallis semper dolor at velit diam odio. Nullam quam sollicitudin urna eget. In gravida maecenas amet tincidunt feugiat tellus, pulvinar nulla. Ultricies eu lectus consequat et imperdiet eget elementum. Euismod placerat amet nisl sagittis arcu, et, sodales velit. Pretium elit volutpat orci accumsan, a ac id rutrum enim. Tellus luctus eget elit vitae eget nisl ante." />
        <Description myClass="max-w-[953px] mx-auto" text="Sed lectus ut elit id lectus diam massa nisl pretium. Vel amet, sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius lobortis. Morbi sit sit magna lorem arcu facilisi ipsum sed amet. At bibendum egestas in maecenas." />
      </div>
      <AboutUs/>
    </div>
  )
}

export default OurStory