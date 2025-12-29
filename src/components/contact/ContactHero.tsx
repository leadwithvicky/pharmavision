export default function ContactHero() {
    return (
        <section className="w-full pt-32 pb-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Intro Text */}
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1F4D36] uppercase tracking-wider mb-6">
                    Contact Us
                </h1>
                <h2 className="font-bold text-xl md:text-3xl text-gray-900 uppercase tracking-wide mb-8 px-4">
                    We're Here to Support Your Career Journey
                </h2>
                <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16 px-4">
                    Whether you have questions about courses, pricing, certifications, or placements,<br className="hidden md:block" />
                    our team is ready to help you every step of the way.
                </p>

                {/* Hero Image Block */}
                <div className="relative w-full max-w-6xl mx-auto mb-24">
                    {/* Image Container */}
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl relative bg-gray-100">
                        <img
                            src="/contact.png" // Support Team
                            alt="Support Team"
                            className="w-full h-full object-cover object-center"
                        />

                        {/* Overlay Gradient (Optional for text readability if needed) */}
                        <div className="absolute inset-0 bg-black/10"></div>

                        {/* Bottom Wave SVG */}
                        <div className="absolute bottom-0 left-0 w-full leading-none z-10 translate-y-[1px]">
                            <svg className="block w-full h-16 md:h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
                                <path
                                    fill="#F3F4F6" // bg-secondary
                                    fillOpacity="1"
                                    d="M0,0 Q720,200 1440,0 L1440,320 L0,320 Z"
                                />
                            </svg>
                        </div>

                        {/* Floating Button "OUR SERVICES" - positioned on the peak of the hill */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                            <button className="bg-[#1F4D36] text-white px-8 py-3 rounded-md font-serif font-bold uppercase tracking-wider shadow-lg hover:bg-[#163c29] transition-colors border border-[#1F4D36]">
                                Our Services
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
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
        </section>
    );
}
