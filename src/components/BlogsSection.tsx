import Link from "next/link";

const blogs = [
    {
        title: "INTELLIGENT PHARMA REVOLUTION",
        slug: "intelligent-pharma-revolution",
        description: "AI is transforming pharma workflows and creating high-growth roles for learners skilled in Python, ML, and automation.",
        image: "/landing/pharma_ai_blog.png",
    },
    {
        title: "CLINICAL DATA CAREERS RISING",
        slug: "clinical-data-careers-rising",
        description: "Mastering CDM tools like EDC, CRFs, and data workflows opens doors to high-demand, high-paying roles in global trials.",
        image: "/landing/clinical_data_blog.png",
    },
    {
        title: "REGULATORY CAREERS MADE SIMPLE",
        slug: "regulatory-affairs-made-simple",
        description: "Mastering CTD/eCTD submissions, labeling rules, and ICH guidelines sets the foundation for strong global careers in Regulatory Affairs.",
        image: "/landing/regulatory_affairs_blog.png",
    },
];

export default function BlogsSection() {
    return (
        <section id="blogs" className="w-full py-24 px-4 md:px-8 bg-white">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="text-center mb-12 md:mb-20 space-y-4">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary uppercase tracking-wider">
                        Insights & Articles
                    </h2>
                    <h3 className="font-bold text-lg md:text-2xl text-gray-900 uppercase tracking-wide">
                        Clear Guidance For a Fast-Changing Pharma World
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                    {blogs.map((blog, index) => (
                        <div key={index} className="flex flex-col group bg-secondary/30 rounded-3xl p-5 md:p-6 transition-all duration-500 hover:bg-secondary/50 hover:-translate-y-2">

                            {/* Image Container */}
                            <div className="relative w-full aspect-[16/10] md:aspect-[4/5] mb-6 md:mb-8 overflow-hidden rounded-2xl shadow-xl">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${blog.image}')` }}
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="space-y-4 md:space-y-6 flex-grow flex flex-col">
                                <h4 className="font-serif text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h4>
                                <p className="text-sm md:text-gray-600 leading-relaxed font-medium line-clamp-3">
                                    {blog.description}
                                </p>
                                <div className="mt-auto pt-4 md:pt-6">
                                    <Link
                                        href={`/blogs/${blog.slug}`}
                                        className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-xs md:text-sm group/link"
                                    >
                                        Read Full Article
                                        <svg
                                            className="ml-2 w-4 md:w-5 h-4 md:h-5 transition-transform group-hover/link:translate-x-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.6} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
