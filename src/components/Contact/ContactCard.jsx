import React, { useRef, useState } from 'react'
import './contact.css'
import { BsTelephoneOutbound } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { SiInstagram } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";





const Result = () => {
    return (
        <p>Your message has been successfully sent. I will contact you soon</p>
    )
}



const Contact = () => {
    const [result, showResult] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b7dbmth', 'template_lfrj15j', form.current, 'U35icqrhM1YAah6Sj')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true)
    }


    return (
        <div className='flex w-full min-h-screen justify-center items-center bg-black' >
            <div className="flex flex-col space-y-7 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-xl text-white md:flex-row md:space-x-6 md:space-y-0">
                <div className="flex flex-col space-y-8 justify-between">
                    <div>
                        <h1 className='font-bold text-3xl'>Contact Us</h1>
                        <p className='pt-2 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing  Minus, ratione.</p>
                    </div>
                    <div className='flex flex-col space-y-6'>
                        <div className='inline-flex space-x-2 items-center'>
                            <BsTelephoneOutbound />
                            <span>+32-5565-xx</span>
                        </div>
                        <TelegramShareButton url='https://t.me/KHdesignDental' className='inline-flex space-x-2 items-center'>
                            <div className='inline-flex space-x-2 items-center'>

                                <BsTelegram />
                                <span>KH-Design</span>
                            </div>
                        </TelegramShareButton>
                        <div className='inline-flex space-x-2 items-center'>
                            <SiInstagram />
                            <span>KH-Design</span>
                        </div>
                        <div className='inline-flex space-x-2 items-center'>
                            <FiFacebook />
                            <span>KH-Design</span>
                        </div>
                    </div>
                    <div className='flex  text-lg gap-3'>
                        <SiInstagram size={20} />
                        <TelegramShareButton url='https://t.me/KHdesignDental'><BsTelegram size={20} /></TelegramShareButton>

                        <FiFacebook size={20} />
                        <AiOutlineLinkedin size={20} />
                    </div>
                </div>
                <div>
                    <div className='bg-white rounded-xl p-8 text-gray-700 md:w-80'>
                        <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="" className='text-sm'>Your Name</label>
                                <input name='user_name' type="text" required placeholder='Your name' className='ring-1 mt-3 w-full rounded-md px-4 py-2 outline-none' />
                            </div>
                            <div>
                                <label htmlFor="" className='text-sm'>Your Email</label>
                                <input name='user_email' type="email" required placeholder='Your email' className='ring-1 mt-3 w-full rounded-md px-4 py-2 outline-none' />
                            </div>
                            <div>
                                <label htmlFor="" className='text-sm'>Message</label>
                                <textarea name="message" id="message" cols="30" rows="4" placeholder='Type your Message' className='ring-1 mt-3 w-full rounded-md px-4 py-2 outline-none'></textarea>
                            </div>
                            <button className='w-[160px] rounded-md  font-bold mx-auto py-3 bg-[cyan]'>Send a message</button>
                            <div className="row">
                                {result ? <Result /> : null}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact