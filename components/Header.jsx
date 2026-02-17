"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ArrowRight } from 'lucide-react';

export default function Header() {
    return (
        // BG Color updated to match About section exactly
        <section className="relative w-full h-screen h-[100dvh] flex items-center justify-center bg-[#fafafa] dark:bg-[#050505] overflow-hidden px-6 transition-colors duration-500">
            
            {/* --- ENERGETIC BACKGROUND --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                
                {/* Orb 1 - Color updated to #D946EF/15 */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.4, 1],
                        rotate: [0, 90, 0],
                        x: ['-20%', '20%', '-20%'],
                        y: ['-10%', '10%', '-10%']
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] bg-[#D946EF]/15 dark:bg-[#D946EF]/15 rounded-full blur-[130px] will-change-transform"
                />
                
                {/* Orb 2 - Color updated to Fuchsia (matching About) */}
                <motion.div 
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        x: ['20%', '-20%', '20%'],
                        y: ['10%', '-10%', '10%']
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] bg-fuchsia-400/20 dark:bg-fuchsia-900/10 rounded-full blur-[130px] will-change-transform"
                />
                
                {/* --- ENHANCED GRID PATTERN --- */}
                <div className="absolute inset-0 z-[1]">
                    <div 
                        className="absolute inset-0 opacity-[0.2] dark:opacity-[0.35]" 
                        style={{ 
                            // Grid line color updated to match About theme
                            backgroundImage: `linear-gradient(rgba(217, 70, 239, 0.2) 1.5px, transparent 1.5px), 
                                            linear-gradient(90deg, rgba(217, 70, 239, 0.2) 1.5px, transparent 1.5px)`, 
                            backgroundSize: '45px 45px' 
                        }}
                    ></div>
                </div>
                
                {/* Noise Texture Layer */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-30 mix-blend-overlay z-[2]"></div>
                
                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 dark:via-[#050505]/30 to-[#fafafa] dark:to-[#050505] z-[3]"></div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center text-center max-w-4xl mt-12"
            >
                {/* Profile Image with Theme Color Glow */}
                <div className="relative mb-6">
                    <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        // Glow updated to #D946EF
                        className="absolute -inset-6 bg-[#D946EF]/30 dark:bg-[#D946EF]/20 rounded-full blur-3xl"
                    />
                    <div className="relative p-1 bg-gradient-to-b from-black/10 dark:from-white/20 to-transparent rounded-full shadow-2xl">
                        <img 
                            src="/assets/profile.jpeg" 
                            alt="Muskan Kamran" 
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-black/5 dark:border-white/10"
                        />
                    </div>
                </div>

                <motion.h3 className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-[0.3em]">
                    Hi! I'm <span className="text-black dark:text-white">Muskan Kamran</span>
                    <motion.span 
                        animate={{ rotate: [0, 20, 0] }} 
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="inline-block"
                    >👋</motion.span>
                </motion.h3>

                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight min-h-[1.2em]">
                    <Typewriter
                        words={['Full Stack Developer.','Founder @ AIXORA Academy.', 'MERN Stack Developer.', 'Software Engineer.']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h1>

                <p className="max-w-2xl text-gray-600 dark:text-gray-400 text-sm md:text-lg mb-8 font-light px-4 leading-relaxed">
                    Transforming complex ideas into <span className="text-black dark:text-white font-medium italic underline decoration-[#D946EF]/60 underline-offset-4 decoration-[3px]">scalable digital realities</span>.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <motion.a 
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(217, 70, 239, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        // Button color and hover shadow updated to match theme
                        className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold flex items-center gap-3 text-sm transition-all shadow-lg"
                    >
                        Start a Project <ArrowRight className="w-4 h-4" />
                    </motion.a>

                    <motion.a 
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(217, 70, 239, 0.05)", borderColor: "#D946EF" }}
                        whileTap={{ scale: 0.95 }}
                        href="/assets/MK_ResumeUpdated.pdf" 
                        download
                        className="px-8 py-3 border border-black/10 dark:border-white/20 text-black dark:text-white rounded-full font-semibold flex items-center gap-3 backdrop-blur-md text-sm transition-all"
                    >
                        Download CV <Download className="w-4 h-4" />
                    </motion.a>
                </div>
            </motion.div>

            {/* Scroll Indicator - Updated color to #D946EF */}
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-5 h-9 border-2 border-black/10 dark:border-white/10 rounded-full hidden sm:flex justify-center p-1.5"
            >
                <div className="w-1 h-2 bg-[#D946EF] dark:bg-[#D946EF] rounded-full" />
            </motion.div>
        </section>
    );
}