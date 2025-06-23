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
          <div className="flex">
            <div className="flex-col -translate-y-10">
              <Image src="hello-bubble.svg"
                alt="hello-bubble"
                width={150}
                height={95}
                className="home-bubble translate-x-82 translate-y-12"/>
              <Image src="ava-dubs-about.svg"
                alt="ava dubs about"
                width={410}
                height={300}/>
            </div>
            <p className="text-body">my name is ava!</p>
          </div>
          <div className="flex justify-center">
            <Footer/>
          </div>
        </div>

        
      </div>
      
    </div>
  )
}