"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, ShieldPlus, ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (id: string) => {
        setOpenSection(openSection === id ? null : id);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Helper for Accordion Sections
    const AccordionSection = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => {
        const isOpen = openSection === id;
        return (
            <div className="border-b border-primary/5 md:border-none">
                <button
                    onClick={() => toggleSection(id)}
                    className="w-full flex items-center justify-between py-5 md:py-0 md:mb-6 md:cursor-default group"
                >
                    <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm md:text-base group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <div className="md:hidden text-primary transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <ChevronDown size={20} />
                    </div>
                </button>

                {/* Mobile View */}
                <div className="md:hidden overflow-hidden">
                    <AnimatePresence initial={false}>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="pb-6 pt-2 flex flex-col items-center text-center">
                                    {children}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Desktop View (Always Visible) */}
                <div className="hidden md:block">
                    {children}
                </div>
            </div>
        );
    };

    return (
        <footer className="w-full bg-secondary pt-16 md:pt-24 pb-8 px-6 md:px-12 border-t border-primary/10 relative overflow-hidden">

            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 md:gap-12 mb-16">

                    {/* Brand Column - Always Visible */}
                    <div className="lg:col-span-1 space-y-8 mb-12 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="inline-block hover:scale-105 transition-transform">
                            <img src="/logo.png" alt="Pharmavision" className="h-14 md:h-16 w-auto object-contain" />
                        </Link>
                        <h2 className="font-serif text-2xl md:text-2xl font-bold text-gray-900 leading-tight uppercase max-w-xs">
                            Learn The Skills That Global Pharma Trusts
                        </h2>
                        <div className="flex gap-5">
                            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white border border-secondary shadow-sm text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer hover:-translate-y-1">
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <AccordionSection id="quick" title="Quick">
                        <ul className="space-y-4 text-sm font-bold text-gray-600 uppercase tracking-widest">
                            <li><Link href="/" className="hover:text-primary transition-colors block md:inline">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors block md:inline">About Us</Link></li>
                            <li><Link href="/courses" className="hover:text-primary transition-colors block md:inline">Our Course</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors block md:inline">Pricing</Link></li>
                            <li><Link href="/#testimonials" className="hover:text-primary transition-colors block md:inline">Testimonials</Link></li>
                        </ul>
                    </AccordionSection>

                    {/* Resources */}
                    <AccordionSection id="resources" title="Resources">
                        <ul className="space-y-4 text-sm font-bold text-gray-600 uppercase tracking-widest">
                            <li><Link href="/about#government" className="hover:text-primary transition-colors block md:inline">Government Logos</Link></li>
                            <li><Link href="/pricing#faq" className="hover:text-primary transition-colors block md:inline">FAQs</Link></li>
                            <li><Link href="/#process" className="hover:text-primary transition-colors block md:inline">How it Works</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors block md:inline">Contact Us</Link></li>
                        </ul>
                    </AccordionSection>

                    {/* Business Hours */}
                    <AccordionSection id="hours" title="Business Hours">
                        <div className="space-y-4 text-sm font-bold text-gray-600 uppercase tracking-widest">
                            <p className="flex flex-col md:block">
                                <span className="text-[10px] text-gray-400 block mb-1">Mon - Fri</span>
                                10Am - 9Pm
                            </p>
                            <p className="flex flex-col md:block">
                                <span className="text-[10px] text-gray-400 block mb-1">Sat - Sun</span>
                                9Am - 8Pm
                            </p>
                        </div>
                    </AccordionSection>

                    {/* Contact Info Wrap */}
                    <AccordionSection id="contact" title="Contact Info">
                        <div className="space-y-6 text-sm font-bold text-gray-600 uppercase tracking-widest">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                                <Phone size={18} className="text-primary flex-shrink-0" />
                                <span>+91-XXXX-XXX-XXX</span>
                            </div>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                                <MapPin size={18} className="text-primary flex-shrink-0" />
                                <div className="text-center md:text-left">
                                    <p>Your Address Here</p>
                                    <p className="text-[10px] text-gray-400">Open for education technology.</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                                <Mail size={18} className="text-primary flex-shrink-0" />
                                <span>hello@pharmavision.com</span>
                            </div>

                            {/* Mobile Email Update */}
                            <div className="pt-4 w-full md:hidden">
                                <input
                                    type="email"
                                    placeholder="Newsletter..."
                                    className="w-full bg-white border border-primary/10 rounded-2xl px-6 py-4 text-xs focus:outline-none focus:border-primary shadow-inner"
                                />
                            </div>
                        </div>
                    </AccordionSection>
                </div>

                {/* Footer Bottom */}
                <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-[10px] font-black text-gray-800 uppercase tracking-[0.4em]">
                            visiontech 2024
                        </p>
                        <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">
                            All Rights Reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex gap-6 text-[9px] font-bold text-gray-400 uppercase tracking-widest hidden md:flex">
                            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
                            <Link href="/terms" className="hover:text-primary">Terms</Link>
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center hover:bg-green-600 transition-all shadow-xl shadow-primary/20 cursor-pointer active:scale-90"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
