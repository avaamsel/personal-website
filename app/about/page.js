import Sidebar from "../components/Sidebar";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar/>
        <div className="flex-col ml-24">
          <p className="about">about me!</p>
        </div>
      </div>
      
    </div>
  )
}