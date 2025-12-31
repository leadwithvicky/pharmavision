import { ClipboardCheck, FlaskConical, Microscope, ShieldCheck } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "DISCOVERY",
        years: "4 - 7 YEARS",
        mission: "To understand the disease and identify a biological target that can be safely and effectively modified.",
        approach: [
            "Study disease pathways",
            "Identify & validate drug targets",
            "Screen large compound libraries",
            "Select and optimize lead molecules",
        ],
        core: "Early research, computational modeling, biomarker identification, and assay development.",
        impact: "A validated target and optimized lead candidates ready for pre-clinical evaluation.",
        icon: Microscope,
    },
    {
        id: "02",
        title: "PRECLINICAL STUDIES",
        years: "3 - 6 YEARS",
        mission: "To ensure the drug is safe enough to test in humans and behaves predictably inside the body.",
        approach: [
            "Conduct in-vitro and animal toxicology studies",
            "Evaluate ADME (absorption, metabolism)",
            "Determine safe starting dose for humans",
            "Develop early formulations",
        ],
        core: "Toxicology, pharmacology, pharmacokinetics, formulation development, and safety profiling.",
        impact: "An IND-ready safety package enabling regulatory approval to begin clinical trials.",
        icon: FlaskConical,
    },
    {
        id: "03",
        title: "CLINICAL DEVELOPMENT",
        years: "4 - 7 YEARS",
        mission: "To confirm the drug's safety, efficacy, dosage, and risk-benefit in humans for regulatory approval.",
        approach: [
            "Phase I: Test safety in healthy volunteers",
            "Phase II: Test efficacy + dose in patients",
            "Phase III: Large-scale validation across diverse populations",
            "Compile clinical data for regulatory submission",
        ],
        core: "Human trials, real-world response evaluation, safety monitoring, and statistical analysis.",
        impact: "A complete clinical dossier supporting NDA/BLA submission for market approval.",
        icon: ClipboardCheck,
    },
    {
        id: "04",
        title: "MARKET APPROVAL",
        years: "1 - 2 YEARS",
        mission: "To ensure the drug reaches patients, remains safe post-launch, and maintains long-term commercial success.",
        approach: [
            "Launch & distribution strategy",
            "Medical education & market access activities",
            "Ongoing pharmacovigilance (adverse event monitoring)",
            "Phase IV post-marketing studies",
        ],
        core: "Commercial rollout, stakeholder engagement, real-world evidence collection, and safety surveillance.",
        impact: "Sustained market growth, expanded patient reach, and long-term safety assurance.",
        icon: ShieldCheck,
    },
];

export default function ProcessSection() {
    return (
        <section id="process" className="w-full py-20 px-4 md:px-8 bg-[#f8faf9] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="font-serif text-4xl md:text-5xl text-[#0A4D5C] font-bold">
                        DRUG DISCOVERY PROCESS
                    </h2>
                    <p className="font-bold text-gray-800 tracking-wide text-sm md:text-base uppercase">
                        MAPPING THE PATH FROM RESEARCH TO REAL-WORLD RESULTS.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        // Even index (0, 2) => White Card (Step 1, 3)
                        // Odd index (1, 3) => Dark Card (Step 2, 4)
                        const isDark = index % 2 !== 0;

                        return (
                            <div
                                key={step.id}
                                className={`relative flex flex-col pt-12 pb-8 px-6 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-[5rem] shadow-xl transition-transform hover:-translate-y-2 duration-300 min-h-[500px] md:min-h-[600px]
                                    ${isDark
                                        ? "bg-[#0F5A6D] text-white"
                                        : "bg-white text-[#0A4D5C] border border-[#0A4D5C]"}
                                `}
                            >
                                {/* Floating Icon Badge */}
                                <div className={`absolute -top-8 left-8 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg z-20
                                    ${isDark
                                        ? "bg-white text-[#0A4D5C]"  // Dark card has white icon box
                                        : "bg-[#0A4D5C] text-white"} // White card has dark icon box
                                `}>
                                    <step.icon size={32} strokeWidth={1.5} />
                                </div>

                                {/* Years & Bar */}
                                <div className="flex items-center justify-end gap-3 mb-6">
                                    {/* The decorative bar */}
                                    <div className={`h-1.5 w-20 rounded-full ${isDark ? "bg-white" : "bg-[#0A4D5C]"}`}></div>
                                    <span className={`text-xs font-bold font-serif uppercase tracking-widest`}>
                                        {step.years}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-lg font-bold mb-8 text-center tracking-wide uppercase">
                                    {step.title}
                                </h3>

                                {/* Content Sections */}
                                <div className="space-y-6 text-[0.75rem] leading-relaxed flex-1 font-sans">
                                    <div>
                                        <h4 className="font-bold uppercase mb-1 tracking-wider text-[0.7rem] opacity-90">The Mission of This Phase</h4>
                                        <p className="opacity-80">{step.mission}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold uppercase mb-1 tracking-wider text-[0.7rem] opacity-90">Our Approach</h4>
                                        <ul className="space-y-1 list-disc pl-3 opacity-80 marker:text-[0.6rem]">
                                            {step.approach.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold uppercase mb-1 tracking-wider text-[0.7rem] opacity-90">Core Element</h4>
                                        <p className="opacity-80">{step.core}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold uppercase mb-1 tracking-wider text-[0.7rem] opacity-90">The Impact</h4>
                                        <p className="opacity-80">{step.impact}</p>
                                    </div>
                                </div>

                                {/* ID Number */}
                                <div className={`mt-8 pt-4 border-t ${isDark ? "border-white/20" : "border-[#0A4D5C]/20"}`}>
                                    <span className="font-serif text-2xl font-bold opacity-100">{step.id}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
