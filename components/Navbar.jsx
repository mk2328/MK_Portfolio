'use client'
import { useEffect, useRef } from 'react'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
        // Menu khulne par background scroll disable kar dein
        document.body.style.overflow = 'hidden';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
        // Menu band hone par scroll wapas enable kar dein
        document.body.style.overflow = 'auto';
    }
    
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-[#050505]', 'dark:shadow-white/20');
            } else {
                navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-[#050505]', 'dark:shadow-white/20');
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto'; // Cleanup
        }
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="/assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            {/* Main Navbar Container */}
            <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300">
                
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <a href="#top">
                        <span className="text-4xl md:text-5xl font-bold cursor-pointer text-black dark:text-white tracking-tighter">
                            MK<span className="text-[#FFB22C]">.</span>
                        </span>
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <ul ref={navLinkRef} className="flex items-center gap-4 lg:gap-8 rounded-full px-8 lg:px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent whitespace-nowrap">
                        <li><a className='hover:text-[#FFB22C] transition-colors' href="#top">Home</a></li>
                        <li><a className='hover:text-[#FFB22C] transition-colors' href="#about">About me</a></li>
                        <li><a className='hover:text-[#FFB22C] transition-colors' href="#skills">Skills</a></li>
                        <li><a className='hover:text-[#FFB22C] transition-colors' href="#services">Services</a></li>
                        <li><a className='hover:text-[#FFB22C] transition-colors' href="#work">My Work</a></li>
                        <li><a className='hover:text-[#FFB22C] transition-colors' href="#experience">Experience</a></li>
                    </ul>
                </div>

                {/* Right Side Buttons (Theme Toggle + Hamburger) */}
                <div className="flex items-center gap-3 md:gap-4 ml-auto">
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <img src="/assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="/assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </button>

                    <a href="#contact" className="hidden lg:flex items-center gap-2 px-6 py-2 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full font-Ovo dark:border-white/30 transition-all text-black dark:text-white whitespace-nowrap">
                        Contact
                        <img src="/assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
                        <img src="/assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
                    </a>

                    <button className="block md:hidden p-2" onClick={openMenu}>
                        <img src="/assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="/assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>
                </div>

                {/* -- ----- Mobile Side-Nav (Fixed for 100vh) ------ -- */}
                <div 
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col fixed -right-64 top-0 bottom-0 w-64 z-[60] h-screen bg-white dark:bg-[#0b0b0b] transition-all duration-500 font-Ovo border-l border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden"
                >
                    {/* Close Button Section */}
                    <div className="flex justify-end p-6">
                        <div className="p-2 rounded-full bg-gray-100 dark:bg-white/5 cursor-pointer" onClick={closeMenu}>
                            <img src="/assets/close-black.png" alt="close" className="w-4 dark:hidden" />
                            <img src="/assets/close-white.png" alt="close" className="w-4 hidden dark:block" />
                        </div>
                    </div>

                    {/* Logo in Sidebar */}
                    <div className="px-10 mb-8">
                        <span className="text-4xl font-bold text-black dark:text-white tracking-tighter">
                            MK<span className="text-[#FFB22C]">.</span>
                        </span>
                        <div className="h-[2px] w-8 bg-[#FFB22C] mt-2"></div>
                    </div>

                    {/* Navigation Links - Scrollable only if items exceed height */}
                    <nav className="flex-1 px-10 overflow-y-auto custom-scrollbar">
                        <ul className="flex flex-col gap-2">
                            {[
                                { name: 'Home', href: '#top' },
                                { name: 'About me', href: '#about' },
                                { name: 'Skills', href: '#skills' },
                                { name: 'Services', href: '#services' },
                                { name: 'My Work', href: '#work' },
                                { name: 'Experience', href: '#experience' },
                                { name: 'Contact me', href: '#contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} onClick={closeMenu} className="block py-3 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-[#FFB22C] transition-all">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Footer in Sidebar */}
                    <div className="p-10 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#0b0b0b]">
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
                            © 2026 Muskan Kamran
                        </p>
                    </div>
                </div>
            </nav>
        </>
    )
}