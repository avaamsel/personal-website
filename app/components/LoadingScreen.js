"use client"
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function LoadingScreen({ isLoading }) {
  const pathname = usePathname();
  
  let dot = "";
  if (pathname === '/about') {
    dot = "/row-dots/dot1-about.svg";
  } else if (pathname === '/experience') {
    dot = "/row-dots/dot1-experience.svg";
  } else if (pathname === '/projects') {
    dot = "/row-dots/dot1-projects.svg";
  } else if (pathname === '/contact') {
    dot = "/row-dots/dot1-contact.svg";
  } else {
    dot = "/row-dots/dot1-home.svg";
  }

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-screen">
      <div className="loading-dots">
        <Image src={dot}
          alt="loading dot"
          height={20}
          width={20}
          className="bouncing-dot dot-1"/>
        <Image src={dot}
          alt="loading dot"
          height={20}
          width={20}
          className="bouncing-dot dot-2 ml-8"/>
        <Image src={dot}
          alt="loading dot"
          height={20}
          width={20}
          className="bouncing-dot dot-3 ml-8"/>
        <Image src={dot}
          alt="loading dot"
          height={20}
          width={20}
          className="bouncing-dot dot-4 ml-8 hidden lg:block"/>
        <Image src={dot}
          alt="loading dot"
          height={20}
          width={20}
          className="bouncing-dot dot-5 ml-8 hidden lg:block"/>
      </div>
    </div>
  );
}
