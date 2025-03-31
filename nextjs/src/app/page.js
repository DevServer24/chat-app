import { MainFeatures } from "@/components/mainFeatures";
import { MainHero } from "@/components/ui/mainHero";
import { MainNavbar } from "@/components/ui/mainNavbar";

export default function App(){
  console.log(process.env.NEXT_PUBLIC_SIGN_UP)
  return(
    <div className="min-h-screen bg-black text-white">
      <MainNavbar/>
      <MainHero />
      <MainFeatures />
    </div>
  )
}