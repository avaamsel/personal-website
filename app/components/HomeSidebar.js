"use client"
import { usePathname } from "next/navigation";
// import { useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();

  if (pathname != "/studio") {
    return (
      <div>
        <button id="toggleBtn" className="md:hidden p-4 bg-gray-800 text-white absolute top-0 left-0 z-10">
          ☰
        </button>

  {/* /* className=" w-64 h-full p-4 space-y-2 flex-col absolute md:relative top-0 left-0 transform md:translate-x-0 -translate-x-full transition-transform duration-300 ease-in-out"> */}
        <div id="sidebar" className="sidebar flex flex-col items-center">
          <a href="/about" className="navbar inline-block">about me!</a>
          <a href="/experience" className="navbar inline-block">experience!</a>
          <a href="/projects" className="navbar inline-block">projects!</a>
          <a href="/contact" className="navbar inline-block">contact me!</a>
          <br/>

          <div className="navbar-bottom flex justify-center">
            <a href="https://github.com/avaamsel" target="_blank" rel="noopener noreferrer"
              className="mr-8 text-[22px] hover:font-semibold">
              github
            </a>
            <a href="https://www.linkedin.com/in/nunesava" target="_blank" rel="noopener noreferrer"
              className="text-[22px] hover:font-semibold">
              linkedin
            </a>
          </div>

          <p className="navbar-bottom text-[18px]">ava nunes  &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
      )
    }

  // useEffect(() => {
  //   const toggleBtn = document.getElementById('toggleBtn');
  //   const sidebar = document.getElementById('sidebar');
  //   if (toggleBtn && sidebar) {
  //     const handleClick = () => {
  //       sidebar.classList.toggle('-translate-x-full');
  //     };
  //     toggleBtn.addEventListener('click', handleClick);
  //     return () => {
  //       toggleBtn.removeEventListener('click', handleClick);
  //     };
  //   }
  // }, []);

}
