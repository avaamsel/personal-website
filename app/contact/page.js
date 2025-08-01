"use client"
import { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar"
import Image from "next/image";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const SERVICE_ID = 'service_95anskc';
  const NOTIFY_TEMPLATE_ID = 'template_lka41ji';
  const AUTOREPLY_TEMPLATE_ID = 'template_47uytej';
  const PUBLIC_KEY = 'C6S5vLSS8MS2nfB72';

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, NOTIFY_TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        emailjs.sendForm(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then(() => {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000);
            e.target.reset();
          })
          .catch((error) => {
            alert('Failed to send auto-reply. Please try again later.');
            console.error('EmailJS auto-reply error:', error);
          });
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS notification error:', error);
      });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-shrink-0">
        <Sidebar/>
      </div>

      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col">
          <p className="contact ml-24">contact me!</p>
          <div className="flex justify-center items-center mt-12 lg:ml-42">
              <form onSubmit={handleSubmit}>
                <input type="text" name="name"
                  placeholder="please enter your name!" required
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
                          className="submit translate-x-28 lg:translate-x-68 -translate-y-30 lg:-translate-y-32"/>
                      </button>
                  </div> 
              </form>
          </div>

          {showPopup && (
              <div>
                <p className="message"> 
                  thank you for the message! <br/>i will try to respond as soon as possible!
                </p>

                <div className="mb-6">
                  <Footer/> 
                </div>  
              </div> 
          )}

          {!showPopup && (
            <div className="mt-22 lg:mt-2">
              <Footer/>  
            </div> 
          )}          
        </div>
      </div>
    </div>
  );
}