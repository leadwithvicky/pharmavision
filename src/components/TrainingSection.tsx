import { MoveRight } from "lucide-react";
import Link from "next/link";
import { courses } from "@/data/courses";

export default function TrainingSection() {
    return (
        <section className="w-full py-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold uppercase tracking-wide">
                        Zero-to-Job-Ready Training Program
                    </h2>
                    <p className="font-bold text-gray-800 tracking-wide uppercase">
                        Practical Learning For Powerful Careers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="group bg-primary rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-primary/10"
                        >
                            <div className="p-6 pb-0 flex flex-col h-full">
                                {/* Title */}
                                <h3 className="font-serif text-xl text-white mb-6 uppercase tracking-wider">
                                    {course.title}
                                </h3>

                                {/* Image Container */}
                                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-6 bg-white/10">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${course.heroImage}')` }}
                                    />
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col">
                                    <h4 className="font-bold text-white text-sm mb-3 uppercase leading-tight">
                                        {course.headline}
                                    </h4>
                                    <p className="text-white/80 text-xs leading-relaxed mb-8 flex-1">
                                        {course.description}
                                    </p>

                                    {/* Button */}
                                    <div className="mt-auto pb-6">
                                        <Link
                                            href={`/courses/${course.id}`}
                                            className="inline-flex bg-white text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider items-center gap-2 hover:bg-accent hover:text-white transition-colors"
                                        >
                                            Start Your Course
                                            <MoveRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
