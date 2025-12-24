export default function PartnersSection() {
    const partners = [
        { name: "DERIVE", logo: "https://placehold.co/100x50/white/0D9488?text=DERIVE" },
        { name: "trendy vibez", logo: "https://placehold.co/100x50/white/0D9488?text=tv" },
        { name: "RANSH", logo: "https://placehold.co/100x50/white/0D9488?text=RANSH" },
        { name: "ClinicaMapletree", logo: "https://placehold.co/100x50/white/0D9488?text=CM" },
        { name: "ARPAD", logo: "https://placehold.co/100x50/white/0D9488?text=ARPAD" },
        { name: "BRC", logo: "https://placehold.co/100x50/white/0D9488?text=BRC" },
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-secondary overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                <h2 className="text-center font-serif text-3xl font-bold text-primary uppercase tracking-wide mb-12">
                    Our Partnered Companies
                </h2>

                {/* Bulb Grid */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {partners.map((p, i) => (
                        <div key={i} className="flex flex-col items-center group">

                            {/* Top Arc (The "Ceiling" mount) */}
                            <div className="w-full h-8 bg-transparent flex justify-center items-end overflow-hidden">
                                <div className="w-24 h-24 rounded-full border-t-8 border-primary absolute -mt-16"></div>
                                {/* Visual hack for the green arc, simplified: */}
                                <div className="w-full border-t-4 border-primary/20 rounded-t-full"></div>
                            </div>

                            {/* The Green Top Arc visual specifically from image */}
                            <div className="w-32 h-16 border-t-8 border-primary rounded-t-full mb-0 opacity-0 md:opacity-100 hidden md:block" />

                            {/* Simplified structure for robustness: */}
                            <div className="relative flex flex-col items-center">

                                {/* The Green Arc (Desktop) */}
                                <div className="absolute -top-12 w-40 h-20 border-t-[6px] border-primary rounded-t-full hidden md:block" />

                                {/* Bulb Container */}
                                <div className="w-40 h-40 bg-white rounded-full rounded-b-[4rem] shadow-xl flex items-center justify-center p-6 border border-gray-100 z-10 relative">
                                    {/* Placeholder Logo */}
                                    <div className="font-bold text-gray-800 text-center uppercase tracking-wider text-sm">
                                        {p.name}
                                    </div>
                                </div>

                                {/* Dashed Line */}
                                <div className="h-12 w-0 border-l-2 border-dashed border-primary my-2"></div>

                                {/* Button */}
                                <button className="bg-primary hover:bg-primary-hover text-white text-[0.65rem] font-bold px-6 py-2 rounded-lg uppercase tracking-widest shadow-md transition-all">
                                    Know More
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
