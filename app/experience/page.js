import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar/>
        <div className="flex-col ml-24">
            <p className="experience">my experience!</p>

          <div className="flex space-x-20 ml-20 mt-16">
            
          </div>
          <Footer/>

        </div>
      </div>
          
    </div>
  )
}