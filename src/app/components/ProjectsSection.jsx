"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "This is my portfolio website. It was built using Next.js and Tailwind CSS. The website has a home page, about page, projects page, and contact page. The website is responsive.",
        image: "/images/projects/portafolio.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Android Application Nutrition App",
        description: "This is an android app made with kotlin. The app is a exercise and nutrition app. Has a sleep calculator, imc calculator and other features. The app was made using Android Studio.",
        image: "/images/projects/android.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/mar22266/NutritionExAndroidApp.git",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Soccer Blog Website",
        description: "This project is a blog website about soccer. It was built using React made the backend and the frontend. The backend was built using Node.js and Express. The frontend was built using React. The database used was postgres. The website has a home page and admin page.",
        image: "/images/projects/blog.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/mar22266/Proyecto1WEB.git",
        previewUrl: "https://socceramd.netlify.app/",
    },
    {
        id: 4,
        title: "Calculator Web App",
        description: "This is a calculator website built for making tests. The calculator has the basic operations. The calculator was built using vite. The website is responsive.",
        image: "/images/projects/calculadora.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/mar22266/lab7calc.git",
        previewUrl: "https://sprightly-crumble-8db2dd.netlify.app/",
    },
    {
        id: 5,
        title: "Matrix Determinant Calculator",
        description: "This is a determinant calculator built in Java, can calculate the determinante of 4x4, 5x5, 6x6, 7x7. The diagonal of the matrix cannot be 0. Made by condensation method. Calculate via command line.",
        image: "/images/projects/matriz.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/mar22266/2022-Calculadora-Matrices.git",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Lisp interpreter",
        description: "This is a java program that interprets lisp code. The program can interpret the basic operations of lisp via command line",
        image: "/images/projects/lisp.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/mar22266/2023-ES-PY1-Lisp-Interpreter.git",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState('All');

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => {
        return project.tag.includes(tag);
    });

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    name='All'
                    isSelected={tag === 'All'}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name='Web'
                    isSelected={tag === 'Web'}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name='Mobile'
                    isSelected={tag === 'Mobile'}
                />
            </div>
            <div className="px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div className="w-full" key={project.id}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectsSection;
