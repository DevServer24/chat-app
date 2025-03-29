'use client'
import Image from "next/image";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ChatAnimation from "../_components/chat-animation"
import Link from "next/link"
export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true)
  }, [])
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Connect with anyone, <span className="text-red-600">anywhere</span>
        </h1>
        <p
          className={`text-lg text-gray-600 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our messaging platform makes it easy to stay connected with friends, family, and colleagues. Send
          messages, share photos, and create group chats all in one place.
        </p>
        <div
          className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link href="/chat-app">
            <Button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-lg py-6 px-8">
              Start Chatting
            </Button>
          </Link>
          <Button variant="outline" className="w-full sm:w-auto text-lg py-6 px-8">
            Learn More
          </Button>
        </div>
      </div>
      <div
        className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <ChatAnimation />
      </div>
    </div>
  </section>
  );
};
