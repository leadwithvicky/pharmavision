"use client";

import { ShieldPlus } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
    return (
        <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">

            {/* Brand Header */}
            <div className="flex flex-col items-center mb-12">
                <div className="relative mb-2">
                    <ShieldPlus className="w-12 h-12 text-blue-600 fill-blue-600/10" />
                    {/* Small accent to match logo in image if needed */}
                </div>
                <span className="text-primary font-bold text-xl tracking-wide">pharmavision</span>
            </div>

            <h2 className="font-serif text-center text-2xl font-bold text-gray-900 mb-12 uppercase tracking-wide">
                Welcome Back!
            </h2>

            <form className="space-y-8 max-w-md mx-auto w-full">

                {/* Email Input - Custom Fieldset Style */}
                <div className="relative group">
                    <input
                        type="email"
                        className="peer w-full bg-gray-50/50 border border-gray-400 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-transparent"
                        placeholder="Email"
                    />
                    <label className="absolute -top-2.5 left-6 bg-[#f8fbfa] px-2 text-xs font-bold text-primary uppercase tracking-widest pointer-events-none transition-all peer-placeholder-shown:text-gray-500 peer-focus:text-primary">
                        ◆ Email ◆
                    </label>
                </div>

                {/* Password Input */}
                <div className="relative group">
                    <input
                        type="password"
                        className="peer w-full bg-gray-50/50 border border-gray-400 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-transparent"
                        placeholder="Password"
                    />
                    <label className="absolute -top-2.5 left-6 bg-[#f8fbfa] px-2 text-xs font-bold text-primary uppercase tracking-widest pointer-events-none transition-all peer-placeholder-shown:text-gray-500 peer-focus:text-primary">
                        ◆ Password ◆
                    </label>
                </div>

                {/* Options */}
                <div className="flex items-center justify-between text-[0.7rem] font-bold text-gray-500 uppercase tracking-wide">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                        <span>Remember Me</span>
                    </label>
                    <Link href="#" className="text-red-500 hover:underline">Forget Password ?</Link>
                </div>

                {/* Login Button */}
                <button className="w-full bg-[#1a3c34] text-white font-serif font-bold uppercase tracking-widest py-3 rounded-lg shadow-lg hover:bg-[#122e28] transition-all transform hover:scale-[1.02]">
                    Login
                </button>

                {/* Google Login */}
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2.5 hover:bg-white transition-colors text-xs font-bold text-gray-600 bg-transparent">
                    <FcGoogle size={18} />
                    <span>Login with Google</span>
                </button>

                {/* Footer Link */}
                <div className="text-center text-[0.7rem] font-bold uppercase tracking-wide text-gray-500 mt-8">
                    Or
                    <div className="mt-4">
                        Don't have an account? <Link href="#" className="text-gray-900 border-b border-gray-900">Sign Up</Link>
                    </div>
                </div>

            </form>

        </div>
    );
}
