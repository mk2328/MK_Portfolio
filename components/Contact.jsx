'use client'
import { useState } from 'react'
import confetti from 'canvas-confetti'

export default function Contact() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("");

        const formData = new FormData(event.target);

        // Web3Forms Access Key
        formData.append("access_key", "987302cd-1f4e-436f-8ff9-f14dc495a37d");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                // Celebration Confetti! 🎉
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#FFB22C', '#000000', '#ffffff']
                });
                event.target.reset();
            } else {
                setResult(data.message);
            }
        } catch (error) {
            setResult("Network error! Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="w-full px-[8%] py-20 scroll-mt-20 relative overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFB22C]/10 blur-[120px] -z-10 rounded-full"></div>

            <div className="max-w-6xl mx-auto">
                {!isSuccess ? (
                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        {/* Left Side: Text */}
                        <div className="w-full lg:w-2/5">
                            <h4 className="text-[#FFB22C] font-Ovo mb-4">Contact Me</h4>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-black dark:text-white leading-tight">
                                Let’s build something <span className="text-[#FFB22C]">great</span>.
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 font-Ovo">
                                Have a question or a project proposal? Drop a message and I'll get back to you as soon as possible.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/10 group-hover:border-[#FFB22C] transition-all">
                                        <img src="/assets/mail_icon.png" className="w-5 dark:invert" alt="" />
                                    </div>
                                    <p className="font-medium dark:text-gray-300">muskankamran3369@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form Card */}
                        <div className="w-full lg:w-3/5 bg-white dark:bg-[#0b0b0b] p-8 md:p-12 rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-xl">
                            <form onSubmit={onSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative">
                                        {/* --- Customization Fields --- */}
                                        <input type="hidden" name="from_name" value="Muskan Portfolio" />
                                        <input type="hidden" name="subject" value="New Project Inquiry from Portfolio" />
                                        <input type="hidden" name="replyto" value="email" />
                                        <input type="text" name="name" required placeholder=" " className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 outline-none focus:border-[#FFB22C] dark:focus:border-[#FFB22C] transition-all dark:text-white" />
                                        <label className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#FFB22C] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Full Name</label>
                                    </div>
                                    <div className="relative">
                                        <input type="email" name="email" required placeholder=" " className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 outline-none focus:border-[#FFB22C] dark:focus:border-[#FFB22C] transition-all dark:text-white" />
                                        <label className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#FFB22C] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Email Address</label>
                                    </div>
                                </div>

                                <div className="relative">
                                    <textarea name="message" required rows="4" placeholder=" " className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 outline-none focus:border-[#FFB22C] dark:focus:border-[#FFB22C] transition-all resize-none dark:text-white"></textarea>
                                    <label className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#FFB22C] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">How can I help you?</label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-[#FFB22C] dark:hover:bg-[#FFB22C] hover:text-black transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    <img src="/assets/right-arrow-white.png" className="w-4 group-hover:invert" alt="" />
                                </button>
                                {result && <p className="text-sm text-[#FFB22C] font-Ovo">{result}</p>}
                            </form>
                        </div>
                    </div>
                ) : (
                    /* --- Professional Success State --- */
                    <div className="text-center py-20 animate-in zoom-in duration-500">
                        <div className="text-7xl mb-6">✨</div>
                        <h2 className="text-4xl font-bold mb-4 dark:text-white">Message Received!</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                            Thanks for reaching out! I've received your email and will get back to you shortly.
                        </p>
                        <button
                            onClick={() => setIsSuccess(false)}
                            className="px-8 py-3 border border-gray-300 dark:border-white/20 rounded-full hover:bg-gray-50 dark:hover:bg-white/5 dark:text-white transition-all"
                        >
                            Send another
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}