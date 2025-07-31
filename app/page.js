import HomeSidebar from "./components/HomeSidebar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";


// need to make the right side scroll and the left sidebar completely static
export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className = "flex-shrink-0">
        <HomeSidebar/>
      </div>

      <div className="flex-1 overflow-y-scroll">
        <div className="flex-col ml-6 lg:ml-24">
          <p className="welcome">welcome!</p>
          <p className="text-body">thanks for visiting my website! 
            <br className="lg:hidden"/> feel free to click around and get to know me!</p>
          
          <div className="flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-20 mt-18 lg:ml-20 items-center lg:items-start">
            <div className="flex-col -translate-y-18 lg:-translate-y-0">
              <Link href="/about">
                <Image src ="/about-bubble.svg"
                  alt="about bubble"
                  height = {125}
                  width = {180}
                  className="home-bubble translate-y-12 lg:translate-y-16 -translate-x-18 lg:-translate-x-24 h-[115px] w-[170px] lg:h-[125px] lg:w-[180px]"/>
              </Link>
              <Image src ="/turdie-home.svg"
                alt="turdie home"
                height = {224}
                width = {224}
                className="h-[214px] w-[214px] lg:h-[224px] lg:w-[224px]"/>
            </div>

            <div className="flex-col -translate-y-28 lg:-translate-y-18">
              <Link href="/experience">
                <Image src ="/experience-bubble.svg"
                  alt="experience bubble"
                  height = {125}
                  width = {180}
                  className="home-bubble translate-y-10 lg:translate-y-12 translate-x-6 h-[115px] w-[170px] lg:h-[125px] lg:w-[180px]"/>
              </Link>
              <Image src ="/bubby-home.svg"
                alt="bubby home"
                height = {224}
                width = {224}
                className="h-[214px] w-[214px] lg:h-[224px] lg:w-[224px]"/>
            </div>

             <div className="flex-col -translate-y-38 lg:-translate-y-0">
              <Link href="/projects">
                <Image src ="/projects-bubble.svg"
                  alt="projects bubble"
                  height = {125}
                  width = {180}
                  className="home-bubble translate-y-8 lg:translate-y-12 translate-x-28 lg:translate-x-36 h-[115px] w-[170px] lg:h-[125px] lg:w-[180px]"/>
              </Link>
              <Image src ="/trixie-home.svg"
                alt="trixie home"
                height = {224}
                width = {224}
                className="h-[214px] w-[214px] lg:h-[224px] lg:w-[224px]"/>
            </div>
          </div>

          <div className="mb-2 lg:-translate-x-16 lg:mt-42">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
      
  )
}