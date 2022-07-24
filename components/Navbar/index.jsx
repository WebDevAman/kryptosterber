import React, { useState } from 'react'
import { navData } from '../dummyData'
import Logo from '../common/Logo'
import NavDrawer from './NavDrawer'

const index = () => {
    const [open, setOpen] = useState(false)
    return (
        <header
            className='flex z-50 bg-themeColor shadow-8xl  sticky inset-0 min-h-[4rem] md:min-h-[6rem] py-2 justify-center w-full'>
            <NavDrawer open={open} setOpen={setOpen} />
            <div className="container flex items-center justify-between">
                <Logo />
                <ul className='space-x-8 hidden md:flex'>
                    {navData.map(({ label, slug }, i) => (
                        <li
                            key={i} className='h-full text-white flex items-center '>
                            <a href={slug} className=' hover:opacity-90 hover:-translate-y-1 transition-all duration-500 text-base uppercase text-lightBlack'>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div
                    className="flex md:hidden items-center ">
                    <div className=' cursor-pointer space-y-2' onClick={() => setOpen(!open)}>
                        <div className={`w-7 bg-themeGold h-[2px] `}></div>
                        <div className={`w-7 bg-themeGold h-[2px] `}></div>
                        <div className={`w-7 bg-themeGold h-[2px]`}></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default index