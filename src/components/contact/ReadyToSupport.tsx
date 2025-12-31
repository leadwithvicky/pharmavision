export default function ReadyToSupport() {
    return (
        <section className="w-full bg-secondary overflow-hidden">
            {/* ==========================================
                DESKTOP VERSION (Large Screens)
                ========================================== */}
            <div className="hidden lg:block pb-20 pt-10 px-8">
                <div className="max-w-[1400px] mx-auto">
                    <div className="w-full h-[400px] rounded-[3rem] overflow-hidden relative shadow-2xl group">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Team Collaboration"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                            <h2 className="font-serif text-4xl font-bold text-white uppercase tracking-wider max-w-3xl mb-12 drop-shadow-lg">
                                We're Ready To Support Your Learning Path
                            </h2>
                            <button className="bg-primary hover:bg-green-800 text-white px-10 py-4 rounded-full font-bold uppercase text-sm tracking-widest shadow-xl transition-all hover:scale-105 flex items-center gap-2">
                                Send Message ---→
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==========================================
                MOBILE VERSION (Small Screens)
                ========================================== */}
            <div className="lg:hidden w-full pb-16 px-6">
                <div className="w-full h-72 rounded-[2.5rem] overflow-hidden relative shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Support Mobile"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>

                    {/* Floating Pill Style CTA */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-transparent via-primary/20 to-primary/40">
                        <h2 className="font-serif text-lg font-bold text-white uppercase tracking-widest mb-6 px-2 leading-tight">
                            Ready To Support <br /> Your Career
                        </h2>
                        <button className="bg-white text-primary px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest shadow-2xl active:scale-95 transition-transform">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
