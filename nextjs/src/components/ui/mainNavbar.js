import { MessageCircle } from "lucide-react"
import { Button } from "./button"
export const MainNavbar =() =>{
  return(
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
       <div className="flex items-center gap-2">
          <MessageCircle className="h-8 w-8 text-green-500" />
          <span className="text-2xl font-bold">ChatNow</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#features" className="hover:text-green-400 transition-colors">
            Features
          </a>
          <a href="#testimonials" className="hover:text-green-400 transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="hover:text-green-400 transition-colors">
            Pricing
          </a>
        </div>
        




        <div>
          <Button className="bg-green-500 hover:bg-green-600 text-black font-medium">Sign Up Free</Button>
        </div>
    </div>
  )
}