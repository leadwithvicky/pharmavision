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

const carouselImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
];

export default function AboutHero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length),
            4000
        );
        return () => clearInterval(interval);
    }, []);

    // Radial arrangement with gap at top (270deg/-90deg)
    // We want to distribute 6 items roughly from -30deg (top-right) to -150deg (top-left) going CW?
    // Let's use standard angle (0 = East).
    // Top is -90deg.
    // Gap at -90deg.
    // We need 6 items. Let's arrange them symmetrically.
    // 01: Top-Left -> Angle approx -130deg
    // 02: Left -> Angle approx -180deg
    // 03: Bottom-Left -> Angle approx -230deg
    // 04: Bottom-Right -> Angle approx -310deg (+50deg) 
    // Wait, let's keep gaps even.
    // Total usable angle ~ 300 deg? (Leaving 60 deg gap at top).
    // 300 / 5 gaps = 60 deg per step?
    // Positions:
    // 01: -120 deg (Top Left)
    // 02: -180 deg (Left)
    // 03: -240 deg (Bottom Left) -> +120
    // NO, this order is CCW.
    // Let's list desired visual positions (Clock Face):
    // 01: 10 o'clock
    // 02: 9 o'clock
    // 03: 7 o'clock
    // 04: 5 o'clock
    // 05: 3 o'clock
    // 06: 2 o'clock

    // Specific angles from -90 (Top):
    // 01: -50 deg (from top CCW) -> -140 deg absolute
    // 02: -100 deg (from top CCW) -> -190 deg absolute
    // 03: -150 deg (from top CCW) -> -240 deg absolute

    // 06: +50 deg (from top CW) -> -40 deg absolute
    // 05: +100 deg (from top CW) -> +10 deg absolute
    // 04: +150 deg (from top CW) -> +60 deg absolute

    // Let's use these fixed angles for precision.
    const radius = 42; // percentage of container width
    const angles = [
        230, // 01 (Top Left-ish) - roughly 10 o'clock (270 - 40 = 230)
        180, // 02 (Left) - 9 o'clock
        130, // 03 (Bottom Left) - 7-8 o'clock
        50,  // 04 (Bottom Right) - 4-5 o'clock
        0,   // 05 (Right) - 3 o'clock
        -50  // 06 (Top Right) - 1-2 o'clock
    ];

    // Correction: Next.js/React standard coords.
    // 0 deg is Right. 
    // 270 deg is Top.
    // 01 needs to be at ~220 deg.
    // 02 needs to be at ~180 deg.
    // 03 needs to be at ~140 deg.
    // 04 needs to be at ~40 deg.
    // 05 needs to be at ~0 deg.
    // 06 needs to be at ~320 deg (-40).

    const petalPositions = [
        { angle: 225, id: '01' },
        { angle: 180, id: '02' },
        { angle: 135, id: '03' },
        { angle: 45, id: '04' },
        { angle: 0, id: '05' },
        { angle: 315, id: '06' },
    ];

    return (
        <section className="w-full min-h-[calc(100vh-80px)] pt-24 pb-16 px-4 md:px-8 bg-[#F5FAF6] flex flex-col items-center justify-start overflow-hidden">
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

                {/* Outer Decorative Ring (SVG) */}
                {/* We draw a circle dash that excludes the top part */}
                <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block scale-90">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Path: Arc from angle X to Y. 
                    Top gap: Wider now.
                    Start: ~80, 20. End: ~20, 20.
                    This creates a wider open mouth at the top for the text.
                */}
                        <path
                            d="M 80 25 A 42 42 0 1 1 20 25"
                            fill="none"
                            stroke="#2A5C43"
                            strokeWidth="0.3"
                            strokeDasharray="4 4"
                            className="opacity-40"
                            transform="rotate(0 50 50)"
                        />
                        <path
                            d="M 80 25 A 42 42 0 1 1 20 25"
                            fill="none"
                            stroke="#2A5C43"
                            strokeWidth="0.1"
                            className="opacity-30"
                            transform="rotate(0 50 50)"
                        />
                    </svg>
                </div>


                {/* Center white disk with image carousel */}
                <div className="relative z-20 w-[32%] h-[32%] rounded-full bg-white shadow-2xl border-4 border-white flex items-center justify-center overflow-hidden ring-1 ring-gray-100">
                    {/* Inner Carousel */}
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
                                    src={carouselImages[currentImageIndex]}
                                    alt="Team"
                                    className="w-full h-full object-cover"
                                />
                                {/* White overlay for text readability? No, text is outside now. */}
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

                {/* Petal Images */}
                <div className="absolute inset-0 hidden md:block">
                    {partners.map((p, i) => {
                        const pos = petalPositions[i];
                        const angleRad = (pos.angle * Math.PI) / 180;
                        // Radius as percentage 
                        const r = 38; // 38% of container width
                        // Center is 50, 50
                        const left = 50 + r * Math.cos(angleRad) + "%";
                        const top = 50 - r * Math.sin(angleRad) + "%"; // Y inverted in CSS

                        // Rotation: The petal should point to center? 
                        // In the image, they are geometric shapes.
                        // Let's rotate them to face the center.
                        // Angle to center is opposite of position angle.
                        // We want the "bottom" (point) of the kite to face center.
                        // CSS rotate 0 points Up? No, depends on content.
                        // If we use standard rotation:
                        // 90 deg = Right.
                        // At 0 deg (Right), we want bottom to point Left (180).
                        // So rotate = 0 + 90?
                        // Let's deduce:
                        // At 270 (Top), we want bottom to point Down (180). 
                        // So rotation should be...
                        // Let's try: calculate rotation such that "Down" of the div points to Center.
                        // Angle of position (theta). We want Down vector (90 deg in CSS visually) to align with Center direction.
                        // Center direction is theta + 180.
                        // So we want div's 90 deg to be theta + 180.
                        // rotation = theta + 90.

                        const rotation = -pos.angle + 90; // Just visual tuning usually works best

                        return (
                            <div
                                key={p.id}
                                className="absolute w-[20%] h-[26%] drop-shadow-2xl transition-all hover:scale-105 hover:z-50"
                                style={{
                                    left: left,
                                    top: top,
                                    transform: `translate(-50%, -50%) rotate(${-pos.angle + 90}deg)`, // Adjust rotation
                                    // transform: `translate(-50%, -50%)`, // For debugging
                                    // User requested "MAKE THE CIRCLE" -> Segments fitting together.
                                    // Keystone/Trapezoid shape.
                                    // Top (outer): Wide.
                                    // Bottom (inner): Narrow.
                                    // polygon(TL, TR, BR, BL)
                                    clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)",
                                    width: '30%', // Increased width to make petals wider
                                    height: '28%'
                                }}
                            >
                                <div className="relative w-full h-full bg-white border-4 border-[#2A5C43] overflow-hidden">
                                    {/* Image - Counter Rotate */}
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
                                            // badge at bottom point
                                        }}
                                    >
                                        {p.id}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>


                {/* mobile: simple grid */}
                <div className="md:hidden mt-10 grid grid-cols-2 gap-4 w-full px-6">
                    {partners.map((p) => (
                        <div
                            key={p.id}
                            className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg relative"
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
            </div>
        </section>
    );
}
