import React from 'react'
import ServicesData from '../../data/serviceData'
import './featuresStyle.css'
import { BiDownvote } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Features = () => {
    return (
        <>
            <section className='services'>
                <div className="container">
                    <div className="heading">
                        <h1 className='font-bold text-[green]'>What we offer ...</h1>
                        < BiDownvote className='mx-auto text-center flex flex-col justify-center' color='green' size={30} />

                    </div>
                    <div className="contain grid topMargin">
                        {ServicesData.map((val) => {
                            return (
                                <>
                                <Link to={`pricing`}>
                                <div className="box">
                                    <div className="img">
                                        <img className='rounded-3xl' src={val.cover} alt='img' />
                                    </div>
                                    <div className="text">
                                        <h3 className='text-[white]'>{val.title}</h3>
                                        <p className='text-[white]'>{val.desc}</p>
                                    </div>
                                </div>
                                </Link>
                                </>
                            )
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Features