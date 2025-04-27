import React from 'react'
import favourite from '../images/favourite.png'
import girl_3 from '../images/girl_3.png'
import girl_4 from '../images/girl_4.png'
const Favourite = () => {
    return (
        <div className='px-20 pt-10'>
            <img src={favourite} alt='Favourite' />
            <div className='py-10 flex gap-10'>
                <div>
                    <img src={girl_3} alt='people' />
                    <p className='text-3xl font-medium'>Trending on instagram</p>
                    <p className='text-2xl text-gray-400'>Explore Now!</p>
                </div>
                <div>
                    <img src={girl_4} alt='people' />
                    <p className='text-3xl font-medium'>All under $40</p>
                    <p className='text-2xl text-gray-400'>Explore Now!</p>
                </div>
            </div>
        </div>
    )
}

export default Favourite
