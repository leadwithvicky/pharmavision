"use client";

import { Star, MoveLeft, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        name: "AISHWARYA",
        role: "",
        quote: "The training gave me real confidence to work on industry projects from day one",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
        rating: 4.5,
    },
    {
        name: "ROHIT",
        role: "",
        quote: "A clear, practical course that helped me upskill quickly and get interview-ready.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
        rating: 4.7,
    },
    {
        name: "MEGHA",
        role: "",
        quote: "ICSR and narrative training prepared me well for my Drug Safety Associate position.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
        rating: 4.6,
    },
    {
        name: "SNEHA",
        role: "",
        quote: "The placement support was exceptional. They guided me through every interview step.",
        image: "https://images.unsplash.com/photo-1594744803329-a584af1cae24?q=80&w=1887&auto=format&fit=crop",
        rating: 4.8,
    },
    {
        name: "VIKRAM",
        role: "",
        quote: "Highly recommended for anyone looking to transition into PV. Comprehensive and practical.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        rating: 4.9,
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for right, -1 for left
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 1024) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(3);
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Get visible items based on currentIndex and itemsPerPage
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < itemsPerPage; i++) {
            visible.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return visible;
    };

    const visibleItems = getVisibleTestimonials();

    return (
        <section id="testimonials" className="w-full py-24 px-4 md:px-8 bg-secondary overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary uppercase tracking-wider">
                        Testimonials
                    </h2>
                    <h3 className="font-bold text-lg md:text-2xl text-gray-900 uppercase tracking-wide">
                        Clear Guidance For a Fast-Changing Pharma World
                    </h3>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[200px]">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {visibleItems.map((t, idx) => (
                                <motion.div
                                    key={`${t.name}-${currentIndex}-${idx}`}
                                    initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="flex gap-4 md:gap-6 items-start bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full"
                                >
                                    {/* Image */}
                                    <div className="w-24 h-32 md:w-28 md:h-36 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-4 pt-1">
                                        <p className="text-[13px] font-medium text-gray-700 leading-relaxed italic">
                                            "{t.quote}"
                                        </p>
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} size={12} className="fill-yellow-400 text-yellow-400" />
                                            ))}
                                            <span className="text-[10px] font-bold ml-1 text-gray-500">({t.rating})</span>
                                        </div>
                                        <div className="font-serif text-primary font-bold uppercase tracking-wider text-xs border-l-2 border-primary/20 pl-3">
                                            {t.name}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Custom Arrows */}
                <div className="flex justify-center gap-12 mt-16 text-primary">
                    <button
                        onClick={prev}
                        className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm active:scale-90"
                    >
                        <MoveLeft size={28} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={next}
                        className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm active:scale-90"
                    >
                        <MoveRight size={28} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
}
