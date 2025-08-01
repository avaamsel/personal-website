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
          <p className="about ml-6 lg:ml-24">about me!</p>
          <div className="flex flex-col lg:flex-row ml-0 lg:ml-24">
            <div className="flex-col -translate-y-0 lg:-translate-y-10 order-1 lg:order-1">
                <Image src="hello-bubble.svg"
                  alt="hello-bubble"
                  width={130}
                  height={75}
                  className="home-bubble translate-x-64 lg:translate-x-82 translate-y-12 lg:translate-y-12 w-[130px] h-[85px] lg:w-[160px] lg:h-[105px]"/>
                <Image src="ava-dubs-about.svg"
                  alt="ava dubs about"
                  width={390}
                  height={280}
                  className="mx-auto lg:mx-0 mb-6 lg:mb-0 w-[360px] h-[260px] lg:w-[430px] lg:h-[320px]"/>
            </div>
            <div className="mt-0 lg:mt-20 ml-4 lg:ml-12 order-2 lg:order-2 text-center lg:text-left w-full lg:w-auto max-w-[92%] lg:max-w-[600px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start justify-center lg:justify-start px-4 lg:px-0">
                <p className="mb-2 text-center lg:text-left">my name is ava!</p>
                <p className="mb-2 text-center lg:text-left">i&apos;m a current junior at the univerity of washington&apos;s allen school, majoring in <b className="text-[#D06F15]">computer science</b> and minoring in <b className="text-[#D06F15]">history.</b></p>
                <p className="mb-2 text-center lg:text-left">i&apos;m expected to graduate in <b className="text-[#D06F15]">spring of 2027,</b> with aspirations of pursuing a career in <b className="text-[#D06F15]">full-stack</b> and <b className="text-[#D06F15]">software development!</b></p>
            </div>
          </div>

          <p className="about-headers flex justify-center mt-8">my cats!</p>
          <div className="flex flex-col lg:flex-row justify-center">
              <div className="flex-col mr-0 lg:mr-18 mb-8 lg:mb-0">
                <Image src="/turdie-about.svg"
                  alt = "turdie about"
                  width={220}
                  height={220}
                  className="hover:-translate-y-3 mx-auto lg:mx-0"/>
                <p className="text-center">clementine!</p>
              </div>
              <div className="flex-col mr-0 lg:mr-18 mb-8 lg:mb-0">
                <Image src="/bubby-about.svg"
                  alt = "bubby about"
                  width={220}
                  height={220}
                  className="hover:-translate-y-3 mx-auto lg:mx-0"/>
                <p className="text-center">bubby!</p>
              </div>
              <div className="flex-col">
                <Image src="/trixie-about.svg"
                  alt = "trixie about"
                  width={220}
                  height={220}
                  className="hover:-translate-y-3 mx-auto lg:mx-0"/>
                <p className="text-center">trixie!</p>
              </div>
          </div>
          <p className="about-headers flex justify-center mt-18">my interests!</p>
          <div className="flex flex-col lg:flex-row ml-0 lg:ml-24 mb-10">
              <Image src="/ava-elisey-dubs.svg"
                alt="ava elisey and dubs"
                width={380}
                height={250}
                className="mx-auto lg:mx-0 mb-6 lg:mb-0 order-1 lg:order-1 w-[360px] h-[260px] lg:w-[430px] lg:h-[320px]"/>
              <div className="ml-4 lg:ml-12 mt-0 lg:mt-12 order-2 lg:order-2 text-center lg:text-left w-full lg:w-auto max-w-[92%] lg:max-w-[550px] mx-auto lg:mx-0">
                <p className="mb-2">one of my favorite things to do is spend time with by best friend, <b className="text-[#D06F15]">elise!</b></p>
                <p className="mb-2">we like to watch bad movies, thrift, and make silly crafts together!</p>
              </div>
          </div>            
          <div className="flex flex-col lg:flex-row ml-0 lg:ml-24 mb-10">
              <div className="ml-4 order-2 lg:order-1 text-center lg:text-left w-full lg:w-auto max-w-[92%] lg:max-w-[550px] mx-auto lg:mx-0">
                <p className="mb-2">i&apos;m a huge fan of <b className="text-[#D06F15]">grunge</b> music!</p>
                <p className="mb-2">my mom was an original fan of the genre in the 90s so i&apos;ve been listening to grunge since the womb.</p>
                <p className="mb-2">my favorite bands are <b className="text-[#D06F15]">alice in chains</b> and <b className="text-[#D06F15]">soundgarden!</b></p>
              </div>
              <div className="flex justify-center lg:justify-start ml-0 lg:ml-12 mb-6 lg:mb-0 order-1 lg:order-2">
                <Image src="/alice-about.svg"
                  alt="alice in chains"
                  width={200}
                  height={200}
                  className="-translate-y-0 lg:-translate-y-10 mr-4 lg:mr-8 w-[160px] h-[160px] lg:w-[200px] lg:h-[200px]"/>
                <Image src="/soundgarden-about.svg"
                  alt="soundgarden"
                  width={200}
                  height={200}
                  className="translate-y-0 lg:translate-y-10 w-[160px] h-[160px] lg:w-[200px] lg:h-[200px]"/>
              </div>
          </div>
          <div>
            <div className="ml-4 lg:ml-24 text-center lg:text-left w-full lg:w-auto max-w-[92%] lg:max-w-[86%] mx-auto lg:mx-0">
              <p className="mb-2">im also a big fan of <b className="text-[#D06F15]">pokemon! </b></p>
              <p className="mb-2">the gen 1 remakes are some of my favorite video games, with pokemon platinum following close behind.</p>
              <p className="mb-2">i also really like the <b className="text-[#D06F15]">red dead redemption series</b> and <b className="text-[#D06F15]">little big planet!</b></p>
              <p className="mb-2">here&apos;s my ideal pokemon team, full of some of my favorites:</p>
            </div>
              <div className="grid grid-cols-3 lg:flex lg:justify-center mt-10 gap-4 lg:gap-0">
                <Image src="/pokemon/empoleon.png" 
                  alt="empoleon"
                  width={150}
                  height={150}
                  unoptimized
                  className="mx-auto lg:mx-0"/>
                <Image src="/pokemon/exeggutor.png" 
                  alt="exeggutor"
                  width={150}
                  height={150}
                  unoptimized
                  className="mx-auto lg:mx-0"/>
                <Image src="/pokemon/gengar.png" 
                  alt="gengar"
                  width={150}
                  height={150}
                  unoptimized
                  className="mx-auto lg:mx-0"/>
                <Image src="/pokemon/ampharos.png" 
                  alt="ampharos"
                  width={150}
                  height={150}
                  unoptimized
                  className="mx-auto lg:mx-0"/>
                <Image src="/pokemon/garchomp.png" 
                  alt="garchomp"
                  width={150}
                  height={150}
                  unoptimized
                  className="mx-auto lg:mx-0"/>
                <Image src="/pokemon/snorlax.png" 
                  alt="snorlax"
                  width={150}
                  height={150}
                  unoptimized
                  className="mx-auto lg:mx-0"/>
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