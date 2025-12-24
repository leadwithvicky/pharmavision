import { ClipboardList, Zap, MessageSquare, Briefcase, Rocket } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            id: "01",
            title: "SUBMIT YOUR DETAILS",
            desc: "Fill out the quick form with your name, email, phone, and course interest.",
            icon: <ClipboardList size={24} />,
            align: "right"
        },
        {
            id: "02",
            title: "GET QUICK RESPONSE",
            desc: "Our support team contacts you within minutes to understand your requirements.",
            icon: <Zap size={24} />,
            align: "left"
        },
        {
            id: "03",
            title: "DISCUSS YOUR GOALS",
            desc: "Share your career goals so we can guide you toward the right program.",
            icon: <MessageSquare size={24} />,
            align: "right"
        },
        {
            id: "04",
            title: "RECEIVE A PERSONALIZED PLAN",
            desc: "Get course recommendations, pricing options, and learning pathways tailored to you.",
            icon: <Briefcase size={24} />,
            align: "left"
        },
        {
            id: "05",
            title: "START YOUR JOURNEY",
            desc: "Complete enrollment and begin learning with live classes and LMS access.",
            icon: <Rocket size={24} />,
            align: "right"
        }
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1000px] mx-auto">
                <h2 className="text-center font-serif text-3xl font-bold text-gray-900 uppercase tracking-widest mb-20">
                    How It Works
                </h2>

                <div className="relative flex flex-col gap-8 md:gap-0">
                    {/* Vertical Line for Desktop - tough to align perfectly with curves without SVG, using border logic per item */}

                    {steps.map((step, index) => (
                        <div key={step.id} className={`flex md:items-center gap-6 md:gap-12 relative group ${step.align === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                            {/* Text Side */}
                            <div className={`flex-1 ${step.align === 'left' ? 'md:text-left' : 'md:text-right'}`}>
                                <div className="bg-primary/5 p-2 rounded-lg inline-block md:hidden mb-2 text-primary font-bold">{step.id}</div>
                                <h3 className="font-serif text-xl font-bold uppercase mb-2">{step.title}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed max-w-sm ml-auto mr-auto md:ml-0 md:mr-0 inline-block">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Center Icon */}
                            <div className="relative z-10 flex-shrink-0">
                                {/* Number Tag on top of circle */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full md:block hidden shadow-md">
                                    {step.id}
                                </div>

                                <div className="w-16 h-16 rounded-full border-[3px] border-primary flex items-center justify-center bg-white text-gray-900 shadow-lg">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Empty Side for balance */}
                            <div className="flex-1 hidden md:block"></div>

                            {/* Connecting Curve (Simplified visual aid) */}
                            {index < steps.length - 1 && (
                                <div className={`absolute top-16 hidden md:block w-[50%] border-2 border-primary/30 border-dashed h-20 -z-0 rounded-[3rem] 
                            ${step.align === 'right'
                                        ? 'left-[50%] border-l-0 border-b-0 border-t-2 rounded-tl-none rounded-br-none' // Curve Right Down
                                        : 'right-[50%] border-r-0 border-b-0 border-t-2 rounded-tr-none rounded-bl-none' // Curve Left Down
                                    }
                        `}></div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
