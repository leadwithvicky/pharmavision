import { MoveRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="w-full py-24 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Image (Arch) */}
                <div className="relative w-full aspect-[5/5] rounded-t-[20rem] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('landing/ab1.png')" }}
                    // Placeholder for certificate/books
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>

                {/* Right Content */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold text-primary uppercase tracking-wider">
                            About Us
                        </h2>
                        <h3 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight">
                            WHERE ACCURACY BUILDS TRUST, AND TRUST BUILDS SUCCESS.
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            pharmavision helps learners build real-world skills through clear, practical, industry-focused training empowering them to grow with confidence.
                        </p>
                    </div>

                    <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/30">
                        Explore Our Mission
                    </button>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                        <div className="text-center space-y-1">
                            <div className="text-3xl font-serif font-bold text-accent">100%</div>
                            <div className="text-[0.65rem] md:text-xs font-bold uppercase text-gray-900 tracking-wider">Industry-Certified<br />Courses</div>
                        </div>
                        <div className="text-center space-y-1">
                            <div className="text-3xl font-serif font-bold text-accent">20+</div>
                            <div className="text-[0.65rem] md:text-xs font-bold uppercase text-gray-900 tracking-wider">Years Expert<br />Faculty</div>
                        </div>
                        <div className="text-center space-y-1">
                            <div className="text-3xl font-serif font-bold text-accent">100%</div>
                            <div className="text-[0.65rem] md:text-xs font-bold uppercase text-gray-900 tracking-wider">Job Placement<br />Assistance</div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
