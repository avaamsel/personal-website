import HomeSidebar from "./components/HomeSidebar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className = "flex">
        <HomeSidebar/>
        <p className="welcome">welcome!</p>
        <div className="flex-col">
          <Link href="/about">
            <Image src ="/about-bubble.svg"
              alt="about bubble"
              height = {145}
              width = {200}/>
          </Link>
          <Image src ="/turdie-home.svg"
            alt="turdie home"
            height = {244}
            width = {244}/>
        </div>

        <div className="flex-col">
          <Link href="/experience">
            <Image src ="/experience-bubble.svg"
              alt="experience bubble"
              height = {145}
              width = {200}/>
          </Link>
          <Image src ="/bubby-home.svg"
            alt="bubby home"
            height = {244}
            width = {244}/>
        </div>

        <div className="flex-col">
          <Link href="/projects">
            <Image src ="/projects-bubble.svg"
              alt="projects bubble"
              height = {145}
              width = {200}/>
          </Link>
          <Image src ="/trixie-home.svg"
            alt="trixie home"
            height = {244}
            width = {244}/>
        </div>
      </div>
    </div>
      
  )
}