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
    <div className="w-full text-white fixed top-0 left-0 right-0 border-none z-50">
    {/* Header */}
    <div className="flex md:hidden justify-between items-center p-6 bg-gray-950 bg-opacity-90 z-50">
      <h1 className="text-2xl font-semibold text-primary-0 z-30">{`</>`}Portfolio</h1>
      <div className="flex text-3xl cursor-pointer hover:text-primary-300 transition-colors duration-200 z-30">
        <MdOutlineMenu onClick={handleOpenNav} className={`${icon1}`} />
        <IoIosClose onClick={handleCloseNav} className={`${icon2}`} />
      </div>
    </div>

    {/* Navigation */}
    <nav className={`fixed top-0 left-0 w-full h-screen bg-slate-950 mt-14 text-white z-40 ${nav}`}>
      <div className="flex flex-col items-center justify-center gap-8 h-full">
        {/* Navigation Links */}
        <a className="text-lg p-2 hover:text-gray-400 transition duration-300" href="/">
          Home
        </a>
        <a className="text-lg p-2 hover:text-gray-400 transition duration-300" href="/about">
          About Me
        </a>
        <a className="text-lg p-2 hover:text-gray-400 transition duration-300" href="/skills">
          Skills
        </a>
        <a className="text-lg p-2 hover:text-gray-400 transition duration-300" href="/myprojects">
          Projects
        </a>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mt-10 border-t border-gray-600 pt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:example@gmail.com"
            className="text-2xl hover:text-gray-400 transition duration-300"
          >
            <SiGmail />
          </a>
        </div>
      </div>
    </nav>
  </div>
  );
}
