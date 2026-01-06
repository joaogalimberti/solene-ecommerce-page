import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const frete = subtotal >= 500 ? 0 : 49.90;
  const total = subtotal + frete;

  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-wrapper">
        <div className="container">
          <div className="empty-cart-content">
            <span className="empty-label">Sua sacola</span>
            <h2 className="empty-title text-serif">Está vazia</h2>
            <p className="empty-text">Inspire-se e encontre algo que combine com você.</p>
            <Link to="/" className="btn-shop-now">Voltar para a loja</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-new">
      <div className="container">
        <header className="cart-page-header">
          <h1 className="text-serif">Sua Sacola</h1>
          <span className="item-count">({cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'})</span>
        </header>

        <div className="cart-grid">
          {/* LISTA DE PRODUTOS */}
          <section className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <div className="item-image-container">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="item-info-container">
                  <div className="item-header">
                    <div>
                      <h3 className="item-name text-serif">{item.name}</h3>
                      <div className="item-meta">
                        {item.selectedSize && <span>Tamanho: {item.selectedSize}</span>}
                        {item.color && <span>Cor: {item.color}</span>}
                      </div>
                    </div>
                    <button className="btn-remove-minimal" onClick={() => removeFromCart(item.id)}>
                      Remover
                    </button>
                  </div>

                  <div className="item-footer">
                    <div className="qty-selector">
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <span className="item-price-total">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* RESUMO FIXO */}
          <aside className="cart-summary-fixed">
            <div className="summary-box">
              <h2 className="summary-title text-serif">Resumo</h2>

              <div className="summary-rows">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="summary-row">
                  <span>Entrega</span>
                  <span className={frete === 0 ? "free-shipping-text" : ""}>
                    {frete === 0 ? "Grátis" : formatPrice(frete)}
                  </span>
                </div>
              </div>

              {subtotal < 500 && (
                <div className="shipping-progress-bar">
                  <p>Faltam <strong>{formatPrice(500 - subtotal)}</strong> para <strong>Frete Grátis</strong></p>
                  <div className="progress-bg">
                    <div className="progress-fill" style={{ width: `${(subtotal / 500) * 100}%` }}></div>
                  </div>
                </div>
              )}

              <div className="summary-divider"></div>

              <div className="summary-total-row">
                <span>Total</span>
                <span className="total-amount">{formatPrice(total)}</span>
              </div>

              <button className="btn-checkout-premium">Finalizar Compra</button>

              <div className="security-badges">
                <p>🔒 Pagamento 100% Processado de forma segura</p>
                <p>🔄 30 dias para trocas e devoluções</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;