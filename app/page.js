import HomeSidebar from "./components/HomeSidebar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";


// need to make the right side scroll and the left sidebar completely static
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className = "flex">
        <HomeSidebar/>
        <div className="flex-col ml-24">
          <p className="welcome">welcome!</p>
          <p className="text-body">thanks for visiting my website! feel free to click around!</p>

          <div className="flex space-x-20 ml-20 mt-18">
            <div className="flex-col">
              <Link href="/about">
                <Image src ="/about-bubble.svg"
                  alt="about bubble"
                  height = {125}
                  width = {180}
                  className="translate-y-16 -translate-x-24 hover:translate-y-12"/>
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
                  className="translate-y-12 translate-x-6 hover:translate-y-12"/>
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
                  className="translate-y-12 translate-x-40 hover:translate-y-24"/>
              </Link>
              <Image src ="/trixie-home.svg"
                alt="trixie home"
                height = {224}
                width = {224}/>
            </div>
          </div>

          <div className="mt-42">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
      
  )
}