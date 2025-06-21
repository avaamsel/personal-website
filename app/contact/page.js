import Sidebar from "../components/Sidebar"

export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar/>
        <div className="flex-col ml-24">
          <p className="contact">contact me!</p>
        </div>
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