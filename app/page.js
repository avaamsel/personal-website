import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className = "flex">
        <Navbar/>
        <p>meow meow meow meow!</p>
        <Image src ="/turdie-home.svg"
          alt="turdie home"
          height = {244}
          width = {244}/>
        <Image src ="/bubby-home.svg"
          alt="bubby home"
          height = {244}
          width = {244}/>
      </div>
      
      <Footer/>
    </div>
      
  )
}