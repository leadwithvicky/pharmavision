const blogs = [
    {
        title: "INTELLIGENT PHARMA REVOLUTION",
        description: "AI is transforming pharma workflows and creating high-growth roles for learners skilled in Python, ML, and automation.",
        image: "https://images.unsplash.com/photo-1620912189868-38f0607142df?q=80&w=2069&auto=format&fit=crop", // Futuristic UI/Screen
    },
    {
        title: "CLINICAL DATA CAREERS RISING",
        description: "Mastering CDM tools like EDC, CRFs, and data workflows opens doors to high-demand, high-paying roles in global trials.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Data/Charts
    },
    {
        title: "REGULATORY CAREERS MADE SIMPLE",
        description: "Mastering CTD/eCTD submissions, labeling rules, and ICH guidelines sets the foundation for strong global careers in Regulatory Affairs.",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop", // Documents/Global
    },
];

export default function BlogsSection() {
    return (
        <section id="blogs" className="w-full py-24 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-3xl font-bold text-primary uppercase tracking-wider">
                        Blogs
                    </h2>
                    <h3 className="font-bold text-xl md:text-2xl text-gray-900 uppercase tracking-wide">
                        Clear Guidance For a Fast-Changing Pharma World
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {blogs.map((blog, index) => (
                        <div key={index} className="flex flex-col group">

                            {/* Arch Image Container */}
                            <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-t-[12rem] rounded-b-xl shadow-lg border-2 border-primary/10 group-hover:shadow-xl transition-all duration-300">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${blog.image}')` }}
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                <h4 className="font-serif text-xl font-bold text-gray-900 uppercase leading-snug">
                                    {blog.title}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed font-medium min-h-[4rem]">
                                    {blog.description}
                                </p>
                                <button className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-8 py-3 rounded-lg uppercase tracking-widest shadow-lg shadow-primary/20 transition-all">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
