import { Linkedin, Link as LinkIcon } from "lucide-react";

const founders = [
    {
        name: "VINAY TEJA",
        title: "FOUNDER & CEO",
        image: "/aboutus/VINAY.jpg", // Professional Male
        bio: "A visionary leader with a passion for transforming education through technology. With extensive experience in edtech and a deep understanding of student needs, Vinay drives innovation and strategic growth at VisionTech. His commitment to excellence and student success has been the cornerstone of our company's mission to democratize quality education.",
        linkedin: "https://www.linkedin.com/in/vinay-teja-ceo/?originalSubdomain=in",
        portfolio: "https://vinayteja.com",
    },
    {
        name: "VAMSHI KRISHNA",
        title: "CO-FOUNDER & MANAGING DIRECTOR",
        image: "/aboutus/VAMSHI.jpg", // Professional Male 2
        bio: "A leader on operational excellence and team development, Vamshi brings expertise in business operations and talent management, ensuring VisionTech delivers learning experiences. His approach and attention to detail have been instrumental in building a culture of improvement and student-centric innovation at VisionTech.",
        linkedin: "https://www.linkedin.com/in/vamshi-krishna-edla-2334a8221/?originalSubdomain=in",
        portfolio: "https://portfolio-vamshi-krishna-edla.vercel.app/",
    },
];

export default function VisionariesSection() {
    return (
        <section className="w-full py-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto">

                <h2 className="text-center font-serif text-3xl font-bold text-primary uppercase tracking-wide mb-16">
                    Meet The Visionaries Leading Our Journey
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
                    {founders.map((f, i) => (
                        <div key={i} className="relative group">

                            {/* Dark Green Background Offset */}
                            <div className="absolute top-0 bottom-0 left-0 right-4 bg-primary rounded-l-3xl rounded-r-lg transform -translate-x-2 translate-y-2 lg:-translate-x-4 lg:translate-y-4"></div>

                            {/* White Card */}
                            <div className="relative bg-white rounded-3xl p-6 pb-12 shadow-xl border border-gray-100 flex flex-col h-full z-10 ml-4 md:ml-0">

                                {/* Image */}
                                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-sm">
                                    <img src={f.image} alt={f.name} className="w-full h-full object-cover object-top" />
                                </div>

                                {/* Ribbon Label */}
                                {/* Needs to look like it hangs off the right edge */}
                                <div className="absolute top-[45%] lg:top-[50%] right-[-10px] md:right-[-20px] bg-primary text-white py-3 pl-8 pr-6 rounded-l-lg shadow-lg z-20 w-[80%]">
                                    <h3 className="font-serif text-xl font-bold uppercase tracking-wider">{f.name}</h3>
                                    <p className="text-[0.65rem] font-bold uppercase tracking-widest opacity-90">{f.title}</p>

                                    {/* Ribbon Fold Triangle effect */}
                                    <div className="absolute -bottom-2 right-0 w-0 h-0 border-t-[10px] border-t-green-900 border-r-[10px] border-r-transparent"></div>
                                </div>

                                {/* Spacer for Ribbon */}
                                <div className="h-16 md:h-12"></div>

                                {/* Bio */}
                                <p className="text-xs text-gray-700 leading-relaxed mb-8">
                                    {f.bio}
                                </p>

                                {/* Links */}
                                <div className="mt-auto flex gap-4">
                                    <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold text-xs uppercase hover:underline">
                                        <Linkedin size={16} /> LinkedIn
                                    </a>
                                    <a href={f.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 font-bold text-xs uppercase hover:text-primary transition-colors">
                                        <LinkIcon size={16} /> Portfolio
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
