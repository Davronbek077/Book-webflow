import React from "react";
import { useParams, Link } from "react-router-dom";
import img1 from "../assets/articles1.png";
import img2 from "../assets/articles2.png";
import img3 from "../assets/articles3.png";
import img4 from "../assets/blogCard1.png";
import img5 from "../assets/blogCard2.png";
import img6 from "../assets/blogCard3.png";
import img7 from "../assets/blogCard4.png";
import img8 from "../assets/blogCard5.png";
import img9 from "../assets/blogCard6.png";
import "./CardDetail.css";

const images = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
};

const CardDetail = () => {
  const { id } = useParams();
  const image = images[id];

  return (
    <div className="detail">
      <section className='detail-banner-section'>
            <div className="container">
            <h2>Significant reading has more info number</h2>
            </div>
        </section>
      <div className="detail-wrap">
      {image ? (
        <>
          <img src={image} alt="Blog" className="detail-img" />

          <div className="detail-content">
            <h3 className="detail-date">October 6, 2021 / Classics</h3>

            <p className="detail-text">
            There are many variations of passages of Lorem Ipsum available, but the majorithave suffered alteration in some form, 
            by injected humour, or randomised words whicdon't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
            need to be sure there isn't anything embarrassing hidden in the middle of text. All thLorem Ipsum generators on the Internet tend.
            </p>

            <h2 className="detail-title">The perfect book for all</h2>

            <p className="datail-text2">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has less normal distribution of letters, as opposed.
            </p>

            <ul className="detail-list">
              <li>It has roots in a piece of classical Latin literature from 45 BC,</li>
              <li>To generate Lorem Ipsum which looks reasonable</li>
              <li>The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet”</li>
            </ul>

            <div className="quote-box">
              <p>
                “Crowdsourcer term sheet freemium beta stealth responsive web design niche market rockstar channels.”
              </p>
            </div>

            <h2 className="detail-title2">The perfect book for all</h2>

            <p className="detail-last-text">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has less normal distribution of letters.
            </p>

            <ol className="detail-ol">
              <li>It has roots in a piece of classical Latin literature from 45 BC,</li>
              <li>To generate Lorem Ipsum which looks reasonable</li>
              <li>The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet”</li>
              <li>Be standard chunk of Lorem used since the 1500s</li>
            </ol>
          </div>
        </>
      ) : (
        <p>Rasm topilmadi</p>
      )}
      </div>
    </div>
  );
};

export default CardDetail;
