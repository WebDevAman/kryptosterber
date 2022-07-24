import { FaTiktok, FaInstagram, FaPinterestP } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillPhone } from 'react-icons/ai'
export const navData = [
    {
        label: "HEIMA",
        slug: "/"
    },
    {
        label: "Digitale Transformation",
        slug: "#digital-transformation"
    },
    {
        label: "Leistungen",
        slug: "#services"
    },
    {
        label: "Kontaktiere Uns",
        slug: "#contact"
    },
]
export const slideData = [
    '/images/banner/3.jpg',
    '/images/banner/2.jpg',
    '/images/banner/1.png',
]

export const socialData = [
    { link: 'tel:+49 151 15563069', icon: <AiFillPhone className='text-lg' /> },
    { link: 'mailto:kryptostreber@hotmail.com', icon: <HiOutlineMail className='text-lg' /> },
    { link: 'https://vm.tiktok.com/ZMNCACgnU', icon: <FaTiktok className='text-lg' /> },
    { link: 'https://www.instagram.com/kryptostreber/', icon: <FaInstagram className='text-lg' /> },
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