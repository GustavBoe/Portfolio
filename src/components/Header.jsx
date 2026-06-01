import { useRef, useState, useEffect } from "react";
import { Link} from "react-router-dom"

import { Menu, X } from "lucide-react";
export default function Header(){
  const [isOpen, setIsOpen] = useState(false)
  
 
  const wrapperRef = useRef(null);
  useEffect(() => {
  function handleClickOutside(event) {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }
  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);
 
 
  return(
   <nav id="top" ref={wrapperRef} className="flex flex-row items-center relative w-full text-[#cad2c5] md:flex md:justify-between bg-transparent h-15 drop-shadow-2xl drop-shadow-[#354f52]">
    <div  className="flex items-center justify-between px-7 w-full">
    <Link to={"/"} className="font-parkinsans text-3xl  pt-3 px-5 h-15 text-center self-center" >
     Gustav Bøe
    </Link>
    <div className="hidden md:flex flex-row items-center gap-15 pr-15 lg:pr-25 ">
    <Link to={"/"}>Home</Link>
    <a href="https://github.com/GustavBoe" 
      target="_blank" 
      rel="noopener noreferrer"
      >
      GitHub
      </a>
   <a href="https://www.linkedin.com/in/gustav-hugo-bøe-ab16473b3" 
      target="_blank" 
      rel="noopener norefferer"
      >
      Linkedin
      </a>


    </div>
    
    <button className="md:hidden flex flex-col hover:cursor-pointer" onClick={(e) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  }}>{!isOpen ? <Menu size={28}/> : <X size={28}/> }</button>
   
   {isOpen &&(
    <div onClick={(e) => e.stopPropagation()} className="md:hidden flex flex-col items-center absolute top-full text-lg left-0 w-full z-50 shadow-lg bg-[#354f52] hover:cursor-pointer">
    <div className="flex flex-col items-center text-center w-full">
      <Link to={"/"}>Home</Link>
     <a href="https://github.com/GustavBoe" target="_blank" 
      rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/gustav-hugo-bøe-ab16473b3" target="_blank" rel="noopener norefferer">Linkedin</a>
    </div>
    </div>
   )}
   </div>
   </nav>
   
  )
}