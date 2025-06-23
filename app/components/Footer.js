"use client"
import { usePathname } from "next/navigation"
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  let textBottom = "";
  let dot = "";
  if (pathname === '/about') {
    textBottom = 'navbar-about-bottom';
    dot = "/row-dots/dot1-about.svg";
  } else if (pathname === '/experience') {
    textBottom = 'navbar-experience-bottom';
    dot = "/row-dots/dot1-experience.svg";
  } else if (pathname === '/projects') {
    textBottom = 'navbar-projects-bottom';
    dot = "/row-dots/dot1-projects.svg";
  } else if (pathname === '/contact') {
    textBottom = 'navbar-contact-bottom';
    dot = "/row-dots/dot1-contact.svg";
  } else {
    textBottom = "navbar-home-bottom";
    dot = "/row-dots/dot1-home.svg";
  }

  return (
    <div>
      <div className="flex justify-center mb-4 mt-2 space-x-8">
        <Image src={`${dot}`}
          alt="home dot1"
          height={22}
          width={22}
          className="hover:-translate-y-1"/>
        <Image src={`${dot}`}
          alt="home dot"
          height={22}
          width={22}
          className="hover:-translate-y-1"/>
        <Image src={`${dot}`}
          alt="home dot"
          height={22}
          width={22}
          className="hover:-translate-y-1"/>
        <Image src={`${dot}`}
          alt="home dot"
          height={22}
          width={22}
          className="hover:-translate-y-1"/>
        <Image src={`${dot}`}
          alt="home dot"
          height={22}
          width={22}
          className="hover:-translate-y-1"/>
        <Image src={`${dot}`}
          alt="home dot"
          height={22}
          width={22}
          className="hover:-translate-y-1"/>
        <Image src={`${dot}`}
          alt="home dot"
          height={22}
          width={22}
          className="hover:-translate-y-1"/>
        <Image src={`${dot}`}
          alt="home dot"
          height={22}
          width={22}
          className="hover:-translate-y-1"/>
        <Image src={`${dot}`}
          alt="home dot"
          height={22}
          width={22}
          className="hover:-translate-y-1"/>
      </div>
      <p className={`${textBottom} flex justify-center text-[18px]`}>ava nunes  &copy; {new Date().getFullYear()}</p>
    </div>
  )
}