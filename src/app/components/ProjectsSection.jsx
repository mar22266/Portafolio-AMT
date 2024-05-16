"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/projects/portafolio.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Android Application Nutrition App",
        description: "Project 2 description",
        image: "/images/projects/android.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Soccer Blog Website",
        description: "Project 3 description",
        image: "/images/projects/blog.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Calculator Web App",
        description: "Project 4 description",
        image: "/images/projects/calculadora.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Determinant Matrix Calculator",
        description: "Project 5 description",
        image: "/images/projects/matriz.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Lisp Interpreter in Java",
        description: "Project 6 description",
        image: "/images/projects/lisp.png",
        tag: ["All", "Web"],
        gitUrl: "/",
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
