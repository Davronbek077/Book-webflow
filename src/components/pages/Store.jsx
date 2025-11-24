import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";
import { books } from "../../data/BooksData";

const Store = () => {
  return (
    <div className="store">
      <section className="store-banner-section">
        <div className="container">
          <h2>My Store</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            have suffered alteration in some form.
          </p>
        </div>
      </section>

      <section className="store-books-section">
        <div className="container">
          {books.map((book) => (
            <div key={book.id} className="store-book">
              <div className="store-book-img">
                <img src={book.image} alt={book.name} />
              </div>

              <div className="store-book-text">
                <div className="book-name">
                  <h3 id="name">{book.name}</h3>
                  <h3 id="price">{book.price}</h3>
                </div>

                <div className="book-info">
                  <p>{book.description}</p>
                  <h3>Printed Books</h3>
                </div>

                <div className="book-button">
                  <Link to={`/book/${book.id}`}>
                    <button>Order Today</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="free-chapter">
        <section className="free-chapter-section">
          <div className="container">
            <h2 className="free-chapter-title">Read a free chapter</h2>

            <div className="free-chapter-wrap">
              <p>
                Making this the first true value generator on the Internet. It
                of over 200 Latin words, combined with a handful.
              </p>
            </div>
            <div className="chapter-input">
              <input type="text" placeholder="Your Email id..." />
              <button>Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Store;
