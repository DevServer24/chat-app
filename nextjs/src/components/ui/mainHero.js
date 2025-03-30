import { Button } from "./button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
export const MainHero =() =>{
  return(
    <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
       <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Connect <span className="text-green-500">Instantly</span> with Anyone,{" "}
            <span className="text-orange-500">Anywhere</span>
          </h1>
          <p className="text-xl text-gray-300">
            Experience real-time messaging with our lightning-fast, secure, and feature-rich chat platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-medium text-lg px-8 py-6">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative h-[500px] w-full">
            <div className="absolute top-0 right-0 h-[450px] w-[300px] bg-green-500 rounded-2xl -rotate-6 transform shadow-xl"></div>
            <div className="absolute top-10 right-10 h-[450px] w-[300px] bg-orange-500 rounded-2xl rotate-3 transform shadow-xl"></div>
            <div className="absolute top-5 right-5 h-[450px] w-[300px] bg-black border-2 border-red-500 rounded-2xl transform shadow-2xl z-10 overflow-hidden">
              <Image
                src="/placeholder.svg?height=900&width=600"
                alt="Chat App Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
    </div>
  )
}