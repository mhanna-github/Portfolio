'use client'

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

interface Project {
    title: string;
    name: string;
    image: string | null;   
    frameworks: string;
    about: string;
    link: string;
}

export function Projects({ projects }: { projects: Project[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setIsModalOpen(true);
        setSelectedProject(index);
    }

    const handleClose = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    }

    return (
        <section className="mt-[40px] flex flex-col gap-[13px]">
            <h2 className='text-h2 font-bold uppercase'>Projects</h2>
            <ul className='flex flex-col align-center relative z-[992]'>
                <li key="header" className='flex justify-between border-b border-white'>
                    <small>name</small>
                    <small>info</small>
                </li>
                {projects.map((project, index) => (
                    <li key={`project-${index}`} className='border-b border-white'>
                        <button className='flex flex-row justify-between py-[12px] w-full' onClick={() => {
                            handleClick(index);
                        }}>
                            <h3 className='text-h3 font-bold uppercase'>{project.name}</h3>
                            <small className='text-h3 font-thin'>+</small>
                        </button>
                    </li>
                ))}
            </ul>
            {projects.map((project, index) => ( 
                <div 
                    key={`modal-${index}`} 
                    className={clsx(
                        "fixed inset-0 z-[995] flex justify-center items-center", 
                        "transition-transform duration-[1.5s] ease-out-expo",
                        isModalOpen && selectedProject === index ? "translate-y-0" : "translate-y-full"
                    )}
                >
                    <figure className="w-full h-full aspect-square" >
                        <Image 
                            src={project.image || '/default-image.jpg'} 
                            alt="" 
                            fill
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                    </figure>
                    <div className="absolute w-[95%] h-[85%] inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] flex flex-col justify-between uppercase">
                        <div className="flex flex-col gap-[30px]">
                            <h2 className="text-h1 font-bold uppercase inline-block text-black bg-white w-fit"> [{project.name}]</h2>
                            <div>
                                <h2 className="text-h1 italic font-thin"><span className="italic font-bold">Frame</span>works</h2>
                                <p className="text-body">{project.frameworks}</p>
                            </div>
                            <div>
                                <h2 className="text-h1 italic font-thin"><span className="italic font-bold">Ab</span>out</h2>
                                <p className="text-body max-w-[500px] text-justify">{project.about}</p>
                            </div>
                        </div>
                        <a href={project.link} className="text-body font-thin underline cursor-pointer flex flex-row gap-[5px] items-center">
                            <h3 className="text-h3 font-bold">See the website</h3>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.52941 1L10.8824 1.11765M10.8824 1.11765L11 9.47059M10.8824 1.11765L1 11" 
                                    stroke="#E0E0E0" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                    <button 
                        className={clsx(
                            "fixed top-5 right-6 lg:top-8 lg:right-10 underline z-[999] hover:text-black transition-colors duration-300"
                        )} 
                        onClick={() => {
                            handleClose();
                        }}
                        aria-label="Close modal"
                    >
                        CLOSE
                    </button>
                </div>
            ))}
        </section>
    );
}