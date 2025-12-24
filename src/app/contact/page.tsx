import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import GetInTouch from "@/components/contact/GetInTouch";
import HowItWorks from "@/components/contact/HowItWorks";
import ReadyToSupport from "@/components/contact/ReadyToSupport";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />
            <ContactHero />
            <GetInTouch />
            <HowItWorks />
            <ReadyToSupport />
            <Footer />
        </main>
    );
}
