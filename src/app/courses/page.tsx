import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesHero from "@/components/courses/CoursesHero";
import TrainingSection from "@/components/TrainingSection";

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />
            <CoursesHero />
            <div className="pt-20">
                <TrainingSection />
            </div>
            <Footer />
        </main>
    );
}
