import React from 'react'
import Button from '../../common/Button'

const Hero = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-12 lg:gap-0 container my-4 md:my-12 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-6">
                    <h1 className='font-lora pb-2 text-2xl md:text-5xl  gradient-text leading-relaxed font-bold text-white'>
                        Lernen Sie mit, in Kryptowährung zu investieren Kryptosterber.
                    </h1>
                    <div className='bg-themeGold h-1 w-24'></div>
                    <p className='text-gray-50 max-w-[32rem]'>Eine Kryptowährung ist eine digitale Währung, bei der es sich um eine alternative Zahlungsform handelt, die mithilfe von Verschlüsselungsalgorithmen erstellt wird. Durch den Einsatz von Verschlüsselungstechnologien fungieren Kryptowährungen sowohl als Währung als auch als virtuelles Abrechnungssystem. Um Kryptowährungen verwenden zu können, benötigen Sie eine Kryptowährungs-Wallet.</p>
                    <a href='#services' className="w-fit">
                        <Button text='JETZT ERKUNDEN' />

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