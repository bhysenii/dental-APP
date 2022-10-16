import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaTeeth } from 'react-icons/fa'

const Navbar = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }


    return (
        <div className='flex justify-between items-center h-20 bg-black  mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'><Link to='/'><FaTeeth size={50} /></Link></h1>
            <ul className='hidden md:flex'>
                <Link to='/'><li className='p-4'>Home</li></Link>
                <Link to='/pricing'><li className='p-4'>Pricing</li></Link>
                <Link to='/contact'><li className='p-1  bg-slate-600 px-4 mt-3 border-solid rounded-3xl'>Contact</li></Link>
            </ul >
            <div onClick={handleClick} className='block md:hidden'>
                {!show ? <AiOutlineMenu size={15} /> : <AiOutlineClose size={15} />}
            </div>
            <div className={show ? 'fixed left-0 top-0 w-[55%] h-full border-r border-r-gray-600 bg-[black] z-10 ease-in-out' : 'fixed left-[100%]'}>
                <h1 className='w-full text-3xl font-bold text-[black]'>KH Design</h1>
                <img className='w-[50px]  mx-auto text-center flex flex-col justify-center' src="./features/logo1.png" alt="logo" />
                <ul className='pt-15 p-5'>
                    <Link to='/'><li className='p-4 border-b'>Home</li></Link>
                    <Link to='/pricing'><li className='p-4 border-b'>Pricing</li></Link>
                    <Link to='/contact'><li className='p-4 border-b  bg-slate-600 '>Contact</li></Link>
                </ul>
            </div>
        </div >
    )
}

export default Navbar