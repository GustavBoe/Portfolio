import githubLogo from "@/assets/GitHub_Invertocat_White_Clearspace.png";
import figmaLogo from "@/assets/Figma Icon (Mono-line white).png";
import { CopyButton } from "@/components/CopyButton";
import { Laptop, ChevronDown } from "lucide-react";

export default function CssFrameworks() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="flex flex-col items-center gap-5">
      <section className="text-5xl flex flex-col items-center h-screen pt-50 gap-20">
        <h1>CSS Frameworks</h1>

        <h1 className="font-Tsukimi">Still</h1>

        <button onClick={() => scrollToSection("styleguide")}>
          {
            <ChevronDown
              size={48}
              className="hover:opacity-70 hover:cursor-pointer"
            />
          }
        </button>
      </section>

      <section
        id="styleguide"
        className="min-h-screen pt-10 w-full flex flex-col items-center justify-between">
        <div className="w-[80%] h-screen flex flex-col items-center p-10 rounded-md shadow-lg shadow-[#2f3e46] bg-[#52796f]/20">
          <h1 className="text-5xl">Styleguide</h1>
          <div className="w-full flex flex-col items-center mt-10 gap-5">
            <h2 className="text-3xl">Colors</h2>
            <div className="grid grid-cols-2 w-full">
              <div className="h-20 bg-white"></div>
              <div className="h-20 bg-black"></div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-10 gap-5">
            <h2 className="text-3xl">Fonts</h2>
            <div className="flex flex-col gap-5">
              <div className="">
                <h3 className="font-Tsukimi text-xl">Tsukimi rounded</h3>
                <p className="font-Tsukimi">AaBbCcDdEeFfGgNn 1234567890</p>
                <p className="font-Tsukimi">Logo and headings</p>
              </div>
              <div>
                <h3 className="font-[Arial] text-xl">Arial</h3>
                <p className="font-[Arial]">Aa Bb Cc Dd Ee Ff Gg 1234567890</p>
                <p className="font-[Arial] ">CTAs and buttons</p>
              </div>
              <div>
                <h3 className="font-[Times] text-xl">Times</h3>
                <p className="font-[Times]">Aa Bb Cc Dd Ee Ff Gg 1234567890</p>
                <p className="font-[Times]">Headings and fillers</p>
              </div>
            </div>
          </div>
          <button className="pt-10" onClick={() => scrollToSection("preview")}>
            {
              <ChevronDown
                size={48}
                className="hover:opacity-70 hover:cursor-pointer"
              />
            }
          </button>
        </div>
      </section>

      <section id="preview" className="min-h-screen max-w-[90%]">
        <div className="flex flex-col items-center gap-5 p-10 rounded-md shadow-lg shadow-[#2f3e46] bg-[#52796f]/20">
          <h2 className="font-medium text-3xl">Preview</h2>
          <a
            href="https://github.com/GustavBoe/JavaScript2Fall25_StillApp/tree/portfolio-improvements"
            target="_blank"
            rel="noopener norefferer"
            className="flex flex-col items-center">
            {" "}
            {/*Image container */}
            <div className="max-w-[90%] md:hidden">
              <img
                src="https://i.imghippo.com/files/Tdu6746ZN.png"
                alt="compressed_0_compressed_1780396539238_hzivvotg9j"
              />
            </div>
            <div className="max-w-[90%] hidden md:block">
              <img
                src="https://i.imghippo.com/files/EiVo3506nU.png"
                alt="compressed_0_compressed_1780396768538_qeyfj276o08"
              />
            </div>
          </a>
          <button
            className="flex flex-col-reverse items-center w-10 pt-10"
            onClick={() => scrollToSection("description")}>
            {
              <ChevronDown
                size={48}
                className="hover:opacity-70 hover:cursor-pointer"
              />
            }
          </button>
        </div>
      </section>

      <section
        id="description"
        className="min-h-screen w-[80%] mx-auto pt-2 flex flex-col items-center gap-5">
        <div className=" h-[80%] p-10 rounded-md shadow-lg shadow-[#2f3e46] bg-[#52796f]/20">
          <h2 className="font-medium text-xl pl-5 py-2">
            Description and reflection
          </h2>
          <article className="pt-2 px-5 max-h-100 md:max-h-full overflow-auto border border-[#84a98c] rounded-md">
            Still is my take on an assessment given in the course Javascript 2,
            and continued in CSS Frameworks. The task was to create a photograpy
            sharing app using Javascript and styling it with a css framework.
            For this project I wanted to create a minimalistic app/site with the
            post from the users being the main focal point. I originally picked
            Bootstrap as my framework, but I quickly realized that TailwindCSS
            would have been a better fit for my vision. This project taught me
            that I prefer to style my own components.
          </article>
          <div id="links" className="h-30 flex flex-col items-center pt-10">
            <div className="grid grid-cols-4 w-[95%] h-fit justify-items-center">
              {/*https://www.figma.com/design/1233XOUTeaycVHjE6ffsa6/Still-App?node-id=0-1&t=FL7whuXKXF9IQ2Zo-1 */}
              <a
                href="https://github.com/GustavBoe/JavaScript2Fall25_StillApp/tree/portfolio-improvements"
                className=" h-20 flex flex-col items-center text-xs"
                target="_blank"
                rel="noopener norefferer">
                <img src={githubLogo} alt="GitHub logo" className="h-15 w-15" />
                GitHub Repo
              </a>
              <a
                href="https://www.figma.com/design/1233XOUTeaycVHjE6ffsa6/Still-App?node-id=0-1&t=FL7whuXKXF9IQ2Zo-1"
                className=" h-20 flex flex-col items-center text-xs"
                target="_blank"
                rel="noopener norefferer">
                <img src={figmaLogo} alt="Figma logo" className="h-15 w-auto" />
                Figma
              </a>
              <a
                href="https://gustavboe.github.io/JavaScript2Fall25_StillApp/"
                className="flex flex-col items-center text-xs"
                target="_blank"
                rel="noopener norefferer">
                {<Laptop size={64} className="h-15" />}
                Live site
              </a>
              <CopyButton text={window.location.href} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
