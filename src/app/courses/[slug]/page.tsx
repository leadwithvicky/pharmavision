import { courses } from "@/data/courses";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseDetailHero from "@/components/courses/CourseDetailHero";
import CourseContent from "@/components/courses/CourseContent";

// Generate static params for all courses to enable SSG/ISR
export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.id,
    }));
}

export default async function CoursePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const course = courses.find((c) => c.id === params.slug);

    if (!course) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />
            <CourseDetailHero
                title={course.title}
                headline={course.headline}
                image={course.heroImage}
            />
            <CourseContent course={course} />
            <Footer />
        </main>
    );
}
