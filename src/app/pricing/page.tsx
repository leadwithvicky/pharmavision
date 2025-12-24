import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/pricing/PricingPlans";
import FAQSection from "@/components/pricing/FAQSection";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />
            <div className="pt-24">
                <PricingPlans />
                <FAQSection />
            </div>
            <Footer />
        </main>
    );
}
