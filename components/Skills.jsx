"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SimpleIcon } from 'lucide-react'; // Ya icons manually bhi daal sakte hain

export default function Skills() {
    const mainSkills = [
        { name: "MERN Stack", level: 80 },
        { name: "PHP & MySQL", level: 90 },
        { name: "Python (AI/ML)", level: 75 },
        { name: "Frontend (Tailwind/React)", level: 85 },
        { name: "Database Design", level: 90 }
    ];

    const tools = [
        "Git & GitHub", "Jira (Agile)", "Firebase", "Postman",
        "Manual Testing", "REST APIs", "Vercel", "Linux"
    ];

    return (
        <section id="skills" className="relative w-full px-[6%] py-16 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Progress Bars */}
                    <div>
                        <h4 className="text-[#FFB22C] font-bold uppercase text-xs tracking-widest mb-4">Technical Proficiency</h4>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-10">Expertise Levels</h2>

                        <div className="space-y-8">
                            {mainSkills.map((skill, i) => (
                                <div key={i} className="group">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-[#FFB22C] transition-colors">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs font-mono text-[#FFB22C]">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className="h-full bg-[#FFB22C] rounded-full shadow-[0_0_10px_rgba(255,178,44,0.4)]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Tools & Workflow */}
                    <div className="bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 p-8 rounded-[2.5rem]">
                        <h4 className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-8">Tools & Ecosystem</h4>

                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-5 py-3 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl text-sm font-semibold text-gray-600 dark:text-gray-400 hover:border-[#FFB22C]/40 hover:text-[#FFB22C] transition-all cursor-default"
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>

                        <div className="mt-12 p-6 rounded-2xl bg-[#FFB22C]/5 border border-[#FFB22C]/10">
                            <h5 className="text-[#FFB22C] font-bold text-sm mb-2">Workflow Strategy</h5>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                I follow <span className="text-gray-900 dark:text-white font-bold">Agile Methodologies</span> with a focus on version control (Git) and structured project management via Jira to ensure scalable and bug-free delivery.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}