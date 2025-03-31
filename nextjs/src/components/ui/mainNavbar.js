import { MessageCircle } from "lucide-react"
import { Button } from "./button"
import Link from "next/link"
export const MainNavbar =() =>{
  return(
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
       <div className="flex items-center gap-2">
          <MessageCircle className="h-8 w-8 text-green-500" />
          <span className="text-2xl font-bold">ChatNow</span>
        </div>
        <div className="hidden md:flex gap-8">
         
        </div>
        <div>
          <Link href={'/sign-up'}><Button className="bg-green-500 hover:bg-green-600 text-black font-medium">Sign Up Free</Button></Link>
        </div>
    </div>
  )
}