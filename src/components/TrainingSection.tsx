import { MoveRight } from "lucide-react";

const courses = [
    {
        title: "MEDICAL CODING",
        headline: "YOUR GATEWAY TO HEALTHCARE CODING EXCELLENCE",
        description: "Gain the skills to translate medical data into accurate, industry-ready codes. Build confidence with practical training designed for global certification success.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "PHARMACOVIGILANCE",
        headline: "SHAPE THE FUTURE OF PATIENT SAFETY THROUGH EXPERTISE",
        description: "Learn how medicines are monitored, evaluated, and made safer for the world. Develop strong expertise in case processing, analysis, and global safety standards.",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "CLINICAL RESEARCH",
        headline: "WHERE SCIENTIFIC DISCOVERY MEETS REAL-WORLD IMPACT",
        description: "Learn how clinical trials transform ideas into life-changing treatments. Build the skills to support global research, patient safety, and medical breakthroughs.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "CLINICAL SAS PROGRAMMING",
        headline: "TURN CLINICAL DATA INTO POWERFUL INSIGHTS WITH ANALYTICS",
        description: "Learn SAS programming for clinical trial data cleaning, analysis, TLF creation, and CDISC workflows. Develop the skills needed for high-value roles in biostatistics.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "CLINICAL DATA MANAGEMENT",
        headline: "BUILD ACCURACY AND INTEGRITY IN CLINICAL DATA MANAGEMENT",
        description: "Gain practical skills in CRF design, database setup, discrepancy handling, and study close-out. Get job-ready for CDM roles across CROs, pharma companies, and global research teams.",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "AI IN PHARMA",
        headline: "WHERE DRUG DISCOVERY MEETS INTELLIGENT AUTOMATION",
        description: "Explore how AI improves research, safety workflows, and real-world evidence. Develop skills to use modern AI tools shaping future drug development.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    },
    {
        title: "MEDICAL WRITING CERTIFICATION",
        headline: "WRITE WITH CLARITY, PRECISION, AND SCIENTIFIC IMPACT",
        description: "Create clear regulatory documents, clinical study reports, and publication-ready content. Build skills for careers in scientific communication and regulatory writing.",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop",
    },
    {
        title: "QUALITY ASSURANCE",
        headline: "ENSURE EXCELLENCE ACROSS EVERY PHARMA PROCESS",
        description: "Learn GxP standards, audits, CAPA, and key documentation practices in pharma quality systems. Build the skills needed for QA roles focused on compliance and inspection readiness.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "REGULATORY AFFAIRS",
        headline: "NAVIGATE GLOBAL DRUG APPROVAL WITH CONFIDENCE",
        description: "Learn the essentials of dossiers, submissions, labeling, and global regulatory standards. Prepare for roles in regulatory strategy, compliance, and product lifecycle management.",
        image: "https://images.unsplash.com/photo-1576091160550-217358c7e618?q=80&w=2070&auto=format&fit=crop",
    },
];

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
                    {courses.map((course, index) => (
                        <div
                            key={index}
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
                                        style={{ backgroundImage: `url('${course.image}')` }}
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
                                        <button className="bg-white text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-accent hover:text-white transition-colors">
                                            Start Your Course
                                            <MoveRight size={14} />
                                        </button>
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
