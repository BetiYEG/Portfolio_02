import React, { useRef } from "react";
import './contact.css';
import Facebook from '../../asset/facebook.png';
import Telegram from '../../asset/telegram.png';
import Email from '../../asset/email.jpg';
import Phone from '../../asset/phone.png';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_8tp3tun","template_feaorsi",
    form.current, "h-9ddiE8OjNdk1bwf")
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent!');
      }, (error) => {
        console.log(error.text);
        e.target.reset();
        alert('Email failed to send.');
      });
  };

  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="user_name" />
          <input type="email" className="email" placeholder="Your Email" name="user_email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" value="send" className="submitBtn">Submit</button>
        </form>
        <div className="links">
          <a href="https://www.facebook.com/beti.yegezaw"><img src={Facebook} alt="Facebook" className="link" /></a>
          <a href="https://t.me/maren3g"><img src={Telegram} alt="Telegram" className="link" /></a>
          <a href="mailto:betlhemyigzaw936@gmail.com"><img src={Email} alt="Email" className="link" /></a>      
          <a href="tel:+251930870239"><img src={Phone} alt="Phone" className="link" /></a>
        </div>
        </div>
    </section>
  );
}

export default Contact;