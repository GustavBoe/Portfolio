import { Outlet } from "react-router-dom"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ScrollToTop from "@/components/ScrollToTop"
export default function AppLayout(){
  return(
    
    <div className="min-h-screen flex flex-col from-[#52796f] to-20% to-[#354f52] bg-linear-to-b">
      <ScrollToTop/>
      <Header/>
      <main className="flex-1 flex flex-col items-center  text-white">
        <Outlet/>
      </main>
      <Footer/>
    </div>
     
  )
}