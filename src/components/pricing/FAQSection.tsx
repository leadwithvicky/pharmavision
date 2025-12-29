"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search, User, FileQuestion, Settings, CreditCard } from "lucide-react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [searchQuery, setSearchQuery] = useState("");

    const faqs = [
        "Who can enroll in these courses?",
        "Can I access the LMS after completing my course?",
        "Do you offer EMI or installment options?",
        "Are the trainers industry professionals?",
        "Can I upgrade my plan later?",
        "Are the courses beginner-friendly?",
        "Do I need prior technical experience?",
        "Is placement support guaranteed?",
        "Can I learn while working?",
        "Do you offer free demo sessions before enrollment?"
    ];

    const filteredFaqs = faqs.filter(faq =>
        faq.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-secondary overflow-hidden">
            <div className="max-w-[1000px] mx-auto">

                {/* FAQ Header & Visual */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl font-bold text-primary uppercase tracking-wider mb-4">
                        FAQ
                    </h2>
                    <h3 className="font-bold text-xl md:text-3xl text-gray-900 uppercase tracking-wide mb-8">
                        Get Instant Clarity on Your Learning Journey
                    </h3>
                    <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-12 bottom-12 ">
                        Find straightforward answers to the most common questions learners ask before joining. We help you understand every step from enrollment to certification and career growth.
                    </p>

                    {/* Visual Area with Overlapping Search Bar */}
                    <div className="relative w-full max-w-4xl mx-auto mb-20">
                        {/* FAQ Illustration */}
                        <img
                            src="/faq.png"
                            alt="FAQ Illustration"
                            className="w-full h-auto object-contain drop-shadow-sm rounded-3xl"
                        />

                        {/* Search Bar - Floating at the bottom */}
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
                            <div className="relative bg-white rounded-full shadow-lg border border-gray-100">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <Search size={18} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search FAQs"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-full border-none focus:ring-0 text-sm bg-transparent outline-none"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-primary/20 rounded-lg overflow-hidden transition-all duration-300">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-4 px-6 text-left"
                                >
                                    <span className="font-semibold text-gray-800 text-sm md:text-base">{faq}</span>
                                    {openIndex === i ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                                </button>

                                {/* Content */}
                                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-sm text-gray-600">
                                        This is a placeholder answer for the FAQ question to demonstrate the layout.
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-500">
                            No matching questions found.
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
