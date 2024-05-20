"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => { return import('react-animated-numbers') }, { ssr: false });

const achievementsList = [
    {
        metric: "Projects",
        value: "30",
        postfix: "+",
    },
    {
        metric: "Programming Languages",
        value: "5",
    },
    {
        metric: "Certifications",
        value: "7",
    },
    {
        metric: "Years",
        value: "3",
        postfix: "+",
    },
];

const AchievementsSection = () => {
    return (
        <div className='py-8 px-4 sm:py-16 xl:gap-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md py-8 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                {achievementsList.map((achievement, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center mx-2 sm:mx-4 my-4 sm:my-0'>
                            <h2 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold flex flex-row'>
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale='en-US'
                                    className='text-white text-2xl sm:text-3xl md:text-4xl font-bold'
                                    configs={((_, index) => {
                                        return {
                                            mass: 2,
                                            friction: 50,
                                            tension: 70 * (index + 1),
                                        }
                                    })}
                                />
                                {achievement.postfix}
                            </h2>
                            <p className='text-[#ADB7BE] text-sm sm:text-base'>
                                {achievement.metric}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default AchievementsSection