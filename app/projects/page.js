import Sidebar from "../components/Sidebar";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";

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
              <div className="mr-10 project-text-container">
                <p className="project-heading">pathpal | narbhacks 2025 | july 2025</p>
                <p className="project-sub font-semibold"> typescript, react, react native, convex, leaflet </p>
                <p className="project-text mb-2">designed a cross-platform social application using react, next.js, and react native, for narbhacks!</p>
                <p className="project-text">integrated leaflet to provide dynamic, user-friendly mapping functionality, supporting features like location display and path visualization.</p>
                  <Link className="repo-link font-semibold" href="https://github.com/avaamsel/narbhacks-pathpal" target="blank">pathpal&apos;s repo!</Link>
              </div>
              <Image src="/projects/project-pathpal.svg"
                alt="pathpal"
                width={270}
                height={155}/>
            </div>
            
            <div className="flex mb-12">
              <Image src="/projects/project-website.svg"
                alt="personal website"
                width={270}
                height={155}/>
              <div className="ml-8 project-text-container">
                <p className="project-heading">personal website | june 2025 - july 2025</p>
                <p className="project-sub font-semibold">next.js, javascript, html, css, figma, vercel, emailjs</p>
                <p className="project-text mb-2">the color changing sidebar utilize&apos;s next.js&apos;s usepathname function to allow for more personality within the pages.</p>
                <p className="project-text">contact page functionality utilizes emailjs!</p>
                <Link className="repo-link font-semibold" href="https://github.com/avaamsel/personal-website" target="blank">my personal website&apos;s repo!</Link>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="mr-10 project-text-container">
                <p className="project-heading">flights app | april 2025 - may 2025</p>
                <p className="project-sub font-semibold"> postgresql, java, sql, jdbc, junit </p>
                <p className="project-text mb-2">designed and implemented a relational database schema to model users, flights, and user reservations for a simulated airline booking system.</p>
                <p className="project-text mb-2">developed backend functionality in java to interact with a postgresql database, focusing on secure user creation, login authentication, and balance management.</p>
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
              <div className="ml-8 project-text-container">
                <p className="project-heading">neurobiology club website | march 2025 - may 2025</p>
                <p className="project-sub font-semibold">next.js, javascript, html, css, sanity, figma, vercel</p>
                <p className="project-text mb-2">website made through web impact uw with fellow coding members and design team.</p>
                <p className="project-text">events page utilizes santity to establish a headless cms and allows users to filter their search for upcoming club events based on date and type.</p>
                
                <div className="flex">
                  <Link className="repo-link font-semibold" href="https://github.com/webimpactuw/neurobiology-club" target="blank">neurobiology&apos;s repo!</Link> 
                  <p className="project-sub font-semibold ml-2 mr-2 -translate-y-1">|</p>
                  <Link className="repo-link font-semibold" href="https://neurobiology-club.vercel.app/" target="blank">neurobiology&apos;s website!</Link> 
                </div>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="mr-10 project-text-container">
                <p className="project-heading">dashboard website | march 2025 - present</p>
                <p className="project-sub font-semibold">next.js, typescript, css, html, google apis</p>
                <p className="project-text mb-2">implementing live data editing and synchronization, providing a seamless user experience for modifying task assignments, completion statuses, and lab progress.</p>
                <p className="project-text">building a clean, user-friendly interface with custom css and html ensuring readability and intuitive navigation for non-technical users.</p>
              </div>
              <Image src="/projects/project-dashboard.svg"
                alt="dashboard website"
                width={270}
                height={155}/>
            </div>

            <div className="flex mb-12">
              <Image src="/projects/project-paths.svg"
                alt="campus paths"
                width={270}
                height={155}/>
               <div className="ml-8 project-text-container">
                <p className="project-heading">campus paths | october 2024 - december 2024</p>
                <p className="font-semibold project-sub">typescript, react, html, css </p>
                <p className="project-text mb-2">built an interactive map ui with react, allowing users to select uw campus buildings and visualize paths between friends using markers and dynamic map overlays.</p>
                <p className="project-text">integrated client-server communication via custom rest api routes, handling user queries and delivering json responses.</p>
                {/* <Link className="repo-link font-semibold" href="/" target="blank">campus paths&apos; repo!</Link> */}
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