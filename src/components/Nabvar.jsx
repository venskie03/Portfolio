import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { FaGithub, FaFacebook, FaLinkedin   } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function Navbar() {
  const [nav, setNav] = useState("hidden");
  const [icon1, setIcon1] = useState("")
  const [icon2, setIcon2] = useState("hidden")

  const handleOpenNav = () =>{
    setNav("static");
    setIcon2("static")
    setIcon1("hidden");
  }

  const handleCloseNav = () =>{
    setNav("hidden");
    setIcon2("hidden")
    setIcon1("");
  }

  return (
    <div className="w-full text-white fixed top-0 left-0 right-0 md:hidden border-none z-50">
     <div className="flex justify-between p-6">
     <div className="w-full h-14 bg-slate-950 blur-[3rem] left-0 absolute "></div>
      <h1 className="text-2xl font-semibold text-primary-0 z-30">Portfolio</h1>
     <div className="flex text-3xl cursor-pointer hover:text-primary-300 transition-colors duration-200 z-30">
     <MdOutlineMenu onClick={handleOpenNav} className={`${icon1}`} />
     <IoIosClose onClick={handleCloseNav} className={`${icon2}`} />
     </div>
     </div>

      <nav id="navbar" className={` w-full h-screen  md:hidden font-['Poppins'] p-4 ${nav}`}>
    <div className="flex flex-col gap-10 text-white  text-center h-screen ">
    <div className="w-screen top-0 z-20  h-screen bg-slate-950 left-0 absolute "></div>
      <a className="z-30 p-2" href="/">Home</a>
      <a className="z-30 p-2" href="/about">About Me</a>
      <a className="z-30 p-2" href="/skills">Skills</a>
      <a className="z-30 p-2" href="/myprojects">Projects</a>

      <div className="icons text-2xl flex items-center justify-center gap-4 py-5 border-t-2 border-gray-400 z-30">
      <a href=""><FaGithub/></a>
      <a href=""><FaFacebook /></a>
      <a href=""><FaLinkedin /></a>
      <a href=""><SiGmail/></a>
    </div>
 
    </div>

  </nav>

    </div>
  );
}
