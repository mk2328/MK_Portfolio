"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Code2, 
    Terminal, 
    Layout, 
    ShieldCheck, 
    Cpu,
    Smartphone,
    ArrowUpRight 
} from 'lucide-react';

export default function Services() {
    const [activeTab, setActiveTab] = useState('All');

    const serviceData = [
        {
            id: 1,
            category: 'Development',
            name: 'Frontend Specialization',
            icon: <Layout className="w-7 h-7" />,
            description: 'Building high-performance, pixel-perfect web interfaces using React.js and TypeScript with a focus on component-based architecture.',
            skills: ['React', 'TypeScript', 'Tailwind', 'Context API'],
        },
        {
            id: 2,
            category: 'Development',
            name: 'Mobile App Development',
            icon: <Smartphone className="w-7 h-7" />,
            description: 'Designing and developing cross-platform mobile applications using React Native, focusing on smooth performance and native-like UX.',
            skills: ['React Native', 'Expo', 'Mobile UI', 'API Integration'],
        },
        {
            id: 3,
            category: 'Development',
            name: 'Full Stack Solutions',
            icon: <Code2 className="w-7 h-7" />,
            description: 'End-to-end web development using the MERN Stack and PHP/MySQL, ensuring scalable backends and robust database management.',
            skills: ['MongoDB', 'Node.js', 'Express', 'PHP/MySQL'],
        },
        {
            id: 4,
            category: 'AI & Data',
            name: 'AI Automation & RAG',
            icon: <Cpu className="w-7 h-7" />,
            description: 'Developing LLM-driven autonomous agents and RAG architectures for automated data analysis and intelligent workflows.',
            skills: ['Python', 'LangChain', 'OpenAI API', 'Automation'],
        },
        {
            id: 5,
            category: 'Other',
            name: 'QA & Technical Audit',
            icon: <ShieldCheck className="w-7 h-7" />,
            description: 'Implementing manual and automation testing protocols to ensure software quality and robust system security.',
            skills: ['Automation Testing', 'SDLC', 'Jira', 'Postman'],
        },
        {
            id: 6,
            category: 'Other',
            name: 'AI Training & Mentorship',
            icon: <Terminal className="w-7 h-7" />,
            description: 'Founder of AIXORA Academy, delivering specialized training in modern web stacks and AI-native development workflows.',
            skills: ['Mentoring', 'Curriculum Design', 'Public Speaking'],
        }
    ];

    const categories = ['All', 'Development', 'AI & Data', 'Other'];

    const filteredServices = activeTab === 'All' 
        ? serviceData 
        : serviceData.filter(s => s.category === activeTab);

    return (
        <section id="services" className="relative w-full px-6 md:px-[10%] py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB22C]/10 dark:bg-[#FFB22C]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h4 className="text-[#FFB22C] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3">Professional Expertise</h4>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Technical <span className="text-[#FFB22C]">Services.</span></h2>
                    <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-base md:text-lg">
                        Transforming complex requirements into <span className="text-[#FFB22C] font-bold">scalable solutions</span> through modern frameworks and AI-native workflows.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border ${
                                activeTab === cat 
                                ? 'bg-[#FFB22C] border-[#FFB22C] text-black shadow-lg shadow-yellow-500/20' 
                                : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-[#FFB22C]/40 hover:text-[#FFB22C]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredServices.map((service) => (
                            <motion.div
                                layout
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                whileHover={{ y: -8 }}
                                className="group relative overflow-hidden p-6 md:p-8 bg-white dark:bg-white/[0.02] backdrop-blur-3xl border border-gray-100 dark:border-white/5 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-500 hover:border-[#FFB22C]/30 shadow-xl shadow-black/[0.01]"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                                    <ArrowUpRight className="text-[#FFB22C] w-6 h-6" />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                                    {/* Icon Container */}
                                    <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-white/10 text-[#FFB22C] group-hover:bg-[#FFB22C]/10 transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    
                                    <div className="flex-grow">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-[#FFB22C] transition-colors">{service.name}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-md font-medium">
                                            {service.description}
                                        </p>

                                        {/* Skill Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {service.skills.map(skill => (
                                                <span key={skill} className="text-[9px] md:text-[10px] font-bold px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-400 dark:text-gray-500 rounded-lg border border-transparent group-hover:border-[#FFB22C]/20 group-hover:text-[#FFB22C] transition-all">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}