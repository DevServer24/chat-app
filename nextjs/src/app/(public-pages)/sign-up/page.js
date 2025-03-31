"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function SignUp() {
const router = useRouter()
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",

  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const signUpUrl = process.env.NEXT_PUBLIC_SIGN_UP;

  console.log("SIGNUP URL:", signUpUrl); // Debugging

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(signUpUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Signup failed");
      }

      console.log("Signup successful:", result);
      alert("Sign up successfully!");
      localStorage.setItem("jwtToken", result.token);
      router.push("/dashboard");
    } catch (error) {
      console.error("Signup Error:", error.message);
      alert(error.message);
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
    <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
      <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
        <form onSubmit={handleSubmit} className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your information below to create your account</p>
          </div>

         
          <Input type="text" name="name" placeholder="Name" onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} />

          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <Button className="w-full cursor-pointer transition duration-500" type="submit">
            Create account
          </Button>
        </form>

        <div>
       
         

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/sign-in" className="underline underline-offset-4 hover:text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
        <Image src={"/sign-up.png"} width={1200} height={1200} alt="sign-up" />
      </div>
    </div>
  );
}
