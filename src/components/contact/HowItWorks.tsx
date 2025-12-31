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
        <section className="w-full bg-[#F5FAF6] overflow-hidden relative">
            {/* ==========================================
                DESKTOP VERSION (Large Screens)
                ========================================== */}
            <div className="hidden lg:block py-24 px-8 max-w-[1000px] mx-auto relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-5xl font-bold text-[#1F4D36] uppercase tracking-wide mb-6"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed"
                    >
                        Your pathway to a successful career in just 5 simple steps.
                    </motion.p>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1F4D36]/20 -translate-x-1/2"></div>
                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex items-center relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
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
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-[#1F4D36] border-4 border-[#F5FAF6] shadow-lg flex items-center justify-center text-white z-10 relative">
                                        <div className="scale-75">{step.icon}</div>
                                        <div className="absolute inset-0 rounded-full bg-[#1F4D36] -z-10 animate-ping opacity-20"></div>
                                    </div>
                                </div>
                                <div className="w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ==========================================
                MOBILE VERSION (Small Screens)
                ========================================== */}
            <div className="lg:hidden w-full py-16 px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl font-bold text-[#1F4D36] uppercase tracking-wider mb-4">
                        How It Works
                    </h2>
                    <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">
                        5 Simple steps to success
                    </p>
                </div>

                <div className="relative pl-8 pr-2">
                    {/* Simplified Timeline Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20"></div>

                    <div className="space-y-10">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative">
                                {/* Side Icon Node */}
                                <div className="absolute -left-8 top-0 bg-[#F5FAF6] p-1">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
                                        <div className="scale-[0.6]">{step.icon}</div>
                                    </div>
                                </div>

                                {/* Creative Step Card */}
                                <div className="bg-white/70 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-white/50 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-bold text-primary tracking-[0.2em]">{step.id}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                                    </div>
                                    <h3 className="font-serif text-lg font-bold text-gray-900">{step.title}</h3>
                                    <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
