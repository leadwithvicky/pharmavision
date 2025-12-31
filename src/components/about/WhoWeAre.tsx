import { ChartNoAxesCombined, GraduationCap, Layers, Check } from "lucide-react";

export default function WhoWeAre() {
    return (
        <section className="w-full bg-secondary overflow-hidden">
            {/* ==========================================
                DESKTOP VERSION (Large Screens)
                ========================================== */}
            <div className="hidden lg:flex max-w-[1400px] mx-auto py-20 px-8 grid grid-cols-2 gap-16 items-center">

                {/* Left Image Side */}
                <div className="relative">
                    {/* Main Image Container with rounded corners - RESTORED ORIGINAL FIXED SIZE */}
                    <div className="relative w-[650px] h-[700px] bg-blue-900/10 rounded-[3rem] overflow-hidden shadow-2xl">
                        <img
                            src="/aboutus/WWA.png"
                            alt="Who We Are"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                    </div>

                    <div className="absolute bottom-10 -right-12 w-40 h-40 bg-secondary rounded-full flex items-center justify-center z-20 shadow-xl border-4 border-white/50">
                        {/* Spinning Text Ring */}
                        <div className="w-full h-full relative animate-[spin_12s_linear_infinite]">
                            <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-gray-900">
                                <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                <text className="text-[10px] font-bold uppercase tracking-widest fill-current">
                                    <textPath href="#textPath" startOffset="0%">
                                        Build • Grow • Build • Grow • Build • Grow •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        {/* Inner Check Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Check className="w-8 h-8 text-[#2A5C43] stroke-[3]" />
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="font-serif text-3xl font-bold text-primary uppercase tracking-wider">
                            Who We Are
                        </h2>
                        <h3 className="font-bold text-3xl text-gray-900 leading-tight">
                            YOUR FIRST STEP TOWARD A STRONGER FUTURE.
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            pharmavision delivers practical, industry-focused training that helps learners build real-world skills and grow into confident life-science professionals.
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

            {/* ==========================================
                MOBILE VERSION (Small Screens)
                ========================================== */}
            <div className="lg:hidden w-full py-16 px-6 flex flex-col gap-12">

                {/* Content Header */}
                <div className="space-y-4 text-center">
                    <h2 className="font-serif text-2xl font-bold text-primary uppercase tracking-[0.2em]">
                        Who We Are
                    </h2>
                    <h3 className="font-bold text-xl text-gray-900 leading-tight px-2">
                        YOUR FIRST STEP TOWARD A <span className="text-primary italic">STRONGER FUTURE.</span>
                    </h3>
                </div>

                {/* Creative Image Composition */}
                <div className="relative mx-auto w-full max-w-[350px]">
                    <div className="relative aspect-[4/5] bg-[#daeadf] rounded-[4rem] overflow-hidden shadow-2xl">
                        <img
                            src="/aboutus/WWA.png"
                            alt="Who We Are"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                    </div>

                    {/* Floating Circular Badge */}
                    <div className="absolute -bottom-6 -right-4 w-28 h-28 bg-white rounded-full flex items-center justify-center z-20 shadow-xl border-4 border-secondary p-1">
                        <div className="w-full h-full relative animate-[spin_10s_linear_infinite]">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-gray-900">
                                <path id="mobileTextPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                                <text className="text-[11px] font-bold uppercase tracking-[0.1em] fill-primary">
                                    <textPath href="#mobileTextPath" startOffset="0%">
                                        BUILD • GROW • BUILD • GROW •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-primary p-2 rounded-full">
                                <Check className="w-4 h-4 text-white stroke-[4]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Features */}
                <div className="space-y-8 bg-white/50 backdrop-blur-sm p-8 rounded-[3rem] border border-white/50">
                    <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
                        pharmavision delivers practical, industry-focused training that helps learners build real-world skills.
                    </p>

                    {[
                        { icon: Layers, title: "Skills That Shape Careers", desc: "Job-ready training built for real industry needs." },
                        { icon: ChartNoAxesCombined, title: "Expertise That Inspires", desc: "Guidance from seasoned life-science professionals." },
                        { icon: GraduationCap, title: "Learning For Success", desc: "Hands-on training that builds professional confidence." }
                    ].map((feature, idx) => (
                        <div key={idx} className="flex gap-5 items-center">
                            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                <feature.icon size={20} />
                            </div>
                            <div className="space-y-0.5">
                                <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wide">{feature.title}</h4>
                                <p className="text-[10px] text-gray-500">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
