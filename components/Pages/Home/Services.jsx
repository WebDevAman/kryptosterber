import React from 'react'
import Title from '../../common/Title'
import { serviceData } from '../../dummyData'

const Services = () => {
    return (
        <div className='flex container flex-col space-y-6'>
            <Title text={'Our Services'} />
            <div className="text-center text-gray-100 max-w-[30rem] mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum adipisci reiciendis  mollitia inventore totam.</div>
            <div className="flex justify-center">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {serviceData.map(({ imageUrl, heading, chips }) => (
                        <div className="hover:scale-101 transition-all duration-500 max-w-sm rounded-lg border  shadow-md bg-themeColor border-themeColor">
                            <img className="rounded-t-lg" src={imageUrl} alt="image" />
                            <div className="p-5 flex flex-col space-y-2">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
                                <div className="flex space-x-4">
                                    {chips.map(chip => (
                                        <div key={chip} className='py-1 bg-themeGold w-fit text-sm font-semibold rounded-full text-themeColor px-6'>
                                            {chip}
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Services