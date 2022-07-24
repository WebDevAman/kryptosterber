import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillPhone } from 'react-icons/ai'
export const navData = [
    {
        label: "Home",
        slug: "/"
    },
    {
        label: "Digital Transformation",
        slug: "#digital-transformation"
    },
    {
        label: "Services",
        slug: "#services"
    },
    {
        label: "Contact Us",
        slug: "#contact"
    },
]
export const slideData = [
    '/images/banner/3.jpg',
    '/images/banner/2.jpg',
    '/images/banner/1.png',
]

export const socialData = [
    { link: '/', icon: <AiFillPhone className='text-lg' /> },
    { link: '/', icon: <HiOutlineMail className='text-lg' /> },
    { link: '/', icon: <FaFacebookF className='text-lg' /> },
    { link: '/', icon: <FaInstagram className='text-lg' /> },
]


export const serviceData = [
    {
        heading: " Dein Starter-Paket",
        imageUrl: '/images/services-1.png',
        chips: ['Starter Package']
    },
    {
        heading: " Dein Experte-Paket",
        imageUrl: '/images/services-2.png',
        chips: ['Expert Package']
    },
    {
        heading: " Dein Erweitertes-Paket",
        imageUrl: '/images/services-3.png',
        chips: ['Extension Package']

    },
]