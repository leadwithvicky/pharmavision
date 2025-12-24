"use client";

import { useState } from "react";
import { MoveRight, Building2, Wallet, Star, Plus, Minus } from "lucide-react";

interface CourseContentProps {
    course: any;
}


export default function CourseContent({ course }: CourseContentProps) {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = ["Overview", "Modules", "Career", "Reviews", "FAQ"];

    return (
        <section className="w-full pb-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Dynamic Content */}
                <div className="lg:col-span-2">

                    {/* Mini Nav */}
                    <div className="flex flex-wrap gap-6 md:gap-12 border-b border-gray-200 pb-4 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`font-bold text-sm md:text-base uppercase tracking-wider transition-colors pb-2 relative 
                        ${activeTab === tab ? "text-primary" : "text-gray-400 hover:text-gray-600"}
                    `}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="min-h-[400px]">
                        {activeTab === "Overview" && (
                            <div className="space-y-12 animate-fadeIn">
                                {/* About */}
                                <div className="space-y-6">
                                    <h2 className="font-serif text-2xl font-bold text-gray-900 uppercase">About</h2>
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                        {course.overview.about}
                                    </p>
                                </div>

                                {/* Course Details List */}
                                <div className="space-y-6">
                                    <h2 className="font-serif text-2xl font-bold text-gray-900 uppercase">Course Details</h2>
                                    <ul className="space-y-4">
                                        {course.overview.details.map((detail: any, index: number) => (
                                            <li key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm md:text-base">
                                                <span className="font-bold text-primary uppercase tracking-wide min-w-[180px]">{detail.label} :</span>
                                                <span className="text-gray-700 font-medium">{detail.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === "Modules" && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="font-serif text-2xl font-bold text-gray-900 uppercase">What You Will Learn</h2>
                                <ul className="space-y-4">
                                    {course.modules.map((module: string, index: number) => (
                                        <li key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                            <span className="font-bold text-primary text-lg">{(index + 1).toString().padStart(2, '0')}.</span>
                                            <span className="font-medium text-gray-800">{module}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === "Career" && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="font-serif text-2xl font-bold text-gray-900 uppercase">Career Paths</h2>
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-primary uppercase mb-4">Job Roles</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {course.career.roles.map((role: string, index: number) => (
                                            <span key={index} className="px-4 py-2 bg-green-50 text-green-800 rounded-full text-xs font-bold uppercase">
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
                                    <h3 className="font-bold text-primary uppercase mb-4">Growth Potential</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{course.career.growth}</p>
                                </div>

                                {/* Hiring Companies List */}
                                <div className="space-y-6">
                                    <h2 className="font-serif text-2xl font-bold text-gray-900 uppercase">Top Hiring Companies</h2>
                                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                        {/* Header */}
                                        <div className="grid grid-cols-2 p-4 bg-gray-50 border-b border-gray-100">
                                            <span className="font-bold text-primary text-xs uppercase tracking-wider pl-2">Company</span>
                                            <span className="font-bold text-primary text-xs uppercase tracking-wider">Avg. Package</span>
                                        </div>

                                        {/* Scrollable List */}
                                        <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                                            {course.companies?.map((company: any, index: number) => (
                                                <div key={index} className="grid grid-cols-2 p-4 border-b border-gray-50 hover:bg-green-50/30 transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                                            <Building2 size={14} />
                                                        </div>
                                                        <span className="font-bold text-gray-800 text-sm">{company.name}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Wallet size={14} className="text-green-600" />
                                                        <span className="text-sm font-medium text-gray-600">{company.pckg || company.package}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "Reviews" && (
                            <div className="space-y-12 animate-fadeIn">
                                {/* Header & Rating Summary */}
                                <div>
                                    <h2 className="font-serif text-2xl font-bold text-gray-900 uppercase mb-6">Rating & Reviews</h2>
                                    <div className="bg-[#f8fbfa] p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                                        {/* Aggregated Rating */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                {[1, 2, 3, 4, 5].map((i) => (
                                                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
                                                ))}
                                            </div>
                                            <div className="text-xl font-bold text-gray-800">(4.7/5.0)</div>
                                        </div>

                                        {/* Bars (Visual Only) */}
                                        <div className="flex-1 w-full space-y-2">
                                            {[5, 4, 3, 2, 1].map((rating, i) => (
                                                <div key={rating} className="flex items-center gap-3">
                                                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-green-700/60 rounded-full"
                                                            style={{ width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 5 : 2}%` }}
                                                        ></div>
                                                        <div
                                                            className="h-full bg-yellow-400 rounded-full -mt-1.5 mix-blend-multiply"
                                                            style={{ width: `${rating === 5 ? 30 : rating === 4 ? 40 : rating === 3 ? 10 : 0}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-gray-400 w-2">{rating}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Reviews Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {course.reviews?.map((review: any) => (
                                        <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-full bg-[#1a5f48] text-white flex items-center justify-center font-bold text-lg overflow-hidden shrink-0">
                                                    {review.image ? (
                                                        <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        review.name.split(' ').map((n: string) => n[0]).join('')
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#1a5f48] text-sm uppercase">{review.name}</h4>
                                                    <div className="flex gap-0.5">
                                                        {[1, 2, 3, 4, 5].map((s) => (
                                                            <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                "{review.comment}"
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* FAQ Tab content */}
                        {activeTab === "FAQ" && (
                            <div className="animate-fadeIn max-w-3xl">
                                <h2 className="font-serif text-2xl font-bold text-gray-900 uppercase mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {course.faqs?.map((faq: any, index: number) => (
                                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                </div>

                {/* Right Column: Sticky Pricing Card */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-primary text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">

                        {/* Decoration */}
                        <div className="absolute top-[-20%] right-[-20%] w-[50%] h-[50%] bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

                        <div className="text-center mb-8 border-b border-white/20 pb-6">
                            <h3 className="font-serif text-2xl font-bold uppercase tracking-widest">Pricing</h3>
                        </div>

                        <div className="mb-8">
                            <h4 className="font-bold text-yellow-400 text-lg uppercase mb-2">Course Price: {course.price}</h4>
                            <p className="text-xs text-white/80 leading-relaxed">
                                Get complete access to the {course.title} Program with everything included.
                            </p>
                        </div>

                        <div className="mb-8 space-y-4">
                            <h5 className="font-bold text-yellow-400 text-sm uppercase tracking-wider">What You Get:</h5>
                            <ul className="space-y-3 text-[11px] font-bold uppercase tracking-wide text-white/90">
                                {course.pricingFeatures.map((feature: string, i: number) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-0.5 text-yellow-400">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-8 p-4 bg-white/10 rounded-xl">
                            <h5 className="font-bold text-yellow-400 text-sm uppercase tracking-wider mb-1">Easy EMI Options</h5>
                            <p className="text-[10px] text-white/80 leading-relaxed">
                                Start learning for {course.emi} with flexible installment plans.
                            </p>
                        </div>

                        <button className="w-full bg-[#f8fbfa] text-primary py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg">
                            Enroll Now
                            <MoveRight size={14} />
                        </button>

                    </div>
                </div>

            </div>
        </section>
    );
}

// Simple FAQ Accordion Component
function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className={`font-bold text-lg ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-green-50 text-primary'
                    }`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50/50">
                    {answer}
                </div>
            </div>
        </div>
    );
}
