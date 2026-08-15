import React from 'react';
import "./Contact.css";
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a question or want to work together? Send us a message!</p>
      </div>
        <form action="">
            <input type="text" name='UserName' placeholder='Enter your name' />
            <input type="text" name='email' placeholder='Enter your Email' />
            <textarea name="message" placeholder='Enter your message here' ></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact