import React from 'react'

const Title = ({ text, small }) => {
    return (
        <div className="flex items-center text-center flex-col space-y-2">
            <h1 className={`gradient-text pb-2 ${small ? 'text-xl lg:text-2xl' : 'text-2xl md:text-4xl'} font-lora font-bold`}>{text}</h1>
            <div className="w-[8rem] h-1 bg-themeGold"></div>
        </div>
    )
}

export default Title