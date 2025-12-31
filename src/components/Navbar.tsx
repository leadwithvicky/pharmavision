"use client";

import Link from "next/link";
import { ShieldPlus, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Our Course", href: "/courses" },
        { name: "Pricing", href: "/pricing" },
        // { name: "Blogs", href: "/blogs" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-4 md:px-12 flex items-center justify-between bg-secondary/90 backdrop-blur-md border-b border-white/20 shadow-sm transition-all">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center gap-0 group z-50 relative">
                <img src="/logo.png" alt="Pharmavision" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-gray-700 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
                {/* Login Button */}
                <Link href="/login" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-widest   shadow-lg hover:bg-green-500 transition-colors border border-primary/10">
                    Login
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-primary z-50 relative p-2"
                aria-label="Toggle menu"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 h-[100dvh] bg-secondary z-40 flex flex-col transition-all duration-700 ease-in-out md:hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>

                {/* Decorative Background Elements */}
                <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-40 right-0 w-80 h-80 bg-primary/10 rounded-full translate-x-1/3 blur-3xl"></div>

                <div className="relative flex flex-col items-center justify-center flex-grow gap-8 z-10 pt-20">
                    <div className="flex flex-col items-center gap-6">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-3xl font-serif text-primary font-bold hover:tracking-widest transition-all duration-300 transform active:scale-90"
                                style={{ transitionDelay: `${i * 50}ms` }}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="w-16 h-0.5 bg-primary/20 my-4"></div>

                    <Link
                        href="/login"
                        className="bg-primary text-white px-16 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-green-600 active:scale-95 transition-all transform"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>

                    {/* Social Links shown in mobile menu */}
                    <div className="mt-12 flex gap-8 text-primary/40">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Pharmavision 2025</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
