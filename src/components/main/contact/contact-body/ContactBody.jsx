import React from 'react'
import "../../../../index.css";
import "./ContactBody.scss";

const ContactBody = () => {
  return (
    <div className='contact-body'>
      <form action="">
        <div className='contact-body-user'>
            <input type="text" placeholder='Full Name*' required/>
            <input type="email" placeholder='Email Adress*' required/>
            <input type="text" placeholder='Phone Number*' required/>
        </div>
        <div className='contact-body-description'>
            <textarea name="" id="" cols="65" rows="10" placeholder='Your Message․․․'></textarea>
        </div>
      </form>
        <div className='contact-body-sendBtn'>
          <a href="#sendMessage">SEND MESSAGE</a>
        </div>
    </div>
  )
}

export default ContactBody
