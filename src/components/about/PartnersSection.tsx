export default function PartnersSection() {
    const partners = [
        { name: "DERIVE", logo: "/partners/derive.png", url: "#" },
        { name: "trendy vibez", logo: "/partners/trendyvibez.png", url: "https://trendyvibez.world" },
        { name: "RANSH", logo: "/partners/ransh.png", url: "#" },
        { name: "ClinicaMapletree", logo: "/partners/maple.png", url: "#" },
        { name: "ARPAD", logo: "/partners/arpad.png", url: "#" },
        { name: "BRC", logo: "/partners/brc.png", url: "#" },
        { name: "WAAW", logo: "/partners/waaw.png", url: "https://waaw.world" },
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-[#F5FAF6] overflow-x-hidden">
            <div className="max-w-[1400px] mx-auto">

                <h2 className="text-center font-serif text-3xl md:text-4xl font-bold text-[#1F4D36] uppercase tracking-wide mb-20 md:mb-24 drop-shadow-sm">
                    Our Partnered Companies
                </h2>

                {/* Bulb Layout Container */}
                {/* Visual alignment: Flex with wrapping, centered. */}
                {/* User requested 7 in one row. We need to prevent wrapping on large screens and fit them. */}
                <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-4 gap-y-16">
                    {partners.map((p, i) => (
                        <div key={i} className="flex flex-col items-center group relative min-w-[140px]">

                            {/* The Green Top Arc */}
                            {/* Positioned absolute relative to the bulb. 
                                Styled to look like a thick protective cap/hood over the bulb.
                                Using SVG for rounded ends (stroke-linecap).
                            */}
                            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-[130%] h-[120px] pointer-events-none z-0">
                                <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
                                    {/* Arc path: M start_x start_y A rx ry rot large_arc sweep end_x end_y */}
                                    {/* Drawing a semi-circle arch */}
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
                            {/* Replaced CSS shape with Image as requested */}
                            {/* Reduced width from w-48 to w-40 to fit 7 in a row */}
                            <div className="relative z-10 w-40 h-48 flex flex-col items-center justify-start pt-10 pb-4 px-4 filter drop-shadow-xl transition-transform hover:scale-105">
                                {/* The Bulb Image Background */}
                                <img
                                    src="/aboutus/bulb.png"
                                    alt="Bulb background"
                                    className="absolute inset-0 w-full h-full object-contain z-0"
                                />

                                {/* Logo / Content - Centered in the wide part of the bulb */}
                                <div className="relative z-10 w-full h-[55%] flex items-center justify-center mt-0.5 px-2">
                                    {/* Render Logo */}
                                    {p.logo ? (
                                        <img
                                            src={p.logo}
                                            alt={p.name}
                                            className="w-full h-full object-contain filter drop-shadow-sm"
                                        />
                                    ) : (
                                        <div className="text-center">
                                            <h3 className="text-lg font-bold text-gray-800 uppercase tracking-widest leading-none">{p.name.split(' ')[0]}</h3>
                                            {p.name.split(' ')[1] && <span className="text-[10px] uppercase tracking-widest text-[#1F4D36] block mt-1 font-semibold">{p.name.split(' ').slice(1).join(' ')}</span>}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Connector Line Section */}
                            <div className="flex flex-col items-center -mt-1 z-0 relative">
                                {/* Dot at start */}
                                <div className="w-3 h-3 bg-[#1F4D36] rounded-full mb-0 shadow-sm relative z-20"></div>

                                {/* Dashed Line */}
                                <div className="w-[2px] h-16 border-l-[2px] border-dashed border-[#1F4D36] my-0"></div>

                                {/* Diamond/Dot at end */}
                                <div className="w-2 h-2 bg-[#1F4D36] rotate-45 mb-2"></div>
                            </div>


                            {/* Button - Now a Link */}
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
        </section>
    );
}
