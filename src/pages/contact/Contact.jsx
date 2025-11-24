import React from 'react'
import contact1 from "../../assets/contact1.png"
import contact2 from "../../assets/contact2.png"
import contact3 from "../../assets/contact3.png"
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <section className='contact-banner-section'>
            <div className="container">
            <h2>My Store</h2>
            <p>There are many variations of passages of Lorem Ipsum available,  
              have suffered alteration in some form.</p>
            </div>
        </section>
      <section className='about-contact-section'>
            <div className="container">

            <div className="contact-wrapper">
              <div className="contact-text">
              <h2 className='contact-title'>Keep in Touch</h2>
              <p className='contact-p'>There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable.</p>

                <div className="contact-icons">
                  <div className="contact-icon">
                    <div className="icon">
                      <img src={contact1} alt="" />
                    </div>
                    
                    <div className="icon-text">
                      <h4>Visit Us :</h4>
                      <p>No: 09a, Downtown, San Dieago, USA.</p>
                    </div>
                  </div>

                  <div className="contact-icon">
                    <div className="icon">
                      <img src={contact2} alt="" />
                    </div>
                    
                    <div className="icon-text">
                      <h4>Drop Us :</h4>
                      <p>support@pages.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-icon">
                    <div className="icon">
                      <img src={contact3} alt="" />
                    </div>
                    
                    <div className="icon-text">
                      <h4>Call Us :</h4>
                      <p>Call: 1-800-123-9999</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <div className="form-name">
                  <input type="text" placeholder='Name' className='name-input' />
                  <input type="text" placeholder='Email' className='email-input' />
                </div>
                <div className="form-other">
                  <input type="text" placeholder='Phone' className='phone-input'/>
                  <textarea placeholder='Message' className='textarea'></textarea>
                </div>

                <div className="contact-send">
                  <div className="contact-check">
                    <input id='checkbox' type="checkbox" />
                    <p>Keep me up to date with news and offers from time to time by email</p>
                  </div>

                  <div className="contact-send-btn">
                    <button>Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>

        <section className='questions-section'>
          <div className="container">
            <h2 className='questions-title'>Frequent Questions?</h2>
            <div className="questions-wrap">
              <div className="left-wrap">
                <h4>Do you offer discounts for education?</h4>
                <div className="question-text">
                  <h4>Is Hack Producivity book available on the one stores?</h4>
                  <p>Many desktop publishing packages and web page editors to now use 
                  Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.</p>
                  <p>There are many variations of of Lorem Ipsum available.</p>
                </div>
                <h4>What is Hack Productivity book about?</h4>
                <h4>Where can I get Hack Productivity book?</h4>
                <h4>Do you offer discounts for education?</h4>
              </div>

              <div className="right-wrap">
                <h4>Do you offer discounts for education?</h4>
                <h4>Is Hack Producivity book available on the one stores?</h4>
                <h4>What is Hack Productivity book about?</h4>
                <h4>What is Hack Productivity book about?</h4>
                <h4>Where can I get Hack Productivity book?</h4>
                <h4>Where can I get Hack Productivity book?</h4>
                <h4>Where can I get Hack Productivity book?</h4>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact
