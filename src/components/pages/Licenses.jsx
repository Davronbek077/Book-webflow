import React from 'react'
import "../pages/Pages.css"

const Licenses = () => {
  return (
    <div className='licenses'>
      <section className='licenses-banner-section'>
            <div className="container">
            <h2>Licenses</h2>
            <p>There are many variations of passages of Lorem Ipsum available,  
              have suffered alteration in some form.</p>
            </div>
        </section>

        <section className='licenses-section'>
          <div className="container">
            <div className="licenses-wrapper">
              <div className="licenses-text">
                <h3>Photography</h3>
                <p>All images used in the <span>Pages</span> Webflow Template are licensed for free personal and commercial use. 
                  If you'd like to use any specific image, you can check the 
                  licenses and download the images for free on <span>Unsplash, Pexels.</span></p>
              </div>

              <div className="licenses-text">
                <h4>Pexels:</h4>
                <p>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8</p>
              </div>

              <div className="licenses-text">
                <h4>Unsplash:</h4>
                <p>Image 1, Image 2, Image 3</p>
              </div>

              <div className="licenses-text">
                <h3>Fonts</h3>
                <p>Pages template uses free licensed <span>Google Fonts.</span> Please check <span>Cardo</span> and <span>Inter.</span></p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Licenses
