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
                <p className="project-text mb-2">my personal website was blocked out through figma to establish the 
                  <br/>overall layout and to create many of the images utilized!</p>
                <p className="project-text">the color changing sidebar utilize's next.js's usepathname function 
                  <br/> to allow for more personality within the pages.</p>
                <a className="repo-link font-semibold" href="https://github.com/avaamsel/personal-website" target="blank">my personal website's repo!</a>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="mr-10">
                <p className="project-heading">flights app | april 2025 - may 2025</p>
                <p className="project-sub font-semibold"> postgresql, java, sql, jdbc, junit </p>
                <p className="project-text mb-2">designed and implemented a relational database schema to model
                  <br/>users, flights, and user reservations for a simulated airline booking
                  <br/>system.</p>
                <p className="project-text mb-2">developed core backend functionality in java using jdbc to account
                  <br/>interact with a postgresql database, focusing on secure user 
                  <br/> creation, login authentication, and balance management.</p>
                <p className="project-text">created efficient flight search algorithms that returned sorted
                  <br/>flight itineraries based on dynamic user-specified criteria.</p>
                <a className="repo-link font-semibold" href="/" target="blank">flights app's repo!</a>
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
                <p className="project-text mb-2">website made through web impact uw with fellow coding members 
                  <br/>gabe tanumihardja and aliyah mcrae as well as the design team.</p>
                <p className="project-text">events page utilized santity to establish a headless cms, as well as 
                  <br/>utilizes date queries and event type filtering to allow user to fine
                  <br/>tune their search for club events.</p>
                
                <div className="flex">
                  <a className="repo-link font-semibold" href="https://github.com/webimpactuw/neurobiology-club" target="blank">neurobiology's repo!</a> 
                  <p className="project-sub font-semibold ml-2 mr-2 -translate-y-1">|</p>
                  <a className="repo-link font-semibold" href="https://neurobiology-club.vercel.app/" target="blank">neurobiogy's website!</a> 
                </div>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="mr-13">
                <p className="project-heading">dashboard website | march 2025 - present</p>
                <p className="project-sub font-semibold">next.js, typescript, css, html, google apis</p>
                <p className="project-text mb-2">leading development for a responsive dashboard web application
                  <br/> to track and manage lab tasks and user statuses in real time.</p>
                <p className="project-text mb-2">implementing live data editing and synchronization, providing a
                  <br/>seamless user experience for modifying task assignments,
                  <br/> completion statuses, and lab progress.</p>
                <p className="project-text">building a clean, user-friendly interface with custom css and html
                  <br/> ensuring readability and intuitive navigation for non-technical 
                  <br/>users.</p>
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
               <div className="ml-8">
                <p className="project-heading">campus paths | october 2024 - december 2024</p>
                <p className="font-semibold project-sub">typescript, react, html, css </p>
                <p className="project-text mb-2">built an interactive map ui with react, allowing users to select uw 
                  <br/>campus buildings and visualize paths between friends using 
                  <br/>markers and dynamic map overlays.</p>
                <p className="project-text">integrated client-server communication via custom rest api routes,
                  <br/> handling user queries and delivering json responses.</p>
                <a className="repo-link font-semibold" href="/" target="blank">campus paths' repo!</a>
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