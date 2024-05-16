import React from 'react'
import Image from 'next/image'

const Section = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 via-blue-300 to-slate-500'>
                            Welcome, I am{' '}
                        </span>
                        Andre
                    </h1>
                    <p className="text-[#f6f7f8] text-base sm:text-lg mb-6 lg:text-xl">
                        Welcome to my portfolio
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-blue-300 to-slate-500 hover:bg-slate-200 text-black'>Hire me</button>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br  from-slate-500 via-slate-400 to-slate-300 hover:bg-slate-800 text-black border border-white mt-3'>Download CV</button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] relative'>
                        <Image
                            src="/images/home.jpeg"
                            alt='home'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section
