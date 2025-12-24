export default function GovernmentSection() {
    const items = [
        {
            id: "01",
            title: "GOVERNMENT OF INDIA",
            logo: "https://placehold.co/150x50/white/0D9488?text=GOVT+INDIA", // Placeholder
            logoAlt: "Government of India Logo"
        },
        {
            id: "02",
            title: "GOVERNMENT OF TELANGANA",
            logo: "https://placehold.co/150x50/white/0D9488?text=TELANGANA", // Placeholder
            logoAlt: "Government of Telangana Logo"
        },
        {
            id: "03",
            title: "MINISTRY OF MICRO, SMALL AND MEDIUM ENTERPRISES",
            logo: "https://placehold.co/150x50/white/0D9488?text=MSME", // Placeholder
            logoAlt: "MSME Logo"
        },
        {
            id: "04",
            title: "INTERNATIONAL ORGANIZATION FOR STANDARDIZATION",
            logo: "https://placehold.co/150x50/white/EAB308?text=ISO+9001", // Placeholder
            logoAlt: "ISO 9001 Logo"
        },
        {
            id: "05",
            title: "STARTUP INDIA",
            logo: "https://placehold.co/150x50/white/0D9488?text=STARTUP", // Placeholder
            logoAlt: "Startup India Logo"
        },
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1200px] mx-auto">

                <h2 className="text-center font-serif text-2xl lg:text-3xl font-bold text-primary uppercase tracking-wide mb-16">
                    Government-Recognized. Industry-Trusted.
                </h2>

                <div className="flex flex-col gap-12 relative">
                    {/* Connecting Dashed Line (Vertical spine) could go here but design uses alternating flow. 
               Let's stick to the items. */}

                    {items.map((item, index) => {
                        const isEven = (index + 1) % 2 === 0;

                        return (
                            <div key={item.id} className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 relative group">

                                {/* Item Wrapper to handle ordering */}
                                <div className={`flex flex-col md:flex-row items-center w-full max-w-5xl ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Text Pill */}
                                    <div className={`w-full md:w-[45%] h-24 rounded-[3rem] bg-primary text-white flex items-center justify-center shadow-lg relative z-10 
                        ${isEven ? 'md:rounded-l-none md:rounded-r-[3rem] md:pl-12' : 'md:rounded-r-none md:rounded-l-[3rem] md:pr-12'}
                    `}>
                                        <h3 className="font-bold text-sm md:text-base uppercase tracking-wider text-center px-6">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Center Number Circle */}
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-xl flex items-center justify-center z-20 border-4 border-secondary shrink-0 md:-mx-4 my-4 md:my-0">
                                        <span className="font-serif text-xl md:text-2xl font-bold text-gray-900">{item.id}</span>
                                    </div>

                                    {/* Logo Pill */}
                                    <div className={`w-full md:w-[45%] h-32 rounded-[3rem] bg-transparent border-2 border-dashed border-primary flex items-center justify-center relative p-6
                         ${isEven ? 'md:rounded-r-none md:rounded-l-[3rem] md:pr-12' : 'md:rounded-l-none md:rounded-r-[3rem] md:pl-12'}
                    `}>
                                        {/* Curved Arrow Effect (SVG) - visual flourish based on mockups */}
                                        {/* We can simulate the 'flow' line with a positioned SVG if needed, but for now CSS Borders do the job of the container. */}

                                        <img src={item.logo} alt={item.logoAlt} className="h-full object-contain" />
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
