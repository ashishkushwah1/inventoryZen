import React from 'react'
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

const Product = ({ image, name, type, price, rating, reviews }) => {
    const [visible, setVisible] = React.useState(false);
    const roundedRating = Math.round(rating * 2) / 2;
    const totalStars = 5;
    return (
        <div>
            <div className='bg-[#F5F5F5] relative w-[270px] h-[250px] flex items-center justify-center rounded-md shadow-lg'
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                <img src={image} alt="" className='w-2/5' />
                {
                    type == "new" &&
                    <span className='absolute top-2 left-2 bg-[#00FF66] text-white text-xs font-semibold px-2 py-1 rounded-md'>New</span>
                }
                <span className='w-10 h-10 bg-white rounded-full absolute top-1 right-1 p-1'>
                    <CiHeart className='w-full h-full' />
                </span>
                <span className='w-10 h-10 bg-white rounded-full absolute top-14 right-1 p-1'>
                    <MdOutlineRemoveRedEye className='w-full h-full' />
                </span>
                {
                    visible && (
                        <div className='absolute bottom-0 left-0 right-0 bg-black text-white h-1/6 rounded-b-md flex items-center justify-center'>
                            Add to Cart
                        </div>
                    )
                }
            </div>
            <div className='py-2 flex flex-col'>
                <p className='text-base font-semibold leading-6'>{name}</p>
                <div className='flex items-center gap-1 text-base leading-6 font-semibold'>
                    <span className='text-[#DB4444]'>${price}</span>
                    {[...Array(totalStars)].map((_, index) => {
                        if (roundedRating >= index + 1) {
                            return <FaStar key={index} className="text-yellow-400 w-6 h-6" />;
                        } else if (roundedRating >= index + 0.5) {
                            return (
                                <div key={index} className="relative w-6 h-6">
                                    <FaStar className="text-gray-300 absolute top-0 left-0 w-6 h-6" />
                                    <FaStar
                                        className="text-yellow-400 absolute top-0 left-0 w-6 h-6 overflow-hidden"
                                        style={{ clipPath: "inset(0 50% 0 0)" }}
                                    />
                                </div>
                            );
                        } else {
                            return <FaStar key={index} className="text-gray-300 w-6 h-6" />;
                        }
                    })}
                    <span className='text-[#8E8E8E]'>({reviews})</span>
                </div>
            </div>
        </div >
    )
}

export default Product
