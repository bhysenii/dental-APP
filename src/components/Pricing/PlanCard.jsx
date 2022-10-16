import React from 'react'
import { Link } from 'react-router-dom'


interface PlanCardProps {
    name: string;
    descripiton: string;
    btnText?: string;
    price?: string;
    features: string[];
    color: string;
}



const PlanCard = ({ name, descripiton, btnText, price, features, color }: PlanCardProps) => {
    return (
        <div style={{ backgroundColor: color }} className='flex min-h-[100px] w-[320px] flex-col rounded-3xl p-8 grid-cols-12 grid-rows-12'>
            <h2 className='mb-5 text-xl font-medium'>{name}</h2>
            <div className="mb-5 flex items-end text-6xl font-black">
                {price ? (
                    <>
                        <div>{price}</div>
                    </>
                ) : (
                    'Free'
                )}
            </div>
            <p className='mb-5'>{descripiton}</p>
            <ul className='mb-10 flex flex-col gap-y-2'>
                {features.map((feature) => (
                    <li className='flex items-center'>
                        -{feature}
                    </li>
                ))}
            </ul>
            <Link to='contact'>
                <button className='mt-auto rounded-xl bg-black  py-3 px-6 text-lg font-medium text-white'>{btnText}</button>
            </Link>
        </div>
    )
}

export default PlanCard