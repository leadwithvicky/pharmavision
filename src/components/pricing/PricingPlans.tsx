import { Check } from "lucide-react";

export default function PricingPlans() {
    type PricingPlan = {
        name: string;
        description: string;
        price: string;
        color: string;
        textColor: string;
        buttonColor: string;
        features: string[];
        background?: string;
    };

    const plans: PricingPlan[] = [
        {
            name: "BASIC PLAN",
            description: "Perfect for learners who want essential training.",
            price: "₹7,999/-",
            color: "bg-gray-100",
            textColor: "text-gray-900",
            buttonColor: "bg-gray-900 text-white",
            background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
            features: [
                "LIVE CLASSES (1x WEEKLY)",
                "ACCESS TO CORE MODULES",
                "DOWNLOADABLE STUDY MATERIALS",
                "PRACTICE QUIZZES & ASSIGNMENTS",
                "BASIC LMS ACCESS",
                "EMAIL SUPPORT",
                "COURSE COMPLETION CERTIFICATE",
                "PLACEMENT ASSISTANCE (BASIC)",
                "PROGRESS TRACKING DASHBOARD",
                "DOUBT-CLEARING SUPPORT",
                "INTRO-LEVEL CASE EXAMPLES",
                "MONTHLY LEARNING REPORTS"
            ]
        },
        {
            name: "PRO PLAN — (MOST POPULAR)",
            description: "Best for learners seeking full course and career prep.",
            price: "₹12,999/-",
            color: "bg-emerald-600",
            textColor: "text-white",
            buttonColor: "bg-white text-emerald-800",
            background: "linear-gradient(to right, #093028, #237A57)",
            features: [
                "LIVE CLASSES (2x WEEKLY)",
                "FULL MODULE ACCESS + ADVANCED CONTENT",
                "REAL-WORLD CASE STUDIES & PROJECTS",
                "TEMPLATES, CHECKLISTS, AND EXAM PREP MATERIAL",
                "1-ON-1 MENTORSHIP SESSIONS",
                "RESUME + INTERVIEW PREPARATION",
                "PRIORITY PLACEMENT SUPPORT",
                "EXTENDED LMS ACCESS",
                "ADVANCED QUIZZES & MOCK TESTS",
                "EXTRA DOWNLOADABLE RESOURCES",
                "PEER DISCUSSION GROUPS",
                "WEEKLY PERFORMANCE FEEDBACK"
            ]
        },
        {
            name: "PREMIUM PLAN",
            description: "Great for pharma & CRO aspirants.",
            price: "₹18,999/-",
            color: "bg-gradient-to-br from-[#0b0b0b] via-[#1a1a1a] to-[#2b2b2b]",
            textColor: "text-gray-900",
            buttonColor: "bg-[#e6c87a] text-black",
            background: `linear-gradient(
  90deg,
  #8E6B1F 0%,
  #B88A2E 20%,
  #E1B94F 40%,
  #F7E08A 50%,
  #E1B94F 60%,
  #B88A2E 80%
)`,
            features: [
                "UNLIMITED LMS ACCESS (LIFETIME)",
                "ALL COURSE VIDEOS + UPDATES FOREVER",
                "ADVANCED CASE SIMULATIONS",
                "EXCLUSIVE INDUSTRY MASTERCLASSES",
                "DEDICATED CAREER COACH",
                "JOB REFERRAL SUPPORT",
                "PROJECT REVIEW & PERSONALIZED FEEDBACK",
                "PRIORITY ACCESS TO NEW COURSE LAUNCHES",
                "PORTFOLIO-BUILDING GUIDANCE",
                "CERTIFICATION BADGE UPGRADES",
                "EARLY ACCESS TO WORKSHOPS",
                "INDUSTRY NETWORKING SESSIONS"
            ]
        }
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-secondary">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-3xl font-bold text-primary uppercase tracking-wider">
                        Pricing
                    </h2>
                    <h3 className="font-bold text-xl md:text-2xl text-gray-900 uppercase tracking-wide">
                        Invest in Skills That Fast-Track Your Pharma Career
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Get flexible, affordable plans designed for learners at every stage whether you're starting fresh or advancing into specialized pharma roles. Every plan includes live training, LMS access, certification, and career support to help you grow faster with confidence.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, i) => (
                        <div key={i} style={plan.background ? { background: plan.background } : undefined} className={`rounded-3xl p-8 flex flex-col h-full shadow-xl hover:scale-105 transition-transform duration-300 ${plan.color} ${plan.textColor}`}>

                            <h3 className="font-serif text-xl font-bold uppercase mb-2">{plan.name}</h3>
                            <p className="text-xs font-medium opacity-90 mb-4 min-h-[2.5rem]">{plan.description}</p>
                            <div className="text-3xl font-bold mb-8">{plan.price}</div>

                            <button className={`w-full py-3 rounded-full font-bold text-sm uppercase mb-8 shadow-lg ${plan.buttonColor}`}>
                                Get Started ----→
                            </button>

                            <div className="space-y-4 text-[0.7rem] font-bold uppercase tracking-wide">
                                <p className="opacity-80">Everything in {plan.name.split(' ')[0]}</p>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-2">
                                            <Check className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
