import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    /* Adicionamos o basename para o Router saber que o site começa após /solene-ecommerce-page/ */
    <Router>
      <Header cartCount={totalItems} />

      <main style={{ minHeight: '80vh' }}>
        <Routes>
          {/* O path continua "/" porque o Router já entende o basename da URL */}
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
          {/* Rota de fallback: se o usuário digitar algo errado, volta para a Home */}
          <Route path="*" element={<Home addToCart={addToCart} />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;