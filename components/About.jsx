"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Terminal, Globe, Rocket, Sparkles } from 'lucide-react';

export default function About() {
    const shouldReduceMotion = useReducedMotion();

    const tools = [
        { name: 'VS Code', icon: '/assets/vscode.png' },
        { name: 'Firebase', icon: '/assets/firebase.png' },
        { name: 'MongoDB', icon: '/assets/mongodb.png' },
        { name: 'Figma', icon: '/assets/figma.png' },
        { name: 'Git', icon: '/assets/git.png' },
        {
            name: 'Node.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        { name: 'Python', icon: '/assets/python.png' },
    ];

    return (
        <section id="about" className="relative w-full px-[6%] py-20 lg:py-32 scroll-mt-20 overflow-hidden bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500">

            {/* Ambient Background Elements - Updated to Yellow Theme */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden select-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#FFB22C]/10 dark:bg-[#FFB22C]/5 rounded-full blur-[100px] md:blur-[140px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-400/10 dark:bg-amber-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFB22C]/40 bg-[#FFB22C]/10 text-[#d9951a] dark:text-[#FFB22C] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 shadow-sm"
                    >
                        <span className="text-[#FFB22C]"><Sparkles className="w-3 h-3" /></span> Discovery
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tighter"
                    >
                        About My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB22C] to-[#F59E0B]">Journey</span>
                    </motion.h2>
                </div>

                {/* Main Content Layout */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Bio & Experience */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white/70 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 p-8 rounded-[2.5rem] backdrop-blur-md shadow-xl shadow-amber-500/5"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-snug">
                                Transforming complex ideas into <br className="hidden md:block" />
                                <span className="italic font-black text-[#FFB22C]">Scalable Realities.</span>
                            </h3>
                            <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed font-normal">
                                I am <span className="text-black dark:text-white font-bold">Muskan Kamran</span>, a Full Stack Developer and the Founder of AIXORA Academy. Currently pursuing Software Engineering with a <span className="font-bold text-black dark:text-white underline decoration-[#FFB22C] decoration-[3px] underline-offset-4">3.95 CGPA</span>, I bridge the gap between robust backend logic and elegant frontend design.
                            </p>
                        </motion.div>

                        {/* Bento Grid for Stats */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <motion.div whileHover={{ y: -5 }} className="p-6 rounded-3xl bg-white dark:bg-[#FFB22C]/5 border border-gray-200 dark:border-[#FFB22C]/10 flex flex-col gap-4 shadow-lg shadow-amber-500/5">
                                <div className="w-12 h-12 rounded-2xl bg-[#FFB22C]/10 dark:bg-[#111] flex items-center justify-center shadow-inner">
                                    <Terminal className="w-6 h-6 text-[#FFB22C]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">Technical Mastery</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">MERN Stack, PHP-MySQL, & Flutter Development</p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="p-6 rounded-3xl bg-white dark:bg-amber-500/5 border border-gray-200 dark:border-amber-500/10 flex flex-col gap-4 shadow-lg shadow-amber-500/5">
                                <div className="w-12 h-12 rounded-2xl bg-amber-50/50 dark:bg-[#111] flex items-center justify-center shadow-inner">
                                    <GraduationCap className="w-6 h-6 text-[#FFB22C]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">Academic Excellence</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                        BS Software Engineering (3.95 CGPA) <br />
                                        & <span className="text-[#FFB22C] font-bold">ADSE Graduate from Aptech</span>
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="md:col-span-2 p-6 rounded-3xl bg-white dark:bg-[#FFB22C]/5 border border-gray-200 dark:border-[#FFB22C]/10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 shadow-lg shadow-amber-500/5 transition-all duration-300 hover:border-[#FFB22C]/30"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#FFB22C]/10 dark:bg-[#111] flex flex-shrink-0 items-center justify-center shadow-inner">
                                    <Globe className="w-6 h-6 md:w-7 md:h-7 text-[#FFB22C]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Leadership & Impact</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                        Founder @ <span className="text-[#FFB22C] font-bold">AIXORA</span> & JUW Chapter Lead <span className="text-[#FFB22C] font-bold">GDGOC</span>
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Visuals & Tools */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="relative h-[400px] md:h-[450px] w-full group">
                            {/* Dash border updated to yellow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-dashed border-[#FFB22C]/30 rounded-[3rem] rotate-3 scale-95" />

                            <motion.div
                                animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-20 w-[85%] mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-white/10 shadow-[0_20px_50px_rgba(255,178,44,0.2)]"
                            >
                                <img src='/assets/profile.jpeg' alt="Muskan Kamran" className="w-full h-full object-cover" />
                                {/* Overlay updated to amber */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#FFB22C]/20 to-transparent" />
                            </motion.div>

                            <motion.div
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -right-4 top-10 z-30 bg-white dark:bg-[#0a0a0a] p-4 rounded-2xl shadow-2xl border border-[#FFB22C]/20 hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                    <span className="text-[10px] font-black text-gray-800 dark:text-white uppercase tracking-widest">Available for Hire</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Technical Arsenal Section */}
                        <div className="bg-white/80 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 p-8 rounded-[2.5rem] shadow-xl shadow-amber-500/5">
                            <p className="text-[10px] font-black text-[#FFB22C] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                <Rocket className="w-4 h-4" /> Technical Arsenal
                            </p>
                            <div className="grid grid-cols-4 gap-4">
                                {tools.map((tool, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="relative group flex items-center justify-center aspect-square bg-white dark:bg-[#111] border border-gray-100 dark:border-white/10 rounded-2xl shadow-md transition-all hover:shadow-[#FFB22C]/30 hover:border-[#FFB22C]/30"
                                    >
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg font-bold">
                                            {tool.name}
                                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></span>
                                        </span>

                                        <img
                                            src={tool.icon}
                                            alt={tool.name}
                                            className={`w-8 h-8 object-contain ${tool.name === 'React' || tool.name === 'Node.js' ? 'scale-110 p-0.5' : ''}`}
                                        />                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}