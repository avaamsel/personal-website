"use client"
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-shrink-0">
        <Sidebar/>
      </div>
    
      <div className="flex-1 overflow-y-scroll overflow-x-hidden relative">
        <LoadingScreen isLoading={isLoading} />
        
        <div className={`flex-col ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}`}>
          <p className="projects ml-6 lg:ml-24">my projects!</p>
          <div className="ml-6 lg:ml-10 lg:pr-0 mt-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-0 lg:gap-y-6">
              
              {/* Vynl */}
              <div className="project-box">
                <div className="flex justify-center mb-4">
                  <Image src="/projects/project-vynl.svg"
                    alt="vynl"
                    width={270}
                    height={155}
                    className="mx-auto"/>
                </div>
                <div className="text-center flex-grow flex flex-col">
                  <p className="project-heading mb-2">vynl</p>
                  <p className="project-sub font-semibold mb-3">react native, typescript, supabase, jest, spotify api</p>
                  <p className="project-text mb-2">mobile app that combines tinder&apos;s swiping functionality and personalized playlist building!</p>
                  <div className="mt-auto">
                    <Link className="repo-link font-semibold" href="https://github.com/avaamsel/vynl" target="blank">vynl&apos;s repo!</Link>
                  </div>
                </div>
              </div>

              {/* Dashboard Website */}
              <div className="project-box">
                <div className="flex justify-center mb-4">
                  <Image src="/projects/project-dashboard.svg"
                    alt="dashboard website"
                    width={270}
                    height={155}
                    className="mx-auto"/>
                </div>
                <div className="text-center flex-grow flex flex-col">
                  <p className="project-heading mb-2">dashboard website</p>
                  <p className="project-sub font-semibold mb-3">next.js, typescript, css, html, google apis</p>
                  <p className="project-text mb-2">cross platform dashboard application for seal members allowing task assignment updating and lab progress tracking.</p>
                </div>
              </div>

              {/* Pathpal */}
              <div className="project-box">
                <div className="flex justify-center mb-4">
                  <Image src="/projects/project-pathpal.svg"
                    alt="pathpal"
                    width={270}
                    height={155}
                    className="mx-auto"/>
                </div>
                <div className="text-center flex-grow flex flex-col">
                  <p className="project-heading mb-2">pathpal</p>
                  <p className="project-sub font-semibold mb-3">typescript, react, react native, convex, leaflet</p>
                  <p className="project-text mb-2">cross-platform pathfinding application using react, next.js, and react native, for narbhacks!</p>
                  <div className="mt-auto">
                    <Link className="repo-link font-semibold" href="https://github.com/avaamsel/narbhacks-pathpal" target="blank">pathpal&apos;s repo!</Link>
                  </div>
                </div>
              </div>


              {/* Flights App */}
              <div className="project-box">
                <div className="flex justify-center mb-4">
                  <Image src="/projects/project-flights.svg"
                    alt="flights app"
                    width={270}
                    height={155}
                    className="mx-auto"/>
                </div>
                <div className="text-center flex-grow flex flex-col">
                  <p className="project-heading mb-2">flights app</p>
                  <p className="project-sub font-semibold mb-3">postgresql, java, sql, jdbc, junit</p>
                  <p className="project-text mb-2">simulated airline booking system with a relational database schema to model users, flights, and user reservations.</p>
                </div>
              </div>

              {/* Neurobiology Club Website */}
              <div className="project-box">
                <div className="flex justify-center mb-4">
                  <Image src="/projects/project-neurobio.svg"
                    alt="neurobiology club website"
                    width={270}
                    height={155}
                    className="mx-auto"/>
                </div>
                <div className="text-center flex-grow flex flex-col">
                  <p className="project-heading mb-2">neurobiology club website</p>
                  <p className="project-sub font-semibold mb-3">next.js, javascript, html, css, sanity, figma, vercel</p>
                  <p className="project-text mb-2">website made through web impact uw with fellow coding and design team members.</p>
                  <div className="mt-auto flex flex-col lg:flex-row justify-center gap-2 lg:gap-0">
                    <Link className="repo-link font-semibold" href="https://github.com/webimpactuw/neurobiology-club" target="blank">neurobiology&apos;s repo!</Link> 
                    <p className="project-sub font-semibold lg:ml-2 lg:mr-2 lg:-translate-y-1 hidden lg:block">|</p>
                    <Link className="repo-link font-semibold" href="https://neurobiology-club.vercel.app/" target="blank">neurobiology&apos;s website!</Link> 
                  </div>
                </div>
              </div>

              {/* Campus Paths */}
              <div className="project-box">
                <div className="flex justify-center mb-4">
                  <Image src="/projects/project-paths.svg"
                    alt="campus paths"
                    width={270}
                    height={155}
                    className="mx-auto"/>
                </div>
                <div className="text-center flex-grow flex flex-col">
                  <p className="project-heading mb-2">campus paths</p>
                  <p className="font-semibold project-sub mb-3">typescript, react, html, css</p>
                  <p className="project-text mb-2">interactive map ui allowing users to select uw campus buildings and visualize paths between friends using markers and dynamic map overlays.</p>
                  {/* <Link className="repo-link font-semibold" href="/" target="blank">campus paths&apos; repo!</Link> */}
                </div>
              </div>
            </div>
          </div>
            
          <div className="flex justify-center mb-4">
            <Footer/>
          </div>
        </div>
      </div>    
    </div>
  )
}