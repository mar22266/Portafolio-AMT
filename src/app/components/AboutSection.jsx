"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>React</li>
                <li>Vite</li>
                <li>PostgresSQL</li>
                <li>Arch Linux</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Computer Engineer in Information and Technologies, Universidad del Valle de Guatemala, expected graduation in 2025</li>
                <li>Colegio Metropolitano de Guatemala 2021</li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS course</li>
                <li>Microsoft Excel</li>
                <li>Microsoft Word</li>
            </ul>
        )

    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <div className='flex justify-center'>
                    <Image src='/images/ghost.jpg' alt='ghost' width={500} height={500} />
                </div>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About me
                    </h2>
                    <p className='text-base md:text-lg'>
                        I am a web developer with a passion for creating beautiful and functional websites.
                        I have experience with HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS.

                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange('skills')}
                            active={tab === 'skills'}
                        >
                            Skills
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange('education')}
                            active={tab === 'education'}
                        >
                            Education
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange('certifications')}
                            active={tab === 'certifications'}
                        >
                            Certifications
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
