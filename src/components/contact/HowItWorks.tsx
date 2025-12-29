"use client";

import { ClipboardList, Zap, MessageSquare, Briefcase, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
    const steps = [
        {
            id: "01",
            title: "Submit Your Details",
            desc: "Fill out the quick form with your name, email, phone, and course interest.",
            icon: <ClipboardList size={28} />,
        },
        {
            id: "02",
            title: "Get Quick Response",
            desc: "Our support team contacts you within minutes to understand your requirements.",
            icon: <Zap size={28} />,
        },
        {
            id: "03",
            title: "Discuss Your Goals",
            desc: "Share your career goals so we can guide you toward the right program.",
            icon: <MessageSquare size={28} />,
        },
        {
            id: "04",
            title: "Receive Personal Plan",
            desc: "Get course recommendations, pricing options, and learning pathways tailored to you.",
            icon: <Briefcase size={28} />,
        },
        {
            id: "05",
            title: "Start Your Journey",
            desc: "Complete enrollment and begin learning with live classes and LMS access.",
            icon: <Rocket size={28} />,
        }
    ];

    return (
        <section className="w-full py-24 px-4 md:px-8 bg-[#F5FAF6] overflow-hidden relative">
            <div className="max-w-[1000px] mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-4xl md:text-5xl font-bold text-[#1F4D36] uppercase tracking-wide mb-6"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
                    >
                        Your pathway to a successful career in just 5 simple steps.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Central Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1F4D36]/20 md:-translate-x-1/2"></div>

                    <div className="space-y-16 md:space-y-0">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-start md:items-center relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#1F4D36]/10 group">
                                        <span className="inline-block px-3 py-1 bg-[#1F4D36]/10 text-[#1F4D36] text-xs font-bold rounded-full mb-4">
                                            STEP {step.id}
                                        </span>
                                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1F4D36] transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-[#1F4D36] border-4 border-[#F5FAF6] shadow-lg flex items-center justify-center text-white z-10 relative">
                                        <div className="scale-75">
                                            {step.icon}
                                        </div>
                                        {/* Pulse Effect */}
                                        <div className="absolute inset-0 rounded-full bg-[#1F4D36] -z-10 animate-ping opacity-20"></div>
                                    </div>
                                </div>

                                {/* Empty side for alignment */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
