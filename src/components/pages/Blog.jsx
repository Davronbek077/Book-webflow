import React from 'react'
import "./Pages.css"
import articles1 from "../../assets/articles1.png"
import articles2 from "../../assets/articles2.png"
import articles3 from "../../assets/articles3.png"
import blogCard1 from "../../assets/blogCard1.png"
import blogCard2 from "../../assets/blogCard2.png"
import blogCard3 from "../../assets/blogCard3.png"
import blogCard4 from "../../assets/blogCard4.png"
import blogCard5 from "../../assets/blogCard5.png"
import blogCard6 from "../../assets/blogCard6.png"
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='blog'>
      <section className='blog-banner-section'>
            <div className="container">
            <h2>Articles</h2>
            <p>There are many variations of passages of Lorem Ipsum available,  
              have suffered alteration in some form.</p>
            </div>
        </section>
        <section className='blog-cards-section'>
          <div className="container">
          <div className="blog-card-wrapper">
            <div className="blog-card">
              <div className="blog-img">
                <Link to="/card/1">
                 <img src={articles1} alt="" />
                 </Link>
              </div>

              <div className="blog-text">
                <h3>The energy efficiency offers hydrotherapy or swim</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="blog-btm-text">
                    <div className="btm-txt">
                      <p id='read'>Read more</p>
                    </div>
                    <div className="btm-txt">
                      <p id='aut'>Author - 23.05.2022</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
              <Link to="/card/2">
                 <img src={articles2} alt="" />
                 </Link>
              </div>

              <div className="blog-text">
                <h3 className='txt2'>Release of Letraset sheets tools containing  passages</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="blog-btm-text">
                    <div className="btm-txt">
                      <p id='read'>Read more</p>
                    </div>
                    <div className="btm-txt">
                      <p id='aut'>Author - 23.05.2022</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
              <Link to="/card/3">
                 <img src={articles3} alt="" />
                 </Link>
              </div>

              <div className="blog-text">
                <h3>The energy efficiency offers hydrotherapy or swim</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="blog-btm-text">
                    <div className="btm-txt">
                      <p id='read'>Read more</p>
                    </div>
                    <div className="btm-txt">
                      <p id='aut'>Author - 23.05.2022</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
              <Link to="/card/4">
                 <img src={blogCard1} alt="" />
                 </Link>
              </div>

              <div className="blog-text">
                <h3>The energy efficiency offers hydrotherapy or swim</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="blog-btm-text">
                    <div className="btm-txt">
                      <p id='read'>Read more</p>
                    </div>
                    <div className="btm-txt">
                      <p id='aut'>Author - 23.05.2022</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
              <Link to="/card/5">
                 <img src={blogCard2} alt="" />
                 </Link>
              </div>

              <div className="blog-text">
                <h3>Release of Letraset sheets tools containing  passages</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="blog-btm-text">
                    <div className="btm-txt">
                      <p id='read'>Read more</p>
                    </div>
                    <div className="btm-txt">
                      <p id='aut'>Author - 23.05.2022</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
              <Link to="/card/6">
                 <img src={blogCard3} alt="" />
                 </Link>
              </div>

              <div className="blog-text">
                <h3>The energy efficiency offers hydrotherapy or swim</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="blog-btm-text">
                    <div className="btm-txt">
                      <p id='read'>Read more</p>
                    </div>
                    <div className="btm-txt">
                      <p id='aut'>Author - 23.05.2022</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
              <Link to="/card/7">
                 <img src={blogCard4} alt="" />
                 </Link>
              </div>

              <div className="blog-text">
                <h3>The energy efficiency offers hydrotherapy or swim</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="blog-btm-text">
                    <div className="btm-txt">
                      <p id='read'>Read more</p>
                    </div>
                    <div className="btm-txt">
                      <p id='aut'>Author - 23.05.2022</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
              <Link to="/card/8">
                 <img src={blogCard5} alt="" />
                 </Link>
              </div>

              <div className="blog-text">
                <h3>Release of Letraset sheets tools containing  passages</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="blog-btm-text">
                    <div className="btm-txt">
                      <p id='read'>Read more</p>
                    </div>
                    <div className="btm-txt">
                      <p id='aut'>Author - 23.05.2022</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
              <Link to="/card/9">
                 <img src={blogCard6} alt="" />
                 </Link>
              </div>

              <div className="blog-text">
                <h3>The energy efficiency offers hydrotherapy or swim</h3>
                <p>The point of using Lorem Ipsum hiter of that using making it 
                  look like others readable will get end.</p>

                  <div className="blog-btm-text">
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

export default Blog
