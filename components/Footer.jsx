"use client";

import React from 'react';
import { Mail, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative mt-20 pt-16 pb-8 overflow-hidden bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500">
            
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#D946EF]/5 blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-[6%] lg:px-[10%]">
                
                <div className="flex flex-col items-center text-center space-y-8 mb-16">
                    {/* Logo - Matching Navbar Style */}
                    <div onClick={scrollToTop} className="cursor-pointer group">
                        <span className="text-5xl font-black text-gray-900 dark:text-white transition-transform duration-300 group-hover:scale-110 block">
                            MK<span className="text-[#D946EF]">.</span>
                        </span>
                    </div>

                    {/* Email Contact - Professional Style */}
                    <div className="group flex items-center gap-3 px-6 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm transition-all hover:border-[#D946EF]/50 hover:shadow-lg hover:shadow-[#D946EF]/10">
                        <Mail className="w-5 h-5 text-[#D946EF]" />
                        <a 
                            href="mailto:muskankamran3369@gmail.com" 
                            className="text-gray-700 dark:text-gray-300 font-Ovo text-lg hover:text-[#D946EF] transition-colors"
                        >
                            muskankamran3369@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-gray-200 dark:border-white/10 gap-6">
                    
                    {/* Copyright */}
                    <div className="text-gray-500 dark:text-gray-400 text-sm font-Ovo order-2 md:order-1 text-center md:text-left">
                        <p>© {currentYear} <span className="text-gray-900 dark:text-white font-bold">Muskan Kamran</span>.</p>
                        <p className="text-[10px] mt-1 uppercase tracking-widest opacity-60">Full Stack Developer & Founder of AIXORA</p>
                    </div>

                    {/* Social Links */}
                    <ul className="flex items-center gap-4 order-1 md:order-2">
                        {[
                            { icon: <Github size={20} />, link: "https://github.com/mk2328" },
                            { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/muskan-kamran-2328u" },
                            { icon: <Twitter size={20} />, link: "#!" }
                        ].map((social, index) => (
                            <li key={index}>
                                <a 
                                    href={social.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-[#D946EF] hover:border-[#D946EF] hover:-translate-y-1 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                        
                        {/* Scroll to Top Button */}
                        <button 
                            onClick={scrollToTop}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#D946EF] text-white shadow-lg shadow-purple-500/30 hover:scale-110 transition-all ml-2"
                        >
                            <ArrowUp size={20} />
                        </button>
                    </ul>
                </div>
            </div>
        </footer>
    );
}