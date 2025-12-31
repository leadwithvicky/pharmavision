import Link from "next/link";

export default function ContactHero() {
    return (
        <section className="w-full bg-secondary overflow-hidden">
            {/* ==========================================
                DESKTOP VERSION (Large Screens)
                ========================================== */}
            <div className="hidden lg:block pt-32 pb-20 px-8">
                <div className="max-w-[1400px] mx-auto text-center">
                    {/* Intro Text */}
                    <h1 className="font-serif text-5xl font-bold text-[#1F4D36] uppercase tracking-wider mb-6">
                        Contact Us
                    </h1>
                    <h2 className="font-bold text-3xl text-gray-900 uppercase tracking-wide mb-8 px-4">
                        We're Here to Support Your Career Journey
                    </h2>
                    <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
                        Whether you have questions about courses, pricing, certifications, or placements,<br />
                        our team is ready to help you every step of the way.
                    </p>

                    {/* Hero Image Block */}
                    <div className="relative w-full max-w-6xl mx-auto mb-24">
                        <div className="w-full aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl relative bg-gray-100">
                            <img
                                src="/contact.png"
                                alt="Support Team"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>

                            {/* Bottom Wave SVG */}
                            <div className="absolute bottom-0 left-0 w-full leading-none z-10 translate-y-[1px]">
                                <svg className="block w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
                                    <path
                                        fill="#F3F4F6"
                                        fillOpacity="1"
                                        d="M0,0 Q720,200 1440,0 L1440,320 L0,320 Z"
                                    />
                                </svg>
                            </div>

                            {/* Floating Button "OUR SERVICES" */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                                <Link
                                    href="/courses"
                                    className="bg-[#1F4D36] text-white px-8 py-3 rounded-md font-serif font-bold uppercase tracking-wider shadow-lg hover:bg-[#163c29] transition-colors border border-[#1F4D36] inline-block"
                                >
                                    Our Services
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center text-center">
                            <span className="font-serif text-4xl text-[#1F4D36] font-bold mb-3">24/7</span>
                            <span className="font-bold uppercase text-sm tracking-widest mb-3 text-gray-900 font-serif">Support Assistance</span>
                            <p className="text-[11px] text-gray-500 max-w-[180px] leading-relaxed mx-auto">Fast response to queries via email, WhatsApp, and LMS helpdesk.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="font-serif text-4xl text-[#1F4D36] font-bold mb-3">95%</span>
                            <span className="font-bold uppercase text-sm tracking-widest mb-3 text-gray-900 font-serif">Placement Readiness</span>
                            <p className="text-[11px] text-gray-500 max-w-[180px] leading-relaxed mx-auto">Learners graduate with real-world skills, interview prep, and career confidence.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="font-serif text-4xl text-[#1F4D36] font-bold mb-3">40+</span>
                            <span className="font-bold uppercase text-sm tracking-widest mb-3 text-gray-900 font-serif">Expert Mentors</span>
                            <p className="text-[11px] text-gray-500 max-w-[180px] leading-relaxed mx-auto">Learn from experienced industry experts who bring practical insights to every session.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==========================================
                MOBILE VERSION (Small Screens)
                ========================================== */}
            <div className="lg:hidden w-full pt-24 pb-16 px-6 flex flex-col items-center">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="font-serif text-3xl font-bold text-[#1F4D36] uppercase tracking-[0.2em]">
                        Contact Us
                    </h1>
                    <h2 className="font-bold text-lg text-gray-900 uppercase tracking-wide leading-tight px-4">
                        We're Here to Support <br /> Your <span className="text-primary italic">Career Journey</span>
                    </h2>
                </div>

                {/* Creative Mobile Image & Button Stack */}
                <div className="relative w-full max-w-md mx-auto mb-20">
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl ring-8 ring-white/50">
                        <img
                            src="/contact.png"
                            alt="Support Team Mobile"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/30 to-transparent"></div>
                    </div>

                    {/* Centered Mobile CTA */}
                    <Link
                        href="/courses"
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary px-10 py-4 rounded-full font-serif font-bold uppercase tracking-[0.2em] shadow-2xl border border-primary/10 whitespace-nowrap active:scale-95 transition-transform"
                    >
                        Our Services
                    </Link>
                </div>

                {/* Mobile Stats Carousel-like stack */}
                <div className="w-full space-y-8 bg-white/40 backdrop-blur-sm p-8 rounded-[3rem] border border-white/60">
                    {[
                        { val: "24/7", label: "Support Assistance", desc: "Fast response via email & WhatsApp." },
                        { val: "95%", label: "Placement Readiness", desc: "Graduate with real-world skills." },
                        { val: "40+", label: "Expert Mentors", desc: "Learn from industry specialists." }
                    ].map((s, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <span className="font-serif text-3xl text-primary font-bold">{s.val}</span>
                            <span className="font-bold uppercase text-[10px] tracking-widest text-gray-900 mt-1">{s.label}</span>
                            <p className="text-[9px] text-gray-500 mt-2 max-w-[200px]">{s.desc}</p>
                            {idx < 2 && <div className="w-8 h-px bg-primary/10 mt-8"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
