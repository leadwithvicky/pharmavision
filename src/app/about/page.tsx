import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import PartnersSection from "@/components/about/PartnersSection";
import WhoWeAre from "@/components/about/WhoWeAre";
import VisionariesSection from "@/components/about/VisionariesSection";
import GovernmentSection from "@/components/about/GovernmentSection";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />
            <AboutHero />
            <WhoWeAre />
            <VisionariesSection />
            <PartnersSection />
            <GovernmentSection />
            <Footer />
        </main>
    );
}
