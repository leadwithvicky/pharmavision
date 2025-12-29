export default function CoursesHero() {
    return (
        <section className="w-full pt-32 pb-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">

                {/* Header Text */}
                <div className="text-center max-w-4xl space-y-6 mb-16">
                    <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider">
                        Zero-to-Job-Ready Training Program
                    </h1>
                    <h2 className="font-bold text-xl md:text-2xl text-gray-900 uppercase tracking-wide">
                        Step Into the Next Era of Pharma Education
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Gain future-ready skills with courses designed around real industry requirements and evolving healthcare standards. From foundational concepts to advanced expertise, we prepare you to excel in tomorrow's pharmaceutical landscape.
                    </p>
                </div>

                {/* Hero Image Container */}
                <div className="relative w-full max-w-6xl">

                    {/* Image */}
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <img
                            src="aboutus/oc.png" // Tech/Pharma Lab Interface
                            alt="Pharma Education"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
                    </div>

                    {/* Floating Overlay Box */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 md:-bottom-12 w-[90%] md:w-[60%] bg-primary text-white py-6 md:py-8 px-8 rounded-2xl shadow-xl flex items-center justify-center text-center">
                        <h3 className="font-serif text-lg md:text-xl font-bold uppercase tracking-widest leading-snug">
                            Practical Learning For Powerful Careers.
                        </h3>
                    </div>

                </div>

            </div>
        </section>
    );
}
