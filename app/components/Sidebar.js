"use client"
import { usePathname } from "next/navigation";
// import { useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();


  useEffect(() => {
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    if (toggleBtn && sidebar) {
      const handleClick = () => {
        sidebar.classList.toggle('-translate-x-full');
      };
      toggleBtn.addEventListener('click', handleClick);
      return () => {
        toggleBtn.removeEventListener('click', handleClick);
      };
    }
  }, []);

  if (pathname != "/studio") {
    return (
      <div>
        <button id="toggleBtn" className="md:hidden p-4 bg-gray-800 text-white absolute top-0 left-0 z-10">
          ☰
        </button>

  {/* /* className=" w-64 h-full p-4 space-y-2 flex-col absolute md:relative top-0 left-0 transform md:translate-x-0 -translate-x-full transition-transform duration-300 ease-in-out"> */}
        <div id="sidebar" className="sidebar flex flex-col items-center">
          <div className="navbar inline-block">
            <a href="/about" >about me!</a>
            <a href="/experience">experience!</a>
            <a href="/projects">projects!</a>
            <a href="/contact">contact me!</a>
            <a href="/" className="text-[#618F40]">home!</a>
          </div>

          <div className="mt-auto">
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
      </div>
    )
  }

}