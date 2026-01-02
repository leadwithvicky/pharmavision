"use client";

import { motion } from "framer-motion";

export default function GovernmentSection() {
    const items = [
        {
            id: "01",
            title: "GOVERNMENT OF INDIA",
            logo: "govt/g1.png",
            logoAlt: "Government of India Logo"
        },
        {
            id: "02",
            title: "GOVERNMENT OF TELANGANA",
            logo: "govt/g2.png",
            logoAlt: "Government of Telangana Logo"
        },
        {
            id: "03",
            title: "MINISTRY OF MICRO, SMALL AND MEDIUM ENTERPRISES",
            logo: "govt/g3.png",
            logoAlt: "MSME Logo"
        },
        {
            id: "04",
            title: "INTERNATIONAL ORGANIZATION FOR STANDARDIZATION",
            logo: "govt/g4.png",
            logoAlt: "ISO 9001 Logo"
        },
        {
            id: "05",
            title: "STARTUP INDIA",
            logo: "govt/g5.png",
            logoAlt: "Startup India Logo"
        },
    ];

    return (
        <section id="government" className="w-full bg-secondary overflow-hidden">
            {/* ==========================================
                DESKTOP VERSION (Large Screens)
                ========================================== */}
            <div className="hidden lg:block max-w-[1200px] mx-auto py-20 px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center font-serif text-3xl font-bold text-primary uppercase tracking-wide mb-16"
                >
                    Government-Recognized. Industry-Trusted.
                </motion.h2>

                <div className="flex flex-col gap-12 relative">
                    {items.map((item, index) => {
                        const isEven = (index + 1) % 2 === 0;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-center group perspective-1000"
                            >
                                <div className={`flex items-center w-full max-w-5xl ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                                    {/* Text Pill */}
                                    <div className={`w-[45%] h-24 rounded-[3rem] bg-primary text-white flex items-center justify-center shadow-lg relative z-10 
                                                    transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:bg-[#1a402d]
                                                    ${isEven ? 'rounded-l-none rounded-r-[3rem] pl-12' : 'rounded-r-none rounded-l-[3rem] pr-12'}
                                    `}>
                                        <h3 className="font-bold text-base uppercase tracking-wider text-center px-6">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Center Number Circle */}
                                    <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center z-20 border-4 border-secondary shrink-0 -mx-4
                                                    transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:border-primary">
                                        <span className="font-serif text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{item.id}</span>
                                    </div>

                                    {/* Logo Pill */}
                                    <div className={`w-[45%] h-32 rounded-[3rem] bg-white/50 border-2 border-dashed border-primary flex items-center justify-center relative p-6
                                                     transition-all duration-300 transform group-hover:scale-105 group-hover:border-solid group-hover:bg-white group-hover:shadow-xl
                                                     ${isEven ? 'rounded-r-none rounded-l-[3rem] pr-12' : 'rounded-l-none rounded-r-[3rem] pl-12'}
                                    `}>
                                        <img src={item.logo} alt={item.logoAlt} className="h-full object-contain transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* ==========================================
                MOBILE VERSION (Small Screens)
                ========================================== */}
            <div className="lg:hidden w-full py-16 px-6">
                <h2 className="text-center font-serif text-2xl font-bold text-primary uppercase tracking-wider mb-12 px-2 leading-tight">
                    Government-Recognized. <br /> Industry-Trusted.
                </h2>

                <div className="flex flex-col gap-16 relative">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-1/2 top-10 bottom-10 w-px border-l-2 border-dashed border-primary/20 -translate-x-1/2"></div>

                    {items.map((item, index) => (
                        <div key={item.id} className="relative flex flex-col items-center">
                            {/* Number Badge */}
                            <div className="absolute -top-6 bg-white w-10 h-10 rounded-full shadow-lg border-2 border-primary flex items-center justify-center z-20 font-serif font-bold text-primary text-sm">
                                {item.id}
                            </div>

                            {/* Creative Stacked Card */}
                            <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-primary/5 w-full flex flex-col items-center gap-6 z-10">
                                <div className="h-16 w-full flex items-center justify-center">
                                    <img src={item.logo} alt={item.logoAlt} className="h-full object-contain" />
                                </div>

                                <div className="w-12 h-px bg-primary/20"></div>

                                <h3 className="text-[10px] font-bold text-gray-700 uppercase tracking-widest text-center leading-relaxed max-w-[200px]">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
