import React from 'react'
import NotError from "../assets/404.png"
import { Link } from 'react-router-dom'
import "./NotFound.css"

const NotFound = () => {

  return (
    <div className='notFound'>
        <section className='notFound-banner-section'>
            <div className="container">
            <h2>Page Error</h2>
            <p>There are many variations of passages of Lorem Ipsum available,  
                have suffered alteration in some form.</p>
            </div>
        </section>
      <section className="notFound-wrapper">
        <div className="container">
        <img src={NotError} alt="" />
            <h3>Page not Found!!!</h3>
            <p>The page you are looking for doesn't exist. Please try searching for some other page, 
                or return to the website's homepage to find what you're looking for.
                </p>

            <div className="notFound-btn">
                <Link to={"/"}>Back to Home</Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound
