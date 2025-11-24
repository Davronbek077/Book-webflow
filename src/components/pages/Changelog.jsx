import React from 'react'
import "../pages/Pages.css"

const Changelog = () => {
  return (
    <div className='changelog'>
        <section className='changelog-banner-section'>
            <div className="container">
            <h2>Changelog</h2>
            <p>There are many variations of passages of Lorem Ipsum available,  
                have suffered alteration in some form.</p>
            </div>
        </section>

        <section className='changelog-section'>
            <div className="container">
                <div className="changelog-wrap">
                    <h2>V.1</h2>
                    <p>Initial Pages Webflow Template Release</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Changelog
