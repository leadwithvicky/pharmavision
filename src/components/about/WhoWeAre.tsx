import { ChartNoAxesCombined, GraduationCap, Layers } from "lucide-react";

export default function WhoWeAre() {
    return (
        <section className="w-full py-20 px-4 md:px-8 bg-secondary overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Image Side */}
                <div className="relative">
                    {/* Main Image Container with rounded corners */}
                    <div className="relative w-full aspect-[4/4] md:aspect-[5/4] bg-blue-900 rounded-[3rem] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070&auto=format&fit=crop" // Crystals/Abstract
                            alt="Who We Are"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                    </div>

                    {/* The "Cutout" logic simulated with an overlay or just a floating badge on top right? 
               Looking at image: It's a bite out of the bottom right edge.
               We can place a white circle there to simulate the bite text badge. */}

                    <div className="absolute bottom-10 -right-6 md:-right-12 w-32 h-32 md:w-40 md:h-40 bg-secondary rounded-full flex items-center justify-center z-10">
                        {/* Spinning Text Ring (Simplified representation) */}
                        <div className="w-full h-full relative animate-spin-slow">
                            <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-gray-900">
                                <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                <text className="text-[10px] font-bold uppercase tracking-widest fill-current">
                                    <textPath href="#textPath" startOffset="0%">
                                        Build • Grow • Build • Grow • Build • Grow •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        {/* Inner Arrow */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-1 border-t-2 border-dashed border-gray-900 rotate-45"></div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="font-serif text-3xl font-bold text-primary uppercase tracking-wider">
                            Who We Are
                        </h2>
                        <h3 className="font-bold text-2xl md:text-3xl text-gray-900 leading-tight">
                            YOUR FIRST STEP TOWARD A STRONGER FUTURE.
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            VisionPharma delivers practical, industry-focused training that helps learners build real-world skills and grow into confident life-science professionals.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 text-primary">
                                <Layers size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-wide">Skills That Shape Careers</h4>
                                <p className="text-xs text-gray-600">Practical, job-ready training built for real industry needs.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 text-primary">
                                <ChartNoAxesCombined size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-wide">Expertise That Inspires Growth</h4>
                                <p className="text-xs text-gray-600">Guidance from seasoned professionals with real-world experience.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 text-primary">
                                <GraduationCap size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-wide">Learning Designed For Success</h4>
                                <p className="text-xs text-gray-600">Hands-on, clear, and effective training that builds confidence.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
