import React from 'react'

const Joinus = () => {
  return (
    <div className='bg-[#E5C643] flex flex-col justify-center items-center pt-20 pb-14 gap-10'>
        <h1 className='text-white font-black text-[55px] leading-[70px] text-center w-3/5'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
        <p className='text-white text-[32px] leading-8'>Type your email down below and be young wild generation</p>
        <div className='relative w-1/3'>
            <input type="email" placeholder='Add your email here' className='w-full placeholder-[#767676] py-4 px-4 bg-white text-black outline-none rounded-md' />
            <button className='text-white text-xl font-medium rounded-md bg-black py-2 px-4 absolute right-1 top-1 translate-y-0.5'>SEND</button>
        </div>
    </div>
  )
}

export default Joinus
