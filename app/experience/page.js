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
          <p className="experience ml-24">my experience!</p>
          <div className="ml-24 mt-4 mb-4">
            <a href="/AvaNunesResume-June2025.pdf" target="blank" className="resume">PDF of my current resume!</a>
          </div>

          <div>
            <div className="flex ml-24 experience-box1">
              <Image src="/experience/experience-box2.svg"
                alt="narb experience"
                width={125}
                height={125}/>

              <div className="ml-6">
                <p className="title1">narb</p>
                <p className="text-[#F9A75B] font-semibold">mobile application developer intern | june 2025 - present</p>
                <p className="box-text">working to develop nhabits!</p>
              </div>
            </div>

            <div className="flex ml-24 experience-box4">
              <Image src="/experience/seal-experience.svg"
                alt="seal experience"
                width={125}
                height={125}/>

              <div>
                <div className="ml-6">
                  <p className="title4">sensors, energy, & automation laboratory</p>
                  <p className="text-[#9DD575] font-semibold">web team lead | march 2025 - present
                  </p>
                  <p className="box-text">leading a group of around 12 college and high school students in writing academic papers and developing the lab&apos;s productivity software, websites, and other software projects</p>
                  <p className="box-text">maintaining and improving the seal and uw industrial training and assessment center websites and servers</p>
                </div>

                <div className="ml-6 mt-2">
                  <p className="text-[#9DD575] font-semibold">lab associate + research assistant | january 2025 - present</p>
                  <p className="box-text">conducting research on the design and implementation of novel custom gpts and its implications for human-ai interaction</p>
                </div>
              </div>
            </div>

            <div className="flex ml-24 experience-box3">
              <Image src="/experience/webimpact-experience.svg"
                alt="web impact experience"
                width={125}
                height={125}/>

              <div className="ml-6">
                <p className="title3">web impact uw</p>
                <p className="text-[#DF99B9] font-semibold">web developer & project lead | october 2024 - present</p>
                <p className="box-text">creating and deploying responsive websites for clubs and local businesses in collaboration with design teams to inform user-friendly and accessible ui/ux</p>
                <p className="box-text">leading development of projects and providing guidance in tools like next.js, sanity, git, and javascript</p>
              </div>
            </div>

            <div className="flex ml-24 experience-box2">
              <Image src="/experience/allenschool-experience.svg"
                alt="allen school experience"
                width={125}
                height={125}/>

              <div className="ml-6">
                <p className="title2">paul g. allen school of computer science & engineering</p>
                <p className="text-[#C199DF] font-semibold">cse 190b undergraduate teaching assistant
                  <br/>september 2024 - december 2024</p>
                <p className="box-text">focused on a group of 30 computer science students from a direct-admit class of 320+</p>
                <p className="box-text">prepared and provided activities pertaining to academic success, career preparation, personal growth, as well as inclusive behavior and responsibility in computer science</p>
              </div>
            </div>

            <div className="flex ml-24 experience-box1">
              <Image src="/experience/experience-box1.svg"
                alt="math and cs tutor experience"
                width={125}
                height={125}/>

              <div className="ml-6">
                <p className="title1">self-employed</p>
                <p className="text-[#F9A75B] font-semibold">math & computer science tutor
                  <br/>september 2022 - september 2024</p>
                <p className="box-text">tutored high school students primarily in math and computer science</p>
                <p className="box-text">specialized in geometry, algebra ii, trigonometry, and java</p>
              </div>
            </div>
          </div>

          <p className="experience-headers flex justify-center mt-8">my skills!</p>
          <div>
            <div className="ml-24 experience-box5">
              <p className="title5">programming languages:</p>
              <p>java, javascript, typescript, c, c++, python, sql, html, css</p>
            </div>
            
            <div className="ml-24 experience-box5">
              <p className="title5">frameworks + tools:</p>
              <p>next.js, react, figma, sanity, git, junit, bootstrap, latex, react native</p>
            </div>
            
          </div>

          <p className="experience-headers flex justify-center mt-8">education!</p>
          <div>
            <div className="flex ml-24 experience-box5">
              <Image src="/experience/uw-experience.svg"
                alt="uw experience"
                width={125}
                height={125}/>
              <div className="ml-6">
                <p className="title5">university of washington seattle</p>
                <p className="text-[#53B5AD] font-semibold">computer science + history | september 2023 - june 2027</p>
                <p className="box-text"><b>activities: </b>women in computing, cse undergraduate ta, web impact uw, seal undergraduate research assistant, phi alpha theta</p>
                <p className="box-text"><b>awards: </b>2024 - 2025 annual dean's list</p>
              </div>
            </div>

            <div className="flex ml-24 experience-box5">
              <Image src="/experience/mlhs-experience.svg"
                alt="mlhs experience"
                width={125}
                height={125}/>
              
              <div className="ml-6">
                <p className="title5">moses lake high school</p>
                <p className="text-[#53B5AD] font-semibold">august 2019 - june 2023 | 4.0 gpa</p>
                <p className="box-text"><b>activities: </b>national honor society, knowledge bowl, varisty tennis, math team, mu alpha theta, key club, senior senator</p>
                <p className="box-text"><b>awards: </b>mlhs top 10, ap scholar with distinction, rural and small town recognition award, outstanding senior - math, outstanding senior - english</p>
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