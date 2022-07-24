import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Button = ({ text }) => {
    return (
        <button className='py-3 px-6 relative transition-all duration-500 pr-8 group hover:pr-10 font-medium uppercase text-themeGold border-themeGold border'>
            <span>
                {text}
            </span>
            <div className="absolute right-[-15px] transition-all duration-500 group-hover:right-[10px] top-[25%]">
                <HiOutlineArrowNarrowRight className='text-2xl transition-all duration-500' />

            </div>
        </button>
    )
}

export default Button