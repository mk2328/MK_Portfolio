'use client'
import React from 'react'

export default function Work() {
    const ongoingProjects = [
        {
            title: 'MedScribeAI (FYP)',
            category: 'React Native + PostgreSQL',
            status: 'Currently Building',
            description: 'AI-driven medical transcription and health management mobile app focusing on clinical efficiency.',
            link: 'https://github.com/mk2328',
            bgImage: '/assets/work-1.png'
        },
        {
            title: 'Virtual Physical Therapy',
            category: 'MERN Stack + Motion Tracking',
            status: 'Client Project',
            description: 'A professional platform for remote physical therapy and recovery monitoring with real-time feedback.',
            link: 'https://github.com/mk2328',
            bgImage: '/assets/work-2.png'
        }
    ];

    const completedProjects = [
        {
            title: 'MERN Fitness Tracking System',
            date: 'JUNE 2025',
            role: 'Lead Developer',
            tech: 'MERN Stack, Gemini API',
            description: 'AI-integrated system with real-time health tracking.',
            link: 'https://github.com/mk2328'
        },
        {
            title: 'EarthScape AI Climate Prediction',
            date: 'JULY 2025',
            role: 'Project Lead',
            tech: 'Python, Flask, MongoDB',
            description: 'AI-based climate forecasting and data visualization.',
            link: 'https://github.com/mk2328'
        },
        {
            title: 'Event Booking System',
            date: 'MARCH 2024',
            role: 'Main Developer',
            tech: 'MERN Stack, Redux',
            description: 'Scalable booking solution with secure payments.',
            link: 'https://github.com/mk2328'
        },
        {
            title: 'E-commerce Clothing Website',
            date: 'JANUARY 2024',
            role: 'Lead Developer (Client)',
            tech: 'PHP, MySQL, SMTP',
            description: 'Professional e-store with automated email notifications.',
            link: 'https://github.com/mk2328'
        },
        {
            title: 'Citi Guide & WeChat App',
            date: 'OCTOBER 2024',
            role: 'Mobile App Developer',
            tech: 'Flutter, Firebase',
            description: 'Location-based social and urban navigation app.',
            link: 'https://github.com/mk2328'
        },
        {
            title: 'Clarins & JTECH 2025 Website',
            date: 'JULY 2024',
            role: 'Frontend Developer',
            tech: 'React, Tailwind, GSAP',
            description: 'High-performance landing pages for cosmetics and tech events.',
            link: 'https://github.com/mk2328'
        }
    ];

    return (
        <section id="work" className="w-full px-[10%] py-20 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo text-[#FFB22C]">Portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo dark:text-white">Featured Projects</h2>

            {/* --- Ongoing Projects (Optimized Visibility & Size) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                {ongoingProjects.map((project, index) => (
                    <div key={index} className="relative group rounded-[2rem] overflow-hidden h-[380px] border border-gray-200 dark:border-white/10 shadow-2xl transition-all duration-700">
                        {/* Background Image */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000" 
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        ></div>
                        
                        {/* Perfect Text Visibility Overlay (Darker at bottom, slight tint at top) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10"></div>
                        
                        {/* Status Badge */}
                        <div className="absolute top-6 left-6 flex items-center gap-2.5 px-4 py-1.5 bg-black/50 backdrop-blur-md border border-white/20 rounded-full z-10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB22C] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB22C]"></span>
                            </span>
                            <span className="text-white text-[9px] font-bold uppercase tracking-widest">{project.status}</span>
                        </div>

                        {/* Content Container */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                            <span className="text-[#FFB22C] text-[10px] font-bold mb-2 tracking-[0.3em] uppercase drop-shadow-md">
                                {project.category}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-3 leading-tight font-Ovo drop-shadow-lg">
                                {project.title}
                            </h3>
                            <p className="text-gray-200 text-xs mb-6 max-w-sm leading-relaxed font-Ovo drop-shadow-md">
                                {project.description}
                            </p>
                            
                            <a href={project.link} target="_blank" className="w-fit flex items-center gap-3 bg-white text-black px-6 py-2.5 rounded-full font-bold text-xs hover:bg-[#FFB22C] transition-all group/btn shadow-lg">
                                Source Code 
                                <img src="/assets/send-icon.png" alt="" className="w-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Completed Works (List Style - Kept the same) --- */}
            <div className="mt-28">
                <div className="flex items-center justify-between mb-12 border-b border-gray-200 dark:border-white/10 pb-0">
                    <h3 className="text-2xl font-semibold dark:text-white">Past Projects</h3>
                    <p className="text-sm text-gray-400 font-Ovo">{completedProjects.length} Projects Total</p>
                </div>

                <div className="flex flex-col">
                    {completedProjects.map((project, index) => (
                        <div key={index} className="group flex flex-col md:flex-row md:items-center justify-between pb-10 pt-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-all px-4 -mx-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-[10px] font-Ovo text-gray-400 uppercase tracking-widest">{project.date}</span>
                                    <span className="text-[10px] text-[#FFB22C] font-bold uppercase tracking-tighter">/ {project.role}</span>
                                </div>
                                <h3 className="text-2xl font-medium dark:text-white group-hover:text-[#FFB22C] transition-colors">{project.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xl">{project.description}</p>
                            </div>

                            <div className="flex flex-col md:items-end mt-6 md:mt-0 gap-4">
                                <div className="flex flex-wrap md:justify-end gap-2">
                                    {project.tech.split(',').map((t, i) => (
                                        <span key={i} className="text-[10px] font-medium text-gray-600 dark:text-gray-300">
                                            {t.trim()}{i !== project.tech.split(',').length - 1 && " •"}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest dark:text-white group-hover:gap-4 transition-all">
                                    Source Code
                                    <img src="/assets/send-icon.png" alt="" className="w-4 dark:invert" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* GitHub Button */}
            <div className="mt-20 flex justify-center">
                <a href="https://github.com/mk2328" target="_blank" className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:scale-105 transition-all shadow-xl">
                    Full GitHub Archive
                </a>
            </div>
        </section>
    )
}