"use client"
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  if (pathname != "/studio") {
    return (
      <div>
        <div id="sidebar" className="sidebar-home flex flex-col items-center">
          <a href="/about" className="navbar-home inline-block">about me!</a>
          <a href="/experience" className="navbar-home inline-block">experience!</a>
          <a href="/projects" className="navbar-home inline-block">projects!</a>
          <a href="/contact" className="navbar-home inline-block">contact me!</a>

          
          <div className="mt-auto">
            <Image src="ava-bubble.svg"
            alt="ava bubble"
            height={100}
            width={100}/>
            <div className="navbar-home-bottom flex justify-center">
              <a href="https://github.com/avaamsel" target="_blank" rel="noopener noreferrer"
                className="mr-8 text-[22px] hover:font-semibold">
                github
              </a>
              <a href="https://www.linkedin.com/in/nunesava" target="_blank" rel="noopener noreferrer"
                className="text-[22px] hover:font-semibold">
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
