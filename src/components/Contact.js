import React from "react";
import "./Contact.css";

function Contact(props) {
  const handleSendEmail = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavmishra230304@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nContact Me On: ${email}\n\n${message}`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section" style={{backgroundColor: props.theme=='light'?'#f3f4f6':'#042743'}}>
      <h2 style={{color: props.theme=='light'?'black':'white'}}>Contact Me</h2>
      <p style={{color: props.theme=='light'?'black':'silver'}}>Feel free to get in touch via email!</p>
      <form id="contact-form" onSubmit={handleSendEmail}>
        <div className="form-group" >
          <label htmlFor="name" >Name</label>
          <input type="text" id="name" placeholder="Your Name" required style={{backgroundColor: props.theme=='light'?'white':'#042743',color: props.theme=='light'?'black':'white'}}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Contact Me On</label>
          <input id="email" placeholder="Your Email Or Phone No." required  style={{backgroundColor: props.theme=='light'?'white':'#042743',color: props.theme=='light'?'black':'white'}}/>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" required  style={{backgroundColor: props.theme=='light'?'white':'#042743',color: props.theme=='light'?'black':'white'}}/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows="5"
            required
            style={{backgroundColor: props.theme=='light'?'white':'#042743',color: props.theme=='light'?'black':'white'}}
          ></textarea>
        </div>
        <button type="submit" id="send-btn">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
