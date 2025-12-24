import { ArrowRight, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen px-4 md:px-12 pb-20 pt-32 flex flex-col items-center justify-center">

            {/* Headlines */}
            <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto">
                <h1 className="font-serif text-5xl md:text-6xl text-gray-900">
                    ADVANCING <span className="text-primary italic">DRUG SAFETY</span>
                </h1>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mt-2">
                    THROUGH INTELLIGENCE AND CARE
                </h2>

                {/* Decorative Pill Element (Top Rightish) */}
                <div className="absolute top-20 right-[15%] hidden lg:block animate-float">
                    <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full border border-teal-100 shadow-sm flex items-center gap-2 pr-4">
                        {/* Abstract pill graphic representation */}
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">💊</div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-7xl mx-auto relative">

                {/* Left Stats Column */}
                <div className="lg:col-span-3 flex flex-col gap-16 pt-10">
                    {/* Trusted Professionals */}
                    <div className="space-y-4">
                        <p className="font-medium text-gray-800 leading-tight">
                            Trusted Professionals<br />Delivering Proven<br />Results.
                        </p>
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                                    <div className="bg-gray-300 w-full h-full" />
                                    {/* Placeholder for avatars */}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats with Dashed Lines */}
                    <div className="space-y-12 relative">
                        <div className="relative">
                            <div className="absolute -top-6 left-1/2 w-24 h-8 border-t-2 border-r-2 border-dashed border-green-300 rounded-tr-xl"></div>
                            <h3 className="text-4xl font-serif text-accent">80%</h3>
                            <p className="text-xs font-bold tracking-wider text-gray-900 uppercase mt-1">
                                Course<br />Completion Rate
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-6 left-1/2 w-24 h-8 border-t-2 border-r-2 border-dashed border-green-300 rounded-tr-xl"></div>
                            <h3 className="text-4xl font-serif text-accent">80K+</h3>
                            <p className="text-xs font-bold tracking-wider text-gray-900 uppercase mt-1">
                                Students Trained<br />Successfully
                            </p>
                        </div>
                    </div>
                </div>

                {/* Center Image Area */}
                <div className="lg:col-span-6 relative">
                    <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary to-accent rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 group">
                        {/* Main Image Placeholder - In real app, use Image component */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-217358c7e618?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                        {/* Center overlay graphic */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-24 h-48 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center">
                            <div className="w-16 h-32 bg-white/20 rounded-xl"></div>
                        </div>
                    </div>
                </div>

                {/* Right Content / CTA */}
                <div className="lg:col-span-3 flex flex-col justify-center pt-20">
                    <div className="space-y-6 relative">

                        {/* Floating Growth Stat */}
                        <div className="mb-12 relative text-center lg:text-left">
                            <div className="absolute -top-8 -left-4 w-12 h-12 border-l-2 border-b-2 border-dashed border-green-300 rounded-bl-xl rotate-180"></div>
                            <h3 className="text-5xl font-serif text-accent">60%</h3>
                            <p className="font-serif font-bold text-gray-900 mt-2 uppercase">
                                Consistent Yearly<br />Growth
                            </p>
                        </div>

                        <div className="bg-white/80 p-6 rounded-2xl shadow-sm border border-green-50 backdrop-blur-sm">
                            <p className="text-gray-700 leading-relaxed text-sm">
                                We deliver intelligent, efficient drug safety solutions that improve performance, reduce risk, and protect patients with precision.
                            </p>
                        </div>

                        <button className="w-full bg-primary hover:bg-primary-hover text-white py-3 px-6 rounded-lg font-bold text-sm uppercase tracking-wide shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group">
                            Boost Safety Performance
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
