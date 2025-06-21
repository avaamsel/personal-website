import Sidebar from "../components/Sidebar";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar/>
        <div className="flex-col ml-24">
          <p className="projects">my projects!</p>
          
          <div className="flex space-x-20 ml-20 mt-16">

          </div>

          <div className="flex justify-center mb-10 mt-2 ml-20 space-x-8">
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot1"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
          </div>
          <p className="navbar-projects-bottom flex justify-center mb-8 ml-20 text-[18px]">ava nunes  &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
              
    </div>
  )
}