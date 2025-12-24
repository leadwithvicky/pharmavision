"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search, User, FileQuestion, Settings, CreditCard } from "lucide-react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1000px] mx-auto">

                {/* FAQ Header & Visual */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl font-bold text-primary uppercase tracking-wider mb-4">
                        FAQ
                    </h2>
                    <h3 className="font-bold text-xl md:text-2xl text-gray-900 uppercase tracking-wide mb-8">
                        Get Instant Clarity on Your Learning Journey
                    </h3>
                    <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-12">
                        Find straightforward answers to the most common questions learners ask before joining. We help you understand every step from enrollment to certification and career growth.
                    </p>

                    {/* Visual Area (Simulated) */}
                    <div className="relative w-full max-w-3xl mx-auto h-64 bg-green-100/50 rounded-3xl mb-12 flex items-center justify-center border border-green-100 overflow-hidden">
                        {/* Background Elements */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent opacity-60"></div>

                        {/* Central Avatar Simulation */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-4">
                                <User size={48} className="text-primary" />
                            </div>
                            {/* Floating Icons */}
                            <div className="absolute top-0 -left-32 w-48 p-3 bg-white/80 backdrop-blur rounded-xl shadow-sm text-xs text-green-800 flex items-center gap-2 border border-green-100">
                                <FileQuestion size={16} className="text-primary" /> General Inquiries
                            </div>
                            <div className="absolute bottom-0 -left-32 w-48 p-3 bg-white/80 backdrop-blur rounded-xl shadow-sm text-xs text-green-800 flex items-center gap-2 border border-green-100">
                                <Settings size={16} className="text-primary" /> Technical Support
                            </div>
                            <div className="absolute top-0 -right-32 w-48 p-3 bg-white/80 backdrop-blur rounded-xl shadow-sm text-xs text-green-800 flex items-center gap-2 border border-green-100">
                                <CreditCard size={16} className="text-primary" /> Billing & Payments
                            </div>
                            <div className="absolute bottom-0 -right-32 w-48 p-3 bg-white/80 backdrop-blur rounded-xl shadow-sm text-xs text-green-800 flex items-center gap-2 border border-green-100">
                                <FileQuestion size={16} className="text-primary" /> Content Help
                            </div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative mb-16">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                            <Search size={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search FAQs"
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                        />
                    </div>

                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
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
                    ))}
                </div>

            </div>
        </section>
    );
}
