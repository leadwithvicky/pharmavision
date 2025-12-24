const features = [
    {
        title: "PRECISION YOU CAN TRUST",
        description: "We deliver accurate, structured, audit-ready results that strengthen operations.",
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=2069&auto=format&fit=crop", // Pills/Meds
    },
    {
        title: "EXPERTISE THAT DELIVERS",
        description: "Our team brings deep industry knowledge and real-world experience.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1999&auto=format&fit=crop", // Microscope
    },
    {
        title: "SMARTER, FASTER SYSTEMS",
        description: "Intelligent tools and optimized workflows reduce errors and speed performance.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // Lab automation/Tech
    },
    {
        title: "RELIABILITY FROM START TO FINISH",
        description: "Dependable communication and timely delivery ensure seamless project support.",
        image: "https://images.unsplash.com/photo-1565514020176-db8b3ec4a3e7?q=80&w=2070&auto=format&fit=crop", // Factory/Production
    },
];

export default function WhyChooseUs() {
    return (
        <section className="w-full py-24 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-3xl font-bold text-primary uppercase tracking-wider">
                        Why Choose Us
                    </h2>
                    <h3 className="font-bold text-xl md:text-2xl text-gray-900 uppercase tracking-wide">
                        Expertise That Strengthens Every Step
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">

                            {/* Arch Image Container */}
                            <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-t-[10rem] rounded-b-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${feature.image}')` }}
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-multiply" />
                            </div>

                            {/* Content */}
                            <div className="space-y-4 px-2">
                                <h4 className="font-serif text-lg font-bold text-primary uppercase leading-tight">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
