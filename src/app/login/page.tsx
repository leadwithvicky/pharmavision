import LoginForm from "@/components/login/LoginForm";
import LoginVisual from "@/components/login/LoginVisual";

export default function LoginPage() {
    return (
        <main className="w-full min-h-screen bg-[#f8fbfa] flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-[1600px] h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex relative">

                {/* Left Side: Form */}
                <div className="w-full md:w-1/2 h-full">
                    <LoginForm />
                </div>

                {/* Right Side: Visual */}
                <div className="hidden md:block w-1/2 h-full p-4">
                    <LoginVisual />
                </div>

            </div>
        </main>
    );
}
