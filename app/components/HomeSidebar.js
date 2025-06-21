"use client"
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  if (pathname != "/studio") {
    return (
      <div>
        <div id="sidebar" className="sidebar-home flex flex-col items-center">
          <div className="flex justify center mb-10 mt-2 space-x-8">
            <Image src="dot-home.svg"
              alt="home dot"
              height={12}
              width={12}
              className="hover:-translate-y-1"/>
            <Image src="dot-home.svg"
              alt="home dot"
              height={12}
              width={12}
              className="hover:-translate-y-1"/>
            <Image src="dot-home.svg"
              alt="home dot"
              height={12}
              width={12}
              className="hover:-translate-y-1"/>
            <Image src="dot-home.svg"
              alt="home dot"
              height={12}
              width={12}
              className="hover:-translate-y-1"/>
            <Image src="dot-home.svg"
              alt="home dot"
              height={12}
              width={12}
              className="hover:-translate-y-1"/>
          </div>

          <a href="/about" className="navbar-about inline-block">about me!</a>
          <a href="/experience" className="navbar-experience inline-block">experience!</a>
          <a href="/projects" className="navbar-projects inline-block">projects!</a>
          <a href="/contact" className="navbar-contact inline-block">contact me!</a>
          
          <div className="mt-auto">
            <div className="bubble flex justify-center mb-4">
              <Image src="ava-bubble-home.svg"
                alt="ava bubble"
                height={100}
                width={100}/>
            </div>
            <div className="navbar-home-bottom flex justify-center">
              <a href="https://github.com/avaamsel" target="_blank" rel="noopener noreferrer"
                className="mr-8 text-[22px] hover:-translate-y-1">
                github
              </a>
              <a href="https://www.linkedin.com/in/nunesava" target="_blank" rel="noopener noreferrer"
                className="text-[22px] hover:-translate-y-1">
                linkedin
              </a>
            </div>

            <p className="navbar-home-bottom text-[18px]">ava nunes  &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    )
  }
}
