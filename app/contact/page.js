import Sidebar from "../components/Sidebar"
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar/>
        <div className="flex-col ml-24">
          <p className="contact">contact me!</p>
        </div>
          <div className="flex justify-center mb-10 mt-2 ml-12 space-x-8">
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot1"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
            <Image src="/row-dots/dot1-home.svg"
              alt="home dot"
              height={22}
              width={22}
              className="hover:-translate-y-1"/>
          </div>
          <p className="navbar-contact-bottom flex justify-center mb-8 text-[18px]">ava nunes  &copy; {new Date().getFullYear()}</p>

      </div>
             {/* <main
            style={{
            padding: '2rem',
            background: 'linear-gradient(to bottom, #F4F3F2, #F3FF99)',
            textAlign: 'center',
            }}>
            {/* Contact Us Section */}
            {/* <div
            style={{
                maxWidth: '655px',
                margin: '2rem auto',
                padding: '2rem',
            }}
            >
            <p id="blue-header-contact" className="font-extrabold pb-4">CONTACT US</p>
            <p style={{ color: '#164EFF', marginBottom: '1.5rem' }}>
                Feel free to contact us anytime through our socials or using the form below!
            </p>
            <form onSubmit={handleSubmit}>
                <p id="form-header">Full Name</p>
                <input
                type="text"
                name="name"
                placeholder="Please write your first name and last name"
                required
                style={inputStyle}
                />
                
                <p id="form-header" className="pt-4">Your Email Address</p>
                <input
                type="email"
                name="email"
                placeholder="Please write your email address"
                required
                style={inputStyle}
                />

                <p id="form-header" className="pt-4">Message</p>
                <textarea
                name="message"
                rows="8"
                placeholder="Message starts from here"
                required
                style={inputStyle}/>

                <div className="pt-8">
                    <button type="submit" id="submit" className="font-semibold">SUBMIT</button>
                </div>
            </form>
            </div> */}
        {/* </main> */}
    </div>
  )
}