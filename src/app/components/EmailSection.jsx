"use client";
import React, { useState } from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);

        const endpoint = '/api/send';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log('Message sent');
            setEmailSubmitted(true);
        }
    };
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
            </div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-y'>Lets Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md  '>
                    {" "}
                    I am always open to new projects and opportunities. Feel free to reach out to me.
                </p>
                <div className='socials flex flex-row gap-2'></div>
                <Link href='https://github.com/mar22266'>
                    <Image src={GithubIcon} alt='Github Icon' />
                </Link>
                <Link href='https://www.linkedin.com/in/andr%C3%A9-marroqu%C3%ADn-tarot-0173a622b'>
                    <Image src={LinkedinIcon} alt='Linkedin Icon' />
                </Link>
            </div>
            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label
                            htmlFor='email'
                            className='text-white block mb-2 text-sm font-medium'>
                            Your Email
                        </label>
                        <input
                            name='email'
                            type='email'
                            id='email'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='rodrigocolorado@gmail.com'
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='subject'
                            className='text-white block mb-2 text-sm font-medium'>
                            Subject
                        </label>
                        <input
                            name='subject'
                            type='text'
                            id='subject'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='An opportunity to work together'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message'
                            className='text-white block mb-2 text-sm font-medium'
                        >
                            Message
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Hello, leave your message here.'
                        />
                        <div>
                            <button
                                type='submit'
                                className='bg-gradient-to-br from-primary-500 via-primary-300 to-slate-500 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-4'>
                                Send Message
                            </button>
                            {
                                emailSubmitted && (
                                    <p className='text-green-500 text-sm mt-2'>
                                        Email sent successfully!
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EmailSection