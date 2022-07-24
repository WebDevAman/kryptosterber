import React from 'react'
import Button from '../../common/Button'

const Hero = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-12 lg:gap-0 container my-4 md:my-12 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-6">
                    <h1 className='font-lora pb-2 text-2xl md:text-5xl  gradient-text leading-relaxed font-bold text-white'>
                        Learn to invest in cryptocurrency with Kryptosterber.
                    </h1>
                    <div className='bg-themeGold h-1 w-24'></div>
                    <p className='text-gray-50 max-w-[32rem]'>A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms. The use of encryption technologies means that cryptocurrencies function both as a currency and as a virtual accounting system. To use cryptocurrencies, you need a cryptocurrency wallet.</p>
                    <a href='#services' className="w-fit">
                        <Button text='Explore now' />

                    </a>
                </div>
                <div className="flex space-x-2 items-start relative">
                    <img src='/images/intro-1.jpeg' className='max-w-[14rem] md:max-w-[20rem] rounded-xl shadow-3xl object-cover' />
                    <img src='/images/intro-2.jpeg' className='max-w-[14rem] md:max-w-[20rem] rounded-xl shadow-3xl mt-12 object-cover' />
                </div>
            </div>

        </>
    )
}

export default Hero