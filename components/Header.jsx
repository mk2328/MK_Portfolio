"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ArrowRight } from 'lucide-react';

export default function Header() {
    return (
        <section className="relative w-full h-screen h-[100dvh] flex flex-col items-center justify-between bg-[#fafafa] dark:bg-[#050505] overflow-hidden px-6 transition-colors duration-500">

            {/* --- ENERGETIC BACKGROUND --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        rotate: [0, 90, 0],
                        x: ['-20%', '20%', '-20%'],
                        y: ['-10%', '10%', '-10%']
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#FFB22C]/25 dark:bg-[#FFB22C]/10 rounded-full blur-[80px] md:blur-[130px] opacity-80 md:opacity-100 will-change-transform"
                />

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        x: ['20%', '-20%', '20%'],
                        y: ['10%', '-10%', '10%']
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-amber-400/30 dark:bg-amber-900/10 rounded-full blur-[80px] md:blur-[130px] opacity-80 md:opacity-100 will-change-transform"
                />

                <div className="absolute inset-0 z-[1]">
                    <div
                        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.3]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255, 178, 44, 0.2) 1.5px, transparent 1.5px), 
                                            linear-gradient(90deg, rgba(255, 178, 44, 0.2) 1.5px, transparent 1.5px)`,
                            backgroundSize: '40px 40px'
                        }}
                    ></div>
                </div>

                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 dark:opacity-40 mix-blend-overlay z-[2]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 dark:via-[#050505]/20 to-[#fafafa] dark:to-[#050505] z-[3]"></div>
            </div>

            {/* Empty spacer to account for Navbar height at the top */}
            <div className="h-16 md:h-20 w-full shrink-0" />

            {/* --- MAIN CONTENT --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                /* flex-grow ensures this takes up available space, and justify-center centers content within that space */
                className="relative z-10 flex flex-grow flex-col items-center justify-center text-center max-w-4xl w-full"
            >
                {/* Profile Image */}
                <div className="relative mb-4 md:mb-6">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        /* Glow ko bhi thoda adjust kiya taake bade image ke peeche sahi lage */
                        className="absolute -inset-10 bg-[#FFB22C]/40 dark:bg-[#FFB22C]/25 rounded-full blur-3xl"
                    />
                    <div className="relative p-1 bg-gradient-to-b from-black/20 dark:from-white/30 to-transparent rounded-full shadow-[0_0_50px_rgba(255,178,44,0.2)]">
                        <img
                            src="/assets/profile.jpeg"
                            alt="Muskan Kamran"
                            /* w-36 h-36 mobile ke liye (9rem) aur md:w-44 desktop ke liye (11rem) */
                            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-white/20 dark:border-white/10"
                        />
                    </div>
                </div>

                <motion.h3 className="flex items-center gap-2 text-[10px] md:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 md:mb-3 uppercase tracking-[0.25em]">
                    Hi! I'm <span className="text-black dark:text-white">Muskan Kamran</span>
                    <motion.span animate={{ rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="inline-block">👋</motion.span>
                </motion.h3>

                <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-2 md:mb-4 tracking-tight min-h-[1.3em] px-2 leading-tight">
                    <Typewriter
                        words={['Full Stack Developer.', 'Founder @ AIXORA Academy.', 'MERN Stack Developer.', 'Software Engineer.']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h1>

                <p className="max-w-xl text-[12px] md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 font-normal px-6 leading-relaxed">
                    Transforming complex ideas into <span className="text-black dark:text-white font-bold italic underline decoration-[#FFB22C] underline-offset-4 decoration-[3px]">scalable digital realities</span>.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto px-10 sm:px-0">
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255, 178, 44, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold flex items-center justify-center gap-3 text-xs md:text-sm transition-all shadow-xl"
                    >
                        Start a Project <ArrowRight className="w-4 h-4" />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 178, 44, 0.08)", borderColor: "#FFB22C" }}
                        whileTap={{ scale: 0.95 }}
                        href="/assets/MK_ResumeUpdated.pdf"
                        download
                        className="w-full sm:w-auto px-8 py-3 border-2 border-black/10 dark:border-white/20 text-black dark:text-white rounded-full font-bold flex items-center justify-center gap-3 backdrop-blur-md text-xs md:text-sm transition-all"
                    >
                        Download CV <Download className="w-4 h-4" />
                    </motion.a>
                </div>
            </motion.div>

            {/* Scroll Indicator - Relative to bottom to ensure it stays in view */}
            <div className="h-16 flex items-center justify-center shrink-0">
                <div className="hidden sm:block">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-5 h-9 border-2 border-black/20 dark:border-white/20 rounded-full flex justify-center p-1"
                    >
                        <div className="w-1 h-2 bg-[#FFB22C] rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}