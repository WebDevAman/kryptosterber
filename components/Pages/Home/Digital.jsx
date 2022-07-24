import React from 'react'
import Title from '../../common/Title'

const Digital = () => {
    return (
        <div className='flex container flex-col space-y-12'>
            <div className="hidden md:flex text-center items-center flex-col space-y-4">
                <Title text={'The Digital Transformation of time'} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8" >
                <div className="col-span-1 md:col-span-3">
                    <div className="flex flex-col space-y-4 pb-6">
                        <div className="flex md:hidden flex-col text-center md:text-left items-center md:items-left space-y-2">
                            <h1 className={`gradient-text pb-2 max-w-[40rem] text-2xl md:text-4xl font-lora font-bold`}>The Digital Transformation of time.The Financial Sector is also being Digitized.</h1>
                            <div className="w-[8rem] h-1 bg-themeGold"></div>
                        </div>
                        <div className="md:flex hidden flex-col text-center md:text-left items-center md:items-left space-y-2">
                            <h1 className={`gradient-text pb-2 max-w-[40rem] text-2xl md:text-4xl font-lora font-bold`}>The Financial Sector is also being Digitized.</h1>
                            <div className="w-[8rem] h-1 bg-themeGold"></div>
                        </div>
                        <p className='text-gray-100 text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique ab quisquam, ut magnam porro assumenda corporis aperiam ipsum tempore.</p>
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