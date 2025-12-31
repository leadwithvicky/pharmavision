export default function PartnersSection() {
    const partners = [
        { name: "DERIVE", logo: "/partners/derive.png", url: "https://www.derivesoftech.com/" },
        { name: "trendy vibez", logo: "/partners/trendyvibez.png", url: "https://trendyvibez.in" },
        { name: "RANSH", logo: "/partners/ransh.png", url: "https://ranshpharma.in/" },
        { name: "ClinicaMapletree", logo: "/partners/maple.png", url: "https://clinicamapletreecro.com/" },
        { name: "ARPAD", logo: "/partners/arpad.png", url: "https://www.arpad.in/" },
        { name: "BRC", logo: "/partners/brc.png", url: "https://www.brc.in/" },
        { name: "WAAW", logo: "/partners/waaw.png", url: "https://waaw.world" },
    ];

    return (
        <section className="w-full bg-[#F5FAF6] overflow-x-hidden">
            {/* ==========================================
                DESKTOP VERSION (Large Screens)
                ========================================== */}
            <div className="hidden lg:block max-w-[1400px] mx-auto py-20 px-8">
                <h2 className="text-center font-serif text-4xl font-bold text-[#1F4D36] uppercase tracking-wide mb-24 drop-shadow-sm">
                    Our Partnered Companies
                </h2>

                <div className="flex justify-center gap-x-6 lg:flex-nowrap">
                    {partners.map((p, i) => (
                        <div key={i} className="flex flex-col items-center group relative min-w-[160px]">
                            {/* The Green Top Arc */}
                            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-[130%] h-[120px] pointer-events-none z-0">
                                <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
                                    <path
                                        d="M 10 50 A 40 40 0 0 1 90 50"
                                        fill="none"
                                        stroke="#1F4D36"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            {/* Bulb Shape Container */}
                            <div className="relative z-10 w-40 h-48 flex flex-col items-center justify-start pt-10 pb-4 px-4 filter drop-shadow-xl transition-transform hover:scale-105">
                                <img
                                    src="/aboutus/bulb.png"
                                    alt="Bulb background"
                                    className="absolute inset-0 w-full h-full object-contain z-0"
                                />
                                <div className="relative z-10 w-full h-[55%] flex items-center justify-center mt-0.5 px-2">
                                    <img
                                        src={p.logo}
                                        alt={p.name}
                                        className="w-full h-full object-contain filter drop-shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Connector Line Section */}
                            <div className="flex flex-col items-center -mt-1 z-0 relative">
                                <div className="w-3 h-3 bg-[#1F4D36] rounded-full mb-0 shadow-sm relative z-20"></div>
                                <div className="w-[2px] h-16 border-l-[2px] border-dashed border-[#1F4D36] my-0"></div>
                                <div className="w-2 h-2 bg-[#1F4D36] rotate-45 mb-2"></div>
                            </div>

                            <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1F4D36] hover:bg-[#163c29] text-white text-[10px] font-bold px-6 py-2 rounded-[4px] uppercase tracking-[0.15em] shadow-lg transition-transform hover:-translate-y-1 block"
                            >
                                Know More
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* ==========================================
                MOBILE & TABLET VERSION (Small Screens)
                ========================================== */}
            <div className="lg:hidden w-full py-16 px-6">
                <h2 className="text-center font-serif text-2xl font-bold text-[#1F4D36] uppercase tracking-wider mb-16 leading-tight">
                    Our Partnered Companies
                </h2>

                <div className="grid grid-cols-2 gap-x-4 gap-y-16 max-w-sm mx-auto">
                    {partners.map((p, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center relative ${i === partners.length - 1 ? 'col-span-2' : ''}`}
                        >
                            {/* Small Arc Decoration */}
                            <div className="absolute -top-4 w-[110%] h-8 opacity-80">
                                <svg viewBox="0 0 100 20" className="w-full h-full">
                                    <path d="M 10 20 Q 50 0 90 20" fill="none" stroke="#013b1eff" strokeWidth="4" />
                                </svg>
                            </div>

                            {/* Bulb Image */}
                            <div className="relative w-32 h-40 flex items-center justify-center p-3 animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                                <img
                                    src="/aboutus/bulb.png"
                                    alt="Bulb background"
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                                <div className="relative z-10 w-full h-[50%] flex items-center justify-center px-2">
                                    <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                                </div>
                            </div>

                            {/* Simplified Connector */}
                            <div className="flex flex-col items-center -mt-1">
                                <div className="w-2 h-2 bg-[#1F4D36] rounded-full mb-1"></div>
                                <div className="w-px h-8 border-l border-dashed border-[#1F4D36]"></div>
                            </div>

                            {/* Link */}
                            <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 bg-[#1F4D36] text-white text-[8px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-md active:scale-95 transition-transform"
                            >
                                Visit Site
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
