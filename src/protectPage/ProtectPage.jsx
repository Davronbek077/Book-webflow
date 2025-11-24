import React, { useState } from "react";
import "./ProtectPage.css";

const ProtectedPage = ({ onAccess }) => {
  const [password, setPassword] = useState("");
  const[error, setError] = useState("")
  const correctPassword = "1153";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setError("");
      onAccess();
    } else {
      setError("Parol noto'gri!");
    }
  };

  return (
    <section className="protected-section">
      <div className="protected-wrap">
      <h1 className="protected-title">Password Protected</h1>
      <p className="protected-desc">
        This page is password protected. If you are the website admin, or have access to this page, please type your password below.
      </p>

      <form onSubmit={handleSubmit} className="protected-form">
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="protected-input"
        />
        <button type="submit" className="protected-button">
          Submit
        </button>
        {error && <p className="error-text">{error}</p> }
      </form>
      </div>
    </section>
  );
};

export default ProtectedPage;
