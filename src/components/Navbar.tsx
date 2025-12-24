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
                <div className="relative">
                    <ShieldPlus className="w-8 h-8 text-blue-600 fill-blue-600/10" />
                </div>
                <span className="text-primary font-bold text-sm tracking-wide">VisionPharma</span>
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
                <Link
                    href="/login"
                    className="bg-primary hover:bg-primary-hover text-white px-8 py-2 rounded-lg font-medium transition-all shadow-lg shadow-primary/20"
                >
                    Login
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-primary z-50 relative"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-secondary z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-serif text-primary font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/login"
                    className="mt-4 bg-primary text-white px-10 py-3 rounded-xl font-bold text-lg shadow-xl"
                    onClick={() => setIsOpen(false)}
                >
                    Login
                </Link>
            </div>
        </nav>
    );
}
