import githubLogo from "@/assets/GitHub_Invertocat_White_Clearspace.png";
import { CopyButton } from "@/components/CopyButton";
import { Laptop, ChevronDown } from "lucide-react";

export default function SemesterProject2() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="flex flex-col items-center gap-5">
      <section className="text-5xl flex flex-col items-center h-screen pt-50 gap-20">
        <h1 className="text-center">Semester Project 2</h1>

        <h1 className="font-Livvic">List</h1>
        <button onClick={() => scrollToSection("styleguide")}>
          {<ChevronDown />}
        </button>
      </section>
      <section
        id="styleguide"
        className="min-h-screen pt-10 w-full flex flex-col items-center justify-between">
        <div className="w-[80%] h-fit flex flex-col items-center p-10 rounded-md shadow-lg shadow-[#2f3e46] bg-[#52796f]/20">
          <h1 className="text-5xl">Styleguide</h1>
          <div className="w-full flex flex-col items-center mt-10 gap-5">
            <h2 className="text-3xl">Colors</h2>
            <div className="grid grid-cols-2 grid-row-3 w-full text-xs">
              <div className="h-20 bg-[#366AA5] text-center flex flex-col justify-center">
                <p>List blue</p>
                <p>#366AA5</p>
              </div>
              <div className="h-20 bg-[#3E3E3E] text-center flex flex-col justify-center">
                <p>Text off-black</p>
                <p>#3E3E3E</p>
              </div>
              <div className="h-20 bg-[#366AA5]/60 text-center flex flex-col justify-center">
                <p>Listing shadow</p>
                <p>#366AA5/60</p>
              </div>
              <div className="h-20 bg-[#BCBCBC] text-center flex flex-col justify-center">
                <p>List Breadtext</p>
                <p>#BCBCBC</p>
              </div>
              <div className="h-20 bg-[#A53636] text-center flex flex-col justify-center">
                <p>Alert</p>
                <p>#A53636</p>
              </div>
              <div className="h-20 bg-[#CACACA]/40 text-center flex flex-col justify-center">
                <p>List Header Shadow</p>
                <p>#CACACA/40</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-10 gap-5">
            <h2 className="text-3xl">Fonts</h2>
            <div className="flex flex-col gap-5">
              <div className="">
                <h3 className="font-Livvic text-xl">Livvic</h3>
                <p className="font-Livvic">AaBbCcDdEeFfGgNn 1234567890</p>
                <p className="font-Livvic">Logo and headings</p>
              </div>
              <div>
                <h3 className="font-Lexend text-xl">Lexend</h3>
                <p className="font-Lexend">Aa Bb Cc Dd Ee Ff Gg 1234567890</p>
                <p className="font-Lexend ">Headings, fillers and buttons</p>
              </div>
              <div>
                <h3 className="font-Commissioner text-xl">Commissioner</h3>
                <p className="font-Commissioner">
                  Aa Bb Cc Dd Ee Ff Gg 1234567890
                </p>
                <p className="font-Commissioner">Paragraphs</p>
              </div>
            </div>
          </div>
          <button className="pt-10" onClick={() => scrollToSection("preview")}>
            {<ChevronDown />}
          </button>
        </div>
      </section>
      <section id="preview" className="min-h-screen max-w-[90%]">
        <div className="flex flex-col items-center gap-5 p-10 rounded-md shadow-lg shadow-[#2f3e46] bg-[#52796f]/20">
          <h2 className="font-medium text-3xl">Preview</h2>
          <a
            href="https://github.com/GustavBoe/sp2"
            target="_blank"
            rel="noopener norefferer"
            className="flex flex-col items-center">
            {" "}
            {/*Image container */}
            <div className="max-w-[90%] md:hidden">
              <img
                src="https://i.imghippo.com/files/BPVn8874ek.png"
                alt="compressed_2_compressed_1780396539238_pe4t09xzlas"
              />
            </div>
            <div className="max-w-[90%] hidden md:block">
              <img
                src="https://i.imghippo.com/files/BCJq3615eKE.png"
                alt="Image"
              />
            </div>
          </a>
          <button
            className="flex flex-col-reverse items-center w-10 pt-10"
            onClick={() => scrollToSection("description")}>
            {<ChevronDown />}
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
            List is my take on the task presented for the course Semester
            Project 2.
            <br />
            The task was to build an auction site where the visitors could view
            listings, and users could post,edit and delete listings as well as
            bid on listings by other users.
            <br />
            The inspiration for this project was mainly from the norwegian
            Finn.no and Auksjonen.no, as well as Ebay.com and Etsy.com.
            <br />
            The site is built using Javascript, HTML and TailwindCSS.
            <br />
            Using Tailwind made it possible for me to realize my vision for the
            site. If I were to improve the site, I would change the
            errorhandling and alerts, as well as make the site a React.js
            application.
          </article>
          <div id="links" className="h-30 flex flex-col items-center">
            <div className="grid grid-cols-3 w-[95%] h-fit justify-items-center">
              <a
                href="https://github.com/GustavBoe/sp2"
                className=" h-20 flex flex-col items-center"
                target="_blank"
                rel="noopener norefferer">
                <img src={githubLogo} alt="GitHub logo" className="h-20 w-20" />
                GitHub Repo
              </a>

              <a
                href="https://gustavboe.github.io/sp2/"
                className="flex flex-col items-center"
                target="_blank"
                rel="noopener norefferer">
                {<Laptop size={64} className="h-20" />}
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
