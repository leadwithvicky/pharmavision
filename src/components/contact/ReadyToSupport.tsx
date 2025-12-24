export default function ReadyToSupport() {
    return (
        <section className="w-full pb-20 px-4 md:px-8 bg-secondary pt-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="w-full h-80 md:h-[400px] rounded-[3rem] overflow-hidden relative shadow-2xl group">
                    {/* Image */}
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Team Collaboration"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <h2 className="font-serif text-2xl md:text-4xl font-bold text-white uppercase tracking-wider max-w-3xl mb-12 shadow-black drop-shadow-lg">
                            We're Ready To Support Your Learning Path
                        </h2>

                        <button className="bg-primary hover:bg-green-800 text-white px-10 py-4 rounded-full font-bold uppercase text-xs md:text-sm tracking-widest shadow-xl transition-all hover:scale-105 flex items-center gap-2">
                            Send Message ---→
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
