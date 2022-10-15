import React from 'react'
import cardData from '../../data/cardData'
import './card.css'
import { Link } from 'react-router-dom'


const Card = () => {


    return (
        <>
            <section className='branding  wrapper'>
                <div className="container">
                    {cardData.map((val) => {
                        return (
                            <div className="box">
                                <h3>{val.title}</h3>
                                <h2>{val.heading}</h2>
                                <p>{val.desc}</p>
                                <Link to='contact'><button className='btn-2'>Contact Us</button></Link>

                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Card