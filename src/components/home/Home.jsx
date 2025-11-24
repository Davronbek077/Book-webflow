import React from 'react'
import bookPng from "../../assets/Book.png"
import bookPng1 from "../../assets/Book1.png"
import bookCard from "../../assets/bookCard.png"
import author1 from "../../assets/author1.png"
import qr from "../../assets/qr.png"
import trusted1 from "../../assets/trusted1.png"
import trusted2 from "../../assets/trusted2.png"
import trusted3 from "../../assets/trusted3.png"
import trusted4 from "../../assets/trusted4.png"
import getboook from "../../assets/getbook.png"
import learn from "../../assets/learn.png"
import readers1 from "../../assets/readers1.png"
import readers2 from "../../assets/readers2.png"
import readers3 from "../../assets/readers3.png"
import articles1 from "../../assets/articles1.png"
import articles2 from "../../assets/articles2.png"
import articles3 from "../../assets/articles3.png"
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <section className='book-section'>
        <div className="container">
          <div className="books-wrap">
          <div className="book-text">
            <p className='book-title'>Welcome to Pages</p>
            <h2 id='book-title2'>Books are uniquely
            portable magic </h2>
            <p id='text'>There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form.</p>
              <div className="books-btn">
                <button id='order'>Order Today</button>
                <button id='read'>Read Free Demo</button>
              </div>

              <div className="books-rating">
                <div className="book-pages">
                  <p id='title'>Pages</p>
                  <p id='text'>586pages</p>
                </div>

                <div className="book-length">
                  <p id='title'>Length:</p>
                  <p id='text'>10 Hours</p>
                </div>

                <div className="book-rating">
                  <p id='title'>Ratings</p>
                  <p id='text'>4.5/5 (305 ratings)</p>
                </div>
              </div>
          </div>

          <div className="books-img">
            <img src={bookPng} alt="" />
          </div>
          </div>
        </div>
      </section>

      <section className='authors-book-section'>
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

      <section className='authors-about-section'>
        <div className="container">
          <div className="author-wrapper">
            <div className="author-img">
              <img src={author1} alt="" />
            </div>
            
            <div className="author-wrap">
            <div className="author-text">
              <h3>About Author</h3>
              <p>All the Lorem Ipsum generators on the Internet 
                tend to repeated predefined chunks as necessary, 
                making this 
                the first true value generator on the Internet. 
                It uses a dictionary 
                of over 200 Latin words, combined with 
                a handful.</p>
            </div>

            <div className="author-number">
              <div className="number">
                <h2>02</h2>
                <p>Books Published</p>
              </div>
              <div className="number">
                <h2>4.5</h2>
                <p>User Reviews</p>
              </div>
              <div className="number">
                <h2>04</h2>
                <p>Best Seller Awards</p>
              </div>
            </div>

            <div className="qrcode">
              <div className="qr-img">
                <img src={qr} alt="" />
              </div>

              <div className="qrcode-text">
                <h3>John Abraham , Ph.d</h3>
                <p id='mail'>Mail : johnabraham@gmail.com</p>
                <p>Phone : (+2) 123 545 9000</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className='trusted-section'>
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

      <section className='get-book-section'>
        <div className="container">
          <div className="getbook-wrap">
            <div className="getbook-text">
              <h2>Get Book Copy Today!</h2>
              <p>This the first true value generator on the 
                Internet. It uses alphas dictionary of over 200 
                Latin words.</p>

                <div className="getbook-btn">
                  <button>Order Today</button>
                </div>
            </div>

            <div className="getbook-img">
              <img src={getboook} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='learn-section'>
      <div className="container">
          <h2 className='learn-title'>What will you learn?</h2>
          <div className="learn-wrap">
            <div className="learn-cards">
              <div className="learn-card1">
              <div className="learn-card">
                <div className="card-number">
                  <p>01</p>
                </div>

                <div className="card-text">
                  <p>Use HDFS & Map Reduce for storing & 
                    analyzing data at scale.</p>
                </div>
              </div>
              <div className="learn-card">
                <div className="card-number">
                  <p>02</p>
                </div>

                <div className="card-text">
                  <p>Consume streaming data using Spark 
                    Streaming, Flink, and Storm.</p>
                </div>
              </div>
              </div>
              <div className="learn-card2">
              <div className="learn-card">
                <div className="card-number">
                  <p>03</p>
                </div>

                <div className="card-text">
                  <p>Choose an appropriate data storage 
                    technology for your application.</p>
                </div>
              </div>
              <div className="learn-card">
                <div className="card-number">
                  <p>04</p>
                </div>

                <div className="card-text">
                  <p>Analyze non-relational data using HBase,
                     Cassandra, and MongoDB.</p>
                </div>
              </div>
              </div>
            </div>
            <div className="learn-img">
              <img src={learn} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='chapter-section'>
        <div className="container">
          <h2 className='chapter-title'>The Chapter Includes</h2>
          <div className="chapter-wrap">
            <div className="chapter-cards cards1">
            <div className="chapter-card">
              <h3>Chapter- 01   Get Started Intro</h3>
              <p>Making this the first true value generator on
                 the Internet. It of over 200 Latin words, combined
                  with a handful.</p>

                  <div className="chapter-bottom">
                    <div className="pages">
                      <p id='title'>Pages: </p>
                      <p id='text'>85pages</p>
                    </div>
                    <div className="length">
                      <p id='title'>Length : </p>
                      <p id='text'>1 Hour 15 mins</p>
                    </div>
                  </div>
            </div>
            <div className="chapter-card">
              <h3>Chapter- 02   Create a Massive Content</h3>
              <p>Making this the first true value generator on
                 the Internet. It of over 200 Latin words, combined
                  with a handful.</p>

                  <div className="chapter-bottom">
                    <div className="pages">
                      <p id='title'>Pages: </p>
                      <p id='text'>85pages</p>
                    </div>
                    <div className="length">
                      <p id='title'>Length : </p>
                      <p id='text'>1 Hour 15 mins</p>
                    </div>
                  </div>
            </div>
            </div>
            <div className="chapter-cards">
            <div className="chapter-card">
              <h3>Chapter- 03   Maintaining the Creative Arcs</h3>
              <p>Making this the first true value generator on
                 the Internet. It of over 200 Latin words, combined
                  with a handful.</p>

                  <div className="chapter-bottom">
                    <div className="pages">
                      <p id='title'>Pages: </p>
                      <p id='text'>85pages</p>
                    </div>
                    <div className="length">
                      <p id='title'>Length : </p>
                      <p id='text'>1 Hour 15 mins</p>
                    </div>
                  </div>
            </div>
            <div className="chapter-card">
              <h3>Chapter- 04   The Conclusion</h3>
              <p>Making this the first true value generator on
                 the Internet. It of over 200 Latin words, combined
                  with a handful.</p>

                  <div className="chapter-bottom">
                    <div className="pages">
                      <p id='title'>Pages: </p>
                      <p id='text'>85pages</p>
                    </div>
                    <div className="length">
                      <p id='title'>Length : </p>
                      <p id='text'>1 Hour 15 mins</p>
                    </div>
                  </div>
            </div>
            </div>
          </div>

          <div className="chapter-bottom-btn">
            <div className="chapter-btn">
              <button>Start a 15-Days Free Trail</button>
            </div>

            <div className="bottom-p">
              <p>Short description about each chapter <br />
              <a href=""> Have any questions?</a> Contact us</p>
            </div>
          </div>
        </div>
      </section>

      <section className='readers-section'>
        <div className="container">
          <div className="readers-wrap">
            <div className="readers-text">
              <h2 className='readers-title'>What Readers Say About 
                the Book</h2>
              <p className='readers-p'>If you are going to use a passage of Lorem Ipsum, 
                you need to be sure there isn't anything embarrassing 
                hidden in the middle of text. All the Lorem Ipsum 
                generators.</p>
                <div className="star-rating">
                  <div class="rating">
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot half"></span>
                    <span class="score">(4.8/5)</span>
                </div>
                <p className='btm-p'>Overall Customer Ratings</p>
                </div>
                
            </div>

            <div className="readers-card-wrap">
              <div className="reader-card">
                <div className="profile">
                  <img src={readers1} alt="" />
                  <div className="rating-name">
                  <h3 className='profile-name'>Martin Philips</h3>
                  <div class="rating-card">
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot half"></span>
                </div>
                  </div>
                </div>

                <div className="reader-card-text">
                <h2 className='profile-title'>
                “ Awesome Impact ”
                </h2>
                <p>All the Lorem Ipsum generators on the 
                  Internet tend to repeat willings predefined 
                  chunks value.</p>
                </div>
              </div>
              <div className="reader-card">
                <div className="profile">
                  <img src={readers2} alt="" />
                  <div className="rating-name">
                  <h3 className='profile-name'>James Anderson</h3>
                  <div class="rating-card">
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot half"></span>
                </div>
                  </div>
                </div>

                <div className="reader-card-text">
                <h2 className='profile-title'>
                  “ Mind Blowing Words ”
                </h2>
                <p>All the Lorem Ipsum generators on the 
                  Internet tend to repeat willings predefined 
                  chunks value.</p>
                </div>
              </div>
              <div className="reader-card">
                <div className="profile">
                  <img src={readers3} alt="" />
                  <div className="rating-name">
                  <h3 className='profile-name'>Christina Louis</h3>
                  <div class="rating-card">
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot full"></span>
                    <span class="dot half"></span>
                </div>
                  </div>
                </div>

                <div className="reader-card-text">
                <h2 className='profile-title'>
                “ Great Books Collections ”
                </h2>
                <p>All the Lorem Ipsum generators on the 
                  Internet tend to repeat willings predefined 
                  chunks value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='articles-section'>
        <div className="container">
          <h2 className='articles-title'>Articles & Resources</h2>
          <div className="articles-card-wrapper">
            <div className="articles-card">
              <div className="articles-img">
                <img src={articles1} alt="" />
              </div>

              <div className="articles-text">
                <h3>The energy efficiency offers hydrotherapy or swim</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="articles-btm-text">
                    <div className="btm-txt">
                      <p id='read'>Read more</p>
                    </div>
                    <div className="btm-txt">
                      <p id='aut'>Author - 23.05.2022</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="articles-card">
              <div className="articles-img">
                <img id='art2' src={articles2} alt="" />
              </div>

              <div className="articles-text">
                <h3 className='txt2'>Release of Letraset sheets tools containing  passages</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="articles-btm-text">
                    <div className="btm-txt">
                      <p id='read'>Read more</p>
                    </div>
                    <div className="btm-txt">
                      <p id='aut'>Author - 23.05.2022</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="articles-card">
              <div className="articles-img">
                <img src={articles3} alt="" />
              </div>

              <div className="articles-text">
                <h3>The energy efficiency offers hydrotherapy or swim</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="articles-btm-text">
                    <div className="btm-txt">
                      <p id='read'>Read more</p>
                    </div>
                    <div className="btm-txt">
                      <p id='aut'>Author - 23.05.2022</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
