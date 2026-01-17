"use client"
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = (href) => {
    if (href === pathname && isMobile && isExpanded) {
      setIsExpanded(false);
    }
  };

  if (pathname != "/studio") {
    return (
      <div>
        <div id="sidebar" className={`sidebar-home ${isMobile ? 'sidebar-mobile' : ''} ${isMobile && isExpanded ? 'expanded' : ''} flex flex-col items-center`}>
          {isMobile && (
            <button 
              onClick={toggleSidebar}
              className="toggle-button"
              aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
            >
              {isExpanded ? (
                <Image 
                  src="/bubbles/dot-home.svg"
                  alt="toggle menu"
                  height={12}
                  width={12}
                  className="-translate-y-1 hover:-translate-y-1"
                />
              ) : (
                <div className="flex flex-col space-y-5">
                  <Image 
                    src="/bubbles/dot-home.svg"
                    alt="toggle menu"
                    height={12}
                    width={12}
                    className="hover:-translate-y-1"
                  />
                  <Image 
                    src="/bubbles/dot-home.svg"
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
              <Image src="/bubbles/dot-home.svg"
                alt="home dot"
                height={12}
                width={12}
                className="hover:-translate-y-1"/>
              <Image src="/bubbles/dot-home.svg"
                alt="home dot"
                height={12}
                width={12}
                className="hover:-translate-y-1 ml-8"/>
              <Image src="/bubbles/dot-home.svg"
                alt="home dot"
                height={12}
                width={12}
                className="hover:-translate-y-1 ml-8"/>
              <Image src="/bubbles/dot-home.svg"
                alt="home dot"
                height={12}
                width={12}
                className="hover:-translate-y-1 ml-8"/>
              <Image src="/bubbles/dot-home.svg"
                alt="home dot"
                height={12}
                width={12}
                className="hover:-translate-y-1 ml-8"/>
            </div>

            <Link href="/about" className="navbar-about inline-block text-center" onClick={() => handleLinkClick('/about')}>about me!</Link>
            <Link href="/experience" className="navbar-experience inline-block text-center" onClick={() => handleLinkClick('/experience')}>experience!</Link>
            <Link href="/projects" className="navbar-projects inline-block text-center" onClick={() => handleLinkClick('/projects')}>projects!</Link>
            <Link href="/contact" className="navbar-contact inline-block text-center" onClick={() => handleLinkClick('/contact')}>contact me!</Link>
          </div>
          
          <div className={`bubble-container ${isMobile ? '' : 'block'} mt-auto`}>
            <div className="bubble flex justify-center mb-4">
              <Image src="/bubbles/ava-bubble-home.svg"
                alt="ava bubble"
                height={100}
                width={100}/>
            </div>

            <div className="mb-8 lg:mb-0">
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

              <a href="/contact" className="navbar-home-bottom text-[18px]">avadnunes@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
