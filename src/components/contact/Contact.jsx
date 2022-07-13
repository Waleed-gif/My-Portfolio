import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>waleedshahbaz012@gmail.com</h5>
            <a href="mailto:waleedshahbaz012@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
          <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Waleed Shehbaz</h5>
            <a href="https://web.facebook.com/waleed.shehbaz.35" target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
          <BsWhatsapp className='contact_option-icon '/>
            <h4>Messenger</h4>
            <h5>+92 320 1742272</h5>
            <a href="https://api.whatsapp.com/send?phone+923201742272" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* End of Contact Option */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
