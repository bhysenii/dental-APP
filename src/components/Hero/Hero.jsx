import React from 'react'


const Hero = () => {
    return (
        <div className='text-white bg-black'>
            <div className="mt-[-95px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className='text-[green] md:text-6xl sm:text-5xl text-4xl font-bold'>KH</h1>
                <h1 className='text-[green] font-bold p-4'>DESIGN</h1>
                <h2 className='md:text-5xl sm:text-5xl text-4xl font-bold'>Dental Technique</h2>
                <div>
                    <p className='md:text-5xl sm:text-4xl p-4 text-xl font-bold'>Fast and secure for your teeth </p>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ipsum.</p>
                <button className='w-[180px] rounded-md my-6 mx-auto py-3 bg-[green]'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero