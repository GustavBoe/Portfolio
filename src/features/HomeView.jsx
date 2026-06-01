import { useState } from "react"
import { Link } from "react-router-dom"
import {ArrowDown, ArrowUp, ChevronDown} from "lucide-react"

export default function HomeView(){
  const [viewProject, setViewProject] = useState("frameworks"| "project"| "exam" | "none");
  {/*Scrolling to specific portions from Google AI answer */}
   const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return(
     <div className="flex flex-col items-center h-fit mt-10 md:w-full">
 <button className="fixed pt-70 bottom-10 right-10 hover:cursor-pointer" onClick={() => scrollToSection('top')}>{<ArrowUp className="border-2 border-[#cad2c5] text-[#cad2c5] w-7 h-7 rounded-sm"/>}</button>
        <section id="introduction" className="min-h-screen w-[80%] max-w-250">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">{/*Name and information container*/}
          <h1>Gustav Hugo Tonning Bøe</h1>
           <div className="md:hidden overflow-clip rounded-[40%] border-5 border-[#cad2c5]">{/*Image container mobile*/}
        <img src="https://i.imghippo.com/files/SM8096ys.jpeg" alt="IMG_9270" className="object-bottom h-70 w-70 "/>
        </div>
          <h2>Junior Frontend developer</h2>
          <div className="flex flex-col items-center">{/*About me container */}
            <h3>About me</h3>
          <article className="p-5 rounded-md shadow-lg shadow-[#2f3e46] bg-[#52796f]/20">
           <p>I am a 26 year old, newly educated frontend developer, based in Bergen together with my two lovely kids and girlfriend</p>
           <p>In my projects, I strive to create websites with clean designs and great UI/UX</p>
          </article>
          </div>
        </div>
        <div className=" hidden md:block rounded-[40%] border-5 border-[#cad2c5] overflow-clip">{/*Image container desktop*/}
        <img src="https://i.imghippo.com/files/SM8096ys.jpeg" alt="IMG_9270" className="object-center w-65  "/>
        </div>
        <button className="mt-25 hover:animate-pulse hover:delay-300 hover:cursor-pointer" onClick={() => scrollToSection('projects')}>{<ChevronDown/>}</button>
       
          </div>
         </section>

        <section id="projects" className="flex flex-col items-center w-full max-w-250 ">{/*Projects container */}
         
          <div className="flex flex-col items-center min-h-screen mt-15 w-full">
             <h1 className="text-3xl mb-5 text-[#e9efe5] hover:cursor-pointer"  onClick={() => scrollToSection('projects')}>Projects</h1>
             
          <div className="w-full h-10 from-[#354f52] to-white to-15% bg-linear-to-b ">
              
            </div>
            <div className="flex flex-col items-center text-center w-full bg-white text-black">{/*CSS Frameworks*/}
              <div className="flex items-center h-25 gap-2">
                <h2 className="text-3xl font-Tsukimi">Still</h2>
              <button className={viewProject==="frameworks" ? "hidden": "hover:cursor-pointer"} onClick={()=>{setViewProject("frameworks")}}>{<ArrowDown size={24} className="hover:cursor-pointer"/>}</button>
             </div>
              <div className={viewProject !== "frameworks" ? "hidden": " flex flex-col items-center w-full gap-5"}>
                <div className="h-50 overflow-clip border-y-2">{/*Image container*/}
                  <img src="https://i.imghippo.com/files/ZD7102TJs.png" alt="Css Frameworks preview" />
                </div>
                <div className="flex flex-col items-center w-full gap-5">{/*Text container*/}
                  <h2 className="text-xl border-[#52796f] w-full">CSS Frameworks</h2>
                 
                  <article className="text-left text-sm w-[90%]">A course assignement where the main goal was to style a couple of pages using a css framework of our choosing. </article>
                </div>
                <Link to={"/projects/CssFrameworks"} className="px-5 py-2 border text-lg mt-5 mb-10 ">View project</Link>
                </div>
                <button className={viewProject!=="frameworks" ? "hidden" : "flex mb-5 px-5 border-[#52796f] hover:cursor-pointer shadow-xl"} onClick={()=>{setViewProject("none")}}>Close</button>
              
            </div> 

            <div className="w-full h-20 from-[#ffff] to-[#366aa5] bg-linear-to-b">
            </div>

       <div className="flex flex-col items-center text-center w-full bg-[#366aa5] text-white">{/*Semester project*/}
              <div className="flex items-center h-25 gap-2">
                <h2 className="text-3xl font-Livvic font-medium">List</h2>
              <button className={viewProject==="project" && "hidden"} onClick={()=>{setViewProject("project")}}>{<ArrowDown size={24} className="hover:cursor-pointer"/>}</button>
             </div>
              <div className={viewProject !== "project" ? "hidden": " flex flex-col items-center w-full gap-5"}>
                <div className="h-50 overflow-clip border-y-2">{/*Image container*/}
                   <img src="https://i.imghippo.com/files/TnbA2911foY.png" alt="Semester project preview" />
                </div>
                <div className="flex flex-col items-center w-full gap-5">{/*Text container*/}
                  <h2 className="text-xl border-[#52796f] w-full">Semester Project</h2>
                 
                  <article className=" text-sm w-[90%]">Semester project for a faux auction house with functioning bidding.</article>
                </div>
                <Link to={"/projects/SemesterProject2"} className="px-5 py-2 border rounded-sm text-lg mt-5 mb-10 ">View project</Link>
                </div>
                <button className={viewProject!=="project" ? "hidden" : "flex mb-5 px-5 border-[#52796f] hover:cursor-pointer shadow-xl"} onClick={()=>{setViewProject("none")}}>Close</button>
              
            </div>
       <div className="w-full h-20 from-[#366aa5] to-[#005455] bg-linear-to-b">
       </div>
       <div className="flex flex-col items-center text-center w-full bg-[#005455] text-white">{/*Project Exam*/}
              <div className="flex items-center h-25 gap-2">
                <h2 className="text-3xl font-parkinsans ">Holidaze</h2>
              <button className={viewProject==="exam" && "hidden"} onClick={()=>{setViewProject("exam")}}>{<ArrowDown size={24} className="hover:cursor-pointer"/>}</button>
             </div>
              <div className={viewProject !== "exam" ? "hidden": " flex flex-col items-center w-full gap-5"}>
                <div className="h-50 overflow-clip border-y-2">{/*Image container*/}
                   <img src="https://i.imghippo.com/files/xZVy5304GS.png" alt="Project exam preview" />
                </div>
                <div className="flex flex-col items-center w-full gap-5">{/*Text container*/}
                  <h2 className="text-xl border-[#52796f] w-full">Project exam</h2>
                 
                  <article className="text-center text-sm w-[90%]">A venue booking page made for the project exam.</article>
                </div>
                <Link to={"/projects/ProjectExam2"} className="px-5 py-2 border rounded-sm text-lg mt-5 mb-10 ">View project</Link>
                </div>
                <button className={viewProject!=="exam" ? "hidden" : "flex mb-5 px-5 border-[#52796f] hover:cursor-pointer shadow-xl"} onClick={()=>{setViewProject("none")}}>Close</button>
              
            </div>
       <div className="w-full h-15 from-[#005455] to-[#354f52] bg-linear-to-b">  
       </div>
        <button onClick={() => scrollToSection('contact')}>{<ChevronDown/>}</button>
        </div>
         
        </section>
        <section id="contact" className="min-h-screen">
          <h1 className="text-3xl mb-5 text-[#e9efe5] hover:cursor-pointer"  onClick={() => scrollToSection('contact')}>Contact me</h1>
          
        </section>
      </div>
  )
}