import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-shrink-0">
        <Sidebar/>
      </div>

      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col">
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
                  <br/>allen school, majoring in <b className="text-[#D06F15]">computer science</b> and
                  <br/>minoring in <b className="text-[#D06F15]">history.</b>
                </p>
                <p className="text-body mb-2">i'm expected to graduate in <b className="text-[#D06F15]">spring of 2027,</b>
                  <br/>with aspirations of pursuing a career in <b className="text-[#D06F15]">full-stack</b>
                  <br/>and <b className="text-[#D06F15]">software development!</b></p>
            </div>
          </div>

          <p className="about-headers flex justify-center mt-8">my cats!</p>
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
          <p className="about-headers flex justify-center mt-18">my interests!</p>
          <div className="flex ml-24 mb-10">
              <Image src="/ava-elisey-dubs.svg"
                alt="ava elisey and dubs"
                width={380}
                height={250}/>
              <p className="ml-12 mt-12">one of my favorite things to do is spend time
                <br/>with by best friend, <b className="text-[#D06F15]">elise!</b>
                <br/>we like to watch bad movies, thrift, and 
                <br/>make silly crafts together!</p>
          </div>            
          <div className="flex ml-24 mb-10">
              <p>i'm a huge fan of <b className="text-[#D06F15]">grunge</b> music!
                <br/>my mom was an original fan of the genre
                <br/>in the 90s so i've been listening to grunge
                <br/>since the womb.
                <br/>my favorite bands are <b className="text-[#D06F15]">alice in chains</b>
                <br/>and <b className="text-[#D06F15]">soundgarden!</b></p>
              <div className="flex ml-12">
                <Image src="/alice-about.svg"
                  alt="alice in chains"
                  width={200}
                  height={200}
                  className="-translate-y-10 mr-8"/>
                <Image src="/soundgarden-about.svg"
                  alt="soundgarden"
                  width={200}
                  height={200}
                  className="translate-y-10"/>
              </div>
          </div>
          <div>
            <p className="ml-24">i'm also a big fan of <b className="text-[#D06F15]">pokemon!</b>
                <br/>the gen 1 remakes are some of my favorite video games, with pokemon
                <br/>platinum following close behind.
                <br/>i also really like the <b className="text-[#D06F15]">red dead redemption series</b> and <b className="text-[#D06F15]">little big planet!</b>
                <br/>here's my ideal pokemon team, full of some of my favorites:
              </p>
              <div className="flex justify-center mt-10">
                <Image src="/pokemon/empoleon.png" 
                  alt="empoleon"
                  width={150}
                  height={150}
                  unoptimized/>
                <Image src="/pokemon/exeggutor.png" 
                  alt="exeggutor"
                  width={150}
                  height={150}
                  unoptimized/>
                <Image src="/pokemon/gengar.png" 
                  alt="gengar"
                  width={150}
                  height={150}
                  unoptimized/>
                <Image src="/pokemon/ampharos.png" 
                  alt="ampharos"
                  width={150}
                  height={150}
                  unoptimized/>
                <Image src="/pokemon/garchomp.png" 
                  alt="garchomp"
                  width={150}
                  height={150}
                  unoptimized/>
                <Image src="/pokemon/snorlax.png" 
                  alt="snorlax"
                  width={150}
                  height={150}
                  unoptimized/>
              </div>
          </div>
          <div className="flex justify-center mb-4 mt-14">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  )
}