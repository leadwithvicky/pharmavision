import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import TrainingSection from "@/components/TrainingSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import BlogsSection from "@/components/BlogsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden bg-secondary">
      {/* Background decoration */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-green-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <Navbar />
      <Hero />
      <ProcessSection />
      <TrainingSection />
      <WhyChooseUs />
      <AboutSection />
      <BlogsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
