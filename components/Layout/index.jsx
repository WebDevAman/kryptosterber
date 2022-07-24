import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const index = ({ children }) => {
    return (
        <div className='bg-themeDarkColor !bg-fixed'
            style={{
                backgroundImage: 'url(https://uploads-ssl.webflow.com/61dde1260c66047f40c11259/61de307a2bf0a020f47290c8_Lines.svg)',
                backgroundSize: '45%'
            }}
        >
            <Navbar />
            <main className='mb-12'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default index