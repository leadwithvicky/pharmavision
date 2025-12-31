import Breadcrumbs from "@/components/Breadcrumbs";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const blogData: Record<string, any> = {
    "intelligent-pharma-revolution": {
        title: "Intelligent Pharma Revolution: The AI Era",
        category: "Technology",
        date: "December 31, 2025",
        image: "/landing/pharma_ai_blog.png",
        content: `
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Artificial Intelligence is no longer a futuristic concept in the pharmaceutical industry; it's a present-day reality that is fundamentally reshaping how drugs are discovered, developed, and distributed.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Impact on Workflow</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
                From predictive modeling to automated laboratory processes, AI is significantly reducing the time and cost associated with drug discovery. Machine learning algorithms can now analyze vast datasets of chemical compounds to identify potential candidates in a fraction of the time it would take a human researcher.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-secondary/20 rounded-r-xl italic text-gray-800">
                "AI is not replacing scientists; it's empowering them with the tools to solve the world's most complex medical challenges faster than ever before."
            </blockquote>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Growing Roles for Learners</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
                For those pursuing a career in pharma, proficiency in Python, Machine Learning, and automation is becoming a standard requirement. The Intelligent Pharma Revolution is creating high-growth roles for individuals who can bridge the gap between biological science and data engineering.
            </p>
        `
    },
    "clinical-data-careers-rising": {
        title: "Clinical Data Management: Career Opportunities",
        category: "Careers",
        date: "December 28, 2025",
        image: "/landing/clinical_data_blog.png",
        content: `
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The backbone of every successful clinical trial is high-quality, reliable data. As global trials become more complex, the demand for Clinical Data Management (CDM) professionals is skyrocketing.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Power of EDC and CRFs</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
                Mastering Electronic Data Capture (EDC) systems and Case Report Forms (CRFs) is essential for anyone looking to enter this field. These tools are critical for ensuring that trial data is accurate, complete, and compliant with international standards.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">High-Demand global Roles</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
                CDM professionals are needed at every stage of the clinical trial lifecycle. From data entry and validation to analysis and reporting, these roles offer excellent career progression and competitive compensation packages on a global scale.
            </p>
        `
    },
    "regulatory-affairs-made-simple": {
        title: "Regulatory Affairs: A Global Career Pathway",
        category: "Regulatory",
        date: "December 25, 2025",
        image: "/landing/regulatory_affairs_blog.png",
        content: `
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Navigating the complex landscape of international pharmaceutical regulations is a critical skill in today's global market. Regulatory Affairs (RA) professionals ensure that life-saving treatments meet all legal and safety standards.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Mastering eCTD Submissions</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
                One of the most important technical skills in RA is the ability to manage Electronic Common Technical Document (eCTD) submissions. This standardized format is recognized by regulatory agencies worldwide, making it a universal language for the industry.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Building a Strong Foundation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
                By understanding ICH guidelines and labeling rules, RA professionals can provide strategic guidance that accelerates the approval process and ensures that patients have access to safe and effective medications.
            </p>
        `
    }
};

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogData[slug];

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
                    <p className="text-gray-500 mb-6">Slug: {slug}</p>
                    <Link href="/#blogs" className="text-primary hover:underline font-bold">Return to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${blog.image}')` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="max-w-4xl text-center text-white space-y-4 md:space-y-6">
                        <span className="bg-primary px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
                            {blog.category}
                        </span>
                        <h1 className="text-3xl md:text-6xl font-serif font-bold leading-tight">
                            {blog.title}
                        </h1>
                        <div className="text-xs md:text-sm font-medium opacity-80">
                            {blog.date} • 5 min read
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 md:mb-12">
                        <Breadcrumbs
                            items={[
                                { label: "Blogs", href: "/#blogs" },
                                { label: blog.title, href: `/blogs/${slug}` }
                            ]}
                        />
                    </div>

                    <Link
                        href="/#blogs"
                        className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8 md:mb-12 group"
                    >
                        <MoveLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-2" />
                        Back to Insights
                    </Link>

                    <article
                        className="prose prose-sm sm:prose-base md:prose-lg prose-primary max-w-none prose-img:rounded-3xl prose-headings:font-serif"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* CTA Section */}
                    <div className="mt-12 md:mt-20 p-8 md:p-12 bg-secondary rounded-[2rem] md:rounded-3xl text-center space-y-6 md:space-y-8">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                            Ready to Advance Your Pharma Career?
                        </h3>
                        <p className="text-sm md:text-gray-600 max-w-2xl mx-auto">
                            Join thousands of students building their future with Pharmavision's industry-certified courses and expert mentorship.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/courses"
                                className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-primary/30 text-sm md:text-base text-center"
                            >
                                Explore Courses
                            </Link>
                            <Link
                                href="/contact"
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-all text-sm md:text-base text-center"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
