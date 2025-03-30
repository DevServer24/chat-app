import { MainHero } from "@/components/ui/mainHero";
import { MainNavbar } from "@/components/ui/mainNavbar";

export default function App(){
  return(
    <div className="min-h-screen bg-black text-white">
      <MainNavbar/>
      <MainHero />
    </div>
  )
}