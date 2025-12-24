import Image from "next/image";

const partners = [
    { id: "01", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop" },
    { id: "02", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop" },
    { id: "03", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" },
    { id: "04", img: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop" },
    { id: "05", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" },
    { id: "06", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop" },
];

export default function AboutHero() {
    return (
        <section className="w-full min-h-screen pt-32 pb-20 px-4 md:px-8 bg-secondary overflow-hidden flex flex-col items-center">

            {/* Header Text */}
            <div className="text-center mb-12 lg:mb-20 max-w-4xl space-y-4 z-10">
                <h1 className="font-serif text-4xl font-bold text-primary uppercase tracking-widest">
                    About Us
                </h1>
                <h2 className="font-bold text-xl md:text-2xl text-gray-900 uppercase tracking-wide">
                    Shaping Skills. Strengthening Careers.
                </h2>
                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    VisionPharma provides practical, industry-focused training that helps learners gain real-world skills and career confidence. With expert guidance and a clear learning approach, we prepare students to step into professional roles with ease.
                </p>
            </div>

            {/* Radial Layout Component */}
            <div className="relative w-full max-w-[1000px] aspect-square md:aspect-[16/10] lg:aspect-square flex items-center justify-center">

                {/* Center Circle Text */}
                <div className="absolute z-20 text-center pointer-events-none p-10 bg-white/80 backdrop-blur-sm rounded-full w-[280px] h-[280px] flex flex-col items-center justify-center shadow-none">
                    <h3 className="font-serif text-3xl font-bold text-primary uppercase leading-tight mb-2">
                        Where Powerful
                    </h3>
                    <h3 className="font-serif text-3xl font-bold text-primary uppercase leading-tight mb-2">
                        Partnerships
                    </h3>
                    <h3 className="font-serif text-3xl font-bold text-primary uppercase leading-tight">
                        Begin
                    </h3>
                </div>

                {/* Decorative Rings */}
                <div className="absolute inset-0 border border-primary/20 rounded-full scale-75 md:scale-50 lg:scale-[0.55] -z-10" />
                <div className="absolute inset-0 border border-primary/10 rounded-full scale-90 md:scale-[0.65] lg:scale-[0.7] -z-10" />

                {/* Radial Items */}
                <div className="absolute inset-0 w-full h-full hidden md:block">
                    {partners.map((p, i) => {
                        // Calculate position on a circle
                        // 6 items = 60 degrees apart.
                        // Starting from top (270 deg) or similar offset to match image.
                        // The image shows index 01 at top-left approx 300 deg?
                        // Let's position them manually for precision matching the "Flower" shape.

                        // Positions based on a clock face approx: 
                        // 01: 10 o'clock
                        // 02: 9 o'clock (but lower) -> 8 o'clock
                        // 03: 6 o'clock (left side) -> 7 o'clock
                        // 04: 5 o'clock
                        // 05: 3 o'clock
                        // 06: 2 o'clock

                        // Using absolute percentages for the "Kite" shapes
                        const positions = [
                            "top-[10%] left-[20%]", // 01
                            "top-[40%] left-[5%]",  // 02
                            "bottom-[10%] left-[20%]", // 03
                            "bottom-[10%] right-[20%]", // 04
                            "top-[40%] right-[5%]", // 05
                            "top-[10%] right-[20%]", // 06
                        ];

                        // Rotations to make them point inward? Or just static shapes.
                        // The design shows kite shapes pointing to center.
                        // We can use clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%) for diamond
                        // Or the specific "shield/kite" shape in the image.
                        // Let's approximate the "Flower Petal" look.
                        // It looks like a diamond but with wider center.
                        // Let's use a standard Kite shape: polygon(50% 0%, 100% 30%, 50% 100%, 0% 30%) - inverted?
                        // The image shows they are oriented towards the center.

                        // Simplified: Placing images in circle with slight rotation.

                        const rotation = -60 * i; // just for logic, handling via custom styles below.

                        // Specific styles for each to enable the "Fan" layout
                        const styles = [
                            { top: '5%', left: '25%', transform: 'rotate(-30deg)' },
                            { top: '35%', left: '5%', transform: 'rotate(-90deg)' },
                            { bottom: '5%', left: '25%', transform: 'rotate(-150deg)' },
                            { bottom: '5%', right: '25%', transform: 'rotate(150deg)' },
                            { top: '35%', right: '5%', transform: 'rotate(90deg)' },
                            { top: '5%', right: '25%', transform: 'rotate(30deg)' },
                        ];

                        return (
                            <div
                                key={p.id}
                                className="absolute w-[20%] h-[30%] overflow-hidden shadow-xl border-4 border-white transition-transform hover:scale-105 hover:z-30"
                                style={{
                                    ...styles[i],
                                    // Custom kite/petal clip path
                                    clipPath: "polygon(50% 0%, 100% 25%, 50% 100%, 0% 25%)",
                                    // This makes it point DOWN. We need to rotate the container to point to center.
                                }}
                            >
                                {/* Image */}
                                <div className="relative w-full h-full">
                                    <img
                                        src={p.img}
                                        alt=""
                                        className="w-full h-full object-cover"
                                        style={{ transform: `rotate(${-1 * parseInt(styles[i].transform.replace(/\D/g, '')) * (styles[i].transform.includes('-') ? -1 : 1)}deg)` }} // Counter-rotate image? No, let it flow.
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />

                                    {/* Number Badge */}
                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary text-white font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center shadow-md rotate-180">
                                        <span style={{ transform: 'rotate(180deg)' }}>{p.id}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Grid Fallback */}
                <div className="grid grid-cols-2 gap-4 w-full md:hidden mt-8">
                    {partners.map((p) => (
                        <div key={p.id} className="aspect-[3/4] rounded-xl overflow-hidden relative shadow-lg">
                            <img src={p.img} alt="" className="w-full h-full object-cover" />
                            <div className="absolute top-2 right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">
                                {p.id}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
