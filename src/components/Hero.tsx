import { ArrowRight, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* ==========================================
                DESKTOP VERSION (Large Screens)
                ========================================== */}
            <div className="hidden lg:flex relative min-h-screen px-4 md:px-12 pb-20 pt-24 md:pt-32 flex flex-col items-center justify-center">

                {/* Headlines */}
                <div className="text-center mb-6 md:mb-3 space-y-4 max-w-4xl mx-auto z-10">
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-900 flex flex-wrap justify-center items-center gap-2 md:gap-4">
                        <span>ADVANCING <span className="text-primary italic">DRUG SAFETY</span></span>
                        <div className="animate-float ml-2">
                            <img src="/landing/inline.png" alt="Drug Safety" className="h-10 md:h-12 w-16 md:w-20 rounded-3xl" />
                        </div>
                    </h1>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900 mt-2">
                        THROUGH INTELLIGENCE AND CARE
                    </h2>
                </div>

                <div className="w-full max-w-7xl mx-auto relative flex flex-col items-center justify-center gap-8 lg:gap-0 mt-4 md:mt-8">
                    {/* Left Stats */}
                    <div className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 flex flex-col gap-8 lg:gap-16 z-30 w-full lg:w-48 px-4 lg:px-0">
                        <div className="text-center lg:text-left order-first lg:order-none">
                            <p className="font-serif text-sm md:text-md text-gray-800 lg:pt-12">
                                Trusted Professionals<br className="hidden lg:block" /> Delivering Proven Results.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-12 items-center justify-items-center lg:justify-items-start">
                            {/* 80% Stat */}
                            <div className="relative text-center lg:text-left">
                                <div className="hidden lg:block absolute top-6 left-25 w-32 h-16 pointer-events-none">
                                    <svg width="100%" height="100%" viewBox="0 0 128 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 55 L4 63 L8 55" fill="#86efac" />
                                        <path d="M120 4 H20 Q4 4 4 55" stroke="#86efac" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                                        <circle cx="120" cy="4" r="3" fill="#86efac" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif text-accent lg:pt-20 lg:pl-25">80%</h3>
                                <p className="text-[10px] md:text-xs font-bold tracking-wider text-gray-900 uppercase mt-2 md:mt-3 lg:pl-25">
                                    Course<br />Completion Rate
                                </p>
                            </div>

                            {/* 80K Stat */}
                            <div className="relative text-center lg:text-left">
                                <div className="absolute top-5 left-25 w-32 h-16 pointer-events-none hidden lg:block">
                                    <svg width="100%" height="100%" viewBox="0 0 128 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 55 L4 63 L8 55" fill="#86efac" />
                                        <path d="M120 4 H20 Q4 4 4 55" stroke="#86efac" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                                        <circle cx="120" cy="4" r="3" fill="#86efac" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif text-accent lg:pl-25 lg:pt-20">80K+</h3>
                                <p className="text-[10px] md:text-xs font-bold tracking-wider text-gray-900 uppercase mt-1 lg:pl-25">
                                    Students Trained<br />Successfully
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Central Image Container */}
                    <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-[800px] aspect-[1/1] sm:aspect-[16/10] flex items-center justify-center">
                        <div className="absolute inset-0 z-0 flex items-center justify-center">
                            <img
                                src="/landing/h2.png"
                                alt="Hero Visual"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* Overlays */}
                        <div className="absolute top-[5%] -left-[2%] sm:left-[5%] lg:left-[1%] z-20 flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-full shadow-lg border border-white/50 animate-float scale-75 md:scale-100">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white overflow-hidden shadow-sm">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* BOTTOM RIGHT OVERLAY: Content & Button - RESTORED TO STEP 268 PRECISELY */}
                        <div className="absolute -bottom-[1%] -right-[2%] sm:right-[5%] lg:right-[1%] z-20 max-w-[200px] sm:max-w-[280px] lg:max-w-[300px] scale-90 sm:scale-100">
                            <div className="bg-white/90 p-2 rounded-2xl shadow-xl backdrop-blur-md border border-white/50">
                                <p className="text-gray-700 font-serif text-[5px] sm:text-[12px] mb-3 leading-relaxed">
                                    We deliver intelligent, efficient drug safety solutions that improve performance, reduce risk, and protect patients with precision.
                                </p>
                                {/* <Link href="/contact#get-in-touch" className="bg-primary text-white px-3 sm:px-6 py-2 rounded-full font-bold uppercase text-[4px] sm:text-xs tracking-widest shadow-lg hover:bg-green-500 transition-colors border border-primary/10 inline-block w-full text-center">
                                    ENROLL NOW
                                </Link> */}
                            </div>
                        </div>
                        <div className="absolute -bottom-[1%] -right-[2%] sm:right-[5%] lg:right-[1%] z-20 max-w-[200px] sm:max-w-[280px] lg:max-w-[300px] scale-90 sm:scale-100 p-1">
                            <Link href="/contact#get-in-touch" className="bg-primary text-white px-3 sm:px-6 py-2 rounded-full font-bold uppercase text-[3px] sm:text-xs tracking-widest shadow-lg hover:bg-green-500 transition-colors border border-primary/10 inline-block w-full text-center">
                                ENROLL NOW
                            </Link>
                        </div>
                    </div>

                    {/* Right Stat */}
                    <div className="lg:absolute lg:right-0 lg:top-1/3 flex flex-col z-10 w-full lg:w-48 px-4 lg:px-0">
                        <div className="relative text-center lg:text-right">
                            <div className="absolute -top-16 -left-6 w-32 h-20 pointer-events-none hidden lg:block">
                                <svg width="100%" height="100%" viewBox="0 0 128 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M120 71 L124 79 L128 71" fill="#86efac" />
                                    <path d="M8 4 H108 Q124 4 124 71" stroke="#86efac" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                                    <circle cx="8" cy="4" r="3" fill="#86efac" />
                                </svg>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-serif text-accent">60%</h3>
                            <p className="font-serif font-bold text-gray-900 mt-1 md:mt-2 uppercase text-xs md:text-base">
                                Consistent Yearly<br className="hidden lg:block" /> Growth
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==========================================
                MOBILE & TABLET VERSION (Small Screens)
                ========================================== */}
            <div className="lg:hidden relative min-h-screen px-6 pt-24 pb-16 flex flex-col items-center">

                {/* Headlines */}
                <div className="text-center space-y-2 mb-10 z-10">
                    <h1 className="font-serif text-3xl sm:text-4xl text-gray-900 leading-tight">
                        ADVANCING <br />
                        <span className="text-primary italic">DRUG SAFETY</span>
                    </h1>
                    <h2 className="font-serif text-xl sm:text-2xl text-gray-700 tracking-wide uppercase">
                        Through Intelligence and Care
                    </h2>
                </div>

                {/* Creative Stacked Layout */}
                <div className="w-full max-w-md mx-auto flex flex-col gap-10">

                    {/* Image Container with Floating Badges */}
                    <div className="relative w-full aspect-square bg-[#f0f9f4] rounded-[3rem] overflow-hidden shadow-inner p-4">
                        <img
                            src="/landing/h1.png"
                            alt="Hero Visual Mobile"
                            className="w-full h-full object-contain drop-shadow-xl scale-110"
                        />

                        {/* Floating Experience Badge */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50 animate-float">
                            <div className="flex -space-x-2 mb-1">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-[10px] font-bold text-primary uppercase">10k+ Learners</p>
                        </div>

                        {/* Growth Badge */}
                        <div className="absolute bottom-10 right-6 bg-primary text-white p-3 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-2">
                                <TrendingUp size={20} />
                                <span className="text-lg font-serif font-bold">60%</span>
                            </div>
                            <p className="text-[8px] font-bold uppercase tracking-widest opacity-80">Yearly Growth</p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-[2rem] shadow-md border border-secondary/50 text-center">
                            <h3 className="text-3xl font-serif text-accent">80%</h3>
                            <p className="text-[9px] font-bold text-gray-600 uppercase mt-1">Course Completion</p>
                        </div>
                        <div className="bg-[#0A4D5C] p-5 rounded-[2rem] shadow-md text-center">
                            <h3 className="text-3xl font-serif text-white">80K+</h3>
                            <p className="text-[9px] font-bold text-white/70 uppercase mt-1">Students Trained</p>
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-white/80 backdrop-blur-md p-6 rounded-[2.5rem] shadow-xl border border-white/50 text-center space-y-4">
                        <p className="text-gray-700 text-sm leading-relaxed px-2 font-medium">
                            Trusted professionals delivering proven results in drug safety and intelligence.
                        </p>
                        <Link
                            href="/contact#get-in-touch"
                            className="bg-primary text-white py-4 rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-lg w-full inline-block transition-transform active:scale-95"
                        >
                            Enroll Now
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
