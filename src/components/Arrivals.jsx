import React from 'react'
import new_arrivals from '../images/new.png'
import hoodies from '../images/hoodies.png'
import coats from '../images/coats.png'
import tees from '../images/tees.png'
import { BsArrowRight } from 'react-icons/bs'
const Arrivals = () => {
    return (
        <div className='px-20'>
            <img src={new_arrivals} alt='New Arrivals' className='' />
            <div className='py-10 flex justify-center'>
                <div>
                    <img src={hoodies} alt='Hoddies' className='h-3/4' />
                    <div className='flex items-center pt-4 w-5/6 justify-between'>
                        <div>
                            <h2 className='text-xl leading-[50px] font-medium'>Hoodies & Sweetshirt</h2>
                            <p>Explore Now!</p>
                        </div>
                        <BsArrowRight className='w-10 h-10 text-gray-400' />
                    </div>
                </div>
                <div>
                    <img src={coats} alt='Hoddies' className='h-3/4' />
                    <div className='flex items-center pt-4 w-5/6 justify-between'>
                        <div>
                            <h2 className='text-xl leading-[50px] font-medium'>Coats & Parkas</h2>
                            <p>Explore Now!</p>
                        </div>
                        <BsArrowRight className='w-10 h-10 text-gray-400' />
                    </div>
                </div>
                <div>
                    <img src={tees} alt='Hoddies' className='h-3/4' />
                    <div className='flex items-center justify-between pt-4 w-5/6'>
                        <div>
                            <h2 className='text-[32px] leading-[50px] font-medium'>Tees & T-Shirt</h2>
                            <p>Explore Now!</p>
                        </div>
                        <BsArrowRight className='w-10 h-10 text-gray-400' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arrivals
