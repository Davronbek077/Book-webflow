import React from "react";
import { Link } from "react-router-dom";

const books = [
  { id: 1, name: "Atomic One’s", price: 23.89, image: "/images/book1.jpg" },
  { id: 2, name: "The Dark Forest", price: 19.99, image: "/images/book2.jpg" },
  { id: 3, name: "Project Hail Mary", price: 29.5, image: "/images/book3.jpg" },
];

const BookCard = () => {
  return (
    <div style={{ display: "flex", gap: "30px", padding: "40px" }}>
      {books.map((book) => (
        <div
          key={book.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "220px",
          }}
        >
          <img
            src={book.image}
            alt={book.name}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3>{book.name}</h3>
          <p>${book.price}</p>
          <Link to={`/book/${book.id}`}>
            <button style={{ padding: "8px 16px", cursor: "pointer" }}>
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
