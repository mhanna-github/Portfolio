import React, { Fragment } from 'react'

const projects = [
    {
        name: 'BeautyBoo',
        status: '2024',
        link: 'https://beauty-boo.vercel.app/'
    },
    {
        name: 'Emeralds',
        status: '2024',
        link: 'https://emeralds.vercel.app/'
    },
    {
        name: 'Little Sun',
        status: '2024',
        link: 'https://little-sun.vercel.app/'
    },
]

export function Projects() {
    return (
        <>
        <div className="mt-[40px] flex flex-col gap-[13px]">
            <h2 className='text-h2 font-bold uppercase'>Projects</h2>
            <ul className='flex flex-col align-center'>
                <li className='flex justify-between border-b border-white'>
                    <small>name</small>
                    <small>status</small>
                </li>
                {
                    projects.map((project) => (
                        <Fragment key={project.name}>
                            <li className='border-b border-white'>
                                <a href={project.link} className='flex justify-between items-center py-[12px]'>
                                    <h3 className='text-h3 font-bold uppercase'>{project.name}</h3>
                                    <small className='text-body'>.{project.status}</small>
                                </a>
                            </li>
                        </Fragment>
                    ))
                }
            </ul>
        </div>
        </>
    )
}