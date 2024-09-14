import { IoHome } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { FaUser, FaLightbulb, FaGithub, FaFacebook, FaLinkedin   } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function SideBar() {
  return (
    <aside className="sidebar-sticky sidebar justify-start md:flex hidden">
      <section className="sidebar-title flex flex-col items-center p-4 gap-4 ">
        <img src="./profile.jpg" className="max-w-44  rounded-tr-3xl rounded-bl-3xl rounded-br-[4rem] rounded-tl-[4rem] w-full h-44 border-4 border-primary-0" alt="" />
   <div className="">
   <h1 className="text-2xl text-primary-0">Kevin kyle Ganados</h1>
   <h2 className="font-[200] text-xl text-center mt-2 border-b-[1px] border-b-primary-0">FullStack Developer</h2>
   </div>
    
    <div className="icons text-2xl flex gap-4 text-primary-0">
      <a href=""><FaGithub/></a>
      <a href=""><FaFacebook /></a>
      <a href=""><FaLinkedin /></a>
      <a href=""><SiGmail/></a>
    </div>
      </section>
      <section className="sidebar-content min-h-[20rem]">
        <nav className="menu rounded-md">
          <section className="menu-section px-4">
            <a href="/" className="menu-items">
              <li className="menu-item text-lg">
               <IoHome />
                <span>Home</span>
              </li>
            </a>
            <a href="/about" className="menu-items">
              <li className="menu-item text-lg">
               <FaUser  />
                <span>About Me</span>
              </li>
            </a>
            <a href="/skills" className="menu-items">
              <li className="menu-item text-lg">
              <FaLightbulb />
                <span>Skills</span>
              </li>
            </a>
            <a href="/myprojects" className="menu-items">
              <li className="menu-item text-lg">
               <AiFillProject />
                <span>Projects</span>
              </li>
            </a>
          </section>
        </nav>
      </section>
    </aside>
  )
}
