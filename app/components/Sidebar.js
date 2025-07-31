"use client"
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  if (pathname != "/studio") {
    return (
      <div>
        <div className={`${sideBG} ${isMobile ? 'sidebar-mobile' : ''} ${isMobile && isExpanded ? 'expanded' : ''} flex flex-col items-center`}>
          {isMobile && (
            <button 
              onClick={toggleSidebar}
              className="toggle-button"
              aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
            >
              {isExpanded ? (
                <Image 
                  src={`${dot}`}
                  alt="toggle menu"
                  height={12}
                  width={12}
                  className="-translate-y-2 hover:-translate-y-1"
                />
              ) : (
                <div className="flex flex-col space-y-5">
                  <Image 
                    src={`${dot}`}
                    alt="toggle menu"
                    height={12}
                    width={12}
                    className="hover:-translate-y-1"
                  />
                  <Image 
                    src={`${dot}`}
                    alt="toggle menu"
                    height={12}
                    width={12}
                    className="hover:-translate-y-1"
                  />
                </div>
              )}
            </button>
          )}
          
          <div className={`nav-links ${isMobile && isExpanded ? 'flex flex-col items-center' : 'block'}`}>
            <div className="flex justify-center mb-10 mt-2">
              {isMobile && isExpanded ? (
                <>
                  <button onClick={toggleSidebar} aria-label="Close sidebar" className="bg-transparent border-none p-0 m-0">
                    <Image src={`${dot}`}
                      alt="dot"
                      height={12}
                      width={12}
                      className="-translate-y-1 hover:-translate-y-1"/>
                  </button>
                  <button onClick={toggleSidebar} aria-label="Close sidebar" className="bg-transparent border-none p-0 m-0 ml-8">
                    <Image src={`${dot}`}
                      alt="dot"
                      height={12}
                      width={12}
                      className="-translate-y-1 hover:-translate-y-1"/>
                  </button>
                  <button onClick={toggleSidebar} aria-label="Close sidebar" className="bg-transparent border-none p-0 m-0 ml-8">
                    <Image src={`${dot}`}
                      alt="dot"
                      height={12}
                      width={12}
                      className="-translate-y-1 hover:-translate-y-1"/>
                  </button>
                  <button onClick={toggleSidebar} aria-label="Close sidebar" className="bg-transparent border-none p-0 m-0 ml-8">
                    <Image src={`${dot}`}
                      alt="dot"
                      height={12}
                      width={12}
                      className="-translate-y-1 hover:-translate-y-1"/>
                  </button>
                  <button onClick={toggleSidebar} aria-label="Close sidebar" className="bg-transparent border-none p-0 m-0 ml-8">
                    <Image src={`${dot}`}
                      alt="dot"
                      height={12}
                      width={12}
                      className="-translate-y-1 hover:-translate-y-1"/>
                  </button>
                </>
              ) : (
                <>
                  <Image src={`${dot}`}
                    alt="dot"
                    height={12}
                    width={12}
                    className="-translate-y-1 hover:-translate-y-1"/>
                  <Image src={`${dot}`}
                    alt="dot"
                    height={12}
                    width={12}
                    className="-translate-y-1 hover:-translate-y-1 ml-8"/>
                  <Image src={`${dot}`}
                    alt="dot"
                    height={12}
                    width={12}
                    className="-translate-y-1 hover:-translate-y-1 ml-8"/>
                  <Image src={`${dot}`}
                    alt="dot"                    
                    height={12}
                    width={12}
                    className="-translate-y-1 hover:-translate-y-1 ml-8"/>
                  <Image src={`${dot}`}
                    alt="dot"
                    height={12}
                    width={12}
                    className="-translate-y-1 hover:-translate-y-1 ml-8"/>
                </>
              )}
            </div>
            <Link href="/about" className="navbar-about inline-block w-full text-center">about me!</Link>
            <Link href="/experience" className="navbar-experience inline-block w-full text-center">experience!</Link>
            <Link href="/projects" className="navbar-projects inline-block w-full text-center">projects!</Link>
            <Link href="/contact" className="navbar-contact inline-block w-full text-center">contact me!</Link>
            <Link href="/" className="navbar-home inline-block w-full text-center">home!</Link>
          </div>

          <div className={`bubble-container ${isMobile ? '' : 'block'} mt-auto`}>
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