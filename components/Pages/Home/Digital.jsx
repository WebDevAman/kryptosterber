import React from 'react'
import Title from '../../common/Title'

const Digital = () => {
    return (
        <div className='flex container flex-col space-y-12'>
            <div className="hidden md:flex text-center items-center flex-col space-y-4">
                <Title text={'Die digitale Transformation der Zeit'} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8" >
                <div className="col-span-1 md:col-span-3">
                    <div className="flex flex-col space-y-4 pb-6">
                        <div className="flex md:hidden flex-col text-center md:text-left items-center md:items-start space-y-2">
                            <h1 className={`gradient-text pb-2 max-w-[40rem] text-2xl md:text-4xl font-lora font-bold`}>Die digitale Transformation der Zeit. Auch der Finanzsektor wird digitalisiert.</h1>
                            <div className="w-[8rem] h-1 bg-themeGold"></div>
                        </div>
                        <div className="md:flex hidden flex-col text-center md:text-left items-center md:items-start space-y-2">
                            <h1 className={`gradient-text pb-2 max-w-[40rem] text-2xl md:text-4xl font-lora font-bold`}>Auch der Finanzsektor wird digitalisiert.</h1>
                            <div className="w-[8rem] h-1 bg-themeGold"></div>
                        </div>
                        <p className='text-gray-100 text-center md:text-left'>Die Digitalisierung des Finanzwesens beinhaltet die Integration mehrerer Technologien und Strategien, die es der Finanzfunktion ermöglichen, im digitalen Zeitalter Mehrwert zu schaffen.</p>
                    </div>
                    <img src='/images/digital-1.jpg' />
                </div>
                <div className="col-span-1 md:col-span-2 grid grid-row-2 gap-8">
                    <img src='/images/digital-2.jpg' />
                    <img src='/images/digital-3.webp' />
                </div>
            </div>
        </div>
    )
}

export default Digital