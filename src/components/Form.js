import "./FormStyles.css"
import React from 'react'
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_qfry1b7', 'template_iz2aiuc', e.target, 'jz2nYr0xT3Mlv6j4Z')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number"/>
        <label>Name</label>
        <input type="text" name="user_name"/>
        <label>Email</label>
        <input type="email" name="user_email"/>
        <label>Message</label>
        <textarea name="message" placeholder="Type Here"></textarea>
        <input type="submit" value="Send"/>
    </form>
  );
}
