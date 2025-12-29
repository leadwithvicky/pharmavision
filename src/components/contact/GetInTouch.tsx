import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function GetInTouch() {
    return (
        <section id="get-in-touch" className="w-full py-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left: Form */}
                <div className="bg-primary rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-8">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-2">Get In Touch</h2>
                        <p className="text-[10px] md:text-xs text-green-100 opacity-80 uppercase tracking-wide">We're here to guide you toward the right course and career pathway.</p>
                    </div>

                    <form className="space-y-8">
                        <div className="relative">
                            <input type="text" placeholder="NAME" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 text-xs font-bold uppercase tracking-wider" />
                        </div>
                        <div className="relative">
                            <input type="email" placeholder="EMAIL" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 text-xs font-bold uppercase tracking-wider" />
                        </div>
                        <div className="relative">
                            <input type="tel" placeholder="PHONE" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 text-xs font-bold uppercase tracking-wider" />
                        </div>
                        <div className="relative">
                            <input type="text" placeholder="COURSE OF INTEREST" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 text-xs font-bold uppercase tracking-wider" />
                        </div>
                        <div className="relative">
                            <textarea placeholder="MESSAGE" rows={4} className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 text-xs font-bold uppercase tracking-wider resize-none"></textarea>
                        </div>

                        <div className="flex justify-center pt-4">
                            <button type="submit" className="bg-white text-primary px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-green-50 transition-colors shadow-lg">
                                Send Message ---→
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right: Info */}
                <div className="space-y-12 py-8">
                    <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed text-sm">
                            Get personalized guidance for courses, career paths, and enrollment support. Our team is ready to answer your questions and help you choose the right program. Reach out anytime for assistance with pricing, placements, or learning plans. Your journey in healthcare and pharma begins with a single message start today.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"><Instagram size={16} /></div>
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"><Facebook size={16} /></div>
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"><Twitter size={16} /></div>
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"><Linkedin size={16} /></div>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <Phone className="text-primary" size={20} />
                                <span className="font-bold text-gray-900 text-sm">+91 XXXX-XXX-XXX</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="text-primary mt-1" size={20} />
                                <div className="text-sm text-gray-900">
                                    <span className="font-bold block">Your Address Here</span>
                                    <span className="text-gray-600">Open for education technology.</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-primary" size={20} />
                                <span className="font-bold text-gray-900 text-sm">hello@pharmavision.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <div className="w-full aspect-[20/9] rounded-[2rem] overflow-hidden border border-gray-200 shadow-sm relative z-0">
                        <iframe
                            src="https://maps.google.com/maps?q=VisionTech+PVT+LTD&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="VisionTech Location"
                        ></iframe>
                    </div>

                </div>

            </div>
        </section>
    );
}
