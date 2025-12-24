export default function ContactHero() {
    return (
        <section className="w-full pt-32 pb-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Intro Text */}
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider mb-8">
                    Contact Us
                </h1>
                <h2 className="font-bold text-xl md:text-2xl text-gray-900 uppercase tracking-wide mb-6">
                    We're Here to Support Your Career Journey
                </h2>
                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-16">
                    Whether you have questions about courses, pricing, certifications, or placements our team is ready to help you every step of the way.
                </p>

                {/* Hero Image Block */}
                <div className="relative w-full max-w-5xl mx-auto">
                    {/* Image Container */}
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                        <img
                            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2069&auto=format&fit=crop" // Support Team
                            alt="Support Team"
                            className="w-full h-full object-cover object-top"
                        />

                        {/* Bottom Curved Overlay */}
                        {/* Using CSS clip-path or simple absolute positioning with SVG for the curve */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-secondary rounded-t-[50%] scale-x-150 translate-y-[40%] flex items-start justify-center pt-8">
                        </div>

                        {/* Floating Button "OUR SERVICES" - positioned on the curve */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                            <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold uppercase tracking-wider shadow-lg hover:bg-green-800 transition-colors">
                                Our Services
                            </button>
                        </div>

                    </div>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center">
                        <span className="font-serif text-3xl text-primary font-bold mb-2">24/7</span>
                        <span className="font-bold uppercase text-xs tracking-widest mb-2">Support Assistance</span>
                        <p className="text-[10px] text-gray-500 max-w-[150px] leading-tight">Fast response to queries via email, WhatsApp, and LMS helpdesk.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-serif text-3xl text-primary font-bold mb-2">95%</span>
                        <span className="font-bold uppercase text-xs tracking-widest mb-2">Placement Readiness</span>
                        <p className="text-[10px] text-gray-500 max-w-[150px] leading-tight">Learners graduate with real-world skills, interview prep, and career confidence.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-serif text-3xl text-primary font-bold mb-2">40+</span>
                        <span className="font-bold uppercase text-xs tracking-widest mb-2">Expert Mentors</span>
                        <p className="text-[10px] text-gray-500 max-w-[150px] leading-tight">Learn from experienced industry experts who bring practical insights to every session.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
