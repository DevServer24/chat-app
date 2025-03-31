"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation"; // For redirecting to dashboard

export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // For loading state
  const router = useRouter(); // Initialize router to redirect after login
  const signInUrl = process.env.NEXT_PUBLIC_SIGN_IN; // Your sign-in endpoint

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading indicator

    try {
      const response = await fetch(signInUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Sign-in failed");
      }

      console.log("Sign-in successful:", result);

      // Store the JWT token in localStorage
      localStorage.setItem("jwtToken", result.token); // Assuming the token is returned as `result.token`

      // Redirect to the dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Sign-in Error:", error.message);
      alert(error.message); // Display error message to user
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
        <form onSubmit={handleSubmit} className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
            <p className="text-sm text-muted-foreground">Enter your email and password to sign in</p>
          </div>

          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            value={data.email} // controlled component
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            value={data.password} // controlled component
          />

          <Button className="w-full cursor-pointer transition duration-500" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"} {/* Show loading text */}
          </Button>
        </form>

        <div>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/sign-up" className="underline underline-offset-4 hover:text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4"></div>
    </div>
  );
}
