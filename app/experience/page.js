import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-shrink-0">
        <Sidebar/>
      </div>

      <div className="flex-1 overflow-y-scroll">
        <div className="flex-col">
          <p className="experience ml-6 lg:ml-24">my experience!</p>
          <div className="ml-6 lg:ml-24 mt-4 mb-4">
            <a href="/AvaNunesResume-July2025.pdf" target="blank" className="resume">PDF of my current resume!</a>
          </div>

          <div>
            <div className="flex flex-col lg:flex-row ml-6 lg:ml-24 experience-box1">
              <Image src="/experience/experience-box2.svg"
                alt="narb experience"
                width={125}
                height={125}
                className="mx-auto lg:mx-0 mb-4 lg:mb-0"/>

              <div className="ml-0 lg:ml-6 text-center lg:text-left">
                <p className="title1">narb</p>
                <p className="text-[#F9A75B] font-semibold">software developer intern | june 2025 - present</p>
                <p className="box-text">working to develop nhabits and maintain narb's website!</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row ml-6 lg:ml-24 experience-box4 mt-6 lg:mt-0">
              <Image src="/experience/seal-experience.svg"
                alt="seal experience"
                width={125}
                height={125}
                className="mx-auto lg:mx-0 mb-4 lg:mb-0"/>

              <div>
                <div className="ml-0 lg:ml-6 text-center lg:text-left">
                  <p className="title4">sensors, energy, & automation laboratory</p>
                  <p className="text-[#9DD575] font-semibold">web team lead | march 2025 - present
                  </p>
                  <p className="box-text">leading a group of around 12 college and high school students in writing academic papers and developing the lab&apos;s productivity software, websites, and other software projects</p>
                </div>

                <div className="ml-0 lg:ml-6 mt-2 text-center lg:text-left">
                  <p className="text-[#9DD575] font-semibold">lab associate + research assistant | january 2025 - present</p>
                  <p className="box-text">conducting research on the design and implementation of novel custom gpts and its implications for human-ai interaction</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row ml-6 lg:ml-24 experience-box3 mt-6 lg:mt-0">
              <Image src="/experience/webimpact-experience.svg"
                alt="web impact experience"
                width={125}
                height={125}
                className="mx-auto lg:mx-0 mb-4 lg:mb-0"/>

              <div className="ml-0 lg:ml-6 text-center lg:text-left">
                <p className="title3">web impact uw</p>
                <p className="text-[#DF99B9] font-semibold">web developer & project lead | october 2024 - june 2025</p>
                <p className="box-text">creating websites for UW clubs and local businesses in collaboration with design teams to develop user-friendly and responsive ui/ux</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row ml-6 lg:ml-24 experience-box2 mt-6 lg:mt-0">
              <Image src="/experience/allenschool-experience.svg"
                alt="allen school experience"
                width={125}
                height={125}
                className="mx-auto lg:mx-0 mb-4 lg:mb-0"/>

              <div className="ml-0 lg:ml-6 text-center lg:text-left">
                <p className="title2">paul g. allen school of computer science & engineering</p>
                <p className="text-[#C199DF] font-semibold">cse 190b undergraduate teaching assistant | 
                  <br/>september 2024 - december 2024</p>
                <p className="box-text">prepared and provided activities pertaining to academic success, career preparation, personal growth, as well as inclusive behavior and responsibility in computer science</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row ml-6 lg:ml-24 experience-box1 mt-6 lg:mt-0">
              <Image src="/experience/experience-box1.svg"
                alt="math and cs tutor experience"
                width={125}
                height={125}
                className="mx-auto lg:mx-0 mb-4 lg:mb-0"/>

              <div className="ml-0 lg:ml-6 text-center lg:text-left">
                <p className="title1">self-employed</p>
                <p className="text-[#F9A75B] font-semibold">math & computer science tutor | september 2022 - 2024</p>
                <p className="box-text">tutored high school students primarily in topics such as geometry, algebra ii, trigonometry, and java</p>
              </div>
            </div>
          </div>

          <p className="experience-headers flex justify-center mt-12 lg:mt-8">my skills!</p>
          <div>
            <div className="ml-6 lg:ml-24 experience-box5">
              <p className="title5 text-center lg:text-left">programming languages:</p>
              <p className="box-text text-center lg:text-left">java, javascript, typescript, c, c++, python, sql, html, css</p>
            </div>
            
            <div className="ml-6 lg:ml-24 experience-box5 mt-6 lg:mt-0">
              <p className="title5 text-center lg:text-left">frameworks + tools:</p>
              <p className="box-text text-center lg:text-left">next.js, react, figma, sanity, git, junit, bootstrap, latex, react native</p>
            </div>
            
          </div>

          <p className="experience-headers flex justify-center mt-12 lg:mt-8">education!</p>
          <div>
            <div className="flex flex-col lg:flex-row ml-6 lg:ml-24 experience-box5">
              <Image src="/experience/uw-experience.svg"
                alt="uw experience"
                width={125}
                height={125}
                className="mx-auto lg:mx-0 mb-4 lg:mb-0"/>
              <div className="ml-0 lg:ml-6 text-center lg:text-left">
                <p className="title5">university of washington seattle</p>
                <p className="text-[#53B5AD] font-semibold">computer science + history | september 2023 - june 2027</p>
                <p className="box-text"><b>activities: </b>women in computing, cse undergraduate ta, web impact uw, seal undergraduate research assistant, phi alpha theta</p>
                <p className="box-text"><b>awards: </b>2024 - 2025 annual dean&apos;s list</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row ml-6 lg:ml-24 experience-box5 mt-6 lg:mt-0">
              <Image src="/experience/mlhs-experience.svg"
                alt="mlhs experience"
                width={125}
                height={125}
                className="mx-auto lg:mx-0 mb-4 lg:mb-0"/>
              
              <div className="ml-0 lg:ml-6 text-center lg:text-left">
                <p className="title5">moses lake high school</p>
                <p className="text-[#53B5AD] font-semibold">august 2019 - june 2023 | 4.0 gpa</p>
                <p className="box-text"><b>activities: </b>national honor society, knowledge bowl, varisty tennis, math team, mu alpha theta, key club, senior senator</p>
                <p className="box-text"><b>awards: </b>mlhs top 10, ap scholar with distinction, rural and small town recognition award, outstanding senior - math, outstanding senior - english</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4 mt-12 lg:mt-0">
            <Footer/>
          </div>
        </div>
      </div>    
    </div>
  )
}