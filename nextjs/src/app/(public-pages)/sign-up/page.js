'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MessageSquare, Mail, Lock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
export default function SignInPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Registration failed");
        return;
      }
  
      const data = await response.json();
      console.log("User registered:", data);
      router.push("/chat-app");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center px-4 py-12">
        {/* Form Section */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Create an account</h1>
              <p className="text-gray-400">Join thousands of users on ChatApp</p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <Input id="name" type="text" placeholder="Full Name" className="pl-10 w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" onChange={handleChange} value={formData.name} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <Input id="email" type="email" placeholder="Email Address" className="pl-10 w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" onChange={handleChange} value={formData.email} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <Input id="password" type="password" placeholder="Password" className="pl-10 w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" onChange={handleChange} value={formData.password} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <Input id="confirmPassword" type="password" placeholder="Confirm Password" className="pl-10 w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" onChange={handleChange} value={formData.confirmPassword} />
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg flex justify-center items-center">
                Create Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={'/sign-up.png'} width={500} height={500} alt="Sign Up Image" className="w-full max-w-lg object-cover" />
        </div>
      </div>
    </div>
  );
};
