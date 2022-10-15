import React from 'react'
import ServicesData from '../../data/serviceData'
import './featuresStyle.css'

const Features = () => {
    return (
        <>
            <section className='services'>
                <div className="container">
                    <div className="heading">
                        <h1 className='font-bold text-[green]'>What we do</h1>

                    </div>
                    <div className="contain grid topMargin">
                        {ServicesData.map((val) => {
                            return (
                                <div className="box">
                                    <div className="img">
                                        <img className='rounded-3xl' src={val.cover} alt='img' />
                                    </div>
                                    <div className="text">
                                        <h3 className='text-[white]'>{val.title}</h3>
                                        <p className='text-[white]'>{val.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Features