import { ArrowRight, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen px-4 md:px-12 pb-20 pt-32 flex flex-col items-center justify-center">

            {/* Headlines */}
            <div className="text-center mb-3 space-y-4 max-w-4xl mx-auto">
                <h1 className="font-serif text-5xl md:text-5xl text-gray-900 flex flex-wrap justify-center items-center gap-4">
                    <span>ADVANCING <span className="text-primary italic">DRUG SAFETY</span></span>
                    <div className="hidden lg:block animate-float ml-2">
                        <img src="/landing/inline.png" alt="Drug Safety" className="h-20 w-20 rounded-3xl object-contain" />
                    </div>
                </h1>
                <h2 className="font-serif text-4xl md:text-4xl text-gray-900 mt-2">
                    THROUGH INTELLIGENCE AND CARE
                </h2>
            </div>

            {/* Main Layout Refactor: Overlapping Elements */}
            <div className="w-full max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 mt-8">

                {/* Left Stats Column (Floating Independently) */}
                <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 flex flex-col gap-16 z-10 w-full lg:w-48 px-4 lg:px-0">
                    <div className="space-y-12 relative">
                        <div className="text-right lg:text-left top-7">
                            <p className="font-serif text-md text-gray-800 pt-12 ">
                                Trusted Professionals<br />Delivering Proven Results.
                            </p>
                        </div>
                        <div className="relative text-center lg:text-left">
                            <div className="hidden lg:block absolute top-6 left-25 w-32 h-16 pointer-events-none">
                                <svg width="100%" height="100%" viewBox="0 0 128 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Arrow Head (Pointing Down) */}
                                    <path d="M0 55 L4 63 L8 55" fill="#86efac" />
                                    {/* Dashed Line: From Image (Right) to Text (Left/Down) */}
                                    <path d="M120 4 H20 Q4 4 4 55" stroke="#86efac" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                                    {/* Start Dot (At Image) */}
                                    <circle cx="120" cy="4" r="3" fill="#86efac" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-serif text-accent pt-20 pl-25">80%</h3>
                            <p className="text-xs font-bold tracking-wider text-gray-900 uppercase mt-3 pl-25">
                                Course<br />Completion Rate
                            </p>
                        </div>

                        <div className="relative text-center lg:text-left">
                            <div className="hidden lg:block absolute top-5 left-25 w-32 h-16 pointer-events-none">
                                <svg width="100%" height="100%" viewBox="0 0 128 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Arrow Head (Pointing Down) */}
                                    <path d="M0 55 L4 63 L8 55" fill="#86efac" />
                                    {/* Dashed Line: From Image (Right) to Text (Left/Down) */}
                                    <path d="M120 4 H20 Q4 4 4 55" stroke="#86efac" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                                    {/* Start Dot (At Image) */}
                                    <circle cx="120" cy="4" r="3" fill="#86efac" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-serif text-accent pl-25 pt-20">80K+</h3>
                            <p className="text-xs font-bold tracking-wider text-gray-900 uppercase mt-1 pl-25">
                                Students Trained<br />Successfully
                            </p>
                        </div>
                    </div>
                </div>


                {/* Central Image Container with Overlays */}
                <div className="relative w-full lg:w-[800px] aspect-[16/10]">

                    {/* Main Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/landing/h2.png"
                            alt="Hero Visual"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* TOP LEFT OVERLAY: Trusted Professionals */}
                    <div className="absolute top-[5%] left-[10%] lg:left-[1%] z-20 flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg border border-white/50 animate-float">
                        <div className="text-right hidden sm:block">
                        </div>
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden shadow-sm">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BOTTOM RIGHT OVERLAY: Content & Button */}
                    <div className="absolute bottom-[1%] right-[5] lg:right-[1%] z-20 max-w-[300px]   top-100">
                        <div className="bg-white/90 p-2 rounded-2xl shadow-xl  backdrop-blur-md">
                            <p className="text-gray-700 font-serif text-[12px] mb-2">
                                We deliver intelligent, efficient drug safety solutions that improve performance, reduce risk, and protect patients with precision.
                            </p>
                            <Link href="/contact#get-in-touch" className="bg-primary text-white px-6 py-1 rounded-full font-bold uppercase text-xs tracking-widest shadow-lg hover:bg-green-500 transition-colors border border-primary/10 inline-block">
                                ENROLL NOW
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Right Stats Column (Floating Independently) */}
                <div className="lg:absolute lg:right-0 lg:top-1/3 flex flex-col gap-16 z-10 w-full lg:w-48 px-4 lg:px-0">
                    <div className="relative text-center lg:text-right">
                        <div className="hidden lg:block absolute -top-16 -left-6 w-32 h-20 pointer-events-none">
                            <svg width="100%" height="100%" viewBox="0 0 128 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Arrow Head (Pointing Down) */}
                                <path d="M120 71 L124 79 L128 71" fill="#86efac" />
                                {/* Dashed Line: From Image (Left) to Text (Right/Down) */}
                                <path d="M8 4 H108 Q124 4 124 71" stroke="#86efac" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                                {/* Start Dot (At Image) */}
                                <circle cx="8" cy="4" r="3" fill="#86efac" />
                            </svg>
                        </div>
                        <h3 className="text-5xl font-serif text-accent">60%</h3>
                        <p className="font-serif font-bold text-gray-900 mt-2 uppercase">
                            Consistent Yearly<br />Growth
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
