import React from 'react'
import footerIcon1 from "../../assets/footer.png"
import footerIcon2 from "../../assets/footer2.png"
import footerIcon3 from "../../assets/footer3.png"
import footerIcon4 from "../../assets/footer4.png"
import footerLogo from "../../assets/LogoFooter.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="container">
        <div className="footer-wrapper">
            <div className="footer-part1">
            <div className="pages-icons">
                <div className="footer-title">
                    <img src={footerLogo} alt="" />
                    <h3>Pages</h3>
                </div>
                <div className="icons">
                    <a href="https://www.facebook.com/" target="_blank">
                    <div className="icon">
                    <img src={footerIcon1} alt="" />
                    </div>
                    </a>
                    <a href="https://x.com/" target="_blank">
                    <div className="icon">
                    <img  src={footerIcon2} alt="" />
                    </div>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                    <div className="icon">
                    <img src={footerIcon3} alt="" />
                    </div>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                    <div className="icon">
                    <img src={footerIcon4} alt="" />
                    </div>
                    </a>
                </div>
            </div>

            <div className="explore">
                <h3>Explore</h3>
                <p>Home</p>
                <p>About Us</p>
                <p>Services</p>
                <p>Appointments</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>
            </div>

            <div className="footer-part2">
            <div className="utily-pages">
                <h3>Utility Pages</h3>
                <p>Start here</p>
                <p>Style guide</p>
                <p>404 not found</p>
                <p>Password protected</p>
                <p>Licenses</p>
                <p>Changelog</p>
            </div>

            <div className="keep-touch">
                <h3>Keep in Touch</h3>
                <div className="address">
                    <p id='title'>Address:</p>
                    <p>24A Kingston St, Los Vegas NC 28202, USA.</p>
                </div>
                <div className="mail">
                    <p id='title'>Mail:</p>
                    <p>support@doctors.com</p>
                </div>
                <div className="phone">
                    <p id='title'>Phone:</p>
                    <p>(+22) 123 - 4567 - 900</p>
                </div>
            </div>
            </div>
        </div>
      </div>

      <div className="bottom-text-footer">
        <p><span>Drafted by</span> Victorflow - <span>Powered by</span> Webflow</p>
      </div>
    </footer>
  )
}

export default Footer
