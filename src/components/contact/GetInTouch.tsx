import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function GetInTouch() {
    return (
        <section id="get-in-touch" className="w-full bg-secondary overflow-hidden">
            {/* ==========================================
                DESKTOP VERSION (Large Screens)
                ========================================== */}
            <div className="hidden lg:grid max-w-[1300px] mx-auto py-20 px-8 grid-cols-2 gap-16 items-start">
                {/* Left: Form */}
                <div className="bg-primary rounded-[2.5rem] p-12 shadow-2xl">
                    <div className="text-center mb-8">
                        <h2 className="font-serif text-3xl font-bold text-white uppercase tracking-wider mb-2">Get In Touch</h2>
                        <p className="text-xs text-green-100 opacity-80 uppercase tracking-wide">We're here to guide you toward the right course and career pathway.</p>
                    </div>

                    <form className="space-y-8">
                        <div className="grid grid-cols-1 gap-4">
                            <input type="text" placeholder="NAME" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 text-xs font-bold uppercase tracking-wider" />
                            <input type="email" placeholder="EMAIL" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 text-xs font-bold uppercase tracking-wider" />
                            <input type="tel" placeholder="PHONE" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 text-xs font-bold uppercase tracking-wider" />
                            <input type="text" placeholder="COURSE OF INTEREST" className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 text-xs font-bold uppercase tracking-wider" />
                        </div>
                        <div className="relative">
                            <textarea placeholder="MESSAGE" rows={4} className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 text-xs font-bold uppercase tracking-wider resize-none"></textarea>
                        </div>

                        <div className="flex justify-center pt-2">
                            <button type="submit" className="bg-white text-primary px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-green-50 transition-colors shadow-lg w-auto">
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

                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-green-700 transition-colors"><Instagram size={16} /></div>
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-green-700 transition-colors"><Facebook size={16} /></div>
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-green-700 transition-colors"><Twitter size={16} /></div>
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-green-700 transition-colors"><Linkedin size={16} /></div>
                        </div>

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

            {/* ==========================================
                MOBILE VERSION (Small Screens)
                ========================================== */}
            <div className="lg:hidden w-full py-16 px-6 flex flex-col gap-12">
                {/* Form Card */}
                <div className="bg-primary rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    <div className="text-center mb-10 relative z-10">
                        <h2 className="font-serif text-2xl font-bold text-white uppercase tracking-wider mb-2">Get In Touch</h2>
                        <div className="w-12 h-0.5 bg-white/20 mx-auto mb-4"></div>
                        <p className="text-[10px] text-green-100/70 uppercase tracking-[0.1em] leading-relaxed px-4">
                            We're here to guide you toward the right course.
                        </p>
                    </div>

                    <form className="space-y-4 relative z-10">
                        {['NAME', 'EMAIL', 'PHONE'].map((f) => (
                            <input key={f} type="text" placeholder={f} className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 text-xs font-bold tracking-widest" />
                        ))}
                        <textarea placeholder="MESSAGE" rows={4} className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 text-xs font-bold tracking-widest resize-none"></textarea>
                        <button type="submit" className="bg-white text-primary py-4 rounded-[1.5rem] font-bold uppercase text-[10px] tracking-[0.2em] shadow-xl w-full active:scale-95 transition-transform mt-4">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info & Map */}
                <div className="space-y-12">
                    <p className="text-gray-600 text-xs leading-relaxed text-center px-4 font-medium">
                        Reach out anytime for assistance with pricing, placements, or learning plans. Your journey begins here.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-[2rem] shadow-md border border-secondary/50 flex flex-col items-center gap-3 text-center">
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary"><Phone size={20} /></div>
                            <span className="text-[10px] font-bold text-gray-900">+91 XXXX-XXX</span>
                        </div>
                        <div className="bg-white p-6 rounded-[2rem] shadow-md border border-secondary/50 flex flex-col items-center gap-3 text-center">
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary"><Mail size={20} /></div>
                            <span className="text-[10px] font-bold text-gray-900">hello@vision.com</span>
                        </div>
                    </div>

                    <div className="w-full aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-xl">
                        <iframe
                            src="https://maps.google.com/maps?q=VisionTech+PVT+LTD&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="VisionTech Location Mobile"
                        ></iframe>
                    </div>

                    {/* Socials Pill */}
                    <div className="flex justify-center gap-6 bg-white/50 backdrop-blur-sm py-4 rounded-full border border-white/50 max-w-[250px] mx-auto">
                        {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                            <Icon key={i} size={18} className="text-primary opacity-60 hover:opacity-100 transition-opacity" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
