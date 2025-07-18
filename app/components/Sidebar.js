"use client"
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  let sideBG = "";
  let textBottom = "";
  let avaBubble = "";
  let dot = "";
  if (pathname === '/about') {
    sideBG = 'sidebar-about';
    textBottom = 'navbar-about-bottom';
    avaBubble = "/ava-bubble-about.svg";
    dot = "/dot-about.svg";
  } else if (pathname === '/experience') {
    sideBG = 'sidebar-experience';
    textBottom = 'navbar-experience-bottom';
    avaBubble = "/ava-bubble-experience.svg";
    dot = "/dot-experience.svg";
  } else if (pathname === '/projects') {
    sideBG = 'sidebar-projects';
    textBottom = 'navbar-projects-bottom';
    avaBubble = "/ava-bubble-projects.svg";
    dot = "/dot-projects.svg";
  } else  {
    sideBG = 'sidebar-contact';
    textBottom = 'navbar-contact-bottom';
    avaBubble = "/ava-bubble-contact.svg";
    dot = "/dot-contact.svg";
  }

  if (pathname != "/studio") {
    return (
      <div>
        <div className={`${sideBG} flex flex-col items-center`}>
          <div className="flex justify-center mb-10 mt-2 space-x-8">
            <Image src={`${dot}`}
              alt="dot"
              height={12}
              width={12}
              className="hover:-translate-y-1"/>
            <Image src={`${dot}`}
              alt="dot"
              height={12}
              width={12}
              className="hover:-translate-y-1"/>
            <Image src={`${dot}`}
              alt="dot"
              height={12}
              width={12}
              className="hover:-translate-y-1"/>
            <Image src={`${dot}`}
              alt="dot"                    
              height={12}
              width={12}
              className="hover:-translate-y-1"/>
            <Image src={`${dot}`}
              alt="dot"
              height={12}
              width={12}
              className="hover:-translate-y-1"/>
          </div>
          <a href="/about" className="navbar-about inline-block">about me!</a>
          <a href="/experience" className="navbar-experience inline-block">experience!</a>
          <a href="/projects" className="navbar-projects inline-block">projects!</a>
          <a href="/contact" className="navbar-contact inline-block">contact me!</a>
          <a href="/" className="navbar-home inline-block">home!</a>

          <div className="mt-auto">
            <div className="bubble flex justify-center mb-4">
              <Image src={`${avaBubble}`}
                alt="ava bubble"
                height={100}
                width={100}/>
            </div>
            <div className={`${textBottom} flex justify-center`}>
              <a href="https://github.com/avaamsel" target="_blank" rel="noopener noreferrer"
                className="mr-8 text-[22px] hover:-translate-y-1">
                github
              </a>
              <a href="https://www.linkedin.com/in/nunesava" target="_blank" rel="noopener noreferrer"
                className="text-[22px] hover:-translate-y-1">
                linkedin
              </a>
            </div>

            <a href="/contact" className={`${textBottom} text-[18px]`}>avadnunes@gmail.com</a>
          </div>
        </div>
      </div>
    )
  }

}