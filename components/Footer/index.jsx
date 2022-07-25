import React from 'react'
import Logo from '../common/Logo'
import { socialData } from '../dummyData'

const index = () => {
    return (
        <div className='bg-themeColor flex flex-col py-6 md:py-12'>
            <div className="flex flex-col container space-y-6 md:space-y-12">
                <div className="flex items-center flex-col md:flex-row justify-between">
                    <div className="max-h-[4rem]">
                        <Logo />
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {socialData.map(({ icon, link }, i) => (
                            <a href={link} className='bg-themeDarkColor transition-all duration-500 hover:scale-105 h-12 w-12 text-lg flex items-center justify-center text-themeGold border border-themeGold rounded-full' key={i}>
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="border-t font-sans border-themeGold pt-8 text-center md:text-left text-themeGold text-lg">
                    Copyright &copy; 2022 | 06464 Frose, OT Seeland, vor dem Bahnhof 282 A
                </div>
            </div>
        </div>
    )
}

export default index