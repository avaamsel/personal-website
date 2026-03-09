"use client"
import HomeSidebar from "./components/HomeSidebar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


// need to make the right side scroll and the left sidebar completely static
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className = "flex-shrink-0">
        <HomeSidebar/>
      </div>

      <div className="flex-1 overflow-y-scroll overflow-x-hidden relative">
        <LoadingScreen isLoading={isLoading} />
        
        <div className={`flex-col ml-6 lg:ml-24 pr-4 lg:pr-0 ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}`}>
          <p className="welcome">welcome!</p>
          <div className="flex flex-col lg:flex-row ml-0 overflow-x-hidden">
            <div className="flex-col -translate-y-0 lg:-translate-y-8 order-1 lg:order-1">
              <Image src="home/hello-bubble.svg"
                alt="hello-bubble"
                width={130}
                height={75}
                className="home-bubble translate-x-46 lg:translate-x-82 translate-y-12 lg:translate-y-12 w-[130px] h-[85px] lg:w-[160px] lg:h-[105px]"/>
              <Image src="home/ava-dubs-about.svg"
                alt="ava dubs about"
                width={390}
                height={280}
                className="mx-auto lg:mx-0 mb-6 lg:mb-0 w-[360px] h-[260px] lg:w-[430px] lg:h-[320px]"/>
            </div>
            <div className="mt-0 lg:mt-20 ml-4 lg:ml-12 order-2 lg:order-2 text-center lg:text-left w-full lg:w-auto max-w-[92%] lg:max-w-[600px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start justify-center lg:justify-start px-4 lg:px-0">
              <p className="mb-2 text-center lg:text-left">my name is ava!</p>
              <p className="mb-2 text-center lg:text-left">i&apos;m a current junior at the univerity of washington&apos;s allen school, pursuing a double degree in <b className="text-[#618F40]">computer science</b> and <b className="text-[#618F40]">history,</b> specifically the war and society concentration.</p>
              <p className="mb-2 text-center lg:text-left">i&apos;m expected to graduate in <b className="text-[#618F40]">spring of 2027,</b> with aspirations of pursuing a career in <b className="text-[#618F40]">front-end development</b> or <b className="text-[#618F40]">technical writing!</b></p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-20 mt-16 lg:ml-20 items-center lg:items-start">
            <div className="flex-col -translate-y-18 lg:-translate-y-0">
              <Link href="/about">
                <Image src ="/home/about-bubble.svg"
                  alt="about bubble"
                  height = {125}
                  width = {180}
                  className="home-bubble translate-y-12 lg:translate-y-16 -translate-x-18 lg:-translate-x-24 h-[115px] w-[170px] lg:h-[125px] lg:w-[180px]"/>
              </Link>
              <Image src ="/home/turdie-home.svg"
                alt="turdie home"
                height = {224}
                width = {224}
                className="h-[214px] w-[214px] lg:h-[224px] lg:w-[224px]"/>
            </div>

            {/*  -translate-y-28 lg:-translate-y-18 */}
            <div className="flex-col -translate-y-28 lg:-translate-y-18">
              <Link href="/experience">
                <Image src ="/home/experience-bubble.svg"
                  alt="experience bubble"
                  height = {125}
                  width = {180}
                  className="home-bubble translate-y-10 lg:translate-y-12 translate-x-6 h-[115px] w-[170px] lg:h-[125px] lg:w-[180px]"/>
              </Link>
              <Image src ="/home/bubby-home.svg"
                alt="bubby home"
                height = {224}
                width = {224}
                className="h-[214px] w-[214px] lg:h-[224px] lg:w-[224px]"/>
            </div>

             <div className="flex-col -translate-y-38 lg:-translate-y-0">
              <Link href="/projects">
                <Image src ="/home/projects-bubble.svg"
                  alt="projects bubble"
                  height = {125}
                  width = {180}
                  className="home-bubble translate-y-8 lg:translate-y-12 translate-x-28 lg:translate-x-36 h-[115px] w-[170px] lg:h-[125px] lg:w-[180px]"/>
              </Link>
              <Image src ="/home/trixie-home.svg"
                alt="trixie home"
                height = {224}
                width = {224}
                className="h-[214px] w-[214px] lg:h-[224px] lg:w-[224px]"/>
            </div>
          </div>

          <div className="mb-2 lg:-translate-x-16 lg:mt-18">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
      
  )
}