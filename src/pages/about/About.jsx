import React from 'react'
import Johnabout from "../../assets/aboutJohn.jpg"
import f from  "../../assets/f.png"
import twitter from "../../assets/twitter.png"
import lin from  "../../assets/linkedin.png"
import myStory from "../../assets/myStory.jpg"
import bookPng1 from "../../assets/Book1.png"
import bookCard from "../../assets/bookCard.png"
import trusted1 from "../../assets/trusted1.png"
import trusted2 from "../../assets/trusted2.png"
import trusted3 from "../../assets/trusted3.png"
import trusted4 from "../../assets/trusted4.png"
import "./About.css"

const About = () => {
  return (
    <div className='about'>
        <section className='about-banner-section'>
            <div className="container">
            <h2>About the Author</h2>
            <p>There are many variations of passages of Lorem Ipsum available,  
                have suffered alteration in some form.</p>
            </div>
        </section>

        <section className='about-john-section'>
            <div className="container">
                <div className="about-john">
                    <div className="john-img">
                        <img src={Johnabout} alt="" />
                    </div>

                    <div className="john-wrap">
                        <div className="john-info">
                            <div className="country">
                                <p>Country :</p>
                                <p>United Kingdom</p>
                            </div>

                            <div className="language">
                                <p>Language: </p>
                                <p>English</p>
                            </div>

                            <div className="genre">
                                <p>Genre: </p>
                                <p>Historiography</p>
                            </div>

                            <div className="date">
                                <p>Publication date: </p>
                                <p>1991</p>
                            </div>

                            <div className="share">
                                <p>Share us on: </p>
                                <div className="share-icons">
                                    <img src={f} alt="" />
                                    <img src={twitter} alt="" />
                                    <img src={lin} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="john-text">
                            <h2>About Dr. John Abraham</h2>
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat 
                                predefined chunks as necessary, making this the first true 
                                generator on the Internet. It uses a dictionary of over 200 
                                Latin words, that can combined with a handful of model 
                                sentence structures.</p>

                                <div className="john-text-btn">
                                    <button>Contact now</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="my-story-section">
            <div className="container">
                <div className="story-wrapper">
                <div className="story-text">
                    <div className="story-title">
                    <h2>My Story</h2>
                    <p>Making this the first true generator on the Internet. 
                        It uses a dictionary of over 200 Latin words, combined with 
                        a handful of model sentence structures.</p>
                    </div>

                    <div className="story-parts">
                        <div className="story-part">
                            <div className="number">
                                <h3>01</h3>
                            </div>
                            <div className="story-part-text">
                            <h3>Great Author Awards - 1996 & 2000</h3>
                            <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                            </div>
                        </div>

                        <div className="story-part">
                            <div className="number">
                                <h3>02</h3>
                            </div>
                            <div className="story-part-text">
                            <h3>10 Times New York Times ® Best Seller</h3>
                            <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                            </div>
                        </div>

                        <div className="story-part">
                            <div className="number">
                                <h3>03</h3>
                            </div>
                            <div className="story-part-text">
                            <h3>Writer of Hack Productivity</h3>
                            <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="story-img">
                    <img src={myStory} alt="" />
                </div>
                </div>
                <div className="story-wrapper story-wrapper-hide">
                <div className="story-img">
                    <img src={myStory} alt="" />
                </div>
                
                <div className="story-text">
                    <div className="story-title">
                    <h2>My Story</h2>
                    <p>Making this the first true generator on the Internet. 
                        It uses a dictionary of over 200 Latin words, combined with 
                        a handful of model sentence structures.</p>
                    </div>

                    <div className="story-parts">
                        <div className="story-part">
                            <div className="number">
                                <h3>01</h3>
                            </div>
                            <div className="story-part-text">
                            <h3>Great Author Awards - 1996 & 2000</h3>
                            <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                            </div>
                        </div>

                        <div className="story-part">
                            <div className="number">
                                <h3>02</h3>
                            </div>
                            <div className="story-part-text">
                            <h3>10 Times New York Times ® Best Seller</h3>
                            <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                            </div>
                        </div>

                        <div className="story-part">
                            <div className="number">
                                <h3>03</h3>
                            </div>
                            <div className="story-part-text">
                            <h3>Writer of Hack Productivity</h3>
                            <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className='authors-book-section about-books'>
        <div className="container">
          <h3 className='book-wrap-title'>Author’s Book Includes</h3>
          <div className="book-wrap">
            <div className="book">
              <div className="book-img">
              <img src={bookPng1} alt="" />
              </div>
              <div className="books-text">
                <h3 id='title'>Atomic One’s</h3>
                <p id='text'>Many variations of passages of Lorem Ipsum willing araise  alteration in some form.</p>
                <div className="card-book-pages">
                  <div className="pages">
                    <h3>Pages:</h3>
                    <p>586pages</p>
                  </div>
                  <div className="pages">
                    <h3>Length:</h3>
                    <p>10 Hours</p>
                  </div>
                </div>

                <div className="book-btn">
                  <button>Order Today</button>
                </div>
              </div>
            </div>

            <div className="book">
              <div className="book-img">
              <img src={bookCard} alt="" />
              </div>
              <div className="books-text">
                <h3 id='title'>Atomic One’s</h3>
                <p id='text'>Many variations of passages of Lorem Ipsum willing araise  alteration in some form.</p>
                <div className="card-book-pages">
                  <div className="pages">
                    <h3>Pages:</h3>
                    <p>586pages</p>
                  </div>
                  <div className="pages">
                    <h3>Length:</h3>
                    <p>10 Hours</p>
                  </div>
                </div>

                <div className="book-btn">
                  <button>Order Today</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='trusted-section about-trusted'>
        <div className="container">
          <h2 className='trusted-title'>Trusted by the Best</h2>
          <div className="trusted-wrap">
            <div className="trusted-wrap-part">
            <div className="trusted">
              <img src={trusted1} alt="" />
              <h3>Amazen Corp</h3>
              <p>A long established fact that a who 
                looking at its layout.</p>
            </div>
            <div className="trusted">
              <img src={trusted2} alt="" />
              <h3>Megan Books</h3>
              <p>A long established fact that a who 
                looking at its layout.</p>
            </div>
            </div>
            <div className="trusted-wrap-part">
            <div className="trusted">
              <img src={trusted3} alt="" />
              <h3>Los Books</h3>
              <p>A long established fact that a who 
                looking at its layout.</p>
            </div>
            <div className="trusted">
              <img src={trusted4} alt="" />
              <h3>Urban Lib</h3>
              <p>A long established fact that a who 
                looking at its layout.</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      <div className='free-chapter'>
      <section className='free-chapter-section about-chapter-wrapper'>
        <div className="container">
          <h2 className='free-chapter-title'>Read a free chapter</h2>

          <div className="free-chapter-wrap">
            <p>Making this the first true value generator 
              on the Internet. It of over 200 Latin words, 
              combined with a handful.</p>
          </div>
          <div className="chapter-input">
                <input type="text" placeholder='Your Email id...'/>
                <button>Subscribe</button>
              </div>
        </div>
      </section>
    </div>
      
    </div>
  )
}

export default About
