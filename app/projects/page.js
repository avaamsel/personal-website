import Sidebar from "../components/Sidebar";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-shrink-0">
        <Sidebar/>
      </div>
    
      <div className="flex-1 overflow-y-scroll">
        <div className="flex-col">
          <p className="projects ml-24">my projects!</p>
          <div className="ml-24 mt-6 mb-8">
            <div className="flex mb-12">
              <Image src="/projects/project-website.svg"
                alt="personal website"
                width={270}
                height={155}/>
              <div className="ml-8">
                <p className="project-heading">personal website | june 2025 - july 2025</p>
                <p className="project-sub font-semibold">next.js, javascript, html, css, figma, vercel</p>
                <p className="project-text">text</p>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="mr-8">
                <p className="project-heading">flights app | april 2025 - may 2025</p>
                <p className="project-sub font-semibold"> postgresql, java, sql, jdbc, junit </p>
                <p className="project-text">Designed and implemented a relational database schema to model users, flights, and user reservations for a simulated airline
booking system</p>
                <p className="project-text">Developed core backend functionality in Java using JDBC to interact with a PostgreSQL database, focusing on secure user
account creation, login authentication, and balance management</p>
                <p className="project-text">Created efficient flight search algorithms that returned sorted flight itineraries based on dynamic user-specified criteria</p>
              </div>
              <Image src="/projects/project-flights.svg"
                alt="flights app"
                width={270}
                height={155}/>
            </div>

            <div className="flex mb-12">
              <Image src="/projects/project-neurobio.svg"
                alt="neubiology club website"
                width={270}
                height={155}/>
              <div className="ml-8">
                <p className="project-heading">neurobiology club website | march 2025 - may 2025</p>
                <p className="project-sub font-semibold">next.js, javascript, html, css, sanity, figma, vercel</p>
                <p className="project-text">text</p>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="mr-8">
                <p className="project-heading">dashboard website | march 2025 - present</p>
                <p className="project-sub font-semibold">next.js, typescript, css, html, google apis</p>
                <p className="project-text">Leading development for a responsive dashboard web application to track and manage lab tasks and user statuses in real time</p>
                <p className="project-text">Implementing live data editing and synchronization, providing a seamless user experience for modifying task assignments,
completion statuses, and lab progress</p>
                <p className="project-text">Building a clean, user-friendly interface with custom CSS and HTML ensuring readability and intuitive navigation for
non-technical users</p>
              </div>
              <Image src="/projects/project-dashboard.svg"
                alt="dashboard website"
                width={270}
                height={155}/>
            </div>

            <div className="flex mb-12">
              <Image src="/projects/project-squares.svg"
                alt="squares"
                width={270}
                height={155}/>
              <div className="ml-8">
                <p className="project-heading">squares | november 2025</p>
                <p className="project-sub font-semibold">text</p>
                <p className="project-text">text</p>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="mr-8">
                <p className="project-heading">campus paths | october 2024 - december 2024</p>
                <p className="font-semibold project-sub">typescript, react, react native, html, css </p>
                <p className="project-text">Built an interactive map UI with React, allowing users to select UW campus buildings and visualize paths between friends using
markers and dynamic map overlays</p>
                <p className="project-text">Integrated client-server communication via custom REST API routes, handling user queries and delivering JSON responses</p>
              </div>
              <Image src="/projects/project-paths.svg"
                alt="campus paths"
                width={270}
                height={155}/>
            </div>

            <div className="flex mb-12">
              <Image src="/projects/project-grunge.svg"
                alt="grunge hotspot"
                width={270}
                height={155}/>
              <div className="ml-8">
                <p className="project-heading project-text">grunge hotspot | october 2024 - december 2024</p>
                <p className="project-sub font-semibold">next.js, javascript, html, css, sanity, vercel</p>
                <p className="project-text">text</p>
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