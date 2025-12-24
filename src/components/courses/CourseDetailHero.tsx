"use client";

import { Calendar, Star, MoveRight } from "lucide-react";
import Link from "next/link";

interface CourseDetailHeroProps {
    title: string;
    headline: string;
    image: string;
}

export default function CourseDetailHero({ title, headline, image }: CourseDetailHeroProps) {
    return (
        <section className="w-full pt-32 pb-10 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <span>/</span>
                    <Link href="/courses" className="hover:text-primary">Courses</Link>
                    <span>/</span>
                    <span className="text-primary">{title}</span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-2xl md:text-4xl font-bold text-primary uppercase text-center mb-12 tracking-wide max-w-4xl mx-auto">
                    {headline}
                </h1>

                {/* Hero Image Container */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                    <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>

                    {/* Top Cutout Text Overlay */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#f8fbfa] px-8 pt-4 pb-12 rounded-b-[3rem] text-center max-w-3xl hidden md:block">
                        <p className="text-xs font-bold text-gray-700 leading-relaxed max-w-2xl mx-auto">
                            Gain the skills to translate medical data into accurate, industry-ready codes. Build confidence with practical training designed for global certification success.
                        </p>
                    </div>

                    {/* Bottom Green Floating Bar */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white w-[90%] md:w-auto md:min-w-[700px] p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 shadow-xl border border-white/20 backdrop-blur-sm bg-primary/95">

                        {/* Date Picker (Simulated) */}
                        <div className="flex items-center gap-3 pl-4">
                            <Calendar className="text-white/80" size={24} />
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] uppercase font-bold text-white/60">Pick a Date</span>
                                <span className="text-xs font-bold">A batch that fits your target</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-8 bg-white/20"></div>

                        {/* Rating */}
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] uppercase font-bold text-white/60 mb-1">Rating</span>
                            <div className="flex items-center gap-1 text-yellow-400 font-bold text-sm">
                                [ 4.8 / 5.0 ]
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-8 bg-white/20"></div>

                        {/* Enroll Button */}
                        <button className="bg-[#f8fbfa] text-primary px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors flex items-center gap-2 shadow-lg">
                            Enroll Now
                            <MoveRight size={14} />
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}
