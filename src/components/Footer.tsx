import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, ShieldPlus, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-secondary pt-20 pb-8 px-4 md:px-12 border-t border-primary/10 relative">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                {/* Brand Column */}
                <div className="lg:col-span-1 space-y-6">
                    <Link href="/" className="inline-block">
                        <img src="/logo.png" alt="Pharmavision" className="h-14 w-auto object-contain" />
                    </Link>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 leading-tight uppercase">
                        Learn The Skills That Global Pharma Trusts
                    </h2>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors cursor-pointer"><Instagram size={16} /></div>
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors cursor-pointer"><Facebook size={16} /></div>
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors cursor-pointer"><Twitter size={16} /></div>
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors cursor-pointer"><Youtube size={16} /></div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h3 className="font-bold text-gray-900 uppercase tracking-wider">Quick</h3>
                    <ul className="space-y-3 text-sm font-medium text-gray-700">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/courses" className="hover:text-primary transition-colors">Our Course</Link></li>
                        <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                        <li><Link href="/#blogs" className="hover:text-primary transition-colors">Blogs</Link></li>
                        <li><Link href="/#testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="space-y-6">
                    <h3 className="font-bold text-gray-900 uppercase tracking-wider">Resources</h3>
                    <ul className="space-y-3 text-sm font-medium text-gray-700">
                        <li><Link href="/#process" className="hover:text-primary transition-colors">Drug Discovery Process</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">Government Logos</Link></li>
                        <li><Link href="/pricing" className="hover:text-primary transition-colors">FAQs</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">How it Works</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Business Hours */}
                <div className="space-y-6">
                    <h3 className="font-bold text-gray-900 uppercase tracking-wider">Business Hours</h3>
                    <div className="space-y-3 text-sm font-medium text-gray-700">
                        <p>Mon - Fri (10Am - 9Pm)</p>
                        <p>Sat - Sun (9Am - 8Pm)</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h3 className="font-bold text-gray-900 uppercase tracking-wider">Contact Info</h3>
                    <div className="space-y-4 text-sm font-medium text-gray-700">
                        <div className="flex gap-3">
                            <Phone size={18} className="text-primary flex-shrink-0" />
                            <span>+91-XXXX-XXX-XXX</span>
                        </div>
                        <div className="flex gap-3">
                            <MapPin size={18} className="text-primary flex-shrink-0" />
                            <div>
                                <p>Your Address Here</p>
                                <p>Open for education technology.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Mail size={18} className="text-primary flex-shrink-0" />
                            <span>hello@pharmavision.com</span>
                        </div>
                    </div>

                    {/* Update / Email Form */}
                    <div className="pt-8">
                        <h3 className="font-bold text-gray-900 uppercase tracking-wider mb-4">Update</h3>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white border border-primary/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary"
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-[1400px] mx-auto pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs font-bold text-gray-800">
                    © 2024 visiontech. All Rights Reserved.
                </p>

                <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors shadow-lg">
                    <ArrowUp size={20} />
                </button>
            </div>
        </footer>
    );
}
