import React from 'react'
import Image from 'next/image'
export default function Hero() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 bg-stone-400 p-5'>
            <div className=' col-span-7 place-self-center '>
                <h1 className=' text-4xl lg:text-6xl font-extrabold'>Hello, I am Hamze</h1>
                <p className='mb-2'>I am a tech-savvy innovator merging education consulting with a passion for software development. With a diploma in computer engineering driving my ambition, I've crafted an e-commerce platform for a grocery store. Featuring an intuitive admin panel and robust sales data lists, I'm dedicated to infusing fresh ideas into every project to make a real impact</p>
                <div>
                    <button className=' bg-green-400 hover:bg-green-700 text-white font-semibold  py-3 px-6 rounded-lg shadow-md'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5 place-self-center '>
                <div className='rounded-full relative bg-[#c5c5c5]  h-[280px] w-[280px]'>
                    <Image
                        src="/profile.png"
                        alt='profile'
                        className='absolute  rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2  left-1/2'
                        height={200}
                        width={200}
                    />

                </div>


            </div>
        </div>
    )
}
