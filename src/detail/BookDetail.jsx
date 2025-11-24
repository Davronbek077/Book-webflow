import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { books } from "../data/booksData";
import { FiShoppingCart } from "react-icons/fi";
import detailPng from "../assets/detailService.png";
import detailPng2 from "../assets/detailService2.png";
import detailPng3 from "../assets/detailService3.png";
import "./BookDetail.css";

const BookDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!book) {
    return (
      <div className="book-detail not-found">
        <h2>Book not found</h2>
        <Link to="/store" className="back-link">
          ← Back to Store
        </Link>
      </div>
    );
  }

  const handleAddClick = () => {
    onAddToCart(book, quantity);
  };

  return (
    <div className="book-detail">
      <div className="container">
        <div className="book-detail-top">
          <div className="book-image">
            <img src={book.image} alt={book.name} />
          </div>

          <div className="book-info">
            <h2>The {book.name}</h2>
            <h3 className="price">
              {book.price} <span>USD</span>
            </h3>
            <p className="desc">
              Making this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum.
            </p>

            <ul className="details-list">
              <li>
                <span className="label">Publisher</span>
                <span className="colon">:</span>
                <span className="value">
                  Learning Private Limited (1 January 2021)
                </span>
              </li>
              <li>
                <span className="label">Language</span>
                <span className="colon">:</span>
                <span className="value">English</span>
              </li>
              <li>
                <span className="label">Paperback</span>
                <span className="colon">:</span>
                <span className="value">212 pages</span>
              </li>
              <li>
                <span className="label">ISBN-10</span>
                <span className="colon">:</span>
                <span className="value">9788120345799</span>
              </li>
              <li>
                <span className="label">Dimensions</span>
                <span className="colon">:</span>
                <span className="value">20 × 14 × 4 cm</span>
              </li>
            </ul>

            <div className="cart-actions">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button className="add-cart-btn" onClick={handleAddClick}>
                <div className="add-btn-icon">
                  <FiShoppingCart
                    style={{ strokeWidth: 2.2, width: 15, fontSize: 18 }}
                  />
                </div>{" "}
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="book-tabs">
          <button className="tab active">PRODUCT DESCRIPTION</button>
          <button className="tab">ADDITIONAL INFO</button>
        </div>

        <div className="tab-content">
          <div className="tab-section">
            <h3>Do you offer discounts for education?</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, bypassed
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>

          <div className="tab-section">
            <h3>Is this book for me?</h3>
            <p>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary.
            </p>
          </div>
        </div>
      </div>

      <div className="book-detail-services">
        <div className="container">
          <div className="detail-service">
            <div className="detail-service-img">
              <img src={detailPng} alt="" />
            </div>
            <div className="detail-service-text">
              <h3>Secure Payments</h3>
              <p>
                There are many variations of passages of alteration in some
                form.
              </p>
            </div>
          </div>

          <div className="detail-service">
            <div className="detail-service-img">
              <img src={detailPng2} alt="" />
            </div>
            <div className="detail-service-text">
              <h3>Free Shipping</h3>
              <p>
                There are many variations of passages of alteration in some
                form.
              </p>
            </div>
          </div>

          <div className="detail-service">
            <div className="detail-service-img">
              <img src={detailPng3} alt="" />
            </div>
            <div className="detail-service-text">
              <h3>100% Satisfactions</h3>
              <p>
                There are many variations of passages of alteration in some
                form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
