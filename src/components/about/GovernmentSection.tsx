"use client";

import { motion } from "framer-motion";

export default function GovernmentSection() {
    const items = [
        {
            id: "01",
            title: "GOVERNMENT OF INDIA",
            logo: "govt/g1.png", // Placeholder
            logoAlt: "Government of India Logo"
        },
        {
            id: "02",
            title: "GOVERNMENT OF TELANGANA",
            logo: "govt/g2.png", // Placeholder
            logoAlt: "Government of Telangana Logo"
        },
        {
            id: "03",
            title: "MINISTRY OF MICRO, SMALL AND MEDIUM ENTERPRISES",
            logo: "govt/g3.png", // Placeholder
            logoAlt: "MSME Logo"
        },
        {
            id: "04",
            title: "INTERNATIONAL ORGANIZATION FOR STANDARDIZATION",
            logo: "govt/g4.png", // Placeholder
            logoAlt: "ISO 9001 Logo"
        },
        {
            id: "05",
            title: "STARTUP INDIA",
            logo: "govt/g5.png", // Placeholder
            logoAlt: "Startup India Logo"
        },
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-secondary overflow-hidden">
            <div className="max-w-[1200px] mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center font-serif text-2xl lg:text-3xl font-bold text-primary uppercase tracking-wide mb-16"
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
                                className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 relative group perspective-1000"
                            >

                                {/* Item Wrapper to handle ordering */}
                                <div className={`flex flex-col md:flex-row items-center w-full max-w-5xl ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Text Pill */}
                                    <div className={`w-full md:w-[45%] h-24 rounded-[3rem] bg-primary text-white flex items-center justify-center shadow-lg relative z-10 
                                                    transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:bg-[#1a402d]
                                                    ${isEven ? 'md:rounded-l-none md:rounded-r-[3rem] md:pl-12' : 'md:rounded-r-none md:rounded-l-[3rem] md:pr-12'}
                                    `}>
                                        <h3 className="font-bold text-sm md:text-base uppercase tracking-wider text-center px-6">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Center Number Circle */}
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-xl flex items-center justify-center z-20 border-4 border-secondary shrink-0 md:-mx-4 my-4 md:my-0
                                                    transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:border-primary">
                                        <span className="font-serif text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{item.id}</span>
                                    </div>

                                    {/* Logo Pill */}
                                    <div className={`w-full md:w-[45%] h-32 rounded-[3rem] bg-white/50 border-2 border-dashed border-primary flex items-center justify-center relative p-6
                                                     transition-all duration-300 transform group-hover:scale-105 group-hover:border-solid group-hover:bg-white group-hover:shadow-xl
                                                     ${isEven ? 'md:rounded-r-none md:rounded-l-[3rem] md:pr-12' : 'md:rounded-l-none md:rounded-r-[3rem] md:pl-12'}
                                    `}>
                                        <img
                                            src={item.logo}
                                            alt={item.logoAlt}
                                            className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
