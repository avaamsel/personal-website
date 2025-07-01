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
    
          <div className="flex justify-center">
            <Footer/>
          </div>
        </div>
      </div>    
    </div>
  )
}