import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar/>
        <div className="flex-col">
          <p className="about ml-24">about me!</p>
          <div className="flex ml-24">
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
            <div className="mt-24 ml-12">
              <p className="text-body mb-2">my name is ava!</p>
              <p className="text-body mb-2">i'm a current junior at the univerity of washington's
                <br/>allen school, majoring in computer science and
                <br/>minoring in history.
              </p>
              <p className="text-body mb-2">i'm expected to graduate in spring of 2027,
                <br/>with aspirations of pursuing a career in full-stack
                <br/>and software development!</p>
            </div>
            
          </div>

          <p className="headers flex justify-center mt-8">my cats!</p>
          <div className="flex justify-center">
            <div className="flex-col mr-18">
              <Image src="/turdie-about.svg"
                alt = "turdie about"
                width={220}
                height={220}
                className="hover:-translate-y-3"/>
              <p className="text-center">clementine!</p>
            </div>
            <div className="flex-col mr-18">
              <Image src="/bubby-about.svg"
                alt = "bubby about"
                width={220}
                height={220}
                className="hover:-translate-y-3"/>
              <p className="text-center">bubby!</p>
            </div>
            <div className="flex-col">
              <Image src="/trixie-about.svg"
                alt = "trixie about"
                width={220}
                height={220}
                className="hover:-translate-y-3"/>
              <p className="text-center">trixie!</p>
            </div>
          </div>
          <p className="headers flex justify-center mt-18">my interests!</p>
          <div>

          </div>
          <div className="flex justify-center mb-4">
            <Footer/>
          </div>
        </div>

        
      </div>
      
    </div>
  )
}