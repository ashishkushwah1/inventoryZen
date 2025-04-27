import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='px-10 pt-10 pb-20 bg-black flex items-center justify-between'>
            <div className='flex flex-col gap-8 w-[30%]'>
                <span className='text-4xl text-white font-black'>Fashion</span>
                <span className='text-2xl text-[#8E8E8E]'>Complete your style with awesome clothes from us.</span>
                <div className='flex items-center gap-4'>
                    <div className='bg-[#EBD96B] rounded-xl w-12 h-12 p-2'>
                        <FaFacebookF className='w-full h-full' />
                    </div>
                    <div className='bg-[#EBD96B] rounded-xl w-12 h-12 p-2'>
                        <FaInstagram className='w-full h-full' />
                    </div>
                    <div className='bg-[#EBD96B] rounded-xl w-12 h-12 p-2'>
                        <FaTwitter className='w-full h-full' />
                    </div>
                    <div className='bg-[#EBD96B] rounded-xl w-12 h-12 p-2'>
                        <FaLinkedinIn className='w-full h-full' />
                    </div>
                </div>
            </div>
            <div className='flex gap-48'>
                <div className='flex flex-col gap-4'>
                    <span className='text-2xl text-white'>Company</span>
                    <span className='text-[#8E8E8E]'>About</span>
                    <span className='text-[#8E8E8E]'>Contact us</span>
                    <span className='text-[#8E8E8E]'>Support</span>
                    <span className='text-[#8E8E8E]'>Careers</span>
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='text-2xl text-white'>Quick Link</span>
                    <span className='text-[#8E8E8E]'>Share Location</span>
                    <span className='text-[#8E8E8E]'>Orders Tracking</span>
                    <span className='text-[#8E8E8E]'>Size Guide</span>
                    <span className='text-[#8E8E8E]'>FAQs</span>
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='text-2xl text-white'>Legal</span>
                    <span className='text-[#8E8E8E]'>Terms & Conditions</span>
                    <span className='text-[#8E8E8E]'>Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
