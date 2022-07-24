import React from 'react'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { socialData } from '../../dummyData'

const Contact = () => {
    return (
        <div className='container !p-6 md:!p-12 border-themeDarkColor grid grid-cols-1 gap-6 lg:grid-cols-5 bg-themeColor shadow-md rounded-2xl '>
            <div className="col-span-1 flex flex-col space-y-6 justify-center lg:col-span-3">
                <div className="flex flex-col space-y-2">
                    <h1 className={`gradient-text pb-2 max-w-[40rem] text-2xl md:text-4xl font-lora font-bold`}>Haben Sie Fragen? Kontaktiere uns.</h1>
                    <div className="w-[8rem] h-1 bg-themeGold"></div>
                </div>
                <p className='text-gray-100 max-w-[90%]'>Wenn Sie Fragen haben oder weitere Informationen zu unserem Service benötigen, können Sie uns gerne über unsere sozialen Medien oder per E-Mail / Telefonnummer kontaktieren.</p>
                <div className="border border-themeGold flex items-center space-x-4 rounded-md shadow-md p-4 w-fit">
                    <div className="rounded-md shadow-md bg-themeDarkColor p-4 text-themeGold">
                        <HiOutlineMailOpen className='text-2xl' />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className='text-white font-semibold'>Mailen Sie mir an</h1>
                        <a href='mailto:kryptostreber@hotmail.com' className='text-themeGold text-lg font-bold'>kryptostreber@hotmail.com</a>
                    </div>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    {socialData.map(({ icon, link }, i) => (
                        <a href={link} className='bg-themeDarkColor transition-all duration-500 hover:scale-105 h-12 w-12 text-lg flex items-center justify-center text-themeGold border border-themeGold rounded-full' key={i}>
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
                <img src='/images/certificate.png' />
            </div>
        </div>
    )
}

export default Contact