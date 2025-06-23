"use client"
import { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar"
import Image from "next/image";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    setShowPopup(true);
    // setTimeout(() => setShowPopup(false), 3000);
    e.target.reset();
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar/>
        <div className="flex-col overflow-y-auto flex-1">
          <p className="contact ml-24">contact me!</p>
          <div className="flex justify-center items-center mt-12 ml-42">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name"
                placeholder="please enter your first and last name!" required
                className="box-name"/>
              
              <input type="email" name="email"
                placeholder="please enter your email!" required
                className="box-email mt-4"/>
                  
              <textarea name="message" rows="8"
                placeholder="please enter your message!" required
                className="box-message mt-4 w-full"/>
              <div className="flex justify-center items-center">
                    <button type="submit" id="submit" className="">
                      <Image src="submit-bubble-contact.svg"
                        alt="submit bubble contact"
                        width={150}
                        height={95}
                        className="submit translate-x-68 -translate-y-32"/>
                    </button>
                </div> 
            </form>
          </div>

          {showPopup && (
            <div>
              <p className="message"> 
                thank you for the message! <br/>i will try to respond as soon as possible!
              </p>

              <div className="-translate-y-18">
                <Footer/> 
              </div>  
            </div> 
          )}

          {!showPopup && (
            <div className="mt-2">
              <Footer/>  
            </div> 
          )}          
        </div>
      </div>
    </div>
  );
}

// want to add a message when submitted -- like a pop up at the bottom of the screen