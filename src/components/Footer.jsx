import { ChevronUp } from "lucide-react";
import portrait from "@/assets/HeaderHead.png"

export default function Footer(){
   const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return(
    <footer className="mt-20 h-fit text-white flex flex-col items-center gap-5">
       <div className="flex flex-col items-center">
        <button className="flex flex-col items-center w-10 pt-5 cursor-pointer" onClick={(()=> scrollToSection("top"))}>{<ChevronUp/>}</button>
        <p className="cursor-pointer" onClick={(()=> scrollToSection("top"))}>Back to top</p>
        </div>
        <img src={portrait} alt="Portrait doodle" className="h-20" />
    </footer>
   
  )
}