import React from 'react'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Product from './Product';
import Dogfood from '../images/Dogfood.png'
import Camera from '../images/Camera.png'
import laptop from '../images/laptop.png'
import playstation from '../images/playstation.png'
import car from '../images/car.png'
import shoes from '../images/shoes.png'
import controller from '../images/controller.png'
import jacket from '../images/jacket.png'
const Products = () => {
    return (
        <div className='px-20 flex flex-col '>
            <div className='flex items-center gap-2'>
                <div className='w-4 h-8 bg-[#DB4444]'></div>
                <span className='text-[#DB4444] text-[40px] font-semibold'>Our Products</span>
            </div>
            <div className='flex items-center justify-between'>
                <div className='text-5xl leading-[48px] font-semibold'>Explore Our Products</div>
                <div className='flex gap-2'>
                    <span className='rounded-full bg-[#F5F5F5] w-12 h-12 p-2'>
                        <BsArrowLeft className='w-full h-full' />
                    </span>
                    <span className='rounded-full bg-[#F5F5F5] w-12 h-12 p-2'>
                        <BsArrowRight className='w-full h-full' />
                    </span>
                </div>
            </div>
            <div className='px-20 py-10 flex gap-10 flex-wrap justify-center'>
                <Product image={Dogfood} name={"Breed Dry Dog Food"} type={""} price={100} reviews={35} rating={3}/>
                <Product image={Camera} name={"Canon EOS DSLR Camera"} type={""} price={360} reviews={95} rating={4}/>
                <Product image={laptop} name={"ASUS FHD Gaming Laptop"} type={""} price={700} reviews={325} rating={5}/>
                <Product image={playstation} name={"Curology Product Set"} type={""} price={500} reviews={145} rating={4}/>
                <Product image={car} name={"Breed Dry Dog Food"} type={"new"} price={960} reviews={65} rating={5}/>
                <Product image={shoes} name={"Breed Dry Dog Food"} type={""} price={1160} reviews={35} rating={5}/>
                <Product image={controller} name={"Breed Dry Dog Food"} type={"new"} price={660} reviews={55} rating={4.5}/>
                <Product image={jacket} name={"Breed Dry Dog Food"} type={""} price={660} reviews={55} rating={4.5}/>
            </div>
            <button className='mx-auto my-12 bg-[#DB4444] text-white p-8 font-medium text-5xl rounded-md'>View All Products</button>
        </div>
    )
}

export default Products
