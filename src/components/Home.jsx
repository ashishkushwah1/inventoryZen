import React from 'react'
import girl_1 from '../images/girl_1.svg'
const Home = () => {
    return (
        <div className='flex bg-[#F4F6F5] rounded-[59px] mx-20 p-10 relative'>
            <div className='flex flex-col'>
                <div className="relative inline-block -rotate-2 bg-white w-4/5">
                    <span className="block rotate-0 font-black text-8xl leading-[120px] px-5">
                        LET'S
                    </span>
                </div>
                <span className='font-black text-8xl leading-[120px] px-5'>EXPLORE</span>
                <div className="relative inline-block -rotate-2 bg-[#EBD96B] w-4/5">
                    <span className="block rotate-0 font-black text-8xl leading-[120px] px-5">
                        UNIQUE
                    </span>
                </div>
                <span className='font-black text-8xl leading-[120px] px-5'>CLOTHES</span>
                <span className='text-2xl ml-5'>Live for influential and Innovative fashion!</span>
                <button className='ml-5 bg-black px-1 py-3 text-white rounded-md text-2xl font-medium my-4 w-1/3'>Shop Now</button>
            </div>
            <img src={girl_1} alt='' className='w-1/2 absolute bottom-0 right-0'/>
        </div>
    )
}

export default Home
