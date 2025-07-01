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
          <div className="ml-24">
            <a href="" target="blank">PDF of my current resume!</a>
          </div>

          <div>
            <div className="flex ml-24 experience-box1">
              <Image src="/experience/experience-box2.svg"
                alt="narb experience"
                width={125}
                height={125}/>

              <div className="ml-6">
                <p className="title1">narb</p>
                <p className="text-[#F9A75B] font-semibold">june 2025 - present | mobile application developer intern</p>
                <p><b>activities: </b>women in computing, cse undergraduate ta, web impact uw, seal undergraduate research assistant, phi alpha theta</p>
                <p><b>awards: </b>2024 - 2025 annual dean's list</p>
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
                  <p className="text-[#9DD575] font-semibold">march 2025 - present | web team lead</p>
                  <p><b>activities: </b>women in computing, cse undergraduate ta, web impact uw, seal undergraduate research assistant, phi alpha theta</p>
                  <p><b>awards: </b>2024 - 2025 annual dean's list</p>
                </div>

                <div className="ml-6 mt-2">
                  <p className="text-[#9DD575] font-semibold">january 2025 - present | lab associate + research assistant</p>
                  <p><b>activities: </b>women in computing, cse undergraduate ta, web impact uw, seal undergraduate research assistant, phi alpha theta</p>
                  <p><b>awards: </b>2024 - 2025 annual dean's list</p>
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
                <p className="text-[#DF99B9] font-semibold">october 2024 - present | web developer</p>
                <p><b>activities: </b>women in computing, cse undergraduate ta, web impact uw, seal undergraduate research assistant, phi alpha theta</p>
                <p><b>awards: </b>2024 - 2025 annual dean's list</p>
              </div>
            </div>

            <div className="flex ml-24 experience-box2">
              <Image src="/experience/allenschool-experience.svg"
                alt="allen school experience"
                width={125}
                height={125}/>

              <div className="ml-6">
                <p className="title2">paul g. allen school of computer science & engineering</p>
                <p className="text-[#C199DF] font-semibold">september 2024 - december 2024 | cse 190b undergraduate teaching assistant</p>
                <p><b>activities: </b>women in computing, cse undergraduate ta, web impact uw, seal undergraduate research assistant, phi alpha theta</p>
                <p><b>awards: </b>2024 - 2025 annual dean's list</p>
              </div>
            </div>

            <div className="flex ml-24 experience-box1">
              <Image src="/experience/experience-box1.svg"
                alt="math and cs tutor experience"
                width={125}
                height={125}/>

              <div className="ml-6">
                <p className="title1">self-employed</p>
                <p className="text-[#F9A75B] font-semibold">september 2022 - september 2024 | math & computer science tutor</p>
                <p><b>activities: </b>women in computing, cse undergraduate ta, web impact uw, seal undergraduate research assistant, phi alpha theta</p>
                <p><b>awards: </b>2024 - 2025 annual dean's list</p>
              </div>
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
                <p className="text-[#53B5AD] font-semibold">september 2023 - june 2027 | computer science + history</p>
                <p><b>activities: </b>women in computing, cse undergraduate ta, web impact uw, seal undergraduate research assistant, phi alpha theta</p>
                <p><b>awards: </b>2024 - 2025 annual dean's list</p>
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
                <p><b>activities: </b>national honor society, knowledge bowl, varisty tennis, math team, mu alpha theta, key club, senior senator</p>
                <p><b>awards: </b>mlhs top 10, ap scholar with distinction, rural and small town recognition award, outstanding senior - math, outstanding senior - english</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Footer/>
          </div>
        </div>
      </div>    
    </div>
  )
}