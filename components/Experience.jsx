"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Database, Code2, GraduationCap, Users,
    ArrowUpRight, Sparkles
} from 'lucide-react';

export default function Experience() {
    const mainExperiences = [
        {
            title: "Data Science Intern",
            org: "10Pearls",
            date: "2025 - Present",
            desc: "Focusing on data-driven solutions, API integrations, and implementing intelligent features within enterprise environments.",
            highlight: "Enterprise AI & APIs",
            icon: <Database className="w-5 h-5" />,
            status: "Latest",
        },
        {
            title: "Freelance Full Stack Developer",
            org: "Self-Employed",
            date: "2022 - Present",
            desc: "2.5+ years of delivering scalable MERN & PHP solutions for diverse clients, maintaining high-performance web applications and solving complex technical issues.",
            highlight: "MERN & PHP Specialist",
            icon: <Code2 className="w-5 h-5" />,
            status: "Professional",
        },
        {
            title: "Founder & Lead Instructor",
            org: "AIXORA Academy",
            date: "2024 - Present",
            desc: "Founded AIXORA (2025) and leading intensive training sessions for over 2 years, covering Frontend, Backend, and Database architectures for 50+ aspiring developers.",
            highlight: "Mentoring 50+ Students",
            icon: <GraduationCap className="w-5 h-5" />,
            status: "Founder",
        }
    ];

    const leadership = [
        {
            title: "GDGoC Lead @ JUW",
            org: "GDGOC - Jinnah University for Women",
            date: "2025 - 2026",
            desc: "Leading technical operations, managing chapter growth, and fostering a developer community."
        },
        {
            title: "Event Director - JTECH 2026",
            org: "Technical Operations",
            date: "2025 - 2026",
            desc: "Managing the entire event lifecycle, team coordination, and operational strategy."
        }
    ];

    return (
        <section id="experience" className="relative w-full px-[6%] py-12 lg:py-20 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB22C]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Updated Heading: Single line and slightly smaller */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FFB22C]/20 bg-[#FFB22C]/5 text-[#FFB22C] text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                    >
                        <Sparkles className="w-3 h-3" /> Career Milestone
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
                        Experience <span className="text-[#FFB22C]">& Roles</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Professional Timeline */}
                    <div className="lg:col-span-7 space-y-12">
                        {mainExperiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                // Hover effect on the whole item
                                className="group relative pl-10 border-l-2 border-gray-100 dark:border-white/5 hover:border-[#FFB22C]/30 transition-colors duration-500"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-[#fafafa] dark:border-[#050505] bg-gray-300 dark:bg-white/20 group-hover:bg-[#FFB22C] group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(255,178,44,0)] group-hover:shadow-[0_0_15px_rgba(255,178,44,0.4)]" />

                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-xs font-bold text-[#FFB22C] bg-[#FFB22C]/10 px-2 py-1 rounded-md font-mono">{exp.date}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{exp.status}</span>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-none group-hover:text-[#FFB22C] transition-colors duration-300">
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">{exp.org}</p>
                                    </div>

                                    <div className="relative">
                                        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
                                            {exp.desc}
                                        </p>
                                        <div className="mt-3 inline-block text-xs font-bold text-gray-900 dark:text-white border-b-2 border-[#FFB22C]/20 group-hover:border-[#FFB22C] transition-all duration-300">
                                            {exp.highlight}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Updated Right Leadership Card: Different BG and Border */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                // Added subtle border and distinct background for depth
                                className="p-8 rounded-[2rem] bg-white dark:bg-[#0c0c0c] border border-gray-200/60 dark:border-white/10 shadow-xl shadow-black/[0.02] dark:shadow-white/[0.02]"
                            >
                                <h4 className="flex items-center gap-2 font-black text-gray-400 uppercase text-[10px] tracking-[0.3em] mb-10">
                                    <Users className="w-4 h-4 text-[#FFB22C]" /> Leadership Impact
                                </h4>

                                <div className="space-y-10">
                                    {leadership.map((item, i) => (
                                        <div key={i} className="group cursor-default">
                                            <p className="text-[10px] font-bold text-[#FFB22C]/60 group-hover:text-[#FFB22C] mb-1 tracking-wider uppercase transition-colors">{item.date}</p>
                                            <h5 className="font-bold text-gray-900 dark:text-white text-lg group-hover:translate-x-1 transition-transform duration-300">
                                                {item.title}
                                            </h5>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium leading-snug">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="/assets/MK_ResumeUpdated.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full mt-10"
                                >
                                    <motion.button
                                        whileHover={{ y: -3, scale: 1.01 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-bold text-sm flex items-center justify-center gap-2 group transition-all shadow-lg hover:shadow-[#FFB22C]/10"
                                    >
                                        Download Full Resume
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </motion.button>
                                </a>
                            </motion.div>

                            <div className="mt-8 px-10 text-center">
                                <p className="text-sm italic text-gray-400 dark:text-gray-600">
                                    "Lead with purpose, build with passion."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}