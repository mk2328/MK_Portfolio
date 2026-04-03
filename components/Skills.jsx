"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layout, Database, Terminal, ShieldCheck } from 'lucide-react';

export default function Skills() {
    const mainSkills = [
        { name: "Frontend (React & TypeScript)", level: 95, icon: <Layout className="w-4 h-4" /> },
        { name: "MERN Stack Development", level: 90, icon: <Database className="w-4 h-4" /> },
        { name: "Python (AI Automation & RAG)", level: 85, icon: <Terminal className="w-4 h-4" /> },
        { name: "Backend (Node.js & PHP/MySQL)", level: 88, icon: <ShieldCheck className="w-4 h-4" /> },
        { name: "System Architecture & Hooks", level: 82, icon: <Sparkles className="w-4 h-4" /> }
    ];

    const tools = [
        "Git & GitHub", "Jira (Agile/Scrum)", "Postman", "RESTful APIs",
        "Automation Testing", "Tailwind CSS", "Firebase", "Vercel",
        "Context API", "Component Design", "SDLC"
    ];

    return (
        <section id="skills" className="relative w-full px-[6%] py-16 lg:py-24 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFB22C]/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Progress Bars */}
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FFB22C]/20 bg-[#FFB22C]/5 text-[#FFB22C] text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
                        >
                            <Sparkles className="w-3 h-3" /> Technical Proficiency
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter">
                            Technical <span className="text-[#FFB22C]">Expertise.</span>
                        </h2>

                        <div className="space-y-9">
                            {mainSkills.map((skill, i) => (
                                <div key={i} className="group">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-400 group-hover:text-[#FFB22C] group-hover:bg-[#FFB22C]/10 transition-all duration-300">
                                                {skill.icon}
                                            </span>
                                            <span className="text-sm font-bold text-gray-700 dark:text-gray-200 group-hover:text-[#FFB22C] transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-[#FFB22C] bg-[#FFB22C]/10 px-2 py-0.5 rounded">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                                            className="h-full bg-[#FFB22C] rounded-full shadow-[0_0_15px_rgba(255,178,44,0.3)]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Tools & Workflow */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-black/[0.02]">
                            <h4 className="text-gray-400 font-black uppercase text-[10px] tracking-[0.3em] mb-8">Tools & Ecosystem</h4>

                            <div className="flex flex-wrap gap-3">
                                {tools.map((tool, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-4 py-2.5 bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 rounded-xl text-xs md:text-sm font-bold text-gray-600 dark:text-gray-400 hover:border-[#FFB22C]/40 hover:text-[#FFB22C] hover:bg-[#FFB22C]/5 transition-all cursor-default"
                                    >
                                        {tool}
                                    </motion.span>
                                ))}
                            </div>

                            <div className="mt-12 p-6 rounded-2xl bg-[#FFB22C]/5 border border-[#FFB22C]/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                                    <ShieldCheck className="w-12 h-12 text-[#FFB22C]" />
                                </div>
                                <h5 className="text-[#FFB22C] font-bold text-sm mb-2 flex items-center gap-2">
                                    Strategic Workflow
                                </h5>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                    I implement <span className="text-gray-900 dark:text-white font-bold">Agile/Scrum</span> methodologies using <span className="text-gray-900 dark:text-white font-bold">Jira</span> for project tracking. My development process emphasizes <span className="text-gray-900 dark:text-white font-bold">Smart Testing</span>, version control via Git, and scalable component-based architectures.
                                </p>
                            </div>
                        </div>
                        
                        <p className="text-center text-[10px] text-gray-400 dark:text-gray-600 font-medium tracking-widest uppercase">
                            Continuous Learning • Industry Standards • Quality Assurance
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}