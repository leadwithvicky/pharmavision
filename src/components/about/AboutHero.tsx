"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const partners = [
    { id: "01", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop" },
    { id: "02", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop" },
    { id: "03", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" },
    { id: "04", img: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop" },
    { id: "05", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" },
    { id: "06", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop" },
];

const carouselData = [
    { title: "Team Synergy", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" },
    { title: "Expert Mentorship", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" },
    { title: "Industry Standards", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" },
    { title: "Interactive Hub", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" },
    { title: "Accelerated Growth", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" },
];

export default function AboutHero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrentImageIndex((prev) => (prev + 1) % carouselData.length),
            4000
        );
        return () => clearInterval(interval);
    }, []);

    const petalPositions = [
        { angle: 225, id: '01' },
        { angle: 180, id: '02' },
        { angle: 135, id: '03' },
        { angle: 45, id: '04' },
        { angle: 0, id: '05' },
        { angle: 315, id: '06' },
    ];

    return (
        <section className="w-full min-h-screen pt-24 pb-16 px-4 md:px-8 bg-[#F5FAF6] flex flex-col items-center justify-start overflow-hidden">
            {/* top heading */}
            <div className="text-center mb-0 lg:mb-4 max-w-3xl z-10 relative">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#2A5C43] tracking-[0.25em] uppercase mb-2">
                    ABOUT US
                </h1>
                <h2 className="font-semibold text-xl md:text-2xl text-black tracking-[0.25em] uppercase mb-3">
                    SHAPING SKILLS. STRENGTHENING CAREERS.
                </h2>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    VisionPharma provides practical, industry‑focused training that helps
                    learners gain real‑world skills and career confidence. With expert
                    guidance and a clear learning approach, we prepare students to step
                    into professional roles with ease.
                </p>
            </div>

            {/* Main Radial Container */}
            <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center mt-[-5%] md:mt-0">

                {/* Center white disk with image carousel */}
                <div className="relative z-20 w-[32%] h-[32%] rounded-full bg-white shadow-2xl border-4 border-white flex items-center justify-center overflow-hidden ring-1 ring-gray-100">
                    <div className="w-full h-full relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={carouselData[currentImageIndex].img}
                                    alt="Team"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Center Text in the top gap */}
                <div className="absolute top-[16%] md:top-[12%] z-30 flex flex-col items-center text-center">
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-[#2A5C43] leading-none tracking-wide">
                        Where Powerful
                    </h3>
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-[#2A5C43] leading-none tracking-wide">
                        Partnerships
                    </h3>
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-[#2A5C43] leading-none tracking-wide">
                        Begin
                    </h3>
                </div>

                {/* Dynamic Center Name at the bottom gap */}
                <div className="absolute bottom-[16%] md:bottom-[10%] z-30 flex flex-col items-center text-center px-6 md:px-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-[240px] md:max-w-[300px] lg:max-w-md"
                        >
                            <span className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-[#2A5C43] block leading-[1.1] md:leading-tight">
                                {carouselData[currentImageIndex].title}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Petal Images (Desktop Only) */}
                <div className="absolute inset-0 hidden md:block">
                    {partners.map((p, i) => {
                        const pos = petalPositions[i];
                        const angleRad = (pos.angle * Math.PI) / 180;
                        const r = 38;
                        const left = 50 + r * Math.cos(angleRad) + "%";
                        const top = 50 - r * Math.sin(angleRad) + "%";

                        return (
                            <div
                                key={p.id}
                                className="absolute w-[20%] h-[26%] drop-shadow-2xl transition-all hover:scale-105 hover:z-50"
                                style={{
                                    left: left,
                                    top: top,
                                    transform: `translate(-50%, -50%) rotate(${-pos.angle + 90}deg)`,
                                    clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)",
                                    width: '30%',
                                    height: '28%'
                                }}
                            >
                                <div className="relative w-full h-full bg-white border-4 border-[#2A5C43] overflow-hidden">
                                    <div
                                        className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%]"
                                        style={{
                                            transform: `rotate(${pos.angle - 90}deg)`,
                                        }}
                                    >
                                        <img
                                            src={p.img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* ID Badge */}
                                    <div
                                        className="absolute w-8 h-8 rounded-full bg-[#1F5B3A] text-white text-xs font-bold flex items-center justify-center shadow-md z-10"
                                        style={{
                                            bottom: '10px',
                                            left: '50%',
                                            transform: `translateX(-50%) rotate(${pos.angle - 90}deg)`
                                        }}
                                    >
                                        {p.id}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>


            </div>

            {/* mobile: Clean Grid (Reverted from Collage) */}
            <div className="md:hidden mt-10 grid grid-cols-2 gap-x-4 gap-y-10 w-full px-6">
                {partners.map((p) => (
                    <div
                        key={p.id}
                        className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border-2 border-white relative"
                    >
                        <img
                            src={p.img}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#1F5B3A] text-white text-xs font-semibold flex items-center justify-center shadow-md">
                            {p.id}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
