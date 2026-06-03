import githubLogo from "@/assets/GitHub_Invertocat_White_Clearspace.png";
import figmaLogo from "@/assets/Figma Icon (Mono-line white).png"

import {Laptop, ChevronDown} from "lucide-react"

export default function SemesterProject2(){
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return(
   <section className="flex flex-col items-center gap-5">
   
     <section className="text-5xl flex flex-col items-center h-screen pt-50 gap-20">
    
     <h1 className="text-center">Project Exam 2</h1>
    
     <h1 className="font-parkinsans">Holidaze</h1>  
     <button onClick={(()=> scrollToSection("styleguide"))}>{<ChevronDown/>}</button>
     </section> 
     <section id="styleguide" className="min-h-screen pt-10 w-full flex flex-col items-center justify-between">
           <div className="w-[80%] h-fit flex flex-col items-center p-10 rounded-md shadow-lg shadow-[#2f3e46] bg-[#52796f]/20">
              <h1 className="text-5xl">Styleguide</h1>
              <div className="w-full flex flex-col items-center mt-10 gap-5 shadow-lg">
               <h2 className="text-3xl" >Colors</h2>
                 <div className="grid grid-cols-2 grid-row-4 w-full text-xs">
                 <div className="h-20 bg-[#005455] text-center flex flex-col justify-center">
                  <p>Primary</p>
                  <p>#005455</p>
                  </div>
                 <div className="h-20 bg-[#1F2933] text-center flex flex-col justify-center">
                  <p>Text</p>
                  <p>#1F2933</p>
                  </div>
                 <div className="h-20 bg-[#1E624D] text-center flex flex-col justify-center">
                 <p>Success</p>
                 <p>#31E624D</p>
                 </div>
                 <div className="h-20 bg-[#E76F51] text-center flex flex-col justify-center">
                  <p>Call-to-action</p>
                  <p>#E76F51</p>
                  </div>
                 <div className="h-20 bg-[#B3B3B3] text-center flex flex-col justify-center">
                  <p>Bread</p>
                  <p>#B3B3B3</p>
                  </div>
                 <div className="h-20 bg-[#A4161A] text-center flex flex-col justify-center">
                 <p>Alarm</p>
                 <p>#A4161A</p>
                 </div>
                 <div className="h-20 bg-[#EEEEEE] text-[#3e3e3e] text-center flex flex-col justify-center">
                  <p>Border</p>
                  <p>#EEEEEE</p>
                 </div>
                 <div className="h-20 bg-[#FFFFFF] text-center text-[#3e3e3e] flex flex-col justify-center">
                   <p>Background</p>
                  <p>#FFFFFF</p>
                 </div>

           </div>
              </div>
              <div className="w-full flex flex-col items-center mt-10 gap-5">
               <h2 className="text-3xl">Fonts</h2>
               <div className="flex flex-col gap-5">
                 <div className=""> 
                 <h3 className="font-parkinsans text-xl">Parkinsans</h3>
                 <p className="font-parkinsans">AaBbCcDdEeFfGgNn 1234567890</p>
                 <p className="font-parkinsans">Logo and loading-state</p>
               </div>
               <div> 
                 <h3 className="font-Dm-Serif-Display text-xl">Dm Serif Display</h3>
                 <p className="font-Dm-Serif-Display">Aa Bb Cc Dd Ee Ff Gg 1234567890</p>
                 <p className="font-Dm-Serif-Display ">Headings</p>
               </div>
               <div>
               <h3 className="font-Inter text-xl">Inter</h3>
               <p className="font-Inter">Aa Bb Cc Dd Ee Ff Gg 1234567890</p>
               <p className="font-Inter">Paragraphs and buttons</p>
               </div>
               </div>
                </div>
               <button className="pt-10" onClick={(()=> scrollToSection("preview"))}>{<ChevronDown/>}</button>
         </div>  
     </section> 
      <section id="preview" className="min-h-screen max-w-[90%]">
          <div className="flex flex-col items-center gap-5 p-10 rounded-md shadow-lg shadow-[#2f3e46] bg-[#52796f]/20">
           <h2 className="font-medium text-3xl">Preview</h2>
         <a href="https://holidaaze.netlify.app/" 
         target="_blank" 
         rel="noopener norefferer"
         className="flex flex-col items-center"
         > {/*Image container */}
          <div className="max-w-[90%] md:hidden">
           <img src="https://i.imghippo.com/files/xZVy5304GS.png" alt="Image" />     
           </div>
            
           <div className="max-w-[90%] hidden md:block">
             <img src="https://i.imghippo.com/files/Kewi1777Xv.png" alt="Image" />
           </div>
           
           </a>
            <button className="flex flex-col-reverse items-center w-10 pt-10" onClick={(()=> scrollToSection("description"))}>{<ChevronDown/>}</button>
   
          </div>
           
     </section> 
     <section id="description" className="min-h-screen w-[80%] mx-auto pt-2 flex flex-col items-center gap-5">
           <div className=" h-[80%] p-10 rounded-md shadow-lg shadow-[#2f3e46] bg-[#52796f]/20">
             <h2 className="font-medium text-xl pl-5 py-2">Description and reflection</h2>
             <article className="pt-2 px-5 max-h-100 md:max-h-full overflow-auto border border-[#84a98c] rounded-md">
             Holidaze is my take on the second project exam. We were tasked with creating a site for the venue booking company called Holidaze.
             <br/>
             <br/>
             Visitors had to be able to view venues and the eventual free dates for a booking.
             <br/>
              The customers are able to book a venue as well as edit their profile.
              <br/>
              When creating an account, or while editing, a customer can choose to become a so called venue manager. 
              Venue managers can create, edit and delete venues, as well as view upcoming bookings on their venues. 
              In addition they have the same functions as a regular customer.
              <br/>
              <br/>
              One thing to remember when viewing the site is that there is no useAuth() hook. 
              <br/>
              This results in the user having to manually reload the page to get the correct header. This will be patched at a later date.
              <br/>
              <br/>
              This project was built using Typescript and TailwindCSS. 
              Creating Holidaze with typescript was challenging, 
              and project taught me a lot about both typescript and Tailwind, as well as how I prefer to work as a developer.

             </article>
           <div id="links" className="h-30 flex flex-col items-center pt-10">
         <div className="grid grid-cols-3 w-[95%] h-fit justify-items-center">
         <a href="https://github.com/GustavBoe/PE2_GustavBoe_FED2" 
           className=" h-20 flex flex-col items-center text-xs"
          target="_blank" 
           rel="noopener norefferer">
           <img src={githubLogo} alt="GitHub logo" className="h-15 w-15"/>
           GitHub Repo
           </a>
           <a href="https://www.figma.com/design/W0i1GniltMtpAwmHtziQYH/PE2-HiFi?node-id=204-1081&t=4RpVkBRrNoGi3uj6-1"
           className=" h-20 flex flex-col items-center text-xs"
           target="_blank" 
           rel="noopener norefferer">
            <img src={figmaLogo} alt="Figma logo" className="h-15 w-auto" />
            Figma
           </a>
         <a href="https://holidaaze.netlify.app/"
           className="flex flex-col items-center text-xs"  
           target="_blank" 
           rel="noopener norefferer">
         {<Laptop size={64} className="h-15"/>}
         Live site
         </a>
         
         </div>
              
         </div>
         
           </div>
            
     </section>

</section>
  )
}