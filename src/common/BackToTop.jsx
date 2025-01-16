import React, { useEffect, useState } from 'react'
import { Arrow } from '../utils/icons'

const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false)
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const setHendler = () => {
        setScrollToTop(window.scrollY > 100)
    }
    useEffect(() => {
        window.addEventListener("scroll", setHendler)
    },)

    return (
        <>
            {scrollTop && (
                <div onClick={scrollHandler} className='fixed z-30 right-2.5 bottom-2.5 bg-gradient-to-r from-purple to-darkPurple cursor-pointer animate-bounce size-7 2xl:size-20 border border-white rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-[0px_0px_22px_3px] hover:shadow-white'><Arrow myClass="rotate-180" />
                </div>
            )
            }
        </>
    )
}

export default BackToTop