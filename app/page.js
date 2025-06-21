import HomeSidebar from "./components/HomeSidebar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className = "flex">
        <HomeSidebar/>
        <div className="flex-col ml-24">
          <p className="welcome">welcome!</p>
          <p className="text-[22px] mt-2">thanks for visiting my website! feel free to click around!</p>

          <div className="flex space-x-20 ml-20 mt-18">
            <div className="flex-col">
              <Link href="/about">
                <Image src ="/about-bubble.svg"
                  alt="about bubble"
                  height = {125}
                  width = {180}
                  className="translate-y-16 -translate-x-24 hover:translate-y-1"/>
              </Link>
              <Image src ="/turdie-home.svg"
                alt="turdie home"
                height = {224}
                width = {224}/>
            </div>

            <div className="flex-col -translate-y-18">
              <Link href="/experience">
                <Image src ="/experience-bubble.svg"
                  alt="experience bubble"
                  height = {125}
                  width = {180}
                  className="translate-y-12 translate-x-6 hover:-translate-y-2"/>
              </Link>
              <Image src ="/bubby-home.svg"
                alt="bubby home"
                height = {224}
                width = {224}/>
            </div>

            <div className="flex-col">
              <Link href="/projects">
                <Image src ="/projects-bubble.svg"
                  alt="projects bubble"
                  height = {125}
                  width = {180}
                  className="translate-y-12 translate-x-40 hover:-translate-y-2"/>
              </Link>
              <Image src ="/trixie-home.svg"
                alt="trixie home"
                height = {224}
                width = {224}/>
            </div>
          </div>

          <div className="flex justify-center mb-4 mt-2 ml-20 space-x-8">
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot1"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
          </div>
          <p className="navbar-home-bottom flex justify-center mb-8 ml-20 text-[18px]">ava nunes  &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
      
  )
}