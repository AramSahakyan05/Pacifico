import React from 'react'
import "./Contact.scss";
import ContactHeader from './contact-header/ContactHeader'
import ContactBody from './contact-body/ContactBody'

const Contact = () => {
  return (
    <div className='contact'>
      <ContactHeader />
      <ContactBody />
    </div>
  )
}

export default Contact
