import { Star, MoveLeft, MoveRight } from "lucide-react";

const testimonials = [
    {
        name: "AISHWARYA",
        role: "",
        quote: "The training gave me real confidence to work on industry projects from day one",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop", // Professional Woman
        rating: 4.5,
    },
    {
        name: "ROHIT",
        role: "",
        quote: "A clear, practical course that helped me upskill quickly and get interview-ready.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop", // Professional Man
        rating: 4.7,
    },
    {
        name: "MEGHA",
        role: "",
        quote: "ICSR and narrative training prepared me well for my Drug Safety Associate position.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop", // Professional Woman 2
        rating: 4.6,
    },
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="w-full py-24 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-3xl font-bold text-primary uppercase tracking-wider">
                        Testimonials
                    </h2>
                    <h3 className="font-bold text-xl md:text-2xl text-gray-900 uppercase tracking-wide">
                        Clear Guidance For a Fast-Changing Pharma World
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, index) => (
                        <div key={index} className="flex gap-6 items-start bg-transparent p-4 rounded-xl hover:bg-white/50 transition-colors">

                            {/* Image */}
                            <div className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
                                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-3 pt-2">
                                <p className="text-sm font-medium text-gray-800 leading-snug">
                                    {t.quote}
                                </p>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="text-xs font-bold ml-1 text-gray-600">({t.rating}/5.0)</span>
                                </div>
                                <div className="font-serif text-primary font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                    --- {t.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Arrows */}
                <div className="flex justify-center gap-8 mt-12 text-primary">
                    <button className="hover:scale-110 transition-transform"><MoveLeft size={32} strokeWidth={1.5} /></button>
                    <button className="hover:scale-110 transition-transform"><MoveRight size={32} strokeWidth={1.5} /></button>
                </div>

            </div>
        </section>
    );
}
