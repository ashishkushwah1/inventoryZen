import React from 'react'
import hm from '../images/hm.png'
import obey from '../images/obey.png'
import shopify from '../images/shopify.png'
import lacoste from '../images/lacoste.png'
import levis from '../images/levis.png'
import amazon from '../images/amazon.png'
const Companies = () => {
    return (
        <div className='bg-[#EBD96B] flex items-center justify-evenly px-5 py-6 my-10'>
            <img src={hm} alt='hm' />
            <img src={obey} alt='obey' />
            <img src={shopify} alt='shopify' />
            <img src={lacoste} alt='lacoste' />
            <img src={levis} alt='levis' />
            <img src={amazon} alt='amazon' />
        </div>
    )
}

export default Companies
