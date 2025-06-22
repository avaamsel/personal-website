import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar/>
        <div className="flex-col ml-24">
          <p className="about">about me!</p>
          <p className="text-body">my name is ava!</p>
          {/* <Image>
            
          </Image> */}
        </div>

        <Footer/>
      </div>
      
    </div>
  )
}