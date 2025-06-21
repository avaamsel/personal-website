"use client"
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  let sideBG = "";
  let sideText = "";
  let textBottom = "";
  let textHome = "";
  if (pathname === '/about') {
    sideBG = 'sidebar-about';
    sideText = 'navbar-about';
    textBottom = 'navbar-about-bottom';
    textHome = 'about-home';
  } else if (pathname === '/experience') {
    sideBG = 'sidebar-experience';
    sideText = 'navbar-experience';
    textBottom = 'navbar-experience-bottom';
    textHome = 'experience-home';
  } else if (pathname === '/projects') {
    sideBG = 'sidebar-projects';
    sideText = 'navbar-projects';
    textBottom = 'navbar-projects-bottom';
    textHome = 'projects-home';
  } else if (pathname === '/contact') {
    sideBG = 'sidebar-contact';
    sideText = 'navbar-contact';
    textBottom = 'navbar-contact-bottom';
    textHome = 'contact-home';
  } else {
    sideBG = 'sidebar-home';
    sideText = 'navbar-home';
    textBottom = 'navbar-home-bottom';
  }

  if (pathname != "/studio") {
    return (
      <div>
        <div id="sidebar" className={`${sideBG} flex flex-col items-center`}>
          <a href="/about" className={`${sideText} inline-block`}>about me!</a>
          <a href="/experience" className={`${sideText} inline-block`}>experience!</a>
          <a href="/projects" className={`${sideText} inline-block`}>projects!</a>
          <a href="/contact" className={`${sideText} inline-block`}>contact me!</a>
          <a href="/" className={`${textHome} inline-block`}>home!</a>

          <div className="mt-auto">
            <div className={`${textBottom} flex justify-center`}>
              <a href="https://github.com/avaamsel" target="_blank" rel="noopener noreferrer"
                className="mr-8 text-[22px] hover:font-semibold">
                github
              </a>
              <a href="https://www.linkedin.com/in/nunesava" target="_blank" rel="noopener noreferrer"
                className="text-[22px] hover:font-semibold">
                linkedin
              </a>
            </div>

            <p className={`${textBottom} text-[18px]`}>ava nunes  &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    )
  }

}