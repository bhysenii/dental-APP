import React from 'react'
import { render } from 'react-dom';
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white bg-black'>
            <div className="mt-[-95px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <img className='w-[200px]  mx-auto text-center flex flex-col justify-center' src="./features/logo1.png" alt="logo" />


                <div>
                    <p className='md:text-5xl sm:text-4xl p-4 text-xl font-bold text-green-700'>Fast and secure for your teeth </p>
                </div>
                <div className="flex justify-center items-center">
                    <p className='md:text-2xl text-xl font-bold text-cyan-300'>We create beautiful </p>
                    <Typed className='md:text-2xl text-xl font-bold pl-3 text-cyan-300' strings={['smiles', 'teeth', 'smiles', 'teeth', 'smiles', 'teeth', 'smiles', 'teeth', 'smiles']} typeSpeed={110} backSpeed={130} />
                </div>

                <button className='w-[180px] rounded-md my-6 mx-auto py-3 bg-[green]'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero