
import { Settings,Send,Trash,Paperclip,ShieldAlert,UserPlus } from "lucide-react"
export const Navbar=() =>{
  return(
    <div className="flex items-center justify-center p-2 shadow-md border-1">
        <div className="mx-auto">
            <p className="text-gray-950 font-bold text-4xl">Chat App</p>
        </div>
        <Settings />
        <Send />
    </div>  
  )
}