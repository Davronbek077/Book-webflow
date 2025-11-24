import React from 'react'
import "./ChapterCard.css"

const ChapterCard = () => {
  return (
    <div className='free-chapter'>
      <section className='free-chapter-section'>
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
  )
}

export default ChapterCard
