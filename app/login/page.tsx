
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "../../lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("Firebase user:", userCredential.user);
      alert("Logged in successfully!");
      router.push("/");
    } catch (error) {
      console.error("Firebase login error:", error);
      alert("Failed to login: " + (error as Error).message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google successfully!");
      router.push("/home");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Failed to sign in with Google.");
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-amber-700">Welcome Back ☕</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm text-gray-200">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
              placeholder="you@example.com" />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm text-gray-200">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full py-2 mt-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg transition duration-300">
            Log In
          </button>
        </form>

        <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-2 mt-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition duration-300 text-gray-800 font-semibold">
          <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
            <path d="M533.5 278.4c0-17.6-1.6-34.4-4.6-50.8H272v95.9h146.9c-6.3 33.8-25.2 62.5-53.8 81.7v67.7h87c51-47 80.4-116.1 80.4-194.5z" fill="#4285F4"/>
            <path d="M272 544.3c72.6 0 133.6-24 178.1-65.3l-87-67.7c-24.2 16.3-55.1 26-91.1 26-69.8 0-128.9-47.2-150-110.4H33.8v69.5C78 486.7 167 544.3 272 544.3z" fill="#34A853"/>
            <path d="M122 322.9c-10.4-30.6-10.4-63.7 0-94.3v-69.5H33.8c-22.2 44.7-22.2 97.7 0 142.4l88.2-0.6z" fill="#FBBC05"/>
            <path d="M272 107.7c37.5 0 71.1 12.9 97.5 34.6l73-73C405.7 28.1 344.7 4 272 4 167 4 78 61.6 33.8 148.7l88.2 69.5C143.1 155 202.2 107.7 272 107.7z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <p className="text-sm text-center text-gray-300 mt-4">
          Don’t have an account? <a href="/register" className="text-amber-400 hover:underline">Register here</a>
        </p>
      </div>
    </div>
  );
}
