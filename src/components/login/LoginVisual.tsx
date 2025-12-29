import { ArrowUpRight } from "lucide-react";

export default function LoginVisual() {
    return (
        <div className="hidden md:flex w-full h-full bg-gradient-to-b from-[#1a5f48] to-[#0f3d2e] relative items-center justify-center p-12 overflow-hidden"
            style={{
                // Using simple rounded corners to approximate the shape. 
                // Ideally this would be a complex clip-path or SVG mask for exact match.
                borderTopLeftRadius: "3rem",
                borderBottomLeftRadius: "2rem", // Approximation
                borderBottomRightRadius: "3rem",
            }}
        >
            {/* Background Abstract Lines - Simulated with SVG */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 Q 50 100 100 50 T 200 50" stroke="white" fill="none" strokeWidth="0.5" />
                    <path d="M0 70 Q 50 120 100 70 T 200 70" stroke="white" fill="none" strokeWidth="0.5" />
                    <path d="M0 30 Q 50 80 100 30 T 200 30" stroke="white" fill="none" strokeWidth="0.5" />
                </svg>
                {/* Add a radial gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,var(--tw-gradient-stops))] from-transparent via-transparent to-[#0f3d2e]/80"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute top-24 right-20 bg-white rounded-2xl p-6 shadow-2xl max-w-[200px] text-center transform rotate-6 animate-float z-20">
                <div className="absolute top-2 right-2">
                    <ArrowUpRight size={20} className="text-gray-400" />
                </div>
                <div className="text-3xl font-serif font-bold text-green-700 mb-1">60%</div>
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-900 leading-tight">
                    Consistent Yearly Growth
                </p>
            </div>

            {/* Central Graphic (Simulated Molecule/Target) */}
            {/* Central Graphic (Simulated Molecule/Target) */}
            <div className="relative z-10 w-full h-[60%] flex items-center justify-center border-rounded-full">
                <img
                    src="/login.png"
                    alt="Login Visual"
                    className="w-full h-full object-contain scale-110"
                />
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-12 left-12 max-w-xs">
                <h3 className="font-serif text-xl font-bold text-white uppercase leading-snug tracking-wide">
                    Step Into a Platform Built for Patient Safety.
                </h3>
            </div>

            {/* Top Left Cutout Decoration (Simulated) */}
            <div className="absolute top-[-20px] left-[-20px] w-20 h-20 bg-[#f8fbfa] rounded-full"></div>
            {/* Bottom Right Cutout Decoration (Simulated) */}
            {/* <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 bg-[#f8fbfa] rounded-full"></div> */}

        </div>
    );
}
