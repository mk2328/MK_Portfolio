"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Code2, 
    Smartphone, 
    Terminal, 
    Layout, 
    ShieldCheck, 
    Cpu,
    ArrowUpRight 
} from 'lucide-react';

export default function Services() {
    const [activeTab, setActiveTab] = useState('All');

    const serviceData = [
        {
            id: 1,
            category: 'Development',
            name: 'Full Stack Development',
            icon: <Code2 className="w-7 h-7" />,
            description: 'Scalable web applications using MERN Stack (MongoDB, Express, React, Node.js) and PHP-MySQL.',
            skills: ['React', 'Node.js', 'PHP', 'REST APIs'],
        },
        {
            id: 2,
            category: 'Development',
            name: 'Mobile App Solutions',
            icon: <Smartphone className="w-7 h-7" />,
            description: 'Cross-platform mobile applications developed with Flutter and Firebase integration.',
            skills: ['Flutter', 'Dart', 'Firebase'],
        },
        {
            id: 3,
            category: 'AI & Data',
            name: 'AI & Data Intelligence',
            icon: <Cpu className="w-7 h-7" />,
            description: 'Climate prediction models and ML fundamentals using Python and Flask frameworks.',
            skills: ['Python', 'Flask', 'Machine Learning'],
        },
        {
            id: 4,
            category: 'Design',
            name: 'UI/UX & Frontend',
            icon: <Layout className="w-7 h-7" />,
            description: 'Responsive, user-centric interfaces using Tailwind CSS, Bootstrap, and modern JavaScript.',
            skills: ['Tailwind', 'Bootstrap', 'GSAP'],
        },
        {
            id: 5,
            category: 'Other',
            name: 'QA & Cyber Security',
            icon: <ShieldCheck className="w-7 h-7" />,
            description: 'Manual and basic automation testing with a focus on web security and IT automation.',
            skills: ['Manual Testing', 'CyberSecurity', 'Git'],
        },
        {
            id: 6,
            category: 'Other',
            name: 'Technical Training',
            icon: <Terminal className="w-7 h-7" />,
            description: 'Founder of AIXORA Academy, mentoring students in modern web and database concepts.',
            skills: ['Mentoring', 'Project Lead', 'Agile/Jira'],
        }
    ];

    const categories = ['All', 'Development', 'Design', 'AI & Data', 'Other'];

    const filteredServices = activeTab === 'All' 
        ? serviceData 
        : serviceData.filter(s => s.category === activeTab);

    return (
        <section id="services" className="relative w-full px-6 md:px-[10%] py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
            
            {/* Background Accent - Light mode mein visibility badhayi hai */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D946EF]/10 dark:bg-[#D946EF]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h4 className="text-[#d965eb] font-bold tracking-[0.2em] uppercase text-sm mb-3">Professional Expertise</h4>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 font-Ovo tracking-tight">Technical Services</h2>
                    <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg font-Ovo">
                        Transforming complex ideas into <span className="text-[#d965eb] font-bold">digital realities</span> through modern tech stacks and leadership.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                                activeTab === cat 
                                ? 'bg-[#d965eb] border-[#D946EF] text-white shadow-xl shadow-purple-500/30' 
                                : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-[#D946EF] hover:text-[#D946EF]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredServices.map((service) => (
                            <motion.div
                                layout
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden p-8 bg-white dark:bg-white/[0.03] backdrop-blur-2xl border border-gray-100 dark:border-white/10 rounded-[2.5rem] transition-all duration-500 hover:border-[#D946EF]/40 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] dark:shadow-none hover:shadow-[0_20px_50px_-20px_rgba(217,70,239,0.15)]"
                            >
                                {/* Premium Corner Accent */}
                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                                    <ArrowUpRight className="text-[#d965eb] w-6 h-6" />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                                    {/* Icon Container with Glow - Light mode optimized */}
                                    <div className="relative flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-50 dark:bg-white/10 rounded-3xl border border-gray-100 dark:border-white/10 text-[#d965eb] shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">{service.name}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-md font-medium">
                                            {service.description}
                                        </p>

                                        {/* Skill Tags - Light mode background visibility */}
                                        <div className="flex flex-wrap gap-2">
                                            {service.skills.map(skill => (
                                                <span key={skill} className="text-[10px] font-bold px-3 py-1 bg-gray-100/80 dark:bg-white/5 text-gray-500 dark:text-gray-500 rounded-lg group-hover:bg-[#D946EF]/10 group-hover:text-[#d965eb] transition-all duration-300 border border-transparent group-hover:border-[#D946EF]/20">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Glow Line */}
                                <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#d965eb] to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}