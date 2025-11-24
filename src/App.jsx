import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ChapterCard from "./components/chapterCard/ChapterCard";
import Footer from "./components/footer/Footer";
import Store from "./components/pages/Store";
import Blog from "./components/pages/Blog";
import Licenses from "./components/pages/Licenses";
import Changelog from "./components/pages/changelog";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import BookDetail from "./detail/BookDetail";
import CardDetail from "./detail/CardDetail";
import ProtectedPage from "./protectPage/ProtectPage";
import NotFound from "./notFound/NotFound";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);

      const totalQty = parsedCart.reduce((sum, item) => sum + item.qty, 0);
      setCartCount(totalQty);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      let updatedItems;
      if (existingItem) {
        updatedItems = prevItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item
        );
      } else {
        updatedItems = [...prevItems, { ...product, qty: quantity }];
      }
      return updatedItems;
    });
    setCartCount((prev) => prev + quantity);
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => {
      const removedItem = prevItems.find((item) => item.id === id);
      if (removedItem) {
        setCartCount((prev) => prev - removedItem.qty);
      }
      const updated = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };

  const handleQtyChange = (id, newQty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: newQty > 0 ? newQty : 1 } : item
      )
    );
  };

  return (
    <>
      {!isAuthorized ? (
        <ProtectedPage onAccess={() => setIsAuthorized(true)} />
      ) : (
        <>
          <Navbar
            cartCount={cartCount}
            cartItems={cartItems}
            onRemoveFromCart={handleRemoveItem}
            onQtyChange={handleQtyChange}
          />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <ChapterCard />
                </>
              }
            />
            <Route path="/store" element={<Store />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/licenses" element={<Licenses />} />
            <Route path="/changelog" element={<Changelog/>} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/book/:id"
              element={<BookDetail onAddToCart={handleAddToCart} />}
            />
            <Route path="/card/:id" element={<CardDetail />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
