import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="w-full bg-secondary overflow-hidden">
            {/* ==========================================
                DESKTOP VERSION (Large Screens)
                ========================================== */}
            <div className="hidden lg:block py-24 px-8">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-16 items-center">
                    {/* Left Image (Arch) */}
                    <div className="relative w-[500px] h-[600px] rounded-t-[20rem] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('landing/ab1.png')" }}
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    </div>

                    {/* Right Content */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="font-serif text-3xl font-bold text-primary uppercase tracking-wider">
                                About Us
                            </h2>
                            <h3 className="font-bold text-4xl text-gray-900 leading-tight uppercase">
                                WHERE ACCURACY BUILDS TRUST, AND TRUST BUILDS SUCCESS.
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                pharmavision helps learners build real-world skills through clear, practical, industry-focused training empowering them to grow with confidence.
                            </p>
                        </div>

                        <Link
                            href="/about"
                            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/30 w-fit"
                        >
                            Explore Our Mission
                        </Link>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                            {[
                                { val: "100%", label: "Industry-Certified\nCourses" },
                                { val: "20+", label: "Years Expert\nFaculty" },
                                { val: "100%", label: "Job Placement\nAssistance" }
                            ].map((s, i) => (
                                <div key={i} className="text-center space-y-1">
                                    <div className="text-3xl font-serif font-bold text-accent">{s.val}</div>
                                    <div className="text-xs font-bold uppercase text-gray-900 tracking-wider whitespace-pre-line">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ==========================================
                MOBILE VERSION (Small Screens)
                ========================================== */}
            <div className="lg:hidden w-full py-16 px-6 flex flex-col items-center">
                <div className="text-center mb-10">
                    <h2 className="font-serif text-2xl font-bold text-primary uppercase tracking-widest mb-4">
                        About Us
                    </h2>
                    <div className="w-12 h-1 bg-primary/20 mx-auto"></div>
                </div>

                {/* Arched Image Mobile */}
                <div className="relative w-full aspect-[4/5] max-w-[320px] rounded-t-[12rem] rounded-b-2xl overflow-hidden shadow-xl border-4 border-white mb-12">
                    <img
                        src="landing/ab1.png"
                        alt="About Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>

                {/* Mobile Content */}
                <div className="text-center space-y-8">
                    <h3 className="font-bold text-xl text-gray-900 leading-snug uppercase px-2">
                        WHERE ACCURACY BUILDS TRUST, <br /> AND <span className="text-primary italic">TRUST BUILDS SUCCESS.</span>
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed px-4">
                        pharmavision helps learners build real-world skills through clear, practical, industry-focused training empowering them to grow with confidence.
                    </p>

                    <Link
                        href="/about"
                        className="bg-primary text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-xl inline-block active:scale-95 transition-transform"
                    >
                        Explore Our Mission
                    </Link>

                    {/* Compact Mobile Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-12 border-t border-primary/5 w-full">
                        {[
                            { val: "100%", label: "Certified" },
                            { val: "20+", label: "Experts" },
                            { val: "100%", label: "Placements" }
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-xl font-serif font-bold text-accent">{s.val}</span>
                                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400 mt-1">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
