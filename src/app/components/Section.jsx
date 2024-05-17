"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';
import Link from 'next/link';


const Section = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 2, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normals font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r  from-primary-500 via-primary-300 to-secondary-500'>
                            Welcome, I am a{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'full-stack developer',
                                1000,
                                'web developer',
                                1000,
                                'software engineer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#f6f7f8] text-base sm:text-lg mb-6 lg:text-xl">
                        Welcome to my portfolio
                    </p>
                    <div>
                        <Link href='#contact'>
                            <button
                                className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-primary-300 to-secondary-500 hover:bg-secondary-200 text-black'>
                                Hire me
                            </button>
                        </Link>
                        <a href="/CV.pdf" download>
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary-500 via-secondary-400 to-secondary-300 hover:bg-secondary-800 text-black border border-white mt-3'>
                                Download CV
                            </button>
                        </a>
                    </div>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 2, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] relative'>
                        <Image
                            src="/images/home.jpeg"
                            alt='home'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default Section
