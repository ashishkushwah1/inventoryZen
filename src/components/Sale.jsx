import React from 'react'
import girl_2 from '../images/girl_2.png'
const Sale = () => {
    return (
        <div className='bg-[#EDCE49] flex'>
            <img src={girl_2} alt='Girl' className='w-1/2 h-1/2' />
            <div className='flex flex-col w-1/2 pt-36'>
                <div className="relative inline-block -rotate-2 bg-white w-3/5">
                    <span className="block rotate-0 font-black text-8xl leading-[120px] px-5">
                        PAYDAY
                    </span>
                </div>
                <span className='font-black text-8xl leading-[120px] px-5'>SALE NOW</span>
                <p className='text-4xl leading-[52px] font-medium py-5 w-9/10'>
                    Spend minimal $100 get 30% off voucher code for your next purchase
                </p>
                <div className='flex flex-col'>
                    <span className='text-4xl leading-[52px] font-bold'>1 June - 10 June 2021</span>
                    <span className='text-4xl leading-[52px]'>*Terms & Conditoins apply</span>
                </div>
                <button className='py-2.5 px-3 text-white rounded-md bg-black text-2xl font-medium w-40 my-5'>
                    Shop Now
                </button>
            </div>
        </div>
    )
}

export default Sale
