'use client'
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { MessageSquare, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const router = useRouter();
  
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
        { email: formData.email, password: formData.password }
      );
  
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        localStorage.setItem("token", response.data.token);
        router.push("/chat-app");
      } else {
        alert(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.response?.data?.message || "An error occurred");
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <nav className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-orange-500" />
          <span className="font-bold text-xl">ChatApp</span>
        </Link>
      </nav>
    <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl border border-gray-800 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
            <p className="text-gray-400">Sign in to your ChatApp account</p>
          </div>
          <form className="space-y-6" onSubmit={handleSignIn}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <Input id="email" type="email" placeholder="Email Address" className="pl-10 w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" onChange={handleChange} value={formData.email} />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <Input id="password" type="password" placeholder="Password" className="pl-10 w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" onChange={handleChange} value={formData.password} />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg flex justify-center items-center">
              Sign In <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-orange-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Image src={'/sign-up.png'} width={4000} height={6000} alt="logo" />
      </div>
      </div>
    </div>
  );
}
