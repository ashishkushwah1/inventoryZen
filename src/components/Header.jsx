import React from 'react'
import logo from '../images/logo.svg'
const Header = () => {
    return (
        <div className='px-20 pb-8 flex justify-between items-center bg-white'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt='Logo' className='w-8' />
                <span className='font-black text-5xl'>Fashion</span>
            </div>
            <div>
                <ul className='flex items-center gap-8 mt-4'>
                    <li className='text-[22px] text-[#242323] hover:text-gray-900 cursor-pointer'>Catalogue</li>
                    <li className='text-[22px] text-[#242323] hover:text-gray-900 cursor-pointer'>Fashion</li>
                    <li className='text-[22px] text-[#242323] hover:text-gray-900 cursor-pointer'>Favourite</li>
                    <li className='text-[22px] text-[#242323] hover:text-gray-900 cursor-pointer'>LifeStyle</li>
                    <li>
                        <button className='text-2xl text-white bg-black rounded-md py-2.5 px-3 cursor-pointer'>
                            Sign up
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
