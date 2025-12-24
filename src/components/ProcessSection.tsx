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
        <section id="process" className="w-full py-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-4xl text-primary font-bold">
                        DRUG DISCOVERY PROCESS
                    </h2>
                    <p className="font-bold text-gray-800 tracking-wide">
                        MAPPING THE PATH FROM RESEARCH TO REAL-WORLD RESULTS.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const isBlue = index % 2 !== 0; // Alternating style
                        return (
                            <div
                                key={step.id}
                                className={`flex flex-col rounded-3xl overflow-hidden relative shadow-lg transition-transform hover:-translate-y-2 duration-300
                  ${isBlue ? "bg-primary text-white" : "bg-white text-primary border border-gray-100"}
                `}
                                style={{
                                    // Custom heavy rounded corners effect
                                    borderRadius: "2rem",
                                    // To simulate the 'cut' corner at bottom right, we'd need clip-path or complex borders. 
                                    // For simplicity in this iteration, using standard rounded corners but adding a decorative element.
                                }}
                            >
                                {/* Floating Icon Badge */}
                                <div className={`absolute top-0 left-8 -translate-y-1/2 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md transform rotate-3
                    ${isBlue ? "bg-white text-primary" : "bg-primary text-white"}
                `}>
                                    <step.icon size={32} strokeWidth={1.5} />
                                </div>

                                {/* Card Content */}
                                <div className="p-8 pt-12 flex-1 flex flex-col">

                                    {/* Header */}
                                    <div className="flex justify-end mb-6">
                                        <span className={`text-xs font-bold py-1 px-3 border-b-2 
                        ${isBlue ? "border-white/30" : "border-primary/20"}
                    `}>
                                            {step.years}
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-xl font-bold mb-6 text-center tracking-wide">
                                        {step.title}
                                    </h3>

                                    <div className="space-y-6 text-[0.8rem] leading-relaxed flex-1">
                                        <div>
                                            <h4 className={`font-bold uppercase mb-2 text-[0.7rem] tracking-wider opacity-90`}>The Mission of This Phase</h4>
                                            <p className="opacity-90">{step.mission}</p>
                                        </div>

                                        <div>
                                            <h4 className={`font-bold uppercase mb-2 text-[0.7rem] tracking-wider opacity-90`}>Our Approach</h4>
                                            <ul className="space-y-1 list-disc pl-4 opacity-90 marker:text-[0.6rem]">
                                                {step.approach.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className={`font-bold uppercase mb-2 text-[0.7rem] tracking-wider opacity-90`}>Core Element</h4>
                                            <p className="opacity-90">{step.core}</p>
                                        </div>

                                        <div>
                                            <h4 className={`font-bold uppercase mb-2 text-[0.7rem] tracking-wider opacity-90`}>The Impact</h4>
                                            <p className="opacity-90">{step.impact}</p>
                                        </div>
                                    </div>

                                    {/* ID Number at bottom */}
                                    <div className="mt-8 pt-4 border-t border-current border-opacity-20">
                                        <span className="font-serif text-2xl font-bold opacity-80">{step.id}</span>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
